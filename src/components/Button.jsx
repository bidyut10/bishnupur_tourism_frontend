import React from "react";
import "../App.css";

const Button = (props) => {
  return (
    <a href={props.hrefLink}>
      <img
        className="userbtn userlog curser_pointer text_decoration bg-white"
        src={props.imgLink}
        alt="button"
      />
    </a>
  );
};

export default Button;
