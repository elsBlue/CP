import { useEffect, useMemo, useRef, useState } from "react";
import { Star } from "lucide-react";
import { toast } from "sonner";
import { HeroPortrait } from "@/components/hero-portrait";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  deleteHero,
  deletePreset,
  deleteRecipe,
  getAnalytics,
  listAdminLog,
  listMembers,
  saveHero,
  saveHeroIcon,
  savePreset,
  saveRecipe,
  setIngameName,
  setMemberRole,
} from "@/lib/e7/api";
import { useCatalog } from "@/lib/e7/catalog";
import { CLASS_LABEL, ELEMENT_LABEL, heroRarity } from "@/lib/e7/heroes";
import { fileToHeroIcon } from "@/lib/e7/icon";
import { isOwnerIdentity } from "@/lib/e7/owner";
import { ARCHETYPE_META } from "@/lib/e7/recipes";
import { useArenaStore } from "@/lib/e7/store";
import { useCurrentUser } from "@/lib/auth/use-current-user";
import {
  ARCHETYPE_IDS,
  EFFECT_IDS,
  EFFECT_LABEL,
  ROLE_IDS,
  TAG_IDS,
  type AdminLogRow,
  type DefensePreset,
  type GuildMember,
  type Hero,
  type NormalEffect,
  type Recipe,
  type RecipeStat,
  type SlotNeed,
  type WallStat,
} from "@/lib/e7/types";
import { cn } from "@/lib/utils";

type Tab = "units" | "strategies" | "walls" | "members" | "log" | "stats";

function formatInGameDate(iso?: string): string {
  if (!iso) return "—";
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = months[m - 1];
  if (!month) return iso;
  return `${d} ${month} ${y}`;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 64);
}

function applyCatalog(next: { heroes: Hero[]; recipes: Recipe[]; presets: DefensePreset[] }) {
  useCatalog.getState().setCatalog(next);
}

export function AdminView() {
  const [tab, setTab] = useState<Tab>("units");
  const unitCount = useCatalog((s) => s.heroes.length);
  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">Admin</p>
        <h1 className="font-display text-3xl leading-[1.1] tracking-tight sm:text-4xl">Catalog</h1>
        <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
          Units, strategies, and wall presets are shared. Progress stays private.
        </p>
        <p className="font-mono text-sm tabular-nums text-muted-foreground">{unitCount} units</p>
      </header>
      <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1">
        {(
          [
            ["units", "Units"],
            ["strategies", "Strategies"],
            ["walls", "Walls"],
            ["members", "Members"],
            ["log", "Log"],
            ["stats", "Stats"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={cn(
              "h-11 shrink-0 rounded-full px-4 text-sm",
              tab === id ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground",
            )}
          >
            {label}
          </button>
        ))}
      </div>
      {tab === "units" ? <HeroAdmin /> : null}
      {tab === "strategies" ? <RecipeAdmin /> : null}
      {tab === "walls" ? <PresetAdmin /> : null}
      {tab === "members" ? <MemberAdmin /> : null}
      {tab === "log" ? <ActivityLog /> : null}
      {tab === "stats" ? <AnalyticsPanel /> : null}
    </div>
  );
}

function HeroAdmin() {
  const heroes = useCatalog((s) => s.heroes);
  const [query, setQuery] = useState("");
  const [star, setStar] = useState<0 | 3 | 4 | 5>(0);
  const [editing, setEditing] = useState<Hero | null>(null);
  const [iconHero, setIconHero] = useState<Hero | null>(null);
  const starCounts = useMemo(() => {
    const counts = { 3: 0, 4: 0, 5: 0 };
    for (const h of heroes) counts[heroRarity(h)] += 1;
    return counts;
  }, [heroes]);
  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    let rows = q
      ? heroes.filter((h) => `${h.name} ${h.short} ${h.id}`.toLowerCase().includes(q))
      : heroes;
    if (star) rows = rows.filter((h) => heroRarity(h) === star);
    return [...rows].sort(
      (a, b) => Number(Boolean(b.verified)) - Number(Boolean(a.verified)) || a.name.localeCompare(b.name),
    );
  }, [heroes, query, star]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-end justify-between gap-3">
        <p className="font-mono text-sm tabular-nums text-muted-foreground">
          {query || star ? `${list.length} of ${heroes.length}` : `${heroes.length} units`}
          {` · ${heroes.filter((h) => h.verified).length} in-game verified`}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {(
          [
            [0, "All", heroes.length],
            [5, "5★", starCounts[5]],
            [4, "4★", starCounts[4]],
            [3, "3★", starCounts[3]],
          ] as const
        ).map(([id, label, count]) => (
          <button
            key={id}
            type="button"
            onClick={() => setStar(id)}
            className={cn(
              "h-10 shrink-0 rounded-full px-3 text-sm tabular-nums",
              star === id ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground",
            )}
          >
            {label} {count}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search units…" className="sm:flex-1" />
        <Button
          onClick={() =>
            setEditing({
              id: "",
              name: "",
              short: "",
              element: "fire",
              class: "warrior",
              tier: "S",
              rarity: 5,
              roles: [],
              tags: [],
              effects: [],
              buffs: [],
              uniqueEffects: [],
              debuffs: [],
              kit: "",
              defense: 5,
              offense: 5,
              icon: "",
              verified: false,
            })
          }
        >
          Add unit
        </Button>
      </div>
      {editing ? (
        <HeroForm
          initial={editing}
          onClose={() => setEditing(null)}
          onSaved={() => setEditing(null)}
        />
      ) : null}
      <IconDialog hero={iconHero} onClose={() => setIconHero(null)} />
      <ul className="flex flex-col gap-1">
        {list.map((hero) => (
          <li key={hero.id} className="flex items-center justify-between gap-3 rounded-xl bg-card px-4 py-3 shadow-[var(--shadow-border)]">
            <div className="flex min-w-0 items-center gap-3">
              <button
                type="button"
                onClick={() => setIconHero(hero)}
                className="shrink-0 rounded-md"
                aria-label={`Edit icon · ${hero.name}`}
              >
                <HeroPortrait hero={hero} size="sm" />
              </button>
              <div className="min-w-0">
                <p className="flex items-center gap-1.5 text-sm font-medium">
                  <span className="truncate">{hero.name}</span>
                  {hero.verified ? (
                    <Star className="size-3.5 shrink-0 fill-current" strokeWidth={1.5} aria-label="In-game verified" />
                  ) : null}
                </p>
                <p className="truncate text-xs text-muted-foreground">
                  {hero.verified
                    ? `In-game verified · ${formatInGameDate(hero.checkedAt)} · `
                    : ""}
                  {hero.short} · {heroRarity(hero)}★ · {ELEMENT_LABEL[hero.element]} {CLASS_LABEL[hero.class]} · {hero.tier}
                </p>
              </div>
            </div>
            <Button size="sm" variant="secondary" onClick={() => setEditing(hero)}>
              Edit
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function IconDialog({ hero, onClose }: { hero: Hero | null; onClose: () => void }) {
  const [icon, setIcon] = useState(hero?.icon ?? "");
  const [fileName, setFileName] = useState("");
  const [busy, setBusy] = useState(false);
  const [iconBusy, setIconBusy] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIcon(hero?.icon ?? "");
    setFileName("");
  }, [hero]);

  async function save() {
    if (!hero) return;
    setBusy(true);
    try {
      const next = await saveHeroIcon({ data: { id: hero.id, icon } });
      applyCatalog(next);
      toast(icon ? "Icon saved" : "Icon removed");
      onClose();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not save icon");
    } finally {
      setBusy(false);
    }
  }

  const preview: Hero | null = hero ? { ...hero, icon } : null;

  return (
    <Dialog open={Boolean(hero)} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Icon · {hero?.name ?? ""}</DialogTitle>
          <DialogDescription>
            This save only changes the icon. Kit, roles, and in-game verified stay as they are.
          </DialogDescription>
        </DialogHeader>
        {preview ? (
          <div className="flex items-center gap-3">
            <HeroPortrait hero={preview} size="lg" />
            <p className="text-xs text-muted-foreground">Square crop, face in the middle. 256×256 is enough.</p>
          </div>
        ) : null}
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="sr-only"
          disabled={busy || iconBusy || !hero}
          onChange={(e) => {
            const file = e.target.files?.[0];
            e.target.value = "";
            if (!file) return;
            setIconBusy(true);
            void fileToHeroIcon(file)
              .then((next) => {
                setIcon(next);
                setFileName(file.name);
              })
              .catch((err) => toast.error(err instanceof Error ? err.message : "Could not read image"))
              .finally(() => setIconBusy(false));
          }}
        />
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="secondary"
              disabled={busy || iconBusy || !hero}
              onClick={() => fileRef.current?.click()}
            >
              {iconBusy ? "Reading…" : "Upload image"}
            </Button>
            {fileName ? (
              <span className="min-w-0 truncate text-xs text-muted-foreground">{fileName}</span>
            ) : null}
          </div>
          <Input
            value={icon.startsWith("data:") ? "" : icon}
            placeholder="Or paste an image URL"
            disabled={busy || !hero}
            onChange={(e) => {
              setIcon(e.target.value);
              setFileName("");
            }}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => void save()} disabled={busy || iconBusy || !hero}>
            Save icon
          </Button>
          {icon ? (
            <Button
              variant="secondary"
              disabled={busy}
              onClick={() => {
                setIcon("");
                setFileName("");
              }}
            >
              Remove
            </Button>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function HeroForm({
  initial,
  onClose,
  onSaved,
}: {
  initial: Hero;
  onClose: () => void;
  onSaved: () => void;
}) {
  const isNew = !useCatalog.getState().heroes.some((h) => h.id === initial.id);
  const [form, setForm] = useState<Hero>({
    ...initial,
    icon: initial.icon ?? "",
    effects: initial.effects ?? [],
    buffs: initial.buffs ?? [],
    debuffs: initial.debuffs ?? [],
    uniqueEffects: initial.uniqueEffects ?? [],
  });
  const [busy, setBusy] = useState(false);

  function patch(next: Partial<Hero>) {
    setForm((cur) => {
      const merged = { ...cur, ...next };
      if (isNew && next.name && !cur.id) merged.id = slugify(next.name);
      if (isNew && next.name && !cur.short) merged.short = next.name.split(" ")[0] ?? next.name;
      return merged;
    });
  }

  async function save() {
    setBusy(true);
    try {
      const next = await saveHero({
        data: {
          ...form,
          icon: "",
          uniqueEffects: (form.uniqueEffects ?? []).filter((u) => u.name.trim()),
        },
      });
      applyCatalog(next);
      toast("Unit saved");
      onSaved();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not save");
    } finally {
      setBusy(false);
    }
  }

  async function remove() {
    if (!form.id || isNew) return;
    setBusy(true);
    try {
      const next = await deleteHero({ data: { id: form.id } });
      applyCatalog(next);
      toast("Unit removed");
      onSaved();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not delete");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="rounded-xl bg-card p-4 shadow-[var(--shadow-border)] sm:p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-display text-xl tracking-tight">{isNew ? "New unit" : "Edit unit"}</h2>
        <button type="button" className="h-11 px-2 text-sm text-muted-foreground" onClick={onClose}>
          Close
        </button>
      </div>
      <div className="mb-4 flex items-center gap-3">
        <HeroPortrait hero={{ ...form, name: form.name || "New", short: form.short || "New" }} size="lg" />
        <p className="text-xs leading-relaxed text-muted-foreground">
          Icon is separate. Close this, then tap the portrait on the list.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Name">
          <Input value={form.name} onChange={(e) => patch({ name: e.target.value })} />
        </Field>
        <Field label="Short">
          <Input value={form.short} onChange={(e) => patch({ short: e.target.value })} />
        </Field>
        <Field label="Id">
          <Input value={form.id} disabled={!isNew} onChange={(e) => patch({ id: slugify(e.target.value) })} />
        </Field>
        <Field label="Rarity">
          <NativeSelect
            value={String(heroRarity(form))}
            onChange={(v) => patch({ rarity: Number(v) as 3 | 4 | 5 })}
            options={["5", "4", "3"]}
            labels={{ "5": "5★", "4": "4★", "3": "3★" }}
          />
        </Field>
        <Field label="Tier">
          <NativeSelect value={form.tier} onChange={(v) => patch({ tier: v as Hero["tier"] })} options={["SS", "S", "A", "B"]} />
        </Field>
        <Field label="Element">
          <NativeSelect
            value={form.element}
            onChange={(v) => patch({ element: v as Hero["element"] })}
            options={Object.keys(ELEMENT_LABEL)}
            labels={ELEMENT_LABEL}
          />
        </Field>
        <Field label="Class">
          <NativeSelect
            value={form.class}
            onChange={(v) => patch({ class: v as Hero["class"] })}
            options={Object.keys(CLASS_LABEL)}
            labels={CLASS_LABEL}
          />
        </Field>
        <Field label="Defense 0–10">
          <Input type="number" min={0} max={10} value={form.defense} onChange={(e) => patch({ defense: Number(e.target.value) })} />
        </Field>
        <Field label="Offense 0–10">
          <Input type="number" min={0} max={10} value={form.offense} onChange={(e) => patch({ offense: Number(e.target.value) })} />
        </Field>
      </div>
      <div className="mt-4">
        <Label>Roles</Label>
        <ChipSet values={ROLE_IDS} selected={form.roles} onToggle={(role) => {
          const on = form.roles.includes(role as Hero["roles"][number]);
          patch({ roles: on ? form.roles.filter((r) => r !== role) : [...form.roles, role as Hero["roles"][number]] });
        }} />
      </div>
      <div className="mt-4">
        <Label>Normal effects</Label>
        <p className="mt-1 text-xs text-muted-foreground">
          In-game Skill Effect filters. Buffs, debuffs, and unique effects come later.
        </p>
        <ChipSet
          values={EFFECT_IDS}
          selected={form.effects ?? []}
          labels={EFFECT_LABEL}
          onToggle={(value) => {
            const effect = value as NormalEffect;
            const on = (form.effects ?? []).includes(effect);
            patch({
              effects: on
                ? (form.effects ?? []).filter((e) => e !== effect)
                : [...(form.effects ?? []), effect],
            });
          }}
        />
      </div>
      <div className="mt-4">
        <Label>Tags</Label>
        <ChipSet values={TAG_IDS} selected={form.tags} onToggle={(tag) => {
          const on = form.tags.includes(tag as Hero["tags"][number]);
          patch({ tags: on ? form.tags.filter((t) => t !== tag) : [...form.tags, tag as Hero["tags"][number]] });
        }} />
      </div>
      <div className="mt-4">
        <Field label="Buffs">
          <Input
            value={(form.buffs ?? []).join(", ")}
            placeholder="Increase Speed, Immunity"
            onChange={(e) =>
              patch({
                buffs: e.target.value
                  .split(",")
                  .map((s) => s.trim())
                  .filter(Boolean),
              })
            }
          />
        </Field>
        <p className="mt-1 text-xs text-muted-foreground">Comma-separated. In-game buff names.</p>
      </div>
      <div className="mt-4">
        <Field label="Debuffs">
          <Input
            value={(form.debuffs ?? []).join(", ")}
            placeholder="Decrease Defense, Seal, Cannot Buff"
            onChange={(e) =>
              patch({
                debuffs: e.target.value
                  .split(",")
                  .map((s) => s.trim())
                  .filter(Boolean),
              })
            }
          />
        </Field>
        <p className="mt-1 text-xs text-muted-foreground">Comma-separated. In-game debuff names.</p>
      </div>
      <div className="mt-4">
        <Label>Unique effects</Label>
        <p className="mt-1 text-xs text-muted-foreground">Named kit effects that are not on the normal list.</p>
        <div className="mt-2 flex flex-col gap-3">
          {(form.uniqueEffects ?? []).map((item, index) => (
            <div key={index} className="rounded-xl bg-secondary/60 p-3">
              <div className="flex items-center justify-between gap-2">
                <Input
                  value={item.name}
                  placeholder="Name"
                  onChange={(e) => {
                    const next = [...(form.uniqueEffects ?? [])];
                    next[index] = { ...item, name: e.target.value };
                    patch({ uniqueEffects: next });
                  }}
                />
                <button
                  type="button"
                  className="h-11 shrink-0 px-2 text-sm text-muted-foreground hover:text-foreground"
                  onClick={() =>
                    patch({ uniqueEffects: (form.uniqueEffects ?? []).filter((_, i) => i !== index) })
                  }
                >
                  Remove
                </button>
              </div>
              <Textarea
                className="mt-2"
                value={item.text}
                placeholder="What it does"
                onChange={(e) => {
                  const next = [...(form.uniqueEffects ?? [])];
                  next[index] = { ...item, text: e.target.value };
                  patch({ uniqueEffects: next });
                }}
              />
            </div>
          ))}
          <Button
            type="button"
            variant="secondary"
            onClick={() =>
              patch({ uniqueEffects: [...(form.uniqueEffects ?? []), { name: "", text: "" }] })
            }
          >
            Add unique
          </Button>
        </div>
      </div>
      <div className="mt-4">
        <Field label="Kit note">
          <Textarea value={form.kit} onChange={(e) => patch({ kit: e.target.value })} />
        </Field>
      </div>
      <label className="mt-4 flex items-start gap-3 rounded-xl bg-secondary/60 px-4 py-3">
        <Checkbox
          checked={Boolean(form.verified)}
          onCheckedChange={(v) => patch({ verified: v === true })}
          className="mt-0.5"
        />
        <span>
          <span className="flex items-center gap-1.5 text-sm">
            <Star className={form.verified ? "size-3.5 fill-current" : "size-3.5"} strokeWidth={1.5} />
            In-game verified
          </span>
          <span className="mt-0.5 block text-xs text-muted-foreground">
            Kit is the same as the journal. Saving with this on stamps today
            {form.verified && form.checkedAt ? ` (last: ${formatInGameDate(form.checkedAt)})` : ""}.
          </span>
        </span>
      </label>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button onClick={() => void save()} disabled={busy || !form.id || !form.name}>
          Save
        </Button>
        {!isNew ? (
          <Button variant="destructive" onClick={() => void remove()} disabled={busy}>
            Delete
          </Button>
        ) : null}
      </div>
    </section>
  );
}

function RecipeAdmin() {
  const recipes = useCatalog((s) => s.recipes);
  const me = useCurrentUser();
  const [editing, setEditing] = useState<Recipe | null>(null);
  const [filter, setFilter] = useState<"all" | "mine">("all");
  const blank: Recipe = {
    id: "",
    name: "",
    vs: [],
    summary: "",
    wincon: "",
    setup: "",
    pitfalls: [],
    slots: [
      { label: "One", prefer: [], roles: [], tags: [] },
      { label: "Two", prefer: [], roles: [], tags: [] },
      { label: "Three", prefer: [], roles: [], tags: [] },
      { label: "Four", prefer: [], roles: [], tags: [] },
    ],
  };
  const list =
    filter === "mine" && me?.id
      ? recipes.filter((r) => r.createdBy === me.id)
      : recipes;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex gap-1">
          {(["all", "mine"] as const).map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              className={cn(
                "h-11 rounded-full px-4 text-sm",
                filter === id ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground",
              )}
            >
              {id === "all" ? "All" : "Mine"}
            </button>
          ))}
        </div>
        <Button onClick={() => setEditing(blank)}>Add strategy</Button>
      </div>
      {editing ? <RecipeForm initial={editing} onClose={() => setEditing(null)} onSaved={() => setEditing(null)} /> : null}
      <ul className="flex flex-col gap-1">
        {list.map((recipe) => (
          <li key={recipe.id} className="flex items-center justify-between gap-3 rounded-xl bg-card px-4 py-3 shadow-[var(--shadow-border)]">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{recipe.name}</p>
              <p className="truncate text-xs text-muted-foreground">
                {recipe.author || "Catalog"}
                {recipe.vs.length > 0
                  ? ` · ${recipe.vs.map((v) => ARCHETYPE_META[v]?.title ?? v).join(", ")}`
                  : ""}
              </p>
            </div>
            <Button size="sm" variant="secondary" onClick={() => setEditing(recipe)}>
              Edit
            </Button>
          </li>
        ))}
        {list.length === 0 ? (
          <li className="rounded-xl bg-card px-4 py-5 text-sm text-muted-foreground shadow-[var(--shadow-border)]">
            {filter === "mine" ? "No strategies saved under your account yet." : "No strategies."}
          </li>
        ) : null}
      </ul>
    </div>
  );
}

function RecipeForm({
  initial,
  onClose,
  onSaved,
}: {
  initial: Recipe;
  onClose: () => void;
  onSaved: () => void;
}) {
  const isNew = !useCatalog.getState().recipes.some((r) => r.id === initial.id);
  const [form, setForm] = useState<Recipe>(initial);
  const [busy, setBusy] = useState(false);
  const pitfallsText = form.pitfalls.join("\n");

  async function save() {
    setBusy(true);
    try {
      const next = await saveRecipe({
        data: {
          ...form,
          slots: form.slots.map((s) => ({
            label: s.label,
            roles: s.roles ?? [],
            tags: s.tags ?? [],
            prefer: s.prefer ?? [],
          })),
        },
      });
      applyCatalog(next);
      toast("Strategy saved");
      onSaved();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not save");
    } finally {
      setBusy(false);
    }
  }

  async function remove() {
    if (!form.id || isNew) return;
    setBusy(true);
    try {
      const next = await deleteRecipe({ data: { id: form.id } });
      applyCatalog(next);
      toast("Strategy removed");
      onSaved();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not delete");
    } finally {
      setBusy(false);
    }
  }

  function setSlot(index: number, next: SlotNeed) {
    const slots = [...form.slots] as Recipe["slots"];
    slots[index] = next;
    setForm({ ...form, slots });
  }

  return (
    <section className="flex flex-col gap-4 rounded-xl bg-card p-4 shadow-[var(--shadow-border)] sm:p-5">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl tracking-tight">{isNew ? "New strategy" : "Edit strategy"}</h2>
        <button type="button" className="h-11 px-2 text-sm text-muted-foreground" onClick={onClose}>
          Close
        </button>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Name">
          <Input
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
                id: isNew && !form.id ? slugify(e.target.value) : form.id,
              })
            }
          />
        </Field>
        <Field label="Id">
          <Input value={form.id} disabled={!isNew} onChange={(e) => setForm({ ...form, id: slugify(e.target.value) })} />
        </Field>
      </div>
      <div>
        <Label>Works vs</Label>
        <ChipSet
          values={ARCHETYPE_IDS}
          selected={form.vs}
          labels={Object.fromEntries(ARCHETYPE_IDS.map((id) => [id, ARCHETYPE_META[id].title]))}
          onToggle={(id) => {
            const on = form.vs.includes(id as Recipe["vs"][number]);
            setForm({
              ...form,
              vs: on ? form.vs.filter((v) => v !== id) : [...form.vs, id as Recipe["vs"][number]],
            });
          }}
        />
      </div>
      <Field label="Summary">
        <Textarea value={form.summary} onChange={(e) => setForm({ ...form, summary: e.target.value })} />
      </Field>
      <Field label="Wincon">
        <Textarea value={form.wincon} onChange={(e) => setForm({ ...form, wincon: e.target.value })} />
      </Field>
      <Field label="Setup">
        <Textarea value={form.setup} onChange={(e) => setForm({ ...form, setup: e.target.value })} />
      </Field>
      <Field label="Breaks if (one per line)">
        <Textarea value={pitfallsText} onChange={(e) => setForm({ ...form, pitfalls: e.target.value.split("\n").filter(Boolean) })} />
      </Field>
      <div className="grid gap-3 sm:grid-cols-2">
        {form.slots.map((slot, i) => (
          <div key={i} className="rounded-lg bg-secondary p-3">
            <Field label={`Slot ${i + 1}`}>
              <Input value={slot.label} onChange={(e) => setSlot(i, { ...slot, label: e.target.value })} />
            </Field>
            <Field label="Preferred ids">
              <Input
                value={(slot.prefer ?? []).join(", ")}
                onChange={(e) =>
                  setSlot(i, {
                    ...slot,
                    prefer: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                  })
                }
                placeholder="harsetti, belian"
              />
            </Field>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        <Button onClick={() => void save()} disabled={busy || !form.id || !form.name}>
          Save
        </Button>
        {!isNew ? (
          <Button variant="destructive" onClick={() => void remove()} disabled={busy}>
            Delete
          </Button>
        ) : null}
      </div>
    </section>
  );
}

function PresetAdmin() {
  const presets = useCatalog((s) => s.presets);
  const heroes = useCatalog((s) => s.heroes);
  const [editing, setEditing] = useState<DefensePreset | null>(null);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        <Button onClick={() => setEditing({ id: "", name: "", heroIds: ["", "", "", ""], blurb: "" })}>
          Add wall
        </Button>
      </div>
      {editing ? (
        <PresetForm
          initial={editing}
          heroes={heroes}
          onClose={() => setEditing(null)}
          onSaved={() => setEditing(null)}
        />
      ) : null}
      <ul className="flex flex-col gap-1">
        {presets.map((p) => (
          <li key={p.id} className="flex items-center justify-between gap-3 rounded-xl bg-card px-4 py-3 shadow-[var(--shadow-border)]">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{p.name}</p>
              <p className="truncate text-xs text-muted-foreground">{p.heroIds.filter(Boolean).join(" · ")}</p>
            </div>
            <Button size="sm" variant="secondary" onClick={() => setEditing(p)}>
              Edit
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PresetForm({
  initial,
  heroes,
  onClose,
  onSaved,
}: {
  initial: DefensePreset;
  heroes: Hero[];
  onClose: () => void;
  onSaved: () => void;
}) {
  const isNew = !useCatalog.getState().presets.some((p) => p.id === initial.id);
  const [form, setForm] = useState<DefensePreset>({
    ...initial,
    heroIds: [...initial.heroIds, "", "", "", ""].slice(0, 4),
  });
  const [busy, setBusy] = useState(false);

  async function save() {
    setBusy(true);
    try {
      const next = await savePreset({ data: form });
      applyCatalog(next);
      toast("Wall saved");
      onSaved();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not save");
    } finally {
      setBusy(false);
    }
  }

  async function remove() {
    if (!form.id || isNew) return;
    setBusy(true);
    try {
      const next = await deletePreset({ data: { id: form.id } });
      applyCatalog(next);
      toast("Wall removed");
      onSaved();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not delete");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="flex flex-col gap-3 rounded-xl bg-card p-4 shadow-[var(--shadow-border)] sm:p-5">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl tracking-tight">{isNew ? "New wall" : "Edit wall"}</h2>
        <button type="button" className="h-11 px-2 text-sm text-muted-foreground" onClick={onClose}>
          Close
        </button>
      </div>
      <Field label="Name">
        <Input
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
              id: isNew && !form.id ? slugify(e.target.value) : form.id,
            })
          }
        />
      </Field>
      <Field label="Blurb">
        <Input value={form.blurb} onChange={(e) => setForm({ ...form, blurb: e.target.value })} />
      </Field>
      <div className="grid gap-2 sm:grid-cols-2">
        {form.heroIds.map((id, i) => (
          <Field key={i} label={`Unit ${i + 1}`}>
            <NativeSelect
              value={id}
              onChange={(v) => {
                const heroIds = [...form.heroIds];
                heroIds[i] = v;
                setForm({ ...form, heroIds });
              }}
              options={["", ...heroes.map((h) => h.id)]}
              labels={Object.fromEntries(heroes.map((h) => [h.id, h.name]))}
            />
          </Field>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        <Button onClick={() => void save()} disabled={busy || !form.name || form.heroIds.filter(Boolean).length < 4}>
          Save
        </Button>
        {!isNew ? (
          <Button variant="destructive" onClick={() => void remove()} disabled={busy}>
            Delete
          </Button>
        ) : null}
      </div>
    </section>
  );
}

function MemberAdmin() {
  const me = useArenaStore((s) => s.role);
  const email = useArenaStore((s) => s.email);
  const user = useCurrentUser();
  const owner = isOwnerIdentity(user?.primaryEmail, user?.displayName, email);
  const [members, setMembers] = useState<GuildMember[]>([]);
  const [busyId, setBusyId] = useState<string | null>(null);

  useEffect(() => {
    void listMembers()
      .then(setMembers)
      .catch(() => toast.error("Could not load members"));
  }, []);

  async function toggle(member: GuildMember) {
    const nextRole = member.role === "admin" ? "member" : "admin";
    setBusyId(member.userId);
    try {
      const next = await setMemberRole({ data: { userId: member.userId, role: nextRole } });
      setMembers(next);
      toast(nextRole === "admin" ? "Promoted to admin" : "Moved to member");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not update role");
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      {owner ? (
        <p className="text-sm text-muted-foreground">
          In-game names are yours to set, including your own. Everyone else sees them in the log.
        </p>
      ) : (
        <p className="text-sm text-muted-foreground">In-game names are set by the owner.</p>
      )}
      <ul className="flex flex-col gap-1">
        {members.map((m) => (
          <li
            key={m.userId}
            className="flex flex-col gap-3 rounded-xl bg-card px-4 py-3 shadow-[var(--shadow-border)] sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">
                {m.ingameName || m.displayName || m.email || m.userId}
              </p>
              <p className="truncate text-xs text-muted-foreground">{m.email ?? m.userId}</p>
              {owner ? (
                <IngameNameField member={m} onSaved={setMembers} />
              ) : null}
            </div>
            <Button
              size="sm"
              variant={m.role === "admin" ? "default" : "secondary"}
              disabled={
                busyId === m.userId ||
                (m.role === "admin" && me === "admin" && members.filter((x) => x.role === "admin").length === 1)
              }
              onClick={() => void toggle(m)}
            >
              {m.role === "admin" ? "Admin" : "Member"}
            </Button>
          </li>
        ))}
        {members.length === 0 ? (
          <li className="rounded-xl bg-card px-4 py-5 text-sm text-muted-foreground shadow-[var(--shadow-border)]">
            No members yet.
          </li>
        ) : null}
      </ul>
    </div>
  );
}

function IngameNameField({
  member,
  onSaved,
}: {
  member: GuildMember;
  onSaved: (next: GuildMember[]) => void;
}) {
  const [value, setValue] = useState(member.ingameName ?? "");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    setValue(member.ingameName ?? "");
  }, [member.ingameName]);

  async function save() {
    const next = value.trim();
    if (next === (member.ingameName ?? "")) return;
    setBusy(true);
    try {
      const list = await setIngameName({ data: { userId: member.userId, name: next } });
      onSaved(list);
      toast(next ? `In-game name · ${next}` : "In-game name cleared");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not save name");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mt-2 flex gap-2">
      <Input
        value={value}
        maxLength={24}
        placeholder="In-game name"
        disabled={busy}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            void save();
          }
        }}
      />
      <Button size="sm" variant="secondary" disabled={busy} onClick={() => void save()}>
        Save
      </Button>
    </div>
  );
}

function ago(at: number): string {
  const s = Math.max(0, Math.floor((Date.now() - at) / 1000));
  if (s < 45) return "just now";
  if (s < 3600) return `${Math.max(1, Math.floor(s / 60))}m`;
  if (s < 86400) return `${Math.floor(s / 3600)}h`;
  if (s < 86400 * 7) return `${Math.floor(s / 86400)}d`;
  return new Date(at).toLocaleDateString();
}

function ActivityLog() {
  const [rows, setRows] = useState<AdminLogRow[] | null>(null);

  useEffect(() => {
    void listAdminLog()
      .then(setRows)
      .catch(() => {
        toast.error("Could not load log");
        setRows([]);
      });
  }, []);

  if (!rows) {
    return <p className="text-sm text-muted-foreground">Loading log…</p>;
  }

  if (rows.length === 0) {
    return (
      <p className="rounded-xl bg-card px-4 py-5 text-sm text-muted-foreground shadow-[var(--shadow-border)]">
        No admin changes yet. Saves, icons, roles, and names show up here — batched if the same admin does several in a row.
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-1">
      {rows.map((row) => (
        <li
          key={row.id}
          className="flex items-baseline justify-between gap-3 rounded-xl bg-card px-4 py-3 shadow-[var(--shadow-border)]"
        >
          <div className="min-w-0">
            <p className="truncate text-sm">{row.summary}</p>
            <p className="truncate text-xs text-muted-foreground">{row.actor}</p>
          </div>
          <p className="shrink-0 font-mono text-xs tabular-nums text-muted-foreground">{ago(row.at)}</p>
        </li>
      ))}
    </ul>
  );
}

function rate(wins: number, losses: number): string {
  const n = wins + losses;
  if (n === 0) return "—";
  return `${Math.round((wins / n) * 100)}%`;
}

function AnalyticsPanel() {
  const [data, setData] = useState<{ recipes: RecipeStat[]; walls: WallStat[] } | null>(null);

  useEffect(() => {
    void getAnalytics()
      .then(setData)
      .catch(() => toast.error("Could not load stats"));
  }, []);

  if (!data) {
    return <p className="text-sm text-muted-foreground">Loading stats…</p>;
  }

  const fights = data.recipes.reduce((s, r) => s + r.wins + r.losses, 0);

  return (
    <div className="flex flex-col gap-6">
      <p className="text-sm text-muted-foreground">
        Fills from Won / Lost on Scout. Stay on — generated strategies later will use this.
        {fights === 0 ? " No fights recorded yet." : ` ${fights} recorded.`}
      </p>
      <section>
        <h2 className="mb-2 text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
          By wall type
        </h2>
        <ul className="flex flex-col gap-1">
          {data.walls.map((w) => (
            <li
              key={w.archetype}
              className="flex items-baseline justify-between gap-3 rounded-xl bg-card px-4 py-3 shadow-[var(--shadow-border)]"
            >
              <p className="truncate text-sm">{w.title}</p>
              <p className="shrink-0 font-mono text-xs tabular-nums text-muted-foreground">
                {w.wins}W {w.losses}L · {rate(w.wins, w.losses)}
              </p>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="mb-2 text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
          By strategy
        </h2>
        <ul className="flex flex-col gap-1">
          {data.recipes.map((r) => (
            <li
              key={r.id}
              className="flex items-baseline justify-between gap-3 rounded-xl bg-card px-4 py-3 shadow-[var(--shadow-border)]"
            >
              <div className="min-w-0">
                <p className="truncate text-sm">{r.name}</p>
                <p className="truncate text-xs text-muted-foreground">{r.author}</p>
              </div>
              <p className="shrink-0 font-mono text-xs tabular-nums text-muted-foreground">
                {r.wins}W {r.losses}L · {rate(r.wins, r.losses)}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <Label>{label}</Label>
      {children}
    </label>
  );
}

function NativeSelect({
  value,
  onChange,
  options,
  labels,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  labels?: Record<string, string>;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-11 w-full rounded-md bg-secondary px-3 text-sm shadow-[var(--shadow-border)] outline-none"
    >
      {options.map((opt) => (
        <option key={opt || "empty"} value={opt}>
          {opt === "" ? "—" : labels?.[opt] ?? opt}
        </option>
      ))}
    </select>
  );
}

function ChipSet({
  values,
  selected,
  onToggle,
  labels,
}: {
  values: readonly string[];
  selected: readonly string[];
  onToggle: (value: string) => void;
  labels?: Record<string, string>;
}) {
  return (
    <div className="mt-2 flex flex-wrap gap-1.5">
      {values.map((value) => {
        const on = selected.includes(value);
        return (
          <button
            key={value}
            type="button"
            onClick={() => onToggle(value)}
            className={cn(
              "h-11 rounded-full px-3 text-xs",
              on ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground",
            )}
          >
            {labels?.[value] ?? value.replace(/-/g, " ")}
          </button>
        );
      })}
    </div>
  );
}
