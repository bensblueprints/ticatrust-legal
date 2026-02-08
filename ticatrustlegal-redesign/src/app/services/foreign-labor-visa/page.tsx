'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Plane, CheckCircle2, Clock, Users, Phone, Mail, ArrowRight, FileText, Shield, Globe, Briefcase } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const visaTypes = [
  {
    title: 'Work Permit (WP)',
    description: 'Required for all foreign employees working in Vietnam',
    duration: 'Up to 2 years (renewable)',
    requirements: ['Valid employment contract', 'Health certificate', 'Police clearance', 'Professional qualifications', 'Passport validity 12+ months'],
    timeline: '3-4 weeks',
    icon: Briefcase,
  },
  {
    title: 'Temporary Residence Card (TRC)',
    description: 'Long-term residence permit for foreign workers and dependents',
    duration: 'Up to 3 years (aligned with work permit)',
    requirements: ['Valid work permit', 'Proof of accommodation', 'Health insurance', 'Registration certificate', 'Family relationship proof (dependents)'],
    timeline: '2-3 weeks',
    icon: Shield,
  },
  {
    title: 'Business Visa (DN)',
    description: 'For business meetings, negotiations, and short-term work',
    duration: '3 months to 1 year (multiple entry)',
    requirements: ['Invitation letter from Vietnamese company', 'Business purpose documentation', 'Valid passport', 'Passport photos', 'Application form'],
    timeline: '5-7 days',
    icon: Globe,
  },
];

const processSteps = [
  {
    step: 1,
    title: 'Eligibility Assessment',
    description: 'We evaluate the foreign employee\'s qualifications, experience, and the position requirements to ensure compliance with Vietnamese labor laws and work permit conditions.',
    duration: '1-2 days',
  },
  {
    step: 2,
    title: 'Document Compilation',
    description: 'Comprehensive preparation of all required documents including employment contracts, professional certificates, health clearances, and legalized credentials from the home country.',
    duration: '1-2 weeks',
  },
  {
    step: 3,
    title: 'Labor Approval',
    description: 'Submit work permit pre-approval application to Department of Labor, Invalids and Social Affairs (DoLISA) with detailed job descriptions and labor market justification.',
    duration: '5-7 days',
  },
  {
    step: 4,
    title: 'Work Permit Issuance',
    description: 'Process the official work permit application and obtain the government-issued work permit card for the foreign employee.',
    duration: '10-15 days',
  },
  {
    step: 5,
    title: 'Visa & TRC Application',
    description: 'Apply for long-term work visa and temporary residence card at Immigration Department with work permit as supporting documentation.',
    duration: '2-3 weeks',
  },
  {
    step: 6,
    title: 'Registration & Compliance',
    description: 'Complete police registration, tax registration, social insurance enrollment, and provide ongoing compliance support for visa renewals.',
    duration: '1 week',
  },
];

const exemptCategories = [
  {
    title: 'Work Permit Exemptions',
    categories: [
      'Company owners/shareholders staying less than 30 days',
      'Intra-company transferees (ICT) under 90 days',
      'Emergency repair technicians (< 90 days)',
      'Lawyers with Vietnamese practice license',
      'Foreign NGO representatives with permit',
      'Language teachers with recognized TEFL/TESOL (certain conditions)',
    ],
  },
  {
    title: 'Typical Approval Requirements',
    categories: [
      'Minimum 3 years relevant work experience',
      'Professional qualifications matching position',
      'Position not easily filled by Vietnamese workers',
      'Valid employment contract (12+ months)',
      'Company must demonstrate recruitment efforts',
      'Compliance with foreign labor quota (if applicable)',
    ],
  },
];

const dependentServices = [
  'Dependent visa applications for spouses and children',
  'Temporary residence cards for family members',
  'School enrollment documentation for dependent children',
  'Family registration at local police station',
  'Renewal and extension services for family visas',
  'Conversion from tourist to dependent visa',
];

const faqs = [
  {
    question: 'How long does it take to get a work permit in Vietnam?',
    answer: 'The standard work permit process takes 3-4 weeks from document submission to issuance, assuming all documents are prepared correctly. The timeline includes DoLISA pre-approval (5-7 days) and work permit processing (10-15 days). Urgent processing may be available for certain cases with additional fees.',
  },
  {
    question: 'What are the minimum qualifications for a Vietnam work permit?',
    answer: 'Generally, foreign workers need: (1) minimum 3 years of relevant work experience OR a university degree in a related field, (2) clean criminal record, (3) health clearance, and (4) professional qualifications matching the position. Specific industries may have additional requirements.',
  },
  {
    question: 'Can I work in Vietnam on a business visa?',
    answer: 'No. Business visas (DN) are strictly for business activities like meetings, site visits, and contract negotiations - not employment. Working without a proper work permit violates Vietnamese law and can result in fines, deportation, and business penalties for your employer.',
  },
  {
    question: 'Do I need a work permit if I own the company?',
    answer: 'It depends. If you are a shareholder but also hold a management position (Director, CEO, etc.) and work in Vietnam, you need a work permit. Pure investors who don\'t perform daily management may qualify for exemption if stays are under 30 days per visit.',
  },
  {
    question: 'Can my family join me in Vietnam on a work permit?',
    answer: 'Yes. Spouses and children (under 18) of work permit holders can apply for dependent visas and temporary residence cards. They can live in Vietnam for the duration of your work permit but cannot work unless they obtain their own work permits.',
  },
  {
    question: 'What happens if my work permit expires?',
    answer: 'You must stop working immediately when your work permit expires. Continue working is illegal and subject to penalties. Work permit renewals should be initiated 60-90 days before expiration. If you change employers, you need a new work permit - permits are non-transferable.',
  },
];

const keyDocuments = [
  {
    category: 'Personal Documents',
    items: [
      'Passport with 12+ months validity',
      'Passport-sized photos (4x6cm, white background)',
      'Health certificate from qualified medical facility',
      'Police clearance certificate from home country (legalized)',
      'CV/resume detailing work experience',
    ],
  },
  {
    category: 'Professional Credentials',
    items: [
      'University degree (notarized & legalized)',
      'Professional certificates and licenses',
      'Reference letters from previous employers',
      'Proof of 3+ years relevant experience',
      'Job description and employment contract',
    ],
  },
  {
    category: 'Employer Documents',
    items: [
      'Company business license (ERC)',
      'Employment contract (bilingual Vietnamese-English)',
      'Labor demand explanation letter',
      'Organizational chart showing position',
      'Evidence of recruitment efforts (if required)',
    ],
  },
];

export default function ForeignLaborVisaPage() {
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
                Foreign Labor & Visa Services
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900 leading-tight">
                Work Permits, Visas & Immigration
                <span className="text-primary"> Solutions for Vietnam</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Comprehensive work permit and visa services for foreign employees, business visitors, and their families.
                Navigate Vietnam's immigration system with expert guidance and full compliance support.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+84354658272"
                  className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Visa Consultation
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

      {/* Passport Icon Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto"
          >
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
              <Image
                src="/images/icons/passport.png"
                alt="Vietnam Work Permit and Visa Services"
                width={300}
                height={300}
                className="object-contain p-12"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visa Types */}
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
              Work Authorization Types
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding your options for legal employment in Vietnam
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {visaTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <type.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-2xl font-serif font-semibold mb-3 text-gray-900">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>

                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600 text-sm font-medium">Validity:</span>
                    <span className="text-primary font-semibold text-sm">{type.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm font-medium">Timeline:</span>
                    <span className="text-gray-900 font-semibold text-sm">{type.timeline}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-gray-700 mb-3 uppercase">Key Requirements:</h4>
                  <ul className="space-y-2">
                    {type.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
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
              Our Work Permit Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end work permit and visa services from application to renewal
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

      {/* Required Documents */}
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
              Required Documentation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive checklist for work permit applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {keyDocuments.map((doc, index) => (
              <motion.div
                key={doc.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-xl p-6"
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

      {/* Exemptions & Requirements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {exemptCategories.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8"
              >
                <h3 className="text-2xl font-serif font-semibold mb-6 text-gray-900">{section.title}</h3>
                <ul className="space-y-3">
                  {section.categories.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dependent Services */}
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
              Family & Dependent Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete visa support for spouses and children of foreign workers
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dependentServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white border-2 border-gray-200 rounded-lg p-4 flex items-center gap-3 hover:border-primary hover:shadow-md transition-all duration-300"
                >
                  <Users className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{service}</span>
                </motion.div>
              ))}
            </div>
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
                href="/services/corporate-legal"
                className="flex items-center justify-between p-4 bg-gray-50 border-2 border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all duration-300 group"
              >
                <span className="text-gray-700 font-medium group-hover:text-primary">Corporate Legal Services</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
