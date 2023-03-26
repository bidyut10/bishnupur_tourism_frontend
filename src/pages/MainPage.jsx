import React from "react";
import ComplainFrom from "./ComplainFrom";
import Home from "./Home";
import Services from "./Services";
import TicketPage from "./TicketPage";
import About from "./About";

const MainPage = () => {
  return (
    <>
      <Home />
      <About />
      <Services />
      <TicketPage />
      <ComplainFrom />
    </>
  );
};

export default MainPage;
