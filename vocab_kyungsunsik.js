// 경선식 중학 영단어 완성 — 연상법 단어장 (30강)
const VOCAB_KSS = [
 {
  "day": 1,
  "title": "1강",
  "words": [
   {
    "day": 1,
    "word": "persuade",
    "pron": "[pərswéid]",
    "pos": "v.",
    "meaning": "설득하다",
    "tip": "\"이 길은 bus way다!\"라며 자가용은 다니지 말라고 경찰이 설득하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 1
   },
   {
    "day": 1,
    "word": "muscle",
    "pron": "[mʌ́sl]",
    "pos": "n.",
    "meaning": "근육",
    "tip": "멋을 내기 위해 키우는 근육",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 2
   },
   {
    "day": 1,
    "word": "nervous",
    "pron": "[nə́ːrvəs]",
    "pos": "a.",
    "meaning": "불안해하는",
    "tip": "\"어린 널 버스에 태워 유치원에 혼자 보내기가 불안하구나.\" 즉, 불안해하는",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 3
   },
   {
    "day": 1,
    "word": "camel",
    "pron": "[kǽməl]",
    "pos": "n.",
    "meaning": "낙타",
    "tip": "순하지만 입에 손을 대면 깨물 낙타",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 4
   },
   {
    "day": 1,
    "word": "feature",
    "pron": "[fíːtʃər]",
    "pos": "n.",
    "meaning": "¹얼굴 생김새 ²특징",
    "tip": "그 아이는 삐쳐 있는 얼굴 생김새가 특징",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 5
   },
   {
    "day": 1,
    "word": "district",
    "pron": "[dístrikt]",
    "pos": "n.",
    "meaning": "구역, 지역",
    "tip": "뒤 street(거리)의 깡패 집단 구역, 지역",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 6
   },
   {
    "day": 1,
    "word": "beggar",
    "pron": "[bégər]",
    "pos": "n.",
    "meaning": "거지",
    "tip": "\"배가 고파요...\" 하는 거지",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "beg",
      "pos": "",
      "meaning": "청하다, 구걸하다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 7
   },
   {
    "day": 1,
    "word": "severe",
    "pron": "[siviər]",
    "pos": "a.",
    "meaning": "엄격한, 가혹한, 심각한",
    "tip": "밤늦게 들어온 아이에게 \"지금이 밤 12시여!\"라고 야단치는 엄격한, 심각한 아버지",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "severely",
      "pos": "",
      "meaning": "엄하게, 가혹하게"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 8
   },
   {
    "day": 1,
    "word": "departure",
    "pron": "[dipáːrtʃər]",
    "pos": "n.",
    "meaning": "출발",
    "tip": "보트 뒤에 사람을 빠쳐(빠뜨려)버리고 출발",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "depart",
      "pos": "",
      "meaning": "출발하다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 9
   },
   {
    "day": 1,
    "word": "agriculture",
    "pron": "[ǽgrikʌ̀ltʃər]",
    "pos": "n.",
    "meaning": "농업, 농사",
    "tip": "애가 그리(그렇게) 벼를 칼로 쳐서 추수하는 농업, 농사",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "agricultural",
      "pos": "",
      "meaning": "농업의 (-al: 형용사형 어미)"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 10
   },
   {
    "day": 1,
    "word": "opportunity",
    "pron": "[ɑ̀pərtjúːnəti]",
    "pos": "n.",
    "meaning": "기회",
    "tip": "아파트 분양 신청서를 너티(넣지)! 분양받을 기회!",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 11
   },
   {
    "day": 1,
    "word": "seek",
    "pron": "[siːk]",
    "pos": "v.",
    "meaning": "찾다, 구하다",
    "tip": "눈 씻구(씻고서) 찾아보다, 즉 찾다, 구하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "seek for",
      "pos": "",
      "meaning": "~을 찾다 (= look for)"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 12
   },
   {
    "day": 1,
    "word": "admit",
    "pron": "[ədmít]",
    "pos": "v.",
    "meaning": "¹인정하다 ²(입학·입국 등을) 허가하다",
    "tip": "북한군이 땅굴의 어두운 밑을 통해 월남하자 정부에서 탈북자로 인정하다, 입국을 허가하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "admission",
      "pos": "",
      "meaning": "인정, 입장(허가), 입학(허가) (-sion: 명사형 어미)"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 13
   },
   {
    "day": 1,
    "word": "slip",
    "pron": "[slip]",
    "pos": "v. n.",
    "meaning": "미끄러지다 / 미끄러짐",
    "tip": "목욕탕에서 슬리퍼를 신고 미끄러지다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 14
   },
   {
    "day": 1,
    "word": "oppose",
    "pron": "[əpóuz]",
    "pos": "v.",
    "meaning": "반대하다",
    "tip": "\"그 법안을 (뒤)엎어주세요!\" 하고 반대하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 15
   },
   {
    "day": 1,
    "word": "opponent",
    "pron": "[əpóunənt]",
    "pos": "n.",
    "meaning": "(경기·대회 등의) 상대, 반대자",
    "tip": "1. 격투기 경기에서 상대를 엎어놓은 후 패다  2. oppose(반대하다) + ent(~사람): 상대, 반대자",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 16
   },
   {
    "day": 1,
    "word": "volunteer",
    "pron": "[vɑ̀ləntíər]",
    "pos": "n. v.",
    "meaning": "자원봉사자, 지원자 / 자진하여 ~하다",
    "tip": "\"제가 할게요\" 하고 (제)발로 튀어나오는 자원봉사자",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "voluntary",
      "pos": "",
      "meaning": "자발적인"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 17
   },
   {
    "day": 1,
    "word": "turkey",
    "pron": "[tə́ːrki]",
    "pos": "n.",
    "meaning": "칠면조",
    "tip": "털도 많고 키도 큰 칠면조",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 18
   },
   {
    "day": 1,
    "word": "purchase",
    "pron": "[pə́ːrtʃəs]",
    "pos": "v. n.",
    "meaning": "사다, 구입하다 / 구입",
    "tip": "시장 바닥에 좌판을 펼쳤수, 그러자 사람들이 사다, 구입하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 19
   },
   {
    "day": 1,
    "word": "illegal",
    "pron": "[ilíːgəl]",
    "pos": "a.",
    "meaning": "불법적인",
    "tip": "\"나는 일리(이리로) 갈 거야.\" 하며 도로를 건너는 불법적인 무단횡단",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 20
   },
   {
    "day": 1,
    "word": "climb",
    "pron": "[klaim]",
    "pos": "v.",
    "meaning": "오르다, 기어오르다",
    "tip": "큰 라임을 따러 나무에 기어오르다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "climber",
      "pos": "",
      "meaning": "기어오르는 사람, 등산가 (-er: ~사람, ~것)"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 21
   },
   {
    "day": 1,
    "word": "fellow",
    "pron": "[félou]",
    "pos": "n.",
    "meaning": "친구, 녀석",
    "tip": "Hello라고 인사하는 친구, 녀석",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 22
   },
   {
    "day": 1,
    "word": "claw",
    "pron": "[klɔː]",
    "pos": "n.",
    "meaning": "발톱",
    "tip": "고양이가 숨겼던 발톱을 클러(끌러)내다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 23
   },
   {
    "day": 1,
    "word": "palm",
    "pron": "[pɑːm]",
    "pos": "n.",
    "meaning": "손바닥",
    "tip": "엉덩이를 팡! 팡! 손바닥으로 때리다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 24
   },
   {
    "day": 1,
    "word": "secure",
    "pron": "[sikjúər]",
    "pos": "a. v.",
    "meaning": "안전한 / 안전하게 하다",
    "tip": "추운 겨울 씨(씨앗)을 온실에서 키워 씨앗이 안전한, 안전하게 하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "security",
      "pos": "",
      "meaning": "안전, 보안, 경비 (-ity: 명사형 어미)"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 25
   },
   {
    "day": 1,
    "word": "baggage",
    "pron": "[bǽgidʒ]",
    "pos": "n.",
    "meaning": "(여행할 때의) 수하물, 짐",
    "tip": "여행할 때 가지고 가는 bag이지(가방이지), 즉 여행용 수하물, 짐",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 26
   },
   {
    "day": 1,
    "word": "range",
    "pron": "[réindʒ]",
    "pos": "n. v.",
    "meaning": "범위, 영역 / ~의 범위에 걸치다",
    "tip": "일기예보에서 알려주는 rain(비)가 오는 地(땅 지)의 범위, 영역",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 27
   },
   {
    "day": 1,
    "word": "donkey",
    "pron": "[dɑ́ŋki]",
    "pos": "n.",
    "meaning": "당나귀",
    "tip": "돈키호테가 타는 당나귀",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 28
   },
   {
    "day": 1,
    "word": "bark",
    "pron": "[bɑːrk]",
    "pos": "v.",
    "meaning": "짖다",
    "tip": "개가 박! 박! 짖다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 29
   },
   {
    "day": 1,
    "word": "task",
    "pron": "[tæsk]",
    "pos": "n.",
    "meaning": "해야 할 일, 직무",
    "tip": "desk(책상)에 앉아 해야 할 일, 직무",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 30
   }
  ]
 },
 {
  "day": 2,
  "title": "2강",
  "words": [
   {
    "day": 2,
    "word": "jail",
    "pron": "[dʒeil]",
    "pos": "n.",
    "meaning": "교도소",
    "tip": "죄 1(하나) 저질러서 들어간 교도소",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 1
   },
   {
    "day": 2,
    "word": "belong",
    "pron": "[bilɔ́ːŋ]",
    "pos": "v.",
    "meaning": "(~에) 속하다",
    "tip": "B조에 long(길게) 줄을 서 있는 사람들은 B조에 속하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "belong to",
      "pos": "",
      "meaning": "~에 속하다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 2
   },
   {
    "day": 2,
    "word": "civilian",
    "pron": "[siviljən]",
    "pos": "n. a.",
    "meaning": "일반 시민, 민간인 / 민간(인)의",
    "tip": "시 땅을 빌려 쓰는 사람들, 즉 일반 시민, 민간인",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "civil",
      "pos": "",
      "meaning": "시민의, 민간의"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 3
   },
   {
    "day": 2,
    "word": "hook",
    "pron": "[huk]",
    "pos": "n.",
    "meaning": "갈고리",
    "tip": "피터팬의 후크 선장의 갈고리",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 4
   },
   {
    "day": 2,
    "word": "bubble",
    "pron": "[bʌ́bl]",
    "pos": "n.",
    "meaning": "거품, 비눗방울",
    "tip": "밥을 할 때 부글부글 생기는 거품",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 5
   },
   {
    "day": 2,
    "word": "recognize",
    "pron": "[rékəgnàiz]",
    "pos": "v.",
    "meaning": "¹알아차리다 ²인정하다",
    "tip": "\"내 꺼구나!(이즈)\" 하고 잃어버렸던 자신의 책을 알아차리다, 그 책에 쓰여 있는 이름을 보고 내 것임을 인정하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "recognition",
      "pos": "",
      "meaning": "인식, 인정 (-tion: 명사형 어미)"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 6
   },
   {
    "day": 2,
    "word": "decorate",
    "pron": "[dékərèit]",
    "pos": "v.",
    "meaning": "장식하다",
    "tip": "아프리카 원주민이 大(큰) 코를 뼈 조각 등으로 장식하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "decoration",
      "pos": "",
      "meaning": "장식"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 7
   },
   {
    "day": 2,
    "word": "athlete",
    "pron": "[ǽθliːt]",
    "pos": "n.",
    "meaning": "운동선수",
    "tip": "올림픽 금메달을 위하여 운동선수들이 열심히 애쓸리(트)",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "athletic",
      "pos": "",
      "meaning": "운동 경기의, 체육의 (-tic: 형용사형 어미)"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 8
   },
   {
    "day": 2,
    "word": "selection",
    "pron": "[silékʃən]",
    "pos": "n.",
    "meaning": "선택, 선발",
    "tip": "A, B, C 중에서 C를 냈션(내다), 즉 C를 선택, 선발",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "select",
      "pos": "",
      "meaning": "선택하다, 선발하다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 9
   },
   {
    "day": 2,
    "word": "pollution",
    "pron": "[pəlúːʃən]",
    "pos": "n.",
    "meaning": "오염",
    "tip": "호수에 펄! 펄! 오줌을 누션(누다), 즉 호수의 오염",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "pollute",
      "pos": "",
      "meaning": "오염시키다"
     },
     {
      "word": "pollutant",
      "pos": "",
      "meaning": "오염 물질 (-ant: ~것 or 형용사형 어미)"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 10
   },
   {
    "day": 2,
    "word": "peak",
    "pron": "[piːk]",
    "pos": "n.",
    "meaning": "꼭대기, 최고점",
    "tip": "픽! 솟아있는 산 꼭대기, 최고점",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 11
   },
   {
    "day": 2,
    "word": "goose",
    "pron": "[guːs]",
    "pos": "n.",
    "meaning": "거위 (pl. geese)",
    "tip": "추수감사절에 거위를 오븐에 구스(구웠수)",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 12
   },
   {
    "day": 2,
    "word": "sweat",
    "pron": "[swet]",
    "pos": "n. v.",
    "meaning": "땀 / 땀을 흘리다",
    "tip": "땀을 흘린 뒤 마시는 포카리 스웨트",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 13
   },
   {
    "day": 2,
    "word": "aware",
    "pron": "[əwέər]",
    "pos": "a.",
    "meaning": "~을 알고 있는",
    "tip": "A: 이거 알아? B: 어! 외워서 알고 있어. 즉, 알고 있는",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "be aware of / be aware that",
      "pos": "",
      "meaning": "~을 알고 있다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 14
   },
   {
    "day": 2,
    "word": "anniversary",
    "pron": "[æ̀nivə́ːrsəri]",
    "pos": "n.",
    "meaning": "(해마다의) 기념일",
    "tip": "\"아니, 벌써 너의 기념일이 됐어?\"",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 15
   },
   {
    "day": 2,
    "word": "divorce",
    "pron": "[divɔ́ːrs]",
    "pos": "n. v.",
    "meaning": "이혼 / 이혼하다",
    "tip": "헤어지면서 차마 서로 뒤돌아 볼 수 없는 부부가 이혼, 이혼하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 16
   },
   {
    "day": 2,
    "word": "cancer",
    "pron": "[kǽnsər]",
    "pos": "n.",
    "meaning": "암",
    "tip": "매일 식사로 통조림 캔을 써서 그 안의 중금속으로 걸린 암",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 17
   },
   {
    "day": 2,
    "word": "chase",
    "pron": "[tʃeis]",
    "pos": "v.",
    "meaning": "쫓다, 추적하다",
    "tip": "잠자리채가 있으, 그 체로 잠자리를 쫓다, 추적하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 18
   },
   {
    "day": 2,
    "word": "thoroughly",
    "pron": "[θə́ːrouli]",
    "pos": "ad.",
    "meaning": "완전히, 철저하게",
    "tip": "오이를 잘게 채 썰 듯 완전히, 철저하게 써럴리(썰다)",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "thorough",
      "pos": "",
      "meaning": "철저한, 완전한"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 19
   },
   {
    "day": 2,
    "word": "guarantee",
    "pron": "[gærəntíː]",
    "pos": "n. v.",
    "meaning": "보증 / 보증하다",
    "tip": "계란을 안전하게 티셔츠에 감싸서 절대 깨지지 않게 배달해주겠다고 보증, 보증하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 20
   },
   {
    "day": 2,
    "word": "pet",
    "pron": "[pet]",
    "pos": "n.",
    "meaning": "반려동물, 애완동물",
    "tip": "페트병을 굴리며 노는 강아지 반려동물, 애완동물",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 21
   },
   {
    "day": 2,
    "word": "flood",
    "pron": "[flʌd]",
    "pos": "n. v.",
    "meaning": "홍수 / 넘치다, 쇄도하다",
    "tip": "수문을 모두 풀러두(풀러도) 댐이 넘치다, 즉 홍수, 물이 넘치다, 쇄도하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 22
   },
   {
    "day": 2,
    "word": "panic",
    "pron": "[pǽnik]",
    "pos": "n.",
    "meaning": "공포, 공황상태",
    "tip": "\"어쩜 사람을 저렇게 패니?\" 하며 공포에 질린 포로들",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 23
   },
   {
    "day": 2,
    "word": "hardly",
    "pron": "[háːrdli]",
    "pos": "ad.",
    "meaning": "거의 ~않다",
    "tip": "들기평가가 하~ 들리지 않아. 즉, 거의 ~않다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 24
   },
   {
    "day": 2,
    "word": "soul",
    "pron": "[soul]",
    "pos": "n.",
    "meaning": "정신, 영혼",
    "tip": "소나무 숲 솔향기에 맑아지는 정신, 영혼",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 25
   },
   {
    "day": 2,
    "word": "spirit",
    "pron": "[spirit]",
    "pos": "n.",
    "meaning": "정신, 마음",
    "tip": "소나무 숲이 it(그것을) 맑게 해준다, 즉 정신, 마음을 맑게 해준다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "spiritual",
      "pos": "",
      "meaning": "정신의, 정신적인 (-al: 형용사형 어미)"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 26
   },
   {
    "day": 2,
    "word": "swing",
    "pron": "[swiŋ]",
    "pos": "n. v.",
    "meaning": "¹그네 / 흔들리다 ²(야구에서 방망이를) 휘두르다 (swing-swung-swung)",
    "tip": "스윙! 스윙! 소리를 내며 그네가 흔들리다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 27
   },
   {
    "day": 2,
    "word": "acquire",
    "pron": "[əkwáiər]",
    "pos": "v.",
    "meaning": "얻다, 획득하다",
    "tip": "이재민에게 나눠주는 쌀을 얻구(얻다) 와요! 즉, 얻다, 획득하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "acquirement",
      "pos": "",
      "meaning": "획득 (-ment: 명사형 어미)"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 28
   },
   {
    "day": 2,
    "word": "award",
    "pron": "[əwɔ́ːrd]",
    "pos": "n. v.",
    "meaning": "상, 수상 / (상 등을) 수여하다",
    "tip": "어! word(단어) 시험 1등에게 상을 수상",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 29
   },
   {
    "day": 2,
    "word": "collect",
    "pron": "[kəlékt]",
    "pos": "v.",
    "meaning": "모으다, 수집하다",
    "tip": "걸레 two(2)개로 먼지를 한곳에 모으다, 수집하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "collection",
      "pos": "",
      "meaning": "수집, 수집물"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 30
   }
  ]
 },
 {
  "day": 3,
  "title": "3강",
  "words": [
   {
    "day": 3,
    "word": "bomb",
    "pron": "[bɑm]",
    "pos": "n.",
    "meaning": "폭탄 v. 폭격하다",
    "tip": "밤송이가 폭탄처럼 폭격하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 1
   },
   {
    "day": 3,
    "word": "attach",
    "pron": "[ətǽtʃ]",
    "pos": "v.",
    "meaning": "붙이다, 첨부하다",
    "tip": "\"어! 이거 네가 뗐지? 다시 붙여\" 즉, 붙이다, 첨부하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "attachment",
      "pos": "",
      "meaning": "부착"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 2
   },
   {
    "day": 3,
    "word": "robbery",
    "pron": "[⒜rɑ́bəri] [⒝rɔ́bəri]",
    "pos": "n.",
    "meaning": "강도질, 강탈",
    "tip": "\"이 가방 손에서 놔버리!\" 하며 뺏는 강도질, 강탈",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "rob",
      "pos": "",
      "meaning": "강도질하다, 강탈하다"
     },
     {
      "word": "robber",
      "pos": "",
      "meaning": "강도"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 3
   },
   {
    "day": 3,
    "word": "frequent",
    "pron": "[frí:kwənt]",
    "pos": "a.",
    "meaning": "자주 일어나는, 빈번한",
    "tip": "자르면 또 풀이 컨(크는) 투, 즉 자주 일어나는, 빈번한",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "frequency",
      "pos": "",
      "meaning": "자주 일어남, 주파수, 진동수"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 4
   },
   {
    "day": 3,
    "word": "male",
    "pron": "[meil]",
    "pos": "a.",
    "meaning": "남자의, 수컷의 n. 남자, 수컷",
    "tip": "매일 여자를 쫓아다니는 남자",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 5
   },
   {
    "day": 3,
    "word": "female",
    "pron": "[fí:meil]",
    "pos": "a.",
    "meaning": "여자의, 암컷의 n. 여자, 암컷",
    "tip": "남자를 피하여 매일 도망가는 여자",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 6
   },
   {
    "day": 3,
    "word": "surround",
    "pron": "[səráund]",
    "pos": "v.",
    "meaning": "둘러싸다, 포위하다",
    "tip": "1. 사람들이 서서 round(둥근) 모양으로 둘러싸다, 포위하다  2. 써라운드 입체음향이란 소리가 앞 뒤 옆 사방에서 둘러싸는 음향",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "surroundings",
      "pos": "",
      "meaning": "환경, 주변(← 우리를 둘러싸고 있는 것)"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 7
   },
   {
    "day": 3,
    "word": "temperature",
    "pron": "[témpərətʃər]",
    "pos": "n.",
    "meaning": "온도, 기온",
    "tip": "온도가 ten(10)℃면 추워서 입술이 퍼렇죠.",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 8
   },
   {
    "day": 3,
    "word": "false",
    "pron": "[fɔːls]",
    "pos": "a.",
    "meaning": "잘못된, 거짓된",
    "tip": "팔을 스윽 들고 벌서는 이유는 잘못된, 거짓된 행동을 해서",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "falsely",
      "pos": "",
      "meaning": "거짓으로, 잘못하여 (-ly: 부사형 어미)"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 9
   },
   {
    "day": 3,
    "word": "fault",
    "pron": "[fɔːlt]",
    "pos": "n.",
    "meaning": "잘못",
    "tip": "학생이 팔 two(2)개를 올리고 벌서고 있는 이유는 잘못이 있기 때문",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 10
   },
   {
    "day": 3,
    "word": "evil",
    "pron": "[íːvəl]",
    "pos": "a.",
    "meaning": "사악한 n. 악",
    "tip": "이 벌을 받아라, 사악한 놈아!",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 11
   },
   {
    "day": 3,
    "word": "chick",
    "pron": "[tʃik]",
    "pos": "n.",
    "meaning": "병아리",
    "tip": "찍! 찍! 우는 병아리",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 12
   },
   {
    "day": 3,
    "word": "generous",
    "pron": "[dʒénərəs]",
    "pos": "a.",
    "meaning": "관대한, 너그러운",
    "tip": "쟤가 우리 빨래까지 모두 널었수. 참으로 너그러운 아이야.",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "generosity",
      "pos": "",
      "meaning": "관대함, 너그러움 (-ity: 명사형 어미)"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 13
   },
   {
    "day": 3,
    "word": "hasty",
    "pron": "[héisti]",
    "pos": "a.",
    "meaning": "서두르는, 성급한",
    "tip": "밤이 되면 산길은 위험하니 해 있을 때 튀자, 즉 서두르는, 성급한",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "haste",
      "pos": "",
      "meaning": "서두름"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 14
   },
   {
    "day": 3,
    "word": "bright",
    "pron": "[brait]",
    "pos": "a.",
    "meaning": "빛나는, 밝은",
    "tip": "불빛 찬란한 나이트클럽 간판이 빛나는, 밝은",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "brightly",
      "pos": "",
      "meaning": "밝게, 환히"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 15
   },
   {
    "day": 3,
    "word": "degree",
    "pron": "[digríː]",
    "pos": "n.",
    "meaning": "등급, 정도",
    "tip": "D학점 정도로 그림을 그리다, 즉 D 등급, 정도",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 16
   },
   {
    "day": 3,
    "word": "deceive",
    "pron": "[disíːv]",
    "pos": "v.",
    "meaning": "속이다",
    "tip": "친구를 뒤에서 씹으(며)(욕하며) 앞에서는 친한 척 속이다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 17
   },
   {
    "day": 3,
    "word": "complain",
    "pron": "[kəmpléin]",
    "pos": "v.",
    "meaning": "불평하다, 항의하다",
    "tip": "작은 비행기를 타서 너무 좁다고 \"큰 플레인(plane: 비행기) 탈 걸\" 하고 불평하다, 항의하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "complaint",
      "pos": "",
      "meaning": "불평, 항의"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 18
   },
   {
    "day": 3,
    "word": "labor",
    "pron": "[léibər]",
    "pos": "n.",
    "meaning": "노동 v. 노동하다 (= labour)",
    "tip": "일꾼들이 여름 내의만 입고 시멘트를 뷔(부어)대며 노동, 노동하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 19
   },
   {
    "day": 3,
    "word": "device",
    "pron": "[diváis]",
    "pos": "n.",
    "meaning": "장치",
    "tip": "지붕이 바람에 날아가지 않도록 하는 장치로 집 뒤에 있는 바위를 쓰다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 20
   },
   {
    "day": 3,
    "word": "civilization",
    "pron": "[⒜sìvəlizéiʃən] [⒝sìvəlaizéiʃən]",
    "pos": "n.",
    "meaning": "문명, 개화",
    "tip": "초가집을 없애고 시에 빌라를 지으션, 즉 문명, 개화",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "civilize",
      "pos": "",
      "meaning": "문명화하다, 개화하다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 21
   },
   {
    "day": 3,
    "word": "fasten",
    "pron": "[⒜fǽsn] [⒝fáːsn]",
    "pos": "v.",
    "meaning": "묶다, 채우다",
    "tip": "남의 물건을 뺏은 사람을 포승줄로 묶다, (수갑을) 채우다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 22
   },
   {
    "day": 3,
    "word": "grammar",
    "pron": "[grǽmər]",
    "pos": "n.",
    "meaning": "문법",
    "tip": "글에 뭐가 구성되어 있는지 설명하는 것이 문법",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 23
   },
   {
    "day": 3,
    "word": "mushroom",
    "pron": "[mʌ́ʃruːm]",
    "pos": "n.",
    "meaning": "버섯",
    "tip": "버섯 모양으로 만든 스머프의 멋이 있는 room(방)",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 24
   },
   {
    "day": 3,
    "word": "bug",
    "pron": "[bʌg]",
    "pos": "n.",
    "meaning": "곤충, 벌레",
    "tip": "버글버글한 벌레",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 25
   },
   {
    "day": 3,
    "word": "float",
    "pron": "[flout]",
    "pos": "v.",
    "meaning": "(물 위나 공중에) 뜨다, 띄우다",
    "tip": "flow(흐르는) 물 위에 뜨다, 즉 뜨다, 띄우다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 26
   },
   {
    "day": 3,
    "word": "theory",
    "pron": "[θíːəri]",
    "pos": "n.",
    "meaning": "이론",
    "tip": "아인슈타인의 상대성 이론은 많은 과학 영역에 쓰여리(쓰인다)",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 27
   },
   {
    "day": 3,
    "word": "ashamed",
    "pron": "[əʃéimd]",
    "pos": "a.",
    "meaning": "창피한, 부끄러운",
    "tip": "빵점 받았다는 선생님의 발표에 \"어, 새임도(선생님도) 참…\" 친구들에게 창피한, 부끄러운",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "shame",
      "pos": "",
      "meaning": "부끄러움, 창피함; 창피를 주다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 28
   },
   {
    "day": 3,
    "word": "atmosphere",
    "pron": "[ǽtməsfiər]",
    "pos": "n.",
    "meaning": "분위기, 공기",
    "tip": "애트모스(코스모스)가 가득 피어 있는 가을의 분위기, 공기",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 29
   },
   {
    "day": 3,
    "word": "audience",
    "pron": "[ɔ́ːdiəns]",
    "pos": "n.",
    "meaning": "청중",
    "tip": "\"어디 앉수?\" 하고 물으며 공연장의 좌석을 찾는 청중",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 30
   }
  ]
 },
 {
  "day": 4,
  "title": "4강",
  "words": [
   {
    "day": 4,
    "word": "sore",
    "pron": "[sɔːr]",
    "pos": "a.",
    "meaning": "아픈, 쓰린",
    "tip": "벌이 쏘아 아픈, 쓰린",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 1
   },
   {
    "day": 4,
    "word": "cartoon",
    "pron": "[kɑːrtúːn]",
    "pos": "n.",
    "meaning": "만화",
    "tip": "똑같은 모습으로 그린 만화",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 2
   },
   {
    "day": 4,
    "word": "rust",
    "pron": "[rʌst]",
    "pos": "n.",
    "meaning": "녹 v. 녹슬다",
    "tip": "가구 밑에서 오랫동안 lost(잃어버렸던) 가위에 생긴 녹, 녹슬다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 3
   },
   {
    "day": 4,
    "word": "grocery",
    "pron": "[gróusəri]",
    "pos": "n.",
    "meaning": "식료품점, 식료품",
    "tip": "서울의 구로에서 재배한 쌀이 팔리고 있는 식료품점",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 4
   },
   {
    "day": 4,
    "word": "plain①",
    "pron": "[plein]",
    "pos": "a.",
    "meaning": "¹ 평범한, 쉬운 ² 명백한",
    "tip": "이 문제는 내가 풀래잉~ 평범한, 쉬운. 답이 명백한 문제니까.",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 5
   },
   {
    "day": 4,
    "word": "plain②",
    "pron": "[plein]",
    "pos": "n.",
    "meaning": "평원, 벌판",
    "tip": "아이들이 뛰어다니며 playing(놀고 있는) 평원, 벌판",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 6
   },
   {
    "day": 4,
    "word": "cock",
    "pron": "[⒜kɑk] [⒝kɔk]",
    "pos": "n.",
    "meaning": "수탉",
    "tip": "모이를 콕! 콕! 쪼아 먹는 수탉",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 7
   },
   {
    "day": 4,
    "word": "hen",
    "pron": "[hen]",
    "pos": "n.",
    "meaning": "암탉",
    "tip": "암탉으로 만든 닭고기 햄",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 8
   },
   {
    "day": 4,
    "word": "brick",
    "pron": "[brik]",
    "pos": "n.",
    "meaning": "벽돌",
    "tip": "찰흙으로 모양을 만든 후 불에 익혀서 만든 벽돌",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 9
   },
   {
    "day": 4,
    "word": "emigrant",
    "pron": "[émigrənt]",
    "pos": "a.",
    "meaning": "(타국으로) 이주해 나가는 n. 이주민, 이민",
    "tip": "애미가 혀 꼬부라진 그런 투로 말하는 것은 미국 이주민이기 때문",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "immigrant",
      "pos": "",
      "meaning": "(타국에서) 이주해 들어오는: 이주민, 이민"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 10
   },
   {
    "day": 4,
    "word": "escape",
    "pron": "[iskéip]",
    "pos": "v.",
    "meaning": "달아나다 n. 탈출",
    "tip": "이 수캐가 이쁘다고 소문난 암캐를 쫓아 줄을 끊고 달아나다, 탈출",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 11
   },
   {
    "day": 4,
    "word": "route",
    "pron": "[ruːt]",
    "pos": "n.",
    "meaning": "길, 경로",
    "tip": "요구르트를 집집마다 순서대로 배달하는 길, 경로",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 12
   },
   {
    "day": 4,
    "word": "greenhouse",
    "pron": "[gríːnhàus]",
    "pos": "n.",
    "meaning": "온실, 비닐하우스",
    "tip": "green(초록의) 식물들을 키우는 house(집), 즉 온실, 비닐하우스",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 13
   },
   {
    "day": 4,
    "word": "license",
    "pron": "[láisəns]",
    "pos": "n.",
    "meaning": "면허, 허가",
    "tip": "위험해서 나이 든 성인 선수에게만 주는 자동차 경주 면허, 허가",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 14
   },
   {
    "day": 4,
    "word": "mill",
    "pron": "[mil]",
    "pos": "n.",
    "meaning": "방앗간",
    "tip": "밀을 빻는 방앗간",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 15
   },
   {
    "day": 4,
    "word": "windmill",
    "pron": "[wíndmìl]",
    "pos": "n.",
    "meaning": "풍차",
    "tip": "wind(바람)을 이용한 mill(방앗간), 즉 풍차",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 16
   },
   {
    "day": 4,
    "word": "swallow",
    "pron": "[swɑ́lou]",
    "pos": "v.",
    "meaning": "¹ (꿀꺽) 삼키다 ² n. 제비",
    "tip": "제비의 수많은 알로(알을) 꿀꺽 삼키다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 17
   },
   {
    "day": 4,
    "word": "melt",
    "pron": "[melt]",
    "pos": "v.",
    "meaning": "녹다, 녹이다",
    "tip": "캐러멜 two(2)개가 입속에서 녹다, 녹이다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 18
   },
   {
    "day": 4,
    "word": "instance",
    "pron": "[ínstəns]",
    "pos": "n.",
    "meaning": "예, 사례",
    "tip": "선생님이 인스턴트 식품에는 뭐가 있는지 쓰라고 하면서 그 예, 사례를 들라고 하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "for instance",
      "pos": "",
      "meaning": "예를 들면"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 19
   },
   {
    "day": 4,
    "word": "amusing",
    "pron": "[əmjúːziŋ]",
    "pos": "a.",
    "meaning": "재미있는, 즐거운",
    "tip": "어! music(음악)에 맞춰 춤춰서 재미있는, 즐거운",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "amuse",
      "pos": "",
      "meaning": "재미나게 하다"
     },
     {
      "word": "amusement",
      "pos": "",
      "meaning": "즐거움, 놀이"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 20
   },
   {
    "day": 4,
    "word": "carpenter",
    "pron": "[kɑ́ːrpəntər]",
    "pos": "n.",
    "meaning": "목수, 목공",
    "tip": "까페(카페)로 쓸 터에 기초공사를 하고 있는 목수",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 21
   },
   {
    "day": 4,
    "word": "consist",
    "pron": "[kənsíst]",
    "pos": "v.",
    "meaning": "¹ 구성되다 ² 일치하다",
    "tip": "내 형제는 나, 작은누나, 큰 sister(누나)로 구성되다, 모두 생김새가 일치하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "consistent",
      "pos": "",
      "meaning": "일치하는, 일관된 (-ent: 형용사형 어미)"
     },
     {
      "word": "consist of",
      "pos": "",
      "meaning": "~로 구성되다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 22
   },
   {
    "day": 4,
    "word": "acid",
    "pron": "[ǽsid]",
    "pos": "a.",
    "meaning": "(맛이) 신, 산성의 n. 산",
    "tip": "액! 시다, 즉 신, 산성의, 산",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 23
   },
   {
    "day": 4,
    "word": "fence",
    "pron": "[fens]",
    "pos": "n.",
    "meaning": "담장, 울타리",
    "tip": "팬s(팬들)이 유명 가수를 보려고 기웃거리는 담장",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 24
   },
   {
    "day": 4,
    "word": "defense",
    "pron": "[diféns]",
    "pos": "n.",
    "meaning": "방어, 수비 (= defence)",
    "tip": "뒤 fence(담장)에서 적의 총알을 피하며 방어, 수비",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "defend",
      "pos": "",
      "meaning": "방어하다, 수비하다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 25
   },
   {
    "day": 4,
    "word": "offense",
    "pron": "[əféns]",
    "pos": "n.",
    "meaning": "¹ 공격 ² 위법행위 ³ 화나게 하는 행위 (= offence)",
    "tip": "오! fence(담장)을 넘어 나를 공격하는 위법행위, 화나게 하는 행위",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "offend",
      "pos": "",
      "meaning": "화나게 하다, 기분을 상하게 하다"
     },
     {
      "word": "offensive",
      "pos": "",
      "meaning": "공격적인, 화나게 하는"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 26
   },
   {
    "day": 4,
    "word": "chimney",
    "pron": "[tʃímni]",
    "pos": "n.",
    "meaning": "굴뚝",
    "tip": "굴뚝에서 나는 연기를 보니 고구마나 뭔가를 찝니다.",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 27
   },
   {
    "day": 4,
    "word": "deny",
    "pron": "[dinái]",
    "pos": "v.",
    "meaning": "부인하다, 거절하다",
    "tip": "뒤로 나이를 숨기고 미성년자임을 부인하다, 술집 주인은 입장을 거절하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "denial",
      "pos": "",
      "meaning": "부인, 부정, 거절"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 28
   },
   {
    "day": 4,
    "word": "tax",
    "pron": "[tæks]",
    "pos": "n.",
    "meaning": "세금",
    "tip": "택시가 버스보다 비싼 이유는 세금 때문",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 29
   },
   {
    "day": 4,
    "word": "lift",
    "pron": "[lift]",
    "pos": "v.",
    "meaning": "들어 올리다",
    "tip": "스키장의 리프트가 사람을 번쩍 들어 올리다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 30
   }
  ]
 },
 {
  "day": 5,
  "title": "5강",
  "words": [
   {
    "day": 5,
    "word": "contaminate",
    "pron": "[kəntǽminèit]",
    "pos": "v.",
    "meaning": "오염시키다, 더럽히다",
    "tip": "대중목욕탕 욕조에서 큰 때를 미네(이트)! 즉, 물을 오염시키다, 더럽히다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "contamination",
      "pos": "",
      "meaning": "오염"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 1
   },
   {
    "day": 5,
    "word": "crop",
    "pron": "[krɑp]",
    "pos": "n.",
    "meaning": "농작물, 수확물",
    "tip": "빨리 \"크라(커라) 압\" 하고 기합을 넣어주는 농작물, 수확물",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 2
   },
   {
    "day": 5,
    "word": "poet",
    "pron": "[póuit]",
    "pos": "n.",
    "meaning": "시인",
    "tip": "\"이 시에서 시인이 말하려고 하는 포인트(요지)가 뭘까?\"",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "poetry",
      "pos": "",
      "meaning": "시집"
     },
     {
      "word": "poem",
      "pos": "",
      "meaning": "시"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 3
   },
   {
    "day": 5,
    "word": "perform",
    "pron": "[pərfɔ́:rm]",
    "pos": "v.",
    "meaning": "¹ 실행하다, 이행 ² (연극·연주 등을) 공연하다",
    "tip": "무용수가 four(4)가지 폼으로 무용을 실행하다, 공연하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "performance",
      "pos": "",
      "meaning": "1. 실행, 이행 2. 공연, 연주"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 4
   },
   {
    "day": 5,
    "word": "notice",
    "pron": "[nóutis]",
    "pos": "n.",
    "meaning": "통지, 통보",
    "tip": "Know This!(이것을 알아라!) 하고 통지, 통보",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 5
   },
   {
    "day": 5,
    "word": "seed",
    "pron": "[si:d]",
    "pos": "n.",
    "meaning": "씨, 씨앗",
    "tip": "씨(앗) 두 개, 즉 씨, 씨앗",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 6
   },
   {
    "day": 5,
    "word": "fury",
    "pron": "[fjúəri]",
    "pos": "n.",
    "meaning": "격분, 분노",
    "tip": "격분, 분노하여 담배를 피우리.",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "furious",
      "pos": "",
      "meaning": "격노한, 격렬한 (-ous: 형용사형 어미)"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 7
   },
   {
    "day": 5,
    "word": "lawn",
    "pron": "[lɔ:n]",
    "pos": "n.",
    "meaning": "잔디, 잔디밭",
    "tip": "모내기한 논에 있는 작은 벼와 비슷하게 자란 잔디",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 8
   },
   {
    "day": 5,
    "word": "tool",
    "pron": "[tu:l]",
    "pos": "n.",
    "meaning": "도구, 연장",
    "tip": "재봉틀, 베를 짜는 틀과 같은 옷 만드는 도구, 연장",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 9
   },
   {
    "day": 5,
    "word": "liberty",
    "pron": "[líbərti]",
    "pos": "n.",
    "meaning": "자유",
    "tip": "일제의 고문에 \"니(너), 버티!(버텨!) 자유를 위해!\"",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 10
   },
   {
    "day": 5,
    "word": "liberal",
    "pron": "[líbərəl]",
    "pos": "a.",
    "meaning": "자유주의의, 자유로운",
    "tip": "\"니가 벌고 싶은 대로 벌을(벌다) 하고 내버려두는 자유주의의, 자유로운",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "liberate",
      "pos": "",
      "meaning": "자유롭게 하다, 해방시키다 (-ate: 동사형 어미)"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 11
   },
   {
    "day": 5,
    "word": "root",
    "pron": "[ru:t]",
    "pos": "n.",
    "meaning": "뿌리, 근원",
    "tip": "수학에서 루트 16은 4이듯 루트는 제곱에 대한 뿌리, 근원",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 12
   },
   {
    "day": 5,
    "word": "cure",
    "pron": "[kjuər]",
    "pos": "n.",
    "meaning": "치료 v. 치료하다",
    "tip": "\"수술등을 큐어!(켜)\"라고 말하고 치료, 치료하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 13
   },
   {
    "day": 5,
    "word": "adult",
    "pron": "[ədʌ́lt]",
    "pos": "n.",
    "meaning": "성인 a. 성숙한",
    "tip": "\"애덜(애들)은 가라! 투!(투!) 하고 침까지 뱉으며 성숙한, 성인들만 오라는 약장수",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 14
   },
   {
    "day": 5,
    "word": "anxious",
    "pron": "[ǽŋʃəs]",
    "pos": "a.",
    "meaning": "¹ 걱정하는 ² 열망하는",
    "tip": "서울대를 목표로 공부해야 하는데 1시간이나 앵! 쉬었수ㅠㅠ 하고 걱정하는, 서울대를 그토록 열망하는",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 15
   },
   {
    "day": 5,
    "word": "grain",
    "pron": "[grein]",
    "pos": "n.",
    "meaning": "곡물, (쌀·보리 등의) 낱알",
    "tip": "하늘에서 내리는 그 rain(비)를 맞고 잘 자라는 곡물, 낱알",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 16
   },
   {
    "day": 5,
    "word": "snail",
    "pron": "[sneil]",
    "pos": "n.",
    "meaning": "달팽이",
    "tip": "1미터 지나가는 데 스~윽 내일까지 걸리는 달팽이",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 17
   },
   {
    "day": 5,
    "word": "goat",
    "pron": "[gout]",
    "pos": "n.",
    "meaning": "염소",
    "tip": "Go!(가자) to(~쪽으로) 하고 고집 센 염소를 끌고 가다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 18
   },
   {
    "day": 5,
    "word": "grief",
    "pron": "[gri:f]",
    "pos": "n.",
    "meaning": "슬픔, 비탄",
    "tip": "북한에 계신 부모님이 그리워 프~ 하고 우는 슬픔, 비탄",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "grieve",
      "pos": "",
      "meaning": "몹시 슬퍼하다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 19
   },
   {
    "day": 5,
    "word": "fairy",
    "pron": "[fέəri]",
    "pos": "n.",
    "meaning": "요정 a. 요정의",
    "tip": "회오리 바람을 일으키며 나타나는 요정",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 20
   },
   {
    "day": 5,
    "word": "flat",
    "pron": "[flæt]",
    "pos": "a.",
    "meaning": "평평한, 납작한",
    "tip": "재활용 종이 상자를 눌러서 플래, 평평한, 납작한 모양으로",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 21
   },
   {
    "day": 5,
    "word": "peach",
    "pron": "[pi:tʃ]",
    "pos": "n.",
    "meaning": "복숭아",
    "tip": "피치 못할 유혹으로 손오공이 따먹은 (천도)복숭아",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 22
   },
   {
    "day": 5,
    "word": "tradition",
    "pron": "[trədíʃən]",
    "pos": "n.",
    "meaning": "전통",
    "tip": "손윗사람 앞에서 술을 마실 때는 고개를 틀어 드션(드시다). 그것이 우리의 전통",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "traditional",
      "pos": "",
      "meaning": "전통적인, 전설의"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 23
   },
   {
    "day": 5,
    "word": "behavior",
    "pron": "[bihéivjər]",
    "pos": "n.",
    "meaning": "행동, 태도 (= behaviour)",
    "tip": "행동이 느리다고 \"be heavy여!(무거워!) 너의 행동, 태도가.\"",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "behave",
      "pos": "",
      "meaning": "행동하다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 24
   },
   {
    "day": 5,
    "word": "contrast",
    "pron": "n.[@kάntræst] v.[@kəntrǽst]",
    "pos": "n.",
    "meaning": "대조 v. 대조하다",
    "tip": "권투 선수 소개 last(마지막)에 두 선수의 키, 몸무게, 승률 등을 대조, 대조하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "in contrast",
      "pos": "",
      "meaning": "대조적으로"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 25
   },
   {
    "day": 5,
    "word": "tap",
    "pron": "[tæp]",
    "pos": "v.",
    "meaning": "(가볍게) 두드리다 n. 두드리는 소리",
    "tip": "갤럭시 탭의 앱을 열기 위해 톡 두드리다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 26
   },
   {
    "day": 5,
    "word": "liquid",
    "pron": "[líkwid]",
    "pos": "a.",
    "meaning": "액체의 n. 액체",
    "tip": "1. 이 키위두(키위도) 액체의 즙이 많다. 2. 에프킬라 리퀴드는 액체 모기향",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 27
   },
   {
    "day": 5,
    "word": "leopard",
    "pron": "[lépərd]",
    "pos": "n.",
    "meaning": "표범",
    "tip": "앞발을 내뻗으며 달리는 표범",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 28
   },
   {
    "day": 5,
    "word": "gym",
    "pron": "[dʒim]",
    "pos": "n.",
    "meaning": "체육관 (= gymnasium)",
    "tip": "수재민들이 짐을 싸서 피신하는 체육관",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 29
   }
  ]
 },
 {
  "day": 6,
  "title": "6강",
  "words": [
   {
    "day": 6,
    "word": "sort",
    "pron": "[sɔːrt]",
    "pos": "n.",
    "meaning": "종류 v. 종류별로 분류하다",
    "tip": "소를 품종에 따라 소 one(1), 소 two(2) 등과 같이 종류, 종류별로 분류하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 1
   },
   {
    "day": 6,
    "word": "tidy",
    "pron": "[táidi]",
    "pos": "a.",
    "meaning": "단정한, 깔끔한",
    "tip": "타이(넥타이)로 뒤에 마무리하여 단정한, 깔끔한",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 2
   },
   {
    "day": 6,
    "word": "thermometer",
    "pron": "[θərmámitər]",
    "pos": "n.",
    "meaning": "온도계",
    "tip": "summer(여름)에 수은주가 몇 미터 올라가는 온도계",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 3
   },
   {
    "day": 6,
    "word": "profit",
    "pron": "[prάfit]",
    "pos": "n.",
    "meaning": "이익, 이득",
    "tip": "대전료로 100억을 받는 프로 권투선수가 핏! 흘리는 피가 안겨주는 이익, 이득",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 4
   },
   {
    "day": 6,
    "word": "pot",
    "pron": "[pat]",
    "pos": "n.",
    "meaning": "통, 병, 냄비",
    "tip": "커피포트는 커피를 담는 통, 병, 냄비",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 5
   },
   {
    "day": 6,
    "word": "advertise",
    "pron": "[ǽdvərtàiz]",
    "pos": "v.",
    "meaning": "광고하다",
    "tip": "애두(애도) 보는 TV에서 야한 망사 타이즈를 광고하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 6
   },
   {
    "day": 6,
    "word": "coward",
    "pron": "[káuərd]",
    "pos": "n.",
    "meaning": "겁쟁이",
    "tip": "cow(황소)가 무서워 워어~ 하며 떠는 겁쟁이",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 7
   },
   {
    "day": 6,
    "word": "rude",
    "pron": "[ruːd]",
    "pos": "a.",
    "meaning": "버릇없는, 무례한",
    "tip": "유교사상을 지키는 양반에게 누드화를 선물로 주다니 버릇없는, 무례한",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 8
   },
   {
    "day": 6,
    "word": "treasure",
    "pron": "[tréʒər]",
    "pos": "n.",
    "meaning": "보물",
    "tip": "이솝우화(아버지의 보물)에서 아버지가 유언으로 \"뜰에 저기 파보면 보물이 있을 거야.\"",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 9
   },
   {
    "day": 6,
    "word": "chat",
    "pron": "[tʃæt]",
    "pos": "v.",
    "meaning": "잡담하다 n. 잡담",
    "tip": "인터넷 채팅(chatting)이란 인터넷상에서 하는 잡담",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 10
   },
   {
    "day": 6,
    "word": "threat",
    "pron": "[θret]",
    "pos": "n.",
    "meaning": "위협, 협박",
    "tip": "쓰렛빠(슬리퍼)로 때리려 하며 위협, 협박",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 11
   },
   {
    "day": 6,
    "word": "material",
    "pron": "[mətíəriəl]",
    "pos": "n.",
    "meaning": "물질, 재료 a. 물질적인",
    "tip": "땅에서 뭐가 튀어리얼(튀다), 즉 어떤 물질이 튀다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 12
   },
   {
    "day": 6,
    "word": "clue",
    "pron": "[kluː]",
    "pos": "n.",
    "meaning": "실마리, 단서",
    "tip": "복잡하게 얽힌 것을 끌루게(풀게) 해주는 실마리, 단서",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 13
   },
   {
    "day": 6,
    "word": "ancient",
    "pron": "[éinʃənt]",
    "pos": "a.",
    "meaning": "옛날의, 고대의",
    "tip": "음식이 에잉! 쉬언트(쉬었다). 옛날의, 고대의 시대에 만든 음식이기 때문",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 14
   },
   {
    "day": 6,
    "word": "negative",
    "pron": "[négətiv]",
    "pos": "a.",
    "meaning": "부정적인",
    "tip": "\"내가 TV에 나와? 흥, 난 못생겨서 어림없지.\" 하며 부정적인",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 15
   },
   {
    "day": 6,
    "word": "wage",
    "pron": "[weidʒ]",
    "pos": "n.",
    "meaning": "임금, 급료",
    "tip": "왜 이렇게 쥐꼬리만큼만 주세요? 임금, 급료를",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 16
   },
   {
    "day": 6,
    "word": "essential",
    "pron": "[isénʃəl]",
    "pos": "a.",
    "meaning": "필수의, 본질적인",
    "tip": "육식동물은 사냥을 위해 이가 쎈 것이 필수의, 본질적인",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 17
   },
   {
    "day": 6,
    "word": "efficient",
    "pron": "[ifíʃənt]",
    "pos": "a.",
    "meaning": "효율적인, 능률적인",
    "tip": "다른 학생은 1페이지 볼 때 나는 핵심만 봐서 벌써 2페이지를 피션트(펴다), 즉 효율적인, 능률적인 공부",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 18
   },
   {
    "day": 6,
    "word": "frame",
    "pron": "[freim]",
    "pos": "n.",
    "meaning": "틀, 뼈대",
    "tip": "캠핑장 풀에 내 임(님)이 박고 있는 텐트의 틀, 뼈대",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 19
   },
   {
    "day": 6,
    "word": "pulse",
    "pron": "[pʌls]",
    "pos": "n.",
    "meaning": "¹맥박 ²파동, 진동",
    "tip": "팔을 스윽 걷고 재는 맥박, 그리고 맥박이 콩팡 콩팡 하는 파동, 진동",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 20
   },
   {
    "day": 6,
    "word": "indicate",
    "pron": "[índikèit]",
    "pos": "v.",
    "meaning": "나타내다, 가리키다",
    "tip": "동굴에 있는 인디언 글자의 의미를 케이트(캐다), 즉 그 글자가 무엇을 나타내다, 가리키다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 21
   },
   {
    "day": 6,
    "word": "electric",
    "pron": "[iléktrik]",
    "pos": "a.",
    "meaning": "전기의, 전기 장치의",
    "tip": "감전 사고와 같은 일을 내, 쯔릿쯔릿한 전기의, 전기장치의 전선이",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 22
   },
   {
    "day": 6,
    "word": "flame",
    "pron": "[fleim]",
    "pos": "n.",
    "meaning": "불꽃 v. 타오르다",
    "tip": "불내임(불을 냄), 그래서 불꽃이 타오르다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 23
   },
   {
    "day": 6,
    "word": "slave",
    "pron": "[sleiv]",
    "pos": "n.",
    "meaning": "노예",
    "tip": "슬래가 된 이브는 아담이 시키면 어떤 일도 해야 하는 노예",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 24
   },
   {
    "day": 6,
    "word": "kettle",
    "pron": "[kétl]",
    "pos": "n.",
    "meaning": "주전자",
    "tip": "운동장에서 이리 구르고 저리 구르고 깨틀려진(깨진) 주전자",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 25
   },
   {
    "day": 6,
    "word": "mend",
    "pron": "[mend]",
    "pos": "v.",
    "meaning": "수선하다, 수리하다",
    "tip": "뜯어진 곳을 꿰맨다, 그렇게 수선하다, 수리하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 26
   },
   {
    "day": 6,
    "word": "navy",
    "pron": "[néivi]",
    "pos": "n.",
    "meaning": "해군",
    "tip": "\"내(가) 이 비를 헤쳐나가리\" 하며 항해하는 해군",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 27
   },
   {
    "day": 6,
    "word": "capable",
    "pron": "[kéipəbl]",
    "pos": "a.",
    "meaning": "~할 수 있는, 유능한",
    "tip": "케이(K)라는 사람을 뽑을 거야. 그 사람이 ~할 수 있는, 유능한",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 28
   },
   {
    "day": 6,
    "word": "fate",
    "pron": "[feit]",
    "pos": "n.",
    "meaning": "운명",
    "tip": "타로 카드 패에 있다. 사람들의 운명이",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 29
   },
   {
    "day": 6,
    "word": "fatal",
    "pron": "[féitl]",
    "pos": "a.",
    "meaning": "치명적인, 운명의",
    "tip": "1. 사람을 패, 이틀 동안이나, 즉 치명적인, 운명의 2. fate(운명)의 형용사형",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 30
   }
  ]
 },
 {
  "day": 7,
  "title": "7강",
  "words": [
   {
    "day": 7,
    "word": "arrange",
    "pron": "[əréindʒ]",
    "pos": "v.",
    "meaning": "가지런히 하다, 배열하다",
    "tip": "과일가게에서 오렌지를 가지런히 하다, 배열하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 1
   },
   {
    "day": 7,
    "word": "reputation",
    "pron": "[rèpjutéiʃən]",
    "pos": "n.",
    "meaning": "평판",
    "tip": "사람들이 그 여자는 예쁘대(이션), 즉 예쁘대는 사람들의 평판",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "repute",
      "pos": "",
      "meaning": "~이라고 평하다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 2
   },
   {
    "day": 7,
    "word": "spade",
    "pron": "[speid]",
    "pos": "n.",
    "meaning": "삽",
    "tip": "1. 삽으로 퍼낸 땅이 슉 패이다\n2. 트럼프 카드에서 스페이드는 삽 모양에서 나온 것",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 3
   },
   {
    "day": 7,
    "word": "magnetic",
    "pron": "[mæɡnétik]",
    "pos": "a.",
    "meaning": "자석의, 자석 같은",
    "tip": "매여있는 그네도 틱! 끌어당기는 자석의 힘",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "magnet",
      "pos": "",
      "meaning": "자석"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 4
   },
   {
    "day": 7,
    "word": "ax",
    "pron": "[æks]",
    "pos": "n.",
    "meaning": "도끼",
    "tip": "엑스(X)자 모양으로 걸어 놓은 도끼",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 5
   },
   {
    "day": 7,
    "word": "concept",
    "pron": "[@kánsept] [@kɔ́nsept]",
    "pos": "n.",
    "meaning": "개념",
    "tip": "'시는 ( )과 ( )이 있는 언어로 압축된 운문 문학'과 같이 몇 개의 빈칸이 세트로 구성된 개념을 묻는 문제",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "conception",
      "pos": "",
      "meaning": "개념, 생각, 구상"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 6
   },
   {
    "day": 7,
    "word": "vinegar",
    "pron": "[vínigər]",
    "pos": "n.",
    "meaning": "식초",
    "tip": "비린 거에 냄새를 없애려 넣는 식초",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 7
   },
   {
    "day": 7,
    "word": "wipe",
    "pron": "[waip]",
    "pos": "v.",
    "meaning": "닦다, 씻다",
    "tip": "1. 와이프를 위해 남편이 방을 닦다, 씻다\n2. 차의 와이퍼(wiper)가 앞 유리를 닦다, 씻다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 8
   },
   {
    "day": 7,
    "word": "feather",
    "pron": "[féðər]",
    "pos": "n.",
    "meaning": "깃털",
    "tip": "닭 잡아먹으려면 빼! 더 많은 깃털을!",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 9
   },
   {
    "day": 7,
    "word": "occur",
    "pron": "[əkə́:r]",
    "pos": "v.",
    "meaning": "¹ 발생하다 ² 머리에 떠오르다",
    "tip": "어! car(차) 사고가 발생하다, 도망간 어! car(차) 번호판이 머리에 떠오르다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 10
   },
   {
    "day": 7,
    "word": "itch",
    "pron": "[itʃ]",
    "pos": "v.",
    "meaning": "v. 가렵다 n. 가려움",
    "tip": "\"잇 취!\" 재채기를 할 정도로 코가 가렵다, 가려움",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 11
   },
   {
    "day": 7,
    "word": "nest",
    "pron": "[nest]",
    "pos": "n.",
    "meaning": "둥지",
    "tip": "까치는 나무 next(옆에), 물새는 강 next(옆에) 지은 둥지",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 12
   },
   {
    "day": 7,
    "word": "former",
    "pron": "[fɔ́:rmər]",
    "pos": "a.",
    "meaning": "예전의",
    "tip": "퍼머 머리였던 친구의 예전의 머리",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 13
   },
   {
    "day": 7,
    "word": "attract",
    "pron": "[ətrǽkt]",
    "pos": "v.",
    "meaning": "(마음·주의·흥미 등을) 끌다, 끌어당기다",
    "tip": "어! 트랙트(트랙터)가 자동차를 끌어당기다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "attraction",
      "pos": "",
      "meaning": "끌어당김, 매력"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 14
   },
   {
    "day": 7,
    "word": "chop",
    "pron": "[@tʃɑp] [@tʃɔp]",
    "pos": "v.",
    "meaning": "(음식 재료를) 썰다, 팍팍 찍다",
    "tip": "통나무를 찹! 찹! 썰다, 팍팍 찍다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 15
   },
   {
    "day": 7,
    "word": "chopstick",
    "pron": "[@tʃɑ́pstìk] [@tʃɔ́pstìk]",
    "pos": "n.",
    "meaning": "젓가락",
    "tip": "chop(자르다) + stick(막대): 두 개로 자른 막대, 즉 젓가락",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 16
   },
   {
    "day": 7,
    "word": "eager",
    "pron": "[í:ɡər]",
    "pos": "a.",
    "meaning": "간절히 바라는",
    "tip": "\"이거 사줘요!\" 하며 아이가 장난감을 갖기를 간절히 바라는",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 17
   },
   {
    "day": 7,
    "word": "planet",
    "pron": "[plǽnit]",
    "pos": "n.",
    "meaning": "행성",
    "tip": "우주 plane(비행기)를 타고 향해가는 행성",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 18
   },
   {
    "day": 7,
    "word": "pork",
    "pron": "[pɔ:rk]",
    "pos": "n.",
    "meaning": "돼지고기",
    "tip": "1. 포크로 찍어 먹는 돼지고기\n2. 포크찹(폭찹), 하이포크에서 포크는 돼지고기",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 19
   },
   {
    "day": 7,
    "word": "lifelong",
    "pron": "[láiflɔ̀:ŋ]",
    "pos": "a.",
    "meaning": "일생의, 평생의",
    "tip": "life(삶) + long(긴): 삶의 긴 길이만큼의, 즉 일생의, 평생의",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 20
   },
   {
    "day": 7,
    "word": "tiny",
    "pron": "[táini]",
    "pos": "a.",
    "meaning": "작은, 조그마한",
    "tip": "나비넥타이를 보고 \"이렇게 작은, 조그마한 것도 타이니?\"",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 21
   },
   {
    "day": 7,
    "word": "occasionally",
    "pron": "[əkéiʒənli]",
    "pos": "ad.",
    "meaning": "¹ 때때로, 가끔 ² 우연히",
    "tip": "우연히 만나 연락 좀 하라는 친구에게 \"OK 소식을 전할리! 때때로, 가끔이라도\"",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "occasional",
      "pos": "",
      "meaning": "때때로의, 가끔의"
     },
     {
      "word": "occasion",
      "pos": "",
      "meaning": "(특정한) 때, 경우"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 22
   },
   {
    "day": 7,
    "word": "profession",
    "pron": "[prəféʃən]",
    "pos": "n.",
    "meaning": "직업",
    "tip": "프로 수준의 패션 감각으로 얻게 된 패션 관련 직업",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "professional",
      "pos": "",
      "meaning": "직업의, 프로의"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 23
   },
   {
    "day": 7,
    "word": "footprint",
    "pron": "[fútprìnt]",
    "pos": "n.",
    "meaning": "발자국",
    "tip": "foot(발) + print(인쇄, 자국): 발자국",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 24
   },
   {
    "day": 7,
    "word": "scale",
    "pron": "[skeil]",
    "pos": "n.",
    "meaning": "¹ 규모 ² 저울, 눈금",
    "tip": "바위의 스케일(규모)을 알아보려고 저울에 올려 눈금을 읽다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 25
   },
   {
    "day": 7,
    "word": "misty",
    "pron": "[místi]",
    "pos": "a.",
    "meaning": "안개 낀",
    "tip": "인질범에게 잡힌 미스 김이 튀었다. 안개 낀 날씨를 이용하여",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "mist",
      "pos": "",
      "meaning": "안개"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 26
   },
   {
    "day": 7,
    "word": "tune",
    "pron": "[tju:n]",
    "pos": "n.",
    "meaning": "n. 멜로디 v. 조율하다",
    "tip": "멜로디에 맞춰 춤을 춘, 멜로디를 조율하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 27
   },
   {
    "day": 7,
    "word": "ancestor",
    "pron": "[ǽnsestər]",
    "pos": "n.",
    "meaning": "선조, 조상",
    "tip": "사진에 있는 앤 sister(누나)는 내 아이들의 선조, 조상",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 28
   },
   {
    "day": 7,
    "word": "direction",
    "pron": "[dirékʃən]",
    "pos": "n.",
    "meaning": "¹ 방향 ² 지시",
    "tip": "가야 할 방향으로 뒤랬션!(뒤랬어!) 즉, 방향, 지시",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 29
   },
   {
    "day": 7,
    "word": "direct",
    "pron": "[dirékt, dairékt]",
    "pos": "a.",
    "meaning": "¹ a. 직접적인 ² v. 지시하다",
    "tip": "1. 디렉트!(뒤랬어!), 돌아가지 말고 뒤로 직접 가라고 지시하다\n2. direction(방향, 지시)의 동사형: 지시하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "directly",
      "pos": "",
      "meaning": "바로, 직접"
     },
     {
      "word": "director",
      "pos": "",
      "meaning": "지휘자, 감독"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 30
   }
  ]
 },
 {
  "day": 8,
  "title": "8강",
  "words": [
   {
    "day": 8,
    "word": "freezing",
    "pron": "[frí:ziŋ]",
    "pos": "a.",
    "meaning": "몹시 추운",
    "tip": "풀이 찡! 하고 얼어버릴 정도로 몹시 추운",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "freeze",
      "pos": "",
      "meaning": "얼다 (freeze-froze-frozen)"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 1
   },
   {
    "day": 8,
    "word": "fist",
    "pron": "[fist]",
    "pos": "n.",
    "meaning": "주먹",
    "tip": "때리려고 하다가 피스(펐수) two(2)개의 주먹을",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 2
   },
   {
    "day": 8,
    "word": "holy",
    "pron": "[hóuli]",
    "pos": "a.",
    "meaning": "성스러운, 신성한",
    "tip": "신에게 홀리는 성스러운, 신성한 교회",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 3
   },
   {
    "day": 8,
    "word": "anthem",
    "pron": "[ǽnθəm]",
    "pos": "n.",
    "meaning": "노래, 성가",
    "tip": "앤이 song(노래)하는 노래, 성가",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 4
   },
   {
    "day": 8,
    "word": "lung",
    "pron": "[lʌŋ]",
    "pos": "n.",
    "meaning": "폐, 허파",
    "tip": "long(긴) 소리를 낼 때는 입이 아니고 폐, 허파에서 내야 한다.",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 5
   },
   {
    "day": 8,
    "word": "account",
    "pron": "[əkáunt]",
    "pos": "n.",
    "meaning": "¹ (예금) 계좌 ² 설명, 이야기",
    "tip": "은행원이 금액의 숫자를 a(하나) 하나 count(세면서) 예금 계좌에 얼마의 금액이 남았는지 설명하는",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 6
   },
   {
    "day": 8,
    "word": "chief",
    "pron": "[tʃi:f]",
    "pos": "a.",
    "meaning": "a. 최고의, 주요한 n. 우두머리",
    "tip": "반도체 칩은 우리나라 최고의, 주요한 수출품으로 우리나라가 세계에서 우두머리",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "chiefly",
      "pos": "",
      "meaning": "주로, 대개"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 7
   },
   {
    "day": 8,
    "word": "harvest",
    "pron": "[há:rvist]",
    "pos": "n.",
    "meaning": "수확, 추수",
    "tip": "태풍이 지나간 후에 수확한 사과의 합이 수(숫자) two(2)뿐",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 8
   },
   {
    "day": 8,
    "word": "stream",
    "pron": "[stri:m]",
    "pos": "n.",
    "meaning": "시내, 개울, 흐름",
    "tip": "水(물 수) 옆에서 트림하다, 즉 시내, 개울가에서 물고기를 먹고 트림하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 9
   },
   {
    "day": 8,
    "word": "object",
    "pron": "[@ábdʒikt, ɔ́bdʒikt] [@ɔ́bdʒikt] [v. əbdʒékt]",
    "pos": "n.",
    "meaning": "¹ n. 물건, 물체 ² n. 목표, 대상 ³ v. 반대하다",
    "tip": "앞에서 날아오는 제트기 같은 물체는 우리를 반대하는 적으로 격추해야 할 목표, 대상",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 10
   },
   {
    "day": 8,
    "word": "shelf",
    "pron": "[ʃelf]",
    "pos": "n.",
    "meaning": "선반",
    "tip": "'물은 셀프'라고 써놓은 식당의 선반",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 11
   },
   {
    "day": 8,
    "word": "defeat",
    "pron": "[difí:t]",
    "pos": "n.",
    "meaning": "n. 패배 v. 패배시키다, 물리치다",
    "tip": "등 뒤에 피를 흘리며 도망치게 하다, 즉 패배, 패배시키다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 12
   },
   {
    "day": 8,
    "word": "cage",
    "pron": "[keidʒ]",
    "pos": "n.",
    "meaning": "우리, 새장",
    "tip": "케이(K)라는 이름의 쥐가 갇혀있는 우리, 새장",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 13
   },
   {
    "day": 8,
    "word": "kidnap",
    "pron": "[kídnæp]",
    "pos": "v.",
    "meaning": "유괴하다, 납치하다",
    "tip": "kid(아이)를 냅 채가서 유괴하다, 납치하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 14
   },
   {
    "day": 8,
    "word": "bold",
    "pron": "[bould]",
    "pos": "a.",
    "meaning": "대담한, 용감한",
    "tip": "타자가 친 ball(공) 쪽으로 두 수비수가 충돌을 무릅쓰고 달려들 정도로 대담한, 용감한",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 15
   },
   {
    "day": 8,
    "word": "appeal",
    "pron": "[əpí:l]",
    "pos": "v.",
    "meaning": "¹ v. 애원하다, 호소하다 ² v. 마음을 끌다 n. 매력",
    "tip": "1. 근육질 남자가 마음을 끌다. 그래서 그 사람 등에 업힐 것을 애원하다\n2. 엄마에게 업힐 것을 애원하다, 호소하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 16
   },
   {
    "day": 8,
    "word": "pregnant",
    "pron": "[préɡnənt]",
    "pos": "a.",
    "meaning": "임신한",
    "tip": "풀밭에 egg(달걀)을 난(낳은) 임신한 암탉",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "pregnancy",
      "pos": "",
      "meaning": "임신"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 17
   },
   {
    "day": 8,
    "word": "math",
    "pron": "[mæθ]",
    "pos": "n.",
    "meaning": "수학",
    "tip": "숫자가 몇 수(몇 수)인가를 계산하는 수학",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "mathematics",
      "pos": "",
      "meaning": "수학"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 18
   },
   {
    "day": 8,
    "word": "counsel",
    "pron": "[káunsəl]",
    "pos": "v.",
    "meaning": "v. 상담하다, 조언하다 n. 상담, 조언",
    "tip": "흰 까운을 입은 의사가 환자에게 설명하며 상담하다, 조언하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "counseling",
      "pos": "",
      "meaning": "개인 상담"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 19
   },
   {
    "day": 8,
    "word": "architecture",
    "pron": "[á:rkitèktʃər]",
    "pos": "n.",
    "meaning": "건축, 건축물",
    "tip": "목공들이 북과 같은 악기를 치듯 망치를 택! 택! 쳐서 못을 박는 건축, 건축물",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 20
   },
   {
    "day": 8,
    "word": "participate",
    "pron": "[pɑ:rtísəpèit]",
    "pos": "v.",
    "meaning": "참여하다, 참가하다",
    "tip": "파티(에)서 나를 베이트(뺐지만) 그래도 참여하다, 참가하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "participate in",
      "pos": "",
      "meaning": "~에 참가하다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 21
   },
   {
    "day": 8,
    "word": "right",
    "pron": "[rait]",
    "pos": "a.",
    "meaning": "¹ a. 옳은 ² a. 오른쪽의 ³ n. 권리",
    "tip": "20세가 되어 갖게 된 나이트클럽에 들어갈 수 있는 권리",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 22
   },
   {
    "day": 8,
    "word": "sufficient",
    "pron": "[səfíʃənt]",
    "pos": "a.",
    "meaning": "충분한",
    "tip": "아저씨들끼리 \"내 담배 써, 마음대로 피셔(피우셔).\" 할 정도로 담배가 충분한",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "sufficiently",
      "pos": "",
      "meaning": "충분히"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 23
   },
   {
    "day": 8,
    "word": "suck",
    "pron": "[sʌk]",
    "pos": "v.",
    "meaning": "빨아들이다, 빨다",
    "tip": "빨대로 쏙쏙 빨아들이다, 사탕을 쏙쏙 빨다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 24
   },
   {
    "day": 8,
    "word": "drawer",
    "pron": "[drɔ́:ər]",
    "pos": "n.",
    "meaning": "서랍",
    "tip": "각종 잡동사니와 쓰레기를 넣어 드러워진(더러워진) 서랍",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 25
   },
   {
    "day": 8,
    "word": "deposit",
    "pron": "[dipázit]",
    "pos": "v.",
    "meaning": "v. (돈·물품 등을) 맡기다, 두다 n. 보증금",
    "tip": "달리면 지갑이 주머니에서 뒤로 빠짓(빠질)까 봐 친구에게 지갑을 맡기다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 26
   },
   {
    "day": 8,
    "word": "detect",
    "pron": "[ditékt]",
    "pos": "v.",
    "meaning": "발견하다, 탐지하다",
    "tip": "뒤에서 택! 잡다, 즉 경찰이 뒷모습만 보고도 범인을 발견하다, 탐지하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 27
   },
   {
    "day": 8,
    "word": "donation",
    "pron": "[dounéiʃən]",
    "pos": "n.",
    "meaning": "기부, 기증",
    "tip": "돈을 내이션(내서), 즉 기부, 기증",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "donate",
      "pos": "",
      "meaning": "기부하다, 기증하다 (-ate: 동사형 어미)"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 28
   },
   {
    "day": 8,
    "word": "organ",
    "pron": "[ɔ́:rɡən]",
    "pos": "n.",
    "meaning": "¹ (생물의) 기관, 장기 ² 오르간(악기)",
    "tip": "건강검진 결과 all(모두) 건강한 장기",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "organism",
      "pos": "",
      "meaning": "유기체, 생물"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 29
   },
   {
    "day": 8,
    "word": "organic",
    "pron": "[ɔ:rɡǽnik]",
    "pos": "a.",
    "meaning": "유기농의, 화학비료를 쓰지 않는",
    "tip": "화학비료 대신 올갱이(다슬기)를 논에 키워 해충을 잡아먹게 하는 유기농의, 화학비료를 쓰지 않는",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 30
   }
  ]
 },
 {
  "day": 9,
  "title": "9강",
  "words": [
   {
    "day": 9,
    "word": "philosopher",
    "pron": "[fɪlɑ́səfər]",
    "pos": "n.",
    "meaning": "철학자",
    "tip": "담배를 필라, 소파에서, 즉 깊은 생각에 빠진 철학자",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "philosophy",
      "pos": "",
      "meaning": "철학"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 1
   },
   {
    "day": 9,
    "word": "logic",
    "pron": "[lɑ́dʒik]",
    "pos": "n.",
    "meaning": "논리, 논리학",
    "tip": "흥분한 목소리가 아닌 나직한 목소리로 논리적으로 말하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "logical",
      "pos": "",
      "meaning": "논리적인 (-cal: 형용사형 어미)"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 2
   },
   {
    "day": 9,
    "word": "pharmacy",
    "pron": "[fɑ́ːrməsi]",
    "pos": "n.",
    "meaning": "약국",
    "tip": "팔에 못이 박혀 치료약을 구하러 달려간 약국",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 3
   },
   {
    "day": 9,
    "word": "passion",
    "pron": "[pǽʃən]",
    "pos": "n.",
    "meaning": "열정",
    "tip": "패션디자이너 앙드레 김이 가졌던 패션에 대한 열정",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "passionate",
      "pos": "",
      "meaning": "열정적인"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 4
   },
   {
    "day": 9,
    "word": "role",
    "pron": "[roul]",
    "pos": "n.",
    "meaning": "역할",
    "tip": "놀 수 없어요, 팀장으로서 맡은 역할이 있어서",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "play a ~ role",
      "pos": "",
      "meaning": "~한 역할을 하다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 5
   },
   {
    "day": 9,
    "word": "temporary",
    "pron": "[témpərèri]",
    "pos": "a.",
    "meaning": "일시적인, 임시의",
    "tip": "수영하고 나서 추워서 입술이 퍼런 것은 ten(10)분 정도만 퍼러리, 즉 일시적인, 임시의 현상",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 6
   },
   {
    "day": 9,
    "word": "equipment",
    "pron": "[ikwípmənt]",
    "pos": "n.",
    "meaning": "장비, 용품, 장비 설치",
    "tip": "이를(이빨을) 교정한 상태로 keep(유지하는) 장치가 이빨에 많다. 즉, 치아교정 장비, 장비 설치",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 7
   },
   {
    "day": 9,
    "word": "relevant",
    "pron": "[réləvənt]",
    "pos": "a.",
    "meaning": "관계있는, 적절한",
    "tip": "몸을 낼려(날려) 번트를 댄 것은 팀 작전과 관계있는, 적절한 공격",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 8
   },
   {
    "day": 9,
    "word": "soil",
    "pron": "[sɔil]",
    "pos": "n.",
    "meaning": "흙, 땅",
    "tip": "밭을 갈면서 소가 일하는 흙, 땅",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 9
   },
   {
    "day": 9,
    "word": "annual",
    "pron": "[ǽnjuəl]",
    "pos": "a.",
    "meaning": "1년의, 해마다의",
    "tip": "쑥쑥 자라서 해마다 애가 new 얼굴로 변한다, 즉 1년의, 해마다의 변화",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "annually",
      "pos": "",
      "meaning": "매년, 1년에 한 번씩"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 10
   },
   {
    "day": 9,
    "word": "controversy",
    "pron": "[kɑ́ntrəvə̀ːrsi]",
    "pos": "n.",
    "meaning": "논쟁, 논의",
    "tip": "흥! 하고 얼굴을 큰(크게) 틀어 벌 씹은 표정으로 논쟁, 논의",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "controversial",
      "pos": "",
      "meaning": "논쟁의 여지가 있는"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 11
   },
   {
    "day": 9,
    "word": "dot",
    "pron": "[dɑt]",
    "pos": "n.",
    "meaning": "점 v. 점을 찍다",
    "tip": "닷 컴(.com)의 닷은 점, 점을 찍다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 12
   },
   {
    "day": 9,
    "word": "kite",
    "pron": "[kait]",
    "pos": "n.",
    "meaning": "연",
    "tip": "가위로 종이를 오려서 뜨게 만든 연",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 13
   },
   {
    "day": 9,
    "word": "mass",
    "pron": "[mæs]",
    "pos": "n.",
    "meaning": "¹많은 양 a. 대량의 ²큰 덩어리",
    "tip": "죄수의 발목에 맸으, 쇠로 만든 많은 양의 큰 덩어리를",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 14
   },
   {
    "day": 9,
    "word": "formal",
    "pron": "[fɔ́ːrməl]",
    "pos": "a.",
    "meaning": "격식을 차린, 공식적인",
    "tip": "폼을 중요시하는, 즉 옷이나 행동에 있어 격식을 차린, 공식적인",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "informal",
      "pos": "",
      "meaning": "비공식적인 (in-: ~이 아닌)"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 15
   },
   {
    "day": 9,
    "word": "current",
    "pron": "[kə́ːrənt]",
    "pos": "a.",
    "meaning": "¹현재의 ²n. 흐름",
    "tip": "고런(그런) 투로 말하거나 행동하는 것이 현재의 세상 흐름",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "currently",
      "pos": "",
      "meaning": "현재, 최근에"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 16
   },
   {
    "day": 9,
    "word": "spot",
    "pron": "[spɑt]",
    "pos": "n.",
    "meaning": "¹얼룩 ²장소, 지점",
    "tip": "쑥밭의 얼룩덜룩한 장소",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 17
   },
   {
    "day": 9,
    "word": "bank",
    "pron": "[bæŋk]",
    "pos": "n.",
    "meaning": "¹은행 ²둑, 제방",
    "tip": "돈을 모아두는 bank(은행)과 같이 물을 모아두는 둑, 제방",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 18
   },
   {
    "day": 9,
    "word": "ray",
    "pron": "[rei]",
    "pos": "n.",
    "meaning": "광선",
    "tip": "엑스레이(X-ray)는 X 광선",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 19
   },
   {
    "day": 9,
    "word": "leak",
    "pron": "[liːk]",
    "pos": "v.",
    "meaning": "(가스·액체 등이) 새다",
    "tip": "\"이크! 방귀가 새어 나왔네.\" 즉, 새다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 20
   },
   {
    "day": 9,
    "word": "fry",
    "pron": "[frai]",
    "pos": "n.",
    "meaning": "튀김 v. 튀기다",
    "tip": "계란 후라이, 후렌치 후라이'에서 후라이는 튀김, 튀기다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 21
   },
   {
    "day": 9,
    "word": "permit",
    "pron": "[pərmít]",
    "pos": "v.",
    "meaning": "허락하다, 허가하다",
    "tip": "엄마가 펌(퍼머) it(그것을) 허락하다, 허가하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "permission",
      "pos": "",
      "meaning": "허가, 승인 (-sion: 명사형 어미)"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 22
   },
   {
    "day": 9,
    "word": "scholar",
    "pron": "[skɑ́lər]",
    "pos": "n.",
    "meaning": "학자",
    "tip": "school(학교)에서 연구하는 ar(사람), 즉 학자",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 23
   },
   {
    "day": 9,
    "word": "commercial",
    "pron": "[kəmə́ːrʃəl]",
    "pos": "a.",
    "meaning": "상업의, 상업적인",
    "tip": "새로 출시된 car(차) 앞에 손님들을 모셜(모셔). 차를 홍보하여 파는 상업의, 상업적인 행위",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 24
   },
   {
    "day": 9,
    "word": "emergency",
    "pron": "[imə́ːrdʒənsi]",
    "pos": "n.",
    "meaning": "비상사태, 위급",
    "tip": "\"임마! 전시야! 지금은 전쟁 중이야\" 즉, 비상사태, 위급",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 25
   },
   {
    "day": 9,
    "word": "secretary",
    "pron": "[sékrətèri]",
    "pos": "n.",
    "meaning": "비서",
    "tip": "\"커피 좀 새로 끓여! 그리고 먼지 털이 좀 해\" 하고 비서에게 시키다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 26
   },
   {
    "day": 9,
    "word": "demon",
    "pron": "[díːmən]",
    "pos": "n.",
    "meaning": "악마, 귀신",
    "tip": "\"너 뒤에 뭔가가 있어\" 악마, 귀신",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 27
   },
   {
    "day": 9,
    "word": "ideal",
    "pron": "[aidíːəl]",
    "pos": "n.",
    "meaning": "이상 a. 이상적인",
    "tip": "가장 이상적인 아이디얼(아이디어를) 생각해냈어!",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 28
   },
   {
    "day": 9,
    "word": "chemical",
    "pron": "[kémikəl]",
    "pos": "a.",
    "meaning": "화학의, 화학적인",
    "tip": "롯데케미칼, SK케미칼 회사들은 화학 회사, 즉 화학의, 화학적인",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "chemistry",
      "pos": "",
      "meaning": "화학"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 29
   },
   {
    "day": 9,
    "word": "frightful",
    "pron": "[fráitfəl]",
    "pos": "a.",
    "meaning": "무서운",
    "tip": "후라이를 만들려고 two(2) 팔을 튀기는 무서운 마귀 할멈",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "frighten",
      "pos": "",
      "meaning": "겁먹게 하다 (-en: 동사형 어미)"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 30
   }
  ]
 },
 {
  "day": 10,
  "title": "10강",
  "words": [
   {
    "day": 10,
    "word": "evidence",
    "pron": "[évidəns]",
    "pos": "n.",
    "meaning": "증거",
    "tip": "술집에서 쓴 신용카드 영수증을 시어머니가 며느리에게 보이며 \"애비가 돈을 쓴 증거.\"",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 1
   },
   {
    "day": 10,
    "word": "evident",
    "pron": "[évidənt]",
    "pos": "a.",
    "meaning": "분명한, 명백한",
    "tip": "액자 뒤 비상금은 애비 돈이 분명한, 명백한",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 2
   },
   {
    "day": 10,
    "word": "further",
    "pron": "[fə́:rðər]",
    "pos": "a.",
    "meaning": "그 이상의 ad. 더욱, 더 멀리",
    "tip": "1. 그 이상으로, 더욱 팔을 쭉 뻗어 2. far(멀리)의 비교급",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 3
   },
   {
    "day": 10,
    "word": "barber",
    "pron": "[bá:rbər]",
    "pos": "n.",
    "meaning": "이발사",
    "tip": "머리를 영구처럼 바보로 깎아 놓은 이발사",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 4
   },
   {
    "day": 10,
    "word": "dig",
    "pron": "[dig]",
    "pos": "v.",
    "meaning": "파다 (dig-dug-dug)",
    "tip": "두더지가 굴을 디귿(ㄷ) 모양으로 파다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 5
   },
   {
    "day": 10,
    "word": "burst",
    "pron": "[bə:rst]",
    "pos": "v.",
    "meaning": "폭발하다, 터뜨리다 (burst-burst-burst)",
    "tip": "테러범의 폭탄에 버스가 투~ 하고 폭발하다, 터뜨리다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 6
   },
   {
    "day": 10,
    "word": "rapid",
    "pron": "[rǽpid]",
    "pos": "a.",
    "meaning": "빠른, 신속한",
    "tip": "'내 피두(피도) 써!' 하며 수혈이 시급한 환자에게 달려간 빠른, 신속한 속도",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 7
   },
   {
    "day": 10,
    "word": "rage",
    "pron": "[reidʒ]",
    "pos": "n.",
    "meaning": "분노 v. 분노하다",
    "tip": "고양이 톰이 쥐 제리에게 \"내 이 쥐를 그냥\" 하며 분노, 분노하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 8
   },
   {
    "day": 10,
    "word": "ethnic",
    "pron": "[éθnik]",
    "pos": "a.",
    "meaning": "민족의",
    "tip": "독립 운동가들이 민족의 독립을 위해 애쓰니",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 9
   },
   {
    "day": 10,
    "word": "sculpture",
    "pron": "[skʌ́lptʃər]",
    "pos": "n.",
    "meaning": "조각, 조각품",
    "tip": "스윽 칼로 깎고 붙여 만든 조각, 조각품",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 10
   },
   {
    "day": 10,
    "word": "journey",
    "pron": "[dʒə́:rni]",
    "pos": "n.",
    "meaning": "여행, 여정 v. 여행하다",
    "tip": "\"노를 저어! 니가!\" 하며 배를 타고 여행, 여행하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 11
   },
   {
    "day": 10,
    "word": "climate",
    "pron": "[kláimət]",
    "pos": "n.",
    "meaning": "기후",
    "tip": "기후가 좋아 심기만 하면 잘 클라이(크다), 묏(이트)",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 12
   },
   {
    "day": 10,
    "word": "organization",
    "pron": "[ɔ̀:rgənizéiʃən]",
    "pos": "n.",
    "meaning": "조직, 단체",
    "tip": "(들어)오거나 하려면 나이를 재서, 즉 노인회와 같이 나이 제한을 두는 조직, 단체",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 13
   },
   {
    "day": 10,
    "word": "modern",
    "pron": "[mάdərn]",
    "pos": "a.",
    "meaning": "현대의",
    "tip": "(임)마! 돈이 최고야 현대의 세계에선",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 14
   },
   {
    "day": 10,
    "word": "surface",
    "pron": "[sə́:rfis]",
    "pos": "n.",
    "meaning": "표면, 수면",
    "tip": "바늘을 찾으려고 살피수, 방 표면을",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 15
   },
   {
    "day": 10,
    "word": "settle",
    "pron": "[sétl]",
    "pos": "v.",
    "meaning": "¹ 정착하다 ² 해결하다",
    "tip": "피난민들이 새로운 틀(집)에 정착하다, 그래서 주거 문제를 해결하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 16
   },
   {
    "day": 10,
    "word": "immediate",
    "pron": "[imí:diət]",
    "pos": "a.",
    "meaning": "즉시의, 당장의",
    "tip": "칼로 내려치는 순간 홍길동이 즉시의, 당장의 속도로 이미 적의 뒤에 있다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 17
   },
   {
    "day": 10,
    "word": "lunar",
    "pron": "[lú:nər]",
    "pos": "a.",
    "meaning": "달의, 음력의",
    "tip": "달 속에 비친 그리운 누나의 얼굴",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 18
   },
   {
    "day": 10,
    "word": "dumb",
    "pron": "[dʌm]",
    "pos": "a.",
    "meaning": "¹ 언어 장애인의 ² 우둔한",
    "tip": "1. 물어도 답이 없이 덤덤한 언어 장애인의 2. 일을 이것저것 시켜도 못 알아듣고 덤덤한, 즉 우둔한",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 19
   },
   {
    "day": 10,
    "word": "fat",
    "pron": "[fæt]",
    "pos": "a.",
    "meaning": "살찐 n. 지방",
    "tip": "살찐, 지방이 많은 친구에게 살을 뺏!(빼)",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 20
   },
   {
    "day": 10,
    "word": "combination",
    "pron": "[kὰmbinéiʃən]",
    "pos": "n.",
    "meaning": "결합, 조합",
    "tip": "큰 비 내리션. 그것은 저기압과 고기압이 결합, 조합했기 때문",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 21
   },
   {
    "day": 10,
    "word": "edge",
    "pron": "[edʒ]",
    "pos": "n.",
    "meaning": "모서리, 가장자리",
    "tip": "애가 찌이다(찧다), 모서리에",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 22
   },
   {
    "day": 10,
    "word": "devil",
    "pron": "[dévl]",
    "pos": "n.",
    "meaning": "악마",
    "tip": "大(큰 대) 불이 이글거리며 불타는 모습의 악마",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 23
   },
   {
    "day": 10,
    "word": "divide",
    "pron": "[diváid]",
    "pos": "v.",
    "meaning": "나누다, 쪼개다",
    "tip": "홍길동이 뒤에 있는 바위도 둘로 나누다, 쪼개다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 24
   },
   {
    "day": 10,
    "word": "idle",
    "pron": "[áidl]",
    "pos": "a.",
    "meaning": "게으른, 나태한",
    "tip": "아이들이 숙제도 하지 않고 TV만 보고 게으른, 나태한",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 25
   },
   {
    "day": 10,
    "word": "fountain",
    "pron": "[fáuntən]",
    "pos": "n.",
    "meaning": "분수",
    "tip": "땅을 판 곳에서 물이 튄, 즉 분수",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 26
   },
   {
    "day": 10,
    "word": "gather",
    "pron": "[gǽðər]",
    "pos": "v.",
    "meaning": "모이다, 모으다",
    "tip": "개에게 과자를 주자 동네 개들이 더 모이다, 모으다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 27
   },
   {
    "day": 10,
    "word": "vehicle",
    "pron": "[ví:ikl]",
    "pos": "n.",
    "meaning": "차량, 차",
    "tip": "차량이 와서 옆으로 비킬(비키다)",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 28
   },
   {
    "day": 10,
    "word": "aid",
    "pron": "[eid]",
    "pos": "v.",
    "meaning": "돕다 n. 도움",
    "tip": "에이즈에 걸린 사람들을 돕다, 도움",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 29
   },
   {
    "day": 10,
    "word": "jealous",
    "pron": "[dʒéləs]",
    "pos": "a.",
    "meaning": "질투심 많은, 시기하는",
    "tip": "\"잘났수, 정말!\" 하며 질투심 많은, 시기하는",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 30
   }
  ]
 },
 {
  "day": 11,
  "title": "11강",
  "words": [
   {
    "day": 11,
    "word": "locate",
    "pron": "[lóukeit]",
    "pos": "v.",
    "meaning": "~에 위치시키다, 위치를 찾아내다",
    "tip": "로케이트 → 로케트: 북한이 로케트(로켓)포를 휴전선 근처에 위치시키다, 남한이 그 위치를 찾아내다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "location",
      "pos": "",
      "meaning": "장소, 위치"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 1
   },
   {
    "day": 11,
    "word": "quit",
    "pron": "[kwit]",
    "pos": "v.",
    "meaning": "그만두다, 중지하다 (quit-quit-quit)",
    "tip": "회사 문을 발로 kick(차버리고) 나와 직장을 그만두다, 중지하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 2
   },
   {
    "day": 11,
    "word": "legend",
    "pron": "[lédʒənd]",
    "pos": "n.",
    "meaning": "전설",
    "tip": "\"내가 전두환이 일으킨 쿠데타에 대한 전설을 얘기해 줄게.\"",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 3
   },
   {
    "day": 11,
    "word": "permanent",
    "pron": "[pə́ːrmənənt]",
    "pos": "a.",
    "meaning": "영구적인",
    "tip": "아주머니들의 퍼머는 영구적이다. 원래 퍼머는 permanent wave에서 온 말.",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "permanently",
      "pos": "",
      "meaning": "영구적으로"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 4
   },
   {
    "day": 11,
    "word": "track",
    "pron": "[træk]",
    "pos": "n.",
    "meaning": "¹ 트랙, 경주로, 길 ² 자국, 발자국 v. ³ 뒤쫓다, 추적하다",
    "tip": "달리기 트랙에 그려진 길을 따라 앞서 달리는 선수들의 발자국을 뒤에서 열심히 뒤쫓다, 추적하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 5
   },
   {
    "day": 11,
    "word": "trace",
    "pron": "[treis]",
    "pos": "n.",
    "meaning": "자취, 발자국 v. 추적하다",
    "tip": "눈 속에 찍힌 발자국 틀에 남겨져 있수, 즉 범인의 자취, 발자국, 추적하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 6
   },
   {
    "day": 11,
    "word": "thumb",
    "pron": "[θʌm]",
    "pos": "n.",
    "meaning": "엄지손가락",
    "tip": "\"얘가 쌈(싸움) 짱이야\" 하며 엄지손가락을 치켜세우다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 7
   },
   {
    "day": 11,
    "word": "continent",
    "pron": "[kántinənt]/[kɔ́ntinənt]",
    "pos": "n.",
    "meaning": "대륙",
    "tip": "바다 저 멀리 큰 티가 난 two(2)개의 대륙",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 8
   },
   {
    "day": 11,
    "word": "typical",
    "pron": "[típikəl]",
    "pos": "a.",
    "meaning": "대표하는, 전형적인",
    "tip": "tea(차)와 피클은 피자와 함께 이탈리아 대표하는, 전형적인 음식",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 9
   },
   {
    "day": 11,
    "word": "diameter",
    "pron": "[daiǽmitər]",
    "pos": "n.",
    "meaning": "지름, 직경",
    "tip": "다이아몬드가 몇 미터인지 재는 지름, 직경",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 10
   },
   {
    "day": 11,
    "word": "string",
    "pron": "[striŋ]",
    "pos": "n.",
    "meaning": "끈, 실",
    "tip": "스프링처럼 늘어져 있는 끈, 실",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 11
   },
   {
    "day": 11,
    "word": "critical",
    "pron": "[krítikəl]",
    "pos": "a.",
    "meaning": "¹ 비판적인 ² 중대한 ³ 위기의",
    "tip": "정치가에게 \"그리 티끌이 많아?\" 하며 비판적인 모습과 그 정치가의 중대한, 위기의 상황",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "critic",
      "pos": "",
      "meaning": "비평가, 비판하는 사람"
     },
     {
      "word": "criticism",
      "pos": "",
      "meaning": "비평, 비판"
     },
     {
      "word": "criticize",
      "pos": "",
      "meaning": "비평하다, 비판하다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 12
   },
   {
    "day": 11,
    "word": "aim",
    "pron": "[eim]",
    "pos": "v.",
    "meaning": "겨누다 n. 목표",
    "tip": "사과를 얹은 애를 겨누다, 목표는 애임.",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 13
   },
   {
    "day": 11,
    "word": "prosper",
    "pron": "[práspər]/[próspər]",
    "pos": "v.",
    "meaning": "번영하다",
    "tip": "돈을 플러스하여 담고 또 퍼담을 정도로 회사가 번영하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 14
   },
   {
    "day": 11,
    "word": "command",
    "pron": "[kəmǽnd]/[kəmáːnd]",
    "pos": "n.",
    "meaning": "명령 v. 명령하다, 지휘하다",
    "tip": "대장이 고만둬!(그만둬!) 하고 명령, 명령하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "commander",
      "pos": "",
      "meaning": "지휘관, 사령관 (-er: ~사람, ~것)"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 15
   },
   {
    "day": 11,
    "word": "trap",
    "pron": "[træp]",
    "pos": "n.",
    "meaning": "덫, 함정",
    "tip": "건드리면 닫히는 틀에 먹이를 뿌려놓은 덫",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 16
   },
   {
    "day": 11,
    "word": "obey",
    "pron": "[oubéi]",
    "pos": "v.",
    "meaning": "복종하다, 따르다",
    "tip": "강도의 칼에 오우! 베이는 게 무서워 복종하다, 따르다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 17
   },
   {
    "day": 11,
    "word": "dispute",
    "pron": "[dispjúːt]",
    "pos": "v.",
    "meaning": "논쟁하다, 분쟁하다 n. 논쟁, 분쟁",
    "tip": "'this(이) 핵 미사일을 퓨~ 싹 버릴끼야!' 하며 북한이 미국 대표와 논쟁하다, 분쟁하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 18
   },
   {
    "day": 11,
    "word": "constant",
    "pron": "[kánstənt]/[kɔ́nstənt]",
    "pos": "a.",
    "meaning": "변함없는, 끊임없는",
    "tip": "고향 뒷산의 큰 stone(바위) two(2)개가 아직도 있는, 즉 변함없는, 끊임없는",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 19
   },
   {
    "day": 11,
    "word": "share",
    "pron": "[ʃɛər]",
    "pos": "n.",
    "meaning": "몫 v. 분배하다, 공유하다",
    "tip": "돈을 세어서 각자의 몫을 분배하다, 공유하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 20
   },
   {
    "day": 11,
    "word": "tomb",
    "pron": "[tuːm]",
    "pos": "n.",
    "meaning": "묘지",
    "tip": "부모님의 묘지 앞에서 two(두) 사람이 움",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 21
   },
   {
    "day": 11,
    "word": "respond",
    "pron": "[rispánd]/[rispɔ́nd]",
    "pos": "v.",
    "meaning": "대답하다, 반응하다",
    "tip": "내가 보낸 메일에 res(뒤로) 되돌려 반드시 답장 달래서 대답하다, 반응하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "response",
      "pos": "",
      "meaning": "대답, 반응"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 22
   },
   {
    "day": 11,
    "word": "thrust",
    "pron": "[θrʌst]",
    "pos": "v.",
    "meaning": "밀어 넣다, 찌르다 (thrust-thrust-thrust)",
    "tip": "쓰레기를 쓸어서 쓰레기통 to(쪽으로) 밀어 넣다, 찌르다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 23
   },
   {
    "day": 11,
    "word": "acknowledge",
    "pron": "[æknálidʒ, əknálidʒ]/[əknɔ́lidʒ]",
    "pos": "v.",
    "meaning": "인정하다",
    "tip": "\"어쿠! knowledge(지식)이 풍부하구나.\"라며 똑똑함을 인정하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 24
   },
   {
    "day": 11,
    "word": "revolution",
    "pron": "[rèvəlúːʃən]",
    "pos": "n.",
    "meaning": "혁명, 대변혁",
    "tip": "부패한 정부를 내 발로 시원하게 밟아서 일으킨 혁명, 대변혁",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 25
   },
   {
    "day": 11,
    "word": "voyage",
    "pron": "[vɔ́iidʒ]",
    "pos": "n.",
    "meaning": "항해 v. 항해하다",
    "tip": "전망대 선원에게 \"육지가 보이지?\" 하고 물으며 항해, 항해하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 26
   },
   {
    "day": 11,
    "word": "ditch",
    "pron": "[ditʃ]",
    "pos": "n.",
    "meaning": "도랑, 배수구",
    "tip": "도랑을 건너기 위해 돌을 딛지(딛고 건너지).",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 27
   },
   {
    "day": 11,
    "word": "violence",
    "pron": "[váiələns]",
    "pos": "n.",
    "meaning": "폭력, 폭행",
    "tip": "데모대가 경찰을 향해 바위를 all(모두가) 던져 넣었수, 즉 폭력, 폭행",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "violent",
      "pos": "",
      "meaning": "폭력적인, 격렬한"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 28
   },
   {
    "day": 11,
    "word": "nephew",
    "pron": "[néfju:]",
    "pos": "n.",
    "meaning": "조카",
    "tip": "애는 내 피붙이유~ 내 조카예유.",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 29
   },
   {
    "day": 11,
    "word": "niece",
    "pron": "[ni:s]",
    "pos": "n.",
    "meaning": "조카딸",
    "tip": "\"니(네가) 쓰라\" 하고 조카딸에게 인형을 선물",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 30
   }
  ]
 },
 {
  "day": 12,
  "title": "12강",
  "words": [
   {
    "day": 12,
    "word": "urgent",
    "pron": "[ə́ːrdʒənt]",
    "pos": "a.",
    "meaning": "긴급한",
    "tip": "어! 전투가 일어나서 긴급한",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 1
   },
   {
    "day": 12,
    "word": "associate",
    "pron": "[əsóuʃièit]",
    "pos": "v.",
    "meaning": "교제하다, 관련시키다",
    "tip": "어소우시에이트: \"어서 오십시오\"라고 손님을 맞으며 교제하다, 관련시키다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "association",
      "pos": "",
      "meaning": "협회, 관련"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 2
   },
   {
    "day": 12,
    "word": "lump",
    "pron": "[lʌmp]",
    "pos": "n.",
    "meaning": "덩어리",
    "tip": "주걱이 넘치게 푸다, 한 덩어리의 밥을",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 3
   },
   {
    "day": 12,
    "word": "pour",
    "pron": "[pɔ:r]",
    "pos": "v.",
    "meaning": "붓다, 퍼붓다",
    "tip": "물을 퍼 양동이나 잔에 붓다, 퍼붓다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 4
   },
   {
    "day": 12,
    "word": "pray",
    "pron": "[prei]",
    "pos": "v.",
    "meaning": "기원하다, 기도하다",
    "tip": "\"플레이 플레이 코리아!\" 하며 한국 선수들이 이기기를 기원하다, 기도하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 5
   },
   {
    "day": 12,
    "word": "prey",
    "pron": "[prei]",
    "pos": "n.",
    "meaning": "먹이, 희생자",
    "tip": "풀에 있는 이는 개구리의 먹이",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 6
   },
   {
    "day": 12,
    "word": "satellite",
    "pron": "[sǽtəlàit]",
    "pos": "n.",
    "meaning": "인공위성, 위성",
    "tip": "새털처럼 light(가볍게) 하늘에 떠 있는 인공위성, 위성",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 7
   },
   {
    "day": 12,
    "word": "owe",
    "pron": "[ou]",
    "pos": "v.",
    "meaning": "…에게 ~을 빚지고 있다, 신세를 지고 있다",
    "tip": "\"오우~ 하나님 감사합니다.\" 즉, 하나님께 은혜를 빚지고 있다, 신세를 지고 있다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 8
   },
   {
    "day": 12,
    "word": "measure",
    "pron": "[méʒər]",
    "pos": "n.",
    "meaning": "치수, 측정 v. 측정하다",
    "tip": "\"허리를 줄자로 매줘!\" 즉, 허리 치수를 측정하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 9
   },
   {
    "day": 12,
    "word": "desert",
    "pron": "n.[dézərt] v.[dizə́rt]",
    "pos": "n.",
    "meaning": "¹ 사막 ² 버리다, 저버리다",
    "tip": "뒈져! (죽어!) 하고 침을 투! 뱉으며 사막에 사람을 버리다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 10
   },
   {
    "day": 12,
    "word": "scream",
    "pron": "[skri:m]",
    "pos": "n.",
    "meaning": "비명 v. 비명을 지르다",
    "tip": "극장 스크린(screen)에 등장한 귀신에 관객들이 비명, 비명을 지르다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 11
   },
   {
    "day": 12,
    "word": "publish",
    "pron": "[pʌ́bliʃ]",
    "pos": "v.",
    "meaning": "출판하다, 널리 알리다",
    "tip": "정보를 퍼서 사람들에게 불리!(불다) 하며 책으로 출판하다, 널리 알리다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 12
   },
   {
    "day": 12,
    "word": "politely",
    "pron": "[pəláitli]",
    "pos": "ad.",
    "meaning": "공손히, 예의바르게",
    "tip": "\"4살 더 많은 폴은 나이가 틀리니 공손히, 예의바르게 인사해.\"",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "polite",
      "pos": "",
      "meaning": "공손한, 예의바른"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 13
   },
   {
    "day": 12,
    "word": "fan",
    "pron": "[fæn]",
    "pos": "n.",
    "meaning": "¹ (가수·영화 등의) 팬 ² 부채, 선풍기",
    "tip": "팬들이 들고 응원하는 가수의 사진이 담겨진 부채",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 14
   },
   {
    "day": 12,
    "word": "blow",
    "pron": "[blou]",
    "pos": "v.",
    "meaning": "(바람이) 불다, (입으로) 불다 (blow-blew-blown)",
    "tip": "바람이 불어오우, 즉 바람이 불다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 15
   },
   {
    "day": 12,
    "word": "deserve",
    "pron": "[dizə́:rv]",
    "pos": "v.",
    "meaning": "~할 만하다, ~을 받을 만하다",
    "tip": "그 나쁜 놈은 디저브릴 만했지, 즉 ~할 만하다, 천벌을 받을 만하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 16
   },
   {
    "day": 12,
    "word": "assume",
    "pron": "[əsú:m]",
    "pos": "v.",
    "meaning": "추정하다, 생각하다",
    "tip": "어슴푸레하게 생각을 떠올려보다. 즉, 추정하다, 생각하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 17
   },
   {
    "day": 12,
    "word": "access",
    "pron": "[ǽkses]",
    "pos": "v.",
    "meaning": "접속하다, 접근하다 n. (장소로의) 입장, 접근",
    "tip": "경찰들이 몰래 접근하다. 그러자 범인이 뒷문으로 액! 샜수(새다, 도망치다)",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 18
   },
   {
    "day": 12,
    "word": "destination",
    "pron": "[dèstənéiʃən]",
    "pos": "n.",
    "meaning": "목적지, 목표",
    "tip": "\"나의 목표, 목적지는 대(大)스타 되는 거야, 우리 nation(나라)에서.\"",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 19
   },
   {
    "day": 12,
    "word": "poverty",
    "pron": "[pávərti]/[póvərti]",
    "pos": "n.",
    "meaning": "가난, 빈곤",
    "tip": "먹을 것이 없어 파만 먹고 버티는 가난, 빈곤",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 20
   },
   {
    "day": 12,
    "word": "comment",
    "pron": "[káment]/[kɔ́ment]",
    "pos": "n.",
    "meaning": "논평 v. 논평하다",
    "tip": "토론회에서 대통령을 까는 멘트로 논평, 논평하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 21
   },
   {
    "day": 12,
    "word": "harm",
    "pron": "[ha:rm]",
    "pos": "n.",
    "meaning": "손해, 해 v. 해를 끼치다",
    "tip": "결혼하기 전 함 값 때문에 본 손해, 해",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "harmful",
      "pos": "",
      "meaning": "해로운 (-ful: 형용사형 어미)"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 22
   },
   {
    "day": 12,
    "word": "flavor",
    "pron": "[fléivər]",
    "pos": "n.",
    "meaning": "향기, 맛",
    "tip": "풀이 많은 neighbor(이웃)에서 나는 풀 향기",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 23
   },
   {
    "day": 12,
    "word": "bravery",
    "pron": "[bréivəri]",
    "pos": "n.",
    "meaning": "용기, 용감",
    "tip": "소방대원이 사람을 구하기 위해 자신을 불에 버리는 용기, 용감",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "brave",
      "pos": "",
      "meaning": "용감한"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 24
   },
   {
    "day": 12,
    "word": "alien",
    "pron": "[éiljən]",
    "pos": "a.",
    "meaning": "이질적인, 외계의 n. 외계인",
    "tip": "1. 어린 애가 일 년 만에 다 자란 성인이 되는 우리랑 다른 이질적인, 외계의, 외계인 2. 영화 <에일리언>은 우리랑 다른 이질적인 외계인 영화",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 25
   },
   {
    "day": 12,
    "word": "neat",
    "pron": "[ni:t]",
    "pos": "a.",
    "meaning": "산뜻한, 깔끔한",
    "tip": "니트를 입어 산뜻한, 깔끔한",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 26
   },
   {
    "day": 12,
    "word": "fell",
    "pron": "[fel]",
    "pos": "v.",
    "meaning": "¹ (나무를) 베어 넘어뜨리다 (fell-felled-felled) ² fall(떨어지다, 넘어지다)의 과거형 (fall-fell-fallen)",
    "tip": "도끼로 나무를 팰, 그렇게 나무를 베어 넘어뜨리다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 27
   },
   {
    "day": 12,
    "word": "spill",
    "pron": "[spil]",
    "pos": "v.",
    "meaning": "흘리다, 쏟다 (spill-spilled[spilt]-spilled[spilt])",
    "tip": "코에서 슉! 핔(피를) 흘리다, 쏟다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 28
   },
   {
    "day": 12,
    "word": "block",
    "pron": "[blák]/[blɔ́k]",
    "pos": "n.",
    "meaning": "¹ 사각형 덩어리 ² (도로로 나뉘는) 블록 v. ³ 막다, 방해하다",
    "tip": "1. 레고의 블록은 사각형 덩어리 2. 배구에서 블로킹(blocking)으로 상대 공격을 막다, 방해하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 29
   }
  ]
 },
 {
  "day": 13,
  "title": "13강",
  "words": [
   {
    "day": 13,
    "word": "spoil",
    "pron": "[spoil]",
    "pos": "v.",
    "meaning": "망치다",
    "tip": "숲에 오일(기름)을 몰래 버려서 숲을 망치다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 1
   },
   {
    "day": 13,
    "word": "merit",
    "pron": "[mérit]",
    "pos": "n.",
    "meaning": "장점",
    "tip": "매는 먹이인 it(그것을) 먼 곳에서도 볼 수 있는 장점이 있다.",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 2
   },
   {
    "day": 13,
    "word": "release",
    "pron": "[rilíːs]",
    "pos": "v.",
    "meaning": "풀어주다, 석방하다",
    "tip": "낚싯대의 릴(reel)을 풀어 낚싯바늘에 잡힌 물고기를 풀어주다, 석방하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 3
   },
   {
    "day": 13,
    "word": "annoy",
    "pron": "[ənɔ́i]",
    "pos": "v.",
    "meaning": "짜증나게 하다, 귀찮게 하다",
    "tip": "싫다는 데도 계속 붙들자 \"어, 놓이소!\" 즉, 스토커처럼 짜증나게 하다, 귀찮게 하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 4
   },
   {
    "day": 13,
    "word": "crew",
    "pron": "[kruː]",
    "pos": "n.",
    "meaning": "(배·비행기·열차의) 승무원, 선원",
    "tip": "배의 출항을 위해 항구에 묶인 배의 밧줄을 끄르는 승무원, 선원",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 5
   },
   {
    "day": 13,
    "word": "endure",
    "pron": "[indjúər]",
    "pos": "v.",
    "meaning": "견디다, 참다",
    "tip": "여러 고문을 겪은 다음 \"이번엔 인두여? 해볼 테면 해 봐!\" 하고 견디다, 참다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 6
   },
   {
    "day": 13,
    "word": "sigh",
    "pron": "[sai]",
    "pos": "v.",
    "meaning": "한숨 쉬다 n. 한숨",
    "tip": "쌓이는 설거지 거리를 보고 \"스트레스 쌓인다 쌓이!\" 하고 한숨 쉬다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 7
   },
   {
    "day": 13,
    "word": "display",
    "pron": "[displéi]",
    "pos": "v.",
    "meaning": "전시하다, 보이다 n. 진열, 전시",
    "tip": "this(이) 보따리를 풀래이!(풀다) 하고 시장에 팔려고 보따리에 가져온 야채를 전시하다, 보이다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 8
   },
   {
    "day": 13,
    "word": "loosen",
    "pron": "[lúːsn]",
    "pos": "v.",
    "meaning": "풀다, 느슨하게 하다",
    "tip": "느슨하게 하다, 즉 풀다, 느슨하게 하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "loose",
      "pos": "",
      "meaning": "느슨한; 풀다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 9
   },
   {
    "day": 13,
    "word": "consume",
    "pron": "[kənsúːm]",
    "pos": "v.",
    "meaning": "¹ (돈·에너지 등을) 쓰다, 소비하다 ² 먹다, 마시다",
    "tip": "먹고 마시는 데 돈을 큰(크게) 씀. 즉 돈을 쓰다, 소비하다, 먹다, 마시다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "consumer",
      "pos": "",
      "meaning": "소비자"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 10
   },
   {
    "day": 13,
    "word": "sink",
    "pron": "[siŋk]",
    "pos": "n.",
    "meaning": "¹ 싱크대 ² v. 가라앉다 (sink-sank-sunk)",
    "tip": "싱크대의 물이 구멍으로 가라앉다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 11
   },
   {
    "day": 13,
    "word": "gray",
    "pron": "[grei]",
    "pos": "a.",
    "meaning": "잿빛의 n. 회색",
    "tip": "고구마를 구으래이! 숯이 잿빛의, 즉 회색이 될 때까지",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 12
   },
   {
    "day": 13,
    "word": "author",
    "pron": "[ɔ́ːθər]",
    "pos": "n.",
    "meaning": "저자, 작가",
    "tip": "\"오~ 글 좀 써주세요!\" 하고 부탁당하는 저자, 작가",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 13
   },
   {
    "day": 13,
    "word": "attitude",
    "pron": "[ǽtitjùːd]",
    "pos": "n.",
    "meaning": "태도, 자세",
    "tip": "공중에 애가 떠 춤을 츄드(추다), 즉 새처럼 나는 자세, 태도를 취하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 14
   },
   {
    "day": 13,
    "word": "valid",
    "pron": "[vǽlid]",
    "pos": "a.",
    "meaning": "유효한, 효과 있는",
    "tip": "살을 빼는 데 있어서 밸리(댄스)도 효과 있는",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 15
   },
   {
    "day": 13,
    "word": "cell",
    "pron": "[sel]",
    "pos": "n.",
    "meaning": "세포",
    "tip": "현미경에 보이는 셀 수 없이 많은 세포",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 16
   },
   {
    "day": 13,
    "word": "evolve",
    "pron": "[ivάlv]",
    "pos": "v.",
    "meaning": "발전하다, 진화하다",
    "tip": "2등을 밟으(에볼), 그리고 1등으로 발전하다, 진화하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "evolution",
      "pos": "",
      "meaning": "진화, 발전"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 17
   },
   {
    "day": 13,
    "word": "ridiculous",
    "pron": "[ridíkjuləs]",
    "pos": "a.",
    "meaning": "우스운, 어리석은",
    "tip": "니 뒤 주머니에 굴 넣수. 근데 깔고 앉은 모습이 우스운, 어리석은",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 18
   },
   {
    "day": 13,
    "word": "genius",
    "pron": "[dʒíːnjəs]",
    "pos": "n.",
    "meaning": "천재, 천재적 재능",
    "tip": "천재적 재능을 지녔수. 즉, 천재",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 19
   },
   {
    "day": 13,
    "word": "carbon",
    "pron": "[káːrbən]",
    "pos": "n.",
    "meaning": "탄소",
    "tip": "car(자동차)가 연료를 burn(태워서) 배기통으로 나오는 일산화탄소",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 20
   },
   {
    "day": 13,
    "word": "murder",
    "pron": "[mɔ́ːrdər]",
    "pos": "n.",
    "meaning": "살인 v. 살해하다",
    "tip": "살해하다 그리고 난 후 부하에게 \"땅에 묻어!\"",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 21
   },
   {
    "day": 13,
    "word": "represent",
    "pron": "[rèprizént]",
    "pos": "v.",
    "meaning": "¹ 나타내다 ² 대표하다",
    "tip": "미스코리아가 이쁘리, 잰(재)는 한국의 미를 나타내다, 대표하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "representative",
      "pos": "",
      "meaning": "대표자; 대표하는"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 22
   },
   {
    "day": 13,
    "word": "laundry",
    "pron": "[lɔ́ːndri]",
    "pos": "n.",
    "meaning": "세탁물, 세탁",
    "tip": "빨고 또 빨아도 계속 쌓여 넌더리나는 세탁물",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 23
   },
   {
    "day": 13,
    "word": "eventually",
    "pron": "[ivéntʃuəli]",
    "pos": "ad.",
    "meaning": "결국, 드디어",
    "tip": "기상청에서 매번 추울 것이란 예보가 틀리다가 결국, 드디어 이벤(이번엔) 추워리.",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "eventual",
      "pos": "",
      "meaning": "궁극적인, 최종적인"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 24
   },
   {
    "day": 13,
    "word": "resent",
    "pron": "[rizént]",
    "pos": "v.",
    "meaning": "분개하다",
    "tip": "\"이젠 못 참아\" 하고 침을 투! 뱉으며 분개하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 25
   },
   {
    "day": 13,
    "word": "devote",
    "pron": "[divóut]",
    "pos": "v.",
    "meaning": "헌신하다, (노력·시간 등을) 쏟다",
    "tip": "배의 엔진이 고장 나자 뒤로 가서 보트를 밀어줄 정도로 자신을 헌신하다, (노력·시간 등을) 쏟다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 26
   },
   {
    "day": 13,
    "word": "guilty",
    "pron": "[gílti]",
    "pos": "a.",
    "meaning": "유죄의, 죄책감이 드는",
    "tip": "사람을 차로 치고 길로 튀어 유죄의, 죄책감이 드는",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 27
   },
   {
    "day": 13,
    "word": "fee",
    "pron": "[fiː]",
    "pos": "n.",
    "meaning": "요금, 수수료",
    "tip": "내 피 같은 돈이 요금, 수수료로 다 빠져나가네!",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 28
   },
   {
    "day": 13,
    "word": "suspicious",
    "pron": "[səspíʃəs]",
    "pos": "a.",
    "meaning": "의심스러운",
    "tip": "\"범인이 담배를 서서 피셨수?\" 하며 범죄 현장의 담배꽁초가 의심스러운",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "suspect",
      "pos": "",
      "meaning": "의심하다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 29
   },
   {
    "day": 13,
    "word": "conduct",
    "pron": "[kəndʌ́kt]",
    "pos": "v.",
    "meaning": "¹ 행동하다 n. 행동 ² v. 지도하다",
    "tip": "선생님이 큰 덕이 있는 행동하다, 큰 덕으로 지도하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 30
   }
  ]
 },
 {
  "day": 14,
  "title": "14강",
  "words": [
   {
    "day": 14,
    "word": "gain",
    "pron": "[gein]",
    "pos": "v.",
    "meaning": "얻다 n. 이익",
    "tip": "비싼 개가 집 in(안으로) 들어와 개를 얻다, 즉 이익",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 1
   },
   {
    "day": 14,
    "word": "faith",
    "pron": "[feiθ]",
    "pos": "n.",
    "meaning": "신념, 믿음",
    "tip": "이 패거리에는 있수. 서로에 대한 신념, 믿음이",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "faithful",
      "pos": "",
      "meaning": "충실한 (-ful: 형용사형 어미)"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 2
   },
   {
    "day": 14,
    "word": "eel",
    "pron": "[iːl]",
    "pos": "n.",
    "meaning": "뱀장어",
    "tip": "1(일)자처럼 긴 뱀장어",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 3
   },
   {
    "day": 14,
    "word": "heavily",
    "pron": "[hévili]",
    "pos": "ad.",
    "meaning": "몹시, 심하게",
    "tip": "내 동생은 뚱뚱해서 몹시, 심하게 heavy리(무거울리).",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 4
   },
   {
    "day": 14,
    "word": "apply",
    "pron": "[əplái]",
    "pos": "v.",
    "meaning": "적용하다, 적용되다",
    "tip": "\"방정식을 적용해서 어, 문제를 풀라이!\" 즉, 방정식을 적용하다, 적용되다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 5
   },
   {
    "day": 14,
    "word": "principle",
    "pron": "[prínsəpl]",
    "pos": "n.",
    "meaning": "원리, 원칙",
    "tip": "\"콩 심은 데 콩 나고 팥 심은 데 팥 난다.\" 즉, 뿌린 씨의 풀이 난다는 원리, 원칙",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 6
   },
   {
    "day": 14,
    "word": "woodpecker",
    "pron": "[wúdpèkər]",
    "pos": "n.",
    "meaning": "딱따구리",
    "tip": "wood(나무)를 팩! 팩! 쪼는 딱따구리",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 7
   },
   {
    "day": 14,
    "word": "section",
    "pron": "[sékʃən]",
    "pos": "n.",
    "meaning": "(나누어진) 한 부분, 부문",
    "tip": "수박이 셋으로 션(시원)하게 나누어진 한 부분",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 8
   },
   {
    "day": 14,
    "word": "handkerchief",
    "pron": "[hǽŋkərtʃif]",
    "pos": "n.",
    "meaning": "손수건",
    "tip": "행! 하고 코를 치이~프 소리를 내며 풀 때 쓰는 손수건",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 9
   },
   {
    "day": 14,
    "word": "contrary",
    "pron": "[kάntreri]",
    "pos": "a.",
    "meaning": "반대의 n. 정반대",
    "tip": "자동차 핸들을 큰(크게) 틀어리! 반대의 방향으로",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 10
   },
   {
    "day": 14,
    "word": "fundamental",
    "pron": "[fʌ̀ndəméntl]",
    "pos": "a.",
    "meaning": "기본적인, 핵심적인",
    "tip": "집을 짓기 위해 땅을 판다, 그리고 철근으로 맨 틀을 만든다, 이것이 기본적인, 핵심적인 작업",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "fundamentally",
      "pos": "",
      "meaning": "기본적으로, 근본적으로"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 11
   },
   {
    "day": 14,
    "word": "beverage",
    "pron": "[bévəridʒ]",
    "pos": "n.",
    "meaning": "음료, 마실 것",
    "tip": "탄산 음료를 너무 많이 마시면 배를 버리지!",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 12
   },
   {
    "day": 14,
    "word": "dramatic",
    "pron": "[drəmǽtik]",
    "pos": "a.",
    "meaning": "극적인",
    "tip": "drama(드라마) 같은, 즉 극적인",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 13
   },
   {
    "day": 14,
    "word": "translate",
    "pron": "[trænsléit]",
    "pos": "v.",
    "meaning": "번역하다, 통역하다",
    "tip": "이쪽 언어에서 저쪽 언어로 trans(across: 가로질러) 쏠래!(이트), 즉 번역하다, 통역하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "translation",
      "pos": "",
      "meaning": "번역, 통역"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 14
   },
   {
    "day": 14,
    "word": "wrinkle",
    "pron": "[ríŋkl]",
    "pos": "n.",
    "meaning": "주름",
    "tip": "윙클(윙크를) 할 때 눈가에 생기는 주름",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 15
   },
   {
    "day": 14,
    "word": "burden",
    "pron": "[bɔ́ːrdn]",
    "pos": "n.",
    "meaning": "무거운 짐, 부담",
    "tip": "항아리에 물을 붜서 든(들고 있는) 무거운 짐, 부담",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 16
   },
   {
    "day": 14,
    "word": "emperor",
    "pron": "[émpərər]",
    "pos": "n.",
    "meaning": "황제",
    "tip": "앵! 소련에 끌려가 포로가 된 중국의 마지막 황제",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 17
   },
   {
    "day": 14,
    "word": "wander",
    "pron": "[wάndər]",
    "pos": "v.",
    "meaning": "헤매다, 떠돌아다니다",
    "tip": "전라남도 완도에 놀러갔다가 길을 잃어 헤매다, 떠돌아다니다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 18
   },
   {
    "day": 14,
    "word": "term",
    "pron": "[təːrm]",
    "pos": "n.",
    "meaning": "¹ 기간, 학기 ² 말, 용어",
    "tip": "\"Good morning, Tom.\" \"Good morning, Jane.\"은 1학년 1학기 때 처음 배우는 말, 용어",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 19
   },
   {
    "day": 14,
    "word": "hazard",
    "pron": "[hǽzərd]",
    "pos": "n.",
    "meaning": "위험 (요소)",
    "tip": "해가 져두(져도) 밤거리는 도둑과 강도로 위험",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 20
   },
   {
    "day": 14,
    "word": "analyze",
    "pron": "[ǽnəlàiz]",
    "pos": "v.",
    "meaning": "분석하다",
    "tip": "임신한 아내가 애 날 나이를 계산하며 분석하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "analysis",
      "pos": "",
      "meaning": "분석"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 21
   },
   {
    "day": 14,
    "word": "ware",
    "pron": "[wɛər]",
    "pos": "n.",
    "meaning": "제품, 상품",
    "tip": "하드웨어(hardware), 소프트웨어(software)에서 ware는 제품, 상품",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 22
   },
   {
    "day": 14,
    "word": "gull",
    "pron": "[gʌl]",
    "pos": "n.",
    "meaning": "갈매기",
    "tip": "꺼~얼, 꺼~얼 하고 우는 갈매기",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 23
   },
   {
    "day": 14,
    "word": "ascend",
    "pron": "[əsénd]",
    "pos": "v.",
    "meaning": "올라가다, 오르다",
    "tip": "굴뚝에서 연기가 어! 센다 그래서 하늘로 올라가다, 오르다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 24
   },
   {
    "day": 14,
    "word": "descend",
    "pron": "[disénd]",
    "pos": "v.",
    "meaning": "내려가다, 내려오다",
    "tip": "열기구 풍선의 뒤가 센다. 그래서 땅으로 내려가다, 내려오다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 25
   },
   {
    "day": 14,
    "word": "debt",
    "pron": "[det]",
    "pos": "n.",
    "meaning": "빚, 채무",
    "tip": "大(크게) 투자하기 위해 은행에서 얻은 빚, 채무",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 26
   },
   {
    "day": 14,
    "word": "trait",
    "pron": "[treit]",
    "pos": "n.",
    "meaning": "특성, 특징",
    "tip": "틀에 박혀 이트(있는) 특성, 특징",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 27
   },
   {
    "day": 14,
    "word": "welfare",
    "pron": "[wélfɛ̀ər]",
    "pos": "n.",
    "meaning": "복지 a. 복지의",
    "tip": "스웨덴 국민들은 well(잘) 사는 패어(패거리야), 즉 복지, 복지의 국민 패거리",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 28
   },
   {
    "day": 14,
    "word": "identity",
    "pron": "[aidéntəti]",
    "pos": "n.",
    "meaning": "¹ 신원, 정체 ² 일치, 동일함",
    "tip": "죽은 아이에게 댄(대본) 티(셔츠)가 같다, 즉 죽은 아이와 실종된 아이의 신원, 정체가 일치, 동일함",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "identify",
      "pos": "",
      "meaning": "1. (신원·정체 등을) 확인하다, 밝히다 2. 동일시하다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 29
   }
  ]
 },
 {
  "day": 15,
  "title": "15강",
  "words": [
   {
    "day": 15,
    "word": "register",
    "pron": "[rédʒistər]",
    "pos": "v.",
    "meaning": "등록하다",
    "tip": "지원서를 내지, 신인 스타 오디션에. 즉, 등록하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 1
   },
   {
    "day": 15,
    "word": "sole",
    "pron": "[soul]",
    "pos": "a.",
    "meaning": "유일한, 단독의",
    "tip": "1. 우리나라에서 올림픽을 개최한 도시는 서울이 유일한, 단독의 2. solo(혼자의, 단독의), 즉 유일한, 단독의",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 2
   },
   {
    "day": 15,
    "word": "landscape",
    "pron": "[lǽndskeip]",
    "pos": "n.",
    "meaning": "풍경, 경치",
    "tip": "land(땅) 위에 수캐가 이쁘게 서 있는 풍경, 경치",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 3
   },
   {
    "day": 15,
    "word": "dimension",
    "pron": "[diménʃən]",
    "pos": "n.",
    "meaning": "치수, 차원, (pl.) 넓이, 규모",
    "tip": "뒤 마당에 맨션을 짓기 위해 측정하는 치수, 넓이, 차원",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 4
   },
   {
    "day": 15,
    "word": "polar",
    "pron": "[póulər]",
    "pos": "a.",
    "meaning": "극지방의, 남[북]극의",
    "tip": "너무 추워서 목까지 덮는 목폴라를 입어야 하는 극지방의",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 5
   },
   {
    "day": 15,
    "word": "issue",
    "pron": "[íʃuː]",
    "pos": "n.",
    "meaning": "¹ 문제, 논점 ² v. 발행하다, 발표하다",
    "tip": "1. 무슨 문제라도 있슈? 2. 현재 이슈가 되는 사건들을 실어 신문, 잡지를 발행하다, 발표하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 6
   },
   {
    "day": 15,
    "word": "agent",
    "pron": "[éidʒənt]",
    "pos": "n.",
    "meaning": "대리인, 행위자, (스포츠·연예 부문의) 에이전트",
    "tip": "A전투, B전투, C전투 등이 많아서 장군이 직접 나가지 않고 대신 보낸 대리인, 행위자",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "agency",
      "pos": "",
      "meaning": "대리점, 대행사"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 7
   },
   {
    "day": 15,
    "word": "article",
    "pron": "[ɑ́rtikl]",
    "pos": "n.",
    "meaning": "¹ 물품 ² (신문·잡지 등의) 기사",
    "tip": "초소형 반도체 발명과 같은 아(주) 티끌만한 물품에 대한 신문 기사",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 8
   },
   {
    "day": 15,
    "word": "compensation",
    "pron": "[kàmpənséiʃən]",
    "pos": "n.",
    "meaning": "보상, 배상",
    "tip": "\"돈으로 갚어!\"라고 say셔(말하셔)며, 즉 보상, 배상을 하셔!",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "compensate",
      "pos": "",
      "meaning": "보상하다 (-ate: 동사형 어미)"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 9
   },
   {
    "day": 15,
    "word": "upset",
    "pron": "[ʌpsét] / [ʌ́pset]",
    "pos": "a. v.",
    "meaning": "¹ a. 화가 난, 속상한 v. 화나게 하다 ² v. 뒤엎다 n. 전복 (upset-upset-upset)",
    "tip": "up(위로) 내 부하였던 셋을 승진시켜 직급을 뒤엎다, 그래서 화가 난, 속상한",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 10
   },
   {
    "day": 15,
    "word": "poisonous",
    "pron": "[póizənəs]",
    "pos": "a.",
    "meaning": "유독한, 독이 있는",
    "tip": "몰래 독을 보이지 않게 넣수, 즉 독을 넣어 유독한, 독이 있는",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "poison",
      "pos": "",
      "meaning": "독"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 11
   },
   {
    "day": 15,
    "word": "arrest",
    "pron": "[ərést]",
    "pos": "v.",
    "meaning": "체포하다 n. 체포",
    "tip": "해경의 어뢰에 맞고 항복한 해적들을 체포하다, 체포",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 12
   },
   {
    "day": 15,
    "word": "raw",
    "pron": "[rɔː]",
    "pos": "a.",
    "meaning": "가공하지 않은, 날것의",
    "tip": "원유와 같이 상품 가치가 low(낮은) 단계의, 즉 가공하지 않은, 날것의",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 13
   },
   {
    "day": 15,
    "word": "absorbing",
    "pron": "[əbsɔ́rbiŋ]",
    "pos": "a.",
    "meaning": "마음을 빼앗는, 몰입하게 만드는",
    "tip": "업! 서빙하는 예쁜 여자가 마음을 빼앗는, 몰입하게 만드는",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "absorb",
      "pos": "",
      "meaning": "흡수하다, 열중시키다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 14
   },
   {
    "day": 15,
    "word": "bind",
    "pron": "[baind]",
    "pos": "v.",
    "meaning": "묶다, 매다 (bind-bound-bound)",
    "tip": "바인더(binder)로 서류들을 한데 묶다, 매다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 15
   },
   {
    "day": 15,
    "word": "negotiate",
    "pron": "[nigóuʃièit]",
    "pos": "v.",
    "meaning": "협상하다, 교섭하다",
    "tip": "8:2로 나누는데 \"니 것이 eight(8)이라고? 내 것이 eight(8)이야\"라고 말하며 협상하다, 교섭하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "negotiation",
      "pos": "",
      "meaning": "협상, 교섭"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 16
   },
   {
    "day": 15,
    "word": "emerge",
    "pron": "[imɔ́rdʒ]",
    "pos": "v.",
    "meaning": "(물속·어둠 속 등에서) 나오다, 나타나다",
    "tip": "\"이게 뭐지?\" 무언가가 물속에서 나오다, 나타나다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 17
   },
   {
    "day": 15,
    "word": "claim",
    "pron": "[kleim]",
    "pos": "v.",
    "meaning": "(당연한 권리로서) 요구하다, 주장하다",
    "tip": "내 주차구역에 다른 차가 이름만 남겨두고 주차를 해두어 클(크게) name(이름)을 부르면서 나의 주차(권리)를 요구하다, 주장하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 18
   },
   {
    "day": 15,
    "word": "vapor",
    "pron": "[véipər]",
    "pos": "n.",
    "meaning": "증기",
    "tip": "증기선 배가 퍼내는(내뿜는) 증기",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 19
   },
   {
    "day": 15,
    "word": "evaporate",
    "pron": "[ivǽpərèit]",
    "pos": "v.",
    "meaning": "증발시키다, 증발하다",
    "tip": "1. 증기선 e(밖으로) 배가 증기를 퍼레이트(퍼내다), 즉 증발시키다, 증발하다 2. e(out) + vapor(증기) + ate(동사형 어미): 증기를 밖으로 내보내다, 즉 증발시키다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 20
   },
   {
    "day": 15,
    "word": "grab",
    "pron": "[græb]",
    "pos": "v.",
    "meaning": "붙들다, 움켜쥐다",
    "tip": "그 wrap(랩)이 배달음식이 흐르지 않게 꽉 붙들다, 움켜쥐다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 21
   },
   {
    "day": 15,
    "word": "last",
    "pron": "[@læst]",
    "pos": "a. v.",
    "meaning": "1 a. 마지막의 2 a. 지난 3 v. 지속되다, 계속되다",
    "tip": "last(마지막)까지 지속되다, 계속되다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 22
   },
   {
    "day": 15,
    "word": "lord",
    "pron": "[lɔːrd]",
    "pos": "n.",
    "meaning": "지배자, 주인",
    "tip": "자기보다 계급이 lower(더 낮은) 부하를 밑에 두고 있는 지배자, 주인",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 23
   },
   {
    "day": 15,
    "word": "found",
    "pron": "[faund]",
    "pos": "v.",
    "meaning": "1 find의 과거·과거분사 형태 2 설립하다, 창립하다 (found-founded-founded)",
    "tip": "영단어 암기법을 found(발견했다). 그래서 경선식에듀 회사를 설립하다, 창립하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 24
   },
   {
    "day": 15,
    "word": "asset",
    "pron": "[ǽset]",
    "pos": "n.",
    "meaning": "재산, 자산",
    "tip": "1. 옛말에 자식이 재산이란 말이 있듯이 애 셋이 재산 2. 증권 회사인 '미래에셋'은 미래의 재산이란 뜻",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 25
   },
   {
    "day": 15,
    "word": "enterprise",
    "pron": "[éntərpràiz]",
    "pos": "n.",
    "meaning": "기업, 회사",
    "tip": "기업 공모전 1등에게 주는 그 기업, 회사에 enter(들어가) 취업할 수 있는 prize(상)",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 26
   },
   {
    "day": 15,
    "word": "destiny",
    "pron": "[déstəni]",
    "pos": "n.",
    "meaning": "운명",
    "tip": "점쟁이가 \"너는 미래의 대스타니, 그것이 너의 운명\"",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 27
   },
   {
    "day": 15,
    "word": "contract",
    "pron": "[@kɑ́ntrækt]",
    "pos": "n. v.",
    "meaning": "n. 계약 v. 계약하다",
    "tip": "\"권투시합을 act!(하겠습니다!)\"라고 싸인하며 계약, 계약하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 28
   },
   {
    "day": 15,
    "word": "weird",
    "pron": "[wiərd]",
    "pos": "a.",
    "meaning": "이상한, 기묘한",
    "tip": "대낮인데도 위의 하늘이 어두워지는, 즉 이상한, 기묘한",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 29
   },
   {
    "day": 15,
    "word": "prompt",
    "pron": "[@prɑmpt]",
    "pos": "a.",
    "meaning": "신속한",
    "tip": "지금 from(부터)라도 빨리 해야지 하며 시험을 하루 남기고 하는 신속한 시험공부",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 30
   }
  ]
 },
 {
  "day": 16,
  "title": "16강",
  "words": [
   {
    "day": 16,
    "word": "launch",
    "pron": "[lɔːntʃ]",
    "pos": "v.",
    "meaning": "¹ (로켓을) 쏘아 올리다 ² (사업 등을) 시작하다",
    "tip": "long(길게) 치이~ 로켓을 쏘아 올리다, 그렇게 전쟁을 시작하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 1
   },
   {
    "day": 16,
    "word": "shift",
    "pron": "[ʃift]",
    "pos": "v.",
    "meaning": "이동시키다, 바꾸다 n. 이동",
    "tip": "컴퓨터의 쉬프트 키로 커서를 이동시키다, 소문자를 대문자로 바꾸다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 2
   },
   {
    "day": 16,
    "word": "disturb",
    "pron": "[distɔ́rb]",
    "pos": "v.",
    "meaning": "방해하다",
    "tip": "보디가드가 뒤에 있는 스타에게 접근하면 \"不(부)(안 돼!)\" 하며 접근을 방해하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 3
   },
   {
    "day": 16,
    "word": "pile",
    "pron": "[pail]",
    "pos": "v.",
    "meaning": "쌓다, 쌓아 올리다 n. 쌓아올린 더미",
    "tip": "서류 파일을 책상 위에 쌓다, 쌓아올린 더미",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 4
   },
   {
    "day": 16,
    "word": "context",
    "pron": "[kántekst] / [kɔ́ntekst]",
    "pos": "n.",
    "meaning": "¹ 문맥 ² 전후 사정, 배경",
    "tip": "con(함께) text(글)를 앞뒤에서 이어주는 문맥, 전후 사정, 배경",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 5
   },
   {
    "day": 16,
    "word": "entry",
    "pron": "[éntri]",
    "pos": "n.",
    "meaning": "¹ 입장 ² 참가",
    "tip": "미술대회장으로 enter(들어가다), 즉 입장, 참가",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 6
   },
   {
    "day": 16,
    "word": "bud",
    "pron": "[bʌd]",
    "pos": "n.",
    "meaning": "싹 v. 싹을 틔우다",
    "tip": "버드나무의 싹, 싹을 틔우다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 7
   },
   {
    "day": 16,
    "word": "warrant",
    "pron": "[wɔ́rənt]",
    "pos": "n.",
    "meaning": "보증 v. 보증하다",
    "tip": "청소년이 휴대폰을 살 때는 어른 two(2)명이 보증해야 한다. 즉, 보증, 보증하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 8
   },
   {
    "day": 16,
    "word": "operate",
    "pron": "[ápərèit] / [ɔ́pərèit]",
    "pos": "v.",
    "meaning": "¹ 수술하다 ² (기계·장치 등을) 조종하다",
    "tip": "의사가 \"여기 아퍼? 에잇!\" 하고 로봇 수술 장비를 조종하다, 수술하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "operation",
      "pos": "",
      "meaning": "수술, 조종"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 9
   },
   {
    "day": 16,
    "word": "cooperation",
    "pron": "[kouàpəréiʃən] / [kouɔ̀pəréiʃən]",
    "pos": "n.",
    "meaning": "협력, 협동",
    "tip": "co(함께) operation(수술, 조종)하는 것, 즉 협력, 협동",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "cooperate",
      "pos": "",
      "meaning": "협력하다, 협동하다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 10
   },
   {
    "day": 16,
    "word": "terrific",
    "pron": "[tərífik]",
    "pos": "a.",
    "meaning": "굉장한, 무시무시한, 아주 멋진",
    "tip": "털이 픽! 설 정도로 굉장한, 무시무시한",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 11
   },
   {
    "day": 16,
    "word": "compromise",
    "pron": "[kámprəmàiz] / [kɔ́mprəmàiz]",
    "pos": "n.",
    "meaning": "타협 v. 타협하다",
    "tip": "1. 큰 프로 선수를 my(나의) 구단에 주시면 우리의 4번 타자를 드릴게요. 하고 서로 타협, 타협하다 2. com(함께) 침략하지 않기로 promise(약속하다), 즉 타협, 타협하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 12
   },
   {
    "day": 16,
    "word": "drip",
    "pron": "[drip]",
    "pos": "v.",
    "meaning": "(액체가) 뚝뚝 떨어지다 n. 물방울",
    "tip": "두 개의 잎사귀에서 이슬 물방울이 뚝뚝 떨어지다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 13
   },
   {
    "day": 16,
    "word": "species",
    "pron": "[spíːʃiːz]",
    "pos": "n.",
    "meaning": "(분류상의) 종, 종류",
    "tip": "숲이 여러 종류의 씨s(씨앗들)로 가득, 즉 여러 씨앗들의 종, 종류",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 14
   },
   {
    "day": 16,
    "word": "reveal",
    "pron": "[rivíːl]",
    "pos": "v.",
    "meaning": "밝히다, 폭로하다",
    "tip": "선생님께 re(뒤로) 가서 빌면서 자신의 죄를 밝히다, 폭로하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 15
   },
   {
    "day": 16,
    "word": "approximate",
    "pron": "[əpráksimit] / [əprɔ́ksimit]",
    "pos": "a.",
    "meaning": "~에 근접한, 대략적인",
    "tip": "물에 빠진 사람이 어프~ 어프~ 하며 수영하여 낚시꾼이 내민 낚시대 밑까지 거의 근접한",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "approximately",
      "pos": "",
      "meaning": "대략, 거의"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 16
   },
   {
    "day": 16,
    "word": "core",
    "pron": "[kɔːr]",
    "pos": "n.",
    "meaning": "중심, 핵심 a. 중심적인, 핵심적인",
    "tip": "코는 얼굴의 중심, 핵심",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 17
   },
   {
    "day": 16,
    "word": "blossom",
    "pron": "[blásəm] / [blɔ́səm]",
    "pos": "n.",
    "meaning": "꽃 v. 꽃을 피우다",
    "tip": "울긋불긋 산에 불났음, 즉 온 산에 핀 빨간 꽃, 꽃을 피우다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 18
   },
   {
    "day": 16,
    "word": "perceive",
    "pron": "[pərsíːv]",
    "pos": "v.",
    "meaning": "감지하다, 인지하다",
    "tip": "개가 내 팔을 씹으면 '아얏' 하며 아픔을 감지하다, 인지하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "perception",
      "pos": "",
      "meaning": "감지, 인지"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 19
   },
   {
    "day": 16,
    "word": "victim",
    "pron": "[víktim]",
    "pos": "n.",
    "meaning": "희생자, 피해자",
    "tip": "예선전에서 브라질 축구팀과 같은 big team(큰 팀)을 만난 희생자, 피해자",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 20
   },
   {
    "day": 16,
    "word": "frustrate",
    "pron": "[frʌ́streit]",
    "pos": "v.",
    "meaning": "좌절시키다",
    "tip": "스트레이트파마를 하고 나타난 여자친구에게 \"풀어, 스트레이트! 더 못생겨 보여!\"라고 여자친구를 좌절시키다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "frustrated",
      "pos": "",
      "meaning": "좌절한 (-ed: 형용사형 어미)"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 21
   },
   {
    "day": 16,
    "word": "regard",
    "pron": "[rigɑ́rd]",
    "pos": "v.",
    "meaning": "¹ v. 주목하다, 주의하다 ² n. 관계 v. 관계하다 ³ v. ~으로 여기다",
    "tip": "re(뒤에서) 보디가드처럼 앞사람을 주목하다, 주의하다. 앞사람과의 관계를 보디가드로 여기다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 22
   },
   {
    "day": 16,
    "word": "regarding",
    "pron": "[rigɑ́rdiŋ]",
    "pos": "prep.",
    "meaning": "~에 관하여",
    "tip": "regard(관계하다) + ing: ~에 관계하여, 즉 ~에 관하여",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 23
   },
   {
    "day": 16,
    "word": "regardless of",
    "pron": "",
    "pos": "",
    "meaning": "~에 관계없이",
    "tip": "regard(관계) + less(~이 없는) + of(~에 관하여): ~에 관하여 관계없이",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 24
   },
   {
    "day": 16,
    "word": "in regard to",
    "pron": "",
    "pos": "",
    "meaning": "~에 관하여",
    "tip": "직역하면 '~쪽으로의 regard(관계) 안에서', 즉 ~에 관하여",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 25
   },
   {
    "day": 16,
    "word": "regard A as B",
    "pron": "",
    "pos": "",
    "meaning": "A를 B로 여기다, 간주하다",
    "tip": "직역하면 A를 B로서 regard(~으로 여기다), 즉 A를 B로 여기다, 간주하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 26
   },
   {
    "day": 16,
    "word": "germ",
    "pron": "[dʒɔːrm]",
    "pos": "n.",
    "meaning": "세균",
    "tip": "점처럼 작은 세균",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 27
   },
   {
    "day": 16,
    "word": "classify",
    "pron": "[klǽsəfài]",
    "pos": "v.",
    "meaning": "분류하다",
    "tip": "class(학급, 계급) + ify(동사형 어미): 학급별로 학생들을 분류하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 28
   },
   {
    "day": 16,
    "word": "ash",
    "pron": "[æʃ]",
    "pos": "n.",
    "meaning": "재, 화산재, 담뱃재",
    "tip": "담뱃재, 화산재가 코에 들어가 애쉬!(에취!)",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 29
   },
   {
    "day": 16,
    "word": "cease",
    "pron": "[siːs]",
    "pos": "v.",
    "meaning": "중지하다, 중단되다",
    "tip": "청소를 중지하다, 그리고 손을 씻수",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 30
   }
  ]
 },
 {
  "day": 17,
  "title": "17강",
  "words": [
   {
    "day": 17,
    "word": "rural",
    "pron": "[rúərəl]",
    "pos": "a.",
    "meaning": "시골의",
    "tip": "벼가 익어서 누럴 시골의 풍경",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 1
   },
   {
    "day": 17,
    "word": "arms",
    "pron": "[ɑːrmz]",
    "pos": "n.",
    "meaning": "무기, 병기",
    "tip": "arms(팔들)을 여럿이 휘두르면 무기, 병기",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 2
   },
   {
    "day": 17,
    "word": "personality",
    "pron": "[pə̀ːrsənǽləti]",
    "pos": "n.",
    "meaning": "개성, 성격",
    "tip": "person(사람)마다 낼리(내다), 자신만의 성격 티를. 즉, 개성, 성격",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 3
   },
   {
    "day": 17,
    "word": "statistics",
    "pron": "[stətístiks]",
    "pos": "n.",
    "meaning": "통계, 통계학",
    "tip": "막대그래프 통계에서 영화, 가수 스타들이 일반인에 비해 소유재산 등이 튀수(튀었수), 틱!(스) 하고",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "statistic",
      "pos": "",
      "meaning": "통계치, 통계량"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 4
   },
   {
    "day": 17,
    "word": "ordinary",
    "pron": "[ɔ́ːrdənèri] [ɔ́ːdənəri]",
    "pos": "a.",
    "meaning": "보통의, 평범한",
    "tip": "입학원서를 어디 넣으리? 이런 보통의, 평범한 점수를 가지고",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 5
   },
   {
    "day": 17,
    "word": "extraordinary",
    "pron": "[ikstrɔ́ːrdənèri] [ikstrɔ́ːdənəri]",
    "pos": "a.",
    "meaning": "보통이 아닌, 특이한",
    "tip": "extra(outside) + ordinary(보통의): 보통이 아닌, 특이한",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 6
   },
   {
    "day": 17,
    "word": "meadow",
    "pron": "[médou]",
    "pos": "n.",
    "meaning": "목초지, 초원",
    "tip": "염소를 풀 뜯어 먹게 매뒤! 목초지, 초원에",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 7
   },
   {
    "day": 17,
    "word": "dominant",
    "pron": "[dɑ́minənt] [dɔ́minənt]",
    "pos": "a.",
    "meaning": "우세한, 지배적인",
    "tip": "국민들이 대통령 후보로 다 미는 투로 우세한, 지배적인",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "dominate",
      "pos": "",
      "meaning": "지배하다, 우세하다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 8
   },
   {
    "day": 17,
    "word": "jellyfish",
    "pron": "[dʒélifìʃ]",
    "pos": "n.",
    "meaning": "해파리",
    "tip": "jelly(젤리)와 같이 흐물흐물한 fish(물고기), 즉 해파리",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 9
   },
   {
    "day": 17,
    "word": "observe",
    "pron": "[əbzə́ːrv]",
    "pos": "v.",
    "meaning": "관찰하다",
    "tip": "어부가 고기를 잡으려고 낚시찌의 움직임을 관찰하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "observation",
      "pos": "",
      "meaning": "관찰"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 10
   },
   {
    "day": 17,
    "word": "drought",
    "pron": "[draut]",
    "pos": "n.",
    "meaning": "가뭄",
    "tip": "가뭄에 들판이 다 말라 아웃! 당한",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 11
   },
   {
    "day": 17,
    "word": "emphasize",
    "pron": "[émfəsàiz]",
    "pos": "v.",
    "meaning": "강조하다",
    "tip": "강사가 앰프를 사이즈가 큰 것으로 놓아 소리를 키워 강조하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "emphasis",
      "pos": "",
      "meaning": "강조"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 12
   },
   {
    "day": 17,
    "word": "preserve",
    "pron": "[prizə́ːrv]",
    "pos": "v.",
    "meaning": "보존하다, 유지하다",
    "tip": "수학 풀이집의 중요한 페이지를 접어서 찾아보기 쉽게 보존하다, 유지하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 13
   },
   {
    "day": 17,
    "word": "tongue",
    "pron": "[tʌŋ]",
    "pos": "n.",
    "meaning": "¹ 혀 ² 말, 언어",
    "tip": "입속에서 목탁소리처럼 텅! 텅! 소리를 만드는 혀, 그리고 tongue(혀)로 하는 말, 언어",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 14
   },
   {
    "day": 17,
    "word": "estate",
    "pron": "[istéit]",
    "pos": "n.",
    "meaning": "재산, 부동산",
    "tip": "한 갑부가 미국 지도를 가리키며 \"이 스테이트(주)에 있는 땅이 모두 우리 재산, 부동산이야.\"",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 15
   },
   {
    "day": 17,
    "word": "maintain",
    "pron": "[meintéin]",
    "pos": "v.",
    "meaning": "¹ 유지하다 ² 주장하다",
    "tip": "줄에 매인 깡패 떼를 감옥 in(안에) 넣고 평생 유지해야 한다고 주장하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 16
   },
   {
    "day": 17,
    "word": "attorney",
    "pron": "[ətə́ːrni]",
    "pos": "n.",
    "meaning": "변호사",
    "tip": "친구가 실수로 때린 건데 \"그러면 좀 어떠니?\"라며 변호하는 변호사",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 17
   },
   {
    "day": 17,
    "word": "merely",
    "pron": "[míərli]",
    "pos": "ad.",
    "meaning": "단지, 그저",
    "tip": "우리 부장님이 아무 이유 없이 단지, 그저 미울리(밉다)",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 18
   },
   {
    "day": 17,
    "word": "significant",
    "pron": "[siɡnífikənt]",
    "pos": "a.",
    "meaning": "중요한",
    "tip": "빚보증에 함부로 싸인을 하면 안 되듯이 sign(싸인)은 중요한",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 19
   },
   {
    "day": 17,
    "word": "delete",
    "pron": "[dilíːt]",
    "pos": "v.",
    "meaning": "삭제하다, 지우다",
    "tip": "컴퓨터 자판의 delete로 글자를 삭제하다, 지우다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 20
   },
   {
    "day": 17,
    "word": "obstacle",
    "pron": "[ɑ́bstəkl] [ɔ́bstəkl]",
    "pos": "n.",
    "meaning": "방해, 장애물",
    "tip": "축구에서 앞서 들어오는 태클은 공격의 방해, 장애물",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 21
   },
   {
    "day": 17,
    "word": "split",
    "pron": "[split]",
    "pos": "v.",
    "meaning": "나뉘다, 쪼개다 (split-split-split)",
    "tip": "나무젓가락이 쑥 풀리어 two(2)개가 되다, 즉 나뉘다, 쪼개다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 22
   },
   {
    "day": 17,
    "word": "mammal",
    "pron": "[mǽməl]",
    "pos": "n.",
    "meaning": "포유동물",
    "tip": "mam을(엄마를) 따라다니며 젖을 먹는 포유동물",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 23
   },
   {
    "day": 17,
    "word": "consequence",
    "pron": "[kɑ́nsəkwèns] [kɔ́nsikwəns]",
    "pos": "n.",
    "meaning": "결과",
    "tip": "작은 씨를 심은 결과 열매가 작고, 큰 씨를 심은 결과 열매가 컸수. 즉, 결과",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "consequently",
      "pos": "",
      "meaning": "결과적으로, 따라서"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 24
   },
   {
    "day": 17,
    "word": "distinguish",
    "pron": "[distíŋɡwiʃ]",
    "pos": "v.",
    "meaning": "구별하다",
    "tip": "123층의 롯데타워같이 This(이것만) 높이 팅기쉬(튕겨져) 나와 다른 건물과 쉽게 구별하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 25
   },
   {
    "day": 17,
    "word": "distinction",
    "pron": "[distíŋkʃən]",
    "pos": "n.",
    "meaning": "구별, 차이",
    "tip": "123층의 롯데타워같이 This(이것만) 팅! 하고 크션(크셔), 즉 다른 작은 것들과의 구별, 차이",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "distinct",
      "pos": "",
      "meaning": "구별되는, 뚜렷한"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 26
   },
   {
    "day": 17,
    "word": "means",
    "pron": "[miːnz]",
    "pos": "n.",
    "meaning": "수단, 방법",
    "tip": "미인s(미인들)이 그 미를 수단, 방법으로 해서 배우나 모델 등을 한다.",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 27
   },
   {
    "day": 17,
    "word": "by means of",
    "pron": "",
    "pos": "",
    "meaning": "~에 의하여",
    "tip": "by(~에 의해) + means(수단, 방법) + of(~의): ~의 수단에 의해, 즉 ~에 의하여",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 28
   },
   {
    "day": 17,
    "word": "by all means",
    "pron": "",
    "pos": "",
    "meaning": "반드시",
    "tip": "by(~에 의해) + all(모든) + means(수단, 방법): 모든 수단에 의해, 즉 반드시",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 29
   },
   {
    "day": 17,
    "word": "by no means",
    "pron": "",
    "pos": "",
    "meaning": "결코 ~않다",
    "tip": "by(~에 의해) + no(어떠한 ~도 않다) + means(수단, 방법): 어떠한 수단에 의해서도 ~않다, 즉 결코 ~않다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 30
   }
  ]
 },
 {
  "day": 18,
  "title": "18강",
  "words": [
   {
    "day": 18,
    "word": "bother",
    "pron": "[bɑ́ðər] [bɔ́ðər]",
    "pos": "v.",
    "meaning": "괴롭히다, 신경 쓰이게 하다",
    "tip": "\"술 받어!\" 하며 직장 상사가 억지로 마시게 하여 괴롭히다, 신경 쓰이게 하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 1
   },
   {
    "day": 18,
    "word": "familiar",
    "pron": "[fəmíljər]",
    "pos": "a.",
    "meaning": "친근한, 잘 알고 있는",
    "tip": "우리는 친근한, 서로 잘 알고 있는 family여(가족이여).",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 2
   },
   {
    "day": 18,
    "word": "comprise",
    "pron": "[kəmpráiz]",
    "pos": "v.",
    "meaning": "¹ 포함하다 ² ~으로 구성되다, 구성하다",
    "tip": "컴(컴퓨터)가 prize(상품)에 포함되다, 구성되다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 3
   },
   {
    "day": 18,
    "word": "loaf",
    "pron": "[louf]",
    "pos": "n.",
    "meaning": "(빵) 한 덩어리",
    "tip": "덫으로 쓰려고 로프(밧줄)에 매달아 놓은 빵 한 덩어리",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 4
   },
   {
    "day": 18,
    "word": "artificial",
    "pron": "[ɑ̀ːrtəfíʃəl]",
    "pos": "a.",
    "meaning": "인공의, 가짜의",
    "tip": "인공의 콘크리트 환경과 인공의 과자 등을 먹어서 아토피에 잘 걸리셔.",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 5
   },
   {
    "day": 18,
    "word": "naked",
    "pron": "[néikid]",
    "pos": "a.",
    "meaning": "나체의, 벌거벗은",
    "tip": "내의만 입은 kid(아이), 즉 나체의, 벌거벗은",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 6
   },
   {
    "day": 18,
    "word": "fascinate",
    "pron": "[fǽsənèit]",
    "pos": "v.",
    "meaning": "넋을 빼앗다, 매혹하다",
    "tip": "미녀가 내 넋을 뺏어나이트. 즉, 넋을 빼앗다, 매혹하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "fascinating",
      "pos": "",
      "meaning": "매혹적인 (-ing: 형용사형 어미 or 명사형 어미)"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 7
   },
   {
    "day": 18,
    "word": "grant",
    "pron": "[ɡrænt]",
    "pos": "v.",
    "meaning": "승인하다, 허가하다",
    "tip": "\"그랜!(그래) 그렇게 해\"라는 투로 승인하다, 허가하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "take it for granted (that)",
      "pos": "",
      "meaning": "~을 당연한 것으로 여기다(← 승인된 것으로 여기다)"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 8
   },
   {
    "day": 18,
    "word": "crosswalk",
    "pron": "[krɔ́ːswɔ̀ːk]",
    "pos": "n.",
    "meaning": "횡단보도",
    "tip": "도로를 cross(가로질러) walk(걷는) 횡단보도",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 9
   },
   {
    "day": 18,
    "word": "present",
    "pron": "n. a. [préznt] v. [prizént]",
    "pos": "",
    "meaning": "¹ n. 선물 ² a. 현재의 ³ a. 참석한 ⁴ v. 주다",
    "tip": "present(선물)을 누구에게 주는가? 현재의, 참석한 사람에게 주다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "presentation",
      "pos": "",
      "meaning": "프레젠테이션, 상영, 발표"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 10
   },
   {
    "day": 18,
    "word": "riddle",
    "pron": "[rídl]",
    "pos": "n.",
    "meaning": "수수께끼",
    "tip": "니들(너희들) 이거 알아? 수수께끼",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 11
   },
   {
    "day": 18,
    "word": "function",
    "pron": "[fʌ́ŋkʃən]",
    "pos": "n.",
    "meaning": "기능 v. (제대로) 기능하다",
    "tip": "펑! 터지며 시원하게 에어백이 제대로 기능하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 12
   },
   {
    "day": 18,
    "word": "qualify",
    "pron": "[kwɑ́ləfài] [kwɔ́ləfài]",
    "pos": "v.",
    "meaning": "자격을 주다, 자격을 얻다",
    "tip": "파이를 만드는 권리, 즉 제빵사 자격을 주다, 자격을 얻다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "qualification",
      "pos": "",
      "meaning": "자격, 자격증"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 13
   },
   {
    "day": 18,
    "word": "gaze",
    "pron": "[ɡeiz]",
    "pos": "v.",
    "meaning": "뚫어지게 보다, 응시하다",
    "tip": "\"개는 잊어!\"라고 해도 헤어진 사람의 사진을 뚫어지게 보다, 응시하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 14
   },
   {
    "day": 18,
    "word": "yell",
    "pron": "[jel]",
    "pos": "v.",
    "meaning": "소리치다, 고함치다 n. 소리침",
    "tip": "물에 빠진 옐(애를) 살려주세요! 하고 소리치다, 고함치다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 15
   },
   {
    "day": 18,
    "word": "wheat",
    "pron": "[hwiːt]",
    "pos": "n.",
    "meaning": "밀",
    "tip": "휫 불면 뿌옇게 흩어지는 밀가루",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 16
   },
   {
    "day": 18,
    "word": "adore",
    "pron": "[ədɔ́ːr]",
    "pos": "v.",
    "meaning": "숭배하다, 아주 좋아하다",
    "tip": "백성들이 아더(왕)을 숭배하다, 아주 좋아하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 17
   },
   {
    "day": 18,
    "word": "cheat",
    "pron": "[tʃiːt]",
    "pos": "v.",
    "meaning": "속이다 n. 속임수",
    "tip": "남자친구의 허풍에 \"칫! 거짓말\" 즉, 남친이 속이다, 속임수",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 18
   },
   {
    "day": 18,
    "word": "refer",
    "pron": "[rifə́ːr]",
    "pos": "v.",
    "meaning": "말하다, 언급하다",
    "tip": "무뚝뚝한 남편에게 \"나 이뻐? 이쁘면 이쁘다고 말 좀 해!\"라고 해서 이쁘다고 말하다, 언급하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 19
   },
   {
    "day": 18,
    "word": "conscience",
    "pron": "[kɑ́nʃəns] [kɔ́nʃəns]",
    "pos": "n.",
    "meaning": "양심",
    "tip": "출발 칸을 밟고 출발했다고 솔직히 밝히는 육상 선수의 양심",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 20
   },
   {
    "day": 18,
    "word": "dinosaur",
    "pron": "[dáinəsɔ̀ːr]",
    "pos": "n.",
    "meaning": "공룡",
    "tip": "die(죽어서) 땅속에 넣었소. 즉, 화석으로만 발견되는 공룡",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 21
   },
   {
    "day": 18,
    "word": "duty",
    "pron": "[djúːti]",
    "pos": "n.",
    "meaning": "의무, 업무",
    "tip": "둘이서 이거 다 해놔! 즉, 두 사람의 의무, 업무",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 22
   },
   {
    "day": 18,
    "word": "moral",
    "pron": "[mɔ́ːrəl]",
    "pos": "a.",
    "meaning": "도덕적인",
    "tip": "늙으신 母를(어머니를) 잘 돌보는 도덕적인 자식",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 23
   },
   {
    "day": 18,
    "word": "mechanical",
    "pron": "[məkǽnikəl]",
    "pos": "a.",
    "meaning": "기계의, 기계적인",
    "tip": "땅에서 뭐를 캐니 칼로? 칼 말고 땅을 뚫는 기계의 장치가 있어야 해!",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 24
   },
   {
    "day": 18,
    "word": "surgery",
    "pron": "[sə́ːrdʒəri]",
    "pos": "n.",
    "meaning": "수술",
    "tip": "피부를 썰 메스 주어리!(줘!) - 수술 장면",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 25
   },
   {
    "day": 18,
    "word": "candidate",
    "pron": "[kǽndidèit]",
    "pos": "n.",
    "meaning": "후보자, 지원자",
    "tip": "캔디와 데이트하려고 길게 줄 서 있는 후보자, 지원자",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 26
   },
   {
    "day": 18,
    "word": "policy",
    "pron": "[pɑ́ləsi] [pɔ́ləsi]",
    "pos": "n.",
    "meaning": "정책, 방침",
    "tip": "돈을 마련하기 위해 팔어, 하나의 시를. 그러한 나라의 정책, 방침",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 27
   },
   {
    "day": 18,
    "word": "crucial",
    "pron": "[krúːʃəl]",
    "pos": "a.",
    "meaning": "결정적인, 중대한",
    "tip": "\"무릎 꿇으셔!\"라고 경찰이 소리치며 범인에게 내민 결정적인, 중대한 증거",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 28
   },
   {
    "day": 18,
    "word": "proportion",
    "pron": "[prəpɔ́ːrʃən]",
    "pos": "n.",
    "meaning": "비율, 부분, 균형",
    "tip": "하인들에게 일을 몇 프로 했는지 비율에 맞춰 각각 쌀을 퍼션(퍼주셔).",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 29
   },
   {
    "day": 18,
    "word": "boundary",
    "pron": "[báundəri]",
    "pos": "n.",
    "meaning": "경계선, 경계",
    "tip": "공이 바운드되어 넘어가는 아웃 경계선",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 30
   }
  ]
 },
 {
  "day": 19,
  "title": "19강",
  "words": [
   {
    "day": 19,
    "word": "bruise",
    "pron": "[bruːz]",
    "pos": "n.",
    "meaning": "멍 v. 멍들게 하다",
    "tip": "멍이 든 곳을 호오~ 하고 브루즈(불어주)세요!",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 1
   },
   {
    "day": 19,
    "word": "mature",
    "pron": "[mətʃúər]",
    "pos": "a.",
    "meaning": "성숙한 v. 성숙하다",
    "tip": "아이들은 춥다고 하지만 \"뭐가 추워?\" 하며 잘 견디는 성숙한 어른",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 2
   },
   {
    "day": 19,
    "word": "urban",
    "pron": "[ɔ́ːrbən]",
    "pos": "a.",
    "meaning": "도시의",
    "tip": "비싼 주거환경 때문에 돈 얼마를 번 사람들만 모이는 도시의",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 3
   },
   {
    "day": 19,
    "word": "firm",
    "pron": "[fəːrm]",
    "pos": "a.",
    "meaning": "¹ 굳은, 단단한 ² 확실한, 확고한",
    "tip": "머리를 펌(파마)으로 변경하기로 마음이 확고한, 확실한. 펌으로 머리 모양이 그대로 굳은, 단단한",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 4
   },
   {
    "day": 19,
    "word": "oral",
    "pron": "[ɔ́ːrəl]",
    "pos": "a.",
    "meaning": "구두의, 입의",
    "tip": "oral-B 칫솔로 닦는 입의 내부",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 5
   },
   {
    "day": 19,
    "word": "capacity",
    "pron": "[kəpǽsəti]",
    "pos": "n.",
    "meaning": "¹ 능력 ² 용량, 수용력",
    "tip": "마라톤 선수가 커다란 폐 써티(썼지), 즉 폐의 용량이 커서 오래 달릴 수 있는 능력",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 6
   },
   {
    "day": 19,
    "word": "hesitation",
    "pron": "[hèzitéiʃən]",
    "pos": "n.",
    "meaning": "망설임, 주저",
    "tip": "계약을 해지하면 계약금을 떼이션(떼이서), 해지해? 말아? 망설임, 주저",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "hesitate",
      "pos": "",
      "meaning": "주저하다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 7
   },
   {
    "day": 19,
    "word": "twin",
    "pron": "[twin]",
    "pos": "n.",
    "meaning": "쌍둥이(중의 한 명)",
    "tip": "1. 2:1로 two(2)명이 싸우기 때문에 항상 win(이기는) 쌍둥이 2. 쌍둥이 마스코트를 가진 LG 트윈스(twins)",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 8
   },
   {
    "day": 19,
    "word": "drift",
    "pron": "[drift]",
    "pos": "v.",
    "meaning": "떠가다 n. 이동, 흐름",
    "tip": "스키장에 두 개의 리프트가 줄에 매달려 떠가다, 이동, 흐름",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 9
   },
   {
    "day": 19,
    "word": "currency",
    "pron": "[kɔ́ːrənsi]",
    "pos": "n.",
    "meaning": "통화, 화폐",
    "tip": "원시시대에는 커런(커다란) 과일의 씨가 통화, 화폐",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 10
   },
   {
    "day": 19,
    "word": "dedicate",
    "pron": "[dèdikéit]",
    "pos": "v.",
    "meaning": "헌신하다, 전념하다",
    "tip": "식구들을 먹여 살리기 위해 daddy(아빠)가 탄광에서 석탄을 케이트(캐다), 즉 식구들을 위해 헌신하다, 전념하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 11
   },
   {
    "day": 19,
    "word": "dip",
    "pron": "[dip]",
    "pos": "v.",
    "meaning": "담그다, 적시다",
    "tip": "빨래할 옷을 물에 deep(깊이) 담그다, 적시다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 12
   },
   {
    "day": 19,
    "word": "desperate",
    "pron": "[déspərət]",
    "pos": "a.",
    "meaning": "¹ 절망적인 ² 필사적인",
    "tip": "내 작은 구멍가게 앞에 大(큰) 수퍼가 들어와 있트(있다). 손님을 뺏길것 같아 절망적인 하지만 할인판매를 하는 등 필사적인",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "desperately",
      "pos": "",
      "meaning": "절망적으로, 필사적으로"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 13
   },
   {
    "day": 19,
    "word": "despite",
    "pron": "[dispáit]",
    "pos": "prep.",
    "meaning": "~에도 불구하고",
    "tip": "고려청자는 this(이렇게) 파이였음에도 불구하고 1억이야.",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 14
   },
   {
    "day": 19,
    "word": "engage",
    "pron": "[ingéidʒ]",
    "pos": "v.",
    "meaning": "¹ 관여하다 ² 종사하다",
    "tip": "\"일을 나에게 인계이지?(인계하는 거지?)\" 인계하여 그 일에 관여하다, 종사하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 15
   },
   {
    "day": 19,
    "word": "salmon",
    "pron": "[sǽmən]",
    "pos": "n.",
    "meaning": "연어",
    "tip": "새가 먼 곳에서 아래로 내려와 잡아채는 연어",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 16
   },
   {
    "day": 19,
    "word": "nightmare",
    "pron": "[náitmɛ̀ər]",
    "pos": "n.",
    "meaning": "악몽",
    "tip": "night(밤)마다 매여 사는 악몽",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 17
   },
   {
    "day": 19,
    "word": "adapt",
    "pron": "[ədǽpt]",
    "pos": "v.",
    "meaning": "조정하다, 적응시키다",
    "tip": "어댑터(adapter)로 220볼트 전압을 110볼트로 조정하다, 110볼트에 적응시키다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 18
   },
   {
    "day": 19,
    "word": "adopt",
    "pron": "[ədápt]",
    "pos": "v.",
    "meaning": "채택하다, 받아들이다",
    "tip": "시험에서 문제를 잘못 출제하여 오답두(오답도) 맞는 답으로 채택하다, 받아들이다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 19
   },
   {
    "day": 19,
    "word": "procedure",
    "pron": "[prəsíːdʒər]",
    "pos": "n.",
    "meaning": "과정, 방법",
    "tip": "선생님이 \"수학 풀이 과정, 방법을 풀어 써 줘.\"",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 20
   },
   {
    "day": 19,
    "word": "beast",
    "pron": "[biːst]",
    "pos": "n.",
    "meaning": "짐승, 야수",
    "tip": "짐승, 야수의 가슴에 비수를 꽂고 침을 투! 뱉다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 21
   },
   {
    "day": 19,
    "word": "brilliant",
    "pron": "[bríljənt]",
    "pos": "a.",
    "meaning": "빛나는, 눈부신, 훌륭한",
    "tip": "성화의 불이 1년(트) 동안 빛나는, 눈부신",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "brilliantly",
      "pos": "",
      "meaning": "찬란히, 훌륭히"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 22
   },
   {
    "day": 19,
    "word": "stimulate",
    "pron": "[stímjulèit]",
    "pos": "v.",
    "meaning": "자극하다",
    "tip": "꼴찌 성적표가 내 머리에서 steam을(김을) 내이트(나도록) 자극하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 23
   },
   {
    "day": 19,
    "word": "minister",
    "pron": "[mínistər]",
    "pos": "n.",
    "meaning": "¹ 장관 ² 목사",
    "tip": "미니(작은) 스타(별)를 어깨에 단 장관, 목사",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 24
   },
   {
    "day": 19,
    "word": "occupy",
    "pron": "[ákjupài]",
    "pos": "v.",
    "meaning": "차지하다, 점령하다",
    "tip": "아쿠! 엄마가 만들어준 파이를 동생이 벌써 차지하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 25
   },
   {
    "day": 19,
    "word": "ultimate",
    "pron": "[ʌ́ltimət]",
    "pos": "a.",
    "meaning": "궁극적인, 최후의",
    "tip": "토너먼트 결승은 얼(어느) 팀이 이트(있을까?) 즉, 궁극적인, 최후의 우승팀이 궁금한",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "ultimately",
      "pos": "",
      "meaning": "궁극적으로"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 26
   },
   {
    "day": 19,
    "word": "potential",
    "pron": "[pəténʃəl]",
    "pos": "a.",
    "meaning": "가능성이 있는, 잠재하는 n. 가능성, 잠재력",
    "tip": "포탄이 터질까 봐 멀리서 ten(10)까지 셔(세어)가며 안전한지 확인하는. 즉, 터질 가능성이 있는, 잠재력",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 27
   },
   {
    "day": 19,
    "word": "protein",
    "pron": "[próutiːn]",
    "pos": "n.",
    "meaning": "단백질",
    "tip": "달걀을 프라이팬에 풀어 튄 흰자는 단백질",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 28
   },
   {
    "day": 19,
    "word": "designate",
    "pron": "[dézignèit]",
    "pos": "v.",
    "meaning": "¹ 가리키다, 지정하다 ² 임명하다",
    "tip": "\"돼지 그것으로 내이트(내세요)\" 하며 돼지 하나를 가리키다, 오늘의 저녁거리로 임명하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 29
   }
  ]
 },
 {
  "day": 20,
  "title": "20강",
  "words": [
   {
    "day": 20,
    "word": "nutrition",
    "pron": "[njuːtríʃən]",
    "pos": "n.",
    "meaning": "영양, 영양분",
    "tip": "죽어가는 나무를 new tree션(새 나무셔)이 되도록 만든 영양, 영양분",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 1
   },
   {
    "day": 20,
    "word": "soak",
    "pron": "[souk]",
    "pos": "v.",
    "meaning": "담그다, 흠뻑 젖다",
    "tip": "물속에 쏘옥 담그다, 흠뻑 젖다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 2
   },
   {
    "day": 20,
    "word": "ceiling",
    "pron": "[síːliŋ]",
    "pos": "n.",
    "meaning": "천장",
    "tip": "천장을 보고 누워서 쉴리(잉).",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 3
   },
   {
    "day": 20,
    "word": "trigger",
    "pron": "[trígər]",
    "pos": "n.",
    "meaning": "¹ n. 방아쇠 v. 발사하다 ² v. 촉발시키다",
    "tip": "tree(나무)에 고무줄을 걸어 방아쇠를 당겨 이웃과 전쟁을 촉발시키다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 4
   },
   {
    "day": 20,
    "word": "manual",
    "pron": "[mǽnjuəl]",
    "pos": "a.",
    "meaning": "¹ n. 안내서 ² a. 손으로 하는",
    "tip": "메뉴가 all(모두) 적혀있는 메뉴판 안내서의 음식을 손으로 하는 손짜장집",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 5
   },
   {
    "day": 20,
    "word": "manufacture",
    "pron": "[mæ̀njufǽktʃər]",
    "pos": "v.",
    "meaning": "n. 제조 v. 제조하다",
    "tip": "판매를 위해 음식점 메뉴에 있는 것을 팩으로 처리하여 제조, 제조하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 6
   },
   {
    "day": 20,
    "word": "parallel",
    "pron": "[pǽrəlèl]",
    "pos": "a.",
    "meaning": "평행한",
    "tip": "'앞으로 나란히' 구령에 맞춰 두 팔을 낼 때 두 팔이 서로 평행한",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 7
   },
   {
    "day": 20,
    "word": "liver",
    "pron": "[lívər]",
    "pos": "n.",
    "meaning": "간",
    "tip": "니가 뷔(부었구나) 간댕이가!",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 8
   },
   {
    "day": 20,
    "word": "expert",
    "pron": "[ékspəːrt]",
    "pos": "n.",
    "meaning": "전문가 a. 전문가의",
    "tip": "X를 구하는 문제를 보자마자 퍼뜩 풀어버리는 수학 전문가",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 9
   },
   {
    "day": 20,
    "word": "diverse",
    "pron": "[divɔ́ːrs, daivɔ́ːrs]",
    "pos": "a.",
    "meaning": "다양한, 가지각색의",
    "tip": "사람들이 다양한, 가지각색의 옷을 다 입었수.",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "diversity",
      "pos": "",
      "meaning": "다양성"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 10
   },
   {
    "day": 20,
    "word": "echo",
    "pron": "[ékou]",
    "pos": "n.",
    "meaning": "메아리 v. 울리다",
    "tip": "애(아이) 코 고는 소리가 방 안에 메아리로 울리다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 11
   },
   {
    "day": 20,
    "word": "crisis",
    "pron": "[kráisis]",
    "pos": "n.",
    "meaning": "위기 (pl. crises)",
    "tip": "염산이 눈에 들어가 cry(울며) 눈을 씻수. 실명 위기",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 12
   },
   {
    "day": 20,
    "word": "volcano",
    "pron": "[valkéinou, vɔlkéinou]",
    "pos": "n.",
    "meaning": "화산",
    "tip": "땅속에서 올라오는 불 때문에 땅이 케이노(케이다), 즉 화산",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 13
   },
   {
    "day": 20,
    "word": "absolute",
    "pron": "[ǽbsəlùːt]",
    "pos": "a.",
    "meaning": "완전한, 절대적인",
    "tip": "다른 선수들보다 월등하게 앞설(루트), 즉 완전한, 절대적인 1등",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "absolutely",
      "pos": "",
      "meaning": "완전히, 전적으로"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 14
   },
   {
    "day": 20,
    "word": "beneficial",
    "pron": "[bènəfíʃəl]",
    "pos": "a.",
    "meaning": "이로운, 이익을 주는",
    "tip": "이익을 주는 사업 때문에 형편이 (두) 배나 피셔.",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "benefit",
      "pos": "",
      "meaning": "이익, 이득; 이익을 주다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 15
   },
   {
    "day": 20,
    "word": "decade",
    "pron": "[dékeid]",
    "pos": "n.",
    "meaning": "10년",
    "tip": "설립한 지 10년이 돼서 大(큰) 케익도(케이크도) 사서 기념하는",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 16
   },
   {
    "day": 20,
    "word": "legacy",
    "pron": "[légəsi]",
    "pos": "n.",
    "meaning": "유산",
    "tip": "\"이건 내 거야. 씨~\" 하며 서로 가지려고 싸우는 유산",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 17
   },
   {
    "day": 20,
    "word": "tension",
    "pron": "[ténʃən]",
    "pos": "n.",
    "meaning": "긴장, 긴장감",
    "tip": "총잡이 둘이 10까지 세고 쓰기로 하고 ten(10)까지 셔(세다), 즉 두 사람 간의 긴장, 긴장감",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 18
   },
   {
    "day": 20,
    "word": "web",
    "pron": "[web]",
    "pos": "n.",
    "meaning": "¹ 거미줄 ² (복잡하게 연결된) ~망",
    "tip": "인터넷 웹(web)이란 거미줄처럼 얽혀있는 통신망",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 19
   },
   {
    "day": 20,
    "word": "embarrass",
    "pron": "[imbǽrəs]",
    "pos": "v.",
    "meaning": "당황하게 하다",
    "tip": "음식을 쏟아 상대방 옷을 잉! 배렸수(버렸수), 즉 당황하게 하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 20
   },
   {
    "day": 20,
    "word": "appropriate",
    "pron": "[əpróupriət]",
    "pos": "a.",
    "meaning": "적당한, 적절한",
    "tip": "미역국을 끓일 때는 소금을 5프로만 뿌리엇!(뿌려), 즉 5프로가 적당한, 적절한",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 21
   },
   {
    "day": 20,
    "word": "cone",
    "pron": "[koun]",
    "pos": "n.",
    "meaning": "원뿔, (아이스크림의) 콘",
    "tip": "아이스크림콘은 원뿔 모양",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 22
   },
   {
    "day": 20,
    "word": "approval",
    "pron": "[əprúːvəl]",
    "pos": "n.",
    "meaning": "허가, 허락",
    "tip": "\"앞으로 벌을 주도록 하세요!\" 하고 학부모가 선생님에게 학생의 체벌을 허가, 허락",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "approve",
      "pos": "",
      "meaning": "허가하다, 찬성하다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 23
   },
   {
    "day": 20,
    "word": "innovation",
    "pron": "[ìnəvéiʃən]",
    "pos": "n.",
    "meaning": "혁신, 쇄신",
    "tip": "이 놈들을 칼로 베이셔(베셔), 그렇게 부패한 관료를 없애 정부를 혁신, 쇄신",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 24
   },
   {
    "day": 20,
    "word": "brief",
    "pron": "[briːf]",
    "pos": "a.",
    "meaning": "(시간·글 등이) 짧은, 간결한",
    "tip": "1. 성냥에 붙은 불이 프~ 하고 금방 꺼지듯, 즉 타는 (시간이) 짧은, 간결한 2. 회사에서 브리핑(briefing)한다는 말은 간단한 요약 보고를 뜻함",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 25
   },
   {
    "day": 20,
    "word": "disposal",
    "pron": "[dispóuzəl]",
    "pos": "n.",
    "meaning": "¹ 배치 ² 처리",
    "tip": "도둑 사건이 잦은 곳에 this(이) 포졸을 배치하여 도둑 사건을 처리",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "dispose",
      "pos": "",
      "meaning": "배치하다, 처리하다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 26
   },
   {
    "day": 20,
    "word": "caution",
    "pron": "[kɔ́ːʃən]",
    "pos": "n.",
    "meaning": "조심, 경고",
    "tip": "낯선 사람이 꼬션?(꼬셔?) 조심해야 해! 즉, 조심, 경고",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "cautious",
      "pos": "",
      "meaning": "조심하는"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 27
   },
   {
    "day": 20,
    "word": "obvious",
    "pron": "[ábviəs]",
    "pos": "a.",
    "meaning": "명백한, 분명한",
    "tip": "시체의 몸 앞이 칼에 비었수 타살이 명백한, 분명한",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "obviously",
      "pos": "",
      "meaning": "명백하게"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 28
   },
   {
    "day": 20,
    "word": "summit",
    "pron": "[sʌ́mit]",
    "pos": "n.",
    "meaning": "(산의) 정상, 꼭대기",
    "tip": "산 정상에 서서 밑을 바라보다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 29
   },
   {
    "day": 20,
    "word": "eliminate",
    "pron": "[ilíminèit]",
    "pos": "v.",
    "meaning": "제거하다",
    "tip": "지우개 찌꺼기를 책상 밖 일리(이리로) 미네(이트)(밀다), 그렇게 제거하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 30
   }
  ]
 },
 {
  "day": 21,
  "title": "21강",
  "words": [
   {
    "day": 21,
    "word": "symptom",
    "pron": "[símptəm]",
    "pos": "n.",
    "meaning": "증상, 징후",
    "tip": "신부가 열나고 오들오들 떰(떨다), 즉 몸살감기의 증상, 징후",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 1
   },
   {
    "day": 21,
    "word": "routine",
    "pron": "[ru:tí:n]",
    "pos": "a.",
    "meaning": "일상적인 n. 틀에 박힌 일상",
    "tip": "야간자율학습 시간에 누가 PC방으로 튄 것은 일상적인, 틀에 박힌 일상",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 2
   },
   {
    "day": 21,
    "word": "explanation",
    "pron": "[èksplənéiʃən]",
    "pos": "n.",
    "meaning": "설명",
    "tip": "1. 수학 선생님이 \"요렇게 엑스(x) 풀어내셔\" 하고 푸는 방법을 설명 2. explain의 명사형",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "explain",
      "pos": "",
      "meaning": "설명하다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 3
   },
   {
    "day": 21,
    "word": "positive",
    "pron": "[pázətiv]",
    "pos": "a.",
    "meaning": "확신하고 있는, 긍정적인",
    "tip": "'아들이 분명히 빠져있을 거야, EBS TV에'라고 공부할 것이라 확신하고 있는, 긍정적인",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 4
   },
   {
    "day": 21,
    "word": "dare",
    "pron": "[dɛər]",
    "pos": "v.",
    "meaning": "감히 ~하다",
    "tip": "\"감히 ~하다니 손 대어!\"",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 5
   },
   {
    "day": 21,
    "word": "strict",
    "pron": "[strikt]",
    "pos": "a.",
    "meaning": "엄격한",
    "tip": "street(거리)에 담배꽁초를 버리면 벌금이 170만원일 정도로 엄격한 싱가포르",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "strictly",
      "pos": "",
      "meaning": "엄격히, 엄하게"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 6
   },
   {
    "day": 21,
    "word": "alliance",
    "pron": "[əláiəns]",
    "pos": "n.",
    "meaning": "동맹, 연합",
    "tip": "all(모든) 사자들이 옆 마을 사자들의 침입을 막기 위해 서로 동맹, 연합",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 7
   },
   {
    "day": 21,
    "word": "obtain",
    "pron": "[əbtéin]",
    "pos": "v.",
    "meaning": "얻다, 획득하다",
    "tip": "어부가 고기 떼를 그물 in(안으로) 얻다, 획득하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 8
   },
   {
    "day": 21,
    "word": "territory",
    "pron": "[téritɔ̀:ri]",
    "pos": "n.",
    "meaning": "영토, 지역, 영역",
    "tip": "이곳은 테러가 자주 일어나는 터리(땅이라), 즉 테러가 일어나는 영토, 지역, 영역",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 9
   },
   {
    "day": 21,
    "word": "staff",
    "pron": "[stæf]",
    "pos": "n.",
    "meaning": "직원",
    "tip": "대리-과장-차장-부장 등과 같이 step(단계)별로 있는 직원",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 10
   },
   {
    "day": 21,
    "word": "sequence",
    "pron": "[sí:kwəns]",
    "pos": "n.",
    "meaning": "연속, 순서",
    "tip": "식당에서 식권을 쓰기 위해 줄을 연속으로 서서 순서를 기다리는",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 11
   },
   {
    "day": 21,
    "word": "variety",
    "pron": "[vəráiəti]",
    "pos": "n.",
    "meaning": "다양성, 변화",
    "tip": "버라이어티 쇼란 다양성, 변화가 있는 쇼",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 12
   },
   {
    "day": 21,
    "word": "vary",
    "pron": "[vέəri]",
    "pos": "v.",
    "meaning": "각기 다르다, 달라지다",
    "tip": "블루베리, 스트로베리, 크랜베리 등 베리는 각기 다르다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "various",
      "pos": "",
      "meaning": "다양한"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 13
   },
   {
    "day": 21,
    "word": "toll",
    "pron": "[toul]",
    "pos": "n.",
    "meaning": "(유료 도로·다리 등의) 통행료",
    "tip": "고속도로 톨게이트(toll gate)에서 받는 통행료",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 14
   },
   {
    "day": 21,
    "word": "skip",
    "pron": "[skip]",
    "pos": "v.",
    "meaning": "깡충 뛰다, (식사·수업 등을) 건너뛰다",
    "tip": "스키로 장애물을 건너뛰다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 15
   },
   {
    "day": 21,
    "word": "surge",
    "pron": "[sə:rdʒ]",
    "pos": "v.",
    "meaning": "밀려오다, 솟구치다 n. 파도, 급증",
    "tip": "파도가 싹 쓸지, 즉 파도가 밀려오다, 솟구치다, 급증",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 16
   },
   {
    "day": 21,
    "word": "accuracy",
    "pron": "[ǽkjurəsi]",
    "pos": "n.",
    "meaning": "정확성, 정확도",
    "tip": "총을 쏠 때 애꾸눈으로 조준하면 역시 높아지는 정확성, 정확도",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "accurate",
      "pos": "",
      "meaning": "정확한"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 17
   },
   {
    "day": 21,
    "word": "mud",
    "pron": "[mʌd]",
    "pos": "n.",
    "meaning": "진흙",
    "tip": "충남 보령의 머드 축제는 진흙 축제",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 18
   },
   {
    "day": 21,
    "word": "assemble",
    "pron": "[əsémbl]",
    "pos": "v.",
    "meaning": "모이다, 모으다, 조립하다",
    "tip": "너무 추워서 어! 센 불 주위로 사람들이 모이다, 모으다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 19
   },
   {
    "day": 21,
    "word": "stuff",
    "pron": "[stʌf]",
    "pos": "n.",
    "meaning": "¹ 물건, 재료 ² v. ~에 채우다, 채워 넣다",
    "tip": "水(수), 라면, 계란 등 재료, 물건을 채워 넣다 그리고 냄비 뚜껑을 덮으!(덮어!)",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 20
   },
   {
    "day": 21,
    "word": "shelter",
    "pron": "[ʃéltər]",
    "pos": "n.",
    "meaning": "은신처, 피난처, 주거지",
    "tip": "여기가 나의 쉘 터야. 즉, 은신처, 피난처, 주거지",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 21
   },
   {
    "day": 21,
    "word": "border",
    "pron": "[bɔ́:rdər]",
    "pos": "n.",
    "meaning": "국경, 경계선",
    "tip": "몇 보 더 가면 다른 나라인 국경, 경계선",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 22
   },
   {
    "day": 21,
    "word": "reside",
    "pron": "[rizáid]",
    "pos": "v.",
    "meaning": "살다, 거주하다",
    "tip": "니가 자이아파트에 살다, 거주하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "resident",
      "pos": "",
      "meaning": "거주자, 주민"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 23
   },
   {
    "day": 21,
    "word": "chaos",
    "pron": "[kéiɑs]",
    "pos": "n.",
    "meaning": "혼돈, 무질서",
    "tip": "상점들 유리창이 깨이고(깨지고) 아수라장이 된 혼돈, 무질서",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 24
   },
   {
    "day": 21,
    "word": "privilege",
    "pron": "[prívəlidʒ]",
    "pos": "n.",
    "meaning": "특권, 특혜",
    "tip": "은행장이기 때문에 은행에서 돈을 free(자유롭게) 빌리지, 즉 자유롭게 돈을 빌릴 수 있는 특권, 특혜",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 25
   },
   {
    "day": 21,
    "word": "violation",
    "pron": "[vàiəléiʃən]",
    "pos": "n.",
    "meaning": "침해, 위반",
    "tip": "밤늦게 이웃이 바이올린 소리를 크게 내이션(내셔), 즉 사생활 침해, 위반",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "violate",
      "pos": "",
      "meaning": "위반하다, 침해하다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 26
   },
   {
    "day": 21,
    "word": "contribution",
    "pron": "[kɑ̀ntribjú:ʃən]",
    "pos": "n.",
    "meaning": "공헌, 기부, 기부금",
    "tip": "country(나라)에 기부금을 부으션(부으셔), 즉 공헌, 기부, 기부금",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "contribute",
      "pos": "",
      "meaning": "공헌하다, 기부하다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 27
   },
   {
    "day": 21,
    "word": "distribution",
    "pron": "[dìstribjú:ʃən]",
    "pos": "n.",
    "meaning": "분배, 분포",
    "tip": "우리나라 꽃인 무궁화 나무인 this(이) tree(나무)를 전국에 부으션(부으셔), 즉 분배, 분포",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "distribute",
      "pos": "",
      "meaning": "분배하다, 나누어 주다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 28
   },
   {
    "day": 21,
    "word": "fever",
    "pron": "[fí:vər]",
    "pos": "n.",
    "meaning": "열, 열병",
    "tip": "열, 열병으로 쓰러진 환자는 빨리 태양을 피하고 물을 뮈!(부어!)",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 29
   },
   {
    "day": 21,
    "word": "assault",
    "pron": "[əsɔ́:lt]",
    "pos": "v.",
    "meaning": "공격하다, 폭행하다 n. 공격, 폭행",
    "tip": "미사일을 어! 쏠! 즉, 공격하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 30
   }
  ]
 },
 {
  "day": 22,
  "title": "22강",
  "words": [
   {
    "day": 22,
    "word": "fraud",
    "pron": "[frɔ:d]",
    "pos": "n.",
    "meaning": "사기, 사기꾼",
    "tip": "탈출 마술은 미리 수갑을 풀어두고서 푸는 척만 하는 사기, 사기꾼",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 1
   },
   {
    "day": 22,
    "word": "facile",
    "pron": "[fǽsl]",
    "pos": "a.",
    "meaning": "손쉬운, 편리한",
    "tip": "한 장씩 빼서 쓸 수 있는 곽 휴지가 두루마리 휴지보다 쓰기에 손쉬운, 편리한",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "facility",
      "pos": "",
      "meaning": "편의, 편의 시설"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 2
   },
   {
    "day": 22,
    "word": "shield",
    "pron": "[ʃi:ld]",
    "pos": "n.",
    "meaning": "방패 v. 방패로 막다",
    "tip": "스파이더맨이 쳐놓은 거미줄 실드(실도) 로켓을 막아주는 방패",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 3
   },
   {
    "day": 22,
    "word": "swift",
    "pron": "[swift]",
    "pos": "a.",
    "meaning": "신속한, 빠른",
    "tip": "아파트에 화재가 나자 문 앞의 수위부터 신속한, 빠른 탈출",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 4
   },
   {
    "day": 22,
    "word": "neutral",
    "pron": "[njú:trəl]",
    "pos": "a.",
    "meaning": "중립적인, 중간의, 중성의",
    "tip": "TV 채널을 갖고 싸울 때 나는 누가 어떤 채널을 틀어도 상관없는, 즉 중립적인, 중간의",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 5
   },
   {
    "day": 22,
    "word": "accompany",
    "pron": "[əkámpəni]",
    "pos": "v.",
    "meaning": "동행하다, 동반하다",
    "tip": "어! 친구와 company(회사)가 같은 방향이라 동행하다, 동반하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 6
   },
   {
    "day": 22,
    "word": "nap",
    "pron": "[næp]",
    "pos": "n.",
    "meaning": "낮잠, 잠깐 잠",
    "tip": "수업시간에 잠깐 잠. 그러다 선생님이 부르자 넵? 하고 놀라다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 7
   },
   {
    "day": 22,
    "word": "shrink",
    "pron": "[ʃriŋk]",
    "pos": "v.",
    "meaning": "움츠러들다, 오그라들다",
    "tip": "시린 손을 무릎 사이에 넣고 추위서 \"크으~\" 하며 몸이 잔뜩 움츠러들다, 오그라들다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "shrink-shrank[shrunk]-shrunk[shrunken]",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 8
   },
   {
    "day": 22,
    "word": "accomplish",
    "pron": "[əkámpliʃ]",
    "pos": "v.",
    "meaning": "완수하다, 성취하다",
    "tip": "숙제를 어! 컴(퓨터)로 풀리 she(그녀가). 즉, 숙제를 완수하다, 성취하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 9
   },
   {
    "day": 22,
    "word": "exhibit",
    "pron": "[igzíbit]",
    "pos": "v.",
    "meaning": "전시하다, 보이다",
    "tip": "민속촌에 조선시대의 이 그지(거지) 인형을 빛으로 비춰 전시하다, 보이다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "exhibition",
      "pos": "",
      "meaning": "전시, 전시회"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 10
   },
   {
    "day": 22,
    "word": "estimation",
    "pron": "[èstiméiʃən]",
    "pos": "n.",
    "meaning": "평가, 판단",
    "tip": "송아지에게 S자가 쓰인 띠를 목에 매이션(매셔), 즉 S등급으로 평가, 판단",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "estimate",
      "pos": "",
      "meaning": "평가하다, 판단하다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 11
   },
   {
    "day": 22,
    "word": "flexible",
    "pron": "[fléksəbl]",
    "pos": "a.",
    "meaning": "구부리기 쉬운, 융통성 있는",
    "tip": "껌 종이를 풀래! 그리고 껌을 구부려 씹을. 껌은 구부리기 쉬운, 즉 융통성 있는",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 12
   },
   {
    "day": 22,
    "word": "struggle",
    "pron": "[strágl]",
    "pos": "n.",
    "meaning": "투쟁, 싸움 v. 분투하다",
    "tip": "화물 노조가 인금인상을 요구하며 수많은 트럭을 몰고 와 투쟁, 싸움, 분투하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 13
   },
   {
    "day": 22,
    "word": "referee",
    "pron": "[rèfərí:]",
    "pos": "n.",
    "meaning": "심판 v. 심판하다",
    "tip": "오디션에서 랩퍼의 노래를 이(2)점으로 심판이 심판하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 14
   },
   {
    "day": 22,
    "word": "surrender",
    "pron": "[səréndər]",
    "pos": "v.",
    "meaning": "항복하다, 포기하다 n. 항복, 포기",
    "tip": "두 손을 들고 총도 버릴 테니 쏠 테면 쏘랜다, 즉 항복하다, 포기하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 15
   },
   {
    "day": 22,
    "word": "note",
    "pron": "[nout]",
    "pos": "n.",
    "meaning": "¹ 메모, 필기 ² v. 주목하다",
    "tip": "노트에 열심히 필기를 하면서 수업에 주목하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 16
   },
   {
    "day": 22,
    "word": "strategy",
    "pron": "[strǽtədʒi]",
    "pos": "n.",
    "meaning": "전술, 전략",
    "tip": "지뢰를 설치하여 수풀에서 터지도록 하는 전술, 전략",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 17
   },
   {
    "day": 22,
    "word": "orchard",
    "pron": "[ɔ́:rtʃərd]",
    "pos": "n.",
    "meaning": "과수원",
    "tip": "오! 자두가 열린 과수원",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 18
   },
   {
    "day": 22,
    "word": "available",
    "pron": "[əvéiləbl]",
    "pos": "a.",
    "meaning": "이용할 수 있는, 구할 수 있는",
    "tip": "어, 배가 일억불 주면 구할 수 있는, 이용할 수 있는",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 19
   },
   {
    "day": 22,
    "word": "withdraw",
    "pron": "[wiðdrɔ́:]",
    "pos": "v.",
    "meaning": "¹ 물러나다, 철수하다 ² (돈을) 인출하다",
    "tip": "부도를 앞둔 은행으로 with(함께) 들어가 돈을 몽땅 인출하다. 그런 후 물러나다, 철수하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "withdraw-withdrew-withdrawn",
      "pos": "",
      "meaning": ""
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 20
   },
   {
    "day": 22,
    "word": "tolerate",
    "pron": "[tálərèit]",
    "pos": "v.",
    "meaning": "참다, 견디다",
    "tip": "수업시간에 배가 탈나서 화장실 가고 싶지만 에잇! 하고 참다, 견디다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 21
   },
   {
    "day": 22,
    "word": "defect",
    "pron": "[di:fekt]",
    "pos": "n.",
    "meaning": "결점, 결함",
    "tip": "사려는 중고차 뒤에 팩! 하고 찌그러져 있는 two(2)개의 결점, 결함",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 22
   },
   {
    "day": 22,
    "word": "notion",
    "pron": "[nóuʃən]",
    "pos": "n.",
    "meaning": "개념, 생각",
    "tip": "know셔?(알고 있으셔?) 이 수학 개념, 생각을?",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 23
   },
   {
    "day": 22,
    "word": "accuse",
    "pron": "[əkjúz]",
    "pos": "v.",
    "meaning": "고발하다, 비난하다",
    "tip": "정치인이 비자금으로 1억을 키우고(모으고) 있다고 고발하다, 비난하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 24
   },
   {
    "day": 22,
    "word": "barely",
    "pron": "[bέərli]",
    "pos": "ad.",
    "meaning": "거의 ~않다[~없다]",
    "tip": "이런 무인도에 배가 올 리가 거의 없다, 거의 오지 않다.",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 25
   },
   {
    "day": 22,
    "word": "canyon",
    "pron": "[kǽnjən]",
    "pos": "n.",
    "meaning": "깊은 협곡, 골짜기",
    "tip": "그랜드캐년은 grand(웅장한) 깊은 협곡, 골짜기",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 26
   },
   {
    "day": 22,
    "word": "tribe",
    "pron": "[traib]",
    "pos": "n.",
    "meaning": "부족, 종족",
    "tip": "모닥불 주위를 돌며 춤을 추라이! 하는 인디언 부족, 즉 부족, 종족",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 27
   },
   {
    "day": 22,
    "word": "possess",
    "pron": "[pəzés]",
    "pos": "v.",
    "meaning": "소유하다, 지니다",
    "tip": "금화를 바가지로 퍼서 재가 쓰다, 즉 많은 금화를 소유하다, 지니다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "possession",
      "pos": "",
      "meaning": "소유, 소유물"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 28
   },
   {
    "day": 22,
    "word": "precious",
    "pron": "[préʃəs]",
    "pos": "a.",
    "meaning": "귀중한, 값비싼",
    "tip": "풀밭에 눕지 마! 풀에 셔스(셔츠)가 닿으면 물들면 안 돼! 즉, 귀중한, 값비싼 셔츠",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 29
   },
   {
    "day": 22,
    "word": "vessel",
    "pron": "[vésəl]",
    "pos": "n.",
    "meaning": "¹ (큰) 배 ² 그릇",
    "tip": "개미가 그릇을 배로 쓸, 즉 배, 그릇",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 30
   }
  ]
 },
 {
  "day": 23,
  "title": "23강",
  "words": [
   {
    "day": 23,
    "word": "myth",
    "pron": "[miθ]",
    "pos": "n.",
    "meaning": "신화, (근거 없는) 이야기",
    "tip": "\"사람이 알에서 태어났다는 신화를 믿수?\"",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 1
   },
   {
    "day": 23,
    "word": "precise",
    "pron": "[prisáis]",
    "pos": "a.",
    "meaning": "정확한, 정밀한",
    "tip": "신축성 있는 free 사이즈의 장갑은 누구에게나 정확한, 정밀한 사이즈",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 2
   },
   {
    "day": 23,
    "word": "nod",
    "pron": "[nɑd]",
    "pos": "v.",
    "meaning": "(머리를) 끄덕이다",
    "tip": "\"너도 먹을래?\"라는 물음에 \"나두(나도) 먹을래.\" 하고 머리를 끄덕이다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 3
   },
   {
    "day": 23,
    "word": "convince",
    "pron": "[kənvíns]",
    "pos": "v.",
    "meaning": "납득시키다, 설득하다",
    "tip": "탄원서의 칸에 빈 서명란에 이름을 쓰라고 동네 주민들을 납득시키다, 설득하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 4
   },
   {
    "day": 23,
    "word": "stink",
    "pron": "[stiŋk]",
    "pos": "n.",
    "meaning": "악취 v. 악취를 풍기다 (stink-stank-stunk)",
    "tip": "스컹크의 악취, 악취를 풍기다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 5
   },
   {
    "day": 23,
    "word": "pursue",
    "pron": "[pərsú:]",
    "pos": "v.",
    "meaning": "뒤쫓다, 추구하다",
    "tip": "로봇에서 분리된 로켓 주먹 팔이 슈우~ 하고 적을 뒤쫓다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 6
   },
   {
    "day": 23,
    "word": "breed",
    "pron": "[bri:d]",
    "pos": "v.",
    "meaning": "(새끼를) 기르다, 낳다 (breed-bred-bred)",
    "tip": "어미새가 새끼의 부리에 먹이를 두다, 즉 새끼를 기르다, 낳다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 7
   },
   {
    "day": 23,
    "word": "dust",
    "pron": "[dʌst]",
    "pos": "n.",
    "meaning": "먼지",
    "tip": "옷걸이에 옷을 뒷수 two(2)년이나, 그래서 쌓인 먼지",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "dusty",
      "pos": "",
      "meaning": "먼지투성이의"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 8
   },
   {
    "day": 23,
    "word": "nevertheless",
    "pron": "[névərðəlès]",
    "pos": "ad.",
    "meaning": "그럼에도 불구하고 (=nonetheless)",
    "tip": "내가 음식값을 never 덜 냈수(덜 내지 않았수). 그럼에도 불구하고 왜 나만 요만큼 줘?",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 9
   },
   {
    "day": 23,
    "word": "appreciate",
    "pron": "[əprí:ʃièit]",
    "pos": "v.",
    "meaning": "감사하다, 고마워하다",
    "tip": "산삼을 발견하자 바로 땅에 엎으리(시) 에잇! 하고 산신령께 감사하다, 고마워하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 10
   },
   {
    "day": 23,
    "word": "discipline",
    "pron": "[dísəplin]",
    "pos": "n.",
    "meaning": "¹ 훈련 ² 규율",
    "tip": "숙제를 안 해오면 학교가 끝날 뒤에 남아 숙제를 써서 풀린(풀리는) 훈련을 시키는 것이 학교의 규율",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 11
   },
   {
    "day": 23,
    "word": "advocate",
    "pron": "[ǽdvəkèit] / [ǽdvəkət]",
    "pos": "v.",
    "meaning": "옹호하다, 지지하다 n. 옹호자, 지지자",
    "tip": "엄마 아빠가 싸울 때 애두(애도) 뷔케(부엌에 엄마랑 같이 있다, 즉 엄마를 옹호하다, 지지하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 12
   },
   {
    "day": 23,
    "word": "spare",
    "pron": "[spɛər]",
    "pos": "a.",
    "meaning": "¹ a. 예비의, 여분의 ² v. 아끼다, (시간·돈 등을) 할애하다",
    "tip": "1. 월급의 50% 수(숫자)를 빼어 예비의, 여분의 돈으로 아끼다, 할애하다 2. 스페어 타이어는 예비의, 여분의 타이어",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 13
   },
   {
    "day": 23,
    "word": "moderately",
    "pron": "[mɑ́dərətli] / [mɔ́dərətli]",
    "pos": "ad.",
    "meaning": "적당히, 알맞게",
    "tip": "내가 국을 끓이면 짜거나 싱거운데, 역시 mother(엄마)라서 틀리서. 간을 적당히, 알맞게 끓이서",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "moderate",
      "pos": "",
      "meaning": "적당한, 보통의"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 14
   },
   {
    "day": 23,
    "word": "derive",
    "pron": "[diráiv]",
    "pos": "v.",
    "meaning": "이끌어내다, 얻다, 유래되다",
    "tip": "낭만적인 해안가 드라이브를 시켜주어 그녀의 환심을 이끌어내다, 얻다, 사랑이 유래되다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 15
   },
   {
    "day": 23,
    "word": "rush",
    "pron": "[rʌʃ]",
    "pos": "v.",
    "meaning": "¹ 서두르다 ² 돌진하다, 쇄도하다",
    "tip": "나폴레옹 군대가 러시아를 향해 돌진하다, 쇄도하다, 진군을 서두르다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 16
   },
   {
    "day": 23,
    "word": "charity",
    "pron": "[tʃǽrəti]",
    "pos": "n.",
    "meaning": "자선, 자선단체",
    "tip": "추위에 떨고 있는 거지에게 따끈한 체리 tea(차)를 끓여서 주는 자선, 자선단체",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 17
   },
   {
    "day": 23,
    "word": "declare",
    "pron": "[dikléər]",
    "pos": "v.",
    "meaning": "선언하다, 공표하다",
    "tip": "뒤에까지 들리도록 목소리가 클래요. 즉, 크게 선언하다, 공표하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "declaration",
      "pos": "",
      "meaning": "선언, 발표"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 18
   },
   {
    "day": 23,
    "word": "mutual",
    "pron": "[mjú:tʃuəl]",
    "pos": "a.",
    "meaning": "서로의, 공동의",
    "tip": "서로의 얼굴을 마주보고 뮤직에 맞춰 춤을 추얼",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 19
   },
   {
    "day": 23,
    "word": "crack",
    "pron": "[kræk]",
    "pos": "n.",
    "meaning": "갈라진 틈, 날카로운 소리 v. 금이 가다",
    "tip": "과자 크래커(cracker) 봉지를 잘못 뜯어 금이 가다, 금이 갈 때의 날카로운 소리",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 20
   },
   {
    "day": 23,
    "word": "illusion",
    "pron": "[ilú:ʒən]",
    "pos": "n.",
    "meaning": "환영, 망상",
    "tip": "일루(이리로) 짠! 절루(저리로) 짠! 나타나는 환영, 망상",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 21
   },
   {
    "day": 23,
    "word": "gravity",
    "pron": "[grǽvəti]",
    "pos": "n.",
    "meaning": "중력, 인력",
    "tip": "\"그래, 버티이! 이 블랙홀의 중력, 인력을\"",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 22
   },
   {
    "day": 23,
    "word": "deliberately",
    "pron": "[dilíbərətli]",
    "pos": "ad.",
    "meaning": "¹ 신중히 ² 고의로",
    "tip": "주인이 배달원에게 \"deliver(배달)을 너가 틀리게 했어. 신중히 배달해!\" 알고 보니 주문자가 장난하려고 고의로 주소를 잘못 준 것임",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "deliberate",
      "pos": "",
      "meaning": "1. 신중한; 신중히 생각하다 2. 고의의"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 23
   },
   {
    "day": 23,
    "word": "pretend",
    "pron": "[priténd]",
    "pos": "v.",
    "meaning": "~인 체하다, 가장하다",
    "tip": "적에게 텐트를 숨기려고 풀이 텐트를 덮게 하여 풀더미인 체하다, 가장하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 24
   },
   {
    "day": 23,
    "word": "conscious",
    "pron": "[kɑ́nʃəs] / [kɔ́nʃəs]",
    "pos": "a.",
    "meaning": "의식이 있는, 의식하고 있는",
    "tip": "의식이 없던 환자가 큰 숨을 쉬었수, 즉 의식이 있는, 의식하고 있는",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "consciously",
      "pos": "",
      "meaning": "의식하여, 의도적으로"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 25
   },
   {
    "day": 23,
    "word": "particle",
    "pron": "[pɑ́:rtikl]",
    "pos": "n.",
    "meaning": "입자, 티끌",
    "tip": "part(부분)으로 나누어진 티끌같이 작은 입자, 티끌",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 26
   },
   {
    "day": 23,
    "word": "witch",
    "pron": "[witʃ]",
    "pos": "n.",
    "meaning": "마녀",
    "tip": "여기저기로 사라졌다 다시 나타났다 하면서 위치를 옮기는 마녀",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 27
   },
   {
    "day": 23,
    "word": "wizard",
    "pron": "[wízard]",
    "pos": "n.",
    "meaning": "(남자) 마법사",
    "tip": "위 저기에두(저기에도) 빗자루를 타고 날아가는 마법사",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 28
   },
   {
    "day": 23,
    "word": "eternal",
    "pron": "[itə́:rnəl]",
    "pos": "a.",
    "meaning": "영원한, 변함없는",
    "tip": "가도 가도 끝없는 이 터널은 영원한, 변함없는",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 29
   },
   {
    "day": 23,
    "word": "official",
    "pron": "[əfíʃəl]",
    "pos": "a.",
    "meaning": "¹ a. 공적인, 공식적인 ² n. 공무원",
    "tip": "개인의 집이 아닌 office(사무실)에서 하는 일의, 즉 공적인, 공식적인, 공무원",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "officially",
      "pos": "",
      "meaning": "공식적으로, 공무상"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 30
   }
  ]
 },
 {
  "day": 24,
  "title": "24강",
  "words": [
   {
    "day": 24,
    "word": "drag",
    "pron": "[dræg]",
    "pos": "v.",
    "meaning": "끌다, 끌고 가다",
    "tip": "사냥한 멧돼지의 두 leg(다리)를 잡고 질질 끌고 가다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 1
   },
   {
    "day": 24,
    "word": "disaster",
    "pron": "[dizǽstər]",
    "pos": "n.",
    "meaning": "재앙, 재난",
    "tip": "디게(되게) 재수 없는 터라 이사 오는 집마다 발생하는 재앙, 재난",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 2
   },
   {
    "day": 24,
    "word": "cope",
    "pron": "[koup]",
    "pos": "v.",
    "meaning": "맞서다, 대처하다",
    "tip": "두 마리의 소가 코를 프우~ 하며 맞서다, 대처하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 3
   },
   {
    "day": 24,
    "word": "bible",
    "pron": "[báibl]",
    "pos": "n.",
    "meaning": "성서, 성경",
    "tip": "하느님이 바위에 번갯불로 새겨서 쓴 성서, 성경",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 4
   },
   {
    "day": 24,
    "word": "compose",
    "pron": "[kəmpóuz]",
    "pos": "v.",
    "meaning": "구성하다",
    "tip": "컴퓨터 배경화면을 자신의 여러 포즈를 취한 사진으로 구성하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 5
   },
   {
    "day": 24,
    "word": "component",
    "pron": "[kəmpóunənt]",
    "pos": "n.",
    "meaning": "구성요소, 성분",
    "tip": "compose(구성하다) + ent(~것): 구성요소, 성분",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 6
   },
   {
    "day": 24,
    "word": "sacrifice",
    "pron": "[sǽkrəfàis]",
    "pos": "n.",
    "meaning": "희생 v. 희생시키다",
    "tip": "배고파서 기르던 새를 끓여 파이로 쓰다, 즉 새를 희생, 희생시키다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 7
   },
   {
    "day": 24,
    "word": "flaw",
    "pron": "[flɔ:]",
    "pos": "n.",
    "meaning": "흠, (갈라진) 금",
    "tip": "풀로 붙여야 하는 갈라진 흠, 금",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 8
   },
   {
    "day": 24,
    "word": "pause",
    "pron": "[pɔ:z]",
    "pos": "v.",
    "meaning": "잠시 멈추다, 중단하다",
    "tip": "사진을 찍기 위해 포즈를 잡으며 잠시 멈추다, 중단하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 9
   },
   {
    "day": 24,
    "word": "idiot",
    "pron": "[ídiət]",
    "pos": "n.",
    "meaning": "바보, 천치",
    "tip": "\"니 책상은 이 뒤엣!(뒤야!) 즉, 자기 자리도 못 찾는 바보, 천치",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 10
   },
   {
    "day": 24,
    "word": "solid",
    "pron": "[sɑ́lid] / [sɔ́lid]",
    "pos": "a.",
    "meaning": "단단한 n. 고체",
    "tip": "같은 부피의 고체와 액체가 천칭에 있을 때 단단한, 고체 쪽으로 쏠리다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 11
   },
   {
    "day": 24,
    "word": "congress",
    "pron": "[kɑ́ŋgris] / [kɔ́ŋgres]",
    "pos": "n.",
    "meaning": "국회, 의회",
    "tip": "큰 그리스 나라를 통치하고 이끌었던 국회, 의회",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 12
   },
   {
    "day": 24,
    "word": "encounter",
    "pron": "[inkáuntər]",
    "pos": "v.",
    "meaning": "¹ (우연히) 만나다, 마주치다 ² (위험·곤란 등에) 직면하다",
    "tip": "무전취식하고 도망치려다가 잉! 카운터에서 주인을 마주치다, (곤란에) 직면하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 13
   },
   {
    "day": 24,
    "word": "adequate",
    "pron": "[ǽdikwət]",
    "pos": "a.",
    "meaning": "적당한, 충분한",
    "tip": "축구 경기 인원을 11명을 다 채웠으니 애들이 뒤에서 기다리지만 cut!(잘라), 즉 이미 인원이 적당한, 충분한",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "adequately",
      "pos": "",
      "meaning": "적절하게, 충분히"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 14
   },
   {
    "day": 24,
    "word": "abandon",
    "pron": "[əbǽndən]",
    "pos": "v.",
    "meaning": "버리다, 포기하다",
    "tip": "책 속에 숨겨둔 비상금 중에 어! 아내가 뺀 돈은 버리다, 포기하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 15
   },
   {
    "day": 24,
    "word": "oyster",
    "pron": "[ɔ́istər]",
    "pos": "n.",
    "meaning": "굴",
    "tip": "얇게 썬 오이s 위에 떠 있는 채로 나온 한 접시의 굴",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 16
   },
   {
    "day": 24,
    "word": "sled",
    "pron": "[sled]",
    "pos": "n.",
    "meaning": "썰매",
    "tip": "비탈길을 내려갈 때 슬래두(슬래도) 스기 힘든 썰매",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 17
   },
   {
    "day": 24,
    "word": "starfish",
    "pron": "[stɑ́:rfiʃ]",
    "pos": "n.",
    "meaning": "불가사리",
    "tip": "star(별)처럼 생긴 fish(물고기), 즉 불가사리",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 18
   },
   {
    "day": 24,
    "word": "isolate",
    "pron": "[áisəlèit]",
    "pos": "v.",
    "meaning": "고립시키다, 격리시키다",
    "tip": "아이 소가 어미 소를 late(늦게) 따라가자 사자들이 잡아먹으려고 고립시키다, 격리시키다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "isolation",
      "pos": "",
      "meaning": "고립, 격리"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 19
   },
   {
    "day": 24,
    "word": "gradual",
    "pron": "[grǽdʒuəl]",
    "pos": "a.",
    "meaning": "점진적인, 서서히 일어나는",
    "tip": "동전을 그래, 그렇게 하나씩 주을(줍다). 티끌모아 태산처럼 점진적인, 서서히 일어나는 동전의 증가",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "gradually",
      "pos": "",
      "meaning": "점진적으로, 점차적으로"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 20
   },
   {
    "day": 24,
    "word": "sneeze",
    "pron": "[sni:z]",
    "pos": "v.",
    "meaning": "재채기하다",
    "tip": "순이가 츼! 하고 재채기하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 21
   },
   {
    "day": 24,
    "word": "criterion",
    "pron": "[kraitíəriən]",
    "pos": "n.",
    "meaning": "(평가의) 기준 (pl. criteria)",
    "tip": "신인 배우 오디션에서 얼마나 cry(우는) 연기가 튀어리?(튀는지가) 평가의 기준",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 22
   },
   {
    "day": 24,
    "word": "discriminate",
    "pron": "[diskríminèit]",
    "pos": "v.",
    "meaning": "¹ 식별하다 ² 차별하다",
    "tip": "빵집의 모든 크림을 찍어먹어 보고 \"this 크림이네!\" 하고 자신이 좋아하는 빵을 식별하다, 차별하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "discrimination",
      "pos": "",
      "meaning": "식별, 차별"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 23
   },
   {
    "day": 24,
    "word": "convey",
    "pron": "[kənvéi]",
    "pos": "v.",
    "meaning": "운반하다, 전달하다",
    "tip": "큰 배 2(두 개)로 물건을 운반하다, 전달하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 24
   },
   {
    "day": 24,
    "word": "sustain",
    "pron": "[səstéin]",
    "pos": "v.",
    "meaning": "떠받치다, 유지하다",
    "tip": "서서 무등을 태인(태워진) 사람을 밑에서 떠받치다, 유지하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 25
   },
   {
    "day": 24,
    "word": "scar",
    "pron": "[skɑ:r]",
    "pos": "n.",
    "meaning": "상처, 흉터",
    "tip": "살점이 슥 까여서 생긴 상처, 흉터",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 26
   },
   {
    "day": 24,
    "word": "awful",
    "pron": "[ɔ́:fəl]",
    "pos": "a.",
    "meaning": "엄청난, 지독한",
    "tip": "농약을 써도, 낫으로 잘라도 자꾸 자라는 오! 풀! 즉, 엄청난, 지독한 풀",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "awfully",
      "pos": "",
      "meaning": "엄청나게, 지독하게"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 27
   },
   {
    "day": 24,
    "word": "penalty",
    "pron": "[pénəlti]",
    "pos": "n.",
    "meaning": "벌칙, 형벌",
    "tip": "축구에서 페널티 킥(penalty kick)은 반칙에 대한 벌칙, 형벌",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 28
   },
   {
    "day": 24,
    "word": "jar",
    "pron": "[dʒɑ:r]",
    "pos": "n.",
    "meaning": "항아리, 단지",
    "tip": "참기름을 짜서 담는 항아리, 단지",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 29
   },
   {
    "day": 24,
    "word": "fossil",
    "pron": "[fɑ́səl] / [fɔ́səl]",
    "pos": "n.",
    "meaning": "화석 a. 화석의",
    "tip": "화석을 땅속에서 팠을",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 30
   }
  ]
 },
 {
  "day": 25,
  "title": "25강",
  "words": [
   {
    "day": 25,
    "word": "priority",
    "pron": "[praiɔ́:rəti, praiɑ́:rəti]",
    "pos": "n.",
    "meaning": "우선사항",
    "tip": "계란 후라이 요리법 알았지? 요리사가 알아야 할 우선사항이야.",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "prior",
      "pos": "",
      "meaning": "~보다 먼저의, 우선하는"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 1
   },
   {
    "day": 25,
    "word": "element",
    "pron": "[élimənt]",
    "pos": "n.",
    "meaning": "요소, 성분",
    "tip": "이 약의 구성 요소, 성분이 일(1), 이(2)... 많다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 2
   },
   {
    "day": 25,
    "word": "form",
    "pron": "[fɔ:rm]",
    "pos": "n. v.",
    "meaning": "모양, 형태 / 형성하다",
    "tip": "폼이 멋있다고 할 때 폼은 그 사람의 모양이나 형태",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 3
   },
   {
    "day": 25,
    "word": "latest",
    "pron": "[léitist]",
    "pos": "a.",
    "meaning": "최근의, 최신의",
    "tip": "3시, 5시, 6시 중에 latest(가장 늦은) 시간인 6시가 세 개의 시간 중에 최근의, 최신의 시간",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "lately",
      "pos": "",
      "meaning": "요즘, 최근에"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 4
   },
   {
    "day": 25,
    "word": "memorable",
    "pron": "[mémərəbl]",
    "pos": "a.",
    "meaning": "기억할 만한, 중대한",
    "tip": "memory(기억) + able(~할 만한): 기억할 만한, 중대한",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 5
   },
   {
    "day": 25,
    "word": "accelerate",
    "pron": "[æksélərèit]",
    "pos": "v.",
    "meaning": "가속하다, 가속화되다",
    "tip": "자동차의 액셀러레이터(accelerator)를 밟아 가속하다, 가속화되다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 6
   },
   {
    "day": 25,
    "word": "intellect",
    "pron": "[íntəlèkt]",
    "pos": "n.",
    "meaning": "지성, 지능",
    "tip": "intell(인텔) + ect: 회사 인텔은 컴퓨터의 지능에 해당하는 CPU 회사",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "intellectual",
      "pos": "",
      "meaning": "지능의, 지적인"
     },
     {
      "word": "intelligent",
      "pos": "",
      "meaning": "지적인, 총명한"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 7
   },
   {
    "day": 25,
    "word": "humanitarian",
    "pron": "[hju:mæ̀nitɛ́əriən]",
    "pos": "a.",
    "meaning": "인도주의적인",
    "tip": "human(인간)의 파생어: 인도주의적인",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 8
   },
   {
    "day": 25,
    "word": "partial",
    "pron": "[pɑ́:rʃəl]",
    "pos": "a.",
    "meaning": "1 부분적인 2 편파적인",
    "tip": "한쪽 part(부분)에만 치우친, 즉 부분적인, 편파적인",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "partially",
      "pos": "",
      "meaning": "부분적으로, 불공평하게"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 9
   },
   {
    "day": 25,
    "word": "somewhat",
    "pron": "[sʌ́mhwàt]",
    "pos": "ad.",
    "meaning": "어느 정도, 다소",
    "tip": "some(약간의) + what(무엇): 약간의 무엇이 있는 정도, 즉 어느 정도, 다소",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 10
   },
   {
    "day": 25,
    "word": "breakthrough",
    "pron": "[bréikθrù:]",
    "pos": "n.",
    "meaning": "돌파구",
    "tip": "난관을 break(부수어) through(통과하게) 하는 것, 즉 돌파구",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 11
   },
   {
    "day": 25,
    "word": "resistance",
    "pron": "[rizístəns]",
    "pos": "n.",
    "meaning": "저항, 반대, 레지스탕스",
    "tip": "레지스탕스는 프랑스의 독일 나치에 대한 저항, 반대운동",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "resist",
      "pos": "",
      "meaning": "저항하다, 반대하다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 12
   },
   {
    "day": 25,
    "word": "incident",
    "pron": "[ínsidənt]",
    "pos": "n.",
    "meaning": "사건, 일",
    "tip": "인시던트 → accident(사건)",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 13
   },
   {
    "day": 25,
    "word": "treetop",
    "pron": "[trí:tὰp]",
    "pos": "n.",
    "meaning": "나무 꼭대기",
    "tip": "tree(나무) + top(꼭대기): 나무 꼭대기",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 14
   },
   {
    "day": 25,
    "word": "fashionable",
    "pron": "[fǽʃənəbl]",
    "pos": "a.",
    "meaning": "유행하는",
    "tip": "fashion(패션) + able(~할 수 있는): 너도나도 그 옷 패션을 따라갈 수 있는, 즉 유행하는",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 15
   },
   {
    "day": 25,
    "word": "turn",
    "pron": "[tə:rn]",
    "pos": "v. n.",
    "meaning": "1 돌다, 돌리다, 뒤집다 2 변하다, 변화시키다 3 차례",
    "tip": "1. 상태를 turn(돌려서) 변하다, 변화시키다 2. 순번이 turn(돌아가며) 찾아오는 차례",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 16
   },
   {
    "day": 25,
    "word": "nowadays",
    "pron": "[náuədèiz]",
    "pos": "ad.",
    "meaning": "오늘날, 요즘",
    "tip": "now(지금, 현재) a days(날들): 오늘날, 요즘",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 17
   },
   {
    "day": 25,
    "word": "misunderstand",
    "pron": "[mìsʌndərstǽnd]",
    "pos": "v.",
    "meaning": "오해하다 (misunderstand-misunderstood-misunderstood)",
    "tip": "mis(잘못) understand(이해하다), 즉 오해하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 18
   },
   {
    "day": 25,
    "word": "badly",
    "pron": "[bǽdli]",
    "pos": "ad.",
    "meaning": "1 나쁘게 2 몹시, 심하게",
    "tip": "bad(나쁜) + ly(부사형 어미): 나쁠 정도로 심하게",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 19
   },
   {
    "day": 25,
    "word": "millionaire",
    "pron": "[mìljənɛ́ər]",
    "pos": "n.",
    "meaning": "백만장자",
    "tip": "불우이웃 돕기 성금으로 million(백만) 달러를 내어? 백만장자네!",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 20
   },
   {
    "day": 25,
    "word": "altogether",
    "pron": "[ɔ̀:ltəgéðər]",
    "pos": "ad.",
    "meaning": "다같이, 다 합하여",
    "tip": "all(모두) together(함께), 즉 다같이, 다 합하여",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 21
   },
   {
    "day": 25,
    "word": "forest",
    "pron": "[fɔ́:rist]",
    "pos": "n.",
    "meaning": "숲, 삼림",
    "tip": "퍼(퍼렇다) + est(최상급 어미), 즉 지구에서 가장 퍼런 숲, 삼림",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 22
   },
   {
    "day": 25,
    "word": "upper",
    "pron": "[ʌ́pər]",
    "pos": "a.",
    "meaning": "위쪽의, 더 위에 있는",
    "tip": "up(위에) + per: 위쪽의, 더 위에 있는",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 23
   },
   {
    "day": 25,
    "word": "pronunciation",
    "pron": "[prənʌ̀nsiéiʃən]",
    "pos": "n.",
    "meaning": "발음",
    "tip": "혀를 안으로 풀어 넌시(넣듯이) 'A(에이)'를 션하게(시원하게) 발음하셔.",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 24
   },
   {
    "day": 25,
    "word": "penny",
    "pron": "[péni]",
    "pos": "n.",
    "meaning": "(영국의 화폐 단위) 페니",
    "tip": "1페니는 1파운드의 100분의 1이다.",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "pence",
      "pos": "",
      "meaning": "penny의 복수형"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 25
   },
   {
    "day": 25,
    "word": "penniless",
    "pron": "[pénilis]",
    "pos": "a.",
    "meaning": "무일푼의",
    "tip": "penny(1페니) + less(~없는): 1페니도 없는, 즉 무일푼의",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 26
   },
   {
    "day": 25,
    "word": "nearby",
    "pron": "[nìərbái]",
    "pos": "a.",
    "meaning": "가까운, 가까이의",
    "tip": "near(가까운) + by(옆에): 가까운, 가까이의",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 27
   },
   {
    "day": 25,
    "word": "ferry",
    "pron": "[féri]",
    "pos": "n. v.",
    "meaning": "여객선 / 나르다",
    "tip": "여객선 중에는 카페리호 등과 같이 '~훼리(페리)호'란 이름이 많다. 그리고 ferry(여객선)으로 승객을 나르다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 28
   },
   {
    "day": 25,
    "word": "receipt",
    "pron": "[risí:t]",
    "pos": "n.",
    "meaning": "받기, 수령, 영수증",
    "tip": "receive(받다)의 명사형",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 29
   }
  ]
 },
 {
  "day": 26,
  "title": "26강",
  "words": [
   {
    "day": 26,
    "word": "instruct",
    "pron": "[instrʌ́kt]",
    "pos": "v.",
    "meaning": "가르치다, 지시하다",
    "tip": "트럭 ins(안에서) 트럭 운전을 가르치다, 지시하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "instruction",
      "pos": "",
      "meaning": "가르침, 교육, 지시"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 1
   },
   {
    "day": 26,
    "word": "invest",
    "pron": "[invést]",
    "pos": "v.",
    "meaning": "투자하다",
    "tip": "우리나라 in(안에서) best(최고의) 회사인 삼성 주식에 투자하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "investment",
      "pos": "",
      "meaning": "투자"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 2
   },
   {
    "day": 26,
    "word": "income",
    "pron": "[ínkʌm]",
    "pos": "n.",
    "meaning": "수입, 소득",
    "tip": "내 주머니 in(안으로) come(들어오는) 돈, 즉 수입, 소득",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 3
   },
   {
    "day": 26,
    "word": "install",
    "pron": "[instɔ́:l]",
    "pos": "v.",
    "meaning": "(장비·장치 등을) 설치하다",
    "tip": "방 ins(안에) tall(큰) 크리스마스트리를 설치하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 4
   },
   {
    "day": 26,
    "word": "insert",
    "pron": "[insɔ́:rt]",
    "pos": "v.",
    "meaning": "삽입하다, 끼워 넣다",
    "tip": "샌드위치 빵 in(안에) 썰은 two(2)개의 토마토를 삽입하다, 끼워 넣다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 5
   },
   {
    "day": 26,
    "word": "ingredient",
    "pron": "[ingrí:diənt]",
    "pos": "n.",
    "meaning": "성분, 재료",
    "tip": "동전 in(안에) 들어있는 구리 성분, 재료",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 6
   },
   {
    "day": 26,
    "word": "insult",
    "pron": "[ínsʌlt] / [insʌ́lt]",
    "pos": "n. v.",
    "meaning": "모욕 / 모욕하다",
    "tip": "\"쟤 배 in(안에) 살 좀 봐\" 하며 침을 투! 뱉으며 모욕, 모욕하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 7
   },
   {
    "day": 26,
    "word": "infect",
    "pron": "[infékt]",
    "pos": "v.",
    "meaning": "감염시키다, 전염시키다",
    "tip": "몸 in(안으로) 팩! two(2)개의 병균이 침투하여 감염시키다, 전염시키다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "infection",
      "pos": "",
      "meaning": "전염, 감염"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 8
   },
   {
    "day": 26,
    "word": "instrument",
    "pron": "[ínstrəmənt]",
    "pos": "n.",
    "meaning": "1 기계, 기구 2 악기",
    "tip": "피리 같은 악기를 만들 때 기계, 기구로 대나무 ins(안)을 뚫으려는 구멍이 많다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 9
   },
   {
    "day": 26,
    "word": "insect",
    "pron": "[ínsekt]",
    "pos": "n.",
    "meaning": "벌레, 곤충",
    "tip": "코 in(안으로) 쌕! 들어오는 하루살이와 같은 벌레, 곤충",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 10
   },
   {
    "day": 26,
    "word": "indeed",
    "pron": "[indí:d]",
    "pos": "ad.",
    "meaning": "참으로, 정말로",
    "tip": "공부 안 한 것 같다는 엄마의 말에 참으로! 정말로! 방 in(안에서) 공부 did!(했어요!)",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 11
   },
   {
    "day": 26,
    "word": "invade",
    "pron": "[invéid]",
    "pos": "v.",
    "meaning": "침략하다, 침입하다",
    "tip": "나라 in(안으로) 들어와 칼로 베이드(베다), 즉 침략하다, 침입하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "invasion",
      "pos": "",
      "meaning": "침입, 침략"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 12
   },
   {
    "day": 26,
    "word": "insist",
    "pron": "[insíst]",
    "pos": "v.",
    "meaning": "주장하다, 고집하다",
    "tip": "씻으라는 말에 \"in(not: 안) 씻으!(씻어!)\" 하고 침을 투! 뱉으며 씻지 않겠다고 주장하다, 고집하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 13
   },
   {
    "day": 26,
    "word": "internal",
    "pron": "[intɔ́:rnl]",
    "pos": "a.",
    "meaning": "내부의",
    "tip": "in(안으로) 터널에 들어간, 즉 터널 내부의",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 14
   },
   {
    "day": 26,
    "word": "inner",
    "pron": "[ínər]",
    "pos": "a.",
    "meaning": "안쪽의, 내적인",
    "tip": "in(~ 안에) + ner: 안에 있는, 즉 안쪽의, 내적인",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 15
   },
   {
    "day": 26,
    "word": "subject",
    "pron": "[sʌ́bdʒikt]",
    "pos": "n.",
    "meaning": "1 (실험) 대상, 피실험자 2 과목 3 주제",
    "tip": "현미경 sub(밑에서) 주사를 찍! 하고 맞는 쥐와 같은 (실험) 대상, 피실험자. 이러한 \"쥐의 해부\"가 오늘 생물 과목 시간의 주제",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 16
   },
   {
    "day": 26,
    "word": "substance",
    "pron": "[sʌ́bstəns]",
    "pos": "n.",
    "meaning": "1 물질 2 본질, 실체",
    "tip": "고대 집터 sub(아래에) 주춧돌인 stones(돌들)만 남아있다, 즉 남아있는 돌들은 물질, 집의 본질, 실체",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "substantial",
      "pos": "",
      "meaning": "본질적인, 상당한"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 17
   },
   {
    "day": 26,
    "word": "submit",
    "pron": "[səbmít]",
    "pos": "v.",
    "meaning": "제출하다",
    "tip": "sub(아래) 밑바닥 점수 받은 학생들이 선생님께 반성문을 제출하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 18
   },
   {
    "day": 26,
    "word": "combat",
    "pron": "[@kάmbæt] / [kɔ́mbæt]",
    "pos": "n. v.",
    "meaning": "전투, 싸움 / 싸우다",
    "tip": "com(함께) 침을 뱉으며 싸움, 전투",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 19
   },
   {
    "day": 26,
    "word": "comply",
    "pron": "[kəmplái]",
    "pos": "v.",
    "meaning": "따르다, 순응하다",
    "tip": "기러기들이 대장 새 뒤를 com(함께) fly(날면서) 따르다, 순응하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 20
   },
   {
    "day": 26,
    "word": "conform",
    "pron": "[kənfɔ́:rm]",
    "pos": "v.",
    "meaning": "따르다, 순응하다",
    "tip": "에어로빅 수강생들이 con(함께) 선생님 폼을 따르다, 순응하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 21
   },
   {
    "day": 26,
    "word": "compound",
    "pron": "[kάmpaund]",
    "pos": "a. n.",
    "meaning": "혼합한 / 혼합물",
    "tip": "com(함께) 몇 파운드씩 합하여 혼합한, 혼합물",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 22
   },
   {
    "day": 26,
    "word": "companion",
    "pron": "[kəmpǽnjən]",
    "pos": "n.",
    "meaning": "친구, 동료",
    "tip": "com(함께) 패거리를 이루는 녀(여자)들, 즉 친구, 동료",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 23
   },
   {
    "day": 26,
    "word": "committee",
    "pron": "[kəmíti]",
    "pos": "n.",
    "meaning": "위원회",
    "tip": "com(함께) 미티(미팅)하여 회의하는 위원회",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 24
   },
   {
    "day": 26,
    "word": "collaborate",
    "pron": "[kəlǽbərèit]",
    "pos": "v.",
    "meaning": "공동으로 작업하다, 협력하다",
    "tip": "col(함께) labor(노동) ate(하다), 즉 공동으로 작업하다, 협력하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 25
   },
   {
    "day": 26,
    "word": "competition",
    "pron": "[@kὰmpətíʃən] / [kɔ̀mpətíʃən]",
    "pos": "n.",
    "meaning": "경쟁, 시합",
    "tip": "경쟁, 시합하느라 com(함께) 피 튀션(튀셔).",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "compete",
      "pos": "",
      "meaning": "경쟁하다, 겨루다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 26
   },
   {
    "day": 26,
    "word": "competence",
    "pron": "[@kǽmpitəns] / [kɔ́mpitəns]",
    "pos": "n.",
    "meaning": "능숙함, 능숙",
    "tip": "컴퓨턴(컴퓨터는) 수우미양가 중에 수를 맞을 정도로 능숙함, 능숙",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "competent",
      "pos": "",
      "meaning": "유능한"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 27
   }
  ]
 },
 {
  "day": 27,
  "title": "27강",
  "words": [
   {
    "day": 27,
    "word": "retire",
    "pron": "[ritáiər]",
    "pos": "v.",
    "meaning": "은퇴하다",
    "tip": "re(뒤로) 물러나갔어, 나이 들어 tired(피곤해), 즉 은퇴하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "retirement",
      "pos": "",
      "meaning": "은퇴"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 1
   },
   {
    "day": 27,
    "word": "restore",
    "pron": "[ristɔ́ːr]",
    "pos": "v.",
    "meaning": "회복시키다, 복구하다",
    "tip": "지진으로 파괴되었지만 re(다시) store(가게)를 회복시키다, 복구하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 2
   },
   {
    "day": 27,
    "word": "relieve",
    "pron": "[rilíːv]",
    "pos": "v.",
    "meaning": "구제하다, (고통 등을) 덜어주다",
    "tip": "의사가 re(다시) live(살도록) 목숨을 구제하다, (고통을) 덜어주다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "relief",
      "pos": "",
      "meaning": "구제, (고통 등의) 경감, 안도"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 3
   },
   {
    "day": 27,
    "word": "repair",
    "pron": "[ripέər]",
    "pos": "v.",
    "meaning": "고치다, 수리하다",
    "tip": "re(다시) 자동차의 패어 있는 곳을 원상태로 고치다, 수리하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 4
   },
   {
    "day": 27,
    "word": "resource",
    "pron": "[ríːsɔːrs]",
    "pos": "n.",
    "meaning": "자원",
    "tip": "재활용하여 re(다시) 썼수, 자원을",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 5
   },
   {
    "day": 27,
    "word": "restrict",
    "pron": "[ristríkt]",
    "pos": "v.",
    "meaning": "제한하다, 금지하다",
    "tip": "우범지역인 re(뒤의) street(거리)는 접근을 제한하다, 금지하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "restriction",
      "pos": "",
      "meaning": "제한, 금지"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 6
   },
   {
    "day": 27,
    "word": "recycle",
    "pron": "[riːsáikl]",
    "pos": "v.",
    "meaning": "재활용하다",
    "tip": "빈 병과 같은 쓰레기를 re(다시) cycle(순환)시키다, 즉 재활용하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "recycling",
      "pos": "",
      "meaning": "재활용"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 7
   },
   {
    "day": 27,
    "word": "remarkable",
    "pron": "[rimáːrkəbl]",
    "pos": "a.",
    "meaning": "주목할 만한, 놀라운",
    "tip": "re(다시) 또 별표 mark(마크)를 able(할 만한), 즉 주목할 만한, 놀라운 뉴스",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "remarkably",
      "pos": "",
      "meaning": "두드러지게, 몹시"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 8
   },
   {
    "day": 27,
    "word": "remark",
    "pron": "[rimáːrk]",
    "pos": "n.",
    "meaning": "말, 논평 v. 말하다, 논평하다",
    "tip": "나가 말을 크게 하여 말하다, 논평하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 9
   },
   {
    "day": 27,
    "word": "reserve",
    "pron": "[rizɔ́ːrv]",
    "pos": "v.",
    "meaning": "¹ 예약하다 ² 따로 남겨두다",
    "tip": "re(뒤에) 있는 페이지를 접어 다음에 읽을 부분으로 예약하다, 따로 남겨두다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "reservation",
      "pos": "",
      "meaning": "예약"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 10
   },
   {
    "day": 27,
    "word": "reward",
    "pron": "[riwɔ́ːrd]",
    "pos": "n.",
    "meaning": "보상 v. 보상하다, 보답하다",
    "tip": "re(뒤로) 되감아 워드를 쳐준 대가를 돈으로 보상, 보상하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 11
   },
   {
    "day": 27,
    "word": "resign",
    "pron": "[rizáin]",
    "pos": "v.",
    "meaning": "사직하다, 사임하다",
    "tip": "re(뒤로) 물러나겠다고 사직서에 sign(사인하다), 즉 사직하다, 사임하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 12
   },
   {
    "day": 27,
    "word": "rely",
    "pron": "[rilái]",
    "pos": "v.",
    "meaning": "의지하다, 믿다",
    "tip": "아기가 엄마 등 re(뒤에) lie(누워) 엄마를 의지하다, 믿다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "rely on",
      "pos": "",
      "meaning": "~에 의지하다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 13
   },
   {
    "day": 27,
    "word": "reverse",
    "pron": "[rivɔ́ːrs]",
    "pos": "a.",
    "meaning": "반대의 n. 반대 v. 반대로 하다",
    "tip": "우리 집 방향과 반대의 방향인 re(뒤로) 가는 버스",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 14
   },
   {
    "day": 27,
    "word": "reflect",
    "pron": "[riflékt]",
    "pos": "v.",
    "meaning": "¹ 반사하다 ² 반영하다 ³ 심사숙고하다",
    "tip": "re(다시) 플래 two(2)번 문제를! re(다시) 플래 two(2)번 문제를! 시험지를 풀어보랬더니, 시험문제를 틀렸다고 반사하다, 학생은 다른 공식을 반영하다, 다시 풀려고 심사숙고하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 15
   },
   {
    "day": 27,
    "word": "regal",
    "pron": "[ríːgəl]",
    "pos": "a.",
    "meaning": "국왕의, 장엄한",
    "tip": "독재국가 집집마다 re(뒤에) 벽에 걸어놓은 장엄한, 국왕의 사진",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 16
   },
   {
    "day": 27,
    "word": "replace",
    "pron": "[ripléis]",
    "pos": "v.",
    "meaning": "~을 대신하다, 대체하다",
    "tip": "김부장이 은퇴한 후 re(다시) 그 place(자리)를 이부장이 대신하다, 대체하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 17
   },
   {
    "day": 27,
    "word": "refund",
    "pron": "[riːfʌnd]",
    "pos": "n.",
    "meaning": "환불 v. 환불하다",
    "tip": "re(뒤로) 되돌려 fund(펀드, 자금)을 주다, 즉 환불, 환불하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 18
   },
   {
    "day": 27,
    "word": "republic",
    "pron": "[ripʌblik]",
    "pos": "n.",
    "meaning": "공화국",
    "tip": "re(뒤에서) public(대중)이 함께 화합하여 받쳐주는 나라, 즉 공화국",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 19
   },
   {
    "day": 27,
    "word": "employ",
    "pron": "[implɔ́i]",
    "pos": "v.",
    "meaning": "고용하다",
    "tip": "이 방 em(안에) 짐을 플로이(풀러) 놓고 당장 일해! 하고 식당 종업원으로 고용하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "employer",
      "pos": "",
      "meaning": "고용주"
     },
     {
      "word": "employee",
      "pos": "",
      "meaning": "피고용인, 종업원 (-ee: 피~)"
     },
     {
      "word": "unemployment",
      "pos": "",
      "meaning": "실업, 실직"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 20
   },
   {
    "day": 27,
    "word": "envelope",
    "pron": "[énvəlòup] [énvəlóup]",
    "pos": "n.",
    "meaning": "봉투",
    "tip": "en(안을) 벌렁(벌려) 서류를 넣는 봉투",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 21
   },
   {
    "day": 27,
    "word": "empire",
    "pron": "[émpaiər]",
    "pos": "n.",
    "meaning": "제국, 왕국",
    "tip": "1. 네로황제 시절 성 em(안에서) fire(불)이 타고 있던 로마 제국, 왕국 2. 미국의 엠파이어 스테이트 빌딩은 하나의 제국, 왕국과 같이 높고 크다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 22
   },
   {
    "day": 27,
    "word": "entire",
    "pron": "[intáiər]",
    "pos": "a.",
    "meaning": "완전한, 전체의",
    "tip": "자동차 타이어 en(안에) 공기가 완전한, 전체 가득한",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "entirely",
      "pos": "",
      "meaning": "완전히"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 23
   },
   {
    "day": 27,
    "word": "environment",
    "pron": "[inváiərənmənt]",
    "pos": "n.",
    "meaning": "환경",
    "tip": "이 마을 en(안에) 바위, 논이 많다, 즉 그 마을의 주변 환경",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "environmental",
      "pos": "",
      "meaning": "환경의, 주위의"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 24
   },
   {
    "day": 27,
    "word": "encourage",
    "pron": "[inkə́ːridʒ]",
    "pos": "v.",
    "meaning": "용기를 북돋우다",
    "tip": "en(동사를 만드는 접두어) + courage(용기): 용기를 북돋우다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 25
   },
   {
    "day": 27,
    "word": "enable",
    "pron": "[inéibl]",
    "pos": "v.",
    "meaning": "~할 수 있게 하다",
    "tip": "en(동사를 만드는 접두어) + able(~할 수 있는): ~할 수 있게 하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 26
   },
   {
    "day": 27,
    "word": "enforce",
    "pron": "[infɔ́ːrs]",
    "pos": "v.",
    "meaning": "강요하다",
    "tip": "en(동사를 만드는 접두어) + force(힘): 힘으로 ~하게 하다, 즉 강요하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 27
   },
   {
    "day": 27,
    "word": "ensure",
    "pron": "[inʃúər]",
    "pos": "v.",
    "meaning": "반드시 ~하게 하다, 보장하다",
    "tip": "en(동사를 만드는 접두어) + sure(확신하는): 반드시 ~하게 하다, 보장하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 28
   }
  ]
 },
 {
  "day": 28,
  "title": "28강",
  "words": [
   {
    "day": 28,
    "word": "prevent",
    "pron": "[privént]",
    "pos": "v.",
    "meaning": "막다, 방해하다",
    "tip": "횡단보도에서 아이들을 보호하기 위해 pre(앞에서) 벤츠 자동차를 막다, 방해하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "prevent A from -ing",
      "pos": "",
      "meaning": "A가 ~하는 것을 막다, 방해하다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 1
   },
   {
    "day": 28,
    "word": "previous",
    "pron": "[príːviəs]",
    "pos": "a.",
    "meaning": "이전의, 앞의",
    "tip": "\"밥그릇을 언제 비웠어?\" \"벌써 이전에 너보다 pre(먼저) 비웠수. 난 금방 먹거든.\"",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "previously",
      "pos": "",
      "meaning": "이전에, 미리"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 2
   },
   {
    "day": 28,
    "word": "prefer",
    "pron": "[prifə́ːr]",
    "pos": "v.",
    "meaning": "~을 더 좋아하다",
    "tip": "뷔페에서 다른 음식들보다 pre(먼저) 퍼 담을 정도로 그 음식을 더 좋아하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "prefer A to B",
      "pos": "",
      "meaning": "B보다 A를 더 좋아하다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 3
   },
   {
    "day": 28,
    "word": "preferable",
    "pron": "[préfərəbl]",
    "pos": "a.",
    "meaning": "더 좋은, 더 나은",
    "tip": "prefer(더 좋아하다) + able(~할 만한): 사람들이 더 좋아할 만한, 즉 더 좋은, 더 나은",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 4
   },
   {
    "day": 28,
    "word": "prejudice",
    "pron": "[prédʒudis]",
    "pos": "n.",
    "meaning": "선입관, 편견",
    "tip": "pre(미리) + jud(→ judge: 판단하다) + ice(명사형 어미): 선입관, 편견",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 5
   },
   {
    "day": 28,
    "word": "extent",
    "pron": "[ikstént]",
    "pos": "n.",
    "meaning": "범위, 정도, 넓이",
    "tip": "ex(밖으로) ten(10) 미터의 범위, 정도, 넓이",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "extend",
      "pos": "",
      "meaning": "넓히다, 늘리다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 6
   },
   {
    "day": 28,
    "word": "enormous",
    "pron": "[inɔ́ːrməs]",
    "pos": "a.",
    "meaning": "거대한, 엄청난",
    "tip": "홍수로 인하여 댐 e(밖으로) 물이 넘었수! 거대한, 엄청난 물",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "enormously",
      "pos": "",
      "meaning": "엄청나게"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 7
   },
   {
    "day": 28,
    "word": "expand",
    "pron": "[ikspǽnd]",
    "pos": "v.",
    "meaning": "확대되다, 확대시키다, 팽창시키다",
    "tip": "케이팝 가수들이 우리나라 ex(밖으로) 팬들을 확대시키다, 팽창시키다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "expansion",
      "pos": "",
      "meaning": "확대, 확장, 팽창"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 8
   },
   {
    "day": 28,
    "word": "explode",
    "pron": "[iksplóud]",
    "pos": "v.",
    "meaning": "폭발하다, 터지다",
    "tip": "테러범이 보낸 소포를 ex(밖으로) 풀러두(풀러도) 폭발하다, 터지다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "explosion",
      "pos": "",
      "meaning": "폭발, 파열"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 9
   },
   {
    "day": 28,
    "word": "exposure",
    "pron": "[ikspóuʒər]",
    "pos": "n.",
    "meaning": "드러냄, 폭로",
    "tip": "비밀이 ex(밖으로) 퍼져나가게 비밀을 드러냄, 폭로",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "expose",
      "pos": "",
      "meaning": "드러내다, 폭로하다"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 10
   },
   {
    "day": 28,
    "word": "evaluate",
    "pron": "[ivǽljuèit]",
    "pos": "v.",
    "meaning": "평가하다",
    "tip": "e(밖으로) 어떤 것의 value(가치)를 드러내다, 즉 평가하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 11
   },
   {
    "day": 28,
    "word": "overwhelm",
    "pron": "[òuvərhwélm]",
    "pos": "v.",
    "meaning": "압도하다",
    "tip": "내 over(위에서) 혀를 웰름(낼름)거리는 커다란 뱀이 나를 압도하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 12
   },
   {
    "day": 28,
    "word": "overcome",
    "pron": "[òuvərkʌ́m]",
    "pos": "v.",
    "meaning": "극복하다 (overcome-overcame-overcome)",
    "tip": "어려운 고비 등을 over(~ 위로 넘어) come(오다), 즉 극복하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 13
   },
   {
    "day": 28,
    "word": "overhear",
    "pron": "[òuvərhíər]",
    "pos": "v.",
    "meaning": "엿듣다 (overhear-overheard-overheard)",
    "tip": "담을 over(~을 넘어서) hear(듣다), 즉 엿듣다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 14
   },
   {
    "day": 28,
    "word": "overnight",
    "pron": "[òuvərnáit]",
    "pos": "ad.",
    "meaning": "밤사이에, 하룻밤 사이에",
    "tip": "over(~에 걸쳐서) + night(밤): 밤사이에, 하룻밤 사이에",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 15
   },
   {
    "day": 28,
    "word": "overflow",
    "pron": "[òuvərflóu]",
    "pos": "v.",
    "meaning": "넘쳐흐르다, 넘치다 n. 넘침",
    "tip": "over(~을 넘어) + flow(흐르다): 넘쳐흐르다, 넘치다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 16
   },
   {
    "day": 28,
    "word": "overall",
    "pron": "[óuvərɔ̀ːl]",
    "pos": "ad.",
    "meaning": "전체적으로 a. 전체적인",
    "tip": "all(모든) 것에 over(걸쳐서), 즉 전체적으로, 전체적인",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 17
   },
   {
    "day": 28,
    "word": "overweight",
    "pron": "[óuvərwèit]",
    "pos": "a.",
    "meaning": "과체중의, 비만의",
    "tip": "over(~ 이상의) + weight(무게): 과체중의, 비만의",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 18
   },
   {
    "day": 28,
    "word": "multiple",
    "pron": "[mʌ́ltəpl]",
    "pos": "a.",
    "meaning": "많은, 다양한",
    "tip": "들판의 multi(많은) 풀, 즉 많은, 다양한 풀",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 19
   },
   {
    "day": 28,
    "word": "multiply",
    "pron": "[mʌ́ltəplài]",
    "pos": "v.",
    "meaning": "증가시키다, 번식하다, 곱하다",
    "tip": "multi(많은) fly(파리)들이 알을 까서 증가시키다, 번식하다, 곱하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 20
   },
   {
    "day": 28,
    "word": "multiplex",
    "pron": "[mʌ́ltəplèks]",
    "pos": "n.",
    "meaning": "복합 상영관, 멀티플렉스",
    "tip": "multi(many) + plex: 많은 것들을 복합적으로 상영하는 곳, 즉 복합 상영관",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 21
   },
   {
    "day": 28,
    "word": "multimedia",
    "pron": "[mʌ̀ltimíːdiə]",
    "pos": "n.",
    "meaning": "멀티미디어, 다중매체",
    "tip": "multi(많은) + media(매체): 다중매체",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 22
   },
   {
    "day": 28,
    "word": "multitude",
    "pron": "[mʌ́ltətjùːd]",
    "pos": "n.",
    "meaning": "다수, 군중",
    "tip": "multi(many) + tude(명사형 어미): 많은 것들, 즉 다수, 군중",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 23
   },
   {
    "day": 28,
    "word": "biology",
    "pron": "[baiálədʒi]",
    "pos": "n.",
    "meaning": "생물학",
    "tip": "bio(life) + ology(~학, ~론): 생명체에 대한 학문, 즉 생물학",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 24
   },
   {
    "day": 28,
    "word": "psychology",
    "pron": "[saikálədʒi]",
    "pos": "n.",
    "meaning": "심리학",
    "tip": "psycho(mind를 뜻하는 접두어) + logy(~학, ~론): 심리학",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 25
   },
   {
    "day": 28,
    "word": "geology",
    "pron": "[dʒiálədʒi]",
    "pos": "n.",
    "meaning": "지질학",
    "tip": "地(땅 지)에 대한 ology(~학, ~론), 즉 지질학",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 26
   },
   {
    "day": 28,
    "word": "sociology",
    "pron": "[sòusiálədʒi]",
    "pos": "n.",
    "meaning": "사회학",
    "tip": "social(사회의) + ology(~학, ~론): 사회학",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 27
   }
  ]
 },
 {
  "day": 29,
  "title": "29강",
  "words": [
   {
    "day": 29,
    "word": "underline",
    "pron": "[ʌ̀ndərláin]",
    "pos": "v.",
    "meaning": "밑줄을 긋다, 강조하다",
    "tip": "중요한 부분 글씨 under(밑에) line(선)을 긋다, 즉 밑줄을 긋다, 강조하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 1
   },
   {
    "day": 29,
    "word": "undertake",
    "pron": "[ʌ̀ndərtéik]",
    "pos": "v.",
    "meaning": "떠맡다, 착수하다 (undertake-undertook-undertaken)",
    "tip": "under(아랫)사람이 윗분의 일을 take(취하여) 떠맡다, 그 일을 착수하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 2
   },
   {
    "day": 29,
    "word": "undergo",
    "pron": "[ʌ̀ndərgóu]",
    "pos": "v.",
    "meaning": "(안 좋은 일 등을) 겪다, (수술 등을) 받다 (unergo-underwent-undergone)",
    "tip": "안 좋은 상황 under(아래로) go(지나가다), 즉 그 일을 겪다, 받다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 3
   },
   {
    "day": 29,
    "word": "underground",
    "pron": "[ʌ̀ndərgráund]",
    "pos": "a.",
    "meaning": "지하의 ad. 지하에(서) n. 지하",
    "tip": "under(아래에) + ground(땅): 지하의, 지하",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 4
   },
   {
    "day": 29,
    "word": "underneath",
    "pron": "[ʌ̀ndərníːθ]",
    "pos": "ad.",
    "meaning": "아래에, 밑에 prep. ~의 아래[밑]에",
    "tip": "under(아래에) 있는 지하실 공간을 니가 쓰세요, 즉 아래에, 밑에",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 5
   },
   {
    "day": 29,
    "word": "toward",
    "pron": "[tɔːrd]",
    "pos": "prep.",
    "meaning": "~쪽으로, ~을 향하여",
    "tip": "to(~쪽으로) + ward(쪽으로): ~쪽으로, ~을 향하여",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 6
   },
   {
    "day": 29,
    "word": "upward",
    "pron": "[ʌ́pwə̀rd]",
    "pos": "ad.",
    "meaning": "위로, 위로 향한",
    "tip": "up(위에) + ward(쪽으로): 위로, 위로 향한",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 7
   },
   {
    "day": 29,
    "word": "downward",
    "pron": "[dáunwə̀rd]",
    "pos": "ad.",
    "meaning": "아래쪽으로, 아래로 향한",
    "tip": "down(아래로) + ward(쪽으로): 아래쪽으로, 아래로 향한",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 8
   },
   {
    "day": 29,
    "word": "forward",
    "pron": "[fɔ́ːrwə̀rd]",
    "pos": "ad.",
    "meaning": "앞으로, 전방으로",
    "tip": "for(fore: before를 뜻하는 접두어) + ward(쪽으로): 앞으로, 전방으로",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 9
   },
   {
    "day": 29,
    "word": "outstanding",
    "pron": "[àutstǽndiŋ]",
    "pos": "a.",
    "meaning": "눈에 확 띄는, 뛰어난",
    "tip": "남들보다 out(밖으로) standing(서 있는), 즉 눈에 확 띄는, 뛰어난",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 10
   },
   {
    "day": 29,
    "word": "outbreak",
    "pron": "[áutbrèik]",
    "pos": "n.",
    "meaning": "(전쟁·질병 등의) 발생, 발발",
    "tip": "잠재해 있던 것이 세상 out(밖으로) break(깨고) 나옴, 즉 (전쟁·질병 등의) 발생, 발발",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 11
   },
   {
    "day": 29,
    "word": "outcome",
    "pron": "[áutkʌ̀m]",
    "pos": "n.",
    "meaning": "결과, 성과",
    "tip": "안에서 작업하여 out(밖으로) come(나온) 결과, 성과",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 12
   },
   {
    "day": 29,
    "word": "output",
    "pron": "[áutpùt]",
    "pos": "n.",
    "meaning": "생산, 출력, 생산량",
    "tip": "기계가 생산한 물건을 out(밖으로) put(내놓다), 즉 생산, 출력",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "input",
      "pos": "",
      "meaning": "투입, 입력"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 13
   },
   {
    "day": 29,
    "word": "sensitive",
    "pron": "[sénsətiv]",
    "pos": "a.",
    "meaning": "민감한, 예민한",
    "tip": "옆방에서 리모컨을 켜도 센서가 작동하는 TV, 즉 민감한, 예민한 TV",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 14
   },
   {
    "day": 29,
    "word": "sensation",
    "pron": "[senséiʃən]",
    "pos": "n.",
    "meaning": "¹ 감각, 느낌 ² 센세이션, 대사건",
    "tip": "sens(느낌)이 쎄이션(쎄다), 즉 쎈 감각, 느낌",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 15
   },
   {
    "day": 29,
    "word": "sensible",
    "pron": "[sénsəbl]",
    "pos": "a.",
    "meaning": "분별 있는, 현명한",
    "tip": "옳고 그름을 sens(느낄) ible(수 있는), 즉 분별 있는, 현명한",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 16
   },
   {
    "day": 29,
    "word": "consent",
    "pron": "[kənsént]",
    "pos": "n.",
    "meaning": "동의 v. 동의하다",
    "tip": "어떤 의견에 con(같이) sent(느끼다), 즉 동의, 동의하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 17
   }
  ]
 },
 {
  "day": 30,
  "title": "30강",
  "words": [
   {
    "day": 30,
    "word": "respect",
    "pron": "[rispékt]",
    "pos": "v.",
    "meaning": "존경하다",
    "tip": "너무나 훌륭한 사람이라 감히 앞에서 못보고 re(뒤에서) spect(볼) 정도로 존경하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "respectful",
      "pos": "",
      "meaning": "공손한, 정중한"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 1
   },
   {
    "day": 30,
    "word": "specific",
    "pron": "[spəsífik]",
    "pos": "a.",
    "meaning": "구체적인, 명확한",
    "tip": "1. 숲에서 픽! 눈에 띄는 호랑이의 구체적인, 명확한 줄무늬 2. 눈에 픽! 하고 spec(i)(보일) 정도로 구체적인, 명확한",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 2
   },
   {
    "day": 30,
    "word": "aspect",
    "pron": "[ǽspekt]",
    "pos": "n.",
    "meaning": "측면, 양상",
    "tip": "1. 애의 입장에서 spect(바라보는) 측면, 사태의 양상 2. 사물이나 상황을 a(~쪽으로) spect(바라보는) 방향, 즉 측면, 양상",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 3
   },
   {
    "day": 30,
    "word": "prospect",
    "pron": "[@práspekt] [@prɔ́spekt]",
    "pos": "n.",
    "meaning": "가망, 전망",
    "tip": "pro(forward) + spect(look): 앞으로 내다보는 것, 즉 가망, 전망",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 4
   },
   {
    "day": 30,
    "word": "spectacle",
    "pron": "[spéktəkl]",
    "pos": "n.",
    "meaning": "광경, 구경거리",
    "tip": "spect(볼)만한 광경, 구경거리",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 5
   },
   {
    "day": 30,
    "word": "geography",
    "pron": "[dʒiágrəfi]",
    "pos": "n.",
    "meaning": "지리, 지리학",
    "tip": "1. 지하와 지상을 graph(그래프)로 그려 연구하는 지리, 지리학 2. geo(earth: 땅)에 대해 graph(쓴) 지리, 지리학",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 6
   },
   {
    "day": 30,
    "word": "biography",
    "pron": "[baiágrəfi]",
    "pos": "n.",
    "meaning": "전기, 일대기",
    "tip": "사람의 bio(life: 삶)에 관해 graph(쓴) 것, 즉 전기, 일대기",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 7
   },
   {
    "day": 30,
    "word": "telegraph",
    "pron": "[téligræf]",
    "pos": "n.",
    "meaning": "전보 v. 전보를 보내다",
    "tip": "tele(away: 먼) 곳으로 graph(써서) 보내는 전보",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 8
   },
   {
    "day": 30,
    "word": "paragraph",
    "pron": "[pǽrəgræf]",
    "pos": "n.",
    "meaning": "(문장의) 절, 단락",
    "tip": "빼라! graph(쓴) 글에서 한 절, 단락을",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 9
   },
   {
    "day": 30,
    "word": "emit",
    "pron": "[imít]",
    "pos": "v.",
    "meaning": "(소리·빛·열 등을) 내다, 발산하다",
    "tip": "태양이 e(밖으로) 빛과 열을 mit(보내다), 즉 (빛·열 등을) 내다, 발산하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "emission",
      "pos": "",
      "meaning": "(소리·빛·열 등의) 배출, 배기가스"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 10
   },
   {
    "day": 30,
    "word": "transmit",
    "pron": "[trænsmít]",
    "pos": "v.",
    "meaning": "보내다, 전송하다",
    "tip": "국경을 trans(가로질러) 수출품을 mit(보내다), 즉 보내다, 전송하다",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "transmission",
      "pos": "",
      "meaning": "전송"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 11
   },
   {
    "day": 30,
    "word": "dismiss",
    "pron": "[dismís]",
    "pos": "v.",
    "meaning": "¹ 해고하다 ² 해산시키다 ³ 묵살하다, 일축하다",
    "tip": "왕이 충언을 하는 신하들을 dis(멀리) 귀양을 miss(보내다), 즉 해고하다, 해산시키다, 충언을 묵살하다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 12
   },
   {
    "day": 30,
    "word": "gender",
    "pron": "[dʒéndər]",
    "pos": "n.",
    "meaning": "성(性), 성별",
    "tip": "1. 남자 아이 고추를 보고 잰 더 뭐가 달렸네, 즉 성, 성별 2. gen(birth) + der: 태어날 때 갖고 태어나는 것, 즉 성별",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 13
   },
   {
    "day": 30,
    "word": "gene",
    "pron": "[dʒiːn]",
    "pos": "n.",
    "meaning": "유전자",
    "tip": "gen(태어날) 때 가지고 태어나는 유전자",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 14
   },
   {
    "day": 30,
    "word": "genetics",
    "pron": "[dʒənétiks]",
    "pos": "n.",
    "meaning": "유전학",
    "tip": "gene(유전자) + tics(학문에 붙이는 접미어): 유전학",
    "tipLabel": "💡 연상",
    "derivatives": [
     {
      "word": "genetic",
      "pos": "",
      "meaning": "유전의, 유전학의"
     }
    ],
    "examples": [],
    "quiz": null,
    "no": 15
   },
   {
    "day": 30,
    "word": "generate",
    "pron": "[dʒènəréit]",
    "pos": "v.",
    "meaning": "발생시키다, 일으키다",
    "tip": "gen(태어나게) ate(하다), 즉 발생시키다, 일으키다",
    "tipLabel": "💡 연상",
    "derivatives": [],
    "examples": [],
    "quiz": null,
    "no": 16
   }
  ]
 }
];
