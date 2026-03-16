import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — AscendralAI",
  description: "AI automation services: lead generation, email automation, document processing, custom workflows, strategy consulting, and custom development.",
};

const services = [
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Lead Generation Automation",
    desc: "Find verified B2B leads automatically — no more cold calling or manual research.",
    benefits: ["Find verified B2B leads automatically", "Export to any CRM", "Never run out of prospects"],
  },
  {
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    title: "Email & Communication Automation",
    desc: "AI handles your routine emails so you can focus on what matters.",
    benefits: ["AI handles routine emails", "Smart categorization and responses", "Urgent items flagged automatically"],
  },
  {
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    title: "Document Processing",
    desc: "Extract data from invoices, forms, and PDFs — eliminate manual data entry.",
    benefits: ["Extract data from invoices, forms, PDFs", "Auto-update your systems", "Eliminate manual entry errors"],
  },
  {
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Tailored Workflows",
    desc: "Custom automation built for your specific processes. If you do it repeatedly, we can automate it.",
    benefits: ["Custom automation for your processes", "Data syncing between apps", "Automated reports and notifications", "If you do it repeatedly, we can automate it"],
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "AI Strategy Consulting",
    desc: "Identify automation opportunities and build a roadmap for implementation.",
    benefits: ["Identify automation opportunities", "Roadmap for implementation", "ROI analysis", "Ongoing guidance and support"],
  },
  {
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    title: "Custom Development",
    desc: "Full custom AI solutions built to your exact specifications.",
    benefits: ["Full custom AI solutions", "Integrations with your existing systems", "Built to your exact specifications"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-dark-950 bg-grid relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/50 to-dark-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From lead generation to custom AI solutions — we automate the work that&apos;s slowing your business down.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-dark-700 rounded-xl p-8 border border-white/5 hover:border-primary-500/30 transition-colors card-hover flex flex-col"
              >
                <div className="w-12 h-12 mb-6 rounded-lg bg-gradient-orange flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-gray-400 text-sm mb-5">{s.desc}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4 text-success mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://cal.com/mitchell-kunar-ga4jvw/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-gradient-orange text-white font-semibold py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Not sure which service is right for you?</h2>
          <p className="text-gray-400 mb-8">
            Book a free strategy call and we&apos;ll help you identify the biggest opportunities for automation in your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://cal.com/mitchell-kunar-ga4jvw/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-orange text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Free Intro Call
            </a>
            <Link
              href="/demo"
              className="border border-white/20 text-white font-semibold px-8 py-3 rounded-lg hover:border-primary-500 hover:text-primary-500 transition-colors"
            >
              Try the Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
