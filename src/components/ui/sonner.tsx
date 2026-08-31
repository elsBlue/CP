import { Toaster as Sonner } from "sonner";

function Toaster() {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast bg-card text-foreground shadow-[var(--shadow-border)] border-0",
          description: "text-muted-foreground",
        },
      }}
    />
  );
}

export { Toaster };
