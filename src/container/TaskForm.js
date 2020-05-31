import React from 'react'
import SelectList from '../component/Select'
import Header from '../component/Header'
import { Paper, withStyles, MenuItem, TextField, Button, Typography, TextareaAutosize, Box, Grid } from '@material-ui/core'
import { getData, postData } from '../utility/api'
import { validateData } from '../constant'

const useStyles = withStyles(theme => ({
    root: {
        width: 'auto',
        height: 800
    },
    field: {
        margin: theme.spacing(4)
    },
    box: {
        marginTop: 50,
        padding: theme.spacing(20),
        borderRadius: '10px',
        border: `1px solid ${theme.palette.primary.light}`,
        boxShadow: `2px 2px ${theme.palette.primary.light}`,
        maxWidth: '75%',
        minWidth: '75%',
        height: 300
    },
    itemList: {
        marginTop: theme.spacing(8)
    },
    textArea: {
        marginTop: theme.spacing(16),
        marginLeft: theme.spacing(2),
        fontSize: '16px',
        border: `1px solid ${theme.palette.primary.light}`,
        borderRadius: '5px',
        maxWidth: 250,
        maxHeight: 100,
        minHeight: 25,
        minWidth: 250,
        '&:hover': {
            boxShadow: `2px 2px ${theme.palette.secondary.light}`,
        },
        '&:focus': {
            outline: 'none'
        }
    }
}))

class TaskForm extends React.Component {

    constructor() {
        super()
        this.state = { query: '', queryDetails: '', queryFullList: [], queryList: '', empList: '', emp: '', error: { queryDetails: '' } }
    }


    componentDidMount() {
        getData('/query/formData', this.resData)
    }

    resData = (res) => {

        //console.log(res.rows[1])

        if (res.status === 'success') {
            const empdet = res.rows[0].empdet.map(d => <MenuItem className={this.props.classes.itemList} key={d.empno} value={d.empno} >{d.empname + ' - ' + d.deptname}</MenuItem>)
            this.setState({ empList: empdet, queryFullList: res.rows[1].empdet })

        }
        else {

        }
    }

    handleSubmit = (e) => {
        const { emp, query, queryDetails, error } = this.state
        if (validateData(error)) {
            const data = { assignto: emp, query, queryDetails }
            this.setState({ emp: "", query: "", queryDetails: "" })
            postData('/query/queryData', data, this.afterSubmit)
        }


    }

    afterSubmit = (res) => {
        console.log(res)
    }

    handleChange = (e) => {
        const { name, value } = e.target
        const { error, queryDetails } = this.state
        switch (name) {
            case 'queryDetails':
                error.queryDetails = (value.length === 0 || value.length > 3000) ? 'Minimum 20 to Maximum 3000 characters' : ''
                break
            default:
                error.queryDetails = queryDetails.length === 0 ? 'Minimum 20 to Maximum 3000 characters' : ''
                break
        }
        console.log(error)
        this.setState({ error, [name]: value }, () => {
            const { queryFullList, emp } = this.state
            let filterlists = queryFullList.filter((list) => {
                return list.empno === emp
            })
            filterlists.push({ resid: 0, responsibility: "General" })
            const lists = filterlists.map(r => <MenuItem className={this.props.classes.itemList} key={r.resid} value={r.responsibility} >{r.responsibility}</MenuItem>)
            this.setState({ queryList: lists })
        })
    }



    render() {
        const { query, queryDetails, queryList, empList, emp, error } = this.state
        const { classes } = this.props
        return (
            <Paper className={classes.root}>

                <Header />
                <Grid container direction="column" justify="flex-end" alignItems="center" spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.box} elevation={3}>
                            <Typography align="center" variant="h6" >Query Form</Typography>
                            <SelectList className={classes.field} name="emp" label="Assign To" handleChange={this.handleChange} value={emp} list={empList} />
                            <SelectList className={classes.field} name="query" label="Query" handleChange={this.handleChange} value={query} list={queryList} />
                            <TextareaAutosize className={classes.textArea} name="queryDetails" onChange={this.handleChange} value={queryDetails} rowsMin={5} placeholder="Enter Query detail..." />
                            {error.queryDetails && error.queryDetails}
                            <Button color="secondary" justify="right" onClick={this.handleSubmit}>Assign</Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper >

        )

    }



}

export default (useStyles)(TaskForm)

