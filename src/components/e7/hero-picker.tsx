import { useEffect, useMemo, useState } from "react";
import { EmptyPortrait, HeroPortrait } from "@/components/hero-portrait";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { CLASS_LABEL, ELEMENT_LABEL } from "@/lib/e7/heroes";
import { useCatalog } from "@/lib/e7/catalog";
import { searchHeroes } from "@/lib/e7/engine";
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
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  taken: string[];
  onSelect: (id: string) => void;
  title?: string;
}) {
  const [query, setQuery] = useState("");
  const [els, setEls] = useState<Element[]>([]);
  const [cls, setCls] = useState<HeroClass[]>([]);
  const [wide, setWide] = useState(false);
  const heroes = useCatalog((s) => s.heroes);
  const takenSet = useMemo(() => new Set(taken), [taken]);

  useEffect(() => {
    const m = window.matchMedia("(min-width: 768px)");
    const fn = () => setWide(m.matches);
    fn();
    m.addEventListener("change", fn);
    return () => m.removeEventListener("change", fn);
  }, []);

  const list = useMemo(() => {
    let pool = searchHeroes(query, heroes);
    if (els.length) pool = pool.filter((h) => els.includes(h.element));
    if (cls.length) pool = pool.filter((h) => h.class && cls.includes(h.class));
    return pool;
  }, [query, els, cls, heroes]);

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
        if (!v) {
          setQuery("");
          setEls([]);
          setCls([]);
        }
        onOpenChange(v);
      }}
    >
      <SheetContent side={wide ? "right" : "bottom"} className="gap-0">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>Search by name, element, or role. Duplicates on this team are locked.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-3 px-5 pb-4">
          <Input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rinak, strip, injury…"
          />
          <div className="flex flex-wrap gap-1.5">
            {ELEMENTS.map((el) => (
              <button
                key={el}
                type="button"
                onClick={() => toggleEl(el)}
                className={cn(
                  "h-11 rounded-full px-3 text-xs font-medium tracking-wide uppercase transition-colors duration-150",
                  els.includes(el) ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground",
                )}
              >
                {ELEMENT_LABEL[el]}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {CLASSES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => toggleCl(c)}
                className={cn(
                  "h-11 rounded-full px-3 text-xs font-medium tracking-wide transition-colors duration-150",
                  cls.includes(c) ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground",
                )}
              >
                {CLASS_LABEL[c]}
              </button>
            ))}
          </div>
        </div>
        <ScrollArea className={wide ? "h-full min-h-0 flex-1" : "h-[46dvh]"}>
          <ul className="grid grid-cols-1 gap-1 px-3 pb-6 sm:grid-cols-2">
            {list.map((hero) => {
              const locked = takenSet.has(hero.id);
              return (
                <li key={hero.id}>
                  <button
                    type="button"
                    disabled={locked}
                    onClick={() => {
                      onSelect(hero.id);
                      onOpenChange(false);
                    }}
                    className={cn(
                      "flex min-h-12 w-full items-center gap-3 rounded-lg px-2 py-2 text-left transition-colors duration-150",
                      locked ? "opacity-40" : "hover:bg-secondary",
                    )}
                  >
                    <HeroPortrait hero={hero} size="sm" dimmed={locked} />
                    <HeroMeta hero={hero} locked={locked} />
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
      </SheetContent>
    </Sheet>
  );
}

function HeroMeta({ hero, locked }: { hero: Hero; locked: boolean }) {
  return (
    <span className="min-w-0 flex-1">
      <span className="flex items-center gap-2">
        <span className="truncate text-sm font-medium">{hero.name}</span>
        <Badge variant={hero.element}>{hero.tier}</Badge>
      </span>
      <span className="block truncate text-xs text-muted-foreground">
        {ELEMENT_LABEL[hero.element]} {CLASS_LABEL[hero.class]}
        {locked ? " · already in" : ""}
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
