import { getProfile, getProjects } from "../lib/sanity/client";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { WorkPrinciples } from "../components/WorkPrinciples";
import { ProjectsSection } from "../components/ProjectsSection";
import { ServicesSection } from "../components/ServicesSection";
import { ContactSection } from "../components/Contact";
import { Footer } from "../components/Footer";

export default async function HomePage() {
  // Asynchronously load data with automatic fallback to high-quality default content
  const [profile, projects] = await Promise.all([
    getProfile(),
    getProjects(),
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* 1. Navbar */}
      <Navbar availableForHire={profile.availableForHire} />

      <main className="flex-1 w-full">
        {/* 2. Hero Section: Hero text + 2 CTA buttons + circular photo */}
        <Hero profile={profile} />

        {/* 3. Work Qualities & Principles Section */}
        <WorkPrinciples />

        {/* 4. Projects: 3 cards in one row, no photos, project name, short description, and live link */}
        <ProjectsSection projects={projects} />

        {/* 5. Services Section: 3 cards in one row, horizontally scrollable, quote modal popup */}
        <ServicesSection />

        {/* 6. Get In Touch Section with Form */}
        <ContactSection profile={profile} />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
