import React from 'react'

import { Styles } from '../style/tabStyle';

const Tabs = (props) => {
  const { tab, setTab } = props
  
  return (
    <Styles>
      <div className="tabs">
        <div className={`tab${tab === "leaders" ? " active" : ""}`} onClick={() => setTab('leaders')}>
          Leaders
        </div>
        <div className={`tab${tab === "stocks" ? " active" : ""}`} onClick={() => setTab('stocks')}>
          Stocks
        </div>
        <div className={`tab${tab === "crypto" ? " active" : ""}`} onClick={() => setTab('crypto')}>
          Crypto
        </div>
        <div className={`tab${tab === "options" ? " active" : ""}`} onClick={() => setTab('options')}>
          Options (coming soon)
        </div>
      </div>
    </Styles>
  );
}
export default Tabs
