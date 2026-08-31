import { d as TIER_ORDER, t as ARCHETYPE_META } from "./recipes-6teBQ5tU.mjs";
import { a as allRecipes, i as allHeroes, o as getHero } from "./router-CaxQZeMY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/engine-akwzvVQ1.js
function heroesOf(ids) {
	return ids.map((id) => getHero(id)).filter((h) => Boolean(h));
}
function unique(arr) {
	return [...new Set(arr)];
}
function classifyDefense(ids) {
	const heroes = heroesOf(ids);
	if (heroes.length === 0) return null;
	const tags = unique(heroes.flatMap((h) => h.tags));
	const roles = unique(heroes.flatMap((h) => h.roles));
	const idSet = new Set(ids);
	const scores = {
		"speed-cleave": 0,
		"harsetti-stall": 0,
		"revive-wall": 0,
		"injury-grind": 0,
		"evasion-counter": 0,
		"turn2-control": 0,
		"immunity-soul": 0,
		"bruiser-mix": 1
	};
	if (idSet.has("harsetti") || roles.includes("speedcap")) scores["harsetti-stall"] += 6;
	if (roles.includes("revive")) scores["revive-wall"] += 4;
	if (roles.includes("tank") && roles.includes("revive")) scores["revive-wall"] += 3;
	if (tags.includes("injury") && (roles.includes("bruiser") || roles.includes("tank"))) scores["injury-grind"] += 5;
	if (tags.includes("evade") || roles.includes("evasion")) scores["evasion-counter"] += 5;
	if (tags.includes("counter") && tags.includes("evade")) scores["evasion-counter"] += 2;
	if (roles.includes("opener") && (roles.includes("cleave") || tags.includes("aoe"))) scores["speed-cleave"] += 5;
	if (roles.includes("strip") && roles.includes("cleave")) scores["speed-cleave"] += 3;
	if (roles.includes("control") && (tags.includes("cr-cut") || tags.includes("cr-push"))) scores["turn2-control"] += 4;
	if (idSet.has("rinak") || idSet.has("lady-of-the-scales") || idSet.has("frieren")) scores["turn2-control"] += 3;
	if (roles.includes("soulblock") || tags.includes("immunity") && roles.includes("tank")) scores["immunity-soul"] += 4;
	if (idSet.has("belian") || idSet.has("politis") || idSet.has("sea-phantom-politis")) scores["immunity-soul"] += 2;
	if (roles.includes("bruiser") && roles.includes("tank")) scores["bruiser-mix"] += 2;
	const archetype = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
	const threats = heroes.map((h) => ({
		heroId: h.id,
		text: h.kit,
		severity: h.defense >= 9 ? 3 : h.defense >= 7 ? 2 : 1
	})).sort((a, b) => b.severity - a.severity);
	const notes = [];
	if (roles.includes("speedcap")) notes.push("Speed contest is off the table.");
	if (roles.includes("revive")) notes.push("Kills can reset. Bring anti-revive or accept a two-cycle fight.");
	if (roles.includes("soulblock")) notes.push("Soulburn cleave will brick. Play without souls.");
	if (tags.includes("evade")) notes.push("Single-target S3s will miss. Prefer AoE or dual attacks.");
	if (tags.includes("injury")) notes.push("They want the long fight. Do not race raw HP.");
	if (tags.includes("immunity") && !roles.includes("strip")) notes.push("Buffs stick. A stripper belongs in the draft.");
	if (roles.includes("opener") && roles.includes("cleave")) notes.push("They want turn one. Cap, miss, or outspeed.");
	const meta = ARCHETYPE_META[archetype];
	return {
		archetype,
		title: meta.title,
		headline: meta.blurb,
		threats,
		notes,
		tags,
		roles
	};
}
function slotScore(hero, need) {
	let score = 0;
	if (need.prefer?.includes(hero.id)) score += 8;
	if (need.roles?.some((r) => hero.roles.includes(r))) score += 4;
	if (need.tags?.some((t) => hero.tags.includes(t))) score += 3;
	if (need.avoidRoles?.some((r) => hero.roles.includes(r))) score -= 6;
	score += TIER_ORDER[hero.tier];
	score += hero.offense * .15;
	return score;
}
function fillRecipe(recipe, pool, enemyIds) {
	const used = /* @__PURE__ */ new Set();
	const enemy = new Set(enemyIds);
	const heroIds = [];
	const missing = [];
	for (const need of recipe.slots) {
		let best = null;
		let bestScore = 0;
		for (const hero of pool) {
			if (used.has(hero.id) || enemy.has(hero.id)) continue;
			const s = slotScore(hero, need);
			if (s > bestScore) {
				best = hero;
				bestScore = s;
			}
		}
		const matched = best && bestScore >= 4 && (need.prefer?.includes(best.id) || need.roles?.some((r) => best.roles.includes(r)) || need.tags?.some((t) => best.tags.includes(t)));
		if (best && matched) {
			used.add(best.id);
			heroIds.push(best.id);
		} else {
			missing.push(need.label);
			if (best && !used.has(best.id)) {
				used.add(best.id);
				heroIds.push(best.id);
			}
		}
	}
	return {
		heroIds,
		missing,
		coverage: (4 - missing.length) / 4
	};
}
function whyFor(recipe, read, filled) {
	const why = [];
	why.push(recipe.summary);
	const names = new Set(filled.map((h) => h.id));
	if (read.roles.includes("speedcap") && filled.some((h) => h.tags.includes("injury"))) why.push("Injury ignores the speed cap — you play the fight Harsetti wants, better.");
	if (read.roles.includes("revive") && filled.some((h) => h.tags.includes("anti-revive"))) why.push("Anti-revive stops the reset so the wall cannot stall forever.");
	if (read.tags.includes("evade") && filled.some((h) => h.tags.includes("aoe") || h.tags.includes("dual-attack"))) why.push("AoE / dual attacks do not care if Violet rolls a miss.");
	if (read.roles.includes("soulblock") && !filled.some((h) => h.tags.includes("soulburn"))) why.push("This draft does not need souls, so Belian is just a bulky knight.");
	if (names.has("briar-witch-iseria") && (read.tags.includes("immunity") || read.roles.includes("revive"))) why.push("B.Iseria strips through Effect Resistance — the cleanest answer to buffed walls.");
	return why.slice(0, 3);
}
function requirePool() {
	return allHeroes().map((h) => h.id);
}
function recommendCounters(enemyIds, poolIds) {
	const read = classifyDefense(enemyIds);
	if (!read) return [];
	const theory = !poolIds || poolIds.length < 4;
	const pool = heroesOf(theory ? requirePool() : poolIds ?? []);
	const usable = pool.length >= 4 ? pool : heroesOf(requirePool());
	const isTheory = theory || pool.length < 4;
	const results = [];
	for (const recipe of allRecipes()) {
		const vsBonus = recipe.vs.includes(read.archetype) ? 18 : 0;
		if (vsBonus === 0 && recipe.vs.length > 0) {
			if (read.archetype === "harsetti-stall" && recipe.id === "outspeed-cleave" || read.archetype === "evasion-counter" && recipe.id === "outspeed-cleave" || read.archetype === "speed-cleave" && recipe.id === "injury-vs-stall") continue;
		}
		const filled = fillRecipe(recipe, usable, enemyIds);
		if (filled.heroIds.length < 3) continue;
		const filledHeroes = heroesOf(filled.heroIds);
		const tierAvg = filledHeroes.reduce((s, h) => s + TIER_ORDER[h.tier], 0) / Math.max(1, filledHeroes.length);
		const score = Math.round(Math.min(99, vsBonus + filled.coverage * 55 + tierAvg * 6 + (isTheory ? -8 : 4)));
		results.push({
			recipeId: recipe.id,
			name: recipe.name,
			heroIds: filled.heroIds,
			score,
			coverage: filled.coverage,
			wincon: recipe.wincon,
			setup: recipe.setup,
			pitfalls: recipe.pitfalls,
			missing: filled.missing,
			theorycraft: isTheory,
			why: whyFor(recipe, read, filledHeroes)
		});
	}
	results.sort((a, b) => b.score - a.score || b.coverage - a.coverage);
	const seen = /* @__PURE__ */ new Set();
	const uniqueTeams = [];
	for (const team of results) {
		const key = [...team.heroIds].sort().join("|");
		if (seen.has(key)) continue;
		seen.add(key);
		uniqueTeams.push(team);
		if (uniqueTeams.length >= 4) break;
	}
	return uniqueTeams;
}
function searchHeroes(query, list = allHeroes()) {
	const q = query.trim().toLowerCase();
	if (!q) return list;
	return list.filter((h) => {
		return `${h.name} ${h.short} ${h.element} ${h.class} ${h.roles.join(" ")} ${h.tags.join(" ")}`.toLowerCase().includes(q) || h.name.toLowerCase().split(" ").some((w) => w.startsWith(q));
	});
}
//#endregion
export { recommendCounters as n, searchHeroes as r, classifyDefense as t };
