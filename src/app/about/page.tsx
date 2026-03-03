import Navbar from "@/components/Navbar";
import AboutHeroSection from "@/components/AboutHeroSection";
import AboutMissionSection from "@/components/AboutMissionSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <AboutHeroSection />
        <AboutMissionSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
