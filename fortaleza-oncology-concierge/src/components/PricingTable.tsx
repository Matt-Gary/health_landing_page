'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PricingTable() {
    const pricingData = [
        {
            procedure: 'Full Body Executive Check-up',
            usaCost: '$5,000 – $10,000+',
            brazilCost: '$800 – $1,500',
            savings: '70% – 85%',
            usaMin: 5000,
            usaMax: 10000,
            brazilMin: 800,
            brazilMax: 1500,
        },
        {
            procedure: 'PET-CT Scan',
            usaCost: '$3,000 – $6,000',
            brazilCost: '$700 – $1,200',
            savings: '75% – 80%',
            usaMin: 3000,
            usaMax: 6000,
            brazilMin: 700,
            brazilMax: 1200,
        },
        {
            procedure: 'Specialist Consultation',
            usaCost: '$300 – $600',
            brazilCost: '$80 – $150',
            savings: '65% – 75%',
            usaMin: 300,
            usaMax: 600,
            brazilMin: 80,
            brazilMax: 150,
        },
    ];

    const [selectedProcedures, setSelectedProcedures] = useState<string[]>([pricingData[0].procedure]);

    const toggleProcedure = (procedure: string) => {
        setSelectedProcedures(prev => {
            if (prev.includes(procedure)) {
                // Don't allow deselecting all procedures
                if (prev.length === 1) return prev;
                return prev.filter(p => p !== procedure);
            } else {
                return [...prev, procedure];
            }
        });
    };

    const calculateSavings = () => {
        const selectedData = pricingData.filter(p => selectedProcedures.includes(p.procedure));

        const usaTotal = selectedData.reduce((sum, p) => sum + (p.usaMin + p.usaMax) / 2, 0);
        const brazilTotal = selectedData.reduce((sum, p) => sum + (p.brazilMin + p.brazilMax) / 2, 0);
        const savings = usaTotal - brazilTotal;
        const savingsPercent = usaTotal > 0 ? ((savings / usaTotal) * 100).toFixed(0) : '0';

        return { usaTotal, brazilTotal, savings, savingsPercent };
    };

    const { usaTotal, brazilTotal, savings, savingsPercent } = calculateSavings();

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

                {/* Interactive Calculator */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-12 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-healing/10 p-8 shadow-lg"
                >
                    <h3 className="mb-6 text-center text-2xl font-bold text-primary">
                        Calculate Your Potential Savings
                    </h3>

                    {/* Procedure Selector */}
                    <div className="mb-8">
                        <label className="mb-3 block text-sm font-semibold text-gray-700">
                            Select Procedures (choose one or more):
                        </label>
                        <div className="space-y-3">
                            {pricingData.map((item) => (
                                <label
                                    key={item.procedure}
                                    className="flex cursor-pointer items-center rounded-lg border-2 border-primary/20 bg-white p-4 transition-all hover:border-primary hover:bg-primary/5"
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedProcedures.includes(item.procedure)}
                                        onChange={() => toggleProcedure(item.procedure)}
                                        className="h-5 w-5 cursor-pointer rounded border-gray-300 text-primary focus:ring-2 focus:ring-primary"
                                    />
                                    <span className="ml-3 flex-1 text-base font-medium text-gray-900">
                                        {item.procedure}
                                    </span>
                                    <span className="text-sm text-gray-600">
                                        {item.brazilCost}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Cost Comparison */}
                    <div className="grid gap-6 md:grid-cols-3">
                        {/* USA Cost */}
                        <motion.div
                            key={`usa-${selectedProcedures.join('-')}`}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="rounded-xl bg-white p-6 text-center shadow-md"
                        >
                            <p className="mb-2 text-sm font-medium text-gray-600">
                                USA Cost (Average)
                            </p>
                            <p className="text-3xl font-bold text-gray-900">
                                ${usaTotal.toLocaleString()}
                            </p>
                            {selectedProcedures.length > 1 && (
                                <p className="mt-1 text-xs text-gray-500">
                                    {selectedProcedures.length} procedures
                                </p>
                            )}
                        </motion.div>

                        {/* Brazil Cost */}
                        <motion.div
                            key={`brazil-${selectedProcedures.join('-')}`}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="rounded-xl bg-white p-6 text-center shadow-md"
                        >
                            <p className="mb-2 text-sm font-medium text-gray-600">
                                Brazil Cost (Average)
                            </p>
                            <p className="text-3xl font-bold text-primary">
                                ${brazilTotal.toLocaleString()}
                            </p>
                            {selectedProcedures.length > 1 && (
                                <p className="mt-1 text-xs text-gray-500">
                                    {selectedProcedures.length} procedures
                                </p>
                            )}
                        </motion.div>

                        {/* Savings */}
                        <motion.div
                            key={`savings-${selectedProcedures.join('-')}`}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            className="rounded-xl bg-healing p-6 text-center shadow-md"
                        >
                            <p className="mb-2 text-sm font-bold text-primary">
                                Your Total Savings
                            </p>
                            <p className="text-3xl font-bold text-primary">
                                ${savings.toLocaleString()}
                            </p>
                            <p className="mt-1 text-lg font-semibold text-primary">
                                ({savingsPercent}% less)
                            </p>
                        </motion.div>
                    </div>
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
