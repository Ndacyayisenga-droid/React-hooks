import React from "react";
import { useState } from 'react';

function App() {
  const [ dogs, setDogs ] = useState(0)
  const [ cats, setCats ] = useState(0)

  return (
    <main>
      <section>
        <div>dogs: {dogs}</div>
        <button onClick={() => setDogs(dogs + 1)}>More</button>
        <button onClick={() => setDogs(dogs - 1)}>Less</button>
      </section>

      <section>
        <div>cats: {cats}</div>
        <button onClick={() => setCats(cats + 1)}>More</button>
        <button onClick={() => setCats(cats - 1)}>Less</button>
      </section>
    </main>
  );
}

export default App;
