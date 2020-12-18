import { ThemeOptions } from "@material-ui/core";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";
import { TypographyOptions } from "@material-ui/core/styles/createTypography";

var typography: TypographyOptions = {
  fontFamily: "'Source Sans Pro', sans-serif",
};

var palette: PaletteOptions = {
  background: {
    default: "#fff",
  },
};

export var theme: ThemeOptions = {
  typography,
  palette,
};
