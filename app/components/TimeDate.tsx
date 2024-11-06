import React from 'react'

const TimeDate = () => {
  const time = new Date().toLocaleTimeString()
  console.log(time)

  return (
    <div className='grid justify-center flex-col border gap-4'>
      <div className='border'>{time}</div>
      <div className='border'>Date</div>
    </div>
  )
}

export default TimeDate
