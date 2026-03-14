"use client";

import { useState } from "react";
import VideoModal from "./VideoModal";

const demos = [
  { title: "Lead Generation Automation", videoId: "dQw4w9WgXcQ" },
  { title: "Email & Communication Automation", videoId: "dQw4w9WgXcQ" },
  { title: "Document Processing", videoId: "dQw4w9WgXcQ" },
  { title: "Tailored Workflows", videoId: "dQw4w9WgXcQ" },
  { title: "AI Strategy Consulting", videoId: "dQw4w9WgXcQ" },
  { title: "Custom Development", videoId: "dQw4w9WgXcQ" },
];

export default function HomeDemoSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            See How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            Watch quick demos of our automation systems in action
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demos.map((demo) => (
              <button
                key={demo.title}
                onClick={() => setActiveVideo(demo.videoId)}
                className="bg-dark-700 rounded-2xl border border-white/5 hover:border-primary-500/30 transition-all card-hover text-left group"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-dark-600 rounded-t-2xl flex items-center justify-center overflow-hidden">
                  <div className="w-16 h-16 rounded-full bg-gradient-orange flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {/* Info */}
                <div className="p-5">
                  <h3 className="font-semibold text-white mb-1">{demo.title}</h3>
                  <p className="text-primary-500 text-sm font-medium">Watch Demo &rarr;</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={activeVideo !== null}
        onClose={() => setActiveVideo(null)}
        videoId={activeVideo ?? undefined}
      />
    </>
  );
}
