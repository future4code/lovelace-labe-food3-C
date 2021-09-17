import { createTheme } from '@material-ui/core/styles'
import {primaryColor, secondaryColor, neutralColor, background} from "./colors"

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white"
    },
    secondary: {
      main: neutralColor,
      contrastText: "white"
    },
    text: {
        primary: secondaryColor,
        secondary: neutralColor
    },
    background: {
      default: background
    }
  }
})

export default theme 