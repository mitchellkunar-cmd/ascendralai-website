"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface Opportunity {
  department: string;
  process: string;
  hoursWasted: number;
  annualCost: string;
  annualCostNum: number;
  timeSaved: string;
  effort: "Low" | "Medium" | "High";
  priority: "Quick Win" | "Medium-Term" | "Strategic";
}

interface DeptScan {
  name: string;
  headcount: number;
  tools: string[];
  painPoints: string[];
}

const companyProfile = {
  name: "Apex Industrial Solutions",
  industry: "Manufacturing & Distribution",
  employees: 185,
  revenue: "$42M",
  locations: 3,
  erpSystem: "Oracle Fusion Cloud",
};

const departments: DeptScan[] = [
  {
    name: "Finance & Accounting",
    headcount: 22,
    tools: ["Oracle ERP", "Excel", "Bill.com", "Outlook"],
    painPoints: ["Manual invoice matching", "Month-end close takes 8+ days", "Expense report processing backlog"],
  },
  {
    name: "Operations",
    headcount: 68,
    tools: ["Oracle SCM", "Warehouse WMS", "Excel", "Paper forms"],
    painPoints: ["Inventory counts done manually", "PO approval bottlenecks", "Vendor communication via email"],
  },
  {
    name: "Sales",
    headcount: 24,
    tools: ["HubSpot CRM", "Outlook", "Excel", "LinkedIn"],
    painPoints: ["Lead research takes 3+ hrs/day", "Quote generation is manual", "No follow-up automation"],
  },
  {
    name: "Human Resources",
    headcount: 8,
    tools: ["Oracle HCM", "DocuSign", "Outlook", "SharePoint"],
    painPoints: ["Onboarding is 90% manual", "Benefits questions flood inbox", "Compliance doc tracking in spreadsheets"],
  },
];

const opportunities: Opportunity[] = [
  { department: "Finance", process: "Three-Way Invoice Matching", hoursWasted: 25, annualCost: "$67,600", annualCostNum: 67600, timeSaved: "22 hrs/wk", effort: "Medium", priority: "Quick Win" },
  { department: "Finance", process: "Expense Report Processing", hoursWasted: 12, annualCost: "$32,400", annualCostNum: 32400, timeSaved: "10 hrs/wk", effort: "Low", priority: "Quick Win" },
  { department: "Operations", process: "Purchase Order Automation", hoursWasted: 18, annualCost: "$42,100", annualCostNum: 42100, timeSaved: "15 hrs/wk", effort: "Medium", priority: "Quick Win" },
  { department: "Operations", process: "Inventory Monitoring & Auto-Reorder", hoursWasted: 30, annualCost: "$70,200", annualCostNum: 70200, timeSaved: "26 hrs/wk", effort: "High", priority: "Medium-Term" },
  { department: "Sales", process: "Lead Research & Enrichment", hoursWasted: 35, annualCost: "$94,600", annualCostNum: 94600, timeSaved: "30 hrs/wk", effort: "Low", priority: "Quick Win" },
  { department: "Sales", process: "Automated Quote Generation", hoursWasted: 15, annualCost: "$40,500", annualCostNum: 40500, timeSaved: "12 hrs/wk", effort: "Medium", priority: "Medium-Term" },
  { department: "HR", process: "Employee Onboarding Automation", hoursWasted: 10, annualCost: "$27,000", annualCostNum: 27000, timeSaved: "8 hrs/wk", effort: "Medium", priority: "Medium-Term" },
  { department: "HR", process: "AI Benefits Assistant (Chatbot)", hoursWasted: 8, annualCost: "$21,600", annualCostNum: 21600, timeSaved: "7 hrs/wk", effort: "High", priority: "Strategic" },
  { department: "Operations", process: "Vendor Communication Agent", hoursWasted: 14, annualCost: "$32,800", annualCostNum: 32800, timeSaved: "12 hrs/wk", effort: "High", priority: "Strategic" },
  { department: "Finance", process: "AI-Assisted Month-End Close", hoursWasted: 20, annualCost: "$54,000", annualCostNum: 54000, timeSaved: "16 hrs/wk", effort: "High", priority: "Strategic" },
];

const readinessCategories = [
  { label: "Data Maturity", score: 72 },
  { label: "Process Documentation", score: 58 },
  { label: "Tech Stack Readiness", score: 85 },
  { label: "Team Adaptability", score: 68 },
  { label: "Integration Capability", score: 79 },
  { label: "Leadership Buy-In", score: 90 },
];

const effortColors = {
  Low: "bg-green-500/10 border-green-500/20 text-green-400",
  Medium: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
  High: "bg-red-500/10 border-red-500/20 text-red-400",
};

const priorityColors = {
  "Quick Win": "bg-green-500/10 border-green-500/20 text-green-400",
  "Medium-Term": "bg-blue-500/10 border-blue-500/20 text-blue-400",
  "Strategic": "bg-purple-500/10 border-purple-500/20 text-purple-400",
};

type DemoPhase = "idle" | "scanning" | "departments" | "opportunities" | "roadmap" | "score" | "done";

export default function StrategyDemoPage() {
  const [phase, setPhase] = useState<DemoPhase>("idle");
  const [profileVisible, setProfileVisible] = useState(false);
  const [scannedDepts, setScannedDepts] = useState<number[]>([]);
  const [visibleOpps, setVisibleOpps] = useState<number[]>([]);
  const [showRoadmap, setShowRoadmap] = useState(false);
  const [visibleScores, setVisibleScores] = useState<number[]>([]);
  const [overallScore, setOverallScore] = useState(0);
  const [running, setRunning] = useState(false);
  const oppsRef = useRef<HTMLDivElement>(null);

  const totalSavings = opportunities
    .filter((_, i) => visibleOpps.includes(i))
    .reduce((sum, o) => sum + o.annualCostNum, 0);
  const totalHours = opportunities
    .filter((_, i) => visibleOpps.includes(i))
    .reduce((sum, o) => sum + o.hoursWasted, 0);

  const runAssessment = useCallback(() => {
    setRunning(true);
    setPhase("idle");
    setProfileVisible(false);
    setScannedDepts([]);
    setVisibleOpps([]);
    setShowRoadmap(false);
    setVisibleScores([]);
    setOverallScore(0);

    let delay = 300;

    // Phase 1: Company profile
    setTimeout(() => {
      setPhase("scanning");
      setProfileVisible(true);
    }, delay);
    delay += 2000;

    // Phase 2: Department scans
    setTimeout(() => setPhase("departments"), delay);
    departments.forEach((_, i) => {
      setTimeout(() => setScannedDepts((prev) => [...prev, i]), delay + 500 + i * 1200);
    });
    delay += 500 + departments.length * 1200 + 500;

    // Phase 3: Opportunities
    setTimeout(() => setPhase("opportunities"), delay);
    opportunities.forEach((_, i) => {
      setTimeout(() => {
        setVisibleOpps((prev) => [...prev, i]);
        if (oppsRef.current) oppsRef.current.scrollTop = oppsRef.current.scrollHeight;
      }, delay + 300 + i * 500);
    });
    delay += 300 + opportunities.length * 500 + 800;

    // Phase 4: Roadmap
    setTimeout(() => {
      setPhase("roadmap");
      setShowRoadmap(true);
    }, delay);
    delay += 3000;

    // Phase 5: Readiness Score
    setTimeout(() => setPhase("score"), delay);
    readinessCategories.forEach((_, i) => {
      setTimeout(() => setVisibleScores((prev) => [...prev, i]), delay + 300 + i * 400);
    });
    setTimeout(() => {
      const avg = Math.round(readinessCategories.reduce((s, c) => s + c.score, 0) / readinessCategories.length);
      setOverallScore(avg);
    }, delay + 300 + readinessCategories.length * 400 + 300);
    delay += 300 + readinessCategories.length * 400 + 1500;

    // Done
    setTimeout(() => {
      setPhase("done");
      setRunning(false);
    }, delay);
  }, []);

  useEffect(() => {
    const timer = setTimeout(runAssessment, 600);
    return () => clearTimeout(timer);
  }, [runAssessment]);

  const getGrade = (score: number) => {
    if (score >= 90) return "A+";
    if (score >= 85) return "A";
    if (score >= 80) return "A-";
    if (score >= 75) return "B+";
    if (score >= 70) return "B";
    if (score >= 65) return "B-";
    return "C+";
  };

  const phaseLabels: Record<DemoPhase, string> = {
    idle: "Ready",
    scanning: "Scanning Company Profile",
    departments: "Analyzing Departments",
    opportunities: "Identifying Opportunities",
    roadmap: "Building Roadmap",
    score: "Calculating Readiness Score",
    done: "Assessment Complete",
  };

  return (
    <section className="min-h-screen bg-dark-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold">AI Strategy Assessment</h1>
            <p className="text-gray-400 text-sm">Apex Industrial Solutions — Live Demo</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${running ? "bg-primary-500 animate-pulse" : phase === "done" ? "bg-success" : "bg-gray-500"}`} />
              <span className="text-sm text-gray-400">{phaseLabels[phase]}</span>
            </div>
            <button onClick={runAssessment} disabled={running} className="bg-gradient-orange text-white font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 text-sm">
              {running ? "Analyzing..." : "Run Assessment"}
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Opportunities Found", value: visibleOpps.length },
            { label: "Hours Wasted / Week", value: totalHours },
            { label: "Annual Cost of Waste", value: totalSavings > 0 ? `$${(totalSavings / 1000).toFixed(0)}K` : "—" },
            { label: "AI Readiness", value: overallScore > 0 ? getGrade(overallScore) : "—" },
          ].map((s) => (
            <div key={s.label} className="bg-dark-700 rounded-xl p-4 border border-white/5">
              <p className="text-xs text-gray-500 mb-1">{s.label}</p>
              <p className="text-2xl font-bold text-gradient">{s.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Company Profile */}
            <div className={`bg-dark-700 rounded-xl border border-white/5 overflow-hidden transition-all duration-500 ${profileVisible ? "opacity-100" : "opacity-40"}`}>
              <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
                <h3 className="font-semibold text-sm">Company Profile</h3>
                {profileVisible && <span className="text-xs text-success">Scanned</span>}
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(companyProfile).map(([key, value]) => (
                    <div key={key} className={`bg-dark-600 rounded-lg p-3 border border-white/5 transition-all duration-500 ${profileVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                      <p className="text-xs text-gray-500 mb-1 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</p>
                      <p className="text-sm font-medium">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Department Scans */}
            <div className="bg-dark-700 rounded-xl border border-white/5 overflow-hidden">
              <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
                <h3 className="font-semibold text-sm">Department Analysis</h3>
                {scannedDepts.length === departments.length && <span className="text-xs text-success">Complete</span>}
              </div>
              <div className="divide-y divide-white/5">
                {departments.map((dept, i) => {
                  const isScanned = scannedDepts.includes(i);
                  return (
                    <div key={dept.name} className={`px-6 py-4 transition-all duration-500 ${isScanned ? "opacity-100" : "opacity-30"}`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {isScanned ? (
                            <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                          ) : (
                            <span className="w-4 h-4 rounded-full bg-dark-600 border border-white/10" />
                          )}
                          <span className="text-sm font-medium">{dept.name}</span>
                        </div>
                        <span className="text-xs text-gray-500">{dept.headcount} people</span>
                      </div>
                      {isScanned && (
                        <div className="ml-6 animate-fade-in-up">
                          <div className="flex flex-wrap gap-1.5 mb-2">
                            {dept.tools.map((tool) => (
                              <span key={tool} className="text-xs px-2 py-0.5 rounded bg-dark-600 text-gray-400 border border-white/5">{tool}</span>
                            ))}
                          </div>
                          <ul className="space-y-1">
                            {dept.painPoints.map((p) => (
                              <li key={p} className="text-xs text-red-400 flex items-start gap-1.5">
                                <span className="shrink-0 mt-0.5">!</span>
                                {p}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Readiness Score */}
            <div className="bg-dark-700 rounded-xl border border-white/5 overflow-hidden">
              <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
                <h3 className="font-semibold text-sm">AI Readiness Score</h3>
                {overallScore > 0 && <span className="text-xs text-success">{getGrade(overallScore)}</span>}
              </div>
              <div className="p-6">
                {overallScore > 0 && (
                  <div className="text-center mb-6 animate-fade-in-up">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border-4 border-primary-500 mb-2">
                      <div>
                        <p className="text-3xl font-bold text-gradient">{getGrade(overallScore)}</p>
                        <p className="text-xs text-gray-500">{overallScore}/100</p>
                      </div>
                    </div>
                  </div>
                )}
                <div className="space-y-3">
                  {readinessCategories.map((cat, i) => {
                    const isVisible = visibleScores.includes(i);
                    return (
                      <div key={cat.label} className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-gray-400">{cat.label}</span>
                          <span className="text-xs font-medium">{isVisible ? cat.score : 0}%</span>
                        </div>
                        <div className="w-full h-2 bg-dark-600 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: isVisible ? `${cat.score}%` : "0%",
                              background: cat.score >= 80 ? "#22c55e" : cat.score >= 65 ? "#f97316" : "#ef4444",
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Opportunities Table */}
            <div className="bg-dark-700 rounded-xl border border-white/5 overflow-hidden">
              <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
                <h3 className="font-semibold text-sm">Automation Opportunities</h3>
                {visibleOpps.length === opportunities.length && <span className="text-xs text-success">{opportunities.length} found</span>}
              </div>
              <div ref={oppsRef} className="max-h-96 overflow-y-auto">
                <div className="divide-y divide-white/5">
                  {opportunities.map((opp, i) => {
                    if (!visibleOpps.includes(i)) return null;
                    return (
                      <div key={i} className="px-6 py-4 animate-fade-in-up">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div>
                            <p className="text-sm font-medium">{opp.process}</p>
                            <p className="text-xs text-gray-500">{opp.department}</p>
                          </div>
                          <div className="flex gap-1.5 shrink-0">
                            <span className={`text-xs px-2 py-0.5 rounded-full border ${effortColors[opp.effort]}`}>{opp.effort}</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full border ${priorityColors[opp.priority]}`}>{opp.priority}</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="bg-dark-600 rounded p-2">
                            <p className="text-xs text-gray-500">Wasted</p>
                            <p className="text-sm font-medium text-red-400">{opp.hoursWasted} hrs/wk</p>
                          </div>
                          <div className="bg-dark-600 rounded p-2">
                            <p className="text-xs text-gray-500">Can Save</p>
                            <p className="text-sm font-medium text-success">{opp.timeSaved}</p>
                          </div>
                          <div className="bg-dark-600 rounded p-2">
                            <p className="text-xs text-gray-500">Annual Cost</p>
                            <p className="text-sm font-medium text-primary-500">{opp.annualCost}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {visibleOpps.length === 0 && (
                    <div className="px-6 py-8 text-center text-gray-500 text-sm">
                      <div className="flex items-center justify-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                        Scanning for opportunities...
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {visibleOpps.length === opportunities.length && (
                <div className="px-6 py-3 border-t border-white/5 bg-dark-600/50">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Total Annual Savings Potential</span>
                    <span className="font-bold text-gradient">${(totalSavings / 1000).toFixed(0)}K</span>
                  </div>
                </div>
              )}
            </div>

            {/* Implementation Roadmap */}
            <div className="bg-dark-700 rounded-xl border border-white/5 overflow-hidden">
              <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
                <h3 className="font-semibold text-sm">Implementation Roadmap</h3>
                {showRoadmap && <span className="text-xs text-success">Prioritized</span>}
              </div>
              <div className="p-6">
                {showRoadmap ? (
                  <div className="space-y-6 animate-fade-in-up">
                    {(["Quick Win", "Medium-Term", "Strategic"] as const).map((priority, phaseIdx) => {
                      const phaseOpps = opportunities.filter((o) => o.priority === priority);
                      const phaseTimeline = phaseIdx === 0 ? "Weeks 1-4" : phaseIdx === 1 ? "Months 2-4" : "Months 5-8";
                      const phaseSavings = phaseOpps.reduce((s, o) => s + o.annualCostNum, 0);
                      return (
                        <div key={priority}>
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${priorityColors[priority]}`}>{priority}</span>
                              <span className="text-xs text-gray-500">{phaseTimeline}</span>
                            </div>
                            <span className="text-xs font-medium text-gray-400">${(phaseSavings / 1000).toFixed(0)}K/yr</span>
                          </div>
                          <div className="space-y-2 ml-2 border-l-2 border-white/5 pl-4">
                            {phaseOpps.map((opp) => (
                              <div key={opp.process} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <span className={`w-2 h-2 rounded-full ${phaseIdx === 0 ? "bg-green-500" : phaseIdx === 1 ? "bg-blue-500" : "bg-purple-500"}`} />
                                  <span className="text-sm text-gray-300">{opp.process}</span>
                                </div>
                                <span className={`text-xs ${effortColors[opp.effort]} px-1.5 py-0.5 rounded border`}>{opp.effort}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}

                    {/* Summary */}
                    <div className="bg-dark-600 rounded-lg p-4 border border-primary-500/20 mt-4">
                      <p className="text-xs text-primary-500 font-medium mb-2">Executive Summary</p>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        Apex Industrial has <span className="text-white font-medium">10 high-impact automation opportunities</span> across 4 departments, with a total annual savings potential of <span className="text-gradient font-bold">${(totalSavings / 1000).toFixed(0)}K</span> and <span className="text-white font-medium">{totalHours} hours/week</span> recovered. We recommend starting with 4 Quick Wins in Finance, Operations, and Sales that can be delivered in the first month with low-to-medium implementation effort.
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-gray-500 text-center py-8">Roadmap generates after opportunity analysis</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Post-demo CTA */}
        {phase === "done" && (
          <div className="mt-8 bg-dark-700 rounded-xl p-8 border border-primary-500/20 text-center animate-fade-in-up">
            <h3 className="text-xl font-bold mb-2">This is what you walk away with after one call</h3>
            <p className="text-gray-400 text-sm mb-6">A full AI readiness assessment, opportunity analysis with ROI projections, and a prioritized implementation roadmap — tailored to your business.</p>
            <a href="https://cal.com/mitchell-kunar-ga4jvw/30min" target="_blank" rel="noopener noreferrer" className="bg-gradient-orange text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
              Free Intro Call
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
