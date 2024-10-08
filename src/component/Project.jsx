import { motion } from "framer-motion";
import dashboard from "../assets/dashboard.png"
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
          <div className="card bg-base-100 w-80 shadow-xl outline outline-1 rounded mb-10">
            <figure>
              <img
                src={dashboard}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Pet Shop</h2>
              <p className="h-[99px]">
                Make a website ecommerce pet shop with Laravel and Vue Js
              </p>
            </div>
            <div className="flex justify-around">
              <div className="flex gap-2">
                <img className="size-8" src="src/assets/laravel.png" alt="" />
                <img className="size-8" src="src/assets/vue.png" alt="" />
                <img className="size-8" src="src/assets/tailwind.png" alt="" />
                <img className="size-8" src="src/assets/mysql.png" alt="" />
              </div>
              <div className="">
                <a href="https://github.com/okto16/Pet-Shop">
                  <img className="size-10" src="src/assets/github.png" alt="" />
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
          <div className="card bg-base-100 w-80 shadow-xl outline outline-1 rounded mb-10">
            <figure>
              <img
                src={dashboard}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">E-Commerce Midtrans API Sales</h2>
              <p className="h-[72px]">
                Make a website ecommerce with Laravel and Vue Js and Midtrans
                API for payment
              </p>
            </div>
            <div className="flex justify-around">
              <div className="flex gap-2">
                <img className="size-8" src="src/assets/laravel.png" alt="" />
                <img className="size-8" src="src/assets/vue.png" alt="" />
                <img className="size-8" src="src/assets/tailwind.png" alt="" />
                <img className="size-8" src="src/assets/mysql.png" alt="" />
              </div>
              <div className="">
                <a href="https://github.com/okto16/midtrans-api-sales">
                  <img className="size-10" src="src/assets/github.png" alt="" />
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
          <div className="card bg-base-100 w-80 shadow-xl outline outline-1 rounded mb-10">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Library</h2>
              <p>
                This Project is final from private class in eduwork, and i make
                it with HTML, PHP, Laravel, Yajra, and Bootstrap
              </p>
            </div>
            <div className="flex justify-around">
              <div className="flex gap-2">
                <img className="size-8" src="src/assets/laravel.png" alt="" />
                <img className="size-8" src="src/assets/bootstrap.png" alt="" />
                <img className="size-8" src="src/assets/mysql.png" alt="" />
              </div>
              <div className="">
                <a href="https://github.com/okto16/Library">
                  <img className="size-10" src="src/assets/github.png" alt="" />
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
          <div className="card bg-base-100 w-80 shadow-xl outline outline-1 rounded mb-10">
            <figure>
              <img
                src="https://oktorino.vercel.app/images/Screenshot (58).png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Redesign Landing Page</h2>
              <p>
                This Project from PBI(Project Based Intrenship) Qwords, and i
                make it with React JSX, Laravel, and Tailwindcss
              </p>
            </div>
            <div className="flex justify-around">
              <div className="flex gap-2">
                <img className="size-8" src="src/assets/laravel.png" alt="" />
                <img className="size-8" src="src/assets/react.png" alt="" />
                <img className="size-8" src="src/assets/tailwind.png" alt="" />
              </div>
              <div className="">
                <a href="https://github.com/okto16/Rakamin-Qwords">
                  <img className="size-10" src="src/assets/github.png" alt="" />
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
          <div className="card bg-base-100 w-80 shadow-xl outline outline-1 rounded mb-10">
            <figure>
              <img src="https://oktorino.vercel.app/images/3.jpg" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Web E-Commerce Toko Pupuk</h2>
              <p className="h-[92px]">
                This Project is final task from my thesis, and i make it with
                HTML, CSS, PHP, CI3, and Bootstrap
              </p>
            </div>
            <div className="flex justify-around">
              <div className="flex gap-2">
                <img className="size-8" src="src/assets/ci.png" alt="" />
                <img className="size-8" src="src/assets/bootstrap.png" alt="" />
                <img className="size-8" src="src/assets/mysql.png" alt="" />
              </div>
              <div className="">
                <a href="https://github.com/okto16/web-project-ecommerce">
                  <img className="size-10" src="src/assets/github.png" alt="" />
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
