import React from 'react';
import { Coffee, Leaf, Utensils } from 'lucide-react';

const Menu: React.FC = () => {
  const menuCategories = [
    {
      category: "Coffee",
      icon: <Coffee className="h-6 w-6" />,
      items: [
        { name: "Espresso", price: "$3.50", description: "Rich and full-bodied single shot" },
        { name: "Doppio", price: "$4.25", description: "Double shot of espresso" },
        { name: "Americano", price: "$4.00", description: "Espresso with hot water" },
        { name: "Cappuccino", price: "$4.50", description: "Espresso with equal parts steamed milk and foam" },
        { name: "Latte", price: "$4.75", description: "Espresso with a lot of steamed milk and little foam" },
        { name: "Flat White", price: "$4.50", description: "Espresso with microfoam" },
        { name: "Mocha", price: "$5.25", description: "Espresso with chocolate and steamed milk" },
        { name: "Macchiato", price: "$4.25", description: "Espresso with a small amount of milk" },
        { name: "Cold Brew", price: "$4.75", description: "Slow-steeped coffee served cold" },
        { name: "Affogato", price: "$5.50", description: "Espresso poured over vanilla ice cream" },
      ]
    },
    {
      category: "Tea",
      icon: <Leaf className="h-6 w-6" />,
      items: [
        { name: "Earl Grey", price: "$3.75", description: "Black tea with bergamot oil" },
        { name: "English Breakfast", price: "$3.75", description: "Traditional robust black tea" },
        { name: "Green Tea", price: "$3.50", description: "Light and refreshing" },
        { name: "Jasmine", price: "$3.75", description: "Green tea scented with jasmine blossoms" },
        { name: "Chamomile", price: "$3.75", description: "Calming herbal infusion" },
        { name: "Peppermint", price: "$3.50", description: "Refreshing herbal tea" },
        { name: "Chai Tea Latte", price: "$4.75", description: "Spiced tea with steamed milk" },
        { name: "Matcha Latte", price: "$5.25", description: "Japanese green tea powder with steamed milk" },
        { name: "Rooibos", price: "$3.75", description: "South African herbal tea, naturally caffeine-free" },
        { name: "Seasonal Fruit Tea", price: "$4.00", description: "Ask about our seasonal selection" },
      ]
    },
    {
      category: "Snacks & Treats",
      icon: <Utensils className="h-6 w-6" />,
      items: [
        { name: "Croissant", price: "$3.50", description: "Butter croissant, freshly baked" },
        { name: "Almond Croissant", price: "$4.25", description: "Filled with almond cream" },
        { name: "Chocolate Chip Cookie", price: "$2.75", description: "Soft-baked with premium chocolate" },
        { name: "Blueberry Muffin", price: "$3.25", description: "Made with fresh blueberries" },
        { name: "Banana Bread", price: "$3.75", description: "Moist banana bread with walnuts" },
        { name: "Avocado Toast", price: "$6.75", description: "Sourdough toast with avocado, sea salt, and red pepper flakes" },
        { name: "Fruit & Yogurt Parfait", price: "$5.25", description: "Greek yogurt, granola, and seasonal fruit" },
        { name: "Cheese Danish", price: "$3.95", description: "Flaky pastry with sweet cheese filling" },
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Coffee and pastries"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brown-900 bg-opacity-70"></div>
        </div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-cream-50 mb-6">Coffee & Tea Menu</h1>
            <p className="text-xl text-cream-200 mb-8 max-w-xl">
              Premium beverages and treats to enjoy during your salon visit or to take away
            </p>
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-brown-800 mb-6 text-center">Our Offerings</h2>
            <p className="text-lg text-brown-700 text-center max-w-3xl mx-auto mb-12">
              We source the finest coffee beans and tea leaves to create exceptional beverages that complement your salon experience.
            </p>
            
            {menuCategories.map((category, index) => (
              <div key={index} className="mb-16 last:mb-0">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center text-accent-600">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-brown-800">{category.category}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="bg-white rounded-lg shadow-md p-5 transition-all duration-300 hover:shadow-lg">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold text-lg text-brown-700">{item.name}</h3>
                        <span className="font-medium text-accent-600">{item.price}</span>
                      </div>
                      <p className="text-brown-500">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Special Offerings */}
          <div className="bg-brown-100 rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-brown-800 mb-6 text-center">Special Offerings</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h4 className="text-xl font-bold text-brown-800 mb-3">Seasonal Specials</h4>
                <p className="text-brown-600 mb-4">
                  We regularly update our menu with seasonal beverages and treats. Ask our baristas about current offerings.
                </p>
                <div className="text-accent-600 font-medium">Ask for details</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h4 className="text-xl font-bold text-brown-800 mb-3">Coffee with Service</h4>
                <p className="text-brown-600 mb-4">
                  Enjoy a complimentary coffee or tea with any salon service booking over $50.
                </p>
                <div className="text-accent-600 font-medium">Included with services</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h4 className="text-xl font-bold text-brown-800 mb-3">Loyalty Program</h4>
                <p className="text-brown-600 mb-4">
                  Join our loyalty program and earn free drinks after multiple visits.
                </p>
                <div className="text-accent-600 font-medium">Ask to join today</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Story */}
      <section className="py-20 bg-brown-900 text-cream-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src="https://images.pexels.com/photos/5379098/pexels-photo-5379098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Coffee beans"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Coffee Story</h2>
              <p className="text-cream-200 mb-6 text-lg">
                At Tea, Coffee & Cuts, we're passionate about quality in everything we do - from haircuts to coffee. We source our beans ethically from small farms around the world, ensuring sustainable practices and exceptional flavor.
              </p>
              <p className="text-cream-200 mb-6 text-lg">
                Our baristas are trained to bring out the best in every bean, creating perfectly balanced drinks that enhance your salon experience. Whether you're waiting for your appointment or enjoying a post-style treat, our coffee provides the perfect complement.
              </p>
              <p className="text-cream-200 text-lg">
                We rotate our specialty coffees seasonally, offering you the opportunity to experience new flavors and origins throughout the year.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;