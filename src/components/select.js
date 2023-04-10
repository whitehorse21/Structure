import React, { useState, useEffect } from "react";
import { Box, Popover, Typography } from "@material-ui/core";
import { KeyboardArrowDown } from '@material-ui/icons'
import { makeStyles } from "@material-ui/core/styles";

import { Styles } from './style/selectStyle'

const useStyles = makeStyles((theme) => ({
  typography: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));
const Select = (props) => {
  const { item, items, setItem, xsFull, smFull, ...rest } = props
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = useState('')
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSelect = (v) => {
    setValue(v);
    setItem(v);
    setAnchorEl(null);
  };

  useEffect(() => {
    setValue(item)
  }, [item])
  return (
    <div>
      <Styles>
        <div onClick={handleClick}>
          <input className={`${smFull?'sm-full-select':''} ${xsFull?'xs-full-select':''}`} aria-describedby={id} variant="contained" value={value} {...rest} />
          <KeyboardArrowDown className="icon" />
        </div>
      </Styles>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box p={2}>
          {items.map((one, index) => (
            <Typography key={index} className={classes.typography} onClick={() => handleSelect(one)}>
              {one}
            </Typography>
          ))}
        </Box>
      </Popover>
    </div>
  );
}
export default Select
