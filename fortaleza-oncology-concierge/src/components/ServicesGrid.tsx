'use client';

import { motion } from 'framer-motion';
import { Plane, Languages, Hospital, Heart } from 'lucide-react';

export default function ServicesGrid() {
    const services = [
        {
            icon: Plane,
            title: 'Seamless Logistics',
            description:
                'Flight assistance and VIP meet-and-greet at the airport to remove physical burdens from your journey.',
        },
        {
            icon: Languages,
            title: 'Bilingual Advocacy',
            description:
                'Dedicated medical translators ensure no clinical detail is lost in communication with your care team.',
        },
        {
            icon: Hospital,
            title: 'Clinical Excellence',
            description:
                'Direct partnerships with Hospital Israelita Albert Einstein and Hospital Sírio-Libanês.',
        },
        {
            icon: Heart,
            title: 'Holistic Healing',
            description:
                'Optional wellness experiences including nutrition classes, forest bathing, and mindfulness yoga.',
        },
    ];

    return (
        <section className="bg-gradient-to-b from-gray-50 to-white px-4 py-20">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
                        The Companion Service Ecosystem
                    </h2>
                    <p className="text-xl text-gray-600">
                        Your long-term wellness companion, not just a travel agent
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-shadow hover:shadow-2xl"
                            >
                                {/* Decorative gradient background */}
                                <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-gradient-to-br from-healing/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                                {/* Icon */}
                                <div className="relative mb-6 inline-flex rounded-xl bg-primary/10 p-4">
                                    <Icon className="h-10 w-10 text-primary" strokeWidth={1.5} />
                                </div>

                                {/* Title */}
                                <h3 className="relative mb-3 text-2xl font-bold text-gray-900">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="relative text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Hover accent line */}
                                <motion.div
                                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-healing to-coral-cta"
                                    initial={{ width: 0 }}
                                    whileHover={{ width: '100%' }}
                                    transition={{ duration: 0.4 }}
                                />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <p className="text-lg text-gray-700">
                        Medical record coordination and translation services included to
                        ensure continuity of care
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
