import React from "react";
import SideBar from "./components/SideBar";
import SiteRoute from "./SiteRoute";


function App() {
  return (
    <>
      <SideBar />
      <div className="mx-auto">
        <SiteRoute />
      </div>
    </>
  );
}

export default App;
