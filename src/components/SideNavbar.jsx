import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import icon from "../assets/bishnupur.png";
import menu from "../assets/menu.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import email from "../assets/email.png";
import whatsapp from "../assets/whatsapp.png";
import Button from "./Button";

function SideNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  const goToOrderPage = () => {
    navigate("/order");
  };

  const goToAdminPage = () => {
    navigate("/login");
  };
  const goToMainPage = () => {
    navigate("/");
  };
  return (
    <div className={`side-navbar bg-white ${isOpen ? "open" : ""}`}>
      <button className="toggle-button curser_pointer" onClick={handleToggle}>
        <img src={menu} alt="menu" className="menuimg display_block" />
      </button>
      <nav className="navbar_menu text_decoration">
        <img
          className="navlogo display_block curser_pointer"
          src={icon}
          alt="icon"
          onClick={goToMainPage}
        />
        <ul>
          <li>
            <a
              className="main_menu display_block varela text_decoration"
              href="#"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              className="main_menu display_block varela text_decoration"
              href="#services"
            >
              SERVICES
            </a>
          </li>
          <li>
            <a
              className="main_menu display_block varela text_decoration"
              href="#ticket"
            >
              TICKET PAGE
            </a>
          </li>
          <li>
            <a
              className="main_menu display_block varela text_decoration"
              href="#"
              onClick={goToOrderPage}
            >
              ORDER NOW
            </a>
          </li>
          <li>
            <a
              className="main_menu display_block varela text_decoration"
              href="#contact"
            >
              CONTACT US
            </a>
          </li>
          <li>
            <a
              className="main_menu display_block varela text_decoration"
              href="#"
              onClick={goToAdminPage}
            >
              ADMIN
            </a>
          </li>
        </ul>
        <div className="secondary-nav">
          <ul className="secondary-navul flex_box">
            <li className="slidebtn">
              <Button imgLink={whatsapp} />
            </li>
            <li className="slidebtn">
              <Button imgLink={instagram} />
            </li>
            <li className="slidebtn">
              <Button imgLink={facebook} />
            </li>
            <li className="slidebtn">
              <Button imgLink={email} />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default SideNavbar;
