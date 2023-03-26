import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import TicketDetails from "../components/TicketDetails";

const AdminPage = () => {
  let loginKey = localStorage.getItem("admin");

  const [inputs, setInputs] = useState({
    bookingID: "",
  });
  const [ticketDetails, setTicketDetails] = useState();

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendReq = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${loginKey}`,
      },
    };

    const res = await axios
      .get(`https://bishnupurtourismbackend-production.up.railway.app/adminpage/${inputs.bookingID}`, config)
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      sendReq()
        .then((data) => setTicketDetails([data.bookingIDCheck]))
        .catch((err) => console.log(err));
      sendReq()
        .then((data) =>
          localStorage.setItem("bookingId", data.bookingIDCheck._id)
        )
        .catch((err) => alert(err.message));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="getticket" className="hero min-h-screen bg_home">
      <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-md">
        <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
          <form
            className="card-body"
            onSubmit={handleSubmit}
            action="/getdetails"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold ">Ticket Number</span>
              </label>
              <input
                placeholder="Ticket ID"
                className="input input-bordered"
                onChange={handleChange}
                type={"bookingID"}
                value={inputs.bookingID}
                name="bookingID"
                id="bookingID"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                className="btn bg-green-500 hover:bg-cyan-600 transition-colors duration-300 border-none text-white"
                type="submit"
              >
                GET DETAILS
              </button>
            </div>
          </form>
          {Array.isArray(ticketDetails) &&
            ticketDetails.map((bookingIDCheck, index) => (
              <TicketDetails
                bookingID={bookingIDCheck._id}
                key={index}
                name={bookingIDCheck.name}
                phone={bookingIDCheck.phone}
                noOfTickets={bookingIDCheck.noOfTickets}
                totalPrice={bookingIDCheck.totalPrice}
                bookingDate={bookingIDCheck.bookingDate}
                isCancled={bookingIDCheck.isCancled}
                checkedIn={bookingIDCheck.checkedIn}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
