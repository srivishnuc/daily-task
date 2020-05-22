import React from 'react'
import Header from '../component/Header'
import { Paper, withStyles, Button } from '@material-ui/core'


const useStyles = (styles) => ({
    mainPaper: {
        width: 'auto',
        height: 800
    }

})

class HomePage extends React.Component {



    render() {
        const { classes } = this.props
        return (
            <Paper className={classes.mainPaper} elevation={3}>
                <Header />
            </Paper >
        )
    }
}


export default (withStyles)(useStyles)(HomePage)