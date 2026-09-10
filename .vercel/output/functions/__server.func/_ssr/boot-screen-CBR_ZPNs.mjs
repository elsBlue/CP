import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime, u as Slot } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/boot-screen-CBR_ZPNs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
/** Journal stamp `YYYY-MM-DD` → today / yesterday / N days ago. */
function daysAgoLabel(iso) {
	if (!iso) return null;
	const d = /* @__PURE__ */ new Date(`${iso}T00:00:00`);
	if (Number.isNaN(d.getTime())) return iso;
	const now = /* @__PURE__ */ new Date();
	const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
	const then = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
	const days = Math.round((today - then) / 864e5);
	if (days <= 0) return "today";
	if (days === 1) return "yesterday";
	return `${days} days ago`;
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			secondary: "bg-secondary text-secondary-foreground shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			outline: "bg-transparent shadow-[var(--shadow-border)] hover:bg-secondary hover:shadow-[var(--shadow-border-hover)]",
			ghost: "hover:bg-secondary",
			destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 rounded-md px-3 text-xs",
			lg: "h-12 rounded-lg px-5",
			icon: "size-11",
			"icon-sm": "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		"data-slot": "button",
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md bg-secondary px-3 text-sm text-foreground shadow-[var(--shadow-border)] outline-none transition-[box-shadow] duration-150 placeholder:text-muted-foreground/70 focus-visible:shadow-[var(--shadow-border-hover)] focus-visible:ring-2 focus-visible:ring-ring/40 disabled:opacity-40", className),
		...props
	});
}
function Brand({ size = "md", align = "left" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex flex-col leading-none", align === "center" && "items-center text-center"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("font-display tracking-tight", size === "lg" && "text-3xl", size === "md" && "text-2xl", size === "sm" && "text-lg"),
			children: "Crownpath"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("mt-1 text-xs text-muted-foreground", size === "sm" && "mt-0.5"),
			children: "by skybreaker"
		})]
	});
}
function BootScreen({ label = "Loading data…" }) {
	const [reduced, setReduced] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative grid min-h-dvh place-items-center overflow-hidden bg-background px-6 text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 md:grid md:place-items-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "boot-shade absolute inset-0 overflow-hidden md:relative md:inset-auto md:rounded-full",
				"aria-hidden": true,
				children: [reduced ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/intro/shade.jpg?v=2",
					alt: "",
					className: "boot-shade-media"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					className: "boot-shade-media",
					src: "/intro/shade.mp4?v=2",
					poster: "/intro/shade.jpg?v=2",
					autoPlay: true,
					muted: true,
					playsInline: true,
					preload: "auto"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "boot-shade-veil absolute inset-0" })]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 flex flex-col items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {
				size: "md",
				align: "center"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: label
			})]
		})]
	});
}
//#endregion
export { cn as a, Input as i, Brand as n, daysAgoLabel as o, Button as r, BootScreen as t };
