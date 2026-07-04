import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Ranks from "./components/Ranks";
import ServerInfo from "./components/ServerInfo";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

export default function App() {
  const [toastMessage, setToastMessage] = useState("");
  const [isToastOpen, setIsToastOpen] = useState(false);

  const handleShowToast = (message: string) => {
    setToastMessage(message);
    setIsToastOpen(true);
  };

  return (
    <div 
      id="app-root"
      className="min-h-screen bg-[#040805] text-[#e2e8f0] font-sans antialiased relative"
      style={{ 
        backgroundImage: `url('/background.webp')`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      {/* Background dark atmospheric mask to ensure high readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040805]/95 via-brand-forest/98 to-[#020503]/98 pointer-events-none z-0" />
      
      {/* App Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Sticky Header */}
        <Header />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* Hero Section */}
          <Hero onShowToast={handleShowToast} />

          {/* Features Zig-zag Section */}
          <Features />

          {/* Premium Ranks & Buy Rank Section */}
          <Ranks />

          {/* Connections Server Info Section */}
          <ServerInfo onShowToast={handleShowToast} />
        </main>

        {/* Footer */}
        <Footer />
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
