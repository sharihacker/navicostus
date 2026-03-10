import React, { useState } from "react";
import {
  Menu,
  X,
  Landmark,
  HeartPulse,
  Info,
  Mail,
  TrendingUp,
  Shield,
  Pill,
} from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", icon: <Landmark className="w-4 h-4" /> },
    {
      name: "Medicare Part B",
      href: "/medicare-part-b",
      icon: <HeartPulse className="w-4 h-4" />,
    },
    {
      name: "Medicare Advantage",
      href: "/medicare-advantage-2026",
      icon: <Shield className="w-4 h-4" />,
    },
    {
      name: "Drug Coverage",
      href: "/prescription-drug-coverage-2026",
      icon: <Pill className="w-4 h-4" />,
    },
    {
      name: "Social Security",
      href: "/social-security-cola-2026",
      icon: <TrendingUp className="w-4 h-4" />,
    },
    { name: "About", href: "/about", icon: <Info className="w-4 h-4" /> },
    { name: "Contact", href: "/contact", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg text-white">
                <HeartPulse size={24} />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">
                Navicostus
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 px-2 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-3"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
