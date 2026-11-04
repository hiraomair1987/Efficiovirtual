"use client";

import { useEffect } from "react";

/**
 * Scroll-driven 3D for the blog.
 * - [data-3d]        tilts back in 3D and straightens as it scrolls into view
 *                    (sets --p from 0 to 1; CSS does the transform).
 * - [data-3d="hero"] the article cover leans back as you scroll past it.
 * - [data-progress]  a bar whose width follows reading progress.
 * - [data-tilt-hover] follows the mouse with a gentle 3D tilt.
 * Content is fully visible without JavaScript (--p defaults to 1).
 */
export default function Scroll3D() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-3d]"));
    const bar = document.querySelector<HTMLElement>("[data-progress]");
    const article = document.querySelector<HTMLElement>("[data-article]");
    let raf = 0;

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      for (const el of items) {
        const r = el.getBoundingClientRect();
        if (el.dataset["3d"] === "hero") {
          const p = Math.min(1, Math.max(0, -r.top / (r.height * 1.1)));
          el.style.setProperty("--h", p.toFixed(3));
          continue;
        }
        if (r.top > vh + 100 || r.bottom < -100) continue;
        // 0 when the top edge is at the bottom of the screen, 1 when it reaches 60% up
        const p = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.4)));
        el.style.setProperty("--p", p.toFixed(3));
      }
      if (bar && article) {
        const r = article.getBoundingClientRect();
        const total = r.height - vh;
        const p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 1;
        bar.style.transform = `scaleX(${p.toFixed(4)})`;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    items.forEach((el) => el.dataset["3d"] !== "hero" && el.style.setProperty("--p", "0"));
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // Mouse tilt
    const tilts = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt-hover]"));
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cleanups: (() => void)[] = [];
    if (fine) {
      for (const el of tilts) {
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          el.style.setProperty("--rx", `${(-y * 10).toFixed(2)}deg`);
          el.style.setProperty("--ry", `${(x * 12).toFixed(2)}deg`);
          el.style.setProperty("--mx", `${((x + 0.5) * 100).toFixed(1)}%`);
          el.style.setProperty("--my", `${((y + 0.5) * 100).toFixed(1)}%`);
        };
        const leave = () => {
          el.style.setProperty("--rx", "0deg");
          el.style.setProperty("--ry", "0deg");
        };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
        });
      }
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      cleanups.forEach((c) => c());
    };
  }, []);
  return null;
}
