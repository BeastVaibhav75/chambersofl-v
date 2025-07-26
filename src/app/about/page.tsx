'use client'


import { useEffect, useState, useRef } from 'react'
import { 
  Award, 
  Users, 
  Target, 
  Shield, 
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We maintain the highest ethical standards in all our legal practices and client relationships.'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in every case, providing the best possible legal solutions.'
  },
  {
    icon: Users,
    title: 'Client Focus',
    description: 'Our clients are at the center of everything we do, ensuring personalized attention.'
  },
  {
    icon: Award,
    title: 'Experience',
    description: 'With years of experience, we bring deep expertise to every legal challenge.'
  }
]

const achievements = [
  'Over 500+ successful cases',
  '15+ years of combined experience',
  'Specialized in corporate & commercial law',
  'Client satisfaction rate of 98%',
  'Expertise in Indian & international law',
  'Comprehensive legal solutions'
]

export default function AboutPage() {
  const [heroInView, setHeroInView] = useState(false)
  const [valuesInView, setValuesInView] = useState(false)
  const [teamInView, setTeamInView] = useState(false)
  
  const heroRef = useRef<HTMLElement>(null)
  const valuesRef = useRef<HTMLElement>(null)
  const teamRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === heroRef.current) setHeroInView(true)
            if (entry.target === valuesRef.current) setValuesInView(true)
            if (entry.target === teamRef.current) setTeamInView(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) observer.observe(heroRef.current)
    if (valuesRef.current) observer.observe(valuesRef.current)
    if (teamRef.current) observer.observe(teamRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Chambers of L&V
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Premier Corporate, Commercial & Litigation Law Firm
            </p>
            <p className="text-lg text-gray-100 max-w-2xl mx-auto">
              Based in Gurugram, India, we provide comprehensive legal services to startups, 
              corporates, foreign investors, and individuals.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Chambers of L&V, our mission is to provide exceptional legal services that 
                empower our clients to achieve their business and personal objectives. We combine 
                deep legal expertise with practical business understanding to deliver solutions 
                that work in the real world.
              </p>
              <p className="text-gray-600 mb-8">
                We are committed to maintaining the highest standards of professional ethics and 
                integrity while building lasting relationships with our clients based on trust, 
                transparency, and results.
              </p>
              <Link href="/services" className="btn-primary">
                Explore Our Services
              </Link>
            </div>
            
            <div
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Client-Centric</h4>
                    <p className="text-gray-600 text-sm">We prioritize understanding your unique needs and objectives.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Practical Solutions</h4>
                    <p className="text-gray-600 text-sm">We provide practical legal solutions that work in real-world scenarios.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Guidance</h4>
                    <p className="text-gray-600 text-sm">Our experienced team provides expert guidance throughout your legal journey.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Ethical Practice</h4>
                    <p className="text-gray-600 text-sm">We maintain the highest ethical standards in all our practices.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <div
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our practice and define our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Overview Section */}
      <section ref={teamRef} className="section-padding">
        <div className="container-custom">
          <div
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experienced legal professionals dedicated to providing exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="card text-center"
            >
              <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">L</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Senior Partner</h3>
              <p className="text-gray-600 mb-4">Corporate & Commercial Law</p>
              <p className="text-sm text-gray-500">
                Specializes in corporate law, mergers & acquisitions, and business formation.
              </p>
            </div>

            <div
              className="card text-center"
            >
              <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">V</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Senior Partner</h3>
              <p className="text-gray-600 mb-4">Litigation & Dispute Resolution</p>
              <p className="text-sm text-gray-500">
                Expert in civil litigation, criminal defense, and dispute resolution.
              </p>
            </div>

            <div
              className="card text-center"
            >
              <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">A</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Associate</h3>
              <p className="text-gray-600 mb-4">Intellectual Property & IT Law</p>
              <p className="text-sm text-gray-500">
                Specializes in IP law, trademark registration, and technology law.
              </p>
            </div>
          </div>

          <div
            className="text-center mt-12"
          >
            <Link href="/team" className="btn-primary group inline-flex items-center">
              Meet Our Full Team
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Years of experience and successful outcomes for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement}
                className="text-center"
              >
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <CheckCircle size={32} className="text-white mx-auto mb-4" />
                  <p className="text-white font-medium">{achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your legal needs and how we can help you achieve your objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/services" className="btn-secondary">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}