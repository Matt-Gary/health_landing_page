'use client';

import { motion } from 'framer-motion';

export default function TestimonialSection() {
    return (
        <section className="bg-gray-50 px-4 py-20">
            <div className="mx-auto max-w-5xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <span className="mb-2 block text-sm font-bold uppercase tracking-wider text-coral-cta">
                        A Personal Journey
                    </span>
                    <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
                        My Story: From Patient to Advocate
                    </h2>
                    <p className="mx-auto max-w-2xl text-xl text-gray-600">
                        See why I chose Brazil for my oncology care and how it saved not just my finances, but my peace of mind.
                    </p>
                </motion.div>

                {/* Video Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative overflow-hidden rounded-2xl bg-black shadow-2xl"
                >
                    <div className="relative aspect-video w-full">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/itpxZudlkJo"
                            title="My Story: Oncology Care in Brazil"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="absolute inset-0 h-full w-full border-0"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
