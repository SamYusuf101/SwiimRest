/* eslint-disable */
import React from 'react';
import Image from 'next/image';


const About = () => {
    return (
        <div id='about' className='w-full md:h-screen bg-gradient-to-r from-[#38b9da] to-[#e74e4e] p-2 flex items-center py-16'>
            <div className='  max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600'>I am a freelance software and chatbot developer with a B.Sc in Computer Science and 2years experience in javascript. I have developed Websites and Chatbots for various businesses</p>
                   
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image className='rounded-xl' src="/../public/assets/logo.png" alt="/" width='300' height='300' />

                </div>
            </div>

        </div>
    )
}

export default About
