import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ width: "100%", height: "100vh" }}
    >
      <ambientLight intensity={2} />

      <mesh>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="orange" />
      </mesh>

      <OrbitControls />
    </Canvas>
  );
}
