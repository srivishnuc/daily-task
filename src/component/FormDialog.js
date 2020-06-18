import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SelectList from '../component/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { postData } from '../utility/api'

export default function FormDialog(props) {


    const [status, setStatus] = useState('')
    const [remark, setRemark] = useState('')


    var statuses = []

    if (props.status === "NEW") {
        statuses = [{ id: 1, status: 'IN-PROCESS' }, { id: 2, status: 'COMPLETED' }]

    }
    else {
        statuses = [{ id: 2, status: 'COMPLETED' }]
    }


    const statusList = statuses.map(list => <MenuItem key={list.id} value={list.status}>  {list.status} </MenuItem>)
    const handleChange = (e) => {
        if (e.target.id === "remark") {
            setRemark(e.target.value)
        }
        else {
            setStatus(e.target.value)
        }
    }



    const handleAdd = () => {
        postData('/query/queryLog', { id: props.id, status, remark }, afterPost)
        props.handleClose()

    }




    const afterPost = (res) => {
        console.log(res)

        if (res.status === "success") {
            console.log('success')
            setRemark('')
        }

    }

    return (
        <div >
            <Dialog open={props.dialog} onClose={props.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Set Status</DialogTitle>
                <DialogContent>
                    <SelectList label="Status" handleChange={handleChange} value={status} list={statusList} />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="remark"
                        label="Remark"
                        type="text"
                        fullWidth
                        value={remark}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color="primary">
                        Cancel
                 </Button>
                    <Button onClick={handleAdd} color="primary">
                        Add
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}