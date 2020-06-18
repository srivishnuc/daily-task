import React from 'react'
import Header from '../component/Header'
import { Paper, withStyles, Card, CardContent } from '@material-ui/core'
import { getData } from '../utility/api'

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
        this.state = { count: [] }
    }


    afterGetData = (res) => {
        console.log(res)
        if (res.status == "success") {
            this.setState({ count: res.rows })
        }


    }

    componentDidMount() {
        getData(`/query/queryCount`, this.afterGetData)
    }




    render() {
        const { classes } = this.props
        const { count } = this.state

        const counter = count.map(c => <Card key={c.status} > <CardContent>{c.status} - {c.count}</CardContent></Card>)

        return (
            <Paper className={classes.page} elevation={3}>
                <Header />
                {counter}
            </Paper >
        )
    }
}


export default (useStyles)(HomePage)