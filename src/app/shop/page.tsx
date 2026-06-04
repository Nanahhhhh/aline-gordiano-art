import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Shop — Prints & Originals',
    description:
        'Shop original acrylic and oil paintings and fine art prints by Aline Gordiano, London-based contemporary artist. Available in A4, A3 and A2.',
};

const prints = [
    {
        id: 'print-a4',
        size: 'A4',
        dims: '210 × 297 mm',
        price: '£45',
        desc: 'Perfect for smaller walls, shelves and home office spaces.',
    },
    {
        id: 'print-a3',
        size: 'A3',
        dims: '297 × 420 mm',
        price: '£75',
        desc: 'A popular mid-size print, ideal for bedroom and living room walls.',
    },
    {
        id: 'print-a2',
        size: 'A2',
        dims: '420 × 594 mm',
        price: '£120',
        desc: 'A statement piece for larger spaces. Stunning framed or unframed.',
    },
];

export default function ShopPage() {
    return (
        <div className="pt-32 pb-24 px-6 lg:px-12 max-w-6xl mx-auto">
            {/* Heading */}
            <div className="mb-20 flex flex-col gap-4 max-w-xl">
                <div className="divider" aria-hidden />
                <h1 className="section-title">Shop</h1>
                <p className="text-sm text-[#6B6B6B] leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                    Browse original paintings and limited edition fine art prints. Each print is produced on premium archival paper using museum-quality inks to ensure the colours last a lifetime.
                </p>
            </div>

            {/* Original Paintings */}
            <section className="mb-24">
                <h2
                    className="text-3xl text-[#1F1F1F] mb-6"
                    style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}
                >
                    Original Paintings
                </h2>
                <p className="text-sm text-[#6B6B6B] mb-10 max-w-lg leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                    All original acrylic and oil paintings are one-of-a-kind works. Customers wishing to purchase an original are invited to contact Aline directly to discuss the work and arrange payment and delivery.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/gallery" className="btn-primary" id="shop-view-gallery">
                        View Gallery
                    </Link>
                    <Link href="/contact" className="btn-outline" id="shop-contact">
                        Contact to Purchase
                    </Link>
                </div>
            </section>

            {/* Prints */}
            <section>
                <h2
                    className="text-3xl text-[#1F1F1F] mb-12"
                    style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}
                >
                    Fine Art Prints
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {prints.map((p) => (
                        <div
                            key={p.id}
                            id={p.id}
                            className="border border-[#E5E0D8] p-8 flex flex-col gap-4 hover:border-[#C5521A] transition-colors duration-300"
                        >
                            <div
                                className="text-6xl text-[#C5521A]/30"
                                style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 300 }}
                                aria-hidden
                            >
                                {p.size}
                            </div>
                            <div>
                                <h3
                                    className="text-2xl text-[#1F1F1F] mb-1"
                                    style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}
                                >
                                    {p.size} Print
                                </h3>
                                <p className="text-xs text-[#A09890]" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                                    {p.dims}
                                </p>
                            </div>
                            <p className="text-sm text-[#6B6B6B] leading-relaxed flex-1" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                                {p.desc}
                            </p>
                            <p
                                className="text-2xl text-[#C5521A]"
                                style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}
                            >
                                From {p.price}
                            </p>
                            <Link href="/contact" className="btn-outline text-center">
                                Enquire
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Shipping */}
                <div className="border border-[#E5E0D8] p-10">
                    <h3
                        className="text-2xl text-[#1F1F1F] mb-6"
                        style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}
                    >
                        Shipping Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { region: 'United Kingdom', info: 'Free shipping on all prints. Delivered in 5–7 business days via Royal Mail tracked service.' },
                            { region: 'Europe', info: 'Flat rate shipping of £12. Delivered in 7–14 business days via tracked courier.' },
                            { region: 'United States & Canada', info: 'Flat rate shipping of £18. Delivered in 10–18 business days via tracked courier.' },
                            { region: 'Rest of World', info: 'Flat rate shipping of £22. Delivery times vary by destination. Please allow 2–4 weeks.' },
                        ].map((item) => (
                            <div key={item.region}>
                                <h4
                                    className="text-base text-[#1F1F1F] mb-2"
                                    style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 500 }}
                                >
                                    {item.region}
                                </h4>
                                <p className="text-sm text-[#6B6B6B] leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                                    {item.info}
                                </p>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-[#A09890] mt-8" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                        All prints are carefully packaged in rigid mailers or tubes to ensure they arrive in perfect condition. A tracking number is provided for all orders. For returns or issues, please contact{' '}
                        <a href="mailto:alinegordianoart@gmail.com" className="text-[#C5521A] underline underline-offset-2">
                            alinegordianoart@gmail.com
                        </a>.
                    </p>
                </div>
            </section>
        </div>
    );
}
