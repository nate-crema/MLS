# FILE detail description file



1. default.js

* 공통적으로 api 파트가 요구하는 코드를 담으려고 했지만.. 지금은 서버에 저장되어있는 이미지를 받아들인 경로에 따라 제공하는 역할만 함

2. index.js

* api파일을 정리하는 역할. api 총괄 파일

3. location.js (for front) (미완)

* 사용자 위치 수신용 API

* MLS 개발할 때 서비스에 주변 이용자가 듣고있는 노래를 함께 공유해서 들을 수 있는 기능을 만들려고 사용자의 정확한 위치 (오차범위 1m 내외 & 고도(층수) 확인)까지 만들려고 했는데, 만들다가 시간이 끝나버려서 만들다가 맒.

4. player.js (for front)

* 음악 플레이어 재생을 위한 메타데이터 API

* 노래정보, 가사, 멜론-유튜브 연계 알고리즘을 포함한 재생관련 기능을 모아둔 라우터

5. playlist.cntl.js & playlist.js (미완)

* 사용자 플레이리스트 관리용 API

* 타사 서비스간 플레이리스트 연동 및 연동일정 관리 / 자사 플레이리스트 cntl

6. search.cntl.js & search.js 

* 검색 API

* 타사 서비스 크롤링 API 및 기존 검색기록 확인 (존재할 경우 해당값 응답 / 없으면 크롤링)

7. -searchO.js-

* 개편전 검색 API -> 무시

8. song.js (for front) (미완)

* 브라우저 오프라인 재생을 위한 프론트용 API

* 브라우저 캐시를 통한 음원다운로드 API

9. test.js

* 테스트용 라우터

10. user.js (for front)

* 프론트 로그인용 라우터

11. youtube.js

* GCP youtube api관련 라우터 (재인증, 검색, 플레이리스트 로드 등)