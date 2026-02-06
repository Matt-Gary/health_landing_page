'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Services', href: '#services' },
        { label: 'Book Now', href: '#booking' },
        { label: 'Contact', href: '#contact' },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);

        if (element) {
            const offset = 80; // Account for fixed navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 shadow-lg backdrop-blur-md'
                : 'bg-white/80 backdrop-blur-sm'
                }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo/Brand */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center"
                    >
                        <a href="#home" onClick={(e) => scrollToSection(e, '#home')}>
                            <h1 className="text-2xl font-bold text-primary">
                                Fortaleza Oncology
                            </h1>
                        </a>
                    </motion.div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.href}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                                className="relative text-base font-medium text-gray-700 transition-colors hover:text-primary"
                            >
                                {item.label}
                                <motion.span
                                    className="absolute -bottom-1 left-0 h-0.5 w-0 bg-coral-cta"
                                    whileHover={{ width: '100%' }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => scrollToSection(e, '#booking')}
                        className="hidden rounded-full bg-coral-cta px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-shadow hover:shadow-lg md:block"
                    >
                        Get Started
                    </motion.button>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden rounded-lg p-2 text-gray-700 hover:bg-gray-100">
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
