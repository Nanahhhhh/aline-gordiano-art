import type { Metadata } from 'next';
import Link from 'next/link';
import ArtworkCard from '@/components/ArtworkCard';
import { getFeaturedArtworks } from '@/data/artworks';

export const metadata: Metadata = {
  title: 'Aline Gordiano Art — Contemporary Acrylic and Oil Paintings, London',
  description:
    'Discover original acrylic and oil paintings and bespoke commission work by Aline Gordiano, a London-based contemporary artist.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Aline Gordiano',
      jobTitle: 'Visual Artist',
      url: 'https://alinegordianoart.com',
      sameAs: ['https://instagram.com/alinegordianoart'],
      address: { '@type': 'PostalAddress', addressLocality: 'London', addressCountry: 'GB' },
      description: 'London-based contemporary artist creating original acrylic and oil paintings and bespoke commissions.',
    },
    {
      '@type': 'WebSite',
      name: 'Aline Gordiano Art',
      url: 'https://alinegordianoart.com',
    },
  ],
};

export default function HomePage() {
  const featured = getFeaturedArtworks().slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#F5F2EE] overflow-hidden pt-20">
        {/* Decorative background circles */}
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #C5521A 0%, transparent 70%)' }}
          aria-hidden
        />
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #D4632F 0%, transparent 70%)' }}
          aria-hidden
        />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-12 text-center fade-in">
          <p
            className="text-xs tracking-[0.4em] uppercase text-[#C5521A] mb-8"
            style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 500 }}
          >
            London · United Kingdom
          </p>
          <div
            className="text-[clamp(5rem,15vw,12rem)] leading-none text-[#1F1F1F] mb-4"
            style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 300, letterSpacing: '0.15em' }}
            aria-label="AG — Aline Gordiano Art"
          >
            AG
          </div>
          <h1
            className="text-[clamp(2rem,5vw,4rem)] font-light text-[#1F1F1F] mb-2"
            style={{ fontFamily: 'var(--font-cormorant), serif', letterSpacing: '-0.01em' }}
          >
            Aline Gordiano Art
          </h1>
          <p
            className="text-base text-[#6B6B6B] tracking-widest uppercase mb-12"
            style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 400 }}
          >
            ORIGINAL ACRYLIC AND OIL PAINTINGS SHAPED BY COLOUR, TEXTURE AND ATMOSPHERE.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gallery" className="btn-primary" id="hero-view-gallery">
              View Gallery
            </Link>
            
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] tracking-widest uppercase text-[#6B6B6B]" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            Scroll
          </span>
          <div className="w-px h-12 bg-[#C5521A] animate-pulse" />
        </div>
      </section>

      {/* Featured Artworks */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center gap-4">
          <div className="divider" aria-hidden />
          <h2 className="section-title">Featured Works</h2>
          <p
            className="text-sm text-[#6B6B6B] max-w-md leading-relaxed"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            A curated selection of original acrylic and oil paintings available for purchase or enquiry.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {featured.map((artwork) => (
            <ArtworkCard key={artwork.slug} artwork={artwork} />
          ))}
        </div>
        <div className="text-center mt-14">
          <Link href="/gallery" className="btn-outline" id="featured-view-all">
            View Full Gallery
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-[#1F1F1F] py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <div className="divider bg-[#C5521A]" aria-hidden />
            <h2
              className="text-[clamp(2.5rem,6vw,4rem)] text-[#F5F2EE] font-light leading-tight"
              style={{ fontFamily: 'var(--font-cormorant), serif' }}
            >
              The Artist
            </h2>
            <p className="text-sm text-[#A09890] leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              Aline Gordiano is a London-based artist creating original acrylic and oil paintings, with a focus on expressive portraiture, luminous landscapes and painterly texture.
            </p>
            <p className="text-sm text-[#A09890] leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              Based in London, she works from her studio producing original paintings, limited edition prints, and accepting commissions for bespoke artworks.
            </p>
            <Link href="/about" className="btn-outline border-[#F5F2EE] text-[#F5F2EE] hover:bg-[#F5F2EE] hover:text-[#1F1F1F] self-start" id="about-read-more">
              Read More
            </Link>
          </div>
          <div className="relative h-80 md:h-[420px] bg-[#2E2A26] flex items-center justify-center overflow-hidden">
            <span
              className="text-[8rem] text-[#C5521A]/20"
              style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 300, letterSpacing: '0.15em' }}
            >
              AG
            </span>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 px-6 lg:px-12 max-w-4xl mx-auto text-center">
        <div className="divider mx-auto mb-8" aria-hidden />
        <h2 className="section-title mb-4">Follow the Journey</h2>
        <p
          className="text-sm text-[#6B6B6B] mb-8 max-w-sm mx-auto leading-relaxed"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          Studio updates, works in progress and new collections — all on Instagram.
        </p>
        <a
          href="https://instagram.com/alinegordianoart"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
          id="instagram-link"
        >
          @alinegordianoart
        </a>
      </section>

      {/* Contact CTA */}
      
    </>
  );
}
