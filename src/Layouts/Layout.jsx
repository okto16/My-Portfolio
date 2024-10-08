import Footer from "../component/Footer";
import Navbar from "../component/navbar";
import {
  animate,
  useMotionTemplate,
  useMotionValue,
  motion,
} from "framer-motion";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const Layout = () => {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%,#020617 50%, ${color})`;
  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  });
  return (
    <motion.section
      className="relative min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200 "
      style={{
        backgroundImage: backgroundImage,
      }}
    >
      <div className="relative px-32 container z-10">
        <Navbar />
        <div className="content mt-12">
          <Outlet />
        </div>
        <Footer />
      </div>
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default Layout;
