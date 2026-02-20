import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blog';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Prenga Construction Inc',
  description: 'Expert tips, guides, and insights on home improvement, remodeling, drywall, painting, and more from Prenga Construction.',
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/drywall/drywall-custom-ceiling-led-design.jpg" alt="Our blog" fill className="object-cover" />
            <div className="absolute inset-0 bg-secondary/85" />
          </div>
          <div className="relative z-10 container-max px-4 md:px-6 pt-16">
            <div className="max-w-3xl">
              <span className="inline-block bg-primary px-4 py-2 rounded-full text-white text-sm font-bold mb-6">
                Our Blog
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                Tips, Guides &<br />Expert Insights
              </h1>
              <p className="text-xl text-gray-300">
                Learn from our team of experienced professionals. We share practical advice on home improvement, remodeling, and construction.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-white">
          <div className="container-max px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      <span>&middot;</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="text-primary font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="container-max px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Ready to Start Your Project?
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
