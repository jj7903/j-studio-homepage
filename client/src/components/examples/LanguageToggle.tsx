import { AppProvider } from '@/lib/context';
import LanguageToggle from '../LanguageToggle';

export default function LanguageToggleExample() {
  return (
    <AppProvider>
      <div className="p-4">
        <LanguageToggle />
      </div>
    </AppProvider>
  );
}