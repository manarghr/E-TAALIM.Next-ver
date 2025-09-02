"use client"

import { useState } from "react"
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md"

export default function Footer() {
const [email, setEmail] = useState("")

const handleSubscribe = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribing email:", email)
    setEmail("")
}

return (
    <footer className="bg-slate-900 text-white py-12 px-6">
    <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left Section - Logo and Branding */}
        <div className="space-y-4">
            <div className="flex items-center space-x-2">
            <img
                src="E-TAALIM.png"
                alt="E-TAALIM Logo"
                className="h-22 w-auto"
            />
            </div>
            <div>
            <p className="text-lg font-semibold">EMPOWERING EDUCATION</p>
            <p className="text-orange-300 font-semibold">ONE CLICK AT A TIME...</p>
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-4">
              {/* LinkedIn */}
            <a href="#" className="hover:opacity-75 transition-opacity">
                <img src="Linkedin.png" alt="LinkedIn" className="w-6 h-6" />
            </a>
              {/* Instagram */}
            <a href="#" className="hover:opacity-75 transition-opacity">
                <img src="instagram.png" alt="Instagram" className="w-6 h-6" />
            </a>
              {/* Facebook */}
            <a href="#" className="hover:opacity-75 transition-opacity">
                <img src="facebook.png" alt="Facebook" className="w-6 h-6" />
            </a>
              {/* Gmail */}
            <a href="#" className="hover:opacity-75 transition-opacity">
                <img src="gmail.png" alt="Gmail" className="w-6 h-6" />
            </a>
            </div>
        </div>

          {/* Send email section */}
        <div className="space-y-4">
            <h3 className="text-2xl font-bold">Subscribe To Our Newsletter</h3>
            <p className="text-gray-300">Get the latest updates on new courses, mentors, and exclusive offers!</p>
            <form onSubmit={handleSubscribe} className="space-y-4">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
            />
            <button
                type="submit"
                className="bg-orange-300 hover:bg-orange-400 text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
                Subscribe
            </button>
            </form>
        </div>

          {/* Contact section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MdEmail className="w-5 h-5 text-teal-400" />
                <span>support@e_taalim.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MdPhone className="w-5 h-5 text-teal-400" />
                <span>+213 XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-3">
                <MdLocationOn className="w-5 h-5 text-teal-400" />
                <span>Algiers, Algeria</span>
              </div>
            </div>
          </div>
        </div>

        {/*Bottom section*/}

        <div className="border-t border-slate-700 mt-12 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">Copyright © 2025 E-Taalim</p>
            <div className="flex space-x-6 text-sm">
            <span className="text-gray-400">All Rights Reserved |</span>
            <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors">
                Terms and Conditions
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors">
                Privacy Policy
            </a>
            </div>
        </div>
        </div>
    </div>
    </footer>
)
}
