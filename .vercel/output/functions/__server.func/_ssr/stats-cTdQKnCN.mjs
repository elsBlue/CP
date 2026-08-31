import "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as cn } from "./boot-screen-Dq6k0eSO.mjs";
import { o as getHero, s as useCatalog } from "./router-CaxQZeMY.mjs";
import { r as HeroPortrait } from "./badge-DJYBBhyT.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
function HeroRow({ ids }) {
	useCatalog((s) => s.heroes);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-4 gap-2",
		children: ids.map((id) => {
			const hero = getHero(id);
			if (!hero) return null;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-col items-center gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroPortrait, {
					hero,
					size: "sm"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-full truncate text-center text-xs whitespace-nowrap text-muted-foreground",
					children: hero.short
				})]
			}, id);
		})
	});
}
function Card({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-xl bg-card text-card-foreground shadow-[var(--shadow-border)]", className),
		...props
	});
}
function CardContent({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("p-5", className),
		...props
	});
}
function winRate(wins, n) {
	if (n === 0) return null;
	return Math.round(wins / n * 100);
}
function recordFor(matches, recipeId) {
	const list = matches.filter((m) => (m.recipeId ?? "") === (recipeId ?? ""));
	return {
		key: recipeId ?? "",
		label: list[0]?.recipeName ?? "Strategy",
		n: list.length,
		wins: list.filter((m) => m.won).length
	};
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
//#endregion
export { groupByRecipe as a, groupByArchetype as i, CardContent as n, recordFor as o, HeroRow as r, winRate as s, Card as t };
