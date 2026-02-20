import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { servicesData } from '@/data/services';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Prenga Construction Inc',
  description: 'Explore our full range of home improvement services including painting, flooring, bathroom remodeling, kitchen remodeling, and more. Serving all of Florida.',
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-32 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/bathroom-remodel/shower-glass-door.jpg" alt="Our services" fill className="object-cover" />
            <div className="absolute inset-0 bg-secondary/85" />
          </div>
          <div className="relative z-10 container-max px-4 md:px-6 pt-16">
            <div className="max-w-3xl">
              <span className="inline-block bg-primary px-4 py-2 rounded-full text-white text-sm font-bold mb-6">
                What We Offer
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                Professional Home Improvement Services
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                From minor repairs to major renovations, we offer comprehensive services to transform your home.
                Every project receives our full attention and commitment to quality.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+19049090916" className="bg-accent hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (904) 909-0916
                </a>
                <Link href="/contact" className="bg-white/10 hover:bg-white hover:text-secondary text-white font-bold px-8 py-4 rounded-full border-2 border-white transition-all">
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* All Services */}
        <section className="py-20 bg-white">
          <div className="container-max px-4 md:px-6">
            <div className="text-center mb-16">
              <span className="text-primary font-bold text-sm uppercase tracking-wider">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl font-black text-secondary mt-2">All Services</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                We offer a wide range of professional home improvement services. Click on any service to learn more.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesData.map((service, index) => (
                <Link
                  key={service.id}
                  href={`/${service.slug}`}
                  className="group bg-gray-50 hover:bg-white rounded-2xl p-6 border-2 border-transparent hover:border-primary hover:shadow-xl transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">
                      {service.category}
                    </h3>
                    <span className="text-gray-300 font-bold text-sm">0{index + 1}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {service.services.slice(0, 4).map((item, i) => (
                      <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                    {service.services.length > 4 && (
                      <li className="text-sm text-gray-400 italic pl-3">
                        +{service.services.length - 4} more services
                      </li>
                    )}
                  </ul>
                  <span className="text-primary font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    View details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Our Services */}
        <section className="py-20 bg-gray-50">
          <div className="container-max px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-primary font-bold text-sm uppercase tracking-wider">Why Us</span>
                <h2 className="text-4xl md:text-5xl font-black text-secondary mt-2 mb-6">
                  What Sets Us Apart
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  When you choose Prenga Construction, you&apos;re choosing a partner committed to excellence.
                  Here&apos;s what makes our services different.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { title: 'Licensed & Insured', desc: 'Full protection for your peace of mind on every project.' },
                    { title: 'Transparent Pricing', desc: 'Detailed quotes with no hidden fees or surprise charges.' },
                    { title: 'Quality Materials', desc: 'We use only premium materials for lasting results.' },
                    { title: 'Expert Team', desc: '15+ years of combined experience in home improvement.' },
                    { title: 'Clean Worksite', desc: 'We respect your home and clean up after ourselves daily.' },
                    { title: 'Guaranteed Work', desc: 'We stand behind our work with satisfaction guarantee.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image src="/images/bathroom-remodel/marble-shower-bench.jpg" alt="Our work" fill className="object-cover" />
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image src="/images/bathroom-remodel/bathroom-herringbone.jpg" alt="Our work" fill className="object-cover" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image src="/images/tile/tile-floor-pattern.jpg" alt="Our work" fill className="object-cover" />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image src="/images/bathroom-remodel/shower-dark-tile.jpg" alt="Our work" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-white">
          <div className="container-max px-4 md:px-6">
            <div className="text-center mb-16">
              <span className="text-primary font-bold text-sm uppercase tracking-wider">How It Works</span>
              <h2 className="text-4xl md:text-5xl font-black text-secondary mt-2">Our Simple Process</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Getting started is easy. Here&apos;s how we work together to transform your home.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Contact Us', desc: 'Give us a call or fill out our online form. Tell us about your project and we\'ll schedule a consultation.' },
                { step: '2', title: 'Free Estimate', desc: 'We\'ll visit your home, assess the project, and provide a detailed, no-obligation quote.' },
                { step: '3', title: 'Schedule Work', desc: 'Once approved, we\'ll schedule the work at a time that\'s convenient for you.' },
                { step: '4', title: 'Enjoy Results', desc: 'Our team completes the work to your satisfaction. We\'re not done until you\'re thrilled!' },
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

        {/* FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="container-max px-4 md:px-6">
            <div className="text-center mb-16">
              <span className="text-primary font-bold text-sm uppercase tracking-wider">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-black text-secondary mt-2">Common Questions</h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { q: 'Do you offer free estimates?', a: 'Yes! We provide free, no-obligation estimates for all projects. Just give us a call or fill out our contact form to get started.' },
                { q: 'Are you licensed and insured?', a: 'Absolutely. Prenga Construction is fully licensed and insured, giving you peace of mind on every project.' },
                { q: 'What areas do you serve?', a: 'We serve all of Florida! From Jacksonville to Miami and everywhere in between. Contact us to confirm service in your specific area.' },
                { q: 'How long will my project take?', a: 'Project timelines vary based on scope. During your consultation, we\'ll provide a realistic timeline and keep you updated throughout the process.' },
                { q: 'Do you provide materials or should I buy them?', a: 'We can handle everything, including sourcing quality materials at competitive prices. You can also provide your own materials if you prefer.' },
                { q: 'What payment methods do you accept?', a: 'We accept cash, checks, and major credit cards. We also offer payment plans for larger projects - just ask!' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-secondary mb-2">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="container-max px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto text-lg">
              Contact us today for a free estimate. We&apos;re excited to help bring your vision to life!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+19049090916" className="bg-white text-accent hover:bg-gray-100 font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (904) 909-0916
              </a>
              <Link href="/contact" className="bg-transparent text-white hover:bg-white/10 font-bold px-8 py-4 rounded-full border-2 border-white inline-flex items-center gap-2 transition-colors">
                Request Quote Online
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
