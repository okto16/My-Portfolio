/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";

function AnimatedModel(props) {
  const group = useRef();
  // Load the model with animations
  const { scene, animations } = useGLTF("/gundam.glb");

  // Hook to control the animation
  const { actions } = useAnimations(animations, group);

  // Play the animation when the component is mounted
  React.useEffect(() => {
    if (actions) {
      actions["Draw_Javelin"].play(); // Replace 'AnimationName' with the actual name of the animation
      console.log(actions);
    }
  }, [actions]);

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
      <OrbitControls enablePan={true} enableDamping={true} enableZoom={false} enableRotate={true} />
    </Canvas>
  );
}

export default ThreeDViewerWithAnimation;
