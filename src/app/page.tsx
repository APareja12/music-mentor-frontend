'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Music Mentorship
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex space-x-6">
                <a
                  href="#home"
                  className="text-slate-300 hover:text-white text-sm transition-colors"
                >
                  Home
                </a>
                <a
                  href="#features"
                  className="text-slate-300 hover:text-white text-sm transition-colors"
                >
                  Features
                </a>
                <a
                  href="#instructors"
                  className="text-slate-300 hover:text-white text-sm transition-colors"
                >
                  Instructors
                </a>
                <a
                  href="#testimonials"
                  className="text-slate-300 hover:text-white text-sm transition-colors"
                >
                  Reviews
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Link
                  href="/login"
                  className="px-4 py-2 text-slate-300 hover:text-white text-sm transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold text-sm hover:shadow-lg transition-all"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden bg-white/10 border border-slate-600 rounded-lg p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-slate-700 py-4">
              <div className="flex flex-col space-y-3">
                <a href="#home" className="text-slate-300 hover:text-white">
                  Home
                </a>
                <a href="#features" className="text-slate-300 hover:text-white">
                  Features
                </a>
                <a
                  href="#instructors"
                  className="text-slate-300 hover:text-white"
                >
                  Instructors
                </a>
                <a
                  href="#testimonials"
                  className="text-slate-300 hover:text-white"
                >
                  Reviews
                </a>
                <div className="pt-3 border-t border-slate-700 flex flex-col space-y-2">
                  <Link
                    href="/login"
                    className="text-left text-slate-300 hover:text-white"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold text-center"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 px-4"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/10 w-48 h-48 bg-purple-500/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/10 w-64 h-64 bg-pink-500/15 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 w-full max-w-6xl text-center">
          <div className="space-y-6">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <div className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                Master Your Musical
              </div>
              <div className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Journey
              </div>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed px-4">
              Connect with world-class music instructors and unlock your
              potential through personalized 1-on-1 mentorship.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 max-w-md mx-auto">
              <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-semibold flex items-center justify-center gap-2 shadow-xl hover:shadow-purple-500/25 transition-all">
                Start Learning Today
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>

              <button className="w-full sm:w-auto px-6 py-3 bg-slate-800/50 backdrop-blur-md border border-slate-600 rounded-xl text-white font-semibold flex items-center justify-center gap-2 hover:bg-slate-700/50 transition-all">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 3.7a1 1 0 011.4-.4l8 4a1 1 0 010 1.8l-8 4a1 1 0 01-1.4-1.4V3.7z" />
                </svg>
                Watch Demo
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col items-center gap-3 pt-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-slate-300 text-sm text-center">
                Rated 4.9/5 by 10,000+ students
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                number: '10,000+',
                label: 'Students Taught',
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                ),
              },
              {
                number: '500+',
                label: 'Expert Instructors',
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    />
                  </svg>
                ),
              },
              {
                number: '50+',
                label: 'Instruments',
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                    />
                  </svg>
                ),
              },
              {
                number: '95%',
                label: 'Success Rate',
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                ),
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:transform hover:scale-105 transition-all"
              >
                <div className="flex justify-center mb-4 text-purple-400">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-24 bg-gradient-to-b from-slate-800/10 to-slate-900/10"
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Why Choose Music Mentorship?
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Experience the difference that personalized, expert instruction
              can make in your musical journey.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
                title: 'Personalized Learning',
                description:
                  'Every lesson is tailored to your skill level, musical goals, and learning style.',
                gradient: 'from-indigo-500 to-purple-600',
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                ),
                title: 'Expert Instructors',
                description:
                  'Learn from accomplished musicians with years of professional experience.',
                gradient: 'from-pink-500 to-rose-600',
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                    />
                  </svg>
                ),
                title: 'All Instruments',
                description:
                  'From guitar and piano to violin and drums - master any instrument you love.',
                gradient: 'from-blue-500 to-cyan-600',
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: 'Flexible Schedule',
                description:
                  'Learn at your own pace with 24/7 access to lessons and practice materials.',
                gradient: 'from-green-500 to-teal-600',
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                ),
                title: 'Proven Results',
                description:
                  'Join thousands of students who have achieved their musical dreams with us.',
                gradient: 'from-yellow-500 to-orange-600',
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
                title: 'Community Support',
                description:
                  'Connect with fellow musicians and get motivation from our vibrant community.',
                gradient: 'from-purple-500 to-pink-600',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:transform hover:scale-105 transition-all relative overflow-hidden group"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient}`}
                />
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section id="instructors" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10" />

        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-4">
              Meet Our Star Instructors
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Learn from the best. Our instructors are accomplished musicians,
              recording artists, and educators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Martinez',
                instrument: 'Guitar & Bass',
                image:
                  'https://images.unsplash.com/photo-1494790108755-2616c6b1e54c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
                bio: 'Berklee graduate with 15+ years teaching experience',
                specialties: ['Rock', 'Blues', 'Jazz'],
              },
              {
                name: 'David Chen',
                instrument: 'Piano & Composition',
                image:
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                bio: 'Classical pianist and film composer',
                specialties: ['Classical', 'Jazz', 'Film Scoring'],
              },
              {
                name: 'Maya Patel',
                instrument: 'Violin & Orchestra',
                image:
                  'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80',
                bio: 'Former symphony orchestra member',
                specialties: ['Classical', 'Contemporary', 'Chamber Music'],
              },
            ].map((instructor, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center hover:transform hover:scale-105 transition-all group"
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-purple-500/20 group-hover:ring-purple-500/40 transition-all">
                    <img
                      src={instructor.image}
                      alt={`${instructor.name} - ${instructor.instrument} instructor`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {instructor.name}
                </h3>
                <p className="text-purple-400 font-semibold mb-4">
                  {instructor.instrument}
                </p>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {instructor.bio}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {instructor.specialties.map((specialty, i) => (
                    <span
                      key={i}
                      className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-24 bg-gradient-to-b from-slate-900/80 to-slate-800/30"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Hear from our community of musicians who have transformed their
              skills and achieved their dreams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Alex Johnson',
                role: 'Beginner to Performer',
                content:
                  'I went from never touching a guitar to performing at local venues in just 8 months. The personalized approach made all the difference.',
                rating: 5,
                progress: 'Beginner → Stage Performer',
              },
              {
                name: 'Emily Rodriguez',
                role: 'Classical Pianist',
                content:
                  'My instructor helped me prepare for conservatory auditions. I got accepted to my dream school with a scholarship!',
                rating: 5,
                progress: 'Student → Conservatory',
              },
              {
                name: 'Marcus Thompson',
                role: 'Jazz Enthusiast',
                content:
                  'The jazz theory and improvisation lessons opened up a whole new world of music for me. Absolutely incredible teaching.',
                rating: 5,
                progress: 'Hobbyist → Jazz Musician',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:transform hover:scale-105 transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-200 mb-6 leading-relaxed text-lg">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white text-xl">
                    👤
                  </div>
                  <div>
                    <div className="font-bold text-white mb-1">
                      {testimonial.name}
                    </div>
                    <div className="text-green-400 text-sm font-medium">
                      {testimonial.progress}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 sm:p-16 border border-white/10 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent mb-6">
              Ready to Begin Your Musical Journey?
            </h2>
            <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have discovered their musical
              potential. Start with a free trial lesson today.
            </p>
            <div className="flex flex-col items-center gap-4">
              <button className="px-10 py-4 text-xl bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-white font-semibold flex items-center gap-3 shadow-2xl hover:shadow-purple-500/40 transition-all hover:scale-105">
                Start Free Trial
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
              <p className="text-slate-400 text-sm">
                No credit card required • Cancel anytime • 7-day free trial
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 bg-slate-900/80">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Music Mentorship
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Empowering musicians of all levels to achieve their dreams
                through personalized instruction and expert mentorship.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <div className="flex flex-col gap-2">
                {[
                  'About Us',
                  'Instructors',
                  'Courses',
                  'Pricing',
                  'Contact',
                ].map((link, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Instruments */}
            <div>
              <h3 className="text-white font-bold mb-4">Instruments</h3>
              <div className="flex flex-col gap-2">
                {['Guitar', 'Piano', 'Violin', 'Drums', 'Voice', 'Bass'].map(
                  (instrument, i) => (
                    <a
                      key={i}
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {instrument}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-white font-bold mb-4">Stay Updated</h3>
              <p className="text-slate-400 mb-4 text-sm">
                Get the latest tips, tutorials, and updates delivered to your
                inbox.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white flex-1 text-sm focus:outline-none focus:border-purple-500"
                />
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 border-0 rounded-lg px-4 py-2 text-white cursor-pointer text-sm font-semibold hover:shadow-lg transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2024 Music Mentorship. All rights reserved.
            </p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Support'].map(
                (link, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
