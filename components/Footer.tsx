import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-editorial-slate text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 border-b border-stone-700 pb-12">

          {/* Brand & Tagline */}
          <div className="space-y-4">
            <img
              src="/logo.png"
              alt="Utipro Plus AF Logo"
              className="h-16 w-auto object-contain"
            />
            <p className="text-stone-400 max-w-sm">
              Ready to take The Power to Prevent? Take back control of your well-being today.
            </p>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-end items-start md:items-center">
            <button className="px-6 py-3 bg-white text-editorial-text font-bold rounded-full hover:bg-stone-200 transition-colors w-full sm:w-auto">
              <a href="https://www.utipro.ie/utiproduct/" target="_blank">Buy Direct from Utipro.ie</a>
            </button>
            <button className="px-6 py-3 bg-transparent border border-stone-500 text-white font-medium rounded-full hover:border-white transition-colors flex items-center justify-center w-full sm:w-auto">
              Find at the Nearest Pharmacy
            </button>
          </div>
        </div>

        {/* Links & Disclaimer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-stone-400">

          <div>
            <h4 className="font-bold text-white mb-4">Explore</h4>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Dual Action Technology</li>
              <li className="hover:text-white cursor-pointer">Clinical Studies</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <div className="p-4 border border-editorial-accent/30 bg-editorial-accent/10 rounded-lg">
              <p className="font-bold text-editorial-accent mb-2">IMPORTANT DISCLAIMER</p>
              <p>
                This is a <strong>MOCK CAMPAIGN</strong> developed solely for academic assessment purposes.
                All clinical claims are based on information publicly available on Utipro.ie and must be substantiated by clinical evidence.
                This website is not a real e-commerce store.
              </p>
            </div>
            <p className="text-xs text-stone-500">
              © 2025 Mock Campaign Project. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;