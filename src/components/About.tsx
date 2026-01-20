export default function About() {
  const values = [
    {
      title: 'Quality Craftsmanship',
      description: 'Every project is completed to the highest standards with attention to detail.',
    },
    {
      title: 'Licensed & Insured',
      description: 'Full protection and peace of mind for every project we undertake.',
    },
    {
      title: 'Transparent Pricing',
      description: 'Honest estimates with no hidden fees. What we quote is what you pay.',
    },
    {
      title: 'On-Time Completion',
      description: 'We respect your time and deliver projects according to schedule.',
    },
  ];

  const whyChooseUs = [
    'Experienced and skilled craftsmen',
    'Free detailed project estimates',
    'Quality materials and workmanship',
    'Clean and professional job sites',
    'Excellent customer communication',
    'Satisfaction guaranteed on every job',
  ];

  return (
    <section id="about" className="section-padding bg-gray-light">
      <div className="container-max px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="section-title">
              Prenga Construction Inc
            </h2>
            <p className="text-gray-600 text-lg mb-6 mt-6">
              Prenga Construction Inc is your trusted partner for all residential
              construction and home improvement needs. With over 15 years of experience
              in the industry, we have built a reputation for quality craftsmanship,
              reliable service, and complete customer satisfaction.
            </p>
            <p className="text-gray-600 text-lg mb-8">
              Our team of skilled professionals specializes in painting, trim carpentry,
              pressure washing, and a full range of home improvement services. We take
              pride in our attention to detail and commitment to excellence in every
              project we undertake.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-primary"
                >
                  <h4 className="font-bold text-secondary mb-2">{value.title}</h4>
                  <p className="text-gray text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us Card */}
          <div className="relative">
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />

            <div className="relative bg-secondary rounded-2xl p-8 md:p-10 text-white shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-8">
                Why Choose <span className="text-primary">Prenga Construction?</span>
              </h3>

              <ul className="space-y-5 mb-10">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-white/20">
                <p className="text-gray-300 mb-6">
                  Ready to start your project? Get in touch today for a free estimate.
                </p>
                <a
                  href="tel:+19042405598"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
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
                  Call (904) 240-5598
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
