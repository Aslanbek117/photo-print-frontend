import { YMaps, Map, Placemark } from "react-yandex-maps";
import React from "react";
import './department.css';
const mapData = {
  center: [55.751574, 37.573856],
  zoom: 5,
};

const coordinates = [
  [55.684758, 37.738521],
  [57.684758, 39.738521]
];

export const YandexMap = () => (
  <YMaps >
    <Map defaultState={mapData} width={'100%'} >
      {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
    </Map>
  </YMaps>
);