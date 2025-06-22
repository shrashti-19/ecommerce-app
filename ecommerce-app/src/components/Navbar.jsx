import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1976d2" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            MyEcommerce
          </Typography>

          <Box>
            <Button
              component={Link}
              to="/"
              color="inherit"
              sx={{ mx: 1, fontWeight: "600" }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/login"
              color="inherit"
              sx={{ mx: 1, fontWeight: "600" }}
            >
              Login
            </Button>
            <Button
              component={Link}
              to="/dashboard"
              color="inherit"
              sx={{ mx: 1, fontWeight: "600" }}
            >
              Dashboard
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
