import seaDiving from "./assets/sea-diving.avif";

function App() {
  return (
    <div>
      <h1>Image trying</h1>
      <img
        src="https://images.unsplash.com/photo-1682687981630-cefe9cd73072?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="sea diving"
      />
      <img src={seaDiving} alt="" />
    </div>
  );
}

export default App;
