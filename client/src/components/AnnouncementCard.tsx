import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Calendar, Megaphone, Wrench, Newspaper } from 'lucide-react';
import { useAppContext } from '@/lib/context';
import type { Announcement } from '@/lib/types';

interface AnnouncementCardProps {
  announcement: Announcement;
}

export default function AnnouncementCard({ announcement }: AnnouncementCardProps) {
  const { t, language } = useAppContext();

  const title = language === 'ko' ? announcement.title : announcement.titleEn;
  const content = language === 'ko' ? announcement.content : announcement.contentEn;

  const getIcon = () => {
    switch (announcement.type) {
      case 'update': return <Megaphone className="h-4 w-4" />;
      case 'maintenance': return <Wrench className="h-4 w-4" />;
      case 'news': return <Newspaper className="h-4 w-4" />;
      default: return <Megaphone className="h-4 w-4" />;
    }
  };

  const getTypeColor = () => {
    switch (announcement.type) {
      case 'update': return 'bg-primary/10 text-primary';
      case 'maintenance': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'news': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400';
      default: return 'bg-primary/10 text-primary';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return language === 'ko' 
      ? date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })
      : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <Card className="hover-elevate transition-all duration-300 border-0 shadow-lg shadow-black/5 bg-gradient-to-br from-card via-card to-card/90 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Badge className={`${getTypeColor()} border-0 shadow-sm`}>
              {getIcon()}
              <span className="ml-1">
                {t.announcements.types[announcement.type]}
              </span>
            </Badge>
          </div>
          <div className="flex items-center text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
            <Calendar className="h-3 w-3 mr-1" />
            {formatDate(announcement.date)}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <h3 className="font-semibold text-foreground mb-3 font-[Outfit] text-lg leading-tight">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {content}
        </p>
      </CardContent>
    </Card>
  );
}