import React from "react";
import {
  Award,
  BookOpen,
  Fingerprint,
  Globe,
  Linkedin,
  ShieldCheck,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Stealth Ad 1 - Top */}
      <div className="hidden bg-gray-100 flex items-center justify-center py-4 border-b border-gray-200">
        <div className="w-[728px] h-[90px] bg-gray-200"></div>
      </div>

      {/* Hero Header */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Expertise & Medical Discovery
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Navicostus was founded by Sameer with a singular mission: to bring
            high-authority discovery and transparency to the often opaque world
            of Medicare and Social Security.
          </p>
        </div>
      </section>

      {/* Main Bio Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative mb-12 lg:mb-0">
            <div className="aspect-square bg-blue-100 rounded-3xl overflow-hidden relative">
              <img
                src="https://raw.createusercontent.com/c2c0cf58-30c3-424a-8ac3-fa124f8e10a9/"
                alt="Sameer - Medical Discovery Expert"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden sm:block">
              <div className="flex items-center gap-4">
                <Award className="text-blue-600" size={40} />
                <div>
                  <div className="text-sm font-bold text-gray-900 tracking-tight">
                    Vetted Expertise
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">
                    Medical Data Discovery
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Sameer Methodology
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Sameer is a leading analyst in healthcare policy and financial
              discovery. With over a decade of experience tracking legislative
              shifts, Sameer's work focuses on the intersection of government
              policy and individual retirement security.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              The 'Navicostus' approach isn't just about reporting rates—it's
              about discovery. We dig deep into federal registers, actuary
              reports, and policy briefs to synthesize the most accurate roadmap
              for the 2026 Medicare landscape.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <ShieldCheck
                  className="text-blue-600 mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <h4 className="font-bold text-gray-900">
                    High-Authority Data
                  </h4>
                  <p className="text-sm text-gray-500">
                    Every rate and figure on Navicostus is cross-verified with
                    official CMS and SSA publications.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Globe className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-gray-900">National Reach</h4>
                  <p className="text-sm text-gray-500">
                    Helping thousands of seniors across all 50 states navigate
                    their retirement transitions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stealth Ad 2 - In-Content */}
      <div className="hidden max-w-7xl mx-auto px-4 py-8 flex justify-center">
        <div className="w-[728px] h-[90px] bg-gray-100"></div>
      </div>

      {/* Expertise Pillars */}
      <section className="bg-gray-50 py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Medical Discovery Core Pillars
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-200 flex items-center justify-center mx-auto mb-6 group-hover:border-blue-500 transition-colors">
                <Fingerprint className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Integrity-First Analysis
              </h3>
              <p className="text-gray-600">
                We prioritize unbiased data over industry partnerships. Our
                primary loyalty is to the beneficiary seeking clear discovery.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-200 flex items-center justify-center mx-auto mb-6 group-hover:border-blue-500 transition-colors">
                <BookOpen className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Educational Resources</h3>
              <p className="text-gray-600">
                Navicostus serves as a living wiki. We update our guides in
                real-time as 2026 policy changes are announced.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-200 flex items-center justify-center mx-auto mb-6 group-hover:border-blue-500 transition-colors">
                <Linkedin className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Professional Network</h3>
              <p className="text-gray-600">
                Sameer collaborates with a network of tax professionals and
                medical billers to ensure holistic financial discovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stealth Ad 3 & 4 */}
      <div className="hidden max-w-7xl mx-auto px-4 py-8 flex justify-center">
        <div className="w-[728px] h-[90px] bg-gray-50"></div>
      </div>
      <div className="hidden max-w-7xl mx-auto px-4 pb-8 flex justify-center">
        <div className="w-[300px] h-[250px] bg-gray-50"></div>
      </div>

      {/* Related Articles Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Explore Our 2026 Medicare Guides
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <a href="/medicare-part-b" className="group">
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl hover:border-blue-400 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  Part B Premiums 2026
                </h3>
                <p className="text-sm text-gray-600">
                  IRMAA brackets and standard deductibles explained.
                </p>
              </div>
            </a>
            <a href="/medicare-advantage-2026" className="group">
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl hover:border-blue-400 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  Medicare Advantage
                </h3>
                <p className="text-sm text-gray-600">
                  $0 premium plans and coverage comparisons.
                </p>
              </div>
            </a>
            <a href="/prescription-drug-coverage-2026" className="group">
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl hover:border-blue-400 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  Part D Drug Coverage
                </h3>
                <p className="text-sm text-gray-600">
                  New $2,000 cap on prescription costs.
                </p>
              </div>
            </a>
            <a href="/social-security-cola-2026" className="group">
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl hover:border-blue-400 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  Social Security COLA
                </h3>
                <p className="text-sm text-gray-600">
                  2.8% benefit increase breakdown.
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
    </div>
  );
}
