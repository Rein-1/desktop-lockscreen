/* eslint-disable @next/next/no-img-element */

import { IoSearch } from "react-icons/io5"

const Notif = () => {
  return (
    <div className='grid flex-col justify-center gap-2 my-52 border'>
        <IoSearch className="w-7 h-7 rounded-lg bg-black bg-opacity-80"/>
        <span className='border'>Notification</span>
    </div>
  )
}

export default Notif
