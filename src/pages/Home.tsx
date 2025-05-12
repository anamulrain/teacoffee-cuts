import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Coffee, Users, Calendar, ArrowRight } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import MenuPreview from '../components/MenuPreview';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Salon interior with coffee station"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brown-900 bg-opacity-60"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream-50 mb-6 leading-tight">
            Style & Sip at<br />
            <span className="text-accent-400">Tea, Coffee & Cuts</span>
          </h1>
          <p className="text-xl md:text-2xl text-cream-100 mb-8 max-w-3xl mx-auto">
            A unique unisex salon experience where premium haircuts meet exceptional coffee.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/booking"
              className="bg-accent-500 hover:bg-accent-600 text-brown-900 font-medium px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Book Appointment
            </Link>
            <Link
              to="/menu"
              className="bg-transparent border-2 border-cream-100 text-cream-50 hover:bg-cream-100 hover:text-brown-900 font-medium px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 text-lg"
            >
              View Coffee Menu
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src="https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Stylish salon interior"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-brown-800 mb-6">
                Where Style Meets <span className="text-accent-600">Relaxation</span>
              </h2>
              <p className="text-brown-700 mb-6 text-lg">
                Tea, Coffee & Cuts is a revolutionary concept that combines a premium unisex hair salon with an artisanal coffee shop. We believe that looking good and feeling good go hand in hand.
              </p>
              <p className="text-brown-700 mb-8 text-lg">
                Our skilled stylists deliver exceptional cuts and styles while you enjoy premium coffee, specialty teas, and delicious treats in a relaxing, stylish environment.
              </p>
              <div className="flex flex-wrap gap-8 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brown-100 flex items-center justify-center text-accent-600">
                    <Scissors className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown-800">Expert Stylists</h3>
                    <p className="text-brown-600">Trained professionals</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brown-100 flex items-center justify-center text-accent-600">
                    <Coffee className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown-800">Artisanal Coffee</h3>
                    <p className="text-brown-600">Premium brews</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brown-100 flex items-center justify-center text-accent-600">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown-800">Unisex Salon</h3>
                    <p className="text-brown-600">For everyone</p>
                  </div>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-medium transition-colors"
              >
                Discover our story
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-brown-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brown-800 mb-4">Our Premium Services</h2>
            <p className="text-brown-600 max-w-2xl mx-auto text-lg">
              Indulge in our full range of salon services while enjoying your favorite beverage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Haircuts & Styling"
              description="Expert cuts and styling for all hair types and preferences, tailored to enhance your unique features."
              icon={<Scissors className="h-7 w-7" />}
              imageUrl="https://images.pexels.com/photos/3993445/pexels-photo-3993445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <ServiceCard 
              title="Color & Highlights"
              description="From subtle highlights to bold fashion colors, our colorists create stunning, dimensional results."
              icon={<Scissors className="h-7 w-7" />}
              imageUrl="https://images.pexels.com/photos/3993310/pexels-photo-3993310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <ServiceCard 
              title="Coffee Experience"
              description="Enjoy premium coffee, specialty teas, and delicious treats while you wait or during your service."
              icon={<Coffee className="h-7 w-7" />}
              imageUrl="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-brown-800 hover:bg-brown-900 text-cream-50 font-medium px-6 py-3 rounded-md transition-all duration-300"
            >
              View All Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-20 bg-cream-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brown-800 mb-4">Coffee & Tea Menu</h2>
            <p className="text-brown-600 max-w-2xl mx-auto text-lg">
              Crafted with care, our menu features premium coffee, artisanal teas, and delicious treats
            </p>
          </div>

          <MenuPreview />

          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 bg-brown-800 hover:bg-brown-900 text-cream-50 font-medium px-6 py-3 rounded-md transition-all duration-300"
            >
              View Full Menu
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-brown-900 text-cream-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/7697349/pexels-photo-7697349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Salon background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a New Look?</h2>
            <p className="text-xl text-cream-200 mb-8">
              Book your appointment today and experience the perfect blend of style and relaxation
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-brown-900 font-medium px-8 py-4 rounded-md transition-all duration-300 text-lg transform hover:scale-105"
            >
              Book Now
              <Calendar className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brown-800 mb-4">What Our Clients Say</h2>
            <p className="text-brown-600 max-w-2xl mx-auto text-lg">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="The best salon experience I've ever had! Great haircut and amazing coffee while I waited."
              author="Sarah Johnson"
              role="Regular Client"
              imageUrl="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <TestimonialCard 
              quote="Love the concept! My stylist was fantastic and the coffee was the perfect touch to make the experience special."
              author="James Wilson"
              role="First-time Visitor"
              imageUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <TestimonialCard 
              quote="I originally came for the coffee but stayed for the amazing haircuts. Now I won't go anywhere else!"
              author="Emily Rodriguez"
              role="Loyal Customer"
              imageUrl="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;