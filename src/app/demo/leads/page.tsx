"use client";

import { useState, useEffect, useCallback } from "react";

interface Lead {
  name: string;
  company: string;
  email: string;
  title: string;
  industry: string;
  verified: boolean;
}

const fakeLeads: Lead[] = [
  { name: "James Carter", company: "Midwest Mechanical", email: "j.carter@midwestmech.com", title: "Owner", industry: "HVAC", verified: true },
  { name: "Sarah Mitchell", company: "Summit Property Group", email: "s.mitchell@summitpg.com", title: "Operations Director", industry: "Property Management", verified: true },
  { name: "Robert Torres", company: "Torres Electric Co.", email: "rob@torreselectric.com", title: "CEO", industry: "Electrical", verified: true },
  { name: "Emily Nguyen", company: "Bright Path Consulting", email: "emilyn@brightpath.io", title: "Managing Partner", industry: "Consulting", verified: true },
  { name: "David Brooks", company: "Brooks Construction LLC", email: "dbrooks@brooksconstruction.com", title: "President", industry: "Construction", verified: true },
  { name: "Lisa Hernandez", company: "GreenScape Landscaping", email: "lisa@greenscapellc.com", title: "Owner", industry: "Landscaping", verified: true },
  { name: "Mark Stevens", company: "Precision Plumbing", email: "mark.s@precisionplumb.com", title: "General Manager", industry: "Plumbing", verified: true },
  { name: "Angela Wright", company: "Wright Financial Advisors", email: "angela@wrightfa.com", title: "Founder", industry: "Financial Services", verified: true },
];

export default function LeadsDemoPage() {
  const [scanning, setScanning] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [scanComplete, setScanComplete] = useState(false);

  const startScan = useCallback(() => {
    setScanning(true);
    setLeads([]);
    setScanComplete(false);
    let idx = 0;
    const interval = setInterval(() => {
      if (idx < fakeLeads.length) {
        const lead = fakeLeads[idx];
        setLeads((prev) => [...prev, lead]);
        idx++;
      } else {
        clearInterval(interval);
        setScanning(false);
        setScanComplete(true);
      }
    }, 600);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      startScan();
    }, 500);
    return () => clearTimeout(timer);
  }, [startScan]);

  return (
    <section className="min-h-screen bg-dark-950 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold">Lead Generation Dashboard</h1>
            <p className="text-gray-400 text-sm">AscendralAI — Live Demo</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${scanning ? "bg-primary-500 animate-pulse" : "bg-success"}`} />
              <span className="text-sm text-gray-400">{scanning ? "Scanning..." : scanComplete ? "Scan Complete" : "Ready"}</span>
            </div>
            <button onClick={startScan} disabled={scanning} className="bg-gradient-orange text-white font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 text-sm">
              {scanning ? "Scanning..." : "Start Scan"}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Leads Found", value: leads.length },
            { label: "Verified", value: leads.filter((l) => l.verified).length },
            { label: "Industries", value: [...new Set(leads.map((l) => l.industry))].length },
            { label: "Scan Progress", value: `${Math.round((leads.length / fakeLeads.length) * 100)}%` },
          ].map((s) => (
            <div key={s.label} className="bg-dark-700 rounded-xl p-4 border border-white/5">
              <p className="text-xs text-gray-500 mb-1">{s.label}</p>
              <p className="text-2xl font-bold text-gradient">{s.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-dark-700 rounded-xl border border-white/5 overflow-hidden">
          <div className="px-6 py-4 border-b border-white/5">
            <h3 className="font-semibold text-sm">Discovered Leads</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b border-white/5">
                  <th className="px-6 py-3 font-medium">Name</th>
                  <th className="px-6 py-3 font-medium">Company</th>
                  <th className="px-6 py-3 font-medium hidden sm:table-cell">Title</th>
                  <th className="px-6 py-3 font-medium hidden md:table-cell">Industry</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead, i) => (
                  <tr key={i} className="border-b border-white/5 animate-fade-in-up">
                    <td className="px-6 py-3 font-medium">{lead.name}</td>
                    <td className="px-6 py-3 text-gray-400">{lead.company}</td>
                    <td className="px-6 py-3 text-gray-400 hidden sm:table-cell">{lead.title}</td>
                    <td className="px-6 py-3 text-gray-400 hidden md:table-cell">{lead.industry}</td>
                    <td className="px-6 py-3">
                      <span className="inline-flex items-center gap-1 text-success text-xs font-medium">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verified
                      </span>
                    </td>
                  </tr>
                ))}
                {leads.length === 0 && !scanning && (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">Click &quot;Start Scan&quot; to discover leads</td>
                  </tr>
                )}
                {leads.length === 0 && scanning && (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                      <div className="flex items-center justify-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                        Initializing scan...
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {scanComplete && (
          <div className="mt-8 bg-dark-700 rounded-xl p-8 border border-primary-500/20 text-center animate-fade-in-up">
            <h3 className="text-xl font-bold mb-2">Want real leads like these?</h3>
            <p className="text-gray-400 text-sm mb-6">This is just a taste. We&apos;ll build a custom lead gen system tuned to your exact market.</p>
            <a href="https://cal.com/mitchell-kunar-ga4jvw/30min" target="_blank" rel="noopener noreferrer" className="bg-gradient-orange text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
              Book a Call — It&apos;s Free
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
