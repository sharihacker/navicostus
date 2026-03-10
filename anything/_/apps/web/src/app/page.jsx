import React from "react";
import {
  ShieldCheck,
  TrendingUp,
  Calendar,
  ArrowRight,
  UserCheck,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Stealth Ad 1 - Top Leaderboard */}
      <div className="hidden bg-gray-100 flex items-center justify-center py-4 border-b border-gray-200">
        <div className="w-[728px] h-[90px] bg-gray-200"></div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-blue-700 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                Navicostus: The 2026 Medicare & Social Security Guide
              </h1>
              <p className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto lg:mx-0">
                Unlock expert 'Medical Discovery' for the upcoming year. Your
                comprehensive wiki for navigating rates, benefits, and
                retirement transitions.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="/medicare-part-b"
                  className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                >
                  Explore 2026 Rates <ArrowRight size={20} />
                </a>
                <a
                  href="/about"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-500 transition-colors flex items-center justify-center gap-2"
                >
                  About Sameer & Expertise
                </a>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                  {[
                    {
                      label: "Part B Premium",
                      value: "$185.00*",
                      color: "text-green-400",
                    },
                    {
                      label: "Standard Deductible",
                      value: "$257.00*",
                      color: "text-yellow-400",
                    },
                    {
                      label: "Max COLA Increase",
                      value: "2.8%*",
                      color: "text-blue-400",
                    },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex justify-between items-center border-b border-white/10 pb-4 last:border-0 last:pb-0"
                    >
                      <span className="text-blue-100 font-medium">
                        {stat.label}
                      </span>
                      <span className={`text-2xl font-bold ${stat.color}`}>
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[10px] text-blue-200 text-right uppercase tracking-widest">
                  *Estimated 2026 Projections
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Stealth Ad 2 - Left Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="hidden w-[300px] h-[600px] bg-gray-100"></div>
            </div>
          </div>

          {/* Center Main Discovery Content */}
          <div className="col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-blue-600 inline-block pb-2 mb-8">
                2026 Medical Discovery Roadmap
              </h2>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Medicare Advantage Shifts
                  </h3>
                  <p className="text-gray-600">
                    Discover how the 2026 policy changes affect private
                    Advantage plans and out-of-pocket maximums.
                  </p>
                  <a
                    href="/medicare-advantage-2026"
                    className="mt-4 text-blue-600 font-semibold flex items-center gap-1 hover:underline"
                  >
                    Read more <ArrowRight size={16} />
                  </a>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <TrendingUp size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Social Security COLA
                  </h3>
                  <p className="text-gray-600">
                    Analysis of the Cost of Living Adjustment for 2026 and what
                    it means for your monthly check.
                  </p>
                  <a
                    href="/social-security-cola-2026"
                    className="mt-4 text-blue-600 font-semibold flex items-center gap-1 hover:underline"
                  >
                    Read more <ArrowRight size={16} />
                  </a>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                    <Calendar size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Enrollment Deadlines
                  </h3>
                  <p className="text-gray-600">
                    Critical dates for 2026 enrollment periods and how to avoid
                    late enrollment penalties.
                  </p>
                  <a
                    href="/medicare-advantage-2026"
                    className="mt-4 text-blue-600 font-semibold flex items-center gap-1 hover:underline"
                  >
                    Read more <ArrowRight size={16} />
                  </a>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-4">
                    <UserCheck size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Discovery Expertise
                  </h3>
                  <p className="text-gray-600">
                    Learn about Sameer's methodology for vetting medical data
                    and government policy shifts.
                  </p>
                  <a
                    href="/about"
                    className="mt-4 text-blue-600 font-semibold flex items-center gap-1 hover:underline"
                  >
                    Read more <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Stealth Ad 3 - In-Content */}
            <div className="hidden py-8 border-y border-gray-100 flex flex-col items-center">
              <div className="w-full h-[250px] bg-gray-50"></div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
                Stay Ahead of the 2026 Changes
              </h3>
              <p className="text-blue-800 text-center max-w-lg mx-auto mb-8">
                Subscribe to our Navicostus briefing for weekly updates on
                Medicare legislation and Social Security discovery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="flex-grow px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                  Join Wiki
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Must-Read High-Authority Guides
              </h2>
              <p className="text-gray-600">
                The core pillars of our Navicostus Medicare Discovery system.
              </p>
            </div>
            <a
              href="/medicare-part-b"
              className="text-blue-600 font-bold flex items-center gap-2 hover:underline"
            >
              View All Guides <ArrowRight size={20} />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="/medicare-part-b"
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <img
                src="https://raw.createusercontent.com/df75822b-9a23-4d39-b992-eee3e3d75868/"
                alt="Medicare Part B Premiums Guide"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <div className="text-blue-600 text-sm font-bold uppercase tracking-wider mb-2">
                  Part B Guide
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  Navigating Part B Premiums in 2026
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  A deep dive into the specific mechanics of how Premiums are
                  calculated for the upcoming tax and medical year.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    S
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    By Sameer &bull; March 10, 2026
                  </div>
                </div>
              </div>
            </a>
            <a
              href="/social-security-cola-2026"
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <img
                src="https://raw.createusercontent.com/9170d6de-00ae-4d53-a63d-f48b9d5834b2/"
                alt="Social Security COLA 2026"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <div className="text-blue-600 text-sm font-bold uppercase tracking-wider mb-2">
                  COLA Update
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  Navigating IRMAA Surcharges in 2026
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  A deep dive into the specific mechanics of how IRMAA is
                  calculated for the upcoming tax and medical year.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    S
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    By Sameer &bull; March 10, 2026
                  </div>
                </div>
              </div>
            </a>
            <a
              href="/prescription-drug-coverage-2026"
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <img
                src="https://raw.createusercontent.com/f1f64c0b-55d4-4d72-9cf0-6089a8fb9e00/"
                alt="Part D Drug Coverage"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <div className="text-blue-600 text-sm font-bold uppercase tracking-wider mb-2">
                  Part D Coverage
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  Navigating Dual Eligibility in 2026
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  A deep dive into the specific mechanics of how Eligibility is
                  calculated for the upcoming tax and medical year.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    S
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    By Sameer &bull; March 10, 2026
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Stealth Ad 4 - Before Related */}
      <div className="hidden py-8 flex justify-center bg-white">
        <div className="w-[728px] h-[90px] bg-gray-100"></div>
      </div>

      {/* Related Articles Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Explore More Medicare & Social Security Topics
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <a href="/medicare-advantage-2026" className="group">
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl hover:border-blue-400 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  Medicare Advantage 2026
                </h3>
                <p className="text-sm text-gray-600">
                  Compare traditional Medicare vs Advantage plans for 2026.
                </p>
              </div>
            </a>
            <a href="/prescription-drug-coverage-2026" className="group">
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl hover:border-blue-400 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  Part D Drug Coverage
                </h3>
                <p className="text-sm text-gray-600">
                  New $2,000 out-of-pocket cap for prescription drugs.
                </p>
              </div>
            </a>
            <a href="/social-security-cola-2026" className="group">
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl hover:border-blue-400 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  2026 COLA Increase
                </h3>
                <p className="text-sm text-gray-600">
                  2.8% Social Security benefit adjustment breakdown.
                </p>
              </div>
            </a>
            <a href="/contact" className="group">
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl hover:border-blue-400 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  Contact Expert Team
                </h3>
                <p className="text-sm text-gray-600">
                  Get personalized Medicare guidance from Sameer.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Stealth Ad 5 & 6 - Bottom */}
      <div className="hidden bg-gray-50 py-8 flex justify-center border-t border-gray-200">
        <div className="w-[728px] h-[90px] bg-gray-100"></div>
      </div>
      <div className="hidden bg-white py-4 flex justify-center">
        <div className="w-[300px] h-[250px] bg-gray-100"></div>
      </div>
    </div>
  );
}
