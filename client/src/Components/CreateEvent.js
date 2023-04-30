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

export default function CreateEvent() {
  return (
    <>
      <Box
        height="100vh"
        width="100vw"
        sx={{
          display: "flex",
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
            <Typography variant="h2" color="text.secondary">
              Create an Event
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Card
                  sx={{
                    width: "70vw",
                    backgroundColor: "background.paper",
                    borderRadius: "16px",
                  }}
                >
                  <Stack
                    direction="column"
                    alignItems="center"
                    textAlign="center"
                  >
                    <CardContent>
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
                        sx={{ width: "50vw" }}
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
                        sx={{ width: "50vw", noWrap: "false" }}
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
                    <DialogActions>
                      <Button variant="contained" component="label">
                        <Typography>Submit</Typography>
                      </Button>
                      <Button variant="contained" component="label">
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
