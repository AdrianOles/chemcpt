/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Icon from '@/components/Icon'

export default function Home() {
  return (
    <div className='flex-col relative'>
      <video autoPlay={true} muted={true} loop playsInline
        className="w-screen h-screen object-cover absolute z-1 brightness-[60%]">
        <source src='vidoes/gas.mp4' type="video/mp4" />
      </video>
      
      <div className='flex-col flex md:p-20 px-12 py-20 text-white gap-16 h-full'>
        <div className='text-[3rem] md:text-[5rem] font-semibold z-50'>
          Gay-Lussac's Law
        </div>
        <div className='text-white z-50 flex gap-10'>
          <div className='md:w-[60%] w-full flex flex-col gap-10 md:mt-10 mt-4'>
            <div className='md:text-lg w-full'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur?
            </div>
            <div>
              <input type="text" placeholder='Answer' id="fname" name="fname"
                className='z-50 p-2 rounded-xl bg-transparent border-white border-2 text-white' />
            </div>
          </div>
          <div className='md:w-[40%] hidden md:block'>
            <Icon/>
          </div>
        </div>
      </div>
    </div>
  )
}