import Link from "next/link";

const demos = [
  {
    title: "Lead Generation Automation",
    description: "Automated lead discovery and verification in action",
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "Email & Communication Automation",
    description: "AI-powered email triage and response system",
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "Document Processing",
    description: "Intelligent document extraction and processing",
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "Tailored Workflows",
    description: "Custom automation workflows built for your business",
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "AI Strategy Consulting",
    description: "Strategic AI roadmap and implementation planning",
    videoId: "dQw4w9WgXcQ",
  },
  {
    title: "Custom Development",
    description: "Bespoke AI solutions designed from the ground up",
    videoId: "dQw4w9WgXcQ",
  },
];

export default function DemosPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-dark-950 bg-grid relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/50 to-dark-950" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Product <span className="text-gradient">Demos</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            See our AI automation systems in action
          </p>
        </div>
      </section>

      {/* Videos */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {demos.map((demo) => (
            <div key={demo.title}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">{demo.title}</h2>
              <p className="text-gray-400 mb-6">{demo.description}</p>

              {/* Video Embed */}
              <div className="relative w-full rounded-xl overflow-hidden border border-white/5" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${demo.videoId}`}
                  title={demo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                <a
                  href="https://cal.com/mitchell-kunar-ga4jvw/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-orange text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Free Intro Call
                </a>
                <Link
                  href="/services"
                  className="text-primary-500 font-medium hover:underline"
                >
                  Learn More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
