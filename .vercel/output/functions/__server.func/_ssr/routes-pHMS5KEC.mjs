import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { i as ELEMENT_LABEL, n as CLASS_LABEL, t as ARCHETYPE_META, y as suggestedVpDelta } from "./recipes-6teBQ5tU.mjs";
import { i as cn, n as Button, r as Input } from "./boot-screen-Dq6k0eSO.mjs";
import { t as X } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as builtIds, o as getHero, r as useArenaStore, s as useCatalog } from "./router-CaxQZeMY.mjs";
import { t as Label } from "./label-C5rzV2O8.mjs";
import { n as RequireAuth, t as AppShell } from "./require-auth-DmseqNkU.mjs";
import { n as EmptyPortrait, r as HeroPortrait, t as Badge } from "./badge-DJYBBhyT.mjs";
import { n as CardContent, o as recordFor, r as HeroRow, s as winRate, t as Card } from "./stats-cTdQKnCN.mjs";
import { n as recommendCounters, r as searchHeroes, t as classifyDefense } from "./engine-akwzvVQ1.mjs";
import { i as Viewport, n as Scrollbar, r as Thumb, t as Root } from "../_libs/radix-ui__react-scroll-area.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/radix-ui__react-switch.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-pHMS5KEC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CounterCard({ team, selected, onSelect, record, result }) {
	const slots = Math.round(team.coverage * 4);
	const rate = record ? winRate(record.wins, record.n) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: cn("transition-[box-shadow] duration-150", selected ? "shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-steel)_55%,transparent)]" : ""),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: onSelect,
			className: "w-full p-4 text-left sm:p-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "min-w-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg tracking-tight",
								children: team.name
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "shrink-0 text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-lg tabular-nums leading-none",
								children: [slots, "/4"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs tracking-wider text-muted-foreground uppercase",
								children: "Filled"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroRow, { ids: team.heroIds }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-1.5",
						children: [
							team.theorycraft ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								children: "Catalog"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "steel",
								children: "Your roster"
							}),
							team.missing.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "loss",
								children: ["No ", m]
							}, m)),
							record && record.n > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: rate !== null && rate >= 50 ? "win" : "outline",
								children: [
									record.wins,
									"W ",
									record.n - record.wins,
									"L"
								]
							}) : null
						]
					})
				]
			})
		}), selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "flex flex-col gap-4 border-t border-border px-4 pt-4 pb-5 sm:px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
					label: "Wincon",
					text: team.wincon
				}),
				result ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "match-note",
								children: "Result"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: "Saved to your account"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "match-note",
							value: result.note,
							onChange: (e) => result.onNote(e.target.value),
							placeholder: "Optional note"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "h-12",
								onClick: () => result.onRecord(true),
								children: "Won"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "h-12",
								variant: "secondary",
								onClick: () => result.onRecord(false),
								children: "Lost"
							})]
						})
					]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
					label: "Setup",
					text: team.setup
				}),
				team.pitfalls.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wider text-muted-foreground uppercase",
					children: "Breaks if"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-1 flex flex-col gap-1",
					children: team.pitfalls.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-sm leading-relaxed text-foreground/90",
						children: p
					}, p))
				})] }) : null
			]
		}) : null]
	});
}
function Block({ label, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs font-medium tracking-wider text-muted-foreground uppercase",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 text-sm leading-relaxed",
		children: text
	})] });
}
function ScrollArea({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root, {
		className: cn("relative overflow-hidden", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewport, {
			className: "h-full w-full rounded-[inherit]",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scrollbar, {
			orientation: "vertical",
			className: "flex w-2 touch-none p-px select-none",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thumb, { className: "relative flex-1 rounded-full bg-border" })
		})]
	});
}
function Sheet({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, { ...props });
}
function SheetContent({ className, children, side = "right", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-background/70 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		className: cn("fixed z-50 flex flex-col bg-card shadow-[var(--shadow-border)] duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out", side === "right" && "inset-y-0 right-0 h-full w-full max-w-md data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right", side === "bottom" && "inset-x-0 bottom-0 max-h-[88dvh] rounded-t-xl data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			className: "absolute top-3 right-3 rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function SheetHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-1.5 p-5 pr-12", className),
		...props
	});
}
function SheetTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
		className: cn("font-display text-xl font-medium tracking-tight", className),
		...props
	});
}
function SheetDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
		className: cn("text-sm text-muted-foreground", className),
		...props
	});
}
var ELEMENTS = [
	"fire",
	"ice",
	"earth",
	"light",
	"dark"
];
var CLASSES = [
	"knight",
	"warrior",
	"mage",
	"ranger",
	"thief",
	"soulweaver"
];
function HeroPicker({ open, onOpenChange, taken, onSelect, title = "Pick a unit" }) {
	const [query, setQuery] = (0, import_react.useState)("");
	const [els, setEls] = (0, import_react.useState)([]);
	const [cls, setCls] = (0, import_react.useState)([]);
	const [wide, setWide] = (0, import_react.useState)(false);
	const heroes = useCatalog((s) => s.heroes);
	const takenSet = (0, import_react.useMemo)(() => new Set(taken), [taken]);
	(0, import_react.useEffect)(() => {
		const m = window.matchMedia("(min-width: 768px)");
		const fn = () => setWide(m.matches);
		fn();
		m.addEventListener("change", fn);
		return () => m.removeEventListener("change", fn);
	}, []);
	const list = (0, import_react.useMemo)(() => {
		let pool = searchHeroes(query, heroes);
		if (els.length) pool = pool.filter((h) => els.includes(h.element));
		if (cls.length) pool = pool.filter((h) => h.class && cls.includes(h.class));
		return pool;
	}, [
		query,
		els,
		cls,
		heroes
	]);
	function toggleEl(el) {
		setEls((cur) => cur.includes(el) ? cur.filter((x) => x !== el) : [...cur, el]);
	}
	function toggleCl(c) {
		setCls((cur) => cur.includes(c) ? cur.filter((x) => x !== c) : [...cur, c]);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open,
		onOpenChange: (v) => {
			if (!v) {
				setQuery("");
				setEls([]);
				setCls([]);
			}
			onOpenChange(v);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
			side: wide ? "right" : "bottom",
			className: "gap-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetDescription, { children: "Search by name, element, or role. Duplicates on this team are locked." })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 px-5 pb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							autoFocus: true,
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: "Rinak, strip, injury…"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1.5",
							children: ELEMENTS.map((el) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => toggleEl(el),
								className: cn("h-11 rounded-full px-3 text-xs font-medium tracking-wide uppercase transition-colors duration-150", els.includes(el) ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"),
								children: ELEMENT_LABEL[el]
							}, el))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1.5",
							children: CLASSES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => toggleCl(c),
								className: cn("h-11 rounded-full px-3 text-xs font-medium tracking-wide transition-colors duration-150", cls.includes(c) ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"),
								children: CLASS_LABEL[c]
							}, c))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
					className: wide ? "h-full min-h-0 flex-1" : "h-[46dvh]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "grid grid-cols-1 gap-1 px-3 pb-6 sm:grid-cols-2",
						children: [list.map((hero) => {
							const locked = takenSet.has(hero.id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								disabled: locked,
								onClick: () => {
									onSelect(hero.id);
									onOpenChange(false);
								},
								className: cn("flex min-h-12 w-full items-center gap-3 rounded-lg px-2 py-2 text-left transition-colors duration-150", locked ? "opacity-40" : "hover:bg-secondary"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroPortrait, {
									hero,
									size: "sm",
									dimmed: locked
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroMeta, {
									hero,
									locked
								})]
							}) }, hero.id);
						}), list.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "col-span-full px-3 py-10 text-center text-sm text-muted-foreground",
							children: "No units match that filter."
						})]
					})
				})
			]
		})
	});
}
function HeroMeta({ hero, locked }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "min-w-0 flex-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "truncate text-sm font-medium",
				children: hero.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: hero.element,
				children: hero.tier
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "block truncate text-xs text-muted-foreground",
			children: [
				ELEMENT_LABEL[hero.element],
				" ",
				CLASS_LABEL[hero.class],
				locked ? " · already in" : ""
			]
		})]
	});
}
function SlotButton({ hero, onClick, onClear, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick,
			className: "flex min-h-24 w-full flex-col items-center gap-1.5 rounded-xl bg-card p-2 sm:p-2.5 shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]",
			children: [hero ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroPortrait, {
				hero,
				size: "lg"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyPortrait, { size: "lg" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-full truncate text-center text-xs whitespace-nowrap text-muted-foreground",
				children: hero ? hero.short : label
			})]
		}), hero && onClear ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: (e) => {
				e.stopPropagation();
				onClear();
			},
			className: "absolute top-1 right-1 flex size-9 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-foreground",
			"aria-label": `Clear ${hero.name}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs leading-none",
				children: "×"
			})
		}) : null]
	});
}
function TeamSlots({ ids, onChangeSlot, labels = [
	"One",
	"Two",
	"Three",
	"Four"
], pickerTitle = "Pick a unit" }) {
	const [slot, setSlot] = (0, import_react.useState)(null);
	const heroes = useCatalog((s) => s.heroes);
	const taken = ids.filter((id, i) => id && i !== slot);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-4 gap-2",
		children: [
			0,
			1,
			2,
			3
		].map((i) => {
			const id = ids[i];
			const hero = id ? heroes.find((h) => h.id === id) ?? getHero(id) : void 0;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotButton, {
				hero,
				label: labels[i] ?? `Slot ${i + 1}`,
				onClick: () => setSlot(i),
				onClear: hero ? () => onChangeSlot(i, null) : void 0
			}, i);
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroPicker, {
		open: slot !== null,
		onOpenChange: (v) => {
			if (!v) setSlot(null);
		},
		taken,
		title: pickerTitle,
		onSelect: (id) => {
			if (slot !== null) onChangeSlot(slot, id);
		}
	})] });
}
function Switch({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
		className: cn("peer inline-flex h-6 w-10 shrink-0 items-center rounded-full bg-secondary shadow-[var(--shadow-border)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 data-[state=checked]:bg-primary", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: "pointer-events-none block size-5 translate-x-0.5 rounded-full bg-foreground transition-transform duration-150 data-[state=checked]:translate-x-[18px] data-[state=checked]:bg-primary-foreground" })
	});
}
function ScoutView() {
	const enemy = useArenaStore((s) => s.enemy);
	const roster = useArenaStore((s) => s.roster);
	const restrict = useArenaStore((s) => s.restrictToRoster);
	const setRestrict = useArenaStore((s) => s.setRestrict);
	const setEnemy = useArenaStore((s) => s.setEnemy);
	const setEnemySlot = useArenaStore((s) => s.setEnemySlot);
	const setLastTeam = useArenaStore((s) => s.setLastTeam);
	const logMatch = useArenaStore((s) => s.logMatch);
	const matches = useArenaStore((s) => s.matches);
	const vp = useArenaStore((s) => s.vp);
	const presets = useCatalog((s) => s.presets);
	const recipes = useCatalog((s) => s.recipes);
	const heroes = useCatalog((s) => s.heroes);
	const filled = (0, import_react.useMemo)(() => enemy.filter((id) => id.length > 0), [enemy]);
	const pool = restrict ? builtIds(roster) : null;
	const poolKey = pool ? pool.join("|") : "all";
	const enemyKey = enemy.join("|");
	const read = (0, import_react.useMemo)(() => classifyDefense(filled), [enemyKey, heroes]);
	const counters = (0, import_react.useMemo)(() => filled.length === 4 ? recommendCounters(filled, pool) : [], [
		enemyKey,
		poolKey,
		filled.length,
		recipes,
		heroes
	]);
	const [selectedId, setSelectedId] = (0, import_react.useState)(null);
	const selected = counters.find((c) => c.recipeId === selectedId) ?? counters[0];
	const [note, setNote] = (0, import_react.useState)("");
	function useTeam(id, heroIds) {
		setSelectedId(id);
		setLastTeam(heroIds);
	}
	function record(won) {
		if (!selected || !read || filled.length < 4) return;
		const delta = suggestedVpDelta(won, vp);
		logMatch({
			enemy: filled,
			team: selected.heroIds,
			won,
			vpDelta: delta,
			note,
			recipeId: selected.recipeId,
			recipeName: selected.name,
			archetype: read.archetype
		});
		setNote("");
		toast(won ? `Win saved · ${delta > 0 ? "+" : ""}${delta} VP` : `Loss saved · ${delta} VP`);
	}
	const meta = read ? ARCHETYPE_META[read.archetype] : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-start lg:gap-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "rise-in flex flex-col gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase",
							children: "Scout"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-3xl leading-[1.1] tracking-tight sm:text-4xl",
							children: read && meta ? meta.title : "Enemy team"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-md text-sm leading-relaxed text-muted-foreground",
							children: read && meta ? meta.blurb : "Four enemies in. Matching strategies out. Log won or lost after the fight."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rise-in-2 flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase",
								children: "Enemy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "min-h-11 px-2 text-sm text-muted-foreground hover:text-foreground",
								onClick: () => setEnemy([]),
								children: "Clear"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamSlots, {
							ids: enemy,
							onChangeSlot: setEnemySlot,
							pickerTitle: "Enemy unit",
							labels: [
								"Lead",
								"Two",
								"Three",
								"Four"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pt-1",
							children: presets.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setEnemy(p.heroIds),
								className: cn("h-11 shrink-0 rounded-full px-4 text-sm shadow-[var(--shadow-border)] transition-colors duration-150", enemy.join() === p.heroIds.join() ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"),
								children: p.name
							}, p.id))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 rounded-xl bg-card px-4 py-3 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: "Use built roster"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Off shows the full catalog."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						checked: restrict,
						onCheckedChange: setRestrict
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 lg:sticky lg:top-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-baseline justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight",
					children: "Strategies"
				}), counters.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground",
					children: [counters.length, " matching"]
				}) : null]
			}), counters.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
				className: "p-5 text-sm leading-relaxed text-muted-foreground",
				children: "Four units first. Strategies match this wall’s shape and fill from your built roster."
			}) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-3",
				children: counters.map((team) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CounterCard, {
					team,
					selected: selected?.recipeId === team.recipeId,
					onSelect: () => useTeam(team.recipeId, team.heroIds),
					record: recordFor(matches, team.recipeId),
					result: selected?.recipeId === team.recipeId && filled.length === 4 ? {
						note,
						onNote: setNote,
						onRecord: record
					} : void 0
				}, team.recipeId))
			})]
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequireAuth, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoutView, {}) }) });
}
//#endregion
export { Home as component };
