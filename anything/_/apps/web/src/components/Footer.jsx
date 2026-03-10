import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              About Navicostus
            </h3>
            <p className="mt-4 text-base text-gray-500">
              Navicostus is the premier educational wiki for navigating the
              complexities of Medicare and Social Security in 2026. We provide
              up-to-date rates, detailed guides, and expert discovery to help
              you make informed decisions about your medical coverage and
              retirement benefits.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="/"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/medicare-part-b"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Medicare Part B Guide
                </a>
              </li>
              <li>
                <a
                  href="/medicare-advantage-2026"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Medicare Advantage 2026
                </a>
              </li>
              <li>
                <a
                  href="/prescription-drug-coverage-2026"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Part D Drug Coverage
                </a>
              </li>
              <li>
                <a
                  href="/social-security-cola-2026"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Social Security COLA
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              About & Legal
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="/about"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  About Sameer
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Navicostus. All rights reserved.
          </p>
          <p className="mt-4 text-sm text-gray-500 text-center italic">
            Disclaimer: Navicostus is an independent educational resource and is
            not affiliated with any government agency. Information provided is
            for discovery purposes and does not constitute official legal or
            medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
