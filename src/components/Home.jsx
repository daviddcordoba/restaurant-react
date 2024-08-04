import React from 'react'
import Button from '../layouts/Button'

const Home = () => {
  return (
    <div className='min-h-[64vh]  flex flex-row justify-between items-center lg:px-32 px-5 lg:bg-contain bg-contain bg-center  bg-no-repeat sm:bg-[url("./assets/hero.jpeg")]'>
        <div className='w-full lg:w-2/3 space-y-5'>
            <h1 className='text-gray-400 font-semibold text-5xl'>Lorem ipsum dolor sit amet.</h1>
            <p className='text-orange-600 font-semibold'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum corrupti id soluta porro alias provident.
            </p>
            <div>
                <Button title='Ordena ahora'/>
            </div>
        </div>
    </div>
  )
}

export default Home