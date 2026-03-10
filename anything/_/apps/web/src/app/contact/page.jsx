import React from "react";
import { Mail, MessageSquare, Phone, MapPin, Send, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Stealth Ad 1 - Top */}
      <div className="hidden bg-gray-100 flex items-center justify-center py-4 border-b border-gray-200">
        <div className="w-[728px] h-[90px] bg-gray-200"></div>
      </div>

      {/* Header */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Contact Discovery Team
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Have questions about the 2026 Medicare shifts? Our team is here to
            help you navigate the Navicostus wiki.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Info Column */}
          <div className="space-y-8 mb-16 lg:mb-0">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you're a beneficiary, a caregiver, or a professional
                seeking discovery data, we're ready to assist.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email Contact</h4>
                  <a
                    href="mailto:sameerhanif014@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    sameerhanif014@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Stealth Ad 2 - Sidebar */}
            <div className="hidden w-full h-[250px] bg-gray-50"></div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="p-8 sm:p-12">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Subject
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white">
                      <option>2026 Medicare Part B Inquiry</option>
                      <option>Social Security Discovery</option>
                      <option>Medicare Advantage Questions</option>
                      <option>Prescription Drug Coverage</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows="5"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="How can we help with your medical discovery today?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                  >
                    Send Message <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stealth Ad 3 & 4 */}
      <div className="hidden py-8 flex justify-center bg-gray-50">
        <div className="w-[728px] h-[90px] bg-gray-100"></div>
      </div>
      <div className="hidden pb-8 flex justify-center bg-gray-50">
        <div className="w-[300px] h-[250px] bg-gray-100"></div>
      </div>

      {/* Related Articles Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Explore Our Medicare Resources
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <a href="/medicare-part-b" className="group">
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl hover:border-blue-400 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  Part B Premiums
                </h3>
                <p className="text-sm text-gray-600">
                  2026 rates and IRMAA surcharges.
                </p>
              </div>
            </a>
            <a href="/medicare-advantage-2026" className="group">
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl hover:border-blue-400 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  Medicare Advantage
                </h3>
                <p className="text-sm text-gray-600">
                  Plan comparisons and enrollment.
                </p>
              </div>
            </a>
            <a href="/prescription-drug-coverage-2026" className="group">
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl hover:border-blue-400 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  Drug Coverage
                </h3>
                <p className="text-sm text-gray-600">
                  Part D $2,000 cap explained.
                </p>
              </div>
            </a>
            <a href="/social-security-cola-2026" className="group">
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl hover:border-blue-400 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  COLA 2026
                </h3>
                <p className="text-sm text-gray-600">
                  2.8% benefit increase details.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Stealth Ad 5 & 6 */}
      <div className="hidden bg-gray-50 py-8 flex justify-center border-t border-gray-200">
        <div className="w-[728px] h-[90px] bg-gray-100"></div>
      </div>
      <div className="hidden bg-white py-4 flex justify-center">
        <div className="w-[300px] h-[600px] bg-gray-100"></div>
      </div>

      {/* Trust Banner */}
      <section className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-8">
            As Featured In Discovery Weekly
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-40">
            {[
              "Medical Daily",
              "Retirement Watch",
              "Policy Insider",
              "Medicare Hub",
            ].map((brand) => (
              <span
                key={brand}
                className="text-2xl font-black italic text-gray-800"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
