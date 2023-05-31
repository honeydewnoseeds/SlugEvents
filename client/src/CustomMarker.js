import {useEffect} from 'react';

////
// Function which exports a Marker given a, Event Name, Location Name and Time
// Uses google and map from map.js so they don't have to be imported into this file
////
const CustomMarker = ({google, map, eventName, locationName, time}) => {
  useEffect(() => {
    // Geocoder imported from the google maps api
    const geocoder = new google.maps.Geocoder();

    // Random offset generated for when same locations are used
    const offset = Math.random() * 0.0001;

    // Uses the Location name in prder to get lat, lng for marker
    geocoder.geocode({address: locationName}, (results, status) => {
      if (status === 'OK' && results && results.length > 0) {
        const {geometry} = results[0];
        const {location} = geometry;

        // Sets location for Marker as well as Title
        const marker = new google.maps.Marker({
          map,
          position: {
            lat: location.lat() + offset,
            lng: location.lng() + offset,
          },
          title: eventName,
        });
        // InfoWindow associated with the Marker
        const infoWindow = new google.maps.InfoWindow({
          content: 
          `<div>
          <h1>Event: ${eventName}</h1>
          <h3>Location: ${locationName}</h3>
          <p>Time: ${time}</p>
          </div>`,
        });
        // InfoWindow opened when Marker is clicked
        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      }
    });
  }, [google, map, eventName, locationName, time]);

  return null;
};

export default CustomMarker;
