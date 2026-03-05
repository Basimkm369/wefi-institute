import Navbar from "@/components/Navbar";
import AboutHeroSection from "@/components/AboutHeroSection";
import AboutMissionSection from "@/components/AboutMissionSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <AboutHeroSection />
        <AboutMissionSection />
        <WhyChooseUsSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
