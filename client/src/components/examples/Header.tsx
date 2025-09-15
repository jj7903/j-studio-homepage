import { AppProvider } from '@/lib/context';
import Header from '../Header';

export default function HeaderExample() {
  return (
    <AppProvider>
      <Header />
    </AppProvider>
  );
}