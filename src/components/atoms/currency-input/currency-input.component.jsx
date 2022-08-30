import React from 'react'

const CurrencyInput = (props) => {
  const { className, value, onChange } = props
  return (
    <input
      className={`form-control ${className || ''}`}
      value={value}
      onChange={e => onChange(e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1'))}
      type="text"
    />
  )
}

export default CurrencyInput