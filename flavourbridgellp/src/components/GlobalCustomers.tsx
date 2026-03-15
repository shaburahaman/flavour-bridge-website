import { Star, MapPin, Users, Globe } from 'lucide-react';

const GlobalCustomers = () => {
  const customerStats = [
    { country: "United States", customers: 245, flag: "🇺🇸" },
    { country: "United Kingdom", customers: 189, flag: "🇬🇧" },
    { country: "Canada", customers: 156, flag: "🇨🇦" },
    { country: "Australia", customers: 134, flag: "🇦🇺" },
    { country: "Germany", customers: 98, flag: "🇩🇪" },
    { country: "UAE", customers: 87, flag: "🇦🇪" },
    { country: "Singapore", customers: 76, flag: "🇸🇬" },
    { country: "France", customers: 65, flag: "🇫🇷" }
  ];

  const testimonials = [
    {
      name: "Chandu",
      country: "United States",
      flag: "🇺🇸",
      rating: 5,
      review: "The quality of spices from Flavour Bridge is exceptional! The red chili powder has the perfect heat and color. I've been ordering for 2 years now.",
      product: "Red Chili Powder"
    },
    {
      name: "Driti",
      country: "United Kingdom",
      flag: "🇬🇧",
      rating: 5,
      review: "Authentic Indian spices delivered to my doorstep in London. The turmeric powder is so pure and fresh. Highly recommend for Indian cooking enthusiasts.",
      product: "Turmeric Powder"
    },
    {
      name: "Prabhu Raj",
      country: "Canada",
      flag: "🇨🇦",
      rating: 5,
      review: "Fast delivery and excellent packaging. The cardamom pods are aromatic and fresh. Great customer service and quality products.",
      product: "Cardamom Pods"
    },
    {
      name: "Nazima",
      country: "UAE",
      flag: "🇦🇪",
      rating: 5,
      review: "Best spice supplier I've found! The garam masala blend is perfect for our restaurant. Consistent quality and reliable delivery every time.",
      product: "Garam Masala"
    },
    {
      name: "Vimal Vamsi",
      country: "Australia",
      flag: "🇦🇺",
      rating: 5,
      review: "Amazing quality spices! The cumin seeds are so aromatic. Love that they source directly from farmers. Will definitely order again.",
      product: "Cumin Seeds"
    },
    {
      name: "Rossi",
      country: "Germany",
      flag: "🇩🇪",
      rating: 5,
      review: "Excellent service and premium quality spices. The black pepper is incredibly fresh and pungent. Perfect for our European kitchen.",
      product: "Black Pepper"
    }
  ];

  return (
    <section id="customers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Global Family
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by 1000+ customers across 50+ countries. See what our 
            international customers say about our premium Indian spices.
          </p>
        </div>

        {/* World Map Representation */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Customers Worldwide
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {customerStats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-yellow-50 p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">{stat.flag}</div>
                <h4 className="font-semibold text-gray-900">{stat.country}</h4>
                <div className="text-2xl font-bold text-orange-600">{stat.customers}</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            ))}
          </div>

          <div className="text-center bg-orange-600 text-white p-6 rounded-xl">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-orange-100">Total Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-orange-100">Countries Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold">4.9</div>
                <div className="text-orange-100">Average Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Our Customers Say
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">{testimonial.flag}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.country}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-3 italic">"{testimonial.review}"</p>
                
                <div className="bg-orange-50 p-2 rounded text-sm">
                  <span className="text-orange-600 font-medium">Product: {testimonial.product}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <Users className="w-12 h-12 text-orange-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">1000+</div>
              <div className="text-gray-600">Satisfied Customers</div>
            </div>
            <div>
              <Globe className="w-12 h-12 text-orange-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">50+</div>
              <div className="text-gray-600">Countries Reached</div>
            </div>
            <div>
              <Star className="w-12 h-12 text-orange-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">4.9/5</div>
              <div className="text-gray-600">Customer Rating</div>
            </div>
            <div>
              <MapPin className="w-12 h-12 text-orange-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">6</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalCustomers;