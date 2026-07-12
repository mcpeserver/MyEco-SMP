import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Ranks from "./components/Ranks";
import ServerInfo from "./components/ServerInfo";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

export default function App() {
  const [activeTab, setActiveTab] = useState<"home" | "features" | "ranks" | "server-info">("home");
  const [toastMessage, setToastMessage] = useState("");
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Scroll to top on load/re-render to sync state
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0 });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShowToast = (message: string) => {
    setToastMessage(message);
    setIsToastOpen(true);
  };

  const renderSection = () => {
    switch (activeTab) {
      case "home":
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Hero onShowToast={handleShowToast} onNavigate={setActiveTab} />
          </motion.div>
        );
      case "features":
        return (
          <motion.div
            key="features"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Features />
          </motion.div>
        );
      case "ranks":
        return (
          <motion.div
            key="ranks"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Ranks />
          </motion.div>
        );
      case "server-info":
        return (
          <motion.div
            key="server-info"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <ServerInfo onShowToast={handleShowToast} />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      id="app-root"
      className="min-h-screen bg-[#040805] text-[#e2e8f0] font-sans antialiased relative overflow-x-hidden"
    >
      {/* Dedicated background image layer with rich visibility but keeps readability perfect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-20 pointer-events-none z-0"
        style={{ backgroundImage: `url('/background.jpg')` }}
      />

      {/* Background dark atmospheric mask to blend with the dark forest aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040805]/60 via-[#0a1a0f] to-[#020503]/95 pointer-events-none z-0" />
      
      {/* App Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Sticky Header with Dynamic Tab state */}
        <Header activeTab={activeTab} setActiveTab={setActiveTab} isScrolled={isScrolled} />

        {/* Main Content Sections - dynamically rendered with smooth transitions to avoid overload */}
        <main className="flex-grow pt-32 lg:pt-24 pb-12">
          <AnimatePresence mode="wait">
            {renderSection()}
          </AnimatePresence>
        </main>

        {/* Footer with Dynamic Tab state */}
        <Footer setActiveTab={setActiveTab} />
      </div>

      {/* Modern custom toast for Copy notifications */}
      <Toast 
        message={toastMessage} 
        isOpen={isToastOpen} 
        onClose={() => setIsToastOpen(false)} 
      />
    </div>
  );
}
