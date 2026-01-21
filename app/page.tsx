import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#EBC7C0]">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-gradient-to-b from-pink-50 to-[#EBC7C0]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-6 tracking-tight">
            Beautiful Nails,
            <br />
            <span className="text-primary">Beautiful You</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience premium nail care and artistry that brings out your
            natural beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#book"
              className="inline-block px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-hover transition-colors text-lg font-medium"
            >
              Book Now
            </Link>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-white text-primary border-2 border-primary rounded-full hover:bg-pink-50 transition-colors text-lg font-medium"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-pink-50/50 rounded-3xl p-8 sm:p-12 shadow-sm">
            <h2 className="text-4xl font-light text-gray-900 mb-6 text-center">
              About Us
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                Welcome to Chupey Nails, where artistry meets excellence. We
                specialize in creating stunning nail designs that reflect your
                unique style and personality.
              </p>
              <p>
                Our team of skilled professionals is dedicated to providing you
                with the highest quality nail care services in a relaxing and
                welcoming environment.
              </p>
              <p>
                Whether you're looking for a classic manicure, intricate nail
                art, or a luxurious spa experience, we're here to make you feel
                beautiful and confident.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        className="px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">
            Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Short Almond",
                tag: "Subtle Nude",
              },
              {
                name: "French Tip",
                tag: "Classic Look",
              },
              {
                name: "Chrome Set",
                tag: "Shiny Silver",
              },
              {
                name: "Coffin Shape",
                tag: "Pink Ombre",
              },
              {
                name: "Stiletto Art",
                tag: "Bold Design",
              },
              {
                name: "Pastel Dreams",
                tag: "Spring Set",
              },
            ].map((item, idx) => (
              <div
                key={item.name + idx}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden"
              >
                {/* Image Skeleton Placeholder */}
                <div className="w-full aspect-square bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                  <div className="w-4/5 h-4/5 bg-gray-200 rounded-xl animate-pulse" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <span className="text-lg font-medium text-gray-900 mb-2">
                    {item.name}
                  </span>
                  <span className="inline-block px-3 py-1 bg-pink-100 text-primary text-xs rounded-full w-max font-medium">
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-hover transition-colors text-lg font-medium"
            >
              View more on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section
        id="book"
        className="px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 sm:p-12 shadow-sm">
            <h2 className="text-4xl font-light text-gray-900 mb-6 text-center">
              Book Your Appointment
            </h2>
            <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
              Ready to experience the Chupey Nails difference? Book your
              appointment today and let us pamper you with our premium services.
            </p>
            <div className="space-y-4 max-w-md mx-auto">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  Classic Manicure
                </h3>
                <p className="text-gray-600 mb-4">$35</p>
                <button className="w-full px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-hover transition-colors">
                  Book Now
                </button>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  Gel Manicure
                </h3>
                <p className="text-gray-600 mb-4">$45</p>
                <button className="w-full px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-hover transition-colors">
                  Book Now
                </button>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  Nail Art Design
                </h3>
                <p className="text-gray-600 mb-4">Starting at $60</p>
                <button className="w-full px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-hover transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm">
            <h2 className="text-4xl font-light text-gray-900 mb-6 text-center">
              Contact Us
            </h2>
            <div className="space-y-6 text-center">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  Get in Touch
                </h3>
                <p className="text-gray-600 mb-4">
                  Have questions or want to learn more about our services? We'd
                  love to hear from you.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <a
                  href="mailto:hello@chupeynails.com"
                  className="text-primary hover:text-primary-hover transition-colors"
                >
                  hello@chupeynails.com
                </a>
                <span className="text-gray-300 hidden sm:inline">•</span>
                <a
                  href="tel:+1234567890"
                  className="text-primary hover:text-primary-hover transition-colors"
                >
                  (123) 456-7890
                </a>
              </div>
              <div className="pt-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-hover transition-colors text-lg font-medium"
                >
                  Follow on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
