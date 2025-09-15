import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail } from 'lucide-react';
import { useAppContext } from '@/lib/context';

export default function NewsletterSignup() {
  const { t } = useAppContext();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    console.log('Newsletter signup:', email);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail('');
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-secondary/5 to-primary/6" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/4 to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-card/70 backdrop-blur-xl border-primary/20 shadow-2xl shadow-primary/10">
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl shadow-lg">
                <Mail className="h-8 w-8 text-primary" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold font-[Outfit] mb-3">
              {t.newsletter.title}
            </CardTitle>
            <p className="text-muted-foreground text-lg">
              {t.newsletter.subtitle}
            </p>
          </CardHeader>
          <CardContent className="pb-8">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <p className="text-green-600 dark:text-green-400 font-medium text-lg">
                  {t.newsletter.success}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <Input
                  type="email"
                  placeholder={t.newsletter.placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12 shadow-sm"
                  data-testid="input-newsletter-email"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  data-testid="button-newsletter-subscribe"
                  className="h-12 px-8 shadow-lg shadow-primary/25"
                >
                  {isSubmitting ? '...' : t.newsletter.subscribe}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}