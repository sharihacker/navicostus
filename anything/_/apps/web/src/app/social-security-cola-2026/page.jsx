import React from "react";
import {
  TrendingUp,
  DollarSign,
  Calendar,
  Calculator,
  Info,
  ArrowRight,
  ChevronRight,
  AlertCircle,
} from "lucide-react";

export default function SocialSecurityCOLAPage() {
  const colaBreakdown = [
    {
      benefitType: "Retirement (Average)",
      benefit2025: "$1,927",
      benefit2026: "$1,981",
      increase: "$54",
    },
    {
      benefitType: "Disability (SSDI Average)",
      benefit2025: "$1,542",
      benefit2026: "$1,585",
      increase: "$43",
    },
    {
      benefitType: "Survivor Benefits (Average)",
      benefit2025: "$1,788",
      benefit2026: "$1,838",
      increase: "$50",
    },
    {
      benefitType: "SSI Federal Maximum",
      benefit2025: "$967",
      benefit2026: "$994",
      increase: "$27",
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
              Social Security COLA 2026
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
                2026 Social Security COLA: 2.8% Increase Breakdown
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-6">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                  Benefits Update
                </span>
                <span>Last Updated: March 10, 2026</span>
                <span>6 min read</span>
              </div>
              <img
                src="https://raw.createusercontent.com/9170d6de-00ae-4d53-a63d-f48b9d5834b2/"
                alt="Social Security COLA 2026 Increase"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <p className="text-xl text-gray-600 leading-relaxed">
                The Social Security Administration (SSA) has announced a{" "}
                <strong>2.8% Cost of Living Adjustment (COLA)</strong> for 2026,
                affecting over 71 million Americans receiving Social Security
                and Supplemental Security Income (SSI) benefits. This
                comprehensive guide breaks down exactly what this means for your
                monthly check.
              </p>
            </header>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Calculator className="text-blue-600" />
                2026 Monthly Benefit Increases
              </h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Benefit Type
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        2025 Amount
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        2026 Amount
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Increase
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {colaBreakdown.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-green-50/30 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {row.benefitType}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {row.benefit2025}
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-green-600">
                          {row.benefit2026}
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-blue-600">
                          +{row.increase}
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
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
                <div className="flex gap-4">
                  <Info className="text-blue-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">
                      Maximum Taxable Earnings Increase
                    </h3>
                    <p className="text-blue-800">
                      The maximum amount of earnings subject to Social Security
                      tax in 2026 will increase to <strong>$176,100</strong> (up
                      from $168,600 in 2025). This affects high earners who will
                      pay Social Security taxes on a larger portion of their
                      income.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  How COLA is Calculated
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The COLA is based on the percentage increase in the Consumer
                  Price Index for Urban Wage Earners and Clerical Workers
                  (CPI-W) from the third quarter of the previous year to the
                  third quarter of the current year. The 2.8% increase for 2026
                  reflects inflation trends measured from Q3 2024 to Q3 2025.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Key COLA Facts for 2026:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <TrendingUp
                        className="text-green-500 flex-shrink-0 mt-1"
                        size={18}
                      />
                      <span className="text-gray-700">
                        This is higher than 2025's 2.5% COLA adjustment
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Calendar
                        className="text-blue-500 flex-shrink-0 mt-1"
                        size={18}
                      />
                      <span className="text-gray-700">
                        First payment with COLA increase: January 3, 2026
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <DollarSign
                        className="text-yellow-500 flex-shrink-0 mt-1"
                        size={18}
                      />
                      <span className="text-gray-700">
                        SSI recipients will receive the increase on December 31,
                        2025
                      </span>
                    </li>
                  </ul>
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
                      Important: Medicare Part B Premium Impact
                    </h3>
                    <p className="text-yellow-800 mb-4">
                      For most beneficiaries, Medicare Part B premiums are
                      automatically deducted from Social Security checks. The
                      2026 Part B premium is projected at $185.00/month, which
                      may reduce your net COLA increase.
                    </p>
                    <a
                      href="/medicare-part-b"
                      className="text-yellow-900 font-bold flex items-center gap-1 hover:underline"
                    >
                      See Full Part B Breakdown <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Who Benefits from COLA 2026?
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Retirement Benefits
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Approximately 54 million retired workers and their
                    dependents will see the 2.8% increase applied to their
                    monthly checks.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Disability (SSDI)
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Around 9 million disabled workers receiving SSDI will
                    benefit from the adjustment.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Survivors Benefits
                  </h4>
                  <p className="text-gray-600 text-sm">
                    6 million survivors of deceased workers will receive the
                    COLA increase on their benefits.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">
                    SSI Recipients
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Over 7 million SSI beneficiaries will see the adjustment,
                    with payments starting December 31, 2025.
                  </p>
                </div>
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
                      How Part B deductions affect your net Social Security
                      benefit.
                    </p>
                  </a>
                </li>
                <li>
                  <a href="/medicare-advantage-2026" className="group block">
                    <span className="text-sm font-bold text-blue-600 group-hover:underline">
                      Medicare Advantage Changes
                    </span>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      Explore $0 premium plans and coverage shifts for 2026.
                    </p>
                  </a>
                </li>
                <li>
                  <a
                    href="/prescription-drug-coverage-2026"
                    className="group block"
                  >
                    <span className="text-sm font-bold text-blue-600 group-hover:underline">
                      Part D Drug Coverage 2026
                    </span>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      New $2,000 out-of-pocket cap and what it means for you.
                    </p>
                  </a>
                </li>
              </ul>
            </div>

            {/* Stealth Ad 5 - Right Sidebar Middle */}
            <div className="hidden w-full h-[600px] bg-gray-100"></div>

            <div className="bg-blue-600 rounded-2xl p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-4">Questions About COLA?</h3>
              <p className="text-blue-100 text-sm mb-6">
                Contact our discovery team for personalized Social Security
                guidance.
              </p>
              <a
                href="/contact"
                className="block w-full py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors"
              >
                Get Expert Help
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
