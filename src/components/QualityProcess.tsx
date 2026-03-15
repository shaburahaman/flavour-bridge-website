import { CheckCircle, Truck, Package, Shield, Users, Leaf } from 'lucide-react';

const QualityProcess = () => {
  const processSteps = [
    {
      step: "01",
      title: "Direct Farmer Sourcing",
      description: "We source directly from certified farmers across India, ensuring fair prices and premium quality raw materials.",
      icon: Users,
      image: "https://khetavya.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6ODQsInB1ciI6ImJsb2JfaWQifX0=--43a3933012abc33181c25dbcd4239b072a69db0d/direct-crop-sourcing-india.webp"
    },
    {
      step: "02",
      title: "30+ Quality Checks",
      description: "Every batch undergoes rigorous testing for purity, moisture content, color, aroma, and contamination.",
      icon: CheckCircle,
      image: "https://agtech.folio3.com/wp-content/uploads/2023/06/best-practices-for-quality-assurance-in-seed-production.webp"
    },
    {
      step: "03",
      title: "Traditional Processing",
      description: "Using time-tested methods combined with modern technology to preserve authentic flavors and nutrients.",
      icon: Leaf,
      image: "https://lotuslab.org.in/assets/images/services/food-testing/spices-test-one.jpg"
    },
    {
      step: "04",
      title: "Hygienic Packaging",
      description: "Sealed in food-grade packaging in sterile conditions to maintain freshness and extend shelf life.",
      icon: Package,
      image: "https://accuz.com/wp-content/uploads/2020/12/Smart-Packing-Benefits-for-Hygiene-Products.jpg"
    },
    {
      step: "05",
      title: "Quality Certification",
      description: "Final inspection and certification ensuring compliance with international food safety standards.",
      icon: Shield,
      image: "https://www.eraglobal.co.in/wp-content/uploads/2025/05/FSSAI-Certification.png"
    },
    {
      step: "06",
      title: "Global Delivery",
      description: "Shipped through trusted partners - Delhivery, BlueDart, India Post to ensure safe and timely delivery.",
      icon: Truck,
      image: "https://gleeimpex.com/blog/wp-content/uploads/2025/12/3-1-1024x576.png"
    }
  ];

  const certifications = [
    { name: "ISO 22000:2018", desc: "Food Safety Management" },
    { name: "HACCP Certified", desc: "Hazard Analysis Critical Control" },
    { name: "FSSAI Licensed", desc: "Food Safety Standards Authority" },
    { name: "Organic Certified", desc: "Certified Organic Products" },
    { name: "Spices Board India", desc: "Government Certification" },
    { name: "Export License", desc: "Authorized Exporter" }
  ];

  const shippingPartners = [
    { name: "Delhivery", logo: "🚚" },
    { name: "BlueDart", logo: "📦" },
    { name: "India Post", logo: "📮" },
    { name: "DHL Express", logo: "✈️" }
  ];

  return (
    <section id="quality" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            From Farm to Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive quality process ensures that every product reaches you with 
            maximum freshness, purity, and authentic flavor through 30+ quality checks.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-16 mb-20">
          {processSteps.map((process, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-4">
                  <span className="bg-orange-600 text-white text-xl font-bold px-4 py-2 rounded-full mr-4">
                    {process.step}
                  </span>
                  <div className="bg-orange-100 p-3 rounded-full">
                    <process.icon className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{process.description}</p>
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <img 
                  src={process.image} 
                  alt={process.title}
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Partners */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Certifications</h3>
            <div className="mb-6 p-4 bg-orange-50 rounded-lg">
              <h4 className="font-bold text-orange-800 mb-2">Government Certifications:</h4>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• IEC Code: AALFF1019K</li>
                <li>• GST Registration: 37AALFF1019K1ZD</li>
                <li>• UDYAM Registration: UDYAM-AP-04-0128739</li>
                <li>• LLP Incorporation Certificate</li>
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900">{cert.name}</div>
                    <div className="text-sm text-gray-600">{cert.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Partners */}
          <div className="bg-orange-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Shipping Partners</h3>
            <p className="text-gray-600 mb-6">
              We partner with India's most trusted logistics companies to ensure 
              your spices reach you safely and on time.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {shippingPartners.map((partner, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow text-center">
                  <div className="text-3xl mb-2">{partner.logo}</div>
                  <div className="font-semibold text-gray-900">{partner.name}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Delivery Features:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Real-time tracking</li>
                <li>• Temperature-controlled transport</li>
                <li>• Secure packaging</li>
                <li>• Insurance coverage</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityProcess;