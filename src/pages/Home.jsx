import React from "react";
import "../App.css";

const Home = () => {
  return (
    <div id="home" className="hero max-w min-h-screen homeimg">
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-5xl">
          <h3 className="mb-5 text-3xl font-bold">
            Welcome To Bishnupur Tourism
          </h3>
          <h1 className="mb-8 text-5xl varela font-bold">
            "Authentic Indian Village Night Camping and Nature Exploration"
          </h1>
          <p className="mb-5 varela">
            Escape to nature and experience an authentic taste of Indian village
            life with our night camping experience in the forest. Enjoy
            delicious home-cooked meals made with locally sourced ingredients,
            and spend your days exploring the beautiful natural surroundings.
            With opportunities for hiking, bird-watching, and traditional
            activities, this is the perfect way to escape the hustle and bustle
            of city life and immerse yourself in the beauty of nature. Book your
            adventure today!
          </p>
          <button className="btn bg-green-500 hover:bg-cyan-600 transition-colors duration-300 border-none text-white rounded-full varela">
            <a href="#ticket"> Book Now </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
