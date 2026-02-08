'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Award, CheckCircle2, Clock, Shield, Phone, Mail, ArrowRight, FileCheck, Building2, AlertCircle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const sublicenseTypes = [
  {
    title: 'Trading Sublicense',
    description: 'Essential for import/export and distribution activities',
    requirements: ['Valid ERC', 'Registered capital proof', 'Warehouse agreement', 'Product list with HS codes'],
    timeline: '3-4 weeks',
    complexity: 'Medium',
  },
  {
    title: 'Food Safety Sublicense',
    description: 'Required for food production, processing, and trading businesses',
    requirements: ['Food safety certification', 'Production facility inspection', 'Quality control procedures', 'Staff training certificates'],
    timeline: '4-6 weeks',
    complexity: 'High',
  },
  {
    title: 'Construction Sublicense',
    description: 'Permits for construction, design, and contracting services',
    requirements: ['Professional certifications', 'Technical staff qualifications', 'Equipment inventory', 'Financial capacity proof'],
    timeline: '5-7 weeks',
    complexity: 'High',
  },
  {
    title: 'Education & Training License',
    description: 'Authorization for educational institutions and training centers',
    requirements: ['Curriculum approval', 'Qualified instructors', 'Facility compliance', 'Educational materials review'],
    timeline: '6-8 weeks',
    complexity: 'High',
  },
  {
    title: 'Healthcare Practice License',
    description: 'Permits for medical clinics, dental practices, and health services',
    requirements: ['Medical practitioner licenses', 'Facility health inspection', 'Medical equipment certification', 'Professional liability insurance'],
    timeline: '8-12 weeks',
    complexity: 'Very High',
  },
  {
    title: 'Environmental Permits',
    description: 'Required for businesses with environmental impact',
    requirements: ['Environmental impact assessment', 'Waste management plan', 'Pollution control measures', 'Monitoring procedures'],
    timeline: '6-10 weeks',
    complexity: 'High',
  },
];

const processSteps = [
  {
    step: 1,
    title: 'License Assessment',
    description: 'We analyze your business activities to identify all required sublicenses and conditional permits based on Vietnamese regulations.',
    duration: '1-2 days',
  },
  {
    step: 2,
    title: 'Document Preparation',
    description: 'Comprehensive preparation of application forms, technical documentation, and supporting evidence tailored to each license authority.',
    duration: '1-2 weeks',
  },
  {
    step: 3,
    title: 'Authority Submission',
    description: 'Strategic submission to relevant ministries, departments, and regulatory bodies with follow-up coordination.',
    duration: '1-3 days',
  },
  {
    step: 4,
    title: 'Inspection & Compliance',
    description: 'Coordinate site inspections, facility audits, and compliance verification with regulatory officials.',
    duration: '2-4 weeks',
  },
  {
    step: 5,
    title: 'License Issuance',
    description: 'Obtain official sublicenses and permits with proper registration and activation for legal operations.',
    duration: '1-2 weeks',
  },
];

const commonSublicenses = [
  'Import-Export License',
  'Food Safety Certificate',
  'Fire Prevention & Fighting Certificate',
  'Environmental Protection License',
  'Advertising License',
  'Liquor Trading License',
  'Cosmetics Trading License',
  'Pharmaceutical License',
  'Telecommunications License',
  'Foreign Labor Employment License',
  'Real Estate Brokerage License',
  'Security Services License',
];

const faqs = [
  {
    question: 'What is a sublicense and why do I need one?',
    answer: 'A sublicense is a specialized permit required for specific business activities beyond your basic business license (ERC/IRC). Vietnam regulates certain industries more strictly - food, healthcare, education, construction, import/export, etc. Operating without required sublicenses can result in fines, business suspension, or license revocation.',
  },
  {
    question: 'How long do sublicenses take to obtain?',
    answer: 'Timelines vary significantly by license type and complexity. Simple permits like fire safety certificates may take 2-3 weeks, while complex licenses like healthcare practice permits can take 8-12 weeks due to extensive facility inspections and documentation requirements.',
  },
  {
    question: 'Can I start operations while waiting for sublicenses?',
    answer: 'No. You must obtain all required sublicenses BEFORE commencing regulated activities. Operating without proper licenses exposes your business to penalties, forced closure, and legal liability. Some preliminary activities may be permissible - we can advise on your specific situation.',
  },
  {
    question: 'Do sublicenses need to be renewed?',
    answer: 'Yes, most sublicenses have validity periods ranging from 1-5 years and must be renewed before expiration. Some licenses require periodic re-inspection and compliance verification. We provide renewal reminders and handle the renewal process.',
  },
  {
    question: 'What happens if regulations change after I get my license?',
    answer: 'Vietnamese regulations evolve frequently. When laws change, existing licenses may need amendments or additional permits. We monitor regulatory changes affecting our clients and proactively notify you of any required updates to maintain compliance.',
  },
];

export default function SublicenseServicePage() {
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
                Sublicense & Specialized Permit Services
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900 leading-tight">
                Navigate Vietnam's Complex
                <span className="text-primary"> Licensing Requirements</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Expert guidance to secure all necessary sublicenses, conditional permits, and specialized authorizations
                for your business operations in Vietnam. Stay compliant, avoid penalties, operate with confidence.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+84354658272"
                  className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  License Consultation
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

      {/* Sublicense Diagram */}
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
                src="/images/services/sublicense-diagram.png"
                alt="Vietnam Sublicense Process Diagram"
                fill
                className="object-contain bg-gray-50 p-8"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sublicense Types */}
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
              Common Sublicenses We Handle
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized expertise across Vietnam's regulated industries and conditional business lines
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {sublicenseTypes.map((type, index) => (
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

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-700 mb-2 uppercase">Key Requirements:</h4>
                  <ul className="space-y-1">
                    {type.requirements.slice(0, 3).map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{type.timeline}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    type.complexity === 'Very High' ? 'bg-red-100 text-red-700' :
                    type.complexity === 'High' ? 'bg-orange-100 text-orange-700' :
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

      {/* Process Steps */}
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
              Our Sublicense Application Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to securing all required permits and authorizations
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {processSteps.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{process.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{process.title}</h3>
                      <div className="flex-1 h-0.5 bg-gray-200" />
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">{process.duration}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{process.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Sublicenses Grid */}
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
              Frequently Required Sublicenses
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Industry-specific permits and conditional business licenses
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {commonSublicenses.map((license, index) => (
              <motion.div
                key={license}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-primary hover:shadow-md transition-all duration-300"
              >
                <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                <span className="text-gray-700 font-medium text-sm">{license}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Box */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-red-900 mb-3">
                    Operating Without Required Licenses is Illegal
                  </h3>
                  <p className="text-red-800 leading-relaxed mb-4">
                    Vietnamese authorities actively enforce licensing requirements. Penalties for non-compliance include:
                  </p>
                  <ul className="space-y-2 text-red-800">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Fines ranging from VND 5 million to VND 500 million depending on violation severity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Forced suspension of operations until compliance is achieved</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Business license revocation for serious or repeated violations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Personal liability for company directors and legal representatives</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary transition-all duration-300"
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold mb-6 text-center text-gray-900">
              Related Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/services/business-establishment"
                className="flex items-center justify-between p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all duration-300 group"
              >
                <span className="text-gray-700 font-medium group-hover:text-primary">Business Establishment</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
              <Link
                href="/services/business-license-change"
                className="flex items-center justify-between p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all duration-300 group"
              >
                <span className="text-gray-700 font-medium group-hover:text-primary">Business License Changes</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
