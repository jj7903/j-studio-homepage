import { AppProvider } from '@/lib/context';
import Hero from '../Hero';

export default function HeroExample() {
  return (
    <AppProvider>
      <Hero />
    </AppProvider>
  );
}