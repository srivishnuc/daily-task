import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Dialog from '../component/FormDialog'
import Chip from '@material-ui/core/Chip'


const useStyles = makeStyles(theme => ({
    card: {
        width: 275,
        height: 175,
        margin: theme.spacing(4),
        '&:hover': {
            cursor: 'pointer',
            boxShadow: `0 10px 20px ${theme.palette.primary.light}`
        }
    },

}));


export default function SimpleCard(props) {
    const classes = useStyles();
    const { data, status } = props
    const [dialog, setDialog] = useState(false);

    const handleclick = () => {
        setDialog(true)
    }


    const handleClose = () => {
        setDialog(false);
    };

    return (
        <React.Fragment>
            {(dialog && status !== "COMPLETED") && <Dialog status={status} dialog={dialog} handleClose={handleClose} />}
            <Card onClick={handleclick} className={classes.card} >
                <CardContent>
                    <Typography variant="h6" color="textSecondary" gutterBottom>
                        {data.taskname}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                        {data.query}
                    </Typography>
                    <Typography variant="caption" color="textSecondary" gutterBottom>
                        Assigned by {data.assignby} -  {data.createdtime}
                    </Typography>
                    {status === "COMPLETED" && < Chip color="secondary" label="COMPLETED" />}
                </CardContent>
            </Card >
        </React.Fragment >
    );



}


