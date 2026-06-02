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
  metadataBase: new URL('https://alinegordianoart.com'),
  title: {
    default: 'Aline Gordiano | Contemporary Painter in London | Original Acrylic and Oil Paintings',
  },
  description:
    'Aline Gordiano is a London-based contemporary artist creating original acrylic and oil paintings and accepting commission work. Explore original artworks, prints and bespoke commissions.',
  keywords: [
    'London artist',
    'original paintings London',
    'acrylic artist London',
    'oil artist London',
    'pet portrait artist London',

    'contemporary art',
    'Aline Gordiano',
  ],
  authors: [{ name: 'Aline Gordiano' }],
  creator: 'Aline Gordiano',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://alinegordianoart.com',
    siteName: 'Aline Gordiano Art',
    title: 'Aline Gordiano Art — Contemporary Acrylic and Oil Paintings, London',
    description:
      'Discover original acrylic and oil paintings and commission work by London-based artist Aline Gordiano.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aline Gordiano Art — Contemporary Acrylic and Oil Paintings',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aline Gordiano Art — Contemporary Acrylic and Oil Paintings, London',
    description:
      'Discover original acrylic and oil paintings and commission work by London-based artist Aline Gordiano.',
    images: ['/og-image.jpg'],
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
