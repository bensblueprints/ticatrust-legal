'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight, Search } from 'lucide-react';
import { useState } from 'react';

// Blog posts with proper images from /images/blog/
const blogPosts = [
  {
    id: 1,
    title: 'Vietnam 5-year TRC for foreign investors: Complete 2026 guide',
    slug: '5-year-trc-vietnam',
    excerpt: 'Everything you need to know about obtaining a 5-year Temporary Residence Card in Vietnam as a foreign investor, including requirements, benefits, and application process.',
    date: '2026-02-01',
    category: 'Visa & Immigration',
    image: '/images/blog/5-year-trc-vietnam.jpg',
  },
  {
    id: 2,
    title: 'How foreigners can start a business in Vietnam: 2026 Legal guide',
    slug: 'foreigners-start-business-vietnam',
    excerpt: 'Step-by-step guide for foreign entrepreneurs looking to establish a business in Vietnam, covering legal requirements, licenses, and investment opportunities.',
    date: '2026-01-28',
    category: 'Business Setup',
    image: '/images/blog/foreigners-start-business.jpeg',
  },
  {
    id: 3,
    title: 'Vietnam work permit for foreigners: Requirements & application 2026',
    slug: 'vietnam-work-permit-foreigners',
    excerpt: 'Comprehensive guide to obtaining a work permit in Vietnam, including eligibility criteria, required documents, and processing timelines.',
    date: '2026-01-25',
    category: 'Visa & Immigration',
    image: '/images/blog/vietnam-work-permit.jpeg',
  },
  {
    id: 4,
    title: 'Foreign enterprise tax incentives in Vietnam: 2026 Legal guide',
    slug: 'foreign-enterprise-tax-incentives-vietnam-2026',
    excerpt: 'Understanding tax incentives available for foreign enterprises operating in Vietnam, including reduced rates, exemptions, and preferential zones.',
    date: '2026-01-22',
    category: 'Tax & Compliance',
    image: '/images/blog/tax-incentives.jpg',
  },
  {
    id: 5,
    title: 'Business opportunities in Vietnam for Indian investors: 2026 Guide',
    slug: 'business-opportunities-vietnam-indian-investors-2026',
    excerpt: 'Exploring the growing business opportunities for Indian investors in Vietnam\'s dynamic market, including key sectors and investment advantages.',
    date: '2026-01-19',
    category: 'Investment',
    image: '/images/blog/indian-investors.jpg',
  },
  {
    id: 6,
    title: 'Opening a factory in Vietnam: Legal steps & Manufacturing setup 2026',
    slug: 'opening-factory-vietnam-legal-steps-2026',
    excerpt: 'Complete guide to establishing manufacturing operations in Vietnam, including legal requirements, site selection, and licensing procedures.',
    date: '2026-01-18',
    category: 'Manufacturing',
    image: '/images/blog/factory-vietnam.jpg',
  },
  {
    id: 7,
    title: 'How to get TRC in Vietnam: 2026 Requirements & Application guide',
    slug: 'get-trc-vietnam-requirements-2026',
    excerpt: 'Step-by-step guide to obtaining a Temporary Residence Card (TRC) in Vietnam for foreign investors and workers.',
    date: '2026-01-15',
    category: 'Visa & Immigration',
    image: '/images/blog/trc-requirements.jpg',
  },
  {
    id: 8,
    title: 'How to start a travel agency in Vietnam in 2026: Legal steps',
    slug: 'start-travel-agency-vietnam-2026',
    excerpt: 'Legal requirements and procedures for establishing a travel agency business in Vietnam, including licenses and operational guidelines.',
    date: '2026-01-10',
    category: 'Business Setup',
    image: '/images/blog/travel-agency.jpg',
  },
  {
    id: 9,
    title: 'Opening an English language center in Vietnam for foreign investors',
    slug: 'open-english-language-center-vietnam',
    excerpt: 'Complete guide to establishing an English language center in Vietnam, including licensing, educational requirements, and market opportunities.',
    date: '2026-01-05',
    category: 'Education',
    image: '/images/blog/language-center.jpg',
  },
];

const categories = ['All', 'Investment', 'Tax & Compliance', 'Visa & Immigration', 'Business Setup', 'Manufacturing', 'Education'];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean White Background */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm tracking-wide uppercase mb-8">
              News & Insights
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-gray-900 leading-tight">
              Latest News &
              <span className="text-primary"> Legal Updates</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Stay informed about Vietnam business law, investment opportunities, and regulatory changes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-24 z-40 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full lg:w-80 pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:border-primary focus:outline-none focus:bg-white transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mb-12"
              >
                <p className="text-gray-600">
                  Showing <span className="font-semibold text-gray-900">{filteredPosts.length}</span> article{filteredPosts.length !== 1 ? 's' : ''}
                  {selectedCategory !== 'All' && (
                    <span> in <span className="font-semibold text-primary">{selectedCategory}</span></span>
                  )}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={`/news/${post.slug}`}>
                      <div className="group h-full bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-primary hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                        {/* Image */}
                        <div className="relative h-56 bg-gray-100 overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4 px-3 py-1.5 bg-primary text-white text-xs font-semibold rounded-full shadow-lg">
                            {post.category}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                            <Calendar className="w-4 h-4" />
                            <time dateTime={post.date}>
                              {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              })}
                            </time>
                          </div>

                          <h3 className="text-xl font-serif font-semibold mb-3 text-gray-900 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                            {post.title}
                          </h3>

                          <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center gap-2 text-primary font-medium text-sm">
                            Read Article
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">
                No articles found
              </h3>
              <p className="text-gray-600 mb-8">
                Try adjusting your search or filter to find what you're looking for
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-12 md:p-16 text-center text-white shadow-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  Stay Updated on Vietnam Business Law
                </h2>
                <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
                  Get expert insights, legal updates, and investment opportunities delivered to your inbox.
                  Join 3000+ foreign investors who trust TICA TrustLegal.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 whitespace-nowrap shadow-lg">
                    Subscribe Now
                  </button>
                </div>
                <p className="text-sm text-white/70 mt-4">
                  No spam. Unsubscribe anytime.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
