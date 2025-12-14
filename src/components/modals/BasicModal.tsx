import { type FC, type ReactNode } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

interface ModalProps {
    children: ReactNode;
    open: boolean;
    handleClose: () => void;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: 'none',
  outline: 'none',
  boxShadow: 24,
};


const BasicModal:FC<ModalProps> = ({children, open, handleClose }) => {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            {children}
        </Box>
      </Modal>
    </div>
  );
}


export default BasicModal;
