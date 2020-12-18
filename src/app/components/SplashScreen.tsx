import * as React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

var { useEffect, useState } = React;

var useStyles = makeStyles({
  loading: {
    height: "100%",
    background: "linear-gradient(114.83deg, #3EC1BE 1.18%, #006EAD 84.18%)",
  },
});

function Loading(props: { className?: string }) {
  return (
    <Grid container alignItems="center" justify="center" {...props}>
      <Typography component="div" align="center">
        <h1>Symmetrical</h1>
        <h2>Octo</h2>
        <h3>Fiesta</h3>
      </Typography>
    </Grid>
  );
}

function SplashScreen({ children }) {
  var [isLoading, setIsLoading] = useState(true);

  var classes = useStyles();

  useEffect(() => {
    mimicAsyncWork();

    function mimicAsyncWork() {
      try {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return isLoading ? <Loading className={classes.loading} /> : children;
}

export default SplashScreen;
