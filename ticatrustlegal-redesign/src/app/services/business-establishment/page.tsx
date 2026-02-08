'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Building2, CheckCircle2, Clock, FileText, Users, TrendingUp, Phone, Mail, ArrowRight, Shield, Globe, Award } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const establishmentTypes = [
  {
    title: 'Limited Liability Company (LLC)',
    description: 'Most popular business structure for foreign investors in Vietnam',
    features: ['1-50 members', 'Limited liability protection', 'Flexible management structure', 'Suitable for most business types'],
    minCapital: 'No minimum capital requirement (except regulated industries)',
    timeline: '6-8 weeks',
  },
  {
    title: 'Joint Stock Company (JSC)',
    description: 'Ideal for larger businesses planning to raise capital or go public',
    features: ['Minimum 3 shareholders', 'Can issue shares publicly', 'Board of Directors required', 'Suitable for growth-oriented businesses'],
    minCapital: 'VND 3 billion for public companies',
    timeline: '8-10 weeks',
  },
  {
    title: 'Representative Office',
    description: 'Non-profit entity for market research and liaison activities',
    features: ['Cannot conduct revenue-generating activities', 'Lower setup costs', 'Valid for 5 years (renewable)', 'Ideal for market entry testing'],
    minCapital: 'No capital requirement',
    timeline: '4-6 weeks',
  },
  {
    title: 'Branch Office',
    description: 'Extension of foreign parent company for specific business activities',
    features: ['Can conduct business activities', 'Parent company liability', '5-year operation license', 'Limited business scope'],
    minCapital: 'Determined by parent company',
    timeline: '6-8 weeks',
  },
];

const establishmentProcess = [
  {
    step: 1,
    title: 'Business Structure Consultation',
    description: 'We analyze your business model, industry, and long-term goals to recommend the optimal entity type for your Vietnamese operations.',
    duration: '1-2 days',
    icon: Users,
  },
  {
    step: 2,
    title: 'Name Registration & Approval',
    description: 'Secure your business name with Vietnam\'s Department of Planning and Investment. We conduct name searches and handle the approval process.',
    duration: '3-5 days',
    icon: FileText,
  },
  {
    step: 3,
    title: 'IRC Application',
    description: 'Prepare and submit your Investment Registration Certificate (IRC) application with comprehensive documentation.',
    duration: '15-20 days',
    icon: Shield,
  },
  {
    step: 4,
    title: 'ERC Issuance',
    description: 'Obtain your Enterprise Registration Certificate (ERC) - the legal birth certificate of your Vietnamese business entity.',
    duration: '5-7 days',
    icon: Award,
  },
  {
    step: 5,
    title: 'Post-Registration Licenses',
    description: 'Secure necessary licenses: company seal, tax registration, customs code, and industry-specific permits.',
    duration: '10-15 days',
    icon: CheckCircle2,
  },
  {
    step: 6,
    title: 'Bank Account & Operations',
    description: 'Open corporate bank account, register for e-tax, and prepare for operational launch.',
    duration: '5-7 days',
    icon: TrendingUp,
  },
];

const documents = [
  {
    category: 'Investor Documents',
    items: [
      'Passport copies of all shareholders/members',
      'Residential address proof (utility bill, bank statement)',
      'Notarized and legalized certificate of good standing',
      'Company charter/articles of association (if corporate investor)',
      'Financial statements (last 2 years for corporate investors)',
      'Board resolution authorizing investment in Vietnam',
    ],
  },
  {
    category: 'Business Documents',
    items: [
      'Proposed company name (3 options)',
      'Business plan with market analysis',
      'Office lease agreement or letter of intent',
      'Capital contribution timeline',
      'Organization chart and management structure',
      'CV of legal representative and directors',
    ],
  },
  {
    category: 'Compliance Documents',
    items: [
      'Police clearance certificate (for legal representative)',
      'Health certificate (for certain industries)',
      'Professional certificates (for regulated sectors)',
      'Environmental impact assessment (if required)',
      'Fire safety clearance (for certain premises)',
    ],
  },
];

const industries = [
  'Trading & Distribution',
  'Manufacturing',
  'Technology & Software',
  'Consulting Services',
  'Food & Beverage',
  'Real Estate',
  'Education & Training',
  'Healthcare Services',
  'Tourism & Hospitality',
  'Logistics & Transportation',
  'E-Commerce',
  'Financial Services',
];

const faqs = [
  {
    question: 'How long does it take to establish a business in Vietnam?',
    answer: 'The typical timeline ranges from 6-10 weeks depending on the business structure and industry. Representative offices are fastest (4-6 weeks), while Joint Stock Companies may take 8-10 weeks due to additional requirements.',
  },
  {
    question: 'What is the minimum capital requirement for a foreign-invested company?',
    answer: 'Vietnam has no general minimum capital requirement for LLCs. However, your registered capital must be sufficient to operate your stated business activities. Certain regulated industries (banking, insurance, securities) have specific minimum capital requirements ranging from VND 3-450 billion.',
  },
  {
    question: 'Can I own 100% of a Vietnamese company as a foreigner?',
    answer: 'Yes, most industries allow 100% foreign ownership. However, some sectors have ownership restrictions: advertising (49%), securities (49%), e-commerce (certain limitations), and conditional business lines require partnerships or licenses.',
  },
  {
    question: 'Do I need to be physically present in Vietnam during company setup?',
    answer: 'Not necessarily. You can authorize TICA TrustLegal to handle the entire process with power of attorney. However, you must visit Vietnam to open the corporate bank account and sign final documents at the notary office.',
  },
  {
    question: 'What is the difference between IRC and ERC?',
    answer: 'The Investment Registration Certificate (IRC) is issued first and approves your foreign investment project. The Enterprise Registration Certificate (ERC) is issued after and legally establishes your company. For most business structures, these are now combined into a single certificate.',
  },
  {
    question: 'Can I change my business scope after registration?',
    answer: 'Yes, but it requires amending your ERC/IRC. The process takes 2-4 weeks and involves submitting documentation to explain the expansion or change in business activities. Some industry changes may require additional licenses.',
  },
];

export default function BusinessEstablishmentPage() {
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
              className="mb-8"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm tracking-wide uppercase mb-6">
                Business Establishment Services
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900 leading-tight">
                Establish Your Business in Vietnam with
                <span className="text-primary"> Confidence and Clarity</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Comprehensive guidance from business structure selection to full operational licensing.
                We've helped over 3,000 foreign investors successfully establish their Vietnamese business presence.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+84354658272"
                  className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Schedule Consultation
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

      {/* Business Structure Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gray-900">
              Choose Your Business Structure
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the right entity type is crucial for your success in Vietnam.
              Each structure has distinct advantages, requirements, and legal implications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {establishmentTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-2 border-gray-200 rounded-xl p-8 hover:border-primary hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-serif font-semibold mb-3 text-gray-900">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>

                <div className="space-y-3 mb-6">
                  {type.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm font-medium">Minimum Capital:</span>
                    <span className="text-gray-900 font-semibold">{type.minCapital}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm font-medium">Timeline:</span>
                    <span className="text-primary font-semibold">{type.timeline}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Establishment Process */}
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
              Our 6-Step Establishment Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A clear, structured approach to launching your Vietnamese business operations
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {establishmentProcess.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <process.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-primary font-bold text-lg">Step {process.step}</span>
                      <div className="flex-1 h-0.5 bg-gray-200" />
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">{process.duration}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{process.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gray-900">
              Required Documentation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive checklist of documents needed for your business establishment.
              We guide you through preparation, notarization, and legalization requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {documents.map((doc, index) => (
              <motion.div
                key={doc.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6"
              >
                <h3 className="text-xl font-serif font-semibold mb-6 text-primary">{doc.category}</h3>
                <ul className="space-y-3">
                  {doc.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
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
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized experience across diverse sectors of Vietnam's economy
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-primary hover:shadow-md transition-all duration-300"
              >
                <Globe className="w-6 h-6 text-primary mx-auto mb-2" />
                <span className="text-gray-700 font-medium text-sm">{industry}</span>
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
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Common questions about business establishment in Vietnam
            </p>
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
                href="/services/business-license-change"
                className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all duration-300 group"
              >
                <span className="text-gray-700 font-medium group-hover:text-primary">Business License Changes</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
              <Link
                href="/services/foreign-labor-visa"
                className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all duration-300 group"
              >
                <span className="text-gray-700 font-medium group-hover:text-primary">Foreign Labor & Visa Services</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
              <Link
                href="/services/corporate-legal"
                className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all duration-300 group"
              >
                <span className="text-gray-700 font-medium group-hover:text-primary">Corporate Legal Services</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
              <Link
                href="/services/sublicense-service"
                className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all duration-300 group"
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
