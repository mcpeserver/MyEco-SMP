import { useState, useEffect } from "react";
import { siteConfig } from "../config/site";
import { useDevAPI } from "../hooks/useDevAPI";
import { Menu, X, ArrowUpRight, ShieldCheck, Heart, ExternalLink, Users } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { devData } = useDevAPI();

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
      {/* Mini Announcement Bar - Developed by RAN DEV & Developer Community Info */}
      <div 
        id="announcement-bar"
        className="bg-gradient-to-r from-brand-moss via-[#051108] to-brand-moss text-[11px] sm:text-xs border-b border-brand-emerald/20 py-2 px-4 flex flex-col lg:flex-row items-center justify-between gap-3 text-brand-emerald font-mono tracking-wide"
      >
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse"></span>
            <span className="text-gray-400">Crafted by:</span>
            <a 
              href={`https://wa.me/62${devData.whatsapp.replace(/^0/, "")}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-emerald font-bold hover:text-brand-gold hover:underline transition-all"
            >
              {devData.name}
            </a>
          </div>
          <span className="hidden sm:inline text-brand-emerald/30">|</span>
          <a 
            href={`https://wa.me/62${devData.whatsapp.replace(/^0/, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-gold transition-colors font-sans"
          >
            WA: <span className="underline">{devData.phone}</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 font-sans text-[11px]">
          {/* Portfolio link - "lihat website website server lain" */}
          <a 
            href={devData.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-brand-emerald/10 hover:bg-brand-emerald/20 text-brand-emerald hover:text-brand-gold px-2.5 py-1 rounded-full border border-brand-emerald/20 transition-all group"
          >
            <ExternalLink className="w-3 h-3" />
            <span>Website Server Lain</span>
            <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Developer Community info & link */}
          <a 
            href={devData.communityWebsite || devData.communityDiscord}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-brand-gold/10 hover:bg-brand-gold/20 text-brand-gold px-2.5 py-1 rounded-full border border-brand-gold/20 transition-all group"
          >
            <Users className="w-3 h-3" />
            <span>{devData.communityName}</span>
            <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
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
