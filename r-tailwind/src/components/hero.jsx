import React from "react";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center p-6 md:p-12 bg-gradient-to-br from-purple-50 to-blue-50 min-h-[80vh] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-100/20 to-blue-100/20"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-100/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 gap-8 md:gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              Welcome To Culinary Delights
            </span>
            <br />
            With Parul-Zomatoo
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
            Experience the finest food delivery service with our curated selection of restaurants and cuisines.
          </p>
          <div className="pt-4">
            <button className="group px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto md:mx-0">
              <span>Explore More</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Food delivery"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;