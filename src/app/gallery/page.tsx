'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const galleryImages = [
  // Remodeling - Bathroom
  { src: 'bathroom-remodel/bathroom-remodel-white.jpg', category: 'Remodeling', title: 'Modern White Bathroom Remodel' },
  { src: 'bathroom-remodel/shower-glass-door.jpg', category: 'Remodeling', title: 'Glass Shower Enclosure' },
  { src: 'bathroom-remodel/marble-shower-bench.jpg', category: 'Remodeling', title: 'Marble Shower with Bench' },
  { src: 'bathroom-remodel/bathroom-herringbone.jpg', category: 'Remodeling', title: 'Herringbone Tile Bathroom' },
  { src: 'bathroom-remodel/bathroom-marble-shower.jpg', category: 'Remodeling', title: 'Luxury Marble Shower' },
  { src: 'bathroom-remodel/bathroom-walkin-shower-marble-shelves.jpg', category: 'Remodeling', title: 'Walk-In Shower with Marble Shelves' },
  { src: 'bathroom-remodel/bathroom-marble-shower-gold-fixtures.jpg', category: 'Remodeling', title: 'Marble Shower with Gold Fixtures' },
  { src: 'bathroom-remodel/bathroom-natural-stone-shower-install.jpg', category: 'Remodeling', title: 'Natural Stone Shower Install' },
  { src: 'bathroom-remodel/bathroom-modern-vanity-glass-shower.jpg', category: 'Remodeling', title: 'Modern Vanity & Glass Shower' },
  { src: 'bathroom-remodel/bathroom-shower-tile-niche-window.jpg', category: 'Remodeling', title: 'Shower Tile with Niche & Window' },
  { src: 'bathroom-remodel/bathroom-luxury-stone-walkin-shower.jpg', category: 'Remodeling', title: 'Luxury Stone Walk-In Shower' },
  { src: 'bathroom-remodel/bathroom-master-calacatta-shower.jpg', category: 'Remodeling', title: 'Master Bath Calacatta Shower' },
  { src: 'bathroom-remodel/bathroom-gray-marble-shower-niche.jpg', category: 'Remodeling', title: 'Gray Marble Shower with Niche' },
  { src: 'bathroom-remodel/bathroom-master-freestanding-tub.jpg', category: 'Remodeling', title: 'Master Bath with Freestanding Tub' },
  { src: 'bathroom-remodel/bathroom-shower-bench-mosaic-floor.jpg', category: 'Remodeling', title: 'Shower Bench & Mosaic Floor' },
  { src: 'bathroom-remodel/bathroom-modern-glass-tile-shower.jpg', category: 'Remodeling', title: 'Modern Glass Tile Shower' },
  { src: 'bathroom-remodel/bathroom-luxury-herringbone-accent.jpg', category: 'Remodeling', title: 'Luxury Herringbone Accent Bathroom' },
  { src: 'bathroom-remodel/bathroom-gray-tile-shower-bench.jpg', category: 'Remodeling', title: 'Gray Tile Shower with Bench' },
  { src: 'bathroom-remodel/bathroom-modern-vanity-pendant-light.jpg', category: 'Remodeling', title: 'Modern Vanity with Pendant Light' },
  { src: 'bathroom-remodel/bathroom-black-star-tile-shower.jpg', category: 'Remodeling', title: 'Black Star Tile Shower' },
  { src: 'bathroom-remodel/bathroom-black-tile-pendant-vanity.jpg', category: 'Remodeling', title: 'Black Tile Shower & Pendant Vanity' },
  { src: 'bathroom-remodel/bathroom-black-herringbone-glass-tub.jpg', category: 'Remodeling', title: 'Black Herringbone Shower & Glass Tub' },
  { src: 'bathroom-remodel/bathroom-striped-penny-tile-tub.jpg', category: 'Remodeling', title: 'Striped Penny Tile Bathtub' },
  { src: 'bathroom-remodel/bathroom-vertical-tile-glass-door.jpg', category: 'Remodeling', title: 'Vertical Tile Shower & Glass Door' },
  // Remodeling - Home & Kitchen
  { src: 'home-remodeling/living-room-fireplace.jpg', category: 'Remodeling', title: 'Living Room Transformation' },
  { src: 'home-remodeling/living-room-renovation.jpg', category: 'Remodeling', title: 'Complete Room Renovation' },
  { src: 'home-remodeling/home-remodel-living-room-brick-wall.jpg', category: 'Remodeling', title: 'Living Room with Brick Accent Wall' },
  { src: 'home-remodeling/kitchen-remodel/kitchen-remodel-black-cabinets-island.jpg', category: 'Remodeling', title: 'Modern Kitchen with Black Cabinets' },
  { src: 'home-remodeling/kitchen-remodel/kitchen-modern-wet-bar-marble.jpg', category: 'Remodeling', title: 'Modern Wet Bar with Marble' },
  // Tile & Flooring
  { src: 'tile/tile-floor-pattern.jpg', category: 'Tile', title: 'Decorative Floor Pattern' },
  { src: 'tile/tile-floor-greek.jpg', category: 'Tile', title: 'Greek Key Floor Design' },
  // Drywall
  { src: 'drywall/drywall-custom-ceiling-led-design.jpg', category: 'Drywall', title: 'Custom Ceiling with LED Design' },
  { src: 'drywall/drywall-arched-hallway-vaulted.jpg', category: 'Drywall', title: 'Arched Hallway with Vaulted Ceiling' },
  { src: 'drywall/drywall-ceiling-floral-room-divider.jpg', category: 'Drywall', title: 'Floral Ceiling & Room Divider' },
  { src: 'drywall/drywall-ornate-dome-ceiling.jpg', category: 'Drywall', title: 'Ornate Dome Ceiling' },
  { src: 'drywall/drywall-ceiling-taping-finish.jpg', category: 'Drywall', title: 'Ceiling Taping & Finish' },
  { src: 'drywall/drywall-wave-wall-detail.jpg', category: 'Drywall', title: 'Wave Wall Detail' },
  // Trim & Carpentry
  { src: 'trim-carpentry/trim-custom-office-coffered-ceiling.jpg', category: 'Carpentry', title: 'Custom Office with Coffered Ceiling' },
  { src: 'trim-carpentry/trim-custom-pantry-wine-rack.jpg', category: 'Carpentry', title: 'Custom Pantry & Wine Rack' },
  { src: 'trim-carpentry/trim-coffered-ceiling-accent-wall.jpg', category: 'Carpentry', title: 'Coffered Ceiling & Accent Wall' },
  { src: 'trim-carpentry/trim-coffered-ceiling-stone-fireplace.jpg', category: 'Carpentry', title: 'Coffered Ceiling & Stone Fireplace' },
  { src: 'trim-carpentry/trim-diamond-accent-wall-pink.jpg', category: 'Carpentry', title: 'Diamond Accent Wall' },
  { src: 'trim-carpentry/trim-wainscoting-coffered-office.jpg', category: 'Carpentry', title: 'Wainscoting & Coffered Office' },
  { src: 'trim-carpentry/trim-geometric-accent-wall-navy.jpg', category: 'Carpentry', title: 'Geometric Accent Wall' },
  { src: 'trim-carpentry/trim-geometric-accent-wet-bar.jpg', category: 'Carpentry', title: 'Geometric Accent Wet Bar' },
  { src: 'trim-carpentry/trim-wainscoting-staircase.jpg', category: 'Carpentry', title: 'Wainscoting & Staircase' },
  { src: 'trim-carpentry/trim-coffered-ceiling-recessed-lights.jpg', category: 'Carpentry', title: 'Coffered Ceiling with Recessed Lights' },
  { src: 'trim-carpentry/trim-board-batten-accent-wall-blue.jpg', category: 'Carpentry', title: 'Board & Batten Accent Wall' },
  // Painting - finalized images only (no before/after/in-progress)
  { src: 'interior-painting/interior-painting-vaulted-living-room-after.jpeg', category: 'Painting', title: 'Vaulted Living Room - Professional Finish' },
  { src: 'interior-painting/interior-painting-bedroom-navy-blue-walls.jpeg', category: 'Painting', title: 'Navy Blue Bedroom Walls' },
  { src: 'interior-painting/interior-painting-room-sage-green-walls-white-trim.jpeg', category: 'Painting', title: 'Sage Green Walls with White Trim' },
  { src: 'interior-painting/interior-painting-restaurant-sage-green-wainscoting.jpeg', category: 'Painting', title: 'Commercial Sage Green Wainscoting' },
  { src: 'interior-painting/interior-painting-restaurant-wainscoting-seating-area.jpeg', category: 'Painting', title: 'Restaurant Wainscoting Seating Area' },
  { src: 'interior-painting/interior-painting-bedroom-warm-beige-walls.jpeg', category: 'Painting', title: 'Warm Beige Bedroom Walls' },
  { src: 'interior-painting/interior-painting-bedroom-sage-green-walls-closet.jpeg', category: 'Painting', title: 'Sage Green Walls & Closet' },
  { src: 'interior-painting/interior-painting-commercial-hallway-gray-walls.jpeg', category: 'Painting', title: 'Commercial Hallway Gray Walls' },
  { src: 'interior-painting/interior-painting-room-light-blue-walls-crown-molding.jpeg', category: 'Painting', title: 'Light Blue Walls with Crown Molding' },
  { src: 'exterior-painting/exterior-painting-commercial-building-after.jpeg', category: 'Painting', title: 'Commercial Building Exterior' },
  { src: 'exterior-painting/exterior-painting-yellow-siding-home-backyard.jpeg', category: 'Painting', title: 'Yellow Siding Home Backyard' },
];

const categories = ['All', 'Remodeling', 'Drywall', 'Carpentry', 'Painting', 'Tile'];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/bathroom-remodel/marble-shower-bench.jpg" alt="Our work" fill className="object-cover" />
            <div className="absolute inset-0 bg-secondary/85" />
          </div>
          <div className="relative z-10 container-max px-4 md:px-6 pt-16">
            <div className="max-w-3xl">
              <span className="inline-block bg-primary px-4 py-2 rounded-full text-white text-sm font-bold mb-6">
                Portfolio
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                Our Work<br />Speaks for Itself
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Browse through our portfolio of completed projects. Each one represents our commitment to quality craftsmanship and customer satisfaction.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="text-4xl font-black text-primary">500+</div>
                  <div className="text-gray-300">Projects<br />Completed</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-4xl font-black text-primary">15+</div>
                  <div className="text-gray-300">Years<br />Experience</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-4xl font-black text-primary">100%</div>
                  <div className="text-gray-300">Customer<br />Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter & Gallery */}
        <section className="py-20 bg-white">
          <div className="container-max px-4 md:px-6">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    activeCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                  {category !== 'All' && (
                    <span className="ml-2 text-sm opacity-70">
                      ({galleryImages.filter(img => img.category === category).length})
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Results count */}
            <p className="text-center text-gray-500 mb-8">
              Showing {filteredImages.length} {filteredImages.length === 1 ? 'project' : 'projects'}
            </p>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group cursor-pointer"
                >
                  <Image
                    src={`/images/${img.src}`}
                    alt={img.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="text-white font-bold">{img.title}</span>
                    <span className="text-primary text-sm">{img.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 bg-gray-50">
          <div className="container-max px-4 md:px-6">
            <div className="text-center mb-16">
              <span className="text-primary font-bold text-sm uppercase tracking-wider">Highlights</span>
              <h2 className="text-4xl md:text-5xl font-black text-secondary mt-2">Featured Projects</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                A closer look at some of our favorite transformations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Featured Project 1 */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                <div className="relative h-80">
                  <Image src="/images/bathroom-remodel/bathroom-remodel-white.jpg" alt="Bathroom transformation" fill className="object-cover" />
                </div>
                <div className="p-8">
                  <span className="text-primary font-semibold text-sm">Bathroom Remodel</span>
                  <h3 className="text-2xl font-bold text-secondary mt-2 mb-4">Complete Master Bath Transformation</h3>
                  <p className="text-gray-600 mb-4">
                    This dated master bathroom was transformed into a modern spa-like retreat. We installed a new walk-in shower with frameless glass, custom tile work, and a floating vanity.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">Custom Tile</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">Glass Shower</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">Vanity Install</span>
                  </div>
                </div>
              </div>

              {/* Featured Project 2 */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                <div className="relative h-80">
                  <Image src="/images/home-remodeling/living-room-fireplace.jpg" alt="Living room renovation" fill className="object-cover" />
                </div>
                <div className="p-8">
                  <span className="text-primary font-semibold text-sm">Full Remodel</span>
                  <h3 className="text-2xl font-bold text-secondary mt-2 mb-4">Living Room Renovation</h3>
                  <p className="text-gray-600 mb-4">
                    A complete living room transformation featuring new flooring, custom built-ins around the fireplace, fresh paint, and updated electrical and lighting throughout.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">Flooring</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">Built-ins</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">Painting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-20 bg-white">
          <div className="container-max px-4 md:px-6">
            <div className="text-center mb-16">
              <span className="text-primary font-bold text-sm uppercase tracking-wider">Our Approach</span>
              <h2 className="text-4xl md:text-5xl font-black text-secondary mt-2">How We Achieve These Results</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Every stunning project starts with a solid process. Here&apos;s how we work.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Consultation', desc: 'We discuss your vision, preferences, and budget to understand exactly what you want.' },
                { step: '02', title: 'Planning', desc: 'We create a detailed plan including materials, timeline, and a transparent quote.' },
                { step: '03', title: 'Execution', desc: 'Our skilled team brings the plan to life with precision and care for your home.' },
                { step: '04', title: 'Final Reveal', desc: 'We do a final walkthrough to ensure you\'re thrilled with every detail.' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-6xl font-black text-gray-100 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container-max px-4 md:px-6">
            <div className="text-center mb-16">
              <span className="text-primary font-bold text-sm uppercase tracking-wider">Reviews</span>
              <h2 className="text-4xl md:text-5xl font-black text-secondary mt-2">What Our Clients Say</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { quote: 'Our bathroom looks like something out of a magazine. Prenga Construction exceeded our expectations!', name: 'Sarah M.', location: 'Jacksonville, FL', project: 'Bathroom Remodel' },
                { quote: 'Professional, punctual, and their attention to detail is incredible. Highly recommend for any tile work.', name: 'Robert K.', location: 'Orlando, FL', project: 'Tile Installation' },
                { quote: 'They transformed our entire first floor. The quality is outstanding and they finished on schedule.', name: 'Linda P.', location: 'Tampa, FL', project: 'Full Renovation' },
              ].map((testimonial, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex gap-1 text-primary mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div>
                    <div className="font-bold text-secondary">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.location}</div>
                    <div className="text-primary text-sm mt-1">{testimonial.project}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Banner */}
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

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="container-max px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Ready for Your Transformation?
            </h2>
            <p className="text-white/90 mb-10 max-w-2xl mx-auto text-lg">
              Let&apos;s discuss your project. We&apos;d love to add your home to our portfolio of beautiful transformations!
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
