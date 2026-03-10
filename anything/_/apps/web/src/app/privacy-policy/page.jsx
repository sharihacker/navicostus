import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Stealth Ad 1 - Top */}
      <div className="hidden bg-gray-100 flex items-center justify-center py-4 border-b border-gray-200">
        <div className="w-[728px] h-[90px] bg-gray-200"></div>
      </div>

      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">
            Privacy Policy
          </h1>

          {/* Stealth Ad 2 - In-Content Top */}
          <div className="hidden my-8 flex justify-center">
            <div className="w-[728px] h-[90px] bg-gray-100"></div>
          </div>

          <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
            <p>Last Updated: March 10, 2026</p>

            <p>
              At Navicostus, accessible from our website, one of our main
              priorities is the privacy of our visitors. This Privacy Policy
              document contains types of information that is collected and
              recorded by Navicostus and how we use it.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-4">Log Files</h2>
            <p>
              Navicostus follows a standard procedure of using log files. These
              files log visitors when they visit websites. All hosting companies
              do this and a part of hosting services' analytics. The information
              collected by log files include internet protocol (IP) addresses,
              browser type, Internet Service Provider (ISP), date and time
              stamp, referring/exit pages, and possibly the number of clicks.
              These are not linked to any information that is personally
              identifiable. The purpose of the information is for analyzing
              trends, administering the site, tracking users' movement on the
              website, and gathering demographic information.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-4">
              Cookies and Web Beacons
            </h2>
            <p>
              Like any other website, Navicostus uses 'cookies'. These cookies
              are used to store information including visitors' preferences, and
              the pages on the website that the visitor accessed or visited. The
              information is used to optimize the users' experience by
              customizing our web page content based on visitors' browser type
              and/or other information.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-4">
              Google DoubleClick DART Cookie
            </h2>
            <p>
              Google is one of a third-party vendor on our site. It also uses
              cookies, known as DART cookies, to serve ads to our site visitors
              based upon their visit to our site and other sites on the
              internet. However, visitors may choose to decline the use of DART
              cookies by visiting the Google ad and content network Privacy
              Policy at the following URL –{" "}
              <a
                href="https://policies.google.com/technologies/ads"
                className="text-blue-600 hover:underline"
              >
                https://policies.google.com/technologies/ads
              </a>
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-4">
              Advertising Partners Privacy Policies
            </h2>
            <p>
              You may consult this list to find the Privacy Policy for each of
              the advertising partners of Navicostus. Third-party ad servers or
              ad networks uses technologies like cookies, JavaScript, or Web
              Beacons that are used in their respective advertisements and links
              that appear on Navicostus, which are sent directly to users'
              browser. They automatically receive your IP address when this
              occurs. These technologies are used to measure the effectiveness
              of their advertising campaigns and/or to personalize the
              advertising content that you see on websites that you visit.
            </p>
            <p>
              Note that Navicostus has no access to or control over these
              cookies that are used by third-party advertisers.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-4">
              Third Party Privacy Policies
            </h2>
            <p>
              Navicostus's Privacy Policy does not apply to other advertisers or
              websites. Thus, we are advising you to consult the respective
              Privacy Policies of these third-party ad servers for more detailed
              information. It may include their practices and instructions about
              how to opt-out of certain options.
            </p>

            <h2 className="text-xl font-bold text-gray-900 pt-4">
              Children's Information
            </h2>
            <p>
              Another part of our priority is adding protection for children
              while using the internet. We encourage parents and guardians to
              observe, participate in, and/or monitor and guide their online
              activity.
            </p>
            <p>
              Navicostus does not knowingly collect any Personal Identifiable
              Information from children under the age of 13. If you think that
              your child provided this kind of information on our website, we
              strongly encourage you to contact us immediately and we will do
              our best efforts to promptly remove such information from our
              records.
            </p>

            {/* Stealth Ad 3 - In-Content Middle */}
            <div className="hidden my-8 flex justify-center">
              <div className="w-[300px] h-[250px] bg-gray-50"></div>
            </div>

            <h2 className="text-xl font-bold text-gray-900 pt-4">Consent</h2>
            <p>
              By using our website, you hereby consent to our Privacy Policy and
              agree to its Terms and Conditions.
            </p>
          </div>

          {/* Stealth Ad 4 & 5 */}
          <div className="hidden my-8 flex justify-center">
            <div className="w-[728px] h-[90px] bg-gray-50"></div>
          </div>
          <div className="hidden my-8 flex justify-center">
            <div className="w-[300px] h-[600px] bg-gray-50"></div>
          </div>
        </div>
      </div>

      {/* Related Articles Section */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Explore Our Medicare Guides
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <a href="/medicare-part-b" className="group">
              <div className="bg-white border border-gray-200 p-6 rounded-xl hover:border-blue-400 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  Part B Premiums
                </h3>
                <p className="text-sm text-gray-600">
                  2026 premium rates and deductibles.
                </p>
              </div>
            </a>
            <a href="/medicare-advantage-2026" className="group">
              <div className="bg-white border border-gray-200 p-6 rounded-xl hover:border-blue-400 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  Medicare Advantage
                </h3>
                <p className="text-sm text-gray-600">
                  Compare plan options for 2026.
                </p>
              </div>
            </a>
            <a href="/prescription-drug-coverage-2026" className="group">
              <div className="bg-white border border-gray-200 p-6 rounded-xl hover:border-blue-400 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  Part D Coverage
                </h3>
                <p className="text-sm text-gray-600">
                  New drug cost cap details.
                </p>
              </div>
            </a>
            <a href="/social-security-cola-2026" className="group">
              <div className="bg-white border border-gray-200 p-6 rounded-xl hover:border-blue-400 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  COLA Increase
                </h3>
                <p className="text-sm text-gray-600">
                  Social Security adjustments.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Stealth Ad 6 - Bottom */}
      <div className="hidden bg-white py-8 flex justify-center">
        <div className="w-[728px] h-[90px] bg-gray-100"></div>
      </div>
    </div>
  );
}
