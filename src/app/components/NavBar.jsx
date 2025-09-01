"use client"

import { useState } from "react"

export default function Navbar({ user }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <nav className="bg-slate-900 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">

        {/*Logo on the left side*/}

        <div className="flex items-center">
          <img
                src="E-TAALIM.png"
                alt="E-TAALIM Logo"
                className="h-10 w-auto"
              /> 
        </div>



        {/*Navigation links in the middle*/}

        <div className="flex items-center space-x-8">

          <button className="text-white font-bold hover:bg-slate-800 hover:text-white px-4 py-2 rounded transition-colors">
            Home
          </button>

          <button className="text-white font-bold hover:bg-slate-800 hover:text-white px-4 py-2 rounded transition-colors">
            Courses
          </button>

          <button className="text-white font-bold hover:bg-slate-800 hover:text-white px-4 py-2 rounded transition-colors">
            About Us
          </button>

          <button className="text-white font-bold hover:bg-slate-800 hover:text-white px-4 py-2 rounded transition-colors">
            Contact Us
          </button>

        </div>

        {/*User's profile o the right side*/}
        
        <div className="flex items-center relative">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 text-white font-bold hover:bg-slate-800 px-4 py-2 rounded transition-colors"
              >
                <div className="h-8 w-8 rounded-full bg-slate-700 flex items-center justify-center text-white text-sm font-bold">
                  {user.avatar ? (
                    <img
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  ) : (
                    user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()
                  )}
                </div>
                <span>{user.name}</span>
                <span className="text-xs bg-slate-700 px-2 py-1 rounded capitalize">{user.role}</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50 border">
                  <div className="py-1">
                    <div className="px-4 py-2 text-sm font-semibold text-gray-900 border-b">My Account</div>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Profile
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Settings
                    </button>
                    <div className="border-t my-1"></div>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Log out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button className="text-white border border-white font-bold hover:bg-white hover:text-slate-900 bg-transparent px-4 py-2 rounded transition-colors">
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}
