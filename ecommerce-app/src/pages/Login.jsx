import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  Paper,
} from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 8,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: 4,
          width: "100%",
          borderRadius: 2,
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="h4" gutterBottom textAlign="center">
          Login to Your Account
        </Typography>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 3 }}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 4 }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            size="large"
            sx={{ fontWeight: "600" }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
