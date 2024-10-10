import React from "react";
import Typed from "typed.js";
import Lanyard from "./Lanyard";
import Tag from "./Tag";
const Home = () => {
  // Create reference to store the DOM element containing the animation
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
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <h1>
        <span
          className="typed font-medium uppercase text-lg lg:text-2xl"
          ref={el}
        />
        <div className="flex justify-center">
          <div className="size-[10rem] lg:size-[40rem]">
            <Tag />
          </div>
        </div>
      </h1>
    </div>
  );
};
export default Home;
