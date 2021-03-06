import {useState, useEffect} from "react";
import './App.css';
// https://api.coincap.io/v2/assets?limit=20
function App() {

const [cash, setCash] = useState([])
const[limit, setLimit] = useState(20)


useEffect(() => {
  const fetchCash =  async () => {  
    const res = await fetch (`https://api.coincap.io/v2/assets?limit=${limit}`)
    const data = await res.json()
    console.log(data.data)
    setCash(data.data)
  }
  fetchCash()
}, [limit])

const handleRefresh =() => {
  setLimit(20)
  window.scroll(0,0)
}
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
                <td>${parseFloat(priceUsd).toFixed(2)}</td>
                <td>{symbol}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="buttons">
          <button onClick={() => setLimit(limit + 20)}>Next</button>
          <button nClick={handleRefresh}>Refresh</button>
        </div>
      </div>
    </div>
  );
}

export default App;
