import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (anchor: string) => {
    setIsOpen(false);
    navigate('/');
    // Small timeout to allow navigation to home before scrolling
    setTimeout(() => {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <header className="sticky top-0 z-50 bg-editorial-bg/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img
              src="/logo.png"
              alt="Utipro Plus AF Logo"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <button
              onClick={() => handleNavClick('dual-action')}
              className="text-editorial-slate hover:text-editorial-accent transition-colors text-sm uppercase tracking-widest font-medium"
            >
              Dual Action
            </button>
            <button
              onClick={() => handleNavClick('campaign-assets')}
              className="text-editorial-slate hover:text-editorial-accent transition-colors text-sm uppercase tracking-widest font-medium"
            >
              Campaign Assets
            </button>
            <Link
              to="/rationale"
              className="text-editorial-slate hover:text-editorial-accent transition-colors text-sm uppercase tracking-widest font-medium"
            >
              Rationale
            </Link>
            <Link
              to="/references"
              className="text-editorial-slate hover:text-editorial-accent transition-colors text-sm uppercase tracking-widest font-medium"
            >
              References
            </Link>
            <button
              className="bg-editorial-text text-white px-6 py-2.5 rounded-full flex items-center space-x-2 hover:bg-editorial-accent transition-colors duration-300 shadow-md"
            >
              <ShoppingBag size={18} />
              <span className="text-sm font-semibold tracking-wide">Shop Now</span>
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-editorial-slate hover:text-editorial-text focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-editorial-bg border-b border-stone-200 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center py-6">
            <button
              onClick={() => handleNavClick('dual-action')}
              className="block px-3 py-2 text-base font-medium text-editorial-slate hover:text-editorial-accent"
            >
              Dual Action
            </button>
            <button
              onClick={() => handleNavClick('campaign-assets')}
              className="block px-3 py-2 text-base font-medium text-editorial-slate hover:text-editorial-accent"
            >
              Campaign Assets
            </button>
            <Link
              to="/rationale"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-editorial-slate hover:text-editorial-accent"
            >
              Rationale
            </Link>
            <Link
              to="/references"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-editorial-slate hover:text-editorial-accent"
            >
              References
            </Link>
            <button
              className="mt-4 w-3/4 text-center bg-editorial-text text-white px-6 py-3 rounded-full hover:bg-editorial-accent transition-colors flex items-center justify-center space-x-2"
            >
              <ShoppingBag size={18} />
              <span> <a href="https://www.utipro.ie/utiproduct/"> Shop Now</a></span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;