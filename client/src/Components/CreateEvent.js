import React from "react";
import {
  Card,
  CardContent,
  Stack,
  Typography,
  Grid,
  TextField,
  Box,
  Button,
  DialogActions,
} from "@mui/material";

export default function CreateEvent({ onClose }) {
  return (
    <>
      <Box
        sx={{
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "background.default",
        }}
      >
        <Stack alignItems="center">
          <Stack
            spacing={2}
            direction="column"
            alignItems="center"
            textAlign="center"
          >
            <Typography
              variant="h2"
              color="text.secondary"
              width="60vw"
              paddingTop="10px"
            >
              Create an Event
            </Typography>

            <Grid container spacing={0}>
              <Grid item xs={12} sm={6}>
                <Card
                  sx={{
                    width: "60vw",
                    backgroundColor: "background.paper",
                    borderRadius: "16px",
                  }}
                >
                  <Stack
                    direction="column"
                    alignItems="center"
                    textAlign="center"
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <CardContent sx={{ maxHeight: "70vh", overflowY: "auto" }}>
                      <Typography
                        variant="h4"
                        sx={{ textAlign: "center", color: "primary.main" }}
                      >
                        Event Title
                      </Typography>
                      <TextField
                        required
                        id="outlined-basic"
                        label="Event Title"
                        variant="outlined"
                        multiline
                        sx={{ width: "100%", marginBottom: 2 }}
                      />
                      <Typography
                        variant="h4"
                        sx={{ textAlign: "center", color: "primary.main" }}
                      >
                        Event Description
                      </Typography>
                      <TextField
                        required
                        id="outlined-basic"
                        label="Event Description"
                        variant="outlined"
                        multiline
                        sx={{ width: "100%", marginBottom: 2 }}
                      />
                      <Typography
                        variant="h4"
                        sx={{ textAlign: "center", color: "primary.main" }}
                      >
                        Event Image
                      </Typography>
                      <Button required variant="contained" component="label">
                        Upload File
                        <input type="file" hidden />
                      </Button>
                    </CardContent>
                    <DialogActions sx={{ mt: "auto" }}>
                      <Button variant="contained" sx={{ width: "100%" }}>
                        <Typography>Submit</Typography>
                      </Button>
                      <Button
                        variant="contained"
                        sx={{ width: "100%" }}
                        onClick={onClose}
                      >
                        <Typography>Close</Typography>
                      </Button>
                    </DialogActions>
                  </Stack>
                </Card>
              </Grid>
            </Grid>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
