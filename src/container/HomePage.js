import React from 'react'
import Header from '../component/Header'
import { Box, withStyles, Button } from '@material-ui/core'

const useStyles = (styles) => ({
    root: {
        width: 'auto',
        height: 800
    }

})

class HomePage extends React.Component {


    render() {
        const { classes } = this.props
        return (
            <Box className={classes.root} elevation={3}>
                <Header />
            </Box >
        )
    }
}


export default (withStyles)(useStyles)(HomePage)