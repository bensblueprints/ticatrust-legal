'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Building2, Users, Target, Heart, Award, TrendingUp, Phone, Mail, ArrowRight } from 'lucide-react';

const coreValues = [
  {
    icon: Building2,
    title: 'Professionalism',
    description: 'Delivering services with the highest standards of excellence and integrity.',
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'Your success is our success. We prioritize your needs and goals.',
  },
  {
    icon: Target,
    title: 'Precision',
    description: 'Attention to detail and accuracy in every legal matter we handle.',
  },
  {
    icon: Heart,
    title: 'Dedication',
    description: 'Committed to providing unwavering support throughout your journey.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Continuously raising the bar in legal consultancy services.',
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'Adapting to changes in law and business to serve you better.',
  },
];

const stats = [
  { number: '7+', label: 'Years of Experience' },
  { number: '3000+', label: 'Clients Served' },
  { number: '60+', label: 'Legal Professionals' },
  { number: '100%', label: 'Client Satisfaction' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean White Background with Red Accent */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm tracking-wide uppercase mb-8">
              About TICA TrustLegal
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-gray-900 leading-tight">
              Your Trusted Partner for
              <span className="text-primary"> Foreign Investment </span>
              in Vietnam
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              With over 7 years of specialized legal support, TICA TrustLegal is a dedicated consultancy
              and reliable partner for foreign investors in Vietnam.
            </p>
          </motion.div>
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

      {/* Office Images Section */}
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
              Modern facilities and experienced team committed to your success in Vietnam
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { src: '/images/about/head-office.png', alt: 'TICA TrustLegal Head Office in Ho Chi Minh City' },
              { src: '/images/about/contact-consulting.jpg', alt: 'Professional Consulting Services' },
              { src: '/images/about/about-tica.png', alt: 'TICA TrustLegal Team' },
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-primary"
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

      {/* Company Story & Mission */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm tracking-wide uppercase mb-6">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gray-900">
                TICA TrustLegal: Your Gateway to Vietnam Business Success
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  TICA TrustLegal provides comprehensive legal services for foreign investors seeking to establish
                  and operate businesses in Vietnam. Our team comprises over 60 legal professionals, including
                  Senior Associates, Associates, and Paralegal Officers.
                </p>
                <p>
                  We have successfully assisted clients across diverse sectors including trade, education, F&B,
                  logistics, technology, real estate, and manufacturing. Our head office is located in
                  Ho Chi Minh City, Vietnam's vibrant economic hub.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-serif font-semibold mb-4 text-gray-900">
                Our Services Include:
              </h3>
              <ul className="space-y-3">
                {[
                  'Vietnam business licensing for foreigners',
                  'Expert advice on TRC (Temporary Residence Card) for investors',
                  'Foreign labor permits and visa services',
                  'Tax and accounting compliance',
                  'Contract drafting and negotiation',
                  'Long-term corporate legal support',
                ].map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-lg">{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
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
              Our Vision & Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Guided by purpose, driven by excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-10 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To become a trusted and leading legal partner consultant for international investors and
                individuals seeking long-term opportunities in Vietnam. We aim to set the standard for
                excellence in legal consultancy by delivering innovative, reliable, and client-focused
                solutions that empower sustainable growth and legal security.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-10 bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To deliver legal consultant services with integrity, precision, and unwavering dedication.
                We are driven by a commitment to guiding foreign investors and entrepreneurs through
                Vietnam's complex legal environment with clarity and confidence. Clients can focus solely
                on business planning while we handle every permit and formality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gray-900">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gray-900">
                Meet Our Expert Team
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                Our team of 60+ legal professionals brings deep expertise in Vietnamese business law,
                multilingual communication, and a client-first approach. From Senior Associates to
                Paralegal Officers, every team member is dedicated to your success.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="text-4xl font-serif font-bold text-primary mb-2">60+</div>
                  <div className="text-gray-700 font-medium">Legal Professionals</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="text-4xl font-serif font-bold text-primary mb-2">15+</div>
                  <div className="text-gray-700 font-medium">Senior Associates</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="text-4xl font-serif font-bold text-primary mb-2">100%</div>
                  <div className="text-gray-700 font-medium">Multilingual Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-12 md:p-16 text-center text-white shadow-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  Ready to Start Your Vietnam Business Journey?
                </h2>
                <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
                  Contact our expert team for a consultation. We'll guide you through every step
                  of establishing and operating your business in Vietnam.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="tel:+84354658272"
                    className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2 shadow-lg"
                  >
                    <Phone className="w-5 h-5" />
                    +84 354 658 272
                  </a>
                  <a
                    href="mailto:tica.trustlegal@gmail.com"
                    className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Send Email
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
