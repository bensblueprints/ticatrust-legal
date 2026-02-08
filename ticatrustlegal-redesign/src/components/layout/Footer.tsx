'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  { name: 'Business Establishment', href: '/services/business-establishment' },
  { name: 'Business License Change', href: '/services/business-license-change' },
  { name: 'Sublicense Services', href: '/services/sublicense-service' },
  { name: 'Foreign Labor & Visa', href: '/services/foreign-labor-visa' },
  { name: 'Corporate Legal Services', href: '/services/corporate-legal' },
];

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services/business-establishment' },
  { name: 'News', href: '/news' },
];

export default function Footer() {
  return (
    <footer className="relative bg-gray-50 border-t border-gray-200">
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-2xl font-bold text-white">T</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold tracking-wide text-primary">TICA</span>
                <span className="text-[10px] tracking-[0.15em] text-gray-500 uppercase">TrustLegal</span>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              With over 7 years of specialized legal support, we are a dedicated consultancy and reliable partner for foreign investors in Vietnam.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/ticatrustlegal/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-primary flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/ticatrustlegal/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-primary flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-serif font-semibold text-gray-900 mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-600 hover:text-primary text-sm transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-primary transition-colors" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-serif font-semibold text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary text-sm transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-400 group-hover:bg-primary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-serif font-semibold text-gray-900 mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+84354658272"
                  className="flex items-start gap-3 text-gray-600 hover:text-primary transition-colors group"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">+84 354 658 272</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:tica.trustlegal@gmail.com"
                  className="flex items-start gap-3 text-gray-600 hover:text-primary transition-colors group"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">tica.trustlegal@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="mb-2 font-medium text-gray-700">Head Office:</p>
                    <p className="leading-relaxed">36 Mac Dinh Chi Street, District 1, HCMC, Vietnam</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 opacity-0" />
                  <div className="text-sm">
                    <p className="mb-2 font-medium text-gray-700">Working Office:</p>
                    <p className="leading-relaxed">110/20/14 No. 30, Ward 6, Go Vap District, HCMC, Vietnam</p>
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm text-center md:text-left">
              © {new Date().getFullYear()} TICA TrustLegal. All Rights Reserved
            </p>
            <p className="text-gray-500 text-sm text-center md:text-right">
              Tax Code (MST): 0318968339
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
