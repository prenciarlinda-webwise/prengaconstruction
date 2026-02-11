'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { servicesData } from '@/data/services';

const popularServices = [
  { name: 'Bathroom Remodel', slug: 'bathroom-remodeling' },
  { name: 'Painting', slug: 'painting' },
  { name: 'Flooring', slug: 'flooring' },
  { name: 'Kitchen Remodel', slug: 'kitchen-remodeling' },
  { name: 'Tile Work', slug: 'tile-masonry' },
  { name: 'Carpentry', slug: 'carpentry' },
];

export default function Home() {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState('');

  const handleServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedService) {
      router.push(`/${selectedService}`);
    } else {
      router.push('/services');
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero - HomeAdvisor Inspired */}
        <section className="relative min-h-[90vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/images/living-room-fireplace.jpg"
              alt="Beautiful home renovation"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </div>

          <div className="relative z-10 container-max px-4 md:px-6 py-32">
            <div className="max-w-3xl">
              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white text-sm font-medium ml-1">5.0 Rating</span>
                </div>
                <div className="text-white/70 text-sm">500+ Projects Completed</div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-4">
                Find Trusted Home
                <span className="block text-primary">Improvement Pros</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Quality craftsmanship for your home. Licensed, insured, and serving all of Florida.
              </p>

              {/* Service Selection Box - HomeAdvisor Style */}
              <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-xl">
                <form onSubmit={handleServiceSubmit}>
                  <label className="block text-secondary font-bold mb-3">
                    What can we help you with?
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="flex-1 px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-secondary focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    >
                      <option value="">Select a service...</option>
                      {servicesData.map((service) => (
                        <option key={service.id} value={service.slug}>
                          {service.category}
                        </option>
                      ))}
                    </select>
                    <button
                      type="submit"
                      className="bg-accent hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl transition-colors whitespace-nowrap"
                    >
                      Get Started
                    </button>
                  </div>
                </form>

                {/* Quick Links */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-gray-500 text-sm">Popular:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['Bathroom Remodel', 'Painting', 'Flooring', 'Tile Work'].map((service) => (
                      <Link
                        key={service}
                        href={`/${service.toLowerCase().replace(' ', '-')}`}
                        className="text-primary text-sm hover:underline"
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 mt-8 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Licensed & Insured
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  15+ Years Experience
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Free Estimates
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Service Buttons - HomeAdvisor Style */}
        <section className="py-8 bg-white border-b">
          <div className="container-max px-4 md:px-6">
            <div className="flex flex-wrap justify-center gap-3">
              {popularServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/${service.slug}`}
                  className="bg-gray-50 hover:bg-accent hover:text-white px-5 py-3 rounded-full text-secondary font-medium transition-all"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Services - Card Style with Ratings */}
        <section className="py-16 bg-gray-50">
          <div className="container-max px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-secondary">Popular Projects</h2>
                <p className="text-gray-600 mt-2">
                  Browse our most requested services
                </p>
              </div>
              <Link href="/services" className="text-primary font-bold hover:underline inline-flex items-center gap-1">
                View all services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesData.slice(0, 6).map((service, i) => (
                <Link
                  key={service.id}
                  href={`/${service.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="relative h-48">
                    <Image
                      src={`/images/${i === 0 ? 'bathroom-remodel-white.jpg' : i === 1 ? 'living-room-renovation.jpg' : i === 2 ? 'tile-floor-pattern.jpg' : i === 3 ? 'living-room-fireplace.jpg' : i === 4 ? 'shower-dark-tile.jpg' : 'project-3.jpg'}`}
                      alt={service.category}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                        {service.category}
                      </h3>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm text-gray-600">5.0</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-3">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-semibold text-sm">Get Free Quote</span>
                      <svg className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="container-max px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-secondary">How It Works</h2>
              <p className="text-gray-600 mt-2 max-w-xl mx-auto">
                Getting started is easy. Here&apos;s how we help transform your home.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Tell Us Your Project', desc: 'Select a service or call us to describe what you need done.' },
                { step: '2', title: 'Get a Free Quote', desc: 'We\'ll provide a detailed, no-obligation estimate for your project.' },
                { step: '3', title: 'Schedule the Work', desc: 'Pick a time that works for you. We\'ll confirm and show up on time.' },
                { step: '4', title: 'Enjoy the Results', desc: 'We complete the work to your satisfaction. That\'s our guarantee.' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-10 bg-secondary">
          <div className="container-max px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { number: '500+', label: 'Projects Completed' },
                { number: '15+', label: 'Years Experience' },
                { number: '5.0', label: 'Average Rating', star: true },
                { number: '50+', label: 'Cities Served' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-3xl md:text-4xl font-black text-primary">{stat.number}</span>
                    {stat.star && (
                      <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    )}
                  </div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Work */}
        <section className="py-16 bg-white">
          <div className="container-max px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-secondary">Recent Projects</h2>
                <p className="text-gray-600 mt-2">
                  See the quality of our work
                </p>
              </div>
              <Link href="/gallery" className="text-primary font-bold hover:underline inline-flex items-center gap-1">
                View all projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { img: 'marble-shower-bench.jpg', label: 'Bathroom' },
                { img: 'bathroom-herringbone.jpg', label: 'Tile Work' },
                { img: 'tile-floor-pattern.jpg', label: 'Flooring' },
                { img: 'shower-glass-door.jpg', label: 'Shower' },
                { img: 'living-room-renovation.jpg', label: 'Remodel' },
                { img: 'bathroom-remodel-white.jpg', label: 'Bathroom' },
                { img: 'shower-dark-tile.jpg', label: 'Tile' },
                { img: 'tile-floor-greek.jpg', label: 'Flooring' },
              ].map((project, i) => (
                <Link
                  key={i}
                  href="/gallery"
                  className="relative aspect-square rounded-xl overflow-hidden group"
                >
                  <Image
                    src={`/images/${project.img}`}
                    alt={project.label}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      {project.label}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container-max px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
                  Why Florida Homeowners Choose Us
                </h2>
                <div className="space-y-4">
                  {[
                    { title: 'Licensed & Fully Insured', desc: 'Complete protection and peace of mind for every project.' },
                    { title: 'Transparent Pricing', desc: 'Detailed quotes with no hidden fees. What we quote is what you pay.' },
                    { title: 'Quality Craftsmanship', desc: 'Skilled professionals using premium materials for lasting results.' },
                    { title: 'On-Time Completion', desc: 'We respect your time and stick to agreed timelines.' },
                    { title: 'Satisfaction Guaranteed', desc: 'We\'re not finished until you\'re completely happy with our work.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-secondary">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image src="/images/bathroom-remodel-white.jpg" alt="Our work" fill className="object-cover" />
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden mt-8">
                    <Image src="/images/shower-marble-progress.jpg" alt="Our work" fill className="object-cover" />
                  </div>
                </div>
                <div className="absolute -bottom-4 left-4 bg-white p-4 rounded-xl shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="font-bold text-secondary">5.0</span>
                    <span className="text-gray-500 text-sm">from 500+ projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container-max px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-secondary">What Clients Say</h2>
              <p className="text-gray-600 mt-2">Real reviews from Florida homeowners</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { quote: "Prenga Construction transformed our outdated bathroom into a spa-like retreat. The attention to detail was incredible!", name: "Sarah M.", location: "Jacksonville, FL", project: "Bathroom Remodel" },
                { quote: "Professional, punctual, and the quality exceeded our expectations. Already hired them for our kitchen!", name: "Michael R.", location: "Orlando, FL", project: "Tile Installation" },
                { quote: "Best decision we made. Fair pricing, excellent communication, and our floors look stunning.", name: "Jennifer L.", location: "Tampa, FL", project: "Flooring" },
              ].map((testimonial, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-secondary">{testimonial.name}</div>
                      <div className="text-gray-500 text-sm">{testimonial.location}</div>
                    </div>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{testimonial.project}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-gray-50">
          <div className="container-max px-4 md:px-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-black text-secondary">Serving All of Florida</h2>
              <p className="text-gray-600 mt-2">
                From the Panhandle to the Keys, we&apos;re here to help
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Jacksonville', 'Miami', 'Tampa', 'Orlando', 'St. Petersburg', 'Fort Lauderdale',
                'Tallahassee', 'Cape Coral', 'Pembroke Pines', 'Hollywood', 'Gainesville', 'Clearwater',
              ].map((city) => (
                <span key={city} className="bg-white px-4 py-2 rounded-full text-secondary text-sm font-medium shadow-sm">
                  {city}
                </span>
              ))}
              <span className="bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-bold">
                + 40 More Cities
              </span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container-max px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-white/90 mb-8 text-lg">
                Get a free, no-obligation quote today. Call us or fill out our form - we typically respond within hours.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="tel:+19049090916"
                  className="bg-white hover:bg-gray-100 text-accent font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (904) 909-0916
                </a>
                <Link
                  href="/contact"
                  className="bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-4 rounded-full border-2 border-white inline-flex items-center gap-2 transition-all"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
