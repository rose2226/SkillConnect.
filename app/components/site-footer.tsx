import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="container py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">SkillConnect</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering entrepreneurs through accessible skills development and networking opportunities via SMS, USSD,
              and voice channels.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="bg-gray-800 h-1.5 w-1.5 rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="bg-gray-800 h-1.5 w-1.5 rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="bg-gray-800 h-1.5 w-1.5 rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="bg-gray-800 h-1.5 w-1.5 rounded-full mr-2"></span>
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="bg-gray-800 h-1.5 w-1.5 rounded-full mr-2"></span>
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Features</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/features/sms-learning"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="bg-gray-800 h-1.5 w-1.5 rounded-full mr-2"></span>
                  SMS Learning
                </Link>
              </li>
              <li>
                <Link
                  href="/features/ussd-assessments"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="bg-gray-800 h-1.5 w-1.5 rounded-full mr-2"></span>
                  USSD Assessments
                </Link>
              </li>
              <li>
                <Link
                  href="/features/mentor-matching"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="bg-gray-800 h-1.5 w-1.5 rounded-full mr-2"></span>
                  Mentor Matching
                </Link>
              </li>
              <li>
                <Link
                  href="/features/voice-learning"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="bg-gray-800 h-1.5 w-1.5 rounded-full mr-2"></span>
                  Voice Learning
                </Link>
              </li>
              <li>
                <Link
                  href="/features/community-chat"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <span className="bg-gray-800 h-1.5 w-1.5 rounded-full mr-2"></span>
                  Community Chat
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-gray-800 p-2 rounded-full mr-3 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300">+254 700 000000</p>
                  <p className="text-gray-400 text-sm">Mon-Fri 9am-5pm</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-gray-800 p-2 rounded-full mr-3 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300">info@skillconnect.com</p>
                  <p className="text-gray-400 text-sm">Email us anytime</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-gray-800 p-2 rounded-full mr-3 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300">123 Innovation Hub</p>
                  <p className="text-gray-400 text-sm">Nairobi, Kenya</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} SkillConnect. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

