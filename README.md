# 🚇 지하철 노선도 미션

## 🚀 구현 기능 목록

### 지하철 역 관련 기능
- 사용자가 입력한 이름으로 지하철 역을 등록한다.
  - 입력값의 공백을 제거해야 한다.
  - 역 이름이 2글자 이상인지 확인해야 한다.
  - 역 이름의 중복여부를 확인해야 한다.
- 등록된 지하철 역을 삭제한다.
  - 노선에 등록되어 있는지 확인해야 한다.
- 지하철 역의 목록을 조회한다.
### 지하철 노선 관련 기능
- 지하철 노선을 등록한다.
  - 노선의 중복 여부를 확인해야 한다.
- 지하철 노선을 삭제한다.
- 지하철 노선 목록을 조회한다.
  - 노선 이름, 상행 종점역, 하행 종점역을 조회해야 한다.
### 지하철 구간 관련 기능
- 기존의 지하철 노선 사이에 역을 새로 추가한다.
  - 추가하려는 노선에 이미 등록된 역인지 확인해야 한다.
  - 임의로 순서를 정할 수 있다.
  - 순서 입력값이 '0 ~ 노선에 등록된 역의 수' 사이인지 확인해야 한다.
- 노선에 등록된 역을 제거한다.
  - 노선내의 역의 개수가 2개를 초과하는지 확인해야 한다.
  - 상행종점역을 제거했을 경우 다음역이 상행종점역이 되도록 한다.
  - 하행종점역을 제거했을 경우 이전역이 하행종점역이 되도록 한다.
### 지하철 전체 노선 조회 기능
- 모든 지하철 노선의 역 목록을 조회한다.
### 공통 기능
- 데이터의 등록이나 삭제가 불가할 경우 alert창을 띄운다.
- 기존 데이터를 삭제할 경우 팝업창을 띄워서 한번 더 확인할 수 있도록 한다.
