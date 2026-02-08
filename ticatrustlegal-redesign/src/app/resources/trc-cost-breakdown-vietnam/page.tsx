'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { DollarSign, Calendar, Home, Phone, Mail, ArrowRight, CheckCircle2, AlertCircle, TrendingDown, Zap, PieChart, CreditCard, Building2, HelpCircle } from 'lucide-react';

export default function TRCCostBreakdownVietnam() {
  const publishDate = "February 8, 2026";
  const readingTime = "12 min read";

  const tableOfContents = [
    { id: "overview", title: "Cost Overview" },
    { id: "government-fees", title: "Official Government Fees" },
    { id: "service-costs", title: "Service Provider Costs" },
    { id: "hidden-costs", title: "Hidden & Additional Costs" },
    { id: "cost-by-type", title: "Cost Breakdown by TRC Type" },
    { id: "cost-comparisons", title: "Cost Comparisons & Scenarios" },
    { id: "payment-methods", title: "Payment Methods & Process" },
    { id: "money-saving-tips", title: "Money-Saving Tips" },
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
            <span className="text-gray-900 font-medium">TRC Cost Breakdown Vietnam</span>
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
                Cost Guide
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900 leading-tight">
                How Much Does a TRC Really Cost in Vietnam in 2025?
              </h1>
              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>{publishDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <span>{readingTime}</span>
                </div>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Planning your budget for a Temporary Residence Card? This comprehensive cost breakdown reveals everything you'll pay—from official government fees to hidden expenses—so you can budget accurately and avoid surprises.
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
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">TRC Cost Overview for 2025</h2>

                  <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-8 mb-8">
                    <h4 className="font-semibold text-gray-900 mb-6 text-xl text-center">Total Cost Estimates</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        {
                          icon: TrendingDown,
                          label: "Budget Option",
                          cost: "$400-600",
                          color: "green",
                          description: "Government fees only, self-coordinated"
                        },
                        {
                          icon: DollarSign,
                          label: "Standard Option",
                          cost: "$900-1,200",
                          color: "blue",
                          description: "With legal service coordination"
                        },
                        {
                          icon: PieChart,
                          label: "Premium Option",
                          cost: "$1,500-2,000",
                          color: "orange",
                          description: "Full-service with expediting"
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
                          <p className={`text-2xl font-bold text-${scenario.color}-600 mb-2`}>{scenario.cost}</p>
                          <p className="text-sm text-gray-600">{scenario.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Cost Insight</h4>
                        <p className="text-gray-700 mb-0">
                          The actual cost depends entirely on how you manage the application. Government fees are fixed, but service costs vary significantly based on who handles the paperwork. Many people spend more than necessary by using expensive services or making mistakes that require rework.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    The total cost of obtaining a TRC in Vietnam breaks down into three main categories: official government fees, professional service costs, and indirect expenses. Understanding each component helps you make informed decisions and budget effectively.
                  </p>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Quick Cost Breakdown</h4>
                    <div className="space-y-3">
                      {[
                        { category: "Government Fees (Mandatory)", amount: "$200-400", percentage: 40 },
                        { category: "Document Preparation & Translation", amount: "$100-300", percentage: 25 },
                        { category: "Professional Coordination (Optional)", amount: "$400-900", percentage: 30 },
                        { category: "Miscellaneous & Travel", amount: "$50-200", percentage: 5 }
                      ].map((item, index) => (
                        <div key={index}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-900">{item.category}</span>
                            <span className="text-sm text-primary font-semibold">{item.amount}</span>
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

                {/* Section 2: Government Fees */}
                <motion.section
                  id="government-fees"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Official Government Fees (Fixed)</h2>

                  <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8 mb-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <CreditCard className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xl">These fees are mandatory and set by law</h4>
                        <p className="text-gray-600">They do not vary regardless of nationality or circumstance</p>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      Vietnam's government charges standardized fees for TRC applications. These are the only costs you cannot avoid and are the same for all applicants, regardless of nationality or TRC type.
                    </p>

                    <div className="bg-white rounded-xl p-6 mb-6">
                      <h5 className="font-semibold text-gray-900 mb-4">Government Fee Breakdown (2025):</h5>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b-2 border-primary">
                              <th className="text-left py-3 px-4 font-semibold text-gray-900">Service</th>
                              <th className="text-left py-3 px-4 font-semibold text-gray-900">Cost (USD)</th>
                              <th className="text-left py-3 px-4 font-semibold text-gray-900">Cost (VND)</th>
                              <th className="text-left py-3 px-4 font-semibold text-gray-900">Notes</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { service: "TRC Application Processing", cost: "$50-80", vnd: "1,200,000-1,900,000", notes: "Varies by province" },
                              { service: "Biometric Collection", cost: "Free", vnd: "Free", notes: "Included in application fee" },
                              { service: "Card Production", cost: "$30-50", vnd: "720,000-1,200,000", notes: "Physical card manufacturing" },
                              { service: "Translation Fee (if required)", cost: "$0", vnd: "Varies", notes: "Government does not charge; use private translators" },
                              { service: "Notarization (if required)", cost: "$0", vnd: "Varies", notes: "Government does not charge; use notary services" }
                            ].map((item, index) => (
                              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="py-3 px-4 text-gray-900 font-medium">{item.service}</td>
                                <td className="py-3 px-4 text-primary font-semibold">{item.cost}</td>
                                <td className="py-3 px-4 text-gray-700">{item.vnd}</td>
                                <td className="py-3 px-4 text-gray-600 text-xs">{item.notes}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <h5 className="font-semibold text-gray-900 mb-2">By the Numbers</h5>
                        <div className="space-y-2 text-sm text-gray-700">
                          <p><strong>Total Government Fees:</strong> $80-130</p>
                          <p><strong>Average Processing Fee:</strong> $65</p>
                          <p><strong>Average Card Fee:</strong> $40</p>
                        </div>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                        <h5 className="font-semibold text-gray-900 mb-2">Payment Timeline</h5>
                        <div className="space-y-2 text-sm text-gray-700">
                          <p><strong>Application Fee:</strong> At submission</p>
                          <p><strong>Card Fee:</strong> After approval</p>
                          <p><strong>Total Paid:</strong> In two installments</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Provincial Variations</h5>
                        <p className="text-gray-700 mb-2">
                          While most fees are standardized nationwide, some variations exist between provinces:
                        </p>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• <strong>Ho Chi Minh City:</strong> Slightly higher fees (more efficient processing)</li>
                          <li>• <strong>Hanoi:</strong> Standard fees, faster processing</li>
                          <li>• <strong>Other provinces:</strong> Lower fees, slower processing</li>
                          <li>• <strong>Variation range:</strong> $10-20 difference from average</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Section 3: Service Costs */}
                <motion.section
                  id="service-costs"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Service Provider Costs (Variable)</h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Beyond government fees, most applicants hire professionals to handle document preparation, translation, and application coordination. These costs vary widely based on service type and provider.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        service: "DIY (Self-Coordinated)",
                        costRange: "$100-300",
                        timeline: "8-10 weeks",
                        pros: ["Lowest cost possible", "Complete control", "No intermediaries"],
                        cons: ["Significant time investment", "Risk of document errors", "No expert guidance", "May miss requirements"],
                        recommendation: "If you have time and speak Vietnamese"
                      },
                      {
                        service: "Translation & Notarization Only",
                        costRange: "$150-400",
                        timeline: "6-8 weeks",
                        pros: ["Much cheaper than full service", "Professional document quality", "Proper formatting/notarization"],
                        cons: ["Still requires your coordination", "Limited guidance", "May need help from sponsor"],
                        recommendation: "If you're organized and English-speaking"
                      },
                      {
                        service: "Partial Legal Service (Coordination Only)",
                        costRange: "$400-700",
                        timeline: "5-6 weeks",
                        pros: ["Expert guidance on requirements", "Sponsor coordination support", "Faster response times", "Reduced errors"],
                        cons: ["Moderate cost", "Less hands-on than full service"],
                        recommendation: "Best balance of cost and convenience"
                      },
                      {
                        service: "Full Legal Service (Complete Management)",
                        costRange: "$800-1,500",
                        timeline: "4-5 weeks",
                        pros: ["Complete peace of mind", "Fastest processing", "Expert handling of complex cases", "All follow-up included"],
                        cons: ["Highest cost", "Less direct control"],
                        recommendation: "For those who want zero stress and speed"
                      }
                    ].map((option, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-24 flex-shrink-0">
                            <div className="bg-primary/10 text-primary font-bold text-sm py-2 px-3 rounded-lg text-center">{option.costRange}</div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-lg mb-2">{option.service}</h4>
                            <p className="text-sm text-gray-600 mb-4"><strong>Timeline:</strong> {option.timeline}</p>
                            <p className="text-sm text-gray-600 mb-3"><strong>Best for:</strong> {option.recommendation}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-gray-900 text-sm mb-2 flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-600" />
                              Pros
                            </h5>
                            <ul className="space-y-1">
                              {option.pros.map((pro, i) => (
                                <li key={i} className="text-xs text-gray-700">• {pro}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 text-sm mb-2 flex items-center gap-2">
                              <AlertCircle className="w-4 h-4 text-red-600" />
                              Cons
                            </h5>
                            <ul className="space-y-1">
                              {option.cons.map((con, i) => (
                                <li key={i} className="text-xs text-gray-700">• {con}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-primary/5 border-2 border-primary/30 rounded-xl p-6 mt-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Service Cost Breakdown by Component</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { item: "Document Translation (per page)", cost: "$3-8" },
                        { item: "Notarization (per document)", cost: "$10-25" },
                        { item: "Apostille certification", cost: "$15-30" },
                        { item: "Sponsor coordination (entire process)", cost: "$200-400" },
                        { item: "Expert consultation (per hour)", cost: "$30-60" },
                        { item: "Application form preparation", cost: "$50-150" }
                      ].map((item, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                          <span className="text-sm text-gray-700">{item.item}</span>
                          <span className="font-semibold text-primary">{item.cost}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.section>

                {/* Section 4: Hidden Costs */}
                <motion.section
                  id="hidden-costs"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Hidden & Additional Costs</h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Beyond obvious fees, several indirect expenses often surprise applicants. Planning for these prevents budget overruns.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        category: "Document Acquisition",
                        items: [
                          { expense: "Health Certificate (International Hospital)", cost: "$30-60" },
                          { expense: "Criminal Record Check (from home country)", cost: "$15-50" },
                          { expense: "Passport Photos (professional quality)", cost: "$5-15" },
                          { expense: "Police Clearance (some countries)", cost: "$20-100" }
                        ]
                      },
                      {
                        category: "Travel & Time",
                        items: [
                          { expense: "Multiple trips to immigration office", cost: "$10-50" },
                          { expense: "Transportation to medical appointments", cost: "$5-20" },
                          { expense: "Time off work (if applicable)", cost: "$100-500" },
                          { expense: "Parking/parking vouchers", cost: "$5-30" }
                        ]
                      },
                      {
                        category: "Unexpected Costs",
                        items: [
                          { expense: "Document re-translation (if first rejected)", cost: "$50-200" },
                          { expense: "Additional medical tests", cost: "$20-100" },
                          { expense: "Sponsorship letter preparation", cost: "$20-50" },
                          { expense: "Visa extension (if delayed)", cost: "$50-100" }
                        ]
                      },
                      {
                        category: "Service Add-ons",
                        items: [
                          { expense: "Rush processing (if available)", cost: "$100-300" },
                          { expense: "Courier delivery of documents", cost: "$10-40" },
                          { expense: "Phone calls/SMS to immigration", cost: "$5-20" },
                          { expense: "Follow-up consultation (post-approval)", cost: "$30-100" }
                        ]
                      }
                    ].map((category, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6"
                      >
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <AlertCircle className="w-5 h-5 text-orange-600" />
                          {category.category}
                        </h4>
                        <div className="space-y-3">
                          {category.items.map((item, i) => (
                            <div key={i} className="flex justify-between items-center text-sm">
                              <span className="text-gray-700">{item.expense}</span>
                              <span className="font-semibold text-orange-600">{item.cost}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mt-6">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Total Hidden Costs: $150-800</h5>
                        <p className="text-gray-700 mb-3">
                          These indirect costs can add 25-50% to your total budget. The exact amount depends on your location, how efficiently you coordinate, and whether any complications arise.
                        </p>
                        <p className="text-gray-700 text-sm">
                          Smart budgeting: Set aside a 20% contingency fund for unexpected expenses. If nothing goes wrong, you've saved money. If something does, you're covered.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Section 5: Cost by Type */}
                <motion.section
                  id="cost-by-type"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Cost Breakdown by TRC Type</h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Costs vary slightly depending on the type of TRC you're applying for and your employment/family status.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        type: "TRC for Foreign Workers (Employment-Based)",
                        governmentFee: "$80-100",
                        serviceCost: "$400-800",
                        totalCost: "$480-900",
                        details: "Employer sponsors the application. Costs are lower because employer handles some coordination. Company may cover fees.",
                        uniqueCosts: ["Employer notarization documents", "Work permit verification"]
                      },
                      {
                        type: "TRC for Family Members (Family Sponsorship)",
                        governmentFee: "$70-100",
                        serviceCost: "$300-600",
                        totalCost: "$370-700",
                        details: "Vietnamese citizen or resident sponsor. Often cheaper because family members are highly motivated to help.",
                        uniqueCosts: ["Family notarization", "Relationship proof documents"]
                      },
                      {
                        type: "TRC for Business Owners/Investors",
                        governmentFee: "$100-150",
                        serviceCost: "$700-1,200",
                        totalCost: "$800-1,350",
                        details: "Company/business sponsorship. Slightly higher costs due to business registration and tax documentation verification.",
                        uniqueCosts: ["Business registration verification", "Tax documentation", "Company notarization"]
                      },
                      {
                        type: "TRC for Students (Education-Based)",
                        governmentFee: "$50-80",
                        serviceCost: "$200-500",
                        totalCost: "$250-580",
                        details: "School sponsor. Lowest cost option because schools have streamlined process. Many schools handle coordination.",
                        uniqueCosts: ["School enrollment verification", "Student ID documentation"]
                      }
                    ].map((trc, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
                      >
                        <h4 className="font-semibold text-gray-900 text-lg mb-4">{trc.type}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="bg-blue-50 rounded-lg p-4">
                            <p className="text-xs text-gray-600 mb-1">Government Fees</p>
                            <p className="text-2xl font-bold text-primary">{trc.governmentFee}</p>
                          </div>
                          <div className="bg-green-50 rounded-lg p-4">
                            <p className="text-xs text-gray-600 mb-1">Service Costs</p>
                            <p className="text-2xl font-bold text-green-600">{trc.serviceCost}</p>
                          </div>
                          <div className="bg-purple-50 rounded-lg p-4">
                            <p className="text-xs text-gray-600 mb-1">Total Cost</p>
                            <p className="text-2xl font-bold text-purple-600">{trc.totalCost}</p>
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm mb-4">{trc.details}</p>
                        <div>
                          <p className="text-xs font-semibold text-gray-600 mb-2">Unique Cost Factors:</p>
                          <ul className="space-y-1">
                            {trc.uniqueCosts.map((cost, i) => (
                              <li key={i} className="text-xs text-gray-700 flex items-center gap-2">
                                <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" />
                                {cost}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* Section 6: Cost Comparisons */}
                <motion.section
                  id="cost-comparisons"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Real-World Cost Scenarios</h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Here's what actual applicants spent across different scenarios. Use these as benchmarks for your budget.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        scenario: "Budget Scenario: DIY Application",
                        person: "Marcus (USA, self-coordinated, worked with sponsor)",
                        breakdown: [
                          { item: "Government fees", cost: "$90" },
                          { item: "Translation (10 pages × $5)", cost: "$50" },
                          { item: "Health certificate", cost: "$40" },
                          { item: "Passport photos", cost: "$10" },
                          { item: "Criminal record check", cost: "$30" },
                          { item: "Travel/miscellaneous", cost: "$60" }
                        ],
                        total: "$280",
                        timeline: "9 weeks",
                        notes: "Lowest cost but required significant time and effort. One translation error required rework."
                      },
                      {
                        scenario: "Moderate Scenario: Partial Legal Service",
                        person: "Sarah (Canada, used legal service for coordination)",
                        breakdown: [
                          { item: "Government fees", cost: "$95" },
                          { item: "Professional translation (12 pages)", cost: "$80" },
                          { item: "Notarization services", cost: "$60" },
                          { item: "Legal coordination fee", cost: "$400" },
                          { item: "Health certificate", cost: "$45" },
                          { item: "Criminal record check", cost: "$35" },
                          { item: "Travel/miscellaneous", cost: "$80" }
                        ],
                        total: "$795",
                        timeline: "6 weeks",
                        notes: "Good balance. Legal service handled all coordination. No errors or rework needed."
                      },
                      {
                        scenario: "Premium Scenario: Full Legal Service",
                        person: "James (UK, full-service firm, wanted peace of mind)",
                        breakdown: [
                          { item: "Government fees", cost: "$100" },
                          { item: "Professional translation (15 pages)", cost: "$100" },
                          { item: "Notarization and apostille", cost: "$85" },
                          { item: "Full legal management", cost: "$900" },
                          { item: "Health certificate", cost: "$50" },
                          { item: "Criminal record check", cost: "$40" },
                          { item: "Visa extension (time buffer)", cost: "$75" },
                          { item: "Travel/miscellaneous", cost: "$100" }
                        ],
                        total: "$1,450",
                        timeline: "4 weeks",
                        notes: "Highest cost but completely hands-off. Firm handled everything. Fastest timeline."
                      }
                    ].map((scenario, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 text-lg mb-1">{scenario.scenario}</h4>
                            <p className="text-sm text-gray-600">{scenario.person}</p>
                          </div>
                          <div className="bg-primary text-white rounded-lg px-4 py-2 text-right">
                            <p className="text-xs text-white/80">Total Cost</p>
                            <p className="text-2xl font-bold">{scenario.total}</p>
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                          <h5 className="font-semibold text-gray-900 text-sm mb-3">Cost Breakdown:</h5>
                          <div className="space-y-2">
                            {scenario.breakdown.map((item, i) => (
                              <div key={i} className="flex justify-between text-sm">
                                <span className="text-gray-700">{item.item}</span>
                                <span className="font-semibold text-gray-900">{item.cost}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-xs text-gray-600 mb-1">Timeline</p>
                            <p className="font-semibold text-gray-900">{scenario.timeline}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 mb-1">Cost per Week</p>
                            <p className="font-semibold text-gray-900">{scenario.total === "$280" ? "$31/week" : scenario.total === "$795" ? "$132/week" : "$363/week"}</p>
                          </div>
                        </div>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
                          <p className="text-sm text-gray-700"><strong>Key Takeaway:</strong> {scenario.notes}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* Section 7: Payment Methods */}
                <motion.section
                  id="payment-methods"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Payment Methods & Process</h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Understanding how to pay for your TRC application is important. Payment methods and timing vary depending on what you're paying for.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {[
                      {
                        title: "Government Fees (Official Channels)",
                        methods: [
                          { method: "Bank Transfer", details: "Direct to immigration office account (ask sponsor for details)" },
                          { method: "Cash Payment", details: "At immigration office during submission (bring exact amount)" },
                          { method: "Through Sponsor", details: "Employer/family can pay on your behalf" }
                        ]
                      },
                      {
                        title: "Professional Service Fees (Private)",
                        methods: [
                          { method: "Bank Transfer", details: "Before or after service completion (confirm with provider)" },
                          { method: "Wire Transfer", details: "International wire if provider has overseas account" },
                          { method: "PayPal/Credit Card", details: "Some firms accept online payments" }
                        ]
                      }
                    ].map((section, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white border-2 border-gray-200 rounded-xl p-6"
                      >
                        <h4 className="font-semibold text-gray-900 text-lg mb-4">{section.title}</h4>
                        <div className="space-y-3">
                          {section.methods.map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <CreditCard className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="font-semibold text-gray-900 text-sm">{item.method}</p>
                                <p className="text-xs text-gray-600 mt-1">{item.details}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Payment Timeline for Typical Application</h4>
                    <div className="space-y-4">
                      {[
                        { stage: "Before Application", payment: "Service deposit (if using legal firm)", amount: "20-30% of fee" },
                        { stage: "At Submission", payment: "Government application fee", amount: "$50-80" },
                        { stage: "Mid-Process", payment: "Service balance (if not paid upfront)", amount: "Remaining balance" },
                        { stage: "At Card Collection", payment: "Government card production fee", amount: "$30-50" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-4 pb-4 border-b border-gray-200 last:border-0">
                          <div className="w-32 flex-shrink-0">
                            <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-2 rounded-lg inline-block">{item.stage}</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-900 font-medium text-sm">{item.payment}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-gray-900">{item.amount}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mt-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Payment Safety Tips</h5>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li>• <strong>Never pay full amount upfront</strong> to individuals. Use escrow or installments.</li>
                          <li>• <strong>Get written receipt</strong> for all payments with description of service</li>
                          <li>• <strong>Request invoice</strong> from professional services before paying</li>
                          <li>• <strong>Keep bank records</strong> as proof of payment for government fees</li>
                          <li>• <strong>Verify account details</strong> before wire transfers to avoid scams</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Section 8: Money-Saving Tips */}
                <motion.section
                  id="money-saving-tips"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Ways to Save Money on Your TRC</h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    You can't reduce government fees, but you can significantly reduce overall costs through smart planning and choices.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {[
                      {
                        icon: CheckCircle2,
                        title: "Pre-Preparation Strategies",
                        tips: [
                          "Get documents before arriving in Vietnam (reduce onsite costs)",
                          "Request criminal record check 2 months early (avoid rush fees)",
                          "Have employer/sponsor ready (avoid finding sponsor delays)",
                          "Get passport photos from home (they're cheaper there)",
                          "Learn Vietnamese translation requirements (avoid unnecessary re-work)"
                        ]
                      },
                      {
                        icon: Zap,
                        title: "During Application",
                        tips: [
                          "Double-check all documents (avoid expensive re-translation)",
                          "Use accredited translators (lower cost than law firms)",
                          "Combine trips to immigration office (save transport)",
                          "Share updates with sponsor (faster processing, no delays)",
                          "Apply in Ho Chi Minh City or Hanoi (more competition = lower service fees)"
                        ]
                      },
                      {
                        icon: TrendingDown,
                        title: "Service Cost Reduction",
                        tips: [
                          "Use partial legal service instead of full (save 50%)",
                          "Negotiate with multiple firms (get best rate)",
                          "Ask if employer covers costs (many do)",
                          "Combine with others (some firms offer group discounts)",
                          "Use legal clinic instead of private firm (much cheaper)"
                        ]
                      },
                      {
                        icon: Building2,
                        title: "Smart Decision Making",
                        tips: [
                          "Budget 8 weeks to avoid visa extension fees",
                          "Don't pay for rush service (rarely faster)",
                          "Use established sponsor (reduces coordination fees)",
                          "Avoid multiple applications (rejections = double costs)",
                          "Choose location wisely (city centers cheaper than provinces)"
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
                        <h4 className="font-semibold text-gray-900 mb-4">{section.title}</h4>
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

                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Zap className="w-6 h-6 text-green-600" />
                      Potential Savings by Strategy
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { strategy: "Pre-arrive preparation", savings: "Save $200-400" },
                        { strategy: "Use translator vs. law firm", savings: "Save $300-500" },
                        { strategy: "Partial service vs. full", savings: "Save $400-600" },
                        { strategy: "DIY all document prep", savings: "Save $200-300" },
                        { strategy: "Employer covers fees", savings: "Save $400-800" },
                        { strategy: "Legal clinic vs. private firm", savings: "Save $300-700" }
                      ].map((item, index) => (
                        <div key={index} className="flex justify-between items-center text-sm">
                          <span className="text-gray-700">{item.strategy}</span>
                          <span className="font-bold text-green-600">{item.savings}</span>
                        </div>
                      ))}
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
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Frequently Asked Questions About TRC Costs</h2>

                  <div className="space-y-4">
                    {[
                      {
                        question: "Can I get a TRC for free?",
                        answer: "No. Government fees are mandatory ($80-130). However, you can minimize costs by coordinating the application yourself, hiring only a translator, or having your employer/family handle most coordination at no cost to you."
                      },
                      {
                        question: "Do prices vary by nationality?",
                        answer: "Government fees are the same for all nationalities. However, service costs may vary if your country's criminal record check is expensive or your documents require specialized translation."
                      },
                      {
                        question: "Is it cheaper to apply in a small city vs. Ho Chi Minh City?",
                        answer: "Government fees are slightly lower in smaller cities ($5-10 less). However, processing is faster and more reliable in major cities. Professional services are also cheaper in cities due to competition. For most people, the HCMC/Hanoi advantage outweighs the fee difference."
                      },
                      {
                        question: "Will my employer pay for my TRC?",
                        answer: "Many employers do, especially for foreign workers. It's common practice. Ask during your hiring negotiation. Employer-sponsored applications are often faster and cheaper because the company has existing relationships with immigration."
                      },
                      {
                        question: "What if my application is rejected? Do I lose my money?",
                        answer: "Government fees are non-refundable (it's policy). Service fees may be refundable depending on the reason for rejection and your contract. This is why choosing a reputable firm with clear terms matters. Many firms will re-do work for free if rejection is due to their error."
                      },
                      {
                        question: "Can I pay the government fees in installments?",
                        answer: "Government fees must be paid upfront before processing begins. You can't split the payment. Professional service fees may have installment options—discuss this when getting quotes."
                      },
                      {
                        question: "How much should I budget for contingencies?",
                        answer: "Budget an extra 20% above your estimated total. This covers unexpected costs like visa extensions, re-translation, or additional medical tests. Most people either use this buffer or save money."
                      },
                      {
                        question: "Is paying more guarantee faster processing?",
                        answer: "Not really. Government processing time is fixed (10-15 business days). Paying more for 'rush service' is usually a scam. What legitimate services do is reduce your preparation time by 1-2 weeks through superior coordination."
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
                Know Exactly What Your TRC Will Cost
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Get a free, detailed cost estimate tailored to your situation. No hidden fees, no surprises.
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
                  Get Free Cost Estimate
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
