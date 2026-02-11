import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Prenga Construction Inc',
  description: 'Learn about Prenga Construction Inc - over 15 years of quality home improvement services across Florida. Licensed, insured, and committed to excellence.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-32 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/living-room-fireplace.jpg" alt="Our work" fill className="object-cover" />
            <div className="absolute inset-0 bg-secondary/80" />
          </div>
          <div className="relative z-10 container-max px-4 md:px-6 pt-16">
            <div className="max-w-3xl">
              <span className="inline-block bg-primary px-4 py-2 rounded-full text-white text-sm font-bold mb-6">
                About Us
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                Building Trust,<br />One Home at a Time
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                For over 15 years, we&apos;ve been transforming homes across Florida with quality craftsmanship and dedicated service. Every project is personal to us.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold">500+ Projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold">Statewide Service</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="container-max px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-primary font-bold text-sm uppercase tracking-wider">Our Story</span>
                <h2 className="text-4xl md:text-5xl font-black text-secondary mt-2 mb-6">
                  From Humble Beginnings to Statewide Service
                </h2>
                <div className="space-y-4 text-gray-600 text-lg">
                  <p>
                    Prenga Construction Inc started with a simple mission: deliver exceptional quality work while treating every customer like family. What began as a small operation has grown into a trusted name across Florida.
                  </p>
                  <p>
                    Our founder&apos;s commitment to excellence and attention to detail has been the foundation of our success. Today, we carry forward that same dedication in every project we undertake.
                  </p>
                  <p>
                    We specialize in painting, trim carpentry, pressure washing, and comprehensive home remodeling. No job is too big or small for our skilled team.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-accent hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all">
                    Get Free Quote
                  </Link>
                  <Link href="/services" className="bg-gray-100 hover:bg-gray-200 text-secondary font-bold px-8 py-4 rounded-full transition-all">
                    View Services
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="/images/bathroom-remodel-white.jpg" alt="Quality craftsmanship" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-primary text-white p-8 rounded-2xl shadow-xl">
                  <div className="text-5xl font-black">15+</div>
                  <div className="text-lg">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-secondary">
          <div className="container-max px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white/5 p-10 rounded-3xl border border-white/10">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-400 text-lg">
                  To transform Florida homes with exceptional craftsmanship, honest service, and unwavering commitment to customer satisfaction. We believe every homeowner deserves quality work at fair prices, delivered by skilled professionals who take pride in their craft.
                </p>
              </div>
              <div className="bg-white/5 p-10 rounded-3xl border border-white/10">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-400 text-lg">
                  To be Florida&apos;s most trusted home improvement company, known for transforming houses into dream homes. We strive to build lasting relationships with our clients, becoming their first call for any home improvement need for years to come.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-50">
          <div className="container-max px-4 md:px-6">
            <div className="text-center mb-16">
              <span className="text-primary font-bold text-sm uppercase tracking-wider">What Drives Us</span>
              <h2 className="text-4xl md:text-5xl font-black text-secondary mt-2">Our Core Values</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                These principles guide every decision we make and every project we undertake.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Quality First', desc: 'We never compromise on materials or workmanship. Every detail matters because your home matters.' },
                { title: 'Honest Pricing', desc: 'Transparent quotes with no hidden fees. What we say is what you pay, every single time.' },
                { title: 'Reliability', desc: 'We show up on time, communicate clearly, and deliver on our promises without exception.' },
                { title: 'Customer Focus', desc: 'Your satisfaction is our priority. We listen, adapt, and exceed expectations consistently.' },
              ].map((value, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="py-20 bg-white">
          <div className="container-max px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image src="/images/marble-shower-bench.jpg" alt="Our work" fill className="object-cover" />
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image src="/images/bathroom-herringbone.jpg" alt="Our work" fill className="object-cover" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image src="/images/tile-floor-pattern.jpg" alt="Our work" fill className="object-cover" />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image src="/images/shower-dark-tile.jpg" alt="Our work" fill className="object-cover" />
                  </div>
                </div>
              </div>
              <div>
                <span className="text-primary font-bold text-sm uppercase tracking-wider">Why Choose Us</span>
                <h2 className="text-4xl md:text-5xl font-black text-secondary mt-2 mb-6">
                  What Sets Us Apart
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  With hundreds of contractors in Florida, here&apos;s why homeowners consistently choose Prenga Construction for their projects.
                </p>

                <div className="space-y-6">
                  {[
                    { title: 'Family-Owned Values', desc: 'We treat every home like our own. Personal attention and care in every detail.' },
                    { title: 'Skilled Craftsmen', desc: 'Our team brings decades of combined experience across all trades.' },
                    { title: 'Full-Service Capability', desc: 'From small repairs to complete renovations, we handle it all.' },
                    { title: 'Clean & Respectful', desc: 'We protect your home, clean up daily, and treat your space with respect.' },
                    { title: 'Communication First', desc: 'Regular updates, quick responses, and no surprises along the way.' },
                    { title: 'Satisfaction Guaranteed', desc: 'We stand behind our work until you&apos;re completely happy.' },
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
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-secondary">
          <div className="container-max px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-white">By The Numbers</h2>
              <p className="text-gray-400 mt-4">Our track record speaks for itself</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '500+', label: 'Projects Completed', desc: 'Homes transformed across Florida' },
                { number: '15+', label: 'Years in Business', desc: 'Building trust since day one' },
                { number: '100%', label: 'Satisfaction Rate', desc: 'Our clients love our work' },
                { number: '50+', label: 'Florida Cities', desc: 'Serving the entire state' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-5xl md:text-6xl font-black text-primary">{stat.number}</div>
                  <div className="text-white font-bold mt-2 text-lg">{stat.label}</div>
                  <div className="text-gray-500 text-sm mt-1">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-20 bg-white">
          <div className="container-max px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-primary font-bold text-sm uppercase tracking-wider">Our Promise</span>
                <h2 className="text-4xl md:text-5xl font-black text-secondary mt-2">Our Commitment to You</h2>
              </div>

              <div className="bg-gray-50 p-8 md:p-12 rounded-3xl">
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { title: 'Free, Detailed Estimates', desc: 'No obligation quotes with itemized breakdowns so you know exactly what you&apos;re paying for.' },
                    { title: 'On-Time, Every Time', desc: 'We respect your schedule and arrive when we say we will. Your time matters.' },
                    { title: 'Quality Materials Only', desc: 'We use premium materials from trusted suppliers to ensure lasting results.' },
                    { title: 'Licensed & Fully Insured', desc: 'Complete protection for your peace of mind on every project we undertake.' },
                    { title: 'Clean Work Environment', desc: 'We protect your furniture, cover floors, and clean up thoroughly each day.' },
                    { title: 'Warranty on Our Work', desc: 'We stand behind everything we do. If there&apos;s an issue, we&apos;ll make it right.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 bg-gray-50">
          <div className="container-max px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <svg className="w-16 h-16 text-primary/20 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-2xl md:text-3xl font-medium text-secondary mb-8">
                &ldquo;Prenga Construction transformed our outdated bathroom into a modern oasis. Their attention to detail was incredible, and they finished ahead of schedule. We&apos;ve already hired them for our kitchen renovation!&rdquo;
              </blockquote>
              <div>
                <div className="font-bold text-secondary text-lg">Michael & Sarah R.</div>
                <div className="text-gray-500">Jacksonville, FL</div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-white">
          <div className="container-max px-4 md:px-6">
            <div className="text-center mb-12">
              <span className="text-primary font-bold text-sm uppercase tracking-wider">Where We Work</span>
              <h2 className="text-4xl md:text-5xl font-black text-secondary mt-2">Serving All of Florida</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                From the Panhandle to the Keys, we bring quality home improvement services to communities across the Sunshine State.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                'Jacksonville', 'Miami', 'Tampa', 'Orlando', 'St. Petersburg', 'Hialeah',
                'Tallahassee', 'Fort Lauderdale', 'Port St. Lucie', 'Cape Coral', 'Pembroke Pines', 'Hollywood',
                'Gainesville', 'Miramar', 'Coral Springs', 'Palm Bay', 'West Palm Beach', 'Clearwater',
              ].map((city, i) => (
                <div key={i} className="bg-gray-50 px-4 py-3 rounded-lg text-center">
                  <span className="text-secondary font-medium">{city}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 mt-6">And many more cities across Florida!</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="container-max px-4 md:px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Let&apos;s Build Something Great Together
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Ready to start your project? We&apos;d love to hear from you. Get a free quote today!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+19049090916" className="bg-white text-accent hover:bg-gray-100 text-lg font-bold px-10 py-5 rounded-full inline-flex items-center gap-3 transition-all hover:scale-105 shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (904) 909-0916
              </a>
              <Link href="/contact" className="bg-transparent text-white hover:bg-white/10 text-lg font-bold px-10 py-5 rounded-full border-2 border-white inline-flex items-center gap-2 transition-all">
                Contact Us Online
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
