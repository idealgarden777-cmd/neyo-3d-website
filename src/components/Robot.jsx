import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Robot() {
  const robotRef = useRef();
  const { scene } = useGLTF("/models/robot.glb");

  useFrame((state, delta) => {
    if (!robotRef.current) return;

    robotRef.current.rotation.y += delta * 0.15;

    robotRef.current.rotation.x =
      state.pointer.y * 0.05;

    robotRef.current.rotation.z =
      -state.pointer.x * 0.03;
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

useGLTF.preload("/models/robot.glb");
