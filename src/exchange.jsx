import axios from "axios";
import React, { useEffect, useState } from "react";

export const Exchange = () => {
  const [rates, setRates] = useState([]);
  const [from, setFrom] = useState(0)
  const [to, setTo] = useState(0);
  const [currencyFrom, setCurrencyFrom] = useState('UAH')
  const [currencyTo, setCurrencyTo] = useState('USD')


  const fetchData = () => {
    axios.get("https://open.er-api.com/v6/latest/GBP").then((r) => {
      setRates(r.data.rates);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(from);

  const validateInput = (event, setState) => {
    const result = Number(event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1'))
    setState(result)
  }

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg bg-primary text-light align-items-center">
          <a className="navbar-brand text-light px-4 fs-4" href="/">
            Exchange rates
          </a>
          <div className="px-2">USD {(rates.UAH / rates.USD).toFixed(2)}</div>
          <div className="px-2">EUR {(rates.UAH / rates.EUR).toFixed(2)}</div>
        </nav>
      </header>
      <h1 className="d-flex justify-content-center mt-5 mb-5">Convert currencies</h1>
      <div className="d-flex justify-content-between w-25 h-100 m-auto gap-5 pt-3">
        <div className="w-100">
          <div className="mb-3">
            <select
              value={currencyFrom}
              onChange={e => setCurrencyFrom(e.target.value)}
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example">
              <option value="UAH">UAH</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
          <input
            disabled={to !== 0}
            className="form-control"
            value={to !== 0 ? (to * (rates[currencyFrom] / rates[currencyTo])).toFixed(2) : from}
            onInput={e => setFrom(e.target.value)}
            onChange={e => validateInput(e, setFrom)}
            type="text"
          />
        </div>
        <img src="/arrow.svg" alt="" />
        <div className="w-100">
          <div className="mb-3">
            <select value={currencyTo}
              onChange={e => setCurrencyTo(e.target.value)}
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example">
              <option value="UAH">UAH</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
          <input
            disabled={from !== 0}
            className="form-control"
            value={from !== 0 ? (from * (rates[currencyTo] / rates[currencyFrom])).toFixed(2) : to}
            onInput={e => setTo(e.target.value)}
            onChange={e => validateInput(e, setTo)}
            type="text"
          /></div>

      </div>
      <p className="w-50 m-auto text-center mt-5">To convert values in the other direction, remove the values from the current input</p>
    </div >
  );
};

export default Exchange;
