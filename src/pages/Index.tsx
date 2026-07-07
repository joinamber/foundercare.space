
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HeroContentSection from "@/components/HeroContentSection";
import AboutSection from "@/components/AboutSection";
import ChatDifferenceSection from "@/components/ChatDifferenceSection";
import ProactiveCareSection from "@/components/ProactiveCareSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <HeroContentSection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="chat-difference">
        <ChatDifferenceSection />
      </div>
      <div id="proactive-care">
        <ProactiveCareSection />
      </div>
      <div id="stats">
        <StatsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
