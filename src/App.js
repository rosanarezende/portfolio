import React from 'react';
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";

import theme from "./utils/theme"

import Appbar from './components/Appbar';
import Home from './containers/Home';
import About from './containers/About';
import Knowledge from './containers/Knowledge';
import Education from './containers/Education';
import Projects from './containers/Projects';
import HireMe from './containers/HireMe';
import Bottonbar from './components/Bottonbar';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Appbar/>
      
      <Home/>
      <About/>
      <Knowledge/>
      <Education/>
      <Projects/>
      <HireMe/>

      <Bottonbar/>
    </MuiThemeProvider>
  );
}

export default App;
