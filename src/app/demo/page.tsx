import Link from "next/link";

const demos = [
  {
    title: "Lead Generation",
    desc: "Watch AI discover and verify B2B leads in real-time.",
    href: "/demo/leads",
    type: "Interactive",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Email Automation",
    desc: "See AI categorize, respond to, and manage an inbox automatically.",
    href: "/demo/email",
    type: "Interactive",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Document Processing",
    desc: "Watch AI extract data from invoices, POs, and tax forms instantly.",
    href: "/demo/documents",
    type: "Interactive",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Tailored Workflows",
    desc: "Watch a Purchase Order flow through a 10-step automated approval pipeline.",
    href: "/demo/workflows",
    type: "Interactive",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "AI Strategy Consulting",
    desc: "Watch a real AI readiness assessment with ROI analysis.",
    href: "/demo/strategy",
    type: "Video",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Custom Development",
    desc: "See a full custom AI solution built from requirements to deployment.",
    href: "/demo/custom",
    type: "Video",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
];

export default function DemoHubPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-dark-950 bg-grid relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/50 to-dark-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            See It <span className="text-gradient">In Action</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Try our interactive demos or watch video walkthroughs of our AI automation systems.
          </p>
        </div>
      </section>

      {/* Demo Grid */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demos.map((demo) => (
              <Link
                key={demo.title}
                href={demo.href}
                className="bg-dark-700 rounded-xl p-8 border border-white/5 hover:border-primary-500/30 transition-colors card-hover flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-orange flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={demo.icon} />
                    </svg>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full border ${demo.type === "Interactive" ? "bg-primary-500/10 border-primary-500/20 text-primary-500" : "bg-blue-500/10 border-blue-500/20 text-blue-400"}`}>
                    {demo.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{demo.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-1">{demo.desc}</p>
                <span className="text-primary-500 text-sm font-medium">
                  {demo.type === "Interactive" ? "Try Demo" : "Watch Demo"} &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to see what we can build for <span className="text-gradient">your business</span>?</h2>
          <p className="text-gray-400 mb-8">Book a free strategy call and we&apos;ll walk you through exactly how automation can work for you.</p>
          <a href="https://cal.com/mitchell-kunar-ga4jvw/30min" target="_blank" rel="noopener noreferrer" className="bg-gradient-orange text-white font-semibold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg inline-block">
            Book a Free Call
          </a>
        </div>
      </section>
    </>
  );
}
