'use client';

import { useEffect, useState } from "react";

const MapComponent = () => {
  const [map, setMap] = useState(null);

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: -34.397,
    lng: 150.644,
  };

  useEffect(() => {
    const loadMap = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
      script.async = true;
      script.defer = true;
      script.onload = () => initMap();
      document.head.appendChild(script);
    };

    const initMap = () => {
      const mapInstance = new window.google.maps.Map(document.getElementById("map"), {
        center,
        zoom: 8,
      });
      setMap(mapInstance);
    };

    loadMap();

    // Cleanup the map instance on component unmount
    return () => {
      if (map) {
        map.setMap(null);
      }
    };
  }, []);

  return <div id="map" style={containerStyle}></div>;
};

export default MapComponent;
