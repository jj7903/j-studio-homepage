import { useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppProvider } from "@/lib/context";
import NotFound from "@/pages/not-found";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AppGrid from "@/components/AppGrid";
import AnnouncementsList from "@/components/AnnouncementsList";
import NewsletterSignup from "@/components/NewsletterSignup";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import type { App as AppType, Announcement } from "@/lib/types";

// todo: remove mock functionality - sample data for prototype
import productivityIcon from '@assets/generated_images/Productivity_app_icon_purple_784dddaf.png';
import noteIcon from '@assets/generated_images/Note-taking_app_icon_purple_4055d733.png';
import utilityIcon from '@assets/generated_images/Utility_app_icon_purple_787a28c4.png';

function HomePage() {
  // todo: remove mock functionality
  const [mockApps] = useState<AppType[]>([
    {
      id: '1',
      name: '할일 관리자',
      nameEn: 'Task Manager',
      description: '간편하고 직관적인 할일 관리 앱으로 생산성을 높여보세요',
      descriptionEn: 'Boost your productivity with this simple and intuitive task management app',
      icon: productivityIcon,
      category: 'productivity',
      downloadLinks: { ios: '#', android: '#', web: '#' },
      screenshots: [],
      features: ['간편한 할일 추가', '카테고리별 정리', '알림 기능'],
      featuresEn: ['Easy task creation', 'Category organization', 'Notification system'],
      faq: [],
      version: '1.2.0',
      lastUpdated: '2024-01-15'
    },
    {
      id: '2',
      name: '노트 메이커',
      nameEn: 'Note Maker',
      description: '아이디어와 메모를 체계적으로 관리하는 스마트 노트 앱',
      descriptionEn: 'Smart note-taking app for organizing ideas and memos systematically',
      icon: noteIcon,
      category: 'productivity',
      downloadLinks: { ios: '#', web: '#' },
      screenshots: [],
      features: ['마크다운 지원', '클라우드 동기화', '태그 시스템'],
      featuresEn: ['Markdown support', 'Cloud sync', 'Tag system'],
      faq: [],
      version: '2.1.0',
      lastUpdated: '2024-01-10'
    },
    {
      id: '3',
      name: '유틸리티 도구',
      nameEn: 'Utility Tools',
      description: '다양한 일상 도구들을 모아놓은 편리한 유틸리티 앱',
      descriptionEn: 'Convenient utility app with various daily tools collected in one place',
      icon: utilityIcon,
      category: 'utilities',
      downloadLinks: { web: '#', github: '#' },
      screenshots: [],
      features: ['계산기', '단위 변환', '컬러 피커'],
      featuresEn: ['Calculator', 'Unit converter', 'Color picker'],
      faq: [],
      version: '1.0.5',
      lastUpdated: '2024-01-05'
    }
  ]);

  // todo: remove mock functionality
  const [mockAnnouncements] = useState<Announcement[]>([
    {
      id: '1',
      title: '새로운 앱 업데이트 출시',
      titleEn: 'New App Update Released',
      content: '할일 관리자 앱에 새로운 기능들이 추가되었습니다. 더욱 편리한 사용자 경험을 제공합니다.',
      contentEn: 'New features have been added to the Task Manager app. Provides a more convenient user experience.',
      type: 'update',
      date: '2024-01-15',
      appId: '1'
    },
    {
      id: '2',
      title: '서버 점검 안내',
      titleEn: 'Server Maintenance Notice',
      content: '더 나은 서비스 제공을 위해 1월 20일 새벽 2시부터 4시까지 서버 점검을 진행합니다.',
      contentEn: 'Server maintenance will be conducted from 2 AM to 4 AM on January 20th for better service.',
      type: 'maintenance',
      date: '2024-01-12'
    },
    {
      id: '3',
      title: '새로운 기능 미리보기',
      titleEn: 'New Feature Preview',
      content: '다음 업데이트에서 선보일 새로운 기능들을 미리 공개합니다.',
      contentEn: 'Preview of new features to be introduced in the next update.',
      type: 'news',
      date: '2024-01-10'
    }
  ]);

  const handleViewAppDetails = (app: AppType) => {
    console.log('Viewing app details for:', app.name);
    // todo: implement app detail modal or navigation
  };

  const handleViewAllAnnouncements = () => {
    console.log('View all announcements clicked');
    // todo: implement announcements page
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AppGrid apps={mockApps} onViewDetails={handleViewAppDetails} />
        <AnnouncementsList 
          announcements={mockAnnouncements}
          onViewAll={handleViewAllAnnouncements}
        />
        <NewsletterSignup />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AppProvider>
          <Toaster />
          <Router />
        </AppProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
