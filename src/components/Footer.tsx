import { siteConfig } from "../config/site";
import { MessageSquare, ArrowUp, Compass, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#020503] border-t border-brand-emerald/15 py-12 px-4 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-brand-emerald/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left: Brand logo & Copyright */}
        <div className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="MyEco SMP Logo" 
            className="w-10 h-10 object-contain"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span className="font-display font-bold text-white text-sm tracking-wide">
              {siteConfig.name}
            </span>
            <span className="text-[11px] text-gray-500 mt-0.5">
              {siteConfig.copyright}
            </span>
          </div>
        </div>

        {/* Center: Developer Watermark / Credit */}
        <div className="flex flex-col items-center text-center">
          <p className="text-xs text-gray-400 flex items-center gap-1">
            <span>Website crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current animate-pulse" />
            <span>by</span>
            <a 
              href={siteConfig.developerWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-emerald hover:text-brand-gold font-bold transition-all font-mono"
            >
              {siteConfig.developerName}
            </a>
          </p>
          <span className="text-[10px] text-gray-600 font-mono mt-1">
            Support Admin WA: {siteConfig.adminNumber}
          </span>
        </div>

        {/* Right: Quick back to top */}
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-brand-moss border border-brand-emerald/10 text-brand-emerald hover:text-white rounded-lg transition-colors"
            title="Discord"
          >
            <MessageSquare className="w-4.5 h-4.5" />
          </a>
          
          <button
            onClick={scrollToTop}
            className="p-2.5 bg-brand-emerald/10 hover:bg-brand-emerald text-brand-emerald hover:text-white rounded-lg border border-brand-emerald/20 transition-all cursor-pointer"
            title="Kembali ke Atas"
          >
            <ArrowUp className="w-4.5 h-4.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
