import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import { useDebounce } from 'helpers/hooks';
import YandexMap from '../departments/Department';
import Icon from '../icon';
import './style.css';

interface ModalProps {
  isVisible: boolean;
  onOk: () => void;
  onCancel: () => void;
  title: string;
}

const YANDEX_GEOCODE_KEY = '518ec391-229c-4e70-81ca-09dbe544157a';

export const DepartmentModal = (props: ModalProps) => {
  const [coordinates, setCoordinates] = useState<any>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const debouncedSearchTerm = useDebounce(searchValue, 2000);

  // TODO: переписать геокодер
  useEffect(() => {
    if (debouncedSearchTerm) {
      fetch(
        `https://geocode-maps.yandex.ru/1.x?geocode=${debouncedSearchTerm}&apikey=${YANDEX_GEOCODE_KEY}&format=json&ll=43.238949,76.889709&spn=3.552069,2.400552&results=10`
      )
        .then(res => res?.json())
        .then(async res => {
          const response = res?.response?.GeoObjectCollection?.featureMember;

          let coordsArray: number[][] = [];

          await response?.map((resItem: any) => {
            const position = resItem?.GeoObject?.Point?.pos;
            const address = resItem?.GeoObject?.description;
            if (address.includes('Алматы')) {
              const posArr = position.split(' ');
              const normalizedPos = [parseFloat(posArr?.[1]), parseFloat(posArr?.[0])];
              coordsArray.push(normalizedPos);
              return normalizedPos;
            }
            return [];
          });

          setCoordinates(coordsArray);
        })
        .catch(e => console.log(e, 'errir'));
    } else {
      setCoordinates([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <Modal
      title={<p className="department-modal-title">{props.title}</p>}
      visible={props.isVisible}
      onOk={props.onOk}
      onCancel={props.onCancel}
      footer={null}
      style={{ minHeight: 620 }}
      closeIcon={<Icon icon="close-16" width={16} height={16} />}
    >
      <div className="search-input-modal">
        <i className="search-icon-modal">
          <Icon icon="grey-search-13" width={13} height={13} />
        </i>
        <input
          className="search-input-field-modal"
          placeholder="Введите адрес"
          value={searchValue}
          onChange={event => {
            setSearchValue(event.target.value);
          }}
        />
      </div>
      <div style={{ marginTop: 15, height: 460 }}>
        <YandexMap searchedCoordinates={coordinates} />
      </div>
    </Modal>
  );
};
