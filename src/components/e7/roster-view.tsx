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
    <div className="flex flex-col gap-6">
      <header className="rise-in flex flex-col gap-2">
        <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
          Roster
        </p>
        <h1 className="font-display text-3xl leading-[1.1] tracking-tight sm:text-4xl">
          Your roster
        </h1>
        <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
          Tap a hero to mark them as built — geared and ready to use. Scout fills
          counters from in-game verified kits on this list.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <StatChip label="Built" value={String(built.length)} />
        <StatChip label="Scout-ready" value={`${builtVerified}`} hint="built + verified" />
        <StatChip label="In-game verified" value={`${verifiedN}`} hint={`of ${heroes.length} units`} />
        <StatChip label="Kit pending" value={String(heroes.length - verifiedN)} hint="not checked yet" />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <div className="flex flex-wrap gap-2 sm:ml-auto">
          <Button size="sm" variant="secondary" onClick={() => loadPresetRoster("challenger")}>
            Full kit
          </Button>
          <Button size="sm" variant="secondary" onClick={() => loadPresetRoster("starter")}>
            Starter
          </Button>
          <Button size="sm" variant="ghost" onClick={() => loadPresetRoster("clear")}>
            Clear
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search heroes…"
        />
        <div className="flex flex-wrap gap-2">
          <ToggleChip on={onlyBuilt} onClick={() => setOnlyBuilt((v) => !v)}>
            Built only
          </ToggleChip>
          {(
            [
              ["all", "All kits"],
              ["verified", "In-game verified"],
              ["pending", "Kit pending"],
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

function StatChip({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-xl bg-card px-3 py-2.5 shadow-[var(--shadow-border)]">
      <p className="text-xs tracking-wide text-muted-foreground uppercase">{label}</p>
      <p className="font-mono text-lg tabular-nums">{value}</p>
      {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
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
        "h-11 shrink-0 rounded-md px-4 text-sm shadow-[var(--shadow-border)]",
        on ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground",
      )}
    >
      {children}
    </button>
  );
}
