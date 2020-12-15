import * as React from "react";
import { Button, Container, Grid, Hidden, makeStyles, Theme, Typography } from "@material-ui/core";

import RegisterForm from "../src/components/RegisterForm";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    height: "130px",
    textAlign: "center",
  },
  grid: {
    height: "100%",
  },
  leftColumn: {
    background: "url(./1e0c95c222d46d253d2449723cbc0f87.jpg) top center no-repeat",
    backgroundSize: "cover",
  },
  rightColumn: {
    color: "white",
    background: "linear-gradient(270deg, #0AA5AB 0.4%, #00528C 99.98%)",
  },
  title: {
    fontSize: "2rem",
    fontWeight: theme.typography.fontWeightBold,
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
    <>
      <header className={classes.header}>
        <Typography variant="h1">Header</Typography>
      </header>
      <Grid container className={classes.grid}>
        <Hidden mdDown>
          <Grid item lg={6} className={classes.leftColumn} />
        </Hidden>
        <Grid item xs={12} sm={12} md={12} lg={6} className={classes.rightColumn}>
          <Container maxWidth="xs">
            <Typography className={classes.title} component="h1" paragraph>
              Register
            </Typography>

            <RegisterForm />

            <Typography className={classes.alreadyHaveAnAccount} component="div" align="center">
              <p>Already have an account?</p>
              <Button href="/log-in" children="log in" />
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

export default Register;
