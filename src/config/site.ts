export interface Rank {
  name: string;
  price: string;
  duration: string;
  description: string;
  benefits: string[];
  color: string;
  accentColor: string;
  badgeBg: string;
}

export interface SiteConfig {
  name: string;
  domain: string;
  ipJava: string;
  ipBedrock: string;
  portJava: number;
  portBedrock: number;
  version: string;
  discord: string;
  downloadMinecraft: string;
  adminWhatsapp: string;
  adminNumber: string;
  developerWhatsapp: string;
  developerNumber: string;
  developerName: string;
  copyright: string;
  watermark: string;
  websiteUrl: string;
  ranks: Rank[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
    favicon: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "MyEco SMP",
  domain: "myeco.biz.id",
  ipJava: "play.myeco.biz.id",
  ipBedrock: "play.myeco.biz.id",
  portJava: 25565,
  portBedrock: 19122,
  version: "1.26.32.2",
  discord: "https://discord.gg/qnThDxmaVE",
  downloadMinecraft: "https://www.mediafire.com/file/2maql9qsu054qjj/MC_Patch_1-26-32-2_Musc_64%2632bit.apk/file",
  adminWhatsapp: "https://wa.me/628388567246?text=Halo%20Admin%20Aksa%20MyEco%20SMP,%20saya%20ingin%20membeli%20Rank%20di%20server.",
  adminNumber: "08388567246 [Aksa]",
  developerWhatsapp: "https://wa.me/62895602592430?text=Halo%20RAN%20DEV,%20saya%20tertarik%20dengan%20jasa%20development%20website%20Anda.",
  developerNumber: "0895602592430",
  developerName: "RAN DEV",
  copyright: "© 2026 MyEco SMP. All Rights Reserved.",
  watermark: "Developed by RAN DEV",
  websiteUrl: "https://myeco.biz.id",
  ranks: [
    {
      name: "IRON",
      price: "Rp 15.000",
      duration: "Lifetime",
      description: "Rank pemula dengan berbagai kelebihan klaim lahan dan akses command dasar.",
      benefits: [
        "Klaim Lahan (Max Claim: 7)",
        "Ukuran Lahan (Max Size: 2.500 Block)",
        "Akses Command: +clear, +nightvision"
      ],
      color: "from-slate-400 to-slate-200",
      accentColor: "text-slate-300",
      badgeBg: "bg-slate-500/20 text-slate-300 border-slate-500/30"
    },
    {
      name: "GOLD",
      price: "Rp 25.000",
      duration: "Lifetime",
      description: "Rank menengah dengan bonus harian dan diskon belanja khusus di server.",
      benefits: [
        "Rank Starter kits",
        "Klaim Lahan (Max Claim: 8)",
        "Ukuran Lahan (Max Size: 3.000 Block)",
        "Bonus Daily Reward: 6.000 koin",
        "Shop Discount: 5%",
        "Akses Command: +clear, +nightvision, +feed, +heal, +jump"
      ],
      color: "from-amber-500 to-yellow-300",
      accentColor: "text-amber-400",
      badgeBg: "bg-amber-500/20 text-amber-300 border-amber-500/30"
    },
    {
      name: "DIAMOND",
      price: "Rp 45.000",
      duration: "Lifetime",
      description: "Rank istimewa dengan fitur terbang (fly) serta warp kustom personal & publik.",
      benefits: [
        "Rank Starter kits",
        "Klaim Lahan (Max Claim: 10)",
        "Ukuran Lahan (Max Size: 5.000 Block)",
        "Bonus Daily Reward: 15.000 koin",
        "Shop Discount: 15%",
        "Player Warp (Personal: 10, Public: 10)",
        "Akses Command: +fly, +fly off, +heal, +nightvision, +clear, +resistance, +jump"
      ],
      color: "from-cyan-500 to-teal-300",
      accentColor: "text-cyan-400",
      badgeBg: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
    },
    {
      name: "VIP",
      price: "Rp 55.000",
      duration: "Lifetime",
      description: "Rank tertinggi legendaris dengan fitur terlengkap tanpa batas demi kemudahan mutlak.",
      benefits: [
        "Rank Starter kits",
        "Klaim Lahan (Max Claim: 15)",
        "Ukuran Lahan (Max Size: 10.000 Block)",
        "Bebas Klaim Lahan (Free claim land)",
        "Bonus Daily Reward: 25.000 koin",
        "Shop Discount: 20%",
        "Player Warp (Personal: 20, Public: 20)",
        "Max Home: 20 sethome",
        "Akses Command: +fly, +fly off, +feed, +nightvision, +heal, +haste, +clear, +water breath, +resistance, +fire res, +jump, +hero"
      ],
      color: "from-emerald-500 to-green-300",
      accentColor: "text-emerald-400",
      badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
    }
  ],
  seo: {
    title: "MyEco SMP - Server Minecraft Survival Economy Indonesia",
    description: "Gabung sekarang di MyEco SMP! Server Minecraft Survival Economy terbaik dengan tema Village, Gold Coin, Emerald, dan Community. Mainkan di Java & Bedrock.",
    keywords: [
      "MyEco SMP",
      "Server Minecraft Indonesia",
      "Survival Economy Minecraft",
      "Minecraft Bedrock Indonesia",
      "Minecraft Java Indonesia",
      "RAN DEV Minecraft"
    ],
    ogImage: "/og-image.webp",
    favicon: "/favicon.ico"
  }
};
