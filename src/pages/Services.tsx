import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, TrendingUp, Paintbrush, Sparkles, Clock } from 'lucide-react';

const Services: React.FC = () => {
  const salonServices = [
    {
      title: "Haircuts & Styling",
      icon: <Scissors className="h-6 w-6" />,
      items: [
        { name: "Women's Haircut", price: "$45+", description: "Consultation, shampoo, cut and style" },
        { name: "Men's Haircut", price: "$35+", description: "Consultation, shampoo, cut and style" },
        { name: "Children's Haircut", price: "$25+", description: "For children 12 and under" },
        { name: "Blowout & Styling", price: "$40+", description: "Shampoo and professional styling" },
        { name: "Special Occasion Style", price: "$65+", description: "Formal styling for events" },
      ]
    },
    {
      title: "Color Services",
      icon: <Paintbrush className="h-6 w-6" />,
      items: [
        { name: "All-Over Color", price: "$75+", description: "Full head single process color" },
        { name: "Highlights/Lowlights", price: "$95+", description: "Partial or full head foiling" },
        { name: "Balayage/Ombre", price: "$120+", description: "Hand-painted color technique" },
        { name: "Color Correction", price: "$150+", description: "Corrective color services" },
        { name: "Gloss/Toner", price: "$35+", description: "Add shine or adjust tone" },
      ]
    },
    {
      title: "Treatments",
      icon: <Sparkles className="h-6 w-6" />,
      items: [
        { name: "Deep Conditioning", price: "$25+", description: "Intensive moisture treatment" },
        { name: "Scalp Treatment", price: "$35+", description: "Specialized care for scalp health" },
        { name: "Keratin Treatment", price: "$200+", description: "Smoothing and anti-frizz treatment" },
        { name: "Hair Mask", price: "$30+", description: "Nourishing hair mask" },
      ]
    },
    {
      title: "Additional Services",
      icon: <TrendingUp className="h-6 w-6" />,
      items: [
        { name: "Beard Trim", price: "$15+", description: "Shaping and trimming of facial hair" },
        { name: "Bang Trim", price: "$10+", description: "Maintenance trim between haircuts" },
        { name: "Extensions Consultation", price: "Free", description: "Discuss options for hair extensions" },
      ]
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Salon styling"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brown-900 bg-opacity-70"></div>
        </div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-cream-50 mb-6">Our Services</h1>
            <p className="text-xl text-cream-200 mb-8 max-w-xl">
              Exceptional salon services in a unique, relaxing environment where you can enjoy premium coffee while you wait.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {salonServices.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center text-accent-600">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-brown-800">{category.title}</h2>
                </div>
                
                <ul className="space-y-6">
                  {category.items.map((service, serviceIdx) => (
                    <li key={serviceIdx} className="border-b border-brown-100 pb-4 last:border-0">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold text-lg text-brown-700">{service.name}</h3>
                        <span className="font-medium text-accent-600">{service.price}</span>
                      </div>
                      <p className="text-brown-500">{service.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-brown-100 rounded-lg p-8 shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6 text-accent-600" />
                  <h3 className="text-2xl font-bold text-brown-800">Service Duration</h3>
                </div>
                <p className="text-brown-700 mb-4">
                  Service times vary depending on hair length, thickness, and the specific service. Please allow for the following approximate times:
                </p>
                <ul className="space-y-2 text-brown-700">
                  <li>• Haircuts: 30-60 minutes</li>
                  <li>• Color Services: 1-3 hours</li>
                  <li>• Treatments: 20-60 minutes</li>
                </ul>
              </div>
              <div>
                <Link
                  to="/booking"
                  className="inline-block bg-accent-500 hover:bg-accent-600 text-brown-900 font-medium px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-cream-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-brown-800 mb-6">The Perfect Combo</h2>
            <p className="text-lg text-brown-700">
              At Tea, Coffee & Cuts, we believe the salon experience should be enjoyable from start to finish. That's why we offer complimentary coffee, tea, or other beverages with every service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src="https://images.pexels.com/photos/4246112/pexels-photo-4246112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Consultation"
                className="w-full h-48 object-cover rounded mb-6"
              />
              <h3 className="text-xl font-bold text-brown-800 mb-3">Personalized Consultation</h3>
              <p className="text-brown-600">
                Every service begins with a thorough consultation to understand your goals and preferences.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src="https://images.pexels.com/photos/3019019/pexels-photo-3019019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Premium products"
                className="w-full h-48 object-cover rounded mb-6"
              />
              <h3 className="text-xl font-bold text-brown-800 mb-3">Premium Products</h3>
              <p className="text-brown-600">
                We use only high-quality, professional hair products for all our services.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Coffee experience"
                className="w-full h-48 object-cover rounded mb-6"
              />
              <h3 className="text-xl font-bold text-brown-800 mb-3">Coffee Experience</h3>
              <p className="text-brown-600">
                Enjoy a complimentary coffee or tea with every service, prepared by our skilled baristas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;