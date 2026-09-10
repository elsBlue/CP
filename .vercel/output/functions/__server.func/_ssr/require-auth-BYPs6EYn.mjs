import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { d as useRouterState, v as Link, y as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { r as CLASS_LABEL, s as ELEMENT_LABEL } from "./recipes-DsR1fcfA.mjs";
import { t as isOwnerIdentity } from "./owner-PZ9T3dqf.mjs";
import { a as cn, n as Brand, t as BootScreen } from "./boot-screen-CBR_ZPNs.mjs";
import { i as signOut } from "./client-B40BzJxt.mjs";
import { a as Target, c as Sparkles, d as LogOut, h as Crosshair, l as Shield, m as Heart, n as WandSparkles, o as Swords, r as Users, u as Settings2 } from "../_libs/lucide-react.mjs";
import { T as useCurrentUserState, r as useArenaStore, w as useCurrentUser } from "./router-DrPSiwCO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/require-auth-BYPs6EYn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CLASS_ICON = {
	knight: Shield,
	warrior: Swords,
	mage: WandSparkles,
	ranger: Target,
	thief: Sparkles,
	soulweaver: Heart
};
var ELEMENT_CLASS = {
	fire: "text-fire",
	ice: "text-ice",
	earth: "text-earth",
	light: "text-light",
	dark: "text-dark"
};
var RING_CLASS = {
	fire: "shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fire)_55%,transparent)]",
	ice: "shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-ice)_55%,transparent)]",
	earth: "shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-earth)_55%,transparent)]",
	light: "shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-light)_55%,transparent)]",
	dark: "shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-dark)_55%,transparent)]"
};
var WASH = {
	fire: "from-fire/20",
	ice: "from-ice/20",
	earth: "from-earth/20",
	light: "from-light/18",
	dark: "from-dark/22"
};
function initials(hero) {
	const parts = hero.short.split(/[.\s]+/).filter(Boolean);
	if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
	return hero.short.slice(0, 2).toUpperCase();
}
function HeroPortrait({ hero, size = "md", selected = false, dimmed = false }) {
	const Icon = CLASS_ICON[hero.class];
	const dim = size === "sm" ? "size-11" : size === "lg" ? "size-16" : "size-14";
	const text = size === "sm" ? "text-xs" : size === "lg" ? "text-base" : "text-sm";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("relative flex aspect-square shrink-0 items-center justify-center overflow-hidden rounded-md bg-secondary bg-linear-to-b to-transparent", dim, WASH[hero.element], RING_CLASS[hero.element], selected && "ring-2 ring-primary/70", dimmed && "opacity-40"),
		title: `${hero.name} · ${ELEMENT_LABEL[hero.element]} ${CLASS_LABEL[hero.class]}`,
		children: hero.icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: hero.icon,
			alt: "",
			className: "size-full object-cover object-center"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("font-display font-medium tracking-tight text-foreground/90", text),
				children: initials(hero)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: cn("absolute right-0.5 bottom-0.5 size-3", ELEMENT_CLASS[hero.element]),
				strokeWidth: 2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute top-0.5 left-0.5 font-mono text-xs font-medium tracking-wider text-muted-foreground",
				children: hero.tier
			})
		] })
	});
}
function Starfield() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = ref.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const surface = canvas;
		const g = ctx;
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		let w = 0;
		let h = 0;
		let dpr = 1;
		let stars = [];
		let meteor = null;
		let nextMeteor = 5e3 + Math.random() * 7e3;
		let raf = 0;
		let last = performance.now();
		let hidden = document.hidden;
		function seed() {
			const n = Math.min(160, Math.max(48, Math.floor(w * h / 12e3)));
			stars = Array.from({ length: n }, () => ({
				x: Math.random() * w,
				y: Math.random() * h,
				r: Math.random() * 1.25 + .28,
				a: Math.random() * .38 + .14,
				tw: Math.random() * Math.PI * 2,
				sp: .35 + Math.random() * 1.1
			}));
		}
		function resize() {
			dpr = Math.min(window.devicePixelRatio || 1, 2);
			w = window.innerWidth;
			h = window.innerHeight;
			surface.width = Math.floor(w * dpr);
			surface.height = Math.floor(h * dpr);
			surface.style.width = `${w}px`;
			surface.style.height = `${h}px`;
			g.setTransform(dpr, 0, 0, dpr, 0, 0);
			seed();
		}
		function draw(now) {
			const dt = Math.min(48, now - last);
			last = now;
			g.clearRect(0, 0, w, h);
			for (const s of stars) {
				if (!reduced) s.tw += s.sp * dt / 1e3;
				const a = reduced ? s.a * .85 : s.a * (.62 + .38 * Math.sin(s.tw));
				g.fillStyle = `rgba(236, 238, 242, ${a})`;
				g.beginPath();
				g.arc(s.x, s.y, s.r, 0, Math.PI * 2);
				g.fill();
			}
			if (!reduced && !hidden) {
				nextMeteor -= dt;
				if (!meteor && nextMeteor <= 0) {
					meteor = {
						x: Math.random() * w * .72,
						y: Math.random() * h * .38,
						vx: .42 + Math.random() * .28,
						vy: .22 + Math.random() * .16,
						life: 0,
						max: 640 + Math.random() * 420
					};
					nextMeteor = 1e4 + Math.random() * 14e3;
				}
				if (meteor) {
					meteor.life += dt;
					meteor.x += meteor.vx * dt;
					meteor.y += meteor.vy * dt;
					const p = meteor.life / meteor.max;
					const alpha = p < .12 ? p / .12 : Math.max(0, 1 - (p - .12) / .88);
					const len = 78;
					const gx = meteor.x - meteor.vx * len;
					const gy = meteor.y - meteor.vy * len;
					const grad = g.createLinearGradient(gx, gy, meteor.x, meteor.y);
					grad.addColorStop(0, "rgba(230,232,236,0)");
					grad.addColorStop(1, `rgba(252,253,255,${.78 * alpha})`);
					g.strokeStyle = grad;
					g.lineWidth = 1.35;
					g.beginPath();
					g.moveTo(gx, gy);
					g.lineTo(meteor.x, meteor.y);
					g.stroke();
					g.fillStyle = `rgba(255,255,255,${.88 * alpha})`;
					g.beginPath();
					g.arc(meteor.x, meteor.y, 1.45, 0, Math.PI * 2);
					g.fill();
					if (meteor.life > meteor.max || meteor.x > w + 50 || meteor.y > h + 50) meteor = null;
				}
			}
			raf = requestAnimationFrame(draw);
		}
		function onVis() {
			hidden = document.hidden;
			if (!hidden) last = performance.now();
		}
		resize();
		window.addEventListener("resize", resize);
		document.addEventListener("visibilitychange", onVis);
		raf = requestAnimationFrame(draw);
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", resize);
			document.removeEventListener("visibilitychange", onVis);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref,
		className: "pointer-events-none fixed inset-0 z-0",
		"aria-hidden": true
	});
}
var NAV = [{
	to: "/",
	label: "Scout",
	icon: Crosshair
}, {
	to: "/roster",
	label: "Roster",
	icon: Users
}];
function AppShell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const user = useCurrentUser();
	const role = useArenaStore((s) => s.role);
	const email = useArenaStore((s) => s.email);
	const items = role === "admin" || isOwnerIdentity(user?.primaryEmail, user?.displayName, email) ? [...NAV, {
		to: "/admin",
		label: "Admin",
		icon: Settings2
	}] : NAV;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-dvh bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Starfield, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "min-w-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, { size: "sm" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-1 md:flex",
							children: items.map((item) => {
								const active = pathname === item.to || item.to !== "/" && pathname.startsWith(item.to);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: item.to,
									className: cn("inline-flex h-11 items-center gap-2 rounded-md px-3 text-sm transition-colors duration-150", active ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
										className: "size-4",
										strokeWidth: 1.75
									}), item.label]
								}, item.to);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex min-w-0 items-center gap-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountChip, {})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "relative z-10 mx-auto w-full max-w-5xl px-4 pt-6 pb-[calc(5.75rem+env(safe-area-inset-bottom))] md:pt-8 md:pb-16",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-40 border-t border-border/80 bg-background/90 backdrop-blur-md md:hidden",
				style: { paddingBottom: "env(safe-area-inset-bottom)" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("grid h-14", items.length === 3 ? "grid-cols-3" : "grid-cols-2"),
					children: items.map((item) => {
						const active = pathname === item.to || item.to !== "/" && pathname.startsWith(item.to);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							className: cn("flex min-h-11 flex-col items-center justify-center gap-0.5 text-xs tracking-wide", active ? "text-foreground" : "text-muted-foreground"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
								className: "size-4",
								strokeWidth: active ? 2 : 1.75
							}), item.label]
						}, item.to);
					})
				})
			})
		]
	});
}
function AccountChip() {
	const user = useCurrentUser();
	const role = useArenaStore((s) => s.role);
	const email = useArenaStore((s) => s.email);
	const shownEmail = email ?? user?.primaryEmail ?? null;
	const isAdmin = role === "admin" || isOwnerIdentity(user?.primaryEmail, user?.displayName, email);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [signingOut, setSigningOut] = (0, import_react.useState)(false);
	const box = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		function onPointer(event) {
			if (!box.current?.contains(event.target)) setOpen(false);
		}
		document.addEventListener("pointerdown", onPointer);
		return () => document.removeEventListener("pointerdown", onPointer);
	}, [open]);
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-8 rounded-full bg-secondary" });
	const label = user.displayName ?? user.primaryEmail ?? "Account";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: box,
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			"aria-expanded": open,
			"aria-haspopup": "menu",
			onClick: () => setOpen((v) => !v),
			className: "flex max-w-[9.5rem] items-center gap-2 rounded-full bg-secondary py-1 pr-3 pl-1 text-left",
			children: [user.profileImageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: user.profileImageUrl,
				alt: "",
				className: "size-8 rounded-full object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid size-8 place-items-center rounded-full bg-primary text-xs font-medium text-primary-foreground",
				children: label.charAt(0).toUpperCase()
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-0 truncate text-xs",
				children: label
			})]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "menu",
			className: "absolute right-0 z-50 mt-2 w-56 rounded-xl bg-popover p-3 text-popover-foreground shadow-[var(--shadow-border)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate text-sm font-medium",
					children: label
				}),
				shownEmail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 truncate text-xs text-muted-foreground",
					children: shownEmail
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 truncate text-xs text-muted-foreground",
					children: "Google / X session"
				}),
				isAdmin ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs tracking-wide text-muted-foreground uppercase",
					children: "Admin"
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-col gap-1",
					children: [isAdmin ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/admin",
						role: "menuitem",
						onClick: () => setOpen(false),
						className: "inline-flex h-11 items-center gap-2 rounded-md px-3 text-sm hover:bg-secondary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings2, {
							className: "size-4",
							strokeWidth: 1.75
						}), "Admin"]
					}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						role: "menuitem",
						disabled: signingOut,
						onClick: () => {
							setSigningOut(true);
							setOpen(false);
							useArenaStore.getState().resetSession();
							signOut("/login").catch(() => setSigningOut(false));
						},
						className: "inline-flex h-11 items-center gap-2 rounded-md px-3 text-sm text-loss hover:bg-secondary disabled:opacity-60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {
							className: "size-4",
							strokeWidth: 1.75
						}), signingOut ? "Signing out…" : "Sign out"]
					})]
				})
			]
		}) : null]
	});
}
/**
* Auth state components — plain wrappers around `useCurrentUserState()`.
*
* With auth on, visitors are signed out until they authenticate — in the sandbox
* live preview too, which does real sign-in. The shared dev user appears only
* when auth is disabled (`VITE_AUTH_ENABLED=false`, the shipped default).
* While the session is still resolving, gates that care about signed-out state
* render nothing so there's no signed-out flash on hard reload.
*/
/** Where `RedirectToSignIn` sends signed-out visitors. Create this route. */
var SIGN_IN_PATH = "/login";
/**
* Client-side redirect to the sign-in route (TanStack `<Navigate>` — NOT a full
* `window.location` reload). A hard navigation re-bootstraps the SPA and re-runs
* session loading, which feels like a second "Loading…" on /login.
*
* Guard routes by waiting out `isPending` first (see `use-current-user`), then
* render this.
*/
function RedirectToSignIn({ to = SIGN_IN_PATH }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to });
}
var INTRO_MS = 11600;
function RequireAuth({ children, admin = false }) {
	const { user, isPending } = useCurrentUserState();
	const hydrated = useArenaStore((s) => s.hydrated);
	const role = useArenaStore((s) => s.role);
	const email = useArenaStore((s) => s.email);
	const [introDone, setIntroDone] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || sessionStorage.getItem("crownpath-shade") === "1") {
			setIntroDone(true);
			return;
		}
		const timer = window.setTimeout(() => {
			sessionStorage.setItem("crownpath-shade", "1");
			setIntroDone(true);
		}, INTRO_MS);
		return () => window.clearTimeout(timer);
	}, []);
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BootScreen, {});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RedirectToSignIn, {});
	if (!hydrated || !introDone) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BootScreen, {});
	if (admin && role !== "admin" && !isOwnerIdentity(user.primaryEmail, user.displayName, email)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
//#endregion
export { HeroPortrait as n, RequireAuth as r, AppShell as t };
