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
  name: "MyEco SMP Season 2",
  domain: "myecosmp.com",
  ipJava: "play.myecosmp.com",
  ipBedrock: "pe.myecosmp.com",
  portJava: 25565,
  portBedrock: 19132,
  version: "1.20.x - 1.21.x",
  discord: "https://discord.gg/myecosmp",
  downloadMinecraft: "https://tlauncher.org/en/download-minecraft.html",
  adminWhatsapp: "https://wa.me/628388567246?text=Halo%20Admin%20MyEco%20SMP,%20saya%20ingin%20membeli%20Rank%20di%20server%20Season%202.",
  adminNumber: "08388567246",
  developerWhatsapp: "https://wa.me/62895602592430?text=Halo%20RAN%20DEV,%20saya%20tertarik%20dengan%20jasa%20development%20website%20Anda.",
  developerNumber: "0895602592430",
  developerName: "RAN DEV",
  copyright: "© 2026 MyEco SMP. All Rights Reserved.",
  watermark: "Developed by RAN DEV",
  websiteUrl: "https://myecosmp.com",
  ranks: [
    {
      name: "IRON",
      price: "Rp 15.000",
      duration: "Lifetime",
      description: "Rank pemula dengan berbagai fitur dasar yang sangat berguna untuk memulai survival ekonomi.",
      benefits: [
        "Prefix [IRON] eksklusif di dalam game",
        "Warna chat hijau terang (Green Chat)",
        "Home limit bertambah jadi 2x sethome",
        "Akses Kit Iron mingguan (/kit iron)",
        "Fitur Keep Inventory aktif di area Spawn"
      ],
      color: "from-slate-400 to-slate-200",
      accentColor: "text-slate-300",
      badgeBg: "bg-slate-500/20 text-slate-300 border-slate-500/30"
    },
    {
      name: "GOLD",
      price: "Rp 30.000",
      duration: "Lifetime",
      description: "Rank menengah dengan kelebihan fitur chat premium dan kemampuan terbang di lobby.",
      benefits: [
        "Prefix [GOLD] berkilau di dalam game",
        "Warna chat emas mewah (Gold Chat)",
        "Home limit bertambah jadi 4x sethome",
        "Akses Kit Gold mingguan (/kit gold)",
        "Akses Fly (terbang) khusus di area Spawn",
        "Bisa mengganti nickname permainan (/nick)"
      ],
      color: "from-amber-500 to-yellow-300",
      accentColor: "text-amber-400",
      badgeBg: "bg-amber-500/20 text-amber-300 border-amber-500/30"
    },
    {
      name: "DIAMOND",
      price: "Rp 50.000",
      duration: "Lifetime",
      description: "Rank tingkat tinggi bagi pemain yang ingin menikmati survival dengan mobilitas maksimal.",
      benefits: [
        "Prefix [DIAMOND] cyan elegan di game",
        "Warna chat cyan cerah (Cyan Chat)",
        "Home limit bertambah jadi 6x sethome",
        "Akses Kit Diamond mingguan (/kit diamond)",
        "Akses Fly (terbang) di seluruh dunia (non-PvP)",
        "Slot prioritas masuk saat server penuh"
      ],
      color: "from-cyan-500 to-teal-300",
      accentColor: "text-cyan-400",
      badgeBg: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
    },
    {
      name: "VIP",
      price: "Rp 100.000",
      duration: "Lifetime",
      description: "Rank kasta tertinggi dengan semua fitur premium terbuka tanpa batas untuk kenyamanan mutlak.",
      benefits: [
        "Prefix [VIP+] bersinar megah di game",
        "Efek Glow tubuh emas eksklusif yang mewah",
        "Set sethome tanpa batas (Unlimited Home)",
        "Akses Kit VIP eksklusif mingguan (/kit vip)",
        "Akses Virtual Chest dan Enderchest (/ec /chest)",
        "Pesan sambutan kustom saat masuk server",
        "Priority Support langsung dari tim Admin"
      ],
      color: "from-emerald-500 to-green-300",
      accentColor: "text-emerald-400",
      badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
    }
  ],
  seo: {
    title: "MyEco SMP Season 2 - Server Minecraft Survival Economy Indonesia",
    description: "Gabung sekarang di MyEco SMP Season 2! Server Minecraft Survival Economy terbaik dengan tema Village, Gold Coin, Emerald, dan Community. Mainkan di Java & Bedrock.",
    keywords: [
      "MyEco SMP",
      "MyEco SMP Season 2",
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
