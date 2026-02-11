'use client';

import { useState } from 'react';
import Link from 'next/link';
import { servicesData } from '@/data/services';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            What We Do
          </span>
          <h2 className="section-title section-title-center">Our Services</h2>
          <p className="text-gray text-lg max-w-2xl mx-auto mt-6">
            Comprehensive residential construction and home improvement services
            to transform your home into your dream space.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group relative"
              onMouseEnter={() => setActiveCategory(service.id)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div
                className={`bg-gray-light rounded-2xl p-6 h-full transition-all duration-300 cursor-pointer border-2 ${
                  activeCategory === service.id
                    ? 'border-primary bg-white shadow-xl'
                    : 'border-transparent hover:border-gray-200 hover:shadow-lg'
                }`}
              >
                {/* Header */}
                <div className="mb-4">
                  <h3
                    className={`text-xl font-bold transition-colors ${
                      activeCategory === service.id
                        ? 'text-primary'
                        : 'text-secondary group-hover:text-primary'
                    }`}
                  >
                    {service.category}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Services Preview */}
                <ul className="space-y-2 mb-6">
                  {service.services.slice(0, 3).map((item, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      <span className="truncate">{item}</span>
                    </li>
                  ))}
                  {service.services.length > 3 && (
                    <li className="text-sm text-gray-500 italic">
                      +{service.services.length - 3} more services
                    </li>
                  )}
                </ul>

                {/* CTA */}
                <Link
                  href={`/${service.slug}`}
                  className={`inline-flex items-center gap-2 font-semibold text-sm transition-all ${
                    activeCategory === service.id
                      ? 'text-primary'
                      : 'text-secondary group-hover:text-primary'
                  }`}
                >
                  Learn More
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      activeCategory === service.id ? 'translate-x-1' : 'group-hover:translate-x-1'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-secondary to-secondary-light rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Don&apos;t See What You Need?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We offer custom solutions for all your home improvement needs. Contact
            us to discuss your project and get a free estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+19049090916"
              className="btn-primary"
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
              Call (904) 909-0916
            </a>
            <a href="#contact" className="btn-outline">
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
