import React from "react";
import conjure from "../conjuretext.svg";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-900 py-6 w-full mt-auto md:pt-80">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex items-center">
          <p className="text-gray-600 text-sm mr-4">
            &copy; {currentYear} | Made By
          </p>
          <a href="/">
            <img
              src={conjure}
              className="bg-pink-500 hover:bg-teal-400 rounded-sm w-16 mr-3 negative-margin transition ease-in-out"
              alt="Logo"
            />
          </a>
          <p className="text-gray-600 text-sm"> All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
