import React from 'react'
import {services} from '../data'

const Service = () => {
  return (
    <section id="services" className="bg-tertiary section">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title  before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-20 before:hidden before:lg:block">
            What I do for clients
          </h2>
          <p className="subtitle">
            I specialize in crafting responsive and visually stunning websites
            using HTML, CSS, JavaScript, Tailwind CSS, and React, ensuring an
            intuitive user experience and seamless interaction across all
            devices.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const { icon, name, description } = service;

            return (
              <div className="bg-secondary p-5 rounded-2xl" key={index}>
                <div className="text-accent rounded-sm  h-5 flex justify-center items-center mb-5 text-[28px]">
                  {icon}
                </div>
                <h4 className="text-xl text-center font-medium mb-2">{name}</h4>
                <p className='text-center'>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Service