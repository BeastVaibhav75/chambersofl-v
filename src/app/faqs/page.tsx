'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: "How do I schedule a consultation with Chambers of L&V?",
    answer: "You can schedule a consultation by calling us directly at +91 98765 43210, sending us an email at info@chambersoflv.com, or filling out the contact form on our website. We'll get back to you within 24 hours to arrange a meeting."
  },
  {
    question: "What information should I bring to my first meeting?",
    answer: "Please bring any relevant documents related to your case, such as contracts, correspondence, legal notices, or any other documentation that might be relevant. We'll guide you on what specific documents are needed based on your situation."
  },
  {
    question: "Do you offer free initial consultations?",
    answer: "We offer a brief initial consultation to understand your legal needs and determine how we can help you. For detailed case analysis and legal advice, we may charge a consultation fee which will be discussed upfront and is reasonable."
  },
  {
    question: "How quickly can you respond to urgent legal matters?",
    answer: "For urgent legal matters, we prioritize immediate attention. Please call us directly for urgent cases, and we'll arrange for prompt consultation. We understand that some legal issues require immediate attention."
  },
  {
    question: "What areas of law do you specialize in?",
    answer: "We specialize in Corporate Law, Consumer Law, Legal Consulting, Labor and Employment Law, Intellectual Property Law, Trademark Law, Personal Injury Law, IT Law, Business Law, and Criminal Defense Law."
  },
  {
    question: "Do you handle cases outside of Gurugram?",
    answer: "Yes, we handle cases across India. While our office is located in Gurugram, we provide legal services to clients throughout the country. We can arrange consultations via phone or video conferencing for clients who cannot visit our office."
  },
  {
    question: "What are your office hours?",
    answer: "Our office hours are Monday to Friday from 9:00 AM to 6:00 PM, and Saturday from 9:00 AM to 1:00 PM. We are closed on Sundays and public holidays."
  },
  {
    question: "How do you ensure client confidentiality?",
    answer: "We maintain strict client confidentiality in accordance with legal professional standards. All communications and information shared with us are kept confidential, and we follow all applicable laws and ethical guidelines."
  },
  {
    question: "Do you provide legal services for startups?",
    answer: "Yes, we have extensive experience working with startups and provide comprehensive legal services including business formation, contract drafting, intellectual property protection, and regulatory compliance."
  },
  {
    question: "What is your approach to billing and fees?",
    answer: "We offer transparent and reasonable fee structures. Our billing approach varies depending on the type of case and services required. We discuss fees upfront and provide clear estimates before beginning work."
  },
  {
    question: "Do you handle international legal matters?",
    answer: "We primarily focus on Indian law and legal matters within India. However, we can provide guidance on international legal issues and work with international clients who have legal matters in India."
  },
  {
    question: "How do I know if I need legal assistance?",
    answer: "If you're facing legal issues, have questions about contracts, need to protect your rights, or are involved in a dispute, it's advisable to consult with a legal professional. We offer initial consultations to help determine if legal assistance is needed."
  }
]

export default function FAQsPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true })
  const [faqsRef, faqsInView] = useInView({ triggerOnce: true })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Common Questions About Our Legal Services
            </p>
            <p className="text-lg text-gray-100 max-w-2xl mx-auto">
              Find answers to common questions about our services, consultation process, 
              and how we can help with your legal needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section ref={faqsRef} className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={faqsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to frequently asked questions about our legal services and processes
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between text-left focus:outline-none"
                  >
                    <div className="flex items-start space-x-4">
                      <HelpCircle size={20} className="text-primary-600 mt-1 flex-shrink-0" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        {faq.question}
                      </h3>
                    </div>
                    {openIndex === index ? (
                      <ChevronUp size={20} className="text-primary-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown size={20} className="text-primary-600 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pl-8"
                    >
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-12"
          >
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 mb-6">
                If you couldn't find the answer you're looking for, please don't hesitate to contact us directly. 
                Our team is here to help with all your legal inquiries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="btn-primary"
                >
                  Contact Us
                </a>
                <a
                  href="tel:+918112236676"
                  className="btn-secondary"
                >
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
              Contact us today to discuss your legal needs and get personalized assistance from our expert team.
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