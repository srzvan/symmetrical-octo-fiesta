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
import { VisibilityOff as VisibilityOffIcon } from "@material-ui/icons";
import { HelpOutlineRounded as HelpOutlineRoundedIcon } from "@material-ui/icons";

var { useState } = React;

type FormValues = {
  viasatAccountId?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  termsAndConditions?: boolean;
};

type State = {
  isAccountIdTooltipOpen: boolean;
  isPasswordVisible: boolean;
  isConfirmPasswordVisible: boolean;
};

enum AccountIdTooltipState {
  CLOSE,
  OPEN,
}

enum PasswordFieldType {
  PASSWORD = "isPasswordVisible",
  CONFIRM_PASSWORD = "isConfirmPasswordVisible",
}

function RegisterForm() {
  var [formValues, setFormValues] = useState<FormValues>();
  var [state, setState] = useState<State>({
    isAccountIdTooltipOpen: false,
    isPasswordVisible: false,
    isConfirmPasswordVisible: false,
  });

  var classes = useStyles();

  function handleAccountIdTooltipVisibility(tooltipState: AccountIdTooltipState) {
    setState({
      ...state,
      isAccountIdTooltipOpen: Boolean(tooltipState),
    });
  }

  function handlePasswordVisibility(passwordFieldType: PasswordFieldType) {
    setState({
      ...state,
      [passwordFieldType]: !state[passwordFieldType],
    });
  }

  function handleChange(event: React.FormEvent<HTMLFormElement>) {
    var input = event.target as HTMLInputElement;

    setFormValues({
      ...formValues,
      [input.name]: input.value,
    });
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log(formValues);
  }

  return (
    <form className={classes.form} onChange={handleChange} onSubmit={handleSubmit}>
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor="account-id">Account ID</InputLabel>
        <OutlinedInput
          id="account-id"
          name="accountId"
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
              onClose={() => handleAccountIdTooltipVisibility(AccountIdTooltipState.CLOSE)}
              open={state.isAccountIdTooltipOpen}
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
                <IconButton
                  aria-label="Toggle tooltip"
                  onClick={() => handleAccountIdTooltipVisibility(AccountIdTooltipState.OPEN)}
                >
                  <HelpOutlineRoundedIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            </DarkTooltip>
          }
        />
      </FormControl>
      <TextField name="email" label="Email address" variant="outlined" fullWidth />
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor="password">Password</InputLabel>
        <OutlinedInput
          id="password"
          name="password"
          type={state.isPasswordVisible ? "text" : "password"}
          label="Password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="Toggle password visibility"
                onClick={() => handlePasswordVisibility(PasswordFieldType.PASSWORD)}
              >
                {state.isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor="confirm-password">Confirm password</InputLabel>
        <OutlinedInput
          id="confirm-password"
          name="confirmPassword"
          type={state.isConfirmPasswordVisible ? "text" : "password"}
          label="Confirm password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="Toggle password visibility"
                onClick={() => handlePasswordVisibility(PasswordFieldType.CONFIRM_PASSWORD)}
              >
                {state.isConfirmPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
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

export default RegisterForm;
