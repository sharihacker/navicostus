import React from "react";
import {
  Shield,
  DollarSign,
  Heart,
  Eye,
  Pill,
  AlertTriangle,
  Info,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

export default function MedicareAdvantagePage() {
  const planComparison = [
    {
      feature: "Monthly Premium",
      traditional: "$185.00 + Part D",
      advantage: "$0 - $150",
    },
    {
      feature: "Deductible",
      traditional: "$257 Part B",
      advantage: "$0 - $500 (varies)",
    },
    {
      feature: "Out-of-Pocket Max",
      traditional: "None (unlimited)",
      advantage: "$8,850 (2026 max)",
    },
    {
      feature: "Dental Coverage",
      traditional: "Not included",
      advantage: "Often included",
    },
    {
      feature: "Vision Coverage",
      traditional: "Not included",
      advantage: "Often included",
    },
    {
      feature: "Prescription Drugs",
      traditional: "Separate Part D",
      advantage: "Usually bundled",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Stealth Ad 1 - Top Leaderboard */}
      <div className="hidden bg-white flex items-center justify-center py-4 border-b border-gray-200">
        <div className="w-[728px] h-[90px] bg-gray-100"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav
          className="flex mb-8 text-sm text-gray-500"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center space-x-2">
            <li>
              <a href="/" className="hover:text-blue-600 transition-colors">
                Home
              </a>
            </li>
            <li>
              <ChevronRight size={14} />
            </li>
            <li className="font-bold text-gray-900">Medicare Advantage 2026</li>
          </ol>
        </nav>

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Stealth Ad 2 - Left Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <div className="hidden w-[160px] h-[600px] bg-gray-100"></div>
            </div>
          </div>

          {/* Main Content */}
          <article className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <header className="mb-12">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Medicare Advantage 2026: Complete Coverage Guide
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-6">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                  Plan Comparison
                </span>
                <span>Last Updated: March 10, 2026</span>
                <span>10 min read</span>
              </div>
              <img
                src="https://raw.createusercontent.com/732850f4-d499-4c02-9f5c-1198ffe0013b/"
                alt="Medicare Advantage 2026 Plans"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <p className="text-xl text-gray-600 leading-relaxed">
                Medicare Advantage (Part C) plans are private insurance
                alternatives to Original Medicare. For 2026, major policy shifts
                and benefit enhancements make this the most important enrollment
                year in decades. This guide analyzes everything you need to
                know.
              </p>
            </header>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Shield className="text-blue-600" />
                Traditional Medicare vs Medicare Advantage 2026
              </h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Feature
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Traditional Medicare
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Medicare Advantage
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {planComparison.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-purple-50/30 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {row.feature}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {row.traditional}
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-purple-600">
                          {row.advantage}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Stealth Ad 3 - In-Content */}
            <div className="hidden my-12 py-8 border-y border-gray-100 flex flex-col items-center">
              <div className="w-full h-[250px] bg-gray-50"></div>
            </div>

            <section className="space-y-8 mb-12">
              <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-xl">
                <div className="flex gap-4">
                  <Info className="text-purple-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-bold text-purple-900 mb-2">
                      Major 2026 Change: $0 Premium Plans Expansion
                    </h3>
                    <p className="text-purple-800">
                      Over 85% of Medicare Advantage enrollees now have access
                      to at least one $0 premium plan in their area. This
                      represents a 12% increase from 2025, driven by competitive
                      market forces and enhanced federal subsidies.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  What Medicare Advantage Covers in 2026
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  All Medicare Advantage plans must cover everything Original
                  Medicare covers (Part A hospital and Part B medical). However,
                  most plans offer additional benefits:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white border border-gray-200 p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Pill className="text-purple-600" size={20} />
                      </div>
                      <h4 className="font-bold text-gray-900">
                        Prescription Drug Coverage
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Most plans include Part D drug coverage built-in, with the
                      new $2,000 out-of-pocket cap for 2026.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Eye className="text-blue-600" size={20} />
                      </div>
                      <h4 className="font-bold text-gray-900">
                        Vision & Dental
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      89% of Advantage plans now include vision exams and
                      eyewear allowances, 78% include preventive dental.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Heart className="text-green-600" size={20} />
                      </div>
                      <h4 className="font-bold text-gray-900">
                        Fitness & Wellness
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Many plans offer gym memberships, fitness programs, and
                      over-the-counter (OTC) benefit cards.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                        <Shield className="text-yellow-600" size={20} />
                      </div>
                      <h4 className="font-bold text-gray-900">
                        Out-of-Pocket Max
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Federal cap of $8,850 for in-network services protects
                      against catastrophic costs (Original Medicare has no cap).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
                <div className="flex gap-4">
                  <AlertTriangle
                    className="text-yellow-600 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="text-lg font-bold text-yellow-900 mb-2">
                      Important Network Restrictions
                    </h3>
                    <p className="text-yellow-800 mb-3">
                      Unlike Original Medicare (which is accepted nationwide),
                      Medicare Advantage plans typically use provider networks
                      (HMO, PPO). Key considerations:
                    </p>
                    <ul className="space-y-2 text-sm text-yellow-800">
                      <li className="flex items-start gap-2">
                        <span className="font-bold">•</span>
                        <span>
                          HMO plans require referrals and in-network care
                          (except emergencies)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold">•</span>
                        <span>
                          PPO plans allow out-of-network care but at higher
                          costs
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold">•</span>
                        <span>
                          Always verify your doctors are in-network before
                          enrolling
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                2026 Enrollment Periods
              </h3>
              <div className="space-y-4">
                <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="text-blue-600" size={20} />
                    <h4 className="font-bold text-gray-900">
                      Annual Enrollment Period (AEP)
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>October 15 - December 7, 2025</strong>
                  </p>
                  <p className="text-gray-600 text-sm">
                    Switch from Original Medicare to Advantage, change Advantage
                    plans, or drop Advantage for Original Medicare + Part D.
                  </p>
                </div>
                <div className="bg-white border-l-4 border-green-600 p-6 rounded-r-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="text-green-600" size={20} />
                    <h4 className="font-bold text-gray-900">
                      Medicare Advantage Open Enrollment
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>January 1 - March 31, 2026</strong>
                  </p>
                  <p className="text-gray-600 text-sm">
                    If already enrolled in Advantage, you can switch to a
                    different Advantage plan or drop Advantage for Original
                    Medicare + Part D (one change allowed).
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Discovery Checklist: Choosing the Right Plan
              </h3>
              <div className="space-y-3">
                {[
                  "Check if your current doctors accept the Advantage plan's network",
                  "Compare total yearly costs (premiums + deductibles + co-pays)",
                  "Review prescription drug formulary (covered medications list)",
                  "Verify specialist access and referral requirements",
                  "Assess extra benefits (dental, vision, fitness) value to you",
                  "Understand travel coverage if you spend time out of state",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-200 rounded-lg"
                  >
                    <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </article>

          {/* Right Sidebar */}
          <aside className="space-y-8">
            {/* Stealth Ad 4 - Right Sidebar Top */}
            <div className="hidden w-full h-[250px] bg-gray-100"></div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                Related Articles
              </h3>
              <ul className="space-y-4">
                <li>
                  <a href="/medicare-part-b" className="group block">
                    <span className="text-sm font-bold text-blue-600 group-hover:underline">
                      Medicare Part B Premiums 2026
                    </span>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      Traditional Medicare Part B rates and IRMAA brackets.
                    </p>
                  </a>
                </li>
                <li>
                  <a
                    href="/prescription-drug-coverage-2026"
                    className="group block"
                  >
                    <span className="text-sm font-bold text-blue-600 group-hover:underline">
                      Part D Prescription Coverage
                    </span>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      New $2,000 out-of-pocket cap for drug costs in 2026.
                    </p>
                  </a>
                </li>
                <li>
                  <a href="/social-security-cola-2026" className="group block">
                    <span className="text-sm font-bold text-blue-600 group-hover:underline">
                      Social Security COLA 2026
                    </span>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      2.8% benefit increase and how it interacts with Medicare.
                    </p>
                  </a>
                </li>
              </ul>
            </div>

            {/* Stealth Ad 5 - Right Sidebar Middle */}
            <div className="hidden w-full h-[600px] bg-gray-100"></div>

            <div className="bg-purple-600 rounded-2xl p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-4">Need Plan Guidance?</h3>
              <p className="text-purple-100 text-sm mb-6">
                Our experts can help you compare Advantage plans in your area.
              </p>
              <a
                href="/contact"
                className="block w-full py-3 bg-white text-purple-600 rounded-xl font-bold hover:bg-purple-50 transition-colors"
              >
                Compare Plans Now
              </a>
            </div>
          </aside>
        </div>

        {/* Stealth Ad 6 - Bottom Leaderboard */}
        <div className="hidden mt-16 flex justify-center">
          <div className="w-[728px] h-[90px] bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}
