import React from 'react'

const Data = ({x,index}) => {
  return (
    <>
     <li  key={index}>{x}</li>
    </>
  )
}

export default Data