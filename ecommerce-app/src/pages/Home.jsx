import { Container, Typography, Box } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to MyEcommerce Store!
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Discover amazing products curated just for you.
      </Typography>
      <Box sx={{ mt: 4 }}>
        {/* You can add featured products here later */}
      </Box>
    </Container>
  );
}
