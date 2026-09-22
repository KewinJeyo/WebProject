import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");
  const [result, setResult] = useState("");

  function submitForm(e) {
    e.preventDefault();

    if (marks >= 40) {
      setResult("Pass");
    } else {
      setResult("Fail");
    }
  }

  return (
    <div>
      <h1>Student Result</h1>
      <p>Enter your Name and Mark Below</p>

      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

         <input
          type="number"
          placeholder="Enter Marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          min="0"
          max="100"
          required
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {result && (
        <div>
          <h2>Student Details</h2>
          <p>Name: {name}</p>
          <p>Marks: {marks}</p>
          <p id="result">Result: {result}</p>
        </div>
      )}
    </div>
  );
}

export default App;