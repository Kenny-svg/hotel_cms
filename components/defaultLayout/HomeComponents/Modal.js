import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FaThumbsUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #EAB308',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({open, handleClose, content, contentTwo}) {
  const isAdded = useSelector((state) => state.wishlist.isAdded)
       console.log(isAdded)
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography style={{textAlign: "center",fontWeight: "bold"}} id="transition-modal-title" variant="h6" component="h2">
              KandB
            </Typography>
            <FaThumbsUp className='text-4xl text-yellow-500 mx-auto mt-3' />
            <Typography id="transition-modal-description" style={{textAlign: "center"}} sx={{ mt: 2, }}>
             {isAdded ? content : contentTwo}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}