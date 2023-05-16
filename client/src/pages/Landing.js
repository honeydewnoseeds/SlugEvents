import React from "react";
import { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  IconButton,
  // Card,
  // CardContent,
  // CardHeader,
  // useThemeProps,
} from "@mui/material";
import Event from "../Components/EventCard";
import Filters from "../Components/filters";
import CreateEvent from "../Components/CreateEvent";
import Popups from "../Components/popups";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

export default function Landing({
  eventList,
  resetFilter,
  filterC9C10,
  filterPorterKresge,
  filterCowellStevenson,
  filterRccOakes,
  filterCrownMerill,
}) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const handlePopupClose = () => {
    setButtonPopup(false);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        height: "100%",
      }}
    >
      <Box
        height="auto"
        minHeight="150vh"
        width="auto"
        //auto fit constraints
        flexGrow={1}
        sx={{
          ".full-screen-map": {
            position: "fixed",
            top: 0,
            left: 0,
            maxWidth: "100vw",
            maxHeight: "100vh",
          },
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "background.default",
        }}
      >
        <IconButton
          size="medium"
          variant="contained"
          onClick={() => setButtonPopup(true)}
          sx={{
            alignSelf: "right",
            right: 20,
            bottom: 10,
            position: "fixed",
            backgroundColor: "#F7AF9D",
            width: isSmallScreen ? "90px" : "60px",
            height: isSmallScreen ? "90px" : "60px",
          }}
        >
          <AddRoundedIcon />
        </IconButton>

        <IconButton
          size="medium"
          variant="contained"
          onClick={() => {
            blockScroll();
            setShowMap(true);
          }}
          sx={{
            alignSelf: "right",
            right: 20,
            bottom: 80,
            position: "fixed",
            backgroundColor: "#F7AF9D",
            width: isSmallScreen ? "90px" : "60px",
            height: isSmallScreen ? "90px" : "60px",
          }}
        >
          <MapIcon />
        </IconButton>

        <IconButton
          size="medium"
          variant="contained"
          sx={{
            alignSelf: "right",
            right: 20,
            bottom: 150,
            position: "fixed",
            backgroundColor: "#F7AF9D",
            width: isSmallScreen ? "90px" : "60px",
            height: isSmallScreen ? "90px" : "60px",
          }}
        >
          <AccountIcon />
        </IconButton>
        <Stack
          spacing={2}
          direction="column"
          alignItems="center"
          textAlign="center"
          padding={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconButton
            size="large"
            variant="contained"
            onClick={() => setButtonPopup(true)}
            sx={{
              alignSelf: "right",
              right: 40,
              bottom: 40,
              position: "fixed",
              backgroundColor: "#F7AF9D",
            }}
          >
            <AddRoundedIcon />
          </IconButton>

          <Typography variant="h2" color="text.secondary">
            SlugEvents
          </Typography>

          <Stack direction="row" spacing={2}>
            <Filters
              resetFilter={resetFilter}
              filterC9C10={filterC9C10}
              filterPorterKresge={filterPorterKresge}
              filterCowellStevenson={filterCowellStevenson}
              filterRccOakes={filterRccOakes}
              filterCrownMerill={filterCrownMerill}
            />
          </Stack>

          <Stack
            direction="column"
            alignItems="center"
            textAlign="center"
            spacing={2}
          >
            {eventList.map((event) => (
              <Event
                key={event.title}
                title={event.title}
                description={event.description}
                imageSrc={event.imageSrc}
                account={event.account}
              />
            ))}
          </Stack>
        </Stack>
        <Popups trigger={buttonPopup}>
          <CreateEvent onClose={handlePopupClose}> </CreateEvent>
        </Popups>
        {showMap && (
          <>
            <MapContainer handleCloseMap={handleCloseMap} />
            <IconButton
              size="medium"
              variant="contained"
              onClick={() => {
                handleCloseMap();
                allowScroll();
              }}
              sx={{
                position: "fixed",
                top: 10,
                right: 65,
                color: "black",
              }}
            >
              <CloseIcon />
            </IconButton>
          </>
        )}
      </Box>
    </div>
  );
}
