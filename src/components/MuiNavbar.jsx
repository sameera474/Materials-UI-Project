import * as React from "react";
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CodeIcon from "@mui/icons-material/Code";
import { useState } from "react";
import { Stack, useTheme, useMediaQuery, Drawer } from "@mui/material";

export const MuiNavbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleOpeningDrawer = () => {
    setMobileOpen(true);
  };
  const drawerList = (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        width: 250,
        padding: 2,
      }}
    >
      <Button
        sx={{
          color: "blue",
        }}
      >
        Home
      </Button>
      <Button
        sx={{
          color: "blue",
        }}
      >
        About
      </Button>
    </Stack>
  );

  return (
    <AppBar>
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton
              color="white"
              onClick={handleOpeningDrawer}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
              {drawerList}
            </Drawer>
          </>
        ) : (
          <>
            <CodeIcon
              sx={{
                color: "white",
                mr: 2,
              }}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                alignItems: "flex-start",
              }}
            >
              Sameera
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button
                sx={{
                  color: "white",
                }}
              >
                Home
              </Button>
              <Button
                sx={{
                  color: "white",
                }}
              >
                About
              </Button>
            </Stack>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
