import React from "react";
import { Button, Stack, IconButton } from "@mui/material";

// import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";

import SendIcon from "@mui/icons-material/Send";

import DeleteIcon from "@mui/icons-material/Delete";

export const MuiButton = () => {
  return (
    <div>
      <Stack spacing={4}>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>

        <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary">
            primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
          <Button variant="contained" color="warning">
            warning
          </Button>
        </Stack>

        <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary" size="small">
            primary
          </Button>{" "}
          <Button variant="contained" color="primary" size="medium">
            primary
          </Button>
          <Button variant="contained" color="primary" size="large">
            primary
          </Button>
        </Stack>

        <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary" startIcon={<SendIcon />}>
            Submit
          </Button>
          <Button variant="contained" color="primary" endIcon={<SendIcon />}>
            Submit
          </Button>

          <IconButton
            onClick={() => alert("Clicked")}
            color="success"
            size="small"
            aria-leble="delete"
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Stack>
    </div>
  );
};
