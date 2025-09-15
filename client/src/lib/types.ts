export interface App {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
  category: string;
  downloadLinks: {
    ios?: string;
    android?: string;
    web?: string;
    github?: string;
  };
  screenshots: string[];
  features: string[];
  featuresEn: string[];
  faq: FAQ[];
  version: string;
  lastUpdated: string;
}

export interface FAQ {
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
}

export interface Announcement {
  id: string;
  title: string;
  titleEn: string;
  content: string;
  contentEn: string;
  type: 'update' | 'maintenance' | 'news';
  date: string;
  appId?: string;
}

export interface NewsletterSubscriber {
  email: string;
  language: 'ko' | 'en';
}

export type Language = 'ko' | 'en';
export type Theme = 'light' | 'dark';