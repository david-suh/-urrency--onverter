import React from 'react'

const CurrencySelect = (props) => {
  const { className, onChange, currencies } = props
  return (
    <select
      className={`form-select ${className || ''}`}
      onChange={e => onChange(e.target.value)}
    >
      {currencies.map((currency) => (
        <option key={currency.id} value={currency.value}>{currency.value}</option>
      ))}


    </select>
  )
}

export default CurrencySelect