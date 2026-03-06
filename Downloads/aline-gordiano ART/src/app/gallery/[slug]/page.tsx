import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { artworks, getArtworkBySlug } from '@/data/artworks';
import ContactForm from '@/components/ContactForm';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return artworks.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artwork = getArtworkBySlug(slug);
  if (!artwork) return { title: 'Artwork Not Found' };
  return {
    title: `${artwork.title} (${artwork.year})`,
    description:
      artwork.description ?? `${artwork.title} — ${artwork.medium}, ${artwork.dimensions}. By Aline Gordiano.`,
    openGraph: {
      images: [{ url: artwork.image, alt: artwork.alt }],
    },
  };
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { label: string; className: string }> = {
    available: { label: 'Available', className: 'badge-available' },
    sold: { label: 'Sold', className: 'badge-sold' },
    'on request': { label: 'On Request', className: 'badge-request' },
  };
  const { label, className } = map[status] ?? { label: status, className: '' };
  return <span className={className}>{label}</span>;
}

export default async function ArtworkDetailPage({ params }: Props) {
  const { slug } = await params;
  const artwork = getArtworkBySlug(slug);
  if (!artwork) notFound();

  const prefilledSubject = `Enquiry about "${artwork.title}"`;

  return (
    <div className="pt-28 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <nav className="flex items-center gap-2 text-xs text-[#6B6B6B] mb-12" aria-label="Breadcrumb">
        <Link href="/gallery" className="hover:text-[#C5521A] transition-colors">
          Gallery
        </Link>
        <span>/</span>
        <span className="text-[#1F1F1F]">{artwork.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="relative aspect-[4/5] bg-[#EDE8E2] overflow-hidden">
          <Image
            src={artwork.image}
            alt={artwork.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="flex flex-col gap-6 lg:sticky lg:top-28">
          <div className="flex items-start justify-between gap-4">
            <h1
              className="text-[clamp(2rem,4vw,3rem)] text-[#1F1F1F] leading-tight"
              style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}
            >
              {artwork.title}
            </h1>
            <StatusBadge status={artwork.status} />
          </div>

          <div className="divider" aria-hidden />

          <dl className="grid grid-cols-2 gap-y-4 gap-x-8">
            {[
              { label: 'Year', value: artwork.year },
              { label: 'Medium', value: artwork.medium },
              { label: 'Dimensions', value: artwork.dimensions },
              artwork.price ? { label: 'Price', value: artwork.price } : null,
            ]
              .filter(Boolean)
              .map((item) => (
                <div key={item!.label}>
                  <dt
                    className="text-[10px] tracking-widest uppercase text-[#A09890] mb-1"
                    style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 600 }}
                  >
                    {item!.label}
                  </dt>
                  <dd
                    className="text-sm text-[#1F1F1F]"
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                  >
                    {String(item!.value)}
                  </dd>
                </div>
              ))}
          </dl>

          {artwork.description && (
            <p
              className="text-sm text-[#6B6B6B] leading-relaxed border-t border-[#E5E0D8] pt-6"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              {artwork.description}
            </p>
          )}

          {artwork.status !== 'sold' && (
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a href="#enquire" className="btn-primary" id={`enquire-${artwork.slug}`}>
                Enquire About This Work
              </a>
              <Link href="/gallery" className="btn-outline">
                Back to Gallery
              </Link>
            </div>
          )}

          {artwork.status === 'sold' && (
            <div className="p-4 border border-[#E5E0D8] text-sm text-[#6B6B6B]" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              This work has been sold. Please get in touch to enquire about currently available works.
            </div>
          )}
        </div>
      </div>

      {artwork.status !== 'sold' && (
        <div id="enquire" className="mt-24 max-w-2xl">
          <div className="divider mb-8" aria-hidden />
          <h2 className="section-title mb-2" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
            Artwork Enquiry
          </h2>
          <p className="text-sm text-[#6B6B6B] mb-10" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            Fill in the form below to enquire about availability, price, shipping or purchase details.
          </p>
          <ContactForm prefilledSubject={prefilledSubject} />
        </div>
      )}
    </div>
  );
}
