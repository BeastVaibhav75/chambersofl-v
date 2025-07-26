'use client'


import { useEffect, useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    title: 'Understanding Corporate Law in India: A Comprehensive Guide',
    excerpt: 'An overview of key corporate law principles and their application in the Indian business landscape.',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Corporate Law'
  },
  {
    title: 'Trademark Registration Process: Step-by-Step Guide',
    excerpt: 'Everything you need to know about registering your trademark in India and protecting your brand.',
    date: '2024-01-10',
    readTime: '7 min read',
    category: 'Intellectual Property'
  },
  {
    title: 'Employment Law Updates: Recent Changes and Implications',
    excerpt: 'Stay informed about the latest developments in employment law and their impact on businesses.',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Employment Law'
  },
  {
    title: 'Startup Legal Essentials: What Every Founder Should Know',
    excerpt: 'Critical legal considerations for startup founders to ensure proper business structure and compliance.',
    date: '2023-12-28',
    readTime: '8 min read',
    category: 'Business Law'
  },
  {
    title: 'Consumer Rights in India: Your Legal Protections',
    excerpt: 'Understanding your rights as a consumer and how to seek legal remedies when needed.',
    date: '2023-12-20',
    readTime: '4 min read',
    category: 'Consumer Law'
  },
  {
    title: 'Data Protection and Privacy Laws: Compliance Guide',
    excerpt: 'Navigating the complex landscape of data protection laws and ensuring compliance.',
    date: '2023-12-15',
    readTime: '9 min read',
    category: 'IT Law'
  }
]

export default function BlogPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true })
  const [blogRef, blogInView] = useInView({ triggerOnce: true })

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Legal Blog & News
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Insights and Updates from Our Legal Experts
            </p>
            <p className="text-lg text-gray-100 max-w-2xl mx-auto">
              Stay informed about legal developments, regulatory changes, and practical 
              insights for businesses and individuals.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section ref={blogRef} className="section-padding">
        <div className="container-custom">
          <div
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert insights and analysis on legal matters affecting businesses and individuals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={post.title}
                className="card group cursor-pointer"
              >
                <div className="mb-4">
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                  <span>Read More</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          <div
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4">
              More articles coming soon...
            </p>
            <p className="text-sm text-gray-500">
              Subscribe to our newsletter to stay updated with the latest legal insights and developments.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Legal Advice?
            </h2>
            <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
              While our blog provides general information, for specific legal advice 
              tailored to your situation, please contact our legal experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary bg-white text-primary-600 hover:bg-gray-50"
              >
                Contact Us
              </a>
              <a
                href="/services"
                className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 