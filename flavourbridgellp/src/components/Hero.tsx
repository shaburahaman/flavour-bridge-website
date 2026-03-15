import { ArrowRight, Star, Truck, Shield, Users, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-orange-50 to-yellow-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-gray-600">Trusted by 1000+ Global Customers</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Premium Indian Products
              <span className="text-orange-600 block">Direct from Farmers</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We connect authentic Indian products directly from farmers to our customers. 
              After 30+ quality checks, we deliver the finest products to 50+ countries 
              with guaranteed freshness and purity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#products" className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center">
                View Our Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#journey" className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors">
                Our Story
              </a>
            </div>
            
            <div className="grid grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">30+ Quality Checks</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Truck className="w-6 h-6 text-orange-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">Global Shipping</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">1000+ Customers</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Globe className="w-6 h-6 text-orange-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">50+ Countries</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://www.icapsulepack.com/wp-content/uploads/2022/11/Spice-Packaging-1.jpg" 
                alt="Indian Products Collection" 
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-900">Farm Fresh Products</h3>
                <p className="text-gray-600 mt-2">Direct from Indian farmers to your business</p>
              </div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 transform -rotate-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-600">6</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 transform rotate-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-600">100%</p>
                <p className="text-sm text-gray-600">Pure & Natural</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;