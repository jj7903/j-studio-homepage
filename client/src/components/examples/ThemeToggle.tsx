import { AppProvider } from '@/lib/context';
import ThemeToggle from '../ThemeToggle';

export default function ThemeToggleExample() {
  return (
    <AppProvider>
      <div className="p-4">
        <ThemeToggle />
      </div>
    </AppProvider>
  );
}