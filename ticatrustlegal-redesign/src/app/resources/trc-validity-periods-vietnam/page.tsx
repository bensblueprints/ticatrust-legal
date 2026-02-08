'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, Calendar, Home, Phone, Mail, ArrowRight, CheckCircle2, AlertCircle, Shield, TrendingUp, Award, DollarSign, FileText, Users } from 'lucide-react';

export default function TRCValidityPeriodsVietnam() {
  const publishDate = "February 8, 2026";
  const readingTime = "10 min read";

  const tableOfContents = [
    { id: "overview", title: "Validity Periods Overview" },
    { id: "6-month-trc", title: "6-Month TRC" },
    { id: "1-year-trc", title: "1-Year TRC" },
    { id: "2-year-trc", title: "2-Year TRC" },
    { id: "3-year-trc", title: "3-Year TRC" },
    { id: "5-year-trc", title: "5-Year TRC" },
    { id: "choosing-duration", title: "How to Choose the Right Duration" },
    { id: "renewal-vs-new", title: "Renewal vs New Application" },
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
            <span className="text-gray-900 font-medium">TRC Validity Periods Vietnam</span>
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
                Duration Guide
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900 leading-tight">
                TRC Validity Periods Explained: 1, 2, 3, and 5-Year Options
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
                Vietnam offers TRC validity periods from 6 months to 5 years. Choosing the right duration affects your costs,
                renewal frequency, and long-term planning. This guide explains each option, eligibility requirements, and helps
                you make the best choice for your situation.
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
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Validity Periods Overview</h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Vietnamese law allows TRCs to be issued for various durations depending on your eligibility category,
                    purpose of stay, and sponsor type. The validity period determines how long you can legally reside in
                    Vietnam before needing to renew.
                  </p>

                  <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden mb-8">
                    <div className="bg-primary text-white px-6 py-4">
                      <h4 className="font-semibold text-lg">All TRC Validity Periods & Official Fees</h4>
                    </div>
                    <div className="p-6">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b-2 border-gray-200">
                            <th className="text-left py-3 text-gray-900 font-semibold">Duration</th>
                            <th className="text-left py-3 text-gray-900 font-semibold">Fee (VND)</th>
                            <th className="text-left py-3 text-gray-900 font-semibold">Fee (USD)</th>
                            <th className="text-left py-3 text-gray-900 font-semibold">Cost per Year</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { duration: "6 months", vnd: "200,000", usd: "$8", perYear: "$16/year" },
                            { duration: "1 year", vnd: "400,000", usd: "$16", perYear: "$16/year" },
                            { duration: "2 years", vnd: "600,000", usd: "$24", perYear: "$12/year" },
                            { duration: "3 years", vnd: "800,000", usd: "$32", perYear: "$11/year" },
                            { duration: "5 years", vnd: "1,000,000", usd: "$40", perYear: "$8/year" }
                          ].map((row, index) => (
                            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                              <td className="py-3 text-gray-900 font-medium">{row.duration}</td>
                              <td className="py-3 text-gray-700">{row.vnd}</td>
                              <td className="py-3 text-gray-700">{row.usd}</td>
                              <td className="py-3 text-primary font-semibold">{row.perYear}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {[
                      {
                        icon: DollarSign,
                        title: "Best Value",
                        subtitle: "5-Year TRC",
                        description: "Only $8 per year - 50% cheaper than 1-year renewals",
                        highlight: true
                      },
                      {
                        icon: Shield,
                        title: "Most Stable",
                        subtitle: "3-5 Year Options",
                        description: "Fewer renewals, consistent residence status",
                        highlight: false
                      },
                      {
                        icon: TrendingUp,
                        title: "Most Flexible",
                        subtitle: "1-Year TRC",
                        description: "Test living in Vietnam before long commitment",
                        highlight: false
                      }
                    ].map((card, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`${card.highlight ? 'bg-primary/10 border-primary' : 'bg-gray-50 border-gray-200'} border-2 rounded-xl p-6 text-center`}
                      >
                        <div className={`w-16 h-16 rounded-full ${card.highlight ? 'bg-primary' : 'bg-gray-300'} flex items-center justify-center mx-auto mb-4`}>
                          <card.icon className="w-8 h-8 text-white" />
                        </div>
                        <h5 className="text-sm font-semibold text-gray-600 mb-2">{card.title}</h5>
                        <h4 className="font-serif font-bold text-lg mb-2 text-gray-900">{card.subtitle}</h4>
                        <p className="text-sm text-gray-600">{card.description}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Important to Know</h4>
                        <p className="text-gray-700 mb-0">
                          Your TRC validity period cannot exceed the duration specified in your sponsorship documents (work
                          contract, investment certificate, marriage certificate, etc.). Even if you're eligible for a 5-year
                          TRC, you'll only receive 2 years if your work permit is valid for 2 years.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Section 2: 6-Month TRC */}
                <motion.section
                  id="6-month-trc"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">6-Month TRC</h2>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-8 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="text-center">
                        <p className="text-gray-600 text-sm mb-1">Official Fee</p>
                        <p className="text-3xl font-bold text-primary">200,000 VND</p>
                        <p className="text-gray-500 text-sm">≈ $8 USD</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600 text-sm mb-1">Processing Time</p>
                        <p className="text-3xl font-bold text-gray-900">10-15 Days</p>
                        <p className="text-gray-500 text-sm">Standard timeline</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600 text-sm mb-1">Renewal Frequency</p>
                        <p className="text-3xl font-bold text-gray-900">Every 6 Months</p>
                        <p className="text-gray-500 text-sm">Most frequent renewal</p>
                      </div>
                    </div>

                    <h4 className="font-semibold text-gray-900 mb-4">Who Typically Gets a 6-Month TRC:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {[
                        "Short-term work assignments (6-month contracts)",
                        "Internships or training programs",
                        "Initial TRC for new foreign workers (trial period)",
                        "Students in short-term language programs",
                        "Those testing long-term residence in Vietnam",
                        "Situations where sponsor can only commit to 6 months"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h5 className="font-semibold text-gray-900 mb-3">Pros & Cons</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-green-600 font-semibold mb-2 text-sm">✓ Advantages:</p>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Lowest upfront cost ($8)</li>
                            <li>• Good for testing Vietnam life</li>
                            <li>• Easy to upgrade to longer duration</li>
                            <li>• Flexible if plans change</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-red-600 font-semibold mb-2 text-sm">✗ Disadvantages:</p>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Most frequent renewals (twice/year)</li>
                            <li>• Highest annual cost ($16/year)</li>
                            <li>• More administrative burden</li>
                            <li>• Less stable long-term status</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Recommendation</h5>
                        <p className="text-gray-700">
                          The 6-month option is best for truly short-term stays or when you're unsure about your long-term
                          plans. If you know you'll be in Vietnam for a year or more, opt for a longer duration to save time
                          and money on renewals.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Section 3: 1-Year TRC */}
                <motion.section
                  id="1-year-trc"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">1-Year TRC</h2>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-8 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="text-center">
                        <p className="text-gray-600 text-sm mb-1">Official Fee</p>
                        <p className="text-3xl font-bold text-primary">400,000 VND</p>
                        <p className="text-gray-500 text-sm">≈ $16 USD</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600 text-sm mb-1">Processing Time</p>
                        <p className="text-3xl font-bold text-gray-900">10-15 Days</p>
                        <p className="text-gray-500 text-sm">Standard timeline</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600 text-sm mb-1">Renewal Frequency</p>
                        <p className="text-3xl font-bold text-gray-900">Annually</p>
                        <p className="text-gray-500 text-sm">Once per year</p>
                      </div>
                    </div>

                    <h4 className="font-semibold text-gray-900 mb-4">Who Typically Gets a 1-Year TRC:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {[
                        "Foreign employees with 1-year work contracts",
                        "First-time TRC applicants (most common initial duration)",
                        "Students enrolled in 1-year programs",
                        "Those wanting flexibility to reassess annually",
                        "Expats testing long-term commitment to Vietnam",
                        "Situations where longer commitment is uncertain"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h5 className="font-semibold text-gray-900 mb-3">Pros & Cons</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-green-600 font-semibold mb-2 text-sm">✓ Advantages:</p>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Most common duration (widely accepted)</li>
                            <li>• Aligns with typical work contracts</li>
                            <li>• Only one renewal per year</li>
                            <li>• Good balance of cost and flexibility</li>
                            <li>• Easier to match with visa validity</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-red-600 font-semibold mb-2 text-sm">✗ Disadvantages:</p>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Annual renewal required</li>
                            <li>• More expensive per year than 2-5 year options</li>
                            <li>• Administrative burden each year</li>
                            <li>• Renewal costs add up over time</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Most Popular Choice</h5>
                        <p className="text-gray-700">
                          The 1-year TRC is the most commonly issued duration, especially for first-time applicants. It provides
                          a good balance between commitment and flexibility. After your first year, many people upgrade to a
                          2 or 3-year TRC for convenience and cost savings.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Section 4: 2-Year TRC */}
                <motion.section
                  id="2-year-trc"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">2-Year TRC</h2>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-8 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="text-center">
                        <p className="text-gray-600 text-sm mb-1">Official Fee</p>
                        <p className="text-3xl font-bold text-primary">600,000 VND</p>
                        <p className="text-gray-500 text-sm">≈ $24 USD</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600 text-sm mb-1">Cost Per Year</p>
                        <p className="text-3xl font-bold text-green-600">$12/year</p>
                        <p className="text-gray-500 text-sm">25% savings vs 1-year</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600 text-sm mb-1">Renewal Frequency</p>
                        <p className="text-3xl font-bold text-gray-900">Every 2 Years</p>
                        <p className="text-gray-500 text-sm">Half as often</p>
                      </div>
                    </div>

                    <h4 className="font-semibold text-gray-900 mb-4">Who Typically Gets a 2-Year TRC:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {[
                        "Foreign workers with 2-year work permits (max work permit duration)",
                        "Established expats renewing after initial 1-year TRC",
                        "University students in bachelor's programs",
                        "Business owners with stable operations",
                        "Families settled in Vietnam long-term",
                        "Those who want less frequent renewals"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                      <h5 className="font-semibold text-gray-900 mb-3">Pros & Cons</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-green-600 font-semibold mb-2 text-sm">✓ Advantages:</p>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• 25% cheaper per year than 1-year option</li>
                            <li>• Aligns with maximum work permit duration</li>
                            <li>• Renew only every 2 years</li>
                            <li>• Better long-term stability</li>
                            <li>• Preferred by employers for stability</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-red-600 font-semibold mb-2 text-sm">✗ Disadvantages:</p>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Higher upfront cost ($24)</li>
                            <li>• Requires 2-year work permit/sponsorship</li>
                            <li>• Less flexibility if plans change</li>
                            <li>• Still requires renewals (unlike 5-year)</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-primary/5 border-2 border-primary/30 rounded-xl p-6">
                      <h5 className="font-semibold text-gray-900 mb-3">💡 Smart Strategy</h5>
                      <p className="text-gray-700 mb-3">
                        The 2-year TRC is the longest duration available for work-based TRC (since work permits max out at
                        2 years). This makes it the optimal choice for foreign employees who plan to stay long-term.
                      </p>
                      <p className="text-gray-600 text-sm">
                        <strong>Cost comparison:</strong> Over 10 years, choosing 2-year TRC saves you $80 compared to
                        1-year renewals ($120 vs $160 in government fees alone, not counting renewal processing costs).
                      </p>
                    </div>
                  </div>
                </motion.section>

                {/* Section 5: 3-Year TRC */}
                <motion.section
                  id="3-year-trc"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">3-Year TRC</h2>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-8 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="text-center">
                        <p className="text-gray-600 text-sm mb-1">Official Fee</p>
                        <p className="text-3xl font-bold text-primary">800,000 VND</p>
                        <p className="text-gray-500 text-sm">≈ $32 USD</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600 text-sm mb-1">Cost Per Year</p>
                        <p className="text-3xl font-bold text-green-600">$11/year</p>
                        <p className="text-gray-500 text-sm">31% savings vs 1-year</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600 text-sm mb-1">Renewal Frequency</p>
                        <p className="text-3xl font-bold text-gray-900">Every 3 Years</p>
                        <p className="text-gray-500 text-sm">Infrequent renewals</p>
                      </div>
                    </div>

                    <h4 className="font-semibold text-gray-900 mb-4">Who Can Get a 3-Year TRC:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {[
                        "Spouses of Vietnamese citizens",
                        "Children of Vietnamese citizens",
                        "Parents of Vietnamese citizens (with proper documentation)",
                        "Foreign investors with 3+ year investment certificates",
                        "University lecturers and researchers",
                        "Those with special skills or expertise Vietnam needs"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                      <h5 className="font-semibold text-gray-900 mb-3">Pros & Cons</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-green-600 font-semibold mb-2 text-sm">✓ Advantages:</p>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Excellent value ($11/year)</li>
                            <li>• Only renew every 3 years</li>
                            <li>• Demonstrates strong ties to Vietnam</li>
                            <li>• Very stable residence status</li>
                            <li>• Less administrative burden</li>
                            <li>• Good for family-based residence</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-red-600 font-semibold mb-2 text-sm">✗ Disadvantages:</p>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Stricter eligibility requirements</li>
                            <li>• Not available for work-based TRC</li>
                            <li>• Higher upfront cost ($32)</li>
                            <li>• Requires stronger connection to Vietnam</li>
                            <li>• May need additional documentation</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                      <div className="flex items-start gap-3">
                        <Users className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Perfect for Family-Based TRC</h5>
                          <p className="text-gray-700">
                            If you're eligible for a 3-year TRC (married to Vietnamese citizen, parent/child of Vietnamese
                            citizen, or long-term investor), this option provides excellent stability and value. You'll only
                            need to go through the renewal process once every three years.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Section 6: 5-Year TRC */}
                <motion.section
                  id="5-year-trc"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">5-Year TRC</h2>

                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/30 rounded-xl p-8 mb-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xl">Premium Tier - Best Value</h4>
                        <p className="text-gray-600">The longest and most cost-effective TRC option</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="text-center bg-white rounded-lg p-4">
                        <p className="text-gray-600 text-sm mb-1">Official Fee</p>
                        <p className="text-3xl font-bold text-primary">1,000,000 VND</p>
                        <p className="text-gray-500 text-sm">≈ $40 USD</p>
                      </div>
                      <div className="text-center bg-white rounded-lg p-4">
                        <p className="text-gray-600 text-sm mb-1">Cost Per Year</p>
                        <p className="text-3xl font-bold text-green-600">$8/year</p>
                        <p className="text-gray-500 text-sm font-semibold">50% savings vs 1-year!</p>
                      </div>
                      <div className="text-center bg-white rounded-lg p-4">
                        <p className="text-gray-600 text-sm mb-1">Renewal Frequency</p>
                        <p className="text-3xl font-bold text-gray-900">Every 5 Years</p>
                        <p className="text-gray-500 text-sm">Maximum duration</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-6">
                      <h5 className="font-semibold text-gray-900 mb-3">Cost Savings Over Time</h5>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                          <span className="text-gray-700">5 years with 1-year renewals:</span>
                          <span className="font-semibold text-gray-900">$80 (5 × $16)</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                          <span className="text-gray-700">5 years with 2-year renewals:</span>
                          <span className="font-semibold text-gray-900">$72 (3 × $24)</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-primary">
                          <span className="text-gray-700">5 years with 5-year TRC:</span>
                          <span className="font-semibold text-primary">$40 (1 × $40)</span>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                          <span className="font-bold text-gray-900">Total Savings:</span>
                          <span className="font-bold text-green-600">$40 saved (50% less)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h4 className="font-semibold text-gray-900 mb-4">Who Can Get a 5-Year TRC:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {[
                      "Spouses of Vietnamese citizens (most common)",
                      "Parents of Vietnamese citizens",
                      "Foreign investors with significant investment certificates",
                      "Foreign lawyers practicing in Vietnam",
                      "Those with Vietnamese permanent residence card",
                      "Individuals granted long-term residence by government decision"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Pros & Cons</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-green-600 font-semibold mb-2 text-sm">✓ Advantages:</p>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• <strong>BEST VALUE</strong> - Only $8/year</li>
                          <li>• Renew only once in 5 years</li>
                          <li>• Maximum stability and convenience</li>
                          <li>• Demonstrates strongest ties to Vietnam</li>
                          <li>• Minimal administrative burden</li>
                          <li>• Can plan long-term with confidence</li>
                          <li>• Saves significant time and money</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-red-600 font-semibold mb-2 text-sm">✗ Disadvantages:</p>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Most restrictive eligibility requirements</li>
                          <li>• NOT available for work-based TRC</li>
                          <li>• Highest upfront cost ($40)</li>
                          <li>• Typically requires family ties to Vietnam</li>
                          <li>• May require extensive documentation</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <Award className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">The Gold Standard</h5>
                        <p className="text-gray-700 mb-3">
                          If you're eligible for a 5-year TRC, absolutely apply for it. The cost savings, convenience, and
                          stability make it the best option by far. Most commonly granted to spouses of Vietnamese citizens
                          who plan to live in Vietnam permanently.
                        </p>
                        <p className="text-gray-600 text-sm">
                          <strong>Pro tip:</strong> Even if you're unsure about staying 5 years, get the 5-year TRC if
                          eligible. You can always leave Vietnam early, but you'll save money regardless.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Section 7: Choosing Duration */}
                <motion.section
                  id="choosing-duration"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">How to Choose the Right Duration</h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Your TRC duration isn't always a free choice - it's limited by your eligibility category and sponsorship
                    documents. Here's how to determine the best option for your situation:
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        title: "Rule #1: Match Your Sponsorship Duration",
                        description: "Your TRC cannot exceed the validity of your sponsoring documents:",
                        examples: [
                          "2-year work permit = maximum 2-year TRC",
                          "1-year student enrollment = maximum 1-year TRC",
                          "Marriage to Vietnamese citizen = eligible for 5-year TRC",
                          "1-year investment certificate = maximum 1-year TRC"
                        ],
                        icon: FileText
                      },
                      {
                        title: "Rule #2: Consider Your Certainty Level",
                        description: "How confident are you about staying in Vietnam long-term?",
                        examples: [
                          "<1 year certain: 6-month or 1-year TRC",
                          "1-2 years certain: 1-year or 2-year TRC",
                          "3+ years certain: Apply for longest available",
                          "Married to Vietnamese: Always get 5-year if possible"
                        ],
                        icon: TrendingUp
                      },
                      {
                        title: "Rule #3: Calculate Total Cost of Ownership",
                        description: "Consider not just the card fee, but renewal costs over time:",
                        examples: [
                          "Card fee × number of renewals",
                          "Plus: Health certificate renewals (~$30 each)",
                          "Plus: Translation/notarization fees (~$50 each renewal)",
                          "Plus: Legal service fees if using assistance (~$200 each)"
                        ],
                        icon: DollarSign
                      },
                      {
                        title: "Rule #4: Factor in Convenience",
                        description: "Administrative burden and time investment matters:",
                        examples: [
                          "Each renewal = 1 week of preparation + appointments",
                          "Taking time off work for immigration office visits",
                          "Risk of being abroad when renewal is due",
                          "Mental load of tracking expiration dates"
                        ],
                        icon: Clock
                      }
                    ].map((rule, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <rule.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-2 text-lg">{rule.title}</h4>
                            <p className="text-gray-700 mb-3">{rule.description}</p>
                            <div className="bg-gray-50 rounded-lg p-4">
                              <ul className="space-y-2">
                                {rule.examples.map((example, exIndex) => (
                                  <li key={exIndex} className="flex items-start gap-2 text-sm text-gray-700">
                                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                    <span>{example}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-primary/5 border-2 border-primary/30 rounded-xl p-6 mt-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Decision Framework</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3 pb-3 border-b border-gray-200">
                        <span className="font-semibold text-primary w-32 flex-shrink-0">Eligible for 5-year?</span>
                        <span className="text-gray-700">→ Always choose 5-year (best value, maximum convenience)</span>
                      </div>
                      <div className="flex items-start gap-3 pb-3 border-b border-gray-200">
                        <span className="font-semibold text-primary w-32 flex-shrink-0">Work-based TRC?</span>
                        <span className="text-gray-700">→ Match work permit duration (typically 2 years maximum)</span>
                      </div>
                      <div className="flex items-start gap-3 pb-3 border-b border-gray-200">
                        <span className="font-semibold text-primary w-32 flex-shrink-0">First time in VN?</span>
                        <span className="text-gray-700">→ Start with 1-year, upgrade later if you settle</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="font-semibold text-primary w-32 flex-shrink-0">Uncertain plans?</span>
                        <span className="text-gray-700">→ Choose shorter duration for flexibility</span>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Section 8: Renewal vs New */}
                <motion.section
                  id="renewal-vs-new"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Renewal vs New Application</h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Understanding the difference between renewing your existing TRC and applying for a new one helps you
                    plan correctly and avoid gaps in residence status.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        TRC Renewal
                      </h4>
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-gray-700 mb-2">When to Renew:</p>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Your current TRC is still valid</li>
                          <li>• You're applying 30-45 days before expiration</li>
                          <li>• Same eligibility category as before</li>
                          <li>• Same sponsor (or equivalent)</li>
                        </ul>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Renewal Process:</p>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Simpler than initial application</li>
                          <li>• Fewer documents required</li>
                          <li>• Faster processing (2-3 weeks)</li>
                          <li>• Can apply for different duration</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-xs text-gray-600">
                          <strong>Example:</strong> You have a 1-year work-based TRC expiring next month. Your employer
                          renews your work permit for 2 years. You can renew your TRC for 2 years.
                        </p>
                      </div>
                    </div>

                    <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-orange-600" />
                        New TRC Application
                      </h4>
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-gray-700 mb-2">When You Need New Application:</p>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Your TRC has already expired</li>
                          <li>• You're changing eligibility categories</li>
                          <li>• You changed sponsors/employers</li>
                          <li>• Your first TRC application</li>
                        </ul>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-gray-700 mb-2">New Application Process:</p>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Complete documentation required</li>
                          <li>• Full background checks</li>
                          <li>• Standard processing (4-6 weeks)</li>
                          <li>• Higher complexity and cost</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-xs text-gray-600">
                          <strong>Example:</strong> Your work-based 1-year TRC expired 2 weeks ago, or you switched from
                          work-based to family-based (married Vietnamese citizen). New application required.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Critical: Never Let Your TRC Expire</h5>
                        <p className="text-gray-700 mb-3">
                          Start the renewal process <strong>30-45 days before expiration</strong>. If your TRC expires:
                        </p>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• You must apply for a NEW TRC (longer process, more expensive)</li>
                          <li>• You may face overstay fines (500,000 - 2,000,000 VND)</li>
                          <li>• Risk of deportation for significant overstays</li>
                          <li>• Potential 1-3 year entry ban to Vietnam</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mt-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Can You Change Duration at Renewal?</h4>
                    <p className="text-gray-700 mb-4">
                      <strong>Yes!</strong> When renewing, you can apply for a different duration than your previous TRC,
                      as long as you meet the eligibility requirements.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm font-semibold text-gray-900 mb-2">Common Scenarios:</p>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span><strong>Upgrading:</strong> Had 1-year TRC, work permit renewed for 2 years → Apply for 2-year TRC</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span><strong>Category Change:</strong> Had work-based 2-year TRC, married Vietnamese → Apply for 5-year family TRC</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span><strong>Downgrading:</strong> Had 2-year TRC, new contract only 1 year → Apply for 1-year TRC</span>
                        </div>
                      </div>
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
                        question: "Can I request a specific TRC duration, or is it assigned automatically?",
                        answer: "You can request your preferred duration, but it must not exceed the validity of your sponsorship documents. Immigration will approve the duration you request if you're eligible. For example, if your work permit is valid for 2 years, you can request a 1-year or 2-year TRC, but not 3 or 5 years."
                      },
                      {
                        question: "If I have a 2-year work permit, can I still get a 1-year TRC?",
                        answer: "Yes, you can request a shorter TRC duration than your supporting documents allow. However, this isn't recommended as you'll pay more per year and renew more frequently. The only reason to do this is if you're uncertain about staying the full 2 years."
                      },
                      {
                        question: "What happens if my work permit expires before my TRC?",
                        answer: "Your TRC becomes invalid when your work permit expires (for work-based TRC). You must renew your work permit first, then update/renew your TRC to match. Always ensure your work permit validity equals or exceeds your TRC validity."
                      },
                      {
                        question: "Can I upgrade from a 1-year to a 5-year TRC mid-year?",
                        answer: "You cannot simply 'upgrade' mid-period. However, if your circumstances change (e.g., you marry a Vietnamese citizen), you can apply for a new TRC under a different category. The new TRC will replace your current one, but you'll go through the full application process again."
                      },
                      {
                        question: "Do longer TRC durations require more documents?",
                        answer: "No, the documentation requirements are the same regardless of duration. What determines eligibility for longer durations is your category (work, family, investment) and your sponsorship documents' validity, not the documents you submit."
                      },
                      {
                        question: "Is the processing time different for 5-year vs 1-year TRC?",
                        answer: "No, processing time is the same (10-15 working days) regardless of duration. The duration affects the validity period once approved, not the application timeline."
                      },
                      {
                        question: "Can I get a 5-year TRC as a foreign worker?",
                        answer: "No, work-based TRC is limited by work permit duration, which has a maximum of 2 years in Vietnam. To get a 5-year TRC, you need a different eligibility basis such as marriage to a Vietnamese citizen or significant long-term investment."
                      },
                      {
                        question: "If I leave Vietnam permanently, can I get a refund on my unused TRC time?",
                        answer: "No, TRC fees are non-refundable. If you leave Vietnam permanently with 3 years remaining on a 5-year TRC, you won't receive a refund. However, the card remains valid if you return to Vietnam within its validity period."
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
                    <Link href="/resources/5-year-trc-eligibility-vietnam">
                      <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-xl p-6 hover:border-primary hover:shadow-xl transition-all duration-300 group">
                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                          Who is Eligible for a 5-Year TRC in Vietnam?
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Detailed guide to qualifying for the longest and most valuable TRC duration.
                        </p>
                        <div className="flex items-center gap-2 text-primary font-medium text-sm">
                          Read Article
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                    <Link href="/resources/trc-cost-breakdown-vietnam">
                      <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-xl p-6 hover:border-primary hover:shadow-xl transition-all duration-300 group">
                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                          Cost Breakdown: How Much Does a TRC Really Cost?
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Complete cost analysis including hidden fees and long-term expenses.
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
                Maximize Your TRC Value - Get Expert Guidance
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Our legal team helps you choose the optimal TRC duration and ensures you get the longest period you're
                eligible for. Save time, money, and hassle.
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
