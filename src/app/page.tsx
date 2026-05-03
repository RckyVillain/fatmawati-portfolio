import dynamic from 'next/dynamic';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

// Dynamic imports for code splitting
const ScrollCanvas = dynamic(() => import('@/components/ScrollCanvas'), {
  ssr: false,
  loading: () => (
    <div className="h-screen bg-bg flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
    </div>
  ),
});

const ExperienceTimeline = dynamic(
  () => import('@/components/ExperienceTimeline'),
  { ssr: false }
);

const EducationSection = dynamic(
  () => import('@/components/EducationSection'),
  { ssr: false }
);

const CertificationGrid = dynamic(
  () => import('@/components/CertificationGrid'),
  { ssr: false }
);

const SkillBars = dynamic(() => import('@/components/SkillBars'), {
  ssr: false,
});

const DownloadCVSection = dynamic(
  () => import('@/components/DownloadCVSection'),
  { ssr: false }
);

const ContactFooter = dynamic(() => import('@/components/ContactFooter'), {
  ssr: false,
});

export default function Home() {
  return (
    <SmoothScrollProvider>
      <Navbar />
      <main>
        <HeroSection />
        <ScrollCanvas />
        <ExperienceTimeline />
        <EducationSection />
        <CertificationGrid />
        <SkillBars />
        <DownloadCVSection />
        <ContactFooter />
      </main>
    </SmoothScrollProvider>
  );
}
