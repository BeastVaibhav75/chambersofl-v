'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface DisclaimerContextType {
  showDisclaimer: boolean
  setShowDisclaimer: (show: boolean) => void
}

const DisclaimerContext = createContext<DisclaimerContextType | undefined>(undefined)

export function useDisclaimer() {
  const context = useContext(DisclaimerContext)
  if (!context) {
    throw new Error('useDisclaimer must be used within a DisclaimerProvider')
  }
  return context
}

export function DisclaimerProvider({ children }: { children: React.ReactNode }) {
  const [showDisclaimer, setShowDisclaimer] = useState(false)

  useEffect(() => {
    const hasSeenDisclaimer = localStorage.getItem('disclaimer-seen')
    if (!hasSeenDisclaimer) {
      setShowDisclaimer(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('disclaimer-seen', 'true')
    setShowDisclaimer(false)
  }

  return (
    <DisclaimerContext.Provider value={{ showDisclaimer, setShowDisclaimer }}>
      {children}
      
      <AnimatePresence>
        {showDisclaimer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative"
            >
              <button
                onClick={handleAccept}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Important Notice
                </h3>
                
                <div className="text-sm text-gray-600 mb-6 leading-relaxed">
                  <p className="mb-3">
                    The Bar Council of India prohibits advocates from advertising or soliciting work in any form.
                  </p>
                  <p className="mb-3">
                    By accessing this site, you acknowledge that you are seeking information about Chambers of L&V voluntarily.
                  </p>
                  <p>
                    Nothing on this site constitutes legal advice or advertising.
                  </p>
                </div>
                
                <button
                  onClick={handleAccept}
                  className="btn-primary w-full"
                >
                  I Understand
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </DisclaimerContext.Provider>
  )
} 