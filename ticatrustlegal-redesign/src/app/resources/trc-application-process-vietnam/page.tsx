'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, Calendar, Home, Phone, Mail, ArrowRight, CheckCircle2, AlertCircle, Zap, ClipboardList, Users, PenTool, Eye } from 'lucide-react';

export default function TRCApplicationProcessVietnam() {
  const publishDate = "February 8, 2026";
  const readingTime = "13 min read";

  const tableOfContents = [
    { id: "overview", title: "Process Overview" },
    { id: "pre-application", title: "Pre-Application Preparation" },
    { id: "document-gathering", title: "Document Gathering Checklist" },
    { id: "submission-process", title: "Submission & Biometrics" },
    { id: "tracking-follow-up", title: "Tracking & Follow-Up" },
    { id: "collection", title: "Card Collection & Registration" },
    { id: "common-mistakes", title: "Common Mistakes to Avoid" },
    { id: "troubleshooting", title: "Troubleshooting & Next Steps" },
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
            <span className="text-gray-900 font-medium">TRC Application Process Vietnam</span>
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
                Step-by-Step Guide
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900 leading-tight">
                TRC Application Process: Complete Step-by-Step Guide for Foreigners
              </h1>
              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>{publishDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  <span>{readingTime}</span>
                </div>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Lost in the paperwork? This comprehensive guide walks you through every step of the TRC application process. From choosing a sponsor to collecting your card, you'll know exactly what to expect and what to do.
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
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">TRC Application Process Overview</h2>

                  <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-8 mb-8">
                    <h4 className="font-semibold text-gray-900 mb-6 text-xl text-center">The Complete Journey in 5 Phases</h4>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                      {[
                        { phase: "1: Prepare", duration: "1-2 weeks", icon: "📋" },
                        { phase: "2: Gather", duration: "1-2 weeks", icon: "📁" },
                        { phase: "3: Submit", duration: "3-5 days", icon: "✍️" },
                        { phase: "4: Wait", duration: "10-15 days", icon: "⏳" },
                        { phase: "5: Collect", duration: "1-3 days", icon: "📇" }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-white border-2 border-primary/20 rounded-xl p-4 text-center"
                        >
                          <p className="text-3xl mb-2">{item.icon}</p>
                          <p className="font-semibold text-gray-900 text-sm mb-1">{item.phase}</p>
                          <p className="text-xs text-gray-600">{item.duration}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Insight</h4>
                        <p className="text-gray-700 mb-0">
                          The TRC application is not complicated, but it requires careful coordination between you, your sponsor, and immigration authorities. Following this guide in order ensures nothing gets missed.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Who You'll Be Working With</h4>
                    <div className="space-y-4">
                      {[
                        { actor: "Your Sponsor", role: "Employer, family member, or organization", responsibility: "Submits application, liaisons with immigration" },
                        { actor: "Immigration Authorities", role: "Provincial immigration department", responsibility: "Reviews documents, processes application" },
                        { actor: "You", role: "TRC applicant", responsibility: "Prepares documents, provides biometrics" },
                        { actor: "(Optional) Legal Service", role: "Law firm or service provider", responsibility: "Coordinates everything for you" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-4 pb-4 border-b border-gray-200 last:border-0">
                          <div className="w-20 flex-shrink-0">
                            <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded inline-block">{item.actor}</span>
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-900 text-sm">{item.role}</p>
                            <p className="text-gray-600 text-sm">{item.responsibility}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.section>

                {/* Section 2: Pre-Application Preparation */}
                <motion.section
                  id="pre-application"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Phase 1: Pre-Application Preparation (1-2 Weeks Before)</h2>

                  <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8 mb-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <ClipboardList className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xl">Before you touch any paperwork</h4>
                        <p className="text-gray-600">Complete these foundational steps first</p>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      You cannot start your TRC application without a sponsor. The sponsor is the legal entity responsible for your presence and activities in Vietnam. Choosing the right sponsor is critical.
                    </p>

                    <div className="bg-white rounded-xl p-6">
                      <h5 className="font-semibold text-gray-900 mb-4">Step 1: Find & Confirm Your Sponsor (Week 1)</h5>
                      <div className="space-y-6">
                        {[
                          {
                            sponsorType: "Employment-Based (Worker)",
                            process: [
                              "Secure your job offer letter from Vietnamese employer",
                              "Request employer contact immigration to register you",
                              "Obtain company registration certificate from employer",
                              "Confirm employer's legal address in Vietnam",
                              "Get list of required documents from employer"
                            ],
                            timeline: "Complete before arrival if possible"
                          },
                          {
                            sponsorType: "Family-Based (Family Member)",
                            process: [
                              "Contact Vietnamese family member willing to sponsor",
                              "Verify they have legal residence in Vietnam",
                              "Obtain their Vietnamese ID card details",
                              "Confirm their address (will be your registered address)",
                              "Get written sponsorship letter from family member"
                            ],
                            timeline: "Can arrange after arrival"
                          },
                          {
                            sponsorType: "Organization/Business",
                            process: [
                              "Register your business/organization in Vietnam (if starting one)",
                              "Obtain business registration certificate",
                              "Obtain tax registration certificate",
                              "Register organization with local authorities",
                              "Then use organization as sponsor for your TRC"
                            ],
                            timeline: "Requires 1-2 weeks of business setup first"
                          }
                        ].map((option, index) => (
                          <div key={index} className="border-t border-gray-200 pt-4 first:border-0 first:pt-0">
                            <h6 className="font-semibold text-gray-900 mb-3">{option.sponsorType}</h6>
                            <div className="bg-gray-50 rounded-lg p-4 mb-3">
                              <div className="space-y-2">
                                {option.process.map((step, i) => (
                                  <div key={i} className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-700">{step}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <p className="text-xs text-primary font-semibold">Timeline: {option.timeline}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mt-6">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Critical: Choose the Right Sponsor</h5>
                          <p className="text-gray-700 mb-2">
                            Your sponsor is responsible for reporting to immigration authorities. Choose someone:
                          </p>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Who is legally established in Vietnam</li>
                            <li>• Who responds reliably to communications</li>
                            <li>• Whose business/family is legitimate</li>
                            <li>• Who doesn't have immigration violations</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Section 3: Document Gathering */}
                <motion.section
                  id="document-gathering"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Phase 2: Document Gathering (1-2 Weeks)</h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    This is the most time-consuming phase. Collect all required documents before proceeding to submission.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Universal Documents (Required for All Applicants)</h4>
                      <div className="space-y-3">
                        {[
                          { document: "Passport Copy (Bio page)", status: "MUST HAVE", details: "Color copy of passport information page" },
                          { document: "Passport Photos (4x6cm)", status: "MUST HAVE", details: "4 recent color photos, professional quality" },
                          { document: "Criminal Record Check", status: "MUST HAVE", details: "From your home country, issued within 6 months" },
                          { document: "Health Certificate", status: "MUST HAVE", details: "From international medical clinic, issued within 6 months" },
                          { document: "Translated Documents", status: "MUST HAVE", details: "All documents not in Vietnamese, officially translated" },
                          { document: "Entry Visa Copy", status: "MUST HAVE", details: "Copy of current valid Vietnam visa stamp" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-4 pb-4 border-b border-gray-200 last:border-0">
                            <div className="flex-shrink-0">
                              <span className={`text-xs font-bold px-2 py-1 rounded ${item.status === 'MUST HAVE' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                                {item.status}
                              </span>
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-gray-900">{item.document}</p>
                              <p className="text-sm text-gray-600">{item.details}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Additional Documents by Category</h4>
                      <div className="space-y-6">
                        {[
                          {
                            category: "For Workers (Employment-Based TRC)",
                            documents: [
                              "Employment contract (translated)",
                              "Company registration certificate (copy)",
                              "Letter from employer (stating your position, salary, duration)",
                              "Business tax registration (company)",
                              "Labor contract notarized copy"
                            ]
                          },
                          {
                            category: "For Family Members (Family Sponsorship)",
                            documents: [
                              "Sponsorship letter from Vietnamese family",
                              "Family member's ID card copy",
                              "Proof of relationship (birth certificate, marriage certificate, etc.)",
                              "Family member's residence proof",
                              "Notarized family sponsorship letter"
                            ]
                          },
                          {
                            category: "For Business Owners/Investors",
                            documents: [
                              "Business registration certificate",
                              "Investment certificate (if applicable)",
                              "Tax registration certificate",
                              "Company charter/bylaws",
                              "Letter from company to immigration (sponsoring yourself)"
                            ]
                          },
                          {
                            category: "For Students (University Sponsorship)",
                            documents: [
                              "Enrollment letter from university",
                              "Student ID copy",
                              "University sponsor letter",
                              "University registration with education ministry",
                              "Proof of good academic standing"
                            ]
                          }
                        ].map((section, index) => (
                          <div key={index} className="border-t border-gray-200 pt-4 first:border-0 first:pt-0">
                            <h5 className="font-semibold text-gray-900 mb-3">{section.category}</h5>
                            <ul className="space-y-2">
                              {section.documents.map((doc, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                  <span className="text-sm text-gray-700">{doc}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <Zap className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Document Preparation Best Practices</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• <strong>Get originals notarized:</strong> Not just copies</li>
                          <li>• <strong>Professional translations:</strong> Use certified Vietnamese translators, not friends</li>
                          <li>• <strong>Color copies:</strong> Color copies are clearer and more official</li>
                          <li>• <strong>Recent documents:</strong> Health certificate and criminal check within 6 months</li>
                          <li>• <strong>Original signatures:</strong> Some documents require original signatures, not photocopies</li>
                          <li>• <strong>Organize in order:</strong> Prepare documents in the exact order requested by immigration</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Section 4: Submission Process */}
                <motion.section
                  id="submission-process"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Phase 3: Submission & Biometrics (3-5 Days)</h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Now that all documents are ready, submission is straightforward. Your sponsor will handle the official submission at the immigration office.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        day: "Day 1-2",
                        title: "Sponsor Submits Application to Immigration",
                        description: "Your sponsor compiles all your documents and submits them to the provincial immigration department. They must include their sponsorship letter, proof of their legal status, and your complete document package.",
                        substeps: [
                          "Sponsor gathers all documents from you",
                          "Sponsor prepares sponsorship letter and company documents",
                          "Sponsor visits immigration office (usually morning)",
                          "Sponsor submits application and pays application fee ($50-80)",
                          "Immigration department provides receipt and timeline estimate"
                        ],
                        yourRole: "Provide all documents to sponsor; stay reachable by phone"
                      },
                      {
                        day: "Day 3",
                        title: "Immigration Notifies You of Biometric Appointment",
                        description: "The immigration department reviews your application for completeness. If everything looks good, they schedule your biometric appointment. Your sponsor will notify you of the date, time, and location.",
                        substeps: [
                          "Immigration reviews your documents (takes 1-2 days)",
                          "If documents are complete, they schedule biometric appointment",
                          "Sponsor receives notification and timing",
                          "Sponsor informs you of appointment details",
                          "You confirm you can attend on that date"
                        ],
                        yourRole: "Confirm appointment availability with sponsor immediately"
                      },
                      {
                        day: "Day 4-5",
                        title: "Biometric Collection Appointment",
                        description: "You attend the scheduled appointment at the immigration office for fingerprint collection and official photograph. Bring your original passport and the appointment notification.",
                        substeps: [
                          "Arrive 15 minutes early to the immigration office",
                          "Check in at reception with appointment notification",
                          "Proceed to biometric collection station",
                          "Provide fingerprints (both hands, all fingers)",
                          "Have official photograph taken (professional quality)",
                          "Sign application form in front of officer",
                          "Receive official processing receipt and timeline"
                        ],
                        yourRole: "Attend appointment, provide biometrics, dress professionally for photo"
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
                          <div className="w-24 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold text-sm">{step.day}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-lg mb-2">{step.title}</h4>
                            <p className="text-gray-700 leading-relaxed mb-3">{step.description}</p>
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                          <h5 className="font-semibold text-gray-900 text-sm mb-3">What Happens:</h5>
                          <div className="space-y-2">
                            {step.substeps.map((substep, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-xs font-semibold text-primary">{i + 1}</span>
                                </div>
                                <span className="text-sm text-gray-700 mt-1">{substep}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-sm"><strong>Your Role:</strong> <span className="text-gray-700">{step.yourRole}</span></p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mt-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">What to Bring to Your Biometric Appointment</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• <strong>Original passport</strong> (must present it)</li>
                          <li>• <strong>Valid entry visa</strong> (must show immigration stamp)</li>
                          <li>• <strong>Appointment notification letter</strong> (from immigration)</li>
                          <li>• <strong>Extra passport photo</strong> (backup in case of photo issues)</li>
                          <li>• <strong>Pen</strong> (for signing documents)</li>
                          <li>• <strong>Professional attire</strong> (your photo will be on the card)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Section 5: Tracking & Follow-Up */}
                <motion.section
                  id="tracking-follow-up"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Phase 4: Processing & Follow-Up (10-15 Working Days)</h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    After your biometric appointment, immigration processes your application. This phase involves background checks, document verification, and card production. It mostly happens without your involvement, but follow-up is important.
                  </p>

                  <div className="bg-gradient-to-r from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-6 text-xl">What Immigration Does During Processing</h4>
                    <div className="space-y-4">
                      {[
                        {
                          step: "Document Verification",
                          days: "Days 1-3",
                          description: "Immigration verifies all submitted documents are complete, authentic, and properly translated"
                        },
                        {
                          step: "Background Check",
                          days: "Days 4-7",
                          description: "Criminal record verification through international channels and local immigration database"
                        },
                        {
                          step: "Sponsor Verification",
                          days: "Days 5-8",
                          description: "Confirmation that your sponsor is legitimate and has authority to sponsor you"
                        },
                        {
                          step: "Final Review",
                          days: "Days 8-10",
                          description: "Senior officer reviews your entire file and makes final eligibility determination"
                        },
                        {
                          step: "Card Production",
                          days: "Days 11-15",
                          description: "Physical TRC card is produced with your biometric data and information"
                        }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-4 pb-4 border-b border-gray-200 last:border-0">
                          <div className="w-32 text-primary font-semibold text-sm flex-shrink-0">{item.days}</div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-900 mb-1">{item.step}</h5>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        What You Should Do
                      </h5>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Check in with sponsor weekly for updates</li>
                        <li>• Keep phone number active and reachable</li>
                        <li>• Stay at your registered address</li>
                        <li>• Respond immediately to any requests from immigration</li>
                        <li>• Don't travel internationally during this period</li>
                        <li>• Have sponsor ask about status at day 12 if not yet notified</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-orange-500" />
                        Red Flags (Delays)
                      </h5>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• No status update after day 7</li>
                        <li>• Request for additional documents</li>
                        <li>• Immigration asking about criminal history</li>
                        <li>• Sponsor unable to contact immigration</li>
                        <li>• Your visa nearing expiration</li>
                        <li>• Phone calls from immigration (rare but important)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">How to Check Application Status</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">1</span>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900">Ask Your Sponsor</h5>
                          <p className="text-sm text-gray-600 mt-1">Your sponsor has the most direct access. Ask them to contact immigration office directly.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">2</span>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900">Visit Immigration Office Yourself</h5>
                          <p className="text-sm text-gray-600 mt-1">Go to the immigration office with your receipt from submission. Ask to speak with the officer handling your case.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">3</span>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900">Use a Legal Service</h5>
                          <p className="text-sm text-gray-600 mt-1">If you hired a legal firm, they have direct relationships and can check status on your behalf.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Section 6: Collection */}
                <motion.section
                  id="collection"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Phase 5: Card Collection & Registration (1-3 Days)</h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Your TRC is approved and produced! Now you collect it and complete your legal residence registration in Vietnam.
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
                            <h5 className="font-semibold text-gray-900 mb-1">Receive Notification (Day 1)</h5>
                            <p className="text-gray-700 text-sm">Your sponsor receives notice that your TRC is ready. They notify you with the collection date and time.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">2</span>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-1">Visit Immigration Office (Day 1-2)</h5>
                            <p className="text-gray-700 text-sm">Go to immigration office with your original passport and notification letter. Some offices require sponsor to accompany you.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">3</span>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-1">Verify Card Details (At Collection)</h5>
                            <p className="text-gray-700 text-sm">Check all information immediately: name spelling, dates, photo quality. Report any errors before leaving.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">4</span>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-1">Sign Card & Receive Card (At Collection)</h5>
                            <p className="text-gray-700 text-sm">Sign the card in presence of immigration officer. They provide instructions on card usage and care.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">5</span>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-1">Register at Local Police Station (Within 7 Days)</h5>
                            <p className="text-gray-700 text-sm">Visit your local police station with your TRC and landlord. They register your legal residence status in Vietnam.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                      <div className="flex items-start gap-3">
                        <Eye className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Verify All Details BEFORE Leaving Immigration Office</h5>
                          <p className="text-gray-700 mb-3">
                            Correcting errors after collection requires reapplication. Check these details immediately:
                          </p>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 text-sm">
                            <li>• Full name (spelling)</li>
                            <li>• Date of birth</li>
                            <li>• Nationality</li>
                            <li>• Passport number</li>
                            <li>• Card number</li>
                            <li>• Issue date</li>
                            <li>• Expiry date</li>
                            <li>• Photo quality</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mt-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Post-Collection: Police Registration</h4>
                    <div className="space-y-4">
                      <p className="text-gray-700">Within 7 days of receiving your TRC, you must register with local police (your ward/commune office). Here's how:</p>
                      <div className="bg-blue-50 rounded-lg p-4 space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700"><strong>Documents:</strong> Bring original TRC and your landlord (if renting)</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700"><strong>Visit:</strong> Go to your local police station/ward office (not immigration)</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700"><strong>Process:</strong> Fill out temporary residence registration form</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700"><strong>Result:</strong> Receive residence book or certificate</span>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm"><strong>Cost:</strong> Usually free or minimal fee ($1-3)</p>
                    </div>
                  </div>
                </motion.section>

                {/* Section 7: Common Mistakes */}
                <motion.section
                  id="common-mistakes"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Common Mistakes to Avoid</h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    These mistakes can cause delays, rejections, or even penalties. Learn from others' experiences.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        mistake: "Incomplete Documents",
                        impact: "Application rejected, must resubmit (delays 2-3 weeks)",
                        solution: "Use the checklist above. Check twice before submitting."
                      },
                      {
                        mistake: "Poor Quality Translations",
                        impact: "Documents rejected as illegible or inaccurate",
                        solution: "Use certified professional translators only"
                      },
                      {
                        mistake: "Expired Documents",
                        impact: "Application rejected entirely",
                        solution: "Verify all documents are within validity period"
                      },
                      {
                        mistake: "Wrong Sponsor",
                        impact: "Application cannot proceed",
                        solution: "Verify sponsor legitimacy before starting"
                      },
                      {
                        mistake: "Outdated Criminal Record Check",
                        impact: "Must request new one (weeks of delay)",
                        solution: "Get criminal check within 6 months of application"
                      },
                      {
                        mistake: "Missing Photos",
                        impact: "Cannot schedule biometric appointment",
                        solution: "Get professional photos before submission"
                      },
                      {
                        mistake: "Not Being Available for Biometric",
                        impact: "Must reschedule (adds 1-2 weeks)",
                        solution: "Confirm appointment availability immediately"
                      },
                      {
                        mistake: "Failing to Register at Police Station",
                        impact: "Incomplete legal residence status",
                        solution: "Do this within 7 days of TRC collection"
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-red-50 border-2 border-red-200 rounded-xl p-6"
                      >
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <AlertCircle className="w-5 h-5 text-red-600" />
                          {item.mistake}
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <p className="text-xs font-semibold text-gray-700 mb-1">IMPACT</p>
                            <p className="text-sm text-gray-700">{item.impact}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-gray-700 mb-1">SOLUTION</p>
                            <p className="text-sm text-gray-700">{item.solution}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* Section 8: Troubleshooting */}
                <motion.section
                  id="troubleshooting"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">If Something Goes Wrong: Troubleshooting</h2>

                  <div className="space-y-6">
                    {[
                      {
                        problem: "Immigration Requests Additional Documents",
                        whyItHappens: "Incomplete original submission or need for clarification",
                        whatToDo: [
                          "Get specific list of documents needed from sponsor",
                          "Gather documents immediately (don't delay)",
                          "Have sponsor submit additional documents within 3 days",
                          "Processing resumes from where it left off"
                        ]
                      },
                      {
                        problem: "Application Rejected - Documents Not Accepted",
                        whyItHappens: "Poor translation, missing signature, unclear copies, or document format issues",
                        whatToDo: [
                          "Request detailed rejection reason from sponsor",
                          "Fix specific issues (new translation, clearer copies, etc.)",
                          "Resubmit as new application (fresh fees required)",
                          "Timeline resets - expect another 4-6 weeks"
                        ]
                      },
                      {
                        problem: "Criminal Record Check Issues",
                        whyItHappens: "Your home country found something, immigration found discrepancies, or verification failed",
                        whatToDo: [
                          "Contact your home country's authorities for clarification",
                          "If it's old (7+ years), it may not apply in Vietnam",
                          "Consult lawyer - may require special explanation letter",
                          "In some cases, application may be denied"
                        ]
                      },
                      {
                        problem: "Visa Expires Before TRC is Complete",
                        whyItHappens: "You didn't budget enough time (8 weeks is realistic)",
                        whatToDo: [
                          "Request visa extension immediately (before expiration)",
                          "Immigration office may grant extension automatically",
                          "Or hire service to arrange new visa while TRC processes",
                          "Budget $50-100 for emergency visa extension"
                        ]
                      }
                    ].map((issue, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                      >
                        <h4 className="font-semibold text-gray-900 text-lg mb-3">{issue.problem}</h4>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-semibold text-gray-700 mb-2">Why This Happens</p>
                            <p className="text-gray-700 text-sm">{issue.whyItHappens}</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-700 mb-2">What to Do</p>
                            <ol className="space-y-2">
                              {issue.whatToDo.map((step, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-sm font-semibold text-primary flex-shrink-0 mt-0.5">{i + 1}.</span>
                                  <span className="text-sm text-gray-700">{step}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                        </div>
                      </motion.div>
                    ))}
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
                        question: "Can I apply for a TRC if I'm already in Vietnam on a tourist visa?",
                        answer: "Yes, as long as your tourist visa is valid when you submit the application. However, your tourist visa may expire during processing (10-15 days). You may need a visa extension or business visa while waiting for TRC approval."
                      },
                      {
                        question: "Do I need to be present in Vietnam for the entire application process?",
                        answer: "Yes, you must be present for the biometric appointment (fingerprints and photo). You cannot submit biometrics remotely. However, for other phases, your sponsor can handle coordination if you need to travel."
                      },
                      {
                        question: "Can my sponsor submit my application if I'm not in Vietnam yet?",
                        answer: "No, you must be in Vietnam with a valid visa to apply. The sponsor submits documents, but your biometrics must be collected in person at the immigration office."
                      },
                      {
                        question: "What if my sponsor changes during the application process?",
                        answer: "The TRC is tied to the original sponsor. Changing sponsors means starting over with a new application. Avoid this if possible by choosing a reliable sponsor from the start."
                      },
                      {
                        question: "Can I apply for a TRC multiple times simultaneously?",
                        answer: "No. Immigration checks for duplicate applications and will reject them. One application at a time. If the first is rejected, you can reapply."
                      },
                      {
                        question: "What happens after I collect my TRC?",
                        answer: "Register at your local police station within 7 days. After that, you have legal residence in Vietnam. Your TRC is valid for 1-3 years depending on your type. Before it expires, you apply for renewal."
                      },
                      {
                        question: "How do I renew my TRC when it expires?",
                        answer: "The renewal process is similar but simpler. You don't need new criminal record or health checks if they're recent. Start the renewal process 2-3 months before expiration."
                      },
                      {
                        question: "Can I work with my TRC?",
                        answer: "A TRC provides legal residence status. For employment, you still need a separate work permit. Your employer typically arranges this alongside the TRC application."
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
                    <Link href="/resources/trc-cost-breakdown-vietnam">
                      <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-xl p-6 hover:border-primary hover:shadow-xl transition-all duration-300 group">
                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                          How Much Does a TRC Really Cost in 2025?
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Complete cost breakdown including government fees, service costs, and hidden expenses.
                        </p>
                        <div className="flex items-center gap-2 text-primary font-medium text-sm">
                          Read Article
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                    <Link href="/resources/trc-timeline-vietnam">
                      <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-xl p-6 hover:border-primary hover:shadow-xl transition-all duration-300 group">
                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                          How Long Does It Take to Get a TRC? Timeline Breakdown
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Realistic timeline for each phase from document preparation to card collection.
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
                Need Help Navigating the Process?
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Our legal experts will guide you through every step and handle the coordination with immigration authorities.
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
                  Schedule Free Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
