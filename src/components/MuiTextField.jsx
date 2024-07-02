import React from "react";
import { useState } from "react";
import { TextField, Stack } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

export const MuiTextField = () => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField color="secondary" label="Outlined" variant="outlined" />
        <TextField label="Filled" variant="filled" />
        <TextField label="standard" variant="standard" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          color="secondary"
          label="Email"
          variant="outlined"
          defaultValue="Hello Warld"
        />
        <TextField
          color="secondary"
          label="password"
          variant="outlined"
          required
          type="password"
          value={value}
          onChange={handleChange}
          error={!value}
          helperText={!value ? "Requierd" : "Please enter a value"}
        />
        <TextField color="secondary" label="standard" variant="standard" />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField
          label="amount"
          variant="outlined"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="weight"
          variant="outlined"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
        {/* <TextField label="standard" variant="standard" /> */}
      </Stack>
    </Stack>
  );
};
