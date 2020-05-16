import React from 'react'
import { Typography, TextField, Button, Paper, withStyles, Grid, MenuItem } from '@material-ui/core'
import { getData } from '../utility/api'
import SelectList from '../component/Select'


const useStyles = (style) => ({
    root: {
        margin: style.spacing(4)
    },
    signup: {
        display: 'flex',
        flexDirection: 'column',
        margin: style.spacing(10),
        padding: style.spacing(25),
        borderRadius: '10px',
    }
})


class Signup extends React.Component {

    constructor() {
        super()
        this.state = { roles: "", role: "", department: "", dept: "" }
    }


    componentWillMount() {
        getData('/user/regData', this.regData)

    }

    regData = (res) => {
        if (res.status === 'sucess') {
            const dept = res.dept[0].department.map((d) => <MenuItem key={d.dept_no} value={d.dept_no} >{d.dept_name}</MenuItem>)
            const role = res.roles[0].roles.map((r) => <MenuItem key={r.des_no} value={r.des_no} >{r.designation}</MenuItem>)

            this.setState({ department: dept, roles: role })
        }
        else
            console.log(res)
    }




    render() {

        const { roles, department, dept, role } = this.state
        const { classes } = this.props

        return (
            <Grid container xs={12} justify="flex-end">
                <Grid item >
                    <Paper className={classes.signup}>
                        <Typography className={classes.root} variant="h5" align="center">Create Employee</Typography>
                        <TextField className={classes.root} label="Employee Name" />
                        <TextField className={classes.root} label="Employee No" />
                        <SelectList label="Department" handleChange={this.handleChange} value={dept} list={department} />
                        <SelectList label="Designation" handleChange={this.handleChange} value={role} list={roles} />
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