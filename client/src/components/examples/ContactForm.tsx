import { AppProvider } from '@/lib/context';
import ContactForm from '../ContactForm';

export default function ContactFormExample() {
  return (
    <AppProvider>
      <ContactForm />
    </AppProvider>
  );
}