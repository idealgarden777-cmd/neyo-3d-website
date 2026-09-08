import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

export default function Robot() {
  const { scene } = useGLTF("/models/robot.glb");
  const robotRef = useRef();

  useFrame((state, delta) => {
    if (!robotRef.current) return;

    robotRef.current.rotation.y += delta * 0.18;

    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    robotRef.current.rotation.x = mouseY * 0.08;
    robotRef.current.rotation.z = -mouseX * 0.04;
    robotRef.current.position.x = mouseX * 0.15;
    robotRef.current.position.y = -1.4 + mouseY * 0.08;
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
