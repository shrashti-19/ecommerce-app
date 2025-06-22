import { Container, Typography } from "@mui/material";

export default function Dashboard() {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard - Protected Content
      </Typography>
    </Container>
  );
}
