import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);

  const onChange = (event) => {
    setMoney(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((respone) => respone.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/* ``는 문자열 내에서 표현식을 포함시킬 때 사용된다. */}
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading</strong>
      ) : (
        <div>
          <input type='number' value={money} onChange={onChange} />
          <select>
            {coins.map((coin) => (
              <option>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <select>
            {coins.map((coin) => (
              <option>
                {coin.name} ({coin.symbol}): {money / coin.quotes.USD.price}{" "}
                Coins
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default App;
