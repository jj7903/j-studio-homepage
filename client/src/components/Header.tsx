import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppContext } from '@/lib/context';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

export default function Header() {
  const { t } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('Mobile menu toggled:', !isMenuOpen);
  };

  const navItems = [
    { key: 'home', href: '#' },
    { key: 'apps', href: '#apps' },
    { key: 'blog', href: '#blog' },
    { key: 'contact', href: '#contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-primary font-[Outfit]">
              J Studio
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid={`link-nav-${item.key}`}
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </a>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover-elevate"
              onClick={toggleMenu}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="block px-4 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                  data-testid={`link-mobile-${item.key}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav[item.key as keyof typeof t.nav]}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}