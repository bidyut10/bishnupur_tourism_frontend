import React from "react";
import image from "../assets/about.png";
import "../App.css";

const About = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h1 className="text-5xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
              Why Choose Bishnupur?
            </h1>
            <p className="mt-5 text-lg leading-7 font-medium text-gray-500">
              Bishnupur is an ideal destination for nature lovers who want to
              escape the hustle and bustle of the city and immerse themselves in
              the serenity of the forest. The place offers a unique camping
              experience amidst the natural beauty of the forest with a chance
              to enjoy delicious Indian village food.
            </p>
            <p className="mt-5 text-lg leading-7 font-medium text-gray-500">
              Additionally, Bishnupur is a historic town with several
              architectural wonders like the terracotta temples that offer an
              insight into the rich culture and history of the region. With a
              full day nature exploration, visitors can discover the hidden gems
              of Bishnupur and experience the beauty of nature.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="flex items-center justify-center border border-transparent text-base leading-6 font-medium rounded-md text-green-600 bg-white hover:text-green-500 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-0 md:ml-4 flex-shrink-0">
            <img
              className="h-56 w-full object-cover md:h-72 md:w-72"
              src={image}
              alt="About Us"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
