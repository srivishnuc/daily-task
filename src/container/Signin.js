import React from 'react'
import { Grid, TextField, Button, withStyles, Paper, Typography } from '@material-ui/core'



const useStyles = (style) => ({

    root: {
        margin: style.spacing(4)
    },
    login: {
        display: 'flex',
        flexDirection: 'column',
        margin: style.spacing(25),
        padding: style.spacing(25),
        borderRadius: '10px',
    }
})

class Signin extends React.Component {

    render() {
        const { classes } = this.props
        return (
            <Grid container justify="flex-end">
                <Grid item xs={12}>
                    <Paper className={classes.login} elevation={2}>
                        <Typography className={classes.root} variant="h5" align="center">Login</Typography>
                        <TextField className={classes.root} label="Employee No" />
                        <TextField className={classes.root} label="Password" />
                        <Button className={classes.root} variant="contained" color="primary" onClick={() => { }} >Login</Button>
                        <Button className={classes.root} color="primary" onClick={() => { }} >Create Employee</Button>
                    </Paper>
                </Grid>
            </Grid>
        )
    }


}


export default (withStyles)(useStyles)(Signin)