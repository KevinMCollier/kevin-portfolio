import { useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = import.meta.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export default function Map({ lng, lat, address, name, link }) {
  const mapContainer = useRef(null);

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
  }, []);


  return (

    <section id="map" className="relative">
      <h2 className="text-center text-l font-bold mb-2">
        My recommendation:
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-1">
          {name}
        </a>
      </h2>
      <div ref={mapContainer} style={{ width: '700px', height: '350px', margin: 'auto', position: 'relative' }}></div>
    </section>
  );
}
