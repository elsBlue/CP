import { create } from "zustand";
import { HERO_BY_ID, HEROES } from "./heroes";
import { PRESET_DEFENSES, RECIPES } from "./recipes";
import type { DefensePreset, Hero, Recipe } from "./types";

type CatalogState = {
  heroes: Hero[];
  recipes: Recipe[];
  presets: DefensePreset[];
  loaded: boolean;
  setCatalog: (next: { heroes: Hero[]; recipes: Recipe[]; presets: DefensePreset[] }) => void;
};

export const useCatalog = create<CatalogState>((set) => ({
  heroes: HEROES,
  recipes: RECIPES,
  presets: PRESET_DEFENSES,
  loaded: false,
  setCatalog: (next) =>
    set({
      heroes: next.heroes,
      recipes: next.recipes,
      presets: next.presets,
      loaded: true,
    }),
}));

export function allHeroes(): Hero[] {
  return useCatalog.getState().heroes;
}

export function allRecipes(): Recipe[] {
  return useCatalog.getState().recipes;
}

export function allPresets(): DefensePreset[] {
  return useCatalog.getState().presets;
}

export function getHero(id: string): Hero | undefined {
  return useCatalog.getState().heroes.find((h) => h.id === id) ?? HERO_BY_ID[id];
}
