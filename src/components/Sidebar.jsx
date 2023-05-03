import React from "react";
import { NavLink } from "react-router-dom";
import { Sidebardata } from "./Sidebardata";
const Sidebar = () => {
  return (
    <>
      <section>
        <div className="text-dark-blue mt-40">
          {Sidebardata.map((item, index) => {
            return (
              <div key={index}>
                <NavLink
                  to={item.path}
                  className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                  ${
                    index === 0 && "bg-light-white"
                  } `}
                >
                  <span>{item.title}</span>
                </NavLink>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Sidebar;
