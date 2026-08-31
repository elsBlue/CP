import { useMemo, useState } from "react";
import { HeroPortrait } from "@/components/hero-portrait";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { searchHeroes } from "@/lib/e7/engine";
import { CLASS_LABEL, ELEMENT_LABEL } from "@/lib/e7/heroes";
import { useCatalog } from "@/lib/e7/catalog";
import { builtIds, useArenaStore } from "@/lib/e7/store";
import { cn } from "@/lib/utils";

export function RosterView() {
  const roster = useArenaStore((s) => s.roster);
  const toggleBuilt = useArenaStore((s) => s.toggleBuilt);
  const loadPresetRoster = useArenaStore((s) => s.loadPresetRoster);
  const heroes = useCatalog((s) => s.heroes);
  const [query, setQuery] = useState("");
  const [onlyBuilt, setOnlyBuilt] = useState(false);

  const built = builtIds(roster);

  const list = useMemo(() => {
    let pool = searchHeroes(query, heroes);
    if (onlyBuilt) pool = pool.filter((h) => roster[h.id]?.built);
    return pool;
  }, [query, onlyBuilt, roster, heroes]);

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
          counters from this list.
        </p>
      </header>

      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="steel">{built.length} built</Badge>
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

      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search heroes…"
          className="sm:flex-1"
        />
        <button
          type="button"
          onClick={() => setOnlyBuilt((v) => !v)}
          className={cn(
            "h-11 shrink-0 rounded-md px-4 text-sm shadow-[var(--shadow-border)]",
            onlyBuilt ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground",
          )}
        >
          Built only
        </button>
      </div>

      <ul className="flex flex-col gap-1">
        {list.map((hero) => {
          const builtOn = Boolean(roster[hero.id]?.built);
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
