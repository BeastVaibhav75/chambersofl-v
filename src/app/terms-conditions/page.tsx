'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FileText, Shield, AlertTriangle, CheckCircle } from 'lucide-react'

export default function TermsConditionsPage() {
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
              Terms & Conditions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Terms of Service and Usage
            </p>
            <p className="text-lg text-gray-100 max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using our website or services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section ref={contentRef} className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Acceptance */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <CheckCircle size={32} className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">
                      Acceptance of Terms
                    </h2>
                    <p className="text-blue-800 font-medium">
                      By using our website, you agree to these terms and conditions.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 text-blue-800">
                  <p className="leading-relaxed">
                    By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
                    If you do not agree to abide by the above, please do not use this service.
                  </p>
                  <p className="leading-relaxed">
                    These terms and conditions apply to all users of the site, including without limitation users who are browsers, 
                    vendors, customers, merchants, and/or contributors of content.
                  </p>
                </div>
              </div>

              {/* Services */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <FileText size={32} className="text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-green-900 mb-2">
                      Legal Services
                    </h2>
                    <p className="text-green-800 font-medium">
                      Information about our legal services and limitations.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 text-green-800">
                  <p className="leading-relaxed">
                    Chambers of L&V provides legal services in accordance with applicable laws and regulations. 
                    Our services include but are not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Legal consultation and advice</li>
                    <li>Document preparation and review</li>
                    <li>Representation in legal proceedings</li>
                    <li>Legal research and analysis</li>
                    <li>Contract drafting and negotiation</li>
                  </ul>
                  <p className="leading-relaxed">
                    The provision of legal services is subject to the terms of our engagement agreement, 
                    which will be provided separately when you engage our services.
                  </p>
                </div>
              </div>

              {/* Website Use */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <Shield size={32} className="text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-yellow-900 mb-2">
                      Website Use
                    </h2>
                    <p className="text-yellow-800 font-medium">
                      Rules and guidelines for using our website.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 text-yellow-800">
                  <p className="leading-relaxed">
                    You may use our website for lawful purposes only. You agree not to use the website:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                    <li>To transmit, or procure the sending of, any advertising or promotional material</li>
                    <li>To impersonate or attempt to impersonate the company, a company employee, or any other person</li>
                    <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
                    <li>To introduce viruses, trojans, worms, logic bombs, or other material that is malicious or technologically harmful</li>
                  </ul>
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-purple-900 mb-4">
                  Intellectual Property Rights
                </h2>
                <div className="space-y-4 text-purple-800">
                  <p className="leading-relaxed">
                    The website and its entire contents, features, and functionality (including but not limited to all information, 
                    software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) 
                    are owned by Chambers of L&V, its licensors, or other providers of such material and are protected by 
                    copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                  </p>
                  <p className="leading-relaxed">
                    You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, 
                    republish, download, store, or transmit any of the material on our website, except as follows:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials</li>
                    <li>You may store files that are automatically cached by your Web browser for display enhancement purposes</li>
                    <li>You may print or download one copy of a reasonable number of pages of the website for your own personal, non-commercial use</li>
                  </ul>
                </div>
              </div>

              {/* Disclaimers */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <AlertTriangle size={32} className="text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-red-900 mb-2">
                      Disclaimers
                    </h2>
                    <p className="text-red-800 font-medium">
                      Important limitations and disclaimers.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 text-red-800">
                  <p className="leading-relaxed">
                    <strong>No Legal Advice:</strong> The information on this website is for general informational purposes only 
                    and should not be construed as legal advice on any subject matter.
                  </p>
                  <p className="leading-relaxed">
                    <strong>No Attorney-Client Relationship:</strong> The transmission of information from this website does not 
                    create an attorney-client relationship between you and Chambers of L&V.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Accuracy of Information:</strong> While we strive to keep the information on this website accurate 
                    and up-to-date, we make no representations or warranties about the accuracy, completeness, or suitability 
                    of the information for any purpose.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Third-Party Links:</strong> Our website may contain links to third-party websites. We are not 
                    responsible for the content or privacy practices of these external sites.
                  </p>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Limitation of Liability
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    To the maximum extent permitted by applicable law, Chambers of L&V shall not be liable for any indirect, 
                    incidental, special, consequential, or punitive damages, including without limitation, loss of profits, 
                    data, use, goodwill, or other intangible losses, resulting from:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Your use or inability to use the website</li>
                    <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                    <li>Any interruption or cessation of transmission to or from the website</li>
                    <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through the website</li>
                    <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content</li>
                  </ul>
                </div>
              </div>

              {/* Indemnification */}
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-indigo-900 mb-4">
                  Indemnification
                </h2>
                <div className="space-y-4 text-indigo-800">
                  <p className="leading-relaxed">
                    You agree to defend, indemnify, and hold harmless Chambers of L&V, its affiliates, licensors, and service 
                    providers, and its and their respective officers, directors, employees, contractors, agents, licensors, 
                    suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, 
                    losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to 
                    your violation of these Terms & Conditions or your use of the website.
                  </p>
                </div>
              </div>

              {/* Governing Law */}
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-teal-900 mb-4">
                  Governing Law and Jurisdiction
                </h2>
                <div className="space-y-4 text-teal-800">
                  <p className="leading-relaxed">
                    These Terms & Conditions and any dispute or claim arising out of or in connection with them or their subject 
                    matter or formation (including non-contractual disputes or claims) shall be governed by and construed in 
                    accordance with the law of India.
                  </p>
                  <p className="leading-relaxed">
                    Any legal suit, action, or proceeding arising out of, or related to, these Terms & Conditions or the 
                    website shall be instituted exclusively in the courts of Gurugram, Haryana, India, although we retain 
                    the right to bring any suit, action, or proceeding against you for breach of these Terms & Conditions 
                    in your country of residence or any other relevant country.
                  </p>
                </div>
              </div>

              {/* Changes to Terms */}
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-orange-900 mb-4">
                  Changes to Terms & Conditions
                </h2>
                <div className="space-y-4 text-orange-800">
                  <p className="leading-relaxed">
                    We may revise and update these Terms & Conditions from time to time in our sole discretion. All changes 
                    are effective immediately when we post them, and they apply to all access to and use of the website thereafter.
                  </p>
                  <p className="leading-relaxed">
                    Your continued use of the website following the posting of revised Terms & Conditions means that you accept 
                    and agree to the changes. You are expected to check this page frequently so you are aware of any changes, 
                    as they are binding on you.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-emerald-900 mb-4">
                  Contact Information
                </h2>
                <div className="space-y-4 text-emerald-800">
                  <p className="leading-relaxed">
                    If you have any questions about these Terms & Conditions, please contact us:
                  </p>
                  <div className="space-y-2">
                    <p><strong>Address:</strong> District Court Complex, Gurugram, Haryana 122001, India</p>
                    <p><strong>Phone:</strong> +91 8112236676, +91 9306357991</p>
                    <p><strong>Email:</strong> office@chambersoflv.co.in</p>
                  </div>
                  <p className="leading-relaxed">
                    We are committed to addressing your concerns and will respond to your inquiries promptly.
                  </p>
                </div>
              </div>

              {/* Last Updated */}
              <div className="text-center text-gray-500 text-sm">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <p className="mt-2">
                  These Terms & Conditions are effective as of the date listed above and apply to all users of our website and services.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}