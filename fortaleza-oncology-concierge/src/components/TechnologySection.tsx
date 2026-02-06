'use client';

import { motion } from 'framer-motion';
import { Scan, Bot, ShieldCheck } from 'lucide-react';

export default function TechnologySection() {
    const pillars = [
        {
            icon: Scan,
            title: 'Advanced Imaging & Diagnostics',
            tech: 'PET-CT & 3D Mammography (Tomosynthesis)',
            benefit:
                'We utilize the latest digital imaging to detect even the smallest microscopic changes. Our partner hospitals like Albert Einstein (Ranked #1 in Latin America) use the exact same GE and Siemens technology found at Mayo Clinic.',
            matter: 'Early detection means peace of mind.',
        },
        {
            icon: Bot,
            title: 'Minimally Invasive Robotics',
            tech: 'Da Vinci® Xi Surgical Systems',
            benefit:
                'For patients requiring intervention, our surgeons are leaders in robotic-assisted procedures, ensuring faster recovery, less pain, and minimal scarring compared to traditional open surgery.',
            matter: 'Get back to enjoying your trip sooner.',
        },
        {
            icon: ShieldCheck,
            title: 'Hospital Accreditation & Safety',
            tech: 'JCI Accredited & HIMSS Stage 7',
            benefit:
                'Our partner facilities are accredited by the Joint Commission International—the Gold Standard in global healthcare safety. This is the same body that accredits the top US academic medical centers.',
            matter: 'Safety protocols identical to the US, without the wait.',
        },
    ];

    return (
        <section className="bg-gray-50 py-20 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-20">

                    {/* Left Column: Video Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative lg:w-5/12"
                    >
                        <div className="sticky top-24 overflow-hidden rounded-2xl shadow-2xl">
                            {/* Glassmorphism Container */}
                            <div className="relative aspect-[9/16] w-full lg:aspect-[3/4]">
                                {/* Decorative Overlay - reduced opacity to allow visibility but kept for style */}
                                <div className="pointer-events-none absolute inset-0 z-10 bg-primary/10 mix-blend-overlay ring-1 ring-inset ring-white/10" />

                                <iframe
                                    className="h-full w-full object-cover"
                                    src="https://www.youtube.com/embed/1yiRhqD1QrY?autoplay=1&mute=1&loop=1&playlist=1yiRhqD1QrY&controls=1&rel=0&modestbranding=1"
                                    title="Technology Overview"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                />

                                {/* Overlay Text - Positioned to not block controls completely */}
                                <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                    <p className="text-white font-mono text-sm tracking-widest uppercase">
                                        State-of-the-Art
                                    </p>
                                    <h3 className="text-white text-3xl font-bold mt-2">
                                        World-Class Infrastructure
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Content */}
                    <div className="lg:w-7/12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="mb-12 text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
                                The 3 Key Technology Pillars
                            </h2>
                        </motion.div>

                        <div className="space-y-12">
                            {pillars.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.2 }}
                                        className="group"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                                <Icon size={24} strokeWidth={1.5} />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>

                                                <div className="mt-3 space-y-3">
                                                    <div>
                                                        <span className="text-sm font-semibold uppercase tracking-wide text-healing">The Tech</span>
                                                        <p className="text-lg font-medium text-primary">{item.tech}</p>
                                                    </div>

                                                    <div>
                                                        <span className="text-sm font-semibold uppercase tracking-wide text-healing">The Benefit</span>
                                                        <p className="text-gray-600 leading-relaxed">{item.benefit}</p>
                                                    </div>

                                                    <div className="flex items-center gap-2 pt-1">
                                                        <span className="text-sm font-semibold uppercase tracking-wide text-coral-cta">Why It Matters</span>
                                                        <p className="text-sm font-medium italic text-gray-800">"{item.matter}"</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Proof Statement - Blockquote */}
                        <motion.blockquote
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="mt-16 border-l-4 border-coral-cta bg-white p-8 shadow-lg rounded-r-xl"
                        >
                            <p className="text-lg font-medium leading-relaxed text-gray-800">
                                "In 2025, Newsweek ranked our partner Hospital Israelita Albert Einstein as the <span className="text-coral-cta font-bold">#22 best hospital in the world</span>—ranking higher than many famous US institutions. You are not stepping down in quality; you are stepping up in value."
                            </p>
                        </motion.blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
}
