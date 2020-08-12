import React from 'react';
import { IconButton, Button } from '@material-ui/core';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

export default function Page({data, icon}: {data:{title:String,description:any}, icon:any}) {
    const [open, setOpen] = React.useState(false);

    const dataAlert = data;
    const iconAlert = icon;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <IconButton aria-label="delete" size="small" onClick={handleClickOpen}>
                {iconAlert}
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {dataAlert.title}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {dataAlert.description}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Cerrar
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}