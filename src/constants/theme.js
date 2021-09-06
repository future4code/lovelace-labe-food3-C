import { createTheme } from '@material-ui/core/styles'
import {primaryColor, neutralColor, secondaryColor} from "./colors"

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "black"
    },
    secondary: {
      main: secondaryColor,
    },
    text: {
        primary: neutralColor
    }
  }
})

export default theme 