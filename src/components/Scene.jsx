import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Robot from "./Robot";

export default function Scene() {
  return (
    <Canvas
      camera={{
        position: [0, 1.2, 5],
        fov: 40,
      }}
      gl={{
        antialias: true,
      }}
      shadows
    >
      <ambientLight intensity={0.35} />

      <directionalLight
        position={[4, 6, 4]}
        intensity={2.5}
        castShadow
      />

      <pointLight
        position={[-4, 2, 3]}
        intensity={25}
        distance={10}
      />

      <pointLight
        position={[4, 1, -2]}
        intensity={15}
        distance={8}
      />

      <Environment preset="city" />

      <Robot />

      <OrbitControls
        enablePan={false}
        minDistance={3}
        maxDistance={7}
        target={[0, 0, 0]}
      />
    </Canvas>
  );
}
