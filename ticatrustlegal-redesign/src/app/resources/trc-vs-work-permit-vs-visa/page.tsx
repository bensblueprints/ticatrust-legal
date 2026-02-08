'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, Calendar, Home, Phone, Mail, ArrowRight, CheckCircle2, AlertCircle, FileText, Briefcase, IdCard, XCircle } from 'lucide-react';

export default function TRCvsWorkPermitvsVisa() {
  const publishDate = "February 7, 2026";
  const readingTime = "10 min read";

  const tableOfContents = [
    { id: "overview", title: "Overview of Each Document" },
    { id: "definitions", title: "Detailed Definitions" },
    { id: "comparison", title: "Side-by-Side Comparison" },
    { id: "when-you-need", title: "When You Need Each Document" },
    { id: "how-they-work-together", title: "How They Work Together" },
    { id: "common-scenarios", title: "Common Scenarios Explained" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-primary transition-colors">
              Resources
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">TRC vs Work Permit vs Visa</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm tracking-wide uppercase mb-6">
                Comparison Guide
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900 leading-tight">
                TRC vs Work Permit vs Visa: Understanding the Differences
              </h1>
              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>{publishDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>{readingTime}</span>
                </div>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Confused about the difference between a TRC, work permit, and visa? You're not alone. This comprehensive
                guide breaks down each document, explains when you need them, and shows how they work together for
                foreign nationals in Vietnam.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Table of Contents */}
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-serif font-semibold text-lg mb-4 text-gray-900">Table of Contents</h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item, index) => (
                      <motion.a
                        key={item.id}
                        href={`#${item.id}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="block text-sm text-gray-600 hover:text-primary hover:bg-white px-3 py-2 rounded-lg transition-all duration-200"
                      >
                        {item.title}
                      </motion.a>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-9">
              <div className="prose prose-lg max-w-none">

                {/* Section 1: Overview */}
                <motion.section
                  id="overview"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Overview of Each Document</h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        icon: IdCard,
                        title: "Visa",
                        color: "blue",
                        subtitle: "Entry Permission",
                        description: "Allows you to enter and stay in Vietnam for a specific duration and purpose"
                      },
                      {
                        icon: Briefcase,
                        title: "Work Permit",
                        color: "green",
                        subtitle: "Employment Authorization",
                        description: "Legal permission to work for a specific employer in Vietnam"
                      },
                      {
                        icon: FileText,
                        title: "TRC",
                        color: "primary",
                        subtitle: "Residence Right",
                        description: "Official residence status allowing you to live in Vietnam long-term"
                      }
                    ].map((doc, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`bg-${doc.color === 'primary' ? 'primary' : doc.color}-50 border-2 border-${doc.color === 'primary' ? 'primary' : doc.color}-200 rounded-xl p-6 text-center`}
                      >
                        <div className={`w-16 h-16 rounded-full bg-${doc.color === 'primary' ? 'primary' : doc.color}-100 flex items-center justify-center mx-auto mb-4`}>
                          <doc.icon className={`w-8 h-8 text-${doc.color === 'primary' ? 'primary' : doc.color}-600`} />
                        </div>
                        <h3 className="font-serif font-bold text-xl mb-2 text-gray-900">{doc.title}</h3>
                        <p className={`text-sm font-semibold text-${doc.color === 'primary' ? 'primary' : doc.color}-600 mb-3`}>
                          {doc.subtitle}
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed">{doc.description}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Insight</h4>
                        <p className="text-gray-700 mb-0">
                          Think of these documents as three different permissions for three different purposes. Most foreign
                          workers in Vietnam need ALL THREE working together - visa to enter, work permit to work legally,
                          and TRC to reside legally.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Section 2: Detailed Definitions */}
                <motion.section
                  id="definitions"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-8 text-gray-900">Detailed Definitions</h2>

                  {/* Visa Definition */}
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-8 mb-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                        <IdCard className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-2xl text-gray-900">Visa (Thị thực)</h3>
                        <p className="text-blue-600 font-medium">Entry Permission Document</p>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      A visa is an official endorsement in your passport that grants permission to enter, remain in, or leave
                      Vietnam for a specified period and purpose. It's stamped or affixed to your passport pages.
                    </p>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Common Visa Types:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          { code: "DL", name: "Tourist visa", duration: "Up to 90 days" },
                          { code: "DN", name: "Business visa", duration: "Up to 90 days" },
                          { code: "LD", name: "Work visa", duration: "Up to 2 years" },
                          { code: "DT", name: "Investment visa", duration: "Up to 5 years" },
                          { code: "TT", name: "Family visit visa", duration: "Up to 5 years" },
                          { code: "HN", name: "Conference visa", duration: "Up to 3 months" }
                        ].map((visa, index) => (
                          <div key={index} className="flex items-start gap-3 text-sm">
                            <span className="font-bold text-blue-600 w-8">{visa.code}</span>
                            <div className="flex-1">
                              <span className="text-gray-900">{visa.name}</span>
                              <span className="text-gray-500"> - {visa.duration}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Work Permit Definition */}
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-8 mb-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-2xl text-gray-900">Work Permit (Giấy phép lao động)</h3>
                        <p className="text-green-600 font-medium">Employment Authorization</p>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      A work permit is official authorization from Vietnam's Department of Labor, Invalids and Social Affairs
                      (DOLISA) that allows a foreign national to work legally for a specific employer in a specific position.
                    </p>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Work Permit Characteristics:</h4>
                      <div className="space-y-3">
                        {[
                          { label: "Employer-Specific", detail: "Valid only for the sponsoring employer" },
                          { label: "Position-Specific", detail: "Limited to the job title and duties specified" },
                          { label: "Duration", detail: "Maximum 2 years, renewable" },
                          { label: "Processing Time", detail: "15-20 working days" },
                          { label: "Requirements", detail: "Education credentials, experience proof, clean criminal record" },
                          { label: "Cost", detail: "Approximately 3,000,000 - 5,000,000 VND" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold text-gray-900">{item.label}:</span>
                              <span className="text-gray-700"> {item.detail}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* TRC Definition */}
                  <div className="bg-white border-2 border-primary/30 rounded-xl p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-2xl text-gray-900">Temporary Residence Card (Thẻ tạm trú)</h3>
                        <p className="text-primary font-medium">Residence Authorization</p>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      A TRC is an official identification card issued by Vietnamese immigration authorities that grants a
                      foreign national the legal right to reside in Vietnam for a specified extended period.
                    </p>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">TRC Characteristics:</h4>
                      <div className="space-y-3">
                        {[
                          { label: "Physical Card", detail: "ID card format with photo and biometric data" },
                          { label: "Multiple Entry", detail: "Allows unlimited entries/exits during validity" },
                          { label: "Duration", detail: "6 months to 5 years depending on type" },
                          { label: "Processing Time", detail: "10-15 working days" },
                          { label: "Basis", detail: "Work, family, investment, or study" },
                          { label: "Cost", detail: "200,000 - 1,000,000 VND depending on duration" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold text-gray-900">{item.label}:</span>
                              <span className="text-gray-700"> {item.detail}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Section 3: Comparison Table */}
                <motion.section
                  id="comparison"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Side-by-Side Comparison</h2>

                  <div className="overflow-x-auto bg-white border-2 border-gray-200 rounded-xl">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="text-left p-4 font-semibold text-gray-900 border-b-2 border-gray-200">Feature</th>
                          <th className="text-left p-4 font-semibold text-blue-600 border-b-2 border-gray-200">Visa</th>
                          <th className="text-left p-4 font-semibold text-green-600 border-b-2 border-gray-200">Work Permit</th>
                          <th className="text-left p-4 font-semibold text-primary border-b-2 border-gray-200">TRC</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            feature: "Primary Purpose",
                            visa: "Entry permission",
                            work: "Employment authorization",
                            trc: "Residence right"
                          },
                          {
                            feature: "Who Issues",
                            visa: "Immigration Department",
                            work: "DOLISA",
                            trc: "Immigration Department"
                          },
                          {
                            feature: "Format",
                            visa: "Stamp in passport",
                            work: "Paper document/card",
                            trc: "Physical ID card"
                          },
                          {
                            feature: "Max Duration",
                            visa: "Up to 5 years",
                            work: "2 years",
                            trc: "5 years"
                          },
                          {
                            feature: "Cost",
                            visa: "25-135 USD",
                            work: "120-200 USD",
                            trc: "8-40 USD"
                          },
                          {
                            feature: "Processing Time",
                            visa: "3-7 days",
                            work: "15-20 days",
                            trc: "10-15 days"
                          },
                          {
                            feature: "Renewal",
                            visa: "Yes, if eligible",
                            work: "Yes, same employer",
                            trc: "Yes, if eligible"
                          },
                          {
                            feature: "Multiple Entry",
                            visa: "Depends on type",
                            work: "No (not for entry)",
                            trc: "Yes, unlimited"
                          },
                          {
                            feature: "Required For",
                            visa: "Entering Vietnam",
                            work: "Working legally",
                            trc: "Long-term residence"
                          }
                        ].map((row, index) => (
                          <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="p-4 font-medium text-gray-900">{row.feature}</td>
                            <td className="p-4 text-gray-700">{row.visa}</td>
                            <td className="p-4 text-gray-700">{row.work}</td>
                            <td className="p-4 text-gray-700">{row.trc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.section>

                {/* Section 4: When You Need Each */}
                <motion.section
                  id="when-you-need"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">When You Need Each Document</h2>

                  <div className="space-y-6">
                    {/* Visa */}
                    <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                          <IdCard className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-3 text-lg">You Need a VISA if:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                              "You want to visit Vietnam as a tourist",
                              "You're attending a business meeting or conference",
                              "You're visiting family in Vietnam",
                              "You need to enter Vietnam for any reason",
                              "Your nationality doesn't qualify for visa exemption",
                              "You're staying longer than your exemption period"
                            ].map((item, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 text-sm">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Work Permit */}
                    <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-3 text-lg">You Need a WORK PERMIT if:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                              "You're employed by a Vietnamese company",
                              "You're working in Vietnam for more than 30 days",
                              "You're receiving salary/payment for work in Vietnam",
                              "You're in a management or executive position",
                              "You're a technical expert or specialist",
                              "You're teaching or training in Vietnam"
                            ].map((item, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 text-sm">{item}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 bg-white rounded-lg p-4 border border-green-200">
                            <p className="text-sm text-gray-700">
                              <strong>Exemptions:</strong> Some roles don't require a work permit, including company owners
                              with 100% foreign capital, intra-company transferees (under certain conditions), and volunteers
                              (with proper documentation).
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* TRC */}
                    <div className="bg-primary/5 border-2 border-primary/30 rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-3 text-lg">You Need a TRC if:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                              "You're working in Vietnam with a work permit",
                              "You're married to a Vietnamese citizen",
                              "You're a child of a Vietnamese citizen",
                              "You're investing in Vietnam",
                              "You're studying long-term in Vietnam",
                              "You need to reside in Vietnam for extended periods"
                            ].map((item, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 text-sm">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Section 5: How They Work Together */}
                <motion.section
                  id="how-they-work-together"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">How They Work Together</h2>

                  <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8">
                    <h4 className="font-semibold text-gray-900 mb-6 text-xl text-center">
                      The Three-Document System for Foreign Workers
                    </h4>

                    <div className="max-w-3xl mx-auto">
                      <div className="relative">
                        {/* Connection Lines */}
                        <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gray-300"></div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
                          {[
                            {
                              number: "1",
                              icon: IdCard,
                              color: "blue",
                              title: "VISA",
                              description: "First, obtain appropriate visa (typically LD - work visa)"
                            },
                            {
                              number: "2",
                              icon: Briefcase,
                              color: "green",
                              title: "WORK PERMIT",
                              description: "Then, employer applies for your work permit"
                            },
                            {
                              number: "3",
                              icon: FileText,
                              color: "primary",
                              title: "TRC",
                              description: "Finally, apply for TRC based on work permit"
                            }
                          ].map((step, index) => (
                            <div key={index} className="relative">
                              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center relative z-10">
                                <div className={`w-12 h-12 rounded-full bg-${step.color === 'primary' ? 'primary' : step.color}-500 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4`}>
                                  {step.number}
                                </div>
                                <div className={`w-16 h-16 rounded-lg bg-${step.color === 'primary' ? 'primary' : step.color}-100 flex items-center justify-center mx-auto mb-4`}>
                                  <step.icon className={`w-8 h-8 text-${step.color === 'primary' ? 'primary' : step.color}-600`} />
                                </div>
                                <h5 className="font-bold text-gray-900 mb-2">{step.title}</h5>
                                <p className="text-sm text-gray-600">{step.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Important Dependencies</h5>
                          <ul className="space-y-2 text-gray-700 text-sm">
                            <li><strong>Work Permit requires:</strong> Valid work visa (LD) to apply</li>
                            <li><strong>TRC requires:</strong> Valid work permit (for work-based TRC)</li>
                            <li><strong>All three must:</strong> Have overlapping validity periods</li>
                            <li><strong>If one expires:</strong> It affects the validity of dependent documents</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Section 6: Common Scenarios */}
                <motion.section
                  id="common-scenarios"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Common Scenarios Explained</h2>

                  <div className="space-y-6">
                    {[
                      {
                        scenario: "Foreign Employee Starting Work in Vietnam",
                        documents: ["Visa ✓", "Work Permit ✓", "TRC ✓"],
                        explanation: "You need all three. Start with LD work visa, then your employer applies for work permit, then apply for TRC. Process takes 4-6 weeks total.",
                        timeline: "Week 1: Visa | Week 2-3: Work Permit | Week 4-5: TRC"
                      },
                      {
                        scenario: "Tourist Visiting Vietnam for 2 Weeks",
                        documents: ["Visa ✓", "Work Permit ✗", "TRC ✗"],
                        explanation: "Tourist visa only (DL type). No work permitted, no need for work permit or TRC for short-term tourism.",
                        timeline: "Apply for tourist visa 3-5 days before arrival"
                      },
                      {
                        scenario: "Foreign Spouse of Vietnamese Citizen",
                        documents: ["Visa ✓", "Work Permit ?", "TRC ✓"],
                        explanation: "You need visa to enter and family-based TRC. Work permit only needed if you plan to work for a Vietnamese employer.",
                        timeline: "Visa: Before arrival | TRC: After arrival with marriage certificate"
                      },
                      {
                        scenario: "Foreign Investor (100% Foreign-Owned Company)",
                        documents: ["Visa ✓", "Work Permit ✗", "TRC ✓"],
                        explanation: "Investment visa (DT) and investment-based TRC. No work permit needed as you own the company, not employed by it.",
                        timeline: "Investment certificate → Visa → TRC (2-3 months total)"
                      },
                      {
                        scenario: "Freelancer Working Remotely from Vietnam",
                        documents: ["Visa ✓", "Work Permit ✗", "TRC ✗"],
                        explanation: "Tourist or business visa sufficient if working for foreign clients. Cannot legally work for Vietnamese companies without work permit.",
                        timeline: "Renew visa every 90 days (or get 1-year visa)"
                      },
                      {
                        scenario: "Student Studying at Vietnamese University",
                        documents: ["Visa ✓", "Work Permit ✗", "TRC ✓"],
                        explanation: "Student visa and study-based TRC. Work permit only if you take part-time employment (which requires special permission).",
                        timeline: "Acceptance letter → Student visa → TRC upon enrollment"
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
                      >
                        <h4 className="font-semibold text-gray-900 mb-4 text-lg">{item.scenario}</h4>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.documents.map((doc, docIndex) => {
                            const isRequired = doc.includes('✓');
                            const isNotRequired = doc.includes('✗');
                            const isMaybe = doc.includes('?');
                            return (
                              <span
                                key={docIndex}
                                className={`px-3 py-1 rounded-full text-sm font-medium ${
                                  isRequired ? 'bg-green-100 text-green-700' :
                                  isNotRequired ? 'bg-gray-100 text-gray-500' :
                                  'bg-yellow-100 text-yellow-700'
                                }`}
                              >
                                {doc}
                              </span>
                            );
                          })}
                        </div>

                        <p className="text-gray-700 mb-3 leading-relaxed">{item.explanation}</p>

                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-sm text-gray-600">
                            <strong className="text-gray-900">Timeline:</strong> {item.timeline}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* Section 7: FAQ */}
                <motion.section
                  id="faq"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>

                  <div className="space-y-4">
                    {[
                      {
                        question: "Can I work in Vietnam with just a visa?",
                        answer: "No. While a visa allows you to enter and stay in Vietnam, you need a separate work permit to work legally for a Vietnamese employer. Working without a work permit can result in fines, deportation, and a ban from re-entering Vietnam."
                      },
                      {
                        question: "Do I need a TRC if I have a 2-year work visa?",
                        answer: "Yes, if you're working in Vietnam. The visa grants entry permission, but the TRC grants residence status. Both are required and must have overlapping validity periods."
                      },
                      {
                        question: "What happens if my work permit expires but my visa is still valid?",
                        answer: "Your TRC becomes invalid when your work permit expires (for work-based TRC). You must either renew your work permit or change your visa/TRC to a different category. You cannot continue working without a valid work permit."
                      },
                      {
                        question: "Can I get a TRC without a work permit?",
                        answer: "Yes, but only if you qualify under a different category such as family (married to Vietnamese citizen), investment, or study. Work-based TRC requires a valid work permit."
                      },
                      {
                        question: "Which document allows me to enter and exit Vietnam multiple times?",
                        answer: "Both a multi-entry visa and a TRC allow multiple entries. However, the TRC is more convenient as it allows unlimited entries during its validity, while multi-entry visas may have limitations on the number of entries."
                      },
                      {
                        question: "Can I change employers with my current work permit?",
                        answer: "No. Work permits are employer-specific. If you change jobs, your new employer must apply for a new work permit, and you'll need to update your TRC with the new sponsorship information."
                      }
                    ].map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
                      >
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-start gap-3">
                          <span className="text-primary flex-shrink-0">Q:</span>
                          <span>{faq.question}</span>
                        </h4>
                        <p className="text-gray-700 leading-relaxed ml-6">{faq.answer}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* Related Articles */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Related Resources</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link href="/resources/what-is-trc-vietnam">
                      <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-xl p-6 hover:border-primary hover:shadow-xl transition-all duration-300 group">
                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                          What is a Temporary Residence Card (TRC) in Vietnam?
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Complete guide to understanding TRC, requirements, application process, and costs.
                        </p>
                        <div className="flex items-center gap-2 text-primary font-medium text-sm">
                          Read Article
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                    <Link href="/resources/types-of-trc-vietnam">
                      <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-xl p-6 hover:border-primary hover:shadow-xl transition-all duration-300 group">
                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                          5 Types of TRC in Vietnam: Which One Do You Need?
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Detailed breakdown of each TRC type with specific requirements and eligibility.
                        </p>
                        <div className="flex items-center gap-2 text-primary font-medium text-sm">
                          Read Article
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </motion.section>

              </div>
            </main>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Need Help Navigating Vietnam's Work Documentation?
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Our legal experts handle visa, work permit, and TRC applications end-to-end. We ensure all three documents
                are properly coordinated and aligned for seamless employment in Vietnam.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+84354658272"
                  className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  +84 354 658 272
                </a>
                <a
                  href="mailto:tica.trustlegal@gmail.com"
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Get Free Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
