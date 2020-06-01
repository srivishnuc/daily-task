import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    card: {
        width: 275,
        height: 175,
        margin: theme.spacing(4)
    },

}));

export default function SimpleCard(props) {
    const classes = useStyles();
    const { data } = props
    return (
        <Card className={classes.card}>
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
            </CardContent>
        </Card>
    );
}