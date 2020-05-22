import React from 'react';
import HomePage from './container/HomePage'
import Signin from './container/Signin'
import Signup from './container/Signup'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
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


  ProtectedRoute = (RouteComponent, props) => localStorage.getItem('token') ? <RouteComponent {...props} /> : <Redirect to={{ pathname: '/signin' }} />

  render() {

    return (
      <ThemeProvider theme={theme} >
        <Router>
          <Switch>
            <Route path='/signup' render={props => <Signup {...props} />} />
            <Route path='/signin' render={props => <Signin {...props} />} />
            <Route path='/home' render={props => this.ProtectedRoute(HomePage, props)} />
          </Switch>
        </Router>
      </ThemeProvider >
    )
  }

}


export default App;
