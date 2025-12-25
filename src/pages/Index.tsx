import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SpeakersSection from "@/components/SpeakersSection";
import ModeratorsSection from "@/components/ModeratorsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>EmpowerHer 2025 | Elevate • Inspire • Lead - International Women's Day Event</title>
        <meta 
          name="description" 
          content="Join EmpowerHer 2025 on March 8, International Women's Day. A celebration of strength, resilience, and inclusivity organized by Girls in Tech. Featuring expert speakers on leadership, mental health, and career growth." 
        />
        <meta name="keywords" content="EmpowerHer, Women in Tech, International Women's Day, Girls in Tech, Women Leadership, Women Empowerment, Tech Event 2025" />
        <link rel="canonical" href="https://empowerher2025.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="EmpowerHer 2025 | Elevate • Inspire • Lead" />
        <meta property="og:description" content="A celebration of strength, resilience, and inclusivity. Join us on March 8, 2025 for International Women's Day." />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EmpowerHer 2025 | Elevate • Inspire • Lead" />
        <meta name="twitter:description" content="A celebration of strength, resilience, and inclusivity. Join us on March 8, 2025." />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SpeakersSection />
        <ModeratorsSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
