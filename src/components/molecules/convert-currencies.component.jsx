import React from 'react'
import CurrencyInput from "../atoms/currency-input/currency-input.component";
import CurrencySelect from "../atoms/currency-select/currency-select.component";

const ConvertCurrencies = (props) => {
  const { from, to, handleFromChange, handleToChange, handleCurrencyFromChange, handleCurrencyToChange, currenciesFrom, currenciesTo } = props
  return (
    <>
      <h1 className="d-flex justify-content-center mt-5 mb-5">Convert currencies</h1>
      <div className="d-flex justify-content-between w-25 h-100 m-auto gap-5 pt-3">
        <div className="w-100">
          <div className="mb-3">
            <CurrencySelect
              onChange={handleCurrencyFromChange}
              currencies={currenciesFrom}
            />
          </div>
          <CurrencyInput
            value={from}
            onChange={handleFromChange}
          />
        </div>
        <img src="/arrow.svg" alt="" />
        <div className="w-100">
          <div className="mb-3">
            <CurrencySelect
              onChange={handleCurrencyToChange}
              currencies={currenciesTo}
            />
          </div>
          <CurrencyInput
            value={to}
            onChange={handleToChange}
          />
        </div>

      </div>
      <p className="w-50 m-auto text-center mt-5">To convert values in the other direction, remove the values from input</p>
    </>
  )
}

export default ConvertCurrencies