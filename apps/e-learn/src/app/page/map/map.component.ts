import { Component, OnInit } from '@angular/core';
import Feature from 'ol/Feature';
import { Geometry, Point, Polygon } from 'ol/geom';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import Map from 'ol/Map';
import { fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import Style from 'ol/style/Style';
import CircleStyle from 'ol/style/Circle';
import View from 'ol/View';

@Component({
  selector: 'responsive-inc-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  public map?: Map;

  vectorSource: VectorSource;

  vectorLayer: VectorLayer<VectorSource<Geometry>>;

  osm = new TileLayer({ source: new OSM() });

  constructor() {
    const sigiriyaCoordinate = fromLonLat([
      80.75281846868609, 7.9633060974882826,
    ]);
    const pidurangalaCoordinate = fromLonLat([
      80.76356216424398, 7.966704145658854,
    ]);

    const sigiriya = new Feature({
      geometry: new Point(sigiriyaCoordinate),
    });
    sigiriya.setStyle(
      new Style({
        image: new CircleStyle({
          radius: 30,
          fill: new Fill({
            color: 'rgba(255, 153, 0, 0.3)',
          }),
          stroke: new Stroke({
            width: 2,
            color: 'rgba(255, 0, 0,1)',
          }),
        }),
      })
    );

    const pidirangala = new Feature({
      geometry: new Point(pidurangalaCoordinate),
    });

    const coordinates = [[sigiriyaCoordinate], [pidurangalaCoordinate]];

    const sirgiriyaToPidurangla = new Feature({
      geometry: new Polygon(coordinates),
    });

    this.vectorSource = new VectorSource({
      features: [sigiriya, pidirangala],
    });

    this.vectorLayer = new VectorLayer({
      source: this.vectorSource,
    });
  }

  ngOnInit(): void {
    this.map = new Map({
      layers: [this.osm, this.vectorLayer],
      target: 'map',
      view: new View({
        center: fromLonLat([80.75281846868609, 7.9633060974882826]),
        zoom: 13,
      }),
    });
  }
}
