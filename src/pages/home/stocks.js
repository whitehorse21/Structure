import React from "react";
import { Grid } from "@material-ui/core";

import CoinPanel from "./components/coinPanel";
import { Styles } from '../style/leaderStyle'
import RegularButton from "../../components/regularButton";

const Stocks = () => {

  return (
    <Styles>
      <Grid className="leaders" container>
        <Grid item md={6} xs={12}>
          <Grid container alignItems="stretch" spacing={2}>
            <Grid item sm={6} xs={12}>
              <CoinPanel coin="" title="D-Market Electronic..." price="3.65" percentage="33.8" isUp={false} />
            </Grid>
            <Grid item sm={6} xs={12}>
              <CoinPanel coin="" title="Kura Sushi" price="3.12" percentage="27.3" isUp={true} />
            </Grid>
            <Grid item sm={6} xs={12}>
              <CoinPanel coin="" title="F45 Training" price="3.14" percentage="22.4" isUp={false} />
            </Grid>
            <Grid item sm={6} xs={12}>
              <CoinPanel coin="" title="Xponential Fitness" price="23.66" percentage="22.6" isUp={true} />
            </Grid>
            <Grid item sm={6} xs={12}>
              <CoinPanel coin="" title="Jamf" price="46.03" percentage="21.2" isUp={true} />
            </Grid>
            <Grid item sm={6} xs={12}>
              <CoinPanel coin="" title="PLAYSTUDIOS" price="20.5" percentage="20.5" isUp={false} />
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
export default Stocks
