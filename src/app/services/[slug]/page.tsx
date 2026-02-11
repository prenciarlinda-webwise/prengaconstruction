import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { servicesData } from '@/data/services';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found | Prenga Construction Inc',
    };
  }

  return {
    title: `${service.category} | Prenga Construction Inc`,
    description: service.description,
  };
}

// Map service categories to images
const serviceImages: Record<string, string> = {
  'painting': '/images/living-room-renovation.jpg',
  'flooring': '/images/tile-floor-pattern.jpg',
  'bathroom-remodeling': '/images/bathroom-remodel-white.jpg',
  'kitchen-remodeling': '/images/living-room-fireplace.jpg',
  'tile-masonry': '/images/shower-dark-tile.jpg',
  'carpentry': '/images/living-room-fireplace.jpg',
  'pressure-washing': '/images/project-2.jpg',
  'drywall': '/images/living-room-renovation.jpg',
  'doors-windows': '/images/project-3.jpg',
  'electrical-plumbing': '/images/bathroom-work-4.jpg',
  'deck-fence': '/images/project-6.jpg',
  'demolition': '/images/project-10.jpg',
  'general-construction': '/images/project-13.jpg',
  'handyman': '/images/project-2.jpg',
};

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const otherServices = servicesData.filter((s) => s.id !== service.id).slice(0, 6);
  const heroImage = serviceImages[service.slug] || '/images/living-room-fireplace.jpg';

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image src={heroImage} alt={service.category} fill className="object-cover" />
            <div className="absolute inset-0 bg-secondary/85" />
          </div>

          <div className="relative z-10 container-max px-4 md:px-6 pt-16">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>/</li>
                <li className="text-primary">{service.category}</li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-block bg-primary px-4 py-2 rounded-full text-white text-sm font-bold mb-6">
                Professional Service
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                {service.category}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+19049090916"
                  className="bg-accent hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call (904) 909-0916
                </a>
                <Link href="/contact" className="bg-white/10 hover:bg-white hover:text-secondary text-white font-bold px-8 py-4 rounded-full border-2 border-white transition-all">
                  Get Free Estimate
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 bg-white">
          <div className="container-max px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Services */}
              <div>
                <span className="text-primary font-bold text-sm uppercase tracking-wider">What We Offer</span>
                <h2 className="text-4xl font-black text-secondary mt-2 mb-6">
                  Our {service.category} Services
                </h2>
                <p className="text-gray-600 mb-8">
                  We provide comprehensive {service.category.toLowerCase()} services tailored to your needs. Here&apos;s what we can do for you:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.services.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <span className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features & CTA */}
              <div className="space-y-8">
                {service.features && (
                  <div className="bg-secondary rounded-3xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-6">Why Choose Us for {service.category}</h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bg-primary rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="mb-6 text-white/90">
                    Contact us today for a free estimate. We&apos;ll assess your {service.category.toLowerCase()} project and provide a detailed quote with no obligation.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="tel:+19049090916"
                      className="flex items-center justify-center gap-2 bg-white text-accent hover:bg-gray-100 px-6 py-4 rounded-xl font-bold transition-colors w-full"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      (904) 909-0916
                    </a>
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition-colors w-full"
                    >
                      Send a Message
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-gray-50">
          <div className="container-max px-4 md:px-6">
            <div className="text-center mb-16">
              <span className="text-primary font-bold text-sm uppercase tracking-wider">How It Works</span>
              <h2 className="text-4xl md:text-5xl font-black text-secondary mt-2">Our {service.category} Process</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                From initial consultation to final walkthrough, here&apos;s how we deliver exceptional results.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Consultation', desc: `We visit your home to discuss your ${service.category.toLowerCase()} needs and understand your vision.` },
                { step: '2', title: 'Detailed Quote', desc: 'You receive a transparent, itemized estimate with no hidden fees or surprises.' },
                { step: '3', title: 'Expert Execution', desc: 'Our skilled team completes your project with precision and care for your home.' },
                { step: '4', title: 'Final Walkthrough', desc: 'We ensure every detail meets your expectations before considering the job done.' },
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

        {/* Why Us Section */}
        <section className="py-20 bg-white">
          <div className="container-max px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image src="/images/shower-marble-progress.jpg" alt="Our work" fill className="object-cover" />
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image src="/images/bathroom-marble-shower.jpg" alt="Our work" fill className="object-cover" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image src="/images/tile-floor-greek.jpg" alt="Our work" fill className="object-cover" />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image src="/images/shower-gray-tile.jpg" alt="Our work" fill className="object-cover" />
                  </div>
                </div>
              </div>
              <div>
                <span className="text-primary font-bold text-sm uppercase tracking-wider">Why Prenga</span>
                <h2 className="text-4xl md:text-5xl font-black text-secondary mt-2 mb-6">
                  The Prenga Difference
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  When you choose us for your {service.category.toLowerCase()} project, you&apos;re choosing quality, reliability, and a team that genuinely cares about your home.
                </p>

                <div className="space-y-6">
                  {[
                    { title: 'Licensed & Insured', desc: 'Complete protection and peace of mind for every project.' },
                    { title: '15+ Years Experience', desc: 'Expertise built through hundreds of successful projects.' },
                    { title: 'Quality Materials', desc: 'We use only premium materials from trusted suppliers.' },
                    { title: 'Clean Work Environment', desc: 'We respect your home and clean up thoroughly each day.' },
                    { title: 'Satisfaction Guaranteed', desc: 'We\'re not done until you\'re thrilled with the results.' },
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

        {/* FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="container-max px-4 md:px-6">
            <div className="text-center mb-16">
              <span className="text-primary font-bold text-sm uppercase tracking-wider">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-black text-secondary mt-2">Common Questions</h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { q: `How much does ${service.category.toLowerCase()} typically cost?`, a: `Costs vary depending on the scope, materials, and complexity of your project. We provide free, detailed estimates so you know exactly what to expect before work begins.` },
                { q: 'Do you offer free estimates?', a: 'Yes! All our estimates are completely free with no obligation. We\'ll visit your home, assess your project, and provide a detailed quote.' },
                { q: 'Are you licensed and insured?', a: 'Absolutely. Prenga Construction is fully licensed and insured, giving you complete peace of mind on every project.' },
                { q: 'How do I get started?', a: 'Simply give us a call or fill out our contact form. We\'ll schedule a convenient time to visit and discuss your project needs.' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-secondary mb-2">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-secondary">
          <div className="container-max px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '500+', label: 'Projects Completed' },
                { number: '15+', label: 'Years Experience' },
                { number: '100%', label: 'Satisfaction Rate' },
                { number: '50+', label: 'Cities Served' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl md:text-5xl font-black text-primary">{stat.number}</div>
                  <div className="text-gray-400 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="py-20 bg-white">
          <div className="container-max px-4 md:px-6">
            <div className="text-center mb-12">
              <span className="text-primary font-bold text-sm uppercase tracking-wider">More Services</span>
              <h2 className="text-4xl md:text-5xl font-black text-secondary mt-2">Other Services We Offer</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Explore our other professional services for your home improvement needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherServices.map((otherService) => (
                <Link
                  key={otherService.id}
                  href={`/services/${otherService.slug}`}
                  className="group bg-gray-50 hover:bg-white rounded-2xl p-6 border-2 border-transparent hover:border-primary hover:shadow-xl transition-all"
                >
                  <h3 className="text-xl font-bold text-secondary group-hover:text-primary mb-3 transition-colors">
                    {otherService.category}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {otherService.description}
                  </p>
                  <span className="text-primary font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/services" className="bg-secondary hover:bg-secondary-light text-white font-bold px-8 py-4 rounded-full transition-all">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="container-max px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Ready to Start Your {service.category} Project?
            </h2>
            <p className="text-white/90 mb-10 max-w-2xl mx-auto text-lg">
              Contact us today for a free, no-obligation estimate. Let&apos;s bring your vision to life!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:+19049090916" className="bg-white text-accent hover:bg-gray-100 font-bold px-10 py-5 rounded-full inline-flex items-center gap-3 transition-all hover:scale-105 shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (904) 909-0916
              </a>
              <Link href="/contact" className="bg-transparent text-white hover:bg-white/10 font-bold px-10 py-5 rounded-full border-2 border-white inline-flex items-center gap-2 transition-all">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
