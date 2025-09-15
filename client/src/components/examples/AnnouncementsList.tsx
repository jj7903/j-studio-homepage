import { AppProvider } from '@/lib/context';
import AnnouncementsList from '../AnnouncementsList';

export default function AnnouncementsListExample() {
  // todo: remove mock functionality
  const mockAnnouncements = [
    {
      id: '1',
      title: '새로운 앱 업데이트 출시',
      titleEn: 'New App Update Released',
      content: '할일 관리자 앱에 새로운 기능들이 추가되었습니다. 더욱 편리한 사용자 경험을 제공합니다.',
      contentEn: 'New features have been added to the Task Manager app. Provides a more convenient user experience.',
      type: 'update' as const,
      date: '2024-01-15',
      appId: '1'
    },
    {
      id: '2',
      title: '서버 점검 안내',
      titleEn: 'Server Maintenance Notice',
      content: '더 나은 서비스 제공을 위해 1월 20일 새벽 2시부터 4시까지 서버 점검을 진행합니다.',
      contentEn: 'Server maintenance will be conducted from 2 AM to 4 AM on January 20th for better service.',
      type: 'maintenance' as const,
      date: '2024-01-12'
    },
    {
      id: '3',
      title: '새로운 기능 미리보기',
      titleEn: 'New Feature Preview',
      content: '다음 업데이트에서 선보일 새로운 기능들을 미리 공개합니다.',
      contentEn: 'Preview of new features to be introduced in the next update.',
      type: 'news' as const,
      date: '2024-01-10'
    }
  ];

  const handleViewAll = () => {
    console.log('View all announcements clicked');
  };

  return (
    <AppProvider>
      <AnnouncementsList 
        announcements={mockAnnouncements}
        onViewAll={handleViewAll}
      />
    </AppProvider>
  );
}