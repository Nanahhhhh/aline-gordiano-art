import Link from 'next/link';
import Image from 'next/image';
import type { Artwork } from '@/data/artworks';

interface ArtworkCardProps {
  artwork: Artwork;
}

function StatusBadge({ status }: { status: Artwork['status'] }) {
  const map = {
    available: { label: 'Available', className: 'badge-available' },
    sold: { label: 'Sold', className: 'badge-sold' },
    'on request': { label: 'On Request', className: 'badge-request' },
  };
  const { label, className } = map[status];
  return <span className={className}>{label}</span>;
}

export default function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <Link
      href={`/gallery/${artwork.slug}`}
      className="group block hover-lift"
      id={`artwork-card-${artwork.slug}`}
      aria-label={`View ${artwork.title}`}
    >
      <div className="relative overflow-hidden bg-[#EDE8E2] aspect-[4/5]">
        <Image
          src={artwork.image}
          alt={artwork.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#1F1F1F]/0 group-hover:bg-[#1F1F1F]/10 transition-colors duration-500" />
      </div>

      <div className="pt-4 flex flex-col gap-1">
        <div className="flex items-start justify-between gap-2">
          <h3
            className="text-xl leading-tight text-[#1F1F1F] group-hover:text-[#C5521A] transition-colors duration-200"
            style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}
          >
            {artwork.title}
          </h3>
          <StatusBadge status={artwork.status} />
        </div>
        <p
          className="text-xs text-[#6B6B6B]"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          {artwork.year} · {artwork.medium}
        </p>
        <p
          className="text-xs text-[#6B6B6B]"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          {artwork.dimensions}
        </p>
        {artwork.price && artwork.status !== 'sold' && (
          <p
            className="text-sm text-[#C5521A] font-medium mt-1"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            {artwork.price}
          </p>
        )}
      </div>
    </Link>
  );
}
