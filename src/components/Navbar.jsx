import React from "react";
import react from "./Assets/react.png";
const Navbar = () => {
  return (
    <div>
      <section>
        <div className="  bg-blue w-full h-20 flex items-center pl-10 space x-4">
          <div>
            <img src={react} className="w-8" alt="" />
          </div>

          <div>
            <p className=" text-4xl mt-0">logo</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
