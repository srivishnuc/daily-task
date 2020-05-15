import React from 'react'
import { Typography, TextField, Button, Paper, withStyles, Grid } from '@material-ui/core'

const useStyles = (style) => ({
    root: {
        margin: style.spacing(4)
    },
    signup: {
        display: 'flex',
        flexDirection: 'column',
        margin: style.spacing(25),
        padding: style.spacing(25),
        borderRadius: '10px',
    }
})


class Signup extends React.Component {


    render() {

        const { classes } = this.props
        return (
            <Grid container xs={12} justify="flex-end">
                <Grid item >
                    <Paper className={classes.signup}>
                        <Typography className={classes.root} variant="h5" align="center">Create Employee</Typography>
                        <TextField className={classes.root} label="Employee Name" />
                        <TextField className={classes.root} label="Employee No" />
                        <TextField className={classes.root} label="Password" />
                        <TextField className={classes.root} label="Re-Type Password" />
                        <Button className={classes.root} variant="contained" color="primary" onClick={() => { }} >Create</Button>
                        <Button className={classes.root} color="primary" onClick={() => { }} >Already have account</Button>
                    </Paper>
                </Grid>
            </Grid>
        )
    }


}


export default (withStyles)(useStyles)(Signup)