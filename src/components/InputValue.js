import React, {useState} from 'react'

export const InputValue = () => {
    const [value, setValue] = useState("Sam")
  return (
    <>
        <p>Value: {value} </p>
        <input 
        type="text" 
        className="form-control"
        value={value}
        onChange={event => setValue(event.target.value)} />
    </>
  )
}
