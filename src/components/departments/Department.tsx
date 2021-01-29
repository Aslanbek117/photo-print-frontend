import { YMaps, Map, Placemark } from 'react-yandex-maps';
import React, { Component } from 'react';

import ActiveDepartment from './ActiveDepartment';

import PlacemarkIcon from './placemark.svg';
import './department.css';

const mapData = {
  center: [43.238949, 76.889709],
  zoom: 12,
};

// [43.243271, 76.952894] Абая 21

type State = {
  template: React.ReactNode;
  container: React.ReactNode;
  activeDepartment: boolean;
};

class YandexMap extends Component<{ searchedCoordinates: number[][] }, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      template: null,
      container: null,
      activeDepartment: false,
    };

    // this.createTemplateLayoutFactory = this.createTemplateLayoutFactory;
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
        ),
      });
    }
  };

  onMapClick = () => {
    const { activeDepartment } = this.state;
    if (activeDepartment) {
      this.setState({ activeDepartment: false });
    }
  };

  render() {
    const { activeDepartment } = this.state;
    const { searchedCoordinates } = this.props;
    const coordinates = searchedCoordinates;

    console.log(coordinates, 'coords');
    return (
      <>
        {activeDepartment && <ActiveDepartment />}
        <YMaps>
          <Map
            defaultState={mapData}
            width="100%"
            height="100%"
            onLoad={this.createTemplateLayoutFactory}
            modules={['templateLayoutFactory']}
            onClick={this.onMapClick}
          >
            {coordinates.map(coordinate => (
              <Placemark
                geometry={coordinate}
                options={{
                  iconLayout: 'default#image',
                  iconImageHref: PlacemarkIcon,
                }}
                onClick={() => this.setState({ activeDepartment: true })}
              />
            ))}

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
      </>
    );
  }
}

export default YandexMap;
