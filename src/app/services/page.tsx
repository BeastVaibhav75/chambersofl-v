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
  Building,
  Gavel,
  Lock,
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Scale,
    title: 'Corporate Law',
    description: 'Comprehensive corporate legal services for businesses of all sizes.',
    color: 'bg-gray-800',
    features: [
      'Mergers & Acquisitions',
      'Corporate Governance',
      'Business Formation',
      'Regulatory Compliance',
      'Board Advisory',
      'Corporate Restructuring'
    ],
    details: 'Our corporate law practice provides comprehensive legal services to businesses, from startups to multinational corporations. We help clients navigate complex corporate transactions, ensure regulatory compliance, and establish strong governance frameworks.'
  },
  {
    icon: Users,
    title: 'Consumer Law',
    description: 'Protecting consumer rights and handling consumer disputes effectively.',
    color: 'bg-gray-800',
    features: [
      'Consumer Rights Protection',
      'Product Liability',
      'Service Disputes',
      'Consumer Complaints',
      'Class Action Litigation',
      'Regulatory Compliance'
    ],
    details: 'We represent consumers in disputes with businesses, ensuring their rights are protected under Indian consumer protection laws. Our expertise covers product liability, service disputes, and consumer complaint resolution.'
  },
  {
    icon: Shield,
    title: 'Legal Consulting',
    description: 'Expert legal advice and strategic consulting for businesses and individuals.',
    color: 'bg-gray-800',
    features: [
      'Legal Strategy Development',
      'Risk Assessment',
      'Compliance Audits',
      'Contract Review',
      'Due Diligence',
      'Legal Opinion'
    ],
    details: 'Our legal consulting services provide strategic guidance to help clients make informed decisions. We offer comprehensive risk assessments, compliance audits, and expert legal opinions.'
  },
  {
    icon: Briefcase,
    title: 'Labor & Employment Law',
    description: 'Employment law, workplace disputes, and HR compliance solutions.',
    color: 'bg-gray-800',
    features: [
      'Employment Contracts',
      'Workplace Disputes',
      'HR Compliance',
      'Employee Benefits',
      'Discrimination Cases',
      'Labor Relations'
    ],
    details: 'We provide comprehensive employment law services, helping both employers and employees navigate workplace legal issues, from contract drafting to dispute resolution.'
  },
  {
    icon: Globe,
    title: 'Intellectual Property Law',
    description: 'Trademark registration, patent protection, and IP rights enforcement.',
    color: 'bg-gray-800',
    features: [
      'Trademark Registration',
      'Patent Protection',
      'Copyright Law',
      'IP Litigation',
      'IP Strategy',
      'Technology Transfer'
    ],
    details: 'Our IP practice helps clients protect and enforce their intellectual property rights, from trademark registration to complex patent litigation and technology transfer agreements.'
  },
  {
    icon: FileText,
    title: 'Business Law',
    description: 'Contract drafting, business formation, and commercial legal services.',
    color: 'bg-gray-800',
    features: [
      'Contract Drafting',
      'Business Formation',
      'Commercial Transactions',
      'Partnership Agreements',
      'Joint Ventures',
      'Business Disputes'
    ],
    details: 'We provide comprehensive business law services, helping clients establish and grow their businesses through proper legal structuring and contract management.'
  },
  {
    icon: Building,
    title: 'Real Estate Law',
    description: 'Property transactions, development projects, and real estate disputes.',
    color: 'bg-gray-700',
    features: [
      'Property Transactions',
      'Development Projects',
      'Land Use Planning',
      'Real Estate Disputes',
      'Lease Agreements',
      'Property Due Diligence'
    ],
    details: 'Our real estate practice covers all aspects of property law, from residential transactions to complex commercial development projects and land use planning.'
  },
  {
    icon: Gavel,
    title: 'Criminal Defense Law',
    description: 'Criminal defense, white-collar crime, and legal representation.',
    color: 'bg-gray-800',
    features: [
      'Criminal Defense',
      'White-Collar Crime',
      'Legal Representation',
      'Bail Applications',
      'Appeals',
      'Legal Consultation'
    ],
    details: 'We provide strong criminal defense representation, ensuring our clients receive fair treatment and the best possible legal defense in criminal proceedings.'
  },
  {
    icon: Lock,
    title: 'IT Law',
    description: 'Technology law, data protection, and cybersecurity legal services.',
    color: 'bg-gray-800',
    features: [
      'Data Protection',
      'Cybersecurity Law',
      'Software Licensing',
      'IT Contracts',
      'Privacy Compliance',
      'Technology Disputes'
    ],
    details: 'Our IT law practice helps businesses navigate the complex legal landscape of technology, from data protection compliance to software licensing and cybersecurity issues.'
  },
  {
    icon: Zap,
    title: 'Trademark Law',
    description: 'Trademark registration, protection, and enforcement services.',
    color: 'bg-gray-800',
    features: [
      'Trademark Registration',
      'Brand Protection',
      'Trademark Enforcement',
      'Infringement Cases',
      'Trademark Strategy',
      'International Protection'
    ],
    details: 'We specialize in trademark law, helping businesses protect their brands through registration, enforcement, and strategic trademark management.'
  }
]

export default function ServicesPage() {
  const [heroInView, setHeroInView] = useState(false)
  const [servicesInView, setServicesInView] = useState(false)
  
  const heroRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === heroRef.current) setHeroInView(true)
            if (entry.target === servicesRef.current) setServicesInView(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) observer.observe(heroRef.current)
    if (servicesRef.current) observer.observe(servicesRef.current)

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
              Our Legal Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive Legal Solutions for Businesses and Individuals
            </p>
            <p className="text-lg text-gray-100 max-w-2xl mx-auto">
              From corporate law to intellectual property, we provide expert legal services 
              tailored to meet your specific needs and objectives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas of Practice
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our experienced team provides comprehensive legal services across multiple practice areas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
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
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Services:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle size={14} className="text-gray-800 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/contact" className="inline-flex items-center text-gray-800 hover:text-black font-medium group/link">
                  Learn More
                  <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Details
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn more about our comprehensive legal services and how we can help you
            </p>
          </motion.div>

          <div className="space-y-12">
            {services.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`w-20 h-20 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                    <service.icon size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    {service.details}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <CheckCircle size={16} className="text-gray-800 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={`bg-white rounded-xl p-8 shadow-lg ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Why Choose Our {service.title} Services?
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-gray-800 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Expert legal professionals with specialized knowledge</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Proven track record of successful outcomes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Personalized approach tailored to your needs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Comprehensive legal solutions and ongoing support</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              How we work with clients to deliver exceptional legal services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Initial Consultation',
                description: 'We begin with a comprehensive consultation to understand your legal needs and objectives.'
              },
              {
                step: '02',
                title: 'Case Analysis',
                description: 'Our team analyzes your situation and develops a strategic legal approach.'
              },
              {
                step: '03',
                title: 'Legal Strategy',
                description: 'We implement the legal strategy with regular updates and communication.'
              },
              {
                step: '04',
                title: 'Resolution',
                description: 'We work towards achieving the best possible outcome for your case.'
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-light-solid">
                Contact Us
              </Link>
              <Link href="/team" className="btn-light-outline">
                Meet Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}