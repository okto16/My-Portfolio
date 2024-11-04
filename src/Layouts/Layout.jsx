import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
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
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
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
      className="relative min-h-screen w-full overflow-hidden bg-gray-950 text-gray-200"
      style={{ backgroundImage }}
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <header>
          <Navbar />
        </header>
        <main className="mt-8 sm:mt-12 lg:mt-16">
          <Outlet />
          <Analytics />
          <SpeedInsights />
        </main>
        <footer>
          <Footer />
        </footer>
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
