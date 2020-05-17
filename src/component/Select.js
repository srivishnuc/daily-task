import React from 'react'
import { Select, InputLabel, Box, withStyles } from '@material-ui/core'
import { green } from '@material-ui/core/colors'


const useStyles = (style) => ({
    select: {
        width: 200,
        marginLeft: '3%',
    }, selectLabel: {
        marginLeft: '3%',
        marginTop: style.spacing(4)
    }

})

const SelectList = (props) => {



    const { label, handleChange, name, list, value, classes } = props
    return (
        <Box>
            <InputLabel className={classes.selectLabel}>{label}</InputLabel >
            <Select name={name} className={classes.select} onChange={handleChange} value={value}>
                {list}
            </Select>
        </Box>
    )


}


export default (withStyles)(useStyles)(SelectList)