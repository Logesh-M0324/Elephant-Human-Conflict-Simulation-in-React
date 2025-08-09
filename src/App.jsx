import ElephantScene from "./ElephantMap";

function App() {
  return (
    <div style={{ height: "100vh", background: "black", color: "white" }}>
      <h1 style={{ textAlign: "center", position: "absolute", width: "100%", zIndex: 10 }}>
        🐘 3D Elephant Tracking with Sensors & Triangulation
      </h1>
      <ElephantScene />
    </div>
  );
}

export default App;
