// 서아쌤의 토익 비밀과외 기출 VOCA (시원스쿨어학연구소)
// 실제 책 구성 그대로: WEEK 01~08 × DAY 01~05 (총 40일)
// 스캔 PDF 원문에서 추출.
const VOCABULARY = [
 {
  "week": 1,
  "day": 1,
  "part": "Part 1",
  "title": "사람 사진 빈출 어휘",
  "words": [
   {
    "no": 1,
    "word": "wear",
    "pos": "v.",
    "meaning": "~을 입다, 착용하다 (상태)",
    "derivatives": [],
    "examples": [
     {
      "en": "wearing sunglasses",
      "ko": "선글라스를 착용한 상태이다"
     },
     {
      "en": "wearing a hat",
      "ko": "모자를 착용한 상태이다"
     }
    ],
    "quiz": null,
    "tip": "put on은 착용하는 '동작'을 묘사할 때 사용되는 표현으로, 의복이나 장갑, 안경 등을 착용한 상태인 사진 문제에서 오답으로 자주 나옵니다.\ntry on은 '~을 착용해보다'라는 뜻으로, 상점 등에서 헤드폰이나 신발 등을 착용해보는 사진을 묘사할 때 씁니다. (putting on a jacket / trying on shoes)"
   },
   {
    "no": 2,
    "word": "hold",
    "pos": "v.",
    "meaning": "~을 잡다, 들다",
    "derivatives": [],
    "examples": [
     {
      "en": "holding a cup",
      "ko": "컵을 들고 있다"
     },
     {
      "en": "holding onto a railing",
      "ko": "난간을 붙들고 있다"
     }
    ],
    "quiz": null,
    "tip": "들고 있거나 가지고 있는 모습을 나타내는 동사: carry(~을 가지고 있다, ~을 나르다), grab/grasp(~을 움켜쥐다)"
   },
   {
    "no": 3,
    "word": "pour",
    "pos": "v.",
    "meaning": "~을 붓다, 따르다",
    "derivatives": [],
    "examples": [
     {
      "en": "pouring some liquid into a cup",
      "ko": "컵에 액체를 따르고 있다"
     },
     {
      "en": "pouring a drink into a glass",
      "ko": "유리잔에 음료를 따르고 있다"
     }
    ],
    "quiz": null,
    "tip": "pouring 다음에 coffee, drink, beverage, water 등이 주로 나오며, 이때 전치사 into가 쓰입니다."
   },
   {
    "no": 4,
    "word": "leaning against / over / on",
    "pos": "v.",
    "meaning": "~에 기대다, 몸을 기울이다",
    "derivatives": [],
    "examples": [
     {
      "en": "leaning against a wall",
      "ko": "벽에 기대어 있다"
     },
     {
      "en": "leaning over a railing",
      "ko": "난간 쪽으로 몸을 기울이고 있다"
     },
     {
      "en": "leaning on his elbow",
      "ko": "팔꿈치에 기대어 있다"
     }
    ],
    "quiz": null,
    "tip": "기대고 있는 모습을 묘사할 때 동사 rest(기대다, 받치다)를 쓰는 정답도 종종 출제됩니다. (resting against a railing 난간에 기대어 있다)"
   },
   {
    "no": 5,
    "word": "kneel",
    "pos": "v.",
    "meaning": "무릎을 꿇다",
    "derivatives": [],
    "examples": [
     {
      "en": "kneeling (down) on the floor",
      "ko": "바닥에 무릎을 꿇고 있다"
     }
    ],
    "quiz": null,
    "tip": "crouch: 몸을 웅크리고 있는 모습을 묘사할 때 쓰이며, 최근 시험에 정답으로 등장하였습니다."
   },
   {
    "no": 6,
    "word": "push",
    "pos": "v.",
    "meaning": "~을 밀다",
    "derivatives": [],
    "examples": [
     {
      "en": "pushing a wheelbarrow",
      "ko": "외바퀴 손수레를 밀고 있다"
     },
     {
      "en": "pushing a cart",
      "ko": "카트를 밀고 있다"
     }
    ],
    "quiz": null,
    "tip": "pull: 여행가방을 끌고 가는 모습을 묘사할 때는 동사 pull(~을 끌다)을 써서 pulling a suitcase라고 표현합니다."
   },
   {
    "no": 7,
    "word": "wait",
    "pos": "v.",
    "meaning": "기다리다",
    "derivatives": [],
    "examples": [
     {
      "en": "waiting in line",
      "ko": "줄 서서 기다리고 있다"
     },
     {
      "en": "waiting for a train",
      "ko": "기차를 기다리고 있다"
     }
    ],
    "quiz": null,
    "tip": "waiting in line이 압도적으로 자주 출제되며, 기차역이나 공항 등에서 사람들이 대기하는 모습을 묘사할 때 waiting area(대기실)도 종종 등장합니다."
   },
   {
    "no": 8,
    "word": "examine",
    "pos": "v.",
    "meaning": "~을 자세히 들여다보다",
    "derivatives": [],
    "examples": [
     {
      "en": "examining some clothing",
      "ko": "옷을 자세히 들여다보고 있다"
     },
     {
      "en": "examining a document",
      "ko": "문서를 자세히 들여다보고 있다"
     }
    ],
    "quiz": null,
    "tip": "자세히 들여다보는 모습을 묘사하는 표현: inspecting an engine 엔진을 들여다보고 있다, studying a drawing 그림을 들여다보고 있다"
   },
   {
    "no": 9,
    "word": "wipe",
    "pos": "v.",
    "meaning": "~(의 표면)을 닦다",
    "derivatives": [],
    "examples": [
     {
      "en": "wiping a countertop",
      "ko": "카운터 윗면을 닦고 있다"
     },
     {
      "en": "wiping the table",
      "ko": "테이블을 닦고 있다"
     }
    ],
    "quiz": null,
    "tip": "닦는 동작을 묘사하는 표현: washing a window 창을 닦고 있다, cleaning a door 문을 닦고 있다, clearing off a windshield 자동차 앞유리를 닦아내고 있다, polishing the floor 바닥에 윤을 내고 있다"
   },
   {
    "no": 10,
    "word": "face",
    "pos": "v.",
    "meaning": "~을 향하다",
    "derivatives": [],
    "examples": [
     {
      "en": "facing each other",
      "ko": "서로 마주보고 있다"
     },
     {
      "en": "facing a shelving unit",
      "ko": "선반 쪽을 향해 있다"
     }
    ],
    "quiz": null,
    "tip": "facing away from each other는 서로 등지고 있는 모습을 묘사합니다."
   },
   {
    "no": 11,
    "word": "bend",
    "pos": "v.",
    "meaning": "몸을 구부리다",
    "derivatives": [],
    "examples": [
     {
      "en": "bending over a table",
      "ko": "테이블 위로 몸을 구부리고 있다"
     },
     {
      "en": "bending down",
      "ko": "아래쪽으로 몸을 구부리고 있다"
     }
    ],
    "quiz": null,
    "tip": "매우 자주 출제되는 표현이므로 꼭 알아 두세요."
   },
   {
    "no": 12,
    "word": "gather",
    "pos": "v.",
    "meaning": "모이다, ~을 모으다",
    "derivatives": [],
    "examples": [
     {
      "en": "have gathered in a circle",
      "ko": "원형으로 모여 있다"
     },
     {
      "en": "be gathered around a desk",
      "ko": "책상 주위에 모여 있다"
     }
    ],
    "quiz": null,
    "tip": "자동사(모이다), 타동사(~을 모으다) 둘 다 쓰이기 때문에 능동태인 have gathered, 수동태인 be gathered 두 가지 형태 모두 잘 나옵니다."
   },
   {
    "no": 13,
    "word": "be seated",
    "pos": "v.",
    "meaning": "착석하다, 앉아 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "be seated in an outdoor dining area",
      "ko": "야외 식사 구역에 앉아 있다"
     },
     {
      "en": "be seated across from one another",
      "ko": "서로 마주 보고 앉아 있다"
     }
    ],
    "quiz": null,
    "tip": "앉아 있는 모습을 묘사할 때 동사 sit(앉다)을 쓰는 정답도 종종 출제됩니다. (sitting on a bench 벤치에 앉아 있다)"
   },
   {
    "no": 14,
    "word": "purchase",
    "pos": "v.",
    "meaning": "~을 구매하다",
    "derivatives": [],
    "examples": [
     {
      "en": "purchasing some groceries",
      "ko": "식료품을 구매하고 있다"
     },
     {
      "en": "purchasing some plants",
      "ko": "식물을 구매하고 있다"
     }
    ],
    "quiz": null,
    "tip": "물건을 구매하고 있는 모습의 사진에서 paying for some items, paying for one's purchase, making a payment 등도 정답으로 등장합니다."
   },
   {
    "no": 15,
    "word": "place",
    "pos": "v.",
    "meaning": "~을 (…에) 놓다, 위치시키다",
    "derivatives": [],
    "examples": [
     {
      "en": "placing an item on a shelf",
      "ko": "선반에 물건을 놓고 있다"
     },
     {
      "en": "placing a box on a cart",
      "ko": "수레에 상자를 놓고 있다"
     }
    ],
    "quiz": null,
    "tip": "동사 put도 같은 의미로 쓰입니다. (putting an item into a basket 바구니 안에 물건을 넣고 있다)"
   },
   {
    "no": 16,
    "word": "load",
    "pos": "v.",
    "meaning": "~을 싣다, ~에 싣다",
    "derivatives": [],
    "examples": [
     {
      "en": "loading some items into a vehicle",
      "ko": "차량에 물건들을 싣고 있다"
     },
     {
      "en": "loading a cart with boxes",
      "ko": "수레에 상자를 싣고 있다"
     }
    ],
    "quiz": null,
    "tip": "짐을 내리는 동작은 동사 unload를 써서 unloading materials from a vehicle(차량에서 물건들을 내리고 있다)처럼 표현합니다."
   },
   {
    "no": 17,
    "word": "distribute",
    "pos": "v.",
    "meaning": "~을 나눠주다, 배부하다",
    "derivatives": [],
    "examples": [
     {
      "en": "distributing papers",
      "ko": "서류를 나눠주고 있다"
     }
    ],
    "quiz": null,
    "tip": "hand out은 distribute와 같은 뜻으로 쓰입니다. (handing out brochures 브로슈어를 나눠주고 있다)\n동사 hand(~을 건네다)를 함께 알아 두세요. (handing an item to a customer 손님에게 물건을 건네고 있다)"
   },
   {
    "no": 18,
    "word": "look in(to)",
    "pos": "v.",
    "meaning": "~을 들여다보다",
    "derivatives": [],
    "examples": [
     {
      "en": "looking in a bag",
      "ko": "가방 안을 들여다보고 있다"
     },
     {
      "en": "looking into a display case",
      "ko": "진열장 안을 들여다보고 있다"
     }
    ],
    "quiz": null,
    "tip": "동사 look(보다)은 무엇을 보는 동작을 나타내며, 뒤에 주로 '전치사 + 보고 있는 대상'이 옵니다. (looking at a magazine 잡지를 보고 있다, looking out a window 창밖을 보고 있다)"
   },
   {
    "no": 19,
    "word": "trim",
    "pos": "v.",
    "meaning": "~(나뭇가지 등)을 다듬다",
    "derivatives": [],
    "examples": [
     {
      "en": "trimming some bushes",
      "ko": "관목을 다듬고 있다"
     },
     {
      "en": "trimming a tree",
      "ko": "나무를 다듬고 있다"
     }
    ],
    "quiz": null,
    "tip": "나무가 등장하는 사진에서 A tree is being trimmed.가 오답으로 잘 나옵니다.\n최근 시험에서는 A bush is being trimmed.가 정답으로 나온 적 있습니다."
   },
   {
    "no": 20,
    "word": "climb",
    "pos": "v.",
    "meaning": "~을 오르다",
    "derivatives": [],
    "examples": [
     {
      "en": "climbing a ladder",
      "ko": "사다리를 오르다"
     },
     {
      "en": "climbing some stairs",
      "ko": "계단을 오르다"
     }
    ],
    "quiz": null,
    "tip": "계단 사진에 잘 나오는 표현: steps = stairs = staircase 계단, going up a staircase 계단을 올라가고 있다, going down some stairs 계단을 내려가고 있다"
   },
   {
    "no": 21,
    "word": "board",
    "pos": "v.",
    "meaning": "~을 타다, ~에 오르다",
    "derivatives": [],
    "examples": [
     {
      "en": "boarding an airplane",
      "ko": "비행기에 오르고 있다"
     },
     {
      "en": "boarding a train",
      "ko": "기차에 오르고 있다"
     }
    ],
    "quiz": null,
    "tip": "getting into a car(차에 타다), getting on a boat(보트에 오르다)도 함께 알아 두세요."
   },
   {
    "no": 22,
    "word": "sweep",
    "pos": "v.",
    "meaning": "~을 (긴 빗자루로) 쓸다",
    "derivatives": [],
    "examples": [
     {
      "en": "sweeping a walkway",
      "ko": "보도를 쓸고 있다"
     },
     {
      "en": "sweeping the floor",
      "ko": "바닥을 쓸고 있다"
     }
    ],
    "quiz": null,
    "tip": "대걸레로 바닥을 닦는 동작은 동사 mop을 써서 표현합니다. (mopping the floor 대걸레로 바닥을 닦고 있다)"
   },
   {
    "no": 23,
    "word": "prepare",
    "pos": "v.",
    "meaning": "~을 준비하다",
    "derivatives": [],
    "examples": [
     {
      "en": "preparing some food",
      "ko": "음식을 준비하고 있다"
     }
    ],
    "quiz": null,
    "tip": "요리하는 여러 가지 모습(cooking food, cutting vegetables 등)을 preparing some food라고 묘사하는 정답이 종종 나옵니다."
   },
   {
    "no": 24,
    "word": "step",
    "pos": "v.",
    "meaning": "발을 내딛다",
    "derivatives": [],
    "examples": [
     {
      "en": "stepping onto a dock",
      "ko": "부두에 발을 내딛고 있다"
     },
     {
      "en": "stepping down from a boat",
      "ko": "보트에서 내리고 있다"
     }
    ],
    "quiz": null,
    "tip": "발을 내딛어 올라설 때는 stepping onto, 발을 떼서 내릴 때는 stepping off, stepping down from의 표현을 씁니다."
   },
   {
    "no": 25,
    "word": "enter",
    "pos": "v.",
    "meaning": "~에 들어가다",
    "derivatives": [],
    "examples": [
     {
      "en": "entering a building",
      "ko": "건물로 들어가고 있다"
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 26,
    "word": "stroll",
    "pos": "v.",
    "meaning": "천천히 거닐다",
    "derivatives": [],
    "examples": [
     {
      "en": "strolling along a path",
      "ko": "오솔길을 따라 걷고 있다"
     },
     {
      "en": "strolling side by side",
      "ko": "나란히 걷고 있다"
     }
    ],
    "quiz": null,
    "tip": "걷고 있는 동작과 관련하여 walking along(~을 따라 걷고 있다), walking toward(~쪽으로 걷고 있다) 등의 표현도 자주 출제됩니다."
   },
   {
    "no": 27,
    "word": "adjust",
    "pos": "v.",
    "meaning": "(장치 등을) 조정하다, 조절하다, 맞추다",
    "derivatives": [],
    "examples": [
     {
      "en": "adjusting some equipment",
      "ko": "장치를 조정하고 있다"
     },
     {
      "en": "adjusting the window shade",
      "ko": "창문 가리개를 조정하고 있다"
     },
     {
      "en": "adjusting a camera",
      "ko": "카메라를 조정하고 있다"
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 28,
    "word": "arrange",
    "pos": "v.",
    "meaning": "~을 정렬하다, 정리하다",
    "derivatives": [],
    "examples": [
     {
      "en": "arranging products on a shelf",
      "ko": "선반 위에 제품들을 정리하고 있다"
     }
    ],
    "quiz": null,
    "tip": "상점 진열대의 물건들을 정리하고 있는 모습의 사진이 자주 출제되는데, 이때 물건들을 products, materials, items, merchandise, goods 등으로 지칭하며, 모두 시험에 자주 출제됩니다."
   },
   {
    "no": 29,
    "word": "lift",
    "pos": "v.",
    "meaning": "~을 들어올리다",
    "derivatives": [],
    "examples": [
     {
      "en": "lifting a box",
      "ko": "상자를 들어올리고 있다"
     },
     {
      "en": "lifting some furniture",
      "ko": "가구를 들어올리고 있다"
     }
    ],
    "quiz": null,
    "tip": "물건을 줍거나 주워드는 동작을 묘사할 때는 picking up을 씁니다."
   },
   {
    "no": 30,
    "word": "rest",
    "pos": "v.",
    "meaning": "휴식을 취하다 (= relax)",
    "derivatives": [],
    "examples": [
     {
      "en": "resting on the steps",
      "ko": "계단 위에서 쉬고 있다"
     }
    ],
    "quiz": null,
    "tip": "rest는 '~을 …에 기대게 하다, ~을 …에 두다'라는 뜻으로도 출제됩니다. (resting arms on a counter 팔을 카운터에 기대고 있다)"
   },
   {
    "no": 31,
    "word": "cross",
    "pos": "v.",
    "meaning": "~을 건너다",
    "derivatives": [],
    "examples": [
     {
      "en": "crossing the street",
      "ko": "길을 건너고 있다"
     }
    ],
    "quiz": null,
    "tip": "길을 건너는 모습을 묘사할 때 길에 있는 사람을 pedestrian이라고 합니다. 자주 나오는 명사이니 꼭 알아 두세요."
   },
   {
    "no": 32,
    "word": "tie",
    "pos": "v.",
    "meaning": "~을 묶다, 매다",
    "derivatives": [],
    "examples": [
     {
      "en": "tying his shoelaces",
      "ko": "신발끈을 매는 중이다"
     },
     {
      "en": "tying an apron",
      "ko": "앞치마를 매는 중이다"
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 33,
    "word": "reach",
    "pos": "v.",
    "meaning": "손을 뻗다",
    "derivatives": [],
    "examples": [
     {
      "en": "reaching for a book",
      "ko": "책에 손을 뻗고 있다"
     },
     {
      "en": "reaching into a drawer",
      "ko": "서랍 안으로 손을 뻗고 있다"
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 34,
    "word": "point at / to",
    "pos": "v.",
    "meaning": "~을 가리키다",
    "derivatives": [],
    "examples": [
     {
      "en": "pointing at a screen",
      "ko": "화면을 가리키다"
     },
     {
      "en": "pointing to a map",
      "ko": "지도를 가리키다"
     }
    ],
    "quiz": null,
    "tip": "가리키는 대상 앞에 전치사 at 또는 to를 쓰는데, 둘 사이에 의미상 차이는 없습니다."
   },
   {
    "no": 35,
    "word": "dine",
    "pos": "v.",
    "meaning": "식사하다",
    "derivatives": [],
    "examples": [
     {
      "en": "dining at a restaurant",
      "ko": "식당에서 식사 중이다"
     }
    ],
    "quiz": null,
    "tip": "'식사하다'는 동작을 having a meal, eating 등으로 표현할 수 있습니다.\n마시는 동작을 묘사할 때 drinking 외에 sipping(조금씩 마시다)도 자주 출제됩니다.\n'식사하는 사람'을 diner라고 합니다."
   },
   {
    "no": 36,
    "word": "remove",
    "pos": "v.",
    "meaning": "~을 꺼내다, 빼다",
    "derivatives": [],
    "examples": [
     {
      "en": "removing an item from a shelf",
      "ko": "선반에서 물건을 꺼내고 있다"
     },
     {
      "en": "removing mail from a mailbox",
      "ko": "우편함에서 우편물을 꺼내고 있다"
     }
    ],
    "quiz": null,
    "tip": "옷이나 모자, 안경 등을 벗는 동작을 묘사할 때도 동사 remove를 씁니다. (removing a hat 모자를 벗는 중이다)"
   },
   {
    "no": 37,
    "word": "stand",
    "pos": "v.",
    "meaning": "서 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "standing on a platform",
      "ko": "플랫폼에 서 있다"
     }
    ],
    "quiz": null,
    "tip": "인물이 서 있는 위치를 나타내는 전치사구를 잘 들어야 합니다. next to a chair 의자 옆에, behind a counter 카운터 뒤에, near a building 건물 근처에, in front of a desk 책상 앞에"
   },
   {
    "no": 38,
    "word": "pose",
    "pos": "v.",
    "meaning": "포즈를 취하다",
    "derivatives": [],
    "examples": [
     {
      "en": "posing for a photo",
      "ko": "사진을 찍기 위해 포즈를 취하고 있다"
     }
    ],
    "quiz": null,
    "tip": "이 모습을 '사진 찍히고 있다'라고 표현할 수도 있습니다. (Some women are being photographed by a man. 남자가 여자들의 사진을 찍고 있다.)"
   },
   {
    "no": 39,
    "word": "work",
    "pos": "v.",
    "meaning": "작업하다",
    "derivatives": [],
    "examples": [
     {
      "en": "working on a machine",
      "ko": "기계로 작업하고 있다"
     },
     {
      "en": "working behind a counter",
      "ko": "카운터 뒤에서 작업하고 있다"
     },
     {
      "en": "working in a garden",
      "ko": "정원에서 작업하고 있다"
     }
    ],
    "quiz": null,
    "tip": "기계를 만지는 모습, 컴퓨터로 일하는 모습, 공사장이나 정원 등에서 일하는 모습 등을 모두 work(작업하다)로 표현할 수 있습니다."
   },
   {
    "no": 40,
    "word": "pack",
    "pos": "v.",
    "meaning": "짐을 싸다, 가방을 꾸리다",
    "derivatives": [],
    "examples": [
     {
      "en": "packing a suitcase",
      "ko": "여행가방을 싸고 있다"
     },
     {
      "en": "packing merchandise into boxes",
      "ko": "물건을 상자에 포장하고 있다"
     }
    ],
    "quiz": null,
    "tip": "'짐을 풀다'는 동사 unpack을 써서 표현합니다."
   }
  ]
 },
 {
  "week": 1,
  "day": 2,
  "part": "Part 5,6",
  "title": "명사 ①",
  "words": [
   {
    "no": 1,
    "word": "delivery",
    "pos": "n.",
    "meaning": "배송, 배달",
    "derivatives": [
     {
      "word": "deliver",
      "pos": "v.",
      "meaning": "배송하다, 배달하다"
     }
    ],
    "examples": [
     {
      "en": "allow three days for delivery",
      "ko": "배송에 3일의 여유를 주다"
     },
     {
      "en": "the launch of a unique delivery service",
      "ko": "특별한 배송 서비스의 출시"
     }
    ],
    "quiz": {
     "sentence": "When ordering by phone or through our app, please allow 30 to 45 minutes for ------- of your pizza.",
     "a": "delivery",
     "b": "method",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 2,
    "word": "equipment",
    "pos": "n.",
    "meaning": "장비, 기기",
    "derivatives": [
     {
      "word": "equip",
      "pos": "v.",
      "meaning": "장비를 갖추다"
     },
     {
      "word": "equipped",
      "pos": "a.",
      "meaning": "(장비를) 갖춘, 장착된(with)"
     }
    ],
    "examples": [
     {
      "en": "laboratory safety equipment",
      "ko": "실험실 안전 장비"
     },
     {
      "en": "heavy earthmoving equipment",
      "ko": "토목 중장비"
     }
    ],
    "quiz": {
     "sentence": "Assembly line workers at AMJ Manufacturing are trained to use safety ------- in the factory.",
     "a": "equipment",
     "b": "treatment",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 3,
    "word": "resource",
    "pos": "n.",
    "meaning": "자원, 재원",
    "derivatives": [
     {
      "word": "resourceful",
      "pos": "a.",
      "meaning": "자원이 풍부한, 재치있는"
     }
    ],
    "examples": [
     {
      "en": "an invaluable resource for",
      "ko": "~에게 매우 소중한 자원"
     }
    ],
    "quiz": {
     "sentence": "Taco Queen Inc. supplies all the ------- that franchise owners need to set up a restaurant.",
     "a": "descriptions",
     "b": "resources",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 4,
    "word": "addition",
    "pos": "n.",
    "meaning": "추가 (인원), 추가물",
    "derivatives": [
     {
      "word": "add",
      "pos": "v.",
      "meaning": "추가하다, (말을) 덧붙이다"
     },
     {
      "word": "additional",
      "pos": "a.",
      "meaning": "추가적인, 여분의"
     },
     {
      "word": "additionally",
      "pos": "ad.",
      "meaning": "게다가"
     }
    ],
    "examples": [
     {
      "en": "a valuable addition to",
      "ko": "~에게 소중한 충원 인력"
     },
     {
      "en": "a welcome addition to the collection",
      "ko": "소장품에 대한 반가운 추가물"
     }
    ],
    "quiz": {
     "sentence": "The ------- of customer reviews to business Web sites can help boost a company's reputation.",
     "a": "comment",
     "b": "addition",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 5,
    "word": "applicant",
    "pos": "n.",
    "meaning": "지원자, 신청자",
    "derivatives": [],
    "examples": [
     {
      "en": "Most applicants possess ~.",
      "ko": "대부분의 지원자들은 ~을 가지고 있다."
     },
     {
      "en": "business loan applicants",
      "ko": "사업 대출 신청자들"
     }
    ],
    "quiz": {
     "sentence": "Most ------- have at least three years of experience in the fashion industry.",
     "a": "consumers",
     "b": "applicants",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 6,
    "word": "requirement",
    "pos": "n.",
    "meaning": "요구 조건, 자격요건, 필요",
    "derivatives": [
     {
      "word": "require",
      "pos": "v.",
      "meaning": "요구하다, 필요로 하다"
     }
    ],
    "examples": [
     {
      "en": "a requirement for the position",
      "ko": "그 직책의 요구 조건"
     },
     {
      "en": "meet the requirements for",
      "ko": "~에 대한 자격요건에 부합하다"
     }
    ],
    "quiz": {
     "sentence": "Knowledge of modern graphic design software is a ------- for the online content editor position.",
     "a": "requirement",
     "b": "replacement",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 7,
    "word": "candidate",
    "pos": "n.",
    "meaning": "지원자, 후보자",
    "derivatives": [],
    "examples": [
     {
      "en": "qualified candidates from around the world",
      "ko": "전 세계에서 모인 훌륭한 지원자들"
     },
     {
      "en": "external candidates",
      "ko": "외부 지원자들"
     }
    ],
    "quiz": {
     "sentence": "Last summer, numerous highly promising ------- applied for the intern program at our company.",
     "a": "supporters",
     "b": "candidates",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 8,
    "word": "employment",
    "pos": "n.",
    "meaning": "채용, 일자리, 취업",
    "derivatives": [
     {
      "word": "employ",
      "pos": "v.",
      "meaning": "고용하다"
     },
     {
      "word": "employee",
      "pos": "n.",
      "meaning": "직원"
     }
    ],
    "examples": [
     {
      "en": "recent inquiry about employment with",
      "ko": "~에서 진행하는 채용에 대한 최근 문의"
     },
     {
      "en": "currently look for employment",
      "ko": "현재 일자리를 찾는 중이다"
     }
    ],
    "quiz": {
     "sentence": "Margaret Raines recently moved to Los Angeles and is actively seeking ------- in the city.",
     "a": "employment",
     "b": "registration",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 9,
    "word": "approval",
    "pos": "n.",
    "meaning": "승인",
    "derivatives": [
     {
      "word": "approve",
      "pos": "v.",
      "meaning": "승인하다"
     }
    ],
    "examples": [
     {
      "en": "final approval from",
      "ko": "~로부터의 최종 승인"
     },
     {
      "en": "receive approval to hire new employees",
      "ko": "신입직원들을 고용하도록 승인을 받다"
     }
    ],
    "quiz": {
     "sentence": "Formal ------- from the accounting department is necessary before employees may use a corporate credit card.",
     "a": "approval",
     "b": "decision",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 10,
    "word": "productivity",
    "pos": "n.",
    "meaning": "생산성",
    "derivatives": [
     {
      "word": "produce",
      "pos": "v.",
      "meaning": "생산하다"
     },
     {
      "word": "productive",
      "pos": "a.",
      "meaning": "생산적인"
     }
    ],
    "examples": [
     {
      "en": "increase employee productivity",
      "ko": "직원 생산성을 높이다"
     },
     {
      "en": "improve the designer's productivity",
      "ko": "디자이너의 생산성을 향상시키다"
     }
    ],
    "quiz": {
     "sentence": "Since installing chat programs on the office computers, Ryder Corporation has seen a worrying decrease in staff -------.",
     "a": "tendency",
     "b": "productivity",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 11,
    "word": "proposal",
    "pos": "n.",
    "meaning": "제안(서)",
    "derivatives": [],
    "examples": [
     {
      "en": "write a business proposal",
      "ko": "사업 제안서를 작성하다"
     },
     {
      "en": "detailed proposal",
      "ko": "상세한 제안서"
     }
    ],
    "quiz": {
     "sentence": "Mr. Lowe's ------- for an expansion of the city library was accepted by the city's planning department.",
     "a": "proposal",
     "b": "approval",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 12,
    "word": "facility",
    "pos": "n.",
    "meaning": "시설(물)",
    "derivatives": [],
    "examples": [
     {
      "en": "sign up for a guided tour of the facility",
      "ko": "가이드가 안내하는 시설 견학을 신청하다"
     },
     {
      "en": "be welcome to use company facilities",
      "ko": "회사 시설물을 이용하는 것을 환영하다"
     }
    ],
    "quiz": {
     "sentence": "In addition to around 250 stores, Premier Mall houses a cinema and several other -------.",
     "a": "facilities",
     "b": "conventions",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 13,
    "word": "payment",
    "pos": "n.",
    "meaning": "지불(금)",
    "derivatives": [
     {
      "word": "pay",
      "pos": "v.",
      "meaning": "지불하다"
     }
    ],
    "examples": [
     {
      "en": "avoid delays in payment",
      "ko": "지불 연체를 피하다"
     },
     {
      "en": "payment of the rent for",
      "ko": "~에 대한 임대료의 지불"
     }
    ],
    "quiz": {
     "sentence": "------- of the security deposit should be made when checking in to your room at the Portman Hotel.",
     "a": "Renovation",
     "b": "Payment",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 14,
    "word": "opportunity",
    "pos": "n.",
    "meaning": "기회",
    "derivatives": [],
    "examples": [
     {
      "en": "have the opportunity to do",
      "ko": "~할 기회를 가지다"
     },
     {
      "en": "a career opportunity",
      "ko": "채용 기회"
     },
     {
      "en": "Don't miss this opportunity.",
      "ko": "이 기회를 놓치지 마십시오."
     }
    ],
    "quiz": {
     "sentence": "After being enrolled in the advanced marketing workshop, Mike thanked his supervisor for the ------- to broaden his skill set.",
     "a": "event",
     "b": "opportunity",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 15,
    "word": "procedure",
    "pos": "n.",
    "meaning": "절차, 과정",
    "derivatives": [
     {
      "word": "proceed",
      "pos": "v.",
      "meaning": "진행하다, 나아가다"
     }
    ],
    "examples": [
     {
      "en": "follow the standard procedures",
      "ko": "표준 절차를 따르다"
     },
     {
      "en": "The following procedures are to do ~.",
      "ko": "다음의 과정들은 ~하기 위한 것이다."
     }
    ],
    "quiz": {
     "sentence": "All kitchen staff must follow the proper ------- when preparing restaurant orders.",
     "a": "procedures",
     "b": "qualifications",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 16,
    "word": "effort",
    "pos": "n.",
    "meaning": "노력, 수고, 시도",
    "derivatives": [
     {
      "word": "effortlessly",
      "pos": "ad.",
      "meaning": "쉽게, 힘들이지 않고"
     }
    ],
    "examples": [
     {
      "en": "in an effort to do",
      "ko": "~하려는 노력의 일환으로"
     },
     {
      "en": "ongoing effort",
      "ko": "계속되는 수고"
     }
    ],
    "quiz": {
     "sentence": "In an ------- to reduce operating expenses, we are changing our current plastic packaging to more affordable paper boxes.",
     "a": "effort",
     "b": "account",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 17,
    "word": "instruction",
    "pos": "n.",
    "meaning": "안내, 설명(서), 지시",
    "derivatives": [
     {
      "word": "instruct",
      "pos": "v.",
      "meaning": "알려 주다, 지시하다"
     }
    ],
    "examples": [
     {
      "en": "provide step-by-step installation instructions",
      "ko": "단계적인 설치 안내를 제공하다"
     },
     {
      "en": "find detailed instructions on",
      "ko": "~에 대한 상세한 설명서를 찾다"
     }
    ],
    "quiz": {
     "sentence": "Before using the scientific calculator, please read the detailed ------- printed on the back of the box.",
     "a": "qualifications",
     "b": "instructions",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 18,
    "word": "maintenance",
    "pos": "n.",
    "meaning": "유지(보수)",
    "derivatives": [
     {
      "word": "maintain",
      "pos": "v.",
      "meaning": "유지하다, 관리하다"
     }
    ],
    "examples": [
     {
      "en": "undergo a routine[regular] maintenance",
      "ko": "정기적인 유지보수를 받다"
     },
     {
      "en": "negotiate a contract for maintenance",
      "ko": "유지보수 계약을 협상하다"
     }
    ],
    "quiz": {
     "sentence": "Triton Engineering agreed to a five-year contract for ------- of the elevators in the Apex One office building.",
     "a": "maintenance",
     "b": "application",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 19,
    "word": "promotion",
    "pos": "n.",
    "meaning": "승진, 홍보 (행사), 촉진",
    "derivatives": [],
    "examples": [
     {
      "en": "offer a promotion",
      "ko": "승진을 제안하다"
     },
     {
      "en": "This promotion ends on May 31.",
      "ko": "이 홍보 행사는 5월 31일에 끝난다."
     }
    ],
    "quiz": {
     "sentence": "Bramble Bistro is running a ------- that allows its diners to order a free dessert with any main course dish.",
     "a": "destination",
     "b": "promotion",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 20,
    "word": "merchandise",
    "pos": "n.",
    "meaning": "상품",
    "derivatives": [],
    "examples": [
     {
      "en": "purchase discounted merchandise",
      "ko": "할인된 상품을 구매하다"
     },
     {
      "en": "merchandise displayed on our Web site",
      "ko": "저희 웹 사이트에 전시된 상품"
     }
    ],
    "quiz": {
     "sentence": "Most ------- displayed near the store entrance is discounted as part of our Winter Sale.",
     "a": "merchandise",
     "b": "retails",
     "answer": "A"
    },
    "tip": "명사 merchandise는 셀 수 없는 명사로 단수 동사와 함께 사용된다."
   },
   {
    "no": 21,
    "word": "registration",
    "pos": "n.",
    "meaning": "등록",
    "derivatives": [
     {
      "word": "register",
      "pos": "v.",
      "meaning": "등록하다"
     }
    ],
    "examples": [
     {
      "en": "advanced registration",
      "ko": "사전 등록"
     },
     {
      "en": "registration process",
      "ko": "등록 과정"
     }
    ],
    "quiz": {
     "sentence": "If you join our gym during the advanced ------- period, you will receive a 25 percent discount on the monthly membership fee.",
     "a": "organization",
     "b": "registration",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 22,
    "word": "advancement",
    "pos": "n.",
    "meaning": "승진, 발전, 향상",
    "derivatives": [
     {
      "word": "advanced",
      "pos": "a.",
      "meaning": "상급의, 진보한, 첨단의"
     },
     {
      "word": "advance",
      "pos": "n.",
      "meaning": "전진, 진보"
     },
     {
      "word": "advance",
      "pos": "v.",
      "meaning": "전진하다, 진보하다"
     }
    ],
    "examples": [
     {
      "en": "advancement to management positions",
      "ko": "관리직으로의 승진"
     },
     {
      "en": "the widespread advancement in",
      "ko": "~ 부문의 광범위한 발전"
     }
    ],
    "quiz": {
     "sentence": "The HR manager has compiled a list of six employees who would be suitable for ------- to supervisor roles.",
     "a": "advancement",
     "b": "transmitting",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 23,
    "word": "responsibility",
    "pos": "n.",
    "meaning": "책임, 직무, 담당 업무",
    "derivatives": [
     {
      "word": "responsible",
      "pos": "a.",
      "meaning": "책임이 있는"
     }
    ],
    "examples": [
     {
      "en": "It is A's responsibility to do ~.",
      "ko": "~하는 것은 A의 책임이다."
     },
     {
      "en": "the description of your new responsibilities",
      "ko": "귀하의 새 직무에 대한 설명"
     }
    ],
    "quiz": {
     "sentence": "It is each passenger's ------- to secure their personal belongings when leaving the tour bus.",
     "a": "permission",
     "b": "responsibility",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 24,
    "word": "replacement",
    "pos": "n.",
    "meaning": "교환(품), 교체, 후임",
    "derivatives": [
     {
      "word": "replace",
      "pos": "v.",
      "meaning": "교체하다, 대신하다"
     }
    ],
    "examples": [
     {
      "en": "request a refund or replacement",
      "ko": "환불이나 교환을 요청하다"
     },
     {
      "en": "train one's replacement",
      "ko": "후임을 교육시키다"
     }
    ],
    "quiz": {
     "sentence": "Within the one-year warranty period, customers may request a refund or ------- for any Tarsus laptop computer.",
     "a": "receipt",
     "b": "replacement",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 25,
    "word": "assistance",
    "pos": "n.",
    "meaning": "지원, 도움",
    "derivatives": [
     {
      "word": "assistant",
      "pos": "n.",
      "meaning": "조수, 보조"
     }
    ],
    "examples": [
     {
      "en": "give financial assistance to",
      "ko": "~에게 재정적 지원을 하다"
     }
    ],
    "quiz": {
     "sentence": "Our organization provides valuable financial ------- to a wide range of start-up businesses.",
     "a": "assistance",
     "b": "association",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 26,
    "word": "agreement",
    "pos": "n.",
    "meaning": "계약, 합의, 동의",
    "derivatives": [
     {
      "word": "agree",
      "pos": "v.",
      "meaning": "동의하다"
     },
     {
      "word": "agreeably",
      "pos": "ad.",
      "meaning": "흔쾌히, 기분 좋게"
     }
    ],
    "examples": [
     {
      "en": "negotiate a long-term agreement with",
      "ko": "~와 장기 계약을 협상하다"
     }
    ],
    "quiz": {
     "sentence": "Ferny Fruit Farm has negotiated mutually beneficial ------- with several shipping companies.",
     "a": "agreements",
     "b": "effects",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 27,
    "word": "period",
    "pos": "n.",
    "meaning": "기간, 시기",
    "derivatives": [
     {
      "word": "periodic",
      "pos": "a.",
      "meaning": "정기적인"
     },
     {
      "word": "periodically",
      "pos": "ad.",
      "meaning": "정기적으로"
     }
    ],
    "examples": [
     {
      "en": "during the promotional period",
      "ko": "판촉활동 기간 동안"
     },
     {
      "en": "for a period of one year",
      "ko": "1년의 기간 동안"
     }
    ],
    "quiz": {
     "sentence": "The financial audit of Herdmont Investment will be conducted over a ------- of three weeks.",
     "a": "period",
     "b": "session",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 28,
    "word": "identification",
    "pos": "n.",
    "meaning": "신분증",
    "derivatives": [
     {
      "word": "identify",
      "pos": "v.",
      "meaning": "찾아내다, 확인하다"
     },
     {
      "word": "identifiable",
      "pos": "a.",
      "meaning": "알아볼 수 있는"
     }
    ],
    "examples": [
     {
      "en": "a valid form of identification",
      "ko": "유효한 신분증"
     },
     {
      "en": "Make sure one's identification is visible.",
      "ko": "~의 신분증이 확실히 보이도록 해주십시오."
     }
    ],
    "quiz": {
     "sentence": "Attendees are required to present valid photo ------- to claim their tickets at the box office.",
     "a": "identification",
     "b": "specification",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 29,
    "word": "property",
    "pos": "n.",
    "meaning": "재산, 대지",
    "derivatives": [],
    "examples": [
     {
      "en": "other company property",
      "ko": "그 밖의 회사 재산"
     },
     {
      "en": "purchase some property",
      "ko": "대지를 약간 매입하다"
     }
    ],
    "quiz": {
     "sentence": "Laptops, flash drives, and other company ------- must be returned when employees leave the company.",
     "a": "material",
     "b": "property",
     "answer": "B"
    },
    "tip": "명사 property에는 '특성, 속성'의 의미도 있지만 토익에서는 이 의미로 거의 출제되지 않는다."
   },
   {
    "no": 30,
    "word": "advice",
    "pos": "n.",
    "meaning": "충고, 조언",
    "derivatives": [
     {
      "word": "advise",
      "pos": "v.",
      "meaning": "충고하다, 조언하다"
     }
    ],
    "examples": [
     {
      "en": "accurate and timely advice",
      "ko": "정확하고 시기적절한 충고"
     },
     {
      "en": "hear specific advice from",
      "ko": "~로부터 구체적인 조언을 듣다"
     }
    ],
    "quiz": {
     "sentence": "The Greenacre Landscapers Convention gives attendees a chance to hear expert -------.",
     "a": "case",
     "b": "advice",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 31,
    "word": "preference",
    "pos": "n.",
    "meaning": "선호(하는 것), 취향",
    "derivatives": [
     {
      "word": "prefer",
      "pos": "v.",
      "meaning": "선호하다"
     },
     {
      "word": "preferable",
      "pos": "a.",
      "meaning": "더 좋은"
     },
     {
      "word": "preferred",
      "pos": "a.",
      "meaning": "선호하는"
     }
    ],
    "examples": [
     {
      "en": "an increasing preference for online shopping",
      "ko": "온라인 쇼핑에 대한 증가하는 선호"
     },
     {
      "en": "indicate one's food preference",
      "ko": "~의 음식 취향을 표시하다"
     }
    ],
    "quiz": {
     "sentence": "Video game players aged between 15 and 25 are displaying a rising ------- for mobile gaming.",
     "a": "amount",
     "b": "preference",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 32,
    "word": "expertise",
    "pos": "n.",
    "meaning": "전문 지식, 전문 기술",
    "derivatives": [
     {
      "word": "expert",
      "pos": "n.",
      "meaning": "전문가"
     },
     {
      "word": "expert",
      "pos": "a.",
      "meaning": "전문적인"
     }
    ],
    "examples": [
     {
      "en": "require a great deal of mechanical expertise",
      "ko": "많은 기계적인 전문 지식을 요구하다"
     },
     {
      "en": "have the technical expertise",
      "ko": "기술적 전문 지식을 지니다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Reynolds admitted that he does not have the management ------- to supervise the new branch office.",
     "a": "expense",
     "b": "expertise",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 33,
    "word": "condition",
    "pos": "n.",
    "meaning": "상태, 조건",
    "derivatives": [
     {
      "word": "conditional",
      "pos": "a.",
      "meaning": "조건부의"
     }
    ],
    "examples": [
     {
      "en": "in excellent condition",
      "ko": "훌륭한 상태로"
     },
     {
      "en": "in its original condition",
      "ko": "원래와 같은 상태로"
     }
    ],
    "quiz": {
     "sentence": "All items sold through our online auction are in nearly-new ------- and come with a 30-day money back guarantee.",
     "a": "location",
     "b": "condition",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 34,
    "word": "option",
    "pos": "n.",
    "meaning": "선택지, 선택(사항)",
    "derivatives": [
     {
      "word": "optional",
      "pos": "a.",
      "meaning": "선택적인"
     }
    ],
    "examples": [
     {
      "en": "have an array of options to choose from",
      "ko": "~에서 선택할 수 있는 다수의 선택지가 있다"
     },
     {
      "en": "provide A with several options for",
      "ko": "~에 대한 몇 가지 선택사항들을 A에게 제공하다"
     }
    ],
    "quiz": {
     "sentence": "The east coast of the island provides tourists with numerous ------- for shopping and sightseeing.",
     "a": "receptions",
     "b": "options",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 35,
    "word": "inquiry",
    "pos": "n.",
    "meaning": "문의, 질의",
    "derivatives": [
     {
      "word": "inquire",
      "pos": "v.",
      "meaning": "묻다"
     }
    ],
    "examples": [
     {
      "en": "address the customer inquiries",
      "ko": "고객 문의를 해결하다"
     },
     {
      "en": "I am responding to one's inquiries about ~.",
      "ko": "저는 ~에 대한 문의에 답변드리고 있습니다."
     }
    ],
    "quiz": {
     "sentence": "Because we want to provide excellent customer service, all ------- must be handled in a prompt manner.",
     "a": "inquiries",
     "b": "positions",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 36,
    "word": "statement",
    "pos": "n.",
    "meaning": "성명, 진술, 명세서",
    "derivatives": [
     {
      "word": "state",
      "pos": "v.",
      "meaning": "말하다, 진술하다, 명시하다"
     }
    ],
    "examples": [
     {
      "en": "in a statement given yesterday",
      "ko": "어제 주어진 성명에서"
     }
    ],
    "quiz": {
     "sentence": "In a ------- released this morning, the CEO of Graxley Inc. outlined the firm's national recruitment program.",
     "a": "performance",
     "b": "statement",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 37,
    "word": "suggestion",
    "pos": "n.",
    "meaning": "제안(사항), 제시, 암시",
    "derivatives": [
     {
      "word": "suggest",
      "pos": "v.",
      "meaning": "제안하다, 암시하다"
     }
    ],
    "examples": [
     {
      "en": "collect suggestions from",
      "ko": "~로부터의 제안사항들을 취합하다"
     },
     {
      "en": "suggestion to improve the service",
      "ko": "서비스를 향상시키자는 제안사항"
     }
    ],
    "quiz": {
     "sentence": "The council has posted an online poll to gather ------- on the best use for the land opposite Skyway Stadium.",
     "a": "suggestions",
     "b": "attendees",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 38,
    "word": "permission",
    "pos": "n.",
    "meaning": "허가, 승인",
    "derivatives": [
     {
      "word": "permit",
      "pos": "n.",
      "meaning": "허가증"
     },
     {
      "word": "permissive",
      "pos": "a.",
      "meaning": "허용하는, 관대한"
     }
    ],
    "examples": [
     {
      "en": "obtain one's permission",
      "ko": "~의 허가를 받다"
     },
     {
      "en": "without permission from",
      "ko": "~로부터의 승인 없이"
     }
    ],
    "quiz": {
     "sentence": "All workers must obtain the manager's ------- before taking an extended lunch break.",
     "a": "admission",
     "b": "permission",
     "answer": "B"
    },
    "tip": "명사 permission은 불가산명사, 명사 permit은 가산명사이다."
   },
   {
    "no": 39,
    "word": "cooperation",
    "pos": "n.",
    "meaning": "협조, 협력",
    "derivatives": [
     {
      "word": "cooperate",
      "pos": "v.",
      "meaning": "협력하다"
     },
     {
      "word": "cooperative",
      "pos": "a.",
      "meaning": "협력하는"
     },
     {
      "word": "cooperatively",
      "pos": "ad.",
      "meaning": "협조적으로"
     }
    ],
    "examples": [
     {
      "en": "appreciate the employees' cooperation",
      "ko": "직원들의 협조에 감사하다"
     },
     {
      "en": "Thank you for your cooperation.",
      "ko": "귀하의 협조에 감사드립니다."
     }
    ],
    "quiz": {
     "sentence": "The building manager appreciates the residents' ------- regarding the new cleaning schedule for communal areas.",
     "a": "cooperation",
     "b": "convention",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 40,
    "word": "admission",
    "pos": "n.",
    "meaning": "입장 (허가), 허가, 시인",
    "derivatives": [
     {
      "word": "admit",
      "pos": "v.",
      "meaning": "인정하다, 허가하다"
     },
     {
      "word": "admissible",
      "pos": "a.",
      "meaning": "인정되는, 허용되는"
     }
    ],
    "examples": [
     {
      "en": "receive free admission to",
      "ko": "~에 대해 무료 입장 허가를 받다"
     },
     {
      "en": "from the date of admission",
      "ko": "허가일로부터"
     }
    ],
    "quiz": {
     "sentence": "Members of the Kennedy Business Institute receive half-price ------- to all seminars.",
     "a": "admission",
     "b": "exchange",
     "answer": "A"
    },
    "tip": ""
   }
  ]
 },
 {
  "week": 1,
  "day": 3,
  "part": "Part 5,6",
  "title": "명사 ②",
  "words": [
   {
    "no": 1,
    "word": "complaint",
    "pos": "n.",
    "meaning": "불만(사항), 불평",
    "derivatives": [
     {
      "word": "complain",
      "pos": "v.",
      "meaning": "불평하다"
     }
    ],
    "examples": [
     {
      "en": "frequent complaint",
      "ko": "잦은 불만사항"
     },
     {
      "en": "receive increasing complaints",
      "ko": "불만사항이 증가하다"
     }
    ],
    "quiz": {
     "sentence": "One common ------- library members make is that there are not enough group study rooms.",
     "a": "opinion",
     "b": "complaint",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 2,
    "word": "enrollment",
    "pos": "n.",
    "meaning": "등록(자 수)",
    "derivatives": [
     {
      "word": "enroll",
      "pos": "v.",
      "meaning": "등록하다"
     }
    ],
    "examples": [
     {
      "en": "complete the online enrollment form",
      "ko": "온라인 등록 양식을 작성 완료하다"
     },
     {
      "en": "Your enrollment entitles you to A.",
      "ko": "귀하의 등록은 귀하에게 A라는 자격을 드립니다."
     }
    ],
    "quiz": {
     "sentence": "Fill out the online ------- form by May 31 if you wish to attend our business management workshop.",
     "a": "enrollment",
     "b": "inventory",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 3,
    "word": "feedback",
    "pos": "n.",
    "meaning": "의견, 피드백",
    "derivatives": [],
    "examples": [
     {
      "en": "provide feedback to",
      "ko": "~에게 의견을 제공하다"
     },
     {
      "en": "receive positive feedback on",
      "ko": "~에 대한 긍정적인 피드백을 받다"
     }
    ],
    "quiz": {
     "sentence": "Alpha Sportswear has received negative ------- regarding its new television advertisements.",
     "a": "feedback",
     "b": "influence",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 4,
    "word": "investment",
    "pos": "n.",
    "meaning": "투자(금)",
    "derivatives": [
     {
      "word": "invest",
      "pos": "v.",
      "meaning": "투자하다"
     },
     {
      "word": "investor",
      "pos": "n.",
      "meaning": "투자자"
     }
    ],
    "examples": [
     {
      "en": "initial investment",
      "ko": "초기 투자금"
     }
    ],
    "quiz": {
     "sentence": "An expert in foreign -------, Arthur Sanders, has become wealthy from purchasing shares in international corporations.",
     "a": "investments",
     "b": "travels",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 5,
    "word": "source",
    "pos": "n.",
    "meaning": "원천, 출처",
    "derivatives": [],
    "examples": [
     {
      "en": "the main source of inspiration",
      "ko": "영감의 주요 원천"
     },
     {
      "en": "the source of the data",
      "ko": "그 자료의 출처"
     }
    ],
    "quiz": {
     "sentence": "Singer Richard Prince stated that the birth of his child was the primary ------- of inspiration for his new album.",
     "a": "group",
     "b": "source",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 6,
    "word": "inspection",
    "pos": "n.",
    "meaning": "점검, 검사",
    "derivatives": [
     {
      "word": "inspect",
      "pos": "v.",
      "meaning": "점검하다, 검사하다"
     },
     {
      "word": "inspector",
      "pos": "n.",
      "meaning": "검사관"
     }
    ],
    "examples": [
     {
      "en": "carry out the annual inspection of the factory",
      "ko": "공장에 대한 연례 점검을 수행하다"
     }
    ],
    "quiz": {
     "sentence": "The health and hygiene officer will visit our restaurant today to conduct the yearly ------- of our kitchens.",
     "a": "opinion",
     "b": "inspection",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 7,
    "word": "figure",
    "pos": "n.",
    "meaning": "수치, 인물",
    "derivatives": [],
    "examples": [
     {
      "en": "This figure covers both A and B.",
      "ko": "이 수치는 A와 B 둘 다 포함합니다."
     },
     {
      "en": "update our sales figures",
      "ko": "우리의 매출 수치를 업데이트하다"
     }
    ],
    "quiz": {
     "sentence": "Ms. Rondell will report on the company's annual ------- after receiving sales reports from all twenty branches.",
     "a": "measures",
     "b": "figures",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 8,
    "word": "response",
    "pos": "n.",
    "meaning": "반응, 응답",
    "derivatives": [
     {
      "word": "responsive",
      "pos": "a.",
      "meaning": "반응하는"
     },
     {
      "word": "respond",
      "pos": "v.",
      "meaning": "반응을 보이다, 응답하다"
     }
    ],
    "examples": [
     {
      "en": "based on the response to",
      "ko": "~에 대한 반응을 기반으로"
     },
     {
      "en": "in response to",
      "ko": "~에 응답하여"
     }
    ],
    "quiz": {
     "sentence": "In ------- to increased demand from consumers, Ryzen Appliances has doubled production of its refrigerators.",
     "a": "contrast",
     "b": "response",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 9,
    "word": "selection",
    "pos": "n.",
    "meaning": "선택(지)",
    "derivatives": [
     {
      "word": "select",
      "pos": "v.",
      "meaning": "선택하다"
     },
     {
      "word": "selective",
      "pos": "a.",
      "meaning": "선택적인, 까다로운"
     }
    ],
    "examples": [
     {
      "en": "make a selection",
      "ko": "선택하다, 선정하다"
     },
     {
      "en": "have a limited selection of",
      "ko": "~에 대한 제한된 선택지를 가지고 있다"
     }
    ],
    "quiz": {
     "sentence": "Mangrove Beach Resort offers a ------- of water-based activities, such as jetskiing and snorkeling.",
     "a": "selection",
     "b": "preference",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 10,
    "word": "variety",
    "pos": "n.",
    "meaning": "다양성",
    "derivatives": [
     {
      "word": "various",
      "pos": "a.",
      "meaning": "다양한"
     }
    ],
    "examples": [
     {
      "en": "add greater variety to the menu",
      "ko": "메뉴에 더 많은 다양성을 추가하다"
     },
     {
      "en": "a wide variety of health-care services",
      "ko": "매우 다양한 종류의 의료 서비스"
     }
    ],
    "quiz": {
     "sentence": "The new Funland complex will offer an extensive ------- of entertainment facilities when it opens this summer.",
     "a": "condition",
     "b": "variety",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 11,
    "word": "invitation",
    "pos": "n.",
    "meaning": "초대(장), 초청",
    "derivatives": [
     {
      "word": "invite",
      "pos": "v.",
      "meaning": "초대하다, 요청하다"
     }
    ],
    "examples": [
     {
      "en": "receive an invitation to attend",
      "ko": "~에 참석하도록 초대를 받다"
     },
     {
      "en": "invitations to the awards banquet",
      "ko": "수상 연회에 대한 초청"
     }
    ],
    "quiz": {
     "sentence": "Ms. Sanchez has been given an ------- to attend the Katrina Velasquez fashion show in Milan next week.",
     "a": "honor",
     "b": "invitation",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 12,
    "word": "expansion",
    "pos": "n.",
    "meaning": "확장",
    "derivatives": [
     {
      "word": "expand",
      "pos": "v.",
      "meaning": "확장하다"
     }
    ],
    "examples": [
     {
      "en": "expansion into overseas markets",
      "ko": "해외 시장으로의 확장"
     },
     {
      "en": "to discuss the expansion of",
      "ko": "~의 확장을 논의하기 위해"
     }
    ],
    "quiz": {
     "sentence": "Bluefire Games hopes to acquire Taneka Software as part of its ------- into the Asian market.",
     "a": "expansion",
     "b": "process",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 13,
    "word": "appreciation",
    "pos": "n.",
    "meaning": "감사, 이해",
    "derivatives": [
     {
      "word": "appreciate",
      "pos": "v.",
      "meaning": "감사하다, 이해하다"
     },
     {
      "word": "appreciative",
      "pos": "a.",
      "meaning": "감사하는"
     }
    ],
    "examples": [
     {
      "en": "express one's appreciation for",
      "ko": "~에 대해 감사를 표하다"
     },
     {
      "en": "in appreciation for",
      "ko": "~에 감사하여, ~의 답례로"
     }
    ],
    "quiz": {
     "sentence": "In ------- of his 30 years of service to the company, Primex Inc. presented Mr. Richards with an expensive wristwatch.",
     "a": "response",
     "b": "appreciation",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 14,
    "word": "recognition",
    "pos": "n.",
    "meaning": "인지(도), 인정",
    "derivatives": [
     {
      "word": "recognize",
      "pos": "v.",
      "meaning": "인지하다, 인정하다"
     }
    ],
    "examples": [
     {
      "en": "gain national recognition for",
      "ko": "~로 인해 전국적인 인지도를 얻다"
     },
     {
      "en": "in recognition of one's contribution to",
      "ko": "~에 대한 헌신을 인정하여"
     }
    ],
    "quiz": {
     "sentence": "Ms. Yeats was offered an improved contract in ------- of her outstanding efforts and contributions to our firm.",
     "a": "recognition",
     "b": "acceptance",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 15,
    "word": "ceremony",
    "pos": "n.",
    "meaning": "의식, 예식",
    "derivatives": [],
    "examples": [
     {
      "en": "annual award ceremony",
      "ko": "연례 시상식"
     },
     {
      "en": "during a ceremony at the end of the year",
      "ko": "연말 기념식 동안에"
     }
    ],
    "quiz": {
     "sentence": "Next month's country music awards ------- will be broadcast nationally on Channel 11.",
     "a": "ceremony",
     "b": "product",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 16,
    "word": "receipt",
    "pos": "n.",
    "meaning": "영수증, 수령",
    "derivatives": [
     {
      "word": "receive",
      "pos": "v.",
      "meaning": "받다, 받아들이다"
     }
    ],
    "examples": [
     {
      "en": "turn in receipts for reimbursement",
      "ko": "환급을 위해 영수증을 제출하다"
     },
     {
      "en": "upon receipt of the parcel",
      "ko": "소포 수령 즉시"
     }
    ],
    "quiz": {
     "sentence": "Sales executives who attended the conference in Manila last week should hand in ------- for reimbursement.",
     "a": "procedures",
     "b": "receipts",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 17,
    "word": "series",
    "pos": "n.",
    "meaning": "시리즈, 일련",
    "derivatives": [],
    "examples": [
     {
      "en": "annual series of musical performances",
      "ko": "연례 음악 공연 시리즈"
     },
     {
      "en": "sponsor a series of public lectures",
      "ko": "일련의 공개 강의를 후원하다"
     }
    ],
    "quiz": {
     "sentence": "Every September, the Richfield Institute hosts a ------- of workshops led by successful business owners.",
     "a": "scheme",
     "b": "series",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 18,
    "word": "priority",
    "pos": "n.",
    "meaning": "우선순위, 우선 과제",
    "derivatives": [],
    "examples": [
     {
      "en": "a top priority",
      "ko": "최우선순위"
     },
     {
      "en": "take priority over all other work",
      "ko": "다른 모든 일들보다 우선순위로 두다"
     }
    ],
    "quiz": {
     "sentence": "Nitro Beverages Inc. has made increasing its domestic market share its highest ------- for this year.",
     "a": "rate",
     "b": "priority",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 19,
    "word": "supervision",
    "pos": "n.",
    "meaning": "감독, 관리",
    "derivatives": [
     {
      "word": "supervise",
      "pos": "v.",
      "meaning": "감독하다, 관리하다"
     },
     {
      "word": "supervisor",
      "pos": "n.",
      "meaning": "감독관, 상사"
     }
    ],
    "examples": [
     {
      "en": "under the supervision of Mr. Kane",
      "ko": "케인 씨의 감독 하에"
     }
    ],
    "quiz": {
     "sentence": "Greengro Supermarkets' branch in Allcroft has been under the ------- of Max Hargraves for the past six months.",
     "a": "attendance",
     "b": "supervision",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 20,
    "word": "fee",
    "pos": "n.",
    "meaning": "요금, 수수료",
    "derivatives": [],
    "examples": [
     {
      "en": "charge A a processing fee for",
      "ko": "A에게 ~에 대한 처리 요금을 부과하다"
     },
     {
      "en": "reduce its fee for access",
      "ko": "이용권에 대한 수수료를 낮추다"
     }
    ],
    "quiz": {
     "sentence": "The pharmaceutical conference registration ------- covers accommodation and transportation costs.",
     "a": "fee",
     "b": "fare",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 21,
    "word": "competition",
    "pos": "n.",
    "meaning": "경쟁, (경연) 대회",
    "derivatives": [
     {
      "word": "competitive",
      "pos": "a.",
      "meaning": "경쟁력 있는"
     },
     {
      "word": "compete",
      "pos": "v.",
      "meaning": "경쟁하다"
     }
    ],
    "examples": [
     {
      "en": "competition between businesses",
      "ko": "사업체들 간의 경쟁"
     },
     {
      "en": "rising competition from the overseas education market",
      "ko": "해외 교육 시장에서의 증가하는 경쟁"
     }
    ],
    "quiz": {
     "sentence": "Increasing ------- between mobile game developers has led to a significant improvement in the quality of games.",
     "a": "challenge",
     "b": "competition",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 22,
    "word": "contribution",
    "pos": "n.",
    "meaning": "기부(금), 기여, 공헌",
    "derivatives": [
     {
      "word": "contribute",
      "pos": "v.",
      "meaning": "기부하다, 기여하다, 기고하다"
     },
     {
      "word": "contributing",
      "pos": "a.",
      "meaning": "기여하는"
     },
     {
      "word": "contributor",
      "pos": "n.",
      "meaning": "기부자, 기여자, 기고가"
     }
    ],
    "examples": [
     {
      "en": "your generous contributions",
      "ko": "귀하의 후한 기부"
     },
     {
      "en": "significant contributions to our charity fund",
      "ko": "저희 자선 기금에 대한 의미 있는 기부금"
     }
    ],
    "quiz": {
     "sentence": "The Heritage Trust expressed its gratitude to all individuals who have made valuable ------- to the organization.",
     "a": "contributions",
     "b": "evaluations",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 23,
    "word": "description",
    "pos": "n.",
    "meaning": "설명(서)",
    "derivatives": [],
    "examples": [
     {
      "en": "a detailed description of the position",
      "ko": "그 직책에 대한 상세한 설명"
     },
     {
      "en": "technical descriptions",
      "ko": "기술 설명서"
     }
    ],
    "quiz": {
     "sentence": "Mr. Lane's report includes not only a brief ------- of the technology but a thorough analysis of its benefits.",
     "a": "description",
     "b": "schedule",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 24,
    "word": "concentration",
    "pos": "n.",
    "meaning": "밀도, 밀집, 집중",
    "derivatives": [
     {
      "word": "concentrate",
      "pos": "v.",
      "meaning": "집중하다"
     }
    ],
    "examples": [
     {
      "en": "boast the largest[highest] concentration of",
      "ko": "~의 높은 밀도를 자랑하다"
     }
    ],
    "quiz": {
     "sentence": "Fifth Avenue is home to the largest ------- of antiques stores in the city.",
     "a": "conference",
     "b": "concentration",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 25,
    "word": "transportation",
    "pos": "n.",
    "meaning": "교통(편), 운송",
    "derivatives": [
     {
      "word": "transport",
      "pos": "v.",
      "meaning": "운송하다"
     }
    ],
    "examples": [
     {
      "en": "for more information about transportation",
      "ko": "교통편에 대한 더 많은 정보를 위해서"
     }
    ],
    "quiz": {
     "sentence": "If you require -------, please view the shuttle bus schedule on the convention Web site.",
     "a": "transportation",
     "b": "lodging",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 26,
    "word": "transaction",
    "pos": "n.",
    "meaning": "거래",
    "derivatives": [],
    "examples": [
     {
      "en": "bank transactions",
      "ko": "은행 거래"
     }
    ],
    "quiz": {
     "sentence": "All mobile ------- for amounts over $800 must be approved by using the banking app.",
     "a": "representatives",
     "b": "transactions",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 27,
    "word": "intention",
    "pos": "n.",
    "meaning": "의도, 의사",
    "derivatives": [
     {
      "word": "intentional",
      "pos": "a.",
      "meaning": "의도적인"
     },
     {
      "word": "intentionally",
      "pos": "ad.",
      "meaning": "고의로"
     }
    ],
    "examples": [
     {
      "en": "announce one's intention to retire",
      "ko": "은퇴한다는 ~의 의도를 알리다"
     },
     {
      "en": "have no intention of -ing",
      "ko": "~하려는 의도가 없다"
     }
    ],
    "quiz": {
     "sentence": "During the staff meeting, Mr. Forbes announced his ------- to apply for the Operations Manager position.",
     "a": "method",
     "b": "intention",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 28,
    "word": "advantage",
    "pos": "n.",
    "meaning": "장점, 유리한 점",
    "derivatives": [
     {
      "word": "advantageous",
      "pos": "a.",
      "meaning": "이로운, 유리한"
     }
    ],
    "examples": [
     {
      "en": "publicize the advantages of the product",
      "ko": "그 상품의 장점을 광고하다"
     },
     {
      "en": "take advantage of",
      "ko": "~을 이용하다"
     }
    ],
    "quiz": {
     "sentence": "If you would like to take ------- of store discounts, sign up for a Ritz Department Store membership today.",
     "a": "advantage",
     "b": "merit",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 29,
    "word": "destination",
    "pos": "n.",
    "meaning": "(여행) 목적지, 도착지",
    "derivatives": [],
    "examples": [
     {
      "en": "premier destination for tourism",
      "ko": "관광을 위한 최고의 목적지"
     }
    ],
    "quiz": {
     "sentence": "Located near several major bus routes, Adventure Land's accessibility by public transportation makes it a convenient -------.",
     "a": "destination",
     "b": "connection",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 30,
    "word": "task",
    "pos": "n.",
    "meaning": "업무, 직무",
    "derivatives": [],
    "examples": [
     {
      "en": "handle the task of updating the content",
      "ko": "컨텐츠를 업데이트하는 업무를 다루다"
     },
     {
      "en": "This task is particularly demanding.",
      "ko": "이 직무는 특히 힘들다."
     }
    ],
    "quiz": {
     "sentence": "Mr. Marlowe has been given the ------- of responding to customer complaints by e-mail.",
     "a": "version",
     "b": "task",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 31,
    "word": "purpose",
    "pos": "n.",
    "meaning": "목적",
    "derivatives": [
     {
      "word": "purposely",
      "pos": "ad.",
      "meaning": "고의로"
     }
    ],
    "examples": [
     {
      "en": "Do not use it for any other purpose.",
      "ko": "어떤 다른 목적을 위해 그것을 사용하지 마십시오."
     },
     {
      "en": "The purpose of this report is to do ~.",
      "ko": "이 보고서의 목적은 ~하는 것입니다."
     }
    ],
    "quiz": {
     "sentence": "The ------- of this inspection is to ensure the factory is operating at full capacity and efficiency.",
     "a": "purpose",
     "b": "indication",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 32,
    "word": "commitment",
    "pos": "n.",
    "meaning": "헌신, 전념",
    "derivatives": [
     {
      "word": "committed",
      "pos": "a.",
      "meaning": "헌신적인, 전념하는"
     }
    ],
    "examples": [
     {
      "en": "show remarkable commitment to",
      "ko": "~에 대한 놀랄 만한 헌신을 보여주다"
     },
     {
      "en": "express one's full commitment to",
      "ko": "~에 대한 완전한 헌신을 표현하다"
     }
    ],
    "quiz": {
     "sentence": "Ms. Singh has shown an impressive ------- to our company over the past two decades.",
     "a": "commitment",
     "b": "collaboration",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 33,
    "word": "difficulty",
    "pos": "n.",
    "meaning": "어려움, 곤란, 곤경",
    "derivatives": [
     {
      "word": "difficult",
      "pos": "a.",
      "meaning": "어려운, 곤란한"
     }
    ],
    "examples": [
     {
      "en": "have difficulty -ing",
      "ko": "~하는 데 어려움을 겪다"
     },
     {
      "en": "because of several difficulties with the new software",
      "ko": "새로운 소프트웨어에 대한 여러 어려움 때문에"
     }
    ],
    "quiz": {
     "sentence": "The music festival has been postponed because of ------- with the online ticketing system.",
     "a": "selections",
     "b": "difficulties",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 34,
    "word": "ability",
    "pos": "n.",
    "meaning": "능력",
    "derivatives": [
     {
      "word": "able",
      "pos": "a.",
      "meaning": "능력 있는, 할 수 있는"
     }
    ],
    "examples": [
     {
      "en": "have the ability to do",
      "ko": "~할 능력을 지니다"
     },
     {
      "en": "the artistic and sporting abilities of",
      "ko": "~의 예술적 그리고 스포츠 능력"
     }
    ],
    "quiz": {
     "sentence": "The Fitmate Smartwatch has the ------- to monitor heart rate, breathing rate, and sleep patterns.",
     "a": "decision",
     "b": "ability",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 35,
    "word": "transition",
    "pos": "n.",
    "meaning": "전환, 이전",
    "derivatives": [
     {
      "word": "transitional",
      "pos": "a.",
      "meaning": "과도기의"
     }
    ],
    "examples": [
     {
      "en": "make a successful transition to",
      "ko": "~로의 성공적인 전환을 하다"
     },
     {
      "en": "The transition is scheduled to begin next week.",
      "ko": "다음 주에 이전이 시작되기로 예정되어 있다."
     }
    ],
    "quiz": {
     "sentence": "Chen's Noodle Shop has made a profitable ------- to using a more affordable delivery service.",
     "a": "location",
     "b": "transition",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 36,
    "word": "occasion",
    "pos": "n.",
    "meaning": "사건, 경우",
    "derivatives": [
     {
      "word": "occasional",
      "pos": "a.",
      "meaning": "가끔의"
     },
     {
      "word": "occasionally",
      "pos": "ad.",
      "meaning": "가끔, 때때로"
     }
    ],
    "examples": [
     {
      "en": "mark an important occasion",
      "ko": "중요한 사건을 기념하다"
     },
     {
      "en": "for any occasion",
      "ko": "어떠한 경우라도"
     }
    ],
    "quiz": {
     "sentence": "We have been in business for ten years, and to mark this important -------, we will be hosting a party on November 22.",
     "a": "opening",
     "b": "occasion",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 37,
    "word": "itinerary",
    "pos": "n.",
    "meaning": "여행 일정표",
    "derivatives": [],
    "examples": [
     {
      "en": "a copy of the travel itinerary",
      "ko": "여행 일정표의 사본"
     },
     {
      "en": "the itinerary for your trip",
      "ko": "귀하의 여행 일정"
     }
    ],
    "quiz": {
     "sentence": "The ------- for Ms. Pellberg's sightseeing tour includes visits to several famous museums and galleries.",
     "a": "position",
     "b": "itinerary",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 38,
    "word": "inventory",
    "pos": "n.",
    "meaning": "재고, 물품 목록",
    "derivatives": [],
    "examples": [
     {
      "en": "deal with excess inventory",
      "ko": "과도한 재고를 처리하다"
     },
     {
      "en": "inventory management software",
      "ko": "물품 목록 관리 소프트웨어"
     }
    ],
    "quiz": {
     "sentence": "In an effort to sell its surplus -------, Smith's Camping Goods is marking down some prices by up to 50 percent.",
     "a": "inventory",
     "b": "capacity",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 39,
    "word": "accomplishment",
    "pos": "n.",
    "meaning": "성과, 성취",
    "derivatives": [
     {
      "word": "accomplish",
      "pos": "v.",
      "meaning": "성취하다, 달성하다"
     },
     {
      "word": "accomplished",
      "pos": "a.",
      "meaning": "뛰어난"
     }
    ],
    "examples": [
     {
      "en": "Mr. Smith's many accomplishments include ~.",
      "ko": "스미스 씨의 많은 성과는 ~을 포함한다."
     }
    ],
    "quiz": {
     "sentence": "Mayor Pembroke's many ------- include implementing an environmentally friendly monorail system.",
     "a": "capabilities",
     "b": "accomplishments",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 40,
    "word": "compliance",
    "pos": "n.",
    "meaning": "준수",
    "derivatives": [
     {
      "word": "comply",
      "pos": "v.",
      "meaning": "준수하다(with)"
     }
    ],
    "examples": [
     {
      "en": "ensure compliance with regulations",
      "ko": "규정 준수를 보장하다"
     },
     {
      "en": "in compliance with standards",
      "ko": "기준을 준수하여"
     }
    ],
    "quiz": {
     "sentence": "Many of the manufacturing machines at Rydell Inc. had to be modified in order to be in ------- with safety regulations.",
     "a": "compliance",
     "b": "arrangement",
     "answer": "A"
    },
    "tip": ""
   }
  ]
 },
 {
  "week": 1,
  "day": 4,
  "part": "Part 5,6",
  "title": "명사 + 명사 콜로케이션",
  "words": [
   {
    "no": 1,
    "word": "product manual",
    "pos": "",
    "meaning": "제품 설명서",
    "derivatives": [],
    "examples": [
     {
      "en": "safety manual",
      "ko": "안전 설명서"
     },
     {
      "en": "employee manual",
      "ko": "직원 안내서"
     }
    ],
    "quiz": {
     "sentence": "The product ------- includes detailed assembly instructions and diagrams.",
     "a": "receipt",
     "b": "manual",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 2,
    "word": "budget requirements",
    "pos": "",
    "meaning": "예산 요건",
    "derivatives": [],
    "examples": [
     {
      "en": "quality requirements",
      "ko": "품질 요건"
     },
     {
      "en": "age requirement",
      "ko": "연령 요건"
     }
    ],
    "quiz": {
     "sentence": "Please check that you fulfill the budget ------- before submitting an application form for the support fund.",
     "a": "requirements",
     "b": "qualities",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 3,
    "word": "employee productivity",
    "pos": "",
    "meaning": "직원 생산성",
    "derivatives": [],
    "examples": [
     {
      "en": "team productivity",
      "ko": "팀 생산성"
     },
     {
      "en": "worker productivity",
      "ko": "직원 생산성"
     }
    ],
    "quiz": {
     "sentence": "Since introducing performance-based pay raises last year, Huzzah Technology has seen a dramatic increase in employee -------.",
     "a": "tendency",
     "b": "productivity",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 4,
    "word": "travel expenses",
    "pos": "",
    "meaning": "출장 비용",
    "derivatives": [],
    "examples": [
     {
      "en": "transportation expenses",
      "ko": "운송 비용"
     },
     {
      "en": "living expenses",
      "ko": "생활비"
     }
    ],
    "quiz": {
     "sentence": "The board has agreed to allocate $5,000 per month for travel -------.",
     "a": "expenses",
     "b": "descriptions",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 5,
    "word": "building permit",
    "pos": "",
    "meaning": "건축 허가(증)",
    "derivatives": [],
    "examples": [
     {
      "en": "parking permit",
      "ko": "주차 허가(증)"
     }
    ],
    "quiz": {
     "sentence": "After months of preparation, the construction project finally got underway once the city issued the building -------.",
     "a": "office",
     "b": "permit",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 6,
    "word": "control system",
    "pos": "",
    "meaning": "통제 시스템",
    "derivatives": [],
    "examples": [
     {
      "en": "ticketing system",
      "ko": "발권 시스템"
     }
    ],
    "quiz": {
     "sentence": "The IT team intends to upgrade the central control ------- at company headquarters.",
     "a": "places",
     "b": "systems",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 7,
    "word": "manager position",
    "pos": "",
    "meaning": "관리자 직책",
    "derivatives": [],
    "examples": [
     {
      "en": "assistant position",
      "ko": "보조 직책"
     },
     {
      "en": "editor position",
      "ko": "편집자 직책"
     }
    ],
    "quiz": {
     "sentence": "Mr. Jones is the most qualified candidate for the production manager -------, with more than 15 years of experience in the industry.",
     "a": "control",
     "b": "position",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 8,
    "word": "assembly process",
    "pos": "",
    "meaning": "조립 과정",
    "derivatives": [],
    "examples": [
     {
      "en": "manufacturing process",
      "ko": "제조 과정"
     }
    ],
    "quiz": {
     "sentence": "The replacement of our old machines has already increased the efficiency of our assembly ------- by 10 percent.",
     "a": "process",
     "b": "location",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 9,
    "word": "operating cost",
    "pos": "",
    "meaning": "운영비, 운영 비용",
    "derivatives": [],
    "examples": [
     {
      "en": "fuel costs",
      "ko": "연료 비용"
     },
     {
      "en": "business costs",
      "ko": "사업 비용"
     },
     {
      "en": "cost estimates",
      "ko": "비용 견적서"
     }
    ],
    "quiz": {
     "sentence": "Due to an increase in operating -------, Bluesky Airlines has decided to suspend some of its Asian routes.",
     "a": "systems",
     "b": "costs",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 10,
    "word": "office space",
    "pos": "",
    "meaning": "사무 공간",
    "derivatives": [],
    "examples": [
     {
      "en": "parking space",
      "ko": "주차 공간"
     },
     {
      "en": "work space",
      "ko": "근무 공간"
     }
    ],
    "quiz": {
     "sentence": "Mr. Edwards told the realtor that he requires enough office ------- to accommodate 300 employees.",
     "a": "project",
     "b": "space",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 11,
    "word": "population increase",
    "pos": "",
    "meaning": "인구 증가",
    "derivatives": [],
    "examples": [
     {
      "en": "price increase",
      "ko": "가격 인상"
     },
     {
      "en": "salary increase",
      "ko": "급여 인상"
     }
    ],
    "quiz": {
     "sentence": "The population ------- in the urban areas has led to greater demand for public services.",
     "a": "statistic",
     "b": "increase",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 12,
    "word": "planning committee",
    "pos": "",
    "meaning": "기획 위원회",
    "derivatives": [],
    "examples": [
     {
      "en": "hiring committee",
      "ko": "고용 위원회"
     },
     {
      "en": "search committee",
      "ko": "조사 위원회"
     }
    ],
    "quiz": {
     "sentence": "The planning ------- will gather on Tuesday to discuss the candidates for the senior management position.",
     "a": "schedule",
     "b": "committee",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 13,
    "word": "vacation request",
    "pos": "",
    "meaning": "휴가 요청",
    "derivatives": [],
    "examples": [
     {
      "en": "catering request",
      "ko": "음식 공급 요청"
     },
     {
      "en": "customer request",
      "ko": "고객 요청"
     }
    ],
    "quiz": {
     "sentence": "For all employees at Kaye Department Store, vacation ------- must be approved by the HR department.",
     "a": "suggestions",
     "b": "requests",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 14,
    "word": "renewal application",
    "pos": "",
    "meaning": "갱신 지원서",
    "derivatives": [],
    "examples": [
     {
      "en": "employment application",
      "ko": "고용 지원서"
     },
     {
      "en": "business application",
      "ko": "사업 지원서"
     },
     {
      "en": "loan application",
      "ko": "대출 신청서"
     }
    ],
    "quiz": {
     "sentence": "Food vendors who wish to participate in the city fair again should submit a renewal ------- for a permit.",
     "a": "specification",
     "b": "application",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 15,
    "word": "service charge",
    "pos": "",
    "meaning": "서비스 요금",
    "derivatives": [],
    "examples": [
     {
      "en": "shipping charge",
      "ko": "배송 요금"
     },
     {
      "en": "penalty charge",
      "ko": "벌금 (부과)"
     }
    ],
    "quiz": {
     "sentence": "Stenhouse Furniture adds a higher service ------- to orders delivered outside the city limits.",
     "a": "charge",
     "b": "supplier",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 16,
    "word": "improvement project",
    "pos": "",
    "meaning": "개선 프로젝트",
    "derivatives": [],
    "examples": [
     {
      "en": "research project",
      "ko": "연구 프로젝트"
     },
     {
      "en": "repair project",
      "ko": "수리 프로젝트"
     }
    ],
    "quiz": {
     "sentence": "Glenfield City Council has secured extensive funding for its urban improvement -------.",
     "a": "statement",
     "b": "project",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 17,
    "word": "conference registration",
    "pos": "",
    "meaning": "컨퍼런스 등록",
    "derivatives": [],
    "examples": [
     {
      "en": "convention registration",
      "ko": "총회 등록"
     },
     {
      "en": "registration form",
      "ko": "등록 양식"
     }
    ],
    "quiz": {
     "sentence": "Conference ------- will begin on May 4 and continue until the end of the month.",
     "a": "registration",
     "b": "ideal",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 18,
    "word": "shipment delay",
    "pos": "",
    "meaning": "운송 지연",
    "derivatives": [],
    "examples": [
     {
      "en": "transportation delay",
      "ko": "교통 지연"
     },
     {
      "en": "construction delay",
      "ko": "건축 지연"
     }
    ],
    "quiz": {
     "sentence": "A recent sharp rise in the prices of auto parts has resulted in shipment ------- of two weeks or longer.",
     "a": "items",
     "b": "delays",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 19,
    "word": "management role",
    "pos": "",
    "meaning": "관리자 역할, 관리 직무",
    "derivatives": [],
    "examples": [
     {
      "en": "volunteer role",
      "ko": "자원봉사자 역할"
     }
    ],
    "quiz": {
     "sentence": "Once he is formally promoted on Thursday, Mr. Riley will take on the management ------- immediately.",
     "a": "production",
     "b": "role",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 20,
    "word": "privacy policy",
    "pos": "",
    "meaning": "개인정보 보호정책",
    "derivatives": [],
    "examples": [
     {
      "en": "security policy",
      "ko": "보안 정책"
     },
     {
      "en": "insurance policy",
      "ko": "보험 정책"
     },
     {
      "en": "travel policy",
      "ko": "출장 정책"
     }
    ],
    "quiz": {
     "sentence": "According to the company's privacy -------, customer information is never shared with third parties.",
     "a": "policy",
     "b": "tasks",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 21,
    "word": "expiration date",
    "pos": "",
    "meaning": "만료 일자, 유통 기한",
    "derivatives": [],
    "examples": [
     {
      "en": "publication date",
      "ko": "출간일"
     },
     {
      "en": "opening date",
      "ko": "개장일"
     }
    ],
    "quiz": {
     "sentence": "The expiration ------- is clearly stated on each subscriber's account page on our Web site.",
     "a": "date",
     "b": "amount",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 22,
    "word": "shipping contract",
    "pos": "",
    "meaning": "배송 계약",
    "derivatives": [],
    "examples": [
     {
      "en": "employment contract",
      "ko": "고용 계약"
     },
     {
      "en": "maintenance contract",
      "ko": "유지보수 계약"
     }
    ],
    "quiz": {
     "sentence": "Mr. Tyrell has renegotiated the shipping ------- in an effort to lower expenditure.",
     "a": "vessels",
     "b": "contract",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 23,
    "word": "training session",
    "pos": "",
    "meaning": "교육 시간",
    "derivatives": [],
    "examples": [
     {
      "en": "information session",
      "ko": "설명회"
     },
     {
      "en": "orientation session",
      "ko": "오리엔테이션 시간"
     }
    ],
    "quiz": {
     "sentence": "The HR manager has scheduled four training ------- to ensure all new recruits are fully prepared for their roles.",
     "a": "materials",
     "b": "sessions",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 24,
    "word": "publicity campaign",
    "pos": "",
    "meaning": "홍보 캠페인",
    "derivatives": [],
    "examples": [
     {
      "en": "advertising campaign",
      "ko": "광고 캠페인"
     },
     {
      "en": "marketing campaign",
      "ko": "마케팅 캠페인"
     }
    ],
    "quiz": {
     "sentence": "Xcell Digital Solutions has created successful online publicity ------- for clients in a wide range of industries.",
     "a": "campaigns",
     "b": "influences",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 25,
    "word": "working environment",
    "pos": "",
    "meaning": "근무 환경",
    "derivatives": [],
    "examples": [
     {
      "en": "workplace environment",
      "ko": "근무지 환경"
     },
     {
      "en": "work environment",
      "ko": "근무 환경"
     }
    ],
    "quiz": {
     "sentence": "To create a more productive working -------, Bitfour Technologies provided all staff with new ergonomic office furniture.",
     "a": "environment",
     "b": "position",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 26,
    "word": "construction site",
    "pos": "",
    "meaning": "건축 현장",
    "derivatives": [],
    "examples": [
     {
      "en": "work site",
      "ko": "근무 현장"
     },
     {
      "en": "plant site",
      "ko": "공장 현장"
     }
    ],
    "quiz": {
     "sentence": "Before visitors are permitted to enter the construction -------, they must put on the required safety gear.",
     "a": "site",
     "b": "industry",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 27,
    "word": "art exhibition",
    "pos": "",
    "meaning": "미술 전시회",
    "derivatives": [],
    "examples": [
     {
      "en": "photography exhibition",
      "ko": "사진 전시회"
     },
     {
      "en": "sculpture exhibition",
      "ko": "조각품 전시회"
     }
    ],
    "quiz": {
     "sentence": "At the opening night of the art ------- at Privet Gallery, Lynda Carranza spoke to attendees about her work.",
     "a": "exhibition",
     "b": "guide",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 28,
    "word": "award ceremony",
    "pos": "",
    "meaning": "시상식",
    "derivatives": [],
    "examples": [
     {
      "en": "graduation ceremony",
      "ko": "졸업식"
     },
     {
      "en": "opening ceremony",
      "ko": "개장식"
     }
    ],
    "quiz": {
     "sentence": "This weekend's Young Filmmakers of the Year awards ------- will be held at Seaforth Auditorium.",
     "a": "ceremony",
     "b": "advice",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 29,
    "word": "customer loyalty",
    "pos": "",
    "meaning": "고객 충성도",
    "derivatives": [],
    "examples": [
     {
      "en": "loyalty bonus",
      "ko": "고객 보상 보너스"
     },
     {
      "en": "loyalty program",
      "ko": "고객 보상 프로그램"
     }
    ],
    "quiz": {
     "sentence": "In order to improve customer -------, Majestic Catering now offers discounts to long-term clients.",
     "a": "loyalty",
     "b": "honesty",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 30,
    "word": "government restriction",
    "pos": "",
    "meaning": "정부 규제",
    "derivatives": [],
    "examples": [
     {
      "en": "budget restriction",
      "ko": "예산 규제"
     },
     {
      "en": "size restriction",
      "ko": "규모 규제"
     }
    ],
    "quiz": {
     "sentence": "Strict government ------- on several rare food items have caused their prices to soar recently.",
     "a": "authorities",
     "b": "restrictions",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 31,
    "word": "distribution plan",
    "pos": "",
    "meaning": "분배 계획",
    "derivatives": [],
    "examples": [
     {
      "en": "distribution area",
      "ko": "분배 지역"
     },
     {
      "en": "information distribution",
      "ko": "정보 분배"
     },
     {
      "en": "distribution rights",
      "ko": "분배 권리"
     }
    ],
    "quiz": {
     "sentence": "Mr. Barr is determining the financial needs of the sales, marketing, and HR departments in order to finalize the budget ------- plan.",
     "a": "distribution",
     "b": "assortment",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 32,
    "word": "safety regulation",
    "pos": "",
    "meaning": "안전 규정",
    "derivatives": [],
    "examples": [
     {
      "en": "tax regulation",
      "ko": "세금 규정"
     },
     {
      "en": "company regulation",
      "ko": "회사 규정"
     },
     {
      "en": "dress regulation",
      "ko": "복장 규정"
     }
    ],
    "quiz": {
     "sentence": "All staff must adhere to the restaurant's health and safety ------- or face disciplinary action.",
     "a": "regulations",
     "b": "limitations",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 33,
    "word": "floor renovation",
    "pos": "",
    "meaning": "바닥 보수공사",
    "derivatives": [],
    "examples": [
     {
      "en": "building renovation",
      "ko": "건물 보수공사"
     },
     {
      "en": "renovation work",
      "ko": "보수공사 작업"
     }
    ],
    "quiz": {
     "sentence": "The floor ------- will take roughly three months and will increase the building's floor space by 15 percent.",
     "a": "agenda",
     "b": "renovation",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 34,
    "word": "tourist destination",
    "pos": "",
    "meaning": "관광지",
    "derivatives": [],
    "examples": [
     {
      "en": "travel destination",
      "ko": "여행지"
     },
     {
      "en": "vacation destination",
      "ko": "휴가지"
     }
    ],
    "quiz": {
     "sentence": "Carlito Torres organizes food-themed excursions to tourist -------, such as Indonesia and Malaysia.",
     "a": "destinations",
     "b": "ambitions",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 35,
    "word": "bank transaction",
    "pos": "",
    "meaning": "은행 거래",
    "derivatives": [],
    "examples": [
     {
      "en": "business transaction",
      "ko": "사업 거래"
     }
    ],
    "quiz": {
     "sentence": "For certain bank ------- that exceed a certain amount, we ask that customers meet with the bank manager in person.",
     "a": "representatives",
     "b": "transactions",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 36,
    "word": "processing fee",
    "pos": "",
    "meaning": "처리 비용",
    "derivatives": [],
    "examples": [
     {
      "en": "registration fee",
      "ko": "등록 비용"
     },
     {
      "en": "service fee",
      "ko": "서비스 비용"
     }
    ],
    "quiz": {
     "sentence": "The embassy charges a processing ------- for all passport renewals and replacements.",
     "a": "fee",
     "b": "check",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 37,
    "word": "delivery receipt",
    "pos": "",
    "meaning": "배송 영수증",
    "derivatives": [],
    "examples": [
     {
      "en": "store receipt",
      "ko": "매장 영수증"
     },
     {
      "en": "sales receipt",
      "ko": "판매 영수증"
     }
    ],
    "quiz": {
     "sentence": "Before submitting a delivery -------, be sure to check that all items listed are in good condition.",
     "a": "receipt",
     "b": "announcement",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 38,
    "word": "sales figures",
    "pos": "",
    "meaning": "매출 수치",
    "derivatives": [],
    "examples": [
     {
      "en": "production figures",
      "ko": "생산 수치"
     },
     {
      "en": "accounting figures",
      "ko": "회계 수치"
     }
    ],
    "quiz": {
     "sentence": "The CEO will announce our annual sales ------- at the year-end banquet on December 29.",
     "a": "measures",
     "b": "figures",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 39,
    "word": "telecommuting option",
    "pos": "",
    "meaning": "재택근무 선택권",
    "derivatives": [],
    "examples": [
     {
      "en": "menu option",
      "ko": "메뉴 선택권"
     },
     {
      "en": "investment option",
      "ko": "투자 선택권"
     }
    ],
    "quiz": {
     "sentence": "Telecommuting ------- provide many employees with the flexibility to work from home or other remote locations.",
     "a": "statements",
     "b": "options",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 40,
    "word": "meal period",
    "pos": "",
    "meaning": "식사 시간",
    "derivatives": [],
    "examples": [
     {
      "en": "peak period",
      "ko": "성수기"
     },
     {
      "en": "warranty period",
      "ko": "보증 기간"
     }
    ],
    "quiz": {
     "sentence": "Employees at all Bob's Burgers branches are entitled to a two-hour meal ------- for their lunch.",
     "a": "period",
     "b": "box",
     "answer": "A"
    },
    "tip": ""
   }
  ]
 },
 {
  "week": 1,
  "day": 5,
  "part": "Part 7",
  "title": "기출 동의어 ①",
  "words": [
   {
    "no": 1,
    "word": "back up",
    "pos": "v.",
    "meaning": "뒷받침하다, 지원하다",
    "derivatives": [
     {
      "word": "support",
      "pos": "",
      "meaning": "도움을 주다, 지원하다"
     },
     {
      "word": "copy",
      "pos": "",
      "meaning": "복사본을 만들다"
     }
    ],
    "examples": [
     {
      "en": "The results of a recent customer survey backed up our decision to expand our Customer Services Department.",
      "ko": "최근의 한 고객 설문조사 결과가 고객서비스부를 확장하기로 한 우리의 결정을 뒷받침해 주었습니다."
     }
    ],
    "quiz": {
     "sentence": "The results of a recent customer survey backed up our decision to expand our Customer Services Department.",
     "a": "copied",
     "b": "supported",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 2,
    "word": "critical",
    "pos": "a.",
    "meaning": "매우 중요한; 부정적인",
    "derivatives": [
     {
      "word": "essential",
      "pos": "",
      "meaning": "매우 중요한"
     },
     {
      "word": "crucial",
      "pos": "",
      "meaning": "매우 중요한"
     },
     {
      "word": "vital",
      "pos": "",
      "meaning": "매우 중요한"
     },
     {
      "word": "negative",
      "pos": "",
      "meaning": "부정적인, 못마땅해하는"
     },
     {
      "word": "disapproving",
      "pos": "",
      "meaning": "부정적인, 못마땅해하는"
     },
     {
      "word": "urgent",
      "pos": "",
      "meaning": "위급한, 심각한"
     }
    ],
    "examples": [
     {
      "en": "Some critical figures regarding last quarter's profits were missing, so you'll need to redo the report.",
      "ko": "지난 분기의 수익과 관련된 일부 중요한 수치 자료들이 빠져 있었기 때문에 당신은 보고서 작업을 다시 해야 할 것 같습니다."
     }
    ],
    "quiz": {
     "sentence": "Some critical figures regarding last quarter's profits were missing, so you'll need to redo the report.",
     "a": "urgent",
     "b": "essential",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 3,
    "word": "take",
    "pos": "v.",
    "meaning": "필요로 하다, (시간이) 걸리다; 잡다",
    "derivatives": [
     {
      "word": "grab",
      "pos": "",
      "meaning": "(손으로) 잡다"
     },
     {
      "word": "grip",
      "pos": "",
      "meaning": "(손으로) 잡다"
     },
     {
      "word": "require",
      "pos": "",
      "meaning": "필요로 하다, 요구하다"
     },
     {
      "word": "remove",
      "pos": "",
      "meaning": "제거하다"
     }
    ],
    "examples": [
     {
      "en": "The update for our accounting software is enormous, so it took five hours to download and install it.",
      "ko": "우리 회계 소프트웨어의 업데이트가 너무 방대해서, 그것을 다운로드하고 설치하는 데 다섯 시간이 소요되었습니다."
     }
    ],
    "quiz": {
     "sentence": "The update for our accounting software is enormous, so it took five hours to download and install it.",
     "a": "grabbed",
     "b": "required",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 4,
    "word": "release",
    "pos": "v.",
    "meaning": "발표하다, 공개하다; 풀어주다",
    "derivatives": [
     {
      "word": "set free",
      "pos": "",
      "meaning": "~을 풀어주다, 석방하다"
     },
     {
      "word": "let go",
      "pos": "",
      "meaning": "~을 풀어주다, 석방하다"
     },
     {
      "word": "make available",
      "pos": "",
      "meaning": "~을 발표하다, 공개하다"
     },
     {
      "word": "issue",
      "pos": "",
      "meaning": "~을 발표하다, 공개하다"
     }
    ],
    "examples": [
     {
      "en": "The company spokesperson released an update on the ongoing project, detailing the latest developments and some challenges that have arisen during the testing phase.",
      "ko": "회사 대변인은 진행 중인 프로젝트에 대한 최신 소식을 발표했는데, 최근의 개발 사항과 시험 단계에서 발생한 몇 가지 문제점들을 자세히 설명했습니다."
     }
    ],
    "quiz": {
     "sentence": "The company spokesperson released an update on the ongoing project, detailing the latest developments and some challenges that have arisen during the testing phase.",
     "a": "set free",
     "b": "made available",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 5,
    "word": "feature",
    "pos": "n.",
    "meaning": "특집 기사; 특징",
    "derivatives": [
     {
      "word": "characteristic",
      "pos": "",
      "meaning": "특징, 특성"
     },
     {
      "word": "a special article",
      "pos": "",
      "meaning": "특집 기사"
     },
     {
      "word": "story",
      "pos": "",
      "meaning": "특집 기사"
     }
    ],
    "examples": [
     {
      "en": "Don't miss the latest issue of our magazine, which includes a special feature on emerging trends in artificial intelligence.",
      "ko": "저희 잡지의 최신 호를 놓치지 마세요. 이번 호에는 인공지능의 떠오르는 트렌드에 관한 특별한 특집 기사가 포함되어 있습니다."
     }
    ],
    "quiz": {
     "sentence": "Don't miss the latest issue of our magazine, which includes a special feature on emerging trends in artificial intelligence.",
     "a": "characteristic",
     "b": "story",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 6,
    "word": "regarding",
    "pos": "prep.",
    "meaning": "~에 관한",
    "derivatives": [
     {
      "word": "concerning",
      "pos": "",
      "meaning": "~에 관한"
     },
     {
      "word": "about",
      "pos": "",
      "meaning": "~에 관한"
     },
     {
      "word": "admiring",
      "pos": "",
      "meaning": "존경하는"
     }
    ],
    "examples": [
     {
      "en": "We would like to address any questions or issues you might have regarding your recent purchase.",
      "ko": "귀하의 최근 구매와 관련하여 갖고 계신 그 어떤 문의사항 혹은 이슈사항들도 처리해 드리고자 합니다."
     }
    ],
    "quiz": {
     "sentence": "We would like to address any questions or issues you might have regarding your recent purchase.",
     "a": "about",
     "b": "admiring",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 7,
    "word": "stress",
    "pos": "n.",
    "meaning": "강조; 스트레스",
    "derivatives": [
     {
      "word": "anxiety",
      "pos": "",
      "meaning": "불안, 염려"
     },
     {
      "word": "focus",
      "pos": "",
      "meaning": "강조"
     },
     {
      "word": "emphasis",
      "pos": "",
      "meaning": "강조"
     }
    ],
    "examples": [
     {
      "en": "A therapist is coming to the office on Friday to give a presentation about coping with stress in the workplace.",
      "ko": "한 치료 전문가가 직장 내에서의 스트레스에 대처하는 일에 관한 발표를 하기 위해 금요일에 사무실로 찾아올 예정입니다."
     }
    ],
    "quiz": {
     "sentence": "A therapist is coming to the office on Friday to give a presentation about coping with stress in the workplace.",
     "a": "emphasis",
     "b": "anxiety",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 8,
    "word": "draw",
    "pos": "v.",
    "meaning": "~을 끌어들이다; 그리다",
    "derivatives": [
     {
      "word": "attract",
      "pos": "",
      "meaning": "~을 끌어들이다"
     },
     {
      "word": "sketch",
      "pos": "",
      "meaning": "~을 그리다"
     },
     {
      "word": "pick",
      "pos": "",
      "meaning": "~을 뽑다, 골라내다"
     },
     {
      "word": "take out",
      "pos": "",
      "meaning": "~을 뽑다, 골라내다"
     }
    ],
    "examples": [
     {
      "en": "The café is a popular spot for several celebrities, so it also draws crowds of fans eager to see their favorite star.",
      "ko": "그 카페는 여러 유명 인사들에게 인기 있는 장소이기 때문에, 좋아하는 스타의 모습을 볼 수 있기를 갈망하는 팬들로 구성된 많은 사람 또한 끌어들입니다."
     }
    ],
    "quiz": {
     "sentence": "The café is a popular spot for several celebrities, so it also draws crowds of fans eager to see their favorite star.",
     "a": "attracts",
     "b": "sketches",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 9,
    "word": "run",
    "pos": "v.",
    "meaning": "운영하다; (기계가) 돌아가다",
    "derivatives": [
     {
      "word": "move",
      "pos": "",
      "meaning": "달리다"
     },
     {
      "word": "operate",
      "pos": "",
      "meaning": "(업체·서비스 등을) 운영하다"
     },
     {
      "word": "manage",
      "pos": "",
      "meaning": "(업체·서비스 등을) 운영하다"
     },
     {
      "word": "function",
      "pos": "",
      "meaning": "(기계가) 움직이다, 돌아가다"
     },
     {
      "word": "work",
      "pos": "",
      "meaning": "(기계가) 움직이다, 돌아가다"
     },
     {
      "word": "last",
      "pos": "",
      "meaning": "지속되다"
     }
    ],
    "examples": [
     {
      "en": "The local bookstore runs a promotion every summer, encouraging readers to explore new genres and authors with incredible discounts and special events.",
      "ko": "지역 서점에서는 매년 여름 프로모션을 진행하여 엄청난 할인과 특별 이벤트를 통해 독자들이 새로운 장르와 작가를 탐색할 수 있도록 장려합니다."
     }
    ],
    "quiz": {
     "sentence": "The local bookstore runs a promotion every summer, encouraging readers to explore new genres and authors with incredible discounts and special events.",
     "a": "moves",
     "b": "operates",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 10,
    "word": "significant",
    "pos": "a.",
    "meaning": "중요한; 상당한",
    "derivatives": [
     {
      "word": "important",
      "pos": "",
      "meaning": "중요한, 뜻깊은"
     },
     {
      "word": "meaningful",
      "pos": "",
      "meaning": "중요한, 뜻깊은"
     },
     {
      "word": "large enough",
      "pos": "",
      "meaning": "상당한"
     },
     {
      "word": "enormous",
      "pos": "",
      "meaning": "상당한"
     }
    ],
    "examples": [
     {
      "en": "The golf tournament is one of the most significant fundraisers for the charity because some influential donors come to participate.",
      "ko": "그 골프 대회는 몇몇 영향력 있는 기부자들이 참가하러 오기 때문에 그 자선단체에 있어 가장 중요한 모금 행사 중 하나입니다."
     }
    ],
    "quiz": {
     "sentence": "The golf tournament is one of the most significant fundraisers for the charity because some influential donors come to participate.",
     "a": "important",
     "b": "enormous",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 11,
    "word": "rest",
    "pos": "n.",
    "meaning": "나머지; 휴식",
    "derivatives": [
     {
      "word": "remainder",
      "pos": "",
      "meaning": "나머지"
     },
     {
      "word": "break",
      "pos": "",
      "meaning": "휴식"
     }
    ],
    "examples": [
     {
      "en": "Keep in mind, the rest of the event's budget will be donated to Belle Valley Children's Hospital.",
      "ko": "행사 예산의 나머지는 벨 밸리 아동 병원에 기부된다는 점을 기억해 주시기 바랍니다."
     }
    ],
    "quiz": {
     "sentence": "Keep in mind, the rest of the event's budget will be donated to Belle Valley Children's Hospital.",
     "a": "remainder",
     "b": "break",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 12,
    "word": "current",
    "pos": "a.",
    "meaning": "현재의, 당대의; 흐름",
    "derivatives": [
     {
      "word": "contemporary",
      "pos": "",
      "meaning": "동시대의, 현재의"
     },
     {
      "word": "present",
      "pos": "",
      "meaning": "동시대의, 현재의"
     },
     {
      "word": "customary",
      "pos": "",
      "meaning": "습관적인, 관습의"
     },
     {
      "word": "moving",
      "pos": "",
      "meaning": "흐름"
     },
     {
      "word": "flow",
      "pos": "",
      "meaning": "흐름"
     }
    ],
    "examples": [
     {
      "en": "Central Art magazine has been a leading source of information on current artists and styles for the past fifteen years.",
      "ko": "<센트럴 아트> 잡지는 지난 15년 동안 당대의 미술가들과 화풍에 관한 정보를 제공하는 앞서가는 매체였습니다."
     }
    ],
    "quiz": {
     "sentence": "Central Art magazine has been a leading source of information on current artists and styles for the past fifteen years.",
     "a": "contemporary",
     "b": "customary",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 13,
    "word": "level",
    "pos": "n.",
    "meaning": "정도, 양; 층; 지위",
    "derivatives": [
     {
      "word": "degree",
      "pos": "",
      "meaning": "정도, 양"
     },
     {
      "word": "amount",
      "pos": "",
      "meaning": "정도, 양"
     },
     {
      "word": "story",
      "pos": "",
      "meaning": "층"
     },
     {
      "word": "floor",
      "pos": "",
      "meaning": "층"
     },
     {
      "word": "position",
      "pos": "",
      "meaning": "지위"
     },
     {
      "word": "rank",
      "pos": "",
      "meaning": "지위"
     }
    ],
    "examples": [
     {
      "en": "The latest customer surveys indicate a high level of satisfaction with our current product offerings and overall customer service.",
      "ko": "최근의 고객 설문조사 결과는 현재의 저희 제품 제공과 전반적인 고객 서비스에 대해 높은 수준의 만족도를 나타냅니다."
     }
    ],
    "quiz": {
     "sentence": "The latest customer surveys indicate a high level of satisfaction with our current product offerings and overall customer service.",
     "a": "degree",
     "b": "position",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 14,
    "word": "fair",
    "pos": "a.",
    "meaning": "공정한; 합리적인; (날씨가) 맑은",
    "derivatives": [
     {
      "word": "just",
      "pos": "",
      "meaning": "공정한"
     },
     {
      "word": "honest",
      "pos": "",
      "meaning": "공정한"
     },
     {
      "word": "reasonable",
      "pos": "",
      "meaning": "타당한, 합리적인"
     },
     {
      "word": "fine",
      "pos": "",
      "meaning": "날씨가 맑은"
     },
     {
      "word": "clear",
      "pos": "",
      "meaning": "날씨가 맑은"
     }
    ],
    "examples": [
     {
      "en": "We offer high-quality tour services at a fair rate. Contact our agency today via e-mail or phone, and we will get back to you promptly.",
      "ko": "저희는 고품질의 여행 서비스를 합리적인 요금에 제공합니다. 저희 대리점에 오늘 이메일이나 전화로 연락 주시면, 신속히 고객님께 다시 연락 드리겠습니다."
     }
    ],
    "quiz": {
     "sentence": "We offer high-quality tour services at a fair rate. Contact our agency today via e-mail or phone, and we will get back to you promptly.",
     "a": "just",
     "b": "reasonable",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 15,
    "word": "handle",
    "pos": "v.",
    "meaning": "다루다, 처리하다; 만지다",
    "derivatives": [
     {
      "word": "touch",
      "pos": "",
      "meaning": "만지다"
     },
     {
      "word": "manage",
      "pos": "",
      "meaning": "다루다, 처리하다"
     }
    ],
    "examples": [
     {
      "en": "If we don't hire more servers, the restaurant staff will not be able to handle the Sunday lunch rush.",
      "ko": "우리가 더 많은 종업원들을 고용하지 않는다면, 레스토랑 직원들은 일요일에 몰려드는 점심 식사 손님들을 처리할 수 없을 것입니다."
     }
    ],
    "quiz": {
     "sentence": "If we don't hire more servers, the restaurant staff will not be able to handle the Sunday lunch rush.",
     "a": "touch",
     "b": "manage",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 16,
    "word": "entry",
    "pos": "n.",
    "meaning": "출품(물); 입구; 입력",
    "derivatives": [
     {
      "word": "submission to a contest",
      "pos": "",
      "meaning": "출품(물)"
     },
     {
      "word": "doorway",
      "pos": "",
      "meaning": "입구"
     },
     {
      "word": "input",
      "pos": "",
      "meaning": "입력"
     }
    ],
    "examples": [
     {
      "en": "It is my pleasure to let you know that your entry, \"Dusk at the Lake,\" is a finalist for the prestigious photography award this year.",
      "ko": "귀하의 출품작인 <호수의 황혼>이 올해 권위 있는 사진 상 최종 후보에 올랐음을 알려드리게 되어 기쁩니다."
     }
    ],
    "quiz": {
     "sentence": "It is my pleasure to let you know that your entry, \"Dusk at the Lake,\" is a finalist for the prestigious photography award this year.",
     "a": "submission to a contest",
     "b": "doorway",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 17,
    "word": "refer",
    "pos": "v.",
    "meaning": "보내다, 전달하다; 참조하다",
    "derivatives": [
     {
      "word": "check",
      "pos": "",
      "meaning": "살피다, 참조하다"
     },
     {
      "word": "direct",
      "pos": "",
      "meaning": "보내다"
     }
    ],
    "examples": [
     {
      "en": "Please refer any questions regarding your payment to Mr. Keller, the company accountant.",
      "ko": "귀하의 지불 금액과 관련된 모든 질문은 회사의 회계 담당자이신 켈러 씨께 전달하시기 바랍니다."
     }
    ],
    "quiz": {
     "sentence": "Please refer any questions regarding your payment to Mr. Keller, the company accountant.",
     "a": "check",
     "b": "direct",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 18,
    "word": "go with",
    "pos": "v.",
    "meaning": "~을 선택하다; 동행하다",
    "derivatives": [
     {
      "word": "accompany",
      "pos": "",
      "meaning": "동행하다"
     },
     {
      "word": "select",
      "pos": "",
      "meaning": "선택하다"
     }
    ],
    "examples": [
     {
      "en": "The hotel has decided to go with another contractor to do the renovations because the previous contractor's bid was significantly higher than expected.",
      "ko": "그 호텔은 기존 계약업체의 입찰액이 예상보다 상당히 높았기 때문에, 개조 공사를 하기 위해 다른 계약업체를 선택하기로 결정했습니다."
     }
    ],
    "quiz": {
     "sentence": "The hotel has decided to go with another contractor to do the renovations because the previous contractor's bid was significantly higher than expected.",
     "a": "accompany",
     "b": "select",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 19,
    "word": "good",
    "pos": "a.",
    "meaning": "유효한; 좋은",
    "derivatives": [
     {
      "word": "high quality",
      "pos": "",
      "meaning": "좋은"
     },
     {
      "word": "valid",
      "pos": "",
      "meaning": "유효한"
     }
    ],
    "examples": [
     {
      "en": "The discount code \"DC1468\" is good through July for a 10% discount on any online order.",
      "ko": "할인 코드 \"DC1468\"은 어떠한 온라인 주문품에 대해서도 10퍼센트의 할인을 받을 수 있으며 7월 한 달 내내 유효합니다."
     }
    ],
    "quiz": {
     "sentence": "The discount code \"DC1468\" is good through July for a 10% discount on any online order.",
     "a": "high quality",
     "b": "valid",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 20,
    "word": "dimension",
    "pos": "n.",
    "meaning": "차원, 특징; 크기, 규모",
    "derivatives": [
     {
      "word": "characteristic",
      "pos": "",
      "meaning": "차원, 특징"
     },
     {
      "word": "aspect",
      "pos": "",
      "meaning": "차원, 특징"
     },
     {
      "word": "feature",
      "pos": "",
      "meaning": "차원, 특징"
     },
     {
      "word": "proportion",
      "pos": "",
      "meaning": "크기, 규모"
     },
     {
      "word": "measurement",
      "pos": "",
      "meaning": "크기, 규모"
     },
     {
      "word": "size",
      "pos": "",
      "meaning": "크기, 규모"
     }
    ],
    "examples": [
     {
      "en": "The advent of virtual reality technology has added another dimension to the gaming experience, immersing players in realistic and interactive virtual worlds.",
      "ko": "가상 현실 기술의 출현으로 게임 경험에 또 다른 차원이 추가되어 현실적이고 상호 작용하는 가상 세계에 플레이어를 몰입시킵니다."
     }
    ],
    "quiz": {
     "sentence": "The advent of virtual reality technology has added another dimension to the gaming experience, immersing players in realistic and interactive virtual worlds.",
     "a": "aspect",
     "b": "proportion",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 21,
    "word": "maintain",
    "pos": "v.",
    "meaning": "유지하다; 유지보수하다",
    "derivatives": [
     {
      "word": "repair",
      "pos": "",
      "meaning": "유지보수하다"
     },
     {
      "word": "service",
      "pos": "",
      "meaning": "유지보수하다"
     },
     {
      "word": "keep",
      "pos": "",
      "meaning": "유지하다"
     }
    ],
    "examples": [
     {
      "en": "Due to customer complaints about the store being too hot, the temperature will now be maintained at 19°C rather than 22°C.",
      "ko": "매장이 너무 더운 것에 대한 고객들의 불만으로 인해, 실내 온도는 이제 섭씨 22도가 아닌 19도로 유지될 것입니다."
     }
    ],
    "quiz": {
     "sentence": "Due to customer complaints about the store being too hot, the temperature will now be maintained at 19°C rather than 22°C.",
     "a": "repaired",
     "b": "kept",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 22,
    "word": "register",
    "pos": "v.",
    "meaning": "기록하다; 등록하다",
    "derivatives": [
     {
      "word": "enroll",
      "pos": "",
      "meaning": "등록하다"
     },
     {
      "word": "record",
      "pos": "",
      "meaning": "기록하다"
     }
    ],
    "examples": [
     {
      "en": "Check your pay statement to make sure the attendance software accurately registered your overtime hours for last month.",
      "ko": "출근 확인 소프트웨어가 지난달에 대한 여러분의 초과 근무 시간을 정확히 기록했는지 확실히 할 수 있도록 여러분의 급여 명세서를 확인해 보시기 바랍니다."
     }
    ],
    "quiz": {
     "sentence": "Check your pay statement to make sure the attendance software accurately registered your overtime hours for last month.",
     "a": "enrolled",
     "b": "recorded",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 23,
    "word": "observe",
    "pos": "v.",
    "meaning": "준수하다; 관찰하다",
    "derivatives": [
     {
      "word": "monitor",
      "pos": "",
      "meaning": "관찰하다"
     },
     {
      "word": "watch",
      "pos": "",
      "meaning": "관찰하다"
     },
     {
      "word": "comply with",
      "pos": "",
      "meaning": "(법 등을) 준수하다, 지키다"
     }
    ],
    "examples": [
     {
      "en": "To prevent accidents, it is crucial to observe safety regulations when using power tools.",
      "ko": "사고를 예방하기 위해서는 전동 공구를 사용할 때 안전 규정을 준수하는 것이 중요합니다."
     }
    ],
    "quiz": {
     "sentence": "To prevent accidents, it is crucial to observe safety regulations when using power tools.",
     "a": "monitor",
     "b": "comply with",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 24,
    "word": "reflect",
    "pos": "v.",
    "meaning": "보여주다, 나타내다; 숙고하다",
    "derivatives": [
     {
      "word": "consider",
      "pos": "",
      "meaning": "깊이 생각하다, 숙고하다"
     },
     {
      "word": "represent",
      "pos": "",
      "meaning": "보여주다, 나타내다"
     },
     {
      "word": "show",
      "pos": "",
      "meaning": "보여주다, 나타내다"
     }
    ],
    "examples": [
     {
      "en": "I have e-mailed you an invoice for your first month of classes, which reflects both the instruction fee and the cost of your equipment.",
      "ko": "귀하의 첫 달 수강에 대한 청구서를 메일로 보내 드렸으며, 그것에는 강의료와 기기 비용이 모두 나타나 있습니다."
     }
    ],
    "quiz": {
     "sentence": "I have e-mailed you an invoice for your first month of classes, which reflects both the instruction fee and the cost of your equipment.",
     "a": "represents",
     "b": "considers",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 25,
    "word": "matter",
    "pos": "n.",
    "meaning": "상황, 문제; 물질",
    "derivatives": [
     {
      "word": "substance",
      "pos": "",
      "meaning": "물질"
     },
     {
      "word": "situation",
      "pos": "",
      "meaning": "상황, 문제"
     },
     {
      "word": "issue",
      "pos": "",
      "meaning": "상황, 문제"
     }
    ],
    "examples": [
     {
      "en": "Employees who have a complaint about a supervisor can speak with an HR representative to resolve the matter.",
      "ko": "상사에 대해 불만이 있는 직원들은 해당 문제를 해결하기 위해 인사부 직원과 이야기할 수 있습니다."
     }
    ],
    "quiz": {
     "sentence": "Employees who have a complaint about a supervisor can speak with an HR representative to resolve the matter.",
     "a": "substance",
     "b": "situation",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 26,
    "word": "over",
    "pos": "prep.",
    "meaning": "~동안; ~ 위에",
    "derivatives": [
     {
      "word": "above",
      "pos": "",
      "meaning": "~ 위에"
     },
     {
      "word": "during",
      "pos": "",
      "meaning": "~동안"
     }
    ],
    "examples": [
     {
      "en": "After learning the surprising news that Wire World is going out of business, we expect that our market share will grow by 10% over the next year.",
      "ko": "와이어 월드 사가 폐업할 예정이라는 놀라운 소식을 들은 후로, 우리는 앞으로 1년 동안 우리의 시장 점유율이 10퍼센트 증가할 것으로 예상합니다."
     }
    ],
    "quiz": {
     "sentence": "After learning the surprising news that Wire World is going out of business, we expect that our market share will grow by 10% over the next year.",
     "a": "above",
     "b": "during",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 27,
    "word": "model",
    "pos": "n.",
    "meaning": "(상품의) 모델, 판; 본보기",
    "derivatives": [
     {
      "word": "example",
      "pos": "",
      "meaning": "본보기"
     },
     {
      "word": "version",
      "pos": "",
      "meaning": "판"
     }
    ],
    "examples": [
     {
      "en": "The newest model in their popular line of smart phones features an improved camera and a crystal-clear screen resolution.",
      "ko": "인기 있는 스마트폰 제품 라인에 속해 있는 이 최신 모델은 개선된 카메라와 수정같이 맑은 화면 해상도를 특징으로 합니다."
     }
    ],
    "quiz": {
     "sentence": "The newest model in their popular line of smart phones features an improved camera and a crystal-clear screen resolution.",
     "a": "example",
     "b": "version",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 28,
    "word": "treat",
    "pos": "v.",
    "meaning": "다루다; 간주하다; 접대하다",
    "derivatives": [
     {
      "word": "manage",
      "pos": "",
      "meaning": "다루다"
     },
     {
      "word": "handle",
      "pos": "",
      "meaning": "다루다"
     },
     {
      "word": "consider",
      "pos": "",
      "meaning": "간주하다"
     },
     {
      "word": "entertain",
      "pos": "",
      "meaning": "접대하다, 대접하다"
     }
    ],
    "examples": [
     {
      "en": "My family has been using the same veterinarian for 10 years because she always treats our pets with care.",
      "ko": "우리 가족은 10년 동안 동일한 수의사를 이용해 왔는데, 그분은 항상 우리의 애완 동물들을 세심하게 다뤄주시기 때문입니다."
     }
    ],
    "quiz": {
     "sentence": "My family has been using the same veterinarian for 10 years because she always treats our pets with care.",
     "a": "handles",
     "b": "considers",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 29,
    "word": "suspect",
    "pos": "v.",
    "meaning": "생각하다, 추정하다; 의심하다",
    "derivatives": [
     {
      "word": "think",
      "pos": "",
      "meaning": "생각하다, 추정하다"
     },
     {
      "word": "believe",
      "pos": "",
      "meaning": "생각하다, 추정하다"
     },
     {
      "word": "distrust",
      "pos": "",
      "meaning": "의심하다, 불신하다"
     }
    ],
    "examples": [
     {
      "en": "The board members suspect that the CEO will soon announce his retirement, and they are preparing to search for a suitable successor.",
      "ko": "이사회 임원들은 CEO가 곧 은퇴를 발표할 것으로 생각하고, 적절한 후임자를 물색할 준비를 하고 있습니다."
     }
    ],
    "quiz": {
     "sentence": "The board members suspect that the CEO will soon announce his retirement, and they are preparing to search for a suitable successor.",
     "a": "believe",
     "b": "distrust",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 30,
    "word": "tentative",
    "pos": "a.",
    "meaning": "잠정적인, 임시의; 머뭇거리는",
    "derivatives": [
     {
      "word": "not finalized",
      "pos": "",
      "meaning": "잠정적인, 임시의"
     },
     {
      "word": "hesitant",
      "pos": "",
      "meaning": "머뭇거리는"
     }
    ],
    "examples": [
     {
      "en": "The music festival has released a tentative schedule for all of the performances that will take place over the weekend in Mallory Park.",
      "ko": "그 음악 축제는 주말 동안에 걸쳐 말로리 공원에서 열릴 모든 공연들에 대한 잠정적인 일정을 발표했습니다."
     }
    ],
    "quiz": {
     "sentence": "The music festival has released a tentative schedule for all of the performances that will take place over the weekend in Mallory Park.",
     "a": "not finalized",
     "b": "hesitant",
     "answer": "A"
    },
    "tip": ""
   }
  ]
 },
 {
  "week": 2,
  "day": 6,
  "part": "Part 1",
  "title": "사물 사진 빈출 어휘",
  "words": [
   {
    "no": 1,
    "word": "aisle",
    "pos": "n.",
    "meaning": "통로",
    "derivatives": [],
    "examples": [
     {
      "en": "Some bookshelves are separated by an aisle.",
      "ko": "책장들이 통로로 나뉘어 있다."
     }
    ],
    "quiz": null,
    "tip": "발음에 유의하세요. [s]가 묵음으로, [아일]이라고 발음합니다."
   },
   {
    "no": 2,
    "word": "rack",
    "pos": "n.",
    "meaning": "(물건을 거는) 걸이, (물건을 올려 두는) 선반",
    "derivatives": [],
    "examples": [
     {
      "en": "Some clothes are hanging on a rack.",
      "ko": "옷들이 옷걸이에 걸려 있다."
     }
    ],
    "quiz": null,
    "tip": "시험에 나오는 또 다른 rack\nluggage rack\nbicycle rack"
   },
   {
    "no": 3,
    "word": "level",
    "pos": "n.",
    "meaning": "층, 단",
    "derivatives": [],
    "examples": [
     {
      "en": "A bicycle rack has two levels.",
      "ko": "자전거 보관대가 2단으로 되어 있다."
     }
    ],
    "quiz": null,
    "tip": "'층'을 의미하는 또 다른 표현 : story\nA building is several stories tall.\n건물이 여러 층 높이이다."
   },
   {
    "no": 4,
    "word": "(cash) register",
    "pos": "n.",
    "meaning": "금전 출납기, 상점의 계산대",
    "derivatives": [],
    "examples": [
     {
      "en": "A cash register drawer is open.",
      "ko": "금전 출납기 서랍이 열려 있다."
     }
    ],
    "quiz": null,
    "tip": "상점 사진에서 계산대를 checkout counter라고 표현하는 문장도 나옵니다."
   },
   {
    "no": 5,
    "word": "walkway",
    "pos": "n.",
    "meaning": "통로, 작은 길",
    "derivatives": [],
    "examples": [
     {
      "en": "A walkway is lined with benches.",
      "ko": "통로에 벤치들이 줄지어 있다."
     }
    ],
    "quiz": null,
    "tip": "'길'을 나타내는 기출 어휘\npathway / path  보도\ntrail  산길, 오솔길\nroad  (특히 차가 다니는) 도로\nstreet  일반적인 길, 도로"
   },
   {
    "no": 6,
    "word": "patio",
    "pos": "n.",
    "meaning": "파티오, 테라스 자리",
    "derivatives": [],
    "examples": [
     {
      "en": "A roof has been built over an outdoor patio.",
      "ko": "야외 테라스 위에 지붕이 설치되어 있다."
     }
    ],
    "quiz": null,
    "tip": "Part 2에도 자주 나오는 단어입니다.\n[패디오우 (미) / 패티오우 (영)] 발음에 유의하세요."
   },
   {
    "no": 7,
    "word": "potted plant",
    "pos": "n.",
    "meaning": "화분에 담긴 식물",
    "derivatives": [],
    "examples": [
     {
      "en": "A potted plant is positioned in a corner.",
      "ko": "화분이 구석에 놓여 있다."
     }
    ],
    "quiz": null,
    "tip": "시험에 가장 자주 출제되는 사물 중 하나입니다."
   },
   {
    "no": 8,
    "word": "container",
    "pos": "n.",
    "meaning": "그릇, 용기",
    "derivatives": [],
    "examples": [
     {
      "en": "Some containers have been filled with food.",
      "ko": "용기들이 음식으로 가득 차 있다."
     }
    ],
    "quiz": null,
    "tip": "배에 싣는 화물 수송용 컨테이너만을 연상하기 쉬운데, Part 1에서는 '그릇, 용기'를 나타내는 명사로 잘 나옵니다."
   },
   {
    "no": 9,
    "word": "be stacked",
    "pos": "v.",
    "meaning": "쌓여 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "Boxes have been stacked on the floor.",
      "ko": "상자들이 바닥에 쌓여 있다."
     },
     {
      "en": "Some packages are stacked on a cart.",
      "ko": "짐꾸러미들이 카트 위에 쌓여 있다."
     }
    ],
    "quiz": null,
    "tip": "be piled도 쌓여 있는 모습을 묘사할 때 쓰이며, 정답으로 자주 나옵니다.\n사물의 현재 상태를 묘사할 때 「be동사+p.p.」나 「have been p.p.」를 쓸 수 있는데, 둘 사이에 의미 차이는 없습니다.\nstack, pile이 명사로 쓰일 때는 '더미'라는 뜻입니다.\na pile[stack] of dishes  접시 더미, 접시가 쌓여 있는 것"
   },
   {
    "no": 10,
    "word": "be propped against",
    "pos": "v.",
    "meaning": "~에 기대어 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "A ladder has been propped against the wall.",
      "ko": "사다리가 벽에 기대어 있다."
     },
     {
      "en": "Tools are propped against a wall.",
      "ko": "연장들이 벽에 기대어 있다."
     }
    ],
    "quiz": null,
    "tip": "동사 prop의 뜻은 '~을 (받침대 등으로) 받치다, 떠받치다'라는 뜻으로, The door is propped open.은 문에 무엇인가를 받쳐서 열어 놓은 상태를 묘사합니다."
   },
   {
    "no": 11,
    "word": "be suspended",
    "pos": "v.",
    "meaning": "매달려 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "Some light fixtures are suspended from the ceiling.",
      "ko": "조명 기구가 천장에 매달려 있다."
     },
     {
      "en": "Some wires are suspended over a road.",
      "ko": "전선이 길 위쪽에 매달려 있다."
     }
    ],
    "quiz": null,
    "tip": "조명 기구나 장식용 식물이 천장에(from the ceiling) 매달려 있는 모습의 사진이 자주 출제됩니다."
   },
   {
    "no": 12,
    "word": "be displayed",
    "pos": "v.",
    "meaning": "진열되어 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "Products are displayed on shelves.",
      "ko": "제품들이 선반들에 진열되어 있다."
     },
     {
      "en": "Some clothing is being displayed.",
      "ko": "옷이 진열되어 있다."
     }
    ],
    "quiz": null,
    "tip": "display(~을 진열하다)는 명사(진열, 전시)로도 쓰이기 때문에 진열되어 있는 모습을 be on display로 묘사할 수도 있습니다.\nFood is on display in a cafeteria.\n구내 식당에 음식이 진열되어 있다."
   },
   {
    "no": 13,
    "word": "be arranged",
    "pos": "v.",
    "meaning": "정렬되어 있다, 정리되어 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "Some clothes have been arranged for display.",
      "ko": "몇몇 옷가지들이 진열되어 있다."
     },
     {
      "en": "Some merchandise is arranged on shelves.",
      "ko": "상품이 선반들 위에 정리되어 있다."
     }
    ],
    "quiz": null,
    "tip": "정렬되어 있는 형태를 나타내는 부사구도 함께 알아 두세요.\nin a circle  원형으로\nin a row  한 줄로\nin rows  여러 줄로"
   },
   {
    "no": 14,
    "word": "be hanging",
    "pos": "v.",
    "meaning": "걸려 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "Some artwork is hanging on a wall.",
      "ko": "예술 작품이 벽에 걸려 있다."
     },
     {
      "en": "Clothing is hanging on racks.",
      "ko": "옷이 옷걸이들에 걸려 있다."
     }
    ],
    "quiz": null,
    "tip": "hang은 '~을 걸다'라는 동작을 나타낼 때도 쓰입니다.\nhanging up a sign  표지판을 걸고 있다\n'걸려 있다'라는 뜻의 is hanging은 hung으로 바꾸어 쓸 수 있습니다."
   },
   {
    "no": 15,
    "word": "be placed",
    "pos": "v.",
    "meaning": "(~에) 놓여 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "Some potted plants have been placed outside.",
      "ko": "화분들이 바깥에 놓여 있다."
     },
     {
      "en": "Some spoons have been placed in a cup.",
      "ko": "숟가락들이 컵에 놓여 있다."
     }
    ],
    "quiz": null,
    "tip": "be put, be positioned도 같은 의미로 쓰입니다. 물건 등이 어떤 위치에 놓여 있는 상태를 묘사하는 사진에서 정답으로 잘 나옵니다."
   },
   {
    "no": 16,
    "word": "be built",
    "pos": "v.",
    "meaning": "(건물, 구조물 등이) 지어져 있다, 세워져 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "A wooden structure has been built outdoors.",
      "ko": "나무 구조물이 바깥에 세워져 있다."
     },
     {
      "en": "A bridge has been built over a harbor.",
      "ko": "다리가 항구 위로 건설되어 있다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 17,
    "word": "line",
    "pos": "v.",
    "meaning": "~에 줄지어 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "Some trees line a walkway.",
      "ko": "나무들이 통로에 줄지어 있다."
     },
     {
      "en": "Some windows line a brick wall.",
      "ko": "창문들이 벽돌로 된 벽에 줄지어 나 있다."
     }
    ],
    "quiz": null,
    "tip": "줄지어 있는 모습을 묘사할 때 be lined up도 자주 쓰입니다.\nPicnic tables are lined up in a row.\n피크닉 테이블들이 한 줄로 늘어서 있다."
   },
   {
    "no": 18,
    "word": "be prepared",
    "pos": "v.",
    "meaning": "준비되어 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "A table has been prepared for a meal.",
      "ko": "테이블에 식사 준비가 되어 있다."
     },
     {
      "en": "A dining area has been prepared for customers.",
      "ko": "식사 구역이 손님을 위해 준비되어 있다."
     }
    ],
    "quiz": null,
    "tip": "주로 식사 준비가 된 모습을 묘사할 때 정답으로 나옵니다."
   },
   {
    "no": 19,
    "word": "be set up",
    "pos": "v.",
    "meaning": "설치되어 있다, 놓여 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "A seating area has been set up outside.",
      "ko": "좌석 구역이 바깥에 설치되어 있다."
     },
     {
      "en": "Two computers are set up next to each other.",
      "ko": "두 대의 컴퓨터가 나란히 설치되어 있다."
     }
    ],
    "quiz": null,
    "tip": "함께 자주 쓰이는 장소/위치 부사구\nside by side / next to each other  나란히\nin front of a building  건물 앞에\nnear a wall  벽 근처에"
   },
   {
    "no": 20,
    "word": "be stocked",
    "pos": "v.",
    "meaning": "채워져 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "Shelves have been stocked with items.",
      "ko": "선반들이 물건들로 채워져 있다."
     },
     {
      "en": "Products have been stocked on shelves.",
      "ko": "제품들이 선반에 채워져 있다."
     }
    ],
    "quiz": null,
    "tip": "restock(~에 물건을 다시 채워 넣다)이라는 동사가 오답으로 자주 등장합니다."
   },
   {
    "no": 21,
    "word": "be covered with",
    "pos": "v.",
    "meaning": "~로 덮여 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "The roof of a building is covered with snow.",
      "ko": "건물 지붕이 눈으로 덮여 있다."
     }
    ],
    "quiz": null,
    "tip": "cover(~을 덮다)를 능동 형태로 쓴 문장이 출제된 적 있습니다.\nAn arched roof covers a building.\n아치형 지붕이 건물을 덮고 있다."
   },
   {
    "no": 22,
    "word": "be located",
    "pos": "v.",
    "meaning": "~에 위치해 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "Buildings are located along a shoreline.",
      "ko": "건물들이 해안을 따라 위치해 있다."
     },
     {
      "en": "An athletic field is located near some trees.",
      "ko": "운동장이 나무들 근처에 위치해 있다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 23,
    "word": "be docked",
    "pos": "v.",
    "meaning": "(배가) 정박되어 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "Some boats are docked at a pier.",
      "ko": "보트들이 부두에 정박되어 있다."
     }
    ],
    "quiz": null,
    "tip": "배가 정박되어 있는 사진 관련 어휘\npier / dock  부두, 선창\nharbor  항구\nbe docked  (배가) 부두에 정박되다\nbe tied to  ~에 묶이다\nbe secured to  ~에 고정되다"
   },
   {
    "no": 24,
    "word": "stop",
    "pos": "v.",
    "meaning": "멈추어 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "A train has stopped at the station.",
      "ko": "기차가 역에 정지해 있다."
     }
    ],
    "quiz": null,
    "tip": "기차나 차량(vehicle) 등이 멈춰 있는 모습을 나타낼 때 stop 또는 be stopped를 씁니다."
   },
   {
    "no": 25,
    "word": "grow",
    "pos": "v.",
    "meaning": "(풀, 나무 등이) 자라다",
    "derivatives": [],
    "examples": [
     {
      "en": "Some trees are growing alongside a building.",
      "ko": "나무들이 건물을 따라 자라고 있다."
     }
    ],
    "quiz": null,
    "tip": "식물이나 나무가 자라는 모습을 be planted(심어져 있다)로 묘사하는 문장도 정답으로 잘 나옵니다.\nSome trees have been planted near a building.\n나무들이 건물 근처에 심어져 있다."
   },
   {
    "no": 26,
    "word": "be parked",
    "pos": "v.",
    "meaning": "(탈것이) 세워져 있다, 주차되어 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "Some bicycles are parked near a curb.",
      "ko": "자전거 몇 대가 연석 근처에 세워져 있다."
     },
     {
      "en": "Some vehicles are parked in front of a fence.",
      "ko": "차량 몇 대가 울타리 앞에 세워져 있다."
     }
    ],
    "quiz": null,
    "tip": "자전거나 차량 등이 세워져 있는 모습과 관련해 연석(curb), 차고(garage), road sign(도로 표지판) 등의 명사가 자주 출제되니 알아 두세요."
   },
   {
    "no": 27,
    "word": "be mounted",
    "pos": "v.",
    "meaning": "~이 장착되어 있다, 올려져 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "Some light fixtures are mounted on a wall.",
      "ko": "조명 기구들이 벽에 붙어 있다."
     }
    ],
    "quiz": null,
    "tip": "be mounted는 특히 벽에 벽시계(clock)나 장식품(decorations), 화면(screen) 등이 달려 있는 모습을 묘사할 때 나옵니다.\nThere is/are 구문을 이용해서 There is a clock mounted on a wall.이라고 표현한 문장도 정답으로 나온 바 있습니다."
   },
   {
    "no": 28,
    "word": "be left",
    "pos": "v.",
    "meaning": "놓여 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "Dishes have been left in the sink.",
      "ko": "접시들이 싱크대에 놓여 있다."
     },
     {
      "en": "A drawer has been left open.",
      "ko": "서랍이 열린 채로 있다."
     }
    ],
    "quiz": null,
    "tip": "서랍이나 상자, 문 등이 열려 있는 모습을 묘사하는 be left open이 자주 출제됩니다."
   },
   {
    "no": 29,
    "word": "be scattered",
    "pos": "v.",
    "meaning": "흩어져 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "Leaves are scattered on the ground.",
      "ko": "나뭇잎들이 땅에 흩어져 있다."
     }
    ],
    "quiz": null,
    "tip": "서류나 책들이 펼쳐져 있는 모습을 be spread out(펼쳐져 있다)을 써서 묘사한 문제도 여러 차례 출제되었으니 함께 알아 두세요.\nSome papers are spread out on a table.\n서류들이 테이블 위에 펼쳐져 있다."
   },
   {
    "no": 30,
    "word": "lie",
    "pos": "v.",
    "meaning": "놓여 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "Some rope is lying on the ground.",
      "ko": "줄이 땅에 놓여 있다."
     },
     {
      "en": "There are some power cords lying on a desk.",
      "ko": "전선이 책상 위에 놓여 있다."
     }
    ],
    "quiz": null,
    "tip": "현재진행형으로 표현할 때 현재분사 lying을 씁니다."
   },
   {
    "no": 31,
    "word": "run",
    "pos": "v.",
    "meaning": "(길 등이) 뻗어 있다, 나 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "Some tracks run alongside a road.",
      "ko": "트랙이 길을 따라 나 있다."
     },
     {
      "en": "A street runs parallel to the water.",
      "ko": "길이 강과 나란히 나 있다."
     }
    ],
    "quiz": null,
    "tip": "run을 '뛰다, 달리다'의 뜻으로만 알고 있으면 이 문장을 듣고 제대로 이해하기 어렵습니다."
   },
   {
    "no": 32,
    "word": "lead to",
    "pos": "v.",
    "meaning": "(길 등이) ~로 이어지다",
    "derivatives": [],
    "examples": [
     {
      "en": "Some stairs lead to water.",
      "ko": "계단이 강으로 이어져 있다."
     },
     {
      "en": "A pathway leads to a parking lot.",
      "ko": "길이 주차장으로 이어져 있다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 33,
    "word": "be paved",
    "pos": "v.",
    "meaning": "(길이) 포장되어 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "A pathway is paved with stones.",
      "ko": "길이 돌로 포장되어 있다."
     },
     {
      "en": "A path has been paved with bricks.",
      "ko": "길이 벽돌로 포장되어 있다."
     }
    ],
    "quiz": null,
    "tip": "포장되어 있는 길을 pavement라고 합니다."
   },
   {
    "no": 34,
    "word": "be posted",
    "pos": "v.",
    "meaning": "게시되어 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "A sign has been posted in front of a building.",
      "ko": "표지판이 건물 앞에 게시되어 있다."
     }
    ],
    "quiz": null,
    "tip": "사람이 표지판을 거는 모습을 묘사할 때는 posting a sign, hanging up a sign 등의 표현을 씁니다."
   },
   {
    "no": 35,
    "word": "occupied",
    "pos": "adj.",
    "meaning": "이용 중인, 점유된",
    "derivatives": [],
    "examples": [
     {
      "en": "All the seats are occupied.",
      "ko": "모든 좌석이 이용중이다."
     }
    ],
    "quiz": null,
    "tip": "이용하지 않고 있는 상태는 unoccupied라고 합니다.\nAn office is unoccupied.  사무실이 비어 있다.\nSome of the chairs are unoccupied.\n의자들 중 일부가 비어 있다."
   },
   {
    "no": 36,
    "word": "be installed",
    "pos": "v.",
    "meaning": "설치되어 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "A railing has been installed next to some stairs.",
      "ko": "난간이 계단 옆에 설치되어 있다."
     }
    ],
    "quiz": null,
    "tip": "창문, 타일, 가로등 등이 설치되어 있는 모습을 '설치되는 중이다(is being installed)'라고 묘사하는 오답이 자주 등장합니다."
   },
   {
    "no": 37,
    "word": "overlook",
    "pos": "v.",
    "meaning": "~을 내려다보다",
    "derivatives": [],
    "examples": [
     {
      "en": "Some skyscrapers overlook a park.",
      "ko": "높은 건물들이 공원을 내려다보고 있다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 38,
    "word": "in the distance",
    "pos": "n.",
    "meaning": "멀리",
    "derivatives": [],
    "examples": [
     {
      "en": "Some trees are visible in the distance.",
      "ko": "멀리 나무들이 보인다."
     }
    ],
    "quiz": null,
    "tip": "자주 출제되지는 않지만 나온 경우 정답이었습니다."
   },
   {
    "no": 39,
    "word": "be separated",
    "pos": "v.",
    "meaning": "나뉘다",
    "derivatives": [],
    "examples": [
     {
      "en": "Workstations are separated by partitions.",
      "ko": "작업공간들이 파티션으로 나뉘어 있다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 40,
    "word": "be filled with",
    "pos": "v.",
    "meaning": "~로 가득 차 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "A drawer has been filled with folders.",
      "ko": "서랍이 폴더로 가득 차 있다."
     }
    ],
    "quiz": null,
    "tip": "'(어떤 공간이) 사람들로 가득 차 있다'를 표현할 때는 be crowded with를 씁니다."
   }
  ]
 },
 {
  "week": 2,
  "day": 7,
  "part": "Part 5,6",
  "title": "명사 ③",
  "words": [
   {
    "no": 1,
    "word": "defect",
    "pos": "n.",
    "meaning": "결함, 하자, 흠",
    "derivatives": [],
    "examples": [
     {
      "en": "eliminate any product defects",
      "ko": "어떠한 제품 결함도 없애다"
     },
     {
      "en": "find physical defects",
      "ko": "물리적 하자를 찾다"
     }
    ],
    "quiz": {
     "sentence": "Our quality assurance officer checks for any manufacturing ------- before products are shipped out to customers.",
     "a": "defects",
     "b": "launches",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 2,
    "word": "output",
    "pos": "n.",
    "meaning": "생산량, 출력",
    "derivatives": [],
    "examples": [
     {
      "en": "high agricultural output",
      "ko": "높은 농업 생산량"
     }
    ],
    "quiz": {
     "sentence": "Over the past ten years, palm oil ------- from our factory in Indonesia has more than doubled.",
     "a": "quantity",
     "b": "output",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 3,
    "word": "product",
    "pos": "n.",
    "meaning": "제품",
    "derivatives": [
     {
      "word": "produce",
      "pos": "v.",
      "meaning": "생산하다"
     }
    ],
    "examples": [
     {
      "en": "a product that may not meet one's expectations",
      "ko": "기대에 미치지 못하는 제품"
     },
     {
      "en": "contain a full listing of all the products",
      "ko": "모든 제품의 전체 목록을 포함하다"
     }
    ],
    "quiz": {
     "sentence": "Our Web site contains a full listing of all the ------- that we sell at our various branches throughout Europe.",
     "a": "consumers",
     "b": "products",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 4,
    "word": "attendee",
    "pos": "n.",
    "meaning": "참석자",
    "derivatives": [
     {
      "word": "attend",
      "pos": "v.",
      "meaning": "참석하다"
     },
     {
      "word": "attendant",
      "pos": "n.",
      "meaning": "안내원, 종업원"
     }
    ],
    "examples": [
     {
      "en": "Attendees must sign up by March 28.",
      "ko": "참석자들은 반드시 3월 28일까지 등록해야 한다."
     }
    ],
    "quiz": {
     "sentence": "To make communication more convenient, ------- must pick up a name tag at the welcome desk.",
     "a": "attendees",
     "b": "configurations",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 5,
    "word": "appliance",
    "pos": "n.",
    "meaning": "기기",
    "derivatives": [],
    "examples": [
     {
      "en": "be dissatisfied with the appliance",
      "ko": "기기에 대해 불만족하다"
     },
     {
      "en": "boldly colored appliances",
      "ko": "과감한 색감의 기기들"
     }
    ],
    "quiz": {
     "sentence": "If you have problems with any Zeletron -------, please contact our technical support team.",
     "a": "alternative",
     "b": "appliance",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 6,
    "word": "renovation",
    "pos": "n.",
    "meaning": "보수 (공사), 개조",
    "derivatives": [
     {
      "word": "renovate",
      "pos": "v.",
      "meaning": "보수하다"
     }
    ],
    "examples": [
     {
      "en": "the planned renovation",
      "ko": "계획된 보수공사"
     },
     {
      "en": "be closed for renovation",
      "ko": "개조를 위해 폐쇄되다"
     }
    ],
    "quiz": {
     "sentence": "The gym's sauna facilities will be closed for ------- and are expected to reopen in early June.",
     "a": "renovation",
     "b": "magnification",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 7,
    "word": "event",
    "pos": "n.",
    "meaning": "행사, 경우, 사건",
    "derivatives": [],
    "examples": [
     {
      "en": "prior to the event",
      "ko": "행사 전에"
     },
     {
      "en": "in the event that",
      "ko": "~하는 경우에"
     }
    ],
    "quiz": {
     "sentence": "In the ------- that customers wish to be removed from our mailing list, please pass their details on to our marketing team.",
     "a": "event",
     "b": "display",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 8,
    "word": "participant",
    "pos": "n.",
    "meaning": "참가자",
    "derivatives": [
     {
      "word": "participate",
      "pos": "v.",
      "meaning": "참가하다"
     }
    ],
    "examples": [
     {
      "en": "Workshop participants will learn how to apply",
      "ko": "워크숍 참가자들은 ~을 응용하는 방법을 배울 것이다"
     },
     {
      "en": "limit the number of participants to 200",
      "ko": "참가자 수를 200명으로 제한하다"
     }
    ],
    "quiz": {
     "sentence": "At this year's Bridgewater Marathon, the number of ------- is likely to exceed 20,000.",
     "a": "participants",
     "b": "performers",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 9,
    "word": "stage",
    "pos": "n.",
    "meaning": "단계",
    "derivatives": [],
    "examples": [
     {
      "en": "in the production stage",
      "ko": "생산 단계에서"
     },
     {
      "en": "the most time-consuming stages in",
      "ko": "~에서 가장 시간이 많이 드는 단계"
     }
    ],
    "quiz": {
     "sentence": "The product development team is in the final ------- of designing the outer casing of our new tablet computer.",
     "a": "stages",
     "b": "scenes",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 10,
    "word": "competitor",
    "pos": "n.",
    "meaning": "경쟁자",
    "derivatives": [
     {
      "word": "compete",
      "pos": "v.",
      "meaning": "경쟁하다"
     },
     {
      "word": "competitive",
      "pos": "a.",
      "meaning": "경쟁의"
     },
     {
      "word": "competitiveness",
      "pos": "n.",
      "meaning": "경쟁력"
     }
    ],
    "examples": [
     {
      "en": "be well ahead of one's competitors",
      "ko": "경쟁자들보다 월등히 앞서다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Howell's knowledge of market trends has allowed EXA Software to stay well ahead of its ------- in the industry.",
     "a": "suppliers",
     "b": "competitors",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 11,
    "word": "recommendation",
    "pos": "n.",
    "meaning": "추천, 권고",
    "derivatives": [
     {
      "word": "recommend",
      "pos": "v.",
      "meaning": "추천하다, 권하다"
     }
    ],
    "examples": [
     {
      "en": "make a recommendation for",
      "ko": "~을 위해 추천하다"
     },
     {
      "en": "if you have a recommendation for",
      "ko": "~에 대해 추천주실 수 있다면"
     }
    ],
    "quiz": {
     "sentence": "Mr. Brown made a ------- for Ms. Yeoman to be given an opportunity to lead the upcoming project.",
     "a": "recommendation",
     "b": "progression",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 12,
    "word": "duty",
    "pos": "n.",
    "meaning": "근무, 의무, 직무",
    "derivatives": [],
    "examples": [
     {
      "en": "complete regular duties",
      "ko": "정규 근무를 완료하다"
     },
     {
      "en": "Additional duties may be assigned.",
      "ko": "추가 근무가 배정될 수 있다."
     }
    ],
    "quiz": {
     "sentence": "The hotel manager insisted that the housekeeping team complete daily ------- more efficiently.",
     "a": "competitors",
     "b": "duties",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 13,
    "word": "production",
    "pos": "n.",
    "meaning": "생산(량)",
    "derivatives": [
     {
      "word": "produce",
      "pos": "v.",
      "meaning": "생산하다"
     },
     {
      "word": "producer",
      "pos": "n.",
      "meaning": "생산자"
     }
    ],
    "examples": [
     {
      "en": "reduce our production time by 30 percent",
      "ko": "생산 시간을 30퍼센트 줄이다"
     }
    ],
    "quiz": {
     "sentence": "Thanks to the advanced training courses, we have managed to lower our ------- time by 25 percent.",
     "a": "expectation",
     "b": "production",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 14,
    "word": "arrangement",
    "pos": "n.",
    "meaning": "준비, 기획",
    "derivatives": [
     {
      "word": "arrange",
      "pos": "v.",
      "meaning": "준비하다, 기획하다"
     }
    ],
    "examples": [
     {
      "en": "make an arrangement to do",
      "ko": "~하기 위해 준비하다"
     },
     {
      "en": "make arrangements for the client",
      "ko": "고객을 위해 기획하다"
     }
    ],
    "quiz": {
     "sentence": "The company's founder made ------- to transport the new clients from the airport to their hotel in the downtown area.",
     "a": "arrangements",
     "b": "achievements",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 15,
    "word": "expectation",
    "pos": "n.",
    "meaning": "기대(치), 예상",
    "derivatives": [
     {
      "word": "expect",
      "pos": "v.",
      "meaning": "기대하다, 예상하다"
     }
    ],
    "examples": [
     {
      "en": "exceed one's expectations",
      "ko": "~의 기대치를 넘다"
     },
     {
      "en": "meet one's expectations",
      "ko": "~의 기대에 부응하다"
     }
    ],
    "quiz": {
     "sentence": "At the Shangri-La Restaurant, we work hard to ensure the food, service, and ambience exceed your -------.",
     "a": "demonstrations",
     "b": "expectations",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 16,
    "word": "confirmation",
    "pos": "n.",
    "meaning": "확인(증)",
    "derivatives": [
     {
      "word": "confirm",
      "pos": "v.",
      "meaning": "확인해주다"
     }
    ],
    "examples": [
     {
      "en": "serve as confirmation of",
      "ko": "~의 확인증으로서 기능하다"
     },
     {
      "en": "await one's confirmation of",
      "ko": "~의 확인을 기다리다"
     }
    ],
    "quiz": {
     "sentence": "If you wish to cancel the annual maintenance service, you must provide written ------- to our client support team.",
     "a": "confirmation",
     "b": "termination",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 17,
    "word": "regulation",
    "pos": "n.",
    "meaning": "규정, 규제, 규칙",
    "derivatives": [
     {
      "word": "regulate",
      "pos": "v.",
      "meaning": "규정하다, 규제하다"
     }
    ],
    "examples": [
     {
      "en": "follow the regulations",
      "ko": "규정들을 준수하다"
     }
    ],
    "quiz": {
     "sentence": "All businesses must follow the ------- listed in the government's Greener Future handbook.",
     "a": "advantages",
     "b": "regulations",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 18,
    "word": "warranty",
    "pos": "n.",
    "meaning": "보증 (기한)",
    "derivatives": [
     {
      "word": "warrant",
      "pos": "v.",
      "meaning": "보증하다"
     }
    ],
    "examples": [
     {
      "en": "extend the warranty on",
      "ko": "~에 대한 보증 기한을 연장하다"
     },
     {
      "en": "include an extended warranty",
      "ko": "연장된 보증 기한을 포함하다"
     }
    ],
    "quiz": {
     "sentence": "By registering your product on our Web site, you can extend the three-year ------- on your laptop computer.",
     "a": "warranty",
     "b": "supply",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 19,
    "word": "authority",
    "pos": "n.",
    "meaning": "권한, 전문가, 당국자",
    "derivatives": [
     {
      "word": "authorize",
      "pos": "v.",
      "meaning": "허가하다, 승인하다"
     }
    ],
    "examples": [
     {
      "en": "have the most authority on the committee",
      "ko": "위원회에서 가장 많은 권한을 가지고 있다"
     }
    ],
    "quiz": {
     "sentence": "While Mr. Jacobs is away at the conference, the assistant manager, Ms. Dawkins, has the most ------- in the office.",
     "a": "permission",
     "b": "authority",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 20,
    "word": "aspect",
    "pos": "n.",
    "meaning": "측면, 양상, 외관",
    "derivatives": [],
    "examples": [
     {
      "en": "the most challenging aspect of",
      "ko": "~의 가장 어려운 측면"
     },
     {
      "en": "apply to every aspect of marketing",
      "ko": "마케팅의 모든 측면에 적용되다"
     }
    ],
    "quiz": {
     "sentence": "This staff orientation will cover every ------- of employment at Sirius IT Solutions.",
     "a": "aspect",
     "b": "reference",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 21,
    "word": "technician",
    "pos": "n.",
    "meaning": "기술자, 전문가",
    "derivatives": [
     {
      "word": "technically",
      "pos": "ad.",
      "meaning": "기술적으로"
     }
    ],
    "examples": [
     {
      "en": "technicians trained in",
      "ko": "~에서 훈련받은 기술자들"
     },
     {
      "en": "an experienced technician",
      "ko": "숙련된 전문가"
     }
    ],
    "quiz": {
     "sentence": "Only a highly skilled ------- would be able to repair the manufacturing robot within two days.",
     "a": "technician",
     "b": "generator",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 22,
    "word": "analysis",
    "pos": "n.",
    "meaning": "분석",
    "derivatives": [
     {
      "word": "analyst",
      "pos": "n.",
      "meaning": "분석가"
     },
     {
      "word": "analyze",
      "pos": "v.",
      "meaning": "분석하다"
     }
    ],
    "examples": [
     {
      "en": "the analysis of monthly sales figures",
      "ko": "월간 매출에 대한 분석"
     },
     {
      "en": "according to the analysis",
      "ko": "분석에 따르면"
     }
    ],
    "quiz": {
     "sentence": "The ------- of staff attendance figures is essential to ensuring that annual productivity goals are reached.",
     "a": "destination",
     "b": "analysis",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 23,
    "word": "means",
    "pos": "n.",
    "meaning": "수단, 방법",
    "derivatives": [],
    "examples": [
     {
      "en": "the preferred means for",
      "ko": "~에 대해 선호되는 수단"
     },
     {
      "en": "operate by means of GPS technology",
      "ko": "GPS 기술에 의해 작동하다"
     }
    ],
    "quiz": {
     "sentence": "Teleconferencing is an effective ------- of conducting discussions between colleagues based all over the world.",
     "a": "technique",
     "b": "means",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 24,
    "word": "consideration",
    "pos": "n.",
    "meaning": "고려, 배려",
    "derivatives": [
     {
      "word": "considerate",
      "pos": "a.",
      "meaning": "사려깊은, 배려하는"
     }
    ],
    "examples": [
     {
      "en": "take A into consideration",
      "ko": "A를 고려하다"
     },
     {
      "en": "show consideration for A",
      "ko": "A를 배려하다"
     }
    ],
    "quiz": {
     "sentence": "The building manager will take tenants' opinions into ------- when deciding how to use the rooftop area.",
     "a": "consideration",
     "b": "participation",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 25,
    "word": "factor",
    "pos": "n.",
    "meaning": "요인, 요소",
    "derivatives": [],
    "examples": [
     {
      "en": "based on a number of factors",
      "ko": "많은 요인들에 근거하여"
     },
     {
      "en": "a key factor in",
      "ko": "~에서의 중요한 요소"
     }
    ],
    "quiz": {
     "sentence": "The host city for the sporting event was chosen based on several -------, including infrastructure and public safety.",
     "a": "factors",
     "b": "portions",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 26,
    "word": "completion",
    "pos": "n.",
    "meaning": "완료, 완성",
    "derivatives": [
     {
      "word": "complete",
      "pos": "a.",
      "meaning": "완전한"
     },
     {
      "word": "complete",
      "pos": "v.",
      "meaning": "완료하다"
     },
     {
      "word": "completely",
      "pos": "ad.",
      "meaning": "완전히"
     }
    ],
    "examples": [
     {
      "en": "in the completion of an education degree",
      "ko": "학위 과정의 완료에"
     },
     {
      "en": "upon completion of program requirements",
      "ko": "프로그램의 요건을 충족한 후에"
     }
    ],
    "quiz": {
     "sentence": "Upon ------- of the probation period, successful employees will be provided with a full-time contract.",
     "a": "admission",
     "b": "completion",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 27,
    "word": "exception",
    "pos": "n.",
    "meaning": "예외, 제외",
    "derivatives": [
     {
      "word": "except",
      "pos": "v.",
      "meaning": "예외로 하다"
     },
     {
      "word": "except",
      "pos": "prep.",
      "meaning": "~을 제외하고는"
     },
     {
      "word": "exceptional",
      "pos": "a.",
      "meaning": "예외적인"
     }
    ],
    "examples": [
     {
      "en": "make an exception",
      "ko": "예외를 두다"
     },
     {
      "en": "with one exception",
      "ko": "하나를 제외하고"
     }
    ],
    "quiz": {
     "sentence": "Almost all board members approved the proposal to relocate to Texas, with the only ------- being Mr. Tasker.",
     "a": "separation",
     "b": "exception",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 28,
    "word": "consultation",
    "pos": "n.",
    "meaning": "상담",
    "derivatives": [
     {
      "word": "consult",
      "pos": "v.",
      "meaning": "상담하다"
     },
     {
      "word": "consultant",
      "pos": "n.",
      "meaning": "상담사"
     }
    ],
    "examples": [
     {
      "en": "will be unavailable for consultation",
      "ko": "상담을 이용할 수 없을 것이다"
     },
     {
      "en": "complimentary consultation",
      "ko": "무료 상담"
     }
    ],
    "quiz": {
     "sentence": "The payroll manager will be available for ------- on payroll-related issues after 4 PM every day this week.",
     "a": "reputation",
     "b": "consultation",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 29,
    "word": "accordance",
    "pos": "n.",
    "meaning": "일치, 합의, 조화",
    "derivatives": [
     {
      "word": "accord",
      "pos": "v.",
      "meaning": "일치하다, 조화하다"
     },
     {
      "word": "accordingly",
      "pos": "ad.",
      "meaning": "그에 맞춰, 그리하여"
     }
    ],
    "examples": [
     {
      "en": "in accordance with the company guidelines",
      "ko": "회사 안내지침에 따라서"
     }
    ],
    "quiz": {
     "sentence": "It is crucial that the extension of our head office be constructed in ------- with the city's building regulations.",
     "a": "accordance",
     "b": "regards",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 30,
    "word": "nomination",
    "pos": "n.",
    "meaning": "(수상) 후보, 지명",
    "derivatives": [
     {
      "word": "nominate",
      "pos": "v.",
      "meaning": "(후보로) 지명하다"
     },
     {
      "word": "nominee",
      "pos": "n.",
      "meaning": "지명자, 후보"
     }
    ],
    "examples": [
     {
      "en": "nominations for Employee of the Year award",
      "ko": "올해의 직원상의 후보들"
     }
    ],
    "quiz": {
     "sentence": "------- for the Best Film of the Year award will be considered by a panel consisting of 25 noted film critics.",
     "a": "Performances",
     "b": "Nominations",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 31,
    "word": "confidence",
    "pos": "n.",
    "meaning": "자신감, 확신",
    "derivatives": [
     {
      "word": "confident",
      "pos": "a.",
      "meaning": "자신감 있는, 확신하는"
     }
    ],
    "examples": [
     {
      "en": "express confidence in",
      "ko": "~에 대한 자신감을 표하다"
     },
     {
      "en": "have confidence in one's ability",
      "ko": "~의 능력에 대해 확신을 가지다"
     }
    ],
    "quiz": {
     "sentence": "Ross Ogilvie's talk at Sala Technology's year-end banquet increased employees' ------- in the company's success.",
     "a": "assertion",
     "b": "confidence",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 32,
    "word": "reminder",
    "pos": "n.",
    "meaning": "상기시키는 것, 알림",
    "derivatives": [
     {
      "word": "remind",
      "pos": "v.",
      "meaning": "상기시키다"
     }
    ],
    "examples": [
     {
      "en": "This is just a reminder.",
      "ko": "이것은 그저 상기시켜드리는 글입니다."
     },
     {
      "en": "send A an e-mail reminder",
      "ko": "A에게 이메일 알림을 보내다"
     }
    ],
    "quiz": {
     "sentence": "This is a ------- that your parking section has been changed from D5 to E3.",
     "a": "request",
     "b": "reminder",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 33,
    "word": "preparation",
    "pos": "n.",
    "meaning": "준비",
    "derivatives": [
     {
      "word": "prepare",
      "pos": "v.",
      "meaning": "준비하다"
     }
    ],
    "examples": [
     {
      "en": "in preparation for",
      "ko": "~을 준비하면서, ~에 대비해"
     }
    ],
    "quiz": {
     "sentence": "In ------- for the grand opening event, the owners of the Starburst Mall are sending invitations to local celebrities.",
     "a": "presentation",
     "b": "preparation",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 34,
    "word": "precaution",
    "pos": "n.",
    "meaning": "예방 조치, 조심, 경계",
    "derivatives": [],
    "examples": [
     {
      "en": "take every precaution to ensure that",
      "ko": "~라는 것을 확실히 하기 위해 모든 예방 조치를 취하다"
     },
     {
      "en": "safety precautions",
      "ko": "안전 예방 조치"
     }
    ],
    "quiz": {
     "sentence": "BC Hiking Expeditions takes every ------- to ensure that participants stay properly hydrated and free from injury.",
     "a": "precaution",
     "b": "advice",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 35,
    "word": "component",
    "pos": "n.",
    "meaning": "구성 요소, 부품",
    "derivatives": [],
    "examples": [
     {
      "en": "central component of the economy",
      "ko": "경제의 중심이 되는 구성 요소"
     },
     {
      "en": "Worn-out components can be replaced easily.",
      "ko": "닳은 부품은 쉽게 교체될 수 있다."
     }
    ],
    "quiz": {
     "sentence": "Celebrity endorsement is a primary ------- of the company's global marketing strategy.",
     "a": "component",
     "b": "policy",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 36,
    "word": "patience",
    "pos": "n.",
    "meaning": "인내(심), 참을성",
    "derivatives": [
     {
      "word": "patient",
      "pos": "a.",
      "meaning": "인내심 있는, 참을성 있는"
     }
    ],
    "examples": [
     {
      "en": "We appreciate your patience.",
      "ko": "저희는 귀하의 인내(심)에 감사드립니다."
     },
     {
      "en": "Thank you for your patience.",
      "ko": "귀하의 참을성에 감사드립니다."
     }
    ],
    "quiz": {
     "sentence": "While the swimming pool is closed for cleaning, we appreciate your ------- and encourage you to enjoy the hotel's other amenities.",
     "a": "recommendation",
     "b": "patience",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 37,
    "word": "congestion",
    "pos": "n.",
    "meaning": "정체, 혼잡",
    "derivatives": [],
    "examples": [
     {
      "en": "avoid congestion on major roads",
      "ko": "주요 도로에서의 정체를 피하다"
     }
    ],
    "quiz": {
     "sentence": "The proposed widening of Fourth Avenue would drastically reduce ------- on downtown roads.",
     "a": "congestion",
     "b": "direction",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 38,
    "word": "connection",
    "pos": "n.",
    "meaning": "연결(성), 접속, 관계",
    "derivatives": [
     {
      "word": "connect",
      "pos": "v.",
      "meaning": "연결하다, 접속하다"
     },
     {
      "word": "connected",
      "pos": "a.",
      "meaning": "연결된"
     }
    ],
    "examples": [
     {
      "en": "create a strong connection between A and B",
      "ko": "A와 B 사이에 강한 연결성을 만들다"
     },
     {
      "en": "give A a connection with B",
      "ko": "A에게 B와의 연결성을 주다"
     }
    ],
    "quiz": {
     "sentence": "The art critic noted a firm ------- between Paul Noonan's work and that of Luca Bergoni.",
     "a": "development",
     "b": "connection",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 39,
    "word": "shortage",
    "pos": "n.",
    "meaning": "부족 (현상), 결핍",
    "derivatives": [],
    "examples": [
     {
      "en": "face a serious shortage of",
      "ko": "~의 심각한 부족에 직면하다"
     },
     {
      "en": "because of a shortage of",
      "ko": "~의 부족 때문에"
     }
    ],
    "quiz": {
     "sentence": "As the cost of importing oil continues to soar, motorists in Europe should prepare for a major ------- of fuel.",
     "a": "shortage",
     "b": "exaggeration",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 40,
    "word": "presence",
    "pos": "n.",
    "meaning": "출석, 존재(감)",
    "derivatives": [
     {
      "word": "present",
      "pos": "a.",
      "meaning": "출석한, 현재의"
     }
    ],
    "examples": [
     {
      "en": "request your presence at a meeting",
      "ko": "귀하의 회의 출석을 요청하다"
     },
     {
      "en": "reestablish its presence in",
      "ko": "~에서의 존재감을 재확립하다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Barker has requested your ------- at the press conference that will be held at 3 o'clock this afternoon.",
     "a": "occurrence",
     "b": "presence",
     "answer": "B"
    },
    "tip": ""
   }
  ]
 },
 {
  "week": 2,
  "day": 8,
  "part": "Part 5,6",
  "title": "명사 ④",
  "words": [
   {
    "no": 1,
    "word": "notification",
    "pos": "n.",
    "meaning": "통지, 알림",
    "derivatives": [
     {
      "word": "notify",
      "pos": "v.",
      "meaning": "알리다"
     }
    ],
    "examples": [
     {
      "en": "send a written notification of one's plan",
      "ko": "~의 계획에 대해 서면 통지를 보내다"
     }
    ],
    "quiz": {
     "sentence": "Property renters who do not wish to renew their lease must send a written ------- to the landlord.",
     "a": "introduction",
     "b": "notification",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 2,
    "word": "consequence",
    "pos": "n.",
    "meaning": "결과",
    "derivatives": [
     {
      "word": "consequently",
      "pos": "ad.",
      "meaning": "그 결과, 따라서"
     }
    ],
    "examples": [
     {
      "en": "as a consequence of",
      "ko": "~의 결과로서"
     }
    ],
    "quiz": {
     "sentence": "Mr. Olback has seen sales of his music album rise as a ------- of his appearance on a popular podcast.",
     "a": "timing",
     "b": "consequence",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 3,
    "word": "pressure",
    "pos": "n.",
    "meaning": "압박, 압력",
    "derivatives": [
     {
      "word": "press",
      "pos": "v.",
      "meaning": "누르다, 압박하다"
     }
    ],
    "examples": [
     {
      "en": "be under a lot of pressure to get",
      "ko": "~을 얻기 위해 많은 압박 하에 있다"
     },
     {
      "en": "increasing pressure to do",
      "ko": "~해야 한다는 증가하는 압박"
     }
    ],
    "quiz": {
     "sentence": "Mr. Dyer is under ------- to fill ten positions before the fast food outlet opens next Monday.",
     "a": "difficulty",
     "b": "pressure",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 4,
    "word": "portion",
    "pos": "n.",
    "meaning": "부분, 몫",
    "derivatives": [],
    "examples": [
     {
      "en": "a major portion of the shopping mall's design",
      "ko": "쇼핑몰 디자인의 주요 부분"
     },
     {
      "en": "a portion of all sales",
      "ko": "모든 매출의 한 부분"
     }
    ],
    "quiz": {
     "sentence": "A ------- of all proceeds from ticket sales for music festivals will be donated to charity.",
     "a": "quality",
     "b": "portion",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 5,
    "word": "interruption",
    "pos": "n.",
    "meaning": "중단, 방해",
    "derivatives": [
     {
      "word": "interrupt",
      "pos": "v.",
      "meaning": "중단시키다, 방해하다"
     },
     {
      "word": "interrupted",
      "pos": "a.",
      "meaning": "가로막힌, 중단된"
     }
    ],
    "examples": [
     {
      "en": "a brief interruption in",
      "ko": "~의 일시적인 중단"
     },
     {
      "en": "avoid possible interruption of your service",
      "ko": "혹시 있을지 모르는 서비스 중단을 피하다"
     }
    ],
    "quiz": {
     "sentence": "Due to scheduled maintenance, there will be a brief ------- in the office's Internet connection at 11 AM tomorrow.",
     "a": "statement",
     "b": "interruption",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 6,
    "word": "investigation",
    "pos": "n.",
    "meaning": "조사, 수사",
    "derivatives": [
     {
      "word": "investigate",
      "pos": "v.",
      "meaning": "조사하다, 수사하다"
     }
    ],
    "examples": [
     {
      "en": "a thorough investigation",
      "ko": "철저한 조사"
     },
     {
      "en": "conduct an investigation into",
      "ko": "~에 대한 수사를 실시하다"
     }
    ],
    "quiz": {
     "sentence": "A government agency recently carried out an ------- into Wiltshire-Poole Trading Inc.",
     "a": "investigation",
     "b": "exploration",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 7,
    "word": "element",
    "pos": "n.",
    "meaning": "요소",
    "derivatives": [],
    "examples": [
     {
      "en": "other elements of Japan's infrastructure",
      "ko": "일본의 사회 기반 시설의 다른 요소들"
     },
     {
      "en": "the basic elements of relationships",
      "ko": "관계의 기본 요소"
     }
    ],
    "quiz": {
     "sentence": "The market research group will consider the design, functionality, and other ------- of the new product.",
     "a": "elements",
     "b": "measurements",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 8,
    "word": "seating",
    "pos": "n.",
    "meaning": "좌석",
    "derivatives": [],
    "examples": [
     {
      "en": "but seating is limited to 400 people",
      "ko": "좌석이 400명으로 제한되어 있지만"
     },
     {
      "en": "a change in the seating policy",
      "ko": "좌석 정책의 변경"
     }
    ],
    "quiz": {
     "sentence": "The food at Bella Bistro has received much praise, but ------- is limited to 15 diners at a time.",
     "a": "seating",
     "b": "permission",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 9,
    "word": "enhancement",
    "pos": "n.",
    "meaning": "향상, 강화",
    "derivatives": [
     {
      "word": "enhance",
      "pos": "v.",
      "meaning": "향상시키다, 강화하다"
     }
    ],
    "examples": [
     {
      "en": "enhancement to the landscape",
      "ko": "조경의 향상"
     }
    ],
    "quiz": {
     "sentence": "The graphic design consultant believes that ------- to our Web site could significantly boost our online sales.",
     "a": "continuations",
     "b": "enhancements",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 10,
    "word": "proximity",
    "pos": "n.",
    "meaning": "인접(성), 근접",
    "derivatives": [],
    "examples": [
     {
      "en": "because of its proximity to shopping malls",
      "ko": "쇼핑몰들과의 인접성 때문에"
     }
    ],
    "quiz": {
     "sentence": "Due to its ------- to the Clearmont Convention Center, the Iris Hotel is a popular choice for business travelers.",
     "a": "proximity",
     "b": "availability",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 11,
    "word": "observation",
    "pos": "n.",
    "meaning": "관찰, 견해",
    "derivatives": [
     {
      "word": "observe",
      "pos": "v.",
      "meaning": "관찰하다, 준수하다"
     },
     {
      "word": "observance",
      "pos": "n.",
      "meaning": "준수"
     }
    ],
    "examples": [
     {
      "en": "observations on children's behavior",
      "ko": "아이들의 행동에 대한 관찰"
     }
    ],
    "quiz": {
     "sentence": "Dr. Laing's ------- on the breeding habits of mountain gorillas were published in the latest issue of Bioscience Monthly.",
     "a": "observations",
     "b": "standards",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 12,
    "word": "admiration",
    "pos": "n.",
    "meaning": "경의, 존경, 감탄",
    "derivatives": [
     {
      "word": "admirable",
      "pos": "a.",
      "meaning": "감탄할 만한, 훌륭한"
     }
    ],
    "examples": [
     {
      "en": "express admiration for",
      "ko": "~에 대해 경의를 표하다"
     }
    ],
    "quiz": {
     "sentence": "The baseball players often express ------- for their head coach who has maintained an unbeaten record.",
     "a": "reward",
     "b": "admiration",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 13,
    "word": "obligation",
    "pos": "n.",
    "meaning": "의무, 책임",
    "derivatives": [
     {
      "word": "obligate",
      "pos": "v.",
      "meaning": "~에게 의무를 지우다"
     }
    ],
    "examples": [
     {
      "en": "have no obligation to do",
      "ko": "~할 의무가 없다"
     },
     {
      "en": "acknowledge our obligation to do",
      "ko": "~할 우리의 책임을 인식하다"
     }
    ],
    "quiz": {
     "sentence": "Part-time workers have no ------- to attend the monthly company meeting, but it is still strongly recommended.",
     "a": "obligation",
     "b": "engagement",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 14,
    "word": "perspective",
    "pos": "n.",
    "meaning": "관점, 전망",
    "derivatives": [],
    "examples": [
     {
      "en": "have a unique perspective on",
      "ko": "~에 대한 특이한 관점을 지니다"
     }
    ],
    "quiz": {
     "sentence": "King Burger's COO has a unique ------- on the business because he started working at the company as a teenager.",
     "a": "quality",
     "b": "perspective",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 15,
    "word": "sequence",
    "pos": "n.",
    "meaning": "순서, 배열",
    "derivatives": [],
    "examples": [
     {
      "en": "the proper sequence of steps",
      "ko": "올바른 조치 순서"
     },
     {
      "en": "the sequence of the day's events",
      "ko": "당일 행사 순서"
     }
    ],
    "quiz": {
     "sentence": "The correct ------- of numbers must be entered on the keypad in order to gain access to the building's security office.",
     "a": "direction",
     "b": "sequence",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 16,
    "word": "possession",
    "pos": "n.",
    "meaning": "소유물, 재산",
    "derivatives": [
     {
      "word": "possess",
      "pos": "v.",
      "meaning": "소유하다"
     }
    ],
    "examples": [
     {
      "en": "personal possessions",
      "ko": "개인 소유물"
     },
     {
      "en": "return one's possessions as quickly as possible",
      "ko": "~의 재산을 가능한 한 빠르게 돌려주다"
     }
    ],
    "quiz": {
     "sentence": "A new modem will be in your ------- within 24 hours, and our technicians will install it free of charge.",
     "a": "possession",
     "b": "recognition",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 17,
    "word": "combination",
    "pos": "n.",
    "meaning": "통합, 조합",
    "derivatives": [
     {
      "word": "combine",
      "pos": "v.",
      "meaning": "통합하다"
     },
     {
      "word": "combined",
      "pos": "a.",
      "meaning": "통합된"
     }
    ],
    "examples": [
     {
      "en": "in combination with other preventive measures",
      "ko": "다른 예방 조치들과 함께 통합하여"
     }
    ],
    "quiz": {
     "sentence": "Mario Alvaro's latest business venture is a ------- of a restaurant and a movie theater.",
     "a": "cooperation",
     "b": "combination",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 18,
    "word": "evidence",
    "pos": "n.",
    "meaning": "증거",
    "derivatives": [
     {
      "word": "evident",
      "pos": "a.",
      "meaning": "명백한"
     },
     {
      "word": "evidently",
      "pos": "ad.",
      "meaning": "명백하게"
     }
    ],
    "examples": [
     {
      "en": "be evidence of the growth",
      "ko": "성장의 증거이다"
     },
     {
      "en": "provide verifiable evidence",
      "ko": "증명할 수 있는 증거를 제시하다"
     }
    ],
    "quiz": {
     "sentence": "Those applying for the position should submit a portfolio so that they can show ------- that they have the necessary skills.",
     "a": "foundation",
     "b": "evidence",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 19,
    "word": "effect",
    "pos": "n.",
    "meaning": "효력, 효과",
    "derivatives": [
     {
      "word": "effective",
      "pos": "a.",
      "meaning": "효과적인"
     },
     {
      "word": "effectively",
      "pos": "ad.",
      "meaning": "효과적으로"
     }
    ],
    "examples": [
     {
      "en": "come into effect (on)",
      "ko": "(~에 대해) 효력이 발생하다"
     },
     {
      "en": "in effect",
      "ko": "효력이 있는, 사실상"
     }
    ],
    "quiz": {
     "sentence": "Regulations prohibiting the sharing of customer information between different businesses will come into ------- this year.",
     "a": "effect",
     "b": "outcome",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 20,
    "word": "distribution",
    "pos": "n.",
    "meaning": "유통, 보급, 배포",
    "derivatives": [
     {
      "word": "distribute",
      "pos": "v.",
      "meaning": "보급하다, 배포하다"
     }
    ],
    "examples": [
     {
      "en": "involved in the manufacturing and distribution",
      "ko": "제조와 유통에 관여된"
     },
     {
      "en": "an energy distribution plan",
      "ko": "에너지 보급 계획"
     }
    ],
    "quiz": {
     "sentence": "Alberta Oil is installing new pipelines throughout Canada over the next five years to improve the domestic ------- network.",
     "a": "assortment",
     "b": "distribution",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 21,
    "word": "specification",
    "pos": "n.",
    "meaning": "상세 요건, 명세서",
    "derivatives": [
     {
      "word": "specify",
      "pos": "v.",
      "meaning": "구체화하다, 명시하다"
     },
     {
      "word": "specified",
      "pos": "a.",
      "meaning": "명시된"
     }
    ],
    "examples": [
     {
      "en": "contains the style specifications for",
      "ko": "~에 대한 스타일 상세 요건들을 포함하다"
     }
    ],
    "quiz": {
     "sentence": "Our Web site clearly displays the size and technical ------- for all EZ Electronics kitchen appliances.",
     "a": "incidents",
     "b": "specifications",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 22,
    "word": "restriction",
    "pos": "n.",
    "meaning": "제한, 제약",
    "derivatives": [
     {
      "word": "restrict",
      "pos": "v.",
      "meaning": "제한하다"
     }
    ],
    "examples": [
     {
      "en": "inform A about the restriction imposed on",
      "ko": "~에 부과된 제한에 대해 A에게 통지하다"
     },
     {
      "en": "government restrictions on the import of",
      "ko": "~의 수입에 가해진 정부의 제한"
     }
    ],
    "quiz": {
     "sentence": "Trade ------- imposed on the importing of certain foreign goods were put in place to boost the domestic economy.",
     "a": "restrictions",
     "b": "authorities",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 23,
    "word": "disruption",
    "pos": "n.",
    "meaning": "장애, 중단",
    "derivatives": [
     {
      "word": "disrupt",
      "pos": "v.",
      "meaning": "방해하다, 중단시키다"
     },
     {
      "word": "disruptive",
      "pos": "a.",
      "meaning": "방해하는, 지장을 주는"
     }
    ],
    "examples": [
     {
      "en": "a temporary disruption in our order system",
      "ko": "저희 주문 시스템에 대한 일시적 장애"
     },
     {
      "en": "apologize to its customers for the disruption in Internet service",
      "ko": "인터넷 서비스에 대한 중단으로 자사 고객들에게 사과하다"
     }
    ],
    "quiz": {
     "sentence": "Albion Rail Company apologized to its passengers for the recent ------- in train service caused by track maintenance.",
     "a": "irritation",
     "b": "disruption",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 24,
    "word": "inspiration",
    "pos": "n.",
    "meaning": "영감, 자극",
    "derivatives": [
     {
      "word": "inspire",
      "pos": "v.",
      "meaning": "영감을 주다, 자극하다"
     }
    ],
    "examples": [
     {
      "en": "the inspiration for the design",
      "ko": "디자인에 대한 영감"
     }
    ],
    "quiz": {
     "sentence": "Ronald Ives paints watercolor pictures with ------- from the urban landscape of London.",
     "a": "apprehension",
     "b": "inspiration",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 25,
    "word": "loyalty",
    "pos": "n.",
    "meaning": "충성(도)",
    "derivatives": [
     {
      "word": "loyal",
      "pos": "a.",
      "meaning": "충성스러운"
     }
    ],
    "examples": [
     {
      "en": "build customer loyalty",
      "ko": "고객 충성도를 형성하다"
     }
    ],
    "quiz": {
     "sentence": "To strengthen customer -------, Axon Office Supplies is introducing a membership program with several benefits.",
     "a": "brands",
     "b": "loyalty",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 26,
    "word": "case",
    "pos": "n.",
    "meaning": "경우, 사례",
    "derivatives": [
     {
      "word": "in case that",
      "pos": "conj.",
      "meaning": "~경우에 대비하여"
     },
     {
      "word": "in case of",
      "pos": "prep.",
      "meaning": "~의 경우"
     }
    ],
    "examples": [
     {
      "en": "in the rare case that",
      "ko": "~라는 희귀한 경우에"
     },
     {
      "en": "as was the case with",
      "ko": "~의 경우에 그랬던 것처럼"
     }
    ],
    "quiz": {
     "sentence": "As was the ------- with Haitsu Motors' hybrid car, its first fully electric car received excellent reviews all over the world.",
     "a": "reason",
     "b": "case",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 27,
    "word": "motivation",
    "pos": "n.",
    "meaning": "동기 (부여), 의욕",
    "derivatives": [
     {
      "word": "motivate",
      "pos": "v.",
      "meaning": "동기를 부여하다"
     }
    ],
    "examples": [
     {
      "en": "sustain employee motivation",
      "ko": "직원 동기 부여를 지속시키다"
     }
    ],
    "quiz": {
     "sentence": "As the head of our Personnel Department, one of Mr. Hawke's duties is improving worker -------.",
     "a": "motivation",
     "b": "consequences",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 28,
    "word": "enthusiasm",
    "pos": "n.",
    "meaning": "열정, 열광",
    "derivatives": [
     {
      "word": "enthusiastic",
      "pos": "a.",
      "meaning": "열정적인"
     },
     {
      "word": "enthusiastically",
      "pos": "ad.",
      "meaning": "열정적으로"
     },
     {
      "word": "enthusiast",
      "pos": "n.",
      "meaning": "애호가, 열성가"
     }
    ],
    "examples": [
     {
      "en": "greet guests with enthusiasm",
      "ko": "열정으로 손님들을 맞이하다"
     }
    ],
    "quiz": {
     "sentence": "We'd like to make an excellent first impression on those visiting our restaurant, so please greet all diners with -------.",
     "a": "achievement",
     "b": "enthusiasm",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 29,
    "word": "reliability",
    "pos": "n.",
    "meaning": "신뢰도, 신뢰성",
    "derivatives": [
     {
      "word": "reliable",
      "pos": "a.",
      "meaning": "믿을 수 있는"
     }
    ],
    "examples": [
     {
      "en": "emphasize the reliability of its products",
      "ko": "자사 제품의 신뢰도를 강조하다"
     }
    ],
    "quiz": {
     "sentence": "In its promotional materials, Zen Full Fiber emphasizes the speed and ------- of its wireless Internet service.",
     "a": "confidence",
     "b": "reliability",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 30,
    "word": "structure",
    "pos": "n.",
    "meaning": "구조, 시설, 건물",
    "derivatives": [
     {
      "word": "structural",
      "pos": "a.",
      "meaning": "구조적인"
     }
    ],
    "examples": [
     {
      "en": "the basic structure",
      "ko": "기본 구조"
     }
    ],
    "quiz": {
     "sentence": "To celebrate the founding of the city, the mayor has approved the construction of a commemorative -------.",
     "a": "structure",
     "b": "element",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 31,
    "word": "convenience",
    "pos": "n.",
    "meaning": "편의, 편리",
    "derivatives": [
     {
      "word": "convenient",
      "pos": "a.",
      "meaning": "편리한"
     },
     {
      "word": "conveniently",
      "pos": "ad.",
      "meaning": "편리하게"
     }
    ],
    "examples": [
     {
      "en": "for your convenience",
      "ko": "귀하의 편의를 위해"
     },
     {
      "en": "at your earliest convenience",
      "ko": "귀하께서 편하신 가장 빠른 시간에"
     }
    ],
    "quiz": {
     "sentence": "For your -------, we have attached an electronic copy of your invoice to this e-mail.",
     "a": "convenience",
     "b": "usefulness",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 32,
    "word": "durability",
    "pos": "n.",
    "meaning": "내구성",
    "derivatives": [
     {
      "word": "durable",
      "pos": "a.",
      "meaning": "내구성이 좋은, 오래 가는"
     }
    ],
    "examples": [
     {
      "en": "for extra durability",
      "ko": "추가적인 내구성을 위해"
     },
     {
      "en": "be designed for durability",
      "ko": "내구성을 위해 고안되다"
     }
    ],
    "quiz": {
     "sentence": "Many homeowners are opting to have Truegrain hardwood flooring installed because of its -------.",
     "a": "enlargement",
     "b": "durability",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 33,
    "word": "caution",
    "pos": "n.",
    "meaning": "주의",
    "derivatives": [
     {
      "word": "cautious",
      "pos": "a.",
      "meaning": "주의하는"
     },
     {
      "word": "cautiously",
      "pos": "ad.",
      "meaning": "주의하여"
     }
    ],
    "examples": [
     {
      "en": "use extreme caution",
      "ko": "극도로 주의하다"
     }
    ],
    "quiz": {
     "sentence": "Hotel guests are advised to use ------- when walking through the nearby forest as there are many steep drops.",
     "a": "challenge",
     "b": "caution",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 34,
    "word": "evaluation",
    "pos": "n.",
    "meaning": "평가",
    "derivatives": [
     {
      "word": "evaluate",
      "pos": "v.",
      "meaning": "평가하다"
     }
    ],
    "examples": [
     {
      "en": "request a full evaluation of the efficiency of",
      "ko": "~의 효율성에 대한 전체적인 평가를 요청하다"
     },
     {
      "en": "sent A samples of products for evaluation",
      "ko": "평가를 위해 상품들의 견본을 A에게 보내다"
     }
    ],
    "quiz": {
     "sentence": "The head of the National Aviation Authority requested a thorough ------- of the safety of the new aircraft.",
     "a": "option",
     "b": "evaluation",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 35,
    "word": "revision",
    "pos": "n.",
    "meaning": "수정, 개정",
    "derivatives": [
     {
      "word": "revise",
      "pos": "v.",
      "meaning": "수정하다, 개정하다"
     }
    ],
    "examples": [
     {
      "en": "make the necessary revisions",
      "ko": "필요한 수정을 하다"
     }
    ],
    "quiz": {
     "sentence": "Please submit your article to Ken Grimshaw in the editing team in case he wishes to make any additional -------.",
     "a": "revisions",
     "b": "proficiencies",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 36,
    "word": "comparison",
    "pos": "n.",
    "meaning": "비교, 대조",
    "derivatives": [
     {
      "word": "compare",
      "pos": "v.",
      "meaning": "비교하다, 대조하다"
     }
    ],
    "examples": [
     {
      "en": "a comparison of two brands",
      "ko": "두 개의 브랜드의 비교"
     }
    ],
    "quiz": {
     "sentence": "A ------- of Speedy Eats and Go Grub showed that the average delivery time is far less with Speedy Eats.",
     "a": "difference",
     "b": "comparison",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 37,
    "word": "delegation",
    "pos": "n.",
    "meaning": "대표단",
    "derivatives": [
     {
      "word": "delegate",
      "pos": "v.",
      "meaning": "대표로 파견하다, 권한을 위임하다"
     }
    ],
    "examples": [
     {
      "en": "a delegation of officials from the research center",
      "ko": "연구 센터에서 온 공무원 대표단"
     }
    ],
    "quiz": {
     "sentence": "A ------- from the National Athletics Committee will assess the suitability of Clarkson Stadium.",
     "a": "revision",
     "b": "delegation",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 38,
    "word": "relocation",
    "pos": "n.",
    "meaning": "이전, 재배치",
    "derivatives": [
     {
      "word": "relocate",
      "pos": "v.",
      "meaning": "이전하다"
     }
    ],
    "examples": [
     {
      "en": "after the relocation",
      "ko": "이전 후에"
     },
     {
      "en": "the pros and cons of relocation",
      "ko": "이전의 찬반 양론"
     }
    ],
    "quiz": {
     "sentence": "Following the -------, Sarter Furnishings' headquarters will be situated about 20 kilometers outside New York City.",
     "a": "relocation",
     "b": "residence",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 39,
    "word": "attention",
    "pos": "n.",
    "meaning": "주의, 집중",
    "derivatives": [
     {
      "word": "attentive",
      "pos": "a.",
      "meaning": "주의를 기울이는, 배려하는"
     },
     {
      "word": "attentively",
      "pos": "ad.",
      "meaning": "주의 깊게"
     }
    ],
    "examples": [
     {
      "en": "be brought to one's attention",
      "ko": "~의 주의를 끌다"
     },
     {
      "en": "immediate attention",
      "ko": "즉각적인 집중"
     }
    ],
    "quiz": {
     "sentence": "Editor positions at Guild Publications require an eye for creativity and excellent ------- to detail.",
     "a": "demand",
     "b": "attention",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 40,
    "word": "extension",
    "pos": "n.",
    "meaning": "(기한) 연장",
    "derivatives": [
     {
      "word": "extend",
      "pos": "v.",
      "meaning": "(기한을) 연장하다"
     }
    ],
    "examples": [
     {
      "en": "be unable to receive the extension",
      "ko": "기한 연장을 받을 수 없다"
     }
    ],
    "quiz": {
     "sentence": "The deadline for the sales report is this Friday because we were not granted the ------- we requested.",
     "a": "extension",
     "b": "funding",
     "answer": "A"
    },
    "tip": ""
   }
  ]
 },
 {
  "week": 2,
  "day": 9,
  "part": "Part 5,6",
  "title": "명사 + 전치사 콜로케이션",
  "words": [
   {
    "no": 1,
    "word": "access to",
    "pos": "",
    "meaning": "~에 대한 접근(권), ~의 이용(권)",
    "derivatives": [],
    "examples": [
     {
      "en": "access to patient records",
      "ko": "환자 기록에 대한 접근"
     },
     {
      "en": "access to the front entrance",
      "ko": "정문의 이용"
     }
    ],
    "quiz": {
     "sentence": "Only full members are granted ------- to the spa and sauna facilities at the swimming pool.",
     "a": "access",
     "b": "approval",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 2,
    "word": "interest in",
    "pos": "",
    "meaning": "~에 대한 관심",
    "derivatives": [],
    "examples": [
     {
      "en": "have interest in the new line of",
      "ko": "~의 새로운 제품군에 대한 관심을 가지다"
     }
    ],
    "quiz": {
     "sentence": "Our diners have indicated great ------- in the introduction of a lunchtime buffet.",
     "a": "interest",
     "b": "attention",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 3,
    "word": "adjustment to",
    "pos": "",
    "meaning": "~에 대한 조정(사항)",
    "derivatives": [],
    "examples": [
     {
      "en": "adjustment to office supplies",
      "ko": "사무용품에 대한 조정(사항)"
     }
    ],
    "quiz": {
     "sentence": "Please inform Mr. Martin of any ------- to your work availability for the month of December.",
     "a": "adjustments",
     "b": "commitments",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 4,
    "word": "in advance",
    "pos": "",
    "meaning": "미리",
    "derivatives": [],
    "examples": [
     {
      "en": "contact A in advance",
      "ko": "A에게 미리 연락하다"
     },
     {
      "en": "be reserved in advance",
      "ko": "미리 예약되다"
     }
    ],
    "quiz": {
     "sentence": "Should there be any changes to the ferry schedule, we will contact you in -------.",
     "a": "advance",
     "b": "reply",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 5,
    "word": "alternative to",
    "pos": "",
    "meaning": "~에 대한 대안",
    "derivatives": [],
    "examples": [
     {
      "en": "alternative to the name brand",
      "ko": "유명 브랜드에 대한 대안"
     }
    ],
    "quiz": {
     "sentence": "The low-cost, plant-based fiber has proven to be an excellent ------- to traditional clothing materials.",
     "a": "choice",
     "b": "alternative",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 6,
    "word": "in agreement",
    "pos": "",
    "meaning": "합의하여, 동의하여",
    "derivatives": [],
    "examples": [
     {
      "en": "be in agreement about the agenda",
      "ko": "그 안건에 대해 합의하다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Hong and Ms. Shipperley are in ------- about the location for this year's company workshop.",
     "a": "agreement",
     "b": "fulfillment",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 7,
    "word": "approach to",
    "pos": "",
    "meaning": "~에 대한 접근법",
    "derivatives": [],
    "examples": [
     {
      "en": "approach to resolving problems",
      "ko": "문제를 해결하는 것에 대한 접근법"
     }
    ],
    "quiz": {
     "sentence": "Mr. Traynor's effective ------- to motivating his employees has resulted in a 20 percent increase in productivity.",
     "a": "gathering",
     "b": "approach",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 8,
    "word": "in conjunction with",
    "pos": "",
    "meaning": "~와 함께",
    "derivatives": [],
    "examples": [
     {
      "en": "be used in conjunction with other discounts",
      "ko": "다른 할인과 함께 사용되다"
     }
    ],
    "quiz": {
     "sentence": "This voucher may not be used in ------- with any gift certificates or discount codes.",
     "a": "agreement",
     "b": "conjunction",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 9,
    "word": "at the request of",
    "pos": "",
    "meaning": "~의 요청에 따라",
    "derivatives": [],
    "examples": [
     {
      "en": "at the request of the manager",
      "ko": "부장님의 요청에 따라"
     }
    ],
    "quiz": {
     "sentence": "At the ------- of the accounting manager, workers must not use company credit cards for personal expenses.",
     "a": "necessity",
     "b": "request",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 10,
    "word": "by means of",
    "pos": "",
    "meaning": "~을 통해, 사용해서",
    "derivatives": [],
    "examples": [
     {
      "en": "by means of member referrals",
      "ko": "회원 소개를 통해"
     }
    ],
    "quiz": {
     "sentence": "The data on local recreational services was collected primarily by ------- of customer surveys.",
     "a": "claims",
     "b": "means",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 11,
    "word": "change in",
    "pos": "",
    "meaning": "~의 변경",
    "derivatives": [],
    "examples": [
     {
      "en": "a change in the processing of orders",
      "ko": "주문 처리의 변경"
     },
     {
      "en": "changes in editorial staff",
      "ko": "편집 직원의 변경"
     }
    ],
    "quiz": {
     "sentence": "A minor ------- in the company's inventory system will be covered during the meeting on Wednesday morning.",
     "a": "change",
     "b": "return",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 12,
    "word": "contributions to",
    "pos": "",
    "meaning": "~에 대한 공헌",
    "derivatives": [],
    "examples": [
     {
      "en": "many contributions to the local community",
      "ko": "지역 사회에 대한 많은 공헌"
     },
     {
      "en": "contribution to public health efforts",
      "ko": "공중 보건 활동에 대한 공헌"
     }
    ],
    "quiz": {
     "sentence": "Mr. Anderson will be recognized by the town's mayor for his valuable ------- to the community.",
     "a": "thoughts",
     "b": "contributions",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 13,
    "word": "disruption in",
    "pos": "",
    "meaning": "~의 중단",
    "derivatives": [],
    "examples": [
     {
      "en": "recent disruption in Internet service",
      "ko": "최근 인터넷 서비스의 중단"
     }
    ],
    "quiz": {
     "sentence": "Galveston Fresh Produce apologized to its customers in Penrith for the recent ------- in its delivery service in the region.",
     "a": "disruption",
     "b": "outbreak",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 14,
    "word": "expansion into",
    "pos": "",
    "meaning": "~로의 확장",
    "derivatives": [],
    "examples": [
     {
      "en": "recent expansion into overseas markets",
      "ko": "해외 시장으로의 최근 확장"
     },
     {
      "en": "expansion into the European market",
      "ko": "유럽 시장으로의 확장"
     }
    ],
    "quiz": {
     "sentence": "Due to its recent ------- into European markets, Erasmus Motors has seen its profits almost double.",
     "a": "expansion",
     "b": "qualification",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 15,
    "word": "confidence in",
    "pos": "",
    "meaning": "~에 대한 신뢰",
    "derivatives": [],
    "examples": [
     {
      "en": "have confidence in one's managers",
      "ko": "~의 관리자들에 대한 신뢰가 있다"
     },
     {
      "en": "confidence in one's ability to handle local matters",
      "ko": "지역 사안을 다룰 능력에 대한 신뢰"
     }
    ],
    "quiz": {
     "sentence": "Based on the feedback forms that have been submitted, most of our workers have ------- in their branch supervisors.",
     "a": "motivation",
     "b": "confidence",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 16,
    "word": "improvements to",
    "pos": "",
    "meaning": "~에 대한 개선(사항)",
    "derivatives": [],
    "examples": [
     {
      "en": "recommend improvements to the employee manual",
      "ko": "직원 안내서에 대한 개선을 권고하다"
     }
    ],
    "quiz": {
     "sentence": "The interior designer recommended some ------- to the office space we recently purchased.",
     "a": "improvements",
     "b": "exchanges",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 17,
    "word": "in compliance with",
    "pos": "",
    "meaning": "~을 준수하여",
    "derivatives": [],
    "examples": [
     {
      "en": "in compliance with environmental standards",
      "ko": "환경 기준을 준수하여"
     },
     {
      "en": "in compliance with nutritional guidelines",
      "ko": "영양학적 지침을 준수하여"
     }
    ],
    "quiz": {
     "sentence": "All manufacturing processes must be in ------- with government health and safety standards.",
     "a": "arrangement",
     "b": "compliance",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 18,
    "word": "in error",
    "pos": "",
    "meaning": "잘못하여, 오류로",
    "derivatives": [],
    "examples": [
     {
      "en": "if you received the message in error",
      "ko": "그 메시지를 잘못 받았다면"
     }
    ],
    "quiz": {
     "sentence": "If you believe you have received this overdue payment notification in -------, please contact our customer accounts team.",
     "a": "mistake",
     "b": "error",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 19,
    "word": "increase in",
    "pos": "",
    "meaning": "~의 증가",
    "derivatives": [],
    "examples": [
     {
      "en": "due to an increase in the demand for",
      "ko": "~에 대한 수요의 증가로 인해"
     },
     {
      "en": "a 50 percent increase in profits",
      "ko": "수익의 50퍼센트 증가"
     }
    ],
    "quiz": {
     "sentence": "Due to an ------- in the cost of packaging materials, Seaman Fine Foods has had no choice but to raise its prices.",
     "a": "increase",
     "b": "effort",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 20,
    "word": "proximity to",
    "pos": "",
    "meaning": "~와의 인접성",
    "derivatives": [],
    "examples": [
     {
      "en": "because of its proximity to the airport",
      "ko": "공항과의 인접성 때문에"
     },
     {
      "en": "because of its proximity to shopping malls",
      "ko": "쇼핑몰들과의 인접성 때문에"
     }
    ],
    "quiz": {
     "sentence": "Wayfarer Inn is an ideal place to stay for tourists because of its ------- to the train station.",
     "a": "competence",
     "b": "proximity",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 21,
    "word": "initiative in",
    "pos": "",
    "meaning": "~의 주도권",
    "derivatives": [],
    "examples": [
     {
      "en": "take the initiative in solving problems",
      "ko": "문제를 해결하는 것의 주도권을 가지다"
     },
     {
      "en": "initiative in supporting the implementation of",
      "ko": "~의 시행을 지원하는 것의 주도권"
     }
    ],
    "quiz": {
     "sentence": "As a branch manager, Ms. Laing must take the ------- in delegating office tasks.",
     "a": "initiative",
     "b": "advice",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 22,
    "word": "investigation into",
    "pos": "",
    "meaning": "~에 대한 조사",
    "derivatives": [],
    "examples": [
     {
      "en": "begin investigation into using alternative components",
      "ko": "대체 부품을 사용하는 것에 대한 조사를 시작하다"
     }
    ],
    "quiz": {
     "sentence": "Board members at Crick Software have begun ------- into merging with a local mobile application developer.",
     "a": "investigations",
     "b": "modifications",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 23,
    "word": "modifications to",
    "pos": "",
    "meaning": "~에 대한 변경(사항)",
    "derivatives": [],
    "examples": [
     {
      "en": "modifications to the banquet menus",
      "ko": "연회 메뉴에 대한 변경"
     }
    ],
    "quiz": {
     "sentence": "Any ------- to the tour itinerary will be posted on our Web site immediately.",
     "a": "reactions",
     "b": "modifications",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 24,
    "word": "persistence in",
    "pos": "",
    "meaning": "~에 있어서의 인내, 고집",
    "derivatives": [],
    "examples": [
     {
      "en": "require persistence in the face of obstacles",
      "ko": "장애물의 직면에 있어서의 인내를 요구하다"
     }
    ],
    "quiz": {
     "sentence": "The founder's ------- in the face of financial problems eventually helped him to establish a successful textile company.",
     "a": "frequency",
     "b": "persistence",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 25,
    "word": "revisions to",
    "pos": "",
    "meaning": "~에 대한 개정(사항), 수정(사항)",
    "derivatives": [],
    "examples": [
     {
      "en": "all revisions to the books",
      "ko": "그 책들에 대한 모든 개정사항"
     },
     {
      "en": "revisions to the rental agreement",
      "ko": "대여 계약서에 대한 수정사항"
     }
    ],
    "quiz": {
     "sentence": "The clients have asked for ------- to the blueprints for the entertainment complex on South Road.",
     "a": "revisions",
     "b": "drawings",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 26,
    "word": "in response to",
    "pos": "",
    "meaning": "~에 대한 응답으로",
    "derivatives": [],
    "examples": [
     {
      "en": "in response to complaints from customers",
      "ko": "고객들로부터의 불만에 대한 응답으로"
     },
     {
      "en": "in response to increased competition",
      "ko": "증가된 경쟁에 대한 응답으로"
     }
    ],
    "quiz": {
     "sentence": "In ------- to complaints from our gym members, we have decided to offer a wider range of fitness classes.",
     "a": "effort",
     "b": "response",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 27,
    "word": "feedback on",
    "pos": "",
    "meaning": "~에 대한 피드백, 의견",
    "derivatives": [],
    "examples": [
     {
      "en": "feedback on the new Web site",
      "ko": "새로운 웹 사이트에 대한 피드백"
     },
     {
      "en": "feedback on the recent conference",
      "ko": "최근 컨퍼런스에 대한 의견"
     }
    ],
    "quiz": {
     "sentence": "The organizers of the Summer Solstice music festival are seeking ------- on the amenities provided at the event.",
     "a": "quality",
     "b": "feedback",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 28,
    "word": "in storage",
    "pos": "",
    "meaning": "입고 중인, 보관 중인",
    "derivatives": [],
    "examples": [
     {
      "en": "keep 2 million kilograms of steel in storage",
      "ko": "철근 2백만 킬로의 입고를 유지하다"
     }
    ],
    "quiz": {
     "sentence": "During the transition to our new offices in Baileyville, several pieces of equipment will be held in -------.",
     "a": "delivery",
     "b": "storage",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 29,
    "word": "requirement for",
    "pos": "",
    "meaning": "~에 대한 필수요건",
    "derivatives": [],
    "examples": [
     {
      "en": "a key requirement for businesses",
      "ko": "사업에 대한 중요한 필수요건"
     },
     {
      "en": "meet the requirement for the position",
      "ko": "그 직책에 대한 필수요건을 충족하다"
     }
    ],
    "quiz": {
     "sentence": "An important ------- for those seeking employment in sales is the ability to communicate effectively.",
     "a": "requirement",
     "b": "impact",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 30,
    "word": "connection with",
    "pos": "",
    "meaning": "~와의 연결(성)",
    "derivatives": [],
    "examples": [
     {
      "en": "connection with audience members",
      "ko": "청중들과의 연결성"
     }
    ],
    "quiz": {
     "sentence": "Actor Dan Hargraves enjoys attending conventions as it gives him a chance to feel a ------- with his fans.",
     "a": "connection",
     "b": "observation",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 31,
    "word": "in recognition of",
    "pos": "",
    "meaning": "~을 인정하는",
    "derivatives": [],
    "examples": [
     {
      "en": "in recognition of his outstanding service",
      "ko": "그의 뛰어난 서비스를 인정하는"
     },
     {
      "en": "in recognition of her contribution to",
      "ko": "~에 대한 그녀의 공헌을 인정하는"
     }
    ],
    "quiz": {
     "sentence": "Professor Wyatt received the Stanton Award in ------- of his remarkable contribution to the field of education.",
     "a": "recognition",
     "b": "suggestion",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 32,
    "word": "search on",
    "pos": "",
    "meaning": "~에 대한 조사",
    "derivatives": [],
    "examples": [
     {
      "en": "conduct a search on",
      "ko": "~에 대한 조사를 실시하다"
     }
    ],
    "quiz": {
     "sentence": "Ms. Varney will conduct a ------- on the most ideal locations for her new cosmetics store.",
     "a": "search",
     "b": "decision",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 33,
    "word": "in keeping with",
    "pos": "",
    "meaning": "~을 준수하여",
    "derivatives": [],
    "examples": [
     {
      "en": "in keeping with company policy",
      "ko": "회사 정책을 준수하여"
     }
    ],
    "quiz": {
     "sentence": "In ------- with government noise regulation guidelines, work on the construction site must stop at 5 PM.",
     "a": "keeping",
     "b": "showing",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 34,
    "word": "with care",
    "pos": "",
    "meaning": "주의 깊게, 신중히",
    "derivatives": [],
    "examples": [
     {
      "en": "must be handled with care",
      "ko": "반드시 주의 깊게 다뤄져야 하다"
     }
    ],
    "quiz": {
     "sentence": "The cleaning products may irritate your skin and must therefore be handled with -------.",
     "a": "maintenance",
     "b": "care",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 35,
    "word": "under the supervision of",
    "pos": "",
    "meaning": "~의 감독 하에, 관리 하에",
    "derivatives": [],
    "examples": [
     {
      "en": "under the supervision of Dr. Aileen",
      "ko": "에일린 박사의 감독 하에"
     }
    ],
    "quiz": {
     "sentence": "As a result of Ms. Corr's absence, the HR department has been under the ------- of Max Bayliss for the past two months.",
     "a": "sight",
     "b": "supervision",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 36,
    "word": "in preparation for",
    "pos": "",
    "meaning": "~에 대비하여",
    "derivatives": [],
    "examples": [
     {
      "en": "in preparation for the installation of",
      "ko": "~의 설치에 대비하여"
     },
     {
      "en": "in preparation for the upcoming inspection",
      "ko": "곧 있을 점검에 대비하여"
     }
    ],
    "quiz": {
     "sentence": "In ------- for the upcoming business awards ceremony, Mr. Edwards has been practicing his speech.",
     "a": "presentation",
     "b": "preparation",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 37,
    "word": "under the terms of",
    "pos": "",
    "meaning": "~의 조건 하에서",
    "derivatives": [],
    "examples": [
     {
      "en": "under the terms of this agreement",
      "ko": "이 계약의 조건 하에서"
     }
    ],
    "quiz": {
     "sentence": "Under the ------- of this agreement, you must notify us at least three days in advance if you wish to cancel your subscription.",
     "a": "words",
     "b": "terms",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 38,
    "word": "decline in",
    "pos": "",
    "meaning": "~의 감소",
    "derivatives": [],
    "examples": [
     {
      "en": "decline in revenue",
      "ko": "수익의 감소"
     },
     {
      "en": "decline in its stock price",
      "ko": "주가의 감소"
     },
     {
      "en": "decline in sales of",
      "ko": "~의 매출의 감소"
     }
    ],
    "quiz": {
     "sentence": "Seraphim Corporation's decision to cancel its advertising campaign led to a ------- in its overall profits.",
     "a": "market",
     "b": "decline",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 39,
    "word": "in jeopardy",
    "pos": "",
    "meaning": "위험에 처한",
    "derivatives": [],
    "examples": [
     {
      "en": "put the contract in jeopardy",
      "ko": "계약을 위험에 처하게 하다"
     }
    ],
    "quiz": {
     "sentence": "A failure to agree on the new location of the company headquarters could put the proposed business merger in -------.",
     "a": "jeopardy",
     "b": "exposure",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 40,
    "word": "with enthusiasm",
    "pos": "",
    "meaning": "열정으로",
    "derivatives": [],
    "examples": [
     {
      "en": "greet all guests with enthusiasm",
      "ko": "열정으로 모든 투숙객들을 맞이하다"
     }
    ],
    "quiz": {
     "sentence": "At Daytona Beach Resort, front desk staff are encouraged to greet all guests with -------.",
     "a": "achievement",
     "b": "enthusiasm",
     "answer": "B"
    },
    "tip": ""
   }
  ]
 },
 {
  "week": 2,
  "day": 10,
  "part": "Part 7",
  "title": "기출 동의어 ②",
  "words": [
   {
    "no": 1,
    "word": "vital",
    "pos": "",
    "meaning": "필수적인, 매우 중요한; 활력이 넘치는",
    "derivatives": [
     {
      "word": "essential",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "dynamic",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "The development of renewable energy technologies has played a vital role in reducing our dependence on fossil fuels.",
      "ko": "재생 가능 에너지 기술의 개발은 화석 연료에 대한 의존도를 줄이는 데 중요한 역할을 했습니다."
     }
    ],
    "quiz": {
     "sentence": "The development of renewable energy technologies has played a vital role in reducing our dependence on fossil fuels.",
     "a": "essential",
     "b": "dynamic",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 2,
    "word": "distinction",
    "pos": "",
    "meaning": "명성, 탁월함; 다름, 차이, 대조",
    "derivatives": [
     {
      "word": "reputation",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "difference",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "The company gained a global distinction for its innovative product, revolutionizing the food industry and attracting investors from around the world.",
      "ko": "그 기업은 혁신적인 제품으로 세계적인 명성을 얻었는데, 이 제품이 식품 업계를 혁신시키고 세계 곳곳으로부터 투자자를 유치했습니다."
     }
    ],
    "quiz": {
     "sentence": "The company gained a global distinction for its innovative product, revolutionizing the food industry and attracting investors from around the world.",
     "a": "reputation",
     "b": "difference",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 3,
    "word": "carry",
    "pos": "",
    "meaning": "(물건을) 재고로 가지고 있다, 취급하다; 이동시키다",
    "derivatives": [
     {
      "word": "keep in stock",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "transport",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "I've checked every grocery store in town, but Holt's Ice Cream seems to only be carried by Foodland.",
      "ko": "제가 도시에 있는 모든 식료품점을 확인해 봤지만, 홀트 아이스크림은 오직 푸드랜드에서만 취급되고 있는 것 같습니다."
     }
    ],
    "quiz": {
     "sentence": "I've checked every grocery store in town, but Holt's Ice Cream seems to only be carried by Foodland.",
     "a": "kept in stock",
     "b": "transported",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 4,
    "word": "just",
    "pos": "",
    "meaning": "정말, 딱; 오직, 단지; 이제 막, 방금",
    "derivatives": [
     {
      "word": "exactly",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "quite",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "only",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "recently",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "The new bookstore, filled with an extensive collection of unique and antique books, just opened on the second floor.",
      "ko": "독특하고 고풍스러운 서적들로 가득한 새 서점이 2층에 이제 막 문을 열었습니다."
     }
    ],
    "quiz": {
     "sentence": "The new bookstore, filled with an extensive collection of unique and antique books, just opened on the second floor.",
     "a": "exactly",
     "b": "recently",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 5,
    "word": "as",
    "pos": "",
    "meaning": "~처럼; ~동안; ~때문에",
    "derivatives": [
     {
      "word": "like",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "while",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "because",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "The workers weave the blankets by hand as the company wants to maintain the traditional authenticity of its products.",
      "ko": "직원들은 수작업으로 담요를 짜서 만드는데, 회사가 자사의 제품에 대해 전통적인 방식의 진정성을 유지하고 싶어 하기 때문입니다."
     }
    ],
    "quiz": {
     "sentence": "The workers weave the blankets by hand as the company wants to maintain the traditional authenticity of its products.",
     "a": "while",
     "b": "because",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 6,
    "word": "credit",
    "pos": "",
    "meaning": "(지불해야 할) 돈; 인정, 칭찬",
    "derivatives": [
     {
      "word": "money",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "recognition",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "praise",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Mr. Reynolds deserves all the credit for helping us meet the deadline; he put in a lot of extra hours over the past couple of weeks.",
      "ko": "레이놀즈 씨는 우리가 마감기한을 지킬 수 있도록 도와주신 것에 대해 모든 인정을 받을 자격이 있습니다; 그분은 지난 몇 주 동안 많은 추가 시간을 쏟았습니다."
     }
    ],
    "quiz": {
     "sentence": "Mr. Reynolds deserves all the credit for helping us meet the deadline; he put in a lot of extra hours over the past couple of weeks.",
     "a": "money",
     "b": "recognition",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 7,
    "word": "extend",
    "pos": "",
    "meaning": "연장하다, 늘리다; (사업·영향력을) 확대하다; 주다, 베풀다",
    "derivatives": [
     {
      "word": "prolong",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "increase",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "offer",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "First of all, I would like to extend a welcome to our guests from Wilson Manufacturing, who will soon be working closely with us on several new projects.",
      "ko": "우선, 저는 윌슨 매뉴팩처링 사에서 오신 저희 손님들께 환영의 인사를 전해 드리고자 하며, 이분들은 곧 여러 새로운 프로젝트에 대해 저희와 긴밀히 작업하시게 될 예정입니다."
     }
    ],
    "quiz": {
     "sentence": "First of all, I would like to extend a welcome to our guests from Wilson Manufacturing, who will soon be working closely with us on several new projects.",
     "a": "prolong",
     "b": "offer",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 8,
    "word": "mark",
    "pos": "",
    "meaning": "표시하다; 기념하다",
    "derivatives": [
     {
      "word": "sign",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "celebrate",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Avoid Washington Avenue tomorrow morning since there will be a parade to mark the 150th anniversary of the town's foundation.",
      "ko": "도시 설립 150주년을 기념하는 퍼레이드가 있을 예정이므로 내일 아침엔 워싱턴 애비뉴를 피하도록 하세요."
     }
    ],
    "quiz": {
     "sentence": "Avoid Washington Avenue tomorrow morning since there will be a parade to mark the 150th anniversary of the town's foundation.",
     "a": "sign",
     "b": "celebrate",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 9,
    "word": "figure",
    "pos": "",
    "meaning": "인물; 형체; 액수",
    "derivatives": [
     {
      "word": "person",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "shape",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "amount",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "After a long period of poor sales, Treasure Hotels & Resorts finally released figures showing a budget surplus for the last quarter.",
      "ko": "오랜 기간의 매출 부진 끝에, 트레저 호텔 앤 리조트는 지난 분기에 마침내 흑자를 보여주는 수치를 발표했습니다."
     }
    ],
    "quiz": {
     "sentence": "After a long period of poor sales, Treasure Hotels & Resorts finally released figures showing a budget surplus for the last quarter.",
     "a": "shapes",
     "b": "amounts",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 10,
    "word": "term",
    "pos": "",
    "meaning": "기간; 조건",
    "derivatives": [
     {
      "word": "duration",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "condition",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "The first term of the online business course will last from February to May, with a final exam taking place in the last month.",
      "ko": "온라인 비즈니스 과정의 첫 번째 학기는 2월부터 5월까지 지속될 것이며, 마지막 달에 기말고사가 실시됩니다."
     }
    ],
    "quiz": {
     "sentence": "The first term of the online business course will last from February to May, with a final exam taking place in the last month.",
     "a": "duration",
     "b": "condition",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 11,
    "word": "property",
    "pos": "",
    "meaning": "소유물; 특성; 부지, 구내",
    "derivatives": [
     {
      "word": "possession",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "characteristic",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "location",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Due to a high volume of complaints, pets are no longer allowed at this property.",
      "ko": "아주 많은 불만 사항들로 인해, 이 건물에서는 애완 동물을 기르는 것이 더 이상 허용되지 않습니다."
     }
    ],
    "quiz": {
     "sentence": "Due to a high volume of complaints, pets are no longer allowed at this property.",
     "a": "characteristic",
     "b": "location",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 12,
    "word": "step",
    "pos": "",
    "meaning": "조치; 발자국; 단계",
    "derivatives": [
     {
      "word": "action",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "footprint",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "degree",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "In response to the recent increase in cyber threats, the IT department will take the necessary steps to prevent unauthorized access to sensitive data.",
      "ko": "최근 사이버 위협이 증가하는 것에 대한 대응으로, IT 부서는 민감한 데이터에 대한 무단 접근을 방지하기 위해 필요한 조치를 취할 것입니다."
     }
    ],
    "quiz": {
     "sentence": "In response to the recent increase in cyber threats, the IT department will take the necessary steps to prevent unauthorized access to sensitive data.",
     "a": "action",
     "b": "degree",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 13,
    "word": "prospect",
    "pos": "",
    "meaning": "기회, 가능성; 조망, 전망",
    "derivatives": [
     {
      "word": "opportunity",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "view",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "scene",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "The internship at Rilke Technologies leads its participants to an array of exciting career prospects.",
      "ko": "릴케 테크놀로지 사의 인턴 프로그램은 참가자들을 여러 흥미로운 채용 기회로 안내합니다."
     }
    ],
    "quiz": {
     "sentence": "The internship at Rilke Technologies leads its participants to an array of exciting career prospects.",
     "a": "opportunities",
     "b": "views",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 14,
    "word": "outstanding",
    "pos": "",
    "meaning": "우월한, 뛰어난; 미지불의",
    "derivatives": [
     {
      "word": "superior",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "exceptional",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "excellent",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "not yet paid",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "unresolved",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Grizzlebee's Diner is a nationwide franchise well known for its outstanding service and fantastic food.",
      "ko": "그리즐비 다이너는 뛰어난 서비스와 환상적인 음식으로 잘 알려진, 전국적인 규모의 프랜차이즈 회사입니다."
     }
    ],
    "quiz": {
     "sentence": "Grizzlebee's Diner is a nationwide franchise well known for its outstanding service and fantastic food.",
     "a": "excellent",
     "b": "unresolved",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 15,
    "word": "bear",
    "pos": "",
    "meaning": "견디다; 가지고 있다",
    "derivatives": [
     {
      "word": "endure",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "carry",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "The banners hanging around the basketball stadium bear the names and logos of the teams in the eastern division.",
      "ko": "농구 경기장 주변에 걸려 있는 현수막들은 동부 지구에 속한 팀들의 명칭과 로고들을 포함하고 있습니다."
     }
    ],
    "quiz": {
     "sentence": "The banners hanging around the basketball stadium bear the names and logos of the teams in the eastern division.",
     "a": "endure",
     "b": "carry",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 16,
    "word": "command",
    "pos": "",
    "meaning": "정통, 능력, 구사력; 지시",
    "derivatives": [
     {
      "word": "mastery",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "instruction",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Whoever we elect to oversee operations at the Kyoto facility will need to have a strong command of the Japanese language.",
      "ko": "교토의 시설물 운영을 감독하도록 우리가 선정하는 사람은 누구든지 일본어에 능통한 실력을 지니고 있어야 할 것입니다."
     }
    ],
    "quiz": {
     "sentence": "Whoever we elect to oversee operations at the Kyoto facility will need to have a strong command of the Japanese language.",
     "a": "mastery",
     "b": "instruction",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 17,
    "word": "approach",
    "pos": "",
    "meaning": "방식; 진입로",
    "derivatives": [
     {
      "word": "method",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "manner",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "way",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "entrance",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Five consecutive months of low sales made it obvious that the marketing team needed to adopt a different approach.",
      "ko": "5개월 연속으로 이어진 저조한 매출로 인해 마케팅 팀이 다른 접근 방법을 취할 필요가 있었다는 점이 분명해졌습니다."
     }
    ],
    "quiz": {
     "sentence": "Five consecutive months of low sales made it obvious that the marketing team needed to adopt a different approach.",
     "a": "method",
     "b": "entrance",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 18,
    "word": "secure",
    "pos": "",
    "meaning": "보호하다; (힘들게) 얻어 내다; 고정시키다",
    "derivatives": [
     {
      "word": "protect",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "obtain",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "fasten",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Secure this group identification tag to your luggage before checking it in at the counter.",
      "ko": "카운터에서 체크인하시기 전에 여러분의 수하물에 이 단체 인식표를 고정시켜 두시기 바랍니다."
     }
    ],
    "quiz": {
     "sentence": "Secure this group identification tag to your luggage before checking it in at the counter.",
     "a": "protect",
     "b": "fasten",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 19,
    "word": "learn",
    "pos": "",
    "meaning": "배우다; 알게 되다",
    "derivatives": [
     {
      "word": "study",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "find out",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Siwon Telecom customers will be delighted to learn about our latest reduced rates for international calls.",
      "ko": "시원 텔레콤 고객들이 최근 인하된 자사의 국제 전화 요금에 대해 알게 되면 기뻐할 것입니다."
     }
    ],
    "quiz": {
     "sentence": "Siwon Telecom customers will be delighted to learn about our latest reduced rates for international calls.",
     "a": "study",
     "b": "find out",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 20,
    "word": "trace",
    "pos": "",
    "meaning": "베끼다, 모사하다; 자취를 따라가다",
    "derivatives": [
     {
      "word": "copy",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "follow",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "The President's Shadow is a fascinating work of nonfiction that traces the early days of the United States Secret Service.",
      "ko": "<대통령의 그림자>는 미국 비밀 수사국의 초창기를 뒤따라가보는, 매력적인 논픽션 작품입니다."
     }
    ],
    "quiz": {
     "sentence": "The President's Shadow is a fascinating work of nonfiction that traces the early days of the United States Secret Service.",
     "a": "copies",
     "b": "follows",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 21,
    "word": "value",
    "pos": "",
    "meaning": "평가하다; 소중하게 여기다",
    "derivatives": [
     {
      "word": "estimate",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "appreciate",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Fans of folk music who value catchy melodies and honest lyrics should give Joe Kell's newest album a listen.",
      "ko": "귀에 잘 들어오는 멜로디와 솔직한 가사를 중요하게 여기는 포크 음악 팬들은 조 켈 씨의 최신 앨범을 한번 들어봐야 합니다."
     }
    ],
    "quiz": {
     "sentence": "Fans of folk music who value catchy melodies and honest lyrics should give Joe Kell's newest album a listen.",
     "a": "estimate",
     "b": "appreciate",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 22,
    "word": "clear",
    "pos": "",
    "meaning": "밝은; 확실한, 분명한",
    "derivatives": [
     {
      "word": "bright",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "obvious",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "There is a clear need for a new type of battery that can power the next generation of portable electronic devices.",
      "ko": "차세대 휴대용 전자 기기에 동력을 공급할 수 있는 새로운 종류의 배터리에 대해 분명한 필요성이 있습니다."
     }
    ],
    "quiz": {
     "sentence": "There is a clear need for a new type of battery that can power the next generation of portable electronic devices.",
     "a": "bright",
     "b": "obvious",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 23,
    "word": "recognize",
    "pos": "",
    "meaning": "(사물이나 사람을) 알아보다; 공로를 인정하다, 예우하다; 인정하다, 받아들이다",
    "derivatives": [
     {
      "word": "identify",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "honor",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "acknowledge",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "accept",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "This award is designed to recognize employees who provide exceptional service to our clients.",
      "ko": "이 상은 우리 고객들에게 뛰어난 서비스를 제공한 직원들의 공로를 인정하기 위해 만들어졌습니다."
     }
    ],
    "quiz": {
     "sentence": "This award is designed to recognize employees who provide exceptional service to our clients.",
     "a": "identify",
     "b": "honor",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 24,
    "word": "cover",
    "pos": "",
    "meaning": "보도하다, 취재하다, 주제로 다루다; 덮다, 씌우다; ~에 대한 돈을 충당하다; (보험, 품질 보증 등)으로 보장하다",
    "derivatives": [
     {
      "word": "report on",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "talk about",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "include",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "spread over",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "wrap",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "pay for",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "insure",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "protect",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "All meals will be covered by the company, but transportation will need to be figured out individually.",
      "ko": "모든 식사는 회사에서 비용을 부담할 것이지만 교통편은 개인적으로 해결해야 할 것입니다."
     }
    ],
    "quiz": {
     "sentence": "All meals will be covered by the company, but transportation will need to be figured out individually.",
     "a": "protected",
     "b": "paid",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 25,
    "word": "balance",
    "pos": "",
    "meaning": "균형, 안정; 잔액",
    "derivatives": [
     {
      "word": "stability",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "remainder",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "remaining amount",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "To avoid monthly fees, a minimum balance of $500 must be kept in the account.",
      "ko": "월간 요금을 피하시려면, 계좌에 최소 500달러의 잔액이 있어야 합니다."
     }
    ],
    "quiz": {
     "sentence": "To avoid monthly fees, a minimum balance of $500 must be kept in the account.",
     "a": "stability",
     "b": "remainder",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 26,
    "word": "meet",
    "pos": "",
    "meaning": "만나다; (요건을) 충족시키다",
    "derivatives": [
     {
      "word": "get together",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "fulfill",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "satisfy",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Dolson Chemicals spent millions of dollars renovating its factories in order to meet the requirements of the new environmental protection policies.",
      "ko": "돌슨 케미컬 사는 새로운 환경 보호 정책의 요건들을 충족시키기 위해 자사의 공장들을 개조하는 데 수백만 달러를 소비했습니다."
     }
    ],
    "quiz": {
     "sentence": "Dolson Chemicals spent millions of dollars renovating its factories in order to meet the requirements of the new environmental protection policies.",
     "a": "get together",
     "b": "satisfy",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 27,
    "word": "shape",
    "pos": "",
    "meaning": "형체; 상태",
    "derivatives": [
     {
      "word": "figure",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "condition",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "After you return the equipment, an associate will check that it's in good shape before refunding your deposit.",
      "ko": "장비를 반납하신 후에는, 예치금을 환불해 드리기 전에 직원 한 명이 그 장비의 상태가 좋은지 확인해 볼 것입니다."
     }
    ],
    "quiz": {
     "sentence": "After you return the equipment, an associate will check that it's in good shape before refunding your deposit.",
     "a": "figure",
     "b": "condition",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 28,
    "word": "issue",
    "pos": "",
    "meaning": "발부하다, 지급하다; 공표하다, 보도하다; 발행하다",
    "derivatives": [
     {
      "word": "distribute",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "report",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "publish",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "New parking passes will be issued to all company employees before the end of the month.",
      "ko": "이달 말이 되기 전에 회사의 전 직원에게 새로운 주차 출입증이 발급될 것입니다."
     }
    ],
    "quiz": {
     "sentence": "New parking passes will be issued to all company employees before the end of the month.",
     "a": "distributed",
     "b": "reported",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 29,
    "word": "condition",
    "pos": "",
    "meaning": "환경, 상황; 필요 조건",
    "derivatives": [
     {
      "word": "circumstances",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "requirement",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "The bus trip to Cleveland could take up to five hours, depending on traffic conditions.",
      "ko": "클리블랜드로 가는 버스 여행은 교통 상황에 따라 최대 5시간까지 걸릴 수 있습니다."
     }
    ],
    "quiz": {
     "sentence": "The bus trip to Cleveland could take up to five hours, depending on traffic conditions.",
     "a": "circumstances",
     "b": "requirements",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 30,
    "word": "turn",
    "pos": "",
    "meaning": "회전하다; 바꾸다",
    "derivatives": [
     {
      "word": "rotate",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "transform",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "The planned renovations will turn the vacant office space on the third floor into a small auditorium.",
      "ko": "계획된 개조 공사는 3층에 비어 있는 사무실 공간을 작은 강당으로 바꿀 것입니다."
     }
    ],
    "quiz": {
     "sentence": "The planned renovations will turn the vacant office space on the third floor into a small auditorium.",
     "a": "rotate",
     "b": "transform",
     "answer": "B"
    },
    "tip": ""
   }
  ]
 },
 {
  "week": 3,
  "day": 11,
  "part": "Part 2~4",
  "title": "LC가 잘 들리는 어휘 ①",
  "words": [
   {
    "no": 1,
    "word": "budget",
    "pos": "n.",
    "meaning": "예산",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Greg, could you update me on our finances?\nM: We are still operating well within our budget.",
      "ko": "여: 그렉, 우리의 재정 상황을 알려주시겠어요?\n남: 우리는 여전히 예산 내에서 잘 운영되고 있습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 2,
    "word": "assignment",
    "pos": "n.",
    "meaning": "과업, 과제, 임무",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Who's writing the product development proposal?\nM: That assignment hasn't been officially given out.",
      "ko": "여: 제품 개발 제안서를 누가 쓰고 있나요?\n남: 그 업무는 아직 공식적으로 할당되지 않았어요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 3,
    "word": "be assigned to + 동사원형",
    "pos": "",
    "meaning": "~하도록 맡겨지다, 할당되다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Who'll be assigned to lead the marketing team?\nM: The management is deciding that now.",
      "ko": "여: 누가 마케팅 팀을 이끄는 업무를 맡게 될까요?\n남: 경영진이 지금 그걸 결정하고 있어요."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\n「be assigned to + 사람」 ~에게 할당되다\nassign A to B  A를 B에게 할당하다"
   },
   {
    "no": 4,
    "word": "behind schedule",
    "pos": "",
    "meaning": "일정에 뒤처진",
    "derivatives": [],
    "examples": [
     {
      "en": "W: We're running behind schedule and need to make some adjustments to meet the deadline.\nM: Hmm, then I'll assign a few tasks to our intern Jaime so that the workload is spread out between us.",
      "ko": "여: 저희가 일정에 뒤처지고 있어서 기한을 맞추기 위해서는 조정이 필요합니다.\n남: 음, 그럼 인턴사원 제이미에게 몇 가지 일을 맡겨서 업무량이 분산될 수 있도록 하겠습니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\nahead of schedule  일정보다 앞서서"
   },
   {
    "no": 5,
    "word": "have difficulty -ing",
    "pos": "",
    "meaning": "~하는 데 어려움을 겪다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: I'm having difficulty replacing the ink cartridge in the printer. Can you help me out?\nM: Sure thing. I'll be there shortly.",
      "ko": "여: 제가 프린터의 잉크 카트리지를 교체하는 데 어려움을 겪고 있어요. 도와주실 수 있나요?\n남: 물론이죠. 금방 가겠습니다."
     }
    ],
    "quiz": null,
    "tip": "기출 Paraphrasing\nhave difficulty -ing → have a problem[trouble] -ing\n(~하는 데 문제가 있다)"
   },
   {
    "no": 6,
    "word": "commute",
    "pos": "n. / v.",
    "meaning": "통근 / 통근하다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: How long is your commute to work?\nM: Only about 20 minutes by bus.",
      "ko": "여: 통근 시간이 얼마나 걸리나요?\n남: 버스로 약 20분 정도밖에 안 걸립니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 7,
    "word": "be good at",
    "pos": "",
    "meaning": "~에 능통하다, ~을 잘 하다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: I need some visual materials to go along with my sales presentation tomorrow.\nM: Thomas is good at designing slideshows.",
      "ko": "여: 내일 영업 발표 때 같이 사용할 시각 자료가 필요해요.\n남: 토마스가 슬라이드쇼 디자인을 잘 합니다."
     }
    ],
    "quiz": null,
    "tip": "기출 Paraphrasing\nbe good at → be proficient[skilled] at, be familiar with (~에 능통하다)"
   },
   {
    "no": 8,
    "word": "not until + 일시",
    "pos": "",
    "meaning": "~까지는 아니다, ~은 되어야 하다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Hi, I just saw that Parking Lot C is closed. When will it reopen?\nM: Unfortunately, not until next month.",
      "ko": "여: 안녕하세요, 방금 C 주차장이 폐쇄되었다는 걸 봤습니다. 언제 다시 열리나요?\n남: 유감스럽게도, 다음 달은 되어야 합니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\n「not A until + 일시」 ~은 되어야 A하다\nI won't have time until tomorrow.\n난 내일은 되어야 시간이 날 거야."
   },
   {
    "no": 9,
    "word": "be scheduled for + 일시",
    "pos": "",
    "meaning": "~로 예정되어 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Have you had your job interview yet?\nM: No, it's scheduled for Friday.",
      "ko": "여: 혹시 면접 보셨나요?\n남: 아니요, 금요일로 예정되어 있습니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\n「schedule A for + 일시」 A하는 일정을 ~로 잡다\nbe scheduled to do  ~할 예정이다"
   },
   {
    "no": 10,
    "word": "appointment",
    "pos": "n.",
    "meaning": "약속, 예약",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Could I schedule my appointment with Dr. Roy for Friday?\nM: Sorry, he's busy that day.",
      "ko": "여: 로이 박사님과의 진료 예약을 금요일로 잡을 수 있을까요?\n남: 죄송하지만, 박사님은 그날 바쁘세요."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\ndoctor's appointment  진료 예약\ndentist[dental] appointment  치과 예약\nlunch appointment  점심 약속\nmake an appointment  만날 약속을 하다\nmake an appointment with a doctor  진료 예약을 하다"
   },
   {
    "no": 11,
    "word": "due + 일시",
    "pos": "",
    "meaning": "~가 지불 기한인, ~이 마감 기한인",
    "derivatives": [],
    "examples": [
     {
      "en": "W: This assignment is due next week.\nM: I'll get started right away.",
      "ko": "여: 이 과제는 다음 주가 마감입니다.\n남: 바로 시작하겠습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 12,
    "word": "be due to + 동사원형",
    "pos": "",
    "meaning": "~할 예정이다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: When's the safety inspector due to visit our factory?\nM: Wednesday, at the latest.",
      "ko": "여: 우리 공장에 안전 점검관이 언제 방문할 예정입니까?\n남: 늦어도 수요일입니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 13,
    "word": "come up with",
    "pos": "",
    "meaning": "~을 생각해 내다, 떠올리다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Our current sales approach isn't yielding the results we want. We need to come up with a new strategy.\nM: I agree. Let's set up a team meeting to discuss it further.",
      "ko": "여: 우리의 현재 영업 방식은 우리가 원하는 결과를 내지 못하고 있어요. 새로운 전략을 생각해 낼 필요가 있어요.\n남: 동의합니다. 팀 회의를 잡아서 그것에 대해 더 논의해 봅시다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 14,
    "word": "be done",
    "pos": "",
    "meaning": "마치다, 끝내다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Have you finished designing the book cover?\nM: Not yet, but it's almost done.",
      "ko": "여: 책 표지 디자인 끝내셨어요?\n남: 아직이요, 하지만 거의 다 되었어요."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\nget A done  A를 하다, A를 마치다"
   },
   {
    "no": 15,
    "word": "troubleshoot",
    "pos": "v.",
    "meaning": "(컴퓨터의) 문제를 해결하다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: The computer in the conference room isn't working. Could you come and troubleshoot the problem?\nM: I'll be right there.",
      "ko": "여: 회의실에 있는 컴퓨터가 작동하지 않습니다. 오셔서 문제를 해결해 주실 수 있나요?\n남: 곧 가겠습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 16,
    "word": "figure out",
    "pos": "",
    "meaning": "알아내다, 파악하다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: The garden plants look unhealthy.\nM: I'll examine the irrigation system and try to figure out what the problem is.",
      "ko": "여: 정원 식물들이 건강하지 않아 보입니다.\n남: 관개 시스템을 조사해서 어떤 문제가 있는지 알아내겠습니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\nfind out  ~을 발견하다, 알아내다"
   },
   {
    "no": 17,
    "word": "fundraiser",
    "pos": "n.",
    "meaning": "모금 행사",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Would you like to purchase these limited-edition hats with your admission tickets? Our zoo is currently holding a fundraiser to help the local Animal Welfare Institute.\nM: Oh, sure. I'll take two.",
      "ko": "여: 입장권과 함께 이 한정판 모자를 구매하시겠어요? 저희 동물원에서는 현재 지역 동물복지 기관을 돕기 위한 모금 행사를 진행하고 있습니다.\n남: 아, 그럼요. 두 개 살게요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 18,
    "word": "travel arrangements",
    "pos": "",
    "meaning": "여행 준비",
    "derivatives": [],
    "examples": [
     {
      "en": "W: How are your travel arrangements going for your vacation to Maui next month?\nM: I already booked a room at a beachside resort, and I plan to rent a car to get around the island, too.",
      "ko": "여: 다음 달 마우이로 떠나는 휴가 여행 준비는 어떻게 되어 가나요?\n남: 이미 해변 리조트에 방을 예약했고, 차를 빌려서 섬을 돌아다닐 계획입니다."
     }
    ],
    "quiz": null,
    "tip": "숙소 예약, 교통편 마련 등의 일을 통틀어 travel arrangements라고 합니다."
   },
   {
    "no": 19,
    "word": "head",
    "pos": "v.",
    "meaning": "~을 이끌다, 책임지다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Who is heading the committee for the renovation?\nM: Mr. Han is in charge.",
      "ko": "여: 누가 보수작업 위원회를 이끌고 있나요?\n남: 한 씨가 담당합니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\ndepartment head  부서장\n☞ head가 명사로 쓰이면 '우두머리, 장'이라는 뜻입니다."
   },
   {
    "no": 20,
    "word": "measure",
    "pos": "v.",
    "meaning": "~의 치수를 재다, 측정하다",
    "derivatives": [
     {
      "word": "measurement",
      "pos": "n.",
      "meaning": "측정, 치수"
     }
    ],
    "examples": [
     {
      "en": "W: Is this sofa the right size for the living room?\nM: I measured it twice.",
      "ko": "여: 이 소파가 거실에 맞는 사이즈인가요?\n남: 제가 두 번 쟀어요."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\ntake some measurements  치수를 재다"
   },
   {
    "no": 21,
    "word": "be willing to + 동사원형",
    "pos": "",
    "meaning": "기꺼이 ~하다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Would you be willing to give the keynote speech at the conference?\nM: Yes, I'd be happy to.",
      "ko": "여: 학회에서 기조 연설을 해 주시겠어요?\n남: 네, 그럼요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 22,
    "word": "alternative",
    "pos": "n. / a.",
    "meaning": "대안 / 대안의, 대체하는",
    "derivatives": [],
    "examples": [
     {
      "en": "W: With winter approaching, have you considered any indoor activities as an alternative to jogging?\nM: Yes, I'm thinking about joining a yoga class.",
      "ko": "여: 겨울이 다가오는데, 조깅에 대한 대안으로 실내 활동을 고려해 보셨나요?\n남: 네, 저는 요가 수업을 들을까 생각 중입니다."
     },
     {
      "en": "W: We can't use the meeting room right now because a different team is already in there. Do you have any alternative ideas?\nM: How about we go to the tenth floor café area?",
      "ko": "여: 이미 다른 팀이 들어가 있어서 회의실을 이용할 수가 없습니다. 다른 대안이 없을까요?\n남: 10층 카페 구역으로 가는 건 어떨까요?"
     }
    ],
    "quiz": null,
    "tip": "관련 기출\npropose[offer] an alternative  대안을 제시하다\ntake an alternative[alternate] route  다른 길로 가다\nalternative energy  대체 에너지"
   },
   {
    "no": 23,
    "word": "performance",
    "pos": "n.",
    "meaning": "업무 성과",
    "derivatives": [],
    "examples": [
     {
      "en": "M: You deserve the promotion. You consistently receive outstanding performance reviews from other staff members.\nW: Thank you for your kind words.",
      "ko": "남: 당신은 승진할 자격이 있어요. 다른 직원들로부터 꾸준히 우수한 성과 평가를 받고 있잖아요.\n여: 친절한 말씀 감사합니다."
     }
    ],
    "quiz": null,
    "tip": "사람에 대해 쓰이면 '성과', 기기에 대해 쓰이면 '성능'이라는 뜻이 됩니다. 더불어, '공연'이라는 뜻으로도 쓰인다는 것을 알아 두세요."
   },
   {
    "no": 24,
    "word": "be supposed to + 동사원형",
    "pos": "",
    "meaning": "~하기로 되어 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: How is the production schedule looking, Beatrice?\nM: We were supposed to start filming tomorrow, but we're still waiting on some camera equipment to come in, so we might have to postpone it.",
      "ko": "여: 베아트리스, 제작 일정이 어떻게 되어 가나요?\n남: 내일부터 촬영을 시작하기로 했는데, 아직도 카메라 장비가 들어오기를 기다리고 있어서 미뤄야 할 것 같아요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 25,
    "word": "reach out to + 사람",
    "pos": "",
    "meaning": "~에게 연락하다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: I reached out to the illustrator about creating an album cover design for us, but I haven't heard back yet.\nM: Let's give her a few more days.",
      "ko": "여: 일러스트 작가에게 앨범 커버 디자인 제작에 관련해 연락을 했는데, 아직 아무 연락이 없네요.\n남: 며칠만 더 시간을 줍시다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 26,
    "word": "see if\nsee whether",
    "pos": "",
    "meaning": "~인지 알아보다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Wasn't Paul going to join us for lunch?\nM: Yes, I'll see if he's ready.",
      "ko": "여: 폴이 우리와 점심을 같이 하는 거 아니었나요?\n남: 맞아요, 그가 준비 되었는지 알아볼게요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 27,
    "word": "cater",
    "pos": "v.",
    "meaning": "업체를 통해 (행사 등에) 음식을 공급하다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Instead of eating at a restaurant for our team dinner, why don't we rent out a space for the evening and cater some food?\nM: That's a good idea!",
      "ko": "여: 회식 때 식당에서 저녁을 먹지 말고 밤에 공간을 빌려 출장 음식 공급업체에 시키는 게 어때요?\n남: 그거 좋은 생각이군요!"
     }
    ],
    "quiz": null,
    "tip": "관련 기출\ncater the event  행사에 음식을 공급하다\ncatering  (행사·연회 등을 대상으로 하는) 음식 공급\ncaterer  출장 음식 공급 업체"
   },
   {
    "no": 28,
    "word": "be about to + 동사원형",
    "pos": "",
    "meaning": "막 ~하려던 참이다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Do you mind reviewing this document for me?\nM: I was just about to head home.",
      "ko": "여: 이 문서 좀 검토해 주시겠어요?\n남: 지금 막 집에 가려던 참이에요."
     }
    ],
    "quiz": null,
    "tip": "head는 '~로 향하다'라는 뜻의 동사로도 쓰입니다.\nI'm heading to the airport.  나는 공항으로 가는 중이야."
   },
   {
    "no": 29,
    "word": "be concerned that",
    "pos": "",
    "meaning": "~에 대해 걱정하다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Should we take a taxi or ride the bus to the conference?\nM: I'm concerned that if we take the bus, we might be late.",
      "ko": "여: 회의장까지 택시를 타고 갈까요, 아니면 버스를 타고 갈까요?\n남: 버스를 타면 늦을 것 같아서 걱정입니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 30,
    "word": "go ahead with",
    "pos": "",
    "meaning": "~을 진행시키다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Have we received all the summer clothing inventory for sale? I'm wondering if it's okay to begin planning our store layout.\nM: Yes, we have all the new merchandise, so you can go ahead with the setup.",
      "ko": "여: 우리가 세일용 여름 의류 제품 재고품을 다 받았나요? 매장 배치 계획을 세워도 될지 궁금해서요.\n남: 네, 신제품이 다 준비되어 있으니 배치를 진행하시면 됩니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\nproceed with  ~을 진행시키다"
   },
   {
    "no": 31,
    "word": "That's a relief.",
    "pos": "",
    "meaning": "그거 다행이네요.",
    "derivatives": [],
    "examples": [
     {
      "en": "W: I was able to submit our finalized project proposal before the deadline.\nM: That's a relief. I thought it would take us much longer!",
      "ko": "여: 마감기한 전에 최종 프로젝트 제안서를 제출할 수 있었습니다.\n남: 그거 다행이네요. 시간이 훨씬 더 걸릴 줄 알았는데요!"
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 32,
    "word": "reception desk",
    "pos": "",
    "meaning": "접수처, 안내 데스크(= front desk)",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Can I get a map of the hotel's facilities at the reception desk?\nM: Of course you can. Just ask the receptionist.",
      "ko": "여: 안내 데스크에서 호텔 시설 지도를 얻을 수 있나요?\n남: 물론이죠. 안내 직원에게 요청하시면 됩니다."
     }
    ],
    "quiz": null,
    "tip": "receptionist(안내 데스크 직원)도 LC에 매우 자주 등장하는 어휘이므로 함께 알아 두세요."
   },
   {
    "no": 33,
    "word": "I'm afraid",
    "pos": "",
    "meaning": "(부정적인 내용을 말할 때) ~인 것 같아요",
    "derivatives": [],
    "examples": [
     {
      "en": "W: I was considering cutting costs by reducing our marketing budget.\nM: I'm afraid that's not going to work. Our marketing efforts are crucial for maintaining our customer base.",
      "ko": "여: 마케팅 예산을 줄여서 비용을 절감하는 것을 고려하고 있었습니다.\n남: 그건 안 될 것 같습니다. 고객 기반을 유지하기 위해서는 마케팅 활동이 매우 중요합니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\nI'm afraid not.  유감스럽지만 그럴 수 없을 것 같아요."
   },
   {
    "no": 34,
    "word": "down the hall/ street",
    "pos": "",
    "meaning": "복도/길 저쪽에",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Where can I find the closest pharmacy?\nM: A new one just opened down the street from here.",
      "ko": "여: 가장 가까운 약국은 어디에서 찾을 수 있나요?\n남: 여기서 길 저쪽에 새로운 곳이 막 문을 열었어요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 35,
    "word": "leave for the day",
    "pos": "",
    "meaning": "퇴근하다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: When does the cleaning staff leave for the day?\nM: They typically finish at around 6 PM.",
      "ko": "여: 청소부원들은 언제 퇴근하나요?\n남: 보통 오후 6시쯤에 끝납니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 36,
    "word": "I wish I could.",
    "pos": "",
    "meaning": "그럴 수 있으면 좋겠네요.",
    "derivatives": [],
    "examples": [
     {
      "en": "W: I need to assemble 50 boxes today. Could you perhaps help me out?\nM: I wish I could, but I'm a bit busy right now.",
      "ko": "여: 오늘 50박스를 조립해야 해요. 혹시 도와주실 수 있나요?\n남: 저도 그러고 싶지만, 지금 좀 바빠요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 37,
    "word": "That makes sense.",
    "pos": "",
    "meaning": "말이 되네요. 이치에 맞네요.",
    "derivatives": [],
    "examples": [
     {
      "en": "W: The outdoor workshop got postponed to next Thursday.\nM: That makes sense. I heard a storm is going to pass through tomorrow.",
      "ko": "여: 야외 워크숍이 다음 주 목요일로 연기되었습니다.\n남: 그럴 만도 해요. 내일 폭풍이 지나간다고 하던데요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 38,
    "word": "It depends on + 명사",
    "pos": "",
    "meaning": "~에 따라 다르다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: How soon can we initiate the research project?\nM: Well, it depends on the availability of government funding. The anticipated cost estimate may be too high.",
      "ko": "여: 연구 프로젝트를 얼마나 빨리 시작할 수 있을까요?\n남: 글쎄요, 정부 지원금의 이용 가능성에 따라 달라요. 예상되는 비용이 너무 클 수도 있어서요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 39,
    "word": "be up to + 사람",
    "pos": "",
    "meaning": "~에게 달려 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: I've heard rumors about the company's expansion plans. Any idea when we'll get a confirmation?\nM: It'll be up to board members to decide. They're meeting next week to discuss it further.",
      "ko": "여: 회사 확장 계획에 대한 소문을 들었습니다. 언제쯤 확정될까요?\n남: 결정은 이사회 구성원들에게 달려 있습니다. 다음 주에 회의를 해서 더 논의할 예정이라고 합니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 40,
    "word": "buy one, get one free",
    "pos": "",
    "meaning": "1+1, 하나를 사면 하나를 더 주는 판매 방식",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Hi, are these granola bars buy one, get one free?\nM: Yes! If you buy one box of any flavor, you can get another one for free.",
      "ko": "여: 안녕하세요, 이 그래놀라 바는 원 플러스 원인가요?\n남: 네! 어떤 맛이든 한 박스를 구매하시면 무료로 한 박스 더 드립니다."
     }
    ],
    "quiz": null,
    "tip": ""
   }
  ]
 },
 {
  "week": 3,
  "day": 12,
  "part": "Part 5,6",
  "title": "동사 ①",
  "words": [
   {
    "no": 1,
    "word": "require",
    "pos": "v.",
    "meaning": "요구하다, 필요로 하다",
    "derivatives": [
     {
      "word": "required",
      "pos": "a.",
      "meaning": "필수의"
     },
     {
      "word": "requirement",
      "pos": "n.",
      "meaning": "요구 조건, 필수 요건"
     }
    ],
    "examples": [
     {
      "en": "be required to attend",
      "ko": "참석하는 것이 요구되다"
     },
     {
      "en": "be required for online orders",
      "ko": "온라인 주문을 위해 필요하다"
     }
    ],
    "quiz": {
     "sentence": "Employees are ------- to submit travel expense reports for business trips.",
     "a": "acquired",
     "b": "required",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 2,
    "word": "submit",
    "pos": "v.",
    "meaning": "제출하다",
    "derivatives": [
     {
      "word": "submission",
      "pos": "n.",
      "meaning": "제출(물)"
     }
    ],
    "examples": [
     {
      "en": "submit an application to",
      "ko": "~에게 지원서를 제출하다"
     },
     {
      "en": "be submitted by mail",
      "ko": "우편으로 제출되다"
     }
    ],
    "quiz": {
     "sentence": "If you are interested in joining Colleen Cosmetics, please ------- your résumé to the company's head office.",
     "a": "submit",
     "b": "propose",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 3,
    "word": "include",
    "pos": "v.",
    "meaning": "포함하다",
    "derivatives": [
     {
      "word": "including",
      "pos": "prep.",
      "meaning": "~을 포함하여"
     },
     {
      "word": "inclusive",
      "pos": "a.",
      "meaning": "포함된, 포괄적인"
     }
    ],
    "examples": [
     {
      "en": "include a service agreement",
      "ko": "서비스 계약을 포함하다"
     },
     {
      "en": "include one's account number",
      "ko": "계좌번호를 포함하다"
     }
    ],
    "quiz": {
     "sentence": "Please be sure to ------- your e-mail address when registering for the upcoming technology convention.",
     "a": "include",
     "b": "extend",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 4,
    "word": "approve",
    "pos": "v.",
    "meaning": "승인하다",
    "derivatives": [
     {
      "word": "approval",
      "pos": "n.",
      "meaning": "승인"
     }
    ],
    "examples": [
     {
      "en": "approve a plan to do",
      "ko": "~하려는 계획을 승인하다"
     },
     {
      "en": "be approved by the HR department",
      "ko": "인사부에 의해 승인되다"
     }
    ],
    "quiz": {
     "sentence": "Renovation of the hotel's reception area will begin once the owner has ------- the design.",
     "a": "persuaded",
     "b": "approved",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 5,
    "word": "announce",
    "pos": "v.",
    "meaning": "발표하다, 알리다",
    "derivatives": [
     {
      "word": "announcement",
      "pos": "n.",
      "meaning": "발표, 공지"
     }
    ],
    "examples": [
     {
      "en": "announce that",
      "ko": "~라고 발표하다"
     },
     {
      "en": "announce the appointment of",
      "ko": "~의 임명을 알리다"
     }
    ],
    "quiz": {
     "sentence": "Company founder Tim Jeffries is going to ------- his decision to retire during the year-end banquet.",
     "a": "interfere",
     "b": "announce",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 6,
    "word": "ensure",
    "pos": "v.",
    "meaning": "보장하다, 확실히 하다",
    "derivatives": [],
    "examples": [
     {
      "en": "to ensure that",
      "ko": "~라는 것을 보장하기 위해"
     }
    ],
    "quiz": {
     "sentence": "Please ------- that all labels are printed correctly.",
     "a": "ensure",
     "b": "apply",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 7,
    "word": "expect",
    "pos": "v.",
    "meaning": "기대하다, 예상하다",
    "derivatives": [
     {
      "word": "expected",
      "pos": "a.",
      "meaning": "예상되는"
     },
     {
      "word": "expectation",
      "pos": "n.",
      "meaning": "기대, 예상"
     }
    ],
    "examples": [
     {
      "en": "be expected to increase",
      "ko": "증가할 것으로 기대되다"
     },
     {
      "en": "do not expect any problems with",
      "ko": "~에 어떠한 문제가 있을 것이라고 예상하지 못하다"
     }
    ],
    "quiz": {
     "sentence": "Because of the hot and sunny weather, this weekend's beach party is ------- to be busy.",
     "a": "completed",
     "b": "expected",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 8,
    "word": "deliver",
    "pos": "v.",
    "meaning": "배송하다, 전달하다",
    "derivatives": [
     {
      "word": "delivery",
      "pos": "n.",
      "meaning": "배송, 전달"
     }
    ],
    "examples": [
     {
      "en": "deliver one's parcel on time",
      "ko": "소포를 제시간에 배송하다"
     },
     {
      "en": "deliver the invitation in person",
      "ko": "초대장을 직접 전달하다"
     }
    ],
    "quiz": {
     "sentence": "Customers can track their package on the Web site and see the approximate time that the driver will ------- the package.",
     "a": "deliver",
     "b": "observe",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 9,
    "word": "expand",
    "pos": "v.",
    "meaning": "확대하다, 확장하다",
    "derivatives": [
     {
      "word": "expansion",
      "pos": "n.",
      "meaning": "확대, 확장"
     },
     {
      "word": "expanded",
      "pos": "a.",
      "meaning": "넓어진, 확장된"
     }
    ],
    "examples": [
     {
      "en": "expand its delivery service into",
      "ko": "~에까지 배송 서비스를 확대하다"
     },
     {
      "en": "expand its customer base",
      "ko": "자사의 고객층을 확장하다"
     }
    ],
    "quiz": {
     "sentence": "Next year, Allenby Cereals Inc. will ------- its product range in order to attract more customers.",
     "a": "select",
     "b": "expand",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 10,
    "word": "improve",
    "pos": "v.",
    "meaning": "향상시키다, 개선시키다",
    "derivatives": [
     {
      "word": "improvement",
      "pos": "n.",
      "meaning": "향상, 개선"
     }
    ],
    "examples": [
     {
      "en": "improve an applicant's chances of being hired",
      "ko": "지원자의 고용될 기회를 향상시키다"
     },
     {
      "en": "improve the way we serve you",
      "ko": "귀하에게 서비스를 제공하는 방식을 개선시키다"
     }
    ],
    "quiz": {
     "sentence": "Having a qualification in marketing ------- an applicant's chances of being offered a job at our company.",
     "a": "performs",
     "b": "improves",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 11,
    "word": "respond",
    "pos": "v.",
    "meaning": "응답하다, 대응하다(to)",
    "derivatives": [
     {
      "word": "response",
      "pos": "n.",
      "meaning": "응답, 대응"
     },
     {
      "word": "responsive",
      "pos": "a.",
      "meaning": "반응하는"
     }
    ],
    "examples": [
     {
      "en": "respond to all inquiries concerning",
      "ko": "~에 관한 모든 질의에 응답하다"
     },
     {
      "en": "respond to all customer complaints",
      "ko": "모든 고객 불만에 대응하다"
     }
    ],
    "quiz": {
     "sentence": "During the afternoon, the CS Manager often ------- to customer complaints by phone or by e-mail.",
     "a": "responds",
     "b": "applies",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 12,
    "word": "participate",
    "pos": "v.",
    "meaning": "참가하다",
    "derivatives": [
     {
      "word": "participating",
      "pos": "a.",
      "meaning": "참가하는"
     },
     {
      "word": "participant",
      "pos": "n.",
      "meaning": "참가자"
     }
    ],
    "examples": [
     {
      "en": "participate in the charity event",
      "ko": "자선 행사에 참가하다"
     },
     {
      "en": "be invited to participate",
      "ko": "참가하도록 요청받다"
     }
    ],
    "quiz": {
     "sentence": "Over five thousand shoppers were asked to ------- in a short customer survey at Redmond Department Store last month.",
     "a": "write",
     "b": "participate",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 13,
    "word": "recommend",
    "pos": "v.",
    "meaning": "(사람을) 추천하다, (~하도록) 권고하다",
    "derivatives": [
     {
      "word": "recommendation",
      "pos": "n.",
      "meaning": "추천, 권고"
     }
    ],
    "examples": [
     {
      "en": "recommend A as a candidate",
      "ko": "A를 후보자로 추천하다"
     },
     {
      "en": "recommend that all customers change their passwords",
      "ko": "모든 고객들에게 비밀번호를 바꾸도록 권고하다"
     }
    ],
    "quiz": {
     "sentence": "Ezerman Inc. board members ------- Ms. Farley for the promotion to the management team.",
     "a": "settled",
     "b": "recommended",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 14,
    "word": "retain",
    "pos": "v.",
    "meaning": "보관하다, 유지하다",
    "derivatives": [],
    "examples": [
     {
      "en": "retain the receipt for one's records",
      "ko": "기록용으로 영수증을 보관하다"
     },
     {
      "en": "retain a copy of all sales documents",
      "ko": "모든 판매 자료 사본을 보관하다"
     }
    ],
    "quiz": {
     "sentence": "The new company will ------- most of the previous company's branding and promotional materials.",
     "a": "retain",
     "b": "practice",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 15,
    "word": "vary",
    "pos": "v.",
    "meaning": "다르다, 다양하다",
    "derivatives": [
     {
      "word": "variety",
      "pos": "n.",
      "meaning": "다양성"
     },
     {
      "word": "various",
      "pos": "a.",
      "meaning": "다양한"
     }
    ],
    "examples": [
     {
      "en": "vary slightly",
      "ko": "약간 다르다"
     },
     {
      "en": "vary according to",
      "ko": "~에 따라 다양하다"
     }
    ],
    "quiz": {
     "sentence": "Customer opinions about Village Fashion's new clothing line ------- greatly among different age groups.",
     "a": "vary",
     "b": "allow",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 16,
    "word": "operate",
    "pos": "v.",
    "meaning": "운영되다, 운영하다, 작동하다",
    "derivatives": [
     {
      "word": "operation",
      "pos": "n.",
      "meaning": "운영, 작동"
     },
     {
      "word": "operational",
      "pos": "a.",
      "meaning": "가동 중인"
     }
    ],
    "examples": [
     {
      "en": "operate under the name of",
      "ko": "~라는 이름으로 운영되다"
     },
     {
      "en": "operate seven other plants",
      "ko": "7개의 다른 공장들을 운영하다"
     }
    ],
    "quiz": {
     "sentence": "The fast food company currently ------- over 250 restaurants in locations throughout North America.",
     "a": "serves",
     "b": "operates",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 17,
    "word": "distribute",
    "pos": "v.",
    "meaning": "배포하다, 유통하다, 분배하다",
    "derivatives": [
     {
      "word": "distributor",
      "pos": "n.",
      "meaning": "유통업체"
     },
     {
      "word": "distribution",
      "pos": "n.",
      "meaning": "배포, 유통, 분배"
     }
    ],
    "examples": [
     {
      "en": "distribute the meeting materials",
      "ko": "회의 자료를 배포하다"
     },
     {
      "en": "will be distributed to all employees",
      "ko": "모든 직원들에게 분배될 것이다"
     }
    ],
    "quiz": {
     "sentence": "Ms. Jameson asked us to ------- the flyers to shoppers in Westfield Mall.",
     "a": "distribute",
     "b": "relate",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 18,
    "word": "anticipate",
    "pos": "v.",
    "meaning": "예상하다, 기대하다",
    "derivatives": [
     {
      "word": "anticipation",
      "pos": "n.",
      "meaning": "예상, 기대"
     },
     {
      "word": "anticipated",
      "pos": "a.",
      "meaning": "기대하던"
     }
    ],
    "examples": [
     {
      "en": "mistakenly anticipate",
      "ko": "잘못 예상하다"
     },
     {
      "en": "anticipate any supply shortage",
      "ko": "어떠한 공급 부족이라도 발생할 것을 예상하다"
     }
    ],
    "quiz": {
     "sentence": "The retirement of the CEO is ------- to be announced at a press briefing tomorrow.",
     "a": "anticipated",
     "b": "processed",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 19,
    "word": "assist",
    "pos": "v.",
    "meaning": "돕다, 보조하다",
    "derivatives": [
     {
      "word": "assistance",
      "pos": "n.",
      "meaning": "지원, 보조"
     }
    ],
    "examples": [
     {
      "en": "assist A to develop the necessary skills",
      "ko": "A가 필수적인 기술들을 발전시키도록 돕다"
     },
     {
      "en": "assist A in managing accounts",
      "ko": "A가 계좌를 관리하는 것을 보조하다"
     }
    ],
    "quiz": {
     "sentence": "Greenchip Investment ------- entrepreneurs in starting up small businesses in the technology industry.",
     "a": "assists",
     "b": "attracts",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 20,
    "word": "install",
    "pos": "v.",
    "meaning": "설치하다",
    "derivatives": [
     {
      "word": "installation",
      "pos": "n.",
      "meaning": "설치"
     },
     {
      "word": "installment",
      "pos": "n.",
      "meaning": "분할 (납부)"
     }
    ],
    "examples": [
     {
      "en": "install solar panels",
      "ko": "태양 전지판을 설치하다"
     },
     {
      "en": "will be installed automatically",
      "ko": "자동으로 설치될 것이다"
     }
    ],
    "quiz": {
     "sentence": "The stage at the concert hall was built two months ago, but the venue manager ------- the sound system only yesterday.",
     "a": "installed",
     "b": "entered",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 21,
    "word": "consult",
    "pos": "v.",
    "meaning": "(사람에) 상담하다, (자료를) 참조하다",
    "derivatives": [
     {
      "word": "consultation",
      "pos": "n.",
      "meaning": "상담, 참조"
     },
     {
      "word": "consultant",
      "pos": "n.",
      "meaning": "상담가, 자문 위원"
     }
    ],
    "examples": [
     {
      "en": "consult with A",
      "ko": "A와 상담하다"
     },
     {
      "en": "consult the manual",
      "ko": "설명서를 참조하다"
     }
    ],
    "quiz": {
     "sentence": "Please ------- Ms. Anderson's e-mail dated January 8 to check the date and time of your performance review.",
     "a": "inquire",
     "b": "consult",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 22,
    "word": "advise",
    "pos": "v.",
    "meaning": "권고하다, (정식으로) 알리다, 조언하다",
    "derivatives": [
     {
      "word": "advice",
      "pos": "n.",
      "meaning": "조언"
     },
     {
      "word": "advisor",
      "pos": "n.",
      "meaning": "고문"
     },
     {
      "word": "advisory",
      "pos": "a.",
      "meaning": "자문의"
     }
    ],
    "examples": [
     {
      "en": "be advised to check that",
      "ko": "~라는 것을 확인하도록 권고되다"
     },
     {
      "en": "advise A of the changes",
      "ko": "A에게 변경 사항에 대해 알리다"
     }
    ],
    "quiz": {
     "sentence": "International travelers are ------- to arrive at the airport at least 3 hours before their departure time.",
     "a": "advised",
     "b": "criticized",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 23,
    "word": "rely",
    "pos": "v.",
    "meaning": "의존하다(on, upon)",
    "derivatives": [],
    "examples": [
     {
      "en": "rely on outside consultants",
      "ko": "외부 상담가들에 의존하다"
     },
     {
      "en": "rely upon team leaders",
      "ko": "팀 리더들에 의존하다"
     }
    ],
    "quiz": {
     "sentence": "In the past, we ------- branch managers to provide health and safety training to employees.",
     "a": "relied on",
     "b": "stated that",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 24,
    "word": "obtain",
    "pos": "v.",
    "meaning": "얻다, 획득하다",
    "derivatives": [],
    "examples": [
     {
      "en": "obtain a free quote",
      "ko": "무료 견적을 얻다"
     },
     {
      "en": "obtain a commercial driver's license",
      "ko": "사업용 운전 면허를 획득하다"
     }
    ],
    "quiz": {
     "sentence": "King Taco workers can ------- replacements for work uniforms by visiting the personnel office.",
     "a": "obtain",
     "b": "apply",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 25,
    "word": "replace",
    "pos": "v.",
    "meaning": "(사물을) 교체하다, (사람을) 대체하다",
    "derivatives": [
     {
      "word": "replacement",
      "pos": "n.",
      "meaning": "교체, 후임"
     }
    ],
    "examples": [
     {
      "en": "replace our current e-mail system",
      "ko": "우리의 현 이메일 시스템을 교체하다"
     },
     {
      "en": "need to be replaced because",
      "ko": "~ 때문에 교체되어야 하다"
     }
    ],
    "quiz": {
     "sentence": "A spokesperson for Maitland Engineering stated that Barbara Smalling will ------- Craig Stevens as the HR director.",
     "a": "replace",
     "b": "connect",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 26,
    "word": "revise",
    "pos": "v.",
    "meaning": "수정하다, 개정하다",
    "derivatives": [
     {
      "word": "revision",
      "pos": "n.",
      "meaning": "수정, 개정"
     },
     {
      "word": "revised",
      "pos": "a.",
      "meaning": "수정된, 개정된"
     }
    ],
    "examples": [
     {
      "en": "be asked to revise the report",
      "ko": "보고서를 수정하도록 요청받다"
     },
     {
      "en": "revise the dress code",
      "ko": "복장 규정을 개정하다"
     }
    ],
    "quiz": {
     "sentence": "The COO has recently decided to ------- the company's returns and exchanges policy.",
     "a": "refer",
     "b": "revise",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 27,
    "word": "notify",
    "pos": "v.",
    "meaning": "알리다, 통지하다",
    "derivatives": [
     {
      "word": "notification",
      "pos": "n.",
      "meaning": "알림, 통지"
     }
    ],
    "examples": [
     {
      "en": "notify the catering coordinator",
      "ko": "케이터링 담당자에게 알리다"
     },
     {
      "en": "will notify you as soon as your item is ready",
      "ko": "귀하의 물건이 준비되는 대로 통지할 것이다"
     }
    ],
    "quiz": {
     "sentence": "Please ------- Ms. Richards that her reservation of the third floor meeting room has been approved.",
     "a": "present",
     "b": "notify",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 28,
    "word": "seek",
    "pos": "v.",
    "meaning": "~을 찾다, 구하다",
    "derivatives": [],
    "examples": [
     {
      "en": "seek experienced and motivated managers",
      "ko": "경험 많고 의욕적인 관리자들을 찾다"
     },
     {
      "en": "seek advice about the regulation",
      "ko": "규제에 대해 조언을 구하다"
     }
    ],
    "quiz": {
     "sentence": "In order to compete with rival firms, Estro Inc. must ------- new ways to target customers in the 25-35 age range.",
     "a": "seek",
     "b": "focus",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 29,
    "word": "establish",
    "pos": "v.",
    "meaning": "설립하다, 확립하다",
    "derivatives": [
     {
      "word": "established",
      "pos": "a.",
      "meaning": "자리를 확고히 잡은, 인정받는"
     },
     {
      "word": "establishment",
      "pos": "n.",
      "meaning": "설립, 기관"
     }
    ],
    "examples": [
     {
      "en": "establish a new office in Japan",
      "ko": "일본에 새로운 사무실을 설립하다"
     }
    ],
    "quiz": {
     "sentence": "Having just ------- a new branch office in Milan, Romeo Fashion hopes to make a big impact in the European market.",
     "a": "established",
     "b": "enforced",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 30,
    "word": "recognize",
    "pos": "v.",
    "meaning": "(공로 등을, 사실임을) 인정하다, 인지하다",
    "derivatives": [
     {
      "word": "recognizable",
      "pos": "a.",
      "meaning": "알아볼 수 있는"
     },
     {
      "word": "recognition",
      "pos": "n.",
      "meaning": "인정, 인지, 표창"
     }
    ],
    "examples": [
     {
      "en": "recognize innovation in the field of",
      "ko": "~의 분야에서의 혁신을 인정하다"
     },
     {
      "en": "be frequently recognized as a company that",
      "ko": "~인 회사로서 자주 인지되다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Drake will be ------- for his innovative designs when he is awarded the prestigious award later this month.",
     "a": "recognized",
     "b": "permitted",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 31,
    "word": "determine",
    "pos": "v.",
    "meaning": "확정하다, 결정하다, 알아내다",
    "derivatives": [
     {
      "word": "determination",
      "pos": "n.",
      "meaning": "결정, 결심"
     },
     {
      "word": "determined",
      "pos": "a.",
      "meaning": "확고한"
     }
    ],
    "examples": [
     {
      "en": "determine that all problems were solved",
      "ko": "모든 문제가 해결되었음을 확정하다"
     },
     {
      "en": "determine the appropriate size for",
      "ko": "~을 위한 적절한 크기를 알아내다"
     }
    ],
    "quiz": {
     "sentence": "Engineers are still trying to ------- the most efficient way to strengthen the foundations of Selway Bridge.",
     "a": "resolve",
     "b": "determine",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 32,
    "word": "fill",
    "pos": "v.",
    "meaning": "채우다",
    "derivatives": [],
    "examples": [
     {
      "en": "will be filled by the shipping department",
      "ko": "운송부에 의해 채워질 것이다"
     }
    ],
    "quiz": {
     "sentence": "Centracorp has four open technical support positions that we hope to ------- by the end of the month.",
     "a": "fill",
     "b": "inform",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 33,
    "word": "attract",
    "pos": "v.",
    "meaning": "끌어들이다",
    "derivatives": [
     {
      "word": "attraction",
      "pos": "n.",
      "meaning": "매력, 명소"
     }
    ],
    "examples": [
     {
      "en": "attract large crowds",
      "ko": "큰 규모의 관중을 끌어들이다"
     },
     {
      "en": "attract tourists to the city",
      "ko": "관광객들을 그 도시로 끌어들이다"
     }
    ],
    "quiz": {
     "sentence": "With the temperatures soaring this week, many local stores are offering free refreshments to ------- shoppers.",
     "a": "attract",
     "b": "await",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 34,
    "word": "predict",
    "pos": "v.",
    "meaning": "예측하다, 예상하다",
    "derivatives": [
     {
      "word": "predictable",
      "pos": "a.",
      "meaning": "예측할 수 있는"
     },
     {
      "word": "prediction",
      "pos": "n.",
      "meaning": "예측, 예언"
     }
    ],
    "examples": [
     {
      "en": "predict an increase in",
      "ko": "~의 증가를 예측하다"
     }
    ],
    "quiz": {
     "sentence": "Property market experts ------- that house prices in major cities will continue to rise over the next five years.",
     "a": "represent",
     "b": "predict",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 35,
    "word": "implement",
    "pos": "v.",
    "meaning": "시행하다, 실행하다",
    "derivatives": [
     {
      "word": "implementation",
      "pos": "n.",
      "meaning": "시행, 실행"
     }
    ],
    "examples": [
     {
      "en": "implement a new policy",
      "ko": "새로운 정책을 시행하다"
     },
     {
      "en": "implement a recycling program",
      "ko": "재활용 프로그램을 실행하다"
     }
    ],
    "quiz": {
     "sentence": "The new protocols were ------- to ensure the safe disposal of waste from Markton Production's manufacturing plant.",
     "a": "implemented",
     "b": "occupied",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 36,
    "word": "assign",
    "pos": "v.",
    "meaning": "배정하다, 할당하다",
    "derivatives": [
     {
      "word": "assignment",
      "pos": "n.",
      "meaning": "배정, 과제"
     }
    ],
    "examples": [
     {
      "en": "be assigned accounts to manage",
      "ko": "관리할 계정들을 배정받다"
     }
    ],
    "quiz": {
     "sentence": "New recruits undergo a three-month training and probation period before they are ------- full-time positions.",
     "a": "assigned",
     "b": "received",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 37,
    "word": "arrange",
    "pos": "v.",
    "meaning": "준비하다, 계획하다",
    "derivatives": [
     {
      "word": "arrangement",
      "pos": "n.",
      "meaning": "준비, 약속"
     }
    ],
    "examples": [
     {
      "en": "arrange transportation",
      "ko": "교통편을 준비하다"
     },
     {
      "en": "be arranged for A",
      "ko": "A를 위해 계획되다"
     }
    ],
    "quiz": {
     "sentence": "Ms. Kowalski will ------- for Mr. Timmins to tour the new production facility early next month.",
     "a": "arrange",
     "b": "identify",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 38,
    "word": "exceed",
    "pos": "v.",
    "meaning": "(한도를) 초과하다, (양을) 넘다",
    "derivatives": [
     {
      "word": "exceedingly",
      "pos": "ad.",
      "meaning": "극도로"
     },
     {
      "word": "excess",
      "pos": "n.",
      "meaning": "초과, 과잉"
     },
     {
      "word": "excessive",
      "pos": "a.",
      "meaning": "과도한"
     }
    ],
    "examples": [
     {
      "en": "exceed the weight limit",
      "ko": "무게 제한을 초과하다"
     },
     {
      "en": "exceed one's expectations",
      "ko": "기대치를 넘어서다"
     }
    ],
    "quiz": {
     "sentence": "The Burwell MX5 sports car ------- 300 kilometers per hour and demonstrated exceptionally efficient gas mileage.",
     "a": "processed",
     "b": "exceeded",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 39,
    "word": "postpone",
    "pos": "v.",
    "meaning": "연기하다",
    "derivatives": [],
    "examples": [
     {
      "en": "be postponed until December 15",
      "ko": "12월 15일까지 연기되다"
     },
     {
      "en": "postpone the fundraising campaign",
      "ko": "모금 캠페인을 연기하다"
     }
    ],
    "quiz": {
     "sentence": "Due to certain design flaws, the release of our new product has been ------- until June 30.",
     "a": "postponed",
     "b": "confirmed",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 40,
    "word": "acquire",
    "pos": "v.",
    "meaning": "(기업을) 인수하다, 획득하다",
    "derivatives": [
     {
      "word": "acquired",
      "pos": "a.",
      "meaning": "습득한, 후천적인"
     },
     {
      "word": "acquisition",
      "pos": "n.",
      "meaning": "인수"
     }
    ],
    "examples": [
     {
      "en": "recently acquired a company",
      "ko": "최근에 회사를 인수했다"
     },
     {
      "en": "acquire enough points",
      "ko": "충분한 포인트를 획득하다"
     }
    ],
    "quiz": {
     "sentence": "Allen Health Foods Inc. recently ------- three warehouses as part of its efforts to expand its distribution network.",
     "a": "acquired",
     "b": "borrowed",
     "answer": "A"
    },
    "tip": ""
   }
  ]
 },
 {
  "week": 3,
  "day": 13,
  "part": "Part 5,6",
  "title": "동사 ②",
  "words": [
   {
    "no": 1,
    "word": "affect",
    "pos": "v.",
    "meaning": "~에 영향을 미치다",
    "derivatives": [],
    "examples": [
     {
      "en": "will affect the sales of the vendors",
      "ko": "판매사의 매출에 영향을 미칠 것이다"
     }
    ],
    "quiz": {
     "sentence": "If your can of NutriKind Vegetable Juice is not shaken vigorously, it may ------- the taste of the beverage.",
     "a": "affect",
     "b": "assemble",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 2,
    "word": "accommodate",
    "pos": "v.",
    "meaning": "(요구, 조건 등을) 충족하다, (행사, 사람 등을) 수용하다",
    "derivatives": [
     {
      "word": "accommodation",
      "pos": "n.",
      "meaning": "숙박"
     }
    ],
    "examples": [
     {
      "en": "accommodate the increasing demand",
      "ko": "늘어나는 수요를 충족하다"
     },
     {
      "en": "accommodate parties of more than ten people",
      "ko": "10명 이상의 단체를 수용하다"
     }
    ],
    "quiz": {
     "sentence": "BTX Motors is developing hybrid vehicles to ------- the growing demand for vehicles with low energy consumption.",
     "a": "accommodate",
     "b": "experience",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 3,
    "word": "prevent",
    "pos": "v.",
    "meaning": "예방하다, 막다",
    "derivatives": [
     {
      "word": "prevention",
      "pos": "n.",
      "meaning": "예방"
     },
     {
      "word": "preventive",
      "pos": "a.",
      "meaning": "예방의, 예방을 위한"
     }
    ],
    "examples": [
     {
      "en": "prevent damage in shipping",
      "ko": "배송 중 손상을 예방하다"
     },
     {
      "en": "prevent A from -ing",
      "ko": "A가 ~하는 것을 막다"
     }
    ],
    "quiz": {
     "sentence": "Supervisors should ------- employees from taking excessively long breaks unless it is deemed necessary.",
     "a": "realize",
     "b": "prevent",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 4,
    "word": "attribute",
    "pos": "v.",
    "meaning": "~의 원인, 탓으로 돌리다",
    "derivatives": [],
    "examples": [
     {
      "en": "attribute A to B",
      "ko": "A의 원인을 B로 돌리다"
     },
     {
      "en": "be attributed to fierce competition",
      "ko": "치열한 경쟁 탓으로 돌려지다"
     }
    ],
    "quiz": {
     "sentence": "The advertising team at Jaguar Shoes ------- the low sales numbers to the sales division's lack of effort.",
     "a": "suggests",
     "b": "attributes",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 5,
    "word": "donate",
    "pos": "v.",
    "meaning": "기부하다",
    "derivatives": [
     {
      "word": "donation",
      "pos": "n.",
      "meaning": "기부"
     },
     {
      "word": "donor",
      "pos": "n.",
      "meaning": "기부자"
     }
    ],
    "examples": [
     {
      "en": "donate A to B",
      "ko": "A를 B에게 기부하다"
     }
    ],
    "quiz": {
     "sentence": "The director of The Lone Ghost has announced that he will ------- 20% of his earnings from the movie to low-income families.",
     "a": "consume",
     "b": "donate",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 6,
    "word": "perform",
    "pos": "v.",
    "meaning": "수행하다, 실행하다",
    "derivatives": [
     {
      "word": "performance",
      "pos": "n.",
      "meaning": "실행, 성과, 공연"
     }
    ],
    "examples": [
     {
      "en": "perform mandatory maintenance",
      "ko": "의무적인 유지보수 작업을 수행하다"
     }
    ],
    "quiz": {
     "sentence": "Our computer specialists are ready to ------- a variety of upgrades to keep our customers' machines operating optimally.",
     "a": "perceive",
     "b": "perform",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 7,
    "word": "coordinate",
    "pos": "v.",
    "meaning": "조정하다, 잘 어울리다",
    "derivatives": [
     {
      "word": "coordination",
      "pos": "n.",
      "meaning": "조정, 조화"
     }
    ],
    "examples": [
     {
      "en": "coordinate the activities of several departments",
      "ko": "여러 부서들의 활동을 조정하다"
     }
    ],
    "quiz": {
     "sentence": "In his current role, Mr. Hooper is responsible for ------- the projects of several departments.",
     "a": "coordinating",
     "b": "intending",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 8,
    "word": "adjust",
    "pos": "v.",
    "meaning": "조절하다, 조정하다",
    "derivatives": [
     {
      "word": "adjustment",
      "pos": "n.",
      "meaning": "조절, 조정"
     },
     {
      "word": "adjustable",
      "pos": "a.",
      "meaning": "조절할 수 있는"
     }
    ],
    "examples": [
     {
      "en": "adjust the height",
      "ko": "높이를 조절하다"
     },
     {
      "en": "arrange for the deadline to be adjusted",
      "ko": "마감일이 조정되도록 준비하다"
     }
    ],
    "quiz": {
     "sentence": "In some circumstances, the front desk staff may be able to arrange for the check-out time to be -------.",
     "a": "reached",
     "b": "adjusted",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 9,
    "word": "resolve",
    "pos": "v.",
    "meaning": "해결하다",
    "derivatives": [
     {
      "word": "resolution",
      "pos": "n.",
      "meaning": "해결"
     }
    ],
    "examples": [
     {
      "en": "identify and resolve problems",
      "ko": "문제를 찾아 해결하다"
     },
     {
      "en": "resolve customer problems",
      "ko": "고객 문제를 해결하다"
     }
    ],
    "quiz": {
     "sentence": "Ms. Kim's duties include responding to and ------- complaints from customers.",
     "a": "introducing",
     "b": "resolving",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 10,
    "word": "acknowledge",
    "pos": "v.",
    "meaning": "수령을 확인하다, 인정하다",
    "derivatives": [
     {
      "word": "acknowledgement",
      "pos": "n.",
      "meaning": "시인, 인정"
     }
    ],
    "examples": [
     {
      "en": "acknowledge receipt of the document",
      "ko": "문서의 수령을 확인하다"
     }
    ],
    "quiz": {
     "sentence": "I am writing this e-mail to ------- receipt of your application for the position.",
     "a": "acknowledge",
     "b": "suggest",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 11,
    "word": "enhance",
    "pos": "v.",
    "meaning": "향상시키다, 강화하다",
    "derivatives": [
     {
      "word": "enhancement",
      "pos": "n.",
      "meaning": "향상, 강화"
     }
    ],
    "examples": [
     {
      "en": "enhance the guest experience",
      "ko": "투숙객의 경험을 향상시키다"
     },
     {
      "en": "enhance the landscape",
      "ko": "조경을 강화하다"
     }
    ],
    "quiz": {
     "sentence": "Lumoflow Technology's Super Bright Lighting is guaranteed to ------- any workspace.",
     "a": "enhance",
     "b": "illustrate",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 12,
    "word": "negotiate",
    "pos": "v.",
    "meaning": "협상하다, 협의하다",
    "derivatives": [
     {
      "word": "negotiation",
      "pos": "n.",
      "meaning": "협상, 협의"
     }
    ],
    "examples": [
     {
      "en": "be willing to negotiate",
      "ko": "기꺼이 협상하다"
     },
     {
      "en": "negotiate with the owner",
      "ko": "소유자와 협의하다"
     }
    ],
    "quiz": {
     "sentence": "As the manager of the personnel department, Mr. Mackey will recruit new staff and ------- salaries with them.",
     "a": "negotiate",
     "b": "assign",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 13,
    "word": "certify",
    "pos": "v.",
    "meaning": "인증하다, 보증하다",
    "derivatives": [
     {
      "word": "certified",
      "pos": "a.",
      "meaning": "인증 받은, 공인된"
     },
     {
      "word": "certificate",
      "pos": "n.",
      "meaning": "인증서, 자격증"
     },
     {
      "word": "certification",
      "pos": "n.",
      "meaning": "인증, 증명"
     }
    ],
    "examples": [
     {
      "en": "certify that all specifications are met",
      "ko": "모든 사양을 충족하는 것을 인증하다"
     }
    ],
    "quiz": {
     "sentence": "After safety inspectors ------- that all requirements are met, the factory will begin production.",
     "a": "certify",
     "b": "associate",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 14,
    "word": "demonstrate",
    "pos": "v.",
    "meaning": "시연하다, 입증하다",
    "derivatives": [
     {
      "word": "demonstration",
      "pos": "n.",
      "meaning": "시연, 입증"
     }
    ],
    "examples": [
     {
      "en": "demonstrate how to use the program",
      "ko": "그 프로그램을 사용하는 방법을 시연하다"
     },
     {
      "en": "demonstrate one's commitment",
      "ko": "~의 헌신을 입증하다"
     }
    ],
    "quiz": {
     "sentence": "Flight attendants must be able to ------- how to put on a life vest correctly.",
     "a": "implement",
     "b": "demonstrate",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 15,
    "word": "collaborate",
    "pos": "v.",
    "meaning": "협력하다",
    "derivatives": [
     {
      "word": "collaborative",
      "pos": "a.",
      "meaning": "협력하는"
     },
     {
      "word": "collaboratively",
      "pos": "ad.",
      "meaning": "협력하여"
     }
    ],
    "examples": [
     {
      "en": "collaborate with",
      "ko": "~와 협력하다"
     },
     {
      "en": "collaborate on a study",
      "ko": "한 연구에 대해 협력하다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Teale hopes to ------- more frequently with Ms. Easton now that their offices are located on the same floor.",
     "a": "establish",
     "b": "collaborate",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 16,
    "word": "finalize",
    "pos": "v.",
    "meaning": "마무리하다",
    "derivatives": [
     {
      "word": "finalized",
      "pos": "a.",
      "meaning": "마무리된, 완결된"
     }
    ],
    "examples": [
     {
      "en": "finalize the details of",
      "ko": "~의 세부사항들을 마무리하다"
     },
     {
      "en": "finalize the decision",
      "ko": "결정을 마무리하다"
     }
    ],
    "quiz": {
     "sentence": "Ms. Hogg still has to ------- several details for the year-end party, such as the dinner menu and the entertainment.",
     "a": "finalize",
     "b": "treat",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 17,
    "word": "assess",
    "pos": "v.",
    "meaning": "평가하다",
    "derivatives": [
     {
      "word": "assessment",
      "pos": "n.",
      "meaning": "평가"
     }
    ],
    "examples": [
     {
      "en": "assess the problems",
      "ko": "문제들을 평가하다"
     },
     {
      "en": "assess one's progress",
      "ko": "~의 진척도를 평가하다"
     }
    ],
    "quiz": {
     "sentence": "The city of Lornten will send out plumbers to ------- the water supply problems that residents are experiencing.",
     "a": "assess",
     "b": "distribute",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 18,
    "word": "surpass",
    "pos": "v.",
    "meaning": "능가하다, 뛰어넘다",
    "derivatives": [],
    "examples": [
     {
      "en": "surpass one's sales goals",
      "ko": "~의 매출 목표를 능가하다"
     }
    ],
    "quiz": {
     "sentence": "The number of new subscribers this year has ------- the number projected back in January.",
     "a": "preceded",
     "b": "surpassed",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 19,
    "word": "prohibit",
    "pos": "v.",
    "meaning": "금지하다",
    "derivatives": [
     {
      "word": "prohibition",
      "pos": "n.",
      "meaning": "금지"
     }
    ],
    "examples": [
     {
      "en": "prohibit parking on the street",
      "ko": "거리에서의 주차를 금지하다"
     },
     {
      "en": "be prohibited throughout",
      "ko": "~ 전역에서 금지되다"
     }
    ],
    "quiz": {
     "sentence": "Visitors are reminded that flash photography is strictly ------- throughout the art gallery.",
     "a": "prohibited",
     "b": "bothered",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 20,
    "word": "contain",
    "pos": "v.",
    "meaning": "포함하다",
    "derivatives": [],
    "examples": [
     {
      "en": "contain information on",
      "ko": "~에 대한 정보를 포함하다"
     }
    ],
    "quiz": {
     "sentence": "Account passwords should not ------- easily guessable information such as birthdates.",
     "a": "differ",
     "b": "contain",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 21,
    "word": "coincide",
    "pos": "v.",
    "meaning": "시점이 겹치다(with)",
    "derivatives": [],
    "examples": [
     {
      "en": "coincide with Mr. Smith's business trip",
      "ko": "스미스 씨의 출장과 시점이 겹치다"
     },
     {
      "en": "coincide with the fair",
      "ko": "박람회와 시점이 겹치다"
     }
    ],
    "quiz": {
     "sentence": "The Chicago conference date conveniently ------- with Mr. Wilmore's meeting with a client in the city.",
     "a": "collaborates",
     "b": "coincides",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 22,
    "word": "strive",
    "pos": "v.",
    "meaning": "노력하다",
    "derivatives": [],
    "examples": [
     {
      "en": "strive to maintain its position in the market",
      "ko": "시장에서 그 위치를 유지하도록 노력하다"
     },
     {
      "en": "strive to recognize the achievement of",
      "ko": "~의 성과를 인지하도록 노력하다"
     }
    ],
    "quiz": {
     "sentence": "Ms. Quincy always ------- to motivate her workers to meet their sales targets.",
     "a": "strives",
     "b": "states",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 23,
    "word": "reveal",
    "pos": "v.",
    "meaning": "공개하다, 발표하다, (연구, 조사가) 결과를 보여주다",
    "derivatives": [],
    "examples": [
     {
      "en": "reveal the plan for",
      "ko": "~을 위한 계획을 공개하다"
     },
     {
      "en": "reveal a strong preference for SUVs over sedans",
      "ko": "세단보다 SUV에 대한 강력한 선호를 보여주다"
     }
    ],
    "quiz": {
     "sentence": "A recent study ------- that people who eat breakfast regularly tend to be healthier than those who skip breakfast.",
     "a": "admits",
     "b": "reveals",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 24,
    "word": "represent",
    "pos": "v.",
    "meaning": "대표하다, 대변하다, 나타내다",
    "derivatives": [
     {
      "word": "representative",
      "pos": "n.",
      "meaning": "직원, 대표"
     }
    ],
    "examples": [
     {
      "en": "will represent the company in Canada",
      "ko": "캐나다에서 회사를 대표할 것이다"
     },
     {
      "en": "represent a significant advance over",
      "ko": "~에 비해 중대한 발전을 나타내다"
     }
    ],
    "quiz": {
     "sentence": "Scientist Jill Goldstein will ------- Rapido Corporation at the environmental conference next week.",
     "a": "represent",
     "b": "compete",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 25,
    "word": "argue",
    "pos": "v.",
    "meaning": "주장하다",
    "derivatives": [
     {
      "word": "argument",
      "pos": "n.",
      "meaning": "주장, 논리"
     },
     {
      "word": "arguably",
      "pos": "ad.",
      "meaning": "거의 틀림없이"
     }
    ],
    "examples": [
     {
      "en": "Some critics argue that ~.",
      "ko": "몇몇 비평가들은 ~라고 주장한다."
     }
    ],
    "quiz": {
     "sentence": "Some analysts ------- that the company's plan to expand into the automobile industry will fail.",
     "a": "cite",
     "b": "argue",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 26,
    "word": "patronize",
    "pos": "v.",
    "meaning": "단골로 이용하다",
    "derivatives": [
     {
      "word": "patron",
      "pos": "n.",
      "meaning": "(단골) 손님"
     },
     {
      "word": "patronage",
      "pos": "n.",
      "meaning": "단골 거래, 애용"
     }
    ],
    "examples": [
     {
      "en": "be likely to patronize stores with",
      "ko": "~을 가진 매장들을 단골로 이용할 것 같다"
     }
    ],
    "quiz": {
     "sentence": "Market research indicates that customers are more likely to ------- stores that sell reliable products at reasonable prices.",
     "a": "verbalize",
     "b": "patronize",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 27,
    "word": "recover",
    "pos": "v.",
    "meaning": "회복하다, 복구하다",
    "derivatives": [
     {
      "word": "recovery",
      "pos": "n.",
      "meaning": "회복, 복구"
     }
    ],
    "examples": [
     {
      "en": "fully recover from the economic difficulties",
      "ko": "경기 불황에서 완전히 회복하다"
     }
    ],
    "quiz": {
     "sentence": "The extent to which the firm has ------- from its financial difficulties will become clear over the next few weeks.",
     "a": "endured",
     "b": "recovered",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 28,
    "word": "evolve",
    "pos": "v.",
    "meaning": "발전하다, 진화하다",
    "derivatives": [
     {
      "word": "evolution",
      "pos": "n.",
      "meaning": "진화"
     }
    ],
    "examples": [
     {
      "en": "evolve from a small local band",
      "ko": "지역의 작은 밴드에서 발전하다"
     },
     {
      "en": "evolve beyond the traditional role",
      "ko": "전통적인 역할을 넘어 진화하다"
     }
    ],
    "quiz": {
     "sentence": "The city has ------- beyond its traditional role as a stopover location into a major tourist destination.",
     "a": "focused",
     "b": "evolved",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 29,
    "word": "utilize",
    "pos": "v.",
    "meaning": "이용하다, 활용하다",
    "derivatives": [
     {
      "word": "utilization",
      "pos": "n.",
      "meaning": "이용, 활용"
     }
    ],
    "examples": [
     {
      "en": "be utilized throughout the process",
      "ko": "과정 전반에 걸쳐 이용되다"
     }
    ],
    "quiz": {
     "sentence": "Robot technology has been ------- in various sectors, such as the manufacturing and medical industries.",
     "a": "utilized",
     "b": "assembled",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 30,
    "word": "prolong",
    "pos": "v.",
    "meaning": "(기한을) 연장하다",
    "derivatives": [
     {
      "word": "prolonged",
      "pos": "a.",
      "meaning": "장기적인, 오랜"
     }
    ],
    "examples": [
     {
      "en": "undergo regular maintenance to prolong the life of the vehicle",
      "ko": "차량의 수명을 연장하기 위해 정기적인 유지보수를 받다"
     }
    ],
    "quiz": {
     "sentence": "The device should always be turned off when not in use to ------- the life of battery.",
     "a": "enlarge",
     "b": "prolong",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 31,
    "word": "alleviate",
    "pos": "v.",
    "meaning": "경감하다, 완화하다",
    "derivatives": [
     {
      "word": "alleviation",
      "pos": "n.",
      "meaning": "경감, 완화"
     }
    ],
    "examples": [
     {
      "en": "do little to alleviate concerns about",
      "ko": "~에 대한 우려를 경감하는 데 거의 도움이 되지 않다"
     },
     {
      "en": "in an effort to alleviate congestion",
      "ko": "혼잡을 완화하려는 노력의 일환으로"
     }
    ],
    "quiz": {
     "sentence": "The slight decrease in traffic congestion has done little to ------- concerns about the city's transportation systems.",
     "a": "confiscate",
     "b": "alleviate",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 32,
    "word": "place",
    "pos": "v.",
    "meaning": "배치하다, 놓다",
    "derivatives": [
     {
      "word": "placement",
      "pos": "n.",
      "meaning": "배치"
     }
    ],
    "examples": [
     {
      "en": "must be placed by March 18",
      "ko": "3월 18일까지 배치되어야 하다"
     }
    ],
    "quiz": {
     "sentence": "Please note that used batteries should be ------- in a clear plastic bag and left next to the recycle bin.",
     "a": "declined",
     "b": "placed",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 33,
    "word": "account",
    "pos": "v.",
    "meaning": "설명하다(for)",
    "derivatives": [
     {
      "word": "accounting",
      "pos": "n.",
      "meaning": "회계(학)"
     },
     {
      "word": "accountant",
      "pos": "n.",
      "meaning": "회계사"
     },
     {
      "word": "accountable",
      "pos": "a.",
      "meaning": "책임이 있는"
     }
    ],
    "examples": [
     {
      "en": "account for the increase in",
      "ko": "~에서의 증가를 설명하다"
     }
    ],
    "quiz": {
     "sentence": "The freezing temperatures ------- for the low turnout at today's outdoor music festival.",
     "a": "account",
     "b": "state",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 34,
    "word": "inform",
    "pos": "v.",
    "meaning": "~에게 알리다, 통지하다",
    "derivatives": [
     {
      "word": "information",
      "pos": "n.",
      "meaning": "정보"
     },
     {
      "word": "informative",
      "pos": "a.",
      "meaning": "유익한"
     }
    ],
    "examples": [
     {
      "en": "inform the building manager that",
      "ko": "건물 관리인에게 ~라고 알리다"
     }
    ],
    "quiz": {
     "sentence": "Please ------- the accounting department of your working hours before the end of the week.",
     "a": "inform",
     "b": "invite",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 35,
    "word": "undergo",
    "pos": "v.",
    "meaning": "겪다, 경험하다",
    "derivatives": [],
    "examples": [
     {
      "en": "undergo renovations",
      "ko": "보수공사를 겪다"
     },
     {
      "en": "undergo a full review",
      "ko": "완전한 검토를 경험하다"
     }
    ],
    "quiz": {
     "sentence": "Daisy Restaurant will be ------- extensive remodeling as it seeks to attract more diners.",
     "a": "dealing",
     "b": "undergoing",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 36,
    "word": "enlarge",
    "pos": "v.",
    "meaning": "확장하다",
    "derivatives": [],
    "examples": [
     {
      "en": "a plan to enlarge the sales division",
      "ko": "영업부를 확장하는 계획"
     }
    ],
    "quiz": {
     "sentence": "The CEO recently announced a proposal to ------- the company's human resources department.",
     "a": "enlarge",
     "b": "declare",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 37,
    "word": "remain",
    "pos": "v.",
    "meaning": "(~인 상태를) 유지하다, 남다",
    "derivatives": [
     {
      "word": "remaining",
      "pos": "a.",
      "meaning": "남아 있는"
     },
     {
      "word": "remainder",
      "pos": "n.",
      "meaning": "나머지"
     }
    ],
    "examples": [
     {
      "en": "remain the same",
      "ko": "같은 상태를 유지하다"
     },
     {
      "en": "remain the top holiday destination",
      "ko": "최고 휴양지의 입지를 유지하다"
     }
    ],
    "quiz": {
     "sentence": "Despite the considerable growth in sales this quarter, Magenta Electronics' profits have ------- the same.",
     "a": "raised",
     "b": "remained",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 38,
    "word": "appoint",
    "pos": "v.",
    "meaning": "임명하다",
    "derivatives": [
     {
      "word": "appointed",
      "pos": "a.",
      "meaning": "임명된, 예정된"
     },
     {
      "word": "appointment",
      "pos": "n.",
      "meaning": "임명, 약속"
     }
    ],
    "examples": [
     {
      "en": "appoint a new financial manager",
      "ko": "신임 재무부장을 임명하다"
     },
     {
      "en": "be appointed as",
      "ko": "~로 임명되다"
     }
    ],
    "quiz": {
     "sentence": "The board of directors has ------- Mr. Lewinson as the new Chief Operations Officer, replacing retiring Mr. Simons.",
     "a": "invested",
     "b": "appointed",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 39,
    "word": "encourage",
    "pos": "v.",
    "meaning": "격려하다, 권고하다, 촉진하다",
    "derivatives": [
     {
      "word": "encouragement",
      "pos": "n.",
      "meaning": "격려, 권고"
     }
    ],
    "examples": [
     {
      "en": "encourage employees to submit ideas",
      "ko": "직원들에게 아이디어를 제출하도록 격려하다"
     },
     {
      "en": "encourage a healthy lifestyle",
      "ko": "건강한 생활방식을 권고하다"
     }
    ],
    "quiz": {
     "sentence": "To ensure a spot at the training workshop, we ------- interested individuals to register by Friday, April 16.",
     "a": "encourage",
     "b": "provide",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 40,
    "word": "monitor",
    "pos": "v.",
    "meaning": "관찰하다, 감시하다",
    "derivatives": [
     {
      "word": "monitoring",
      "pos": "n.",
      "meaning": "관찰, 감시"
     }
    ],
    "examples": [
     {
      "en": "monitor the temperature",
      "ko": "기온을 관찰하다"
     },
     {
      "en": "monitor unplanned expenditures",
      "ko": "계획에 없던 지출을 감시하다"
     }
    ],
    "quiz": {
     "sentence": "FitTek Inc. has developed a new range of smartwatches that can ------- the heart rate and blood pressure of wearers.",
     "a": "monitor",
     "b": "reserve",
     "answer": "A"
    },
    "tip": ""
   }
  ]
 },
 {
  "week": 3,
  "day": 14,
  "part": "Part 5,6",
  "title": "동사 + 명사 콜로케이션",
  "words": [
   {
    "no": 1,
    "word": "meet the expectations",
    "pos": "",
    "meaning": "기대를 충족하다",
    "derivatives": [],
    "examples": [
     {
      "en": "meet the needs of",
      "ko": "~의 필요를 충족하다"
     },
     {
      "en": "meet the qualifications",
      "ko": "자격요건을 충족하다"
     }
    ],
    "quiz": {
     "sentence": "Despite an extensive marketing campaign, sales of the new Elba mobile phone did not ------- consumers' expectations.",
     "a": "meet",
     "b": "seem",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 2,
    "word": "institute a policy",
    "pos": "",
    "meaning": "정책을 도입하다",
    "derivatives": [],
    "examples": [
     {
      "en": "institute a minimum fee for delivery",
      "ko": "배달에 대한 최소 요금을 도입하다"
     }
    ],
    "quiz": {
     "sentence": "Trinket Corporation has ------- a policy that provides financial incentives to boost worker morale in its offices.",
     "a": "instituted",
     "b": "proved",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 3,
    "word": "reduce expenses",
    "pos": "",
    "meaning": "비용을 줄이다",
    "derivatives": [],
    "examples": [
     {
      "en": "reduce erosion",
      "ko": "침식을 줄이다"
     },
     {
      "en": "reduce the volume of",
      "ko": "~의 분량을 줄이다"
     }
    ],
    "quiz": {
     "sentence": "SJ Electronics has ------- expenses by 30 percent after upgrading its fleet of vehicles.",
     "a": "examined",
     "b": "reduced",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 4,
    "word": "lead a seminar",
    "pos": "",
    "meaning": "세미나를 이끌다",
    "derivatives": [],
    "examples": [
     {
      "en": "lead a tour of",
      "ko": "~의 견학을 이끌다"
     },
     {
      "en": "lead the company",
      "ko": "회사를 이끌다"
     }
    ],
    "quiz": {
     "sentence": "Bob Mitchell, the call center manager, will ------- a seminar on customer service next Wednesday.",
     "a": "lead",
     "b": "charge",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 5,
    "word": "indicate a preference",
    "pos": "",
    "meaning": "선호도를 나타내다, 표시하다",
    "derivatives": [],
    "examples": [
     {
      "en": "indicate a need to do",
      "ko": "~할 필요성을 나타내다"
     },
     {
      "en": "indicate one's height",
      "ko": "~의 키를 표시하다"
     }
    ],
    "quiz": {
     "sentence": "The comments on the feedback forms ------- a high preference for vegan-friendly dishes on our menus.",
     "a": "advise",
     "b": "indicate",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 6,
    "word": "extend an offer",
    "pos": "",
    "meaning": "제안하다",
    "derivatives": [],
    "examples": [
     {
      "en": "extend the service contract",
      "ko": "서비스 계약을 연장하다"
     },
     {
      "en": "extend the warranty",
      "ko": "보증기간을 연장하다"
     }
    ],
    "quiz": {
     "sentence": "The company founder ------- an offer to all shareholders to take a tour of the new factory.",
     "a": "extended",
     "b": "assigned",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 7,
    "word": "reject a proposal",
    "pos": "",
    "meaning": "제안을 거절하다",
    "derivatives": [],
    "examples": [
     {
      "en": "reject the claim",
      "ko": "주장을 거절하다"
     },
     {
      "en": "reject a plan",
      "ko": "계획을 거절하다"
     }
    ],
    "quiz": {
     "sentence": "Because of the large number of advance ticket sales, Ms. Potter ------- a proposal to postpone the music festival.",
     "a": "inquired",
     "b": "rejected",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 8,
    "word": "attend the training session",
    "pos": "",
    "meaning": "교육 시간에 참석하다",
    "derivatives": [],
    "examples": [
     {
      "en": "attend the meeting",
      "ko": "회의에 참석하다"
     },
     {
      "en": "attend development seminars",
      "ko": "개발 세미나에 참석하다"
     }
    ],
    "quiz": {
     "sentence": "All new recruits must ------- the training session before reporting to their respective department managers.",
     "a": "attend",
     "b": "invite",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 9,
    "word": "accept applications",
    "pos": "",
    "meaning": "지원서를 받다",
    "derivatives": [],
    "examples": [
     {
      "en": "accept telephone cards",
      "ko": "전화 카드를 받다"
     },
     {
      "en": "accept assistance",
      "ko": "도움을 받다"
     },
     {
      "en": "accept bids",
      "ko": "입찰을 받다"
     }
    ],
    "quiz": {
     "sentence": "Biosense Inc. is now ------- applications for the research scientist position at its laboratory.",
     "a": "accepting",
     "b": "running",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 10,
    "word": "renew an agreement",
    "pos": "",
    "meaning": "약정을 갱신하다",
    "derivatives": [],
    "examples": [
     {
      "en": "renew a contract",
      "ko": "계약을 갱신하다"
     },
     {
      "en": "renew your membership",
      "ko": "귀하의 회원권을 갱신하다"
     },
     {
      "en": "renew your subscription",
      "ko": "귀하의 구독을 갱신하다"
     }
    ],
    "quiz": {
     "sentence": "Mizeno Graphic Design has decided to ------- an agreement with Rocco Corporate Catering.",
     "a": "proceed",
     "b": "renew",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 11,
    "word": "confirm an appointment",
    "pos": "",
    "meaning": "예약을 확정하다",
    "derivatives": [],
    "examples": [
     {
      "en": "confirm a patient's prescription",
      "ko": "환자의 처방을 확정하다"
     },
     {
      "en": "confirm receipt of the invoice",
      "ko": "송장의 수령을 확정하다"
     }
    ],
    "quiz": {
     "sentence": "Please ------- your appointment by phone or e-mail before arriving at Riddick Health Clinic.",
     "a": "confirm",
     "b": "remind",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 12,
    "word": "undergo restructuring",
    "pos": "",
    "meaning": "구조조정을 하다",
    "derivatives": [],
    "examples": [
     {
      "en": "undergo a committee review",
      "ko": "위원회 검토를 하다"
     },
     {
      "en": "undergo renovations",
      "ko": "보수공사를 하다"
     }
    ],
    "quiz": {
     "sentence": "Ealing Publishing Co. will ------- restructuring in order to improve its productivity.",
     "a": "resupply",
     "b": "undergo",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 13,
    "word": "improve a chance",
    "pos": "",
    "meaning": "기회를 향상시키다",
    "derivatives": [],
    "examples": [
     {
      "en": "improve sales results",
      "ko": "영업 결과를 향상시키다"
     },
     {
      "en": "improve work conditions",
      "ko": "근무 조건을 개선하다"
     }
    ],
    "quiz": {
     "sentence": "Being fluent in at least two languages ------- the chances of being hired by Royston Travel Agency.",
     "a": "improves",
     "b": "achieves",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 14,
    "word": "deserve high-quality service",
    "pos": "",
    "meaning": "높은 품질의 서비스를 받을 자격이 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "deserve a promotion",
      "ko": "승진할 자격이 있다"
     }
    ],
    "quiz": {
     "sentence": "Whether flying in economy or first class, Alpine Airlines passengers ------- high-quality service.",
     "a": "satisfy",
     "b": "deserve",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 15,
    "word": "review the manuals",
    "pos": "",
    "meaning": "설명서를 검토하다",
    "derivatives": [],
    "examples": [
     {
      "en": "review the enclosed instructions",
      "ko": "동봉된 설명서를 검토하다"
     },
     {
      "en": "review proposals",
      "ko": "제안서를 검토하다"
     }
    ],
    "quiz": {
     "sentence": "To avoid any confusion, all users should ------- the manuals before they start the program.",
     "a": "decide",
     "b": "review",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 16,
    "word": "express appreciation",
    "pos": "",
    "meaning": "감사를 표하다",
    "derivatives": [],
    "examples": [
     {
      "en": "express concern",
      "ko": "우려를 표하다"
     },
     {
      "en": "express interest",
      "ko": "관심을 표하다"
     }
    ],
    "quiz": {
     "sentence": "At the charity fundraising event, several organization members ------- their appreciation for Mr. Donaldson's generous donation.",
     "a": "expressed",
     "b": "thanked",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 17,
    "word": "resolve problems",
    "pos": "",
    "meaning": "문제를 해결하다",
    "derivatives": [],
    "examples": [
     {
      "en": "resolve scheduling conflicts",
      "ko": "일정 충돌을 해결하다"
     },
     {
      "en": "resolve the matter",
      "ko": "사안을 해결하다"
     }
    ],
    "quiz": {
     "sentence": "The customer service team at Spritz Department Store are trained to ------- problems promptly and efficiently.",
     "a": "set",
     "b": "resolve",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 18,
    "word": "demonstrate the capability",
    "pos": "",
    "meaning": "능력을 보여주다",
    "derivatives": [],
    "examples": [
     {
      "en": "demonstrate the method of",
      "ko": "~의 방법을 보여주다"
     },
     {
      "en": "demonstrate its commitment to",
      "ko": "~에의 헌신을 보여주다"
     }
    ],
    "quiz": {
     "sentence": "Engineers from Dayatsu Motors will ------- the capabilities of their new luxury sedan at the upcoming International Auto Show.",
     "a": "tolerate",
     "b": "demonstrate",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 19,
    "word": "sign an agreement",
    "pos": "",
    "meaning": "약정에 서명하다",
    "derivatives": [],
    "examples": [
     {
      "en": "sign a 12-month lease",
      "ko": "12개월 임대계약에 서명하다"
     },
     {
      "en": "sign an employment contract",
      "ko": "고용계약에 서명하다"
     }
    ],
    "quiz": {
     "sentence": "Next Thursday, the chief operating officers of both firms will ------- an agreement about the joint venture.",
     "a": "inform",
     "b": "sign",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 20,
    "word": "expedite the process",
    "pos": "",
    "meaning": "처리를 신속하게 하다",
    "derivatives": [],
    "examples": [
     {
      "en": "expedite Mr. Yoon's order",
      "ko": "윤 씨의 주문을 신속하게 처리하다"
     }
    ],
    "quiz": {
     "sentence": "To ------- the process, simply click on express shipping on the checkout Web page.",
     "a": "expedite",
     "b": "acquire",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 21,
    "word": "address the issue",
    "pos": "",
    "meaning": "문제를 다루다",
    "derivatives": [],
    "examples": [
     {
      "en": "address concerns about budget proposals",
      "ko": "예산안에 대한 우려를 다루다"
     },
     {
      "en": "address customer requests",
      "ko": "고객 요청사항을 처리하다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Barnes will make himself available between 1 PM and 4 PM today to ------- the issue regarding the new wage structure.",
     "a": "address",
     "b": "allow",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 22,
    "word": "use electronic devices",
    "pos": "",
    "meaning": "전자기기를 사용하다",
    "derivatives": [],
    "examples": [
     {
      "en": "use vacation days",
      "ko": "휴가를 사용하다"
     },
     {
      "en": "use the alternate route",
      "ko": "대체 경로를 이용하다"
     }
    ],
    "quiz": {
     "sentence": "The number of restaurants which ------- electronic devices for taking orders is increasing.",
     "a": "use",
     "b": "show",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 23,
    "word": "authorize payment",
    "pos": "",
    "meaning": "지불을 허가하다",
    "derivatives": [],
    "examples": [
     {
      "en": "authorize the final budget",
      "ko": "최종 예산안을 허가하다"
     },
     {
      "en": "authorize improvements to",
      "ko": "~의 개선을 허가하다"
     }
    ],
    "quiz": {
     "sentence": "The branch manager will ------- the payment once the necessary documentation is submitted and reviewed.",
     "a": "remind",
     "b": "authorize",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 24,
    "word": "observe safety regulations",
    "pos": "",
    "meaning": "안전 규정을 준수하다",
    "derivatives": [],
    "examples": [
     {
      "en": "observe the safety instructions",
      "ko": "안전 지시를 준수하다"
     }
    ],
    "quiz": {
     "sentence": "Please ------- safety regulations when operating the new assembly line machinery to ensure a secure work environment.",
     "a": "observe",
     "b": "comply",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 25,
    "word": "assume the title of",
    "pos": "",
    "meaning": "~의 직함을 달다",
    "derivatives": [],
    "examples": [
     {
      "en": "assume responsibility for organizing seminars",
      "ko": "세미나를 기획하는 것에 대한 책임을 떠맡다"
     },
     {
      "en": "assume the ownership of",
      "ko": "~의 소유권을 취하다"
     }
    ],
    "quiz": {
     "sentence": "Ms. Tebbitt will ------- the title of marketing director after Mr. Lomas retires in September.",
     "a": "assume",
     "b": "become",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 26,
    "word": "earn a reputation",
    "pos": "",
    "meaning": "평판을 얻다",
    "derivatives": [],
    "examples": [
     {
      "en": "earn the admiration of",
      "ko": "~의 존경을 받다"
     },
     {
      "en": "earn a degree",
      "ko": "학위를 받다"
     },
     {
      "en": "earn a bonus",
      "ko": "보너스를 얻다"
     }
    ],
    "quiz": {
     "sentence": "Soleil Beach Resort ------- a reputation largely due to the wealth of activities and amenities it offers.",
     "a": "earned",
     "b": "treated",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 27,
    "word": "settle a dispute",
    "pos": "",
    "meaning": "분쟁을 해결하다",
    "derivatives": [],
    "examples": [
     {
      "en": "settle a disagreement",
      "ko": "의견 차이를 해결하다"
     },
     {
      "en": "settle the account",
      "ko": "거래를 청산하다"
     }
    ],
    "quiz": {
     "sentence": "Ms. Jones ------- a dispute with her coworker after he agreed to revise the project timeline.",
     "a": "suggested",
     "b": "settled",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 28,
    "word": "accelerate production",
    "pos": "",
    "meaning": "생산을 가속화하다",
    "derivatives": [],
    "examples": [
     {
      "en": "accelerate the hiring process",
      "ko": "채용 과정을 가속화하다"
     },
     {
      "en": "accelerate the completion of",
      "ko": "~의 완성을 촉진하다"
     }
    ],
    "quiz": {
     "sentence": "Workshop attendees will learn how to ------- the production of electronic components using advanced manufacturing methods.",
     "a": "accelerate",
     "b": "notify",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 29,
    "word": "enforce dress code",
    "pos": "",
    "meaning": "복장 규정을 시행하다",
    "derivatives": [],
    "examples": [
     {
      "en": "enforce strict parking rules",
      "ko": "엄격한 주차 규정을 시행하다"
     },
     {
      "en": "enforce a one-hour lunch policy",
      "ko": "1시간 점심시간 정책을 시행하다"
     }
    ],
    "quiz": {
     "sentence": "Repcon Corporation ------- a dress code to maintain a professional appearance among its employees.",
     "a": "obeys",
     "b": "enforces",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 30,
    "word": "hold employment sessions",
    "pos": "",
    "meaning": "채용 설명회를 개최하다",
    "derivatives": [],
    "examples": [
     {
      "en": "hold a career fair",
      "ko": "취업 박람회를 개최하다"
     },
     {
      "en": "hold management meetings",
      "ko": "경영진 회의를 개최하다"
     }
    ],
    "quiz": {
     "sentence": "During the summer, Benning Enterprises ------- employment sessions to engage with potential candidates and answer their questions.",
     "a": "holds",
     "b": "waits",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 31,
    "word": "announce changes",
    "pos": "",
    "meaning": "변화를 알리다, 변경사항을 발표하다",
    "derivatives": [],
    "examples": [
     {
      "en": "announce the planned expansion",
      "ko": "계획된 확장을 알리다"
     },
     {
      "en": "announce the appointment of",
      "ko": "~의 임명을 발표하다"
     }
    ],
    "quiz": {
     "sentence": "The marketing department plans to ------- changes to the company's online advertising strategy.",
     "a": "announce",
     "b": "involve",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 32,
    "word": "submit requests",
    "pos": "",
    "meaning": "요청사항을 제출하다",
    "derivatives": [],
    "examples": [
     {
      "en": "submit an energy-efficient design",
      "ko": "에너지 효율적인 디자인을 제출하다"
     },
     {
      "en": "submit necessary documents",
      "ko": "필요한 서류들을 제출하다"
     }
    ],
    "quiz": {
     "sentence": "Apartment building tenants must ------- requests for private parking spaces by January 31.",
     "a": "apply",
     "b": "submit",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 33,
    "word": "seek candidates",
    "pos": "",
    "meaning": "후보자를 찾다",
    "derivatives": [],
    "examples": [
     {
      "en": "seek experienced guides",
      "ko": "경험이 많은 가이드들을 찾다"
     },
     {
      "en": "seek advice about the regulation",
      "ko": "규제에 대한 조언을 구하다"
     }
    ],
    "quiz": {
     "sentence": "We are ------- candidates for the sales representatives role who are equally comfortable speaking with customers over the phone as they are in person.",
     "a": "seeking",
     "b": "urging",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 34,
    "word": "order office supplies",
    "pos": "",
    "meaning": "사무용품을 주문하다",
    "derivatives": [],
    "examples": [
     {
      "en": "regularly order new stocks",
      "ko": "주기적으로 새로운 재고품을 주문하다"
     },
     {
      "en": "order the replacement parts",
      "ko": "대체 부속품을 주문하다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Duvall will check the inventory before he ------- more office supplies.",
     "a": "contains",
     "b": "orders",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 35,
    "word": "boost productivity",
    "pos": "",
    "meaning": "생산성을 증진시키다",
    "derivatives": [],
    "examples": [
     {
      "en": "boost Elex Motors' profits",
      "ko": "엘렉스 모터스 사의 수익을 증진시키다"
     },
     {
      "en": "boost sales figures",
      "ko": "매출을 신장시키다"
     }
    ],
    "quiz": {
     "sentence": "To ------- productivity, Corona Landscaping intends to upgrade its equipment and offer flexible working hours.",
     "a": "distribute",
     "b": "boost",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 36,
    "word": "assist firms",
    "pos": "",
    "meaning": "회사를 돕다",
    "derivatives": [],
    "examples": [
     {
      "en": "assist the efforts of aid organizations",
      "ko": "지원 기관들의 활동을 돕다"
     },
     {
      "en": "assist technical research",
      "ko": "기술 연구를 돕다"
     }
    ],
    "quiz": {
     "sentence": "First Recruitment ------- firms in hiring skilled workers to fill a wide variety of roles.",
     "a": "assists",
     "b": "allows",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 37,
    "word": "offer discounts",
    "pos": "",
    "meaning": "할인을 제공하다",
    "derivatives": [],
    "examples": [
     {
      "en": "offer a complete program",
      "ko": "완성된 프로그램을 제공하다"
     },
     {
      "en": "offer a wide range of banking services",
      "ko": "다양한 은행 서비스를 제공하다"
     }
    ],
    "quiz": {
     "sentence": "Greenway Supermarket ------- discounts on a large range of products on the last Sunday of every month.",
     "a": "buys",
     "b": "offers",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 38,
    "word": "include the account number",
    "pos": "",
    "meaning": "계좌번호를 포함하다",
    "derivatives": [],
    "examples": [
     {
      "en": "include a service agreement",
      "ko": "서비스 계약을 포함하다"
     },
     {
      "en": "include the signed claim form",
      "ko": "서명된 배상 청구서를 포함하다"
     }
    ],
    "quiz": {
     "sentence": "Please be sure to ------- your account number whenever you contact customer support at Hitchens Bank.",
     "a": "include",
     "b": "address",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 39,
    "word": "receive a promotion",
    "pos": "",
    "meaning": "승진하다",
    "derivatives": [],
    "examples": [
     {
      "en": "receive an award",
      "ko": "상을 받다"
     },
     {
      "en": "receive the updated files",
      "ko": "업데이트된 파일을 받다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Royce ------- a promotion because of his outstanding achievements in the last quarter.",
     "a": "received",
     "b": "raised",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 40,
    "word": "take brochures",
    "pos": "",
    "meaning": "안내 책자를 가져가다",
    "derivatives": [],
    "examples": [
     {
      "en": "take a walk",
      "ko": "산책하다, 걷다"
     },
     {
      "en": "take a different route",
      "ko": "다른 길로 가다"
     },
     {
      "en": "take thirty minutes",
      "ko": "30분이 걸리다"
     }
    ],
    "quiz": {
     "sentence": "Tour group members should ------- their brochures with them whenever they leave the bus.",
     "a": "turn",
     "b": "take",
     "answer": "B"
    },
    "tip": ""
   }
  ]
 },
 {
  "week": 3,
  "day": 15,
  "part": "Part 7",
  "title": "기출 동의어 ③",
  "words": [
   {
    "no": 1,
    "word": "direct",
    "pos": "",
    "meaning": "특정인에게/장소에 보내다; 지시하다, 이끌다",
    "derivatives": [
     {
      "word": "address",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "send",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "instruct",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "guide",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "supervise",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Please direct any questions or concerns you may have about our products, services, or policies to our customer support team, who are available to assist you promptly.",
      "ko": "저희의 제품, 서비스 혹은 정책에 관해 질문이나 우려 사항이 있으실 경우, 여러분을 즉시 도울 수 있는 저희 고객 지원팀에 보내주세요."
     }
    ],
    "quiz": {
     "sentence": "",
     "a": "address",
     "b": "supervise",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 2,
    "word": "slot",
    "pos": "",
    "meaning": "구멍, 틈; 빈 자리, 빈 시간",
    "derivatives": [
     {
      "word": "hole",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "crack",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "opening",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "There are no more available slots left for that workshop on Tuesday, so I'll have to register you for the one on Wednesday instead.",
      "ko": "화요일에 열리는 그 워크샵에는 더 이상 가능한 자리가 없어서, 대신 수요일에 있는 워크샵에 등록해 드리겠습니다."
     }
    ],
    "quiz": {
     "sentence": "",
     "a": "holes",
     "b": "openings",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 3,
    "word": "appeal",
    "pos": "",
    "meaning": "간청하다; 마음을 사로잡다",
    "derivatives": [
     {
      "word": "ask",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "request",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "beg",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "attract",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Our hotel offers amenities that will appeal to guests of all ages, no matter where you are visiting from.",
      "ko": "저희 호텔은 어디서 방문하시는지에 관계없이 모든 연령대의 투숙객들의 마음을 사로잡을 편의시설을 제공합니다."
     }
    ],
    "quiz": {
     "sentence": "",
     "a": "request",
     "b": "attract",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 4,
    "word": "perform",
    "pos": "",
    "meaning": "공연하다; 수행하다; 기능하다, 작동하다",
    "derivatives": [
     {
      "word": "play",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "be on stage",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "carry out",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "complete",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "fulfill",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "conduct",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "work",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "function",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "We were able to gather participants, perform the laboratory experiments, and produce insightful results within a week.",
      "ko": "저희는 참가자들을 모집하고, 실험실 실험을 수행하고, 그리고 통찰력 있는 결과를 만들어 내는 일주일 이내에 할 수 있었습니다."
     }
    ],
    "quiz": {
     "sentence": "",
     "a": "play",
     "b": "carry out",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 5,
    "word": "resolution",
    "pos": "",
    "meaning": "해상도; 해결; 결심",
    "derivatives": [
     {
      "word": "level of detail",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "settlement",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "decision",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "intention",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "To meet the demands of professional photographers, the new camera model boasts a special feature designed to enhance the resolution of captured images.",
      "ko": "전문 사진작가들의 요구를 충족시키기 위해, 새로운 카메라 모델은 캡처된 이미지의 해상도를 향상시키도록 설계된 특별한 기능을 자랑합니다."
     }
    ],
    "quiz": {
     "sentence": "",
     "a": "level of detail",
     "b": "decision",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 6,
    "word": "solid",
    "pos": "",
    "meaning": "단단한, 굳은; 시간상 꼬박 계속되는; 확실한, 믿을 수 있는",
    "derivatives": [
     {
      "word": "hard",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "firm",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "constant",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "thorough",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "well-grounded",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "reliable",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Harry sent me a solid business plan yesterday regarding our project launch. I think you'll be impressed by its quality, so I have attached it to this e-mail for your reference.",
      "ko": "해리 씨가 우리의 프로젝트 개시에 관해 믿을 수 있는 사업 계획을 어제 저에게 보내주었습니다. 당신이 그 우수함에 깊은 인상을 받을 것이라고 생각해, 참고하실 수 있도록 그것을 이 이메일에 첨부했습니다."
     }
    ],
    "quiz": {
     "sentence": "",
     "a": "constant",
     "b": "thorough",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 7,
    "word": "occupy",
    "pos": "",
    "meaning": "공간을 차지하다; 바쁘게 하다, 시간을 차지하다; 마음을 사로잡다",
    "derivatives": [
     {
      "word": "take up",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "fill",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "keep busy",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "engage",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "capture",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Although the majority of our space is occupied by long-term leases, we do offer a small selection of seasonal contracts with a minimum duration of three months.",
      "ko": "비록 저희 공간의 대부분은 장기 임대로 채워져 있지만, 최소 3개월 기간의 계절 계약도 일부 제공하고 있습니다."
     }
    ],
    "quiz": {
     "sentence": "",
     "a": "filled",
     "b": "kept busy",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 8,
    "word": "program",
    "pos": "",
    "meaning": "방송; 계획; (콘서트, 연극 등) 시간표, 일정 등을 담은 책자",
    "derivatives": [
     {
      "word": "show",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "broadcast",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "plan",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "schedule",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "timetable",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "If you'd like, we can create a customized exercise program that caters to your fitness goals. Here at Aries Health & Fitness, we even have a nutritionist on site that can provide dietary advice and consultation.",
      "ko": "원하신다면, 저희는 귀하의 운동 목표에 충족시킬 맞춤형 운동 프로그램을 만들 수 있습니다. 이곳 에리즈 헬스 앤 피트니스에는, 식단 조언과 상담을 제공할 수 있는 영양사도 현장에 있습니다."
     }
    ],
    "quiz": {
     "sentence": "",
     "a": "broadcast",
     "b": "plan",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 9,
    "word": "instrumental",
    "pos": "",
    "meaning": "악기의; 기구의, 기계의; 도움이 되는, 중요한",
    "derivatives": [
     {
      "word": "musical",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "mechanical",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "helpful",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "essential",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Our monthly team-building seminars have been an instrumental part of our company's culture because they help build trust among employees.",
      "ko": "우리의 월별 팀 빌딩 세미나는 우리 회사 문화의 중요한 부분인데, 직원들 사이에 신뢰를 구축하는 데 도움이 되기 때문입니다."
     }
    ],
    "quiz": {
     "sentence": "",
     "a": "mechanical",
     "b": "essential",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 10,
    "word": "status",
    "pos": "",
    "meaning": "지위, 명망; 상황, 상태",
    "derivatives": [
     {
      "word": "high rank",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "condition",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Is there a way for me to check the shipping status of my package? I could not find any information on your Web site.",
      "ko": "제 소포의 배송 상태를 확인할 수 있는 방법이 있을까요? 귀하의 웹 사이트에서는 어떤 정보도 찾을 수가 없습니다."
     }
    ],
    "quiz": {
     "sentence": "",
     "a": "high rank",
     "b": "condition",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 11,
    "word": "regular",
    "pos": "",
    "meaning": "정기적인, 규칙적인; 일정한, 균일한; 일상적인, 평소의",
    "derivatives": [
     {
      "word": "periodic",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "habitual",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "even",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "unchanging",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "usual",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "normal",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "As a security measure, the system automatically prompts users to reset their password on a regular basis.",
      "ko": "보안 조치의 일환으로, 그 시스템은 자동으로 이용자들이 정기적으로 그들의 비밀번호를 재설정하도록 유도합니다."
     }
    ],
    "quiz": {
     "sentence": "",
     "a": "periodic",
     "b": "unchanging",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 12,
    "word": "anticipate",
    "pos": "",
    "meaning": "예상하다; 고대하다",
    "derivatives": [
     {
      "word": "expect",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "look forward to",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "I anticipate that over 100 people will attend the event, so we'll need to make sure to provide enough chairs for everyone.",
      "ko": "저는 100명 이상의 인원이 그 행사에 참석할 것으로 예상하므로, 우리는 모두에게 충분한 의자가 제공되도록 확실히 할 필요가 있습니다."
     }
    ],
    "quiz": {
     "sentence": "",
     "a": "expect",
     "b": "look forward to",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 13,
    "word": "assume",
    "pos": "",
    "meaning": "맡다, 떠맡다; 추정하다",
    "derivatives": [
     {
      "word": "undertake",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "accept",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "take on",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "think",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "suppose",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Having demonstrated expertise in financial management, Michael has now assumed the position of CFO, ensuring the company's financial stability.",
      "ko": "재무관리에서의 전문성을 입증한 마이클 씨는 이제 회사의 재정 안정성을 보증할 재무 담당 최고 책임자 직책을 맡게 되었습니다."
     }
    ],
    "quiz": {
     "sentence": "",
     "a": "undertaken",
     "b": "thought",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 14,
    "word": "capture",
    "pos": "",
    "meaning": "점유하다, 차지하다; (감정이나 분위기를) 포착하다, 담아내다; 마음을 사로잡다",
    "derivatives": [
     {
      "word": "gain",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "occupy",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "express",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "represent",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "attract",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "This sales report does not capture the full extent of our business's potential, but I hope that it offers helpful reference to how we operate.",
      "ko": "이 매출 보고서가 우리 사업의 잠재성 전체를 담아내진 않지만, 우리가 어떻게 영업하는지에 대해 유용한 참고 자료를 제공하길 바랍니다."
     }
    ],
    "quiz": {
     "sentence": "",
     "a": "gain",
     "b": "represent",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 15,
    "word": "plus",
    "pos": "",
    "meaning": "추가; 이점, 좋은 점",
    "derivatives": [
     {
      "word": "addition",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "benefit",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "I believe that being a bilingual speaker is a plus, so I felt that my qualifications make me more than eligible for this position.",
      "ko": "저는 2개 국어 가능자라는 것이 이점이라고 생각해서, 제 자질들이 이 직책에 저를 매우 적합하게 만든다고 생각했습니다."
     }
    ],
    "quiz": {
     "sentence": "",
     "a": "addition",
     "b": "benefit",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 16,
    "word": "fashion",
    "pos": "",
    "meaning": "스타일, 외양; 유행; 방식, 방법",
    "derivatives": [
     {
      "word": "style",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "look",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "vogue",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "trend",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "manner",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Please make sure that guests are lined up in an orderly fashion while waiting to enter the theater. We don't want anyone to get hurt.",
      "ko": "손님들이 극장에 들어가기 위해 기다리는 동안 질서 있는 방식으로 줄을 서도록 해 주시기 바랍니다. 저희는 누구도 다치는 것을 원하지 않습니다."
     }
    ],
    "quiz": {
     "sentence": "",
     "a": "trend",
     "b": "manner",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 17,
    "word": "conclude",
    "pos": "",
    "meaning": "결론을 내리다; 끝나다, 마치다",
    "derivatives": [
     {
      "word": "decide",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "believe",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "finish",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "I expect the meeting to conclude before noon, since the chairman has an important lunch to attend.",
      "ko": "의장님께서 참석하실 중요한 점심 식사가 있기 때문에, 저는 이 회의가 정오 전에는 끝날 것으로 예상합니다."
     }
    ],
    "quiz": {
     "sentence": "",
     "a": "decide",
     "b": "finish",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 18,
    "word": "fit",
    "pos": "",
    "meaning": "(일자리에) 적합하다, 어울리다; 조정하여 맞추다, 끼우다; 의복 등이 꼭 맞다, 잘 어울리다",
    "derivatives": [
     {
      "word": "match",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "adjust",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "lay",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "put in place",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "be the right size",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Upon reviewing her résumé and background, it appears that her interests seem to fit our company's goals perfectly.",
      "ko": "그녀의 이력서와 배경을 검토해보니, 그녀의 관심사가 우리 회사의 목표와 완벽하게 어울리는 것 같습니다."
     }
    ],
    "quiz": {
     "sentence": "",
     "a": "match",
     "b": "adjust",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 19,
    "word": "serve",
    "pos": "",
    "meaning": "시중을 들다; 음식을 제공하다; 일하다, 기능하다",
    "derivatives": [
     {
      "word": "attend to",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "cater",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "provide food",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "work",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "function",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "The new community center is not only a space for cultural events but also aims at serving as a place for employment opportunities through various skill development programs.",
      "ko": "새 지역 주민센터는 문화 행사를 위한 공간일 뿐만 아니라 다양한 역량 개발 프로그램을 통해 고용 기회를 얻기 위한 공간으로 기능하는 것도 목표로 합니다."
     }
    ],
    "quiz": {
     "sentence": "",
     "a": "attending to",
     "b": "functioning",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 20,
    "word": "realize",
    "pos": "",
    "meaning": "현실화하다, 이루다; 깨닫다",
    "derivatives": [
     {
      "word": "achieve",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "comprehend",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "I did not realize the importance of one's body language when giving a presentation. I will make sure to do a better job next time.",
      "ko": "저는 발표할 때의 보디랭귀지의 중요성을 깨닫지 못했어요. 다음번에는 좀 더 잘할 수 있도록 하겠습니다."
     }
    ],
    "quiz": {
     "sentence": "",
     "a": "achieve",
     "b": "comprehend",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 21,
    "word": "convey",
    "pos": "",
    "meaning": "나르다, 옮기다; (생각·감정을) 전달하다",
    "derivatives": [
     {
      "word": "transport",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "carry",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "communicate",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "relay",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "pass on",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "In order to ensure smooth project execution, it is crucial for a project manager to convey expectations clearly to team members.",
      "ko": "원만한 프로젝트 수행을 보장하기 위해서는 프로젝트 책임자가 팀원들에게 기대하는 것을 명확하게 전달하는 것이 매우 중요합니다."
     }
    ],
    "quiz": {
     "sentence": "",
     "a": "transport",
     "b": "communicate",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 22,
    "word": "modest",
    "pos": "",
    "meaning": "겸손한; 그다지 대단하지 않은, 보통의",
    "derivatives": [
     {
      "word": "humble",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "shy",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "small",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "ordinary",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "simple",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "I only have a modest amount of knowledge on the subject, so I believe it would be best to contact Ms. Jones, our accountant.",
      "ko": "저는 그 주제에 관해 보통 수준의 지식만을 가지고 있어서, 저희의 회계사인 존스 씨에게 연락하는 것이 가장 좋을 것이라고 생각합니다."
     }
    ],
    "quiz": {
     "sentence": "",
     "a": "shy",
     "b": "small",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 23,
    "word": "drop",
    "pos": "",
    "meaning": "떨어지다, 떨어뜨리다; 낮추다, 약해지다; 그만 두다",
    "derivatives": [
     {
      "word": "fall",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "lower",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "quit",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Due to unforeseen financial constraints, Peter had no choice but to drop the class before the tuition refund deadline.",
      "ko": "예상하지 못한 재정적인 제약으로 인해, 피터 씨는 수업료 환불 마감기한 전에 수업을 그만둘 수밖에 없었습니다."
     }
    ],
    "quiz": {
     "sentence": "",
     "a": "fall",
     "b": "quit",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 24,
    "word": "deliver",
    "pos": "",
    "meaning": "배달하다; 제공하다",
    "derivatives": [
     {
      "word": "bring",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "send",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "transport",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "provide",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "We deliver a wide range of laundry services to fit your various needs. Furthermore, no membership is needed to use our machines.",
      "ko": "저희는 여러분의 여러 필요사항을 충족하기 위해 다양한 세탁 서비스를 제공합니다. 게다가, 저희 기계를 사용하는 데 회원가입이 필요하지 않습니다."
     }
    ],
    "quiz": {
     "sentence": "",
     "a": "send",
     "b": "provide",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 25,
    "word": "put aside",
    "pos": "",
    "meaning": "무시하다, 제쳐놓다; 나중에 쓰도록 따로 두다",
    "derivatives": [
     {
      "word": "ignore",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "save up",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "The lost and found box at the office is filled with various items that are frequently put aside or misplaced by forgetful employees.",
      "ko": "사무실에 있는 분실물 보관함은 건망증이 있는 직원들에 의해 자주 제쳐지거나 제자리에 놓이지 않은 다양한 물품들로 채워져 있습니다."
     }
    ],
    "quiz": {
     "sentence": "",
     "a": "ignored",
     "b": "saved up",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 26,
    "word": "redeem",
    "pos": "",
    "meaning": "상환하다, 변제하다; ~을 …로 바꾸다, 교환하다; 보완하다, 상쇄하다",
    "derivatives": [
     {
      "word": "pay",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "trade in",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "compensate for",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Each time you accrue 1000 points, you can redeem the points for valuable discounts on your next purchase.",
      "ko": "여러분이 1000 포인트를 모을 때마다, 그 포인트를 다음 구입에 적용할 가치 있는 할인으로 바꿀 수 있습니다."
     }
    ],
    "quiz": {
     "sentence": "",
     "a": "compensate for",
     "b": "trade in",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 27,
    "word": "apply",
    "pos": "",
    "meaning": "신청하다, 지원하다 (for); 쓰다, 적용하다 (to)",
    "derivatives": [
     {
      "word": "put in",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "ask for",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "use",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "exercise",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "employ",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Please make sure that the format I have outlined above is applied to all future reports. Otherwise, there might be a lack of consistency going forward.",
      "ko": "제가 위에 개요를 서술한 이 형식이 향후 모든 보고서들에 적용될 수 있도록 해주시기 바랍니다. 그렇지 않으면, 앞으로 일관성이 부족해질 수도 있습니다."
     }
    ],
    "quiz": {
     "sentence": "",
     "a": "asked for",
     "b": "used",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 28,
    "word": "allow",
    "pos": "",
    "meaning": "허락하다, 허용하다; 가능하게 하다",
    "derivatives": [
     {
      "word": "give permission",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "make possible",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "The newly installed, indoor heated pool at the community center allows for swimming all year, making it a perfect spot to relax regardless of the weather outside.",
      "ko": "지역 복지관에 새로 설치된 실내 온수 수영장은 일년 내내 수영을 가능하게 하여, 그곳을 외부 날씨와 무관하게 휴식을 취할 수 있는 완벽한 장소로 만듭니다."
     }
    ],
    "quiz": {
     "sentence": "",
     "a": "gives permission",
     "b": "makes possible",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 29,
    "word": "pose",
    "pos": "",
    "meaning": "위협·문제 등을 제기하다; 자세를 취하다",
    "derivatives": [
     {
      "word": "present",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "model",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Falling debris and unstable structures pose a risk for construction workers. Hard hats should be worn at all times.",
      "ko": "떨어지는 잔해와 불안정한 구조물들이 건설 작업자들에게 위험을 제기하고 있습니다. 항상 안전모를 착용해야 합니다."
     }
    ],
    "quiz": {
     "sentence": "",
     "a": "present",
     "b": "model",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 30,
    "word": "stage",
    "pos": "",
    "meaning": "공연의 무대; 단계, 시기",
    "derivatives": [
     {
      "word": "platform",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "phase",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "step",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "The first stage of construction has wrapped up well. We are now preparing to build the exterior of the building.",
      "ko": "건설 공사의 첫 번째 단계가 잘 마무리되었습니다. 저희는 이제 건물의 외부를 지을 준비를 하고 있습니다."
     }
    ],
    "quiz": {
     "sentence": "",
     "a": "platform",
     "b": "phase",
     "answer": "B"
    },
    "tip": ""
   }
  ]
 },
 {
  "week": 4,
  "day": 16,
  "part": "Part 2~4",
  "title": "LC가 잘 들리는 어휘 ②",
  "words": [
   {
    "no": 1,
    "word": "miss",
    "pos": "v.",
    "meaning": "~을 놓치다",
    "derivatives": [],
    "examples": [
     {
      "en": "M: What happened at the workshop yesterday?\nW: I missed it too.",
      "ko": "남: 어제 워크숍에서 무슨 일이 있었나요?\n여: 저도 거기 못 갔어요."
     }
    ],
    "quiz": null,
    "tip": "· 관련 기출\n  miss the deadline  마감일을 못 지키다\n· 토익 LC에서 miss는 주로 '~을 놓치다, (회의 등에) 못 가다'의 의미로 나오지만 '~을 그리워하다'라는 뜻도 있습니다."
   },
   {
    "no": 2,
    "word": "patron",
    "pos": "n.",
    "meaning": "고객, 후원자",
    "derivatives": [],
    "examples": [
     {
      "en": "M: Our patrons come from all over the world just to try our famous pasta.\nW: I can understand why! It's delicious.",
      "ko": "남: 우리 고객들은 단지 우리의 유명한 파스타를 맛보기 위해 전 세계에서 옵니다.\n여: 왜 그런지 알겠어요! 맛있어요."
     }
    ],
    "quiz": null,
    "tip": "· 일반적인 의미의 고객은 customer라고 하며, 주로 전문적인 서비스를 의뢰한 고객을 client라고 합니다. patron, customer, client 모두 LC에 자주 등장합니다."
   },
   {
    "no": 3,
    "word": "refrain from -ing",
    "pos": "",
    "meaning": "~하는 것을 삼가다",
    "derivatives": [],
    "examples": [
     {
      "en": "M: Please refrain from speaking loudly on the phone in the waiting area.\nW: Sorry about that. I'll take my call outside.",
      "ko": "남: 대기실에서 큰 소리로 통화하는 것은 삼가주시기 바랍니다.\n여: 죄송합니다. 전화를 바깥에서 받겠습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 4,
    "word": "bring A with me",
    "pos": "",
    "meaning": "A를 가지고 가다",
    "derivatives": [],
    "examples": [
     {
      "en": "M: I'm meeting with the client tomorrow to discuss the project proposal. Do you have the latest version of the document?\nW: Yes, I'll bring a copy with me to the meeting.",
      "ko": "남: 내일 고객과 만나 프로젝트 제안서에 대해 논의할 예정입니다. 그 문서의 최신 버전이 있나요?\n여: 네, 회의할 때 사본을 가지고 가겠습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 5,
    "word": "tenant",
    "pos": "n.",
    "meaning": "임차인",
    "derivatives": [],
    "examples": [
     {
      "en": "M: When did the new tenant for Unit 223 say she would move in?\nW: On May 1, I believe. The unit has already been cleaned and is ready to go.",
      "ko": "남: 223호실의 새 임차인이 언제 입주하겠다고 했습니까?\n여: 아마 5월 1일일 거예요. 그 호실은 이미 청소가 끝났고 사용할 준비가 완료되었습니다."
     }
    ],
    "quiz": null,
    "tip": "· 관련 기출\n  landlord 집주인\n  resident 거주자, 주민"
   },
   {
    "no": 6,
    "word": "board of directors",
    "pos": "n.",
    "meaning": "이사회, 위원회",
    "derivatives": [],
    "examples": [
     {
      "en": "M: I hope the board of directors considers our proposal seriously.\nW: Yes, let's hope they see the potential benefits.",
      "ko": "남: 이사회에서 우리의 제안서를 진지하게 고려하면 좋겠어요.\n여: 네, 그들이 잠재적인 이점을 볼 수 있기를 바랍니다."
     }
    ],
    "quiz": null,
    "tip": "· 관련 기출\n  board member 이사회 구성원, 이사\n  board meeting 이사회 회의"
   },
   {
    "no": 7,
    "word": "have yet to + 동사원형",
    "pos": "",
    "meaning": "아직 ~하지 않았다",
    "derivatives": [],
    "examples": [
     {
      "en": "M: I have yet to receive a text from the technician about when he'll stop by to fix our air conditioner.\nW: Should we give him a call?",
      "ko": "남: 기술자로부터 언제 우리 에어컨을 수리하러 들를지에 대한 문자를 아직 받지 못했습니다.\n여: 그에게 전화를 해야 할까요?"
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 8,
    "word": "attendance",
    "pos": "n.",
    "meaning": "참석자 수",
    "derivatives": [],
    "examples": [
     {
      "en": "M: Attendance to today's skills workshop was low, wasn't it?\nW: Yes, many people seem to be away for the holidays.",
      "ko": "남: 오늘 기술 워크숍 참석자 수가 적었죠?\n여: 네, 많은 분들이 연휴로 자리에 안 계신 것 같습니다."
     }
    ],
    "quiz": null,
    "tip": "· 관련 기출\n  well-attended 참석률이 좋은"
   },
   {
    "no": 9,
    "word": "in the middle of",
    "pos": "",
    "meaning": "~하는 중인",
    "derivatives": [],
    "examples": [
     {
      "en": "M: I need to schedule a meeting, but the system seems to be down.\nW: I apologize for the inconvenience. Mr. Yan is in the middle of updating our appointment system to improve its speed.",
      "ko": "남: 회의 일정을 잡아야 하는데, 시스템이 다운된 것 같습니다.\n여: 불편을 끼쳐드려 죄송합니다. 얀 씨가 저희 예약 시스템의 속도를 개선하기 위해 업데이트를 진행 중입니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 10,
    "word": "call a meeting",
    "pos": "",
    "meaning": "회의를 소집하다",
    "derivatives": [],
    "examples": [
     {
      "en": "M: The finance supervisor just called a meeting to discuss reallocating surplus funds.\nW: Do I need to be there, too?",
      "ko": "남: 방금 재무팀장이 여유 자금의 재분배를 논의하기 위해 회의를 소집했습니다.\n여: 저도 거기에 있어야 하나요?"
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 11,
    "word": "care to + 동사원형",
    "pos": "",
    "meaning": "~하고 싶다",
    "derivatives": [],
    "examples": [
     {
      "en": "M: Would you care to have a cup of coffee while you wait?\nW: No thanks, I'm actually quite sensitive to caffeine.",
      "ko": "남: 기다리시는 동안 커피 한 잔 하고 싶으신가요?\n여: 괜찮습니다, 저는 사실 카페인에 꽤 민감해요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 12,
    "word": "disturb",
    "pos": "v.",
    "meaning": "~을 방해하다",
    "derivatives": [],
    "examples": [
     {
      "en": "M: Shelly is in an online conference call right now, so you probably shouldn't disturb her.\nW: Okay, I won't.",
      "ko": "남: 셸리는 지금 온라인 전화 회의 중이니 방해하지 않으셔야 할 것 같습니다.\n여: 알겠습니다. 방해하지 않을게요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 13,
    "word": "stick with",
    "pos": "",
    "meaning": "~을 고수하다",
    "derivatives": [],
    "examples": [
     {
      "en": "M: I heard your team is considering some bold new digital marketing ideas.\nW: But the board wants us to stick with traditional advertising.",
      "ko": "남: 당신 팀에서 과감하고 새로운 디지털 마케팅 아이디어를 검토 중이라고 들었습니다.\n여: 하지만 이사회는 우리가 전통적인 광고를 고수하기를 원합니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 14,
    "word": "just in case",
    "pos": "",
    "meaning": "만일의 경우를 대비해서",
    "derivatives": [],
    "examples": [
     {
      "en": "M: We should probably bring some raincoats with us to the forest expedition just in case.\nW: You're right. It could start pouring unexpectedly.",
      "ko": "남: 만일의 경우를 대비해서 숲 탐험에 우비를 좀 가지고 가야겠네요.\n여: 맞아요. 갑자기 비가 쏟아질 수도 있으니까요."
     }
    ],
    "quiz": null,
    "tip": "· 관련 기출\n  「in case of + 명사」/「in case + 절」 ~의 경우에 대비해\n  We should leave soon in case of traffic.\n  We should leave soon, in case there's traffic.\n  교통 체증이 있을지도 모르니 곧 나서야 해요."
   },
   {
    "no": 15,
    "word": "rather than",
    "pos": "",
    "meaning": "~보다는",
    "derivatives": [],
    "examples": [
     {
      "en": "M: Should we book the beachfront location or the city park for the team-building event?\nW: Let's use the city park rather than the beachfront. It's more accessible for everyone.",
      "ko": "남: 팀 단합 행사를 위해 해변으로 예약할까요, 시내 공원으로 할까요?\n여: 해변보다는 시내 공원으로 합시다. 모두에게 접근성이 더 좋잖아요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 16,
    "word": "be named/appointed",
    "pos": "",
    "meaning": "임명되다, 지명되다",
    "derivatives": [],
    "examples": [
     {
      "en": "M: Has the new marketing manager been named yet?\nW: I'm hoping it will be Ms. Cohen.",
      "ko": "남: 새로운 마케팅 부장이 임명되었나요?\n여: 코헨 씨가 되길 바라고 있어요."
     }
    ],
    "quiz": null,
    "tip": "· 관련 기출\n  name[appoint] A as B  A를 B에 임명하다\n  ☞ as는 생략 가능\n  named + 이름  ~라는 이름의\n  a woman named Natalie  나탈리라는 이름의 여자"
   },
   {
    "no": 17,
    "word": "vacate",
    "pos": "v.",
    "meaning": "(건물, 공간 등을 다른 사람이 사용할 수 있도록) 비우다",
    "derivatives": [],
    "examples": [
     {
      "en": "M: By when were we asked to vacate the building?\nW: The end of June at the latest, but we can request an extension if needed.",
      "ko": "남: 언제까지 건물을 비워달라는 요청을 받았습니까?\n여: 늦어도 6월 말까지요, 하지만 필요하다면 연장을 요청할 수 있습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 18,
    "word": "get A B",
    "pos": "",
    "meaning": "A에게 B를 얻어주다",
    "derivatives": [],
    "examples": [
     {
      "en": "M: You can't get us an earlier flight, can you?\nW: No, they're fully booked.",
      "ko": "남: 저희에게 더 이른 비행편을 구해주실 수는 없겠죠?\n여: 못 해요. 예약이 꽉 찼습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 19,
    "word": "place an order",
    "pos": "",
    "meaning": "주문하다",
    "derivatives": [],
    "examples": [
     {
      "en": "M: Hi, I'm calling because I'd like to place an order for 1,000 business cards.\nW: Okay. Is there a specific design that you wanted to use for your cards?",
      "ko": "남: 안녕하세요, 명함 1,000장을 주문하고 싶어서 전화드렸습니다.\n여: 알겠습니다. 혹시 명함에 사용하고 싶은 특정 디자인이 있으신가요?"
     }
    ],
    "quiz": null,
    "tip": "· 관련 기출\n  place a call  전화를 걸다"
   },
   {
    "no": 20,
    "word": "fill an order",
    "pos": "",
    "meaning": "주문에 맞춰 물품을 공급하다",
    "derivatives": [],
    "examples": [
     {
      "en": "M: Hey, did you take care of the request for 100 spiral notebooks and 200 lined-paper notepads?\nW: Yes, I filled that order earlier this morning.",
      "ko": "남: 저, 스프링 공책 100개와 줄 쳐진 메모장 200개 요청은 잘 처리하셨나요?\n여: 네, 오늘 아침 일찍 주문에 맞춰 물품을 공급했습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 21,
    "word": "bring A up",
    "pos": "",
    "meaning": "A(문제나 이슈)를 제기하다",
    "derivatives": [],
    "examples": [
     {
      "en": "M: Have you noticed any issues with the office coffee machine lately?\nW: Yes, it's been acting up. I'll bring it up at our staff meeting tomorrow.",
      "ko": "남: 최근에 사무실 커피 머신에 문제가 생긴 것을 알고 계셨나요?\n여: 네, 계속 작동이 잘 안되었어요. 내일 직원 회의에서 그 문제를 제기할 것입니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 22,
    "word": "take inventory",
    "pos": "",
    "meaning": "재고 조사를 하다",
    "derivatives": [],
    "examples": [
     {
      "en": "M: Before wrapping up for the day, the most important step is to take inventory of all our merchandise.\nW: I should use this checklist over here, right?",
      "ko": "남: 하루를 마무리하기 전에 가장 중요한 단계는 우리의 모든 상품에 대한 재고 조사를 하는 것입니다.\n여: 여기 있는 이 체크리스트를 써야 하는 거죠?"
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 23,
    "word": "keep track of",
    "pos": "",
    "meaning": "~을 추적하다, ~의 정보를 계속 파악하다",
    "derivatives": [],
    "examples": [
     {
      "en": "M: How do we keep track of the shipments we've unloaded?\nW: We use a barcode scanning software to log them into our inventory management system.",
      "ko": "남: 내린 화물을 어떻게 추적합니까?\n여: 저희는 바코드 스캔 소프트웨어를 사용해 재고 관리 시스템에 기록합니다."
     }
    ],
    "quiz": null,
    "tip": "· track이 동사로 쓰이면 '~을 추적하다'라는 의미입니다."
   },
   {
    "no": 24,
    "word": "aim to + 동사원형",
    "pos": "",
    "meaning": "~하는 것을 목표로 하다",
    "derivatives": [],
    "examples": [
     {
      "en": "M: We're aiming to finish painting the walls tomorrow.\nW: That sounds great! Thank you for the update.",
      "ko": "남: 내일 벽 페인트 칠 작업을 끝내는 걸 목표로 하고 있어요.\n여: 아주 잘됐어요! 소식 알려주셔서 감사합니다."
     }
    ],
    "quiz": null,
    "tip": "· 관련 기출\n  be aimed at  ~을 대상으로 하다, ~을 겨냥하다\n  aim  n. 목적, 목표"
   },
   {
    "no": 25,
    "word": "shift",
    "pos": "n.",
    "meaning": "교대 근무",
    "derivatives": [],
    "examples": [
     {
      "en": "M: Doesn't Jacob usually work the evening shift?\nW: Someone from the day shift called in sick today.",
      "ko": "남: 제이콥 씨는 보통 저녁 근무를 하지 않나요?\n여: 낮 근무인 어떤 분이 오늘 아파서 못 나왔거든요."
     }
    ],
    "quiz": null,
    "tip": "· 관련 기출\n  work extra shift  추가 근무를 서다\n  cover one's shift  ~의 근무를 대신 서다"
   },
   {
    "no": 26,
    "word": "claim",
    "pos": "v., n.",
    "meaning": "v. ~을 청구하다, 주장하다 / n. 청구[신청], 주장",
    "derivatives": [],
    "examples": [
     {
      "en": "M: I heard there's a new procedure for claiming travel expenses.\nW: Yes. Instead of the paper forms, now we can submit our expenses online.",
      "ko": "남: 출장 비용 청구 절차가 새로 생겼다고 들었어요.\n여: 네. 종이 양식 대신에, 이제 온라인으로 비용 내역을 제출할 수 있습니다."
     }
    ],
    "quiz": null,
    "tip": "· 관련 기출\n  baggage claim area  (공항의) 수하물 찾는 곳"
   },
   {
    "no": 27,
    "word": "belongings",
    "pos": "n.",
    "meaning": "소지품, 소유물",
    "derivatives": [],
    "examples": [
     {
      "en": "M: Hey Lisa, congratulations on your promotion! Do you need any help moving your personal belongings to your new desk?\nW: Thanks so much. And, it's alright, I should be able to do it by myself.",
      "ko": "남: 리사, 승진 축하해요! 개인 소지품을 새 책상으로 옮기는 데 도움이 필요하신가요?\n여: 정말 감사합니다. 그리고 괜찮아요, 저 혼자 할 수 있을 거예요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 28,
    "word": "landscaping",
    "pos": "n.",
    "meaning": "조경 (작업)",
    "derivatives": [],
    "examples": [
     {
      "en": "M: I'd like to get some landscaping done around my house. Can you stop by and give me an estimate?\nW: Sure. Where is it located?",
      "ko": "남: 집 주변에 조경 작업을 좀 하고 싶은데요. 이번 주 중에 들러서 견적을 알려주실 수 있나요?\n여: 물론이죠. 어디에 위치해 있나요?"
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 29,
    "word": "loyal",
    "pos": "a.",
    "meaning": "충성스러운, 단골의",
    "derivatives": [],
    "examples": [
     {
      "en": "M: Is there any way to expedite the shipping of my purchase?\nW: Of course, we can arrange that for you. Since you're our loyal customer, we'll prioritize your shipment.",
      "ko": "남: 제가 구매한 물건의 배송을 신속히 처리할 수 있는 방법이 있을까요?\n여: 물론이죠, 조정해 드리겠습니다. 고객님이 저희의 단골고객인 만큼 우선적으로 배송해드리겠습니다."
     }
    ],
    "quiz": null,
    "tip": "· 관련 기출\n  loyal customer / frequent customer  단골 손님"
   },
   {
    "no": 30,
    "word": "extend the deadline",
    "pos": "",
    "meaning": "마감일을 연장하다",
    "derivatives": [],
    "examples": [
     {
      "en": "M: Beth, this project is going to require more research than I anticipated.\nW: Okay, I can extend the deadline for you.",
      "ko": "남: 베스, 이번 프로젝트는 제가 예상했던 것보다 더 많은 연구가 필요할 것 같습니다.\n여: 알겠어요, 기한을 연장해 드릴 수 있습니다."
     }
    ],
    "quiz": null,
    "tip": "· 관련 기출\n  extend the operation hours  운영 시간을 연장하다"
   },
   {
    "no": 31,
    "word": "set A apart from B",
    "pos": "",
    "meaning": "A를 B로부터 구별하다, 눈에 띄게 하다",
    "derivatives": [],
    "examples": [
     {
      "en": "M: Can you recommend some laptops for remote work?\nW: Sure, I recommend the HG X-100 model; what sets it apart from other brands is its impressive battery life.",
      "ko": "남: 원격 근무용 노트북 컴퓨터를 추천해주시겠어요?\n여: 물론이죠, HG X-100 모델을 추천합니다. 그 제품이 다른 브랜드와 차별화되는 점은 인상적인 배터리 수명입니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 32,
    "word": "corporate",
    "pos": "a.",
    "meaning": "회사의, 기업의",
    "derivatives": [],
    "examples": [
     {
      "en": "M: I'd like to ask you about your catering service. I'm having a corporate party next month, and I'd like to see your price list.\nW: Sure, I'd be happy to provide you with information about our services.",
      "ko": "남: 케이터링 서비스에 대해 문의드리고 싶습니다. 다음 달에 회사 파티를 하는데요, 귀사의 가격 리스트를 보고 싶어요.\n여: 물론이죠, 저희 서비스에 대한 정보를 제공해 드리겠습니다."
     }
    ],
    "quiz": null,
    "tip": "· 관련 기출\n  corporate event  회사 행사\n  corporate dinner  회식\n  corporate discount  기업 할인"
   },
   {
    "no": 33,
    "word": "keep A up to date",
    "pos": "",
    "meaning": "A에게 계속 최신 소식을 알려주다 (= keep A updated)",
    "derivatives": [],
    "examples": [
     {
      "en": "W: How's the project coming along?\nM: We've made some progress, but there are a few challenges we're facing. I'll keep you up to date on our developments.",
      "ko": "여: 프로젝트는 어떻게 되어 가나요?\n남: 진척이 좀 있습니다만, 몇 가지 어려움들을 직면하고 있어요. 개발 상황에 대해 계속 최신 소식을 알려드리겠습니다."
     }
    ],
    "quiz": null,
    "tip": "· 관련 기출\n  keep A informed[posted]  A에게 계속 소식을 알려주다"
   },
   {
    "no": 34,
    "word": "highly recommended",
    "pos": "",
    "meaning": "강력히 추천되는",
    "derivatives": [],
    "examples": [
     {
      "en": "M: Thanks for meeting with me. Your interior design services came highly recommended by a colleague of mine.\nW: It's my pleasure. Now, which section of your house do you want to remodel?",
      "ko": "남: 만나주셔서 감사합니다. 귀하의 인테리어 디자인 서비스를 제 동료가 강력히 추천했습니다.\n여: 천만에요. 그럼, 집의 어느 부분을 리모델링하고 싶으신가요?"
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 35,
    "word": "interview",
    "pos": "v., n.",
    "meaning": "v. (면접관이) 면접을 보다, (언론 기관에서) 인터뷰를 하다 / n. 면접, 인터뷰",
    "derivatives": [],
    "examples": [
     {
      "en": "M: How's your schedule looking this afternoon?\nW: I'm interviewing new applicants for our software engineer position at 3.",
      "ko": "남: 오늘 오후 일정이 어떤가요?\n여: 3시에 소프트웨어 엔지니어 자리에 지원한 새로운 지원자들 면접을 볼 겁니다."
     }
    ],
    "quiz": null,
    "tip": "· 관련 기출\n  conduct an interview  면접을 실시하다"
   },
   {
    "no": 36,
    "word": "accommodate",
    "pos": "v.",
    "meaning": "~을 수용하다",
    "derivatives": [],
    "examples": [
     {
      "en": "M: How large is the conference center for the workshop?\nW: It can accommodate up to 200 people.",
      "ko": "남: 워크숍을 위한 컨퍼런스 센터의 규모는 어느 정도입니까?\n여: 200명까지 수용 가능합니다."
     }
    ],
    "quiz": null,
    "tip": "· accommodate에는 여러 뜻이 있지만 LC에서는 주로 '~을 수용하다'라는 의미로 등장합니다. 참고로, 명사형 accommodation(숙박)도 자주 나오므로 꼭 알아 두세요."
   },
   {
    "no": 37,
    "word": "renovate",
    "pos": "v.",
    "meaning": "~을 개조하다",
    "derivatives": [],
    "examples": [
     {
      "en": "M: Are we still planning to renovate our office this summer?\nW: Yes, we're going to get all our desks and computers replaced and the walls repainted.",
      "ko": "남: 여전히 이번 여름에 사무실을 개조할 계획인가요?\n여: 네, 책상과 컴퓨터를 모두 교체하고 벽도 다시 칠할 예정입니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 38,
    "word": "capacity",
    "pos": "n.",
    "meaning": "용량, 수용력, 능력",
    "derivatives": [],
    "examples": [
     {
      "en": "M: What's the seating capacity of this auditorium?\nW: About 500 people.",
      "ko": "남: 이 강당의 좌석 수용력은 얼마나 되나요?\n여: 약 500명입니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 39,
    "word": "leak",
    "pos": "n.",
    "meaning": "누수",
    "derivatives": [],
    "examples": [
     {
      "en": "M: How should I deal with the leak under the sink?\nW: You should call a plumber.",
      "ko": "남: 싱크대 아래 누수를 어떻게 처리해야 할까요?\n여: 배관공에게 전화해 보세요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 40,
    "word": "property",
    "pos": "n.",
    "meaning": "부동산, 건물",
    "derivatives": [],
    "examples": [
     {
      "en": "M: This is Marland's Real Estate office.\nW: Hello, I'm interested in seeing the property on Olive Avenue that you have listed for sale on your website.",
      "ko": "남: 말랜드 부동산 사무실입니다.\n여: 안녕하세요, 웹사이트에 매물로 올려주신 올리브 애비뉴의 부동산을 보고 싶습니다."
     }
    ],
    "quiz": null,
    "tip": "· Part 3에서 아파트에 문제가 발생했을 때 property manager(부동산 관리인)에게 도움을 요청하는 대화가 종종 나옵니다."
   }
  ]
 },
 {
  "week": 4,
  "day": 17,
  "part": "Part 5,6",
  "title": "동사 ③",
  "words": [
   {
    "no": 1,
    "word": "inspect",
    "pos": "v.",
    "meaning": "점검하다, 검토하다",
    "derivatives": [
     {
      "word": "inspection",
      "pos": "n.",
      "meaning": "점검, 검토"
     },
     {
      "word": "inspector",
      "pos": "n.",
      "meaning": "조사관"
     }
    ],
    "examples": [
     {
      "en": "be thoroughly inspected by",
      "ko": "~에 의해 철저하게 점검되다"
     },
     {
      "en": "inspect billing statements for extra fees",
      "ko": "추가 요금에 대해 청구서를 검토하다"
     }
    ],
    "quiz": {
     "sentence": "Assembly line managers ------- the products frequently to ensure they meet quality standards.",
     "a": "inspect",
     "b": "perform",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 2,
    "word": "handle",
    "pos": "v.",
    "meaning": "처리하다, 다루다",
    "derivatives": [
     {
      "word": "handling",
      "pos": "n.",
      "meaning": "처리, 취급"
     }
    ],
    "examples": [
     {
      "en": "handle all inquiries about",
      "ko": "~에 대한 모든 문의사항을 처리하다"
     },
     {
      "en": "will be handled by the customer service department",
      "ko": "고객 서비스부에 의해 다뤄질 것이다"
     }
    ],
    "quiz": {
     "sentence": "All inquiries about our new service are ------- swiftly by our customer service representatives.",
     "a": "handled",
     "b": "applied",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 3,
    "word": "record",
    "pos": "v.",
    "meaning": "기록하다",
    "derivatives": [],
    "examples": [
     {
      "en": "recorded one's highest profits in the last quarter",
      "ko": "지난 분기에 가장 높은 이익을 기록했다"
     }
    ],
    "quiz": {
     "sentence": "As a result of decreased demand for wristwatches, Prestige Company ------- its lowest sales ever last year.",
     "a": "proved",
     "b": "recorded",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 4,
    "word": "intend",
    "pos": "v.",
    "meaning": "~하려고 생각하다, ~할 예정이다",
    "derivatives": [
     {
      "word": "intention",
      "pos": "n.",
      "meaning": "의도"
     },
     {
      "word": "intentionally",
      "pos": "ad.",
      "meaning": "고의로"
     },
     {
      "word": "intended",
      "pos": "a.",
      "meaning": "의도된"
     }
    ],
    "examples": [
     {
      "en": "intend to open a factory in",
      "ko": "~에 공장을 열 생각이다"
     },
     {
      "en": "be intended for employees who",
      "ko": "~한 직원들을 대상으로 할 예정이다"
     }
    ],
    "quiz": {
     "sentence": "Humble Industries reported that it ------- to discontinue production of its line of Nexus Microwaves next year.",
     "a": "intends",
     "b": "invites",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 5,
    "word": "select",
    "pos": "v.",
    "meaning": "선택하다, 선정하다",
    "derivatives": [
     {
      "word": "selective",
      "pos": "a.",
      "meaning": "까다로운, 선별적인"
     },
     {
      "word": "selection",
      "pos": "n.",
      "meaning": "선택 (대상)"
     }
    ],
    "examples": [
     {
      "en": "be selected for publication",
      "ko": "출판 대상으로 선택되다"
     },
     {
      "en": "select a replacement",
      "ko": "후임을 선정하다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Hamato has been ------- to receive the Architect of the Year award at the 7th Annual Architecture Convention.",
     "a": "selected",
     "b": "delivered",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 6,
    "word": "remove",
    "pos": "v.",
    "meaning": "제거하다",
    "derivatives": [
     {
      "word": "removal",
      "pos": "n.",
      "meaning": "제거"
     },
     {
      "word": "removable",
      "pos": "a.",
      "meaning": "제거할 수 있는"
     }
    ],
    "examples": [
     {
      "en": "be removed from the list",
      "ko": "목록에서 제거되다"
     }
    ],
    "quiz": {
     "sentence": "When ------- the bicycle parts from the packaging, Grind Cycles recommends checking the provided inventory list.",
     "a": "producing",
     "b": "removing",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 7,
    "word": "supply",
    "pos": "v.",
    "meaning": "공급하다, 제공하다",
    "derivatives": [
     {
      "word": "supplier",
      "pos": "n.",
      "meaning": "공급업체"
     }
    ],
    "examples": [
     {
      "en": "supply billing software",
      "ko": "청구 소프트웨어를 공급하다"
     },
     {
      "en": "supply all the materials",
      "ko": "모든 재료를 제공하다"
     }
    ],
    "quiz": {
     "sentence": "The personnel office will ------- all presenters at the job fair with ID tags that display the individual's name.",
     "a": "train",
     "b": "supply",
     "answer": "B"
    },
    "tip": "supply는 '물품'이라는 뜻의 복수명사 supplies로도 출제된다."
   },
   {
    "no": 8,
    "word": "repair",
    "pos": "v.",
    "meaning": "수리하다",
    "derivatives": [],
    "examples": [
     {
      "en": "repair a washing machine",
      "ko": "세탁기를 수리하다"
     },
     {
      "en": "need to be repaired",
      "ko": "수리되어야 하다"
     }
    ],
    "quiz": {
     "sentence": "Nile's Auto Shop normally ------- damaged vehicles completely within two weeks.",
     "a": "repairs",
     "b": "installs",
     "answer": "A"
    },
    "tip": "repair는 road repairs(도로 수리)처럼 명사로도 자주 출제된다."
   },
   {
    "no": 9,
    "word": "delay",
    "pos": "v.",
    "meaning": "연기하다, 지연시키다",
    "derivatives": [],
    "examples": [
     {
      "en": "be delayed by a construction project",
      "ko": "건설 프로젝트로 인해 연기되다"
     },
     {
      "en": "be significantly delayed",
      "ko": "상당히 지연되다"
     }
    ],
    "quiz": {
     "sentence": "The launch of Ronson Digital's latest laptop has been ------- due to extensive flooding at its factory.",
     "a": "included",
     "b": "delayed",
     "answer": "B"
    },
    "tip": "delay는 명사로도 사용될 수 있는데, 가산명사(delays in)와 불가산명사(without delay)로 모두 출제된다."
   },
   {
    "no": 10,
    "word": "feature",
    "pos": "v.",
    "meaning": "~을 특징으로 하다, 특별히 포함하다",
    "derivatives": [],
    "examples": [
     {
      "en": "feature a variety of events",
      "ko": "다양한 행사들을 특징으로 하다"
     },
     {
      "en": "feature live music",
      "ko": "라이브 음악을 특별히 포함하다"
     }
    ],
    "quiz": {
     "sentence": "This year's Hampton Film Festival will ------- several films made by local independent filmmakers.",
     "a": "feature",
     "b": "collect",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 11,
    "word": "address",
    "pos": "v.",
    "meaning": "(문제를) 다루다, 처리하다",
    "derivatives": [],
    "examples": [
     {
      "en": "address concerns about the budget proposal",
      "ko": "예산 제안서에 대한 우려를 다루다"
     },
     {
      "en": "address customer requests",
      "ko": "고객 요청을 처리하다"
     }
    ],
    "quiz": {
     "sentence": "To ------- the complaints from local residents, the city council will host a public forum next month.",
     "a": "prevent",
     "b": "address",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 12,
    "word": "hire",
    "pos": "v.",
    "meaning": "채용하다, 고용하다",
    "derivatives": [],
    "examples": [
     {
      "en": "hire a new manager",
      "ko": "새로운 부장을 채용하다"
     },
     {
      "en": "hire extra editors to meet the deadline",
      "ko": "마감일을 맞추기 위해 추가 편집자들을 채용하다"
     }
    ],
    "quiz": {
     "sentence": "Spinks Corporation wants to ------- a new graphic designer to improve its promotional materials.",
     "a": "hire",
     "b": "plan",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 13,
    "word": "access",
    "pos": "v.",
    "meaning": "~에 접근하다, ~을 이용하다",
    "derivatives": [
     {
      "word": "accessible",
      "pos": "a.",
      "meaning": "접근 가능한, 이용 가능한"
     }
    ],
    "examples": [
     {
      "en": "access important overseas markets by",
      "ko": "~함으로써 중요한 해외 시장에 접근하다"
     }
    ],
    "quiz": {
     "sentence": "Hasting Corporation hopes to ------- European markets with its new line of tablet computers.",
     "a": "access",
     "b": "proceed",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 14,
    "word": "resume",
    "pos": "v.",
    "meaning": "재개하다, 재개되다",
    "derivatives": [],
    "examples": [
     {
      "en": "will resume one's duties",
      "ko": "~의 직무를 재개할 것이다"
     },
     {
      "en": "will resume as soon as possible",
      "ko": "가능한 한 빨리 재개될 것이다"
     }
    ],
    "quiz": {
     "sentence": "Riley Railways' normal train service will ------- as soon as the snowstorm has passed.",
     "a": "assemble",
     "b": "resume",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 15,
    "word": "release",
    "pos": "v.",
    "meaning": "출시하다, 공개하다",
    "derivatives": [],
    "examples": [
     {
      "en": "release one's latest product",
      "ko": "신제품을 출시하다"
     },
     {
      "en": "release one's information to",
      "ko": "~에게 …의 정보를 공개하다"
     }
    ],
    "quiz": {
     "sentence": "Athletico is about to ------- its new line of running shoes in all major sportswear stores.",
     "a": "release",
     "b": "develop",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 16,
    "word": "cause",
    "pos": "v.",
    "meaning": "야기하다, 일으키다",
    "derivatives": [],
    "examples": [
     {
      "en": "cause traffic delays",
      "ko": "교통 지연을 야기하다"
     }
    ],
    "quiz": {
     "sentence": "The inclement weather has ------- power disruption throughout 30 percent of the city.",
     "a": "caused",
     "b": "directed",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 17,
    "word": "estimate",
    "pos": "v.",
    "meaning": "추정하다, 견적을 내다",
    "derivatives": [],
    "examples": [
     {
      "en": "estimate the number of working hours",
      "ko": "근무 시간을 추정하다"
     }
    ],
    "quiz": {
     "sentence": "By entering your shipping information, Corstin Delivery can ------- the amount of time it will take to deliver your order.",
     "a": "estimate",
     "b": "endure",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 18,
    "word": "reserve",
    "pos": "v.",
    "meaning": "예약하다, (권리를) 가지다",
    "derivatives": [
     {
      "word": "reservation",
      "pos": "n.",
      "meaning": "예약"
     },
     {
      "word": "reserved",
      "pos": "a.",
      "meaning": "보류된, 예약된"
     }
    ],
    "examples": [
     {
      "en": "reserve the table for the luncheon",
      "ko": "오찬을 위한 테이블을 예약하다"
     },
     {
      "en": "reserve the right to do",
      "ko": "~할 권리를 가지다"
     }
    ],
    "quiz": {
     "sentence": "Visit our Web site to ------- a room or to find out more information about our lodgings.",
     "a": "reserve",
     "b": "decide",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 19,
    "word": "transfer",
    "pos": "v.",
    "meaning": "(직장, 부서를) 전근하다, 이체하다",
    "derivatives": [],
    "examples": [
     {
      "en": "transfer to the accounting department",
      "ko": "회계부로 전근하다"
     },
     {
      "en": "transfer funds to another account",
      "ko": "자금을 다른 계좌로 이체하다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Connolly will be ------- to the Newport branch from the Cardiff branch in August.",
     "a": "placing",
     "b": "transferring",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 20,
    "word": "conduct",
    "pos": "v.",
    "meaning": "수행하다, 실시하다",
    "derivatives": [],
    "examples": [
     {
      "en": "conduct an inspection",
      "ko": "점검을 수행하다"
     },
     {
      "en": "conduct a tour of the factory",
      "ko": "공장 견학을 실시하다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Chong and his team will ------- an extensive analysis of the market research data.",
     "a": "detain",
     "b": "conduct",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 21,
    "word": "focus",
    "pos": "v.",
    "meaning": "초점을 맞추다, 집중하다",
    "derivatives": [],
    "examples": [
     {
      "en": "focus on analyzing financial data",
      "ko": "재무 데이터를 분석하는 데 초점을 맞추다"
     },
     {
      "en": "focus on developing a new material",
      "ko": "새로운 재료를 개발하는 데 집중하다"
     }
    ],
    "quiz": {
     "sentence": "The seminar ------- on developing management skills that can be applied to all kinds of businesses.",
     "a": "cooperates",
     "b": "focuses",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 22,
    "word": "guarantee",
    "pos": "v.",
    "meaning": "보장하다, 보증하다",
    "derivatives": [],
    "examples": [
     {
      "en": "guarantee its delivery time",
      "ko": "배송 시간을 보장하다"
     },
     {
      "en": "guarantee the privacy of personal information",
      "ko": "개인 정보 보호를 보장하다"
     }
    ],
    "quiz": {
     "sentence": "In order to ------- your place at the marketing workshop, you must register online by April 12.",
     "a": "guarantee",
     "b": "expand",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 23,
    "word": "grant",
    "pos": "v.",
    "meaning": "승인하다, 제공하다",
    "derivatives": [],
    "examples": [
     {
      "en": "grant Ms. Higgins a raise",
      "ko": "히긴스 씨에게 급여 인상을 승인하다"
     },
     {
      "en": "grant employees more paid leave",
      "ko": "직원들에게 더 많은 유급 휴가를 제공하다"
     }
    ],
    "quiz": {
     "sentence": "This voucher ------- the holder an extra meal of equal value when purchasing a meal at any Joker's Restaurant location.",
     "a": "accepts",
     "b": "grants",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 24,
    "word": "contact",
    "pos": "v.",
    "meaning": "연락하다",
    "derivatives": [],
    "examples": [
     {
      "en": "contact Mr. Hamilton in Human Resources",
      "ko": "인사팀의 해밀턴 씨에게 연락하다"
     }
    ],
    "quiz": {
     "sentence": "If you wish to request annual leave, please ------- the HR department on Extension 102.",
     "a": "contact",
     "b": "speak",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 25,
    "word": "exchange",
    "pos": "v.",
    "meaning": "(같은 종류로) 교환하다",
    "derivatives": [],
    "examples": [
     {
      "en": "exchange one's item for another item",
      "ko": "다른 제품으로 ~의 제품을 교환하다"
     }
    ],
    "quiz": {
     "sentence": "Diners who want to ------- one side dish with a different one should speak to their server.",
     "a": "exchange",
     "b": "design",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 26,
    "word": "launch",
    "pos": "v.",
    "meaning": "개시하다, 착수하다",
    "derivatives": [],
    "examples": [
     {
      "en": "launch an advertising campaign",
      "ko": "광고 캠페인을 개시하다"
     }
    ],
    "quiz": {
     "sentence": "To make sure its new cell phone is a success, Swipe Electronics will ------- a global marketing campaign.",
     "a": "launch",
     "b": "pass",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 27,
    "word": "decline",
    "pos": "v.",
    "meaning": "거절하다, 하락하다",
    "derivatives": [
     {
      "word": "declining",
      "pos": "a.",
      "meaning": "쇠퇴하는, 하락하는"
     }
    ],
    "examples": [
     {
      "en": "decline applications",
      "ko": "지원서를 거절하다"
     },
     {
      "en": "typically decline during the winter season",
      "ko": "보통 겨울철에 하락하다"
     }
    ],
    "quiz": {
     "sentence": "Demand for our range of hot beverages typically ------- during the summer months but recovers starting in October.",
     "a": "declines",
     "b": "delays",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 28,
    "word": "share",
    "pos": "v.",
    "meaning": "(물건, 의견을) 공유하다, 나누다",
    "derivatives": [],
    "examples": [
     {
      "en": "share the results of the poll",
      "ko": "여론조사의 결과를 공유하다"
     },
     {
      "en": "share any concerns",
      "ko": "어떠한 우려라도 나누다"
     }
    ],
    "quiz": {
     "sentence": "The CEO will ------- his plans for the company's continued growth at this week's board meeting.",
     "a": "split",
     "b": "share",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 29,
    "word": "limit",
    "pos": "v.",
    "meaning": "제한하다",
    "derivatives": [
     {
      "word": "limited",
      "pos": "a.",
      "meaning": "제한된, 한정된"
     },
     {
      "word": "limitation",
      "pos": "n.",
      "meaning": "한계"
     }
    ],
    "examples": [
     {
      "en": "limit one's presentation to 시간",
      "ko": "발표 시간을 ~로 제한하다"
     }
    ],
    "quiz": {
     "sentence": "In order to complete the order on time, we have no choice but to ------- employee lunch breaks to thirty minutes this week.",
     "a": "limit",
     "b": "separate",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 30,
    "word": "outline",
    "pos": "v.",
    "meaning": "요약하다, 간략하게 서술하다",
    "derivatives": [],
    "examples": [
     {
      "en": "outline the strengths of",
      "ko": "~의 강점을 요약하다"
     },
     {
      "en": "outline the basic responsibilities of",
      "ko": "~의 기본 의무를 간략하게 서술하다"
     }
    ],
    "quiz": {
     "sentence": "The memo distributed by Mr. Finnegan ------- the company's new marketing strategy and sales targets.",
     "a": "outlines",
     "b": "instructs",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 31,
    "word": "influence",
    "pos": "v.",
    "meaning": "영향을 미치다, 영향을 주다",
    "derivatives": [],
    "examples": [
     {
      "en": "influence consumer spending",
      "ko": "소비자 지출에 영향을 미치다"
     },
     {
      "en": "be influenced by",
      "ko": "~에 영향을 받다"
     }
    ],
    "quiz": {
     "sentence": "The mayor of Chester believes that the construction of the new amusement park will positively ------- local tourism.",
     "a": "influence",
     "b": "exchange",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 32,
    "word": "promise",
    "pos": "v.",
    "meaning": "약속하다",
    "derivatives": [],
    "examples": [
     {
      "en": "promise to reduce taxes",
      "ko": "세금을 줄이는 것을 약속하다"
     }
    ],
    "quiz": {
     "sentence": "The hiring committee decided to offer Mr. Reynolds the position of financial manager because he ------- to reduce annual expenditure.",
     "a": "followed",
     "b": "promised",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 33,
    "word": "encounter",
    "pos": "v.",
    "meaning": "(우연히) 마주치다, 접하다",
    "derivatives": [],
    "examples": [
     {
      "en": "encounter A abroad",
      "ko": "해외에서 A를 우연히 마주치다"
     },
     {
      "en": "encounter problems with products",
      "ko": "제품에 대한 문제를 접하다"
     }
    ],
    "quiz": {
     "sentence": "Users who ------- issues with our anti-virus software are advised to refer to the troubleshooting guide.",
     "a": "inform",
     "b": "encounter",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 34,
    "word": "substitute",
    "pos": "v.",
    "meaning": "대체하다, 대신하다",
    "derivatives": [],
    "examples": [
     {
      "en": "substitute honey for sugar",
      "ko": "설탕을 꿀로 대체하다"
     },
     {
      "en": "Pork may be substituted for beef.",
      "ko": "소고기가 돼지고기로 대체될 수 있습니다."
     }
    ],
    "quiz": {
     "sentence": "If you would prefer to reduce the calories of the recipe, you may ------- cream with low-fat yogurt.",
     "a": "substitute",
     "b": "classify",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 35,
    "word": "last",
    "pos": "v.",
    "meaning": "(기능이) 지속되다",
    "derivatives": [
     {
      "word": "lasting",
      "pos": "a.",
      "meaning": "지속적인, 오래 남는"
     }
    ],
    "examples": [
     {
      "en": "last longer than those of competitors",
      "ko": "경쟁사들의 제품보다 더 오래 지속되다"
     }
    ],
    "quiz": {
     "sentence": "All electrical components in the running machine are guaranteed to ------- for at least three years.",
     "a": "retain",
     "b": "last",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 36,
    "word": "present",
    "pos": "v.",
    "meaning": "제시하다, (선물, 상을) 받다",
    "derivatives": [],
    "examples": [
     {
      "en": "present one's card at the main entrance",
      "ko": "정문 입구에서 카드를 제시하다"
     },
     {
      "en": "be presented with an award",
      "ko": "상을 받다"
     }
    ],
    "quiz": {
     "sentence": "To gain access to the research laboratory, you must ------- your security pass to the guard at the entrance.",
     "a": "place",
     "b": "present",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 37,
    "word": "express",
    "pos": "v.",
    "meaning": "(감정을) 표현하다, 표하다",
    "derivatives": [
     {
      "word": "expression",
      "pos": "n.",
      "meaning": "표현"
     }
    ],
    "examples": [
     {
      "en": "express one's interest in",
      "ko": "~에 대한 관심을 표현하다"
     },
     {
      "en": "express full support for",
      "ko": "~에 대한 전폭적 지지를 표하다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Darling has ------- his support for the construction of a new manufacturing plant on the outskirts of Detroit.",
     "a": "expressed",
     "b": "focused",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 38,
    "word": "double",
    "pos": "v.",
    "meaning": "두 배가 되다",
    "derivatives": [],
    "examples": [
     {
      "en": "have nearly doubled in the last decade",
      "ko": "지난 10년간 거의 두 배가 되었다"
     }
    ],
    "quiz": {
     "sentence": "After ProVision's new game consoles sold out in stores, the price of the product almost ------- in online markets.",
     "a": "predicted",
     "b": "doubled",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 39,
    "word": "deliberate",
    "pos": "v.",
    "meaning": "숙고하다, 신중히 생각하다",
    "derivatives": [
     {
      "word": "deliberately",
      "pos": "ad.",
      "meaning": "신중하게"
     }
    ],
    "examples": [
     {
      "en": "deliberated for more than 6 hours before",
      "ko": "~하기 전에 6시간 이상 숙고했다"
     }
    ],
    "quiz": {
     "sentence": "Members of the judging panel ------- for two hours before announcing the winners of this year's UK Gymnastics Competition.",
     "a": "deliberated",
     "b": "mediated",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 40,
    "word": "welcome",
    "pos": "v.",
    "meaning": "환영하다, 맞이하다",
    "derivatives": [],
    "examples": [
     {
      "en": "welcome the new director",
      "ko": "신임 이사를 환영하다"
     },
     {
      "en": "welcome tour groups on Saturdays",
      "ko": "토요일마다 단체 견학을 맞이하다"
     }
    ],
    "quiz": {
     "sentence": "The Franklin Science Museum ------- visitors seven days a week, from 10 AM to 8 PM.",
     "a": "welcomes",
     "b": "introduces",
     "answer": "A"
    },
    "tip": ""
   }
  ]
 },
 {
  "week": 4,
  "day": 18,
  "part": "Part 5,6",
  "title": "동사 ④",
  "words": [
   {
    "no": 1,
    "word": "refund",
    "pos": "v.",
    "meaning": "환불해주다",
    "derivatives": [
     {
      "word": "refundable",
      "pos": "a.",
      "meaning": "환불 가능한"
     }
    ],
    "examples": [
     {
      "en": "have all charges refunded",
      "ko": "모든 요금을 환불 받다"
     }
    ],
    "quiz": {
     "sentence": "The cost of Mr. Black's plane ticket was ------- to him as the flight was overbooked.",
     "a": "changed",
     "b": "refunded",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 2,
    "word": "charge",
    "pos": "v.",
    "meaning": "(요금을) 청구하다, 충전하다",
    "derivatives": [],
    "examples": [
     {
      "en": "charge fees for all vehicles",
      "ko": "모든 차량에 대해 요금을 청구하다"
     },
     {
      "en": "charge laptops and mobile phones",
      "ko": "노트북과 휴대전화를 충전하다"
     }
    ],
    "quiz": {
     "sentence": "The convention center ------- parking fees for all vehicles between the hours of 9 AM and 6 PM.",
     "a": "charges",
     "b": "measures",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 3,
    "word": "recruit",
    "pos": "v.",
    "meaning": "채용하다",
    "derivatives": [
     {
      "word": "recruiting",
      "pos": "n.",
      "meaning": "채용"
     }
    ],
    "examples": [
     {
      "en": "recruit additional customer service representatives",
      "ko": "추가 고객 서비스 직원을 채용하다"
     }
    ],
    "quiz": {
     "sentence": "To ensure that the store's grand opening is a success, we plan to ------- an experienced event organizer.",
     "a": "recruit",
     "b": "complete",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 4,
    "word": "display",
    "pos": "v.",
    "meaning": "보여주다, 진열하다",
    "derivatives": [],
    "examples": [
     {
      "en": "display a parking permit",
      "ko": "주차 허가증을 보여주다"
     }
    ],
    "quiz": {
     "sentence": "Vendors should noticeably ------- both their business name and their vending permit on their stall or booth.",
     "a": "state",
     "b": "display",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 5,
    "word": "exhibit",
    "pos": "v.",
    "meaning": "전시하다",
    "derivatives": [
     {
      "word": "exhibition",
      "pos": "n.",
      "meaning": "전시회"
     }
    ],
    "examples": [
     {
      "en": "artists interested in exhibiting their work",
      "ko": "자신들의 작품을 전시하는 데 관심이 있는 예술가들"
     }
    ],
    "quiz": {
     "sentence": "Anyone interested in ------- their work at the Harmony Festival Gallery in the community center should contact Ms. Hughes.",
     "a": "acquiring",
     "b": "exhibiting",
     "answer": "B"
    },
    "tip": "exhibit은 명사로도 사용할 수 있지만, 명사의 의미일 때는 주로 exhibition으로 출제된다."
   },
   {
    "no": 6,
    "word": "issue",
    "pos": "v.",
    "meaning": "발행하다, 발부하다",
    "derivatives": [],
    "examples": [
     {
      "en": "issue building permits",
      "ko": "건축 허가증을 발행하다"
     },
     {
      "en": "issue a summary with a list of recommendations",
      "ko": "추천서 목록과 함께 요약본을 발부하다"
     }
    ],
    "quiz": {
     "sentence": "Your membership card for Stanton Library has been ------- and should arrive within three days.",
     "a": "included",
     "b": "issued",
     "answer": "B"
    },
    "tip": "issue가 명사로 사용되는 경우, '(잡지의) 호' 또는 '(사회) 문제' 등 동사와는 전혀 다른 뜻으로 사용된다."
   },
   {
    "no": 7,
    "word": "gain",
    "pos": "v.",
    "meaning": "얻다, 늘리다",
    "derivatives": [],
    "examples": [
     {
      "en": "gain the necessary experience",
      "ko": "필요한 경험을 얻다"
     },
     {
      "en": "gain 4,000 jobs in the technology industry",
      "ko": "기술 업계에서 4,000개의 일자리를 늘리다"
     }
    ],
    "quiz": {
     "sentence": "It has been shown that our seminars help entry-level employees to ------- confidence.",
     "a": "complete",
     "b": "gain",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 8,
    "word": "renovate",
    "pos": "v.",
    "meaning": "개조하다, 보수하다",
    "derivatives": [
     {
      "word": "renovation",
      "pos": "n.",
      "meaning": "개조, 보수"
     }
    ],
    "examples": [
     {
      "en": "be fully renovated into a sports arena",
      "ko": "스포츠 경기장으로 완전히 개조되다"
     },
     {
      "en": "renovate houses and flats",
      "ko": "주택과 아파트를 보수하다"
     }
    ],
    "quiz": {
     "sentence": "Known for its outstanding designs and reliable workforce, Garmond Interiors ------- both residential and business properties.",
     "a": "insures",
     "b": "renovates",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 9,
    "word": "find",
    "pos": "v.",
    "meaning": "확인하다, 찾다",
    "derivatives": [
     {
      "word": "findings",
      "pos": "n.",
      "meaning": "발견물, 조사 결과"
     }
    ],
    "examples": [
     {
      "en": "find enclosed one's membership card",
      "ko": "동봉된 회원 카드를 확인하다"
     },
     {
      "en": "find the way around the convention center",
      "ko": "컨벤션 센터 주변의 길을 찾다"
     }
    ],
    "quiz": {
     "sentence": "Please ------- enclosed a gift voucher that can be exchanged for a free dessert at any Roma Pasta location.",
     "a": "look",
     "b": "find",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 10,
    "word": "allow",
    "pos": "v.",
    "meaning": "~하게 해주다, 허용하다",
    "derivatives": [
     {
      "word": "allowance",
      "pos": "n.",
      "meaning": "허용"
     }
    ],
    "examples": [
     {
      "en": "allow users to automate repetitive tasks",
      "ko": "사용자들이 반복 업무를 자동화할 수 있게 해주다"
     },
     {
      "en": "allow customers to upgrade from A to B",
      "ko": "고객들이 A에서 B로 업그레이드하게 허용하다"
     }
    ],
    "quiz": {
     "sentence": "Mobile Mail ------- smartphone users to check up to ten different e-mail accounts using just one application.",
     "a": "allows",
     "b": "accepts",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 11,
    "word": "proceed",
    "pos": "v.",
    "meaning": "진행하다, 나아가다",
    "derivatives": [],
    "examples": [
     {
      "en": "if you would like to proceed",
      "ko": "진행하고 싶으시다면"
     },
     {
      "en": "proceed with development",
      "ko": "발전해 나가다"
     }
    ],
    "quiz": {
     "sentence": "Although there have been some reports of minor faults, Henley Technologies will ------- with the release of its new line of refrigerators.",
     "a": "proceed",
     "b": "treat",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 12,
    "word": "cancel",
    "pos": "v.",
    "meaning": "취소하다",
    "derivatives": [
     {
      "word": "cancellation",
      "pos": "n.",
      "meaning": "취소"
     }
    ],
    "examples": [
     {
      "en": "cancel one's subscription to",
      "ko": "~의 정기구독을 취소하다"
     },
     {
      "en": "cancel one's conference call",
      "ko": "전화회의를 취소하다"
     }
    ],
    "quiz": {
     "sentence": "If you would like to ------- your membership at Sierra Gym, please e-mail our customer support team.",
     "a": "cancel",
     "b": "offer",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 13,
    "word": "protect",
    "pos": "v.",
    "meaning": "보호하다",
    "derivatives": [
     {
      "word": "protective",
      "pos": "a.",
      "meaning": "보호하는"
     }
    ],
    "examples": [
     {
      "en": "protect the company's property",
      "ko": "회사의 자산을 보호하다"
     },
     {
      "en": "protect your home",
      "ko": "귀하의 자택을 보호하다"
     }
    ],
    "quiz": {
     "sentence": "Carter Health Clinic requires all workers to sign an agreement in order to ------- the privacy of its patients.",
     "a": "prevent",
     "b": "protect",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 14,
    "word": "remind",
    "pos": "v.",
    "meaning": "상기시키다",
    "derivatives": [
     {
      "word": "reminder",
      "pos": "n.",
      "meaning": "상기시키는 것"
     }
    ],
    "examples": [
     {
      "en": "I want to remind you that ~.",
      "ko": "~라는 점을 상기시켜 드리고 싶습니다."
     },
     {
      "en": "remind all visitors to be in the lobby",
      "ko": "모든 방문객들이 로비에 있도록 상기시키다"
     }
    ],
    "quiz": {
     "sentence": "To avoid any thefts or accidents, the apartment building manager ------- all tenants not to leave personal items in the corridors.",
     "a": "reminded",
     "b": "memorized",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 15,
    "word": "explain",
    "pos": "v.",
    "meaning": "설명하다",
    "derivatives": [
     {
      "word": "explanation",
      "pos": "n.",
      "meaning": "설명"
     }
    ],
    "examples": [
     {
      "en": "explain our proposal to customers",
      "ko": "고객들에게 우리의 제안을 설명하다"
     }
    ],
    "quiz": {
     "sentence": "Ms. Evers will ------- the new shift scheduling procedure to the heads of each department.",
     "a": "decide",
     "b": "explain",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 16,
    "word": "celebrate",
    "pos": "v.",
    "meaning": "기념하다",
    "derivatives": [
     {
      "word": "celebratory",
      "pos": "a.",
      "meaning": "기념하는"
     }
    ],
    "examples": [
     {
      "en": "celebrate the 20th anniversary of",
      "ko": "~의 20주년을 기념하다"
     }
    ],
    "quiz": {
     "sentence": "On July 29, Ms. Elba will ------- her twentieth anniversary as the CEO of Muntero Pharmaceuticals.",
     "a": "join",
     "b": "celebrate",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 17,
    "word": "hesitate",
    "pos": "v.",
    "meaning": "주저하다, 망설이다",
    "derivatives": [
     {
      "word": "hesitant",
      "pos": "a.",
      "meaning": "주저하는, 망설이는"
     },
     {
      "word": "hesitation",
      "pos": "n.",
      "meaning": "주저함, 망설임"
     }
    ],
    "examples": [
     {
      "en": "Do not hesitate to contact me.",
      "ko": "제게 연락하는 것을 주저하지 마십시오."
     }
    ],
    "quiz": {
     "sentence": "If you require assistance with setting up your device, please do not ------- to call our tech support team.",
     "a": "hesitate",
     "b": "qualify",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 18,
    "word": "describe",
    "pos": "v.",
    "meaning": "묘사하다, 설명하다",
    "derivatives": [
     {
      "word": "description",
      "pos": "n.",
      "meaning": "묘사, 설명"
     }
    ],
    "examples": [
     {
      "en": "clearly describe the missing item",
      "ko": "분실물을 명확하게 묘사하다"
     }
    ],
    "quiz": {
     "sentence": "At the shareholder meeting, Mr. Peng ------- the company's goals and expansion plans for the coming year.",
     "a": "described",
     "b": "persisted",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 19,
    "word": "depart",
    "pos": "v.",
    "meaning": "출발하다, 떠나다",
    "derivatives": [
     {
      "word": "departure",
      "pos": "n.",
      "meaning": "출발"
     }
    ],
    "examples": [
     {
      "en": "depart from each station every 10 minutes",
      "ko": "매 10분마다 각 역을 출발하다"
     },
     {
      "en": "be scheduled to depart at 11:00 AM",
      "ko": "오전 11시에 떠날 예정이다"
     }
    ],
    "quiz": {
     "sentence": "A shuttle bus ------- every thirty minutes from the airport and stops at the Maxi Hotel and the Evercrest Inn.",
     "a": "exports",
     "b": "departs",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 20,
    "word": "occupy",
    "pos": "v.",
    "meaning": "(장소를) 사용하다, 점유하다",
    "derivatives": [],
    "examples": [
     {
      "en": "occupy the top floor of the building",
      "ko": "건물의 최고층을 사용하다"
     }
    ],
    "quiz": {
     "sentence": "Based on the first draft of the blueprint, Arcadia Cinema will ------- the entire top floor of the shopping mall.",
     "a": "sell",
     "b": "occupy",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 21,
    "word": "oversee",
    "pos": "v.",
    "meaning": "감독하다",
    "derivatives": [],
    "examples": [
     {
      "en": "oversee all aspects of the remodeling project",
      "ko": "리모델링 프로젝트의 모든 면을 감독하다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Rodrigo has been asked to ------- all aspects of the employee orientation program.",
     "a": "contend",
     "b": "oversee",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 22,
    "word": "enable",
    "pos": "v.",
    "meaning": "~할 수 있게 하다",
    "derivatives": [],
    "examples": [
     {
      "en": "enable people to be more efficient",
      "ko": "사람들을 더 효율적이게 하다"
     }
    ],
    "quiz": {
     "sentence": "The improved assembly line technology would ------- the manufacturing plant to triple its production rate.",
     "a": "enable",
     "b": "prefer",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 23,
    "word": "enroll",
    "pos": "v.",
    "meaning": "등록하다(in)",
    "derivatives": [
     {
      "word": "enrollment",
      "pos": "n.",
      "meaning": "등록(자 수)"
     }
    ],
    "examples": [
     {
      "en": "enroll in the sales seminar",
      "ko": "영업 세미나에 등록하다"
     }
    ],
    "quiz": {
     "sentence": "All Minturn Inc. employees can ------- in the advanced sales workshop free of charge.",
     "a": "enroll",
     "b": "apply",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 24,
    "word": "add",
    "pos": "v.",
    "meaning": "추가하다, (말을) 덧붙이다",
    "derivatives": [
     {
      "word": "addition",
      "pos": "n.",
      "meaning": "추가"
     },
     {
      "word": "additional",
      "pos": "a.",
      "meaning": "추가의"
     },
     {
      "word": "additionally",
      "pos": "ad.",
      "meaning": "게다가"
     }
    ],
    "examples": [
     {
      "en": "be added",
      "ko": "추가되다"
     },
     {
      "en": "add that",
      "ko": "~라고 덧붙이다"
     }
    ],
    "quiz": {
     "sentence": "In her closing statement, the new CEO ------- that she is looking forward to taking on new challenges.",
     "a": "provided",
     "b": "added",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 25,
    "word": "relocate",
    "pos": "v.",
    "meaning": "이전하다, 이사하다",
    "derivatives": [
     {
      "word": "relocation",
      "pos": "n.",
      "meaning": "이전, 이사"
     }
    ],
    "examples": [
     {
      "en": "relocate the plants' main base of operation",
      "ko": "공장 운영의 주된 근거지를 이전하다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Houston outlined numerous benefits of ------- the company's headquarters to Des Moines.",
     "a": "acquiring",
     "b": "relocating",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 26,
    "word": "restore",
    "pos": "v.",
    "meaning": "복구하다, 복원하다",
    "derivatives": [
     {
      "word": "restoration",
      "pos": "n.",
      "meaning": "복구, 복원"
     }
    ],
    "examples": [
     {
      "en": "restore the historic building to its former glory",
      "ko": "역사적 건물을 이전의 영화로운 상태로 복구하다"
     },
     {
      "en": "be restored to its original style by the city",
      "ko": "시에 의해 원래 양식으로 복원되다"
     }
    ],
    "quiz": {
     "sentence": "A renowned architectural firm has been contracted to ------- the 150-year-old Richmond Theater to its original condition.",
     "a": "restore",
     "b": "replace",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 27,
    "word": "mandate",
    "pos": "v.",
    "meaning": "의무화하다",
    "derivatives": [],
    "examples": [
     {
      "en": "mandate all workers to wear hard hats",
      "ko": "모든 근로자들이 안전모를 착용하는 것을 의무화하다"
     }
    ],
    "quiz": {
     "sentence": "To reduce the risk of computer viruses, new policies ------- all workers to keep anti-virus software installed.",
     "a": "organize",
     "b": "mandate",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 28,
    "word": "differ",
    "pos": "v.",
    "meaning": "다르다",
    "derivatives": [
     {
      "word": "different",
      "pos": "a.",
      "meaning": "다른"
     },
     {
      "word": "difference",
      "pos": "n.",
      "meaning": "차이"
     }
    ],
    "examples": [
     {
      "en": "differ based on the weekly promotion",
      "ko": "주간 홍보에 따라 다르다"
     },
     {
      "en": "differ in their opinions of",
      "ko": "~에 대한 의견이 다르다"
     }
    ],
    "quiz": {
     "sentence": "Salaries will ------- based on expertise and experience.",
     "a": "differ",
     "b": "calculate",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 29,
    "word": "maintain",
    "pos": "v.",
    "meaning": "유지하다",
    "derivatives": [
     {
      "word": "maintenance",
      "pos": "n.",
      "meaning": "유지보수"
     }
    ],
    "examples": [
     {
      "en": "maintain the current staffing level",
      "ko": "현재 직원 수준을 유지하다"
     }
    ],
    "quiz": {
     "sentence": "Pall Valley Beverages has ------- a strong customer base and plans to expand overseas next year.",
     "a": "afforded",
     "b": "maintained",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 30,
    "word": "possess",
    "pos": "v.",
    "meaning": "소유하다, 보유하다",
    "derivatives": [
     {
      "word": "possession",
      "pos": "n.",
      "meaning": "소유(물)"
     }
    ],
    "examples": [
     {
      "en": "possess a valid driver's license",
      "ko": "유효한 운전면허증을 소유하다"
     },
     {
      "en": "possess at least three years of experience",
      "ko": "적어도 3년의 경력을 보유하다"
     }
    ],
    "quiz": {
     "sentence": "Successful candidates should ------- at least four years of experience and expertise in human resources.",
     "a": "occupy",
     "b": "possess",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 31,
    "word": "preserve",
    "pos": "v.",
    "meaning": "보존하다, 보호하다",
    "derivatives": [
     {
      "word": "preservation",
      "pos": "n.",
      "meaning": "보존, 보호"
     }
    ],
    "examples": [
     {
      "en": "preserve its original features",
      "ko": "원래의 특성들을 보존하다"
     },
     {
      "en": "to preserve the historic city hall",
      "ko": "역사적인 시청 건물을 보호하기 위해"
     }
    ],
    "quiz": {
     "sentence": "The city council promised that the old theater will be ------- even though several adjacent buildings are scheduled for demolition.",
     "a": "preserved",
     "b": "specialized",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 32,
    "word": "discontinue",
    "pos": "v.",
    "meaning": "(서비스, 제품 생산을) 중단하다",
    "derivatives": [
     {
      "word": "discontinued",
      "pos": "a.",
      "meaning": "단종된"
     }
    ],
    "examples": [
     {
      "en": "discontinue its operations",
      "ko": "운영을 중단하다"
     },
     {
      "en": "Our model has been discontinued.",
      "ko": "저희 모델은 생산이 중단되었습니다."
     }
    ],
    "quiz": {
     "sentence": "Apex Sportswear is downsizing and will be ------- its least popular ranges of clothing.",
     "a": "unfolding",
     "b": "discontinuing",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 33,
    "word": "emphasize",
    "pos": "v.",
    "meaning": "강조하다",
    "derivatives": [
     {
      "word": "emphasis",
      "pos": "n.",
      "meaning": "강조"
     }
    ],
    "examples": [
     {
      "en": "emphasize the needs of",
      "ko": "~의 필요를 강조하다"
     },
     {
      "en": "emphasize its fuel efficiency",
      "ko": "연료 효율을 강조하다"
     }
    ],
    "quiz": {
     "sentence": "The founder of the technology company has ------- the importance of providing excellent customer service.",
     "a": "emphasized",
     "b": "demanded",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 34,
    "word": "analyze",
    "pos": "v.",
    "meaning": "분석하다",
    "derivatives": [
     {
      "word": "analysis",
      "pos": "n.",
      "meaning": "분석"
     }
    ],
    "examples": [
     {
      "en": "analyze all project details",
      "ko": "모든 프로젝트 세부사항을 분석하다"
     },
     {
      "en": "analyze the consumer survey",
      "ko": "소비자 설문조사를 분석하다"
     }
    ],
    "quiz": {
     "sentence": "The mechanical problems should be further ------- before any work on the production line is resumed.",
     "a": "conducted",
     "b": "analyzed",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 35,
    "word": "restrict",
    "pos": "v.",
    "meaning": "제한하다",
    "derivatives": [
     {
      "word": "restriction",
      "pos": "n.",
      "meaning": "제한"
     }
    ],
    "examples": [
     {
      "en": "restrict the availability of parking in the downtown area",
      "ko": "시내 지역에서 주차장 이용을 제한하다"
     }
    ],
    "quiz": {
     "sentence": "Parking is ------- on many of the streets surrounding Belmont Fire Station.",
     "a": "restricted",
     "b": "enhanced",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 36,
    "word": "commend",
    "pos": "v.",
    "meaning": "칭찬하다, 추천하다",
    "derivatives": [],
    "examples": [
     {
      "en": "be commended by one's supervisor for",
      "ko": "~에 대해 상사에게 칭찬받다"
     },
     {
      "en": "be commended by local authorities for",
      "ko": "지역 당국으로부터 ~에 대해 추천받다"
     }
    ],
    "quiz": {
     "sentence": "Ms. Finnigan has been ------- by the city council for raising over ten thousand dollars for local charities.",
     "a": "proposed",
     "b": "commended",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 37,
    "word": "endorse",
    "pos": "v.",
    "meaning": "(유명인이 제품, 기업 등을) 홍보하다, 지지하다",
    "derivatives": [
     {
      "word": "endorsement",
      "pos": "n.",
      "meaning": "홍보, 지지"
     }
    ],
    "examples": [
     {
      "en": "endorse eco-friendly transportation routes",
      "ko": "친환경적인 교통 경로를 홍보하다"
     },
     {
      "en": "agree to endorse the new makeup line",
      "ko": "새로운 메이크업 제품군을 홍보하는 것에 동의하다"
     }
    ],
    "quiz": {
     "sentence": "Famous baseball player Johnny Redmond has agreed to ------- our sportswear.",
     "a": "appeal",
     "b": "endorse",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 38,
    "word": "distinguish",
    "pos": "v.",
    "meaning": "구분 짓다, 구분하다",
    "derivatives": [],
    "examples": [
     {
      "en": "distinguish oneself by -ing",
      "ko": "~함으로써 자신을 구분 짓다"
     },
     {
      "en": "can be distinguished by their labels",
      "ko": "그들의 상표로 구분될 수 있다"
     }
    ],
    "quiz": {
     "sentence": "Our healthy food products can be easily ------- by their green \"government-certified\" labels.",
     "a": "distinguished",
     "b": "corrected",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 39,
    "word": "evaluate",
    "pos": "v.",
    "meaning": "평가하다",
    "derivatives": [
     {
      "word": "evaluation",
      "pos": "n.",
      "meaning": "평가(서)"
     }
    ],
    "examples": [
     {
      "en": "evaluate Ms. Monroe as a candidate",
      "ko": "먼로 씨를 후보자로서 평가하다"
     },
     {
      "en": "be evaluated quarterly",
      "ko": "분기별로 평가되다"
     }
    ],
    "quiz": {
     "sentence": "In order for us to ------- Mr. Kane as a potential collaborator, we asked him to submit a portfolio of his previous photography work.",
     "a": "evaluate",
     "b": "persuade",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 40,
    "word": "refrain",
    "pos": "v.",
    "meaning": "삼가다, 자제하다",
    "derivatives": [],
    "examples": [
     {
      "en": "refrain from talking to other people",
      "ko": "다른 사람들에게 말하는 것을 삼가다"
     }
    ],
    "quiz": {
     "sentence": "We ask that passengers ------- from leaving their seats while the plane is taking off.",
     "a": "refrain",
     "b": "prohibit",
     "answer": "A"
    },
    "tip": ""
   }
  ]
 },
 {
  "week": 4,
  "day": 19,
  "part": "Part 5,6",
  "title": "동사 + 전치사 콜로케이션",
  "words": [
   {
    "no": 1,
    "word": "evolve from",
    "pos": "",
    "meaning": "~로부터 진화하다, 발전하다",
    "derivatives": [],
    "examples": [
     {
      "en": "evolve from a mobile app developer",
      "ko": "모바일 어플 개발회사로부터 진화하다"
     }
    ],
    "quiz": {
     "sentence": "Over the past few years, the Redhill neighborhood has ------- from a quiet residential district into a popular shopping area.",
     "a": "evolved",
     "b": "elaborated",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 2,
    "word": "respond to",
    "pos": "",
    "meaning": "~에 응답하다",
    "derivatives": [],
    "examples": [
     {
      "en": "respond to rising demand",
      "ko": "증가하는 수요에 응답하다"
     },
     {
      "en": "respond to reporters' questions",
      "ko": "기자들의 질문에 응답하다"
     }
    ],
    "quiz": {
     "sentence": "At tenant association meetings, the organization's president often ------- to members' questions about rental rates.",
     "a": "applies",
     "b": "responds",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 3,
    "word": "look for",
    "pos": "",
    "meaning": "~을 찾다",
    "derivatives": [],
    "examples": [
     {
      "en": "look for a new shipping company",
      "ko": "새로운 운송 회사를 찾다"
     },
     {
      "en": "look for ways to reduce greenhouse gas emissions",
      "ko": "온실가스 배출을 줄이기 위한 방법들을 찾다"
     }
    ],
    "quiz": {
     "sentence": "The COO of Guelph Manufacturing is ------- for ways to make the production process more efficient.",
     "a": "looking",
     "b": "seeing",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 4,
    "word": "reply to",
    "pos": "",
    "meaning": "~에 답장하다",
    "derivatives": [],
    "examples": [
     {
      "en": "Please reply to this e-mail by Friday.",
      "ko": "금요일까지 이 이메일에 답장해주십시오."
     },
     {
      "en": "Please reply to this letter at your convenience.",
      "ko": "편하실 때 이 편지에 답장해주십시오."
     }
    ],
    "quiz": {
     "sentence": "Please ------- to this text message if you wish to change your appointment time for the dental surgery.",
     "a": "confirm",
     "b": "reply",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 5,
    "word": "register for",
    "pos": "",
    "meaning": "~에 등록하다",
    "derivatives": [],
    "examples": [
     {
      "en": "register for the guided tour",
      "ko": "가이드 투어에 등록하다"
     },
     {
      "en": "register for the conference",
      "ko": "컨퍼런스에 등록하다"
     }
    ],
    "quiz": {
     "sentence": "If no one ------- for the workshop, it will be canceled without prior notice.",
     "a": "registers",
     "b": "approves",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 6,
    "word": "participate in",
    "pos": "",
    "meaning": "~에 참가하다",
    "derivatives": [],
    "examples": [
     {
      "en": "participate in all the activities",
      "ko": "모든 활동에 참가하다"
     },
     {
      "en": "participate in the upcoming seminar",
      "ko": "곧 있을 세미나에 참가하다"
     }
    ],
    "quiz": {
     "sentence": "Local residents who wish to ------- in the upcoming town forum should register on the city council Web site.",
     "a": "participate",
     "b": "attend",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 7,
    "word": "expand into",
    "pos": "",
    "meaning": "~으로 확장하다",
    "derivatives": [],
    "examples": [
     {
      "en": "expand into the Wellington region",
      "ko": "웰링턴 지역으로 확장하다"
     },
     {
      "en": "consider expanding into overseas markets",
      "ko": "해외 시장으로 확장하는 것을 고려하다"
     }
    ],
    "quiz": {
     "sentence": "British sportswear company Salway Inc. announced in a press release that it is planning to expand ------- North America.",
     "a": "into",
     "b": "around",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 8,
    "word": "result in",
    "pos": "",
    "meaning": "~라는 결과를 낳다, (결과적으로) ~을 야기하다",
    "derivatives": [],
    "examples": [
     {
      "en": "result in a higher-quality product",
      "ko": "더 높은 품질의 상품이라는 결과를 낳다"
     },
     {
      "en": "result in a 30 percent increase",
      "ko": "30퍼센트 증가를 야기하다"
     }
    ],
    "quiz": {
     "sentence": "The more cost-effective product packaging will ------- in reduced product prices.",
     "a": "result",
     "b": "complete",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 9,
    "word": "focus on",
    "pos": "",
    "meaning": "~에 주력하다, 초점을 맞추다",
    "derivatives": [],
    "examples": [
     {
      "en": "focus on our most recent policy updates",
      "ko": "가장 최근의 정책 업데이트에 주력하다"
     },
     {
      "en": "focus on serving small businesses",
      "ko": "소규모 업체들에게 서비스를 제공하는 데 초점을 맞추다"
     }
    ],
    "quiz": {
     "sentence": "The seminar ------- on building strong work relationships between employees and customers.",
     "a": "cooperates",
     "b": "focuses",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 10,
    "word": "enroll in",
    "pos": "",
    "meaning": "~에 등록하다",
    "derivatives": [],
    "examples": [
     {
      "en": "enroll in the technology courses",
      "ko": "기술 강좌에 등록하다"
     },
     {
      "en": "enroll in the employee mentoring program",
      "ko": "직원 멘토링 프로그램에 등록하다"
     }
    ],
    "quiz": {
     "sentence": "Management requires all workers who have not attained the Level 1 safety certificate to ------- in the health and safety workshop.",
     "a": "enroll",
     "b": "attend",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 11,
    "word": "refer to",
    "pos": "",
    "meaning": "~을 참조하다",
    "derivatives": [],
    "examples": [
     {
      "en": "refer to the fourth page of the agreement",
      "ko": "계약서의 네 번째 페이지를 참조하다"
     },
     {
      "en": "Please refer to your employee guide.",
      "ko": "귀하의 직원 안내서를 참조하십시오."
     }
    ],
    "quiz": {
     "sentence": "For a list of licensed Mago Software vendors, please ------- to Page 10 of the user manual.",
     "a": "refer",
     "b": "adapt",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 12,
    "word": "appear on",
    "pos": "",
    "meaning": "~에 나타나다, 나오다",
    "derivatives": [],
    "examples": [
     {
      "en": "appear on the billing statement",
      "ko": "청구서에 나타나다"
     },
     {
      "en": "appear on a special broadcast",
      "ko": "특별 방송에 나오다"
     }
    ],
    "quiz": {
     "sentence": "Sam Singh, the founder of the social media platform, ------- on a two-hour episode of Joe Fagan's popular podcast.",
     "a": "appeared",
     "b": "seemed",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 13,
    "word": "consult with",
    "pos": "",
    "meaning": "~와 협의하다, 의논하다",
    "derivatives": [],
    "examples": [
     {
      "en": "consult with Mr. Bingham",
      "ko": "빙햄 씨와 협의하다"
     },
     {
      "en": "consult with an engineer",
      "ko": "기술자와 의논하다"
     }
    ],
    "quiz": {
     "sentence": "If you need to ------- with Mr. Kitson, please make an appointment with his personal assistant.",
     "a": "arrange",
     "b": "consult",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 14,
    "word": "come with",
    "pos": "",
    "meaning": "~이 딸려 오다",
    "derivatives": [],
    "examples": [
     {
      "en": "come with a standard one-year warranty",
      "ko": "표준 1년 보증서가 딸려 오다"
     }
    ],
    "quiz": {
     "sentence": "Each Lumos flashlight ------- with a 2-year warranty covering any manufacturer defects.",
     "a": "includes",
     "b": "comes",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 15,
    "word": "emerge as",
    "pos": "",
    "meaning": "~로 떠오르다, 등장하다",
    "derivatives": [],
    "examples": [
     {
      "en": "emerge as one of the most famous stars",
      "ko": "가장 유명한 스타들 중 한 명으로 떠오르다"
     }
    ],
    "quiz": {
     "sentence": "Fiona Middleton has ------- as the most likely candidate to take over for Mr. Stillman as CEO.",
     "a": "appointed",
     "b": "emerged",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 16,
    "word": "merge with",
    "pos": "",
    "meaning": "~와 합병하다, 합치다",
    "derivatives": [],
    "examples": [
     {
      "en": "will merge with another software company",
      "ko": "또 다른 소프트웨어 회사와 합병할 것이다"
     }
    ],
    "quiz": {
     "sentence": "Corsair Courier Services will ------- with Reliant Shipping early next year.",
     "a": "attract",
     "b": "merge",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 17,
    "word": "comply with",
    "pos": "",
    "meaning": "~을 지키다, 따르다",
    "derivatives": [],
    "examples": [
     {
      "en": "comply with the firm's new policy",
      "ko": "회사의 새로운 정책을 지키다"
     },
     {
      "en": "comply with safety regulations",
      "ko": "안전 규정을 따르다"
     }
    ],
    "quiz": {
     "sentence": "All appliances in our kitchens must ------- with the common safety standards of the restaurant industry.",
     "a": "associate",
     "b": "comply",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 18,
    "word": "consist of",
    "pos": "",
    "meaning": "~으로 구성되다",
    "derivatives": [],
    "examples": [
     {
      "en": "consist of community leaders",
      "ko": "지역사회 지도자들로 구성되다"
     },
     {
      "en": "consist of paintings and sculptures",
      "ko": "그림과 조각품들로 구성되다"
     }
    ],
    "quiz": {
     "sentence": "Halo Charitable Foundation ------- of more than 25,000 members based all over the world.",
     "a": "spreads",
     "b": "consists",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 19,
    "word": "coincide with",
    "pos": "",
    "meaning": "~와 겹치다, 일치하다",
    "derivatives": [],
    "examples": [
     {
      "en": "will coincide with the summer holidays",
      "ko": "여름 휴가와 겹칠 것이다"
     },
     {
      "en": "coincide with Ms. Emily's business trip",
      "ko": "에밀리 씨의 출장 일자와 일치하다"
     }
    ],
    "quiz": {
     "sentence": "The launch of Sunsport's new range of T-shirts and swimwear will ------- with the summer holidays.",
     "a": "produce",
     "b": "coincide",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 20,
    "word": "conform to",
    "pos": "",
    "meaning": "~에 따르다, 순응하다",
    "derivatives": [],
    "examples": [
     {
      "en": "conform to company standards",
      "ko": "회사 기준에 따르다"
     }
    ],
    "quiz": {
     "sentence": "Please ensure that your article's length and format ------- to the guidelines in the writing manual.",
     "a": "conform",
     "b": "attach",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 21,
    "word": "communicate with",
    "pos": "",
    "meaning": "~와 (의사)소통하다",
    "derivatives": [],
    "examples": [
     {
      "en": "communicate with family",
      "ko": "가족과 소통하다"
     },
     {
      "en": "communicate with other bidders",
      "ko": "다른 입찰자들과 소통하다"
     }
    ],
    "quiz": {
     "sentence": "Mobile messaging applications enable users to ------- easily with family and friends.",
     "a": "communicate",
     "b": "state",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 22,
    "word": "concentrate on",
    "pos": "",
    "meaning": "~에 집중하다",
    "derivatives": [],
    "examples": [
     {
      "en": "concentrate on the importance of customer service",
      "ko": "고객 서비스의 중요성에 집중하다"
     }
    ],
    "quiz": {
     "sentence": "The documentary will ------- on uncovering the reasons why the technology corporation went bankrupt.",
     "a": "concentrate",
     "b": "study",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 23,
    "word": "proceed with",
    "pos": "",
    "meaning": "~을 진행하다, 계속하다",
    "derivatives": [],
    "examples": [
     {
      "en": "proceed with development",
      "ko": "개발을 진행하다"
     },
     {
      "en": "will proceed with negotiations cautiously",
      "ko": "신중하게 협상을 계속할 것이다"
     }
    ],
    "quiz": {
     "sentence": "Although several faults were noted during the testing phase, it is crucial for us to ------- with the product launch schedule.",
     "a": "proceed",
     "b": "treat",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 24,
    "word": "revert to",
    "pos": "",
    "meaning": "~로 되돌아가다",
    "derivatives": [],
    "examples": [
     {
      "en": "revert to their original systems",
      "ko": "원래 시스템으로 되돌아가다"
     }
    ],
    "quiz": {
     "sentence": "After keeping the clothing store open until 7 PM for a few weeks, the owner decided to ------- to the original business hours.",
     "a": "recover",
     "b": "revert",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 25,
    "word": "collaborate with",
    "pos": "",
    "meaning": "~와 협동하다, 협력하다",
    "derivatives": [],
    "examples": [
     {
      "en": "collaborate with each other",
      "ko": "서로 협동하다"
     },
     {
      "en": "collaborate with marketing specialists",
      "ko": "마케팅 전문가와 협력하다"
     }
    ],
    "quiz": {
     "sentence": "The director of the movie ------- with Dr. Marjorie Irvine to ensure that all medical scenes were portrayed accurately.",
     "a": "provided",
     "b": "collaborated",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 26,
    "word": "specialize in",
    "pos": "",
    "meaning": "~을 전문으로 하다",
    "derivatives": [],
    "examples": [
     {
      "en": "specialize in machinery manufacturing",
      "ko": "기계 제작을 전문으로 하다"
     },
     {
      "en": "specialize in the beverage industry",
      "ko": "음료 산업을 전문으로 하다"
     }
    ],
    "quiz": {
     "sentence": "Attica Prints, one of the newest stores in Ascot Shopping Mall, ------- in converting photographs into posters or printed canvases.",
     "a": "specializes",
     "b": "identifies",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 27,
    "word": "compete against",
    "pos": "",
    "meaning": "~와 경쟁하다",
    "derivatives": [],
    "examples": [
     {
      "en": "compete against other construction firms",
      "ko": "다른 건축 회사들과 경쟁하다"
     }
    ],
    "quiz": {
     "sentence": "Before he can progress to the interview stage for the position, Mr. Raglan must first ------- against several other experienced applicants.",
     "a": "compete",
     "b": "associate",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 28,
    "word": "lead to",
    "pos": "",
    "meaning": "~로 이어지다",
    "derivatives": [],
    "examples": [
     {
      "en": "lead to an increase in parking fees",
      "ko": "주차 요금에서의 증가로 이어지다"
     },
     {
      "en": "lead to a permanent position",
      "ko": "정규직으로 이어지다"
     }
    ],
    "quiz": {
     "sentence": "The Mayor of Corben has insisted that hosting the music festival will not ------- to an increase in litter.",
     "a": "lead",
     "b": "intend",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 29,
    "word": "look into",
    "pos": "",
    "meaning": "~을 조사하다, 주의깊게 살피다",
    "derivatives": [],
    "examples": [
     {
      "en": "promise to look into the matter",
      "ko": "그 사안을 조사하기로 약속하다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Holden believes that the accounting department should ------- hiring an additional intern.",
     "a": "use up",
     "b": "look into",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 30,
    "word": "refrain from",
    "pos": "",
    "meaning": "~을 자제하다, 삼가다",
    "derivatives": [],
    "examples": [
     {
      "en": "refrain from talking to the people",
      "ko": "사람들에게 이야기하는 것을 자제하다"
     },
     {
      "en": "refrain from using mobile devices",
      "ko": "휴대기기를 사용하는 것을 삼가다"
     }
    ],
    "quiz": {
     "sentence": "Please ------- from feeding the animals when visiting Oakview City Farm.",
     "a": "refrain",
     "b": "differ",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 31,
    "word": "work on",
    "pos": "",
    "meaning": "~에 대해 작업하다, ~로 일하다",
    "derivatives": [],
    "examples": [
     {
      "en": "work on the Cambridge bridge",
      "ko": "캠브리지 다리에 대해 작업하다"
     },
     {
      "en": "work on the rotating shifts",
      "ko": "교대 근무로 일하다"
     }
    ],
    "quiz": {
     "sentence": "Staff members at Kathy's 24-Hour Diner ------- on rotating shifts and receive bonus pay between 10 PM and 6 AM.",
     "a": "work",
     "b": "employ",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 32,
    "word": "adhere to",
    "pos": "",
    "meaning": "~을 고수하다, ~에 (들러)붙다",
    "derivatives": [],
    "examples": [
     {
      "en": "adhere to the regulations stated in the manual",
      "ko": "안내서에 명시된 규정을 고수하다"
     },
     {
      "en": "adhere to the surface made of other materials",
      "ko": "다른 재질로 만들어진 표면에 붙다"
     }
    ],
    "quiz": {
     "sentence": "Press the suction cup of the camera firmly against the glass to ensure that it ------- to the vehicle's windshield.",
     "a": "adheres",
     "b": "polishes",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 33,
    "word": "meet with",
    "pos": "",
    "meaning": "~와 만나다",
    "derivatives": [],
    "examples": [
     {
      "en": "meet with clients who have appointments",
      "ko": "약속을 한 고객들과 만나다"
     },
     {
      "en": "meet with supervisors frequently",
      "ko": "상사들과 자주 만나다"
     }
    ],
    "quiz": {
     "sentence": "Ms. Lawson usually ------- only with clients based in the local area, but she has agreed to travel to Los Angeles to speak with Mr. Jenner.",
     "a": "fits",
     "b": "meets",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 34,
    "word": "depart from",
    "pos": "",
    "meaning": "~에서 출발하다, 떠나다",
    "derivatives": [],
    "examples": [
     {
      "en": "will depart from gate 47",
      "ko": "47번 게이트에서 출발할 것이다"
     }
    ],
    "quiz": {
     "sentence": "Before ------- from the baseball stadium, kindly place your trash in the bins provided.",
     "a": "departing",
     "b": "surrounding",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 35,
    "word": "rely on",
    "pos": "",
    "meaning": "~에 의존하다",
    "derivatives": [],
    "examples": [
     {
      "en": "rely on outside consultants",
      "ko": "외부 상담가들에 의존하다"
     },
     {
      "en": "rely on online product ratings",
      "ko": "온라인 상품 평가에 의존하다"
     }
    ],
    "quiz": {
     "sentence": "The launch of Mr. Anderson's new company will ------- on the financial backing of several investors.",
     "a": "interfere",
     "b": "rely",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 36,
    "word": "search for",
    "pos": "",
    "meaning": "~을 찾다",
    "derivatives": [],
    "examples": [
     {
      "en": "search for qualified candidates",
      "ko": "자격을 갖춘 지원자들을 찾다"
     },
     {
      "en": "search for specific phrases in an article",
      "ko": "한 기사에서 특정 문구들을 찾다"
     }
    ],
    "quiz": {
     "sentence": "The Bedford Times has hired a recruitment firm to ------- for skilled college graduates seeking a career in journalism.",
     "a": "search",
     "b": "replace",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 37,
    "word": "benefit from",
    "pos": "",
    "meaning": "~에서 이익을 얻다",
    "derivatives": [],
    "examples": [
     {
      "en": "benefit from the increasing competition",
      "ko": "증가하는 경쟁에서 이익을 얻다"
     },
     {
      "en": "benefit from the new data analysis program",
      "ko": "새로운 데이터 분석 프로그램에서 이익을 얻다"
     }
    ],
    "quiz": {
     "sentence": "Rosalita Coffee Shop ------- from its close proximity to Adelaide University.",
     "a": "explores",
     "b": "benefits",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 38,
    "word": "serve as",
    "pos": "",
    "meaning": "~로서 근무하다",
    "derivatives": [],
    "examples": [
     {
      "en": "serve as the temporary replacement",
      "ko": "임시 후임으로서 근무하다"
     },
     {
      "en": "be appointed to serve as the director",
      "ko": "이사로서 근무하도록 임명되다"
     }
    ],
    "quiz": {
     "sentence": "Andy Chen has been asked to ------- as the temporary branch manager while Ms. Pettigrew is on maternity leave.",
     "a": "recognize",
     "b": "serve",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 39,
    "word": "appeal to",
    "pos": "",
    "meaning": "~에게 호소하다, 매력적으로 다가가다",
    "derivatives": [],
    "examples": [
     {
      "en": "appeal to readers under the age of 19",
      "ko": "19세 미만의 독자들에게 호소하다"
     },
     {
      "en": "appeal to different types of customers",
      "ko": "다른 유형의 고객들에게 매력적으로 다가가다"
     }
    ],
    "quiz": {
     "sentence": "Lilypad Bistro has introduced a selection of vegetarian dishes to ------- an even broader customer base.",
     "a": "call out",
     "b": "appeal to",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 40,
    "word": "invest in",
    "pos": "",
    "meaning": "~에 투자하다",
    "derivatives": [],
    "examples": [
     {
      "en": "invest in renewable energy",
      "ko": "재생 에너지에 투자하다"
     },
     {
      "en": "invest in areas of promising research",
      "ko": "전망이 있는 연구 분야에 투자하다"
     }
    ],
    "quiz": {
     "sentence": "After consulting with his financial advisor, Mr. Hartmann decided to invest ------- a promising new technology company.",
     "a": "about",
     "b": "in",
     "answer": "B"
    },
    "tip": ""
   }
  ]
 },
 {
  "week": 4,
  "day": 20,
  "part": "Part 7",
  "title": "기출 동의어 ④",
  "words": [
   {
    "no": 1,
    "word": "depress",
    "pos": "",
    "meaning": "떨어뜨리다, 하락시키다; 우울하게 하다",
    "derivatives": [
     {
      "word": "reduce",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "lower",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "make unhappy",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "sadden",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "The announcement of a new technology upgrade would depress sales of the current model as customers wait for the improved version.",
      "ko": "소비자들이 개선된 버전을 기다리기 때문에 새로운 기술 업그레이드 소식은 현재 모델의 매출을 떨어뜨릴 것입니다."
     }
    ],
    "quiz": {
     "sentence": "The announcement of a new technology upgrade would depress sales of the current model as customers wait for the improved version.",
     "a": "reduce",
     "b": "sadden",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 2,
    "word": "illustrate",
    "pos": "",
    "meaning": "삽화를 쓰다; 분명히 보여주다",
    "derivatives": [
     {
      "word": "add pictures",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "decorate",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "represent",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "show",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "demonstrate",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Please write a short response about a time you faced a challenge and how you overcame it. Do your best to use an example that illustrates your character.",
      "ko": "당신이 어려움을 직면했던 때와, 어떻게 그것을 극복했는지에 관해 짧은 답변을 작성해 주세요. 당신의 성격을 분명히 보여주는 예시를 사용할 수 있도록 최선을 다해 주시기 바랍니다."
     }
    ],
    "quiz": {
     "sentence": "Please write a short response about a time you faced a challenge and how you overcame it. Do your best to use an example that illustrates your character.",
     "a": "decorates",
     "b": "represents",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 3,
    "word": "serious",
    "pos": "",
    "meaning": "심각한; 진심인, 진지한",
    "derivatives": [
     {
      "word": "severe",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "critical",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "earnest",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "The law firm is known for providing exceptional legal services, staffed by a team of serious and highly qualified attorneys.",
      "ko": "그 법률 회사는 진지하고 우수한 자격을 갖춘 변호사 팀을 갖추고 있어, 탁월한 법률 서비스를 제공하는 것으로 알려져 있습니다."
     }
    ],
    "quiz": {
     "sentence": "The law firm is known for providing exceptional legal services, staffed by a team of serious and highly qualified attorneys.",
     "a": "severe",
     "b": "earnest",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 4,
    "word": "hit",
    "pos": "",
    "meaning": "타격; 성공",
    "derivatives": [
     {
      "word": "impact",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "success",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Immediately after its release, Murphy Band's debut song was a hit and reached the number one spot on various music charts.",
      "ko": "발매와 동시에, 머피 밴드의 데뷔곡은 성공했고, 다수의 음악 차트에서 1위 자리에 이르렀습니다."
     }
    ],
    "quiz": {
     "sentence": "Immediately after its release, Murphy Band's debut song was a hit and reached the number one spot on various music charts.",
     "a": "impact",
     "b": "success",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 5,
    "word": "practice",
    "pos": "",
    "meaning": "관행; 훈련, 연습; (의료, 법률 등의) 직업 활동",
    "derivatives": [
     {
      "word": "regular action",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "custom",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "habit",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "training",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "exercise",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "professional business",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "In today's market, offering personalized shopping recommendations based on customer browsing history has become a common practice among e-commerce companies.",
      "ko": "오늘날의 시장에서는, 고객 검색 기록에 근거한 개인화된 쇼핑 추천을 제공하는 것이 전자 상거래 회사들 사이에서 흔한 관행이 되었습니다."
     }
    ],
    "quiz": {
     "sentence": "In today's market, offering personalized shopping recommendations based on customer browsing history has become a common practice among e-commerce companies.",
     "a": "regular action",
     "b": "training",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 6,
    "word": "commitment",
    "pos": "",
    "meaning": "헌신, 전념; 책임, 책무",
    "derivatives": [
     {
      "word": "dedication",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "devotion",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "responsibility",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "duty",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "We have taken various initiatives to demonstrate our commitment to environmentally friendly practices, such as reducing single-use plastic consumption and participating in community clean-up events.",
      "ko": "저희는 친환경적 관행에 대한 헌신을 증명하기 위해 일회용 플라스틱 소비 줄이기와 지역사회 환경미화 행사에 참여하기와 같이 다양한 계획을 실행했습니다."
     }
    ],
    "quiz": {
     "sentence": "We have taken various initiatives to demonstrate our commitment to environmentally friendly practices, such as reducing single-use plastic consumption and participating in community clean-up events.",
     "a": "dedication",
     "b": "responsibility",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 7,
    "word": "saturate",
    "pos": "",
    "meaning": "흠뻑 적시다; 포화 상태로 만들다",
    "derivatives": [
     {
      "word": "soak",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "fill",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "oversupply",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "When applying the cleaning solution, ensure that the fabric is not completely saturated to prevent potential damage.",
      "ko": "세척액을 바를 때는, 손상 가능성을 방지하기 위해 천이 완전히 흠뻑 젖지 않도록 유의해야 합니다."
     }
    ],
    "quiz": {
     "sentence": "When applying the cleaning solution, ensure that the fabric is not completely saturated to prevent potential damage.",
     "a": "soaked",
     "b": "filled",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 8,
    "word": "impression",
    "pos": "",
    "meaning": "인상, 느낌; 눌렀을 때 나는 자국",
    "derivatives": [
     {
      "word": "idea",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "mark",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "I get the impression that the clients from Pronto Motors were expecting a more original concept for their commercial.",
      "ko": "저는 프론트 모터스 측의 고객들이 그들의 광고에 대해 더 창의적인 컨셉을 기대하고 있었다는 인상을 받았습니다."
     }
    ],
    "quiz": {
     "sentence": "I get the impression that the clients from Pronto Motors were expecting a more original concept for their commercial.",
     "a": "idea",
     "b": "mark",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 9,
    "word": "spot",
    "pos": "",
    "meaning": "얼룩, 반점; 장소, 자리, 곳",
    "derivatives": [
     {
      "word": "mark",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "dot",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "place",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "With its breathtaking views and tranquil surroundings, it's hard to find a better spot for a relaxing weekend getaway.",
      "ko": "숨이 막히도록 아름다운 경치와 고요한 주변환경이 있어서, 편안한 주말 휴가를 보내기에 더 나은 장소를 찾기는 어렵습니다."
     }
    ],
    "quiz": {
     "sentence": "With its breathtaking views and tranquil surroundings, it's hard to find a better spot for a relaxing weekend getaway.",
     "a": "dot",
     "b": "place",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 10,
    "word": "beyond",
    "pos": "",
    "meaning": "~보다 뛰어난; (범위·한도) ~을 넘어, ~할 수 없는",
    "derivatives": [
     {
      "word": "superior to",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "outside the reach of",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "The extent of the water damage was so severe that your phone was beyond repair.",
      "ko": "침수 피해의 정도가 너무 심각해서 귀하의 휴대폰은 수리할 수 없었습니다."
     }
    ],
    "quiz": {
     "sentence": "The extent of the water damage was so severe that your phone was beyond repair.",
     "a": "superior to",
     "b": "outside the reach of",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 11,
    "word": "roll out",
    "pos": "",
    "meaning": "출시하다, 내놓다; 펼치다",
    "derivatives": [
     {
      "word": "introduce",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "spread",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "flatten",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "The company plans to roll out an entirely new model of the vehicle by the end of next year.",
      "ko": "그 회사는 내년 말까지 완전히 새로운 차량 모델을 출시할 계획입니다."
     }
    ],
    "quiz": {
     "sentence": "The company plans to roll out an entirely new model of the vehicle by the end of next year.",
     "a": "introduce",
     "b": "spread",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 12,
    "word": "consider",
    "pos": "",
    "meaning": "고려하다, 생각하다; ~라고 여기다",
    "derivatives": [
     {
      "word": "think about",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "regard",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "view",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "If you enjoyed your dining experience with us, please consider writing a review to share your feedback with others.",
      "ko": "저희와의 식사 경험에 만족하셨다면, 귀하의 의견을 다른 사람들과 나눌 수 있도록 후기를 작성하는 것을 고려해 주세요."
     }
    ],
    "quiz": {
     "sentence": "If you enjoyed your dining experience with us, please consider writing a review to share your feedback with others.",
     "a": "think about",
     "b": "regard",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 13,
    "word": "establish",
    "pos": "",
    "meaning": "설립하다; 입증하다",
    "derivatives": [
     {
      "word": "found",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "prove",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "confirm",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Our company was established in 1921, with just a team of three engineers, one designer, and one business manager.",
      "ko": "저희 회사는 1921년에 설립되었으며, 엔지니어 세 명, 디자이너 한 명, 그리고 영업 부장 한 명으로 이루어진 단 한 개의 팀으로 되어 있습니다."
     }
    ],
    "quiz": {
     "sentence": "Our company was established in 1921, with just a team of three engineers, one designer, and one business manager.",
     "a": "founded",
     "b": "proved",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 14,
    "word": "retain",
    "pos": "",
    "meaning": "유지하다, 보유하다; 기억하다",
    "derivatives": [
     {
      "word": "keep",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "remember",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Our flasks include a special coating that helps retain the temperature of your beverage, hot or cold.",
      "ko": "저희 물병 제품들은 따뜻하거나 차가운 음료의 온도를 유지하는 데 도움을 주는 특별한 코팅을 포함하고 있습니다."
     }
    ],
    "quiz": {
     "sentence": "Our flasks include a special coating that helps retain the temperature of your beverage, hot or cold.",
     "a": "keep",
     "b": "remember",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 15,
    "word": "welcome",
    "pos": "",
    "meaning": "환영하다, 맞이하다; 기꺼이 받아들이다",
    "derivatives": [
     {
      "word": "greet",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "accept",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "As a non-profit organization, we rely on the generosity of individuals like you, and we welcome donations to continue our important work.",
      "ko": "비영리 단체로서, 저희는 귀하와 같은 개인들의 관대함이 필요하며, 중요한 일을 계속할 수 있는 기부도 기꺼이 받습니다."
     }
    ],
    "quiz": {
     "sentence": "As a non-profit organization, we rely on the generosity of individuals like you, and we welcome donations to continue our important work.",
     "a": "greet",
     "b": "accept",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 16,
    "word": "boom",
    "pos": "",
    "meaning": "쿵 하는 소리; 호황, 갑작스런 인기",
    "derivatives": [
     {
      "word": "a loud sound",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "thunder",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "growth",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "increase",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "The town's economic boom continues, creating new jobs and boosting local markets.",
      "ko": "마을의 경제 호황이 계속되어, 새로운 일자리를 창출하고 지역 시장을 활성화하고 있습니다."
     }
    ],
    "quiz": {
     "sentence": "The town's economic boom continues, creating new jobs and boosting local markets.",
     "a": "sound",
     "b": "growth",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 17,
    "word": "point",
    "pos": "",
    "meaning": "요점; 의도, 의미; 요소, 항목, 세부; 시점; 특정 장소",
    "derivatives": [
     {
      "word": "main idea",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "purpose",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "detail",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "moment",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "place",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "As you know, our city is best known for having many ports that act as convenient points of arrival and departure for fishermen.",
      "ko": "여러분도 아시다시피, 우리 도시는 어부들에게 도착과 출발이 편리한 장소의 역할을 하는 항구들이 많은 것으로 잘 알려져 있습니다."
     }
    ],
    "quiz": {
     "sentence": "As you know, our city is best known for having many ports that act as convenient points of arrival and departure for fishermen.",
     "a": "purposes",
     "b": "places",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 18,
    "word": "pass",
    "pos": "",
    "meaning": "지나가다, 이동하다; 시간이 흐르다; 건네다",
    "derivatives": [
     {
      "word": "go",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "proceed",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "elapse",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "hand",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "give",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Several months need to pass before we can renew our construction permit again.",
      "ko": "여러 달이 지나야 건설 허가증을 다시 갱신할 수 있습니다."
     }
    ],
    "quiz": {
     "sentence": "Several months need to pass before we can renew our construction permit again.",
     "a": "give",
     "b": "elapse",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 19,
    "word": "address",
    "pos": "",
    "meaning": "응대하다, 해결하다; 연설하다, 말하다; 보내다, 전달하다",
    "derivatives": [
     {
      "word": "respond to",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "talk to",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "give a speech to",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "send",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "direct",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Action Telecom is striving to improve service by actively addressing customers' concerns.",
      "ko": "액션 텔레콤은 고객들의 우려를 적극적으로 해결함으로써 서비스를 개선하고자 노력하고 있습니다."
     }
    ],
    "quiz": {
     "sentence": "Action Telecom is striving to improve service by actively addressing customers' concerns.",
     "a": "responding to",
     "b": "sending",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 20,
    "word": "project",
    "pos": "",
    "meaning": "계획하다, 기획하다; 예상하다, 추정하다; (빛이나 소리를) 전달하다",
    "derivatives": [
     {
      "word": "plan",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "calculate",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "estimate",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "transmit",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Our high-end audio system allows for actors' voices to be projected clearly to all members of the audience, regardless of where their seat is located in the theater.",
      "ko": "저희의 고급 오디오 시스템은 관객들의 자리가 극장 어디에 있든지 관계없이, 배우의 목소리가 모든 관객들에게 또렷하게 전달될 수 있게 합니다."
     }
    ],
    "quiz": {
     "sentence": "Our high-end audio system allows for actors' voices to be projected clearly to all members of the audience, regardless of where their seat is located in the theater.",
     "a": "planned",
     "b": "transmitted",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 21,
    "word": "original",
    "pos": "",
    "meaning": "원래의, 처음의; 독특한, 창의적인",
    "derivatives": [
     {
      "word": "initial",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "unique",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "creative",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Please make sure to return the product in its original packaging to ensure a smooth return process.",
      "ko": "원활한 반환 과정이 될 수 있도록 제품을 원래의 포장에 반납해 주시기 바랍니다."
     }
    ],
    "quiz": {
     "sentence": "Please make sure to return the product in its original packaging to ensure a smooth return process.",
     "a": "initial",
     "b": "creative",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 22,
    "word": "gain",
    "pos": "",
    "meaning": "얻다, 획득하다; 늘리다, 늘다",
    "derivatives": [
     {
      "word": "obtain",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "increase",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "The access card provided can be used to gain entry to the building during non-business hours.",
      "ko": "제공된 출입 카드는 영업시간 외의 시간에 건물 출입 권한을 얻는 데 사용될 수 있습니다."
     }
    ],
    "quiz": {
     "sentence": "The access card provided can be used to gain entry to the building during non-business hours.",
     "a": "obtain",
     "b": "increase",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 23,
    "word": "facility",
    "pos": "",
    "meaning": "시설; 능력",
    "derivatives": [
     {
      "word": "establishment",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "capacity",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Most of the first day of training will be spent touring the manufacturing facility and the surrounding grounds.",
      "ko": "교육 첫날의 대부분은 제조 시설과 주변 장소를 견학하는 데 사용될 것입니다."
     }
    ],
    "quiz": {
     "sentence": "Most of the first day of training will be spent touring the manufacturing facility and the surrounding grounds.",
     "a": "establishment",
     "b": "capacity",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 24,
    "word": "design",
    "pos": "",
    "meaning": "만들다, 고안하다; 도안을 그리다",
    "derivatives": [
     {
      "word": "create",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "draw",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "sketch",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "The conference will feature a keynote speaker who will discuss how to design challenging and effective classes that cater to diverse learning styles.",
      "ko": "그 컨퍼런스는 다양한 학습 유형에 맞는, 도전적이고 효과적인 수업을 고안하는 방법에 관해 이야기할 기조 연설자를 특별히 포함할 것입니다."
     }
    ],
    "quiz": {
     "sentence": "The conference will feature a keynote speaker who will discuss how to design challenging and effective classes that cater to diverse learning styles.",
     "a": "create",
     "b": "draw",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 25,
    "word": "opening",
    "pos": "",
    "meaning": "개장, 개점; 공석",
    "derivatives": [
     {
      "word": "launch",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "vacancy",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "The mayor attended the ribbon-cutting ceremony to celebrate the opening of a new French restaurant, highlighting the city's growing culinary diversity.",
      "ko": "그 시장은 새로운 프랑스 레스토랑의 개업을 축하하기 위한 리본 커팅식에 참석하여 도시의 점점 커지고 있는 요리의 다양성을 강조했습니다."
     }
    ],
    "quiz": {
     "sentence": "The mayor attended the ribbon-cutting ceremony to celebrate the opening of a new French restaurant, highlighting the city's growing culinary diversity.",
     "a": "launch",
     "b": "vacancy",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 26,
    "word": "fine",
    "pos": "",
    "meaning": "숙련된, 솜씨 좋은; 기분 좋은, 컨디션이 좋은",
    "derivatives": [
     {
      "word": "skillful",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "agreeable",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Our master crafters do exceptionally fine work, creating furniture pieces that blend artistry and functionality.",
      "ko": "저희의 장인들은 대단히 솜씨 좋은 작업을 수행하여, 예술성과 기능성이 조화를 이루는 가구 작품을 만듭니다."
     }
    ],
    "quiz": {
     "sentence": "Our master crafters do exceptionally fine work, creating furniture pieces that blend artistry and functionality.",
     "a": "skillful",
     "b": "agreeable",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 27,
    "word": "standing",
    "pos": "",
    "meaning": "지위, 위치, 평판; 지속 기간",
    "derivatives": [
     {
      "word": "status",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "duration",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "The addition of new luxury resorts and a diverse range of recreational activities will further strengthen its standing as a growing vacation destination.",
      "ko": "새로운 호화 리조트들과 다양한 범위의 여가 활동이 추가로 생겨나서, 떠오르는 휴가지로서의 그곳의 평판이 더욱 강화될 것입니다."
     }
    ],
    "quiz": {
     "sentence": "The addition of new luxury resorts and a diverse range of recreational activities will further strengthen its standing as a growing vacation destination.",
     "a": "status",
     "b": "duration",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 28,
    "word": "pick up",
    "pos": "",
    "meaning": "가져가다; 들어올리다, 줍다; 회복되다, 개선되다",
    "derivatives": [
     {
      "word": "get",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "collect",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "obtain",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "lift",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "recover",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Kline Pharmacy sends its customers a text message when their prescriptions are ready to be picked up.",
      "ko": "클라인 약국은 고객들의 처방된 약이 가져갈 수 있도록 준비되면 그들에게 문자 메시지를 발송합니다."
     }
    ],
    "quiz": {
     "sentence": "Kline Pharmacy sends its customers a text message when their prescriptions are ready to be picked up.",
     "a": "obtained",
     "b": "recovered",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 29,
    "word": "temper",
    "pos": "",
    "meaning": "완화시키다; 단련시키다, 강하게 하다",
    "derivatives": [
     {
      "word": "moderate",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "harden",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "strengthen",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "Applying sunscreen daily can temper the effects of sun exposure, reducing the risk of skin damage.",
      "ko": "자외선 차단제를 매일 바르면 햇빛 노출로 인한 영향을 완화하여 피부 손상의 위험을 줄일 수 있습니다."
     }
    ],
    "quiz": {
     "sentence": "Applying sunscreen daily can temper the effects of sun exposure, reducing the risk of skin damage.",
     "a": "moderate",
     "b": "strengthen",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 30,
    "word": "work out",
    "pos": "",
    "meaning": "운동하다; 해결하다",
    "derivatives": [
     {
      "word": "exercise",
      "pos": "",
      "meaning": ""
     },
     {
      "word": "resolve",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [
     {
      "en": "We need to schedule a meeting to work out the details of the upcoming project launch.",
      "ko": "다가오는 프로젝트 출시의 세부사항을 해결할 수 있도록 회의 일정을 정해야 합니다."
     }
    ],
    "quiz": {
     "sentence": "We need to schedule a meeting to work out the details of the upcoming project launch.",
     "a": "exercise",
     "b": "resolve",
     "answer": "B"
    },
    "tip": ""
   }
  ]
 },
 {
  "week": 5,
  "day": 21,
  "part": "Part 2~4",
  "title": "LC가 잘 들리는 어휘 ③",
  "words": [
   {
    "no": 1,
    "word": "be held",
    "pos": "",
    "meaning": "열리다, 개최되다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Where will the technology trade show be held this year?\nM: In Orlando, Florida.",
      "ko": "여: 올해 기술 박람회는 어디에서 열리나요?\n남: 플로리다 주의 올랜도에서 열립니다."
     }
    ],
    "quiz": null,
    "tip": "• 관련 기출\nhold an event  행사를 개최하다\nhold a meeting  회의를 열다"
   },
   {
    "no": 2,
    "word": "pursue",
    "pos": "v.",
    "meaning": "~을 추구하다, ~을 해 나가다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Why did you pursue a career in music?\nM: Because I have a talent for it.",
      "ko": "여: 왜 음악 계통의 일을 택하게 하셨나요?\n남: 거기에 재능이 있어요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 3,
    "word": "representative",
    "pos": "n.",
    "meaning": "직원, 대표자",
    "derivatives": [],
    "examples": [
     {
      "en": "W: As a sales representative, you'll be working with a diverse range of customers.\nM: That's what I'm most looking forward to. I enjoy interacting with new people!",
      "ko": "여: 영업 직원으로서, 귀하는 다양한 고객들과 일하게 될 겁니다.\n남: 그게 바로 제가 가장 기대하는 것이에요. 저는 새로운 사람들과 교류하는 것을 즐깁니다!"
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 4,
    "word": "merger",
    "pos": "n.",
    "meaning": "합병",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Our company merger with Rudolph Technical Solutions is going to create a lot of changes to our working environment, won't it?\nM: Yes. I heard we might even be relocating to a new office in St. Louis.",
      "ko": "여: 우리 회사가 루돌프 테크니컬 솔루션즈 사와 합병하게 되면 업무 환경에 많은 변화가 생기겠죠?\n남: 네. 세인트 루이스에 있는 새 사무실로 옮길지도 모른다고 들었어요."
     }
    ],
    "quiz": null,
    "tip": "• 관련 기출\nmergers and acquisitions  기업 인수 합병(M&A)\nbe merged with  ~와 합병되다\nacquire  ~을 인수하다"
   },
   {
    "no": 5,
    "word": "rate",
    "pos": "n.",
    "meaning": "요금",
    "derivatives": [],
    "examples": [
     {
      "en": "W: What's the parking rate at Eastfield Mall?\nM: According to their website, it costs 3 dollars per hour.",
      "ko": "여: 이스트필드 몰의 주차 요금은 얼마입니까?\n남: 그들의 웹사이트에 의하면, 한 시간당 3달러입니다."
     }
    ],
    "quiz": null,
    "tip": "• 관련 기출\nfee / charge  요금, 수수료"
   },
   {
    "no": 6,
    "word": "vicinity",
    "pos": "n.",
    "meaning": "인근",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Where should we have our company dinner after the seminar?\nM: Let's search up what's in the vicinity of the conference center.",
      "ko": "여: 세미나 끝나고 회식 장소는 어디로 할까요?\n남: 회의장 인근에 뭐가 있는지 찾아봅시다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 7,
    "word": "feature",
    "pos": "",
    "meaning": "① n. 특색, 특징\n② n. 특집\n③ v. ~을 특별히 포함하다, 특징으로 삼다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Good morning. I'm looking for a new computer.\nM: Okay. What features are you looking for?",
      "ko": "여: 좋은 아침입니다. 저는 새 컴퓨터를 찾고 있어요.\n남: 알겠습니다. 어떤 특징을 찾고 계십니까?"
     },
     {
      "en": "W: I found out that our favorite restaurant was featured in a news article.\nM: That's great! What did they say about it?",
      "ko": "여: 뉴스 기사에 저희가 제일 좋아하는 식당이 특집으로 실렸다는 것을 알게 되었어요.\n남: 잘됐네요! 뭐라고 하던가요?"
     }
    ],
    "quiz": null,
    "tip": "• 관련 기출\nfeature article  (신문이나 잡지의) 인기 기사\nspecial feature  특별한 특집\nfeatured exhibit  특별 전시\nfeatured speaker[guest]  특별 연사[손님]"
   },
   {
    "no": 8,
    "word": "outdated",
    "pos": "a.",
    "meaning": "구식의",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Why are you installing new security cameras?\nM: Because our current cameras are outdated.",
      "ko": "여: 왜 새 보안 카메라를 설치하세요?\n남: 현재 카메라가 구식이어서요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 9,
    "word": "review",
    "pos": "n.",
    "meaning": "후기, 평",
    "derivatives": [],
    "examples": [
     {
      "en": "W: How have customer reviews been for our new line of silicon kitchen utensils?\nM: They've been mostly positive.",
      "ko": "여: 새로운 실리콘 주방용품 제품군에 대한 고객 평가가 어떱니까?\n남: 긍정적인 반응이 대부분입니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 10,
    "word": "stand out",
    "pos": "",
    "meaning": "눈에 띄다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: A new logo might help our business stand out more.\nM: I agree. Our current logo is quite outdated.",
      "ko": "여: 새 로고가 우리 회사를 더 눈에 띄게 하는 데 도움이 될 것 같아요.\n남: 맞아요. 현재 로고는 많이 구식이죠."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 11,
    "word": "operate",
    "pos": "v.",
    "meaning": "~을 작동시키다, 운영하다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: I don't know how to operate this coffee machine.\nM: I've never used it, either. Maybe there are instructions on the side.",
      "ko": "여: 이 커피 머신 작동법을 모르겠어요.\n남: 저도 사용해 본 적 없어요. 측면에 사용 설명서가 있을 지도 몰라요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 12,
    "word": "on short notice",
    "pos": "",
    "meaning": "예고 없이, 촉박하게",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Sorry for letting you know on such short notice, but I'll need you to send me the sales report before the end of today.\nM: No problem, I'll send the report today.",
      "ko": "여: 이렇게 급하게 알려드려서 죄송합니다만, 오늘 내로 매출 보고서를 보내주셔야겠습니다.\n남: 문제 없어요, 보고서를 오늘 보내드리겠습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 13,
    "word": "apparently",
    "pos": "ad.",
    "meaning": "듣자 하니, 명백히",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Any updates on our competitors?\nM: Apparently, Big Star Electronics' latest reading tablet has received poor customer reviews.",
      "ko": "여: 경쟁사에 대한 최신 정보가 있나요?\n남: 듣자 하니, 최근 출시된 빅스타 전자의 독서용 태블릿은 고객들의 평가가 좋지 않은 것 같습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 14,
    "word": "refundable",
    "pos": "a.",
    "meaning": "환불 가능한",
    "derivatives": [],
    "examples": [
     {
      "en": "W: I purchased two tickets for a flight to Dubai this November, but I want to cancel them.\nM: Okay. I see that you selected flexible tickets, so your purchase should be fully refundable. How would you like to receive your payment back?",
      "ko": "여: 이번 11월에 두바이로 가는 비행기 표를 두 장 구매했는데, 취소하고 싶습니다.\n남: 알겠습니다. 변경 가능한 항공권을 선택하셨기 때문에 전액 환불이 가능할 것 같습니다. 결제금은 어떻게 돌려받으시겠어요?"
     }
    ],
    "quiz": null,
    "tip": "• 관련 기출\nfull refund  전액 환불\npartial refund  부분 환불"
   },
   {
    "no": 15,
    "word": "prescription",
    "pos": "n.",
    "meaning": "처방, 처방전, 처방된 약",
    "derivatives": [],
    "examples": [
     {
      "en": "W: I'm here to pick up some cold medicine that was prescribed to me by my doctor.\nM: May I see your prescription, please?",
      "ko": "여: 의사에게 처방 받은 감기약을 받으러 왔습니다.\n남: 처방전을 볼 수 있을까요?"
     }
    ],
    "quiz": null,
    "tip": "• 관련 기출\nfill a prescription  처방전대로 약을 조제하다\npick up one's prescription  처방된 약 찾아가다"
   },
   {
    "no": 16,
    "word": "be aware + that절 / be aware of + 명사",
    "pos": "",
    "meaning": "~을 알고 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Please be aware that our library closes early on weekends.\nM: Okay, I'll make a note of it on my calendar.",
      "ko": "여: 저희 도서관이 주말엔 일찍 닫는다는 걸 알아 두세요.\n남: 알겠습니다, 달력에 적어 둘게요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 17,
    "word": "lease",
    "pos": "",
    "meaning": "v. 임대하다, 임차하다\nn. 임대, 임대차 계약",
    "derivatives": [],
    "examples": [
     {
      "en": "W: There's a lovely apartment available for rent on Main Street.\nM: Great! My current lease is about to expire, so I'll definitely consider it.",
      "ko": "여: 메인 스트리트에 임대할 수 있는 아파트가 좋은 게 하나 있습니다.\n남: 잘됐네요! 제 현재 임대차 계약이 곧 만료되어서, 그걸 꼭 고려해 봐야겠어요."
     },
     {
      "en": "W: What a nice office! Are you leasing this space?\nM: Yes. I signed a two-year contract.",
      "ko": "여: 사무실이 참 좋네요! 이 공간을 임대하시는 건가요?\n남: 네, 2년 계약을 했습니다."
     }
    ],
    "quiz": null,
    "tip": "• 관련 기출\nlong-term lease  장기 임대\nlease agreement  임대 계약(서)"
   },
   {
    "no": 18,
    "word": "get to + 장소",
    "pos": "",
    "meaning": "~에 도착하다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: How long does it take to get to Ann Arbor from here?\nM: If you take the express train, only about one hour.",
      "ko": "여: 여기서 앤 아버까지 얼마나 걸립니까?\n남: 급행 열차를 타면 한 시간 정도밖에 안 걸립니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 19,
    "word": "keep up with",
    "pos": "",
    "meaning": "~을 뒤처지지 않고 따라가다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: How are you able to keep up with your meetings and appointments? You seem so busy all the time.\nM: I use a calendar app to help me keep track of everything.",
      "ko": "여: 회의나 약속을 어떻게 잘 따라가시는 거죠? 항상 바쁘신 것 같은데.\n남: 달력 앱을 사용해서 모든 것을 놓치지 않게 도움을 받고 있어요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 20,
    "word": "draft",
    "pos": "",
    "meaning": "n. 원고, 초안\nv. 원고를 작성하다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: When can I see the final draft of the project proposal?\nM: I'm aiming to have it ready for your review by tomorrow morning.",
      "ko": "여: 프로젝트 제안서의 최종 원고를 언제 볼 수 있을까요?\n남: 내일 오전까지 검토하실 수 있게 준비할 것을 목표로 하고 있어요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 21,
    "word": "ideal",
    "pos": "a.",
    "meaning": "이상적인, 가장 알맞은, 완벽한",
    "derivatives": [],
    "examples": [
     {
      "en": "W: What do you think of the apartment?\nM: Its location is ideal for us working downtown.",
      "ko": "여: 그 아파트에 대해 어떻게 생각해요?\n남: 위치가 시내에서 근무하는 우리에게 이상적이에요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 22,
    "word": "set up",
    "pos": "",
    "meaning": "~을 설치하다, 세팅하다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Could you set up the chairs for the afternoon meeting?\nM: Sure, I'd be happy to.",
      "ko": "여: 오후 회의를 위해 의자들을 세팅해 주겠어요?\n남: 그럼요, 기꺼이요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 23,
    "word": "contractor",
    "pos": "n.",
    "meaning": "계약자, 도급업자",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Can we ask our IT worker to fix the electrical wiring issues?\nM: No, that's out of his scope of expertise. We'll have to hire a contractor.",
      "ko": "여: IT 담당자에게 전기 배선 문제를 해결해 달라고 요청할 수 있을까요?\n남: 아니요, 그건 그분의 전문 지식 범위를 벗어난 거예요. 우리가 도급업자를 고용해야 할 겁니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 24,
    "word": "bill",
    "pos": "",
    "meaning": "n. 고지서, 청구서\nv. ~에게 청구하다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: I don't understand why my water bill for this month is so high!\nM: Have you checked your lawn sprinklers? Many residents tend to leave them on for too long.",
      "ko": "여: 이번 달 수도 요금이 왜 이렇게 많이 나왔는지 이해가 안 가요!\n남: 잔디 스프링클러를 확인해보셨나요? 많은 주민들이 그것을 너무 오래 켜두는 경향이 있습니다."
     },
     {
      "en": "W: This is the customer call center for Horizon Mobile. How can I help you?\nM: Hi, I was billed an extra item for my mobile service last month, but I don't know why.",
      "ko": "여: 호라이즌 모바일의 고객 콜센터입니다. 무엇을 도와드릴까요?\n남: 안녕하세요, 지난달에 모바일 서비스에 대해 추가 요금을 청구받았는데, 이유를 모르겠습니다."
     }
    ],
    "quiz": null,
    "tip": "• 관련 기출\nbilling error  청구 오류\nbilling records  청구 기록\nbilling address  청구지 주소"
   },
   {
    "no": 25,
    "word": "projections",
    "pos": "n.",
    "meaning": "추정, 예상",
    "derivatives": [],
    "examples": [
     {
      "en": "W: How are our cost projections looking for next quarter?\nM: We should be able to stay well within budget as long as the price of raw materials does not increase.",
      "ko": "여: 다음 분기 비용 전망은 어떱니까?\n남: 원자재 가격이 오르지 않는 한 예산 내에서 잘 머무를 수 있을 겁니다."
     }
    ],
    "quiz": null,
    "tip": "• 관련 기출\nsales projections  매출 추정치"
   },
   {
    "no": 26,
    "word": "flyer",
    "pos": "n.",
    "meaning": "(광고용) 전단",
    "derivatives": [],
    "examples": [
     {
      "en": "W: My printing company specializes in making paper advertisements, like posters, banners, and flyers.\nM: I've seen your designs, and they look wonderful.",
      "ko": "여: 저희 인쇄소는 포스터, 현수막, 전단 같은 종이 광고를 만드는 것을 전문으로 합니다.\n남: 당신의 디자인을 봤는데, 정말 멋지더라고요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 27,
    "word": "subscription",
    "pos": "n.",
    "meaning": "구독",
    "derivatives": [],
    "examples": [
     {
      "en": "W: If I renew my subscription with your magazine for another year, can I get a discount?\nM: I'm sorry, only new subscribers can receive a reduced rate.",
      "ko": "여: 귀사의 잡지를 1년 더 구독하면 할인을 받을 수 있나요?\n남: 죄송합니다, 신규 가입자만 할인 혜택을 받을 수 있습니다."
     }
    ],
    "quiz": null,
    "tip": "• 관련 기출\n「subscribe to + 대상」 ~을 구독하다\nsubscriber  구독자"
   },
   {
    "no": 28,
    "word": "run out",
    "pos": "",
    "meaning": "~을 다 쓰다, ~이 다 떨어지다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Why haven't you finished printing the documents?\nM: We ran out of ink, so I've ordered more and it should be here soon.",
      "ko": "여: 왜 문서 인쇄를 끝내지 않았죠?\n남: 잉크가 떨어져서 더 주문했고, 곧 올 겁니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 29,
    "word": "transfer",
    "pos": "",
    "meaning": "n. 전근, 이동\nv. 전근하다, 이동하다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: What is your long-term goal if you were to work at our banking firm?\nM: Eventually, I want to transfer to an overseas branch and be an international representative for this company.",
      "ko": "여: 우리 은행에 일하게 된다면 장기적인 목표는 무엇입니까?\n남: 궁극적으로, 저는 해외 지사로 전근하여 이 회사의 국제 대표가 되고 싶습니다."
     }
    ],
    "quiz": null,
    "tip": "• 관련 기출\ntransfer money to  돈을 ~로 보내다\n☞ transfer는 '(돈을) 보내다, 송금하다'라는 뜻으로도 잘 나옵니다."
   },
   {
    "no": 30,
    "word": "no later than + 일시",
    "pos": "",
    "meaning": "늦어도 ~까지",
    "derivatives": [],
    "examples": [
     {
      "en": "W: By when do I need to submit the travel receipts from last week's business trip again?\nM: No later than this Thursday.",
      "ko": "여: 지난주 출장 영수증은 언제까지 다시 제출하면 되나요?\n남: 늦어도 이번 주 목요일까지입니다."
     }
    ],
    "quiz": null,
    "tip": "• 관련 기출\nby Thursday at the latest  늦어도 목요일까지\n☞ 같은 의미인 「by + 일시 + at the latest」도 함께 알아두세요."
   },
   {
    "no": 31,
    "word": "make sure",
    "pos": "",
    "meaning": "반드시 ~하도록 하다 (= ensure)",
    "derivatives": [],
    "examples": [
     {
      "en": "W: I think the table decorations look good and are all set now.\nM: Let's double-check the tableware to make sure nothing is missing.",
      "ko": "여: 테이블 장식도 보기 좋고 이제 다 준비된 것 같아요.\n남: 식기류를 다시 한번 점검해보고 누락된 부분이 없도록 합시다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 32,
    "word": "store",
    "pos": "v.",
    "meaning": "~을 보관하다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Where can I store these flyers until the opening event?\nM: In the closet over there.",
      "ko": "여: 개점 행사 때까지 이 전단들을 어디에 보관할까요?\n남: 저쪽에 있는 벽장에요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 33,
    "word": "make it",
    "pos": "",
    "meaning": "참석하다, 해내다, 시간에 맞게 가다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Where's the marketing seminar being held?\nM: Oh, I didn't think you could make it.",
      "ko": "여: 마케팅 세미나가 어디에서 열리죠?\n남: 오, 당신이 참석할 수 있을 거라고 생각 못했어요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 34,
    "word": "discontinue",
    "pos": "v.",
    "meaning": "~을 단종시키다, 중단하다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Hi, do you have this dishware set in stock?\nM: Unfortunately, that design got discontinued a few months ago.",
      "ko": "여: 안녕하세요, 혹시 이 식기 세트 재고가 있나요?\n남: 안타깝게도 그 디자인은 몇 달 전에 단종되었습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 35,
    "word": "warranty",
    "pos": "n.",
    "meaning": "제품의 품질 보증(서)",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Does this printer come with a lifetime warranty?\nM: Yes. If it needs to be repaired for whatever reason, we can do that for you free of charge.",
      "ko": "여: 이 프린터는 평생 보증이 제공되나요?\n남: 네, 어떤 이유로든 수리가 필요하시면 무료로 해드릴 수 있습니다."
     }
    ],
    "quiz": null,
    "tip": "• '제품에 ~이 딸려 나오다'라는 뜻의 표현을 알아 두세요.\nThis watch comes with an extra battery.\n이 손목시계는 추가 배터리가 딸려 나옵니다."
   },
   {
    "no": 36,
    "word": "promote",
    "pos": "",
    "meaning": "① v. 승진시키다\n② v. ~을 조장하다, 촉진하다\n③ v. ~을 홍보하다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Did you hear the news? Hong-joo got promoted and moved up into management.\nM: Really? She totally deserves it since she's always so diligent in her work.",
      "ko": "여: 그 소식 들었어요? 홍주 씨가 승진해서 경영진으로 올라갔어요.\n남: 정말요? 그녀는 항상 일에 부지런하기 때문에 충분히 그럴 자격이 있어요."
     },
     {
      "en": "W: What can we do to promote worker productivity?\nM: One effective approach could be to provide regular training and skill development opportunities.",
      "ko": "여: 직원 생산성을 촉진하려면 무엇을 할 수 있을까요?\n남: 정기적인 교육과 기술 개발 기회를 제공하는 것이 한 가지 효과적인 접근법이 될 수 있어요."
     },
     {
      "en": "W: We need new ideas on how to promote our business.\nM: How about running a limited-time discount?",
      "ko": "여: 사업을 어떻게 홍보할 것인지에 대한 새로운 아이디어가 필요합니다.\n남: 한시적 할인 행사를 운영하면 어떨까요?"
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 37,
    "word": "be public",
    "pos": "",
    "meaning": "공개되다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: What's the latest news about the upcoming merger?\nM: The information isn't public yet.",
      "ko": "여: 곧 있을 합병에 대해 최신 뉴스가 있습니까?\n남: 아직 정보가 공개되지 않았어요."
     }
    ],
    "quiz": null,
    "tip": "• 관련 기출\nthe public  일반 사람들, 대중"
   },
   {
    "no": 38,
    "word": "business card",
    "pos": "",
    "meaning": "명함",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Do you know how to contact me if you need further assistance?\nM: Certainly, I have your business card.",
      "ko": "남: 도움이 더 필요하실 경우 제게 연락할 방법을 아세요?\n여: 그럼요, 당신의 명함을 갖고 있어요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 39,
    "word": "fill in for",
    "pos": "",
    "meaning": "~을 대신하다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Are you available on Wednesday afternoon? I need someone to fill in for me that day.\nM: Let me check my calendar.",
      "ko": "여: 수요일 오후에 시간 되세요? 그날 저를 대신해 줄 사람이 필요해요.\n남: 제 달력을 확인해 볼게요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 40,
    "word": "cut back on",
    "pos": "",
    "meaning": "~을 줄이다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Don't you usually add vanilla syrup to your coffee?\nM: Yes, but my doctor told me that I should cut back on sugar.",
      "ko": "여: 보통 커피에 바닐라 시럽을 넣지 않나요?\n남: 네, 그런데 의사 선생님께서 제가 설탕을 줄여야 한다고 하셨어요."
     }
    ],
    "quiz": null,
    "tip": ""
   }
  ]
 },
 {
  "week": 5,
  "day": 22,
  "part": "Part 5,6",
  "title": "형용사 ①",
  "words": [
   {
    "no": 1,
    "word": "available",
    "pos": "a.",
    "meaning": "시간이 나는, 이용할 수 있는, 구할 수 있는",
    "derivatives": [],
    "examples": [
     {
      "en": "be available to work weekends",
      "ko": "주말에 일할 시간이 나다"
     },
     {
      "en": "be available between 9 AM and 6 PM",
      "ko": "오전 9시와 오후 6시 사이에 이용할 수 있다"
     }
    ],
    "quiz": {
     "sentence": "Three afternoon time slots are ------- for anyone who wishes to take a boat tour along the River Tyne.",
     "a": "available",
     "b": "necessary",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 2,
    "word": "local",
    "pos": "a.",
    "meaning": "지역의, 현지의",
    "derivatives": [],
    "examples": [
     {
      "en": "local greenhouse",
      "ko": "지역 온실"
     },
     {
      "en": "use grains only from local farms",
      "ko": "현지 농장에서 재배한 곡물만 사용하다"
     }
    ],
    "quiz": {
     "sentence": "The weekly farmers' market gives residents a chance to buy fresh produce from ------- farmers at low prices.",
     "a": "casual",
     "b": "local",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 3,
    "word": "recent",
    "pos": "a.",
    "meaning": "최근의",
    "derivatives": [],
    "examples": [
     {
      "en": "recent policy updates",
      "ko": "최근 정책 업데이트"
     },
     {
      "en": "the recent merger with",
      "ko": "~와의 최근 합병"
     }
    ],
    "quiz": {
     "sentence": "Meta Moon Chronicles is the most ------- recipient of the Video Game of the Year award.",
     "a": "late",
     "b": "recent",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 4,
    "word": "due",
    "pos": "a.",
    "meaning": "~하기로 예정된, 기한이 만료되는, 지불 기한인",
    "derivatives": [],
    "examples": [
     {
      "en": "be due back to the library",
      "ko": "도서관으로 돌아오기로 예정되어 있다"
     },
     {
      "en": "be due two weeks from the checkout date",
      "ko": "대출일로부터 2주 후에 반납 기한이 만료되다"
     }
    ],
    "quiz": {
     "sentence": "The amount stated on your electricity bill is ------- no later than June 14.",
     "a": "due",
     "b": "active",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 5,
    "word": "subject",
    "pos": "a.",
    "meaning": "~에 영향을 받는, ~하기 쉬운",
    "derivatives": [],
    "examples": [
     {
      "en": "be subject to additional charges",
      "ko": "추가 요금에 영향을 받을 수 있다"
     },
     {
      "en": "be subject to change without notice",
      "ko": "공지 없이 변경될 수 있다"
     }
    ],
    "quiz": {
     "sentence": "All ferry departure times are ------- to change in accordance with weather conditions.",
     "a": "general",
     "b": "subject",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 6,
    "word": "designed",
    "pos": "a.",
    "meaning": "고안된",
    "derivatives": [
     {
      "word": "design",
      "pos": "v.",
      "meaning": "고안하다, 디자인하다"
     }
    ],
    "examples": [
     {
      "en": "food designed to do",
      "ko": "~하기 위해 고안된 음식"
     },
     {
      "en": "be specifically designed for",
      "ko": "~을 위해 특별히 고안되다"
     }
    ],
    "quiz": {
     "sentence": "Ergo Solutions manufactures office desks and chairs ------- to improve posture and blood circulation.",
     "a": "designed",
     "b": "progressed",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 7,
    "word": "successful",
    "pos": "a.",
    "meaning": "성공적인",
    "derivatives": [
     {
      "word": "success",
      "pos": "n.",
      "meaning": "성공(작)"
     },
     {
      "word": "successfully",
      "pos": "ad.",
      "meaning": "성공적으로"
     },
     {
      "word": "succeed",
      "pos": "v.",
      "meaning": "성공하다, ~의 뒤를 잇다"
     }
    ],
    "examples": [
     {
      "en": "make our products successful",
      "ko": "우리의 제품들을 성공적으로 만들다"
     },
     {
      "en": "good ideas for successful writing",
      "ko": "성공적인 글쓰기를 위한 좋은 아이디어들"
     }
    ],
    "quiz": {
     "sentence": "The Turning of the Leaves is author Richard Dean's most ------- novel yet.",
     "a": "successful",
     "b": "wealthy",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 8,
    "word": "additional",
    "pos": "a.",
    "meaning": "추가적인",
    "derivatives": [
     {
      "word": "add",
      "pos": "v.",
      "meaning": "추가하다"
     },
     {
      "word": "addition",
      "pos": "n.",
      "meaning": "추가 (인원), 추가하는 것"
     },
     {
      "word": "additionally",
      "pos": "ad.",
      "meaning": "추가적으로, 게다가"
     }
    ],
    "examples": [
     {
      "en": "if you need additional information",
      "ko": "추가 정보가 필요하다면"
     },
     {
      "en": "take the following additional steps",
      "ko": "다음 추가 조치를 취하다"
     }
    ],
    "quiz": {
     "sentence": "Over the coming months, the accountant hopes to find ------- ways to reduce our business expenses.",
     "a": "additional",
     "b": "approximate",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 9,
    "word": "pleased",
    "pos": "a.",
    "meaning": "기쁜, 즐거운",
    "derivatives": [
     {
      "word": "pleasure",
      "pos": "n.",
      "meaning": "즐거움"
     },
     {
      "word": "pleasant",
      "pos": "a.",
      "meaning": "쾌적한"
     },
     {
      "word": "please",
      "pos": "v.",
      "meaning": "~을 즐겁게 하다"
     },
     {
      "word": "pleasing",
      "pos": "a.",
      "meaning": "기쁨을 주는"
     }
    ],
    "examples": [
     {
      "en": "be pleased to offer a new service",
      "ko": "새로운 서비스를 제공하게 되어 기쁘다"
     },
     {
      "en": "be pleased to announce that",
      "ko": "~라는 것을 알리게 되어 기쁘다"
     }
    ],
    "quiz": {
     "sentence": "Local residents were ------- to hear that the city council listened to their concerns regarding the construction proposal.",
     "a": "pleased",
     "b": "settled",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 10,
    "word": "current",
    "pos": "a.",
    "meaning": "현행의, 현재의",
    "derivatives": [
     {
      "word": "currently",
      "pos": "ad.",
      "meaning": "현재"
     }
    ],
    "examples": [
     {
      "en": "follow the current regulations",
      "ko": "현행 규정을 따르다"
     },
     {
      "en": "obtain the current schedule",
      "ko": "현재의 일정표를 얻다"
     }
    ],
    "quiz": {
     "sentence": "Several dishes on our ------- menu are likely to be discontinued based on feedback from our diners.",
     "a": "consistent",
     "b": "current",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 11,
    "word": "based",
    "pos": "a.",
    "meaning": "~에 기반한(on), 본사를 둔(in)",
    "derivatives": [
     {
      "word": "basis",
      "pos": "n.",
      "meaning": "기반, 기초, 토대"
     }
    ],
    "examples": [
     {
      "en": "based on our review of",
      "ko": "~의 후기에 기반한"
     },
     {
      "en": "based in Wellington",
      "ko": "웰링턴에 본사를 둔"
     }
    ],
    "quiz": {
     "sentence": "Next month, Mr. Senna will join a technology company ------- in San Francisco.",
     "a": "based",
     "b": "approved",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 12,
    "word": "interested",
    "pos": "a.",
    "meaning": "관심이 있는",
    "derivatives": [
     {
      "word": "interesting",
      "pos": "a.",
      "meaning": "흥미로운"
     }
    ],
    "examples": [
     {
      "en": "be interested in receiving the training",
      "ko": "교육을 받는 데 관심이 있다"
     },
     {
      "en": "interested in the sales job",
      "ko": "영업 직무에 관심이 있는"
     }
    ],
    "quiz": {
     "sentence": "Gym members who are ------- in attending our new yoga classes may sign up on our Web site.",
     "a": "interested",
     "b": "advanced",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 13,
    "word": "possible",
    "pos": "a.",
    "meaning": "가능한",
    "derivatives": [
     {
      "word": "possibility",
      "pos": "n.",
      "meaning": "가능성"
     },
     {
      "word": "possibly",
      "pos": "ad.",
      "meaning": "아마도"
     }
    ],
    "examples": [
     {
      "en": "make A possible in some areas",
      "ko": "일부 지역에서 A를 가능하게 하다"
     },
     {
      "en": "possible through brilliant marketing",
      "ko": "훌륭한 마케팅을 통해 가능한"
     }
    ],
    "quiz": {
     "sentence": "Mr. Brown intends to start up his business in any way -------, even if he needs to take out a sizable bank loan.",
     "a": "possible",
     "b": "valuable",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 14,
    "word": "limited",
    "pos": "a.",
    "meaning": "제한된, 한정된",
    "derivatives": [
     {
      "word": "limit",
      "pos": "n.",
      "meaning": "제한, 한도"
     },
     {
      "word": "limitation",
      "pos": "n.",
      "meaning": "제약, 한계"
     },
     {
      "word": "unlimited",
      "pos": "a.",
      "meaning": "한도가 없는, 무제한의"
     }
    ],
    "examples": [
     {
      "en": "for a limited time only",
      "ko": "제한된 시간 동안만"
     },
     {
      "en": "as seating is limited",
      "ko": "좌석 수가 한정되어 있으므로"
     }
    ],
    "quiz": {
     "sentence": "Half-price tickets for Honeydew Amusement Park are available for a ------- time only.",
     "a": "limited",
     "b": "speedy",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 15,
    "word": "main",
    "pos": "a.",
    "meaning": "주요한",
    "derivatives": [
     {
      "word": "mainly",
      "pos": "ad.",
      "meaning": "주로"
     }
    ],
    "examples": [
     {
      "en": "the main selling point for",
      "ko": "~에 대한 주요한 장점"
     }
    ],
    "quiz": {
     "sentence": "The emergence of artificial intelligence is the ------- theme of the current art exhibition at AX Gallery.",
     "a": "high",
     "b": "main",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 16,
    "word": "necessary",
    "pos": "a.",
    "meaning": "필수적인, 필요한",
    "derivatives": [
     {
      "word": "necessitate",
      "pos": "v.",
      "meaning": "필요하게 만들다"
     },
     {
      "word": "necessarily",
      "pos": "ad.",
      "meaning": "반드시"
     }
    ],
    "examples": [
     {
      "en": "The online store was becoming necessary.",
      "ko": "온라인 매장이 필수적인 것으로 되었다."
     }
    ],
    "quiz": {
     "sentence": "Please ensure that you include all ------- documents when submitting your application for a construction permit.",
     "a": "necessary",
     "b": "apparent",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 17,
    "word": "previous",
    "pos": "a.",
    "meaning": "이전의",
    "derivatives": [],
    "examples": [
     {
      "en": "ignore the previous message",
      "ko": "이전 메시지를 무시하다"
     },
     {
      "en": "on the basis of previous purchases",
      "ko": "이전 구매에 기반하여"
     }
    ],
    "quiz": {
     "sentence": "This year's music festival will feature 45 more performers than the ------- one did.",
     "a": "adjacent",
     "b": "previous",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 18,
    "word": "popular",
    "pos": "a.",
    "meaning": "인기 있는",
    "derivatives": [
     {
      "word": "popularity",
      "pos": "n.",
      "meaning": "인기"
     }
    ],
    "examples": [
     {
      "en": "popular among tourists",
      "ko": "관광객들 사이에서 인기 있는"
     },
     {
      "en": "the most popular ever",
      "ko": "여지껏 가장 인기 있는"
     }
    ],
    "quiz": {
     "sentence": "Our new range of sports shoes is becoming increasingly ------- with teenagers.",
     "a": "popular",
     "b": "numerous",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 19,
    "word": "effective",
    "pos": "a.",
    "meaning": "효과적인, 시행되는",
    "derivatives": [
     {
      "word": "effectively",
      "pos": "ad.",
      "meaning": "효과적으로"
     },
     {
      "word": "effect",
      "pos": "n.",
      "meaning": "영향"
     },
     {
      "word": "effectiveness",
      "pos": "n.",
      "meaning": "효과(성)"
     }
    ],
    "examples": [
     {
      "en": "highly effective measures to reduce costs",
      "ko": "비용을 줄일 매우 효과적인 조치들"
     },
     {
      "en": "effective October 4",
      "ko": "10월 4일부터 시행되는"
     }
    ],
    "quiz": {
     "sentence": "According to a recent article in Business Weekly, one of the most ------- marketing strategies is social media advertising.",
     "a": "effective",
     "b": "successive",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 20,
    "word": "leading",
    "pos": "a.",
    "meaning": "선도적인, 주도적인",
    "derivatives": [
     {
      "word": "leader",
      "pos": "n.",
      "meaning": "지도자, 리더"
     },
     {
      "word": "lead",
      "pos": "v.",
      "meaning": "초래하다(to), 이끌다"
     }
    ],
    "examples": [
     {
      "en": "become a leading manufacturer",
      "ko": "선도적인 제조사가 되다"
     },
     {
      "en": "a leading supplier",
      "ko": "선도적인 공급업체"
     }
    ],
    "quiz": {
     "sentence": "Since its founding ten years ago, Ebbon Manufacturing has become a ------- producer of microchips.",
     "a": "leading",
     "b": "continuing",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 21,
    "word": "upcoming",
    "pos": "a.",
    "meaning": "다가오는, 곧 있을",
    "derivatives": [],
    "examples": [
     {
      "en": "questions about the upcoming installation",
      "ko": "다가오는 설치 작업에 대한 질문들"
     },
     {
      "en": "do research for one's upcoming novel",
      "ko": "곧 나올 소설에 대한 조사를 하다"
     }
    ],
    "quiz": {
     "sentence": "Ms. Gellatly plans to hire more part-time workers to deal with demand during the ------- festive shopping period.",
     "a": "upcoming",
     "b": "potential",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 22,
    "word": "convenient",
    "pos": "a.",
    "meaning": "편리한, 편한",
    "derivatives": [
     {
      "word": "convenience",
      "pos": "n.",
      "meaning": "편리, 편의"
     },
     {
      "word": "conveniently",
      "pos": "ad.",
      "meaning": "편리하게"
     }
    ],
    "examples": [
     {
      "en": "offer convenient customer service hours",
      "ko": "편리한 고객 서비스 시간을 제공하다"
     },
     {
      "en": "time that would be convenient for all",
      "ko": "모두에게 편할 시간"
     }
    ],
    "quiz": {
     "sentence": "The Almond Hotel is in an extremely ------- location for those planning to attend an event at the conference center.",
     "a": "competent",
     "b": "convenient",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 23,
    "word": "accessible",
    "pos": "a.",
    "meaning": "접근 가능한, 이용 가능한",
    "derivatives": [],
    "examples": [
     {
      "en": "easily accessible by bus",
      "ko": "버스로 쉽게 접근 가능한"
     },
     {
      "en": "accessible only to customers with identification",
      "ko": "신분증을 가진 고객들만 이용 가능한"
     }
    ],
    "quiz": {
     "sentence": "Conference notes and presentation slides will be ------- on our Web site following the event.",
     "a": "accessible",
     "b": "responsible",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 24,
    "word": "various",
    "pos": "a.",
    "meaning": "다양한",
    "derivatives": [
     {
      "word": "vary",
      "pos": "v.",
      "meaning": "다양하다, 변하다"
     },
     {
      "word": "variation",
      "pos": "n.",
      "meaning": "변화"
     },
     {
      "word": "variable",
      "pos": "a.",
      "meaning": "변하기 쉬운, 가변적인"
     }
    ],
    "examples": [
     {
      "en": "offer tenants various conveniences",
      "ko": "세입자들에게 다양한 편의시설을 제공하다"
     },
     {
      "en": "various health-care services",
      "ko": "다양한 의료 복지 서비스"
     }
    ],
    "quiz": {
     "sentence": "Tents manufactured by Ventron come in ------- colors and sizes.",
     "a": "various",
     "b": "relative",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 25,
    "word": "residential",
    "pos": "a.",
    "meaning": "주거의",
    "derivatives": [
     {
      "word": "residence",
      "pos": "n.",
      "meaning": "집, 주택"
     },
     {
      "word": "resident",
      "pos": "n.",
      "meaning": "(거)주민"
     },
     {
      "word": "reside",
      "pos": "v.",
      "meaning": "거주하다"
     }
    ],
    "examples": [
     {
      "en": "include some residential services",
      "ko": "몇몇 주거 서비스를 포함하다"
     },
     {
      "en": "traditionally known as a residential area",
      "ko": "전통적으로 주거 지역으로 알려진"
     }
    ],
    "quiz": {
     "sentence": "Ashcroft City Council plans to convert the land behind the bus station into a ------- district containing 85 houses.",
     "a": "habitual",
     "b": "residential",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 26,
    "word": "acceptable",
    "pos": "a.",
    "meaning": "받아들일 수 있는, 괜찮은, 만족스러운",
    "derivatives": [],
    "examples": [
     {
      "en": "other acceptable forms of payment",
      "ko": "받아들여질 수 있는 다른 지불 유형들"
     },
     {
      "en": "Please let me know whether the new date is acceptable.",
      "ko": "새로운 날짜가 괜찮으신지 저에게 알려주시기 바랍니다."
     }
    ],
    "quiz": {
     "sentence": "Please ensure that the interview date and time are ------- and contact us if you wish to make any changes.",
     "a": "capable",
     "b": "acceptable",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 27,
    "word": "vulnerable",
    "pos": "a.",
    "meaning": "취약한, 무방비인",
    "derivatives": [
     {
      "word": "vulnerability",
      "pos": "n.",
      "meaning": "취약점"
     }
    ],
    "examples": [
     {
      "en": "be more vulnerable to damage",
      "ko": "훼손에 더 취약하다"
     },
     {
      "en": "be vulnerable to changes",
      "ko": "변화에 무방비이다"
     }
    ],
    "quiz": {
     "sentence": "Our patio furniture is ------- to mold if it is not maintained properly using appropriate protective varnish.",
     "a": "delicate",
     "b": "vulnerable",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 28,
    "word": "timely",
    "pos": "a.",
    "meaning": "때에 알맞은, 신속한",
    "derivatives": [],
    "examples": [
     {
      "en": "in a timely manner",
      "ko": "제때에"
     }
    ],
    "quiz": {
     "sentence": "In accordance with company policy, you must submit requests for vacation leave to your manager in a ------- manner.",
     "a": "timely",
     "b": "near",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 29,
    "word": "inaccurate",
    "pos": "a.",
    "meaning": "잘못된, 부정확한",
    "derivatives": [],
    "examples": [
     {
      "en": "find inaccurate details",
      "ko": "잘못된 세부사항을 발견하다"
     },
     {
      "en": "inaccurate information on labels",
      "ko": "라벨에 있는 부정확한 정보"
     }
    ],
    "quiz": {
     "sentence": "An error on the Euro Rail Web site resulted in the posting of ------- departure times for several trains.",
     "a": "inaccurate",
     "b": "intensive",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 30,
    "word": "desired",
    "pos": "a.",
    "meaning": "원하는, 바람직한",
    "derivatives": [
     {
      "word": "desire",
      "pos": "v.",
      "meaning": "바라다, 요구하다"
     }
    ],
    "examples": [
     {
      "en": "have the desired effect on",
      "ko": "~에 대해 원하는 효과를 가지다"
     }
    ],
    "quiz": {
     "sentence": "Use the remote control to set the water to your ------- temperature before getting into the hot tub.",
     "a": "organized",
     "b": "desired",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 31,
    "word": "reliable",
    "pos": "a.",
    "meaning": "믿을 만한, 신뢰할 수 있는",
    "derivatives": [
     {
      "word": "reliably",
      "pos": "ad.",
      "meaning": "확실히"
     },
     {
      "word": "reliability",
      "pos": "n.",
      "meaning": "믿음직함, 신뢰도"
     }
    ],
    "examples": [
     {
      "en": "offer reliable transportation",
      "ko": "믿을 만한 교통편을 제공하다"
     },
     {
      "en": "provide reliable products at an affordable price",
      "ko": "알맞은 가격으로 신뢰할 수 있는 제품을 제공하다"
     }
    ],
    "quiz": {
     "sentence": "Most local residents agree that the subway system is the most ------- form of public transportation in the city.",
     "a": "skilled",
     "b": "reliable",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 32,
    "word": "efficient",
    "pos": "a.",
    "meaning": "효율적인",
    "derivatives": [
     {
      "word": "efficiency",
      "pos": "n.",
      "meaning": "효율(성)"
     },
     {
      "word": "efficiently",
      "pos": "ad.",
      "meaning": "효율적으로"
     }
    ],
    "examples": [
     {
      "en": "designed to be more efficient",
      "ko": "더욱 효율적이기 위해 고안된"
     },
     {
      "en": "be more efficient for workers",
      "ko": "근로자들에게 더 효율적이다"
     }
    ],
    "quiz": {
     "sentence": "The HR manager has created an ------- system that allows employees to request annual leave days through the Intranet.",
     "a": "eager",
     "b": "efficient",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 33,
    "word": "unable",
    "pos": "a.",
    "meaning": "~할 수 없는",
    "derivatives": [],
    "examples": [
     {
      "en": "be unable to attend the meeting",
      "ko": "회의에 참석할 수 없다"
     },
     {
      "en": "be unable to offer you a contract",
      "ko": "귀하에게 계약을 제안할 수 없다"
     }
    ],
    "quiz": {
     "sentence": "Employees who are ------- to attend the training workshop will receive the presentation slides by e-mail.",
     "a": "absent",
     "b": "unable",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 34,
    "word": "related",
    "pos": "a.",
    "meaning": "관련된",
    "derivatives": [
     {
      "word": "related to",
      "pos": "prep.",
      "meaning": "~와 관련된"
     }
    ],
    "examples": [
     {
      "en": "have related work experience",
      "ko": "관련된 근무 경력을 가지다"
     },
     {
      "en": "other related paperwork",
      "ko": "다른 관련된 서류 작업"
     }
    ],
    "quiz": {
     "sentence": "Applicants for the laboratory manager position must have a degree in biotechnology or a ------- area of study.",
     "a": "related",
     "b": "prepared",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 35,
    "word": "eligible",
    "pos": "a.",
    "meaning": "자격이 있는",
    "derivatives": [
     {
      "word": "eligibility",
      "pos": "n.",
      "meaning": "적임, 적격"
     }
    ],
    "examples": [
     {
      "en": "be eligible for renewal",
      "ko": "갱신의 자격이 있다"
     },
     {
      "en": "be eligible to apply for the manager position",
      "ko": "관리자 직책에 지원할 자격이 있다"
     }
    ],
    "quiz": {
     "sentence": "Factory workers who work after 7 PM are ------- for the overtime pay.",
     "a": "compatible",
     "b": "eligible",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 36,
    "word": "initial",
    "pos": "a.",
    "meaning": "초기의, 처음의",
    "derivatives": [
     {
      "word": "initially",
      "pos": "ad.",
      "meaning": "초기에, 처음에"
     }
    ],
    "examples": [
     {
      "en": "the initial findings",
      "ko": "초기 발견 내용"
     },
     {
      "en": "the initial shipment of books",
      "ko": "도서에 대한 일차 발송"
     }
    ],
    "quiz": {
     "sentence": "The company expects to cover the ------- start-up costs within 6 months of operation.",
     "a": "forward",
     "b": "initial",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 37,
    "word": "satisfied",
    "pos": "a.",
    "meaning": "만족하는",
    "derivatives": [
     {
      "word": "satisfaction",
      "pos": "n.",
      "meaning": "만족"
     }
    ],
    "examples": [
     {
      "en": "be completely satisfied with the purchase",
      "ko": "구매품에 완전히 만족하다"
     },
     {
      "en": "reviews from satisfied customers",
      "ko": "만족한 고객들의 후기들"
     }
    ],
    "quiz": {
     "sentence": "If you are not completely ------- with your purchase, you may return it for a refund within ten days.",
     "a": "acquainted",
     "b": "satisfied",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 38,
    "word": "expensive",
    "pos": "a.",
    "meaning": "비싼",
    "derivatives": [
     {
      "word": "expense",
      "pos": "n.",
      "meaning": "비용"
     }
    ],
    "examples": [
     {
      "en": "the need for expensive repairs",
      "ko": "비싼 수리의 필요성"
     },
     {
      "en": "offer a less expensive alternative",
      "ko": "덜 비싼 대안을 제공하다"
     }
    ],
    "quiz": {
     "sentence": "Although enrolling employees in training courses is -------, the CEO believes it will benefit the company overall.",
     "a": "cautious",
     "b": "expensive",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 39,
    "word": "sufficient",
    "pos": "a.",
    "meaning": "충분한",
    "derivatives": [
     {
      "word": "sufficiently",
      "pos": "ad.",
      "meaning": "충분히"
     }
    ],
    "examples": [
     {
      "en": "produce sufficient electricity",
      "ko": "충분한 전기를 생산하다"
     },
     {
      "en": "sufficient time to address mistakes",
      "ko": "실수를 처리할 충분한 시간"
     }
    ],
    "quiz": {
     "sentence": "According to the real estate agent, the office building has ------- space for at least 150 employees.",
     "a": "sufficient",
     "b": "frequent",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 40,
    "word": "beneficial",
    "pos": "a.",
    "meaning": "이로운, 유익한",
    "derivatives": [
     {
      "word": "beneficially",
      "pos": "ad.",
      "meaning": "유익하게"
     },
     {
      "word": "benefit",
      "pos": "n.",
      "meaning": "이점, 혜택"
     }
    ],
    "examples": [
     {
      "en": "beneficial to the community",
      "ko": "지역사회에 이로운"
     },
     {
      "en": "beneficial in several ways",
      "ko": "여러 방면으로 유익한"
     }
    ],
    "quiz": {
     "sentence": "The new employee incentive scheme has had a highly ------- effect on overall staff productivity.",
     "a": "abundant",
     "b": "beneficial",
     "answer": "B"
    },
    "tip": ""
   }
  ]
 },
 {
  "week": 5,
  "day": 23,
  "part": "Part 5,6",
  "title": "형용사 ②",
  "words": [
   {
    "no": 1,
    "word": "confidential",
    "pos": "a.",
    "meaning": "기밀의",
    "derivatives": [
     {
      "word": "confidentiality",
      "pos": "n.",
      "meaning": "기밀성"
     }
    ],
    "examples": [
     {
      "en": "all confidential documents",
      "ko": "모든 기밀 문서들"
     },
     {
      "en": "remain confidential",
      "ko": "기밀인 상태로 남아 있다"
     }
    ],
    "quiz": {
     "sentence": "Health clinic employees must keep all patient information ------- in accordance with the clinic's policy.",
     "a": "confidential",
     "b": "mandatory",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 2,
    "word": "damaged",
    "pos": "a.",
    "meaning": "손상된",
    "derivatives": [
     {
      "word": "damage",
      "pos": "v.",
      "meaning": "손상시키다"
     },
     {
      "word": "damage",
      "pos": "n.",
      "meaning": "손상"
     }
    ],
    "examples": [
     {
      "en": "ship the damaged item",
      "ko": "손상된 상품을 배송하다"
     },
     {
      "en": "damaged in transit",
      "ko": "운송 중에 손상된"
     }
    ],
    "quiz": {
     "sentence": "The shipment of coffee mugs arrived ------- due to the items being improperly packaged.",
     "a": "assembled",
     "b": "damaged",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 3,
    "word": "valid",
    "pos": "a.",
    "meaning": "유효한",
    "derivatives": [
     {
      "word": "validate",
      "pos": "v.",
      "meaning": "유효하게 하다, 입증하다"
     },
     {
      "word": "validation",
      "pos": "n.",
      "meaning": "유효성"
     }
    ],
    "examples": [
     {
      "en": "present a valid identification card",
      "ko": "유효한 신분증을 제시하다"
     },
     {
      "en": "be valid for two years",
      "ko": "2년 동안 유효하다"
     }
    ],
    "quiz": {
     "sentence": "Vehicles may only be parked in the east parking lot if a ------- parking permit is clearly displayed.",
     "a": "valid",
     "b": "direct",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 4,
    "word": "likely",
    "pos": "a.",
    "meaning": "가망 있는, ~할 것 같은",
    "derivatives": [],
    "examples": [
     {
      "en": "likely winner of next week's election",
      "ko": "다음 주 선거에서의 가망 있는 당선자"
     },
     {
      "en": "be likely to differ among departments",
      "ko": "부서마다 다를 것 같다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Venson believes that guests are ------- to approve of the changes to the room service menu.",
     "a": "firstly",
     "b": "likely",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 5,
    "word": "positive",
    "pos": "a.",
    "meaning": "긍정적인",
    "derivatives": [
     {
      "word": "positively",
      "pos": "ad.",
      "meaning": "긍정적으로"
     }
    ],
    "examples": [
     {
      "en": "receive positive responses from readers",
      "ko": "독자들로부터 긍정적인 반응을 받다"
     },
     {
      "en": "positive comments from customers",
      "ko": "고객들로부터의 긍정적인 논평"
     }
    ],
    "quiz": {
     "sentence": "The new movie starring James Metcalfe has received generally ------- reviews from the majority of critics.",
     "a": "certain",
     "b": "positive",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 6,
    "word": "appropriate",
    "pos": "a.",
    "meaning": "적절한, 적합한",
    "derivatives": [
     {
      "word": "appropriately",
      "pos": "ad.",
      "meaning": "적절하게"
     }
    ],
    "examples": [
     {
      "en": "must wear the appropriate safety gear",
      "ko": "반드시 적절한 안전 장비를 착용하다"
     },
     {
      "en": "recommend an appropriate system",
      "ko": "적합한 시스템을 추천하다"
     }
    ],
    "quiz": {
     "sentence": "All those joining the company hike this weekend are reminded to wear ------- footwear and sunscreen.",
     "a": "appropriate",
     "b": "cautious",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 7,
    "word": "affordable",
    "pos": "a.",
    "meaning": "(가격이) 적당한, 알맞은",
    "derivatives": [
     {
      "word": "afford",
      "pos": "v.",
      "meaning": "(경제적, 시간적) 여유가 있다"
     },
     {
      "word": "affordably",
      "pos": "ad.",
      "meaning": "감당할 수 있게"
     },
     {
      "word": "affordability",
      "pos": "n.",
      "meaning": "감당할 수 있는 비용"
     }
    ],
    "examples": [
     {
      "en": "become affordable for most people",
      "ko": "대부분의 사람들에게 가격이 적당해지다"
     },
     {
      "en": "offer customers affordable holiday packages",
      "ko": "고객들에게 가격이 적당한 휴일 패키지 여행을 제공하다"
     }
    ],
    "quiz": {
     "sentence": "Due to the introduction of various basic models, mobile phones have finally become ------- for almost everyone.",
     "a": "comparable",
     "b": "affordable",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 8,
    "word": "impressive",
    "pos": "a.",
    "meaning": "인상 깊은, 인상적인",
    "derivatives": [
     {
      "word": "impress",
      "pos": "v.",
      "meaning": "깊은 인상을 주다"
     },
     {
      "word": "impression",
      "pos": "n.",
      "meaning": "인상, 감명"
     },
     {
      "word": "impressively",
      "pos": "ad.",
      "meaning": "인상 깊게"
     }
    ],
    "examples": [
     {
      "en": "impressive economic growth in the region",
      "ko": "지역에서의 인상 깊은 경제 성장"
     }
    ],
    "quiz": {
     "sentence": "Corona Coffee Shop has an ------- range of pastries and sandwiches.",
     "a": "impressive",
     "b": "favorite",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 9,
    "word": "notable",
    "pos": "a.",
    "meaning": "유명한, 주목할 만한",
    "derivatives": [
     {
      "word": "note",
      "pos": "v.",
      "meaning": "주목하다"
     },
     {
      "word": "notably",
      "pos": "ad.",
      "meaning": "현저하게, 뚜렷하게"
     }
    ],
    "examples": [
     {
      "en": "notable economist",
      "ko": "유명한 경제학자"
     },
     {
      "en": "be notable for its extensive use",
      "ko": "광범위한 사용으로 주목할 만하다"
     }
    ],
    "quiz": {
     "sentence": "The judging panel at the independent film festival will include several ------- directors and actors.",
     "a": "notable",
     "b": "customary",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 10,
    "word": "brief",
    "pos": "a.",
    "meaning": "잠깐의, 간단한",
    "derivatives": [
     {
      "word": "briefly",
      "pos": "ad.",
      "meaning": "짧게, 간단히"
     }
    ],
    "examples": [
     {
      "en": "a brief absence",
      "ko": "잠깐의 부재"
     },
     {
      "en": "write a brief report on the research",
      "ko": "연구에 대한 간단한 보고서를 쓰다"
     }
    ],
    "quiz": {
     "sentence": "The training workshop will stop for a ------- refreshment break at 2:30 PM.",
     "a": "recent",
     "b": "brief",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 11,
    "word": "unique",
    "pos": "a.",
    "meaning": "독특한, 특이한",
    "derivatives": [],
    "examples": [
     {
      "en": "develop a unique process for",
      "ko": "~하기 위한 독특한 공정을 개발하다"
     },
     {
      "en": "launch a unique online service",
      "ko": "특이한 온라인 서비스를 출시하다"
     }
    ],
    "quiz": {
     "sentence": "Aero Technologies is known for developing ------- mobile applications that are used all over the world.",
     "a": "unique",
     "b": "skilled",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 12,
    "word": "accurate",
    "pos": "a.",
    "meaning": "정확한",
    "derivatives": [
     {
      "word": "accuracy",
      "pos": "n.",
      "meaning": "정확도"
     },
     {
      "word": "accurately",
      "pos": "ad.",
      "meaning": "정확하게"
     }
    ],
    "examples": [
     {
      "en": "contain an accurate description",
      "ko": "정확한 설명을 포함하다"
     }
    ],
    "quiz": {
     "sentence": "The national park's Web site provides ------- information regarding the length and difficulty of hiking trails.",
     "a": "gradual",
     "b": "accurate",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 13,
    "word": "confident",
    "pos": "a.",
    "meaning": "확신하는, 자신 있는",
    "derivatives": [
     {
      "word": "confidence",
      "pos": "n.",
      "meaning": "자신(감), 신뢰"
     }
    ],
    "examples": [
     {
      "en": "be confident that",
      "ko": "~라는 것을 확신하다"
     }
    ],
    "quiz": {
     "sentence": "The city council remains ------- that the street parade will take place as planned despite bad weather.",
     "a": "confident",
     "b": "obvious",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 14,
    "word": "skilled",
    "pos": "a.",
    "meaning": "능숙한, 숙련된",
    "derivatives": [
     {
      "word": "skill",
      "pos": "n.",
      "meaning": "기술"
     }
    ],
    "examples": [
     {
      "en": "especially skilled at negotiation",
      "ko": "협상에 특히 능숙한"
     }
    ],
    "quiz": {
     "sentence": "Boreham Corporation intends to recruit over 250 ------- workers for its new factory in Exeter.",
     "a": "raised",
     "b": "skilled",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 15,
    "word": "aware",
    "pos": "a.",
    "meaning": "(내용을) 알고 있는, (사실에) 유의하는",
    "derivatives": [
     {
      "word": "awareness",
      "pos": "n.",
      "meaning": "의식"
     }
    ],
    "examples": [
     {
      "en": "make people more aware of the brand",
      "ko": "사람들이 그 브랜드에 대해 더 많이 알도록 만들다"
     },
     {
      "en": "Please be aware that ~.",
      "ko": "~라는 것에 유의하시기 바랍니다."
     }
    ],
    "quiz": {
     "sentence": "Members of Hinckley Library need to be ------- that there is a charge for overdue books.",
     "a": "aware",
     "b": "known",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 16,
    "word": "ongoing",
    "pos": "a.",
    "meaning": "계속되는, (현재) 진행 중인",
    "derivatives": [],
    "examples": [
     {
      "en": "as a result of ongoing problems",
      "ko": "계속되는 문제들의 결과로서"
     }
    ],
    "quiz": {
     "sentence": "Sirius Telecom wishes to apologize for the ------- disruption to your broadband service.",
     "a": "ongoing",
     "b": "limited",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 17,
    "word": "rising",
    "pos": "a.",
    "meaning": "상승하는, 증가하는",
    "derivatives": [
     {
      "word": "rise",
      "pos": "v.",
      "meaning": "상승하다, 증가하다"
     },
     {
      "word": "rise",
      "pos": "n.",
      "meaning": "상승, 증가"
     }
    ],
    "examples": [
     {
      "en": "rising demand for sportswear",
      "ko": "상승하는 스포츠 의류에 대한 수요"
     },
     {
      "en": "due to rising production costs",
      "ko": "증가하는 생산비로 인해"
     }
    ],
    "quiz": {
     "sentence": "Market experts have noticed ------- demand for affordable television streaming services.",
     "a": "profitable",
     "b": "rising",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 18,
    "word": "complimentary",
    "pos": "a.",
    "meaning": "무료의",
    "derivatives": [],
    "examples": [
     {
      "en": "attach complimentary dinner coupons",
      "ko": "무료 저녁식사 쿠폰을 첨부하다"
     }
    ],
    "quiz": {
     "sentence": "All convention attendees have access to ------- transportation from a variety of downtown hotels.",
     "a": "complimentary",
     "b": "subsequent",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 19,
    "word": "internal",
    "pos": "a.",
    "meaning": "내부의",
    "derivatives": [
     {
      "word": "internally",
      "pos": "ad.",
      "meaning": "내부적으로"
     }
    ],
    "examples": [
     {
      "en": "internal inquiry",
      "ko": "내부 문의"
     },
     {
      "en": "consider internal applicants",
      "ko": "내부 지원자들을 고려하다"
     }
    ],
    "quiz": {
     "sentence": "The management positions will be filled through ------- recruitment rather than posting the vacancies online.",
     "a": "internal",
     "b": "preferable",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 20,
    "word": "comfortable",
    "pos": "a.",
    "meaning": "편안한",
    "derivatives": [
     {
      "word": "comfortably",
      "pos": "ad.",
      "meaning": "편안하게"
     }
    ],
    "examples": [
     {
      "en": "be more comfortable than the old one",
      "ko": "예전의 것보다 더 편안한"
     },
     {
      "en": "more comfortable for patients",
      "ko": "환자들을 위해 더욱 편안한"
     }
    ],
    "quiz": {
     "sentence": "The lobby of the Regent Hotel contains several ------- sofas and armchairs for guests.",
     "a": "cautious",
     "b": "comfortable",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 21,
    "word": "eager",
    "pos": "a.",
    "meaning": "간절히 바라는, 열망하는",
    "derivatives": [
     {
      "word": "eagerly",
      "pos": "ad.",
      "meaning": "열망하여, 열심히"
     }
    ],
    "examples": [
     {
      "en": "eager to expand its business in South America",
      "ko": "남미에서의 사업을 확장하는 것을 간절히 바라는"
     },
     {
      "en": "be eager to form business relationships",
      "ko": "사업적 관계를 형성하기를 열망하다"
     }
    ],
    "quiz": {
     "sentence": "Jeff Brightman is an experienced music video director ------- to direct his first full motion picture.",
     "a": "eager",
     "b": "relative",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 22,
    "word": "essential",
    "pos": "a.",
    "meaning": "필수적인",
    "derivatives": [
     {
      "word": "essentially",
      "pos": "ad.",
      "meaning": "필수적으로"
     }
    ],
    "examples": [
     {
      "en": "be essential for maintaining steady production",
      "ko": "꾸준한 생산량을 유지하기 위해 필수적이다"
     },
     {
      "en": "It is essential that ~.",
      "ko": "~라는 점은 필수적이다."
     }
    ],
    "quiz": {
     "sentence": "A professional, well-designed Web site is ------- for any business to become successful.",
     "a": "essential",
     "b": "initial",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 23,
    "word": "familiar",
    "pos": "a.",
    "meaning": "익숙한, 친숙한",
    "derivatives": [
     {
      "word": "familiarize",
      "pos": "v.",
      "meaning": "익숙하게 하다"
     }
    ],
    "examples": [
     {
      "en": "become familiar with the details",
      "ko": "세부사항에 익숙해지다"
     },
     {
      "en": "be familiar with the city's transportation",
      "ko": "도시의 교통편에 익숙해지다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Ruiz will continue conducting weekly training workshops until all staff are ------- with the new database system.",
     "a": "typical",
     "b": "familiar",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 24,
    "word": "knowledgeable",
    "pos": "a.",
    "meaning": "박식한",
    "derivatives": [
     {
      "word": "knowledge",
      "pos": "n.",
      "meaning": "지식"
     }
    ],
    "examples": [
     {
      "en": "be knowledgeable about art",
      "ko": "미술에 대해 박식하다"
     },
     {
      "en": "be knowledgeable in one's field",
      "ko": "~의 분야에서 박식하다"
     }
    ],
    "quiz": {
     "sentence": "The wait staff at Jumba Restaurant are extremely ------- about local ingredients and wine.",
     "a": "knowledgeable",
     "b": "distinctive",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 25,
    "word": "steady",
    "pos": "a.",
    "meaning": "꾸준한",
    "derivatives": [
     {
      "word": "steadily",
      "pos": "ad.",
      "meaning": "꾸준히"
     }
    ],
    "examples": [
     {
      "en": "remain steady over the past four quarters",
      "ko": "지난 4분기 동안 꾸준한 상태이다"
     },
     {
      "en": "maintain steady sales",
      "ko": "꾸준한 매출을 유지하다"
     }
    ],
    "quiz": {
     "sentence": "Property market experts have noted a ------- increase in house prices in Glen Valley and the surrounding area.",
     "a": "steady",
     "b": "sturdy",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 26,
    "word": "unexpected",
    "pos": "a.",
    "meaning": "예상치 못한",
    "derivatives": [
     {
      "word": "unexpectedly",
      "pos": "ad.",
      "meaning": "예상치 못하게"
     }
    ],
    "examples": [
     {
      "en": "receive an unexpected bonus",
      "ko": "예상치 못한 보너스를 받다"
     },
     {
      "en": "due to the unexpected delay",
      "ko": "예상치 못한 지연으로 인해"
     }
    ],
    "quiz": {
     "sentence": "Due to ------- travel delays, the Japanese clients will not arrive at the factory until 4 PM.",
     "a": "unexpected",
     "b": "indefinite",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 27,
    "word": "superior",
    "pos": "a.",
    "meaning": "우수한",
    "derivatives": [
     {
      "word": "superiority",
      "pos": "n.",
      "meaning": "우수, 우월성"
     }
    ],
    "examples": [
     {
      "en": "one's superior analytical skills",
      "ko": "~의 우수한 분석 능력"
     },
     {
      "en": "make A superior to other leading brands",
      "ko": "다른 선도적인 브랜드들보다 A를 우수하게 만들다"
     }
    ],
    "quiz": {
     "sentence": "Tiara Catering is known for its ------- menus and excellent customer service.",
     "a": "superior",
     "b": "absolute",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 28,
    "word": "equal",
    "pos": "a.",
    "meaning": "동등한(to)",
    "derivatives": [
     {
      "word": "equally",
      "pos": "ad.",
      "meaning": "동등하게"
     }
    ],
    "examples": [
     {
      "en": "be nearly equal to",
      "ko": "~와 거의 동등하다"
     }
    ],
    "quiz": {
     "sentence": "The annual profits of our Everley branch have finally become ------- to those of our flagship store.",
     "a": "equal",
     "b": "high",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 29,
    "word": "comparable",
    "pos": "a.",
    "meaning": "비교할 만한",
    "derivatives": [
     {
      "word": "compare",
      "pos": "v.",
      "meaning": "비교하다"
     },
     {
      "word": "comparison",
      "pos": "n.",
      "meaning": "비교"
     }
    ],
    "examples": [
     {
      "en": "comparable quality on the market",
      "ko": "시장에서 비교할 만한 품질"
     }
    ],
    "quiz": {
     "sentence": "The new mobile phones launched by Salazar and Indigo offer ------- features and value for money.",
     "a": "comparable",
     "b": "separate",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 30,
    "word": "functional",
    "pos": "a.",
    "meaning": "작동하는, 가동 중인",
    "derivatives": [
     {
      "word": "function",
      "pos": "v.",
      "meaning": "기능하다"
     },
     {
      "word": "function",
      "pos": "n.",
      "meaning": "기능"
     }
    ],
    "examples": [
     {
      "en": "remain functional",
      "ko": "작동하는 상태이다"
     },
     {
      "en": "appear to be functional",
      "ko": "가동 중인 것으로 보인다"
     }
    ],
    "quiz": {
     "sentence": "The CEO expects the manufacturing plant to be fully ------- by April 20.",
     "a": "functional",
     "b": "appropriate",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 31,
    "word": "proposed",
    "pos": "a.",
    "meaning": "제안된",
    "derivatives": [
     {
      "word": "propose",
      "pos": "v.",
      "meaning": "제안하다"
     },
     {
      "word": "proposal",
      "pos": "n.",
      "meaning": "제안(서)"
     }
    ],
    "examples": [
     {
      "en": "proposed renovation project",
      "ko": "제안된 보수공사 프로젝트"
     },
     {
      "en": "near the proposed site of a new shop",
      "ko": "새로운 매장의 제안된 부지 근처에"
     }
    ],
    "quiz": {
     "sentence": "The client is satisfied with the architect's ------- changes to the airport blueprint.",
     "a": "obliged",
     "b": "proposed",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 32,
    "word": "dependent",
    "pos": "a.",
    "meaning": "의존하는",
    "derivatives": [
     {
      "word": "dependently",
      "pos": "ad.",
      "meaning": "의존적으로"
     }
    ],
    "examples": [
     {
      "en": "be dependent on the inspection results",
      "ko": "검사 결과에 의존하다"
     }
    ],
    "quiz": {
     "sentence": "The destination for the staff excursion is heavily ------- on the budget allocated by the finance manager.",
     "a": "subsequent",
     "b": "dependent",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 33,
    "word": "exceptional",
    "pos": "a.",
    "meaning": "우수한, 특출난, 예외적인",
    "derivatives": [
     {
      "word": "exception",
      "pos": "n.",
      "meaning": "예외"
     },
     {
      "word": "exceptionally",
      "pos": "ad.",
      "meaning": "예외적인 경우에만, 유난히"
     }
    ],
    "examples": [
     {
      "en": "show exceptional performance",
      "ko": "우수한 성과를 보여주다"
     },
     {
      "en": "win awards for one's exceptional work",
      "ko": "~의 특출난 작업으로 상을 타다"
     }
    ],
    "quiz": {
     "sentence": "Employees who show ------- work ethic and productivity are rewarded with an annual bonus.",
     "a": "exceptional",
     "b": "eventual",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 34,
    "word": "apparent",
    "pos": "a.",
    "meaning": "명백한",
    "derivatives": [
     {
      "word": "apparently",
      "pos": "ad.",
      "meaning": "명백히"
     }
    ],
    "examples": [
     {
      "en": "become apparent that",
      "ko": "~라는 것이 명백해지다"
     }
    ],
    "quiz": {
     "sentence": "There is no ------- difference between the two candidates.",
     "a": "apparent",
     "b": "current",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 35,
    "word": "seasonal",
    "pos": "a.",
    "meaning": "계절의, 계절적인",
    "derivatives": [],
    "examples": [
     {
      "en": "include seasonal fruits",
      "ko": "계절 과일을 포함하다"
     }
    ],
    "quiz": {
     "sentence": "Fifty part-time employees have been hired in our branches to help us cope with ------- demand throughout December.",
     "a": "seasonal",
     "b": "equal",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 36,
    "word": "durable",
    "pos": "a.",
    "meaning": "내구성이 좋은, 오래 견디는",
    "derivatives": [],
    "examples": [
     {
      "en": "durable material",
      "ko": "내구성이 좋은 자재"
     }
    ],
    "quiz": {
     "sentence": "The Ridgeback Trail shoes are suitable for long hikes thanks to their ------- soles.",
     "a": "consumable",
     "b": "durable",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 37,
    "word": "relevant",
    "pos": "a.",
    "meaning": "관련된",
    "derivatives": [
     {
      "word": "relevance",
      "pos": "n.",
      "meaning": "관련성"
     }
    ],
    "examples": [
     {
      "en": "at least two years of relevant work experience",
      "ko": "적어도 2년의 관련 근무 경력"
     },
     {
      "en": "be accompanied by relevant receipts",
      "ko": "관련 영수증을 첨부하다"
     }
    ],
    "quiz": {
     "sentence": "A series of training workshops ------- to our employees' job duties will be held during January.",
     "a": "competent",
     "b": "relevant",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 38,
    "word": "vacant",
    "pos": "a.",
    "meaning": "비어 있는",
    "derivatives": [
     {
      "word": "vacancy",
      "pos": "n.",
      "meaning": "공석, (채용 중인) 일자리"
     }
    ],
    "examples": [
     {
      "en": "purchase a vacant store",
      "ko": "비어 있는 상점을 매입하다"
     }
    ],
    "quiz": {
     "sentence": "The Sidmouth Concert Center hopes to expand its parking capacity by purchasing the ------- land behind the venue.",
     "a": "busy",
     "b": "vacant",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 39,
    "word": "casual",
    "pos": "a.",
    "meaning": "편안한, 우연한",
    "derivatives": [],
    "examples": [
     {
      "en": "take a casual walk",
      "ko": "편안한 산책을 하다"
     }
    ],
    "quiz": {
     "sentence": "As part of the new office policy, staff may wear ------- clothing on the last Friday of each month.",
     "a": "casual",
     "b": "loose",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 40,
    "word": "prospective",
    "pos": "a.",
    "meaning": "잠재적인, 가망이 있는",
    "derivatives": [
     {
      "word": "prospect",
      "pos": "n.",
      "meaning": "전망"
     }
    ],
    "examples": [
     {
      "en": "Prospective employees must possess ~.",
      "ko": "잠재적인 직원들은 반드시 ~을 갖춰야 한다."
     }
    ],
    "quiz": {
     "sentence": "Before joining the badminton club, each ------- member must first attend a practice session.",
     "a": "evident",
     "b": "prospective",
     "answer": "B"
    },
    "tip": ""
   }
  ]
 },
 {
  "week": 5,
  "day": 24,
  "part": "Part 5,6",
  "title": "형용사 + 명사 콜로케이션",
  "words": [
   {
    "no": 1,
    "word": "personal reason",
    "pos": "",
    "meaning": "개인 사유",
    "derivatives": [],
    "examples": [
     {
      "en": "personal information",
      "ko": "개인 정보"
     },
     {
      "en": "personal belongings",
      "ko": "개인 물품"
     }
    ],
    "quiz": {
     "sentence": "Employees are not allowed to use company property for ------- reasons.",
     "a": "unlimited",
     "b": "personal",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 2,
    "word": "excessive amount",
    "pos": "",
    "meaning": "과도한 양",
    "derivatives": [],
    "examples": [
     {
      "en": "excessive waste of raw materials",
      "ko": "과도한 원자재 쓰레기"
     },
     {
      "en": "excessive inventory",
      "ko": "과잉 재고"
     }
    ],
    "quiz": {
     "sentence": "Most drivers are not interested in Vorcon Motors' SUVs because of the ------- amount of gasoline they consume.",
     "a": "exciting",
     "b": "excessive",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 3,
    "word": "full capacity",
    "pos": "",
    "meaning": "최고 성능, 전면 가동, 최대 수용 인원",
    "derivatives": [],
    "examples": [
     {
      "en": "seating capacity",
      "ko": "좌석 수용력"
     },
     {
      "en": "manufacturing capacity",
      "ko": "제조 성능"
     }
    ],
    "quiz": {
     "sentence": "Many of the riverside hotels are expected to operate at full ------- during the peak tourist season this year.",
     "a": "capacity",
     "b": "price",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 4,
    "word": "fresh vegetables",
    "pos": "",
    "meaning": "신선한 채소",
    "derivatives": [],
    "examples": [
     {
      "en": "fresh meals",
      "ko": "신선한 식사"
     }
    ],
    "quiz": {
     "sentence": "Logan Farm is proud of providing the ------- vegetables to our customers.",
     "a": "clearest",
     "b": "freshest",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 5,
    "word": "scenic view",
    "pos": "",
    "meaning": "아름다운 경치",
    "derivatives": [],
    "examples": [
     {
      "en": "scenic coastal route",
      "ko": "경치가 좋은 해안로"
     }
    ],
    "quiz": {
     "sentence": "Mr. Glonting prefers to take the train for business trips as he enjoys the ------- views of the countryside.",
     "a": "recent",
     "b": "scenic",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 6,
    "word": "substantial contribution",
    "pos": "",
    "meaning": "상당한 기여",
    "derivatives": [],
    "examples": [
     {
      "en": "substantial number",
      "ko": "상당 수"
     },
     {
      "en": "substantial changes",
      "ko": "상당한 변화"
     },
     {
      "en": "substantial donations",
      "ko": "상당한 기부(금)"
     }
    ],
    "quiz": {
     "sentence": "Mr. Oliver Hardy has made a ------- contribution to the company and fully deserves his recent promotion.",
     "a": "mutual",
     "b": "substantial",
     "answer": "B"
    },
    "tip": "형용사 substantial은 large, considerable, significant 등과 바꾸어 쓸 수 있다."
   },
   {
    "no": 7,
    "word": "numerous activities",
    "pos": "",
    "meaning": "수많은 활동들",
    "derivatives": [],
    "examples": [
     {
      "en": "numerous supplies",
      "ko": "수많은 공급업체들"
     },
     {
      "en": "numerous copies",
      "ko": "수많은 사본들"
     }
    ],
    "quiz": {
     "sentence": "Our summer package offers ------- outdoor activities for businesses and organizations.",
     "a": "capable",
     "b": "numerous",
     "answer": "B"
    },
    "tip": "형용사 numerous는 수가 강조되는 복수명사를 수식한다."
   },
   {
    "no": 8,
    "word": "extensive changes",
    "pos": "",
    "meaning": "폭넓은 변화",
    "derivatives": [],
    "examples": [
     {
      "en": "extensive experience",
      "ko": "폭넓은 경험"
     },
     {
      "en": "extensive knowledge",
      "ko": "폭넓은 지식"
     },
     {
      "en": "extensive analysis",
      "ko": "폭넓은 분석"
     }
    ],
    "quiz": {
     "sentence": "Manley Industries will make ------- changes to its production practices to increase efficiency.",
     "a": "extensive",
     "b": "accurate",
     "answer": "A"
    },
    "tip": "형용사 extensive는 large, wide, comprehensive 등과 바꾸어 사용할 수 있다."
   },
   {
    "no": 9,
    "word": "exclusive access",
    "pos": "",
    "meaning": "독점적인 이용(권)",
    "derivatives": [],
    "examples": [
     {
      "en": "exclusive interview",
      "ko": "독점 인터뷰"
     },
     {
      "en": "exclusive property",
      "ko": "독점적인 자산"
     }
    ],
    "quiz": {
     "sentence": "Ray Jones Gym members get ------- access to a wide range of fitness classes led by experienced instructors.",
     "a": "exclusive",
     "b": "creative",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 10,
    "word": "extended warranties",
    "pos": "",
    "meaning": "연장된 품질 보증 기간",
    "derivatives": [],
    "examples": [
     {
      "en": "extended hours",
      "ko": "연장된 영업 시간"
     },
     {
      "en": "extended deadline",
      "ko": "연장된 마감기한"
     },
     {
      "en": "extended vacation time",
      "ko": "연장된 휴가 기간"
     }
    ],
    "quiz": {
     "sentence": "AK Electronics has decided to offer ------- warranties to its customers with no additional fees.",
     "a": "extended",
     "b": "defective",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 11,
    "word": "major investment",
    "pos": "",
    "meaning": "중대한 투자, 규모가 큰 투자금",
    "derivatives": [],
    "examples": [
     {
      "en": "a major portion of",
      "ko": "~의 (절반 이상) 대부분"
     },
     {
      "en": "major exporter",
      "ko": "주요 수출업자"
     }
    ],
    "quiz": {
     "sentence": "The development of infrastructure requires ------- investment, both in terms of financial resources and dedicated personnel.",
     "a": "major",
     "b": "social",
     "answer": "A"
    },
    "tip": "형용사 major가 기업이나 사람 앞에 쓰이면 '중요한, 주요한'의 의미이고, 행위나 사물 앞에 쓰이면 '(규모가) 큰'이라는 뜻이다."
   },
   {
    "no": 12,
    "word": "valuable suggestion",
    "pos": "",
    "meaning": "귀중한 제안",
    "derivatives": [],
    "examples": [
     {
      "en": "valuable information",
      "ko": "귀중한 정보"
     },
     {
      "en": "valuable insight",
      "ko": "귀중한 통찰력"
     }
    ],
    "quiz": {
     "sentence": "The S&B Retailer Group is seeking ------- suggestions about improving customer satisfaction and loyalty.",
     "a": "recent",
     "b": "valuable",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 13,
    "word": "completed job application",
    "pos": "",
    "meaning": "완성된 입사 지원서",
    "derivatives": [],
    "examples": [
     {
      "en": "completed form",
      "ko": "완성된 양식"
     },
     {
      "en": "completed documents",
      "ko": "완성된 문서"
     }
    ],
    "quiz": {
     "sentence": "Please submit your ------- job application to the human resources office by e-mail by August 15.",
     "a": "delayed",
     "b": "completed",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 14,
    "word": "advanced technology",
    "pos": "",
    "meaning": "고급 기술",
    "derivatives": [],
    "examples": [
     {
      "en": "advanced skill",
      "ko": "고급 기술"
     },
     {
      "en": "advanced college degrees",
      "ko": "고급 대학 학위"
     },
     {
      "en": "advanced user",
      "ko": "상급 사용자"
     }
    ],
    "quiz": {
     "sentence": "Rogan Logistics recently adopted ------- technology to track its shipments in real time.",
     "a": "numerous",
     "b": "advanced",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 15,
    "word": "prior authorization",
    "pos": "",
    "meaning": "사전 허가",
    "derivatives": [],
    "examples": [
     {
      "en": "prior approval",
      "ko": "사전 승인"
     },
     {
      "en": "prior experience",
      "ko": "이전 경력"
     }
    ],
    "quiz": {
     "sentence": "Employees must obtain ------- authorization before sharing any information about their work on social media.",
     "a": "prior",
     "b": "calm",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 16,
    "word": "experienced technical workers",
    "pos": "",
    "meaning": "숙련된 기술자들, 경험이 많은 기술직 직원들",
    "derivatives": [],
    "examples": [
     {
      "en": "experienced graphic designers",
      "ko": "숙련된 그래픽 디자이너들"
     },
     {
      "en": "experienced managers",
      "ko": "경험이 많은 관리자들"
     }
    ],
    "quiz": {
     "sentence": "We are currently hiring several highly ------- technical workers who will work in our branch offices.",
     "a": "remaining",
     "b": "experienced",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 17,
    "word": "routine inspection",
    "pos": "",
    "meaning": "정기 점검",
    "derivatives": [],
    "examples": [
     {
      "en": "routine maintenance checks",
      "ko": "정기적인 유지보수 점검"
     },
     {
      "en": "routine practice",
      "ko": "주기적인 관행"
     },
     {
      "en": "routine tasks",
      "ko": "일상적인 업무"
     }
    ],
    "quiz": {
     "sentence": "The department of workplace safety will conduct a ------- inspection of our machinery at Olsen Manufacturing.",
     "a": "routine",
     "b": "opposed",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 18,
    "word": "a wide selection of",
    "pos": "",
    "meaning": "아주 다양한",
    "derivatives": [],
    "examples": [
     {
      "en": "a wide variety of",
      "ko": "아주 다양한"
     },
     {
      "en": "a wide range of",
      "ko": "아주 다양한"
     }
    ],
    "quiz": {
     "sentence": "Blue Skyline provides a ------- selection of sporting goods, such as athletic footwear and football jerseys.",
     "a": "various",
     "b": "wide",
     "answer": "B"
    },
    "tip": "형용사 wide가 '다양한, 많은'의 뜻을 가질 때는 broad로 바꾸어 쓸 수도 있다."
   },
   {
    "no": 19,
    "word": "updated training schedule",
    "pos": "",
    "meaning": "최신 교육 일정",
    "derivatives": [],
    "examples": [
     {
      "en": "updated version",
      "ko": "최신 개정판"
     },
     {
      "en": "updated employee manual",
      "ko": "최신 직원 안내서"
     }
    ],
    "quiz": {
     "sentence": "The ------- training schedule has been reposted on the company Web site due to a scheduling conflict.",
     "a": "excited",
     "b": "updated",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 20,
    "word": "limited access",
    "pos": "",
    "meaning": "제한된 접근 권한",
    "derivatives": [],
    "examples": [
     {
      "en": "for a limited (period of) time",
      "ko": "제한된 시간 동안"
     },
     {
      "en": "limited seating",
      "ko": "한정된 좌석 수"
     },
     {
      "en": "limited supplies",
      "ko": "한정된 공급품"
     }
    ],
    "quiz": {
     "sentence": "Temporary employees are only granted ------- access to the confidential customer database.",
     "a": "limited",
     "b": "similar",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 21,
    "word": "supplemental information",
    "pos": "",
    "meaning": "보충 정보",
    "derivatives": [],
    "examples": [
     {
      "en": "supplemental documentation",
      "ko": "보충 서류"
     }
    ],
    "quiz": {
     "sentence": "Please refer to the ------- information provided in the appendix for further details on the agreement.",
     "a": "supplemental",
     "b": "potential",
     "answer": "A"
    },
    "tip": "형용사 supplemental이 '보충의, 추가적인'의 뜻으로 사용될 때 supplementary로 바꾸어 사용되기도 한다."
   },
   {
    "no": 22,
    "word": "public meeting",
    "pos": "",
    "meaning": "공청회, 공개 회의",
    "derivatives": [],
    "examples": [
     {
      "en": "public comment",
      "ko": "대중적인 의견"
     }
    ],
    "quiz": {
     "sentence": "Millhaven City Council will hold a ------- meeting to give residents a chance to share their opinions.",
     "a": "future",
     "b": "public",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 23,
    "word": "high standards",
    "pos": "",
    "meaning": "높은 기준들",
    "derivatives": [],
    "examples": [
     {
      "en": "high quality",
      "ko": "높은 품질"
     },
     {
      "en": "high price",
      "ko": "높은 가격"
     },
     {
      "en": "high priorities",
      "ko": "높은 우선순위"
     }
    ],
    "quiz": {
     "sentence": "The company handbook outlines the high ------- that the employees are expected to meet every day.",
     "a": "recommendations",
     "b": "standards",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 24,
    "word": "exemplary performance",
    "pos": "",
    "meaning": "모범적인 성과, 본보기가 될 만한 성과",
    "derivatives": [],
    "examples": [
     {
      "en": "exemplary leadership",
      "ko": "모범적인 지도력"
     }
    ],
    "quiz": {
     "sentence": "Dominique Sato was honored with the Employee of the Year award for her ------- performance on the job.",
     "a": "exemplary",
     "b": "dependent",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 25,
    "word": "dedicated employee",
    "pos": "",
    "meaning": "헌신적인 직원",
    "derivatives": [],
    "examples": [
     {
      "en": "a dedicated sales team",
      "ko": "헌신적인 영업팀"
     }
    ],
    "quiz": {
     "sentence": "The Diamond Group's ------- employees recorded their highest sales last week.",
     "a": "dedicated",
     "b": "introduced",
     "answer": "A"
    },
    "tip": "형용사 dedicated가 기업이나 활동을 나타내는 명사를 수식할 때는 '(~ 분야/활동에) 전념하는'으로 해석하고, 회사의 구성원을 수식할 때는 '(조직에) 헌신하는'으로 해석한다."
   },
   {
    "no": 26,
    "word": "comprehensive warranty",
    "pos": "",
    "meaning": "종합적인 제품 보증",
    "derivatives": [],
    "examples": [
     {
      "en": "comprehensive directory",
      "ko": "종합적인 안내 책자"
     },
     {
      "en": "comprehensive care",
      "ko": "포괄적인 관심"
     },
     {
      "en": "comprehensive study",
      "ko": "포괄적인 연구"
     }
    ],
    "quiz": {
     "sentence": "Our new plan includes a ------- warranty that covers damage to both your computer and your monitor.",
     "a": "comprehensive",
     "b": "knowledgeable",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 27,
    "word": "prestigious award",
    "pos": "",
    "meaning": "명망 있는 상",
    "derivatives": [],
    "examples": [
     {
      "en": "prestigious medal",
      "ko": "명망 있는 훈장"
     }
    ],
    "quiz": {
     "sentence": "Ms. Gomez has received the ------- International Writers Award for her extraordinary contribution to the art of storytelling.",
     "a": "vigorous",
     "b": "prestigious",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 28,
    "word": "heavy call volumes",
    "pos": "",
    "meaning": "과도한 통화량",
    "derivatives": [],
    "examples": [
     {
      "en": "heavy usage",
      "ko": "과도한 사용량"
     },
     {
      "en": "heavy rain",
      "ko": "폭우"
     }
    ],
    "quiz": {
     "sentence": "Due to ------- call volumes at our customer service center, you may need to wait to speak with an operator.",
     "a": "heavy",
     "b": "lengthy",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 29,
    "word": "coming year",
    "pos": "",
    "meaning": "다음 해, 내년",
    "derivatives": [],
    "examples": [
     {
      "en": "in the coming month",
      "ko": "다음 달에"
     }
    ],
    "quiz": {
     "sentence": "The main aim of tomorrow's staff meeting is to set up our sales targets for the ------- year.",
     "a": "occurring",
     "b": "coming",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 30,
    "word": "rapid changes",
    "pos": "",
    "meaning": "빠른 변화",
    "derivatives": [],
    "examples": [
     {
      "en": "rapid growth",
      "ko": "빠른 성장"
     },
     {
      "en": "rapid evolution",
      "ko": "빠른 진화"
     }
    ],
    "quiz": {
     "sentence": "Mr. Larry Wilkins is expected to be honored for making ------- changes to our manufacturing processes.",
     "a": "eager",
     "b": "rapid",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 31,
    "word": "innovative design",
    "pos": "",
    "meaning": "혁신적인 디자인",
    "derivatives": [],
    "examples": [
     {
      "en": "innovative television commercials",
      "ko": "혁신적인 TV 광고"
     },
     {
      "en": "innovative cost-cutting measure",
      "ko": "혁신적인 비용 절약 조치"
     },
     {
      "en": "innovative approach",
      "ko": "혁신적인 접근"
     }
    ],
    "quiz": {
     "sentence": "Sweet Sounds Inc.'s research team was recognized for the ------- design of the car stereo system it developed.",
     "a": "innovative",
     "b": "various",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 32,
    "word": "lasting impact",
    "pos": "",
    "meaning": "지속적인 영향",
    "derivatives": [],
    "examples": [
     {
      "en": "lasting effect",
      "ko": "지속적인 효과"
     },
     {
      "en": "lasting impression",
      "ko": "오래가는 인상"
     }
    ],
    "quiz": {
     "sentence": "The Internet is considered to be the greatest invention that has had a ------- impact on the spread of knowledge.",
     "a": "private",
     "b": "lasting",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 33,
    "word": "outstanding contribution",
    "pos": "",
    "meaning": "뛰어난 기여",
    "derivatives": [],
    "examples": [
     {
      "en": "outstanding work",
      "ko": "뛰어난 작업(물)"
     },
     {
      "en": "outstanding service",
      "ko": "훌륭한 서비스"
     },
     {
      "en": "outstanding effort",
      "ko": "훌륭한 노력"
     }
    ],
    "quiz": {
     "sentence": "Dr. Roy Benson has received the award for his ------- contribution to the development of a new engine.",
     "a": "approaching",
     "b": "outstanding",
     "answer": "B"
    },
    "tip": "형용사 outstanding은 주로 공헌 또는 업적을 나타내는 명사를 수식하는데, 이때 exceptional, impressive, superb 등의 단어와 바꾸어 쓸 수 있다."
   },
   {
    "no": 34,
    "word": "qualified applicant",
    "pos": "",
    "meaning": "자격을 갖춘 지원자",
    "derivatives": [],
    "examples": [
     {
      "en": "qualified graphic artist",
      "ko": "자격을 갖춘 그래픽 예술가"
     }
    ],
    "quiz": {
     "sentence": "All ------- candidates for the production manager position should submit their résumés by October 15.",
     "a": "qualified",
     "b": "beneficial",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 35,
    "word": "detailed information",
    "pos": "",
    "meaning": "상세 정보",
    "derivatives": [],
    "examples": [
     {
      "en": "detailed descriptions",
      "ko": "상세한 설명"
     },
     {
      "en": "detailed reviews",
      "ko": "상세한 후기"
     },
     {
      "en": "detailed manual",
      "ko": "상세한 사용설명서"
     }
    ],
    "quiz": {
     "sentence": "------- information about the actors participating in the theatrical performance is included in the pamphlet.",
     "a": "Detailed",
     "b": "Experienced",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 36,
    "word": "reasonable prices",
    "pos": "",
    "meaning": "합리적인 가격",
    "derivatives": [],
    "examples": [
     {
      "en": "reasonable rates",
      "ko": "합리적인 요금"
     },
     {
      "en": "a reasonable amount of time",
      "ko": "적절한 시간"
     }
    ],
    "quiz": {
     "sentence": "Our goal is to offer products and services of the highest quality at the most ------- prices.",
     "a": "valuable",
     "b": "reasonable",
     "answer": "B"
    },
    "tip": "형용사 reasonable은 지불하는 사람의 능력에 따라 그 수준이 달라지지만, 비슷한 의미를 가진 affordable은 누구라도 지불할 만큼 저렴한 것을 나타낸다."
   },
   {
    "no": 37,
    "word": "competitive salaries",
    "pos": "",
    "meaning": "경쟁력 있는 급여",
    "derivatives": [],
    "examples": [
     {
      "en": "competitive compensation",
      "ko": "경쟁력 있는 보상"
     },
     {
      "en": "competitive rates",
      "ko": "경쟁력 있는 요금"
     },
     {
      "en": "competitive advantage",
      "ko": "경쟁력 있는 장점"
     }
    ],
    "quiz": {
     "sentence": "Smart Eats offers ------- salaries to those who have previously worked in food distribution.",
     "a": "competitive",
     "b": "protective",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 38,
    "word": "defective merchandise",
    "pos": "",
    "meaning": "결함 있는 상품",
    "derivatives": [],
    "examples": [
     {
      "en": "defective item",
      "ko": "결함 있는 상품"
     },
     {
      "en": "defective garment",
      "ko": "결함 있는 의류"
     }
    ],
    "quiz": {
     "sentence": "All our new products come with a two-year warranty, and we will replace any ------- merchandise at no extra cost.",
     "a": "defective",
     "b": "expensive",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 39,
    "word": "enclosed contract",
    "pos": "",
    "meaning": "동봉된 계약서",
    "derivatives": [],
    "examples": [
     {
      "en": "enclosed order slip",
      "ko": "동봉된 주문서"
     }
    ],
    "quiz": {
     "sentence": "Please read the ------- contract very carefully before you sign it to avoid any misunderstandings.",
     "a": "enclosed",
     "b": "surrounding",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 40,
    "word": "final phase",
    "pos": "",
    "meaning": "최종 단계",
    "derivatives": [],
    "examples": [
     {
      "en": "the first phase",
      "ko": "첫 단계"
     }
    ],
    "quiz": {
     "sentence": "In the final ------- of market research testing, patients preferred the wooden game pieces to the plastic ones.",
     "a": "opinion",
     "b": "phase",
     "answer": "B"
    },
    "tip": "명사 phase가 들어갈 자리에 stage를 사용하기도 한다."
   }
  ]
 },
 {
  "week": 5,
  "day": 25,
  "part": "Part 7",
  "title": "독해가 쉬워지는 어휘 ①",
  "words": [
   {
    "no": 1,
    "word": "allocate",
    "pos": "v.",
    "meaning": "~을 할당하다, 배분하다",
    "derivatives": [
     {
      "word": "allocation",
      "pos": "n.",
      "meaning": "할당"
     }
    ],
    "examples": [
     {
      "en": "Our company understands the importance of staying competitive, so we've decided to double the budget allocated to research and development.",
      "ko": "저희 회사는 경쟁력을 유지하는 것의 중요성을 잘 알고 있기에, 연구 및 개발에 할당되는 예산을 두 배로 늘리기로 결정하였습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 2,
    "word": "invest",
    "pos": "v.",
    "meaning": "투자하다",
    "derivatives": [
     {
      "word": "investment",
      "pos": "n.",
      "meaning": "투자"
     },
     {
      "word": "investor",
      "pos": "n.",
      "meaning": "투자자"
     }
    ],
    "examples": [
     {
      "en": "The company's expansion plan included investing in real estate to establish a strong presence in key markets.",
      "ko": "회사의 확장 계획은 주요 시장에서 강력한 입지를 구축하기 위해 부동산에 투자하는 것을 포함했습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 3,
    "word": "prioritize",
    "pos": "v.",
    "meaning": "우선순위를 매기다, ~을 우선적으로 처리하다",
    "derivatives": [
     {
      "word": "priority",
      "pos": "n.",
      "meaning": "우선 사항"
     }
    ],
    "examples": [
     {
      "en": "When managing multiple commitments, it's crucial to prioritize and allocate time wisely.",
      "ko": "여러 일들을 처리할 때에는, 우선순위를 정하고 시간을 현명하게 배분하는 것이 매우 중요합니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 4,
    "word": "regularly",
    "pos": "ad.",
    "meaning": "규칙적으로, 정기적으로",
    "derivatives": [
     {
      "word": "regular",
      "pos": "a.",
      "meaning": "규칙적인, 정기적인"
     }
    ],
    "examples": [
     {
      "en": "We meet regularly to hold brainstorming sessions aimed at generating innovative ideas.",
      "ko": "우리는 정기적으로 만나 혁신적인 아이디어를 창출하기 위한 브레인스토밍 회의를 개최합니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 5,
    "word": "offset",
    "pos": "v.",
    "meaning": "~을 상쇄하다, 충당하다",
    "derivatives": [],
    "examples": [
     {
      "en": "The factory workers had to work overtime to offset the production shortfall caused by the unexpected machine breakdown.",
      "ko": "공장 직원들은 예상치 못한 기계 고장으로 인한 생산량 부족을 상쇄하기 위해 초과 근무를 해야 했습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 6,
    "word": "as often as needed",
    "pos": "",
    "meaning": "필요할 때마다",
    "derivatives": [],
    "examples": [
     {
      "en": "The project timeline can be adjusted as often as needed to accommodate any changes or unexpected challenges.",
      "ko": "프로젝트 일정은 변경 사항이나 예상치 못한 문제 상황에 맞추기 위해 필요할 때마다 조정될 수 있습니다."
     }
    ],
    "quiz": null,
    "tip": "기출 Paraphrasing\nas often as needed → whenever necessary"
   },
   {
    "no": 7,
    "word": "press release",
    "pos": "",
    "meaning": "보도 자료",
    "derivatives": [],
    "examples": [
     {
      "en": "In a press release issued today, Triton Chemical announced that it aims to acquire GreenTech Innovations next month.",
      "ko": "오늘 발표된 보도자료에서, 트라이톤 케미컬 사는 다음 달에 그린테크 이노베이션즈 사를 인수하는 것을 목표로 한다고 발표했습니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\npress conference 기자 회견"
   },
   {
    "no": 8,
    "word": "funding",
    "pos": "n.",
    "meaning": "자금, 재정 지원",
    "derivatives": [
     {
      "word": "fund",
      "pos": "n.",
      "meaning": "자금, 돈"
     },
     {
      "word": "fund",
      "pos": "v.",
      "meaning": "자금을 대다"
     }
    ],
    "examples": [
     {
      "en": "The budget allocation for the upcoming project includes an increase in funding for state-of-the-art equipment.",
      "ko": "이번 프로젝트의 예산 배정은 최첨단 장비에 대한 재정 지원을 늘린 것을 포함합니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 9,
    "word": "loan",
    "pos": "n.",
    "meaning": "대출",
    "derivatives": [],
    "examples": [
     {
      "en": "Before finalizing the loan application, make sure to review all the terms and conditions outlined by the lender.",
      "ko": "대출 신청을 마무리하기 전에, 대출기관이 약술한 모든 약관을 검토하십시오."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 10,
    "word": "proceed with",
    "pos": "",
    "meaning": "~을 진행하다, 계속해서 하다",
    "derivatives": [],
    "examples": [
     {
      "en": "The legal team has reviewed the contract, and they have advised us that it's safe to proceed with the partnership.",
      "ko": "법무팀이 계약서를 검토했고, 협력 계약을 진행하는 것이 안전하다고 조언했습니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\nproceed to ~로 나아가다, 이동하다\nproceeds 이익금, 수익금"
   },
   {
    "no": 11,
    "word": "take A into account",
    "pos": "",
    "meaning": "A를 계산에 넣다, 고려[참작]하다",
    "derivatives": [],
    "examples": [
     {
      "en": "When making financial decisions, it's wise to take potential risks into account to protect your investments.",
      "ko": "재정적인 결정을 내릴 때에는, 투자금을 지키기 위해 잠재적 위험을 고려하는 것이 현명합니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 12,
    "word": "follow up on",
    "pos": "",
    "meaning": "~에 대해 후속 조치를 하다, ~을 끝까지 챙기다",
    "derivatives": [],
    "examples": [
     {
      "en": "After the initial meeting, I will follow up on the progress of the project to ensure everything is on track.",
      "ko": "첫 회의가 끝난 후에, 모든 것이 제대로 잘 진행될 수 있도록 프로젝트 진행 상황을 끝까지 챙기도록 하겠습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 13,
    "word": "outsource",
    "pos": "v.",
    "meaning": "~을 외부에 위탁하다",
    "derivatives": [
     {
      "word": "outsourcing",
      "pos": "n.",
      "meaning": "아웃소싱, 외주"
     }
    ],
    "examples": [
     {
      "en": "To meet the tight deadline, the work has been outsourced to a local freelance team with expertise in web design.",
      "ko": "빠듯한 마감일을 맞추기 위해, 웹 디자인에 전문 지식을 갖춘 현지 프리랜서 팀에 작업을 위탁했습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 14,
    "word": "founder",
    "pos": "n.",
    "meaning": "창립자, 설립자",
    "derivatives": [],
    "examples": [
     {
      "en": "Mark, the founder and CEO, started the business with a small team and has since turned it into a global industry leader.",
      "ko": "창업자이자 CEO인 마크는 작은 팀으로 사업을 시작했고 이후 그것을 세계적인 업계 선두주자로 변화시켰습니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\n'설립하다'라는 뜻의 동사는 found로서, 이때 동사변화는 found-founded-founded와 같습니다."
   },
   {
    "no": 15,
    "word": "protocol",
    "pos": "n.",
    "meaning": "규약, 실시 요강, 프로토콜",
    "derivatives": [],
    "examples": [
     {
      "en": "Safety protocols at the Blue Garden restaurant chain were modified in order to comply with the new public health guidelines.",
      "ko": "블루 가든 레스토랑 체인의 안전 규약은 새 공중 보건 지침을 준수하기 위해 수정되었습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 16,
    "word": "joint",
    "pos": "a.",
    "meaning": "공동의, 합동의",
    "derivatives": [
     {
      "word": "jointly",
      "pos": "ad.",
      "meaning": "합동으로"
     }
    ],
    "examples": [
     {
      "en": "The CEOs of the two companies delivered a joint presentation to announce their strategic partnership and future plans.",
      "ko": "양사 CEO들은 전략적 파트너십과 향후 계획을 알리기 위해 합동 발표를 했습니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\ncollaborative 공동의\ncollaborate on ~을 공동 작업하다\ncooperate with ~와 협력하다"
   },
   {
    "no": 17,
    "word": "as of + 일시",
    "pos": "",
    "meaning": "~부로, ~부터",
    "derivatives": [],
    "examples": [
     {
      "en": "As of May 1, the policy requiring employees to use the designated parking area will be implemented to improve parking management.",
      "ko": "5월 1일부터 주차 관리 개선을 위해 직원들이 지정된 주차 구역을 의무적으로 사용하도록 하는 정책이 시행될 것입니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\n= beginning + 일시, starting + 일시, effective from + 일시"
   },
   {
    "no": 18,
    "word": "up-to-date",
    "pos": "a.",
    "meaning": "최신의",
    "derivatives": [],
    "examples": [
     {
      "en": "It's important to keep your software up-to-date to ensure optimal performance.",
      "ko": "최적의 성능을 보장하기 위해서는 소프트웨어를 최신 상태로 유지하는 것이 중요합니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 19,
    "word": "within budget",
    "pos": "",
    "meaning": "예산 범위 내에서",
    "derivatives": [],
    "examples": [
     {
      "en": "Despite unexpected challenges, the construction project was finished on time and within budget.",
      "ko": "예상치 못한 어려움에도 불구하고, 건설 프로젝트는 제때에 예산 범위 내에서 완료되었습니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\nbeyond budget 예산을 초과하여\nexceed the budget 예산을 초과하다"
   },
   {
    "no": 20,
    "word": "subcontract",
    "pos": "v.",
    "meaning": "~을 하도급 주다, 하청 주다",
    "derivatives": [],
    "examples": [
     {
      "en": "The construction company decided to subcontract the electrical work to a contractor with expertise in wiring and installations.",
      "ko": "그 건설사는 전기공사를 배선과 설비에 전문성을 갖춘 업자에게 하청을 주기로 했습니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\ncontractor 계약자, 도급업자"
   },
   {
    "no": 21,
    "word": "renew a contract",
    "pos": "",
    "meaning": "계약을 갱신하다",
    "derivatives": [],
    "examples": [
     {
      "en": "The company decided to renew the contract with their supplier for another year to maintain a steady supply of raw materials.",
      "ko": "그 회사는 원료의 안정적인 공급을 유지하기 위해 공급업체와 1년 더 계약을 갱신하기로 결정했습니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\nsupplier 공급업자"
   },
   {
    "no": 22,
    "word": "streamline",
    "pos": "v.",
    "meaning": "~을 간소화[능률화]하다",
    "derivatives": [],
    "examples": [
     {
      "en": "The airline introduced self-check-in kiosks to streamline the check-in process and reduce waiting time for passengers.",
      "ko": "그 항공사는 체크인 절차를 간소화하고 승객들의 대기 시간을 줄이기 위해 셀프 체크인 키오스크를 도입했습니다."
     }
    ],
    "quiz": null,
    "tip": "기출 Paraphrasing\nstreamline → simplify (간소화하다)"
   },
   {
    "no": 23,
    "word": "in effect",
    "pos": "",
    "meaning": "이행[발효] 중인, 시행 중인",
    "derivatives": [],
    "examples": [
     {
      "en": "As of January 1, the new regulations will be in effect, impacting how businesses handle customer data.",
      "ko": "1월 1일부터, 새로운 규제가 시행되어 기업들이 고객 데이터를 처리하는 방식에 영향을 줄 것입니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\ncome into effect 효력이 발생하다"
   },
   {
    "no": 24,
    "word": "stipulate",
    "pos": "v.",
    "meaning": "~을 규정하다, 명시하다",
    "derivatives": [
     {
      "word": "stipulation",
      "pos": "n.",
      "meaning": "규정"
     },
     {
      "word": "stipulated",
      "pos": "a.",
      "meaning": "약정한"
     }
    ],
    "examples": [
     {
      "en": "The law stipulates that employers must provide a safe working environment for their employees.",
      "ko": "이 법은 고용주가 고용인들에게 안전한 근무 환경을 제공해야 한다고 규정하고 있습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 25,
    "word": "adopt",
    "pos": "v.",
    "meaning": "~을 도입하다, 채택하다",
    "derivatives": [
     {
      "word": "adoption",
      "pos": "n.",
      "meaning": "채택, 선정"
     },
     {
      "word": "adopted",
      "pos": "a.",
      "meaning": "채택된"
     }
    ],
    "examples": [
     {
      "en": "Since adopting chemical-free farming methods last year, Trickle Creek Orchard has almost doubled its profit margin.",
      "ko": "지난해 화학성분이 없는 농업 방식을 채택한 이후, 트리클 크리크 과수원은 이윤 폭이 거의 두 배로 뛰었습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 26,
    "word": "provided (that)",
    "pos": "",
    "meaning": "만약 ~이라면, ~이라는 조건하에",
    "derivatives": [],
    "examples": [
     {
      "en": "Employees of ACE Inc. will receive a salary increase next year provided that their performance meets the established targets.",
      "ko": "에이스 사의 직원들은 그들의 성과가 정해진 목표를 달성한다면 내년에 급여 인상을 받게 될 것입니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 27,
    "word": "capital",
    "pos": "n.",
    "meaning": "자본금, 자금",
    "derivatives": [],
    "examples": [
     {
      "en": "The office will be renovated next year provided that the capital budget proposal is approved.",
      "ko": "사무실은 자본예산안이 승인된다면 내년에 보수될 것입니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 28,
    "word": "strengthen",
    "pos": "v.",
    "meaning": "~을 강화하다",
    "derivatives": [
     {
      "word": "strength",
      "pos": "n.",
      "meaning": "강점"
     }
    ],
    "examples": [
     {
      "en": "To strengthen relations between the divisions, the company is implementing a series of team-building workshops.",
      "ko": "부서 간의 관계를 강화하기 위해, 회사는 일련의 팀 구성 워크숍을 시행하고 있습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 29,
    "word": "unveil",
    "pos": "v.",
    "meaning": "~을 공개하다, 발표하다",
    "derivatives": [
     {
      "word": "unveiling",
      "pos": "n.",
      "meaning": "제막식, 첫 공개"
     }
    ],
    "examples": [
     {
      "en": "We will unveil at least four new products to the public during the upcoming product launch event.",
      "ko": "곧 있을 제품 출시 행사에서는 최소 네 개의 신제품을 대중에 공개할 예정입니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 30,
    "word": "input",
    "pos": "n.",
    "meaning": "조언, 투입, 입력 / v. 입력하다",
    "derivatives": [],
    "examples": [
     {
      "en": "Your input is crucial to us, so please take a moment to provide your feedback on our new product design.",
      "ko": "귀하의 조언은 저희에게 매우 중요하므로, 잠시 시간을 내어 저희 신제품 디자인에 대해 의견을 주시기 바랍니다."
     }
    ],
    "quiz": null,
    "tip": "기출 Paraphrasing\ninput → advice (조언)"
   },
   {
    "no": 31,
    "word": "status",
    "pos": "n.",
    "meaning": "(진행 과정상의) 상황",
    "derivatives": [],
    "examples": [
     {
      "en": "You can easily check the status of your order by entering your order number on our website.",
      "ko": "당사 웹사이트에 주문번호를 입력하시면 주문 상황을 쉽게 확인하실 수 있습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 32,
    "word": "media outlet",
    "pos": "",
    "meaning": "언론 매체, 매스컴",
    "derivatives": [],
    "examples": [
     {
      "en": "Finance Daily was the first media outlet to report on the proposed merger between Triton Chemicals and GreenTech Innovations.",
      "ko": "<파이낸스 데일리> 지는 트라이톤 케미컬 사와 그린테크 이노베이션즈 사 간의 합병 제안을 보도한 최초의 언론 매체였습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 33,
    "word": "repayment",
    "pos": "n.",
    "meaning": "반환(금), 상환",
    "derivatives": [],
    "examples": [
     {
      "en": "It's important to stick to your budget to ensure timely repayment of your credit card debt.",
      "ko": "신용카드 빚을 제때 갚기 위해서는 자금 계획을 지키는 것이 중요합니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 34,
    "word": "export",
    "pos": "v.",
    "meaning": "수출하다 / n. 수출",
    "derivatives": [],
    "examples": [
     {
      "en": "SM Corporation exports a variety of electronic components and devices to 25 countries around the world.",
      "ko": "SM 사는 전 세계 25개국에 다양한 전자부품과 기기를 수출합니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\nimport 수입하다\ncommerce 무역, 상업\ntrade 무역"
   },
   {
    "no": 35,
    "word": "economize",
    "pos": "v.",
    "meaning": "절약하다, 아끼다",
    "derivatives": [],
    "examples": [
     {
      "en": "The company had to make tough decisions to economize during the economic downturn, including layoffs and budget cuts.",
      "ko": "그 회사는 경기 침체 기간 동안 절약하기 위해 어려운 결정을 내려야 했는데, 이는 해고와 예산 삭감을 포함합니다."
     }
    ],
    "quiz": null,
    "tip": "기출 Paraphrasing\neconomize → save money"
   },
   {
    "no": 36,
    "word": "compelling",
    "pos": "a.",
    "meaning": "설득력 있는; 강제적인",
    "derivatives": [
     {
      "word": "compel",
      "pos": "v.",
      "meaning": "~을 강요[강제]하다"
     }
    ],
    "examples": [
     {
      "en": "The sales presentation included a compelling argument for why their product was the best in the market.",
      "ko": "영업 발표에는 그들의 제품이 시장에서 가장 우수한 이유에 대한 설득력 있는 주장이 포함되었습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 37,
    "word": "emerging",
    "pos": "a.",
    "meaning": "떠오르는, 최근 생겨난",
    "derivatives": [
     {
      "word": "emerge",
      "pos": "v.",
      "meaning": "나오다, 드러나다"
     }
    ],
    "examples": [
     {
      "en": "The emerging trends in technology suggest that artificial intelligence will play a significant role in the future of many industries.",
      "ko": "기술 업계의 최근 추세는 인공지능이 많은 산업의 미래에 중요한 역할을 할 것임을 시사합니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 38,
    "word": "switch",
    "pos": "v.",
    "meaning": "~로 전환하다, 바꾸다 (to) / n. 전환",
    "derivatives": [],
    "examples": [
     {
      "en": "Switching to a vegetarian diet has numerous health benefits, including reduced risk of heart disease and improved digestion.",
      "ko": "채식주의 식단으로 바꾸는 것은 심장병의 위험 감소와 소화 개선을 포함하여 많은 건강상의 이점을 가지고 있습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 39,
    "word": "pilot test",
    "pos": "n.",
    "meaning": "시범 테스트",
    "derivatives": [],
    "examples": [
     {
      "en": "Before launching the new software, we conducted a pilot test with a small group of users to gather feedback.",
      "ko": "신규 소프트웨어를 출시하기 전에, 피드백을 수집하기 위해 소규모 사용자 그룹을 대상으로 시범 테스트를 실시하였습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 40,
    "word": "refurbishment",
    "pos": "n.",
    "meaning": "개조, 재단장",
    "derivatives": [
     {
      "word": "refurbish",
      "pos": "v.",
      "meaning": "~을 새로 꾸미다[재단장하다]"
     }
    ],
    "examples": [
     {
      "en": "The shopping mall's refurbishment included renovating storefronts, adding new lighting, and upgrading the food court.",
      "ko": "쇼핑몰의 재단장에는 매장 전면 개조, 조명 추가, 그리고 푸드코트 업그레이드가 포함됐습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   }
  ]
 },
 {
  "week": 6,
  "day": 26,
  "part": "Part 3,4",
  "title": "기출 패러프레이징 ①",
  "words": [
   {
    "no": 1,
    "word": "contact",
    "pos": "",
    "meaning": "~에게 연락하다",
    "derivatives": [
     "talk to / speak to ~에게 말하다",
     "call / give A a call (A에게) 전화하다",
     "e-mail / send an e-mail 이메일을 보내다"
    ],
    "examples": [
     {
      "en": "M: I'll send out an e-mail to the staff and see what they think about the new schedule. / Q. 무엇을 할 것인가? → Contact some employees",
      "ko": "직원들에게 이메일을 보내서 그들이 새 일정에 대해 어떻게 생각하는지 알아보겠습니다."
     }
    ],
    "quiz": null,
    "tip": "phone number, e-mail address, fax number, mailing address 등을 통칭하여 contact information(연락처)이라고 합니다."
   },
   {
    "no": 2,
    "word": "public transportation",
    "pos": "",
    "meaning": "대중교통",
    "derivatives": [
     "bus, taxi, subway"
    ],
    "examples": [
     {
      "en": "W: I was thinking I should take the bus or subway. That way, I won't have to worry about parking. / Q. 무엇을 할 것인가? → Use public transportation",
      "ko": "버스나 지하철을 타야 할까 생각 중이었어요. 그럼 주차 걱정을 할 필요가 없으니까요."
     }
    ],
    "quiz": null,
    "tip": "상위어 Paraphrasing\npaper, ink cartridges, pens → office supplies (사무용품)"
   },
   {
    "no": 3,
    "word": "launch",
    "pos": "",
    "meaning": "(상품 등을) 출시하다",
    "derivatives": [
     "introduce 소개하다",
     "release 출시하다",
     "put A on the market A를 시장에 내놓다"
    ],
    "examples": [
     {
      "en": "M: We'll be launching a new medication within the year. / Q. 올해 무슨 일이 있을 것인가? → A new product will be introduced[released].",
      "ko": "올해 안에 신약을 출시할 예정입니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 4,
    "word": "relocate",
    "pos": "",
    "meaning": "(~을) 옮기다, 이전하다",
    "derivatives": [
     "move 옮기다, 이사하다",
     "transfer 옮기다, 이동하다"
    ],
    "examples": [
     {
      "en": "W: Last month, we moved our office to a more strategic location in the heart of the city. / Q. 지난달에 어떤 일이 있었는가? → An office was relocated.",
      "ko": "지난달에 저희는 도심 중심부에 있는 보다 전략적인 위치로 사무실을 이전하였습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 5,
    "word": "call A back",
    "pos": "",
    "meaning": "A에게 답신 전화를 하다",
    "derivatives": [
     "return a call 답신 전화를 하다",
     "get back to A A에게 다시 연락을 주다"
    ],
    "examples": [
     {
      "en": "M: We need to discuss the upcoming project deadline. Please call me back as soon as you receive this message. / Q. 청자에게 무엇을 요청하는가? → Return a call",
      "ko": "곧 있을 프로젝트 마감일에 대해 논의해야 합니다. 이 메시지를 받는 대로 제게 다시 전화 주세요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 6,
    "word": "postpone",
    "pos": "",
    "meaning": "~을 미루다, 연기하다",
    "derivatives": [
     "put off, delay 미루다"
    ],
    "examples": [
     {
      "en": "W: There was a thunderstorm approaching, so my departure was postponed by two hours. / Q. 무슨 문제가 있는가? → A flight was delayed.",
      "ko": "폭풍우가 다가오고 있어서, 제 출발이 2시간 지연되었습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 7,
    "word": "expire",
    "pos": "",
    "meaning": "만료되다",
    "derivatives": [
     "no longer valid[good] 더 이상 효력이 없는"
    ],
    "examples": [
     {
      "en": "M: I'm sorry, but I can't process this voucher. It expired last week. / Q. 무슨 문제가 있는가? → A voucher is no longer valid.",
      "ko": "죄송하지만, 이 상품권을 처리해드릴 수 없습니다. 지난주에 만료되었습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 8,
    "word": "estimate",
    "pos": "",
    "meaning": "견적, 견적서",
    "derivatives": [
     "quote 견적가",
     "how much it will cost 비용이 얼마가 될지"
    ],
    "examples": [
     {
      "en": "W: I received some quotes from a few local caterers. Our budget is pretty tight, so I'm leaning toward Culinary Canvas Catering. / Q. 무엇을 받았는가? → Some price estimates",
      "ko": "몇몇 지역 출장연회업체들로부터 견적을 받았습니다. 저희 예산이 꽤 빠듯해서, 저는 컬리너리 캔버스 케이터링 쪽으로 마음이 기울고 있습니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\ncost estimate 비용 견적\nprice estimate 가격 견적"
   },
   {
    "no": 9,
    "word": "submit",
    "pos": "",
    "meaning": "~을 제출하다",
    "derivatives": [
     "hand in 제출하다"
    ],
    "examples": [
     {
      "en": "M: I finished all the data analysis, but still need to put together my findings. I'll hand in the report tomorrow morning. / Q. 내일 오전에 무엇을 할 것인가? → Submit a report",
      "ko": "모든 데이터 분석을 마쳤습니다만, 아직 제가 알아낸 사실들을 취합해야 합니다. 보고서를 내일 오전에 제출할 것입니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 10,
    "word": "acquire",
    "pos": "",
    "meaning": "(기업을) 인수하다",
    "derivatives": [
     "buy, purchase 매수하다",
     "take over 인계받다",
     "merge 합병시키다"
    ],
    "examples": [
     {
      "en": "W: I spoke with a representative from KU Corporation, and it turns out they're interested in buying my business. / Q. KU Corporation이 관심을 보이는 것은? → Acquiring a business",
      "ko": "제가 KU 코퍼레이션의 대표와 이야기를 나누었는데, 그들이 저희 회사를 인수하는 것에 관심 있어 하는 것 같습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 11,
    "word": "annual",
    "pos": "",
    "meaning": "매년의",
    "derivatives": [
     "yearly, annually, once a year, every year 매년"
    ],
    "examples": [
     {
      "en": "M: Thanks again for planning Friday's annual banquet for our museum's supporters. / Q. 무엇에 대해 얘기하고 있는가? → A yearly dinner",
      "ko": "박물관 후원자들을 위한 금요일의 연례 만찬회를 기획해 주셔서 다시 한 번 감사해요."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\ndaily (매일의), weekly (매주의), monthly (매월의), quarterly (분기별의)"
   },
   {
    "no": 12,
    "word": "coworker",
    "pos": "",
    "meaning": "(직장) 동료",
    "derivatives": [
     "colleague 동료",
     "associate, staff, employee 직원",
     "사람 이름 in[from] 부서명"
    ],
    "examples": [
     {
      "en": "W: I'll check with Ms. Bishop in our legal department. / Q. 무엇을 하겠다고 하는가? → Contact a colleague",
      "ko": "법무팀의 비숍 씨에게 확인을 해보겠습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 13,
    "word": "handle",
    "pos": "",
    "meaning": "~을 처리하다, 다루다",
    "derivatives": [
     "take care of, deal with, manage 처리하다"
    ],
    "examples": [
     {
      "en": "M: I'm confident that we can take care of all your travel needs, from booking flights and accommodations to arranging ground transportation. / Q. 무엇을 전문으로 하는 곳인가? → Handling travel arrangements",
      "ko": "저희는 항공권 및 숙소 예약부터 지상 교통편 마련까지 귀하의 모든 여행 관련 필요사항을 다 처리해드릴 자신이 있습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 14,
    "word": "clothing",
    "pos": "",
    "meaning": "옷, 의류",
    "derivatives": [
     "attire, apparel, garment, outfits, wear, dress 옷, 의복"
    ],
    "examples": [
     {
      "en": "W: There's a lot of interest in our new line of women's summer dresses. It looks like demand will be high, so we'd better increase production to be sure we have a supply of all garment sizes. / Q. 어떤 업체인가? → A clothing company",
      "ko": "여성용 여름 원피스 신제품 라인에 많은 관심이 쏠리고 있어요. 수요가 높을 것으로 보이니 모든 의복 사이즈를 공급할 수 있도록 생산량을 늘리는 게 좋을 것 같아요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 15,
    "word": "set aside",
    "pos": "",
    "meaning": "(물건을) 따로 맡아 두다",
    "derivatives": [
     "put aside, put on hold, hold, keep, reserve (물건 등을) 따로 맡아 두다"
    ],
    "examples": [
     {
      "en": "M: I won't be able to come in until tomorrow evening. Would it be possible to put the shirt on hold so that someone else doesn't buy it before I get there? / Q. 무엇을 부탁하는가? → Set aside an item",
      "ko": "제가 내일 저녁까지 갈 수 없을 것 같습니다. 제가 가기 전에 다른 사람이 사가지 않도록 셔츠를 따로 맡아 주실 수 있을까요?"
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 16,
    "word": "break down",
    "pos": "",
    "meaning": "고장 나다",
    "derivatives": [
     "out of order, broken 고장 난",
     "malfunction 제대로 작동하지 않다",
     "stop working 작동을 멈추다",
     "is not working properly, is acting up 제대로 작동하지 않고 있다"
    ],
    "examples": [
     {
      "en": "W: The elevator broke down last week, and it is still out of order, so we'll have to take the stairs. / Q. 무엇이 문제인가? → An elevator stopped working.",
      "ko": "엘리베이터가 지난주에 고장나서 아직까지 안 되고 있어요. 그래서 계단을 이용해야 할 거예요."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\nfaulty 고장난\ndefective 결함이 있는\ndamaged 파손된"
   },
   {
    "no": 17,
    "word": "sold out",
    "pos": "",
    "meaning": "다 팔린, 매진된",
    "derivatives": [
     "out of stock, not in stock 재고가 없는",
     "not available 이용[구매]할 수 없는"
    ],
    "examples": [
     {
      "en": "M: We do not have any seats available on any flights to Jeju tomorrow. It's a holiday weekend, so many people are traveling. Would you like to reserve a ticket for the following day? / Q. 무엇이 문제인가? → Some tickets are sold out.",
      "ko": "내일 이용 가능한 제주행 항공편이 하나도 없어요. 공휴일이 낀 주말이어서 많은 사람들이 여행을 하나봐요. 다음 날 항공권으로 예약하시겠습니까?"
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 18,
    "word": "oversee",
    "pos": "",
    "meaning": "~을 관리 감독하다",
    "derivatives": [
     "supervise, manage 관리 감독하다"
    ],
    "examples": [
     {
      "en": "W: We're planning to open more retail stores in Asian countries nearby. So, we're looking for someone to oversee operations at the new stores. / Q. 새 직책의 직무는 무엇인가? → Managing multiple stores",
      "ko": "저희는 인근 아시아 국가에 더 많은 소매점을 열 계획입니다. 그래서 신규 매장 운영을 관리 감독할 사람을 찾고 있습니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\nsupervisor / manager 관리자, 감독관"
   },
   {
    "no": 19,
    "word": "inclement weather",
    "pos": "",
    "meaning": "악천후",
    "derivatives": [
     "poor[bad, severe] weather 나쁜 날씨",
     "heavy rain (폭우), storm (폭풍), snowstorm (눈보라), thunderstorm (뇌우)"
    ],
    "examples": [
     {
      "en": "M: Attention all passengers on Flight WA15. Due to the approaching snowstorm, this flight has been canceled. We are very sorry for the inconvenience. / Q. 무엇이 문제인가? → Inclement weather",
      "ko": "WA15편에 탑승하신 모든 승객 여러분께 알립니다. 눈보라가 다가와서 이 항공편이 취소되었습니다. 불편을 끼쳐드려 대단히 죄송합니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 20,
    "word": "refreshments",
    "pos": "",
    "meaning": "다과",
    "derivatives": [
     "food and beverages 식음료",
     "snacks and drinks 간식과 음료"
    ],
    "examples": [
     {
      "en": "W: I hope you stay after the meeting and have some snacks and drinks that will be provided in the room next door. / Q. 어떤 일이 있을 것인가? → Refreshments will be served.",
      "ko": "회의가 끝난 후에도 계속 머무시며 옆방에서 제공될 다과를 드시길 바랍니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 21,
    "word": "renovation",
    "pos": "",
    "meaning": "보수공사",
    "derivatives": [
     "remodeling 리모델링",
     "improvement 향상, 개선",
     "repair work 수리 작업"
    ],
    "examples": [
     {
      "en": "M: Ms. Parker is going to talk about her current project – the renovation of a large apartment complex on the east side of town. / Q. 파커 씨는 무엇에 대해 이야기할 것인가? → A remodeling project",
      "ko": "파커 씨는 현행 프로젝트인 마을 동쪽에 있는 대규모 아파트 단지의 보수공사에 대해 이야기할 예정입니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 22,
    "word": "take part in",
    "pos": "",
    "meaning": "~에 참가하다",
    "derivatives": [
     "attend, participate in 참가하다"
    ],
    "examples": [
     {
      "en": "W: If you're interested in participating in this program, please send an e-mail to Angela Ingram. / Q. 왜 안젤라 잉그램에게 이메일을 보내는가? → To take part in a program",
      "ko": "이 프로그램에 참여하고 싶으시면, 안젤라 잉그램에게 이메일을 보내주시기 바랍니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 23,
    "word": "rule",
    "pos": "",
    "meaning": "규칙",
    "derivatives": [
     "regulations, policy 규정, 방침",
     "guideline 가이드라인, 지침",
     "standard 기준"
    ],
    "examples": [
     {
      "en": "M: I've received some feedback from our employees about the new guidelines for contacting the technical help staff, and most are not very happy with it. / Q. 무엇에 대해 얘기하고 있는가? → A policy for getting technical help",
      "ko": "직원들로부터 기술 지원팀 직원에게 연락하는 것에 대한 새 지침에 관해 피드백을 받았는데, 대부분이 이를 마음에 들어하지 않고 있습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 24,
    "word": "cancel",
    "pos": "",
    "meaning": "~을 취소하다",
    "derivatives": [
     "withdraw, call off 취소하다, 철회하다"
    ],
    "examples": [
     {
      "en": "W: I just read the e-mail that said today's department luncheon has been called off. Do you know why? / Q. 왜 이메일을 받았는가? → An event has been canceled.",
      "ko": "오늘 부서 오찬이 취소되었다는 메일을 방금 읽었습니다. 이유를 아시나요?"
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 25,
    "word": "contract",
    "pos": "",
    "meaning": "계약(서)",
    "derivatives": [
     "agreement 합의, 협약"
    ],
    "examples": [
     {
      "en": "M: Here's your copy of the rental contract for your new apartment. I've made a note that you're moving in on Tuesday. / Q. 무엇을 건네주는가? → A rental agreement",
      "ko": "여기 새 아파트 임대 계약서 사본입니다. 화요일에 이사오신다고 적어두었습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 26,
    "word": "event",
    "pos": "",
    "meaning": "행사",
    "derivatives": [
     "function, occasion 행사",
     "concert (콘서트), grand opening (개장), company dinner (회식), trade show (무역박람회), job fair (직업박람회) 등"
    ],
    "examples": [
     {
      "en": "W: It looks like there's a problem with the funds for the company dinner. I just found out that we're going to have to reduce our expenses by 15 percent. / Q. 무엇에 대해 얘기하는가? → Reducing the cost of an event",
      "ko": "회식 자금에 문제가 있는 것 같아요. 경비를 15% 줄여야 한다는 걸 방금 알았어요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 27,
    "word": "sufficient",
    "pos": "",
    "meaning": "충분한",
    "derivatives": [
     "adequate 충분한, 적절한",
     "enough 충분한"
    ],
    "examples": [
     {
      "en": "M: Our department's budget is not large enough to cover a major renovation project right now. / Q. 무슨 문제가 있는가? → A budget is not sufficient.",
      "ko": "우리 부서의 예산이 당장 주요 보수 공사를 감당하기에는 충분하지 않습니다."
     }
    ],
    "quiz": null,
    "tip": "토익에 자주 나오는 '예산이 충분하지 않다' 표현\nA budget has been reduced. 예산이 줄었다.\nA budget is tight. 예산이 빠듯하다.\na limited budget 제한된 예산"
   },
   {
    "no": 28,
    "word": "run short of[on]",
    "pos": "",
    "meaning": "~이 부족하다",
    "derivatives": [
     "shortage 부족",
     "lack v. 부족하다 n. 부족"
    ],
    "examples": [
     {
      "en": "W: It seems like we're running short of printer paper and ink cartridges. / Q. 무엇이 문제인가? → There is a lack of some office supplies.",
      "ko": "프린터 용지와 잉크 카트리지가 부족한 것 같습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 29,
    "word": "complimentary",
    "pos": "",
    "meaning": "무료의",
    "derivatives": [
     "free 무료의",
     "at no cost, at no charge, for free 무료로"
    ],
    "examples": [
     {
      "en": "M: Because a number of attendees will be staying with us that weekend, we'll be running a complimentary shuttle between the hotel and the convention center. / Q. 무엇에 대해 얘기하는가? → A shuttle service will be provided for free.",
      "ko": "그 주말에 많은 참석자들이 저희 호텔에 머물기 때문에, 저희는 호텔과 컨벤션 센터 사이에 무료 셔틀을 운행할 예정입니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 30,
    "word": "understaffed",
    "pos": "",
    "meaning": "일손이 모자란",
    "derivatives": [
     "shorthanded, shortstaffed 일손이 부족한",
     "not enough staff 직원이 충분하지 않은"
    ],
    "examples": [
     {
      "en": "W: The marketing department is pretty shorthanded right now because a few team members are out on vacation. / Q. 마케팅팀에 대해 뭐라고 하는가? → It is currently understaffed.",
      "ko": "지금 마케팅 부서는 일부 팀원들이 휴가 중이라 일손이 많이 부족합니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 31,
    "word": "location",
    "pos": "",
    "meaning": "위치, 장소",
    "derivatives": [
     "place, venue, spot, space, site 장소"
    ],
    "examples": [
     {
      "en": "M: There's been a change in location for our charity event tomorrow. Instead of Central Park, it's now going to be at the café down the street. / Q. 무슨 내용을 알려주는가? → A venue has been changed.",
      "ko": "내일 있을 자선 행사 장소가 바뀌었습니다. 센트럴 파크 대신 길가에 있는 카페에서 열릴 것입니다."
     }
    ],
    "quiz": null,
    "tip": "행사가 열리는 장소를 주로 venue라고 하는데, Part 3, 4의 선택지에 자주 등장하는 어휘이므로 꼭 알아 두세요."
   },
   {
    "no": 32,
    "word": "reasonable",
    "pos": "",
    "meaning": "(가격이) 합리적인",
    "derivatives": [
     "affordable 가격이 적당한"
    ],
    "examples": [
     {
      "en": "W: Try the SavorySpoon Bistro. It's a bit far from our office, but it is well worth the trip. They have very affordable prices. / Q. 왜 SavorySpoon Bistro를 추천하는가? → Their prices are reasonable.",
      "ko": "세이버리스푼 비스트로에 가보세요. 사무실에서 조금 멀긴 하지만 충분히 갈 만한 가치가 있어요. 가격이 아주 합리적이에요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 33,
    "word": "reimburse",
    "pos": "",
    "meaning": "~에게 배상해주다, 변제해주다",
    "derivatives": [
     "pay back 돈을 돌려주다",
     "compensate 보상을 해주다"
    ],
    "examples": [
     {
      "en": "M: I have one question about relocating. Will I be compensated for all my moving costs? / Q. 무엇에 대해 문의하는가? → A reimbursement",
      "ko": "이사에 대해 한 가지 질문이 있습니다. 이사비는 전부 보상받나요?"
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 34,
    "word": "promote",
    "pos": "",
    "meaning": "~을 홍보하다",
    "derivatives": [
     "advertise 광고하다"
    ],
    "examples": [
     {
      "en": "W: I'm calling about an idea to promote your new restaurant. Why don't we film a television commercial right there on site? / Q. 무엇에 대해 얘기하는가? → How to advertise a business",
      "ko": "당신의 새 식당을 홍보할 아이디어 때문에 전화 드렸습니다. 바로 그곳 현장에서 텔레비전 광고를 촬영해 보는 것은 어떨까요?"
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 35,
    "word": "revise",
    "pos": "",
    "meaning": "~을 수정하다, 개정하다",
    "derivatives": [
     "edit (글을) 수정하다",
     "make changes, modify, make revisions 수정하다",
     "correct 바로잡다, 고치다",
     "update 새로운 내용으로 바꾸다"
    ],
    "examples": [
     {
      "en": "M: I just finished reviewing your first draft of the presentation, and I feel like it needs some editing. / Q. 무엇을 하라고 하는가? → Revise a draft",
      "ko": "당신의 발표 초안 검토를 이제 막 끝냈는데요, 수정이 좀 필요할 것 같습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 36,
    "word": "sign up for",
    "pos": "",
    "meaning": "~을 신청하다, ~에 등록하다",
    "derivatives": [
     "register for, enroll in 등록하다"
    ],
    "examples": [
     {
      "en": "W: You can sign up for a fun guided tour here. It's a fantastic way to explore the city's landmarks. / Q. 무엇을 권하는가? → Register for a guided tour",
      "ko": "여러분은 이곳에서 재미있는 가이드 투어를 신청할 수 있습니다. 도시의 랜드마크를 둘러볼 수 있는 환상적인 방법입니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 37,
    "word": "give[offer] a ride",
    "pos": "",
    "meaning": "차로 태워주다",
    "derivatives": [
     "provide[offer] transportation 교통편을 제공하다"
    ],
    "examples": [
     {
      "en": "M: I heard your car is still in the repair shop. I can give you a ride home after work today. / Q. 무엇을 해주겠다고 하는가? → Provide transportation",
      "ko": "당신의 차가 아직 정비소에 있다고 들었습니다. 제가 오늘 퇴근 후에 집까지 태워다 드릴 수 있습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 38,
    "word": "detour",
    "pos": "",
    "meaning": "우회로",
    "derivatives": [
     "alternate[alternative] route, bypass 대체로, 우회로",
     "different road 다른 도로"
    ],
    "examples": [
     {
      "en": "W: Because of road repairs, Exit 4B on Emmerson Highway is closed. To avoid the affected area, drivers are advised to take a detour using local roads. / Q. 무엇을 권하는가? → Taking an alternate route",
      "ko": "도로 보수 공사로 인해 에머슨 고속도로 4B번 출구가 폐쇄되어 있습니다. 해당 구역을 피하기 위해, 운전자들께서는 지방 도로를 이용하여 우회하시기 바랍니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 39,
    "word": "traffic congestion",
    "pos": "",
    "meaning": "교통 체증",
    "derivatives": [
     "stuck in traffic 교통 체증에 갇힌",
     "backed up 교통이 막히는",
     "traffic jam 교통 체증",
     "traffic is slow 길이 막히다"
    ],
    "examples": [
     {
      "en": "M: I'm sorry I'm late to work. Traffic was really slow this morning because of the rain. / Q. 남자는 무엇 때문에 늦었는가? → Traffic congestion → He was stuck in traffic.",
      "ko": "회사에 늦어서 죄송합니다. 오늘 아침에 비가 와서 정말 길이 막혔어요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 40,
    "word": "state-of-the-art",
    "pos": "",
    "meaning": "최첨단의, 최신식의",
    "derivatives": [
     "cutting-edge 최신식의"
    ],
    "examples": [
     {
      "en": "W: The reason our customers keep coming back to our business is our state-of-the-art facilities. / Q. 고객들이 업체에 대해 무엇을 좋아하는가? → It has cutting-edge facilities.",
      "ko": "고객들이 계속해서 우리 업체를 다시 찾는 이유는 우리의 최첨단 시설 때문입니다."
     }
    ],
    "quiz": null,
    "tip": ""
   }
  ]
 },
 {
  "week": 6,
  "day": 27,
  "part": "Part 5,6",
  "title": "형용사 ③",
  "words": [
   {
    "no": 1,
    "word": "considerable",
    "pos": "a.",
    "meaning": "상당한",
    "derivatives": [
     {
      "word": "considerably",
      "pos": "ad.",
      "meaning": "상당히"
     }
    ],
    "examples": [
     {
      "en": "put in considerable effort",
      "ko": "상당한 노력을 쏟다"
     },
     {
      "en": "expect a considerable upturn",
      "ko": "상당한 호전을 예상하다"
     }
    ],
    "quiz": {
     "sentence": "The repair of the damaged cathedral roof will require ------- time and expense.",
     "a": "proficient",
     "b": "considerable",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 2,
    "word": "sensitive",
    "pos": "a.",
    "meaning": "민감한, 예민한",
    "derivatives": [
     {
      "word": "sense",
      "pos": "n.",
      "meaning": "감각"
     },
     {
      "word": "sense",
      "pos": "v.",
      "meaning": "감지하다, 느끼다"
     },
     {
      "word": "sensitivity",
      "pos": "n.",
      "meaning": "민감함, 예민함"
     }
    ],
    "examples": [
     {
      "en": "due to the sensitive nature of",
      "ko": "~의 민감한 특성으로 인해"
     },
     {
      "en": "sensitive client information",
      "ko": "민감한 고객 정보"
     }
    ],
    "quiz": {
     "sentence": "Ms. Henley instructs office workers to store all documents containing ------- information in the safe.",
     "a": "appropriate",
     "b": "sensitive",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 3,
    "word": "adequate",
    "pos": "a.",
    "meaning": "충분한, 적절한",
    "derivatives": [
     {
      "word": "adequately",
      "pos": "ad.",
      "meaning": "충분히, 적절히"
     }
    ],
    "examples": [
     {
      "en": "ensure adequate space for attendees",
      "ko": "참석자들을 위해 충분한 공간을 보장하다"
     },
     {
      "en": "find one's qualifications adequate",
      "ko": "~의 자격사항이 적절하다고 생각하다"
     }
    ],
    "quiz": {
     "sentence": "The private dining room at Percival Bistro provides ------- space for parties of up to 20 individuals.",
     "a": "competent",
     "b": "adequate",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 4,
    "word": "diverse",
    "pos": "a.",
    "meaning": "다양한",
    "derivatives": [],
    "examples": [
     {
      "en": "a diverse line of products",
      "ko": "다양한 제품군"
     },
     {
      "en": "the use of more diverse energy sources",
      "ko": "더 다양한 에너지 자원의 사용"
     }
    ],
    "quiz": {
     "sentence": "Starlit Enterprises employs a ------- workforce featuring people of various nationalities and backgrounds.",
     "a": "contrary",
     "b": "diverse",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 5,
    "word": "fragile",
    "pos": "a.",
    "meaning": "깨지기 쉬운, 연약한",
    "derivatives": [],
    "examples": [
     {
      "en": "handle fragile items with utmost care",
      "ko": "극도의 주의를 기울여 깨지기 쉬운 상품들을 다루다"
     }
    ],
    "quiz": {
     "sentence": "We use special packing materials to ensure ------- items are not damaged during shipping.",
     "a": "cautious",
     "b": "fragile",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 6,
    "word": "promising",
    "pos": "a.",
    "meaning": "유력한, 전망이 좋은",
    "derivatives": [],
    "examples": [
     {
      "en": "promising location for investors",
      "ko": "투자자들을 위한 유력한 장소"
     }
    ],
    "quiz": {
     "sentence": "We have received a lot of ------- feedback from members regarding our new fitness classes.",
     "a": "promising",
     "b": "profitable",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 7,
    "word": "reluctant",
    "pos": "a.",
    "meaning": "꺼려하는",
    "derivatives": [
     {
      "word": "reluctantly",
      "pos": "ad.",
      "meaning": "꺼려하여, 마지못해"
     }
    ],
    "examples": [
     {
      "en": "be reluctant to purchase a new model",
      "ko": "새로운 모델을 구매하는 것을 꺼려하다"
     }
    ],
    "quiz": {
     "sentence": "Although the auction attracted a large number of attendees, most were ------- to place any bids.",
     "a": "uncertain",
     "b": "reluctant",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 8,
    "word": "practical",
    "pos": "a.",
    "meaning": "실용적인",
    "derivatives": [],
    "examples": [
     {
      "en": "innovative yet practical",
      "ko": "혁신적이지만 실용적인"
     }
    ],
    "quiz": {
     "sentence": "Trion Consulting specializes in providing clients with innovative yet ------- solutions.",
     "a": "practical",
     "b": "internal",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 9,
    "word": "urgent",
    "pos": "a.",
    "meaning": "긴급한",
    "derivatives": [],
    "examples": [
     {
      "en": "require urgent attention",
      "ko": "긴급한 주의를 필요로 하다"
     },
     {
      "en": "contact A for any urgent matters",
      "ko": "어떠한 긴급한 사안들에 대해 A에게 연락하다"
     }
    ],
    "quiz": {
     "sentence": "Even though Ms. Pratt is on annual leave, she may be contacted by phone if you have any ------- issues.",
     "a": "urgent",
     "b": "obedient",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 10,
    "word": "ambitious",
    "pos": "a.",
    "meaning": "야심찬",
    "derivatives": [],
    "examples": [
     {
      "en": "meet one's ambitious goals",
      "ko": "야심찬 목표를 달성하다"
     },
     {
      "en": "announce an ambitious plan",
      "ko": "야심찬 계획을 발표하다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Krieger will outline his ------- plan to open twenty new branches of Codmo Burger throughout the UK.",
     "a": "ambitious",
     "b": "envious",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 11,
    "word": "hopeful",
    "pos": "a.",
    "meaning": "희망적인, 기대하는",
    "derivatives": [],
    "examples": [
     {
      "en": "be hopeful that",
      "ko": "~라는 점이 희망적이다"
     }
    ],
    "quiz": {
     "sentence": "Every board member is ------- that revenues can double to $2 billion this year.",
     "a": "cheerful",
     "b": "hopeful",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 12,
    "word": "unavailable",
    "pos": "a.",
    "meaning": "이용할 수 없는, 시간이 없는",
    "derivatives": [],
    "examples": [
     {
      "en": "will be unavailable to customers",
      "ko": "고객들이 이용할 수 없을 것이다"
     },
     {
      "en": "currently unavailable in the color you requested",
      "ko": "현재 귀하께서 요청하신 색상으로는 이용할 수 없는"
     }
    ],
    "quiz": {
     "sentence": "We regret to inform library members that the private reading rooms will be ------- during the renovation work.",
     "a": "unavailable",
     "b": "underdeveloped",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 13,
    "word": "consecutive",
    "pos": "a.",
    "meaning": "연속적인",
    "derivatives": [],
    "examples": [
     {
      "en": "predict four consecutive days of rain",
      "ko": "4일 연속의 비를 예측하다"
     },
     {
      "en": "win one's sixth consecutive international tournament",
      "ko": "6회 연속 국제 경기를 우승하다"
     }
    ],
    "quiz": {
     "sentence": "Matt Rodgers received the Best Songwriter of the Year award for the third ------- year.",
     "a": "following",
     "b": "consecutive",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 14,
    "word": "persistent",
    "pos": "a.",
    "meaning": "끊임없이 지속되는, 끈질긴",
    "derivatives": [
     {
      "word": "persistently",
      "pos": "ad.",
      "meaning": "끊임없이"
     }
    ],
    "examples": [
     {
      "en": "remove a persistent stain",
      "ko": "끊임없이 지속되는 얼룩을 제거하다"
     }
    ],
    "quiz": {
     "sentence": "Numerous local residents have filed complaints about the ------- noise coming from the nearby construction site.",
     "a": "persistent",
     "b": "defective",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 15,
    "word": "subsequent",
    "pos": "a.",
    "meaning": "후속의, 다음의",
    "derivatives": [
     {
      "word": "subsequently",
      "pos": "ad.",
      "meaning": "그 후에, 그 뒤에"
     }
    ],
    "examples": [
     {
      "en": "subsequent events",
      "ko": "후속 행사들"
     },
     {
      "en": "in the subsequent year",
      "ko": "그 다음 해에"
     }
    ],
    "quiz": {
     "sentence": "Few people watched Circle of Friends during its first season, but ------- seasons attracted a high number of viewers.",
     "a": "timely",
     "b": "subsequent",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 16,
    "word": "sturdy",
    "pos": "a.",
    "meaning": "견고한",
    "derivatives": [
     {
      "word": "sturdily",
      "pos": "ad.",
      "meaning": "견고하게"
     }
    ],
    "examples": [
     {
      "en": "thanks to sturdy construction",
      "ko": "견고한 건축 덕분에"
     },
     {
      "en": "recommend a sturdy bed frame",
      "ko": "견고한 침대 틀을 추천하다"
     }
    ],
    "quiz": {
     "sentence": "To protect your laptop, a ------- carrying case with padding is recommended.",
     "a": "intense",
     "b": "sturdy",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 17,
    "word": "unprecedented",
    "pos": "a.",
    "meaning": "전례 없는, 이례적인",
    "derivatives": [],
    "examples": [
     {
      "en": "an unprecedented increase in sales",
      "ko": "매출에서의 전례 없는 증가"
     },
     {
      "en": "be unprecedented in the history of",
      "ko": "~의 역사에서 이례적이다"
     }
    ],
    "quiz": {
     "sentence": "Southern Electricity customers have been outraged by the ------- increase in their monthly energy bills.",
     "a": "impenetrable",
     "b": "unprecedented",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 18,
    "word": "strategic",
    "pos": "a.",
    "meaning": "전략적인",
    "derivatives": [
     {
      "word": "strategically",
      "pos": "ad.",
      "meaning": "전략적으로"
     },
     {
      "word": "strategy",
      "pos": "n.",
      "meaning": "전략"
     }
    ],
    "examples": [
     {
      "en": "a strategic move to attract more customers",
      "ko": "더 많은 고객들을 끌어들이기 위한 전략적인 이동"
     }
    ],
    "quiz": {
     "sentence": "Apex Hotel's ------- location near the convention center makes it popular with business travelers.",
     "a": "strategic",
     "b": "distant",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 19,
    "word": "harsh",
    "pos": "a.",
    "meaning": "가혹한, 혹독한",
    "derivatives": [
     {
      "word": "harshly",
      "pos": "ad.",
      "meaning": "가혹하게, 혹독하게"
     }
    ],
    "examples": [
     {
      "en": "given the harsh reviews written by critics",
      "ko": "평론가들에 의해 작성된 가혹한 후기를 고려하면"
     }
    ],
    "quiz": {
     "sentence": "The new play written by Desmond Akumba received ------- reviews from the majority of theater critics.",
     "a": "harsh",
     "b": "deep",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 20,
    "word": "disappointed",
    "pos": "a.",
    "meaning": "실망한",
    "derivatives": [],
    "examples": [
     {
      "en": "be disappointed that",
      "ko": "~라는 것에 실망하다"
     }
    ],
    "quiz": {
     "sentence": "Some employees were left ------- with the outcome of the salary negotiations.",
     "a": "complicated",
     "b": "disappointed",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 21,
    "word": "inaccessible",
    "pos": "a.",
    "meaning": "이용할 수 없는, 접근할 수 없는",
    "derivatives": [],
    "examples": [
     {
      "en": "be inaccessible starting December 30",
      "ko": "12월 30일부터 이용할 수 없다"
     }
    ],
    "quiz": {
     "sentence": "The staff cafeteria will be ------- while the work crew is installing new seating and tables.",
     "a": "inaccessible",
     "b": "improbable",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 22,
    "word": "overdue",
    "pos": "a.",
    "meaning": "(기한이) 지난, 연체된",
    "derivatives": [],
    "examples": [
     {
      "en": "overdue for your annual checkup",
      "ko": "귀하의 연례 검진 기한이 지난"
     },
     {
      "en": "be overdue since last year",
      "ko": "작년 이후로 연체되다"
     }
    ],
    "quiz": {
     "sentence": "Starting next month, all ------- bill payments will be subject to a ten percent administration fee.",
     "a": "overdue",
     "b": "worthy",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 23,
    "word": "superb",
    "pos": "a.",
    "meaning": "최상의",
    "derivatives": [],
    "examples": [
     {
      "en": "superb customer service",
      "ko": "최상의 고객 서비스"
     },
     {
      "en": "impress the audience with one's superb technique",
      "ko": "최상의 기술로 청중에게 깊은 인상을 남기다"
     }
    ],
    "quiz": {
     "sentence": "Marcus Toft received an award for his ------- performance in the television show Elden Oaks.",
     "a": "superb",
     "b": "evasive",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 24,
    "word": "convincing",
    "pos": "a.",
    "meaning": "설득력 있는",
    "derivatives": [
     {
      "word": "convince",
      "pos": "v.",
      "meaning": "설득하다"
     }
    ],
    "examples": [
     {
      "en": "be so convincing that",
      "ko": "매우 설득력 있어서 ~하다"
     }
    ],
    "quiz": {
     "sentence": "The athletics committee made a highly ------- argument to have the event held in Los Angeles.",
     "a": "convincing",
     "b": "verified",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 25,
    "word": "versatile",
    "pos": "a.",
    "meaning": "다재다능한, 다용도의, 다양한 기능을 지닌",
    "derivatives": [
     {
      "word": "versatility",
      "pos": "n.",
      "meaning": "다재다능"
     }
    ],
    "examples": [
     {
      "en": "be versatile enough to do",
      "ko": "~하기에 충분히 다재다능하다"
     },
     {
      "en": "versatile furniture",
      "ko": "다용도 가구"
     }
    ],
    "quiz": {
     "sentence": "Quartet's new digital camera is ------- enough to be used in a wide variety of environments.",
     "a": "versatile",
     "b": "financial",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 26,
    "word": "incorrect",
    "pos": "a.",
    "meaning": "정확하지 않은",
    "derivatives": [
     {
      "word": "incorrectly",
      "pos": "ad.",
      "meaning": "정확하지 않게"
     }
    ],
    "examples": [
     {
      "en": "if your billing statement is incorrect",
      "ko": "귀하의 대금 청구서가 정확하지 않다면"
     }
    ],
    "quiz": {
     "sentence": "If any of the details on the application form are -------, you will not be issued a vendor permit for the event.",
     "a": "imperative",
     "b": "incorrect",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 27,
    "word": "mandatory",
    "pos": "a.",
    "meaning": "의무적인",
    "derivatives": [
     {
      "word": "mandate",
      "pos": "v.",
      "meaning": "의무화하다"
     }
    ],
    "examples": [
     {
      "en": "mandatory safety training",
      "ko": "의무적인 안전 교육"
     },
     {
      "en": "take a mandatory break",
      "ko": "의무적인 휴식을 갖다"
     }
    ],
    "quiz": {
     "sentence": "Employees are reminded that it is ------- to attend the weekly branch meeting at 8:45 AM on Mondays.",
     "a": "mandatory",
     "b": "probable",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 28,
    "word": "optimistic",
    "pos": "a.",
    "meaning": "낙관적인",
    "derivatives": [],
    "examples": [
     {
      "en": "be optimistic about",
      "ko": "~에 대해 낙관적이다"
     },
     {
      "en": "optimistic quarterly projections",
      "ko": "낙관적인 분기별 예상치"
     }
    ],
    "quiz": {
     "sentence": "The board members are ------- about the profitability of the new manufacturing plant.",
     "a": "optimistic",
     "b": "ample",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 29,
    "word": "perishable",
    "pos": "a.",
    "meaning": "상하기 쉬운",
    "derivatives": [
     {
      "word": "perish",
      "pos": "v.",
      "meaning": "상하다, 부패하다"
     }
    ],
    "examples": [
     {
      "en": "perishable products",
      "ko": "상하기 쉬운 제품들"
     }
    ],
    "quiz": {
     "sentence": "Jonson Refrigeration produces containers designed for the transportation of ------- goods, such as meat and dairy products.",
     "a": "coincidental",
     "b": "perishable",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 30,
    "word": "punctual",
    "pos": "a.",
    "meaning": "시간을 엄수하는",
    "derivatives": [
     {
      "word": "punctuality",
      "pos": "n.",
      "meaning": "시간 엄수"
     }
    ],
    "examples": [
     {
      "en": "try to be punctual",
      "ko": "시간을 엄수하도록 노력하다"
     }
    ],
    "quiz": {
     "sentence": "All participants must try to be ------- for the city tour, which will depart from the hotel lobby at precisely 9 AM.",
     "a": "punctual",
     "b": "eventual",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 31,
    "word": "unfavorable",
    "pos": "a.",
    "meaning": "좋지 않은, 호의적이지 않은",
    "derivatives": [
     {
      "word": "unfavorably",
      "pos": "ad.",
      "meaning": "불리하게"
     }
    ],
    "examples": [
     {
      "en": "due to unfavorable weather conditions",
      "ko": "좋지 않은 기상 조건 때문에"
     },
     {
      "en": "due to unfavorable conditions in the market",
      "ko": "시장에서의 좋지 않은 상황 때문에"
     }
    ],
    "quiz": {
     "sentence": "The launch of the new cell phone model has been delayed in light of the ------- feedback from product testers.",
     "a": "unfavorable",
     "b": "functional",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 32,
    "word": "delicate",
    "pos": "a.",
    "meaning": "다루기 힘든, 정교한",
    "derivatives": [],
    "examples": [
     {
      "en": "delicate contract negotiations",
      "ko": "다루기 힘든 계약 협상"
     }
    ],
    "quiz": {
     "sentence": "Ms. Sharpe is experienced in handling ------- matters involving dissatisfied customers.",
     "a": "delicate",
     "b": "talented",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 33,
    "word": "dependable",
    "pos": "a.",
    "meaning": "믿을 만한, 의존할 만한",
    "derivatives": [
     {
      "word": "depend",
      "pos": "v.",
      "meaning": "의존하다"
     },
     {
      "word": "dependent",
      "pos": "a.",
      "meaning": "의존적인"
     }
    ],
    "examples": [
     {
      "en": "become dependable",
      "ko": "믿을 만해지다"
     }
    ],
    "quiz": {
     "sentence": "Since joining the firm six months ago, Mr. Lopez has proven himself to be a ------- member of the sales team.",
     "a": "customized",
     "b": "dependable",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 34,
    "word": "manageable",
    "pos": "a.",
    "meaning": "관리하기 쉬운, 다루기 쉬운",
    "derivatives": [
     {
      "word": "manage",
      "pos": "v.",
      "meaning": "관리하다"
     }
    ],
    "examples": [
     {
      "en": "The project will be manageable.",
      "ko": "그 프로젝트는 관리하기 쉬울 것이다."
     }
    ],
    "quiz": {
     "sentence": "Day trips to Bird Peak Waterfall are easily ------- thanks to the hotel's regular shuttle bus service.",
     "a": "manageable",
     "b": "challenging",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 35,
    "word": "memorable",
    "pos": "a.",
    "meaning": "기억할 만한",
    "derivatives": [],
    "examples": [
     {
      "en": "deliver a memorable speech",
      "ko": "기억할 만한 연설을 하다"
     }
    ],
    "quiz": {
     "sentence": "The new interactive exhibits at Walford Science Museum promise to provide a ------- experience for the whole family.",
     "a": "memorable",
     "b": "victorious",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 36,
    "word": "provisional",
    "pos": "a.",
    "meaning": "임시의",
    "derivatives": [],
    "examples": [
     {
      "en": "be hired on a provisional basis",
      "ko": "임시로 채용되다"
     }
    ],
    "quiz": {
     "sentence": "Several employees will be hired on a ------- basis, and some of them will be offered full-time contracts in March.",
     "a": "provisional",
     "b": "marginal",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 37,
    "word": "adverse",
    "pos": "a.",
    "meaning": "부정적인, 불리한",
    "derivatives": [
     {
      "word": "adversely",
      "pos": "ad.",
      "meaning": "부정적으로, 불리하게"
     }
    ],
    "examples": [
     {
      "en": "have an adverse effect on",
      "ko": "~에 부정적인 영향을 끼치다"
     }
    ],
    "quiz": {
     "sentence": "The quarterly financial report shows that the new advertising campaign had an ------- effect on sales.",
     "a": "affordable",
     "b": "adverse",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 38,
    "word": "informative",
    "pos": "a.",
    "meaning": "유익한",
    "derivatives": [
     {
      "word": "informatively",
      "pos": "ad.",
      "meaning": "유익하게"
     }
    ],
    "examples": [
     {
      "en": "both informative and interesting",
      "ko": "둘 다 유익하고 흥미로운"
     },
     {
      "en": "the most informative speech",
      "ko": "가장 유익한 강연"
     }
    ],
    "quiz": {
     "sentence": "Guests can pick up ------- pamphlets about local sights from the hotel's reception area.",
     "a": "informative",
     "b": "enthusiastic",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 39,
    "word": "redeemable",
    "pos": "a.",
    "meaning": "(현금, 상품 등으로) 교환 가능한",
    "derivatives": [],
    "examples": [
     {
      "en": "be redeemable by the recipient",
      "ko": "수령인에 의해 교환 가능하다"
     }
    ],
    "quiz": {
     "sentence": "Loyalty points and discount codes are ------- on our Web site.",
     "a": "redeemable",
     "b": "eligible",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 40,
    "word": "unanimous",
    "pos": "a.",
    "meaning": "만장일치의",
    "derivatives": [
     {
      "word": "unanimously",
      "pos": "ad.",
      "meaning": "만장일치로"
     }
    ],
    "examples": [
     {
      "en": "be unanimous in one's decision to do",
      "ko": "~하는 결정에 있어서 만장일치이다"
     }
    ],
    "quiz": {
     "sentence": "The shareholders reached a ------- decision to relocate the company from California to Texas.",
     "a": "numerous",
     "b": "unanimous",
     "answer": "B"
    },
    "tip": ""
   }
  ]
 },
 {
  "week": 6,
  "day": 28,
  "part": "Part 5,6",
  "title": "형용사 ④",
  "words": [
   {
    "no": 1,
    "word": "attentive",
    "pos": "a.",
    "meaning": "주의를 기울이는",
    "derivatives": [
     {
      "word": "attentively",
      "pos": "ad.",
      "meaning": "주의하여"
     }
    ],
    "examples": [
     {
      "en": "stay attentive to",
      "ko": "~에 계속 주의를 기울이다"
     }
    ],
    "quiz": {
     "sentence": "Many online reviews note how ------- the wait staff at the restaurant are to diners' needs.",
     "a": "available",
     "b": "attentive",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 2,
    "word": "imperative",
    "pos": "a.",
    "meaning": "필수적인",
    "derivatives": [],
    "examples": [
     {
      "en": "it is imperative that",
      "ko": "~하는 것이 필수적이다"
     }
    ],
    "quiz": {
     "sentence": "It is ------- that you give at least 30 days of notice prior to the termination of the employment contract.",
     "a": "imperative",
     "b": "willing",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 3,
    "word": "marked",
    "pos": "a.",
    "meaning": "뚜렷한",
    "derivatives": [
     {
      "word": "markedly",
      "pos": "ad.",
      "meaning": "뚜렷하게"
     }
    ],
    "examples": [
     {
      "en": "show a marked improvement",
      "ko": "뚜렷한 개선을 보여주다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Bridges has noticed ------- improvement in staff productivity since the remodeling of the office space.",
     "a": "respective",
     "b": "marked",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 4,
    "word": "proud",
    "pos": "a.",
    "meaning": "자랑스러운",
    "derivatives": [],
    "examples": [
     {
      "en": "be proud to present artists who",
      "ko": "~한 예술가들을 소개하게 되어 자랑스럽다"
     }
    ],
    "quiz": {
     "sentence": "Ms. Winters was the ------- recipient of this year's Young Writer of the Year award.",
     "a": "proud",
     "b": "general",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 5,
    "word": "distinct",
    "pos": "a.",
    "meaning": "뚜렷한, 뚜렷이 구별되는",
    "derivatives": [
     {
      "word": "distinctive",
      "pos": "a.",
      "meaning": "독특한"
     },
     {
      "word": "distinctively",
      "pos": "ad.",
      "meaning": "독특하게"
     }
    ],
    "examples": [
     {
      "en": "if the sound is not distinct",
      "ko": "만약 소리가 뚜렷하지 않다면"
     }
    ],
    "quiz": {
     "sentence": "Dawson National Park has added ------- trail markers to ensure that hikers do not get lost.",
     "a": "perceptive",
     "b": "distinct",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 6,
    "word": "immense",
    "pos": "a.",
    "meaning": "엄청난 (양의), 방대한 (크기의)",
    "derivatives": [
     {
      "word": "immensely",
      "pos": "ad.",
      "meaning": "엄청나게"
     }
    ],
    "examples": [
     {
      "en": "immense collection of reviews",
      "ko": "엄청난 양의 후기 모음"
     },
     {
      "en": "feature an immense lobby",
      "ko": "방대한 크기의 로비를 특징으로 하다"
     }
    ],
    "quiz": {
     "sentence": "Flix Star, a new movie streaming platform, boasts an ------- catalog of more than 10,000 films.",
     "a": "impending",
     "b": "immense",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 7,
    "word": "costly",
    "pos": "a.",
    "meaning": "비용이 많이 드는",
    "derivatives": [
     {
      "word": "cost",
      "pos": "n.",
      "meaning": "비용"
     }
    ],
    "examples": [
     {
      "en": "protect your system from costly breakdowns",
      "ko": "비용이 많이 드는 고장으로부터 귀하의 시스템을 보호하다"
     }
    ],
    "quiz": {
     "sentence": "It is advisable to follow the cleaning guidelines for the air conditioning system in order to prevent ------- malfunctions.",
     "a": "costly",
     "b": "clear",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 8,
    "word": "sizable",
    "pos": "a.",
    "meaning": "(크기, 액수가) 상당한",
    "derivatives": [],
    "examples": [
     {
      "en": "create a sizable demand for",
      "ko": "~에 대한 상당한 수요를 만들다"
     }
    ],
    "quiz": {
     "sentence": "The CEO privately thanked Mr. Hogg for his ------- donation at last week's charity fundraiser.",
     "a": "sizable",
     "b": "durable",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 9,
    "word": "unfamiliar",
    "pos": "a.",
    "meaning": "익숙하지 않은",
    "derivatives": [],
    "examples": [
     {
      "en": "be unfamiliar with",
      "ko": "~에 익숙하지 않다"
     },
     {
      "en": "engineers unfamiliar with the program",
      "ko": "그 프로그램에 익숙하지 않은 기술자들"
     }
    ],
    "quiz": {
     "sentence": "Workers who are still ------- with the new database system are invited to attend a workshop at 2 PM tomorrow.",
     "a": "difficult",
     "b": "unfamiliar",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 10,
    "word": "demanding",
    "pos": "a.",
    "meaning": "힘든, 까다로운",
    "derivatives": [
     {
      "word": "demand",
      "pos": "n.",
      "meaning": "요구"
     }
    ],
    "examples": [
     {
      "en": "much too demanding for A",
      "ko": "A에게 매우 힘든"
     }
    ],
    "quiz": {
     "sentence": "The walking trail to the summit of Grouse Mountain is not particularly ------- and is suitable for people of all ages.",
     "a": "uneasy",
     "b": "demanding",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 11,
    "word": "tentative",
    "pos": "a.",
    "meaning": "잠정적인, 임시의",
    "derivatives": [
     {
      "word": "tentatively",
      "pos": "ad.",
      "meaning": "잠정적으로, 임시로"
     }
    ],
    "examples": [
     {
      "en": "discuss a tentative agreement with",
      "ko": "~와 잠정적인 협정을 논의하다"
     },
     {
      "en": "a tentative schedule of events",
      "ko": "행사의 임시 일정"
     }
    ],
    "quiz": {
     "sentence": "November 10 has been chosen as the ------- date for the grand opening of Summerville Shopping Mall.",
     "a": "tentative",
     "b": "hesitant",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 12,
    "word": "renowned",
    "pos": "a.",
    "meaning": "유명한",
    "derivatives": [],
    "examples": [
     {
      "en": "renowned sculptor",
      "ko": "유명한 조각가"
     },
     {
      "en": "renowned for its architectural beauty",
      "ko": "건축미로 유명한"
     }
    ],
    "quiz": {
     "sentence": "The keynote speaker for the International Finance Convention will be the ------- businessman, Alan Kane.",
     "a": "eligible",
     "b": "renowned",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 13,
    "word": "repetitive",
    "pos": "a.",
    "meaning": "반복적인",
    "derivatives": [
     {
      "word": "repeat",
      "pos": "v.",
      "meaning": "반복하다"
     }
    ],
    "examples": [
     {
      "en": "repetitive work",
      "ko": "반복적인 작업"
     }
    ],
    "quiz": {
     "sentence": "Several factory workers have complained of muscle pain resulting from the ------- nature of the jobs they must perform.",
     "a": "repetitive",
     "b": "former",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 14,
    "word": "encouraging",
    "pos": "a.",
    "meaning": "희망적인, 고무적인",
    "derivatives": [
     {
      "word": "encourage",
      "pos": "v.",
      "meaning": "격려하다"
     }
    ],
    "examples": [
     {
      "en": "indicate an encouraging trend",
      "ko": "희망적인 경향을 보여주다"
     }
    ],
    "quiz": {
     "sentence": "The high number of advanced orders placed for our new car has been very ------- so far.",
     "a": "encouraging",
     "b": "available",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 15,
    "word": "desirable",
    "pos": "a.",
    "meaning": "바람직한, 매력적인",
    "derivatives": [
     {
      "word": "desire",
      "pos": "n.",
      "meaning": "바람, 열망"
     }
    ],
    "examples": [
     {
      "en": "be constructed on the most desirable land",
      "ko": "가장 매력적인 땅에 건설되다"
     }
    ],
    "quiz": {
     "sentence": "Green Hills has become a highly ------- neighborhood for families thanks to its excellent parks and schools.",
     "a": "attainable",
     "b": "desirable",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 16,
    "word": "compatible",
    "pos": "a.",
    "meaning": "호환되는(with)",
    "derivatives": [],
    "examples": [
     {
      "en": "be compatible with the system",
      "ko": "그 시스템과 호환되다"
     }
    ],
    "quiz": {
     "sentence": "Before downloading the file, employees should make sure its format is ------- with their mobile devices.",
     "a": "compatible",
     "b": "amenable",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 17,
    "word": "full",
    "pos": "a.",
    "meaning": "최대의, 전체의, 완전한",
    "derivatives": [
     {
      "word": "fully",
      "pos": "ad.",
      "meaning": "전적으로, 완전히"
     }
    ],
    "examples": [
     {
      "en": "operate at full capacity",
      "ko": "최대 수용력으로 운영되다"
     }
    ],
    "quiz": {
     "sentence": "The mayor aims to use the ------- extent of his influence to ensure the city is chosen to host the athletics event.",
     "a": "full",
     "b": "most",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 18,
    "word": "helpful",
    "pos": "a.",
    "meaning": "유용한, 도움이 되는",
    "derivatives": [
     {
      "word": "help",
      "pos": "v.",
      "meaning": "돕다"
     }
    ],
    "examples": [
     {
      "en": "especially helpful",
      "ko": "특히 유용한"
     },
     {
      "en": "it is helpful to do",
      "ko": "~하는 것이 도움이 되다"
     }
    ],
    "quiz": {
     "sentence": "Our Web site includes several ------- tips to make sure your visit to Turtle Island goes smoothly.",
     "a": "helpful",
     "b": "capable",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 19,
    "word": "temporary",
    "pos": "a.",
    "meaning": "임시의, 일시적인",
    "derivatives": [
     {
      "word": "temporarily",
      "pos": "ad.",
      "meaning": "임시로, 일시적으로"
     }
    ],
    "examples": [
     {
      "en": "serve as a temporary replacement for",
      "ko": "~의 임시 후임으로 일하다"
     },
     {
      "en": "a temporary solution to do",
      "ko": "~하기 위한 임시 해결책"
     }
    ],
    "quiz": {
     "sentence": "Upon registering as a member on our Web site, you will be given a ------- password that you should change.",
     "a": "comparable",
     "b": "temporary",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 20,
    "word": "remarkable",
    "pos": "a.",
    "meaning": "주목할 만한, 눈에 띄는",
    "derivatives": [
     {
      "word": "remarkably",
      "pos": "ad.",
      "meaning": "현저히"
     }
    ],
    "examples": [
     {
      "en": "result in a remarkable 40% rise in sales",
      "ko": "매출에서 주목할 만한 40퍼센트 상승의 결과를 낳다"
     }
    ],
    "quiz": {
     "sentence": "Since Mr. Glenn joined Mitchum Enterprises, the company has seen a ------- 30 percent decrease in annual expenditure.",
     "a": "remarkable",
     "b": "receptive",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 21,
    "word": "protective",
    "pos": "a.",
    "meaning": "보호하는",
    "derivatives": [
     {
      "word": "protect",
      "pos": "v.",
      "meaning": "보호하다"
     },
     {
      "word": "protection",
      "pos": "n.",
      "meaning": "보호"
     }
    ],
    "examples": [
     {
      "en": "as a protective measure for the company",
      "ko": "회사를 위한 보호 조치로"
     }
    ],
    "quiz": {
     "sentence": "All factory workers are required to wear ------- masks and gloves when operating dangerous machinery.",
     "a": "protective",
     "b": "settled",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 22,
    "word": "lengthy",
    "pos": "a.",
    "meaning": "긴, 오랜",
    "derivatives": [],
    "examples": [
     {
      "en": "it is too lengthy for",
      "ko": "~에게 너무 길다"
     }
    ],
    "quiz": {
     "sentence": "The hiring committee eventually decided to offer a contract to Helen Jones after ------- deliberation.",
     "a": "lengthy",
     "b": "wide",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 23,
    "word": "challenging",
    "pos": "a.",
    "meaning": "힘든, 도전적인",
    "derivatives": [
     {
      "word": "challenge",
      "pos": "n.",
      "meaning": "도전, 난제"
     }
    ],
    "examples": [
     {
      "en": "challenging project",
      "ko": "힘든 프로젝트"
     },
     {
      "en": "fulfill the demands of one's challenging role as CEO",
      "ko": "대표이사라는 힘든 역할의 책무를 완수하다"
     }
    ],
    "quiz": {
     "sentence": "Adjusting to a new environment can be -------, so please do not hesitate to ask me if you need any help.",
     "a": "interesting",
     "b": "challenging",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 24,
    "word": "operational",
    "pos": "a.",
    "meaning": "작동하는, 가동되는, 운영되는",
    "derivatives": [
     {
      "word": "operate",
      "pos": "v.",
      "meaning": "작동하다, 가동하다, 운영하다"
     },
     {
      "word": "operation",
      "pos": "n.",
      "meaning": "작동, 가동, 운영"
     }
    ],
    "examples": [
     {
      "en": "when the module is operational",
      "ko": "그 모듈이 작동할 때"
     },
     {
      "en": "should be operational by June 4",
      "ko": "6월 4일까지 가동되어야 한다"
     }
    ],
    "quiz": {
     "sentence": "Several new Patson Metro Transit bus routes will become ------- in September.",
     "a": "ended",
     "b": "operational",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 25,
    "word": "updated",
    "pos": "a.",
    "meaning": "최신의, 갱신된",
    "derivatives": [
     {
      "word": "update",
      "pos": "v.",
      "meaning": "최신 정보로 교체하다, 갱신하다"
     },
     {
      "word": "update",
      "pos": "n.",
      "meaning": "최신 정보, 갱신"
     }
    ],
    "examples": [
     {
      "en": "the updated training schedule",
      "ko": "최신 교육 일정"
     },
     {
      "en": "need to be updated immediately",
      "ko": "즉시 갱신될 필요가 있다"
     }
    ],
    "quiz": {
     "sentence": "The ------- edition of author Stephen Laing's most popular novel will include a foreword by his editor.",
     "a": "numerous",
     "b": "updated",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 26,
    "word": "attached",
    "pos": "a.",
    "meaning": "첨부된",
    "derivatives": [],
    "examples": [
     {
      "en": "The attached file contains ~.",
      "ko": "첨부된 파일은 ~을 포함하고 있다."
     }
    ],
    "quiz": {
     "sentence": "All factory workers should follow the ------- safety guidelines at all times.",
     "a": "attached",
     "b": "direct",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 27,
    "word": "interactive",
    "pos": "a.",
    "meaning": "상호작용하는, 쌍방의",
    "derivatives": [
     {
      "word": "interact",
      "pos": "v.",
      "meaning": "상호작용하다"
     },
     {
      "word": "interaction",
      "pos": "n.",
      "meaning": "상호작용"
     }
    ],
    "examples": [
     {
      "en": "offer interactive features",
      "ko": "상호작용하는 특징들을 제공하다"
     }
    ],
    "quiz": {
     "sentence": "The Fornley Science Museum has many ------- exhibits that visitors of all ages will find interesting.",
     "a": "conclusive",
     "b": "interactive",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 28,
    "word": "overwhelming",
    "pos": "a.",
    "meaning": "압도적인",
    "derivatives": [
     {
      "word": "overwhelmingly",
      "pos": "ad.",
      "meaning": "압도적으로"
     }
    ],
    "examples": [
     {
      "en": "The number of survey responses has been overwhelming.",
      "ko": "설문조사 응답의 수가 압도적이었다."
     }
    ],
    "quiz": {
     "sentence": "Our e-mail service users are always complaining that the volume of spam e-mail they receive in a day has become -------.",
     "a": "reduced",
     "b": "overwhelming",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 29,
    "word": "accomplished",
    "pos": "a.",
    "meaning": "뛰어난",
    "derivatives": [
     {
      "word": "accomplish",
      "pos": "v.",
      "meaning": "성취하다"
     },
     {
      "word": "accomplishment",
      "pos": "n.",
      "meaning": "성취, 업적"
     }
    ],
    "examples": [
     {
      "en": "the most accomplished authors",
      "ko": "가장 뛰어난 작가들"
     }
    ],
    "quiz": {
     "sentence": "This month's concert series will feature many of the world's most ------- musicians.",
     "a": "remaining",
     "b": "accomplished",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 30,
    "word": "designated",
    "pos": "a.",
    "meaning": "지정된",
    "derivatives": [
     {
      "word": "designate",
      "pos": "v.",
      "meaning": "지정하다"
     },
     {
      "word": "designation",
      "pos": "n.",
      "meaning": "지정"
     }
    ],
    "examples": [
     {
      "en": "only in the designated space",
      "ko": "지정된 공간에서만"
     }
    ],
    "quiz": {
     "sentence": "During the repaving process, only ------- zones in the employee parking lot will be available for use.",
     "a": "designated",
     "b": "advanced",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 31,
    "word": "equipped",
    "pos": "a.",
    "meaning": "(시설, 장비 등을) 갖춘",
    "derivatives": [
     {
      "word": "equip",
      "pos": "v.",
      "meaning": "(시설, 장비 등을) 갖추다"
     },
     {
      "word": "equipment",
      "pos": "n.",
      "meaning": "기구, 장비"
     }
    ],
    "examples": [
     {
      "en": "be equipped with",
      "ko": "~을 갖추다"
     }
    ],
    "quiz": {
     "sentence": "All Metz Rental vehicles are fully ------- with a top-of-the-range satellite navigation system.",
     "a": "serviced",
     "b": "equipped",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 32,
    "word": "capable",
    "pos": "a.",
    "meaning": "~ 할 수 있는",
    "derivatives": [
     {
      "word": "capability",
      "pos": "n.",
      "meaning": "능력, 가능성"
     }
    ],
    "examples": [
     {
      "en": "be capable of causing damage",
      "ko": "손상을 일으킬 수 있다"
     }
    ],
    "quiz": {
     "sentence": "Excessive noise is ------- of causing major disruption in office environments, leading to reduced productivity.",
     "a": "capable",
     "b": "potential",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 33,
    "word": "economical",
    "pos": "a.",
    "meaning": "경제적인, 비용이 낮은",
    "derivatives": [
     {
      "word": "economic",
      "pos": "a.",
      "meaning": "경제의"
     },
     {
      "word": "economically",
      "pos": "ad.",
      "meaning": "경제적으로"
     }
    ],
    "examples": [
     {
      "en": "economical manufacturing process",
      "ko": "경제적인 제조 과정"
     }
    ],
    "quiz": {
     "sentence": "Interior designer John Lee is known for his ------- use of floor space.",
     "a": "average",
     "b": "economical",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 34,
    "word": "spacious",
    "pos": "a.",
    "meaning": "넓은",
    "derivatives": [],
    "examples": [
     {
      "en": "offer more spacious meeting rooms",
      "ko": "더 넓은 회의실을 제공하다"
     }
    ],
    "quiz": {
     "sentence": "Subatu Motors is known for producing more ------- automobiles that are suitable for large families.",
     "a": "satisfied",
     "b": "spacious",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 35,
    "word": "fortunate",
    "pos": "a.",
    "meaning": "운이 좋은, 다행인",
    "derivatives": [
     {
      "word": "fortunately",
      "pos": "ad.",
      "meaning": "운 좋게, 다행히"
     }
    ],
    "examples": [
     {
      "en": "be fortunate to do",
      "ko": "~할 만큼 운이 좋다"
     }
    ],
    "quiz": {
     "sentence": "We are ------- to have many gifted local musicians here at Franklin Gas Services's 20th anniversary celebration.",
     "a": "fortunate",
     "b": "obvious",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 36,
    "word": "productive",
    "pos": "a.",
    "meaning": "생산적인",
    "derivatives": [
     {
      "word": "productivity",
      "pos": "n.",
      "meaning": "생산성"
     },
     {
      "word": "productively",
      "pos": "ad.",
      "meaning": "생산적으로"
     }
    ],
    "examples": [
     {
      "en": "find it productive",
      "ko": "생산적인 것을 알게 되다"
     },
     {
      "en": "remain productive",
      "ko": "생산적인 상태를 유지하다"
     }
    ],
    "quiz": {
     "sentence": "Troy Manufacturing determined that Ms. Landry's team is the least ------- and requires further training.",
     "a": "abundant",
     "b": "productive",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 37,
    "word": "growing",
    "pos": "a.",
    "meaning": "(크기, 수, 정도가) 증가하는, 성장하는",
    "derivatives": [
     {
      "word": "grow",
      "pos": "v.",
      "meaning": "(크기, 수, 정도가) 늘다, 성장하다"
     },
     {
      "word": "growth",
      "pos": "n.",
      "meaning": "성장, 발전"
     }
    ],
    "examples": [
     {
      "en": "due to the growing number of",
      "ko": "증가하는 ~의 수로 인해"
     }
    ],
    "quiz": {
     "sentence": "To meet the needs of Ellington Inc.'s ------- workforce, the company has approved the construction of a new staff cafeteria.",
     "a": "growing",
     "b": "concluding",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 38,
    "word": "similar",
    "pos": "a.",
    "meaning": "유사한, 비슷한",
    "derivatives": [
     {
      "word": "similarly",
      "pos": "ad.",
      "meaning": "유사하게"
     },
     {
      "word": "similarity",
      "pos": "n.",
      "meaning": "유사성"
     }
    ],
    "examples": [
     {
      "en": "be similar to other models",
      "ko": "다른 모델들과 유사하다"
     },
     {
      "en": "make a similar observation",
      "ko": "비슷한 의견을 말하다"
     }
    ],
    "quiz": {
     "sentence": "Although the new Zabu 250 laptop looks ------- to other computers, it is the lightest on the market by far.",
     "a": "similar",
     "b": "reflected",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 39,
    "word": "multiple",
    "pos": "a.",
    "meaning": "다수의",
    "derivatives": [],
    "examples": [
     {
      "en": "travel to multiple destinations",
      "ko": "다수의 목적지를 여행하다"
     },
     {
      "en": "multiple parts",
      "ko": "다수의 부품들"
     }
    ],
    "quiz": {
     "sentence": "Morning Sun Airways is offering discounted flights to ------- destinations for families and groups of five or more people.",
     "a": "interested",
     "b": "multiple",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 40,
    "word": "vital",
    "pos": "a.",
    "meaning": "중요한",
    "derivatives": [],
    "examples": [
     {
      "en": "it is vital that",
      "ko": "~하는 것이 중요하다"
     }
    ],
    "quiz": {
     "sentence": "The personnel department plays a ------- role in facilitating communication between higher management and employees.",
     "a": "vital",
     "b": "poised",
     "answer": "A"
    },
    "tip": ""
   }
  ]
 },
 {
  "week": 6,
  "day": 29,
  "part": "Part 5,6",
  "title": "형용사 + 전치사 콜로케이션",
  "words": [
   {
    "no": 1,
    "word": "subject to",
    "pos": "",
    "meaning": "~의 대상인",
    "derivatives": [],
    "examples": [
     {
      "en": "be subject to modification",
      "ko": "수정의 대상이다"
     },
     {
      "en": "be subject to additional charges",
      "ko": "추가 요금의 대상이다"
     }
    ],
    "quiz": {
     "sentence": "All requests for holiday leave are ------- to review and depend largely on staff levels.",
     "a": "entitled",
     "b": "subject",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 2,
    "word": "responsive to",
    "pos": "",
    "meaning": "~에 대해 빠른 반응을 보이는",
    "derivatives": [],
    "examples": [
     {
      "en": "be responsive to customers",
      "ko": "고객들에 대해 빠른 반응을 보이다"
     },
     {
      "en": "be responsive to our needs",
      "ko": "우리의 요구에 대해 빠른 반응을 보이다"
     }
    ],
    "quiz": {
     "sentence": "Since assuming the role of HR manager, Ms. Dias has been very ------- to the needs of our workers.",
     "a": "responsive",
     "b": "reluctant",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 3,
    "word": "identical to",
    "pos": "",
    "meaning": "~와 동일한",
    "derivatives": [],
    "examples": [
     {
      "en": "appear identical to a natural diamond",
      "ko": "천연 다이아몬드와 동일하게 보이다"
     }
    ],
    "quiz": {
     "sentence": "To most listeners, the cover songs performed by the band sounded ------- to the original versions.",
     "a": "identical",
     "b": "suitable",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 4,
    "word": "entitled to",
    "pos": "",
    "meaning": "~의 자격이 있는",
    "derivatives": [],
    "examples": [
     {
      "en": "be entitled to a room upgrade",
      "ko": "객실 업그레이드의 자격이 있다"
     },
     {
      "en": "be entitled to paid vacation",
      "ko": "유급 휴가의 자격이 있다"
     }
    ],
    "quiz": {
     "sentence": "All Rodeo Burger employees are ------- to a one-hour meal break per shift.",
     "a": "allowed",
     "b": "entitled",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 5,
    "word": "adequate for",
    "pos": "",
    "meaning": "~에 충분한, 적당한",
    "derivatives": [],
    "examples": [
     {
      "en": "be adequate for our needs",
      "ko": "우리의 요구에 충분하다"
     },
     {
      "en": "be adequate for our purposes",
      "ko": "우리의 목적에 적당하다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Ratner believes that the ballroom at the Edgemont Hotel is the only venue ------- for our needs.",
     "a": "cooperative",
     "b": "adequate",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 6,
    "word": "relevant to",
    "pos": "",
    "meaning": "~와 관련이 있는",
    "derivatives": [],
    "examples": [
     {
      "en": "be relevant to their jobs",
      "ko": "그들의 직무와 관련이 있다"
     },
     {
      "en": "be relevant to the shipbuilding industry",
      "ko": "조선업과 관련이 있다"
     }
    ],
    "quiz": {
     "sentence": "During your interview, please try to share only the information that is ------- to the position for which you are applying.",
     "a": "acceptable",
     "b": "relevant",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 7,
    "word": "devoted to",
    "pos": "",
    "meaning": "~에 전념하는, 바치는",
    "derivatives": [],
    "examples": [
     {
      "en": "will be devoted to research in the coming year",
      "ko": "다가올 연도에 연구에 전념할 것이다"
     },
     {
      "en": "be devoted to updating its safety policies",
      "ko": "자사의 안전 정책을 업데이트하는 데 전념하다"
     }
    ],
    "quiz": {
     "sentence": "The majority of the advertising budget was ------- to developing a series of television commercials.",
     "a": "devoted",
     "b": "impressed",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 8,
    "word": "eligible for",
    "pos": "",
    "meaning": "~에 대한 자격이 있는",
    "derivatives": [],
    "examples": [
     {
      "en": "be eligible for promotion",
      "ko": "승진에 대한 자격이 있다"
     },
     {
      "en": "be eligible for a raise",
      "ko": "(임금) 인상에 대한 자격이 있다"
     }
    ],
    "quiz": {
     "sentence": "To be ------- for the company's Employee of the Year award, you must not have been absent for five days or more.",
     "a": "comfortable",
     "b": "eligible",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 9,
    "word": "attractive to",
    "pos": "",
    "meaning": "~에게 매력적인",
    "derivatives": [],
    "examples": [
     {
      "en": "attractive to potential customers",
      "ko": "잠재 고객들에게 매력적인"
     }
    ],
    "quiz": {
     "sentence": "The remodeling work should make Wilmington Hotel's main lobby more ------- to its guests.",
     "a": "attractive",
     "b": "thoughtful",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 10,
    "word": "visible to",
    "pos": "",
    "meaning": "~의 눈에 보이는",
    "derivatives": [],
    "examples": [
     {
      "en": "be visible to attendees",
      "ko": "참석자들의 눈에 보이다"
     }
    ],
    "quiz": {
     "sentence": "The display of sunglasses has been set up right beside the cash registers, so it is very ------- to shoppers.",
     "a": "visible",
     "b": "eager",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 11,
    "word": "attentive to",
    "pos": "",
    "meaning": "~에 집중하는, 주의를 기울이는",
    "derivatives": [],
    "examples": [
     {
      "en": "be attentive to the needs of the patients",
      "ko": "환자들의 요구에 집중하다"
     },
     {
      "en": "remain attentive to the long-term goals",
      "ko": "장기적인 목표에 주의를 기울이는 상태이다"
     }
    ],
    "quiz": {
     "sentence": "The restaurant owner demands that the wait staff stay ------- to the needs of our diners.",
     "a": "related",
     "b": "attentive",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 12,
    "word": "equivalent to",
    "pos": "",
    "meaning": "~와 동등한",
    "derivatives": [],
    "examples": [
     {
      "en": "be equivalent to having certification",
      "ko": "증명서를 가지고 있는 것과 동등하다"
     }
    ],
    "quiz": {
     "sentence": "The installation and maintenance of one robot is ------- to paying the annual salaries of five workers.",
     "a": "equivalent",
     "b": "appropriate",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 13,
    "word": "agreeable to",
    "pos": "",
    "meaning": "~에 동의하는",
    "derivatives": [],
    "examples": [
     {
      "en": "appear agreeable to the recent changes",
      "ko": "최근 변화에 동의하는 것처럼 보이다"
     }
    ],
    "quiz": {
     "sentence": "During the public forum, most local residents appeared ------- to the proposed demolition of the abandoned theater.",
     "a": "agreeable",
     "b": "reliable",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 14,
    "word": "vulnerable to",
    "pos": "",
    "meaning": "~에 취약한",
    "derivatives": [],
    "examples": [
     {
      "en": "be vulnerable to changes in the environment",
      "ko": "환경의 변화에 취약하다"
     },
     {
      "en": "be vulnerable to staining",
      "ko": "얼룩에 취약하다"
     }
    ],
    "quiz": {
     "sentence": "Wood that has not been treated with a protective coating is more ------- to damage from moisture.",
     "a": "concealed",
     "b": "vulnerable",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 15,
    "word": "accountable for",
    "pos": "",
    "meaning": "~에 대해 책임을 지는",
    "derivatives": [],
    "examples": [
     {
      "en": "be accountable for any costs",
      "ko": "어떠한 비용에 대해서도 책임을 지다"
     },
     {
      "en": "hold A accountable for their team performances",
      "ko": "팀 성과에 대해 A에게 책임을 지우다"
     }
    ],
    "quiz": {
     "sentence": "When returning undamaged products for a refund, customers will be ------- for any shipping costs.",
     "a": "accountable",
     "b": "manageable",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 16,
    "word": "acceptable to",
    "pos": "",
    "meaning": "~에게 받아들여질 수 있는",
    "derivatives": [],
    "examples": [
     {
      "en": "be acceptable to the client",
      "ko": "의뢰인에게 받아들여질 수 있다"
     }
    ],
    "quiz": {
     "sentence": "Before our interior design team makes changes to the office layout, we need to ensure that the design is ------- to the client.",
     "a": "acceptable",
     "b": "probable",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 17,
    "word": "valid for",
    "pos": "",
    "meaning": "~ 동안 유효한, ~에 대해 유효한",
    "derivatives": [],
    "examples": [
     {
      "en": "be valid for two years",
      "ko": "2년 동안 유효하다"
     },
     {
      "en": "be valid for devices purchased before January 17",
      "ko": "1월 17일 이전에 구매된 기기에 대해 유효하다"
     }
    ],
    "quiz": {
     "sentence": "New members of the country club must apply for a parking permit, which is ------- for six months.",
     "a": "qualified",
     "b": "valid",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 18,
    "word": "interested in",
    "pos": "",
    "meaning": "~에 관심이 있는",
    "derivatives": [],
    "examples": [
     {
      "en": "be interested in receiving the training",
      "ko": "교육을 받는 데 관심이 있다"
     },
     {
      "en": "be interested in investment options",
      "ko": "투자 상품들에 관심이 있다"
     }
    ],
    "quiz": {
     "sentence": "Hotel guests who are ------- in the tour departing at 9 AM should notify the front desk staff.",
     "a": "skilled",
     "b": "interested",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 19,
    "word": "based in",
    "pos": "",
    "meaning": "~에 본사를 둔",
    "derivatives": [],
    "examples": [
     {
      "en": "be based in Australia",
      "ko": "호주에 본사를 두다"
     },
     {
      "en": "be currently based in Dubai",
      "ko": "현재 두바이에 본사를 두다"
     }
    ],
    "quiz": {
     "sentence": "Saltire Airways, ------- in Edinburgh, is offering low-cost flights to Amsterdam and Brussels.",
     "a": "based",
     "b": "stayed",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 20,
    "word": "divided into",
    "pos": "",
    "meaning": "~로 분리된",
    "derivatives": [],
    "examples": [
     {
      "en": "be divided into groups based on their income",
      "ko": "소득에 기반한 그룹으로 분리되다"
     },
     {
      "en": "be divided into three categories",
      "ko": "세 개의 유형으로 분리되다"
     }
    ],
    "quiz": {
     "sentence": "For the role play activity, workshop attendees were ------- into groups based on their field of employment.",
     "a": "divided",
     "b": "evaluated",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 21,
    "word": "assigned to",
    "pos": "",
    "meaning": "~에 할당된, 배정된",
    "derivatives": [],
    "examples": [
     {
      "en": "be assigned to a particular task",
      "ko": "특정 업무에 할당되다"
     },
     {
      "en": "be assigned to the customer service group",
      "ko": "고객 서비스 그룹으로 배정되다"
     }
    ],
    "quiz": {
     "sentence": "At the orientation session, new recruits will be ------- to specific departments.",
     "a": "assigned",
     "b": "influenced",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 22,
    "word": "aware of",
    "pos": "",
    "meaning": "~을 알고 있는",
    "derivatives": [],
    "examples": [
     {
      "en": "be aware of all the factory's operations",
      "ko": "모든 공장의 운영을 알고 있다"
     },
     {
      "en": "make people more aware of the brand",
      "ko": "사람들이 그 브랜드를 더 많이 알게 만들다"
     }
    ],
    "quiz": {
     "sentence": "All assembly line workers are expected to be ------- of the factory's safety regulations.",
     "a": "aware",
     "b": "serious",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 23,
    "word": "skilled at",
    "pos": "",
    "meaning": "~에 능숙한, 숙련된",
    "derivatives": [],
    "examples": [
     {
      "en": "be especially skilled at contract negotiation",
      "ko": "계약 협상에 특히 능숙하다"
     },
     {
      "en": "be skilled at making delicious cookies",
      "ko": "맛있는 쿠키를 만드는 데 숙련되다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Rooney believes that Ms. Appleby is especially ------- at public speaking.",
     "a": "skilled",
     "b": "willing",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 24,
    "word": "dependent on",
    "pos": "",
    "meaning": "~에 의존하고 있는, 달려있는",
    "derivatives": [],
    "examples": [
     {
      "en": "find oneself dependent on one's coworkers",
      "ko": "동료들에 의존하고 있는 자신을 발견하다"
     },
     {
      "en": "be dependent on the inspection results",
      "ko": "검사 결과에 달려있다"
     }
    ],
    "quiz": {
     "sentence": "The decision on whether to make additional modifications to the prototype is ------- on customer feedback.",
     "a": "dependent",
     "b": "supportive",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 25,
    "word": "available for",
    "pos": "",
    "meaning": "~을 위한 시간이 있는, 이용 가능한",
    "derivatives": [],
    "examples": [
     {
      "en": "be available for meetings up until 11 AM",
      "ko": "오전 11시까지 회의를 위한 시간이 있다"
     },
     {
      "en": "be available for rental",
      "ko": "대여로 이용 가능하다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Heenan, the new dentist at Dewar Dental Clinic, will be ------- for appointments from 9 AM on Monday.",
     "a": "grateful",
     "b": "available",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 26,
    "word": "capable of",
    "pos": "",
    "meaning": "~을 할 수 있는",
    "derivatives": [],
    "examples": [
     {
      "en": "be capable of designing skyscrapers",
      "ko": "고층 건물들을 디자인할 수 있다"
     },
     {
      "en": "be capable of improving an organization's efficiency",
      "ko": "조직의 효율을 향상시킬 수 있다"
     }
    ],
    "quiz": {
     "sentence": "Chefs at A1 Restaurant are ------- of customizing dishes to suit any diner's preferences.",
     "a": "capable",
     "b": "knowledgeable",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 27,
    "word": "beneficial to",
    "pos": "",
    "meaning": "~에 이로운",
    "derivatives": [],
    "examples": [
     {
      "en": "be beneficial to the community",
      "ko": "지역사회에 이롭다"
     },
     {
      "en": "be beneficial to both companies",
      "ko": "양사에 모두 이롭다"
     }
    ],
    "quiz": {
     "sentence": "Although the cost of constructing the entertainment complex is high, city council members agreed that the project will be ------- to the economy.",
     "a": "financial",
     "b": "beneficial",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 28,
    "word": "applicable toward",
    "pos": "",
    "meaning": "~에 적용될 수 있는",
    "derivatives": [],
    "examples": [
     {
      "en": "be applicable toward the purchase of new freezers",
      "ko": "새로운 냉동기 구매에 적용될 수 있다"
     }
    ],
    "quiz": {
     "sentence": "The $50 coupon is ------- toward the membership renewal fee at Hurley Gym.",
     "a": "diverted",
     "b": "applicable",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 29,
    "word": "familiar with",
    "pos": "",
    "meaning": "~에 익숙한",
    "derivatives": [],
    "examples": [
     {
      "en": "analysts familiar with the housing market",
      "ko": "주택 시장에 익숙한 분석가들"
     },
     {
      "en": "be not familiar with the new software program",
      "ko": "새로운 소프트웨어 프로그램에 익숙하지 않다"
     }
    ],
    "quiz": {
     "sentence": "Many environmental scientists ------- with the Wolong region predict that temperatures will continue to rise over the coming months.",
     "a": "recognizable",
     "b": "familiar",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 30,
    "word": "skeptical of",
    "pos": "",
    "meaning": "~에 회의적인",
    "derivatives": [],
    "examples": [
     {
      "en": "be skeptical of the marketing campaign",
      "ko": "마케팅 캠페인에 회의적이다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Tarrant was ------- of reducing the overtime rate paid to the company's employees, believing that many workers would resign.",
     "a": "skeptical",
     "b": "capable",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 31,
    "word": "exempt from",
    "pos": "",
    "meaning": "~에서 면제된",
    "derivatives": [],
    "examples": [
     {
      "en": "be exempt from turning in receipts",
      "ko": "영수증을 제출하는 것에서 면제되다"
     }
    ],
    "quiz": {
     "sentence": "To check whether your vehicle is ------- from the parking fee, please refer to the information board.",
     "a": "replaced",
     "b": "exempt",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 32,
    "word": "similar to",
    "pos": "",
    "meaning": "~와 유사한",
    "derivatives": [],
    "examples": [
     {
      "en": "be similar to other models",
      "ko": "다른 모델들과 유사하다"
     },
     {
      "en": "be similar to the style of existing structures",
      "ko": "현존하는 구조물의 스타일과 유사하다"
     }
    ],
    "quiz": {
     "sentence": "Although the latest edition of the travel guide is ------- to previous versions, it does include an improved map of the city.",
     "a": "similar",
     "b": "likable",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 33,
    "word": "qualified for",
    "pos": "",
    "meaning": "~에 대한 자격을 갖춘",
    "derivatives": [],
    "examples": [
     {
      "en": "be most qualified for the position",
      "ko": "그 직책에 대해 가장 나은 자격을 갖추다"
     },
     {
      "en": "be well qualified for the managerial role",
      "ko": "관리자 직책에 대해 충분한 자격을 갖추다"
     }
    ],
    "quiz": {
     "sentence": "Ms. Chung will conduct a series of interviews this week before selecting the candidate best ------- for the role.",
     "a": "qualified",
     "b": "employed",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 34,
    "word": "compatible with",
    "pos": "",
    "meaning": "~와 호환되는, 어울리는",
    "derivatives": [],
    "examples": [
     {
      "en": "be compatible with most television brands",
      "ko": "대부분의 TV 브랜드와 호환되다"
     },
     {
      "en": "be compatible with our needs",
      "ko": "우리의 요구와 어울리다"
     }
    ],
    "quiz": {
     "sentence": "Your new Hive home heating hub is ------- with all Hive radiator smart valves.",
     "a": "compatible",
     "b": "reflective",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 35,
    "word": "enthusiastic about",
    "pos": "",
    "meaning": "~에 대해 열정적인",
    "derivatives": [],
    "examples": [
     {
      "en": "be enthusiastic about the advertising campaign",
      "ko": "광고 캠페인에 대해 열정적이다"
     }
    ],
    "quiz": {
     "sentence": "The new documentary filmed by Edmond Atherton will particularly appeal to those who are ------- about travel and exploration.",
     "a": "enthusiastic",
     "b": "pleasant",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 36,
    "word": "appreciative of",
    "pos": "",
    "meaning": "~에 대해 감사하는",
    "derivatives": [],
    "examples": [
     {
      "en": "seem appreciative of our efforts",
      "ko": "우리의 노력에 감사하는 것처럼 보인다"
     }
    ],
    "quiz": {
     "sentence": "Zanzibar Beach Resort is ------- of your feedback, and we look forward to welcoming you again on your next visit.",
     "a": "decisive",
     "b": "appreciative",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 37,
    "word": "superior to",
    "pos": "",
    "meaning": "~보다 우수한",
    "derivatives": [],
    "examples": [
     {
      "en": "superior to other leading brands",
      "ko": "다른 선도적인 브랜드들보다 우수한"
     }
    ],
    "quiz": {
     "sentence": "Extra-long battery life and an extremely powerful operating system make the Zio 3 mobile phone ------- to other leading models.",
     "a": "advanced",
     "b": "superior",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 38,
    "word": "credited with",
    "pos": "",
    "meaning": "~에 대해 (공로를) 인정받은",
    "derivatives": [],
    "examples": [
     {
      "en": "be credited with the restoration of the monument",
      "ko": "기념비의 복원에 대해 공로를 인정받다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Rollins is ------- with increasing the firm's annual earnings by 20 percent since assuming the role of CFO last year.",
     "a": "credited",
     "b": "agreed",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 39,
    "word": "selective about",
    "pos": "",
    "meaning": "~에 대해 까다로운",
    "derivatives": [],
    "examples": [
     {
      "en": "be selective about which article they publish",
      "ko": "어떤 기사를 출간할지에 대해 까다롭다"
     }
    ],
    "quiz": {
     "sentence": "The owners of Ealing Modern Art Gallery are ------- about which artworks they exhibit.",
     "a": "prominent",
     "b": "selective",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 40,
    "word": "equipped with",
    "pos": "",
    "meaning": "~을 갖추고 있는",
    "derivatives": [],
    "examples": [
     {
      "en": "be equipped with many expensive devices",
      "ko": "많은 값비싼 기기들을 갖추고 있다"
     }
    ],
    "quiz": {
     "sentence": "All of the chalets at Zell Ski Resort are ------- with a hot tub and a barbecue.",
     "a": "conducted",
     "b": "equipped",
     "answer": "B"
    },
    "tip": ""
   }
  ]
 },
 {
  "week": 6,
  "day": 30,
  "part": "Part 7",
  "title": "독해가 쉬워지는 어휘 ②",
  "words": [
   {
    "no": 1,
    "word": "in business",
    "pos": "",
    "meaning": "영업 중인",
    "derivatives": [],
    "examples": [
     {
      "en": "After 20 years in business, our store is closing, and we'd like to express our gratitude through our closing sale.",
      "ko": "20년간 영업한 끝에 저희 매장은 폐점할 예정이며, 폐점 세일 행사를 통해 저희의 감사한 마음을 표하고자 합니다."
     }
    ],
    "quiz": null,
    "tip": "기출 Paraphrasing\nclose (문을 닫다, 폐업하다) → no longer in business (더 이상 영업하지 않다), go out of business (폐업하다)"
   },
   {
    "no": 2,
    "word": "cater to",
    "pos": "v.",
    "meaning": "~의 마음에 들다, ~을 만족시키다",
    "derivatives": [],
    "examples": [
     {
      "en": "The resort offers a variety of activities, catering to guests of all ages and interests.",
      "ko": "그 리조트는 다양한 활동을 제공하여 모든 연령대와 관심사의 고객들을 만족시키고 있습니다."
     }
    ],
    "quiz": null,
    "tip": "기출 Paraphrasing\ncater to → appeal to (~의 마음에 들다)"
   },
   {
    "no": 3,
    "word": "boast",
    "pos": "v.",
    "meaning": "뽐내다, 자랑하다, 자랑할 만한 ~을 갖고 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "The hotel boasts breathtaking ocean views from every room, offering guests a remarkable experience.",
      "ko": "그 호텔은 모든 객실에서 숨막히게 아름다운 바다 전망을 자랑하며, 고객들에게 놀라운 경험을 선사합니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 4,
    "word": "culinary",
    "pos": "a.",
    "meaning": "요리의",
    "derivatives": [],
    "examples": [
     {
      "en": "To thrive in the competitive culinary market, businesses need to stay updated with the latest food trends and adapt their menus accordingly.",
      "ko": "경쟁적인 요리 시장에서 번창하기 위해서, 사업체들은 최신 음식 트렌드를 계속 최신화하고 그에 따라 메뉴를 조정할 필요가 있습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 5,
    "word": "disposable",
    "pos": "a.",
    "meaning": "일회용의",
    "derivatives": [],
    "examples": [
     {
      "en": "Our catering service specializes in eco-friendly events and offers disposable utensils made from biodegradable materials.",
      "ko": "저희 케이터링 서비스는 환경친화적인 행사를 전문으로 하고 있으며, 생분해성 물질로 만들어진 일회용품들을 제공합니다."
     }
    ],
    "quiz": null,
    "tip": "기출 Paraphrasing\ndispose of ~을 처리하다, 없애다"
   },
   {
    "no": 6,
    "word": "customized",
    "pos": "a.",
    "meaning": "주문 제작의, 맞춤의",
    "derivatives": [
     {
      "word": "customize",
      "pos": "v.",
      "meaning": "~을 주문 제작하다"
     },
     {
      "word": "custom",
      "pos": "a.",
      "meaning": "주문 제작한"
     }
    ],
    "examples": [
     {
      "en": "The fitness app provides users with customized workout routines based on their fitness levels and goals.",
      "ko": "이 피트니스 앱은 사용자의 체력 수준과 목표에 따라 맞춤형 운동 루틴을 제공합니다."
     }
    ],
    "quiz": null,
    "tip": "기출 Paraphrasing\ncustomized → personalized (개인의 필요에 맞춘)"
   },
   {
    "no": 7,
    "word": "proof of purchase",
    "pos": "",
    "meaning": "구매 증명(서)",
    "derivatives": [],
    "examples": [
     {
      "en": "Our store's return policy mandates that all items returned must be accompanied by a proof of purchase.",
      "ko": "저희 매장의 반품 규정은 반품되는 모든 상품에 반드시 구매 증명서를 첨부하는 것을 의무화하고 있습니다."
     }
    ],
    "quiz": null,
    "tip": "기출 Paraphrasing\nproof of purchase → receipt (영수증)"
   },
   {
    "no": 8,
    "word": "retailer",
    "pos": "n.",
    "meaning": "소매업자, 소매상, 소매업",
    "derivatives": [
     {
      "word": "retail",
      "pos": "n.",
      "meaning": "소매(업)"
     }
    ],
    "examples": [
     {
      "en": "The retailer's summer sale attracted a large crowd of shoppers looking for discounts.",
      "ko": "그 소매점의 여름 세일은 할인을 원하는 많은 쇼핑객들을 끌어들였습니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\nwholesaler 도매업자\ndistributor 유통업자, 판매대리점\nsupplier / provider 공급업자\nvendor 판매업자"
   },
   {
    "no": 9,
    "word": "dietary preference",
    "pos": "",
    "meaning": "식단 선호 사항",
    "derivatives": [],
    "examples": [
     {
      "en": "We offer a diverse menu that caters to various needs. Please let us know if you have any specific dietary preferences or requirements.",
      "ko": "저희는 여러 필요 사항을 만족시키는 다양한 메뉴를 제공하고 있습니다. 특정 식사 선호 사항이나 요청 사항이 있으시면 말씀해 주세요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 10,
    "word": "worth + 명사",
    "pos": "",
    "meaning": "~을 들일 만한 가치가 있는",
    "derivatives": [],
    "examples": [
     {
      "en": "Many customers find that the premium features of this smartphone make it worth the money spent.",
      "ko": "많은 고객들은 이 스마트폰의 프리미엄 기능들이 돈을 들일 가치가 있다고 생각합니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 11,
    "word": "save + 금액",
    "pos": "",
    "meaning": "(~만큼) 아끼다, 절약하다",
    "derivatives": [],
    "examples": [
     {
      "en": "Upgrade your subscription plan now and save $50 on your annual membership fee.",
      "ko": "지금 구독 요금제를 업그레이드하고 연회비를 50달러 절약하세요."
     }
    ],
    "quiz": null,
    "tip": "기출 Paraphrasing\nsave $50 → a discount (할인)"
   },
   {
    "no": 12,
    "word": "query",
    "pos": "n.",
    "meaning": "질문, 문의 사항",
    "derivatives": [],
    "examples": [
     {
      "en": "The tech support team is available to respond to all queries concerning software installation and troubleshooting.",
      "ko": "기술 지원 팀은 소프트웨어 설치 및 문제 해결과 관련된 모든 문의에 응답할 수 있습니다."
     }
    ],
    "quiz": null,
    "tip": "기출 Paraphrasing\nquery → question, inquiry (질문, 의문 사항)"
   },
   {
    "no": 13,
    "word": "drawing",
    "pos": "n.",
    "meaning": "제비뽑기, 추첨",
    "derivatives": [],
    "examples": [
     {
      "en": "The grand opening event concluded with the drawing of lucky numbers for prizes.",
      "ko": "그 개점 행사는 경품을 주는 행운의 숫자 추첨으로 끝났습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 14,
    "word": "payment arrangements",
    "pos": "",
    "meaning": "결제 방식, 지불 약정",
    "derivatives": [],
    "examples": [
     {
      "en": "We offer flexible payment arrangements to accommodate various budget constraints and financial situations.",
      "ko": "저희는 다양한 예산 제약이나 재정 상황에 맞출 수 있는 유연한 지불 방법을 제공합니다."
     }
    ],
    "quiz": null,
    "tip": "기출 Paraphrasing\npayment arrangements → payment plans"
   },
   {
    "no": 15,
    "word": "back order",
    "pos": "",
    "meaning": "밀린 주문, 이월 주문",
    "derivatives": [],
    "examples": [
     {
      "en": "The tool you were hoping to purchase is on back order because of a temporary halt in production.",
      "ko": "귀하께서 구매하고 싶어하셨던 공구가 일시적인 생산 중단으로 인해 주문이 밀려 있습니다."
     }
    ],
    "quiz": null,
    "tip": "기출 Paraphrasing\nback order → delay (지연)"
   },
   {
    "no": 16,
    "word": "produce",
    "pos": "n.",
    "meaning": "농산물",
    "derivatives": [],
    "examples": [
     {
      "en": "The grocery store offers a continuous supply of fresh and organic produce throughout the year.",
      "ko": "그 식료품점은 연중 내내 신선하고 유기농으로 재배된 농산물을 지속적으로 공급합니다."
     }
    ],
    "quiz": null,
    "tip": "produce가 동사로 쓰일 경우 '~을 생산하다'라는 뜻이며, 이때의 명사형은 production(생산)입니다."
   },
   {
    "no": 17,
    "word": "act up",
    "pos": "",
    "meaning": "말을 안 듣다, 제 기능을 못하다",
    "derivatives": [],
    "examples": [
     {
      "en": "The old washing machine has been acting up lately, making strange noises during the spin cycle.",
      "ko": "그 오래된 세탁기는 최근 제 기능을 못하고 있는데, 회전하는 동안 이상한 소리를 냅니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 18,
    "word": "customer base",
    "pos": "",
    "meaning": "고객층, 고객 기반",
    "derivatives": [],
    "examples": [
     {
      "en": "By introducing a user-friendly mobile app, the bank aims to expand its customer base across a younger demographic.",
      "ko": "그 은행은 사용자 친화적인 모바일 앱을 도입함으로써 젊은 인구층에 걸쳐 고객 기반을 확대하는 것을 목표로 하고 있습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 19,
    "word": "compact",
    "pos": "a.",
    "meaning": "소형의",
    "derivatives": [],
    "examples": [
     {
      "en": "Due to their compact design, these new laptops are perfect for travelers who need a lightweight yet powerful device.",
      "ko": "소형의 디자인으로 인해, 이 새로운 노트북들은 가벼우면서도 강력한 장치를 필요로 하는 여행객들에게 안성맞춤입니다."
     }
    ],
    "quiz": null,
    "tip": "제품의 특징을 나타내는 빈출 형용사\ndurable 튼튼한\nlightweight 가벼운"
   },
   {
    "no": 20,
    "word": "portable",
    "pos": "a.",
    "meaning": "휴대용의",
    "derivatives": [],
    "examples": [
     {
      "en": "This compact camera is not only portable but also features advanced settings for professional-quality shots.",
      "ko": "이 소형 카메라는 휴대용일 뿐만 아니라 전문가 수준의 촬영을 위한 고급 설정 기능도 갖추고 있습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 21,
    "word": "synthetic",
    "pos": "a.",
    "meaning": "합성의",
    "derivatives": [
     {
      "word": "synthesize",
      "pos": "v.",
      "meaning": "합성하다"
     }
    ],
    "examples": [
     {
      "en": "The synthetic material developed by the research team offers a solution for lightweight, durable, and eco-friendly packaging.",
      "ko": "연구팀이 개발한 합성 소재는 가볍고 내구성이 뛰어나며 친환경적인 포장에 대한 해결책을 제공합니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 22,
    "word": "existing",
    "pos": "a.",
    "meaning": "기존의",
    "derivatives": [],
    "examples": [
     {
      "en": "We have exciting promotions and exclusive offers available for both new and existing customers.",
      "ko": "저희는 신규 고객과 기존 고객 모두에게 흥미로운 프로모션과 독점 혜택을 제공합니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 23,
    "word": "violation",
    "pos": "n.",
    "meaning": "위반",
    "derivatives": [],
    "examples": [
     {
      "en": "We regret to inform you that your restaurant was in violation of the city's Health and Sanitation Code.",
      "ko": "귀하의 레스토랑이 시의 보건 및 위생 규정을 위반했다는 사실을 알려드리게 되어 유감입니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\nin violation of ~을 위반하여"
   },
   {
    "no": 24,
    "word": "reduced",
    "pos": "a.",
    "meaning": "할인된, 줄어든",
    "derivatives": [
     {
      "word": "reduce",
      "pos": "v.",
      "meaning": "~을 줄이다"
     },
     {
      "word": "reduction",
      "pos": "n.",
      "meaning": "축소, 삭감, 감소"
     }
    ],
    "examples": [
     {
      "en": "Tickets to the concert will be available at the door, or you can purchase them in advance at reduced rates.",
      "ko": "콘서트 티켓은 문 앞에서 구매 가능하며, 할인된 가격으로 미리 구매하실 수도 있습니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\nreduction in price 가격 인하"
   },
   {
    "no": 25,
    "word": "urge",
    "pos": "v.",
    "meaning": "~에게 권고하다, 촉구하다 / n. 충동",
    "derivatives": [],
    "examples": [
     {
      "en": "The hotel urged customers to provide feedback on their recent stay to help improve their services.",
      "ko": "호텔 측은 서비스를 개선하기 위해 고객들에게 최근 숙박에 대한 피드백을 제공할 것을 촉구했습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 26,
    "word": "component",
    "pos": "n.",
    "meaning": "구성품, 구성 요소",
    "derivatives": [],
    "examples": [
     {
      "en": "To receive a full refund, the product must be returned with all its components and in its original packaging.",
      "ko": "전액 환불을 받기 위해서는 제품이 모든 구성품들과 함께 원래의 포장 상태로 반환되어야 합니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 27,
    "word": "fall short of",
    "pos": "",
    "meaning": "~에 못 미치다",
    "derivatives": [],
    "examples": [
     {
      "en": "The restaurant's new menu items fell short of customers' expectations, leading to a decline in customer satisfaction.",
      "ko": "식당의 신메뉴가 손님들의 기대에 미치지 못해 손님 만족도가 떨어졌습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 28,
    "word": "upon request",
    "pos": "",
    "meaning": "요청 시에",
    "derivatives": [],
    "examples": [
     {
      "en": "Complimentary gift wrapping is offered upon request for all purchases.",
      "ko": "모든 구매에 대해 요청 시에 무료 선물 포장이 제공됩니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 29,
    "word": "attend to",
    "pos": "",
    "meaning": "~을 처리하다",
    "derivatives": [],
    "examples": [
     {
      "en": "The hotel's concierge will attend to special requests you may have during your stay.",
      "ko": "호텔 컨시어지가 귀하의 투숙 기간 동안 귀하의 특별 요청 사항을 처리해 드릴 것입니다."
     }
    ],
    "quiz": null,
    "tip": "타동사 attend는 '~에 참석하다'라는 뜻입니다."
   },
   {
    "no": 30,
    "word": "showcase",
    "pos": "v.",
    "meaning": "~을 선보이다, 소개하다 / n. 공개 행사",
    "derivatives": [],
    "examples": [
     {
      "en": "The upcoming culinary event will showcase a diverse array of dishes from around the world.",
      "ko": "다가오는 요리 행사는 전 세계의 다양한 요리들을 선보일 것입니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 31,
    "word": "preview",
    "pos": "n.",
    "meaning": "시사회",
    "derivatives": [],
    "examples": [
     {
      "en": "The designer showcased her new collection at the fashion show's exclusive preview.",
      "ko": "그 디자이너는 패션쇼의 단독 시사회에서 자신의 새로운 컬렉션을 선보였습니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\npremiere 개봉, 초연, 첫 공연"
   },
   {
    "no": 32,
    "word": "assembly",
    "pos": "n.",
    "meaning": "조립",
    "derivatives": [
     {
      "word": "assemble",
      "pos": "v.",
      "meaning": "~을 조립하다"
     }
    ],
    "examples": [
     {
      "en": "If you find the assembly instructions to be unclear, don't hesitate to reach out to our customer support team for guidance.",
      "ko": "조립 설명서가 명확하지 않다고 생각하시면, 주저 말고 저희 고객 지원팀에 연락하셔서 안내를 받으시기 바랍니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 33,
    "word": "endorsement",
    "pos": "n.",
    "meaning": "유명인이 광고에 나와서 하는 상품 홍보",
    "derivatives": [
     {
      "word": "endorse",
      "pos": "v.",
      "meaning": "~을 지지하다, 보증하다"
     }
    ],
    "examples": [
     {
      "en": "The skincare brand gained popularity thanks to a celebrity endorsement by a famous actress who raved about their products.",
      "ko": "그 스킨케어 브랜드는 자사 제품에 대해 극찬한 유명 여배우의 상품 홍보 덕분에 인기를 얻었습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 34,
    "word": "label A with B",
    "pos": "",
    "meaning": "A에 B를 표시한 라벨을 붙이다",
    "derivatives": [],
    "examples": [
     {
      "en": "The curator labeled each piece of artwork with the artist's name, title, and year of creation to provide context for visitors.",
      "ko": "그 큐레이터는 방문객들에게 맥락을 제공하기 위해 각각의 작품에 작가의 이름, 제목, 그리고 창작 연도를 표시한 라벨을 붙였습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 35,
    "word": "testimonial",
    "pos": "n.",
    "meaning": "추천의 글, 증명서",
    "derivatives": [],
    "examples": [
     {
      "en": "The website is filled with positive testimonials from clients who have benefited from our consulting service.",
      "ko": "웹사이트는 저희 컨설팅 서비스의 혜택을 받은 고객들의 긍정적인 추천 글로 가득 차 있습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 36,
    "word": "poll",
    "pos": "n.",
    "meaning": "여론 조사, 설문조사",
    "derivatives": [],
    "examples": [
     {
      "en": "We conducted a poll to gather opinions on the proposed changes to the homepage layout.",
      "ko": "저희는 홈페이지 레이아웃 변경안에 대한 의견을 수렴하기 위해 여론 조사를 실시하였습니다."
     }
    ],
    "quiz": null,
    "tip": "기출 Paraphrasing\npoll → survey\n관련 기출\nconduct a poll[survey] 설문 조사를 실시하다"
   },
   {
    "no": 37,
    "word": "deduct",
    "pos": "v.",
    "meaning": "~을 공제하다",
    "derivatives": [],
    "examples": [
     {
      "en": "If you choose to return the product, please note that the shipping charge will be deducted from your refund.",
      "ko": "반품하실 경우 배송비는 환불금액에서 공제된다는 점을 참고 부탁드립니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 38,
    "word": "energy-efficient",
    "pos": "a.",
    "meaning": "에너지 효율이 좋은",
    "derivatives": [],
    "examples": [
     {
      "en": "The new appliances are designed to be highly energy-efficient, reducing your electricity bills.",
      "ko": "새 가전제품은 에너지 효율이 높도록 설계되어 있어, 귀하의 전기료를 절감시켜 줍니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 39,
    "word": "household",
    "pos": "a.",
    "meaning": "가정용의",
    "derivatives": [],
    "examples": [
     {
      "en": "All Bay View apartments are equipped with energy-efficient household appliances.",
      "ko": "모든 베이 뷰 아파트에는 에너지 효율이 높은 가전제품이 설치되어 있습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 40,
    "word": "gain recognition",
    "pos": "",
    "meaning": "명성을 얻다",
    "derivatives": [],
    "examples": [
     {
      "en": "The fitness app has gained recognition for its user-friendly interface and accurate health data tracking.",
      "ko": "그 피트니스 앱은 사용자 친화적인 인터페이스와 정확한 건강 데이터 추적으로 명성을 얻었습니다."
     }
    ],
    "quiz": null,
    "tip": "기출 Paraphrasing\ngain recognition → be recognized (인정받다)"
   }
  ]
 },
 {
  "week": 7,
  "day": 31,
  "part": "Part 3,4",
  "title": "기출 패러프레이징 ②",
  "words": [
   {
    "no": 1,
    "word": "book",
    "pos": "",
    "meaning": "~을 예약하다",
    "derivatives": [],
    "examples": [
     {
      "en": "M: I'd like to reserve two tickets for tonight's city bus tour which departs at 7 PM from the main square.",
      "ko": "중앙 광장에서 오후 7시에 출발하는 오늘 밤 시내버스 투어 표 두 장을 예약하고 싶습니다."
     },
     {
      "en": "Q. 무엇을 하고자 하는가? → Book a tour",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 2,
    "word": "missing",
    "pos": "",
    "meaning": "행방을 모르는",
    "derivatives": [],
    "examples": [
     {
      "en": "W: When we converted the client files to digital versions last week, the most recent entries seem to have been lost.",
      "ko": "지난주에 고객 기록을 디지털 버전으로 변환했을 때, 가장 최근에 입력한 항목들이 없어진 것 같습니다."
     },
     {
      "en": "Q. 무엇에 대해 얘기하는가? → Missing information",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 3,
    "word": "straightforward",
    "pos": "",
    "meaning": "간단한, 쉬운",
    "derivatives": [],
    "examples": [
     {
      "en": "M: His pasta sauce recipe is quite straightforward. Just follow the steps, and you'll have a delicious sauce in no time.",
      "ko": "그의 파스타 소스 레시피는 아주 간단합니다. 순서대로 따라가기만 하면 금방 맛있는 소스가 나옵니다."
     },
     {
      "en": "Q. 레시피에 대해 뭐라고 하는가? → It is easy to follow.",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 4,
    "word": "consumer",
    "pos": "",
    "meaning": "소비자",
    "derivatives": [],
    "examples": [
     {
      "en": "W: The biggest trend has been about reducing sugar content. According to a recent customer survey, more people want healthier products, but the same great taste.",
      "ko": "가장 큰 트렌드는 설탕 함량을 줄이는 것이었습니다. 최근 소비자 조사에 따르면, 더 많은 사람들이 더 건강한, 그러나 똑같이 좋은 맛의 제품을 원합니다."
     },
     {
      "en": "Q. 무엇에 대해 얘기하고 있는가? → A change in consumer preferences",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 5,
    "word": "vendor",
    "pos": "",
    "meaning": "판매자",
    "derivatives": [],
    "examples": [
     {
      "en": "M: The vendor that we usually order fresh eggs from has increased their prices. We should consider finding another one.",
      "ko": "우리가 신선한 계란을 주로 주문하는 판매자가 가격을 올렸습니다. 다른 곳을 찾는 걸 고려해 봐야겠어요."
     },
     {
      "en": "Q. 무엇을 제안하는가? → Hiring a new supplier",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 6,
    "word": "replace",
    "pos": "",
    "meaning": "~을 대체하다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Tonight's chef special is salmon steak, but unfortunately, we've run out of salmon, so we're substituting bass for the fish-of-the-day.",
      "ko": "오늘 밤의 셰프 특선은 연어 스테이크입니다만, 아쉽게도 연어가 다 떨어져서 오늘의 생선을 배스로 대체하고 있습니다."
     },
     {
      "en": "Q. 무엇을 발표하는가? → A food item has been replaced.",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": "관련 기출\nsubstitute A for B  B를 A로 대체하다, B 대신 A를 사용하다"
   },
   {
    "no": 7,
    "word": "update",
    "pos": "",
    "meaning": "~을 최신 버전으로 바꾸다",
    "derivatives": [],
    "examples": [
     {
      "en": "M: I'll add the new project deadline to the calendar to ensure that we stay on track.",
      "ko": "새로운 프로젝트 마감일을 달력에 추가해서 저희가 순조롭게 진행할 수 있도록 하겠습니다."
     },
     {
      "en": "Q. 무엇을 하겠다고 하는가? → Update a calendar",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 8,
    "word": "donate",
    "pos": "",
    "meaning": "~을 기부하다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: All the proceeds from the fundraiser will go toward Sunshine Children's Hospital.",
      "ko": "모금 행사의 모든 수익금은 썬샤인 어린이 병원으로 가게 될 것입니다."
     },
     {
      "en": "Q. 수익금은 어떻게 될 것인가? → They will be donated to a hospital.",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 9,
    "word": "distribute",
    "pos": "",
    "meaning": "~을 배부하다, 나눠주다",
    "derivatives": [],
    "examples": [
     {
      "en": "M: I'm organizing a charity concert at the park, and we're looking for volunteers to help give out flyers. Would you be interested in joining us?",
      "ko": "공원에서 자선 콘서트를 준비하고 있는데, 전단지를 나눠줄 자원봉사자를 찾고 있습니다. 함께 하실 생각이 있으신가요?"
     },
     {
      "en": "Q. 지원자들은 무엇을 하는가? → Distribute promotional materials",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": "상위어 Paraphrasing\nbrochure, pamphlet, booklet, flyer, leaflet → promotional materials (홍보물)\nbooks, magazine, newspaper → reading materials (읽을 거리)"
   },
   {
    "no": 10,
    "word": "discount",
    "pos": "",
    "meaning": "할인",
    "derivatives": [],
    "examples": [
     {
      "en": "W: I saw online that you're running a special deal for new members: 30 percent off the first month's subscription. Can I sign up for that?",
      "ko": "온라인에서 보니까 신규 가입자를 위해 첫 달 구독료를 30% 할인해 주는 특가 상품을 제공 중이시네요. 가입할 수 있을까요?"
     },
     {
      "en": "Q. 무엇에 대해 문의하는가? → A subscription discount",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 11,
    "word": "locate",
    "pos": "",
    "meaning": "~의 위치를 찾아내다",
    "derivatives": [],
    "examples": [
     {
      "en": "M: Have you heard about this new app called EasyPark? It helps you find parking spaces more easily.",
      "ko": "이지파크라는 이 새로운 앱에 대해 들어본 적이 있나요? 이 앱은 주차 공간의 위치를 더 쉽게 찾을 수 있도록 도와줍니다."
     },
     {
      "en": "Q. 앱이 무엇을 하는 데 도움이 되는가? → Locate available parking spaces",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 12,
    "word": "initiative",
    "pos": "",
    "meaning": "계획",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Next month, we're launching a new initiative within our company. It focuses on implementing environmentally friendly practices across all our operations.",
      "ko": "다음 달에 회사 내에서 새로운 계획을 시작합니다. 그것은 전 운영에 걸쳐 환경 친화적인 관행을 실시하는 데 중점을 두고 있습니다."
     },
     {
      "en": "Q. 다음 달에 무엇이 시작되는가? → An eco-friendly plan",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 13,
    "word": "manufacturing facility",
    "pos": "",
    "meaning": "제조 시설",
    "derivatives": [],
    "examples": [
     {
      "en": "M: I'm going to their manufacturing facility this afternoon to inspect the quality control processes and address any production issues.",
      "ko": "오늘 오후에 제조 시설에 가서 품질 관리 과정을 검사하고 생산 관련 문제를 처리할 것입니다."
     },
     {
      "en": "Q. 오후에 무엇을 할 것인가? → Visit a factory",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 14,
    "word": "fill out",
    "pos": "",
    "meaning": "~을 작성하다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: I'll e-mail the link to the online registration form. If you'd like to sign up for our membership, please fill out the form by the end of this week.",
      "ko": "온라인 등록 양식 링크를 이메일로 보내드리겠습니다. 회원 가입을 원하시면 이번 주 말까지 양식을 작성해주세요."
     },
     {
      "en": "Q. 등록하려면 어떻게 하는가? → Complete a form",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 15,
    "word": "feedback",
    "pos": "",
    "meaning": "피드백, 의견",
    "derivatives": [],
    "examples": [
     {
      "en": "M: Please share your opinions with us so we can improve the design for the cover page.",
      "ko": "표지 디자인을 개선할 수 있도록 의견을 공유해 주시기 바랍니다."
     },
     {
      "en": "Q. 무엇을 요청하는가? → Some feedback",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 16,
    "word": "authorize",
    "pos": "",
    "meaning": "~을 승인하다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: As supervisor, I'll approve your travel expense claims once you submit the necessary documentation and receipts.",
      "ko": "관리자로서, 필요한 서류와 영수증을 제출하시면 출장 경비 청구를 승인해드리겠습니다."
     },
     {
      "en": "Q. 무엇을 해주겠다고 하는가? → Authorize some reimbursements",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 17,
    "word": "manager",
    "pos": "",
    "meaning": "매니저, 관리자",
    "derivatives": [],
    "examples": [
     {
      "en": "M: Let me call my manager. She'll have to authorize the transaction so I can process the refund.",
      "ko": "저희 매니저님께 전화해볼게요. 제가 환불을 진행해 드릴 수 있으려면 매니저님께서 처리를 승인해주셔야 해요."
     },
     {
      "en": "Q. 무엇을 할 것인가? → Call a supervisor",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 18,
    "word": "government official",
    "pos": "",
    "meaning": "정부 관리",
    "derivatives": [],
    "examples": [
     {
      "en": "W: We plan to collaborate with the mayor and city council to increase the number of bicycle lanes throughout the city streets.",
      "ko": "도시 거리 곳곳에 자전거 전용도로 수를 늘리기 위해 시장 및 시의회와 협력할 계획입니다."
     },
     {
      "en": "Q. 누구와 협력할 것인가? → Government officials",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 19,
    "word": "workshop",
    "pos": "",
    "meaning": "워크숍, 교육",
    "derivatives": [],
    "examples": [
     {
      "en": "M: Thanks for attending this food safety workshop. Today, you'll learn how to handle food safely and prevent potential hazards.",
      "ko": "식품 안전 워크숍에 참석해 주셔서 감사합니다. 오늘은 음식을 안전하게 다루는 방법과 잠재적인 위험을 방지하는 방법을 배울 것입니다."
     },
     {
      "en": "Q. 무엇이 열리고 있는가? → A training session",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 20,
    "word": "popular",
    "pos": "",
    "meaning": "인기 있는",
    "derivatives": [],
    "examples": [
     {
      "en": "W: The workshop on health and wellness was a huge hit; a lot of people signed up, and it was very well received by the employees.",
      "ko": "건강에 대한 그 워크숍은 큰 성공을 거두었습니다. 많은 사람들이 신청했고, 직원들에게 호평을 받았습니다."
     },
     {
      "en": "Q. 워크숍에 대해 뭐라고 하는가? → It was very popular.",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 21,
    "word": "review",
    "pos": "",
    "meaning": "~을 검토하다",
    "derivatives": [],
    "examples": [
     {
      "en": "M: Why don't you look over the results of the survey we distributed to customers last week?",
      "ko": "지난주에 우리가 고객들에게 배포한 설문조사 결과를 검토해 보시는 것이 어떨까요?"
     },
     {
      "en": "Q. 무엇을 제안하는가? → Review some survey results",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 22,
    "word": "directions to",
    "pos": "",
    "meaning": "~로 가는 길안내",
    "derivatives": [],
    "examples": [
     {
      "en": "W: The Highbright Building is less than a 10-minute walk from here. Let me show you how to get there.",
      "ko": "하이브라이트 빌딩은 여기서 걸어서 10분도 안 걸립니다. 제가 가는 길을 알려드리겠습니다."
     },
     {
      "en": "Q. 무엇을 해주겠다고 하는가? → Provide directions",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 23,
    "word": "work overtime",
    "pos": "",
    "meaning": "초과 근무를 하다",
    "derivatives": [],
    "examples": [
     {
      "en": "M: Management appreciates that your team stayed late at work last week. You all did a great job to complete the rush order.",
      "ko": "경영진은 지난주에 귀하의 팀이 야근한 것에 대해 감사하고 있습니다. 다들 급한 주문 건을 완료하느라 수고 많으셨습니다."
     },
     {
      "en": "Q. 무엇에 대해 감사하는가? → Working overtime",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 24,
    "word": "socialize with",
    "pos": "",
    "meaning": "~와 교류하다, 사귀다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Why don't you sign up for the company sports day? It's a good way to interact with coworkers outside of work.",
      "ko": "회사 운동회에 등록해 보는 건 어때요? 직장 밖에서 동료들과 교류하는 좋은 방법이에요."
     },
     {
      "en": "Q. 왜 행사에 참가하라고 권하는가? → To socialize with coworkers",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 25,
    "word": "competition",
    "pos": "",
    "meaning": "경연 대회, 시합",
    "derivatives": [],
    "examples": [
     {
      "en": "M: The library will be holding a children's poster competition next month, and the city mayor will be the judge.",
      "ko": "도서관은 다음 달 어린이 포스터 대회를 열 예정인데, 시장님께서 심사를 맡으실 것입니다."
     },
     {
      "en": "Q. 다음 달에 무엇이 열릴 것인가? → A poster contest",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 26,
    "word": "coupon",
    "pos": "",
    "meaning": "쿠폰, 할인권",
    "derivatives": [],
    "examples": [
     {
      "en": "W: This flight is overbooked. If you're alright with departing at 10 PM tonight, I can give you a coupon for 200 euros off a future flight.",
      "ko": "이 항공편은 초과 예약되었습니다. 오늘 밤 10시에 출발해도 괜찮으시다면, 추후 항공편에서 200유로를 할인받을 수 있는 쿠폰을 드릴 수 있습니다."
     },
     {
      "en": "Q. 무엇을 제시하는가? → A discount voucher",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 27,
    "word": "workstation",
    "pos": "",
    "meaning": "업무 공간, 작업대",
    "derivatives": [],
    "examples": [
     {
      "en": "M: Upon request, we can replace your current desk with a new one. Simply e-mail the Human Resources department and let them know.",
      "ko": "요청하시면 현재 책상을 새 것으로 교체해 드릴 수 있습니다. 인사부에 이메일을 보내 알려주시기만 하면 됩니다."
     },
     {
      "en": "Q. 무엇을 발표하는가? → A workstation upgrade",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 28,
    "word": "dimension",
    "pos": "",
    "meaning": "측정값, 사이즈",
    "derivatives": [],
    "examples": [
     {
      "en": "W: I can't provide you with a final cost estimate without the exact dimensions of each room. Can you please call me back with this information?",
      "ko": "각 방의 정확한 사이즈 없이는 최종적인 비용 견적을 드릴 수 없습니다. 해당 정보를 가지고 다시 전화해 주시겠습니까?"
     },
     {
      "en": "Q. 무엇을 요청하는가? → Some room measurements",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 29,
    "word": "expand",
    "pos": "",
    "meaning": "(사업 등을) 확장하다",
    "derivatives": [],
    "examples": [
     {
      "en": "M: My goal is to open additional stores in the future, hopefully within the next 5 years. I think my business has great potential.",
      "ko": "제 목표는 앞으로 5년 안에 추가 매장들을 여는 것입니다. 저는 제 사업이 큰 잠재력을 가지고 있다고 생각합니다."
     },
     {
      "en": "Q. 5년 안에 무엇을 하겠다고 하는가? → Expand his business",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 30,
    "word": "examine",
    "pos": "",
    "meaning": "~을 자세히 살펴보다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: In that case, can you inspect the welding machine right now? Our in-house technician is off for the day.",
      "ko": "그럼 지금 바로 용접기를 검사해주실 수 있나요? 사내 기술자가 오늘 휴무입니다."
     },
     {
      "en": "Q. 무엇을 해달라고 하는가? → Examine some equipment",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 31,
    "word": "collect",
    "pos": "",
    "meaning": "~을 수집하다, 모으다",
    "derivatives": [],
    "examples": [
     {
      "en": "M: I'd like to hold a team meeting to get everyone's thoughts about how things went and what we can improve with our next project.",
      "ko": "저는 팀 미팅을 개최하여 어떻게 일이 진행되었는지, 다음 프로젝트에서 개선할 수 있는 것이 무엇인지에 대해 모두의 의견을 얻고자 합니다."
     },
     {
      "en": "Q. 왜 팀회의를 열고자 하는가? → To collect feedback",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 32,
    "word": "inaccurate",
    "pos": "",
    "meaning": "부정확한",
    "derivatives": [],
    "examples": [
     {
      "en": "W: I believe I've been billed incorrectly. I just moved in two days ago, so I wasn't the one using the water in this apartment unit last week.",
      "ko": "요금이 잘못 청구된 것 같아요. 저는 이틀 전에 이사를 와서, 지난주까지 이 아파트에서 물을 사용한 사람은 제가 아니에요."
     },
     {
      "en": "Q. 무엇에 대해 말하는가? → An inaccurate charge",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 33,
    "word": "survey",
    "pos": "",
    "meaning": "설문조사",
    "derivatives": [],
    "examples": [
     {
      "en": "M: I finished analyzing the data from the employee questionnaire. Overall, the results indicate that staff are satisfied with the office's new open layout.",
      "ko": "직원 설문조사 자료 분석을 마쳤습니다. 전체적으로 사무실의 새로운 개방 설계에 대한 직원들의 만족도가 높았습니다."
     },
     {
      "en": "Q. 무엇에 대해 이야기하는가? → Survey results",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": "관련 기출\nconduct a survey[poll]  설문조사를 실시하다"
   },
   {
    "no": 34,
    "word": "professional",
    "pos": "",
    "meaning": "전문가",
    "derivatives": [],
    "examples": [
     {
      "en": "W: For today's conference, we've invited experts from the medical industry to speak about the emergence of artificial intelligence in healthcare.",
      "ko": "오늘 컨퍼런스를 위해, 의료계 전문가들을 초청해 의료 분야의 인공지능 출현에 대해 강연해주시도록 하였습니다."
     },
     {
      "en": "Q. 누가 행사에 초청되었는가? → Medical professionals",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 35,
    "word": "abroad",
    "pos": "",
    "meaning": "해외에(서), 해외로",
    "derivatives": [],
    "examples": [
     {
      "en": "M: During my time abroad, I've learned so many new skills and made many new friends. It has been a truly rewarding experience.",
      "ko": "해외에 있는 동안 많은 새로운 기술들을 배우고 새로운 친구들을 많이 사귀었습니다. 정말 보람 있는 경험이었습니다."
     },
     {
      "en": "Q. 무엇이 보람 있었다고 하는가? → Spending time overseas",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 36,
    "word": "renowned",
    "pos": "",
    "meaning": "유명한",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Daron Goddard is a renowned entrepreneur with decades of experience in the tech industry. Why don't we consult with him?",
      "ko": "대런 고다드 씨는 기술 산업에서 수십 년의 경험을 보유한 유명한 기업가입니다. 그와 상의해 보는 게 어때요?"
     },
     {
      "en": "Q. 누구에게 상의해보라고 하는가? → A well-known businessman",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 37,
    "word": "journalist",
    "pos": "",
    "meaning": "언론인",
    "derivatives": [],
    "examples": [
     {
      "en": "M: My fellow reporter and I are from Bay Area Times, and we wanted to ask you a few questions about the new city construction initiative.",
      "ko": "저와 동료 기자는 <베이 에리어 타임즈> 신문에서 나왔는데요, 신도시 건설 계획에 대해 몇 가지 질문을 드리고자 합니다."
     },
     {
      "en": "Q. 남자의 직업은? → Journalist",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 38,
    "word": "business hours",
    "pos": "",
    "meaning": "영업 시간",
    "derivatives": [],
    "examples": [
     {
      "en": "W: Instead of 5 PM, we will now be closing at 7, so be sure to make a note of that.",
      "ko": "오후 5시 대신, 이제 7시에 문을 닫을 예정이오니, 꼭 메모해두시기 바랍니다."
     },
     {
      "en": "Q. 무엇을 할 것인가? → Extend some business hours",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 39,
    "word": "carpool",
    "pos": "",
    "meaning": "차를 함께 타다",
    "derivatives": [],
    "examples": [
     {
      "en": "M: I heard you have a similar commute to work. Would you be interested in carpooling together?",
      "ko": "출퇴근 길이 비슷하시다고 들었어요. 같이 차를 타시겠어요?"
     },
     {
      "en": "Q. 무엇을 제안하는가? → Drive to work together",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 40,
    "word": "commemorate",
    "pos": "",
    "meaning": "~을 기념하다",
    "derivatives": [],
    "examples": [
     {
      "en": "W: I am truly honored to welcome you to this banquet to celebrate our 10th anniversary.",
      "ko": "저희 창립 10주년을 축하하기 위한 만찬에 여러분을 모시게 되어 진심으로 영광입니다."
     },
     {
      "en": "Q. 왜 모여 있는가? → To commemorate a special day",
      "ko": ""
     }
    ],
    "quiz": null,
    "tip": ""
   }
  ]
 },
 {
  "week": 7,
  "day": 32,
  "part": "Part 5,6",
  "title": "부사 ①",
  "words": [
   {
    "no": 1,
    "word": "instead",
    "pos": "ad.",
    "meaning": "대신(에)",
    "derivatives": [],
    "examples": [
     {
      "en": "choose instead to focus on",
      "ko": "대신 ~에 집중하기로 결정하다"
     },
     {
      "en": "will be shown on Friday instead",
      "ko": "대신 금요일에 상영될 것이다"
     }
    ],
    "quiz": {
     "sentence": "While Mr. Graves is on annual leave, the weekly work schedules will be created by Ms. Jones -------.",
     "a": "instead",
     "b": "likewise",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 2,
    "word": "therefore",
    "pos": "ad.",
    "meaning": "그러므로, 따라서",
    "derivatives": [],
    "examples": [
     {
      "en": "have more functions, therefore increasing the cost",
      "ko": "더 많은 기능이 있으므로 비용을 증가시키다"
     },
     {
      "en": "The deadline has been moved forward, and therefore, we need more staff.",
      "ko": "마감일이 앞으로 당겨졌으며, 따라서 우리는 더 많은 직원이 필요하다."
     }
    ],
    "quiz": {
     "sentence": "Jeffrey has already exceeded his monthly sales target. -------, he will be awarded a bonus.",
     "a": "Therefore",
     "b": "Otherwise",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 3,
    "word": "then",
    "pos": "ad.",
    "meaning": "그리고 나서",
    "derivatives": [],
    "examples": [
     {
      "en": "be first categorized by subject and then alphabetized",
      "ko": "먼저 주제별로 분류되고 나서 알파벳 순으로 정렬되다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Peele booked a venue for the fundraising event. He ------- created invitations to be sent to guests.",
     "a": "since",
     "b": "then",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 4,
    "word": "currently",
    "pos": "ad.",
    "meaning": "현재",
    "derivatives": [
     {
      "word": "current",
      "pos": "a.",
      "meaning": "현재의"
     }
    ],
    "examples": [
     {
      "en": "be currently seeking volunteers",
      "ko": "현재 자원봉사자들을 구하는 중이다"
     },
     {
      "en": "be currently understaffed",
      "ko": "현재 인원이 부족하다"
     }
    ],
    "quiz": {
     "sentence": "We plan to expand our distribution network before the end of this year. -------, we only deliver to customers based within Detroit.",
     "a": "Currently",
     "b": "Significantly",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 5,
    "word": "accordingly",
    "pos": "ad.",
    "meaning": "그에 맞춰, (상황에) 따라서",
    "derivatives": [
     {
      "word": "according to",
      "pos": "prep.",
      "meaning": "~에 따르면"
     }
    ],
    "examples": [
     {
      "en": "The bonus will be awarded accordingly.",
      "ko": "보너스가 그에 맞춰 주어질 것이다."
     },
     {
      "en": "The number of staff will be adjusted accordingly.",
      "ko": "직원의 수가 상황에 따라서 조정될 것이다."
     }
    ],
    "quiz": {
     "sentence": "Once a decision has been made regarding the changing of our restaurant's name, our menus will be changed -------.",
     "a": "accordingly",
     "b": "typically",
     "answer": "A"
    },
    "tip": "주로 Part 6에서 결과를 나타내는 내용을 이끄는 접속부사로 출제된다."
   },
   {
    "no": 6,
    "word": "increasingly",
    "pos": "ad.",
    "meaning": "점점 더",
    "derivatives": [
     {
      "word": "increasing",
      "pos": "a.",
      "meaning": "증가하는"
     },
     {
      "word": "increased",
      "pos": "a.",
      "meaning": "증가된"
     },
     {
      "word": "increase",
      "pos": "v.",
      "meaning": "증가시키다, 증가하다"
     },
     {
      "word": "increase",
      "pos": "n.",
      "meaning": "증가"
     }
    ],
    "examples": [
     {
      "en": "become increasingly concerned about",
      "ko": "~에 대해 점점 더 우려하게 되다"
     },
     {
      "en": "offset increasingly high energy costs",
      "ko": "점점 더 높은 에너지 비용을 상쇄하다"
     }
    ],
    "quiz": {
     "sentence": "Musician Bill Maddison's songs became ------- popular after being featured in an award-winning television series.",
     "a": "increasingly",
     "b": "equally",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 7,
    "word": "safely",
    "pos": "ad.",
    "meaning": "안전하게",
    "derivatives": [
     {
      "word": "safe",
      "pos": "a.",
      "meaning": "안전한"
     },
     {
      "word": "safety",
      "pos": "n.",
      "meaning": "안전"
     }
    ],
    "examples": [
     {
      "en": "access one's account safely",
      "ko": "~의 계좌에 안전하게 접근하다"
     },
     {
      "en": "lose weight safely through exercise",
      "ko": "운동을 통해 안전하게 체중을 줄이다"
     }
    ],
    "quiz": {
     "sentence": "All attendees at this year's music festival are reminded to behave ------- and responsibly.",
     "a": "safely",
     "b": "lively",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 8,
    "word": "financially",
    "pos": "ad.",
    "meaning": "재정적으로",
    "derivatives": [
     {
      "word": "finance",
      "pos": "v.",
      "meaning": "재정을 조달하다"
     },
     {
      "word": "financial",
      "pos": "a.",
      "meaning": "재정의"
     }
    ],
    "examples": [
     {
      "en": "do well financially",
      "ko": "재정적으로 잘하고 있다"
     }
    ],
    "quiz": {
     "sentence": "The lead architect has indicated that adding more structures to the shopping mall blueprint is not ------- feasible.",
     "a": "promptly",
     "b": "financially",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 9,
    "word": "already",
    "pos": "ad.",
    "meaning": "이미, 벌써",
    "derivatives": [],
    "examples": [
     {
      "en": "have already turned in a registration form",
      "ko": "이미 등록서를 제출했다"
     },
     {
      "en": "have already been installed",
      "ko": "벌써 설치되었다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Shandwick found new ways to increase revenue at his ------- profitable business.",
     "a": "even",
     "b": "already",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 10,
    "word": "easily",
    "pos": "ad.",
    "meaning": "쉽게",
    "derivatives": [
     {
      "word": "easy",
      "pos": "a.",
      "meaning": "쉬운"
     },
     {
      "word": "ease",
      "pos": "n.",
      "meaning": "쉬움"
     }
    ],
    "examples": [
     {
      "en": "can easily enroll online",
      "ko": "온라인으로 쉽게 등록할 수 있다"
     },
     {
      "en": "accommodate tour groups easily",
      "ko": "여행 단체들을 쉽게 수용하다"
     }
    ],
    "quiz": {
     "sentence": "Tourists can ------- visit several attractions by joining the city's bus tours.",
     "a": "easily",
     "b": "lately",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 11,
    "word": "finally",
    "pos": "ad.",
    "meaning": "마침내",
    "derivatives": [
     {
      "word": "final",
      "pos": "a.",
      "meaning": "마지막의, 최종의"
     },
     {
      "word": "finalize",
      "pos": "v.",
      "meaning": "마무리 짓다"
     }
    ],
    "examples": [
     {
      "en": "be finally accepted by the management",
      "ko": "경영진에 의해 마침내 수락되다"
     },
     {
      "en": "be finally able to complete the report",
      "ko": "마침내 보고서를 완료할 수 있다"
     }
    ],
    "quiz": {
     "sentence": "After two months of negotiations, Archer Construction Inc. ------- won the contract to build the new international airport.",
     "a": "finally",
     "b": "totally",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 12,
    "word": "largely",
    "pos": "ad.",
    "meaning": "주로, 대체로",
    "derivatives": [
     {
      "word": "large",
      "pos": "a.",
      "meaning": "커다란, (양이) 많은"
     }
    ],
    "examples": [
     {
      "en": "largely from one's experiences",
      "ko": "주로 ~의 경험에서 온"
     }
    ],
    "quiz": {
     "sentence": "The postponement of the city's annual film festival was due ------- to the proposed event site failing a safety inspection.",
     "a": "ideally",
     "b": "largely",
     "answer": "B"
    },
    "tip": "주로 be동사와 p.p./형용사 사이, 또는 부사구 앞 자리에서 품사 문제로 출제된다."
   },
   {
    "no": 13,
    "word": "continually",
    "pos": "ad.",
    "meaning": "계속해서",
    "derivatives": [
     {
      "word": "continuous",
      "pos": "a.",
      "meaning": "계속되는"
     }
    ],
    "examples": [
     {
      "en": "continually deliver superior service",
      "ko": "우수한 서비스를 계속해서 내놓다"
     }
    ],
    "quiz": {
     "sentence": "In order to maximize production efficiency, the factory manager must ------- motivate the workers on the assembly line.",
     "a": "continually",
     "b": "finely",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 14,
    "word": "shortly",
    "pos": "ad.",
    "meaning": "곧",
    "derivatives": [
     {
      "word": "short",
      "pos": "a.",
      "meaning": "짧은"
     },
     {
      "word": "shorten",
      "pos": "v.",
      "meaning": "짧게 하다, 단축하다"
     }
    ],
    "examples": [
     {
      "en": "be expected to reopen shortly",
      "ko": "곧 다시 문을 열 것으로 예상되다"
     },
     {
      "en": "will be finished shortly",
      "ko": "곧 끝날 것이다"
     }
    ],
    "quiz": {
     "sentence": "The issue with the faulty security cameras will be attended to ------- after we repair the third floor elevator.",
     "a": "nearly",
     "b": "shortly",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 15,
    "word": "almost",
    "pos": "ad.",
    "meaning": "거의",
    "derivatives": [],
    "examples": [
     {
      "en": "after almost 5 years of renovation",
      "ko": "거의 5년의 보수공사 이후에"
     },
     {
      "en": "can do almost anything",
      "ko": "거의 모든 것을 할 수 있다"
     }
    ],
    "quiz": {
     "sentence": "Thanks to the addition of our new roller coaster, our ticket sales have ------- tripled compared with last summer.",
     "a": "closely",
     "b": "almost",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 16,
    "word": "recently",
    "pos": "ad.",
    "meaning": "최근(에)",
    "derivatives": [
     {
      "word": "recent",
      "pos": "a.",
      "meaning": "최근의"
     }
    ],
    "examples": [
     {
      "en": "recently became a permanent employee",
      "ko": "최근 정규 직원이 되었다"
     },
     {
      "en": "has recently been awarded a contract",
      "ko": "최근 계약을 따냈다"
     }
    ],
    "quiz": {
     "sentence": "Vesuvius Software Company has ------- relocated to the industrial park on the outskirts of town.",
     "a": "recently",
     "b": "fairly",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 17,
    "word": "immediately",
    "pos": "ad.",
    "meaning": "즉시",
    "derivatives": [
     {
      "word": "immediate",
      "pos": "a.",
      "meaning": "즉각적인"
     }
    ],
    "examples": [
     {
      "en": "in order to activate your membership immediately",
      "ko": "회원권을 즉시 활성화시키기 위해"
     },
     {
      "en": "immediately after the items went on sale",
      "ko": "물건들이 할인된 직후에"
     }
    ],
    "quiz": {
     "sentence": "All factory visitors are required to put on safety equipment ------- upon arrival.",
     "a": "immediately",
     "b": "periodically",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 18,
    "word": "otherwise",
    "pos": "ad.",
    "meaning": "다르게, 그렇지 않으면",
    "derivatives": [],
    "examples": [
     {
      "en": "unless otherwise instructed",
      "ko": "다르게 지시되어 있지 않다면"
     },
     {
      "en": "Please return the book by September 5. Otherwise, you'll be charged a late fee.",
      "ko": "9월 5일까지 도서를 반납하세요. 그렇지 않으면, 귀하께 연체료가 부과될 것입니다."
     }
    ],
    "quiz": {
     "sentence": "Our range of delicious sauces can turn an ------- ordinary meal into a memorable dining experience.",
     "a": "instead",
     "b": "otherwise",
     "answer": "B"
    },
    "tip": "otherwise는 Part 5에서는 주로 '다르게'라는 뜻으로, Part 6에서는 '그렇지 않으면'의 뜻인 접속부사로 사용된다."
   },
   {
    "no": 19,
    "word": "frequently",
    "pos": "ad.",
    "meaning": "자주, 빈번하게",
    "derivatives": [],
    "examples": [
     {
      "en": "frequently hold the meeting",
      "ko": "자주 회의를 개최하다"
     },
     {
      "en": "be updated frequently",
      "ko": "빈번하게 업데이트되다"
     }
    ],
    "quiz": {
     "sentence": "All shelves at Greenway Supermarket are restocked ------- to ensure that customers can always find the items they need.",
     "a": "frequently",
     "b": "previously",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 20,
    "word": "usually",
    "pos": "ad.",
    "meaning": "보통, 대개",
    "derivatives": [
     {
      "word": "usual",
      "pos": "a.",
      "meaning": "보통의, 일상의"
     }
    ],
    "examples": [
     {
      "en": "usually arrive at the office at 10 AM",
      "ko": "보통 오전 10시에 사무실에 도착하다"
     },
     {
      "en": "be usually delayed",
      "ko": "대개 지연되다"
     }
    ],
    "quiz": {
     "sentence": "Game schedules and results are ------- posted on the baseball team's Web site.",
     "a": "usually",
     "b": "slightly",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 21,
    "word": "ahead",
    "pos": "ad.",
    "meaning": "미리, 앞에",
    "derivatives": [],
    "examples": [
     {
      "en": "plan ahead",
      "ko": "미리 계획하다"
     },
     {
      "en": "be advised to call ahead",
      "ko": "미리 전화하는 것을 권고하다"
     }
    ],
    "quiz": {
     "sentence": "Temperatures in the coastal areas are anticipated to drop in the weeks -------.",
     "a": "upon",
     "b": "ahead",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 22,
    "word": "clearly",
    "pos": "ad.",
    "meaning": "분명히, 명확하게",
    "derivatives": [],
    "examples": [
     {
      "en": "in a clearly visible way",
      "ko": "분명히 보일 수 있는 방식으로"
     },
     {
      "en": "clearly state that",
      "ko": "~라는 것을 명확하게 언급하다"
     }
    ],
    "quiz": {
     "sentence": "Demand for Zola smartphones has ------- decreased since the design of the device was changed last year.",
     "a": "exactly",
     "b": "clearly",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 23,
    "word": "initially",
    "pos": "ad.",
    "meaning": "처음에, 초기에",
    "derivatives": [],
    "examples": [
     {
      "en": "initially be not familiar with the new program",
      "ko": "처음에 새로운 프로그램에 익숙하지 않다"
     },
     {
      "en": "must initially pay all fees",
      "ko": "초기에 모든 요금을 지불해야 하다"
     }
    ],
    "quiz": {
     "sentence": "New workers at Southern Chicken are ------- provided with two work uniforms, but an additional one is available upon request.",
     "a": "initially",
     "b": "shortly",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 24,
    "word": "specifically",
    "pos": "ad.",
    "meaning": "특히, 구체적으로",
    "derivatives": [
     {
      "word": "specify",
      "pos": "v.",
      "meaning": "(구체적으로) 명시하다"
     },
     {
      "word": "specific",
      "pos": "a.",
      "meaning": "구체적인, 특정한"
     }
    ],
    "examples": [
     {
      "en": "specifically designed for",
      "ko": "특히 ~을 위해 고안된"
     },
     {
      "en": "Specifically, your main duty is to manage the work crew.",
      "ko": "구체적으로, 귀하의 주 직무는 작업반을 관리하는 것입니다."
     }
    ],
    "quiz": {
     "sentence": "The grand opening of Funland Toystore was scheduled ------- to take place on the first day of the school holidays.",
     "a": "specifically",
     "b": "relatively",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 25,
    "word": "consistently",
    "pos": "ad.",
    "meaning": "일관성 있게, 지속적으로",
    "derivatives": [
     {
      "word": "consistent",
      "pos": "a.",
      "meaning": "일관성 있는"
     }
    ],
    "examples": [
     {
      "en": "be promoted for one's consistently outstanding contributions",
      "ko": "일관성 있게 뛰어난 기여로 승진되다"
     },
     {
      "en": "be consistently late in shipping the order",
      "ko": "지속적으로 주문건을 배송하는 데 늦다"
     }
    ],
    "quiz": {
     "sentence": "Ms. Grainger was recognized at the annual awards ceremony for her ------- outstanding sales performance.",
     "a": "consistently",
     "b": "potentially",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 26,
    "word": "intentionally",
    "pos": "ad.",
    "meaning": "의도적으로, 고의로",
    "derivatives": [
     {
      "word": "intend",
      "pos": "v.",
      "meaning": "의도하다"
     },
     {
      "word": "intention",
      "pos": "n.",
      "meaning": "의도, 고의"
     },
     {
      "word": "intentional",
      "pos": "a.",
      "meaning": "의도적인, 고의적인"
     }
    ],
    "examples": [
     {
      "en": "be intentionally designed for",
      "ko": "의도적으로 ~을 위해 고안되다"
     },
     {
      "en": "intentionally make the battery run out",
      "ko": "고의로 배터리를 닳게 만들다"
     }
    ],
    "quiz": {
     "sentence": "The display of new winter jackets has been ------- assembled near the entrance to attract customer interest.",
     "a": "intentionally",
     "b": "extremely",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 27,
    "word": "briefly",
    "pos": "ad.",
    "meaning": "간단히, 잠깐",
    "derivatives": [
     {
      "word": "brief",
      "pos": "a.",
      "meaning": "간결한, 잠시의"
     }
    ],
    "examples": [
     {
      "en": "briefly review the agenda",
      "ko": "안건을 간단히 검토하다"
     },
     {
      "en": "be briefly delayed due to a minor problem",
      "ko": "사소한 문제로 인해 잠깐 지연되다"
     }
    ],
    "quiz": {
     "sentence": "The director spoke to the audience only ------- before leaving the film premiere.",
     "a": "briefly",
     "b": "correctly",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 28,
    "word": "probably",
    "pos": "ad.",
    "meaning": "아마도",
    "derivatives": [],
    "examples": [
     {
      "en": "probably due to a system malfunction",
      "ko": "아마도 시스템 장애로 인해"
     },
     {
      "en": "will probably take at least five business days",
      "ko": "아마도 적어도 영업일 5일이 걸릴 것이다"
     }
    ],
    "quiz": {
     "sentence": "Property market experts believe that house prices will ------- rise significantly over the next five years.",
     "a": "previously",
     "b": "probably",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 29,
    "word": "slightly",
    "pos": "ad.",
    "meaning": "약간",
    "derivatives": [
     {
      "word": "slight",
      "pos": "a.",
      "meaning": "약간의"
     }
    ],
    "examples": [
     {
      "en": "rise slightly again",
      "ko": "다시 약간 상승하다"
     }
    ],
    "quiz": {
     "sentence": "The CEO has suggested using a ------- cheaper packaging material in order to reduce expenses.",
     "a": "slightly",
     "b": "highly",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 30,
    "word": "formerly",
    "pos": "ad.",
    "meaning": "~ 출신인, 이전에는",
    "derivatives": [
     {
      "word": "former",
      "pos": "a.",
      "meaning": "이전의, 전직 ~인"
     }
    ],
    "examples": [
     {
      "en": "formerly a graphic artist",
      "ko": "그래픽 예술가 출신인"
     },
     {
      "en": "be formerly a residential area",
      "ko": "이전에는 주택가였다"
     }
    ],
    "quiz": {
     "sentence": "Edward Johnson, ------- the president of Jacoby Corporation, has announced the launch of his new technology company.",
     "a": "formerly",
     "b": "frequently",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 31,
    "word": "alternatively",
    "pos": "ad.",
    "meaning": "그렇지 않으면, 대신",
    "derivatives": [],
    "examples": [
     {
      "en": "You may use the free shuttle service from the hotel. Alternatively, you can take a taxi.",
      "ko": "귀하께서는 호텔에서 무료 셔틀 서비스를 이용하실 수 있습니다. 그렇지 않으면, 택시를 이용하셔도 됩니다."
     }
    ],
    "quiz": {
     "sentence": "Please print out your train ticket and present it to an agent at the station. -------, you may show an electronic version.",
     "a": "Consequently",
     "b": "Alternatively",
     "answer": "B"
    },
    "tip": "주로 Part 6에서 대안을 이끄는 접속부사로 출제된다."
   },
   {
    "no": 32,
    "word": "primarily",
    "pos": "ad.",
    "meaning": "주로",
    "derivatives": [
     {
      "word": "primary",
      "pos": "a.",
      "meaning": "주요한"
     }
    ],
    "examples": [
     {
      "en": "be primarily responsible for quality control",
      "ko": "주로 품질 관리를 맡고 있다"
     },
     {
      "en": "work primarily on",
      "ko": "주로 ~에 대한 일을 하다"
     }
    ],
    "quiz": {
     "sentence": "Since the company was founded last month, Vornicon Inc. has received many orders, ------- from firms based in South Korea.",
     "a": "primarily",
     "b": "closely",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 33,
    "word": "cautiously",
    "pos": "ad.",
    "meaning": "조심스럽게, 신중히",
    "derivatives": [
     {
      "word": "caution",
      "pos": "n.",
      "meaning": "조심, 주의"
     },
     {
      "word": "cautious",
      "pos": "a.",
      "meaning": "조심스러운, 신중한"
     }
    ],
    "examples": [
     {
      "en": "as cautiously as possible",
      "ko": "가능한 한 조심스럽게"
     },
     {
      "en": "cautiously predict a merger between",
      "ko": "~ 간의 합병을 신중히 예측하다"
     }
    ],
    "quiz": {
     "sentence": "Hikers are advised to ------- walk along the ridge trail, which has steep cliffs on either side.",
     "a": "cautiously",
     "b": "tightly",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 34,
    "word": "ideally",
    "pos": "ad.",
    "meaning": "이상적으로",
    "derivatives": [
     {
      "word": "ideal",
      "pos": "a.",
      "meaning": "이상적인"
     }
    ],
    "examples": [
     {
      "en": "will ideally be completed by next Friday",
      "ko": "다음 주 금요일까지 완료되면 이상적일 것이다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Harmon will ------- hire at least ten new sales representatives to help the company deal with the increased demand in manpower.",
     "a": "ideally",
     "b": "relatively",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 35,
    "word": "skillfully",
    "pos": "ad.",
    "meaning": "능숙하게",
    "derivatives": [],
    "examples": [
     {
      "en": "how skillfully he designed the clothing line",
      "ko": "그가 의류 제품군을 얼마나 능숙하게 디자인하는지"
     }
    ],
    "quiz": {
     "sentence": "Greta Moffat is known for ------- crafting handmade furniture from recycled wood.",
     "a": "likely",
     "b": "skillfully",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 36,
    "word": "perfectly",
    "pos": "ad.",
    "meaning": "완벽하게",
    "derivatives": [
     {
      "word": "perfect",
      "pos": "a.",
      "meaning": "완벽한"
     },
     {
      "word": "perfection",
      "pos": "n.",
      "meaning": "완벽"
     }
    ],
    "examples": [
     {
      "en": "be perfectly suited for",
      "ko": "~에 완벽하게 어울리다"
     }
    ],
    "quiz": {
     "sentence": "The new car manufactured by Mazdar Motors is ------- suited for medium-sized families who enjoy going on long road trips.",
     "a": "gradually",
     "b": "perfectly",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 37,
    "word": "simply",
    "pos": "ad.",
    "meaning": "그저, 간단히",
    "derivatives": [
     {
      "word": "simple",
      "pos": "a.",
      "meaning": "간단한"
     }
    ],
    "examples": [
     {
      "en": "simply highlight the item",
      "ko": "그저 그 제품을 강조하다"
     },
     {
      "en": "simply arrange the flowers",
      "ko": "간단히 꽃들을 배치하다"
     }
    ],
    "quiz": {
     "sentence": "To assemble your new Fitmaster treadmill, ------- follow the instructions in the user manual.",
     "a": "simply",
     "b": "mostly",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 38,
    "word": "particularly",
    "pos": "ad.",
    "meaning": "특히",
    "derivatives": [
     {
      "word": "particular",
      "pos": "a.",
      "meaning": "특정한"
     }
    ],
    "examples": [
     {
      "en": "a particularly busy day",
      "ko": "특히 바쁜 날"
     },
     {
      "en": "even in particularly stressful situations",
      "ko": "심지어 특히 스트레스가 심한 상황에서도"
     }
    ],
    "quiz": {
     "sentence": "Gilman Department Store will remain open until 10 PM on December 24 as this is usually a ------- busy shopping day.",
     "a": "particularly",
     "b": "readily",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 39,
    "word": "precisely",
    "pos": "ad.",
    "meaning": "정확히",
    "derivatives": [
     {
      "word": "precise",
      "pos": "a.",
      "meaning": "정확한"
     },
     {
      "word": "precision",
      "pos": "n.",
      "meaning": "정확"
     }
    ],
    "examples": [
     {
      "en": "precisely to ensure stability of",
      "ko": "~의 안정성을 정확히 보장하기 위해"
     }
    ],
    "quiz": {
     "sentence": "The opening ceremony of the sports competition will begin at ------- 7 PM this Friday.",
     "a": "precisely",
     "b": "definitely",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 40,
    "word": "likewise",
    "pos": "ad.",
    "meaning": "마찬가지로",
    "derivatives": [],
    "examples": [
     {
      "en": "As his predecessor did, the new CEO likewise places top priority on finding a reliable alternative energy source.",
      "ko": "전임자가 그랬듯이, 신임 대표이사도 마찬가지로 신뢰할 만한 대체 에너지원을 찾는 것을 최우선 과제로 삼고 있다."
     }
    ],
    "quiz": {
     "sentence": "As with our main branch in Los Angeles, our new clothing store in San Francisco ------- customizes garments at the request of customers.",
     "a": "likewise",
     "b": "meanwhile",
     "answer": "A"
    },
    "tip": "주로 Part 6에서 앞의 내용과 유사한 내용을 이끄는 접속부사로 출제된다."
   }
  ]
 },
 {
  "week": 7,
  "day": 33,
  "part": "Part 5,6",
  "title": "부사 ②",
  "words": [
   {
    "no": 1,
    "word": "exclusively",
    "pos": "ad.",
    "meaning": "독점적으로",
    "derivatives": [
     {
      "word": "exclusive",
      "pos": "a.",
      "meaning": "독점적인"
     }
    ],
    "examples": [
     {
      "en": "deal almost exclusively with",
      "ko": "거의 독점적으로 ~와 거래하다"
     },
     {
      "en": "be available exclusively on Channel 5",
      "ko": "5번 채널에서 독점적으로 볼 수 있다"
     }
    ],
    "quiz": {
     "sentence": "The upcoming seminar on artificial intelligence is open ------ to members of the Feeney Technology Institute.",
     "a": "exclusively",
     "b": "approximately",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 2,
    "word": "unfortunately",
    "pos": "ad.",
    "meaning": "안타깝게도, 아쉽게도",
    "derivatives": [],
    "examples": [
     {
      "en": "Unfortunately, the shipment is missing an item.",
      "ko": "안타깝게도, 배송에서 물품이 하나 빠져 있습니다."
     }
    ],
    "quiz": {
     "sentence": "------, the museum's main exhibition hall will be closed to visitors until March 1.",
     "a": "Unfortunately",
     "b": "Precisely",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 3,
    "word": "rarely",
    "pos": "ad.",
    "meaning": "드물게",
    "derivatives": [
     {
      "word": "rare",
      "pos": "a.",
      "meaning": "드문, 희귀한"
     }
    ],
    "examples": [
     {
      "en": "rarely raise their price",
      "ko": "드물게 가격을 인상하다"
     },
     {
      "en": "be rarely used by our employees",
      "ko": "우리 직원들에 의해 드물게 사용되다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Edwards prefers to commute by bicycle and ------ uses public transportation or his own car.",
     "a": "readily",
     "b": "rarely",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 4,
    "word": "fully",
    "pos": "ad.",
    "meaning": "완전히, 최대로",
    "derivatives": [
     {
      "word": "full",
      "pos": "a.",
      "meaning": "완전한, 최대의"
     }
    ],
    "examples": [
     {
      "en": "will be fully recyclable",
      "ko": "완전히 재활용 가능할 것이다"
     }
    ],
    "quiz": {
     "sentence": "The airline ticket is ------ refundable, provided a cancellation request is made at least two weeks prior to the departure date.",
     "a": "initially",
     "b": "fully",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 5,
    "word": "separately",
    "pos": "ad.",
    "meaning": "따로, 별도로",
    "derivatives": [
     {
      "word": "separate",
      "pos": "a.",
      "meaning": "분리된, 별도의"
     }
    ],
    "examples": [
     {
      "en": "be sold separately",
      "ko": "따로 판매되다"
     }
    ],
    "quiz": {
     "sentence": "Due to the size of your purchased items, two packages will be delivered ------ to your address on March 5.",
     "a": "suddenly",
     "b": "separately",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 6,
    "word": "necessarily",
    "pos": "ad.",
    "meaning": "반드시",
    "derivatives": [],
    "examples": [
     {
      "en": "not necessarily imply endorsement from",
      "ko": "반드시 ~의 지지를 의미하는 것은 아니다"
     },
     {
      "en": "not necessarily purchase it again",
      "ko": "반드시 그것을 다시 구매해야 하는 것은 아니다"
     }
    ],
    "quiz": {
     "sentence": "Comments posted by users on our online forum do not ------ reflect the views of our organization.",
     "a": "necessarily",
     "b": "importantly",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 7,
    "word": "correctly",
    "pos": "ad.",
    "meaning": "정확하게",
    "derivatives": [
     {
      "word": "correct",
      "pos": "a.",
      "meaning": "정확한"
     }
    ],
    "examples": [
     {
      "en": "correctly record the delivery address",
      "ko": "배송 주소를 정확하게 기록하다"
     }
    ],
    "quiz": {
     "sentence": "Please get in touch with the real estate agent to check that we ------ listed the asking price for the property.",
     "a": "frequently",
     "b": "correctly",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 8,
    "word": "heavily",
    "pos": "ad.",
    "meaning": "대단히, 심하게, 아주 많이",
    "derivatives": [],
    "examples": [
     {
      "en": "have invested heavily in",
      "ko": "~에 대단히 투자해왔다"
     },
     {
      "en": "be heavily influenced by",
      "ko": "~에 의해 심하게 영향받다"
     },
     {
      "en": "be heavily discounted until",
      "ko": "~할 때까지 아주 많이 할인하다"
     }
    ],
    "quiz": {
     "sentence": "Travel to the Muskoka region is not advised because it is expected to snow ------ for the next few days.",
     "a": "heavily",
     "b": "shortly",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 9,
    "word": "mutually",
    "pos": "ad.",
    "meaning": "상호, 서로",
    "derivatives": [
     {
      "word": "mutual",
      "pos": "a.",
      "meaning": "상호의"
     }
    ],
    "examples": [
     {
      "en": "mutually beneficial relationship",
      "ko": "상호 이로운 관계"
     },
     {
      "en": "develop mutually productive interactions",
      "ko": "서로 생산적인 상호작용을 발전시키다"
     }
    ],
    "quiz": {
     "sentence": "The business arrangement between Seema Health Foods and Flow Shipping will be ------ beneficial.",
     "a": "mutually",
     "b": "wishfully",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 10,
    "word": "fairly",
    "pos": "ad.",
    "meaning": "상당히, 꽤, 공정하게",
    "derivatives": [
     {
      "word": "fair",
      "pos": "a.",
      "meaning": "공정한"
     }
    ],
    "examples": [
     {
      "en": "win the election fairly easily",
      "ko": "상당히 쉽게 선거를 이기다"
     }
    ],
    "quiz": {
     "sentence": "Sales of the Ryzen 4 smartphone have remained ------ steady despite numerous reports of battery issues.",
     "a": "fairly",
     "b": "roughly",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 11,
    "word": "eventually",
    "pos": "ad.",
    "meaning": "마침내, 결국",
    "derivatives": [
     {
      "word": "eventual",
      "pos": "a.",
      "meaning": "궁극적인"
     }
    ],
    "examples": [
     {
      "en": "will be eventually promoted",
      "ko": "마침내 승진될 것이다"
     },
     {
      "en": "eventually earn a degree in",
      "ko": "결국 ~에서의 학위를 받다"
     }
    ],
    "quiz": {
     "sentence": "Provided that Mario Pizza's monthly revenue continues to rise, the business will ------ become profitable.",
     "a": "already",
     "b": "eventually",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 12,
    "word": "unusually",
    "pos": "ad.",
    "meaning": "대단히, 드물게",
    "derivatives": [
     {
      "word": "unusual",
      "pos": "a.",
      "meaning": "드문"
     }
    ],
    "examples": [
     {
      "en": "identify an unusually large money withdrawal",
      "ko": "대단히 큰 돈의 인출을 확인하다"
     },
     {
      "en": "unusually cold weather",
      "ko": "드물게 추운 날씨"
     }
    ],
    "quiz": {
     "sentence": "Due to the ------ high temperatures this summer, the company has installed air conditioning in its offices.",
     "a": "unusually",
     "b": "easily",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 13,
    "word": "unexpectedly",
    "pos": "ad.",
    "meaning": "예기치 않게, 뜻밖에",
    "derivatives": [
     {
      "word": "unexpected",
      "pos": "a.",
      "meaning": "예기치 않은, 뜻밖의"
     }
    ],
    "examples": [
     {
      "en": "unexpectedly announce that",
      "ko": "~라는 것을 예기치 않게 발표하다"
     },
     {
      "en": "cause schedules to change unexpectedly",
      "ko": "뜻밖에 일정을 변경하도록 하다"
     }
    ],
    "quiz": {
     "sentence": "The train to Manchester was ------ delayed due to a mechanical fault.",
     "a": "unexpectedly",
     "b": "attentively",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 14,
    "word": "alike",
    "pos": "ad.",
    "meaning": "똑같이, 모두",
    "derivatives": [],
    "examples": [
     {
      "en": "adults and children alike",
      "ko": "성인과 어린이 똑같이"
     },
     {
      "en": "older and newer models alike",
      "ko": "오래된 모델과 새로운 모델들 모두"
     }
    ],
    "quiz": {
     "sentence": "The Palm Springs resort has an extensive range of amenities, making it the perfect choice for families and solo travelers ------.",
     "a": "only",
     "b": "alike",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 15,
    "word": "altogether",
    "pos": "ad.",
    "meaning": "완전히, 한꺼번에",
    "derivatives": [],
    "examples": [
     {
      "en": "eliminate the rules altogether",
      "ko": "규정들을 완전히 없애다"
     }
    ],
    "quiz": {
     "sentence": "The owner of Belmont Bistro has decided to remove the squid dish ------ after receiving feedback from numerous dissatisfied customers.",
     "a": "altogether",
     "b": "beyond",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 16,
    "word": "routinely",
    "pos": "ad.",
    "meaning": "정기적으로, 일상적으로",
    "derivatives": [
     {
      "word": "routine",
      "pos": "a.",
      "meaning": "정기적인, 일상적인"
     }
    ],
    "examples": [
     {
      "en": "routinely give hotel recommendations",
      "ko": "정기적으로 호텔 추천 정보를 주다"
     },
     {
      "en": "be cleaned routinely",
      "ko": "정기적으로 청소되다"
     }
    ],
    "quiz": {
     "sentence": "All communal areas in the apartment building are ------ cleaned by a skilled maintenance team twice per day.",
     "a": "routinely",
     "b": "vastly",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 17,
    "word": "additionally",
    "pos": "ad.",
    "meaning": "추가적으로, 게다가",
    "derivatives": [
     {
      "word": "addition",
      "pos": "n.",
      "meaning": "추가"
     },
     {
      "word": "additional",
      "pos": "a.",
      "meaning": "추가적인"
     }
    ],
    "examples": [
     {
      "en": "Passengers should present their tickets at the counter. Additionally, they must show their identification at security.",
      "ko": "탑승객들은 카운터에서 티켓을 제시해야 합니다. 추가적으로, 보안검색대에서 신분증을 보여주셔야 합니다."
     }
    ],
    "quiz": {
     "sentence": "Sign up for a membership to receive a 5 percent discount on all purchases. ------, becoming a member grants you free shipping on online orders.",
     "a": "Additionally",
     "b": "However",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 18,
    "word": "subsequently",
    "pos": "ad.",
    "meaning": "그 후에, 그 다음에",
    "derivatives": [
     {
      "word": "subsequent",
      "pos": "a.",
      "meaning": "다음의"
     }
    ],
    "examples": [
     {
      "en": "subsequently gain a share of the market",
      "ko": "그 후에 시장의 점유권을 얻다"
     },
     {
      "en": "be subsequently implemented by",
      "ko": "그 다음에 ~에 의해 시행되다"
     }
    ],
    "quiz": {
     "sentence": "Ms. Vardy impressed the board members during her interview and was ------ offered the position of CFO.",
     "a": "highly",
     "b": "subsequently",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 19,
    "word": "customarily",
    "pos": "ad.",
    "meaning": "관례상",
    "derivatives": [],
    "examples": [
     {
      "en": "customarily visit the international offices",
      "ko": "관례상 해외 지사들을 방문하다"
     },
     {
      "en": "customarily receive a 15 percent discount on",
      "ko": "~에 대해서 관례상 15퍼센트 할인을 받다"
     }
    ],
    "quiz": {
     "sentence": "Guests checking in to a deluxe suite at The Pecan Hotel ------ receive a bottle of sparkling wine and a bowl of fruit.",
     "a": "customarily",
     "b": "perfectly",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 20,
    "word": "apparently",
    "pos": "ad.",
    "meaning": "명백하게",
    "derivatives": [
     {
      "word": "apparent",
      "pos": "a.",
      "meaning": "명백한"
     }
    ],
    "examples": [
     {
      "en": "be apparently interested in",
      "ko": "명백하게 ~에 관심을 가지고 있다"
     }
    ],
    "quiz": {
     "sentence": "Based on the feedback we have received, customers ------ like the new layout of our Web site.",
     "a": "apparently",
     "b": "briefly",
     "answer": "A"
    },
    "tip": "주로 Part 6에서 사실성을 강조하는 내용을 이끄는 접속부사로 사용된다."
   },
   {
    "no": 21,
    "word": "solely",
    "pos": "ad.",
    "meaning": "오로지, 단독으로",
    "derivatives": [],
    "examples": [
     {
      "en": "advertise solely in print",
      "ko": "오로지 인쇄물로만 광고하다"
     },
     {
      "en": "rely solely on",
      "ko": "~에 단독으로 의존하다"
     }
    ],
    "quiz": {
     "sentence": "Having very little experience in sales, Ms. Atkinson relied ------ on her knowledge of the company's product ranges to impress the interviewer.",
     "a": "formally",
     "b": "solely",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 22,
    "word": "traditionally",
    "pos": "ad.",
    "meaning": "전통적으로",
    "derivatives": [
     {
      "word": "traditional",
      "pos": "a.",
      "meaning": "전통적인"
     }
    ],
    "examples": [
     {
      "en": "be traditionally given to",
      "ko": "~에 전통적으로 수여되다"
     },
     {
      "en": "have traditionally alternated between",
      "ko": "전통적으로 ~ 사이를 번갈아 가다"
     }
    ],
    "quiz": {
     "sentence": "The annual Blueford Arts Festival is ------ held on the last weekend of September.",
     "a": "traditionally",
     "b": "positively",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 23,
    "word": "adequately",
    "pos": "ad.",
    "meaning": "제대로, 충분히",
    "derivatives": [
     {
      "word": "adequate",
      "pos": "a.",
      "meaning": "적절한, 충분한"
     }
    ],
    "examples": [
     {
      "en": "adequately address concerns",
      "ko": "우려 사항들을 제대로 처리하다"
     }
    ],
    "quiz": {
     "sentence": "The private dining room at Verona Restaurant will ------ meet our needs as the venue for the company banquet.",
     "a": "adequately",
     "b": "succinctly",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 24,
    "word": "quietly",
    "pos": "ad.",
    "meaning": "조용하게",
    "derivatives": [
     {
      "word": "quiet",
      "pos": "a.",
      "meaning": "조용한"
     }
    ],
    "examples": [
     {
      "en": "speak as quietly as possible",
      "ko": "가능한 한 조용하게 말하다"
     }
    ],
    "quiz": {
     "sentence": "If you wish to exit the auditorium during the seminar, please do so as ------ as possible.",
     "a": "quietly",
     "b": "slightly",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 25,
    "word": "explicitly",
    "pos": "ad.",
    "meaning": "명확하게",
    "derivatives": [
     {
      "word": "explicit",
      "pos": "a.",
      "meaning": "명확한"
     }
    ],
    "examples": [
     {
      "en": "Our warranty explicitly states that ~.",
      "ko": "저희 보증서는 ~라고 명확하게 명시하고 있습니다."
     },
     {
      "en": "be explicitly outlined",
      "ko": "명확하게 개요로 설명되다"
     }
    ],
    "quiz": {
     "sentence": "Our policy regarding returns and refunds is ------ detailed on our Web site.",
     "a": "explicitly",
     "b": "eventually",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 26,
    "word": "generally",
    "pos": "ad.",
    "meaning": "일반적으로",
    "derivatives": [],
    "examples": [
     {
      "en": "generally available year-round",
      "ko": "일반적으로 1년 내내 구매 가능한"
     },
     {
      "en": "generally take one day to process",
      "ko": "~을 처리하는 데 일반적으로 하루가 걸리다"
     }
    ],
    "quiz": {
     "sentence": "All orders placed through our Web site are ------ delivered within 48 hours of purchase.",
     "a": "generally",
     "b": "lightly",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 27,
    "word": "moderately",
    "pos": "ad.",
    "meaning": "적당히, 어느 정도",
    "derivatives": [
     {
      "word": "moderate",
      "pos": "a.",
      "meaning": "적당한"
     }
    ],
    "examples": [
     {
      "en": "be moderately successful at first",
      "ko": "처음에는 적당히 성공적이었다"
     },
     {
      "en": "have been only moderately successful in",
      "ko": "~에 있어서 어느 정도 성공했을 뿐이다"
     }
    ],
    "quiz": {
     "sentence": "Despite an extensive advertising campaign, the new game console has proven to be only ------ successful.",
     "a": "moderately",
     "b": "evenly",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 28,
    "word": "provisionally",
    "pos": "ad.",
    "meaning": "임시로, 조건부로",
    "derivatives": [],
    "examples": [
     {
      "en": "be provisionally appointed to serve as",
      "ko": "임시로 ~로 근무하도록 임명되다"
     },
     {
      "en": "provisionally accept the job offer",
      "ko": "조건부로 일자리 제안을 수락하다"
     }
    ],
    "quiz": {
     "sentence": "Simon Eggers has been ------ appointed as the leader of the new product development team.",
     "a": "provisionally",
     "b": "comparably",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 29,
    "word": "equally",
    "pos": "ad.",
    "meaning": "똑같이, 동등하게",
    "derivatives": [
     {
      "word": "equal",
      "pos": "a.",
      "meaning": "똑같은, 동등한"
     }
    ],
    "examples": [
     {
      "en": "be equally important to",
      "ko": "~에게 똑같이 중요하다"
     },
     {
      "en": "be equally suitable for",
      "ko": "동등하게 ~에 적합하다"
     }
    ],
    "quiz": {
     "sentence": "Strong leadership and a skilled workforce are ------ necessary in order for a business to be successful.",
     "a": "promptly",
     "b": "equally",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 30,
    "word": "exactly",
    "pos": "ad.",
    "meaning": "정확히",
    "derivatives": [
     {
      "word": "exact",
      "pos": "a.",
      "meaning": "정확한"
     }
    ],
    "examples": [
     {
      "en": "exactly what you are seeking",
      "ko": "정확히 귀하께서 찾는 것"
     },
     {
      "en": "do not know exactly why",
      "ko": "~한 이유를 정확히 알지 못하다"
     }
    ],
    "quiz": {
     "sentence": "The new play currently showing at Garfield Theater runs for ------ two hours.",
     "a": "exactly",
     "b": "timely",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 31,
    "word": "especially",
    "pos": "ad.",
    "meaning": "특히",
    "derivatives": [],
    "examples": [
     {
      "en": "would be especially helpful in",
      "ko": "~에서 특히 유용할 것이다"
     },
     {
      "en": "especially in the field of marketing",
      "ko": "특히 마케팅 분야에서"
     }
    ],
    "quiz": {
     "sentence": "Remote work is becoming increasingly common in several industries, ------ those focused on customer service and support.",
     "a": "especially",
     "b": "hardly",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 32,
    "word": "presently",
    "pos": "ad.",
    "meaning": "현재",
    "derivatives": [
     {
      "word": "present",
      "pos": "a.",
      "meaning": "현재의"
     }
    ],
    "examples": [
     {
      "en": "be presently conducting a survey",
      "ko": "현재 설문조사를 실시하고 있다"
     },
     {
      "en": "be presently accepting proposals for",
      "ko": "현재 ~에 대한 제안을 받고 있다"
     }
    ],
    "quiz": {
     "sentence": "A stage is ------ under construction in Davis Plaza in preparation for the city's annual festival.",
     "a": "presently",
     "b": "enormously",
     "answer": "A"
    },
    "tip": "주로 현재진행시제와 함께 출제된다."
   },
   {
    "no": 33,
    "word": "definitely",
    "pos": "ad.",
    "meaning": "분명(히)",
    "derivatives": [
     {
      "word": "definite",
      "pos": "a.",
      "meaning": "분명한"
     }
    ],
    "examples": [
     {
      "en": "will definitely reach their goal",
      "ko": "분명히 목표를 달성할 것이다"
     },
     {
      "en": "be definitely the best part of the book",
      "ko": "분명 그 책의 가장 좋았던 부분이다"
     }
    ],
    "quiz": {
     "sentence": "After canceling some appointments in her schedule, Ms. Jones will ------ be able to attend the shareholder meeting.",
     "a": "usually",
     "b": "definitely",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 34,
    "word": "extremely",
    "pos": "ad.",
    "meaning": "몹시, 극도로",
    "derivatives": [
     {
      "word": "extreme",
      "pos": "a.",
      "meaning": "극도의"
     }
    ],
    "examples": [
     {
      "en": "be extremely pleased to have won the award",
      "ko": "수상하게 되어 몹시 기쁘다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Allenby is ------ pleased with the landscaping work carried out by Perfect Gardens.",
     "a": "extremely",
     "b": "remotely",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 35,
    "word": "furthermore",
    "pos": "ad.",
    "meaning": "게다가, 또한",
    "derivatives": [],
    "examples": [
     {
      "en": "Our financial specialists provide consulting services for small businesses. Furthermore, our online services provide flexibility for our customers.",
      "ko": "저희 금융 전문가들은 소규모 기업체들에게 컨설팅 서비스를 제공합니다. 게다가, 저희의 온라인 서비스는 고객들에게 유연성을 제공하고 있습니다."
     }
    ],
    "quiz": {
     "sentence": "The new expressway provides a faster route between the airport and the downtown area. ------, it significantly reduces traffic congestion on local roads.",
     "a": "Furthermore",
     "b": "However",
     "answer": "A"
    },
    "tip": "Part 6에서 앞에 제시된 것과 유사한 내용을 추가하는 접속부사로 출제된다."
   },
   {
    "no": 36,
    "word": "completely",
    "pos": "ad.",
    "meaning": "완전히",
    "derivatives": [
     {
      "word": "complete",
      "pos": "a.",
      "meaning": "완전한"
     },
     {
      "word": "complete",
      "pos": "v.",
      "meaning": "완성하다"
     },
     {
      "word": "completion",
      "pos": "n.",
      "meaning": "완성"
     }
    ],
    "examples": [
     {
      "en": "be completely free of charge",
      "ko": "완전히 무료이다"
     },
     {
      "en": "be not completely reviewed until August",
      "ko": "8월이 되어서야 완전히 검토되다"
     }
    ],
    "quiz": {
     "sentence": "Beach towels are provided to all hotel guests ------ free of charge.",
     "a": "completely",
     "b": "occasionally",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 37,
    "word": "soon",
    "pos": "ad.",
    "meaning": "곧, 조만간",
    "derivatives": [],
    "examples": [
     {
      "en": "will be joining us soon",
      "ko": "곧 입사할 것이다"
     },
     {
      "en": "be expected to meet soon",
      "ko": "조만간 만날 것으로 예상되다"
     }
    ],
    "quiz": {
     "sentence": "Please direct any questions about the revised policy to the HR manager who will be contacting you ------.",
     "a": "yet",
     "b": "soon",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 38,
    "word": "properly",
    "pos": "ad.",
    "meaning": "제대로, 올바르게",
    "derivatives": [
     {
      "word": "proper",
      "pos": "a.",
      "meaning": "제대로 된, 올바른"
     }
    ],
    "examples": [
     {
      "en": "must be disposed of properly",
      "ko": "반드시 제대로 폐기되어야 하다"
     },
     {
      "en": "be properly installed",
      "ko": "올바르게 설치되다"
     }
    ],
    "quiz": {
     "sentence": "Assuming the air conditioning unit is ------ maintained, it should function effectively for at least 25 years.",
     "a": "properly",
     "b": "originally",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 39,
    "word": "occasionally",
    "pos": "ad.",
    "meaning": "가끔, 때때로",
    "derivatives": [
     {
      "word": "occasional",
      "pos": "a.",
      "meaning": "가끔의, 때때로의"
     }
    ],
    "examples": [
     {
      "en": "occasionally lower their price",
      "ko": "가끔 가격을 내리다"
     },
     {
      "en": "occasionally enter into agreement with",
      "ko": "때때로 ~와 합의를 이루다"
     }
    ],
    "quiz": {
     "sentence": "The fourth floor conference room is normally used for important client meetings, although it is ------ used for staff orientations.",
     "a": "marginally",
     "b": "occasionally",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 40,
    "word": "markedly",
    "pos": "ad.",
    "meaning": "눈에 띄게, 현저하게",
    "derivatives": [
     {
      "word": "marked",
      "pos": "a.",
      "meaning": "눈에 띄는, 현저한"
     }
    ],
    "examples": [
     {
      "en": "become markedly better",
      "ko": "눈에 띄게 더 나아지다"
     },
     {
      "en": "markedly successful",
      "ko": "현저하게 성공적인"
     }
    ],
    "quiz": {
     "sentence": "Customers have complained that the color of our new sofa is ------ different compared with the images on our Web site.",
     "a": "markedly",
     "b": "chiefly",
     "answer": "A"
    },
    "tip": ""
   }
  ]
 },
 {
  "week": 7,
  "day": 34,
  "part": "Part 5,6",
  "title": "동사 + 부사 콜로케이션",
  "words": [
   {
    "no": 1,
    "word": "proudly feature",
    "pos": "",
    "meaning": "자랑스럽게도 ~을 특별히 포함하다",
    "derivatives": [],
    "examples": [
     {
      "en": "proudly unveil",
      "ko": "자랑스럽게 ~을 공개하다"
     },
     {
      "en": "proudly carry",
      "ko": "자랑스럽게 ~을 취급하다"
     }
    ],
    "quiz": {
     "sentence": "The Seoul Music Festival will ------- feature many emerging singers this year.",
     "a": "greatly",
     "b": "proudly",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 2,
    "word": "be produced locally",
    "pos": "",
    "meaning": "지역에서 생산되다",
    "derivatives": [],
    "examples": [
     {
      "en": "buy vegetables locally",
      "ko": "채소를 지역에서 구매하다"
     }
    ],
    "quiz": {
     "sentence": "Mary's Bakery is proud to use fresh ingredients that are produced -------.",
     "a": "originally",
     "b": "locally",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 3,
    "word": "proceed directly to",
    "pos": "",
    "meaning": "~로 곧장 가다",
    "derivatives": [],
    "examples": [
     {
      "en": "send A directly to",
      "ko": "A를 ~에게 곧장 전송하다"
     },
     {
      "en": "be shipped directly from our warehouse",
      "ko": "우리 창고에서 곧장 발송되다"
     }
    ],
    "quiz": {
     "sentence": "Once you arrive at the main gate of our building, please proceed ------- to the security desk.",
     "a": "directly",
     "b": "closely",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 4,
    "word": "respond promptly to",
    "pos": "",
    "meaning": "~에 즉시 반응하다",
    "derivatives": [],
    "examples": [
     {
      "en": "register promptly",
      "ko": "즉시 등록하다"
     },
     {
      "en": "be submitted promptly",
      "ko": "즉시 제출되다"
     }
    ],
    "quiz": {
     "sentence": "Customer care associates must respond ------- to all the concerns of customers and resolve any issues with care.",
     "a": "generally",
     "b": "promptly",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 5,
    "word": "previously unavailable",
    "pos": "",
    "meaning": "전에는 이용할 수 없었던",
    "derivatives": [],
    "examples": [
     {
      "en": "previously offered to",
      "ko": "전에는 ~에게 제공되었던"
     },
     {
      "en": "previously worked in",
      "ko": "전에는 ~에서 일했던"
     }
    ],
    "quiz": {
     "sentence": "Food delivery services by drones, ------- unavailable due to government regulations, are now gaining in popularity.",
     "a": "previously",
     "b": "currently",
     "answer": "A"
    },
    "tip": "부사 previously는 Part 6에서 접속부사로도 자주 출제된다."
   },
   {
    "no": 6,
    "word": "travel quickly",
    "pos": "",
    "meaning": "빠르게 이동하다",
    "derivatives": [],
    "examples": [
     {
      "en": "proceed quickly",
      "ko": "빠르게 진행되다"
     },
     {
      "en": "quickly sell out",
      "ko": "빠르게 매진되다"
     },
     {
      "en": "move quickly",
      "ko": "빠르게 이동하다"
     }
    ],
    "quiz": {
     "sentence": "Now that we have added more express lines, commuters can travel ------- to their destinations.",
     "a": "quickly",
     "b": "shortly",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 7,
    "word": "carefully inspect",
    "pos": "",
    "meaning": "신중하게 검사하다",
    "derivatives": [],
    "examples": [
     {
      "en": "examine A carefully",
      "ko": "A를 신중하게 검사하다"
     },
     {
      "en": "carefully remove",
      "ko": "신중하게 제거하다"
     }
    ],
    "quiz": {
     "sentence": "We are proud of our zero defect policy in our factories, where employees ------- inspect all of our products.",
     "a": "exactly",
     "b": "carefully",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 8,
    "word": "monitor closely",
    "pos": "",
    "meaning": "자세히 관찰하다",
    "derivatives": [],
    "examples": [
     {
      "en": "closely read",
      "ko": "자세히 읽다"
     },
     {
      "en": "work closely with",
      "ko": "~와 긴밀하게 일하다"
     }
    ],
    "quiz": {
     "sentence": "The performance of interns at the newspaper company is ------- monitored by its senior editorial staff.",
     "a": "substantially",
     "b": "closely",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 9,
    "word": "rise considerably",
    "pos": "",
    "meaning": "상당히 상승하다",
    "derivatives": [],
    "examples": [
     {
      "en": "vary considerably",
      "ko": "상당히 다양하다"
     },
     {
      "en": "expand considerably",
      "ko": "상당히 확장되다"
     }
    ],
    "quiz": {
     "sentence": "Sales of Trine Automotive's new hybrid sedan have been ------- rising thanks to the car's high fuel efficiency.",
     "a": "considerably",
     "b": "deeply",
     "answer": "A"
    },
    "tip": "부사 considerably는 주로 증감이나 변화를 나타내는 동사들과 함께 쓰여 very처럼 수량이나 정도가 크다는 것을 나타낸다. 형용사를 수식할 때는 주로 비교급과 함께 쓰인다."
   },
   {
    "no": 10,
    "word": "go smoothly",
    "pos": "",
    "meaning": "순조롭게 진행되다",
    "derivatives": [],
    "examples": [
     {
      "en": "progress smoothly",
      "ko": "순조롭게 진행되다"
     },
     {
      "en": "run smoothly",
      "ko": "부드럽게 작동하다"
     }
    ],
    "quiz": {
     "sentence": "Thanks to Ms. Chamberline's assistance, my transition to London went -------.",
     "a": "personally",
     "b": "smoothly",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 11,
    "word": "thoroughly investigate",
    "pos": "",
    "meaning": "철저하게 조사하다",
    "derivatives": [],
    "examples": [
     {
      "en": "thoroughly examine",
      "ko": "철저하게 검사하다"
     },
     {
      "en": "thoroughly wash",
      "ko": "철저하게 세척하다"
     }
    ],
    "quiz": {
     "sentence": "A team of government inspectors is ------- investigating all potential causes of the accident at the construction site.",
     "a": "hopefully",
     "b": "thoroughly",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 12,
    "word": "strongly encourage",
    "pos": "",
    "meaning": "강력하게 권고하다",
    "derivatives": [],
    "examples": [
     {
      "en": "speak strongly",
      "ko": "강력하게 말하다"
     },
     {
      "en": "strongly agree with",
      "ko": "~에 전적으로 동의하다"
     }
    ],
    "quiz": {
     "sentence": "Due to scheduled repair work, motorists are ------- encouraged to avoid the Campton Bridge this afternoon.",
     "a": "closely",
     "b": "strongly",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 13,
    "word": "temporarily close",
    "pos": "",
    "meaning": "일시적으로 폐쇄하다",
    "derivatives": [],
    "examples": [
     {
      "en": "temporarily halt",
      "ko": "일시적으로 중단하다"
     },
     {
      "en": "temporarily out of stock",
      "ko": "일시적으로 품절된"
     },
     {
      "en": "temporarily unavailable",
      "ko": "일시적으로 이용할 수 없는"
     }
    ],
    "quiz": {
     "sentence": "Residents are reminded that Madison Park is ------- closed due to flooding since Friday.",
     "a": "temporarily",
     "b": "potentially",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 14,
    "word": "rise dramatically",
    "pos": "",
    "meaning": "급격히 상승하다",
    "derivatives": [],
    "examples": [
     {
      "en": "increase dramatically",
      "ko": "급격히 증가하다"
     },
     {
      "en": "dramatically affect",
      "ko": "상당한 영향을 미치다"
     }
    ],
    "quiz": {
     "sentence": "Sales of the Vision Pro VR device have ------- rose since the manufacturer released a well-received game.",
     "a": "accidentally",
     "b": "dramatically",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 15,
    "word": "rapidly expand",
    "pos": "",
    "meaning": "빠르게 확장하다",
    "derivatives": [],
    "examples": [
     {
      "en": "rapidly grow",
      "ko": "빠르게 성장하다"
     },
     {
      "en": "progress rapidly",
      "ko": "빠르게 진행되다"
     },
     {
      "en": "rapidly approach",
      "ko": "빠르게 접근하다"
     }
    ],
    "quiz": {
     "sentence": "Rayon Electronics announced that it doubled its revenue this year while ------- expanding into the Asian electric vehicle markets.",
     "a": "rapidly",
     "b": "highly",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 16,
    "word": "be conveniently located",
    "pos": "",
    "meaning": "편리하게 위치해 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "be conveniently situated in the city",
      "ko": "도시에 편리하게 위치해 있다"
     },
     {
      "en": "be conveniently accessible by bus",
      "ko": "버스로 편리하게 접근 가능하다"
     }
    ],
    "quiz": {
     "sentence": "The venue for the upcoming convention is ------- located near the local airport, which is also close to your hotel.",
     "a": "regularly",
     "b": "conveniently",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 17,
    "word": "significantly increase",
    "pos": "",
    "meaning": "상당히 증가시키다",
    "derivatives": [],
    "examples": [
     {
      "en": "significantly speed up",
      "ko": "상당히 속도를 높이다"
     },
     {
      "en": "be significantly changed",
      "ko": "상당히 변경되다"
     }
    ],
    "quiz": {
     "sentence": "The new version of our accounting software would ------- increase our work efficiency and accuracy.",
     "a": "significantly",
     "b": "proficiently",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 18,
    "word": "fasten tightly",
    "pos": "",
    "meaning": "단단하게 고정하다",
    "derivatives": [],
    "examples": [
     {
      "en": "fit tightly",
      "ko": "딱 맞다"
     },
     {
      "en": "be screwed on tightly",
      "ko": "나사로 단단하게 고정되다"
     },
     {
      "en": "press A tightly",
      "ko": "A를 힘껏 누르다"
     }
    ],
    "quiz": {
     "sentence": "When you replace the filter, please turn it clockwise until it is ------- fastened.",
     "a": "tightly",
     "b": "steadily",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 19,
    "word": "be tentatively scheduled",
    "pos": "",
    "meaning": "임시로 일정이 잡히다",
    "derivatives": [],
    "examples": [
     {
      "en": "tentatively reschedule",
      "ko": "임시로 일정을 재조정하다"
     }
    ],
    "quiz": {
     "sentence": "The Annual Medical Technology Convention has been ------- scheduled for the first weekend of September.",
     "a": "tentatively",
     "b": "punctually",
     "answer": "A"
    },
    "tip": "부사 tentatively는 temporarily와 바꿔 쓸 수 있다."
   },
   {
    "no": 20,
    "word": "officially assume",
    "pos": "",
    "meaning": "공식적으로 (역할을) 맡다",
    "derivatives": [],
    "examples": [
     {
      "en": "officially begin",
      "ko": "공식적으로 시작하다"
     },
     {
      "en": "officially open",
      "ko": "정식으로 개장하다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Hill has ------- assumed the role of project manager and is in the process of selecting individuals to join his team.",
     "a": "officially",
     "b": "extremely",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 21,
    "word": "be urgently needed",
    "pos": "",
    "meaning": "긴급히 필요하다",
    "derivatives": [],
    "examples": [
     {
      "en": "be urgently seeking",
      "ko": "긴급히 찾고 있다"
     }
    ],
    "quiz": {
     "sentence": "Now that the demand for our new SUV has doubled, overtime is ------- needed from our assembly line workers.",
     "a": "closely",
     "b": "urgently",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 22,
    "word": "securely store",
    "pos": "",
    "meaning": "안전하게 보관하다",
    "derivatives": [],
    "examples": [
     {
      "en": "be placed securely",
      "ko": "안전한 곳에 놓아두다"
     },
     {
      "en": "be securely fastened",
      "ko": "단단히 고정되다"
     },
     {
      "en": "attach A securely to B",
      "ko": "A를 B에 확실히 부착하다"
     }
    ],
    "quiz": {
     "sentence": "Customers must make sure that their belongings are ------- stored in the lockers we provide.",
     "a": "securely",
     "b": "severely",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 23,
    "word": "be formally announced",
    "pos": "",
    "meaning": "정식으로 발표되다",
    "derivatives": [],
    "examples": [
     {
      "en": "be formally introduced",
      "ko": "정식으로 소개되다"
     },
     {
      "en": "formally open",
      "ko": "정식으로 개장하다"
     }
    ],
    "quiz": {
     "sentence": "Ms. Hanning's promotion will be ------- announced at a board meeting sometime next week.",
     "a": "primarily",
     "b": "formally",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 24,
    "word": "respond favorably",
    "pos": "",
    "meaning": "호의적으로 반응하다",
    "derivatives": [],
    "examples": [
     {
      "en": "react favorably to",
      "ko": "~에 호의적으로 반응하다"
     },
     {
      "en": "be viewed favorably",
      "ko": "호평을 받다"
     }
    ],
    "quiz": {
     "sentence": "Lions Telecommunication has always responded ------- to customer requests for improved services.",
     "a": "probably",
     "b": "favorably",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 25,
    "word": "regularly check",
    "pos": "",
    "meaning": "정기적으로 확인하다",
    "derivatives": [],
    "examples": [
     {
      "en": "regularly order",
      "ko": "정기적으로 주문하다"
     },
     {
      "en": "regularly participate in",
      "ko": "~에 정기적으로 참가하다"
     },
     {
      "en": "be regularly shipped",
      "ko": "정기적으로 배송되다"
     }
    ],
    "quiz": {
     "sentence": "All employees must ------- check their hard drives for viruses to ensure that important files are protected.",
     "a": "regularly",
     "b": "mainly",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 26,
    "word": "be known widely",
    "pos": "",
    "meaning": "널리 알려지다",
    "derivatives": [],
    "examples": [
     {
      "en": "be widely respected",
      "ko": "널리 존경받다"
     },
     {
      "en": "be widely recognized as",
      "ko": "~로 널리 인정받다"
     }
    ],
    "quiz": {
     "sentence": "Simcom Systems Inc. has been known ------- as the most innovative computer manufacturer for more than 30 years.",
     "a": "widely",
     "b": "smartly",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 27,
    "word": "process efficiently",
    "pos": "",
    "meaning": "효율적으로 처리하다",
    "derivatives": [],
    "examples": [
     {
      "en": "run a business efficiently",
      "ko": "사업을 효율적으로 운영하다"
     },
     {
      "en": "produce goods efficiently",
      "ko": "상품을 효율적으로 생산하다"
     },
     {
      "en": "track shipments efficiently",
      "ko": "배송을 효율적으로 추적하다"
     }
    ],
    "quiz": {
     "sentence": "Our improved e-commerce software will help your employees process customer orders more -------.",
     "a": "efficiently",
     "b": "knowingly",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 28,
    "word": "be strictly forbidden",
    "pos": "",
    "meaning": "엄격히 금지되다",
    "derivatives": [],
    "examples": [
     {
      "en": "be strictly prohibited",
      "ko": "엄격히 금지되다"
     },
     {
      "en": "be strictly followed",
      "ko": "엄격히 준수되다"
     },
     {
      "en": "be strictly controlled",
      "ko": "엄격히 통제되다"
     }
    ],
    "quiz": {
     "sentence": "It is our policy that food and beverages are ------- forbidden in the Aberdeen Historical Museum.",
     "a": "strictly",
     "b": "hastily",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 29,
    "word": "mistakenly believe",
    "pos": "",
    "meaning": "착각하다",
    "derivatives": [],
    "examples": [
     {
      "en": "mistakenly think",
      "ko": "잘못 생각하다"
     },
     {
      "en": "mistakenly delete",
      "ko": "실수로 삭제하다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Horton ------- believed that the order had already been processed.",
     "a": "mistakenly",
     "b": "fortunately",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 30,
    "word": "enthusiastically applaud",
    "pos": "",
    "meaning": "열렬히 환호하다",
    "derivatives": [],
    "examples": [
     {
      "en": "enthusiastically welcome",
      "ko": "열렬히 환영하다"
     },
     {
      "en": "enthusiastically approve",
      "ko": "흔쾌히 승인하다"
     },
     {
      "en": "enthusiastically announce",
      "ko": "아주 기쁜 마음으로 발표하다"
     }
    ],
    "quiz": {
     "sentence": "The audience ------- applauded the White Lions at the end of the performance.",
     "a": "probably",
     "b": "enthusiastically",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 31,
    "word": "actively seek",
    "pos": "",
    "meaning": "적극적으로 찾다",
    "derivatives": [],
    "examples": [
     {
      "en": "actively promote",
      "ko": "적극적으로 홍보하다"
     },
     {
      "en": "be actively engaged in",
      "ko": "~에 적극적으로 참여하다"
     }
    ],
    "quiz": {
     "sentence": "Hondix Automotive is ------- seeking new methods for reducing energy consumption in its vehicles.",
     "a": "actively",
     "b": "lately",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 32,
    "word": "successfully complete",
    "pos": "",
    "meaning": "성공적으로 완료하다",
    "derivatives": [],
    "examples": [
     {
      "en": "successfully manage",
      "ko": "성공적으로 관리하다"
     },
     {
      "en": "successfully negotiate",
      "ko": "성공적으로 협상하다"
     }
    ],
    "quiz": {
     "sentence": "Mr. Harrison ------- completed the long-term maintenance contract with Heritage Global Inc.",
     "a": "directly",
     "b": "successfully",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 33,
    "word": "effectively communicate",
    "pos": "",
    "meaning": "효과적으로 소통하다",
    "derivatives": [],
    "examples": [
     {
      "en": "deal with effectively",
      "ko": "효과적으로 처리하다"
     },
     {
      "en": "effectively manage",
      "ko": "효과적으로 관리하다"
     },
     {
      "en": "effectively market",
      "ko": "효과적으로 광고하다"
     }
    ],
    "quiz": {
     "sentence": "Many entertainment companies use social networking services to ------- communicate with their potential customers.",
     "a": "effectively",
     "b": "formerly",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 34,
    "word": "substantially reduce",
    "pos": "",
    "meaning": "상당히 줄이다",
    "derivatives": [],
    "examples": [
     {
      "en": "increase employee productivity substantially",
      "ko": "직원 생산성을 상당히 향상시키다"
     },
     {
      "en": "substantially expand its coverage",
      "ko": "보장범위를 상당히 확대하다"
     }
    ],
    "quiz": {
     "sentence": "Our new sports beverage, PowerBottle, can help you ------- reduce your weight while keeping your energy levels high.",
     "a": "unnecessarily",
     "b": "substantially",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 35,
    "word": "be accidentally discovered",
    "pos": "",
    "meaning": "우연히 발견되다",
    "derivatives": [],
    "examples": [
     {
      "en": "accidentally delete",
      "ko": "우연히 삭제하다"
     }
    ],
    "quiz": {
     "sentence": "An ancient residential site was ------- discovered during the construction of a sports stadium.",
     "a": "urgently",
     "b": "accidentally",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 36,
    "word": "politely ask for",
    "pos": "",
    "meaning": "정중하게 ~을 요청하다",
    "derivatives": [],
    "examples": [
     {
      "en": "politely offer",
      "ko": "정중하게 제안하다"
     },
     {
      "en": "speak politely",
      "ko": "예의 바르게 말하다"
     }
    ],
    "quiz": {
     "sentence": "Upon arriving at the hotel, Mr. Forster ------- asked for a larger room.",
     "a": "politely",
     "b": "regularly",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 37,
    "word": "rise sharply",
    "pos": "",
    "meaning": "급격히 상승하다",
    "derivatives": [],
    "examples": [
     {
      "en": "fall sharply",
      "ko": "급격히 하락하다"
     }
    ],
    "quiz": {
     "sentence": "The recent hiring of temporary workers has had a positive impact on productivity, which is now rising -------.",
     "a": "sharply",
     "b": "accurately",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 38,
    "word": "vote unanimously",
    "pos": "",
    "meaning": "만장일치로 투표하다",
    "derivatives": [],
    "examples": [
     {
      "en": "unanimously approve",
      "ko": "만장일치로 승인하다"
     }
    ],
    "quiz": {
     "sentence": "The board members voted ------- to appoint Ms. Chadwick as the new Chief Operating Officer.",
     "a": "wishfully",
     "b": "unanimously",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 39,
    "word": "be periodically updated",
    "pos": "",
    "meaning": "주기적으로 갱신되다",
    "derivatives": [],
    "examples": [
     {
      "en": "be adjusted periodically",
      "ko": "주기적으로 조정되다"
     },
     {
      "en": "check the inventory periodically",
      "ko": "재고를 주기적으로 확인하다"
     }
    ],
    "quiz": {
     "sentence": "Please be reminded that during peak seasons, our room rates are ------- updated based on availability.",
     "a": "recently",
     "b": "periodically",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 40,
    "word": "gradually expand",
    "pos": "",
    "meaning": "점진적으로 확장하다",
    "derivatives": [],
    "examples": [
     {
      "en": "replace A gradually",
      "ko": "점진적으로 A를 교체하다"
     },
     {
      "en": "gradually phase out",
      "ko": "점차 단계적으로 폐지하다"
     }
    ],
    "quiz": {
     "sentence": "Rather than hiring twenty employees next month, the HR manager has suggested expanding the workforce ------- over the next six months.",
     "a": "potentially",
     "b": "gradually",
     "answer": "B"
    },
    "tip": ""
   }
  ]
 },
 {
  "week": 7,
  "day": 35,
  "part": "Part 7",
  "title": "독해가 쉬워지는 어휘 ③",
  "words": [
   {
    "no": 1,
    "word": "call in sick",
    "pos": "",
    "meaning": "아파서 결근하다",
    "derivatives": [],
    "examples": [
     {
      "en": "Can anyone come in to work this morning? We have a huge order to fill, and two employees scheduled for today have called in sick.",
      "ko": "오늘 아침에 출근할 수 있는 사람이 있나요? 채워야 하는 주문량이 너무 많은데, 오늘 근무 예정인 직원 두 명이 아파서 결근을 했습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 2,
    "word": "publicize",
    "pos": "v.",
    "meaning": "~을 홍보하다",
    "derivatives": [],
    "examples": [
     {
      "en": "The marketing team worked very hard to publicize the newly launched product and ensure it gains widespread attention in the market.",
      "ko": "마케팅팀은 새로 출시된 제품을 홍보하고 그 제품이 시장에서 폭넓은 관심을 끌도록 하기 위해 열심히 노력했습니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\npublic relations 홍보 (활동)"
   },
   {
    "no": 3,
    "word": "honor",
    "pos": "v. / n.",
    "meaning": "v. ~에게 영광을 베풀다, 수여하다 / n. 존경, 공경",
    "derivatives": [],
    "examples": [
     {
      "en": "The company honored Ms. Rodriguez with a prize for her outstanding sales achievements during the annual reception.",
      "ko": "회사는 매년 열리는 연회에서 로드리게즈 씨의 뛰어난 판매 성과에 대해 상을 수여했습니다."
     }
    ],
    "quiz": null,
    "tip": "기출 Paraphrasing\n위 예문의 내용을 한 문장으로 She was given an award.(상을 받았다.)와 같이 표현할 수 있습니다."
   },
   {
    "no": 4,
    "word": "close a deal",
    "pos": "",
    "meaning": "계약을 체결하다, 거래를 성사시키다",
    "derivatives": [
     {
      "word": "deal",
      "pos": "n.",
      "meaning": "거래, 계약"
     }
    ],
    "examples": [
     {
      "en": "After months of negotiations, we successfully closed a deal with BJ Capital.",
      "ko": "수개월 간의 협상 끝에 BJ 캐피탈 사와 성공적으로 계약을 체결하였습니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\nnegotiate a deal 거래를 협상하다"
   },
   {
    "no": 5,
    "word": "well-suited",
    "pos": "a.",
    "meaning": "적합한, 잘 어울리는",
    "derivatives": [],
    "examples": [
     {
      "en": "Ms. Lane's strong communication skills and attention to detail make her well-suited for the role of project manager.",
      "ko": "레인 씨의 훌륭한 의사소통 능력과 세부사항에 대한 주의는 그녀를 프로젝트 매니저의 역할에 적합하게 합니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 6,
    "word": "hiring decision",
    "pos": "",
    "meaning": "채용 결정",
    "derivatives": [],
    "examples": [
     {
      "en": "In our company, hiring decisions require unanimous approval from the hiring committee.",
      "ko": "우리 회사에서, 채용 결정을 하려면 채용 위원회의 만장일치 승인이 필요합니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 7,
    "word": "good fit",
    "pos": "",
    "meaning": "적임자, 꼭 맞는 것",
    "derivatives": [],
    "examples": [
     {
      "en": "When making hiring decisions, we consider whether the candidate is a good fit for our long-term goals.",
      "ko": "채용 결정을 할 때, 우리는 그 지원자가 우리의 장기적인 목표에 적임자인지를 고려합니다."
     }
    ],
    "quiz": null,
    "tip": "기출 Paraphrasing\ngood fit → perfect candidate (가장 훌륭한 후보)"
   },
   {
    "no": 8,
    "word": "work ethic",
    "pos": "",
    "meaning": "직업의식, 근면함",
    "derivatives": [],
    "examples": [
     {
      "en": "Jane's strong work ethic is evident in her dedication to completing tasks ahead of schedule.",
      "ko": "제인의 강한 직업의식은 예정보다 빨리 일을 완수하려는 그녀의 헌신에서 잘 드러납니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 9,
    "word": "invaluable",
    "pos": "a.",
    "meaning": "귀중한, 매우 유용한",
    "derivatives": [],
    "examples": [
     {
      "en": "The mentorship I received from my supervisor during my early career was invaluable in shaping my professional development.",
      "ko": "경력 초기에 상사로부터 받은 멘토링은 저의 직업적 발전을 형성하는 데 매우 유용하였습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 10,
    "word": "be nominated",
    "pos": "",
    "meaning": "(수상) 후보자로 지명되다",
    "derivatives": [
     {
      "word": "nominee",
      "pos": "n.",
      "meaning": "지명된 사람, 후보"
     }
    ],
    "examples": [
     {
      "en": "The CEO has been nominated for the Business Leader of the Year Award, recognizing her outstanding leadership qualities.",
      "ko": "그 CEO는 올해의 비즈니스 리더 상 후보에 올랐는데, 이는 그녀의 뛰어난 리더십 자질을 인정하는 것입니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\nnominate A for B A를 B의 후보로 지명하다, 추천하다"
   },
   {
    "no": 11,
    "word": "probationary period",
    "pos": "",
    "meaning": "수습 기간, 시험 채용 기간",
    "derivatives": [],
    "examples": [
     {
      "en": "The probationary period typically lasts for three months, during which employees receive training and feedback.",
      "ko": "수습 기간은 일반적으로 3개월 동안 지속되며, 이 기간 동안 직원들은 교육과 피드백을 받습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 12,
    "word": "supervise",
    "pos": "v.",
    "meaning": "~을 관리 감독하다",
    "derivatives": [
     {
      "word": "supervisor",
      "pos": "n.",
      "meaning": "감독관, 관리자"
     }
    ],
    "examples": [
     {
      "en": "The project manager will supervise the construction project, ensuring it stays on schedule and within budget.",
      "ko": "프로젝트 관리자는 건설 프로젝트가 일정대로, 그리고 예산 내에서 유지되도록 감독할 것입니다."
     }
    ],
    "quiz": null,
    "tip": "기출 Paraphrasing\nsupervise → oversee (관리 감독하다)"
   },
   {
    "no": 13,
    "word": "referral",
    "pos": "n.",
    "meaning": "소개, 추천(서), 위탁",
    "derivatives": [],
    "examples": [
     {
      "en": "His referral letter from a previous employer praised his strong work ethic, boosting his chances of landing the job.",
      "ko": "이전 고용주가 보낸 그의 추천서는 그의 강한 직업의식을 칭찬했고, 이것은 그의 취업 기회를 증진시켰습니다."
     }
    ],
    "quiz": null,
    "tip": "서비스나 업체 등을 추천하는 것도 referral이라고 표현합니다."
   },
   {
    "no": 14,
    "word": "turnout",
    "pos": "n.",
    "meaning": "참가자의 수, 참석률",
    "derivatives": [],
    "examples": [
     {
      "en": "The turnout at the charity event exceeded our expectations, with hundreds of people in attendance.",
      "ko": "수백 명이 참석한 가운데 자선 행사의 참석률은 우리의 예상을 뛰어넘었습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 15,
    "word": "outing",
    "pos": "n.",
    "meaning": "야유회, 나들이",
    "derivatives": [],
    "examples": [
     {
      "en": "Everyone was looking forward to the annual company outing, which included a picnic and games at the park.",
      "ko": "모두가 매년 열리는 회사 야유회를 고대하고 있었는데, 그것은 소풍과 공원에서의 게임을 포함합니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 16,
    "word": "flexible",
    "pos": "a.",
    "meaning": "융통성 있는",
    "derivatives": [
     {
      "word": "flexibility",
      "pos": "n.",
      "meaning": "융통성"
     }
    ],
    "examples": [
     {
      "en": "Many companies are adopting flexible work arrangements, allowing employees to choose their hours and workplace location.",
      "ko": "많은 기업들이 유연한 근무 방식을 채택하여 직원들이 근무 시간과 근무 장소를 선택할 수 있도록 하고 있습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 17,
    "word": "duration",
    "pos": "n.",
    "meaning": "(지속되는) 기간",
    "derivatives": [],
    "examples": [
     {
      "en": "Visitors will be provided with temporary ID badges to wear throughout the duration of their visits to our factory.",
      "ko": "방문객들에게는 공장 방문 기간 동안 착용할 임시 신분증 배지가 제공될 것입니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 18,
    "word": "time slot",
    "pos": "",
    "meaning": "시간대",
    "derivatives": [],
    "examples": [
     {
      "en": "Attendees can sign up for their preferred time slot for the workshop on a first-come, first-served basis.",
      "ko": "참가자들은 선착순으로 워크숍에 선호하는 시간대에 등록할 수 있습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 19,
    "word": "fill up",
    "pos": "",
    "meaning": "자리가 차다",
    "derivatives": [],
    "examples": [
     {
      "en": "The conference room quickly filled up with attendees eager to hear the keynote speaker.",
      "ko": "회의실은 기조연설자의 말을 듣고 싶어 하는 참석자들로 순식간에 가득 찼습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 20,
    "word": "up front",
    "pos": "",
    "meaning": "선불로",
    "derivatives": [],
    "examples": [
     {
      "en": "I appreciate your services and am willing to pay you up front for the project to expedite the process.",
      "ko": "귀하의 서비스에 감사드리며, 프로젝트 진행 속도를 높이기 위해 기까이 선불로 비용을 지불하겠습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 21,
    "word": "award-winning",
    "pos": "a.",
    "meaning": "상을 받은",
    "derivatives": [],
    "examples": [
     {
      "en": "The award-winning marketing campaign significantly boosted our brand's visibility and sales.",
      "ko": "상을 받은 그 마케팅 캠페인은 우리 브랜드의 인지도와 매출을 크게 높였습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 22,
    "word": "praise",
    "pos": "v. / n.",
    "meaning": "v. ~을 칭찬하다 / n. 찬사, 칭찬",
    "derivatives": [],
    "examples": [
     {
      "en": "The CEO praised the marketing department for their innovative campaigns that led us to exceed our sales goals for the year.",
      "ko": "CEO는 마케팅 부서의 혁신적인 캠페인으로 인해 올해 영업 목표를 초과 달성했다고 그 부서를 칭찬했습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 23,
    "word": "benefits",
    "pos": "n.",
    "meaning": "복리 후생",
    "derivatives": [
     {
      "word": "benefit",
      "pos": "n.",
      "meaning": "혜택"
     },
     {
      "word": "benefit",
      "pos": "v.",
      "meaning": "~에게 이득이 되다"
     }
    ],
    "examples": [
     {
      "en": "Once the probationary three months are completed, workers will be eligible for full employee benefits.",
      "ko": "수습 3개월이 끝나면, 직원들은 모든 직원 복리 후생을 받을 자격을 갖추게 될 것입니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 24,
    "word": "in-house",
    "pos": "a.",
    "meaning": "사내의",
    "derivatives": [],
    "examples": [
     {
      "en": "We boast an in-house design team that excels in transforming ideas into visually compelling graphics.",
      "ko": "저희는 아이디어를 시각적으로 매력적인 그래픽으로 바꾸는 일에 탁월한 사내 디자인 팀을 보유하고 있습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 25,
    "word": "take on / take over",
    "pos": "",
    "meaning": "떠맡다, 인계받다",
    "derivatives": [],
    "examples": [
     {
      "en": "Despite her busy schedule, she took on more responsibilities at work to prove her dedication.",
      "ko": "바쁜 스케줄에도 불구하고, 그녀는 자신의 헌신을 증명하기 위해 직장에서 더 많은 책임을 맡았습니다."
     }
    ],
    "quiz": null,
    "tip": "기출 Paraphrasing\ntake on[over] → assume (떠맡다), accept (받아들이다)"
   },
   {
    "no": 26,
    "word": "qualifications",
    "pos": "n.",
    "meaning": "자격 요건",
    "derivatives": [
     {
      "word": "qualified",
      "pos": "a.",
      "meaning": "자격을 갖춘"
     }
    ],
    "examples": [
     {
      "en": "After considering the candidates' work experience and qualifications, the directors recommended Ms. Wong for the position.",
      "ko": "지원자들의 근무 경력과 자격 요건을 고려한 후에, 이사들은 웡 씨를 그 직책에 추천했습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 27,
    "word": "possess",
    "pos": "v.",
    "meaning": "~을 갖추다",
    "derivatives": [
     {
      "word": "possession",
      "pos": "n.",
      "meaning": "소유"
     }
    ],
    "examples": [
     {
      "en": "Applicants for the position of communications officer must possess a master's degree in marketing or a related field.",
      "ko": "커뮤니케이션 책임자의 직책에 지원하는 사람들은 마케팅 또는 관련 분야에서 석사 학위를 소지해야 합니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 28,
    "word": "compensation package",
    "pos": "",
    "meaning": "(급여와 복리후생을 포함한) 총 보수",
    "derivatives": [],
    "examples": [
     {
      "en": "The company's generous compensation package includes health insurance, retirement plans, and paid time off.",
      "ko": "회사의 후한 총 보수에는 건강 보험, 퇴직금 제도, 그리고 유급 휴가가 포함되어 있습니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\nperks n. (급료 이외의) 특전"
   },
   {
    "no": 29,
    "word": "responsibilities [duties/tasks] include",
    "pos": "",
    "meaning": "업무에는 ~이 포함된다",
    "derivatives": [],
    "examples": [
     {
      "en": "As the project manager, your responsibilities include overseeing the project timeline, coordinating team efforts, and ensuring that project objectives are met.",
      "ko": "프로젝트 관리자로서, 여러분의 업무에는 프로젝트 일정을 감독하고, 팀 작업을 조정하며, 프로젝트 목표가 달성되도록 하는 것이 포함됩니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 30,
    "word": "credentials",
    "pos": "n.",
    "meaning": "자격 인증서, 자격증",
    "derivatives": [],
    "examples": [
     {
      "en": "Based on your credentials, it's clear that you are highly qualified for the job.",
      "ko": "귀하의 자격 인증서들을 볼 때, 귀하는 그 일에 매우 적합한 사람임이 분명합니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\ncredit n. 인정, 칭찬"
   },
   {
    "no": 31,
    "word": "familiarize",
    "pos": "v.",
    "meaning": "~에 익숙하게 하다",
    "derivatives": [
     {
      "word": "familiar",
      "pos": "a.",
      "meaning": "익숙한, 친숙한"
     }
    ],
    "examples": [
     {
      "en": "New employees should familiarize themselves with the workplace safety guidelines before starting their job.",
      "ko": "신입 사원들은 업무를 시작하기 전에 작업장 안전 지침을 숙지해야 합니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 32,
    "word": "assure A that절",
    "pos": "",
    "meaning": "A에게 ~라는 확신을 주다",
    "derivatives": [],
    "examples": [
     {
      "en": "The CEO assured the employees that the company's merger would benefit them eventually.",
      "ko": "그 CEO는 회사의 합병이 결국 그들에게 이익이 될 것이라고 직원들에게 확신을 주었습니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\nRest assured, + 내용 ~라는 점에 대해 안심하셔도 됩니다.\nreassure ~을 안심시키다"
   },
   {
    "no": 33,
    "word": "morale",
    "pos": "n.",
    "meaning": "사기, 의욕",
    "derivatives": [],
    "examples": [
     {
      "en": "In order to boost employee morale, the company offered performance-based bonuses.",
      "ko": "직원들의 사기를 진작시키기 위해, 회사는 성과 기반 보너스를 제의했습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 34,
    "word": "seasoned",
    "pos": "a.",
    "meaning": "경험 많은, 숙련된",
    "derivatives": [],
    "examples": [
     {
      "en": "After years of experience in the industry, he was considered a seasoned professional in his field.",
      "ko": "업계에서의 수년간의 경험 후에, 그는 그의 분야에서 숙련된 전문가로 여겨졌습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 35,
    "word": "deserve",
    "pos": "v.",
    "meaning": "~을 받을 만하다, 누릴 자격이 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "After years of hard work and dedication, Ms. Perry rightfully deserves the promotion.",
      "ko": "수년간의 노력과 헌신 끝에, 페리 씨는 당연히 승진할 자격이 있습니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\nwell-deserved 충분한 자격이 있는"
   },
   {
    "no": 36,
    "word": "accept",
    "pos": "v.",
    "meaning": "~을 받아들이다, 수락하다",
    "derivatives": [
     {
      "word": "acceptable",
      "pos": "a.",
      "meaning": "받아들일 수 있는"
     }
    ],
    "examples": [
     {
      "en": "After careful consideration, I have decided to accept the position as the marketing manager at this company.",
      "ko": "심사숙고 끝에, 이 회사의 마케팅 매니저 자리를 수락하기로 했습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 37,
    "word": "indicate",
    "pos": "v.",
    "meaning": "~을 나타내다",
    "derivatives": [],
    "examples": [
     {
      "en": "Please sign and return the attached document indicating your willingness to accept the position as sales associate.",
      "ko": "판매원직 수락 의사를 나타내는 첨부 서류에 서명 후 반송해 주시기 바랍니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 38,
    "word": "applaud",
    "pos": "v.",
    "meaning": "박수치다, ~에게 박수를 보내다",
    "derivatives": [
     {
      "word": "applause",
      "pos": "n.",
      "meaning": "박수(갈채)"
     }
    ],
    "examples": [
     {
      "en": "The manager applauded the entire department for their dedication and hard work in meeting the quarterly sales targets.",
      "ko": "관리자는 분기별 매출 목표 달성을 위해 헌신하고 열심히 일한 부서 전체에게 박수를 보냈습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 39,
    "word": "reward",
    "pos": "v. / n.",
    "meaning": "v. ~에게 보상하다, 사례하다 / n. 보상, 사례",
    "derivatives": [
     {
      "word": "rewarding",
      "pos": "a.",
      "meaning": "보람 있는, 수익이 나는"
     }
    ],
    "examples": [
     {
      "en": "In recognition of its huge success in the past year, the company will reward employees with a generous bonus and a paid vacation.",
      "ko": "작년의 큰 성공을 인정하여, 회사는 직원들에게 후한 보너스와 유급 휴가로 보상할 것입니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\nreward A with B A에게 B로 보상하다\nreward A for B A에게 B한 것에 대해 보상하다"
   },
   {
    "no": 40,
    "word": "constraint",
    "pos": "n.",
    "meaning": "제약",
    "derivatives": [],
    "examples": [
     {
      "en": "Due to budget constraints, there is a restriction on hiring new employees this year.",
      "ko": "예산상의 제약 때문에, 올해는 신입 직원들을 채용하는 데 제약이 있습니다."
     }
    ],
    "quiz": null,
    "tip": "기출 Paraphrasing\nconstraint → restriction (제한), limit (한계, 제한)"
   }
  ]
 },
 {
  "week": 8,
  "day": 36,
  "part": "Part 3,4",
  "title": "기출 패러프레이징 ③",
  "words": [
   {
    "no": 1,
    "word": "show A around",
    "pos": "",
    "meaning": "A에게 구경시켜주다",
    "derivatives": [
     "give A a tour A에게 구경시켜주다"
    ],
    "examples": [
     {
      "en": "M: We plan to show Mr. Kwon around the recording studio once he arrives later this afternoon. / Q. 무엇을 할 것인가? → Give a client a tour",
      "ko": "저희는 권 씨가 오늘 오후 늦게 도착하면 그에게 녹음실을 구경시켜드릴 계획입니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 2,
    "word": "finalize",
    "pos": "",
    "meaning": "마무리하다, 끝내다",
    "derivatives": [
     "finish 끝내다"
    ],
    "examples": [
     {
      "en": "W: Please be sure to finish writing the details for the conference schedule by tomorrow. / Q. 무엇을 하라고 하는가? → Finalize a schedule",
      "ko": "회의 일정에 대한 세부사항 작성을 내일까지 꼭 완료하시기 바랍니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 3,
    "word": "stop by",
    "pos": "",
    "meaning": "들르다",
    "derivatives": [
     "visit 방문하다",
     "drop by, come by 들르다"
    ],
    "examples": [
     {
      "en": "M: I'm going to stop by the supplier's warehouse tomorrow to check out their storage situation. / Q. 내일 무엇을 할 것인가? → Visit a warehouse",
      "ko": "내일 공급업체 창고에 들러 보관 상황을 확인할 예정입니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 4,
    "word": "organize",
    "pos": "",
    "meaning": "~을 조직하다, 준비하다",
    "derivatives": [
     "plan, arrange, prepare 계획하다, 준비하다"
    ],
    "examples": [
     {
      "en": "W: You did such an amazing job organizing the Leadership Conference. I want to thank you for your hard work in attracting over 300 attendees! / Q. 무엇에 대해 감사하는가? → Planning a large event",
      "ko": "리더십 컨퍼런스 준비를 정말 잘 해내셨어요. 300명이 넘는 참석자를 유치하기 위해 열심히 노력해주셔서 감사합니다!"
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 5,
    "word": "collaborate with",
    "pos": "",
    "meaning": "~와 협력하다",
    "derivatives": [
     "work (together) with ~와 함께 작업하다",
     "in cooperation with ~와 협력하여"
    ],
    "examples": [
     {
      "en": "M: If you're feeling stuck, I recommend working together with Henson. He usually has great ideas when it comes to creating engaging presentations. / Q. 무엇을 할 것을 권하는가? → Collaborate with a colleague",
      "ko": "하다가 막히면, 헨슨 씨와 작업하시는 것을 추천합니다. 그는 매력적인 프레젠테이션을 만드는 일에 관한 한 거의 늘 좋은 아이디어를 가지고 있습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 6,
    "word": "(job) opening",
    "pos": "",
    "meaning": "공석, 빈 자리",
    "derivatives": [
     "vacancy 공석",
     "position 자리"
    ],
    "examples": [
     {
      "en": "W: I know you mentioned that there's a new opening in the sales department, too. I'll upload a post about it on our job board by the end of today. / Q. 무엇을 하겠다고 하는가? → Advertise a job vacancy",
      "ko": "영업부에도 공석이 생긴다고 말씀하셨지요. 오늘 중으로 채용 게시판에 관련된 글을 올리겠습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 7,
    "word": "challenging",
    "pos": "",
    "meaning": "어려운, 힘든",
    "derivatives": [
     "difficult 어려운"
    ],
    "examples": [
     {
      "en": "M: Our park also offers several hiking trails. Keep in mind though, they are challenging and meant for more experienced climbers. / Q. 등산로에 대해 뭐라고 말하는가? → They are difficult.",
      "ko": "저희 공원에는 여러 등산로가 있습니다. 하지만 이 등산로들은 어려워서, 경험이 풍부한 등산객들을 위한 것임을 명심하시기 바랍니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 8,
    "word": "purchase in bulk",
    "pos": "",
    "meaning": "대량으로 구매하다",
    "derivatives": [
     "order more than ~ 이상을 주문하다",
     "large order 대량 주문",
     "in large quantities 대량으로"
    ],
    "examples": [
     {
      "en": "W: The cups are 8 dollars each, but if you order more than 50, you'll get 20 percent off of the total price. / Q. 어떻게 할인을 받을 수 있는가? → By placing a large order / By purchasing in bulk / By buying in large quantities",
      "ko": "컵이 각각 8달러인데요, 50개 이상 주문하시면 전체 금액에서 20% 할인을 받게 됩니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 9,
    "word": "verify",
    "pos": "v.",
    "meaning": "(사실인지) 확인하다, 확인해주다",
    "derivatives": [
     "confirm (사실임을) 확인하다"
    ],
    "examples": [
     {
      "en": "M: Hi, this is Mark Shen. I just wanted to confirm that I will be able to meet you as scheduled tomorrow at 10 AM. / Q. 왜 전화했는가? → To verify an appointment",
      "ko": "안녕하세요. 저는 마크 쉔입니다. 내일 오전 10시에 예정된대로 당신을 만날 수 있다는 걸 확인해드리고 싶었어요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 10,
    "word": "a form of identification",
    "pos": "",
    "meaning": "신분증",
    "derivatives": [
     "photo ID 사진이 있는 신분증",
     "ID badge 신분증 명찰",
     "passport 여권",
     "driver's license 운전면허증"
    ],
    "examples": [
     {
      "en": "W: I'll just need to see some photo ID to verify your registration. Do you have your passport or driver's license with you? / Q. 무엇을 보여달라고 하는가? → A form of identification",
      "ko": "귀하의 등록을 확인해드리기 위해 제가 사진이 부착된 신분증을 확인해야 합니다. 여권이나 운전 면허증을 갖고 계신가요?"
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 11,
    "word": "expedited shipping",
    "pos": "",
    "meaning": "급송, 신속 배송",
    "derivatives": [
     "express shipping 빠른 배송"
    ],
    "examples": [
     {
      "en": "M: Is there also an option for express shipping? I would like to receive the sunglasses as soon as possible. / Q. 무엇을 요청하는가? → Expedited shipping",
      "ko": "급송도 가능한가요? 선글라스를 최대한 빨리 받고 싶습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 12,
    "word": "easy to use",
    "pos": "",
    "meaning": "사용하기 쉬운",
    "derivatives": [
     "user-friendly 사용자 친화적인"
    ],
    "examples": [
     {
      "en": "W: Our remote controls are user-friendly. By offering a modern design with minimal buttons, you no longer have to struggle to perform simple functions. / Q. 제품의 어떤 점을 강조하는가? → They are easy to use.",
      "ko": "저희 리모콘은 사용자 친화적입니다. 최소한의 버튼으로 이루어진 현대적인 디자인을 제공하므로 여러분은 더 이상 간단한 기능을 수행하는 데 어려움을 겪을 필요가 없습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 13,
    "word": "look into",
    "pos": "",
    "meaning": "~을 조사하다",
    "derivatives": [
     "investigate 조사하다"
    ],
    "examples": [
     {
      "en": "M: I understand that you're calling to check what happened to your package. Please give me a minute to look into it. / Q. 무엇을 하겠다고 하는가? → Investigate an order",
      "ko": "귀하의 택배에 무슨 일이 있었는지 확인 차 전화하신 것으로 알고 있습니다. 잠시만 기다려주시면 제가 알아보겠습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 14,
    "word": "accompany",
    "pos": "",
    "meaning": "~와 동행하다",
    "derivatives": [
     "come along with 함께 가다"
    ],
    "examples": [
     {
      "en": "W: I need a photographer to accompany me to the excavation site. Do you think you can help me with hiring someone? / Q. 무엇에 대해 도움을 요청하는가? → Finding someone to come along with her",
      "ko": "발굴 현장에 동행해 줄 사진작가가 필요합니다. 사람을 고용하는 것을 도와주실 수 있을까요?"
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 15,
    "word": "schedule",
    "pos": "v.",
    "meaning": "~의 일정을 잡다",
    "derivatives": [
     "arrange, set (일정 등을) 잡다"
    ],
    "examples": [
     {
      "en": "M: Our director wants to meet with the sellers in person next week. Can you arrange a time and place for them? / Q. 무엇을 해달라고 하는가? → Schedule a meeting",
      "ko": "다음 주에 이사님께서 판매자분들을 직접 뵙고 싶어 하십니다. 시간과 장소를 잡아주실 수 있나요?"
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 16,
    "word": "assemble",
    "pos": "",
    "meaning": "~을 조립하다",
    "derivatives": [
     "put together 조립하다, (이것저것을 모아) 만들다"
    ],
    "examples": [
     {
      "en": "W: My name is Kara, and I'm going to be training you on how to put together our lightweight bookshelves. These are our best-selling products. / Q. 교육의 주된 내용은? → Assembling some furniture",
      "ko": "제 이름은 카라이고, 저희 회사의 경량 책장을 조립하는 방법에 대해 알려드릴 예정입니다. 그것들은 저희가 가장 많이 판매하는 제품입니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 17,
    "word": "proceed to",
    "pos": "",
    "meaning": "~로 가다",
    "derivatives": [
     "head to, go to ~로 가다"
    ],
    "examples": [
     {
      "en": "M: If you've made an appointment online, please proceed to service window number 1 to receive assistance immediately. / Q. 예약을 한 방문객들은 무엇을 해야 하는가? → Go to a specific service window",
      "ko": "온라인으로 예약하셨다면, 즉시 1번 창구로 가셔서 도움을 받으시기 바랍니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 18,
    "word": "turn down",
    "pos": "",
    "meaning": "~을 거절하다",
    "derivatives": [
     "reject 거절하다"
    ],
    "examples": [
     {
      "en": "W: I'm disappointed that the investors turned down our proposal. I thought the agreement would have a lot of potential. / Q. 왜 실망했는가? → A proposal was rejected.",
      "ko": "투자자들이 우리의 제안을 거절한 것에 실망했습니다. 저는 그 계약에 많은 가능성이 있을 거라고 생각했습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 19,
    "word": "mandatory",
    "pos": "",
    "meaning": "필수의, 의무적인",
    "derivatives": [
     "required 필수의"
    ],
    "examples": [
     {
      "en": "M: The seminar will focus on strategic development, so attendance for all employees is mandatory. / Q. 세미나에 대해 뭐라고 하는가? → Attendance is required.",
      "ko": "그 세미나는 전략적 개발에 초점을 맞출 것이기 때문에 전 직원이 의무적으로 참석해야 합니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 20,
    "word": "space",
    "pos": "",
    "meaning": "공간",
    "derivatives": [
     "room 방, 공간"
    ],
    "examples": [
     {
      "en": "W: I heard we won't be able to hold client meetings here during the renovation. Why don't we call Meeting Solutions? They rent out meeting rooms. / Q. 무엇을 제안하는가? → Renting some meeting spaces",
      "ko": "개조 공사를 하는 동안 이곳에서 고객 미팅을 열 수 없을거라 들었습니다. 미팅 솔루션즈 사에 전화해보는 게 어떨까요? 거긴 회의실을 대여해 줍니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 21,
    "word": "resign",
    "pos": "",
    "meaning": "물러나다, 사임하다",
    "derivatives": [
     "step down, retire 물러나다, 퇴직하다"
    ],
    "examples": [
     {
      "en": "M: It's unfortunate that Ms. Atkinson chose to step down from her position as CEO. She was a really inspiring figure. / Q. 왜 실망하는가? → A chief executive has resigned.",
      "ko": "앳킨슨 씨가 최고 경영자 자리에서 물러나기로 한 것은 유감스러운 일입니다. 그녀는 정말 영감을 주는 인물이었습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 22,
    "word": "demonstrate",
    "pos": "",
    "meaning": "시연하다, 하는 법을 보여주다",
    "derivatives": [
     "show A how to A에게 ~하는 법을 알려주다"
    ],
    "examples": [
     {
      "en": "W: Next, I'll show you how to use our hotel's reservation management system. / Q. 이어서 무엇을 할 것인가? → Demonstrate a computer program",
      "ko": "다음으로, 저희 호텔의 예약 관리 시스템을 이용하는 법을 보여드리겠습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 23,
    "word": "can't find / can't locate",
    "pos": "",
    "meaning": "(어디에 있는지) 찾지 못하다",
    "derivatives": [
     "misplace 제자리에 두지 않아 찾지 못하다, 둔 곳을 잊다"
    ],
    "examples": [
     {
      "en": "M: Have you perhaps seen where I put my briefcase? I can't find it anywhere in the office, but I need to use my laptop that's in there. / Q. 어떤 문제가 있는가? → He has misplaced his briefcase.",
      "ko": "혹시 제가 서류 가방을 어디에 두었는지 보셨나요? 사무실 어디에서도 못 찾겠는데, 안에 있는 노트북을 사용해야 해요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 24,
    "word": "draft",
    "pos": "",
    "meaning": "초안",
    "derivatives": [
     "rough version 초안"
    ],
    "examples": [
     {
      "en": "W: I'm still working on the rough version of the press release, but I should be able to send it to you for review by 3 o'clock at the latest. / Q. 3시까지 무엇을 하겠다고 하는가? → Submit a draft",
      "ko": "제가 아직 보도자료 초안을 작성 중인데, 늦어도 3시까지는 검토를 위해 보내드릴 수 있을 것 같습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 25,
    "word": "be familiar with",
    "pos": "",
    "meaning": "~을 잘 알다",
    "derivatives": [
     "know A well A를 잘 알다"
    ],
    "examples": [
     {
      "en": "M: Ask Kate for some help. She's very familiar with the recruitment process. / Q. 케이트에 대해 뭐라고 하는가? → She knows a procedure well.",
      "ko": "케이트에게 도움을 요청하세요. 그녀가 채용 절차를 잘 알아요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 26,
    "word": "sample",
    "pos": "v.",
    "meaning": "~을 시식하다",
    "derivatives": [
     "try 맛보다, 사용해보다"
    ],
    "examples": [
     {
      "en": "W: Bargain Market appreciates your business. Today only, customers can visit our snack aisle to sample our handmade dried fruits mix, made in-store daily. / Q. 고객들이 무엇을 할 수 있는가? → Try some snacks",
      "ko": "바게인 마켓을 이용해 주셔서 감사합니다. 오늘 단 하루, 고객들은 저희의 간식 통로에 오셔서 매일 매장에서 만들어지는 수제 건과일 믹스를 시식할 수 있습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 27,
    "word": "be prohibited",
    "pos": "",
    "meaning": "금지되다",
    "derivatives": [
     "be not allowed 허용되지 않다"
    ],
    "examples": [
     {
      "en": "M: Wait, you're not allowed to park there. There's a sign that says that those spots are for emergency vehicles only. / Q. 주차에 대해 뭐라고 말하는가? → It is prohibited in certain spots.",
      "ko": "잠시만요, 거기 주차하시면 안 됩니다. 저기에 비상 차량 전용이라고 쓰여 있는 표지판이 있어요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 28,
    "word": "reception",
    "pos": "",
    "meaning": "파티, 연회",
    "derivatives": [
     "party 파티"
    ],
    "examples": [
     {
      "en": "W: There's a reception next week for me and some people transferring to the New York branch. I hope you can make it. It's next Friday. / Q. 금요일에 어떤 일이 있을 것인가? → A party",
      "ko": "저와 뉴욕 지사로 전근가는 몇몇 사람들을 위한 파티가 다음 주에 있어요. 당신도 참석하시면 좋겠어요. 다음 주 금요일이요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 29,
    "word": "unique",
    "pos": "",
    "meaning": "독특한",
    "derivatives": [
     "special 특별한",
     "unlike other + 명사 다른 ~와는 다르게"
    ],
    "examples": [
     {
      "en": "M: I think Sona's Jewelry Shop would be the perfect vendor to work with. They make unique designs for their jewelry. / Q. 판매자에 대해 무엇을 마음에 들어 하는가? → They create special designs.",
      "ko": "소나 주얼리 숍이 거래하기에 완벽한 판매자 같아요. 그들은 주얼리 제품으로 독특한 디자인을 만들어요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 30,
    "word": "adjacent",
    "pos": "",
    "meaning": "인근의, 가까운",
    "derivatives": [
     "close 가까운"
    ],
    "examples": [
     {
      "en": "W: I'll be staying in a hotel during the trip. It's adjacent to the beach, so I'm excited for that. / Q. 호텔에 대해 왜 기대하고 있는가? → It is close to a beach.",
      "ko": "여행하는 동안 호텔에 묵을 예정입니다. 바닷가와 인접해 있어서 기대가 됩니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 31,
    "word": "stay",
    "pos": "",
    "meaning": "~인 채로 있다",
    "derivatives": [
     "remain ~인 채로 있다"
    ],
    "examples": [
     {
      "en": "M: Our quarterly sales have stayed the same for three terms in a row now. / Q. 무엇을 언급하는가? → Some sales have remained the same.",
      "ko": "분기 매출이 3분기 연속으로 제자리 걸음을 하고 있습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 32,
    "word": "be out of town",
    "pos": "",
    "meaning": "(출장 등으로) 출타중이다",
    "derivatives": [
     "be away on business 출장 중이다"
    ],
    "examples": [
     {
      "en": "W: Actually, I was out of town for a client meeting all of last week, so I wasn't able to finish the task you assigned me. / Q. 왜 업무를 마치지 못했는가? → She was away on business.",
      "ko": "사실은, 지난주 내내 고객 미팅 때문에 출타중이어서 제게 할당해주신 업무를 다 못 끝냈어요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 33,
    "word": "be responsible for",
    "pos": "",
    "meaning": "~을 책임지다, ~을 담당하다",
    "derivatives": [
     "be in charge of 맡다, 담당하다"
    ],
    "examples": [
     {
      "en": "M: I'm responsible for planning the company's annual year-end party, and I need help hiring a band to play for us. / Q. 무엇을 맡고(in charge of) 있는가? → Organizing a party",
      "ko": "저는 회사의 연례 연말 파티를 계획하는 일을 맡고 있고, 우리를 위해 연주할 밴드를 고용하는 데 도움이 필요합니다."
     }
    ],
    "quiz": null,
    "tip": "이와 같이 질문에 paraphrase되는 경우도 자주 등장합니다."
   },
   {
    "no": 34,
    "word": "punctual",
    "pos": "",
    "meaning": "시간을 잘 지키는",
    "derivatives": [
     "be on time 시간을 잘 지키다"
    ],
    "examples": [
     {
      "en": "W: I know a mechanic! I highly recommend Dave Burris because he's always on time to all service calls. / Q. 데이브 버리스에 대해 뭐라고 하는가? → He is punctual.",
      "ko": "제가 아는 정비사가 있어요! 데이브 버리스 씨를 적극 추천하는데요, 그는 항상 모든 서비스 요청에 대해 시간을 잘 지키기 때문에요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 35,
    "word": "assist",
    "pos": "",
    "meaning": "도와주다",
    "derivatives": [
     "help, give A a hand 도와주다"
    ],
    "examples": [
     {
      "en": "M: Mark, I want you to meet Amelia. Amelia is starting work today. Could you show her around and help her find her way to her workstation? / Q. 요청하는 것은 무엇인가? → Assist a new employee",
      "ko": "마크 씨, 아멜리아 씨를 소개할게요. 아멜리아 씨는 오늘 첫 근무를 시작하십니다. 그녀에게 주변을 안내해주고 자리로 가는 길을 찾는 것을 도와주시겠어요?"
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 36,
    "word": "research",
    "pos": "",
    "meaning": "조사하다, 연구하다",
    "derivatives": [
     "do a search 조사하다"
    ],
    "examples": [
     {
      "en": "W: I'll do a search into the market trends from the past year. That'll give us a good idea of where to direct our marketing efforts. / Q. 여자는 무엇을 할 것인가? → Conduct some market research",
      "ko": "지난 한 해 동안의 시장 동향을 조사해 보겠습니다. 마케팅 활동을 어떤 방향으로 해야 할지에 대해 좋은 아이디어를 줄 것입니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 37,
    "word": "save energy",
    "pos": "",
    "meaning": "에너지를 절약하다",
    "derivatives": [
     "conserve energy 에너지를 절약하다",
     "reduce energy consumption 에너지 소비를 줄이다",
     "energy-efficient 에너지 효율적인"
    ],
    "examples": [
     {
      "en": "M: Our client mentioned that she is passionate about reducing her energy consumption, so we should probably recommend her more energy-efficient appliances. / Q. 고객이 관심 있어 하는 것은? → Saving energy",
      "ko": "우리 고객이 에너지 소비를 줄이는데 열정을 가지고 있다고 언급했으므로, 우리는 아마도 그녀에게 더 에너지 효율적인 가전제품을 추천해야 할 것입니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 38,
    "word": "surplus",
    "pos": "",
    "meaning": "잉여, 과잉",
    "derivatives": [
     "excess 과잉",
     "too many 너무 많은"
    ],
    "examples": [
     {
      "en": "W: Not as many customers came in today as we expected, so we have too many scones and donuts left over. What should we do with them? / Q. 무엇에 대해 이야기하고 있는가? → Addressing a surplus of items",
      "ko": "오늘은 예상만큼 손님이 많이 오지 않아서 스콘과 도넛이 너무 많이 남았습니다. 이것들을 어떻게 해야 할까요?"
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 39,
    "word": "customer review",
    "pos": "",
    "meaning": "고객 후기, 고객 평가",
    "derivatives": [
     "what customers are saying 고객들이 말하는 바"
    ],
    "examples": [
     {
      "en": "M: See what other customers are saying about our premium beef selection at starfieldranchbeef.com. / Q. 웹사이트에서 무엇을 찾을 수 있는가? → Customer reviews",
      "ko": "starfieldranchbeef.com에서 우리의 프리미엄 소고기 제품에 대한 고객 평가를 확인해 보십시오."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 40,
    "word": "remove",
    "pos": "",
    "meaning": "~을 제거하다, 없애다",
    "derivatives": [
     "discard, get rid of, dispose of 버리다, 폐기하다, 처분하다"
    ],
    "examples": [
     {
      "en": "W: Laura, don't forget to discard the food waste before leaving for the day. We don't want any bugs gathering in the kitchen overnight. / Q. 무엇을 하라고 하는가? → Remove some trash",
      "ko": "로라, 오늘 가기 전에 음식물 쓰레기 버리는 것을 잊지 마세요. 밤새 부엌에 벌레가 모이는 것을 원치 않습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   }
  ]
 },
 {
  "week": 8,
  "day": 37,
  "part": "Part 5,6",
  "title": "전치사",
  "words": [
   {
    "no": 1,
    "word": "according to",
    "pos": "prep.",
    "meaning": "~에 따르면",
    "derivatives": [],
    "examples": [
     {
      "en": "according to survey results",
      "ko": "설문조사 결과에 따르면"
     },
     {
      "en": "according to Ms. Val",
      "ko": "밸 씨에 따르면"
     }
    ],
    "quiz": {
     "sentence": "------- comment cards filled out last week, our new dessert menu is a huge success.",
     "a": "According to",
     "b": "Instead of",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 2,
    "word": "on behalf of",
    "pos": "prep.",
    "meaning": "~을 대표하여, 대신하여",
    "derivatives": [],
    "examples": [
     {
      "en": "on behalf of his team",
      "ko": "그의 팀을 대표하여"
     },
     {
      "en": "on behalf of Mayor Dan",
      "ko": "댄 시장을 대신하여"
     }
    ],
    "quiz": {
     "sentence": "Philip Seyomour, the CFO of Azard Corporation, will accept the award ------- the company's founder.",
     "a": "on behalf of",
     "b": "like",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 3,
    "word": "along with",
    "pos": "prep.",
    "meaning": "~와 함께, ~을 따라서",
    "derivatives": [],
    "examples": [
     {
      "en": "along with your application",
      "ko": "귀하의 지원서와 함께"
     },
     {
      "en": "along with Ms. Alexa",
      "ko": "알렉사 씨를 따라서"
     }
    ],
    "quiz": {
     "sentence": "------- your résumé, please provide a portfolio of your previous graphic design work.",
     "a": "Except for",
     "b": "Along with",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 4,
    "word": "among",
    "pos": "prep.",
    "meaning": "~ 중에서, ~ 사이에서",
    "derivatives": [],
    "examples": [
     {
      "en": "among the nominees",
      "ko": "지명자들 중에서"
     },
     {
      "en": "collaboration among coworkers",
      "ko": "동료들 사이에서의 협동"
     }
    ],
    "quiz": {
     "sentence": "Michael Watson's new movie set during World War II proved most popular ------- filmgoers aged over 30.",
     "a": "outside",
     "b": "among",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 5,
    "word": "at least",
    "pos": "prep.",
    "meaning": "적어도, 최소한",
    "derivatives": [],
    "examples": [
     {
      "en": "at least two years of relevant experience",
      "ko": "적어도 2년의 관련 경험"
     }
    ],
    "quiz": {
     "sentence": "Reservations for tables on our outdoor patio must be placed ------- two months in advance.",
     "a": "in case of",
     "b": "at least",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 6,
    "word": "beyond",
    "pos": "prep.",
    "meaning": "~을 넘어서, 초과하여",
    "derivatives": [],
    "examples": [
     {
      "en": "beyond the entry gate",
      "ko": "출입구를 넘어서"
     }
    ],
    "quiz": {
     "sentence": "Only festival attendees with VIP passes are permitted ------- the barrier at the side of the stage.",
     "a": "beyond",
     "b": "during",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 7,
    "word": "concerning",
    "pos": "prep.",
    "meaning": "~에 관하여",
    "derivatives": [],
    "examples": [
     {
      "en": "concerning the training seminar",
      "ko": "교육 세미나에 관하여"
     },
     {
      "en": "concerning the plans to merge with",
      "ko": "~와 합병할 계획에 관하여"
     }
    ],
    "quiz": {
     "sentence": "The energy company sent an e-mail to all customers ------- the recent increase in electricity rates.",
     "a": "concerning",
     "b": "owing",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 8,
    "word": "despite",
    "pos": "prep.",
    "meaning": "~에도 불구하고",
    "derivatives": [],
    "examples": [
     {
      "en": "despite losses in the second quarter",
      "ko": "2분기의 손실에도 불구하고"
     },
     {
      "en": "despite several deadline extensions",
      "ko": "여러 번의 마감일 연장에도 불구하고"
     }
    ],
    "quiz": {
     "sentence": "The construction of the new bowling alley has been canceled ------- demand from local residents for new recreational facilities.",
     "a": "except",
     "b": "despite",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 9,
    "word": "due to",
    "pos": "prep.",
    "meaning": "~로 인해, ~ 때문에",
    "derivatives": [],
    "examples": [
     {
      "en": "due to inclement weather",
      "ko": "악천후로 인해"
     },
     {
      "en": "due to scheduled maintenance",
      "ko": "예정된 유지보수 때문에"
     }
    ],
    "quiz": {
     "sentence": "The Eagle Run ski route is off-limits today ------- concerns about dangerous conditions.",
     "a": "due to",
     "b": "as for",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 10,
    "word": "except",
    "pos": "prep.",
    "meaning": "~을 제외하고",
    "derivatives": [],
    "examples": [
     {
      "en": "except a limited number of staff",
      "ko": "한정된 직원 수를 제외하고"
     },
     {
      "en": "except personal checks",
      "ko": "개인 수표를 제외하고"
     }
    ],
    "quiz": {
     "sentence": "No one ------- the movie's director has been allowed to see the final few pages of the screenplay.",
     "a": "out of",
     "b": "except",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 11,
    "word": "following",
    "pos": "prep.",
    "meaning": "~ 후에, ~ 다음에",
    "derivatives": [],
    "examples": [
     {
      "en": "following widespread speculation",
      "ko": "추측들이 널리 퍼진 후에"
     },
     {
      "en": "following the luncheon",
      "ko": "오찬 후에"
     }
    ],
    "quiz": {
     "sentence": "------- the positive reviews of her debut music album, Greta Inglis embarked on a global tour.",
     "a": "Following",
     "b": "Like",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 12,
    "word": "given",
    "pos": "prep.",
    "meaning": "~을 감안하면",
    "derivatives": [],
    "examples": [
     {
      "en": "given his negotiation skills",
      "ko": "그의 협상 기술을 감안하면"
     },
     {
      "en": "given her limited experience in law",
      "ko": "법 분야에서의 제한된 경험을 감안하면"
     }
    ],
    "quiz": {
     "sentence": "------- the rise in fuel prices, more and more workers are choosing to commute by bicycle.",
     "a": "Provided",
     "b": "Given",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 13,
    "word": "in accordance with",
    "pos": "prep.",
    "meaning": "~에 따라서",
    "derivatives": [],
    "examples": [
     {
      "en": "in accordance with generally accepted standards",
      "ko": "일반적으로 수용되는 기준에 따라서"
     }
    ],
    "quiz": {
     "sentence": "Wootton Engineering conducts safety inspections ------- nationally implemented government guidelines.",
     "a": "as opposed to",
     "b": "in accordance with",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 14,
    "word": "in addition to",
    "pos": "prep.",
    "meaning": "~에 더하여, ~뿐만 아니라",
    "derivatives": [],
    "examples": [
     {
      "en": "in addition to expanding our hours of operation",
      "ko": "우리의 운영 시간을 연장하는 것에 더하여"
     },
     {
      "en": "in addition to excellent academic credentials",
      "ko": "훌륭한 학업 자격뿐만 아니라"
     }
    ],
    "quiz": {
     "sentence": "------- supplying a wide range of food and beverages, Marion Catering provides experienced serving staff.",
     "a": "In addition to",
     "b": "As soon as",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 15,
    "word": "ahead of",
    "pos": "prep.",
    "meaning": "~보다 앞서, 빨리",
    "derivatives": [],
    "examples": [
     {
      "en": "one day ahead of the general public",
      "ko": "일반 대중보다 하루 앞서"
     },
     {
      "en": "ahead of schedule",
      "ko": "일정보다 빨리"
     }
    ],
    "quiz": {
     "sentence": "The maintenance team is attempting to fix a problem with the exhibition center's audio system ------- next month's Business Software Convention.",
     "a": "ahead of",
     "b": "along with",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 16,
    "word": "in the event of",
    "pos": "prep.",
    "meaning": "~의 경우에",
    "derivatives": [],
    "examples": [
     {
      "en": "in the event of heavy snowfall",
      "ko": "폭설의 경우에"
     },
     {
      "en": "in the event of a computer system failure",
      "ko": "컴퓨터 시스템 장애의 경우에"
     }
    ],
    "quiz": {
     "sentence": "------- heavy rain, the arts and crafts fair will be held in Dingley Community Center instead of Fairland Park.",
     "a": "As much as",
     "b": "In the event of",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 17,
    "word": "including",
    "pos": "prep.",
    "meaning": "~을 포함하여",
    "derivatives": [],
    "examples": [
     {
      "en": "including tax",
      "ko": "세금을 포함하여"
     },
     {
      "en": "including three new nominees",
      "ko": "새로운 세 명의 후보들을 포함하여"
     }
    ],
    "quiz": {
     "sentence": "All Mayfair Hotel employees, ------- housekeeping staff, must attend the customer service workshop on May 6.",
     "a": "about",
     "b": "including",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 18,
    "word": "instead of",
    "pos": "prep.",
    "meaning": "~ 대신에",
    "derivatives": [],
    "examples": [
     {
      "en": "instead of residential areas",
      "ko": "주거 지역 대신에"
     },
     {
      "en": "instead of renewing their contract",
      "ko": "그들의 계약을 갱신하는 대신에"
     }
    ],
    "quiz": {
     "sentence": "Due to delay in obtaining the necessary permit, construction of the shopping mall will begin next month ------- this month.",
     "a": "instead of",
     "b": "except for",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 19,
    "word": "opposite",
    "pos": "prep.",
    "meaning": "~ 반대편의, ~ 맞은편의",
    "derivatives": [],
    "examples": [
     {
      "en": "stand opposite the marketing manager",
      "ko": "마케팅 부장과 반대편에 서다"
     },
     {
      "en": "parking lot opposite the power plant",
      "ko": "발전소 맞은편의 주차장"
     }
    ],
    "quiz": {
     "sentence": "As we are planning to renovate the west wing, all visitors should use the public parking lot ------- the company headquarters.",
     "a": "opposite",
     "b": "apart",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 20,
    "word": "owing to",
    "pos": "prep.",
    "meaning": "~ 때문에",
    "derivatives": [],
    "examples": [
     {
      "en": "owing to rising fuel prices",
      "ko": "증가하는 연료 가격 때문에"
     },
     {
      "en": "owing to a flood from the nearby river",
      "ko": "근처 강으로부터의 홍수 때문에"
     }
    ],
    "quiz": {
     "sentence": "------- the high cost of the renovation project, company executives will not receive a year-end bonus.",
     "a": "Owing to",
     "b": "Such as",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 21,
    "word": "per",
    "pos": "prep.",
    "meaning": "~당, ~마다",
    "derivatives": [],
    "examples": [
     {
      "en": "one coupon per customer",
      "ko": "손님당 하나의 쿠폰"
     }
    ],
    "quiz": {
     "sentence": "For the time being, there is a limit of one free beverage ------- passenger.",
     "a": "by",
     "b": "per",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 22,
    "word": "pertaining to",
    "pos": "prep.",
    "meaning": "~에 관계된, 속하는",
    "derivatives": [],
    "examples": [
     {
      "en": "additional details pertaining to the workshop",
      "ko": "워크숍에 관계된 추가 세부사항들"
     },
     {
      "en": "address issues pertaining to our products",
      "ko": "우리 상품에 속한 문제들을 처리하다"
     }
    ],
    "quiz": {
     "sentence": "Additional information ------- the workshop is detailed in the brochure that will be handed out shortly.",
     "a": "pertaining to",
     "b": "in spite of",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 23,
    "word": "prior to",
    "pos": "prep.",
    "meaning": "~ 이전에",
    "derivatives": [],
    "examples": [
     {
      "en": "prior to the first meeting",
      "ko": "첫 회의 이전에"
     },
     {
      "en": "prior to sending products",
      "ko": "제품들을 보내기 이전에"
     }
    ],
    "quiz": {
     "sentence": "To help new staff members prepare for their roles, the company handbook was sent to each member ------- the orientation session.",
     "a": "in favor of",
     "b": "prior to",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 24,
    "word": "rather than",
    "pos": "prep.",
    "meaning": "~보다는 (차라리)",
    "derivatives": [],
    "examples": [
     {
      "en": "changes in some recipes rather than new packaging",
      "ko": "새로운 포장보다는 몇몇 요리법에서의 변화"
     },
     {
      "en": "expand its floor rather than buying a new facility",
      "ko": "새로운 시설을 매매하기보다는 자사 건물의 층을 확장하다"
     }
    ],
    "quiz": {
     "sentence": "Ms. Jones would like to reschedule the sales meeting for next Wednesday ------- tomorrow.",
     "a": "rather than",
     "b": "just as",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 25,
    "word": "regarding",
    "pos": "prep.",
    "meaning": "~에 관한",
    "derivatives": [],
    "examples": [
     {
      "en": "information regarding our new product line",
      "ko": "우리의 새로운 제품군에 관한 정보"
     },
     {
      "en": "questions regarding access to the account",
      "ko": "계정 접근에 관한 질문들"
     }
    ],
    "quiz": {
     "sentence": "Feel free to contact your supervisor if you have any questions ------- the vacation leave or sick leave policies.",
     "a": "regarding",
     "b": "between",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 26,
    "word": "regardless of",
    "pos": "prep.",
    "meaning": "~와 상관 없이",
    "derivatives": [],
    "examples": [
     {
      "en": "regardless of who is in the leading role",
      "ko": "누가 선도적인 역할을 하는지와 상관 없이"
     },
     {
      "en": "regardless of Ms. Crude's absence",
      "ko": "크루드 씨의 부재와 상관 없이"
     }
    ],
    "quiz": {
     "sentence": "At Ricardo Furnishings, the standard delivery fee is $10, ------- the size of the order.",
     "a": "along with",
     "b": "regardless of",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 27,
    "word": "unlike",
    "pos": "prep.",
    "meaning": "~와 달리",
    "derivatives": [],
    "examples": [
     {
      "en": "unlike the previous edition",
      "ko": "이전 쇄와 달리"
     },
     {
      "en": "unlike most other equipment",
      "ko": "대부분의 다른 장비와 달리"
     }
    ],
    "quiz": {
     "sentence": "------- Ms. Verani, Ms. Cortez accepted the offer to transfer to the New Orleans office.",
     "a": "Unlike",
     "b": "Opposed",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 28,
    "word": "up to",
    "pos": "prep.",
    "meaning": "~까지",
    "derivatives": [],
    "examples": [
     {
      "en": "up to 14 days from the date of purchase",
      "ko": "구매일로부터 14일까지"
     },
     {
      "en": "up to 2,000 additional workers",
      "ko": "2,000명의 추가 직원들까지"
     }
    ],
    "quiz": {
     "sentence": "Visit Montega Market and save ------- 50 percent on a wide variety of top fashion brands.",
     "a": "up to",
     "b": "except for",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 29,
    "word": "within",
    "pos": "prep.",
    "meaning": "~ 이내에",
    "derivatives": [],
    "examples": [
     {
      "en": "within the limits of our budget",
      "ko": "우리 예산의 한계 이내에"
     },
     {
      "en": "within two business days",
      "ko": "영업일 2일 이내에"
     }
    ],
    "quiz": {
     "sentence": "ACA Electronics will provide you with a full refund ------- three days of receiving the faulty, returned product.",
     "a": "into",
     "b": "within",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 30,
    "word": "throughout",
    "pos": "prep.",
    "meaning": "~ 전반에 걸쳐, ~ 동안 쭉",
    "derivatives": [],
    "examples": [
     {
      "en": "be well known throughout the fashion industry",
      "ko": "패션 산업 전반에 걸쳐 잘 알려져 있다"
     },
     {
      "en": "throughout the entire construction period",
      "ko": "전체 건축 기간 동안 쭉"
     }
    ],
    "quiz": {
     "sentence": "According to the annual sales report, several problems occurred ------- the third financial quarter.",
     "a": "besides",
     "b": "throughout",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 31,
    "word": "in light of",
    "pos": "prep.",
    "meaning": "~에 비추어 볼 때, ~을 고려하여",
    "derivatives": [],
    "examples": [
     {
      "en": "in light of the suspension of transport services",
      "ko": "운송 서비스의 중단에 비추어 볼 때"
     },
     {
      "en": "in light of unforeseen circumstances",
      "ko": "예측하지 못한 상황들을 고려하여"
     }
    ],
    "quiz": {
     "sentence": "------- the complaints about our new appetizer menu, we have decided to revert to the original menu.",
     "a": "In spite of",
     "b": "In light of",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 32,
    "word": "on top of",
    "pos": "prep.",
    "meaning": "~외에, ~의 위에",
    "derivatives": [],
    "examples": [
     {
      "en": "on top of their regular workload",
      "ko": "정규 업무량 외에"
     },
     {
      "en": "on top of the standard manufacturer's warranty",
      "ko": "제조사의 표준 보증 외에"
     }
    ],
    "quiz": {
     "sentence": "Our Platinum Membership includes full use of the sauna and spa ------- the standard access to the main exercise rooms.",
     "a": "on top of",
     "b": "in case of",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 33,
    "word": "in response to",
    "pos": "prep.",
    "meaning": "~에 대응하여",
    "derivatives": [],
    "examples": [
     {
      "en": "in response to overwhelming demand",
      "ko": "압도적인 수요에 대응하여"
     },
     {
      "en": "in response to customer suggestions",
      "ko": "고객 제안에 대응하여"
     }
    ],
    "quiz": {
     "sentence": "------- negative feedback about delivery times, we have decided to work with a different courier service.",
     "a": "In response to",
     "b": "In place of",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 34,
    "word": "on account of",
    "pos": "prep.",
    "meaning": "~ 때문에",
    "derivatives": [],
    "examples": [
     {
      "en": "on account of the sensitive information",
      "ko": "민감한 정보 때문에"
     }
    ],
    "quiz": {
     "sentence": "------- the harmful chemicals they contain, the cleaning products should be stored out of reach of children.",
     "a": "On account of",
     "b": "Such as",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 35,
    "word": "other than",
    "pos": "prep.",
    "meaning": "~ 외에, ~ 말고 다른",
    "derivatives": [],
    "examples": [
     {
      "en": "other than the important planning procedures",
      "ko": "중요한 기획 절차 외에"
     },
     {
      "en": "a supplier other than their electric utility company",
      "ko": "전력 회사 말고 다른 공급사"
     }
    ],
    "quiz": {
     "sentence": "Starting next year, employees will be able to pay into a pension fund ------- that recommended by our company.",
     "a": "combined",
     "b": "other than",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 36,
    "word": "contrary to",
    "pos": "prep.",
    "meaning": "~와 반대로, ~에 반해서",
    "derivatives": [],
    "examples": [
     {
      "en": "contrary to the information on the Web site",
      "ko": "그 웹 사이트에 있는 정보와 반대로"
     }
    ],
    "quiz": {
     "sentence": "------- the showtimes listed in the event program, the ballet performance will begin at 3 PM rather than 4 PM.",
     "a": "As long as",
     "b": "Contrary to",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 37,
    "word": "in spite of",
    "pos": "prep.",
    "meaning": "~에도 불구하고",
    "derivatives": [],
    "examples": [
     {
      "en": "in spite of negative market predictions",
      "ko": "부정적인 시장 예측에도 불구하고"
     },
     {
      "en": "in spite of increased volumes of",
      "ko": "~의 증가된 양에도 불구하고"
     }
    ],
    "quiz": {
     "sentence": "The fireworks display at Cove Beach was a success ------- the poor weather.",
     "a": "in spite of",
     "b": "as a result of",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 38,
    "word": "thanks to",
    "pos": "prep.",
    "meaning": "~ 덕분에",
    "derivatives": [],
    "examples": [
     {
      "en": "thanks to last-minute negotiations",
      "ko": "막바지의 협상 덕분에"
     }
    ],
    "quiz": {
     "sentence": "Sales of the Ronin 5 smartphone have doubled this month ------- Mr. Ronstein's exceptional marketing strategy.",
     "a": "thanks to",
     "b": "in addition to",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 39,
    "word": "as a result of",
    "pos": "prep.",
    "meaning": "~의 결과로서",
    "derivatives": [],
    "examples": [
     {
      "en": "as a result of scheduled renovations",
      "ko": "예정된 보수공사의 결과로서"
     },
     {
      "en": "as a result of an excellent training program",
      "ko": "우수한 교육 프로그램의 결과로서"
     }
    ],
    "quiz": {
     "sentence": "------- the popularity of the new Thunder Flyer roller coaster, the theme park has broken its record for quarterly ticket sales.",
     "a": "On behalf of",
     "b": "As a result of",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 40,
    "word": "toward",
    "pos": "prep.",
    "meaning": "~을 향하여, ~쯤",
    "derivatives": [],
    "examples": [
     {
      "en": "toward a specific financial goal",
      "ko": "특정 재무 목표를 향하여"
     },
     {
      "en": "toward the end of the month",
      "ko": "월말쯤"
     }
    ],
    "quiz": {
     "sentence": "The architect intends to unveil his first draft of the building blueprint ------- the end of next week.",
     "a": "toward",
     "b": "against",
     "answer": "A"
    },
    "tip": ""
   }
  ]
 },
 {
  "week": 8,
  "day": 38,
  "part": "Part 5,6",
  "title": "다품사",
  "words": [
   {
    "no": 1,
    "word": "change",
    "pos": "n./v.",
    "meaning": "(n.) 변경, 변화; (v.) 변경하다, 바꾸다",
    "derivatives": [],
    "examples": [
     {
      "en": "As a result of the changes to our work schedule, some employees will be required to come to work one hour earlier than usual.",
      "ko": "우리 근무 일정의 변경의 결과로, 일부 직원들은 평소보다 한 시간 일찍 출근해야 할 것이다."
     },
     {
      "en": "In order to expedite deliveries to our customers, we have recently changed the shipping service we use.",
      "ko": "고객들에게 배송을 신속히 하기 위해, 우리는 최근에 우리가 이용하는 배송 서비스를 변경했다."
     }
    ],
    "quiz": {
     "sentence": "As a result of the ------- to our work schedule, some employees will be required to come to work one hour earlier than usual.",
     "a": "changes",
     "b": "positions",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 2,
    "word": "advance",
    "pos": "n./v.",
    "meaning": "(n.) 향상, 전진; (n.) 우선, (때의) 진행; (v.) 발전하다, 나아가다",
    "derivatives": [],
    "examples": [
     {
      "en": "Satellite navigation devices are more precise than ever before due to recent advances in GPS technology.",
      "ko": "위성 내비게이션 기기는 최근 GPS 기술의 향상으로 인해 그 어느 때보다 정밀하다."
     },
     {
      "en": "Goron Electronics has increased its number of sales staff in advance of the official launch of the new smartphone.",
      "ko": "Goron Electronics는 신형 스마트폰의 공식 출시에 앞서 영업 직원 수를 늘렸다."
     },
     {
      "en": "The seminar series at Arklay Institute will help individuals advance in the field of marketing.",
      "ko": "Arklay Institute의 세미나 시리즈는 개인이 마케팅 분야에서 발전하도록 도울 것이다."
     }
    ],
    "quiz": {
     "sentence": "Satellite navigation devices are more precise than ever before due to recent ------- in GPS technology.",
     "a": "advances",
     "b": "promotions",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 3,
    "word": "potential",
    "pos": "n./a.",
    "meaning": "(n.) 잠재력, 가능성; (a.) 잠재적인, 가능성 있는",
    "derivatives": [],
    "examples": [
     {
      "en": "Hampton Corporation has enormous potential to increase its market share in the country.",
      "ko": "Hampton Corporation은 국내 시장 점유율을 높일 막대한 잠재력을 가지고 있다."
     },
     {
      "en": "Coller Kitchenware has distributed over five hundred product catalogs to potential clients in the area.",
      "ko": "Coller Kitchenware는 그 지역의 잠재 고객들에게 500개가 넘는 제품 카탈로그를 배포했다."
     }
    ],
    "quiz": {
     "sentence": "Hampton Corporation has enormous ------- to increase its market share in the country.",
     "a": "potential",
     "b": "proposal",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 4,
    "word": "standard",
    "pos": "n./a.",
    "meaning": "(n.) 기준, 표준; (a.) 일반적인, 표준의",
    "derivatives": [],
    "examples": [
     {
      "en": "All appliances and procedures in our kitchens must comply with the government's health and safety standards.",
      "ko": "우리 주방의 모든 기기와 절차는 정부의 보건 및 안전 기준을 준수해야 한다."
     },
     {
      "en": "In an effort to compete with other hotels in the city, Magnum Hotel's standard room rates will be decreased.",
      "ko": "시내의 다른 호텔들과 경쟁하기 위한 노력으로, Magnum Hotel의 일반 객실 요금이 인하될 것이다."
     }
    ],
    "quiz": {
     "sentence": "All appliances and procedures in our kitchens must comply with the government's health and safety -------.",
     "a": "details",
     "b": "standards",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 5,
    "word": "surplus",
    "pos": "n./a.",
    "meaning": "(n.) 과잉 (재고), 흑자; (a.) 남는, 초과하는",
    "derivatives": [],
    "examples": [
     {
      "en": "In order to sell its surplus of computer monitors, Horizon Electronics has lowered the price of the products.",
      "ko": "컴퓨터 모니터 과잉 재고를 팔기 위해, Horizon Electronics는 제품 가격을 인하했다."
     },
     {
      "en": "Surplus stock will be sold at 50 percent off in order to make room for our new merchandise.",
      "ko": "남는 재고는 우리의 신상품을 위한 공간을 마련하기 위해 50퍼센트 할인하여 판매될 것이다."
     }
    ],
    "quiz": {
     "sentence": "In order to sell its ------- of computer monitors, Horizon Electronics has lowered the price of the products.",
     "a": "substitute",
     "b": "surplus",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 6,
    "word": "forward",
    "pos": "ad./v.",
    "meaning": "(ad.) 앞으로; (v.) (제3자에게) 전송하다",
    "derivatives": [],
    "examples": [
     {
      "en": "The CEO confirmed that Ollay Logistics Inc. will move forward with its plan to relocate its headquarters to Seattle.",
      "ko": "CEO는 Ollay Logistics Inc.가 본사를 Seattle로 이전하려는 계획을 진행할 것이라고 확인했다."
     },
     {
      "en": "Inquiries regarding job vacancies should be forwarded to Patricia Rumson in the HR department.",
      "ko": "공석에 관한 문의는 인사부의 Patricia Rumson에게 전달되어야 한다."
     }
    ],
    "quiz": {
     "sentence": "The CEO confirmed that Ollay Logistics Inc. will move ------- with its plan to relocate its headquarters to Seattle.",
     "a": "forward",
     "b": "altogether",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 7,
    "word": "once",
    "pos": "ad./conj.",
    "meaning": "(ad.) 한때, 한 번; (conj.) 일단 ~하면, ~하자마자",
    "derivatives": [],
    "examples": [
     {
      "en": "Once the most popular neighborhood in Bayville, Garland Heights is now full of abandoned buildings.",
      "ko": "한때 Bayville에서 가장 인기 있는 동네였던 Garland Heights는 이제 버려진 건물들로 가득하다."
     },
     {
      "en": "Once the clients arrive at the manufacturing plant, they will be given an extensive tour of the facility.",
      "ko": "고객들이 제조 공장에 도착하자마자, 그들은 시설에 대한 광범위한 견학을 받을 것이다."
     }
    ],
    "quiz": {
     "sentence": "------- the most popular neighborhood in Bayville, Garland Heights is now full of abandoned buildings.",
     "a": "Once",
     "b": "Since",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 8,
    "word": "later",
    "pos": "ad./a.",
    "meaning": "(ad.) ~후에, 나중에; (a.) 추후의",
    "derivatives": [],
    "examples": [
     {
      "en": "The full line-up of performers for this summer's jazz music festival will be posted online later this week.",
      "ko": "올여름 재즈 음악 축제의 전체 공연자 명단은 이번 주 후반에 온라인에 게시될 것이다."
     },
     {
      "en": "Those who progress through the first round of interviews will be invited back for a final interview at a later date.",
      "ko": "1차 면접을 통과한 사람들은 추후 날짜에 최종 면접을 위해 다시 초대될 것이다."
     }
    ],
    "quiz": {
     "sentence": "The full line-up of performers for this summer's jazz music festival will be posted online ------- this week.",
     "a": "next",
     "b": "later",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 9,
    "word": "following",
    "pos": "prep./a.",
    "meaning": "(prep.) ~후에; (a.) 다음의, 뒤따르는",
    "derivatives": [],
    "examples": [
     {
      "en": "The film's launch has been pushed back following the negative feedback from the test screenings.",
      "ko": "그 영화의 개봉은 시사회의 부정적인 반응 이후로 연기되었다."
     },
     {
      "en": "Articles received after the deadline will not be published until the following month.",
      "ko": "마감 이후에 접수된 기사는 다음 달까지 게재되지 않을 것이다."
     }
    ],
    "quiz": {
     "sentence": "The film's launch has been pushed back ------- the negative feedback from the test screenings.",
     "a": "because",
     "b": "following",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 10,
    "word": "secure",
    "pos": "v./a.",
    "meaning": "(v.) 확보하다, 보장하다; (a.) 안전한, 확실한",
    "derivatives": [],
    "examples": [
     {
      "en": "Mr. Halliday has arranged a product demonstration to secure funding from local business owners.",
      "ko": "Mr. Halliday는 지역 사업주들로부터 자금을 확보하기 위해 제품 시연을 준비했다."
     },
     {
      "en": "Patient records at Belvedere Health Clinic are kept secure at all times.",
      "ko": "Belvedere Health Clinic의 환자 기록은 항상 안전하게 보관된다."
     }
    ],
    "quiz": {
     "sentence": "Mr. Halliday has arranged a product demonstration to ------- funding from local business owners.",
     "a": "conduct",
     "b": "secure",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 11,
    "word": "plus",
    "pos": "prep./ad.",
    "meaning": "(prep.) ~을 더하여; (ad.) 게다가",
    "derivatives": [],
    "examples": [
     {
      "en": "Purchase a premium ticket for any movie to receive a large popcorn plus your choice of beverage for no extra charge.",
      "ko": "어떤 영화든 프리미엄 티켓을 구매하면 추가 비용 없이 큰 팝콘과 더불어 원하는 음료를 받을 수 있다."
     },
     {
      "en": "You will receive 10% off the purchase. Plus, you will receive a free gift.",
      "ko": "구매 시 10% 할인을 받게 됩니다. 게다가, 무료 선물도 받게 됩니다."
     }
    ],
    "quiz": {
     "sentence": "Purchase a premium ticket for any movie to receive a large popcorn ------- your choice of beverage for no extra charge.",
     "a": "plus",
     "b": "whichever",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 12,
    "word": "several",
    "pos": "a./n.",
    "meaning": "(a.) 여러 가지의, 몇몇의; (n.) 몇 개",
    "derivatives": [],
    "examples": [
     {
      "en": "Martin Hodge has published more than twenty books covering several subjects related to sales.",
      "ko": "Martin Hodge는 영업과 관련된 여러 주제를 다루는 스무 권이 넘는 책을 출간했다."
     },
     {
      "en": "Several of our restaurant branches are likely to close down unless they become more profitable.",
      "ko": "우리 식당 지점 중 몇 곳은 더 수익성이 높아지지 않으면 문을 닫을 가능성이 있다."
     }
    ],
    "quiz": {
     "sentence": "Martin Hodge has published more than twenty books covering ------- subjects related to sales.",
     "a": "any",
     "b": "several",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 13,
    "word": "alert",
    "pos": "n./v.",
    "meaning": "(n.) 경보, 경계; (v.) 알려주다, 경고하다",
    "derivatives": [],
    "examples": [
     {
      "en": "The continuous beeping noise from our smoke detectors functions as an alert that the battery is almost depleted.",
      "ko": "우리 연기 감지기에서 나는 연속적인 삐 소리는 배터리가 거의 다 소모되었다는 경보 역할을 한다."
     },
     {
      "en": "Should there be any turbulence during the flight, the pilot will alert passengers immediately.",
      "ko": "비행 중 난기류가 있을 경우, 조종사는 즉시 승객들에게 알릴 것이다."
     }
    ],
    "quiz": {
     "sentence": "The continuous beeping noise from our smoke detectors functions as an ------- that the battery is almost depleted.",
     "a": "example",
     "b": "alert",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 14,
    "word": "near",
    "pos": "a./prep.",
    "meaning": "(a.) 가까운; (prep.) ~ 근처에",
    "derivatives": [],
    "examples": [
     {
      "en": "Fiesta Mexican Restaurant announced that it will introduce several new vegetarian dishes in the near future.",
      "ko": "Fiesta Mexican Restaurant는 가까운 미래에 여러 가지 새로운 채식 요리를 선보일 것이라고 발표했다."
     },
     {
      "en": "If you would like to rent an audio guide, please visit the information center that is near the ticket office.",
      "ko": "오디오 가이드를 대여하고 싶으시면, 매표소 근처에 있는 안내 센터를 방문해 주세요."
     }
    ],
    "quiz": {
     "sentence": "Fiesta Mexican Restaurant announced that it will introduce several new vegetarian dishes in the ------- future.",
     "a": "near",
     "b": "soon",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 15,
    "word": "original",
    "pos": "a./n.",
    "meaning": "(a.) 원래의, 진본의; (n.) 원본",
    "derivatives": [],
    "examples": [
     {
      "en": "The final draft of the blueprint for the new airport terminal is significantly different from the original design.",
      "ko": "새 공항 터미널 설계도의 최종안은 원래 디자인과 상당히 다르다."
     },
     {
      "en": "Photocopies of your documents will be kept at our office, but the originals will be returned to you by recorded mail.",
      "ko": "귀하 서류의 사본은 우리 사무실에 보관되지만, 원본은 등기 우편으로 반환될 것이다."
     }
    ],
    "quiz": {
     "sentence": "The final draft of the blueprint for the new airport terminal is significantly different from the ------- design.",
     "a": "original",
     "b": "similar",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 16,
    "word": "provided",
    "pos": "v./conj.",
    "meaning": "(v.) 제공하다; (conj.) ~라면(that)",
    "derivatives": [],
    "examples": [
     {
      "en": "All technology conference attendees will be provided with a name tag and an event program brochure.",
      "ko": "모든 기술 콘퍼런스 참석자는 이름표와 행사 프로그램 책자를 제공받을 것이다."
     },
     {
      "en": "All of our products may be returned for a refund within 21 days provided that they have not been used.",
      "ko": "우리의 모든 제품은 사용되지 않았다면 21일 이내에 환불을 위해 반품될 수 있다."
     }
    ],
    "quiz": {
     "sentence": "All technology conference attendees will be ------- with a name tag and an event program brochure.",
     "a": "provided",
     "b": "required",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 17,
    "word": "objective",
    "pos": "n./a.",
    "meaning": "(n.) 목표; (a.) 객관적인",
    "derivatives": [],
    "examples": [
     {
      "en": "Mr. Crenshaw's objective is to attract prospective clients to our firm by impressing them with his presentation.",
      "ko": "Mr. Crenshaw의 목표는 발표로 잠재 고객들에게 깊은 인상을 주어 그들을 우리 회사로 유치하는 것이다."
     },
     {
      "en": "The main aim of our Web site is to provide objective information about news and current events.",
      "ko": "우리 웹사이트의 주된 목적은 뉴스와 시사에 관한 객관적인 정보를 제공하는 것이다."
     }
    ],
    "quiz": {
     "sentence": "Mr. Crenshaw's ------- is to attract prospective clients to our firm by impressing them with his presentation.",
     "a": "evaluation",
     "b": "objective",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 18,
    "word": "permit",
    "pos": "v./n.",
    "meaning": "(v.) 허용하다, 허가하다; (n.) 허가증",
    "derivatives": [],
    "examples": [
     {
      "en": "Only those with Level 1 security clearance are permitted to use the research laboratory at Alvin Biotech Inc.",
      "ko": "1급 보안 인가를 가진 사람만이 Alvin Biotech Inc.의 연구실을 이용하도록 허가된다."
     },
     {
      "en": "The vendor permit must be clearly displayed on the booth or cart that you will use at the food festival.",
      "ko": "판매업자 허가증은 음식 축제에서 사용할 부스나 카트에 명확하게 게시되어야 한다."
     }
    ],
    "quiz": {
     "sentence": "Only those with Level 1 security clearance are ------- to use the research laboratory at Alvin Biotech Inc.",
     "a": "given",
     "b": "permitted",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 19,
    "word": "approach",
    "pos": "v./n.",
    "meaning": "(v.) 다가오다, 접근하다; (n.) 접근(법)",
    "derivatives": [],
    "examples": [
     {
      "en": "The scheduled launch date for the new cell phone model designed by Elektra Electronics is rapidly approaching.",
      "ko": "Elektra Electronics가 설계한 신형 휴대전화 모델의 예정된 출시일이 빠르게 다가오고 있다."
     },
     {
      "en": "George Atwell's enthusiastic approach to training new employees has earned him a good reputation within the company.",
      "ko": "George Atwell의 신입 직원 교육에 대한 열정적인 접근 방식은 그에게 사내에서 좋은 평판을 안겨주었다."
     }
    ],
    "quiz": {
     "sentence": "The scheduled launch date for the new cell phone model designed by Elektra Electronics is rapidly -------.",
     "a": "setting",
     "b": "approaching",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 20,
    "word": "name",
    "pos": "v./n.",
    "meaning": "(v.) 직책에 임명하다; (n.) 이름, 명성",
    "derivatives": [],
    "examples": [
     {
      "en": "Sam Pickens was named as the new chairman of the board after Hank Tiller resigned from the post.",
      "ko": "Sam Pickens는 Hank Tiller가 그 직책에서 사임한 후 새 이사회 의장으로 임명되었다."
     },
     {
      "en": "The Laguna Hotel announced that it is changing its name to Golden Palm Resort.",
      "ko": "Laguna Hotel은 이름을 Golden Palm Resort로 변경한다고 발표했다."
     }
    ],
    "quiz": {
     "sentence": "Sam Pickens was ------- as the new chairman of the board after Hank Tiller resigned from the post.",
     "a": "named",
     "b": "granted",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 21,
    "word": "attempt",
    "pos": "v./n.",
    "meaning": "(v.) 시도하다; (n.) 시도",
    "derivatives": [],
    "examples": [
     {
      "en": "Glint Manufacturing has attempted to recruit several Web designers but has yet to fill many of its vacancies.",
      "ko": "Glint Manufacturing은 여러 명의 웹 디자이너를 채용하려고 시도했지만 아직 많은 공석을 채우지 못했다."
     },
     {
      "en": "Ms. Nakatomi's latest attempt to start up her own business was unsuccessful due to insufficient investment.",
      "ko": "Ms. Nakatomi의 자신의 사업을 시작하려는 최근 시도는 투자 부족으로 인해 성공하지 못했다."
     }
    ],
    "quiz": {
     "sentence": "Glint Manufacturing has ------- to recruit several Web designers but has yet to fill many of its vacancies.",
     "a": "attempted",
     "b": "persuaded",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 22,
    "word": "lack",
    "pos": "v./n.",
    "meaning": "(v.) ~이 없다, 부족하다; (n.) 부족, 결여",
    "derivatives": [],
    "examples": [
     {
      "en": "Unfortunately, we cannot offer you the position at this time because you lack the required certification in computing.",
      "ko": "안타깝게도, 귀하는 컴퓨터 분야에서 요구되는 자격증이 없기 때문에 현재로서는 그 직책을 제안할 수 없습니다."
     },
     {
      "en": "The east wing reconstruction has been put on hold because of a lack of funding from headquarters.",
      "ko": "동쪽 동 재건축은 본사로부터의 자금 부족으로 인해 보류되었다."
     }
    ],
    "quiz": {
     "sentence": "Unfortunately, we cannot offer you the position at this time because you ------- the required certification in computing.",
     "a": "lack",
     "b": "pass",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 23,
    "word": "lower",
    "pos": "v./a.",
    "meaning": "(v.) 줄이다, 낮추다; (a.) 더 낮은, 인하된",
    "derivatives": [],
    "examples": [
     {
      "en": "Providing employees with free exercise facilities can help lower your company's healthcare costs.",
      "ko": "직원들에게 무료 운동 시설을 제공하는 것은 회사의 의료비를 낮추는 데 도움이 될 수 있다."
     },
     {
      "en": "Customers who make frequent international calls may be eligible for lower rates on calls to certain countries.",
      "ko": "국제 전화를 자주 하는 고객들은 특정 국가로의 통화에 대해 더 낮은 요금을 받을 자격이 있을 수 있다."
     }
    ],
    "quiz": {
     "sentence": "Providing employees with free exercise facilities can help ------- your company's healthcare costs.",
     "a": "lower",
     "b": "predict",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 24,
    "word": "schedule",
    "pos": "n./v.",
    "meaning": "(n.) 일정; (v.) 일정을 잡다",
    "derivatives": [],
    "examples": [
     {
      "en": "Although an engine fault resulted in a brief stop for repairs, the train still arrived in Boston on schedule.",
      "ko": "엔진 결함으로 수리를 위해 잠시 멈췄지만, 그 기차는 여전히 일정대로 Boston에 도착했다."
     },
     {
      "en": "Boats from the city quay to Gull Island are scheduled to depart every 15 minutes during the peak tourism season.",
      "ko": "도시 부두에서 Gull Island로 가는 배는 관광 성수기 동안 15분마다 출발하도록 예정되어 있다."
     }
    ],
    "quiz": {
     "sentence": "Although an engine fault resulted in a brief stop for repairs, the train still arrived in Boston on -------.",
     "a": "schedule",
     "b": "appointment",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 25,
    "word": "increase",
    "pos": "n./v.",
    "meaning": "(n.) 인상, 상승; (v.) 인상하다, 상승하다",
    "derivatives": [],
    "examples": [
     {
      "en": "Customers of Westside Electric are disappointed that the company announced a 3 percent annual price increase.",
      "ko": "Westside Electric의 고객들은 그 회사가 연간 3퍼센트의 가격 인상을 발표한 것에 실망했다."
     },
     {
      "en": "The Crowne Plaza Hotel has decided to increase the rates of its suites starting from next year.",
      "ko": "Crowne Plaza Hotel은 내년부터 스위트룸의 요금을 인상하기로 결정했다."
     }
    ],
    "quiz": {
     "sentence": "Customers of Westside Electric are disappointed that the company announced a 3 percent annual price -------.",
     "a": "statistic",
     "b": "increase",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 26,
    "word": "purchase",
    "pos": "n./v.",
    "meaning": "(n.) 구매(품); (v.) 구매하다",
    "derivatives": [],
    "examples": [
     {
      "en": "Thank you for your recent purchase of our HQ104 photocopier.",
      "ko": "당사의 HQ104 복사기를 최근에 구매해 주셔서 감사합니다."
     },
     {
      "en": "Theatergoers may purchase refreshments from the main lobby during the 30-minute intermission.",
      "ko": "관객들은 30분 휴식 시간 동안 메인 로비에서 다과를 구매할 수 있다."
     }
    ],
    "quiz": {
     "sentence": "Thank you for your recent ------- of our HQ104 photocopier.",
     "a": "purchase",
     "b": "visit",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 27,
    "word": "process",
    "pos": "n./v.",
    "meaning": "(n.) 과정, 가공, 처리; (v.) 가공하다, 처리하다",
    "derivatives": [],
    "examples": [
     {
      "en": "The manufacturing process for Aleva kitchen appliances has been improved in order to boost production rates.",
      "ko": "Aleva 주방 기기의 제조 과정은 생산율을 높이기 위해 개선되었다."
     },
     {
      "en": "Greenacre Inc. specializes in processing recyclable items into affordable building materials.",
      "ko": "Greenacre Inc.는 재활용 가능한 품목을 저렴한 건축 자재로 가공하는 것을 전문으로 한다."
     }
    ],
    "quiz": {
     "sentence": "The manufacturing ------- for Aleva kitchen appliances has been improved in order to boost production rates.",
     "a": "location",
     "b": "process",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 28,
    "word": "lease",
    "pos": "v./n.",
    "meaning": "(v.) 임대하다; (n.) 임대 (계약)",
    "derivatives": [],
    "examples": [
     {
      "en": "Anyone who wishes to lease a cabin at Rosco Ski Resort must present a valid ID and pay a security deposit.",
      "ko": "Rosco Ski Resort에서 오두막을 임대하고자 하는 사람은 누구든 유효한 신분증을 제시하고 보증금을 지불해야 한다."
     },
     {
      "en": "The majority of tenants at Eastfield Condos have signed 18-month leases for their apartments.",
      "ko": "Eastfield Condos의 대다수 세입자들은 그들의 아파트에 대해 18개월 임대 계약에 서명했다."
     }
    ],
    "quiz": {
     "sentence": "Anyone who wishes to ------- a cabin at Rosco Ski Resort must present a valid ID and pay a security deposit.",
     "a": "turn",
     "b": "lease",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 29,
    "word": "request",
    "pos": "n./v.",
    "meaning": "(n.) 요청; (v.) 요청하다",
    "derivatives": [],
    "examples": [
     {
      "en": "At your request, Chad Publications can cancel your subscription to Sports Time Monthly immediately.",
      "ko": "귀하의 요청에 따라, Chad Publications는 Sports Time Monthly 구독을 즉시 취소할 수 있습니다."
     },
     {
      "en": "The finance department requests that all employees submit expense reports by 5 PM on Fridays.",
      "ko": "재무부는 모든 직원이 금요일 오후 5시까지 경비 보고서를 제출하도록 요청한다."
     }
    ],
    "quiz": {
     "sentence": "At your -------, Chad Publications can cancel your subscription to Sports Time Monthly immediately.",
     "a": "claim",
     "b": "request",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 30,
    "word": "support",
    "pos": "n./v.",
    "meaning": "(n.) 지원, 지지, 도움, 후원; (v.) 지지하다, 지원하다",
    "derivatives": [],
    "examples": [
     {
      "en": "To express our gratitude to our investors for their valuable support, we will invite them to our year-end banquet.",
      "ko": "투자자들의 귀중한 지원에 대한 감사를 표하기 위해, 우리는 그들을 연말 연회에 초대할 것이다."
     },
     {
      "en": "Mr. Luiz designed the metal frame that supports more than 250 lights above the theater's main stage.",
      "ko": "Mr. Luiz는 극장 메인 무대 위의 250개가 넘는 조명을 지탱하는 금속 프레임을 설계했다."
     }
    ],
    "quiz": {
     "sentence": "To express our gratitude to our investors for their valuable -------, we will invite them to our year-end banquet.",
     "a": "transaction",
     "b": "support",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 31,
    "word": "notice",
    "pos": "n./v.",
    "meaning": "(n.) 안내, 알림; (v.) 알아차리다, 주목하다",
    "derivatives": [],
    "examples": [
     {
      "en": "Due to inclement weather, the trail to the mountain peak will not be accessible until further notice.",
      "ko": "악천후로 인해, 산 정상으로 가는 등산로는 추후 공지가 있을 때까지 접근할 수 없을 것이다."
     },
     {
      "en": "When Ms. Jones read the job description, she noticed that she lacked several of the academic requirements.",
      "ko": "Ms. Jones가 직무 기술서를 읽었을 때, 그녀는 자신이 여러 학력 요건을 충족하지 못한다는 것을 알아차렸다."
     }
    ],
    "quiz": {
     "sentence": "Due to inclement weather, the trail to the mountain peak will not be accessible until further -------.",
     "a": "attention",
     "b": "notice",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 32,
    "word": "result",
    "pos": "n./v.",
    "meaning": "(n.) 결과; (v.) ~라는 결과를 낳다(in), ~에서 기인하다(from)",
    "derivatives": [],
    "examples": [
     {
      "en": "Simco Solutions analyzes the behavior and Web site preferences of Internet users and compiles the results for various clients.",
      "ko": "Simco Solutions는 인터넷 사용자의 행동과 웹사이트 선호도를 분석하여 다양한 고객을 위해 그 결과를 정리한다."
     },
     {
      "en": "Our decision to use cheaper materials will result in more affordable products for our customers.",
      "ko": "더 저렴한 자재를 사용하기로 한 우리의 결정은 고객들에게 더 합리적인 가격의 제품이라는 결과를 낳을 것이다."
     }
    ],
    "quiz": {
     "sentence": "Simco Solutions analyzes the behavior and Web site preferences of Internet users and compiles the ------- for various clients.",
     "a": "makers",
     "b": "results",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 33,
    "word": "award",
    "pos": "v./n.",
    "meaning": "(v.) 수여하다, 상을 주다; (n.) 상",
    "derivatives": [],
    "examples": [
     {
      "en": "Mr. Gray and Ms. Bailey have been awarded bonuses for their work in securing a contract with Hornet Systems.",
      "ko": "Mr. Gray와 Ms. Bailey는 Hornet Systems와의 계약을 성사시킨 공로로 보너스를 받았다."
     },
     {
      "en": "Margaret Harley has received numerous awards for her performances in Broadway plays.",
      "ko": "Margaret Harley는 브로드웨이 연극에서의 공연으로 수많은 상을 받았다."
     }
    ],
    "quiz": {
     "sentence": "Mr. Gray and Ms. Bailey have been ------- bonuses for their work in securing a contract with Hornet Systems.",
     "a": "awarded",
     "b": "acknowledged",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 34,
    "word": "offer",
    "pos": "v./n.",
    "meaning": "(v.) 제공하다; (n.) 제안, 제공",
    "derivatives": [],
    "examples": [
     {
      "en": "Ace Hotel's front desk staff now offers guests a choice between a room service breakfast or a voucher for the buffet.",
      "ko": "Ace Hotel의 프런트 데스크 직원은 이제 투숙객에게 룸서비스 조식 또는 뷔페 이용권 중에서 선택권을 제공한다."
     },
     {
      "en": "Our new client greatly appreciates our offer to waive the fee for the initial consultation.",
      "ko": "우리의 신규 고객은 초기 상담 수수료를 면제해 주겠다는 우리의 제안을 매우 고마워한다."
     }
    ],
    "quiz": {
     "sentence": "Ace Hotel's front desk staff now ------- guests a choice between a room service breakfast or a voucher for the buffet.",
     "a": "offers",
     "b": "suggests",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 35,
    "word": "complete",
    "pos": "v./a.",
    "meaning": "(v.) (작성) 완료하다; (a.) 완료된",
    "derivatives": [],
    "examples": [
     {
      "en": "All employees should complete the survey on our Web site at their earliest possible convenience.",
      "ko": "모든 직원은 가능한 한 빨리 우리 웹사이트의 설문조사를 완료해야 한다."
     },
     {
      "en": "Once the first stage of construction is complete, a thorough safety inspection of the site will be conducted.",
      "ko": "공사의 첫 단계가 완료되면, 현장에 대한 철저한 안전 점검이 실시될 것이다."
     }
    ],
    "quiz": {
     "sentence": "All employees should ------- the survey on our Web site at their earliest possible convenience.",
     "a": "complete",
     "b": "participate",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 36,
    "word": "open",
    "pos": "v./a.",
    "meaning": "(v.) 열다, 개장하다; (a.) 개장된, 영업 중인",
    "derivatives": [],
    "examples": [
     {
      "en": "Ray's Coffee & Donuts will open its 50th location in downtown Toronto this summer.",
      "ko": "Ray's Coffee & Donuts는 올여름 Toronto 시내에 50번째 지점을 열 것이다."
     },
     {
      "en": "The waterpark will be open to visitors from 9 AM until 7 PM during the school holidays.",
      "ko": "워터파크는 방학 동안 오전 9시부터 오후 7시까지 방문객들에게 개방될 것이다."
     }
    ],
    "quiz": {
     "sentence": "Ray's Coffee & Donuts will ------- its 50th location in downtown Toronto this summer.",
     "a": "expand",
     "b": "open",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 37,
    "word": "measure",
    "pos": "n./v.",
    "meaning": "(n.) 조치, 대책; (v.) 수치를 재다, 측정하다",
    "derivatives": [],
    "examples": [
     {
      "en": "Solaris Motors implements rigid safety measures to ensure that factory workers are not at risk in the workplace.",
      "ko": "Solaris Motors는 공장 근로자들이 작업장에서 위험에 처하지 않도록 엄격한 안전 조치를 시행한다."
     },
     {
      "en": "Prior to purchasing any of our custom curtains, you should measure all of your windows accurately.",
      "ko": "당사의 맞춤형 커튼을 구매하기 전에, 귀하는 모든 창문을 정확하게 측정해야 합니다."
     }
    ],
    "quiz": {
     "sentence": "Solaris Motors implements rigid safety ------- to ensure that factory workers are not at risk in the workplace.",
     "a": "consents",
     "b": "measures",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 38,
    "word": "benefit",
    "pos": "v./n.",
    "meaning": "(v.) 혜택을 얻다, 이득을 얻다; (n.) 혜택, 이득",
    "derivatives": [],
    "examples": [
     {
      "en": "Because college students can benefit from gaining work experience, many apply for our summer internship positions.",
      "ko": "대학생들은 직무 경험을 쌓는 것으로부터 혜택을 얻을 수 있기 때문에, 많은 학생들이 우리의 여름 인턴십 자리에 지원한다."
     },
     {
      "en": "The benefits that the Platinum Membership offers to country club members include priority parking and full access to club facilities.",
      "ko": "Platinum Membership이 컨트리클럽 회원들에게 제공하는 혜택에는 우선 주차와 클럽 시설에 대한 완전한 이용 권한이 포함된다."
     }
    ],
    "quiz": {
     "sentence": "Because college students can ------- from gaining work experience, many apply for our summer internship positions.",
     "a": "benefit",
     "b": "assist",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 39,
    "word": "experience",
    "pos": "n./v.",
    "meaning": "(n.) 경력, 경험; (v.) 경험하다",
    "derivatives": [],
    "examples": [
     {
      "en": "Mr. Annit has extensive experience in managing employees in various departments at Lord Services.",
      "ko": "Mr. Annit은 Lord Services의 여러 부서에서 직원들을 관리한 폭넓은 경력을 가지고 있다."
     },
     {
      "en": "Sanders Frozen Foods has experienced a sharp decrease in earnings since discontinuing its range of vegetarian meals.",
      "ko": "Sanders Frozen Foods는 채식 식사 제품군을 중단한 이후 수익의 급격한 감소를 경험했다."
     }
    ],
    "quiz": {
     "sentence": "Mr. Annit has extensive ------- in managing employees in various departments at Lord Services.",
     "a": "permission",
     "b": "experience",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 40,
    "word": "particular",
    "pos": "n./a.",
    "meaning": "(n.) 세부사항(복수형); (a.) 특정한",
    "derivatives": [],
    "examples": [
     {
      "en": "The orientation session will include a 15-minute break so that attendees may read the particulars of their employment contracts.",
      "ko": "오리엔테이션 세션에는 참석자들이 고용 계약의 세부사항을 읽을 수 있도록 15분의 휴식 시간이 포함될 것이다."
     },
     {
      "en": "Each month, the food subscription service delivers meals from a particular region or country.",
      "ko": "매달, 그 음식 구독 서비스는 특정 지역이나 국가의 음식을 배달한다."
     }
    ],
    "quiz": {
     "sentence": "The orientation session will include a 15-minute break so that attendees may read the ------- of their employment contracts.",
     "a": "particulars",
     "b": "resolutions",
     "answer": "A"
    },
    "tip": ""
   }
  ]
 },
 {
  "week": 8,
  "day": 39,
  "part": "Part 5,6",
  "title": "다의어",
  "words": [
   {
    "no": 1,
    "word": "performance",
    "pos": "",
    "meaning": "① 성과, 실적, 성능 ; ② 공연",
    "derivatives": [],
    "examples": [
     {
      "en": "Ms. Kang's extensive product knowledge is one of the reasons for her impressive sales -------.",
      "ko": ""
     },
     {
      "en": "Theatergoers are politely asked to take their seats ten minutes before the ------- begins.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "Ms. Kang's extensive product knowledge is one of the reasons for her impressive sales -------.",
     "a": "performance",
     "b": "department",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 2,
    "word": "location",
    "pos": "",
    "meaning": "① 장소, 위치 ; ② 지점, 사무소",
    "derivatives": [],
    "examples": [
     {
      "en": "Once a home-based business, Mr. Hewitt's computer repair firm now operates stores in eight -------.",
      "ko": ""
     },
     {
      "en": "PC Wizard has opened retail ------- that stock high-end computer accessories.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "Once a home-based business, Mr. Hewitt's computer repair firm now operates stores in eight -------.",
     "a": "connections",
     "b": "locations",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 3,
    "word": "application",
    "pos": "",
    "meaning": "① 지원(서), 신청(서) ; ② 적용(점), 응용",
    "derivatives": [],
    "examples": [
     {
      "en": "Please submit a completed ------- to the HR manager at Regatta Systems Inc. by 5 PM on December 5.",
      "ko": ""
     },
     {
      "en": "Although all of our employees found the presentation interesting, most of them felt that it had almost no ------- to their daily work.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "Please submit a completed ------- to the HR manager at Regatta Systems Inc. by 5 PM on December 5.",
     "a": "process",
     "b": "application",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 4,
    "word": "operation",
    "pos": "",
    "meaning": "① 영업, 운영 ; ② 작동, 조작",
    "derivatives": [],
    "examples": [
     {
      "en": "After being in business for 25 years, Goodfellow Bakery on Main Street will cease -------.",
      "ko": ""
     },
     {
      "en": "The job of the audio technician at Sema Concert Hall is to check the ------- of every sound system in the music venue.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "After being in business for 25 years, Goodfellow Bakery on Main Street will cease -------.",
     "a": "availability",
     "b": "operation",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 5,
    "word": "reservation",
    "pos": "",
    "meaning": "① 예약 ; ② 주저함, 내키지 않음",
    "derivatives": [],
    "examples": [
     {
      "en": "It is recommended to call La Chez Rouge at least a month in advance to make a ------- for a table.",
      "ko": ""
     },
     {
      "en": "Ms. Shapiro has ------- about moving Bizwell Telecom's head office to the suburbs of Ashville.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "It is recommended to call La Chez Rouge at least a month in advance to make a ------- for a table.",
     "a": "placement",
     "b": "reservation",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 6,
    "word": "assembly",
    "pos": "",
    "meaning": "① 조립 ; ② 모임",
    "derivatives": [],
    "examples": [
     {
      "en": "Although the components are manufactured in Taiwan, the ------- of Typhoon dishwashers is carried out in Australia.",
      "ko": ""
     },
     {
      "en": "Next Wednesday, the staff ------- will be held in the third floor conference room at 8:30 AM.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "Although the components are manufactured in Taiwan, the ------- of Typhoon dishwashers is carried out in Australia.",
     "a": "assembly",
     "b": "meeting",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 7,
    "word": "initiative",
    "pos": "",
    "meaning": "① 계획, 법안 ; ② 적극성, 진취성",
    "derivatives": [],
    "examples": [
     {
      "en": "All residents have shown support for the ------- to provide free broadband Internet service to the county's public schools.",
      "ko": ""
     },
     {
      "en": "Ms. Gillie displayed a great deal of ------- in learning to speak French prior to her important business trip to Paris.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "All residents have shown support for the ------- to provide free broadband Internet service to the county's public schools.",
     "a": "initiative",
     "b": "bonus",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 8,
    "word": "direction",
    "pos": "",
    "meaning": "① 길안내, 지시 ; ② 지휘, 감독",
    "derivatives": [],
    "examples": [
     {
      "en": "For ------- to all major tourist attractions in the city, please download the Shanghai Tourism mobile application.",
      "ko": ""
     },
     {
      "en": "The employee relations division, under the ------- of Lorne Crane, has been credited with maintaining a high level of staff satisfaction.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "For ------- to all major tourist attractions in the city, please download the Shanghai Tourism mobile application.",
     "a": "experiments",
     "b": "directions",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 9,
    "word": "closely",
    "pos": "",
    "meaning": "① 긴밀하게 ; ② 자세히",
    "derivatives": [],
    "examples": [
     {
      "en": "Mr. Higson's marketing division worked ------- with graphic designers to develop the new advertising campaign.",
      "ko": ""
     },
     {
      "en": "Our technical support agents are skilled at listening ------- to properly resolve customer issues.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "Mr. Higson's marketing division worked ------- with graphic designers to develop the new advertising campaign.",
     "a": "heavily",
     "b": "closely",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 10,
    "word": "rather",
    "pos": "",
    "meaning": "① 다소, 꽤 ; ② 차라리",
    "derivatives": [],
    "examples": [
     {
      "en": "Redding Industries' decision to file for bankruptcy was ------- sudden and left many shareholders distressed.",
      "ko": ""
     },
     {
      "en": "The sales director would ------- reschedule the meeting until all the missing data has been obtained.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "Redding Industries' decision to file for bankruptcy was ------- sudden and left many shareholders distressed.",
     "a": "rather",
     "b": "further",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 11,
    "word": "apply",
    "pos": "",
    "meaning": "① 적용하다, 응용하다 ; ② 바르다",
    "derivatives": [],
    "examples": [
     {
      "en": "The business seminar was very informative and gave attendees several skills to ------- to their own work.",
      "ko": ""
     },
     {
      "en": "Remove all dirt and dust before ------- new varnish to your wooden decking.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "The business seminar was very informative and gave attendees several skills to ------- to their own work.",
     "a": "apply",
     "b": "select",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 12,
    "word": "critical",
    "pos": "",
    "meaning": "① 중요한 ; ② 비판적인",
    "derivatives": [],
    "examples": [
     {
      "en": "It is ------- that factory workers follow the instructions in this safety manual as written.",
      "ko": ""
     },
     {
      "en": "Mr. Fulcher is ------- of interviewees who do not put in adequate research or preparation.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "It is ------- that factory workers follow the instructions in this safety manual as written.",
     "a": "actual",
     "b": "critical",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 13,
    "word": "appointment",
    "pos": "",
    "meaning": "① 예약, 약속 ; ② 임명",
    "derivatives": [],
    "examples": [
     {
      "en": "When booking patient -------, please note whether it will be their first visit to our dental clinic.",
      "ko": ""
     },
     {
      "en": "The ------- of a new CFO signals the company's intention to rapidly increase its revenue and profits.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "When booking patient -------, please note whether it will be their first visit to our dental clinic.",
     "a": "circumstances",
     "b": "appointments",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 14,
    "word": "enter",
    "pos": "",
    "meaning": "① 출입하다, 들어가다 ; ② 입력하다",
    "derivatives": [],
    "examples": [
     {
      "en": "All attendees are required to put on a wristband prior to ------- the festival site.",
      "ko": ""
     },
     {
      "en": "To receive news about special offers, please ------- both your mobile phone number and e-mail address.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "All attendees are required to put on a wristband prior to ------- the festival site.",
     "a": "stepping",
     "b": "entering",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 15,
    "word": "develop",
    "pos": "",
    "meaning": "① 개발하다, 수립하다 ; ② 발전시키다",
    "derivatives": [],
    "examples": [
     {
      "en": "The Francis Institute grant is designed to help entrepreneurs ------- their business plans.",
      "ko": ""
     },
     {
      "en": "Toronto-based Eva Electronics has ------- strong relationships with several technology firms in Asia.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "The Francis Institute grant is designed to help entrepreneurs ------- their business plans.",
     "a": "proceed",
     "b": "develop",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 16,
    "word": "view",
    "pos": "",
    "meaning": "① 경치, 경관 ; ② 견해, 관점",
    "derivatives": [],
    "examples": [
     {
      "en": "All rooms at Wallaga Bay Beach Resort offer a spectacular ------- of the ocean and coastline.",
      "ko": ""
     },
     {
      "en": "Opinions expressed in the Readers' Letters section of the newspaper do not necessarily reflect the ------- of our publication.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "All rooms at Wallaga Bay Beach Resort offer a spectacular ------- of the ocean and coastline.",
     "a": "site",
     "b": "view",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 17,
    "word": "consider",
    "pos": "",
    "meaning": "① 여기다, 간주하다 ; ② 고려하다, 검토하다",
    "derivatives": [],
    "examples": [
     {
      "en": "The board members of Shatara Inc. ------- a high standard of customer service to be the company's top priority.",
      "ko": ""
     },
     {
      "en": "Employees who are ------- applying for the position in the accounting department should send an e-mail to Mr. Rico.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "The board members of Shatara Inc. ------- a high standard of customer service to be the company's top priority.",
     "a": "consider",
     "b": "refer",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 18,
    "word": "promote",
    "pos": "",
    "meaning": "① 홍보하다 ; ② 승진시키다",
    "derivatives": [],
    "examples": [
     {
      "en": "Blue Line Technologies has hired actor Ken Lorde to ------- its new range of tablet computers.",
      "ko": ""
     },
     {
      "en": "Karl Simmons has been ------- to Chief Financial Officer at Sandringham Catering Company.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "Blue Line Technologies has hired actor Ken Lorde to ------- its new range of tablet computers.",
     "a": "promote",
     "b": "impress",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 19,
    "word": "reach",
    "pos": "",
    "meaning": "① 도달하다, ~에 가다 ; ② 연락하다",
    "derivatives": [],
    "examples": [
     {
      "en": "Burton Marketing has hired several online marketing experts as part of its effort to ------- new customers.",
      "ko": ""
     },
     {
      "en": "Our customer service team can be ------- 24 hours a day either by phone or by using our online chat.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "Burton Marketing has hired several online marketing experts as part of its effort to ------- new customers.",
     "a": "reach",
     "b": "accept",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 20,
    "word": "cover",
    "pos": "",
    "meaning": "① (보상 범위에) 포함하다, (비용을) 부담하다 ; ② (주제) ~을 다루다",
    "derivatives": [],
    "examples": [
     {
      "en": "Employees should note that the cost for the Willow Valley excursion ------- accommodations and meals for three days.",
      "ko": ""
     },
     {
      "en": "Ms. Jones gave each new employee a handout outlining the main topics that she will ------- during the orientation.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "Employees should note that the cost for the Willow Valley excursion ------- accommodations and meals for three days.",
     "a": "applies",
     "b": "covers",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 21,
    "word": "responsibility",
    "pos": "",
    "meaning": "① 책임 ; ② (담당) 업무, 직무",
    "derivatives": [],
    "examples": [
     {
      "en": "It is each passenger's ------- to take care of their personal belongings during the city bus tour.",
      "ko": ""
     },
     {
      "en": "------- of the senior event coordinator include contacting clients and submitting regular project updates.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "It is each passenger's ------- to take care of their personal belongings during the city bus tour.",
     "a": "permission",
     "b": "responsibility",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 22,
    "word": "order",
    "pos": "",
    "meaning": "① 주문하다 ; ② 지시하다",
    "derivatives": [],
    "examples": [
     {
      "en": "Ms. Ling will take a full inventory before she ------- more laboratory supplies.",
      "ko": ""
     },
     {
      "en": "Pacific Industries has ------- an extensive review of the company's health and safety procedures.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "Ms. Ling will take a full inventory before she ------- more laboratory supplies.",
     "a": "contains",
     "b": "orders",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 23,
    "word": "acquire",
    "pos": "",
    "meaning": "① 인수하다 ; ② 얻다, 확득하다",
    "derivatives": [],
    "examples": [
     {
      "en": "When ALG Software ------- Digital Dream Games in November, all workers will work together at a newly constructed head office.",
      "ko": ""
     },
     {
      "en": "We offer a wide variety of gifts and rewards to customers who ------- enough loyalty points.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "When ALG Software ------- Digital Dream Games in November, all workers will work together at a newly constructed head office.",
     "a": "merges",
     "b": "acquires",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 24,
    "word": "assemble",
    "pos": "",
    "meaning": "① 조립하다 ; ② 모으다, 모이다",
    "derivatives": [],
    "examples": [
     {
      "en": "To satisfy increasing demand, factory workers will ------- more than five hundred new automobiles this week.",
      "ko": ""
     },
     {
      "en": "Before he creates our promotional materials, Mr. Teller will ------- a team of experienced writers.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "To satisfy increasing demand, factory workers will ------- more than five hundred new automobiles this week.",
     "a": "assemble",
     "b": "carry",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 25,
    "word": "conclude",
    "pos": "",
    "meaning": "① 종료하다, 끝내다 ; ② 결론을 내리다",
    "derivatives": [],
    "examples": [
     {
      "en": "The mobile phone launch event will last for approximately one hour and ------- with a demonstration of the device.",
      "ko": ""
     },
     {
      "en": "The financial advisors ------- that the company could significantly reduce its shipping expenses.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "The mobile phone launch event will last for approximately one hour and ------- with a demonstration of the device.",
     "a": "reserve",
     "b": "conclude",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 26,
    "word": "receipt",
    "pos": "",
    "meaning": "① 영수증 ; ② 수령",
    "derivatives": [],
    "examples": [
     {
      "en": "Sales executives who travel to conventions and conferences should turn in ------- for reimbursement.",
      "ko": ""
     },
     {
      "en": "Upon ------- of the faulty device, we will contact you with an estimated timeframe for repairs.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "Sales executives who travel to conventions and conferences should turn in ------- for reimbursement.",
     "a": "procedures",
     "b": "receipts",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 27,
    "word": "occasion",
    "pos": "",
    "meaning": "① 상황 ; ② 특별한 사건",
    "derivatives": [],
    "examples": [
     {
      "en": "The band can create a setlist of songs that is ideal for any -------.",
      "ko": ""
     },
     {
      "en": "Corden City was established 250 years ago, so the city council will mark this important ------- with a street festival.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "The band can create a setlist of songs that is ideal for any -------.",
     "a": "occasion",
     "b": "chance",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 28,
    "word": "reserve",
    "pos": "",
    "meaning": "① 예약하다 ; ② (권한을) 보유하다",
    "derivatives": [],
    "examples": [
     {
      "en": "If you wish to ------- a table in our rooftop dining area, please contact us at least two weeks in advance.",
      "ko": ""
     },
     {
      "en": "Scando Travel Agency ------- the right to cancel tour bookings if payment is not received by the specified deadline.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "If you wish to ------- a table in our rooftop dining area, please contact us at least two weeks in advance.",
     "a": "reserve",
     "b": "appoint",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 29,
    "word": "reference",
    "pos": "",
    "meaning": "① 참고, 참조 ; ② 추천(서)",
    "derivatives": [],
    "examples": [
     {
      "en": "We will hold on to your résumé for future -------, although we currently have no job openings that would suit you.",
      "ko": ""
     },
     {
      "en": "Applicants should include a list of ------- with their application form, résumé, and cover letter.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "We will hold on to your résumé for future -------, although we currently have no job openings that would suit you.",
     "a": "reference",
     "b": "direction",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 30,
    "word": "extend",
    "pos": "",
    "meaning": "① (기한을) 연장하다 ; ② 전하다, 주다",
    "derivatives": [],
    "examples": [
     {
      "en": "The completion date for the renovation work at Ashford Shopping Mall has been ------- to May 2.",
      "ko": ""
     },
     {
      "en": "The business owners ------- an invitation to several potential investors who were interested in touring the manufacturing facility.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "The completion date for the renovation work at Ashford Shopping Mall has been ------- to May 2.",
     "a": "extended",
     "b": "finished",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 31,
    "word": "term",
    "pos": "",
    "meaning": "① (계약) 조건 ; ② 임기",
    "derivatives": [],
    "examples": [
     {
      "en": "If you agree to the ------- of the contract, please sign both copies and send one copy to our Carolton office by mail.",
      "ko": ""
     },
     {
      "en": "During his ------- as the mayor of Leewood, George Ralston made numerous improvements to the town's transportation systems.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "If you agree to the ------- of the contract, please sign both copies and send one copy to our Carolton office by mail.",
     "a": "terms",
     "b": "views",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 32,
    "word": "position",
    "pos": "",
    "meaning": "① 직책, 직급 ; ② 위치, 자리",
    "derivatives": [],
    "examples": [
     {
      "en": "The company's CEO aims to fill the marketing director ------- before the end of the month.",
      "ko": ""
     },
     {
      "en": "By hiring renowned chef Angela Booth and revising its menu, Loyola Bistro will rise to the top ------- among local restaurants.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "The company's CEO aims to fill the marketing director ------- before the end of the month.",
     "a": "position",
     "b": "employment",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 33,
    "word": "shift",
    "pos": "",
    "meaning": "① (교대) 근무 ; ② 변화, 전환",
    "derivatives": [],
    "examples": [
     {
      "en": "When applying for the assembly line operator vacancy, be advised that the role includes weekend -------.",
      "ko": ""
     },
     {
      "en": "In a surprising ------- in its marketing approach, Swift Sportswear will no longer seek endorsements from famous athletes.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "When applying for the assembly line operator vacancy, be advised that the role includes weekend -------.",
     "a": "shifts",
     "b": "entries",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 34,
    "word": "issue",
    "pos": "",
    "meaning": "① (잡지) 호, 쇄 ; ② 문제",
    "derivatives": [],
    "examples": [
     {
      "en": "We apologize that last month's ------- of High Fashion Magazine contained inaccurate information about designer Marika Hemsworth.",
      "ko": ""
     },
     {
      "en": "Local council members are available to discuss a wide range of resident -------, from road repairs to noise complaints.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "We apologize that last month's ------- of High Fashion Magazine contained inaccurate information about designer Marika Hemsworth.",
     "a": "page",
     "b": "issue",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 35,
    "word": "replacement",
    "pos": "",
    "meaning": "① 교환(품), 대체(품) ; ② 후임",
    "derivatives": [],
    "examples": [
     {
      "en": "Customers seeking a refund or ------- should submit an electronic form through our Web site.",
      "ko": ""
     },
     {
      "en": "At Mr. Barringer's retirement dinner, he introduced his ------- and discussed her notable business achievements.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "Customers seeking a refund or ------- should submit an electronic form through our Web site.",
     "a": "replacement",
     "b": "direction",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 36,
    "word": "leave",
    "pos": "",
    "meaning": "① 떠나다 ; ② 남겨두다",
    "derivatives": [],
    "examples": [
     {
      "en": "Gym members should ensure they have placed all of their belongings in a locker before ------- the dressing room.",
      "ko": ""
     },
     {
      "en": "At the end of the meeting, Ms. Dawson ------- additional copies of the presentation handouts on a desk.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "Gym members should ensure they have placed all of their belongings in a locker before ------- the dressing room.",
     "a": "leaving",
     "b": "managing",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 37,
    "word": "take",
    "pos": "",
    "meaning": "① 데려가다, 가져가다 ; ② (시간이) 걸리다, 사용하다",
    "derivatives": [],
    "examples": [
     {
      "en": "Mr. Jones offered to ------- the new recruits on a tour of the factory and its adjoining office buildings.",
      "ko": ""
     },
     {
      "en": "Drivers working for Big Apple Taxis typically ------- about 45 minutes for their lunch break.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "Mr. Jones offered to ------- the new recruits on a tour of the factory and its adjoining office buildings.",
     "a": "take",
     "b": "tell",
     "answer": "A"
    },
    "tip": ""
   },
   {
    "no": 38,
    "word": "return",
    "pos": "",
    "meaning": "① 반품하다 ; ② 돌아오다",
    "derivatives": [],
    "examples": [
     {
      "en": "Since the bookcase Ms. Garfield purchased was too wide, she ------- it to the furniture store.",
      "ko": ""
     },
     {
      "en": "Participants will receive a Certificate of Achievement within 7 days of ------- from the workshop.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "Since the bookcase Ms. Garfield purchased was too wide, she ------- it to the furniture store.",
     "a": "tailored",
     "b": "returned",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 39,
    "word": "determine",
    "pos": "",
    "meaning": "① 결정하다, 확정하다 ; ② 알아내다",
    "derivatives": [],
    "examples": [
     {
      "en": "Our hotel can provide videos of each room to help event organizers ------- the most suitable room for their event.",
      "ko": ""
     },
     {
      "en": "Engineers are still attempting to ------- the cause of malfunction on the assembly line.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "Our hotel can provide videos of each room to help event organizers ------- the most suitable room for their event.",
     "a": "broaden",
     "b": "determine",
     "answer": "B"
    },
    "tip": ""
   },
   {
    "no": 40,
    "word": "consult",
    "pos": "",
    "meaning": "① 상담하다 ; ② 참조하다",
    "derivatives": [],
    "examples": [
     {
      "en": "When making a critical department decision, Mr. Wallace finds it useful to ------- his employees for their opinions.",
      "ko": ""
     },
     {
      "en": "Please ------- the in-flight magazine to browse the full range of available snacks and beverages.",
      "ko": ""
     }
    ],
    "quiz": {
     "sentence": "When making a critical department decision, Mr. Wallace finds it useful to ------- his employees for their opinions.",
     "a": "consult",
     "b": "request",
     "answer": "A"
    },
    "tip": ""
   }
  ]
 },
 {
  "week": 8,
  "day": 40,
  "part": "Part 7",
  "title": "독해가 쉬워지는 어휘 ④",
  "words": [
   {
    "no": 1,
    "word": "reflect",
    "pos": "v.",
    "meaning": "~을 반영하다",
    "derivatives": [],
    "examples": [
     {
      "en": "Although recent transactions are not reflected in the balance shown on the statement, they will be updated in the next billing cycle.",
      "ko": "최근 거래 내역 건들이 명세서에 보여진 잔액에 반영되어 있지 않지만, 그것들은 다음 번 청구서 발송 주기 때 업데이트 될 것입니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 2,
    "word": "top-notch",
    "pos": "a.",
    "meaning": "최고의, 일류의",
    "derivatives": [],
    "examples": [
     {
      "en": "Experience our top-notch customer service, where dedicated support teams are committed to promptly addressing your needs.",
      "ko": "전담 지원팀이 귀하의 요구 사항을 신속하게 해결하기 위해 전념하는 최고의 고객 서비스를 경험해 보세요."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 3,
    "word": "congested",
    "pos": "a.",
    "meaning": "붐비는, 혼잡한",
    "derivatives": [
     {
      "word": "congestion",
      "pos": "n.",
      "meaning": "혼잡"
     }
    ],
    "examples": [
     {
      "en": "During rush hour, the city's highways become congested, causing delays for commuters.",
      "ko": "출퇴근 혼잡 시간 동안에는, 도시의 고속도로가 붐벼서 통근자들을 지연시킵니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\ntraffic congestion  교통 체증"
   },
   {
    "no": 4,
    "word": "contemporary",
    "pos": "a.",
    "meaning": "현대의",
    "derivatives": [],
    "examples": [
     {
      "en": "The interior designer advises clients about the latest contemporary home decor and design concepts.",
      "ko": "그 인테리어 디자이너는 고객들에게 최신의 현대적인 실내 장식과 디자인 컨셉에 대해 조언해 줍니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 5,
    "word": "impending",
    "pos": "a.",
    "meaning": "임박한, 곧 닥칠",
    "derivatives": [],
    "examples": [
     {
      "en": "The team worked tirelessly to prepare for the impending product launch.",
      "ko": "그 팀은 임박한 제품 출시에 대비하기 위해 부단히 노력했습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 6,
    "word": "house",
    "pos": "v.",
    "meaning": "~에게 거처를 제공하다, ~을 수용하다",
    "derivatives": [],
    "examples": [
     {
      "en": "The newly built complex will house both residential apartments and commercial spaces.",
      "ko": "새로 건설되는 단지에는 주거용 아파트와 상업 공간이 모두 들어설 예정입니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 7,
    "word": "respective",
    "pos": "a.",
    "meaning": "각자의, 각각의",
    "derivatives": [
     {
      "word": "respectively",
      "pos": "ad.",
      "meaning": "각각"
     }
    ],
    "examples": [
     {
      "en": "The innovation team consisted of three members, all experts in their respective fields: software development, hardware design, and user experience.",
      "ko": "혁신팀은 세 명으로 구성되어 있는데, 이들 모두는 각자의 분야인 소프트웨어 개발, 하드웨어 설계, 그리고 사용자 경험에서 전문가입니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 8,
    "word": "beforehand",
    "pos": "ad.",
    "meaning": "사전에, 미리",
    "derivatives": [],
    "examples": [
     {
      "en": "If you want to secure a spot in the workshop, you should register beforehand.",
      "ko": "워크숍에 자리를 확보하고 싶다면, 미리 등록을 해야 합니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 9,
    "word": "take advantage of",
    "pos": "",
    "meaning": "~을 이용하다",
    "derivatives": [],
    "examples": [
     {
      "en": "While staying at our resort, guests may take advantage of diverse outdoor activities, such as hiking, snorkeling, and other water sports.",
      "ko": "저희 리조트에 머무시는 동안 고객들은 하이킹, 스노클링, 기타 수상 스포츠와 같은 다양한 야외 활동을 이용하실 수 있습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 10,
    "word": "solid",
    "pos": "a.",
    "meaning": "단단한, 견고한, 확실한",
    "derivatives": [],
    "examples": [
     {
      "en": "The startup's innovative approach to technology is expected to produce solid returns for its early investors.",
      "ko": "그 신생 기업의 혁신적인 기술 접근 방식은 초기 투자자들에게 확실한 수익을 가져다 줄 것으로 기대됩니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 11,
    "word": "associated with",
    "pos": "",
    "meaning": "~와 관련된",
    "derivatives": [],
    "examples": [
     {
      "en": "The anxiety and stress associated with public speaking can be significantly reduced through effective preparation and practice.",
      "ko": "사람들 앞에서 말하는 것과 관련된 불안과 스트레스는 효과적인 준비와 연습을 통해 크게 줄어들 수 있습니다."
     }
    ],
    "quiz": null,
    "tip": "기출 Paraphrasing\nassociated with → related to (~와 관련 있는)"
   },
   {
    "no": 12,
    "word": "commercial",
    "pos": "a.",
    "meaning": "상업의, 상업용의",
    "derivatives": [],
    "examples": [
     {
      "en": "The real estate agency provides expert advice for clients interested in both residential and commercial properties.",
      "ko": "그 부동산 중개업소는 주거용과 상업용 건물 모두에 관심 있는 고객들을 위해 전문적인 조언을 제공하고 있습니다."
     },
     {
      "en": "The new commercial for the product highlights its innovative features and benefits.",
      "ko": "그 제품의 새 광고는 제품의 혁신적인 특징과 이점을 잘 설명하고 있습니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\nresident  n. 주민, 거주자"
   },
   {
    "no": 13,
    "word": "utilities",
    "pos": "n.",
    "meaning": "수도, 전기, 가스 등의 비용 (= utility expenses)",
    "derivatives": [],
    "examples": [
     {
      "en": "The monthly rent for the apartment includes all utilities, such as water, electricity, and gas.",
      "ko": "아파트 월세에는 수도, 전기, 그리고 가스와 같은 모든 공공요금이 포함됩니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 14,
    "word": "insulation",
    "pos": "n.",
    "meaning": "단열 처리",
    "derivatives": [
     {
      "word": "insulate",
      "pos": "v.",
      "meaning": "단열 처리를 하다"
     }
    ],
    "examples": [
     {
      "en": "Proper insulation is essential for maintaining a comfortable temperature inside your home throughout the year.",
      "ko": "적절한 단열은 일 년 내내 여러분의 집 안에서 쾌적한 온도를 유지하는 데 필수적입니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\nventilation  환기"
   },
   {
    "no": 15,
    "word": "enforce",
    "pos": "v.",
    "meaning": "~을 시행하다",
    "derivatives": [
     {
      "word": "enforcement",
      "pos": "n.",
      "meaning": "집행, 시행"
     }
    ],
    "examples": [
     {
      "en": "Strict parking rules are enforced to prevent congestion and ensure safety on the streets.",
      "ko": "혼잡을 방지하고 도로의 안전을 확보하기 위해 엄격한 주차 규칙이 시행되고 있습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 16,
    "word": "be subject to + 명사",
    "pos": "",
    "meaning": "~의 대상이다, ~의 영향을 받게 되어 있다",
    "derivatives": [],
    "examples": [
     {
      "en": "Please note that the schedule for the conference sessions is subject to change, so check for updates regularly.",
      "ko": "컨퍼런스 세션의 일정은 변경의 대상이므로, 정기적으로 최신 소식을 확인하시기 바랍니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 17,
    "word": "misleading",
    "pos": "a.",
    "meaning": "오해하게 하는",
    "derivatives": [],
    "examples": [
     {
      "en": "The newspaper article was misleading because it contained inaccurate information about the company's financial performance.",
      "ko": "그 신문 기사는 회사의 재무 실적에 대한 부정확한 정보를 담고 있어서 독자들을 오해하게 합니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 18,
    "word": "earn",
    "pos": "v.",
    "meaning": "~을 얻다, 받다, 벌다",
    "derivatives": [
     {
      "word": "earnings",
      "pos": "n.",
      "meaning": "소득"
     }
    ],
    "examples": [
     {
      "en": "The recent survey results revealed that our product has earned the highest ratings for customer satisfaction among all competing brands.",
      "ko": "최근 조사 결과 우리 제품은 경쟁 브랜드 중 가장 높은 고객 만족도 평가를 받았습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 19,
    "word": "critic",
    "pos": "n.",
    "meaning": "비평가, 평론가",
    "derivatives": [
     {
      "word": "critical",
      "pos": "a.",
      "meaning": "비판적인"
     },
     {
      "word": "criticism",
      "pos": "n.",
      "meaning": "비판, 비평"
     },
     {
      "word": "criticize",
      "pos": "v.",
      "meaning": "~을 비판하다"
     }
    ],
    "examples": [
     {
      "en": "Julien Clerc's debut performance was positively reviewed by the critics.",
      "ko": "줄리앙 클레르의 데뷔 무대는 평론가들로부터 긍정적으로 평가 받았습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 20,
    "word": "complex",
    "pos": "n.",
    "meaning": "복합 단지[건물]",
    "derivatives": [],
    "examples": [
     {
      "en": "The developer plans to build an apartment complex on the vacant lot at the corner of Main Street and Elm Avenue.",
      "ko": "개발업자는 메인 스트리트와 엘름 애비뉴 모퉁이의 공터에 아파트 단지를 지을 계획입니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 21,
    "word": "infrastructure",
    "pos": "n.",
    "meaning": "기본 시설, 사회[경제] 기반 시설",
    "derivatives": [],
    "examples": [
     {
      "en": "The mayor announced a comprehensive plan to improve the city's infrastructure, including upgrading roads and public transportation.",
      "ko": "시장은 도시의 기반 시설을 개선하기 위한 종합적인 계획을 발표했는데, 이는 도로와 대중교통을 개선하는 것을 포함하고 있습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 22,
    "word": "up and running",
    "pos": "",
    "meaning": "제대로 운영[작동]되는",
    "derivatives": [],
    "examples": [
     {
      "en": "After a week of troubleshooting, we finally got the new software up and running smoothly.",
      "ko": "일주일간의 문제 해결 끝에, 우리는 마침내 새 소프트웨어를 제대로 작동하게 만들었습니다."
     }
    ],
    "quiz": null,
    "tip": "기출 Paraphrasing\nup and running → operational (운영 중인)"
   },
   {
    "no": 23,
    "word": "publication",
    "pos": "n.",
    "meaning": "출판(물)",
    "derivatives": [
     {
      "word": "publish",
      "pos": "v.",
      "meaning": "~을 출판하다"
     }
    ],
    "examples": [
     {
      "en": "We carefully evaluate all submitted articles, and only those that meet our quality standards are considered for publication.",
      "ko": "저희는 제출된 모든 글들을 신중히 평가하며, 저희의 품질 기준을 충족하는 글들만 출간 대상으로 간주합니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 24,
    "word": "spectacular",
    "pos": "a.",
    "meaning": "장관인, 극적인",
    "derivatives": [],
    "examples": [
     {
      "en": "Families vacationing in Maui can enjoy spectacular views of the sunset from the beaches along the west coast.",
      "ko": "마우이에서 휴가를 보내고 있는 가족들은 서쪽 해안을 따라 펼쳐진 해변에서 멋진 일몰 경관을 감상할 수 있습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 25,
    "word": "impede",
    "pos": "v.",
    "meaning": "~을 방해하다, 지체시키다",
    "derivatives": [],
    "examples": [
     {
      "en": "The construction work on the main road has been causing significant delays and can impede the flow of local traffic during rush hours.",
      "ko": "주요 도로 건설 공사는 극심한 지체를 발생시키고 있으며 출퇴근 시간에 지역의 교통 흐름을 방해할 수 있습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 26,
    "word": "be entitled to + 명사",
    "pos": "",
    "meaning": "~을 받을 자격이 되다",
    "derivatives": [],
    "examples": [
     {
      "en": "Hotel guests who stay five consecutive nights in one year will be entitled to a complimentary room upgrade on their next visit.",
      "ko": "1년에 5박을 연속으로 묵는 호텔 투숙객은 다음 방문 시 무료 객실 업그레이드를 받을 자격을 얻을 것입니다."
     }
    ],
    "quiz": null,
    "tip": "「be eligible for + 명사」도 같은 의미로 쓰입니다."
   },
   {
    "no": 27,
    "word": "on-site",
    "pos": "ad.",
    "meaning": "현장에서",
    "derivatives": [
     {
      "word": "on-site",
      "pos": "a.",
      "meaning": "현장의"
     }
    ],
    "examples": [
     {
      "en": "Visitors to the museum will find that audio guides can be purchased on-site to enhance their tour experience.",
      "ko": "박물관 방문객들은 견학 경험을 향상시키기 위해 현장에서 오디오 가이드를 구입할 수 있다는 것을 알게 될 것입니다."
     }
    ],
    "quiz": null,
    "tip": "기출 Paraphrasing\ncan be purchased on-site → be sold at the venue (현장에서 판매되다)"
   },
   {
    "no": 28,
    "word": "reconfiguration",
    "pos": "n.",
    "meaning": "구조 변경",
    "derivatives": [],
    "examples": [
     {
      "en": "Considering the upcoming building reconfiguration project scheduled for next month, implementing telecommuting could be a solution for our company.",
      "ko": "다음 달 예정된 건물 구조 변경 프로젝트를 고려할 때, 재택근무를 시행하는 것이 우리 회사에게 해결책이 될 수 있습니다."
     }
    ],
    "quiz": null,
    "tip": "기출 Paraphrasing\nbuilding reconfiguration → change the layout of the building (건물의 배치를 바꾸다)"
   },
   {
    "no": 29,
    "word": "setback",
    "pos": "n.",
    "meaning": "차질",
    "derivatives": [],
    "examples": [
     {
      "en": "The construction project experienced numerous setbacks, including unexpected weather delays and labor shortages.",
      "ko": "건설 프로젝트는 예상치 못한 기상으로 인한 지연과 인력 부족 등 많은 차질을 겪었습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 30,
    "word": "on the premises",
    "pos": "",
    "meaning": "부지 내에, 관내에",
    "derivatives": [],
    "examples": [
     {
      "en": "The shopping mall has a strict policy in which any vehicles left on its premises overnight will be towed at the owner's expense.",
      "ko": "그 쇼핑몰에는 하룻밤 사이에 부지 내에 남겨진 어떤 차량도 소유주의 비용으로 견인되도록 하는 엄격한 정책이 있습니다."
     }
    ],
    "quiz": null,
    "tip": "관련 기출\non-premises  부지 내의"
   },
   {
    "no": 31,
    "word": "voice",
    "pos": "v.",
    "meaning": "목소리를 내다, 말로 표하다",
    "derivatives": [],
    "examples": [
     {
      "en": "The construction of the new highway went ahead despite concerns voiced by environmental activists about its potential impact on local wildlife.",
      "ko": "지역 야생 동물에 미칠 수 있는 영향에 대해 환경 운동가들이 표명한 우려에도 불구하고 새로운 고속도로 건설 공사가 진행되었습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 32,
    "word": "portray",
    "pos": "v.",
    "meaning": "~을 나타내다, 묘사하다",
    "derivatives": [
     {
      "word": "portrait",
      "pos": "n.",
      "meaning": "묘사"
     }
    ],
    "examples": [
     {
      "en": "The marketing team worked hard to portray the brand as environmentally conscious and socially responsible.",
      "ko": "마케팅 팀은 그 브랜드를 환경을 의식하고 사회적으로 책임감이 있는 것으로 묘사하기 위해 열심히 노력했습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 33,
    "word": "advocate",
    "pos": "v.",
    "meaning": "~을 지지하다, 옹호하다",
    "derivatives": [
     {
      "word": "advocate",
      "pos": "n.",
      "meaning": "옹호자, 지지자"
     }
    ],
    "examples": [
     {
      "en": "The environmentalist group advocated the use of renewable energy sources to reduce carbon emissions.",
      "ko": "그 환경운동가 단체는 탄소 배출을 줄이기 위해 재생 가능한 에너지원의 사용을 지지했습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 34,
    "word": "divert",
    "pos": "v.",
    "meaning": "~을 우회시키다, 전환시키다",
    "derivatives": [],
    "examples": [
     {
      "en": "During the road construction, drivers are diverted onto a different route while the crews work on widening the highway.",
      "ko": "도로 공사 중에, 인부들이 고속도로를 확장하는 작업을 하는 동안 운전자들은 다른 경로로 우회합니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 35,
    "word": "furnished",
    "pos": "a.",
    "meaning": "가구가 비치된",
    "derivatives": [],
    "examples": [
     {
      "en": "The apartment for rent comes fully furnished, complete with modern appliances and stylish furniture.",
      "ko": "임대 가능한 그 아파트는 가구가 완비되어 있는데, 현대적인 가전제품들과 멋진 가구를 완벽히 갖추고 있습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 36,
    "word": "identify",
    "pos": "v.",
    "meaning": "~이 무엇인지 확인하다",
    "derivatives": [],
    "examples": [
     {
      "en": "During the upcoming meeting, we will identify the strengths and weaknesses of our current marketing strategy.",
      "ko": "곧 있을 회의에서 우리는 현재 우리 마케팅 전략의 강점과 약점이 무엇인지 확인할 것입니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 37,
    "word": "reportedly",
    "pos": "ad.",
    "meaning": "전하는 바에 따르면, 소문에 의하면",
    "derivatives": [],
    "examples": [
     {
      "en": "Profits reportedly fell after the market responded negatively to our decision to restructure the product lineup.",
      "ko": "제품 라인업을 개편하기로 한 우리의 결정에 시장이 부정적인 반응을 보이자 수익이 감소한 것으로 전해졌습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 38,
    "word": "minimal",
    "pos": "a.",
    "meaning": "최소한의",
    "derivatives": [
     {
      "word": "minimum",
      "pos": "a.",
      "meaning": "최저의, 최소한의"
     },
     {
      "word": "minimum",
      "pos": "n.",
      "meaning": "최소한도"
     }
    ],
    "examples": [
     {
      "en": "Native wildflowers are a great choice for gardeners who want blossoms that require minimal care.",
      "ko": "최소한의 관리만 필요한 꽃을 원하는 정원사들에게 토종 야생화는 아주 좋은 선택입니다."
     }
    ],
    "quiz": null,
    "tip": "기출 Paraphrasing\nrequire minimal care → easy to maintain (관리하기 쉬운)"
   },
   {
    "no": 39,
    "word": "breakthrough",
    "pos": "n.",
    "meaning": "돌파구, 획기적 발전",
    "derivatives": [],
    "examples": [
     {
      "en": "Breakthroughs in manufacturing technology have boosted our production to five times the amount we had before.",
      "ko": "제조 기술의 획기적인 발전이 우리의 생산량을 이전보다 5배 증가시켰습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   },
   {
    "no": 40,
    "word": "high-profile",
    "pos": "a.",
    "meaning": "세간의 이목을 끄는, 유명한",
    "derivatives": [],
    "examples": [
     {
      "en": "The high-profile merger between the two tech giants made headlines for weeks.",
      "ko": "두 거대 기술 기업 간의 세간의 이목을 끄는 합병은 몇 주 동안 대서특필되었습니다."
     }
    ],
    "quiz": null,
    "tip": ""
   }
  ]
 }
];
