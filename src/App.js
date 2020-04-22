import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>How will you use your points?</h1>
      </header>
      <div className="App-inputs-container">
        <input
          type="text"
          inputMode="numeric"
          pattern="\d*"
          name="points"
          placeholder="Your points"
        />
        <input
          type="date"
          name="dates"
          placeholder="Your dates"
        />
      </div>
    </div>
  );
}

export default App;
