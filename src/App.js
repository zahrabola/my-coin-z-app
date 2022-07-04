import {useState, useEffect} from "react";
import './App.css';
// https://api.coincap.io/v2/assets?limit=20
function App() {

const [cash, setCash] = useState([])


useEffect(() => {
  const fetchCash =  async () => {  
    const res = await fetch (`https://api.coincap.io/v2/assets?limit=20`)
    const data = await res.json()
    console.log(data.data)
    setCash(data.data)
  }
  fetchCash()
})


  return (
    <div className="App">
      <h1> Zahra's Crypro App </h1>
      <div className="appcoin">
        <article>Showing {cash.length} Coins</article>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Price ($USD)</th>
              <th>Symbol</th>
            </tr>
          </thead>
          <tbody>
            {cash.map(({ id, name, rank, priceUsd, symbol }) => (
              <tr className="row" key={id}>
                <td>{rank}</td>
                <td>{name}</td>
                <td>{priceUsd}</td>
                <td>{symbol}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="buttons">
          <button>Next</button>
          <button>Refresh</button>
        </div>
      </div>
    </div>
  );
}

export default App;
