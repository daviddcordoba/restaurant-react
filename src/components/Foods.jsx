import React, { useEffect, useState } from 'react'
import FoodCard from '../layouts/FoodCard'
const Foods = () => {
  const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    console.log(data)
  return (
    <div  className='min-h-screen py-10 flex flex-col gap-8 justify-center items-center lg:px-32 px-5'>
      <h1  className='text-4xl font-semibold text-center pt-8  pb-10'>Nuestras variedades</h1>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 '>
        {data.map(burger =>
            <FoodCard title={burger.title} img={burger.img} price={burger.price}/>
        )}
        
      </div>
    </div>
  )
}

export default Foods