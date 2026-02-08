'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, Calendar, Home, Phone, Mail, ArrowRight, CheckCircle2, AlertCircle, Timer, Zap, TrendingUp, FileText, Users, Building2 } from 'lucide-react';

export default function TRCTimelineVietnam() {
  const publishDate = "February 8, 2026";
  const readingTime = "11 min read";

  const tableOfContents = [
    { id: "overview", title: "Timeline Overview" },
    { id: "preparation-phase", title: "Preparation Phase (1-2 Weeks)" },
    { id: "submission-phase", title: "Submission Phase (3-5 Days)" },
    { id: "processing-phase", title: "Processing Phase (10-15 Days)" },
    { id: "collection-phase", title: "Collection Phase (1-3 Days)" },
    { id: "factors-affecting", title: "Factors Affecting Timeline" },
    { id: "expediting-process", title: "How to Expedite the Process" },
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
            <span className="text-gray-900 font-medium">TRC Timeline Vietnam</span>
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
                Timeline Guide
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900 leading-tight">
                How Long Does it Take to Get a TRC in Vietnam? Timeline Breakdown
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
                Planning your move to Vietnam? Understanding the TRC timeline is crucial for proper planning. This comprehensive
                guide breaks down every phase of the process with realistic timeframes, from document preparation to card collection.
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
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Timeline Overview</h2>

                  <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-8 mb-8">
                    <h4 className="font-semibold text-gray-900 mb-6 text-xl text-center">Complete TRC Timeline at a Glance</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        {
                          icon: Zap,
                          label: "Best Case",
                          duration: "3-4 Weeks",
                          color: "green",
                          description: "Perfect documents, no delays"
                        },
                        {
                          icon: Clock,
                          label: "Average",
                          duration: "4-6 Weeks",
                          color: "blue",
                          description: "Standard processing time"
                        },
                        {
                          icon: TrendingUp,
                          label: "Extended",
                          duration: "6-8 Weeks",
                          color: "orange",
                          description: "Document issues or verification"
                        }
                      ].map((scenario, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className={`bg-white border-2 border-${scenario.color}-200 rounded-xl p-6 text-center`}
                        >
                          <div className={`w-16 h-16 rounded-full bg-${scenario.color}-100 flex items-center justify-center mx-auto mb-4`}>
                            <scenario.icon className={`w-8 h-8 text-${scenario.color}-600`} />
                          </div>
                          <h5 className="font-semibold text-gray-900 mb-2">{scenario.label}</h5>
                          <p className={`text-2xl font-bold text-${scenario.color}-600 mb-2`}>{scenario.duration}</p>
                          <p className="text-sm text-gray-600">{scenario.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Planning Tip</h4>
                        <p className="text-gray-700 mb-0">
                          Budget 6-8 weeks for your TRC process to account for potential delays. Start the process as soon as
                          you arrive in Vietnam with your entry visa to avoid any gaps in legal residence status.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    The TRC application timeline consists of four distinct phases: document preparation, submission, processing,
                    and collection. Understanding each phase helps you plan effectively and avoid common delays.
                  </p>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Quick Timeline Breakdown</h4>
                    <div className="space-y-3">
                      {[
                        { phase: "Phase 1: Document Preparation", duration: "1-2 weeks", percentage: 30 },
                        { phase: "Phase 2: Submission & Biometrics", duration: "3-5 days", percentage: 10 },
                        { phase: "Phase 3: Processing & Review", duration: "10-15 working days", percentage: 50 },
                        { phase: "Phase 4: Card Collection", duration: "1-3 days", percentage: 10 }
                      ].map((item, index) => (
                        <div key={index}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-900">{item.phase}</span>
                            <span className="text-sm text-primary font-semibold">{item.duration}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-primary rounded-full h-2 transition-all duration-500"
                              style={{ width: `${item.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.section>

                {/* Section 2: Preparation Phase */}
                <motion.section
                  id="preparation-phase"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Phase 1: Document Preparation (1-2 Weeks)</h2>

                  <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8 mb-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <FileText className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xl">This is the most time-consuming phase</h4>
                        <p className="text-gray-600">Some documents require weeks to obtain from overseas</p>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      The preparation phase involves gathering all required documents and ensuring they meet Vietnamese
                      immigration standards. This phase often takes longer than expected, especially for documents from abroad.
                    </p>

                    <div className="bg-white rounded-xl p-6 mb-6">
                      <h5 className="font-semibold text-gray-900 mb-4">Document Timeline Breakdown:</h5>
                      <div className="space-y-4">
                        {[
                          {
                            document: "Passport Copy",
                            time: "Same day",
                            notes: "Must have 6+ months validity"
                          },
                          {
                            document: "Passport Photos (4x6cm)",
                            time: "1-2 days",
                            notes: "Professional photo studios in Vietnam"
                          },
                          {
                            document: "Health Certificate",
                            time: "3-5 days",
                            notes: "International hospitals in major cities"
                          },
                          {
                            document: "Criminal Record Check",
                            time: "1-4 weeks",
                            notes: "From your home country - START EARLY"
                          },
                          {
                            document: "Document Translation",
                            time: "2-5 days",
                            notes: "Certified Vietnamese translation required"
                          },
                          {
                            document: "Document Notarization",
                            time: "1-3 days",
                            notes: "After translation completion"
                          },
                          {
                            document: "Sponsorship Letter",
                            time: "3-7 days",
                            notes: "From employer/family member/organization"
                          }
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-4 pb-4 border-b border-gray-200 last:border-0">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                            <div className="flex-1">
                              <div className="flex justify-between items-start mb-1">
                                <span className="font-semibold text-gray-900">{item.document}</span>
                                <span className="text-primary font-medium text-sm">{item.time}</span>
                              </div>
                              <p className="text-sm text-gray-600">{item.notes}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Critical: Start Early on Criminal Record</h5>
                          <p className="text-gray-700 mb-3">
                            The criminal record check is the #1 cause of delays. Request this from your home country BEFORE
                            arriving in Vietnam if possible. Some countries take 3-6 weeks to issue this document.
                          </p>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• USA: FBI background check (2-4 weeks)</li>
                            <li>• UK: DBS check (1-2 weeks)</li>
                            <li>• Australia: National Police Check (1-2 weeks)</li>
                            <li>• Canada: RCMP check (2-3 weeks)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h5 className="font-semibold text-gray-900 mb-4">Pro Tips to Speed Up This Phase:</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Request criminal record before leaving home country",
                        "Use international hospitals for health certificate (faster)",
                        "Bring extra passport photos from home (same format)",
                        "Have documents apostilled in home country if possible",
                        "Work with a legal service to handle translations in parallel",
                        "Prepare digital copies of all documents beforehand"
                      ].map((tip, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.section>

                {/* Section 3: Submission Phase */}
                <motion.section
                  id="submission-phase"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Phase 2: Submission & Biometrics (3-5 Days)</h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Once all documents are ready, the submission phase is straightforward but requires careful coordination
                    with the immigration department and your sponsor.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        day: "Day 1-2",
                        title: "Sponsor Submits Application",
                        description: "Your sponsor (employer, family member, or organization) submits your TRC application packet to the local immigration department. They must include their sponsorship letter and supporting documents.",
                        action: "Your sponsor handles this - ensure they have all documents",
                        duration: "1-2 hours at immigration office"
                      },
                      {
                        day: "Day 3",
                        title: "Appointment Confirmation",
                        description: "Immigration department reviews the application and schedules your biometric appointment. You'll receive notification (usually via your sponsor) with date, time, and location.",
                        action: "Confirm appointment time and prepare required items",
                        duration: "Same day notification, appointment within 2-3 days"
                      },
                      {
                        day: "Day 4-5",
                        title: "Biometric Collection Appointment",
                        description: "Attend your scheduled appointment at the immigration office for fingerprint collection and photograph. Bring your original passport, entry visa, and any requested documents.",
                        action: "Arrive 15 minutes early, dress professionally for photo",
                        duration: "30-60 minutes at the office"
                      }
                    ].map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-20 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold text-sm">{step.day}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-lg mb-2">{step.title}</h4>
                            <p className="text-gray-700 leading-relaxed mb-3">{step.description}</p>
                            <div className="bg-gray-50 rounded-lg p-3">
                              <div className="flex items-start gap-2 mb-2">
                                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700"><strong>Action:</strong> {step.action}</span>
                              </div>
                              <div className="flex items-start gap-2">
                                <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-600">{step.duration}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mt-6">
                    <div className="flex items-start gap-3">
                      <Timer className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">What to Bring to Biometric Appointment</h5>
                        <ul className="space-y-1 text-gray-700">
                          <li>• Original passport</li>
                          <li>• Valid entry visa</li>
                          <li>• Application confirmation (provided by sponsor)</li>
                          <li>• Additional passport photo (backup)</li>
                          <li>• Pen for signing documents</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Section 4: Processing Phase */}
                <motion.section
                  id="processing-phase"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Phase 3: Processing & Review (10-15 Working Days)</h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    This is the waiting period. Immigration authorities verify your documents, conduct background checks,
                    and process your application. This phase is mostly out of your control.
                  </p>

                  <div className="bg-gradient-to-r from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-6 text-xl">What Happens During Processing</h4>
                    <div className="space-y-4">
                      {[
                        {
                          step: "Document Verification",
                          days: "Days 1-3",
                          description: "Immigration officers review all submitted documents for completeness and authenticity"
                        },
                        {
                          step: "Background Check",
                          days: "Days 4-7",
                          description: "Criminal record verification and cross-referencing with immigration databases"
                        },
                        {
                          step: "Sponsor Verification",
                          days: "Days 5-8",
                          description: "Confirmation of sponsor's legitimacy and legal standing in Vietnam"
                        },
                        {
                          step: "Eligibility Assessment",
                          days: "Days 8-10",
                          description: "Final review of eligibility criteria and determination of TRC validity period"
                        },
                        {
                          step: "Card Production",
                          days: "Days 11-15",
                          description: "Physical TRC card is produced with your biometric data and information"
                        }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-4 pb-4 border-b border-gray-200 last:border-0">
                          <div className="w-24 text-primary font-semibold text-sm flex-shrink-0">{item.days}</div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-900 mb-1">{item.step}</h5>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        What You Can Do
                      </h5>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Keep your phone number active and reachable</li>
                        <li>• Check with your sponsor for updates weekly</li>
                        <li>• Stay at your registered address</li>
                        <li>• Respond immediately to any requests for additional info</li>
                        <li>• Be patient - rushing won't speed up the process</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-orange-500" />
                        Red Flags That Cause Delays
                      </h5>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Missing or expired documents in your file</li>
                        <li>• Sponsor's documents not up to date</li>
                        <li>• Issues with criminal record verification</li>
                        <li>• Incomplete address information</li>
                        <li>• Previous immigration violations in Vietnam</li>
                      </ul>
                    </div>
                  </div>
                </motion.section>

                {/* Section 5: Collection Phase */}
                <motion.section
                  id="collection-phase"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Phase 4: Card Collection (1-3 Days)</h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Once your TRC is approved and produced, you'll be notified to collect it. This final phase is quick
                    but requires attention to detail.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-white border-2 border-primary/30 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-4 text-lg">Collection Steps:</h4>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">1</span>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-1">Receive Notification</h5>
                            <p className="text-gray-700 text-sm">Your sponsor will be notified that your TRC is ready. They'll inform you of the collection date and time.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">2</span>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-1">Visit Immigration Office</h5>
                            <p className="text-gray-700 text-sm">Go to the immigration office with your original passport and notification letter. Some offices require your sponsor to accompany you.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">3</span>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-1">Verify Card Details</h5>
                            <p className="text-gray-700 text-sm">Check all information on the card immediately: name spelling, passport number, validity dates, photo quality. Report any errors before leaving.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">4</span>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-1">Sign and Receive Card</h5>
                            <p className="text-gray-700 text-sm">Sign the card in the presence of the immigration officer. They'll provide instructions on card usage and care.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">5</span>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-1">Register Temporary Residence</h5>
                            <p className="text-gray-700 text-sm">Within 7 days, register your TRC at your local police station (with landlord's help if renting).</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Check Everything Before Leaving</h5>
                          <p className="text-gray-700 mb-3">
                            Mistakes on TRC cards are rare but correcting them after issuance requires reapplication. Verify:
                          </p>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 text-sm">
                            <li>• Full name (exact spelling)</li>
                            <li>• Date of birth</li>
                            <li>• Nationality</li>
                            <li>• Passport number</li>
                            <li>• Card number</li>
                            <li>• Issue date</li>
                            <li>• Expiry date</li>
                            <li>• Photo clarity</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Section 6: Factors Affecting Timeline */}
                <motion.section
                  id="factors-affecting"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Factors That Affect Timeline</h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Several variables can speed up or slow down your TRC process. Understanding these helps you plan realistically.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-green-600" />
                        Factors That Speed Things Up
                      </h4>
                      <div className="space-y-3">
                        {[
                          "All documents ready before arrival in Vietnam",
                          "Using professional legal service for coordination",
                          "Applying in Ho Chi Minh City or Hanoi (faster processing)",
                          "Applying during non-peak seasons (avoid Tet holiday)",
                          "Having a reliable, established sponsor",
                          "Clean immigration and criminal record",
                          "Complete and accurate application first time"
                        ].map((factor, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{factor}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-red-600" />
                        Factors That Cause Delays
                      </h4>
                      <div className="space-y-3">
                        {[
                          "Criminal record check delayed from home country",
                          "Applying during Tet (Vietnamese New Year - Feb)",
                          "Incomplete or incorrect document translation",
                          "Sponsor's documents need updating or verification",
                          "Previous immigration violations or overstays",
                          "Applying in smaller cities (limited staff)",
                          "Peak application periods (September, January)",
                          "COVID-19 health requirements changing"
                        ].map((factor, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{factor}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mt-6">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Seasonal Considerations</h5>
                        <p className="text-gray-700 mb-3">
                          Immigration offices experience different workloads throughout the year:
                        </p>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li><strong>Fastest:</strong> March-May, October-November (post-holiday periods)</li>
                          <li><strong>Average:</strong> June-August, December</li>
                          <li><strong>Slowest:</strong> January-February (Tet holiday), September (school year start)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Section 7: Expediting Process */}
                <motion.section
                  id="expediting-process"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">How to Expedite the Process</h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    While you can't force the immigration department to work faster, you can eliminate delays on your end.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {[
                      {
                        icon: FileText,
                        title: "Pre-Arrival Preparation",
                        tips: [
                          "Request criminal record 2 months before travel",
                          "Get health certificate from international clinic",
                          "Have passport photos taken professionally",
                          "Prepare notarized copies of education/work docs",
                          "Research and contact sponsors before arrival"
                        ]
                      },
                      {
                        icon: Users,
                        title: "Use Professional Services",
                        tips: [
                          "Legal firms handle document preparation",
                          "They coordinate with immigration directly",
                          "Know exactly what's required (no surprises)",
                          "Can expedite through established relationships",
                          "Handle all translation and notarization"
                        ]
                      },
                      {
                        icon: CheckCircle2,
                        title: "Document Quality Control",
                        tips: [
                          "Double-check all spelling and dates",
                          "Use certified translators (not Google Translate)",
                          "Ensure all documents are within validity period",
                          "Provide clear, high-quality copies",
                          "Organize in the order requested"
                        ]
                      },
                      {
                        icon: Building2,
                        title: "Sponsor Coordination",
                        tips: [
                          "Ensure sponsor has all required documents ready",
                          "Verify sponsor's legal standing is current",
                          "Maintain regular communication",
                          "Have sponsor follow up with immigration proactively",
                          "Prepare backup contact person if possible"
                        ]
                      }
                    ].map((section, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          <section.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-3">{section.title}</h4>
                        <ul className="space-y-2">
                          {section.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-start gap-2 text-sm text-gray-700">
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-primary/5 border-2 border-primary/30 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Professional Service Advantage</h4>
                    <p className="text-gray-700 mb-4">
                      Using a legal service typically reduces the timeline by 1-2 weeks because:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "They know exactly what's required (no trial and error)",
                        "Documents are prepared correctly the first time",
                        "They have direct relationships with immigration offices",
                        "They can quickly resolve any issues that arise",
                        "They handle all translations and notarizations in parallel",
                        "They follow up proactively on your behalf"
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.section>

                {/* Section 8: FAQ */}
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
                        question: "Can I expedite my TRC application by paying extra?",
                        answer: "No, there's no official fast-track service for TRC applications. The processing time is standardized. However, using a professional legal service can reduce your preparation time and eliminate delays caused by incomplete documentation, effectively shortening the overall timeline."
                      },
                      {
                        question: "What happens if my visa expires while my TRC is being processed?",
                        answer: "If your visa expires during processing, you may need to apply for a visa extension or exit and re-enter Vietnam. Work with your sponsor and legal advisor to ensure your visa validity covers the entire TRC processing period plus a buffer."
                      },
                      {
                        question: "Can I travel outside Vietnam while my TRC is being processed?",
                        answer: "Yes, but it's not recommended. If immigration needs additional information or schedules your biometric appointment, you must be present. If you must travel, inform your sponsor and immigration authorities, and ensure you can return on short notice."
                      },
                      {
                        question: "How will I know if there are issues with my application?",
                        answer: "Immigration will contact your sponsor if there are issues. This is why it's crucial to maintain regular communication with your sponsor. They should follow up with immigration weekly during the processing phase to catch any problems early."
                      },
                      {
                        question: "Does the timeline differ by nationality?",
                        answer: "Generally no, the timeline is the same for all nationalities. However, applicants from countries requiring additional security screening or those with complicated criminal record verification processes may experience longer processing times."
                      },
                      {
                        question: "What if I need my TRC urgently for a specific date (lease signing, etc.)?",
                        answer: "Plan for the worst-case timeline (8 weeks) and start the process early. For lease signing, most landlords will accept a TRC application confirmation letter from immigration as proof that you're in the process. Banking and other services may vary."
                      },
                      {
                        question: "Can I check the status of my TRC application online?",
                        answer: "Vietnam doesn't have a centralized online TRC tracking system. Status checks must be done through your sponsor contacting the immigration office directly. This is another reason why having a responsive sponsor or using a legal service is valuable."
                      },
                      {
                        question: "If rejected, how long before I can reapply?",
                        answer: "There's no mandatory waiting period for reapplication, but you should address the reason for rejection first. Common rejection reasons include incomplete documents (fix and reapply immediately) or eligibility issues (may require changing your circumstances). Reapplication follows the same timeline."
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
                    <Link href="/resources/trc-application-process-vietnam">
                      <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-xl p-6 hover:border-primary hover:shadow-xl transition-all duration-300 group">
                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                          TRC Application Process: Step-by-Step Guide
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Detailed walkthrough of every step in the TRC application process from start to finish.
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
                Don't Want to Wait 8 Weeks? We Can Help.
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Our legal team expedites the TRC process by handling all preparation, coordination, and follow-up.
                Most of our clients receive their TRC in 4-5 weeks with zero stress.
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
