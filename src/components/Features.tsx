import { motion } from "motion/react";
import { Coins, Gem, Store, ArrowUpRight, ShieldCheck, Users, Home, Trees, FlameKindling } from "lucide-react";
import { siteConfig } from "../config/site";

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section 
      id="features" 
      className="relative py-24 px-4 bg-gradient-to-b from-brand-forest to-brand-moss/40 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.05)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(251,191,36,0.03)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-mono text-xs text-brand-emerald font-semibold uppercase tracking-widest bg-brand-emerald/10 px-3.5 py-1.5 rounded-full border border-brand-emerald/20">
            Pilar Utama Server
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mt-4 mb-5">
            Dua Sisi Identitas MyEco SMP
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Didesain khusus untuk menghadirkan pengalaman Minecraft terbaik yang menggabungkan kemakmuran finansial virtual dengan rasa kekeluargaan yang nyata.
          </p>
        </div>

        {/* Features Zig-Zag Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-24"
        >
          {/* Feature 1: Left Description, Right Graphic (Survival Economy) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text description */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-7 space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="bg-brand-emerald/10 p-2.5 rounded-xl text-brand-emerald border border-brand-emerald/20">
                  <Coins className="w-6 h-6" />
                </div>
                <span className="text-sm font-semibold text-brand-emerald uppercase tracking-wider font-mono">
                  Sistem Survival Economy
                </span>
              </div>
              
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                Ekonomi Makmur dengan Koin Emas & Emerald
              </h3>
              
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Di MyEco SMP Season 2, kami memiliki sistem ekonomi yang seimbang dan adil. Pemain dapat bertransaksi menggunakan koin emas dan emerald untuk membeli properti, melakukan jual-beli komoditas, dan mengembangkan kerajaan bisnis virtual mereka sendiri.
              </p>

              {/* Sub-features list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-2.5 bg-brand-moss/50 border border-brand-emerald/10 p-3.5 rounded-xl">
                  <Gem className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Emerald Standard</h4>
                    <p className="text-xs text-gray-400 mt-1">Menggunakan Emerald murni Minecraft sebagai mata uang fisik barter yang bernilai tinggi.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-brand-moss/50 border border-brand-emerald/10 p-3.5 rounded-xl">
                  <Store className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Marketplace Pemain</h4>
                    <p className="text-xs text-gray-400 mt-1">Buka toko pribadi di pusat kota untuk memasarkan hasil tambang dan kerajinanmu.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Visual/Card on Right */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-full max-w-sm glass-panel p-8 rounded-2xl glow-emerald overflow-hidden border border-brand-emerald/20 group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-emerald/10 rounded-full blur-3xl pointer-events-none -mr-8 -mt-8" />
                
                <h4 className="font-display font-bold text-lg text-white mb-6 flex items-center justify-between">
                  <span>Simulasi Dompet</span>
                  <Coins className="w-5 h-5 text-brand-gold animate-pulse" />
                </h4>

                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-brand-forest/70 p-4 rounded-xl border border-brand-emerald/10">
                    <div className="flex items-center gap-3">
                      <div className="bg-brand-emerald/20 p-2 rounded-lg text-brand-emerald">
                        <Gem className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-mono">Emerald Saldo</p>
                        <p className="text-sm font-bold text-white mt-0.5">1,240 Emeralds</p>
                      </div>
                    </div>
                    <span className="text-[10px] bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 px-2 py-0.5 rounded-full font-mono font-medium">Aktif</span>
                  </div>

                  <div className="flex items-center justify-between bg-brand-forest/70 p-4 rounded-xl border border-brand-emerald/10">
                    <div className="flex items-center gap-3">
                      <div className="bg-brand-gold/20 p-2 rounded-lg text-brand-gold">
                        <Coins className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-mono">Koin Emas</p>
                        <p className="text-sm font-bold text-white mt-0.5">58,000 Coins</p>
                      </div>
                    </div>
                    <span className="text-[10px] bg-brand-gold/10 text-brand-gold border border-brand-gold/20 px-2 py-0.5 rounded-full font-mono font-medium">Stabil</span>
                  </div>
                </div>

                <div className="mt-6 border-t border-brand-emerald/10 pt-4 flex items-center justify-between text-xs text-gray-400 font-mono">
                  <span>Keamanan Server</span>
                  <span className="text-brand-emerald flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Terproteksi
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 2: Right Description, Left Graphic (Village Life & Community) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual/Card on Left (swapped) */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-5 order-2 lg:order-1 flex justify-center"
            >
              <div className="relative w-full max-w-sm glass-panel p-8 rounded-2xl glow-cyan overflow-hidden border border-brand-cyan/20 group">
                <div className="absolute top-0 left-0 w-32 h-32 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none -ml-8 -mt-8" />
                
                <h4 className="font-display font-bold text-lg text-white mb-6 flex items-center justify-between">
                  <span>Keamanan Wilayah</span>
                  <Home className="w-5 h-5 text-brand-cyan animate-pulse" />
                </h4>

                <div className="space-y-4">
                  <div className="bg-brand-forest/70 p-4 rounded-xl border border-brand-cyan/10 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-400 font-mono">Wilayah Klaim</span>
                      <span className="text-brand-cyan font-bold font-mono">100% Aman</span>
                    </div>
                    <div className="w-full bg-brand-forest h-1.5 rounded-full overflow-hidden">
                      <div className="bg-brand-cyan h-full rounded-full" style={{ width: "100%" }}></div>
                    </div>
                    <p className="text-[11px] text-gray-400 leading-normal">System Land Claims menjamin rumah, chest, dan hasil panenmu tidak bisa dirusak atau dicuri oleh pemain lain.</p>
                  </div>

                  <div className="flex items-center gap-3 bg-brand-forest/70 p-3.5 rounded-xl border border-brand-cyan/10 text-xs">
                    <Users className="w-4 h-4 text-brand-cyan shrink-0" />
                    <span className="text-gray-300">Sistem kerja sama desa & proyek komunitas.</span>
                  </div>
                </div>

                <div className="mt-6 border-t border-brand-cyan/10 pt-4 flex items-center justify-between text-xs text-gray-400 font-mono">
                  <span>Status Kota</span>
                  <span className="text-brand-cyan flex items-center gap-1 font-semibold">
                    <Trees className="w-3.5 h-3.5" /> Asri & Damai
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Text description (swapped) */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-7 order-1 lg:order-2 space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="bg-brand-cyan/10 p-2.5 rounded-xl text-brand-cyan border border-brand-cyan/20">
                  <Home className="w-6 h-6" />
                </div>
                <span className="text-sm font-semibold text-brand-cyan uppercase tracking-wider font-mono">
                  Village Life & Community
                </span>
              </div>
              
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                Kehidupan Desa Hangat & Klaim Lahan Aman
              </h3>
              
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Nikmati kenyamanan bermain dengan komunitas Minecraft Indonesia yang dewasa dan bersahabat. Fitur utama kami mendukung pembangunan pemukiman desa bersama, di mana Anda bisa menyewa, mengklaim, dan mendekorasi lahan Anda menggunakan sistem proteksi teraman.
              </p>

              {/* Sub-features list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-2.5 bg-brand-moss/50 border border-brand-emerald/10 p-3.5 rounded-xl">
                  <FlameKindling className="w-5 h-5 text-brand-lantern shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Lantern Ambient</h4>
                    <p className="text-xs text-gray-400 mt-1">Lentera gantung dan aksen dekorasi kayu oak yang memberikan nuansa pedesaan hangat saat malam hari.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-brand-moss/50 border border-brand-emerald/10 p-3.5 rounded-xl">
                  <Users className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Komunitas Solid</h4>
                    <p className="text-xs text-gray-400 mt-1">Diskusikan proyek desa impian Anda dengan pemain lain secara langsung di Discord resmi kami.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
