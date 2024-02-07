import React from 'react'
import { brands } from '../data'


const Brands = () => {
  return (
    <section className='min-h-[146px] bg-tertiary flex items-center'>
        <div className='container flex mx-auto items-center justify-evenly flex-wrap md:justify-between'>
            {brands.map((brands,index)=>{
                return (
                    <div key={index}>
                        <a href={brands.href}>

                        <img src={brands.img} alt="" />
                        </a>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Brands