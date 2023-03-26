import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import success from "../assets/success.png";

const TicketDetails = ({
  name,
  phone,
  bookingID,
  bookingDate,
  totalPrice,
  noOfTickets,
  isCancled,
  checkedIn,
}) => {
  const bkID = localStorage.getItem("bookingId");

  const navigate = useNavigate();
  const cancleTicket = async () => {
    await axios
      .put(`https://bishnupurtourismbackend-production.up.railway.app/adminpage/cancle/${bkID}`)
      .then(() => alert("Cancled !!!"))
      .then(navigate("/adminpage"))
      .catch((err) => alert(err.message));
  };
  const checkedInTicket = async () => {
    await axios
      .put(`https://bishnupurtourismbackend-production.up.railway.app/adminpage/checkedin/${bkID}`)
      .then(() => alert("Checked In !!!"))
      .then(navigate("/adminpage"))
      .catch(() => alert(err.message));
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <div className="flex items-center justify-center">
          <h2 className="text-xl font-medium mb-11">Ticket Details</h2>
          <img src={success} alt="" className="w-5 h-5 mb-10 mx-2" />
        </div>

        <p className="mb-5">
          <strong>Ticket ID: </strong> {bookingID}
        </p>
        <p className="mb-5">
          <strong>User Name: </strong> {name}
        </p>
        <p className="mb-5">
          <strong>User Phone: </strong> {phone}
        </p>
        <p className="mb-5">
          <strong>Booking Date: </strong> {bookingDate}
        </p>
        <p className="mb-5">
          <strong>Total Price: </strong> {totalPrice}
        </p>
        <p className="mb-5">
          <strong>No Of Tickets: </strong> {noOfTickets}
        </p>
        <p className="mb-5">
          <strong>Checked In: </strong> {checkedIn.toString()}
        </p>
        <p className="mb-5">
          <strong>Cancled: </strong> {isCancled.toString()}
        </p>
        {isCancled == false && checkedIn == false ? (
          <div className="flex items-center justify-center">
            <button
              onClick={cancleTicket}
              className="mt-4 text-white rounded-md mx-2 px-4 py-2 bg-green-500 hover:bg-green-700 transition-colors duration-300 border-none"
            >
              CANCLE
            </button>
            <button
              onClick={checkedInTicket}
              className="mt-4 text-white rounded-md px-4 py-2 bg-cyan-500 hover:bg-cyan-700 transition-colors duration-300 border-none"
            >
              CHECKED IN
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TicketDetails;
