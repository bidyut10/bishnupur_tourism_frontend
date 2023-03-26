import React from "react";
import "../App.css";

const Explore = () => {
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://img.freepik.com/free-vector/ecology-concept-paper-style_23-2148464529.jpg?w=1060&t=st=1679651236~exp=1679651836~hmac=6a74346569abfd686a0ccb747c9ac1e4a726c8cc64ff5203627cf7abea8aaf45"
          className=" mx-10 rounded-lg service_info_img"
        />
        <div>
          <h1 className="text-5xl font-bold">3. Full Day Nature Exploration</h1>
          <p className="py-6 varela">
            Discover the hidden treasures of nature with our full day
            exploration trip. Our expert guides will take you on a journey
            through the forest, pointing out the different flora and fauna along
            the way. You'll have the opportunity to hike, birdwatch, and explore
            the beauty of nature up close. Don't forget to bring your camera to
            capture the unforgettable memories!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Explore;
