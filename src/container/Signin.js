import React from 'react'
import { Grid, TextField, Button, withStyles, Paper, Typography } from '@material-ui/core'
import { putData } from '../utility/api'
import { Redirect, Route } from 'react-router-dom'



const useStyles = withStyles(theme => ({

    field: {
        margin: theme.spacing(2)
    },
    login: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(20),
        borderRadius: '10px',
        marginTop: '35%',
        marginRight: '10%'
    }
})
)



class Signin extends React.Component {

    constructor() {
        super()
        this.state = { empno: "", password: "", error: { empname: '', password: '' } }
    }

    handleLogin = () => {
        const { empno, password } = this.state
        putData('/user/login', { empno, password }, this.afterLogin)
    }

    afterLogin = (res) => {
        console.log(res)
        const { history } = this.props
        console.log(history)
        if (res.status === 'success') {
            this.setState({ empno: '', password: '' })
            localStorage.setItem('token', res.data)
            history.push('/')
        }
        else
            console.error('login failed')
    }

    handleChange = (e) => {
        const { name, value } = e.target
        const { error } = this.state
        switch (name) {
            case 'empno':
                error.empname = (value.length === 0 || value.length !== 4 || typeof value.length !== 'number') ? 'Invalid Empno' : ''
                break
            case 'password':
                error.password = (value.length === 0 || value.length < 8) ? 'Invalid Password' : ''
                break
            default:
                break
        }
        // console.log(error)
        this.setState({ error, [name]: value })
    }


    render() {
        const { classes, history } = this.props
        const { empno, password } = this.state
        return (
            <Grid container alignItems="center" justify="flex-end" >
                <Grid item>
                    <form>

                        <Paper className={classes.login} elevation={2}>
                            <Typography className={classes.field} variant="h5" align="center">Login</Typography>
                            <TextField type="text" name="empno" onChange={this.handleChange} value={empno} className={classes.field} label="Employee No" />
                            <TextField type="password" name="password" onChange={this.handleChange} value={password} className={classes.field} label="Password" />
                            <Button className={classes.field} variant="contained" color="primary" onClick={this.handleLogin} >Login</Button>
                            <Button className={classes.field} color="primary" onClick={() => { history.push('/signup') }} >Create Employee</Button>
                        </Paper>

                    </form>
                </Grid>
            </Grid >
        )
    }


}


export default (useStyles)(Signin)