import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import axios from 'axios';

const mapStyles = {
  width: '100%',
  height: '100%'
};

const image = 'https://cdn-icons-png.flaticon.com/512/1673/1673221.png';

const markerSize = {
  width: 40,
  height: 40
};

class MapContainer extends Component {
  state = {
    userLocation: {
      lat: null,
      lng: null
    },
    isInfoWindowOpen: {
      currentLocation: false,
      OAKES: false,
      NAMASTE: false
    },
    geocodedMarkers: {
      OAKES: null,
      NAMASTE: null
    },
  };
  
  // Gets user location right when map is created
  componentDidMount() {
    if (navigator.geolocation) {
      // Watch user's position
      this.watchId = navigator.geolocation.watchPosition(
        position => {
          // Update the userLocation state with the new coordinates
          const {latitude, longitude} = position.coords;
          this.setState({
            userLocation: {lat: latitude, lng: longitude}
          });
        },
        error => console.log(error),
        // Additional options for geolocation
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
      );
    }

    // Perform geocoding for markers
    this.geocodeMarker('OAKES', 'Oakes College, Santa Cruz, CA 95064');
    this.geocodeMarker('NAMASTE', 'Namaste Lounge, Santa Cruz, CA 95064');

  }
  // Gets coords the map marker for the markerName givent the location
  geocodeMarker = async (markerName, locationName) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          locationName
        )}&key=AIzaSyCacmRJcKR4bTsQbhE8V2kSQ3e9okKOFSE`
      );
      // {Latitude, Longitude} from api call
      const {results} = response.data;
      // If a valid coordinate is found
      if (results && results.length > 0) {
        const {lat, lng} = results[0].geometry.location;
        // Sets the markerName to the coordinates found
        this.setState((prevState) => ({
          geocodedMarkers: {
            ...prevState.geocodedMarkers,
            [markerName]: {lat, lng}
          }
        }));
      } else {
        console.log(`No results found for ${markerName}.`);
      }
    } catch (error) {
      console.log(`Error geocoding ${markerName}:`, error.message);
    }
  };

  // Stops tracking user's location when component is closed
  componentWillUnmount() {
    if (navigator.geolocation) {
      // Clear the watch position
      navigator.geolocation.clearWatch(this.watchId);
    }
  }
  // Handles opening markers
  handleMarkerClick = markerName => {
    this.setState(prevState => ({
      isInfoWindowOpen: {
        ...prevState.isInfoWindowOpen,
        [markerName]: true
      }
    }));
  };

  // Handle closing markers
  handleInfoWindowClose = markerName => {
    this.setState(prevState => ({
      isInfoWindowOpen: {
        ...prevState.isInfoWindowOpen,
        [markerName]: false
      }
    }));
  };


  render() {
    const {userLocation, isInfoWindowOpen} = this.state;
    // If there aren't valid coords for user location then just return
    if (!userLocation.lat || !userLocation.lng) {
      return <div>Loading...</div>;
    }
    // Style of Current location marker
    const markerImageStyle = {
      url: image,
      scaledSize: new this.props.google.maps.Size(
        markerSize.width,
        markerSize.height
      ),
      opacity: 0.8
    };

    // Used to center map
    const UCSCMID = {
      lat: 36.99548112809275, 
      lng: -122.06084628167693
    }

    const {geocodedMarkers} = this.state;
    
    // 
    return (
      <Map
        google={this.props.google}
        zoom={15.5}
        style={mapStyles}
        initialCenter={UCSCMID}
      >
        <Marker
          position={userLocation}
          icon={markerImageStyle}
          title={'Current Location'}
          onClick={() => this.handleMarkerClick('currentLocation')}
        />
        <InfoWindow
          position={userLocation}
          visible={isInfoWindowOpen.currentLocation}
          onClose={() => this.handleInfoWindowClose('currentLocation')}
        >
          <div>
            <h3>Current Location</h3>
            <p>Details here :)</p>
          </div>
        </InfoWindow>

        {geocodedMarkers.OAKES && (
          <Marker
            position={geocodedMarkers.OAKES}
            title={'OAKES'}
            onClick={() => this.handleMarkerClick('OAKES')}
          />
        )}
        <InfoWindow
          position={geocodedMarkers.OAKES}
          visible={isInfoWindowOpen.OAKES}
          onClose={() => this.handleInfoWindowClose('OAKES')}
        >
          <div>
            <h3>OAKES</h3>
            <p>Details here :)</p>
          </div>
        </InfoWindow>

        {geocodedMarkers.NAMASTE && (
          <Marker
            position={geocodedMarkers.NAMASTE}
            title={'NAMASTE'}
            onClick={() => this.handleMarkerClick('NAMASTE')}
          />
        )}
        <InfoWindow
          position={geocodedMarkers.NAMASTE}
          visible={isInfoWindowOpen.NAMASTE}
          onClose={() => this.handleInfoWindowClose('NAMASTE')}
        >
          <div>
            <h3>NAMASTE</h3>
            <p>Details here :)</p>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCacmRJcKR4bTsQbhE8V2kSQ3e9okKOFSE'
})(MapContainer);

