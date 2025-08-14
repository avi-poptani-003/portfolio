import { lazy, Suspense } from "react";
import GlobalEffects from "./components/GlobalEffects";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import ThreeBackground from "./components/ThreeBackground";
const AboutSection = lazy(() => import("./components/AboutSection"));
const ExperienceSection = lazy(() => import("./components/ExperienceSection"));
const ProjectsSection = lazy(() => import("./components/ProjectsSection"));
const ContactSection = lazy(() => import("./components/ContactSection"));

// Reusable loading skeleton component
const LoadingSkeleton = ({ height = "h-96" }) => (
  <div
    className={`${height} mx-auto max-w-4xl rounded-lg bg-gradient-to-r from-white/5 via-white/10 to-white/5 bg-[length:200%_100%] animate-[loading_2s_ease-in-out_infinite] my-8`}
  />
);

function App() {
  return (
    <div className="relative">
      <Suspense fallback={<div />}>
        <GlobalEffects />
      </Suspense>
      <Suspense fallback={<div className="fixed inset-0 bg-[#0a192f] z-[1]" />}>
        <ThreeBackground />
      </Suspense>
      <main className="relative z-[2]">
        <HeroSection />

        <Suspense fallback={<LoadingSkeleton />}>
          <AboutSection />
        </Suspense>

        <Suspense fallback={<LoadingSkeleton />}>
          <ExperienceSection />
        </Suspense>

        <Suspense fallback={<LoadingSkeleton />}>
          <ProjectsSection />
        </Suspense>

        <Suspense fallback={<LoadingSkeleton height="h-64" />}>
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
