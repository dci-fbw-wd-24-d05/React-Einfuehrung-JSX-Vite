import "./App.css";

function App() {
  const person = {
    name: "John",
    age: 30,
  };

  const users = [
    {
      name: "Anna",
      age: 20,
    },
    {
      name: "Sophie",
      age: 40,
    },
  ];
  // Return darf nur ein element zurueck geben, entweder fragments oder ein element unser wahl
  return (
    <>
      {/* Fragments <></> */}
      <h1>Try JSX</h1>
      <p>name: {person.name}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
        nobis, ea quam officia alias consectetur sed adipisci quaerat quisquam
        voluptates eius minus nostrum ullam optio, quos eos tempora non enim?
      </p>

      {users.map((user) => {
        return (
          <div key={user.age}>
            <h2>{user.name}</h2>
            <p>age: {user.age}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
