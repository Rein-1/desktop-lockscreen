// 'use client'
// import { useEffect, useState } from "react"

// const TimeDate = () => {
//   const [time, setTime] = useState(new Date().toLocaleTimeString()) 
//   const [date, setDate] = useState(new Date().toLocaleDateString( 'en-US', {
//     weekday: 'long',
//     month: 'long',
//     day: 'numeric'
//   }))
//   useEffect(() => {
//     const IntervalId = setInterval(() => {
//       setTime(new Date().toLocaleTimeString())
//       setDate(new Date().toLocaleDateString( 'en-US', {
//         weekday: 'long',
//         month: 'long',
//         day: 'numeric'
//       }))
//     }, 1000)

//     return () => clearInterval(IntervalId)
//   }, [])
//   // console.log(time)

 


//   console.log(date)

//   return (
//     <div className='grid justify-center flex-col border gap-4'>
//       <div className='flex justify-center font-bold text-4xl text-black border'>{time}</div>
//       <div className='font-bold text-3xl text-black border'>{date}</div>
//     </div>
//   )
// }

// export default TimeDate

'use client'
import { useEffect, useState } from "react"

const TimeDate = () => {
  // Define state as string | null to allow null as initial value and string later
  const [time, setTime] = useState<string | null>(null)
  const [date, setDate] = useState<string | null>(null)

  useEffect(() => {
    const updateDateTime = () => {
      setTime(new Date().toLocaleTimeString())
      setDate(new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
      }))
    }

    updateDateTime() // Initialize immediately after mounting
    
    const intervalId = setInterval(updateDateTime, 1000)

    return () => clearInterval(intervalId) // Clean up the interval on unmount
  }, [])

  // If time or date is null (indicating that it's still being set), render a loading state
  if (time === null || date === null) {
    return <div>Loading...</div> // or null, or a skeleton loader
  }

  return (
    <div className='grid justify-center flex-col border gap-4'>
      <div className='flex justify-center font-bold text-4xl text-black border'>{time}</div>
      <div className='font-bold text-3xl text-black border'>{date}</div>
    </div>
  )
}

export default TimeDate
