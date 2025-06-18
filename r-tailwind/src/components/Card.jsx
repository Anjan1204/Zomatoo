import React from "react";

const Card = ({ imageurl, dishname, hotelname, price, rating, deliveryTime, isVeg }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageurl}
          alt={dishname}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 flex items-center space-x-2">
          <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium shadow-sm">
            {rating} ★
          </span>
          <span className={`${isVeg ? 'bg-green-500' : 'bg-red-500'} text-white text-xs px-2 py-1 rounded-full shadow-sm`}>
            {isVeg ? 'VEG' : 'NON-VEG'}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg text-gray-900 group-hover:text-amber-600 transition-colors">{dishname}</h3>
            <p className="text-sm text-gray-600">{hotelname}</p>
          </div>
          <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-md text-sm font-medium">
            {price}
          </span>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {deliveryTime}
          </div>
          <button className="px-4 py-2 bg-amber-500 text-white text-sm font-medium rounded-lg hover:bg-amber-600 transition-colors duration-300 shadow-sm hover:shadow-md">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;