import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAppContext } from '@/lib/context';
import type { App } from '@/lib/types';

interface AppCardProps {
  app: App;
  onViewDetails: (app: App) => void;
}

export default function AppCard({ app, onViewDetails }: AppCardProps) {
  const { t, language } = useAppContext();

  const name = language === 'ko' ? app.name : app.nameEn;
  const description = language === 'ko' ? app.description : app.descriptionEn;

  const handleViewDetails = () => {
    onViewDetails(app);
    console.log('View details clicked for app:', app.name);
  };

  return (
    <Card className="hover-elevate transition-all duration-300 group border-0 shadow-lg shadow-black/5 bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src={app.icon}
                alt={`${name} icon`}
                className="w-16 h-16 rounded-xl object-cover shadow-md"
                data-testid={`img-app-icon-${app.id}`}
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-50" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-foreground mb-2 font-[Outfit] group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-2 mb-4 leading-relaxed">
              {description}
            </p>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                {app.category}
              </Badge>
              <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                v{app.version}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button
          variant="outline"
          size="sm"
          onClick={handleViewDetails}
          data-testid={`button-view-details-${app.id}`}
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 shadow-sm"
        >
          {t.apps.viewDetails}
        </Button>
      </CardFooter>
    </Card>
  );
}