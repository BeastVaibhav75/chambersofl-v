'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { 
  Scale, 
  Users, 
  Shield, 
  Briefcase, 
  Globe, 
  FileText,
  Star,
  ArrowRight,
  Phone,
  MessageCircle,
  MapPin,
  Clock
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Scale,
    title: 'Corporate Law',
    description: 'Comprehensive corporate legal services including mergers, acquisitions, and compliance.',
    color: 'bg-gray-900'
  },
  {
    icon: Users,
    title: 'Consumer Law',
    description: 'Protecting consumer rights and handling consumer disputes effectively.',
    color: 'bg-gray-800'
  },
  {
    icon: Shield,
    title: 'Legal Consulting',
    description: 'Expert legal advice and strategic consulting for businesses and individuals.',
    color: 'bg-gray-700'
  },
  {
    icon: Briefcase,
    title: 'Labor & Employment',
    description: 'Employment law, workplace disputes, and HR compliance solutions.',
    color: 'bg-gray-600'
  },
  {
    icon: Globe,
    title: 'Intellectual Property',
    description: 'Trademark registration, patent protection, and IP rights enforcement.',
    color: 'bg-gray-500'
  },
  {
    icon: FileText,
    title: 'Business Law',
    description: 'Contract drafting, business formation, and commercial legal services.',
    color: 'bg-gray-400'
  }
]

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO, TechStart India',
    content: 'Chambers of L&V provided exceptional legal guidance during our startup phase. Their expertise in corporate law helped us navigate complex regulations.',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    role: 'Business Owner',
    content: 'Professional, knowledgeable, and reliable. The team at Chambers of L&V helped us resolve a complex trademark dispute efficiently.',
    rating: 5
  },
  {
    name: 'Amit Patel',
    role: 'Corporate Executive',
    content: 'Outstanding legal services with a deep understanding of business needs. Highly recommended for corporate legal matters.',
    rating: 5
  }
]

export default function Home() {
  const [heroInView, setHeroInView] = useState(false)
  const [servicesInView, setServicesInView] = useState(false)
  const [testimonialsInView, setTestimonialsInView] = useState(false)
  
  const heroRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const testimonialsRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === heroRef.current) setHeroInView(true)
            if (entry.target === servicesRef.current) setServicesInView(true)
            if (entry.target === testimonialsRef.current) setTestimonialsInView(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) observer.observe(heroRef.current)
    if (servicesRef.current) observer.observe(servicesRef.current)
    if (testimonialsRef.current) observer.observe(testimonialsRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Chambers of{' '}
              <span className="font-bold text-white">
                L&V
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Premier Corporate, Commercial & Litigation Law Firm
            </p>
            <p className="text-lg mb-12 text-gray-200 max-w-2xl mx-auto">
              Based in Gurugram, India. Providing comprehensive legal services to startups, 
              corporates, foreign investors, and individuals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="btn-light-solid text-lg px-8 py-4">
                Our Services
              </Link>
              <Link href="/contact" className="btn-light-outline text-lg px-8 py-4">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-xl"
        />
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Legal Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive legal solutions tailored to meet the diverse needs of our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="card group cursor-pointer"
              >
                <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Link href="/services" className="inline-flex items-center text-gray-800 hover:text-black font-medium group/link">
                  Learn More
                  <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Chambers of L&V
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We are a premier law firm specializing in corporate, commercial, and litigation matters. 
                Our team of experienced attorneys provides comprehensive legal solutions to businesses and individuals.
              </p>
              <p className="text-gray-600 mb-8">
                With deep expertise in Indian law and international business practices, we help our clients 
                navigate complex legal challenges and achieve their objectives effectively.
              </p>
              <Link href="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-800 to-black rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span>Experienced Legal Professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span>Comprehensive Legal Solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span>Client-Focused Approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span>Proven Track Record</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are committed to providing exceptional legal services and building lasting relationships with our clients
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

      {/* Contact CTA Section */}
      <section className="section-padding bg-gradient-to-r from-gray-800 to-black text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
              Contact us today to discuss your legal needs and how we can help you achieve your objectives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+918112236676"
                className="btn-light-solid flex items-center gap-2"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/918112236676"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light-outline flex items-center gap-2"
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-gray-600">
              Located in the heart of Gurugram's legal district
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <MapPin size={24} className="text-primary-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Address</h3>
                  <p className="text-gray-600">
                    District Court Complex<br />
                    Gurugram, Haryana 122001<br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock size={24} className="text-primary-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Office Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone size={24} className="text-primary-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Contact</h3>
                  <p className="text-gray-600">
                    Phone: +91 8112236676<br />
                    Email: office@chambersoflv.co.in
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-200 rounded-lg h-64 flex items-center justify-center"
            >
              <div className="text-center text-gray-500">
                <MapPin size={48} className="mx-auto mb-4" />
                <p>Google Maps Embed</p>
                <p className="text-sm">District Court, Gurugram</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}