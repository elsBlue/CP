import type { CSSProperties } from "react";
import { FORMATION_CELLS } from "@/lib/e7/formation";
import { CLASS_LABEL, ELEMENT_LABEL } from "@/lib/e7/heroes";
import { getHero } from "@/lib/e7/catalog";
import type { Hero } from "@/lib/e7/types";
import { cn } from "@/lib/utils";

const WASH: Record<Hero["element"], string> = {
  fire: "bg-fire/20",
  ice: "bg-ice/20",
  earth: "bg-earth/20",
  light: "bg-light/18",
  dark: "bg-dark/22",
};

const GAP = 10;

function initials(hero: Hero) {
  const parts = hero.short.split(/[.\s]+/).filter(Boolean);
  if (parts.length >= 2) return (parts[0]![0] + parts[1]![0]).toUpperCase();
  return hero.short.slice(0, 2).toUpperCase();
}

function metrics(compact?: boolean) {
  const S = compact ? 40 : 68;
  const r = (S + GAP) / Math.SQRT2;
  const extent = r + S / Math.SQRT2;
  return { S, r, extent };
}

function vertexStyle(area: string, r: number): CSSProperties {
  const mid = "translate(-50%, -50%)";
  if (area === "left") return { left: "50%", top: `calc(50% - ${r}px)`, transform: mid };
  if (area === "back") return { left: `calc(50% - ${r}px)`, top: "50%", transform: mid };
  if (area === "front") return { left: `calc(50% + ${r}px)`, top: "50%", transform: mid };
  return { left: "50%", top: `calc(50% + ${r}px)`, transform: mid };
}

function DiamondFace({
  hero,
  sizePx,
}: {
  hero: Hero | undefined;
  sizePx: number;
}) {
  return (
    <div
      className={cn(
        "rotate-45 overflow-hidden rounded-[10px] bg-secondary shadow-[var(--shadow-border)]",
        hero && WASH[hero.element],
      )}
      style={{ width: sizePx, height: sizePx }}
      title={
        hero
          ? `${hero.name} · ${ELEMENT_LABEL[hero.element]} ${CLASS_LABEL[hero.class]}`
          : undefined
      }
    >
      <div className="flex size-full -rotate-45 scale-[1.42] items-center justify-center overflow-hidden">
        {hero?.icon ? (
          <img src={hero.icon} alt="" className="size-full object-cover object-center" />
        ) : hero ? (
          <span
            className={cn(
              "font-display font-medium tracking-tight text-foreground/90",
              sizePx <= 40 ? "text-xs" : "text-base",
            )}
          >
            {initials(hero)}
          </span>
        ) : (
          <span className="font-display text-lg leading-none text-muted-foreground">+</span>
        )}
      </div>
    </div>
  );
}

function outerVertex(area: string, sizePx: number): CSSProperties {
  const d = sizePx / Math.SQRT2;
  const mid = "translate(-50%, -50%)";
  if (area === "left") return { left: "50%", top: `calc(50% - ${d}px)`, transform: mid };
  if (area === "back") return { left: `calc(50% - ${d}px)`, top: "50%", transform: mid };
  if (area === "front") return { left: `calc(50% + ${d}px)`, top: "50%", transform: mid };
  return { left: "50%", top: `calc(50% + ${d}px)`, transform: mid };
}

function nameStyle(area: string, sizePx: number): CSSProperties {
  const d = sizePx / Math.SQRT2 + 14;
  if (area === "left") {
    return { left: "50%", top: `calc(50% - ${d}px)`, transform: "translate(-50%, -100%)" };
  }
  if (area === "back") {
    return { left: `calc(50% - ${d}px)`, top: "50%", transform: "translate(-100%, -50%)" };
  }
  if (area === "front") {
    return { left: `calc(50% + ${d}px)`, top: "50%", transform: "translate(0, -50%)" };
  }
  return { left: "50%", top: `calc(50% + ${d}px)`, transform: "translate(-50%, 0)" };
}

function Cell({
  hero,
  label,
  compact,
  area,
  sizePx,
  onClick,
  onClear,
}: {
  hero: Hero | undefined;
  label: string;
  compact?: boolean;
  area: string;
  sizePx: number;
  onClick?: () => void;
  onClear?: () => void;
}) {
  const face = <DiamondFace hero={hero} sizePx={sizePx} />;
  return (
    <div className="relative" style={{ width: sizePx, height: sizePx }}>
      {compact ? (
        face
      ) : (
        <button
          type="button"
          onClick={onClick}
          className="block [-webkit-tap-highlight-color:transparent]"
        >
          {face}
        </button>
      )}
      <span
        className={cn(
          "pointer-events-none absolute z-10 max-w-[4.5rem] truncate text-center leading-none whitespace-nowrap text-muted-foreground",
          compact ? "text-[10px]" : "text-xs",
        )}
        style={nameStyle(area, sizePx)}
      >
        {hero ? hero.short : label}
      </span>
      {hero && onClear ? (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClear();
          }}
          className="absolute z-20 flex size-5 items-center justify-center rounded-full bg-secondary text-[11px] leading-none text-muted-foreground hover:text-foreground"
          style={outerVertex(area, sizePx)}
          aria-label={`Clear ${hero.name}`}
        >
          ×
        </button>
      ) : null}
    </div>
  );
}

export function FormationBoard({
  ids,
  compact,
  onSlot,
  onClear,
}: {
  ids: string[];
  compact?: boolean;
  onSlot?: (index: number) => void;
  onClear?: (index: number) => void;
}) {
  const { S, r, extent } = metrics(compact);
  const side = compact ? 48 : 72;
  const box = extent * 2 + side;
  return (
    <div className="relative mx-auto" style={{ width: box, height: box }}>
      {FORMATION_CELLS.map((cell) => {
        const id = ids[cell.index] ?? "";
        const hero = id ? getHero(id) : undefined;
        return (
          <div key={cell.area} className="absolute z-10" style={vertexStyle(cell.area, r)}>
            <Cell
              hero={hero}
              label={cell.label}
              area={cell.area}
              compact={compact}
              sizePx={S}
              onClick={onSlot ? () => onSlot(cell.index) : undefined}
              onClear={hero && onClear ? () => onClear(cell.index) : undefined}
            />
          </div>
        );
      })}
    </div>
  );
}
