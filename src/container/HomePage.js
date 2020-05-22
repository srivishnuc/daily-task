import React from 'react'
import { Paper, withStyles, Button } from '@material-ui/core'


const useStyles = (styles) => ({
    mainPaper: { width: 'auto' }

})

class HomePage extends React.Component {

    handleLogout = () => {
        const { history } = this.props
        localStorage.removeItem('token');
        history.push('/signin')
    }

    render() {
        const { classes } = this.props
        return (
            <Paper className={classes.mainPaper} elevation={3}>
                <div style={{ height: '600px' }}><Button color="primary" onClick={this.handleLogout}>Logout</Button></div>
            </Paper>
        )
    }
}


export default (withStyles)(useStyles)(HomePage)