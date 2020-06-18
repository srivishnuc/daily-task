import React from 'react'
import { getData } from '../utility/api'
import Card from '../component/CountCard'
import { Paper, Box, withStyles } from '@material-ui/core'
import Header from '../component/Header'

const useStyles = withStyles(theme => ({
    root: {
        width: 'auto',
        height: 800
    },
    box: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap'
    },

})

)

class TaskResponse extends React.Component {

    constructor() {
        super()
        this.state = { queryListBy: "" }
    }

    componentWillMount() {
        getData('/query/queryList', this.afterGet)
    }

    afterGet = (res) => {
        console.log(res)
        if (res.status === 'success') {
            const data = res.rows[0].by.map(d => <Card status={d.status} key={d.id} data={d} />)
            this.setState({ queryListBy: data })
        }
    }

    render() {

        const { queryListBy } = this.state
        const { classes } = this.props
        return (
            <React.Fragment>
                <Header />
                <Paper className={classes.root} >
                    <Box className={classes.box}>
                        {queryListBy}
                    </Box>
                </Paper>
            </React.Fragment>
        )
    }

}


export default (useStyles)(TaskResponse)