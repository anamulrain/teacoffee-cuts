import React from 'react';
import { Coffee, Leaf } from 'lucide-react';

const MenuPreview: React.FC = () => {
  const menuItems = [
    {
      category: "Coffee",
      icon: <Coffee className="h-5 w-5" />,
      items: [
        { name: "Espresso", price: "$3.50", description: "Rich and full-bodied" },
        { name: "Cappuccino", price: "$4.50", description: "Espresso with steamed milk and foam" },
        { name: "Latte", price: "$4.75", description: "Espresso with a lot of steamed milk and little foam" },
      ]
    },
    {
      category: "Tea",
      icon: <Leaf className="h-5 w-5" />,
      items: [
        { name: "Earl Grey", price: "$3.75", description: "Black tea with bergamot oil" },
        { name: "Green Tea", price: "$3.50", description: "Light and refreshing" },
        { name: "Chamomile", price: "$3.75", description: "Calming herbal infusion" },
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {menuItems.map((category, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center text-accent-600">
              {category.icon}
            </div>
            <h3 className="text-xl font-bold text-brown-800">{category.category}</h3>
          </div>
          <ul className="space-y-4">
            {category.items.map((item, itemIdx) => (
              <li key={itemIdx} className="border-b border-brown-100 pb-4 last:border-0">
                <div className="flex justify-between">
                  <h4 className="font-semibold text-brown-700">{item.name}</h4>
                  <span className="font-medium text-accent-600">{item.price}</span>
                </div>
                <p className="text-brown-500 text-sm">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MenuPreview;