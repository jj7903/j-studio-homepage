import { Button } from '@/components/ui/button';
import { useAppContext } from '@/lib/context';
import AnnouncementCard from './AnnouncementCard';
import type { Announcement } from '@/lib/types';

interface AnnouncementsListProps {
  announcements: Announcement[];
  showAll?: boolean;
  onViewAll?: () => void;
}

export default function AnnouncementsList({ announcements, showAll = false, onViewAll }: AnnouncementsListProps) {
  const { t } = useAppContext();
  
  const displayAnnouncements = showAll ? announcements : announcements.slice(0, 3);

  return (
    <section id="blog" className="py-20 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 via-muted/30 to-muted/10" />
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `linear-gradient(45deg, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(-45deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }} />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium mb-6">
            📢 최신 소식과 업데이트
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 font-[Outfit]">
            {t.announcements.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            새로운 기능 출시와 중요한 공지사항을 확인하세요
          </p>
        </div>

        {!showAll && announcements.length > 3 && (
          <div className="flex justify-center mb-12">
            <Button
              variant="outline"
              onClick={onViewAll}
              data-testid="button-view-all-announcements"
              className="shadow-sm bg-card/50 backdrop-blur-sm"
            >
              {t.announcements.viewAll}
            </Button>
          </div>
        )}

        {announcements.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">📢</span>
            </div>
            <p className="text-muted-foreground text-lg">
              No announcements yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayAnnouncements.map((announcement) => (
              <AnnouncementCard
                key={announcement.id}
                announcement={announcement}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}