import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function addNeyoGlow(scene) {
  scene.traverse((child) => {
    if (!child.isMesh || !child.material) return;

    const name = child.name.toLowerCase();

    if (
      name.includes("eye") ||
      name.includes("visor") ||
      name.includes("light") ||
      name.includes("led")
    ) {
      child.material = child.material.clone();

      child.material.emissive = new THREE.Color("#00eaff");
      child.material.emissiveIntensity = 2.5;

      child.material.needsUpdate = true;
    }
  });
}

export default function Robot() {
  const robotRef = useRef();

  const { scene } = useGLTF("/models/neyo.glb");

  addNeyoGlow(scene);

  const targetRotation = useRef({
    x: 0,
    y: 0,
  });

  const targetPosition = useRef({
    x: 0,
    y: -1,
  });

  useFrame((state, delta) => {
    if (!robotRef.current) return;

    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    targetRotation.current.y = mouseX * 0.18;
    targetRotation.current.x = -mouseY * 0.08;

    targetPosition.current.x = mouseX * 0.12;

    targetPosition.current.y =
      -1 + Math.sin(state.clock.elapsedTime * 1.2) * 0.025;

    robotRef.current.rotation.y = THREE.MathUtils.lerp(
      robotRef.current.rotation.y,
      targetRotation.current.y,
      1 - Math.exp(-4 * delta)
    );

    robotRef.current.rotation.x = THREE.MathUtils.lerp(
      robotRef.current.rotation.x,
      targetRotation.current.x,
      1 - Math.exp(-4 * delta)
    );

    robotRef.current.position.x = THREE.MathUtils.lerp(
      robotRef.current.position.x,
      targetPosition.current.x,
      1 - Math.exp(-3 * delta)
    );

    robotRef.current.position.y = THREE.MathUtils.lerp(
      robotRef.current.position.y,
      targetPosition.current.y,
      1 - Math.exp(-3 * delta)
    );
  });

  return (
    <primitive
      ref={robotRef}
      object={scene}
      scale={1}
      position={[0, -1, 0]}
    />
  );
}

useGLTF.preload("/models/neyo.glb");
