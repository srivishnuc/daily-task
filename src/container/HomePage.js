import React from 'react'
import Header from '../component/Header'
import { Paper, withStyles, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => {
    return ({
        root: {
            width: 'auto',
            height: 800,
            color: `${theme.palette.primary.light}`
        }

    })
}
)







class HomePage extends React.Component {


    render() {
        const { classes } = this.props
        return (
            <Paper className={classes.root} elevation={3}>
                <Header />
            </Paper >
        )
    }
}


export default (withStyles)(useStyles)(HomePage)