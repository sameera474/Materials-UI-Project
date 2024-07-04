import React from "react";
import { Grid, Stack, Box, Typography } from "@mui/material";

export const MuiGrid = () => {
  return (
    <Stack sx={{ flexGrow: 1 }} columnGap={2} rowGap={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box
            sx={{
              height: "100%",
              p: 2,
              bgcolor: "#e0a6c7",
              alignItems: "center",
              display: "flex",
              boxShadow: "0 4px 10px rgba(0,0,0)",
            }}
          >
            <Typography variant="subtitle" textAlign="center" color="white">
              Box 1 : xs=12 sm=6 md=4 lg=3
            </Typography>
          </Box>
          {/* <Grid container justifyContent="center" spacing={3}>
            <Grid item>Item 1</Grid>
            <Grid item>Item 2</Grid>
            <Grid item>Item 3</Grid>
          </Grid> */}
        </Grid>

        <Grid item xs={8} sm={4} md={4} lg={2}>
          <Box
            sx={{
              height: "100%",
              p: 2,
              bgcolor: "#fcba03",
              alignItems: "center",
              display: "flex",
              boxShadow: "0 4px 10px rgba(0,0,0)",
            }}
          >
            <Typography variant="subtitle" textAlign="center" color="white">
              Box 2 : xs=8 sm=4 md=4 lg=2
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box
            sx={{
              height: "100%",
              p: 2,
              bgcolor: "#0317fc",
              alignItems: "center",
              display: "flex",
              boxShadow: "0 4px 10px rgba(0,0,0)",
              color: "white",
            }}
          >
            <Typography variant="subtitle" textAlign="center" color="white">
              Box 3 : xs=12 sm=6 md=4 lg=3
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={8} sm={4} md={4} lg={2}>
          <Box
            sx={{
              height: "100%",
              p: 2,
              bgcolor: "#03fc38 ",
              alignItems: "center",
              display: "flex",
              boxShadow: "0 4px 10px rgba(0,0,0)",
            }}
          >
            <Typography variant="subtitle" textAlign="center" color="white">
              Box 4 : xs=8 sm=4 md=4 lg=2
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* <Grid container spacing={3}>
        <Grid item xs={6}>
          <Grid container justifyContent="flex-start" spacing={3}>
            <Grid item>Item 4</Grid>
            <Grid item>Item 5</Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container justifyContent="flex-end" spacing={3}>
            <Grid item>Item 6</Grid>
            <Grid item>Item 7</Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={3}></Grid> */}
    </Stack>
  );
};
