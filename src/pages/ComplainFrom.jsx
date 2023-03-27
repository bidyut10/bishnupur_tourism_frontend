import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import contact from "../assets/contact.jpg";
import success from "../assets/success.png";

const ComplainFrom = () => {
  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
    msg: "",
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
      .post("https://bishnupurtourismbackend-production.up.railway.app/createcomplaint", {
        name: inputs.name,
        phone: inputs.phone,
        msg: inputs.msg,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendReq()
      .then((data) => localStorage.setItem("complaintId", data))
      .then(() => setSubmitted(true))
      .catch(() => alert("Check Your Details"));
  };

  return (
    <div id="contact" className="hero min-h-screen contact_bg">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left mx-10">
          <h1 className="text-5xl font-bold">Having Any Problem?</h1>
          <img src={contact} alt="contact" className="contact_img" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100 varela">
          <form
            className="card-body"
            onSubmit={handleSubmit}
            action="/createcomplaint"
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
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  onChange={handleChange}
                  type={"phone"}
                  value={inputs.phone}
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Message</span>
                </label>
                <input
                  onChange={handleChange}
                  type={"msg"}
                  value={inputs.msg}
                  name="msg"
                  id="msg"
                  placeholder="Your Message"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn bg-green-500 hover:bg-cyan-600 transition-colors duration-300 border-none text-white"
                  type="submit"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </form>
          {submitted && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
              <div className="bg-white p-10 rounded-md shadow-lg">
                <div className="flex items-center justify-center">
                  <h2 className="text-xl font-medium font-bold mb-10">
                    Complaint Registered Successfully
                  </h2>
                  <img src={success} alt="" className="w-5 h-5 mb-10 mx-2" />
                </div>

                <p className="mb-5">
                  <strong>Your ComplaintID: </strong>{" "}
                  {localStorage.getItem("complaintId")}
                </p>
                <p className="mb-5">
                  <strong>Your Message: </strong> {inputs.msg}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-white rounded-md px-4 py-2 bg-green-600 hover:bg-cyan-600 transition-colors duration-300 border-none"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComplainFrom;
