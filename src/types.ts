export type PageType = 
  | 'home' 
  | 'about' 
  | 'courses' 
  | 'course-detail' 
  | 'blog' 
  | 'blog-detail' 
  | 'careers' 
  | 'founder' 
  | 'team' 
  | 'webinars' 
  | 'membership' 
  | 'contact' 
  | 'auth' 
  | 'dashboard' 
  | 'checkout' 
  | 'legal';

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Stock Market' | 'Derivatives' | 'Investing' | 'Trading';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  language: 'English' | 'Hindi' | 'Hinglish';
  priceINR: number;
  originalPriceINR: number;
  durationHours: number;
  lessonsCount: number;
  instructor: {
    name: string;
    role: string;
    avatarUrl?: string;
  };
  summary: string;
  description: string;
  whatYouWillLearn: string[];
  highlights: string[];
  requirements: string[];
  syllabus: {
    moduleTitle: string;
    moduleDuration: string;
    lessons: {
      title: string;
      duration: string;
      type: 'video' | 'quiz' | 'resource';
      freePreview?: boolean;
    }[];
  }[];
  faqs: { question: string; answer: string }[];
  isFeatured?: boolean;
  graphyUrl: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'Derivatives' | 'Market Structure' | 'Risk Management' | 'Investing';
  author: {
    name: string;
    role: string;
  };
  publishedDate: string;
  readTimeMinutes: number;
  content: string[];
  keyTakeaways: string[];
  tags: string[];
}

export interface Webinar {
  id: string;
  title: string;
  instructor: string;
  date: string;
  timeIST: string;
  language: string;
  status: 'upcoming' | 'past';
  description: string;
  learningOutcomes: string[];
  seatsLeft?: number;
  recordingUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialization: string;
  experienceYears: number;
  isFounder?: boolean;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export interface MembershipPlan {
  id: string;
  name: string;
  tier: 'starter' | 'pro' | 'institutional';
  tagline: string;
  pricePerMonthINR: number;
  billingPeriod: string;
  isPopular?: boolean;
  features: string[];
  notIncluded?: string[];
}

export interface UserAccount {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'member' | 'pro';
  enrolledCourseIds: string[];
  completedLessonIds: string[];
  joinedDate: string;
}

export interface CartItem {
  courseId: string;
  title: string;
  priceINR: number;
  category: string;
}
