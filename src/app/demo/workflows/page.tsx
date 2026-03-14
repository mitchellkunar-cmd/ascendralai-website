import Link from "next/link";

export default function WorkflowsDemoPage() {
  return (
    <>
      <section className="py-20 bg-dark-950 bg-grid relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/50 to-dark-950" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/demo" className="text-primary-500 text-sm font-medium hover:underline mb-8 inline-block">&larr; All Demos</Link>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Tailored Workflows <span className="text-gradient">Demo</span>
          </h1>
          <p className="text-gray-400 mb-8">See how we build custom automation workflows tailored to your exact business processes.</p>

          <div className="relative w-full rounded-xl overflow-hidden border border-white/5" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Tailored Workflows Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="mt-8 bg-dark-700 rounded-xl p-8 border border-white/5">
            <h2 className="text-xl font-bold mb-4">What you&apos;ll see</h2>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-success mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Custom automation pipelines built for specific business processes
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-success mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Data syncing between multiple applications in real-time
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-success mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Automated reports and notifications triggered by business events
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            <a href="https://cal.com/mitchell-kunar-ga4jvw/30min" target="_blank" rel="noopener noreferrer" className="bg-gradient-orange text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
              Book a Call
            </a>
            <Link href="/services" className="text-primary-500 font-medium hover:underline">Learn More &rarr;</Link>
          </div>
        </div>
      </section>
    </>
  );
}
