import React from 'react'
import { Typography, TextField, Button, Paper, withStyles, Grid, MenuItem } from '@material-ui/core'
import { getData, postData } from '../utility/api'
import SelectList from '../component/Select'
import { validateData } from '../constant'

const useStyles = withStyles(theme => ({
    root: {
        height: 600
    },
    field: {
        margin: theme.spacing(8),
        display: 'block'
    },
    signup: {
        position: 'relative',
        height: 600,
        display: 'block',
        padding: theme.spacing(20),
        borderRadius: '10px',
    }, dropdown: {
        margin: theme.spacing(48),
    },
    itemList: {
        marginTop: theme.spacing(8)
    },
    error: {
        position: 'absolute',
        margin: 0,
        padding: 0,
        // display: 'block',
    },
    btn: {
        position: 'static',
        margin: theme.spacing(8)
    }

})
)


class Signup extends React.Component {

    constructor() {
        super()
        this.state = { empno: "", empname: "", password: "", rpassword: "", roles: "", role: '', department: "", dept: '', error: { empname: '', empno: '', password: '', passmatch: '' } }
    }


    componentDidMount() {
        getData('/user/regData', this.regData)
    }



    handleRegister = () => {
        const { dept, role, empname, empno, password } = this.state
        // dept = dept.trim();
        // role = role.trim();
        // empname = empname.trim();
        // empno = empno.trim();
        // password = password.trim();
        // rpassword = rpassword.trim();
        // if (password !== rpassword)
        //     this.setState({ error: true, errorMsg: 'Password did not match' })
        const data = { deptno: dept, desno: role, empname, empno, password }
        if (validateData(this.state.error)) {
            postData('/user/', data, this.afterRegister)
            // console.info('Valid Data')
        }
        else {
            //console.error('Invalid Data')
        }
    }

    afterRegister = (res) => {

        this.setState({ empname: "", empno: "", password: "", rpassword: "", dept: "", role: "" })
        if (res.status === 'success') {

        }
        else {

        }
    }

    regData = (res) => {
        if (res.status === 'success') {
            const dept = res.dept[0].department.map((d) => <MenuItem className={this.props.classes.itemList} key={d.dept_no} value={d.dept_no} >{d.dept_name}</MenuItem>)
            const role = res.roles[0].roles.map((r) => <MenuItem className={this.props.classes.itemList} key={r.des_no} value={r.des_no} >{r.designation}</MenuItem>)

            this.setState({ department: dept, roles: role })
        }
        else
            console.log(res)
    }

    handleChange = (e) => {
        var { value, name } = e.target
        let error = this.state.error
        switch (name) {
            case 'empname':
                if (value.length < 4 || value.length === 0)
                    error.empname = 'Minimum 4 character'
                else if (value.length > 50)
                    error.empname = 'Maximum 50 character'
                else
                    error.empname = ''
                break;
            case 'empno':
                error.empno = (value.length !== 4) ? 'Enter 4 digit employee id ' : ''
                break;
            case 'password':
                error.password = (value.length < 8) ? 'Password must be 8 character' : ''
                error.passmatch = value !== this.state.rpassword ? 'Password mis-match' : ''
                break;
            case 'rpassword':
                error.passmatch = value !== this.state.password ? 'Password mis-match' : ''
                break;
            default:
                break;
        }
        console.log(this.state.password)
        console.log(this.state.rpassword)
        this.setState({ error, [name]: value })
    }




    render() {
        const { roles, department, dept, role, empname, empno, password, rpassword, error } = this.state

        const { classes, history } = this.props
        return (
            <Grid container direction="row" justify="flex-end" >
                <Grid item >
                    <Paper className={classes.signup}>
                        <Typography className={classes.field} variant="h5" align="center">Create Employee</Typography>
                        <div className={classes.field}>
                            <TextField type="text" label="Employee Name" name="empname" value={empname} onChange={this.handleChange} />
                            <Typography className={classes.error} color="error" variant="caption" display="block" gutterBottom>
                                {(error.empname && empname.length > 2) && error.empname}
                            </Typography>
                        </div>
                        <div className={classes.field}>
                            <TextField type="text" label="Employee No" name="empno" value={empno} onChange={this.handleChange} />
                            <Typography className={classes.error} color="error" variant="caption" display="block" gutterBottom>
                                {error.empno && error.empno}
                            </Typography>
                        </div>
                        <div className={classes.field}>
                            <SelectList className={classes.dropdown} name="dept" label="Department" handleChange={this.handleChange} value={dept} list={department} />
                        </div>
                        <div className={classes.field}>
                            <SelectList className={classes.dropdown} name="role" label="Designation" handleChange={this.handleChange} value={role} list={roles} />
                        </div>
                        <div className={classes.field}>
                            <TextField type="password" label="Password" name="password" value={password} onChange={this.handleChange} />
                            <Typography color="error" variant="caption" display="block" gutterBottom>
                                {error.password && error.password}
                            </Typography>
                        </div>
                        <div className={classes.field}>
                            <TextField type="password" label="Re-Type Password" name="rpassword" value={rpassword} onChange={this.handleChange} />
                            <Typography color="error" variant="caption" display="block" gutterBottom>
                                {error.passmatch && error.passmatch}
                            </Typography>
                        </div>
                        <div className={classes.btn}>
                            <Button variant="contained" color="primary" onClick={this.handleRegister} >Create</Button>
                            <Button color="primary" onClick={() => { history.push('/signin') }} >Already have account</Button>
                        </div>
                    </Paper>
                </Grid>
            </Grid >
        )
    }


}


export default (useStyles)(Signup)