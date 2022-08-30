import axios from "axios";
import React, { useEffect, useState } from "react";
import ConvertCurrencies from "../molecules/convert-currencies.component";

export const Exchange = () => {
  const currenciesFrom = [
    {
      id: 1,
      value: 'USD',
    },
    {
      id: 2,
      value: 'UAH',
    },
    {
      id: 3,
      value: 'EUR',
    },
  ]
  const currenciesTo = [
    {
      id: 1,
      value: 'UAH',
    },
    {
      id: 2,
      value: 'PLN',
    },
    {
      id: 3,
      value: 'EUR',
    },
  ]
  const [rates, setRates] = useState([]);
  const [from, setFrom] = useState(Number)
  const [to, setTo] = useState(Number);
  const [currencyFrom, setCurrencyFrom] = useState(currenciesFrom[0].value)
  const [currencyTo, setCurrencyTo] = useState(currenciesTo[0].value)


  const fetchData = () => {
    axios.get("https://open.er-api.com/v6/latest").then((r) => {
      setRates(r.data.rates);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!!rates) {
      const init = () => {
        handleFromChange(1);
      }
      init();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rates]);


  const formatNumber = (number) => {
    return number.toFixed(2)
  }

  const handleFromChange = (from) => {
    setTo(formatNumber(from * (rates[currencyTo] / rates[currencyFrom])))
    setFrom(from)
  }

  const handleToChange = (to) => {
    setFrom(formatNumber(to * (rates[currencyFrom] / rates[currencyTo])))
    setTo(to)
  }

  const handleCurrencyFromChange = (currencyFrom) => {
    setTo(formatNumber(from * (rates[currencyTo] / rates[currencyFrom])))
    setCurrencyFrom(currencyFrom)
  }

  const handleCurrencyToChange = (currencyTo) => {
    setFrom(formatNumber(to * (rates[currencyFrom] / rates[currencyTo])))
    setCurrencyTo(currencyTo)
  }

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg bg-primary text-light align-items-center">
          <a className="navbar-brand text-light px-4 fs-4" href="/">
            Exchange rates
          </a>
          <div className="px-2">USD {formatNumber(rates.UAH / rates.USD)}</div>
          <div className="px-2">EUR {formatNumber(rates.UAH / rates.EUR)}</div>
        </nav>
      </header>
      <ConvertCurrencies
        from={from}
        to={to}
        handleFromChange={handleFromChange}
        handleToChange={handleToChange}
        handleCurrencyFromChange={handleCurrencyFromChange}
        handleCurrencyToChange={handleCurrencyToChange}
        currenciesFrom={currenciesFrom}
        currenciesTo={currenciesTo}
      />
    </div >
  );
};

export default Exchange;
