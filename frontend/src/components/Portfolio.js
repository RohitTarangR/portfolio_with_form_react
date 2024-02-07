import React from 'react'
import Projects from './Projects'




const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-primary min-h-[1400px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-2/4 before:hidden before:lg:block">
            My Latest Work
          </h2>
          <p className="subtitle">
            From sleek e-commerce platforms to intuitive productivity tools, my
            portfolio showcases a diverse array of projects, each meticulously
            crafted with HTML, CSS, JavaScript, Tailwind CSS, and React.
            Seamlessly blending functionality with aesthetics, these projects
            embody my commitment to creating engaging and user-friendly digital
            experiences.
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
}

export default Portfolio