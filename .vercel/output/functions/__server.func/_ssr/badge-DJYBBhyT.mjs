import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as ELEMENT_LABEL, n as CLASS_LABEL } from "./recipes-6teBQ5tU.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { i as cn } from "./boot-screen-Dq6k0eSO.mjs";
import { c as Sparkles, d as Heart, l as Shield, n as WandSparkles, o as Target, s as Swords } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badge-DJYBBhyT.js
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative flex items-center justify-center overflow-hidden rounded-lg bg-linear-to-b to-transparent", dim, WASH[hero.element], RING_CLASS[hero.element], selected && "ring-2 ring-primary/70", dimmed && "opacity-40"),
		title: `${hero.name} · ${ELEMENT_LABEL[hero.element]} ${CLASS_LABEL[hero.class]}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("font-display font-medium tracking-tight text-foreground/90", text),
				children: initials(hero)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: cn("absolute right-0.5 bottom-0.5 size-3", ELEMENT_CLASS[hero.element]),
				strokeWidth: 2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute top-0.5 left-0.5 font-mono text-[9px] font-medium tracking-wider text-muted-foreground",
				children: hero.tier
			})
		]
	});
}
function EmptyPortrait({ size = "md" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex items-center justify-center rounded-lg bg-secondary text-muted-foreground shadow-[var(--shadow-border)]", size === "sm" ? "size-11" : size === "lg" ? "size-16" : "size-14"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-lg leading-none",
			children: "+"
		})
	});
}
var badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-wide uppercase", {
	variants: { variant: {
		default: "bg-secondary text-muted-foreground",
		steel: "bg-primary/12 text-primary",
		win: "bg-win/15 text-win",
		loss: "bg-loss/15 text-loss",
		fire: "bg-fire/15 text-fire",
		ice: "bg-ice/15 text-ice",
		earth: "bg-earth/15 text-earth",
		light: "bg-light/15 text-light",
		dark: "bg-dark/20 text-dark",
		outline: "shadow-[var(--shadow-border)] text-muted-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
//#endregion
export { EmptyPortrait as n, HeroPortrait as r, Badge as t };
