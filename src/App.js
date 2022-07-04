import {useState, useEffect} from "react";
import './App.css';
// https://api.coincap.io/v2/assets?limit=20
function App() {
  return (
    <div className="App">
      <h1> Zahra's Crypro App </h1>
      <div className="appcoin">
        <article></article>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default App;
