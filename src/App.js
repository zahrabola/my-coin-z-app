import {useState, useEffect} from "react";
import './App.css';
// https://api.coincap.io/v2/assets?limit=20
function App() {
  return (
    <div className="App">
      <h1> Zahra's Crypro App </h1>
      <div className="appcoin">
        <article>Showing Coins</article>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Price $USD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Bitcoin</td>
              <td>$30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
