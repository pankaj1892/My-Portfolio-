import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    // State — all in refs, zero React re-renders
    const mouse = { x: W / 2, y: H / 2 };
    const trail = Array.from({ length: 12 }, () => ({ x: W / 2, y: H / 2 }));
    let hovering = false;
    let clicking = false;
    let visible = false;

    // Target sizes
    const DOT_R = 5;
    const RING_R_NORMAL = 18;
    const RING_R_HOVER  = 26;

    // Animated values
    let ringR = RING_R_NORMAL;
    let ringAlpha = 0.7;
    let dotScale = 1;

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!visible) visible = true;
    };

    const onDown = () => { clicking = true; };
    const onUp   = () => { clicking = false; };

    const onOver = (e) => {
      hovering = !!e.target.closest("a, button, [data-cursor-hover]");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup",   onUp);
    window.addEventListener("mouseover", onOver);

    const onResize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    let raf;
    const lerp = (a, b, t) => a + (b - a) * t;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      if (!visible) { raf = requestAnimationFrame(draw); return; }

      // --- Trail: each point follows the one before it ---
      trail[0].x = lerp(trail[0].x, mouse.x, 0.35);
      trail[0].y = lerp(trail[0].y, mouse.y, 0.35);
      for (let i = 1; i < trail.length; i++) {
        trail[i].x = lerp(trail[i].x, trail[i - 1].x, 0.55);
        trail[i].y = lerp(trail[i].y, trail[i - 1].y, 0.55);
      }

      // Draw trail segments — fading comet tail
      for (let i = trail.length - 1; i >= 0; i--) {
        const t = 1 - i / trail.length;          // 0 (tail) → 1 (head)
        const r = lerp(0.5, 3.5, t);
        const alpha = lerp(0, 0.35, t);
        ctx.beginPath();
        ctx.arc(trail[i].x, trail[i].y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34,211,238,${alpha})`;
        ctx.fill();
      }

      // --- Animate ring radius ---
      const targetR     = hovering ? RING_R_HOVER : RING_R_NORMAL;
      const targetAlpha = hovering ? 1 : 0.65;
      ringR     = lerp(ringR,     targetR,     0.18);
      ringAlpha = lerp(ringAlpha, targetAlpha, 0.18);
      dotScale  = lerp(dotScale,  clicking ? 0.4 : 1, 0.2);

      const cx = trail[0].x;
      const cy = trail[0].y;

      // --- Outer ring ---
      ctx.beginPath();
      ctx.arc(cx, cy, ringR, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(34,211,238,${ringAlpha})`;
      ctx.lineWidth = hovering ? 1.5 : 1.2;
      ctx.stroke();

      // Hover fill glow
      if (hovering) {
        ctx.beginPath();
        ctx.arc(cx, cy, ringR, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(34,211,238,0.07)";
        ctx.fill();
      }

      // --- Inner dot: sits exactly at mouse (no lag) ---
      const dotR = DOT_R * dotScale;
      // Gradient dot
      const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, dotR);
      grad.addColorStop(0, "rgba(255,255,255,0.95)");
      grad.addColorStop(1, "rgba(34,211,238,0.85)");
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, dotR, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup",   onUp);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("resize",    onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-9999 pointer-events-none"
    />
  );
}
