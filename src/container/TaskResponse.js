import React from 'react'
import { getData } from '../utility/api'
import Card from '../component/CountCard'
import { Paper, withStyles } from '@material-ui/core'
import Header from '../component/Header'

const useStyles = withStyles(theme => ({
    root: {
        width: 'auto',
        display: 'flex',
        height: 800,
        justifyContent: 'flex-start',
        flexWrap: 'wrap'
    },

})

)

class TaskResponse extends React.Component {

    constructor() {
        super()
        this.state = { queryListBy: "" }
    }

    componentDidMount() {
        getData('/query/queryList', this.afterGet)
    }

    afterGet = (res) => {
        if (res.status === 'success') {
            console.log(res.rows[0].by)
            const data = res.rows[0].by.map(d => <Card key={d.id} data={d} />)
            this.setState({ queryListBy: data })
        }
    }

    render() {

        const { queryListBy } = this.state
        const { classes } = this.props
        return (
            <React.Fragment>
                <Header />
                <Paper className={classes.root}>
                    {queryListBy}
                </Paper>
            </React.Fragment>
        )
    }

}


export default (useStyles)(TaskResponse)