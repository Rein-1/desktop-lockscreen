/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BsGlobe } from "react-icons/bs";
import { MdOutlineCamera } from "react-icons/md";

const Nav = () => {
  return (
    <div className="md:flex flex-wrap justify-center md:justify-between space-y-4 md:space-y-0 mx-20 my-10 min-w-max border">
      <div className="grid justify-items-center w-[270px] gap-4  border">
        <BsGlobe className="w-10 h-10 rounded-xl bg-opacity-50 bg-black p-2" />
        <p className="font-medium border">
          The Fastest most intelligent Windows PC&lsquo;s ever. A new AI era
          begins.
        </p>
      </div>
      <div className="grid justify-items-center w-[270px] gap-4 border">
      <MdOutlineCamera className="w-11 h-11 rounded-xl bg-opacity-50 bg-black p-2" />
        <p className="font-medium border">Like the image that you see?</p>
      </div>
    </div>
  );
};

export default Nav;
