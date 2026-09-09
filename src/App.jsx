import Scene from "./components/Scene";

export default function App() {
  return (
    <main className="hero">
      <div className="hero-content">
        <div className="eyebrow">NEYO · THE NEXT INTELLIGENCE</div>

        <h1>
          Meet
          <span>Neyo.</span>
        </h1>

        <p>
          Intelligence designed to move with you.
          Create, explore and experience a new generation of AI.
        </p>

        <div className="hero-actions">
          <button className="primary-btn">Meet Neyo</button>
          <button className="secondary-btn">Explore</button>
        </div>
      </div>

      <div className="hero-3d">
        <Scene />
      </div>

      <div className="hero-glow" />
    </main>
  );
}
