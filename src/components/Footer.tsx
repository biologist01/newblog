import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
       <footer className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <div className="backdrop-blur-md bg-white/10 p-4 rounded-lg inline-block">
          <p className="text-sm md:text-base">&copy; 2024 Genetic Insights. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Link href="/privacy">
              <span className="hover:text-pink-300 cursor-pointer">Privacy Policy</span>
            </Link>
            <Link href="/terms">
              <span className="hover:text-pink-300 cursor-pointer">Terms of Service</span>
            </Link>
            <Link href="/contact">
              <span className="hover:text-pink-300 cursor-pointer">Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
