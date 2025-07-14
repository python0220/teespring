"use client"
import React, { useState } from 'react'



const WearOptions = () => {
    const [WearOptions, setWearOption] = useState(['mens','women', 'kids', 'sesional','ocasional','example','example2'])
  return (
    <div className='Home-Page-WearOptions'>
        {WearOptions.map((el, ind) => (
        <div key={ind} className={`${el} Home-Page-WearOption-Element`}>
          {el}
        </div>
      ))}
    </div>
  )
}

export default WearOptions
