import { createFileRoute } from "@tanstack/react-router";
import { AdminView } from "@/components/e7/admin-view";
import { AppShell } from "@/components/e7/app-shell";
import { RequireAuth } from "@/components/e7/require-auth";

export const Route = createFileRoute("/admin")({ component: AdminPage });

function AdminPage() {
  return (
    <RequireAuth admin>
      <AppShell>
        <AdminView />
      </AppShell>
    </RequireAuth>
  );
}
