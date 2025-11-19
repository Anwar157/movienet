import React from "react";
import Navbar from "../Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";

const HomeLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Toaster position="top-center" />
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default HomeLayout;
