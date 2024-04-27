import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF,  FaLinkedinIn, FaReact,FaGithub } from "react-icons/fa";
import { SiFlutter,SiDart,  } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Programmer.", "Flutter Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Fahim Montasir Opi</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
           <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Hello! I'm a passionate Computer Science student and a dedicated Flutter developer with a strong desire to make a positive impact through technology. I'm thrilled to connect with like-minded professionals, mentors, and potential collaborators in the ever-evolving world of software development
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <a href="https://www.facebook.com/montasiropi">
              <FaFacebookF />
              </a>
            </span>
            
            <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/fahim-montasir-opi-161b65256/">
              <FaLinkedinIn />
              </a>
            </span>
            <span className="bannerIcon">
            <a href="https://github.com/MontasirOpi/MontasirOpi">
              <FaGithub />
              </a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            
            <span className="bannerIcon">
              <SiFlutter />
            </span>
            <span className="bannerIcon">
              <SiDart />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner