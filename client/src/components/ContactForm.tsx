import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Send } from 'lucide-react';
import { useAppContext } from '@/lib/context';

export default function ContactForm() {
  const { t } = useAppContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    console.log('Contact form submission:', formData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Sophisticated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{
        backgroundImage: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, hsl(var(--primary)) 20deg, transparent 40deg)`,
        backgroundSize: '100px 100px'
      }} />
      
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-0 shadow-2xl shadow-black/10 bg-card/80 backdrop-blur-xl">
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl shadow-lg">
                <Send className="h-8 w-8 text-primary" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold font-[Outfit] mb-3">
              {t.contact.title}
            </CardTitle>
            <p className="text-muted-foreground text-lg">
              {t.contact.subtitle}
            </p>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">✅</span>
                </div>
                <p className="text-green-600 dark:text-green-400 font-medium text-xl">
                  {t.contact.success}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.name} *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="h-11 shadow-sm"
                      data-testid="input-contact-name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.email} *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="h-11 shadow-sm"
                      data-testid="input-contact-email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.subject}
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className="h-11 shadow-sm"
                    data-testid="input-contact-subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.message} *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={6}
                    required
                    className="shadow-sm"
                    data-testid="textarea-contact-message"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 shadow-lg shadow-primary/25"
                  data-testid="button-contact-send"
                >
                  {isSubmitting ? '전송 중...' : t.contact.send}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}