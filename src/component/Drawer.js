import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton'
import { Home, Notes, Menu } from '@material-ui/icons';

const useStyles = makeStyles(theme => {
    console.log(theme)
    return ({
        list: {
            width: 250,
            color: `${theme.palette.primary.main}`
        },
        fullList: {
            width: 'auto',
        },
        menuIcon: {
            position: 'absolute',
            left: '3%',
            margin: 0

        }
    })
})

export default function TemporaryDrawer(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false
    });
    const toggleDrawer = (anchor, open) => (event) => {

        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => {
        const { history } = props
        const options = [{
            label: 'Home',
            icon: <Home />,
            route: '/'
        }, {
            label: 'Query',
            icon: <Notes />,
            route: '/query'
        }];
        return (
            <div
                className={clsx(classes.list, {
                    [classes.fullList]: anchor === 'top' || anchor === 'bottom',
                })}
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <List>
                    {options.map((lists) => (
                        < ListItem button key={lists.label} onClick={() => history.push(lists.route)}>
                            <ListItemIcon>{lists.icon}</ListItemIcon>
                            <ListItemText primary={lists.label} />
                        </ListItem>
                    ))}
                </List>
            </div >
        )

    }

    return (
        <div>
            < React.Fragment >
                <IconButton edge="start" className={classes.menuIcon} onClick={toggleDrawer('left', true)} color="inherit" aria-label="menu">
                    <Menu />
                </IconButton>
                <Drawer anchor={"left"} open={state.left} onClose={toggleDrawer("left", false)}>
                    {list('left')}
                </Drawer>
            </React.Fragment >
        </div>
    );
}
