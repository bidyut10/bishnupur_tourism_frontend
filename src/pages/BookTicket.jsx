import React, { useState } from "react";
import axios from "axios";
import ordernow from "../assets/ordernow.png";
import "../App.css";
import success from "../assets/success.png";

const BookTicket = () => {
  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
    email: "",
    bookingDate: "",
    noOfTickets: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendReq = async () => {
    const res = await axios
      .post("http://localhost:3001/createorder", {
        name: inputs.name,
        phone: inputs.phone,
        noOfTickets: inputs.noOfTickets,
        email: inputs.email,
        bookingDate: inputs.bookingDate,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendReq()
      .then((data) =>
        localStorage.setItem("orderdetails", JSON.stringify(data))
      )
      .then(() => setSubmitted(true))
      .catch(() => alert("Check Your Details"));
  };
  const orderdetails = localStorage.getItem("orderdetails");
  const orderdetailsData = JSON.parse(orderdetails);
  console.log(orderdetails);
  return (
    <div className="hero min-h-screen bg_home">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left text-white">
          <h1 className="text-3xl font-bold">
            Buy One Ticket
            <br />
            <span className="text-5xl font-bold my-2"> Only at Just ₹1999</span>
          </h1>
          <p className="py-6">
            Once You Complete your order, You will get all details in your
            email, use the Ticket Code{" "}
          </p>
          <img src={ordernow} alt="" />
        </div>

        <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
          <form
            className="card-body"
            onSubmit={handleSubmit}
            action="/createorder"
            method="POST"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  onChange={handleChange}
                  type={"name"}
                  value={inputs.name}
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  onChange={handleChange}
                  type={"email"}
                  value={inputs.email}
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Number</span>
                </label>
                <input
                  onChange={handleChange}
                  type={"phone"}
                  value={inputs.phone}
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label htmlFor="bookingDate" className="label">
                  <span className="label-text">Choose a Date</span>
                </label>
                <input
                  onChange={handleChange}
                  type={"date"}
                  value={inputs.bookingDate}
                  name="bookingDate"
                  id="bookingDate"
                  placeholder="Date"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Number of Tickets</span>
                </label>
                <input
                  onChange={handleChange}
                  type={"noOfTickets"}
                  value={inputs.noOfTickets}
                  name="noOfTickets"
                  id="noOfTickets"
                  min="1"
                  max="10"
                  placeholder="Quantity"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Payment Mode</span>
                </label>
                <div className="relative inline-block form-control">
                  <select className="block appearance-none w-full bg-white border border-gray-400 rounded-xl hover:border-gray-300 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline input input-bordered">
                    <option value="cod">COD</option>
                    <option value="online">ONLINE</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-5 w-5" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M6.293 6.707a1 1 0 0 0 0 1.414L9.586 11l-3.293 3.293a1 1 0 1 0 1.414 1.414L12.414 11l-4.707-4.707a1 1 0 0 0-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn bg-green-500 hover:bg-cyan-500 transition-colors duration-300 border-none text-white"
                  type="submit"
                >
                  Proceed To Payment
                </button>
              </div>
            </div>
          </form>
          {submitted && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
              <div className="bg-white p-10 rounded-md shadow-lg">
                <div className="flex items-center justify-center">
                  <h2 className="text-xl font-medium font-bold mb-11">
                    Order Placed Successfully
                  </h2>
                  <img src={success} alt="" className="w-5 h-5 mb-10 mx-2" />
                </div>
                <p className="mb-5">
                  <strong>Your Ticket-ID: </strong>{" "}
                  {orderdetailsData.createOrder._id}
                </p>
                <p className="mb-5">
                  <strong>Your Name: </strong> {inputs.name}
                </p>
                <p className="mb-5">
                  <strong>Your Email: </strong> {inputs.email}
                </p>
                <p className="mb-5">
                  <strong>Your Phone: </strong> {inputs.phone}
                </p>
                <p className="mb-5">
                  <strong>Your Booking Date: </strong> {inputs.bookingDate}
                </p>
                <p className="mb-5">
                  <strong>No Of Tickets: </strong> {inputs.noOfTickets}
                </p>
                <p className="mb-5">
                  <strong>Total Price: </strong>{" "}
                  {orderdetailsData.createOrder.totalPrice}
                </p>

                <div className="flex items-center justify-center">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-white rounded-md px-4 py-2 bg-green-600 hover:bg-cyan-600 border-none transition-colors duration-300"
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookTicket;
