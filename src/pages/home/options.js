import React from "react";
import { Grid } from "@material-ui/core";

import { Styles } from '../style/optionsStyle'
import Input from "../../components/input";
import RegularButton from "../../components/regularButton";

const Option = () => {

  return (
    <Styles>
      <Grid className="options" container>
        <Grid item md={6} xs={12}>
          <div className="panel">
            <div className="options-content">
              <div className="subtitle">Fractional options are the future</div>
              <div className="description">
                In the future, Structure will allow its users to buy and sell
                fractions of options.
              </div>
            </div>
            <div className="form-controls">
              <div className="control-item">
                <Input placeholder="Get early access" />
              </div>
              <div className="control-item">
                <RegularButton text="Subscrive" smFull={true} />
              </div>
            </div>
          </div>
        </Grid>
        <Grid className="asset-content" item md={6} xs={12}>
          <div className="title">All of your assets, now in one place</div>
          <div className="description">
            Deposit crypto to the Structure Mobile App and buy stocks, crypto,
            and other assets in seconds.
          </div>
        </Grid>
      </Grid>
    </Styles>
  );
}
export default Option
