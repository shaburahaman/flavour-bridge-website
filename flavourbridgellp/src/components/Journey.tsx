import { Users, Award, Heart, Target, Handshake, Leaf } from 'lucide-react';

const Journey = () => {
  const milestones = [
    {
      year: "2020",
      title: "Founded with a Vision",
      description: "Started our journey with a mission to connect authentic Indian spices to the world",
      icon: Target
    },
    {
      year: "2021",
      title: "First International Export",
      description: "Successfully exported our first shipment to UAE, marking our global expansion",
      icon: Award
    },
    {
      year: "2022",
      title: "Direct Farmer Partnerships",
      description: "Established direct relationships with 100+ farmers across India for quality sourcing",
      icon: Handshake
    },
    {
      year: "2022",
      title: "Quality Certification",
      description: "Achieved ISO 22000, HACCP, and organic certifications for international standards",
      icon: Leaf
    },
    {
      year: "2023",
      title: "1000+ Happy Customers",
      description: "Reached milestone of serving 1000+ customers across 50+ countries worldwide",
      icon: Users
    },
    {
      year: "2026",
      title: "Trusted Global Brand",
      description: "Today we are a trusted name in premium Indian spices with uncompromising quality",
      icon: Heart
    }
  ];

  const teamValues = [
    {
      title: "Quality First",
      description: "Every spice goes through 30+ quality checks before reaching you",
      icon: "🎯"
    },
    {
      title: "Farmer Partnership",
      description: "Direct relationships with farmers ensuring fair prices and quality",
      icon: "🤝"
    },
    {
      title: "Traditional Methods",
      description: "Preserving age-old processing techniques for authentic flavors",
      icon: "🏺"
    },
    {
      title: "Global Standards",
      description: "Meeting international food safety and quality standards",
      icon: "🌍"
    }
  ];

  return (
    <section id="journey" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Story */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a small family business to a trusted global brand, our journey has been 
            driven by passion for quality and commitment to authentic Indian flavors.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <milestone.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <span className="text-2xl font-bold text-orange-600">{milestone.year}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Flavour Bridge?</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {teamValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Team's Commitment</h4>
                <p className="text-gray-700 mb-4">
                  Our dedicated team of spice experts, quality controllers, and logistics professionals 
                  work tirelessly to ensure every package that leaves our facility meets the highest 
                  standards of quality and freshness.
                </p>
                <p className="text-gray-700">
                  From sourcing the finest spices directly from farmers to implementing rigorous 
                  quality checks, we are committed to delivering excellence in every grain.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg text-center shadow">
                  <div className="text-2xl font-bold text-orange-600">6</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center shadow">
                  <div className="text-2xl font-bold text-orange-600">50+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center shadow">
                  <div className="text-2xl font-bold text-orange-600">100+</div>
                  <div className="text-sm text-gray-600">Farmer Partners</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center shadow">
                  <div className="text-2xl font-bold text-orange-600">24/7</div>
                  <div className="text-sm text-gray-600">Customer Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;