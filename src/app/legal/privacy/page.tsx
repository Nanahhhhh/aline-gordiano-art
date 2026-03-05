import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Privacy Policy for Aline Gordiano Art.',
};

export default function PrivacyPage() {
    const year = new Date().getFullYear();
    return (
        <div className="pt-32 pb-24 px-6 lg:px-12 max-w-3xl mx-auto">
            <div className="mb-12">
                <div className="divider mb-6" aria-hidden />
                <h1 className="section-title mb-4">Privacy Policy</h1>
                <p className="text-xs text-[#A09890]" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                    Last updated: March {year}
                </p>
            </div>

            <div className="flex flex-col gap-10 text-sm text-[#6B6B6B] leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                <section>
                    <h2 className="text-xl text-[#1F1F1F] mb-4" style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}>
                        1. Introduction
                    </h2>
                    <p>
                        Aline Gordiano Art (&quot;we&quot;, &quot;our&quot; or &quot;us&quot;) is committed to protecting your personal information. This Privacy Policy explains how we collect, use and protect data when you use our website at alinegordianoart.com.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl text-[#1F1F1F] mb-4" style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}>
                        2. Information We Collect
                    </h2>
                    <p>
                        When you use our contact or commission forms, we collect your name, email address and any information you choose to share in your message. We do not collect payment information directly — any payments are processed by a secure third-party provider.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl text-[#1F1F1F] mb-4" style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}>
                        3. How We Use Your Information
                    </h2>
                    <p>
                        We use your information solely to respond to your enquiries, process commission requests and, where you have consented, to send occasional updates about new works or exhibitions. We will never sell or share your data with third parties for marketing purposes.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl text-[#1F1F1F] mb-4" style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}>
                        4. Cookies
                    </h2>
                    <p>
                        Our website may use essential cookies to ensure the site functions correctly. We do not use tracking or advertising cookies without your consent.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl text-[#1F1F1F] mb-4" style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}>
                        5. Your Rights
                    </h2>
                    <p>
                        Under UK GDPR, you have the right to access, correct or delete any personal data we hold about you. To exercise these rights, please contact us at{' '}
                        <a href="mailto:alinegordianoart@gmail.com" className="text-[#C5521A] underline underline-offset-2">
                            alinegordianoart@gmail.com
                        </a>.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl text-[#1F1F1F] mb-4" style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}>
                        6. Contact
                    </h2>
                    <p>
                        For any privacy-related questions, please contact us at{' '}
                        <a href="mailto:alinegordianoart@gmail.com" className="text-[#C5521A] underline underline-offset-2">
                            alinegordianoart@gmail.com
                        </a>.
                    </p>
                </section>
            </div>
        </div>
    );
}
