import React from 'react'

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
         <p className='text-xl tracking-widest'>Skills</p>
         <h2>What i can do</h2>
         <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'></div>
      </div>
    </div>
  )
}

export default Skills