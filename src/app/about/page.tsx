import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'About',
    description:
        'Learn about Aline Gordiano — a London-based contemporary artist whose practice centres on expressive acrylic and oil painting, colour and light.',
};

export default function AboutPage() {
    return (
        <div className="pt-32 pb-24 px-6 lg:px-12 max-w-6xl mx-auto">
            {/* Page heading */}
            <div className="mb-20 flex flex-col gap-4 max-w-xl">
                <div className="divider" aria-hidden />
                <h1 className="section-title">About Aline</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                {/* Portrait placeholder */}
                <div className="relative aspect-[3/4] bg-[#EDE8E2] flex items-center justify-center overflow-hidden">
                    <div
                        className="absolute inset-0 bg-gradient-to-b from-[#D4A080]/40 via-[#C5521A]/20 to-[#EDE8E2]"
                        aria-hidden
                    />
                    <span
                        className="relative text-[7rem] text-[#C5521A]/25"
                        style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 300, letterSpacing: '0.15em' }}
                        aria-hidden
                    >
                        AG
                    </span>
                </div>

                {/* Bio */}
                <div className="flex flex-col gap-10">
                    {/* Creative Journey */}
                    <div>
                        <h2
                            className="text-2xl text-[#C5521A] mb-4"
                            style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}
                        >
                            Creative Journey
                        </h2>
                        <p className="text-sm leading-relaxed text-[#6B6B6B]" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                            Aline Gordiano discovered her love of painting early in life, experimenting with colour and texture as a way of making sense of the world around her. Her artistic journey has been shaped by years of exploration with acrylics and oils — media she fell in love with for their versatility, vibrancy and directness.
                        </p>
                    </div>

                    {/* Inspiration */}
                    <div>
                        <h2
                            className="text-2xl text-[#C5521A] mb-4"
                            style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}
                        >
                            Inspiration
                        </h2>
                        <p className="text-sm leading-relaxed text-[#6B6B6B]" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                            Light is at the heart of everything Aline creates. Whether capturing the golden hour falling across London rooftops or the quiet glow of a still life, she is always chasing the moment when light transforms the ordinary into something luminous. Colour is her primary language — warm terracottas, burnt oranges, soft ivories and rich earthy tones appear throughout her work.
                        </p>
                    </div>

                    {/* Painting Style */}
                    <div>
                        <h2
                            className="text-2xl text-[#C5521A] mb-4"
                            style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}
                        >
                            Painting Style
                        </h2>
                        <p className="text-sm leading-relaxed text-[#6B6B6B]" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                            Aline&apos;s work sits between abstraction and representation. Her paintings are built through layers — transparent washes, gestural marks and areas of dense impasto — creating surfaces that reward close looking. She is drawn to the expressive potential of the mark itself, allowing the process of painting to remain visible in the finished work.
                        </p>
                    </div>

                    {/* Studio Practice */}
                    <div>
                        <h2
                            className="text-2xl text-[#C5521A] mb-4"
                            style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}
                        >
                            Studio Practice
                        </h2>
                        <p className="text-sm leading-relaxed text-[#6B6B6B]" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                            Working from her studio in London, Aline maintains a daily painting practice. She produces original works on canvas and linen alongside limited edition fine art prints and accepts a small number of bespoke commissions each year. Each piece — large or small — is created with care and intention.
                        </p>
                        <p className="text-sm leading-relaxed text-[#6B6B6B] mt-4" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                            <strong className="text-[#1F1F1F] font-medium">Based in London, United Kingdom.</strong>
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-2">
                        <Link href="/gallery" className="btn-primary" id="about-view-gallery">
                            View Gallery
                        </Link>
                        <Link href="/commissions" className="btn-outline" id="about-commission">
                            Commission a Work
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
