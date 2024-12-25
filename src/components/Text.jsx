import React from 'react'
import imageA from "../assets/children.jpg"
import imageB from "../assets/youth.jpg"
import imageC from "../assets/adult.jpg"

const Text = ({Title, Note, image1, image2, image3}) => {
  return (
    <div className='flex flex-col items-center'>
        <div className='w-[300px] h-[170px]'>
          {image1 && <img src={imageA} className='w-full h-full'  />}
          {image2 && <img src={imageB} className='w-full h-full' />}
          {image3 && <img src={imageC} className='w-full h-full' />}
        </div>
        <h1 className='text-[20px] font-semibold mt-3'>{Title}</h1>
        <p className='text-center'>{Note}</p>
        <button className='px-4 py-2 mt-3 font-italic text-[#0E205C] font-semibold border border-[#0E205C] rounded-md'>Learn More</button>
    </div>
  )
}

export default Text