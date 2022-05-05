import { DiamondSharp } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { UserContext } from "../../../pages/_app";
import Logo from "../../Logo";

const DesktopNav = () => {
  const checkLogin = useContext(UserContext);
  return (
    <AppBar position="sticky" sx={{ top: 0 }}>
      <Toolbar>
        {/* Logo stays on the left, rest goes to the right */}

        <Box sx={{ flexGrow: 1 }}>
          <Logo />
        </Box>

        {checkLogin?.isLoggedIn ? (
          <Toolbar sx={{ gap: 2 }}>
            <Avatar>JD</Avatar>
            <Button
              variant="contained"
              onClick={() => {
                checkLogin?.setIsLoggedIn(false);
              }}
            >
              Log Out
            </Button>
          </Toolbar>
        ) : (
          <Toolbar sx={{ gap: 2 }}>
            <Button variant="contained">Register</Button>
            <Button
              sx={{
                color: "secondary.contrastText",
                borderColor: "secondary.contrastText",
                "&:hover": {
                  color: "secondary.contrastText",
                  borderColor: "secondary.contrastText",
                  backgroundColor: "secondary.main",
                },
              }}
              variant="outlined"
              onClick={() => {
                checkLogin?.setIsLoggedIn(true);
              }}
            >
              Login
            </Button>
          </Toolbar>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default DesktopNav;
