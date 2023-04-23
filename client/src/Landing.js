import React from "react";
import { Box, Typography, Stack, Card } from "@mui/material";

export default function Landing() {
  return (
    <Box
      height="100vh"
      width="100vw"
      sx={{ flexGrow: 1, backgroundColor: "background.default" }}
    >
      <Stack spacing={2} direction="column" alignItems="center">
        <Typography variant="h1" color="text.secondary">
          SlugEvents
        </Typography>
        <Card color="background.paper">
          <Typography variant="h2">Welcome to SlugEvents!</Typography>
        </Card>
      </Stack>
    </Box>
  );
}
