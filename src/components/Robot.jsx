import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

export default function Robot() {
  const robotRef = useRef();

  const { scene } = useGLTF("/models/neyo.glb");

  useFrame((state, delta) => {
    if (!robotRef.current) return;

    // Smooth idle rotation
    robotRef.current.rotation.y += delta * 0.12;

    // Subtle mouse interaction
    robotRef.current.rotation.x = state.pointer.y * 0.025;
    robotRef.current.rotation.z = -state.pointer.x * 0.015;

    // Gentle floating motion
    robotRef.current.position.y =
      -1 + Math.sin(state.clock.elapsedTime * 1.2) * 0.03;
  });

  return (
    <primitive
      ref={robotRef}
      object={scene}
      position={[0, -1, 0]}
      scale={1}
    />
  );
}

useGLTF.preload("/models/neyo.glb");
