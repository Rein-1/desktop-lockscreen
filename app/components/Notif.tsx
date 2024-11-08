/* eslint-disable @next/next/no-img-element */

import { IoSearch } from "react-icons/io5";

const Notif = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 my-20 border">
      <IoSearch className="w-7 h-7 rounded-lg bg-black bg-opacity-80" />
      <span className="flex-wrap w-80 border">
        The AI era is a time when artificial intelligence (AI) is rapidly
        advancing and transforming how humans interact with machines and live
        their lives.
      </span>
    </div>
  );
};

export default Notif;
