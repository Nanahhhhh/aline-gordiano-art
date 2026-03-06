import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Analytics from './analytics';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aline-gordiano-art.vercel.app'),
  title: {
    default: 'Aline Gordiano Art — Original Paintings, London',
    template: '%s | Aline Gordiano Art',
  },
  description:
    'Original acrylic paintings and selected prints by Aline Gordiano, a London-based contemporary artist.',
  keywords: [
    'London artist',
    'original paintings London',
    'acrylic artist London',
    'contemporary art London',
    'Brazilian artist in London',
    'Aline Gordiano',
  ],
  authors: [{ name: 'Aline Gordiano' }],
  creator: 'Aline Gordiano',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://aline-gordiano-art.vercel.app',
    siteName: 'Aline Gordiano Art',
    title: 'Aline Gordiano Art — Original Paintings, London',
    description:
      'Discover original acrylic paintings and selected prints by London-based artist Aline Gordiano.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aline Gordiano Art — Original Paintings',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aline Gordiano Art — Original Paintings, London',
    description:
      'Discover original acrylic paintings and selected prints by London-based artist Aline Gordiano.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#F5F2EE]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
