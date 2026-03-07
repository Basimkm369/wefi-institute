import Navbar from '@/components/Navbar';
import CoursesSection from '@/components/CoursesSection';
import Footer from '@/components/Footer';

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <CoursesSection />
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;
