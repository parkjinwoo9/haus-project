import "../../css/router/Map.css";
import { useEffect } from "react";

const kakao = { window };

function Map() {
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(
        37.557213074027516,
        126.86405581604086
      ),
      level: 3,
    };
    let map = new window.kakao.maps.Map(container, options);
  }, []);
  return (
    <div id="info">
      <div id="map"></div>
      <div id="where">
        <p>
          회사명 : (주)에스티오<br />
          대표자 : 김흥수 / 서울시 강서구 양천로 583 우림블루나인비지니스센터 B동 15층 / 사업자등록번호 : 206-81-79031<br />
          통신판매업신고 : 제2009 서울강서 0684호 / 개인정보관리책임자 : 김기만<br />
          대표메일주소 : stoonline@stco.co.kr / 대표번호 : 070-4687-7342
        </p><br /><br /><br />
        <p>
          070-4687-7342<br />
          업무시간 : 평일 10:00 - 17:00<br />
          점심시간 : 평일 12:00 –13:00<br />
          (토, 일, 공휴일 휴무)
        </p>
      </div>
    </div>
  );
}

export default Map;
