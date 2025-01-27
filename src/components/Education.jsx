import React from 'react'
import Card from '../Card'

const Education = () => {
  return (
    <div>
      <Card>
        <div className='p-5'>
            <h2 className='text-xl font-semibold '>Education</h2>
            <div className='flex w-full m-5'>
                <div className='w-15 h-15 '><img src="/src/imgs/sndt.png" alt="" /></div>
                <div className='ml-5'>
                    <h1 className=' font-medium  '>SNDT Women's University- P.G.Department of Computer Science</h1>
                    <h1 className=' font-normal  text-sm'>Masters of Computer Application-MCA</h1>
                    <h1 className=' font-normal  text-gray-400 text-sm'>Aug 2023 - Jun 2025</h1>
                </div>
            </div><hr className="border-gray-300"/>
            <div className='flex w-full m-5'>
                <div className='w-15 h-15 bg-gray-200'></div>
                <div className='ml-5'>
                    <h1 className=' font-medium  '>Bhavans College</h1>
                    <h1 className=' font-normal  text-sm'>Bachelor's degree ,Information Technology</h1>
                    <h1 className=' font-normal  text-gray-400 text-sm'>2020 - 2023</h1>
                </div><hr className="border-gray-300"  />
            </div>
        </div>
      </Card>
    </div>
  )
}

export default Education
