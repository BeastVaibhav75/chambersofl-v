'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO, TechStart India',
    content: 'Chambers of L&V provided exceptional legal guidance during our startup phase. Their expertise in corporate law helped us navigate complex regulations and establish a solid legal foundation for our business.',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    role: 'Business Owner',
    content: 'Professional, knowledgeable, and reliable. The team at Chambers of L&V helped us resolve a complex trademark dispute efficiently. Their strategic approach and attention to detail were outstanding.',
    rating: 5
  },
  {
    name: 'Amit Patel',
    role: 'Corporate Executive',
    content: 'Outstanding legal services with a deep understanding of business needs. Highly recommended for corporate legal matters. The team provides practical solutions that work in real-world scenarios.',
    rating: 5
  },
  {
    name: 'Dr. Meera Singh',
    role: 'Healthcare Professional',
    content: 'When I needed legal assistance for my medical practice, Chambers of L&V provided expert guidance. Their understanding of healthcare regulations and professional approach made all the difference.',
    rating: 5
  },
  {
    name: 'Vikram Malhotra',
    role: 'Real Estate Developer',
    content: 'The team at Chambers of L&V handled our complex real estate transactions with expertise and professionalism. Their attention to detail and strategic advice were invaluable.',
    rating: 5
  },
  {
    name: 'Anjali Desai',
    role: 'Startup Founder',
    content: 'As a startup founder, I needed legal guidance that was both comprehensive and practical. Chambers of L&V delivered exactly that, helping us establish proper legal structures and navigate regulatory requirements.',
    rating: 5
  }
]

export default function TestimonialsPage() {
  const [heroInView, setHeroInView] = useState(false)
  const [testimonialsInView, setTestimonialsInView] = useState(false)
  
  const heroRef = useRef<HTMLElement>(null)
  const testimonialsRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === heroRef.current) setHeroInView(true)
            if (entry.target === testimonialsRef.current) setTestimonialsInView(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) observer.observe(heroRef.current)
    if (testimonialsRef.current) observer.observe(testimonialsRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              What Our Clients Say About Us
            </p>
            <p className="text-lg text-gray-100 max-w-2xl mx-auto">
              We are committed to providing exceptional legal services and building 
              lasting relationships with our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section ref={testimonialsRef} className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Feedback
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Read what our clients have to say about their experience working with our legal team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Our Services?
            </h2>
            <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
              Contact us today to discuss your legal needs and join our satisfied clients.
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
          </motion.div>
        </div>
      </section>
    </div>
  )
} 