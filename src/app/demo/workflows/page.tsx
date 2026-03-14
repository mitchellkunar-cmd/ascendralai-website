"use client";

import { useState, useEffect, useCallback } from "react";

interface WorkflowNode {
  id: string;
  label: string;
  type: "trigger" | "action" | "decision" | "integration" | "end";
  description: string;
  detail: string;
}

interface WorkflowLog {
  node: string;
  message: string;
  timestamp: string;
  status: "success" | "processing" | "info";
}

const workflowNodes: WorkflowNode[] = [
  {
    id: "trigger",
    label: "Purchase Request Submitted",
    type: "trigger",
    description: "Employee submits a purchase request via form",
    detail: "Requestor: Sarah Chen | Dept: Operations | Item: 200x Safety Helmets | Amount: $4,800",
  },
  {
    id: "validate",
    label: "Validate Request",
    type: "action",
    description: "AI checks for required fields and duplicates",
    detail: "All required fields present. No duplicate requests found. Vendor verified in system. Budget code: OPS-2026-Q1.",
  },
  {
    id: "budget",
    label: "Budget Check",
    type: "decision",
    description: "Verify department has available budget",
    detail: "Operations Q1 Budget: $52,000 | Spent: $31,200 | Remaining: $20,800 | Request: $4,800 — APPROVED (within limit).",
  },
  {
    id: "routing",
    label: "Approval Routing",
    type: "decision",
    description: "Determine approval chain based on amount",
    detail: "Amount $4,800 > $1,000 threshold. Routed to Manager (Tom Bradley). VP approval not required (under $10,000).",
  },
  {
    id: "notify",
    label: "Manager Notification",
    type: "integration",
    description: "Send approval request via email and Slack",
    detail: "Email sent to tom.bradley@company.com. Slack DM sent to @tbradley. Mobile push notification delivered. SLA: 24hr response window.",
  },
  {
    id: "approval",
    label: "Manager Approves",
    type: "action",
    description: "Manager reviews and approves the request",
    detail: "Approved by Tom Bradley at 2:15 PM. Comment: \"Approved — needed for the Westfield project site.\" Digital signature captured.",
  },
  {
    id: "po_create",
    label: "Generate Purchase Order",
    type: "action",
    description: "Auto-generate PO with vendor details",
    detail: "PO-2026-0847 created. Vendor: SafetyFirst Supply Co. | Terms: Net 30 | Ship To: 450 Industrial Pkwy. | Tax: $384.00 | Total: $5,184.00.",
  },
  {
    id: "erp_sync",
    label: "Sync to ERP System",
    type: "integration",
    description: "Push PO data to Oracle Fusion / ERP",
    detail: "PO-2026-0847 synced to Oracle Fusion Procurement. GL Account: 5200-OPS. Commitment recorded. Three-way match enabled.",
  },
  {
    id: "vendor_send",
    label: "Send PO to Vendor",
    type: "integration",
    description: "Email PO to vendor with confirmation request",
    detail: "PO emailed to orders@safetyfirst.com. EDI transmission successful. Vendor portal updated. Estimated delivery: 5 business days.",
  },
  {
    id: "complete",
    label: "Workflow Complete",
    type: "end",
    description: "All steps completed successfully",
    detail: "Total processing time: 3 hours 22 minutes (vs. 3-5 days manual). Audit trail saved. Requestor notified of PO creation.",
  },
];

const nodeColors = {
  trigger: { bg: "bg-blue-500/20", border: "border-blue-500/40", text: "text-blue-400", dot: "bg-blue-500" },
  action: { bg: "bg-primary-500/20", border: "border-primary-500/40", text: "text-primary-500", dot: "bg-primary-500" },
  decision: { bg: "bg-yellow-500/20", border: "border-yellow-500/40", text: "text-yellow-400", dot: "bg-yellow-500" },
  integration: { bg: "bg-purple-500/20", border: "border-purple-500/40", text: "text-purple-400", dot: "bg-purple-500" },
  end: { bg: "bg-green-500/20", border: "border-green-500/40", text: "text-green-400", dot: "bg-green-500" },
};

const nodeTypeLabels = {
  trigger: "Trigger",
  action: "Action",
  decision: "Decision",
  integration: "Integration",
  end: "Complete",
};

export default function WorkflowsDemoPage() {
  const [running, setRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [logs, setLogs] = useState<WorkflowLog[]>([]);
  const [selectedNode, setSelectedNode] = useState<number | null>(null);
  const [workflowDone, setWorkflowDone] = useState(false);

  const getTimestamp = (offset: number) => {
    const base = new Date(2026, 2, 14, 10, 0, 0);
    base.setMinutes(base.getMinutes() + offset * 3);
    return base.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", second: "2-digit" });
  };

  const startWorkflow = useCallback(() => {
    setRunning(true);
    setActiveStep(-1);
    setCompletedSteps([]);
    setLogs([]);
    setSelectedNode(null);
    setWorkflowDone(false);

    let step = 0;
    const interval = setInterval(() => {
      if (step < workflowNodes.length) {
        const node = workflowNodes[step];
        const currentStep = step;

        setActiveStep(currentStep);
        setSelectedNode(currentStep);
        setLogs((prev) => [
          ...prev,
          { node: node.label, message: node.description, timestamp: getTimestamp(currentStep), status: "processing" },
        ]);

        setTimeout(() => {
          setCompletedSteps((prev) => [...prev, currentStep]);
          setLogs((prev) =>
            prev.map((log, i) =>
              i === prev.length - 1 ? { ...log, status: "success" as const } : log
            )
          );
        }, 800);

        step++;
      } else {
        clearInterval(interval);
        setRunning(false);
        setWorkflowDone(true);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      startWorkflow();
    }, 800);
    return () => clearTimeout(timer);
  }, [startWorkflow]);

  return (
    <section className="min-h-screen bg-dark-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold">Workflow Automation Dashboard</h1>
            <p className="text-gray-400 text-sm">Purchase Order Approval — Live Demo</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${running ? "bg-primary-500 animate-pulse" : workflowDone ? "bg-success" : "bg-gray-500"}`} />
              <span className="text-sm text-gray-400">
                {running ? `Step ${activeStep + 1} of ${workflowNodes.length}` : workflowDone ? "Workflow Complete" : "Ready"}
              </span>
            </div>
            <button onClick={startWorkflow} disabled={running} className="bg-gradient-orange text-white font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 text-sm">
              {running ? "Running..." : "Run Workflow"}
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Steps Completed", value: completedSteps.length },
            { label: "Total Steps", value: workflowNodes.length },
            { label: "Integrations", value: workflowNodes.filter((n) => n.type === "integration").length },
            { label: "Progress", value: `${Math.round((completedSteps.length / workflowNodes.length) * 100)}%` },
          ].map((s) => (
            <div key={s.label} className="bg-dark-700 rounded-xl p-4 border border-white/5">
              <p className="text-xs text-gray-500 mb-1">{s.label}</p>
              <p className="text-2xl font-bold text-gradient">{s.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Workflow Visualization */}
          <div className="lg:col-span-5 bg-dark-700 rounded-xl border border-white/5 overflow-hidden">
            <div className="px-6 py-4 border-b border-white/5">
              <h3 className="font-semibold text-sm">Workflow Pipeline</h3>
            </div>
            <div className="p-6">
              <div className="space-y-1">
                {workflowNodes.map((node, i) => {
                  const colors = nodeColors[node.type];
                  const isActive = activeStep === i && !completedSteps.includes(i);
                  const isCompleted = completedSteps.includes(i);
                  const isVisible = i <= activeStep;

                  return (
                    <div key={node.id}>
                      {/* Connector line */}
                      {i > 0 && (
                        <div className="flex justify-center py-1">
                          <div className={`w-0.5 h-4 transition-colors duration-500 ${isVisible ? (isCompleted ? "bg-success" : "bg-primary-500 animate-pulse") : "bg-dark-600"}`} />
                        </div>
                      )}
                      {/* Node */}
                      <button
                        onClick={() => isVisible ? setSelectedNode(i) : null}
                        className={`w-full text-left rounded-lg p-3 border transition-all duration-500 ${
                          isVisible
                            ? isCompleted
                              ? `${colors.bg} ${colors.border} opacity-100`
                              : isActive
                                ? `${colors.bg} ${colors.border} opacity-100 ring-1 ring-primary-500/50`
                                : `${colors.bg} ${colors.border} opacity-100`
                            : "bg-dark-600/30 border-white/5 opacity-40"
                        } ${selectedNode === i && isVisible ? "ring-2 ring-white/20" : ""}`}
                      >
                        <div className="flex items-center gap-3">
                          {/* Status indicator */}
                          <div className="shrink-0">
                            {isCompleted ? (
                              <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            ) : isActive ? (
                              <span className={`block w-5 h-5 rounded-full ${colors.dot} animate-pulse`} />
                            ) : (
                              <span className="block w-5 h-5 rounded-full bg-dark-600 border border-white/10" />
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium truncate">{node.label}</span>
                            </div>
                            <span className={`text-xs ${colors.text}`}>{nodeTypeLabels[node.type]}</span>
                          </div>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="lg:col-span-7 space-y-6">
            {/* Node Detail */}
            <div className="bg-dark-700 rounded-xl border border-white/5 overflow-hidden">
              <div className="px-6 py-4 border-b border-white/5">
                <h3 className="font-semibold text-sm">Node Details</h3>
              </div>
              <div className="p-6">
                {selectedNode !== null && selectedNode <= activeStep ? (
                  <div className="animate-fade-in-up">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${nodeColors[workflowNodes[selectedNode].type].bg} ${nodeColors[workflowNodes[selectedNode].type].border} ${nodeColors[workflowNodes[selectedNode].type].text}`}>
                        {nodeTypeLabels[workflowNodes[selectedNode].type]}
                      </span>
                      <span className="text-sm font-medium">{workflowNodes[selectedNode].label}</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-4">{workflowNodes[selectedNode].description}</p>
                    <div className="bg-dark-600 rounded-lg p-4 border border-primary-500/20">
                      <p className="text-xs text-primary-500 font-medium mb-2">Output</p>
                      <p className="text-sm text-gray-300 leading-relaxed">{workflowNodes[selectedNode].detail}</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-gray-500 text-center py-4">Click a node to see details</p>
                )}
              </div>
            </div>

            {/* Activity Log */}
            <div className="bg-dark-700 rounded-xl border border-white/5 overflow-hidden">
              <div className="px-6 py-4 border-b border-white/5">
                <h3 className="font-semibold text-sm">Activity Log</h3>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {logs.length > 0 ? (
                  <div className="divide-y divide-white/5">
                    {[...logs].reverse().map((log, i) => (
                      <div key={i} className="px-6 py-3 animate-fade-in-up">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 shrink-0">
                            {log.status === "success" ? (
                              <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <span className="block w-4 h-4 rounded-full bg-primary-500 animate-pulse" />
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium">{log.node}</p>
                            <p className="text-xs text-gray-500">{log.message}</p>
                          </div>
                          <span className="text-xs text-gray-500 shrink-0">{log.timestamp}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="px-6 py-8 text-center text-gray-500 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                      Initializing workflow...
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Post-demo CTA */}
        {workflowDone && (
          <div className="mt-8 bg-dark-700 rounded-xl p-8 border border-primary-500/20 text-center animate-fade-in-up">
            <h3 className="text-xl font-bold mb-2">This PO took 3 hours instead of 3-5 days</h3>
            <p className="text-gray-400 text-sm mb-6">We&apos;ll map your business processes and build custom workflows that eliminate manual handoffs, approvals, and data entry.</p>
            <a href="https://cal.com/mitchell-kunar-ga4jvw/30min" target="_blank" rel="noopener noreferrer" className="bg-gradient-orange text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
              Book a Call — It&apos;s Free
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
