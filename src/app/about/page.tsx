import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — AscendralAI",
  description: "Meet Mitch — Enterprise Consultant, AI Agent Developer, and the person behind AscendralAI.",
};

const values = [
  {
    title: "Partnership Approach",
    desc: "I work with you, not just for you. Your success is my success. Every engagement starts with understanding your business inside and out.",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
  },
  {
    title: "No BS Transparency",
    desc: "I'll tell you if something won't work. I'll tell you if you don't need AI. I'd rather earn your trust than your money.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Built to Last",
    desc: "I don't build band-aid solutions. Every system is designed to scale with your business and adapt as your needs change.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
  {
    title: "Results First",
    desc: "Everything I build is measured by ROI. If it doesn't save you time or make you money, it's not worth building.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
];

const credentials = [
  "Multiple AI & Agentic AI Certifications",
  "Enterprise Consultant — ERP, SCM, Marketing & Sales Operations",
  "Product Expert & Sales Engineer across multiple industries",
  "Builder of AI agents, automation systems & lead gen tools",
  "Hands-on architect — strategy backed by real implementation",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-dark-950 bg-grid relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/50 to-dark-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-orange flex items-center justify-center text-3xl font-bold">
              M
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              I&apos;m <span className="text-gradient">Mitch</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Enterprise Consultant & AI Agent Developer
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              I specialize in helping businesses automate operations, marketing, and sales through AI. From enterprise ERP and supply chain integrations to lead generation and sales workflows — I bring deep product expertise, multiple AI certifications, and hands-on experience as both a consultant and sales engineer to every engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-6">My Background</h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  I work with businesses to automate the operations, marketing, and sales processes that eat up their time. My background spans enterprise ERP, supply chain, and complex integrations — which taught me what actually moves the needle.
                </p>
                <p>
                  As a product expert and sales engineer, I work across multiple customers and industries — from lead generation and sales workflows to back-office automation. I understand both sides of the business.
                </p>
                <p>
                  I build AI agents and automation systems across the full technology landscape — not locked into any single platform. AscendralAI is where I bring all of that together to deliver intelligent automation that drives real results.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Credentials</h2>
              <ul className="space-y-4">
                {credentials.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-400">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            How I <span className="text-gradient">Work</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-dark-700 rounded-xl p-8 border border-white/5">
                <div className="w-10 h-10 mb-4 rounded-lg bg-gradient-orange flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={v.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Let&apos;s figure out how AI can help <span className="text-gradient">your business</span>
          </h2>
          <p className="text-gray-400 mb-8">
            No sales pitch, no pressure. Just a conversation about where automation makes sense for you.
          </p>
          <a
            href="https://cal.com/mitchell-kunar-ga4jvw/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-orange text-white font-semibold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg inline-block"
          >
            Book a Free Call with Mitch
          </a>
        </div>
      </section>
    </>
  );
}
