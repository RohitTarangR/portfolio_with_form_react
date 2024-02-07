import React, { useEffect, useState } from 'react'


import Nav from './Nav'
import NavMobile from './NavMobile'
import Socials from './Socials'
import { Link } from 'react-scroll'


const Header = () => {
  
  const [bg,setBg] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      return window.scrollY > 50 ? setBg(true) : setBg(false)
    })
  })

  return (
    <header className={`${bg ? 'bg-tertiary h-20': 'h-24'} flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>

    <div className="container mx-auto flex items-center h-full justify-between">
      {/* logo */}
      <Link to='home' smooth={true} spy={true} className='font-medium cursor-pointer text-white hover:text-accent transition-all duration-300 text-2xl hover:scale-x-90'>
        Rohit Tarang
      </Link>

      {/* nav  */}
      <div className='hidden lg:block'>
        <Nav />
      </div>
      
      {/* Socials  */}
      <div className='hidden lg:block'>
        <Socials />
      </div>
      
      {/* nav Mobile  */}
      <div className='lg:hidden'>
        <NavMobile />
      </div>
    </div>
    </header>
  )
}

export default Header