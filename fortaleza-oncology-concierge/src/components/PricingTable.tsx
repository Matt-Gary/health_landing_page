'use client';

import { motion } from 'framer-motion';

export default function PricingTable() {
    const pricingData = [
        {
            procedure: 'Full Body Executive Check-up',
            usaCost: '$5,000 – $10,000+',
            brazilCost: '$800 – $1,500',
            savings: '70% – 85%',
        },
        {
            procedure: 'PET-CT Scan',
            usaCost: '$3,000 – $6,000',
            brazilCost: '$700 – $1,200',
            savings: '75% – 80%',
        },
        {
            procedure: 'Specialist Consultation',
            usaCost: '$300 – $600',
            brazilCost: '$80 – $150',
            savings: '65% – 75%',
        },
    ];

    return (
        <section className="bg-white px-4 py-20">
            <div className="mx-auto max-w-6xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
                        The Economic Reality
                    </h2>
                    <p className="text-xl text-gray-600">
                        Financial Toxicity vs. Sustainability
                    </p>
                </motion.div>

                {/* Pricing Table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="overflow-hidden rounded-2xl shadow-2xl"
                >
                    {/* Desktop Table */}
                    <div className="hidden md:block">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-primary text-white">
                                    <th className="px-6 py-4 text-left text-lg font-semibold">
                                        Exam / Procedure
                                    </th>
                                    <th className="px-6 py-4 text-left text-lg font-semibold">
                                        USA Out-of-Pocket
                                    </th>
                                    <th className="px-6 py-4 text-left text-lg font-semibold">
                                        Brazil Private Cost
                                    </th>
                                    <th className="bg-healing px-6 py-4 text-left text-lg font-semibold">
                                        Potential Savings
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {pricingData.map((row, index) => (
                                    <motion.tr
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="border-b border-gray-200 transition-colors hover:bg-gray-50"
                                    >
                                        <td className="px-6 py-5 font-medium text-gray-900">
                                            {row.procedure}
                                        </td>
                                        <td className="px-6 py-5 text-gray-700">{row.usaCost}</td>
                                        <td className="px-6 py-5 text-gray-700">
                                            {row.brazilCost}
                                        </td>
                                        <td className="bg-healing/20 px-6 py-5 text-lg font-bold text-primary">
                                            {row.savings}
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="md:hidden">
                        {pricingData.map((row, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="border-b border-gray-200 bg-white p-6 last:border-b-0"
                            >
                                <h3 className="mb-4 text-lg font-bold text-primary">
                                    {row.procedure}
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-sm font-medium text-gray-600">
                                            USA Out-of-Pocket:
                                        </span>
                                        <span className="font-semibold text-gray-900">
                                            {row.usaCost}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm font-medium text-gray-600">
                                            Brazil Private Cost:
                                        </span>
                                        <span className="font-semibold text-gray-900">
                                            {row.brazilCost}
                                        </span>
                                    </div>
                                    <div className="flex justify-between rounded-lg bg-healing/20 p-3">
                                        <span className="text-sm font-bold text-primary">
                                            Potential Savings:
                                        </span>
                                        <span className="text-lg font-bold text-primary">
                                            {row.savings}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Additional Context */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-8 text-center text-gray-600"
                >
                    All costs are estimates and may vary. Transparent pricing with no
                    hidden fees.
                </motion.p>
            </div>
        </section>
    );
}
