import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/material';

export interface SimpleDialogProps {
  open: boolean;
  image: string;
  onClose: () => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open, image } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="lg" fullWidth>
      <img src={image} width="100%" />
    </Dialog>
  );
}

export default function ImageDialog({ image }: { image: string }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ width: '70%', margin: '0 auto' }}>
      <img
        src={image}
        onClick={handleClickOpen}
        style={{ maxWidth: '100%', padding: '2rem', cursor: 'pointer' }}
      />
      <SimpleDialog open={open} image={image} onClose={handleClose} />
    </Box>
  );
}
