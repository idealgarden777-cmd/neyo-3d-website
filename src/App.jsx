import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Robot from "./components/Robot";

function App() {
  return (
    <div className="app" style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 1.5, 5], fov: 45 }}>
        <ambientLight intensity={1} />

        <Environment preset="studio" />

        <Robot />

        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
