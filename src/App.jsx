import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-slate-900 border border-cyan-400/30 flex items-center justify-center text-2xl font-black">
              <span className="text-white">H</span>
              <span className="text-cyan-400">X</span>
            </div>

            <div>
              <div className="font-black text-2xl tracking-tight">
                <span className="text-white">Hire</span>
                <span className="text-cyan-400">Neuron</span>
                <span className="text-white">X</span>
              </div>

              <div className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
                AI-Powered Staffing. Human-Led Impact.
              </div>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#home">Home</a>
            <a href="#solutions">Solutions</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <div className="inline-block px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm mb-6">
            Built for High-Performance Teams • Trusted by Growth-Focused Companies
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Next-Gen Hiring Starts Here.
          </h1>

          <p className="text-xl text-slate-300 mb-8 max-w-xl">
            We help ambitious companies build elite teams faster through
            AI-enhanced sourcing, precision recruiting systems, and premium
            execution.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-cyan-400 text-slate-950 font-semibold"
            >
              Schedule Strategy Call
            </a>

            <a
              href="#solutions"
              className="px-6 py-3 rounded-xl border border-slate-700 hover:border-cyan-400"
            >
              See Solutions
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-10 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-300">72h</div>
              <div className="text-xs text-slate-400">Shortlist Speed</div>
            </div>

            <div>
              <div className="text-3xl font-bold text-cyan-300">Top 5%</div>
              <div className="text-xs text-slate-400">Talent Quality</div>
            </div>

            <div>
              <div className="text-3xl font-bold text-cyan-300">24/7</div>
              <div className="text-xs text-slate-400">Execution Mode</div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-8">
          <div className="rounded-2xl bg-slate-900 p-8 min-h-[420px] border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="text-cyan-300 text-sm mb-3">AI Talent Engine</div>
              <div className="text-3xl font-bold mb-4">
                Faster Sourcing. Smarter Hiring.
              </div>

              <p className="text-slate-400">
                Automation supports recruiters. Human judgment closes exceptional hires.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-xl bg-slate-800">
                <div className="text-sm text-slate-400">Live Pipelines</div>
                <div className="font-semibold">Active</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800">
                <div className="text-sm text-slate-400">Response Rate</div>
                <div className="font-semibold">High</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
