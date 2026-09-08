import { useGLTF } from "@react-three/drei";

export default function Robot() {
  const { scene } = useGLTF("/models/robot.glb");

  return (
    <primitive
      object={scene}
      scale={1.8}
      position={[0, -1.4, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

useGLTF.preload("/models/robot.glb");
