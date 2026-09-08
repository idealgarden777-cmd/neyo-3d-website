import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Robot from "./Robot";

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 5], fov: 45 }}
      gl={{ antialias: true }}
    >
      <ambientLight intensity={1} />

      <directionalLight
        position={[3, 5, 3]}
        intensity={2}
      />

      <Environment preset="studio" />

      <Robot />

      <OrbitControls
        enablePan={false}
        minDistance={2}
        maxDistance={8}
      />
    </Canvas>
  );
}
