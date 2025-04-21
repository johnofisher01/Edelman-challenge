import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const SummaryModal = ({ open, onClose, summary }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Article Summary
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: 2 }}>
          {summary || "No summary available."}
        </Typography>
        <Button variant="contained" onClick={onClose}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default SummaryModal;