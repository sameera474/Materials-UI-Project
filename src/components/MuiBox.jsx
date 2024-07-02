import React from "react";
import { Box, Stack } from "@mui/material";

export const MuiBox = () => {
  return (
    <div>
      <Stack spacing={2} direction="row">
        <Box
          component="span"
          //   style={{
          //     color: "Black",
          //     backgroundColor: "lightgray",
          //     padding: "10px",
          //     borderRadius: "5px",
          //     margin: "10px",
          //     width: "150px",
          //   }}
          sx={{
            fontWeight: "bold",
            fontSize: "18px",
            letterSpacing: "1px",
            textTransform: "uppercase",
            border: "1px solid black",
            borderRadius: "5px",
            padding: "5px",
            margin: "5px",
            width: "200px",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "primary.light",
              color: "white",
            },
          }}
        >
          Sameera Wagaarachchige
        </Box>
      </Stack>
    </div>
  );
};
