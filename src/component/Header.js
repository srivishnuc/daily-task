import React from 'react'
import { withStyles, AppBar, Typography, Button } from '@material-ui/core'
// import { logout } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import TemporaryDrawer from '../component/AppDraw'


const useStyles = () => ({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    logout: {
        position: 'absolute',
        right: '3%',
        height: '100%',
        '&:hover': {
            cursor: 'pointer'
        }
    }
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
                <TemporaryDrawer />
                <Typography variant="h5" align="center">Task Reporter</Typography>
                <img className={classes.logout} src={require(`../images/icons/logout.png`)} onClick={handleLogout} />
            </AppBar >

        </React.Fragment>
    )
}





export default (withStyles)(useStyles)(Header);