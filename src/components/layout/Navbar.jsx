import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Tabs } from "@/components/ui/vercel-tabs";
import RegisterButton from "../shared/RegisterButton";

const NAV_TABS = [
  { id: "hero", label: "Home" },
  { id: "overview", label: "Overview" },
  { id: "domains", label: "Domains" },
  { id: "roadmap", label: "Roadmap" },
  { id: "highlights", label: "Highlights" },
  { id: "about", label: "About ARMS" },
  { id: "guidelines", label: "Guidelines" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const location = useLocation();
  const navigate = useNavigate();

  const currentActive = location.pathname === "/guidelines" ? "guidelines" : activeSection;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track scroll position on home page
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const sections = NAV_TABS
        .filter((item) => item.id !== "guidelines")
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleTabChange = (tabId) => {
    if (tabId === "guidelines") {
      navigate("/guidelines");
      window.scrollTo({ top: 0, behavior: "smooth" });
      setMobileOpen(false);
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(tabId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      setMobileOpen(false);
      return;
    }

    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-lab-black/85 backdrop-blur-xl border-b border-white/[0.08] py-3 shadow-2xl shadow-black/60"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Logo & Event Title */}
        <Link to="/" className="flex items-center gap-3 group select-none flex-shrink-0">
          <img
            src="/assets/A.R.M.S.png"
            alt="ARMS Logo"
            className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_0_12px_rgba(242,121,42,0.35)]"
          />
          <span className="font-oxanium text-2xl sm:text-[28px] font-black tracking-wider text-lab-cream leading-none group-hover:text-lab-glow transition-colors">
            CONCEPTIA<span className="text-lab-orange">'26</span>
          </span>
        </Link>

        {/* Center Vercel-Style Tabs Navigation (Desktop) */}
        <div className="hidden lg:flex items-center justify-center flex-1 max-w-2xl">
          <div className="p-1 rounded-xl bg-lab-charcoal/70 border border-white/[0.08] backdrop-blur-xl shadow-lg shadow-black/40">
            <Tabs
              tabs={NAV_TABS}
              activeTab={currentActive}
              onTabChange={handleTabChange}
            />
          </div>
        </div>

        {/* Right CTA Button */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <RegisterButton size="sm" showArrow={false} />
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-lab-cream p-2 rounded-lg bg-lab-charcoal/60 border border-white/[0.08]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen
            ? "max-h-96 opacity-100 mt-2 border-b border-white/[0.08] bg-lab-black/95 backdrop-blur-2xl"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-3 py-5 px-6">
          {NAV_TABS.map((tab) => {
            const isActive =
              tab.id === "guidelines"
                ? currentActive === "guidelines"
                : currentActive === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`text-sm tracking-wider font-oxanium font-semibold transition-colors py-1.5 px-4 rounded-lg w-full text-center ${
                  isActive 
                    ? "bg-lab-orange/20 text-lab-orange font-bold" 
                    : "text-lab-cream/80 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
          <div className="pt-2 w-full flex justify-center">
            <RegisterButton size="sm" />
          </div>
        </div>
      </div>
    </header>
  );
}