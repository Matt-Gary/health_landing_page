'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when window is resized to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
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

            // Close mobile menu after navigation
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
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
                    <div className="flex h-16 md:h-20 items-center justify-between">
                        {/* Logo/Brand */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center"
                        >
                            <a href="#home" onClick={(e) => scrollToSection(e, '#home')}>
                                <h1 className="text-xl md:text-2xl font-bold text-primary">
                                    Fortaleza Oncology
                                </h1>
                            </a>
                        </motion.div>

                        {/* Desktop Navigation Links */}
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

                        {/* Desktop CTA Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => scrollToSection(e, '#booking')}
                            className="hidden rounded-full bg-coral-cta px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-shadow hover:shadow-lg md:block"
                        >
                            Get Started
                        </motion.button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden rounded-lg p-2 text-gray-700 hover:bg-gray-100 transition-colors"
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
                        />

                        {/* Mobile Menu Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 z-50 h-full w-[280px] bg-white shadow-2xl md:hidden"
                        >
                            <div className="flex h-full flex-col">
                                {/* Mobile Menu Header */}
                                <div className="flex items-center justify-between border-b border-gray-200 p-4">
                                    <h2 className="text-lg font-bold text-primary">Menu</h2>
                                    <button
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="rounded-lg p-2 text-gray-700 hover:bg-gray-100"
                                        aria-label="Close menu"
                                    >
                                        <X className="h-6 w-6" />
                                    </button>
                                </div>

                                {/* Mobile Navigation Links */}
                                <nav className="flex-1 overflow-y-auto p-4">
                                    <div className="space-y-2">
                                        {navItems.map((item, index) => (
                                            <motion.a
                                                key={item.href}
                                                href={item.href}
                                                onClick={(e) => scrollToSection(e, item.href)}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-primary/10 hover:text-primary"
                                            >
                                                {item.label}
                                            </motion.a>
                                        ))}
                                    </div>
                                </nav>

                                {/* Mobile CTA Button */}
                                <div className="border-t border-gray-200 p-4">
                                    <motion.button
                                        whileTap={{ scale: 0.95 }}
                                        onClick={(e) => scrollToSection(e, '#booking')}
                                        className="w-full rounded-full bg-coral-cta px-6 py-3 text-base font-semibold text-white shadow-md"
                                    >
                                        Get Started
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
