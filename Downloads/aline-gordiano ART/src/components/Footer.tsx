import Link from 'next/link';

const footerLinks = [
  { href: '/gallery', label: 'Gallery' },
  { href: '/shop', label: 'Prints' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const legalLinks = [
  { href: '/legal/privacy', label: 'Privacy Policy' },
  { href: '/legal/terms', label: 'Terms of Use' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#1F1F1F] text-[#F5F2EE] mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <div>
              <p
                className="text-4xl tracking-widest text-[#F5F2EE]"
                style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 300, letterSpacing: '0.25em' }}
              >
                AG
              </p>
              <p
                className="text-[10px] tracking-[0.3em] text-[#C5521A] uppercase mt-1"
                style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 500 }}
              >
                Aline Gordiano Art
              </p>
            </div>
            <p className="text-sm text-[#A09890] leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              Original acrylic paintings by London-based artist Aline Gordiano. Unique works and selected prints.
            </p>
          </div>

          <div>
            <h3
              className="text-xs tracking-widest uppercase text-[#C5521A] mb-6"
              style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 600 }}
            >
              Navigate
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#A09890] hover:text-[#F5F2EE] transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="text-xs tracking-widest uppercase text-[#C5521A] mb-6"
              style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 600 }}
            >
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:alinegordianoart@gmail.com"
                  className="text-sm text-[#A09890] hover:text-[#F5F2EE] transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  alinegordianoart@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/alinegordianoart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#A09890] hover:text-[#C5521A] transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  @alinegordianoart
                </a>
              </li>
              <li>
                <span className="text-sm text-[#A09890]" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  London, United Kingdom
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2E2E2E] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6B6B6B]" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            © {year} Aline Gordiano Art. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-[#6B6B6B] hover:text-[#A09890] transition-colors duration-200"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
