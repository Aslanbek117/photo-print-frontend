import { YMaps, Map, Placemark } from "react-yandex-maps";
import React, { Component } from "react";
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

class YandexMap extends Component<{}, {}> {

    constructor(props: any) {
        super(props);
    
        this.state = { 
            template: null,
            container: null,
            activeCinema: null 
        };
    
        this.createTemplateLayoutFactory = this.createTemplateLayoutFactory.bind(this);

    }



    createTemplateLayoutFactory = (ymaps: any) => {
        if (ymaps) {
            this.setState({
                template: ymaps.templateLayoutFactory.createClass(
                '<div style="display:flex;align-items:center;padding-top:12px;padding-bottom:12px;padding-left:16px;padding-right:24px;heigth:auto;width:auto;"><div style="width:45px;height:45px;min-width:45px;border-radius: 14px;background-position: center;background-position: center;background-size:cover;background-repeat:no-repeat;background-color:#ddd;background-image:url($[properties.balloonImage]), url(/img/poster_h.jpg);"></div>' +
                '<div style="margin-left:20px;"><div style="font-size:16px;line-height:21px;font-weight:bold;text-decoration:none;color:#000;">$[properties.balloonContentHeader]</div>' +
                '<div style="font-size:12px;line-height:16px;opacity:.5;padding-top:3px;color:#000;text-decoration:none;">$[properties.balloonContentBody]</div></div>'
                ),
                container: ymaps.templateLayoutFactory.createClass(
                    `<a href="$[properties.balloonContent]" style="border-radius:12px;background-color:#fff;border:1px solid #CCC;display:flex;align-items:center;text-decoration:none;width:auto;min-width:300px;min-height:72px;cursor:pointer;">$[[options.contentLayout]]</a>`
                )
            })
        }
    }

   


    render() {
        return (
            <YMaps >
                <Map defaultState={mapData} width={'100%'}
                                        onLoad={this.createTemplateLayoutFactory}
                                        modules={['templateLayoutFactory']}>
                >
                    {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}

{/*     
                    <Placemark
                        geometry={[55.684758, 37.738521]}
                        properties={{
                            hintContent: 'Собственный значок метки',
                            balloonContent: 'Это красивая метка',
                            iconCaption:"iconCaption"
                        }}
                        modules={[
                            "geoObject.addon.hint", 'geoObject.addon.balloon'
                        ]}
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: 'images/myIcon.gif',
                            iconImageSize: [30, 42],
                            iconImageOffset: [-3, -42]
                        }}
                    /> */}
                </Map>
            </YMaps>
        );
    }
}

export default YandexMap;