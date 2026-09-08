import Scene from "./components/Scene";

function App() {
  return (
    <main className="hero">
      <div className="hero-content">
        <div className="eyebrow">NEYO • INTELLIGENCE, REIMAGINED</div>

        <h1>
          Meet the future
          <span>of AI.</span>
        </h1>

        <p>
          A next-generation AI companion designed to think, create,
          and move with you.
        </p>

        <div className="hero-actions">
          <button className="primary-btn">Meet Neyo</button>
          <button className="secondary-btn">Explore</button>
        </div>
      </div>

      <div className="hero-3d">
        <Scene />
      </div>
    </main>
  );
}

export default App;
