import React, { useEffect } from 'react';

const CustomMarker = ({ google, map, locationName, description }) => {
  useEffect(() => {
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: locationName }, (results, status) => {
      if (status === 'OK' && results && results.length > 0) {
        const { geometry } = results[0];
        const { location } = geometry;

        const marker = new google.maps.Marker({
          map,
          position: location,
          title: locationName,
        });

        const infoWindow = new google.maps.InfoWindow({
          content: 
          `<div>
          <h3>${locationName}</h3>
          <p>${description}</p>
          </div>`,
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      }
    });
  }, [google, map, locationName, description]);

  return null;
};

export default CustomMarker;
