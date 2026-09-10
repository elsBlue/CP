import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { i as Input, n as Brand, r as Button, t as BootScreen } from "./boot-screen-CBR_ZPNs.mjs";
import { r as signIn, t as authClient } from "./client-B40BzJxt.mjs";
import { t as GROK_PROVIDERS } from "./server-C1sIXANq.mjs";
import { T as useCurrentUserState } from "./router-DrPSiwCO.mjs";
import { t as Label } from "./label-CWRst6zu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-BtpImVh0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function authErrorMessage(err) {
	const raw = err instanceof Error ? err.message : "Could not sign in";
	const m = raw.toLowerCase();
	if (m.includes("already") || m.includes("exists")) return "That email already has an account. Sign in instead.";
	if (m.includes("invalid") || m.includes("credential") || m.includes("incorrect")) return "Wrong email or password.";
	if (m.includes("password") && m.includes("8")) return "Password must be at least 8 characters.";
	return raw;
}
function Login() {
	const { user, isPending } = useCurrentUserState();
	const navigate = useNavigate();
	const [mode, setMode] = (0, import_react.useState)("in");
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BootScreen, { label: "Checking session…" });
	if (user) {
		navigate({ to: "/" });
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BootScreen, {});
	}
	async function onEmail(e) {
		e.preventDefault();
		setError(null);
		setBusy(true);
		try {
			const mail = email.trim().toLowerCase();
			if (mode === "up") {
				const signed = await authClient.signUp.email({
					email: mail,
					password,
					name: name.trim() || mail.split("@")[0]
				});
				if (signed.error) throw new Error(signed.error.message ?? "Could not create account");
				await authClient.getSession();
				await navigate({ to: "/" });
				return;
			}
			const result = await authClient.signIn.email({
				email: mail,
				password
			});
			if (result.error) throw new Error(result.error.message ?? "Could not sign in");
			await authClient.getSession();
			await navigate({ to: "/" });
		} catch (err) {
			setError(authErrorMessage(err));
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-dvh place-items-center bg-background px-4 text-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, { size: "lg" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted-foreground",
					children: "Sign in to save your roster, settings, and results on this account."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: onEmail,
							className: "flex flex-col gap-3",
							children: [
								mode === "up" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "name",
										children: "Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "name",
										value: name,
										onChange: (e) => setName(e.target.value),
										placeholder: "Your name",
										autoComplete: "nickname"
									})]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "email",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "email",
										type: "email",
										required: true,
										value: email,
										onChange: (e) => setEmail(e.target.value),
										placeholder: "you@email.com",
										autoComplete: "email"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "password",
										children: "Password"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "password",
										type: "password",
										required: true,
										minLength: 8,
										value: password,
										onChange: (e) => setPassword(e.target.value),
										placeholder: "At least 8 characters",
										autoComplete: mode === "up" ? "new-password" : "current-password"
									})]
								}),
								error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-loss",
									children: error
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									className: "h-12",
									disabled: busy,
									children: busy ? "Please wait…" : mode === "up" ? "Create account" : "Sign in"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "h-11 text-sm text-muted-foreground hover:text-foreground",
									onClick: () => {
										setMode(mode === "up" ? "in" : "up");
										setError(null);
									},
									children: mode === "up" ? "Already have an account? Sign in" : "New here? Create an account"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs tracking-wider text-muted-foreground uppercase",
									children: "or"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-2",
							children: GROK_PROVIDERS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "secondary",
								className: "h-12",
								onClick: () => void signIn(p.providerId, { callbackURL: "/" }),
								children: ["Continue with ", p.label]
							}, p.providerId))
						})
					]
				})
			]
		})
	});
}
//#endregion
export { Login as component };
