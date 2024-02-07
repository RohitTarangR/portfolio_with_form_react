import React from 'react'
import { Link } from 'react-scroll'
import {ChevronUpIcon} from '@heroicons/react/outline'

const BackToTopBtn = () => {

  return (
    <Link to='home' smooth={true} spy={true}  className='bg-accent w-10 h-10 hover:bg-accent-hover text-white rounded-md fixed right-12 bottom-12 cursor-pointer flex justify-center items-center transition-all'>
        <ChevronUpIcon className='w-6 h-6' />
    </Link>
    
  )
}

export default BackToTopBtn