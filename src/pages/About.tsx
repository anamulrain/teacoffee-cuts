import React from 'react';
import { Users, Award, Coffee, Scissors, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "Founder & Master Stylist",
      bio: "With over 15 years of experience, Alex brings creativity and precision to every cut.",
      imageUrl: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Jamie Chen",
      role: "Color Specialist",
      bio: "Jamie is known for creating stunning, natural-looking color transformations.",
      imageUrl: "https://images.pexels.com/photos/3760858/pexels-photo-3760858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Sam Taylor",
      role: "Master Barista",
      bio: "Sam's passion for coffee is evident in every carefully crafted cup served.",
      imageUrl: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Morgan Wilson",
      role: "Stylist & Barber",
      bio: "Morgan specializes in both men's and women's cuts with an eye for modern trends.",
      imageUrl: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/331107/pexels-photo-331107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="About us hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brown-900 bg-opacity-70"></div>
        </div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-cream-50 mb-6">About Us</h1>
            <p className="text-xl text-cream-200 mb-8 max-w-xl">
              Discover the story behind Tea, Coffee & Cuts and our unique vision
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-brown-800 mb-6">Our Story</h2>
              <p className="text-brown-700 mb-6 text-lg">
                Tea, Coffee & Cuts began with a simple idea: what if getting a haircut could be more than just a necessity—what if it could be an experience to look forward to?
              </p>
              <p className="text-brown-700 mb-6 text-lg">
                Founded in 2020 by master stylist Alex Rodriguez, our salon was created to combine two passions: exceptional hairstyling and premium coffee. After years of working in traditional salons, Alex noticed that clients often arrived stressed and left in a rush.
              </p>
              <p className="text-brown-700 text-lg">
                The concept of Tea, Coffee & Cuts was born—a space where clients could relax with an artisanal beverage, enjoy their styling service, and leave feeling both refreshed and rejuvenated. Today, we're proud to offer a unique experience that addresses both outer style and inner comfort.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Our salon interior"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-brown-800 mb-10 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-8 text-center transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 mx-auto mb-6">
                  <Scissors className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-brown-800 mb-4">Exceptional Quality</h3>
                <p className="text-brown-600">
                  We never compromise on quality, whether it's a haircut, color service, or cup of coffee. Our team is trained to deliver excellence in everything they do.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-8 text-center transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 mx-auto mb-6">
                  <Coffee className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-brown-800 mb-4">Complete Experience</h3>
                <p className="text-brown-600">
                  We believe that a great haircut deserves to be paired with a great beverage and excellent atmosphere. Every detail matters in creating a memorable visit.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-8 text-center transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 mx-auto mb-6">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-brown-800 mb-4">Inclusivity</h3>
                <p className="text-brown-600">
                  Our salon welcomes everyone. We believe in creating a space where all clients feel comfortable, respected, and valued regardless of gender, age, or style preferences.
                </p>
              </div>
            </div>
          </div>

          {/* Meet the Team */}
          <div>
            <h2 className="text-3xl font-bold text-brown-800 mb-10 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brown-800 mb-1">{member.name}</h3>
                    <p className="text-accent-600 mb-3">{member.role}</p>
                    <p className="text-brown-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-brown-900 text-cream-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Award className="h-12 w-12 text-accent-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-6">Awards & Recognition</h2>
            <p className="text-cream-200 max-w-2xl mx-auto text-lg">
              We're proud to be recognized for our commitment to excellence in both hairstyling and coffee
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brown-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-accent-400 mb-3">Best New Concept 2022</h3>
              <p className="text-cream-200">
                Awarded by City Style Magazine for our innovative salon-coffee shop concept
              </p>
            </div>
            <div className="bg-brown-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-accent-400 mb-3">Top 10 Coffee Shops 2023</h3>
              <p className="text-cream-200">
                Named one of the best specialty coffee destinations in the city
              </p>
            </div>
            <div className="bg-brown-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-accent-400 mb-3">Stylist Excellence Award</h3>
              <p className="text-cream-200">
                Our team has been recognized for technical excellence and creativity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brown-800 mb-6">Find Us</h2>
            <p className="text-brown-700 max-w-2xl mx-auto text-lg">
              Conveniently located in the heart of the Fashion District
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-8">
            <div className="lg:w-1/2">
              <div className="h-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941774136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1651271776856!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: '400px', borderRadius: '0.5rem' }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location map"
                  className="shadow-lg"
                ></iframe>
              </div>
            </div>
            <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-brown-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brown-800 mb-1">Address</h4>
                    <p className="text-brown-600">123 Style Avenue, Fashion District, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brown-800 mb-1">Phone</h4>
                    <p className="text-brown-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brown-800 mb-1">Email</h4>
                    <p className="text-brown-600">hello@teacoffeecuts.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-brown-100">
                <h4 className="font-semibold text-brown-800 mb-3">Hours of Operation</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-brown-700">Monday - Friday</span>
                    <span className="text-brown-700">8am - 8pm</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-brown-700">Saturday</span>
                    <span className="text-brown-700">9am - 7pm</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-brown-700">Sunday</span>
                    <span className="text-brown-700">10am - 6pm</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-block bg-accent-500 hover:bg-accent-600 text-brown-900 font-medium px-6 py-3 rounded-md transition-colors duration-300 w-full text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;