import React from "react";
import SiteRoute from "./SiteRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="mx-auto p-4 bg-gray-100 min-h-screen">
        <SiteRoute />
      </div>
      <Footer />
    </>
  );
}

export default App;