'use client';

import Script from 'next/script';
import { Map, MapMarker, MapTypeControl, ZoomControl } from 'react-kakao-maps-sdk';

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=22bbf50b70c293870014d8e0045ec68b&autoload=false`;

const KakaoMap = () => {
  return (
    <div>
      <Script src={KAKAO_SDK_URL} strategy='beforeInteractive' />
      <Map center={{ lat: 37.49793, lng: 127.027596 }} style={{ width: '700px', height: '500px' }}>
        <MapMarker position={{ lat: 37.49793, lng: 127.027596 }} />
        <MapTypeControl />
        <ZoomControl />
      </Map>
    </div>
  );
};

export default KakaoMap;
