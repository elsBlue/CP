import { HeroPortrait } from "@/components/hero-portrait";
import { getHero, useCatalog } from "@/lib/e7/catalog";

export function HeroLine({
  id,
  caption,
}: {
  id: string;
  caption?: string;
}) {
  useCatalog((s) => s.heroes);
  const hero = getHero(id);
  if (!hero) return null;
  return (
    <div className="flex items-center gap-3">
      <HeroPortrait hero={hero} size="sm" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium">{hero.name}</p>
        {caption ? (
          <p className="truncate text-xs text-muted-foreground">{caption}</p>
        ) : null}
      </div>
    </div>
  );
}

export function HeroRow({ ids }: { ids: string[] }) {
  useCatalog((s) => s.heroes);
  return (
    <div className="grid grid-cols-4 gap-2">
      {ids.map((id) => {
        const hero = getHero(id);
        if (!hero) return null;
        return (
          <div key={id} className="flex min-w-0 flex-col items-center gap-1">
            <HeroPortrait hero={hero} size="sm" />
            <span className="w-full truncate text-center text-xs whitespace-nowrap text-muted-foreground">
              {hero.short}
            </span>
          </div>
        );
      })}
    </div>
  );
}
