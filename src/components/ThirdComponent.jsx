import React from 'react'
import Text from "./Text"

const ThirdComponent = () => {
  return (
   <div className='flex justify-center w-full mt-4'>
     <div className='grid grid-cols-cardGrid gap-3 w-[85%] '>
        <Text Title='Children' image1="hh" Note="Our Children Class includes children of all ages. Our desire is to provide excellent children's programming in a safe and secure environment where children can learn about God's love, build friendships and have fun"/>
        <Text Title='Youth' image2="hh" Note="The youth class is a catalyst for spiritual growth, equipping young people with the tools they need to navigate the complexities of life. They delve into Scripture, explore theological concepts, and engage in meaningful discussions that foster a deeper understanding of their faith.
"/>
        <Text Title='Adult' image3="hh" Note="This church is a vital ministry that has the power to transform lives, communities, and the world. As we invest in the spiritual growth and development of adults, we're not only shaping their futures but also the future of the church and the world."/>
    </div>
   </div>
  )
}

export default ThirdComponent