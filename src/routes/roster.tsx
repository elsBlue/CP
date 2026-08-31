import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/e7/app-shell";
import { RequireAuth } from "@/components/e7/require-auth";
import { RosterView } from "@/components/e7/roster-view";

export const Route = createFileRoute("/roster")({ component: RosterPage });

function RosterPage() {
  return (
    <RequireAuth>
      <AppShell>
        <RosterView />
      </AppShell>
    </RequireAuth>
  );
}
