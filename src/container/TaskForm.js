import React from 'react'
import SelectList from '../component/Select'
import Header from '../component/Header'
import { Paper, withStyles, TextField, Button, Typography, TextareaAutosize, Box, Grid } from '@material-ui/core'
import { getData } from '../utility/api'


const useStyles = (style) => ({
    root: {
        width: 'auto',
        height: 800
    },
    field: {
        margin: style.spacing(4)
    },
    box: {
        marginTop: 50,
        padding: style.spacing(20),
        borderRadius: '10px',
        border: `1px solid green`,
        boxShadow: '5px 7px darkgreen',
        maxWidth: '75%',
        minWidth: '75%',
        height: 300
    },
    itemList: {
        marginTop: style.spacing(8)
    },
    textArea: {
        marginTop: style.spacing(16),
        marginLeft: style.spacing(2),
        fontSize: '16px',
        border: '1px solid green',
        borderRadius: '5px',
        maxWidth: 250,
        maxHeight: 100,
        minHeight: 25,
        minWidth: 250,
        '&:hover': {
            boxShadow: '5px 7px #888',
        },
        '&:focus': {
            outline: 'none'
        }
    }
})

class TaskForm extends React.Component {

    constructor() {
        super()
        this.state = { query: '', queryDetails: '', queryList: '', empList: '', emp: '', error: { queryDet: '' } }
    }


    componentDidMount() {
        getData('\query\formData', this.resData)

    }

    resData = (res) => {
        console.log(res)

        if (res.status === 'success') {
        }
        else {

        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        const { error } = this.state
        switch (name) {
            case 'queryDetails':
                error.empname = (value.length === 0 || value.length > 3000) ? 'Minimum 20 to Maximum 3000 characters' : ''
                break
            default:
                break
        }
        // console.log(error)
        this.setState({ error, [name]: value })
    }


    render() {
        const { query, queryDetails, queryList, empList, emp } = this.state
        const { classes } = this.props
        return (
            <Paper className={classes.root}>

                <Header />
                <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
                    <Grid item xs={12}>
                        <Box className={classes.box}>
                            <Typography align="center" variant="h6" >Query Form</Typography>
                            <SelectList className={classes.field} name="emp" label="Assign To" handleChange={this.handleChange} value={emp} list={empList} />
                            <SelectList className={classes.field} name="query" label="Query" handleChange={this.handleChange} value={query} list={queryList} />
                            <TextareaAutosize className={classes.textArea} name="queryDetails" onChange={this.handleChange} value={queryDetails} rowsMin={5} placeholder="Enter Query detail..." />
                            <Button align="center" >Assign</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Paper >

        )

    }



}

export default (withStyles)(useStyles)(TaskForm)

