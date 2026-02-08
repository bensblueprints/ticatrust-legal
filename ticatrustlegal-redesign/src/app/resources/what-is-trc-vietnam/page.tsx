'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, Calendar, Home, FileText, Phone, Mail, ArrowRight, CheckCircle2, AlertCircle, Info, DollarSign, Users, Building2 } from 'lucide-react';

export default function WhatIsTRCVietnam() {
  const publishDate = "February 7, 2026";
  const readingTime = "12 min read";

  const tableOfContents = [
    { id: "what-is-trc", title: "What is a Temporary Residence Card?" },
    { id: "who-needs", title: "Who Needs a TRC?" },
    { id: "benefits", title: "Key Benefits of Having a TRC" },
    { id: "requirements", title: "Requirements and Eligibility" },
    { id: "application-process", title: "Application Process Step-by-Step" },
    { id: "timeline", title: "Processing Timeline" },
    { id: "costs", title: "Costs and Fees" },
    { id: "renewal", title: "Renewal and Extension" },
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
            <span className="text-gray-900 font-medium">What is a TRC in Vietnam</span>
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
                Educational Guide
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900 leading-tight">
                What is a Temporary Residence Card (TRC) in Vietnam? Complete Guide 2025
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
                A comprehensive guide to understanding Vietnam's Temporary Residence Card (TRC) - what it is,
                who needs it, how to get it, and why it's essential for foreign nationals living and working in Vietnam.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Table of Contents - Sticky Sidebar */}
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

                {/* Section 1: What is a TRC */}
                <motion.section
                  id="what-is-trc"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">What is a Temporary Residence Card?</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <Info className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Official Definition</h4>
                        <p className="text-gray-700 leading-relaxed mb-0">
                          A Temporary Residence Card (Thẻ tạm trú - TRC) is an official identification document issued by Vietnamese
                          immigration authorities that grants foreign nationals the legal right to reside in Vietnam for a specified
                          period, typically ranging from 6 months to 5 years.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Unlike a visa, which grants entry permission, a TRC is specifically designed for foreign nationals who plan to
                    stay in Vietnam for extended periods. It serves as both a residence permit and an important identification document
                    that facilitates daily life in Vietnam.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    The TRC system was established under the Law on Entry, Exit, Transit and Residence of Foreigners in Vietnam
                    (Law No. 47/2014/QH13) and subsequent implementing regulations. It represents Vietnam's structured approach to
                    managing foreign residents while providing them with legal status and protection.
                  </p>

                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Key Characteristics of a TRC:</h4>
                    <div className="space-y-3">
                      {[
                        "Physical card format similar to a national ID card",
                        "Contains biometric information and photo",
                        "Valid for specific duration (6 months to 5 years)",
                        "Allows multiple entries and exits from Vietnam",
                        "Must be carried at all times as identification",
                        "Renewable upon expiration if eligibility continues"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.section>

                {/* Section 2: Who Needs TRC */}
                <motion.section
                  id="who-needs"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Who Needs a TRC?</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Not every foreign national in Vietnam requires a TRC. Understanding whether you need one depends on your purpose
                    of stay, duration, and specific circumstances. Here's a comprehensive breakdown:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <CheckCircle2 className="w-6 h-6 text-green-500" />
                        <h4 className="font-semibold text-gray-900">You NEED a TRC if you are:</h4>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Working in Vietnam with a work permit</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Married to a Vietnamese citizen</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>A child of a Vietnamese citizen</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Investing in Vietnam (with investment certificate)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Studying long-term in Vietnam</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Residing for specialized projects or programs</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <AlertCircle className="w-6 h-6 text-orange-500" />
                        <h4 className="font-semibold text-gray-900">You DON'T need a TRC if you:</h4>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>Are visiting as a tourist (short-term visa)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>Are on a business trip (business visa)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>Hold diplomatic or official passport</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>Are in transit through Vietnam</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>Stay is less than 6 months (visa sufficient)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <Info className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Important Note</h4>
                        <p className="text-gray-700 mb-0">
                          Even if you have a long-term visa (1-5 years), you still need a TRC if you're working in Vietnam or
                          fall into any of the categories listed above. The visa grants entry permission, while the TRC grants
                          residence rights.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Section 3: Benefits */}
                <motion.section
                  id="benefits"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Key Benefits of Having a TRC</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Holding a valid TRC provides numerous practical advantages that significantly enhance your experience living
                    in Vietnam:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        icon: Building2,
                        title: "Legal Residence Status",
                        description: "Official recognition as a legal resident with full documentation and protection under Vietnamese law."
                      },
                      {
                        icon: Users,
                        title: "Multiple Entry/Exit",
                        description: "Freedom to leave and re-enter Vietnam without applying for new visas each time, valid for the TRC duration."
                      },
                      {
                        icon: FileText,
                        title: "Official Identification",
                        description: "Serves as a valid ID for hotels, banks, rental agreements, and various administrative procedures."
                      },
                      {
                        icon: DollarSign,
                        title: "Banking Access",
                        description: "Easier to open bank accounts, access financial services, and conduct business transactions."
                      },
                      {
                        icon: Home,
                        title: "Property Rental",
                        description: "Required for signing long-term rental agreements and registering temporary residence at your address."
                      },
                      {
                        icon: CheckCircle2,
                        title: "Government Services",
                        description: "Access to various government services and simplified administrative procedures for foreign residents."
                      }
                    ].map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          <benefit.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* Section 4: Requirements */}
                <motion.section
                  id="requirements"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Requirements and Eligibility</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    To be eligible for a TRC, you must meet specific criteria and provide required documentation. The exact
                    requirements vary depending on the type of TRC you're applying for:
                  </p>

                  <div className="bg-gray-50 rounded-xl p-8 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-6 text-xl">General Requirements (All Types)</h4>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Valid Passport",
                          detail: "Minimum 6 months validity beyond intended stay period"
                        },
                        {
                          title: "Entry Visa",
                          detail: "Appropriate visa category matching your TRC application purpose"
                        },
                        {
                          title: "Clean Criminal Record",
                          detail: "No criminal convictions or pending charges (certificate required)"
                        },
                        {
                          title: "Health Certificate",
                          detail: "Recent medical examination confirming good health and absence of prohibited diseases"
                        },
                        {
                          title: "Passport Photos",
                          detail: "4x6cm size, white background, recent (within 6 months)"
                        },
                        {
                          title: "Financial Means",
                          detail: "Proof of sufficient funds or income to support yourself in Vietnam"
                        }
                      ].map((req, index) => (
                        <div key={index} className="flex items-start gap-4 pb-4 border-b border-gray-200 last:border-0">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-semibold text-sm">{index + 1}</span>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-1">{req.title}</h5>
                            <p className="text-gray-600 text-sm">{req.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Category-Specific Requirements</h4>
                        <p className="text-gray-700 mb-3">
                          Depending on your specific situation, additional documents may be required:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                          <li><strong>Work-based TRC:</strong> Work permit, employment contract, company sponsorship letter</li>
                          <li><strong>Family-based TRC:</strong> Marriage certificate, birth certificate, family book (hộ khẩu)</li>
                          <li><strong>Investment TRC:</strong> Investment certificate, business registration, capital proof</li>
                          <li><strong>Study TRC:</strong> Acceptance letter, enrollment confirmation, tuition payment proof</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Section 5: Application Process */}
                <motion.section
                  id="application-process"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Application Process Step-by-Step</h2>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    The TRC application process involves multiple steps and careful coordination with various authorities.
                    Here's the complete process:
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        step: "1",
                        title: "Prepare Documentation",
                        description: "Gather all required documents including passport, visa, health certificate, criminal record check, and category-specific documents. Ensure all foreign documents are translated into Vietnamese by a certified translator and notarized.",
                        duration: "1-2 weeks",
                        tips: ["Start early - some documents take time to obtain", "Double-check all documents are current", "Prepare both originals and certified copies"]
                      },
                      {
                        step: "2",
                        title: "Sponsorship Arrangement",
                        description: "Secure a sponsor in Vietnam (employer, family member, or sponsoring organization). The sponsor must submit a sponsorship letter and accept legal responsibility for you during your stay.",
                        duration: "3-5 days",
                        tips: ["Sponsor must be Vietnamese entity or citizen", "Sponsorship letter must state purpose and duration", "Sponsor's documents must be verified"]
                      },
                      {
                        step: "3",
                        title: "Submit Application",
                        description: "Submit your TRC application to the Immigration Department at the local police station where you will reside. Your sponsor typically initiates this on your behalf.",
                        duration: "1 day",
                        tips: ["Book appointment in advance if required", "Bring originals and copies of all documents", "Ensure application form is complete and accurate"]
                      },
                      {
                        step: "4",
                        title: "Biometric Collection",
                        description: "Attend your appointment for fingerprint collection and photograph. This biometric data will be stored in the TRC system.",
                        duration: "1-2 hours",
                        tips: ["Arrive 15 minutes early", "Dress professionally for photo", "Bring original passport"]
                      },
                      {
                        step: "5",
                        title: "Application Review",
                        description: "Immigration authorities review your application, verify documents, and conduct background checks. They may request additional information if needed.",
                        duration: "10-15 working days",
                        tips: ["Respond quickly to any requests", "Keep contact information current", "Follow up politely if delays occur"]
                      },
                      {
                        step: "6",
                        title: "Card Issuance",
                        description: "Once approved, collect your TRC from the immigration office. You'll receive a physical card with your photo, biometric data, and validity period.",
                        duration: "1-3 days",
                        tips: ["Bring original passport for verification", "Check all details on card immediately", "Sign the card in presence of officer"]
                      },
                      {
                        step: "7",
                        title: "Temporary Residence Registration",
                        description: "Within 7 days of receiving your TRC, register your temporary residence at your accommodation with the local police station.",
                        duration: "1-2 hours",
                        tips: ["Coordinate with landlord/hotel", "Keep registration certificate safe", "Update if you change address"]
                      }
                    ].map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-lg">{step.step}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-3">
                              <h4 className="font-semibold text-gray-900 text-lg">{step.title}</h4>
                              <span className="text-primary text-sm font-medium bg-primary/10 px-3 py-1 rounded-full">
                                {step.duration}
                              </span>
                            </div>
                            <p className="text-gray-700 mb-4 leading-relaxed">{step.description}</p>
                            <div className="bg-gray-50 rounded-lg p-4">
                              <h5 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">Pro Tips:</h5>
                              <ul className="space-y-1">
                                {step.tips.map((tip, tipIndex) => (
                                  <li key={tipIndex} className="text-sm text-gray-600 flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                    <span>{tip}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* Section 6: Timeline */}
                <motion.section
                  id="timeline"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Processing Timeline</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Understanding the timeline helps you plan your move to Vietnam effectively. Here's what to expect:
                  </p>

                  <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-8 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-6 text-xl text-center">Typical TRC Processing Timeline</h4>
                    <div className="max-w-3xl mx-auto">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="w-32 text-primary font-semibold">Week 1-2</div>
                          <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                            Document preparation and collection
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-32 text-primary font-semibold">Week 3</div>
                          <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                            Secure sponsorship and submit application
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-32 text-primary font-semibold">Week 4-5</div>
                          <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                            Application review and background check
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-32 text-primary font-semibold">Week 6</div>
                          <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                            Card issuance and residence registration
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-center text-gray-600 mt-6 text-sm">
                      <strong>Total Duration:</strong> Typically 4-6 weeks from start to finish
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Best Case</h5>
                      <p className="text-2xl font-bold text-green-600 mb-2">3-4 weeks</p>
                      <p className="text-sm text-gray-600">With complete documents and no complications</p>
                    </div>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Average</h5>
                      <p className="text-2xl font-bold text-blue-600 mb-2">4-6 weeks</p>
                      <p className="text-sm text-gray-600">Standard processing with typical document preparation</p>
                    </div>
                    <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Extended</h5>
                      <p className="text-2xl font-bold text-orange-600 mb-2">6-8 weeks</p>
                      <p className="text-sm text-gray-600">With document issues or additional verification needed</p>
                    </div>
                  </div>
                </motion.section>

                {/* Section 7: Costs */}
                <motion.section
                  id="costs"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Costs and Fees</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    TRC fees vary depending on the duration and type. Here's a comprehensive breakdown of costs:
                  </p>

                  <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden mb-6">
                    <div className="bg-primary text-white px-6 py-4">
                      <h4 className="font-semibold text-lg">Official Government Fees</h4>
                    </div>
                    <div className="p-6">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b-2 border-gray-200">
                            <th className="text-left py-3 text-gray-900 font-semibold">TRC Duration</th>
                            <th className="text-right py-3 text-gray-900 font-semibold">Fee (VND)</th>
                            <th className="text-right py-3 text-gray-900 font-semibold">Fee (USD approx.)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { duration: "6 months", vnd: "200,000", usd: "$8" },
                            { duration: "1 year", vnd: "400,000", usd: "$16" },
                            { duration: "2 years", vnd: "600,000", usd: "$24" },
                            { duration: "3 years", vnd: "800,000", usd: "$32" },
                            { duration: "5 years", vnd: "1,000,000", usd: "$40" }
                          ].map((row, index) => (
                            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                              <td className="py-3 text-gray-700">{row.duration}</td>
                              <td className="py-3 text-gray-900 text-right font-medium">{row.vnd}</td>
                              <td className="py-3 text-gray-600 text-right">{row.usd}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Additional Costs to Consider</h4>
                    <div className="space-y-3">
                      {[
                        { item: "Health certificate", cost: "500,000 - 1,000,000 VND ($20-40)" },
                        { item: "Criminal record check", cost: "200,000 - 500,000 VND ($8-20)" },
                        { item: "Document translation & notarization", cost: "100,000 - 200,000 VND per document ($4-8)" },
                        { item: "Passport photos", cost: "50,000 - 100,000 VND ($2-4)" },
                        { item: "Visa fees (if applicable)", cost: "1,000,000 - 3,000,000 VND ($40-120)" },
                        { item: "Legal service assistance (optional)", cost: "5,000,000 - 15,000,000 VND ($200-600)" }
                      ].map((cost, index) => (
                        <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-200 last:border-0">
                          <span className="text-gray-700">{cost.item}</span>
                          <span className="text-gray-900 font-medium">{cost.cost}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <DollarSign className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Total Expected Investment</h4>
                        <p className="text-gray-700 mb-2">
                          Budget approximately <strong>8,000,000 - 20,000,000 VND ($320-800)</strong> for the complete
                          TRC process including all fees, documents, and optional professional assistance.
                        </p>
                        <p className="text-gray-600 text-sm">
                          Using professional legal services significantly increases success rate and reduces processing time,
                          making it a worthwhile investment for most applicants.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Section 8: Renewal */}
                <motion.section
                  id="renewal"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Renewal and Extension</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Your TRC can be renewed before expiration if you continue to meet eligibility requirements. Here's what
                    you need to know:
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Important: Start Renewal Early</h4>
                        <p className="text-gray-700">
                          Begin the renewal process <strong>at least 30-45 days before expiration</strong> to avoid gaps
                          in your legal residence status. Overstaying your TRC can result in fines and legal complications.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        Renewal Requirements
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Current TRC (not yet expired)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Valid passport (min. 6 months validity)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Updated health certificate</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Continued sponsorship letter</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Proof of continued eligibility (work permit, marriage cert, etc.)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Temporary residence registration</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-primary" />
                        Renewal Timeline
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-gray-600">Document preparation</span>
                            <span className="text-sm font-medium text-primary">1-2 weeks</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-primary rounded-full h-2" style={{ width: '25%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-gray-600">Application submission</span>
                            <span className="text-sm font-medium text-primary">1 day</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-primary rounded-full h-2" style={{ width: '10%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-gray-600">Processing time</span>
                            <span className="text-sm font-medium text-primary">2-3 weeks</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-primary rounded-full h-2" style={{ width: '50%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-gray-600">Card collection</span>
                            <span className="text-sm font-medium text-primary">1-2 days</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-primary rounded-full h-2" style={{ width: '15%' }}></div>
                          </div>
                        </div>
                        <div className="pt-2 border-t border-gray-200">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-900">Total Duration</span>
                            <span className="font-bold text-primary">3-4 weeks</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">What Happens If Your TRC Expires?</h4>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        If your TRC expires without renewal, you'll need to:
                      </p>
                      <ol className="space-y-2 text-gray-700 ml-4">
                        <li className="flex items-start gap-3">
                          <span className="font-semibold text-primary">1.</span>
                          <span><strong>Apply for a new TRC</strong> (not a renewal) - full process required</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-semibold text-primary">2.</span>
                          <span><strong>Pay overstay fines</strong> - 500,000 - 2,000,000 VND depending on duration</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-semibold text-primary">3.</span>
                          <span><strong>Risk deportation</strong> if overstay is significant (over 3 months)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="font-semibold text-primary">4.</span>
                          <span><strong>Potential ban</strong> from re-entering Vietnam for 1-3 years in severe cases</span>
                        </li>
                      </ol>
                    </div>
                  </div>
                </motion.section>

                {/* Section 9: FAQ */}
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
                        question: "Can I apply for a TRC before arriving in Vietnam?",
                        answer: "No, you must be physically present in Vietnam with a valid visa to apply for a TRC. However, you can prepare all required documents beforehand to expedite the process once you arrive."
                      },
                      {
                        question: "What's the difference between a TRC and a work permit?",
                        answer: "A work permit grants you permission to work legally in Vietnam, while a TRC grants you residence rights. Most foreign workers need BOTH - the work permit for employment authorization and the TRC for legal residence status."
                      },
                      {
                        question: "Can I travel in and out of Vietnam freely with a TRC?",
                        answer: "Yes, a valid TRC allows unlimited entries and exits during its validity period. However, you must also have a valid multi-entry visa that matches the TRC duration, and you should register your temporary residence each time you return."
                      },
                      {
                        question: "Do I need a sponsor for TRC renewal?",
                        answer: "Yes, you need continued sponsorship for renewal. This is typically your employer, spouse, or the organization that originally sponsored you. The sponsor must confirm they continue to support your residence in Vietnam."
                      },
                      {
                        question: "What happens if I change jobs while holding a TRC?",
                        answer: "If your TRC is work-based, changing employers requires updating your TRC with the new sponsorship information. You'll need a new work permit from your new employer and should update your TRC within 15 days of the employment change."
                      },
                      {
                        question: "Can my TRC be revoked?",
                        answer: "Yes, a TRC can be revoked if you: violate Vietnamese law, provide false information, lose your sponsorship, no longer meet eligibility criteria, or engage in activities deemed harmful to national security or public order."
                      },
                      {
                        question: "Is a TRC the same as permanent residence?",
                        answer: "No, a TRC is temporary and must be renewed. Permanent residence (thẻ thường trú) is a different category with stricter requirements, typically requiring 3+ years of continuous temporary residence and meeting specific investment or family criteria."
                      },
                      {
                        question: "Can I apply for Vietnamese citizenship with a TRC?",
                        answer: "A TRC is a prerequisite for citizenship applications, but it doesn't guarantee eligibility. For citizenship, you typically need 5+ years of continuous residence, Vietnamese language proficiency, financial stability, and meet other strict criteria."
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
                    <Link href="/resources/trc-vs-work-permit-vs-visa">
                      <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-xl p-6 hover:border-primary hover:shadow-xl transition-all duration-300 group">
                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                          TRC vs Work Permit vs Visa: Understanding the Differences
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Clear comparison of these three important documents for foreign workers in Vietnam.
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
                          Detailed breakdown of each TRC type with specific requirements and eligibility criteria.
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
                Need Help with Your TRC Application?
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Our experienced legal team has helped thousands of foreign nationals successfully obtain their TRC.
                Let us handle the complexity while you focus on settling into Vietnam.
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
