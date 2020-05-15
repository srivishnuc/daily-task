import React from 'react'
import { Paper, withStyles } from '@material-ui/core'


const useStyles = (styles) => ({
    mainPaper: { width: 'auto' }

})

class HomePage extends React.Component {


    render() {
        const { classes } = this.props
        return (
            <Paper className={classes.mainPaper} elevation={3}>

            </Paper>
        )
    }
}


export default (withStyles)(useStyles)(HomePage)