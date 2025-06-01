import React from 'react'
import { useState } from 'react'

const ArrayTest = () => {
    const [array, setarray] = useState(new Array(4).fill(""))
    function addToArray(img) {
        if (img) {
            setarray([img,...array])
        }
    }
  return (
    <div>ArrayTest</div>
  )
}

export default ArrayTest