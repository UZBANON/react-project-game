import React, {useState} from 'react'

export const ToggleBtn = () => {
    const [toggleBtn, setToggleBtn] = useState(false)
  return (
    <>
        <button
        onClick={() => setToggleBtn(!toggleBtn)}
        className="btn btn-secondary my-4">Toggle Btn</button>
        {toggleBtn
          ? <p className="lead">
            YouTube Content
          </p>
          : null
        }
    </>
  )
}
