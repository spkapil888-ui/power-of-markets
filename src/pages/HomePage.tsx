import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CategoriesSection } from '../components/home/CategoriesSection';
import { WhyPomSection } from '../components/home/WhyPomSection';
import { FeaturedCoursesSection } from '../components/home/FeaturedCoursesSection';
import { FounderSection } from '../components/home/FounderSection';
import { LearningJourneySection } from '../components/home/LearningJourneySection';
import { UpcomingWebinarsSection } from '../components/home/UpcomingWebinarsSection';
import { VideoLibrarySection } from '../components/home/VideoLibrarySection';
import { FaqAccordionSection } from '../components/home/FaqAccordionSection';
import { ContactCtaSection } from '../components/home/ContactCtaSection';
import { Course, PageType, Webinar } from '../types';

interface HomePageProps {
  onNavigate: (page: PageType, courseId?: string) => void;
  onAddToCart: (course: Course) => void;
  onRegisterWebinar: (webinar: Webinar) => void;
  onPlayVideo: (video: { title: string; duration: string; description: string; topic: string }) => void;
  onSelectCategory: (category: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onAddToCart,
  onRegisterWebinar,
  onPlayVideo,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-col">
      <HeroSection
        onNavigate={onNavigate}
        onOpenVideoModal={(vidId) =>
          onPlayVideo({
            title: 'Deconstructing Option Greeks: Delta vs Gamma Intuitively',
            duration: '14:20',
            topic: 'Derivatives Theory',
            description: 'Abhishek Upadhyay walks through the mechanical difference between first-order directional slope and second-order acceleration curves.',
          })
        }
      />
      <CategoriesSection onSelectCategory={onSelectCategory} onNavigate={onNavigate} />
      <WhyPomSection />
      <FeaturedCoursesSection onNavigate={onNavigate} onAddToCart={onAddToCart} />
      <FounderSection onNavigate={onNavigate} />
      <LearningJourneySection onNavigate={onNavigate} />
      <UpcomingWebinarsSection onNavigate={onNavigate} onRegisterWebinar={onRegisterWebinar} />
      <VideoLibrarySection onPlayVideo={onPlayVideo} />
      <FaqAccordionSection />
      <ContactCtaSection onNavigate={onNavigate} />
    </div>
  );
};
