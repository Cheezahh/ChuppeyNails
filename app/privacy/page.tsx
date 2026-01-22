import Link from "next/link";

export default function Privacy() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gradient-to-b from-pink-50 to-[#EBC7C0] min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-12">
          Last updated: January 2026
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Information We Collect
            </h2>
            <p>
              When you book an appointment or make a purchase, we may collect your name, 
              email address, phone number, and payment information. We only collect information 
              necessary to provide our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              How We Use Your Information
            </h2>
            <p>
              We use your information to process appointments and orders, communicate with you 
              about your bookings, and improve our services. We do not sell or share your 
              personal information with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Data Security
            </h2>
            <p>
              We take reasonable measures to protect your personal information from unauthorized 
              access, use, or disclosure. Payment information is processed securely through 
              trusted third-party payment processors.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Cookies
            </h2>
            <p>
              Our website may use cookies to enhance your browsing experience. You can choose 
              to disable cookies in your browser settings, though this may affect some 
              website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Your Rights
            </h2>
            <p>
              You have the right to access, correct, or delete your personal information. 
              To make a request, please contact us using the information below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Contact Us
            </h2>
            <p>
              If you have questions about this privacy policy or your personal data, 
              please contact us at{" "}
              <a
                href="mailto:hello@chupeynails.com"
                className="text-primary hover:text-primary-hover transition-colors"
              >
                hello@chupeynails.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-pink-200">
          <Link
            href="/"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
