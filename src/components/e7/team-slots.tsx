import { useState } from "react";
import { HeroPicker, SlotButton } from "@/components/e7/hero-picker";
import { getHero, useCatalog } from "@/lib/e7/catalog";

export function TeamSlots({
  ids,
  onChangeSlot,
  labels = ["One", "Two", "Three", "Four"],
  pickerTitle = "Pick a unit",
}: {
  ids: string[];
  onChangeSlot: (index: number, id: string | null) => void;
  labels?: [string, string, string, string] | string[];
  pickerTitle?: string;
}) {
  const [slot, setSlot] = useState<number | null>(null);
  const heroes = useCatalog((s) => s.heroes);
  const taken = ids.filter((id, i) => id && i !== slot);

  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        {[0, 1, 2, 3].map((i) => {
          const id = ids[i];
          const hero = id ? heroes.find((h) => h.id === id) ?? getHero(id) : undefined;
          return (
            <SlotButton
              key={i}
              hero={hero}
              label={labels[i] ?? `Slot ${i + 1}`}
              onClick={() => setSlot(i)}
              onClear={hero ? () => onChangeSlot(i, null) : undefined}
            />
          );
        })}
      </div>
      <HeroPicker
        open={slot !== null}
        onOpenChange={(v) => {
          if (!v) setSlot(null);
        }}
        taken={taken}
        title={pickerTitle}
        onSelect={(id) => {
          if (slot !== null) onChangeSlot(slot, id);
        }}
      />
    </>
  );
}
