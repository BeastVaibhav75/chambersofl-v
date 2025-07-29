'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Lock, Eye, FileText } from 'lucide-react'

export default function PrivacyPolicyPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true })
  const [contentRef, contentInView] = useInView({ triggerOnce: true })

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
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              How We Protect Your Information
            </p>
            <p className="text-lg text-gray-100 max-w-2xl mx-auto">
              This privacy policy explains how Chambers of L&V collects, uses, and protects your personal information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section ref={contentRef} className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Information Collection */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <Eye size={32} className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">
                      Information We Collect
                    </h2>
                    <p className="text-blue-800 font-medium">
                      Types of information we may collect from you.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 text-blue-800">
                  <p className="leading-relaxed">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Contact us through our website forms</li>
                    <li>Send us emails or other communications</li>
                    <li>Schedule consultations or meetings</li>
                    <li>Engage our legal services</li>
                    <li>Visit our website (cookies and usage data)</li>
                  </ul>
                  <p className="leading-relaxed">
                    This information may include your name, email address, phone number, 
                    company information, and any other details you choose to provide.
                  </p>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <FileText size={32} className="text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-green-900 mb-2">
                      How We Use Your Information
                    </h2>
                    <p className="text-green-800 font-medium">
                      How we use the information we collect.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 text-green-800">
                  <p className="leading-relaxed">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Respond to your inquiries and provide legal services</li>
                    <li>Schedule and conduct consultations</li>
                    <li>Communicate with you about our services</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                    <li>Send you relevant legal updates and newsletters (with your consent)</li>
                  </ul>
                </div>
              </div>

              {/* Information Sharing */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <Shield size={32} className="text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-yellow-900 mb-2">
                      Information Sharing and Disclosure
                    </h2>
                    <p className="text-yellow-800 font-medium">
                      When and how we may share your information.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 text-yellow-800">
                  <p className="leading-relaxed">
                    We do not sell, trade, or otherwise transfer your personal information to third parties, except:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations or court orders</li>
                    <li>To protect our rights and safety</li>
                    <li>To trusted service providers who assist us in operating our website and services</li>
                    <li>In connection with a business transfer or merger</li>
                  </ul>
                  <p className="leading-relaxed">
                    Any third parties with whom we share information are required to maintain 
                    the confidentiality and security of your information.
                  </p>
                </div>
              </div>

              {/* Data Security */}
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <Lock size={32} className="text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-purple-900 mb-2">
                      Data Security
                    </h2>
                    <p className="text-purple-800 font-medium">
                      How we protect your information.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 text-purple-800">
                  <p className="leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal information against:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Unauthorized access or disclosure</li>
                    <li>Accidental loss or destruction</li>
                    <li>Alteration or corruption</li>
                  </ul>
                  <p className="leading-relaxed">
                    However, no method of transmission over the internet or electronic storage is 100% secure. 
                    While we strive to protect your information, we cannot guarantee absolute security.
                  </p>
                </div>
              </div>

              {/* Your Rights */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Your Rights and Choices
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Object to or restrict processing of your information</li>
                    <li>Withdraw consent for marketing communications</li>
                    <li>Lodge a complaint with relevant authorities</li>
                  </ul>
                  <p className="leading-relaxed">
                    To exercise these rights, please contact us using the information provided below.
                  </p>
                </div>
              </div>

              {/* Cookies */}
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-indigo-900 mb-4">
                  Cookies and Tracking Technologies
                </h2>
                <div className="space-y-4 text-indigo-800">
                  <p className="leading-relaxed">
                    Our website may use cookies and similar tracking technologies to enhance your experience. 
                    These technologies help us:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Remember your preferences</li>
                    <li>Analyze website traffic and usage</li>
                    <li>Improve our website functionality</li>
                    <li>Provide personalized content</li>
                  </ul>
                  <p className="leading-relaxed">
                    You can control cookie settings through your browser preferences. 
                    However, disabling cookies may affect website functionality.
                  </p>
                </div>
              </div>

              {/* Updates */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-red-900 mb-4">
                  Updates to This Policy
                </h2>
                <div className="space-y-4 text-red-800">
                  <p className="leading-relaxed">
                    We may update this privacy policy from time to time to reflect changes in our practices 
                    or applicable laws. We will notify you of any material changes by:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Posting the updated policy on our website</li>
                    <li>Sending you an email notification (if applicable)</li>
                    <li>Updating the "Last Updated" date at the bottom of this policy</li>
                  </ul>
                  <p className="leading-relaxed">
                    We encourage you to review this policy periodically to stay informed about how we protect your information.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-teal-900 mb-4">
                  Contact Us
                </h2>
                <div className="space-y-4 text-teal-800">
                  <p className="leading-relaxed">
                    If you have any questions about this privacy policy or our data practices, please contact us:
                  </p>
                  <div className="space-y-2">
                    <p><strong>Address:</strong> District Court Complex, Gurugram, Haryana 122001, India</p>
                    <p><strong>Phone:</strong> +91 8112236676, +91 9306357991</p>
                    <p><strong>Email:</strong> info@chambersoflv.com</p>
                  </div>
                  <p className="leading-relaxed">
                    We are committed to addressing your privacy concerns and will respond to your inquiries promptly.
                  </p>
                </div>
              </div>

              {/* Last Updated */}
              <div className="text-center text-gray-500 text-sm">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <p className="mt-2">
                  This privacy policy is effective as of the date listed above and applies to all information 
                  collected by Chambers of L&V through our website and services.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}