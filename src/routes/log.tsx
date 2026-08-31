import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/e7/app-shell";
import { RequireAuth } from "@/components/e7/require-auth";
import { LogView } from "@/components/e7/log-view";

export const Route = createFileRoute("/log")({ component: LogPage });

function LogPage() {
  return (
    <RequireAuth>
      <AppShell>
        <LogView />
      </AppShell>
    </RequireAuth>
  );
}
