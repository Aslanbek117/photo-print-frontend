import { YMaps, Map, Placemark } from "react-yandex-maps";
import React from "react";
import './department.css';
// import { Marker, MarkerLayout } from 'yandex-map-react';

const mapData = {
    center: [55.751574, 37.573856],
    zoom: 5,
};

const coordinates = [
    [55.684758, 37.738521],
    [57.684758, 39.738521]
];

export const YandexMap = () => {

    return (
        <YMaps >
            <Map defaultState={mapData} width={'100%'} >
                {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}


                <Placemark
                    geometry={[55.684758, 37.738521]}
                    properties={{
                        hintContent: 'Собственный значок метки',
                        balloonContent: 'Это красивая метка',
                        iconCaption:"xui"
                    }}
                    modules={[
                        "geoObject.addon.hint"
                    ]}
                    options={{
                        iconLayout: 'default#image',
                        iconImageHref: 'images/myIcon.gif',
                        iconImageSize: [30, 42],
                        iconImageOffset: [-3, -42]
                    }}
                />
            </Map>

        </YMaps>
    );

}