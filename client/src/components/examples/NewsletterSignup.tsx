import { AppProvider } from '@/lib/context';
import NewsletterSignup from '../NewsletterSignup';

export default function NewsletterSignupExample() {
  return (
    <AppProvider>
      <NewsletterSignup />
    </AppProvider>
  );
}