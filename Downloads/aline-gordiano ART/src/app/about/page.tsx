import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Aline Gordiano — a London-based contemporary artist whose practice centres on expressive acrylic painting, colour and light.',
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-6xl mx-auto">
      <div className="mb-20 flex flex-col gap-4 max-w-xl">
        <div className="divider" aria-hidden />
        <h1 className="section-title">About Aline</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="relative aspect-[3/4] bg-[#EDE8E2] overflow-hidden">
          <Image
            src="/artist-placeholder.svg"
            alt="Aline Gordiano portrait placeholder"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority
          />
        </div>

        <div className="flex flex-col gap-10">
          <div>
            <h2
              className="text-2xl text-[#C5521A] mb-4"
              style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}
            >
              Artist Statement
            </h2>
            <p className="text-sm leading-relaxed text-[#6B6B6B]" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              Aline Gordiano is a Brazilian artist based in London. Her work centres on expressive painting, with a focus on colour, texture and atmosphere.
            </p>
          </div>

          <div>
            <h2
              className="text-2xl text-[#C5521A] mb-4"
              style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}
            >
              Practice
            </h2>
            <p className="text-sm leading-relaxed text-[#6B6B6B]" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              Working primarily with acrylic on canvas, she creates original pieces that explore emotional landscapes, movement and quiet moments of contemplation. Her paintings are often built through layered marks, subtle contrasts and luminous colour.
            </p>
          </div>

          <div>
            <h2
              className="text-2xl text-[#C5521A] mb-4"
              style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}
            >
              Works & Availability
            </h2>
            <p className="text-sm leading-relaxed text-[#6B6B6B]" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              Her practice currently focuses on unique original works, with selected prints available on chosen pieces. This website is structured to present original paintings clearly, with room to add final artwork photography, pricing and availability.
            </p>
            <p className="text-sm leading-relaxed text-[#6B6B6B] mt-4" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              <strong className="text-[#1F1F1F] font-medium">Based in London, United Kingdom.</strong>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link href="/gallery" className="btn-primary" id="about-view-gallery">
              View Gallery
            </Link>
            <Link href="/contact" className="btn-outline" id="about-contact">
              Artwork Enquiry
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
