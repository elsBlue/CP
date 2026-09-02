import { useMemo, useState } from "react";
import { HeroPortrait } from "@/components/hero-portrait";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { searchHeroes } from "@/lib/e7/engine";
import { CLASS_LABEL, ELEMENT_LABEL } from "@/lib/e7/heroes";
import { useCatalog } from "@/lib/e7/catalog";
import { builtIds, useArenaStore } from "@/lib/e7/store";
import { cn } from "@/lib/utils";

type KitFilter = "all" | "verified" | "pending";

function kitDate(iso?: string): string | null {
  if (!iso) return null;
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

export function RosterView() {
  const roster = useArenaStore((s) => s.roster);
  const toggleBuilt = useArenaStore((s) => s.toggleBuilt);
  const loadPresetRoster = useArenaStore((s) => s.loadPresetRoster);
  const heroes = useCatalog((s) => s.heroes);
  const [query, setQuery] = useState("");
  const [onlyBuilt, setOnlyBuilt] = useState(false);
  const [kit, setKit] = useState<KitFilter>("all");
  const [confirmClear, setConfirmClear] = useState(false);

  const built = builtIds(roster);
  const verifiedN = heroes.filter((h) => h.verified).length;
  const builtVerified = built.filter((id) => heroes.find((h) => h.id === id)?.verified).length;

  const list = useMemo(() => {
    let pool = searchHeroes(query, heroes);
    if (onlyBuilt) pool = pool.filter((h) => roster[h.id]?.built);
    if (kit === "verified") pool = pool.filter((h) => h.verified);
    if (kit === "pending") pool = pool.filter((h) => !h.verified);
    return pool;
  }, [query, onlyBuilt, kit, roster, heroes]);

  return (
    <div className="flex flex-col gap-4">
      <header className="rise-in flex flex-col gap-1">
        <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
          Roster
        </p>
        <h1 className="font-display text-2xl leading-[1.15] tracking-tight sm:text-3xl">
          Your roster
        </h1>
        <p className="max-w-lg text-sm text-muted-foreground">
          Tap to mark built. That is a note of what you have — Scout does not require it.
          Turn on Only built units there if you want lineups from this list.
        </p>
      </header>

      <div className="grid grid-cols-4 gap-1.5">
        <StatChip label="Built" value={String(built.length)} />
        <StatChip label="Ready" value={String(builtVerified)} />
        <StatChip label="Verified" value={String(verifiedN)} />
        <StatChip label="Pending" value={String(heroes.length - verifiedN)} />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-1.5">
          {confirmClear ? (
            <>
              <p className="w-full text-sm text-muted-foreground">
                Clear all built marks? This cannot be undone.
              </p>
              <Button
                size="sm"
                variant="ghost"
                className="h-8 px-2.5 text-xs"
                onClick={() => setConfirmClear(false)}
              >
                Cancel
              </Button>
              <Button
                size="sm"
                variant="secondary"
                className="h-8 px-2.5 text-xs"
                onClick={() => {
                  loadPresetRoster("clear");
                  setConfirmClear(false);
                }}
              >
                Clear all
              </Button>
            </>
          ) : (
            <>
              <Button size="sm" variant="secondary" className="h-8 px-2.5 text-xs" onClick={() => loadPresetRoster("challenger")}>
                Full kit
              </Button>
              <Button size="sm" variant="secondary" className="h-8 px-2.5 text-xs" onClick={() => loadPresetRoster("starter")}>
                Starter
              </Button>
              <Button size="sm" variant="ghost" className="h-8 px-2.5 text-xs" onClick={() => setConfirmClear(true)}>
                Clear
              </Button>
            </>
          )}
        </div>
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search heroes…"
          className="h-10"
        />
        <div className="flex flex-wrap gap-1.5">
          <ToggleChip on={onlyBuilt} onClick={() => setOnlyBuilt((v) => !v)}>
            Built only
          </ToggleChip>
          {(
            [
              ["all", "All"],
              ["verified", "Verified"],
              ["pending", "Pending"],
            ] as const
          ).map(([id, label]) => (
            <ToggleChip key={id} on={kit === id} onClick={() => setKit(id)}>
              {label}
            </ToggleChip>
          ))}
        </div>
      </div>

      <ul className="flex flex-col gap-1">
        {list.map((hero) => {
          const builtOn = Boolean(roster[hero.id]?.built);
          const checked = kitDate(hero.checkedAt);
          return (
            <li key={hero.id}>
              <button
                type="button"
                onClick={() => toggleBuilt(hero.id)}
                aria-pressed={builtOn}
                className="grid min-h-14 w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 overflow-hidden rounded-xl bg-card px-3 py-2.5 text-left shadow-[var(--shadow-border)]"
              >
                <HeroPortrait hero={hero} size="sm" dimmed={!builtOn} />
                <span className="min-w-0">
                  <span className="block truncate text-sm font-medium">{hero.name}</span>
                  <span className="block truncate text-xs text-muted-foreground">
                    {ELEMENT_LABEL[hero.element]} {CLASS_LABEL[hero.class]}
                    {hero.verified
                      ? ` · in-game verified${checked ? ` ${checked}` : ""}`
                      : " · kit pending"}
                  </span>
                </span>
                <span
                  className={cn(
                    "inline-flex h-11 min-w-24 items-center justify-center rounded-full px-3 text-xs font-medium tracking-wide uppercase",
                    builtOn
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground",
                  )}
                >
                  {builtOn ? "Built" : "Not built"}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function StatChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-card px-2 py-1.5 shadow-[var(--shadow-border)]">
      <p className="text-[10px] tracking-wide text-muted-foreground uppercase">{label}</p>
      <p className="font-mono text-base tabular-nums leading-tight">{value}</p>
    </div>
  );
}

function ToggleChip({
  on,
  onClick,
  children,
}: {
  on: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-8 shrink-0 rounded-md px-2.5 text-xs shadow-[var(--shadow-border)]",
        on ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground",
      )}
    >
      {children}
    </button>
  );
}
