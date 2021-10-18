import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
} from '@material-ui/core';
import { Wrapper } from './Modal.styles';

type Props = {
  open: boolean;
  handleClose: () => void;
};

const ModalDialog: React.FC<Props> = ({ open, handleClose }) => (
  <Dialog open={open} onClose={handleClose}>
    <Box component="form">
      <DialogTitle>Subscribe for a Test Drive</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please fill the following details to book your test drive.
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
          <TextField required id="phone" label="Phone No." variant="standard" />
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

export default ModalDialog;
