import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as require_jsx_runtime, n as CheckboxIndicator, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { C as heroRarity, a as EFFECT_IDS, f as ROLE_IDS, h as TAG_IDS, n as ARCHETYPE_META, o as EFFECT_LABEL, r as CLASS_LABEL, s as ELEMENT_LABEL, t as ARCHETYPE_IDS } from "./recipes-DsR1fcfA.mjs";
import { t as isOwnerIdentity } from "./owner-PZ9T3dqf.mjs";
import { a as cn, i as Input, o as daysAgoLabel, r as Button } from "./boot-screen-CBR_ZPNs.mjs";
import { s as Star, t as X, y as Check } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { C as setStrategyIdeaStatus, S as setMemberRole, _ as saveHeroIcon, b as saveStrategyIdea, c as deleteHero, d as deleteStrategyIdea, f as getAnalytics, g as saveHero, h as listStrategyIdeas, l as deletePreset, m as listMembers, p as listAdminLog, r as useArenaStore, s as useCatalog, u as deleteRecipe, v as savePreset, w as useCurrentUser, x as setIngameName, y as saveRecipe } from "./router-DrPSiwCO.mjs";
import { n as HeroPortrait, r as RequireAuth, t as AppShell } from "./require-auth-BYPs6EYn.mjs";
import { t as Label } from "./label-CWRst6zu.mjs";
import { i as downloadJson } from "./export-stats-D8bURXXW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-qoGieNxb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Checkbox({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
		className: cn("peer size-5 shrink-0 rounded-sm bg-secondary shadow-[var(--shadow-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
			className: "flex items-center justify-center text-current",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
				className: "size-3.5",
				strokeWidth: 2.5
			})
		})
	});
}
function Dialog({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, { ...props });
}
function DialogPortal({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogPortal$1, { ...props });
}
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		className: cn("fixed inset-0 z-50 bg-background/70 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
		...props
	});
}
function DialogContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed top-1/2 left-1/2 z-50 grid w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-card p-5 shadow-[var(--shadow-border)] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className),
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
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-1.5 pr-8", className),
		...props
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("font-display text-xl font-medium tracking-tight", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		className: cn("text-sm leading-relaxed text-muted-foreground", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-24 w-full rounded-md bg-secondary px-3 py-2.5 text-sm text-foreground shadow-[var(--shadow-border)] outline-none transition-[box-shadow] duration-150 placeholder:text-muted-foreground/70 focus-visible:shadow-[var(--shadow-border-hover)] focus-visible:ring-2 focus-visible:ring-ring/40 disabled:opacity-40", className),
		...props
	});
}
var SIZE = 128;
async function fileToHeroIcon(file) {
	if (!file.type.startsWith("image/")) throw new Error("Choose an image file");
	const bitmap = await blobToImage(file);
	const canvas = document.createElement("canvas");
	canvas.width = SIZE;
	canvas.height = SIZE;
	const ctx = canvas.getContext("2d");
	if (!ctx) throw new Error("Could not read image");
	const scale = Math.max(SIZE / bitmap.width, SIZE / bitmap.height);
	const w = bitmap.width * scale;
	const h = bitmap.height * scale;
	ctx.drawImage(bitmap, (SIZE - w) / 2, (SIZE - h) / 2, w, h);
	return canvas.toDataURL("image/jpeg", .84);
}
function blobToImage(file) {
	return new Promise((resolve, reject) => {
		const url = URL.createObjectURL(file);
		const img = new Image();
		img.onload = () => {
			URL.revokeObjectURL(url);
			resolve(img);
		};
		img.onerror = () => {
			URL.revokeObjectURL(url);
			reject(/* @__PURE__ */ new Error("Could not read image"));
		};
		img.src = url;
	});
}
function slugify(value) {
	return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 64);
}
function applyCatalog(next) {
	useCatalog.getState().setCatalog(next);
}
function AdminView() {
	const [tab, setTab] = (0, import_react.useState)("units");
	const unitCount = useCatalog((s) => s.heroes.length);
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
						children: "Units, strategies, and wall presets are shared. Progress stays private."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-sm tabular-nums text-muted-foreground",
						children: [unitCount, " units"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1",
				children: [
					["units", "Units"],
					["strategies", "Strategies"],
					["ideas", "Ideas"],
					["walls", "Walls"],
					["members", "Members"],
					["log", "Log"],
					["stats", "Stats"]
				].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTab(id),
					className: cn("h-11 shrink-0 rounded-full px-4 text-sm", tab === id ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"),
					children: label
				}, id))
			}),
			tab === "units" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroAdmin, {}) : null,
			tab === "strategies" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecipeAdmin, {}) : null,
			tab === "ideas" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdeaAdmin, {}) : null,
			tab === "walls" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PresetAdmin, {}) : null,
			tab === "members" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemberAdmin, {}) : null,
			tab === "log" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityLog, {}) : null,
			tab === "stats" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnalyticsPanel, {}) : null
		]
	});
}
function HeroAdmin() {
	const heroes = useCatalog((s) => s.heroes);
	const [query, setQuery] = (0, import_react.useState)("");
	const [star, setStar] = (0, import_react.useState)(0);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [iconHero, setIconHero] = (0, import_react.useState)(null);
	const starCounts = (0, import_react.useMemo)(() => {
		const counts = {
			3: 0,
			4: 0,
			5: 0
		};
		for (const h of heroes) counts[heroRarity(h)] += 1;
		return counts;
	}, [heroes]);
	const list = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		let rows = q ? heroes.filter((h) => `${h.name} ${h.short} ${h.id}`.toLowerCase().includes(q)) : heroes;
		if (star) rows = rows.filter((h) => heroRarity(h) === star);
		return [...rows].sort((a, b) => Number(Boolean(b.verified)) - Number(Boolean(a.verified)) || a.name.localeCompare(b.name));
	}, [
		heroes,
		query,
		star
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-end justify-between gap-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-sm tabular-nums text-muted-foreground",
					children: [query || star ? `${list.length} of ${heroes.length}` : `${heroes.length} units`, ` · ${heroes.filter((h) => h.verified).length} in-game verified`]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					[
						0,
						"All",
						heroes.length
					],
					[
						5,
						"5★",
						starCounts[5]
					],
					[
						4,
						"4★",
						starCounts[4]
					],
					[
						3,
						"3★",
						starCounts[3]
					]
				].map(([id, label, count]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setStar(id),
					className: cn("h-10 shrink-0 rounded-full px-3 text-sm tabular-nums", star === id ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"),
					children: [
						label,
						" ",
						count
					]
				}, id))
			}),
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
						rarity: 5,
						roles: [],
						tags: [],
						effects: [],
						buffs: [],
						uniqueEffects: [],
						debuffs: [],
						kit: "",
						defense: 5,
						offense: 5,
						baseSpeed: void 0,
						icon: "",
						verified: false
					}),
					children: "Add unit"
				})]
			}),
			editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroForm, {
				initial: editing,
				onClose: () => setEditing(null),
				onSaved: () => setEditing(null)
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconDialog, {
				hero: iconHero,
				onClose: () => setIconHero(null)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-1",
				children: list.map((hero) => {
					const checked = daysAgoLabel(hero.checkedAt);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between gap-3 rounded-xl bg-card px-4 py-3 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setIconHero(hero),
								className: "shrink-0 rounded-md",
								"aria-label": `Edit icon · ${hero.name}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroPortrait, {
									hero,
									size: "sm"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-1.5 text-sm font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate",
										children: hero.name
									}), hero.verified ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
										className: "size-3.5 shrink-0 fill-current",
										strokeWidth: 1.5,
										"aria-label": "In-game verified"
									}) : null]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "truncate text-xs text-muted-foreground",
									children: [
										hero.verified ? `In-game verified${checked ? ` · ${checked}` : ""} · ` : "",
										hero.short,
										" · ",
										heroRarity(hero),
										"★ · ",
										ELEMENT_LABEL[hero.element],
										" ",
										CLASS_LABEL[hero.class],
										" · ",
										hero.tier
									]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "secondary",
							onClick: () => setEditing(hero),
							children: "Edit"
						})]
					}, hero.id);
				})
			})
		]
	});
}
function IconDialog({ hero, onClose }) {
	const [icon, setIcon] = (0, import_react.useState)(hero?.icon ?? "");
	const [fileName, setFileName] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [iconBusy, setIconBusy] = (0, import_react.useState)(false);
	const fileRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		setIcon(hero?.icon ?? "");
		setFileName("");
	}, [hero]);
	async function save() {
		if (!hero) return;
		setBusy(true);
		try {
			applyCatalog(await saveHeroIcon({ data: {
				id: hero.id,
				icon
			} }));
			toast(icon ? "Icon saved" : "Icon removed");
			onClose();
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Could not save icon");
		} finally {
			setBusy(false);
		}
	}
	const preview = hero ? {
		...hero,
		icon
	} : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: Boolean(hero),
		onOpenChange: (open) => {
			if (!open) onClose();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, { children: ["Icon · ", hero?.name ?? ""] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "This save only changes the icon. Kit, roles, and in-game verified stay as they are." })] }),
			preview ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroPortrait, {
					hero: preview,
					size: "lg"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "Square crop, face in the middle. 256×256 is enough."
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: fileRef,
				type: "file",
				accept: "image/*",
				className: "sr-only",
				disabled: busy || iconBusy || !hero,
				onChange: (e) => {
					const file = e.target.files?.[0];
					e.target.value = "";
					if (!file) return;
					setIconBusy(true);
					fileToHeroIcon(file).then((next) => {
						setIcon(next);
						setFileName(file.name);
					}).catch((err) => toast.error(err instanceof Error ? err.message : "Could not read image")).finally(() => setIconBusy(false));
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "secondary",
						disabled: busy || iconBusy || !hero,
						onClick: () => fileRef.current?.click(),
						children: iconBusy ? "Reading…" : "Upload image"
					}), fileName ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 truncate text-xs text-muted-foreground",
						children: fileName
					}) : null]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: icon.startsWith("data:") ? "" : icon,
					placeholder: "Or paste an image URL",
					disabled: busy || !hero,
					onChange: (e) => {
						setIcon(e.target.value);
						setFileName("");
					}
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => void save(),
					disabled: busy || iconBusy || !hero,
					children: "Save icon"
				}), icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					disabled: busy,
					onClick: () => {
						setIcon("");
						setFileName("");
					},
					children: "Remove"
				}) : null]
			})
		] })
	});
}
function HeroForm({ initial, onClose, onSaved }) {
	const isNew = !useCatalog.getState().heroes.some((h) => h.id === initial.id);
	const [form, setForm] = (0, import_react.useState)({
		...initial,
		icon: initial.icon ?? "",
		effects: initial.effects ?? [],
		buffs: initial.buffs ?? [],
		debuffs: initial.debuffs ?? [],
		uniqueEffects: initial.uniqueEffects ?? []
	});
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
			applyCatalog(await saveHero({ data: {
				...form,
				icon: "",
				uniqueEffects: (form.uniqueEffects ?? []).filter((u) => u.name.trim())
			} }));
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
				className: "mb-4 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroPortrait, {
					hero: {
						...form,
						name: form.name || "New",
						short: form.short || "New"
					},
					size: "lg"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs leading-relaxed text-muted-foreground",
					children: "Icon is separate. Close this, then tap the portrait on the list."
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
						label: "Rarity",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
							value: String(heroRarity(form)),
							onChange: (v) => patch({ rarity: Number(v) }),
							options: [
								"5",
								"4",
								"3"
							],
							labels: {
								"5": "5★",
								"4": "4★",
								"3": "3★"
							}
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
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Base Speed",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							min: 70,
							max: 160,
							value: form.baseSpeed ?? "",
							onChange: (e) => patch({ baseSpeed: e.target.value === "" ? void 0 : Number(e.target.value) })
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
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Normal effects" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: "In-game Skill Effect filters. Buffs, debuffs, and unique effects come later."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipSet, {
						values: EFFECT_IDS,
						selected: form.effects ?? [],
						labels: EFFECT_LABEL,
						onToggle: (value) => {
							const effect = value;
							patch({ effects: (form.effects ?? []).includes(effect) ? (form.effects ?? []).filter((e) => e !== effect) : [...form.effects ?? [], effect] });
						}
					})
				]
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Buffs",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: (form.buffs ?? []).join(", "),
						placeholder: "Increase Speed, Immunity",
						onChange: (e) => patch({ buffs: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: "Comma-separated. In-game buff names."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Debuffs",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: (form.debuffs ?? []).join(", "),
						placeholder: "Decrease Defense, Seal, Cannot Buff",
						onChange: (e) => patch({ debuffs: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: "Comma-separated. In-game debuff names."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Unique effects" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: "Named kit effects that are not on the normal list."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex flex-col gap-3",
						children: [(form.uniqueEffects ?? []).map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-secondary/60 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: item.name,
									placeholder: "Name",
									onChange: (e) => {
										const next = [...form.uniqueEffects ?? []];
										next[index] = {
											...item,
											name: e.target.value
										};
										patch({ uniqueEffects: next });
									}
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "h-11 shrink-0 px-2 text-sm text-muted-foreground hover:text-foreground",
									onClick: () => patch({ uniqueEffects: (form.uniqueEffects ?? []).filter((_, i) => i !== index) }),
									children: "Remove"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								className: "mt-2",
								value: item.text,
								placeholder: "What it does",
								onChange: (e) => {
									const next = [...form.uniqueEffects ?? []];
									next[index] = {
										...item,
										text: e.target.value
									};
									patch({ uniqueEffects: next });
								}
							})]
						}, index)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "secondary",
							onClick: () => patch({ uniqueEffects: [...form.uniqueEffects ?? [], {
								name: "",
								text: ""
							}] }),
							children: "Add unique"
						})]
					})
				]
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-4 flex items-start gap-3 rounded-xl bg-secondary/60 px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
					checked: Boolean(form.verified),
					onCheckedChange: (v) => patch({ verified: v === true }),
					className: "mt-0.5"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1.5 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
						className: form.verified ? "size-3.5 fill-current" : "size-3.5",
						strokeWidth: 1.5
					}), "In-game verified"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mt-0.5 block text-xs text-muted-foreground",
					children: [
						"Kit is the same as the journal. Saving with this on stamps today",
						form.verified && daysAgoLabel(form.checkedAt) ? ` (last: ${daysAgoLabel(form.checkedAt)})` : "",
						"."
					]
				})] })]
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
	const me = useCurrentUser();
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [filter, setFilter] = (0, import_react.useState)("all");
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
	const list = filter === "mine" && me?.id ? recipes.filter((r) => r.createdBy === me.id) : recipes;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-1",
					children: ["all", "mine"].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setFilter(id),
						className: cn("h-11 rounded-full px-4 text-sm", filter === id ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"),
						children: id === "all" ? "All" : "Mine"
					}, id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setEditing(blank),
					children: "Add strategy"
				})]
			}),
			editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecipeForm, {
				initial: editing,
				onClose: () => setEditing(null),
				onSaved: () => setEditing(null)
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "flex flex-col gap-1",
				children: [list.map((recipe) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between gap-3 rounded-xl bg-card px-4 py-3 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-medium",
							children: recipe.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "truncate text-xs text-muted-foreground",
							children: [recipe.author || "Catalog", recipe.vs.length > 0 ? ` · ${recipe.vs.map((v) => ARCHETYPE_META[v]?.title ?? v).join(", ")}` : ""]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "secondary",
						onClick: () => setEditing(recipe),
						children: "Edit"
					})]
				}, recipe.id)), list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-xl bg-card px-4 py-5 text-sm text-muted-foreground shadow-[var(--shadow-border)]",
					children: filter === "mine" ? "No strategies saved under your account yet." : "No strategies."
				}) : null]
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
function IdeaAdmin() {
	const [ideas, setIdeas] = (0, import_react.useState)(null);
	const [filter, setFilter] = (0, import_react.useState)("inbox");
	const [body, setBody] = (0, import_react.useState)("");
	const [about, setAbout] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		listStrategyIdeas().then(setIdeas).catch((err) => {
			toast.error(err instanceof Error ? err.message : "Could not load ideas");
			setIdeas([]);
		});
	}, []);
	const counts = (0, import_react.useMemo)(() => {
		const list = ideas ?? [];
		return {
			inbox: list.filter((i) => i.status === "inbox").length,
			later: list.filter((i) => i.status === "later").length,
			keep: list.filter((i) => i.status === "keep").length,
			skip: list.filter((i) => i.status === "skip").length
		};
	}, [ideas]);
	const shown = (0, import_react.useMemo)(() => {
		if (!ideas) return [];
		if (filter === "all") return ideas;
		return ideas.filter((i) => i.status === filter);
	}, [ideas, filter]);
	async function submit() {
		const nextBody = body.trim();
		if (nextBody.length < 8) {
			toast.error("Write a bit more — at least a sentence.");
			return;
		}
		setBusy(true);
		try {
			const next = await saveStrategyIdea({ data: {
				body: nextBody,
				about: about.trim()
			} });
			setIdeas(next);
			setBody("");
			setAbout("");
			setFilter("inbox");
			toast("Logged. Ask in chat to review.");
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Could not save");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col gap-3 rounded-xl bg-card px-4 py-4 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg tracking-tight",
						children: "Log a thought"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 max-w-lg text-sm leading-relaxed text-muted-foreground",
						children: "Recipes, Watches, walls. Not a lineup. Review happens in chat — Keep, Skip, or Later with why."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Thought",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							value: body,
							onChange: (e) => setBody(e.target.value),
							maxLength: 2e3,
							rows: 5,
							placeholder: "Put ML.Luluca on the anti-revive strip list because…"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "About (optional)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: about,
							onChange: (e) => setAbout(e.target.value),
							maxLength: 120,
							placeholder: "Harsetti stall · Strip"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => void submit(),
							disabled: busy || body.trim().length < 8,
							children: "Log"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-xs tabular-nums text-muted-foreground",
							children: [body.trim().length, "/2000"]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1",
				children: [
					[
						"inbox",
						"Inbox",
						counts.inbox
					],
					[
						"later",
						"Later",
						counts.later
					],
					[
						"keep",
						"Keep",
						counts.keep
					],
					[
						"skip",
						"Skip",
						counts.skip
					],
					[
						"all",
						"All",
						ideas?.length ?? 0
					]
				].map(([id, label, n]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setFilter(id),
					className: cn("h-11 shrink-0 rounded-full px-4 text-sm", filter === id ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"),
					children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 font-mono tabular-nums opacity-70",
						children: n
					})]
				}, id))
			}),
			!ideas ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Loading ideas…"
			}) : shown.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-xl bg-card px-4 py-5 text-sm text-muted-foreground shadow-[var(--shadow-border)]",
				children: filter === "inbox" ? "Inbox is empty. Log a thought above, then ask in chat to review." : filter === "all" ? "No ideas yet." : `Nothing in ${filter}.`
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-2",
				children: shown.map((idea) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdeaCard, {
					idea,
					onChange: setIdeas
				}, idea.id))
			})
		]
	});
}
var STATUS_LABEL = {
	inbox: "Inbox",
	later: "Later",
	keep: "Keep",
	skip: "Skip"
};
function IdeaCard({ idea, onChange }) {
	const [verdict, setVerdict] = (0, import_react.useState)(idea.verdict);
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setVerdict(idea.verdict);
	}, [idea.verdict]);
	async function setStatus(status) {
		setBusy(true);
		try {
			onChange(await setStrategyIdeaStatus({ data: {
				id: idea.id,
				status,
				verdict: verdict.trim()
			} }));
			toast(status === "keep" ? "Kept" : status === "skip" ? "Skipped" : status === "later" ? "Later" : "Back in inbox");
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Could not update");
		} finally {
			setBusy(false);
		}
	}
	async function remove() {
		setBusy(true);
		try {
			onChange(await deleteStrategyIdea({ data: { id: idea.id } }));
			toast("Removed");
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Could not delete");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex flex-col gap-3 rounded-xl bg-card px-4 py-4 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				idea.about ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase",
					children: idea.about
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm leading-relaxed whitespace-pre-wrap",
					children: idea.body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-xs text-muted-foreground",
					children: [
						idea.author,
						" · ",
						ago(idea.at),
						" · ",
						STATUS_LABEL[idea.status]
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Verdict (from chat)",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					value: verdict,
					onChange: (e) => setVerdict(e.target.value),
					maxLength: 800,
					rows: 2,
					placeholder: "Why we kept, skipped, or parked this…"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: idea.status === "keep" ? "default" : "secondary",
						disabled: busy,
						onClick: () => void setStatus("keep"),
						children: "Keep"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: idea.status === "later" ? "default" : "secondary",
						disabled: busy,
						onClick: () => void setStatus("later"),
						children: "Later"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: idea.status === "skip" ? "default" : "secondary",
						disabled: busy,
						onClick: () => void setStatus("skip"),
						children: "Skip"
					}),
					idea.status !== "inbox" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						disabled: busy,
						onClick: () => void setStatus("inbox"),
						children: "Inbox"
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						disabled: busy,
						onClick: () => void remove(),
						children: "Delete"
					})
				]
			})
		]
	});
}
function MemberAdmin() {
	const me = useArenaStore((s) => s.role);
	const email = useArenaStore((s) => s.email);
	const user = useCurrentUser();
	const owner = isOwnerIdentity(user?.primaryEmail, user?.displayName, email);
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [owner ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "In-game names are yours to set, including your own. Everyone else sees them in the log."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "In-game names are set by the owner."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "flex flex-col gap-1",
			children: [members.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex flex-col gap-3 rounded-xl bg-card px-4 py-3 shadow-[var(--shadow-border)] sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-medium",
							children: m.ingameName || m.displayName || m.email || m.userId
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-xs text-muted-foreground",
							children: m.email ?? m.userId
						}),
						owner ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IngameNameField, {
							member: m,
							onSaved: setMembers
						}) : null
					]
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
		})]
	});
}
function IngameNameField({ member, onSaved }) {
	const [value, setValue] = (0, import_react.useState)(member.ingameName ?? "");
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setValue(member.ingameName ?? "");
	}, [member.ingameName]);
	async function save() {
		const next = value.trim();
		if (next === (member.ingameName ?? "")) return;
		setBusy(true);
		try {
			onSaved(await setIngameName({ data: {
				userId: member.userId,
				name: next
			} }));
			toast(next ? `In-game name · ${next}` : "In-game name cleared");
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Could not save name");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-2 flex gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			value,
			maxLength: 24,
			placeholder: "In-game name",
			disabled: busy,
			onChange: (e) => setValue(e.target.value),
			onKeyDown: (e) => {
				if (e.key === "Enter") {
					e.preventDefault();
					save();
				}
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			size: "sm",
			variant: "secondary",
			disabled: busy,
			onClick: () => void save(),
			children: "Save"
		})]
	});
}
function ago(at) {
	const s = Math.max(0, Math.floor((Date.now() - at) / 1e3));
	if (s < 45) return "just now";
	if (s < 3600) return `${Math.max(1, Math.floor(s / 60))}m`;
	if (s < 86400) return `${Math.floor(s / 3600)}h`;
	if (s < 604800) return `${Math.floor(s / 86400)}d`;
	return new Date(at).toLocaleDateString();
}
function ActivityLog() {
	const [rows, setRows] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		listAdminLog().then(setRows).catch(() => {
			toast.error("Could not load log");
			setRows([]);
		});
	}, []);
	if (!rows) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted-foreground",
		children: "Loading log…"
	});
	if (rows.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "rounded-xl bg-card px-4 py-5 text-sm text-muted-foreground shadow-[var(--shadow-border)]",
		children: "No admin changes yet. Saves, icons, roles, and names show up here — batched if the same admin does several in a row."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "flex flex-col gap-1",
		children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex items-baseline justify-between gap-3 rounded-xl bg-card px-4 py-3 shadow-[var(--shadow-border)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate text-sm",
					children: row.summary
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate text-xs text-muted-foreground",
					children: row.actor
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "shrink-0 font-mono text-xs tabular-nums text-muted-foreground",
				children: ago(row.at)
			})]
		}, row.id))
	});
}
function rate(wins, losses) {
	const n = wins + losses;
	if (n === 0) return "—";
	return `${Math.round(wins / n * 100)}%`;
}
function AnalyticsPanel() {
	const [data, setData] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		getAnalytics().then(setData).catch(() => toast.error("Could not load stats"));
	}, []);
	if (!data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted-foreground",
		children: "Loading stats…"
	});
	const fights = data.recipes.reduce((s, r) => s + r.wins + r.losses, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted-foreground",
				children: ["Recorded fights stay here for later. Scout no longer asks Won or Lost.", fights === 0 ? " No fights recorded yet." : ` ${fights} recorded.`]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "ghost",
					onClick: () => {
						downloadJson(`crownpath-analytics-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, {
							app: "crownpath",
							v: 1,
							kind: "analytics",
							exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
							walls: data.walls,
							recipes: data.recipes
						});
						toast("Saved analytics file");
					},
					children: "Export"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "ghost",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/log",
						children: "Fight log"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-2 text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase",
				children: "By wall type"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-1",
				children: data.walls.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-baseline justify-between gap-3 rounded-xl bg-card px-4 py-3 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-sm",
						children: w.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "shrink-0 font-mono text-xs tabular-nums text-muted-foreground",
						children: [
							w.wins,
							"W ",
							w.losses,
							"L · ",
							rate(w.wins, w.losses)
						]
					})]
				}, w.archetype))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-2 text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase",
				children: "By strategy"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-1",
				children: data.recipes.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-baseline justify-between gap-3 rounded-xl bg-card px-4 py-3 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm",
							children: r.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-xs text-muted-foreground",
							children: r.author
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "shrink-0 font-mono text-xs tabular-nums text-muted-foreground",
						children: [
							r.wins,
							"W ",
							r.losses,
							"L · ",
							rate(r.wins, r.losses)
						]
					})]
				}, r.id))
			})] })
		]
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
