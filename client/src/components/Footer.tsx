import { useAppContext } from '@/lib/context';

export default function Footer() {
  const { t } = useAppContext();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: t.nav.home, href: '#' },
    { name: t.nav.apps, href: '#apps' },
    { name: t.nav.blog, href: '#blog' },
    { name: t.nav.contact, href: '#contact' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-primary font-[Outfit] mb-4">
              J Studio
            </h3>
            <p className="text-muted-foreground text-sm">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    data-testid={`link-footer-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {t.nav.contact}
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Email: contact@apphub.com</p>
              <p>GitHub: github.com/apphub</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} J Studio. {t.footer.rights}.
            </p>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <span className="text-muted-foreground text-sm">
                Made with ❤️
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}