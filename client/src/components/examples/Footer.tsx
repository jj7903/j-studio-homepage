import { AppProvider } from '@/lib/context';
import Footer from '../Footer';

export default function FooterExample() {
  return (
    <AppProvider>
      <Footer />
    </AppProvider>
  );
}