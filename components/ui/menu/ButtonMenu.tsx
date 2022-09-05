import React from "react";

interface ButtonMenuProps {
  handleOpen: (arg0: boolean) => void,
  isOpen: boolean
}

export const ButtonMenu = ({ handleOpen, isOpen }:ButtonMenuProps) => {
  return (
    <button
      className="text-gray-500 w-10 h-10 relative focus:outline-none"
      onClick={() => handleOpen(!isOpen)}
    >
      <span className="sr-only">Open main menu</span>
      <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
        <span
          aria-hidden="true"
          className={`${
            isOpen ? "rotate-45" : "-translate-y-1.5"
          } block absolute h-0.5 rounded-md my-1 w-5 bg-current transform transition duration-500 ease-in-out text-white-ddev`}
        ></span>
        <span
          aria-hidden="true"
          className={`${
            isOpen ? "opacity-0 -translate-x-2.5" : ""
          } block absolute  h-0.5 rounded-md my-1 w-5 bg-current   transform transition duration-500 ease-in-out text-white-ddev`}
        ></span>
        <span
          aria-hidden="true"
          className={`${
            isOpen ? "-rotate-45" : "translate-y-1.5"
          } block absolute  h-0.5 rounded-md my-1 w-5 bg-current transform  transition duration-500 ease-in-out text-white-ddev`}
        ></span>
      </div>
    </button>
  );
};

export default ButtonMenu;
