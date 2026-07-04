import { useState } from "react";
import { motion } from "motion/react";
import { Copy, Check, Info, Server, Compass, Download, MessageSquare } from "lucide-react";
import { siteConfig } from "../config/site";

interface ServerInfoProps {
  onShowToast: (message: string) => void;
}

export default function ServerInfo({ onShowToast }: ServerInfoProps) {
  const [copiedJava, setCopiedJava] = useState(false);
  const [copiedBedrock, setCopiedBedrock] = useState(false);
  const [copiedPort, setCopiedPort] = useState(false);

  const handleCopy = async (text: string, type: "java" | "bedrock" | "port") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "java") {
        setCopiedJava(true);
        onShowToast(`IP Java (${text}) berhasil disalin!`);
        setTimeout(() => setCopiedJava(false), 2000);
      } else if (type === "bedrock") {
        setCopiedBedrock(true);
        onShowToast(`IP Bedrock (${text}) berhasil disalin!`);
        setTimeout(() => setCopiedBedrock(false), 2000);
      } else if (type === "port") {
        setCopiedPort(true);
        onShowToast(`Port Bedrock (${text}) berhasil disalin!`);
        setTimeout(() => setCopiedPort(false), 2000);
      }
    } catch (err) {
      // fallback
    }
  };

  return (
    <section 
      id="server-info" 
      className="relative py-24 px-4 bg-brand-forest overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(34,211,238,0.03)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs text-brand-emerald font-semibold uppercase tracking-widest bg-brand-emerald/10 px-3.5 py-1.5 rounded-full border border-brand-emerald/20">
            Akses Masuk Server
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mt-4 mb-5">
            Informasi & Alamat Koneksi
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Pilih platform game favorit Anda! Server kami sepenuhnya mendukung crossplay, memungkinkan pemain Java Edition dan Bedrock Edition (HP/Tablet/Console) bermain bersama dalam satu dunia.
          </p>
        </div>

        {/* Server Info Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          
          {/* Java Edition Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl glass-panel p-6 sm:p-8 border border-brand-emerald/10 glow-emerald flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="bg-brand-emerald/15 p-3 rounded-xl text-brand-emerald border border-brand-emerald/10">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">Java Edition (PC)</h3>
                  <p className="text-xs text-gray-400 font-mono">Platform Standard</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-brand-forest/65 border border-brand-emerald/10 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 font-mono uppercase tracking-wider block">Alamat Server (IP)</span>
                    <span className="text-sm font-bold font-mono text-white mt-1 block">{siteConfig.ipJava}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(siteConfig.ipJava, "java")}
                    className="p-2.5 bg-brand-emerald/10 hover:bg-brand-emerald text-brand-emerald hover:text-white rounded-lg border border-brand-emerald/20 transition-all duration-300"
                    title="Salin Alamat Java"
                  >
                    {copiedJava ? <Check className="w-4 h-4 text-brand-gold animate-scale-up" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="bg-brand-forest/65 border border-brand-emerald/10 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 font-mono uppercase tracking-wider block">Port</span>
                    <span className="text-sm font-bold font-mono text-white mt-1 block">{siteConfig.portJava} (Default)</span>
                  </div>
                  <span className="text-xs text-brand-emerald/60 font-mono">Auto connected</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-emerald/10 flex items-center gap-2 text-xs text-gray-400">
              <Info className="w-4 h-4 text-brand-emerald" />
              <span>Gunakan versi Minecraft Java <strong className="text-white">{siteConfig.version}</strong></span>
            </div>
          </motion.div>

          {/* Bedrock Edition Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl glass-panel p-6 sm:p-8 border border-brand-cyan/10 glow-cyan flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="bg-brand-cyan/15 p-3 rounded-xl text-brand-cyan border border-brand-cyan/10">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">Bedrock Edition (PE / HP)</h3>
                  <p className="text-xs text-gray-400 font-mono">Platform Mobile & Console</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-brand-forest/65 border border-brand-cyan/10 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 font-mono uppercase tracking-wider block">Alamat Server (IP)</span>
                    <span className="text-sm font-bold font-mono text-white mt-1 block">{siteConfig.ipBedrock}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(siteConfig.ipBedrock, "bedrock")}
                    className="p-2.5 bg-brand-cyan/10 hover:bg-brand-cyan text-brand-cyan hover:text-white rounded-lg border border-brand-cyan/20 transition-all duration-300"
                    title="Salin Alamat Bedrock"
                  >
                    {copiedBedrock ? <Check className="w-4 h-4 text-brand-gold animate-scale-up" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="bg-brand-forest/65 border border-brand-cyan/10 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 font-mono uppercase tracking-wider block">Port</span>
                    <span className="text-sm font-bold font-mono text-white mt-1 block">{siteConfig.portBedrock}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(String(siteConfig.portBedrock), "port")}
                    className="p-2.5 bg-brand-cyan/10 hover:bg-brand-cyan text-brand-cyan hover:text-white rounded-lg border border-brand-cyan/20 transition-all duration-300"
                    title="Salin Port Bedrock"
                  >
                    {copiedPort ? <Check className="w-4 h-4 text-brand-gold animate-scale-up" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-cyan/10 flex items-center gap-2 text-xs text-gray-400">
              <Info className="w-4 h-4 text-brand-cyan" />
              <span>Gunakan versi Minecraft Bedrock <strong className="text-white">{siteConfig.version}</strong></span>
            </div>
          </motion.div>

        </div>

        {/* Quick Links Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-lg mx-auto">
          <a
            href={siteConfig.downloadMinecraft}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[200px] bg-brand-moss/50 hover:bg-brand-moss text-gray-300 hover:text-white font-semibold py-3 px-6 rounded-xl border border-brand-emerald/15 transition-all text-sm flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4 text-brand-emerald" />
            <span>Download Game Minecraft</span>
          </a>

          <a
            href={siteConfig.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[200px] bg-brand-moss/50 hover:bg-brand-moss text-gray-300 hover:text-white font-semibold py-3 px-6 rounded-xl border border-brand-emerald/15 transition-all text-sm flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-brand-cyan" />
            <span>Diskusi di Discord Kami</span>
          </a>
        </div>

      </div>
    </section>
  );
}
