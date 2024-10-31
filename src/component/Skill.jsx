/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Css from "../assets/css.png";
import Vue from "../assets/vue.png";
import Laravel from "../assets/laravel.png";
import Javascript from "../assets/javascript.png";
import Codeigniter from "../assets/ci.png";
import Html from "../assets/html.png";
import Php from "../assets/php.png";
import React from "../assets/react.png";
import Mysql from "../assets/mysql.png";
import Tailwind from "../assets/tailwind.png";
import Bootstrap from "../assets/bootstrap.png";
// import Progammer from "../component/lostProgrammer";
import Docker from "../assets/docker.png";
import NodeJS from "../assets/node-js.svg";

const Skill = () => {
  const skills = [
    { name: "HTML", icon: Html, delay: 0.5 },
    { name: "CSS", icon: Css, delay: 1.0 },
    { name: "Javascript", icon: Javascript, delay: 1.5 },
    { name: "PHP", icon: Php, delay: 2.0 },
    { name: "Codeigniter", icon: Codeigniter, delay: 2.5 },
    { name: "Laravel", icon: Laravel, delay: 3.0 },
    { name: "Vue", icon: Vue, delay: 3.5 },
    { name: "React", icon: React, delay: 4.0, animate: true },
    { name: "MySQL", icon: Mysql, delay: 4.5 },
    { name: "Tailwind", icon: Tailwind, delay: 5.0 },
    { name: "Bootstrap", icon: Bootstrap, delay: 5.5 },
    { name: "Docker", icon: Docker, delay: 6.0 },
    { name: "NodeJS", icon: NodeJS, delay: 6.5 },
  ];

  const SkillBadge = ({ skill }) => (
    <motion.div
      drag
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: skill.delay,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      dragTransition={{
        min: 0,
        max: 0,
        bounceStiffness: 100,
      }}
      className="flex justify-center"
    >
      <div className="flex items-center justify-start w-32 sm:w-36 md:w-40 lg:w-44 h-8 sm:h-10 md:h-12 lg:h-14 badge rounded px-3 hover:bg-white hover:text-black hover:animate-pulse transform transition-transform hover:scale-105">
        <div className="flex items-center gap-2">
          <img 
            className={`w-4 sm:w-5 md:w-6 lg:w-7 ${skill.animate ? 'animate-spin-slow' : ''}`} 
            src={skill.icon} 
            alt={skill.name} 
          />
          <span className="text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap">
            {skill.name}
          </span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="skill flex justify-center mb-6 sm:mb-8 lg:mb-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          My Skills
        </h1>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-7xl mx-auto">
        {skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill} />
        ))}
      </div>

      {/* <div className="absolute z-0 inset-x-0 mt-10">
        <Progammer />
      </div> */}
    </div>
  );
};

export default Skill;