
import { Link, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';


export default function Navbar() {
  const path = useLocation().pathname;
  const itemCount = useSelector(state => state.cart.itemCount);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);


  useEffect(() => {
    if (sidebarOpen) {
      setSidebarVisible(true);
    }
  }, [sidebarOpen]);


  useEffect(() => {
    if (sidebarVisible && sidebarOpen && sidebarRef.current && overlayRef.current) {
      gsap.fromTo(
        sidebarRef.current,
        { x: '100%' },
        { x: 0, duration: 0.35, ease: 'power3.out' }
      );
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0, filter: 'blur(0px)' },
        { opacity: 1, filter: 'blur(4px)', duration: 0.35, ease: 'power3.out' }
      );
    }
    if (sidebarVisible && !sidebarOpen && sidebarRef.current && overlayRef.current) {
      gsap.to(sidebarRef.current, { x: '100%', duration: 0.3, ease: 'power3.in' });
      gsap.to(overlayRef.current, { opacity: 0, filter: 'blur(0px)', duration: 0.3, ease: 'power3.in',
        onComplete: () => setSidebarVisible(false)
      });
    }
  }, [sidebarOpen, sidebarVisible]);

  const navLinks = (
    <>
      <Link className={path === "/" ? "font-medium" : ""} to="/" onClick={() => setSidebarOpen(false)}>Products</Link>
      <Link className="relative" to="/cart" onClick={() => setSidebarOpen(false)}>
        <span className={path === "/cart" ? "font-medium" : ""}>Cart</span>
        {itemCount > 0 && (
          <span className="absolute -top-3 -right-3 bg-black text-white w-4 h-4 flex items-center justify-center text-xs">
            {itemCount}
          </span>
        )}
      </Link>
      <Link className={path === "/checkout" ? "font-medium" : ""} to="/checkout" onClick={() => setSidebarOpen(false)}>Checkout</Link>
    </>
  );

  return (
    <nav className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center px-4 sm:px-8 py-4 font-extralight bg-white border-b border-gray-200 relative">
      <div className="flex items-center justify-between w-full sm:w-auto">
        <a href="/" className="text-2xl mb-2 sm:mb-0 border-b text-black cursor-pointer">Vibe Commerce</a>
        <button
          className="sm:hidden p-2 ml-2 text-black focus:outline-none"
          aria-label="Open menu"
          onClick={() => setSidebarOpen(true)}
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth=".5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div className="hidden sm:flex flex-row gap-6 items-center text-black">
        {navLinks}
      </div>
      {sidebarVisible && (
        <>
          <div
            ref={overlayRef}
            className="fixed inset-0 z-40 bg-opacity-30 transition-all duration-300 backdrop-blur-xs"
            onClick={() => setSidebarOpen(false)}
          ></div>
          <aside
            ref={sidebarRef}
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 flex flex-col p-6 gap-6"
            style={{ transform: 'translateX(100%)' }}
          >
            <button className="self-end mb-4" aria-label="Close menu" onClick={() => setSidebarOpen(false)}>
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth=".5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="flex flex-col gap-6 text-lg">
              {navLinks}
            </nav>
          </aside>
        </>
      )}
    </nav>
  );
}
