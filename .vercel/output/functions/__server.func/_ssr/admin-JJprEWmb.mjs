import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as ELEMENT_LABEL, n as CLASS_LABEL, t as ARCHETYPE_META } from "./recipes-6teBQ5tU.mjs";
import { i as cn, n as Button, r as Input } from "./boot-screen-Dq6k0eSO.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as deleteHero, d as listMembers, f as saveHero, h as setMemberRole, l as deletePreset, m as saveRecipe, p as savePreset, r as useArenaStore, s as useCatalog, u as deleteRecipe } from "./router-CaxQZeMY.mjs";
import { t as Label } from "./label-C5rzV2O8.mjs";
import { n as RequireAuth, t as AppShell } from "./require-auth-DmseqNkU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-JJprEWmb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-24 w-full rounded-md bg-secondary px-3 py-2.5 text-sm text-foreground shadow-[var(--shadow-border)] outline-none transition-[box-shadow] duration-150 placeholder:text-muted-foreground/70 focus-visible:shadow-[var(--shadow-border-hover)] focus-visible:ring-2 focus-visible:ring-ring/40 disabled:opacity-40", className),
		...props
	});
}
var ARCHETYPE_IDS = [
	"speed-cleave",
	"harsetti-stall",
	"revive-wall",
	"injury-grind",
	"evasion-counter",
	"turn2-control",
	"immunity-soul",
	"bruiser-mix"
];
var ROLE_IDS = [
	"opener",
	"strip",
	"cleanse",
	"bruiser",
	"cleave",
	"tank",
	"revive",
	"control",
	"soulblock",
	"speedcap",
	"dps",
	"healer",
	"evasion"
];
var TAG_IDS = [
	"immunity",
	"injury",
	"cr-push",
	"cr-cut",
	"anti-revive",
	"aoe",
	"stun",
	"barrier",
	"counter",
	"dual-attack",
	"soulburn",
	"ignore-er",
	"seal",
	"unhealable",
	"defbreak",
	"extra-turn",
	"invincible",
	"provoke",
	"fixed-dmg",
	"evade",
	"strip",
	"silence",
	"barrier-break"
];
function slugify(value) {
	return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 64);
}
function applyCatalog(next) {
	useCatalog.getState().setCatalog(next);
}
function AdminView() {
	const [tab, setTab] = (0, import_react.useState)("units");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase",
						children: "Admin"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl leading-[1.1] tracking-tight sm:text-4xl",
						children: "Catalog"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-lg text-sm leading-relaxed text-muted-foreground",
						children: "Units, strategies, and wall presets are shared with the whole guild. Member progress stays private."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1",
				children: [
					["units", "Units"],
					["strategies", "Strategies"],
					["walls", "Walls"],
					["members", "Members"]
				].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTab(id),
					className: cn("h-11 shrink-0 rounded-full px-4 text-sm", tab === id ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"),
					children: label
				}, id))
			}),
			tab === "units" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroAdmin, {}) : null,
			tab === "strategies" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecipeAdmin, {}) : null,
			tab === "walls" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PresetAdmin, {}) : null,
			tab === "members" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemberAdmin, {}) : null
		]
	});
}
function HeroAdmin() {
	const heroes = useCatalog((s) => s.heroes);
	const [query, setQuery] = (0, import_react.useState)("");
	const [editing, setEditing] = (0, import_react.useState)(null);
	const list = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		if (!q) return heroes;
		return heroes.filter((h) => `${h.name} ${h.short} ${h.id}`.toLowerCase().includes(q));
	}, [heroes, query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: query,
					onChange: (e) => setQuery(e.target.value),
					placeholder: "Search units…",
					className: "sm:flex-1"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setEditing({
						id: "",
						name: "",
						short: "",
						element: "fire",
						class: "warrior",
						tier: "S",
						roles: [],
						tags: [],
						kit: "",
						defense: 5,
						offense: 5
					}),
					children: "Add unit"
				})]
			}),
			editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroForm, {
				initial: editing,
				onClose: () => setEditing(null),
				onSaved: () => setEditing(null)
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-1",
				children: list.map((hero) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between gap-3 rounded-xl bg-card px-4 py-3 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-medium",
							children: hero.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "truncate text-xs text-muted-foreground",
							children: [
								hero.short,
								" · ",
								ELEMENT_LABEL[hero.element],
								" ",
								CLASS_LABEL[hero.class],
								" · ",
								hero.tier
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "secondary",
						onClick: () => setEditing(hero),
						children: "Edit"
					})]
				}, hero.id))
			})
		]
	});
}
function HeroForm({ initial, onClose, onSaved }) {
	const isNew = !useCatalog.getState().heroes.some((h) => h.id === initial.id);
	const [form, setForm] = (0, import_react.useState)(initial);
	const [busy, setBusy] = (0, import_react.useState)(false);
	function patch(next) {
		setForm((cur) => {
			const merged = {
				...cur,
				...next
			};
			if (isNew && next.name && !cur.id) merged.id = slugify(next.name);
			if (isNew && next.name && !cur.short) merged.short = next.name.split(" ")[0] ?? next.name;
			return merged;
		});
	}
	async function save() {
		setBusy(true);
		try {
			applyCatalog(await saveHero({ data: form }));
			toast("Unit saved");
			onSaved();
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Could not save");
		} finally {
			setBusy(false);
		}
	}
	async function remove() {
		if (!form.id || isNew) return;
		setBusy(true);
		try {
			applyCatalog(await deleteHero({ data: { id: form.id } }));
			toast("Unit removed");
			onSaved();
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Could not delete");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-card p-4 shadow-[var(--shadow-border)] sm:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl tracking-tight",
					children: isNew ? "New unit" : "Edit unit"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "h-11 px-2 text-sm text-muted-foreground",
					onClick: onClose,
					children: "Close"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Name",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: form.name,
							onChange: (e) => patch({ name: e.target.value })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Short",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: form.short,
							onChange: (e) => patch({ short: e.target.value })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Id",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: form.id,
							disabled: !isNew,
							onChange: (e) => patch({ id: slugify(e.target.value) })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Tier",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
							value: form.tier,
							onChange: (v) => patch({ tier: v }),
							options: [
								"SS",
								"S",
								"A",
								"B"
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Element",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
							value: form.element,
							onChange: (v) => patch({ element: v }),
							options: Object.keys(ELEMENT_LABEL),
							labels: ELEMENT_LABEL
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Class",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
							value: form.class,
							onChange: (v) => patch({ class: v }),
							options: Object.keys(CLASS_LABEL),
							labels: CLASS_LABEL
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Defense 0–10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							min: 0,
							max: 10,
							value: form.defense,
							onChange: (e) => patch({ defense: Number(e.target.value) })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Offense 0–10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							min: 0,
							max: 10,
							value: form.offense,
							onChange: (e) => patch({ offense: Number(e.target.value) })
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Roles" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipSet, {
					values: ROLE_IDS,
					selected: form.roles,
					onToggle: (role) => {
						patch({ roles: form.roles.includes(role) ? form.roles.filter((r) => r !== role) : [...form.roles, role] });
					}
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Tags" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipSet, {
					values: TAG_IDS,
					selected: form.tags,
					onToggle: (tag) => {
						patch({ tags: form.tags.includes(tag) ? form.tags.filter((t) => t !== tag) : [...form.tags, tag] });
					}
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Kit note",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: form.kit,
						onChange: (e) => patch({ kit: e.target.value })
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => void save(),
					disabled: busy || !form.id || !form.name,
					children: "Save"
				}), !isNew ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "destructive",
					onClick: () => void remove(),
					disabled: busy,
					children: "Delete"
				}) : null]
			})
		]
	});
}
function RecipeAdmin() {
	const recipes = useCatalog((s) => s.recipes);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const blank = {
		id: "",
		name: "",
		vs: [],
		summary: "",
		wincon: "",
		setup: "",
		pitfalls: [],
		slots: [
			{
				label: "One",
				prefer: [],
				roles: [],
				tags: []
			},
			{
				label: "Two",
				prefer: [],
				roles: [],
				tags: []
			},
			{
				label: "Three",
				prefer: [],
				roles: [],
				tags: []
			},
			{
				label: "Four",
				prefer: [],
				roles: [],
				tags: []
			}
		]
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setEditing(blank),
					children: "Add strategy"
				})
			}),
			editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecipeForm, {
				initial: editing,
				onClose: () => setEditing(null),
				onSaved: () => setEditing(null)
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-1",
				children: recipes.map((recipe) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between gap-3 rounded-xl bg-card px-4 py-3 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-medium",
							children: recipe.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-xs text-muted-foreground",
							children: recipe.vs.map((v) => ARCHETYPE_META[v]?.title ?? v).join(", ")
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "secondary",
						onClick: () => setEditing(recipe),
						children: "Edit"
					})]
				}, recipe.id))
			})
		]
	});
}
function RecipeForm({ initial, onClose, onSaved }) {
	const isNew = !useCatalog.getState().recipes.some((r) => r.id === initial.id);
	const [form, setForm] = (0, import_react.useState)(initial);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const pitfallsText = form.pitfalls.join("\n");
	async function save() {
		setBusy(true);
		try {
			applyCatalog(await saveRecipe({ data: {
				...form,
				slots: form.slots.map((s) => ({
					label: s.label,
					roles: s.roles ?? [],
					tags: s.tags ?? [],
					prefer: s.prefer ?? []
				}))
			} }));
			toast("Strategy saved");
			onSaved();
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Could not save");
		} finally {
			setBusy(false);
		}
	}
	async function remove() {
		if (!form.id || isNew) return;
		setBusy(true);
		try {
			applyCatalog(await deleteRecipe({ data: { id: form.id } }));
			toast("Strategy removed");
			onSaved();
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Could not delete");
		} finally {
			setBusy(false);
		}
	}
	function setSlot(index, next) {
		const slots = [...form.slots];
		slots[index] = next;
		setForm({
			...form,
			slots
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-4 rounded-xl bg-card p-4 shadow-[var(--shadow-border)] sm:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl tracking-tight",
					children: isNew ? "New strategy" : "Edit strategy"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "h-11 px-2 text-sm text-muted-foreground",
					onClick: onClose,
					children: "Close"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Name",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: form.name,
						onChange: (e) => setForm({
							...form,
							name: e.target.value,
							id: isNew && !form.id ? slugify(e.target.value) : form.id
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Id",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: form.id,
						disabled: !isNew,
						onChange: (e) => setForm({
							...form,
							id: slugify(e.target.value)
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Works vs" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipSet, {
				values: ARCHETYPE_IDS,
				selected: form.vs,
				labels: Object.fromEntries(ARCHETYPE_IDS.map((id) => [id, ARCHETYPE_META[id].title])),
				onToggle: (id) => {
					const on = form.vs.includes(id);
					setForm({
						...form,
						vs: on ? form.vs.filter((v) => v !== id) : [...form.vs, id]
					});
				}
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Summary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					value: form.summary,
					onChange: (e) => setForm({
						...form,
						summary: e.target.value
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Wincon",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					value: form.wincon,
					onChange: (e) => setForm({
						...form,
						wincon: e.target.value
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Setup",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					value: form.setup,
					onChange: (e) => setForm({
						...form,
						setup: e.target.value
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Breaks if (one per line)",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					value: pitfallsText,
					onChange: (e) => setForm({
						...form,
						pitfalls: e.target.value.split("\n").filter(Boolean)
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: form.slots.map((slot, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-secondary p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: `Slot ${i + 1}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: slot.label,
							onChange: (e) => setSlot(i, {
								...slot,
								label: e.target.value
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Preferred ids",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: (slot.prefer ?? []).join(", "),
							onChange: (e) => setSlot(i, {
								...slot,
								prefer: e.target.value.split(",").map((s) => s.trim()).filter(Boolean)
							}),
							placeholder: "harsetti, belian"
						})
					})]
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => void save(),
					disabled: busy || !form.id || !form.name,
					children: "Save"
				}), !isNew ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "destructive",
					onClick: () => void remove(),
					disabled: busy,
					children: "Delete"
				}) : null]
			})
		]
	});
}
function PresetAdmin() {
	const presets = useCatalog((s) => s.presets);
	const heroes = useCatalog((s) => s.heroes);
	const [editing, setEditing] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setEditing({
						id: "",
						name: "",
						heroIds: [
							"",
							"",
							"",
							""
						],
						blurb: ""
					}),
					children: "Add wall"
				})
			}),
			editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PresetForm, {
				initial: editing,
				heroes,
				onClose: () => setEditing(null),
				onSaved: () => setEditing(null)
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-1",
				children: presets.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between gap-3 rounded-xl bg-card px-4 py-3 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-medium",
							children: p.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-xs text-muted-foreground",
							children: p.heroIds.filter(Boolean).join(" · ")
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "secondary",
						onClick: () => setEditing(p),
						children: "Edit"
					})]
				}, p.id))
			})
		]
	});
}
function PresetForm({ initial, heroes, onClose, onSaved }) {
	const isNew = !useCatalog.getState().presets.some((p) => p.id === initial.id);
	const [form, setForm] = (0, import_react.useState)({
		...initial,
		heroIds: [
			...initial.heroIds,
			"",
			"",
			"",
			""
		].slice(0, 4)
	});
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function save() {
		setBusy(true);
		try {
			applyCatalog(await savePreset({ data: form }));
			toast("Wall saved");
			onSaved();
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Could not save");
		} finally {
			setBusy(false);
		}
	}
	async function remove() {
		if (!form.id || isNew) return;
		setBusy(true);
		try {
			applyCatalog(await deletePreset({ data: { id: form.id } }));
			toast("Wall removed");
			onSaved();
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Could not delete");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-3 rounded-xl bg-card p-4 shadow-[var(--shadow-border)] sm:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl tracking-tight",
					children: isNew ? "New wall" : "Edit wall"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "h-11 px-2 text-sm text-muted-foreground",
					onClick: onClose,
					children: "Close"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Name",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: form.name,
					onChange: (e) => setForm({
						...form,
						name: e.target.value,
						id: isNew && !form.id ? slugify(e.target.value) : form.id
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Blurb",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: form.blurb,
					onChange: (e) => setForm({
						...form,
						blurb: e.target.value
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2 sm:grid-cols-2",
				children: form.heroIds.map((id, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: `Unit ${i + 1}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
						value: id,
						onChange: (v) => {
							const heroIds = [...form.heroIds];
							heroIds[i] = v;
							setForm({
								...form,
								heroIds
							});
						},
						options: ["", ...heroes.map((h) => h.id)],
						labels: Object.fromEntries(heroes.map((h) => [h.id, h.name]))
					})
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => void save(),
					disabled: busy || !form.name || form.heroIds.filter(Boolean).length < 4,
					children: "Save"
				}), !isNew ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "destructive",
					onClick: () => void remove(),
					disabled: busy,
					children: "Delete"
				}) : null]
			})
		]
	});
}
function MemberAdmin() {
	const me = useArenaStore((s) => s.role);
	const [members, setMembers] = (0, import_react.useState)([]);
	const [busyId, setBusyId] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		listMembers().then(setMembers).catch(() => toast.error("Could not load members"));
	}, []);
	async function toggle(member) {
		const nextRole = member.role === "admin" ? "member" : "admin";
		setBusyId(member.userId);
		try {
			const next = await setMemberRole({ data: {
				userId: member.userId,
				role: nextRole
			} });
			setMembers(next);
			toast(nextRole === "admin" ? "Promoted to admin" : "Moved to member");
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Could not update role");
		} finally {
			setBusyId(null);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
		className: "flex flex-col gap-1",
		children: [members.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex items-center justify-between gap-3 rounded-xl bg-card px-4 py-3 shadow-[var(--shadow-border)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate text-sm font-medium",
					children: m.displayName ?? m.email ?? m.userId
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate text-xs text-muted-foreground",
					children: m.email ?? m.userId
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: m.role === "admin" ? "default" : "secondary",
				disabled: busyId === m.userId || m.role === "admin" && me === "admin" && members.filter((x) => x.role === "admin").length === 1,
				onClick: () => void toggle(m),
				children: m.role === "admin" ? "Admin" : "Member"
			})]
		}, m.userId)), members.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "rounded-xl bg-card px-4 py-5 text-sm text-muted-foreground shadow-[var(--shadow-border)]",
			children: "No members yet."
		}) : null]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex flex-col gap-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), children]
	});
}
function NativeSelect({ value, onChange, options, labels }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		value,
		onChange: (e) => onChange(e.target.value),
		className: "h-11 w-full rounded-md bg-secondary px-3 text-sm shadow-[var(--shadow-border)] outline-none",
		children: options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: opt,
			children: opt === "" ? "—" : labels?.[opt] ?? opt
		}, opt || "empty"))
	});
}
function ChipSet({ values, selected, onToggle, labels }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-2 flex flex-wrap gap-1.5",
		children: values.map((value) => {
			const on = selected.includes(value);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onToggle(value),
				className: cn("h-11 rounded-full px-3 text-xs", on ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"),
				children: labels?.[value] ?? value.replace(/-/g, " ")
			}, value);
		})
	});
}
function AdminPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequireAuth, {
		admin: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminView, {}) })
	});
}
//#endregion
export { AdminPage as component };
