import type { ErrorComponentProps } from "@tanstack/react-router";
import { TriangleAlert } from "lucide-react";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-background px-6 text-center text-foreground">
      <span className="text-destructive" aria-hidden="true">
        <TriangleAlert className="size-10" strokeWidth={2} />
      </span>
      <h1 className="font-display text-xl font-medium tracking-tight">Something went wrong</h1>
      <p className="max-w-md text-sm break-words text-muted-foreground">
        {error.message || "An unexpected error occurred. Try reloading the page."}
      </p>
    </main>
  );
}

export function AppNotFoundComponent() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-background px-6 text-center text-foreground">
      <h1 className="font-display text-xl font-medium tracking-tight">No page here</h1>
      <p className="text-sm text-muted-foreground">That path does not exist in Crownpath.</p>
      <a href="/" className="text-sm text-primary underline-offset-4 hover:underline">
        Back to scout
      </a>
    </main>
  );
}
