import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import { collection, getDocs } from "firebase/firestore";

import CustomMarker from "./CustomMarker";
import { db } from "../config/firebase";

// Sets Style for Map
const mapStyles = {
  width: "100%",
  height: "100%",
};

// Image used for User Location
const userImage = "https://cdn-icons-png.flaticon.com/512/1673/1673221.png";

// Size of User Location Marker
const markerSize = {
  width: 40,
  height: 40,
};

// Center coordinates of UCSC to place Map
const UCSCMID = {
  lat: 36.99548112809275,
  lng: -122.06084628167693,
};

class MapContainer extends Component {
  state = {
    // Initialize lat, lng for userLocation
    userLocation: {
      lat: null,
      lng: null,
    },
    // Initialize InfoWindow to closed
    isInfoWindowOpen: {
      currentLocation: false,
    },
    // Array to store Custom Markers
    markers: [],
  };

  constructor(props) {
    super(props);
    this.fetchMarkersFromDatabase();
  }

  fetchMarkersFromDatabase = () => {
    if (this.state.markers.length > 0) {
      return;
    }

    getDocs(collection(db, "events"))
      .then((querySnapshot) => {
        const markers = querySnapshot.docs.map((doc) => doc.data());
        this.setState({ markers });
      })
      .catch((error) => {
        console.log("Error getting events:", error);
      });
  };

  // Called when Map is rendered and tracks user location
  componentDidMount() {
    if (navigator.geolocation) {
      this.watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          this.setState({
            userLocation: { lat: latitude, lng: longitude },
          });
        },
        (error) => console.log(error),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    }
  }

  // Update the isInfoWindowOpen state to open markerName info window
  handleMarkerClick = (markerName) => {
    this.setState((prevState) => ({
      isInfoWindowOpen: {
        ...prevState.isInfoWindowOpen,
        [markerName]: true,
      },
    }));
  };

  // Update the isInfoWindowOpen state to close the markerName info window
  handleInfoWindowClose = (markerName) => {
    this.setState((prevState) => ({
      isInfoWindowOpen: {
        ...prevState.isInfoWindowOpen,
        [markerName]: false,
      },
    }));
  };

  // Clear the geolocation watch if it is active when the Map not being rendered
  componentWillUnmount() {
    if (navigator.geolocation) {
      navigator.geolocation.clearWatch(this.watchId);
    }
  }

  render() {
    // Defining variables from Map state
    const { userLocation, isInfoWindowOpen, markers } = this.state;

    // If User's Location isn't given then return message
    if (!userLocation.lat || !userLocation.lng) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <h2>Share Location to View Map</h2>
        </div>
      );
    }

    // Marker style for userLocation
    const markerImageStyle = {
      url: userImage,
      scaledSize: new this.props.google.maps.Size(
        markerSize.width,
        markerSize.height
      ),
      //opacity: 0.8
    };

    return (
      <Map
        google={this.props.google}
        zoom={15.5}
        style={mapStyles}
        initialCenter={UCSCMID}
        className="full-screen-map"
        ref={(map) => (this.map = map)}
      >
        {/*Marker for User's Location*/}
        <Marker
          position={userLocation}
          icon={markerImageStyle}
          title={"Current Location"}
          onClick={() => this.handleMarkerClick("currentLocation")}
        />
        <InfoWindow
          position={userLocation}
          visible={isInfoWindowOpen.currentLocation}
          onClose={() => this.handleInfoWindowClose("currentLocation")}
        >
          <div>
            <h3>Current Location</h3>
          </div>
        </InfoWindow>

        {/* Render the Custom Markers */}
        {markers.map((marker, index) => (
          <CustomMarker
            key={index}
            google={this.props.google}
            map={this.props.map}
            eventName={marker.account}
            locationName={marker.eventLocation}
            time={marker.eventStartTime}
          />
        ))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCacmRJcKR4bTsQbhE8V2kSQ3e9okKOFSE",
})(MapContainer);
