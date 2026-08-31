import { useMemo, useState } from "react";
import { toast } from "sonner";
import { CounterCard } from "@/components/e7/counter-card";
import { TeamSlots } from "@/components/e7/team-slots";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { getHero, useCatalog } from "@/lib/e7/catalog";
import { classifyDefense, recommendCounters } from "@/lib/e7/engine";
import { suggestedVpDelta } from "@/lib/e7/ranks";
import { ARCHETYPE_META } from "@/lib/e7/recipes";
import { recordFor } from "@/lib/e7/stats";
import { builtIds, useArenaStore } from "@/lib/e7/store";
import { EFFECT_LABEL } from "@/lib/e7/types";
import { cn } from "@/lib/utils";

export function ScoutView() {
  const enemy = useArenaStore((s) => s.enemy);
  const roster = useArenaStore((s) => s.roster);
  const restrict = useArenaStore((s) => s.restrictToRoster);
  const setRestrict = useArenaStore((s) => s.setRestrict);
  const setEnemy = useArenaStore((s) => s.setEnemy);
  const setEnemySlot = useArenaStore((s) => s.setEnemySlot);
  const setLastTeam = useArenaStore((s) => s.setLastTeam);
  const logMatch = useArenaStore((s) => s.logMatch);
  const matches = useArenaStore((s) => s.matches);
  const vp = useArenaStore((s) => s.vp);
  const presets = useCatalog((s) => s.presets);
  const recipes = useCatalog((s) => s.recipes);
  const heroes = useCatalog((s) => s.heroes);
  const [wallsOpen, setWallsOpen] = useState(false);

  const filled = useMemo(() => enemy.filter((id) => id.length > 0), [enemy]);
  const built = builtIds(roster);
  const builtVerified = built.filter((id) => getHero(id)?.verified).length;
  const pool = restrict ? built : null;
  const poolKey = pool ? pool.join("|") : "all";
  const enemyKey = enemy.join("|");

  const read = useMemo(() => classifyDefense(filled), [enemyKey, heroes]);
  const counters = useMemo(
    () => (filled.length === 4 ? recommendCounters(filled, pool) : []),
    [enemyKey, poolKey, filled.length, recipes, heroes],
  );

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = counters.find((c) => c.recipeId === selectedId) ?? counters[0];
  const [note, setNote] = useState("");

  function useTeam(id: string, heroIds: string[]) {
    setSelectedId(id);
    setLastTeam(heroIds);
  }

  function record(won: boolean) {
    if (!selected || !read || filled.length < 4) return;
    const delta = suggestedVpDelta(won, vp);
    logMatch({
      enemy: filled,
      team: selected.heroIds,
      won,
      vpDelta: delta,
      note,
      recipeId: selected.recipeId,
      recipeName: selected.name,
      archetype: read.archetype,
    });
    setNote("");
    toast(won ? `Win saved · ${delta > 0 ? "+" : ""}${delta} VP` : `Loss saved · ${delta} VP`);
  }

  const meta = read ? ARCHETYPE_META[read.archetype] : null;

  return (
    <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-start lg:gap-10">
      <div className="flex flex-col gap-6">
        <header className="rise-in flex flex-col gap-2">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Scout
          </p>
          {read && meta ? (
            <p className="text-sm font-medium text-muted-foreground">Wall type</p>
          ) : null}
          <h1 className="font-display text-3xl leading-[1.1] tracking-tight sm:text-4xl">
            {read && meta ? meta.title : "The wall"}
          </h1>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            {read && meta
              ? meta.blurb
              : "The wall is the four-hero defense you attack. Fill the slots — we name the type from their kits."}
          </p>
          {read && meta ? (
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Counters on the right match this type from your built, in-game verified units. Won or Lost after the fight is what proves a recipe.
            </p>
          ) : null}
          {read && read.unverifiedIds.length > 0 ? (
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              {read.unverifiedIds.length === 1 ? "One unit on this wall is" : `${read.unverifiedIds.length} units on this wall are`}{" "}
              not in-game verified. We name the wall from the verified kits only.
            </p>
          ) : null}
          {read && read.watch.length > 0 ? (
            <ul className="mt-1 flex max-w-md flex-col gap-2">
              {read.watch.map((item) => (
                <li key={item.key} className="text-sm leading-relaxed">
                  <span className="font-medium">{item.label}.</span>{" "}
                  <span className="text-muted-foreground">{item.note}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </header>

        <div className="rise-in-2 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="min-w-0">
              <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
                Enemy wall
              </p>
              <p className="text-sm text-muted-foreground">Four heroes on their defense</p>
            </div>
            <div className="flex shrink-0 items-center gap-1">
              {presets.length > 0 ? (
                <button
                  type="button"
                  className="min-h-11 px-2 text-sm text-muted-foreground hover:text-foreground"
                  onClick={() => setWallsOpen((v) => !v)}
                  aria-expanded={wallsOpen}
                >
                  {wallsOpen ? "Close" : "Walls"}
                </button>
              ) : null}
              <button
                type="button"
                className="min-h-11 px-2 text-sm text-muted-foreground hover:text-foreground"
                onClick={() => setEnemy([])}
              >
                Clear
              </button>
            </div>
          </div>
          <TeamSlots
            ids={enemy}
            onChangeSlot={setEnemySlot}
            pickerTitle="Enemy unit"
            labels={["Lead", "Two", "Three", "Four"]}
          />
          {wallsOpen && presets.length > 0 ? (
            <ul className="flex flex-col gap-1">
              {presets.map((p) => {
                const on = enemy.join() === p.heroIds.join();
                return (
                  <li key={p.id}>
                    <button
                      type="button"
                      onClick={() => {
                        setEnemy(p.heroIds);
                        setWallsOpen(false);
                      }}
                      className={cn(
                        "w-full rounded-xl px-4 py-3 text-left shadow-[var(--shadow-border)]",
                        on ? "bg-primary text-primary-foreground" : "bg-card",
                      )}
                    >
                      <p className="text-sm font-medium">{p.name}</p>
                      {p.blurb ? (
                        <p className={cn("mt-0.5 text-xs", on ? "text-primary-foreground/80" : "text-muted-foreground")}>
                          {p.blurb}
                        </p>
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : null}
          {read &&
          (read.effects.length > 0 ||
            read.buffs.length > 0 ||
            read.debuffs.length > 0 ||
            read.uniqueEffects.length > 0) ? (
            <div className="flex flex-col gap-3">
              {read.effects.length > 0 ? (
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
                    Kit effects
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {read.effects.map((id) => (
                      <span
                        key={id}
                        className="rounded-full bg-secondary px-3 py-1.5 text-xs text-foreground"
                      >
                        {EFFECT_LABEL[id]}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
              {read.buffs.length > 0 ? (
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
                    Buffs
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {read.buffs.map((name) => (
                      <span
                        key={name}
                        className="rounded-full bg-secondary px-3 py-1.5 text-xs text-foreground"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
              {read.debuffs.length > 0 ? (
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
                    Debuffs
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {read.debuffs.map((name) => (
                      <span
                        key={name}
                        className="rounded-full bg-secondary px-3 py-1.5 text-xs text-foreground"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
              {read.uniqueEffects.length > 0 ? (
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
                    Unique
                  </p>
                  <ul className="flex flex-col gap-2">
                    {read.uniqueEffects.map((u) => {
                      const owner = getHero(u.heroId);
                      return (
                        <li
                          key={`${u.heroId}-${u.name}`}
                          className="rounded-xl bg-card px-4 py-3 shadow-[var(--shadow-border)]"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <p className="text-sm font-medium">{u.name}</p>
                            {owner ? (
                              <span className="shrink-0 rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground">
                                {owner.short}
                              </span>
                            ) : null}
                          </div>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{u.text}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="flex items-center justify-between gap-3 rounded-xl bg-card px-4 py-3 shadow-[var(--shadow-border)]">
          <div className="min-w-0">
            <p className="text-sm font-medium">Only built units</p>
            <p className="text-sm text-muted-foreground">
              On: fill from {builtVerified} built, in-game verified{" "}
              {builtVerified === 1 ? "hero" : "heroes"}. Off: verified catalog (theory). Unverified kits stay out.
            </p>
          </div>
          <Switch checked={restrict} onCheckedChange={setRestrict} />
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:sticky lg:top-20">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="font-display text-2xl tracking-tight">Counters</h2>
          {counters.length > 0 ? (
            <p className="text-sm text-muted-foreground">{counters.length} matching</p>
          ) : (
            <p className="text-sm text-muted-foreground">{filled.length} of 4</p>
          )}
        </div>

        {counters.length === 0 ? (
          <Card>
            <CardContent className="p-5 text-sm leading-relaxed text-muted-foreground">
              {filled.length < 4
                ? `Add ${4 - filled.length} more ${4 - filled.length === 1 ? "hero" : "heroes"} to the defense. Counters appear when all four slots are filled.`
                : "No matching recipe for this wall yet. Try another defense, or turn off Only built units. Counters only use in-game verified kits."}
            </CardContent>
          </Card>
        ) : (
          <div className="flex flex-col gap-3">
            {counters.map((team) => (
              <CounterCard
                key={team.recipeId}
                team={team}
                selected={selected?.recipeId === team.recipeId}
                onSelect={() => useTeam(team.recipeId, team.heroIds)}
                record={recordFor(matches, team.recipeId)}
                result={
                  selected?.recipeId === team.recipeId && filled.length === 4
                    ? { note, onNote: setNote, onRecord: record }
                    : undefined
                }
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
