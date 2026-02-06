'use client';

import { InlineWidget } from 'react-calendly';
import { motion } from 'framer-motion';

export default function BookingSection() {
    return (
        <section className="bg-gradient-to-b from-white to-gray-50 px-4 py-20">
            <div className="mx-auto max-w-5xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 text-center"
                >
                    <h2 className="mb-3 text-4xl font-bold text-primary md:text-5xl">
                        Schedule Your Free Care Itinerary Consultation
                    </h2>
                    <p className="text-sm text-gray-600">
                        Times are displayed in your local time zone.
                    </p>
                </motion.div>

                {/* Calendly Widget Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="overflow-hidden rounded-xl bg-white shadow-2xl"
                >
                    <div className="min-h-[700px]">
                        <InlineWidget
                            url="https://calendly.com/your-calendly-username"
                            styles={{
                                height: '700px',
                                width: '100%',
                            }}
                        />
                    </div>
                </motion.div>

                {/* Additional Info */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-6 text-center text-sm text-gray-600"
                >
                    No commitment required. We'll discuss your specific needs and create a
                    personalized care plan.
                </motion.p>
            </div>
        </section>
    );
}
