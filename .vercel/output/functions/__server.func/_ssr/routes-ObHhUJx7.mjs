import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as ARCHETYPE_META, o as EFFECT_LABEL, r as CLASS_LABEL, s as ELEMENT_LABEL } from "./recipes-DsR1fcfA.mjs";
import { a as cn, i as Input, r as Button } from "./boot-screen-CBR_ZPNs.mjs";
import { _ as ChevronLeft, f as ListFilter, g as ChevronRight, p as Info, t as X, v as ChevronDown } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { i as Trigger, n as Portal, r as Root2, t as Content2 } from "../_libs/@radix-ui/react-popover+[...].mjs";
import { n as builtIds, o as getHero, r as useArenaStore, s as useCatalog } from "./router-DrPSiwCO.mjs";
import { n as HeroPortrait, r as RequireAuth, t as AppShell } from "./require-auth-BYPs6EYn.mjs";
import { n as Card, r as CardContent, t as Badge } from "./card-CH3QVdju.mjs";
import { a as searchHeroes, i as recommendCounters, n as classifyDefense, o as searchTokens, r as lineupLimitNote, t as bestHeroMatches } from "./engine-DWttV1BD.mjs";
import { i as Viewport, n as Scrollbar, r as Thumb, t as Root } from "../_libs/radix-ui__react-scroll-area.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/radix-ui__react-switch.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ObHhUJx7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Enemy defense, attacker camera: Front left, Back right, Left top, Right bottom. */
var FORMATION_CELLS = [
	{
		index: 1,
		area: "left",
		label: "Left"
	},
	{
		index: 3,
		area: "back",
		label: "Back"
	},
	{
		index: 0,
		area: "front",
		label: "Front"
	},
	{
		index: 2,
		area: "right",
		label: "Right"
	}
];
var NOT_FRONT = /* @__PURE__ */ new Set([
	"monarch-of-the-sword-iseria",
	"requiem-roana",
	"lady-of-the-scales"
]);
function take(pool, pred) {
	const i = pool.findIndex(pred);
	if (i < 0) return void 0;
	return pool.splice(i, 1)[0];
}
function pickFront(pool) {
	return take(pool, (h) => h.roles.includes("tank") && !NOT_FRONT.has(h.id)) || take(pool, (h) => h.roles.includes("bruiser") && !NOT_FRONT.has(h.id)) || take(pool, (h) => !NOT_FRONT.has(h.id)) || take(pool, () => true);
}
/** Place a lineup on the diamond. Front = foremost ally. */
function placeLineup(ids) {
	const pool = ids.map((id) => getHero(id)).filter((h) => Boolean(h));
	const front = pickFront(pool);
	const back = take(pool, (h) => NOT_FRONT.has(h.id)) || take(pool, (h) => h.roles.includes("healer") || h.roles.includes("opener")) || take(pool, () => true);
	return [
		front,
		take(pool, (h) => h.roles.includes("strip") || h.roles.includes("control") || h.tags.includes("injury")) || take(pool, () => true),
		take(pool, () => true),
		back
	].map((h) => h?.id ?? "");
}
var WASH = {
	fire: "bg-fire/20",
	ice: "bg-ice/20",
	earth: "bg-earth/20",
	light: "bg-light/18",
	dark: "bg-dark/22"
};
var GAP = 10;
function visualArea(area, facing) {
	if (facing !== "enemy") return area;
	if (area === "front") return "back";
	if (area === "back") return "front";
	return area;
}
function initials(hero) {
	const parts = hero.short.split(/[.\s]+/).filter(Boolean);
	if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
	return hero.short.slice(0, 2).toUpperCase();
}
function metrics(compact) {
	const S = compact ? 40 : 68;
	const r = (S + GAP) / Math.SQRT2;
	return {
		S,
		r,
		extent: r + S / Math.SQRT2
	};
}
function vertexStyle(area, r) {
	const mid = "translate(-50%, -50%)";
	if (area === "left") return {
		left: "50%",
		top: `calc(50% - ${r}px)`,
		transform: mid
	};
	if (area === "back") return {
		left: `calc(50% - ${r}px)`,
		top: "50%",
		transform: mid
	};
	if (area === "front") return {
		left: `calc(50% + ${r}px)`,
		top: "50%",
		transform: mid
	};
	if (area === "rear-left") return {
		left: `calc(50% - ${r}px)`,
		top: `calc(50% - ${r * .62}px)`,
		transform: mid
	};
	if (area === "rear-right") return {
		left: `calc(50% + ${r}px)`,
		top: `calc(50% - ${r * .62}px)`,
		transform: mid
	};
	if (area === "front-gw") return {
		left: "50%",
		top: `calc(50% + ${r * .72}px)`,
		transform: mid
	};
	return {
		left: "50%",
		top: `calc(50% + ${r}px)`,
		transform: mid
	};
}
function DiamondFace({ hero, sizePx }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rotate-45 overflow-hidden rounded-[10px] bg-secondary shadow-[var(--shadow-border)]", hero && WASH[hero.element]),
		style: {
			width: sizePx,
			height: sizePx
		},
		title: hero ? `${hero.name} · ${ELEMENT_LABEL[hero.element]} ${CLASS_LABEL[hero.class]}` : void 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex size-full -rotate-45 scale-[1.42] items-center justify-center overflow-hidden",
			children: hero?.icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero.icon,
				alt: "",
				className: "size-full object-cover object-center"
			}) : hero ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("font-display font-medium tracking-tight text-foreground/90", sizePx <= 40 ? "text-xs" : "text-base"),
				children: initials(hero)
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-lg leading-none text-muted-foreground",
				children: "+"
			})
		})
	});
}
function outerVertex(area, sizePx) {
	const d = sizePx / Math.SQRT2;
	const mid = "translate(-50%, -50%)";
	if (area === "left") return {
		left: "50%",
		top: `calc(50% - ${d}px)`,
		transform: mid
	};
	if (area === "back") return {
		left: `calc(50% - ${d}px)`,
		top: "50%",
		transform: mid
	};
	if (area === "front") return {
		left: `calc(50% + ${d}px)`,
		top: "50%",
		transform: mid
	};
	if (area === "rear-left") return {
		left: `calc(50% - ${d}px)`,
		top: `calc(50% - ${d * .62}px)`,
		transform: mid
	};
	if (area === "rear-right") return {
		left: `calc(50% + ${d}px)`,
		top: `calc(50% - ${d * .62}px)`,
		transform: mid
	};
	if (area === "front-gw") return {
		left: "50%",
		top: `calc(50% + ${d * .72}px)`,
		transform: mid
	};
	return {
		left: "50%",
		top: `calc(50% + ${d}px)`,
		transform: mid
	};
}
function nameStyle(area, sizePx) {
	const d = sizePx / Math.SQRT2 + 14;
	if (area === "left") return {
		left: "50%",
		top: `calc(50% - ${d}px)`,
		transform: "translate(-50%, -100%)"
	};
	if (area === "back") return {
		left: `calc(50% - ${d}px)`,
		top: "50%",
		transform: "translate(-100%, -50%)"
	};
	if (area === "front") return {
		left: `calc(50% + ${d}px)`,
		top: "50%",
		transform: "translate(0, -50%)"
	};
	if (area === "rear-left") return {
		left: `calc(50% - ${d}px)`,
		top: `calc(50% - ${d * .62}px)`,
		transform: "translate(-100%, -50%)"
	};
	if (area === "rear-right") return {
		left: `calc(50% + ${d}px)`,
		top: `calc(50% - ${d * .62}px)`,
		transform: "translate(0, -50%)"
	};
	if (area === "front-gw") return {
		left: "50%",
		top: `calc(50% + ${d * .72}px)`,
		transform: "translate(-50%, 0)"
	};
	return {
		left: "50%",
		top: `calc(50% + ${d}px)`,
		transform: "translate(-50%, 0)"
	};
}
function Cell({ hero, label, compact, area, sizePx, isFront, facing, onClick, onClear }) {
	const face = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiamondFace, {
		hero,
		sizePx
	});
	const enemy = facing === "enemy";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		style: {
			width: sizePx,
			height: sizePx
		},
		children: [
			compact ? face : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick,
				className: "block [-webkit-tap-highlight-color:transparent]",
				children: face
			}),
			isFront ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-label": "Front",
				className: cn("pointer-events-none absolute top-1/2 z-20 -translate-y-1/2 text-primary", enemy ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"),
				children: enemy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
					className: compact ? "size-3.5" : "size-4",
					strokeWidth: 2.5
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
					className: compact ? "size-3.5" : "size-4",
					strokeWidth: 2.5
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("pointer-events-none absolute z-10 max-w-[4.5rem] truncate text-center leading-none whitespace-nowrap text-muted-foreground", compact ? "text-[10px]" : "text-xs"),
				style: nameStyle(area, sizePx),
				children: hero ? hero.short : label
			}),
			hero && onClear ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: (e) => {
					e.stopPropagation();
					onClear();
				},
				className: "absolute z-20 flex size-5 items-center justify-center rounded-full bg-secondary text-[11px] leading-none text-muted-foreground hover:text-foreground",
				style: outerVertex(area, sizePx),
				"aria-label": `Clear ${hero.name}`,
				children: "×"
			}) : null
		]
	});
}
function FormationBoard({ ids, compact, mode = "arena", facing = "enemy", onSlot, onClear }) {
	const { S, r, extent } = metrics(compact);
	const side = compact ? 56 : 96;
	const box = extent * 2 + side;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative mx-auto",
		style: {
			width: box,
			height: box
		},
		children: FORMATION_CELLS.map((cell) => {
			const id = ids[cell.index] ?? "";
			const hero = id ? getHero(id) : void 0;
			const vis = visualArea(cell.area, facing);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute z-10",
				style: vertexStyle(vis, r),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
					hero,
					label: cell.label,
					area: vis,
					compact,
					sizePx: S,
					isFront: cell.area === "front",
					facing,
					onClick: onSlot ? () => onSlot(cell.index) : void 0,
					onClear: hero && onClear ? () => onClear(cell.index) : void 0
				})
			}, cell.area);
		})
	});
}
function InfoTip({ label, children, side = "bottom", className }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root2, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": label,
				"aria-expanded": open,
				onClick: (e) => e.stopPropagation(),
				onPointerDown: (e) => e.stopPropagation(),
				className: "grid size-6 shrink-0 place-items-center rounded-full text-muted-foreground [-webkit-tap-highlight-color:transparent]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
					className: "size-3.5",
					strokeWidth: 1.75
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
			side,
			align: "start",
			sideOffset: 8,
			collisionPadding: 12,
			className: cn("z-50 max-w-[18rem] rounded-md bg-popover px-3 py-2 text-xs leading-relaxed text-popover-foreground shadow-[var(--shadow-border)] outline-none", className),
			children
		}) })]
	});
}
function CounterCard({ team, selected, onSelect }) {
	const seats = team.seats ?? 4;
	const slots = Math.round(team.coverage * seats);
	const rootRef = (0, import_react.useRef)(null);
	function toggle() {
		const top = rootRef.current?.getBoundingClientRect().top ?? 0;
		onSelect();
		const pin = () => {
			const el = rootRef.current;
			if (!el) return;
			const dy = el.getBoundingClientRect().top - top;
			if (Math.abs(dy) > .5) window.scrollBy(0, dy);
		};
		requestAnimationFrame(() => {
			pin();
			requestAnimationFrame(pin);
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		ref: rootRef,
		className: cn("overflow-hidden [overflow-anchor:none] transition-[box-shadow] duration-200", selected ? "shadow-[var(--shadow-border-hover)]" : ""),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				role: "button",
				tabIndex: 0,
				"aria-expanded": selected,
				onPointerDown: (e) => {
					if (e.button === 0) e.preventDefault();
				},
				onClick: toggle,
				onKeyDown: (e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						toggle();
					}
				},
				className: "w-full cursor-pointer p-4 text-left [-webkit-tap-highlight-color:transparent] outline-none sm:p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg tracking-tight",
								children: team.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: selected ? "Hide setup" : "Tap for setup"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex shrink-0 items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-mono text-lg tabular-nums leading-none",
									children: [
										slots,
										"/",
										seats
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs tracking-wider text-muted-foreground uppercase",
									children: "Filled"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
								className: cn("size-5 text-muted-foreground transition-transform duration-300 ease-[var(--ease-smooth-out)]", selected ? "rotate-180" : "rotate-0"),
								strokeWidth: 1.75,
								"aria-hidden": true
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormationBoard, {
						ids: placeLineup(team.heroIds),
						facing: "ally",
						compact: true
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-1.5 px-4 sm:px-5",
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
					team.gaps.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "loss",
							children: ["No ", g]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoTip, {
							label: `About no ${g}`,
							side: "top",
							children: gapHint(g)
						})]
					}, g))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "counter-fold",
				"data-open": selected ? "true" : "false",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "flex flex-col gap-4 border-t border-border px-4 pt-4 pb-5 sm:px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
							label: "Wincon",
							text: team.wincon
						}),
						team.why.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-wider text-muted-foreground uppercase",
							children: "Why this team"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-1 flex flex-col gap-1",
							children: team.why.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-sm leading-relaxed text-muted-foreground",
								children: line
							}, line))
						})] }) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
							label: "Setup",
							text: team.setup
						}),
						team.pitfalls.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-wider text-muted-foreground uppercase",
							children: "Breaks if"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-1 flex flex-col gap-1",
							children: team.pitfalls.slice(0, 3).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-sm leading-relaxed text-foreground/90",
								children: p
							}, p))
						})] }) : null
					]
				}) })
			})
		]
	});
}
function gapHint(label) {
	if (label === "Offering") return "This draft has no unit that ignores Offering. Seventy percent of damage is still shared onto the front.";
	if (label === "Forced targeting") return "This draft has no area attack. Single-target skills still have to hit her.";
	if (label === "Revive / reset") return "This draft has no anti-revive. A kill can still reset.";
	if (label === "Evasion") return "This draft has no answer to miss. Single-target third skills still fail often.";
	if (label === "Speed cap") return "This draft has no injury plan. You cannot outrun the first cycle.";
	return `This draft does not answer ${label}. The wall's kit still applies.`;
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
function HeroPicker({ open, onOpenChange, taken, onSelect, title = "Pick a unit", maxSelect = 1 }) {
	const [query, setQuery] = (0, import_react.useState)("");
	const [els, setEls] = (0, import_react.useState)([]);
	const [cls, setCls] = (0, import_react.useState)([]);
	const [filtersOpen, setFiltersOpen] = (0, import_react.useState)(false);
	const [multi, setMulti] = (0, import_react.useState)(false);
	const [picked, setPicked] = (0, import_react.useState)([]);
	const [wide, setWide] = (0, import_react.useState)(false);
	const heroes = useCatalog((s) => s.heroes);
	const verified = (0, import_react.useMemo)(() => heroes.filter((h) => h.verified), [heroes]);
	const takenSet = (0, import_react.useMemo)(() => new Set(taken), [taken]);
	const canMulti = maxSelect > 1;
	const mode = canMulti && multi;
	(0, import_react.useEffect)(() => {
		const m = window.matchMedia("(min-width: 768px)");
		const fn = () => setWide(m.matches);
		fn();
		m.addEventListener("change", fn);
		return () => m.removeEventListener("change", fn);
	}, []);
	(0, import_react.useEffect)(() => {
		if (searchTokens(query).length > 1 && canMulti) setMulti(true);
	}, [query, canMulti]);
	const list = (0, import_react.useMemo)(() => {
		let pool = searchHeroes(query, verified);
		if (els.length) pool = pool.filter((h) => els.includes(h.element));
		if (cls.length) pool = pool.filter((h) => h.class && cls.includes(h.class));
		return [...pool].sort((a, b) => a.name.localeCompare(b.name));
	}, [
		query,
		els,
		cls,
		verified
	]);
	const suggestions = (0, import_react.useMemo)(() => {
		if (searchTokens(query).length < 2) return [];
		return bestHeroMatches(query, verified).filter((h) => !takenSet.has(h.id)).slice(0, maxSelect);
	}, [
		query,
		verified,
		takenSet,
		maxSelect
	]);
	const filterCount = els.length + cls.length;
	function reset() {
		setQuery("");
		setEls([]);
		setCls([]);
		setFiltersOpen(false);
		setMulti(false);
		setPicked([]);
	}
	function commit(ids) {
		const unique = ids.filter((id, i) => ids.indexOf(id) === i && !takenSet.has(id)).slice(0, maxSelect);
		if (unique.length === 0) return;
		onSelect(unique);
		reset();
		onOpenChange(false);
	}
	function togglePick(id) {
		setPicked((cur) => {
			if (cur.includes(id)) return cur.filter((x) => x !== id);
			if (cur.length >= maxSelect) return [...cur.slice(1), id];
			return [...cur, id];
		});
	}
	function toggleEl(el) {
		setEls((cur) => cur.includes(el) ? cur.filter((x) => x !== el) : [...cur, el]);
	}
	function toggleCl(c) {
		setCls((cur) => cur.includes(c) ? cur.filter((x) => x !== c) : [...cur, c]);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open,
		onOpenChange: (v) => {
			if (!v) reset();
			onOpenChange(v);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
			side: wide ? "right" : "bottom",
			className: cn("gap-0", !wide && "h-[92dvh] max-h-[92dvh]"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetDescription, { children: "Only in-game verified kits. Type names separated by commas." })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 px-5 pb-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							autoFocus: true,
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: "Rinak, Arunka, Iseria, Krau"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: filtersOpen || filterCount > 0 ? "default" : "secondary",
								size: "sm",
								className: "h-11 px-3",
								onClick: () => setFiltersOpen((v) => !v),
								"aria-expanded": filtersOpen,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListFilter, { className: "size-4" }),
									"Filter",
									filterCount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-primary-foreground/20 px-1.5 text-xs leading-5",
										children: filterCount
									}) : null
								]
							}), canMulti ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex min-h-11 flex-1 rounded-md bg-secondary p-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										setMulti(false);
										setPicked([]);
									},
									className: cn("h-9 flex-1 rounded-sm text-xs font-medium", !mode ? "bg-card text-foreground" : "text-muted-foreground"),
									children: "Single"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setMulti(true),
									className: cn("h-9 flex-1 rounded-sm text-xs font-medium", mode ? "bg-card text-foreground" : "text-muted-foreground"),
									children: "Multi"
								})]
							}) : null]
						}),
						filtersOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-1",
								children: ELEMENTS.map((el) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => toggleEl(el),
									className: cn("h-9 rounded-full px-2.5 text-xs font-medium tracking-wide uppercase", els.includes(el) ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"),
									children: ELEMENT_LABEL[el]
								}, el))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-1",
								children: CLASSES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => toggleCl(c),
									className: cn("h-9 rounded-full px-2.5 text-xs font-medium tracking-wide", cls.includes(c) ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"),
									children: CLASS_LABEL[c]
								}, c))
							})]
						}) : null,
						suggestions.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => commit(suggestions.map((h) => h.id)),
							className: "min-h-11 rounded-md bg-secondary px-3 text-left text-sm",
							children: [
								"Add ",
								suggestions.length,
								" from search",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 block text-xs text-muted-foreground",
									children: suggestions.map((h) => h.short).join(" · ")
								})
							]
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
					className: "h-full min-h-0 flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "grid grid-cols-1 gap-1 px-3 pb-6 sm:grid-cols-2",
						children: [list.map((hero) => {
							const locked = takenSet.has(hero.id);
							const on = picked.includes(hero.id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								disabled: locked,
								onClick: () => {
									if (mode) togglePick(hero.id);
									else commit([hero.id]);
								},
								className: cn("flex min-h-12 w-full items-center gap-3 rounded-lg px-2 py-2 text-left transition-colors duration-150", locked ? "opacity-40" : "hover:bg-secondary", on && "bg-secondary"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroPortrait, {
									hero,
									size: "sm",
									dimmed: locked,
									selected: on
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroMeta, {
									hero,
									locked,
									picked: on
								})]
							}) }, hero.id);
						}), list.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "col-span-full px-3 py-10 text-center text-sm text-muted-foreground",
							children: "No units match that filter."
						})]
					})
				}),
				mode ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 border-t border-border px-5 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "min-w-0 flex-1 text-sm text-muted-foreground",
						children: [
							picked.length,
							" of ",
							maxSelect,
							" selected"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						disabled: picked.length === 0,
						onClick: () => commit(picked),
						children: ["Add ", picked.length || ""]
					})]
				}) : null
			]
		})
	});
}
function HeroMeta({ hero, locked, picked }) {
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
				hero.verified ? "" : " · kit unverified",
				locked ? " · already in" : picked ? " · selected" : ""
			]
		})]
	});
}
function TeamSlots({ ids, onChangeSlot, mode = "arena", facing = "enemy", maxUnits, exclude, pickerTitle = "Pick a unit" }) {
	const [slot, setSlot] = (0, import_react.useState)(null);
	const n = Math.max(4, ids.length);
	const cap = maxUnits ?? n;
	const filled = ids.filter(Boolean).length;
	const taken = [...ids.filter((id, i) => id && i !== slot), ...(exclude ?? []).filter(Boolean)];
	const room = cap - (filled - (slot !== null && Boolean(ids[slot]) ? 1 : 0));
	const emptyHere = slot === null ? 1 : ids.filter((id, i) => !id || i === slot).length;
	const capacity = Math.max(0, Math.min(emptyHere, room));
	function applyPicks(picks) {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormationBoard, {
		ids,
		mode,
		facing,
		onSlot: (i) => {
			if (!ids[i] && filled >= cap) return;
			setSlot(i);
		},
		onClear: (i) => onChangeSlot(i, null)
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroPicker, {
		open: slot !== null,
		onOpenChange: (v) => {
			if (!v) setSlot(null);
		},
		taken,
		title: pickerTitle,
		maxSelect: Math.max(1, capacity),
		onSelect: (picked) => {
			applyPicks(picked);
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
	const enemyGw = useArenaStore((s) => s.enemyGw);
	const enemyGw2 = useArenaStore((s) => s.enemyGw2);
	const gwRound = useArenaStore((s) => s.gwRound);
	const setGwRound = useArenaStore((s) => s.setGwRound);
	const setGwSlot = useArenaStore((s) => s.setGwSlot);
	const scoutMode = useArenaStore((s) => s.scoutMode);
	const setScoutMode = useArenaStore((s) => s.setScoutMode);
	const roster = useArenaStore((s) => s.roster);
	const restrict = useArenaStore((s) => s.restrictToRoster);
	const setRestrict = useArenaStore((s) => s.setRestrict);
	const setEnemy = useArenaStore((s) => s.setEnemy);
	const setEnemySlot = useArenaStore((s) => s.setEnemySlot);
	const setLastTeam = useArenaStore((s) => s.setLastTeam);
	const presets = useCatalog((s) => s.presets);
	const recipes = useCatalog((s) => s.recipes);
	const heroes = useCatalog((s) => s.heroes);
	const [wallsOpen, setWallsOpen] = (0, import_react.useState)(false);
	const seats = scoutMode === "gw" ? 3 : 4;
	const filled = (0, import_react.useMemo)(() => enemy.filter((id) => id.length > 0), [enemy]);
	const built = builtIds(roster);
	const builtVerified = built.filter((id) => getHero(id)?.verified).length;
	const pool = restrict ? built : null;
	const poolKey = pool ? pool.join("|") : "all";
	const enemyKey = enemy.join("|");
	const read = (0, import_react.useMemo)(() => classifyDefense(filled), [enemyKey, heroes]);
	const counters = (0, import_react.useMemo)(() => filled.length === seats ? recommendCounters(filled, pool, seats) : [], [
		enemyKey,
		poolKey,
		filled.length,
		recipes,
		heroes,
		seats
	]);
	const [openIds, setOpenIds] = (0, import_react.useState)([]);
	const [watchAll, setWatchAll] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setWatchAll(false);
		setOpenIds([]);
		setWallsOpen(false);
	}, [
		enemyKey,
		poolKey,
		scoutMode
	]);
	function toggleTeam(id, heroIds) {
		setOpenIds((cur) => cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]);
		setLastTeam(heroIds);
	}
	const meta = read ? ARCHETYPE_META[read.archetype] : null;
	const limitNote = filled.length === seats ? lineupLimitNote(read?.watch ?? [], counters) : null;
	const remain = seats - filled.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase",
					children: "Scout"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex rounded-full bg-secondary p-1",
					children: [["gw", "Guild War"], ["arena", "Arena"]].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setScoutMode(id),
						className: cn("min-h-9 rounded-full px-3.5 text-sm", scoutMode === id ? "bg-card text-foreground shadow-[var(--shadow-border)]" : "text-muted-foreground"),
						children: label
					}, id))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rise-in flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase",
								children: "Enemy wall"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground",
								children: scoutMode === "gw" ? "Up to three heroes per phase. Front is the left seat (arrow) — the foremost ally." : "Front is the left seat (arrow) — the foremost ally on the enemy defense."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex shrink-0 items-center gap-1",
							children: [scoutMode === "arena" && presets.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "min-h-11 px-2 text-sm text-muted-foreground hover:text-foreground",
								onClick: () => setWallsOpen((v) => !v),
								"aria-expanded": wallsOpen,
								children: wallsOpen ? "Close" : "Walls"
							}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "min-h-11 px-2 text-sm text-muted-foreground hover:text-foreground",
								onClick: () => setEnemy([]),
								children: "Clear"
							})]
						})]
					}),
					scoutMode === "gw" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 md:gap-8",
						children: [[1, enemyGw], [2, enemyGw2]].map(([round, ids]) => {
							const on = gwRound === round;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex w-full max-w-md flex-col items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setGwRound(round),
									className: cn("flex size-11 items-center justify-center rounded-full text-sm font-medium", on ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"),
									"aria-pressed": on,
									children: round
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: cn("w-full", !on && "opacity-70"),
									onPointerDown: () => {
										if (!on) setGwRound(round);
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamSlots, {
										ids,
										mode: "arena",
										maxUnits: 3,
										exclude: round === 1 ? enemyGw2 : enemyGw,
										onChangeSlot: (i, id) => setGwSlot(round, i, id),
										pickerTitle: `Round ${round}`
									})
								})]
							}, round);
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto w-full max-w-md",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamSlots, {
							ids: enemy,
							mode: "arena",
							onChangeSlot: setEnemySlot,
							pickerTitle: "Enemy unit"
						})
					}),
					wallsOpen && scoutMode === "arena" && presets.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-col gap-1",
						children: presets.map((p) => {
							const on = enemy.join() === p.heroIds.join();
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									setEnemy(p.heroIds);
									setWallsOpen(false);
								},
								className: cn("w-full rounded-xl px-4 py-3 text-left shadow-[var(--shadow-border)]", on ? "bg-primary text-primary-foreground" : "bg-card"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: p.name
								}), p.blurb ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: cn("mt-0.5 text-xs", on ? "text-primary-foreground/80" : "text-muted-foreground"),
									children: p.blurb
								}) : null]
							}) }, p.id);
						})
					}) : null
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-8 xl:grid xl:grid-cols-2 xl:items-start xl:gap-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6",
				children: [filled.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex flex-col gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-muted-foreground",
								children: "Wall type"
							}), scoutMode === "gw" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhaseTabs, {
								round: gwRound,
								onRound: setGwRound
							}) : null]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-3xl leading-[1.1] tracking-tight text-muted-foreground/35 sm:text-4xl",
							children: "Empty defense"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-md text-sm leading-relaxed text-muted-foreground",
							children: scoutMode === "gw" ? "Each phase is its own 3v3. Fill the diamond for this phase — the wall is named as soon as someone is in." : "Tap a diamond to add a hero. The wall is named as soon as someone is in."
						})
					]
				}) : read && meta ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "rise-in flex flex-col gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-muted-foreground",
								children: "Wall type"
							}), scoutMode === "gw" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhaseTabs, {
								round: gwRound,
								onRound: setGwRound
							}) : null]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-3xl leading-[1.1] tracking-tight sm:text-4xl",
							children: meta.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-md text-sm leading-relaxed text-muted-foreground",
							children: meta.blurb
						}),
						filled.length < seats ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "max-w-md text-sm leading-relaxed text-muted-foreground",
							children: [
								"Add ",
								remain,
								" more ",
								remain === 1 ? "hero" : "heroes",
								" for lineups. The name above is from who is already in."
							]
						}) : null,
						read && read.unverifiedIds.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "max-w-md text-sm leading-relaxed text-muted-foreground",
							children: [
								read.unverifiedIds.length === 1 ? "One unit on this wall is" : `${read.unverifiedIds.length} units on this wall are`,
								" ",
								"not in-game verified. The wall type is named from verified kits only."
							]
						}) : null,
						read && read.watch.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 flex max-w-md flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "flex flex-col gap-2",
								children: (watchAll ? read.watch : read.watch.slice(0, 3)).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "text-sm leading-relaxed",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-medium",
											children: [item.label, "."]
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: item.note
										})
									]
								}, item.key))
							}), read.watch.length > 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setWatchAll((v) => !v),
								className: "self-start text-sm font-medium text-foreground",
								children: watchAll ? "Show less" : `View all (${read.watch.length})`
							}) : null]
						}) : null
					]
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rise-in-2 flex flex-col gap-3",
					children: read && (read.effects.length > 0 || read.buffs.length > 0 || read.debuffs.length > 0 || read.uniqueEffects.length > 0) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3",
						children: [
							read.effects.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase",
									children: "Kit effects"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-1.5",
									children: read.effects.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-secondary px-3 py-1.5 text-xs text-foreground",
										children: EFFECT_LABEL[id]
									}, id))
								})]
							}) : null,
							read.buffs.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase",
									children: "Buffs"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-1.5",
									children: read.buffs.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-secondary px-3 py-1.5 text-xs text-foreground",
										children: name
									}, name))
								})]
							}) : null,
							read.debuffs.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase",
									children: "Debuffs"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-1.5",
									children: read.debuffs.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-secondary px-3 py-1.5 text-xs text-foreground",
										children: name
									}, name))
								})]
							}) : null,
							read.uniqueEffects.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase",
									children: "Unique"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "flex flex-col gap-2",
									children: read.uniqueEffects.map((u) => {
										const owner = getHero(u.heroId);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "rounded-xl bg-card px-4 py-3 shadow-[var(--shadow-border)]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start justify-between gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-medium",
													children: u.name
												}), owner ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "shrink-0 rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground",
													children: owner.short
												}) : null]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm leading-relaxed text-muted-foreground",
												children: u.text
											})]
										}, `${u.heroId}-${u.name}`);
									})
								})]
							}) : null
						]
					}) : null
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 xl:sticky xl:top-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-baseline justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex min-w-0 flex-wrap items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-display text-2xl tracking-tight",
										children: "Lineups to try"
									}),
									scoutMode === "gw" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-sm text-muted-foreground",
										children: ["Phase ", gwRound]
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoTip, {
										label: "About lineups",
										children: "We match enemy skills to a team. Speed rolls, gear, artifacts, and exclusive equipment are not included."
									})
								]
							}), counters.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-foreground",
								children: [counters.length, " to try"]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-foreground",
								children: [
									filled.length,
									" of ",
									seats
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex h-10 items-center justify-between gap-3 rounded-xl bg-card px-3 shadow-[var(--shadow-border)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex min-w-0 items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: "Only built units"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(InfoTip, {
									label: "About only built units",
									children: [
										"On: fill from ",
										builtVerified,
										" built, in-game verified",
										" ",
										builtVerified === 1 ? "hero" : "heroes",
										". Off: the full checked list. Unchecked kits stay out."
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
								checked: restrict,
								onCheckedChange: setRestrict
							})]
						}),
						filled.length === seats ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-md text-sm leading-relaxed text-muted-foreground",
							children: restrict ? "Suggested teams from units you marked built. Not a win guarantee — we do not use gear, sets, artifacts, or exclusive equipment." : "Suggested teams from the full hero list. You may not own every unit. Not a win guarantee — we do not use gear, sets, artifacts, or exclusive equipment."
						}) : null,
						limitNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-md text-sm leading-relaxed text-foreground",
							children: limitNote
						}) : null
					]
				}), counters.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					className: "p-5 text-sm leading-relaxed text-muted-foreground",
					children: filled.length < seats ? `Add ${remain} more ${remain === 1 ? "hero" : "heroes"} to the defense. Lineups appear when ${seats} heroes are placed.` : restrict ? "No lineup from your built units for this wall yet. Refresh is a real option, or turn off Only built units." : "No lineup from the verified catalog for this wall yet. Refresh is a real option."
				}) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-3 [overflow-anchor:none]",
					children: counters.map((team) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CounterCard, {
						team,
						selected: openIds.includes(team.recipeId),
						onSelect: () => toggleTeam(team.recipeId, team.heroIds)
					}, team.recipeId))
				})]
			})]
		})]
	});
}
function PhaseTabs({ round, onRound }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex rounded-full bg-secondary p-1",
		children: [1, 2].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => onRound(n),
			className: cn("min-h-11 rounded-full px-3.5 text-sm", round === n ? "bg-card text-foreground shadow-[var(--shadow-border)]" : "text-muted-foreground"),
			children: ["Phase ", n]
		}, n))
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequireAuth, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoutView, {}) }) });
}
//#endregion
export { Home as component };
