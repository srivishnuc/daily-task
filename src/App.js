import React from 'react';
import HomePage from './container/HomePage'
import Signin from './container/Signin'
import Signup from './container/Signup'

import { BrowserRouter as Router } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { green, yellow, red } from '@material-ui/core/colors';
require('typeface-roboto')



const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: yellow
  },
  status: {
    danger: red
  },
  spacing: 2,

})




class App extends React.Component {


  render() {
    return (
      <ThemeProvider theme={theme} >
        <Router>
          <Signup />
        </Router>
      </ThemeProvider>
    )
  }

}


export default App;
