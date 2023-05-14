import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import NavPage from "./NavPage";
import menu from "./Assets/menu.png"
const Main = () => {
  const [open, setopen] = useState(true);
  return (
    <React.Fragment>
      <section>
        <div className="fixed top-0 left-0 right-0">
          <Navbar />
          <img
            src={menu}
            className="m-3 w-5"
            onClick={() => {
              setopen(!open);
            }}
          />
        </div>
      </section>
      <section>
        <div className="flex ">
          <div
            className={` bg-cream h-screen pl-2 ${
              !open && "hidden"
            } origin-left duration-100`}
          >
            <Sidebar />
          </div>
          <div className="col-span-9 bg-grey-light h-screen pl-60 p-40">
            <NavPage />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Main;
