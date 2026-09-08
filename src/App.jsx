import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

function App() {
  return (
    <div className="app">
      <Canvas camera={{ position: [0, 1.5, 5], fov: 45 }}>
        <ambientLight intensity={1} />

        <Environment preset="studio" />

        <OrbitControls />

        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
