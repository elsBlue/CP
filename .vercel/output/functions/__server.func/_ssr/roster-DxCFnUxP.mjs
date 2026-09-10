import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { r as CLASS_LABEL, s as ELEMENT_LABEL } from "./recipes-DsR1fcfA.mjs";
import { a as cn, i as Input, o as daysAgoLabel, r as Button } from "./boot-screen-CBR_ZPNs.mjs";
import { n as builtIds, r as useArenaStore, s as useCatalog } from "./router-DrPSiwCO.mjs";
import { n as HeroPortrait, r as RequireAuth, t as AppShell } from "./require-auth-BYPs6EYn.mjs";
import { a as searchHeroes } from "./engine-DWttV1BD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/roster-DxCFnUxP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RosterView() {
	const roster = useArenaStore((s) => s.roster);
	const toggleBuilt = useArenaStore((s) => s.toggleBuilt);
	const loadPresetRoster = useArenaStore((s) => s.loadPresetRoster);
	const heroes = useCatalog((s) => s.heroes);
	const [query, setQuery] = (0, import_react.useState)("");
	const [onlyBuilt, setOnlyBuilt] = (0, import_react.useState)(false);
	const [kit, setKit] = (0, import_react.useState)("all");
	const [confirmClear, setConfirmClear] = (0, import_react.useState)(false);
	const built = builtIds(roster);
	const verifiedN = heroes.filter((h) => h.verified).length;
	const builtVerified = built.filter((id) => heroes.find((h) => h.id === id)?.verified).length;
	const list = (0, import_react.useMemo)(() => {
		let pool = searchHeroes(query, heroes);
		if (onlyBuilt) pool = pool.filter((h) => roster[h.id]?.built);
		if (kit === "verified") pool = pool.filter((h) => h.verified);
		if (kit === "pending") pool = pool.filter((h) => !h.verified);
		return pool;
	}, [
		query,
		onlyBuilt,
		kit,
		roster,
		heroes
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "rise-in flex flex-col gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase",
						children: "Roster"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-2xl leading-[1.15] tracking-tight sm:text-3xl",
						children: "Your roster"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-lg text-sm text-muted-foreground",
						children: "Tap to mark built. That is a note of what you have — Scout does not require it. Turn on Only built units there if you want lineups from this list."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-4 gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatChip, {
						label: "Built",
						value: String(built.length)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatChip, {
						label: "Ready",
						value: String(builtVerified)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatChip, {
						label: "Verified",
						value: String(verifiedN)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatChip, {
						label: "Pending",
						value: String(heroes.length - verifiedN)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap items-center gap-1.5",
						children: confirmClear ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "w-full text-sm text-muted-foreground",
								children: "Clear all built marks? This cannot be undone."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "ghost",
								className: "h-8 px-2.5 text-xs",
								onClick: () => setConfirmClear(false),
								children: "Cancel"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "secondary",
								className: "h-8 px-2.5 text-xs",
								onClick: () => {
									loadPresetRoster("clear");
									setConfirmClear(false);
								},
								children: "Clear all"
							})
						] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "secondary",
								className: "h-8 px-2.5 text-xs",
								onClick: () => loadPresetRoster("challenger"),
								children: "Full kit"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "secondary",
								className: "h-8 px-2.5 text-xs",
								onClick: () => loadPresetRoster("starter"),
								children: "Starter"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "ghost",
								className: "h-8 px-2.5 text-xs",
								onClick: () => setConfirmClear(true),
								children: "Clear"
							})
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "Search heroes…",
						className: "h-10"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleChip, {
							on: onlyBuilt,
							onClick: () => setOnlyBuilt((v) => !v),
							children: "Built only"
						}), [
							["all", "All"],
							["verified", "Verified"],
							["pending", "Pending"]
						].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleChip, {
							on: kit === id,
							onClick: () => setKit(id),
							children: label
						}, id))]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-1",
				children: list.map((hero) => {
					const builtOn = Boolean(roster[hero.id]?.built);
					const checked = daysAgoLabel(hero.checkedAt);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => toggleBuilt(hero.id),
						"aria-pressed": builtOn,
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
										CLASS_LABEL[hero.class],
										hero.verified ? ` · in-game verified${checked ? ` ${checked}` : ""}` : " · kit pending"
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("inline-flex h-11 min-w-24 items-center justify-center rounded-full px-3 text-xs font-medium tracking-wide uppercase", builtOn ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"),
								children: builtOn ? "Built" : "Not built"
							})
						]
					}) }, hero.id);
				})
			})
		]
	});
}
function StatChip({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-card px-2 py-1.5 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[10px] tracking-wide text-muted-foreground uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-base tabular-nums leading-tight",
			children: value
		})]
	});
}
function ToggleChip({ on, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("h-8 shrink-0 rounded-md px-2.5 text-xs shadow-[var(--shadow-border)]", on ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"),
		children
	});
}
function RosterPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequireAuth, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RosterView, {}) }) });
}
//#endregion
export { RosterPage as component };
