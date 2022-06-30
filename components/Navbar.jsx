import Image from 'next/image';
import React from 'react';
import Link from 'next/link';



const Navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
      <div className='flex justify-between items-center  px-2 2xl:px-16'>
        <Image src="/../public/assets/logo.png" alt="/" width='125' height='80' />

        <div>
          <ul className='hidden md:flex'>
            <Link href='https://tailwindcss.com/docs/cursor#setting-the-cursor-style'>
              <li className='ml-10 text-sm uppercase '>Home</li>
            </Link>
            <Link href='https://tailwindcss.com/docs/cursor#setting-the-cursor-style'>
              <li className='ml-10 text-sm uppercase '>About</li>
            </Link>
            <Link href='https://tailwindcss.com/docs/cursor#setting-the-cursor-style'>
              <li className='ml-10 text-sm uppercase '>Skills</li>
            </Link>
            <Link href='https://tailwindcss.com/docs/cursor#setting-the-cursor-style'>
              <li className='ml-10 text-sm uppercase hover:border-b hover:text-blue-300 '>Project</li>
            </Link>
            <Link href='https://tailwindcss.com/docs/cursor#setting-the-cursor-style'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
            </Link>

          </ul>
          <div className='md:hidden'>
           
          </div>
        </div>

      </div>
      <div className='fixed left-0 top-0 w-full h-screen bg-black/70'>
      <div className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'></div>
      </div>
       <div>
       <div>
         <Image src="/../public/assets/logo.png" width='87' height='35' alt='/' />
       </div>
       </div>
    </div>
  )
}

export default Navbar;