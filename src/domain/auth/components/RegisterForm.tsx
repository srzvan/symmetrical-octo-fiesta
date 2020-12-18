import * as React from "react";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  TextField,
  Theme,
  Typography,
  Zoom,
} from "@material-ui/core";

import DarkTooltip from "../../../app/components/DarkTooltip";

import { Visibility as VisibilityIcon } from "@material-ui/icons";
import { HelpOutlineRounded as HelpOutlineRoundedIcon } from "@material-ui/icons";

var { useState } = React;

var useStyles = makeStyles((theme: Theme) => ({
  form: {
    "& > *:not(:last-child)": {
      marginBottom: ".5rem",
    },
    "& .MuiFormLabel-root": {
      color: "inherit",
      opacity: 0.7,
    },
    "& .MuiInputBase-root": {
      borderRadius: "8px",
      borderColor: "white",
      color: "white",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "inherit",
      },
    },
    "& .MuiInputAdornment-root .MuiIconButton-label": {
      color: "white",
      opacity: 0.7,
    },
  },
  checkbox: {
    margin: ".5rem 0",
    alignItems: "flex-start",
    "& .MuiCheckbox-root": {
      padding: "0 0.6875rem 0 0",
      color: "inherit",
    },
    "& a": {
      color: "inherit",
    },
  },
  tooltipMessage: {
    lineHeight: "20px",
  },
  submitButton: {
    borderRadius: "2.5em",
    color: "#006EAD",
    fontWeight: theme.typography.fontWeightBold,
    backgroundColor: "white",
    "&.Mui-disabled": {
      color: "#006EAD",
      backgroundColor: "rgba(255, 255, 255, 0.6)",
    },
  },
}));

function RegisterForm() {
  var [isAccountIdTooltipOpen, setisAccountIdTooltipOpenOpen] = useState(false);

  var classes = useStyles();

  function handleAccountIdTooltipOpen() {
    setisAccountIdTooltipOpenOpen(true);
  }

  function handleAccountIdTooltipClose() {
    setisAccountIdTooltipOpenOpen(false);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log(event);
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor="account-id">Account ID</InputLabel>
        <OutlinedInput
          id="account-id"
          type="password"
          label="Account ID"
          endAdornment={
            <DarkTooltip
              TransitionComponent={Zoom}
              TransitionProps={{ timeout: 250 }}
              placement="bottom-start"
              PopperProps={{
                disablePortal: true,
                popperOptions: {
                  positionFixed: true,
                  modifiers: {
                    preventOverflow: {
                      enabled: true,
                      boundariesElement: "window",
                    },
                  },
                },
              }}
              onClose={handleAccountIdTooltipClose}
              open={isAccountIdTooltipOpen}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title={
                <Typography className={classes.tooltipMessage}>
                  <strong>Where can I find this?</strong>
                  <br />
                  Your account ID can be found on any of your invoices.
                </Typography>
              }
            >
              <InputAdornment position="end">
                <IconButton aria-label="Toggle password visibility" onClick={handleAccountIdTooltipOpen}>
                  <HelpOutlineRoundedIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            </DarkTooltip>
          }
        />
      </FormControl>
      <TextField label="Email address" variant="outlined" fullWidth />
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor="password">Password</InputLabel>
        <OutlinedInput
          id="password"
          type="password"
          label="Password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="Toggle password visibility">
                <VisibilityIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor="confirm-password">Confirm password</InputLabel>
        <OutlinedInput
          id="confirm-password"
          type="password"
          label="Confirm password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="Toggle password visibility">
                <VisibilityIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControlLabel
        className={classes.checkbox}
        control={<Checkbox name="terms-and-conditions" />}
        label={
          <Typography>
            I have read and accept the{" "}
            <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">
              Terms &amp; Conditions
            </a>
          </Typography>
        }
      />
      <Button className={classes.submitButton} type="submit" variant="contained" fullWidth children="join now" />
    </form>
  );
}

export default RegisterForm;