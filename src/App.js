import React from 'react';
import Router from "./routes/Router";
import {CssBaseline} from "@material-ui/core";
import GlobalStateContext from "./global/GlobalStateContext";
import { ThemeProvider } from '@material-ui/core/styles'
import theme from "./constants/theme";


function App() {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStateContext>
          <CssBaseline/>
            <Router/>
        </GlobalStateContext>
      </ThemeProvider>
  );
}

export default App;
