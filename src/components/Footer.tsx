'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L&V</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Chambers of L&V</h3>
                <p className="text-sm text-gray-300">Corporate & Commercial Law</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premier Corporate, Commercial & Litigation law firm based in Gurugram, India. 
              Providing comprehensive legal services to startups, corporates, and individuals.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Team', href: '/team' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    District Court Complex<br />
                    Gurugram, Haryana 122001<br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-gray-400 flex-shrink-0" />
                <a
                  href="tel:+918112236676"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  +91 8112236676
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gray-400 flex-shrink-0" />
                <a
                  href="mailto:office@chambersoflv.co.in"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  office@chambersoflv.co.in
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-gray-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Mon - Fri: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              {[
                { name: 'Disclaimer', href: '/disclaimer' },
                { name: 'Privacy Policy', href: '/privacy-policy' },
                { name: 'Terms & Conditions', href: '/terms-conditions' },
                { name: 'FAQs', href: '/faqs' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center"
                  >
                    {link.name}
                    <ExternalLink size={12} className="ml-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Chambers of L&V. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-center">
              The Bar Council of India prohibits advocates from advertising or soliciting work in any form.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}