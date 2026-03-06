import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Aline Gordiano — London-based visual artist. Enquire about original artworks, availability, prints or general questions.',
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-6xl mx-auto">
      <div className="mb-16 flex flex-col gap-4 max-w-xl">
        <div className="divider" aria-hidden />
        <h1 className="section-title">Get in Touch</h1>
        <p className="text-sm text-[#6B6B6B] leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
          For artwork enquiries, availability, pricing and shipping information, please get in touch using the form below or via Instagram.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <ContactForm />
        </div>

        <div className="flex flex-col gap-10 lg:pt-10">
          <div>
            <h2
              className="text-2xl text-[#C5521A] mb-3"
              style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}
            >
              Email
            </h2>
            <a
              href="mailto:alinegordianoart@gmail.com"
              className="text-sm text-[#1F1F1F] hover:text-[#C5521A] transition-colors duration-200"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              alinegordianoart@gmail.com
            </a>
          </div>

          <div>
            <h2
              className="text-2xl text-[#C5521A] mb-3"
              style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}
            >
              Instagram
            </h2>
            <a
              href="https://instagram.com/alinegordianoart"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#1F1F1F] hover:text-[#C5521A] transition-colors duration-200"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              @alinegordianoart
            </a>
          </div>

          <div>
            <h2
              className="text-2xl text-[#C5521A] mb-3"
              style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}
            >
              Location
            </h2>
            <p className="text-sm text-[#6B6B6B]" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              London, United Kingdom
            </p>
          </div>

          <div className="p-6 border border-[#E5E0D8] mt-4">
            <p
              className="text-sm text-[#6B6B6B] leading-relaxed"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              The contact structure is now ready for real artwork enquiries. Once the final photos and details are uploaded, this page can stay as it is.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
