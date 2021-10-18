import { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Box } from '@material-ui/core';
import { Wrapper } from './Modal.styles';

type Props = {
  open: boolean;
  handleClose: () => void;
};

const ModalDialog: React.FC<Props> = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <Box component="form">
        <DialogTitle>Subscribe for a Test Drive</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill this following details to book your test drive.
          </DialogContentText>
          <TextField
            margin="dense"
            required
            id="name"
            label="Full Name"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="address"
            label="Address"
            fullWidth
            variant="standard"
          />
          <Wrapper>
            <TextField
              required
              id="phone"
              label="Phone No."
              variant="standard"
            />
            <TextField id="email" type="email" label="Email" />
          </Wrapper>
        </DialogContent>
      </Box>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalDialog;
