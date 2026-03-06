'use client';

import { useState } from 'react';

interface ContactFormProps {
    prefilledSubject?: string;
    showUpload?: boolean;
    showBudget?: boolean;
    showDeadline?: boolean;
    showSize?: boolean;
}

export default function ContactForm({
    prefilledSubject = '',
    showUpload = false,
    showBudget = false,
    showDeadline = false,
    showSize = false,
}: ContactFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: prefilledSubject,
        size: '',
        budget: '',
        deadline: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Replace with real form handler (e.g., Resend, Formspree, Netlify Forms)
        console.log('Form data:', formData);
        setSubmitted(true);
    };

    const inputClass =
        'w-full border border-[#E5E0D8] bg-white px-4 py-3 text-sm text-[#1F1F1F] outline-none focus:border-[#C5521A] transition-colors duration-200 placeholder:text-[#A09890]';

    if (submitted) {
        return (
            <div className="text-center py-12">
                <div
                    className="text-4xl text-[#C5521A] mb-4"
                    style={{ fontFamily: 'var(--font-cormorant), serif' }}
                >
                    Thank you
                </div>
                <p className="text-sm text-[#6B6B6B]" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                    Your message has been received. Aline will be in touch shortly.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="contact-name"
                        className="text-xs tracking-widest uppercase text-[#6B6B6B]"
                        style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 500 }}
                    >
                        Name *
                    </label>
                    <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputClass}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="contact-email"
                        className="text-xs tracking-widest uppercase text-[#6B6B6B]"
                        style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 500 }}
                    >
                        Email *
                    </label>
                    <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={inputClass}
                    />
                </div>
            </div>

            {prefilledSubject !== undefined && (
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="contact-subject"
                        className="text-xs tracking-widest uppercase text-[#6B6B6B]"
                        style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 500 }}
                    >
                        Subject
                    </label>
                    <input
                        id="contact-subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        className={inputClass}
                    />
                </div>
            )}

            {showSize && (
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="contact-size"
                        className="text-xs tracking-widest uppercase text-[#6B6B6B]"
                        style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 500 }}
                    >
                        Artwork Size
                    </label>
                    <input
                        id="contact-size"
                        type="text"
                        name="size"
                        value={formData.size}
                        onChange={handleChange}
                        placeholder="e.g. 60 × 80 cm"
                        className={inputClass}
                    />
                </div>
            )}

            {showBudget && (
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="contact-budget"
                        className="text-xs tracking-widest uppercase text-[#6B6B6B]"
                        style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 500 }}
                    >
                        Budget Range
                    </label>
                    <select
                        id="contact-budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={inputClass}
                    >
                        <option value="">Select a range</option>
                        <option value="under-500">Under £500</option>
                        <option value="500-1000">£500 – £1,000</option>
                        <option value="1000-2000">£1,000 – £2,000</option>
                        <option value="2000-plus">£2,000+</option>
                    </select>
                </div>
            )}

            {showDeadline && (
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="contact-deadline"
                        className="text-xs tracking-widest uppercase text-[#6B6B6B]"
                        style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 500 }}
                    >
                        Deadline (if any)
                    </label>
                    <input
                        id="contact-deadline"
                        type="date"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>
            )}

            {showUpload && (
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="contact-upload"
                        className="text-xs tracking-widest uppercase text-[#6B6B6B]"
                        style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 500 }}
                    >
                        Reference Images (optional)
                    </label>
                    <input
                        id="contact-upload"
                        type="file"
                        multiple
                        accept="image/*"
                        className="text-sm text-[#6B6B6B] file:mr-4 file:py-2 file:px-4 file:border-0 file:text-xs file:font-medium file:bg-[#C5521A] file:text-white hover:file:bg-[#D4632F] cursor-pointer"
                    />
                    <p className="text-xs text-[#A09890]" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                        You can share reference images via email if the upload doesn&apos;t work.
                    </p>
                </div>
            )}

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="contact-message"
                    className="text-xs tracking-widest uppercase text-[#6B6B6B]"
                    style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 500 }}
                >
                    Message *
                </label>
                <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell Aline what you have in mind..."
                    className={inputClass}
                />
            </div>

            <button type="submit" className="btn-primary self-start">
                Send Message
            </button>
        </form>
    );
}
