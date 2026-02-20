import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blog';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: 'Post Not Found | Prenga Construction Inc' };
  }

  return {
    title: `${post.title} | Prenga Construction Inc`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-secondary/85" />
          </div>
          <div className="relative z-10 container-max px-4 md:px-6 pt-16">
            <nav className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                </li>
                <li>/</li>
                <li className="text-primary">{post.category}</li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-block bg-primary px-4 py-2 rounded-full text-white text-sm font-bold mb-6">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-white mb-6">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-gray-300">
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <span>&middot;</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-white">
          <div className="container-max px-4 md:px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <article className="lg:col-span-2">
                <p className="text-lg text-gray-700 mb-8 leading-relaxed font-medium">
                  {post.excerpt}
                </p>

                {post.sections.map((section, i) => (
                  <div key={i} className="mb-10">
                    <h2 className="text-2xl font-bold text-secondary mb-4">{section.heading}</h2>
                    <p className="text-gray-600 leading-relaxed">{section.content}</p>
                  </div>
                ))}
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                {/* CTA Card */}
                <div className="bg-primary rounded-2xl p-8 text-white mb-8 sticky top-24">
                  <h3 className="text-xl font-bold mb-4">Need {post.category} Services?</h3>
                  <p className="text-white/90 mb-6">
                    Get a free estimate from our experienced team. We&apos;ll assess your project and provide a detailed quote.
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
                      href={`/${post.serviceSlug}`}
                      className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl font-bold transition-colors w-full"
                    >
                      View {post.category} Services
                    </Link>
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-4 rounded-xl font-bold transition-colors w-full"
                    >
                      Get Free Estimate
                    </Link>
                  </div>
                </div>

                {/* Related Service */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="font-bold text-secondary mb-4">Related Service</h4>
                  <Link
                    href={`/${post.serviceSlug}`}
                    className="group flex items-center gap-3 text-primary font-semibold hover:gap-4 transition-all"
                  >
                    {post.category} Services
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Other Blog Posts */}
        {otherPosts.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container-max px-4 md:px-6">
              <h2 className="text-3xl font-black text-secondary mb-10">More Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherPosts.map((otherPost) => (
                  <Link
                    key={otherPost.slug}
                    href={`/blog/${otherPost.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={otherPost.image}
                        alt={otherPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-primary text-xs font-bold">{otherPost.category}</span>
                      <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors mt-1 line-clamp-2">
                        {otherPost.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="container-max px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Ready to Start Your {post.category} Project?
            </h2>
            <p className="text-white/90 mb-10 max-w-2xl mx-auto text-lg">
              Contact us today for a free, no-obligation estimate.
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
