import React from 'react'

export default function Checkbox() {
  return (
    
    <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" unchecked={true.toString()} />
  <label className="form-check-label" htmlFor="flexCheckChecked">
    Done
  </label>
</div>

  )
}
