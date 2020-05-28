import React from 'react';
import HomePage from './container/HomePage'
import Signin from './container/Signin'
import Signup from './container/Signup'
import TaskForm from './container/TaskForm';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core'
import { cyan, teal, red } from '@material-ui/core/colors';
require('typeface-roboto')



const theme = createMuiTheme({
  palette: {
    primary: cyan,
    secondary: teal
  },
  status: {
    danger: red
  },
  spacing: 2,

})


const useStyles = (styles) => ({
  root: {
    width: 'auto',
    height: 800
  }

})




class App extends React.Component {


  ProtectedRoute = (RouteComponent, props) => localStorage.getItem('token') ? <RouteComponent {...props} /> : <Redirect to={{ pathname: '/signin' }} />
  // ProtectedRoute = (RouteComponent, props) => 1 === 1 ? <RouteComponent {...props} /> : <Redirect to={{ pathname: '/signin' }} />
  render() {
    const { classes } = this.props
    return (
      <ThemeProvider theme={theme} >
        <Router>
          <Switch>
            <Route path='/signup' render={props => <Signup {...props} />} />
            <Route path='/signin' render={props => <Signin {...props} />} />

            <Route path='/' exact render={props => this.ProtectedRoute(HomePage, props)} />
            <Route path='/query' render={props => this.ProtectedRoute(TaskForm, props)} />

          </Switch>
        </Router>
      </ThemeProvider >
    )
  }

}


export default (withStyles)(useStyles)(App);
