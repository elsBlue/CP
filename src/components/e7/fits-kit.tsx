import {
  fitKit,
  layoutLabel,
  layoutPieces,
  LOADOUT_DISCLAIMER,
  optionChangesPlay,
  type SetLayout,
} from "@/lib/e7/loadout";
import { GEAR_SETS } from "@/lib/e7/gear-sets";
import type { Hero } from "@/lib/e7/types";
import { cn } from "@/lib/utils";

export function FitsKit({ hero }: { hero: Hero }) {
  const loadout = fitKit(hero);
  return (
    <section className="flex flex-col gap-4">
      <div>
        <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">Fits this kit</p>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{LOADOUT_DISCLAIMER}</p>
      </div>

      <LayoutBlock title="Sets" layout={loadout.primary} />
      <LayoutBlock title="Alt" layout={loadout.alt} muted />

      <div className="border-t border-border/80 pt-3">
        <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">Artifact</p>
        <ul className="mt-2 flex flex-col gap-2">
          {loadout.artifacts.map((art) => (
            <li key={art.id}>
              <p className="text-sm">{art.name}</p>
              <p className="text-xs leading-relaxed text-muted-foreground">{art.note}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-border/80 pt-3">
        <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">Exclusive equipment</p>
        {loadout.ee ? (
          <div className="mt-2">
            <p className="text-sm">{loadout.ee.name}</p>
            {loadout.ee.options.length ? (
              <ul className="mt-2 flex flex-col gap-2">
                {loadout.ee.options.map((opt, i) => {
                  const play = optionChangesPlay(opt.effect);
                  return (
                    <li key={`${opt.skill}-${i}`} className="text-xs leading-relaxed">
                      <span className="text-foreground">{opt.skill}</span>
                      {play ? (
                        <span className="text-muted-foreground"> · changes the skill</span>
                      ) : null}
                      <span className="mt-0.5 block text-muted-foreground">{opt.effect}</span>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="mt-1 text-xs text-muted-foreground">No clean option text on file.</p>
            )}
          </div>
        ) : (
          <p className="mt-2 text-xs text-muted-foreground">No exclusive equipment on this unit.</p>
        )}
      </div>
    </section>
  );
}

function LayoutBlock({
  title,
  layout,
  muted,
}: {
  title: string;
  layout: SetLayout;
  muted?: boolean;
}) {
  const pieces = layoutPieces(layout);
  return (
    <div>
      <p className={cn("text-sm", muted && "text-muted-foreground")}>
        <span className="text-xs tracking-[0.16em] text-muted-foreground uppercase">{title}</span>
        <span className="mt-0.5 block">{layoutLabel(layout)}</span>
      </p>
      <div className="mt-2 flex gap-1">
        {pieces.map((piece, i) => (
          <span
            key={`${piece.set}-${i}`}
            title={piece.name}
            className={cn(
              "h-0.5 flex-1",
              i > 0 && piece.set !== pieces[i - 1]?.set ? "ml-1" : "",
              muted ? "bg-border" : "bg-foreground/70",
            )}
          />
        ))}
      </div>
      {layout.kind === "4+2" ? (
        <p className="mt-1 text-xs text-muted-foreground">{GEAR_SETS[layout.four].effect}</p>
      ) : null}
    </div>
  );
}
