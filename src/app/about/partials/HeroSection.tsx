import React from 'react'

interface IProps {
   data: {
      text: string;
      image: string;
   }
}


const HeroSection: React.FC<IProps> = ({ data }) => {

   return (
      <div className='py-10'>

         <div
            style={{ backgroundImage: `url(${data.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            className='h-[12rem] w-full relative rounded-lg overflow-hidden flex justify-center items-center'
         >
            <div className='bg-[#003386BD]/75 absolute inset-0' />
            <span className='typography-h1-bold text-white absolute'>{data.text}</span>
         </div>
      </div>
   )
}

export default HeroSection