import Link from "next/link";

export default function Terms() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gradient-to-b from-pink-50 to-[#EBC7C0] min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500 mb-12">
          Last updated: January 2026
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              1. Services
            </h2>
            <p>
              Chupey Nails provides professional nail care services and sells press-on nail products. 
              By booking an appointment or purchasing products, you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              2. Appointments
            </h2>
            <p>
              Appointments are subject to availability. We kindly ask for at least 24 hours notice 
              for cancellations or rescheduling. Late arrivals may result in shortened service time 
              or rescheduling.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              3. Products
            </h2>
            <p>
              All press-on nail products are sold as-is. Due to the nature of our products, 
              we do not accept returns or exchanges unless the item arrives damaged. 
              Please contact us within 48 hours of receiving a damaged product.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              4. Payment
            </h2>
            <p>
              Payment is required at the time of service or purchase. We accept major credit cards 
              and digital payment methods. Prices are subject to change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              5. Liability
            </h2>
            <p>
              Chupey Nails is not responsible for any allergic reactions or damage resulting from 
              improper use of our products. Please review product instructions carefully and 
              perform a patch test if you have sensitive skin.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              6. Contact
            </h2>
            <p>
              If you have any questions about these terms, please contact us at{" "}
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
