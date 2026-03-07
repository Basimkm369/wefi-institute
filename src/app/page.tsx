import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CategoriesSection from '@/components/CategoriesSection';
import BeneficiariesSection from '@/components/BeneficiariesSection';
import CoursesPreviewSection from '@/components/CoursesPreviewSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <CategoriesSection />
        <BeneficiariesSection />
        <CoursesPreviewSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
