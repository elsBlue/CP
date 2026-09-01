import { useRef, useState } from "react";
import { ChevronDown, Info } from "lucide-react";
import { HeroRow } from "@/components/e7/hero-line";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { winRate } from "@/lib/e7/stats";
import type { CounterTeam } from "@/lib/e7/types";
import { cn } from "@/lib/utils";

export function CounterCard({
  team,
  selected,
  onSelect,
  record,
  result,
}: {
  team: CounterTeam;
  selected: boolean;
  onSelect: () => void;
  record?: { n: number; wins: number };
  result?: {
    note: string;
    onNote: (value: string) => void;
    onRecord: (won: boolean) => void;
  };
}) {
  const slots = Math.round(team.coverage * 4);
  const rate = record ? winRate(record.wins, record.n) : null;
  const [gapInfo, setGapInfo] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  function toggle() {
    const top = rootRef.current?.getBoundingClientRect().top ?? 0;
    onSelect();
    const pin = () => {
      const el = rootRef.current;
      if (!el) return;
      const dy = el.getBoundingClientRect().top - top;
      if (Math.abs(dy) > 0.5) window.scrollBy(0, dy);
    };
    requestAnimationFrame(() => {
      pin();
      requestAnimationFrame(pin);
    });
  }

  return (
    <Card
      ref={rootRef}
      className={cn(
        "overflow-hidden [overflow-anchor:none] transition-[box-shadow] duration-200",
        selected ? "shadow-[var(--shadow-border-hover)]" : "",
      )}
    >
      <div
        role="button"
        tabIndex={0}
        aria-expanded={selected}
        onPointerDown={(e) => {
          if (e.button === 0) e.preventDefault();
        }}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
        className="w-full cursor-pointer p-4 text-left [-webkit-tap-highlight-color:transparent] outline-none sm:p-5"
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="font-display text-lg tracking-tight">{team.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {selected ? "Hide setup" : "Tap for setup"}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <div className="text-right">
                <p className="font-mono text-lg tabular-nums leading-none">{slots}/4</p>
                <p className="mt-1 text-xs tracking-wider text-muted-foreground uppercase">Filled</p>
              </div>
              <ChevronDown
                className={cn(
                  "size-5 text-muted-foreground transition-transform duration-300 ease-[var(--ease-smooth-out)]",
                  selected ? "rotate-180" : "rotate-0",
                )}
                strokeWidth={1.75}
                aria-hidden
              />
            </div>
          </div>
          <HeroRow ids={team.heroIds} />
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-1.5 px-4 pb-4 sm:px-5">
        {team.theorycraft ? (
          <Badge variant="outline">Catalog</Badge>
        ) : (
          <Badge variant="steel">Your roster</Badge>
        )}
        {team.missing.map((m) => (
          <Badge key={m} variant="loss">
            No {m}
          </Badge>
        ))}
        {team.gaps.map((g) => (
          <Tooltip
            key={g}
            open={gapInfo === g}
            onOpenChange={(open) => setGapInfo(open ? g : null)}
          >
            <TooltipTrigger asChild>
              <button
                type="button"
                className="inline-flex [-webkit-tap-highlight-color:transparent]"
                aria-label={`About no ${g}`}
              >
                <Badge variant="loss" className="gap-1 pr-2">
                  No {g}
                  <Info className="size-3 shrink-0" strokeWidth={2.25} />
                </Badge>
              </button>
            </TooltipTrigger>
            <TooltipContent side="top" align="start" className="max-w-[16rem] leading-relaxed">
              {gapHint(g)}
            </TooltipContent>
          </Tooltip>
        ))}
        {record && record.n > 0 ? (
          <Badge variant={rate !== null && rate >= 50 ? "win" : "outline"}>
            {record.wins}W {record.n - record.wins}L
          </Badge>
        ) : null}
      </div>
      <div className="counter-fold" data-open={selected ? "true" : "false"}>
        <div>
          <CardContent className="flex flex-col gap-4 border-t border-border px-4 pt-4 pb-5 sm:px-5">
            <Block label="Wincon" text={team.wincon} />
            {team.why.length > 0 ? (
              <div>
                <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                  Why this team
                </p>
                <ul className="mt-1 flex flex-col gap-1">
                  {team.why.map((line) => (
                    <li key={line} className="text-sm leading-relaxed text-muted-foreground">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {result ? (
              <div className="flex flex-col gap-3">
                <div className="flex items-baseline justify-between gap-2">
                  <Label htmlFor={`match-note-${team.recipeId}`}>After the fight</Label>
                  <span className="text-sm text-muted-foreground">Saved to your account</span>
                </div>
                <Input
                  id={`match-note-${team.recipeId}`}
                  value={result.note}
                  onChange={(e) => result.onNote(e.target.value)}
                  placeholder="Optional note"
                />
                <div className="grid grid-cols-2 gap-2">
                  <Button className="h-12" onClick={() => result.onRecord(true)}>
                    Won
                  </Button>
                  <Button className="h-12" variant="secondary" onClick={() => result.onRecord(false)}>
                    Lost
                  </Button>
                </div>
              </div>
            ) : null}
            <Block label="Setup" text={team.setup} />
            {team.pitfalls.length > 0 ? (
              <div>
                <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                  Breaks if
                </p>
                <ul className="mt-1 flex flex-col gap-1">
                  {team.pitfalls.slice(0, 3).map((p) => (
                    <li key={p} className="text-sm leading-relaxed text-foreground/90">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </CardContent>
        </div>
      </div>
    </Card>
  );
}

function gapHint(label: string): string {
  if (label === "Offering") {
    return "This draft has no unit that ignores Offering. Seventy percent of damage is still shared onto the front.";
  }
  if (label === "Forced targeting") {
    return "This draft has no area attack. Single-target skills still have to hit her.";
  }
  if (label === "Revive / reset") {
    return "This draft has no anti-revive. A kill can still reset.";
  }
  if (label === "Evasion") {
    return "This draft has no answer to miss. Single-target third skills still fail often.";
  }
  if (label === "Speed cap") {
    return "This draft has no injury plan. You cannot outrun the first cycle.";
  }
  return `This draft does not answer ${label}. The wall's kit still applies.`;
}

function Block({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase">{label}</p>
      <p className="mt-1 text-sm leading-relaxed">{text}</p>
    </div>
  );
}
