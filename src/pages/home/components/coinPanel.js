import React, { useEffect, useState } from "react";
import { TrendingUp, TrendingDown } from "@material-ui/icons";

import {Styles} from './style/coinPanelStyle'

const CoinPanel = (props) => {
  const { coin, title, price, percentage, isUp } = props
  const [src, setSrc] = useState("")

  useEffect(() => {
    if (coin === "")
      setSrc("/image/empty_coin.png")
    else
      setSrc(coin)
  }, [coin])

  return (
    <Styles>
      <div className="coin-panel">
        <div className="main">
          <div className="coin">
            <img src={src} alt="coin" />
          </div>
          <div className="content">
            <div className="coin-title">{ title }</div>
            <div className="price">${price}</div>
          </div>
        </div>
        <div className="status">
          {isUp ?
            <TrendingUp className="status-icon" /> :
            <TrendingDown className="status-icon" />
          }
          <div className="percentage">{percentage}%</div>
        </div>
      </div>
    </Styles>
  )
}
export default CoinPanel
