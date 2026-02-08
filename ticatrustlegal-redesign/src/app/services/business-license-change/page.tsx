'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FileEdit, CheckCircle2, Clock, TrendingUp, Phone, Mail, ArrowRight, Shield, Users, FileText } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const changeTypes = [
  {
    title: 'Business Name Change',
    description: 'Update your company name in all official records',
    timeline: '2-3 weeks',
    complexity: 'Medium',
  },
  {
    title: 'Business Address Relocation',
    description: 'Change registered address or add new branch locations',
    timeline: '2-4 weeks',
    complexity: 'Medium',
  },
  {
    title: 'Capital Increase/Decrease',
    description: 'Adjust registered capital and update capital contribution',
    timeline: '3-4 weeks',
    complexity: 'High',
  },
  {
    title: 'Shareholder/Member Changes',
    description: 'Add, remove, or transfer ownership among shareholders',
    timeline: '3-5 weeks',
    complexity: 'High',
  },
  {
    title: 'Business Scope Expansion',
    description: 'Add new business lines or activities to your license',
    timeline: '2-4 weeks',
    complexity: 'Medium',
  },
  {
    title: 'Legal Representative Change',
    description: 'Appoint new director or change authorized signatories',
    timeline: '2-3 weeks',
    complexity: 'Low-Medium',
  },
];

const faqs = [
  {
    question: 'How long does a business license change take in Vietnam?',
    answer: 'The timeline varies by change type: Simple changes like name or address take 2-3 weeks. Complex changes involving capital or shareholders take 3-5 weeks.',
  },
  {
    question: 'Do I need to suspend operations during license changes?',
    answer: 'No, your business can continue normal operations during the amendment process. The existing license remains valid until the updated license is issued.',
  },
  {
    question: 'Can I make multiple changes in one application?',
    answer: 'Yes, multiple changes can be processed simultaneously in a single amendment application.',
  },
];

export default function BusinessLicenseChangePage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm tracking-wide uppercase mb-6">
                Business License Change Services
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900 leading-tight">
                Seamless Business License
                <span className="text-primary"> Amendments and Updates</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Professional support for all types of business license changes in Vietnam.
                From simple name updates to complex restructuring, we ensure compliance and minimize disruption.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+84354658272"
                  className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Get Expert Advice
                </a>
                <a
                  href="mailto:tica.trustlegal@gmail.com"
                  className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* License Diagram */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/services/license-diagram.png"
                alt="Business License Change Process"
                fill
                className="object-contain bg-gray-50 p-8"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Change Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gray-900">
              Types of License Changes We Handle
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive support for all business license amendments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {changeTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{type.timeline}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    type.complexity === 'High' ? 'bg-red-100 text-red-700' :
                    type.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {type.complexity}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 hover:border-primary transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold mb-6 text-center text-gray-900">
              Related Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/services/business-establishment"
                className="flex items-center justify-between p-4 bg-gray-50 border-2 border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all duration-300 group"
              >
                <span className="text-gray-700 font-medium group-hover:text-primary">Business Establishment</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
              <Link
                href="/services/sublicense-service"
                className="flex items-center justify-between p-4 bg-gray-50 border-2 border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all duration-300 group"
              >
                <span className="text-gray-700 font-medium group-hover:text-primary">Sublicense Services</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
