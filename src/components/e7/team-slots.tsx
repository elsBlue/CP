import { useState } from "react";
import { FormationBoard } from "@/components/e7/formation-board";
import { HeroPicker } from "@/components/e7/hero-picker";
import type { FormationFacing, ScoutMode } from "@/lib/e7/formation";

export function TeamSlots({
  ids,
  onChangeSlot,
  mode = "arena",
  facing = "enemy",
  maxUnits,
  exclude,
  pickerTitle = "Pick a unit",
}: {
  ids: string[];
  onChangeSlot: (index: number, id: string | null) => void;
  mode?: ScoutMode;
  facing?: FormationFacing;
  maxUnits?: number;
  exclude?: string[];
  labels?: [string, string, string, string] | string[];
  pickerTitle?: string;
}) {
  const [slot, setSlot] = useState<number | null>(null);
  const n = Math.max(4, ids.length);
  const cap = maxUnits ?? n;
  const filled = ids.filter(Boolean).length;
  const taken = [
    ...ids.filter((id, i) => id && i !== slot),
    ...(exclude ?? []).filter(Boolean),
  ];
  const currentHas = slot !== null && Boolean(ids[slot]);
  const room = cap - (filled - (currentHas ? 1 : 0));
  const emptyHere =
    slot === null ? 1 : ids.filter((id, i) => !id || i === slot).length;
  const capacity = Math.max(0, Math.min(emptyHere, room));

  function applyPicks(picks: string[]) {
    if (slot === null || picks.length === 0) return;
    const next = [...ids];
    while (next.length < n) next.push("");
    let used = next.filter(Boolean).length;
    const blocked = new Set((exclude ?? []).filter(Boolean));
    const rest = [...picks].filter((id) => !blocked.has(id));
    if (next[slot]) used -= 1;
    next[slot] = rest.shift() ?? next[slot] ?? "";
    if (next[slot]) used += 1;
    for (let i = 0; i < n && rest.length; i++) {
      if (i === slot) continue;
      if (next[i]) continue;
      if (used >= cap) break;
      next[i] = rest.shift() ?? "";
      if (next[i]) used += 1;
    }
    next.forEach((id, i) => {
      if (id !== (ids[i] ?? "")) onChangeSlot(i, id || null);
    });
  }

  return (
    <>
      <FormationBoard
        ids={ids}
        mode={mode}
        facing={facing}
        onSlot={(i) => {
          if (!ids[i] && filled >= cap) return;
          setSlot(i);
        }}
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
