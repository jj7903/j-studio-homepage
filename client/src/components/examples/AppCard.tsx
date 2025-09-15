import { AppProvider } from '@/lib/context';
import AppCard from '../AppCard';
import productivityIcon from '@assets/generated_images/Productivity_app_icon_purple_784dddaf.png';

export default function AppCardExample() {
  // todo: remove mock functionality
  const mockApp = {
    id: '1',
    name: '할일 관리자',
    nameEn: 'Task Manager',
    description: '간편하고 직관적인 할일 관리 앱으로 생산성을 높여보세요',
    descriptionEn: 'Boost your productivity with this simple and intuitive task management app',
    icon: productivityIcon,
    category: 'productivity',
    downloadLinks: {
      ios: '#',
      android: '#',
      web: '#'
    },
    screenshots: [],
    features: ['간편한 할일 추가', '카테고리별 정리', '알림 기능'],
    featuresEn: ['Easy task creation', 'Category organization', 'Notification system'],
    faq: [],
    version: '1.2.0',
    lastUpdated: '2024-01-15'
  };

  const handleViewDetails = (app: any) => {
    console.log('View details for:', app.name);
  };

  return (
    <AppProvider>
      <div className="p-4 max-w-sm">
        <AppCard app={mockApp} onViewDetails={handleViewDetails} />
      </div>
    </AppProvider>
  );
}