import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ArtworkCard from '@/components/ArtworkCard';
import { getFeaturedArtworks } from '@/data/artworks';

export const metadata: Metadata = {
  title: 'Aline Gordiano | Contemporary Painter in London | Original Acrylic and Oil Paintings',
  description:
    'Original acrylic and oil paintings shaped by colour, texture and atmosphere. Explore the work of London-based artist Aline Gordiano.',
  openGraph: {
    title: 'Aline Gordiano | Contemporary Painter in London | Original Acrylic and Oil Paintings',
    description:
      'Original acrylic and oil paintings shaped by colour, texture and atmosphere. Explore the work of London-based artist Aline Gordiano.',
    images: [{ url: '/artworks/golden-rain.jpeg', alt: 'Golden Rain by Aline Gordiano' }],
    siteName: 'Aline Gordiano Art',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Aline Gordiano',
      jobTitle: 'Visual Artist',
      url: 'https://aline-gordiano-art.vercel.app',
      sameAs: ['https://instagram.com/alinegordianoart'],
      address: { '@type': 'PostalAddress', addressLocality: 'London', addressCountry: 'GB' },
      description:
        'London-based contemporary artist creating original acrylic and oil paintings and selected prints.',
    },
    {
      '@type': 'WebSite',
      name: 'Aline Gordiano Art',
      url: 'https://aline-gordiano-art.vercel.app',
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

      <section className="relative min-h-screen flex items-center justify-center bg-[#F5F2EE] overflow-hidden pt-20">
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

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center w-full fade-in">
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <p
              className="text-xs tracking-[0.4em] uppercase text-[#C5521A] mb-8"
              style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 500 }}
            >
              London · United Kingdom
            </p>
            <h1
              className="text-[clamp(2.8rem,7vw,5.5rem)] font-light text-[#1F1F1F] mb-3 leading-[0.95] premium-gradient-text"
              style={{ fontFamily: 'var(--font-cormorant), serif', letterSpacing: '-0.02em' }}
            >
              Aline Gordiano Art
            </h1>
            <p
              className="text-base text-[#6B6B6B] tracking-widest uppercase mb-5"
              style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 400 }}
            >
              Original acrylic and oil paintings shaped by colour, texture and atmosphere.
            </p>
            <p
              className="text-sm text-[#6B6B6B] max-w-xl leading-relaxed mb-10 mx-auto lg:mx-0"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              Aline Gordiano is a London-based artist creating original acrylic and oil paintings inspired by colour, atmosphere and emotion, with a focus on expressive portraiture, luminous landscapes and rich painterly texture.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/gallery" className="btn-primary" id="hero-view-gallery">
                View Gallery
              </Link>
              <Link href="/about" className="btn-outline" id="hero-about-artist">
                About the Artist
              </Link>
            </div>
          </div>

          <div className="relative w-full max-w-[540px] mx-auto lg:mx-0 aspect-[4/5] overflow-hidden bg-[#EDE8E2] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <Image
              src="/artworks/golden-rain.jpeg"
              alt="Golden Rain by Aline Gordiano"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 40vw"
            />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] tracking-widest uppercase text-[#6B6B6B]" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            Scroll
          </span>
          <div className="w-px h-12 bg-[#C5521A] animate-pulse" />
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center gap-4">
          <div className="divider" aria-hidden />
          <h2 className="section-title">Selected Works</h2>
          <p
            className="text-sm text-[#6B6B6B] max-w-md leading-relaxed"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            A curated selection of original acrylic and oil paintings exploring portraiture, landscape, colour and texture.
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

      <section className="bg-[#1F1F1F] py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6 order-2 md:order-1">
            <div className="divider bg-[#C5521A]" aria-hidden />
            <h2
              className="text-[clamp(2.5rem,6vw,4rem)] text-[#F5F2EE] font-light leading-tight"
              style={{ fontFamily: 'var(--font-cormorant), serif' }}
            >
              About the Artist
            </h2>
            <p className="text-sm text-[#A09890] leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              Aline Gordiano is a Brazilian artist based in London. Her practice centres on original acrylic painting, with a focus on expressive surfaces, atmosphere and emotionally resonant imagery.
            </p>
            <p className="text-sm text-[#A09890] leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              Based in London, she develops paintings that move between portraiture and landscape, balancing colour, structure and texture in a contemporary visual language.
            </p>
            <Link href="/about" className="btn-outline border-[#F5F2EE] text-[#F5F2EE] hover:bg-[#F5F2EE] hover:text-[#1F1F1F] self-start" id="about-read-more">
              Read More
            </Link>
          </div>
          <div className="relative h-80 md:h-[480px] bg-[#2E2A26] overflow-hidden order-1 md:order-2">
            <Image
              src="/artworks/aline-gordiano-artist.jpeg"
              alt="Portrait of Aline Gordiano"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>



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
    </>
  );
}
