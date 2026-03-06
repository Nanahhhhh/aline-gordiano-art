import type { Metadata } from 'next';
import ArtworkCard from '@/components/ArtworkCard';
import { artworks } from '@/data/artworks';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Browse original acrylic paintings by Aline Gordiano — London-based contemporary artist. View available works, sold pieces and selected originals.',
};

export default function GalleryPage() {
  const available = artworks.filter((artwork) => artwork.status !== 'sold');
  const sold = artworks.filter((artwork) => artwork.status === 'sold');

  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="mb-16 flex flex-col gap-4 max-w-2xl">
        <div className="divider" aria-hidden />
        <h1 className="section-title">Gallery</h1>
        <p
          className="text-sm text-[#6B6B6B] max-w-lg leading-relaxed"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          Original acrylic paintings on canvas and linen. Each work is presented as a unique piece, with selected works marked as available or sold.
        </p>
      </div>

      <section className="mb-20">
        <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
          <h2 className="text-3xl text-[#1F1F1F]" style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}>
            Available Works
          </h2>
          <p className="text-xs tracking-widest uppercase text-[#A09890]" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            {available.length} works
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {available.map((artwork) => (
            <ArtworkCard key={artwork.slug} artwork={artwork} />
          ))}
        </div>
      </section>

      {sold.length > 0 && (
        <section>
          <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
            <h2 className="text-3xl text-[#1F1F1F]" style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}>
              Sold Works
            </h2>
            <p className="text-xs tracking-widest uppercase text-[#A09890]" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              {sold.length} works
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {sold.map((artwork) => (
              <ArtworkCard key={artwork.slug} artwork={artwork} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
