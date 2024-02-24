import React from "react";
import SideBar from "./components/SideBar";
import SiteRoute from "./SiteRoute";

function App() {
  return (
    <>
      <SideBar />
      <div className="p-4 sm:ml-64">
        <SiteRoute />
      </div>
    </>
  );
}

export default App;
