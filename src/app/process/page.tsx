import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Process — AscendralAI",
  description: "From discovery to go-live and beyond — here's exactly how we work together to bring AI automation to your business.",
};

const steps = [
  {
    number: "01",
    title: "Discovery/Strategy Session(s)",
    description: "We start by understanding your business inside and out. This is where we dig into your current operations, identify pain points, and uncover the biggest opportunities for automation.",
    expectations: [
      "Deep dive into your workflows, tools, and team structure",
      "Identify repetitive tasks that are costing you time and money",
      "Map out automation opportunities with estimated ROI",
      "Define project scope, goals, and success metrics",
      "Walk away with a clear strategy and action plan",
    ],
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    number: "02",
    title: "Build",
    description: "This is where your solution comes to life. We architect and develop your custom AI automation system based on the strategy we aligned on during discovery.",
    expectations: [
      "Custom AI agents and automation workflows built to your specs",
      "Integration design for your existing tools and platforms",
      "Regular progress updates so you always know where things stand",
      "Clean, scalable code built for long-term reliability",
      "Documentation of the system architecture and logic",
    ],
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    number: "03",
    title: "System Integration Testing",
    description: "Before anything touches your live environment, we rigorously test every integration point. We make sure your new automation works flawlessly with your existing systems.",
    expectations: [
      "End-to-end testing across all connected systems",
      "Data validation to ensure accuracy and consistency",
      "Edge case testing — we break it so your customers don't",
      "Performance testing under realistic workloads",
      "Detailed test results and any issues resolved",
    ],
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    number: "04",
    title: "Finalize Build & Testing",
    description: "We take the feedback from integration testing, make final refinements, and lock down the production-ready version of your system. Every detail gets polished.",
    expectations: [
      "Incorporate feedback and fix any issues found in testing",
      "Final round of optimization for speed and reliability",
      "Security review and data handling verification",
      "Production environment configuration",
      "Final sign-off walkthrough with your team",
    ],
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    number: "05",
    title: "User Acceptance Testing",
    subtitle: "If Applicable",
    description: "For larger or more complex engagements, your team gets hands-on time with the system before go-live. This ensures everything meets your expectations and your people are comfortable using it.",
    expectations: [
      "Your team tests the system in a controlled environment",
      "Real-world scenarios run by the people who will use it daily",
      "Feedback collected and final adjustments made",
      "Training sessions to ensure your team is confident",
      "Formal sign-off before moving to production",
    ],
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    number: "06",
    title: "Go-Live",
    description: "Launch day. We deploy your automation system to production and monitor everything closely to ensure a smooth rollout. You start seeing results immediately.",
    expectations: [
      "Controlled deployment to your production environment",
      "Real-time monitoring during the initial launch period",
      "Immediate issue response — we're on standby",
      "Verification that all systems are performing as expected",
      "Your automation is live and working for your business",
    ],
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    number: "07",
    title: "Support",
    description: "We don't disappear after go-live. Ongoing support ensures your system keeps running at peak performance and evolves as your business grows.",
    expectations: [
      "Ongoing monitoring and performance optimization",
      "Priority support for any issues or questions",
      "Regular check-ins to review system performance",
      "Updates and improvements as your needs change",
      "Scaling guidance as your business grows",
    ],
    icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-dark-950 bg-grid relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/50 to-dark-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-gradient">Process</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From the first conversation to ongoing support — here&apos;s exactly how we work together to bring AI automation to your business.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {steps.map((step, idx) => (
              <div key={step.number} className="relative">
                {/* Connector Line */}
                {idx < steps.length - 1 && (
                  <div className="absolute left-[39px] top-full w-0.5 h-6 bg-gradient-to-b from-primary-500/40 to-transparent z-10 hidden sm:block" />
                )}

                <div className="bg-dark-700 rounded-2xl border border-white/5 overflow-hidden hover:border-primary-500/20 transition-colors">
                  {/* Step Header */}
                  <div className="px-8 py-6 border-b border-white/5">
                    <div className="flex items-center gap-5">
                      <div className="w-[54px] h-[54px] rounded-xl bg-gradient-orange flex items-center justify-center shrink-0">
                        <span className="text-lg font-bold">{step.number}</span>
                      </div>
                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold">{step.title}</h2>
                        {step.subtitle && (
                          <span className="text-sm text-gray-500 italic">{step.subtitle}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                      {/* Description */}
                      <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                            <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} />
                            </svg>
                          </div>
                          <h3 className="text-sm font-semibold text-primary-500 uppercase tracking-wider">Overview</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed">{step.description}</p>
                      </div>

                      {/* What to Expect */}
                      <div className="lg:col-span-3">
                        <h3 className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-4">What to Expect</h3>
                        <div className="space-y-3">
                          {step.expectations.map((item, i) => (
                            <div key={i} className="flex items-start gap-3 bg-dark-600/50 rounded-lg p-3 border border-white/5">
                              <svg className="w-5 h-5 text-success mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-sm text-gray-300">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to get <span className="text-gradient">started</span>?
          </h2>
          <p className="text-gray-400 mb-8">
            It all begins with a conversation. Book a free strategy call and let&apos;s figure out how AI can work for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://cal.com/mitchell-kunar-ga4jvw/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-orange text-white font-semibold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg inline-block"
            >
              Book a Free Call
            </a>
            <Link
              href="/demo"
              className="border border-white/20 text-white font-semibold px-8 py-3 rounded-lg hover:border-primary-500 hover:text-primary-500 transition-colors"
            >
              See Demos First
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
