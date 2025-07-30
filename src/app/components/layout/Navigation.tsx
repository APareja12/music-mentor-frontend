'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">🎵</span>
            </div>
            <span className="text-xl font-bold text-gradient">
              Music Mentorship
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Courses
            </Link>
            <Link
              href="/pricing"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/login"
              className="btn-outline px-4 py-2 rounded-xl text-sm font-medium text-white"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="btn-primary px-4 py-2 rounded-xl text-sm font-medium text-white"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden glass-button p-2 rounded-lg"
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-card border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            <Link
              href="/"
              className="block px-3 py-3 text-gray-300 hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="block px-3 py-3 text-gray-300 hover:text-white"
            >
              Courses
            </Link>
            <Link
              href="/pricing"
              className="block px-3 py-3 text-gray-300 hover:text-white"
            >
              Pricing
            </Link>
            <div className="border-t border-white/10 pt-4 space-y-2">
              <Link
                href="/login"
                className="block w-full btn-outline px-4 py-3 rounded-xl text-center font-medium text-white"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="block w-full btn-primary px-4 py-3 rounded-xl text-center font-medium text-white"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
