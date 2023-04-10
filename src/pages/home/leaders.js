import React from "react";
import { Grid } from "@material-ui/core";

import CoinPanel from "./components/coinPanel";
import { Styles } from '../style/leaderStyle'
import RegularButton from "../../components/regularButton";

const Leaders = () => {

  return (
    <Styles>
      <Grid className="leaders" container>
        <Grid item md={6} xs={12}>
          <Grid container alignItems="stretch" spacing={2}>
            <Grid item sm={6} xs={12}>
              <CoinPanel coin="/image/yearn_classic_finance.png" title="Yearn Classic Finance" price="20.19" percentage="109.3" isUp={true} />
            </Grid>
            <Grid item sm={6} xs={12}>
              <CoinPanel coin="/image/decentraland.png" title="Decentraland" price="3.12" percentage="27.1" isUp={true} />
            </Grid>
            <Grid item sm={6} xs={12}>
              <CoinPanel coin="/image/shiba_inu.png" title="SHIBA INU" price="0.00005225" percentage="21.4" isUp={true} />
            </Grid>
            <Grid item sm={6} xs={12}>
              <CoinPanel coin="/image/avalanche.png" title="Avalanche" price="83.31" percentage="22.3" isUp={true} />
            </Grid>
            <Grid item sm={6} xs={12}>
              <CoinPanel coin="/image/internet_computer.png" title="Internet Computer" price="46.03" percentage="16.4" isUp={true} />
            </Grid>
            <Grid item sm={6} xs={12}>
              <CoinPanel coin="/image/cosmos.png" title="Cosmos" price="31.84" percentage="12.0" isUp={true} />
            </Grid>
          </Grid>
        </Grid>
        <Grid className="asset-content" item md={6} xs={12}>
          <div className="title">
            All of your assets, now in one place
          </div>
          <div className="description">
            Deposit crypto to the Structure Mobile App and buy stocks, crypto, and other assets in seconds.
          </div>
          <RegularButton text="Browse all assets" smFull={true} />
        </Grid>
      </Grid>
    </Styles>
  )
}
export default Leaders
