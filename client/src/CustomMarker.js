import {useEffect} from 'react';

// Gets College Name given account name
const getCollegeName = (accountName) => {
  switch (accountName) {
    case 'ucsc9_jrl':
      return 'College 9/John R. Lewis';
    case 'stevenson.ucsc':
    case 'cowell.ucsc':
      return 'Cowell/Stevenson';
    case 'porter.college':
    case 'kc_ucsc':
      return 'Porter/Kresge';
    case 'rcc_ucsc':
    case 'oakescollege':
      return 'Rachel Carson/Oakes';
    case 'ucsccrowncollege':
    case 'ucscmerillcollege':
      return 'Crown/Merill';
    default:
      return 'Campus Event';
  }
};

const CustomMarker = ({google, map, accountName, locationName, time }) => {
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
          // Sets title to College Name
          title: getCollegeName(accountName),
        });

        const collegeName = getCollegeName(accountName);

        // InfoWindow associated with the Marker
        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div>
              <h1>College: ${collegeName}</h1>
              <h3>Location: ${locationName}</h3>
              <p>Time: ${time}</p>
            </div>
          `,
        });

        // InfoWindow opened when Marker is clicked
        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      }
    });
  }, [google, map, accountName, locationName, time]);

  return null;
};

export default CustomMarker;
