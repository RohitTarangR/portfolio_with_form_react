import React from 'react'
import Image from '../assets/img/aboutbannerpic.jpeg'
import { Link } from 'react-scroll';

const About = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="h-full w-[566px] object-cover rounded-2xl md:mx-auto lg:mx-0"
            src={Image}
            alt=""
          /> 
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Tarang Rohit
              </h2>
              <p className="mb-4 text-accent">Front-End Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                Passionate about crafting dynamic and responsive web
                experiences, I thrive at the intersection of HTML, CSS,
                JavaScript, Tailwind CSS, and React. With a keen eye for detail
                and a dedication to user-centric design, I bring visions to
                life, ensuring every digital interaction is both seamless and
                captivating.
              </p>
            </div>
            <Link  to='contact' smooth={true} spy={true} className="cursor-pointer btn btn-md bg-accent hover:bg-accent-hover transition-all duration-300">
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About