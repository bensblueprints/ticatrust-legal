'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Mail, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  { name: 'Business Establishment', href: '/services/business-establishment' },
  { name: 'Business License Change', href: '/services/business-license-change' },
  { name: 'Sublicense Services', href: '/services/sublicense-service' },
  { name: 'Foreign Labor & Visa', href: '/services/foreign-labor-visa' },
  { name: 'Corporate Legal Services', href: '/services/corporate-legal' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-200'
          : 'bg-white'
      }`}
    >
      {/* Top Bar */}
      <div className={`border-b border-gray-200 transition-all duration-500 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3 text-sm">
            <div className="flex items-center gap-6">
              <a
                href="mailto:tica.trustlegal@gmail.com"
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">tica.trustlegal@gmail.com</span>
              </a>
              <a
                href="tel:+84354658272"
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">+84 354 658 272</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-700 text-xs font-medium">EN</span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-500 text-xs hover:text-primary cursor-pointer transition-colors">VI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-2xl font-bold text-white">T</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold tracking-wide text-primary">TICA</span>
                <span className="text-[10px] tracking-[0.15em] text-gray-500 uppercase">TrustLegal</span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium tracking-wide text-gray-700 hover:text-primary transition-colors relative group"
            >
              HOME
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium tracking-wide text-gray-700 hover:text-primary transition-colors relative group"
            >
              ABOUT US
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-sm font-medium tracking-wide text-gray-700 hover:text-primary transition-colors flex items-center gap-1 relative group">
                SERVICES
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-4 w-72 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden"
                  >
                    <div className="p-2">
                      {services.map((service, index) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-all"
                        >
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            {service.name}
                          </motion.div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/news"
              className="text-sm font-medium tracking-wide text-gray-700 hover:text-primary transition-colors relative group"
            >
              NEWS
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>

            <a
              href="tel:+84354658272"
              className="ml-4 px-6 py-2.5 bg-primary text-white font-semibold text-sm rounded-lg hover:bg-primary-dark hover:shadow-lg transition-all duration-300"
            >
              CONTACT US
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-50 p-2 text-gray-700 hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              <Link
                href="/"
                className="block py-2 text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="block py-2 text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ABOUT US
              </Link>

              <div className="space-y-2">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-primary transition-colors font-medium"
                >
                  SERVICES
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isServicesOpen && (
                  <div className="pl-4 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block py-2 text-sm text-gray-600 hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/news"
                className="block py-2 text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                NEWS
              </Link>

              <a
                href="tel:+84354658272"
                className="block w-full mt-4 px-6 py-3 bg-primary text-white font-semibold text-center rounded-lg hover:bg-primary-dark hover:shadow-lg transition-all duration-300"
              >
                CONTACT US
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
