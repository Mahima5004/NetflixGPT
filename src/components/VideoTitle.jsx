import React from 'react'

function VideoTitle({title, overview}) {
  return (
    <div className='m-30 p-10'>
       <h1 className='text-5xl font-bold'>{title}</h1>
       <p className='w-1/2 py-4 text-lg'>{overview}</p>
       <div>
        <button className='bg-gray-300 p-4 px-12 text-white text-lg rounded-xl font-bold bg-opacity-50 cursor-pointer'>▶️Play</button>
        <button className='mx-2 bg-gray-300 p-4 px-16 text-white text-lg rounded-xl font-bold bg-opacity-50 cursor-pointer'>More Info</button>
       </div>
    </div>
  )
}

export default VideoTitle
