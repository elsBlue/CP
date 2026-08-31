import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/defense")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
