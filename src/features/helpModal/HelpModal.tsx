import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { useMediaQuery } from 'react-responsive';

interface ModalProps {
  open: {
    open: boolean;
    type: undefined | string;
  };
  handleClose: (type: undefined | string) => void;
  helpMessage: string;
}

export default function FriendCall({
  open,
  handleClose,
  helpMessage,
}: ModalProps) {
  const isMobile = useMediaQuery({ query: '(max-width: 820px)' });

  const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isMobile ? 300 : 500,
    bgcolor: 'black',
    color: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '10px',
    p: 4,
  };

  const buttonStyle = {
    color: 'white',
    fontSize: '20px',
  };

  return (
    <div>
      <Modal
        open={open.open}
        onClose={() => handleClose(open.type)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open.open} exit={true}>
          <Box sx={boxStyle}>
            <Typography
              id='modal-modal-title'
              variant='h6'
              component='h2'
              sx={{
                textAlign: 'center',
                fontSize: isMobile ? '1.5rem' : '2rem',
              }}
            >
              {helpMessage}
            </Typography>

            <Button sx={buttonStyle} onClick={() => handleClose(open.type)}>
              OK
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
