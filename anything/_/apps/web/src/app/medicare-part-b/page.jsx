import React from "react";
import {
  Table,
  Info,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

export default function MedicarePartBPage() {
  const rates2026 = [
    {
      range: "Individual: ≤ $103,000 | Joint: ≤ $206,000",
      premium: "$185.00",
      irmaa: "$0.00",
    },
    {
      range: "Individual: $103k - $129k | Joint: $206k - $258k",
      premium: "$259.00",
      irmaa: "$74.00",
    },
    {
      range: "Individual: $129k - $161k | Joint: $258k - $322k",
      premium: "$370.00",
      irmaa: "$185.00",
    },
    {
      range: "Individual: $161k - $193k | Joint: $322k - $386k",
      premium: "$481.00",
      irmaa: "$296.00",
    },
    {
      range: "Individual: $193k - $500k | Joint: $386k - $750k",
      premium: "$592.00",
      irmaa: "$407.00",
    },
    {
      range: "Individual: > $500,000 | Joint: > $750,000",
      premium: "$666.00",
      irmaa: "$481.00",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Stealth Ad 1 - Top Banner */}
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
            <li className="font-bold text-gray-900">Medicare Part B (2026)</li>
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
                2026 Medicare Part B Premiums & Deductibles
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-6">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                  Discovery Guide
                </span>
                <span>Last Updated: March 10, 2026</span>
                <span>8 min read</span>
              </div>
              <img
                src="https://raw.createusercontent.com/df75822b-9a23-4d39-b992-eee3e3d75868/"
                alt="Medicare Part B 2026 Premium Structure"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <p className="text-xl text-gray-600 leading-relaxed">
                Medicare Part B covers medically necessary services and
                preventive services. For 2026, we've analyzed the projected
                adjustments in premiums, deductibles, and IRMAA (Income Related
                Monthly Adjustment Amount) surcharges to provide you with the
                most accurate financial roadmap.
              </p>
            </header>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Table className="text-blue-600" />
                2026 Monthly Premium Table (Projected)
              </h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Income Bracket (MAGI from 2024)
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Total Monthly Premium
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                        IRMAA Surcharge
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {rates2026.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-blue-50/30 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {row.range}
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-blue-600">
                          {row.premium}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {row.irmaa}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-gray-400 italic">
                *Note: 2026 premiums are based on 2024 Modified Adjusted Gross
                Income (MAGI) as reported on your tax return.
              </p>
            </section>

            <section className="space-y-8">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
                <div className="flex gap-4">
                  <Info className="text-blue-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">
                      Standard Deductible for 2026
                    </h3>
                    <p className="text-blue-800">
                      The projected standard deductible for all Medicare Part B
                      beneficiaries in 2026 is <strong>$257.00</strong>. This is
                      the amount you must pay out-of-pocket before Medicare
                      starts to pay its share for covered services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="prose prose-blue max-w-none">
                <h3 className="text-2xl font-bold text-gray-900">
                  What Does Part B Cover?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Navicostus Medical Discovery highlights two primary categories
                  for Part B coverage in 2026:
                </p>
                <ul className="grid md:grid-cols-2 gap-4 mt-4 list-none p-0">
                  <li className="flex gap-2 items-start bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span className="text-gray-700 font-medium">
                      Medically Necessary Services: Services or supplies that
                      are needed to diagnose or treat your medical condition.
                    </span>
                  </li>
                  <li className="flex gap-2 items-start bg-gray-50 p-4 rounded-lg">
                    <CheckCircle2
                      className="text-green-500 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span className="text-gray-700 font-medium">
                      Preventive Services: Health care to prevent illness (like
                      the flu) or detect it at an early stage.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
                <div className="flex gap-4">
                  <AlertTriangle
                    className="text-yellow-600 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="text-lg font-bold text-yellow-900 mb-2">
                      The Late Enrollment Penalty
                    </h3>
                    <p className="text-yellow-800">
                      If you don't sign up for Part B when you're first
                      eligible, you may have to pay a late enrollment penalty
                      for as long as you have Medicare. Your monthly premium may
                      go up 10% for each full 12-month period that you could
                      have had Part B but didn't sign up.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Stealth Ad 3 - In-Content */}
            <div className="hidden my-12 py-8 border-y border-gray-100 flex flex-col items-center">
              <div className="w-full h-[250px] bg-gray-50"></div>
            </div>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Discovery Checklist for 2026
              </h3>
              <div className="space-y-4">
                {[
                  "Review your 2024 tax return for MAGI assessment.",
                  "Compare Part B vs. Medicare Advantage for specialty services.",
                  'Verify if you qualify for any "Help with Costs" (Extra Help) programs.',
                  "Check for updated 2026 preventive service inclusions.",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-400 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <span className="text-gray-700">{item}</span>
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
                Related Discovery
              </h3>
              <ul className="space-y-4">
                <li>
                  <a href="/social-security-cola-2026" className="group block">
                    <span className="text-sm font-bold text-blue-600 group-hover:underline">
                      Social Security COLA 2026
                    </span>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      How the 2026 adjustment interacts with your Part B premium
                      deductions.
                    </p>
                  </a>
                </li>
                <li>
                  <a href="/medicare-advantage-2026" className="group block">
                    <span className="text-sm font-bold text-blue-600 group-hover:underline">
                      Medicare Advantage Shifts
                    </span>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      The rise of $0 premium plans and what to watch out for in
                      2026.
                    </p>
                  </a>
                </li>
                <li>
                  <a
                    href="/prescription-drug-coverage-2026"
                    className="group block"
                  >
                    <span className="text-sm font-bold text-blue-600 group-hover:underline">
                      Prescription Drug Changes
                    </span>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      New out-of-pocket caps for Part D medications in the
                      upcoming year.
                    </p>
                  </a>
                </li>
              </ul>
            </div>

            {/* Stealth Ad 5 - Right Sidebar Middle */}
            <div className="hidden w-full h-[600px] bg-gray-100"></div>

            <div className="bg-blue-600 rounded-2xl p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-4">Need Help?</h3>
              <p className="text-blue-100 text-sm mb-6">
                Connect with our discovery experts for a personalized 2026
                guide.
              </p>
              <a
                href="/contact"
                className="block w-full py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors"
              >
                Contact Discovery Team
              </a>
            </div>
          </aside>
        </div>

        {/* Stealth Ad 6 - Bottom */}
        <div className="hidden mt-16 flex justify-center">
          <div className="w-[728px] h-[90px] bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}
