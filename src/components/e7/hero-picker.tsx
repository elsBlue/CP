import { useEffect, useMemo, useState } from "react";
import { ListFilter } from "lucide-react";
import { EmptyPortrait, HeroPortrait } from "@/components/hero-portrait";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { CLASS_LABEL, ELEMENT_LABEL } from "@/lib/e7/heroes";
import { useCatalog } from "@/lib/e7/catalog";
import { bestHeroMatches, searchHeroes, searchTokens } from "@/lib/e7/engine";
import type { Element, Hero, HeroClass } from "@/lib/e7/types";
import { cn } from "@/lib/utils";

const ELEMENTS: Element[] = ["fire", "ice", "earth", "light", "dark"];
const CLASSES: HeroClass[] = ["knight", "warrior", "mage", "ranger", "thief", "soulweaver"];

export function HeroPicker({
  open,
  onOpenChange,
  taken,
  onSelect,
  title = "Pick a unit",
  maxSelect = 1,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  taken: string[];
  onSelect: (ids: string[]) => void;
  title?: string;
  maxSelect?: number;
}) {
  const [query, setQuery] = useState("");
  const [els, setEls] = useState<Element[]>([]);
  const [cls, setCls] = useState<HeroClass[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [multi, setMulti] = useState(false);
  const [picked, setPicked] = useState<string[]>([]);
  const [wide, setWide] = useState(false);
  const heroes = useCatalog((s) => s.heroes);
  const verified = useMemo(() => heroes.filter((h) => h.verified), [heroes]);
  const takenSet = useMemo(() => new Set(taken), [taken]);
  const canMulti = maxSelect > 1;
  const mode = canMulti && multi;

  useEffect(() => {
    const m = window.matchMedia("(min-width: 768px)");
    const fn = () => setWide(m.matches);
    fn();
    m.addEventListener("change", fn);
    return () => m.removeEventListener("change", fn);
  }, []);

  useEffect(() => {
    if (searchTokens(query).length > 1 && canMulti) setMulti(true);
  }, [query, canMulti]);

  const list = useMemo(() => {
    let pool = searchHeroes(query, verified);
    if (els.length) pool = pool.filter((h) => els.includes(h.element));
    if (cls.length) pool = pool.filter((h) => h.class && cls.includes(h.class));
    return [...pool].sort((a, b) => a.name.localeCompare(b.name));
  }, [query, els, cls, verified]);

  const suggestions = useMemo(() => {
    if (searchTokens(query).length < 2) return [];
    return bestHeroMatches(query, verified).filter((h) => !takenSet.has(h.id)).slice(0, maxSelect);
  }, [query, verified, takenSet, maxSelect]);

  const filterCount = els.length + cls.length;

  function reset() {
    setQuery("");
    setEls([]);
    setCls([]);
    setFiltersOpen(false);
    setMulti(false);
    setPicked([]);
  }

  function commit(ids: string[]) {
    const unique = ids.filter((id, i) => ids.indexOf(id) === i && !takenSet.has(id)).slice(0, maxSelect);
    if (unique.length === 0) return;
    onSelect(unique);
    reset();
    onOpenChange(false);
  }

  function togglePick(id: string) {
    setPicked((cur) => {
      if (cur.includes(id)) return cur.filter((x) => x !== id);
      if (cur.length >= maxSelect) return [...cur.slice(1), id];
      return [...cur, id];
    });
  }

  function toggleEl(el: Element) {
    setEls((cur) => (cur.includes(el) ? cur.filter((x) => x !== el) : [...cur, el]));
  }
  function toggleCl(c: HeroClass) {
    setCls((cur) => (cur.includes(c) ? cur.filter((x) => x !== c) : [...cur, c]));
  }

  return (
    <Sheet
      open={open}
      onOpenChange={(v) => {
        if (!v) reset();
        onOpenChange(v);
      }}
    >
      <SheetContent
        side={wide ? "right" : "bottom"}
        className={cn("gap-0", !wide && "h-[92dvh] max-h-[92dvh]")}
      >
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>
            Only in-game verified kits. Type names separated by commas.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-3 px-5 pb-3">
          <Input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rinak, Arunka, Iseria, Krau"
          />
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant={filtersOpen || filterCount > 0 ? "default" : "secondary"}
              size="sm"
              className="h-11 px-3"
              onClick={() => setFiltersOpen((v) => !v)}
              aria-expanded={filtersOpen}
            >
              <ListFilter className="size-4" />
              Filter
              {filterCount > 0 ? (
                <span className="rounded-full bg-primary-foreground/20 px-1.5 text-xs leading-5">
                  {filterCount}
                </span>
              ) : null}
            </Button>
            {canMulti ? (
              <div className="flex min-h-11 flex-1 rounded-md bg-secondary p-1">
                <button
                  type="button"
                  onClick={() => {
                    setMulti(false);
                    setPicked([]);
                  }}
                  className={cn(
                    "h-9 flex-1 rounded-sm text-xs font-medium",
                    !mode ? "bg-card text-foreground" : "text-muted-foreground",
                  )}
                >
                  Single
                </button>
                <button
                  type="button"
                  onClick={() => setMulti(true)}
                  className={cn(
                    "h-9 flex-1 rounded-sm text-xs font-medium",
                    mode ? "bg-card text-foreground" : "text-muted-foreground",
                  )}
                >
                  Multi
                </button>
              </div>
            ) : null}
          </div>
          {filtersOpen ? (
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-1">
                {ELEMENTS.map((el) => (
                  <button
                    key={el}
                    type="button"
                    onClick={() => toggleEl(el)}
                    className={cn(
                      "h-9 rounded-full px-2.5 text-xs font-medium tracking-wide uppercase",
                      els.includes(el) ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground",
                    )}
                  >
                    {ELEMENT_LABEL[el]}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-1">
                {CLASSES.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => toggleCl(c)}
                    className={cn(
                      "h-9 rounded-full px-2.5 text-xs font-medium tracking-wide",
                      cls.includes(c) ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground",
                    )}
                  >
                    {CLASS_LABEL[c]}
                  </button>
                ))}
              </div>
            </div>
          ) : null}
          {suggestions.length > 1 ? (
            <button
              type="button"
              onClick={() => commit(suggestions.map((h) => h.id))}
              className="min-h-11 rounded-md bg-secondary px-3 text-left text-sm"
            >
              Add {suggestions.length} from search
              <span className="mt-0.5 block text-xs text-muted-foreground">
                {suggestions.map((h) => h.short).join(" · ")}
              </span>
            </button>
          ) : null}
        </div>
        <ScrollArea className="h-full min-h-0 flex-1">
          <ul className="grid grid-cols-1 gap-1 px-3 pb-6 sm:grid-cols-2">
            {list.map((hero) => {
              const locked = takenSet.has(hero.id);
              const on = picked.includes(hero.id);
              return (
                <li key={hero.id}>
                  <button
                    type="button"
                    disabled={locked}
                    onClick={() => {
                      if (mode) togglePick(hero.id);
                      else commit([hero.id]);
                    }}
                    className={cn(
                      "flex min-h-12 w-full items-center gap-3 rounded-lg px-2 py-2 text-left transition-colors duration-150",
                      locked ? "opacity-40" : "hover:bg-secondary",
                      on && "bg-secondary",
                    )}
                  >
                    <HeroPortrait hero={hero} size="sm" dimmed={locked} selected={on} />
                    <HeroMeta hero={hero} locked={locked} picked={on} />
                  </button>
                </li>
              );
            })}
            {list.length === 0 && (
              <li className="col-span-full px-3 py-10 text-center text-sm text-muted-foreground">
                No units match that filter.
              </li>
            )}
          </ul>
        </ScrollArea>
        {mode ? (
          <div className="flex items-center gap-2 border-t border-border px-5 py-3">
            <p className="min-w-0 flex-1 text-sm text-muted-foreground">
              {picked.length} of {maxSelect} selected
            </p>
            <Button type="button" disabled={picked.length === 0} onClick={() => commit(picked)}>
              Add {picked.length || ""}
            </Button>
          </div>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}

function HeroMeta({
  hero,
  locked,
  picked,
}: {
  hero: Hero;
  locked: boolean;
  picked?: boolean;
}) {
  return (
    <span className="min-w-0 flex-1">
      <span className="flex items-center gap-2">
        <span className="truncate text-sm font-medium">{hero.name}</span>
        <Badge variant={hero.element}>{hero.tier}</Badge>
      </span>
      <span className="block truncate text-xs text-muted-foreground">
        {ELEMENT_LABEL[hero.element]} {CLASS_LABEL[hero.class]}
        {hero.verified ? "" : " · kit unverified"}
        {locked ? " · already in" : picked ? " · selected" : ""}
      </span>
    </span>
  );
}

export function SlotButton({
  hero,
  onClick,
  onClear,
  label,
}: {
  hero: Hero | undefined;
  onClick: () => void;
  onClear?: () => void;
  label: string;
}) {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={onClick}
        className="flex min-h-24 w-full flex-col items-center gap-1.5 rounded-xl bg-card p-2 sm:p-2.5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
      >
        {hero ? <HeroPortrait hero={hero} size="lg" /> : <EmptyPortrait size="lg" />}
        <span className="w-full truncate text-center text-xs whitespace-nowrap text-muted-foreground">
          {hero ? hero.short : label}
        </span>
        {hero && !hero.verified ? (
          <span className="w-full truncate text-center text-xs leading-none text-muted-foreground">
            unverified
          </span>
        ) : null}
      </button>
      {hero && onClear ? (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClear();
          }}
          className="absolute top-1 right-1 flex size-9 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-foreground"
          aria-label={`Clear ${hero.name}`}
        >
          <span className="text-xs leading-none">×</span>
        </button>
      ) : null}
    </div>
  );
}
