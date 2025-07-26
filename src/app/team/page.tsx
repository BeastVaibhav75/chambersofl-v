'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { 
  Award, 
  GraduationCap, 
  Briefcase,
  Mail,
  Phone
} from 'lucide-react'

const teamMembers = [
  {
    name: 'Senior Partner L',
    role: 'Senior Partner',
    specialization: 'Corporate & Commercial Law',
    experience: '15+ years',
    education: 'LL.B. from National Law School',
    expertise: [
      'Mergers & Acquisitions',
      'Corporate Governance',
      'Business Formation',
      'Regulatory Compliance'
    ],
    description: 'Specializes in corporate law, mergers & acquisitions, and business formation. Has extensive experience in handling complex corporate transactions and providing strategic legal advice to businesses of all sizes.',
    contact: {
      email: 'partner.l@chambersoflv.com',
      phone: '+91 98765 43210'
    }
  },
  {
    name: 'Senior Partner V',
    role: 'Senior Partner',
    specialization: 'Litigation & Dispute Resolution',
    experience: '12+ years',
    education: 'LL.B. from Delhi University',
    expertise: [
      'Civil Litigation',
      'Criminal Defense',
      'Dispute Resolution',
      'Arbitration'
    ],
    description: 'Expert in civil litigation, criminal defense, and dispute resolution. Known for strategic approach to complex legal disputes and successful representation in high-stakes cases.',
    contact: {
      email: 'partner.v@chambersoflv.com',
      phone: '+91 98765 43211'
    }
  },
  {
    name: 'Associate A',
    role: 'Associate',
    specialization: 'Intellectual Property & IT Law',
    experience: '8+ years',
    education: 'LL.B. from Symbiosis Law School',
    expertise: [
      'Trademark Registration',
      'Patent Protection',
      'IT Law',
      'Data Protection'
    ],
    description: 'Specializes in IP law, trademark registration, and technology law. Provides comprehensive legal services for startups and technology companies.',
    contact: {
      email: 'associate.a@chambersoflv.com',
      phone: '+91 98765 43212'
    }
  }
]

export default function TeamPage() {
  const [heroInView, setHeroInView] = useState(false)
  const [teamInView, setTeamInView] = useState(false)
  
  const heroRef = useRef<HTMLElement>(null)
  const teamRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === heroRef.current) setHeroInView(true)
            if (entry.target === teamRef.current) setTeamInView(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) observer.observe(heroRef.current)
    if (teamRef.current) observer.observe(teamRef.current)

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
              Our Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Experienced Legal Professionals
            </p>
            <p className="text-lg text-gray-100 max-w-2xl mx-auto">
              Meet our dedicated team of legal professionals committed to providing 
              exceptional legal services and achieving the best outcomes for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section ref={teamRef} className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Legal Experts
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team combines deep legal expertise with practical business understanding 
              to deliver comprehensive legal solutions.
            </p>
          </motion.div>

          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white font-bold text-3xl">
                        {member.name.split(' ').pop()?.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-2">
                      {member.name}
                    </h3>
                    <p className="text-center text-gray-200 mb-6">
                      {member.role}
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Briefcase size={20} className="text-primary-200" />
                        <span className="text-sm">{member.specialization}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Award size={20} className="text-primary-200" />
                        <span className="text-sm">{member.experience} Experience</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <GraduationCap size={20} className="text-primary-200" />
                        <span className="text-sm">{member.education}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {member.name}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {member.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Areas of Expertise:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {member.expertise.map((expertise, idx) => (
                        <div key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                          <span className="text-sm">{expertise}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Mail size={16} className="text-primary-600" />
                      <a
                        href={`mailto:${member.contact.email}`}
                        className="text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        {member.contact.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone size={16} className="text-primary-600" />
                      <a
                        href={`tel:${member.contact.phone}`}
                        className="text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        {member.contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
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
              Our Team Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our practice and define our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We strive for excellence in every case, providing the best possible legal solutions.'
              },
              {
                title: 'Integrity',
                description: 'We maintain the highest ethical standards in all our legal practices and client relationships.'
              },
              {
                title: 'Client Focus',
                description: 'Our clients are at the center of everything we do, ensuring personalized attention.'
              },
              {
                title: 'Innovation',
                description: 'We embrace innovative approaches to legal challenges while maintaining traditional values.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
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
              Ready to Work With Our Team?
            </h2>
            <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
              Contact us today to discuss your legal needs and how our experienced team can help you achieve your objectives.
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