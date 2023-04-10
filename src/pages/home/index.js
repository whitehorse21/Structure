import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { CheckCircleOutline, Telegram, Twitter } from "@material-ui/icons";

import { Styles } from '../style/homeStyle'
import Nav from '../nav'
import PhoneRectangle from '../../components/phoneRectangle'
import Input from '../../components/input'
import Select from '../../components/select';
import RegularButton from '../../components/regularButton'
import Tabs from './tabs'
import Leaders from './leaders'
import Stocks from './stocks'
import Crypto from './crypto'
import Option from './options'

const Home = () => {
  const [tab, setTab] = useState('leaders')
  const [phonekey, setPhoneKey] = useState("AU +61");
  const [phone, setPhone] = useState('')
  const [phoneEmpty, setPhoneEmpty] = useState(false)
  const phoneKeys = [
    'AU +61',
    'BR +55',
    'GB +44',
    'IN +91',
    'MX +52',
    'US +1'
  ]

  const handleSendLink = () => {
    if (phone === '')
      setPhoneEmpty(true)
    else
      setPhoneEmpty(false)
  }
  return (
    <>
      <Nav />
      <Styles>
        <Grid container className="sign-up">
          <Grid item md={7} xs={12} className="content">
            <div className="title">Buy stocks with crypto</div>
            <div className="description">
              No market closes. No trading fees. All the stocks and crypto coins
              you love.
            </div>
            <div className="sign-up-form">
              <div className="label">Ready to start trading?</div>
              <div className="form-controls">
                <div className="control-item">
                  <Select item={phonekey} items={phoneKeys} setItem={setPhoneKey} xsFull={true} />
                </div>
                <div className="control-item">
                  <Input className={`${phoneEmpty?'error':''}`} placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} onBlur={() => setPhoneEmpty(false)} />
                </div>
                <div className="control-item">
                  <RegularButton text="Send link" isFull={true} onClick={handleSendLink} />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item md={5} className="rectangle">
            <PhoneRectangle />
          </Grid>
        </Grid>
        <div className="assets">
          <Tabs tab={tab} setTab={setTab} />
          {tab === "leaders" ? (
            <Leaders />
          ) : tab === "stocks" ? (
            <Stocks />
          ) : tab === "crypto" ? (
            <Crypto />
          ) : tab === "options" ? (
            <Option />
          ) : (
            ""
          )}
        </div>
        <div className="claim">
          <div className="main">
            <img
              className="image-computer"
              src="/image/claim_computer.png"
              alt=""
            />
            <img className="image-pad" src="/image/claim_pad.png" alt="" />
            <img
              className="image-mobile"
              src="/image/claim_mobile.png"
              alt=""
            />
            <div className="claim-content">
              <div className="claim-title">
                Sign up and get no-fee trading for life
              </div>
              <div className="claim-description">
                We’re giving our first 5,000 users lifetime access to totally
                free trading.
              </div>
            </div>
            <div className="action">
              <div className="claim-label">Spots left</div>
              <div className="spots">2,631</div>
              <div>
                <RegularButton text="Claim your spot" smFull={true} />
              </div>
            </div>
          </div>
        </div>
        <div className="panels">
          <div className="main">
            <div className="panel-item">
              <div className="panel-main">
                <div className="rphone-left">
                  <PhoneRectangle />
                </div>
                <div className="panel-content">
                  <div className="title">Trade crypto and stocks</div>
                  <div className="description">
                    Have $200 in Bitcoin and want to purchase $100 of a Tesla
                    stock? No problem, Structure makes this easy with the tap of
                    a button.
                  </div>
                  <RegularButton text="Swap assets" xsFull={true} />
                </div>
              </div>
              <div className="rphone-right">
                <PhoneRectangle />
              </div>
            </div>
            <div className="panel-item">
              <div className="panel-main">
                <div className="lphone-left">
                  <PhoneRectangle />
                </div>
                <div className="panel-content">
                  <div className="title">No market closes</div>
                  <div className="description">
                    Trade stocks, crypto, and other assets on Structure 24/7.¹
                    Markets are always open, weekends and holidays included.
                  </div>
                  <RegularButton text="Get access now" xsFull={true} />
                </div>
              </div>
              <div className="lphone-right">
                <PhoneRectangle />
              </div>
            </div>
            <div className="panel-item">
              <div className="panel-main">
                <div className="rphone-left">
                  <PhoneRectangle />
                </div>
                <div className="panel-content">
                  <div className="title">No trading pair limitations</div>
                  <div className="description">
                    Unlike Coinbase, Binance, and other crypto exchanges, any
                    asset you own on Structure can be swapped with any crypto or
                    stock we have available.
                  </div>
                  <div className="description">
                    Swap $1 or more of Bitcoin for your favorite new alt coin.
                    Trade $1 or more of your Tesla stock for another stock or
                    crypto coin.
                  </div>
                  <RegularButton text="Start trading" xsFull={true} />
                </div>
              </div>
              <div className="rphone-right">
                <PhoneRectangle />
              </div>
            </div>
            <div className="panel-item">
              <div className="panel-main">
                <div className="lphone-left">
                  <PhoneRectangle />
                </div>
                <div className="panel-content">
                  <div className="title">
                    A better way to send and receive payments
                  </div>
                  <div className="description">
                    Send payments in the asset of your choice. On Structure, all
                    assets work like money.
                  </div>
                  <div className="description">
                    Received Bitcoin but really wanted Google stock? Accept
                    payments in the asset of your choice.
                  </div>
                  <RegularButton text="Send a payment" xsFull={true} />
                </div>
              </div>
              <div className="lphone-right">
                <PhoneRectangle />
              </div>
            </div>
          </div>
        </div>
        <div className="setup">
          <div className="title">Ready, set, trade</div>
          <div className="description">
            Setup an account and start trading in less than 5 minutes.
          </div>
          <Grid container spacing={3}>
            <Grid className="setup-item" item md={4} xs={12}>
              <div className="icon">
                <img src="/image/di_account-creation.png" alt="icon" />
              </div>
              <div className="setup-item-title">Create an account</div>
              <div className="setup-item-description">
                Download the Structure Mobile App and create your account.
              </div>
            </Grid>
            <Grid className="setup-item" item md={4} xs={12}>
              <div className="icon">
                <img src="/image/di_deposit.png" alt="icon" />
              </div>
              <div className="setup-item-title">Deposit crypto</div>
              <div className="setup-item-description">
                Deposit crypto to your Structure Mobile App.
              </div>
            </Grid>
            <Grid className="setup-item" item md={4} xs={12}>
              <div className="icon">
                <img src="/image/di_trade.png" alt="icon" />
              </div>
              <div className="setup-item-title">Start trading</div>
              <div className="setup-item-description">
                You’re ready to start trading crypto and stocks.
              </div>
            </Grid>
          </Grid>
        </div>
        <Grid className="rest" container>
          <Grid className="rest-item" item md={6} xs={12}>
            <div className="rest-title">Rest assured, you’re in good hands</div>
            <div className="item">
              <CheckCircleOutline className="icon" />
              <div className="rest-description">
                Assigned ownership of your coins
              </div>
            </div>
            <div className="item">
              <CheckCircleOutline className="icon" />
              <div className="rest-description">Cutting edge security</div>
            </div>
            <div className="item">
              <CheckCircleOutline className="icon" />
              <div className="rest-description">
                Digital assets backed by real world assets ²
              </div>
            </div>
            <div className="item">
              <CheckCircleOutline className="icon" />
              <div className="rest-description">
                Crime prevention and good-faith policy ³
              </div>
            </div>
          </Grid>
          <Grid className="rest-item image" item md={6} xs={12}>
            <img className="computer" src="/image/rest.png" alt="rest" />
            <img className="mobile" src="/image/rest-mobile.png" alt="rest" />
          </Grid>
        </Grid>
        <Grid className="connect" container>
          <Grid className="image" item md={6} xs={12}>
            <img
              className="computer"
              src="/image/connect-computer.png"
              alt="connect"
            />
            <img className="pad" src="/image/connect-pad.png" alt="connect" />
            <img
              className="mobile"
              src="/image/connect-mobile.png"
              alt="connect"
            />
          </Grid>
          <Grid className="connect-content" item md={6} xs={12}>
            <div className="title">Connecting the world of assets</div>
            <div className="description">
              Structure was created to give people around the world access to
              the same investment assets. We’re on a mission to empower
              investors of all types through secure and easy-to-use financial
              tools.
            </div>
            <div className="description">
              Interested in helping us build the future of finance? Checkout our
              careers page to get started.
            </div>
            <RegularButton text="View open positions" xsFull={true} />
          </Grid>
        </Grid>
        <div className="signup-trading">
          <div className="main">
            <div className="phone-left">
              <img src="/image/phone.png" alt="phone" />
            </div>
            <div className="content">
              <div className="title">
                Sign up today and get no-fee trading for life.
              </div>
              <div className="description">
                No market closes. No trading fees. All the stocks and crypto
                coins you love.
              </div>
              <div className="sign-up-form">
                <div className="form-controls">
                  <div className="control-item">
                    <Select item={phonekey} items={phoneKeys} setItem={setPhoneKey} xsFull={true} />
                  </div>
                  <div className="control-item">
                    <Input className={`${phoneEmpty?'error':''}`} placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} onBlur={() => setPhoneEmpty(false)} />
                  </div>
                  <div className="control-item">
                    <RegularButton text="Send link" isFull={true} onClick={handleSendLink} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="phone-right">
            <img src="/image/phone.png" alt="phone" />
          </div>
        </div>
        <div className="about">
          <div className="about-header">
            <div className="social left">
              <div className="social-item">
                <div className="social-icon facebook-icon">f</div>
              </div>
              <div className="social-item">
                <Twitter className="social-icon" />
              </div>
              <div className="social-item">
                <Telegram className="social-icon" />
              </div>
            </div>
            <div className="about-nav">
              <div className="nav-item">About</div>
              <div className="nav-item">Terms & Conditions</div>
              <div className="nav-item">Privacy Policy</div>
              <div className="nav-item">White Paper</div>
              <div className="nav-item">Blog</div>
            </div>
            <div className="social right">
              <div className="social-item">
                <div className="social-icon facebook-icon">f</div>
              </div>
              <div className="social-item">
                <Twitter className="social-icon" />
              </div>
              <div className="social-item">
                <Telegram className="social-icon" />
              </div>
            </div>
          </div>
          <div className='items'>
            <div className='item about-description'>
              1.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </div>
            <div className='item about-description'>
              2.  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
            </div>
          </div>
          <Grid className='detail' container spacing={2}>
            <Grid className='about-description' item sm={6} xs={12}>
              © Copyright 2021 Structure Financial, Inc. All Rights Reserved.
              Neither Elon Musk nor Tim Cook are customers of Structure Financial, Inc.
              Zero-commission refers to $0 commissions for accounts that trade tokenized assets via mobile devices. Please see our Commission and Fee Schedule.
              Structure Financial, Inc's services and STXR are not available in the United States and other prohibited jurisdictions.
              This is not an offer, solicitation of an offer or advice to buy or sell securities, or open a brokerage account in any jurisdiction where Structure Financial, Inc. is not registered.
              Structure Financial, Inc does not recommend any assets or securities. All investments involve risk and the past performance of an asset, security or financial product does not guarantee future results or returns. Keep in mind that while diversification may help spread risk it does not assure a profit, or protect against loss, in a down market. There is always the potential of losing money when you invest in securities or other financial products. Investors should consider their investment objectives and risks carefully before investing.
              The above content is provided for general informational purposes only. It is not intended to constitute investment advice or any other kind of professional advice and should not be relied upon as such. Before taking action based on any such information, we encourage you to consult with the appropriate professionals. We do not endorse any third parties referenced within the article. Market and economic views are subject to change without notice and may be untimely when presented here. Do not infer or assume that any securities, sectors or markets described in this article were or will be profitable. Past performance is no guarantee of future results. There is a possibility of loss, including the complete loss of invested capital. Historical or hypothetical performance results are presented for illustrative purposes only.
              Investors should be aware that system response, execution price, speed, liquidity, market data, and account access times are affected by many factors, including market volatility, size and type of order, market conditions, system performance, and other factors. These risks are to be assumed by the customer. For additional information on data provided within the App, please see our Data Disclosure.
            </Grid>
            <Grid className='about-description' item sm={6} xs={12}>
              Investors should consider the investment objectives and unique risk profile of Exchange Traded Funds (ETFs) carefully before investing. ETFs are subject to risks similar to those of other diversified portfolios. Leveraged and Inverse ETFs may not be suitable for all investors and may increase exposure to volatility through the use of leverage, short sales of securities, derivatives and other complex investment strategies.
              Although ETFs are designed to provide investment results that generally correspond to the performance of their respective underlying indices, they may not be able to exactly replicate the performance of the indices because of expenses and other factors. A prospectus contains this and other information about the ETF and should be read carefully before investing. Customers should obtain prospectuses from issuers and/or their third party agents who distribute and make prospectuses available for review. ETFs are required to distribute portfolio gains to shareholders at year-end. These gains may be generated by portfolio rebalancing or the need to meet diversification requirements. ETF trading will also generate tax consequences. Additional regulatory guidance on Exchange Traded Products can be found by clicking here.
              Third-party information provided for Structure Financial, Inc product features, Structure Financial, Inc communications and communications emanating from its social media community, market prices, data and other information available through Structure Financial, Inc are meant for informational purposes only and are not intended as an offer or solicitation for the purchase or sale of any financial instrument or as an official confirmation of any transaction. The information provided is not warranted as to completeness or accuracy and is subject to change without notice. The Structure Financial, Inc website provides its users' links to social media sites and email. The linked social media and email messages are pre-populated. However, these messages can be deleted or edited by Structure Financial, Inc users, who are under no obligation to send any pre-populated messages. Any comments or statements made herein do not reflect the views of Structure Financial, Inc or any of its subsidiaries or affiliates. Note that certain Structure Financial, Inc product features listed are currently in development and will be available soon. Structure Financial, Inc., may receive payment for order flow through third parties.
              All assets, and investments are offered to self-directed customers by Structure Financial, Inc. Structure Financial Inc. is not a member of FINRA or SIPC. Additional information about Structure Financial, Inc. can be found by clicking here.
            </Grid>
          </Grid>
        </div>
      </Styles>
    </>
  );
}
export default Home
