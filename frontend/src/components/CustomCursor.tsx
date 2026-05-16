import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      return;
    }

    const moveCursor = (event: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      }
    };

    const handleInteractive = () => setActive(true);
    const handleNormal = () => setActive(false);

    document.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button, input, textarea, .interactive").forEach((element) => {
      element.addEventListener("mouseenter", handleInteractive);
      element.addEventListener("mouseleave", handleNormal);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("a, button, input, textarea, .interactive").forEach((element) => {
        element.removeEventListener("mouseenter", handleInteractive);
        element.removeEventListener("mouseleave", handleNormal);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`cursor-dot pointer-events-none fixed left-0 top-0 z-[100] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/80 bg-sky-300/10 shadow-[0_0_0_16px_rgba(56,189,248,0.08)] transition duration-200 ${active ? "scale-125 bg-sky-300/20 border-sky-100/80" : "bg-transparent border-slate-400/20"}`}
    />
  );
}
