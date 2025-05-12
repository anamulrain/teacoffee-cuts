import React, { useState } from 'react';
import { Calendar, Check, Clock, User, Scissors, Coffee } from 'lucide-react';

const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: '',
    stylist: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
    beverageOption: ''
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBookingData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleServiceSelect = (service: string) => {
    setBookingData(prevData => ({
      ...prevData,
      service
    }));
  };

  const handleStylistSelect = (stylist: string) => {
    setBookingData(prevData => ({
      ...prevData,
      stylist
    }));
  };

  const handleBeverageSelect = (beverageOption: string) => {
    setBookingData(prevData => ({
      ...prevData,
      beverageOption
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Here you would typically send the booking data to your backend
      console.log(bookingData);
      setBookingConfirmed(true);
    }
  };

  const goBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const services = [
    { id: 'womens-haircut', name: "Women's Haircut", duration: '60 min', price: '$45+' },
    { id: 'mens-haircut', name: "Men's Haircut", duration: '45 min', price: '$35+' },
    { id: 'color', name: "Color Service", duration: '120 min', price: '$75+' },
    { id: 'highlights', name: "Highlights", duration: '120 min', price: '$95+' },
    { id: 'blowout', name: "Blowout & Style", duration: '45 min', price: '$40+' },
    { id: 'treatment', name: "Treatment", duration: '30 min', price: '$35+' },
  ];

  const stylists = [
    { id: 'alex', name: "Alex Rodriguez", specialty: "Master Stylist", imageUrl: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 'jamie', name: "Jamie Chen", specialty: "Color Specialist", imageUrl: "https://images.pexels.com/photos/3760858/pexels-photo-3760858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 'morgan', name: "Morgan Wilson", specialty: "Stylist & Barber", imageUrl: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  ];

  const beverageOptions = [
    { id: 'espresso', name: "Espresso", type: "Coffee" },
    { id: 'latte', name: "Latte", type: "Coffee" },
    { id: 'cappuccino', name: "Cappuccino", type: "Coffee" },
    { id: 'americano', name: "Americano", type: "Coffee" },
    { id: 'earl-grey', name: "Earl Grey", type: "Tea" },
    { id: 'green-tea', name: "Green Tea", type: "Tea" },
    { id: 'chamomile', name: "Chamomile", type: "Tea" },
    { id: 'none', name: "No beverage, thanks", type: "None" },
  ];

  // Generate available times for demo purposes
  const availableTimes = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM', '5:00 PM'
  ];

  // Render booking steps
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2 className="text-2xl font-bold text-brown-800 mb-6">Select a Service</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {services.map(service => (
                <div 
                  key={service.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                    bookingData.service === service.id 
                      ? 'border-accent-500 bg-accent-50 shadow-md' 
                      : 'border-brown-200 hover:border-accent-300 hover:shadow-sm'
                  }`}
                  onClick={() => handleServiceSelect(service.id)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-brown-800">{service.name}</h3>
                    {bookingData.service === service.id && (
                      <span className="text-accent-500">
                        <Check className="h-5 w-5" />
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-brown-500">{service.duration}</span>
                    <span className="font-medium text-accent-600">{service.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        );

      case 2:
        return (
          <>
            <h2 className="text-2xl font-bold text-brown-800 mb-6">Choose a Stylist</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {stylists.map(stylist => (
                <div 
                  key={stylist.id}
                  className={`border rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                    bookingData.stylist === stylist.id 
                      ? 'border-accent-500 shadow-md' 
                      : 'border-brown-200 hover:border-accent-300 hover:shadow-sm'
                  }`}
                  onClick={() => handleStylistSelect(stylist.id)}
                >
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={stylist.imageUrl} 
                      alt={stylist.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-brown-800">{stylist.name}</h3>
                        <p className="text-brown-500 text-sm">{stylist.specialty}</p>
                      </div>
                      {bookingData.stylist === stylist.id && (
                        <span className="text-accent-500">
                          <Check className="h-5 w-5" />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-brown-800 mb-4">Complimentary Beverage</h3>
            <p className="text-brown-600 mb-4">Select a complimentary beverage to enjoy during your service:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
              {beverageOptions.map(beverage => (
                <div 
                  key={beverage.id}
                  className={`border rounded-lg p-3 cursor-pointer transition-all duration-300 ${
                    bookingData.beverageOption === beverage.id 
                      ? 'border-accent-500 bg-accent-50 shadow-sm' 
                      : 'border-brown-200 hover:border-accent-300'
                  }`}
                  onClick={() => handleBeverageSelect(beverage.id)}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      {beverage.type === 'Coffee' && <Coffee className="h-4 w-4 text-brown-600" />}
                      {beverage.type === 'Tea' && <Coffee className="h-4 w-4 text-brown-600" />}
                      <span className="text-brown-800">{beverage.name}</span>
                    </div>
                    {bookingData.beverageOption === beverage.id && (
                      <span className="text-accent-500">
                        <Check className="h-4 w-4" />
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        );

      case 3:
        return (
          <>
            <h2 className="text-2xl font-bold text-brown-800 mb-6">Select Date & Time</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="date" className="block text-brown-700 mb-2">Date <span className="text-red-500">*</span></label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={bookingData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  required
                  className="w-full px-4 py-2 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                />
              </div>
              
              <div>
                <label className="block text-brown-700 mb-2">Available Times <span className="text-red-500">*</span></label>
                <div className="grid grid-cols-3 gap-2">
                  {availableTimes.map(time => (
                    <div 
                      key={time}
                      className={`border rounded-md py-2 px-3 text-center cursor-pointer transition-all duration-300 text-sm ${
                        bookingData.time === time 
                          ? 'border-accent-500 bg-accent-50 text-accent-700' 
                          : 'border-brown-200 hover:border-accent-300 text-brown-700'
                      }`}
                      onClick={() => setBookingData(prev => ({ ...prev, time }))}
                    >
                      {time}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        );

      case 4:
        return (
          <>
            <h2 className="text-2xl font-bold text-brown-800 mb-6">Your Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-brown-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={bookingData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-brown-700 mb-2">Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={bookingData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="phone" className="block text-brown-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={bookingData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-brown-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
            </div>
            
            <div className="mb-8">
              <label htmlFor="notes" className="block text-brown-700 mb-2">Additional Notes (optional)</label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                value={bookingData.notes}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-brown-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-accent-500"
                placeholder="Any specific requests or information we should know..."
              ></textarea>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  // For the confirmation screen
  const getServiceName = () => {
    const service = services.find(s => s.id === bookingData.service);
    return service ? service.name : '';
  };

  const getStylistName = () => {
    const stylist = stylists.find(s => s.id === bookingData.stylist);
    return stylist ? stylist.name : '';
  };

  const getBeverageName = () => {
    const beverage = beverageOptions.find(b => b.id === bookingData.beverageOption);
    return beverage ? beverage.name : 'None selected';
  };

  // If booking is confirmed, show confirmation
  if (bookingConfirmed) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mx-auto mb-4">
                <Check className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold text-brown-800 mb-2">Booking Confirmed!</h2>
              <p className="text-brown-600">
                Thank you for booking with Tea, Coffee & Cuts. We look forward to seeing you!
              </p>
            </div>
            
            <div className="border-t border-b border-brown-100 py-6 mb-6">
              <h3 className="font-semibold text-brown-800 mb-4">Booking Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 flex-shrink-0">
                    <Scissors className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-brown-800">Service</h4>
                    <p className="text-brown-600">{getServiceName()}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 flex-shrink-0">
                    <User className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-brown-800">Stylist</h4>
                    <p className="text-brown-600">{getStylistName()}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 flex-shrink-0">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-brown-800">Date & Time</h4>
                    <p className="text-brown-600">{bookingData.date} at {bookingData.time}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 flex-shrink-0">
                    <Coffee className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-medium text-brown-800">Complimentary Beverage</h4>
                    <p className="text-brown-600">{getBeverageName()}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-brown-600 mb-6">
                We've sent a confirmation email to <span className="font-medium">{bookingData.email}</span> with your booking details.
              </p>
              <Link to="/" className="inline-block bg-accent-500 hover:bg-accent-600 text-brown-900 font-medium px-6 py-3 rounded-md transition-colors duration-300">
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-brown-800 mb-4">Book Your Appointment</h1>
            <p className="text-lg text-brown-600 max-w-2xl mx-auto">
              Schedule your salon service and enjoy a complimentary beverage during your visit
            </p>
          </div>
          
          {/* Booking Progress */}
          <div className="mb-10">
            <div className="flex justify-between">
              {[1, 2, 3, 4].map(stepNumber => (
                <div 
                  key={stepNumber}
                  className="flex flex-col items-center w-full"
                >
                  <div className={`w-full flex items-center ${stepNumber === 1 ? 'justify-start' : stepNumber === 4 ? 'justify-end' : 'justify-center'}`}>
                    <div className={`w-10 h-10 flex items-center justify-center rounded-full font-medium ${
                      stepNumber < step ? 'bg-accent-500 text-brown-900' : 
                      stepNumber === step ? 'bg-accent-500 text-brown-900' : 
                      'bg-brown-200 text-brown-600'
                    }`}>
                      {stepNumber < step ? <Check className="h-5 w-5" /> : stepNumber}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              <div className="text-center w-1/4">
                <span className={`text-sm font-medium ${step >= 1 ? 'text-accent-600' : 'text-brown-500'}`}>Service</span>
              </div>
              <div className="text-center w-1/4">
                <span className={`text-sm font-medium ${step >= 2 ? 'text-accent-600' : 'text-brown-500'}`}>Stylist</span>
              </div>
              <div className="text-center w-1/4">
                <span className={`text-sm font-medium ${step >= 3 ? 'text-accent-600' : 'text-brown-500'}`}>Date & Time</span>
              </div>
              <div className="text-center w-1/4">
                <span className={`text-sm font-medium ${step >= 4 ? 'text-accent-600' : 'text-brown-500'}`}>Details</span>
              </div>
            </div>
          </div>
          
          {/* Booking Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit}>
              {renderStep()}
              
              <div className="flex justify-between">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={goBack}
                    className="px-6 py-3 border border-brown-300 rounded-md text-brown-700 font-medium transition-colors hover:bg-brown-50"
                  >
                    Back
                  </button>
                )}
                
                <button
                  type="submit"
                  className="ml-auto px-6 py-3 bg-accent-500 hover:bg-accent-600 text-brown-900 font-medium rounded-md transition-colors"
                >
                  {step < 4 ? 'Continue' : 'Confirm Booking'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;