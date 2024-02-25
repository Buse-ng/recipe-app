import React from "react";
import SiteRoute from "./SiteRoute";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="mx-auto p-4 bg-gray-100 h-screen">
        <SiteRoute />
      </div>
    </>
  );
}

export default App;