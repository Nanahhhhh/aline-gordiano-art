import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Prints',
  description:
    'Selected prints by Aline Gordiano. Print releases and final details will be added soon.',
};

export default function ShopPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-5xl mx-auto">
      <div className="mb-20 flex flex-col gap-4 max-w-xl">
        <div className="divider" aria-hidden />
        <h1 className="section-title">Selected Prints</h1>
        <p className="text-sm text-[#6B6B6B] leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
          A dedicated prints section is being prepared. Final print options, sizes and release details will be added once the original artwork photography is complete.
        </p>
      </div>

      <div className="border border-[#E5E0D8] p-10 md:p-14 bg-white/50 flex flex-col gap-8">
        <div>
          <h2 className="text-3xl text-[#1F1F1F] mb-4" style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}>
            Coming Soon
          </h2>
          <p className="text-sm text-[#6B6B6B] leading-relaxed max-w-2xl" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            This page is now set up as a clean placeholder so the site feels finished without showing temporary print prices or example products. Later, you can replace this section with the real print collection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            'Selected artworks only',
            'Final sizes to be confirmed',
            'Launch details coming soon',
          ].map((item) => (
            <div key={item} className="border border-[#E5E0D8] p-6">
              <p className="text-sm text-[#1F1F1F]" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/gallery" className="btn-primary">
            View Original Works
          </Link>
          <Link href="/contact" className="btn-outline">
            Contact for Enquiries
          </Link>
        </div>
      </div>
    </div>
  );
}
