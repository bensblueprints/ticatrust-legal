'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, Calendar, Home, Phone, Mail, ArrowRight, CheckCircle2, AlertCircle, Info, Briefcase, Heart, GraduationCap, TrendingUp, Users } from 'lucide-react';

export default function TypesOfTRCVietnam() {
  const publishDate = "February 7, 2026";
  const readingTime = "11 min read";

  const tableOfContents = [
    { id: "overview", title: "Overview of TRC Types" },
    { id: "work-based", title: "Type 1: Work-Based TRC" },
    { id: "family-based", title: "Type 2: Family-Based TRC" },
    { id: "investment-based", title: "Type 3: Investment-Based TRC" },
    { id: "study-based", title: "Type 4: Study-Based TRC" },
    { id: "special-cases", title: "Type 5: Special Cases TRC" },
    { id: "comparison", title: "Comparison Table" },
    { id: "how-to-choose", title: "How to Choose the Right TRC" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  const trcTypes = [
    {
      icon: Briefcase,
      color: "blue",
      title: "Work-Based TRC",
      subtitle: "For Foreign Employees",
      duration: "Up to 2 years",
      difficulty: "Moderate",
      description: "Most common type for foreign professionals working in Vietnam"
    },
    {
      icon: Heart,
      color: "pink",
      title: "Family-Based TRC",
      subtitle: "For Family Members",
      duration: "Up to 5 years",
      difficulty: "Easy",
      description: "For spouses and children of Vietnamese citizens or permanent residents"
    },
    {
      icon: TrendingUp,
      color: "green",
      title: "Investment-Based TRC",
      subtitle: "For Investors",
      duration: "Up to 5 years",
      difficulty: "Moderate",
      description: "For foreign investors with registered business investments in Vietnam"
    },
    {
      icon: GraduationCap,
      color: "purple",
      title: "Study-Based TRC",
      subtitle: "For Students",
      duration: "Up to study period",
      difficulty: "Easy",
      description: "For international students enrolled in Vietnamese educational institutions"
    },
    {
      icon: Users,
      color: "orange",
      title: "Special Cases TRC",
      subtitle: "For Special Situations",
      duration: "Varies",
      difficulty: "Complex",
      description: "For humanitarian, expert, and other special category applicants"
    }
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
            <span className="text-gray-900 font-medium">5 Types of TRC in Vietnam</span>
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
                Complete Breakdown
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900 leading-tight">
                5 Types of TRC in Vietnam: Which One Do You Need?
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
                Not all TRCs are created equal. Each type has distinct requirements, benefits, and validity periods.
                This comprehensive guide breaks down all five types of TRC in Vietnam to help you determine which one
                applies to your situation.
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
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Overview of TRC Types</h2>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <Info className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Understanding TRC Categories</h4>
                        <p className="text-gray-700 mb-0">
                          Vietnam's TRC system categorizes foreign residents based on their primary reason for staying in
                          the country. Each category has unique eligibility criteria, required documents, validity periods,
                          and renewal conditions. Choosing the correct category is crucial for a successful application.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {trcTypes.map((type, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-xl transition-all duration-300"
                      >
                        <div className={`w-14 h-14 rounded-lg bg-${type.color}-100 flex items-center justify-center mb-4`}>
                          <type.icon className={`w-7 h-7 text-${type.color}-600`} />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-1">{type.title}</h4>
                        <p className={`text-sm font-medium text-${type.color}-600 mb-3`}>{type.subtitle}</p>
                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">{type.description}</p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">Duration: <strong>{type.duration}</strong></span>
                          <span className={`px-2 py-1 rounded-full ${
                            type.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                            type.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-orange-100 text-orange-700'
                          }`}>
                            {type.difficulty}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* Type 1: Work-Based TRC */}
                <motion.section
                  id="work-based"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-8 mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                        <Briefcase className="w-8 h-8" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-serif font-bold">Type 1: Work-Based TRC</h2>
                        <p className="text-blue-100">For Foreign Employees Working in Vietnam</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">Who Qualifies?</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Foreign nationals who are legally employed by a Vietnamese company or organization and hold a valid work permit.
                    This is the most common TRC type for expatriates working in Vietnam.
                  </p>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Required Documents:</h4>
                    <div className="space-y-3">
                      {[
                        { doc: "Valid passport", detail: "Minimum 6 months validity" },
                        { doc: "Work permit", detail: "Issued by DOLISA, valid and current" },
                        { doc: "Work visa (LD type)", detail: "Corresponding to work permit duration" },
                        { doc: "Employment contract", detail: "Signed with Vietnamese employer" },
                        { doc: "Company sponsorship letter", detail: "From your employer accepting responsibility" },
                        { doc: "Health certificate", detail: "From approved medical facility (within 6 months)" },
                        { doc: "Criminal record check", detail: "From home country (within 6 months)" },
                        { doc: "Temporary residence registration", detail: "Registered with local police" },
                        { doc: "Passport photos", detail: "4x6cm, white background (4 copies)" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-gray-900">{item.doc}</span>
                            <span className="text-gray-600 text-sm block">{item.detail}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Validity Period</h5>
                      <p className="text-blue-600 text-2xl font-bold mb-1">Up to 2 years</p>
                      <p className="text-gray-600 text-sm">Matches work permit duration</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Processing Time</h5>
                      <p className="text-blue-600 text-2xl font-bold mb-1">10-15 days</p>
                      <p className="text-gray-600 text-sm">After submitting complete docs</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Renewal</h5>
                      <p className="text-blue-600 text-2xl font-bold mb-1">Yes</p>
                      <p className="text-gray-600 text-sm">If employment continues</p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Important Notes</h4>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• TRC validity cannot exceed work permit validity</li>
                          <li>• Changing employers requires new work permit and TRC update</li>
                          <li>• Both work permit and TRC must be renewed together</li>
                          <li>• Spouse and children can apply for dependent TRC</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Type 2: Family-Based TRC */}
                <motion.section
                  id="family-based"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl p-8 mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                        <Heart className="w-8 h-8" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-serif font-bold">Type 2: Family-Based TRC</h2>
                        <p className="text-pink-100">For Spouses and Children of Vietnamese Citizens</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">Who Qualifies?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">Eligible Applicants:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                          <span>Foreign spouse of Vietnamese citizen</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                          <span>Foreign child of Vietnamese citizen</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                          <span>Foreign parent of Vietnamese citizen (under 18)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                          <span>Spouse/child of foreign TRC holder</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white border-2 border-pink-200 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Advantages:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-pink-600">✓</span>
                          <span>Longest validity period (up to 5 years)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-pink-600">✓</span>
                          <span>Simpler requirements than work-based</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-pink-600">✓</span>
                          <span>Easier renewal process</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-pink-600">✓</span>
                          <span>Pathway to permanent residence</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Required Documents (Spouse):</h4>
                    <div className="space-y-3">
                      {[
                        { doc: "Valid passport", detail: "Minimum 6 months validity" },
                        { doc: "Marriage certificate", detail: "Legalized and translated to Vietnamese" },
                        { doc: "Vietnamese spouse's ID card", detail: "Copy of citizen ID (CCCD)" },
                        { doc: "Family book (Hộ khẩu)", detail: "Showing marriage registration in Vietnam" },
                        { doc: "Marriage registration certificate", detail: "From Vietnamese authorities" },
                        { doc: "Sponsorship letter", detail: "From Vietnamese spouse" },
                        { doc: "Proof of relationship", detail: "Photos, joint documents, etc." },
                        { doc: "Health certificate", detail: "Recent medical examination" },
                        { doc: "Passport photos", detail: "4x6cm, white background (4 copies)" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0">
                          <CheckCircle2 className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-gray-900">{item.doc}</span>
                            <span className="text-gray-600 text-sm block">{item.detail}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-pink-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Validity Period</h5>
                      <p className="text-pink-600 text-2xl font-bold mb-1">Up to 5 years</p>
                      <p className="text-gray-600 text-sm">Renewable indefinitely</p>
                    </div>
                    <div className="bg-pink-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Processing Time</h5>
                      <p className="text-pink-600 text-2xl font-bold mb-1">10-15 days</p>
                      <p className="text-gray-600 text-sm">Standard processing</p>
                    </div>
                    <div className="bg-pink-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Work Rights</h5>
                      <p className="text-pink-600 text-2xl font-bold mb-1">Limited</p>
                      <p className="text-gray-600 text-sm">Need work permit to work</p>
                    </div>
                  </div>
                </motion.section>

                {/* Type 3: Investment-Based TRC */}
                <motion.section
                  id="investment-based"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-8 mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                        <TrendingUp className="w-8 h-8" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-serif font-bold">Type 3: Investment-Based TRC</h2>
                        <p className="text-green-100">For Foreign Investors and Business Owners</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">Who Qualifies?</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Foreign nationals who have made a registered investment in Vietnam, including business owners of
                    foreign-invested enterprises (FIEs) and investors with investment certificates.
                  </p>

                  <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded-r-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Investment Categories:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm font-semibold text-green-700 mb-2">Direct Investment:</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• 100% foreign-owned company</li>
                          <li>• Joint venture partner</li>
                          <li>• Shareholder in Vietnamese company</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-green-700 mb-2">Investment Certificate:</h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Registered investment project</li>
                          <li>• Minimum capital requirements met</li>
                          <li>• Active business operations</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Required Documents:</h4>
                    <div className="space-y-3">
                      {[
                        { doc: "Valid passport", detail: "Minimum 6 months validity" },
                        { doc: "Investment certificate", detail: "IRC from Department of Planning and Investment" },
                        { doc: "Business registration certificate", detail: "Enterprise registration certificate (ERC)" },
                        { doc: "Capital contribution proof", detail: "Bank statements showing invested capital" },
                        { doc: "Company documents", detail: "Charter, shareholders' list, etc." },
                        { doc: "Tax registration", detail: "Tax code and recent tax filings" },
                        { doc: "Investment visa (DT type)", detail: "Valid investment visa" },
                        { doc: "Health certificate", detail: "Recent medical examination" },
                        { doc: "Criminal record check", detail: "From home country" },
                        { doc: "Passport photos", detail: "4x6cm, white background (4 copies)" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-gray-900">{item.doc}</span>
                            <span className="text-gray-600 text-sm block">{item.detail}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Validity Period</h5>
                      <p className="text-green-600 text-2xl font-bold mb-1">Up to 5 years</p>
                      <p className="text-gray-600 text-sm">Based on investment duration</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Processing Time</h5>
                      <p className="text-green-600 text-2xl font-bold mb-1">15-20 days</p>
                      <p className="text-gray-600 text-sm">Including verification</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Work Rights</h5>
                      <p className="text-green-600 text-2xl font-bold mb-1">Own company</p>
                      <p className="text-gray-600 text-sm">No work permit needed</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <Info className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Advantage</h4>
                        <p className="text-gray-700 mb-0">
                          Investment-based TRC holders do NOT need a work permit to work for their own company. However,
                          if you want to work for another Vietnamese company, you'll need a separate work permit.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Type 4: Study-Based TRC */}
                <motion.section
                  id="study-based"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-8 mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                        <GraduationCap className="w-8 h-8" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-serif font-bold">Type 4: Study-Based TRC</h2>
                        <p className="text-purple-100">For International Students</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">Who Qualifies?</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    International students enrolled in accredited Vietnamese educational institutions for programs longer
                    than 6 months, including universities, colleges, and vocational schools.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">Eligible Programs:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Bachelor's degree programs (4 years)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Master's degree programs (2 years)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>PhD programs (3-4 years)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>Vietnamese language courses (1+ year)</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600">✓</span>
                          <span>Simple application process</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600">✓</span>
                          <span>University handles sponsorship</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600">✓</span>
                          <span>Lower fees than other types</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600">✓</span>
                          <span>Valid for entire study period</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Required Documents:</h4>
                    <div className="space-y-3">
                      {[
                        { doc: "Valid passport", detail: "Covering entire study period" },
                        { doc: "Student visa", detail: "DH visa type from Vietnamese embassy" },
                        { doc: "Acceptance letter", detail: "Official admission from university" },
                        { doc: "Enrollment certificate", detail: "Confirmation of current enrollment" },
                        { doc: "Tuition payment proof", detail: "Receipt for current semester/year" },
                        { doc: "University sponsorship letter", detail: "School accepts responsibility" },
                        { doc: "Student ID card", detail: "Issued by the university" },
                        { doc: "Health certificate", detail: "Recent medical check-up" },
                        { doc: "Passport photos", detail: "4x6cm, white background (4 copies)" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-gray-900">{item.doc}</span>
                            <span className="text-gray-600 text-sm block">{item.detail}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Validity Period</h5>
                      <p className="text-purple-600 text-2xl font-bold mb-1">Study duration</p>
                      <p className="text-gray-600 text-sm">Up to program completion</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Processing Time</h5>
                      <p className="text-purple-600 text-2xl font-bold mb-1">7-10 days</p>
                      <p className="text-gray-600 text-sm">Fastest processing</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Work Rights</h5>
                      <p className="text-purple-600 text-2xl font-bold mb-1">Restricted</p>
                      <p className="text-gray-600 text-sm">Need special permission</p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Working While Studying</h4>
                        <p className="text-gray-700">
                          Student TRC holders generally cannot work in Vietnam. Part-time work requires special authorization
                          from both the university and immigration authorities. Many universities prohibit student employment
                          entirely. Check your institution's policy before seeking work.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Type 5: Special Cases TRC */}
                <motion.section
                  id="special-cases"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-8 mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                        <Users className="w-8 h-8" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-serif font-bold">Type 5: Special Cases TRC</h2>
                        <p className="text-orange-100">For Unique Situations and Special Categories</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">Who Qualifies?</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    This category covers various special circumstances that don't fit into the standard four types. Each
                    subcategory has unique requirements determined by Vietnamese immigration authorities.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {[
                      {
                        title: "Humanitarian Cases",
                        description: "Refugees, asylum seekers, stateless persons, or those granted special protection by Vietnam",
                        icon: "🛡️"
                      },
                      {
                        title: "Government-Invited Experts",
                        description: "Foreign experts invited by Vietnamese government for special projects or advisory roles",
                        icon: "🎓"
                      },
                      {
                        title: "International Organization Staff",
                        description: "Employees of international organizations with offices in Vietnam (UN, World Bank, etc.)",
                        icon: "🌐"
                      },
                      {
                        title: "Former Vietnamese Citizens",
                        description: "Individuals who previously held Vietnamese citizenship and seek to reside in Vietnam",
                        icon: "🇻🇳"
                      },
                      {
                        title: "Special Contribution Cases",
                        description: "Foreigners recognized for special contributions to Vietnam's development",
                        icon: "🏆"
                      },
                      {
                        title: "Religious Workers",
                        description: "Foreign religious workers approved by relevant Vietnamese religious authorities",
                        icon: "⛪"
                      }
                    ].map((category, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="text-3xl mb-3">{category.icon}</div>
                        <h4 className="font-semibold text-gray-900 mb-2">{category.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6 rounded-r-lg">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Case-by-Case Evaluation</h4>
                        <p className="text-gray-700 mb-3">
                          Special case TRCs are evaluated individually by immigration authorities. Requirements, duration,
                          and conditions vary significantly based on the specific situation.
                        </p>
                        <p className="text-gray-700 text-sm">
                          <strong>Recommendation:</strong> Professional legal assistance is strongly recommended for special
                          case applications due to their complexity and the need for proper documentation and government liaison.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Common Requirements (Varies by Case):</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                          <span>Valid passport</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                          <span>Official sponsorship/invitation letter</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                          <span>Government approval documents</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                          <span>Health certificate</span>
                        </li>
                      </ul>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                          <span>Background verification documents</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                          <span>Proof of special status/role</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                          <span>Relevant ministry approvals</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                          <span>Passport photos</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.section>

                {/* Comparison Table */}
                <motion.section
                  id="comparison"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">Comparison Table: All TRC Types</h2>

                  <div className="overflow-x-auto bg-white border-2 border-gray-200 rounded-xl">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="text-left p-4 font-semibold text-gray-900 border-b-2 border-gray-200 min-w-[150px]">Feature</th>
                          <th className="text-left p-4 font-semibold text-blue-600 border-b-2 border-gray-200">Work-Based</th>
                          <th className="text-left p-4 font-semibold text-pink-600 border-b-2 border-gray-200">Family-Based</th>
                          <th className="text-left p-4 font-semibold text-green-600 border-b-2 border-gray-200">Investment</th>
                          <th className="text-left p-4 font-semibold text-purple-600 border-b-2 border-gray-200">Study-Based</th>
                          <th className="text-left p-4 font-semibold text-orange-600 border-b-2 border-gray-200">Special Cases</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            feature: "Max Duration",
                            work: "2 years",
                            family: "5 years",
                            investment: "5 years",
                            study: "Study period",
                            special: "Varies"
                          },
                          {
                            feature: "Processing Time",
                            work: "10-15 days",
                            family: "10-15 days",
                            investment: "15-20 days",
                            study: "7-10 days",
                            special: "20-30 days"
                          },
                          {
                            feature: "Difficulty",
                            work: "Moderate",
                            family: "Easy",
                            investment: "Moderate",
                            study: "Easy",
                            special: "Complex"
                          },
                          {
                            feature: "Cost Range",
                            work: "400K-600K",
                            family: "600K-1M",
                            investment: "600K-1M",
                            study: "200K-400K",
                            special: "Varies"
                          },
                          {
                            feature: "Renewal",
                            work: "Yes (if employed)",
                            family: "Yes (easy)",
                            investment: "Yes (if active)",
                            study: "Yes (enrolled)",
                            special: "Case-by-case"
                          },
                          {
                            feature: "Work Rights",
                            work: "With permit",
                            family: "With permit",
                            investment: "Own company",
                            study: "Restricted",
                            special: "Varies"
                          },
                          {
                            feature: "Dependents",
                            work: "Yes (spouse/kids)",
                            family: "Yes",
                            investment: "Yes",
                            study: "Limited",
                            special: "Varies"
                          },
                          {
                            feature: "Path to PR",
                            work: "After 3 years",
                            family: "Yes (easiest)",
                            investment: "Yes (fast)",
                            study: "After graduation",
                            special: "Varies"
                          }
                        ].map((row, index) => (
                          <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="p-4 font-medium text-gray-900">{row.feature}</td>
                            <td className="p-4 text-gray-700">{row.work}</td>
                            <td className="p-4 text-gray-700">{row.family}</td>
                            <td className="p-4 text-gray-700">{row.investment}</td>
                            <td className="p-4 text-gray-700">{row.study}</td>
                            <td className="p-4 text-gray-700">{row.special}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.section>

                {/* How to Choose */}
                <motion.section
                  id="how-to-choose"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">How to Choose the Right TRC</h2>

                  <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8 mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Decision Tree</h3>

                    <div className="space-y-4">
                      {[
                        {
                          question: "Are you employed by a Vietnamese company?",
                          yes: "→ Apply for WORK-BASED TRC",
                          no: "Continue to next question"
                        },
                        {
                          question: "Are you married to a Vietnamese citizen or child of one?",
                          yes: "→ Apply for FAMILY-BASED TRC (longest duration, easiest renewal)",
                          no: "Continue to next question"
                        },
                        {
                          question: "Do you own or have invested in a Vietnamese business?",
                          yes: "→ Apply for INVESTMENT-BASED TRC (no work permit needed for own company)",
                          no: "Continue to next question"
                        },
                        {
                          question: "Are you enrolled as a student in Vietnam?",
                          yes: "→ Apply for STUDY-BASED TRC (simplest process)",
                          no: "Continue to next question"
                        },
                        {
                          question: "Do you have a special status (expert, religious worker, etc.)?",
                          yes: "→ Apply for SPECIAL CASES TRC (consult legal expert)",
                          no: "You may not qualify for TRC - consult with immigration lawyer"
                        }
                      ].map((step, index) => (
                        <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6">
                          <p className="font-semibold text-gray-900 mb-3">
                            <span className="text-primary mr-2">{index + 1}.</span>
                            {step.question}
                          </p>
                          <div className="ml-6 space-y-1 text-sm">
                            <div className="flex items-start gap-2">
                              <span className="text-green-600 font-semibold">YES:</span>
                              <span className="text-gray-700">{step.yes}</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-gray-500 font-semibold">NO:</span>
                              <span className="text-gray-600">{step.no}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">Best for Long-Term Stay:</h4>
                      <ol className="space-y-2 text-gray-700 text-sm">
                        <li><strong>1st:</strong> Family-Based (5 years, easy renewal)</li>
                        <li><strong>2nd:</strong> Investment-Based (5 years, business flexibility)</li>
                        <li><strong>3rd:</strong> Work-Based (2 years, but stable)</li>
                      </ol>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">Easiest to Obtain:</h4>
                      <ol className="space-y-2 text-gray-700 text-sm">
                        <li><strong>1st:</strong> Study-Based (7-10 days, simple docs)</li>
                        <li><strong>2nd:</strong> Family-Based (clear requirements)</li>
                        <li><strong>3rd:</strong> Work-Based (employer handles most)</li>
                      </ol>
                    </div>
                  </div>
                </motion.section>

                {/* FAQ */}
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
                        question: "Can I have multiple types of TRC at the same time?",
                        answer: "No, you can only hold one TRC at a time. However, you can switch types if your circumstances change (e.g., from work-based to family-based if you marry a Vietnamese citizen). You'll need to cancel your current TRC and apply for the new type."
                      },
                      {
                        question: "Which TRC type gives me the best chance for permanent residence?",
                        answer: "Family-based TRC offers the clearest and fastest path to permanent residence, especially if you're married to a Vietnamese citizen. Investment-based is second best. Work-based requires 3+ years of continuous residence before you can apply for permanent residence."
                      },
                      {
                        question: "Can I switch from a work-based TRC to an investment-based TRC?",
                        answer: "Yes, if you start your own business with proper investment registration. You'll need to obtain an investment certificate, register your company, and then apply for investment-based TRC. You can maintain your work-based TRC until the investment-based one is approved."
                      },
                      {
                        question: "My spouse has a work-based TRC. What type do I need?",
                        answer: "You would apply for a family-based TRC as a dependent of a TRC holder. Your TRC duration will match your spouse's TRC validity. If your spouse's TRC expires or is cancelled, yours will also become invalid."
                      },
                      {
                        question: "Can international students work part-time in Vietnam?",
                        answer: "Generally no. Study-based TRC holders are prohibited from working. Some universities may allow limited on-campus work with special permission, but this is rare and strictly regulated. Working without authorization can result in TRC cancellation and deportation."
                      },
                      {
                        question: "What happens if I change TRC types - do I start from scratch?",
                        answer: "Yes and no. You need to apply for a new TRC under the new category with all required documents for that type. However, your previous TRC history (clean record, no violations) helps your application. Some documents (health certificate, criminal record) can be reused if still valid."
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
                          Complete guide to understanding TRC basics, application process, and requirements.
                        </p>
                        <div className="flex items-center gap-2 text-primary font-medium text-sm">
                          Read Article
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                    <Link href="/resources/trc-vs-work-permit-vs-visa">
                      <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-xl p-6 hover:border-primary hover:shadow-xl transition-all duration-300 group">
                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                          TRC vs Work Permit vs Visa: Understanding the Differences
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Clear comparison of these three essential documents for foreign workers.
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
                Not Sure Which TRC Type You Need?
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Our legal experts will assess your situation and recommend the best TRC type for your circumstances.
                We'll handle the entire application process from start to finish.
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
