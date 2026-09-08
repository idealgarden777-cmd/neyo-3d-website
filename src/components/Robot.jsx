import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

export default function Robot() {
  const robotRef = useRef();
  const { scene } = useGLTF("/models/robot.glb");

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = child.material.clone();

      child.material.color = new THREE.Color("#d9d9d9");
      child.material.metalness = 0.75;
      child.material.roughness = 0.25;

      child.material.needsUpdate = true;
    }
  });

  useFrame((state, delta) => {
    if (!robotRef.current) return;

    robotRef.current.rotation.y += delta * 0.15;

    robotRef.current.rotation.x = state.pointer.y * 0.04;
    robotRef.current.rotation.z = -state.pointer.x * 0.025;
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
