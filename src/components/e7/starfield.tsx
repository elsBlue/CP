import { useEffect, useRef } from "react";

type Star = { x: number; y: number; r: number; a: number; tw: number; sp: number };
type Meteor = { x: number; y: number; vx: number; vy: number; life: number; max: number };

export function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const surface = canvas;
    const g = ctx;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let stars: Star[] = [];
    let meteor: Meteor | null = null;
    let nextMeteor = 5000 + Math.random() * 7000;
    let raf = 0;
    let last = performance.now();
    let hidden = document.hidden;

    function seed() {
      const n = Math.min(160, Math.max(48, Math.floor((w * h) / 12000)));
      stars = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.25 + 0.28,
        a: Math.random() * 0.38 + 0.14,
        tw: Math.random() * Math.PI * 2,
        sp: 0.35 + Math.random() * 1.1,
      }));
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      surface.width = Math.floor(w * dpr);
      surface.height = Math.floor(h * dpr);
      surface.style.width = `${w}px`;
      surface.style.height = `${h}px`;
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function draw(now: number) {
      const dt = Math.min(48, now - last);
      last = now;
      g.clearRect(0, 0, w, h);
      for (const s of stars) {
        if (!reduced) s.tw += (s.sp * dt) / 1000;
        const a = reduced ? s.a * 0.85 : s.a * (0.62 + 0.38 * Math.sin(s.tw));
        g.fillStyle = `rgba(236, 238, 242, ${a})`;
        g.beginPath();
        g.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        g.fill();
      }

      if (!reduced && !hidden) {
        nextMeteor -= dt;
        if (!meteor && nextMeteor <= 0) {
          meteor = {
            x: Math.random() * w * 0.72,
            y: Math.random() * h * 0.38,
            vx: 0.42 + Math.random() * 0.28,
            vy: 0.22 + Math.random() * 0.16,
            life: 0,
            max: 640 + Math.random() * 420,
          };
          nextMeteor = 10000 + Math.random() * 14000;
        }
        if (meteor) {
          meteor.life += dt;
          meteor.x += meteor.vx * dt;
          meteor.y += meteor.vy * dt;
          const p = meteor.life / meteor.max;
          const alpha = p < 0.12 ? p / 0.12 : Math.max(0, 1 - (p - 0.12) / 0.88);
          const len = 78;
          const gx = meteor.x - meteor.vx * len;
          const gy = meteor.y - meteor.vy * len;
          const grad = g.createLinearGradient(gx, gy, meteor.x, meteor.y);
          grad.addColorStop(0, "rgba(230,232,236,0)");
          grad.addColorStop(1, `rgba(252,253,255,${0.78 * alpha})`);
          g.strokeStyle = grad;
          g.lineWidth = 1.35;
          g.beginPath();
          g.moveTo(gx, gy);
          g.lineTo(meteor.x, meteor.y);
          g.stroke();
          g.fillStyle = `rgba(255,255,255,${0.88 * alpha})`;
          g.beginPath();
          g.arc(meteor.x, meteor.y, 1.45, 0, Math.PI * 2);
          g.fill();
          if (meteor.life > meteor.max || meteor.x > w + 50 || meteor.y > h + 50) {
            meteor = null;
          }
        }
      }

      raf = requestAnimationFrame(draw);
    }

    function onVis() {
      hidden = document.hidden;
      if (!hidden) last = performance.now();
    }

    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVis);
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden
    />
  );
}
