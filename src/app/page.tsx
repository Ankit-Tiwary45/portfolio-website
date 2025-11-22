import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { BlogSection } from "@/components/sections/blog";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CertificationsSection } from "@/components/sections/certifications";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-brand-light/40 px-4 pb-16 pt-6 dark:bg-brand-dark">
      <Navbar />
      <main className="mx-auto mt-28 flex w-full max-w-6xl flex-col gap-20">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <BlogSection />
        <TestimonialsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
