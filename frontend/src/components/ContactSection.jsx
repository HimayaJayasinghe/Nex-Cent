import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'High-Converting Landing Page',
    budget: 'Rs. 25,000 - 50,000',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-green-100 text-[#4CAF4F] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#263238] leading-tight">
            Let's Build Your Custom Frontend Website
          </h2>
          <p className="text-[#717171] text-base mt-3 leading-relaxed">
            Need a stunning, responsive web page for your business or personal brand? Tell us about your project and we’ll get back to you with a custom quote within 24 hours.
          </p>
        </div>

        {/* Clear Notice Banner about Frontend-Only Scope */}
        <div className="max-w-4xl mx-auto mb-10 bg-emerald-50 border-l-4 border-[#4CAF4F] p-4 sm:p-5 rounded-r-xl shadow-xs">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <h4 className="font-bold text-[#263238] text-sm sm:text-base">
                Important Scope Notice: Pure Frontend Specialists
              </h4>
              <p className="text-xs sm:text-sm text-[#4D4D4D] mt-1 leading-relaxed">
                We craft custom, pixel-perfect <strong>frontend web pages</strong> (React, Tailwind CSS, animations, responsive design, and static hosting). We do <strong>not</strong> build backend databases or server APIs. If your project needs high-converting presentation pages, landing pages, or UI prototypes, we are your ideal partner!
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form and Details Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Direct Contact Info */}
          <div className="bg-[#263238] text-white rounded-2xl p-8 flex flex-col justify-between shadow-lg">
            <div>
              <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                Ready to talk? Reach out directly or submit the inquiry form. We're excited to collaborate with you.
              </p>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <span className="text-lg text-[#4CAF4F]">✉️</span>
                  <div>
                    <div className="text-xs text-gray-400">Email Us</div>
                    <a href="mailto:hbinushi@gmail.com" className="hover:text-[#4CAF4F] transition-colors font-medium text-white">
                      hbinushi@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-lg text-[#4CAF4F]">💬</span>
                  <div>
                    <div className="text-xs text-gray-400">WhatsApp / Direct Line</div>
                    <a href="tel:0706767619" className="hover:text-[#4CAF4F] transition-colors font-medium text-white">
                      0706767619
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-lg text-[#4CAF4F]">⚡</span>
                  <div>
                    <div className="text-xs text-gray-400">Turnaround Time</div>
                    <span className="font-medium">3 to 7 Business Days for Most Frontends</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-lg text-[#4CAF4F]">🌐</span>
                  <div>
                    <div className="text-xs text-gray-400">Hosting Consultation</div>
                    <span className="font-medium">Free guidance on Vercel / Netlify / GitHub Pages</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-700 text-xs text-gray-400">
              Response Guarantee: We reply within 24 hours on business days.
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-md border border-gray-100">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-green-100 text-[#4CAF4F] rounded-full flex items-center justify-center text-3xl mb-4">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-[#263238] mb-2">Thank You for Reaching Out!</h3>
                <p className="text-[#717171] text-sm max-w-md mx-auto leading-relaxed mb-6">
                  We have received your frontend project inquiry. Our team will review your specifications and contact you at <span className="font-semibold text-[#263238]">{formData.email}</span> within 24 hours with an estimated quote.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#4CAF4F] text-white rounded-lg text-sm font-medium hover:bg-[#3d913f] transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#4D4D4D] uppercase mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Binushi Himaya"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#4D4D4D] focus:outline-none focus:ring-2 focus:ring-[#4CAF4F] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#4D4D4D] uppercase mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="hbinushi@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#4D4D4D] focus:outline-none focus:ring-2 focus:ring-[#4CAF4F] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#4D4D4D] uppercase mb-1.5">
                      Project Type *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#4D4D4D] focus:outline-none focus:ring-2 focus:ring-[#4CAF4F] focus:bg-white transition-all"
                    >
                      <option value="High-Converting Landing Page">High-Converting Landing Page</option>
                      <option value="Figma to React">Figma / XD to React Conversion</option>
                      <option value="Business Showcase">Company / Portfolio Showcase</option>
                      <option value="Frontend Redesign">Frontend UI/UX Redesign</option>
                      <option value="Multi-Page Frontend">Multi-Page Frontend Website</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#4D4D4D] uppercase mb-1.5">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="0706767619"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#4D4D4D] focus:outline-none focus:ring-2 focus:ring-[#4CAF4F] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4D4D4D] uppercase mb-1.5">
                    Estimated Budget Range (Rupees)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['Rs. 25,000 - 50,000', 'Rs. 50,000 - 100,000', 'Rs. 100,000 - 250,000', 'Custom'].map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                          formData.budget === b
                            ? 'bg-[#4CAF4F] text-white border-[#4CAF4F]'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4D4D4D] uppercase mb-1.5">
                    Project Requirements / Brief *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your design vision, pages needed, or share a Figma/reference link. (Remember: We specialize in frontend only — no backend)."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#4D4D4D] focus:outline-none focus:ring-2 focus:ring-[#4CAF4F] focus:bg-white transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#4CAF4F] hover:bg-[#3d913f] text-white font-semibold rounded-lg shadow-sm hover:shadow transition-all text-sm uppercase tracking-wider cursor-pointer"
                  >
                    Send Project Inquiry →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
