import React from "react";
import SiteRoute from "./SiteRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Navbar />
      <div className="mx-auto bg-gray-100 min-h-screen">
        <SiteRoute />
      </div>
      <Footer />
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;