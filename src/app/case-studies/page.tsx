import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials — AscendralAI",
  description: "See how AI automation has transformed real businesses — from HVAC to property management to commercial contracting.",
};

const testimonials = [
  {
    company: "HVAC Services Company",
    industry: "HVAC",
    challenge: "Spending 15+ hours every week manually searching for leads. The owner was spending every morning hunting through directories, social media, and referral lists instead of running the business.",
    solution: "We built a custom lead generation system that automatically finds and verifies HVAC-relevant businesses in their target market. Leads are scored, enriched with contact details, and delivered directly to their inbox and CRM every morning.",
    results: [
      { stat: "500+", label: "Verified leads per month" },
      { stat: "12 hrs", label: "Saved every week" },
      { stat: "3", label: "New contracts in first month" },
    ],
    quote: "I used to spend every morning hunting for leads. Now I just open my inbox and they're there.",
    author: "Owner, HVAC Services Company",
  },
  {
    company: "Property Management Firm",
    industry: "Property Management",
    challenge: "Drowning in tenant emails — maintenance requests, lease questions, payment issues. The property manager was spending most of the day just reading and responding to emails instead of managing properties.",
    solution: "We deployed an AI email triage and response system that reads every incoming email, categorizes it by urgency and type, drafts responses for routine questions, and flags urgent issues for immediate attention.",
    results: [
      { stat: "80%", label: "Of emails handled automatically" },
      { stat: "<5 min", label: "Average response time" },
      { stat: "0", label: "Missed urgent requests" },
    ],
    quote: "My tenants get faster responses and I actually have time to manage properties.",
    author: "Property Manager",
  },
  {
    company: "Commercial Contracting Company",
    industry: "Commercial Construction",
    challenge: "Quotes were taking 2-3 days to put together. By the time they sent a number, the customer had already gone with a competitor. They were losing deals they should have been winning.",
    solution: "We built an automated quote generator that pulls from their pricing database, factors in project specifications, and generates professional quotes in seconds. The operations manager reviews and sends with one click.",
    results: [
      { stat: "<60s", label: "Quote turnaround" },
      { stat: "3 deals", label: "Won in first week" },
      { stat: "100%", label: "Quote accuracy" },
    ],
    quote: "We were losing jobs because we couldn't quote fast enough. That problem is gone.",
    author: "Operations Manager",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-dark-950 bg-grid relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/50 to-dark-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Testimonials</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real results from real businesses. See how AI automation is saving time and driving revenue.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {testimonials.map((t, idx) => (
            <article key={t.company} className="bg-dark-700 rounded-2xl border border-white/5 overflow-hidden">
              {/* Header */}
              <div className="px-8 py-6 border-b border-white/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-orange flex items-center justify-center text-sm font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h2 className="text-xl font-bold">{t.company}</h2>
                  <p className="text-gray-500 text-sm">{t.industry}</p>
                </div>
              </div>

              <div className="p-8 space-y-8">
                {/* Challenge */}
                <div>
                  <h3 className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-2">The Challenge</h3>
                  <p className="text-gray-400">{t.challenge}</p>
                </div>

                {/* Solution */}
                <div>
                  <h3 className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-2">Our Solution</h3>
                  <p className="text-gray-400">{t.solution}</p>
                </div>

                {/* Results */}
                <div>
                  <h3 className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-4">The Results</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {t.results.map((r) => (
                      <div key={r.label} className="bg-dark-600 rounded-xl p-4 text-center">
                        <p className="text-2xl sm:text-3xl font-bold text-gradient">{r.stat}</p>
                        <p className="text-xs text-gray-400 mt-1">{r.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="border-l-2 border-primary-500 pl-6 py-2">
                  <p className="text-gray-300 italic">&ldquo;{t.quote}&rdquo;</p>
                  <cite className="text-gray-500 text-sm mt-2 block not-italic">— {t.author}</cite>
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Your business could be the next <span className="text-gradient">success story</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Let&apos;s talk about what AI automation can do for you.
          </p>
          <a
            href="https://cal.com/mitchell-kunar-ga4jvw/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-orange text-white font-semibold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg inline-block"
          >
            Book a Free Strategy Call
          </a>
        </div>
      </section>
    </>
  );
}
