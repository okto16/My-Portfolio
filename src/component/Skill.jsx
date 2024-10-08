import { motion } from "framer-motion";
import Css from "../assets/css.png";
import Vue from "../assets/vue.png";
// import Laravel from "../assets/laravel.png";
// import Javascript from "../assets/javascript.png";
import React from "../assets/react.png";
import Mysql from "../assets/mysql.png";
import Tailwind from "../assets/tailwind.png";
import Bootstrap from "../assets/bootstrap.png";
// import Git from "../assets/git.png";

const Skill = () => {
  return (
    <>
      <div className="skill flex justify-center mb-10">
        <h1 className="text-3xl font-bold">My Skill</h1>
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
          <div className="flex gap-2 badge rounded py-6 px-10 hover:bg-white hover:text-black hover:animate-pulse">
            <img
              className="w-7"
              src="https://oktorino.vercel.app/images/HTML5.png"
              alt=""
            />
            <span className="text-lg">HTML</span>
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
          <div className="flex gap-2 badge rounded py-6 px-10 hover:bg-white hover:text-black hover:animate-pulse">
            <img className="w-7" src={Css} alt="" />
            <span className="text-lg">CSS</span>
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
          <div className="flex gap-2 badge rounded py-6 px-6 hover:bg-white hover:text-black hover:animate-pulse">
            <img
              className="w-7"
              src="https://oktorino.vercel.app/images/javascript.png"
              alt=""
            />
            <span className="text-lg">Javascript</span>
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
          <div className="flex gap-2 badge rounded py-6 px-12 hover:bg-white hover:text-black hover:animate-pulse">
            <img
              className="w-7"
              src="https://oktorino.vercel.app/images/php.svg"
              alt=""
            />
            <span className="text-lg">PHP</span>
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
          <div className="flex gap-2 badge rounded py-6 px-6 hover:bg-white hover:text-black hover:animate-pulse">
            <img
              className="w-7"
              src="https://oktorino.vercel.app/images/codeigniter.svg"
              alt=""
            />
            <span className="text-lg">Codeigniter</span>
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
          <div className="flex gap-2 badge rounded py-6 px-9 hover:bg-white hover:text-black hover:animate-pulse">
            <img
              className="w-7"
              src="https://oktorino.vercel.app/images/laravel.svg"
              alt=""
            />
            <span className="text-lg">Laravel</span>
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
          <div className="flex gap-2 badge rounded py-6 px-10 hover:bg-white hover:text-black hover:animate-pulse">
            <img className="w-7" src={Vue} alt="" />
            <span className="text-lg">Vue</span>
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
          <div className="flex gap-2 badge rounded py-6 px-10 hover:bg-white hover:text-black hover:animate-pulse">
            <img className="w-7" src={React} alt="" />
            <span className="text-lg">React</span>
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
          <div className="flex gap-2 badge rounded py-6 px-10 hover:bg-white hover:text-black hover:animate-pulse">
            <img className="w-7" src={Mysql} alt="" />
            <span className="text-lg">Mysql</span>
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
          <div className="flex gap-2 badge rounded py-6 px-10 hover:bg-white hover:text-black hover:animate-pulse">
            <img className="w-7" src={Tailwind} alt="" />
            <span className="text-lg">Tailwind</span>
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
            type: "spring"
          }}
        >
          <div className="flex gap-2 badge rounded py-6 px-6 hover:bg-white hover:text-black hover:animate-pulse">
            <img className="w-7" src={Bootstrap} alt="" />
            <span className="text-lg">Bootstrap</span>
          </div>
        </motion.dev>
      </div>
    </>
  );
};
export default Skill;
