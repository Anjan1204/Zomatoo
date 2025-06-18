import React from "react";
import Card from "./Card";

const Products = () => {
  const products = [
    {
      id: 1,
      imageurl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      dishname: "Margherita Pizza",
      hotelname: "Summit Hotel",
      price: "₹550",
      rating: 4.8,
      deliveryTime: "25-30 min",
      isVeg: true
    },
    {
      id: 2,
      imageurl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80",
      dishname: "Classic Burger",
      hotelname: "City Bites",
      price: "₹719",
      rating: 4.5,
      deliveryTime: "20-25 min",
      isVeg: false
    },
    {
      id: 3,
      imageurl: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      dishname: "Sushi Platter",
      hotelname: "Tokyo Inn",
      price: "₹850",
      rating: 4.9,
      deliveryTime: "30-35 min",
      isVeg: false
    },
    {
      id: 4,
      imageurl: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      dishname: "Pasta Carbonara",
      hotelname: "Italiano Cafe",
      price: "₹515",
      rating: 4.7,
      deliveryTime: "25-30 min",
      isVeg: false
    },
    {
      id: 5,
      imageurl: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      dishname: "Caesar Salad",
      hotelname: "Green Bowl",
      price: "₹719",
      rating: 4.4,
      deliveryTime: "15-20 min",
      isVeg: true
    },
    {
      id: 6,
      imageurl: "https://images.unsplash.com/photo-1558920558-fb0345e52561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      dishname: "Stir Fry Noodles",
      hotelname: "Wok Station",
      price: "₹470",
      rating: 4.6,
      deliveryTime: "20-25 min",
      isVeg: true
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Menu</h2>
          <p className="mt-4 text-xl text-gray-600">
            Delicious dishes from top restaurants in your area
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              imageurl={product.imageurl}
              dishname={product.dishname}
              hotelname={product.hotelname}
              price={product.price}
              rating={product.rating}
              deliveryTime={product.deliveryTime}
              isVeg={product.isVeg}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-500 hover:bg-amber-600 transition-colors duration-300 hover:scale-105 transform">
            View Full Menu
            <svg className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;