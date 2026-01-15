import { useEffect, useRef } from "react";

const Navbar = () => {
  const barRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const lastYRef = useRef(typeof window !== 'undefined' ? window.scrollY : 0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const isScrollingDown = currentY > lastYRef.current;
      lastYRef.current = currentY;

      if (!barRef.current) return;
      if (isScrollingDown) {
        barRef.current.style.transform = "translateY(-100%)";
      } else {
        barRef.current.style.transform = "translateY(0)";
      }

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        if (barRef.current) barRef.current.style.transform = "translateY(0)";
      }, 200);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const navTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 right-0 z-[10000] backdrop-blur bg-black/60 text-white mollen-bold"
      style={{ transition: "transform 250ms ease" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <button onClick={() => navTo("hero")} className="flex items-center gap-2">
          <img src="logo.png" alt="IELTS Institute" className="h-8 w-auto" />
        </button>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <button onClick={() => navTo("features")}>Features</button>
          <button onClick={() => navTo("testimonials")}>Testimonials</button>
          <button onClick={() => navTo("contact")}>Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


