import React from "react";
import { social } from "../data";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <footer className="bg-tertiary p-12">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
            <div className="flex space-x-6 items-center justify-center">
              {social.map((item, index) => {
                const { href, icon } = item;
                return (
                  <a
                    href={href}
                    key={index}
                    target="_black"
                    className="text-accent text-base hover:scale-125 hover:text-white transition-all duration-300"
                  >
                    {icon}
                  </a>
                );
              })}
            </div>

            <div>
              <Link
                to="home"
                smooth={true}
                spy={true}
                className="font-medium cursor-pointer text-white hover:text-accent transition-all duration-300 text-2xl"
              >
                Rohit Tarang
              </Link>
            </div>
            <p>&copy; 2024 Tarang Rohit. All right reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
