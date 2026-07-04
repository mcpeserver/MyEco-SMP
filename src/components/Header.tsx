import { useState, useEffect } from "react";
import { siteConfig } from "../config/site";
import { Menu, X, ArrowUpRight, ShieldCheck, Heart } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Mini Announcement Bar - Developed by RAN DEV */}
      <div 
        id="announcement-bar"
        className="bg-gradient-to-r from-brand-moss via-brand-forest to-brand-moss text-xs border-b border-brand-emerald/20 text-center py-2 px-4 flex flex-col sm:flex-row items-center justify-center gap-2 text-brand-emerald font-mono tracking-wide"
      >
        <div className="flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-brand-emerald animate-pulse"></span>
          <span className="font-semibold">{siteConfig.watermark}</span>
        </div>
        <span className="hidden sm:inline text-brand-emerald/40">|</span>
        <a 
          href={siteConfig.developerWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-brand-gold transition-colors font-sans text-xs bg-brand-emerald/10 px-2.5 py-0.5 rounded-full border border-brand-emerald/30 group"
        >
          <span>Kontak Developer: {siteConfig.developerNumber}</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      {/* Main Navbar */}
      <nav 
        id="main-navbar"
        className={`w-full transition-all duration-300 border-b ${
          isScrolled 
            ? "py-3 bg-brand-forest/90 backdrop-blur-md shadow-lg border-brand-emerald/20" 
            : "py-5 bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <div 
            onClick={() => handleScrollToSection("hero")} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img 
              src="/logo.png" 
              alt={siteConfig.name} 
              className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-white tracking-wide group-hover:text-brand-emerald transition-colors">
                {siteConfig.name}
              </span>
              <span className="text-[10px] text-brand-gold font-mono tracking-widest uppercase">
                Survival Economy
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button 
              onClick={() => handleScrollToSection("features")} 
              className="text-gray-300 hover:text-brand-emerald hover:text-glow-emerald transition-all cursor-pointer"
            >
              Fitur Server
            </button>
            <button 
              onClick={() => handleScrollToSection("ranks")} 
              className="text-gray-300 hover:text-brand-emerald hover:text-glow-emerald transition-all cursor-pointer"
            >
              Donasi & Rank
            </button>
            <button 
              onClick={() => handleScrollToSection("server-info")} 
              className="text-gray-300 hover:text-brand-emerald hover:text-glow-emerald transition-all cursor-pointer"
            >
              Informasi Server
            </button>
            
            <a 
              href={siteConfig.discord} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-emerald/10 hover:bg-brand-emerald text-brand-emerald hover:text-white px-4 py-2 rounded-lg border border-brand-emerald/30 font-semibold transition-all duration-300 glow-emerald"
            >
              Gabung Discord
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-brand-emerald p-2 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-brand-forest/95 backdrop-blur-lg border-b border-brand-emerald/20 shadow-xl animate-fade-in">
            <div className="px-4 py-6 space-y-4 flex flex-col text-center">
              <button 
                onClick={() => handleScrollToSection("features")} 
                className="text-gray-200 hover:text-brand-emerald py-2 text-base font-semibold border-b border-brand-moss/30"
              >
                Fitur Server
              </button>
              <button 
                onClick={() => handleScrollToSection("ranks")} 
                className="text-gray-200 hover:text-brand-emerald py-2 text-base font-semibold border-b border-brand-moss/30"
              >
                Donasi & Rank
              </button>
              <button 
                onClick={() => handleScrollToSection("server-info")} 
                className="text-gray-200 hover:text-brand-emerald py-2 text-base font-semibold border-b border-brand-moss/30"
              >
                Informasi Server
              </button>
              
              <a 
                href={siteConfig.discord} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-brand-emerald text-white px-4 py-3 rounded-lg font-bold shadow-lg shadow-brand-emerald/20 inline-block"
              >
                Gabung Discord
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
