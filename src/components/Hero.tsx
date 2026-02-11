'use client';

import Link from 'next/link';
import { servicesData } from '@/data/services';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-secondary pt-32 md:pt-40 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-secondary to-secondary-light opacity-90" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Red accent shapes */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container-max px-4 md:px-6">
        {/* Main Hero Content */}
        <div className="max-w-4xl mb-16">
          <div className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in">
            Licensed & Insured Contractors
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Building Dreams,<br />
            <span className="text-primary">One Project</span> at a Time
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl animate-fade-in-up delay-200">
            Prenga Construction Inc delivers exceptional craftsmanship for all your
            residential construction and home improvement needs. Quality work,
            honest pricing, and results you can trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <a
              href="tel:+19049090916"
              className="btn-primary text-lg px-8 py-4"
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              (904) 909-0916
            </a>
            <a href="#contact" className="btn-outline text-lg px-8 py-4">
              Get Free Estimate
            </a>
          </div>
        </div>

        {/* Services Quick Access */}
        <div className="animate-fade-in-up delay-400">
          <h2 className="text-white text-xl font-semibold mb-6 flex items-center gap-3">
            <span className="w-12 h-0.5 bg-primary"></span>
            Our Services
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {servicesData.map((service, index) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 rounded-lg p-4 transition-all duration-300 text-center"
                style={{ animationDelay: `${0.5 + index * 0.05}s` }}
              >
                <span className="text-white group-hover:text-primary text-sm font-medium transition-colors block">
                  {service.category}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up delay-600">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-400 text-sm">Projects Completed</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
            <div className="text-gray-400 text-sm">Satisfaction Rate</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Support Available</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-white/50 hover:text-white transition-colors">
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
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
