import React from 'react'
import Header from '../component/Header'
import { Paper, withStyles } from '@material-ui/core'


const useStyles = withStyles(theme => ({
    page: {
        width: 'auto',
        height: 800,
        color: `${theme.palette.secondary.dark}`
    }

}))








class HomePage extends React.Component {

    constructor() {
        super()
        this.state = {}
    }


    render() {
        const { classes } = this.props
        const { queryListBy } = this.state
        return (
            <Paper className={classes.page} elevation={3}>
                <Header />
                {queryListBy}
            </Paper >
        )
    }
}


export default (useStyles)(HomePage)