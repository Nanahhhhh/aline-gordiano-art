import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-24">
            <div className="text-center flex flex-col items-center gap-8">
                <div
                    className="text-[clamp(6rem,20vw,14rem)] text-[#E5E0D8] leading-none"
                    style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 300 }}
                    aria-hidden
                >
                    404
                </div>
                <div className="divider mx-auto" aria-hidden />
                <h1
                    className="text-[clamp(1.5rem,4vw,2.5rem)] text-[#1F1F1F] font-light"
                    style={{ fontFamily: 'var(--font-cormorant), serif' }}
                >
                    Page Not Found
                </h1>
                <p className="text-sm text-[#6B6B6B] max-w-sm leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                    The page you are looking for may have moved or no longer exists. Let&apos;s get you back to the gallery.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/" className="btn-primary" id="not-found-home">
                        Return Home
                    </Link>
                    <Link href="/gallery" className="btn-outline" id="not-found-gallery">
                        View Gallery
                    </Link>
                </div>
            </div>
        </div>
    );
}
