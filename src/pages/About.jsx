import React from "react";
import image from "../assets/about.png";
import "../App.css";

const About = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h1 className="varela text-5xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
              Why Bishnupur?
            </h1>
            <p className="mt-3 text-base leading-6 varela">
              Bishnupur is an ideal destination for a nature lover who wants to
              escape the hustle and bustle of the city and immerse themselves in
              the serenity of the forest. The place offers a unique camping
              experience amidst the natural beauty of the forest with a chance
              to enjoy delicious Indian village food. <br />
              Additionally, Bishnupur is a historic town with several
              architectural wonders like the terracotta temples that offer an
              insight into the rich culture and history of the region. With a
              full day nature exploration, visitors can discover the hidden gems
              of Bishnupur and experience the beauty of nature.
            </p>
          </div>
          <div className="mt-4 md:mt-0 md:ml-4">
            <img
              className="h-64 w-full object-cover md:h-56 md:w-56"
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
