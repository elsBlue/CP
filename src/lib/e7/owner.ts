/** Canonical owner Gmail. The dc alias is kept — older Google / typo logins. */
export const OWNER_EMAIL = "iqbalhasansc200@gmail.com";

const OWNER_EMAILS = [
  "iqbalhasansc200@gmail.com",
  "iqbalhasandc200@gmail.com",
] as const;

const OWNER_LOCALS = new Set(["iqbalhasansc200", "iqbalhasandc200"]);

function normalize(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/@googlemail\.com$/, "@gmail.com");
}

function gmailLocal(email: string): string | null {
  const m = email.match(/^([^@+]+)(?:\+[^@]*)?@gmail\.com$/);
  return m ? m[1]!.replaceAll(".", "") : null;
}

function looksLikeOwner(value: string): boolean {
  const v = normalize(value);
  if (!v) return false;
  if ((OWNER_EMAILS as readonly string[]).includes(v)) return true;
  const local = gmailLocal(v);
  if (local && OWNER_LOCALS.has(local)) return true;
  for (const email of OWNER_EMAILS) {
    if (v.includes(email)) return true;
  }
  for (const loc of OWNER_LOCALS) {
    if (v === loc || v.includes(`${loc}@`)) return true;
  }
  return false;
}

/** True if any identifier belongs to the owner — email, alias, or broker wrap. */
export function isOwnerIdentity(...values: Array<string | null | undefined>): boolean {
  return values.some((raw) => Boolean(raw) && looksLikeOwner(String(raw)));
}

export function isOwnerEmail(email: string | null | undefined): boolean {
  return isOwnerIdentity(email);
}
