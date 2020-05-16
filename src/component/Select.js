import React from 'react'
import { Select, InputLabel, Box } from '@material-ui/core'


const SelectList = (props) => {


    const { label, handleChange, list, value } = props
    return (
        <Box>
            <InputLabel>{label}</InputLabel>
            <Select onChange={handleChange} value={value}>
                {list}
            </Select>
        </Box>
    )


}


export default SelectList