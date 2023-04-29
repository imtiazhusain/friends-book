import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#42a5f5",
      //   main: purple[500],
    },
    secondary: {
      main: purple[500],
    },
    otherColor: "#000",
  },
  spacing: 10,
});


// export default theme
