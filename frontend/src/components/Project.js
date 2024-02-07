import React from 'react'

const Project = ({item}) => {
  return (
    <>
    <div key={item.id} className='flex flex-col items-center text-center'>
        <div className='mb-8'>
            <img className='rounded-2xl h-60 object-cover border border-gray-600' src={item.image} alt="" />
            <p className='capitalize text-accent text-sm my-3 '>{item.category}</p>
            <h3 className='text-2xl font-semibold capitalize mb-3'>
                {item.name}
            </h3>
        </div>
    </div>
    </>
  )
}

export default Project