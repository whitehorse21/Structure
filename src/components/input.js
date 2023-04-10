import React from 'react'

import { Styles } from './style/inputStyle'

const Input = (props) => {
  const {...rest} = props

  return (
    <Styles>
      <input {...rest} />
    </Styles>
  )
}
export default Input
