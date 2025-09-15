import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useAppContext } from '@/lib/context';

export default function Hero() {
  const { t } = useAppContext();

  const handleExploreApps = () => {
    const appsSection = document.getElementById('apps');
    appsSection?.scrollIntoView({ behavior: 'smooth' });
    console.log('Explore apps clicked');
  };

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Sophisticated gradient background with patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-primary/4" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/3 to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/8 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/4 to-transparent rounded-full" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium mb-8">
            ✨ 혁신적인 앱 경험을 시작하세요
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-[Outfit] leading-tight">
          {t.hero.title.split('\\n').map((line, index) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          {t.hero.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={handleExploreApps}
            data-testid="button-explore-apps"
            className="group shadow-lg shadow-primary/25 px-8 py-3"
          >
            {t.hero.cta}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        {/* Feature highlights */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-primary text-xl">🚀</span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">빠른 성능</h3>
            <p className="text-sm text-muted-foreground">최적화된 앱으로 빠른 작업 처리</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-primary text-xl">🎨</span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">세련된 디자인</h3>
            <p className="text-sm text-muted-foreground">직관적이고 아름다운 사용자 경험</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-primary text-xl">🔒</span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">안전한 보안</h3>
            <p className="text-sm text-muted-foreground">신뢰할 수 있는 보안 시스템</p>
          </div>
        </div>
      </div>
    </section>
  );
}