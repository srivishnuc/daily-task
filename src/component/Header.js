import React from 'react'
import { AppBar, Typography, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'




function Header() {
    const history = useHistory()

    const handleLogout = () => {
        //localStorage.removeItem('token')
        history.push('/signin')
    }

    return (

        <AppBar>
            <Typography variant="h4" align="center">Task Reporter</Typography>
            <Button color="secondary" onClick={handleLogout}>Logout</Button>
        </AppBar >


    )
}





export default Header;