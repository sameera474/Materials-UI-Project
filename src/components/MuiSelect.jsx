import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FormControlLabel, Radio } from "@mui/material";

export const MuiSelect = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const ageOptions = [
    { value: 10, name: "Ten" },
    { value: 20, name: "Twenty" },
    { value: 30, name: "Thirty" },
    { value: 40, name: "Fourty" },
    { value: 10, name: "Ten" },
    { value: 20, name: "Twenty" },
    { value: 30, name: "Thirty" },
    { value: 40, name: "Fourty" },

    // Add more options as needed... 100, 110, 120, etc. for a wider range of ages. 130+ is not typically adult in this context. 18+ is generally considered adult. 19+ is considered very young. 25+ is considered young adult. 35+ is considered middle-aged adult. 45+ is considered senior adult. 55+ is considered very senior adult. 65+ is considered older adult. 75+ is considered very old adult. 85+ is considered retired adult. 95+ is considered very retired adult.
  ];
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          {ageOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}

          {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );
};
