import React, { useState, useEffect } from 'react';
import { Carousel } from 'antd';
import { Image } from 'antd'
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';

function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};




export const CarouselComponent = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Carousel afterChange={onChange}
    style={{width: '100vw'}}
    arrows
      prevArrow={<ArrowLeftOutlined />}
      nextArrow={<ArrowRightOutlined />}
    >
    <div>
      <Image src="https://media.architecturaldigest.com/photos/58c9948f3ebe3b50fd11e035/master/w_1600,c_limit/0513-AD-SEGU-09.jpg"
       style={{maxHeight: 500, width: '100vw'}}
      preview={false}/>
    </div>
    <div>
      < Image src="https://media.architecturaldigest.com/photos/5a00e0e7f0511d186d9210d5/master/w_1600,c_limit/built-ins-starrett-ringbom-3.jpg"
      style={{maxHeight: 500, width: '100vw'}}
      preview={false}/>
    </div>
  </Carousel>
  );
};
