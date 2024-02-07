import React from 'react'
import {social} from '../data'

const Socials = () => {
  return (
    <ul className="flex space-x-6">
      {
        social.map((item,index)=>{
          return (
            <li className="flex justify-center items-center text-accent" key={index}>
              <a className="text-base hover:scale-125 hover:text-white transition-all duration-300" target='_black' href={item.href}>{item.icon}</a>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Socials