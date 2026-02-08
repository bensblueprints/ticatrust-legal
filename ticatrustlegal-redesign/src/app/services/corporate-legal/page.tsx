'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Scale, CheckCircle2, Clock, Shield, Phone, Mail, ArrowRight, FileText, Users, Briefcase, AlertTriangle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const legalServices = [
  {
    title: 'Contract Drafting & Review',
    description: 'Comprehensive contract services tailored to Vietnamese law',
    services: [
      'Employment contracts and labor agreements',
      'Supplier and distribution agreements',
      'Partnership and joint venture contracts',
      'Franchise and licensing agreements',
      'Lease agreements (office, warehouse, retail)',
      'Non-disclosure and confidentiality agreements',
    ],
    icon: FileText,
  },
  {
    title: 'Corporate Governance',
    description: 'Ensure proper structure and compliance with corporate regulations',
    services: [
      'Board of Directors formation and operations',
      'Shareholders meeting preparation and minutes',
      'Company charter amendments',
      'Capital contribution and equity transfers',
      'Corporate restructuring and M&A support',
      'Annual compliance and reporting obligations',
    ],
    icon: Shield,
  },
  {
    title: 'Labor & Employment Law',
    description: 'Navigate Vietnam\'s strict labor regulations with confidence',
    services: [
      'Employment contract compliance (definite/indefinite term)',
      'Internal labor regulations (ILR) drafting',
      'Disciplinary procedures and termination processes',
      'Labor dispute resolution and mediation',
      'Collective labor agreement support',
      'Social insurance and labor compliance audits',
    ],
    icon: Users,
  },
  {
    title: 'Intellectual Property Protection',
    description: 'Safeguard your trademarks, patents, and business innovations',
    services: [
      'Trademark registration in Vietnam',
      'Patent and industrial design registration',
      'Copyright protection and enforcement',
      'Technology transfer agreements',
      'IP portfolio management and renewal',
      'Anti-counterfeiting and infringement actions',
    ],
    icon: Shield,
  },
  {
    title: 'Dispute Resolution & Litigation',
    description: 'Expert representation in commercial disputes and court proceedings',
    services: [
      'Commercial arbitration and mediation',
      'Court litigation (economic court, civil court)',
      'Debt collection and enforcement',
      'Contract dispute resolution',
      'Labor tribunal representation',
      'Pre-litigation negotiation and settlement',
    ],
    icon: Scale,
  },
  {
    title: 'Compliance & Risk Management',
    description: 'Proactive legal compliance to minimize business risks',
    services: [
      'Regulatory compliance audits',
      'Anti-corruption and FCPA compliance',
      'Data protection and privacy (GDPR alignment)',
      'Competition law compliance',
      'Industry-specific regulatory advice',
      'Corporate risk assessment and mitigation',
    ],
    icon: AlertTriangle,
  },
];

const processSteps = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'Free 30-minute consultation to understand your legal needs, business context, and objectives. We assess urgency, complexity, and provide preliminary guidance.',
    duration: '30-60 minutes',
  },
  {
    step: 2,
    title: 'Legal Analysis & Strategy',
    description: 'In-depth review of documents, contracts, or legal issues. We research applicable Vietnamese laws, regulations, and precedents to develop a clear legal strategy.',
    duration: '1-3 days',
  },
  {
    step: 3,
    title: 'Solution Development',
    description: 'Draft contracts, legal opinions, compliance frameworks, or litigation strategies tailored to your business goals and Vietnamese legal requirements.',
    duration: '3-7 days',
  },
  {
    step: 4,
    title: 'Review & Negotiation',
    description: 'Collaborate with you on document revisions, negotiate with counterparties, and refine legal positions to achieve optimal outcomes.',
    duration: '2-5 days',
  },
  {
    step: 5,
    title: 'Implementation & Filing',
    description: 'Execute agreements, file necessary documents with authorities, and ensure proper registration and compliance with Vietnamese legal procedures.',
    duration: '1-2 weeks',
  },
  {
    step: 6,
    title: 'Ongoing Support',
    description: 'Provide continuous legal advice, compliance monitoring, contract management, and representation as your business evolves in Vietnam.',
    duration: 'Ongoing',
  },
];

const keyAreas = [
  {
    title: 'M&A and Corporate Restructuring',
    description: 'Full legal support for mergers, acquisitions, asset transfers, and corporate reorganizations under Vietnamese law.',
  },
  {
    title: 'Real Estate & Property Law',
    description: 'Lease negotiations, land use rights, property acquisition, construction permits, and real estate compliance.',
  },
  {
    title: 'Tax Advisory & Dispute Resolution',
    description: 'Coordination with tax authorities, tax audit representation, transfer pricing, and tax dispute resolution.',
  },
  {
    title: 'Banking & Finance Law',
    description: 'Loan agreements, security documentation, banking regulations, and financial services licensing.',
  },
  {
    title: 'E-Commerce & Technology Law',
    description: 'Website registration, e-commerce regulations, digital payment compliance, and platform legal requirements.',
  },
  {
    title: 'Environmental Compliance',
    description: 'Environmental impact assessments, waste management permits, and environmental violation remediation.',
  },
];

const faqs = [
  {
    question: 'Why do I need a Vietnamese lawyer if I already have international legal counsel?',
    answer: 'Vietnamese law is a civil law system with unique regulations, procedures, and enforcement mechanisms different from common law jurisdictions. Local counsel understands nuances of Vietnamese legal practice, has relationships with regulatory authorities, and can navigate bureaucratic processes efficiently. International firms often partner with us for Vietnam-specific matters.',
  },
  {
    question: 'How much do corporate legal services cost in Vietnam?',
    answer: 'Fees vary by complexity, urgency, and service type. Simple contract reviews may start from $300-500, while complex litigation or M&A can range from $5,000-$50,000+. We offer transparent pricing: hourly rates ($100-$250/hour), fixed fees for routine matters, and retainer arrangements for ongoing support. First consultation is complimentary.',
  },
  {
    question: 'Can you represent my company in Vietnamese courts?',
    answer: 'Yes. TICA TrustLegal\'s lawyers are licensed to practice in Vietnam and represent clients in economic courts, civil courts, labor tribunals, and arbitration proceedings. We handle both plaintiff and defendant representation in commercial disputes, contract litigation, and enforcement actions.',
  },
  {
    question: 'What is the timeline for contract drafting and review?',
    answer: 'Standard contracts (employment, NDAs, simple service agreements) typically take 2-3 business days. Complex commercial agreements (joint ventures, distribution, M&A) may require 1-2 weeks. Rush services available for urgent matters with premium fees. Timeline depends on document complexity and negotiation rounds.',
  },
  {
    question: 'Do you provide legal services in English?',
    answer: 'Yes. All our lawyers are bilingual (Vietnamese-English). We draft contracts in both languages, conduct consultations in English, and provide English translations of Vietnamese legal documents. For legal validity, certain official filings must be in Vietnamese, but we ensure you fully understand all documents.',
  },
  {
    question: 'What happens if my business faces a legal dispute in Vietnam?',
    answer: 'Contact us immediately. We\'ll assess the situation, preserve evidence, and recommend the best resolution strategy: negotiation, mediation, arbitration, or litigation. Early legal intervention significantly improves outcomes. We handle all aspects from demand letters through court enforcement if necessary.',
  },
];

export default function CorporateLegalPage() {
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
                Corporate Legal Services
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900 leading-tight">
                Comprehensive Legal Solutions for
                <span className="text-primary"> Your Vietnam Business</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Expert legal counsel across corporate governance, contracts, employment law, intellectual property,
                dispute resolution, and regulatory compliance. Protect your business with proactive legal strategies
                tailored to Vietnamese law.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+84354658272"
                  className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Legal Consultation
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

      {/* Corporate Legal Diagram */}
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
                src="/images/services/corporate-legal-diagram-1.png"
                alt="Corporate Legal Services Framework"
                fill
                className="object-contain bg-gray-50 p-8"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legal Services Grid */}
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
              Our Legal Service Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end legal support for every aspect of your Vietnamese business operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {legalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-serif font-semibold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>

                <ul className="space-y-2">
                  {service.services.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
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
              How We Work With You
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our structured approach to delivering high-quality legal services
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

      {/* Key Practice Areas */}
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
              Additional Practice Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized legal expertise across diverse business sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {keyAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-gray-600 text-sm">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-8">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">
                Why Choose TICA TrustLegal for Corporate Legal Services?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Licensed Vietnamese Lawyers</h4>
                    <p className="text-gray-600 text-sm">Qualified attorneys admitted to practice in Vietnam with deep local law expertise.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Bilingual Service (English/Vietnamese)</h4>
                    <p className="text-gray-600 text-sm">Seamless communication with international clients and Vietnamese authorities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">3,000+ Successful Cases</h4>
                    <p className="text-gray-600 text-sm">Proven track record across corporate, commercial, and regulatory matters.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Transparent Pricing</h4>
                    <p className="text-gray-600 text-sm">Clear fee structures with no hidden charges. Retainer options available.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Industry-Specific Knowledge</h4>
                    <p className="text-gray-600 text-sm">Experience across tech, manufacturing, F&B, real estate, and services sectors.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Responsive Communication</h4>
                    <p className="text-gray-600 text-sm">24-hour email response time, urgent matter prioritization.</p>
                  </div>
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
                href="/services/sublicense-service"
                className="flex items-center justify-between p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all duration-300 group"
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
