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
  heroImage: string;
  logo: string;
  favicon: string;
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
  heroImage: "/hero-bg.jpg",
  logo: "/logo.jpg",
  favicon: "/logo.jpg",
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

        // Dynamic assets from JSON, falling back to beautiful localized defaults if absent
        const heroImage = data.hero_image || data.assets?.hero_image || data.links?.hero_image || DEFAULT_DEV_DATA.heroImage;
        const logo = data.logo || data.assets?.logo || data.links?.logo || DEFAULT_DEV_DATA.logo;
        const favicon = data.favicon || data.assets?.favicon || data.links?.favicon || logo || DEFAULT_DEV_DATA.favicon;

        const resolvedData = {
          name,
          phone,
          whatsapp,
          portfolio,
          discord,
          communityName,
          communityWebsite,
          communityDiscord,
          heroImage,
          logo,
          favicon,
        };

        setDevData(resolvedData);
        setLoading(false);

        // Dynamically update head meta elements for SEO & OpenGraph (WhatsApp preview, etc)
        try {
          // Favicon Update
          let faviconLink = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
          if (!faviconLink) {
            faviconLink = document.createElement("link");
            faviconLink.rel = "shortcut icon";
            document.head.appendChild(faviconLink);
          }
          faviconLink.href = favicon;

          // OpenGraph Image (WhatsApp Thumbnail)
          let ogImage = document.querySelector("meta[property='og:image']") as HTMLMetaElement;
          if (!ogImage) {
            ogImage = document.createElement("meta");
            ogImage.setAttribute("property", "og:image");
            document.head.appendChild(ogImage);
          }
          ogImage.content = heroImage;

          // Twitter Image
          let twitterImage = document.querySelector("meta[name='twitter:image']") as HTMLMetaElement;
          if (!twitterImage) {
            twitterImage = document.createElement("meta");
            twitterImage.name = "twitter:image";
            document.head.appendChild(twitterImage);
          }
          twitterImage.content = heroImage;

          // Dynamic description/author updates
          let metaAuthor = document.querySelector("meta[name='author']") as HTMLMetaElement;
          if (metaAuthor) {
            metaAuthor.content = name;
          }
        } catch (e) {
          console.error("Gagal mengupdate meta tags secara dinamis:", e);
        }
      })
      .catch((err) => {
        console.warn("Dev API fetch failed, using fallback:", err);
        setLoading(false);
      });
  }, []);

  return { devData, loading };
}
