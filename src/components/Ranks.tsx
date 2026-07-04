import { motion } from "motion/react";
import { Check, MessageSquare, ShieldAlert, Heart, Flame } from "lucide-react";
import { siteConfig } from "../config/site";

export default function Ranks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section 
      id="ranks" 
      className="relative py-24 px-4 bg-gradient-to-b from-brand-moss/40 to-brand-forest overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs text-brand-gold font-semibold uppercase tracking-widest bg-brand-gold/10 px-3.5 py-1.5 rounded-full border border-brand-gold/20">
            Donasi & Dukungan
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mt-4 mb-5">
            Daftar Rank Server Premium
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Dukung kelangsungan hidup server MyEco SMP agar terus berkembang dan nikmati berbagai keuntungan kosmetik serta kenyamanan bermain premium di dalam game.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {siteConfig.ranks.map((rank) => {
            const isVIP = rank.name === "VIP";
            return (
              <motion.div
                key={rank.name}
                variants={cardVariants}
                className={`relative rounded-2xl glass-panel p-6 flex flex-col justify-between transition-all duration-300 border ${
                  isVIP 
                    ? "border-brand-gold bg-brand-moss/80 scale-105 lg:-translate-y-2 glow-gold" 
                    : "border-brand-emerald/10 hover:border-brand-emerald/30 bg-brand-moss/40"
                } group hover:transform hover:-translate-y-1`}
              >
                {/* Popular Badge for VIP */}
                {isVIP && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-forest text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <Flame className="w-3 h-3 fill-current" /> Terpopuler
                  </span>
                )}

                <div>
                  {/* Rank Title & Price */}
                  <div className="mb-5">
                    <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-bold font-mono tracking-wider mb-3 border ${rank.badgeBg}`}>
                      {rank.name} RANK
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-display font-bold text-white tracking-tight">
                        {rank.price}
                      </span>
                      <span className="text-xs text-gray-400">/ {rank.duration}</span>
                    </div>
                  </div>

                  {/* Rank Description */}
                  <p className="text-xs text-gray-400 leading-relaxed mb-6 border-b border-brand-emerald/10 pb-5">
                    {rank.description}
                  </p>

                  {/* Benefit list */}
                  <ul className="space-y-3.5 mb-8">
                    {rank.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300 leading-snug">
                        <span className={`p-0.5 rounded-full mt-0.5 shrink-0 ${
                          isVIP ? "bg-brand-gold/15 text-brand-gold" : "bg-brand-emerald/15 text-brand-emerald"
                        }`}>
                          <Check className="w-3 h-3" />
                        </span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Purchase Link via WA */}
                <a
                  href={`https://wa.me/628388567246?text=Halo%20Admin%20Aksa%20MyEco%20SMP,%20saya%20tertarik%20untuk%20membeli%20Rank%20${rank.name}%20di%20server%20Season%202.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-xl font-bold text-center text-xs transition-all duration-300 flex items-center justify-center gap-2 ${
                    isVIP 
                      ? "bg-brand-gold text-brand-forest hover:bg-brand-gold/90 shadow-lg shadow-brand-gold/20" 
                      : "bg-brand-emerald/10 hover:bg-brand-emerald text-brand-emerald hover:text-white border border-brand-emerald/20"
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Beli Rank {rank.name}</span>
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Big Support CTA Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-brand-moss via-brand-deep to-brand-moss border border-brand-emerald/20 overflow-hidden shadow-2xl text-center flex flex-col items-center justify-center"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-emerald/5 rounded-full blur-3xl pointer-events-none -mr-12 -mt-12" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none -ml-12 -mb-12" />

          <div className="bg-brand-emerald/10 p-3 rounded-2xl text-brand-emerald mb-5 border border-brand-emerald/20">
            <Heart className="w-6 h-6 fill-current animate-pulse" />
          </div>

          <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3">
            Ingin Berkontribusi untuk Keberlangsungan Server?
          </h3>
          
          <p className="max-w-xl text-xs sm:text-sm text-gray-400 leading-relaxed mb-8">
            Setiap donasi yang Anda berikan sepenuhnya dialokasikan untuk biaya infrastruktur, sewa server performa tinggi, dan pengembangan fitur baru agar pengalaman bermain Anda tetap mulus.
          </p>

          <a
            href={siteConfig.adminWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-brand-emerald hover:bg-brand-emerald/90 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-brand-emerald/25 transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base cursor-pointer"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Hubungi Admin WA ({siteConfig.adminNumber})</span>
          </a>

          <div className="mt-5 text-brand-gold/90 font-mono text-xs font-bold uppercase tracking-wider animate-pulse flex items-center justify-center gap-1.5">
            <span>★ Support Server = Server Makin Berkembang ★</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
