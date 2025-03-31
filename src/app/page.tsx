import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Premium Car Parts for Every Vehicle
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Find the perfect parts for your car with our extensive collection
            </p>
            <Link href="/shop" className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-300">Popular Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Engine Parts */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Engine Parts</h3>
              <p className="text-gray-700 mb-4 flex-grow">High-quality engine components for optimal performance</p>
              <Link href="/categories/engine" className="text-orange-600 hover:text-orange-800">Browse Engine Parts →</Link>
            </div>

            {/* Brake System */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="text-4xl mb-4">🛑</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Brake System</h3>
              <p className="text-gray-700 mb-4 flex-grow">Premium brake pads, rotors, and brake accessories</p>
              <Link href="/categories/brakes" className="text-orange-600 hover:text-orange-800">Browse Brake Parts →</Link>
            </div>

            {/* Suspension */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="text-4xl mb-4">🔩</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Suspension</h3>
              <p className="text-gray-700 mb-4 flex-grow">Shocks, struts, and suspension components</p>
              <Link href="/categories/suspension" className="text-orange-600 hover:text-orange-800">Browse Suspension →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose Carioz</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl mb-4">✨</div>
              <h3 className="font-semibold mb-2 text-gray-900">Quality Guaranteed</h3>
              <p className="text-gray-700">All parts meet or exceed OEM specifications</p>
            </div>
            <div>
              <div className="text-3xl mb-4">🚚</div>
              <h3 className="font-semibold mb-2 text-gray-900">Fast Shipping</h3>
              <p className="text-gray-700">Quick delivery to your doorstep</p>
            </div>
            <div>
              <div className="text-3xl mb-4">💰</div>
              <h3 className="font-semibold mb-2 text-gray-900">Best Prices</h3>
              <p className="text-gray-700">Competitive prices on all products</p>
            </div>
            <div>
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-semibold mb-2 text-gray-900">Expert Support</h3>
              <p className="text-gray-700">Professional assistance when you need it</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
