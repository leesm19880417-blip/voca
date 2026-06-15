// LC Practice/Check-up 정답 + 스크립트 (서아쌤 토익비밀과외 START, 답안지 추출)
// 페이지 번호로 매핑. type: photo(Part1) / qr(Part2) / conv(Part3) / talk(Part4)
const LC_ANSWERS = {
 86:{type:"photo",label:"Practice",items:[
  {n:1,answer:"C",opts:{
   A:{en:"A man is looking through his bag.",ko:"남자가 가방 안을 훑어 보고 있다."},
   B:{en:"A man is paying at a counter.",ko:"남자가 계산대에서 지불하고 있다."},
   C:{en:"A shopper is selecting fruit.",ko:"쇼핑객이 과일을 고르고 있다."},
   D:{en:"A customer is pushing a shopping cart.",ko:"고객이 쇼핑 카트를 밀고 있다."}}},
  {n:2,answer:"B",opts:{
   A:{en:"The woman is loading a toolbox into a car.",ko:"여자가 자동차 안에 공구박스를 싣고 있다."},
   B:{en:"The woman is mopping the floor.",ko:"여자가 바닥을 대걸레질하고 있다."},
   C:{en:"The woman is fixing some tires.",ko:"여자가 몇몇 타이어들을 고치고 있다."},
   D:{en:"The woman is inspecting a vehicle.",ko:"여자가 차량을 점검하고 있다."}}}
 ]},
 87:{type:"photo",label:"Practice",items:[
  {n:3,answer:"B",opts:{
   A:{en:"The woman is picking up a cushion on a sofa.",ko:"여자가 소파 위에 있는 쿠션을 집어 들고 있다."},
   B:{en:"Some people are rearranging the furniture.",ko:"몇몇 사람들이 가구를 재배치하고 있다."},
   C:{en:"Some people are assembling a bookshelf.",ko:"몇몇 사람들이 책장을 조립하고 있다."},
   D:{en:"One of the people is leaving a room.",ko:"사람들 중 한 명이 방을 나가고 있다."}}},
  {n:4,answer:"C",opts:{
   A:{en:"Some tree branches are being cut down.",ko:"몇몇 나무 가지들이 잘리는 중이다."},
   B:{en:"One of the men is taking off his helmet.",ko:"남자들 중 한 명이 헬멧을 벗고 있다."},
   C:{en:"A streetlamp is being inspected.",ko:"가로등이 점검되고 있는 중이다."},
   D:{en:"A ladder is leaning against a fence.",ko:"사다리가 울타리에 기대어져 있다."}}}
 ]},
 88:{type:"photo",label:"Practice",items:[
  {n:5,answer:"A",opts:{
   A:{en:"A train platform is unoccupied.",ko:"기차 승강장이 비어 있다."},
   B:{en:"Some train rails are being cleared.",ko:"몇몇 기차 길들이 치워지고 있는 중이다."},
   C:{en:"Some passengers are boarding a train.",ko:"몇몇 승객들이 기차에 탑승하고 있다."},
   D:{en:"There is a ticket machine in a waiting area.",ko:"대기 공간에 티켓 기계가 있다."}}},
  {n:6,answer:"B",opts:{
   A:{en:"Some flowers are being watered.",ko:"몇몇 꽃들에게 물이 주어지고 있다."},
   B:{en:"Some bushes have been planted in a garden.",ko:"몇몇 덤불들이 정원에 심겨져 있다."},
   C:{en:"There is a road under a bridge.",ko:"다리 아래에 길이 있다."},
   D:{en:"Lampposts are lined up along a path.",ko:"가로등들이 길을 따라 줄 지어 있다."}}}
 ]},
 89:{type:"photo",label:"Practice",items:[
  {n:7,answer:"B",opts:{
   A:{en:"Some containers are being unloaded at a pier.",ko:"몇몇 컨테이너들이 부두에서 내려지고 있는 중이다."},
   B:{en:"A mountain is overlooking a harbor.",ko:"산이 항구를 내려다보고 있다."},
   C:{en:"Some people are taking pictures of some boats.",ko:"몇몇 사람들이 몇몇 배를 사진 찍고 있다."},
   D:{en:"Some travelers are resting on a beach.",ko:"몇몇 여행객들이 해변에서 쉬고 있다."}}},
  {n:8,answer:"D",opts:{
   A:{en:"A flower vase is hanging on a ceiling.",ko:"화병이 천장에 걸려 있다."},
   B:{en:"Some chairs are stacked next to a table.",ko:"몇몇 의자들이 테이블 옆에 쌓여 있다."},
   C:{en:"A light fixture has been mounted on a wall.",ko:"조명기구가 벽에 달려 있다."},
   D:{en:"Some books are being displayed on shelves.",ko:"몇몇 책들이 선반에 전시되고 있는 중이다."}}}
 ]},
 90:{type:"photo",label:"Check-up Test",items:[
  {n:1,answer:"C",opts:{
   A:{en:"Some people are walking through a pedestrian walkway.",ko:"몇몇 사람들이 보행자 전용 보도를 걷고 있다."},
   B:{en:"A truck is stopped at an intersection.",ko:"트럭이 교차로에 멈춰 있다."},
   C:{en:"The men are doing some maintenance work.",ko:"남자들이 몇몇 유지보수 작업을 하고 있다."},
   D:{en:"Leaves have been raked into a pile.",ko:"나뭇잎들이 더미로 긁어 모아져 있다."}}},
  {n:2,answer:"D",opts:{
   A:{en:"A patio is covered by a roof.",ko:"야외 테라스가 지붕으로 덮여 있다."},
   B:{en:"A lawn mower is being used to cut the grass.",ko:"잔디 깎는 기계가 잔디를 자르기 위해 사용되고 있는 중이다."},
   C:{en:"Light fixtures have been turned off in a house.",ko:"조명기구들이 집 안에서 전원이 꺼져 있다."},
   D:{en:"Some furniture has been positioned outside.",ko:"몇몇 가구들이 야외에 위치해 있다."}}},
  {n:3,answer:"A",opts:{
   A:{en:"Some products are being displayed in a store.",ko:"몇몇 제품들이 매장에 전시되고 있는 중이다."},
   B:{en:"A customer is reaching for a bottle.",ko:"고객이 병에 손을 뻗고 있다."},
   C:{en:"Some shopping carts have been filled with items.",ko:"몇몇 쇼핑 카트들이 상품들로 가득 차 있다."},
   D:{en:"Shopping baskets are piled in a corner.",ko:"쇼핑 바구니들이 구석에 쌓여 있다."}}}
 ]},
 91:{type:"photo",label:"Check-up Test",items:[
  {n:4,answer:"D",opts:{
   A:{en:"A woman is washing dishes in a sink.",ko:"여자가 싱크대에서 그릇들을 씻고 있다."},
   B:{en:"A woman is wiping a counter.",ko:"여자가 조리대를 닦고 있다."},
   C:{en:"A woman is opening a kitchen drawer.",ko:"여자가 주방 서랍을 열고 있다."},
   D:{en:"A woman is putting some plates into a cabinet.",ko:"여자가 수납장 안에 몇몇 접시들을 넣고 있다."}}},
  {n:5,answer:"C",opts:{
   A:{en:"One of the men is leaning over a railing.",ko:"남자들 중 한 명이 난간에 기대고 있다."},
   B:{en:"Some people are facing each other.",ko:"몇몇 사람들이 서로 마주보고 있다."},
   C:{en:"Computer monitors are placed on desks.",ko:"컴퓨터 모니터들이 책상 위에 위치해 있다."},
   D:{en:"Some pieces of paper have been scattered on the floor.",ko:"몇몇 종이들이 바닥에 흩어져 있다."}}},
  {n:6,answer:"A",opts:{
   A:{en:"Some lines have been painted on the ground.",ko:"몇몇 선들이 땅에 페인트칠 되어 있다."},
   B:{en:"A lamppost is being installed.",ko:"가로등이 설치되고 있는 중이다."},
   C:{en:"Motorcycle riders are driving down the street.",ko:"오토바이 운전자가 거리를 달리고 있다."},
   D:{en:"A road sign has been set up in a parking area.",ko:"도로 표지판이 주차 구역에 설치되어 있다."}}}
 ]}
};
