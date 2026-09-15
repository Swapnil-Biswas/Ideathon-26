import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import RegisterButton from "../shared/RegisterButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "HOME", path: "/" },
    { label: "GUIDELINES", path: "/guidelines" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-lab-black/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo & Event Title */}
        <Link to="/" className="flex items-center gap-3 sm:gap-3.5 group select-none">
          <img
            src="/assets/A.R.M.S.png"
            alt="ARMS Logo"
            className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_0_12px_rgba(242,121,42,0.35)]"
          />
          <span className="font-oxanium text-2xl sm:text-[28px] font-black tracking-wider text-lab-cream leading-none group-hover:text-lab-glow transition-colors">
            CONCEPTIA<span className="text-lab-orange">'26</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-1 bg-lab-charcoal/60 border border-white/[0.08] p-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-5 py-1.5 text-xs font-mono tracking-widest font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-lab-orange text-lab-black shadow-md shadow-lab-orange/20"
                      : "text-lab-cream/70 hover:text-lab-cream hover:bg-white/[0.04]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <RegisterButton size="sm" showArrow={false} />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-lab-cream p-2 rounded-lg bg-lab-charcoal/60 border border-white/[0.08]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-72 opacity-100 mt-3 border-b border-white/[0.08] bg-lab-black/95 backdrop-blur-2xl" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-5 py-6 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`text-sm tracking-widest font-mono font-medium ${
                location.pathname === link.path ? "text-lab-orange" : "text-lab-cream/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <RegisterButton size="sm" />
          </div>
        </div>
      </div>
    </header>
  );
}