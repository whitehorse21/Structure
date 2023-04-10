import React from 'react'

import { Styles } from './style/smallButtonStyle'

const SmallButton = (props) => {
  const {text, ...rest} = props

  return (
    <Styles>
      <div className='small-button' {...rest}>
        {text}
      </div>
    </Styles>
  )
}
export default SmallButton
