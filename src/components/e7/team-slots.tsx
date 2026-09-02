import { useState } from "react";
import { FormationBoard } from "@/components/e7/formation-board";
import { HeroPicker } from "@/components/e7/hero-picker";

export function TeamSlots({
  ids,
  onChangeSlot,
  pickerTitle = "Pick a unit",
}: {
  ids: string[];
  onChangeSlot: (index: number, id: string | null) => void;
  labels?: [string, string, string, string] | string[];
  pickerTitle?: string;
}) {
  const [slot, setSlot] = useState<number | null>(null);
  const taken = ids.filter((id, i) => id && i !== slot);
  const capacity =
    slot === null
      ? 1
      : ids.filter((id, i) => !id || i === slot).length;

  function applyPicks(picks: string[]) {
    if (slot === null || picks.length === 0) return;
    const next = [...ids];
    while (next.length < 4) next.push("");
    const rest = [...picks];
    next[slot] = rest.shift() ?? next[slot] ?? "";
    for (let i = 0; i < 4 && rest.length; i++) {
      if (i === slot) continue;
      if (!next[i]) next[i] = rest.shift() ?? "";
    }
    next.forEach((id, i) => {
      if (id !== (ids[i] ?? "")) onChangeSlot(i, id || null);
    });
  }

  return (
    <>
      <FormationBoard
        ids={ids}
        onSlot={setSlot}
        onClear={(i) => onChangeSlot(i, null)}
      />
      <HeroPicker
        open={slot !== null}
        onOpenChange={(v) => {
          if (!v) setSlot(null);
        }}
        taken={taken}
        title={pickerTitle}
        maxSelect={Math.max(1, capacity)}
        onSelect={(picked) => {
          applyPicks(picked);
        }}
      />
    </>
  );
}
