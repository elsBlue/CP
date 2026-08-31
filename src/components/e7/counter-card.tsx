import { HeroRow } from "@/components/e7/hero-line";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

  return (
    <Card
      className={cn(
        "transition-[box-shadow] duration-150",
        selected ? "shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-steel)_55%,transparent)]" : "",
      )}
    >
      <button type="button" onClick={onSelect} className="w-full p-4 text-left sm:p-5">
        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="font-display text-lg tracking-tight">{team.name}</p>
            </div>
            <div className="shrink-0 text-right">
              <p className="font-mono text-lg tabular-nums leading-none">{slots}/4</p>
              <p className="mt-1 text-xs tracking-wider text-muted-foreground uppercase">Filled</p>
            </div>
          </div>
          <HeroRow ids={team.heroIds} />
          <div className="flex flex-wrap gap-1.5">
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
            {record && record.n > 0 ? (
              <Badge variant={rate !== null && rate >= 50 ? "win" : "outline"}>
                {record.wins}W {record.n - record.wins}L
              </Badge>
            ) : null}
          </div>
        </div>
      </button>
      {selected ? (
        <CardContent className="flex flex-col gap-4 border-t border-border px-4 pt-4 pb-5 sm:px-5">
          <Block label="Wincon" text={team.wincon} />
          {result ? (
            <div className="flex flex-col gap-3">
              <div className="flex items-baseline justify-between gap-2">
                <Label htmlFor="match-note">After the fight</Label>
                <span className="text-sm text-muted-foreground">Saved to your account</span>
              </div>
              <Input
                id="match-note"
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
                {team.pitfalls.map((p) => (
                  <li key={p} className="text-sm leading-relaxed text-foreground/90">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </CardContent>
      ) : null}
    </Card>
  );
}

function Block({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase">{label}</p>
      <p className="mt-1 text-sm leading-relaxed">{text}</p>
    </div>
  );
}
