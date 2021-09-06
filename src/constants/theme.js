import { createTheme } from '@material-ui/core/styles'
import {primaryColor, secondaryColor, neutralColor, background} from "./colors"

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "black"
    },
    secondary: {
      main: secondaryColor,
      contrastText: "white"
    },
    text: {
        primary: neutralColor,
        secondary: secondaryColor
    },
    background: {
      default: background
    }
  }
})

export default theme 