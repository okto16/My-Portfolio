import { motion } from "framer-motion";
import dashboard from "../assets/dashboard.png"
import github from "../assets/github.png"
import laravel from "../assets/laravel.png"
import vue from "../assets/vue.png"
import tailwind from "../assets/tailwind.png"
import mysql from "../assets/mysql.png"
import bootstrap from "../assets/bootstrap.png"
import ci from "../assets/ci.png"
import php from "../assets/php.png"
import react from "../assets/react.png"

const Project = () => {
  return (
    <>
      <div className="grid grid-cols-3 justify-left">
        <motion.dev
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="card bg-base-100 w-28 lg:w-80 shadow-xl outline outline-1 rounded mb-10">
            <figure>
              <img
                src={dashboard}
                alt="Shoes"
              />
            </figure>
            <div className="card-body p-2 lg:p-[2rem]">
              <h2 className="card-title text-[6px] lg:text-lg">Pet Shop</h2>
              <p className="h-[10px] text-[6px] lg:text-lg lg:h-[99px]">
                Make a website ecommerce pet shop with Laravel and Vue Js
              </p>
            </div>
            <div className="flex justify-around">
              <div className="flex gap-2">
                <img className="size-3 lg:size-8" src={laravel} alt="" />
                <img className="size-3 lg:size-8" src={vue} alt="" />
                <img className="size-3 lg:size-8" src={tailwind} alt="" />
                <img className="size-3 lg:size-8" src={mysql} alt="" />
              </div>
              <div className="">
                <a href="https://github.com/okto16/Pet-Shop">
                  <img className="size-2 lg:size-10" src={github} alt="" />
                </a>
              </div>
            </div>
          </div>
        </motion.dev>
        <motion.dev
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="card bg-base-100 w-28 lg:w-80 shadow-xl outline outline-1 rounded mb-10">
            <figure>
              <img
                src={dashboard}
                alt="Shoes"
              />
            </figure>
            <div className="card-body p-3 lg:p-[2rem]">
              <h2 className="card-title text-[6px] lg:text-lg">E-Commerce Midtrans API Sales</h2>
              <p className="h-[10px] text-[6px] lg:text-lg lg:h-[72px]">
                Make a website ecommerce with Laravel and Vue Js and Midtrans
                API for payment
              </p>
            </div>
            <div className="flex justify-around">
              <div className="flex gap-2">
                <img className="size-3 lg:size-8" src={laravel} alt="" />
                <img className="size-3 lg:size-8" src={vue} alt="" />
                <img className="size-3 lg:size-8" src={tailwind} alt="" />
                <img className="size-3 lg:size-8" src={mysql} alt="" />
              </div>
              <div className="">
                <a href="https://github.com/okto16/midtrans-api-sales">
                  <img className="size-2 lg:size-10" src={github} alt="" />
                </a>
              </div>
            </div>
          </div>
        </motion.dev>
        <motion.dev
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="card bg-base-100 w-28 lg:w-80 shadow-xl outline outline-1 rounded mb-10">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body p-3 lg:p-[2rem]">
              <h2 className="card-title text-[6px] lg:text-lg">Library</h2>
              <p className="h-[10px] text-[6px] lg:text-lg lg:h-[72px]">
                This Project is final from private class in eduwork, and i make
                it with HTML, PHP, Laravel, Yajra, and Bootstrap
              </p>
            </div>
            <div className="flex justify-around">
              <div className="flex gap-2">
                <img className="size-3 lg:size-8" src={laravel} alt="" />
                <img className="size-3 lg:size-8" src={bootstrap} alt="" />
                <img className="size-3 lg:size-8" src={php} alt="" />
              </div>
              <div className="">
                <a href="https://github.com/okto16/Library">
                  <img className="size-2 lg:size-10" src={github} alt="" />
                </a>
              </div>
            </div>
          </div>
        </motion.dev>
        <motion.dev
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            duration: 0.8,
            delay: 1.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="card bg-base-100 w-28 lg:w-80 shadow-xl outline outline-1 rounded mb-10">
            <figure>
              <img
                src="https://oktorino.vercel.app/images/Screenshot (58).png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body p-3 lg:p-[2rem]">
              <h2 className="card-title text-[6px] lg:text-lg">Redesign Landing Page</h2>
              <p className="h-[10px] text-[6px] lg:text-lg lg:h-[72px]">
                This Project from PBI(Project Based Intrenship) Qwords, and i
                make it with React JSX, Laravel, and Tailwindcss
              </p>
            </div>
            <div className="flex justify-around">
              <div className="flex gap-2">
                <img className="size-3 lg:size-8" src={laravel} alt="" />
                <img className="size-3 lg:size-8" src={react} alt="" />
                <img className="size-3 lg:size-8" src={tailwind} alt="" />
              </div>
              <div className="">
                <a href="https://github.com/okto16/Rakamin-Qwords">
                  <img className="size-2 lg:size-10" src={github} alt="" />
                </a>
              </div>
            </div>
          </div>
        </motion.dev>
        <motion.dev
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            duration: 0.8,
            delay: 1.0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="card bg-base-100 w-40 lg:w-80 shadow-xl outline outline-1 rounded mb-10">
            <figure>
              <img src="https://oktorino.vercel.app/images/3.jpg" alt="Shoes" />
            </figure>
            <div className="card-body p-3 lg:p-[2rem]">
              <h2 className="card-title text-[6px] lg:text-lg">Web E-Commerce Toko Pupuk</h2>
              <p className="h-[10px] text-[6px] lg:text-lg lg:h-[92px]">
                This Project is final task from my thesis, and i make it with
                HTML, CSS, PHP, CI3, and Bootstrap
              </p>
            </div>
            <div className="flex justify-around">
              <div className="flex gap-2">
                <img className="size-3 lg:size-8" src={ci} alt="" />
                <img className="size-3 lg:size-8" src={bootstrap} alt="" />
                <img className="size-3 lg:size-8" src={mysql} alt="" />
              </div>
              <div className="">
                <a href="https://github.com/okto16/web-project-ecommerce">
                  <img className="size-2 lg:size-10" src={github} alt="" />
                </a>
              </div>
            </div>
          </div>
        </motion.dev>
      </div>
    </>
  );
};

export default Project;
