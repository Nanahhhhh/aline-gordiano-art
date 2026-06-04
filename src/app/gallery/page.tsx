import type { Metadata } from 'next';
import ArtworkCard from '@/components/ArtworkCard';
import { artworks } from '@/data/artworks';

export const metadata: Metadata = {
    title: 'Gallery',
    description:
        'Browse original acrylic and oil paintings by Aline Gordiano — London-based contemporary artist. Each work is available to buy or enquire about.',
};

export default function GalleryPage() {
    return (
        <div className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
            <div className="mb-16 flex flex-col gap-4">
                <div className="divider" aria-hidden />
                <h1 className="section-title">Gallery</h1>
                <p
                    className="text-sm text-[#6B6B6B] max-w-lg leading-relaxed"
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                    Original acrylic and oil paintings on canvas and linen. Each work is one-of-a-kind. Contact Aline to enquire about availability or purchase.
                </p>
            </div>


        </div>
    );
}
