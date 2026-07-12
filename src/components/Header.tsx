import { useState, useEffect } from "react";
import { siteConfig } from "../config/site";
import { useDevAPI } from "../hooks/useDevAPI";
import { Menu, X, ArrowUpRight, MessageSquare, ExternalLink, Users, ShieldAlert, Award, Server, Home } from "lucide-react";

interface HeaderProps {
  activeTab: "home" | "features" | "ranks" | "server-info";
  setActiveTab: (tab: "home" | "features" | "ranks" | "server-info") => void;
  isScrolled?: boolean;
}

export default function Header({ activeTab, setActiveTab, isScrolled: propIsScrolled }: HeaderProps) {
  const [internalIsScrolled, setInternalIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { devData } = useDevAPI();

  const isScrolled = propIsScrolled !== undefined ? propIsScrolled : internalIsScrolled;

  useEffect(() => {
    if (propIsScrolled !== undefined) return;
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setInternalIsScrolled(true);
      } else {
        setInternalIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [propIsScrolled]);

  const handleTabChange = (tab: "home" | "features" | "ranks" | "server-info") => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "scrolled" : ""}`}>
      {/* Desktop Topbar Announcement - Developed by RAN DEV & Developer Community Info (Hidden on Mobile for Drawer placement) */}
      <div 
        id="announcement-bar"
        className="hidden md:flex bg-gradient-to-r from-brand-moss via-[#051108] to-brand-moss text-[11px] sm:text-xs border-b border-brand-emerald/20 py-2 px-4 flex-col lg:flex-row items-center justify-between gap-3 text-brand-emerald font-mono tracking-wide"
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
            className="hover:text-brand-gold transition-colors font-sans text-xs"
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
            className="flex items-center gap-1 bg-brand-emerald/10 hover:bg-brand-emerald/20 text-brand-emerald hover:text-brand-gold px-2.5 py-1 rounded-full border border-brand-emerald/20 transition-all group text-xs"
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
            className="flex items-center gap-1 bg-brand-gold/10 hover:bg-brand-gold/20 text-brand-gold px-2.5 py-1 rounded-full border border-brand-gold/20 transition-all group text-xs"
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
            ? "py-3 bg-brand-forest/95 backdrop-blur-md shadow-lg border-brand-emerald/25" 
            : "py-4 bg-[#040805]/80 backdrop-blur-sm border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <div 
            onClick={() => handleTabChange("home")} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img 
              src={devData.logo || "/logo.jpg"} 
              alt={siteConfig.name} 
              className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg text-white tracking-wide group-hover:text-brand-emerald transition-colors">
                {siteConfig.name}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <button 
              onClick={() => handleTabChange("home")} 
              className={`flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === "home"
                  ? "text-brand-emerald text-glow-emerald font-bold border-b-2 border-brand-emerald pb-0.5"
                  : "text-gray-300 hover:text-brand-emerald hover:text-glow-emerald"
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Beranda</span>
            </button>

            <button 
              onClick={() => handleTabChange("features")} 
              className={`flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === "features"
                  ? "text-brand-emerald text-glow-emerald font-bold border-b-2 border-brand-emerald pb-0.5"
                  : "text-gray-300 hover:text-brand-emerald hover:text-glow-emerald"
              }`}
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Fitur Server</span>
            </button>

            <button 
              onClick={() => handleTabChange("ranks")} 
              className={`flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === "ranks"
                  ? "text-brand-gold text-glow-gold font-bold border-b-2 border-brand-gold pb-0.5"
                  : "text-gray-300 hover:text-brand-emerald hover:text-glow-emerald"
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Donasi & Rank</span>
            </button>

            <button 
              onClick={() => handleTabChange("server-info")} 
              className={`flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === "server-info"
                  ? "text-brand-emerald text-glow-emerald font-bold border-b-2 border-brand-emerald pb-0.5"
                  : "text-gray-300 hover:text-brand-emerald hover:text-glow-emerald"
              }`}
            >
              <Server className="w-4 h-4" />
              <span>Informasi Server</span>
            </button>
            
            <a 
              href={siteConfig.discord} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-emerald/15 hover:bg-brand-emerald text-brand-emerald hover:text-white px-3.5 py-1.5 rounded-lg border border-brand-emerald/30 font-semibold transition-all duration-300 glow-emerald text-xs"
            >
              Gabung Discord
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-brand-emerald p-2 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-brand-forest/98 backdrop-blur-xl border-b border-brand-emerald/20 shadow-2xl animate-fade-in max-h-[85vh] overflow-y-auto">
            <div className="px-5 py-6 space-y-4 flex flex-col text-center">
              
              {/* Server Links */}
              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => handleTabChange("home")} 
                  className={`py-2 text-base font-bold rounded-lg transition-all ${
                    activeTab === "home"
                      ? "bg-brand-emerald/20 text-brand-emerald border-l-4 border-brand-emerald"
                      : "text-gray-200 hover:text-brand-emerald hover:bg-white/5"
                  }`}
                >
                  Beranda
                </button>
                <button 
                  onClick={() => handleTabChange("features")} 
                  className={`py-2 text-base font-bold rounded-lg transition-all ${
                    activeTab === "features"
                      ? "bg-brand-emerald/20 text-brand-emerald border-l-4 border-brand-emerald"
                      : "text-gray-200 hover:text-brand-emerald hover:bg-white/5"
                  }`}
                >
                  Fitur Server
                </button>
                <button 
                  onClick={() => handleTabChange("ranks")} 
                  className={`py-2 text-base font-bold rounded-lg transition-all ${
                    activeTab === "ranks"
                      ? "bg-brand-gold/20 text-brand-gold border-l-4 border-brand-gold"
                      : "text-gray-200 hover:text-brand-gold hover:bg-white/5"
                  }`}
                >
                  Donasi & Rank
                </button>
                <button 
                  onClick={() => handleTabChange("server-info")} 
                  className={`py-2 text-base font-bold rounded-lg transition-all ${
                    activeTab === "server-info"
                      ? "bg-brand-emerald/20 text-brand-emerald border-l-4 border-brand-emerald"
                      : "text-gray-200 hover:text-brand-emerald hover:bg-white/5"
                  }`}
                >
                  Informasi Server
                </button>
              </div>

              {/* Discord Link */}
              <a 
                href={siteConfig.discord} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-brand-emerald hover:bg-brand-emerald/90 text-white py-2.5 rounded-lg font-bold shadow-lg shadow-brand-emerald/10 block text-sm"
              >
                Gabung Discord
              </a>

              {/* Responsive Developer & Community Section (Drawer Placement) */}
              <div className="border-t border-white/10 pt-4 mt-2 space-y-3 text-left">
                <span className="text-[10px] text-brand-gold/60 uppercase font-mono tracking-widest block text-center mb-1">
                  Developer & Komunitas
                </span>

                {/* Developer Info Card */}
                <div className="p-3.5 rounded-xl bg-black/40 border border-brand-emerald/15 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-gray-400 font-mono">Dibuat oleh:</span>
                    <span className="text-xs text-brand-emerald font-bold">{devData.name}</span>
                  </div>
                  
                  {/* Direct WhatsApp Call */}
                  <a 
                    href={`https://wa.me/62${devData.whatsapp.replace(/^0/, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-all shadow"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Developer</span>
                  </a>

                  {/* Portfolio Website */}
                  <a 
                    href={devData.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 w-full py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-lg text-xs font-semibold border border-white/10 transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-brand-emerald" />
                    <span>Website Server Lain</span>
                  </a>
                </div>

                {/* Community Info Card */}
                <div className="p-3.5 rounded-xl bg-black/40 border border-brand-gold/15 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-gray-400 font-mono">Komunitas:</span>
                    <span className="text-xs text-brand-gold font-bold">{devData.communityName}</span>
                  </div>
                  
                  <a 
                    href={devData.communityWebsite || devData.communityDiscord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 w-full py-2 bg-brand-gold/15 hover:bg-brand-gold/25 text-brand-gold rounded-lg text-xs font-bold border border-brand-gold/20 transition-all"
                  >
                    <Users className="w-3.5 h-3.5" />
                    <span>Gabung Komunitas</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
