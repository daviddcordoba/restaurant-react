import React from 'react'
import Button from '../layouts/Button'

const Home = () => {
  return (
    <div className='min-h-[64vh]  flex flex-row justify-between items-center lg:px-32 px-5 lg:bg-contain bg-contain bg-center  bg-no-repeat sm:bg-[url("./assets/hero.jpeg")]'>
        <div className='w-full lg:w-2/3 space-y-5'>
            <h1 className='text-amber-400 font-semibold text-5xl'>Elevate uoy inne foodie with every bite</h1>
            <p className='text-backgroundColor'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum corrupti id soluta porro alias provident.
            </p>
            <div>
                <Button title='Ordena ahora wachin'/>
            </div>
        </div>
    </div>
  )
}

export default Home