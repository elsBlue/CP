import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _ as rankForVp, g as nextRank, t as ARCHETYPE_META, v as rankProgress } from "./recipes-6teBQ5tU.mjs";
import { i as cn, n as Button, r as Input } from "./boot-screen-Dq6k0eSO.mjs";
import { r as useArenaStore } from "./router-CaxQZeMY.mjs";
import { t as Label } from "./label-C5rzV2O8.mjs";
import { n as RequireAuth, t as AppShell } from "./require-auth-DmseqNkU.mjs";
import { t as Badge } from "./badge-DJYBBhyT.mjs";
import { a as groupByRecipe, i as groupByArchetype, n as CardContent, r as HeroRow, s as winRate, t as Card } from "./stats-cTdQKnCN.mjs";
import { a as ResponsiveContainer, i as Area, n as YAxis, o as Tooltip, r as XAxis, t as AreaChart } from "../_libs/recharts+[...].mjs";
import { n as Root, t as Indicator } from "../_libs/radix-ui__react-progress.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/log-DI5hOM1M.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Progress({ className, value, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		className: cn("relative h-1.5 w-full overflow-hidden rounded-full bg-secondary", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
			className: "h-full bg-primary transition-[width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
			style: { width: `${value ?? 0}%` }
		})
	});
}
function LogView() {
	const vp = useArenaStore((s) => s.vp);
	const setVp = useArenaStore((s) => s.setVp);
	const matches = useArenaStore((s) => s.matches);
	const removeMatch = useArenaStore((s) => s.removeMatch);
	const clearMatches = useArenaStore((s) => s.clearMatches);
	const rank = rankForVp(vp);
	const nxt = nextRank(vp);
	const progress = rankProgress(vp);
	const wins = matches.filter((m) => m.won).length;
	const rate = winRate(wins, matches.length);
	const byRecipe = (0, import_react.useMemo)(() => groupByRecipe(matches), [matches]);
	const byShape = (0, import_react.useMemo)(() => groupByArchetype(matches), [matches]);
	const series = (0, import_react.useMemo)(() => {
		const points = [];
		let cursor = vp;
		points.push({
			i: 0,
			vp: cursor
		});
		for (const m of matches) {
			cursor -= m.vpDelta;
			points.push({
				i: points.length,
				vp: cursor
			});
		}
		return points.reverse().map((p, i) => ({
			...p,
			i
		}));
	}, [matches, vp]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "rise-in flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase",
						children: "Results"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl leading-[1.1] tracking-tight sm:text-4xl",
						children: "Fight log"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-lg text-sm leading-relaxed text-muted-foreground",
						children: "Won and Lost on Scout write here. They stay on your account."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "flex flex-col gap-3 p-4 sm:p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase",
							children: rank.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-4xl tabular-nums leading-none",
							children: vp.toLocaleString()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: Math.round(progress * 100) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: nxt ? `${nxt.minVp - vp} to ${nxt.label}` : "Top band"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "vp",
							children: "Victory points"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "vp",
							type: "number",
							min: 800,
							max: 6e3,
							value: vp,
							onChange: (e) => setVp(Number(e.target.value)),
							className: "mt-2 font-mono tabular-nums"
						})] })
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "flex flex-col gap-3 p-4 sm:p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase",
							children: "Record"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-4xl tabular-nums leading-none",
							children: rate === null ? "—" : `${rate}%`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: matches.length === 0 ? "No fights yet" : `${wins}W · ${matches.length - wins}L`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Won and Lost on Scout write here. They stay on your account."
						})
					]
				}) })]
			}),
			series.length > 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "p-4 sm:p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase",
					children: "VP"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-36",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
							data: series,
							margin: {
								top: 8,
								right: 4,
								left: 0,
								bottom: 0
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
									id: "vpFill",
									x1: "0",
									y1: "0",
									x2: "0",
									y2: "1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "0%",
										stopColor: "var(--color-steel)",
										stopOpacity: .28
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "100%",
										stopColor: "var(--color-steel)",
										stopOpacity: 0
									})]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "i",
									hide: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									hide: true,
									domain: ["dataMin - 20", "dataMax + 20"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
									contentStyle: {
										background: "var(--color-popover)",
										border: "none",
										boxShadow: "var(--shadow-border)",
										borderRadius: 8,
										fontSize: 12,
										color: "var(--color-foreground)"
									},
									formatter: (value) => [`${String(value)} VP`, ""],
									labelFormatter: () => ""
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
									type: "monotone",
									dataKey: "vp",
									stroke: "var(--color-steel)",
									fill: "url(#vpFill)",
									strokeWidth: 1.5
								})
							]
						})
					})
				})]
			}) }) : null,
			byRecipe.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight",
					children: "By strategy"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col gap-1",
					children: byRecipe.map((row) => {
						const wr = winRate(row.wins, row.n);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex min-h-12 items-center justify-between gap-3 rounded-xl bg-card px-4 py-3 shadow-[var(--shadow-border)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0 truncate text-sm",
								children: row.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "shrink-0 font-mono text-sm tabular-nums text-muted-foreground",
								children: [
									row.wins,
									"W ",
									row.n - row.wins,
									"L",
									wr !== null ? ` · ${wr}%` : ""
								]
							})]
						}, row.key);
					})
				})]
			}) : null,
			byShape.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight",
					children: "By wall shape"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col gap-1",
					children: byShape.map((row) => {
						const wr = winRate(row.wins, row.n);
						const title = row.key !== "unknown" && row.key in ARCHETYPE_META ? ARCHETYPE_META[row.key].title : row.label;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex min-h-12 items-center justify-between gap-3 rounded-xl bg-card px-4 py-3 shadow-[var(--shadow-border)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0 truncate text-sm capitalize",
								children: title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "shrink-0 font-mono text-sm tabular-nums text-muted-foreground",
								children: [
									row.wins,
									"W ",
									row.n - row.wins,
									"L",
									wr !== null ? ` · ${wr}%` : ""
								]
							})]
						}, row.key);
					})
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl tracking-tight",
						children: "Fights"
					}), matches.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "ghost",
						onClick: clearMatches,
						children: "Clear"
					}) : null]
				}), matches.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					className: "p-5 text-sm text-muted-foreground",
					children: "After a scout, tap Won or Lost on a strategy. The record lives on your account."
				}) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col gap-2",
					children: matches.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
						className: "flex flex-col gap-3 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: m.won ? "win" : "loss",
										children: m.won ? "Win" : "Loss"
									}), m.recipeName ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-foreground",
										children: m.recipeName
									}) : null]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: `font-mono text-sm tabular-nums ${m.vpDelta >= 0 ? "text-win" : "text-loss"}`,
									children: [m.vpDelta > 0 ? "+" : "", m.vpDelta]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-1 text-xs tracking-wider text-muted-foreground uppercase",
									children: "Enemy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroRow, { ids: m.enemy })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-1 text-xs tracking-wider text-muted-foreground uppercase",
									children: "You"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroRow, { ids: m.team })] })]
							}),
							m.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: m.note
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => removeMatch(m.id),
								className: "min-h-11 self-end px-2 text-sm text-muted-foreground hover:text-foreground",
								children: "Remove"
							})
						]
					}) }) }, m.id))
				})]
			})
		]
	});
}
function LogPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequireAuth, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogView, {}) }) });
}
//#endregion
export { LogPage as component };
