import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Protected } from "./components/Protected";
import SideNavbar from "./components/SideNavbar";
import FooterPage from "./pages/FooterPage";
import AdminPage from "./pages/AdminPage";
import BookTicket from "./pages/BookTicket";
import { Login } from "./pages/Login";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <SideNavbar />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/adminpage"
          element={<Protected Component={AdminPage} />}
        ></Route>
        <Route path="/order" element={<BookTicket />}></Route>
      </Routes>
      <FooterPage />
    </BrowserRouter>
  );
}

export default App;
