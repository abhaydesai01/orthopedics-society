import { CreditCard, Globe, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Announcements Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-sky-400 pb-2 border-b border-sky-400/30">
              Latest Announcements
            </h3>
            <div className="space-y-4">
              {/* If there are no announcements */}
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="text-gray-400 italic">No current announcements</p>
              </div>
              {/* When there are announcements, use this template
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="font-medium text-sky-400 mb-2">Announcement Title</h4>
                <p className="text-gray-300 text-sm">Announcement content goes here...</p>
                <p className="text-gray-400 text-xs mt-2">Posted on: Date</p>
              </div>
              */}
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-sky-400 pb-2 border-b border-sky-400/30">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Dr. Ramesh</h4>
                <p className="text-gray-300">General Secretary, Bangalore Orthopaedic Society</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="h-5 w-5 text-sky-400 mt-1 flex-shrink-0" />
                  <p>No 71/A, 3rd Cross, Mount Joy Extension, Hanumanthanagar, Bangalore – 560 019</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-sky-400 flex-shrink-0" />
                  <a 
                    href="mailto:generalsecretarybos@gmail.com" 
                    className="text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    generalsecretarybos@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-sky-400 flex-shrink-0" />
                  <a 
                    href="https://bosbengaluru.org/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    www.bosbengaluru.org
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-sky-400 flex-shrink-0" />
                  <a 
                    href="tel:+919845574754" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +91 98455 74754
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Details Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-sky-400 pb-2 border-b border-sky-400/30">
              Registration Details
            </h3>
            <div className="bg-slate-800/50 rounded-lg p-6 space-y-4">
              <div className="flex items-center space-x-2 text-sky-400">
                <CreditCard className="h-5 w-5" />
                <h4 className="font-medium">NEFT Transfer Details</h4>
              </div>
              
              <div className="space-y-2 text-gray-300">
                <p className="font-medium">Banglore Orthopaedic Society</p>
                <div className="space-y-1 text-sm">
                  <p>Bank: KARNATAKA BANK LTD.</p>
                  <p>A/C No: 0612500102803601</p>
                  <p>IFSC Code: KARB0000058</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-gray-400">
            Copyright © {currentYear} Bangalore Orthopaedic Society. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
