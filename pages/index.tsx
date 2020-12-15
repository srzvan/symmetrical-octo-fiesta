import * as React from "react";
import { Button, Container, makeStyles, Theme, Typography } from "@material-ui/core";

import RegisterForm from "../src/components/RegisterForm";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    color: "white",
    background: "linear-gradient(270deg, #0AA5AB 0.4%, #00528C 99.98%)",
    height: "100%",
  },
  title: {
    fontSize: "2rem",
    fontWeight: 700,
  },
  alreadyHaveAnAccount: {
    marginTop: "2.375rem",
    "& > p": {
      marginBottom: "0.75rem",
    },
    "& a": {
      padding: 0,
      color: "#B6FBF8",
      lineHeight: "18px",
      fontWeight: theme.typography.fontWeightBold,
    },
  },
}));

function Register() {
  var classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography className={classes.title} component="h1" paragraph>
        Register
      </Typography>

      <RegisterForm />

      <Typography className={classes.alreadyHaveAnAccount} component="div" align="center">
        <p>Already have an account?</p>
        <Button href="/log-in" children="log in" />
      </Typography>
    </Container>
  );
}

export default Register;
