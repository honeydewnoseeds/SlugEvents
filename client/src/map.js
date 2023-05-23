import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

import CustomMarker from './CustomMarker';


const mapStyles = {
  width: '100%',
  height: '100%'
};

const userImage = 'https://cdn-icons-png.flaticon.com/512/1673/1673221.png';

const markerSize = {
  width: 40,
  height: 40
};

const UCSCMID = {
  lat: 36.99548112809275,
  lng: -122.06084628167693
};

class MapContainer extends Component {
  state = {
    userLocation: {
      lat: null,
      lng: null
    },
    isInfoWindowOpen: {
      currentLocation: false,
    }
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
            userLocation: { lat: latitude, lng: longitude }
          });
        },
        error => console.log(error),
        // Additional options for geolocation
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    }

  }

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

  componentWillUnmount() {
    if (navigator.geolocation) {
      navigator.geolocation.clearWatch(this.watchId);
    }
  }

  render() {

    const {userLocation, isInfoWindowOpen} = this.state;

    if (!userLocation.lat || !userLocation.lng) {
      return <div>Loading...</div>;
    }

    const markerImageStyle = {
      url: userImage,
      scaledSize: new this.props.google.maps.Size(
        markerSize.width,
        markerSize.height
      ),
      opacity: 0.8
    };

    return (
      <Map
        google={this.props.google}
        zoom={15.5}
        style={mapStyles}
        initialCenter={UCSCMID}
        className="full-screen-map"
        ref={map => (this.map = map)}
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

        <CustomMarker
          google={this.props.google}
          map={this.props.map}
          locationName="Mchenry Library"
          description="This is Kresge College"
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCacmRJcKR4bTsQbhE8V2kSQ3e9okKOFSE'
})(MapContainer);
