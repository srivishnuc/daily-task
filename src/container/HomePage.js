import React from 'react'
import Header from '../component/Header'
import { Paper, withStyles, Card, CardContent, Box, Typography } from '@material-ui/core'
import { getData } from '../utility/api'

const useStyles = withStyles(theme => ({
    page: {
        width: 'auto',
        height: 800,
        color: `${theme.palette.secondary.dark}`
    },
    Box: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center"

    },
    card: {
        width: '100%',
        textAlign: 'center'
    }

}))








class HomePage extends React.Component {

    constructor() {
        super()
        this.state = { counter: [], refresh: false }
    }


    afterGetData = (res) => {
        console.log(res.rows)
        if (res.status === "success") {

            let count = [];
            count.push(res.rows[0].completed)
            count.push(res.rows[0].new)
            count.push(res.rows[0].inprocess)
            this.setState({ counter: count })


        }


    }

    componentDidMount() {
        this.iterate = setInterval(getData(`/query/queryCount`, this.afterGetData), 60000)
    }




    render() {
        const { classes } = this.props
        const { counter } = this.state

        const taskCounter = counter.map(c => <Card className={classes.card} key={c.status} > <Typography variant="h6">{c.status} </Typography><CardContent >{c.count} </CardContent></Card>)

        return (
            <Paper className={classes.page} elevation={3}>
                <Header />
                <Box className={classes.Box}>
                    {taskCounter}
                </Box>
            </Paper >
        )
    }
}


export default (useStyles)(HomePage)