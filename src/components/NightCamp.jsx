import React from "react";
import "../App.css";

const NightCamp = () => {
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://img.freepik.com/free-vector/summer-camping-relax-summertime-recreation-hiking-tour-mountain-tourism-backpackers-resting-near-tent-eating-snacks-near-campfire-open-air-vacation_335657-162.jpg?w=740&t=st=1679642826~exp=1679643426~hmac=aee8a8a448510c079dadc9205ce6d9ef0db4ad38fe3e45121a3b120b48e2d2f7"
          className=" mx-10 rounded-lg service_info_img"
        />
        <div>
          <h1 className="text-5xl font-bold">
            1. A Memorable Night Camping in the Forest
          </h1>
          <p className="py-6 varela">
            Experience the thrill of spending a night in the wilderness under
            the stars, surrounded by the beauty of nature. Our camping trip
            takes you deep into the forest, away from the hustle and bustle of
            city life. You'll sleep in a cozy tent and wake up to the sound of
            birds chirping and the fresh morning air
          </p>
        </div>
      </div>
    </div>
  );
};

export default NightCamp;
