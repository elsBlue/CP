import { n as ARCHETYPE_META } from "./recipes-DsR1fcfA.mjs";
import { o as getHero } from "./router-DrPSiwCO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/export-stats-D8bURXXW.js
function winRate(wins, n) {
	if (n === 0) return null;
	return Math.round(wins / n * 100);
}
function groupByRecipe(matches) {
	const map = /* @__PURE__ */ new Map();
	for (const m of matches) {
		const key = m.recipeId || "unknown";
		const cur = map.get(key) ?? {
			key,
			label: m.recipeName || "Unlabeled",
			n: 0,
			wins: 0
		};
		cur.n += 1;
		if (m.won) cur.wins += 1;
		map.set(key, cur);
	}
	return [...map.values()].sort((a, b) => b.n - a.n || b.wins - a.wins);
}
function groupByArchetype(matches) {
	const map = /* @__PURE__ */ new Map();
	for (const m of matches) {
		const key = m.archetype || "unknown";
		const cur = map.get(key) ?? {
			key,
			label: key === "unknown" ? "Unlabeled" : key.replace(/-/g, " "),
			n: 0,
			wins: 0
		};
		cur.n += 1;
		if (m.won) cur.wins += 1;
		map.set(key, cur);
	}
	return [...map.values()].sort((a, b) => b.n - a.n);
}
/**
* One-file fight dump for dropping into chat. Do not rewrite this whole file.
*/
function label(id) {
	if (!id) return "";
	const h = getHero(id);
	return h?.short || h?.name || id;
}
function wallTitle(id) {
	if (!id) return "";
	return id in ARCHETYPE_META ? ARCHETYPE_META[id].title : id;
}
function buildFightDump(input) {
	const wins = input.matches.filter((m) => m.won).length;
	const losses = input.matches.length - wins;
	const built = Object.values(input.roster).filter((r) => r.built).length;
	return {
		app: "crownpath",
		v: 1,
		exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
		vp: input.vp,
		record: `${wins}W ${losses}L`,
		built,
		restrictToRoster: input.restrictToRoster,
		byWall: groupByArchetype(input.matches).map((r) => ({
			wall: wallTitle(r.key) || r.label,
			w: r.wins,
			l: r.n - r.wins
		})),
		byRecipe: groupByRecipe(input.matches).map((r) => ({
			name: r.label,
			w: r.wins,
			l: r.n - r.wins
		})),
		fights: input.matches.map((m) => ({
			at: new Date(m.at).toISOString(),
			result: m.won ? "W" : "L",
			vp: m.vpDelta,
			wall: wallTitle(m.archetype),
			recipe: m.recipeName || "",
			enemy: m.enemy.filter(Boolean).map(label),
			team: m.team.filter(Boolean).map(label),
			note: m.note || ""
		}))
	};
}
function dumpFilename(dump) {
	return `crownpath-stats-${dump.exportedAt.slice(0, 10)}.json`;
}
function downloadFightDump(dump) {
	const text = JSON.stringify(dump, null, 2);
	const blob = new Blob([text], { type: "application/json" });
	const href = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = href;
	a.download = dumpFilename(dump);
	a.click();
	URL.revokeObjectURL(href);
}
async function copyFightDump(dump) {
	await navigator.clipboard.writeText(JSON.stringify(dump, null, 2));
}
function downloadJson(name, data) {
	const text = JSON.stringify(data, null, 2);
	const blob = new Blob([text], { type: "application/json" });
	const href = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = href;
	a.download = name;
	a.click();
	URL.revokeObjectURL(href);
}
//#endregion
export { groupByArchetype as a, downloadJson as i, copyFightDump as n, groupByRecipe as o, downloadFightDump as r, winRate as s, buildFightDump as t };
