import { useState, useEffect } from "react";

export interface DevData {
  name: string;
  phone: string;
  whatsapp: string;
  portfolio: string;
  discord: string;
  communityName: string;
  communityWebsite: string;
  communityDiscord: string;
}

const DEFAULT_DEV_DATA: DevData = {
  name: "Ran Dev",
  phone: "0895602592430",
  whatsapp: "0895602592430",
  portfolio: "https://sfl.gl/x2ic",
  discord: "https://discord.gg/9KUN2byKRM",
  communityName: "Ran Dev Community",
  communityWebsite: "https://sfl.gl/x2ic",
  communityDiscord: "https://discord.gg/9KUN2byKRM",
};

export function useDevAPI() {
  const [devData, setDevData] = useState<DevData>(DEFAULT_DEV_DATA);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Gagal mengambil data developer dari API");
        }
        return res.json();
      })
      .then((data) => {
        // Safe mapping according to both standard fields and user definitions
        const name = data.name || DEFAULT_DEV_DATA.name;
        const phone = data.contact?.phone || DEFAULT_DEV_DATA.phone;
        const whatsapp = data.contact?.whatsapp || DEFAULT_DEV_DATA.whatsapp;
        
        // Handle portfolio from links or website
        const portfolio = data.links?.portfolio || data.website?.portfolio || DEFAULT_DEV_DATA.portfolio;
        
        // Discord link
        const discord = data.links?.discord || DEFAULT_DEV_DATA.discord;

        // Community settings (could be nested inside data.community as specified by user, or fallback)
        const communityName = data.community?.name || `${name} Community`;
        const communityWebsite = data.community?.website || portfolio;
        const communityDiscord = data.community?.discord || discord;

        setDevData({
          name,
          phone,
          whatsapp,
          portfolio,
          discord,
          communityName,
          communityWebsite,
          communityDiscord,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.warn("Dev API fetch failed, using fallback:", err);
        setLoading(false);
      });
  }, []);

  return { devData, loading };
}
