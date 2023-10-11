import { createTheme } from "@mui/material";

const themeColor = {
  PRIMARY_COLOR: "#5562f9",
  SECONDARY_COLOR: "#8d8d8d",
  SUCCESS_COLOR: "#00a75e",
  DANGER_COLOR: "#eb4145"
};

export const themeMui = createTheme({
  palette: {
    primary: {
      light: themeColor.PRIMARY_COLOR,
      main: themeColor.PRIMARY_COLOR,
      dark: themeColor.PRIMARY_COLOR,
      contrastText: "#fff",
    },
    success: {
      light: themeColor.SUCCESS_COLOR,
      main: themeColor.SUCCESS_COLOR,
      dark: themeColor.SUCCESS_COLOR,
      contrastText: "#fff",
    },
    error: {
      main: themeColor.DANGER_COLOR,
      light: themeColor.DANGER_COLOR,
      dark: themeColor.DANGER_COLOR,
    },
    secondary: {
      main: themeColor.SECONDARY_COLOR,
      light: themeColor.SECONDARY_COLOR,
      dark: themeColor.SECONDARY_COLOR,
    },
  },
});
