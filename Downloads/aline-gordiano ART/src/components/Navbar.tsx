'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/gallery', label: 'Gallery' },
  { href: '/shop', label: 'Prints' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F2EE]/90 backdrop-blur-sm border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="flex flex-col gap-0.5" aria-label="Aline Gordiano Art home">
          <span
            className="text-3xl text-[#1F1F1F]"
            style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 300, letterSpacing: '0.18em' }}
          >
            AG
          </span>
          <span
            className="text-[10px] tracking-[0.25em] uppercase text-[#C5521A]"
            style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 500 }}
          >
            Aline Gordiano Art
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs tracking-widest uppercase transition-colors duration-200 ${pathname === link.href ? 'text-[#C5521A] border-b border-[#C5521A] pb-0.5' : 'text-[#1F1F1F] hover:text-[#C5521A]'}`}
              style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 500 }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          id="mobile-menu-btn"
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 bg-[#1F1F1F] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1F1F1F] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1F1F1F] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} bg-[#F5F2EE] border-t border-[#E5E0D8]`}>
        <nav className="flex flex-col py-6 px-8 gap-6" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-widest uppercase transition-colors duration-200 ${pathname === link.href ? 'text-[#C5521A]' : 'text-[#1F1F1F] hover:text-[#C5521A]'}`}
              style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 500 }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
