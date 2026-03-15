import { Truck, Shield, FileText, Clock, CheckCircle, Globe } from 'lucide-react';

const ExportServices = () => {
  const services = [
    {
      icon: FileText,
      title: "Documentation Support",
      description: "Complete export documentation, certificates, and compliance assistance for hassle-free international trade."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality testing, HACCP compliance, and international food safety certifications."
    },
    {
      icon: Truck,
      title: "Global Logistics",
      description: "Reliable shipping partners, temperature-controlled transport, and real-time tracking worldwide."
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Quick order processing, efficient packaging, and timely delivery to meet your business needs."
    }
  ];

  const certifications = [
    "ISO 22000:2018",
    "HACCP Certified",
    "FSSAI Licensed",
    "Organic Certified",
    "Spices Board India",
    "FDA Approved"
  ];

  return (
    <section id="export" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Export Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We handle every aspect of spice export, from sourcing to delivery, 
            ensuring your business gets the best quality products with complete peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl p-8 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Ready to Start Exporting?</h3>
              <p className="text-lg mb-6 opacity-90">
                Join hundreds of satisfied clients who trust us for their spice export needs. 
                Get a custom quote for your requirements today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Quote
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                  Download Catalog
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Our Certifications</h4>
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExportServices;