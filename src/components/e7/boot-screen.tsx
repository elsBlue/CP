import { useEffect, useState } from "react";
import { Brand } from "./brand";

export function BootScreen({ label = "Loading data…" }: { label?: string }) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <div className="relative grid min-h-dvh place-items-center overflow-hidden bg-background px-6 text-foreground">
      <div className="pointer-events-none absolute inset-0 md:grid md:place-items-center">
        <div
          className="boot-shade absolute inset-0 overflow-hidden md:relative md:inset-auto md:rounded-full"
          aria-hidden
        >
          {reduced ? (
            <img src="/intro/shade.jpg?v=2" alt="" className="boot-shade-media" />
          ) : (
            <video
              className="boot-shade-media"
              src="/intro/shade.mp4?v=2"
              poster="/intro/shade.jpg?v=2"
              autoPlay
              muted
              playsInline
              preload="auto"
            />
          )}
          <div className="boot-shade-veil absolute inset-0" />
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-center gap-3">
        <Brand size="md" align="center" />
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
