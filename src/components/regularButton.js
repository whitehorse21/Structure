import React from 'react'

import { Styles } from './style/regularButtonStyle'

const RegularButton = (props) => {
  const {text, isFull, smFull, xsFull, ...rest} = props

  return (
    <Styles>
      <div className={`regular-button ${isFull?'':'fit-button'} ${smFull?'sm-full-button':''} ${xsFull?'xs-full-button':''}`} {...rest}>
        {text}
      </div>
    </Styles>
  )
}
export default RegularButton
