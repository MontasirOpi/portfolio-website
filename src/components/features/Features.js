import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
// import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';  

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
       
        <Card
          title="App Development"
          des="Android and iOS Development"
          icon={<AiFillAppstore />}
        />
      
        <Card
          title="Flutter Development "
          des="Using Dart programming"
          icon={<FaMobile />}
        />
       
        <Card
          title="Websites to app"
          des="Convart website into App"
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features