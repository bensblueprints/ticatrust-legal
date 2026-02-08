'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ArrowRight, Phone, Mail, BookOpen, Users, Award, TrendingUp } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const services = [
  {
    image: '/images/services/business-establishment-1.png',
    title: 'Business Establishment',
    description: 'Expert guidance for establishing your business in Vietnam, from initial registration to full operational licensing.',
    href: '/services/business-establishment',
  },
  {
    image: '/images/services/business-license-change.png',
    title: 'Business License Changes',
    description: 'Professional assistance with license modifications, updates, and compliance management.',
    href: '/services/business-license-change',
  },
  {
    image: '/images/services/sublicense-diagram.png',
    title: 'Sublicense Services',
    description: 'Comprehensive support for specialized sublicense applications and renewals.',
    href: '/services/sublicense-service',
  },
  {
    image: '/images/icons/passport.png',
    title: 'Foreign Labor & Visa',
    description: 'Complete visa, work permit, and residence card services for international professionals.',
    href: '/services/foreign-labor-visa',
  },
  {
    image: '/images/services/corporate-legal-diagram-1.png',
    title: 'Corporate Legal Services',
    description: 'Full-spectrum legal support including contracts, compliance, and corporate governance.',
    href: '/services/corporate-legal',
  },
];

const stats = [
  { number: '7+', label: 'Years of Experience' },
  { number: '3000+', label: 'Clients Served' },
  { number: '60+', label: 'Legal Professionals' },
  { number: '100%', label: 'Client Satisfaction' },
];

const whyChooseUs = [
  {
    icon: BookOpen,
    title: 'Educational Approach',
    description: 'We educate our clients about Vietnamese business law, empowering informed decision-making.',
  },
  {
    icon: Users,
    title: 'Multilingual Support',
    description: 'Fluent communication in English and Vietnamese ensures clarity in all legal matters.',
  },
  {
    icon: Award,
    title: 'Proven Expertise',
    description: 'Over 3000 foreign investors trust us with their Vietnamese business operations.',
  },
  {
    icon: TrendingUp,
    title: 'Transparent Process',
    description: 'Clear timelines, upfront pricing, and regular updates throughout your legal journey.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean and Professional */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-5">
          <Image
            src="/images/backgrounds/hero-background.png"
            alt="Vietnam Business"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm tracking-wide uppercase mb-8">
                Professional Legal Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-gray-900 leading-tight"
            >
              Your Trusted Legal Partner for
              <span className="text-primary"> Foreign Investment </span>
              in Vietnam
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              With over 7 years of specialized experience, TICA TrustLegal provides comprehensive legal guidance
              for foreign investors establishing and operating businesses in Vietnam.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/services/business-establishment"
                className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2"
              >
                Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#contact-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                Schedule Consultation
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Clean Grid with White Space */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gray-900">
              Comprehensive Legal Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert guidance across all aspects of foreign investment and business operations in Vietnam
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.href}>
                  <div className="group h-full p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-primary hover:shadow-xl transition-all duration-300">
                    <div className="relative w-20 h-20 mb-6 group-hover:scale-110 transition-all duration-300">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-serif font-semibold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-medium text-sm">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office & Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gray-900">
              Our Professional Environment
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Modern facilities and experienced team committed to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { src: '/images/about/head-office.png', alt: 'TICA TrustLegal Head Office' },
              { src: '/images/about/contact-consulting.jpg', alt: 'Consulting Services' },
              { src: '/images/about/about-tica.png', alt: 'About TICA TrustLegal' },
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources / Blog Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gray-900">
              Vietnam Legal Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive guides to help you navigate Vietnamese business law and immigration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'What is a TRC in Vietnam?',
                description: 'Complete guide to Temporary Residence Cards including requirements, timeline, and costs.',
                category: 'TRC Guide',
                readTime: '12 min read',
                href: '/resources/what-is-trc-vietnam',
              },
              {
                title: 'TRC vs Work Permit vs Visa',
                description: 'Understanding the differences and how these three documents work together.',
                category: 'Comparison',
                readTime: '10 min read',
                href: '/resources/trc-vs-work-permit-vs-visa',
              },
              {
                title: '5 Types of TRC in Vietnam',
                description: 'Detailed breakdown of each TRC type and which one you need for your situation.',
                category: 'TRC Types',
                readTime: '14 min read',
                href: '/resources/types-of-trc-vietnam',
              },
            ].map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={article.href}>
                  <div className="group h-full bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-serif font-semibold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {article.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-medium text-sm">
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
            >
              View All Resources
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Educational Focus */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gray-900">
              Why Choose TICA TrustLegal?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine legal expertise with an educational approach to empower your business success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}
