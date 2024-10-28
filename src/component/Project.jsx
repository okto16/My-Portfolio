import { motion } from "framer-motion";
import dashboard from "../assets/dashboard.png";
import github from "../assets/github.png";
import laravel from "../assets/laravel.png";
import vue from "../assets/vue.png";
import tailwind from "../assets/tailwind.png";
import mysql from "../assets/mysql.png";
import bootstrap from "../assets/bootstrap.png";
import ci from "../assets/ci.png";
import php from "../assets/php.png";
import react from "../assets/react.png";

const Project = () => {
  const projects = [
    {
      title: "Pet Shop",
      description: "Make a website ecommerce pet shop with Laravel and Vue Js",
      image: dashboard,
      tools: [laravel, vue, tailwind, mysql],
      github: "https://github.com/okto16/Pet-Shop",
      delay: 1.8,
    },
    {
      title: "E-Commerce Midtrans API Sales",
      description:
        "Make a website ecommerce with Laravel and Vue Js and Midtrans API for payment",
      image: dashboard,
      tools: [laravel, vue, tailwind, mysql],
      github: "https://github.com/okto16/midtrans-api-sales",
      delay: 1.6,
    },
    {
      title: "Library",
      description:
        "  This Project is final from private class in eduwork, and i make it with HTML, PHP, Laravel, Yajra, and Bootstrap",
      image: dashboard,
      tools: [laravel, php, bootstrap, mysql],
      github: "https://github.com/okto16/Library",
      delay: 1.4,
    },
    {
      title: "Redesign Landing ",
      description:
        "This Project from PBI(Project Based Intrenship) Qwords, and i make it with React JSX, Laravel, and Tailwindcss",
      image: dashboard,
      tools: [laravel, react, tailwind, mysql],
      github: "https://github.com/okto16/Rakamin-Qwords",
      delay: 1.8,
    },
    {
      title: "Web E-Commerce Toko Pupuk",
      description:
        "This Project is final task from my thesis, and i make it with HTML, CSS, PHP, CI3, and Bootstrap",
      image: dashboard,
      tools: [bootstrap, ci, php, mysql],
      github: "https://github.com/okto16/web-project-ecommerce",
      delay: 1.6,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: project.delay,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <div className="card bg-base-100 shadow-xl outline outline-1 rounded overflow-hidden h-full">
              <figure className="relative aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </figure>

              <div className="card-body p-4 md:p-6">
                <h2 className="card-title text-sm md:text-lg lg:text-xl mb-2">
                  {project.title}
                </h2>
                <p className="text-xs md:text-sm lg:text-base mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center mt-auto">
                  <div className="flex gap-2 md:gap-3">
                    {project.tools.map((tool, toolIndex) => (
                      <img
                        key={toolIndex}
                        className="w-6 h-6 md:w-8 md:h-8"
                        src={tool}
                        alt="tool"
                      />
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <img
                      className="w-6 h-6 md:w-8 md:h-8"
                      src={github}
                      alt="GitHub"
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
