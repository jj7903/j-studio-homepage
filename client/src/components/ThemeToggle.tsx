import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppContext } from '@/lib/context';

export default function ThemeToggle() {
  const { theme, setTheme } = useAppContext();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    console.log('Theme toggled to:', theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      data-testid="button-theme-toggle"
      className="hover-elevate"
    >
      {theme === 'light' ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </Button>
  );
}