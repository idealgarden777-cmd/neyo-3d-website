import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Robot from "./Robot";

export default function Scene() {
  return (
    <Canvas
      camera={{
        position: [0, 0.8, 4.8],
        fov: 38,
      }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        powerPreference: "high-performance",
      }}
      shadows
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {/* Soft base light */}
      <ambientLight intensity={0.8} />

      {/* Main cinematic light */}
      <directionalLight
        position={[4, 6, 4]}
        intensity={3}
        castShadow
      />

      {/* Left rim light */}
      <pointLight
        position={[-4, 3, 2]}
        intensity={18}
        distance={10}
      />

      {/* Right rim light */}
      <pointLight
        position={[4, 2, -2]}
        intensity={12}
        distance={10}
      />

      {/* Soft environment reflections */}
      <Environment preset="studio" />

      <Robot />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableDamping
        dampingFactor={0.08}
        minPolarAngle={Math.PI / 2.4}
        maxPolarAngle={Math.PI / 1.8}
      />
    </Canvas>
  );
}
