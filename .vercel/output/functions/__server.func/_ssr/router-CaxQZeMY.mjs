import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createRootRoute, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, x as useRouter, z as redirect } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as getServerFnById, i as TSS_SERVER_FUNCTION, r as createServerFn, s as __exportAll } from "./ssr.mjs";
import { a as HEROES, c as RECIPES, f as authMiddleware, l as SAMPLE_ROSTER, o as HERO_BY_ID, r as DEFAULT_VP, s as PRESET_DEFENSES, u as STARTER_ROSTER } from "./recipes-6teBQ5tU.mjs";
import { A as boolean, D as _enum, F as object, L as record, M as literal, P as number, R as string, k as array, z as union } from "../_libs/@better-auth/core+[...].mjs";
import { t as authClient } from "./client-B40BzJxt.mjs";
import { n as auth } from "./server-KsDbm51w.mjs";
import { i as TriangleAlert } from "../_libs/lucide-react.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Provider } from "../_libs/radix-ui__react-tooltip.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CaxQZeMY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 bg-background px-6 text-center text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-destructive",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-xl font-medium tracking-tight",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-muted-foreground",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
function AppNotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 bg-background px-6 text-center text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-xl font-medium tracking-tight",
				children: "No page here"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "That path does not exist in Crownpath."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "/",
				className: "text-sm text-primary underline-offset-4 hover:underline",
				children: "Back to scout"
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function Toaster$1() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		theme: "dark",
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast bg-card text-foreground shadow-[var(--shadow-border)] border-0",
			description: "text-muted-foreground"
		} }
	});
}
function TooltipProvider({ delayDuration = 200, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Provider, {
		delayDuration,
		...props
	});
}
/**
* Current user + loading state. Same behavior in live preview and when deployed:
*   - Auth enabled -> the real signed-in user; `user` is `null` while
*                            the session resolves (`isPending: true`) and when
*                            signed out (`isPending: false`). Session comes from
*                            Better Auth `useSession()` → `/api/auth/get-session`
*                            (cookie when deployed; bearer in live preview).
*   - Auth disabled (`VITE_AUTH_ENABLED=false`) -> `DEV_USER`, never pending.
*
* Protect a route by waiting out `isPending` before acting on `user` —
* redirecting on `user: null` alone bounces signed-in visitors to sign-in on
* every hard reload:
*
*   import { RedirectToSignIn } from "@/lib/auth/gates";
*   const { user, isPending } = useCurrentUserState();
*   if (isPending) return null;              // still resolving — don't redirect yet
*   if (!user) return <RedirectToSignIn />;  // definitely signed out
*
* `authEnabled` is a module-level constant fixed at load, so the guarded hook
* call keeps a stable hook order across every render of a given component.
*/
function useCurrentUserState() {
	const { data, isPending } = authClient.useSession();
	const user = data?.user;
	return {
		user: user ? {
			id: user.id,
			displayName: user.name ?? null,
			primaryEmail: user.email ?? null,
			profileImageUrl: user.image ?? null,
			isDevFallback: false
		} : null,
		isPending
	};
}
/**
* Convenience view of `useCurrentUserState().user` for display (e.g.
* `user?.displayName ?? "Guest"`). NOTE: `null` means *loading OR signed out* —
* for redirects/guards use `useCurrentUserState()` and check `isPending`.
*/
function useCurrentUser() {
	return useCurrentUserState().user;
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getCatalog = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("f683033da44518010a90e4abc7865c65a2b5c8135c63f2d2ebf0345bc15180e3"));
var getArena = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("fe4b0688430b503c34f0b773c38bdb079a7af969460739e360a85cd53dd02716"));
var arenaStateSchema = object({
	vp: number().int().min(800).max(6e3),
	restrictToRoster: boolean(),
	enemy: array(string()).max(4),
	lastTeam: array(string()).max(4),
	roster: record(string(), object({
		owned: boolean(),
		built: boolean()
	}))
});
var saveArena = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(arenaStateSchema).handler(createSsrRpc("dcceba28ba76902cfe6dd91dfc4e7087ff72c9db1abd543bda0155a7ef9b7783"));
var matchSchema = object({
	id: string().min(1),
	at: number().optional(),
	enemy: array(string()).max(4),
	team: array(string()).max(4),
	won: boolean(),
	vpDelta: number().int(),
	note: string().max(280).optional(),
	recipeId: string().optional(),
	recipeName: string().optional(),
	archetype: string().optional()
});
var saveMatch = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(matchSchema).handler(createSsrRpc("92856220f1d5d98893da5278af82961dec1ac2c6512aefe35b22ea147916f1d7"));
var removeMatch = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({ id: string().min(1) })).handler(createSsrRpc("149a27cb7d5cb563daced54b825f7aaa15db2da63e658d45111f3f9289a22ad6"));
var clearMatches = createServerFn({ method: "POST" }).middleware([authMiddleware]).handler(createSsrRpc("41ec4eb545d8a4963763581e265a1f4424b9dcf0426e00bfef088ea9830885b4"));
var heroSchema = object({
	id: string().min(1).max(64).regex(/^[a-z0-9-]+$/),
	name: string().min(1).max(80),
	short: string().min(1).max(24),
	element: _enum([
		"fire",
		"ice",
		"earth",
		"light",
		"dark"
	]),
	class: _enum([
		"knight",
		"warrior",
		"mage",
		"ranger",
		"thief",
		"soulweaver"
	]),
	tier: _enum([
		"SS",
		"S",
		"A",
		"B"
	]),
	roles: array(string()).max(12),
	tags: array(string()).max(20),
	kit: string().max(500),
	defense: number().int().min(0).max(10),
	offense: number().int().min(0).max(10)
});
var saveHero = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(heroSchema).handler(createSsrRpc("cb2cdfa13d1a19d9b8e3c7c3c6604579011fb8539ae7e851ee51df95594907f6"));
var deleteHero = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({ id: string().min(1) })).handler(createSsrRpc("88bf1be12c130000e4bee1e58c5e5c2fb3d8b99a7faa14046df6a49b7944930b"));
var slotSchema = object({
	label: string().min(1).max(32),
	roles: array(string()).optional(),
	tags: array(string()).optional(),
	prefer: array(string()).optional()
});
var recipeSchema = object({
	id: string().min(1).max(64).regex(/^[a-z0-9-]+$/),
	name: string().min(1).max(80),
	vs: array(string()).max(12),
	summary: string().max(400),
	wincon: string().max(500),
	setup: string().max(500),
	pitfalls: array(string()).max(8),
	slots: array(slotSchema).min(4).max(4)
});
var saveRecipe = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(recipeSchema).handler(createSsrRpc("b5e099a4b29d7250646d46107e9ccdcde1616d46eef205c2a258582b1041a0f5"));
var deleteRecipe = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({ id: string().min(1) })).handler(createSsrRpc("189d9659d3410c803d115de7444e184bedf81a9dd55aa6f5ca07637e001f4441"));
var presetSchema = object({
	id: string().min(1).max(64).regex(/^[a-z0-9-]+$/),
	name: string().min(1).max(40),
	heroIds: array(string()).min(1).max(4),
	blurb: string().max(200)
});
var savePreset = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(presetSchema).handler(createSsrRpc("58fadfe80d8abe2ab711d6b70c8d1eccfc01489e4e8bfbb0a83103780abe7435"));
var deletePreset = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({ id: string().min(1) })).handler(createSsrRpc("b78681f0d28822155787f578828bf849369a5e3811a1d5cee7de00e7a79e1fbf"));
var listMembers = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("00386725c51991701de8cb3611d9e9c9b526d105bcbf16426289d870804da06a"));
var setMemberRole = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({
	userId: string().min(1),
	role: _enum(["member", "admin"])
})).handler(createSsrRpc("b7c6a3f3c0cbd5253e374ffb8a2714fcd1c7b8df44eaa28e36fbd76d29237c05"));
var useCatalog = create((set) => ({
	heroes: HEROES,
	recipes: RECIPES,
	presets: PRESET_DEFENSES,
	loaded: false,
	setCatalog: (next) => set({
		heroes: next.heroes,
		recipes: next.recipes,
		presets: next.presets,
		loaded: true
	})
}));
function allHeroes() {
	return useCatalog.getState().heroes;
}
function allRecipes() {
	return useCatalog.getState().recipes;
}
function getHero(id) {
	return useCatalog.getState().heroes.find((h) => h.id === id) ?? HERO_BY_ID[id];
}
function emptySlots() {
	return [
		"",
		"",
		"",
		""
	];
}
function rosterFrom(ids) {
	const next = {};
	for (const id of ids) next[id] = {
		owned: true,
		built: true
	};
	return next;
}
var emptyState = {
	hydrated: false,
	role: "member",
	roster: {},
	enemy: [
		"harsetti",
		"last-rider-krau",
		"belian",
		"dragon-bride-senya"
	],
	lastTeam: emptySlots(),
	vp: DEFAULT_VP,
	matches: [],
	restrictToRoster: true
};
var saveTimer;
function persistState() {
	if (typeof window === "undefined") return;
	if (saveTimer) clearTimeout(saveTimer);
	saveTimer = setTimeout(() => {
		const s = useArenaStore.getState();
		if (!s.hydrated) return;
		saveArena({ data: {
			vp: s.vp,
			restrictToRoster: s.restrictToRoster,
			enemy: s.enemy,
			lastTeam: s.lastTeam,
			roster: s.roster
		} }).catch(() => {});
	}, 400);
}
var useArenaStore = create((set, get) => ({
	...emptyState,
	applyServer: (payload) => set({
		hydrated: true,
		role: payload.role,
		roster: payload.roster,
		enemy: payload.enemy.length ? payload.enemy : emptyState.enemy,
		lastTeam: payload.lastTeam,
		vp: payload.vp,
		matches: payload.matches,
		restrictToRoster: payload.restrictToRoster
	}),
	resetSession: () => set({ ...emptyState }),
	setEnemySlot: (index, id) => {
		const enemy = [...get().enemy];
		enemy[index] = id ?? "";
		set({ enemy });
		persistState();
	},
	setEnemy: (ids) => {
		const enemy = emptySlots();
		ids.slice(0, 4).forEach((id, i) => {
			enemy[i] = id;
		});
		set({ enemy });
		persistState();
	},
	setLastTeam: (ids) => {
		set({ lastTeam: ids.slice(0, 4) });
		persistState();
	},
	toggleBuilt: (id) => {
		const roster = { ...get().roster };
		const cur = roster[id] ?? {
			owned: false,
			built: false
		};
		const built = !cur.built;
		roster[id] = {
			owned: built ? true : cur.owned,
			built
		};
		if (!roster[id].owned && !roster[id].built) delete roster[id];
		set({ roster });
		persistState();
	},
	loadPresetRoster: (kind) => {
		if (kind === "clear") set({ roster: {} });
		else if (kind === "starter") set({ roster: rosterFrom(STARTER_ROSTER) });
		else set({ roster: rosterFrom(SAMPLE_ROSTER) });
		persistState();
	},
	setRestrict: (v) => {
		set({ restrictToRoster: v });
		persistState();
	},
	setVp: (vp) => {
		set({ vp: Math.max(800, Math.min(6e3, Math.round(vp))) });
		persistState();
	},
	logMatch: (entry) => {
		const match = {
			id: crypto.randomUUID(),
			at: entry.at ?? Date.now(),
			enemy: entry.enemy,
			team: entry.team,
			won: entry.won,
			vpDelta: entry.vpDelta,
			note: entry.note,
			recipeId: entry.recipeId,
			recipeName: entry.recipeName,
			archetype: entry.archetype
		};
		const vp = Math.max(800, get().vp + entry.vpDelta);
		set({
			matches: [match, ...get().matches].slice(0, 80),
			vp,
			lastTeam: entry.team
		});
		saveMatch({ data: {
			id: match.id,
			at: match.at,
			enemy: match.enemy,
			team: match.team,
			won: match.won,
			vpDelta: match.vpDelta,
			note: match.note,
			recipeId: match.recipeId,
			recipeName: match.recipeName,
			archetype: match.archetype
		} }).catch(() => {});
	},
	removeMatch: (id) => {
		set({ matches: get().matches.filter((m) => m.id !== id) });
		removeMatch({ data: { id } }).catch(() => void 0);
	},
	clearMatches: () => {
		set({ matches: [] });
		clearMatches().catch(() => void 0);
	}
}));
function builtIds(roster) {
	return Object.entries(roster).filter(([, v]) => v.built).map(([id]) => id);
}
function HydrateArena() {
	const { user, isPending } = useCurrentUserState();
	(0, import_react.useEffect)(() => {
		if (isPending) return;
		if (!user) {
			useArenaStore.getState().resetSession();
			return;
		}
		let cancelled = false;
		Promise.all([getCatalog(), getArena()]).then(([catalog, arena]) => {
			if (cancelled) return;
			useCatalog.getState().setCatalog(catalog);
			useArenaStore.getState().applyServer(arena);
		}).catch(() => {
			if (!cancelled) useArenaStore.setState({ hydrated: true });
		});
		return () => {
			cancelled = true;
		};
	}, [user?.id, isPending]);
	return null;
}
function Providers({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TooltipProvider, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HydrateArena, {}),
		children,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})
	] });
}
var styles_default = "/assets/styles-vIsT634A.css";
var APP_NAME = "Crownpath";
var Route$7 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Epic Seven guild scout — each member keeps their own roster and results."
			},
			{
				name: "theme-color",
				content: "#0a0b0c"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;1,400&family=IBM+Plex+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Providers, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$4 = () => import("./routes-pHMS5KEC.mjs");
var Route$6 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./admin-JJprEWmb.mjs");
var Route$5 = createFileRoute("/admin")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var Route$4 = createFileRoute("/defense")({ beforeLoad: () => {
	throw redirect({ to: "/" });
} });
var $$splitComponentImporter$2 = () => import("./log-DI5hOM1M.mjs");
var Route$3 = createFileRoute("/log")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./login-BIL2SyeI.mjs");
var Route$2 = createFileRoute("/login")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./roster-CaGS0K3F.mjs");
var Route$1 = createFileRoute("/roster")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var Route = createFileRoute("/api/auth/$")({ server: { handlers: {
	GET: ({ request }) => auth.handler(request),
	POST: ({ request }) => auth.handler(request)
} } });
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AdminRoute: Route$5.update({
		id: "/admin",
		path: "/admin",
		getParentRoute: () => Route$7
	}),
	DefenseRoute: Route$4.update({
		id: "/defense",
		path: "/defense",
		getParentRoute: () => Route$7
	}),
	LogRoute: Route$3.update({
		id: "/log",
		path: "/log",
		getParentRoute: () => Route$7
	}),
	LoginRoute: Route$2.update({
		id: "/login",
		path: "/login",
		getParentRoute: () => Route$7
	}),
	RosterRoute: Route$1.update({
		id: "/roster",
		path: "/roster",
		getParentRoute: () => Route$7
	}),
	ApiAuthSplatRoute: Route.update({
		id: "/api/auth/$",
		path: "/api/auth/$",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		defaultNotFoundComponent: AppNotFoundComponent
	});
}
//#endregion
export { useCurrentUserState as _, allRecipes as a, deleteHero as c, listMembers as d, saveHero as f, useCurrentUser as g, setMemberRole as h, allHeroes as i, deletePreset as l, saveRecipe as m, builtIds as n, getHero as o, savePreset as p, useArenaStore as r, useCatalog as s, router_exports as t, deleteRecipe as u };
