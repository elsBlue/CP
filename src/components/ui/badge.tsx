import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-wide uppercase",
  {
    variants: {
      variant: {
        default: "bg-secondary text-muted-foreground",
        steel: "bg-primary/12 text-primary",
        win: "bg-win/15 text-win",
        loss: "bg-loss/15 text-loss",
        fire: "bg-fire/15 text-fire",
        ice: "bg-ice/15 text-ice",
        earth: "bg-earth/15 text-earth",
        light: "bg-light/15 text-light",
        dark: "bg-dark/20 text-dark",
        outline: "shadow-[var(--shadow-border)] text-muted-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
