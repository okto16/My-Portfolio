import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
const About = () => {
  const el = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        '<i> Nama saya Oktorino Bagas Aji, S.Kom, Saya lahir di Klaten, Jawa Tengah, Indonesia. Pada tahun 2000 Saya seorang web developer yang lulus dari Amikom Yogyakarta pada tahun 2024 dengan gelar Sarjana Komputer. Di jurusan Sistem Informasi, saya menyelesaikan skripsi yang berjudul "Sistem Informasi Berbasis Web pada Kios Bagas Tani," di mana saya mengembangkan platform e-commerce untuk kios tersebut.</i><br/><br/>Saat ini, saya bekerja di Quantum Infra Solusindo sebagai Research and Development, di mana saya terlibat dalam penelitian dan pengembangan solusi teknologi untuk Rumah Sakit. Saya memiliki keahlian dalam berbagai bahasa pemrograman dan framework, termasuk JavaScript, dan C#, yang saya gunakan untuk menciptakan aplikasi web <br/><br/>Di luar dunia teknologi, saya memiliki hobi bermain bola, bermain game, dan menikmati musik. Saya percaya bahwa keseimbangan antara pekerjaan dan hobi sangat penting untuk menjaga kreativitas dan semangat.',
      ],
      showCursor: false,
      typeSpeed: 5,
      fadeOut: true,
      fadeOutDelay: 500,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div>
        <div className="flex flex-col items-center mb-10">
          <div className="flex text-center space-x-2">
            <h1 className="text-3xl font-bold text-blue-500 mb-5">About</h1>
            <h1 className="text-3xl font-bold mb-5">Me</h1>
          </div>
          <div ref={scrollRef}>
            <motion.div
              className="timeline-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, color: "white" }}
              exit={{ opacity: 0, color: "black" }}
              viewport={{ once: false }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <p className="text-lg font-sm" ref={el}></p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex text-3xl font-bold mb-5 text-center space-x-2 justify-center">
        <h3>My</h3>
        <h3 className="text-blue-500">Journey</h3>
      </div>
      <ul className="timeline timeline-vertical mb-12">
        <li ref={scrollRef}>
          <motion.div
            className="timeline-start"
            whileHover={{ scale: 1.5 }}
            initial={{ opacity: 0, rotateY: 180 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 180 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="timeline-start timeline-box">
              <h3>2019 - 2023</h3>
              <h2 className="font-bold">
                Started my study at University Amikom Yogyakarta
              </h2>
              <p>
                Attended at University Amikom Yogyakarta. Started studying
                coding with HTML, CSS, Javascript.
              </p>
            </div>
          </motion.div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <hr />
        </li>
        <li ref={scrollRef}>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <motion.div
            className="timeline-end"
            whileHover={{ scale: 1.5 }}
            initial={{ opacity: 0, rotateY: 180 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 180 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="timeline-end timeline-box">
              {" "}
              <h3>2023</h3>
              <h2 className="font-bold">Intrenship as fullstack developer</h2>
              <p>
                Practice as fullstack developer at PBI (Project Based
                Intrenship) on Rakamin x Qwords in 1 month and learning basic
                backend and Final Project is Redesign Landing Page.
              </p>
            </div>
          </motion.div>
          <hr />
        </li>
        <li ref={scrollRef}>
          <hr />
          <motion.div
            className="timeline-start"
            whileHover={{ scale: 1.5 }}
            initial={{ opacity: 0, rotateY: 180 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 180 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="timeline-start timeline-box">
              <h3>2023</h3>
              <h2 className="font-bold">Intrenship as fullstack developer</h2>
              <p>
                Practice as fullstack developer at PBI (Project Based
                Intrenship) on Rakamin x Btpn in 1 month and learning basic
                backend Golang and the Final Project is Rest Api.
              </p>
            </div>
          </motion.div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <hr />
        </li>
        <li ref={scrollRef}>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <motion.div
            className="timeline-end"
            whileHover={{ scale: 1.5 }}
            initial={{ opacity: 0, rotateY: 180 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 180 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="timeline-end timeline-box">
              <h3>2024 - Present</h3>
              <h2 className="font-bold">
                Work as R&D in Quantum Infra Solusindo
              </h2>
              <p>
                Build Medical Technology for Clinic and Bug Fixing in Medinfrans
                With C# and .NET.
              </p>
            </div>
          </motion.div>
          <hr />
        </li>
      </ul>
      <div className="text-3xl text-center flex gap-2 justify-center font-bold mb-5">
        <h3 className="text-blue-500">My</h3>
        <h3> Location</h3>
      </div>
      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63458.97777767916!2d106.57252978369543!3d-6.239184524263536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fc117cded849%3A0x93c5e10636bfc9e7!2sKec.%20Klp.%20Dua%2C%20Kabupaten%20Tangerang%2C%20Banten!5e0!3m2!1sid!2sid!4v1727105030572!5m2!1sid!2sid"
          width="800"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>
    </>
  );
};
export default About;
