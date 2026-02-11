'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { servicesData } from '@/data/services';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const lines = [
      `*New Quote Request*`,
      `*Name:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
      `*Email:* ${formData.email}`,
      formData.service ? `*Service:* ${formData.service}` : '',
      `*Details:* ${formData.message}`,
    ].filter(Boolean).join('\n');

    const url = `https://wa.me/19049090916?text=${encodeURIComponent(lines)}`;
    window.open(url, '_blank');

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/shower-glass-door.jpg" alt="Contact us" fill className="object-cover" />
            <div className="absolute inset-0 bg-secondary/85" />
          </div>
          <div className="relative z-10 container-max px-4 md:px-6 pt-16">
            <div className="max-w-3xl">
              <span className="inline-block bg-primary px-4 py-2 rounded-full text-white text-sm font-bold mb-6">
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                Let&apos;s Talk About<br />Your Project
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Ready to transform your home? Contact us for a free, no-obligation quote. We typically respond within a few hours!
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+19049090916" className="bg-accent hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (904) 909-0916
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="container-max px-4 md:px-6">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-3xl font-black text-secondary mb-6">Contact Info</h2>
                  <p className="text-gray-600 mb-8">
                    Give us a call or fill out the form. We typically respond within a few hours!
                  </p>
                </div>

                {/* Phone - Prominent */}
                <a href="tel:+19049090916" className="block bg-accent p-6 rounded-2xl text-white hover:bg-red-700 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-white/80">Call or Text</div>
                      <div className="text-2xl font-bold">(904) 909-0916</div>
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a href="mailto:prengaconstruction@gmail.com" className="block bg-gray-100 p-6 rounded-2xl hover:bg-gray-200 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Email Us</div>
                      <div className="text-lg font-bold text-secondary">prengaconstruction@gmail.com</div>
                    </div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a href="https://wa.me/19049090916" target="_blank" rel="noopener noreferrer" className="block bg-gray-100 p-6 rounded-2xl hover:bg-green-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">WhatsApp</div>
                      <div className="text-lg font-bold text-green-600">Chat with Us</div>
                    </div>
                  </div>
                </a>

                {/* Service Area */}
                <div className="bg-gray-100 p-6 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Service Area</div>
                      <div className="text-lg font-bold text-secondary">All of Florida</div>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-secondary p-6 rounded-2xl text-white">
                  <h3 className="font-bold text-lg mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-white font-semibold">7 AM - 6 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-white font-semibold">8 AM - 4 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-white font-semibold">Closed</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mt-4">
                    * Emergency services available for urgent repairs
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-gray-50 p-8 md:p-10 rounded-3xl">
                  <h2 className="text-2xl font-bold text-secondary mb-2">Request a Free Quote</h2>
                  <p className="text-gray-600 mb-8">Fill out the form and we&apos;ll get back to you within 24 hours.</p>

                  {isSubmitted && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-xl mb-6">
                      Thank you! We&apos;ll be in touch soon.
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-secondary mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-secondary mb-2">Phone *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-2">Service Needed</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      >
                        <option value="">Select a service...</option>
                        {servicesData.map((service) => (
                          <option key={service.id} value={service.id}>{service.category}</option>
                        ))}
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-2">Project Details *</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-red-700 text-white text-lg font-bold py-5 rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Request'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20 bg-gray-50">
          <div className="container-max px-4 md:px-6">
            <div className="text-center mb-16">
              <span className="text-primary font-bold text-sm uppercase tracking-wider">Our Process</span>
              <h2 className="text-4xl md:text-5xl font-black text-secondary mt-2">What to Expect</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Here&apos;s what happens after you reach out to us.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Quick Response', desc: 'We\'ll respond to your inquiry within a few hours, typically same day.' },
                { step: '2', title: 'Free Consultation', desc: 'We\'ll schedule a convenient time to visit your home and discuss your project.' },
                { step: '3', title: 'Detailed Quote', desc: 'You\'ll receive a comprehensive, no-obligation quote with itemized pricing.' },
                { step: '4', title: 'Get Started', desc: 'Once approved, we\'ll schedule the work and transform your space!' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Contact Us */}
        <section className="py-20 bg-white">
          <div className="container-max px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-primary font-bold text-sm uppercase tracking-wider">Why Choose Us</span>
                <h2 className="text-4xl md:text-5xl font-black text-secondary mt-2 mb-6">
                  Your Trusted Home Improvement Partner
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  When you contact Prenga Construction, you&apos;re reaching out to a team that genuinely cares about your home and your satisfaction.
                </p>

                <div className="space-y-6">
                  {[
                    { title: 'No High-Pressure Sales', desc: 'We provide honest assessments and let the quality of our work speak for itself.' },
                    { title: 'Respect for Your Time', desc: 'We show up when we say we will and keep you informed every step of the way.' },
                    { title: 'Transparent Communication', desc: 'Ask us anything. We believe in clear, honest answers to all your questions.' },
                    { title: 'Free, No-Obligation Quotes', desc: 'Get a detailed estimate with no commitment. Take your time deciding.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-secondary">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image src="/images/bathroom-work-1.jpg" alt="Our work" fill className="object-cover" />
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image src="/images/shower-marble-progress.jpg" alt="Our work" fill className="object-cover" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image src="/images/project-4.jpg" alt="Our work" fill className="object-cover" />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image src="/images/bathroom-work-2.jpg" alt="Our work" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="container-max px-4 md:px-6">
            <div className="text-center mb-16">
              <span className="text-primary font-bold text-sm uppercase tracking-wider">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-black text-secondary mt-2">Common Questions</h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { q: 'How quickly will you respond to my inquiry?', a: 'We typically respond within a few hours during business hours. For urgent matters, give us a call for the fastest response.' },
                { q: 'Do you charge for estimates?', a: 'Never! All our estimates are completely free with no obligation. We\'ll visit your home, discuss your project, and provide a detailed quote at no cost.' },
                { q: 'What information should I have ready when I call?', a: 'It helps to know the basics: what you want done, approximate room size or project scope, and your preferred timeline. But don\'t worry if you\'re unsure - we\'ll help figure it out!' },
                { q: 'Do you work on weekends?', a: 'Yes! We work Saturdays from 8 AM to 4 PM. Sunday work can be arranged for time-sensitive projects.' },
                { q: 'How far in advance should I schedule?', a: 'For larger projects, we recommend reaching out 2-3 weeks ahead. For smaller jobs, we can often accommodate shorter timelines.' },
                { q: 'Can I get a quote over the phone?', a: 'We can provide rough estimates over the phone for simple projects, but for accurate pricing, an in-person visit ensures we account for all details.' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-secondary mb-2">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-secondary">
          <div className="container-max px-4 md:px-6">
            <div className="text-center mb-12">
              <span className="text-primary font-bold text-sm uppercase tracking-wider">Coverage</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mt-2">We Serve All of Florida</h2>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                From Jacksonville to Miami, Tampa to Orlando - wherever you are in the Sunshine State, we&apos;re ready to help.
              </p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {[
                'Jacksonville', 'Miami', 'Tampa', 'Orlando', 'St. Petersburg', 'Fort Lauderdale',
                'Tallahassee', 'Gainesville', 'West Palm Beach', 'Cape Coral', 'Clearwater', 'Palm Bay',
              ].map((city, i) => (
                <div key={i} className="bg-white/10 px-4 py-3 rounded-lg text-center">
                  <span className="text-white font-medium">{city}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 mt-6">+ Many more cities throughout Florida</p>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 bg-white">
          <div className="container-max px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <svg className="w-16 h-16 text-primary/20 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-2xl md:text-3xl font-medium text-secondary mb-8">
                &ldquo;From our first phone call to project completion, Prenga Construction was professional and responsive. They answered all our questions, showed up on time, and delivered exactly what they promised. Highly recommend!&rdquo;
              </blockquote>
              <div>
                <div className="font-bold text-secondary text-lg">Jennifer & David M.</div>
                <div className="text-gray-500">Tampa, FL</div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact CTA */}
        <section className="py-20 bg-primary">
          <div className="container-max px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-white/90 text-lg mb-6">
                  Don&apos;t wait to start your home improvement project. Call us now or fill out the form above for a free quote!
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:+19049090916" className="bg-white text-accent hover:bg-gray-100 font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call (904) 909-0916
                  </a>
                  <Link href="/services" className="bg-transparent text-white hover:bg-white/10 font-bold px-8 py-4 rounded-full border-2 border-white transition-colors">
                    View Our Services
                  </Link>
                </div>
              </div>
              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4">Quick Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-semibold">(904) 909-0916</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>prengaconstruction@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Serving All of Florida</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Mon-Fri: 7AM-6PM | Sat: 8AM-4PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
