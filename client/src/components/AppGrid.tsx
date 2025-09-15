import { useState, useMemo } from 'react';
import { useAppContext } from '@/lib/context';
import AppCard from './AppCard';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import type { App } from '@/lib/types';

interface AppGridProps {
  apps: App[];
  onViewDetails: (app: App) => void;
}

export default function AppGrid({ apps, onViewDetails }: AppGridProps) {
  const { t, language } = useAppContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredApps = useMemo(() => {
    return apps.filter(app => {
      const name = language === 'ko' ? app.name : app.nameEn;
      const description = language === 'ko' ? app.description : app.descriptionEn;
      
      const matchesSearch = searchQuery === '' || 
        name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        description.toLowerCase().includes(searchQuery.toLowerCase());
        
      const matchesCategory = selectedCategory === 'all' || app.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [apps, searchQuery, selectedCategory, language]);

  return (
    <section id="apps" className="py-20 relative">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `radial-gradient(circle at 20% 20%, hsl(var(--primary)) 0.5px, transparent 0.5px), radial-gradient(circle at 80% 80%, hsl(var(--primary)) 0.5px, transparent 0.5px)`,
        backgroundSize: '60px 60px'
      }} />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium mb-6">
            📱 다양한 앱들을 둘러보세요
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 font-[Outfit]">
            {t.apps.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            생산성과 편의성을 높이는 다양한 앱들을 한곳에서 만나보세요
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-between items-center bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 shadow-sm">
          <SearchBar onSearch={setSearchQuery} />
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Apps Grid */}
        {filteredApps.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🔍</span>
            </div>
            <p className="text-muted-foreground text-lg">
              {t.apps.noResults}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredApps.map((app) => (
              <AppCard
                key={app.id}
                app={app}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}