'use client'
import { useEffect, useState } from "react"

const TimeDate = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString()) 
  const [date, setDate] = useState(new Date().toLocaleDateString( 'en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  }))
  useEffect(() => {
    const IntervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
      setDate(new Date().toLocaleDateString( 'en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
      }))
    }, 1000)

    return () => clearInterval(IntervalId)
  }, [])
  // console.log(time)

 


  console.log(date)

  return (
    <div className='grid justify-center flex-col border gap-4'>
      <div className='flex justify-center font-bold text-4xl text-black border'>{time}</div>
      <div className='font-bold text-3xl text-black border'>{date}</div>
    </div>
  )
}

export default TimeDate
