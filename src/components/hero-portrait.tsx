import {
  Heart,
  Shield,
  Sparkles,
  Swords,
  Target,
  WandSparkles,
} from "lucide-react";
import { CLASS_LABEL, ELEMENT_LABEL } from "@/lib/e7/heroes";
import type { Hero } from "@/lib/e7/types";
import { cn } from "@/lib/utils";

const CLASS_ICON = {
  knight: Shield,
  warrior: Swords,
  mage: WandSparkles,
  ranger: Target,
  thief: Sparkles,
  soulweaver: Heart,
} as const;

const ELEMENT_CLASS: Record<Hero["element"], string> = {
  fire: "text-fire",
  ice: "text-ice",
  earth: "text-earth",
  light: "text-light",
  dark: "text-dark",
};

const RING_CLASS: Record<Hero["element"], string> = {
  fire: "shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fire)_55%,transparent)]",
  ice: "shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-ice)_55%,transparent)]",
  earth: "shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-earth)_55%,transparent)]",
  light: "shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-light)_55%,transparent)]",
  dark: "shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-dark)_55%,transparent)]",
};

const WASH: Record<Hero["element"], string> = {
  fire: "from-fire/20",
  ice: "from-ice/20",
  earth: "from-earth/20",
  light: "from-light/18",
  dark: "from-dark/22",
};

function initials(hero: Hero) {
  const parts = hero.short.split(/[.\s]+/).filter(Boolean);
  if (parts.length >= 2) return (parts[0]![0] + parts[1]![0]).toUpperCase();
  return hero.short.slice(0, 2).toUpperCase();
}

export function HeroPortrait({
  hero,
  size = "md",
  selected = false,
  dimmed = false,
}: {
  hero: Hero;
  size?: "sm" | "md" | "lg";
  selected?: boolean;
  dimmed?: boolean;
}) {
  const Icon = CLASS_ICON[hero.class];
  const dim = size === "sm" ? "size-11" : size === "lg" ? "size-16" : "size-14";
  const text = size === "sm" ? "text-xs" : size === "lg" ? "text-base" : "text-sm";

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-lg bg-linear-to-b to-transparent",
        dim,
        WASH[hero.element],
        RING_CLASS[hero.element],
        selected && "ring-2 ring-primary/70",
        dimmed && "opacity-40",
      )}
      title={`${hero.name} · ${ELEMENT_LABEL[hero.element]} ${CLASS_LABEL[hero.class]}`}
    >
      {hero.icon ? (
        <img src={hero.icon} alt="" className="size-full object-cover" />
      ) : (
        <>
          <span
            className={cn(
              "font-display font-medium tracking-tight text-foreground/90",
              text,
            )}
          >
            {initials(hero)}
          </span>
          <Icon
            className={cn("absolute right-0.5 bottom-0.5 size-3", ELEMENT_CLASS[hero.element])}
            strokeWidth={2}
          />
          <span className="absolute top-0.5 left-0.5 font-mono text-xs font-medium tracking-wider text-muted-foreground">
            {hero.tier}
          </span>
        </>
      )}
    </div>
  );
}

export function EmptyPortrait({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const dim = size === "sm" ? "size-11" : size === "lg" ? "size-16" : "size-14";
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-lg bg-secondary text-muted-foreground shadow-[var(--shadow-border)]",
        dim,
      )}
    >
      <span className="font-display text-lg leading-none">+</span>
    </div>
  );
}

export function ElementChip({ element }: { element: Hero["element"] }) {
  return (
    <span className={cn("text-[11px] font-medium uppercase tracking-wider", ELEMENT_CLASS[element])}>
      {ELEMENT_LABEL[element]}
    </span>
  );
}
