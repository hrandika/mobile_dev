import { useRef, useState } from 'react';

function MapWrap(prop: any) {
  const [map, setMap] = useState();
  const [ featuresLayer, setFeaturesLayer ] = useState()
  const [ selectedCoord , setSelectedCoord ] = useState()

  const mapElement = useRef<HTMLDivElement>(null);

  return <div ref={mapElement} className="map-container"></div>;
}

export default MapWrap;
