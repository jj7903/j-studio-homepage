import { AppProvider } from '@/lib/context';
import AnnouncementCard from '../AnnouncementCard';

export default function AnnouncementCardExample() {
  // todo: remove mock functionality
  const mockAnnouncement = {
    id: '1',
    title: '새로운 앱 업데이트 출시',
    titleEn: 'New App Update Released',
    content: '할일 관리자 앱에 새로운 기능들이 추가되었습니다. 더욱 편리한 사용자 경험을 제공합니다.',
    contentEn: 'New features have been added to the Task Manager app. Provides a more convenient user experience.',
    type: 'update' as const,
    date: '2024-01-15',
    appId: '1'
  };

  return (
    <AppProvider>
      <div className="p-4 max-w-md">
        <AnnouncementCard announcement={mockAnnouncement} />
      </div>
    </AppProvider>
  );
}