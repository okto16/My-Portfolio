import React from "react";
import Typed from "typed.js";
import Tag from "./Tag";
const Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<i>Halo dan selamat datang di portofolio saya!.</i>",
        "Jelajahi karya saya di sini, mulai dari proyek-proyek pengembangan web hingga aplikasi yang scalable dan responsif.",
        "jangan ragu untuk menghubungi jika Anda membutuhkan kolaborasi untuk membangun sesuatu yang luar biasa.",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="text-center">
      <span 
        ref={el}
        className="typed font-medium uppercase text-sm sm:text-lg lg:text-2xl"
      />
      <div className="flex justify-center mt-8">
        <div className="w-full h-full">
          <Tag />
        </div>
      </div>
    </div>
  );
};
export default Home;
