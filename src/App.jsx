import React from "react";

export default function App() {
  const services = [
    {
      title: "Direct Hire",
      desc: "We help you hire full-time top performers aligned with your business goals.",
    },
    {
      title: "Contract Staffing",
      desc: "Flexible hiring solutions for urgent projects, temporary needs, and rapid scaling.",
    },
    {
      title: "Executive Search",
      desc: "Targeted leadership hiring for high-impact roles and confidential searches.",
    },
    {
      title: "Talent Sourcing",
      desc: "Build strong pipelines with passive candidates and niche market talent.",
    },
  ];

  const benefits = [
    "Faster hiring cycles",
    "Better candidate quality",
    "Transparent communication",
    "Modern sourcing strategies",
    "Flexible engagement models",
    "Built for growth-focused companies",
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      {/* Navbar */}
      <header className="border-b border-slate-200 sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">
            Hire<span className="text-cyan-600">Neuron</span>X
          </h1>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-cyan-600">Home</a>
            <a href="#services" className="hover:text-cyan-600">Services</a>
            <a href="#about" className="hover:text-cyan-600">About</a>
            <a href="#contact" className="hover:text-cyan-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-cyan-600 font-semibold mb-3 uppercase tracking-widest text-sm">
            AI-Powered Staffing & Recruiting
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Hiring, <br />
            Reimagined.
          </h2>

          <p className="text-lg text-slate-600 mb-8 leading-8">
            We help companies across the United States hire top talent faster
            through modern recruiting systems, premium sourcing, and sharp
            execution.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#contact"
              className="bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-700 transition"
            >
              Book Consultation
            </a>

            <a
              href="#services"
              className="border border-slate-300 px-6 py-3 rounded-xl font-semibold hover:border-cyan-600 hover:text-cyan-600 transition"
            >
              Our Services
            </a>
          </div>
        </div>

        <div className="rounded-3xl bg-slate-100 p-10 shadow-xl">
          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-5 shadow">
              <p className="text-sm text-slate-500">Average Time-to-Hire</p>
              <h3 className="text-3xl font-bold mt-2">72h</h3>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow">
              <p className="text-sm text-slate-500">Candidate Quality</p>
              <h3 className="text-3xl font-bold mt-2">Top 5%</h3>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow">
              <p className="text-sm text-slate-500">Execution Focus</p>
              <h3 className="text-3xl font-bold mt-2">24/7</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">
            Why HireNeuronX
          </h2>

          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-14">
            Built for modern companies that need quality hiring without wasting
            time sorting through resume volume.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
              >
                <h3 className="font-semibold text-lg">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">
            What We Offer
          </h2>

          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-14">
            Flexible recruitment solutions designed for startups, SMBs, and
            growing enterprises.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-7">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">About HireNeuronX</h2>

          <p className="text-slate-300 leading-8 text-lg">
            We combine recruiting expertise with modern technology to help
            companies hire smarter, faster, and with greater confidence.
            HireNeuronX is built for teams that value speed, precision, and
            premium execution.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Your Team?
          </h2>

          <p className="text-slate-600 mb-8 text-lg">
            Let’s discuss your hiring needs and create a strategy that delivers.
          </p>

          <a
            href="mailto:hireneuronx@gmail.com"
            className="bg-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-cyan-700 transition inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 text-center text-slate-500 text-sm">
        © 2026 HireNeuronX. All rights reserved.
      </footer>
    </div>
  );
}
