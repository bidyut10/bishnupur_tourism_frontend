import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import jwt from 'jsonwebtoken';

export const Protected = (props) => {
  const { Component } = props;

  const navigate = useNavigate();
  useEffect(() => {
    let loginKey = localStorage.getItem("admin");
    if (!loginKey) {
      navigate("/login");
      return;
    }

    // jwt.verify(loginKey, "5^8LydB!mso^o!Yx", function (err) {
    //     if (err) {
    //         navigate("/login")
    //     };
    // });
  }, []);
  return (
    <>
      <Component />
    </>
  );
};
