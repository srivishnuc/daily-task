import React, { useState } from 'react';
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

    var statuses = []

    if (props.status === "NEW") {
        statuses = [{ id: 1, status: 'In-Process' }, { id: 2, status: 'Completed' }]

    }
    else {
        statuses = [{ id: 2, status: 'Completed' }]
    }

    const statusList = statuses.map(list => <MenuItem key={list.id} value={list.status}>  {list.status} </MenuItem>)
    const handleChange = (e) => {
        setStatus(e.target.value)
    }

    const handleAdd = () => {
        postData()
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
                        id="name"
                        label="Remark"
                        type="text"
                        fullWidth
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