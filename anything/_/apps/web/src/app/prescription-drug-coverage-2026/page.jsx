import React from "react";
import {
  Pill,
  DollarSign,
  ShieldCheck,
  AlertCircle,
  Info,
  CheckCircle2,
  TrendingDown,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

export default function PrescriptionDrugPage() {
  const costPhases2026 = [
    {
      phase: "Deductible Phase",
      threshold: "$0 - $590",
      youPay: "100% until deductible met",
    },
    {
      phase: "Initial Coverage",
      threshold: "$590 - $2,000 OOP",
      youPay: "25% coinsurance",
    },
    {
      phase: "Catastrophic Coverage",
      threshold: "After $2,000 OOP",
      youPay: "$0 (plan pays 100%)",
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
            <li className="font-bold text-gray-900">
              Part D Drug Coverage 2026
            </li>
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
                Medicare Part D 2026: New $2,000 Drug Cost Cap
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-6">
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                  Major Savings
                </span>
                <span>Last Updated: March 10, 2026</span>
                <span>7 min read</span>
              </div>
              <img
                src="https://raw.createusercontent.com/f1f64c0b-55d4-4d72-9cf0-6089a8fb9e00/"
                alt="Medicare Part D Prescription Coverage 2026"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <p className="text-xl text-gray-600 leading-relaxed">
                The biggest change to Medicare Part D in its 20-year history is
                here. Starting in 2026, the{" "}
                <strong>$2,000 annual out-of-pocket cap</strong> eliminates the
                catastrophic coverage "donut hole" and provides critical relief
                for seniors on expensive medications. This comprehensive guide
                breaks down exactly how the new system works.
              </p>
            </header>

            <section className="mb-12">
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-200 p-8 rounded-2xl mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <TrendingDown className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Historic Cost Protection
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Once you spend $2,000 out-of-pocket on covered
                      prescription drugs in 2026, you pay{" "}
                      <span className="font-bold text-pink-700">
                        $0 for the rest of the year
                      </span>
                      . This replaces the old system where beneficiaries could
                      pay thousands more after hitting coverage gaps.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Pill className="text-blue-600" />
                2026 Part D Cost Phases Explained
              </h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Coverage Phase
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Spending Threshold
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        What You Pay
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {costPhases2026.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-pink-50/30 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {row.phase}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {row.threshold}
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-pink-600">
                          {row.youPay}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-gray-400 italic">
                *OOP = Out-of-Pocket costs. Includes deductible, copays, and
                coinsurance but NOT monthly premiums.
              </p>
            </section>

            {/* Stealth Ad 3 - In-Content */}
            <div className="hidden my-12 py-8 border-y border-gray-100 flex flex-col items-center">
              <div className="w-full h-[250px] bg-gray-50"></div>
            </div>

            <section className="space-y-8 mb-12">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
                <div className="flex gap-4">
                  <Info className="text-blue-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">
                      What Counts Toward the $2,000 Cap?
                    </h3>
                    <div className="text-blue-800 space-y-2">
                      <p className="flex items-start gap-2">
                        <CheckCircle2
                          className="text-green-600 flex-shrink-0 mt-1"
                          size={16}
                        />
                        <span>Your deductible payments</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <CheckCircle2
                          className="text-green-600 flex-shrink-0 mt-1"
                          size={16}
                        />
                        <span>Copayments and coinsurance you pay</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <CheckCircle2
                          className="text-green-600 flex-shrink-0 mt-1"
                          size={16}
                        />
                        <span>
                          What others pay on your behalf (charity, state
                          programs)
                        </span>
                      </p>
                      <p className="flex items-start gap-2 text-red-700">
                        <AlertCircle className="flex-shrink-0 mt-1" size={16} />
                        <span className="font-bold">
                          Monthly premiums DO NOT count toward the cap
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Real-World Savings Example
                </h3>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-4">
                    Case Study: Mary, Age 68, Multiple Medications
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="text-gray-600">
                        Monthly drug costs (retail):
                      </span>
                      <span className="font-bold text-gray-900">$850</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="text-gray-600">
                        Out-of-pocket before hitting $2K cap:
                      </span>
                      <span className="font-bold text-gray-900">
                        ~2.5 months
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="text-gray-600">
                        Remaining 9.5 months cost (2025 system):
                      </span>
                      <span className="font-bold text-red-600">~$4,200</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="text-gray-600">
                        Remaining 9.5 months cost (2026 with cap):
                      </span>
                      <span className="font-bold text-green-600">$0</span>
                    </div>
                    <div className="flex justify-between items-center pt-3 bg-green-50 -mx-6 px-6 py-3 rounded-b-xl">
                      <span className="text-green-900 font-bold text-base">
                        Total Annual Savings in 2026:
                      </span>
                      <span className="font-bold text-green-700 text-xl">
                        $4,200
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
                <div className="flex gap-4">
                  <AlertCircle
                    className="text-yellow-600 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="text-lg font-bold text-yellow-900 mb-2">
                      Important: Check Your Plan's Formulary
                    </h3>
                    <p className="text-yellow-800 mb-3">
                      Not all Part D plans cover the same medications. Before
                      enrolling:
                    </p>
                    <ul className="space-y-2 text-sm text-yellow-800">
                      <li className="flex items-start gap-2">
                        <span className="font-bold">•</span>
                        <span>
                          Verify your current prescriptions are on the plan's
                          formulary (covered drug list)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold">•</span>
                        <span>
                          Check if any drugs require prior authorization or step
                          therapy
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-bold">•</span>
                        <span>
                          Compare copay tiers (generic, preferred brand,
                          non-preferred, specialty)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Extra Help Program: Even Greater Savings
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Low-income beneficiaries may qualify for{" "}
                <strong>Extra Help (Low-Income Subsidy)</strong>, which can
                reduce or eliminate Part D premiums and deductibles, and cap
                copays as low as $0-$4.50 per prescription.
              </p>
              <div className="bg-white border-2 border-blue-200 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">
                  2026 Extra Help Income Limits:
                </h4>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="text-blue-600" size={20} />
                    <div>
                      <span className="font-bold text-gray-900">
                        Individual:
                      </span>{" "}
                      <span className="text-gray-600">
                        $22,590/year or less
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="text-blue-600" size={20} />
                    <div>
                      <span className="font-bold text-gray-900">Married:</span>{" "}
                      <span className="text-gray-600">
                        $30,660/year or less
                      </span>
                    </div>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-2 text-blue-600 font-bold hover:underline"
                >
                  Check Your Eligibility <ArrowRight size={16} />
                </a>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Enrollment Tips for 2026
              </h3>
              <div className="space-y-3">
                {[
                  "Review your current medications and estimate yearly costs",
                  "Use Medicare's Plan Finder tool to compare Part D plans in your area",
                  "Check if your preferred pharmacy is in the plan's network",
                  "Consider mail-order pharmacy for 90-day supplies (often cheaper)",
                  "Enroll during Annual Enrollment (Oct 15 - Dec 7) to avoid penalties",
                  "Ask your doctor about generic alternatives to save on copays",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-200 rounded-lg"
                  >
                    <div className="w-6 h-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-sm flex-shrink-0">
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
                  <a href="/medicare-advantage-2026" className="group block">
                    <span className="text-sm font-bold text-blue-600 group-hover:underline">
                      Medicare Advantage Plans 2026
                    </span>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      Many Advantage plans include Part D drug coverage
                      built-in.
                    </p>
                  </a>
                </li>
                <li>
                  <a href="/medicare-part-b" className="group block">
                    <span className="text-sm font-bold text-blue-600 group-hover:underline">
                      Medicare Part B Premiums
                    </span>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      Understanding IRMAA surcharges and standard rates for
                      2026.
                    </p>
                  </a>
                </li>
                <li>
                  <a href="/social-security-cola-2026" className="group block">
                    <span className="text-sm font-bold text-blue-600 group-hover:underline">
                      Social Security COLA
                    </span>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      2.8% benefit increase may help offset drug costs.
                    </p>
                  </a>
                </li>
              </ul>
            </div>

            {/* Stealth Ad 5 - Right Sidebar Middle */}
            <div className="hidden w-full h-[600px] bg-gray-100"></div>

            <div className="bg-pink-600 rounded-2xl p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-4">Need Drug Plan Help?</h3>
              <p className="text-pink-100 text-sm mb-6">
                Our team can help you find the best Part D plan for your
                prescriptions.
              </p>
              <a
                href="/contact"
                className="block w-full py-3 bg-white text-pink-600 rounded-xl font-bold hover:bg-pink-50 transition-colors"
              >
                Get Personalized Help
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
