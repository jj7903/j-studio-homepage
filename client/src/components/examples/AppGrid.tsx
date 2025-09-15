import { AppProvider } from '@/lib/context';
import AppGrid from '../AppGrid';
import productivityIcon from '@assets/generated_images/Productivity_app_icon_purple_784dddaf.png';
import noteIcon from '@assets/generated_images/Note-taking_app_icon_purple_4055d733.png';
import utilityIcon from '@assets/generated_images/Utility_app_icon_purple_787a28c4.png';

export default function AppGridExample() {
  // todo: remove mock functionality
  const mockApps = [
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
  ];

  const handleViewDetails = (app: any) => {
    console.log('View details for:', app.name);
  };

  return (
    <AppProvider>
      <AppGrid apps={mockApps} onViewDetails={handleViewDetails} />
    </AppProvider>
  );
}