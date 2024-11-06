/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BsGlobe } from "react-icons/bs";
import { MdOutlineCamera } from "react-icons/md";

const Nav = () => {
  return (
    <div className="md:flex flex-wrap justify-center md:justify-between space-y-4 md:space-y-0 mx-20 my-10 min-w-max border">
      <div className="grid justify-items-center w-[270px] gap-4  border">
        <BsGlobe className="w-6 h-6" />
        <p className="font-medium border">
          The Fastest most intelligent Windows PC&lsquo;s ever. A new AI era
          begins.
        </p>
      </div>
      <div className="grid justify-items-center w-[270px] gap-4 border">
      <MdOutlineCamera className="w-7 h-7" />
        <p className="font-medium border">Like the image that you see?</p>
      </div>
    </div>
  );
};

export default Nav;