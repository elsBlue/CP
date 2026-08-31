import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { d as useRouterState, v as Link, y as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _ as rankForVp } from "./recipes-6teBQ5tU.mjs";
import { i as cn, t as BootScreen } from "./boot-screen-Dq6k0eSO.mjs";
import { i as signOut } from "./client-B40BzJxt.mjs";
import { a as TrendingUp, f as Crosshair, r as Users, u as Settings2 } from "../_libs/lucide-react.mjs";
import { _ as useCurrentUserState, g as useCurrentUser, r as useArenaStore } from "./router-CaxQZeMY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/require-auth-DmseqNkU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		to: "/",
		label: "Scout",
		icon: Crosshair
	},
	{
		to: "/roster",
		label: "Roster",
		icon: Users
	},
	{
		to: "/log",
		label: "Results",
		icon: TrendingUp
	}
];
function AppShell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const vp = useArenaStore((s) => s.vp);
	const role = useArenaStore((s) => s.role);
	const rank = rankForVp(vp);
	const items = role === "admin" ? [...NAV, {
		to: "/admin",
		label: "Admin",
		icon: Settings2
	}] : NAV;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "min-w-0 font-display text-lg tracking-tight",
							children: "Crownpath"
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden text-right sm:block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium tracking-wider text-muted-foreground uppercase",
									children: rank.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-mono text-sm tabular-nums",
									children: [vp.toLocaleString(), " VP"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountChip, {})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto w-full max-w-5xl px-4 pt-6 pb-[calc(5.75rem+env(safe-area-inset-bottom))] md:pt-8 md:pb-16",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-40 border-t border-border/80 bg-background/90 backdrop-blur-md md:hidden",
				style: { paddingBottom: "env(safe-area-inset-bottom)" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("grid h-14", items.length === 4 ? "grid-cols-4" : "grid-cols-3"),
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
	const [signingOut, setSigningOut] = (0, import_react.useState)(false);
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-8 rounded-full bg-secondary" });
	const label = user.displayName ?? user.primaryEmail ?? "Account";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		disabled: signingOut,
		onClick: () => {
			setSigningOut(true);
			signOut("/login").catch(() => setSigningOut(false));
		},
		className: "flex max-w-[9.5rem] items-center gap-2 rounded-full bg-secondary py-1 pr-3 pl-1 text-left",
		title: "Sign out",
		children: [user.profileImageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: user.profileImageUrl,
			alt: "",
			className: "size-8 rounded-full object-cover"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid size-8 place-items-center rounded-full bg-primary text-xs font-medium text-primary-foreground",
			children: label.charAt(0).toUpperCase()
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "min-w-0 truncate text-xs",
			children: signingOut ? "Signing out…" : label
		})]
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
function RequireAuth({ children, admin = false }) {
	const { user, isPending } = useCurrentUserState();
	const hydrated = useArenaStore((s) => s.hydrated);
	const role = useArenaStore((s) => s.role);
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BootScreen, {});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RedirectToSignIn, {});
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BootScreen, {});
	if (admin && role !== "admin") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
//#endregion
export { RequireAuth as n, AppShell as t };
