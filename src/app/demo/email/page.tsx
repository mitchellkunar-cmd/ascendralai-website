"use client";

import { useState, useEffect, useCallback } from "react";

interface Email {
  from: string;
  subject: string;
  preview: string;
  category: "urgent" | "routine" | "spam";
  aiResponse: string;
  time: string;
}

const fakeEmails: Email[] = [
  {
    from: "Mike Johnson <mike@acmecorp.com>",
    subject: "Urgent: Server down in production",
    preview: "Hey, our production server just went down and we need immediate support. Can someone...",
    category: "urgent",
    aiResponse: "Flagged as URGENT. Escalated to on-call team. Auto-reply sent: \"We've received your request and our team is on it. ETA 15 minutes.\"",
    time: "9:02 AM",
  },
  {
    from: "Jennifer Lee <jlee@supplierco.com>",
    subject: "RE: Invoice #4892 - Payment confirmation",
    preview: "Hi, just confirming that payment for invoice #4892 has been processed. Please find attached...",
    category: "routine",
    aiResponse: "Payment confirmed. Invoice #4892 marked as paid in accounting system. Confirmation reply sent to Jennifer.",
    time: "9:15 AM",
  },
  {
    from: "noreply@specialoffer.biz",
    subject: "CONGRATULATIONS! You've been selected for an exclusive...",
    preview: "Dear valued customer, you have been specially selected to receive a once in a lifetime...",
    category: "spam",
    aiResponse: "Identified as spam. Moved to junk folder. Sender added to block list.",
    time: "9:18 AM",
  },
  {
    from: "Sarah Chen <schen@partnerfirm.com>",
    subject: "Meeting reschedule request - Thursday",
    preview: "Hi, I was wondering if we could move our Thursday meeting to Friday at 2pm instead? I have a...",
    category: "routine",
    aiResponse: "Calendar checked. Friday 2pm is available. Auto-reply sent proposing Friday 2pm. Calendar hold created pending confirmation.",
    time: "9:24 AM",
  },
  {
    from: "Tom Bradley <tbradley@bigclient.com>",
    subject: "Contract renewal - needs signature by EOD",
    preview: "Hi team, the contract renewal documents are ready and need to be signed by end of day today...",
    category: "urgent",
    aiResponse: "Flagged as URGENT. Contract forwarded to legal for review. Reminder set for 3pm. Auto-reply: \"Received. Our legal team is reviewing and we'll have signatures to you by 4pm.\"",
    time: "9:31 AM",
  },
  {
    from: "newsletter@industrydigest.com",
    subject: "This week in AI: Top 10 trends for 2026",
    preview: "Welcome to this week's edition of Industry Digest. Here are the top stories shaping the...",
    category: "routine",
    aiResponse: "Newsletter categorized and filed to \"Industry News\" folder. Key highlights extracted and added to weekly briefing doc.",
    time: "9:45 AM",
  },
  {
    from: "David Park <dpark@vendorsys.com>",
    subject: "Quote request - 500 units",
    preview: "Hello, we're interested in purchasing 500 units of your XR-200 model. Could you provide a...",
    category: "urgent",
    aiResponse: "Flagged as URGENT (revenue opportunity). Pricing sheet pulled. Draft quote generated for 500x XR-200 at volume discount. Routed to sales team for review.",
    time: "9:52 AM",
  },
  {
    from: "win@prize-central.net",
    subject: "You've won a $1000 gift card! Claim now",
    preview: "Click here immediately to claim your $1000 gift card before it expires. Limited time only...",
    category: "spam",
    aiResponse: "Identified as spam/phishing. Blocked. Sender reported. No action taken.",
    time: "10:01 AM",
  },
];

const categoryConfig = {
  urgent: { label: "Urgent", color: "text-red-400", bg: "bg-red-500/10 border-red-500/20" },
  routine: { label: "Routine", color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
  spam: { label: "Spam", color: "text-gray-500", bg: "bg-gray-500/10 border-gray-500/20" },
};

export default function EmailDemoPage() {
  const [processing, setProcessing] = useState(false);
  const [emails, setEmails] = useState<Email[]>([]);
  const [selectedEmail, setSelectedEmail] = useState<number | null>(null);
  const [processComplete, setProcessComplete] = useState(false);

  const startProcessing = useCallback(() => {
    setProcessing(true);
    setEmails([]);
    setSelectedEmail(null);
    setProcessComplete(false);
    let idx = 0;
    const interval = setInterval(() => {
      if (idx < fakeEmails.length) {
        const email = fakeEmails[idx];
        setEmails((prev) => [...prev, email]);
        idx++;
      } else {
        clearInterval(interval);
        setProcessing(false);
        setProcessComplete(true);
      }
    }, 800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      startProcessing();
    }, 500);
    return () => clearTimeout(timer);
  }, [startProcessing]);

  const stats = {
    total: emails.length,
    urgent: emails.filter((e) => e.category === "urgent").length,
    routine: emails.filter((e) => e.category === "routine").length,
    spam: emails.filter((e) => e.category === "spam").length,
  };

  return (
    <section className="min-h-screen bg-dark-950 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold">Email Automation Dashboard</h1>
            <p className="text-gray-400 text-sm">AscendralAI — Live Demo</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${processing ? "bg-primary-500 animate-pulse" : "bg-success"}`} />
              <span className="text-sm text-gray-400">{processing ? "Processing inbox..." : processComplete ? "Inbox Processed" : "Ready"}</span>
            </div>
            <button onClick={startProcessing} disabled={processing} className="bg-gradient-orange text-white font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 text-sm">
              {processing ? "Processing..." : "Process Inbox"}
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Processed", value: stats.total },
            { label: "Urgent", value: stats.urgent },
            { label: "Routine", value: stats.routine },
            { label: "Spam Blocked", value: stats.spam },
          ].map((s) => (
            <div key={s.label} className="bg-dark-700 rounded-xl p-4 border border-white/5">
              <p className="text-xs text-gray-500 mb-1">{s.label}</p>
              <p className="text-2xl font-bold text-gradient">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Email List + Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Email List */}
          <div className="lg:col-span-3 bg-dark-700 rounded-xl border border-white/5 overflow-hidden">
            <div className="px-6 py-4 border-b border-white/5">
              <h3 className="font-semibold text-sm">Incoming Emails</h3>
            </div>
            <div className="divide-y divide-white/5">
              {emails.map((email, i) => {
                const cat = categoryConfig[email.category];
                return (
                  <button
                    key={i}
                    onClick={() => setSelectedEmail(i)}
                    className={`w-full text-left px-6 py-4 hover:bg-dark-600 transition-colors animate-fade-in-up ${selectedEmail === i ? "bg-dark-600" : ""}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium truncate">{email.from.split("<")[0].trim()}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full border ${cat.bg} ${cat.color}`}>{cat.label}</span>
                        </div>
                        <p className="text-sm text-white truncate">{email.subject}</p>
                        <p className="text-xs text-gray-500 truncate mt-1">{email.preview}</p>
                      </div>
                      <span className="text-xs text-gray-500 shrink-0">{email.time}</span>
                    </div>
                  </button>
                );
              })}
              {emails.length === 0 && (
                <div className="px-6 py-12 text-center text-gray-500">
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                    Connecting to inbox...
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* AI Response Detail */}
          <div className="lg:col-span-2 bg-dark-700 rounded-xl border border-white/5 overflow-hidden">
            <div className="px-6 py-4 border-b border-white/5">
              <h3 className="font-semibold text-sm">AI Action Taken</h3>
            </div>
            <div className="p-6">
              {selectedEmail !== null ? (
                <div className="animate-fade-in-up">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${categoryConfig[emails[selectedEmail].category].bg} ${categoryConfig[emails[selectedEmail].category].color}`}>
                      {categoryConfig[emails[selectedEmail].category].label}
                    </span>
                    <span className="text-xs text-gray-500">{emails[selectedEmail].time}</span>
                  </div>
                  <p className="text-sm font-medium mb-1">{emails[selectedEmail].subject}</p>
                  <p className="text-xs text-gray-500 mb-4">From: {emails[selectedEmail].from}</p>
                  <div className="bg-dark-600 rounded-lg p-4 border border-primary-500/20">
                    <p className="text-xs text-primary-500 font-medium mb-2">AI Response</p>
                    <p className="text-sm text-gray-300 leading-relaxed">{emails[selectedEmail].aiResponse}</p>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-gray-500 text-center py-8">Click an email to see the AI action</p>
              )}
            </div>
          </div>
        </div>

        {/* Post-demo CTA */}
        {processComplete && (
          <div className="mt-8 bg-dark-700 rounded-xl p-8 border border-primary-500/20 text-center animate-fade-in-up">
            <h3 className="text-xl font-bold mb-2">Imagine never touching a routine email again</h3>
            <p className="text-gray-400 text-sm mb-6">We&apos;ll build an AI email system customized to your business workflows and communication style.</p>
            <a href="https://cal.com/mitchell-kunar-ga4jvw/30min" target="_blank" rel="noopener noreferrer" className="bg-gradient-orange text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
              Free Intro Call
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
