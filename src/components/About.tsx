import { Award, Users, Globe, Leaf } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Globe, value: "50+", label: "Countries Served" },
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "6", label: "Years Experience" },
    { icon: Leaf, value: "100%", label: "Organic Products" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Connecting India's Authentic Flavours to the World
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              For over 25 years, Flavour Bridge has been the trusted partner for businesses 
              and individuals seeking authentic Indian spices. We work directly with farmers 
              across India to bring you the finest quality spices, maintaining traditional 
              processing methods while meeting international standards.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to quality, sustainability, and fair trade practices has made 
              us a preferred choice for importers, restaurants, and spice enthusiasts worldwide. 
              Every spice tells a story of heritage, tradition, and uncompromising quality.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/4198022/pexels-photo-4198022.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Spice Farm" 
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Farm to Global</h3>
              <p className="text-lg">Direct sourcing from Indian farms</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;