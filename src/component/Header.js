import React from 'react'
import { withStyles, AppBar, Typography, Button } from '@material-ui/core'
// import { logout } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import Drawer from './Drawer'


const useStyles = () => ({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: '8%'
    },
    logout: {
        position: 'absolute',
        right: '3%',
        top: '3%',
        height: '50%',
        padding: '1%',
        '&:hover': {
            cursor: 'pointer',
        }
    },
})

function Header(props) {
    const history = useHistory()
    const { classes } = props
    const handleLogout = () => {
        //localStorage.removeItem('token')
        history.push('/signin')
    }

    return (
        <React.Fragment>
            <AppBar className={classes.root}>
                <Drawer history={history} />
                <Typography variant="h5">Task Reporter</Typography>
                <img className={classes.logout} src={require(`../images/icons/logout.png`)} onClick={handleLogout} />
            </AppBar >

        </React.Fragment>
    )
}





export default (withStyles)(useStyles)(Header);