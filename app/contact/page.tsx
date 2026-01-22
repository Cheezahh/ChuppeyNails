import Link from "next/link";

export default function Contact() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gradient-to-b from-pink-50 to-[#EBC7C0] min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6">
          Contact
        </h1>
        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          Have questions about our services or want to book an appointment? 
          We&apos;d love to hear from you. Reach out through any of the channels below.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
              Email
            </h2>
            <a
              href="mailto:hello@chupeynails.com"
              className="text-lg text-primary hover:text-primary-hover transition-colors"
            >
              hello@chupeynails.com
            </a>
          </div>

          <div>
            <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
              Phone
            </h2>
            <a
              href="tel:+1234567890"
              className="text-lg text-primary hover:text-primary-hover transition-colors"
            >
              (123) 456-7890
            </a>
          </div>

          <div>
            <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
              Instagram
            </h2>
            <a
              href="https://www.instagram.com/chupey_nailzz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-primary hover:text-primary-hover transition-colors"
            >
              @chupey_nailzz
            </a>
          </div>
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
