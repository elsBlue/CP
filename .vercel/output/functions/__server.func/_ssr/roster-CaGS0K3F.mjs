import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as ELEMENT_LABEL, n as CLASS_LABEL } from "./recipes-6teBQ5tU.mjs";
import { i as cn, n as Button, r as Input } from "./boot-screen-Dq6k0eSO.mjs";
import { n as builtIds, r as useArenaStore, s as useCatalog } from "./router-CaxQZeMY.mjs";
import { n as RequireAuth, t as AppShell } from "./require-auth-DmseqNkU.mjs";
import { r as HeroPortrait, t as Badge } from "./badge-DJYBBhyT.mjs";
import { r as searchHeroes } from "./engine-akwzvVQ1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/roster-CaGS0K3F.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RosterView() {
	const roster = useArenaStore((s) => s.roster);
	const toggleBuilt = useArenaStore((s) => s.toggleBuilt);
	const loadPresetRoster = useArenaStore((s) => s.loadPresetRoster);
	const heroes = useCatalog((s) => s.heroes);
	const [query, setQuery] = (0, import_react.useState)("");
	const [onlyBuilt, setOnlyBuilt] = (0, import_react.useState)(false);
	const built = builtIds(roster);
	const list = (0, import_react.useMemo)(() => {
		let pool = searchHeroes(query, heroes);
		if (onlyBuilt) pool = pool.filter((h) => roster[h.id]?.built);
		return pool;
	}, [
		query,
		onlyBuilt,
		roster,
		heroes
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "rise-in flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase",
						children: "Roster"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl leading-[1.1] tracking-tight sm:text-4xl",
						children: "Built units"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-lg text-sm leading-relaxed text-muted-foreground",
						children: "Scout fills strategies from this list. Saved to your account."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
					variant: "steel",
					children: [built.length, " built"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2 sm:ml-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "secondary",
							onClick: () => loadPresetRoster("challenger"),
							children: "Full kit"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "secondary",
							onClick: () => loadPresetRoster("starter"),
							children: "Starter"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							onClick: () => loadPresetRoster("clear"),
							children: "Clear"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: query,
					onChange: (e) => setQuery(e.target.value),
					placeholder: "Search heroes…",
					className: "sm:flex-1"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOnlyBuilt((v) => !v),
					className: cn("h-11 shrink-0 rounded-md px-4 text-sm shadow-[var(--shadow-border)]", onlyBuilt ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"),
					children: "Built only"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-1",
				children: list.map((hero) => {
					const builtOn = Boolean(roster[hero.id]?.built);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => toggleBuilt(hero.id),
						className: "grid min-h-14 w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 overflow-hidden rounded-xl bg-card px-3 py-2.5 text-left shadow-[var(--shadow-border)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroPortrait, {
								hero,
								size: "sm",
								dimmed: !builtOn
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate text-sm font-medium",
									children: hero.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block truncate text-xs text-muted-foreground",
									children: [
										ELEMENT_LABEL[hero.element],
										" ",
										CLASS_LABEL[hero.class]
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("inline-flex h-11 min-w-16 items-center justify-center rounded-full px-3 text-xs font-medium tracking-wide uppercase", builtOn ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"),
								children: builtOn ? "Built" : "Off"
							})
						]
					}) }, hero.id);
				})
			})
		]
	});
}
function RosterPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequireAuth, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RosterView, {}) }) });
}
//#endregion
export { RosterPage as component };
