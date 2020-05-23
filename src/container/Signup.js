import React from 'react'
import { Typography, TextField, Button, Paper, withStyles, Grid, MenuItem } from '@material-ui/core'
import { getData, postData } from '../utility/api'
import SelectList from '../component/Select'

const useStyles = (style) => ({
    field: {
        margin: style.spacing(4)
    },
    signup: {
        display: 'flex',
        flexDirection: 'column',
        padding: style.spacing(20),
        borderRadius: '10px',
        width: 'auto'
    },
    itemList: {
        marginTop: style.spacing(8)
    }
})


class Signup extends React.Component {

    constructor() {
        super()
        this.state = { empno: "", empname: "", password: "", rpassword: "", roles: "", role: '', department: "", dept: '', error: { empname: '', empno: '', password: '', passmatch: '' } }
    }


    componentDidMount() {
        getData('/user/regData', this.regData)
    }

    validateData = (error) => {
        let valid = true;
        Object.values(error).forEach(val => val.length > 0 && (valid = false))
        return valid
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
        if (this.validateData(this.state.error)) {
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
        if (res.status === 'sucess') {
            const dept = res.dept[0].department.map((d) => <MenuItem className={this.props.classes.itemList} key={d.dept_no} value={d.dept_no} >{d.dept_name}</MenuItem>)
            const role = res.roles[0].roles.map((r) => <MenuItem className={this.props.classes.itemList} key={r.des_no} value={r.des_no} >{r.designation}</MenuItem>)

            this.setState({ department: dept, roles: role })
        }
        else
            console.log(res)
    }

    handleChange = (e) => {
        const { value, name } = e.target
        let error = this.state.error
        switch (name) {
            case 'empname':
                if (value.length < 4 || value.length !== 0)
                    error.empname = 'Minimum 4 character'
                else if (value.length > 50)
                    error.empname = 'Maximum 50 character'
                else
                    error.empname = ''
                break;
            case 'empno':
                error.empno = (value.length !== 0 || value.length !== 4 || typeof value !== 'number') ? 'Enter 4 digit employee id ' : ''
                break;
            case 'password':
                if (value.length < 8 || value.length !== 0)
                    error.password = 'Password must be atleast 8 character';
                else if (this.state.rpassword !== value && this.state.rpassword !== "")
                    error.password = '"Password not matched"'
                else
                    error.password = ''
                break;
            case 'rpassword':
                error.passmatch = (this.state.password === value) ? '' : "Password not matched"
                break;
            default:
                break;
        }

        this.setState({ error, [name]: value })
    }




    render() {
        const { roles, department, dept, role, empname, empno, password, rpassword } = this.state

        const { classes, history } = this.props
        return (
            <Grid container direction="row" justify="flex-end" alignItems="center">
                <Grid item>
                    <form>
                        <Paper className={classes.signup}>
                            <Typography className={classes.field} variant="h5" align="center">Create Employee</Typography>
                            <TextField type="text" className={classes.field} label="Employee Name" name="empname" value={empname} onChange={this.handleChange} />
                            <TextField type="text" className={classes.field} label="Employee No" name="empno" value={empno} onChange={this.handleChange} />
                            <SelectList name="dept" label="Department" handleChange={this.handleChange} value={dept} list={department} />
                            <SelectList name="role" label="Designation" handleChange={this.handleChange} value={role} list={roles} />
                            <TextField type="password" className={classes.field} label="Password" name="password" value={password} onChange={this.handleChange} />
                            <TextField type="password" className={classes.field} label="Re-Type Password" name="rpassword" value={rpassword} onChange={this.handleChange} />
                            <Button className={classes.field} variant="contained" color="primary" onClick={this.handleRegister} >Create</Button>
                            <Button className={classes.field} color="primary" onClick={() => { history.push('/signin') }} >Already have account</Button>
                        </Paper>
                    </form>
                </Grid>
            </Grid>
        )
    }


}


export default (withStyles)(useStyles)(Signup)