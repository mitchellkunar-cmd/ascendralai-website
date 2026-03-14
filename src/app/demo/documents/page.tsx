"use client";

import { useState, useCallback } from "react";

interface ExtractedField {
  label: string;
  value: string;
}

interface LineItem {
  description: string;
  qty: number;
  unitPrice: string;
  total: string;
}

interface Document {
  name: string;
  type: string;
  fields: ExtractedField[];
  lineItems?: LineItem[];
  confidence: number;
}

const fakeDocuments: Document[] = [
  {
    name: "Invoice_2026_04892.pdf",
    type: "Invoice",
    fields: [
      { label: "Vendor", value: "Midwest Supply Co." },
      { label: "Invoice #", value: "INV-04892" },
      { label: "Date", value: "03/01/2026" },
      { label: "Due Date", value: "03/31/2026" },
      { label: "PO Number", value: "PO-2026-1147" },
      { label: "Total", value: "$12,450.00" },
    ],
    lineItems: [
      { description: "Industrial Valve Assembly XR-200", qty: 50, unitPrice: "$145.00", total: "$7,250.00" },
      { description: "Pressure Gauge Kit PG-100", qty: 100, unitPrice: "$32.00", total: "$3,200.00" },
      { description: "Shipping & Handling", qty: 1, unitPrice: "$2,000.00", total: "$2,000.00" },
    ],
    confidence: 98.7,
  },
  {
    name: "PurchaseOrder_1147.pdf",
    type: "Purchase Order",
    fields: [
      { label: "Buyer", value: "Acme Manufacturing Inc." },
      { label: "PO #", value: "PO-2026-1147" },
      { label: "Date", value: "02/15/2026" },
      { label: "Delivery Date", value: "03/10/2026" },
      { label: "Ship To", value: "450 Industrial Pkwy, Columbus OH" },
      { label: "Total", value: "$12,450.00" },
    ],
    lineItems: [
      { description: "Industrial Valve Assembly XR-200", qty: 50, unitPrice: "$145.00", total: "$7,250.00" },
      { description: "Pressure Gauge Kit PG-100", qty: 100, unitPrice: "$32.00", total: "$3,200.00" },
      { description: "Shipping & Handling", qty: 1, unitPrice: "$2,000.00", total: "$2,000.00" },
    ],
    confidence: 97.2,
  },
  {
    name: "W9_MidwestSupply.pdf",
    type: "Tax Form (W-9)",
    fields: [
      { label: "Legal Name", value: "Midwest Supply Co. LLC" },
      { label: "Business Name", value: "Midwest Supply Co." },
      { label: "Tax Classification", value: "LLC - C Corporation" },
      { label: "Address", value: "1200 Commerce Dr, Indianapolis IN 46204" },
      { label: "TIN", value: "***-**-7842" },
      { label: "Signature Date", value: "01/15/2026" },
    ],
    confidence: 99.1,
  },
];

export default function DocumentsDemoPage() {
  const [processing, setProcessing] = useState(false);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<number | null>(null);
  const [currentField, setCurrentField] = useState(0);
  const [extractionDone, setExtractionDone] = useState(false);
  const [allDone, setAllDone] = useState(false);

  const startProcessing = useCallback(() => {
    setProcessing(true);
    setDocuments([]);
    setSelectedDoc(null);
    setCurrentField(0);
    setExtractionDone(false);
    setAllDone(false);

    let docIdx = 0;
    const docInterval = setInterval(() => {
      if (docIdx < fakeDocuments.length) {
        const doc = fakeDocuments[docIdx];
        setDocuments((prev) => [...prev, doc]);
        docIdx++;
      } else {
        clearInterval(docInterval);
        setProcessing(false);
        setAllDone(true);
      }
    }, 1500);
    return () => clearInterval(docInterval);
  }, []);

  const handleSelectDoc = (idx: number) => {
    setSelectedDoc(idx);
    setCurrentField(0);
    setExtractionDone(false);

    const doc = documents[idx];
    let fieldIdx = 0;
    const fieldInterval = setInterval(() => {
      if (fieldIdx < doc.fields.length) {
        setCurrentField(fieldIdx + 1);
        fieldIdx++;
      } else {
        clearInterval(fieldInterval);
        setExtractionDone(true);
      }
    }, 300);
  };

  return (
    <section className="min-h-screen bg-dark-950 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold">Document Processing Dashboard</h1>
            <p className="text-gray-400 text-sm">AscendralAI — Live Demo</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${processing ? "bg-primary-500 animate-pulse" : allDone ? "bg-success" : "bg-gray-500"}`} />
              <span className="text-sm text-gray-400">{processing ? "Scanning documents..." : allDone ? "All Processed" : "Ready"}</span>
            </div>
            <button onClick={startProcessing} disabled={processing} className="bg-gradient-orange text-white font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 text-sm">
              {processing ? "Processing..." : "Upload & Scan"}
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Documents Scanned", value: documents.length },
            { label: "Fields Extracted", value: documents.reduce((sum, d) => sum + d.fields.length, 0) },
            { label: "Line Items Found", value: documents.reduce((sum, d) => sum + (d.lineItems?.length || 0), 0) },
            { label: "Avg Confidence", value: documents.length ? `${(documents.reduce((sum, d) => sum + d.confidence, 0) / documents.length).toFixed(1)}%` : "—" },
          ].map((s) => (
            <div key={s.label} className="bg-dark-700 rounded-xl p-4 border border-white/5">
              <p className="text-xs text-gray-500 mb-1">{s.label}</p>
              <p className="text-2xl font-bold text-gradient">{s.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Document List */}
          <div className="lg:col-span-2 bg-dark-700 rounded-xl border border-white/5 overflow-hidden">
            <div className="px-6 py-4 border-b border-white/5">
              <h3 className="font-semibold text-sm">Uploaded Documents</h3>
            </div>
            <div className="divide-y divide-white/5">
              {documents.map((doc, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectDoc(i)}
                  className={`w-full text-left px-6 py-4 hover:bg-dark-600 transition-colors animate-fade-in-up ${selectedDoc === i ? "bg-dark-600" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-orange flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{doc.name}</p>
                      <p className="text-xs text-gray-500">{doc.type} — {doc.confidence}% confidence</p>
                    </div>
                  </div>
                </button>
              ))}
              {documents.length === 0 && !processing && (
                <div className="px-6 py-12 text-center text-gray-500">Click &quot;Upload &amp; Scan&quot; to process documents</div>
              )}
              {documents.length === 0 && processing && (
                <div className="px-6 py-12 text-center text-gray-500">
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                    Scanning uploaded files...
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Extraction Detail */}
          <div className="lg:col-span-3 bg-dark-700 rounded-xl border border-white/5 overflow-hidden">
            <div className="px-6 py-4 border-b border-white/5">
              <h3 className="font-semibold text-sm">Extracted Data</h3>
            </div>
            <div className="p-6">
              {selectedDoc !== null ? (
                <div className="animate-fade-in-up">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-medium">{documents[selectedDoc].name}</p>
                    <span className="text-xs px-2 py-0.5 rounded-full border bg-green-500/10 border-green-500/20 text-green-400">
                      {documents[selectedDoc].confidence}% confidence
                    </span>
                  </div>

                  {/* Fields */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {documents[selectedDoc].fields.slice(0, currentField).map((field, i) => (
                      <div key={i} className="bg-dark-600 rounded-lg p-3 border border-white/5 animate-fade-in-up">
                        <p className="text-xs text-gray-500 mb-1">{field.label}</p>
                        <p className="text-sm font-medium">{field.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Line Items */}
                  {extractionDone && documents[selectedDoc].lineItems && (
                    <div className="animate-fade-in-up">
                      <p className="text-sm font-medium mb-3">Line Items</p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="text-left text-gray-500 border-b border-white/5">
                              <th className="pb-2 font-medium">Description</th>
                              <th className="pb-2 font-medium">Qty</th>
                              <th className="pb-2 font-medium">Unit Price</th>
                              <th className="pb-2 font-medium">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            {documents[selectedDoc].lineItems!.map((item, i) => (
                              <tr key={i} className="border-b border-white/5">
                                <td className="py-2 text-gray-300">{item.description}</td>
                                <td className="py-2 text-gray-400">{item.qty}</td>
                                <td className="py-2 text-gray-400">{item.unitPrice}</td>
                                <td className="py-2 font-medium">{item.total}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-sm text-gray-500 text-center py-8">Select a document to see extracted data</p>
              )}
            </div>
          </div>
        </div>

        {/* Post-demo CTA */}
        {allDone && (
          <div className="mt-8 bg-dark-700 rounded-xl p-8 border border-primary-500/20 text-center animate-fade-in-up">
            <h3 className="text-xl font-bold mb-2">Stop typing data from documents manually</h3>
            <p className="text-gray-400 text-sm mb-6">We&apos;ll build a document processing pipeline that extracts, validates, and syncs data to your systems automatically.</p>
            <a href="https://cal.com/mitchell-kunar-ga4jvw/30min" target="_blank" rel="noopener noreferrer" className="bg-gradient-orange text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block">
              Book a Call — It&apos;s Free
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
