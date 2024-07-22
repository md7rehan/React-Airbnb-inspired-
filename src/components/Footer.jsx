import React, { useState } from 'react';

const categories = [
  'Popular', 'Arts & culture', 'Outdoors', 'Mountains', 'Beach', 'Unique stays', 'Categories', 'Things to do'
];

const destinationsByCategory = {
  'Popular': [
    { name: 'Canmore', type: 'Pet-friendly rentals' },
    { name: 'Benalmádena', type: 'Beach house rentals' },
    { name: 'Marbella', type: 'Villa rentals' },
    { name: 'Mijas', type: 'House rentals' },
    { name: 'Prescott', type: 'Holiday rentals' },
    { name: 'Scottsdale', type: 'Holiday rentals' },
    { name: 'Tucson  ', type: 'Pet-friendly rentals' },
    { name: 'Jasper', type: 'Cabin  rentals' },
    { name: 'Mountain View', type: 'Cabin rentals' },
    { name: 'Devonport', type: 'Holiday rentals' },
    { name: 'Mallacoota', type: 'Pet-friendly rentals' },
    { name: 'Ibiza', type: 'Holiday rentals' },
    { name: 'Anaheim', type: 'Holiday rentals' },
    { name: 'Monterey', type: 'Cottage rentals' },
    { name: 'Paso Robles', type: 'Holiday rentals' },
    { name: 'Santa Barbara', type: 'Holiday rentals' },
    { name: 'Sonoma', type: 'Cottage rentals' },
  ],
  'Arts & culture': [
    { name: 'Phoenix', type: 'Holiday rentals' },
    { name: 'Hot Springs', type: 'Cabin rentals' },
    { name: 'Los Angeles', type: 'Villa rentals' },
    { name: 'San Diego', type: 'Beach house rentals' },
    { name: 'San Francisco', type: 'Holiday rentals' },
    { name: 'Barcelona', type: 'Holiday rentals' },
    { name: 'Prague', type: 'Holiday rentals' },
    { name: 'Washington', type: 'Flat rentals' },
    { name: 'Keswick', type: 'Cottage rentals' },
    { name: 'London', type: 'House rentals' },
    { name: 'Scarborough', type: 'Holiday rentals' },
    { name: 'Sherwood Forest', type: 'Cabin rentals' },
    { name: 'York', type: 'Pet-friendly rentals' },
    { name: 'Paris', type: 'Flat rentals' },
    { name: 'Rhodes', type: 'House rentals' },
    { name: 'Nashville', type: 'Holiday rentals' },
    { name: 'Dublin', type: 'Cottage rentals' }
  ],
  'Outdoors': [
    { name: 'Mallacoota', type: 'Beach house rentals' },
    { name: 'Ibiza', type: 'Holiday rentals' },
    { name: 'Anaheim', type: 'House rentals' },
    { name: 'Monterey', type: 'Bungalow rentals' },
    { name: 'Paso Robles', type: 'Holiday rentals' }
  ],
  'Mountains': [
    { name: 'Santa Barbara', type: 'Beachfront rentals' },
    { name: 'Sonoma', type: 'Rentals with pools' }
  ],
  'Beach': [
    { name: 'Miami', type: 'Beachfront rentals' },
    { name: 'Malibu', type: 'Beach house rentals' },
    { name: 'Cancun', type: 'Resort rentals' }
  ],
  'Unique stays': [
    { name: 'Treehouse', type: 'Treehouse rentals' },
    { name: 'Castle', type: 'Castle rentals' },
    { name: 'Yurt', type: 'Yurt rentals' }
  ],
  'Categories': [
    { name: 'Pet-friendly', type: 'Pet-friendly rentals' },
    { name: 'Family', type: 'Family-friendly rentals' }
  ],
  'Things to do': [
    { name: 'Hiking', type: 'Hiking tours' },
    { name: 'Cycling', type: 'Cycling tours' },
    { name: 'Sightseeing', type: 'Sightseeing tours' }
  ]
};

const Footer = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredDestinations = destinationsByCategory[activeCategory];

  return (
    <div className="bg-gray-100 ">
      <section className="max-w-full mx-auto px-4 py-10">
        <div className="max-w-full mx-auto ml-8">
          <h2 className="text-2xl font-semibold mb-4">Inspiration for future getaways</h2>
          <div className="flex space-x mb-6 border-b -ml-4 overflow-x-auto">
            {categories.map((category, index) => (
              <div
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 cursor-pointer ${
                  activeCategory === category ? 'border-b-2 border-black' : ''
                }`}
              >
                {category}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-4">
            {filteredDestinations.map((destination, index) => (
              <div key={index} className="space-y-1">
                <div className="cursor-pointer">{destination.name}</div>
                <div className="text-sm text-gray-500">{destination.type}</div>
              </div>
            ))}
            <div className=" cursor-pointer hover:underline">
              Show more <span className="text-gray-500">&darr;</span>
            </div>
          </div>
        </div>
        <div className="border-t pt-6 mt-10">
          <div className="max-w-full mx-auto p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-3">Support</h3>
                <ul className="space-y-2">
                  <li className="cursor-pointer hover:underline">Help Centre</li>
                  <li className="cursor-pointer hover:underline">AirCover</li>
                  <li className="cursor-pointer hover:underline">Anti-discrimination</li>
                  <li className="cursor-pointer hover:underline">Disability support</li>
                  <li className="cursor-pointer hover:underline">Cancellation options</li>
                  <li className="cursor-pointer hover:underline">Report neighbourhood concern</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Hosting</h3>
                <ul className="space-y-2">
                  <li className="cursor-pointer hover:underline">Airbnb your home</li>
                  <li className="cursor-pointer hover:underline">AirCover for Hosts</li>
                  <li className="cursor-pointer hover:underline">Hosting resources</li>
                  <li className="cursor-pointer hover:underline">Community forum</li>
                  <li className="cursor-pointer hover:underline">Hosting responsibly</li>
                  <li className="cursor-pointer hover:underline">Join a free Hosting class</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Airbnb</h3>
                <ul className="space-y-2">
                  <li className="cursor-pointer hover:underline">Newsroom</li>
                  <li className="cursor-pointer hover:underline">New features</li>
                  <li className="cursor-pointer hover:underline">Careers</li>
                  <li className="cursor-pointer hover:underline">Investors</li>
                  <li className="cursor-pointer hover:underline">Airbnb.org emergency stays</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t pt-6 text-sm text-gray-500">
              <div className="flex justify-between">
                <div>
                  <span>© 2024 Airbnb, Inc.</span>
                  <span className="cursor-pointer hover:underline ml-2">Privacy</span>
                  <span className="cursor-pointer hover:underline ml-2">Terms</span>
                  <span className="cursor-pointer hover:underline ml-2">Sitemap</span>
                  <span className="cursor-pointer hover:underline ml-2">Company details</span>
                </div>
                <div className="flex space-x-4">
                  <span className="cursor-pointer">🌐</span>
                  <span className="cursor-pointer hover:underline">English (IN)</span>
                  <span className="cursor-pointer hover:underline">₹ INR</span>
                  <span className="cursor-pointer">📘</span>
                  <span className="cursor-pointer">🐦</span>
                  <span className="cursor-pointer">📸</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
