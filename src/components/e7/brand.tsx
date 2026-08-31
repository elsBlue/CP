import { cn } from "@/lib/utils";

export function Brand({
  size = "md",
  align = "left",
}: {
  size?: "sm" | "md" | "lg";
  align?: "left" | "center";
}) {
  return (
    <span
      className={cn(
        "inline-flex flex-col leading-none",
        align === "center" && "items-center text-center",
      )}
    >
      <span
        className={cn(
          "font-display tracking-tight",
          size === "lg" && "text-3xl",
          size === "md" && "text-2xl",
          size === "sm" && "text-lg",
        )}
      >
        Crownpath
      </span>
      <span className={cn("mt-1 text-xs text-muted-foreground", size === "sm" && "mt-0.5")}>
        by skybreaker
      </span>
    </span>
  );
}
