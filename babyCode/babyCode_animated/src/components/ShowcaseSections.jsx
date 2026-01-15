import React from "react";

const FeatureCard = ({ title, children }) => {
  return (
    <div className="relative group rounded-3xl border border-zinc-800/60 bg-zinc-900/60 backdrop-blur-md p-6 ring-1 ring-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)] transition-all duration-300 ease-out hover:-translate-y-1 flex-shrink-0">
      <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-red-500/20 via-fuchsia-500/10 to-transparent blur-2xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
      <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-zinc-400/80">
        <span className="h-1 w-1 rounded-full bg-red-500"></span>
        Feature
      </span>
      <h2 className="text-xl text-white mollen-bold mt-2">{title}</h2>
      <p className="text-sm mt-3 text-zinc-300/90 leading-6">{children}</p>
    </div>
  );
};

const TestimonialCard = ({ quote, author, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 rounded-3xl"
      aria-label={`Read more about ${author}`}
    >
      <div className="relative rounded-3xl border border-zinc-800/60 bg-zinc-900/60 backdrop-blur-md p-6 ring-1 ring-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] flex-shrink-0 hover:border-zinc-700 transition-colors">
        <div className="pointer-events-none absolute -top-16 -left-10 h-24 w-24 rounded-full bg-gradient-to-tr from-red-500/20 via-rose-500/10 to-transparent blur-2xl" />
        <span className="text-red-400 text-2xl leading-none">“</span>
        <p className="text-sm text-zinc-300 leading-6 mt-2">{quote}</p>
        <h3 className="text-sm mt-4 text-white">{author}</h3>
      </div>
    </a>
  );
};

const ShowcaseSections = () => {
  const features = [
    { title: "Speaking Practice", description: "1:1 practice rooms with structured prompts and instant feedback." },
    { title: "Mock Tests", description: "Full-length, timed tests that mirror the real exam experience." },
    { title: "AI Band Score", description: "Receive predictive scoring and tailored recommendations." },
    { title: "Personal Mentorship", description: "Certified trainers guide your study plan to maximize gains." },
    { title: "Writing Labs", description: "Structured practice with detailed feedback on task 1 and 2." },
    { title: "Listening Mastery", description: "Audio exercises with accent training and speed variations." },
  ];

  const testimonials = [
    { quote: "I hit Band 7.5 in two months. The mock tests felt exactly like the real exam.", author: "— Aisha, Canada PR", href: "https://www.ielts.org/" },
    { quote: "AI feedback showed me where I was losing points in Writing Task 2.", author: "— Rohan, MS Applicant", href: "https://www.ielts.org/about-ielts/ielts-for-migration" },
    { quote: "Speaking practice sessions boosted my confidence and fluency quickly.", author: "— Lin, Study Visa", href: "https://www.ielts.org/take-a-test/test-types/ielts-academic" },
    { quote: "The personalized study plan helped me focus on my weak areas effectively.", author: "— Maria, UK Visa", href: "https://www.ielts.org/take-a-test" },
    { quote: "Real-time band score predictions kept me motivated throughout my preparation.", author: "— Ahmed, Australia PR", href: "https://www.ielts.org/about-ielts/what-is-ielts" },
  ];

  return (
    <div id="sections" className="relative z-10 bg-zinc-950 text-white overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(80%_50%_at_50%_-10%,rgba(244,63,94,0.08),transparent_60%)]" />
      
      {/* Features Carousel */}
      <section id="features" className="border-t border-zinc-900/80 py-16">
        <div className="mb-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl mollen-bold">Everything you need to ace IELTS</h2>
                <p className="text-zinc-400 mt-2 text-sm">Practice, measure, and improve with confidence.</p>
              </div>
              <div className="hidden sm:block h-px w-24 bg-gradient-to-r from-transparent via-zinc-600/40 to-transparent" />
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="flex animate-scroll-left gap-4">
            {[...features, ...features].map((feature, index) => (
              <div key={index} className="w-80 flex-shrink-0">
                <FeatureCard title={feature.title}>
                  {feature.description}
                </FeatureCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section id="testimonials" className="border-t border-zinc-900/80 py-16">
        <div className="mb-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl mollen-bold">Learners who made it</h2>
                <p className="text-zinc-400 mt-2 text-sm">Real stories, real outcomes.</p>
              </div>
              <div className="hidden sm:block h-px w-24 bg-gradient-to-r from-transparent via-zinc-600/40 to-transparent" />
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="flex animate-scroll-right gap-4">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="w-80 flex-shrink-0">
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  href={testimonial.href}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShowcaseSections;


