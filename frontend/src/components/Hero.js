import React from 'react'
import Img from "../assets/img/Picsart_24-02-06_01-25-41-298.png"
import  Resume  from "../assets/pdf/rt-resume-diff.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <p className="text-lg text-accent mb-[22px]">
              Hey, I'm Tarang👋
            </p>
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-6xl xl:text-7xl lg:leading-[1.2] font-bold md:tracking-tight">
              I Build & Design <br />
              Web Interfaces.
            </h1>
            <p className="pt-4 pb-8 text-lg text-center max-w-[480px] md:pt-6 md:pb-12 lg:text-left underline underline-offset-4">
              Front-End Developer
            </p>

            <a
              className="btn btn-md bg-accent hover:bg-accent-hover transition-all duration-300 md:btn-lg animate-bounce"
              href={Resume}
              download={true}
            >
              Download CV
            </a>
          </div>
          <div className="hidden  lg:flex flex-1 justify-center items-center h-full">
            <img
              src={Img}
              alt=""
              className="hover:scale-105 transition-all duration-300 hover:rotate-1 brightness-50 animate-pulse"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero