import { motion } from "motion/react";
import { Copy, Compass, MessageSquare, Download, Check } from "lucide-react";
import { siteConfig } from "../config/site";
import { useState } from "react";

interface HeroProps {
  onShowToast: (message: string) => void;
}

export default function Hero({ onShowToast }: HeroProps) {
  const [copiedJava, setCopiedJava] = useState(false);

  const handleCopyIP = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.ipJava);
      setCopiedJava(true);
      onShowToast(`IP Server Java (${siteConfig.ipJava}) berhasil disalin!`);
      setTimeout(() => setCopiedJava(false), 2000);
    } catch (err) {
      // fallback
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center px-4 pt-32 pb-20 overflow-hidden"
    >
      {/* Cinematic Background Image with Parallax & Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] scale-105"
        style={{ backgroundImage: `url('/hero-bg.webp')` }}
      />
      
      {/* Dark Ambient Gradients overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-forest via-brand-forest/75 to-[#030604]/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-forest/20 via-transparent to-brand-forest/20" />

      {/* Floating Sparkles effect */}
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08)_0%,transparent_100%)]" />

      {/* Hero Content Container */}
      <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Floating Logo - 3D Minecraft server look */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <img 
            src="/logo.png" 
            alt="MyEco SMP Logo" 
            className="w-40 h-40 sm:w-48 sm:h-48 object-contain animate-float drop-shadow-[0_15px_25px_rgba(16,185,129,0.35)]"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Server Sub-title badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald text-xs font-semibold tracking-wider uppercase font-mono mb-4"
        >
          <Compass className="w-3.5 h-3.5" />
          <span>Server Minecraft Survival Economy Terbaik</span>
        </motion.div>

        {/* Main Title with Custom Display Font */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-display font-bold text-4xl sm:text-6xl text-white tracking-tight leading-none mb-6 drop-shadow-md"
        >
          {siteConfig.name}
        </motion.h1>

        {/* Server Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-10 px-4"
        >
          Masuki dunia petualangan tanpa batas dengan konsep <span className="text-brand-emerald font-semibold">Survival Economy</span> yang seimbang. Bangun desa impianmu, lakukan perdagangan makmur dengan koin emas & emerald, dan jalin persahabatan erat di komunitas terhangat Minecraft Indonesia.
        </motion.p>

        {/* CTA Buttons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full max-w-2xl px-4 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Copy IP CTA */}
          <button
            onClick={handleCopyIP}
            className="w-full sm:w-auto bg-brand-emerald hover:bg-brand-emerald/90 text-white font-bold py-4 px-8 rounded-xl border border-brand-emerald shadow-lg shadow-brand-emerald/25 flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5"
          >
            {copiedJava ? <Check className="w-5 h-5 text-brand-gold" /> : <Copy className="w-5 h-5" />}
            <span>{copiedJava ? "IP Berhasil Disalin" : "Salin IP Java"}</span>
          </button>

          {/* Discord CTA */}
          <a
            href={siteConfig.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-brand-moss/80 hover:bg-brand-moss text-brand-emerald hover:text-white font-bold py-4 px-8 rounded-xl border border-brand-emerald/30 shadow-md flex items-center justify-center gap-2.5 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Gabung Discord</span>
          </a>

          {/* Download Minecraft CTA */}
          <a
            href={siteConfig.downloadMinecraft}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-transparent hover:bg-white/5 text-gray-300 hover:text-white font-bold py-4 px-8 rounded-xl border border-white/20 flex items-center justify-center gap-2.5 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Download className="w-5 h-5" />
            <span>Download Game</span>
          </a>
        </motion.div>

        {/* Connection status indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex items-center justify-center gap-6 text-xs text-gray-400 font-mono"
        >
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-brand-emerald"></span>
            <span>IP Java: <strong className="text-white">{siteConfig.ipJava}</strong></span>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-brand-emerald"></span>
            <span>Versi: <strong className="text-white">{siteConfig.version}</strong></span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
