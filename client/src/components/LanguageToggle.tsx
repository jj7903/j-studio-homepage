import { Button } from '@/components/ui/button';
import { useAppContext } from '@/lib/context';

export default function LanguageToggle() {
  const { language, setLanguage } = useAppContext();

  const toggleLanguage = () => {
    const newLang = language === 'ko' ? 'en' : 'ko';
    setLanguage(newLang);
    console.log('Language toggled to:', newLang);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      data-testid="button-language-toggle"
      className="hover-elevate"
    >
      {language === 'ko' ? 'EN' : '한국어'}
    </Button>
  );
}