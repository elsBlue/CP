import { useMemo, useState } from "react";
import { HeroPortrait } from "@/components/hero-portrait";
import {
  FilterChip,
  LetterHead,
  LIST,
  PAGE,
  PageHeader,
  RowCard,
  StatStrip,
  TOOLBAR,
} from "@/components/e7/chrome";
import { JumpRail, groupByLetter } from "@/components/e7/jump-rail";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { searchHeroes } from "@/lib/e7/engine";
import { CLASS_LABEL, ELEMENT_LABEL } from "@/lib/e7/heroes";
import { useCatalog } from "@/lib/e7/catalog";
import { builtIds, useArenaStore } from "@/lib/e7/store";
import { cn, daysAgoLabel } from "@/lib/utils";

type KitFilter = "all" | "verified" | "pending";

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
    return [...pool].sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
  }, [query, onlyBuilt, kit, roster, heroes]);
  const groups = useMemo(() => groupByLetter(list, (h) => h.name), [list]);
  const jumpItems = useMemo(
    () => groups.map((g) => ({ id: `az-${g.letter}`, label: g.letter })),
    [groups],
  );

  return (
    <div className={PAGE}>
      <PageHeader kicker="Roster" title="Your roster">
        Tap to mark built. Scout only uses this list if Only built units is on.
      </PageHeader>

      <StatStrip
        items={[
          { label: "Built", value: String(built.length) },
          { label: "Ready", value: String(builtVerified) },
          { label: "Verified", value: String(verifiedN) },
          { label: "Pending", value: String(heroes.length - verifiedN) },
        ]}
      />

      <div className="flex flex-col gap-2">
        <div className={TOOLBAR}>
          {confirmClear ? (
            <>
              <p className="w-full text-sm text-muted-foreground">
                Clear all built marks? This cannot be undone.
              </p>
              <Button size="sm" variant="ghost" onClick={() => setConfirmClear(false)}>
                Cancel
              </Button>
              <Button
                size="sm"
                variant="secondary"
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
              <FilterChip on={false} onClick={() => loadPresetRoster("challenger")}>
                Full kit
              </FilterChip>
              <FilterChip on={false} onClick={() => loadPresetRoster("starter")}>
                Starter
              </FilterChip>
              <button
                type="button"
                className="h-10 px-3 text-sm text-muted-foreground"
                onClick={() => setConfirmClear(true)}
              >
                Clear
              </button>
            </>
          )}
        </div>
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search heroes…"
        />
        <div className={TOOLBAR}>
          <FilterChip on={onlyBuilt} onClick={() => setOnlyBuilt((v) => !v)}>
            Built only
          </FilterChip>
          {(
            [
              ["all", "All"],
              ["verified", "Verified"],
              ["pending", "Pending"],
            ] as const
          ).map(([id, label]) => (
            <FilterChip key={id} on={kit === id} onClick={() => setKit(id)}>
              {label}
            </FilterChip>
          ))}
        </div>
      </div>

      <ul className={LIST}>
        {groups.map((group) => (
          <li key={group.letter} className="flex flex-col gap-1">
            <LetterHead letter={group.letter} />
            <ul className={LIST}>
              {group.rows.map((hero) => {
                const builtOn = Boolean(roster[hero.id]?.built);
                const checked = daysAgoLabel(hero.checkedAt);
                return (
                  <li key={hero.id}>
                    <button
                      type="button"
                      onClick={() => toggleBuilt(hero.id)}
                      aria-pressed={builtOn}
                      className="w-full text-left [-webkit-tap-highlight-color:transparent]"
                    >
                      <RowCard>
                        <HeroPortrait hero={hero} size="sm" dimmed={!builtOn} />
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-medium">{hero.name}</span>
                          <span className="block truncate text-xs text-muted-foreground">
                            {ELEMENT_LABEL[hero.element]} {CLASS_LABEL[hero.class]}
                            {hero.verified
                              ? ` · verified${checked ? ` ${checked}` : ""}`
                              : " · pending"}
                          </span>
                        </span>
                        <span
                          className={cn(
                            "inline-flex h-9 min-w-[5.75rem] items-center justify-center rounded-full px-3 text-xs font-medium tracking-wide uppercase",
                            builtOn
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-muted-foreground",
                          )}
                        >
                          {builtOn ? "Built" : "Not built"}
                        </span>
                      </RowCard>
                    </button>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
      {jumpItems.length > 1 ? <JumpRail items={jumpItems} /> : null}
    </div>
  );
}
