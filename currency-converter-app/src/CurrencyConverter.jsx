import { useState, useMemo } from "react";

export default function CurrencyConverter() {
  const mapping = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7,
  };
  const [firstCurrency, setFirstCurrency] = useState(Object.keys(mapping)[0]);
  const [secondCurrency, setSecondCurrency] = useState(Object.keys(mapping)[1]);
  const [amount, setAmount] = useState(0);

  const convertedMapping = useMemo(() => {
    let coef = amount / mapping[firstCurrency];
    return Object.fromEntries(
      Object.entries(mapping).map(([currency, value]) => [
        currency,
        (value * coef).toFixed(2),
      ]),
    );
  }, [amount, firstCurrency]);

  return (
    <div className="container">
      <h1>Currency Converter</h1>
      <h3>
        {firstCurrency} to {secondCurrency} Conversion
      </h3>
      <div className="form">
        <label>
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Start Currency:
          <select
            value={firstCurrency}
            onChange={(e) => {
              setFirstCurrency(e.target.value);
            }}
          >
            {Object.keys(mapping).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
        <label>
          Target Currency:
          <select
            value={secondCurrency}
            onChange={(e) => {
              setSecondCurrency(e.target.value);
            }}
          >
            {Object.keys(mapping).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
        <div className="divider">
          Converted Amount: {convertedMapping[secondCurrency]} {secondCurrency}
        </div>
      </div>
    </div>
  );
}
