"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface Phase {
  id: string;
  label: string;
  duration: number;
}

interface ArchNode {
  id: string;
  label: string;
  x: number;
  y: number;
  type: "source" | "ai" | "integration" | "output";
}

interface ArchConnection {
  from: string;
  to: string;
}

interface CodeLine {
  text: string;
  indent: number;
  type: "comment" | "keyword" | "string" | "normal" | "function" | "blank";
}

const phases: Phase[] = [
  { id: "requirements", label: "Analyzing Requirements", duration: 3000 },
  { id: "architecture", label: "Designing Architecture", duration: 5000 },
  { id: "build", label: "Building Components", duration: 6000 },
  { id: "integrate", label: "Wiring Integrations", duration: 4000 },
  { id: "deploy", label: "Deploying to Production", duration: 3000 },
];

const requirements = [
  "Monitor inventory levels across all warehouses in real-time",
  "Trigger auto-reorder when stock falls below minimum threshold",
  "Generate purchase orders and send to preferred vendors",
  "Sync with Oracle ERP for financial tracking",
  "Send alerts to operations team via Slack and email",
  "Dashboard with live stock levels and order status",
];

const archNodes: ArchNode[] = [
  { id: "warehouse", label: "Warehouse API", x: 10, y: 20, type: "source" },
  { id: "erp", label: "Oracle ERP", x: 10, y: 50, type: "source" },
  { id: "monitor", label: "AI Monitor Agent", x: 40, y: 20, type: "ai" },
  { id: "reorder", label: "Reorder Engine", x: 40, y: 50, type: "ai" },
  { id: "vendor_api", label: "Vendor Portal", x: 70, y: 20, type: "integration" },
  { id: "slack", label: "Slack Alerts", x: 70, y: 50, type: "integration" },
  { id: "po_gen", label: "PO Generator", x: 70, y: 80, type: "integration" },
  { id: "dashboard", label: "Live Dashboard", x: 40, y: 80, type: "output" },
];

const archConnections: ArchConnection[] = [
  { from: "warehouse", to: "monitor" },
  { from: "erp", to: "monitor" },
  { from: "monitor", to: "reorder" },
  { from: "reorder", to: "vendor_api" },
  { from: "reorder", to: "slack" },
  { from: "reorder", to: "po_gen" },
  { from: "monitor", to: "dashboard" },
  { from: "po_gen", to: "erp" },
];

const codeLines: CodeLine[] = [
  { text: "# inventory_monitor.py — AI Inventory Agent", indent: 0, type: "comment" },
  { text: "", indent: 0, type: "blank" },
  { text: "import oracle_fusion as erp", indent: 0, type: "keyword" },
  { text: "from ascendral.ai import MonitorAgent, ReorderEngine", indent: 0, type: "keyword" },
  { text: "from ascendral.integrations import SlackNotifier, VendorPortal", indent: 0, type: "keyword" },
  { text: "", indent: 0, type: "blank" },
  { text: "class InventoryMonitor(MonitorAgent):", indent: 0, type: "function" },
  { text: "def __init__(self, config):", indent: 1, type: "function" },
  { text: "self.erp = erp.connect(config.oracle_endpoint)", indent: 2, type: "normal" },
  { text: "self.thresholds = config.reorder_thresholds", indent: 2, type: "normal" },
  { text: "self.slack = SlackNotifier(channel=\"#ops-alerts\")", indent: 2, type: "normal" },
  { text: "self.vendor = VendorPortal(config.vendor_api_key)", indent: 2, type: "normal" },
  { text: "", indent: 0, type: "blank" },
  { text: "async def check_stock_levels(self):", indent: 1, type: "function" },
  { text: "\"\"\"Poll all warehouses, flag items below threshold\"\"\"", indent: 2, type: "string" },
  { text: "inventory = await self.erp.get_inventory(all_sites=True)", indent: 2, type: "normal" },
  { text: "low_stock = [", indent: 2, type: "normal" },
  { text: "item for item in inventory", indent: 3, type: "normal" },
  { text: "if item.qty_on_hand < self.thresholds[item.sku]", indent: 3, type: "normal" },
  { text: "]", indent: 2, type: "normal" },
  { text: "return low_stock", indent: 2, type: "keyword" },
  { text: "", indent: 0, type: "blank" },
  { text: "async def trigger_reorder(self, items):", indent: 1, type: "function" },
  { text: "\"\"\"Generate POs and notify team\"\"\"", indent: 2, type: "string" },
  { text: "for item in items:", indent: 2, type: "keyword" },
  { text: "po = await self.erp.create_purchase_order(", indent: 3, type: "normal" },
  { text: "vendor=item.preferred_vendor,", indent: 4, type: "normal" },
  { text: "sku=item.sku,", indent: 4, type: "normal" },
  { text: "qty=item.reorder_qty,", indent: 4, type: "normal" },
  { text: "ship_to=item.warehouse_id", indent: 4, type: "normal" },
  { text: ")", indent: 3, type: "normal" },
  { text: "await self.vendor.submit_order(po)", indent: 3, type: "normal" },
  { text: "await self.slack.send(", indent: 3, type: "normal" },
  { text: "f\"Auto-reorder: {po.id} | {item.name} x{item.reorder_qty}\"", indent: 4, type: "string" },
  { text: ")", indent: 3, type: "normal" },
  { text: "", indent: 0, type: "blank" },
  { text: "# Deploy with real-time monitoring", indent: 0, type: "comment" },
  { text: "agent = InventoryMonitor(config)", indent: 0, type: "normal" },
  { text: "agent.run(interval=\"5m\", dashboard=True)", indent: 0, type: "normal" },
];

const deployLogs = [
  "Building Docker container...",
  "Running test suite... 24/24 passed",
  "Pushing to container registry...",
  "Deploying to OCI Kubernetes cluster...",
  "Configuring environment variables...",
  "Connecting to Oracle Fusion endpoint...",
  "Verifying vendor API connection...",
  "Slack webhook configured...",
  "Health check passed",
  "Agent is LIVE — monitoring 3 warehouses, 1,247 SKUs",
];

const nodeTypeColors = {
  source: { bg: "bg-blue-500/20", border: "border-blue-500/40", text: "text-blue-400" },
  ai: { bg: "bg-primary-500/20", border: "border-primary-500/40", text: "text-primary-500" },
  integration: { bg: "bg-purple-500/20", border: "border-purple-500/40", text: "text-purple-400" },
  output: { bg: "bg-green-500/20", border: "border-green-500/40", text: "text-green-400" },
};

export default function CustomDevDemoPage() {
  const [currentPhase, setCurrentPhase] = useState(-1);
  const [completedPhases, setCompletedPhases] = useState<number[]>([]);
  const [visibleRequirements, setVisibleRequirements] = useState<number[]>([]);
  const [visibleNodes, setVisibleNodes] = useState<string[]>([]);
  const [visibleConnections, setVisibleConnections] = useState<number[]>([]);
  const [visibleCodeLines, setVisibleCodeLines] = useState(0);
  const [activeIntegrations, setActiveIntegrations] = useState<string[]>([]);
  const [deployLogLines, setDeployLogLines] = useState<string[]>([]);
  const [allDone, setAllDone] = useState(false);
  const [running, setRunning] = useState(false);
  const codeRef = useRef<HTMLDivElement>(null);
  const deployRef = useRef<HTMLDivElement>(null);

  const runDemo = useCallback(() => {
    setRunning(true);
    setCurrentPhase(-1);
    setCompletedPhases([]);
    setVisibleRequirements([]);
    setVisibleNodes([]);
    setVisibleConnections([]);
    setVisibleCodeLines(0);
    setActiveIntegrations([]);
    setDeployLogLines([]);
    setAllDone(false);

    let totalDelay = 300;

    // Phase 0: Requirements
    setTimeout(() => setCurrentPhase(0), totalDelay);
    requirements.forEach((_, i) => {
      setTimeout(() => {
        setVisibleRequirements((prev) => [...prev, i]);
      }, totalDelay + 400 + i * 400);
    });
    totalDelay += phases[0].duration;
    setTimeout(() => setCompletedPhases((prev) => [...prev, 0]), totalDelay);

    // Phase 1: Architecture
    setTimeout(() => setCurrentPhase(1), totalDelay);
    archNodes.forEach((node, i) => {
      setTimeout(() => {
        setVisibleNodes((prev) => [...prev, node.id]);
      }, totalDelay + 300 + i * 500);
    });
    archConnections.forEach((_, i) => {
      setTimeout(() => {
        setVisibleConnections((prev) => [...prev, i]);
      }, totalDelay + 300 + archNodes.length * 500 + i * 200);
    });
    totalDelay += phases[1].duration;
    setTimeout(() => setCompletedPhases((prev) => [...prev, 1]), totalDelay);

    // Phase 2: Build
    setTimeout(() => setCurrentPhase(2), totalDelay);
    const codeDelay = phases[2].duration / codeLines.length;
    codeLines.forEach((_, i) => {
      setTimeout(() => {
        setVisibleCodeLines(i + 1);
        if (codeRef.current) {
          codeRef.current.scrollTop = codeRef.current.scrollHeight;
        }
      }, totalDelay + 300 + i * codeDelay);
    });
    totalDelay += phases[2].duration;
    setTimeout(() => setCompletedPhases((prev) => [...prev, 2]), totalDelay);

    // Phase 3: Integrate
    setTimeout(() => setCurrentPhase(3), totalDelay);
    const integrationOrder = ["warehouse", "erp", "monitor", "reorder", "vendor_api", "slack", "po_gen", "dashboard"];
    integrationOrder.forEach((id, i) => {
      setTimeout(() => {
        setActiveIntegrations((prev) => [...prev, id]);
      }, totalDelay + 300 + i * 450);
    });
    totalDelay += phases[3].duration;
    setTimeout(() => setCompletedPhases((prev) => [...prev, 3]), totalDelay);

    // Phase 4: Deploy
    setTimeout(() => setCurrentPhase(4), totalDelay);
    deployLogs.forEach((log, i) => {
      setTimeout(() => {
        setDeployLogLines((prev) => [...prev, log]);
        if (deployRef.current) {
          deployRef.current.scrollTop = deployRef.current.scrollHeight;
        }
      }, totalDelay + 300 + i * 280);
    });
    totalDelay += phases[4].duration;
    setTimeout(() => {
      setCompletedPhases((prev) => [...prev, 4]);
      setRunning(false);
      setAllDone(true);
    }, totalDelay);
  }, []);

  useEffect(() => {
    const timer = setTimeout(runDemo, 600);
    return () => clearTimeout(timer);
  }, [runDemo]);

  const syntaxColor = (type: CodeLine["type"]) => {
    switch (type) {
      case "comment": return "text-gray-500";
      case "keyword": return "text-purple-400";
      case "string": return "text-green-400";
      case "function": return "text-yellow-400";
      case "blank": return "";
      default: return "text-gray-300";
    }
  };

  return (
    <section className="min-h-screen bg-dark-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold">Custom AI Development</h1>
            <p className="text-gray-400 text-sm">Inventory Auto-Reorder Agent — Live Build</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${running ? "bg-primary-500 animate-pulse" : allDone ? "bg-success" : "bg-gray-500"}`} />
              <span className="text-sm text-gray-400">
                {running && currentPhase >= 0 ? phases[currentPhase].label : allDone ? "Deployed & Live" : "Ready"}
              </span>
            </div>
            <button onClick={runDemo} disabled={running} className="bg-gradient-orange text-white font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 text-sm">
              {running ? "Building..." : "Run Build"}
            </button>
          </div>
        </div>

        {/* Phase Progress Bar */}
        <div className="bg-dark-700 rounded-xl border border-white/5 p-6 mb-8">
          <div className="flex items-center justify-between gap-2">
            {phases.map((phase, i) => (
              <div key={phase.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                    completedPhases.includes(i)
                      ? "bg-success text-white"
                      : currentPhase === i
                        ? "bg-primary-500 text-white animate-pulse"
                        : "bg-dark-600 text-gray-500"
                  }`}>
                    {completedPhases.includes(i) ? (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    ) : i + 1}
                  </div>
                  <span className={`text-xs mt-2 text-center hidden sm:block ${currentPhase === i ? "text-primary-500" : completedPhases.includes(i) ? "text-success" : "text-gray-500"}`}>
                    {phase.label.split(" ").slice(-1)[0]}
                  </span>
                </div>
                {i < phases.length - 1 && (
                  <div className={`h-0.5 flex-1 mx-1 transition-colors duration-500 ${completedPhases.includes(i) ? "bg-success" : "bg-dark-600"}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Panel */}
          <div className="space-y-6">
            {/* Requirements */}
            <div className="bg-dark-700 rounded-xl border border-white/5 overflow-hidden">
              <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
                <h3 className="font-semibold text-sm">Requirements</h3>
                {completedPhases.includes(0) && <span className="text-xs text-success">Analyzed</span>}
              </div>
              <div className="p-6">
                <div className="bg-dark-600 rounded-lg p-4 mb-4 border border-white/5">
                  <p className="text-xs text-gray-500 mb-1">Client Request</p>
                  <p className="text-sm text-gray-300 italic">&quot;I need an AI that monitors my inventory across 3 warehouses and automatically reorders when stock gets low. It should create POs in our Oracle system and notify the ops team.&quot;</p>
                </div>
                <ul className="space-y-2">
                  {requirements.map((req, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-2 text-sm transition-all duration-300 ${visibleRequirements.includes(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                    >
                      <svg className="w-4 h-4 text-success mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-400">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Architecture Diagram */}
            <div className="bg-dark-700 rounded-xl border border-white/5 overflow-hidden">
              <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
                <h3 className="font-semibold text-sm">System Architecture</h3>
                {completedPhases.includes(1) && <span className="text-xs text-success">Designed</span>}
              </div>
              <div className="p-6">
                <div className="relative" style={{ height: "280px" }}>
                  {/* SVG Connections */}
                  <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                    {archConnections.map((conn, i) => {
                      if (!visibleConnections.includes(i)) return null;
                      const fromNode = archNodes.find((n) => n.id === conn.from)!;
                      const toNode = archNodes.find((n) => n.id === conn.to)!;
                      const x1 = `${fromNode.x + 12}%`;
                      const y1 = `${fromNode.y + 5}%`;
                      const x2 = `${toNode.x}%`;
                      const y2 = `${toNode.y + 5}%`;
                      const isActive = activeIntegrations.includes(conn.from) && activeIntegrations.includes(conn.to);
                      return (
                        <line
                          key={i}
                          x1={x1} y1={y1} x2={x2} y2={y2}
                          stroke={isActive ? "#f97316" : "#374151"}
                          strokeWidth={isActive ? 2 : 1}
                          strokeDasharray={isActive ? "none" : "4 4"}
                          className="transition-all duration-500"
                        />
                      );
                    })}
                  </svg>
                  {/* Nodes */}
                  {archNodes.map((node) => {
                    const colors = nodeTypeColors[node.type];
                    const isVisible = visibleNodes.includes(node.id);
                    const isActive = activeIntegrations.includes(node.id);
                    return (
                      <div
                        key={node.id}
                        className={`absolute transition-all duration-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                        style={{ left: `${node.x}%`, top: `${node.y}%`, zIndex: 1 }}
                      >
                        <div className={`px-3 py-2 rounded-lg border text-xs font-medium whitespace-nowrap ${colors.bg} ${colors.border} ${colors.text} ${isActive ? "ring-1 ring-primary-500/50 shadow-lg shadow-primary-500/10" : ""}`}>
                          {isActive && <span className="inline-block w-1.5 h-1.5 rounded-full bg-success mr-1.5 animate-pulse" />}
                          {node.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* Legend */}
                <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-white/5">
                  {Object.entries(nodeTypeColors).map(([type, colors]) => (
                    <div key={type} className="flex items-center gap-1.5">
                      <span className={`w-2.5 h-2.5 rounded-sm ${colors.bg} ${colors.border} border`} />
                      <span className="text-xs text-gray-500 capitalize">{type === "ai" ? "AI Engine" : type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="space-y-6">
            {/* Code Editor */}
            <div className="bg-dark-700 rounded-xl border border-white/5 overflow-hidden">
              <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/60" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <span className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <h3 className="font-semibold text-sm">inventory_monitor.py</h3>
                </div>
                {completedPhases.includes(2) && <span className="text-xs text-success">Built</span>}
              </div>
              <div ref={codeRef} className="p-4 font-mono text-xs leading-relaxed max-h-80 overflow-y-auto" style={{ background: "#0d1117" }}>
                {codeLines.slice(0, visibleCodeLines).map((line, i) => (
                  <div key={i} className="flex">
                    <span className="text-gray-600 select-none w-8 text-right mr-4 shrink-0">{i + 1}</span>
                    <span className={syntaxColor(line.type)} style={{ paddingLeft: `${line.indent * 16}px` }}>
                      {line.text || "\u00A0"}
                    </span>
                  </div>
                ))}
                {visibleCodeLines > 0 && visibleCodeLines < codeLines.length && (
                  <div className="flex items-center mt-1">
                    <span className="text-gray-600 select-none w-8 text-right mr-4">{visibleCodeLines + 1}</span>
                    <span className="w-2 h-4 bg-primary-500 animate-blink" />
                  </div>
                )}
              </div>
            </div>

            {/* Deploy Terminal */}
            <div className="bg-dark-700 rounded-xl border border-white/5 overflow-hidden">
              <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/60" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <span className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <h3 className="font-semibold text-sm">Terminal — deploy.sh</h3>
                </div>
                {completedPhases.includes(4) && <span className="text-xs text-success">Deployed</span>}
              </div>
              <div ref={deployRef} className="p-4 font-mono text-xs max-h-48 overflow-y-auto" style={{ background: "#0d1117" }}>
                {deployLogLines.length === 0 && currentPhase < 4 ? (
                  <p className="text-gray-600">Waiting for build to complete...</p>
                ) : (
                  deployLogLines.map((line, i) => {
                    const isLast = i === deployLogLines.length - 1 && allDone;
                    return (
                      <div key={i} className="flex items-start gap-2 mb-1">
                        <span className={`shrink-0 ${isLast ? "text-success" : i === deployLogLines.length - 1 ? "text-primary-500" : "text-success"}`}>
                          {isLast ? "✓" : i === deployLogLines.length - 1 && !allDone ? "›" : "✓"}
                        </span>
                        <span className={`${isLast ? "text-success font-bold" : "text-gray-300"}`}>{line}</span>
                      </div>
                    );
                  })
                )}
                {currentPhase === 4 && !allDone && (
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-2 h-4 bg-primary-500 animate-blink" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Post-demo CTA */}
        {allDone && (
          <div className="mt-8 bg-dark-700 rounded-xl p-8 border border-primary-500/20 text-center animate-fade-in-up">
            <h3 className="text-xl font-bold mb-2">From idea to production in one engagement</h3>
            <p className="text-gray-400 text-sm mb-6">Tell us your problem. We&apos;ll architect, build, and deploy a custom AI solution — fully integrated with your existing systems.</p>
            <a href="https://cal.com/mitchell-kunar-ga4jvw/30min" target="_blank" rel="noopener noreferrer" className="bg-gradient-orange text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
              Book a Call — It&apos;s Free
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
