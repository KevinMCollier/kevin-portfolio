import { useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
import PropTypes from 'prop-types';
import './Global.css';


mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;

export default function Map({ lng, lat, address, name, link }) {
  const mapContainer = useRef(null);

  Map.propTypes = {
    lng: PropTypes.number.isRequired,
    lat: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  };


  useEffect(() => {
    // Initialize the map
    const map = new mapboxgl.Map({
      container: mapContainer.current, // Container element
      style: 'mapbox://styles/mapbox/streets-v12', // Style URL
      center: [lng, lat], // Longitude and latitude of your favorite restaurant
      zoom: 15 // Zoom level
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .addTo(map);

    const popup = new mapboxgl.Popup({ offset: 25 })
      .setText(`Address: ${address}`);

    marker.setPopup(popup);

    // Add navigation control (zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Clean up on component unmount
    return () => map.remove();
  }, [lng, lat, address]);


  return (

    <section id="map" className="relative mb-20">
      <h2 className="text-center text-lg font-bold mb-5">
        Why not try
        <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline ml-1 pulse-text">
          {name}?
        </a>
      </h2>
      <div ref={mapContainer} style={{ width: '700px', height: '350px', margin: 'auto', position: 'relative' }}></div>
      <h2 className="text-center text-lg font-bold mt-5 mb-5">Come back next week for some new recommendations!</h2>
    </section>
  );
}
