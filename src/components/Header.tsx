'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { servicesData } from '@/data/services';

const locations = [
  'Jacksonville', 'Miami', 'Tampa', 'Orlando', 'St. Petersburg', 'Fort Lauderdale',
  'Tallahassee', 'Gainesville', 'West Palm Beach', 'Cape Coral', 'Clearwater', 'Palm Bay',
  'Hollywood', 'Pembroke Pines', 'Coral Springs', 'Lakeland', 'Pompano Beach', 'Davie',
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const locationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
      if (locationsRef.current && !locationsRef.current.contains(event.target as Node)) {
        setLocationsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-white py-3'
      }`}
    >
      <div className="container-max px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/prenga_construction_logo.png"
              alt="Prenga Construction Inc"
              width={200}
              height={55}
              className="h-11 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Home
            </Link>

            {/* Services Dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => { setServicesOpen(!servicesOpen); setLocationsOpen(false); }}
                className="flex items-center gap-1 text-gray-700 hover:text-primary font-medium transition-colors"
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  <div className="max-h-96 overflow-y-auto">
                    {servicesData.map((service) => (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        {service.category}
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 mt-2 pt-2 px-4 pb-2">
                    <Link
                      href="/services"
                      className="text-primary font-semibold text-sm hover:underline"
                      onClick={() => setServicesOpen(false)}
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div ref={locationsRef} className="relative">
              <button
                onClick={() => { setLocationsOpen(!locationsOpen); setServicesOpen(false); }}
                className="flex items-center gap-1 text-gray-700 hover:text-primary font-medium transition-colors"
              >
                Locations
                <svg className={`w-4 h-4 transition-transform ${locationsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {locationsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Serving All of Florida
                    </div>
                  </div>
                  <div className="max-h-72 overflow-y-auto py-1">
                    {locations.map((location) => (
                      <Link
                        key={location}
                        href="/contact"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                        onClick={() => setLocationsOpen(false)}
                      >
                        {location}
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 mt-1 pt-2 px-4 pb-2">
                    <span className="text-gray-500 text-sm">+ Many more cities</span>
                  </div>
                </div>
              )}
            </div>

            <Link href="/gallery" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Our Work
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Contact
            </Link>

            <a
              href="tel:+19042405598"
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-5 py-2.5 rounded-full inline-flex items-center gap-2 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (904) 240-5598
            </a>
          </nav>

          {/* Mobile: Phone + Menu */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="tel:+19042405598"
              className="bg-primary text-white p-2.5 rounded-full"
              aria-label="Call us"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 w-full bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-full bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[600px] pb-4' : 'max-h-0'}`}>
          <nav className="flex flex-col gap-1 pt-4 border-t">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary hover:bg-gray-50 font-medium py-3 px-4 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between text-gray-700 hover:text-primary hover:bg-gray-50 font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <div className="bg-gray-50 rounded-lg mx-2 mb-2">
                  {servicesData.slice(0, 8).map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="block py-2.5 px-4 text-gray-600 hover:text-primary text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.category}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="block py-2.5 px-4 text-primary font-semibold text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    View All Services →
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Locations Dropdown */}
            <div>
              <button
                onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                className="w-full flex items-center justify-between text-gray-700 hover:text-primary hover:bg-gray-50 font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Locations
                <svg className={`w-4 h-4 transition-transform ${mobileLocationsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileLocationsOpen && (
                <div className="bg-gray-50 rounded-lg mx-2 mb-2">
                  <div className="py-2 px-4 text-gray-500 text-sm flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Serving All of Florida
                  </div>
                  {locations.slice(0, 6).map((location) => (
                    <Link
                      key={location}
                      href="/contact"
                      className="block py-2 px-4 text-gray-600 hover:text-primary text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {location}
                    </Link>
                  ))}
                  <div className="py-2 px-4 text-gray-500 text-sm">+ Many more cities</div>
                </div>
              )}
            </div>

            <Link
              href="/gallery"
              className="text-gray-700 hover:text-primary hover:bg-gray-50 font-medium py-3 px-4 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Work
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary hover:bg-gray-50 font-medium py-3 px-4 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary hover:bg-gray-50 font-medium py-3 px-4 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
