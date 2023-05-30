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
import Header from "../Components/header";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useMediaQuery } from "@mui/material";
import MapContainer from "../map";
import useScrollBlock from "../Components/useScrollBlock";
import Header from "../Components/header";
import { useNavigate } from "react-router-dom";
import Maps from "../pages/Map";

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

  const isSmallScreen = useMediaQuery("(max-width:500px)");

  const navigate = useNavigate();

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
        flexGrow={1}
        sx={{
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
            alignSelf: "flex-end",
            position: "fixed",
            bottom: 10,
            right: 20,
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
          onClick={() => navigate("/map")}
          sx={{
            alignSelf: "flex-end",
            position: "fixed",
            bottom: 80,
            right: 20,
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
            alignSelf: "flex-end",
            position: "fixed",
            bottom: 150,
            right: 20,
            backgroundColor: "#F7AF9D",
            width: isSmallScreen ? "90px" : "60px",
            height: isSmallScreen ? "90px" : "60px",
          }}
        >
          <AccountIcon />
        </IconButton>

        <Header />

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
              right: 50,
              bottom: 50,
              position: "fixed",
              backgroundColor: "#F7AF9D",
              width: isSmallScreen ? "90px" : "60px",
              height: isSmallScreen ? "90px" : "60px",
            }}
          >
            <AddRoundedIcon
              sx={{
                frontSize: isSmallScreen ? "100px" : "50px",
              }}
            />
          </IconButton>

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
          <CreateEvent onClose={handlePopupClose} />
        </Popups>
      </Box>
    </div>
  );
}
