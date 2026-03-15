import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="AscendralAI" className="h-8 w-auto mb-4" />
            <p className="text-gray-500 text-sm">
              AI automation systems that save you time, cut costs, and grow your business.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/case-studies", label: "Testimonials" },
                { href: "/process", label: "My Process" },
                { href: "/about", label: "About" },
                { href: "/demo", label: "Demo" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-500 hover:text-primary-500 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                { label: "Lead Generation", href: "/services" },
                { label: "Email Automation", href: "/services" },
                { label: "Document Processing", href: "/services" },
                { label: "Tailored Workflows", href: "/services" },
                { label: "AI Strategy Consulting", href: "/services" },
                { label: "Custom Development", href: "/services" },
              ].map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-gray-500 hover:text-primary-500 text-sm transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Get Started</h4>
            <p className="text-gray-500 text-sm mb-4">
              Ready to automate your business? Let&apos;s talk.
            </p>
            <a
              href="https://cal.com/mitchell-kunar-ga4jvw/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-orange text-white text-sm font-semibold px-5 py-2 rounded-lg inline-block hover:opacity-90 transition-opacity"
            >
              Book a Free Call
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} AscendralAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
