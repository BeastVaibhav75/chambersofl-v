'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { AlertTriangle, Shield, FileText, Info } from 'lucide-react'

export default function DisclaimerPage() {
  const [heroInView, setHeroInView] = useState(false)
  const [contentInView, setContentInView] = useState(false)
  
  const heroRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === heroRef.current) setHeroInView(true)
            if (entry.target === contentRef.current) setContentInView(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) observer.observe(heroRef.current)
    if (contentRef.current) observer.observe(contentRef.current)

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
              Disclaimer
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Important Legal Notices and Disclaimers
            </p>
            <p className="text-lg text-gray-100 max-w-2xl mx-auto">
              Please read this disclaimer carefully before using our website or services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Disclaimer Content */}
      <section ref={contentRef} className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Bar Council Disclaimer */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <AlertTriangle size={32} className="text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-red-900 mb-2">
                      Bar Council of India Disclaimer
                    </h2>
                    <p className="text-red-800 font-medium">
                      This is a mandatory notice required by the Bar Council of India.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 text-red-800">
                  <p className="text-lg leading-relaxed">
                    <strong>The Bar Council of India prohibits advocates from advertising or soliciting work in any form.</strong>
                  </p>
                  <p className="leading-relaxed">
                    By accessing this website, you acknowledge that you are seeking information about Chambers of L&V voluntarily. 
                    Nothing on this website constitutes legal advice or advertising.
                  </p>
                  <p className="leading-relaxed">
                    This website is for informational purposes only and does not constitute an advertisement or solicitation for work. 
                    The information provided on this website is not intended to create, and receipt of it does not constitute, 
                    a lawyer-client relationship.
                  </p>
                </div>
              </div>

              {/* General Disclaimer */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <Shield size={32} className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">
                      General Disclaimer
                    </h2>
                    <p className="text-blue-800 font-medium">
                      Important information about the use of this website.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 text-blue-800">
                  <p className="leading-relaxed">
                    The information contained on this website is provided for general informational purposes only and should not be 
                    construed as legal advice on any subject matter. No recipients of content from this site, clients or otherwise, 
                    should act or refrain from acting on the basis of any content included in the site without seeking the appropriate 
                    legal or other professional advice on the particular facts and circumstances at issue from an attorney licensed 
                    in the recipient's state, country or other appropriate licensing jurisdiction.
                  </p>
                  <p className="leading-relaxed">
                    Chambers of L&V expressly disclaims all liability in respect to actions taken or not taken based on any or all 
                    the contents of this site. Any information sent to Chambers of L&V through this website is not secure and is 
                    done so on a non-confidential basis.
                  </p>
                </div>
              </div>

              {/* No Attorney-Client Relationship */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <Info size={32} className="text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-yellow-900 mb-2">
                      No Attorney-Client Relationship
                    </h2>
                    <p className="text-yellow-800 font-medium">
                      Important notice about legal representation.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 text-yellow-800">
                  <p className="leading-relaxed">
                    The transmission of information from this website does not create an attorney-client relationship between you and 
                    Chambers of L&V, nor is it intended to do so. The transmission of the website, in part or in whole, and/or any 
                    communication with us via Internet e-mail through this site does not constitute or create an attorney-client 
                    relationship between us and any recipients.
                  </p>
                  <p className="leading-relaxed">
                    You should not send any confidential information to us until you have received written acceptance from us of any 
                    legal services you may request. The content of any correspondence you send via the Internet will not be considered 
                    confidential unless you have received such written confirmation.
                  </p>
                </div>
              </div>

              {/* Website Information */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <FileText size={32} className="text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Website Information
                    </h2>
                    <p className="text-gray-700 font-medium">
                      Information about this website and its content.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    The information on this website may be considered advertising in some jurisdictions. Chambers of L&V does not 
                    wish to represent anyone desiring representation based upon viewing this website in a state where this website 
                    fails to comply with all laws and ethical rules of that state.
                  </p>
                  <p className="leading-relaxed">
                    This website contains general information and may not reflect current legal developments, verdicts or settlements. 
                    Chambers of L&V does not undertake to update any material on our website to reflect subsequent legal or other 
                    developments.
                  </p>
                  <p className="leading-relaxed">
                    Some links within the website may lead to other websites, including those operated and maintained by third parties. 
                    Chambers of L&V includes these links solely as a convenience to you, and the presence of such a link does not 
                    imply a responsibility for the linked site or an endorsement of the linked site, its operator, or its contents.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-green-900 mb-4">
                  Contact Information
                </h2>
                <div className="space-y-4 text-green-800">
                  <p className="leading-relaxed">
                    If you have any questions about this disclaimer or would like to discuss your legal needs, please contact us:
                  </p>
                  <div className="space-y-2">
                    <p><strong>Address:</strong> District Court Complex, Gurugram, Haryana 122001, India</p>
                    <p><strong>Phone:</strong> +91 98765 43210</p>
                    <p><strong>Email:</strong> info@chambersoflv.com</p>
                  </div>
                  <p className="leading-relaxed">
                    We are committed to providing professional legal services while adhering to all applicable laws and ethical guidelines.
                  </p>
                </div>
              </div>

              {/* Last Updated */}
              <div className="text-center text-gray-500 text-sm">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <p className="mt-2">
                  This disclaimer is subject to change without notice. Please check back periodically for updates.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 