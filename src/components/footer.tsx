'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6 md:px-24">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-[1.7fr_1fr_1fr] text-center md:text-left">

        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/robotImage.webp"
              alt="Agentia World Logo"
              width={50}
              height={50}
              className="object-contain"
            />
           <span className="text-cyan-400 font-semibold text-2xl tracking-wide">Agentia</span>
           <span className="text-white font-semibold text-2xl tracking-wide"> World</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Next-generation AI agents powering the future of enterprise intelligence.
          </p>
          <div className="flex gap-5 mt-2">
            <a href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition-all duration-300"><FaGithub size={22} /></a>
            <a href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition-all duration-300"><FaLinkedin size={22} /></a>
            <a href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray-400 hover:text-white transition-all duration-300"><FaTwitter size={22} /></a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg">Product</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white transition-all duration-300">Features</Link></li>
              <li><Link href="#" className="hover:text-white transition-all duration-300">Pricing</Link></li>
              <li><Link href="#" className="hover:text-white transition-all duration-300">API</Link></li>
              <li><Link href="#" className="hover:text-white transition-all duration-300">Documentation</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">Resources</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white transition-all duration-300">Community</Link></li>
              <li><Link href="#" className="hover:text-white transition-all duration-300">Support</Link></li>
              <li><Link href="#" className="hover:text-white transition-all duration-300">Privacy</Link></li>
              <li><Link href="#" className="hover:text-white transition-all duration-300">Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-white font-bold text-lg">Company</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link href="#" className="hover:text-white transition-all duration-300">About</Link></li>
            <li><Link href="#" className="hover:text-white transition-all duration-300">Blog</Link></li>
            <li><Link href="#" className="hover:text-white transition-all duration-300">Careers</Link></li>
            <li><Link href="#" className="hover:text-white transition-all duration-300">Contact</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Footer Text */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © 2025 Agentia World. All Rights Reserved.
      </div>
    </footer>
  );
}



