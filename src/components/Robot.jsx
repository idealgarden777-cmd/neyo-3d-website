import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

export default function Robot() {
  const { scene } = useGLTF("/models/robot.glb");
  const robotRef = useRef();

  useFrame((state, delta) => {
    if (robotRef.current) {
      robotRef.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <primitive
      ref={robotRef}
      object={scene}
      scale={1.8}
      position={[0, -1.4, 0]}
    />
  );
}

useGLTF.preload("/models/robot.glb");
