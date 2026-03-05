import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Use',
    description: 'Terms of Use for Aline Gordiano Art.',
};

export default function TermsPage() {
    const year = new Date().getFullYear();
    return (
        <div className="pt-32 pb-24 px-6 lg:px-12 max-w-3xl mx-auto">
            <div className="mb-12">
                <div className="divider mb-6" aria-hidden />
                <h1 className="section-title mb-4">Terms of Use</h1>
                <p className="text-xs text-[#A09890]" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                    Last updated: March {year}
                </p>
            </div>

            <div className="flex flex-col gap-10 text-sm text-[#6B6B6B] leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                <section>
                    <h2 className="text-xl text-[#1F1F1F] mb-4" style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}>
                        1. Acceptance of Terms
                    </h2>
                    <p>
                        By accessing and using alinegordianoart.com, you agree to be bound by these Terms of Use. If you do not agree, please do not use this website.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl text-[#1F1F1F] mb-4" style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}>
                        2. Copyright & Intellectual Property
                    </h2>
                    <p>
                        All artwork, images, text and other content on this website is the intellectual property of Aline Gordiano Art and is protected by copyright law. You may not reproduce, distribute, display or use any content from this site without prior written permission from Aline Gordiano.
                    </p>
                    <p className="mt-4">
                        © {year} Aline Gordiano Art. All Rights Reserved.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl text-[#1F1F1F] mb-4" style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}>
                        3. Purchases & Commissions
                    </h2>
                    <p>
                        All sales of original artworks and prints are final unless the artwork arrives damaged. Commission deposits are non-refundable once artwork creation has commenced. Full terms for each transaction will be confirmed by email before any payment is taken.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl text-[#1F1F1F] mb-4" style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}>
                        4. Limitation of Liability
                    </h2>
                    <p>
                        Aline Gordiano Art makes every effort to ensure the accuracy of information on this website but cannot guarantee that all details — including artwork availability and pricing — are always up to date. We reserve the right to modify content at any time without notice.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl text-[#1F1F1F] mb-4" style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}>
                        5. Contact
                    </h2>
                    <p>
                        For any questions about these Terms of Use, please contact{' '}
                        <a href="mailto:alinegordianoart@gmail.com" className="text-[#C5521A] underline underline-offset-2">
                            alinegordianoart@gmail.com
                        </a>.
                    </p>
                </section>
            </div>
        </div>
    );
}
