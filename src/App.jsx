import seaDiving from "./assets/sea-diving.avif";
import "./App.css";
function App() {
  return (
    <>
      <h1>Image trying</h1>
      {/* Wenn das Image external ist, kann ein Link für das Image angewendet werden. */}
      <div className="image">
        <img
          src="https://images.unsplash.com/photo-1682687981630-cefe9cd73072?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="sea diving"
        />
      </div>
      {/* Wenn das Image lokal ist, muss es importiet werden */}
      <div className="image">
        <img src={seaDiving} alt="" />
      </div>
    </>
  );
}

export default App;
