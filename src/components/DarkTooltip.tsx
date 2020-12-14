import * as React from "react";
import { Button, makeStyles, Tooltip, TooltipProps } from "@material-ui/core";

import { HelpOutlineRounded as HelpOutlineRoundedIcon } from "@material-ui/icons";

const useStyles = makeStyles({
  arrow: {
    color: "#32424E",
  },
  tooltip: {
    padding: "0.5rem",
    color: "white",
    backgroundColor: "#32424E",
  },
  tooltipTitleContainer: {
    display: "inline-flex",
    flexDirection: "column",
  },
  tooltipTitleInnerContainer: {
    display: "flex",
    color: "rgba(255, 255, 255, 0.7)",
    "& > svg": {
      marginRight: "10px",
      color: "white",
    },
  },
  closeButton: {
    color: "inherit",
    alignSelf: "flex-end",
  },
});

function DarkTooltip(props: TooltipProps) {
  const { title, ...otherProps } = props;
  const classes = useStyles();

  return (
    <Tooltip
      arrow
      interactive
      classes={{
        arrow: classes.arrow,
        tooltip: classes.tooltip,
      }}
      {...otherProps}
      title={
        <div className={classes.tooltipTitleContainer}>
          <div className={classes.tooltipTitleInnerContainer}>
            <HelpOutlineRoundedIcon fontSize="small" />
            {title}
          </div>
          <Button className={classes.closeButton} children="got it" onClick={props.onClose} />
        </div>
      }
    />
  );
}

export default DarkTooltip;
