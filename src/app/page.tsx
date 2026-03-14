import Link from "next/link";
import HomeDemoSection from "@/components/HomeDemoSection";

const problems = [
  { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", label: "Manual data entry" },
  { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "Repetitive emails" },
  { icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", label: "Lead research" },
  { icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", label: "Scheduling back-and-forth" },
  { icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z", label: "Paperwork and document processing" },
];

const solutions = [
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Lead Generation",
    desc: "Automatically find and verify B2B leads tailored to your ideal customer profile.",
  },
  {
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    title: "Email & Communication",
    desc: "AI reads, categorizes, and responds to routine emails so you don't have to.",
  },
  {
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    title: "Document Processing",
    desc: "Extract data from invoices, forms, and PDFs — automatically update your systems.",
  },
];

const caseStudies = [
  { company: "HVAC Company", stat1: "500+", stat1Label: "Leads Generated", stat2: "12 hrs", stat2Label: "Saved Weekly" },
  { company: "Property Management Firm", stat1: "80%", stat1Label: "Emails Automated", stat2: "<5 min", stat2Label: "Response Time" },
  { company: "Commercial Contractor", stat1: "<60s", stat1Label: "Quote Turnaround", stat2: "3 deals", stat2Label: "Won First Week" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/50 via-dark-950/80 to-dark-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Empower Your Business with{" "}
            <span className="text-gradient">AI Driven Solutions</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            We build automation systems that save you time, cut costs, and let you focus on what actually matters — growing your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/demo"
              className="bg-gradient-orange text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-lg"
            >
              See It In Action
            </Link>
            <a
              href="https://cal.com/mitchell-kunar-ga4jvw/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 text-white font-semibold px-8 py-3 rounded-lg hover:border-primary-500 hover:text-primary-500 transition-colors text-lg"
            >
              Book a Free Call
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            You&apos;re losing hours every week to...
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            These repetitive tasks are eating into your bottom line.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {problems.map((p) => (
              <div key={p.label} className="bg-dark-700 rounded-xl p-6 text-center border border-white/5">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-orange flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={p.icon} />
                  </svg>
                </div>
                <p className="text-sm font-medium">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            We build AI systems that handle it <span className="text-gradient">automatically</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            Intelligent automation tailored to your business processes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((s) => (
              <div
                key={s.title}
                className="bg-dark-700 rounded-xl p-8 border border-white/5 hover:border-primary-500/30 transition-colors card-hover"
              >
                <div className="w-12 h-12 mb-6 rounded-lg bg-gradient-orange flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{s.desc}</p>
                <Link href="/services" className="text-primary-500 text-sm font-medium hover:underline">
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* See How It Works */}
      <HomeDemoSection />

      {/* Social Proof */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Real Results for <span className="text-gradient">Real Businesses</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            See what AI automation has done for businesses like yours.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <div key={cs.company} className="bg-dark-700 rounded-xl p-8 border border-white/5 text-center card-hover">
                <p className="text-xs font-semibold text-primary-500 uppercase tracking-wider mb-6">{cs.company}</p>
                <div className="flex justify-center gap-8 mb-6">
                  <div>
                    <p className="text-3xl font-bold text-gradient">{cs.stat1}</p>
                    <p className="text-xs text-gray-400 mt-1">{cs.stat1Label}</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gradient">{cs.stat2}</p>
                    <p className="text-xs text-gray-400 mt-1">{cs.stat2Label}</p>
                  </div>
                </div>
                <Link href="/case-studies" className="text-primary-500 text-sm font-medium hover:underline">
                  Read full story &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-dark-700 rounded-2xl p-10 border border-white/5">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-orange flex items-center justify-center text-2xl font-bold">
              M
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              I&apos;m Mitch
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Oracle Certified AI Agent Developer with a blue collar background. I&apos;m here to take the guesswork out of AI for your business — no buzzwords, just real results.
            </p>
            <Link href="/about" className="text-primary-500 font-medium hover:underline">
              Learn more about me &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-dark-900 bg-grid relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 to-dark-900" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to see what AI can do for <span className="text-gradient">your business</span>?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Book a free 30-minute strategy call and we&apos;ll map out exactly how automation can save you time and money.
          </p>
          <a
            href="https://cal.com/mitchell-kunar-ga4jvw/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-orange text-white font-semibold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg inline-block animate-pulse-glow"
          >
            Book a Free Call
          </a>
        </div>
      </section>
    </>
  );
}
