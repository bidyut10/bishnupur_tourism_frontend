import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import tick from "../animations/Tickets.json";
import ticket from "../assets/ticket.png";
import tick_book from "../animations/42796-take-a-ticket.json";
import "../App.css";

const TicketPage = () => {
  const navigate = useNavigate();
  const goToOrderPage = () => {
    navigate("/order");
  };
  return (
    <div>
      <div id="ticket" className="ticket_section flex_box bg-white">
        <div className="ticket_section flex_box">
          <div className="tick_container">
            <h1 className="text-5xl font-bold">
              Ultimate Nature Adventure Package: Camping, Food, and Exploration
            </h1>
            <p className="py-6">
              Get ready for the ultimate nature adventure with our all-in-one
              package! With just one ticket, you'll get to experience a night
              camping in the forest, indulge in delicious Indian village food,
              and go on a full day nature exploration trip.
            </p>
            <button
              className="btn bg-green-500 hover:bg-cyan-600 transition-colors duration-300 border-none"
              onClick={goToOrderPage}
            >
              Click Here To Order
            </button>
          </div>
          <div className="tick_container1">
            <Lottie
              className="max-w-sm ticket"
              animationData={tick}
              loop={true}
            />
            <Lottie
              className="max-w-sm"
              animationData={tick_book}
              loop={true}
            />
          </div>
        </div>
      </div>
      <div className="bg_ticket">
        <img src={ticket} alt="" />
      </div>
    </div>
  );
};

export default TicketPage;
