import * as React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import App from "../App";
import Fade from "@mui/material/Fade";

const boxStyle = {
  display: "flex",
  flexDirection: "column",
  gap: 5,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "black",
  color: "white",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};

const buttonStyle = {
  color: "white",
  fontSize: "20px",
};

export default function FriendCall({ open, handleClose, helpMessage }) {
  return (
    <div>
      <Modal
        component={App.js}
        open={open.open}
        onClose={() => handleClose(open.type)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open.open} exit={true}>
          <Box sx={boxStyle}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {helpMessage}
            </Typography>

            <Button sx={buttonStyle} onClick={handleClose}>
              OK
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
