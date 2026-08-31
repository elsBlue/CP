import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/e7/app-shell";
import { RequireAuth } from "@/components/e7/require-auth";
import { ScoutView } from "@/components/e7/scout-view";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <RequireAuth>
      <AppShell>
        <ScoutView />
      </AppShell>
    </RequireAuth>
  );
}
