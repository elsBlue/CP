/** Accounts that can open Admin (Google + email/password). */
export const OWNER_EMAIL = "iqbalhasandc200@gmail.com";

const OWNER_EMAILS = [
  "iqbalhasandc200@gmail.com",
  "iqbalhasansc200@gmail.com",
] as const;

const OWNER_LOCALS = new Set(OWNER_EMAILS.map((e) => e.split("@")[0]!));

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

/** True if any identifier belongs to the owner — email, alias, or broker wrap. */
export function isOwnerIdentity(...values: Array<string | null | undefined>): boolean {
  for (const raw of values) {
    if (!raw) continue;
    const v = normalize(String(raw));
    if (!v) continue;
    if ((OWNER_EMAILS as readonly string[]).includes(v)) return true;
    const local = gmailLocal(v);
    if (local && OWNER_LOCALS.has(local)) return true;
    if (OWNER_EMAILS.some((e) => v.includes(e))) return true;
  }
  return false;
}

export function isOwnerEmail(email: string | null | undefined): boolean {
  return isOwnerIdentity(email);
}
