import React from "react";

interface DestinationCardProps {
  image?: string;
  title?: string;
  location?: string;
  price?: string;
  rating?: string;
}

export default function DestinationCard({
  image = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  title = "Santorini, Greece",
  location = "Cyclades Islands",
  price = "24,999",
  rating = "4.8",
}: DestinationCardProps) {
  return (
    <div className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-sm font-semibold text-gray-800 shadow">
          ⭐ {rating}
        </div>
      </div>

      <div className="p-5">
        <p className="text-sm text-gray-500 mb-1">{location}</p>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>

        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-xs text-gray-500 block">Starting from</span>
            <span className="text-lg font-bold text-gray-900">₹{price}</span>
          </div>

          <button
            className="bg-indigo-600 text-white font-medium px-5 py-2.5 rounded-xl
                       transition-all duration-300 ease-out
                       hover:bg-indigo-700 hover:-translate-y-0.5 hover:shadow-lg
                       active:scale-95"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
