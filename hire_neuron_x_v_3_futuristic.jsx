import { useEffect, useState } from "react";

// Section data — extracted so the UI can .map() cleanly with stable keys.
const SOLUTIONS = [
  ["Direct Hire", "Critical permanent hires for growth-stage teams.", "Permanent hiring for key growth roles with sourcing, screening, and close support."],
  ["Contract Staffing", "Flexible talent for urgent projects and rapid scale.", "Fast contractor deployment for urgent delivery, launches, and specialist needs."],
  ["Talent Intelligence", "Market mapping, pipelines, and competitor insights.", "Proactive talent mapping, compensation insights, and pipeline creation."],
  ["Executive Search", "Leadership hiring with precision targeting.", "Confidential leadership hiring with high-touch candidate management."],
  ["Embedded Recruiting", "We operate like an extension of your internal team.", "Dedicated recruiting partnership integrated into your workflow."],
  ["Hiring Ops", "Interview systems, process design, and closing support.", "Improve interviews, scorecards, pipeline flow, and offer conversion."],
];

const WHY = [
  ["Speed Without Chaos", "Structured hiring sprints with consistent updates.", "We run organized hiring sprints with clear ownership, fast feedback cycles, and weekly reporting so momentum stays high without confusion."],
  ["Better Talent Density", "Fewer resumes, stronger candidates.", "We prioritize relevance, readiness, and fit so your team spends time with stronger candidates instead of sorting resume volume."],
  ["Brand-Level Partnership", "We represent your company professionally in-market.", "Every outreach message, candidate interaction, and handoff reflects positively on your brand and builds trust with top talent."],
];

const INSIGHTS = [
  ["How To Hire Fast Without Lowering Standards", "Frameworks for urgent growth hiring.", "Speed hiring only works when standards stay high. Use scorecards, tighter intake calls, parallel interviews, and faster feedback loops to reduce delays while protecting quality-of-hire."],
  ["AI In Recruiting: Hype vs Value", "Where automation truly helps.", "AI works best when it removes admin work, improves sourcing reach, and surfaces insights. Human recruiters still matter most for judgment, relationships, and closing top candidates."],
  ["Building Teams That Scale", "Hiring systems for startups and SMBs.", "Scaling teams need repeatable systems: clear hiring plans, defined competencies, interviewer training, and pipeline visibility. Strong process creates consistent growth hiring."],
];

const TRUST = [
  ["High Signal Candidates", "Shortlists focused on quality, relevance, and readiness.", "Every shortlist is intentionally curated for fit, capability, and readiness so your hiring team spends time with candidates worth meeting."],
  ["Fast Execution", "Momentum-driven recruiting with consistent updates.", "Fast scheduling, clear ownership, and weekly progress updates keep hiring momentum high from intake to offer stage."],
  ["Professional Representation", "We strengthen your employer brand in-market.", "Every outreach message and candidate interaction reflects your brand professionally, creating stronger trust with top talent."],
];

const TESTIMONIALS = [
  ["VP Talent, SaaS Company", "\"Responsive, sharp, and significantly better candidate quality.\"", "They quickly understood our hiring profile, calibrated fast, and consistently delivered candidates worth interviewing."],
  ["Founder, Startup Team", "\"They moved faster than larger firms and understood our urgency.\"", "Execution was fast, communication was clear, and they adapted to changing priorities without losing momentum."],
  ["Hiring Manager, Tech Ops", "\"Structured process, clear communication, strong hires.\"", "From intake to offer stage, the process felt organized, transparent, and focused on quality outcomes."],
];

const NAV = [
  ["Home", "#home"],
  ["Solutions", "#solutions"],
  ["Why Us", "#why"],
  ["About", "#about"],
  ["Insights", "#insights"],
  ["Contact", "#contact"],
];

function Chevron() {
  return (
    <svg className="chev h-5 w-5 text-cyan-300 shrink-0 transition-transform" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  );
}

function Card({ tag, title, desc, more }) {
  return (
    <details className="group rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)] transition-all duration-300 overflow-hidden open:border-cyan-400/30">
      <summary className="cursor-pointer p-6 flex items-start gap-4 list-none select-none">
        <div className="flex-1">
          {tag && <div className="text-cyan-300 text-xs uppercase tracking-widest mb-2">{tag}</div>}
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 group-hover:text-cyan-100 transition-colors">{title}</h3>
          <p className="text-slate-400 text-sm sm:text-base">{desc}</p>
        </div>
        <span className="group-open:rotate-180 transition-transform"><Chevron /></span>
      </summary>
      <div className="px-6 pb-6 pt-1 text-slate-300 leading-7 border-t border-slate-800/60">{more}</div>
    </details>
  );
}

function TestimonialCard({ name, quote, more }) {
  return (
    <details className="group rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden">
      <summary className="cursor-pointer p-6 flex items-start gap-4 list-none select-none">
        <div className="flex-1">
          <div className="text-cyan-300 text-xs uppercase tracking-widest mb-3">Client Feedback</div>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-4">{quote}</p>
          <div className="text-sm text-slate-500">— {name}</div>
        </div>
        <span className="group-open:rotate-180 transition-transform"><Chevron /></span>
      </summary>
      <div className="px-6 pb-6 pt-1 text-slate-300 leading-7 border-t border-slate-800/60">{more}</div>
    </details>
  );
}

export default function HireNeuronXV3() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  // Active-section highlighting for nav
  useEffect(() => {
    const ids = NAV.map(([, href]) => href.slice(1));
    const onScroll = () => {
      const y = window.scrollY + 120;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActiveId(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans overflow-x-hidden selection:bg-cyan-400 selection:text-slate-950 antialiased [&_section[id]]:scroll-mt-24 [scroll-behavior:smooth]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-4">
            <div className="h-11 w-11 rounded-2xl bg-slate-900 border border-cyan-400/30 flex items-center justify-center text-xl font-black tracking-tight shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              <span className="text-white">H</span><span className="text-cyan-400">X</span>
            </div>
            <div>
              <div className="font-black text-xl sm:text-2xl tracking-tight leading-none">
                <span className="text-white">Hire</span><span className="text-cyan-400">Neuron</span><span className="text-white">X</span>
              </div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-slate-400 mt-1">
                AI-Powered Staffing. Human-Led Impact.
              </div>
            </div>
          </a>

          <nav className="hidden md:flex gap-8 text-sm text-slate-300 font-medium">
            {NAV.map(([label, href]) => {
              const isActive = activeId === href.slice(1);
              return (
                <a key={href} href={href} className={`transition-colors hover:text-cyan-300 ${isActive ? "text-cyan-300" : ""}`}>
                  {label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/company/hireneuronx/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/30 text-cyan-300 hover:text-cyan-200 hover:border-cyan-300 hover:bg-cyan-400/5 transition-all text-xs font-semibold"
            >
              in
            </a>
            <a href="#contact" className="hidden md:inline-block px-4 py-2 rounded-xl bg-cyan-400 text-slate-950 text-sm font-semibold hover:shadow-[0_0_25px_rgba(34,211,238,0.45)] transition-all">
              Get Started
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden h-10 w-10 flex flex-col items-center justify-center gap-1.5 rounded-lg border border-slate-800 hover:border-cyan-400/40 transition-colors"
            >
              <span className="block w-5 h-0.5 bg-slate-200" />
              <span className="block w-5 h-0.5 bg-slate-200" />
              <span className="block w-5 h-0.5 bg-slate-200" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1 text-slate-300">
              {NAV.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-lg hover:bg-slate-900 hover:text-cyan-300 transition-colors"
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg bg-cyan-400 text-slate-950 font-semibold text-center mt-2"
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div className="absolute -top-10 -left-10 h-72 w-72 bg-cyan-500/10 blur-3xl rounded-full animate-pulse pointer-events-none" />
        <div className="absolute bottom-0 right-0 h-72 w-72 bg-blue-500/10 blur-3xl rounded-full animate-pulse pointer-events-none" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-xs sm:text-sm mb-6">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Built for High-Performance Teams
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-[1.05] mb-6 tracking-tight">
            Next-Gen Hiring{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Starts Here.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed">
            We help ambitious companies build elite teams faster through AI-enhanced sourcing, precision recruiting systems, and premium execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="#contact" className="px-6 py-3 rounded-xl bg-cyan-400 text-slate-950 font-semibold text-center shadow-[0_0_25px_rgba(34,211,238,0.35)] hover:shadow-[0_0_45px_rgba(34,211,238,0.55)] hover:-translate-y-0.5 transition-all">
              Schedule Strategy Call
            </a>
            <a href="#solutions" className="px-6 py-3 rounded-xl border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/5 text-center transition-all">
              See Solutions
            </a>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-10 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-cyan-300">72h</div>
              <div className="text-xs text-slate-400 mt-1">Shortlist Speed</div>
            </div>
            <div className="border-x border-slate-800">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-300">Top 5%</div>
              <div className="text-xs text-slate-400 mt-1">Talent Quality</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-cyan-300">24/7</div>
              <div className="text-xs text-slate-400 mt-1">Execution Mode</div>
            </div>
          </div>
        </div>

        <div className="relative rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-6 sm:p-8 shadow-[0_0_60px_rgba(34,211,238,0.08)] hover:scale-[1.02] transition-all duration-500 backdrop-blur">
          <div className="rounded-2xl bg-slate-900/95 p-6 sm:p-8 min-h-[420px] flex flex-col justify-between border border-slate-800 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 h-40 w-40 bg-cyan-400/10 blur-3xl rounded-full" />
            <div className="relative">
              <div className="flex items-center gap-2 text-cyan-300 text-sm mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> AI Talent Engine
              </div>
              <div className="text-2xl sm:text-3xl font-bold mb-4">Faster Sourcing. Smarter Hiring.</div>
              <div className="h-px w-24 bg-gradient-to-r from-cyan-400/70 to-transparent mb-4" />
              <p className="text-slate-400 leading-relaxed">Automation supports recruiters. Human judgment closes exceptional hires.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8 relative">
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/50">
                <div className="text-xs text-slate-400 mb-1">Live Pipelines</div>
                <div className="font-semibold flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" /> Active
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/50">
                <div className="text-xs text-slate-400 mb-1">Response Rate</div>
                <div className="font-semibold text-cyan-300">High</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/50">
                <div className="text-xs text-slate-400 mb-1">Coverage</div>
                <div className="font-semibold">US • CA • UK • IN</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/50">
                <div className="text-xs text-slate-400 mb-1">Avg. Time-to-Fill</div>
                <div className="font-semibold text-cyan-300">-43%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            ["Why Us", "Faster delivery, sharper shortlists, zero fluff."],
            ["AI + Human", "Technology accelerates sourcing, recruiters drive judgment."],
            ["US Focused", "Built for modern companies hiring across North America."],
            ["Always On", "Responsive communication and execution momentum."],
          ].map(([t, d]) => (
            <div key={t} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-400/30 transition-colors">
              <h3 className="font-semibold text-cyan-300 mb-2">{t}</h3>
              <p className="text-sm text-slate-400">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-xs uppercase tracking-widest mb-4">Solutions</div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight">Future-Ready Talent Solutions for Modern Growth Companies</h2>
          <p className="text-slate-400">Designed for companies that expect speed, quality, and modern execution. Every engagement is built to reduce hiring friction and increase quality-of-hire.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {SOLUTIONS.map(([t, d, more]) => (
            <Card key={t} tag="Solution" title={t} desc={d} more={more} />
          ))}
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight">Why Clients Switch To HireNeuronX</h2>
          <p className="text-slate-400">Most firms send resumes. We build outcomes.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {WHY.map(([t, d, more]) => (
            <Card key={t} title={t} desc={d} more={more} />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative bg-slate-900/50 py-20 sm:py-24 border-y border-slate-800/60">
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-xs uppercase tracking-widest mb-4">About</div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight">Built For A New Standard In Hiring</h2>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
            Traditional recruiting is often slow, reactive, and overloaded with noise. HireNeuronX combines recruiter expertise, AI-assisted workflows, outbound talent intelligence, and disciplined execution to deliver stronger hiring outcomes. We operate like a strategic growth partner focused on measurable results — not a resume vendor.
          </p>
        </div>
      </section>

      {/* INSIGHTS */}
      <section id="insights" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-xs uppercase tracking-widest mb-4">Insights</div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight">Insights For Modern Hiring Leaders</h2>
          <p className="text-slate-400">Content that builds trust today and compounds SEO tomorrow.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {INSIGHTS.map(([t, d, more]) => (
            <Card key={t} tag="Insight" title={t} desc={d} more={more} />
          ))}
        </div>
      </section>

      {/* TRUST + TESTIMONIALS + CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight">Trusted By Growth-Minded Teams</h2>
          <p className="text-slate-400">What modern companies value when partnering with HireNeuronX.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {TRUST.map(([t, d, more]) => (
            <Card key={t} title={t} desc={d} more={more} />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {TESTIMONIALS.map(([n, q, more]) => (
            <TestimonialCard key={n} name={n} quote={q} more={more} />
          ))}
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-8 sm:p-12 text-center">
          <div className="absolute -top-20 -right-20 h-60 w-60 bg-cyan-400/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 bg-blue-400/20 blur-3xl rounded-full" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Ready To Upgrade Your Hiring Engine?</h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Partner with HireNeuronX to build stronger teams, hire faster than competitors, and create long-term hiring momentum that compounds over time.
            </p>
            <a href="#contact" className="inline-block px-6 py-3 rounded-xl bg-cyan-400 text-slate-950 font-semibold hover:shadow-[0_0_30px_rgba(34,211,238,0.45)] hover:-translate-y-0.5 transition-all">
              Discuss Hiring Goals
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-60 w-60 bg-cyan-400/10 blur-3xl rounded-full pointer-events-none" />
          <div className="relative">
            <div className="inline-block px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-xs uppercase tracking-widest mb-4">Contact</div>
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight">Let's Build Your Future Team</h2>
            <p className="text-slate-400 mb-8 max-w-2xl">
              Tell us what you need. We'll build a hiring strategy that moves fast, attracts stronger talent, and gives you a real hiring edge.
            </p>
            <form
              action="https://formsubmit.co/Connect@HireNeuronX.com"
              method="POST"
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New HireNeuronX Website Inquiry" />
              <input type="hidden" name="_template" value="table" />

              <label className="block">
                <span className="block text-xs text-slate-400 mb-1.5 ml-1">Full Name *</span>
                <input name="name" required autoComplete="name" placeholder="Jane Doe"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all placeholder:text-slate-600" />
              </label>
              <label className="block">
                <span className="block text-xs text-slate-400 mb-1.5 ml-1">Work Email *</span>
                <input type="email" name="email" required autoComplete="email" placeholder="jane@company.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all placeholder:text-slate-600" />
              </label>
              <label className="block md:col-span-2">
                <span className="block text-xs text-slate-400 mb-1.5 ml-1">Company</span>
                <input name="company" autoComplete="organization" placeholder="Company Inc."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all placeholder:text-slate-600" />
              </label>
              <label className="block md:col-span-2">
                <span className="block text-xs text-slate-400 mb-1.5 ml-1">Hiring Goals *</span>
                <textarea name="message" required rows={5} placeholder="Roles needed, urgency, timeline..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all placeholder:text-slate-600 resize-y" />
              </label>
              <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
                <button type="submit" className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-400 text-slate-950 font-semibold hover:shadow-[0_0_30px_rgba(34,211,238,0.45)] hover:-translate-y-0.5 transition-all">
                  Request Hiring Consultation
                </button>
                <a href="mailto:Connect@HireNeuronX.com" className="text-cyan-300 hover:text-cyan-200 transition-colors text-sm">
                  Or email us directly → Connect@HireNeuronX.com
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row gap-6 justify-between items-center md:items-start text-center md:text-left text-sm text-slate-400">
          <div>
            <div className="font-bold text-base mb-1">
              <span className="text-white">Hire</span><span className="text-cyan-400">Neuron</span><span className="text-white">X</span>
            </div>
            <div>Future Hiring. Elite Execution.</div>
            <div className="mt-3 text-xs text-slate-500">© {new Date().getFullYear()} HireNeuronX. All rights reserved.</div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="mailto:Connect@HireNeuronX.com" className="hover:text-cyan-300 transition-colors">Connect@HireNeuronX.com</a>
            <a href="https://linkedin.com/company/hireneuronx/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 transition-colors">
              LinkedIn →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
