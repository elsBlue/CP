//#region node_modules/.nitro/vite/services/ssr/assets/owner-PZ9T3dqf.js
var OWNER_EMAILS = ["iqbalhasansc200@gmail.com", "iqbalhasandc200@gmail.com"];
var OWNER_LOCALS = /* @__PURE__ */ new Set(["iqbalhasansc200", "iqbalhasandc200"]);
function normalize(value) {
	return value.trim().toLowerCase().replace(/@googlemail\.com$/, "@gmail.com");
}
function gmailLocal(email) {
	const m = email.match(/^([^@+]+)(?:\+[^@]*)?@gmail\.com$/);
	return m ? m[1].replaceAll(".", "") : null;
}
function looksLikeOwner(value) {
	const v = normalize(value);
	if (!v) return false;
	if (OWNER_EMAILS.includes(v)) return true;
	const local = gmailLocal(v);
	if (local && OWNER_LOCALS.has(local)) return true;
	for (const email of OWNER_EMAILS) if (v.includes(email)) return true;
	for (const loc of OWNER_LOCALS) if (v === loc || v.includes(`${loc}@`)) return true;
	return false;
}
/** True if any identifier belongs to the owner — email, alias, or broker wrap. */
function isOwnerIdentity(...values) {
	return values.some((raw) => Boolean(raw) && looksLikeOwner(String(raw)));
}
//#endregion
export { isOwnerIdentity as t };
