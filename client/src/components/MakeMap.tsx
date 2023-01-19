/* eslint-disable */
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { postArticle, postModalState } from '../recoil/modalAtom';

const { kakao } = window;

const MakeMap = () => {
  const [post, setPost] = useRecoilState(postArticle);

  const isModalOpen = useRecoilValue<boolean>(postModalState);

  useEffect(() => {
    const container = document.getElementById('map');
    //지도를 담을 영역의 DOM
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      //지도의 중심좌표.
      level: 3,
      //지도의 레벨(확대, 축소 정도)
      // draggable: false,
    };

    const map = new kakao.maps.Map(container, options);
    //지도 생성 및 객체 리턴

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function (position) {
        let lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도
        setPost({ ...post, lat: lat, lon: lon });

        let locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
          message = '<div style="padding:5px;">현재 위치</div>'; // 인포윈도우에 표시될 내용입니다

        let coord = new kakao.maps.LatLng(lat, lon);
        let callback = function (result: any, status: any) {
          if (status === kakao.maps.services.Status.OK) {
            const arr = { ...result };
            const _arr1 = arr[0].address.region_1depth_name;
            const _arr2 = arr[0].address.region_2depth_name;
            const _arr3 = arr[0].address.region_3depth_name;
            setPost({ ...post, location: `${_arr1} ${_arr2} ${_arr3}` });
          }
        };

        geocoder.coord2Address(coord.getLng(), coord.getLat(), callback),
          // 마커와 인포윈도우를 표시합니다
          displayMarker(locPosition, message);
      });
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

      var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
        message = '현재 위치를 가져올 수 없어요';

      displayMarker(locPosition, message);
    }

    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    function displayMarker(locPosition: any, message: any) {
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map,
        position: locPosition,
      });

      let iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;

      // 인포윈도우를 생성합니다
      let infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable,
      });

      // 인포윈도우를 마커위에 표시합니다
      infowindow.open(map, marker);

      // 지도 중심좌표를 접속위치로 변경합니다
      map.setCenter(locPosition);
    }
  }, [isModalOpen]);

  return <div id="map" className="h-full"></div>;
};

export default MakeMap;
