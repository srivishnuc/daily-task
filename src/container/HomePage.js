import React from 'react'
import Header from '../component/Header'
import { Paper, withStyles } from '@material-ui/core'
import { getData } from '../utility/api'


const useStyles = withStyles(theme => ({
    page: {
        width: 'auto',
        height: 800,
        color: `${theme.palette.secondary.dark}`
    }

}))








class HomePage extends React.Component {


    componentDidMount() {
        getData('\query\queryList', this.afterGet)
    }

    afterGet = (res) => {
        if (res.status === 'success') {

        }
    }

    render() {
        const { classes } = this.props
        return (
            <Paper className={classes.page} elevation={3}>
                <Header />
            </Paper >
        )
    }
}


export default (useStyles)(HomePage)