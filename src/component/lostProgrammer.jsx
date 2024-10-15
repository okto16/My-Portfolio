/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import  { Suspense, useRef } from "react";
import { Canvas, } from "@react-three/fiber";
import { OrbitControls, useGLTF, } from "@react-three/drei";

function AnimatedModel(props) {
  const group = useRef();
  // Load the model with animations
  const { scene } = useGLTF("/lost_programmer.glb");

  // Hook to control the animation


  // Play the animation when the component is mounted
 
  return (
    <primitive
      ref={group}
      object={scene}
      scale={props.scale || [1, 1, 1]}
      position={props.position || [0, 0, 0]}
    />
  );
}

function ThreeDViewerWithAnimation() {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 60 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <AnimatedModel scale={[1, 1, 1]} />
      </Suspense>
      <OrbitControls enablePan={true} enableDamping={true} enableZoom={true} enableRotate={true} />
    </Canvas>
  );
}

export default ThreeDViewerWithAnimation;
