import { motion } from "framer-motion";
import Css from "../assets/css.png";
import Vue from "../assets/vue.png";
import Laravel from "../assets/laravel.png";
import Javascript from "../assets/javascript.png";
// import Nodejs from "../assets/nodejs.png";
import Codeigniter from "../assets/ci.png";
import Html from "../assets/html.png";
import Php from "../assets/php.png";
import React from "../assets/react.png";
import Mysql from "../assets/mysql.png";
import Tailwind from "../assets/tailwind.png";
import Bootstrap from "../assets/bootstrap.png";
import Progammer from "../component/lostProgrammer";
// import Git from "../assets/git.png";

const Skill = () => {
  return (
    <>
      <div className="skill flex justify-center mb-10">
        <h1 className="text-md lg:text-3xl font-bold">My Skill</h1>
      </div>
      <div className="grid grid-cols-5 justify-center gap-4">
        <motion.dev
          drag
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          dragTransition={{
            min: 0,
            max: 0,
            bounceStiffness: 100,
          }}
        >
          <div className="flex gap-2 badge rounded px-5 py-4 lg:py-6 lg:px-10 hover:bg-white hover:text-black hover:animate-pulse">
            <img className="w-3 lg:w-7" src={Html} alt="" />
            <span className="text-[10px] lg:text-lg">HTML</span>
          </div>
        </motion.dev>
        <motion.dev
          drag
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          dragTransition={{
            min: 0,
            max: 0,
            bounceStiffness: 100,
          }}
        >
          <div className="flex gap-2 badge rounded px-6 py-4 lg:py-6 lg:px-10 hover:bg-white hover:text-black hover:animate-pulse">
            <img className="w-3 lg:w-7" src={Css} alt="" />
            <span className="text-[10px] lg:text-lg">CSS</span>
          </div>
        </motion.dev>
        <motion.dev
          drag
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          dragTransition={{
            min: 0,
            max: 0,
            bounceStiffness: 100,
          }}
        >
          <div className="flex gap-2 badge rounded px-3 py-4 lg:py-6 lg:px-6 hover:bg-white hover:text-black hover:animate-pulse">
            <img className="w-3 lg:w-7" src={Javascript} alt="" />
            <span className="text-[10px] lg:text-lg">Javascript</span>
          </div>
        </motion.dev>
        <motion.dev
          drag
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 2.0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          dragTransition={{
            min: 0,
            max: 0,
            bounceStiffness: 100,
          }}
        >
          <div className="flex gap-2 badge rounded py-4 px-6 lg:py-6 lg:px-12 hover:bg-white hover:text-black hover:animate-pulse">
            <img className="w-3 lg:w-7" src={Php} alt="" />
            <span className="text-[10px] lg:text-lg">PHP</span>
          </div>
        </motion.dev>
        <motion.dev
          drag
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 2.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          dragTransition={{
            min: 0,
            max: 0,
            bounceStiffness: 100,
          }}
        >
          <div className="flex gap-2 badge rounded px-3 py-4 lg:py-6 lg:px-6 hover:bg-white hover:text-black hover:animate-pulse">
            <img className="w-3 lg:w-7" src={Codeigniter} alt="" />
            <span className="text-[10px] lg:text-lg">Codeigniter</span>
          </div>
        </motion.dev>
        <motion.dev
          drag
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 3.0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          dragTransition={{
            min: 0,
            max: 0,
            bounceStiffness: 100,
          }}
        >
          <div className="flex gap-2 badge rounded py-4 px-5 lg:py-6 lg:px-9 hover:bg-white hover:text-black hover:animate-pulse">
            <img className="w-3 lg:w-7" src={Laravel} alt="" />
            <span className="text-[10px] lg:text-lg">Laravel</span>
          </div>
        </motion.dev>
        <motion.dev
          drag
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 3.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          dragTransition={{
            min: 0,
            max: 0,
            bounceStiffness: 100,
          }}
        >
          <div className="flex gap-2 badge rounded px-6 py-4 lg:py-6 lg:px-10 hover:bg-white hover:text-black hover:animate-pulse">
            <img className="w-3 lg:w-7" src={Vue} alt="" />
            <span className="text-[10px] lg:text-lg">Vue</span>
          </div>
        </motion.dev>
        <motion.dev
          drag
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 4.0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          dragTransition={{
            min: 0,
            max: 0,
            bounceStiffness: 100,
          }}
        >
          <div className="flex gap-2 badge rounded px-6 py-4 lg:py-6 lg:px-10 hover:bg-white hover:text-black hover:animate-pulse">
            <img className="w-3 lg:w-7 animate-spin-slow" src={React} alt="" />
            <span className="text-[10px] lg:text-lg">React</span>
          </div>
        </motion.dev>
        <motion.dev
          drag
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 4.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          dragTransition={{
            min: 0,
            max: 0,
            bounceStiffness: 100,
          }}
        >
          <div className="flex gap-2 badge rounded px-5 py-4 lg:py-6 lg:px-10 hover:bg-white hover:text-black hover:animate-pulse">
            <img className="w-3 lg:w-7" src={Mysql} alt="" />
            <span className="text-[10px] lg:text-lg">Mysql</span>
          </div>
        </motion.dev>
        <motion.dev
          drag
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 5.0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          dragTransition={{
            min: 0,
            max: 0,
            bounceStiffness: 100,
          }}
        >
          <div className="flex gap-2 badge rounded px-5 py-4 lg:py-6 lg:px-10 hover:bg-white hover:text-black hover:animate-pulse">
            <img className="w-3 lg:w-7" src={Tailwind} alt="" />
            <span className="text-[10px] lg:text-lg">Tailwind</span>
          </div>
        </motion.dev>
        <motion.dev
          drag
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 5.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          dragTransition={{
            min: 0,
            max: 0,
            bounceStiffness: 100,
            type: "spring",
          }}
        >
          <div className="flex gap-2 badge rounded py-4 px-3 lg:py-6 lg:px-6 hover:bg-white hover:text-black hover:animate-pulse">
            <img className="w-3 lg:w-7" src={Bootstrap} alt="" />
            <span className="text-[10px] lg:text-lg">Bootstrap</span>
          </div>
        </motion.dev>
      </div>
      <div className="absolute z-0 inset-x-0">
        <Progammer />
      </div>
    </>
  );
};
export default Skill;
