import { useEffect, useState, type ReactNode } from "react";
import { Navigate } from "@tanstack/react-router";
import { RedirectToSignIn } from "@/lib/auth/gates";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { isOwnerIdentity } from "@/lib/e7/owner";
import { useArenaStore } from "@/lib/e7/store";
import { BootScreen } from "./boot-screen";

const INTRO_MS = 11600;

export function RequireAuth({
  children,
  admin = false,
}: {
  children: ReactNode;
  admin?: boolean;
}) {
  const { user, isPending } = useCurrentUserState();
  const hydrated = useArenaStore((s) => s.hydrated);
  const role = useArenaStore((s) => s.role);
  const email = useArenaStore((s) => s.email);
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || sessionStorage.getItem("crownpath-shade") === "1") {
      setIntroDone(true);
      return;
    }
    const timer = window.setTimeout(() => {
      sessionStorage.setItem("crownpath-shade", "1");
      setIntroDone(true);
    }, INTRO_MS);
    return () => window.clearTimeout(timer);
  }, []);

  if (isPending) return <BootScreen />;
  if (!user) return <RedirectToSignIn />;
  if (!hydrated || !introDone) return <BootScreen />;
  if (
    admin &&
    role !== "admin" &&
    !isOwnerIdentity(user.primaryEmail, user.displayName, email)
  ) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
}
