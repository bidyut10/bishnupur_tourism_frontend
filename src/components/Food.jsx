import React from "react";
import "../App.css";

const Food = () => {
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-indian-cuisine-illustration_23-2149333564.jpg?w=740&t=st=1679643001~exp=1679643601~hmac=f118a73b6ed86cf14649f06a822a85c45bcc0a43c555a65ecf42d2a56908e959"
          className=" rounded-lg service_info_img"
        />
        <div>
          <h1 className="text-5xl font-bold">
            2. Delight in Delicious Indian Village Food
          </h1>
          <p className="py-6 varela">
            Take your taste buds on a journey with our authentic Indian village
            food. Made with locally sourced ingredients, our cuisine is cooked
            using traditional methods passed down through generations. From
            spicy curries to savory snacks, you'll savor every bite of our
            flavorful dishes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Food;
