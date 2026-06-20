// 레전드 영어 필수단어 (랭귀지북스) — 테마별 필수 어휘 (Unit 01~33, 2776단어)
// 단어+한글발음+품사+뜻+예문+tip (본문 PDF p17~316, 유닛 내 중복 제거).
const VOCAB_LEGEND = [
 {
  "day": 1,
  "title": "Unit 01. 소개",
  "words": [
   {
    "word": "introduce",
    "pron": "인츠러듀-(ㅆ)",
    "pos": "v.",
    "meaning": "소개하다",
    "examples": [
     {
      "en": "Let me introduce myself.",
      "ko": "제 소개를 하겠습니다."
     }
    ],
    "tip": "",
    "no": 1,
    "day": 1
   },
   {
    "word": "name",
    "pron": "네임",
    "pos": "n.",
    "meaning": "이름",
    "examples": [
     {
      "en": "May I have your name?",
      "ko": "성함이 어떻게 되세요?"
     },
     {
      "en": "Gina is my first name.",
      "ko": "이름은 지나입니다."
     },
     {
      "en": "Kim is my last name.",
      "ko": "김은 성입니다."
     }
    ],
    "tip": "영어권 이름에는 우리 이름에 없는 middle name이 있는 경우가 있는데, 이는 우리가 말하는 성과 이름을 제외한 중간에 있는 이름을 가리킵니다. middle name은 하나인 경우도 있지만, 하나 이상인 경우도 있습니다.",
    "no": 2,
    "day": 1,
    "tipLabel": "💡 tip"
   },
   {
    "word": "first name",
    "pron": "퍼-슷 네임",
    "pos": "n.",
    "meaning": "(성과 중간 이름을 제외한) 이름",
    "examples": [],
    "tip": "",
    "no": 3,
    "day": 1
   },
   {
    "word": "middle name",
    "pron": "미들 네임",
    "pos": "n.",
    "meaning": "(성과 이름을 제외한) 중간 이름",
    "examples": [],
    "tip": "",
    "no": 4,
    "day": 1
   },
   {
    "word": "last name",
    "pron": "래슷 네임",
    "pos": "n.",
    "meaning": "성",
    "examples": [],
    "tip": "",
    "no": 5,
    "day": 1
   },
   {
    "word": "family name",
    "pron": "패멀리 네임",
    "pos": "n.",
    "meaning": "성",
    "examples": [],
    "tip": "",
    "no": 6,
    "day": 1
   },
   {
    "word": "nickname",
    "pron": "닉네임",
    "pos": "n.",
    "meaning": "별명",
    "examples": [],
    "tip": "",
    "no": 7,
    "day": 1
   },
   {
    "word": "business card",
    "pron": "비즈니(ㅅ) 카-(ㄷ)",
    "pos": "n.",
    "meaning": "명함",
    "examples": [
     {
      "en": "May I have your business card?",
      "ko": "명함 한 장 주시겠어요?"
     }
    ],
    "tip": "",
    "no": 8,
    "day": 1
   },
   {
    "word": "sex",
    "pron": "섹(ㅅ)",
    "pos": "n.",
    "meaning": "성별",
    "examples": [],
    "tip": "male이나 female은 동물을 연상시키므로, 서류 작성시 성별을 나타내는 경우 외에는 보통 man이나 woman이라고 합니다.",
    "no": 9,
    "day": 1,
    "tipLabel": "💡 tip"
   },
   {
    "word": "man",
    "pron": "맨",
    "pos": "n.",
    "meaning": "남자",
    "examples": [],
    "tip": "",
    "no": 10,
    "day": 1
   },
   {
    "word": "woman",
    "pron": "우먼",
    "pos": "n.",
    "meaning": "여자",
    "examples": [],
    "tip": "",
    "no": 11,
    "day": 1
   },
   {
    "word": "male",
    "pron": "메일",
    "pos": "n.",
    "meaning": "남자, 수컷 a. 남성의, 수컷의",
    "examples": [],
    "tip": "",
    "no": 12,
    "day": 1
   },
   {
    "word": "female",
    "pron": "피메일",
    "pos": "n.",
    "meaning": "여자, 암컷 a. 여성의, 암컷의",
    "examples": [],
    "tip": "",
    "no": 13,
    "day": 1
   },
   {
    "word": "guy",
    "pron": "가이",
    "pos": "n.",
    "meaning": "남자, 녀석",
    "examples": [
     {
      "en": "He's a stand-up guy.",
      "ko": "그는 믿을 만한 남자이다."
     }
    ],
    "tip": "guy는 비격식으로 쓰이는 말인데, guys라고 하면 남녀 모두에 쓰이기도 합니다.",
    "no": 14,
    "day": 1,
    "tipLabel": "💡 tip"
   },
   {
    "word": "mr.",
    "pron": "미스터",
    "pos": "n.",
    "meaning": "(남성의 성이나 이름 앞에 붙여) ~씨",
    "examples": [
     {
      "en": "Mr. Parker often speaks of you.",
      "ko": "파커 씨가 당신 이야기를 많이 했어요."
     }
    ],
    "tip": "",
    "no": 15,
    "day": 1
   },
   {
    "word": "ms.",
    "pron": "미(ㅈ)",
    "pos": "n.",
    "meaning": "(미혼인지 기혼인지 모르는 여성의 성이나 이름 앞에 붙여) ~씨",
    "examples": [
     {
      "en": "This is Ms. Jenny's phone.",
      "ko": "제니 씨의 전화입니다."
     }
    ],
    "tip": "여성의 경우만 결혼 여부를 밝히는 것이 성차별이라 해서, 최근에는 주로 Ms.를 사용하는 추세입니다.",
    "no": 16,
    "day": 1,
    "tipLabel": "💡 tip"
   },
   {
    "word": "mrs.",
    "pron": "미시(ㅈ)",
    "pos": "n.",
    "meaning": "(기혼 여성의 성이나 이름 앞에 붙여) ~씨",
    "examples": [],
    "tip": "",
    "no": 17,
    "day": 1
   },
   {
    "word": "miss",
    "pron": "미(ㅅ)",
    "pos": "n.",
    "meaning": "(미혼 여성이나 독신 여성의 성이나 이름 앞에 붙여) ~씨",
    "examples": [],
    "tip": "",
    "no": 18,
    "day": 1
   },
   {
    "word": "sir",
    "pron": "서(ㄹ)",
    "pos": "n.",
    "meaning": "선생님, 귀하, 아저씨(이름을 모르는 남자에 대한 경칭)",
    "examples": [],
    "tip": "",
    "no": 19,
    "day": 1
   },
   {
    "word": "ma'am",
    "pron": "맴",
    "pos": "n.",
    "meaning": "부인, 사모님, 아주머니(이름을 모르는 여자에 대한 경칭)",
    "examples": [],
    "tip": "",
    "no": 20,
    "day": 1
   },
   {
    "word": "age",
    "pron": "에이쥐",
    "pos": "n.",
    "meaning": "나이",
    "examples": [],
    "tip": "",
    "no": 21,
    "day": 1
   },
   {
    "word": "birthday",
    "pron": "버-쓰데이",
    "pos": "n.",
    "meaning": "생일",
    "examples": [
     {
      "en": "Today is my birthday!",
      "ko": "오늘이 내 생일이야!"
     }
    ],
    "tip": "",
    "no": 22,
    "day": 1
   },
   {
    "word": "nationality",
    "pron": "내셔낼러티",
    "pos": "n.",
    "meaning": "국적",
    "examples": [
     {
      "en": "What's your nationality?",
      "ko": "국적이 어떻게 되요?"
     }
    ],
    "tip": "",
    "no": 23,
    "day": 1
   },
   {
    "word": "nation",
    "pron": "네이션",
    "pos": "n.",
    "meaning": "국가, 나라",
    "examples": [],
    "tip": "",
    "no": 24,
    "day": 1
   },
   {
    "word": "language",
    "pron": "랭귀쥐",
    "pos": "n.",
    "meaning": "언어",
    "examples": [
     {
      "en": "How many languages do you speak?",
      "ko": "몇 개 국어 할 수 있어요?"
     },
     {
      "en": "How's your Chinese class going?",
      "ko": "중국어 수업은 잘 돼 가나요?"
     }
    ],
    "tip": "미국 대학에서 인기 있는 제2외국어로는 스페인어, 프랑스어 등이 있습니다.",
    "no": 25,
    "day": 1,
    "tipLabel": "💡 tip"
   },
   {
    "word": "english",
    "pron": "잉글리쉬",
    "pos": "n.",
    "meaning": "영어",
    "examples": [],
    "tip": "",
    "no": 26,
    "day": 1
   },
   {
    "word": "korean",
    "pron": "커리-언",
    "pos": "n.",
    "meaning": "한국어",
    "examples": [],
    "tip": "",
    "no": 27,
    "day": 1
   },
   {
    "word": "chinese",
    "pron": "차이니-(ㅈ)",
    "pos": "n.",
    "meaning": "중국어",
    "examples": [],
    "tip": "",
    "no": 28,
    "day": 1
   },
   {
    "word": "japanese",
    "pron": "재퍼니-(ㅈ)",
    "pos": "n.",
    "meaning": "일본어",
    "examples": [],
    "tip": "",
    "no": 29,
    "day": 1
   },
   {
    "word": "spanish",
    "pron": "스패니쉬",
    "pos": "n.",
    "meaning": "스페인어",
    "examples": [],
    "tip": "",
    "no": 30,
    "day": 1
   },
   {
    "word": "french",
    "pron": "프렌취",
    "pos": "n.",
    "meaning": "프랑스어",
    "examples": [],
    "tip": "",
    "no": 31,
    "day": 1
   },
   {
    "word": "german",
    "pron": "저-먼",
    "pos": "n.",
    "meaning": "독일어",
    "examples": [],
    "tip": "",
    "no": 32,
    "day": 1
   },
   {
    "word": "religion",
    "pron": "릴리젼",
    "pos": "n.",
    "meaning": "종교",
    "examples": [],
    "tip": "",
    "no": 33,
    "day": 1
   },
   {
    "word": "christianity",
    "pron": "크리스채너티",
    "pos": "n.",
    "meaning": "기독교",
    "examples": [],
    "tip": "",
    "no": 34,
    "day": 1
   },
   {
    "word": "protestantism",
    "pron": "프라터스턴티즘",
    "pos": "n.",
    "meaning": "개신교",
    "examples": [],
    "tip": "",
    "no": 35,
    "day": 1
   },
   {
    "word": "catholicism",
    "pron": "커싸리씨즘",
    "pos": "n.",
    "meaning": "천주교",
    "examples": [],
    "tip": "",
    "no": 36,
    "day": 1
   },
   {
    "word": "buddhism",
    "pron": "부-디즘",
    "pos": "n.",
    "meaning": "불교",
    "examples": [],
    "tip": "",
    "no": 37,
    "day": 1
   },
   {
    "word": "islam",
    "pron": "이슬럼",
    "pos": "n.",
    "meaning": "이슬람교",
    "examples": [],
    "tip": "",
    "no": 38,
    "day": 1
   },
   {
    "word": "hinduism",
    "pron": "힌두-이즘",
    "pos": "n.",
    "meaning": "힌두교",
    "examples": [],
    "tip": "",
    "no": 39,
    "day": 1
   },
   {
    "word": "phone number",
    "pron": "포운 넘버",
    "pos": "",
    "meaning": "전화번호",
    "examples": [],
    "tip": "",
    "no": 40,
    "day": 1
   },
   {
    "word": "address",
    "pron": "앳레(ㅅ)",
    "pos": "n.",
    "meaning": "주소",
    "examples": [],
    "tip": "",
    "no": 41,
    "day": 1
   },
   {
    "word": "live",
    "pron": "리(ㅂ)",
    "pos": "v.",
    "meaning": "살다",
    "examples": [],
    "tip": "",
    "no": 42,
    "day": 1
   },
   {
    "word": "acquaintance",
    "pron": "어쿠엔턴(ㅆ)",
    "pos": "n.",
    "meaning": "아는 사람",
    "examples": [],
    "tip": "",
    "no": 43,
    "day": 1
   },
   {
    "word": "job",
    "pron": "잡",
    "pos": "n.",
    "meaning": "직업",
    "examples": [
     {
      "en": "Why did you leave your last job?",
      "ko": "전 직장을 왜 그만뒀습니까?"
     }
    ],
    "tip": "",
    "no": 44,
    "day": 1
   },
   {
    "word": "occupation",
    "pron": "아큐페이션",
    "pos": "n.",
    "meaning": "직업, 업무",
    "examples": [
     {
      "en": "What's your occupation?",
      "ko": "직업은 무엇입니까?"
     }
    ],
    "tip": "",
    "no": 45,
    "day": 1
   },
   {
    "word": "major",
    "pron": "메이저",
    "pos": "n.",
    "meaning": "전공 과목",
    "examples": [],
    "tip": "대학생의 전공 과목을 말합니다.",
    "no": 46,
    "day": 1,
    "tipLabel": "💡 tip"
   },
   {
    "word": "minor",
    "pron": "마이너",
    "pos": "n.",
    "meaning": "부전공 과목",
    "examples": [],
    "tip": "",
    "no": 47,
    "day": 1
   },
   {
    "word": "greet",
    "pron": "그리잇",
    "pos": "v.",
    "meaning": "인사하다",
    "examples": [],
    "tip": "",
    "no": 48,
    "day": 1
   },
   {
    "word": "greeting",
    "pron": "그리-팅",
    "pos": "n.",
    "meaning": "인사",
    "examples": [],
    "tip": "",
    "no": 49,
    "day": 1
   },
   {
    "word": "Hello!",
    "pron": "헬로우!",
    "pos": "",
    "meaning": "안녕하세요!",
    "examples": [],
    "tip": "",
    "no": 50,
    "day": 1
   },
   {
    "word": "Hi!",
    "pron": "하이!",
    "pos": "",
    "meaning": "안녕!",
    "examples": [],
    "tip": "",
    "no": 51,
    "day": 1
   },
   {
    "word": "Hi there!",
    "pron": "하이 데어!",
    "pos": "",
    "meaning": "여어 안녕!",
    "examples": [],
    "tip": "",
    "no": 52,
    "day": 1
   },
   {
    "word": "Nice to meet you.",
    "pron": "나이(ㅆ) 투 미잇 유",
    "pos": "",
    "meaning": "만나서 반갑습니다.",
    "examples": [],
    "tip": "",
    "no": 53,
    "day": 1
   },
   {
    "word": "Good morning.",
    "pron": "굿 머-닝",
    "pos": "",
    "meaning": "안녕하세요. (아침 인사)",
    "examples": [],
    "tip": "",
    "no": 54,
    "day": 1
   },
   {
    "word": "Good afternoon.",
    "pron": "굿 애(ㅍ)터누운",
    "pos": "",
    "meaning": "안녕하세요. (점심 인사)",
    "examples": [],
    "tip": "",
    "no": 55,
    "day": 1
   },
   {
    "word": "Good evening.",
    "pron": "굿 이-브닝",
    "pos": "",
    "meaning": "안녕하세요. (저녁 인사)",
    "examples": [],
    "tip": "",
    "no": 56,
    "day": 1
   },
   {
    "word": "Good night.",
    "pron": "굿 나잇",
    "pos": "",
    "meaning": "안녕히 주무세요.",
    "examples": [],
    "tip": "",
    "no": 57,
    "day": 1
   },
   {
    "word": "How are you doing?",
    "pron": "하우 아- 유 두잉?",
    "pos": "",
    "meaning": "잘 지내요?",
    "examples": [],
    "tip": "",
    "no": 58,
    "day": 1
   },
   {
    "word": "Long time no see.",
    "pron": "러엉 타임 노우 시-",
    "pos": "",
    "meaning": "오랜만이에요.",
    "examples": [],
    "tip": "",
    "no": 59,
    "day": 1
   },
   {
    "word": "Good-bye.",
    "pron": "굿바이",
    "pos": "",
    "meaning": "안녕히 가세요.",
    "examples": [],
    "tip": "",
    "no": 60,
    "day": 1
   },
   {
    "word": "See you later.",
    "pron": "시- 유 레이터",
    "pos": "",
    "meaning": "또 만나요.",
    "examples": [],
    "tip": "",
    "no": 61,
    "day": 1
   },
   {
    "word": "Excuse me.",
    "pron": "익스큐-(ㅈ) 미",
    "pos": "",
    "meaning": "실례합니다.",
    "examples": [],
    "tip": "",
    "no": 62,
    "day": 1
   },
   {
    "word": "Have a nice weekend.",
    "pron": "해 버 나이(ㅆ) 위-켄(ㄷ)",
    "pos": "",
    "meaning": "좋은 주말 되세요.",
    "examples": [],
    "tip": "",
    "no": 63,
    "day": 1
   },
   {
    "word": "say hello",
    "pron": "세이 헬로우",
    "pos": "",
    "meaning": "안부를 전하다",
    "examples": [
     {
      "en": "Say hello to your family for me.",
      "ko": "당신 가족에게 안부를 전해 주세요."
     }
    ],
    "tip": "",
    "no": 64,
    "day": 1
   },
   {
    "word": "welcome",
    "pron": "웰컴",
    "pos": "v.",
    "meaning": "환영하다",
    "examples": [
     {
      "en": "Welcome to New York.",
      "ko": "뉴욕에 오신 걸 환영합니다."
     }
    ],
    "tip": "회사에서 신입사원을 맞이할 때는 'Welcome aboard!'라고 합니다.",
    "no": 65,
    "day": 1,
    "tipLabel": "💡 tip"
   },
   {
    "word": "invite",
    "pron": "인바잇",
    "pos": "v.",
    "meaning": "초대하다",
    "examples": [
     {
      "en": "I don't want to invite him.",
      "ko": "그를 초대하기 싫어."
     }
    ],
    "tip": "",
    "no": 66,
    "day": 1
   },
   {
    "word": "invitation",
    "pron": "인비테이션",
    "pos": "n.",
    "meaning": "초대, 초청",
    "examples": [],
    "tip": "",
    "no": 67,
    "day": 1
   },
   {
    "word": "guest",
    "pron": "게슷",
    "pos": "n.",
    "meaning": "방문객, 손님",
    "examples": [],
    "tip": "",
    "no": 68,
    "day": 1
   },
   {
    "word": "friend",
    "pron": "프렌(ㄷ)",
    "pos": "n.",
    "meaning": "친구",
    "examples": [
     {
      "en": "What are friends for?",
      "ko": "친구 좋다는 게 뭐야?"
     }
    ],
    "tip": "",
    "no": 69,
    "day": 1
   }
  ]
 },
 {
  "day": 2,
  "title": "Unit 02. 감사&사과",
  "words": [
   {
    "word": "gratitude",
    "pron": "그래터튜-(ㄷ)",
    "pos": "n.",
    "meaning": "감사",
    "examples": [],
    "tip": "",
    "no": 1,
    "day": 2
   },
   {
    "word": "thank",
    "pron": "쌩(ㅋ)",
    "pos": "v.",
    "meaning": "감사하다",
    "examples": [
     {
      "en": "Thank you.",
      "ko": "감사합니다."
     },
     {
      "en": "Thank you for everything.",
      "ko": "여러 가지로 감사합니다."
     }
    ],
    "tip": "",
    "no": 2,
    "day": 2
   },
   {
    "word": "appreciate",
    "pron": "어프리-씨에잇",
    "pos": "v.",
    "meaning": "감사하다",
    "examples": [
     {
      "en": "I appreciate the invitation.",
      "ko": "초대에 감사 드립니다."
     }
    ],
    "tip": "thank와 appreciate는 둘 다 '감사하다'라는 의미이지만, appreciate가 좀 더 격식을 갖춘 표현이 됩니다. 'thank+사람+for+이유'와 'appreciate+행위' 형태로 쓰입니다.",
    "no": 3,
    "day": 2,
    "tipLabel": "💡 tip"
   },
   {
    "word": "grateful",
    "pron": "그레잇펄",
    "pos": "a.",
    "meaning": "감사하는",
    "examples": [
     {
      "en": "I'm very grateful to you.",
      "ko": "정말 감사합니다."
     }
    ],
    "tip": "",
    "no": 4,
    "day": 2
   },
   {
    "word": "kind",
    "pron": "카인(ㄷ)",
    "pos": "a.",
    "meaning": "친절한",
    "examples": [
     {
      "en": "Thank you for your kindness.",
      "ko": "친절에 감사 드립니다."
     }
    ],
    "tip": "",
    "no": 5,
    "day": 2
   },
   {
    "word": "kindness",
    "pron": "카인(ㄷ)니(ㅅ)",
    "pos": "n.",
    "meaning": "친절, 신세",
    "examples": [],
    "tip": "",
    "no": 6,
    "day": 2
   },
   {
    "word": "concern",
    "pron": "컨써언",
    "pos": "n.",
    "meaning": "관심, 염려 v. 걱정하다, 염려하다",
    "examples": [
     {
      "en": "I appreciate your concern.",
      "ko": "관심 가져줘서 고마워요."
     }
    ],
    "tip": "",
    "no": 7,
    "day": 2
   },
   {
    "word": "consider",
    "pron": "컨시더",
    "pos": "v.",
    "meaning": "~에게 관심을 기울이다, 배려하다",
    "examples": [],
    "tip": "",
    "no": 8,
    "day": 2
   },
   {
    "word": "consideration",
    "pron": "컨시더레이션",
    "pos": "n.",
    "meaning": "고려, 배려",
    "examples": [
     {
      "en": "Please give my offer some consideration.",
      "ko": "제 제안을 고려해 주세요."
     }
    ],
    "tip": "",
    "no": 9,
    "day": 2
   },
   {
    "word": "help",
    "pron": "헬(ㅍ)",
    "pos": "n.",
    "meaning": "도움, 원조 v. (~하는 것을) 도와주다",
    "examples": [
     {
      "en": "Thank you very much for your help.",
      "ko": "도와주셔서 대단히 감사합니다."
     }
    ],
    "tip": "",
    "no": 10,
    "day": 2
   },
   {
    "word": "care",
    "pron": "케어",
    "pos": "n.",
    "meaning": "돌봄, 조심 v. 염려하다, 보살피다",
    "examples": [],
    "tip": "",
    "no": 11,
    "day": 2
   },
   {
    "word": "take care of",
    "pron": "테익 케어 어(ㅂ)",
    "pos": "",
    "meaning": "~을 돌보다",
    "examples": [],
    "tip": "",
    "no": 12,
    "day": 2
   },
   {
    "word": "favor",
    "pron": "페이버",
    "pos": "n.",
    "meaning": "호의, 은혜",
    "examples": [],
    "tip": "",
    "no": 13,
    "day": 2
   },
   {
    "word": "benefit",
    "pron": "베너핏",
    "pos": "n.",
    "meaning": "혜택",
    "examples": [],
    "tip": "",
    "no": 14,
    "day": 2
   },
   {
    "word": "mercy",
    "pron": "머-씨",
    "pos": "n.",
    "meaning": "자비",
    "examples": [],
    "tip": "",
    "no": 15,
    "day": 2
   },
   {
    "word": "chance",
    "pron": "챈(ㅆ)",
    "pos": "n.",
    "meaning": "기회",
    "examples": [
     {
      "en": "Thank you for giving me a chance.",
      "ko": "제게 기회를 주셔서 감사합니다."
     }
    ],
    "tip": "",
    "no": 16,
    "day": 2
   },
   {
    "word": "give a chance",
    "pron": "기 버 챈(ㅆ)",
    "pos": "",
    "meaning": "기회를 주다",
    "examples": [],
    "tip": "",
    "no": 17,
    "day": 2
   },
   {
    "word": "wait",
    "pron": "웨잇",
    "pos": "v.",
    "meaning": "기다리다",
    "examples": [
     {
      "en": "Thank you for waiting.",
      "ko": "기다려줘서 고마워요."
     }
    ],
    "tip": "",
    "no": 18,
    "day": 2
   },
   {
    "word": "waiting",
    "pron": "웨이팅",
    "pos": "n.",
    "meaning": "기다리는 시간, 기다리기",
    "examples": [],
    "tip": "",
    "no": 19,
    "day": 2
   },
   {
    "word": "cheer",
    "pron": "치어",
    "pos": "v.",
    "meaning": "격려하다",
    "examples": [],
    "tip": "",
    "no": 20,
    "day": 2
   },
   {
    "word": "cheer up",
    "pron": "치어 업",
    "pos": "",
    "meaning": "기운이 나다",
    "examples": [],
    "tip": "",
    "no": 21,
    "day": 2
   },
   {
    "word": "understand",
    "pron": "언더스탠(ㄷ)",
    "pos": "v.",
    "meaning": "이해하다",
    "examples": [],
    "tip": "",
    "no": 22,
    "day": 2
   },
   {
    "word": "understanding",
    "pron": "언더스탠딩",
    "pos": "n.",
    "meaning": "이해",
    "examples": [],
    "tip": "",
    "no": 23,
    "day": 2
   },
   {
    "word": "advise",
    "pron": "앳바이(ㅈ)",
    "pos": "v.",
    "meaning": "충고하다, 조언하다",
    "examples": [],
    "tip": "advise와 advice의 발음을 주의합니다.",
    "no": 24,
    "day": 2,
    "tipLabel": "💡 tip"
   },
   {
    "word": "advice",
    "pron": "앳바이(ㅆ)",
    "pos": "n.",
    "meaning": "충고, 조언",
    "examples": [],
    "tip": "",
    "no": 25,
    "day": 2
   },
   {
    "word": "praise",
    "pron": "프레이(ㅈ)",
    "pos": "n.",
    "meaning": "칭찬 v. 칭찬하다",
    "examples": [],
    "tip": "",
    "no": 26,
    "day": 2
   },
   {
    "word": "forgive",
    "pron": "퍼기(ㅂ)",
    "pos": "v.",
    "meaning": "용서하다",
    "examples": [
     {
      "en": "Let's forgive and forget.",
      "ko": "서로 용서하고 잊어버리자."
     }
    ],
    "tip": "",
    "no": 27,
    "day": 2
   },
   {
    "word": "forgiveness",
    "pron": "퍼깁니(ㅅ)",
    "pos": "n.",
    "meaning": "용서",
    "examples": [],
    "tip": "",
    "no": 28,
    "day": 2
   },
   {
    "word": "pardon",
    "pron": "파-든",
    "pos": "n.",
    "meaning": "용서 v. 용서하다, 너그러이 봐주다",
    "examples": [],
    "tip": "pardon이 감탄사로 쓰이면 상대방의 말을 잘 알아듣지 못해 다시 말해 달라는 뜻이나 가벼운 실수 등에 대한 사과의 의미가 됩니다.",
    "no": 29,
    "day": 2,
    "tipLabel": "💡 tip"
   },
   {
    "word": "sorry",
    "pron": "서-리",
    "pos": "a.",
    "meaning": "미안하게 생각하는, 유감스러운, 안타까운",
    "examples": [
     {
      "en": "I'm sorry about that.",
      "ko": "그 일에 대해서 미안하게 생각하고 있습니다."
     }
    ],
    "tip": "'I'm sorry.'는 말하는 사람이 자신의 실수를 인정하여 사과할 때 쓰는 말이고, 남과 부딪히거나 이야기 중간에 기침을 하는 등의 경우에는 보통 'Excuse me.'라고 말합니다.",
    "no": 30,
    "day": 2,
    "tipLabel": "💡 tip"
   },
   {
    "word": "apologize",
    "pron": "어팔러자이(ㅈ)",
    "pos": "v.",
    "meaning": "사과하다",
    "examples": [
     {
      "en": "I apologize to you.",
      "ko": "사과 드립니다."
     },
     {
      "en": "I owe you an apology.",
      "ko": "사과 드립니다."
     }
    ],
    "tip": "",
    "no": 31,
    "day": 2
   },
   {
    "word": "apology",
    "pron": "어팔러쥐",
    "pos": "n.",
    "meaning": "사과",
    "examples": [],
    "tip": "",
    "no": 32,
    "day": 2
   },
   {
    "word": "problem",
    "pron": "프라블럼",
    "pos": "n.",
    "meaning": "문제",
    "examples": [
     {
      "en": "I didn't expect to have a problem.",
      "ko": "문제가 생기리라고는 생각지 못했어요."
     }
    ],
    "tip": "problem은 다루거나 이해하기 힘든 '문제'라는 의미 뿐 아니라 '(시험) 문제'의 뜻도 있습니다.",
    "no": 33,
    "day": 2,
    "tipLabel": "💡 tip"
   },
   {
    "word": "damage",
    "pron": "대미쥐",
    "pos": "n.",
    "meaning": "손해",
    "examples": [],
    "tip": "",
    "no": 34,
    "day": 2
   },
   {
    "word": "trouble",
    "pron": "츠러블",
    "pos": "n.",
    "meaning": "곤란, 어려움",
    "examples": [
     {
      "en": "I'm sorry for all the trouble that I have caused.",
      "ko": "폐를 끼쳐서 죄송합니다."
     }
    ],
    "tip": "",
    "no": 35,
    "day": 2
   },
   {
    "word": "fault",
    "pron": "퍼얼(ㅌ)",
    "pos": "n.",
    "meaning": "잘못",
    "examples": [
     {
      "en": "It was my fault.",
      "ko": "제 잘못이었어요."
     }
    ],
    "tip": "fault는 책임을 져야 할 잘못에 대해 씁니다.",
    "no": 36,
    "day": 2,
    "tipLabel": "💡 tip"
   },
   {
    "word": "wrong",
    "pron": "러엉",
    "pos": "a.",
    "meaning": "잘못된",
    "examples": [
     {
      "en": "What's wrong with you?",
      "ko": "무슨 일 있어요?"
     }
    ],
    "tip": "",
    "no": 37,
    "day": 2
   },
   {
    "word": "mistake",
    "pron": "미스테익",
    "pos": "n.",
    "meaning": "실수, 잘못 v. 잘못 해석하다, 착각하다",
    "examples": [
     {
      "en": "I made a mistake.",
      "ko": "제가 실수했어요."
     }
    ],
    "tip": "",
    "no": 38,
    "day": 2
   },
   {
    "word": "disturb",
    "pron": "디스터업",
    "pos": "v.",
    "meaning": "방해하다",
    "examples": [
     {
      "en": "I'm sorry to disturb you.",
      "ko": "폐를 끼쳐서 죄송합니다."
     }
    ],
    "tip": "",
    "no": 39,
    "day": 2
   },
   {
    "word": "happen",
    "pron": "해뻔",
    "pos": "v.",
    "meaning": "일어나다, 발생하다",
    "examples": [
     {
      "en": "It won't happen again.",
      "ko": "다시는 이런 일이 없을 겁니다."
     }
    ],
    "tip": "",
    "no": 40,
    "day": 2
   },
   {
    "word": "happening",
    "pron": "해뻐닝",
    "pos": "n.",
    "meaning": "우연히 일어난 일, 사건",
    "examples": [],
    "tip": "",
    "no": 41,
    "day": 2
   },
   {
    "word": "blame",
    "pron": "블레임",
    "pos": "n.",
    "meaning": "비난, 탓, 책임 v. ~의 탓으로 돌리다",
    "examples": [
     {
      "en": "I blame no one but myself.",
      "ko": "제 잘못이었어요."
     }
    ],
    "tip": "",
    "no": 42,
    "day": 2
   },
   {
    "word": "claim",
    "pron": "클레임",
    "pos": "n.",
    "meaning": "요구, 청구 v. 요구하다",
    "examples": [],
    "tip": "",
    "no": 43,
    "day": 2
   },
   {
    "word": "accept",
    "pron": "액쎕(ㅌ)",
    "pos": "v.",
    "meaning": "받아들이다",
    "examples": [],
    "tip": "",
    "no": 44,
    "day": 2
   },
   {
    "word": "acceptance",
    "pron": "액쎕턴(ㅆ)",
    "pos": "n.",
    "meaning": "받아들임, 수락",
    "examples": [],
    "tip": "",
    "no": 45,
    "day": 2
   },
   {
    "word": "late",
    "pron": "레잇",
    "pos": "a.",
    "meaning": "늦은 adv. 늦게",
    "examples": [],
    "tip": "",
    "no": 46,
    "day": 2
   },
   {
    "word": "be late",
    "pron": "비- 레잇",
    "pos": "",
    "meaning": "지각하다, 늦다",
    "examples": [
     {
      "en": "Excuse me for being late.",
      "ko": "늦어서 죄송합니다."
     }
    ],
    "tip": "",
    "no": 47,
    "day": 2
   },
   {
    "word": "think",
    "pron": "씽(ㅋ)",
    "pos": "v.",
    "meaning": "생각하다",
    "examples": [
     {
      "en": "I think it's better if we stayed friends.",
      "ko": "우리는 그냥 친구로 있는 게 더 좋을 것 같아."
     }
    ],
    "tip": "",
    "no": 48,
    "day": 2
   },
   {
    "word": "thought",
    "pron": "써엇",
    "pos": "n.",
    "meaning": "생각",
    "examples": [],
    "tip": "",
    "no": 49,
    "day": 2
   },
   {
    "word": "idea",
    "pron": "아이디-어",
    "pos": "n.",
    "meaning": "생각, 아이디어",
    "examples": [
     {
      "en": "That's a good idea.",
      "ko": "좋은 생각이에요."
     }
    ],
    "tip": "",
    "no": 50,
    "day": 2
   },
   {
    "word": "forget",
    "pron": "퍼겟",
    "pos": "v.",
    "meaning": "잊다",
    "examples": [
     {
      "en": "I'm sorry, but I forgot.",
      "ko": "미안해요, 깜빡 잊었어요."
     }
    ],
    "tip": "",
    "no": 51,
    "day": 2
   },
   {
    "word": "thanks to",
    "pron": "쌩(ㅅ) 투",
    "pos": "",
    "meaning": "덕분에",
    "examples": [],
    "tip": "",
    "no": 52,
    "day": 2
   },
   {
    "word": "thank you for",
    "pron": "쌩 큐 퍼",
    "pos": "",
    "meaning": "~에 대해 감사하다",
    "examples": [],
    "tip": "",
    "no": 53,
    "day": 2
   },
   {
    "word": "generous",
    "pron": "제너러(ㅅ)",
    "pos": "a.",
    "meaning": "관대한, 너그러운",
    "examples": [],
    "tip": "",
    "no": 54,
    "day": 2
   },
   {
    "word": "pleasure",
    "pron": "플레저",
    "pos": "n.",
    "meaning": "즐거움, 기쁨",
    "examples": [
     {
      "en": "My pleasure.",
      "ko": "천만에요."
     }
    ],
    "tip": "'고맙다'라는 말에 대한 답례 인사입니다.",
    "no": 55,
    "day": 2,
    "tipLabel": "💡 tip"
   },
   {
    "word": "make a mistake",
    "pron": "메익 어 미스테익",
    "pos": "",
    "meaning": "실수하다",
    "examples": [],
    "tip": "",
    "no": 56,
    "day": 2
   },
   {
    "word": "on purpose",
    "pron": "언 퍼-퍼(ㅅ)",
    "pos": "",
    "meaning": "고의로, 일부러",
    "examples": [
     {
      "en": "I didn't do it on purpose.",
      "ko": "고의는 아니었어요."
     }
    ],
    "tip": "",
    "no": 57,
    "day": 2
   },
   {
    "word": "intention",
    "pron": "인텐션",
    "pos": "n.",
    "meaning": "의도",
    "examples": [
     {
      "en": "My intentions were good.",
      "ko": "고의는 아니었어요."
     }
    ],
    "tip": "",
    "no": 58,
    "day": 2
   },
   {
    "word": "opinion",
    "pron": "어피니언",
    "pos": "n.",
    "meaning": "의견",
    "examples": [],
    "tip": "",
    "no": 59,
    "day": 2
   }
  ]
 },
 {
  "day": 3,
  "title": "Unit 03. 신체",
  "words": [
   {
    "word": "body",
    "pron": "바디",
    "pos": "n.",
    "meaning": "신체",
    "examples": [],
    "tip": "",
    "no": 1,
    "day": 3
   },
   {
    "word": "head",
    "pron": "헷",
    "pos": "n.",
    "meaning": "머리",
    "examples": [],
    "tip": "",
    "no": 2,
    "day": 3
   },
   {
    "word": "hair",
    "pron": "헤어",
    "pos": "n.",
    "meaning": "머리카락",
    "examples": [
     {
      "en": "What is the color of your hair?",
      "ko": "당신의 머리는 무슨 색깔이에요?"
     },
     {
      "en": "She has short curly blonde hair.",
      "ko": "그녀는 곱슬머리에 짧은 금발이야."
     },
     {
      "en": "I have short hair.",
      "ko": "나는 짧은 머리이다."
     }
    ],
    "tip": "",
    "no": 3,
    "day": 3
   },
   {
    "word": "neck",
    "pron": "넥",
    "pos": "n.",
    "meaning": "목",
    "examples": [],
    "tip": "",
    "no": 4,
    "day": 3
   },
   {
    "word": "shoulder",
    "pron": "쇼울더",
    "pos": "n.",
    "meaning": "어깨",
    "examples": [
     {
      "en": "He is stout with broad shoulders.",
      "ko": "그의 어깨는 딱 벌어졌다."
     }
    ],
    "tip": "",
    "no": 5,
    "day": 3
   },
   {
    "word": "chest",
    "pron": "체슷",
    "pos": "n.",
    "meaning": "가슴",
    "examples": [],
    "tip": "",
    "no": 6,
    "day": 3
   },
   {
    "word": "stomach",
    "pron": "스터먹",
    "pos": "n.",
    "meaning": "배",
    "examples": [
     {
      "en": "His stomach sticks out.",
      "ko": "그는 배가 나왔어요."
     }
    ],
    "tip": "",
    "no": 7,
    "day": 3
   },
   {
    "word": "arm",
    "pron": "아암",
    "pos": "n.",
    "meaning": "팔",
    "examples": [],
    "tip": "",
    "no": 8,
    "day": 3
   },
   {
    "word": "elbow",
    "pron": "엘보우",
    "pos": "n.",
    "meaning": "팔꿈치",
    "examples": [],
    "tip": "",
    "no": 9,
    "day": 3
   },
   {
    "word": "waist",
    "pron": "웨이슷",
    "pos": "n.",
    "meaning": "허리",
    "examples": [],
    "tip": "",
    "no": 10,
    "day": 3
   },
   {
    "word": "hip",
    "pron": "힙",
    "pos": "n.",
    "meaning": "엉덩이",
    "examples": [],
    "tip": "",
    "no": 11,
    "day": 3
   },
   {
    "word": "leg",
    "pron": "렉",
    "pos": "n.",
    "meaning": "다리",
    "examples": [
     {
      "en": "I don't like my piano legs.",
      "ko": "내 무다리가 싫어."
     }
    ],
    "tip": "",
    "no": 12,
    "day": 3
   },
   {
    "word": "thigh",
    "pron": "싸이",
    "pos": "n.",
    "meaning": "허벅지",
    "examples": [],
    "tip": "",
    "no": 13,
    "day": 3
   },
   {
    "word": "knee",
    "pron": "니-",
    "pos": "n.",
    "meaning": "무릎",
    "examples": [
     {
      "en": "I fell down and scraped my knees.",
      "ko": "넘어져서 무릎이 까졌어요."
     }
    ],
    "tip": "",
    "no": 14,
    "day": 3
   },
   {
    "word": "hand",
    "pron": "핸(드)",
    "pos": "n.",
    "meaning": "손",
    "examples": [
     {
      "en": "Wash your hands first.",
      "ko": "손부터 씻어야지."
     },
     {
      "en": "I am left-handed.",
      "ko": "저는 왼손잡이예요."
     }
    ],
    "tip": "",
    "no": 15,
    "day": 3
   },
   {
    "word": "foot",
    "pron": "풋",
    "pos": "n.",
    "meaning": "발",
    "examples": [],
    "tip": "복수형은 feet입니다.",
    "no": 16,
    "day": 3,
    "tipLabel": "💡 tip"
   },
   {
    "word": "finger",
    "pron": "핑거",
    "pos": "n.",
    "meaning": "손가락",
    "examples": [],
    "tip": "",
    "no": 17,
    "day": 3
   },
   {
    "word": "nail",
    "pron": "네일",
    "pos": "n.",
    "meaning": "손톱",
    "examples": [],
    "tip": "",
    "no": 18,
    "day": 3
   },
   {
    "word": "toe",
    "pron": "토우",
    "pos": "n.",
    "meaning": "발가락",
    "examples": [],
    "tip": "",
    "no": 19,
    "day": 3
   },
   {
    "word": "toenail",
    "pron": "토우네일",
    "pos": "n.",
    "meaning": "발톱",
    "examples": [],
    "tip": "",
    "no": 20,
    "day": 3
   },
   {
    "word": "wrist",
    "pron": "리슷",
    "pos": "n.",
    "meaning": "손목",
    "examples": [],
    "tip": "",
    "no": 21,
    "day": 3
   },
   {
    "word": "ankle",
    "pron": "앵클",
    "pos": "n.",
    "meaning": "발목",
    "examples": [
     {
      "en": "I sprained my ankle.",
      "ko": "발목을 삐었어요."
     }
    ],
    "tip": "",
    "no": 22,
    "day": 3
   },
   {
    "word": "heel",
    "pron": "히일",
    "pos": "n.",
    "meaning": "발꿈치",
    "examples": [],
    "tip": "",
    "no": 23,
    "day": 3
   },
   {
    "word": "face",
    "pron": "페이(ㅆ)",
    "pos": "n.",
    "meaning": "얼굴",
    "examples": [
     {
      "en": "My face is a little chubby.",
      "ko": "나는 얼굴이 좀 통통하다."
     }
    ],
    "tip": "",
    "no": 24,
    "day": 3
   },
   {
    "word": "forehead",
    "pron": "퍼-헷",
    "pos": "n.",
    "meaning": "이마",
    "examples": [
     {
      "en": "He has a broad forehead.",
      "ko": "그는 이마가 넓습니다."
     }
    ],
    "tip": "",
    "no": 25,
    "day": 3
   },
   {
    "word": "eyebrow",
    "pron": "아이브라우",
    "pos": "n.",
    "meaning": "눈썹",
    "examples": [],
    "tip": "",
    "no": 26,
    "day": 3
   },
   {
    "word": "ear",
    "pron": "이어",
    "pos": "n.",
    "meaning": "귀",
    "examples": [
     {
      "en": "We are all ears.",
      "ko": "우리는 열심히 귀를 기울인다."
     }
    ],
    "tip": "",
    "no": 27,
    "day": 3
   },
   {
    "word": "eye",
    "pron": "아이",
    "pos": "n.",
    "meaning": "눈",
    "examples": [
     {
      "en": "I have hollow eyes.",
      "ko": "눈이 움푹 들어갔다."
     }
    ],
    "tip": "",
    "no": 28,
    "day": 3
   },
   {
    "word": "cheek",
    "pron": "치익",
    "pos": "n.",
    "meaning": "볼",
    "examples": [
     {
      "en": "I have dimples on my cheeks.",
      "ko": "나는 양쪽 볼에 보조개가 있다."
     }
    ],
    "tip": "",
    "no": 29,
    "day": 3
   },
   {
    "word": "nose",
    "pron": "노우(ㅈ)",
    "pos": "n.",
    "meaning": "코",
    "examples": [
     {
      "en": "I have a long nose.",
      "ko": "난 코가 높다."
     }
    ],
    "tip": "",
    "no": 30,
    "day": 3
   },
   {
    "word": "chin",
    "pron": "친",
    "pos": "n.",
    "meaning": "턱",
    "examples": [],
    "tip": "",
    "no": 31,
    "day": 3
   },
   {
    "word": "mouth",
    "pron": "마우쓰",
    "pos": "n.",
    "meaning": "입",
    "examples": [],
    "tip": "",
    "no": 32,
    "day": 3
   },
   {
    "word": "lip",
    "pron": "립",
    "pos": "n.",
    "meaning": "입술",
    "examples": [
     {
      "en": "His lips are full.",
      "ko": "그의 입술은 두껍다."
     }
    ],
    "tip": "보통 lips라고 씁니다.",
    "no": 33,
    "day": 3,
    "tipLabel": "💡 tip"
   },
   {
    "word": "tooth",
    "pron": "투-쓰",
    "pos": "n.",
    "meaning": "이, 치아",
    "examples": [
     {
      "en": "I have a loose tooth.",
      "ko": "이 하나가 흔들거립니다."
     },
     {
      "en": "I've chipped a wisdom tooth.",
      "ko": "사랑니가 났어요."
     }
    ],
    "tip": "복수형은 teeth입니다.",
    "no": 34,
    "day": 3,
    "tipLabel": "💡 tip"
   },
   {
    "word": "tongue",
    "pron": "텅",
    "pos": "n.",
    "meaning": "혀",
    "examples": [],
    "tip": "",
    "no": 35,
    "day": 3
   },
   {
    "word": "gum",
    "pron": "검",
    "pos": "n.",
    "meaning": "잇몸",
    "examples": [],
    "tip": "",
    "no": 36,
    "day": 3
   },
   {
    "word": "height",
    "pron": "하잇",
    "pos": "n.",
    "meaning": "키",
    "examples": [
     {
      "en": "What's your height?",
      "ko": "키가 얼마입니까?"
     }
    ],
    "tip": "",
    "no": 37,
    "day": 3
   },
   {
    "word": "tall",
    "pron": "터얼",
    "pos": "a.",
    "meaning": "키가 큰",
    "examples": [
     {
      "en": "How tall are you?",
      "ko": "키가 얼마입니까?"
     }
    ],
    "tip": "",
    "no": 38,
    "day": 3
   },
   {
    "word": "short",
    "pron": "셔-(트)",
    "pos": "a.",
    "meaning": "키가 작은",
    "examples": [
     {
      "en": "He is a little short.",
      "ko": "그는 키가 좀 작다."
     }
    ],
    "tip": "",
    "no": 39,
    "day": 3
   },
   {
    "word": "weight",
    "pron": "웨잇",
    "pos": "n.",
    "meaning": "무게, 체중",
    "examples": [
     {
      "en": "You've lost a bit of weight, haven't you?",
      "ko": "살이 좀 빠졌네요, 그렇죠?"
     }
    ],
    "tip": "",
    "no": 40,
    "day": 3
   },
   {
    "word": "fat",
    "pron": "팻",
    "pos": "a.",
    "meaning": "뚱뚱한",
    "examples": [],
    "tip": "",
    "no": 41,
    "day": 3
   },
   {
    "word": "chubby",
    "pron": "처비",
    "pos": "a.",
    "meaning": "통통한",
    "examples": [],
    "tip": "",
    "no": 42,
    "day": 3
   },
   {
    "word": "corpulence",
    "pron": "커-퓰런(ㅅ)",
    "pos": "n.",
    "meaning": "비만",
    "examples": [],
    "tip": "",
    "no": 43,
    "day": 3
   },
   {
    "word": "slender",
    "pron": "슬렌더",
    "pos": "a.",
    "meaning": "날씬한",
    "examples": [],
    "tip": "",
    "no": 44,
    "day": 3
   },
   {
    "word": "thin",
    "pron": "씬",
    "pos": "a.",
    "meaning": "마른",
    "examples": [
     {
      "en": "I am tall and thin.",
      "ko": "저는 키가 크고 마른 편이에요."
     }
    ],
    "tip": "",
    "no": 45,
    "day": 3
   },
   {
    "word": "skin",
    "pron": "스킨",
    "pos": "n.",
    "meaning": "피부",
    "examples": [
     {
      "en": "I have sensitive skin.",
      "ko": "피부가 너무 예민해."
     }
    ],
    "tip": "",
    "no": 46,
    "day": 3
   },
   {
    "word": "wrinkle",
    "pron": "링클",
    "pos": "n.",
    "meaning": "주름",
    "examples": [
     {
      "en": "You have a lot of wrinkles on your face.",
      "ko": "네 얼굴에 주름이 많아."
     }
    ],
    "tip": "",
    "no": 47,
    "day": 3
   },
   {
    "word": "dimple",
    "pron": "딤플",
    "pos": "n.",
    "meaning": "보조개",
    "examples": [],
    "tip": "",
    "no": 48,
    "day": 3
   },
   {
    "word": "pimple",
    "pron": "핌플",
    "pos": "n.",
    "meaning": "여드름, 뽀루지",
    "examples": [],
    "tip": "",
    "no": 49,
    "day": 3
   },
   {
    "word": "freckle",
    "pron": "프레클",
    "pos": "n.",
    "meaning": "주근깨",
    "examples": [],
    "tip": "",
    "no": 50,
    "day": 3
   },
   {
    "word": "pore",
    "pron": "퍼-",
    "pos": "n.",
    "meaning": "모공",
    "examples": [],
    "tip": "",
    "no": 51,
    "day": 3
   },
   {
    "word": "moustache",
    "pron": "머스태쉬",
    "pos": "n.",
    "meaning": "콧수염",
    "examples": [],
    "tip": "",
    "no": 52,
    "day": 3
   },
   {
    "word": "beard",
    "pron": "비어(드)",
    "pos": "n.",
    "meaning": "턱수염",
    "examples": [],
    "tip": "",
    "no": 53,
    "day": 3
   },
   {
    "word": "shave",
    "pron": "쉐이(브)",
    "pos": "v.",
    "meaning": "면도하다",
    "examples": [],
    "tip": "",
    "no": 54,
    "day": 3
   },
   {
    "word": "appearance",
    "pron": "어피어런(ㅆ)",
    "pos": "n.",
    "meaning": "외모",
    "examples": [
     {
      "en": "Don't be mislead by appearance.",
      "ko": "외모에 속지 말아요."
     }
    ],
    "tip": "",
    "no": 55,
    "day": 3
   },
   {
    "word": "handsome",
    "pron": "핸섬",
    "pos": "a.",
    "meaning": "잘생긴",
    "examples": [],
    "tip": "handsome을 남자에게 쓰면 '멋지게 잘생긴'이라는 의미이고, 여자에게 쓰면 '당당하게 아름답다'는 것을 뜻합니다.",
    "no": 56,
    "day": 3,
    "tipLabel": "💡 tip"
   },
   {
    "word": "good-looking",
    "pron": "굿루킹",
    "pos": "a.",
    "meaning": "(외모가) 잘생긴",
    "examples": [
     {
      "en": "He is good-looking.",
      "ko": "그는 잘생겼어."
     }
    ],
    "tip": "good-looking은 특히 사람의 외모에 대해 '잘생겼다'고 할 때 씁니다.",
    "no": 57,
    "day": 3,
    "tipLabel": "💡 tip"
   },
   {
    "word": "ugly",
    "pron": "어글리",
    "pos": "a.",
    "meaning": "못생긴",
    "examples": [],
    "tip": "",
    "no": 58,
    "day": 3
   },
   {
    "word": "beautiful",
    "pron": "뷰-터펄",
    "pos": "a.",
    "meaning": "아름다운",
    "examples": [],
    "tip": "",
    "no": 59,
    "day": 3
   },
   {
    "word": "cute",
    "pron": "큐웃",
    "pos": "a.",
    "meaning": "귀여운",
    "examples": [
     {
      "en": "She looks cute.",
      "ko": "그녀는 귀엽게[섹시하게] 생겼어."
     }
    ],
    "tip": "성인에게 cute라고 하면 '섹시하다'라는 말이 됩니다.",
    "no": 60,
    "day": 3,
    "tipLabel": "💡 tip"
   },
   {
    "word": "gorgeous",
    "pron": "거-줘(ㅅ)",
    "pos": "a.",
    "meaning": "멋진, 예쁜",
    "examples": [],
    "tip": "",
    "no": 61,
    "day": 3
   },
   {
    "word": "pretty",
    "pron": "프리디",
    "pos": "a.",
    "meaning": "예쁜",
    "examples": [],
    "tip": "",
    "no": 62,
    "day": 3
   },
   {
    "word": "curly hair",
    "pron": "커-리 헤어",
    "pos": "",
    "meaning": "곱슬머리",
    "examples": [],
    "tip": "",
    "no": 63,
    "day": 3
   },
   {
    "word": "straight hair",
    "pron": "스츠레잇 헤어",
    "pos": "",
    "meaning": "생머리",
    "examples": [],
    "tip": "",
    "no": 64,
    "day": 3
   },
   {
    "word": "bobbed hair",
    "pron": "밥(드) 헤어",
    "pos": "",
    "meaning": "단발머리",
    "examples": [],
    "tip": "",
    "no": 65,
    "day": 3
   },
   {
    "word": "long hair",
    "pron": "러엉 헤어",
    "pos": "",
    "meaning": "긴 머리",
    "examples": [],
    "tip": "",
    "no": 66,
    "day": 3
   },
   {
    "word": "short hair",
    "pron": "셔-(트) 헤어",
    "pos": "",
    "meaning": "짧은 머리",
    "examples": [],
    "tip": "",
    "no": 67,
    "day": 3
   },
   {
    "word": "back",
    "pron": "백",
    "pos": "n.",
    "meaning": "등",
    "examples": [],
    "tip": "back에는 '(신체의) 등' 외에도 '뒤쪽, 뒷면', '뒤쪽의', '뒤로' 등 다양한 의미가 있습니다.",
    "no": 68,
    "day": 3,
    "tipLabel": "💡 tip"
   },
   {
    "word": "right-handed",
    "pron": "라잇핸딧",
    "pos": "a.",
    "meaning": "오른손잡이의",
    "examples": [],
    "tip": "",
    "no": 69,
    "day": 3
   },
   {
    "word": "left-handed",
    "pron": "레풋핸딧",
    "pos": "a.",
    "meaning": "왼손잡이의",
    "examples": [],
    "tip": "",
    "no": 70,
    "day": 3
   },
   {
    "word": "face shape",
    "pron": "페이(ㅆ) 쉐입",
    "pos": "",
    "meaning": "얼굴형",
    "examples": [
     {
      "en": "I have an oval face.",
      "ko": "난 달걀형 얼굴이야."
     },
     {
      "en": "I have a round face.",
      "ko": "내 얼굴은 동그랗다."
     }
    ],
    "tip": "",
    "no": 71,
    "day": 3
   },
   {
    "word": "oval face",
    "pron": "오우벌 페이(ㅆ)",
    "pos": "",
    "meaning": "달걀형 얼굴",
    "examples": [],
    "tip": "",
    "no": 72,
    "day": 3
   },
   {
    "word": "round face",
    "pron": "라운(드) 페이(ㅆ)",
    "pos": "",
    "meaning": "동그란 얼굴",
    "examples": [],
    "tip": "",
    "no": 73,
    "day": 3
   },
   {
    "word": "square jaw",
    "pron": "스쿠에어 줘-",
    "pos": "",
    "meaning": "사각턱",
    "examples": [
     {
      "en": "She has a square jaw.",
      "ko": "그녀는 사각턱이야."
     }
    ],
    "tip": "",
    "no": 74,
    "day": 3
   },
   {
    "word": "pupil",
    "pron": "퓨-플",
    "pos": "n.",
    "meaning": "눈동자",
    "examples": [],
    "tip": "",
    "no": 75,
    "day": 3
   },
   {
    "word": "eyelash",
    "pron": "아이래쉬",
    "pos": "n.",
    "meaning": "속눈썹",
    "examples": [
     {
      "en": "I have long eyelashes.",
      "ko": "난 긴 속눈썹을 가졌지."
     }
    ],
    "tip": "",
    "no": 76,
    "day": 3
   },
   {
    "word": "double eyelid",
    "pron": "더블 아이릿",
    "pos": "",
    "meaning": "쌍꺼풀",
    "examples": [
     {
      "en": "I have double-edged eyelids.",
      "ko": "난 쌍꺼풀이 있어."
     }
    ],
    "tip": "",
    "no": 77,
    "day": 3
   },
   {
    "word": "double-edged eyelid",
    "pron": "더블엣쥐(드) 아이릿",
    "pos": "",
    "meaning": "쌍꺼풀",
    "examples": [],
    "tip": "",
    "no": 78,
    "day": 3
   },
   {
    "word": "long nose",
    "pron": "러엉 노우(ㅈ)",
    "pos": "",
    "meaning": "높은 코",
    "examples": [],
    "tip": "",
    "no": 79,
    "day": 3
   },
   {
    "word": "bottle nose",
    "pron": "바틀 노우(ㅈ)",
    "pos": "",
    "meaning": "주먹코",
    "examples": [],
    "tip": "",
    "no": 80,
    "day": 3
   },
   {
    "word": "flat nose",
    "pron": "플랫 노우(ㅈ)",
    "pos": "",
    "meaning": "납작코",
    "examples": [],
    "tip": "",
    "no": 81,
    "day": 3
   },
   {
    "word": "the upper lip",
    "pron": "디 어뻐 립",
    "pos": "",
    "meaning": "윗입술",
    "examples": [],
    "tip": "",
    "no": 82,
    "day": 3
   },
   {
    "word": "the lower lip",
    "pron": "더 로우어 립",
    "pos": "",
    "meaning": "아랫입술",
    "examples": [],
    "tip": "",
    "no": 83,
    "day": 3
   },
   {
    "word": "the under lip",
    "pron": "디 언더 립",
    "pos": "",
    "meaning": "아랫입술",
    "examples": [],
    "tip": "",
    "no": 84,
    "day": 3
   },
   {
    "word": "back tooth",
    "pron": "백 투-쓰",
    "pos": "n.",
    "meaning": "어금니",
    "examples": [],
    "tip": "",
    "no": 85,
    "day": 3
   },
   {
    "word": "front tooth",
    "pron": "프런(트) 투-쓰",
    "pos": "n.",
    "meaning": "앞니",
    "examples": [],
    "tip": "",
    "no": 86,
    "day": 3
   },
   {
    "word": "canine tooth",
    "pron": "케나인 투-쓰",
    "pos": "n.",
    "meaning": "송곳니",
    "examples": [],
    "tip": "",
    "no": 87,
    "day": 3
   },
   {
    "word": "wisdom tooth",
    "pron": "위즈덤 투-쓰",
    "pos": "n.",
    "meaning": "사랑니",
    "examples": [],
    "tip": "",
    "no": 88,
    "day": 3
   },
   {
    "word": "oily skin",
    "pron": "어일리 스킨",
    "pos": "",
    "meaning": "지성피부",
    "examples": [],
    "tip": "",
    "no": 89,
    "day": 3
   },
   {
    "word": "dry skin",
    "pron": "드라이 스킨",
    "pos": "",
    "meaning": "건성피부",
    "examples": [],
    "tip": "",
    "no": 90,
    "day": 3
   },
   {
    "word": "sensitive skin",
    "pron": "센서티(브) 스킨",
    "pos": "",
    "meaning": "민감성피부",
    "examples": [],
    "tip": "",
    "no": 91,
    "day": 3
   },
   {
    "word": "complexion",
    "pron": "컴플렉션",
    "pos": "n.",
    "meaning": "얼굴빛, 안색",
    "examples": [],
    "tip": "",
    "no": 92,
    "day": 3
   },
   {
    "word": "dandruff",
    "pron": "댄드러(ㅍ)",
    "pos": "n.",
    "meaning": "비듬",
    "examples": [],
    "tip": "",
    "no": 93,
    "day": 3
   },
   {
    "word": "charming",
    "pron": "차-밍",
    "pos": "a.",
    "meaning": "매력적인",
    "examples": [],
    "tip": "",
    "no": 94,
    "day": 3
   },
   {
    "word": "graceful",
    "pron": "그레이(ㅆ)펄",
    "pos": "a.",
    "meaning": "우아한",
    "examples": [],
    "tip": "",
    "no": 95,
    "day": 3
   },
   {
    "word": "intelligent",
    "pron": "인텔리젼(트)",
    "pos": "a.",
    "meaning": "총명한, 지적인",
    "examples": [
     {
      "en": "He looks quite intelligent.",
      "ko": "그는 아주 지적으로 생겼어."
     }
    ],
    "tip": "",
    "no": 96,
    "day": 3
   }
  ]
 },
 {
  "day": 4,
  "title": "Unit 04. 감정&성격",
  "words": [
   {
    "word": "feel",
    "pron": "피일",
    "pos": "n.",
    "meaning": "감정, 기분 v. 느끼다",
    "examples": [],
    "tip": "",
    "no": 1,
    "day": 4
   },
   {
    "word": "pleasing",
    "pron": "플리-징",
    "pos": "a.",
    "meaning": "즐거운, 만족스러운",
    "examples": [],
    "tip": "",
    "no": 2,
    "day": 4
   },
   {
    "word": "pleased",
    "pron": "플리-즛",
    "pos": "a.",
    "meaning": "기쁜, 만족해 하는",
    "examples": [
     {
      "en": "I'm pleased to hear that.",
      "ko": "그 말을 들으니 기뻐요."
     }
    ],
    "tip": "",
    "no": 3,
    "day": 4
   },
   {
    "word": "satisfied",
    "pron": "새티스파잇",
    "pos": "a.",
    "meaning": "만족한",
    "examples": [
     {
      "en": "I'm satisfied with it.",
      "ko": "나는 그것에 만족해요."
     }
    ],
    "tip": "",
    "no": 4,
    "day": 4
   },
   {
    "word": "happy",
    "pron": "해삐",
    "pos": "a.",
    "meaning": "행복한",
    "examples": [
     {
      "en": "I'm happy.",
      "ko": "난 행복해요."
     }
    ],
    "tip": "",
    "no": 5,
    "day": 4
   },
   {
    "word": "enough",
    "pron": "이넙",
    "pos": "a.",
    "meaning": "충분한",
    "examples": [],
    "tip": "",
    "no": 6,
    "day": 4
   },
   {
    "word": "happiness",
    "pron": "해삐니(ㅅ)",
    "pos": "n.",
    "meaning": "행복",
    "examples": [],
    "tip": "",
    "no": 7,
    "day": 4
   },
   {
    "word": "excited",
    "pron": "익싸이팃",
    "pos": "a.",
    "meaning": "흥분한",
    "examples": [
     {
      "en": "I was excited to hear it.",
      "ko": "나는 그것을 듣고 흥분했다."
     }
    ],
    "tip": "사람이 주어로 올 때 감정형용사는 -ed형을 써야 합니다.",
    "no": 8,
    "day": 4,
    "tipLabel": "💡 tip"
   },
   {
    "word": "interested",
    "pron": "인터레스팃",
    "pos": "a.",
    "meaning": "흥미를 가진",
    "examples": [
     {
      "en": "I'm interested in science.",
      "ko": "나는 과학에 흥미 있어요."
     }
    ],
    "tip": "",
    "no": 9,
    "day": 4
   },
   {
    "word": "exciting",
    "pron": "익싸이팅",
    "pos": "a.",
    "meaning": "흥분시키는, 흥미진진한",
    "examples": [
     {
      "en": "There are many exciting festivals to enjoy here.",
      "ko": "여기에는 흥미진진한 축제들이 많이 있어요."
     }
    ],
    "tip": "",
    "no": 10,
    "day": 4
   },
   {
    "word": "interesting",
    "pron": "인터레스팅",
    "pos": "a.",
    "meaning": "흥미 있는, 신나는",
    "examples": [
     {
      "en": "It was an interesting day!",
      "ko": "신 나는 날이었어요!"
     }
    ],
    "tip": "",
    "no": 11,
    "day": 4
   },
   {
    "word": "joyful",
    "pron": "줘이펄",
    "pos": "a.",
    "meaning": "즐거운",
    "examples": [],
    "tip": "",
    "no": 12,
    "day": 4
   },
   {
    "word": "joy",
    "pron": "쥐이",
    "pos": "n.",
    "meaning": "기쁨",
    "examples": [
     {
      "en": "I jumped for joy.",
      "ko": "날 듯이 기뻤어요."
     }
    ],
    "tip": "",
    "no": 13,
    "day": 4
   },
   {
    "word": "smile",
    "pron": "스마일",
    "pos": "n.",
    "meaning": "미소 v. 미소를 짓다",
    "examples": [],
    "tip": "",
    "no": 14,
    "day": 4
   },
   {
    "word": "laugh",
    "pron": "래(ㅍ)",
    "pos": "n.",
    "meaning": "웃음 v. 웃다",
    "examples": [
     {
      "en": "It's so funny that I can't stop laughing.",
      "ko": "너무 재미있어서 웃음이 멈추질 않아요."
     }
    ],
    "tip": "",
    "no": 15,
    "day": 4
   },
   {
    "word": "calm",
    "pron": "카암",
    "pos": "a.",
    "meaning": "침착한",
    "examples": [],
    "tip": "",
    "no": 16,
    "day": 4
   },
   {
    "word": "relieved",
    "pron": "릴리-븟",
    "pos": "a.",
    "meaning": "안심한, 안도한",
    "examples": [],
    "tip": "",
    "no": 17,
    "day": 4
   },
   {
    "word": "sad",
    "pron": "샛",
    "pos": "a.",
    "meaning": "슬픈",
    "examples": [
     {
      "en": "I'm feelng sad.",
      "ko": "슬퍼요."
     }
    ],
    "tip": "",
    "no": 18,
    "day": 4
   },
   {
    "word": "miserable",
    "pron": "미저러블",
    "pos": "a.",
    "meaning": "비참한",
    "examples": [
     {
      "en": "I feel miserable.",
      "ko": "비참하네요."
     }
    ],
    "tip": "",
    "no": 19,
    "day": 4
   },
   {
    "word": "nasty",
    "pron": "내스티",
    "pos": "a.",
    "meaning": "심술궂은",
    "examples": [],
    "tip": "",
    "no": 20,
    "day": 4
   },
   {
    "word": "disappointed",
    "pron": "디서퍼인팃",
    "pos": "a.",
    "meaning": "실망한, 낙담한",
    "examples": [
     {
      "en": "That disappointed me.",
      "ko": "그거 실망인데."
     }
    ],
    "tip": "",
    "no": 21,
    "day": 4
   },
   {
    "word": "nervous",
    "pron": "너-버(ㅅ)",
    "pos": "a.",
    "meaning": "신경과민의, 초조해하는",
    "examples": [
     {
      "en": "He has a nervous temperament.",
      "ko": "그는 신경질적인 기질을 가졌다."
     }
    ],
    "tip": "",
    "no": 22,
    "day": 4
   },
   {
    "word": "shameful",
    "pron": "쉐임펄",
    "pos": "a.",
    "meaning": "부끄러운",
    "examples": [
     {
      "en": "She blushed out of shame.",
      "ko": "그녀는 부끄러움에 얼굴을 붉혔다."
     }
    ],
    "tip": "",
    "no": 23,
    "day": 4
   },
   {
    "word": "sensitive",
    "pron": "센서티(브)",
    "pos": "a.",
    "meaning": "신경질적인, 민감한",
    "examples": [],
    "tip": "",
    "no": 24,
    "day": 4
   },
   {
    "word": "shy",
    "pron": "샤이",
    "pos": "a.",
    "meaning": "부끄럼 타는",
    "examples": [
     {
      "en": "I'm very shy by nature.",
      "ko": "저는 천성적으로 수줍음을 잘 타요."
     }
    ],
    "tip": "",
    "no": 25,
    "day": 4
   },
   {
    "word": "annoyed",
    "pron": "어너잇",
    "pos": "a.",
    "meaning": "짜증 난, 화가 난",
    "examples": [
     {
      "en": "I'm very annoyed.",
      "ko": "너무 화가 나요."
     }
    ],
    "tip": "",
    "no": 26,
    "day": 4
   },
   {
    "word": "anxious",
    "pron": "앵셔(ㅅ)",
    "pos": "a.",
    "meaning": "불안한",
    "examples": [],
    "tip": "",
    "no": 27,
    "day": 4
   },
   {
    "word": "horrible",
    "pron": "허-러블",
    "pos": "a.",
    "meaning": "무서운",
    "examples": [],
    "tip": "",
    "no": 28,
    "day": 4
   },
   {
    "word": "painful",
    "pron": "페인펄",
    "pos": "a.",
    "meaning": "고통스러운",
    "examples": [],
    "tip": "",
    "no": 29,
    "day": 4
   },
   {
    "word": "character",
    "pron": "캐릭터",
    "pos": "n.",
    "meaning": "성격",
    "examples": [],
    "tip": "",
    "no": 30,
    "day": 4
   },
   {
    "word": "good",
    "pron": "굿",
    "pos": "a.",
    "meaning": "착한",
    "examples": [
     {
      "en": "He has a good heart but poor sense.",
      "ko": "그는 마음은 착하지만 센스가 부족해요."
     }
    ],
    "tip": "",
    "no": 31,
    "day": 4
   },
   {
    "word": "humble",
    "pron": "험블",
    "pos": "a.",
    "meaning": "겸손한",
    "examples": [],
    "tip": "",
    "no": 32,
    "day": 4
   },
   {
    "word": "kind",
    "pron": "카인(ㄷ)",
    "pos": "a.",
    "meaning": "친절한",
    "examples": [],
    "tip": "",
    "no": 33,
    "day": 4
   },
   {
    "word": "honest",
    "pron": "아니슷",
    "pos": "a.",
    "meaning": "정직한",
    "examples": [],
    "tip": "",
    "no": 34,
    "day": 4
   },
   {
    "word": "gentle",
    "pron": "젠틀",
    "pos": "a.",
    "meaning": "다정한",
    "examples": [],
    "tip": "",
    "no": 35,
    "day": 4
   },
   {
    "word": "active",
    "pron": "액티(ㅂ)",
    "pos": "a.",
    "meaning": "적극적인",
    "examples": [
     {
      "en": "She is very active in everything.",
      "ko": "그녀는 매사에 적극적이에요."
     }
    ],
    "tip": "",
    "no": 36,
    "day": 4
   },
   {
    "word": "scrupulous",
    "pron": "스크루-풀러(ㅅ)",
    "pos": "a.",
    "meaning": "세심한",
    "examples": [],
    "tip": "",
    "no": 37,
    "day": 4
   },
   {
    "word": "extroverted",
    "pron": "엑스츠러버-팃",
    "pos": "a.",
    "meaning": "외향적인",
    "examples": [],
    "tip": "",
    "no": 38,
    "day": 4
   },
   {
    "word": "passive",
    "pron": "패시(ㅂ)",
    "pos": "a.",
    "meaning": "수동적인",
    "examples": [],
    "tip": "",
    "no": 39,
    "day": 4
   },
   {
    "word": "timid",
    "pron": "티밋",
    "pos": "a.",
    "meaning": "소심한",
    "examples": [],
    "tip": "",
    "no": 40,
    "day": 4
   },
   {
    "word": "reticent",
    "pron": "레티쓴(ㅌ)",
    "pos": "a.",
    "meaning": "과묵한",
    "examples": [],
    "tip": "",
    "no": 41,
    "day": 4
   },
   {
    "word": "gloomy",
    "pron": "글루-미",
    "pos": "a.",
    "meaning": "우울한",
    "examples": [],
    "tip": "",
    "no": 42,
    "day": 4
   },
   {
    "word": "cautious",
    "pron": "커-셔(ㅅ)",
    "pos": "a.",
    "meaning": "신중한",
    "examples": [],
    "tip": "",
    "no": 43,
    "day": 4
   },
   {
    "word": "sorrowful",
    "pron": "서-러펄",
    "pos": "a.",
    "meaning": "비통한",
    "examples": [],
    "tip": "",
    "no": 44,
    "day": 4
   },
   {
    "word": "bad",
    "pron": "뱃",
    "pos": "a.",
    "meaning": "나쁜, 부도덕한",
    "examples": [],
    "tip": "",
    "no": 45,
    "day": 4
   },
   {
    "word": "arrogant",
    "pron": "애러건(ㅌ)",
    "pos": "a.",
    "meaning": "오만한",
    "examples": [],
    "tip": "",
    "no": 46,
    "day": 4
   },
   {
    "word": "rude",
    "pron": "루-(ㄷ)",
    "pos": "a.",
    "meaning": "무례한",
    "examples": [],
    "tip": "",
    "no": 47,
    "day": 4
   },
   {
    "word": "greedy",
    "pron": "그리-디",
    "pos": "a.",
    "meaning": "탐욕스러운",
    "examples": [],
    "tip": "",
    "no": 48,
    "day": 4
   },
   {
    "word": "idle",
    "pron": "아이들",
    "pos": "a.",
    "meaning": "게으른",
    "examples": [],
    "tip": "",
    "no": 49,
    "day": 4
   },
   {
    "word": "pessimistic",
    "pron": "페서미스틱",
    "pos": "a.",
    "meaning": "비관적인",
    "examples": [
     {
      "en": "You are too pessimistic.",
      "ko": "넌 너무 비관적이야."
     }
    ],
    "tip": "반대로 쓸 수 있는 말은 '낙관적인, 긍정적인'이라는 뜻의 positive가 있습니다.",
    "no": 50,
    "day": 4,
    "tipLabel": "💡 tip"
   },
   {
    "word": "rough",
    "pron": "럽",
    "pos": "a.",
    "meaning": "거친",
    "examples": [],
    "tip": "",
    "no": 51,
    "day": 4
   },
   {
    "word": "negative",
    "pron": "네거티(ㅂ)",
    "pos": "a.",
    "meaning": "부정적인, 소극적인",
    "examples": [],
    "tip": "",
    "no": 52,
    "day": 4
   },
   {
    "word": "pleasingly",
    "pron": "플리-징리",
    "pos": "ad.",
    "meaning": "즐겁게, 기분 좋게",
    "examples": [],
    "tip": "",
    "no": 53,
    "day": 4
   },
   {
    "word": "funny",
    "pron": "퍼니",
    "pos": "a.",
    "meaning": "재미있는",
    "examples": [],
    "tip": "",
    "no": 54,
    "day": 4
   },
   {
    "word": "fun",
    "pron": "펀",
    "pos": "n.",
    "meaning": "재미",
    "examples": [
     {
      "en": "I'm having fun.",
      "ko": "즐거워요."
     }
    ],
    "tip": "",
    "no": 55,
    "day": 4
   },
   {
    "word": "likable",
    "pron": "라이커블",
    "pos": "a.",
    "meaning": "호감이 가는, 마음에 드는",
    "examples": [],
    "tip": "",
    "no": 56,
    "day": 4
   },
   {
    "word": "trustworthy",
    "pron": "츠러슷워-디",
    "pos": "a.",
    "meaning": "신용할 수 있는, 신뢰할 수 있는",
    "examples": [],
    "tip": "",
    "no": 57,
    "day": 4
   },
   {
    "word": "trust",
    "pron": "트러슷",
    "pos": "n.",
    "meaning": "신뢰",
    "examples": [],
    "tip": "",
    "no": 58,
    "day": 4
   },
   {
    "word": "believable",
    "pron": "빌리-버블",
    "pos": "a.",
    "meaning": "믿을 수 있는",
    "examples": [],
    "tip": "",
    "no": 59,
    "day": 4
   },
   {
    "word": "sadness",
    "pron": "샛니(ㅅ)",
    "pos": "n.",
    "meaning": "슬픔",
    "examples": [],
    "tip": "",
    "no": 60,
    "day": 4
   },
   {
    "word": "disappointment",
    "pron": "디서퍼인트먼(ㅌ)",
    "pos": "n.",
    "meaning": "실망",
    "examples": [],
    "tip": "",
    "no": 61,
    "day": 4
   },
   {
    "word": "shame",
    "pron": "쉐임",
    "pos": "n.",
    "meaning": "부끄러움, 수치심",
    "examples": [],
    "tip": "",
    "no": 62,
    "day": 4
   },
   {
    "word": "horror",
    "pron": "허-러",
    "pos": "n.",
    "meaning": "공포, 무서움",
    "examples": [],
    "tip": "",
    "no": 63,
    "day": 4
   },
   {
    "word": "pain",
    "pron": "페인",
    "pos": "n.",
    "meaning": "고통",
    "examples": [],
    "tip": "",
    "no": 64,
    "day": 4
   },
   {
    "word": "inconvenient",
    "pron": "인컨비-년(ㅌ)",
    "pos": "a.",
    "meaning": "불편한",
    "examples": [],
    "tip": "",
    "no": 65,
    "day": 4
   },
   {
    "word": "troublesome",
    "pron": "츠러블섬",
    "pos": "a.",
    "meaning": "성가신, 말썽부리는",
    "examples": [],
    "tip": "",
    "no": 66,
    "day": 4
   },
   {
    "word": "thoughtful",
    "pron": "써엇펄",
    "pos": "a.",
    "meaning": "사려 깊은",
    "examples": [],
    "tip": "",
    "no": 67,
    "day": 4
   },
   {
    "word": "friendly",
    "pron": "프렌들리",
    "pos": "a.",
    "meaning": "우호적인",
    "examples": [],
    "tip": "",
    "no": 68,
    "day": 4
   },
   {
    "word": "selfish",
    "pron": "셀피쉬",
    "pos": "a.",
    "meaning": "이기적인",
    "examples": [
     {
      "en": "He has a selfish personality.",
      "ko": "그는 너무 이기적이에요."
     }
    ],
    "tip": "",
    "no": 69,
    "day": 4
   },
   {
    "word": "idleness",
    "pron": "아이들니(ㅅ)",
    "pos": "n.",
    "meaning": "게으름",
    "examples": [],
    "tip": "",
    "no": 70,
    "day": 4
   },
   {
    "word": "brusque",
    "pron": "브러슥",
    "pos": "a.",
    "meaning": "무뚝뚝한",
    "examples": [],
    "tip": "",
    "no": 71,
    "day": 4
   }
  ]
 },
 {
  "day": 5,
  "title": "Unit 05. 사랑",
  "words": [
   {
    "word": "meeting",
    "pron": "미-팅",
    "pos": "n.",
    "meaning": "만남",
    "examples": [
     {
      "en": "I'm here to meet Mr. Parker.",
      "ko": "파커 씨를 만나러 왔습니다."
     }
    ],
    "tip": "",
    "no": 1,
    "day": 5
   },
   {
    "word": "date",
    "pron": "데잇",
    "pos": "n.",
    "meaning": "데이트",
    "examples": [
     {
      "en": "How was your date?",
      "ko": "데이트 어땠어요?"
     }
    ],
    "tip": "",
    "no": 2,
    "day": 5
   },
   {
    "word": "meet",
    "pron": "미잇",
    "pos": "v.",
    "meaning": "만나다",
    "examples": [],
    "tip": "",
    "no": 3,
    "day": 5
   },
   {
    "word": "go out",
    "pron": "고우 아웃",
    "pos": "",
    "meaning": "데이트하다",
    "examples": [],
    "tip": "",
    "no": 4,
    "day": 5
   },
   {
    "word": "ideal type",
    "pron": "아이디-얼 타입",
    "pos": "",
    "meaning": "이상형",
    "examples": [],
    "tip": "",
    "no": 5,
    "day": 5
   },
   {
    "word": "sweetheart",
    "pron": "스위잇하-(ㅌ)",
    "pos": "n.",
    "meaning": "애인, 연인",
    "examples": [],
    "tip": "",
    "no": 6,
    "day": 5
   },
   {
    "word": "lover",
    "pron": "러버",
    "pos": "n.",
    "meaning": "애인, 연인",
    "examples": [],
    "tip": "보통 육체 관계가 있는 깊은 사이의 애인을 가리킵니다.",
    "no": 7,
    "day": 5,
    "tipLabel": "💡 tip"
   },
   {
    "word": "boyfriend",
    "pron": "버이프렌(ㄷ)",
    "pos": "n.",
    "meaning": "남자 친구",
    "examples": [
     {
      "en": "Does she have a boyfriend?",
      "ko": "그녀에게 남자 친구 있어?"
     }
    ],
    "tip": "",
    "no": 8,
    "day": 5
   },
   {
    "word": "girlfriend",
    "pron": "거얼프렌(ㄷ)",
    "pos": "n.",
    "meaning": "여자 친구",
    "examples": [
     {
      "en": "I am between girlfriends.",
      "ko": "난 여자 친구 없어."
     }
    ],
    "tip": "",
    "no": 9,
    "day": 5
   },
   {
    "word": "like",
    "pron": "라익",
    "pos": "v.",
    "meaning": "좋아하다",
    "examples": [],
    "tip": "",
    "no": 10,
    "day": 5
   },
   {
    "word": "love",
    "pron": "러(ㅂ)",
    "pos": "n.",
    "meaning": "사랑, 애정 v. 사랑하다",
    "examples": [
     {
      "en": "I am in love with you.",
      "ko": "널 사랑해."
     }
    ],
    "tip": "",
    "no": 11,
    "day": 5
   },
   {
    "word": "hug",
    "pron": "헉",
    "pos": "n.",
    "meaning": "포옹 v. 포옹하다",
    "examples": [],
    "tip": "",
    "no": 12,
    "day": 5
   },
   {
    "word": "kiss",
    "pron": "키(ㅅ)",
    "pos": "n.",
    "meaning": "입맞춤, 키스 v. 키스를 하다",
    "examples": [
     {
      "en": "Your kiss is the sweetest thing I've ever felt.",
      "ko": "당신의 키스는 최고로 달콤해."
     }
    ],
    "tip": "",
    "no": 13,
    "day": 5
   },
   {
    "word": "fall in love",
    "pron": "퍼얼 인 러(ㅂ)",
    "pos": "",
    "meaning": "사랑에 빠지다",
    "examples": [
     {
      "en": "I have a crush on Mary.",
      "ko": "나는 메리에게 완전히 반했어요."
     }
    ],
    "tip": "",
    "no": 14,
    "day": 5
   },
   {
    "word": "have a crush on",
    "pron": "해 버 크러쉬 언",
    "pos": "",
    "meaning": "~에게 홀딱 반하다",
    "examples": [],
    "tip": "",
    "no": 15,
    "day": 5
   },
   {
    "word": "love at first sight",
    "pron": "러 뱃 퍼-슷 사잇",
    "pos": "",
    "meaning": "첫눈에 반하다",
    "examples": [],
    "tip": "",
    "no": 16,
    "day": 5
   },
   {
    "word": "miss",
    "pron": "미(ㅅ)",
    "pos": "v.",
    "meaning": "그리워하다",
    "examples": [],
    "tip": "",
    "no": 17,
    "day": 5
   },
   {
    "word": "together",
    "pron": "터게더",
    "pos": "ad.",
    "meaning": "함께",
    "examples": [],
    "tip": "",
    "no": 18,
    "day": 5
   },
   {
    "word": "lovesick",
    "pron": "러(ㅂ)식",
    "pos": "a.",
    "meaning": "상사병에 걸린",
    "examples": [
     {
      "en": "I'm lovesick.",
      "ko": "난 상사병에 걸렸어."
     }
    ],
    "tip": "",
    "no": 19,
    "day": 5
   },
   {
    "word": "jealous",
    "pron": "젤러(ㅅ)",
    "pos": "a.",
    "meaning": "질투하는",
    "examples": [],
    "tip": "",
    "no": 20,
    "day": 5
   },
   {
    "word": "relationship",
    "pron": "릴레이션쉽",
    "pos": "n.",
    "meaning": "관계",
    "examples": [
     {
      "en": "Our relationship is going sour.",
      "ko": "우리 관계는 위기에 처해 있어요."
     }
    ],
    "tip": "",
    "no": 21,
    "day": 5
   },
   {
    "word": "jealousy",
    "pron": "젤러시",
    "pos": "n.",
    "meaning": "질투",
    "examples": [],
    "tip": "",
    "no": 22,
    "day": 5
   },
   {
    "word": "trouble",
    "pron": "츠러블",
    "pos": "n.",
    "meaning": "갈등",
    "examples": [],
    "tip": "",
    "no": 23,
    "day": 5
   },
   {
    "word": "break up",
    "pron": "브레익 업",
    "pos": "",
    "meaning": "이별하다, 헤어지다",
    "examples": [
     {
      "en": "I broke up with him.",
      "ko": "난 그와 헤어졌어."
     }
    ],
    "tip": "",
    "no": 24,
    "day": 5
   },
   {
    "word": "lie",
    "pron": "라이",
    "pos": "n.",
    "meaning": "거짓말 v. 거짓말하다",
    "examples": [],
    "tip": "",
    "no": 25,
    "day": 5
   },
   {
    "word": "cheat",
    "pron": "치잇",
    "pos": "v.",
    "meaning": "속이다",
    "examples": [],
    "tip": "",
    "no": 26,
    "day": 5
   },
   {
    "word": "tell a lie",
    "pron": "텔 어 라이",
    "pos": "",
    "meaning": "거짓말하다",
    "examples": [],
    "tip": "",
    "no": 27,
    "day": 5
   },
   {
    "word": "cheat on",
    "pron": "치잇 언",
    "pos": "",
    "meaning": "바람을 피우다",
    "examples": [],
    "tip": "",
    "no": 28,
    "day": 5
   },
   {
    "word": "dump",
    "pron": "덤(ㅍ)",
    "pos": "v.",
    "meaning": "(애인을) 버리다",
    "examples": [
     {
      "en": "I dumped him.",
      "ko": "내가 그를 찼지."
     }
    ],
    "tip": "",
    "no": 29,
    "day": 5
   },
   {
    "word": "forget",
    "pron": "퍼겟",
    "pos": "v.",
    "meaning": "잊다",
    "examples": [],
    "tip": "",
    "no": 30,
    "day": 5
   },
   {
    "word": "marry",
    "pron": "메리",
    "pos": "v.",
    "meaning": "~와 결혼하다",
    "examples": [
     {
      "en": "Would you marry me?",
      "ko": "저와 결혼해 주시겠어요?"
     }
    ],
    "tip": "",
    "no": 31,
    "day": 5
   },
   {
    "word": "propose",
    "pron": "프러포우(ㅈ)",
    "pos": "v.",
    "meaning": "청혼하다",
    "examples": [
     {
      "en": "Chris proposed to me.",
      "ko": "크리스가 나한테 청혼했어."
     },
     {
      "en": "I accepted his proposal.",
      "ko": "나는 청혼을 받아들였다."
     }
    ],
    "tip": "",
    "no": 32,
    "day": 5
   },
   {
    "word": "marriage",
    "pron": "메리쥐",
    "pos": "n.",
    "meaning": "결혼",
    "examples": [],
    "tip": "",
    "no": 33,
    "day": 5
   },
   {
    "word": "proposal",
    "pron": "프러포우절",
    "pos": "n.",
    "meaning": "청혼",
    "examples": [],
    "tip": "",
    "no": 34,
    "day": 5
   },
   {
    "word": "wedding",
    "pron": "웨딩",
    "pos": "n.",
    "meaning": "결혼",
    "examples": [],
    "tip": "",
    "no": 35,
    "day": 5
   },
   {
    "word": "wedding invitation",
    "pron": "웨딩 인비테이션",
    "pos": "",
    "meaning": "청첩장",
    "examples": [
     {
      "en": "This is our wedding invitation.",
      "ko": "이건 우리 청첩장이야."
     }
    ],
    "tip": "",
    "no": 36,
    "day": 5
   },
   {
    "word": "wedding ceremony",
    "pron": "웨딩 쎄러모우니",
    "pos": "",
    "meaning": "결혼식",
    "examples": [],
    "tip": "",
    "no": 37,
    "day": 5
   },
   {
    "word": "wedding ring",
    "pron": "웨딩 링",
    "pos": "",
    "meaning": "결혼반지",
    "examples": [],
    "tip": "",
    "no": 38,
    "day": 5
   },
   {
    "word": "wedding dress",
    "pron": "웨딩 드레(ㅅ)",
    "pos": "",
    "meaning": "웨딩드레스",
    "examples": [],
    "tip": "",
    "no": 39,
    "day": 5
   },
   {
    "word": "husband",
    "pron": "허즈번(ㄷ)",
    "pos": "n.",
    "meaning": "남편",
    "examples": [],
    "tip": "",
    "no": 40,
    "day": 5
   },
   {
    "word": "wife",
    "pron": "와이(ㅍ)",
    "pos": "n.",
    "meaning": "아내",
    "examples": [],
    "tip": "",
    "no": 41,
    "day": 5
   },
   {
    "word": "father-in-law",
    "pron": "파-더인러-",
    "pos": "n.",
    "meaning": "장인, 시아버지",
    "examples": [],
    "tip": "결혼 등으로 만들어지는 인척 관계를 나타낼 때는 가족 관계를 나타내는 말에 in-law를 붙여 만듭니다. 영어권에서는 우리말처럼 친인척 관계의 호칭이 발달되어 있지 않기 때문에, 우리말의 장인과 시아버지 모두 father-in-law라는 한 단어로 표현할 수 있습니다.",
    "no": 42,
    "day": 5,
    "tipLabel": "💡 tip"
   },
   {
    "word": "mother-in-law",
    "pron": "머더인러-",
    "pos": "n.",
    "meaning": "장모, 시어머니",
    "examples": [],
    "tip": "",
    "no": 43,
    "day": 5
   },
   {
    "word": "blind date",
    "pron": "블라인(ㄷ) 데잇",
    "pos": "",
    "meaning": "소개팅",
    "examples": [
     {
      "en": "Set me up for a blind date.",
      "ko": "소개팅 시켜 줘."
     }
    ],
    "tip": "",
    "no": 44,
    "day": 5
   },
   {
    "word": "make a friend",
    "pron": "메익 어 프렌(ㄷ)",
    "pos": "",
    "meaning": "친구를 사귀다",
    "examples": [],
    "tip": "",
    "no": 45,
    "day": 5
   },
   {
    "word": "ex-boyfriend",
    "pron": "엑(ㅅ)버이프렌(ㄷ)",
    "pos": "",
    "meaning": "(헤어진) 남자 친구",
    "examples": [],
    "tip": "",
    "no": 46,
    "day": 5
   },
   {
    "word": "ex-girlfriend",
    "pron": "엑(ㅅ)거얼프렌(ㄷ)",
    "pos": "",
    "meaning": "(헤어진) 여자 친구",
    "examples": [],
    "tip": "",
    "no": 47,
    "day": 5
   },
   {
    "word": "chemistry",
    "pron": "케머스츠리",
    "pos": "n.",
    "meaning": "공감대, 궁합",
    "examples": [],
    "tip": "원래 뜻은 '화학, (사람 사이의) 화학 반응'입니다.",
    "no": 48,
    "day": 5,
    "tipLabel": "💡 tip"
   },
   {
    "word": "appeal",
    "pron": "어피일",
    "pos": "n.",
    "meaning": "매력 v. 흥미를 끌다",
    "examples": [],
    "tip": "",
    "no": 49,
    "day": 5
   },
   {
    "word": "charming",
    "pron": "차-밍",
    "pos": "a.",
    "meaning": "매력적인",
    "examples": [],
    "tip": "",
    "no": 50,
    "day": 5
   },
   {
    "word": "hit on",
    "pron": "힛 언",
    "pos": "",
    "meaning": "꼬시다",
    "examples": [
     {
      "en": "Are you hitting on me?",
      "ko": "나한테 치근덕거리는 거야?"
     }
    ],
    "tip": "",
    "no": 51,
    "day": 5
   },
   {
    "word": "pick up",
    "pron": "픽 업",
    "pos": "",
    "meaning": "= pick up (hit on과 같은 표현)",
    "examples": [],
    "tip": "",
    "no": 52,
    "day": 5
   },
   {
    "word": "physical contact",
    "pron": "피지컬 칸택(ㅌ)",
    "pos": "",
    "meaning": "스킨십, 신체적 접촉",
    "examples": [],
    "tip": "",
    "no": 53,
    "day": 5
   },
   {
    "word": "wink",
    "pron": "윙(ㅋ)",
    "pos": "n.",
    "meaning": "윙크, 눈짓 v. 윙크하다",
    "examples": [],
    "tip": "",
    "no": 54,
    "day": 5
   },
   {
    "word": "betray",
    "pron": "비츠레이",
    "pos": "v.",
    "meaning": "배신하다",
    "examples": [],
    "tip": "",
    "no": 55,
    "day": 5
   },
   {
    "word": "bachelor",
    "pron": "배철러",
    "pos": "n.",
    "meaning": "미혼 남자, 독신자",
    "examples": [],
    "tip": "",
    "no": 56,
    "day": 5
   },
   {
    "word": "single man",
    "pron": "싱글 맨",
    "pos": "",
    "meaning": "미혼남",
    "examples": [],
    "tip": "",
    "no": 57,
    "day": 5
   },
   {
    "word": "single woman",
    "pron": "싱글 우먼",
    "pos": "",
    "meaning": "미혼녀",
    "examples": [],
    "tip": "",
    "no": 58,
    "day": 5
   },
   {
    "word": "engage",
    "pron": "인게이쥐",
    "pos": "v.",
    "meaning": "약혼하다",
    "examples": [],
    "tip": "",
    "no": 59,
    "day": 5
   },
   {
    "word": "fiancé",
    "pron": "피-아앙세이",
    "pos": "n.",
    "meaning": "약혼자(남자)",
    "examples": [],
    "tip": "발음은 차이가 없고 스펠링만 다르게 씁니다.",
    "no": 60,
    "day": 5,
    "tipLabel": "💡 tip"
   },
   {
    "word": "fiancée",
    "pron": "피-아앙세이",
    "pos": "n.",
    "meaning": "약혼녀",
    "examples": [],
    "tip": "",
    "no": 61,
    "day": 5
   },
   {
    "word": "veil",
    "pron": "베일",
    "pos": "n.",
    "meaning": "베일, 면사포",
    "examples": [],
    "tip": "",
    "no": 62,
    "day": 5
   },
   {
    "word": "bridal bouquet",
    "pron": "브라이들 보우케이",
    "pos": "",
    "meaning": "부케",
    "examples": [],
    "tip": "",
    "no": 63,
    "day": 5
   },
   {
    "word": "wedding reception",
    "pron": "웨딩 리쎕션",
    "pos": "",
    "meaning": "피로연",
    "examples": [],
    "tip": "",
    "no": 64,
    "day": 5
   },
   {
    "word": "groom",
    "pron": "그루움",
    "pos": "n.",
    "meaning": "신랑",
    "examples": [],
    "tip": "",
    "no": 65,
    "day": 5
   },
   {
    "word": "bridegroom",
    "pron": "브라이(ㄷ)그루움",
    "pos": "",
    "meaning": "= groom (신랑)",
    "examples": [],
    "tip": "",
    "no": 66,
    "day": 5
   },
   {
    "word": "groomsman",
    "pron": "그루움(ㅅ)먼",
    "pos": "n.",
    "meaning": "신랑 들러리",
    "examples": [],
    "tip": "들러리 중 대표를 best man(신랑), maid of honor(신부)라고 합니다.",
    "no": 67,
    "day": 5,
    "tipLabel": "💡 tip"
   },
   {
    "word": "bride",
    "pron": "브라이(ㄷ)",
    "pos": "n.",
    "meaning": "신부",
    "examples": [
     {
      "en": "What a beautiful bride!",
      "ko": "신부가 참 아름다워요!"
     }
    ],
    "tip": "",
    "no": 68,
    "day": 5
   },
   {
    "word": "bridesmaid",
    "pron": "브라이(ㅈ)메잇",
    "pos": "n.",
    "meaning": "신부 들러리",
    "examples": [],
    "tip": "",
    "no": 69,
    "day": 5
   },
   {
    "word": "celebrate",
    "pron": "쎌러브레잇",
    "pos": "v.",
    "meaning": "축하하다",
    "examples": [],
    "tip": "",
    "no": 70,
    "day": 5
   },
   {
    "word": "celebration",
    "pron": "쎌러브레이션",
    "pos": "n.",
    "meaning": "축하, 축하 인사",
    "examples": [],
    "tip": "",
    "no": 71,
    "day": 5
   },
   {
    "word": "congratulation",
    "pron": "컨그래츄레이션",
    "pos": "n.",
    "meaning": "축하, 축하의 말 interj. 축하합니다",
    "examples": [
     {
      "en": "Congratulations on your wedding.",
      "ko": "두 분의 결혼을 진심으로 축하합니다."
     }
    ],
    "tip": "congratulations는 상대방이 노력하여 성공한 특별한 일에 대해 축하한다고 하는 말로, s를 붙여 감탄사로 쓰입니다.",
    "no": 72,
    "day": 5,
    "tipLabel": "💡 tip"
   },
   {
    "word": "anniversary",
    "pron": "애너버-서리",
    "pos": "n.",
    "meaning": "기념일",
    "examples": [],
    "tip": "",
    "no": 73,
    "day": 5
   },
   {
    "word": "honeymoon",
    "pron": "허니무운",
    "pos": "n.",
    "meaning": "신혼여행",
    "examples": [],
    "tip": "",
    "no": 74,
    "day": 5
   },
   {
    "word": "couple",
    "pron": "커플",
    "pos": "n.",
    "meaning": "부부",
    "examples": [],
    "tip": "",
    "no": 75,
    "day": 5
   },
   {
    "word": "spouse",
    "pron": "스파우(ㅅ)",
    "pos": "n.",
    "meaning": "배우자",
    "examples": [],
    "tip": "",
    "no": 76,
    "day": 5
   },
   {
    "word": "life partner",
    "pron": "라이(ㅍ) 파-(ㅌ)너",
    "pos": "",
    "meaning": "반려자",
    "examples": [],
    "tip": "",
    "no": 77,
    "day": 5
   },
   {
    "word": "brother-in-law",
    "pron": "브러더인러-",
    "pos": "n.",
    "meaning": "처남, 매부, 매형, 제부, 시동생, 시아주버니",
    "examples": [],
    "tip": "",
    "no": 78,
    "day": 5
   },
   {
    "word": "sister-in-law",
    "pron": "시스터인러-",
    "pos": "n.",
    "meaning": "처제, 처형, 올케, 동서, 시누이",
    "examples": [],
    "tip": "",
    "no": 79,
    "day": 5
   }
  ]
 },
 {
  "day": 6,
  "title": "Unit 06. 가족",
  "words": [
   {
    "word": "family",
    "pron": "패멀리",
    "pos": "n.",
    "meaning": "가족",
    "examples": [
     {
      "en": "After dinner all my family have coffee in the living room.",
      "ko": "저녁 식사 후에 우리 가족은 거실에서 커피를 마셔요."
     }
    ],
    "tip": "",
    "no": 1,
    "day": 6
   },
   {
    "word": "relative",
    "pron": "렐러티(ㅂ)",
    "pos": "n.",
    "meaning": "친척",
    "examples": [],
    "tip": "",
    "no": 2,
    "day": 6
   },
   {
    "word": "grandparents",
    "pron": "그랜(ㄷ)페어런(ㅊ)",
    "pos": "n.",
    "meaning": "조부모",
    "examples": [],
    "tip": "",
    "no": 3,
    "day": 6
   },
   {
    "word": "grandfather",
    "pron": "그랜(ㄷ)파-더",
    "pos": "n.",
    "meaning": "할아버지",
    "examples": [
     {
      "en": "I'm much more like my grandmother on my mother's side.",
      "ko": "나는 외할머니를 닮았어요."
     }
    ],
    "tip": "",
    "no": 4,
    "day": 6
   },
   {
    "word": "grandmother",
    "pron": "그랜(ㄷ)머더",
    "pos": "n.",
    "meaning": "할머니",
    "examples": [],
    "tip": "",
    "no": 5,
    "day": 6
   },
   {
    "word": "parents",
    "pron": "페어런(ㅊ)",
    "pos": "n.",
    "meaning": "부모",
    "examples": [
     {
      "en": "All the parents will visit the teacher today.",
      "ko": "오늘 모든 부모님들은 선생님을 방문하신다."
     }
    ],
    "tip": "parent는 아버지나 어머니 한쪽만을 말합니다.",
    "no": 6,
    "day": 6,
    "tipLabel": "💡 tip"
   },
   {
    "word": "father",
    "pron": "파-더",
    "pos": "n.",
    "meaning": "아버지",
    "examples": [],
    "tip": "",
    "no": 7,
    "day": 6
   },
   {
    "word": "dad",
    "pron": "댓",
    "pos": "n.",
    "meaning": "아빠",
    "examples": [],
    "tip": "",
    "no": 8,
    "day": 6
   },
   {
    "word": "mother",
    "pron": "머더",
    "pos": "n.",
    "meaning": "어머니",
    "examples": [
     {
      "en": "Do you look more like your mother or your father?",
      "ko": "당신은 어머니를 닮았어요, 아버지를 닮았어요?"
     }
    ],
    "tip": "",
    "no": 9,
    "day": 6
   },
   {
    "word": "mom",
    "pron": "맘",
    "pos": "n.",
    "meaning": "엄마",
    "examples": [],
    "tip": "",
    "no": 10,
    "day": 6
   },
   {
    "word": "child",
    "pron": "차일(ㄷ)",
    "pos": "n.",
    "meaning": "아이, 자식",
    "examples": [
     {
      "en": "It's dangerous for children to use gas stoves.",
      "ko": "어린이들이 가스레인지를 사용하는 건 위험해요."
     }
    ],
    "tip": "",
    "no": 11,
    "day": 6
   },
   {
    "word": "kid",
    "pron": "킷",
    "pos": "",
    "meaning": "= child (아이, 자식)",
    "examples": [],
    "tip": "kid는 child보다 더 구어적 표현입니다.",
    "no": 12,
    "day": 6,
    "tipLabel": "💡 tip"
   },
   {
    "word": "children",
    "pron": "칠드런",
    "pos": "n.",
    "meaning": "아이들",
    "examples": [],
    "tip": "child의 복수형입니다.",
    "no": 13,
    "day": 6,
    "tipLabel": "💡 tip"
   },
   {
    "word": "son",
    "pron": "선",
    "pos": "n.",
    "meaning": "아들",
    "examples": [],
    "tip": "",
    "no": 14,
    "day": 6
   },
   {
    "word": "daughter",
    "pron": "더-터",
    "pos": "n.",
    "meaning": "딸",
    "examples": [],
    "tip": "",
    "no": 15,
    "day": 6
   },
   {
    "word": "brother",
    "pron": "브러더",
    "pos": "n.",
    "meaning": "형제",
    "examples": [],
    "tip": "",
    "no": 16,
    "day": 6
   },
   {
    "word": "older brother",
    "pron": "오울더 브러더",
    "pos": "n.",
    "meaning": "형, 오빠",
    "examples": [],
    "tip": "",
    "no": 17,
    "day": 6
   },
   {
    "word": "younger brother",
    "pron": "영거 브러더",
    "pos": "n.",
    "meaning": "남동생",
    "examples": [],
    "tip": "",
    "no": 18,
    "day": 6
   },
   {
    "word": "sister",
    "pron": "시스터",
    "pos": "n.",
    "meaning": "자매",
    "examples": [
     {
      "en": "My sister resembles my father around the eyes.",
      "ko": "여동생은 눈 주위가 아버지를 닮았어요."
     }
    ],
    "tip": "",
    "no": 19,
    "day": 6
   },
   {
    "word": "older sister",
    "pron": "오울더 시스터",
    "pos": "n.",
    "meaning": "누나, 언니",
    "examples": [],
    "tip": "",
    "no": 20,
    "day": 6
   },
   {
    "word": "younger sister",
    "pron": "영거 시스터",
    "pos": "n.",
    "meaning": "여동생",
    "examples": [],
    "tip": "",
    "no": 21,
    "day": 6
   },
   {
    "word": "husband",
    "pron": "허즈번(ㄷ)",
    "pos": "n.",
    "meaning": "남편",
    "examples": [
     {
      "en": "My husband snores in bed.",
      "ko": "남편은 잠자리에서 코를 골아요."
     }
    ],
    "tip": "",
    "no": 22,
    "day": 6
   },
   {
    "word": "wife",
    "pron": "와이(ㅍ)",
    "pos": "n.",
    "meaning": "아내",
    "examples": [
     {
      "en": "My wife tosses and turns a lot in her sleep.",
      "ko": "아내는 자면서 자꾸 뒤척여요."
     }
    ],
    "tip": "",
    "no": 23,
    "day": 6
   },
   {
    "word": "uncle",
    "pron": "엉클",
    "pos": "n.",
    "meaning": "삼촌, 아저씨",
    "examples": [],
    "tip": "",
    "no": 24,
    "day": 6
   },
   {
    "word": "aunt",
    "pron": "앤(ㅌ)",
    "pos": "n.",
    "meaning": "고모, 이모, 숙모",
    "examples": [],
    "tip": "",
    "no": 25,
    "day": 6
   },
   {
    "word": "cousin",
    "pron": "커즌",
    "pos": "n.",
    "meaning": "사촌",
    "examples": [],
    "tip": "",
    "no": 26,
    "day": 6
   },
   {
    "word": "granddaughter",
    "pron": "그랜(ㄷ)더-터",
    "pos": "n.",
    "meaning": "손녀",
    "examples": [],
    "tip": "",
    "no": 27,
    "day": 6
   },
   {
    "word": "grandson",
    "pron": "그랜(ㄷ)선",
    "pos": "n.",
    "meaning": "손자",
    "examples": [],
    "tip": "",
    "no": 28,
    "day": 6
   },
   {
    "word": "grandchild",
    "pron": "그랜(ㄷ)차일(ㄷ)",
    "pos": "n.",
    "meaning": "손주",
    "examples": [],
    "tip": "",
    "no": 29,
    "day": 6
   },
   {
    "word": "niece",
    "pron": "니-(ㅆ)",
    "pos": "n.",
    "meaning": "여자 조카",
    "examples": [],
    "tip": "",
    "no": 30,
    "day": 6
   },
   {
    "word": "nephew",
    "pron": "네퓨-",
    "pos": "n.",
    "meaning": "남자 조카",
    "examples": [],
    "tip": "",
    "no": 31,
    "day": 6
   },
   {
    "word": "old",
    "pron": "오울(ㄷ)",
    "pos": "a.",
    "meaning": "나이 많은",
    "examples": [],
    "tip": "old가 수사와 함께 쓰이면 '~세'의 의미로 나이를 나타낼 수 있습니다.",
    "no": 32,
    "day": 6,
    "tipLabel": "💡 tip"
   },
   {
    "word": "adult",
    "pron": "어덜(ㅌ)",
    "pos": "n.",
    "meaning": "어른, 성인",
    "examples": [],
    "tip": "미국이나 영국에서는 모두 18세 이상을 adult라고 합니다.",
    "no": 33,
    "day": 6,
    "tipLabel": "💡 tip"
   },
   {
    "word": "young",
    "pron": "영",
    "pos": "a.",
    "meaning": "젊은",
    "examples": [],
    "tip": "",
    "no": 34,
    "day": 6
   },
   {
    "word": "youth",
    "pron": "유-쓰",
    "pos": "n.",
    "meaning": "청년, 젊은이",
    "examples": [],
    "tip": "child와 adult의 중간에 해당하는 시기를 가리킵니다.",
    "no": 35,
    "day": 6,
    "tipLabel": "💡 tip"
   },
   {
    "word": "infant",
    "pron": "인펀(ㅌ)",
    "pos": "n.",
    "meaning": "유아",
    "examples": [],
    "tip": "infant는 미국 영어에서는 주로 1세 미만의 젖먹이 아이를, 영국이나 호주에서는 4~7세의 유치원생을 가리킵니다. toddler는 막 걸음마를 뗀 정도의 아기를 말합니다.",
    "no": 36,
    "day": 6,
    "tipLabel": "💡 tip"
   },
   {
    "word": "toddler",
    "pron": "토들러",
    "pos": "",
    "meaning": "= infant (유아)",
    "examples": [],
    "tip": "",
    "no": 37,
    "day": 6
   },
   {
    "word": "baby",
    "pron": "베이비",
    "pos": "n.",
    "meaning": "아기",
    "examples": [
     {
      "en": "I will look after the baby.",
      "ko": "아기는 내가 돌볼게요."
     }
    ],
    "tip": "",
    "no": 38,
    "day": 6
   },
   {
    "word": "pregnant",
    "pron": "프렉넌(ㅌ)",
    "pos": "a.",
    "meaning": "임신한",
    "examples": [
     {
      "en": "She's 8 months pregnant.",
      "ko": "그녀는 임신 8개월이다."
     }
    ],
    "tip": "",
    "no": 39,
    "day": 6
   },
   {
    "word": "pregnancy",
    "pron": "프렉넌씨",
    "pos": "n.",
    "meaning": "임신",
    "examples": [],
    "tip": "",
    "no": 40,
    "day": 6
   },
   {
    "word": "expecting mom",
    "pron": "익스펙팅 맘",
    "pos": "",
    "meaning": "임산부",
    "examples": [],
    "tip": "",
    "no": 41,
    "day": 6
   },
   {
    "word": "birth",
    "pron": "버-쓰",
    "pos": "n.",
    "meaning": "출생, 출산",
    "examples": [],
    "tip": "'태어나다'는 'be+born'이라고 씁니다.",
    "no": 42,
    "day": 6,
    "tipLabel": "💡 tip"
   },
   {
    "word": "give birth to",
    "pron": "기(ㅂ) 버-쓰 투",
    "pos": "",
    "meaning": "출산하다",
    "examples": [],
    "tip": "",
    "no": 43,
    "day": 6
   },
   {
    "word": "nurse",
    "pron": "너-(ㅅ)",
    "pos": "v.",
    "meaning": "수유하다",
    "examples": [],
    "tip": "",
    "no": 44,
    "day": 6
   },
   {
    "word": "powdered milk",
    "pron": "파우더(ㄷ) 밀(ㅋ)",
    "pos": "",
    "meaning": "분유",
    "examples": [],
    "tip": "",
    "no": 45,
    "day": 6
   },
   {
    "word": "breast milk",
    "pron": "브레슷 밀(ㅋ)",
    "pos": "",
    "meaning": "모유",
    "examples": [],
    "tip": "",
    "no": 46,
    "day": 6
   },
   {
    "word": "nursing bottle",
    "pron": "너-싱 바들",
    "pos": "",
    "meaning": "젖병",
    "examples": [],
    "tip": "",
    "no": 47,
    "day": 6
   },
   {
    "word": "diaper",
    "pron": "다이어퍼",
    "pos": "n.",
    "meaning": "기저귀",
    "examples": [
     {
      "en": "Would you mind changing the diaper?",
      "ko": "기저귀 좀 갈아 줄래요?"
     }
    ],
    "tip": "",
    "no": 48,
    "day": 6
   },
   {
    "word": "bring up",
    "pron": "브링 업",
    "pos": "",
    "meaning": "기르다, 양육하다",
    "examples": [
     {
      "en": "She is bringing up her baby on the bottle.",
      "ko": "그녀는 우유로 아기를 키우고 있어요."
     }
    ],
    "tip": "",
    "no": 49,
    "day": 6
   },
   {
    "word": "take care of",
    "pron": "테익 케어 어(ㅂ)",
    "pos": "",
    "meaning": "돌보다",
    "examples": [
     {
      "en": "I've found a person to take care of my baby.",
      "ko": "아기 돌볼 사람을 찾았어요."
     }
    ],
    "tip": "",
    "no": 50,
    "day": 6
   },
   {
    "word": "baby-sitter",
    "pron": "베이비시더",
    "pos": "n.",
    "meaning": "보모",
    "examples": [
     {
      "en": "I know a baby-sitter who has lots of experience.",
      "ko": "나는 경험이 많은 보모를 알고 있어요."
     }
    ],
    "tip": "",
    "no": 51,
    "day": 6
   },
   {
    "word": "nanny",
    "pron": "내니",
    "pos": "n.",
    "meaning": "유모",
    "examples": [],
    "tip": "",
    "no": 52,
    "day": 6
   },
   {
    "word": "stroller",
    "pron": "스츠로울러",
    "pos": "n.",
    "meaning": "유모차",
    "examples": [],
    "tip": "stroller는 요즘 많이 사용하는 접어둘 수 있는 유모차를, baby carriage는 요람 모양에 바퀴가 달린 전형적인 유모차를 가리킵니다.",
    "no": 53,
    "day": 6,
    "tipLabel": "💡 tip"
   },
   {
    "word": "crib",
    "pron": "크립",
    "pos": "n.",
    "meaning": "(테두리 난간이 있는) 유아용 침대",
    "examples": [],
    "tip": "",
    "no": 54,
    "day": 6
   },
   {
    "word": "harmonious",
    "pron": "하-모우니어(ㅅ)",
    "pos": "a.",
    "meaning": "화목한",
    "examples": [],
    "tip": "",
    "no": 55,
    "day": 6
   },
   {
    "word": "discord",
    "pron": "디스커-(ㄷ)",
    "pos": "n.",
    "meaning": "불화",
    "examples": [],
    "tip": "",
    "no": 56,
    "day": 6
   },
   {
    "word": "separation",
    "pron": "세퍼레이션",
    "pos": "n.",
    "meaning": "별거",
    "examples": [],
    "tip": "",
    "no": 57,
    "day": 6
   },
   {
    "word": "divorce",
    "pron": "디버-(ㅆ)",
    "pos": "n.",
    "meaning": "이혼; 이혼하다",
    "examples": [
     {
      "en": "They finally divorced each other.",
      "ko": "그들은 결국 이혼했습니다."
     }
    ],
    "tip": "",
    "no": 58,
    "day": 6
   },
   {
    "word": "daddy",
    "pron": "대디",
    "pos": "",
    "meaning": "= dad (아빠)",
    "examples": [],
    "tip": "",
    "no": 59,
    "day": 6
   },
   {
    "word": "mommy",
    "pron": "마미",
    "pos": "",
    "meaning": "= mom (엄마)",
    "examples": [],
    "tip": "",
    "no": 60,
    "day": 6
   },
   {
    "word": "grandpa",
    "pron": "그랜(ㄷ)파-",
    "pos": "",
    "meaning": "= grandfather (할아버지)",
    "examples": [],
    "tip": "할아버지와 할머니를 부르는 비격식 호칭입니다.",
    "no": 61,
    "day": 6,
    "tipLabel": "💡 tip"
   },
   {
    "word": "grandma",
    "pron": "그랜(ㄷ)마-",
    "pos": "",
    "meaning": "= grandmother (할머니)",
    "examples": [],
    "tip": "",
    "no": 62,
    "day": 6
   },
   {
    "word": "resemble",
    "pron": "리젬블",
    "pos": "a.",
    "meaning": "닮은, 비슷한",
    "examples": [],
    "tip": "",
    "no": 63,
    "day": 6
   },
   {
    "word": "twins",
    "pron": "트윈(ㅅ)",
    "pos": "n.",
    "meaning": "쌍둥이",
    "examples": [],
    "tip": "쌍둥이는 두 명 이상이므로 복수형으로 쓰는데, 쌍둥이 중 한 명을 가리킬 때는 s를 붙이지 않습니다.",
    "no": 64,
    "day": 6,
    "tipLabel": "💡 tip"
   },
   {
    "word": "twin",
    "pron": "트윈",
    "pos": "n.",
    "meaning": "쌍둥이 중의 하나",
    "examples": [],
    "tip": "",
    "no": 65,
    "day": 6
   },
   {
    "word": "triplet",
    "pron": "트리플릿",
    "pos": "n.",
    "meaning": "세쌍둥이 중의 하나",
    "examples": [],
    "tip": "",
    "no": 66,
    "day": 6
   },
   {
    "word": "quadruplet",
    "pron": "쿠앗러플릿",
    "pos": "n.",
    "meaning": "네쌍둥이 중의 하나",
    "examples": [],
    "tip": "",
    "no": 67,
    "day": 6
   },
   {
    "word": "quintuplet",
    "pron": "쿠인터플릿",
    "pos": "n.",
    "meaning": "다섯쌍둥이 중의 하나",
    "examples": [],
    "tip": "",
    "no": 68,
    "day": 6
   },
   {
    "word": "darling",
    "pron": "다-링",
    "pos": "n.",
    "meaning": "여보, 얘야",
    "examples": [],
    "tip": "부부, 연인은 물론 부모 자식 간에도 사용할 수 있는 호칭입니다.",
    "no": 69,
    "day": 6,
    "tipLabel": "💡 tip"
   },
   {
    "word": "sweetheart",
    "pron": "스위잇하-(ㅌ)",
    "pos": "",
    "meaning": "여보, 얘야",
    "examples": [],
    "tip": "",
    "no": 70,
    "day": 6
   },
   {
    "word": "honey",
    "pron": "허니",
    "pos": "",
    "meaning": "여보, 얘야",
    "examples": [],
    "tip": "",
    "no": 71,
    "day": 6
   },
   {
    "word": "son-in-law",
    "pron": "선인러-",
    "pos": "n.",
    "meaning": "사위",
    "examples": [],
    "tip": "",
    "no": 72,
    "day": 6
   },
   {
    "word": "daughter-in-law",
    "pron": "더-터인러-",
    "pos": "n.",
    "meaning": "며느리",
    "examples": [],
    "tip": "",
    "no": 73,
    "day": 6
   },
   {
    "word": "morning sickness",
    "pron": "머-닝 식니(ㅅ)",
    "pos": "",
    "meaning": "(임신 초기에 흔히 오전에만 나타나는) 입덧",
    "examples": [],
    "tip": "",
    "no": 74,
    "day": 6
   },
   {
    "word": "baby due",
    "pron": "베이비 듀-",
    "pos": "",
    "meaning": "출산예정일",
    "examples": [
     {
      "en": "When is the baby due?",
      "ko": "출산일이 언제예요?"
     }
    ],
    "tip": "",
    "no": 75,
    "day": 6
   },
   {
    "word": "baby carriage",
    "pron": "베이비 캐리쥐",
    "pos": "",
    "meaning": "유모차",
    "examples": [],
    "tip": "",
    "no": 76,
    "day": 6
   },
   {
    "word": "adopt",
    "pron": "어답(ㅌ)",
    "pos": "v.",
    "meaning": "입양하다",
    "examples": [],
    "tip": "",
    "no": 77,
    "day": 6
   },
   {
    "word": "adopted child",
    "pron": "어답팃 차일(ㄷ)",
    "pos": "",
    "meaning": "입양아",
    "examples": [],
    "tip": "",
    "no": 78,
    "day": 6
   },
   {
    "word": "adoptive parents",
    "pron": "어답티(ㅂ) 페어런(ㅊ)",
    "pos": "",
    "meaning": "양부모",
    "examples": [],
    "tip": "",
    "no": 79,
    "day": 6
   },
   {
    "word": "separated",
    "pron": "세퍼레이팃",
    "pos": "a.",
    "meaning": "별거 중인",
    "examples": [],
    "tip": "",
    "no": 80,
    "day": 6
   },
   {
    "word": "estranged",
    "pron": "이스츠레인쥐(ㄷ)",
    "pos": "",
    "meaning": "별거 중인",
    "examples": [],
    "tip": "",
    "no": 81,
    "day": 6
   },
   {
    "word": "remarry",
    "pron": "리-매리",
    "pos": "v.",
    "meaning": "재혼시키다, 재혼하다",
    "examples": [
     {
      "en": "He remarried last month.",
      "ko": "그는 지난달에 재혼했습니다."
     }
    ],
    "tip": "",
    "no": 82,
    "day": 6
   },
   {
    "word": "remarriage",
    "pron": "리-매리쥐",
    "pos": "n.",
    "meaning": "재혼",
    "examples": [],
    "tip": "",
    "no": 83,
    "day": 6
   }
  ]
 },
 {
  "day": 7,
  "title": "Unit 07. 시간&날짜",
  "words": [
   {
    "word": "time",
    "pron": "타임",
    "pos": "n.",
    "meaning": "시간, 때",
    "examples": [
     {
      "en": "It's time to get up.",
      "ko": "일어날 시간이야!"
     }
    ],
    "tip": "",
    "no": 1,
    "day": 7
   },
   {
    "word": "hour",
    "pron": "아워",
    "pos": "n.",
    "meaning": "시간, 시각, 시(時)",
    "examples": [
     {
      "en": "May I come in one hour late tomorrow morning?",
      "ko": "제가 내일 한 시간 늦게 출근해도 될까요?"
     }
    ],
    "tip": "",
    "no": 2,
    "day": 7
   },
   {
    "word": "minute",
    "pron": "미닛",
    "pos": "n.",
    "meaning": "분(分)",
    "examples": [],
    "tip": "",
    "no": 3,
    "day": 7
   },
   {
    "word": "second",
    "pron": "세컨(ㄷ)",
    "pos": "n.",
    "meaning": "초(秒)",
    "examples": [],
    "tip": "",
    "no": 4,
    "day": 7
   },
   {
    "word": "half",
    "pron": "하(ㅍ)",
    "pos": "n.",
    "meaning": "반(半), 2분의 1, 30분",
    "examples": [],
    "tip": "",
    "no": 5,
    "day": 7
   },
   {
    "word": "clock",
    "pron": "클락",
    "pos": "n.",
    "meaning": "시계, 자명종",
    "examples": [],
    "tip": "",
    "no": 6,
    "day": 7
   },
   {
    "word": "watch",
    "pron": "왓취",
    "pos": "n.",
    "meaning": "손목시계",
    "examples": [],
    "tip": "",
    "no": 7,
    "day": 7
   },
   {
    "word": "late",
    "pron": "레잇",
    "pos": "a.",
    "meaning": "늦은; 늦게",
    "examples": [],
    "tip": "",
    "no": 8,
    "day": 7
   },
   {
    "word": "early",
    "pron": "어-리",
    "pos": "a.",
    "meaning": "이른; 일찍이",
    "examples": [
     {
      "en": "I wake up early in the morning.",
      "ko": "전 아침 일찍 일어나요."
     }
    ],
    "tip": "",
    "no": 9,
    "day": 7
   },
   {
    "word": "dawn",
    "pron": "더언",
    "pos": "n.",
    "meaning": "새벽(자정부터 동트기 전); 날이 새다",
    "examples": [],
    "tip": "",
    "no": 10,
    "day": 7
   },
   {
    "word": "morning",
    "pron": "머-닝",
    "pos": "n.",
    "meaning": "아침, 오전",
    "examples": [
     {
      "en": "Good morning.",
      "ko": "안녕하세요. (아침 인사)"
     }
    ],
    "tip": "",
    "no": 11,
    "day": 7
   },
   {
    "word": "noon",
    "pron": "누운",
    "pos": "n.",
    "meaning": "정오, 한낮",
    "examples": [],
    "tip": "",
    "no": 12,
    "day": 7
   },
   {
    "word": "lunch",
    "pron": "런취",
    "pos": "n.",
    "meaning": "점심 식사",
    "examples": [],
    "tip": "",
    "no": 13,
    "day": 7
   },
   {
    "word": "snack",
    "pron": "스낵",
    "pos": "n.",
    "meaning": "간식; 간식을 먹다",
    "examples": [],
    "tip": "",
    "no": 14,
    "day": 7
   },
   {
    "word": "evening",
    "pron": "이-브닝",
    "pos": "n.",
    "meaning": "저녁",
    "examples": [
     {
      "en": "Good evening.",
      "ko": "안녕하세요. (저녁 인사)"
     }
    ],
    "tip": "",
    "no": 15,
    "day": 7
   },
   {
    "word": "dinner",
    "pron": "디너",
    "pos": "n.",
    "meaning": "저녁 식사",
    "examples": [],
    "tip": "",
    "no": 16,
    "day": 7
   },
   {
    "word": "supper",
    "pron": "서퍼",
    "pos": "n.",
    "meaning": "저녁 식사, 야참",
    "examples": [],
    "tip": "dinner보다 가볍게 먹는 저녁 식사를 가리킵니다.",
    "no": 17,
    "day": 7,
    "tipLabel": "💡 tip"
   },
   {
    "word": "night",
    "pron": "나잇",
    "pos": "n.",
    "meaning": "밤",
    "examples": [
     {
      "en": "Good night.",
      "ko": "잘 자요."
     }
    ],
    "tip": "",
    "no": 18,
    "day": 7
   },
   {
    "word": "sleep",
    "pron": "슬리입",
    "pos": "v.",
    "meaning": "자다",
    "examples": [
     {
      "en": "I slept well last night.",
      "ko": "지난밤에는 푹 잤어요."
     }
    ],
    "tip": "",
    "no": 19,
    "day": 7
   },
   {
    "word": "go to bed",
    "pron": "고우 투 벳",
    "pos": "",
    "meaning": "잠자리에 들다",
    "examples": [
     {
      "en": "It's time to go to bed.",
      "ko": "잠자리에 들 시간이야."
     }
    ],
    "tip": "",
    "no": 20,
    "day": 7
   },
   {
    "word": "dream",
    "pron": "드리임",
    "pos": "n.",
    "meaning": "꿈, 꿈꾸다",
    "examples": [
     {
      "en": "Sweet dreams!",
      "ko": "좋은 꿈 꿔!"
     }
    ],
    "tip": "",
    "no": 21,
    "day": 7
   },
   {
    "word": "nap",
    "pron": "냅",
    "pos": "n.",
    "meaning": "낮잠, 졸기; 잠시 졸다",
    "examples": [],
    "tip": "",
    "no": 22,
    "day": 7
   },
   {
    "word": "doze",
    "pron": "도우(ㅈ)",
    "pos": "n.",
    "meaning": "졸기; 선잠 자다",
    "examples": [],
    "tip": "",
    "no": 23,
    "day": 7
   },
   {
    "word": "insomnia",
    "pron": "인삼니어",
    "pos": "n.",
    "meaning": "불면증",
    "examples": [],
    "tip": "",
    "no": 24,
    "day": 7
   },
   {
    "word": "wake up",
    "pron": "웨익 업",
    "pos": "",
    "meaning": "일어나다, 잠에서 깨다",
    "examples": [
     {
      "en": "Get up now, or you'll be late.",
      "ko": "일어나, 늦겠어."
     }
    ],
    "tip": "wake up은 잠에서 깬다는 상태에 초점을 맞췄다면, get up은 잠자리에서 일어난 동작을 표현하는 말입니다.",
    "no": 25,
    "day": 7,
    "tipLabel": "💡 tip"
   },
   {
    "word": "get up",
    "pron": "겟 업",
    "pos": "",
    "meaning": "(잠자리에서) 일어나다",
    "examples": [],
    "tip": "",
    "no": 26,
    "day": 7
   },
   {
    "word": "get out of bed",
    "pron": "겟 아웃 어(ㅂ) 벳",
    "pos": "",
    "meaning": "잠자리에서 일어나다",
    "examples": [],
    "tip": "",
    "no": 27,
    "day": 7
   },
   {
    "word": "breakfast",
    "pron": "브렉퍼슷",
    "pos": "n.",
    "meaning": "아침 식사",
    "examples": [
     {
      "en": "Breakfast is ready!",
      "ko": "아침 식사 다 됐어요!"
     }
    ],
    "tip": "",
    "no": 28,
    "day": 7
   },
   {
    "word": "alarm",
    "pron": "얼라암",
    "pos": "n.",
    "meaning": "알람",
    "examples": [],
    "tip": "",
    "no": 29,
    "day": 7
   },
   {
    "word": "alarm clock",
    "pron": "얼라암 클락",
    "pos": "",
    "meaning": "알람시계",
    "examples": [],
    "tip": "",
    "no": 30,
    "day": 7
   },
   {
    "word": "wake-up call",
    "pron": "웨익업 커얼",
    "pos": "",
    "meaning": "모닝콜",
    "examples": [],
    "tip": "",
    "no": 31,
    "day": 7
   },
   {
    "word": "oversleep",
    "pron": "오우버슬리입",
    "pos": "v.",
    "meaning": "늦게 일어나다, 늦잠을 자다",
    "examples": [
     {
      "en": "Oh no, I overslept.",
      "ko": "이런, 늦잠을 잤네."
     }
    ],
    "tip": "",
    "no": 32,
    "day": 7
   },
   {
    "word": "wash",
    "pron": "워쉬",
    "pos": "v.",
    "meaning": "씻다",
    "examples": [
     {
      "en": "Wash your hands first.",
      "ko": "손부터 씻어야지."
     }
    ],
    "tip": "",
    "no": 33,
    "day": 7
   },
   {
    "word": "wash up",
    "pron": "워쉬 업",
    "pos": "",
    "meaning": "세수하다",
    "examples": [],
    "tip": "",
    "no": 34,
    "day": 7
   },
   {
    "word": "wash one's hair",
    "pron": "워쉬 원(ㅅ) 헤어",
    "pos": "",
    "meaning": "머리를 감다",
    "examples": [],
    "tip": "",
    "no": 35,
    "day": 7
   },
   {
    "word": "brush one's teeth",
    "pron": "브러쉬 원(ㅅ) 티-쓰",
    "pos": "",
    "meaning": "이를 닦다",
    "examples": [],
    "tip": "",
    "no": 36,
    "day": 7
   },
   {
    "word": "day",
    "pron": "데이",
    "pos": "n.",
    "meaning": "날, 일(日)",
    "examples": [
     {
      "en": "Have a nice day.",
      "ko": "좋은 하루 보내요."
     }
    ],
    "tip": "",
    "no": 37,
    "day": 7
   },
   {
    "word": "calendar",
    "pron": "캘린더",
    "pos": "n.",
    "meaning": "달력",
    "examples": [],
    "tip": "",
    "no": 38,
    "day": 7
   },
   {
    "word": "week",
    "pron": "위익",
    "pos": "n.",
    "meaning": "주(週)",
    "examples": [
     {
      "en": "It took a week to arrange my new apartment.",
      "ko": "새 집을 정리하는데 일주일이나 걸렸어요."
     }
    ],
    "tip": "",
    "no": 39,
    "day": 7
   },
   {
    "word": "weekend",
    "pron": "위–켄(ㄷ)",
    "pos": "n.",
    "meaning": "주말",
    "examples": [
     {
      "en": "Have a nice weekend.",
      "ko": "즐거운 주말 보내요."
     }
    ],
    "tip": "",
    "no": 40,
    "day": 7
   },
   {
    "word": "monday",
    "pron": "먼데이",
    "pos": "n.",
    "meaning": "월요일",
    "examples": [],
    "tip": "",
    "no": 41,
    "day": 7
   },
   {
    "word": "tuesday",
    "pron": "튜-(ㅈ)데이",
    "pos": "n.",
    "meaning": "화요일",
    "examples": [],
    "tip": "",
    "no": 42,
    "day": 7
   },
   {
    "word": "wednesday",
    "pron": "웬(ㅈ)데이",
    "pos": "n.",
    "meaning": "수요일",
    "examples": [],
    "tip": "",
    "no": 43,
    "day": 7
   },
   {
    "word": "thursday",
    "pron": "써-(ㅈ)데이",
    "pos": "n.",
    "meaning": "목요일",
    "examples": [],
    "tip": "",
    "no": 44,
    "day": 7
   },
   {
    "word": "friday",
    "pron": "프라이데이",
    "pos": "n.",
    "meaning": "금요일",
    "examples": [],
    "tip": "",
    "no": 45,
    "day": 7
   },
   {
    "word": "saturday",
    "pron": "새터데이",
    "pos": "n.",
    "meaning": "토요일",
    "examples": [
     {
      "en": "We don't work on Saturday.",
      "ko": "토요일에는 근무하지 않습니다."
     }
    ],
    "tip": "",
    "no": 46,
    "day": 7
   },
   {
    "word": "sunday",
    "pron": "선데이",
    "pos": "n.",
    "meaning": "일요일",
    "examples": [
     {
      "en": "I'd like to stay 3 nights and check out Sunday morning.",
      "ko": "3박 하고 일요일 오전에 체크아웃 하려고 합니다."
     }
    ],
    "tip": "미국에서는 일주일의 순서를 일요일부터 시작합니다.",
    "no": 47,
    "day": 7,
    "tipLabel": "💡 tip"
   },
   {
    "word": "yesterday",
    "pron": "예스터데이",
    "pos": "n.",
    "meaning": "어제",
    "examples": [
     {
      "en": "I went straight to bed yesterday.",
      "ko": "어제는 바로 잠자리에 들었어요."
     }
    ],
    "tip": "",
    "no": 48,
    "day": 7
   },
   {
    "word": "today",
    "pron": "터데이",
    "pos": "n.",
    "meaning": "오늘",
    "examples": [
     {
      "en": "You look under the weather today.",
      "ko": "오늘 안 좋아 보이네요."
     }
    ],
    "tip": "",
    "no": 49,
    "day": 7
   },
   {
    "word": "tomorrow",
    "pron": "터머–로우",
    "pos": "n.",
    "meaning": "내일",
    "examples": [
     {
      "en": "See you tomorrow.",
      "ko": "내일 봐요."
     }
    ],
    "tip": "",
    "no": 50,
    "day": 7
   },
   {
    "word": "the day before yesterday",
    "pron": "더 데이 비퍼- 예스터데이",
    "pos": "",
    "meaning": "그저께",
    "examples": [],
    "tip": "",
    "no": 51,
    "day": 7
   },
   {
    "word": "the day after tomorrow",
    "pron": "더 데이 애(ㅍ)터 터머-로우",
    "pos": "",
    "meaning": "모레",
    "examples": [],
    "tip": "",
    "no": 52,
    "day": 7
   },
   {
    "word": "month",
    "pron": "먼쓰",
    "pos": "n.",
    "meaning": "달, 월(月)",
    "examples": [
     {
      "en": "Your rent is due on the 1st of each month.",
      "ko": "월세는 매월 1일에 내시면 됩니다."
     }
    ],
    "tip": "",
    "no": 53,
    "day": 7
   },
   {
    "word": "january",
    "pron": "재뉴어리",
    "pos": "n.",
    "meaning": "1월",
    "examples": [],
    "tip": "",
    "no": 54,
    "day": 7
   },
   {
    "word": "february",
    "pron": "펩루어리",
    "pos": "n.",
    "meaning": "2월",
    "examples": [],
    "tip": "",
    "no": 55,
    "day": 7
   },
   {
    "word": "march",
    "pron": "마-취",
    "pos": "n.",
    "meaning": "3월",
    "examples": [],
    "tip": "",
    "no": 56,
    "day": 7
   },
   {
    "word": "april",
    "pron": "에이프럴",
    "pos": "n.",
    "meaning": "4월",
    "examples": [],
    "tip": "",
    "no": 57,
    "day": 7
   },
   {
    "word": "may",
    "pron": "메이",
    "pos": "n.",
    "meaning": "5월",
    "examples": [],
    "tip": "",
    "no": 58,
    "day": 7
   },
   {
    "word": "june",
    "pron": "주운",
    "pos": "n.",
    "meaning": "6월",
    "examples": [],
    "tip": "",
    "no": 59,
    "day": 7
   },
   {
    "word": "july",
    "pron": "줄라이",
    "pos": "n.",
    "meaning": "7월",
    "examples": [],
    "tip": "",
    "no": 60,
    "day": 7
   },
   {
    "word": "august",
    "pron": "어-거슷",
    "pos": "n.",
    "meaning": "8월",
    "examples": [],
    "tip": "",
    "no": 61,
    "day": 7
   },
   {
    "word": "september",
    "pron": "셉템버",
    "pos": "n.",
    "meaning": "9월",
    "examples": [],
    "tip": "",
    "no": 62,
    "day": 7
   },
   {
    "word": "october",
    "pron": "악토우버",
    "pos": "n.",
    "meaning": "10월",
    "examples": [],
    "tip": "",
    "no": 63,
    "day": 7
   },
   {
    "word": "november",
    "pron": "노우벰버",
    "pos": "n.",
    "meaning": "11월",
    "examples": [],
    "tip": "",
    "no": 64,
    "day": 7
   },
   {
    "word": "december",
    "pron": "디쎔버",
    "pos": "n.",
    "meaning": "12월",
    "examples": [],
    "tip": "",
    "no": 65,
    "day": 7
   },
   {
    "word": "year",
    "pron": "이어",
    "pos": "n.",
    "meaning": "해, 년(年)",
    "examples": [],
    "tip": "",
    "no": 66,
    "day": 7
   },
   {
    "word": "annual",
    "pron": "애뉴얼",
    "pos": "a.",
    "meaning": "1년의, 해마다의",
    "examples": [],
    "tip": "",
    "no": 67,
    "day": 7
   },
   {
    "word": "holiday",
    "pron": "할러데이",
    "pos": "n.",
    "meaning": "공휴일, 축제일, 명절",
    "examples": [],
    "tip": "",
    "no": 68,
    "day": 7
   },
   {
    "word": "anniversary",
    "pron": "애너버-서리",
    "pos": "n.",
    "meaning": "기념일",
    "examples": [],
    "tip": "",
    "no": 69,
    "day": 7
   },
   {
    "word": "century",
    "pron": "쎈처리",
    "pos": "n.",
    "meaning": "세기(世紀), 100년",
    "examples": [],
    "tip": "",
    "no": 70,
    "day": 7
   },
   {
    "word": "period",
    "pron": "피-어리엇",
    "pos": "n.",
    "meaning": "기간, 시기",
    "examples": [],
    "tip": "",
    "no": 71,
    "day": 7
   },
   {
    "word": "christmas",
    "pron": "크리(ㅅ)머(ㅅ)",
    "pos": "n.",
    "meaning": "성탄절",
    "examples": [
     {
      "en": "Christmas is almost here.",
      "ko": "크리스마스가 거의 다 됐다."
     }
    ],
    "tip": "",
    "no": 72,
    "day": 7
   },
   {
    "word": "thanksgiving day",
    "pron": "쌩(ㅅ)기빙 데이",
    "pos": "",
    "meaning": "추수감사절",
    "examples": [
     {
      "en": "On Thanksgiving Day, most Americans get together with their family.",
      "ko": "추수감사절에, 대부분의 미국인들은 가족들과 함께 보내요."
     }
    ],
    "tip": "",
    "no": 73,
    "day": 7
   },
   {
    "word": "past",
    "pron": "패슷",
    "pos": "a.",
    "meaning": "과거의, 옛날의",
    "examples": [],
    "tip": "",
    "no": 74,
    "day": 7
   },
   {
    "word": "the past",
    "pron": "더 패슷",
    "pos": "",
    "meaning": "과거",
    "examples": [],
    "tip": "",
    "no": 75,
    "day": 7
   },
   {
    "word": "present",
    "pron": "프레즌(ㅌ)",
    "pos": "a.",
    "meaning": "현재의",
    "examples": [],
    "tip": "",
    "no": 76,
    "day": 7
   },
   {
    "word": "the present",
    "pron": "더 프레즌(ㅌ)",
    "pos": "",
    "meaning": "현재",
    "examples": [],
    "tip": "",
    "no": 77,
    "day": 7
   },
   {
    "word": "future",
    "pron": "퓨-춰",
    "pos": "a.",
    "meaning": "미래의",
    "examples": [],
    "tip": "",
    "no": 78,
    "day": 7
   },
   {
    "word": "the future",
    "pron": "더 퓨-춰",
    "pos": "",
    "meaning": "미래",
    "examples": [],
    "tip": "",
    "no": 79,
    "day": 7
   },
   {
    "word": "take a shower",
    "pron": "테익 어 샤워",
    "pos": "",
    "meaning": "샤워하다",
    "examples": [
     {
      "en": "I take a shower every day.",
      "ko": "난 매일 샤워를 해요."
     }
    ],
    "tip": "",
    "no": 80,
    "day": 7
   },
   {
    "word": "take a bath",
    "pron": "테익 어 배쓰",
    "pos": "",
    "meaning": "목욕하다",
    "examples": [],
    "tip": "'목욕하다'라는 동사로, 영국에서는 bath, 미국에서는 bathe라고 합니다.",
    "no": 81,
    "day": 7,
    "tipLabel": "💡 tip"
   },
   {
    "word": "snore",
    "pron": "스너–",
    "pos": "v.",
    "meaning": "코를 골다",
    "examples": [],
    "tip": "",
    "no": 82,
    "day": 7
   },
   {
    "word": "nightmare",
    "pron": "나잇메어",
    "pos": "n.",
    "meaning": "악몽",
    "examples": [],
    "tip": "",
    "no": 83,
    "day": 7
   },
   {
    "word": "date",
    "pron": "데잇",
    "pos": "n.",
    "meaning": "날짜",
    "examples": [],
    "tip": "",
    "no": 84,
    "day": 7
   },
   {
    "word": "easter",
    "pron": "이–스터",
    "pos": "n.",
    "meaning": "부활절",
    "examples": [
     {
      "en": "Happy Easter!",
      "ko": "부활절을 축하합시다!"
     }
    ],
    "tip": "",
    "no": 85,
    "day": 7
   },
   {
    "word": "halloween",
    "pron": "핼로우이인",
    "pos": "n.",
    "meaning": "핼러윈(10월 31일 밤)",
    "examples": [
     {
      "en": "Halloween is on October 31st.",
      "ko": "핼러윈은 10월 31일이에요."
     }
    ],
    "tip": "",
    "no": 86,
    "day": 7
   },
   {
    "word": "valentine's day",
    "pron": "밸런타인(ㅅ) 데이",
    "pos": "",
    "meaning": "밸런타인데이",
    "examples": [
     {
      "en": "There's something I want to give you on Valentine's Day.",
      "ko": "이번 밸런타인데이에 네게 주고 싶은 게 있어."
     }
    ],
    "tip": "",
    "no": 87,
    "day": 7
   },
   {
    "word": "birthday",
    "pron": "버–쓰데이",
    "pos": "n.",
    "meaning": "생일",
    "examples": [
     {
      "en": "Happy birthday!",
      "ko": "생일 축하합니다!"
     }
    ],
    "tip": "",
    "no": 88,
    "day": 7
   },
   {
    "word": "lately",
    "pron": "레잇리",
    "pos": "ad.",
    "meaning": "요즘, 최근에, 얼마 전에",
    "examples": [
     {
      "en": "I haven't seen much of you lately.",
      "ko": "요즘 당신을 보기 힘드네요."
     }
    ],
    "tip": "",
    "no": 89,
    "day": 7
   },
   {
    "word": "recently",
    "pron": "리–쓴틀리",
    "pos": "ad.",
    "meaning": "최근에",
    "examples": [],
    "tip": "",
    "no": 90,
    "day": 7
   },
   {
    "word": "these days",
    "pron": "디–즈 데이(ㅈ)",
    "pos": "",
    "meaning": "(과거와 비교해서) 요즘, 최근",
    "examples": [],
    "tip": "",
    "no": 91,
    "day": 7
   }
  ]
 },
 {
  "day": 8,
  "title": "Unit 08. 날씨&계절",
  "words": [
   {
    "word": "weather",
    "pron": "웨더",
    "pos": "n.",
    "meaning": "날씨",
    "examples": [
     {
      "en": "How's the weather today?",
      "ko": "오늘 날씨가 어때요?"
     }
    ],
    "tip": "",
    "no": 1,
    "day": 8
   },
   {
    "word": "fine",
    "pron": "파인",
    "pos": "a.",
    "meaning": "맑은, 좋은",
    "examples": [
     {
      "en": "It's a fine day today, isn't it?",
      "ko": "오늘 날씨가 참 좋죠?"
     }
    ],
    "tip": "",
    "no": 2,
    "day": 8
   },
   {
    "word": "shine",
    "pron": "샤인",
    "pos": "n.",
    "meaning": "맑은 날씨, 빛나다",
    "examples": [],
    "tip": "",
    "no": 3,
    "day": 8
   },
   {
    "word": "warm",
    "pron": "워엄",
    "pos": "a.",
    "meaning": "따뜻한",
    "examples": [],
    "tip": "",
    "no": 4,
    "day": 8
   },
   {
    "word": "hot",
    "pron": "핫",
    "pos": "a.",
    "meaning": "뜨거운, 더운",
    "examples": [
     {
      "en": "It is hot in here.",
      "ko": "이 안은 무척 덥네요."
     }
    ],
    "tip": "",
    "no": 5,
    "day": 8
   },
   {
    "word": "cool",
    "pron": "쿠울",
    "pos": "a.",
    "meaning": "시원한, 서늘한",
    "examples": [],
    "tip": "",
    "no": 6,
    "day": 8
   },
   {
    "word": "cold",
    "pron": "코울(ㄷ)",
    "pos": "a.",
    "meaning": "추운, 차가운",
    "examples": [
     {
      "en": "It's getting colder and colder.",
      "ko": "날씨가 점점 추워지고 있어요."
     }
    ],
    "tip": "'get+비교급'은 '점점 ~해지다'라는 뜻으로 쓰이는 구문입니다.",
    "no": 7,
    "day": 8,
    "tipLabel": "💡 tip"
   },
   {
    "word": "sun",
    "pron": "선",
    "pos": "n.",
    "meaning": "태양, 해",
    "examples": [],
    "tip": "",
    "no": 8,
    "day": 8
   },
   {
    "word": "cloud",
    "pron": "클라웃",
    "pos": "n.",
    "meaning": "구름",
    "examples": [],
    "tip": "",
    "no": 9,
    "day": 8
   },
   {
    "word": "sunny",
    "pron": "서니",
    "pos": "a.",
    "meaning": "화창한, 햇빛이 잘 드는",
    "examples": [
     {
      "en": "It's very sunny.",
      "ko": "아주 화창해요."
     }
    ],
    "tip": "",
    "no": 10,
    "day": 8
   },
   {
    "word": "cloudy",
    "pron": "클라우디",
    "pos": "a.",
    "meaning": "흐린, 구름이 낀",
    "examples": [
     {
      "en": "It's cloudy.",
      "ko": "날씨가 흐려요."
     }
    ],
    "tip": "",
    "no": 11,
    "day": 8
   },
   {
    "word": "wind",
    "pron": "윈(ㄷ)",
    "pos": "n.",
    "meaning": "바람",
    "examples": [],
    "tip": "",
    "no": 12,
    "day": 8
   },
   {
    "word": "fog",
    "pron": "퍼억",
    "pos": "n.",
    "meaning": "안개",
    "examples": [],
    "tip": "",
    "no": 13,
    "day": 8
   },
   {
    "word": "rain",
    "pron": "레인",
    "pos": "n.",
    "meaning": "비, 비가 오다",
    "examples": [
     {
      "en": "It's raining.",
      "ko": "비가 와요."
     }
    ],
    "tip": "",
    "no": 14,
    "day": 8
   },
   {
    "word": "shower",
    "pron": "샤워",
    "pos": "n.",
    "meaning": "소나기",
    "examples": [],
    "tip": "",
    "no": 15,
    "day": 8
   },
   {
    "word": "umbrella",
    "pron": "엄(ㅂ)렐러",
    "pos": "n.",
    "meaning": "우산",
    "examples": [],
    "tip": "",
    "no": 16,
    "day": 8
   },
   {
    "word": "flood",
    "pron": "플럿",
    "pos": "n.",
    "meaning": "홍수",
    "examples": [],
    "tip": "",
    "no": 17,
    "day": 8
   },
   {
    "word": "dry",
    "pron": "드라이",
    "pos": "a.",
    "meaning": "건조한",
    "examples": [],
    "tip": "",
    "no": 18,
    "day": 8
   },
   {
    "word": "hail",
    "pron": "헤일",
    "pos": "n.",
    "meaning": "우박",
    "examples": [],
    "tip": "",
    "no": 19,
    "day": 8
   },
   {
    "word": "drought",
    "pron": "드라웃",
    "pos": "n.",
    "meaning": "가뭄",
    "examples": [
     {
      "en": "It was an unprecedented drought.",
      "ko": "사상 최악의 가뭄이었어요."
     }
    ],
    "tip": "",
    "no": 20,
    "day": 8
   },
   {
    "word": "storm",
    "pron": "스터엄",
    "pos": "n.",
    "meaning": "폭풍",
    "examples": [
     {
      "en": "A typhoon is coming.",
      "ko": "태풍이 다가오고 있어요."
     }
    ],
    "tip": "지역에 따라 달리 부릅니다.",
    "no": 21,
    "day": 8,
    "tipLabel": "💡 tip"
   },
   {
    "word": "thunder",
    "pron": "썬더",
    "pos": "n.",
    "meaning": "천둥, 우뢰",
    "examples": [
     {
      "en": "Can you hear the thunder?",
      "ko": "천둥 소리 들려요?"
     }
    ],
    "tip": "",
    "no": 22,
    "day": 8
   },
   {
    "word": "typhoon",
    "pron": "타이푸운",
    "pos": "n.",
    "meaning": "태풍, (북서태평양) 폭풍",
    "examples": [],
    "tip": "",
    "no": 23,
    "day": 8
   },
   {
    "word": "lightning",
    "pron": "라잇닝",
    "pos": "n.",
    "meaning": "번개, 번갯불",
    "examples": [],
    "tip": "",
    "no": 24,
    "day": 8
   },
   {
    "word": "hurricane",
    "pron": "허–러케인",
    "pos": "n.",
    "meaning": "허리케인, (북중미) 폭풍",
    "examples": [],
    "tip": "",
    "no": 25,
    "day": 8
   },
   {
    "word": "cyclone",
    "pron": "싸이클로운",
    "pos": "n.",
    "meaning": "사이클론, (인도양) 폭풍",
    "examples": [],
    "tip": "",
    "no": 26,
    "day": 8
   },
   {
    "word": "ice",
    "pron": "아이(ㅆ)",
    "pos": "n.",
    "meaning": "얼음, 얼리다",
    "examples": [],
    "tip": "",
    "no": 27,
    "day": 8
   },
   {
    "word": "freeze",
    "pron": "프리-(ㅈ)",
    "pos": "v.",
    "meaning": "얼다",
    "examples": [
     {
      "en": "It's freezing.",
      "ko": "얼어붙는 듯이 추워요."
     }
    ],
    "tip": "",
    "no": 28,
    "day": 8
   },
   {
    "word": "season",
    "pron": "시-즌",
    "pos": "n.",
    "meaning": "계절",
    "examples": [
     {
      "en": "This is the season for strawberries.",
      "ko": "지금은 딸기가 제철이에요."
     }
    ],
    "tip": "",
    "no": 29,
    "day": 8
   },
   {
    "word": "spring",
    "pron": "스프링",
    "pos": "n.",
    "meaning": "봄",
    "examples": [
     {
      "en": "Spring is just around the corner.",
      "ko": "봄이 코 앞에 다가왔어요."
     }
    ],
    "tip": "",
    "no": 30,
    "day": 8
   },
   {
    "word": "rainbow",
    "pron": "레인보우",
    "pos": "n.",
    "meaning": "무지개",
    "examples": [],
    "tip": "",
    "no": 31,
    "day": 8
   },
   {
    "word": "seed",
    "pron": "시잇",
    "pos": "n.",
    "meaning": "씨, 씨앗",
    "examples": [],
    "tip": "",
    "no": 32,
    "day": 8
   },
   {
    "word": "flower bud",
    "pron": "플라워 벗",
    "pos": "",
    "meaning": "꽃봉오리",
    "examples": [],
    "tip": "",
    "no": 33,
    "day": 8
   },
   {
    "word": "summer",
    "pron": "서머",
    "pos": "n.",
    "meaning": "여름",
    "examples": [],
    "tip": "",
    "no": 34,
    "day": 8
   },
   {
    "word": "humid",
    "pron": "휴-밋",
    "pos": "a.",
    "meaning": "습한, 축축한",
    "examples": [
     {
      "en": "It's humid outside.",
      "ko": "밖은 눅눅해요."
     }
    ],
    "tip": "",
    "no": 35,
    "day": 8
   },
   {
    "word": "sweltering",
    "pron": "스웰터링",
    "pos": "a.",
    "meaning": "무더운, 무더위에 지친",
    "examples": [
     {
      "en": "It's sweltering hot.",
      "ko": "날씨가 무더워요."
     }
    ],
    "tip": "",
    "no": 36,
    "day": 8
   },
   {
    "word": "yellow dust",
    "pron": "옐로우 더슷",
    "pos": "",
    "meaning": "황사",
    "examples": [
     {
      "en": "Authorities issued a yellow dust warning today.",
      "ko": "당국이 오늘 황사 경보를 발령했습니다."
     }
    ],
    "tip": "",
    "no": 37,
    "day": 8
   },
   {
    "word": "fall",
    "pron": "퍼얼",
    "pos": "n.",
    "meaning": "가을",
    "examples": [
     {
      "en": "Fall has flown by.",
      "ko": "가을은 눈깜박할 사이에 지나갔어요."
     }
    ],
    "tip": "",
    "no": 38,
    "day": 8
   },
   {
    "word": "autumn colors",
    "pron": "어–텀 컬러(ㅅ)",
    "pos": "",
    "meaning": "단풍",
    "examples": [],
    "tip": "",
    "no": 39,
    "day": 8
   },
   {
    "word": "fallen leaves",
    "pron": "펄–런 리–브(ㅅ)",
    "pos": "",
    "meaning": "낙엽",
    "examples": [],
    "tip": "",
    "no": 40,
    "day": 8
   },
   {
    "word": "maple",
    "pron": "메이플",
    "pos": "n.",
    "meaning": "단풍나무",
    "examples": [],
    "tip": "",
    "no": 41,
    "day": 8
   },
   {
    "word": "harvest",
    "pron": "하-비슷",
    "pos": "n.",
    "meaning": "수확",
    "examples": [
     {
      "en": "Autumn is the harvest season.",
      "ko": "가을은 결실의 계절입니다."
     }
    ],
    "tip": "",
    "no": 42,
    "day": 8
   },
   {
    "word": "winter",
    "pron": "윈터",
    "pos": "n.",
    "meaning": "겨울",
    "examples": [
     {
      "en": "I don't really like cold winters.",
      "ko": "저는 정말 겨울을 싫어해요."
     }
    ],
    "tip": "",
    "no": 43,
    "day": 8
   },
   {
    "word": "snow",
    "pron": "스노우",
    "pos": "n.",
    "meaning": "눈, 눈이 오다",
    "examples": [],
    "tip": "",
    "no": 44,
    "day": 8
   },
   {
    "word": "temperature",
    "pron": "템퍼러춰",
    "pos": "n.",
    "meaning": "온도",
    "examples": [
     {
      "en": "What's the temperature today?",
      "ko": "오늘 몇 도예요?"
     }
    ],
    "tip": "",
    "no": 45,
    "day": 8
   },
   {
    "word": "climate",
    "pron": "클라이밋",
    "pos": "n.",
    "meaning": "기후",
    "examples": [],
    "tip": "",
    "no": 46,
    "day": 8
   },
   {
    "word": "weather forecast",
    "pron": "웨더 퍼–캐슷",
    "pos": "",
    "meaning": "일기예보",
    "examples": [],
    "tip": "",
    "no": 47,
    "day": 8
   },
   {
    "word": "high pressure",
    "pron": "하이 프레셔",
    "pos": "",
    "meaning": "고기압",
    "examples": [],
    "tip": "",
    "no": 48,
    "day": 8
   },
   {
    "word": "low pressure",
    "pron": "로우 프레셔",
    "pos": "",
    "meaning": "저기압",
    "examples": [],
    "tip": "",
    "no": 49,
    "day": 8
   },
   {
    "word": "ultraviolet rays",
    "pron": "얼츠러바이얼릿 레이(ㅅ)",
    "pos": "",
    "meaning": "자외선",
    "examples": [],
    "tip": "",
    "no": 50,
    "day": 8
   },
   {
    "word": "breeze",
    "pron": "브리–(ㅈ)",
    "pos": "n.",
    "meaning": "산들바람, 산들바람이 불다",
    "examples": [
     {
      "en": "An autumn breeze blows softly.",
      "ko": "가을 바람이 살랑거리네요."
     }
    ],
    "tip": "",
    "no": 51,
    "day": 8
   },
   {
    "word": "air",
    "pron": "에어",
    "pos": "n.",
    "meaning": "공기, 대기",
    "examples": [
     {
      "en": "I think spring is in the air.",
      "ko": "봄 기운이 완연하네요."
     }
    ],
    "tip": "",
    "no": 52,
    "day": 8
   },
   {
    "word": "rainfall",
    "pron": "레인퍼얼",
    "pos": "n.",
    "meaning": "강수량",
    "examples": [],
    "tip": "",
    "no": 53,
    "day": 8
   },
   {
    "word": "frost",
    "pron": "프러-슷",
    "pos": "n.",
    "meaning": "서리",
    "examples": [
     {
      "en": "The windows are frosted.",
      "ko": "창문에 서리가 내렸어요."
     }
    ],
    "tip": "",
    "no": 54,
    "day": 8
   },
   {
    "word": "frostbite",
    "pron": "프러-슷바잇",
    "pos": "n.",
    "meaning": "동상",
    "examples": [],
    "tip": "",
    "no": 55,
    "day": 8
   },
   {
    "word": "sprout",
    "pron": "스프라웃",
    "pos": "v.",
    "meaning": "싹트다, 움트다",
    "examples": [],
    "tip": "",
    "no": 56,
    "day": 8
   },
   {
    "word": "heatstroke",
    "pron": "히잇스츠로욱",
    "pos": "n.",
    "meaning": "열사병",
    "examples": [],
    "tip": "",
    "no": 57,
    "day": 8
   },
   {
    "word": "autumn",
    "pron": "어-텀",
    "pos": "",
    "meaning": "가을 (= fall)",
    "examples": [],
    "tip": "",
    "no": 58,
    "day": 8
   },
   {
    "word": "ginkgo",
    "pron": "긴코",
    "pos": "n.",
    "meaning": "은행나무",
    "examples": [],
    "tip": "",
    "no": 59,
    "day": 8
   },
   {
    "word": "snowman",
    "pron": "스노우맨",
    "pos": "n.",
    "meaning": "눈사람",
    "examples": [],
    "tip": "",
    "no": 60,
    "day": 8
   },
   {
    "word": "snowflake",
    "pron": "스노우플렉",
    "pos": "n.",
    "meaning": "눈송이",
    "examples": [],
    "tip": "",
    "no": 61,
    "day": 8
   },
   {
    "word": "snowball",
    "pron": "스노우버얼",
    "pos": "n.",
    "meaning": "눈덩이",
    "examples": [],
    "tip": "",
    "no": 62,
    "day": 8
   },
   {
    "word": "snowball fight",
    "pron": "스노우버얼 파잇",
    "pos": "",
    "meaning": "눈싸움",
    "examples": [],
    "tip": "",
    "no": 63,
    "day": 8
   },
   {
    "word": "snowstorm",
    "pron": "스노우스터엄",
    "pos": "n.",
    "meaning": "눈보라",
    "examples": [],
    "tip": "",
    "no": 64,
    "day": 8
   },
   {
    "word": "snowfall",
    "pron": "스노우퍼얼",
    "pos": "n.",
    "meaning": "강설량",
    "examples": [],
    "tip": "",
    "no": 65,
    "day": 8
   },
   {
    "word": "centigrade",
    "pron": "쎈터그레이(ㄷ)",
    "pos": "a.",
    "meaning": "섭씨의, 섭씨인 (= Celsius)",
    "examples": [],
    "tip": "",
    "no": 66,
    "day": 8
   },
   {
    "word": "celsius",
    "pron": "쎌시어(ㅅ)",
    "pos": "",
    "meaning": "섭씨",
    "examples": [],
    "tip": "",
    "no": 67,
    "day": 8
   },
   {
    "word": "fahrenheit",
    "pron": "패런하잇",
    "pos": "n.",
    "meaning": "화씨 온도계",
    "examples": [],
    "tip": "",
    "no": 68,
    "day": 8
   },
   {
    "word": "above zero",
    "pron": "어버(ㅂ) 지어로우",
    "pos": "",
    "meaning": "영상",
    "examples": [],
    "tip": "",
    "no": 69,
    "day": 8
   },
   {
    "word": "below zero",
    "pron": "빌로우 지어로우",
    "pos": "",
    "meaning": "영하",
    "examples": [],
    "tip": "",
    "no": 70,
    "day": 8
   },
   {
    "word": "global warming",
    "pron": "글러벌 워-밍",
    "pos": "",
    "meaning": "지구온난화",
    "examples": [],
    "tip": "",
    "no": 71,
    "day": 8
   },
   {
    "word": "infrared rays",
    "pron": "인프레엇 레이(ㅅ)",
    "pos": "",
    "meaning": "적외선",
    "examples": [],
    "tip": "",
    "no": 72,
    "day": 8
   }
  ]
 },
 {
  "day": 9,
  "title": "Unit 09. 동물&식물",
  "words": [
   {
    "word": "animal",
    "pron": "애니멀",
    "pos": "n.",
    "meaning": "동물",
    "examples": [
     {
      "en": "We can learn a lot from animals.",
      "ko": "우리는 동물에게서 많은 것을 배울 수 있다."
     }
    ],
    "tip": "",
    "no": 1,
    "day": 9
   },
   {
    "word": "pet",
    "pron": "펫",
    "pos": "n.",
    "meaning": "애완동물",
    "examples": [
     {
      "en": "Do you have any pets?",
      "ko": "애완동물을 키우고 있습니까?"
     }
    ],
    "tip": "",
    "no": 2,
    "day": 9
   },
   {
    "word": "breed",
    "pron": "브리잇",
    "pos": "v.",
    "meaning": "사육하다, 기르다",
    "examples": [],
    "tip": "",
    "no": 3,
    "day": 9
   },
   {
    "word": "fur",
    "pron": "퍼-",
    "pos": "n.",
    "meaning": "(포유동물의) 털, 모피",
    "examples": [],
    "tip": "",
    "no": 4,
    "day": 9
   },
   {
    "word": "tail",
    "pron": "테일",
    "pos": "n.",
    "meaning": "꼬리",
    "examples": [],
    "tip": "",
    "no": 5,
    "day": 9
   },
   {
    "word": "bark",
    "pron": "바-(ㅋ)",
    "pos": "v.",
    "meaning": "(개가) 짖다",
    "examples": [],
    "tip": "",
    "no": 6,
    "day": 9
   },
   {
    "word": "growl",
    "pron": "그라울",
    "pos": "v.",
    "meaning": "(개나 짐승 등이) 으르렁거리다",
    "examples": [],
    "tip": "",
    "no": 7,
    "day": 9
   },
   {
    "word": "bowwow",
    "pron": "바우와우",
    "pos": "n.",
    "meaning": "멍멍(개 짖는 소리)",
    "examples": [],
    "tip": "",
    "no": 8,
    "day": 9
   },
   {
    "word": "mew",
    "pron": "뮤-",
    "pos": "n.",
    "meaning": "야옹(고양이가 우는 소리) (= meow)",
    "examples": [],
    "tip": "",
    "no": 9,
    "day": 9
   },
   {
    "word": "bite",
    "pron": "바잇",
    "pos": "v.",
    "meaning": "물다",
    "examples": [],
    "tip": "",
    "no": 10,
    "day": 9
   },
   {
    "word": "claw",
    "pron": "클러-",
    "pos": "n.",
    "meaning": "(동물의) 발톱",
    "examples": [
     {
      "en": "My cat clawed me on the hand.",
      "ko": "고양이가 발톱으로 날 할퀴었다."
     }
    ],
    "tip": "",
    "no": 11,
    "day": 9
   },
   {
    "word": "dog",
    "pron": "더억",
    "pos": "n.",
    "meaning": "개",
    "examples": [
     {
      "en": "My parents won't let me have a dog.",
      "ko": "부모님은 개 키우는 것을 허락하지 않아요."
     }
    ],
    "tip": "",
    "no": 12,
    "day": 9
   },
   {
    "word": "canine",
    "pron": "케이나인",
    "pos": "n.",
    "meaning": "개",
    "examples": [],
    "tip": "",
    "no": 13,
    "day": 9
   },
   {
    "word": "puppy",
    "pron": "퍼삐",
    "pos": "n.",
    "meaning": "강아지",
    "examples": [],
    "tip": "",
    "no": 14,
    "day": 9
   },
   {
    "word": "cat",
    "pron": "캣",
    "pos": "n.",
    "meaning": "고양이",
    "examples": [
     {
      "en": "It is feeding time for the cats.",
      "ko": "고양이들에게 먹이 줄 시간이야."
     }
    ],
    "tip": "",
    "no": 15,
    "day": 9
   },
   {
    "word": "feline",
    "pron": "피-라인",
    "pos": "n.",
    "meaning": "고양이",
    "examples": [],
    "tip": "",
    "no": 16,
    "day": 9
   },
   {
    "word": "kitten",
    "pron": "키튼",
    "pos": "n.",
    "meaning": "새끼고양이",
    "examples": [],
    "tip": "",
    "no": 17,
    "day": 9
   },
   {
    "word": "cattle",
    "pron": "캐들",
    "pos": "n.",
    "meaning": "소",
    "examples": [],
    "tip": "cattle은 집합명사이며, 복수형으로 취급합니다.",
    "no": 18,
    "day": 9,
    "tipLabel": "💡 tip"
   },
   {
    "word": "ox",
    "pron": "악(ㅅ)",
    "pos": "n.",
    "meaning": "소",
    "examples": [],
    "tip": "",
    "no": 19,
    "day": 9
   },
   {
    "word": "bull",
    "pron": "불",
    "pos": "n.",
    "meaning": "황소",
    "examples": [],
    "tip": "번식용의 거세하지 않은 숫소는 bull, 새끼를 낳은 암소는 cow라고 합니다.",
    "no": 20,
    "day": 9,
    "tipLabel": "💡 tip"
   },
   {
    "word": "cow",
    "pron": "카우",
    "pos": "n.",
    "meaning": "암소, 젖소",
    "examples": [],
    "tip": "",
    "no": 21,
    "day": 9
   },
   {
    "word": "pig",
    "pron": "픽",
    "pos": "n.",
    "meaning": "돼지",
    "examples": [],
    "tip": "",
    "no": 22,
    "day": 9
   },
   {
    "word": "piglet",
    "pron": "픽릿",
    "pos": "n.",
    "meaning": "새끼돼지",
    "examples": [],
    "tip": "",
    "no": 23,
    "day": 9
   },
   {
    "word": "rabbit",
    "pron": "래빗",
    "pos": "n.",
    "meaning": "토끼",
    "examples": [],
    "tip": "",
    "no": 24,
    "day": 9
   },
   {
    "word": "sheep",
    "pron": "쉬입",
    "pos": "n.",
    "meaning": "양",
    "examples": [],
    "tip": "",
    "no": 25,
    "day": 9
   },
   {
    "word": "lamb",
    "pron": "램",
    "pos": "n.",
    "meaning": "양, 새끼양",
    "examples": [],
    "tip": "새끼양이나 그 고기는 lamb, 다 자란 양의 고기는 mutton이라고 합니다.",
    "no": 26,
    "day": 9,
    "tipLabel": "💡 tip"
   },
   {
    "word": "horse",
    "pron": "허-(ㅅ)",
    "pos": "n.",
    "meaning": "말",
    "examples": [],
    "tip": "",
    "no": 27,
    "day": 9
   },
   {
    "word": "pony",
    "pron": "포우니",
    "pos": "n.",
    "meaning": "조랑말",
    "examples": [],
    "tip": "",
    "no": 28,
    "day": 9
   },
   {
    "word": "mane",
    "pron": "메인",
    "pos": "n.",
    "meaning": "갈기",
    "examples": [],
    "tip": "",
    "no": 29,
    "day": 9
   },
   {
    "word": "zebra",
    "pron": "지-(ㅂ)러",
    "pos": "n.",
    "meaning": "얼룩말",
    "examples": [],
    "tip": "",
    "no": 30,
    "day": 9
   },
   {
    "word": "lion",
    "pron": "라이언",
    "pos": "n.",
    "meaning": "사자",
    "examples": [],
    "tip": "",
    "no": 31,
    "day": 9
   },
   {
    "word": "tiger",
    "pron": "타이거",
    "pos": "n.",
    "meaning": "호랑이",
    "examples": [],
    "tip": "",
    "no": 32,
    "day": 9
   },
   {
    "word": "bear",
    "pron": "베어",
    "pos": "n.",
    "meaning": "곰",
    "examples": [],
    "tip": "",
    "no": 33,
    "day": 9
   },
   {
    "word": "fox",
    "pron": "팍(ㅅ)",
    "pos": "n.",
    "meaning": "여우",
    "examples": [],
    "tip": "",
    "no": 34,
    "day": 9
   },
   {
    "word": "wolf",
    "pron": "울(ㅍ)",
    "pos": "n.",
    "meaning": "이리, 늑대",
    "examples": [],
    "tip": "",
    "no": 35,
    "day": 9
   },
   {
    "word": "monkey",
    "pron": "멍키",
    "pos": "n.",
    "meaning": "원숭이",
    "examples": [],
    "tip": "",
    "no": 36,
    "day": 9
   },
   {
    "word": "elephant",
    "pron": "엘리펀(ㅌ)",
    "pos": "n.",
    "meaning": "코끼리",
    "examples": [],
    "tip": "",
    "no": 37,
    "day": 9
   },
   {
    "word": "giraffe",
    "pron": "저래(ㅍ)",
    "pos": "n.",
    "meaning": "기린",
    "examples": [],
    "tip": "",
    "no": 38,
    "day": 9
   },
   {
    "word": "deer",
    "pron": "디어",
    "pos": "n.",
    "meaning": "사슴",
    "examples": [],
    "tip": "deer는 단수와 복수가 같은 형태입니다.",
    "no": 39,
    "day": 9,
    "tipLabel": "💡 tip"
   },
   {
    "word": "rhinoceros",
    "pron": "라이나써러(ㅅ)",
    "pos": "n.",
    "meaning": "코뿔소",
    "examples": [],
    "tip": "",
    "no": 40,
    "day": 9
   },
   {
    "word": "squirrel",
    "pron": "스쿠어럴",
    "pos": "n.",
    "meaning": "다람쥐",
    "examples": [],
    "tip": "",
    "no": 41,
    "day": 9
   },
   {
    "word": "mole",
    "pron": "모울",
    "pos": "n.",
    "meaning": "두더지",
    "examples": [],
    "tip": "",
    "no": 42,
    "day": 9
   },
   {
    "word": "mouse",
    "pron": "마우(ㅅ)",
    "pos": "n.",
    "meaning": "쥐",
    "examples": [],
    "tip": "rat은 mouse보다 크고 꼬리가 긴 곰쥐나 집쥐 무리를 가리킵니다.",
    "no": 43,
    "day": 9,
    "tipLabel": "💡 tip"
   },
   {
    "word": "bat",
    "pron": "뱃",
    "pos": "n.",
    "meaning": "박쥐",
    "examples": [],
    "tip": "",
    "no": 44,
    "day": 9
   },
   {
    "word": "whale",
    "pron": "훼일",
    "pos": "n.",
    "meaning": "고래",
    "examples": [],
    "tip": "",
    "no": 45,
    "day": 9
   },
   {
    "word": "bird",
    "pron": "버-(ㄷ)",
    "pos": "n.",
    "meaning": "새, 조류",
    "examples": [],
    "tip": "",
    "no": 46,
    "day": 9
   },
   {
    "word": "wing",
    "pron": "윙",
    "pos": "n.",
    "meaning": "날개",
    "examples": [],
    "tip": "",
    "no": 47,
    "day": 9
   },
   {
    "word": "bill",
    "pron": "빌",
    "pos": "n.",
    "meaning": "부리 (= beak)",
    "examples": [],
    "tip": "",
    "no": 48,
    "day": 9
   },
   {
    "word": "chicken",
    "pron": "치킨",
    "pos": "n.",
    "meaning": "닭(식용)",
    "examples": [],
    "tip": "",
    "no": 49,
    "day": 9
   },
   {
    "word": "chick",
    "pron": "칙",
    "pos": "n.",
    "meaning": "병아리",
    "examples": [],
    "tip": "",
    "no": 50,
    "day": 9
   },
   {
    "word": "hen",
    "pron": "헨",
    "pos": "n.",
    "meaning": "암탉",
    "examples": [],
    "tip": "",
    "no": 51,
    "day": 9
   },
   {
    "word": "rooster",
    "pron": "루-스터",
    "pos": "n.",
    "meaning": "수탉",
    "examples": [],
    "tip": "",
    "no": 52,
    "day": 9
   },
   {
    "word": "duck",
    "pron": "덕",
    "pos": "n.",
    "meaning": "오리",
    "examples": [],
    "tip": "",
    "no": 53,
    "day": 9
   },
   {
    "word": "sparrow",
    "pron": "스패로우",
    "pos": "n.",
    "meaning": "참새",
    "examples": [],
    "tip": "",
    "no": 54,
    "day": 9
   },
   {
    "word": "dove",
    "pron": "더(ㅂ)",
    "pos": "n.",
    "meaning": "비둘기(들비둘기)",
    "examples": [],
    "tip": "",
    "no": 55,
    "day": 9
   },
   {
    "word": "pigeon",
    "pron": "피젼",
    "pos": "n.",
    "meaning": "비둘기(집비둘기)",
    "examples": [],
    "tip": "",
    "no": 56,
    "day": 9
   },
   {
    "word": "eagle",
    "pron": "이-글",
    "pos": "n.",
    "meaning": "독수리",
    "examples": [],
    "tip": "",
    "no": 57,
    "day": 9
   },
   {
    "word": "sea gull",
    "pron": "시- 걸",
    "pos": "n.",
    "meaning": "갈매기",
    "examples": [],
    "tip": "",
    "no": 58,
    "day": 9
   },
   {
    "word": "turkey",
    "pron": "터-키",
    "pos": "n.",
    "meaning": "칠면조",
    "examples": [],
    "tip": "",
    "no": 59,
    "day": 9
   },
   {
    "word": "peacock",
    "pron": "피-칵",
    "pos": "n.",
    "meaning": "공작",
    "examples": [],
    "tip": "",
    "no": 60,
    "day": 9
   },
   {
    "word": "ostrich",
    "pron": "어-스츠리취",
    "pos": "n.",
    "meaning": "타조",
    "examples": [],
    "tip": "",
    "no": 61,
    "day": 9
   },
   {
    "word": "owl",
    "pron": "아울",
    "pos": "n.",
    "meaning": "부엉이, 올빼미",
    "examples": [],
    "tip": "",
    "no": 62,
    "day": 9
   },
   {
    "word": "penguin",
    "pron": "펭구인",
    "pos": "n.",
    "meaning": "펭귄",
    "examples": [],
    "tip": "",
    "no": 63,
    "day": 9
   },
   {
    "word": "fish",
    "pron": "피쉬",
    "pos": "n.",
    "meaning": "물고기",
    "examples": [],
    "tip": "",
    "no": 64,
    "day": 9
   },
   {
    "word": "gill",
    "pron": "길",
    "pos": "n.",
    "meaning": "아가미",
    "examples": [],
    "tip": "보통 복수형인 gills로 씁니다.",
    "no": 65,
    "day": 9,
    "tipLabel": "💡 tip"
   },
   {
    "word": "fin",
    "pron": "핀",
    "pos": "n.",
    "meaning": "지느러미",
    "examples": [],
    "tip": "",
    "no": 66,
    "day": 9
   },
   {
    "word": "tropical fish",
    "pron": "츠라피컬 피쉬",
    "pos": "",
    "meaning": "열대어",
    "examples": [],
    "tip": "",
    "no": 67,
    "day": 9
   },
   {
    "word": "goldfish",
    "pron": "고울(ㄷ)피쉬",
    "pos": "n.",
    "meaning": "금붕어",
    "examples": [],
    "tip": "",
    "no": 68,
    "day": 9
   },
   {
    "word": "fish bowl",
    "pron": "피쉬 보울",
    "pos": "",
    "meaning": "어항",
    "examples": [],
    "tip": "",
    "no": 69,
    "day": 9
   },
   {
    "word": "shark",
    "pron": "샤악",
    "pos": "n.",
    "meaning": "상어",
    "examples": [],
    "tip": "",
    "no": 70,
    "day": 9
   },
   {
    "word": "octopus",
    "pron": "악터퍼(ㅅ)",
    "pos": "n.",
    "meaning": "문어",
    "examples": [],
    "tip": "",
    "no": 71,
    "day": 9
   },
   {
    "word": "squid",
    "pron": "스쿠잇",
    "pos": "n.",
    "meaning": "오징어",
    "examples": [],
    "tip": "",
    "no": 72,
    "day": 9
   },
   {
    "word": "turtle",
    "pron": "터-틀",
    "pos": "n.",
    "meaning": "거북, 바다거북",
    "examples": [],
    "tip": "",
    "no": 73,
    "day": 9
   },
   {
    "word": "crocodile",
    "pron": "크라커다일",
    "pos": "n.",
    "meaning": "악어(아프리카산)",
    "examples": [],
    "tip": "crocodile은 alligator에 비하여 턱이 갸름하며, alligator는 crocodile에 비하여 주둥이의 폭이 넓고 짧은 것이 특징입니다.",
    "no": 74,
    "day": 9,
    "tipLabel": "💡 tip"
   },
   {
    "word": "alligator",
    "pron": "앨리게이터",
    "pos": "n.",
    "meaning": "악어(북미산)",
    "examples": [],
    "tip": "",
    "no": 75,
    "day": 9
   },
   {
    "word": "snake",
    "pron": "스네익",
    "pos": "n.",
    "meaning": "뱀",
    "examples": [
     {
      "en": "He has a pet snake.",
      "ko": "그는 애완용 뱀을 키워요."
     }
    ],
    "tip": "",
    "no": 76,
    "day": 9
   },
   {
    "word": "lizard",
    "pron": "리저(ㄷ)",
    "pos": "n.",
    "meaning": "도마뱀",
    "examples": [],
    "tip": "",
    "no": 77,
    "day": 9
   },
   {
    "word": "frog",
    "pron": "프러억",
    "pos": "n.",
    "meaning": "개구리",
    "examples": [],
    "tip": "",
    "no": 78,
    "day": 9
   },
   {
    "word": "tadpole",
    "pron": "탯포울",
    "pos": "n.",
    "meaning": "올챙이",
    "examples": [],
    "tip": "",
    "no": 79,
    "day": 9
   },
   {
    "word": "insect",
    "pron": "인섹(ㅌ)",
    "pos": "n.",
    "meaning": "곤충",
    "examples": [],
    "tip": "",
    "no": 80,
    "day": 9
   },
   {
    "word": "bee",
    "pron": "비-",
    "pos": "n.",
    "meaning": "벌",
    "examples": [],
    "tip": "",
    "no": 81,
    "day": 9
   },
   {
    "word": "butterfly",
    "pron": "버더플라이",
    "pos": "n.",
    "meaning": "나비",
    "examples": [],
    "tip": "",
    "no": 82,
    "day": 9
   },
   {
    "word": "dragonfly",
    "pron": "드래건플라이",
    "pos": "n.",
    "meaning": "잠자리",
    "examples": [],
    "tip": "",
    "no": 83,
    "day": 9
   },
   {
    "word": "beetle",
    "pron": "비-틀",
    "pos": "n.",
    "meaning": "딱정벌레",
    "examples": [],
    "tip": "",
    "no": 84,
    "day": 9
   },
   {
    "word": "ant",
    "pron": "앤(ㅌ)",
    "pos": "n.",
    "meaning": "개미",
    "examples": [],
    "tip": "",
    "no": 85,
    "day": 9
   },
   {
    "word": "fly",
    "pron": "플라이",
    "pos": "n.",
    "meaning": "파리",
    "examples": [],
    "tip": "",
    "no": 86,
    "day": 9
   },
   {
    "word": "mosquito",
    "pron": "머스키-토우",
    "pos": "n.",
    "meaning": "모기",
    "examples": [],
    "tip": "",
    "no": 87,
    "day": 9
   },
   {
    "word": "cockroach",
    "pron": "칵로우취",
    "pos": "n.",
    "meaning": "바퀴벌레",
    "examples": [],
    "tip": "",
    "no": 88,
    "day": 9
   },
   {
    "word": "spider",
    "pron": "스파이더",
    "pos": "n.",
    "meaning": "거미",
    "examples": [],
    "tip": "",
    "no": 89,
    "day": 9
   },
   {
    "word": "plant",
    "pron": "플랜(ㅌ)",
    "pos": "n.",
    "meaning": "식물",
    "examples": [
     {
      "en": "We planted beans in 3 pots.",
      "ko": "우리는 세 개의 화분에 콩을 심었다."
     }
    ],
    "tip": "",
    "no": 90,
    "day": 9
   },
   {
    "word": "water",
    "pron": "워-터",
    "pos": "v.",
    "meaning": "물을 주다",
    "examples": [],
    "tip": "",
    "no": 91,
    "day": 9
   },
   {
    "word": "wither",
    "pron": "위더",
    "pos": "v.",
    "meaning": "(풀과 꽃 등이) 시들다",
    "examples": [],
    "tip": "",
    "no": 92,
    "day": 9
   },
   {
    "word": "tree",
    "pron": "츠리-",
    "pos": "n.",
    "meaning": "나무",
    "examples": [],
    "tip": "",
    "no": 93,
    "day": 9
   },
   {
    "word": "branch",
    "pron": "브랜취",
    "pos": "n.",
    "meaning": "가지",
    "examples": [],
    "tip": "",
    "no": 94,
    "day": 9
   },
   {
    "word": "leaf",
    "pron": "리-(ㅍ)",
    "pos": "n.",
    "meaning": "잎, 나뭇잎",
    "examples": [],
    "tip": "복수형은 leaves입니다.",
    "no": 95,
    "day": 9,
    "tipLabel": "💡 tip"
   },
   {
    "word": "root",
    "pron": "루웃",
    "pos": "n.",
    "meaning": "뿌리",
    "examples": [],
    "tip": "",
    "no": 96,
    "day": 9
   },
   {
    "word": "fruit",
    "pron": "프루웃",
    "pos": "n.",
    "meaning": "과일, 열매",
    "examples": [],
    "tip": "",
    "no": 97,
    "day": 9
   },
   {
    "word": "grass",
    "pron": "그래(ㅅ)",
    "pos": "n.",
    "meaning": "풀, 잔디",
    "examples": [],
    "tip": "",
    "no": 98,
    "day": 9
   },
   {
    "word": "flower",
    "pron": "플라워",
    "pos": "n.",
    "meaning": "꽃",
    "examples": [
     {
      "en": "She beautified her garden by planting flowers.",
      "ko": "그녀는 정원에 꽃을 심어서 예쁘게 꾸몄다."
     }
    ],
    "tip": "",
    "no": 99,
    "day": 9
   },
   {
    "word": "petal",
    "pron": "페털",
    "pos": "n.",
    "meaning": "꽃잎",
    "examples": [],
    "tip": "",
    "no": 100,
    "day": 9
   },
   {
    "word": "bloom",
    "pron": "블루움",
    "pos": "v.",
    "meaning": "꽃이 피다",
    "examples": [],
    "tip": "",
    "no": 101,
    "day": 9
   },
   {
    "word": "rose",
    "pron": "로우(ㅈ)",
    "pos": "n.",
    "meaning": "장미",
    "examples": [],
    "tip": "",
    "no": 102,
    "day": 9
   },
   {
    "word": "sunflower",
    "pron": "선플라워",
    "pos": "n.",
    "meaning": "해바라기",
    "examples": [],
    "tip": "",
    "no": 103,
    "day": 9
   },
   {
    "word": "tulip",
    "pron": "튜-립",
    "pos": "n.",
    "meaning": "튤립",
    "examples": [],
    "tip": "",
    "no": 104,
    "day": 9
   },
   {
    "word": "dandelion",
    "pron": "댄덜라이언",
    "pos": "n.",
    "meaning": "민들레",
    "examples": [],
    "tip": "",
    "no": 105,
    "day": 9
   },
   {
    "word": "lily",
    "pron": "릴리",
    "pos": "n.",
    "meaning": "백합",
    "examples": [],
    "tip": "",
    "no": 106,
    "day": 9
   },
   {
    "word": "morning-glory",
    "pron": "머-닝글러-리",
    "pos": "n.",
    "meaning": "나팔꽃",
    "examples": [],
    "tip": "",
    "no": 107,
    "day": 9
   },
   {
    "word": "chimpanzee",
    "pron": "침팬지-",
    "pos": "n.",
    "meaning": "침팬지",
    "examples": [],
    "tip": "",
    "no": 108,
    "day": 9
   },
   {
    "word": "gorilla",
    "pron": "거릴러",
    "pos": "n.",
    "meaning": "고릴라",
    "examples": [],
    "tip": "",
    "no": 109,
    "day": 9
   },
   {
    "word": "orangutan",
    "pron": "어-랭우탠",
    "pos": "n.",
    "meaning": "오랑우탄",
    "examples": [],
    "tip": "",
    "no": 110,
    "day": 9
   },
   {
    "word": "ivory",
    "pron": "아이버리",
    "pos": "n.",
    "meaning": "상아",
    "examples": [],
    "tip": "",
    "no": 111,
    "day": 9
   },
   {
    "word": "hippopotamus",
    "pron": "히뽀우파터머(ㅅ)",
    "pos": "n.",
    "meaning": "하마",
    "examples": [],
    "tip": "우리가 잘 알고 있는 hippo는 비격식으로 쓰는 말입니다.",
    "no": 112,
    "day": 9,
    "tipLabel": "💡 tip"
   },
   {
    "word": "reindeer",
    "pron": "레인디어",
    "pos": "n.",
    "meaning": "순록",
    "examples": [],
    "tip": "",
    "no": 113,
    "day": 9
   },
   {
    "word": "raccoon",
    "pron": "래쿠운",
    "pos": "n.",
    "meaning": "너구리",
    "examples": [],
    "tip": "",
    "no": 114,
    "day": 9
   },
   {
    "word": "rat",
    "pron": "랫",
    "pos": "",
    "meaning": "쥐",
    "examples": [],
    "tip": "",
    "no": 115,
    "day": 9
   },
   {
    "word": "hamster",
    "pron": "햄스터",
    "pos": "n.",
    "meaning": "햄스터",
    "examples": [
     {
      "en": "My hamster likes to eat cabbage.",
      "ko": "내 햄스터는 양배추를 즐겨 먹는다."
     }
    ],
    "tip": "",
    "no": 116,
    "day": 9
   },
   {
    "word": "dolphin",
    "pron": "달핀",
    "pos": "n.",
    "meaning": "돌고래",
    "examples": [],
    "tip": "",
    "no": 117,
    "day": 9
   },
   {
    "word": "feather",
    "pron": "페더",
    "pos": "n.",
    "meaning": "깃털",
    "examples": [],
    "tip": "",
    "no": 118,
    "day": 9
   },
   {
    "word": "beak",
    "pron": "비익",
    "pos": "",
    "meaning": "부리",
    "examples": [],
    "tip": "beak은 독수리나 매처럼 딱딱하고 끝이 구부러진 부리를 가리킵니다.",
    "no": 119,
    "day": 9,
    "tipLabel": "💡 tip"
   },
   {
    "word": "egg",
    "pron": "엑",
    "pos": "n.",
    "meaning": "알",
    "examples": [],
    "tip": "",
    "no": 120,
    "day": 9
   },
   {
    "word": "incubate",
    "pron": "인큐베잇",
    "pos": "v.",
    "meaning": "알을 품다",
    "examples": [],
    "tip": "",
    "no": 121,
    "day": 9
   },
   {
    "word": "nest",
    "pron": "네슷",
    "pos": "n.",
    "meaning": "둥지",
    "examples": [],
    "tip": "",
    "no": 122,
    "day": 9
   },
   {
    "word": "goose",
    "pron": "구-(ㅅ)",
    "pos": "n.",
    "meaning": "거위",
    "examples": [],
    "tip": "복수형은 geese입니다.",
    "no": 123,
    "day": 9,
    "tipLabel": "💡 tip"
   },
   {
    "word": "crow",
    "pron": "크로우",
    "pos": "n.",
    "meaning": "까마귀",
    "examples": [],
    "tip": "",
    "no": 124,
    "day": 9
   },
   {
    "word": "swallow",
    "pron": "스왈로우",
    "pos": "n.",
    "meaning": "제비",
    "examples": [],
    "tip": "",
    "no": 125,
    "day": 9
   },
   {
    "word": "scale",
    "pron": "스케일",
    "pos": "n.",
    "meaning": "비늘",
    "examples": [],
    "tip": "",
    "no": 126,
    "day": 9
   },
   {
    "word": "ray",
    "pron": "레이",
    "pos": "n.",
    "meaning": "가오리",
    "examples": [],
    "tip": "",
    "no": 127,
    "day": 9
   },
   {
    "word": "eel",
    "pron": "이일",
    "pos": "n.",
    "meaning": "뱀장어",
    "examples": [],
    "tip": "",
    "no": 128,
    "day": 9
   },
   {
    "word": "antenna",
    "pron": "앤테너",
    "pos": "n.",
    "meaning": "더듬이, 안테나",
    "examples": [],
    "tip": "",
    "no": 129,
    "day": 9
   },
   {
    "word": "pistil",
    "pron": "피스틸",
    "pos": "n.",
    "meaning": "암술",
    "examples": [],
    "tip": "",
    "no": 130,
    "day": 9
   },
   {
    "word": "stamen",
    "pron": "스테이먼",
    "pos": "n.",
    "meaning": "수술",
    "examples": [],
    "tip": "",
    "no": 131,
    "day": 9
   },
   {
    "word": "camellia",
    "pron": "커미일려",
    "pos": "n.",
    "meaning": "동백꽃",
    "examples": [],
    "tip": "",
    "no": 132,
    "day": 9
   },
   {
    "word": "begonia",
    "pron": "비고우녀",
    "pos": "n.",
    "meaning": "베고니아",
    "examples": [],
    "tip": "",
    "no": 133,
    "day": 9
   },
   {
    "word": "iris",
    "pron": "아이어리(ㅅ)",
    "pos": "n.",
    "meaning": "붓꽃",
    "examples": [],
    "tip": "",
    "no": 134,
    "day": 9
   },
   {
    "word": "daisy",
    "pron": "데이지",
    "pos": "n.",
    "meaning": "데이지",
    "examples": [],
    "tip": "",
    "no": 135,
    "day": 9
   },
   {
    "word": "peony",
    "pron": "피-어니",
    "pos": "n.",
    "meaning": "작약",
    "examples": [],
    "tip": "",
    "no": 136,
    "day": 9
   },
   {
    "word": "cherry blossom",
    "pron": "체리 블라섬",
    "pos": "n.",
    "meaning": "벚꽃",
    "examples": [],
    "tip": "",
    "no": 137,
    "day": 9
   },
   {
    "word": "narcissus",
    "pron": "나-씨서(ㅅ)",
    "pos": "n.",
    "meaning": "수선화",
    "examples": [],
    "tip": "",
    "no": 138,
    "day": 9
   },
   {
    "word": "orchid",
    "pron": "어-킷",
    "pos": "n.",
    "meaning": "난(초)",
    "examples": [],
    "tip": "",
    "no": 139,
    "day": 9
   },
   {
    "word": "chrysanthemum",
    "pron": "크리샌써멈",
    "pos": "n.",
    "meaning": "국화",
    "examples": [],
    "tip": "",
    "no": 140,
    "day": 9
   },
   {
    "word": "edelweiss",
    "pron": "에이들바이(ㅅ)",
    "pos": "n.",
    "meaning": "에델바이스",
    "examples": [],
    "tip": "",
    "no": 141,
    "day": 9
   },
   {
    "word": "weed",
    "pron": "위잇",
    "pos": "n.",
    "meaning": "잡초",
    "examples": [],
    "tip": "",
    "no": 142,
    "day": 9
   }
  ]
 },
 {
  "day": 10,
  "title": "Unit 10. 집",
  "words": [
   {
    "word": "home",
    "pron": "호움",
    "pos": "n.",
    "meaning": "집, 가정",
    "examples": [],
    "tip": "",
    "no": 1,
    "day": 10
   },
   {
    "word": "house",
    "pron": "하우(ㅅ)",
    "pos": "n.",
    "meaning": "집",
    "examples": [
     {
      "en": "I want my house to be clean without cleaning it.",
      "ko": "청소하지 않고도 집이 깨끗해졌으면 좋겠어."
     }
    ],
    "tip": "",
    "no": 2,
    "day": 10
   },
   {
    "word": "room",
    "pron": "루움",
    "pos": "n.",
    "meaning": "방",
    "examples": [],
    "tip": "",
    "no": 3,
    "day": 10
   },
   {
    "word": "bedroom",
    "pron": "벳루움",
    "pos": "n.",
    "meaning": "침실",
    "examples": [],
    "tip": "",
    "no": 4,
    "day": 10
   },
   {
    "word": "living room",
    "pron": "리빙 루움",
    "pos": "n.",
    "meaning": "거실",
    "examples": [
     {
      "en": "I need a more spacious living room.",
      "ko": "거실이 좀 더 넓으면 좋겠어요."
     }
    ],
    "tip": "",
    "no": 5,
    "day": 10
   },
   {
    "word": "kitchen",
    "pron": "킷천",
    "pos": "n.",
    "meaning": "부엌, 주방",
    "examples": [
     {
      "en": "The kitchen in this apartment is fully equipped.",
      "ko": "이 아파트의 부엌은 모든 설비가 갖춰져 있어요."
     }
    ],
    "tip": "",
    "no": 6,
    "day": 10
   },
   {
    "word": "bathroom",
    "pron": "배쓰루움",
    "pos": "n.",
    "meaning": "욕실, 화장실",
    "examples": [
     {
      "en": "Where is the bathroom?",
      "ko": "화장실이 어디죠?"
     }
    ],
    "tip": "극장이나 백화점 등 공공건물의 화장실은 restroom이라고 합니다. 영어권 나라별로 '화장실'을 말하는 단어의 차이가 있습니다. 미국에서는 bathroom이라 하지만, 영국에서는 toilet이라고 하며, 캐나다에서는 washroom이라고 합니다. toilet은 미국에서 '변기'를 의미합니다.",
    "no": 7,
    "day": 10,
    "tipLabel": "💡 tip"
   },
   {
    "word": "door",
    "pron": "더-",
    "pos": "n.",
    "meaning": "문",
    "examples": [],
    "tip": "",
    "no": 8,
    "day": 10
   },
   {
    "word": "doorbell",
    "pron": "더-벨",
    "pos": "n.",
    "meaning": "(현관의) 초인종",
    "examples": [],
    "tip": "",
    "no": 9,
    "day": 10
   },
   {
    "word": "entrance",
    "pron": "엔츠런(ㅆ)",
    "pos": "n.",
    "meaning": "출입구, 현관",
    "examples": [],
    "tip": "",
    "no": 10,
    "day": 10
   },
   {
    "word": "window",
    "pron": "윈도우",
    "pos": "n.",
    "meaning": "창문",
    "examples": [],
    "tip": "",
    "no": 11,
    "day": 10
   },
   {
    "word": "roof",
    "pron": "루-(ㅍ)",
    "pos": "n.",
    "meaning": "지붕",
    "examples": [],
    "tip": "",
    "no": 12,
    "day": 10
   },
   {
    "word": "chimney",
    "pron": "침니",
    "pos": "n.",
    "meaning": "굴뚝",
    "examples": [],
    "tip": "",
    "no": 13,
    "day": 10
   },
   {
    "word": "ceiling",
    "pron": "씨-링",
    "pos": "n.",
    "meaning": "천장",
    "examples": [],
    "tip": "",
    "no": 14,
    "day": 10
   },
   {
    "word": "floor",
    "pron": "플러-",
    "pos": "n.",
    "meaning": "바닥, 마루, 층",
    "examples": [
     {
      "en": "Don't spit on the floor.",
      "ko": "바닥에 침을 뱉지 마시오."
     }
    ],
    "tip": "'~층'이라고 할 때는 '서수+floor'입니다.",
    "no": 15,
    "day": 10,
    "tipLabel": "💡 tip"
   },
   {
    "word": "wall",
    "pron": "워얼",
    "pos": "n.",
    "meaning": "벽",
    "examples": [],
    "tip": "",
    "no": 16,
    "day": 10
   },
   {
    "word": "garden",
    "pron": "가-든",
    "pos": "n.",
    "meaning": "정원",
    "examples": [],
    "tip": "",
    "no": 17,
    "day": 10
   },
   {
    "word": "yard",
    "pron": "야-(ㄷ)",
    "pos": "n.",
    "meaning": "마당",
    "examples": [],
    "tip": "",
    "no": 18,
    "day": 10
   },
   {
    "word": "fence",
    "pron": "펜(ㅆ)",
    "pos": "n.",
    "meaning": "울타리",
    "examples": [],
    "tip": "",
    "no": 19,
    "day": 10
   },
   {
    "word": "stair",
    "pron": "스테어",
    "pos": "n.",
    "meaning": "계단, (계단의) 단",
    "examples": [],
    "tip": "주로 복수형 stairs로 씁니다.",
    "no": 20,
    "day": 10,
    "tipLabel": "💡 tip"
   },
   {
    "word": "attic",
    "pron": "애딕",
    "pos": "n.",
    "meaning": "지붕밑 층, 다락",
    "examples": [],
    "tip": "",
    "no": 21,
    "day": 10
   },
   {
    "word": "basement",
    "pron": "베이(ㅅ)먼(ㅌ)",
    "pos": "n.",
    "meaning": "지하실, 지하층",
    "examples": [],
    "tip": "",
    "no": 22,
    "day": 10
   },
   {
    "word": "furniture",
    "pron": "퍼-니춰",
    "pos": "n.",
    "meaning": "가구",
    "examples": [
     {
      "en": "I'm interested in furniture and interior design.",
      "ko": "나는 가구나 인테리어 디자인에 관심이 많아요."
     }
    ],
    "tip": "furniture는 집합명사로 단수 취급합니다.",
    "no": 23,
    "day": 10,
    "tipLabel": "💡 tip"
   },
   {
    "word": "sofa",
    "pron": "소우퍼",
    "pos": "n.",
    "meaning": "소파",
    "examples": [],
    "tip": "",
    "no": 24,
    "day": 10
   },
   {
    "word": "chair",
    "pron": "체어",
    "pos": "n.",
    "meaning": "의자",
    "examples": [],
    "tip": "",
    "no": 25,
    "day": 10
   },
   {
    "word": "table",
    "pron": "테이블",
    "pos": "n.",
    "meaning": "테이블, 탁자",
    "examples": [],
    "tip": "",
    "no": 26,
    "day": 10
   },
   {
    "word": "desk",
    "pron": "데슥",
    "pos": "n.",
    "meaning": "책상",
    "examples": [],
    "tip": "desk와 table의 차이는 일반적으로 서랍의 유무에 따라 구별하지만, 최근에는 서랍이 없어도 작업용이나 공부용으로 쓰이면 desk라고 합니다.",
    "no": 27,
    "day": 10,
    "tipLabel": "💡 tip"
   },
   {
    "word": "television",
    "pron": "텔러비전",
    "pos": "n.",
    "meaning": "텔레비전",
    "examples": [
     {
      "en": "Turn off the TV now.",
      "ko": "이제 TV를 꺼."
     }
    ],
    "tip": "",
    "no": 28,
    "day": 10
   },
   {
    "word": "tv",
    "pron": "티-비-",
    "pos": "n.",
    "meaning": "(television의 약어)",
    "examples": [],
    "tip": "",
    "no": 29,
    "day": 10
   },
   {
    "word": "bed",
    "pron": "벳",
    "pos": "n.",
    "meaning": "침대",
    "examples": [],
    "tip": "",
    "no": 30,
    "day": 10
   },
   {
    "word": "wardrobe",
    "pron": "워-(ㄷ)로웁",
    "pos": "n.",
    "meaning": "옷장",
    "examples": [],
    "tip": "",
    "no": 31,
    "day": 10
   },
   {
    "word": "drawer",
    "pron": "드러-",
    "pos": "n.",
    "meaning": "서랍",
    "examples": [],
    "tip": "",
    "no": 32,
    "day": 10
   },
   {
    "word": "shelf",
    "pron": "쉘(ㅍ)",
    "pos": "n.",
    "meaning": "선반",
    "examples": [
     {
      "en": "Can you dust the shelves?",
      "ko": "선반의 먼지 좀 털어 줄래?"
     }
    ],
    "tip": "shelf의 복수형은 shelves입니다.",
    "no": 33,
    "day": 10,
    "tipLabel": "💡 tip"
   },
   {
    "word": "mirror",
    "pron": "미러",
    "pos": "n.",
    "meaning": "거울",
    "examples": [],
    "tip": "",
    "no": 34,
    "day": 10
   },
   {
    "word": "electric light",
    "pron": "일렉츠릭 라잇",
    "pos": "n.",
    "meaning": "전등",
    "examples": [],
    "tip": "",
    "no": 35,
    "day": 10
   },
   {
    "word": "refrigerator",
    "pron": "리프리저레이러",
    "pos": "n.",
    "meaning": "냉장고",
    "examples": [
     {
      "en": "The refrigerator is open. Close the door, please.",
      "ko": "냉장고가 열려 있구나. 문 좀 닫아 주렴."
     }
    ],
    "tip": "",
    "no": 36,
    "day": 10
   },
   {
    "word": "gas range",
    "pron": "개(ㅅ) 레인쥐",
    "pos": "n.",
    "meaning": "가스레인지",
    "examples": [],
    "tip": "",
    "no": 37,
    "day": 10
   },
   {
    "word": "electric range",
    "pron": "일렉츠릭 레인쥐",
    "pos": "n.",
    "meaning": "전기레인지",
    "examples": [],
    "tip": "",
    "no": 38,
    "day": 10
   },
   {
    "word": "microwave oven",
    "pron": "마이크로우웨이(ㅂ) 어번",
    "pos": "n.",
    "meaning": "전자레인지",
    "examples": [
     {
      "en": "A microwave oven is a kitchen appliance that cooks or heats food using microwaves.",
      "ko": "전자레인지는 마이크로 파를 이용한 열로 음식을 조리하거나 데우는 데 쓰이는 주방 기구입니다."
     }
    ],
    "tip": "",
    "no": 39,
    "day": 10
   },
   {
    "word": "oven",
    "pron": "어번",
    "pos": "n.",
    "meaning": "오븐",
    "examples": [],
    "tip": "",
    "no": 40,
    "day": 10
   },
   {
    "word": "blender",
    "pron": "블렌더",
    "pos": "n.",
    "meaning": "믹서",
    "examples": [],
    "tip": "",
    "no": 41,
    "day": 10
   },
   {
    "word": "toaster",
    "pron": "토우스터",
    "pos": "n.",
    "meaning": "토스터",
    "examples": [],
    "tip": "",
    "no": 42,
    "day": 10
   },
   {
    "word": "sink",
    "pron": "싱(ㅋ)",
    "pos": "n.",
    "meaning": "싱크대, 개수대",
    "examples": [
     {
      "en": "The kitchen sink leaks water onto the floor.",
      "ko": "부엌 개수대에서 바닥으로 물이 새는데요."
     }
    ],
    "tip": "",
    "no": 43,
    "day": 10
   },
   {
    "word": "dishwasher",
    "pron": "디쉬워셔",
    "pos": "n.",
    "meaning": "식기세척기",
    "examples": [],
    "tip": "",
    "no": 44,
    "day": 10
   },
   {
    "word": "bathtub",
    "pron": "배쓰텁",
    "pos": "n.",
    "meaning": "욕조",
    "examples": [],
    "tip": "",
    "no": 45,
    "day": 10
   },
   {
    "word": "washstand",
    "pron": "워쉬스탠(ㄷ)",
    "pos": "n.",
    "meaning": "세면대",
    "examples": [],
    "tip": "",
    "no": 46,
    "day": 10
   },
   {
    "word": "toilet",
    "pron": "터일럿",
    "pos": "n.",
    "meaning": "변기",
    "examples": [
     {
      "en": "The toilet is clogged.",
      "ko": "변기가 막혔어요."
     }
    ],
    "tip": "",
    "no": 47,
    "day": 10
   },
   {
    "word": "shower",
    "pron": "샤워",
    "pos": "n.",
    "meaning": "샤워기",
    "examples": [],
    "tip": "",
    "no": 48,
    "day": 10
   },
   {
    "word": "tap",
    "pron": "탭",
    "pos": "n.",
    "meaning": "수도꼭지",
    "examples": [],
    "tip": "",
    "no": 49,
    "day": 10
   },
   {
    "word": "soap",
    "pron": "소웁",
    "pos": "n.",
    "meaning": "비누",
    "examples": [
     {
      "en": "Wash your hands with soap before each meal.",
      "ko": "매 식사 전에 비누로 손을 깨끗이 씻어라."
     }
    ],
    "tip": "",
    "no": 50,
    "day": 10
   },
   {
    "word": "trash can",
    "pron": "츠래쉬 캔",
    "pos": "n.",
    "meaning": "쓰레기통, 휴지통",
    "examples": [
     {
      "en": "Put the trash in the trash can.",
      "ko": "휴지는 휴지통에 버리세요."
     }
    ],
    "tip": "trash can은 주로 옥외에 있는 큰 쓰레기통을, wastebasket은 일반적인 쓰레기통을 말하며, 영국에서는 dust bin이라 합니다.",
    "no": 51,
    "day": 10,
    "tipLabel": "💡 tip"
   },
   {
    "word": "wastebasket",
    "pron": "웨이슷배스킷",
    "pos": "",
    "meaning": "쓰레기통, 휴지통",
    "examples": [],
    "tip": "",
    "no": 52,
    "day": 10
   },
   {
    "word": "clean",
    "pron": "클린",
    "pos": "v.",
    "meaning": "청소하다",
    "examples": [
     {
      "en": "Help me clean the house.",
      "ko": "집 청소하는 것 좀 도와줘."
     }
    ],
    "tip": "",
    "no": 53,
    "day": 10
   },
   {
    "word": "vacuum cleaner",
    "pron": "배큐엄 클리-너",
    "pos": "n.",
    "meaning": "진공청소기",
    "examples": [],
    "tip": "",
    "no": 54,
    "day": 10
   },
   {
    "word": "washing machine",
    "pron": "워싱 머쉰",
    "pos": "n.",
    "meaning": "세탁기",
    "examples": [
     {
      "en": "I'll run the washing machine.",
      "ko": "세탁기를 돌려야겠어."
     }
    ],
    "tip": "",
    "no": 55,
    "day": 10
   },
   {
    "word": "laundry",
    "pron": "러언드리",
    "pos": "n.",
    "meaning": "빨래(세탁물)",
    "examples": [],
    "tip": "",
    "no": 56,
    "day": 10
   },
   {
    "word": "dining room",
    "pron": "다이닝 루움",
    "pos": "n.",
    "meaning": "(호텔, 가정의) 식당",
    "examples": [],
    "tip": "",
    "no": 57,
    "day": 10
   },
   {
    "word": "key",
    "pron": "키-",
    "pos": "n.",
    "meaning": "열쇠",
    "examples": [],
    "tip": "",
    "no": 58,
    "day": 10
   },
   {
    "word": "open",
    "pron": "오우펀",
    "pos": "v.",
    "meaning": "열다",
    "examples": [],
    "tip": "",
    "no": 59,
    "day": 10
   },
   {
    "word": "close",
    "pron": "클로우(ㅈ)",
    "pos": "v.",
    "meaning": "닫다",
    "examples": [],
    "tip": "[클로우(ㅅ)]라고 읽으면 '가까운'이라는 뜻이 됩니다.",
    "no": 60,
    "day": 10,
    "tipLabel": "💡 tip"
   },
   {
    "word": "elevator",
    "pron": "엘러베이러",
    "pos": "n.",
    "meaning": "엘리베이터",
    "examples": [],
    "tip": "",
    "no": 61,
    "day": 10
   },
   {
    "word": "balcony",
    "pron": "밸커니",
    "pos": "n.",
    "meaning": "발코니",
    "examples": [],
    "tip": "",
    "no": 62,
    "day": 10
   },
   {
    "word": "storage",
    "pron": "스터-리쥐",
    "pos": "n.",
    "meaning": "창고, 보관",
    "examples": [],
    "tip": "",
    "no": 63,
    "day": 10
   },
   {
    "word": "easy chair",
    "pron": "이-지 체어",
    "pos": "n.",
    "meaning": "안락의자",
    "examples": [],
    "tip": "",
    "no": 64,
    "day": 10
   },
   {
    "word": "crib",
    "pron": "크립",
    "pos": "n.",
    "meaning": "(테두리 난간이 있는) 유아용 침대",
    "examples": [],
    "tip": "",
    "no": 65,
    "day": 10
   },
   {
    "word": "closet",
    "pron": "클라짓",
    "pos": "n.",
    "meaning": "벽장",
    "examples": [],
    "tip": "",
    "no": 66,
    "day": 10
   },
   {
    "word": "cabinet",
    "pron": "캐버닛",
    "pos": "n.",
    "meaning": "장식장, 진열장",
    "examples": [],
    "tip": "",
    "no": 67,
    "day": 10
   },
   {
    "word": "curtain",
    "pron": "커-튼",
    "pos": "n.",
    "meaning": "커튼",
    "examples": [
     {
      "en": "The new curtains do not blend with the color of the wall.",
      "ko": "새 커튼은 벽 색깔과 어울리지 않아."
     }
    ],
    "tip": "",
    "no": 68,
    "day": 10
   },
   {
    "word": "hanger",
    "pron": "행어",
    "pos": "n.",
    "meaning": "옷걸이",
    "examples": [],
    "tip": "",
    "no": 69,
    "day": 10
   },
   {
    "word": "freezer",
    "pron": "프리-저",
    "pos": "n.",
    "meaning": "냉동고",
    "examples": [
     {
      "en": "Since there's something wrong with the refrigerator, the ice in the freezer is melting.",
      "ko": "냉장고에 문제가 생겨서, 냉동실 얼음이 녹고 있어요."
     }
    ],
    "tip": "",
    "no": 70,
    "day": 10
   },
   {
    "word": "cleaner",
    "pron": "클리-너",
    "pos": "n.",
    "meaning": "청소기",
    "examples": [],
    "tip": "",
    "no": 71,
    "day": 10
   }
  ]
 },
 {
  "day": 11,
  "title": "Unit 11. 옷",
  "words": [
   {
    "word": "clothes",
    "pron": "클로우(ㅈ)",
    "pos": "n.",
    "meaning": "옷",
    "examples": [],
    "tip": "",
    "no": 1,
    "day": 11
   },
   {
    "word": "cloth",
    "pron": "클러-쓰",
    "pos": "n.",
    "meaning": "천, 옷감",
    "examples": [],
    "tip": "",
    "no": 2,
    "day": 11
   },
   {
    "word": "clothing",
    "pron": "클로우딩",
    "pos": "n.",
    "meaning": "의류 전체",
    "examples": [],
    "tip": "",
    "no": 3,
    "day": 11
   },
   {
    "word": "wear",
    "pron": "웨어",
    "pos": "v.",
    "meaning": "옷을 입다",
    "examples": [
     {
      "en": "What should I wear today?",
      "ko": "오늘 뭐 입어야 하지?"
     }
    ],
    "tip": "",
    "no": 4,
    "day": 11
   },
   {
    "word": "put on",
    "pron": "풋 언",
    "pos": "",
    "meaning": "옷을 입다",
    "examples": [],
    "tip": "",
    "no": 5,
    "day": 11
   },
   {
    "word": "take off",
    "pron": "테익 어-(ㅍ)",
    "pos": "",
    "meaning": "옷을 벗다",
    "examples": [],
    "tip": "",
    "no": 6,
    "day": 11
   },
   {
    "word": "dress",
    "pron": "드레(ㅅ)",
    "pos": "n.",
    "meaning": "옷, 원피스 v. (~에게) 옷을 입히다, 옷차림을 하다",
    "examples": [
     {
      "en": "She dressed up nicely.",
      "ko": "그녀는 옷을 잘 차려 입었다."
     }
    ],
    "tip": "",
    "no": 7,
    "day": 11
   },
   {
    "word": "suit",
    "pron": "수웃",
    "pos": "n.",
    "meaning": "양복",
    "examples": [],
    "tip": "",
    "no": 8,
    "day": 11
   },
   {
    "word": "dress shirt",
    "pron": "드레(ㅅ) 셔-(ㅌ)",
    "pos": "n.",
    "meaning": "셔츠, 와이셔츠",
    "examples": [],
    "tip": "",
    "no": 9,
    "day": 11
   },
   {
    "word": "t-shirt",
    "pron": "티-셔-(ㅌ)",
    "pos": "n.",
    "meaning": "티셔츠",
    "examples": [],
    "tip": "",
    "no": 10,
    "day": 11
   },
   {
    "word": "sleeve",
    "pron": "슬리-(ㅂ)",
    "pos": "n.",
    "meaning": "소매",
    "examples": [],
    "tip": "",
    "no": 11,
    "day": 11
   },
   {
    "word": "long-sleeved shirt",
    "pron": "러엉슬리-븟 셔-(ㅌ)",
    "pos": "",
    "meaning": "긴팔 셔츠",
    "examples": [],
    "tip": "",
    "no": 12,
    "day": 11
   },
   {
    "word": "short-sleeved shirt",
    "pron": "셔-(ㅌ)슬리-븟 셔-(ㅌ)",
    "pos": "",
    "meaning": "반팔 셔츠",
    "examples": [],
    "tip": "",
    "no": 13,
    "day": 11
   },
   {
    "word": "sleeveless shirt",
    "pron": "슬리-(ㅂ)리(ㅅ) 셔-(ㅌ)",
    "pos": "",
    "meaning": "민소매 셔츠",
    "examples": [],
    "tip": "",
    "no": 14,
    "day": 11
   },
   {
    "word": "polo shirt",
    "pron": "포울로우 셔-(ㅌ)",
    "pos": "",
    "meaning": "폴로 셔츠",
    "examples": [],
    "tip": "",
    "no": 15,
    "day": 11
   },
   {
    "word": "sweater",
    "pron": "스웨터",
    "pos": "n.",
    "meaning": "스웨터",
    "examples": [],
    "tip": "",
    "no": 16,
    "day": 11
   },
   {
    "word": "turtleneck",
    "pron": "터-틀넥",
    "pos": "n.",
    "meaning": "터틀넥 스웨터",
    "examples": [],
    "tip": "",
    "no": 17,
    "day": 11
   },
   {
    "word": "v-neck",
    "pron": "비-넥",
    "pos": "n.",
    "meaning": "브이넥 스웨터",
    "examples": [],
    "tip": "",
    "no": 18,
    "day": 11
   },
   {
    "word": "round neck",
    "pron": "라운(ㄷ) 넥",
    "pos": "",
    "meaning": "라운드 넥 스웨터",
    "examples": [],
    "tip": "",
    "no": 19,
    "day": 11
   },
   {
    "word": "wool sweater",
    "pron": "울 스웨터",
    "pos": "",
    "meaning": "양모 스웨터(털 스웨터)",
    "examples": [],
    "tip": "",
    "no": 20,
    "day": 11
   },
   {
    "word": "cardigan",
    "pron": "카-디건",
    "pos": "n.",
    "meaning": "카디건",
    "examples": [],
    "tip": "",
    "no": 21,
    "day": 11
   },
   {
    "word": "vest",
    "pron": "베슷",
    "pos": "n.",
    "meaning": "조끼",
    "examples": [],
    "tip": "",
    "no": 22,
    "day": 11
   },
   {
    "word": "jacket",
    "pron": "재킷",
    "pos": "n.",
    "meaning": "재킷",
    "examples": [],
    "tip": "",
    "no": 23,
    "day": 11
   },
   {
    "word": "leather jacket",
    "pron": "레더 재킷",
    "pos": "",
    "meaning": "가죽 재킷",
    "examples": [],
    "tip": "",
    "no": 24,
    "day": 11
   },
   {
    "word": "padded jumper",
    "pron": "패딧 점퍼",
    "pos": "",
    "meaning": "패딩 점퍼",
    "examples": [],
    "tip": "",
    "no": 25,
    "day": 11
   },
   {
    "word": "overcoat",
    "pron": "오우버코웃",
    "pos": "n.",
    "meaning": "코트",
    "examples": [
     {
      "en": "I bought an overcoat for winter.",
      "ko": "겨울을 맞아 코트를 한 벌 샀다."
     }
    ],
    "tip": "",
    "no": 26,
    "day": 11
   },
   {
    "word": "pants",
    "pron": "팬(ㅊ)",
    "pos": "n.",
    "meaning": "바지",
    "examples": [
     {
      "en": "These pants are too tight for me.",
      "ko": "이 바지는 나한테 너무 꽉 끼어."
     }
    ],
    "tip": "",
    "no": 27,
    "day": 11
   },
   {
    "word": "shorts",
    "pron": "셔-(ㅊ)",
    "pos": "n.",
    "meaning": "반바지",
    "examples": [],
    "tip": "",
    "no": 28,
    "day": 11
   },
   {
    "word": "jeans",
    "pron": "지인(ㅈ)",
    "pos": "n.",
    "meaning": "청바지",
    "examples": [
     {
      "en": "Skinny jeans are popular these days.",
      "ko": "요즘 스키니진이 유행이야."
     }
    ],
    "tip": "",
    "no": 29,
    "day": 11
   },
   {
    "word": "skirt",
    "pron": "스커-(ㅌ)",
    "pos": "n.",
    "meaning": "치마",
    "examples": [],
    "tip": "",
    "no": 30,
    "day": 11
   },
   {
    "word": "miniskirt",
    "pron": "미니스커-(ㅌ)",
    "pos": "n.",
    "meaning": "미니스커트",
    "examples": [],
    "tip": "",
    "no": 31,
    "day": 11
   },
   {
    "word": "gathered skirt",
    "pron": "개더(ㄷ) 스커-(ㅌ)",
    "pos": "n.",
    "meaning": "주름치마",
    "examples": [],
    "tip": "",
    "no": 32,
    "day": 11
   },
   {
    "word": "wedding dress",
    "pron": "웨딩 드레(ㅅ)",
    "pos": "n.",
    "meaning": "웨딩드레스",
    "examples": [],
    "tip": "",
    "no": 33,
    "day": 11
   },
   {
    "word": "underwear",
    "pron": "언더웨어",
    "pos": "n.",
    "meaning": "속옷",
    "examples": [],
    "tip": "",
    "no": 34,
    "day": 11
   },
   {
    "word": "lingerie",
    "pron": "라안줘레이",
    "pos": "n.",
    "meaning": "란제리, 여성 속옷",
    "examples": [],
    "tip": "",
    "no": 35,
    "day": 11
   },
   {
    "word": "pajamas",
    "pron": "퍼자-머(ㅈ)",
    "pos": "n.",
    "meaning": "잠옷, 파자마",
    "examples": [],
    "tip": "",
    "no": 36,
    "day": 11
   },
   {
    "word": "swimsuit",
    "pron": "스윔수웃",
    "pos": "n.",
    "meaning": "수영복",
    "examples": [],
    "tip": "",
    "no": 37,
    "day": 11
   },
   {
    "word": "bikini",
    "pron": "비키니",
    "pos": "n.",
    "meaning": "비키니 수영복",
    "examples": [],
    "tip": "",
    "no": 38,
    "day": 11
   },
   {
    "word": "rash guard",
    "pron": "래쉬 가-(ㄷ)",
    "pos": "n.",
    "meaning": "래시가드 (스판덱스나 폴리에스터 소재로 만드는 긴 소매의 수상 스포츠용 의류)",
    "examples": [],
    "tip": "",
    "no": 39,
    "day": 11
   },
   {
    "word": "sportswear",
    "pron": "스포-(ㅊ)웨어",
    "pos": "n.",
    "meaning": "운동복",
    "examples": [],
    "tip": "",
    "no": 40,
    "day": 11
   },
   {
    "word": "raincoat",
    "pron": "레인코웃",
    "pos": "n.",
    "meaning": "우비",
    "examples": [
     {
      "en": "Don't forget to carry your raincoat. It's going to rain today.",
      "ko": "우비 챙기는 거 잊지 마. 오늘 비가 올 거야."
     }
    ],
    "tip": "",
    "no": 41,
    "day": 11
   },
   {
    "word": "hat",
    "pron": "햇",
    "pos": "n.",
    "meaning": "(챙이 둥글게 둘러져 있는) 모자",
    "examples": [],
    "tip": "",
    "no": 42,
    "day": 11
   },
   {
    "word": "cap",
    "pron": "캡",
    "pos": "n.",
    "meaning": "(앞부분만 챙이 있는) 모자 (야구모자)",
    "examples": [],
    "tip": "",
    "no": 43,
    "day": 11
   },
   {
    "word": "beanie",
    "pron": "비-니",
    "pos": "n.",
    "meaning": "비니 (머리에 딱 맞는 동그란 모자)",
    "examples": [],
    "tip": "",
    "no": 44,
    "day": 11
   },
   {
    "word": "belt",
    "pron": "벨(ㅌ)",
    "pos": "n.",
    "meaning": "허리띠",
    "examples": [],
    "tip": "",
    "no": 45,
    "day": 11
   },
   {
    "word": "muffler",
    "pron": "머플러",
    "pos": "n.",
    "meaning": "목도리",
    "examples": [],
    "tip": "주로 두꺼운 방한용 목도리를 가리킵니다.",
    "no": 46,
    "day": 11,
    "tipLabel": "💡 tip"
   },
   {
    "word": "shawl",
    "pron": "셔얼",
    "pos": "n.",
    "meaning": "숄",
    "examples": [],
    "tip": "",
    "no": 47,
    "day": 11
   },
   {
    "word": "scarf",
    "pron": "스카-(ㅍ)",
    "pos": "n.",
    "meaning": "스카프",
    "examples": [
     {
      "en": "This scarf looks good on me.",
      "ko": "이 스카프는 나에게 어울린다."
     }
    ],
    "tip": "",
    "no": 48,
    "day": 11
   },
   {
    "word": "necktie",
    "pron": "넥타이",
    "pos": "n.",
    "meaning": "넥타이",
    "examples": [],
    "tip": "",
    "no": 49,
    "day": 11
   },
   {
    "word": "tiepin",
    "pron": "타이핀",
    "pos": "n.",
    "meaning": "넥타이핀",
    "examples": [],
    "tip": "",
    "no": 50,
    "day": 11
   },
   {
    "word": "suspenders",
    "pron": "서스펜더(ㅅ)",
    "pos": "n.",
    "meaning": "멜빵",
    "examples": [],
    "tip": "",
    "no": 51,
    "day": 11
   },
   {
    "word": "gloves",
    "pron": "글러브(ㅈ)",
    "pos": "n.",
    "meaning": "장갑",
    "examples": [],
    "tip": "",
    "no": 52,
    "day": 11
   },
   {
    "word": "socks",
    "pron": "삭(ㅅ)",
    "pos": "n.",
    "meaning": "양말",
    "examples": [],
    "tip": "",
    "no": 53,
    "day": 11
   },
   {
    "word": "stockings",
    "pron": "스타킹(ㅅ)",
    "pos": "n.",
    "meaning": "스타킹",
    "examples": [],
    "tip": "",
    "no": 54,
    "day": 11
   },
   {
    "word": "leggings",
    "pron": "레깅(ㅅ)",
    "pos": "n.",
    "meaning": "레깅스 (다리에 달라붙는 여성이나 아동용 보온 바지)",
    "examples": [],
    "tip": "",
    "no": 55,
    "day": 11
   },
   {
    "word": "shoes",
    "pron": "슈-(ㅈ)",
    "pos": "n.",
    "meaning": "신발, 구두",
    "examples": [],
    "tip": "신발은 모두 짝을 이루기 때문에 신발 한 짝을 말하는 경우가 아니면 복수형으로 써야 합니다.",
    "no": 56,
    "day": 11,
    "tipLabel": "💡 tip"
   },
   {
    "word": "sneakers",
    "pron": "스니-커(ㅅ)",
    "pos": "n.",
    "meaning": "운동화",
    "examples": [],
    "tip": "",
    "no": 57,
    "day": 11
   },
   {
    "word": "boots",
    "pron": "부-(ㅊ)",
    "pos": "n.",
    "meaning": "부츠",
    "examples": [],
    "tip": "",
    "no": 58,
    "day": 11
   },
   {
    "word": "high heels",
    "pron": "하이 히일(ㅅ)",
    "pos": "n.",
    "meaning": "하이힐",
    "examples": [],
    "tip": "",
    "no": 59,
    "day": 11
   },
   {
    "word": "loafers",
    "pron": "로우퍼(ㅅ)",
    "pos": "n.",
    "meaning": "단화",
    "examples": [],
    "tip": "",
    "no": 60,
    "day": 11
   },
   {
    "word": "sandals",
    "pron": "샌들(ㅅ)",
    "pos": "n.",
    "meaning": "샌들",
    "examples": [],
    "tip": "",
    "no": 61,
    "day": 11
   },
   {
    "word": "flip-flops",
    "pron": "플립플랍(ㅅ)",
    "pos": "n.",
    "meaning": "쪼리 샌들",
    "examples": [],
    "tip": "",
    "no": 62,
    "day": 11
   },
   {
    "word": "slippers",
    "pron": "슬리퍼(ㅅ)",
    "pos": "n.",
    "meaning": "실내화 (슬리퍼)",
    "examples": [],
    "tip": "",
    "no": 63,
    "day": 11
   },
   {
    "word": "bag",
    "pron": "백",
    "pos": "n.",
    "meaning": "가방",
    "examples": [],
    "tip": "",
    "no": 64,
    "day": 11
   },
   {
    "word": "handbag",
    "pron": "핸(ㄷ)백",
    "pos": "n.",
    "meaning": "짧은 손잡이의 핸드백",
    "examples": [],
    "tip": "",
    "no": 65,
    "day": 11
   },
   {
    "word": "shoulder bag",
    "pron": "쇼울더 백",
    "pos": "n.",
    "meaning": "어깨에 매는 숄더백",
    "examples": [],
    "tip": "",
    "no": 66,
    "day": 11
   },
   {
    "word": "backpack",
    "pron": "백팩",
    "pos": "n.",
    "meaning": "등에 매는 가방 (배낭, 책가방 등)",
    "examples": [],
    "tip": "",
    "no": 67,
    "day": 11
   },
   {
    "word": "clutch bag",
    "pron": "클럿취 백",
    "pos": "n.",
    "meaning": "클러치백",
    "examples": [],
    "tip": "격식을 차린 파티 등에서 손에 드는 작은 지갑을 말합니다.",
    "no": 68,
    "day": 11,
    "tipLabel": "💡 tip"
   },
   {
    "word": "pouch",
    "pron": "파우취",
    "pos": "n.",
    "meaning": "파우치 (주로 가죽으로 만든 작은 주머니)",
    "examples": [],
    "tip": "",
    "no": 69,
    "day": 11
   },
   {
    "word": "suitcase",
    "pron": "수웃케이(ㅅ)",
    "pos": "n.",
    "meaning": "여행 가방",
    "examples": [],
    "tip": "",
    "no": 70,
    "day": 11
   },
   {
    "word": "wallet",
    "pron": "월릿",
    "pos": "n.",
    "meaning": "지갑",
    "examples": [
     {
      "en": "I've lost my wallet recently.",
      "ko": "최근에 지갑을 잃어버렸어요."
     }
    ],
    "tip": "wallet은 지폐와 카드만 넣어서 접어서 사용하는 남성용 지갑, purse는 지폐와 동전을 함께 넣을 수 있는 여성용 지갑을 가리킵니다.",
    "no": 71,
    "day": 11,
    "tipLabel": "💡 tip"
   },
   {
    "word": "purse",
    "pron": "퍼-(ㅅ)",
    "pos": "n.",
    "meaning": "지갑",
    "examples": [],
    "tip": "",
    "no": 72,
    "day": 11
   },
   {
    "word": "glasses",
    "pron": "글래시(ㅅ)",
    "pos": "n.",
    "meaning": "안경",
    "examples": [],
    "tip": "",
    "no": 73,
    "day": 11
   },
   {
    "word": "sunglasses",
    "pron": "선글래시(ㅅ)",
    "pos": "n.",
    "meaning": "선글라스",
    "examples": [],
    "tip": "",
    "no": 74,
    "day": 11
   },
   {
    "word": "accessory",
    "pron": "액쎄서리",
    "pos": "n.",
    "meaning": "장신구",
    "examples": [],
    "tip": "",
    "no": 75,
    "day": 11
   },
   {
    "word": "necklace",
    "pron": "넥클리(ㅆ)",
    "pos": "n.",
    "meaning": "목걸이",
    "examples": [],
    "tip": "",
    "no": 76,
    "day": 11
   },
   {
    "word": "bracelet",
    "pron": "브레이쓸릿",
    "pos": "n.",
    "meaning": "팔찌",
    "examples": [],
    "tip": "",
    "no": 77,
    "day": 11
   },
   {
    "word": "earrings",
    "pron": "이어링(ㅅ)",
    "pos": "n.",
    "meaning": "귀걸이",
    "examples": [],
    "tip": "귀걸이는 보통 짝을 이루기 때문에 복수형으로 씁니다.",
    "no": 78,
    "day": 11,
    "tipLabel": "💡 tip"
   },
   {
    "word": "ring",
    "pron": "링",
    "pos": "n.",
    "meaning": "반지",
    "examples": [],
    "tip": "",
    "no": 79,
    "day": 11
   },
   {
    "word": "hairpin",
    "pron": "헤어핀",
    "pos": "n.",
    "meaning": "머리핀",
    "examples": [],
    "tip": "",
    "no": 80,
    "day": 11
   },
   {
    "word": "brooch",
    "pron": "브로우취",
    "pos": "n.",
    "meaning": "브로치",
    "examples": [],
    "tip": "",
    "no": 81,
    "day": 11
   },
   {
    "word": "jewel",
    "pron": "쥬-얼",
    "pos": "n.",
    "meaning": "보석, 귀금속",
    "examples": [],
    "tip": "",
    "no": 82,
    "day": 11
   },
   {
    "word": "trend",
    "pron": "츠렌(ㄷ)",
    "pos": "n.",
    "meaning": "경향, 추세",
    "examples": [],
    "tip": "",
    "no": 83,
    "day": 11
   },
   {
    "word": "fashion",
    "pron": "패션",
    "pos": "n.",
    "meaning": "유행, 패션",
    "examples": [
     {
      "en": "She only wears the latest fashions.",
      "ko": "그녀는 최신 유행 옷만 입어."
     }
    ],
    "tip": "",
    "no": 84,
    "day": 11
   },
   {
    "word": "vogue",
    "pron": "보우(ㄱ)",
    "pos": "",
    "meaning": "유행, 패션",
    "examples": [
     {
      "en": "It's in vogue now.",
      "ko": "이거 지금 유행 중이야."
     }
    ],
    "tip": "",
    "no": 85,
    "day": 11
   },
   {
    "word": "in fashion",
    "pron": "인 패션",
    "pos": "",
    "meaning": "유행하는",
    "examples": [],
    "tip": "",
    "no": 86,
    "day": 11
   },
   {
    "word": "out of fashion",
    "pron": "아웃 어(ㅂ) 패션",
    "pos": "",
    "meaning": "유행이 지난",
    "examples": [],
    "tip": "",
    "no": 87,
    "day": 11
   },
   {
    "word": "collar",
    "pron": "칼러",
    "pos": "n.",
    "meaning": "옷깃",
    "examples": [],
    "tip": "",
    "no": 88,
    "day": 11
   },
   {
    "word": "pocket",
    "pron": "파킷",
    "pos": "n.",
    "meaning": "호주머니",
    "examples": [],
    "tip": "",
    "no": 89,
    "day": 11
   },
   {
    "word": "zipper",
    "pron": "지뻐",
    "pos": "n.",
    "meaning": "지퍼",
    "examples": [],
    "tip": "",
    "no": 90,
    "day": 11
   },
   {
    "word": "silk",
    "pron": "실(ㅋ)",
    "pos": "n.",
    "meaning": "비단, 실크",
    "examples": [
     {
      "en": "Cotton absorb sweat well.",
      "ko": "면이 땀을 잘 흡수한다."
     }
    ],
    "tip": "",
    "no": 91,
    "day": 11
   },
   {
    "word": "cotton",
    "pron": "카든",
    "pos": "n.",
    "meaning": "면",
    "examples": [],
    "tip": "",
    "no": 92,
    "day": 11
   },
   {
    "word": "wool",
    "pron": "울",
    "pos": "n.",
    "meaning": "모직, 양모",
    "examples": [],
    "tip": "",
    "no": 93,
    "day": 11
   },
   {
    "word": "synthetic fiber",
    "pron": "신쎄틱 파이버",
    "pos": "n.",
    "meaning": "합성섬유",
    "examples": [],
    "tip": "",
    "no": 94,
    "day": 11
   },
   {
    "word": "leather",
    "pron": "레더",
    "pos": "n.",
    "meaning": "가죽, 피혁",
    "examples": [],
    "tip": "",
    "no": 95,
    "day": 11
   },
   {
    "word": "line",
    "pron": "라인",
    "pos": "n.",
    "meaning": "선, 줄, 옷의 라인",
    "examples": [],
    "tip": "",
    "no": 96,
    "day": 11
   },
   {
    "word": "plain",
    "pron": "플레인",
    "pos": "a.",
    "meaning": "단색의",
    "examples": [],
    "tip": "",
    "no": 97,
    "day": 11
   },
   {
    "word": "striped",
    "pron": "스츠라입(ㅌ)",
    "pos": "a.",
    "meaning": "줄무늬의",
    "examples": [
     {
      "en": "He always wears striped clothes.",
      "ko": "그는 항상 줄무늬 옷을 입고 있던데."
     }
    ],
    "tip": "",
    "no": 98,
    "day": 11
   },
   {
    "word": "checkered",
    "pron": "체커(ㄷ)",
    "pos": "a.",
    "meaning": "체크무늬의",
    "examples": [],
    "tip": "",
    "no": 99,
    "day": 11
   },
   {
    "word": "plaid",
    "pron": "플랫",
    "pos": "a.",
    "meaning": "격자무늬의",
    "examples": [],
    "tip": "",
    "no": 100,
    "day": 11
   },
   {
    "word": "flower-printed",
    "pron": "플라워프린팃",
    "pos": "a.",
    "meaning": "꽃무늬의",
    "examples": [],
    "tip": "",
    "no": 101,
    "day": 11
   },
   {
    "word": "embroider",
    "pron": "임브러이더",
    "pos": "v.",
    "meaning": "수를 놓다",
    "examples": [],
    "tip": "",
    "no": 102,
    "day": 11
   },
   {
    "word": "embroidery",
    "pron": "임브러이더리",
    "pos": "n.",
    "meaning": "자수",
    "examples": [],
    "tip": "",
    "no": 103,
    "day": 11
   },
   {
    "word": "embroidered",
    "pron": "임브러이더(ㄷ)",
    "pos": "a.",
    "meaning": "자수를 놓은",
    "examples": [],
    "tip": "",
    "no": 104,
    "day": 11
   }
  ]
 },
 {
  "day": 12,
  "title": "Unit 12. 음식",
  "words": [
   {
    "word": "chili (pepper)",
    "pron": "칠리 (페뻐)",
    "pos": "n.",
    "meaning": "고추",
    "examples": [],
    "tip": "",
    "no": 1,
    "day": 12
   },
   {
    "word": "(black) pepper",
    "pron": "(블랙) 페뻐",
    "pos": "n.",
    "meaning": "후추",
    "examples": [],
    "tip": "",
    "no": 2,
    "day": 12
   },
   {
    "word": "bell pepper",
    "pron": "벨 페뻐",
    "pos": "n.",
    "meaning": "피망",
    "examples": [],
    "tip": "",
    "no": 3,
    "day": 12
   },
   {
    "word": "eggplant",
    "pron": "엑플랜(ㅌ)",
    "pos": "n.",
    "meaning": "가지",
    "examples": [],
    "tip": "",
    "no": 4,
    "day": 12
   },
   {
    "word": "broccoli",
    "pron": "브라컬리",
    "pos": "n.",
    "meaning": "브로콜리",
    "examples": [],
    "tip": "",
    "no": 5,
    "day": 12
   },
   {
    "word": "olive",
    "pron": "알리(ㅂ)",
    "pos": "n.",
    "meaning": "올리브",
    "examples": [],
    "tip": "",
    "no": 6,
    "day": 12
   },
   {
    "word": "fish",
    "pron": "피쉬",
    "pos": "n.",
    "meaning": "생선",
    "examples": [],
    "tip": "",
    "no": 7,
    "day": 12
   },
   {
    "word": "salmon",
    "pron": "새먼",
    "pos": "n.",
    "meaning": "연어",
    "examples": [],
    "tip": "",
    "no": 8,
    "day": 12
   },
   {
    "word": "tuna",
    "pron": "튜-너",
    "pos": "n.",
    "meaning": "참치",
    "examples": [],
    "tip": "",
    "no": 9,
    "day": 12
   },
   {
    "word": "squid",
    "pron": "스쿠잇",
    "pos": "n.",
    "meaning": "오징어",
    "examples": [],
    "tip": "",
    "no": 10,
    "day": 12
   },
   {
    "word": "octopus",
    "pron": "악터퍼(ㅅ)",
    "pos": "n.",
    "meaning": "문어",
    "examples": [],
    "tip": "",
    "no": 11,
    "day": 12
   },
   {
    "word": "shrimp",
    "pron": "쉬림(ㅍ)",
    "pos": "n.",
    "meaning": "새우",
    "examples": [],
    "tip": "",
    "no": 12,
    "day": 12
   },
   {
    "word": "clam",
    "pron": "클램",
    "pos": "n.",
    "meaning": "조개",
    "examples": [],
    "tip": "",
    "no": 13,
    "day": 12
   },
   {
    "word": "oyster",
    "pron": "어이스터",
    "pos": "n.",
    "meaning": "굴",
    "examples": [],
    "tip": "",
    "no": 14,
    "day": 12
   },
   {
    "word": "dried seaweed",
    "pron": "드라잇 시-위잇",
    "pos": "n.",
    "meaning": "김",
    "examples": [],
    "tip": "",
    "no": 15,
    "day": 12
   },
   {
    "word": "cereal",
    "pron": "씨리얼",
    "pos": "n.",
    "meaning": "곡물, 시리얼",
    "examples": [],
    "tip": "",
    "no": 16,
    "day": 12
   },
   {
    "word": "rice",
    "pron": "라이(ㅆ)",
    "pos": "n.",
    "meaning": "쌀, 밥",
    "examples": [],
    "tip": "",
    "no": 17,
    "day": 12
   },
   {
    "word": "bean",
    "pron": "비인",
    "pos": "n.",
    "meaning": "콩",
    "examples": [],
    "tip": "",
    "no": 18,
    "day": 12
   },
   {
    "word": "peanut",
    "pron": "피-넛",
    "pos": "n.",
    "meaning": "땅콩",
    "examples": [],
    "tip": "",
    "no": 19,
    "day": 12
   },
   {
    "word": "corn",
    "pron": "커언",
    "pos": "n.",
    "meaning": "옥수수",
    "examples": [],
    "tip": "",
    "no": 20,
    "day": 12
   },
   {
    "word": "flour",
    "pron": "플라우어",
    "pos": "n.",
    "meaning": "밀가루",
    "examples": [],
    "tip": "",
    "no": 21,
    "day": 12
   },
   {
    "word": "fruit",
    "pron": "프루웃",
    "pos": "n.",
    "meaning": "과일",
    "examples": [],
    "tip": "",
    "no": 22,
    "day": 12
   },
   {
    "word": "strawberry",
    "pron": "스츠라-베리",
    "pos": "n.",
    "meaning": "딸기",
    "examples": [],
    "tip": "",
    "no": 23,
    "day": 12
   },
   {
    "word": "raspberry",
    "pron": "래(ㅈ)베리",
    "pos": "n.",
    "meaning": "산딸기",
    "examples": [],
    "tip": "",
    "no": 24,
    "day": 12
   },
   {
    "word": "apple",
    "pron": "애쁠",
    "pos": "n.",
    "meaning": "사과",
    "examples": [],
    "tip": "",
    "no": 25,
    "day": 12
   },
   {
    "word": "pear",
    "pron": "페어",
    "pos": "n.",
    "meaning": "배",
    "examples": [],
    "tip": "",
    "no": 26,
    "day": 12
   },
   {
    "word": "orange",
    "pron": "어-린쥐",
    "pos": "n.",
    "meaning": "오렌지",
    "examples": [],
    "tip": "",
    "no": 27,
    "day": 12
   },
   {
    "word": "tangerine",
    "pron": "탠저리인",
    "pos": "n.",
    "meaning": "귤",
    "examples": [],
    "tip": "",
    "no": 28,
    "day": 12
   },
   {
    "word": "lemon",
    "pron": "레먼",
    "pos": "n.",
    "meaning": "레몬",
    "examples": [],
    "tip": "",
    "no": 29,
    "day": 12
   },
   {
    "word": "grape",
    "pron": "그레입",
    "pos": "n.",
    "meaning": "포도",
    "examples": [],
    "tip": "",
    "no": 30,
    "day": 12
   },
   {
    "word": "banana",
    "pron": "버내너",
    "pos": "n.",
    "meaning": "바나나",
    "examples": [],
    "tip": "",
    "no": 31,
    "day": 12
   },
   {
    "word": "melon",
    "pron": "멜런",
    "pos": "n.",
    "meaning": "멜론",
    "examples": [],
    "tip": "",
    "no": 32,
    "day": 12
   },
   {
    "word": "watermelon",
    "pron": "워-터멜런",
    "pos": "n.",
    "meaning": "수박",
    "examples": [],
    "tip": "",
    "no": 33,
    "day": 12
   },
   {
    "word": "pineapple",
    "pron": "파인애쁠",
    "pos": "n.",
    "meaning": "파인애플",
    "examples": [],
    "tip": "",
    "no": 34,
    "day": 12
   },
   {
    "word": "peach",
    "pron": "피-취",
    "pos": "n.",
    "meaning": "복숭아",
    "examples": [],
    "tip": "",
    "no": 35,
    "day": 12
   },
   {
    "word": "apricot",
    "pron": "앱리카앗",
    "pos": "n.",
    "meaning": "살구",
    "examples": [],
    "tip": "",
    "no": 36,
    "day": 12
   },
   {
    "word": "salt",
    "pron": "서얼(ㅌ)",
    "pos": "n.",
    "meaning": "소금",
    "examples": [
     {
      "en": "I'd like it cooked without salt.",
      "ko": "소금을 넣지 않고 요리해 주세요."
     }
    ],
    "tip": "",
    "no": 37,
    "day": 12
   },
   {
    "word": "sugar",
    "pron": "슈거",
    "pos": "n.",
    "meaning": "설탕",
    "examples": [],
    "tip": "",
    "no": 38,
    "day": 12
   },
   {
    "word": "vinegar",
    "pron": "비너거",
    "pos": "n.",
    "meaning": "식초",
    "examples": [],
    "tip": "",
    "no": 39,
    "day": 12
   },
   {
    "word": "soy sauce",
    "pron": "서이 서-(ㅆ)",
    "pos": "n.",
    "meaning": "간장",
    "examples": [],
    "tip": "",
    "no": 40,
    "day": 12
   },
   {
    "word": "cooking oil",
    "pron": "쿠킹 어일",
    "pos": "n.",
    "meaning": "식용유",
    "examples": [],
    "tip": "",
    "no": 41,
    "day": 12
   },
   {
    "word": "dressing",
    "pron": "드레싱",
    "pos": "n.",
    "meaning": "드레싱, 소스",
    "examples": [
     {
      "en": "What kind of dressing would you like?",
      "ko": "드레싱은 어느 걸로 하시겠어요?"
     }
    ],
    "tip": "",
    "no": 42,
    "day": 12
   },
   {
    "word": "peel",
    "pron": "피일",
    "pos": "v.",
    "meaning": "껍질을 벗기다",
    "examples": [],
    "tip": "",
    "no": 43,
    "day": 12
   },
   {
    "word": "cut",
    "pron": "컷",
    "pos": "v.",
    "meaning": "자르다",
    "examples": [],
    "tip": "",
    "no": 44,
    "day": 12
   },
   {
    "word": "mix",
    "pron": "믹(ㅅ)",
    "pos": "v.",
    "meaning": "섞다",
    "examples": [],
    "tip": "",
    "no": 45,
    "day": 12
   },
   {
    "word": "fry",
    "pron": "프라이",
    "pos": "v.",
    "meaning": "(기름에) 튀기다",
    "examples": [],
    "tip": "",
    "no": 46,
    "day": 12
   },
   {
    "word": "bake",
    "pron": "베익",
    "pos": "v.",
    "meaning": "굽다",
    "examples": [
     {
      "en": "Could I have it baked a little more?",
      "ko": "좀 더 구워 주시겠어요?"
     }
    ],
    "tip": "",
    "no": 47,
    "day": 12
   },
   {
    "word": "roast",
    "pron": "로우슷",
    "pos": "v.",
    "meaning": "(특히 고기를 오븐이나 불 위에) 굽다",
    "examples": [],
    "tip": "",
    "no": 48,
    "day": 12
   },
   {
    "word": "grill",
    "pron": "그릴",
    "pos": "v.",
    "meaning": "(그릴이나 석쇠에) 굽다",
    "examples": [],
    "tip": "",
    "no": 49,
    "day": 12
   },
   {
    "word": "boil",
    "pron": "버일",
    "pos": "v.",
    "meaning": "삶다",
    "examples": [],
    "tip": "",
    "no": 50,
    "day": 12
   },
   {
    "word": "frying pan",
    "pron": "프라잉 팬",
    "pos": "n.",
    "meaning": "프라이팬",
    "examples": [
     {
      "en": "The frying pans are arranged by size.",
      "ko": "프라이팬은 크기별로 정리되어 있어요."
     }
    ],
    "tip": "",
    "no": 51,
    "day": 12
   },
   {
    "word": "plate",
    "pron": "플레잇",
    "pos": "n.",
    "meaning": "접시",
    "examples": [],
    "tip": "",
    "no": 52,
    "day": 12
   },
   {
    "word": "bowl",
    "pron": "보울",
    "pos": "n.",
    "meaning": "그릇, 사발",
    "examples": [
     {
      "en": "You should handle those bowls with care.",
      "ko": "이 그릇들을 조심해서 다뤄야 해요."
     }
    ],
    "tip": "",
    "no": 53,
    "day": 12
   },
   {
    "word": "food",
    "pron": "푸웃",
    "pos": "n.",
    "meaning": "음식",
    "examples": [
     {
      "en": "Don't be so choosy about your food.",
      "ko": "그렇게 음식을 가리면 안 돼."
     }
    ],
    "tip": "",
    "no": 54,
    "day": 12
   },
   {
    "word": "meal",
    "pron": "미일",
    "pos": "n.",
    "meaning": "식사, 끼니",
    "examples": [
     {
      "en": "I'd like to have a light meal.",
      "ko": "간단하게 식사하고 싶은데요."
     }
    ],
    "tip": "",
    "no": 55,
    "day": 12
   },
   {
    "word": "eat",
    "pron": "이잇",
    "pos": "v.",
    "meaning": "먹다",
    "examples": [],
    "tip": "",
    "no": 56,
    "day": 12
   },
   {
    "word": "cook",
    "pron": "쿡",
    "pos": "n.",
    "meaning": "요리사, 요리하다",
    "examples": [
     {
      "en": "I like to cook.",
      "ko": "나는 요리하는 것을 좋아한다."
     }
    ],
    "tip": "",
    "no": 57,
    "day": 12
   },
   {
    "word": "meat",
    "pron": "미잇",
    "pos": "n.",
    "meaning": "고기",
    "examples": [
     {
      "en": "We specialize in chicken.",
      "ko": "저희는 닭고기 요리를 전문으로 하고 있습니다."
     }
    ],
    "tip": "",
    "no": 58,
    "day": 12
   },
   {
    "word": "beef",
    "pron": "비-(ㅍ)",
    "pos": "n.",
    "meaning": "소고기",
    "examples": [],
    "tip": "",
    "no": 59,
    "day": 12
   },
   {
    "word": "pork",
    "pron": "퍼-(ㅋ)",
    "pos": "n.",
    "meaning": "돼지고기",
    "examples": [],
    "tip": "",
    "no": 60,
    "day": 12
   },
   {
    "word": "chicken",
    "pron": "치킨",
    "pos": "n.",
    "meaning": "닭고기",
    "examples": [],
    "tip": "",
    "no": 61,
    "day": 12
   },
   {
    "word": "lamb",
    "pron": "램",
    "pos": "n.",
    "meaning": "양고기",
    "examples": [],
    "tip": "lamb은 새끼양의 고기를, mutton은 다 자란 양의 고기를 말합니다.",
    "no": 62,
    "day": 12,
    "tipLabel": "💡 tip"
   },
   {
    "word": "mutton",
    "pron": "머든",
    "pos": "n.",
    "meaning": "양고기",
    "examples": [],
    "tip": "",
    "no": 63,
    "day": 12
   },
   {
    "word": "vegetable",
    "pron": "베쥐터블",
    "pos": "n.",
    "meaning": "채소",
    "examples": [],
    "tip": "",
    "no": 64,
    "day": 12
   },
   {
    "word": "spinach",
    "pron": "스피니취",
    "pos": "n.",
    "meaning": "시금치",
    "examples": [],
    "tip": "",
    "no": 65,
    "day": 12
   },
   {
    "word": "cucumber",
    "pron": "큐-컴버",
    "pos": "n.",
    "meaning": "오이",
    "examples": [],
    "tip": "",
    "no": 66,
    "day": 12
   },
   {
    "word": "tomato",
    "pron": "터메이토우",
    "pos": "n.",
    "meaning": "토마토",
    "examples": [],
    "tip": "",
    "no": 67,
    "day": 12
   },
   {
    "word": "carrot",
    "pron": "캐럿",
    "pos": "n.",
    "meaning": "당근",
    "examples": [],
    "tip": "",
    "no": 68,
    "day": 12
   },
   {
    "word": "potato",
    "pron": "퍼테이토우",
    "pos": "n.",
    "meaning": "감자",
    "examples": [],
    "tip": "",
    "no": 69,
    "day": 12
   },
   {
    "word": "sweet potato",
    "pron": "스위잇 퍼테이토우",
    "pos": "n.",
    "meaning": "고구마",
    "examples": [],
    "tip": "",
    "no": 70,
    "day": 12
   },
   {
    "word": "cabbage",
    "pron": "캐비쥐",
    "pos": "n.",
    "meaning": "양배추",
    "examples": [],
    "tip": "",
    "no": 71,
    "day": 12
   },
   {
    "word": "onion",
    "pron": "어년",
    "pos": "n.",
    "meaning": "양파",
    "examples": [
     {
      "en": "Hold the onions, please.",
      "ko": "양파는 빼고 주세요."
     }
    ],
    "tip": "",
    "no": 72,
    "day": 12
   },
   {
    "word": "garlic",
    "pron": "갈-릭",
    "pos": "n.",
    "meaning": "마늘",
    "examples": [],
    "tip": "",
    "no": 73,
    "day": 12
   },
   {
    "word": "paprika",
    "pron": "패프리-커",
    "pos": "n.",
    "meaning": "파프리카",
    "examples": [],
    "tip": "",
    "no": 74,
    "day": 12
   },
   {
    "word": "anchovy",
    "pron": "앤초우비",
    "pos": "n.",
    "meaning": "멸치",
    "examples": [],
    "tip": "",
    "no": 75,
    "day": 12
   },
   {
    "word": "cod",
    "pron": "캇",
    "pos": "n.",
    "meaning": "대구",
    "examples": [],
    "tip": "",
    "no": 76,
    "day": 12
   },
   {
    "word": "mackerel",
    "pron": "매크럴",
    "pos": "n.",
    "meaning": "고등어",
    "examples": [],
    "tip": "",
    "no": 77,
    "day": 12
   },
   {
    "word": "crab",
    "pron": "크랩",
    "pos": "n.",
    "meaning": "게",
    "examples": [],
    "tip": "",
    "no": 78,
    "day": 12
   },
   {
    "word": "lobster",
    "pron": "랍스터",
    "pos": "n.",
    "meaning": "바닷가재",
    "examples": [],
    "tip": "",
    "no": 79,
    "day": 12
   },
   {
    "word": "grain",
    "pron": "그레인",
    "pos": "n.",
    "meaning": "곡물",
    "examples": [
     {
      "en": "Do you want some more rice?",
      "ko": "밥 더 줄까?"
     }
    ],
    "tip": "cereal은 풀 형태로 된 곡물을 말합니다. 하지만, 우리가 흔히 식사 대용으로 먹는 '시리얼'을 가리키는 경우가 많습니다.",
    "no": 80,
    "day": 12,
    "tipLabel": "💡 tip"
   },
   {
    "word": "kidney bean",
    "pron": "킷니 비인",
    "pos": "n.",
    "meaning": "강낭콩",
    "examples": [],
    "tip": "",
    "no": 81,
    "day": 12
   },
   {
    "word": "soybean",
    "pron": "서이비인",
    "pos": "n.",
    "meaning": "대두",
    "examples": [],
    "tip": "",
    "no": 82,
    "day": 12
   },
   {
    "word": "pea",
    "pron": "피-",
    "pos": "n.",
    "meaning": "완두콩",
    "examples": [],
    "tip": "",
    "no": 83,
    "day": 12
   },
   {
    "word": "adzuki bean",
    "pron": "앳주-키 비인",
    "pos": "n.",
    "meaning": "팥",
    "examples": [],
    "tip": "",
    "no": 84,
    "day": 12
   },
   {
    "word": "red bean",
    "pron": "렛 비인",
    "pos": "",
    "meaning": "팥",
    "examples": [],
    "tip": "",
    "no": 85,
    "day": 12
   },
   {
    "word": "cherry",
    "pron": "체리",
    "pos": "n.",
    "meaning": "체리 (앵두)",
    "examples": [],
    "tip": "",
    "no": 86,
    "day": 12
   },
   {
    "word": "mango",
    "pron": "맹고우",
    "pos": "n.",
    "meaning": "망고",
    "examples": [],
    "tip": "",
    "no": 87,
    "day": 12
   },
   {
    "word": "fig",
    "pron": "픽",
    "pos": "n.",
    "meaning": "무화과",
    "examples": [],
    "tip": "",
    "no": 88,
    "day": 12
   },
   {
    "word": "avocado",
    "pron": "애버카-도우",
    "pos": "n.",
    "meaning": "아보카도",
    "examples": [],
    "tip": "",
    "no": 89,
    "day": 12
   },
   {
    "word": "drink",
    "pron": "드링(ㅋ)",
    "pos": "n.",
    "meaning": "음료",
    "examples": [
     {
      "en": "We'd like to order drinks first.",
      "ko": "먼저 음료부터 주문할게요."
     }
    ],
    "tip": "",
    "no": 90,
    "day": 12
   },
   {
    "word": "beverage",
    "pron": "베버리쥐",
    "pos": "n.",
    "meaning": "음료",
    "examples": [],
    "tip": "",
    "no": 91,
    "day": 12
   },
   {
    "word": "water",
    "pron": "워-터",
    "pos": "n.",
    "meaning": "물",
    "examples": [
     {
      "en": "May I have more water?",
      "ko": "물 좀 더 주시겠어요?"
     }
    ],
    "tip": "",
    "no": 92,
    "day": 12
   },
   {
    "word": "milk",
    "pron": "밀(ㅋ)",
    "pos": "n.",
    "meaning": "우유",
    "examples": [],
    "tip": "",
    "no": 93,
    "day": 12
   },
   {
    "word": "soda",
    "pron": "소우더",
    "pos": "n.",
    "meaning": "탄산음료",
    "examples": [],
    "tip": "",
    "no": 94,
    "day": 12
   },
   {
    "word": "beer",
    "pron": "비어",
    "pos": "n.",
    "meaning": "맥주",
    "examples": [
     {
      "en": "Do you want to have a beer first?",
      "ko": "우선 맥주부터 드실래요?"
     }
    ],
    "tip": "",
    "no": 95,
    "day": 12
   },
   {
    "word": "wine",
    "pron": "와인",
    "pos": "n.",
    "meaning": "포도주, 와인",
    "examples": [],
    "tip": "",
    "no": 96,
    "day": 12
   },
   {
    "word": "coffee",
    "pron": "커-피",
    "pos": "n.",
    "meaning": "커피",
    "examples": [
     {
      "en": "Bring me the coffee later, please.",
      "ko": "커피는 나중에 갖다 주세요."
     }
    ],
    "tip": "",
    "no": 97,
    "day": 12
   },
   {
    "word": "dessert",
    "pron": "디저-(ㅌ)",
    "pos": "n.",
    "meaning": "디저트, 후식",
    "examples": [
     {
      "en": "What kinds of desserts do you have?",
      "ko": "디저트로는 무엇이 있습니까?"
     }
    ],
    "tip": "",
    "no": 98,
    "day": 12
   },
   {
    "word": "ice cream",
    "pron": "아이(ㅆ) 크리임",
    "pos": "n.",
    "meaning": "아이스크림",
    "examples": [
     {
      "en": "I will have some ice cream for dessert.",
      "ko": "디저트는 아이스크림으로 할게요."
     }
    ],
    "tip": "",
    "no": 99,
    "day": 12
   },
   {
    "word": "seasoning",
    "pron": "시-저닝",
    "pos": "n.",
    "meaning": "양념",
    "examples": [],
    "tip": "",
    "no": 100,
    "day": 12
   },
   {
    "word": "soybean paste",
    "pron": "서이비인 페이슷",
    "pos": "n.",
    "meaning": "된장",
    "examples": [],
    "tip": "",
    "no": 101,
    "day": 12
   },
   {
    "word": "red pepper paste",
    "pron": "렛 페뻐 페이슷",
    "pos": "n.",
    "meaning": "고추장",
    "examples": [],
    "tip": "",
    "no": 102,
    "day": 12
   },
   {
    "word": "olive oil",
    "pron": "알리(ㅂ) 어일",
    "pos": "n.",
    "meaning": "올리브유",
    "examples": [],
    "tip": "",
    "no": 103,
    "day": 12
   },
   {
    "word": "sesame oil",
    "pron": "세서미 어일",
    "pos": "n.",
    "meaning": "참기름",
    "examples": [],
    "tip": "",
    "no": 104,
    "day": 12
   },
   {
    "word": "mayonnaise",
    "pron": "메이어네이(ㅈ)",
    "pos": "n.",
    "meaning": "마요네즈",
    "examples": [
     {
      "en": "With no mayo.",
      "ko": "마요네즈는 빼 주세요."
     }
    ],
    "tip": "mayo는 mayonnaise의 비격식 표현입니다.",
    "no": 105,
    "day": 12,
    "tipLabel": "💡 tip"
   },
   {
    "word": "mustard",
    "pron": "머스터(ㄷ)",
    "pos": "n.",
    "meaning": "겨자",
    "examples": [],
    "tip": "",
    "no": 106,
    "day": 12
   },
   {
    "word": "ketchup",
    "pron": "케첩",
    "pos": "n.",
    "meaning": "케첩",
    "examples": [],
    "tip": "",
    "no": 107,
    "day": 12
   },
   {
    "word": "honey",
    "pron": "허니",
    "pos": "n.",
    "meaning": "꿀",
    "examples": [],
    "tip": "",
    "no": 108,
    "day": 12
   },
   {
    "word": "jam",
    "pron": "잼",
    "pos": "n.",
    "meaning": "잼",
    "examples": [],
    "tip": "",
    "no": 109,
    "day": 12
   },
   {
    "word": "butter",
    "pron": "버더",
    "pos": "n.",
    "meaning": "버터",
    "examples": [],
    "tip": "",
    "no": 110,
    "day": 12
   },
   {
    "word": "recipe",
    "pron": "레써피",
    "pos": "n.",
    "meaning": "요리법, 레시피",
    "examples": [
     {
      "en": "I just use my mom's old recipe.",
      "ko": "엄마가 쓰시던 요리법을 사용했을 뿐이에요."
     }
    ],
    "tip": "",
    "no": 111,
    "day": 12
   },
   {
    "word": "chop",
    "pron": "찹",
    "pos": "v.",
    "meaning": "잘게 썰다, 다지다",
    "examples": [],
    "tip": "",
    "no": 112,
    "day": 12
   },
   {
    "word": "steam",
    "pron": "스티임",
    "pos": "v.",
    "meaning": "찌다",
    "examples": [],
    "tip": "",
    "no": 113,
    "day": 12
   },
   {
    "word": "cooker",
    "pron": "쿠커",
    "pos": "n.",
    "meaning": "조리 기구",
    "examples": [],
    "tip": "",
    "no": 114,
    "day": 12
   },
   {
    "word": "knife",
    "pron": "나이(ㅍ)",
    "pos": "n.",
    "meaning": "칼",
    "examples": [],
    "tip": "",
    "no": 115,
    "day": 12
   },
   {
    "word": "cutting board",
    "pron": "커딩 버-(ㄷ)",
    "pos": "n.",
    "meaning": "도마",
    "examples": [],
    "tip": "",
    "no": 116,
    "day": 12
   },
   {
    "word": "ladle",
    "pron": "레이들",
    "pos": "n.",
    "meaning": "국자",
    "examples": [],
    "tip": "",
    "no": 117,
    "day": 12
   },
   {
    "word": "pot",
    "pron": "팟",
    "pos": "n.",
    "meaning": "(둥글고 속이 깊은) 냄비",
    "examples": [],
    "tip": "",
    "no": 118,
    "day": 12
   },
   {
    "word": "saucepan",
    "pron": "서-(ㅆ)팬",
    "pos": "n.",
    "meaning": "(긴 손잡이가 달린) 냄비",
    "examples": [],
    "tip": "",
    "no": 119,
    "day": 12
   },
   {
    "word": "tableware",
    "pron": "테이블웨어",
    "pos": "n.",
    "meaning": "식기",
    "examples": [],
    "tip": "",
    "no": 120,
    "day": 12
   },
   {
    "word": "tray",
    "pron": "츠레이",
    "pos": "n.",
    "meaning": "쟁반",
    "examples": [],
    "tip": "",
    "no": 121,
    "day": 12
   }
  ]
 },
 {
  "day": 13,
  "title": "Unit 13. 취미",
  "words": [
   {
    "word": "music",
    "pron": "뮤-직",
    "pos": "n.",
    "meaning": "음악",
    "examples": [
     {
      "en": "I like listening to music.",
      "ko": "음악 듣는 것을 좋아해요."
     }
    ],
    "tip": "",
    "no": 1,
    "day": 13
   },
   {
    "word": "listen to",
    "pron": "리슨 투",
    "pos": "",
    "meaning": "듣다",
    "examples": [],
    "tip": "",
    "no": 2,
    "day": 13
   },
   {
    "word": "sing",
    "pron": "싱",
    "pos": "v.",
    "meaning": "노래하다",
    "examples": [
     {
      "en": "Who's your favorite singer?",
      "ko": "좋아하는 가수는 누구예요?"
     }
    ],
    "tip": "",
    "no": 3,
    "day": 13
   },
   {
    "word": "song",
    "pron": "서엉",
    "pos": "n.",
    "meaning": "노래",
    "examples": [],
    "tip": "",
    "no": 4,
    "day": 13
   },
   {
    "word": "singer",
    "pron": "싱어",
    "pos": "n.",
    "meaning": "가수",
    "examples": [],
    "tip": "",
    "no": 5,
    "day": 13
   },
   {
    "word": "musical instrument",
    "pron": "뮤-지컬 인스츠러먼(ㅌ)",
    "pos": "n.",
    "meaning": "악기",
    "examples": [
     {
      "en": "Do you play any musical instruments?",
      "ko": "악기를 다룰 줄 아세요?"
     }
    ],
    "tip": "",
    "no": 6,
    "day": 13
   },
   {
    "word": "piano",
    "pron": "피애노우",
    "pos": "n.",
    "meaning": "피아노",
    "examples": [
     {
      "en": "I play the piano a little.",
      "ko": "피아노를 조금 칩니다."
     }
    ],
    "tip": "",
    "no": 7,
    "day": 13
   },
   {
    "word": "violin",
    "pron": "바이얼린",
    "pos": "n.",
    "meaning": "바이올린",
    "examples": [],
    "tip": "",
    "no": 8,
    "day": 13
   },
   {
    "word": "cello",
    "pron": "첼로우",
    "pos": "n.",
    "meaning": "첼로",
    "examples": [],
    "tip": "",
    "no": 9,
    "day": 13
   },
   {
    "word": "guitar",
    "pron": "기타-",
    "pos": "n.",
    "meaning": "기타",
    "examples": [
     {
      "en": "I'm learning to play the guitar for fun.",
      "ko": "취미로 기타를 배우고 있어요."
     }
    ],
    "tip": "",
    "no": 10,
    "day": 13
   },
   {
    "word": "drum",
    "pron": "드럼",
    "pos": "n.",
    "meaning": "드럼, 북",
    "examples": [],
    "tip": "",
    "no": 11,
    "day": 13
   },
   {
    "word": "flute",
    "pron": "플루웃",
    "pos": "n.",
    "meaning": "플루트",
    "examples": [],
    "tip": "",
    "no": 12,
    "day": 13
   },
   {
    "word": "perform",
    "pron": "퍼퍼엄",
    "pos": "v.",
    "meaning": "연주하다, 공연하다",
    "examples": [],
    "tip": "",
    "no": 13,
    "day": 13
   },
   {
    "word": "concert",
    "pron": "칸써-(ㅌ)",
    "pos": "n.",
    "meaning": "음악회, 콘서트",
    "examples": [],
    "tip": "",
    "no": 14,
    "day": 13
   },
   {
    "word": "opera",
    "pron": "아퍼러",
    "pos": "n.",
    "meaning": "오페라",
    "examples": [],
    "tip": "",
    "no": 15,
    "day": 13
   },
   {
    "word": "musical",
    "pron": "뮤-지클",
    "pos": "n.",
    "meaning": "뮤지컬",
    "examples": [],
    "tip": "",
    "no": 16,
    "day": 13
   },
   {
    "word": "movie",
    "pron": "무-비",
    "pos": "n.",
    "meaning": "영화",
    "examples": [
     {
      "en": "Let's go to see a movie tonight.",
      "ko": "오늘 밤에 영화 보러 가자."
     }
    ],
    "tip": "'영화'를 말할 때 movie나 film은 주로 미국에서, cinema는 주로 영국에서 사용합니다.",
    "no": 17,
    "day": 13,
    "tipLabel": "💡 tip"
   },
   {
    "word": "film",
    "pron": "필옴",
    "pos": "",
    "meaning": "= movie",
    "examples": [],
    "tip": "",
    "no": 18,
    "day": 13
   },
   {
    "word": "theater",
    "pron": "씨-어터",
    "pos": "n.",
    "meaning": "극장, 영화관",
    "examples": [],
    "tip": "",
    "no": 19,
    "day": 13
   },
   {
    "word": "cinema",
    "pron": "씨너머",
    "pos": "",
    "meaning": "= theater",
    "examples": [],
    "tip": "",
    "no": 20,
    "day": 13
   },
   {
    "word": "action movie",
    "pron": "액션 무-비",
    "pos": "n.",
    "meaning": "액션 영화",
    "examples": [],
    "tip": "영화 장르에 대해 말할 때는 movie 대신 film을 사용하기도 합니다.",
    "no": 21,
    "day": 13,
    "tipLabel": "💡 tip"
   },
   {
    "word": "horror movie",
    "pron": "허-러 무-비",
    "pos": "n.",
    "meaning": "공포 영화",
    "examples": [],
    "tip": "",
    "no": 22,
    "day": 13
   },
   {
    "word": "animated movie",
    "pron": "애너메이팃 무-비",
    "pos": "n.",
    "meaning": "만화 영화, 애니메이션",
    "examples": [],
    "tip": "",
    "no": 23,
    "day": 13
   },
   {
    "word": "science fiction movie",
    "pron": "사이언(ㅆ) 픽션 무-비",
    "pos": "n.",
    "meaning": "공상 과학 영화",
    "examples": [],
    "tip": "",
    "no": 24,
    "day": 13
   },
   {
    "word": "comedy movie",
    "pron": "카머디 무-비",
    "pos": "n.",
    "meaning": "코미디 영화",
    "examples": [],
    "tip": "",
    "no": 25,
    "day": 13
   },
   {
    "word": "documentary movie",
    "pron": "다큐멘터리 무-비",
    "pos": "n.",
    "meaning": "기록 영화, 다큐멘터리",
    "examples": [],
    "tip": "",
    "no": 26,
    "day": 13
   },
   {
    "word": "movie director",
    "pron": "무-비 디렉터",
    "pos": "n.",
    "meaning": "영화 감독",
    "examples": [],
    "tip": "",
    "no": 27,
    "day": 13
   },
   {
    "word": "actor",
    "pron": "액터",
    "pos": "n.",
    "meaning": "배우",
    "examples": [],
    "tip": "",
    "no": 28,
    "day": 13
   },
   {
    "word": "actress",
    "pron": "액츠리(ㅅ)",
    "pos": "n.",
    "meaning": "여배우",
    "examples": [],
    "tip": "",
    "no": 29,
    "day": 13
   },
   {
    "word": "book",
    "pron": "북",
    "pos": "n.",
    "meaning": "책",
    "examples": [
     {
      "en": "How many books do you read a month?",
      "ko": "한 달에 몇 권이나 읽으세요?"
     }
    ],
    "tip": "",
    "no": 30,
    "day": 13
   },
   {
    "word": "bookstore",
    "pron": "북스토-",
    "pos": "n.",
    "meaning": "서점",
    "examples": [],
    "tip": "",
    "no": 31,
    "day": 13
   },
   {
    "word": "read",
    "pron": "리잇",
    "pos": "v.",
    "meaning": "읽다",
    "examples": [],
    "tip": "",
    "no": 32,
    "day": 13
   },
   {
    "word": "reading",
    "pron": "리-딩",
    "pos": "n.",
    "meaning": "독서",
    "examples": [],
    "tip": "",
    "no": 33,
    "day": 13
   },
   {
    "word": "literature",
    "pron": "리터러춰",
    "pos": "n.",
    "meaning": "문학",
    "examples": [],
    "tip": "",
    "no": 34,
    "day": 13
   },
   {
    "word": "magazine",
    "pron": "매거지인",
    "pos": "n.",
    "meaning": "잡지",
    "examples": [],
    "tip": "",
    "no": 35,
    "day": 13
   },
   {
    "word": "comic book",
    "pron": "카믹 북",
    "pos": "n.",
    "meaning": "만화책",
    "examples": [],
    "tip": "",
    "no": 36,
    "day": 13
   },
   {
    "word": "novel",
    "pron": "나벌",
    "pos": "n.",
    "meaning": "소설",
    "examples": [],
    "tip": "",
    "no": 37,
    "day": 13
   },
   {
    "word": "biography",
    "pron": "바이아-그러피",
    "pos": "n.",
    "meaning": "위인전",
    "examples": [],
    "tip": "",
    "no": 38,
    "day": 13
   },
   {
    "word": "fairy tale book",
    "pron": "페어리 테일 북",
    "pos": "n.",
    "meaning": "동화책",
    "examples": [],
    "tip": "",
    "no": 39,
    "day": 13
   },
   {
    "word": "poem",
    "pron": "포우엄",
    "pos": "n.",
    "meaning": "시",
    "examples": [],
    "tip": "",
    "no": 40,
    "day": 13
   },
   {
    "word": "photograph",
    "pron": "포우터그래(ㅍ)",
    "pos": "n.",
    "meaning": "사진",
    "examples": [
     {
      "en": "No Photography Allowed.",
      "ko": "사진 촬영 금지."
     },
     {
      "en": "Could you take a picture of me?",
      "ko": "사진 좀 찍어 주실래요?"
     }
    ],
    "tip": "",
    "no": 41,
    "day": 13
   },
   {
    "word": "photo",
    "pron": "포우토우",
    "pos": "",
    "meaning": "= photograph",
    "examples": [],
    "tip": "",
    "no": 42,
    "day": 13
   },
   {
    "word": "picture",
    "pron": "픽춰",
    "pos": "",
    "meaning": "사진; 그림",
    "examples": [],
    "tip": "",
    "no": 43,
    "day": 13
   },
   {
    "word": "paint",
    "pron": "페인(ㅌ)",
    "pos": "v.",
    "meaning": "(그림을) 그리다, 채색하다",
    "examples": [],
    "tip": "보통 물감이나 페인트로 그리는 것은 paint, 연필이나 펜으로 그리는 것은 draw라고 합니다.",
    "no": 44,
    "day": 13,
    "tipLabel": "💡 tip"
   },
   {
    "word": "draw",
    "pron": "드러-",
    "pos": "v.",
    "meaning": "(선으로) 그리다",
    "examples": [],
    "tip": "",
    "no": 45,
    "day": 13
   },
   {
    "word": "painting",
    "pron": "페인팅",
    "pos": "n.",
    "meaning": "그림, 유화, 수채화",
    "examples": [],
    "tip": "",
    "no": 46,
    "day": 13
   },
   {
    "word": "illustration",
    "pron": "일러스츠레이션",
    "pos": "n.",
    "meaning": "삽화",
    "examples": [],
    "tip": "",
    "no": 47,
    "day": 13
   },
   {
    "word": "painter",
    "pron": "페인터",
    "pos": "n.",
    "meaning": "화가",
    "examples": [],
    "tip": "",
    "no": 48,
    "day": 13
   },
   {
    "word": "color",
    "pron": "컬러",
    "pos": "n.",
    "meaning": "색, 물감",
    "examples": [],
    "tip": "영국에서는 colour라고 씁니다.",
    "no": 49,
    "day": 13,
    "tipLabel": "💡 tip"
   },
   {
    "word": "brush",
    "pron": "브러쉬",
    "pos": "n.",
    "meaning": "붓",
    "examples": [],
    "tip": "",
    "no": 50,
    "day": 13
   },
   {
    "word": "play a game",
    "pron": "플레이 어 게임",
    "pos": "",
    "meaning": "게임을 하다",
    "examples": [],
    "tip": "",
    "no": 51,
    "day": 13
   },
   {
    "word": "chess",
    "pron": "체(ㅅ)",
    "pos": "n.",
    "meaning": "체스, 서양장기",
    "examples": [],
    "tip": "",
    "no": 52,
    "day": 13
   },
   {
    "word": "climbing",
    "pron": "클라이밍",
    "pos": "n.",
    "meaning": "등산",
    "examples": [],
    "tip": "",
    "no": 53,
    "day": 13
   },
   {
    "word": "climb",
    "pron": "클라임",
    "pos": "v.",
    "meaning": "등산하다",
    "examples": [],
    "tip": "",
    "no": 54,
    "day": 13
   },
   {
    "word": "walking",
    "pron": "워킹",
    "pos": "n.",
    "meaning": "산책, 산보",
    "examples": [
     {
      "en": "I take a walk everyday for exercise.",
      "ko": "운동으로 매일 산책하고 있어요."
     }
    ],
    "tip": "",
    "no": 55,
    "day": 13
   },
   {
    "word": "take a walk",
    "pron": "테익 어 워",
    "pos": "",
    "meaning": "산책하다",
    "examples": [],
    "tip": "",
    "no": 56,
    "day": 13
   },
   {
    "word": "camping",
    "pron": "캠핑",
    "pos": "n.",
    "meaning": "야영, 캠핑",
    "examples": [],
    "tip": "",
    "no": 57,
    "day": 13
   },
   {
    "word": "fish",
    "pron": "피쉬",
    "pos": "v.",
    "meaning": "낚시하다",
    "examples": [],
    "tip": "",
    "no": 58,
    "day": 13
   },
   {
    "word": "fishing",
    "pron": "피싱",
    "pos": "n.",
    "meaning": "낚시",
    "examples": [],
    "tip": "",
    "no": 59,
    "day": 13
   },
   {
    "word": "collect",
    "pron": "컬렉(ㅌ)",
    "pos": "v.",
    "meaning": "수집하다",
    "examples": [],
    "tip": "",
    "no": 60,
    "day": 13
   },
   {
    "word": "leisure",
    "pron": "리-저",
    "pos": "n.",
    "meaning": "여가, 여가활동",
    "examples": [],
    "tip": "",
    "no": 61,
    "day": 13
   },
   {
    "word": "hobby",
    "pron": "하비",
    "pos": "n.",
    "meaning": "취미",
    "examples": [
     {
      "en": "What are your hobbies?",
      "ko": "취미가 뭐예요?"
     }
    ],
    "tip": "",
    "no": 62,
    "day": 13
   },
   {
    "word": "sport",
    "pron": "스퍼-(ㅌ)",
    "pos": "n.",
    "meaning": "스포츠, 운동",
    "examples": [
     {
      "en": "What sports do you like?",
      "ko": "무슨 스포츠를 좋아하세요?"
     }
    ],
    "tip": "",
    "no": 63,
    "day": 13
   },
   {
    "word": "work out",
    "pron": "워-카웃",
    "pos": "",
    "meaning": "운동하다",
    "examples": [],
    "tip": "",
    "no": 64,
    "day": 13
   },
   {
    "word": "play",
    "pron": "플레이",
    "pos": "v.",
    "meaning": "놀다, 시합을 하다",
    "examples": [],
    "tip": "",
    "no": 65,
    "day": 13
   },
   {
    "word": "game",
    "pron": "게임",
    "pos": "n.",
    "meaning": "게임, 경기, 시합",
    "examples": [],
    "tip": "미식축구나 야구는 game을, 축구나 럭비, 배드민턴 등은 match를 사용합니다. 테니스나 스쿼시 등의 세트 스포츠에서의 game은 한 세트분의 경기를 의미합니다.",
    "no": 66,
    "day": 13,
    "tipLabel": "💡 tip"
   },
   {
    "word": "match",
    "pron": "맷취",
    "pos": "n.",
    "meaning": "경기, 시합",
    "examples": [],
    "tip": "",
    "no": 67,
    "day": 13
   },
   {
    "word": "ball",
    "pron": "버얼",
    "pos": "n.",
    "meaning": "공",
    "examples": [],
    "tip": "",
    "no": 68,
    "day": 13
   },
   {
    "word": "racket",
    "pron": "래킷",
    "pos": "n.",
    "meaning": "라켓",
    "examples": [],
    "tip": "",
    "no": 69,
    "day": 13
   },
   {
    "word": "tennis",
    "pron": "테니(ㅅ)",
    "pos": "n.",
    "meaning": "테니스",
    "examples": [],
    "tip": "",
    "no": 70,
    "day": 13
   },
   {
    "word": "badminton",
    "pron": "뱃민튼",
    "pos": "n.",
    "meaning": "배드민턴",
    "examples": [],
    "tip": "",
    "no": 71,
    "day": 13
   },
   {
    "word": "soccer",
    "pron": "사커",
    "pos": "n.",
    "meaning": "축구",
    "examples": [],
    "tip": "",
    "no": 72,
    "day": 13
   },
   {
    "word": "football",
    "pron": "풋버얼",
    "pos": "n.",
    "meaning": "미식축구",
    "examples": [],
    "tip": "",
    "no": 73,
    "day": 13
   },
   {
    "word": "baseball",
    "pron": "베이스버얼",
    "pos": "n.",
    "meaning": "야구",
    "examples": [
     {
      "en": "I often watch baseball games on TV.",
      "ko": "TV 야구 중계를 자주 봐요."
     }
    ],
    "tip": "",
    "no": 74,
    "day": 13
   },
   {
    "word": "basketball",
    "pron": "배스킷버얼",
    "pos": "n.",
    "meaning": "농구",
    "examples": [],
    "tip": "",
    "no": 75,
    "day": 13
   },
   {
    "word": "volleyball",
    "pron": "발리버얼",
    "pos": "n.",
    "meaning": "배구",
    "examples": [],
    "tip": "",
    "no": 76,
    "day": 13
   },
   {
    "word": "golf",
    "pron": "갈(ㅍ)",
    "pos": "n.",
    "meaning": "골프",
    "examples": [
     {
      "en": "I'm passionate about golf.",
      "ko": "나는 골프에 빠져 있어요."
     }
    ],
    "tip": "",
    "no": 77,
    "day": 13
   },
   {
    "word": "cycling",
    "pron": "싸이클링",
    "pos": "n.",
    "meaning": "사이클링, 자전거 경기",
    "examples": [],
    "tip": "",
    "no": 78,
    "day": 13
   },
   {
    "word": "boxing",
    "pron": "박싱",
    "pos": "n.",
    "meaning": "권투, 복싱",
    "examples": [],
    "tip": "",
    "no": 79,
    "day": 13
   },
   {
    "word": "run",
    "pron": "런",
    "pos": "v.",
    "meaning": "달리다",
    "examples": [],
    "tip": "",
    "no": 80,
    "day": 13
   },
   {
    "word": "jogging",
    "pron": "자깅",
    "pos": "n.",
    "meaning": "조깅",
    "examples": [],
    "tip": "",
    "no": 81,
    "day": 13
   },
   {
    "word": "jog",
    "pron": "작",
    "pos": "v.",
    "meaning": "조깅하다",
    "examples": [],
    "tip": "",
    "no": 82,
    "day": 13
   },
   {
    "word": "yoga",
    "pron": "요우거",
    "pos": "n.",
    "meaning": "요가",
    "examples": [],
    "tip": "",
    "no": 83,
    "day": 13
   },
   {
    "word": "gym",
    "pron": "짐",
    "pos": "n.",
    "meaning": "체육관, 헬스클럽",
    "examples": [
     {
      "en": "How often do you go to the gym?",
      "ko": "헬스클럽에 얼마나 자주 가세요?"
     }
    ],
    "tip": "",
    "no": 84,
    "day": 13
   },
   {
    "word": "swimming",
    "pron": "스위밍",
    "pos": "n.",
    "meaning": "수영",
    "examples": [],
    "tip": "",
    "no": 85,
    "day": 13
   },
   {
    "word": "swim",
    "pron": "스윔",
    "pos": "v.",
    "meaning": "수영하다",
    "examples": [],
    "tip": "",
    "no": 86,
    "day": 13
   },
   {
    "word": "swimming pool",
    "pron": "스위밍 푸울",
    "pos": "n.",
    "meaning": "수영장",
    "examples": [
     {
      "en": "I can't swim at all.",
      "ko": "저는 수영을 전혀 못 해요."
     }
    ],
    "tip": "",
    "no": 87,
    "day": 13
   },
   {
    "word": "skiing",
    "pron": "스키잉",
    "pos": "n.",
    "meaning": "스키",
    "examples": [
     {
      "en": "In the winter, I go skiing almost every week.",
      "ko": "겨울이 되면, 거의 매주 스키를 타러 가요."
     }
    ],
    "tip": "skiing은 취미나 운동 종목 이름으로써의 '스키'를, ski는 '스키 도구'를 가리킵니다.",
    "no": 88,
    "day": 13,
    "tipLabel": "💡 tip"
   },
   {
    "word": "ski",
    "pron": "스키-",
    "pos": "n.",
    "meaning": "스키",
    "examples": [],
    "tip": "",
    "no": 89,
    "day": 13
   },
   {
    "word": "skating",
    "pron": "스케이팅",
    "pos": "n.",
    "meaning": "스케이트",
    "examples": [],
    "tip": "skating은 취미나 운동 종목 이름으로써의 '스케이트'를, skate는 '스케이트 도구'를 가리킵니다.",
    "no": 90,
    "day": 13,
    "tipLabel": "💡 tip"
   },
   {
    "word": "skate",
    "pron": "스케잇",
    "pos": "n.",
    "meaning": "스케이트",
    "examples": [],
    "tip": "",
    "no": 91,
    "day": 13
   },
   {
    "word": "ice rink",
    "pron": "아이(ㅆ) 링(ㅋ)",
    "pos": "n.",
    "meaning": "스케이트장",
    "examples": [],
    "tip": "",
    "no": 92,
    "day": 13
   },
   {
    "word": "roller skate",
    "pron": "로울러 스케잇",
    "pos": "n.",
    "meaning": "롤러 스케이트",
    "examples": [],
    "tip": "",
    "no": 93,
    "day": 13
   },
   {
    "word": "genre",
    "pron": "잔러",
    "pos": "n.",
    "meaning": "장르",
    "examples": [],
    "tip": "",
    "no": 94,
    "day": 13
   },
   {
    "word": "lyrics",
    "pron": "리릭(ㅅ)",
    "pos": "n.",
    "meaning": "가사",
    "examples": [],
    "tip": "'작사하다'는 write the lyrics 또는 write the words라고 하며 '작사가'는 lyricst라고 합니다.",
    "no": 95,
    "day": 13,
    "tipLabel": "💡 tip"
   },
   {
    "word": "compose",
    "pron": "컴포우(ㅈ)",
    "pos": "v.",
    "meaning": "작곡하다",
    "examples": [],
    "tip": "",
    "no": 96,
    "day": 13
   },
   {
    "word": "composer",
    "pron": "컴포우저",
    "pos": "n.",
    "meaning": "작곡가",
    "examples": [],
    "tip": "",
    "no": 97,
    "day": 13
   },
   {
    "word": "melody",
    "pron": "멜러디",
    "pos": "n.",
    "meaning": "멜로디, 선율",
    "examples": [],
    "tip": "",
    "no": 98,
    "day": 13
   },
   {
    "word": "record",
    "pron": "레커(ㄷ)",
    "pos": "n.",
    "meaning": "음반, 디스크",
    "examples": [],
    "tip": "record는 녹음된 '음반'을 말하는 단어입니다. [리커-(ㄷ)]라고 발음하면 '녹음하다, 기록하다'라는 동사가 됩니다.",
    "no": 99,
    "day": 13,
    "tipLabel": "💡 tip"
   },
   {
    "word": "viola",
    "pron": "비오울러",
    "pos": "n.",
    "meaning": "비올라",
    "examples": [],
    "tip": "",
    "no": 100,
    "day": 13
   },
   {
    "word": "double bass",
    "pron": "더블 베이(ㅅ)",
    "pos": "n.",
    "meaning": "더블베이스",
    "examples": [],
    "tip": "",
    "no": 101,
    "day": 13
   },
   {
    "word": "harp",
    "pron": "하-(ㅍ)",
    "pos": "n.",
    "meaning": "하프",
    "examples": [],
    "tip": "",
    "no": 102,
    "day": 13
   },
   {
    "word": "oboe",
    "pron": "오우보우",
    "pos": "n.",
    "meaning": "오보에",
    "examples": [],
    "tip": "",
    "no": 103,
    "day": 13
   },
   {
    "word": "trumpet",
    "pron": "트럼핏",
    "pos": "n.",
    "meaning": "트럼펫",
    "examples": [],
    "tip": "",
    "no": 104,
    "day": 13
   },
   {
    "word": "saxophone",
    "pron": "색서포운",
    "pos": "n.",
    "meaning": "색소폰",
    "examples": [],
    "tip": "",
    "no": 105,
    "day": 13
   },
   {
    "word": "performance",
    "pron": "퍼퍼-먼(ㅆ)",
    "pos": "n.",
    "meaning": "연주, 공연",
    "examples": [],
    "tip": "",
    "no": 106,
    "day": 13
   },
   {
    "word": "orchestra",
    "pron": "어-커스트러",
    "pos": "n.",
    "meaning": "오케스트라, 교향악단",
    "examples": [],
    "tip": "",
    "no": 107,
    "day": 13
   },
   {
    "word": "conductor",
    "pron": "컨덕터",
    "pos": "n.",
    "meaning": "지휘자",
    "examples": [],
    "tip": "",
    "no": 108,
    "day": 13
   },
   {
    "word": "see a movie",
    "pron": "시- 어 무-비",
    "pos": "",
    "meaning": "영화를 보다",
    "examples": [],
    "tip": "",
    "no": 109,
    "day": 13
   },
   {
    "word": "go to the movies",
    "pron": "고우 투 더 무-비(ㅅ)",
    "pos": "",
    "meaning": "극장에 가다",
    "examples": [],
    "tip": "",
    "no": 110,
    "day": 13
   },
   {
    "word": "release",
    "pron": "릴리-(ㅅ)",
    "pos": "v.",
    "meaning": "개봉, 개봉하다",
    "examples": [],
    "tip": "",
    "no": 111,
    "day": 13
   },
   {
    "word": "premiere",
    "pron": "프리미어",
    "pos": "n.",
    "meaning": "초연",
    "examples": [],
    "tip": "",
    "no": 112,
    "day": 13
   },
   {
    "word": "romantic movie",
    "pron": "로우맨틱 무-비",
    "pos": "n.",
    "meaning": "로맨틱 영화",
    "examples": [],
    "tip": "",
    "no": 113,
    "day": 13
   },
   {
    "word": "main character",
    "pron": "메인 캐릭터",
    "pos": "n.",
    "meaning": "주인공",
    "examples": [],
    "tip": "",
    "no": 114,
    "day": 13
   },
   {
    "word": "supporting role",
    "pron": "서퍼-팅 로울",
    "pos": "n.",
    "meaning": "조연 역, 단역",
    "examples": [],
    "tip": "",
    "no": 115,
    "day": 13
   },
   {
    "word": "extra",
    "pron": "엑스츠러",
    "pos": "n.",
    "meaning": "엑스트라, 단역 배우",
    "examples": [],
    "tip": "",
    "no": 116,
    "day": 13
   },
   {
    "word": "audience",
    "pron": "어-디언(ㅆ)",
    "pos": "n.",
    "meaning": "관객",
    "examples": [],
    "tip": "",
    "no": 117,
    "day": 13
   },
   {
    "word": "synopsis",
    "pron": "시납시(ㅅ)",
    "pos": "n.",
    "meaning": "줄거리",
    "examples": [],
    "tip": "",
    "no": 118,
    "day": 13
   },
   {
    "word": "e-book",
    "pron": "이-북",
    "pos": "n.",
    "meaning": "전자책(electric book의 약어)",
    "examples": [],
    "tip": "digital book이라고도 하며, 종이에 인쇄하지 않고, 전자 장치를 이용하여 보는 책을 말합니다.",
    "no": 119,
    "day": 13,
    "tipLabel": "💡 tip"
   },
   {
    "word": "library",
    "pron": "라입레리",
    "pos": "n.",
    "meaning": "도서관",
    "examples": [],
    "tip": "",
    "no": 120,
    "day": 13
   },
   {
    "word": "book lending",
    "pron": "북 렌딩",
    "pos": "",
    "meaning": "도서 대출",
    "examples": [],
    "tip": "",
    "no": 121,
    "day": 13
   },
   {
    "word": "write",
    "pron": "라잇",
    "pos": "v.",
    "meaning": "쓰다, (작품 등을) 저술하다",
    "examples": [],
    "tip": "",
    "no": 122,
    "day": 13
   },
   {
    "word": "essay",
    "pron": "에세이",
    "pos": "n.",
    "meaning": "수필, 에세이",
    "examples": [],
    "tip": "",
    "no": 123,
    "day": 13
   },
   {
    "word": "autobiography",
    "pron": "어-터-바이아-그러피",
    "pos": "n.",
    "meaning": "자서전",
    "examples": [],
    "tip": "",
    "no": 124,
    "day": 13
   },
   {
    "word": "writer",
    "pron": "라이터",
    "pos": "n.",
    "meaning": "글 쓰는 사람, 작가",
    "examples": [],
    "tip": "",
    "no": 125,
    "day": 13
   },
   {
    "word": "author",
    "pron": "어-써",
    "pos": "n.",
    "meaning": "작가, 저자",
    "examples": [],
    "tip": "",
    "no": 126,
    "day": 13
   },
   {
    "word": "novelist",
    "pron": "나벌리숫",
    "pos": "n.",
    "meaning": "소설가",
    "examples": [],
    "tip": "",
    "no": 127,
    "day": 13
   },
   {
    "word": "poet",
    "pron": "포우잇",
    "pos": "n.",
    "meaning": "시인",
    "examples": [],
    "tip": "",
    "no": 128,
    "day": 13
   },
   {
    "word": "essayist",
    "pron": "에세이숫",
    "pos": "n.",
    "meaning": "수필가",
    "examples": [],
    "tip": "",
    "no": 129,
    "day": 13
   },
   {
    "word": "photography",
    "pron": "퍼타그라피",
    "pos": "n.",
    "meaning": "사진 촬영, 사진 촬영술",
    "examples": [],
    "tip": "",
    "no": 130,
    "day": 13
   },
   {
    "word": "take a picture",
    "pron": "테익 어 픽춰",
    "pos": "",
    "meaning": "사진을 찍다",
    "examples": [],
    "tip": "",
    "no": 131,
    "day": 13
   },
   {
    "word": "take a photo",
    "pron": "테익 어 포우토우",
    "pos": "",
    "meaning": "= take a picture",
    "examples": [],
    "tip": "",
    "no": 132,
    "day": 13
   },
   {
    "word": "camera",
    "pron": "캐머러",
    "pos": "n.",
    "meaning": "카메라",
    "examples": [],
    "tip": "",
    "no": 133,
    "day": 13
   },
   {
    "word": "drawing",
    "pron": "드러-잉",
    "pos": "n.",
    "meaning": "(무채색의) 소묘",
    "examples": [],
    "tip": "",
    "no": 134,
    "day": 13
   },
   {
    "word": "sketch",
    "pron": "스켓취",
    "pos": "n.",
    "meaning": "스케치, 밑그림",
    "examples": [],
    "tip": "",
    "no": 135,
    "day": 13
   },
   {
    "word": "canvas",
    "pron": "캔버(ㅅ)",
    "pos": "n.",
    "meaning": "캔버스",
    "examples": [],
    "tip": "",
    "no": 136,
    "day": 13
   },
   {
    "word": "board game",
    "pron": "버-(ㄷ) 게임",
    "pos": "n.",
    "meaning": "보드게임",
    "examples": [],
    "tip": "",
    "no": 137,
    "day": 13
   },
   {
    "word": "dice",
    "pron": "다이(ㅆ)",
    "pos": "n.",
    "meaning": "주사위",
    "examples": [],
    "tip": "",
    "no": 138,
    "day": 13
   },
   {
    "word": "rock-climbing",
    "pron": "락클라이밍",
    "pos": "n.",
    "meaning": "암벽 등반",
    "examples": [],
    "tip": "",
    "no": 139,
    "day": 13
   },
   {
    "word": "go for a walk",
    "pron": "고우 퍼 어 웍",
    "pos": "",
    "meaning": "= take a walk",
    "examples": [],
    "tip": "",
    "no": 140,
    "day": 13
   },
   {
    "word": "collection",
    "pron": "컬렉션",
    "pos": "n.",
    "meaning": "수집, 수집물, 컬렉션",
    "examples": [],
    "tip": "",
    "no": 141,
    "day": 13
   }
  ]
 },
 {
  "day": 14,
  "title": "Unit 14. 전화&인터넷",
  "words": [
   {
    "word": "telephone",
    "pron": "텔러포운",
    "pos": "n.",
    "meaning": "전화",
    "examples": [],
    "tip": "",
    "no": 1,
    "day": 14
   },
   {
    "word": "phone",
    "pron": "포운",
    "pos": "",
    "meaning": "= telephone",
    "examples": [],
    "tip": "",
    "no": 2,
    "day": 14
   },
   {
    "word": "cellular phone",
    "pron": "쎌룰러 포운",
    "pos": "n.",
    "meaning": "휴대전화",
    "examples": [
     {
      "en": "Turn your cell phone off before the movie starts.",
      "ko": "영화 시작 전에 휴대전화를 꺼 두세요."
     }
    ],
    "tip": "",
    "no": 3,
    "day": 14
   },
   {
    "word": "cell phone",
    "pron": "쎌 포운",
    "pos": "",
    "meaning": "= cellular phone",
    "examples": [],
    "tip": "",
    "no": 4,
    "day": 14
   },
   {
    "word": "smartphone",
    "pron": "스마-(ㅌ)포운",
    "pos": "n.",
    "meaning": "스마트폰",
    "examples": [],
    "tip": "",
    "no": 5,
    "day": 14
   },
   {
    "word": "call",
    "pron": "커얼",
    "pos": "v.",
    "meaning": "전화를 걸다",
    "examples": [
     {
      "en": "I'm calling about the project.",
      "ko": "프로젝트 때문에 전화 드렸습니다."
     }
    ],
    "tip": "전화 통화를 시작할 때 한국어의 '여보세요'에 해당하는 영어는 hello입니다. 하지만 Good morning이나 Good afternoon 등의 인사도 가능합니다.",
    "no": 6,
    "day": 14,
    "tipLabel": "💡 tip"
   },
   {
    "word": "make a call",
    "pron": "메익 어 커얼",
    "pos": "",
    "meaning": "= call",
    "examples": [],
    "tip": "",
    "no": 7,
    "day": 14
   },
   {
    "word": "answer the phone",
    "pron": "앤서 더 포운",
    "pos": "",
    "meaning": "전화를 받다",
    "examples": [],
    "tip": "",
    "no": 8,
    "day": 14
   },
   {
    "word": "take the phone",
    "pron": "테익 더 포운",
    "pos": "",
    "meaning": "= answer the phone",
    "examples": [],
    "tip": "",
    "no": 9,
    "day": 14
   },
   {
    "word": "hang up",
    "pron": "행 업",
    "pos": "",
    "meaning": "전화를 끊다",
    "examples": [],
    "tip": "",
    "no": 10,
    "day": 14
   },
   {
    "word": "phone number",
    "pron": "포운 넘버",
    "pos": "",
    "meaning": "전화번호",
    "examples": [
     {
      "en": "Can I get your phone number?",
      "ko": "전화번호를 알려 주시겠어요?"
     }
    ],
    "tip": "",
    "no": 11,
    "day": 14
   },
   {
    "word": "message",
    "pron": "메시쥐",
    "pos": "n.",
    "meaning": "메시지 / 메시지를 보내다",
    "examples": [
     {
      "en": "Can I take a message?",
      "ko": "메시지를 남기시겠어요?"
     }
    ],
    "tip": "",
    "no": 12,
    "day": 14
   },
   {
    "word": "sms",
    "pron": "에셈에(ㅅ)",
    "pos": "",
    "meaning": "문자 메시지",
    "examples": [
     {
      "en": "Text me your phone number.",
      "ko": "네 전화번호를 문자 메시지로 보내 줘."
     }
    ],
    "tip": "SMS는 Short Message Service의 약자입니다.",
    "no": 13,
    "day": 14,
    "tipLabel": "💡 tip"
   },
   {
    "word": "text message",
    "pron": "텍슷 메시쥐",
    "pos": "",
    "meaning": "= SMS",
    "examples": [],
    "tip": "",
    "no": 14,
    "day": 14
   },
   {
    "word": "ring-tone",
    "pron": "링토운",
    "pos": "n.",
    "meaning": "벨소리",
    "examples": [
     {
      "en": "I downloaded a ring-tone through the Internet.",
      "ko": "인터넷에서 벨소리를 다운로드 했지."
     }
    ],
    "tip": "우리가 흔히 '컬러링'이라 부르는 통화연결음은 ring-back tone이나 call waiting tone이라고 합니다.",
    "no": 15,
    "day": 14,
    "tipLabel": "💡 tip"
   },
   {
    "word": "video call",
    "pron": "비디오우 커얼",
    "pos": "n.",
    "meaning": "영상 통화",
    "examples": [],
    "tip": "",
    "no": 16,
    "day": 14
   },
   {
    "word": "vibrate",
    "pron": "바입레잇",
    "pos": "v.",
    "meaning": "진동모드로 하다",
    "examples": [],
    "tip": "",
    "no": 17,
    "day": 14
   },
   {
    "word": "application",
    "pron": "애플리케이션",
    "pos": "n.",
    "meaning": "애플리케이션, 앱",
    "examples": [],
    "tip": "",
    "no": 18,
    "day": 14
   },
   {
    "word": "app",
    "pron": "앱",
    "pos": "",
    "meaning": "= application",
    "examples": [],
    "tip": "",
    "no": 19,
    "day": 14
   },
   {
    "word": "roaming service",
    "pron": "로우밍 서-비(ㅆ)",
    "pos": "n.",
    "meaning": "로밍서비스",
    "examples": [
     {
      "en": "Don't forget to have roaming service before you go abroad.",
      "ko": "해외에 가기 전에 휴대전화 로밍서비스 하는 거 잊지 마."
     }
    ],
    "tip": "",
    "no": 20,
    "day": 14
   },
   {
    "word": "download",
    "pron": "다운로웃",
    "pos": "v.",
    "meaning": "다운로드하다",
    "examples": [],
    "tip": "",
    "no": 21,
    "day": 14
   },
   {
    "word": "upload",
    "pron": "업로웃",
    "pos": "v.",
    "meaning": "업로드하다",
    "examples": [],
    "tip": "",
    "no": 22,
    "day": 14
   },
   {
    "word": "update",
    "pron": "업데잇",
    "pos": "v.",
    "meaning": "업데이트하다, ~을 최신식으로 하다",
    "examples": [],
    "tip": "",
    "no": 23,
    "day": 14
   },
   {
    "word": "battery",
    "pron": "배더리",
    "pos": "n.",
    "meaning": "배터리, 건전지",
    "examples": [
     {
      "en": "My battery is low.",
      "ko": "배터리가 별로 없어."
     }
    ],
    "tip": "",
    "no": 24,
    "day": 14
   },
   {
    "word": "charge",
    "pron": "차-쥐",
    "pos": "v.",
    "meaning": "충전하다",
    "examples": [],
    "tip": "'방전되다'는 discharge, '방전된 배터리'는 dead battery라고 합니다.",
    "no": 25,
    "day": 14,
    "tipLabel": "💡 tip"
   },
   {
    "word": "turn on",
    "pron": "터언 언",
    "pos": "",
    "meaning": "켜다",
    "examples": [],
    "tip": "",
    "no": 26,
    "day": 14
   },
   {
    "word": "turn off",
    "pron": "터언 어-(ㅍ)",
    "pos": "",
    "meaning": "끄다",
    "examples": [],
    "tip": "",
    "no": 27,
    "day": 14
   },
   {
    "word": "wi-fi",
    "pron": "와이파이",
    "pos": "n.",
    "meaning": "와이파이, 무선 인터넷",
    "examples": [],
    "tip": "wireless fidelity의 준말입니다.",
    "no": 28,
    "day": 14,
    "tipLabel": "💡 tip"
   },
   {
    "word": "internet banking",
    "pron": "인터-넷 뱅킹",
    "pos": "n.",
    "meaning": "인터넷 뱅킹",
    "examples": [],
    "tip": "",
    "no": 29,
    "day": 14
   },
   {
    "word": "online game",
    "pron": "언라인 게임",
    "pos": "n.",
    "meaning": "온라인 게임",
    "examples": [],
    "tip": "",
    "no": 30,
    "day": 14
   },
   {
    "word": "online shopping",
    "pron": "언라인 샤핑",
    "pos": "n.",
    "meaning": "인터넷 쇼핑",
    "examples": [],
    "tip": "",
    "no": 31,
    "day": 14
   },
   {
    "word": "favorite",
    "pron": "페이버릿",
    "pos": "n.",
    "meaning": "즐겨찾기",
    "examples": [],
    "tip": "",
    "no": 32,
    "day": 14
   },
   {
    "word": "connect",
    "pron": "커넥(ㅌ)",
    "pos": "v.",
    "meaning": "접속하다",
    "examples": [],
    "tip": "",
    "no": 33,
    "day": 14
   },
   {
    "word": "log on",
    "pron": "러 건",
    "pos": "",
    "meaning": "로그인하다",
    "examples": [],
    "tip": "",
    "no": 34,
    "day": 14
   },
   {
    "word": "log in",
    "pron": "러 긴",
    "pos": "",
    "meaning": "= log on",
    "examples": [],
    "tip": "",
    "no": 35,
    "day": 14
   },
   {
    "word": "log off",
    "pron": "러 거-(ㅍ)",
    "pos": "",
    "meaning": "로그아웃하다",
    "examples": [],
    "tip": "",
    "no": 36,
    "day": 14
   },
   {
    "word": "log out",
    "pron": "러 가웃",
    "pos": "",
    "meaning": "= log off",
    "examples": [],
    "tip": "",
    "no": 37,
    "day": 14
   },
   {
    "word": "e-mail",
    "pron": "이-메일",
    "pos": "n.",
    "meaning": "이메일 / 전자 우편을 보내다",
    "examples": [
     {
      "en": "Could I get your e-mail address?",
      "ko": "이메일 주소가 뭐야?"
     }
    ],
    "tip": "",
    "no": 38,
    "day": 14
   },
   {
    "word": "computer",
    "pron": "컴퓨-터",
    "pos": "n.",
    "meaning": "컴퓨터",
    "examples": [
     {
      "en": "Do you know how to use a computer?",
      "ko": "컴퓨터를 사용할 줄 아세요?"
     }
    ],
    "tip": "컴퓨터를 잘 못하는 것을 뜻하는 '컴맹'이라는 말은 computer-illiterate라고 합니다.",
    "no": 39,
    "day": 14,
    "tipLabel": "💡 tip"
   },
   {
    "word": "laptop computer",
    "pron": "랩탑 컴퓨-터",
    "pos": "",
    "meaning": "노트북 컴퓨터",
    "examples": [],
    "tip": "",
    "no": 40,
    "day": 14
   },
   {
    "word": "tablet",
    "pron": "태블릿",
    "pos": "n.",
    "meaning": "태블릿 컴퓨터",
    "examples": [],
    "tip": "",
    "no": 41,
    "day": 14
   },
   {
    "word": "monitor",
    "pron": "마-니터",
    "pos": "n.",
    "meaning": "모니터",
    "examples": [],
    "tip": "",
    "no": 42,
    "day": 14
   },
   {
    "word": "hard disk",
    "pron": "하-(ㄷ) 디스크",
    "pos": "",
    "meaning": "하드 디스크",
    "examples": [],
    "tip": "",
    "no": 43,
    "day": 14
   },
   {
    "word": "hard drive",
    "pron": "하-(ㄷ) 드라이(ㅂ)",
    "pos": "",
    "meaning": "= hard disk",
    "examples": [],
    "tip": "",
    "no": 44,
    "day": 14
   },
   {
    "word": "ram",
    "pron": "램",
    "pos": "n.",
    "meaning": "램(랜덤 기억 장치)",
    "examples": [],
    "tip": "RAM은 random-access memory의 줄임말로 주기억 장치를 뜻하며 읽기, 쓰기, 지우기가 가능하고 전원이 끊기면 데이터가 사라지지만, ROM은 read-only memory의 줄임말로 읽기만 가능한 기억 장치이며, 전원이 끊겨도 데이터가 사라지지 않습니다. 대표적으로 CD-ROM을 생각하면 됩니다.",
    "no": 45,
    "day": 14,
    "tipLabel": "💡 tip"
   },
   {
    "word": "keyboard",
    "pron": "키-버-(ㄷ)",
    "pos": "n.",
    "meaning": "키보드",
    "examples": [
     {
      "en": "He's typing on a keyboard.",
      "ko": "그는 키보드로 입력하고 있어요."
     }
    ],
    "tip": "두 개의 손가락만 사용하는 속칭 '독수리 타법'은 two-fingered typing, 또는 hunt and peck typing이라고 합니다.",
    "no": 46,
    "day": 14,
    "tipLabel": "💡 tip"
   },
   {
    "word": "mouse",
    "pron": "마우(ㅅ)",
    "pos": "n.",
    "meaning": "마우스",
    "examples": [
     {
      "en": "I'd like a wireless mouse.",
      "ko": "무선 마우스가 있으면 좋겠는데."
     }
    ],
    "tip": "mouse는 '쥐'라는 뜻도 있습니다. 동물 mouse(쥐)의 복수형은 mice이지만, 컴퓨터 마우스의 복수형은 mouses나 mice 모두 가능합니다.",
    "no": 47,
    "day": 14,
    "tipLabel": "💡 tip"
   },
   {
    "word": "wireless mouse",
    "pron": "와이어리(ㅅ) 마우(ㅅ)",
    "pos": "",
    "meaning": "무선 마우스",
    "examples": [],
    "tip": "",
    "no": 48,
    "day": 14
   },
   {
    "word": "click",
    "pron": "클릭",
    "pos": "v.",
    "meaning": "클릭하다",
    "examples": [
     {
      "en": "Click the open button.",
      "ko": "열기 버튼을 클릭해 봐."
     }
    ],
    "tip": "",
    "no": 49,
    "day": 14
   },
   {
    "word": "printer",
    "pron": "프린터",
    "pos": "n.",
    "meaning": "프린터",
    "examples": [
     {
      "en": "The printer is out of ink.",
      "ko": "프린터에 토너가 떨어졌어요."
     }
    ],
    "tip": "프린터에 종이가 걸렸을 때는 'The printer is jammed.'라고 합니다.",
    "no": 50,
    "day": 14,
    "tipLabel": "💡 tip"
   },
   {
    "word": "webcam",
    "pron": "웹캠",
    "pos": "n.",
    "meaning": "웹캠",
    "examples": [],
    "tip": "",
    "no": 51,
    "day": 14
   },
   {
    "word": "folder",
    "pron": "포울더",
    "pos": "n.",
    "meaning": "폴더",
    "examples": [],
    "tip": "",
    "no": 52,
    "day": 14
   },
   {
    "word": "file",
    "pron": "파일",
    "pos": "n.",
    "meaning": "파일",
    "examples": [],
    "tip": "",
    "no": 53,
    "day": 14
   },
   {
    "word": "save",
    "pron": "세이(ㅂ)",
    "pos": "v.",
    "meaning": "저장하다",
    "examples": [
     {
      "en": "Would you save this file as a text file?",
      "ko": "이 문서를 txt 형식으로 저장해 줄래요?"
     }
    ],
    "tip": "파일을 덮어쓸 때는 overwrite라고 합니다.",
    "no": 54,
    "day": 14,
    "tipLabel": "💡 tip"
   },
   {
    "word": "delete",
    "pron": "딜릿",
    "pos": "v.",
    "meaning": "지우다",
    "examples": [
     {
      "en": "I accidentally deleted the file.",
      "ko": "실수로 파일을 지웠어요."
     }
    ],
    "tip": "",
    "no": 55,
    "day": 14
   },
   {
    "word": "security",
    "pron": "시큐어러티",
    "pos": "n.",
    "meaning": "보안",
    "examples": [],
    "tip": "",
    "no": 56,
    "day": 14
   },
   {
    "word": "antivirus",
    "pron": "앤티바이러(ㅅ)",
    "pos": "n.",
    "meaning": "항(抗)바이러스, 백신(컴퓨터 바이러스를 제거하는 프로그램)",
    "examples": [],
    "tip": "",
    "no": 57,
    "day": 14
   },
   {
    "word": "vaccine",
    "pron": "백씨인",
    "pos": "n.",
    "meaning": "백신(컴퓨터 바이러스를 제거하는 프로그램)",
    "examples": [],
    "tip": "",
    "no": 58,
    "day": 14
   },
   {
    "word": "block",
    "pron": "블라악",
    "pos": "v.",
    "meaning": "차단하다",
    "examples": [],
    "tip": "",
    "no": 59,
    "day": 14
   },
   {
    "word": "social network service",
    "pron": "소우셜 넷워-(ㅋ) 서-비(ㅆ)",
    "pos": "",
    "meaning": "소셜 네트워크, SNS",
    "examples": [],
    "tip": "",
    "no": 60,
    "day": 14
   },
   {
    "word": "blog",
    "pron": "블라-(ㄱ)",
    "pos": "n.",
    "meaning": "블로그",
    "examples": [
     {
      "en": "Introduce your blog.",
      "ko": "네 블로그를 소개해 줘."
     }
    ],
    "tip": "",
    "no": 61,
    "day": 14
   },
   {
    "word": "call back",
    "pron": "커얼 백",
    "pos": "",
    "meaning": "다시 전화하다",
    "examples": [
     {
      "en": "Please call me back in 10 minutes.",
      "ko": "10분 후에 다시 전화해 주세요."
     }
    ],
    "tip": "",
    "no": 62,
    "day": 14
   },
   {
    "word": "hold on",
    "pron": "호울 던",
    "pos": "",
    "meaning": "끊지 않고 기다리다",
    "examples": [
     {
      "en": "Hold on, please.",
      "ko": "잠시만 기다리세요."
     }
    ],
    "tip": "",
    "no": 63,
    "day": 14
   },
   {
    "word": "transfer",
    "pron": "츠랜스퍼",
    "pos": "v.",
    "meaning": "전화를 바꾸다",
    "examples": [],
    "tip": "",
    "no": 64,
    "day": 14
   },
   {
    "word": "busy",
    "pron": "비지",
    "pos": "a.",
    "meaning": "통화 중인",
    "examples": [],
    "tip": "",
    "no": 65,
    "day": 14
   },
   {
    "word": "wrong number",
    "pron": "러엉 넘버",
    "pos": "",
    "meaning": "잘못 걸린 전화",
    "examples": [
     {
      "en": "You have the wrong number.",
      "ko": "전화 잘못 거셨어요."
     }
    ],
    "tip": "",
    "no": 66,
    "day": 14
   },
   {
    "word": "public phone",
    "pron": "퍼블릭 포운",
    "pos": "",
    "meaning": "공중전화",
    "examples": [],
    "tip": "미국에서는 공중전화의 전화번호로 전화를 수신하는 것이 가능합니다.",
    "no": 67,
    "day": 14,
    "tipLabel": "💡 tip"
   },
   {
    "word": "pay phone",
    "pron": "페이 포운",
    "pos": "",
    "meaning": "= public phone",
    "examples": [],
    "tip": "",
    "no": 68,
    "day": 14
   },
   {
    "word": "collect call",
    "pron": "컬렉(ㅌ) 커얼",
    "pos": "",
    "meaning": "수신자 부담 전화",
    "examples": [],
    "tip": "",
    "no": 69,
    "day": 14
   },
   {
    "word": "emergency call",
    "pron": "이머-전씨 커얼",
    "pos": "",
    "meaning": "긴급 전화",
    "examples": [],
    "tip": "",
    "no": 70,
    "day": 14
   },
   {
    "word": "answering machine",
    "pron": "앤서링 머쉰",
    "pos": "",
    "meaning": "자동응답기",
    "examples": [],
    "tip": "예전에 쓰던 녹음을 남길 수 있는 구형 전화기를 말합니다. 요즘은 voice mail(음성 메시지를 녹음할 수 있는 전자 장치)을 이용합니다.",
    "no": 71,
    "day": 14,
    "tipLabel": "💡 tip"
   },
   {
    "word": "messenger",
    "pron": "메신저",
    "pos": "n.",
    "meaning": "메신저",
    "examples": [],
    "tip": "",
    "no": 72,
    "day": 14
   },
   {
    "word": "send a message",
    "pron": "센 더 메시쥐",
    "pos": "",
    "meaning": "문자 메시지를 보내다",
    "examples": [],
    "tip": "",
    "no": 73,
    "day": 14
   },
   {
    "word": "text",
    "pron": "텍슷",
    "pos": "v.",
    "meaning": "= send a message",
    "examples": [],
    "tip": "",
    "no": 74,
    "day": 14
   },
   {
    "word": "receive a message",
    "pron": "리씨- 버 메시쥐",
    "pos": "",
    "meaning": "문자 메시지를 받다",
    "examples": [],
    "tip": "",
    "no": 75,
    "day": 14
   },
   {
    "word": "vibration",
    "pron": "바입레이션",
    "pos": "n.",
    "meaning": "진동",
    "examples": [],
    "tip": "",
    "no": 76,
    "day": 14
   },
   {
    "word": "usim",
    "pron": "유-심",
    "pos": "n.",
    "meaning": "유심, 사용자 식별 카드 (universal subscriber identity module의 약자)",
    "examples": [],
    "tip": "",
    "no": 77,
    "day": 14
   },
   {
    "word": "charger",
    "pron": "차-줘",
    "pos": "n.",
    "meaning": "충전기",
    "examples": [],
    "tip": "",
    "no": 78,
    "day": 14
   },
   {
    "word": "mobile data",
    "pron": "모우벌 데이터",
    "pos": "",
    "meaning": "모바일 데이터",
    "examples": [],
    "tip": "",
    "no": 79,
    "day": 14
   },
   {
    "word": "internet",
    "pron": "인터-넷",
    "pos": "n.",
    "meaning": "인터넷",
    "examples": [],
    "tip": "Internet은 고유명사처럼 항상 대문자로 시작하는 단어입니다.",
    "no": 80,
    "day": 14,
    "tipLabel": "💡 tip"
   },
   {
    "word": "attached file",
    "pron": "어태칫 파일",
    "pos": "",
    "meaning": "첨부 파일",
    "examples": [],
    "tip": "",
    "no": 81,
    "day": 14
   },
   {
    "word": "attachment",
    "pron": "어태치먼(ㅌ)",
    "pos": "",
    "meaning": "= attached file",
    "examples": [],
    "tip": "",
    "no": 82,
    "day": 14
   },
   {
    "word": "sign in",
    "pron": "사인 인",
    "pos": "",
    "meaning": "회원가입하다",
    "examples": [],
    "tip": "회원가입에는 이 외에도 sign up, register, join, enroll, create account 등을 사용하며, 사이트에 따라 사용하는 용어의 차이가 있습니다.",
    "no": 83,
    "day": 14,
    "tipLabel": "💡 tip"
   },
   {
    "word": "drop out",
    "pron": "드랍 아웃",
    "pos": "",
    "meaning": "회원탈퇴하다",
    "examples": [],
    "tip": "",
    "no": 84,
    "day": 14
   },
   {
    "word": "deactivate",
    "pron": "디-액터베잇",
    "pos": "v.",
    "meaning": "= drop out",
    "examples": [],
    "tip": "",
    "no": 85,
    "day": 14
   },
   {
    "word": "account",
    "pron": "어카운(ㅌ)",
    "pos": "n.",
    "meaning": "계정",
    "examples": [],
    "tip": "",
    "no": 86,
    "day": 14
   },
   {
    "word": "website",
    "pron": "웹사잇",
    "pos": "n.",
    "meaning": "웹사이트",
    "examples": [],
    "tip": "",
    "no": 87,
    "day": 14
   },
   {
    "word": "create a website",
    "pron": "크리에잇 어 웹사잇",
    "pos": "",
    "meaning": "웹사이트를 만들다",
    "examples": [],
    "tip": "",
    "no": 88,
    "day": 14
   },
   {
    "word": "homepage",
    "pron": "호움페이쥐",
    "pos": "n.",
    "meaning": "홈페이지",
    "examples": [],
    "tip": "",
    "no": 89,
    "day": 14
   },
   {
    "word": "access",
    "pron": "액쎄(ㅅ)",
    "pos": "v.",
    "meaning": "(사이트에) 접속하다",
    "examples": [],
    "tip": "",
    "no": 90,
    "day": 14
   },
   {
    "word": "access a website",
    "pron": "엑쎄 서 웹사잇",
    "pos": "",
    "meaning": "웹사이트에 접속하다",
    "examples": [],
    "tip": "",
    "no": 91,
    "day": 14
   },
   {
    "word": "browser",
    "pron": "브라우저-",
    "pos": "n.",
    "meaning": "브라우저",
    "examples": [],
    "tip": "",
    "no": 92,
    "day": 14
   },
   {
    "word": "browse a website",
    "pron": "브라우 저 웹사잇",
    "pos": "",
    "meaning": "웹서핑하다",
    "examples": [],
    "tip": "",
    "no": 93,
    "day": 14
   },
   {
    "word": "browse the internet",
    "pron": "브라우(ㅈ) 디 인-터넷",
    "pos": "",
    "meaning": "웹서핑하다",
    "examples": [],
    "tip": "",
    "no": 94,
    "day": 14
   },
   {
    "word": "search",
    "pron": "서-취",
    "pos": "v.",
    "meaning": "검색하다",
    "examples": [],
    "tip": "",
    "no": 95,
    "day": 14
   },
   {
    "word": "search bar",
    "pron": "서-취 바-",
    "pos": "",
    "meaning": "검색창",
    "examples": [],
    "tip": "",
    "no": 96,
    "day": 14
   },
   {
    "word": "address bar",
    "pron": "앳레(ㅅ) 바-",
    "pos": "",
    "meaning": "주소창",
    "examples": [],
    "tip": "",
    "no": 97,
    "day": 14
   },
   {
    "word": "id",
    "pron": "아이디-",
    "pos": "n.",
    "meaning": "아이디",
    "examples": [],
    "tip": "identification(신분)의 약자로, '신분증'을 나타내는 말로도 쓰입니다.",
    "no": 98,
    "day": 14,
    "tipLabel": "💡 tip"
   },
   {
    "word": "password",
    "pron": "패스워-(ㄷ)",
    "pos": "n.",
    "meaning": "비밀번호",
    "examples": [],
    "tip": "",
    "no": 99,
    "day": 14
   },
   {
    "word": "desktop computer",
    "pron": "데스탑 컴퓨-터",
    "pos": "",
    "meaning": "데스크톱 컴퓨터",
    "examples": [],
    "tip": "",
    "no": 100,
    "day": 14
   },
   {
    "word": "display",
    "pron": "디스플레이",
    "pos": "n.",
    "meaning": "디스플레이 장치, 액정화면",
    "examples": [],
    "tip": "",
    "no": 101,
    "day": 14
   },
   {
    "word": "screen",
    "pron": "스크리인",
    "pos": "n.",
    "meaning": "화면",
    "examples": [],
    "tip": "",
    "no": 102,
    "day": 14
   },
   {
    "word": "shortcut",
    "pron": "셔-(ㅌ)컷",
    "pos": "n.",
    "meaning": "단축키",
    "examples": [],
    "tip": "",
    "no": 103,
    "day": 14
   },
   {
    "word": "mouse pad",
    "pron": "마우(ㅅ) 팻",
    "pos": "",
    "meaning": "마우스 패드",
    "examples": [],
    "tip": "",
    "no": 104,
    "day": 14
   },
   {
    "word": "tap",
    "pron": "탭",
    "pos": "v.",
    "meaning": "가볍게 치다",
    "examples": [
     {
      "en": "Her fingers quickly tapped out a message on the keyboard.",
      "ko": "그녀는 손가락으로 빠르게 키보드로 메시지를 쳤다."
     }
    ],
    "tip": "",
    "no": 105,
    "day": 14
   },
   {
    "word": "rom",
    "pron": "롬",
    "pos": "n.",
    "meaning": "롬(읽기 전용 기억 장치)",
    "examples": [],
    "tip": "",
    "no": 106,
    "day": 14
   },
   {
    "word": "program",
    "pron": "프로우그램",
    "pos": "n.",
    "meaning": "프로그램",
    "examples": [],
    "tip": "",
    "no": 107,
    "day": 14
   },
   {
    "word": "operating system",
    "pron": "아퍼레이팅 시스텀",
    "pos": "",
    "meaning": "컴퓨터 운영 체제",
    "examples": [],
    "tip": "windows나 linux와 같은 OS를 의미합니다.",
    "no": 108,
    "day": 14,
    "tipLabel": "💡 tip"
   },
   {
    "word": "os",
    "pron": "오우에(ㅅ)",
    "pos": "",
    "meaning": "(operating system의 약자)",
    "examples": [],
    "tip": "",
    "no": 109,
    "day": 14
   },
   {
    "word": "install",
    "pron": "인스터얼",
    "pos": "v.",
    "meaning": "설치하다",
    "examples": [
     {
      "en": "Set up needs to restart your computer to continue.",
      "ko": "설치를 계속하려면 컴퓨터를 다시 시작해야 합니다."
     }
    ],
    "tip": "",
    "no": 110,
    "day": 14
   },
   {
    "word": "set up",
    "pron": "셋 업",
    "pos": "",
    "meaning": "설치하다",
    "examples": [],
    "tip": "",
    "no": 111,
    "day": 14
   },
   {
    "word": "scanner",
    "pron": "스캐너",
    "pos": "n.",
    "meaning": "스캐너",
    "examples": [],
    "tip": "",
    "no": 112,
    "day": 14
   },
   {
    "word": "copy machine",
    "pron": "카-피 머쉬인",
    "pos": "n.",
    "meaning": "복사기",
    "examples": [
     {
      "en": "Can you show me how to use the copier?",
      "ko": "새 복사기 사용법 좀 가르쳐 줄래요?"
     }
    ],
    "tip": "",
    "no": 113,
    "day": 14
   },
   {
    "word": "copier",
    "pron": "카-피어",
    "pos": "",
    "meaning": "복사기",
    "examples": [],
    "tip": "",
    "no": 114,
    "day": 14
   },
   {
    "word": "wallpaper",
    "pron": "워얼페이퍼",
    "pos": "n.",
    "meaning": "바탕화면",
    "examples": [],
    "tip": "",
    "no": 115,
    "day": 14
   },
   {
    "word": "virus",
    "pron": "바이러(ㅅ)",
    "pos": "n.",
    "meaning": "바이러스",
    "examples": [],
    "tip": "",
    "no": 116,
    "day": 14
   },
   {
    "word": "spam mail",
    "pron": "스팸 메일",
    "pos": "",
    "meaning": "스팸메일",
    "examples": [],
    "tip": "",
    "no": 117,
    "day": 14
   },
   {
    "word": "guest book",
    "pron": "게슷 북",
    "pos": "",
    "meaning": "방명록",
    "examples": [],
    "tip": "",
    "no": 118,
    "day": 14
   }
  ]
 },
 {
  "day": 15,
  "title": "Unit 15. 학교",
  "words": [
   {
    "word": "school",
    "pron": "스쿠울",
    "pos": "n.",
    "meaning": "학교",
    "examples": [
     {
      "en": "I usually walk to school.",
      "ko": "보통 걸어서 등교한다."
     }
    ],
    "tip": "",
    "no": 1,
    "day": 15
   },
   {
    "word": "elementary school",
    "pron": "엘러멘터리 스쿠울",
    "pos": "n.",
    "meaning": "초등학교",
    "examples": [],
    "tip": "",
    "no": 2,
    "day": 15
   },
   {
    "word": "primary school",
    "pron": "프라이메리 스쿠울",
    "pos": "",
    "meaning": "초등학교",
    "examples": [],
    "tip": "",
    "no": 3,
    "day": 15
   },
   {
    "word": "middle school",
    "pron": "미들 스쿠울",
    "pos": "n.",
    "meaning": "중학교",
    "examples": [],
    "tip": "",
    "no": 4,
    "day": 15
   },
   {
    "word": "junior high school",
    "pron": "쥬-니어 하이 스쿠울",
    "pos": "",
    "meaning": "중학교",
    "examples": [],
    "tip": "",
    "no": 5,
    "day": 15
   },
   {
    "word": "high school",
    "pron": "하이 스쿠울",
    "pos": "n.",
    "meaning": "고등학교",
    "examples": [],
    "tip": "미국의 초·중·고교는 12학년으로 되어 있어 K-12시스템이라고 합니다. 주마다 차이가 있으나 일반적으로 Elementary school(5년)-Middle school(3년)-High school(4년), 혹은 Elementary school(6년)-Junior high school(3년)-Senior high school(3년)로 이뤄져 있습니다.",
    "no": 6,
    "day": 15,
    "tipLabel": "💡 tip"
   },
   {
    "word": "senior high school",
    "pron": "시-니어 하이 스쿠울",
    "pos": "",
    "meaning": "고등학교",
    "examples": [],
    "tip": "",
    "no": 7,
    "day": 15
   },
   {
    "word": "college",
    "pron": "칼리쥐",
    "pos": "n.",
    "meaning": "대학",
    "examples": [],
    "tip": "",
    "no": 8,
    "day": 15
   },
   {
    "word": "university",
    "pron": "유-너버-서티",
    "pos": "n.",
    "meaning": "종합대학",
    "examples": [],
    "tip": "",
    "no": 9,
    "day": 15
   },
   {
    "word": "major in",
    "pron": "메이저 인",
    "pos": "",
    "meaning": "(~을) 전공하다, 전문으로 하다",
    "examples": [
     {
      "en": "Nancy majored in business administration and got perfect grades.",
      "ko": "낸시는 경영학을 전공했는데 우수한 성적을 받았다."
     }
    ],
    "tip": "",
    "no": 10,
    "day": 15
   },
   {
    "word": "minor in",
    "pron": "마이너 인",
    "pos": "",
    "meaning": "(~을) 부전공하다",
    "examples": [],
    "tip": "",
    "no": 11,
    "day": 15
   },
   {
    "word": "academy",
    "pron": "어캐더미",
    "pos": "n.",
    "meaning": "학원, 학교, 학회",
    "examples": [],
    "tip": "일반적으로 '학원'을 school이라고도 합니다.",
    "no": 12,
    "day": 15,
    "tipLabel": "💡 tip"
   },
   {
    "word": "institute",
    "pron": "인스터튜웃",
    "pos": "n.",
    "meaning": "학원, 학회, 협회, 연구소",
    "examples": [],
    "tip": "",
    "no": 13,
    "day": 15
   },
   {
    "word": "enroll",
    "pron": "인로울",
    "pos": "v.",
    "meaning": "입학시키다, 등록하다",
    "examples": [
     {
      "en": "I enrolled my daughter in elementary school.",
      "ko": "딸을 초등학교에 입학시켰다."
     }
    ],
    "tip": "",
    "no": 14,
    "day": 15
   },
   {
    "word": "admission",
    "pron": "앳미션",
    "pos": "n.",
    "meaning": "입학 허가",
    "examples": [],
    "tip": "",
    "no": 15,
    "day": 15
   },
   {
    "word": "entrance exam",
    "pron": "인츠랜(ㅅ) 익잼",
    "pos": "n.",
    "meaning": "입학 시험",
    "examples": [],
    "tip": "",
    "no": 16,
    "day": 15
   },
   {
    "word": "graduate",
    "pron": "그래쥬에잇",
    "pos": "v.",
    "meaning": "졸업하다",
    "examples": [
     {
      "en": "When did you graduate from university?",
      "ko": "언제 대학을 졸업했어요?"
     }
    ],
    "tip": "",
    "no": 17,
    "day": 15
   },
   {
    "word": "graduation",
    "pron": "그래쥬에이션",
    "pos": "n.",
    "meaning": "졸업",
    "examples": [],
    "tip": "",
    "no": 18,
    "day": 15
   },
   {
    "word": "attend",
    "pron": "어텐(ㄷ)",
    "pos": "v.",
    "meaning": "출석하다, 참가하다",
    "examples": [
     {
      "en": "Did he check the attendance?",
      "ko": "선생님이 출석 체크하셨어?"
     }
    ],
    "tip": "",
    "no": 19,
    "day": 15
   },
   {
    "word": "attendence",
    "pron": "어텐던(ㅆ)",
    "pos": "n.",
    "meaning": "출석, 참가",
    "examples": [],
    "tip": "",
    "no": 20,
    "day": 15
   },
   {
    "word": "absent",
    "pron": "앱선(ㅌ)",
    "pos": "a.",
    "meaning": "결석한",
    "examples": [],
    "tip": "",
    "no": 21,
    "day": 15
   },
   {
    "word": "be absent from",
    "pron": "비- 앱선(ㅌ) 프럼",
    "pos": "",
    "meaning": "~에 결석하다",
    "examples": [],
    "tip": "",
    "no": 22,
    "day": 15
   },
   {
    "word": "absence",
    "pron": "앱선(ㅆ)",
    "pos": "n.",
    "meaning": "결석",
    "examples": [],
    "tip": "",
    "no": 23,
    "day": 15
   },
   {
    "word": "late",
    "pron": "레잇",
    "pos": "a.",
    "meaning": "지각한",
    "examples": [
     {
      "en": "I'm sorry I'm late for class.",
      "ko": "수업에 늦어서 죄송합니다."
     }
    ],
    "tip": "",
    "no": 24,
    "day": 15
   },
   {
    "word": "lateness",
    "pron": "레잇니(ㅅ)",
    "pos": "n.",
    "meaning": "지각",
    "examples": [],
    "tip": "",
    "no": 25,
    "day": 15
   },
   {
    "word": "be late for",
    "pron": "비- 레잇 퍼",
    "pos": "",
    "meaning": "~에 지각하다",
    "examples": [],
    "tip": "무단으로 조퇴하는 것을 skip off라고 합니다.",
    "no": 26,
    "day": 15,
    "tipLabel": "💡 tip"
   },
   {
    "word": "school bus",
    "pron": "스쿠울 버(ㅅ)",
    "pos": "n.",
    "meaning": "스쿨버스, 통학버스",
    "examples": [],
    "tip": "",
    "no": 27,
    "day": 15
   },
   {
    "word": "school uniform",
    "pron": "스쿠울 유-너퍼엄",
    "pos": "n.",
    "meaning": "교복",
    "examples": [],
    "tip": "",
    "no": 28,
    "day": 15
   },
   {
    "word": "study",
    "pron": "스터디",
    "pos": "n.",
    "meaning": "공부, 공부하다",
    "examples": [],
    "tip": "",
    "no": 29,
    "day": 15
   },
   {
    "word": "teach",
    "pron": "티-취",
    "pos": "v.",
    "meaning": "가르치다",
    "examples": [],
    "tip": "",
    "no": 30,
    "day": 15
   },
   {
    "word": "learn",
    "pron": "러언",
    "pos": "v.",
    "meaning": "배우다",
    "examples": [],
    "tip": "",
    "no": 31,
    "day": 15
   },
   {
    "word": "learning",
    "pron": "러-닝",
    "pos": "n.",
    "meaning": "배움, 학습",
    "examples": [],
    "tip": "",
    "no": 32,
    "day": 15
   },
   {
    "word": "class",
    "pron": "클래(ㅅ)",
    "pos": "n.",
    "meaning": "수업, 강의",
    "examples": [],
    "tip": "",
    "no": 33,
    "day": 15
   },
   {
    "word": "lecture",
    "pron": "렉취",
    "pos": "",
    "meaning": "수업, 강의",
    "examples": [],
    "tip": "",
    "no": 34,
    "day": 15
   },
   {
    "word": "course",
    "pron": "커-(ㅅ)",
    "pos": "",
    "meaning": "수업, 강의",
    "examples": [],
    "tip": "",
    "no": 35,
    "day": 15
   },
   {
    "word": "lesson",
    "pron": "레슨",
    "pos": "",
    "meaning": "수업, 강의",
    "examples": [],
    "tip": "",
    "no": 36,
    "day": 15
   },
   {
    "word": "student",
    "pron": "스튜-든(트)",
    "pos": "n.",
    "meaning": "학생",
    "examples": [],
    "tip": "student는 주로 고등학생과 대학생을 말하며, pupil은 주로 초·중학생을 말하는데, 예술 등 전문 분야와 관련된 개인 교습을 받는 제자를 의미하기도 합니다.",
    "no": 37,
    "day": 15,
    "tipLabel": "💡 tip"
   },
   {
    "word": "schoolmate",
    "pron": "스쿠울메잇",
    "pos": "n.",
    "meaning": "학우, 학교 친구, 동기",
    "examples": [],
    "tip": "",
    "no": 38,
    "day": 15
   },
   {
    "word": "classmate",
    "pron": "클래(ㅅ)메잇",
    "pos": "n.",
    "meaning": "급우, 반 친구",
    "examples": [],
    "tip": "",
    "no": 39,
    "day": 15
   },
   {
    "word": "teacher",
    "pron": "티-춰",
    "pos": "n.",
    "meaning": "교사, 선생",
    "examples": [
     {
      "en": "Our teacher gives us a lot of assignments.",
      "ko": "우리 선생님은 숙제를 많이 내 주신다."
     }
    ],
    "tip": "미국 대학의 교수 체계는 assistant professor(조교수), associate professor(부교수), (full) professor(정교수) 순이며, 강사는 instructor 또는 lecturer라고 합니다.",
    "no": 40,
    "day": 15,
    "tipLabel": "💡 tip"
   },
   {
    "word": "professor",
    "pron": "프러페서",
    "pos": "n.",
    "meaning": "교수",
    "examples": [],
    "tip": "",
    "no": 41,
    "day": 15
   },
   {
    "word": "instructor",
    "pron": "인스츠럭터",
    "pos": "n.",
    "meaning": "강사",
    "examples": [],
    "tip": "",
    "no": 42,
    "day": 15
   },
   {
    "word": "lecturer",
    "pron": "렉처러",
    "pos": "",
    "meaning": "강사",
    "examples": [],
    "tip": "",
    "no": 43,
    "day": 15
   },
   {
    "word": "classroom",
    "pron": "클래(ㅅ)루움",
    "pos": "n.",
    "meaning": "교실",
    "examples": [],
    "tip": "",
    "no": 44,
    "day": 15
   },
   {
    "word": "question",
    "pron": "쿠에스천",
    "pos": "n.",
    "meaning": "질문",
    "examples": [],
    "tip": "",
    "no": 45,
    "day": 15
   },
   {
    "word": "ask",
    "pron": "애슥",
    "pos": "v.",
    "meaning": "묻다, 질문하다",
    "examples": [],
    "tip": "",
    "no": 46,
    "day": 15
   },
   {
    "word": "answer",
    "pron": "앤서",
    "pos": "n.",
    "meaning": "대답, 대답하다",
    "examples": [],
    "tip": "",
    "no": 47,
    "day": 15
   },
   {
    "word": "textbook",
    "pron": "텍슷북",
    "pos": "n.",
    "meaning": "교과서",
    "examples": [],
    "tip": "",
    "no": 48,
    "day": 15
   },
   {
    "word": "notebook",
    "pron": "노웃북",
    "pos": "n.",
    "meaning": "공책",
    "examples": [],
    "tip": "",
    "no": 49,
    "day": 15
   },
   {
    "word": "pencil",
    "pron": "펜쓸",
    "pos": "n.",
    "meaning": "연필",
    "examples": [],
    "tip": "",
    "no": 50,
    "day": 15
   },
   {
    "word": "eraser",
    "pron": "이레이서",
    "pos": "n.",
    "meaning": "지우개",
    "examples": [],
    "tip": "",
    "no": 51,
    "day": 15
   },
   {
    "word": "blackboard",
    "pron": "블랙버-(ㄷ)",
    "pos": "n.",
    "meaning": "칠판",
    "examples": [],
    "tip": "",
    "no": 52,
    "day": 15
   },
   {
    "word": "take notes",
    "pron": "테익 노우(ㅊ)",
    "pos": "",
    "meaning": "필기하다",
    "examples": [],
    "tip": "",
    "no": 53,
    "day": 15
   },
   {
    "word": "chalk",
    "pron": "처억",
    "pos": "n.",
    "meaning": "분필",
    "examples": [],
    "tip": "",
    "no": 54,
    "day": 15
   },
   {
    "word": "homework",
    "pron": "호움워-(ㅋ)",
    "pos": "n.",
    "meaning": "숙제",
    "examples": [],
    "tip": "",
    "no": 55,
    "day": 15
   },
   {
    "word": "submit",
    "pron": "섭밋",
    "pos": "v.",
    "meaning": "제출하다",
    "examples": [],
    "tip": "",
    "no": 56,
    "day": 15
   },
   {
    "word": "assignment",
    "pron": "어사인먼(ㅌ)",
    "pos": "n.",
    "meaning": "과제",
    "examples": [],
    "tip": "",
    "no": 57,
    "day": 15
   },
   {
    "word": "report",
    "pron": "리퍼-(ㅌ)",
    "pos": "n.",
    "meaning": "보고서, 리포트",
    "examples": [],
    "tip": "",
    "no": 58,
    "day": 15
   },
   {
    "word": "examination",
    "pron": "익재미네이션",
    "pos": "n.",
    "meaning": "시험",
    "examples": [],
    "tip": "",
    "no": 59,
    "day": 15
   },
   {
    "word": "result",
    "pron": "리절(ㅌ)",
    "pos": "n.",
    "meaning": "결과",
    "examples": [],
    "tip": "",
    "no": 60,
    "day": 15
   },
   {
    "word": "score",
    "pron": "스커-",
    "pos": "n.",
    "meaning": "점수",
    "examples": [],
    "tip": "",
    "no": 61,
    "day": 15
   },
   {
    "word": "easy",
    "pron": "이-지",
    "pos": "a.",
    "meaning": "쉬운",
    "examples": [],
    "tip": "",
    "no": 62,
    "day": 15
   },
   {
    "word": "difficult",
    "pron": "디피컬(ㅌ)",
    "pos": "a.",
    "meaning": "어려운",
    "examples": [],
    "tip": "",
    "no": 63,
    "day": 15
   },
   {
    "word": "pass",
    "pron": "패(ㅅ)",
    "pos": "v.",
    "meaning": "(시험에) 합격하다",
    "examples": [],
    "tip": "",
    "no": 64,
    "day": 15
   },
   {
    "word": "evaluate",
    "pron": "이밸류에잇",
    "pos": "v.",
    "meaning": "평가하다",
    "examples": [],
    "tip": "",
    "no": 65,
    "day": 15
   },
   {
    "word": "fail",
    "pron": "페일",
    "pos": "v.",
    "meaning": "(시험에) 불합격하다",
    "examples": [],
    "tip": "",
    "no": 66,
    "day": 15
   },
   {
    "word": "degree",
    "pron": "디그리-",
    "pos": "n.",
    "meaning": "학위",
    "examples": [],
    "tip": "",
    "no": 67,
    "day": 15
   },
   {
    "word": "scholarship",
    "pron": "스칼러쉽",
    "pos": "n.",
    "meaning": "장학금",
    "examples": [],
    "tip": "",
    "no": 68,
    "day": 15
   },
   {
    "word": "summer break",
    "pron": "서머 브레익",
    "pos": "n.",
    "meaning": "여름 방학",
    "examples": [],
    "tip": "",
    "no": 69,
    "day": 15
   },
   {
    "word": "summer vacation",
    "pron": "서머 베이케이션",
    "pos": "",
    "meaning": "여름 방학",
    "examples": [],
    "tip": "",
    "no": 70,
    "day": 15
   },
   {
    "word": "winter break",
    "pron": "윈터 브레익",
    "pos": "n.",
    "meaning": "겨울 방학, 크리스마스 방학",
    "examples": [],
    "tip": "",
    "no": 71,
    "day": 15
   },
   {
    "word": "pupil",
    "pron": "퓨-플",
    "pos": "n.",
    "meaning": "학생, 제자",
    "examples": [],
    "tip": "",
    "no": 72,
    "day": 15
   },
   {
    "word": "freshman",
    "pron": "프레쉬먼",
    "pos": "n.",
    "meaning": "(대학의) 신입생",
    "examples": [
     {
      "en": "A welcome party was held for freshmen at the student hall.",
      "ko": "신입생 환영 파티가 학생회관에서 열렸다."
     }
    ],
    "tip": "미국의 4년제 대학에서 학년을 말할 때, 1학년을 freshman, 2학년을 sophomore, 3학년을 junior, 4학년을 senior라고 합니다.",
    "no": 73,
    "day": 15,
    "tipLabel": "💡 tip"
   },
   {
    "word": "school year",
    "pron": "스쿠울 이어",
    "pos": "n.",
    "meaning": "학년, 학년도",
    "examples": [],
    "tip": "",
    "no": 74,
    "day": 15
   },
   {
    "word": "semester",
    "pron": "시메스터",
    "pos": "n.",
    "meaning": "학기",
    "examples": [
     {
      "en": "How many classes are you taking this semester?",
      "ko": "이번 학기에 몇 과목 들어?"
     }
    ],
    "tip": "'~을 수강하다'는 'take+수업'으로 표현합니다.",
    "no": 75,
    "day": 15,
    "tipLabel": "💡 tip"
   },
   {
    "word": "register",
    "pron": "레지스터",
    "pos": "v.",
    "meaning": "수강 신청하다",
    "examples": [
     {
      "en": "Have you registered yet for your classes?",
      "ko": "벌써 수강 신청했어?"
     }
    ],
    "tip": "",
    "no": 76,
    "day": 15
   }
  ]
 },
 {
  "day": 16,
  "title": "Unit 16. 직장",
  "words": [
   {
    "word": "chairman",
    "pron": "체어먼",
    "pos": "n.",
    "meaning": "회장",
    "examples": [],
    "tip": "chairman은 '회의를 진행하는 사람'에서 유래한 단어로 요즘에는 성차별적인 요소를 없애서 chairperson이라고 합니다.",
    "no": 1,
    "day": 16,
    "tipLabel": "💡 tip"
   },
   {
    "word": "ceo",
    "pron": "씨-이-오우",
    "pos": "",
    "meaning": "최고 경영자",
    "examples": [],
    "tip": "chief executive officer의 약자입니다.",
    "no": 2,
    "day": 16,
    "tipLabel": "💡 tip"
   },
   {
    "word": "president",
    "pron": "프레저던(ㅌ)",
    "pos": "n.",
    "meaning": "사장",
    "examples": [],
    "tip": "",
    "no": 3,
    "day": 16
   },
   {
    "word": "vice-president",
    "pron": "바이(ㅆ)프레저던(ㅌ)",
    "pos": "n.",
    "meaning": "부사장",
    "examples": [],
    "tip": "",
    "no": 4,
    "day": 16
   },
   {
    "word": "director",
    "pron": "디렉터",
    "pos": "n.",
    "meaning": "이사, 최고 책임자",
    "examples": [],
    "tip": "director는 최고 책임자로, 뒤에 각각의 부서명이 붙기도 합니다.",
    "no": 5,
    "day": 16,
    "tipLabel": "💡 tip"
   },
   {
    "word": "manager",
    "pron": "매니줘",
    "pos": "n.",
    "meaning": "부장, 국장, 관리자",
    "examples": [],
    "tip": "",
    "no": 6,
    "day": 16
   },
   {
    "word": "boss",
    "pron": "버-(ㅅ)",
    "pos": "n.",
    "meaning": "상사",
    "examples": [
     {
      "en": "I'm going with my boss.",
      "ko": "상사와 함께 갑니다."
     }
    ],
    "tip": "",
    "no": 7,
    "day": 16
   },
   {
    "word": "leader",
    "pron": "리-더",
    "pos": "",
    "meaning": "지도자, 리더",
    "examples": [],
    "tip": "",
    "no": 8,
    "day": 16
   },
   {
    "word": "promote",
    "pron": "프러모우",
    "pos": "v.",
    "meaning": "승진하다",
    "examples": [
     {
      "en": "You deserve a promotion.",
      "ko": "당신은 승진할 만하죠."
     }
    ],
    "tip": "",
    "no": 9,
    "day": 16
   },
   {
    "word": "promotion",
    "pron": "프러모우션",
    "pos": "n.",
    "meaning": "승진",
    "examples": [],
    "tip": "",
    "no": 10,
    "day": 16
   },
   {
    "word": "salary",
    "pron": "샐러리",
    "pos": "n.",
    "meaning": "봉급",
    "examples": [
     {
      "en": "It's difficult to survive on my salary.",
      "ko": "내 월급으로 생활하기 빠듯하다."
     }
    ],
    "tip": "",
    "no": 11,
    "day": 16
   },
   {
    "word": "monthly salary",
    "pron": "먼쓸리 샐러리",
    "pos": "",
    "meaning": "월급",
    "examples": [],
    "tip": "",
    "no": 12,
    "day": 16
   },
   {
    "word": "annual salary",
    "pron": "애뉴얼 샐러리",
    "pos": "",
    "meaning": "연봉",
    "examples": [],
    "tip": "",
    "no": 13,
    "day": 16
   },
   {
    "word": "get a salary",
    "pron": "겟 어 샐러리",
    "pos": "",
    "meaning": "급여를 받다",
    "examples": [],
    "tip": "",
    "no": 14,
    "day": 16
   },
   {
    "word": "wage",
    "pron": "웨이쥐",
    "pos": "n.",
    "meaning": "임금",
    "examples": [],
    "tip": "wage는 주로 시간당 임금을 나타냅니다.",
    "no": 15,
    "day": 16,
    "tipLabel": "💡 tip"
   },
   {
    "word": "gross wages",
    "pron": "그로우(ㅅ) 웨이쥐(ㅅ)",
    "pos": "",
    "meaning": "총 급여",
    "examples": [],
    "tip": "",
    "no": 16,
    "day": 16
   },
   {
    "word": "net wages",
    "pron": "넷 웨이쥐(ㅅ)",
    "pos": "",
    "meaning": "실수령 급여",
    "examples": [],
    "tip": "",
    "no": 17,
    "day": 16
   },
   {
    "word": "basic wage",
    "pron": "베이식 웨이쥐",
    "pos": "",
    "meaning": "기본급",
    "examples": [],
    "tip": "",
    "no": 18,
    "day": 16
   },
   {
    "word": "minimum wage",
    "pron": "미니멈 웨이쥐",
    "pos": "",
    "meaning": "최저 임금",
    "examples": [],
    "tip": "",
    "no": 19,
    "day": 16
   },
   {
    "word": "allowance",
    "pron": "얼라우언(ㅆ)",
    "pos": "n.",
    "meaning": "수당",
    "examples": [],
    "tip": "",
    "no": 20,
    "day": 16
   },
   {
    "word": "travel allowance",
    "pron": "초래블 얼라우언(ㅆ)",
    "pos": "",
    "meaning": "출장 수당",
    "examples": [],
    "tip": "",
    "no": 21,
    "day": 16
   },
   {
    "word": "overtime allowance",
    "pron": "오우버타임 얼라우언(ㅆ)",
    "pos": "",
    "meaning": "야근 수당",
    "examples": [],
    "tip": "",
    "no": 22,
    "day": 16
   },
   {
    "word": "family allowance",
    "pron": "패멀리 얼라우언(ㅆ)",
    "pos": "",
    "meaning": "가족 수당",
    "examples": [],
    "tip": "",
    "no": 23,
    "day": 16
   },
   {
    "word": "bonus",
    "pron": "보우너(ㅅ)",
    "pos": "n.",
    "meaning": "상여금, 보너스",
    "examples": [],
    "tip": "",
    "no": 24,
    "day": 16
   },
   {
    "word": "benefit",
    "pron": "베너핏",
    "pos": "n.",
    "meaning": "수당, 혜택",
    "examples": [
     {
      "en": "Salary and benefits are negotiable.",
      "ko": "급여 및 수당은 조정 가능합니다."
     },
     {
      "en": "I claimed unemployment benefits.",
      "ko": "나는 실업 수당을 청구했다."
     }
    ],
    "tip": "",
    "no": 25,
    "day": 16
   },
   {
    "word": "medical benefits",
    "pron": "메디컬 베너핏(ㅊ)",
    "pos": "",
    "meaning": "의료 수당",
    "examples": [],
    "tip": "",
    "no": 26,
    "day": 16
   },
   {
    "word": "unemployment benefits",
    "pron": "언임플로이먼(ㅌ) 베너핏(ㅊ)",
    "pos": "",
    "meaning": "실업 수당",
    "examples": [],
    "tip": "",
    "no": 27,
    "day": 16
   },
   {
    "word": "paycheck",
    "pron": "페이첵",
    "pos": "n.",
    "meaning": "급여, 급여 지불 수표",
    "examples": [],
    "tip": "미국에서 급여를 수표로 지불하는 데서 나온 말입니다.",
    "no": 28,
    "day": 16,
    "tipLabel": "💡 tip"
   },
   {
    "word": "pay slip",
    "pron": "페이 슬립",
    "pos": "n.",
    "meaning": "급여명세표",
    "examples": [],
    "tip": "",
    "no": 29,
    "day": 16
   },
   {
    "word": "payroll",
    "pron": "페이로울",
    "pos": "n.",
    "meaning": "임금 대장, 임금 지급 총액",
    "examples": [],
    "tip": "",
    "no": 30,
    "day": 16
   },
   {
    "word": "pay raise",
    "pron": "페이 레이(ㅈ)",
    "pos": "",
    "meaning": "임금 인상",
    "examples": [],
    "tip": "",
    "no": 31,
    "day": 16
   },
   {
    "word": "pay cut",
    "pron": "페이 컷",
    "pos": "",
    "meaning": "임금 삭감",
    "examples": [],
    "tip": "",
    "no": 32,
    "day": 16
   },
   {
    "word": "wage freeze",
    "pron": "웨이쥐 프리-(ㅈ)",
    "pos": "",
    "meaning": "임금 동결",
    "examples": [],
    "tip": "",
    "no": 33,
    "day": 16
   },
   {
    "word": "deduct",
    "pron": "디덕(ㅌ)",
    "pos": "v.",
    "meaning": "공제하다",
    "examples": [
     {
      "en": "Taxes are deducted from my salary.",
      "ko": "세금은 매달 내 월급에서 공제됩니다."
     }
    ],
    "tip": "",
    "no": 34,
    "day": 16
   },
   {
    "word": "deduction",
    "pron": "디덕션",
    "pos": "n.",
    "meaning": "공제",
    "examples": [],
    "tip": "",
    "no": 35,
    "day": 16
   },
   {
    "word": "total deductions",
    "pron": "토우틀 디덕션(ㅅ)",
    "pos": "",
    "meaning": "총공제액",
    "examples": [],
    "tip": "",
    "no": 36,
    "day": 16
   },
   {
    "word": "tax",
    "pron": "택(ㅅ)",
    "pos": "n.",
    "meaning": "세금",
    "examples": [],
    "tip": "",
    "no": 37,
    "day": 16
   },
   {
    "word": "state tax",
    "pron": "스테잇 택(ㅅ)",
    "pos": "",
    "meaning": "주세",
    "examples": [],
    "tip": "",
    "no": 38,
    "day": 16
   },
   {
    "word": "federal tax",
    "pron": "페더럴 택(ㅅ)",
    "pos": "",
    "meaning": "연방세",
    "examples": [],
    "tip": "",
    "no": 39,
    "day": 16
   },
   {
    "word": "employment insurance",
    "pron": "임플로이먼(ㅌ) 인슈어런(ㅆ)",
    "pos": "",
    "meaning": "고용보험",
    "examples": [],
    "tip": "",
    "no": 40,
    "day": 16
   },
   {
    "word": "health insurance",
    "pron": "헬쓰 인슈어런(ㅆ)",
    "pos": "",
    "meaning": "건강보험",
    "examples": [
     {
      "en": "Do you have health insurance?",
      "ko": "건강보험이 있나요?"
     }
    ],
    "tip": "",
    "no": 41,
    "day": 16
   },
   {
    "word": "go to work",
    "pron": "고우 투 워-(ㅋ)",
    "pos": "",
    "meaning": "출근하다",
    "examples": [
     {
      "en": "I have to get to work by 8 o'clock.",
      "ko": "8시까지 출근해야 합니다."
     }
    ],
    "tip": "",
    "no": 42,
    "day": 16
   },
   {
    "word": "get to work",
    "pron": "겟 투 워-(ㅋ)",
    "pos": "",
    "meaning": "출근하다",
    "examples": [],
    "tip": "",
    "no": 43,
    "day": 16
   },
   {
    "word": "punch in",
    "pron": "펀취 인",
    "pos": "",
    "meaning": "출근하다",
    "examples": [],
    "tip": "punch in은 출근 카드에 시간을 찍어 출근했음을 표시하는 데서 유래한 말입니다.",
    "no": 44,
    "day": 16,
    "tipLabel": "💡 tip"
   },
   {
    "word": "carpool",
    "pron": "카-푸울",
    "pos": "n.",
    "meaning": "카풀, 승용차 함께 타기",
    "examples": [],
    "tip": "",
    "no": 45,
    "day": 16
   },
   {
    "word": "ride-share",
    "pron": "라이(ㄷ)셰어",
    "pos": "",
    "meaning": "카풀을 하다",
    "examples": [],
    "tip": "",
    "no": 46,
    "day": 16
   },
   {
    "word": "get off work",
    "pron": "겟 어-(ㅍ) 워-(ㅋ)",
    "pos": "",
    "meaning": "퇴근하다",
    "examples": [
     {
      "en": "Brad got off work early.",
      "ko": "브래드는 일찍 퇴근했다."
     }
    ],
    "tip": "",
    "no": 47,
    "day": 16
   },
   {
    "word": "punch out",
    "pron": "펀취 아웃",
    "pos": "",
    "meaning": "퇴근하다",
    "examples": [],
    "tip": "",
    "no": 48,
    "day": 16
   },
   {
    "word": "call it a day",
    "pron": "커얼 잇 어 데이",
    "pos": "",
    "meaning": "퇴근하다",
    "examples": [],
    "tip": "",
    "no": 49,
    "day": 16
   },
   {
    "word": "pension",
    "pron": "펜션",
    "pos": "n.",
    "meaning": "연금",
    "examples": [],
    "tip": "",
    "no": 50,
    "day": 16
   },
   {
    "word": "pensioner",
    "pron": "펜셔너",
    "pos": "n.",
    "meaning": "연금 생활자",
    "examples": [],
    "tip": "",
    "no": 51,
    "day": 16
   },
   {
    "word": "pension fund",
    "pron": "펜션 펀(ㄷ)",
    "pos": "",
    "meaning": "연금 기금",
    "examples": [],
    "tip": "",
    "no": 52,
    "day": 16
   },
   {
    "word": "retire",
    "pron": "리타이어",
    "pos": "v.",
    "meaning": "퇴직하다, 은퇴하다",
    "examples": [],
    "tip": "정년 퇴직에는 retire를, 임기 도중에 사직할 때는 resign을 씁니다.",
    "no": 53,
    "day": 16,
    "tipLabel": "💡 tip"
   },
   {
    "word": "retirement",
    "pron": "리타이어먼(ㅌ)",
    "pos": "n.",
    "meaning": "퇴직, 은퇴",
    "examples": [],
    "tip": "",
    "no": 54,
    "day": 16
   },
   {
    "word": "retiree",
    "pron": "리타이어리-",
    "pos": "n.",
    "meaning": "퇴직자, 은퇴자",
    "examples": [],
    "tip": "",
    "no": 55,
    "day": 16
   },
   {
    "word": "retirement allowance",
    "pron": "리타이어먼(ㅌ) 얼라우언(ㅆ)",
    "pos": "",
    "meaning": "퇴직금",
    "examples": [],
    "tip": "",
    "no": 56,
    "day": 16
   },
   {
    "word": "resign",
    "pron": "리자인",
    "pos": "v.",
    "meaning": "사직하다, 사퇴하다",
    "examples": [],
    "tip": "",
    "no": 57,
    "day": 16
   },
   {
    "word": "resignation",
    "pron": "레직네이션",
    "pos": "n.",
    "meaning": "사임, 사퇴",
    "examples": [],
    "tip": "",
    "no": 58,
    "day": 16
   },
   {
    "word": "voluntary resignation",
    "pron": "바알런테리 레직네이션",
    "pos": "",
    "meaning": "명예퇴직, 희망퇴직",
    "examples": [],
    "tip": "",
    "no": 59,
    "day": 16
   },
   {
    "word": "dismiss",
    "pron": "디스미(ㅅ)",
    "pos": "v.",
    "meaning": "해고하다",
    "examples": [
     {
      "en": "He dismissed me without any good reason.",
      "ko": "그는 타당한 이유 없이 나를 해고했다."
     }
    ],
    "tip": "",
    "no": 60,
    "day": 16
   },
   {
    "word": "fire",
    "pron": "파이어",
    "pos": "",
    "meaning": "해고하다",
    "examples": [],
    "tip": "",
    "no": 61,
    "day": 16
   },
   {
    "word": "get fired",
    "pron": "겟 파이어(ㄷ)",
    "pos": "",
    "meaning": "해고되다",
    "examples": [
     {
      "en": "Sam got fired.",
      "ko": "샘이 해고됐어."
     }
    ],
    "tip": "",
    "no": 62,
    "day": 16
   },
   {
    "word": "restructuring",
    "pron": "리-스추럭처링",
    "pos": "n.",
    "meaning": "구조 조정",
    "examples": [],
    "tip": "",
    "no": 63,
    "day": 16
   },
   {
    "word": "strike",
    "pron": "스츠라익",
    "pos": "n.",
    "meaning": "파업",
    "examples": [],
    "tip": "",
    "no": 64,
    "day": 16
   },
   {
    "word": "layoff",
    "pron": "레이어(ㅍ)",
    "pos": "n.",
    "meaning": "(불경기로 인한) 임시 휴직, 일시 해고",
    "examples": [],
    "tip": "layoff는 주로 영국에서 쓰는 말인데, 미국에서는 '실업 중인 배우'를 뜻하는 속어이기도 합니다.",
    "no": 65,
    "day": 16,
    "tipLabel": "💡 tip"
   },
   {
    "word": "vacation",
    "pron": "베이케이션",
    "pos": "n.",
    "meaning": "휴가",
    "examples": [
     {
      "en": "Jack is away on vacation.",
      "ko": "잭은 휴가 중이다."
     }
    ],
    "tip": "",
    "no": 66,
    "day": 16
   },
   {
    "word": "holiday",
    "pron": "할러데이",
    "pos": "",
    "meaning": "휴가",
    "examples": [],
    "tip": "",
    "no": 67,
    "day": 16
   },
   {
    "word": "leave",
    "pron": "리-(ㅂ)",
    "pos": "n.",
    "meaning": "휴가",
    "examples": [
     {
      "en": "Rick is on sick leave.",
      "ko": "릭은 병가를 냈어요."
     },
     {
      "en": "Nancy is on maternity leave.",
      "ko": "낸시는 출산 휴가 중이에요."
     }
    ],
    "tip": "leave는 직장에서 질병이나 출산 등을 위해 신청하는 휴가를 가리킵니다. 학교 등의 휴가는 vacation이나 holiday라고 합니다.",
    "no": 68,
    "day": 16,
    "tipLabel": "💡 tip"
   },
   {
    "word": "paid leave",
    "pron": "페잇 리-(ㅂ)",
    "pos": "",
    "meaning": "유급 휴가",
    "examples": [],
    "tip": "",
    "no": 69,
    "day": 16
   },
   {
    "word": "parental leave",
    "pron": "퍼렌틀 리-(ㅂ)",
    "pos": "",
    "meaning": "(부모의) 출산 휴가",
    "examples": [],
    "tip": "",
    "no": 70,
    "day": 16
   },
   {
    "word": "paternity leave",
    "pron": "퍼터-너티 리-(ㅂ)",
    "pos": "",
    "meaning": "(남성의) 출산 휴가",
    "examples": [],
    "tip": "",
    "no": 71,
    "day": 16
   },
   {
    "word": "maternity leave",
    "pron": "머터-너티 리-(ㅂ)",
    "pos": "",
    "meaning": "(여성의) 출산 휴가",
    "examples": [],
    "tip": "",
    "no": 72,
    "day": 16
   },
   {
    "word": "sick leave",
    "pron": "식 리-(ㅂ)",
    "pos": "",
    "meaning": "병가",
    "examples": [],
    "tip": "",
    "no": 73,
    "day": 16
   },
   {
    "word": "salesperson",
    "pron": "세일즈퍼-슨",
    "pos": "n.",
    "meaning": "판매원",
    "examples": [],
    "tip": "",
    "no": 74,
    "day": 16
   },
   {
    "word": "merchant",
    "pron": "머-천(ㅌ)",
    "pos": "n.",
    "meaning": "상인, 무역상",
    "examples": [],
    "tip": "",
    "no": 75,
    "day": 16
   },
   {
    "word": "programmer",
    "pron": "프로우그래머",
    "pos": "n.",
    "meaning": "프로그래머",
    "examples": [],
    "tip": "",
    "no": 76,
    "day": 16
   },
   {
    "word": "lawyer",
    "pron": "러-이어",
    "pos": "n.",
    "meaning": "변호사",
    "examples": [],
    "tip": "",
    "no": 77,
    "day": 16
   },
   {
    "word": "judge",
    "pron": "저쥐",
    "pos": "n.",
    "meaning": "판사, 재판관",
    "examples": [],
    "tip": "",
    "no": 78,
    "day": 16
   },
   {
    "word": "accountant",
    "pron": "어카운턴(ㅌ)",
    "pos": "n.",
    "meaning": "회계사",
    "examples": [],
    "tip": "",
    "no": 79,
    "day": 16
   },
   {
    "word": "police officer",
    "pron": "펄리-(ㅆ) 어-피써",
    "pos": "n.",
    "meaning": "경찰관",
    "examples": [],
    "tip": "",
    "no": 80,
    "day": 16
   },
   {
    "word": "fire fighter",
    "pron": "파이어 파이터",
    "pos": "n.",
    "meaning": "소방관",
    "examples": [],
    "tip": "",
    "no": 81,
    "day": 16
   },
   {
    "word": "teacher",
    "pron": "티-춰",
    "pos": "n.",
    "meaning": "교사, 선생",
    "examples": [],
    "tip": "",
    "no": 82,
    "day": 16
   },
   {
    "word": "mail carrier",
    "pron": "메일 캐리어",
    "pos": "n.",
    "meaning": "우편 배달부",
    "examples": [],
    "tip": "우편 배달부는 일반적으로 postman이나 mailman을 사용하지만 성차별적 요소를 없애기 위해 mail carrier를 사용합니다.",
    "no": 83,
    "day": 16,
    "tipLabel": "💡 tip"
   },
   {
    "word": "librarian",
    "pron": "라입레리언",
    "pos": "n.",
    "meaning": "사서, 도서관원",
    "examples": [
     {
      "en": "The librarian was putting books on the shelves.",
      "ko": "사서가 책꽂이에 책을 꽂고 있었다."
     }
    ],
    "tip": "",
    "no": 84,
    "day": 16
   },
   {
    "word": "reporter",
    "pron": "리퍼-터",
    "pos": "n.",
    "meaning": "기자",
    "examples": [],
    "tip": "",
    "no": 85,
    "day": 16
   },
   {
    "word": "secretary",
    "pron": "세크러테리",
    "pos": "n.",
    "meaning": "비서",
    "examples": [],
    "tip": "",
    "no": 86,
    "day": 16
   },
   {
    "word": "designer",
    "pron": "디자이너",
    "pos": "n.",
    "meaning": "디자이너",
    "examples": [],
    "tip": "",
    "no": 87,
    "day": 16
   },
   {
    "word": "editor",
    "pron": "에디터",
    "pos": "n.",
    "meaning": "편집자",
    "examples": [],
    "tip": "",
    "no": 88,
    "day": 16
   },
   {
    "word": "photographer",
    "pron": "퍼타그러퍼",
    "pos": "n.",
    "meaning": "사진작가",
    "examples": [],
    "tip": "",
    "no": 89,
    "day": 16
   },
   {
    "word": "politician",
    "pron": "팔리티션",
    "pos": "n.",
    "meaning": "정치인",
    "examples": [],
    "tip": "",
    "no": 90,
    "day": 16
   },
   {
    "word": "doctor",
    "pron": "닥터",
    "pos": "n.",
    "meaning": "의사",
    "examples": [],
    "tip": "",
    "no": 91,
    "day": 16
   },
   {
    "word": "veterinarian",
    "pron": "베터러네어리언",
    "pos": "n.",
    "meaning": "수의사",
    "examples": [
     {
      "en": "Did you take your puppy to the vet?",
      "ko": "네 강아지를 수의사한테 데리고 가봤니?"
     }
    ],
    "tip": "줄여서 vet이라고도 합니다.",
    "no": 92,
    "day": 16,
    "tipLabel": "💡 tip"
   },
   {
    "word": "dentist",
    "pron": "덴티슷",
    "pos": "n.",
    "meaning": "치과의사",
    "examples": [],
    "tip": "",
    "no": 93,
    "day": 16
   },
   {
    "word": "nurse",
    "pron": "너-(ㅅ)",
    "pos": "n.",
    "meaning": "간호사",
    "examples": [],
    "tip": "",
    "no": 94,
    "day": 16
   },
   {
    "word": "pharmacist",
    "pron": "파-머씨슷",
    "pos": "n.",
    "meaning": "약사",
    "examples": [],
    "tip": "",
    "no": 95,
    "day": 16
   },
   {
    "word": "architect",
    "pron": "아-커텍(ㅌ)",
    "pos": "n.",
    "meaning": "건축가",
    "examples": [],
    "tip": "",
    "no": 96,
    "day": 16
   },
   {
    "word": "engineer",
    "pron": "엔지니(ㄹ)",
    "pos": "n.",
    "meaning": "엔지니어",
    "examples": [],
    "tip": "",
    "no": 97,
    "day": 16
   },
   {
    "word": "plumber",
    "pron": "플러머",
    "pos": "n.",
    "meaning": "배관공",
    "examples": [],
    "tip": "",
    "no": 98,
    "day": 16
   },
   {
    "word": "mechanic",
    "pron": "머캐닉",
    "pos": "n.",
    "meaning": "정비공",
    "examples": [],
    "tip": "",
    "no": 99,
    "day": 16
   },
   {
    "word": "cook",
    "pron": "쿡",
    "pos": "n.",
    "meaning": "요리사",
    "examples": [],
    "tip": "",
    "no": 100,
    "day": 16
   },
   {
    "word": "chef",
    "pron": "쉐(ㅍ)",
    "pos": "n.",
    "meaning": "요리사, 주방장",
    "examples": [],
    "tip": "cook은 성별 상관 없이 쓰고, chef는 남자에게만 씁니다.",
    "no": 101,
    "day": 16,
    "tipLabel": "💡 tip"
   },
   {
    "word": "baker",
    "pron": "베이커",
    "pos": "n.",
    "meaning": "제빵업자",
    "examples": [],
    "tip": "",
    "no": 102,
    "day": 16
   },
   {
    "word": "waiter",
    "pron": "웨이터",
    "pos": "n.",
    "meaning": "종업원, 웨이터",
    "examples": [],
    "tip": "종업원은 성차별을 피한 표현으로 server, attendant, waitperson을 쓰기도 합니다.",
    "no": 103,
    "day": 16,
    "tipLabel": "💡 tip"
   },
   {
    "word": "waitress",
    "pron": "웨이츠리(ㅅ)",
    "pos": "n.",
    "meaning": "여자 종업원",
    "examples": [],
    "tip": "",
    "no": 104,
    "day": 16
   },
   {
    "word": "priest",
    "pron": "프리-슷",
    "pos": "n.",
    "meaning": "신부, 승려",
    "examples": [
     {
      "en": "I confessed to the priest.",
      "ko": "나는 신부님께 고해성사를 했어."
     }
    ],
    "tip": "",
    "no": 105,
    "day": 16
   },
   {
    "word": "pastor",
    "pron": "패스터",
    "pos": "n.",
    "meaning": "목사",
    "examples": [],
    "tip": "",
    "no": 106,
    "day": 16
   },
   {
    "word": "buddhist monk",
    "pron": "부-디슷 멍(ㅋ)",
    "pos": "",
    "meaning": "스님, 승려",
    "examples": [],
    "tip": "",
    "no": 107,
    "day": 16
   },
   {
    "word": "hairdresser",
    "pron": "헤어드레서",
    "pos": "n.",
    "meaning": "미용사, 헤어 디자이너",
    "examples": [],
    "tip": "",
    "no": 108,
    "day": 16
   },
   {
    "word": "beautician",
    "pron": "뷰-티션",
    "pos": "n.",
    "meaning": "미용사, 피부미용사",
    "examples": [],
    "tip": "",
    "no": 109,
    "day": 16
   },
   {
    "word": "florist",
    "pron": "플러-리슷",
    "pos": "n.",
    "meaning": "꽃집 주인, 플로리스트",
    "examples": [],
    "tip": "",
    "no": 110,
    "day": 16
   },
   {
    "word": "farmer",
    "pron": "파-머",
    "pos": "n.",
    "meaning": "농부",
    "examples": [],
    "tip": "",
    "no": 111,
    "day": 16
   },
   {
    "word": "fisherman",
    "pron": "피셔먼",
    "pos": "n.",
    "meaning": "어부",
    "examples": [],
    "tip": "일반적으로 어업에 종사하는 사람을 가리킵니다. 여성은 fisherwoman이라고 합니다.",
    "no": 112,
    "day": 16,
    "tipLabel": "💡 tip"
   },
   {
    "word": "employ",
    "pron": "임플러이",
    "pos": "v.",
    "meaning": "고용하다",
    "examples": [],
    "tip": "",
    "no": 113,
    "day": 16
   },
   {
    "word": "hire",
    "pron": "하이어",
    "pos": "",
    "meaning": "고용하다",
    "examples": [],
    "tip": "",
    "no": 114,
    "day": 16
   },
   {
    "word": "employment",
    "pron": "임플러이먼(ㅌ)",
    "pos": "n.",
    "meaning": "고용",
    "examples": [],
    "tip": "",
    "no": 115,
    "day": 16
   },
   {
    "word": "employment exam",
    "pron": "임플러이먼(ㅌ) 익잼",
    "pos": "",
    "meaning": "입사 시험",
    "examples": [],
    "tip": "",
    "no": 116,
    "day": 16
   },
   {
    "word": "employer",
    "pron": "임플러이어",
    "pos": "n.",
    "meaning": "고용주, 사장",
    "examples": [],
    "tip": "",
    "no": 117,
    "day": 16
   },
   {
    "word": "employee",
    "pron": "임플러이-",
    "pos": "n.",
    "meaning": "고용인, 사원, 직원",
    "examples": [
     {
      "en": "Employees have to work overtime to fill all the orders.",
      "ko": "주문 받은 것을 모두 납품하기 위해 직원들은 야근해야 한다."
     }
    ],
    "tip": "",
    "no": 118,
    "day": 16
   },
   {
    "word": "new employee",
    "pron": "누- 임플러이-",
    "pos": "",
    "meaning": "신입사원",
    "examples": [],
    "tip": "",
    "no": 119,
    "day": 16
   },
   {
    "word": "job-hunting",
    "pron": "잡헌팅",
    "pos": "n.",
    "meaning": "구직",
    "examples": [
     {
      "en": "He's job-hunting these days.",
      "ko": "그는 요즘 일자리를 알아보는 중이야."
     }
    ],
    "tip": "",
    "no": 120,
    "day": 16
   },
   {
    "word": "recruitment",
    "pron": "리크루웃먼(ㅌ)",
    "pos": "n.",
    "meaning": "(신입사원) 모집",
    "examples": [],
    "tip": "",
    "no": 121,
    "day": 16
   },
   {
    "word": "apply",
    "pron": "어플라이",
    "pos": "v.",
    "meaning": "지원하다",
    "examples": [
     {
      "en": "I want to apply for this position.",
      "ko": "이 자리에 지원하고 싶은데요."
     }
    ],
    "tip": "",
    "no": 122,
    "day": 16
   },
   {
    "word": "interview",
    "pron": "인터뷰-",
    "pos": "n.",
    "meaning": "면접",
    "examples": [
     {
      "en": "When will you have interviews?",
      "ko": "언제 면접을 봅니까?"
     }
    ],
    "tip": "",
    "no": 123,
    "day": 16
   },
   {
    "word": "resume",
    "pron": "레저메이",
    "pos": "n.",
    "meaning": "이력서",
    "examples": [
     {
      "en": "Send your resume by e-mail.",
      "ko": "이력서는 이메일로 보내 주세요."
     }
    ],
    "tip": "",
    "no": 124,
    "day": 16
   },
   {
    "word": "profile",
    "pron": "프로우파일",
    "pos": "n.",
    "meaning": "프로필",
    "examples": [],
    "tip": "",
    "no": 125,
    "day": 16
   },
   {
    "word": "career",
    "pron": "커리어",
    "pos": "n.",
    "meaning": "경력",
    "examples": [],
    "tip": "",
    "no": 126,
    "day": 16
   },
   {
    "word": "academic career",
    "pron": "애커데믹 커리어",
    "pos": "",
    "meaning": "학력",
    "examples": [],
    "tip": "",
    "no": 127,
    "day": 16
   }
  ]
 },
 {
  "day": 17,
  "title": "Unit 17. 음식점&카페",
  "words": [
   {
    "word": "restaurant",
    "pron": "레스터런(ㅌ)",
    "pos": "n.",
    "meaning": "음식점, 식당",
    "examples": [
     {
      "en": "Is there a good restaurant around here?",
      "ko": "이 근처에 맛있게 하는 음식점 있나요?"
     }
    ],
    "tip": "",
    "no": 1,
    "day": 17
   },
   {
    "word": "café",
    "pron": "캐페이",
    "pos": "n.",
    "meaning": "카페, 커피숍",
    "examples": [],
    "tip": "",
    "no": 2,
    "day": 17
   },
   {
    "word": "coffee shop",
    "pron": "커-피 샵",
    "pos": "",
    "meaning": "카페, 커피숍",
    "examples": [],
    "tip": "",
    "no": 3,
    "day": 17
   },
   {
    "word": "coffee house",
    "pron": "커-피 하우(ㅅ)",
    "pos": "",
    "meaning": "카페, 커피숍",
    "examples": [],
    "tip": "",
    "no": 4,
    "day": 17
   },
   {
    "word": "menu",
    "pron": "메뉴-",
    "pos": "n.",
    "meaning": "차림표, 식단, 메뉴",
    "examples": [
     {
      "en": "Can I see the menu, please?",
      "ko": "메뉴 좀 볼 수 있을까요?"
     }
    ],
    "tip": "",
    "no": 5,
    "day": 17
   },
   {
    "word": "dish",
    "pron": "디쉬",
    "pos": "n.",
    "meaning": "요리; 접시",
    "examples": [
     {
      "en": "Which dish is quick and easy to prepare?",
      "ko": "쉽고 빠르게 준비할 수 있는 요리는 뭔가요?"
     }
    ],
    "tip": "",
    "no": 6,
    "day": 17
   },
   {
    "word": "appetizer",
    "pron": "애피타이저",
    "pos": "n.",
    "meaning": "전채, 애피타이저",
    "examples": [],
    "tip": "",
    "no": 7,
    "day": 17
   },
   {
    "word": "main dish",
    "pron": "메인 디쉬",
    "pos": "n.",
    "meaning": "메인 요리",
    "examples": [],
    "tip": "",
    "no": 8,
    "day": 17
   },
   {
    "word": "side dish",
    "pron": "사이(ㄷ) 디쉬",
    "pos": "n.",
    "meaning": "곁들이는 요리",
    "examples": [],
    "tip": "",
    "no": 9,
    "day": 17
   },
   {
    "word": "dessert",
    "pron": "디저-(ㅌ)",
    "pos": "n.",
    "meaning": "디저트",
    "examples": [],
    "tip": "",
    "no": 10,
    "day": 17
   },
   {
    "word": "reserve",
    "pron": "리저-(ㅂ)",
    "pos": "v.",
    "meaning": "예약하다",
    "examples": [
     {
      "en": "Do we need a reservation?",
      "ko": "예약이 필요한가요?"
     }
    ],
    "tip": "",
    "no": 11,
    "day": 17
   },
   {
    "word": "reservation",
    "pron": "레저베이션",
    "pos": "n.",
    "meaning": "예약",
    "examples": [],
    "tip": "",
    "no": 12,
    "day": 17
   },
   {
    "word": "recommend",
    "pron": "레커멘(ㄷ)",
    "pos": "v.",
    "meaning": "추천하다",
    "examples": [
     {
      "en": "What would you recommend?",
      "ko": "오늘의 추천 메뉴는 무엇인가요?"
     }
    ],
    "tip": "",
    "no": 13,
    "day": 17
   },
   {
    "word": "order",
    "pron": "어-더",
    "pos": "v.",
    "meaning": "주문하다",
    "examples": [
     {
      "en": "Are you ready to order?",
      "ko": "주문을 받아도 될까요?"
     }
    ],
    "tip": "",
    "no": 14,
    "day": 17
   },
   {
    "word": "ingredient",
    "pron": "인그리-디언(ㅌ)",
    "pos": "n.",
    "meaning": "음식 재료",
    "examples": [],
    "tip": "",
    "no": 15,
    "day": 17
   },
   {
    "word": "steak",
    "pron": "스테익",
    "pos": "n.",
    "meaning": "스테이크",
    "examples": [
     {
      "en": "Well-done, please.",
      "ko": "완전히 익혀 주세요."
     }
    ],
    "tip": "스테이크 익힘의 정도는 bloody rare → rare → medium rare → medium → medium well → well-done → very well-done → burnt 순입니다.",
    "no": 16,
    "day": 17,
    "tipLabel": "💡 tip"
   },
   {
    "word": "sirloin",
    "pron": "서얼러인",
    "pos": "n.",
    "meaning": "등심",
    "examples": [],
    "tip": "",
    "no": 17,
    "day": 17
   },
   {
    "word": "rib",
    "pron": "립",
    "pos": "n.",
    "meaning": "갈비",
    "examples": [],
    "tip": "",
    "no": 18,
    "day": 17
   },
   {
    "word": "sausage",
    "pron": "서-시쥐",
    "pos": "n.",
    "meaning": "소시지",
    "examples": [],
    "tip": "",
    "no": 19,
    "day": 17
   },
   {
    "word": "fried potato",
    "pron": "프라잇 퍼테이토우",
    "pos": "",
    "meaning": "감자튀김",
    "examples": [],
    "tip": "우리가 패스트푸드점에서 흔히 먹는 French fries는 프랑스식 감자튀김으로 감자를 얇게 썰어서 튀긴 것을 말합니다.",
    "no": 20,
    "day": 17,
    "tipLabel": "💡 tip"
   },
   {
    "word": "soup",
    "pron": "수웁",
    "pos": "n.",
    "meaning": "국, 수프",
    "examples": [],
    "tip": "",
    "no": 21,
    "day": 17
   },
   {
    "word": "puree",
    "pron": "퓨어레이",
    "pos": "n.",
    "meaning": "퓨레",
    "examples": [],
    "tip": "채소나 과일을 으깨서 체로 거른 것을 말합니다.",
    "no": 22,
    "day": 17,
    "tipLabel": "💡 tip"
   },
   {
    "word": "salad",
    "pron": "샐럿",
    "pos": "n.",
    "meaning": "샐러드",
    "examples": [
     {
      "en": "That comes with a soup or salad. Which would you like?",
      "ko": "스프나 샐러드가 함께 나옵니다. 어느 것으로 드릴까요?"
     }
    ],
    "tip": "",
    "no": 23,
    "day": 17
   },
   {
    "word": "seafood",
    "pron": "시-푸웃",
    "pos": "n.",
    "meaning": "해산물",
    "examples": [],
    "tip": "seafood은 해산물 중에서 주로 조개류와 갑각류를 가리킵니다.",
    "no": 24,
    "day": 17,
    "tipLabel": "💡 tip"
   },
   {
    "word": "lobster",
    "pron": "랍스터",
    "pos": "n.",
    "meaning": "바닷가재, 랍스터",
    "examples": [
     {
      "en": "We specialize in lobsters.",
      "ko": "저희는 가재 요리를 전문으로 하고 있습니다."
     }
    ],
    "tip": "",
    "no": 25,
    "day": 17
   },
   {
    "word": "shellfish",
    "pron": "쉘피쉬",
    "pos": "n.",
    "meaning": "조개류, 갑각류",
    "examples": [],
    "tip": "",
    "no": 26,
    "day": 17
   },
   {
    "word": "oyster",
    "pron": "어이스터",
    "pos": "n.",
    "meaning": "굴",
    "examples": [],
    "tip": "oyster는 과묵한 사람을 뜻하기도 합니다. dumb as an oyster라고 하면 '꿀먹은 벙어리'란 의미입니다.",
    "no": 27,
    "day": 17,
    "tipLabel": "💡 tip"
   },
   {
    "word": "mussel",
    "pron": "머설",
    "pos": "n.",
    "meaning": "홍합",
    "examples": [],
    "tip": "",
    "no": 28,
    "day": 17
   },
   {
    "word": "mushroom",
    "pron": "머쉬루움",
    "pos": "n.",
    "meaning": "버섯",
    "examples": [],
    "tip": "mushroom은 우리가 먹는 식용버섯을 의미하며, 독버섯은 toadstool라고 합니다.",
    "no": 29,
    "day": 17,
    "tipLabel": "💡 tip"
   },
   {
    "word": "ice cream",
    "pron": "아이(ㅆ) 크리임",
    "pos": "",
    "meaning": "아이스크림",
    "examples": [
     {
      "en": "I will have some ice cream for dessert.",
      "ko": "디저트는 아이스크림으로 할게요."
     }
    ],
    "tip": "",
    "no": 30,
    "day": 17
   },
   {
    "word": "cheese",
    "pron": "치-(ㅈ)",
    "pos": "n.",
    "meaning": "치즈",
    "examples": [
     {
      "en": "Does the burger come with cheese?",
      "ko": "버거에 치즈가 들어가나요?"
     }
    ],
    "tip": "",
    "no": 31,
    "day": 17
   },
   {
    "word": "candy",
    "pron": "캔디",
    "pos": "n.",
    "meaning": "사탕",
    "examples": [],
    "tip": "",
    "no": 32,
    "day": 17
   },
   {
    "word": "bread",
    "pron": "브렛",
    "pos": "n.",
    "meaning": "빵",
    "examples": [
     {
      "en": "Which would you prefer, bread or rice?",
      "ko": "밥과 빵 중 어느 것으로 하시겠어요?"
     }
    ],
    "tip": "bread는 빵을 통칭하는 말이지만 보통 우리가 먹는 식빵도 bread라고 합니다. 색깔에 따라 표백한 밀가루로 만든 white bread, 통밀빵처럼 당밀을 넣어 찐 brown bread, 거친 호밀로 만든 약간 시큼한 맛의 black bread로 나뉩니다.",
    "no": 33,
    "day": 17,
    "tipLabel": "💡 tip"
   },
   {
    "word": "baguette",
    "pron": "배겟",
    "pos": "n.",
    "meaning": "바게트",
    "examples": [],
    "tip": "",
    "no": 34,
    "day": 17
   },
   {
    "word": "croissant",
    "pron": "크러사앙(ㅌ)",
    "pos": "n.",
    "meaning": "크루아상",
    "examples": [],
    "tip": "",
    "no": 35,
    "day": 17
   },
   {
    "word": "cake",
    "pron": "케익",
    "pos": "n.",
    "meaning": "케이크",
    "examples": [
     {
      "en": "We stuck candles on the birthday cake.",
      "ko": "우리는 생일 케이크에 초를 꽂았다."
     }
    ],
    "tip": "",
    "no": 36,
    "day": 17
   },
   {
    "word": "cookie",
    "pron": "쿠키",
    "pos": "n.",
    "meaning": "쿠키",
    "examples": [],
    "tip": "",
    "no": 37,
    "day": 17
   },
   {
    "word": "biscuit",
    "pron": "비스킷",
    "pos": "n.",
    "meaning": "소형 빵, 비스킷",
    "examples": [],
    "tip": "",
    "no": 38,
    "day": 17
   },
   {
    "word": "beverage",
    "pron": "베버리쥐",
    "pos": "n.",
    "meaning": "음료, 마실 것",
    "examples": [],
    "tip": "",
    "no": 39,
    "day": 17
   },
   {
    "word": "coffee",
    "pron": "커-피",
    "pos": "n.",
    "meaning": "커피",
    "examples": [
     {
      "en": "Let's talk over a cup of coffee.",
      "ko": "커피 한잔 하면서 얘기합시다."
     }
    ],
    "tip": "",
    "no": 40,
    "day": 17
   },
   {
    "word": "tea",
    "pron": "티-",
    "pos": "n.",
    "meaning": "차",
    "examples": [
     {
      "en": "I prefer tea to coffee.",
      "ko": "커피보다는 차를 좋아해요."
     }
    ],
    "tip": "영미권에서 tea는 보통 '홍차'를 의미합니다.",
    "no": 41,
    "day": 17,
    "tipLabel": "💡 tip"
   },
   {
    "word": "black tea",
    "pron": "블랙 티-",
    "pos": "n.",
    "meaning": "홍차",
    "examples": [],
    "tip": "",
    "no": 42,
    "day": 17
   },
   {
    "word": "juice",
    "pron": "쥬-(ㅆ)",
    "pos": "n.",
    "meaning": "주스",
    "examples": [],
    "tip": "",
    "no": 43,
    "day": 17
   },
   {
    "word": "soda",
    "pron": "소우더",
    "pos": "n.",
    "meaning": "탄산음료",
    "examples": [],
    "tip": "",
    "no": 44,
    "day": 17
   },
   {
    "word": "carbonated water",
    "pron": "카-버네이팃 워-터",
    "pos": "",
    "meaning": "탄산수",
    "examples": [],
    "tip": "",
    "no": 45,
    "day": 17
   },
   {
    "word": "alcohol",
    "pron": "앨커허얼",
    "pos": "n.",
    "meaning": "술",
    "examples": [],
    "tip": "drink도 음료나 술을 의미합니다.",
    "no": 46,
    "day": 17,
    "tipLabel": "💡 tip"
   },
   {
    "word": "teacup",
    "pron": "티-컵",
    "pos": "n.",
    "meaning": "찻잔",
    "examples": [],
    "tip": "",
    "no": 47,
    "day": 17
   },
   {
    "word": "glass",
    "pron": "글래(ㅅ)",
    "pos": "n.",
    "meaning": "(유리)컵",
    "examples": [
     {
      "en": "This glass is not clean. Can I have another one?",
      "ko": "컵이 더러운데요. 다른 것 갖다 주시겠어요?"
     }
    ],
    "tip": "",
    "no": 48,
    "day": 17
   },
   {
    "word": "straw",
    "pron": "스트러-",
    "pos": "n.",
    "meaning": "빨대",
    "examples": [],
    "tip": "",
    "no": 49,
    "day": 17
   },
   {
    "word": "bill",
    "pron": "빌",
    "pos": "n.",
    "meaning": "계산서",
    "examples": [
     {
      "en": "Does this bill include tax and service charge?",
      "ko": "계산서에 세금과 봉사료가 포함되어 있나요?"
     }
    ],
    "tip": "미국에서는 식당 등에서의 계산서를 check이라고도 합니다.",
    "no": 50,
    "day": 17,
    "tipLabel": "💡 tip"
   },
   {
    "word": "napkin",
    "pron": "냅킨",
    "pos": "n.",
    "meaning": "냅킨",
    "examples": [],
    "tip": "",
    "no": 51,
    "day": 17
   },
   {
    "word": "fork",
    "pron": "퍼-(ㅋ)",
    "pos": "n.",
    "meaning": "포크",
    "examples": [
     {
      "en": "I dropped my fork.",
      "ko": "포크를 떨어뜨렸습니다."
     }
    ],
    "tip": "",
    "no": 52,
    "day": 17
   },
   {
    "word": "spoon",
    "pron": "스푸운",
    "pos": "n.",
    "meaning": "숟가락",
    "examples": [],
    "tip": "",
    "no": 53,
    "day": 17
   },
   {
    "word": "teaspoon",
    "pron": "티-스푸운",
    "pos": "n.",
    "meaning": "찻숟가락, 티스푼",
    "examples": [],
    "tip": "",
    "no": 54,
    "day": 17
   },
   {
    "word": "chopsticks",
    "pron": "찹스틱(ㅅ)",
    "pos": "n.",
    "meaning": "젓가락",
    "examples": [],
    "tip": "젓가락을 말할 때, 두 개 중 한 개를 말하는 경우가 아니면 복수형으로 씁니다.",
    "no": 55,
    "day": 17,
    "tipLabel": "💡 tip"
   },
   {
    "word": "taste",
    "pron": "테이슷",
    "pos": "v.",
    "meaning": "맛; 맛보다, 맛이 나다",
    "examples": [
     {
      "en": "How does it taste?",
      "ko": "맛이 어때요?"
     }
    ],
    "tip": "taste는 '취향'이라는 뜻도 있어요.",
    "no": 56,
    "day": 17,
    "tipLabel": "💡 tip"
   },
   {
    "word": "salty",
    "pron": "서얼티",
    "pos": "a.",
    "meaning": "짠",
    "examples": [],
    "tip": "",
    "no": 57,
    "day": 17
   },
   {
    "word": "sweet",
    "pron": "스위잇",
    "pos": "a.",
    "meaning": "달콤한, 단",
    "examples": [
     {
      "en": "It's a little too sweet for me.",
      "ko": "좀 단 것 같아요."
     }
    ],
    "tip": "",
    "no": 58,
    "day": 17
   },
   {
    "word": "spicy",
    "pron": "스파이씨",
    "pos": "a.",
    "meaning": "매운",
    "examples": [
     {
      "en": "Don't make it too spicy, please.",
      "ko": "너무 맵지 않게 해 주세요."
     }
    ],
    "tip": "",
    "no": 59,
    "day": 17
   },
   {
    "word": "hot",
    "pron": "핫",
    "pos": "",
    "meaning": "매운",
    "examples": [],
    "tip": "",
    "no": 60,
    "day": 17
   },
   {
    "word": "sour",
    "pron": "사우어",
    "pos": "a.",
    "meaning": "신",
    "examples": [],
    "tip": "",
    "no": 61,
    "day": 17
   },
   {
    "word": "bitter",
    "pron": "비더",
    "pos": "a.",
    "meaning": "쓴",
    "examples": [],
    "tip": "",
    "no": 62,
    "day": 17
   },
   {
    "word": "specialty",
    "pron": "스페셜티",
    "pos": "n.",
    "meaning": "특선 메뉴",
    "examples": [],
    "tip": "",
    "no": 63,
    "day": 17
   },
   {
    "word": "choose",
    "pron": "추-(ㅈ)",
    "pos": "v.",
    "meaning": "선택하다",
    "examples": [],
    "tip": "패스트푸드점 등에서 포장할지를 묻는 점원의 질문은 Eat here or take away? 혹은 For here or to go?입니다.",
    "no": 64,
    "day": 17,
    "tipLabel": "💡 tip"
   },
   {
    "word": "take away",
    "pron": "테익 어웨이",
    "pos": "",
    "meaning": "가지고 가다",
    "examples": [],
    "tip": "",
    "no": 65,
    "day": 17
   },
   {
    "word": "rare",
    "pron": "레어",
    "pos": "a.",
    "meaning": "덜 익은",
    "examples": [],
    "tip": "",
    "no": 66,
    "day": 17
   },
   {
    "word": "medium",
    "pron": "미-디엄",
    "pos": "a.",
    "meaning": "중간으로 익은",
    "examples": [],
    "tip": "",
    "no": 67,
    "day": 17
   },
   {
    "word": "well-done",
    "pron": "웰던",
    "pos": "a.",
    "meaning": "완전히 익은",
    "examples": [],
    "tip": "",
    "no": 68,
    "day": 17
   },
   {
    "word": "tenderloin",
    "pron": "텐더러인",
    "pos": "n.",
    "meaning": "안심",
    "examples": [],
    "tip": "",
    "no": 69,
    "day": 17
   },
   {
    "word": "cream",
    "pron": "크리임",
    "pos": "n.",
    "meaning": "크림",
    "examples": [
     {
      "en": "With sugar and cream, please.",
      "ko": "설탕과 크림을 넣어 주세요."
     }
    ],
    "tip": "",
    "no": 70,
    "day": 17
   },
   {
    "word": "clam",
    "pron": "클램",
    "pos": "n.",
    "meaning": "조개, 대합",
    "examples": [],
    "tip": "",
    "no": 71,
    "day": 17
   },
   {
    "word": "champignon",
    "pron": "섐피년",
    "pos": "n.",
    "meaning": "양송이 버섯",
    "examples": [],
    "tip": "champignon은 유럽 원산의 송이과 버섯으로 샴피뇽 버섯이라고도 하며, 보통 송이 버섯을 말할 때는 mushroom 혹은 button mushroom이라고 합니다.",
    "no": 72,
    "day": 17,
    "tipLabel": "💡 tip"
   },
   {
    "word": "truffle",
    "pron": "트러플",
    "pos": "n.",
    "meaning": "송로 버섯",
    "examples": [],
    "tip": "",
    "no": 73,
    "day": 17
   },
   {
    "word": "snail",
    "pron": "스네일",
    "pos": "n.",
    "meaning": "달팽이",
    "examples": [],
    "tip": "",
    "no": 74,
    "day": 17
   },
   {
    "word": "foie gras",
    "pron": "프와- 그라-",
    "pos": "",
    "meaning": "푸아그라",
    "examples": [],
    "tip": "살찌운 거위나 집오리의 간을 이용한 음식입니다.",
    "no": 75,
    "day": 17,
    "tipLabel": "💡 tip"
   },
   {
    "word": "yogurt",
    "pron": "요우것",
    "pos": "n.",
    "meaning": "요거트(요구르트)",
    "examples": [],
    "tip": "",
    "no": 76,
    "day": 17
   },
   {
    "word": "chocolate",
    "pron": "처-컬럿",
    "pos": "n.",
    "meaning": "초콜릿",
    "examples": [],
    "tip": "",
    "no": 77,
    "day": 17
   },
   {
    "word": "garlic bread",
    "pron": "갈-릭 브렛",
    "pos": "",
    "meaning": "마늘빵",
    "examples": [],
    "tip": "",
    "no": 78,
    "day": 17
   },
   {
    "word": "pancake",
    "pron": "팬케익",
    "pos": "n.",
    "meaning": "팬케이크",
    "examples": [],
    "tip": "hot cake라고도 하지만 pancake가 일반적입니다.",
    "no": 79,
    "day": 17,
    "tipLabel": "💡 tip"
   },
   {
    "word": "sponge cake",
    "pron": "스펀쥐 케익",
    "pos": "",
    "meaning": "스펀지 케이크, 카스텔라",
    "examples": [],
    "tip": "카스텔라는 포르투갈어인 castella에서 온 말입니다.",
    "no": 80,
    "day": 17,
    "tipLabel": "💡 tip"
   },
   {
    "word": "decaffeinated coffee",
    "pron": "디-캐퍼네이팃 커-피",
    "pos": "",
    "meaning": "카페인 없는 커피",
    "examples": [],
    "tip": "",
    "no": 81,
    "day": 17
   },
   {
    "word": "decaf",
    "pron": "디-캐(ㅍ)",
    "pos": "",
    "meaning": "카페인 없는 커피",
    "examples": [],
    "tip": "",
    "no": 82,
    "day": 17
   },
   {
    "word": "caffeine-free coffee",
    "pron": "캐페인-프리- 커-피",
    "pos": "",
    "meaning": "카페인 없는 커피",
    "examples": [],
    "tip": "",
    "no": 83,
    "day": 17
   },
   {
    "word": "espresso",
    "pron": "에스프레소우",
    "pos": "n.",
    "meaning": "에스프레소",
    "examples": [],
    "tip": "까맣게 볶은 커피콩에 증기를 쐬어 만드는 진한 커피입니다.",
    "no": 84,
    "day": 17,
    "tipLabel": "💡 tip"
   },
   {
    "word": "café latte",
    "pron": "캐페이 래-테이",
    "pos": "",
    "meaning": "카페라떼",
    "examples": [],
    "tip": "에스프레소에 거품을 일으킨 뜨거운 우유를 섞어 만든 것입니다.",
    "no": 85,
    "day": 17,
    "tipLabel": "💡 tip"
   },
   {
    "word": "cappuccino",
    "pron": "캐푸치-노우",
    "pos": "n.",
    "meaning": "카푸치노",
    "examples": [],
    "tip": "에스프레소에 진한 크림과 향료를 넣은 커피입니다.",
    "no": 86,
    "day": 17,
    "tipLabel": "💡 tip"
   },
   {
    "word": "café mocha",
    "pron": "캐페이 모우커",
    "pos": "",
    "meaning": "카페모카",
    "examples": [],
    "tip": "에스프레소에 초콜릿 시럽과 거품을 일으킨 우유를 섞은 커피입니다.",
    "no": 87,
    "day": 17,
    "tipLabel": "💡 tip"
   },
   {
    "word": "green tea",
    "pron": "그리인 티-",
    "pos": "n.",
    "meaning": "녹차",
    "examples": [],
    "tip": "",
    "no": 88,
    "day": 17
   },
   {
    "word": "herb tea",
    "pron": "어-(ㅂ) 티-",
    "pos": "n.",
    "meaning": "허브차",
    "examples": [],
    "tip": "",
    "no": 89,
    "day": 17
   },
   {
    "word": "orange juice",
    "pron": "어-린쥐 쥬-(ㅆ)",
    "pos": "",
    "meaning": "오렌지 주스",
    "examples": [],
    "tip": "",
    "no": 90,
    "day": 17
   },
   {
    "word": "lemonade",
    "pron": "레머네이(ㄷ)",
    "pos": "n.",
    "meaning": "레모네이드",
    "examples": [],
    "tip": "",
    "no": 91,
    "day": 17
   },
   {
    "word": "champagne",
    "pron": "섐페인",
    "pos": "n.",
    "meaning": "샴페인",
    "examples": [],
    "tip": "",
    "no": 92,
    "day": 17
   },
   {
    "word": "beer",
    "pron": "비어",
    "pos": "n.",
    "meaning": "맥주",
    "examples": [
     {
      "en": "Let's get a beer.",
      "ko": "맥주 한잔 합시다."
     }
    ],
    "tip": "",
    "no": 93,
    "day": 17
   },
   {
    "word": "whisky",
    "pron": "위스키",
    "pos": "n.",
    "meaning": "위스키",
    "examples": [
     {
      "en": "Could I have a whisky and water, please?",
      "ko": "위스키에 물을 타 줄래요?"
     }
    ],
    "tip": "",
    "no": 94,
    "day": 17
   },
   {
    "word": "cider",
    "pron": "싸이더",
    "pos": "n.",
    "meaning": "사과주, 사과 주스",
    "examples": [],
    "tip": "cider에는 즙을 발효시키지 않은 단맛의 sweet cider와 발효시킨 hard cider가 있는데, 보통 미국에서는 sweet cider, 영국에서는 hard sider를 가리킵니다.",
    "no": 95,
    "day": 17,
    "tipLabel": "💡 tip"
   },
   {
    "word": "wine",
    "pron": "와인",
    "pos": "n.",
    "meaning": "포도주, 와인",
    "examples": [
     {
      "en": "You can't put new wine in old bottles.",
      "ko": "새 술은 새 부대에 담아야 한다."
     }
    ],
    "tip": "",
    "no": 96,
    "day": 17
   },
   {
    "word": "ice",
    "pron": "아이(ㅆ)",
    "pos": "n.",
    "meaning": "얼음",
    "examples": [],
    "tip": "",
    "no": 97,
    "day": 17
   },
   {
    "word": "tax",
    "pron": "택(ㅅ)",
    "pos": "n.",
    "meaning": "세금",
    "examples": [],
    "tip": "",
    "no": 98,
    "day": 17
   },
   {
    "word": "service charge",
    "pron": "서-비(ㅆ) 차-쥐",
    "pos": "n.",
    "meaning": "(계산서에 추가되는) 봉사료",
    "examples": [],
    "tip": "",
    "no": 99,
    "day": 17
   },
   {
    "word": "tip",
    "pron": "팁",
    "pos": "n.",
    "meaning": "팁",
    "examples": [],
    "tip": "servive charge는 계산서에 부과되는 항목이므로 반드시 지불해야 하지만, tip은 자발적으로 내는 것이므로 상황에 따라 적절한 금액을 추가로 더 내면 됩니다.",
    "no": 100,
    "day": 17,
    "tipLabel": "💡 tip"
   },
   {
    "word": "plain",
    "pron": "플레인",
    "pos": "a.",
    "meaning": "담백한",
    "examples": [
     {
      "en": "It's plain.",
      "ko": "맛이 담백해요."
     }
    ],
    "tip": "",
    "no": 101,
    "day": 17
   },
   {
    "word": "greasy",
    "pron": "그리-시",
    "pos": "a.",
    "meaning": "느끼한",
    "examples": [
     {
      "en": "I think it's a little greasy.",
      "ko": "좀 기름진 것 같은데요."
     }
    ],
    "tip": "",
    "no": 102,
    "day": 17
   },
   {
    "word": "fishy",
    "pron": "피쉬",
    "pos": "a.",
    "meaning": "비린내 나는",
    "examples": [],
    "tip": "",
    "no": 103,
    "day": 17
   },
   {
    "word": "stale",
    "pron": "스테일",
    "pos": "a.",
    "meaning": "상한, 부패된",
    "examples": [
     {
      "en": "I'm afraid this food is stale.",
      "ko": "이건 상한 것 같은데요."
     }
    ],
    "tip": "",
    "no": 104,
    "day": 17
   }
  ]
 },
 {
  "day": 18,
  "title": "Unit 18. 쇼핑",
  "words": [
   {
    "word": "store",
    "pron": "스터-",
    "pos": "n.",
    "meaning": "가게, 상점",
    "examples": [],
    "tip": "",
    "no": 1,
    "day": 18
   },
   {
    "word": "shop",
    "pron": "샵",
    "pos": "n.",
    "meaning": "가게, 상점 v. 물건을 사다, 쇼핑하다",
    "examples": [],
    "tip": "",
    "no": 2,
    "day": 18
   },
   {
    "word": "market",
    "pron": "마-킷",
    "pos": "n.",
    "meaning": "시장",
    "examples": [],
    "tip": "supermarket은 우리가 흔히 말하는 '슈퍼'와는 개념이 다르며, 식품이나 가정용품을 구입할 수 있는 '대형 매장'을 의미합니다.",
    "no": 3,
    "day": 18,
    "tipLabel": "💡 tip"
   },
   {
    "word": "flea market",
    "pron": "플리- 마-킷",
    "pos": "n.",
    "meaning": "벼룩시장",
    "examples": [],
    "tip": "",
    "no": 4,
    "day": 18
   },
   {
    "word": "supermarket",
    "pron": "수-퍼마-컷",
    "pos": "n.",
    "meaning": "슈퍼마켓, 마트",
    "examples": [],
    "tip": "",
    "no": 5,
    "day": 18
   },
   {
    "word": "department store",
    "pron": "디파-트먼(트) 스토-",
    "pos": "n.",
    "meaning": "백화점",
    "examples": [],
    "tip": "영국에서는 the stores라고도 합니다.",
    "no": 6,
    "day": 18,
    "tipLabel": "💡 tip"
   },
   {
    "word": "kiosk",
    "pron": "키-아슥",
    "pos": "n.",
    "meaning": "(매점 등의) 간이 건조물",
    "examples": [],
    "tip": "복권이나 간단한 간식거리를 파는 부스 스타일의 매점을 말합니다.",
    "no": 7,
    "day": 18,
    "tipLabel": "💡 tip"
   },
   {
    "word": "buy",
    "pron": "바이",
    "pos": "v.",
    "meaning": "사다, 구입하다",
    "examples": [
     {
      "en": "Can I buy it on an installment plan?",
      "ko": "할부로 구입이 가능한가요?"
     }
    ],
    "tip": "",
    "no": 8,
    "day": 18
   },
   {
    "word": "purchase",
    "pron": "퍼-처(ㅅ)",
    "pos": "",
    "meaning": "= purchase",
    "examples": [],
    "tip": "purchase는 buy보다 격식을 차린 말로, 일용품 구입에는 보통 buy를 씁니다.",
    "no": 9,
    "day": 18,
    "tipLabel": "💡 tip"
   },
   {
    "word": "product",
    "pron": "프라덕(ㅌ)",
    "pos": "n.",
    "meaning": "상품, 물건",
    "examples": [],
    "tip": "",
    "no": 10,
    "day": 18
   },
   {
    "word": "goods",
    "pron": "굿(ㅈ)",
    "pos": "",
    "meaning": "= goods",
    "examples": [],
    "tip": "",
    "no": 11,
    "day": 18
   },
   {
    "word": "sell",
    "pron": "셀",
    "pos": "v.",
    "meaning": "팔다, 판매하다",
    "examples": [],
    "tip": "",
    "no": 12,
    "day": 18
   },
   {
    "word": "pay",
    "pron": "페이",
    "pos": "v.",
    "meaning": "지불하다",
    "examples": [
     {
      "en": "How would you like to pay?",
      "ko": "어떻게 지불하실 건가요?"
     },
     {
      "en": "I'd like to pay in cash.",
      "ko": "현금으로 하겠어요."
     }
    ],
    "tip": "지불 수단에 따라 pay 뒤에 오는 전치사가 달라지는 것에 주의합니다.",
    "no": 13,
    "day": 18,
    "tipLabel": "💡 tip"
   },
   {
    "word": "pay by credit card",
    "pron": "페이 바이 크레딧 카-(ㄷ)",
    "pos": "",
    "meaning": "신용카드로 지불하다",
    "examples": [],
    "tip": "",
    "no": 14,
    "day": 18
   },
   {
    "word": "customer",
    "pron": "커스터머",
    "pos": "n.",
    "meaning": "손님, 고객",
    "examples": [],
    "tip": "customer는 어떤 특정한 가게에서 물건을 사는 사람을, shopper는 일반적으로 물건을 사는 사람을 가리킵니다.",
    "no": 15,
    "day": 18,
    "tipLabel": "💡 tip"
   },
   {
    "word": "shopper",
    "pron": "샤퍼",
    "pos": "",
    "meaning": "= shopper",
    "examples": [],
    "tip": "",
    "no": 16,
    "day": 18
   },
   {
    "word": "salesclerk",
    "pron": "세일(ㅈ)클러억",
    "pos": "n.",
    "meaning": "점원, 판매원",
    "examples": [],
    "tip": "남자 점원은 salesman, 여자 점원은 saleswoman이라고도 합니다.",
    "no": 17,
    "day": 18,
    "tipLabel": "💡 tip"
   },
   {
    "word": "salesperson",
    "pron": "세일(ㅈ)퍼-슨",
    "pos": "",
    "meaning": "= salesperson",
    "examples": [],
    "tip": "",
    "no": 18,
    "day": 18
   },
   {
    "word": "counter",
    "pron": "카운터",
    "pos": "n.",
    "meaning": "계산대",
    "examples": [
     {
      "en": "Where is the check-out counter?",
      "ko": "계산대는 어디 있어요?"
     }
    ],
    "tip": "",
    "no": 19,
    "day": 18
   },
   {
    "word": "cashier",
    "pron": "캐쉬어",
    "pos": "n.",
    "meaning": "계산원",
    "examples": [],
    "tip": "",
    "no": 20,
    "day": 18
   },
   {
    "word": "receipt",
    "pron": "리씨잇",
    "pos": "n.",
    "meaning": "영수증",
    "examples": [
     {
      "en": "Here is your receipt.",
      "ko": "여기 영수증이요."
     }
    ],
    "tip": "",
    "no": 21,
    "day": 18
   },
   {
    "word": "voucher",
    "pron": "바우춰",
    "pos": "n.",
    "meaning": "영수증, 증거 서류",
    "examples": [],
    "tip": "",
    "no": 22,
    "day": 18
   },
   {
    "word": "expensive",
    "pron": "익스펜시(ㅂ)",
    "pos": "a.",
    "meaning": "비싼",
    "examples": [],
    "tip": "expensive는 주로 물건에 대해 쓰므로, 가격에 대해 쓸 때는 a high price라고 합니다.",
    "no": 23,
    "day": 18,
    "tipLabel": "💡 tip"
   },
   {
    "word": "high priced",
    "pron": "하이 프라이쓱",
    "pos": "",
    "meaning": "= high priced",
    "examples": [],
    "tip": "",
    "no": 24,
    "day": 18
   },
   {
    "word": "cheap",
    "pron": "취입",
    "pos": "a.",
    "meaning": "싼",
    "examples": [],
    "tip": "cheap은 종종 가격은 싸지만 품질은 좋지 않다는 의미를 내포합니다.",
    "no": 25,
    "day": 18,
    "tipLabel": "💡 tip"
   },
   {
    "word": "low priced",
    "pron": "로우 프라이쓱",
    "pos": "",
    "meaning": "= low priced",
    "examples": [],
    "tip": "",
    "no": 26,
    "day": 18
   },
   {
    "word": "refund",
    "pron": "리펀(드)",
    "pos": "n.",
    "meaning": "환불 v. 환불하다",
    "examples": [],
    "tip": "",
    "no": 27,
    "day": 18
   },
   {
    "word": "sale",
    "pron": "세일",
    "pos": "n.",
    "meaning": "특매, 염가 판매",
    "examples": [
     {
      "en": "How long is the sale?",
      "ko": "세일 기간은 얼마나 되나요?"
     }
    ],
    "tip": "garage sale은 주택 차고에서 하는 세일로, 주로 주말인 금요일이나 토요일에 행하며 신문 광고란에 내거나 직접 종이에 써 붙여 알립니다. 비슷한 말로 yard sale이 있는데, 주택 앞마당에서 하는 중고품 세일을 말합니다.",
    "no": 28,
    "day": 18,
    "tipLabel": "💡 tip"
   },
   {
    "word": "return",
    "pron": "리터언",
    "pos": "v.",
    "meaning": "반환하다",
    "examples": [],
    "tip": "",
    "no": 29,
    "day": 18
   },
   {
    "word": "discount",
    "pron": "디스카운(트)",
    "pos": "n.",
    "meaning": "할인 v. 할인하다",
    "examples": [],
    "tip": "",
    "no": 30,
    "day": 18
   },
   {
    "word": "showcase",
    "pron": "쇼우케이(ㅅ)",
    "pos": "n.",
    "meaning": "전시, 진열, 진열용 유리 상자",
    "examples": [],
    "tip": "",
    "no": 31,
    "day": 18
   },
   {
    "word": "instant food",
    "pron": "인스턴(ㅌ) 푸웃",
    "pos": "",
    "meaning": "인스턴트 식품",
    "examples": [],
    "tip": "",
    "no": 32,
    "day": 18
   },
   {
    "word": "convenience food",
    "pron": "컨비니언(ㅆ) 푸웃",
    "pos": "",
    "meaning": "= convenience food",
    "examples": [],
    "tip": "",
    "no": 33,
    "day": 18
   },
   {
    "word": "butcher shop",
    "pron": "버춰 샵",
    "pos": "",
    "meaning": "정육점",
    "examples": [],
    "tip": "",
    "no": 34,
    "day": 18
   },
   {
    "word": "meat shop",
    "pron": "미잇 샵",
    "pos": "",
    "meaning": "= meat shop",
    "examples": [],
    "tip": "",
    "no": 35,
    "day": 18
   },
   {
    "word": "seafood store",
    "pron": "시-푸웃 스터-",
    "pos": "",
    "meaning": "생선 가게",
    "examples": [],
    "tip": "",
    "no": 36,
    "day": 18
   },
   {
    "word": "seafood market",
    "pron": "시-푸웃 마-킷",
    "pos": "",
    "meaning": "= seafood market",
    "examples": [],
    "tip": "",
    "no": 37,
    "day": 18
   },
   {
    "word": "bakery",
    "pron": "베이커리",
    "pos": "n.",
    "meaning": "빵집",
    "examples": [],
    "tip": "",
    "no": 38,
    "day": 18
   },
   {
    "word": "ice-cream parlor",
    "pron": "아이(ㅆ)크리임 파-러",
    "pos": "",
    "meaning": "아이스크림 가게",
    "examples": [],
    "tip": "",
    "no": 39,
    "day": 18
   },
   {
    "word": "bookstore",
    "pron": "북스터-",
    "pos": "n.",
    "meaning": "서점",
    "examples": [],
    "tip": "",
    "no": 40,
    "day": 18
   },
   {
    "word": "pharmacy",
    "pron": "파-머씨",
    "pos": "n.",
    "meaning": "약국",
    "examples": [],
    "tip": "",
    "no": 41,
    "day": 18
   },
   {
    "word": "drugstore",
    "pron": "드럭스토-",
    "pos": "n.",
    "meaning": "드러그스토어, 약국",
    "examples": [],
    "tip": "미국에서의 drugstore는 약뿐 아니라 화장품이나 일용잡화 및 담배, 신문도 판매하고 있는 숍을 가리킵니다.",
    "no": 42,
    "day": 18,
    "tipLabel": "💡 tip"
   },
   {
    "word": "travel agency",
    "pron": "츠래블 에이전씨",
    "pos": "",
    "meaning": "여행사",
    "examples": [],
    "tip": "",
    "no": 43,
    "day": 18
   },
   {
    "word": "tourist bureau",
    "pron": "투어리슷 뷰어로우",
    "pos": "",
    "meaning": "= tourist bureau",
    "examples": [],
    "tip": "",
    "no": 44,
    "day": 18
   },
   {
    "word": "beauty parlor",
    "pron": "뷰-티 파-러",
    "pos": "",
    "meaning": "미용실",
    "examples": [],
    "tip": "",
    "no": 45,
    "day": 18
   },
   {
    "word": "beauty salon",
    "pron": "뷰-티 서란",
    "pos": "",
    "meaning": "= beauty salon",
    "examples": [],
    "tip": "",
    "no": 46,
    "day": 18
   },
   {
    "word": "barbershop",
    "pron": "바-버샵",
    "pos": "n.",
    "meaning": "이발소",
    "examples": [],
    "tip": "영국에서는 barber's shop이라고 합니다.",
    "no": 47,
    "day": 18,
    "tipLabel": "💡 tip"
   },
   {
    "word": "flower shop",
    "pron": "플라워 샵",
    "pos": "",
    "meaning": "꽃집",
    "examples": [],
    "tip": "",
    "no": 48,
    "day": 18
   },
   {
    "word": "clothing store",
    "pron": "클로우딩 스터-",
    "pos": "",
    "meaning": "옷가게",
    "examples": [],
    "tip": "",
    "no": 49,
    "day": 18
   },
   {
    "word": "fitting room",
    "pron": "피딩 루움",
    "pos": "",
    "meaning": "피팅룸, 탈의실",
    "examples": [],
    "tip": "",
    "no": 50,
    "day": 18
   },
   {
    "word": "size",
    "pron": "사이(ㅈ)",
    "pos": "n.",
    "meaning": "사이즈",
    "examples": [
     {
      "en": "What size do you wear?",
      "ko": "사이즈가 어떻게 되세요?"
     }
    ],
    "tip": "미국의 옷 사이즈는 한국의 표기 방법과 다릅니다. 성인의 상의는 XS~XXL로 표기되어 있습니다. 그리고 여성복의 하의는 size 2~16으로 되어 있는데, size 2는 허리 24.5인치, size 16은 허리 33인치이며, size의 단위는 짝수로 커집니다.",
    "no": 51,
    "day": 18,
    "tipLabel": "💡 tip"
   },
   {
    "word": "shoe store",
    "pron": "슈- 스터-",
    "pos": "",
    "meaning": "신발 가게",
    "examples": [],
    "tip": "",
    "no": 52,
    "day": 18
   },
   {
    "word": "optician",
    "pron": "압티션",
    "pos": "n.",
    "meaning": "안경점",
    "examples": [],
    "tip": "",
    "no": 53,
    "day": 18
   },
   {
    "word": "stationery store",
    "pron": "스테이셔너리 스터-",
    "pos": "n.",
    "meaning": "문구점",
    "examples": [],
    "tip": "",
    "no": 54,
    "day": 18
   },
   {
    "word": "real estate agent",
    "pron": "리얼 이스테잇 에이전(ㅌ)",
    "pos": "",
    "meaning": "부동산",
    "examples": [],
    "tip": "공인중개사는 realtor라고 합니다.",
    "no": 55,
    "day": 18,
    "tipLabel": "💡 tip"
   },
   {
    "word": "cosmetics store",
    "pron": "카즈메틱(ㅅ) 스터-",
    "pos": "",
    "meaning": "화장품 가게",
    "examples": [],
    "tip": "",
    "no": 56,
    "day": 18
   },
   {
    "word": "perfume",
    "pron": "퍼-퓨움",
    "pos": "n.",
    "meaning": "향수",
    "examples": [],
    "tip": "",
    "no": 57,
    "day": 18
   },
   {
    "word": "laundry",
    "pron": "러언드리",
    "pos": "n.",
    "meaning": "세탁소",
    "examples": [],
    "tip": "",
    "no": 58,
    "day": 18
   },
   {
    "word": "dry cleaning",
    "pron": "드라이 클리-닝",
    "pos": "n.",
    "meaning": "드라이 크리닝",
    "examples": [],
    "tip": "",
    "no": 59,
    "day": 18
   },
   {
    "word": "do the ironing",
    "pron": "두 더 아이어닝",
    "pos": "",
    "meaning": "다림질하다",
    "examples": [],
    "tip": "",
    "no": 60,
    "day": 18
   },
   {
    "word": "repair",
    "pron": "리페어",
    "pos": "v.",
    "meaning": "수선하다, 수리하다",
    "examples": [],
    "tip": "",
    "no": 61,
    "day": 18
   },
   {
    "word": "fix",
    "pron": "픽(ㅅ)",
    "pos": "",
    "meaning": "수선하다, 수리하다",
    "examples": [],
    "tip": "",
    "no": 62,
    "day": 18
   },
   {
    "word": "mend",
    "pron": "멘(ㄷ)",
    "pos": "",
    "meaning": "수선하다, 수리하다",
    "examples": [],
    "tip": "",
    "no": 63,
    "day": 18
   },
   {
    "word": "stain",
    "pron": "스테인",
    "pos": "n.",
    "meaning": "얼룩",
    "examples": [],
    "tip": "",
    "no": 64,
    "day": 18
   },
   {
    "word": "shopping",
    "pron": "샤핑",
    "pos": "n.",
    "meaning": "쇼핑",
    "examples": [
     {
      "en": "Why don't we go shopping together?",
      "ko": "같이 쇼핑하러 가지 않을래?"
     }
    ],
    "tip": "",
    "no": 65,
    "day": 18
   },
   {
    "word": "go shopping",
    "pron": "고우 샤핑",
    "pos": "",
    "meaning": "쇼핑하다",
    "examples": [],
    "tip": "",
    "no": 66,
    "day": 18
   },
   {
    "word": "mall",
    "pron": "머얼",
    "pos": "n.",
    "meaning": "쇼핑센터",
    "examples": [],
    "tip": "",
    "no": 67,
    "day": 18
   },
   {
    "word": "grocery store",
    "pron": "그로우써리 스토-",
    "pos": "",
    "meaning": "식료잡화점",
    "examples": [],
    "tip": "",
    "no": 68,
    "day": 18
   },
   {
    "word": "retail store",
    "pron": "리-테일 스토-",
    "pos": "",
    "meaning": "소매 가게",
    "examples": [],
    "tip": "",
    "no": 69,
    "day": 18
   },
   {
    "word": "frozen products",
    "pron": "프로우즌 프라덕(ㅊ)",
    "pos": "",
    "meaning": "냉동 제품",
    "examples": [],
    "tip": "",
    "no": 70,
    "day": 18
   },
   {
    "word": "refrigerated products",
    "pron": "리프리저레잇 프라덕(ㅊ)",
    "pos": "",
    "meaning": "냉장 제품",
    "examples": [],
    "tip": "",
    "no": 71,
    "day": 18
   },
   {
    "word": "farm products",
    "pron": "파암 프라덕(ㅊ)",
    "pos": "",
    "meaning": "농산물",
    "examples": [],
    "tip": "",
    "no": 72,
    "day": 18
   },
   {
    "word": "marine products",
    "pron": "머라인 프라덕(ㅊ)",
    "pos": "",
    "meaning": "수산물",
    "examples": [],
    "tip": "",
    "no": 73,
    "day": 18
   },
   {
    "word": "dairy goods",
    "pron": "데어리 굿(ㅈ)",
    "pos": "",
    "meaning": "유제품",
    "examples": [],
    "tip": "",
    "no": 74,
    "day": 18
   },
   {
    "word": "industrial products",
    "pron": "인더스츠리얼 프라덕(ㅊ)",
    "pos": "",
    "meaning": "공산품",
    "examples": [],
    "tip": "",
    "no": 75,
    "day": 18
   },
   {
    "word": "electric appliances",
    "pron": "일렉츠릭 어플라이언씨(ㅅ)",
    "pos": "",
    "meaning": "전자 제품, 전기 제품",
    "examples": [],
    "tip": "",
    "no": 76,
    "day": 18
   },
   {
    "word": "date of expiration",
    "pron": "데잇 어(ㅂ) 엑스퍼레이션",
    "pos": "",
    "meaning": "유통기한",
    "examples": [],
    "tip": "",
    "no": 77,
    "day": 18
   },
   {
    "word": "stock",
    "pron": "스탁",
    "pos": "n.",
    "meaning": "재고",
    "examples": [
     {
      "en": "I'm sorry, it's out of stock right now.",
      "ko": "죄송합니다만, 지금은 재고가 없습니다."
     }
    ],
    "tip": "",
    "no": 78,
    "day": 18
   },
   {
    "word": "out of stock",
    "pron": "아웃 어(ㅂ) 스탁",
    "pos": "",
    "meaning": "품절인, 재고가 없는",
    "examples": [],
    "tip": "",
    "no": 79,
    "day": 18
   },
   {
    "word": "sold-out",
    "pron": "소울다웃",
    "pos": "",
    "meaning": "= sold-out",
    "examples": [],
    "tip": "",
    "no": 80,
    "day": 18
   },
   {
    "word": "vendor",
    "pron": "벤더",
    "pos": "n.",
    "meaning": "행상인, 파는 사람",
    "examples": [],
    "tip": "",
    "no": 81,
    "day": 18
   },
   {
    "word": "pay in cash",
    "pron": "페이 인 캐쉬",
    "pos": "",
    "meaning": "현금으로 지불하다",
    "examples": [],
    "tip": "",
    "no": 82,
    "day": 18
   },
   {
    "word": "change",
    "pron": "체인쥐",
    "pos": "v.",
    "meaning": "바꾸다",
    "examples": [],
    "tip": "",
    "no": 83,
    "day": 18
   },
   {
    "word": "economical",
    "pron": "이-커나-미컬",
    "pos": "a.",
    "meaning": "경제적인, 절약하는",
    "examples": [],
    "tip": "",
    "no": 84,
    "day": 18
   },
   {
    "word": "clearance",
    "pron": "클리어런(ㅆ)",
    "pos": "n.",
    "meaning": "재고 정리 세일",
    "examples": [],
    "tip": "",
    "no": 85,
    "day": 18
   },
   {
    "word": "year-end sale",
    "pron": "이어엔(드) 세일",
    "pos": "",
    "meaning": "연말 세일",
    "examples": [],
    "tip": "",
    "no": 86,
    "day": 18
   },
   {
    "word": "rummage sale",
    "pron": "러미쥐 세일",
    "pos": "n.",
    "meaning": "자선 바자",
    "examples": [],
    "tip": "",
    "no": 87,
    "day": 18
   },
   {
    "word": "garage sale",
    "pron": "거라-쥐 세일",
    "pos": "n.",
    "meaning": "차고 세일(중고품 세일)",
    "examples": [],
    "tip": "",
    "no": 88,
    "day": 18
   },
   {
    "word": "sales promotion",
    "pron": "세일(ㅈ) 프러모우션",
    "pos": "",
    "meaning": "판매 촉진",
    "examples": [],
    "tip": "",
    "no": 89,
    "day": 18
   },
   {
    "word": "sales promotion gift",
    "pron": "세일(ㅈ) 프러모우션 기풋",
    "pos": "",
    "meaning": "판촉물",
    "examples": [],
    "tip": "",
    "no": 90,
    "day": 18
   },
   {
    "word": "quality",
    "pron": "쿠얼러티",
    "pos": "n.",
    "meaning": "품질",
    "examples": [],
    "tip": "",
    "no": 91,
    "day": 18
   },
   {
    "word": "fruit shop",
    "pron": "프루웃 샵",
    "pos": "",
    "meaning": "과일 가게",
    "examples": [],
    "tip": "",
    "no": 92,
    "day": 18
   },
   {
    "word": "dessert shop",
    "pron": "디저-(ㅌ) 샵",
    "pos": "",
    "meaning": "디저트 가게",
    "examples": [],
    "tip": "",
    "no": 93,
    "day": 18
   },
   {
    "word": "hanger",
    "pron": "행어",
    "pos": "n.",
    "meaning": "옷걸이",
    "examples": [],
    "tip": "",
    "no": 94,
    "day": 18
   },
   {
    "word": "mannequin",
    "pron": "매니킨",
    "pos": "n.",
    "meaning": "마네킹",
    "examples": [],
    "tip": "",
    "no": 95,
    "day": 18
   },
   {
    "word": "mirror",
    "pron": "미러",
    "pos": "n.",
    "meaning": "거울",
    "examples": [],
    "tip": "",
    "no": 96,
    "day": 18
   },
   {
    "word": "sporting-goods store",
    "pron": "스퍼-팅굿(ㅈ) 스토-",
    "pos": "",
    "meaning": "스포츠 용품점",
    "examples": [],
    "tip": "",
    "no": 97,
    "day": 18
   },
   {
    "word": "toy store",
    "pron": "터이 스토-",
    "pos": "",
    "meaning": "장난감 가게",
    "examples": [],
    "tip": "",
    "no": 98,
    "day": 18
   },
   {
    "word": "jewelry shop",
    "pron": "쥬-얼리 샵",
    "pos": "",
    "meaning": "보석 가게",
    "examples": [],
    "tip": "",
    "no": 99,
    "day": 18
   },
   {
    "word": "perfumery",
    "pron": "퍼퓨-머리",
    "pos": "n.",
    "meaning": "향수 가게",
    "examples": [],
    "tip": "",
    "no": 100,
    "day": 18
   },
   {
    "word": "toner",
    "pron": "토우너",
    "pos": "n.",
    "meaning": "스킨(세면 직후 바르는 액체 타입의 화장품)",
    "examples": [],
    "tip": "",
    "no": 101,
    "day": 18
   },
   {
    "word": "lotion",
    "pron": "로우션",
    "pos": "n.",
    "meaning": "로션",
    "examples": [],
    "tip": "",
    "no": 102,
    "day": 18
   },
   {
    "word": "sunscreen",
    "pron": "선스크리인",
    "pos": "n.",
    "meaning": "자외선 차단제, 썬크림",
    "examples": [],
    "tip": "",
    "no": 103,
    "day": 18
   },
   {
    "word": "foundation",
    "pron": "파운데이션",
    "pos": "n.",
    "meaning": "파운데이션(화장품)",
    "examples": [],
    "tip": "",
    "no": 104,
    "day": 18
   },
   {
    "word": "lipstick",
    "pron": "립스틱",
    "pos": "n.",
    "meaning": "립스틱",
    "examples": [],
    "tip": "",
    "no": 105,
    "day": 18
   },
   {
    "word": "mascara",
    "pron": "매스캐러",
    "pos": "n.",
    "meaning": "마스카라",
    "examples": [],
    "tip": "",
    "no": 106,
    "day": 18
   },
   {
    "word": "eyeliner",
    "pron": "아이라이너",
    "pos": "n.",
    "meaning": "아이라이너",
    "examples": [],
    "tip": "우리가 흔히 말하는 '매니큐어'는 manicure로, 손톱 손질을 가리킵니다.",
    "no": 107,
    "day": 18,
    "tipLabel": "💡 tip"
   },
   {
    "word": "nail polish",
    "pron": "네일 팔리쉬",
    "pos": "n.",
    "meaning": "매니큐어",
    "examples": [],
    "tip": "",
    "no": 108,
    "day": 18
   },
   {
    "word": "cut",
    "pron": "컷",
    "pos": "v.",
    "meaning": "자르다, 재단하다",
    "examples": [],
    "tip": "",
    "no": 109,
    "day": 18
   },
   {
    "word": "sew",
    "pron": "소우",
    "pos": "v.",
    "meaning": "바느질하다, 꿰매다",
    "examples": [],
    "tip": "",
    "no": 110,
    "day": 18
   }
  ]
 },
 {
  "day": 19,
  "title": "Unit 19. 의료&금융",
  "words": [
   {
    "word": "hospital",
    "pron": "하스피틀",
    "pos": "n.",
    "meaning": "병원",
    "examples": [
     {
      "en": "I'd like to make an appointment to see the doctor.",
      "ko": "진찰 예약을 하고 싶습니다."
     }
    ],
    "tip": "",
    "no": 1,
    "day": 19
   },
   {
    "word": "clinic",
    "pron": "클리닉",
    "pos": "n.",
    "meaning": "진료소",
    "examples": [],
    "tip": "",
    "no": 2,
    "day": 19
   },
   {
    "word": "doctor",
    "pron": "닥터",
    "pos": "n.",
    "meaning": "의사",
    "examples": [],
    "tip": "",
    "no": 3,
    "day": 19
   },
   {
    "word": "nurse",
    "pron": "너-(ㅅ)",
    "pos": "n.",
    "meaning": "간호사",
    "examples": [],
    "tip": "",
    "no": 4,
    "day": 19
   },
   {
    "word": "patient",
    "pron": "페이션(ㅌ)",
    "pos": "n.",
    "meaning": "환자",
    "examples": [],
    "tip": "",
    "no": 5,
    "day": 19
   },
   {
    "word": "consult",
    "pron": "컨설(ㅌ)",
    "pos": "v.",
    "meaning": "상담하다, 진찰받다",
    "examples": [],
    "tip": "",
    "no": 6,
    "day": 19
   },
   {
    "word": "symptom",
    "pron": "심텀",
    "pos": "n.",
    "meaning": "증상, 증세",
    "examples": [
     {
      "en": "What are your symptoms?",
      "ko": "증상이 어떻습니까?"
     }
    ],
    "tip": "",
    "no": 7,
    "day": 19
   },
   {
    "word": "painful",
    "pron": "페인펄",
    "pos": "a.",
    "meaning": "아픈, 고통스러운",
    "examples": [],
    "tip": "",
    "no": 8,
    "day": 19
   },
   {
    "word": "pain",
    "pron": "페인",
    "pos": "n.",
    "meaning": "고통, 통증",
    "examples": [],
    "tip": "pain은 신체적 정신적인 갑작스런 단기간의 통증을, ache는 신체 일부의 계속적인 아픔을 나타냅니다.",
    "no": 9,
    "day": 19,
    "tipLabel": "💡 tip"
   },
   {
    "word": "ache",
    "pron": "에익",
    "pos": "n.",
    "meaning": "통증 v. 아프다, 쑤시다",
    "examples": [
     {
      "en": "I have a terrible headache.",
      "ko": "머리가 깨질 듯 아파요."
     }
    ],
    "tip": "",
    "no": 10,
    "day": 19
   },
   {
    "word": "burn",
    "pron": "버언",
    "pos": "n.",
    "meaning": "(불에 데인) 화상",
    "examples": [],
    "tip": "햇볕에 그을인 것은 sunburn이라고 합니다.",
    "no": 11,
    "day": 19,
    "tipLabel": "💡 tip"
   },
   {
    "word": "scald",
    "pron": "스커얼(드)",
    "pos": "n.",
    "meaning": "(뜨거운 물에 데인) 화상",
    "examples": [],
    "tip": "",
    "no": 12,
    "day": 19
   },
   {
    "word": "choke",
    "pron": "초욱",
    "pos": "n.",
    "meaning": "질식 v. 질식시키다",
    "examples": [],
    "tip": "",
    "no": 13,
    "day": 19
   },
   {
    "word": "hurt",
    "pron": "허-(ㅌ)",
    "pos": "n.",
    "meaning": "상처 a. 다친, 부상한 v. 다치게 하다",
    "examples": [],
    "tip": "",
    "no": 14,
    "day": 19
   },
   {
    "word": "injury",
    "pron": "인저리",
    "pos": "n.",
    "meaning": "부상",
    "examples": [],
    "tip": "injury는 사고 등으로 인한 상처, wound는 총이나 칼 등으로 입혀진 상처, cut은 베인 상처를 말합니다.",
    "no": 15,
    "day": 19,
    "tipLabel": "💡 tip"
   },
   {
    "word": "wound",
    "pron": "우운(드)",
    "pos": "",
    "meaning": "= wound",
    "examples": [],
    "tip": "",
    "no": 16,
    "day": 19
   },
   {
    "word": "cut",
    "pron": "컷",
    "pos": "",
    "meaning": "= cut",
    "examples": [],
    "tip": "",
    "no": 17,
    "day": 19
   },
   {
    "word": "bruise",
    "pron": "브루-(ㅈ)",
    "pos": "n.",
    "meaning": "타박상, 멍 v. 타박상을 입히다",
    "examples": [],
    "tip": "",
    "no": 18,
    "day": 19
   },
   {
    "word": "contusion",
    "pron": "컨튜-젼",
    "pos": "n.",
    "meaning": "타박상, 멍 v. 타박상을 입히다",
    "examples": [],
    "tip": "",
    "no": 19,
    "day": 19
   },
   {
    "word": "crutch",
    "pron": "크럿취",
    "pos": "n.",
    "meaning": "목발",
    "examples": [],
    "tip": "",
    "no": 20,
    "day": 19
   },
   {
    "word": "cold",
    "pron": "코울(ㄷ)",
    "pos": "n.",
    "meaning": "감기",
    "examples": [
     {
      "en": "I seem to have caught a cold.",
      "ko": "감기에 걸린 것 같아요."
     }
    ],
    "tip": "",
    "no": 21,
    "day": 19
   },
   {
    "word": "cough",
    "pron": "커-(ㅍ)",
    "pos": "n.",
    "meaning": "기침 v. 기침하다",
    "examples": [],
    "tip": "",
    "no": 22,
    "day": 19
   },
   {
    "word": "fever",
    "pron": "피-버",
    "pos": "n.",
    "meaning": "열",
    "examples": [],
    "tip": "",
    "no": 23,
    "day": 19
   },
   {
    "word": "indigestion",
    "pron": "인디제스천",
    "pos": "",
    "meaning": "소화불량",
    "examples": [],
    "tip": "",
    "no": 24,
    "day": 19
   },
   {
    "word": "dyspepsia",
    "pron": "디스펩셔",
    "pos": "n.",
    "meaning": "소화불량",
    "examples": [],
    "tip": "",
    "no": 25,
    "day": 19
   },
   {
    "word": "vomit",
    "pron": "바밋",
    "pos": "v.",
    "meaning": "구토하다",
    "examples": [],
    "tip": "",
    "no": 26,
    "day": 19
   },
   {
    "word": "vomiting",
    "pron": "바-미팅",
    "pos": "n.",
    "meaning": "구토",
    "examples": [],
    "tip": "",
    "no": 27,
    "day": 19
   },
   {
    "word": "dizziness",
    "pron": "디지니(ㅅ)",
    "pos": "n.",
    "meaning": "현기증",
    "examples": [],
    "tip": "",
    "no": 28,
    "day": 19
   },
   {
    "word": "dizzy",
    "pron": "디지",
    "pos": "a.",
    "meaning": "현기증이 나는, 어지러운",
    "examples": [],
    "tip": "",
    "no": 29,
    "day": 19
   },
   {
    "word": "woozy",
    "pron": "우-지",
    "pos": "a.",
    "meaning": "현기증이 나는, 어지러운",
    "examples": [],
    "tip": "",
    "no": 30,
    "day": 19
   },
   {
    "word": "pimple",
    "pron": "핌플",
    "pos": "",
    "meaning": "뽀루지, 여드름",
    "examples": [],
    "tip": "",
    "no": 31,
    "day": 19
   },
   {
    "word": "acne",
    "pron": "액니",
    "pos": "",
    "meaning": "뾰루지, 여드름",
    "examples": [],
    "tip": "",
    "no": 32,
    "day": 19
   },
   {
    "word": "zit",
    "pron": "짓",
    "pos": "n.",
    "meaning": "뽀루지, 여드름",
    "examples": [],
    "tip": "",
    "no": 33,
    "day": 19
   },
   {
    "word": "be bitten",
    "pron": "비- 비든",
    "pos": "",
    "meaning": "(곤충이나 동물에게) 물리다",
    "examples": [],
    "tip": "",
    "no": 34,
    "day": 19
   },
   {
    "word": "cavity",
    "pron": "캐버티",
    "pos": "n.",
    "meaning": "충치",
    "examples": [],
    "tip": "",
    "no": 35,
    "day": 19
   },
   {
    "word": "scaling",
    "pron": "스케일링",
    "pos": "n.",
    "meaning": "스케일링, 치석 제거",
    "examples": [],
    "tip": "",
    "no": 36,
    "day": 19
   },
   {
    "word": "brace",
    "pron": "브레이(ㅆ)",
    "pos": "n.",
    "meaning": "치열 교정기",
    "examples": [],
    "tip": "",
    "no": 37,
    "day": 19
   },
   {
    "word": "go into a hospital",
    "pron": "고우 인투 어 하스피틀",
    "pos": "",
    "meaning": "입원하다",
    "examples": [],
    "tip": "",
    "no": 38,
    "day": 19
   },
   {
    "word": "be hospitalized",
    "pron": "비- 하스피터라이즛",
    "pos": "",
    "meaning": "= be hospitalized",
    "examples": [],
    "tip": "",
    "no": 39,
    "day": 19
   },
   {
    "word": "leave the hospital",
    "pron": "리-(ㅂ) 더 하스피틀",
    "pos": "",
    "meaning": "퇴원하다",
    "examples": [],
    "tip": "",
    "no": 40,
    "day": 19
   },
   {
    "word": "pharmacy",
    "pron": "파-머씨",
    "pos": "n.",
    "meaning": "약국",
    "examples": [],
    "tip": "",
    "no": 41,
    "day": 19
   },
   {
    "word": "medicine",
    "pron": "메더씬",
    "pos": "n.",
    "meaning": "약",
    "examples": [
     {
      "en": "Is this pain-killer effective?",
      "ko": "이 진통제가 효과 있나요?"
     }
    ],
    "tip": "",
    "no": 42,
    "day": 19
   },
   {
    "word": "drug",
    "pron": "드럭",
    "pos": "n.",
    "meaning": "약",
    "examples": [],
    "tip": "",
    "no": 43,
    "day": 19
   },
   {
    "word": "digestive aid",
    "pron": "다이제스티 베잇",
    "pos": "",
    "meaning": "소화제",
    "examples": [],
    "tip": "",
    "no": 44,
    "day": 19
   },
   {
    "word": "sleeping pill",
    "pron": "슬리-핑 필",
    "pos": "",
    "meaning": "수면제",
    "examples": [],
    "tip": "",
    "no": 45,
    "day": 19
   },
   {
    "word": "pain-killer",
    "pron": "페인킬러",
    "pos": "",
    "meaning": "진통제",
    "examples": [],
    "tip": "",
    "no": 46,
    "day": 19
   },
   {
    "word": "anodyne",
    "pron": "애너다인",
    "pos": "n.",
    "meaning": "진통제",
    "examples": [],
    "tip": "",
    "no": 47,
    "day": 19
   },
   {
    "word": "antifebrile",
    "pron": "앤티피-브럴",
    "pos": "n.",
    "meaning": "해열제",
    "examples": [],
    "tip": "",
    "no": 48,
    "day": 19
   },
   {
    "word": "ointment",
    "pron": "어인트먼(ㅌ)",
    "pos": "n.",
    "meaning": "연고",
    "examples": [],
    "tip": "",
    "no": 49,
    "day": 19
   },
   {
    "word": "bandage",
    "pron": "밴디쥐",
    "pos": "n.",
    "meaning": "붕대, 밴드",
    "examples": [],
    "tip": "",
    "no": 50,
    "day": 19
   },
   {
    "word": "adhesive bandage",
    "pron": "앳히-시(ㅂ) 밴디쥐",
    "pos": "n.",
    "meaning": "반창고",
    "examples": [],
    "tip": "미국에서는 반창고의 대표적 상표명인 Band-Aid라고 하기도 합니다.",
    "no": 51,
    "day": 19,
    "tipLabel": "💡 tip"
   },
   {
    "word": "bank",
    "pron": "뱅(ㅋ)",
    "pos": "n.",
    "meaning": "은행",
    "examples": [],
    "tip": "",
    "no": 52,
    "day": 19
   },
   {
    "word": "money",
    "pron": "머니",
    "pos": "n.",
    "meaning": "돈",
    "examples": [],
    "tip": "",
    "no": 53,
    "day": 19
   },
   {
    "word": "cash",
    "pron": "캐쉬",
    "pos": "n.",
    "meaning": "현금",
    "examples": [],
    "tip": "",
    "no": 54,
    "day": 19
   },
   {
    "word": "coin",
    "pron": "커인",
    "pos": "n.",
    "meaning": "동전",
    "examples": [],
    "tip": "",
    "no": 55,
    "day": 19
   },
   {
    "word": "account",
    "pron": "어카운(ㅌ)",
    "pos": "n.",
    "meaning": "계좌",
    "examples": [],
    "tip": "",
    "no": 56,
    "day": 19
   },
   {
    "word": "save",
    "pron": "세이(ㅂ)",
    "pos": "v.",
    "meaning": "저축하다",
    "examples": [],
    "tip": "",
    "no": 57,
    "day": 19
   },
   {
    "word": "withdrawal",
    "pron": "윗드러얼",
    "pos": "n.",
    "meaning": "인출",
    "examples": [],
    "tip": "",
    "no": 58,
    "day": 19
   },
   {
    "word": "deposit",
    "pron": "디파짓",
    "pos": "v.",
    "meaning": "예금하다, 입금하다",
    "examples": [],
    "tip": "",
    "no": 59,
    "day": 19
   },
   {
    "word": "withdraw",
    "pron": "윗드러-",
    "pos": "v.",
    "meaning": "돈을 찾다, 출금하다",
    "examples": [],
    "tip": "",
    "no": 60,
    "day": 19
   },
   {
    "word": "transfer",
    "pron": "츠랜스퍼",
    "pos": "v.",
    "meaning": "(돈을) 옮기다, 이체하다",
    "examples": [
     {
      "en": "Please transfer the funds to this account.",
      "ko": "이 계좌로 송금해 주세요."
     }
    ],
    "tip": "",
    "no": 61,
    "day": 19
   },
   {
    "word": "Internet banking",
    "pron": "인터-넷 뱅킹",
    "pos": "",
    "meaning": "인터넷 뱅킹",
    "examples": [],
    "tip": "",
    "no": 62,
    "day": 19
   },
   {
    "word": "credit transfer",
    "pron": "크레딧 츠랜스퍼",
    "pos": "",
    "meaning": "계좌이체",
    "examples": [],
    "tip": "",
    "no": 63,
    "day": 19
   },
   {
    "word": "exchange",
    "pron": "익스체인쥐",
    "pos": "n.",
    "meaning": "환전; 환전하다",
    "examples": [
     {
      "en": "I'd like to exchange Korean won for US dollars.",
      "ko": "원화를 달러로 환전하고 싶습니다."
     }
    ],
    "tip": "",
    "no": 64,
    "day": 19
   },
   {
    "word": "interest",
    "pron": "인터레숏",
    "pos": "n.",
    "meaning": "이자",
    "examples": [
     {
      "en": "What's the interest rate?",
      "ko": "이자율은 어떻게 됩니까?"
     }
    ],
    "tip": "",
    "no": 65,
    "day": 19
   },
   {
    "word": "loan",
    "pron": "로운",
    "pos": "n.",
    "meaning": "대출",
    "examples": [],
    "tip": "",
    "no": 66,
    "day": 19
   },
   {
    "word": "credit card",
    "pron": "크레딧 카-(드)",
    "pos": "",
    "meaning": "신용카드",
    "examples": [],
    "tip": "",
    "no": 67,
    "day": 19
   },
   {
    "word": "debit card",
    "pron": "데빗 카-(드)",
    "pos": "",
    "meaning": "직불카드",
    "examples": [],
    "tip": "",
    "no": 68,
    "day": 19
   },
   {
    "word": "atm",
    "pron": "에이티-엠",
    "pos": "n.",
    "meaning": "현금 자동 인출기(Automated Teller Machine의 약자)",
    "examples": [
     {
      "en": "Where are the ATM machines?",
      "ko": "현금 자동 인출기는 어디에 있나요?"
     }
    ],
    "tip": "",
    "no": 69,
    "day": 19
   },
   {
    "word": "pin",
    "pron": "핀",
    "pos": "n.",
    "meaning": "비밀번호(Personal Identification Number의 약자)",
    "examples": [
     {
      "en": "Please enter your PIN.",
      "ko": "비밀번호를 입력하세요."
     }
    ],
    "tip": "PIN은 신용카드의 개인 식별 번호나 은행 카드의 비밀 번호를 말합니다.",
    "no": 70,
    "day": 19,
    "tipLabel": "💡 tip"
   },
   {
    "word": "health",
    "pron": "헬쓰",
    "pos": "n.",
    "meaning": "의료, 보건",
    "examples": [],
    "tip": "",
    "no": 71,
    "day": 19
   },
   {
    "word": "sore",
    "pron": "서-",
    "pos": "a.",
    "meaning": "(염증으로) 아픈",
    "examples": [],
    "tip": "",
    "no": 72,
    "day": 19
   },
   {
    "word": "prickle",
    "pron": "프리클",
    "pos": "n.",
    "meaning": "따끔따끔한 느낌, 아픔",
    "examples": [],
    "tip": "",
    "no": 73,
    "day": 19
   },
   {
    "word": "toothache",
    "pron": "투-쎄익",
    "pos": "n.",
    "meaning": "치통",
    "examples": [],
    "tip": "",
    "no": 74,
    "day": 19
   },
   {
    "word": "headache",
    "pron": "헤데익",
    "pos": "n.",
    "meaning": "두통",
    "examples": [],
    "tip": "",
    "no": 75,
    "day": 19
   },
   {
    "word": "numb",
    "pron": "넘",
    "pos": "a.",
    "meaning": "감각을 잃은, 마비된",
    "examples": [],
    "tip": "",
    "no": 76,
    "day": 19
   },
   {
    "word": "scar",
    "pron": "스카-",
    "pos": "n.",
    "meaning": "흉터",
    "examples": [],
    "tip": "",
    "no": 77,
    "day": 19
   },
   {
    "word": "scratch",
    "pron": "스크랫취",
    "pos": "n.",
    "meaning": "긁힌 상처, 생채기 v. 긁다, 할퀴다",
    "examples": [],
    "tip": "",
    "no": 78,
    "day": 19
   },
   {
    "word": "abrasion",
    "pron": "업레이젼",
    "pos": "n.",
    "meaning": "찰과상",
    "examples": [],
    "tip": "",
    "no": 79,
    "day": 19
   },
   {
    "word": "black eye",
    "pron": "블랙 아이",
    "pos": "n.",
    "meaning": "(얻어맞아 생긴) 눈 둘레의 멍",
    "examples": [],
    "tip": "'수치, 불명예'라는 의미로도 쓰입니다.",
    "no": 80,
    "day": 19,
    "tipLabel": "💡 tip"
   },
   {
    "word": "swollen",
    "pron": "스월른",
    "pos": "a.",
    "meaning": "부어오른",
    "examples": [],
    "tip": "",
    "no": 81,
    "day": 19
   },
   {
    "word": "become swollen",
    "pron": "비컴 스월른",
    "pos": "",
    "meaning": "붓다",
    "examples": [],
    "tip": "",
    "no": 82,
    "day": 19
   },
   {
    "word": "sprain",
    "pron": "스프레인",
    "pos": "n.",
    "meaning": "삐기, 염좌 v. 삐다, 접질리다",
    "examples": [
     {
      "en": "I sprained my ankle.",
      "ko": "발목이 삐었어요."
     }
    ],
    "tip": "",
    "no": 83,
    "day": 19
   },
   {
    "word": "wrench",
    "pron": "렌취",
    "pos": "",
    "meaning": "= wrench",
    "examples": [],
    "tip": "",
    "no": 84,
    "day": 19
   },
   {
    "word": "limp",
    "pron": "림(ㅍ)",
    "pos": "n.",
    "meaning": "절뚝거리기 v. 다리를 절다",
    "examples": [],
    "tip": "",
    "no": 85,
    "day": 19
   },
   {
    "word": "limp heavily",
    "pron": "림(ㅍ) 헤빌리",
    "pos": "",
    "meaning": "심하게 절다",
    "examples": [],
    "tip": "",
    "no": 86,
    "day": 19
   },
   {
    "word": "limp slightly",
    "pron": "림(ㅍ) 슬라잇리",
    "pos": "",
    "meaning": "약간 절다",
    "examples": [],
    "tip": "",
    "no": 87,
    "day": 19
   },
   {
    "word": "catch a cold",
    "pron": "캐취 어 코울(ㄷ)",
    "pos": "",
    "meaning": "감기에 걸리다",
    "examples": [],
    "tip": "",
    "no": 88,
    "day": 19
   },
   {
    "word": "get a cold",
    "pron": "겟 어 코울(ㄷ)",
    "pos": "",
    "meaning": "감기에 걸리다",
    "examples": [],
    "tip": "",
    "no": 89,
    "day": 19
   },
   {
    "word": "influenza",
    "pron": "인플루엔저",
    "pos": "n.",
    "meaning": "인플루엔자, 유행성 감기, 독감",
    "examples": [],
    "tip": "",
    "no": 90,
    "day": 19
   },
   {
    "word": "the flu",
    "pron": "더 플루-",
    "pos": "",
    "meaning": "인플루엔자, 유행성 감기, 독감",
    "examples": [],
    "tip": "",
    "no": 91,
    "day": 19
   },
   {
    "word": "cough cough",
    "pron": "커-(ㅍ) 커-(ㅍ)",
    "pos": "",
    "meaning": "콜록콜록",
    "examples": [],
    "tip": "",
    "no": 92,
    "day": 19
   },
   {
    "word": "high fever",
    "pron": "하이 피-버",
    "pos": "",
    "meaning": "고열",
    "examples": [],
    "tip": "",
    "no": 93,
    "day": 19
   },
   {
    "word": "slight fever",
    "pron": "슬라잇 피-버",
    "pos": "",
    "meaning": "미열",
    "examples": [],
    "tip": "",
    "no": 94,
    "day": 19
   },
   {
    "word": "run a fever",
    "pron": "런 어 피-버",
    "pos": "",
    "meaning": "열이 나다",
    "examples": [],
    "tip": "",
    "no": 95,
    "day": 19
   },
   {
    "word": "blood pressure",
    "pron": "블럿 프레셔",
    "pos": "n.",
    "meaning": "혈압",
    "examples": [
     {
      "en": "I have high blood pressure.",
      "ko": "고혈압이 있어요."
     }
    ],
    "tip": "",
    "no": 96,
    "day": 19
   },
   {
    "word": "high blood pressure",
    "pron": "하이 블럿 프레셔",
    "pos": "n.",
    "meaning": "고혈압",
    "examples": [],
    "tip": "",
    "no": 97,
    "day": 19
   },
   {
    "word": "hypertension",
    "pron": "하이퍼텐션",
    "pos": "",
    "meaning": "고혈압",
    "examples": [],
    "tip": "",
    "no": 98,
    "day": 19
   },
   {
    "word": "low blood pressure",
    "pron": "로우 블럿 프레셔",
    "pos": "n.",
    "meaning": "저혈압",
    "examples": [],
    "tip": "",
    "no": 99,
    "day": 19
   },
   {
    "word": "hypotension",
    "pron": "하이포우텐션",
    "pos": "",
    "meaning": "저혈압",
    "examples": [],
    "tip": "",
    "no": 100,
    "day": 19
   },
   {
    "word": "stomach",
    "pron": "스터먹",
    "pos": "n.",
    "meaning": "위",
    "examples": [],
    "tip": "",
    "no": 101,
    "day": 19
   },
   {
    "word": "appendicitis",
    "pron": "어펜더싸이티(ㅅ)",
    "pos": "n.",
    "meaning": "맹장염",
    "examples": [],
    "tip": "",
    "no": 102,
    "day": 19
   },
   {
    "word": "nauseous",
    "pron": "너-셔(ㅅ)",
    "pos": "a.",
    "meaning": "구역질나는, 메스꺼운",
    "examples": [],
    "tip": "",
    "no": 103,
    "day": 19
   },
   {
    "word": "morning sickness",
    "pron": "머-닝 식니(ㅅ)",
    "pos": "n.",
    "meaning": "(임신 초기에 흔히 오전에만 나타나는) 입덧",
    "examples": [
     {
      "en": "It may be morning sickness.",
      "ko": "입덧인 것 같아요."
     }
    ],
    "tip": "",
    "no": 104,
    "day": 19
   },
   {
    "word": "diarrhea",
    "pron": "다이어리-어",
    "pos": "n.",
    "meaning": "설사",
    "examples": [],
    "tip": "",
    "no": 105,
    "day": 19
   },
   {
    "word": "constipation",
    "pron": "칸스티페이션",
    "pos": "n.",
    "meaning": "변비",
    "examples": [],
    "tip": "",
    "no": 106,
    "day": 19
   },
   {
    "word": "anemia",
    "pron": "어니-미어",
    "pos": "n.",
    "meaning": "빈혈",
    "examples": [],
    "tip": "",
    "no": 107,
    "day": 19
   },
   {
    "word": "hives",
    "pron": "하이브(ㅈ)",
    "pos": "n.",
    "meaning": "두드러기",
    "examples": [],
    "tip": "",
    "no": 108,
    "day": 19
   },
   {
    "word": "hereditary disease",
    "pron": "허레디테리 디지-(ㅈ)",
    "pos": "",
    "meaning": "유전병",
    "examples": [],
    "tip": "",
    "no": 109,
    "day": 19
   },
   {
    "word": "surgery",
    "pron": "서-저리",
    "pos": "n.",
    "meaning": "수술",
    "examples": [
     {
      "en": "Does he need surgery?",
      "ko": "수술을 받아야 합니까?"
     }
    ],
    "tip": "",
    "no": 110,
    "day": 19
   },
   {
    "word": "operation",
    "pron": "아퍼레이션",
    "pos": "",
    "meaning": "수술",
    "examples": [],
    "tip": "",
    "no": 111,
    "day": 19
   },
   {
    "word": "anesthesia",
    "pron": "애너씨-저",
    "pos": "n.",
    "meaning": "마취",
    "examples": [],
    "tip": "",
    "no": 112,
    "day": 19
   },
   {
    "word": "general anesthesia",
    "pron": "제너럴 애너씨-저",
    "pos": "",
    "meaning": "전신 마취",
    "examples": [],
    "tip": "",
    "no": 113,
    "day": 19
   },
   {
    "word": "local anesthesia",
    "pron": "로우컬 애너씨-저",
    "pos": "",
    "meaning": "국부 마취",
    "examples": [],
    "tip": "",
    "no": 114,
    "day": 19
   },
   {
    "word": "medical insurance",
    "pron": "메디컬 인슈어런(ㅆ)",
    "pos": "",
    "meaning": "의료 보험",
    "examples": [],
    "tip": "",
    "no": 115,
    "day": 19
   },
   {
    "word": "medical certificate",
    "pron": "메디컬 써티피케잇",
    "pos": "",
    "meaning": "진단서",
    "examples": [],
    "tip": "",
    "no": 116,
    "day": 19
   },
   {
    "word": "prescription",
    "pron": "프리스크립션",
    "pos": "n.",
    "meaning": "처방전",
    "examples": [
     {
      "en": "I'm going to write you a prescription.",
      "ko": "처방전을 써 드리겠습니다."
     }
    ],
    "tip": "",
    "no": 117,
    "day": 19
   },
   {
    "word": "side effect",
    "pron": "사이 디펙(ㅌ)",
    "pos": "",
    "meaning": "부작용",
    "examples": [
     {
      "en": "Does this medicine have any side effects?",
      "ko": "이 약에 부작용은 없나요?"
     }
    ],
    "tip": "",
    "no": 118,
    "day": 19
   },
   {
    "word": "disinfectant",
    "pron": "디신펙턴(ㅌ)",
    "pos": "n.",
    "meaning": "소독약; 소독력이 있는",
    "examples": [],
    "tip": "",
    "no": 119,
    "day": 19
   },
   {
    "word": "antiseptic",
    "pron": "앤티셉틱",
    "pos": "",
    "meaning": "소독약; 소독력이 있는",
    "examples": [],
    "tip": "",
    "no": 120,
    "day": 19
   },
   {
    "word": "gypsum",
    "pron": "집섬",
    "pos": "n.",
    "meaning": "깁스, 석고",
    "examples": [],
    "tip": "",
    "no": 121,
    "day": 19
   },
   {
    "word": "wear a plaster cast",
    "pron": "웨어 어 플래스터 캐슷",
    "pos": "",
    "meaning": "깁스를 하다",
    "examples": [],
    "tip": "",
    "no": 122,
    "day": 19
   },
   {
    "word": "banking",
    "pron": "뱅킹",
    "pos": "n.",
    "meaning": "금융, 은행 업무",
    "examples": [],
    "tip": "",
    "no": 123,
    "day": 19
   },
   {
    "word": "check",
    "pron": "첵",
    "pos": "n.",
    "meaning": "수표",
    "examples": [],
    "tip": "",
    "no": 124,
    "day": 19
   },
   {
    "word": "traveler's check",
    "pron": "츠래블러(ㅅ) 첵",
    "pos": "n.",
    "meaning": "여행자 수표",
    "examples": [],
    "tip": "",
    "no": 125,
    "day": 19
   },
   {
    "word": "change",
    "pron": "체인쥐",
    "pos": "n.",
    "meaning": "잔돈, 거스름돈",
    "examples": [],
    "tip": "",
    "no": 126,
    "day": 19
   },
   {
    "word": "ordinary deposit",
    "pron": "어-더네리 디파짓",
    "pos": "n.",
    "meaning": "보통 예금",
    "examples": [],
    "tip": "",
    "no": 127,
    "day": 19
   },
   {
    "word": "installment deposit",
    "pron": "인스터얼먼(ㅌ) 디파짓",
    "pos": "n.",
    "meaning": "적금",
    "examples": [],
    "tip": "",
    "no": 128,
    "day": 19
   },
   {
    "word": "balance",
    "pron": "밸런(ㅆ)",
    "pos": "n.",
    "meaning": "잔고",
    "examples": [],
    "tip": "",
    "no": 129,
    "day": 19
   },
   {
    "word": "make a withdrawal",
    "pron": "메익 어 윗드러얼",
    "pos": "",
    "meaning": "돈을 찾다, 출금하다",
    "examples": [],
    "tip": "",
    "no": 130,
    "day": 19
   },
   {
    "word": "remittance",
    "pron": "리밋튼(ㅆ)",
    "pos": "n.",
    "meaning": "송금, 송금액",
    "examples": [],
    "tip": "",
    "no": 131,
    "day": 19
   },
   {
    "word": "fee",
    "pron": "피-",
    "pos": "n.",
    "meaning": "수수료",
    "examples": [],
    "tip": "",
    "no": 132,
    "day": 19
   },
   {
    "word": "currency",
    "pron": "커-런씨",
    "pos": "n.",
    "meaning": "통화",
    "examples": [],
    "tip": "",
    "no": 133,
    "day": 19
   },
   {
    "word": "foreign currency",
    "pron": "퍼-런 커-런씨",
    "pos": "",
    "meaning": "외화",
    "examples": [],
    "tip": "",
    "no": 134,
    "day": 19
   },
   {
    "word": "dollar",
    "pron": "달러",
    "pos": "n.",
    "meaning": "달러(미국의 화폐 단위)",
    "examples": [],
    "tip": "",
    "no": 135,
    "day": 19
   },
   {
    "word": "euro",
    "pron": "유어로우",
    "pos": "n.",
    "meaning": "유로(유럽연합의 통합 화폐 단위)",
    "examples": [],
    "tip": "",
    "no": 136,
    "day": 19
   },
   {
    "word": "yen",
    "pron": "엔",
    "pos": "n.",
    "meaning": "엔(일본의 화폐 단위)",
    "examples": [],
    "tip": "",
    "no": 137,
    "day": 19
   },
   {
    "word": "yuan",
    "pron": "유-아안",
    "pos": "n.",
    "meaning": "위안(중국의 화폐 단위)",
    "examples": [],
    "tip": "",
    "no": 138,
    "day": 19
   },
   {
    "word": "exchange rate",
    "pron": "익스체인쥐 레잇",
    "pos": "n.",
    "meaning": "환율",
    "examples": [],
    "tip": "",
    "no": 139,
    "day": 19
   },
   {
    "word": "rate of interest",
    "pron": "레잇 어(ㅂ) 인터레숏",
    "pos": "",
    "meaning": "금리",
    "examples": [],
    "tip": "",
    "no": 140,
    "day": 19
   },
   {
    "word": "mortgage",
    "pron": "머-기쥐",
    "pos": "n.",
    "meaning": "모기지, 주택 담보 대출",
    "examples": [],
    "tip": "",
    "no": 141,
    "day": 19
   }
  ]
 },
 {
  "day": 20,
  "title": "Unit 20. 교통",
  "words": [
   {
    "word": "transportation",
    "pron": "츠랜스퍼테이션",
    "pos": "n.",
    "meaning": "교통, 운송, 수송",
    "examples": [],
    "tip": "",
    "no": 1,
    "day": 20
   },
   {
    "word": "plane",
    "pron": "플레인",
    "pos": "n.",
    "meaning": "비행기",
    "examples": [],
    "tip": "",
    "no": 2,
    "day": 20
   },
   {
    "word": "airplane",
    "pron": "에어플레인",
    "pos": "",
    "meaning": "비행기",
    "examples": [],
    "tip": "",
    "no": 3,
    "day": 20
   },
   {
    "word": "flight",
    "pron": "플라잇",
    "pos": "n.",
    "meaning": "비행, 항공편",
    "examples": [],
    "tip": "",
    "no": 4,
    "day": 20
   },
   {
    "word": "airport",
    "pron": "에어퍼-(ㅌ)",
    "pos": "n.",
    "meaning": "공항",
    "examples": [
     {
      "en": "I'll pick you up at the airport.",
      "ko": "내가 공항에 마중하러 나갈게요."
     }
    ],
    "tip": "",
    "no": 5,
    "day": 20
   },
   {
    "word": "airlines",
    "pron": "에어라인(ㅅ)",
    "pos": "n.",
    "meaning": "항공사, 항공노선",
    "examples": [],
    "tip": "",
    "no": 6,
    "day": 20
   },
   {
    "word": "ticket",
    "pron": "티킷",
    "pos": "n.",
    "meaning": "표, 승차권, 입장권",
    "examples": [],
    "tip": "",
    "no": 7,
    "day": 20
   },
   {
    "word": "airline ticket",
    "pron": "에어라인 티킷",
    "pos": "n.",
    "meaning": "항공권",
    "examples": [],
    "tip": "정식으로는 passenger ticket and baggage check이라고 합니다.",
    "no": 8,
    "day": 20,
    "tipLabel": "💡 tip"
   },
   {
    "word": "boarding pass",
    "pron": "버-딩 패(ㅅ)",
    "pos": "n.",
    "meaning": "(비행기의) 탑승권",
    "examples": [
     {
      "en": "May I see your boarding pass, please?",
      "ko": "탑승권을 보여 주시겠습니까?"
     }
    ],
    "tip": "",
    "no": 9,
    "day": 20
   },
   {
    "word": "boarding card",
    "pron": "버-딩 카-(ㄷ)",
    "pos": "n.",
    "meaning": "(비행기의) 탑승권",
    "examples": [],
    "tip": "",
    "no": 10,
    "day": 20
   },
   {
    "word": "passport",
    "pron": "패스퍼-(ㅌ)",
    "pos": "n.",
    "meaning": "여권",
    "examples": [
     {
      "en": "May I see your passport please?",
      "ko": "여권을 보여 주시겠어요?"
     }
    ],
    "tip": "",
    "no": 11,
    "day": 20
   },
   {
    "word": "visa",
    "pron": "비-저",
    "pos": "n.",
    "meaning": "비자",
    "examples": [],
    "tip": "",
    "no": 12,
    "day": 20
   },
   {
    "word": "leave",
    "pron": "리-(ㅂ)",
    "pos": "v.",
    "meaning": "출발하다, 떠나다",
    "examples": [
     {
      "en": "When would you like to leave?",
      "ko": "언제 떠날 예정인가요?"
     }
    ],
    "tip": "회화에서는 depart보다 leave가 많이 쓰입니다.",
    "no": 13,
    "day": 20,
    "tipLabel": "💡 tip"
   },
   {
    "word": "depart",
    "pron": "디파-(ㅌ)",
    "pos": "",
    "meaning": "출발하다, 떠나다",
    "examples": [],
    "tip": "",
    "no": 14,
    "day": 20
   },
   {
    "word": "departure",
    "pron": "디파-춰",
    "pos": "n.",
    "meaning": "출발",
    "examples": [
     {
      "en": "Please check in at least 1 hour before your departure time.",
      "ko": "늦어도 출발 한 시간 전에는 탑승 수속을 해 주세요."
     }
    ],
    "tip": "",
    "no": 15,
    "day": 20
   },
   {
    "word": "arrive",
    "pron": "어라이(ㅂ)",
    "pos": "v.",
    "meaning": "도착하다",
    "examples": [
     {
      "en": "When will we arrive in Hong Kong?",
      "ko": "언제 홍콩에 도착하나요?"
     }
    ],
    "tip": "동사 arrive 뒤에 전치사 at, in, on을 쓸 수 있는데, 도착하는 장소가 비교적 좁거나 여행 도중 잠깐 들르는 지점일 때는 at을, 비교적 넓은 장소나 목적지에 도착할 때는 in을, 사전의 현장이나 섬 등에 도착한다는 의미일 때는 on을 씁니다.",
    "no": 16,
    "day": 20,
    "tipLabel": "💡 tip"
   },
   {
    "word": "arrival",
    "pron": "어라이벌",
    "pos": "n.",
    "meaning": "도착",
    "examples": [],
    "tip": "",
    "no": 17,
    "day": 20
   },
   {
    "word": "take off",
    "pron": "테익 어-(ㅍ)",
    "pos": "",
    "meaning": "이륙하다",
    "examples": [
     {
      "en": "We are taking off shortly.",
      "ko": "잠시 후에 이륙합니다."
     }
    ],
    "tip": "",
    "no": 18,
    "day": 20
   },
   {
    "word": "takeoff",
    "pron": "테익어-(ㅍ)",
    "pos": "n.",
    "meaning": "이륙",
    "examples": [],
    "tip": "",
    "no": 19,
    "day": 20
   },
   {
    "word": "land",
    "pron": "랜(ㄷ)",
    "pos": "v.",
    "meaning": "착륙하다",
    "examples": [],
    "tip": "",
    "no": 20,
    "day": 20
   },
   {
    "word": "make a landing",
    "pron": "메익 어 랜딩",
    "pos": "",
    "meaning": "착륙하다",
    "examples": [],
    "tip": "",
    "no": 21,
    "day": 20
   },
   {
    "word": "landing",
    "pron": "랜딩",
    "pos": "n.",
    "meaning": "착륙",
    "examples": [],
    "tip": "",
    "no": 22,
    "day": 20
   },
   {
    "word": "seat",
    "pron": "시잇",
    "pos": "n.",
    "meaning": "좌석, 자리",
    "examples": [
     {
      "en": "May I help you find your seat?",
      "ko": "좌석을 안내해 드릴까요?"
     },
     {
      "en": "I'd like a window seat, please.",
      "ko": "창가석 부탁합니다."
     }
    ],
    "tip": "",
    "no": 23,
    "day": 20
   },
   {
    "word": "economy class",
    "pron": "이카-너미 클래(ㅅ)",
    "pos": "n.",
    "meaning": "일반석",
    "examples": [],
    "tip": "",
    "no": 24,
    "day": 20
   },
   {
    "word": "business class",
    "pron": "비즈니(ㅅ) 클래(ㅅ)",
    "pos": "n.",
    "meaning": "비즈니스석",
    "examples": [],
    "tip": "",
    "no": 25,
    "day": 20
   },
   {
    "word": "first class",
    "pron": "퍼-슷 클래(ㅅ)",
    "pos": "n.",
    "meaning": "일등석",
    "examples": [],
    "tip": "",
    "no": 26,
    "day": 20
   },
   {
    "word": "board",
    "pron": "버-(ㄷ)",
    "pos": "v.",
    "meaning": "탑승하다",
    "examples": [],
    "tip": "",
    "no": 27,
    "day": 20
   },
   {
    "word": "get on",
    "pron": "겟 언",
    "pos": "v.",
    "meaning": "탑승하다",
    "examples": [],
    "tip": "",
    "no": 28,
    "day": 20
   },
   {
    "word": "get off",
    "pron": "겟 어-(ㅍ)",
    "pos": "v.",
    "meaning": "(비행기에서) 내리다",
    "examples": [],
    "tip": "",
    "no": 29,
    "day": 20
   },
   {
    "word": "disembark",
    "pron": "디셈바-(ㅋ)",
    "pos": "v.",
    "meaning": "(비행기에서) 내리다",
    "examples": [],
    "tip": "",
    "no": 30,
    "day": 20
   },
   {
    "word": "suitcase",
    "pron": "수웃케이(ㅅ)",
    "pos": "n.",
    "meaning": "여행 가방",
    "examples": [],
    "tip": "",
    "no": 31,
    "day": 20
   },
   {
    "word": "trunk",
    "pron": "츠렁(ㅋ)",
    "pos": "n.",
    "meaning": "트렁크",
    "examples": [],
    "tip": "suitcase보다 큰 여행 가방을 가리킵니다.",
    "no": 32,
    "day": 20,
    "tipLabel": "💡 tip"
   },
   {
    "word": "carry-on",
    "pron": "캐리언",
    "pos": "",
    "meaning": "휴대용 짐",
    "examples": [],
    "tip": "",
    "no": 33,
    "day": 20
   },
   {
    "word": "baggage",
    "pron": "배기쥐",
    "pos": "n.",
    "meaning": "수화물",
    "examples": [
     {
      "en": "Do you have any baggage to check?",
      "ko": "부치실 짐이 있습니까?"
     }
    ],
    "tip": "주로 미국에서는 baggage라고 하며, 영국에서는 luggage라고 합니다.",
    "no": 34,
    "day": 20,
    "tipLabel": "💡 tip"
   },
   {
    "word": "luggage",
    "pron": "러기쥐",
    "pos": "n.",
    "meaning": "수화물",
    "examples": [],
    "tip": "",
    "no": 35,
    "day": 20
   },
   {
    "word": "airport security",
    "pron": "에어퍼-(ㅌ) 시큐어러티",
    "pos": "",
    "meaning": "공항 보안 검색대",
    "examples": [],
    "tip": "",
    "no": 36,
    "day": 20
   },
   {
    "word": "pilot",
    "pron": "파일럿",
    "pos": "n.",
    "meaning": "조종사, 파일럿",
    "examples": [],
    "tip": "",
    "no": 37,
    "day": 20
   },
   {
    "word": "crew",
    "pron": "크루-",
    "pos": "n.",
    "meaning": "(배·비행기·기차) 승무원",
    "examples": [],
    "tip": "",
    "no": 38,
    "day": 20
   },
   {
    "word": "steward",
    "pron": "스튜-어(ㄷ)",
    "pos": "n.",
    "meaning": "스튜어드, 남자 승무원",
    "examples": [],
    "tip": "",
    "no": 39,
    "day": 20
   },
   {
    "word": "stewardess",
    "pron": "스튜-어디(ㅅ)",
    "pos": "n.",
    "meaning": "스튜어디스, 여자 승무원",
    "examples": [],
    "tip": "",
    "no": 40,
    "day": 20
   },
   {
    "word": "seat belt",
    "pron": "시잇 벨(ㅌ)",
    "pos": "n.",
    "meaning": "안전벨트",
    "examples": [],
    "tip": "",
    "no": 41,
    "day": 20
   },
   {
    "word": "life vest",
    "pron": "라이(ㅍ) 베슷",
    "pos": "",
    "meaning": "구명조끼",
    "examples": [],
    "tip": "",
    "no": 42,
    "day": 20
   },
   {
    "word": "life jacket",
    "pron": "라이(ㅍ) 재킷",
    "pos": "",
    "meaning": "구명조끼",
    "examples": [],
    "tip": "",
    "no": 43,
    "day": 20
   },
   {
    "word": "emergency exit",
    "pron": "이머-전씨 엑싯",
    "pos": "",
    "meaning": "비상구",
    "examples": [],
    "tip": "",
    "no": 44,
    "day": 20
   },
   {
    "word": "duty free shop",
    "pron": "듀-티 프리- 샵",
    "pos": "n.",
    "meaning": "면세점",
    "examples": [
     {
      "en": "Where are the Duty Free Shops?",
      "ko": "면세점은 어디 있어요?"
     }
    ],
    "tip": "면세점 간판에 약자인 DFS를 흔히 볼 수 있습니다.",
    "no": 45,
    "day": 20,
    "tipLabel": "💡 tip"
   },
   {
    "word": "train",
    "pron": "츠레인",
    "pos": "n.",
    "meaning": "기차, 열차",
    "examples": [],
    "tip": "",
    "no": 46,
    "day": 20
   },
   {
    "word": "train station",
    "pron": "츠레인 스테이션",
    "pos": "n.",
    "meaning": "기차역",
    "examples": [],
    "tip": "",
    "no": 47,
    "day": 20
   },
   {
    "word": "platform",
    "pron": "플랫퍼엄",
    "pos": "n.",
    "meaning": "승강장, 플랫폼",
    "examples": [],
    "tip": "",
    "no": 48,
    "day": 20
   },
   {
    "word": "railroad",
    "pron": "레일로웃",
    "pos": "n.",
    "meaning": "선로",
    "examples": [],
    "tip": "",
    "no": 49,
    "day": 20
   },
   {
    "word": "ticket office",
    "pron": "티킷 어-피(ㅆ)",
    "pos": "n.",
    "meaning": "기차 매표소",
    "examples": [],
    "tip": "",
    "no": 50,
    "day": 20
   },
   {
    "word": "cabin",
    "pron": "캐빈",
    "pos": "n.",
    "meaning": "객실",
    "examples": [],
    "tip": "",
    "no": 51,
    "day": 20
   },
   {
    "word": "ticket gate",
    "pron": "티킷 게잇",
    "pos": "",
    "meaning": "개찰구",
    "examples": [],
    "tip": "",
    "no": 52,
    "day": 20
   },
   {
    "word": "transfer",
    "pron": "츠랜스퍼",
    "pos": "n.",
    "meaning": "환승 / 환승하다",
    "examples": [
     {
      "en": "Where should I transfer?",
      "ko": "어디에서 갈아타야 하나요?"
     }
    ],
    "tip": "",
    "no": 53,
    "day": 20
   },
   {
    "word": "destination",
    "pron": "데스티네이션",
    "pos": "n.",
    "meaning": "목적지, 행선지",
    "examples": [
     {
      "en": "What's your destination?",
      "ko": "목적지가 어디신가요?"
     }
    ],
    "tip": "",
    "no": 54,
    "day": 20
   },
   {
    "word": "subway",
    "pron": "섭웨이",
    "pos": "n.",
    "meaning": "지하철",
    "examples": [],
    "tip": "영국에서는 지하철을 underground라고 하는데, 특히 런던에서는 Tube라고도 합니다. 그리고 프랑스의 파리에서는 the Metro라고 합니다.",
    "no": 55,
    "day": 20,
    "tipLabel": "💡 tip"
   },
   {
    "word": "metro",
    "pron": "메츠로우",
    "pos": "",
    "meaning": "지하철",
    "examples": [],
    "tip": "",
    "no": 56,
    "day": 20
   },
   {
    "word": "subway line map",
    "pron": "섭웨이 라인 맵",
    "pos": "",
    "meaning": "지하철 노선도",
    "examples": [],
    "tip": "",
    "no": 57,
    "day": 20
   },
   {
    "word": "line",
    "pron": "라인",
    "pos": "n.",
    "meaning": "노선",
    "examples": [],
    "tip": "",
    "no": 58,
    "day": 20
   },
   {
    "word": "bus",
    "pron": "버(ㅅ)",
    "pos": "n.",
    "meaning": "버스",
    "examples": [
     {
      "en": "Does this bus go to the airport?",
      "ko": "이 버스가 공항으로 가나요?"
     }
    ],
    "tip": "",
    "no": 59,
    "day": 20
   },
   {
    "word": "bus stop",
    "pron": "버(ㅅ) 스탑",
    "pos": "",
    "meaning": "버스 정류장",
    "examples": [],
    "tip": "",
    "no": 60,
    "day": 20
   },
   {
    "word": "taxi",
    "pron": "택시",
    "pos": "n.",
    "meaning": "택시",
    "examples": [
     {
      "en": "Let's catch a taxi here.",
      "ko": "여기에서 택시를 잡도록 하죠."
     }
    ],
    "tip": "뉴욕에는 택시가 노란색이라서 yellow cab이라고 많이 부릅니다.",
    "no": 61,
    "day": 20,
    "tipLabel": "💡 tip"
   },
   {
    "word": "cab",
    "pron": "캡",
    "pos": "",
    "meaning": "택시",
    "examples": [],
    "tip": "",
    "no": 62,
    "day": 20
   },
   {
    "word": "streetcar",
    "pron": "스츠리잇카-",
    "pos": "n.",
    "meaning": "전차",
    "examples": [],
    "tip": "",
    "no": 63,
    "day": 20
   },
   {
    "word": "trolley car",
    "pron": "츠라알리 카-",
    "pos": "",
    "meaning": "전차",
    "examples": [],
    "tip": "",
    "no": 64,
    "day": 20
   },
   {
    "word": "tram",
    "pron": "츠램",
    "pos": "",
    "meaning": "전차",
    "examples": [],
    "tip": "",
    "no": 65,
    "day": 20
   },
   {
    "word": "bicycle",
    "pron": "바이씨클",
    "pos": "n.",
    "meaning": "자전거",
    "examples": [],
    "tip": "",
    "no": 66,
    "day": 20
   },
   {
    "word": "bike",
    "pron": "바익",
    "pos": "",
    "meaning": "자전거",
    "examples": [],
    "tip": "",
    "no": 67,
    "day": 20
   },
   {
    "word": "motorcycle",
    "pron": "모우터싸이클",
    "pos": "n.",
    "meaning": "오토바이",
    "examples": [],
    "tip": "",
    "no": 68,
    "day": 20
   },
   {
    "word": "ship",
    "pron": "쉽",
    "pos": "n.",
    "meaning": "배, 선박",
    "examples": [],
    "tip": "",
    "no": 69,
    "day": 20
   },
   {
    "word": "boat",
    "pron": "보웃",
    "pos": "n.",
    "meaning": "배, 보트",
    "examples": [],
    "tip": "ship보다 작은 소형의 배를 가리킵니다.",
    "no": 70,
    "day": 20,
    "tipLabel": "💡 tip"
   },
   {
    "word": "port",
    "pron": "퍼-(ㅌ)",
    "pos": "n.",
    "meaning": "항구",
    "examples": [],
    "tip": "",
    "no": 71,
    "day": 20
   },
   {
    "word": "harbor",
    "pron": "하-버",
    "pos": "n.",
    "meaning": "항구(배가 정박할 수 있는 항만을 두루 의미함)",
    "examples": [],
    "tip": "",
    "no": 72,
    "day": 20
   },
   {
    "word": "public transportation",
    "pron": "퍼블릭 츠랜스퍼테이션",
    "pos": "",
    "meaning": "대중 교통 기관",
    "examples": [],
    "tip": "",
    "no": 73,
    "day": 20
   },
   {
    "word": "check-in counter",
    "pron": "체킨 카운터",
    "pos": "",
    "meaning": "공항의 탑승 수속 창구",
    "examples": [],
    "tip": "",
    "no": 74,
    "day": 20
   },
   {
    "word": "terminal",
    "pron": "터-미늘",
    "pos": "n.",
    "meaning": "터미널",
    "examples": [],
    "tip": "",
    "no": 75,
    "day": 20
   },
   {
    "word": "one-way ticket",
    "pron": "원웨이 티킷",
    "pos": "",
    "meaning": "편도표",
    "examples": [
     {
      "en": "A one-way ticket to New York, please.",
      "ko": "뉴욕행 편도로 한 장 부탁 드립니다."
     }
    ],
    "tip": "",
    "no": 76,
    "day": 20
   },
   {
    "word": "one-way",
    "pron": "원웨이",
    "pos": "n.",
    "meaning": "편도 / 한 방향으로만 제한된",
    "examples": [],
    "tip": "",
    "no": 77,
    "day": 20
   },
   {
    "word": "round-trip ticket",
    "pron": "라운(ㄷ)츠립 티킷",
    "pos": "",
    "meaning": "왕복표",
    "examples": [
     {
      "en": "Then give me a round-trip ticket, please.",
      "ko": "그럼 왕복표로 주세요."
     }
    ],
    "tip": "",
    "no": 78,
    "day": 20
   },
   {
    "word": "round-trip",
    "pron": "라운(ㄷ)츠립",
    "pos": "n.",
    "meaning": "왕복 여행 / 왕복 여행의",
    "examples": [],
    "tip": "",
    "no": 79,
    "day": 20
   },
   {
    "word": "apply for a passport",
    "pron": "어플라이 퍼 어 패스퍼-(ㅌ)",
    "pos": "",
    "meaning": "여권을 신청하다",
    "examples": [],
    "tip": "",
    "no": 80,
    "day": 20
   },
   {
    "word": "issue a passport",
    "pron": "이슈- 어 패스퍼-(ㅌ)",
    "pos": "",
    "meaning": "여권을 발급하다",
    "examples": [],
    "tip": "",
    "no": 81,
    "day": 20
   },
   {
    "word": "renew a passport",
    "pron": "리누- 어 패스퍼-(ㅌ)",
    "pos": "",
    "meaning": "여권을 갱신하다",
    "examples": [],
    "tip": "",
    "no": 82,
    "day": 20
   },
   {
    "word": "departure gate",
    "pron": "디파-춰 게잇",
    "pos": "n.",
    "meaning": "탑승구, 게이트",
    "examples": [],
    "tip": "",
    "no": 83,
    "day": 20
   },
   {
    "word": "via",
    "pron": "비-어",
    "pos": "prep.",
    "meaning": "~경유로, ~을 지나서",
    "examples": [
     {
      "en": "I'll go via L.A.",
      "ko": "LA를 경유해서 갑니다."
     }
    ],
    "tip": "",
    "no": 84,
    "day": 20
   },
   {
    "word": "non-stop flight",
    "pron": "난스탑 플라잇",
    "pos": "n.",
    "meaning": "(비행기의) 직항편",
    "examples": [],
    "tip": "",
    "no": 85,
    "day": 20
   },
   {
    "word": "window seat",
    "pron": "윈도우 시잇",
    "pos": "",
    "meaning": "창가석",
    "examples": [],
    "tip": "",
    "no": 86,
    "day": 20
   },
   {
    "word": "aisle seat",
    "pron": "아일 시잇",
    "pos": "",
    "meaning": "통로석",
    "examples": [],
    "tip": "",
    "no": 87,
    "day": 20
   },
   {
    "word": "baggage check",
    "pron": "배기쥐 첵",
    "pos": "",
    "meaning": "수화물 보관증",
    "examples": [],
    "tip": "",
    "no": 88,
    "day": 20
   },
   {
    "word": "luggage ticket",
    "pron": "러기쥐 티킷",
    "pos": "",
    "meaning": "수화물 보관증",
    "examples": [],
    "tip": "",
    "no": 89,
    "day": 20
   },
   {
    "word": "baggage tag",
    "pron": "배기쥐 택",
    "pos": "",
    "meaning": "수화물 꼬리표",
    "examples": [],
    "tip": "",
    "no": 90,
    "day": 20
   },
   {
    "word": "luggage label",
    "pron": "러기쥐 레이벌",
    "pos": "",
    "meaning": "수화물 꼬리표",
    "examples": [],
    "tip": "",
    "no": 91,
    "day": 20
   },
   {
    "word": "check one's baggage",
    "pron": "첵 원(ㅅ) 배기쥐",
    "pos": "",
    "meaning": "짐을 맡기다",
    "examples": [],
    "tip": "",
    "no": 92,
    "day": 20
   },
   {
    "word": "check",
    "pron": "첵",
    "pos": "v.",
    "meaning": "조사하다, 확인하다",
    "examples": [],
    "tip": "",
    "no": 93,
    "day": 20
   },
   {
    "word": "immigration control",
    "pron": "이미그레이션 컨츠로욜",
    "pos": "n.",
    "meaning": "출입국 심사",
    "examples": [
     {
      "en": "Can you give me a hand filling out this departure card?",
      "ko": "출국신고서 작성법을 알려 주시겠습니까?"
     }
    ],
    "tip": "",
    "no": 94,
    "day": 20
   },
   {
    "word": "departure card",
    "pron": "디-파춰 카-(ㄷ)",
    "pos": "",
    "meaning": "출국신고서",
    "examples": [],
    "tip": "",
    "no": 95,
    "day": 20
   },
   {
    "word": "landing card",
    "pron": "랜딩 카-(ㄷ)",
    "pos": "",
    "meaning": "입국신고서",
    "examples": [],
    "tip": "",
    "no": 96,
    "day": 20
   },
   {
    "word": "customs inspection",
    "pron": "커스텀 인스펙션",
    "pos": "n.",
    "meaning": "세관 검사",
    "examples": [],
    "tip": "",
    "no": 97,
    "day": 20
   },
   {
    "word": "declaration card",
    "pron": "데클러레이션 카-(ㄷ)",
    "pos": "n.",
    "meaning": "세관신고서",
    "examples": [],
    "tip": "",
    "no": 98,
    "day": 20
   },
   {
    "word": "on the plane",
    "pron": "언 더 플레인",
    "pos": "",
    "meaning": "기내에서",
    "examples": [],
    "tip": "",
    "no": 99,
    "day": 20
   },
   {
    "word": "flight attendant",
    "pron": "플라잇 어텐던(ㅌ)",
    "pos": "",
    "meaning": "(비행기) 승무원",
    "examples": [],
    "tip": "요즘은 steward나 stewardess 대신 성차별적 요소가 없는 flight attendant나 cabin crew라는 말을 쓰는 항공사들이 많아지는 추세입니다.",
    "no": 100,
    "day": 20,
    "tipLabel": "💡 tip"
   },
   {
    "word": "cabin crew",
    "pron": "캐빈 크루-",
    "pos": "",
    "meaning": "(비행기) 승무원",
    "examples": [],
    "tip": "",
    "no": 101,
    "day": 20
   },
   {
    "word": "in-flight meal",
    "pron": "인플라잇 미일",
    "pos": "",
    "meaning": "기내식",
    "examples": [],
    "tip": "",
    "no": 102,
    "day": 20
   },
   {
    "word": "express train",
    "pron": "익스프레(ㅅ) 츠레인",
    "pos": "n.",
    "meaning": "급행 열차",
    "examples": [],
    "tip": "",
    "no": 103,
    "day": 20
   },
   {
    "word": "local train",
    "pron": "로우컬 츠레인",
    "pos": "n.",
    "meaning": "완행 열차",
    "examples": [],
    "tip": "",
    "no": 104,
    "day": 20
   },
   {
    "word": "(railroad) ticket",
    "pron": "레일로웃 티킷",
    "pos": "",
    "meaning": "기차표",
    "examples": [],
    "tip": "",
    "no": 105,
    "day": 20
   },
   {
    "word": "ticket agent",
    "pron": "티킷 에이전(ㅌ)",
    "pos": "n.",
    "meaning": "기차 매표인",
    "examples": [],
    "tip": "",
    "no": 106,
    "day": 20
   },
   {
    "word": "railroad fare",
    "pron": "레일로웃 페어",
    "pos": "n.",
    "meaning": "기차 요금",
    "examples": [],
    "tip": "",
    "no": 107,
    "day": 20
   },
   {
    "word": "baggage car",
    "pron": "배기쥐 카-",
    "pos": "n.",
    "meaning": "(열차의) 화물칸",
    "examples": [],
    "tip": "비행기의 화물칸은 cargo compartment라고 합니다.",
    "no": 108,
    "day": 20,
    "tipLabel": "💡 tip"
   },
   {
    "word": "luggage van",
    "pron": "러기쥐 밴",
    "pos": "",
    "meaning": "(열차의) 화물칸",
    "examples": [],
    "tip": "",
    "no": 109,
    "day": 20
   },
   {
    "word": "sleeping compartment",
    "pron": "슬리-핑 컴파-(ㅌ)먼(ㅌ)",
    "pos": "",
    "meaning": "침대칸",
    "examples": [],
    "tip": "",
    "no": 110,
    "day": 20
   },
   {
    "word": "sleeper",
    "pron": "슬리-퍼",
    "pos": "",
    "meaning": "침대칸",
    "examples": [],
    "tip": "",
    "no": 111,
    "day": 20
   },
   {
    "word": "dining car",
    "pron": "다이닝 카-",
    "pos": "n.",
    "meaning": "식당칸",
    "examples": [],
    "tip": "",
    "no": 112,
    "day": 20
   },
   {
    "word": "conductor",
    "pron": "컨덕터",
    "pos": "n.",
    "meaning": "(열차의) 차장",
    "examples": [],
    "tip": "미국에서는 conductor, 영국에서는 guard라고 합니다.",
    "no": 113,
    "day": 20,
    "tipLabel": "💡 tip"
   },
   {
    "word": "guard",
    "pron": "가-(ㄷ)",
    "pos": "",
    "meaning": "(열차의) 차장",
    "examples": [],
    "tip": "",
    "no": 114,
    "day": 20
   },
   {
    "word": "timetable",
    "pron": "타임테이블",
    "pos": "n.",
    "meaning": "운행 시간표",
    "examples": [],
    "tip": "",
    "no": 115,
    "day": 20
   },
   {
    "word": "train schedule",
    "pron": "츠레인 스케쥬울",
    "pos": "",
    "meaning": "운행 시간표",
    "examples": [],
    "tip": "",
    "no": 116,
    "day": 20
   },
   {
    "word": "subway station",
    "pron": "섭웨이 스테이션",
    "pos": "",
    "meaning": "지하철역",
    "examples": [
     {
      "en": "Is there a subway station around here?",
      "ko": "근처에 지하철역이 있습니까?"
     }
    ],
    "tip": "",
    "no": 117,
    "day": 20
   },
   {
    "word": "subway transfer station",
    "pron": "섭웨이 츠랜스퍼 스테이션",
    "pos": "",
    "meaning": "지하철 환승역",
    "examples": [],
    "tip": "",
    "no": 118,
    "day": 20
   },
   {
    "word": "bus terminal",
    "pron": "버(ㅅ) 터-미늘",
    "pos": "",
    "meaning": "버스 종점",
    "examples": [],
    "tip": "",
    "no": 119,
    "day": 20
   },
   {
    "word": "bus lane",
    "pron": "버(ㅅ) 레인",
    "pos": "n.",
    "meaning": "버스 전용 차선",
    "examples": [],
    "tip": "",
    "no": 120,
    "day": 20
   },
   {
    "word": "lane",
    "pron": "레인",
    "pos": "n.",
    "meaning": "차선, 차로",
    "examples": [],
    "tip": "",
    "no": 121,
    "day": 20
   },
   {
    "word": "change lanes",
    "pron": "체인쥐 레인(ㅅ)",
    "pos": "",
    "meaning": "차선을 변경하다",
    "examples": [],
    "tip": "",
    "no": 122,
    "day": 20
   },
   {
    "word": "bicycle path",
    "pron": "바이씨클 패쓰",
    "pos": "",
    "meaning": "자전거 도로",
    "examples": [],
    "tip": "",
    "no": 123,
    "day": 20
   },
   {
    "word": "helmet",
    "pron": "헬밋",
    "pos": "n.",
    "meaning": "헬멧",
    "examples": [],
    "tip": "",
    "no": 124,
    "day": 20
   },
   {
    "word": "port of call",
    "pron": "퍼- 터(ㅂ) 커얼",
    "pos": "n.",
    "meaning": "기항지",
    "examples": [],
    "tip": "",
    "no": 125,
    "day": 20
   },
   {
    "word": "seasick",
    "pron": "시-식",
    "pos": "a.",
    "meaning": "뱃멀미하는",
    "examples": [],
    "tip": "",
    "no": 126,
    "day": 20
   },
   {
    "word": "seasickness",
    "pron": "시-식니(ㅅ)",
    "pos": "n.",
    "meaning": "뱃멀미",
    "examples": [],
    "tip": "",
    "no": 127,
    "day": 20
   },
   {
    "word": "nausea",
    "pron": "너-지어",
    "pos": "",
    "meaning": "뱃멀미",
    "examples": [],
    "tip": "",
    "no": 128,
    "day": 20
   }
  ]
 },
 {
  "day": 21,
  "title": "Unit 21. 운전",
  "words": [
   {
    "word": "drive",
    "pron": "드라이(ㅂ)",
    "pos": "v.",
    "meaning": "운전하다",
    "examples": [],
    "tip": "",
    "no": 1,
    "day": 21
   },
   {
    "word": "driving",
    "pron": "드라이빙",
    "pos": "n.",
    "meaning": "운전",
    "examples": [],
    "tip": "",
    "no": 2,
    "day": 21
   },
   {
    "word": "car",
    "pron": "카-",
    "pos": "n.",
    "meaning": "자동차",
    "examples": [],
    "tip": "",
    "no": 3,
    "day": 21
   },
   {
    "word": "van",
    "pron": "밴",
    "pos": "n.",
    "meaning": "소형 트럭, 밴",
    "examples": [],
    "tip": "",
    "no": 4,
    "day": 21
   },
   {
    "word": "convertible car",
    "pron": "컨버-터블 카-",
    "pos": "n.",
    "meaning": "오픈카",
    "examples": [],
    "tip": "",
    "no": 5,
    "day": 21
   },
   {
    "word": "step on",
    "pron": "스텝 언",
    "pos": "",
    "meaning": "밟다",
    "examples": [],
    "tip": "",
    "no": 6,
    "day": 21
   },
   {
    "word": "stop",
    "pron": "스탑",
    "pos": "v.",
    "meaning": "멈추다, 정지하다",
    "examples": [],
    "tip": "",
    "no": 7,
    "day": 21
   },
   {
    "word": "step on the accelerator",
    "pron": "스텝 언 디 억쎌러레이터",
    "pos": "",
    "meaning": "액셀러레이터를 밟다",
    "examples": [],
    "tip": "",
    "no": 8,
    "day": 21
   },
   {
    "word": "brake",
    "pron": "브레익",
    "pos": "n.",
    "meaning": "브레이크 v. 브레이크를 걸어 정지시키다",
    "examples": [],
    "tip": "",
    "no": 9,
    "day": 21
   },
   {
    "word": "headlight",
    "pron": "헤(ㄷ)라잇",
    "pos": "n.",
    "meaning": "헤드라이트",
    "examples": [],
    "tip": "",
    "no": 10,
    "day": 21
   },
   {
    "word": "honk",
    "pron": "헝(ㅋ)",
    "pos": "n.",
    "meaning": "자동차의 경적 소리 v. 경적을 울리다",
    "examples": [],
    "tip": "",
    "no": 11,
    "day": 21
   },
   {
    "word": "horn",
    "pron": "허언",
    "pos": "n.",
    "meaning": "경적",
    "examples": [],
    "tip": "",
    "no": 12,
    "day": 21
   },
   {
    "word": "seat belt",
    "pron": "시잇 벨(ㅌ)",
    "pos": "n.",
    "meaning": "안전벨트",
    "examples": [
     {
      "en": "Fasten your seat belt.",
      "ko": "안전벨트를 매도록 해."
     }
    ],
    "tip": "",
    "no": 13,
    "day": 21
   },
   {
    "word": "wheel",
    "pron": "휘일",
    "pos": "n.",
    "meaning": "(타이어 부분을 포함한, 차량의) 바퀴",
    "examples": [],
    "tip": "",
    "no": 14,
    "day": 21
   },
   {
    "word": "violation",
    "pron": "바이어레이션",
    "pos": "n.",
    "meaning": "위반",
    "examples": [],
    "tip": "",
    "no": 15,
    "day": 21
   },
   {
    "word": "speeding",
    "pron": "스피-딩",
    "pos": "n.",
    "meaning": "속도 위반",
    "examples": [],
    "tip": "",
    "no": 16,
    "day": 21
   },
   {
    "word": "fine",
    "pron": "파인",
    "pos": "n.",
    "meaning": "벌금",
    "examples": [
     {
      "en": "How much is the fine?",
      "ko": "벌금은 얼마인가요?"
     }
    ],
    "tip": "",
    "no": 17,
    "day": 21
   },
   {
    "word": "penalty",
    "pron": "페널티",
    "pos": "",
    "meaning": "벌금",
    "examples": [],
    "tip": "",
    "no": 18,
    "day": 21
   },
   {
    "word": "drunk driving",
    "pron": "드렁(ㅋ) 드라이빙",
    "pos": "n.",
    "meaning": "음주 운전",
    "examples": [],
    "tip": "",
    "no": 19,
    "day": 21
   },
   {
    "word": "traffic light",
    "pron": "츠래픽 라잇",
    "pos": "n.",
    "meaning": "교통 신호등",
    "examples": [],
    "tip": "",
    "no": 20,
    "day": 21
   },
   {
    "word": "sign",
    "pron": "사인",
    "pos": "n.",
    "meaning": "표지판, 간판",
    "examples": [],
    "tip": "",
    "no": 21,
    "day": 21
   },
   {
    "word": "traffic sign",
    "pron": "츠래픽 사인",
    "pos": "",
    "meaning": "교통 표지판",
    "examples": [],
    "tip": "",
    "no": 22,
    "day": 21
   },
   {
    "word": "road sign",
    "pron": "로웃 사인",
    "pos": "",
    "meaning": "도로 표지",
    "examples": [],
    "tip": "",
    "no": 23,
    "day": 21
   },
   {
    "word": "pedestrian crossing",
    "pron": "퍼데스츠리언 크러-싱",
    "pos": "n.",
    "meaning": "횡단보도",
    "examples": [],
    "tip": "",
    "no": 24,
    "day": 21
   },
   {
    "word": "(railway) crossing",
    "pron": "(레일웨이) 크러-싱",
    "pos": "",
    "meaning": "(철도의) 건널목",
    "examples": [],
    "tip": "",
    "no": 25,
    "day": 21
   },
   {
    "word": "fast",
    "pron": "패슷",
    "pos": "a.",
    "meaning": "빠른",
    "examples": [],
    "tip": "",
    "no": 26,
    "day": 21
   },
   {
    "word": "slow",
    "pron": "슬로우",
    "pos": "a.",
    "meaning": "느린",
    "examples": [],
    "tip": "",
    "no": 27,
    "day": 21
   },
   {
    "word": "slowly",
    "pron": "슬로우리",
    "pos": "ad.",
    "meaning": "천천히, 느리게",
    "examples": [],
    "tip": "",
    "no": 28,
    "day": 21
   },
   {
    "word": "driver",
    "pron": "드라이버",
    "pos": "n.",
    "meaning": "운전자, 운전기사",
    "examples": [],
    "tip": "",
    "no": 29,
    "day": 21
   },
   {
    "word": "pedestrian",
    "pron": "퍼데스츠리언",
    "pos": "n.",
    "meaning": "보행자",
    "examples": [],
    "tip": "",
    "no": 30,
    "day": 21
   },
   {
    "word": "walker",
    "pron": "워-커",
    "pos": "n.",
    "meaning": "보행자",
    "examples": [],
    "tip": "",
    "no": 31,
    "day": 21
   },
   {
    "word": "gas station",
    "pron": "개(ㅅ) 스테이션",
    "pos": "n.",
    "meaning": "주유소",
    "examples": [
     {
      "en": "Is there a gas station around here?",
      "ko": "이 근처에 주유소가 있나요?"
     }
    ],
    "tip": "",
    "no": 32,
    "day": 21
   },
   {
    "word": "gasoline",
    "pron": "개설리인",
    "pos": "n.",
    "meaning": "휘발유, 가솔린",
    "examples": [],
    "tip": "",
    "no": 33,
    "day": 21
   },
   {
    "word": "gas",
    "pron": "개(ㅅ)",
    "pos": "n.",
    "meaning": "휘발유, 가솔린",
    "examples": [],
    "tip": "",
    "no": 34,
    "day": 21
   },
   {
    "word": "diesel",
    "pron": "디-절",
    "pos": "n.",
    "meaning": "경유, 디젤",
    "examples": [],
    "tip": "",
    "no": 35,
    "day": 21
   },
   {
    "word": "liter",
    "pron": "리-터",
    "pos": "n.",
    "meaning": "(용량의 단위) 리터",
    "examples": [],
    "tip": "영국에서는 litre라고 씁니다.",
    "no": 36,
    "day": 21,
    "tipLabel": "💡 tip"
   },
   {
    "word": "quantity",
    "pron": "쿠안터티",
    "pos": "n.",
    "meaning": "양(量)",
    "examples": [],
    "tip": "",
    "no": 37,
    "day": 21
   },
   {
    "word": "fill up",
    "pron": "필 업",
    "pos": "",
    "meaning": "(차에) 가득 주유하다",
    "examples": [],
    "tip": "",
    "no": 38,
    "day": 21
   },
   {
    "word": "wash a car",
    "pron": "워쉬 어 카-",
    "pos": "",
    "meaning": "세차하다",
    "examples": [],
    "tip": "",
    "no": 39,
    "day": 21
   },
   {
    "word": "car wash",
    "pron": "카- 워쉬",
    "pos": "n.",
    "meaning": "세차, 세차장",
    "examples": [],
    "tip": "",
    "no": 40,
    "day": 21
   },
   {
    "word": "park",
    "pron": "파악",
    "pos": "v.",
    "meaning": "주차하다",
    "examples": [],
    "tip": "",
    "no": 41,
    "day": 21
   },
   {
    "word": "parking lot",
    "pron": "파-킹 랏",
    "pos": "n.",
    "meaning": "주차장",
    "examples": [],
    "tip": "",
    "no": 42,
    "day": 21
   },
   {
    "word": "no-parking area",
    "pron": "노우파-킹 에어리어",
    "pos": "",
    "meaning": "주차 금지 구역",
    "examples": [
     {
      "en": "Where is the parking lot?",
      "ko": "주차장은 어디에 있나요?"
     }
    ],
    "tip": "",
    "no": 43,
    "day": 21
   },
   {
    "word": "parking space",
    "pron": "파-킹 스페이(ㅆ)",
    "pos": "n.",
    "meaning": "주차하는 자리, 주차하는 공간",
    "examples": [],
    "tip": "",
    "no": 44,
    "day": 21
   },
   {
    "word": "traffic congestion",
    "pron": "츠래픽 컨제스천",
    "pos": "",
    "meaning": "교통 혼잡, 교통 체증",
    "examples": [],
    "tip": "",
    "no": 45,
    "day": 21
   },
   {
    "word": "traffic jam",
    "pron": "츠래픽 잼",
    "pos": "",
    "meaning": "교통 혼잡, 교통 체증",
    "examples": [],
    "tip": "",
    "no": 46,
    "day": 21
   },
   {
    "word": "road",
    "pron": "로웃",
    "pos": "n.",
    "meaning": "도로, 길",
    "examples": [],
    "tip": "road는 도시와 도시를 연결하는 길, street은 시내의 거리를 말합니다.",
    "no": 47,
    "day": 21,
    "tipLabel": "💡 tip"
   },
   {
    "word": "street",
    "pron": "스츠리잇",
    "pos": "n.",
    "meaning": "길, 거리",
    "examples": [],
    "tip": "",
    "no": 48,
    "day": 21
   },
   {
    "word": "lane",
    "pron": "레인",
    "pos": "n.",
    "meaning": "차선, 차로",
    "examples": [],
    "tip": "",
    "no": 49,
    "day": 21
   },
   {
    "word": "intersection",
    "pron": "인터섹션",
    "pos": "n.",
    "meaning": "교차로, (주요 도로와의) 교차점",
    "examples": [],
    "tip": "",
    "no": 50,
    "day": 21
   },
   {
    "word": "the center line",
    "pron": "더 쎈터 라인",
    "pos": "",
    "meaning": "중앙선",
    "examples": [],
    "tip": "",
    "no": 51,
    "day": 21
   },
   {
    "word": "sidewalk",
    "pron": "사이(ㄷ)워억",
    "pos": "n.",
    "meaning": "인도, 보도",
    "examples": [],
    "tip": "",
    "no": 52,
    "day": 21
   },
   {
    "word": "tunnel",
    "pron": "터늘",
    "pos": "n.",
    "meaning": "터널",
    "examples": [],
    "tip": "",
    "no": 53,
    "day": 21
   },
   {
    "word": "compact car",
    "pron": "컴팩(ㅌ) 카-",
    "pos": "",
    "meaning": "소형차, 경차",
    "examples": [],
    "tip": "",
    "no": 54,
    "day": 21
   },
   {
    "word": "truck",
    "pron": "츠럭",
    "pos": "n.",
    "meaning": "트럭",
    "examples": [],
    "tip": "",
    "no": 55,
    "day": 21
   },
   {
    "word": "suv",
    "pron": "에스유-비-",
    "pos": "",
    "meaning": "스포츠형의 다목적 자동차",
    "examples": [],
    "tip": "sport utility vehicle의 준말로, 일반 승용 및 스포츠 등 여가 생활에 맞게 다목적용으로 제작된 차량을 말합니다.",
    "no": 56,
    "day": 21,
    "tipLabel": "💡 tip"
   },
   {
    "word": "rental car",
    "pron": "렌틀 카-",
    "pos": "n.",
    "meaning": "렌터카",
    "examples": [],
    "tip": "",
    "no": 57,
    "day": 21
   },
   {
    "word": "steering wheel",
    "pron": "스티어링 휘일",
    "pos": "n.",
    "meaning": "(자동차의) 핸들",
    "examples": [],
    "tip": "",
    "no": 58,
    "day": 21
   },
   {
    "word": "power steering",
    "pron": "파워 스티어링",
    "pos": "n.",
    "meaning": "파워 핸들",
    "examples": [],
    "tip": "",
    "no": 59,
    "day": 21
   },
   {
    "word": "automatic",
    "pron": "어-터매틱",
    "pos": "n.",
    "meaning": "자동 변속기, 오토매틱 자동차",
    "examples": [
     {
      "en": "I can only drive an automatic.",
      "ko": "오토매틱으로만 운전할 수 있어요."
     }
    ],
    "tip": "",
    "no": 60,
    "day": 21
   },
   {
    "word": "gear",
    "pron": "기어",
    "pos": "n.",
    "meaning": "(변속) 기어 v. 기어를 넣다",
    "examples": [],
    "tip": "",
    "no": 61,
    "day": 21
   },
   {
    "word": "accelerator",
    "pron": "억쎌러레이터",
    "pos": "n.",
    "meaning": "액셀러레이터",
    "examples": [],
    "tip": "",
    "no": 62,
    "day": 21
   },
   {
    "word": "release the accelerator",
    "pron": "릴리-(ㅅ) 디 억쎌러레이터",
    "pos": "",
    "meaning": "액셀러레이터에서 발을 떼다",
    "examples": [],
    "tip": "",
    "no": 63,
    "day": 21
   },
   {
    "word": "clutch",
    "pron": "클러취",
    "pos": "n.",
    "meaning": "클러치",
    "examples": [],
    "tip": "",
    "no": 64,
    "day": 21
   },
   {
    "word": "step on the clutch",
    "pron": "스텝 언 더 클러취",
    "pos": "",
    "meaning": "클러치를 밟다",
    "examples": [],
    "tip": "",
    "no": 65,
    "day": 21
   },
   {
    "word": "release the clutch",
    "pron": "릴리-(ㅅ) 더 클러취",
    "pos": "",
    "meaning": "클러치에서 발을 떼다",
    "examples": [],
    "tip": "",
    "no": 66,
    "day": 21
   },
   {
    "word": "hand brake",
    "pron": "핸(ㄷ) 브레익",
    "pos": "n.",
    "meaning": "핸드 브레이크",
    "examples": [],
    "tip": "",
    "no": 67,
    "day": 21
   },
   {
    "word": "emergency brake",
    "pron": "이머-전씨 브레익",
    "pos": "",
    "meaning": "핸드 브레이크",
    "examples": [],
    "tip": "",
    "no": 68,
    "day": 21
   },
   {
    "word": "step on the brake",
    "pron": "스텝 언 더 브레익",
    "pos": "",
    "meaning": "브레이크를 밟다",
    "examples": [],
    "tip": "",
    "no": 69,
    "day": 21
   },
   {
    "word": "jam on the brakes",
    "pron": "잼 언 더 브레익(ㅅ)",
    "pos": "",
    "meaning": "급브레이크를 밟다",
    "examples": [],
    "tip": "",
    "no": 70,
    "day": 21
   },
   {
    "word": "ease off the brakes",
    "pron": "이- 저-(ㅍ) 더 브레익(ㅅ)",
    "pos": "",
    "meaning": "브레이크를 풀다",
    "examples": [],
    "tip": "",
    "no": 71,
    "day": 21
   },
   {
    "word": "hood",
    "pron": "훗",
    "pos": "n.",
    "meaning": "(자동차의) 보닛",
    "examples": [],
    "tip": "hood는 미국에서, bonnet은 영국에서 씁니다.",
    "no": 72,
    "day": 21,
    "tipLabel": "💡 tip"
   },
   {
    "word": "bonnet",
    "pron": "바닛",
    "pos": "",
    "meaning": "(자동차의) 보닛",
    "examples": [],
    "tip": "",
    "no": 73,
    "day": 21
   },
   {
    "word": "trunk",
    "pron": "츠렁(ㅋ)",
    "pos": "n.",
    "meaning": "(자동차 후부의) 트렁크",
    "examples": [],
    "tip": "",
    "no": 74,
    "day": 21
   },
   {
    "word": "turn signal",
    "pron": "터언 식널",
    "pos": "n.",
    "meaning": "방향지시등",
    "examples": [],
    "tip": "",
    "no": 75,
    "day": 21
   },
   {
    "word": "hazard lights",
    "pron": "해저(ㄷ) 라잇(ㅊ)",
    "pos": "",
    "meaning": "비상등",
    "examples": [],
    "tip": "",
    "no": 76,
    "day": 21
   },
   {
    "word": "turn on hazard lights",
    "pron": "터언 언 해저(ㄷ) 라잇(ㅊ)",
    "pos": "",
    "meaning": "비상등을 켜다",
    "examples": [],
    "tip": "",
    "no": 77,
    "day": 21
   },
   {
    "word": "rearview mirror",
    "pron": "리어뷰- 미러",
    "pos": "n.",
    "meaning": "룸미러",
    "examples": [],
    "tip": "",
    "no": 78,
    "day": 21
   },
   {
    "word": "side-view mirror",
    "pron": "사이(ㄷ)뷰- 미러",
    "pos": "",
    "meaning": "사이드 미러",
    "examples": [],
    "tip": "",
    "no": 79,
    "day": 21
   },
   {
    "word": "wiper",
    "pron": "와이퍼",
    "pos": "n.",
    "meaning": "와이퍼",
    "examples": [],
    "tip": "",
    "no": 80,
    "day": 21
   },
   {
    "word": "bumper",
    "pron": "범퍼",
    "pos": "n.",
    "meaning": "범퍼",
    "examples": [],
    "tip": "",
    "no": 81,
    "day": 21
   },
   {
    "word": "fender",
    "pron": "펜더",
    "pos": "",
    "meaning": "범퍼",
    "examples": [],
    "tip": "",
    "no": 82,
    "day": 21
   },
   {
    "word": "license plate",
    "pron": "라이쓴(ㅅ) 플레잇",
    "pos": "n.",
    "meaning": "(자동차의) 번호판",
    "examples": [],
    "tip": "미국에서는 주마다 각기 다른 자동차 번호판이 있는데, 각 주의 애칭으로 장식을 하고, 개인적으로 의미 있는 숫자나 글자로 만듭니다.",
    "no": 83,
    "day": 21,
    "tipLabel": "💡 tip"
   },
   {
    "word": "rim",
    "pron": "림",
    "pos": "n.",
    "meaning": "타이어 휠",
    "examples": [],
    "tip": "",
    "no": 84,
    "day": 21
   },
   {
    "word": "tire",
    "pron": "타이어",
    "pos": "n.",
    "meaning": "타이어(고무 부분)",
    "examples": [],
    "tip": "영국에서는 tyre라고 씁니다.",
    "no": 85,
    "day": 21,
    "tipLabel": "💡 tip"
   },
   {
    "word": "pump up a tire",
    "pron": "펌 펍 어 타이어",
    "pos": "",
    "meaning": "타이어에 바람을 넣다",
    "examples": [],
    "tip": "",
    "no": 86,
    "day": 21
   },
   {
    "word": "snow tire",
    "pron": "스노우 타이어",
    "pos": "",
    "meaning": "스노우 타이어",
    "examples": [],
    "tip": "",
    "no": 87,
    "day": 21
   },
   {
    "word": "spare tire",
    "pron": "스패어 타이어",
    "pos": "",
    "meaning": "스페어 타이어",
    "examples": [
     {
      "en": "Would you check my tires?",
      "ko": "타이어 점검해 주세요."
     }
    ],
    "tip": "",
    "no": 88,
    "day": 21
   },
   {
    "word": "puncture",
    "pron": "펑춰",
    "pos": "v.",
    "meaning": "(타이어가) 펑크가 나다",
    "examples": [],
    "tip": "지루한 사람이나 인기 없는 여자를 가리키는 속어로 쓰이기도 합니다.",
    "no": 89,
    "day": 21,
    "tipLabel": "💡 tip"
   },
   {
    "word": "go flat",
    "pron": "고우 플랫",
    "pos": "",
    "meaning": "(타이어가) 펑크가 나다",
    "examples": [],
    "tip": "",
    "no": 90,
    "day": 21
   },
   {
    "word": "flat tire",
    "pron": "플랫 타이어",
    "pos": "n.",
    "meaning": "펑크난 타이어",
    "examples": [],
    "tip": "",
    "no": 91,
    "day": 21
   },
   {
    "word": "the road traffic law",
    "pron": "더 로웃 츠래픽 러-",
    "pos": "",
    "meaning": "도로교통법",
    "examples": [],
    "tip": "",
    "no": 92,
    "day": 21
   },
   {
    "word": "traffic violation",
    "pron": "츠래픽 바이어레이션",
    "pos": "",
    "meaning": "교통 위반",
    "examples": [],
    "tip": "",
    "no": 93,
    "day": 21
   },
   {
    "word": "parking violation",
    "pron": "파-킹 바이어레이션",
    "pos": "",
    "meaning": "주차 위반",
    "examples": [],
    "tip": "",
    "no": 94,
    "day": 21
   },
   {
    "word": "breathalyzer",
    "pron": "브레썰라이저",
    "pos": "n.",
    "meaning": "음주측정기",
    "examples": [],
    "tip": "",
    "no": 95,
    "day": 21
   },
   {
    "word": "drunkometer",
    "pron": "드렁카머터",
    "pos": "",
    "meaning": "음주측정기",
    "examples": [],
    "tip": "",
    "no": 96,
    "day": 21
   },
   {
    "word": "one way",
    "pron": "원 웨이",
    "pos": "",
    "meaning": "일방 통행",
    "examples": [],
    "tip": "",
    "no": 97,
    "day": 21
   },
   {
    "word": "jaywalk",
    "pron": "제이워억",
    "pos": "v.",
    "meaning": "무단 횡단하다",
    "examples": [
     {
      "en": "You shouldn't jaywalk.",
      "ko": "무단 횡단을 하면 안 됩니다."
     }
    ],
    "tip": "",
    "no": 98,
    "day": 21
   },
   {
    "word": "speed",
    "pron": "스피잇",
    "pos": "n.",
    "meaning": "속도 v. 속도를 빠르게 하다",
    "examples": [],
    "tip": "",
    "no": 99,
    "day": 21
   },
   {
    "word": "regulation speed",
    "pron": "레귤레이션 스피잇",
    "pos": "",
    "meaning": "규정 속도",
    "examples": [],
    "tip": "",
    "no": 100,
    "day": 21
   },
   {
    "word": "hurry",
    "pron": "허리",
    "pos": "n.",
    "meaning": "서두르기, 허둥대기 v. 서두르다",
    "examples": [],
    "tip": "",
    "no": 101,
    "day": 21
   },
   {
    "word": "in a hurry",
    "pron": "인 어 허리",
    "pos": "",
    "meaning": "서둘러, 급히",
    "examples": [],
    "tip": "",
    "no": 102,
    "day": 21
   },
   {
    "word": "the last stop",
    "pron": "더 래슷 스탑",
    "pos": "",
    "meaning": "종점",
    "examples": [],
    "tip": "",
    "no": 103,
    "day": 21
   },
   {
    "word": "natural gas",
    "pron": "내처럴 개(ㅅ)",
    "pos": "n.",
    "meaning": "천연가스",
    "examples": [
     {
      "en": "Fill it up, please.",
      "ko": "기름 가득 채워 주세요."
     }
    ],
    "tip": "",
    "no": 104,
    "day": 21
   },
   {
    "word": "free parking",
    "pron": "프리- 파-킹",
    "pos": "",
    "meaning": "무료 주차장",
    "examples": [],
    "tip": "",
    "no": 105,
    "day": 21
   },
   {
    "word": "pay parking",
    "pron": "페이 파-킹",
    "pos": "",
    "meaning": "유료 주차장",
    "examples": [],
    "tip": "",
    "no": 106,
    "day": 21
   },
   {
    "word": "u-turn",
    "pron": "유-터언",
    "pos": "n.",
    "meaning": "유(U)턴 v. 유(U)턴하다",
    "examples": [],
    "tip": "",
    "no": 107,
    "day": 21
   },
   {
    "word": "turn left",
    "pron": "터언 레풋",
    "pos": "",
    "meaning": "좌회전하다",
    "examples": [],
    "tip": "",
    "no": 108,
    "day": 21
   },
   {
    "word": "turn right",
    "pron": "터언 라잇",
    "pos": "",
    "meaning": "우회전하다",
    "examples": [],
    "tip": "",
    "no": 109,
    "day": 21
   },
   {
    "word": "driver's license",
    "pron": "드라이버(ㅅ) 라이쓴(ㅅ)",
    "pos": "",
    "meaning": "운전 면허증",
    "examples": [],
    "tip": "",
    "no": 110,
    "day": 21
   },
   {
    "word": "driving test",
    "pron": "드라이빙 테슷",
    "pos": "",
    "meaning": "운전 면허 시험",
    "examples": [],
    "tip": "",
    "no": 111,
    "day": 21
   },
   {
    "word": "highway",
    "pron": "하이웨이",
    "pos": "n.",
    "meaning": "고속도로",
    "examples": [],
    "tip": "highway는 도시와 도시를 연결하는 도로를, expressway는 도시 안이나 도시 주변의 고속도로를 가리킵니다.",
    "no": 112,
    "day": 21,
    "tipLabel": "💡 tip"
   },
   {
    "word": "expressway",
    "pron": "익스프레(ㅅ)웨이",
    "pos": "",
    "meaning": "고속도로",
    "examples": [],
    "tip": "",
    "no": 113,
    "day": 21
   },
   {
    "word": "side road",
    "pron": "사이(ㄷ) 로웃",
    "pos": "",
    "meaning": "갓길",
    "examples": [],
    "tip": "",
    "no": 114,
    "day": 21
   }
  ]
 },
 {
  "day": 22,
  "title": "Unit 22. 숙박",
  "words": [
   {
    "word": "accommodation",
    "pron": "어카머데이션",
    "pos": "n.",
    "meaning": "숙소, 숙박 시설",
    "examples": [],
    "tip": "방, 침대 이외에 식사, 오락 시설도 포함한 것을 말합니다.",
    "no": 1,
    "day": 22,
    "tipLabel": "💡 tip"
   },
   {
    "word": "hotel",
    "pron": "호우텔",
    "pos": "n.",
    "meaning": "호텔",
    "examples": [
     {
      "en": "I need information on local hotels.",
      "ko": "이 지역의 호텔 정보를 알고 싶어요."
     }
    ],
    "tip": "",
    "no": 2,
    "day": 22
   },
   {
    "word": "motel",
    "pron": "모우텔",
    "pos": "n.",
    "meaning": "모텔(주차장이 객실 가까이 있는 자동차 여행용 호텔)",
    "examples": [],
    "tip": "",
    "no": 3,
    "day": 22
   },
   {
    "word": "inn",
    "pron": "인",
    "pos": "n.",
    "meaning": "여관, 호텔",
    "examples": [],
    "tip": "보통 시골에 있는 작은 숙박 시설을 가리키지만, 서비스를 간략화한 크고 근대적인 호텔을 가리키는 말로 쓰이기도 합니다.",
    "no": 4,
    "day": 22,
    "tipLabel": "💡 tip"
   },
   {
    "word": "reception desk",
    "pron": "리쎕션 데슥",
    "pos": "n.",
    "meaning": "(호텔의) 프런트",
    "examples": [],
    "tip": "",
    "no": 5,
    "day": 22
   },
   {
    "word": "front desk",
    "pron": "프런(ㅌ) 데슥",
    "pos": "",
    "meaning": "(호텔의) 프런트",
    "examples": [],
    "tip": "",
    "no": 6,
    "day": 22
   },
   {
    "word": "room service",
    "pron": "루움 서-비(ㅆ)",
    "pos": "n.",
    "meaning": "룸서비스",
    "examples": [
     {
      "en": "I never ordered any room service.",
      "ko": "저는 룸서비스를 시키지 않았는데요."
     }
    ],
    "tip": "",
    "no": 7,
    "day": 22
   },
   {
    "word": "reserve",
    "pron": "리저-(ㅂ)",
    "pos": "v.",
    "meaning": "예약하다",
    "examples": [],
    "tip": "",
    "no": 8,
    "day": 22
   },
   {
    "word": "book",
    "pron": "북",
    "pos": "v.",
    "meaning": "예약하다",
    "examples": [],
    "tip": "",
    "no": 9,
    "day": 22
   },
   {
    "word": "cancel",
    "pron": "캔쓸",
    "pos": "v.",
    "meaning": "취소하다",
    "examples": [
     {
      "en": "Cancel my reservation, please.",
      "ko": "예약을 취소해 주세요."
     }
    ],
    "tip": "",
    "no": 10,
    "day": 22
   },
   {
    "word": "reservation",
    "pron": "레저베이션",
    "pos": "n.",
    "meaning": "예약",
    "examples": [
     {
      "en": "I'd like to book a room.",
      "ko": "예약을 하고 싶습니다."
     },
     {
      "en": "I'd like to make a reservation for 2 nights next week.",
      "ko": "다음 주에 2박을 예약하고 싶습니다."
     }
    ],
    "tip": "",
    "no": 11,
    "day": 22
   },
   {
    "word": "booking",
    "pron": "부킹",
    "pos": "n.",
    "meaning": "예약",
    "examples": [],
    "tip": "",
    "no": 12,
    "day": 22
   },
   {
    "word": "check in",
    "pron": "첵 인",
    "pos": "v.",
    "meaning": "체크인하다, 투숙 수속을 밟다",
    "examples": [
     {
      "en": "Check in, please.",
      "ko": "체크인을 부탁합니다."
     }
    ],
    "tip": "",
    "no": 13,
    "day": 22
   },
   {
    "word": "check-in",
    "pron": "체킨",
    "pos": "n.",
    "meaning": "체크인",
    "examples": [],
    "tip": "",
    "no": 14,
    "day": 22
   },
   {
    "word": "check out",
    "pron": "첵 아웃",
    "pos": "v.",
    "meaning": "체크아웃하다, 퇴실 수속을 밟다",
    "examples": [],
    "tip": "",
    "no": 15,
    "day": 22
   },
   {
    "word": "check-out",
    "pron": "체카웃",
    "pos": "n.",
    "meaning": "체크아웃",
    "examples": [],
    "tip": "",
    "no": 16,
    "day": 22
   },
   {
    "word": "single room",
    "pron": "싱글 루움",
    "pos": "n.",
    "meaning": "싱글룸",
    "examples": [
     {
      "en": "I'd like a single room with a bath.",
      "ko": "욕실이 있는 싱글룸으로 부탁합니다."
     }
    ],
    "tip": "호텔 방은 형태에 따라 주로 싱글룸(1인용 침대가 놓인 1인용 객실), 더블룸(킹 또는 퀸 사이즈의 더블 침대가 놓인 객실로, 더블 침대를 2명이 사용할 경우 세미 더블룸이라고 함), 트윈룸(싱글 침대 두 개가 놓인 2인용 객실), 스위트룸(침실과 응접실이 포함된 특실)으로 나뉩니다.",
    "no": 17,
    "day": 22,
    "tipLabel": "💡 tip"
   },
   {
    "word": "twin room",
    "pron": "트윈 루움",
    "pos": "n.",
    "meaning": "트윈룸",
    "examples": [],
    "tip": "",
    "no": 18,
    "day": 22
   },
   {
    "word": "double room",
    "pron": "더블 루움",
    "pos": "n.",
    "meaning": "더블룸",
    "examples": [],
    "tip": "",
    "no": 19,
    "day": 22
   },
   {
    "word": "suite",
    "pron": "스윗",
    "pos": "n.",
    "meaning": "스위트룸",
    "examples": [],
    "tip": "",
    "no": 20,
    "day": 22
   },
   {
    "word": "equipment",
    "pron": "이쿠입먼(ㅌ)",
    "pos": "n.",
    "meaning": "설비, 기구",
    "examples": [],
    "tip": "",
    "no": 21,
    "day": 22
   },
   {
    "word": "air conditioning",
    "pron": "에어 컨디셔닝",
    "pos": "",
    "meaning": "냉방 장치, 에어컨, 공기 조절 장치",
    "examples": [],
    "tip": "",
    "no": 22,
    "day": 22
   },
   {
    "word": "facility",
    "pron": "퍼씰러티",
    "pos": "n.",
    "meaning": "설비, 시설",
    "examples": [],
    "tip": "",
    "no": 23,
    "day": 22
   },
   {
    "word": "ventilation",
    "pron": "벤터레이션",
    "pos": "n.",
    "meaning": "통풍, 환기",
    "examples": [],
    "tip": "",
    "no": 24,
    "day": 22
   },
   {
    "word": "heating",
    "pron": "히-팅",
    "pos": "n.",
    "meaning": "난방 장치",
    "examples": [],
    "tip": "",
    "no": 25,
    "day": 22
   },
   {
    "word": "maid",
    "pron": "메잇",
    "pos": "n.",
    "meaning": "메이드, 청소부",
    "examples": [],
    "tip": "",
    "no": 26,
    "day": 22
   },
   {
    "word": "doorman",
    "pron": "더-먼",
    "pos": "n.",
    "meaning": "도어맨",
    "examples": [],
    "tip": "",
    "no": 27,
    "day": 22
   },
   {
    "word": "bellhop",
    "pron": "벨합",
    "pos": "n.",
    "meaning": "벨보이",
    "examples": [],
    "tip": "",
    "no": 28,
    "day": 22
   },
   {
    "word": "bellboy",
    "pron": "벨버이",
    "pos": "",
    "meaning": "벨보이",
    "examples": [],
    "tip": "",
    "no": 29,
    "day": 22
   },
   {
    "word": "restroom",
    "pron": "레슷루움",
    "pos": "n.",
    "meaning": "화장실",
    "examples": [],
    "tip": "",
    "no": 30,
    "day": 22
   },
   {
    "word": "laundry room",
    "pron": "러언드리 루움",
    "pos": "n.",
    "meaning": "세탁실",
    "examples": [],
    "tip": "",
    "no": 31,
    "day": 22
   },
   {
    "word": "safe",
    "pron": "세이(ㅍ)",
    "pos": "n.",
    "meaning": "금고",
    "examples": [
     {
      "en": "Could I leave some of my valuables in the hotel safe?",
      "ko": "귀중품을 호텔 금고에 보관할 수 있습니까?"
     }
    ],
    "tip": "",
    "no": 32,
    "day": 22
   },
   {
    "word": "breakfast voucher",
    "pron": "브렉퍼슷 바우처",
    "pos": "",
    "meaning": "조식 쿠폰",
    "examples": [],
    "tip": "",
    "no": 33,
    "day": 22
   },
   {
    "word": "clean",
    "pron": "클리인",
    "pos": "a.",
    "meaning": "깨끗한, 청결한",
    "examples": [],
    "tip": "",
    "no": 34,
    "day": 22
   },
   {
    "word": "dirty",
    "pron": "더-티",
    "pos": "a.",
    "meaning": "더러운, 지저분한",
    "examples": [],
    "tip": "",
    "no": 35,
    "day": 22
   },
   {
    "word": "balcony",
    "pron": "밸커니",
    "pos": "n.",
    "meaning": "발코니",
    "examples": [],
    "tip": "",
    "no": 36,
    "day": 22
   },
   {
    "word": "view",
    "pron": "뷰-",
    "pos": "n.",
    "meaning": "전망",
    "examples": [
     {
      "en": "I'd like a room with a view of the ocean.",
      "ko": "바다가 보이는 방으로 부탁합니다."
     }
    ],
    "tip": "",
    "no": 37,
    "day": 22
   },
   {
    "word": "terrace",
    "pron": "테러(ㅆ)",
    "pos": "n.",
    "meaning": "테라스",
    "examples": [],
    "tip": "",
    "no": 38,
    "day": 22
   },
   {
    "word": "view of the ocean",
    "pron": "뷰- 어(ㅂ) 디 오우션",
    "pos": "",
    "meaning": "바다 전망",
    "examples": [],
    "tip": "",
    "no": 39,
    "day": 22
   },
   {
    "word": "beach umbrella",
    "pron": "비-취 엄브렐러",
    "pos": "",
    "meaning": "비치파라솔",
    "examples": [],
    "tip": "",
    "no": 40,
    "day": 22
   },
   {
    "word": "pool",
    "pron": "푸울",
    "pos": "n.",
    "meaning": "수영장",
    "examples": [],
    "tip": "",
    "no": 41,
    "day": 22
   },
   {
    "word": "charge",
    "pron": "차-쥐",
    "pos": "n.",
    "meaning": "요금, 경비",
    "examples": [
     {
      "en": "What is this charge?",
      "ko": "이 항목은 무슨 요금입니까?"
     }
    ],
    "tip": "charge는 서비스 행위에 대한 가격, price는 물건의 가격, cost는 물건이나 봉사 등의 취득으로 인해 지불되는 대가를 의미합니다.",
    "no": 42,
    "day": 22,
    "tipLabel": "💡 tip"
   },
   {
    "word": "pay",
    "pron": "페이",
    "pos": "v.",
    "meaning": "지불하다",
    "examples": [],
    "tip": "",
    "no": 43,
    "day": 22
   },
   {
    "word": "price",
    "pron": "프라이(ㅆ)",
    "pos": "n.",
    "meaning": "가격, 대가",
    "examples": [],
    "tip": "",
    "no": 44,
    "day": 22
   },
   {
    "word": "cost",
    "pron": "커-슷",
    "pos": "n.",
    "meaning": "비용 v. 비용이 들다",
    "examples": [],
    "tip": "",
    "no": 45,
    "day": 22
   },
   {
    "word": "bedding",
    "pron": "베딩",
    "pos": "n.",
    "meaning": "침구류",
    "examples": [],
    "tip": "",
    "no": 46,
    "day": 22
   },
   {
    "word": "blanket",
    "pron": "블랭킷",
    "pos": "n.",
    "meaning": "담요",
    "examples": [],
    "tip": "",
    "no": 47,
    "day": 22
   },
   {
    "word": "pillow",
    "pron": "필로우",
    "pos": "n.",
    "meaning": "베개",
    "examples": [],
    "tip": "",
    "no": 48,
    "day": 22
   },
   {
    "word": "sheet",
    "pron": "쉬잇",
    "pos": "n.",
    "meaning": "(침대) 시트",
    "examples": [],
    "tip": "",
    "no": 49,
    "day": 22
   },
   {
    "word": "towel",
    "pron": "타우얼",
    "pos": "n.",
    "meaning": "수건",
    "examples": [],
    "tip": "",
    "no": 50,
    "day": 22
   },
   {
    "word": "shampoo",
    "pron": "샴푸-",
    "pos": "n.",
    "meaning": "샴푸",
    "examples": [],
    "tip": "",
    "no": 51,
    "day": 22
   },
   {
    "word": "soap",
    "pron": "소웁",
    "pos": "n.",
    "meaning": "비누",
    "examples": [],
    "tip": "",
    "no": 52,
    "day": 22
   },
   {
    "word": "rinse",
    "pron": "린(ㅅ)",
    "pos": "n.",
    "meaning": "린스",
    "examples": [],
    "tip": "",
    "no": 53,
    "day": 22
   },
   {
    "word": "body soap",
    "pron": "바디 소웁",
    "pos": "",
    "meaning": "바디 비누",
    "examples": [],
    "tip": "",
    "no": 54,
    "day": 22
   },
   {
    "word": "toothbrush",
    "pron": "투-쓰브러쉬",
    "pos": "n.",
    "meaning": "칫솔",
    "examples": [],
    "tip": "",
    "no": 55,
    "day": 22
   },
   {
    "word": "comb",
    "pron": "코움",
    "pos": "n.",
    "meaning": "빗",
    "examples": [],
    "tip": "",
    "no": 56,
    "day": 22
   },
   {
    "word": "hair drier",
    "pron": "헤어 드라이어",
    "pos": "",
    "meaning": "헤어 드라이기",
    "examples": [],
    "tip": "",
    "no": 57,
    "day": 22
   },
   {
    "word": "hair dryer",
    "pron": "헤어 드라이어",
    "pos": "n.",
    "meaning": "헤어 드라이기",
    "examples": [],
    "tip": "",
    "no": 58,
    "day": 22
   },
   {
    "word": "toothpaste",
    "pron": "투-쓰페이슷",
    "pos": "n.",
    "meaning": "치약",
    "examples": [],
    "tip": "",
    "no": 59,
    "day": 22
   },
   {
    "word": "razor",
    "pron": "레이저",
    "pos": "n.",
    "meaning": "면도기",
    "examples": [],
    "tip": "",
    "no": 60,
    "day": 22
   },
   {
    "word": "shaver",
    "pron": "쉐이버",
    "pos": "",
    "meaning": "면도기",
    "examples": [],
    "tip": "",
    "no": 61,
    "day": 22
   },
   {
    "word": "toilet paper",
    "pron": "터일럿 페이퍼",
    "pos": "n.",
    "meaning": "화장지",
    "examples": [],
    "tip": "",
    "no": 62,
    "day": 22
   },
   {
    "word": "tissue",
    "pron": "티슈-",
    "pos": "n.",
    "meaning": "티슈",
    "examples": [],
    "tip": "",
    "no": 63,
    "day": 22
   },
   {
    "word": "stay",
    "pron": "스테이",
    "pos": "v.",
    "meaning": "머무르다, 체류하다",
    "examples": [],
    "tip": "",
    "no": 64,
    "day": 22
   },
   {
    "word": "residence",
    "pron": "레지던(ㅆ)",
    "pos": "n.",
    "meaning": "거처, 거주",
    "examples": [],
    "tip": "",
    "no": 65,
    "day": 22
   },
   {
    "word": "home",
    "pron": "호움",
    "pos": "n.",
    "meaning": "집, 가정",
    "examples": [],
    "tip": "'가족에 중점을 두어 그들이 거주하는 공간을 의미합니다.",
    "no": 66,
    "day": 22,
    "tipLabel": "💡 tip"
   },
   {
    "word": "house",
    "pron": "하우(ㅅ)",
    "pos": "n.",
    "meaning": "집, 가옥",
    "examples": [],
    "tip": "",
    "no": 67,
    "day": 22
   },
   {
    "word": "youth hostel",
    "pron": "유-쓰 하스틀",
    "pos": "",
    "meaning": "유스 호스텔",
    "examples": [],
    "tip": "",
    "no": 68,
    "day": 22
   },
   {
    "word": "dormitory",
    "pron": "더-머터-리",
    "pos": "n.",
    "meaning": "공동 침실, 도미토리",
    "examples": [],
    "tip": "",
    "no": 69,
    "day": 22
   },
   {
    "word": "guesthouse",
    "pron": "게슷하우(ㅅ)",
    "pos": "n.",
    "meaning": "게스트 하우스(저렴하게 숙박할 수 있는 시설)",
    "examples": [],
    "tip": "",
    "no": 70,
    "day": 22
   },
   {
    "word": "hotel lobby",
    "pron": "호우텔 라비",
    "pos": "",
    "meaning": "호텔 로비",
    "examples": [],
    "tip": "",
    "no": 71,
    "day": 22
   },
   {
    "word": "make a reservation",
    "pron": "메익 어 레저베이션",
    "pos": "",
    "meaning": "예약하다",
    "examples": [],
    "tip": "",
    "no": 72,
    "day": 22
   },
   {
    "word": "have a reservation",
    "pron": "해 버 레저베이션",
    "pos": "",
    "meaning": "예약하다",
    "examples": [],
    "tip": "",
    "no": 73,
    "day": 22
   },
   {
    "word": "booked up",
    "pron": "북 텁",
    "pos": "",
    "meaning": "예약이 꽉 찬",
    "examples": [
     {
      "en": "I'm sorry we're all booked up.",
      "ko": "죄송하지만, 방이 만원입니다."
     }
    ],
    "tip": "",
    "no": 74,
    "day": 22
   },
   {
    "word": "full",
    "pron": "풀",
    "pos": "",
    "meaning": "예약이 꽉 찬",
    "examples": [],
    "tip": "",
    "no": 75,
    "day": 22
   },
   {
    "word": "complain",
    "pron": "컴플레인",
    "pos": "v.",
    "meaning": "불평하다, 투덜대다",
    "examples": [],
    "tip": "",
    "no": 76,
    "day": 22
   },
   {
    "word": "minibar",
    "pron": "미니바-",
    "pos": "n.",
    "meaning": "미니바",
    "examples": [],
    "tip": "",
    "no": 77,
    "day": 22
   },
   {
    "word": "restaurant",
    "pron": "레스터런(ㅌ)",
    "pos": "n.",
    "meaning": "음식점, 식당",
    "examples": [],
    "tip": "",
    "no": 78,
    "day": 22
   },
   {
    "word": "wireless internet",
    "pron": "와이어리(ㅅ) 인터-넷",
    "pos": "",
    "meaning": "무선 인터넷",
    "examples": [],
    "tip": "",
    "no": 79,
    "day": 22
   },
   {
    "word": "free internet",
    "pron": "프리- 인터-넷",
    "pos": "",
    "meaning": "무료 인터넷",
    "examples": [],
    "tip": "",
    "no": 80,
    "day": 22
   },
   {
    "word": "comfortable",
    "pron": "컴퍼터블",
    "pos": "a.",
    "meaning": "편안한, 안락한",
    "examples": [],
    "tip": "",
    "no": 81,
    "day": 22
   },
   {
    "word": "uncomfortable",
    "pron": "언컴퍼터블",
    "pos": "a.",
    "meaning": "불편한",
    "examples": [],
    "tip": "",
    "no": 82,
    "day": 22
   },
   {
    "word": "view of the city",
    "pron": "뷰- 어(ㅂ) 더 씨티",
    "pos": "",
    "meaning": "시내 전망",
    "examples": [],
    "tip": "",
    "no": 83,
    "day": 22
   },
   {
    "word": "total amount",
    "pron": "토우틀 어마운(ㅌ)",
    "pos": "",
    "meaning": "전액 요금",
    "examples": [],
    "tip": "",
    "no": 84,
    "day": 22
   },
   {
    "word": "discount charge",
    "pron": "디스카운(ㅌ) 차-쥐",
    "pos": "",
    "meaning": "할인 요금",
    "examples": [],
    "tip": "",
    "no": 85,
    "day": 22
   },
   {
    "word": "extra charge",
    "pron": "엑스츠러 차-쥐",
    "pos": "",
    "meaning": "추가 요금",
    "examples": [],
    "tip": "",
    "no": 86,
    "day": 22
   },
   {
    "word": "addition",
    "pron": "어디션",
    "pos": "n.",
    "meaning": "추가",
    "examples": [],
    "tip": "",
    "no": 87,
    "day": 22
   },
   {
    "word": "tax",
    "pron": "택(ㅅ)",
    "pos": "n.",
    "meaning": "세금",
    "examples": [],
    "tip": "",
    "no": 88,
    "day": 22
   },
   {
    "word": "tax-free",
    "pron": "택(ㅅ) 프리-",
    "pos": "a.",
    "meaning": "면세의",
    "examples": [],
    "tip": "",
    "no": 89,
    "day": 22
   },
   {
    "word": "night",
    "pron": "나잇",
    "pos": "n.",
    "meaning": "밤",
    "examples": [
     {
      "en": "For how many nights?",
      "ko": "며칠 묵으실 겁니까?"
     }
    ],
    "tip": "우리말의 '2박 3일'이라는 표현은 three days and two nights라고 합니다.",
    "no": 90,
    "day": 22,
    "tipLabel": "💡 tip"
   },
   {
    "word": "amenity",
    "pron": "어메너티",
    "pos": "n.",
    "meaning": "편의시설, 호텔의 서비스용품",
    "examples": [],
    "tip": "손님의 편의를 꾀하고 좋은 서비스를 제공하기 위해 호텔에서 객실 등에 무료로 준비해 놓은 각종 소모품 및 서비스용품을 지칭합니다. 복수형으로 쓰입니다.",
    "no": 91,
    "day": 22,
    "tipLabel": "💡 tip"
   },
   {
    "word": "shower cap",
    "pron": "샤워 캡",
    "pos": "n.",
    "meaning": "샤워용 (비닐) 모자",
    "examples": [],
    "tip": "",
    "no": 92,
    "day": 22
   },
   {
    "word": "shave",
    "pron": "쉐이(ㅂ)",
    "pos": "v.",
    "meaning": "면도하다",
    "examples": [],
    "tip": "",
    "no": 93,
    "day": 22
   },
   {
    "word": "get a shave",
    "pron": "겟 어 쉐이(ㅂ)",
    "pos": "",
    "meaning": "면도하다",
    "examples": [],
    "tip": "",
    "no": 94,
    "day": 22
   },
   {
    "word": "iron",
    "pron": "아이언",
    "pos": "n.",
    "meaning": "다리미",
    "examples": [],
    "tip": "",
    "no": 95,
    "day": 22
   },
   {
    "word": "napkin",
    "pron": "냅킨",
    "pos": "n.",
    "meaning": "냅킨",
    "examples": [],
    "tip": "",
    "no": 96,
    "day": 22
   }
  ]
 },
 {
  "day": 23,
  "title": "Unit 23. 관광",
  "words": [
   {
    "word": "tour",
    "pron": "투어",
    "pos": "n.",
    "meaning": "관광, 여행하다",
    "examples": [
     {
      "en": "I'm here just for sightseeing.",
      "ko": "관광차 왔습니다."
     }
    ],
    "tip": "trip은 tour보다 짧고, 기간이 명확한 왕복 여행을, travel은 일주나 관광을 포함한 여행이며, journey는 상당 기간에 걸친 원거리 육로 여행을 가리킵니다.",
    "no": 1,
    "day": 23,
    "tipLabel": "💡 tip"
   },
   {
    "word": "tourism",
    "pron": "투어리즘",
    "pos": "n.",
    "meaning": "관광, 여행(특히 관광 여행을 가리킴)",
    "examples": [],
    "tip": "",
    "no": 2,
    "day": 23
   },
   {
    "word": "trip",
    "pron": "츠립",
    "pos": "n.",
    "meaning": "여행",
    "examples": [],
    "tip": "",
    "no": 3,
    "day": 23
   },
   {
    "word": "travel",
    "pron": "츠래벌",
    "pos": "n.",
    "meaning": "여행, 여행하다",
    "examples": [],
    "tip": "",
    "no": 4,
    "day": 23
   },
   {
    "word": "journey",
    "pron": "저-니",
    "pos": "n.",
    "meaning": "여행",
    "examples": [],
    "tip": "",
    "no": 5,
    "day": 23
   },
   {
    "word": "sightseeing",
    "pron": "사잇시-잉",
    "pos": "n.",
    "meaning": "관광, 구경",
    "examples": [],
    "tip": "",
    "no": 6,
    "day": 23
   },
   {
    "word": "tourist information office",
    "pron": "투어리슷 인퍼메이션 어-피(ㅆ)",
    "pos": "",
    "meaning": "관광 안내소",
    "examples": [
     {
      "en": "Where is the tourist information office?",
      "ko": "관광 안내소는 어디에 있나요?"
     }
    ],
    "tip": "",
    "no": 7,
    "day": 23
   },
   {
    "word": "inform",
    "pron": "인퍼엄",
    "pos": "v.",
    "meaning": "정보를 제공하다",
    "examples": [
     {
      "en": "I need information on local hotels.",
      "ko": "이 지역의 호텔 정보를 알고 싶은데요."
     }
    ],
    "tip": "",
    "no": 8,
    "day": 23
   },
   {
    "word": "information",
    "pron": "인퍼메이션",
    "pos": "n.",
    "meaning": "정보",
    "examples": [],
    "tip": "",
    "no": 9,
    "day": 23
   },
   {
    "word": "guide",
    "pron": "가이(ㄷ)",
    "pos": "n.",
    "meaning": "안내인, 가이드, 안내하다",
    "examples": [],
    "tip": "",
    "no": 10,
    "day": 23
   },
   {
    "word": "map",
    "pron": "맵",
    "pos": "n.",
    "meaning": "지도",
    "examples": [
     {
      "en": "Could you draw me a map?",
      "ko": "약도를 좀 그려 주시겠습니까?"
     }
    ],
    "tip": "",
    "no": 11,
    "day": 23
   },
   {
    "word": "tourist",
    "pron": "투어리슷",
    "pos": "n.",
    "meaning": "관광객",
    "examples": [],
    "tip": "",
    "no": 12,
    "day": 23
   },
   {
    "word": "traveler",
    "pron": "츠래블러",
    "pos": "",
    "meaning": "관광객",
    "examples": [],
    "tip": "",
    "no": 13,
    "day": 23
   },
   {
    "word": "visitor",
    "pron": "비지터",
    "pos": "n.",
    "meaning": "방문객, 손님",
    "examples": [],
    "tip": "",
    "no": 14,
    "day": 23
   },
   {
    "word": "guest",
    "pron": "게슷",
    "pos": "",
    "meaning": "방문객, 손님",
    "examples": [],
    "tip": "",
    "no": 15,
    "day": 23
   },
   {
    "word": "scenery",
    "pron": "시-너리",
    "pos": "n.",
    "meaning": "풍경, 경치",
    "examples": [],
    "tip": "",
    "no": 16,
    "day": 23
   },
   {
    "word": "monument",
    "pron": "마뉴먼(ㅌ)",
    "pos": "n.",
    "meaning": "기념물, 유적",
    "examples": [],
    "tip": "",
    "no": 17,
    "day": 23
   },
   {
    "word": "memorial",
    "pron": "머머-리얼",
    "pos": "n.",
    "meaning": "기념관, 기념물, 기념비",
    "examples": [],
    "tip": "",
    "no": 18,
    "day": 23
   },
   {
    "word": "landmark",
    "pron": "랜(ㄷ)마-악",
    "pos": "n.",
    "meaning": "표지물",
    "examples": [],
    "tip": "어떤 지역을 식별하는 목표물로서 적당한 사물을 말하는데, 예를 들면 N서울타워나 숭례문, 자유의 여신상, 타워브릿지, 에펠탑 등이 있습니다.",
    "no": 19,
    "day": 23,
    "tipLabel": "💡 tip"
   },
   {
    "word": "building",
    "pron": "빌딩",
    "pos": "n.",
    "meaning": "건물, 빌딩",
    "examples": [],
    "tip": "",
    "no": 20,
    "day": 23
   },
   {
    "word": "skyscraper",
    "pron": "스카이스크레입퍼",
    "pos": "n.",
    "meaning": "초고층 빌딩, 마천루",
    "examples": [],
    "tip": "",
    "no": 21,
    "day": 23
   },
   {
    "word": "tower",
    "pron": "타우어",
    "pos": "n.",
    "meaning": "탑, (탑 모양의) 고층 건물",
    "examples": [],
    "tip": "",
    "no": 22,
    "day": 23
   },
   {
    "word": "castle",
    "pron": "캐슬",
    "pos": "n.",
    "meaning": "성, 대저택",
    "examples": [],
    "tip": "",
    "no": 23,
    "day": 23
   },
   {
    "word": "cathedral",
    "pron": "커씨-드럴",
    "pos": "n.",
    "meaning": "대성당",
    "examples": [],
    "tip": "",
    "no": 24,
    "day": 23
   },
   {
    "word": "temple",
    "pron": "템플",
    "pos": "n.",
    "meaning": "사원, 절",
    "examples": [],
    "tip": "",
    "no": 25,
    "day": 23
   },
   {
    "word": "museum",
    "pron": "뮤-지-엄",
    "pos": "n.",
    "meaning": "박물관, 미술관",
    "examples": [
     {
      "en": "Which way do I go to get to the National Gallery?",
      "ko": "국립미술관으로 가려면 어느 쪽으로 가야 하나요?"
     }
    ],
    "tip": "",
    "no": 26,
    "day": 23
   },
   {
    "word": "gallery",
    "pron": "갤러리",
    "pos": "n.",
    "meaning": "미술관, 갤러리",
    "examples": [],
    "tip": "",
    "no": 27,
    "day": 23
   },
   {
    "word": "theater",
    "pron": "씨-어터",
    "pos": "n.",
    "meaning": "극장, 영화관",
    "examples": [],
    "tip": "theatre라고 쓰기도 합니다.",
    "no": 28,
    "day": 23,
    "tipLabel": "💡 tip"
   },
   {
    "word": "exhibition",
    "pron": "엑시비션",
    "pos": "n.",
    "meaning": "전시, 전시회",
    "examples": [],
    "tip": "",
    "no": 29,
    "day": 23
   },
   {
    "word": "work",
    "pron": "워-(ㅋ)",
    "pos": "n.",
    "meaning": "작품",
    "examples": [],
    "tip": "",
    "no": 30,
    "day": 23
   },
   {
    "word": "opening time",
    "pron": "오우퍼닝 타임",
    "pos": "",
    "meaning": "문 여는 시간",
    "examples": [],
    "tip": "표지판 등에는 opening[closing] hour라고 써 있습니다.",
    "no": 31,
    "day": 23,
    "tipLabel": "💡 tip"
   },
   {
    "word": "closing time",
    "pron": "클로우징 타임",
    "pos": "",
    "meaning": "문 닫는 시간",
    "examples": [],
    "tip": "",
    "no": 32,
    "day": 23
   },
   {
    "word": "plaza",
    "pron": "플라-저",
    "pos": "n.",
    "meaning": "광장",
    "examples": [],
    "tip": "",
    "no": 33,
    "day": 23
   },
   {
    "word": "square",
    "pron": "스쿠에어",
    "pos": "",
    "meaning": "광장",
    "examples": [],
    "tip": "",
    "no": 34,
    "day": 23
   },
   {
    "word": "park",
    "pron": "파-(ㅋ)",
    "pos": "n.",
    "meaning": "공원",
    "examples": [
     {
      "en": "Do you like going to amusement parks?",
      "ko": "놀이공원에 가는 거 좋아하세요?"
     }
    ],
    "tip": "",
    "no": 35,
    "day": 23
   },
   {
    "word": "zoo",
    "pron": "주-",
    "pos": "n.",
    "meaning": "동물원",
    "examples": [],
    "tip": "",
    "no": 36,
    "day": 23
   },
   {
    "word": "botanical gardens",
    "pron": "버태니컬 가-든(ㅅ)",
    "pos": "",
    "meaning": "식물원",
    "examples": [],
    "tip": "",
    "no": 37,
    "day": 23
   },
   {
    "word": "amusement park",
    "pron": "어뮤-즈먼(ㅌ) 파-(ㅋ)",
    "pos": "",
    "meaning": "놀이공원",
    "examples": [],
    "tip": "",
    "no": 38,
    "day": 23
   },
   {
    "word": "palace",
    "pron": "팰리(ㅆ)",
    "pos": "n.",
    "meaning": "궁전",
    "examples": [],
    "tip": "",
    "no": 39,
    "day": 23
   },
   {
    "word": "king",
    "pron": "킹",
    "pos": "n.",
    "meaning": "왕",
    "examples": [],
    "tip": "",
    "no": 40,
    "day": 23
   },
   {
    "word": "queen",
    "pron": "쿠인",
    "pos": "n.",
    "meaning": "여왕",
    "examples": [],
    "tip": "",
    "no": 41,
    "day": 23
   },
   {
    "word": "prince",
    "pron": "프린(ㅆ)",
    "pos": "n.",
    "meaning": "왕자",
    "examples": [],
    "tip": "",
    "no": 42,
    "day": 23
   },
   {
    "word": "princess",
    "pron": "프린쎄(ㅅ)",
    "pos": "n.",
    "meaning": "공주",
    "examples": [],
    "tip": "",
    "no": 43,
    "day": 23
   },
   {
    "word": "popular",
    "pron": "파퓰러",
    "pos": "a.",
    "meaning": "인기 있는",
    "examples": [],
    "tip": "",
    "no": 44,
    "day": 23
   },
   {
    "word": "famous",
    "pron": "페이머(ㅅ)",
    "pos": "a.",
    "meaning": "유명한, 잘 알려진",
    "examples": [],
    "tip": "'많은 사람들에게 널리 알려진'이라는 좋은 의미로 쓰입니다.",
    "no": 45,
    "day": 23,
    "tipLabel": "💡 tip"
   },
   {
    "word": "celebrated",
    "pron": "쎌러브레이팃",
    "pos": "a.",
    "meaning": "유명한, 저명한",
    "examples": [],
    "tip": "상을 받거나 업적이 탁월하여 잘 알려진 사람이나 사물에 대하여 씁니다.",
    "no": 46,
    "day": 23,
    "tipLabel": "💡 tip"
   },
   {
    "word": "celebrity",
    "pron": "쎌러브러티",
    "pos": "n.",
    "meaning": "유명인",
    "examples": [],
    "tip": "",
    "no": 47,
    "day": 23
   },
   {
    "word": "distinguished",
    "pron": "디스팅구이싓",
    "pos": "a.",
    "meaning": "저명한, 뛰어난",
    "examples": [],
    "tip": "distinguished는 우수함이 인정되어 존경을 받을 정도로 저명하다는 뜻이고, eminent는 전문 분야에서 남보다 뛰어나서 유명하다는 의미입니다.",
    "no": 48,
    "day": 23,
    "tipLabel": "💡 tip"
   },
   {
    "word": "eminent",
    "pron": "에미넌(ㅌ)",
    "pos": "a.",
    "meaning": "저명한, 탁월한",
    "examples": [],
    "tip": "",
    "no": 49,
    "day": 23
   },
   {
    "word": "impressive",
    "pron": "임프레시(ㅂ)",
    "pos": "a.",
    "meaning": "인상적인",
    "examples": [],
    "tip": "",
    "no": 50,
    "day": 23
   },
   {
    "word": "majestic",
    "pron": "머제스틱",
    "pos": "a.",
    "meaning": "위엄 있는, 장엄한",
    "examples": [],
    "tip": "",
    "no": 51,
    "day": 23
   },
   {
    "word": "historical",
    "pron": "히스터-리컬",
    "pos": "a.",
    "meaning": "역사의, 역사적인",
    "examples": [],
    "tip": "",
    "no": 52,
    "day": 23
   },
   {
    "word": "commercial",
    "pron": "커머-셜",
    "pos": "a.",
    "meaning": "상업적인",
    "examples": [],
    "tip": "",
    "no": 53,
    "day": 23
   },
   {
    "word": "cruise",
    "pron": "크루-(ㅈ)",
    "pos": "n.",
    "meaning": "크루즈, 순항",
    "examples": [],
    "tip": "",
    "no": 54,
    "day": 23
   },
   {
    "word": "individual",
    "pron": "인디비쥬얼",
    "pos": "n.",
    "meaning": "개인",
    "examples": [],
    "tip": "",
    "no": 55,
    "day": 23
   },
   {
    "word": "group",
    "pron": "그루웁",
    "pos": "n.",
    "meaning": "단체",
    "examples": [
     {
      "en": "Do you have a group discount?",
      "ko": "단체 할인이 되나요?"
     }
    ],
    "tip": "",
    "no": 56,
    "day": 23
   },
   {
    "word": "route",
    "pron": "루웃",
    "pos": "n.",
    "meaning": "경로, 노정",
    "examples": [],
    "tip": "",
    "no": 57,
    "day": 23
   },
   {
    "word": "half-day tour",
    "pron": "하(ㅍ)데이 투어",
    "pos": "",
    "meaning": "반나절 투어",
    "examples": [],
    "tip": "",
    "no": 58,
    "day": 23
   },
   {
    "word": "full-day tour",
    "pron": "풀데이 투어",
    "pos": "",
    "meaning": "종일 투어",
    "examples": [],
    "tip": "",
    "no": 59,
    "day": 23
   },
   {
    "word": "recommend",
    "pron": "레커멘(ㄷ)",
    "pos": "v.",
    "meaning": "추천하다",
    "examples": [
     {
      "en": "Can you recommend some interesting places around here?",
      "ko": "부근에 가 볼만한 명소를 추천해 주시겠습니까?"
     }
    ],
    "tip": "",
    "no": 60,
    "day": 23
   },
   {
    "word": "province",
    "pron": "프라빈(ㅆ)",
    "pos": "n.",
    "meaning": "지방",
    "examples": [],
    "tip": "대도시 외의 지역을 의미합니다.",
    "no": 61,
    "day": 23,
    "tipLabel": "💡 tip"
   },
   {
    "word": "countryside",
    "pron": "컨츠리사이(ㄷ)",
    "pos": "n.",
    "meaning": "시골",
    "examples": [],
    "tip": "",
    "no": 62,
    "day": 23
   },
   {
    "word": "city",
    "pron": "씨티",
    "pos": "n.",
    "meaning": "시, 도시",
    "examples": [],
    "tip": "",
    "no": 63,
    "day": 23
   },
   {
    "word": "town",
    "pron": "타운",
    "pos": "n.",
    "meaning": "마을, (소)도시",
    "examples": [
     {
      "en": "May I have a map of this town?",
      "ko": "이 도시의 지도를 한 장 부탁합니다."
     }
    ],
    "tip": "town은 city보다 작고 village보다 큰 행정구역을 말합니다.",
    "no": 64,
    "day": 23,
    "tipLabel": "💡 tip"
   },
   {
    "word": "village",
    "pron": "빌리쥐",
    "pos": "",
    "meaning": "마을",
    "examples": [],
    "tip": "",
    "no": 65,
    "day": 23
   },
   {
    "word": "mountain",
    "pron": "마운튼",
    "pos": "n.",
    "meaning": "산",
    "examples": [],
    "tip": "",
    "no": 66,
    "day": 23
   },
   {
    "word": "hill",
    "pron": "힐",
    "pos": "n.",
    "meaning": "언덕, 작은 산",
    "examples": [],
    "tip": "",
    "no": 67,
    "day": 23
   },
   {
    "word": "valley",
    "pron": "밸리",
    "pos": "n.",
    "meaning": "계곡, 골짜기",
    "examples": [],
    "tip": "",
    "no": 68,
    "day": 23
   },
   {
    "word": "river",
    "pron": "리버",
    "pos": "n.",
    "meaning": "강",
    "examples": [],
    "tip": "",
    "no": 69,
    "day": 23
   },
   {
    "word": "stream",
    "pron": "스츠리임",
    "pos": "n.",
    "meaning": "시내, 개울",
    "examples": [],
    "tip": "stream은 river 다음으로 작은 중간 정도의 강을 말합니다.",
    "no": 70,
    "day": 23,
    "tipLabel": "💡 tip"
   },
   {
    "word": "lake",
    "pron": "레익",
    "pos": "n.",
    "meaning": "호수, 연못",
    "examples": [],
    "tip": "",
    "no": 71,
    "day": 23
   },
   {
    "word": "pond",
    "pron": "판(ㄷ)",
    "pos": "n.",
    "meaning": "연못",
    "examples": [],
    "tip": "",
    "no": 72,
    "day": 23
   },
   {
    "word": "sea",
    "pron": "시-",
    "pos": "n.",
    "meaning": "바다",
    "examples": [],
    "tip": "",
    "no": 73,
    "day": 23
   },
   {
    "word": "beach",
    "pron": "비-취",
    "pos": "n.",
    "meaning": "해변, 바닷가",
    "examples": [],
    "tip": "",
    "no": 74,
    "day": 23
   },
   {
    "word": "enter",
    "pron": "엔터",
    "pos": "v.",
    "meaning": "들어가다",
    "examples": [],
    "tip": "",
    "no": 75,
    "day": 23
   },
   {
    "word": "entrance",
    "pron": "엔츠런(ㅆ)",
    "pos": "n.",
    "meaning": "입구",
    "examples": [],
    "tip": "",
    "no": 76,
    "day": 23
   },
   {
    "word": "go out",
    "pron": "고우 아웃",
    "pos": "",
    "meaning": "나가다",
    "examples": [],
    "tip": "",
    "no": 77,
    "day": 23
   },
   {
    "word": "exit",
    "pron": "엑짓",
    "pos": "n.",
    "meaning": "출구",
    "examples": [
     {
      "en": "Where is the exit?",
      "ko": "출구는 어디인가요?"
     }
    ],
    "tip": "사람에 따라 [엑싯]이라고 발음하기도 합니다.",
    "no": 78,
    "day": 23,
    "tipLabel": "💡 tip"
   },
   {
    "word": "destination",
    "pron": "데스티네이션",
    "pos": "n.",
    "meaning": "목적지, 행선지",
    "examples": [],
    "tip": "",
    "no": 79,
    "day": 23
   },
   {
    "word": "street",
    "pron": "스츠리잇",
    "pos": "n.",
    "meaning": "길, 거리",
    "examples": [],
    "tip": "",
    "no": 80,
    "day": 23
   },
   {
    "word": "avenue",
    "pron": "애버뉴-",
    "pos": "n.",
    "meaning": "대로, 큰길",
    "examples": [],
    "tip": "미국 뉴욕에서는 남북으로 뻗은 도로를 Avenue, 동서로 뻗은 도로를 Street이라고 합니다.",
    "no": 81,
    "day": 23,
    "tipLabel": "💡 tip"
   },
   {
    "word": "distance",
    "pron": "디스턴(ㅆ)",
    "pos": "n.",
    "meaning": "거리, 간격",
    "examples": [
     {
      "en": "Is it far from here?",
      "ko": "여기에서 멀어요?"
     }
    ],
    "tip": "",
    "no": 82,
    "day": 23
   },
   {
    "word": "far",
    "pron": "파-",
    "pos": "a.",
    "meaning": "먼",
    "examples": [],
    "tip": "",
    "no": 83,
    "day": 23
   },
   {
    "word": "near",
    "pron": "니어",
    "pos": "a.",
    "meaning": "가까운",
    "examples": [],
    "tip": "",
    "no": 84,
    "day": 23
   },
   {
    "word": "close",
    "pron": "클로우(ㅅ)",
    "pos": "",
    "meaning": "가까운",
    "examples": [],
    "tip": "",
    "no": 85,
    "day": 23
   },
   {
    "word": "take a picture",
    "pron": "테익 어 픽춰",
    "pos": "",
    "meaning": "사진을 찍다",
    "examples": [
     {
      "en": "Take a picture, quick!",
      "ko": "사진 좀 찍어줘, 어서!"
     }
    ],
    "tip": "",
    "no": 86,
    "day": 23
   },
   {
    "word": "selfie",
    "pron": "셀피",
    "pos": "n.",
    "meaning": "셀프 카메라",
    "examples": [],
    "tip": "",
    "no": 87,
    "day": 23
   },
   {
    "word": "souvenir",
    "pron": "수-버니어",
    "pos": "n.",
    "meaning": "기념품",
    "examples": [
     {
      "en": "Where is the souvenir shop?",
      "ko": "기념품 가게는 어디 있어요?"
     }
    ],
    "tip": "",
    "no": 88,
    "day": 23
   },
   {
    "word": "present",
    "pron": "프레즌(ㅌ)",
    "pos": "n.",
    "meaning": "선물",
    "examples": [],
    "tip": "present는 친한 사이에서 주고받을 수 있는 비싸지 않은 선물을, gift는 격식을 차려서 주는 물건을 의미합니다.",
    "no": 89,
    "day": 23,
    "tipLabel": "💡 tip"
   },
   {
    "word": "gift",
    "pron": "기풋",
    "pos": "",
    "meaning": "선물",
    "examples": [],
    "tip": "",
    "no": 90,
    "day": 23
   },
   {
    "word": "admission ticket",
    "pron": "앳미션 티킷",
    "pos": "",
    "meaning": "입장권",
    "examples": [],
    "tip": "",
    "no": 91,
    "day": 23
   },
   {
    "word": "entrance fee",
    "pron": "엔츠랜(ㅆ) 피-",
    "pos": "",
    "meaning": "입장료",
    "examples": [
     {
      "en": "How much is the admission fee?",
      "ko": "입장료는 얼마인가요?"
     }
    ],
    "tip": "fee는 입장료나 회비 등의 요금, fare는 교통수단의 요금, price는 물건의 가격을 가리킵니다.",
    "no": 92,
    "day": 23,
    "tipLabel": "💡 tip"
   },
   {
    "word": "admission fee",
    "pron": "앳미션 피-",
    "pos": "",
    "meaning": "입장료",
    "examples": [],
    "tip": "",
    "no": 93,
    "day": 23
   },
   {
    "word": "postcard",
    "pron": "포우슷카-(ㄷ)",
    "pos": "n.",
    "meaning": "우편엽서",
    "examples": [],
    "tip": "",
    "no": 94,
    "day": 23
   },
   {
    "word": "key ring",
    "pron": "키- 링",
    "pos": "n.",
    "meaning": "열쇠고리",
    "examples": [],
    "tip": "",
    "no": 95,
    "day": 23
   },
   {
    "word": "specialty",
    "pron": "스페셜티",
    "pos": "n.",
    "meaning": "특산물",
    "examples": [],
    "tip": "",
    "no": 96,
    "day": 23
   }
  ]
 },
 {
  "day": 24,
  "title": "Unit 24. 사건&사고",
  "words": [
   {
    "word": "hurt",
    "pron": "허-(ㅌ)",
    "pos": "n.",
    "meaning": "상처 / 다친, 부상한 / 다치게 하다",
    "examples": [
     {
      "en": "It seems like he hurt his legs badly.",
      "ko": "다리를 심하게 다친 것 같아요."
     }
    ],
    "tip": "",
    "no": 1,
    "day": 24
   },
   {
    "word": "agonize",
    "pron": "애거나이(ㅈ)",
    "pos": "v.",
    "meaning": "몹시 괴로워하다, 번민하다",
    "examples": [],
    "tip": "",
    "no": 2,
    "day": 24
   },
   {
    "word": "wound",
    "pron": "우운(ㄷ)",
    "pos": "v.",
    "meaning": "~에 상처를 입히다",
    "examples": [],
    "tip": "주로 수동태로 쓰입니다.",
    "no": 3,
    "day": 24,
    "tipLabel": "💡 tip"
   },
   {
    "word": "wounded",
    "pron": "우운딧",
    "pos": "a.",
    "meaning": "상처를 입은, 부상당한",
    "examples": [],
    "tip": "",
    "no": 4,
    "day": 24
   },
   {
    "word": "injure",
    "pron": "인줘",
    "pos": "v.",
    "meaning": "상처를 입히다, 다치게 하다",
    "examples": [],
    "tip": "",
    "no": 5,
    "day": 24
   },
   {
    "word": "injured",
    "pron": "인줘(ㄷ)",
    "pos": "a.",
    "meaning": "상처를 입은, 다친",
    "examples": [],
    "tip": "",
    "no": 6,
    "day": 24
   },
   {
    "word": "bone",
    "pron": "보운",
    "pos": "n.",
    "meaning": "뼈",
    "examples": [],
    "tip": "",
    "no": 7,
    "day": 24
   },
   {
    "word": "break a bone",
    "pron": "브레익 어 보운",
    "pos": "",
    "meaning": "골절되다",
    "examples": [],
    "tip": "",
    "no": 8,
    "day": 24
   },
   {
    "word": "burn",
    "pron": "버언",
    "pos": "n.",
    "meaning": "화상",
    "examples": [],
    "tip": "",
    "no": 9,
    "day": 24
   },
   {
    "word": "get burnt",
    "pron": "겟 버언(ㅌ)",
    "pos": "",
    "meaning": "데다",
    "examples": [],
    "tip": "",
    "no": 10,
    "day": 24
   },
   {
    "word": "frostbite",
    "pron": "프러-슷바잇",
    "pos": "n.",
    "meaning": "동상",
    "examples": [],
    "tip": "",
    "no": 11,
    "day": 24
   },
   {
    "word": "cut",
    "pron": "컷",
    "pos": "v.",
    "meaning": "~을 베다, 자르다",
    "examples": [],
    "tip": "",
    "no": 12,
    "day": 24
   },
   {
    "word": "blood",
    "pron": "블럿",
    "pos": "n.",
    "meaning": "피",
    "examples": [],
    "tip": "",
    "no": 13,
    "day": 24
   },
   {
    "word": "bleed",
    "pron": "블리잇",
    "pos": "v.",
    "meaning": "출혈하다",
    "examples": [],
    "tip": "",
    "no": 14,
    "day": 24
   },
   {
    "word": "hemostasis",
    "pron": "히-머스테이시(ㅅ)",
    "pos": "n.",
    "meaning": "지혈",
    "examples": [],
    "tip": "",
    "no": 15,
    "day": 24
   },
   {
    "word": "urgent",
    "pron": "어-전(ㅌ)",
    "pos": "a.",
    "meaning": "긴급한, 다급한",
    "examples": [],
    "tip": "",
    "no": 16,
    "day": 24
   },
   {
    "word": "emergency",
    "pron": "이머-전씨",
    "pos": "n.",
    "meaning": "응급, 긴급",
    "examples": [
     {
      "en": "This is an emergency.",
      "ko": "응급 상황이에요."
     }
    ],
    "tip": "",
    "no": 17,
    "day": 24
   },
   {
    "word": "rescue",
    "pron": "레스큐-",
    "pos": "n.",
    "meaning": "구조 / 구조하다",
    "examples": [],
    "tip": "",
    "no": 18,
    "day": 24
   },
   {
    "word": "first aid",
    "pron": "퍼-슷 에잇",
    "pos": "n.",
    "meaning": "응급 치료",
    "examples": [
     {
      "en": "We have to give first aid to him right now.",
      "ko": "우리는 당장 그에게 응급 처치를 해야 해."
     }
    ],
    "tip": "",
    "no": 19,
    "day": 24
   },
   {
    "word": "first-aid kit",
    "pron": "퍼-슷에잇 킷",
    "pos": "",
    "meaning": "구급 상자",
    "examples": [],
    "tip": "",
    "no": 20,
    "day": 24
   },
   {
    "word": "ambulance",
    "pron": "앰뷸런(ㅆ)",
    "pos": "n.",
    "meaning": "구급차",
    "examples": [
     {
      "en": "Could you send an ambulance?",
      "ko": "구급차 좀 보내 주시겠어요?"
     }
    ],
    "tip": "",
    "no": 21,
    "day": 24
   },
   {
    "word": "emergency room",
    "pron": "이머-전씨 루움",
    "pos": "n.",
    "meaning": "응급실",
    "examples": [
     {
      "en": "Where's the emergency room, please?",
      "ko": "응급실이 어디죠?"
     }
    ],
    "tip": "",
    "no": 22,
    "day": 24
   },
   {
    "word": "apoplexy",
    "pron": "애퍼플렉시",
    "pos": "n.",
    "meaning": "뇌졸중",
    "examples": [],
    "tip": "",
    "no": 23,
    "day": 24
   },
   {
    "word": "epilepsy",
    "pron": "에퍼렙시",
    "pos": "n.",
    "meaning": "간질",
    "examples": [],
    "tip": "",
    "no": 24,
    "day": 24
   },
   {
    "word": "convulsion",
    "pron": "컨벌션",
    "pos": "n.",
    "meaning": "경련, 경기",
    "examples": [],
    "tip": "",
    "no": 25,
    "day": 24
   },
   {
    "word": "heart attack",
    "pron": "하- 터택",
    "pos": "n.",
    "meaning": "심장 마비",
    "examples": [],
    "tip": "",
    "no": 26,
    "day": 24
   },
   {
    "word": "cpr",
    "pron": "씨-피-아알",
    "pos": "",
    "meaning": "심폐소생술",
    "examples": [],
    "tip": "cardiopulmonary resuscitation의 약자입니다.",
    "no": 27,
    "day": 24,
    "tipLabel": "💡 tip"
   },
   {
    "word": "choke",
    "pron": "초욱",
    "pos": "n.",
    "meaning": "질식 / 질식시키다",
    "examples": [],
    "tip": "",
    "no": 28,
    "day": 24
   },
   {
    "word": "fainting",
    "pron": "페인팅",
    "pos": "n.",
    "meaning": "기절, 실신",
    "examples": [],
    "tip": "",
    "no": 29,
    "day": 24
   },
   {
    "word": "faint",
    "pron": "페인(ㅌ)",
    "pos": "v.",
    "meaning": "기절하다, 실신하다",
    "examples": [],
    "tip": "",
    "no": 30,
    "day": 24
   },
   {
    "word": "cure",
    "pron": "큐어",
    "pos": "n.",
    "meaning": "치료 / 치료하다, 낫다",
    "examples": [],
    "tip": "",
    "no": 31,
    "day": 24
   },
   {
    "word": "recover",
    "pron": "리커버",
    "pos": "v.",
    "meaning": "회복하다",
    "examples": [],
    "tip": "",
    "no": 32,
    "day": 24
   },
   {
    "word": "recovery",
    "pron": "리커버리",
    "pos": "n.",
    "meaning": "회복",
    "examples": [],
    "tip": "",
    "no": 33,
    "day": 24
   },
   {
    "word": "police officer",
    "pron": "펄리-(ㅆ) 어-피써",
    "pos": "n.",
    "meaning": "경찰관",
    "examples": [
     {
      "en": "Where is the nearest police station?",
      "ko": "여기에서 가장 가까운 경찰서가 어디인가요?"
     }
    ],
    "tip": "",
    "no": 34,
    "day": 24
   },
   {
    "word": "police station",
    "pron": "펄리-(ㅆ) 스테이션",
    "pos": "n.",
    "meaning": "경찰서",
    "examples": [],
    "tip": "",
    "no": 35,
    "day": 24
   },
   {
    "word": "state",
    "pron": "스테잇",
    "pos": "v.",
    "meaning": "~을 분명히 말하다",
    "examples": [],
    "tip": "",
    "no": 36,
    "day": 24
   },
   {
    "word": "statement",
    "pron": "스테잇먼(ㅌ)",
    "pos": "n.",
    "meaning": "진술",
    "examples": [],
    "tip": "",
    "no": 37,
    "day": 24
   },
   {
    "word": "testimony",
    "pron": "테스터모우니",
    "pos": "n.",
    "meaning": "증언",
    "examples": [],
    "tip": "",
    "no": 38,
    "day": 24
   },
   {
    "word": "evidence",
    "pron": "에비던(ㅆ)",
    "pos": "n.",
    "meaning": "증거",
    "examples": [],
    "tip": "",
    "no": 39,
    "day": 24
   },
   {
    "word": "witness",
    "pron": "윗니(ㅅ)",
    "pos": "n.",
    "meaning": "목격자",
    "examples": [],
    "tip": "",
    "no": 40,
    "day": 24
   },
   {
    "word": "report",
    "pron": "리퍼-(ㅌ)",
    "pos": "v.",
    "meaning": "알리다, 보고하다",
    "examples": [],
    "tip": "",
    "no": 41,
    "day": 24
   },
   {
    "word": "declare",
    "pron": "디클레어",
    "pos": "v.",
    "meaning": "신고하다, 선언하다",
    "examples": [],
    "tip": "",
    "no": 42,
    "day": 24
   },
   {
    "word": "notice",
    "pron": "노우티(ㅆ)",
    "pos": "v.",
    "meaning": "통지하다, 알아차리다",
    "examples": [],
    "tip": "",
    "no": 43,
    "day": 24
   },
   {
    "word": "offense",
    "pron": "어펜(ㅆ)",
    "pos": "n.",
    "meaning": "범죄",
    "examples": [],
    "tip": "offense는 법률에 대한 위반을 뜻하지만 반드시 중죄에만 쓰이지 않습니다. crime은 법률에 대한 중대한 위반으로 범죄를 가리킵니다.",
    "no": 44,
    "day": 24,
    "tipLabel": "💡 tip"
   },
   {
    "word": "crime",
    "pron": "크라임",
    "pos": "",
    "meaning": "범죄",
    "examples": [],
    "tip": "",
    "no": 45,
    "day": 24
   },
   {
    "word": "guilt",
    "pron": "길(ㅌ)",
    "pos": "n.",
    "meaning": "죄, 유죄, 죄책감",
    "examples": [],
    "tip": "",
    "no": 46,
    "day": 24
   },
   {
    "word": "criminal",
    "pron": "크리미늘",
    "pos": "n.",
    "meaning": "범인 / 범죄의",
    "examples": [],
    "tip": "",
    "no": 47,
    "day": 24
   },
   {
    "word": "suspect",
    "pron": "서스펙(ㅌ)",
    "pos": "n.",
    "meaning": "용의자",
    "examples": [],
    "tip": "",
    "no": 48,
    "day": 24
   },
   {
    "word": "sin",
    "pron": "신",
    "pos": "n.",
    "meaning": "죄 / 죄를 짓다",
    "examples": [],
    "tip": "sin은 도덕적이거나 종교적인 계율에 대한 위반을 말하는데, 인간의 원죄(original sin)라는 기독교적 사상에 근거하여 서양에서는 죄라고 하면 흔히 sin을 떠올립니다.",
    "no": 49,
    "day": 24,
    "tipLabel": "💡 tip"
   },
   {
    "word": "steal",
    "pron": "스티일",
    "pos": "n.",
    "meaning": "도둑질 / 도둑질하다, 훔치다",
    "examples": [
     {
      "en": "He stole my purse.",
      "ko": "그가 제 지갑을 훔쳤습니다."
     }
    ],
    "tip": "steal과 rob은 모두 '훔치다'라는 뜻이지만, 'steal A(사물) from B(사람)', 'rob B(사람) of A(사물)' 형식으로, 어순과 쓰는 전치사의 차이가 있습니다.",
    "no": 50,
    "day": 24,
    "tipLabel": "💡 tip"
   },
   {
    "word": "rob",
    "pron": "랍",
    "pos": "v.",
    "meaning": "훔치다, 강탈하다",
    "examples": [
     {
      "en": "I was robbed of my purse.",
      "ko": "제 지갑을 도난당했습니다."
     },
     {
      "en": "A thief broke into my house last night.",
      "ko": "어젯밤에 우리 집에 도둑이 들었다."
     },
     {
      "en": "That's a burglar alarm.",
      "ko": "그건 도난방지기예요."
     },
     {
      "en": "Beware of pickpockets!",
      "ko": "소매치기 주의!"
     }
    ],
    "tip": "robber는 폭력으로 물건을 강탈하는 사람, thief는 남몰래 재산을 훔치는 사람, burglar는 밤에 집을 침입하는 도둑을 가리킵니다.",
    "no": 51,
    "day": 24,
    "tipLabel": "💡 tip"
   },
   {
    "word": "robber",
    "pron": "라버",
    "pos": "n.",
    "meaning": "도둑, 강도",
    "examples": [],
    "tip": "",
    "no": 52,
    "day": 24
   },
   {
    "word": "thief",
    "pron": "씨-(ㅍ)",
    "pos": "n.",
    "meaning": "도둑",
    "examples": [],
    "tip": "",
    "no": 53,
    "day": 24
   },
   {
    "word": "burglar",
    "pron": "버-글러",
    "pos": "n.",
    "meaning": "도둑, 강도",
    "examples": [],
    "tip": "",
    "no": 54,
    "day": 24
   },
   {
    "word": "mugger",
    "pron": "머거",
    "pos": "n.",
    "meaning": "노상 강도",
    "examples": [],
    "tip": "",
    "no": 55,
    "day": 24
   },
   {
    "word": "pickpocket",
    "pron": "픽파킷",
    "pos": "n.",
    "meaning": "소매치기 / 소매치기하다",
    "examples": [],
    "tip": "",
    "no": 56,
    "day": 24
   },
   {
    "word": "fraud",
    "pron": "프러엇",
    "pos": "n.",
    "meaning": "사기, 사기꾼",
    "examples": [],
    "tip": "",
    "no": 57,
    "day": 24
   },
   {
    "word": "swindler",
    "pron": "스윈들러",
    "pos": "n.",
    "meaning": "사기꾼",
    "examples": [],
    "tip": "",
    "no": 58,
    "day": 24
   },
   {
    "word": "trick",
    "pron": "츠릭",
    "pos": "v.",
    "meaning": "속이다, 기만하다",
    "examples": [],
    "tip": "",
    "no": 59,
    "day": 24
   },
   {
    "word": "concealment",
    "pron": "컨씨일먼(ㅌ)",
    "pos": "n.",
    "meaning": "숨기기, 은닉",
    "examples": [],
    "tip": "",
    "no": 60,
    "day": 24
   },
   {
    "word": "murder",
    "pron": "머-더",
    "pos": "n.",
    "meaning": "살인 / 살해하다",
    "examples": [],
    "tip": "",
    "no": 61,
    "day": 24
   },
   {
    "word": "murderer",
    "pron": "머-더러",
    "pos": "n.",
    "meaning": "살인범",
    "examples": [],
    "tip": "",
    "no": 62,
    "day": 24
   },
   {
    "word": "miss",
    "pron": "미(ㅅ)",
    "pos": "v.",
    "meaning": "실종되다",
    "examples": [],
    "tip": "",
    "no": 63,
    "day": 24
   },
   {
    "word": "missing",
    "pron": "미싱",
    "pos": "a.",
    "meaning": "행방불명인, 실종된",
    "examples": [],
    "tip": "",
    "no": 64,
    "day": 24
   },
   {
    "word": "missing person",
    "pron": "미싱 퍼-슨",
    "pos": "",
    "meaning": "행방불명자",
    "examples": [],
    "tip": "",
    "no": 65,
    "day": 24
   },
   {
    "word": "missing child",
    "pron": "미싱 차일(ㄷ)",
    "pos": "",
    "meaning": "미아",
    "examples": [],
    "tip": "",
    "no": 66,
    "day": 24
   },
   {
    "word": "missing article",
    "pron": "미싱 아-티클",
    "pos": "",
    "meaning": "분실물",
    "examples": [],
    "tip": "",
    "no": 67,
    "day": 24
   },
   {
    "word": "disappearance",
    "pron": "디서피-어런(ㅆ)",
    "pos": "n.",
    "meaning": "실종, 소멸",
    "examples": [],
    "tip": "",
    "no": 68,
    "day": 24
   },
   {
    "word": "loss",
    "pron": "러-(ㅅ)",
    "pos": "n.",
    "meaning": "분실, 빼앗김",
    "examples": [],
    "tip": "",
    "no": 69,
    "day": 24
   },
   {
    "word": "lost and found",
    "pron": "러-슷 앤(ㄷ) 파운(ㄷ)",
    "pos": "",
    "meaning": "분실물 보관소",
    "examples": [
     {
      "en": "Where is the lost and found?",
      "ko": "분실물 보관소는 어디인가요?"
     }
    ],
    "tip": "",
    "no": 70,
    "day": 24
   },
   {
    "word": "accident",
    "pron": "액씨던(ㅌ)",
    "pos": "n.",
    "meaning": "사건, 사고",
    "examples": [
     {
      "en": "When did the traffic accident happen?",
      "ko": "그 교통사고는 언제 일어난 거죠?"
     }
    ],
    "tip": "",
    "no": 71,
    "day": 24
   },
   {
    "word": "traffic accident",
    "pron": "츠래픽 액씨던(ㅌ)",
    "pos": "",
    "meaning": "교통사고",
    "examples": [],
    "tip": "",
    "no": 72,
    "day": 24
   },
   {
    "word": "car accident",
    "pron": "카- 액씨던(ㅌ)",
    "pos": "",
    "meaning": "자동차 사고",
    "examples": [],
    "tip": "",
    "no": 73,
    "day": 24
   },
   {
    "word": "speeding",
    "pron": "스피-딩",
    "pos": "n.",
    "meaning": "속도 위반, 과속",
    "examples": [],
    "tip": "",
    "no": 74,
    "day": 24
   },
   {
    "word": "exceed the speed",
    "pron": "익씨잇 더 스피잇",
    "pos": "",
    "meaning": "제한 속도를 초과하다",
    "examples": [],
    "tip": "",
    "no": 75,
    "day": 24
   },
   {
    "word": "collision",
    "pron": "컬리전",
    "pos": "n.",
    "meaning": "충돌",
    "examples": [],
    "tip": "",
    "no": 76,
    "day": 24
   },
   {
    "word": "clash",
    "pron": "클래쉬",
    "pos": "n.",
    "meaning": "충돌 / 충돌하다, 부딪치다",
    "examples": [],
    "tip": "",
    "no": 77,
    "day": 24
   },
   {
    "word": "bump",
    "pron": "범(ㅍ)",
    "pos": "n.",
    "meaning": "(가벼운) 충돌 / ~에 쿵하고 부딪치다",
    "examples": [],
    "tip": "",
    "no": 78,
    "day": 24
   },
   {
    "word": "tow truck",
    "pron": "토우 츠럭",
    "pos": "n.",
    "meaning": "견인차",
    "examples": [],
    "tip": "",
    "no": 79,
    "day": 24
   },
   {
    "word": "slide",
    "pron": "슬라이(ㄷ)",
    "pos": "n.",
    "meaning": "미끄러지기 / 미끄러지다",
    "examples": [
     {
      "en": "I slipped on the stairs.",
      "ko": "계단에서 미끄러졌어."
     }
    ],
    "tip": "",
    "no": 80,
    "day": 24
   },
   {
    "word": "slip",
    "pron": "슬립",
    "pos": "v.",
    "meaning": "미끄러지다",
    "examples": [],
    "tip": "",
    "no": 81,
    "day": 24
   },
   {
    "word": "ice",
    "pron": "아이(ㅆ)",
    "pos": "n.",
    "meaning": "빙판",
    "examples": [],
    "tip": "",
    "no": 82,
    "day": 24
   },
   {
    "word": "drown",
    "pron": "드라운",
    "pos": "v.",
    "meaning": "익사하다",
    "examples": [],
    "tip": "",
    "no": 83,
    "day": 24
   },
   {
    "word": "drowning",
    "pron": "드라우닝",
    "pos": "n.",
    "meaning": "익사",
    "examples": [],
    "tip": "",
    "no": 84,
    "day": 24
   },
   {
    "word": "lifeguard",
    "pron": "라이(ㅍ)가-(ㄷ)",
    "pos": "n.",
    "meaning": "인명 구조원",
    "examples": [],
    "tip": "",
    "no": 85,
    "day": 24
   },
   {
    "word": "explosion",
    "pron": "익(ㅅ)플로우전",
    "pos": "n.",
    "meaning": "폭발",
    "examples": [],
    "tip": "",
    "no": 86,
    "day": 24
   },
   {
    "word": "fire",
    "pron": "파이어",
    "pos": "n.",
    "meaning": "화재",
    "examples": [],
    "tip": "",
    "no": 87,
    "day": 24
   },
   {
    "word": "fire truck",
    "pron": "파이어 츠럭",
    "pos": "n.",
    "meaning": "소방차",
    "examples": [],
    "tip": "영국에서는 fire engine이라고 합니다.",
    "no": 88,
    "day": 24,
    "tipLabel": "💡 tip"
   },
   {
    "word": "fire station",
    "pron": "파이어 스테이션",
    "pos": "n.",
    "meaning": "소방서",
    "examples": [],
    "tip": "",
    "no": 89,
    "day": 24
   },
   {
    "word": "disaster",
    "pron": "디재스터",
    "pos": "n.",
    "meaning": "천재지변, 재난",
    "examples": [],
    "tip": "",
    "no": 90,
    "day": 24
   },
   {
    "word": "natural disaster",
    "pron": "내처럴 디재스터",
    "pos": "",
    "meaning": "자연재해",
    "examples": [],
    "tip": "",
    "no": 91,
    "day": 24
   },
   {
    "word": "avalanche",
    "pron": "애벌랜취",
    "pos": "n.",
    "meaning": "눈사태",
    "examples": [],
    "tip": "",
    "no": 92,
    "day": 24
   },
   {
    "word": "landslide",
    "pron": "랜(ㄷ)슬라이(ㄷ)",
    "pos": "n.",
    "meaning": "산사태",
    "examples": [],
    "tip": "",
    "no": 93,
    "day": 24
   },
   {
    "word": "earthquake",
    "pron": "어-쓰쿠에익",
    "pos": "n.",
    "meaning": "지진",
    "examples": [],
    "tip": "",
    "no": 94,
    "day": 24
   },
   {
    "word": "tsunami",
    "pron": "추나-미",
    "pos": "n.",
    "meaning": "해일, 쓰나미",
    "examples": [],
    "tip": "",
    "no": 95,
    "day": 24
   }
  ]
 },
 {
  "day": 25,
  "title": "Unit 25. 숫자",
  "words": [
   {
    "word": "number",
    "pron": "넘버",
    "pos": "n.",
    "meaning": "수, 숫자",
    "examples": [],
    "tip": "",
    "no": 1,
    "day": 25
   },
   {
    "word": "simple number",
    "pron": "심플 넘버",
    "pos": "",
    "meaning": "기수",
    "examples": [],
    "tip": "",
    "no": 2,
    "day": 25
   },
   {
    "word": "zero",
    "pron": "지어로우",
    "pos": "",
    "meaning": "0, 영, 공",
    "examples": [],
    "tip": "",
    "no": 3,
    "day": 25
   },
   {
    "word": "one",
    "pron": "원",
    "pos": "",
    "meaning": "1, 일, 하나",
    "examples": [],
    "tip": "",
    "no": 4,
    "day": 25
   },
   {
    "word": "two",
    "pron": "투",
    "pos": "",
    "meaning": "2, 이, 둘",
    "examples": [],
    "tip": "",
    "no": 5,
    "day": 25
   },
   {
    "word": "three",
    "pron": "쓰리",
    "pos": "",
    "meaning": "3, 삼, 셋",
    "examples": [],
    "tip": "",
    "no": 6,
    "day": 25
   },
   {
    "word": "four",
    "pron": "퍼",
    "pos": "",
    "meaning": "4, 사, 넷",
    "examples": [],
    "tip": "",
    "no": 7,
    "day": 25
   },
   {
    "word": "five",
    "pron": "파이(ㅂ)",
    "pos": "",
    "meaning": "5, 오, 다섯",
    "examples": [],
    "tip": "",
    "no": 8,
    "day": 25
   },
   {
    "word": "six",
    "pron": "식(ㅅ)",
    "pos": "",
    "meaning": "6, 육, 여섯",
    "examples": [],
    "tip": "",
    "no": 9,
    "day": 25
   },
   {
    "word": "seven",
    "pron": "세븐",
    "pos": "",
    "meaning": "7, 칠, 일곱",
    "examples": [],
    "tip": "",
    "no": 10,
    "day": 25
   },
   {
    "word": "eight",
    "pron": "에잇",
    "pos": "",
    "meaning": "8, 팔, 여덟",
    "examples": [],
    "tip": "",
    "no": 11,
    "day": 25
   },
   {
    "word": "nine",
    "pron": "나인",
    "pos": "",
    "meaning": "9, 구, 아홉",
    "examples": [],
    "tip": "",
    "no": 12,
    "day": 25
   },
   {
    "word": "ten",
    "pron": "텐",
    "pos": "",
    "meaning": "10, 십, 열",
    "examples": [],
    "tip": "",
    "no": 13,
    "day": 25
   },
   {
    "word": "eleven",
    "pron": "일레븐",
    "pos": "",
    "meaning": "11, 십일, 열하나",
    "examples": [],
    "tip": "",
    "no": 14,
    "day": 25
   },
   {
    "word": "twelve",
    "pron": "트웰(ㅂ)",
    "pos": "",
    "meaning": "12, 십이, 열둘",
    "examples": [],
    "tip": "",
    "no": 15,
    "day": 25
   },
   {
    "word": "thirteen",
    "pron": "써-티인",
    "pos": "",
    "meaning": "13, 십삼, 열셋",
    "examples": [],
    "tip": "",
    "no": 16,
    "day": 25
   },
   {
    "word": "fourteen",
    "pron": "퍼-티인",
    "pos": "",
    "meaning": "14, 십사, 열넷",
    "examples": [],
    "tip": "",
    "no": 17,
    "day": 25
   },
   {
    "word": "fifteen",
    "pron": "핍티인",
    "pos": "",
    "meaning": "15, 십오, 열다섯",
    "examples": [],
    "tip": "",
    "no": 18,
    "day": 25
   },
   {
    "word": "sixteen",
    "pron": "식(ㅅ)티인",
    "pos": "",
    "meaning": "16, 십육, 열여섯",
    "examples": [],
    "tip": "",
    "no": 19,
    "day": 25
   },
   {
    "word": "seventeen",
    "pron": "세븐티인",
    "pos": "",
    "meaning": "17, 십칠, 열일곱",
    "examples": [],
    "tip": "",
    "no": 20,
    "day": 25
   },
   {
    "word": "eighteen",
    "pron": "에이티인",
    "pos": "",
    "meaning": "18, 십팔, 열여덟",
    "examples": [],
    "tip": "",
    "no": 21,
    "day": 25
   },
   {
    "word": "nineteen",
    "pron": "나인티인",
    "pos": "",
    "meaning": "19, 십구, 열아홉",
    "examples": [],
    "tip": "",
    "no": 22,
    "day": 25
   },
   {
    "word": "twenty",
    "pron": "트웬티",
    "pos": "",
    "meaning": "20, 십이, 스물",
    "examples": [],
    "tip": "",
    "no": 23,
    "day": 25
   },
   {
    "word": "twenty-one",
    "pron": "트웬티원",
    "pos": "",
    "meaning": "21, 이십일, 스물하나",
    "examples": [],
    "tip": "",
    "no": 24,
    "day": 25
   },
   {
    "word": "twenty-two",
    "pron": "트웬티투",
    "pos": "",
    "meaning": "22, 이십이, 스물둘",
    "examples": [],
    "tip": "",
    "no": 25,
    "day": 25
   },
   {
    "word": "twenty-three",
    "pron": "트웬티쓰리",
    "pos": "",
    "meaning": "23, 이십삼, 스물셋",
    "examples": [],
    "tip": "",
    "no": 26,
    "day": 25
   },
   {
    "word": "twenty-four",
    "pron": "트웬티퍼",
    "pos": "",
    "meaning": "24, 이십사, 스물넷",
    "examples": [],
    "tip": "",
    "no": 27,
    "day": 25
   },
   {
    "word": "twenty-five",
    "pron": "트웬티파이(ㅂ)",
    "pos": "",
    "meaning": "25, 이십오, 스물다섯",
    "examples": [],
    "tip": "",
    "no": 28,
    "day": 25
   },
   {
    "word": "twenty-six",
    "pron": "트웬티식(ㅅ)",
    "pos": "",
    "meaning": "26, 이십육, 스물여섯",
    "examples": [],
    "tip": "",
    "no": 29,
    "day": 25
   },
   {
    "word": "twenty-seven",
    "pron": "트웬티세븐",
    "pos": "",
    "meaning": "27, 이십칠, 스물일곱",
    "examples": [],
    "tip": "",
    "no": 30,
    "day": 25
   },
   {
    "word": "twenty-eight",
    "pron": "트웬티에잇",
    "pos": "",
    "meaning": "28, 이십팔, 스물여덟",
    "examples": [],
    "tip": "",
    "no": 31,
    "day": 25
   },
   {
    "word": "twenty-nine",
    "pron": "트웬티나인",
    "pos": "",
    "meaning": "29, 이십구, 스물아홉",
    "examples": [],
    "tip": "",
    "no": 32,
    "day": 25
   },
   {
    "word": "thirty",
    "pron": "써-티",
    "pos": "",
    "meaning": "30, 삼십, 서른",
    "examples": [],
    "tip": "",
    "no": 33,
    "day": 25
   },
   {
    "word": "forty",
    "pron": "퍼-티",
    "pos": "",
    "meaning": "40, 사십, 마흔",
    "examples": [],
    "tip": "",
    "no": 34,
    "day": 25
   },
   {
    "word": "fifty",
    "pron": "핍티",
    "pos": "",
    "meaning": "50, 오십, 쉰",
    "examples": [],
    "tip": "",
    "no": 35,
    "day": 25
   },
   {
    "word": "sixty",
    "pron": "식(ㅅ)티",
    "pos": "",
    "meaning": "60, 육십, 예순",
    "examples": [],
    "tip": "",
    "no": 36,
    "day": 25
   },
   {
    "word": "seventy",
    "pron": "세븐티",
    "pos": "",
    "meaning": "70, 칠십, 일흔",
    "examples": [],
    "tip": "",
    "no": 37,
    "day": 25
   },
   {
    "word": "eighty",
    "pron": "에이티",
    "pos": "",
    "meaning": "80, 팔십, 여든",
    "examples": [],
    "tip": "",
    "no": 38,
    "day": 25
   },
   {
    "word": "ninety",
    "pron": "나인티",
    "pos": "",
    "meaning": "90, 구십, 아흔",
    "examples": [],
    "tip": "",
    "no": 39,
    "day": 25
   },
   {
    "word": "hundred",
    "pron": "헌(ㄷ)렛",
    "pos": "",
    "meaning": "100, 백",
    "examples": [],
    "tip": "백 단위 뒤에 숫자가 이어질 때, 영국에서는 and를 넣지만, 미국에서는 보통 and를 생략합니다.",
    "no": 40,
    "day": 25,
    "tipLabel": "💡 tip"
   },
   {
    "word": "thousand",
    "pron": "싸우전(ㄷ)",
    "pos": "",
    "meaning": "1,000, 천",
    "examples": [],
    "tip": "",
    "no": 41,
    "day": 25
   },
   {
    "word": "ten thousand",
    "pron": "텐 싸우전(ㄷ)",
    "pos": "",
    "meaning": "10,000, 만",
    "examples": [],
    "tip": "",
    "no": 42,
    "day": 25
   },
   {
    "word": "hundred thousand",
    "pron": "헌(ㄷ)렛 싸우전(ㄷ)",
    "pos": "",
    "meaning": "100,000, 십만",
    "examples": [],
    "tip": "",
    "no": 43,
    "day": 25
   },
   {
    "word": "million",
    "pron": "밀련",
    "pos": "",
    "meaning": "1,000,000, 백만",
    "examples": [],
    "tip": "",
    "no": 44,
    "day": 25
   },
   {
    "word": "ten million",
    "pron": "텐 밀련",
    "pos": "",
    "meaning": "10,000,000, 천만",
    "examples": [],
    "tip": "",
    "no": 45,
    "day": 25
   },
   {
    "word": "hundred million",
    "pron": "헌(ㄷ)렛 밀련",
    "pos": "",
    "meaning": "100,000,000, 억",
    "examples": [],
    "tip": "",
    "no": 46,
    "day": 25
   },
   {
    "word": "billion",
    "pron": "빌련",
    "pos": "",
    "meaning": "1,000,000,000, 십억",
    "examples": [],
    "tip": "",
    "no": 47,
    "day": 25
   },
   {
    "word": "zillion",
    "pron": "질련",
    "pos": "n.",
    "meaning": "수 천억(이라는 큰 수), 엄청난 수; a. 수 천억이라는",
    "examples": [],
    "tip": "영어 숫자 읽는 법: hundred, thousand, million 등은 앞에 수사가 오면 뒤에 s를 붙이지 않습니다. 단, 막연한 숫자를 나타낼 때는 s를 붙일 수 있습니다. 낮은 자리에서부터 세 자리씩 끊어서 읽고, 세 자리마다 그 끝자리의 단위를 붙입니다.",
    "no": 48,
    "day": 25,
    "tipLabel": "💡 tip"
   },
   {
    "word": "ordinal number",
    "pron": "어-더늘 넘버",
    "pos": "",
    "meaning": "서수",
    "examples": [],
    "tip": "서수 앞에는 the를 붙여야 합니다. '첫 번째'는 1st, '두 번째'는 2nd, '세 번째'는 3rd, '네 번째'부터는 숫자 뒤에 th를 붙여서 표현합니다. 20 이후 단자리 숫자에 1, 2, 3이 붙을 경우에도 같은 형식으로 표현합니다.",
    "no": 49,
    "day": 25,
    "tipLabel": "💡 tip"
   },
   {
    "word": "first",
    "pron": "퍼-슷",
    "pos": "",
    "meaning": "1st, 첫 번째의",
    "examples": [],
    "tip": "",
    "no": 50,
    "day": 25
   },
   {
    "word": "second",
    "pron": "세컨(ㄷ)",
    "pos": "",
    "meaning": "2nd, 두 번째의",
    "examples": [],
    "tip": "",
    "no": 51,
    "day": 25
   },
   {
    "word": "third",
    "pron": "써-(ㄷ)",
    "pos": "",
    "meaning": "3rd, 세 번째의",
    "examples": [],
    "tip": "",
    "no": 52,
    "day": 25
   },
   {
    "word": "fourth",
    "pron": "퍼-쓰",
    "pos": "",
    "meaning": "4th, 네 번째의",
    "examples": [],
    "tip": "",
    "no": 53,
    "day": 25
   },
   {
    "word": "fifth",
    "pron": "핍쓰",
    "pos": "",
    "meaning": "5th, 다섯 번째의",
    "examples": [],
    "tip": "",
    "no": 54,
    "day": 25
   },
   {
    "word": "sixth",
    "pron": "식스쓰",
    "pos": "",
    "meaning": "6th, 여섯 번째의",
    "examples": [],
    "tip": "",
    "no": 55,
    "day": 25
   },
   {
    "word": "seventh",
    "pron": "세븐쓰",
    "pos": "",
    "meaning": "7th, 일곱 번째의",
    "examples": [],
    "tip": "",
    "no": 56,
    "day": 25
   },
   {
    "word": "eighth",
    "pron": "에잇쓰",
    "pos": "",
    "meaning": "8th, 여덟 번째의",
    "examples": [],
    "tip": "",
    "no": 57,
    "day": 25
   },
   {
    "word": "ninth",
    "pron": "나인쓰",
    "pos": "",
    "meaning": "9th, 아홉 번째의",
    "examples": [],
    "tip": "",
    "no": 58,
    "day": 25
   },
   {
    "word": "tenth",
    "pron": "텐쓰",
    "pos": "",
    "meaning": "10th, 열 번째의",
    "examples": [],
    "tip": "",
    "no": 59,
    "day": 25
   },
   {
    "word": "eleventh",
    "pron": "일레븐쓰",
    "pos": "",
    "meaning": "11th, 열한 번째의",
    "examples": [],
    "tip": "",
    "no": 60,
    "day": 25
   },
   {
    "word": "twelfth",
    "pron": "트웰(ㅍ)쓰",
    "pos": "",
    "meaning": "12th, 열두 번째의",
    "examples": [],
    "tip": "",
    "no": 61,
    "day": 25
   },
   {
    "word": "thirteenth",
    "pron": "써-티인쓰",
    "pos": "",
    "meaning": "13th, 열세 번째의",
    "examples": [],
    "tip": "",
    "no": 62,
    "day": 25
   },
   {
    "word": "fourteenth",
    "pron": "퍼-티인쓰",
    "pos": "",
    "meaning": "14th, 열네 번째의",
    "examples": [],
    "tip": "",
    "no": 63,
    "day": 25
   },
   {
    "word": "fifteenth",
    "pron": "핍티인쓰",
    "pos": "",
    "meaning": "15th, 열다섯 번째의",
    "examples": [],
    "tip": "",
    "no": 64,
    "day": 25
   },
   {
    "word": "sixteenth",
    "pron": "식(ㅅ)티인쓰",
    "pos": "",
    "meaning": "16th, 열여섯 번째의",
    "examples": [],
    "tip": "",
    "no": 65,
    "day": 25
   },
   {
    "word": "seventeenth",
    "pron": "세븐티인쓰",
    "pos": "",
    "meaning": "17th, 열일곱 번째의",
    "examples": [],
    "tip": "",
    "no": 66,
    "day": 25
   },
   {
    "word": "eighteenth",
    "pron": "에이티인쓰",
    "pos": "",
    "meaning": "18th, 열여덟 번째의",
    "examples": [],
    "tip": "",
    "no": 67,
    "day": 25
   },
   {
    "word": "nineteenth",
    "pron": "나인티인쓰",
    "pos": "",
    "meaning": "19th, 열아홉 번째의",
    "examples": [],
    "tip": "",
    "no": 68,
    "day": 25
   },
   {
    "word": "twentieth",
    "pron": "트웬티어쓰",
    "pos": "",
    "meaning": "20th, 스무 번째의",
    "examples": [],
    "tip": "",
    "no": 69,
    "day": 25
   },
   {
    "word": "twenty-first",
    "pron": "트웬티퍼-슷",
    "pos": "",
    "meaning": "21st, 스물한 번째의",
    "examples": [],
    "tip": "",
    "no": 70,
    "day": 25
   },
   {
    "word": "twenty-second",
    "pron": "트웬티세컨(ㄷ)",
    "pos": "",
    "meaning": "22nd, 스물두 번째의",
    "examples": [],
    "tip": "",
    "no": 71,
    "day": 25
   },
   {
    "word": "twenty-third",
    "pron": "트웬티써-(ㄷ)",
    "pos": "",
    "meaning": "23rd, 스물세 번째의",
    "examples": [],
    "tip": "",
    "no": 72,
    "day": 25
   },
   {
    "word": "twenty-fourth",
    "pron": "트웬티퍼-쓰",
    "pos": "",
    "meaning": "24th, 스물네 번째의",
    "examples": [],
    "tip": "",
    "no": 73,
    "day": 25
   },
   {
    "word": "thirtieth",
    "pron": "써-티어쓰",
    "pos": "",
    "meaning": "30th, 서른 번째의",
    "examples": [],
    "tip": "",
    "no": 74,
    "day": 25
   },
   {
    "word": "fortieth",
    "pron": "퍼-티어쓰",
    "pos": "",
    "meaning": "40th, 마흔 번째의",
    "examples": [],
    "tip": "",
    "no": 75,
    "day": 25
   },
   {
    "word": "fiftieth",
    "pron": "핍티어쓰",
    "pos": "",
    "meaning": "50th, 쉰 번째의",
    "examples": [],
    "tip": "",
    "no": 76,
    "day": 25
   },
   {
    "word": "sixtieth",
    "pron": "식(ㅅ)티어쓰",
    "pos": "",
    "meaning": "60th, 예순 번째의",
    "examples": [],
    "tip": "",
    "no": 77,
    "day": 25
   },
   {
    "word": "seventieth",
    "pron": "세븐티어쓰",
    "pos": "",
    "meaning": "70th, 일흔 번째의",
    "examples": [],
    "tip": "",
    "no": 78,
    "day": 25
   },
   {
    "word": "eightieth",
    "pron": "에이티어쓰",
    "pos": "",
    "meaning": "80th, 여든 번째의",
    "examples": [],
    "tip": "",
    "no": 79,
    "day": 25
   },
   {
    "word": "ninetieth",
    "pron": "나인티어쓰",
    "pos": "",
    "meaning": "90th, 아흔 번째의",
    "examples": [],
    "tip": "",
    "no": 80,
    "day": 25
   },
   {
    "word": "hundredth",
    "pron": "헌(ㄷ)렛쓰",
    "pos": "",
    "meaning": "100th, 백 번째의",
    "examples": [],
    "tip": "",
    "no": 81,
    "day": 25
   }
  ]
 },
 {
  "day": 26,
  "title": "Unit 26. 달러",
  "words": [
   {
    "word": "1 cent",
    "pron": "원 센(ㅌ)",
    "pos": "",
    "meaning": "1센트",
    "examples": [],
    "tip": "흔히 '달러'라고 하면 미국의 달러인 'US달러'를 말하며, 기호는 $입니다.",
    "no": 1,
    "day": 26,
    "tipLabel": "💡 tip"
   },
   {
    "word": "1 penny",
    "pron": "원 페니",
    "pos": "",
    "meaning": "1센트(= 1 cent)",
    "examples": [],
    "tip": "",
    "no": 2,
    "day": 26
   },
   {
    "word": "5 cents",
    "pron": "파이(ㅂ) 센(ㅊ)",
    "pos": "",
    "meaning": "5센트",
    "examples": [],
    "tip": "",
    "no": 3,
    "day": 26
   },
   {
    "word": "1 nickel",
    "pron": "원 니클",
    "pos": "",
    "meaning": "5센트(= 5 cents)",
    "examples": [],
    "tip": "",
    "no": 4,
    "day": 26
   },
   {
    "word": "10 cents",
    "pron": "텐 센(ㅊ)",
    "pos": "",
    "meaning": "10센트",
    "examples": [],
    "tip": "",
    "no": 5,
    "day": 26
   },
   {
    "word": "1 dime",
    "pron": "원 다임",
    "pos": "",
    "meaning": "10센트(= 10 cents)",
    "examples": [],
    "tip": "",
    "no": 6,
    "day": 26
   },
   {
    "word": "25 cents",
    "pron": "트웬티파이(ㅂ) 센(ㅊ)",
    "pos": "",
    "meaning": "25센트",
    "examples": [],
    "tip": "",
    "no": 7,
    "day": 26
   },
   {
    "word": "1 quarter",
    "pron": "원 쿠애터",
    "pos": "",
    "meaning": "25센트(= 25 cents)",
    "examples": [],
    "tip": "",
    "no": 8,
    "day": 26
   },
   {
    "word": "50 cents",
    "pron": "핍티 센(ㅊ)",
    "pos": "",
    "meaning": "50센트",
    "examples": [],
    "tip": "",
    "no": 9,
    "day": 26
   },
   {
    "word": "1 dollar",
    "pron": "원 달러",
    "pos": "",
    "meaning": "1달러",
    "examples": [],
    "tip": "",
    "no": 10,
    "day": 26
   },
   {
    "word": "2 dollars",
    "pron": "투 달러(ㅅ)",
    "pos": "",
    "meaning": "2달러",
    "examples": [],
    "tip": "",
    "no": 11,
    "day": 26
   },
   {
    "word": "5 dollars",
    "pron": "파이(ㅂ) 달러(ㅅ)",
    "pos": "",
    "meaning": "5달러",
    "examples": [],
    "tip": "",
    "no": 12,
    "day": 26
   },
   {
    "word": "10 dollars",
    "pron": "텐 달러(ㅅ)",
    "pos": "",
    "meaning": "10달러",
    "examples": [],
    "tip": "",
    "no": 13,
    "day": 26
   },
   {
    "word": "20 dollars",
    "pron": "트웬티 달러(ㅅ)",
    "pos": "",
    "meaning": "20달러",
    "examples": [],
    "tip": "",
    "no": 14,
    "day": 26
   },
   {
    "word": "50 dollars",
    "pron": "핍티 달러(ㅅ)",
    "pos": "",
    "meaning": "50달러",
    "examples": [],
    "tip": "",
    "no": 15,
    "day": 26
   },
   {
    "word": "100 dollars",
    "pron": "원 헌(ㄷ)렛 달러(ㅅ)",
    "pos": "",
    "meaning": "100달러",
    "examples": [],
    "tip": "",
    "no": 16,
    "day": 26
   }
  ]
 },
 {
  "day": 27,
  "title": "Unit 27. 모양",
  "words": [
   {
    "word": "point",
    "pron": "퍼인(ㅌ)",
    "pos": "n.",
    "meaning": "점",
    "examples": [],
    "tip": "",
    "no": 1,
    "day": 27
   },
   {
    "word": "line",
    "pron": "라인",
    "pos": "n.",
    "meaning": "선",
    "examples": [],
    "tip": "",
    "no": 2,
    "day": 27
   },
   {
    "word": "surface",
    "pron": "서-피(ㅆ)",
    "pos": "n.",
    "meaning": "(다면체의) 면",
    "examples": [],
    "tip": "",
    "no": 3,
    "day": 27
   },
   {
    "word": "straight line",
    "pron": "스츠레잇 라인",
    "pos": "",
    "meaning": "직선",
    "examples": [],
    "tip": "",
    "no": 4,
    "day": 27
   },
   {
    "word": "curved line",
    "pron": "커-븟 라인",
    "pos": "",
    "meaning": "곡선",
    "examples": [],
    "tip": "",
    "no": 5,
    "day": 27
   },
   {
    "word": "oblique",
    "pron": "어블리익",
    "pos": "n.",
    "meaning": "사선",
    "examples": [],
    "tip": "",
    "no": 6,
    "day": 27
   },
   {
    "word": "solid",
    "pron": "살릿",
    "pos": "n.",
    "meaning": "입체",
    "examples": [],
    "tip": "",
    "no": 7,
    "day": 27
   },
   {
    "word": "shape",
    "pron": "쉐입",
    "pos": "n.",
    "meaning": "모양",
    "examples": [],
    "tip": "",
    "no": 8,
    "day": 27
   },
   {
    "word": "circle",
    "pron": "써-클",
    "pos": "n.",
    "meaning": "원, 원형",
    "examples": [],
    "tip": "",
    "no": 9,
    "day": 27
   },
   {
    "word": "oval",
    "pron": "오우벌",
    "pos": "n.",
    "meaning": "타원형",
    "examples": [],
    "tip": "",
    "no": 10,
    "day": 27
   },
   {
    "word": "semicircle",
    "pron": "세미써-클",
    "pos": "n.",
    "meaning": "반원형",
    "examples": [],
    "tip": "",
    "no": 11,
    "day": 27
   },
   {
    "word": "round",
    "pron": "라운(ㄷ)",
    "pos": "a.",
    "meaning": "둥근",
    "examples": [],
    "tip": "",
    "no": 12,
    "day": 27
   },
   {
    "word": "globe",
    "pron": "글로웁",
    "pos": "n.",
    "meaning": "구체(球體)",
    "examples": [],
    "tip": "",
    "no": 13,
    "day": 27
   },
   {
    "word": "cone",
    "pron": "코운",
    "pos": "n.",
    "meaning": "원뿔",
    "examples": [],
    "tip": "",
    "no": 14,
    "day": 27
   },
   {
    "word": "triangle",
    "pron": "츠라이앵글",
    "pos": "n.",
    "meaning": "삼각형",
    "examples": [],
    "tip": "",
    "no": 15,
    "day": 27
   },
   {
    "word": "quadrangle",
    "pron": "쿠앗랭글",
    "pos": "n.",
    "meaning": "사각형",
    "examples": [],
    "tip": "",
    "no": 16,
    "day": 27
   },
   {
    "word": "rectangle",
    "pron": "렉탱글",
    "pos": "n.",
    "meaning": "직사각형",
    "examples": [],
    "tip": "",
    "no": 17,
    "day": 27
   },
   {
    "word": "square",
    "pron": "스쿠에어",
    "pos": "n.",
    "meaning": "정사각형",
    "examples": [],
    "tip": "",
    "no": 18,
    "day": 27
   },
   {
    "word": "pentagon",
    "pron": "펜터가안",
    "pos": "n.",
    "meaning": "오각형",
    "examples": [],
    "tip": "",
    "no": 19,
    "day": 27
   },
   {
    "word": "hexagon",
    "pron": "헥서가안",
    "pos": "n.",
    "meaning": "육각형",
    "examples": [],
    "tip": "",
    "no": 20,
    "day": 27
   },
   {
    "word": "hexahedron",
    "pron": "헥서히잇런",
    "pos": "n.",
    "meaning": "육면체",
    "examples": [],
    "tip": "",
    "no": 21,
    "day": 27
   },
   {
    "word": "heptagon",
    "pron": "헵터가안",
    "pos": "n.",
    "meaning": "칠각형",
    "examples": [],
    "tip": "",
    "no": 22,
    "day": 27
   },
   {
    "word": "octagon",
    "pron": "아악터가안",
    "pos": "n.",
    "meaning": "팔각형",
    "examples": [],
    "tip": "",
    "no": 23,
    "day": 27
   },
   {
    "word": "polygon",
    "pron": "파알리가안",
    "pos": "n.",
    "meaning": "다각형",
    "examples": [],
    "tip": "",
    "no": 24,
    "day": 27
   },
   {
    "word": "flat",
    "pron": "플랫",
    "pos": "a.",
    "meaning": "편평한",
    "examples": [],
    "tip": "",
    "no": 25,
    "day": 27
   },
   {
    "word": "horizontal",
    "pron": "허-러자안틀",
    "pos": "a.",
    "meaning": "수평의",
    "examples": [],
    "tip": "",
    "no": 26,
    "day": 27
   },
   {
    "word": "perpendicular",
    "pron": "퍼-펀디켤러",
    "pos": "a.",
    "meaning": "수직의",
    "examples": [],
    "tip": "",
    "no": 27,
    "day": 27
   },
   {
    "word": "pointed",
    "pron": "퍼인팃",
    "pos": "a.",
    "meaning": "뾰족한",
    "examples": [],
    "tip": "",
    "no": 28,
    "day": 27
   },
   {
    "word": "stellar",
    "pron": "스텔러",
    "pos": "a.",
    "meaning": "별 모양의",
    "examples": [],
    "tip": "",
    "no": 29,
    "day": 27
   },
   {
    "word": "arrow",
    "pron": "애로우",
    "pos": "n.",
    "meaning": "화살표",
    "examples": [],
    "tip": "",
    "no": 30,
    "day": 27
   }
  ]
 },
 {
  "day": 28,
  "title": "Unit 28. 색깔",
  "words": [
   {
    "word": "white",
    "pron": "화잇",
    "pos": "n.",
    "meaning": "흰색",
    "examples": [],
    "tip": "",
    "no": 1,
    "day": 28
   },
   {
    "word": "black",
    "pron": "블랙",
    "pos": "n.",
    "meaning": "검은색",
    "examples": [],
    "tip": "",
    "no": 2,
    "day": 28
   },
   {
    "word": "gray",
    "pron": "그레이",
    "pos": "n.",
    "meaning": "회색",
    "examples": [],
    "tip": "",
    "no": 3,
    "day": 28
   },
   {
    "word": "red",
    "pron": "렛",
    "pos": "n.",
    "meaning": "빨간색",
    "examples": [],
    "tip": "",
    "no": 4,
    "day": 28
   },
   {
    "word": "orange",
    "pron": "어-린쥐",
    "pos": "n.",
    "meaning": "주황색",
    "examples": [],
    "tip": "",
    "no": 5,
    "day": 28
   },
   {
    "word": "yellow",
    "pron": "옐로우",
    "pos": "n.",
    "meaning": "노란색",
    "examples": [],
    "tip": "",
    "no": 6,
    "day": 28
   },
   {
    "word": "yellowish green",
    "pron": "옐로우이쉬 그리인",
    "pos": "n.",
    "meaning": "연두색",
    "examples": [],
    "tip": "",
    "no": 7,
    "day": 28
   },
   {
    "word": "green",
    "pron": "그리인",
    "pos": "n.",
    "meaning": "초록색",
    "examples": [],
    "tip": "",
    "no": 8,
    "day": 28
   },
   {
    "word": "sky blue",
    "pron": "스카이 블루-",
    "pos": "n.",
    "meaning": "하늘색",
    "examples": [],
    "tip": "",
    "no": 9,
    "day": 28
   },
   {
    "word": "blue",
    "pron": "블루-",
    "pos": "n.",
    "meaning": "파란색",
    "examples": [],
    "tip": "",
    "no": 10,
    "day": 28
   },
   {
    "word": "indigo",
    "pron": "인디고우",
    "pos": "n.",
    "meaning": "남색",
    "examples": [],
    "tip": "",
    "no": 11,
    "day": 28
   },
   {
    "word": "violet",
    "pron": "바이얼릿",
    "pos": "n.",
    "meaning": "보라색",
    "examples": [],
    "tip": "",
    "no": 12,
    "day": 28
   },
   {
    "word": "purple",
    "pron": "퍼-플",
    "pos": "n.",
    "meaning": "보라색, 자주색",
    "examples": [],
    "tip": "",
    "no": 13,
    "day": 28
   },
   {
    "word": "lavender",
    "pron": "래번더",
    "pos": "n.",
    "meaning": "연보라색(= light purple 라잇 퍼-플)",
    "examples": [],
    "tip": "",
    "no": 14,
    "day": 28
   },
   {
    "word": "pink",
    "pron": "핑(ㅋ)",
    "pos": "n.",
    "meaning": "분홍색",
    "examples": [],
    "tip": "",
    "no": 15,
    "day": 28
   },
   {
    "word": "brown",
    "pron": "브라운",
    "pos": "n.",
    "meaning": "갈색",
    "examples": [],
    "tip": "",
    "no": 16,
    "day": 28
   },
   {
    "word": "khaki",
    "pron": "캐키",
    "pos": "n.",
    "meaning": "카키색",
    "examples": [],
    "tip": "",
    "no": 17,
    "day": 28
   },
   {
    "word": "gold",
    "pron": "고울(ㄷ)",
    "pos": "n.",
    "meaning": "금색",
    "examples": [],
    "tip": "",
    "no": 18,
    "day": 28
   },
   {
    "word": "silver",
    "pron": "실버",
    "pos": "n.",
    "meaning": "은색",
    "examples": [],
    "tip": "",
    "no": 19,
    "day": 28
   },
   {
    "word": "dark",
    "pron": "다-(ㅋ)",
    "pos": "a.",
    "meaning": "(빛깔이) 짙은(= rich 리취 = deep 디입)",
    "examples": [],
    "tip": "",
    "no": 20,
    "day": 28
   },
   {
    "word": "light",
    "pron": "라잇",
    "pos": "a.",
    "meaning": "(빛깔이) 옅은(= pale 페일)",
    "examples": [],
    "tip": "",
    "no": 21,
    "day": 28
   },
   {
    "word": "multicolored",
    "pron": "멀티컬럿",
    "pos": "a.",
    "meaning": "다색의, 다채로운",
    "examples": [],
    "tip": "",
    "no": 22,
    "day": 28
   },
   {
    "word": "monochrome",
    "pron": "모노크로움",
    "pos": "a.",
    "meaning": "단색의",
    "examples": [],
    "tip": "",
    "no": 23,
    "day": 28
   }
  ]
 },
 {
  "day": 29,
  "title": "Unit 29. 위치",
  "words": [
   {
    "word": "top",
    "pron": "탑",
    "pos": "n.",
    "meaning": "맨 위",
    "examples": [],
    "tip": "",
    "no": 1,
    "day": 29
   },
   {
    "word": "on",
    "pron": "언",
    "pos": "prep.",
    "meaning": "위에",
    "examples": [],
    "tip": "",
    "no": 2,
    "day": 29
   },
   {
    "word": "over",
    "pron": "오우버",
    "pos": "prep.",
    "meaning": "~보다 위에 (대상물과 접촉되어 있거나 그 위쪽 전반을 나타냄)",
    "examples": [],
    "tip": "",
    "no": 3,
    "day": 29
   },
   {
    "word": "above",
    "pron": "어버(ㅂ)",
    "pos": "prep.",
    "meaning": "~보다 위에 (대상물과 접촉하지 않고 바로 위나 위쪽을 가리킴)",
    "examples": [],
    "tip": "",
    "no": 4,
    "day": 29
   },
   {
    "word": "bottom",
    "pron": "바텀",
    "pos": "n.",
    "meaning": "바닥, 최저부",
    "examples": [],
    "tip": "",
    "no": 5,
    "day": 29
   },
   {
    "word": "down",
    "pron": "다운",
    "pos": "prep.",
    "meaning": "아래",
    "examples": [],
    "tip": "",
    "no": 6,
    "day": 29
   },
   {
    "word": "under",
    "pron": "언더",
    "pos": "prep.",
    "meaning": "~보다 아래에 (수직으로 바로 밑에)",
    "examples": [],
    "tip": "",
    "no": 7,
    "day": 29
   },
   {
    "word": "below",
    "pron": "빌로우",
    "pos": "prep.",
    "meaning": "~보다 아래에 (어떤 것보다 낮은 위치)",
    "examples": [],
    "tip": "",
    "no": 8,
    "day": 29
   },
   {
    "word": "beneath",
    "pron": "비니-쓰",
    "pos": "prep.",
    "meaning": "~보다 낮은 곳에",
    "examples": [],
    "tip": "",
    "no": 9,
    "day": 29
   },
   {
    "word": "in front of",
    "pron": "인 프런 터(ㅂ)",
    "pos": "prep.",
    "meaning": "~의 앞에",
    "examples": [],
    "tip": "",
    "no": 10,
    "day": 29
   },
   {
    "word": "behind",
    "pron": "비하인(ㄷ)",
    "pos": "prep.",
    "meaning": "~의 뒤에",
    "examples": [],
    "tip": "",
    "no": 11,
    "day": 29
   },
   {
    "word": "out",
    "pron": "아웃",
    "pos": "prep.",
    "meaning": "~의 밖에",
    "examples": [],
    "tip": "",
    "no": 12,
    "day": 29
   },
   {
    "word": "in",
    "pron": "인",
    "pos": "prep.",
    "meaning": "~의 안에",
    "examples": [],
    "tip": "",
    "no": 13,
    "day": 29
   },
   {
    "word": "beside",
    "pron": "비사이(ㄷ)",
    "pos": "prep.",
    "meaning": "~의 옆에",
    "examples": [],
    "tip": "",
    "no": 14,
    "day": 29
   },
   {
    "word": "among",
    "pron": "어멍",
    "pos": "prep.",
    "meaning": "~의 사이에 (동질적인 것에 둘러싸인다는 의미로, 복수 집합 명사를 수반)",
    "examples": [],
    "tip": "",
    "no": 15,
    "day": 29
   },
   {
    "word": "between",
    "pron": "빗위인",
    "pos": "prep.",
    "meaning": "~의 사이에",
    "examples": [],
    "tip": "",
    "no": 16,
    "day": 29
   },
   {
    "word": "across",
    "pron": "어크라-(ㅅ)",
    "pos": "prep.",
    "meaning": "~을 건너서",
    "examples": [],
    "tip": "",
    "no": 17,
    "day": 29
   },
   {
    "word": "to",
    "pron": "투",
    "pos": "prep.",
    "meaning": "~(으)로",
    "examples": [],
    "tip": "",
    "no": 18,
    "day": 29
   },
   {
    "word": "toward",
    "pron": "터워엇",
    "pos": "prep.",
    "meaning": "~을 향하여 (반드시 목적지에의 도착을 뜻하지는 않음)",
    "examples": [],
    "tip": "",
    "no": 19,
    "day": 29
   },
   {
    "word": "through",
    "pron": "쓰루-",
    "pos": "prep.",
    "meaning": "~을 통과하여",
    "examples": [],
    "tip": "",
    "no": 20,
    "day": 29
   }
  ]
 },
 {
  "day": 30,
  "title": "Unit 30. 방향",
  "words": [
   {
    "word": "north",
    "pron": "너-쓰",
    "pos": "n.",
    "meaning": "북쪽",
    "examples": [],
    "tip": "'동서남북'을 영어로 말할 때 순서는 '북남동서'로 'north, south, east and west'입니다.",
    "no": 1,
    "day": 30,
    "tipLabel": "💡 tip"
   },
   {
    "word": "northwest",
    "pron": "너-쓰웨숏",
    "pos": "n.",
    "meaning": "북서쪽",
    "examples": [],
    "tip": "",
    "no": 2,
    "day": 30
   },
   {
    "word": "northeast",
    "pron": "너-씨-숏",
    "pos": "n.",
    "meaning": "북동쪽",
    "examples": [],
    "tip": "",
    "no": 3,
    "day": 30
   },
   {
    "word": "west",
    "pron": "웨숏",
    "pos": "n.",
    "meaning": "서쪽",
    "examples": [],
    "tip": "",
    "no": 4,
    "day": 30
   },
   {
    "word": "east",
    "pron": "이-숏",
    "pos": "n.",
    "meaning": "동쪽",
    "examples": [],
    "tip": "",
    "no": 5,
    "day": 30
   },
   {
    "word": "southwest",
    "pron": "사우쓰웨숏",
    "pos": "n.",
    "meaning": "남서쪽",
    "examples": [],
    "tip": "",
    "no": 6,
    "day": 30
   },
   {
    "word": "southeast",
    "pron": "사우씨-숏",
    "pos": "n.",
    "meaning": "남동쪽",
    "examples": [],
    "tip": "",
    "no": 7,
    "day": 30
   },
   {
    "word": "south",
    "pron": "사우쓰",
    "pos": "n.",
    "meaning": "남쪽",
    "examples": [],
    "tip": "",
    "no": 8,
    "day": 30
   }
  ]
 },
 {
  "day": 31,
  "title": "Unit 31. 지도",
  "words": [
   {
    "word": "north america",
    "pron": "너-쓰 어메리커",
    "pos": "",
    "meaning": "북아메리카",
    "examples": [],
    "tip": "",
    "no": 1,
    "day": 31
   },
   {
    "word": "central america",
    "pron": "쎈츠럴 어메리커",
    "pos": "",
    "meaning": "중앙아메리카",
    "examples": [],
    "tip": "",
    "no": 2,
    "day": 31
   },
   {
    "word": "south america",
    "pron": "사우쓰 어메리커",
    "pos": "",
    "meaning": "남아메리카",
    "examples": [],
    "tip": "중앙 아메리카와 남아메리카 지역 중 과거 라틴 민족의 지배를 받았던 지역을 라틴 아메리카라고도 부르는데, '중남미'와 거의 유사한 의미로 통용됩니다.",
    "no": 3,
    "day": 31,
    "tipLabel": "💡 tip"
   },
   {
    "word": "europe",
    "pron": "유어럽",
    "pos": "n.",
    "meaning": "유럽",
    "examples": [],
    "tip": "",
    "no": 4,
    "day": 31
   },
   {
    "word": "middle east",
    "pron": "미들 이-슷",
    "pos": "",
    "meaning": "중동",
    "examples": [],
    "tip": "",
    "no": 5,
    "day": 31
   },
   {
    "word": "africa",
    "pron": "애프리커",
    "pos": "n.",
    "meaning": "아프리카",
    "examples": [],
    "tip": "",
    "no": 6,
    "day": 31
   },
   {
    "word": "asia",
    "pron": "에이져",
    "pos": "n.",
    "meaning": "아시아",
    "examples": [],
    "tip": "",
    "no": 7,
    "day": 31
   },
   {
    "word": "oceania",
    "pron": "오우쉬아-녀",
    "pos": "n.",
    "meaning": "오세아니아",
    "examples": [],
    "tip": "",
    "no": 8,
    "day": 31
   },
   {
    "word": "north pole",
    "pron": "너-쓰 포울",
    "pos": "",
    "meaning": "북극",
    "examples": [],
    "tip": "",
    "no": 9,
    "day": 31
   },
   {
    "word": "south pole",
    "pron": "사우쓰 포울",
    "pos": "",
    "meaning": "남극",
    "examples": [],
    "tip": "",
    "no": 10,
    "day": 31
   },
   {
    "word": "pacific ocean",
    "pron": "퍼시픽 오우션",
    "pos": "",
    "meaning": "태평양",
    "examples": [],
    "tip": "",
    "no": 11,
    "day": 31
   },
   {
    "word": "atlantic ocean",
    "pron": "애틀랜틱 오우션",
    "pos": "",
    "meaning": "대서양",
    "examples": [],
    "tip": "",
    "no": 12,
    "day": 31
   },
   {
    "word": "indian ocean",
    "pron": "인디언 오우션",
    "pos": "",
    "meaning": "인도양",
    "examples": [],
    "tip": "",
    "no": 13,
    "day": 31
   },
   {
    "word": "arctic ocean",
    "pron": "아악틱 오우션",
    "pos": "",
    "meaning": "북극해",
    "examples": [],
    "tip": "",
    "no": 14,
    "day": 31
   },
   {
    "word": "antarctic ocean",
    "pron": "앤타악틱 오우션",
    "pos": "",
    "meaning": "남극해",
    "examples": [],
    "tip": "",
    "no": 15,
    "day": 31
   },
   {
    "word": "mediterranean sea",
    "pron": "메디터레이니언 시-",
    "pos": "",
    "meaning": "지중해",
    "examples": [],
    "tip": "",
    "no": 16,
    "day": 31
   }
  ]
 },
 {
  "day": 32,
  "title": "Unit 32. 국가",
  "words": [
   {
    "word": "north america",
    "pron": "너-쓰 어메리커",
    "pos": "",
    "meaning": "북아메리카",
    "examples": [],
    "tip": "",
    "no": 1,
    "day": 32
   },
   {
    "word": "america",
    "pron": "어메리커",
    "pos": "n.",
    "meaning": "미국 (= the United of States of America 디 유나이팃 스테잇 처(ㅂ) 어메리커)",
    "examples": [],
    "tip": "",
    "no": 2,
    "day": 32
   },
   {
    "word": "american",
    "pron": "어메리컨",
    "pos": "n.",
    "meaning": "미국 사람 a. 미국의",
    "examples": [],
    "tip": "",
    "no": 3,
    "day": 32
   },
   {
    "word": "canada",
    "pron": "캐너더",
    "pos": "n.",
    "meaning": "캐나다",
    "examples": [],
    "tip": "",
    "no": 4,
    "day": 32
   },
   {
    "word": "canadian",
    "pron": "커네이디언",
    "pos": "n.",
    "meaning": "캐나다 사람 a. 캐나다의",
    "examples": [],
    "tip": "",
    "no": 5,
    "day": 32
   },
   {
    "word": "cuba",
    "pron": "큐-버",
    "pos": "n.",
    "meaning": "쿠바",
    "examples": [],
    "tip": "",
    "no": 6,
    "day": 32
   },
   {
    "word": "cuban",
    "pron": "큐-번",
    "pos": "n.",
    "meaning": "쿠바 사람 a. 쿠바의",
    "examples": [],
    "tip": "",
    "no": 7,
    "day": 32
   },
   {
    "word": "mexico",
    "pron": "멕시코우",
    "pos": "n.",
    "meaning": "멕시코",
    "examples": [],
    "tip": "",
    "no": 8,
    "day": 32
   },
   {
    "word": "mexican",
    "pron": "멕시컨",
    "pos": "n.",
    "meaning": "멕시코 사람 a. 멕시코의",
    "examples": [],
    "tip": "",
    "no": 9,
    "day": 32
   },
   {
    "word": "latin america",
    "pron": "래틴 어메리커",
    "pos": "",
    "meaning": "중남미, 라틴 아메리카",
    "examples": [],
    "tip": "",
    "no": 10,
    "day": 32
   },
   {
    "word": "argentina",
    "pron": "아-젠티-너",
    "pos": "n.",
    "meaning": "아르헨티나",
    "examples": [],
    "tip": "",
    "no": 11,
    "day": 32
   },
   {
    "word": "argentine",
    "pron": "아-젠틴",
    "pos": "n.",
    "meaning": "아르헨티나 사람 a. 아르헨티나의",
    "examples": [],
    "tip": "",
    "no": 12,
    "day": 32
   },
   {
    "word": "brazil",
    "pron": "브러질",
    "pos": "n.",
    "meaning": "브라질",
    "examples": [],
    "tip": "",
    "no": 13,
    "day": 32
   },
   {
    "word": "brazilian",
    "pron": "브러질련",
    "pos": "n.",
    "meaning": "브라질 사람 a. 브라질의",
    "examples": [],
    "tip": "",
    "no": 14,
    "day": 32
   },
   {
    "word": "chile",
    "pron": "칠리",
    "pos": "n.",
    "meaning": "칠레",
    "examples": [],
    "tip": "",
    "no": 15,
    "day": 32
   },
   {
    "word": "chilean",
    "pron": "칠련",
    "pos": "n.",
    "meaning": "칠레 사람 a. 칠레의",
    "examples": [],
    "tip": "",
    "no": 16,
    "day": 32
   },
   {
    "word": "colombia",
    "pron": "컬럼비어",
    "pos": "n.",
    "meaning": "콜롬비아",
    "examples": [],
    "tip": "",
    "no": 17,
    "day": 32
   },
   {
    "word": "colombian",
    "pron": "컬럼비언",
    "pos": "n.",
    "meaning": "콜롬비아 사람 a. 콜롬비아의",
    "examples": [],
    "tip": "",
    "no": 18,
    "day": 32
   },
   {
    "word": "dominican republic",
    "pron": "더미니컨 리퍼블릭",
    "pos": "n.",
    "meaning": "도미니카 공화국",
    "examples": [],
    "tip": "",
    "no": 19,
    "day": 32
   },
   {
    "word": "dominican",
    "pron": "더미니컨",
    "pos": "n.",
    "meaning": "도미니카 사람 a. 도미니카의",
    "examples": [],
    "tip": "",
    "no": 20,
    "day": 32
   },
   {
    "word": "ecuador",
    "pron": "에쿠아더-",
    "pos": "n.",
    "meaning": "에콰도르",
    "examples": [],
    "tip": "",
    "no": 21,
    "day": 32
   },
   {
    "word": "ecuadorian",
    "pron": "에쿠아더-리언",
    "pos": "n.",
    "meaning": "에콰도르 사람 a. 에콰도르의",
    "examples": [],
    "tip": "",
    "no": 22,
    "day": 32
   },
   {
    "word": "guatemala",
    "pron": "과-터말-러",
    "pos": "n.",
    "meaning": "과테말라",
    "examples": [],
    "tip": "",
    "no": 23,
    "day": 32
   },
   {
    "word": "guatemalan",
    "pron": "과-터말-런",
    "pos": "n.",
    "meaning": "과테말라 사람 a. 과테말라의",
    "examples": [],
    "tip": "",
    "no": 24,
    "day": 32
   },
   {
    "word": "peru",
    "pron": "퍼루-",
    "pos": "n.",
    "meaning": "페루",
    "examples": [],
    "tip": "",
    "no": 25,
    "day": 32
   },
   {
    "word": "peruvian",
    "pron": "퍼루-비언",
    "pos": "n.",
    "meaning": "페루 사람 a. 페루의",
    "examples": [],
    "tip": "",
    "no": 26,
    "day": 32
   },
   {
    "word": "uruguay",
    "pron": "유어러과이",
    "pos": "n.",
    "meaning": "우루과이",
    "examples": [],
    "tip": "",
    "no": 27,
    "day": 32
   },
   {
    "word": "uruguayan",
    "pron": "유어러과이언",
    "pos": "n.",
    "meaning": "우루과이 사람 a. 우루과이의",
    "examples": [],
    "tip": "",
    "no": 28,
    "day": 32
   },
   {
    "word": "europe",
    "pron": "유어럽",
    "pos": "n.",
    "meaning": "유럽",
    "examples": [],
    "tip": "",
    "no": 29,
    "day": 32
   },
   {
    "word": "austria",
    "pron": "어스츠리어",
    "pos": "n.",
    "meaning": "오스트리아",
    "examples": [],
    "tip": "",
    "no": 30,
    "day": 32
   },
   {
    "word": "austrian",
    "pron": "어스츠리언",
    "pos": "n.",
    "meaning": "오스트리아 사람 a. 오스트리아의",
    "examples": [],
    "tip": "",
    "no": 31,
    "day": 32
   },
   {
    "word": "belgium",
    "pron": "벨점",
    "pos": "n.",
    "meaning": "벨기에",
    "examples": [],
    "tip": "",
    "no": 32,
    "day": 32
   },
   {
    "word": "belgian",
    "pron": "벨전",
    "pos": "n.",
    "meaning": "벨기에 사람 a. 벨기에의",
    "examples": [],
    "tip": "",
    "no": 33,
    "day": 32
   },
   {
    "word": "denmark",
    "pron": "덴마-(ㅋ)",
    "pos": "n.",
    "meaning": "덴마크",
    "examples": [],
    "tip": "",
    "no": 34,
    "day": 32
   },
   {
    "word": "dane",
    "pron": "데인",
    "pos": "n.",
    "meaning": "덴마크 사람 a. 덴마크의",
    "examples": [],
    "tip": "",
    "no": 35,
    "day": 32
   },
   {
    "word": "england",
    "pron": "잉글런(ㄷ)",
    "pos": "n.",
    "meaning": "영국 (= the United Kingdom 디 유나이팃 킹덤)",
    "examples": [],
    "tip": "",
    "no": 36,
    "day": 32
   },
   {
    "word": "englishman/englishwoman",
    "pron": "잉글리쉬먼/잉글리쉬우먼",
    "pos": "n.",
    "meaning": "영국 사람 a. 영국의 (= British 브리티쉬)",
    "examples": [],
    "tip": "the English라고 하면 '잉글랜드인들'이라는 뜻입니다. 스코틀랜드나 아일랜드까지 포함한 '영국 사람'은 the British라고 합니다.",
    "no": 37,
    "day": 32,
    "tipLabel": "💡 tip"
   },
   {
    "word": "finland",
    "pron": "핀런(ㄷ)",
    "pos": "n.",
    "meaning": "핀란드",
    "examples": [],
    "tip": "",
    "no": 38,
    "day": 32
   },
   {
    "word": "finn",
    "pron": "핀",
    "pos": "n.",
    "meaning": "핀란드 사람 a. 핀란드의",
    "examples": [],
    "tip": "",
    "no": 39,
    "day": 32
   },
   {
    "word": "france",
    "pron": "프랜(ㅆ)",
    "pos": "n.",
    "meaning": "프랑스",
    "examples": [],
    "tip": "",
    "no": 40,
    "day": 32
   },
   {
    "word": "french",
    "pron": "프렌취",
    "pos": "n.",
    "meaning": "프랑스 사람 a. 프랑스의",
    "examples": [],
    "tip": "",
    "no": 41,
    "day": 32
   },
   {
    "word": "germany",
    "pron": "저-머니",
    "pos": "n.",
    "meaning": "독일",
    "examples": [],
    "tip": "",
    "no": 42,
    "day": 32
   },
   {
    "word": "german",
    "pron": "저-먼",
    "pos": "n.",
    "meaning": "독일 사람 a. 독일의",
    "examples": [],
    "tip": "",
    "no": 43,
    "day": 32
   },
   {
    "word": "greece",
    "pron": "그리-(ㅆ)",
    "pos": "n.",
    "meaning": "그리스",
    "examples": [],
    "tip": "",
    "no": 44,
    "day": 32
   },
   {
    "word": "greek",
    "pron": "그리익",
    "pos": "n.",
    "meaning": "그리스 사람 a. 그리스의",
    "examples": [],
    "tip": "",
    "no": 45,
    "day": 32
   },
   {
    "word": "italy",
    "pron": "이털리",
    "pos": "n.",
    "meaning": "이탈리아",
    "examples": [],
    "tip": "",
    "no": 46,
    "day": 32
   },
   {
    "word": "italian",
    "pron": "이탤리언",
    "pos": "n.",
    "meaning": "이탈리아 사람 a. 이탈리아의",
    "examples": [],
    "tip": "",
    "no": 47,
    "day": 32
   },
   {
    "word": "the netherlands",
    "pron": "더 네더런(ㅈ)",
    "pos": "n.",
    "meaning": "네덜란드",
    "examples": [],
    "tip": "",
    "no": 48,
    "day": 32
   },
   {
    "word": "dutchman/dutchwoman",
    "pron": "더취먼/더취우먼",
    "pos": "n.",
    "meaning": "네덜란드 사람 a. 네덜란드의",
    "examples": [],
    "tip": "",
    "no": 49,
    "day": 32
   },
   {
    "word": "norway",
    "pron": "너-웨이",
    "pos": "n.",
    "meaning": "노르웨이",
    "examples": [],
    "tip": "",
    "no": 50,
    "day": 32
   },
   {
    "word": "norwegian",
    "pron": "너-위-전",
    "pos": "n.",
    "meaning": "노르웨이 사람 a. 노르웨이의",
    "examples": [],
    "tip": "",
    "no": 51,
    "day": 32
   },
   {
    "word": "poland",
    "pron": "포우런(ㄷ)",
    "pos": "n.",
    "meaning": "폴란드",
    "examples": [],
    "tip": "",
    "no": 52,
    "day": 32
   },
   {
    "word": "pole",
    "pron": "포울",
    "pos": "n.",
    "meaning": "폴란드 사람 a. 폴란드의",
    "examples": [],
    "tip": "",
    "no": 53,
    "day": 32
   },
   {
    "word": "romania",
    "pron": "로우메이니어",
    "pos": "n.",
    "meaning": "루마니아",
    "examples": [],
    "tip": "",
    "no": 54,
    "day": 32
   },
   {
    "word": "romanian",
    "pron": "로우메이니언",
    "pos": "n.",
    "meaning": "루마니아 사람 a. 루마니아의",
    "examples": [],
    "tip": "",
    "no": 55,
    "day": 32
   },
   {
    "word": "russia",
    "pron": "러시어",
    "pos": "n.",
    "meaning": "러시아",
    "examples": [],
    "tip": "",
    "no": 56,
    "day": 32
   },
   {
    "word": "russian",
    "pron": "러시언",
    "pos": "n.",
    "meaning": "러시아 사람 a. 러시아의",
    "examples": [],
    "tip": "",
    "no": 57,
    "day": 32
   },
   {
    "word": "spain",
    "pron": "스페인",
    "pos": "n.",
    "meaning": "스페인",
    "examples": [],
    "tip": "",
    "no": 58,
    "day": 32
   },
   {
    "word": "spaniard",
    "pron": "스패녀(ㄷ)",
    "pos": "n.",
    "meaning": "스페인 사람 a. 스페인의",
    "examples": [],
    "tip": "",
    "no": 59,
    "day": 32
   },
   {
    "word": "sweden",
    "pron": "스위-든",
    "pos": "n.",
    "meaning": "스웨덴",
    "examples": [],
    "tip": "",
    "no": 60,
    "day": 32
   },
   {
    "word": "swede",
    "pron": "스위-(ㄷ)",
    "pos": "n.",
    "meaning": "스웨덴 사람 a. 스웨덴의",
    "examples": [],
    "tip": "",
    "no": 61,
    "day": 32
   },
   {
    "word": "switzerland",
    "pron": "스위처런(ㄷ)",
    "pos": "n.",
    "meaning": "스위스",
    "examples": [],
    "tip": "",
    "no": 62,
    "day": 32
   },
   {
    "word": "swiss",
    "pron": "스위(ㅅ)",
    "pos": "n.",
    "meaning": "스위스 사람 a. 스위스의",
    "examples": [],
    "tip": "",
    "no": 63,
    "day": 32
   },
   {
    "word": "turkey",
    "pron": "터-키",
    "pos": "n.",
    "meaning": "터키",
    "examples": [],
    "tip": "",
    "no": 64,
    "day": 32
   },
   {
    "word": "turk",
    "pron": "터억",
    "pos": "n.",
    "meaning": "터키 사람 a. 터키의",
    "examples": [],
    "tip": "",
    "no": 65,
    "day": 32
   },
   {
    "word": "oceania",
    "pron": "오우쉬아-녀",
    "pos": "n.",
    "meaning": "오세아니아",
    "examples": [],
    "tip": "",
    "no": 66,
    "day": 32
   },
   {
    "word": "australia",
    "pron": "어-스츠레일려",
    "pos": "n.",
    "meaning": "호주",
    "examples": [],
    "tip": "",
    "no": 67,
    "day": 32
   },
   {
    "word": "australian",
    "pron": "어-스츠레일련",
    "pos": "n.",
    "meaning": "호주 사람 a. 호주의",
    "examples": [],
    "tip": "",
    "no": 68,
    "day": 32
   },
   {
    "word": "new zealand",
    "pron": "누- 지일런(ㄷ)",
    "pos": "n.",
    "meaning": "뉴질랜드",
    "examples": [],
    "tip": "",
    "no": 69,
    "day": 32
   },
   {
    "word": "new zealander",
    "pron": "누- 지일런더",
    "pos": "n.",
    "meaning": "뉴질랜드 사람 a. 뉴질랜드의",
    "examples": [],
    "tip": "",
    "no": 70,
    "day": 32
   },
   {
    "word": "africa",
    "pron": "애프리커",
    "pos": "n.",
    "meaning": "아프리카",
    "examples": [],
    "tip": "",
    "no": 71,
    "day": 32
   },
   {
    "word": "egypt",
    "pron": "이-집(ㅌ)",
    "pos": "n.",
    "meaning": "이집트",
    "examples": [],
    "tip": "",
    "no": 72,
    "day": 32
   },
   {
    "word": "egyptian",
    "pron": "이집션",
    "pos": "n.",
    "meaning": "이집트 사람 a. 이집트의",
    "examples": [],
    "tip": "",
    "no": 73,
    "day": 32
   },
   {
    "word": "morocco",
    "pron": "머라-코우",
    "pos": "n.",
    "meaning": "모로코",
    "examples": [],
    "tip": "",
    "no": 74,
    "day": 32
   },
   {
    "word": "moroccan",
    "pron": "머라컨",
    "pos": "n.",
    "meaning": "모로코 사람 a. 모로코의",
    "examples": [],
    "tip": "",
    "no": 75,
    "day": 32
   },
   {
    "word": "nigeria",
    "pron": "나이지어리어",
    "pos": "n.",
    "meaning": "나이지리아",
    "examples": [],
    "tip": "",
    "no": 76,
    "day": 32
   },
   {
    "word": "nigerian",
    "pron": "나이지어리언",
    "pos": "n.",
    "meaning": "나이지리아 사람 a. 나이지리아의",
    "examples": [],
    "tip": "",
    "no": 77,
    "day": 32
   },
   {
    "word": "the republic of south africa",
    "pron": "더 리퍼블릭 어(ㅂ) 사우쓰 애프리커",
    "pos": "n.",
    "meaning": "남아프리카 공화국",
    "examples": [],
    "tip": "",
    "no": 78,
    "day": 32
   },
   {
    "word": "south african",
    "pron": "사우쓰 애프리컨",
    "pos": "n.",
    "meaning": "남아공 사람 a. 남아공의",
    "examples": [],
    "tip": "",
    "no": 79,
    "day": 32
   },
   {
    "word": "sudan",
    "pron": "수-댄",
    "pos": "n.",
    "meaning": "수단",
    "examples": [],
    "tip": "",
    "no": 80,
    "day": 32
   },
   {
    "word": "sudanese",
    "pron": "수-더니-(ㅈ)",
    "pos": "n.",
    "meaning": "수단 사람 a. 수단의",
    "examples": [],
    "tip": "",
    "no": 81,
    "day": 32
   },
   {
    "word": "asia",
    "pron": "에이져",
    "pos": "n.",
    "meaning": "아시아",
    "examples": [],
    "tip": "",
    "no": 82,
    "day": 32
   },
   {
    "word": "china",
    "pron": "차이너",
    "pos": "n.",
    "meaning": "중국",
    "examples": [],
    "tip": "",
    "no": 83,
    "day": 32
   },
   {
    "word": "chinese",
    "pron": "차이니-(ㅈ)",
    "pos": "n.",
    "meaning": "중국 사람 a. 중국의",
    "examples": [],
    "tip": "",
    "no": 84,
    "day": 32
   },
   {
    "word": "india",
    "pron": "인디어",
    "pos": "n.",
    "meaning": "인도",
    "examples": [],
    "tip": "",
    "no": 85,
    "day": 32
   },
   {
    "word": "indian",
    "pron": "인디언",
    "pos": "n.",
    "meaning": "인도 사람 a. 인도의",
    "examples": [],
    "tip": "",
    "no": 86,
    "day": 32
   },
   {
    "word": "indonesia",
    "pron": "인더니-져",
    "pos": "n.",
    "meaning": "인도네시아",
    "examples": [],
    "tip": "",
    "no": 87,
    "day": 32
   },
   {
    "word": "indonesian",
    "pron": "인더니-젼",
    "pos": "n.",
    "meaning": "인도네시아 사람 a. 인도네시아의",
    "examples": [],
    "tip": "",
    "no": 88,
    "day": 32
   },
   {
    "word": "japan",
    "pron": "저팬",
    "pos": "n.",
    "meaning": "일본",
    "examples": [],
    "tip": "",
    "no": 89,
    "day": 32
   },
   {
    "word": "japanese",
    "pron": "재퍼니-(ㅈ)",
    "pos": "n.",
    "meaning": "일본 사람 a. 일본의",
    "examples": [],
    "tip": "",
    "no": 90,
    "day": 32
   },
   {
    "word": "korea",
    "pron": "커리-어",
    "pos": "n.",
    "meaning": "한국",
    "examples": [],
    "tip": "",
    "no": 91,
    "day": 32
   },
   {
    "word": "korean",
    "pron": "커리-언",
    "pos": "n.",
    "meaning": "한국 사람 a. 한국의",
    "examples": [],
    "tip": "",
    "no": 92,
    "day": 32
   },
   {
    "word": "north korea",
    "pron": "너-쓰 커리-어",
    "pos": "n.",
    "meaning": "북한",
    "examples": [],
    "tip": "",
    "no": 93,
    "day": 32
   },
   {
    "word": "north korean",
    "pron": "너-쓰 커리-언",
    "pos": "n.",
    "meaning": "북한 사람 a. 북한의",
    "examples": [],
    "tip": "",
    "no": 94,
    "day": 32
   },
   {
    "word": "the republic of korea",
    "pron": "더 리퍼블릭 어(ㅂ) 커리-어",
    "pos": "n.",
    "meaning": "대한민국",
    "examples": [],
    "tip": "",
    "no": 95,
    "day": 32
   },
   {
    "word": "south korean",
    "pron": "사우쓰 커리-언",
    "pos": "n.",
    "meaning": "한국 사람 a. 한국의",
    "examples": [],
    "tip": "",
    "no": 96,
    "day": 32
   },
   {
    "word": "malaysia",
    "pron": "멀레이저",
    "pos": "n.",
    "meaning": "말레이시아",
    "examples": [],
    "tip": "",
    "no": 97,
    "day": 32
   },
   {
    "word": "malaysian",
    "pron": "멀레이전",
    "pos": "n.",
    "meaning": "말레이시아 사람 a. 말레이시아의",
    "examples": [],
    "tip": "",
    "no": 98,
    "day": 32
   },
   {
    "word": "the philippines",
    "pron": "더 필러피인(ㅅ)",
    "pos": "n.",
    "meaning": "필리핀",
    "examples": [],
    "tip": "",
    "no": 99,
    "day": 32
   },
   {
    "word": "filipino",
    "pron": "필러피-노우",
    "pos": "n.",
    "meaning": "필리핀 사람 a. 필리핀의",
    "examples": [],
    "tip": "",
    "no": 100,
    "day": 32
   },
   {
    "word": "singapore",
    "pron": "싱거퍼-",
    "pos": "n.",
    "meaning": "싱가포르",
    "examples": [],
    "tip": "",
    "no": 101,
    "day": 32
   },
   {
    "word": "singaporean",
    "pron": "싱거퍼-리언",
    "pos": "n.",
    "meaning": "싱가포르 사람 a. 싱가포르의",
    "examples": [],
    "tip": "",
    "no": 102,
    "day": 32
   },
   {
    "word": "taiwan",
    "pron": "타이와안",
    "pos": "n.",
    "meaning": "대만",
    "examples": [],
    "tip": "",
    "no": 103,
    "day": 32
   },
   {
    "word": "taiwanese",
    "pron": "타이와-니-(ㅈ)",
    "pos": "n.",
    "meaning": "대만 사람 a. 대만의",
    "examples": [],
    "tip": "",
    "no": 104,
    "day": 32
   },
   {
    "word": "thailand",
    "pron": "타이랜(ㄷ)",
    "pos": "n.",
    "meaning": "태국",
    "examples": [],
    "tip": "",
    "no": 105,
    "day": 32
   },
   {
    "word": "thai",
    "pron": "타이",
    "pos": "n.",
    "meaning": "태국 사람 a. 태국의",
    "examples": [],
    "tip": "",
    "no": 106,
    "day": 32
   },
   {
    "word": "vietnam",
    "pron": "비-엣나암",
    "pos": "n.",
    "meaning": "베트남",
    "examples": [],
    "tip": "",
    "no": 107,
    "day": 32
   },
   {
    "word": "vietnamese",
    "pron": "비엣너-미-(ㅈ)",
    "pos": "n.",
    "meaning": "베트남 사람 a. 베트남의",
    "examples": [],
    "tip": "",
    "no": 108,
    "day": 32
   },
   {
    "word": "middle east",
    "pron": "미들 이-슷",
    "pos": "",
    "meaning": "중동",
    "examples": [],
    "tip": "",
    "no": 109,
    "day": 32
   },
   {
    "word": "iran",
    "pron": "이랜",
    "pos": "n.",
    "meaning": "이란",
    "examples": [],
    "tip": "",
    "no": 110,
    "day": 32
   },
   {
    "word": "iranian",
    "pron": "이레이니언",
    "pos": "n.",
    "meaning": "이란 사람 a. 이란의",
    "examples": [],
    "tip": "",
    "no": 111,
    "day": 32
   },
   {
    "word": "iraq",
    "pron": "이랙",
    "pos": "n.",
    "meaning": "이라크",
    "examples": [],
    "tip": "",
    "no": 112,
    "day": 32
   },
   {
    "word": "iraqi",
    "pron": "이래키",
    "pos": "n.",
    "meaning": "이라크 사람 a. 이라크의",
    "examples": [],
    "tip": "",
    "no": 113,
    "day": 32
   },
   {
    "word": "kuwait",
    "pron": "쿠웨잇",
    "pos": "n.",
    "meaning": "쿠웨이트",
    "examples": [],
    "tip": "",
    "no": 114,
    "day": 32
   },
   {
    "word": "kuwaiti",
    "pron": "쿠웨이티",
    "pos": "n.",
    "meaning": "쿠웨이트 사람 a. 쿠웨이트의",
    "examples": [],
    "tip": "",
    "no": 115,
    "day": 32
   },
   {
    "word": "saudi arabia",
    "pron": "사우디 어레이비어",
    "pos": "n.",
    "meaning": "사우디 아라비아",
    "examples": [],
    "tip": "",
    "no": 116,
    "day": 32
   },
   {
    "word": "saudi arabian",
    "pron": "사우디 어레이비언",
    "pos": "n.",
    "meaning": "사우디 아라비아 사람 a. 사우디 아라비아의",
    "examples": [],
    "tip": "",
    "no": 117,
    "day": 32
   },
   {
    "word": "syria",
    "pron": "시리어",
    "pos": "n.",
    "meaning": "시리아",
    "examples": [],
    "tip": "",
    "no": 118,
    "day": 32
   },
   {
    "word": "syrian",
    "pron": "시리언",
    "pos": "n.",
    "meaning": "시리아 사람 a. 시리아의",
    "examples": [],
    "tip": "",
    "no": 119,
    "day": 32
   },
   {
    "word": "united arab emirates",
    "pron": "유나이팃 애럽 에머럿",
    "pos": "n.",
    "meaning": "아랍에미리트 연합국",
    "examples": [],
    "tip": "약자로 UAE나 U.A.E라고도 씁니다.",
    "no": 120,
    "day": 32,
    "tipLabel": "💡 tip"
   },
   {
    "word": "arabian",
    "pron": "어레이비언",
    "pos": "n.",
    "meaning": "아라비아 사람 a. 아라비아의",
    "examples": [],
    "tip": "",
    "no": 121,
    "day": 32
   }
  ]
 },
 {
  "day": 33,
  "title": "Unit 33. 접속사&전치사&부사",
  "words": [
   {
    "word": "and",
    "pron": "앤(ㄷ)",
    "pos": "conj.",
    "meaning": "그리고, ~과, ~하면서",
    "examples": [],
    "tip": "단어, 구, 절을 연결해 주는 역할을 하는 단어입니다.",
    "no": 1,
    "day": 33,
    "tipLabel": "💡 tip"
   },
   {
    "word": "but",
    "pron": "벗",
    "pos": "conj.",
    "meaning": "그러나, 하지만",
    "examples": [],
    "tip": "",
    "no": 2,
    "day": 33
   },
   {
    "word": "so (that)",
    "pron": "소우 댓",
    "pos": "conj.",
    "meaning": "~하기 위하여, 그러니까",
    "examples": [],
    "tip": "",
    "no": 3,
    "day": 33
   },
   {
    "word": "or",
    "pron": "어",
    "pos": "conj.",
    "meaning": "~ 또는 …",
    "examples": [],
    "tip": "",
    "no": 4,
    "day": 33
   },
   {
    "word": "because",
    "pron": "비커-(ㅈ)",
    "pos": "conj.",
    "meaning": "왜냐하면, ~때문에",
    "examples": [],
    "tip": "원인이나 이유를 나타낼 수 있는 as, since, for와 비교하면, because가 가장 직접적인 원인을 나타냅니다.",
    "no": 5,
    "day": 33,
    "tipLabel": "💡 tip"
   },
   {
    "word": "since",
    "pron": "신(ㅆ)",
    "pos": "conj.",
    "meaning": "~한 후에, ~한 이래 죽, ~이므로",
    "examples": [],
    "tip": "",
    "no": 6,
    "day": 33
   },
   {
    "word": "for",
    "pron": "퍼",
    "pos": "conj.",
    "meaning": "왜냐하면 ~이므로",
    "examples": [],
    "tip": "보충적으로 이유를 설명한다는 느낌입니다.",
    "no": 7,
    "day": 33,
    "tipLabel": "💡 tip"
   },
   {
    "word": "if",
    "pron": "이(ㅍ)",
    "pos": "conj.",
    "meaning": "만약 ~이라면",
    "examples": [],
    "tip": "",
    "no": 8,
    "day": 33
   },
   {
    "word": "whether",
    "pron": "훼더",
    "pos": "conj.",
    "meaning": "~인지 어떤지",
    "examples": [],
    "tip": "",
    "no": 9,
    "day": 33
   },
   {
    "word": "that",
    "pron": "댓",
    "pos": "conj.",
    "meaning": "~이라는 것, ~이므로",
    "examples": [],
    "tip": "명사절, 부사절을 이끌면서 많은 역할을 하는 접속사입니다.",
    "no": 10,
    "day": 33,
    "tipLabel": "💡 tip"
   },
   {
    "word": "although",
    "pron": "어얼도우",
    "pos": "conj.",
    "meaning": "비록 ~일지라도",
    "examples": [],
    "tip": "though와 거의 같은 뜻이지만, although가 다소 문어적이며 격식적인 말입니다. 주로 문장 앞에 쓰입니다.",
    "no": 11,
    "day": 33,
    "tipLabel": "💡 tip"
   },
   {
    "word": "also",
    "pron": "어얼소우",
    "pos": "conj.",
    "meaning": "그리고 또한, 게다가",
    "examples": [],
    "tip": "",
    "no": 12,
    "day": 33
   },
   {
    "word": "however",
    "pron": "하우에버",
    "pos": "conj.",
    "meaning": "어떤 식으로든지",
    "examples": [],
    "tip": "",
    "no": 13,
    "day": 33
   },
   {
    "word": "yet",
    "pron": "옛",
    "pos": "conj.",
    "meaning": "그럼에도 불구하고, 그렇지만",
    "examples": [],
    "tip": "",
    "no": 14,
    "day": 33
   },
   {
    "word": "both ~ and …",
    "pron": "보우쓰 ~ 앤(ㄷ) …",
    "pos": "conj.",
    "meaning": "~과 … 둘 다",
    "examples": [],
    "tip": "상관접속사 구문입니다. 상관접속사란 둘 이상의 단어가 짝을 이루어 함께 쓰이는 접속사를 말합니다.",
    "no": 15,
    "day": 33,
    "tipLabel": "💡 tip"
   },
   {
    "word": "not only ~ but also …",
    "pron": "낫 오운리 ~ 벗 얼소우 …",
    "pos": "conj.",
    "meaning": "~ 뿐만 아니라 …도",
    "examples": [],
    "tip": "",
    "no": 16,
    "day": 33
   },
   {
    "word": "either ~ or …",
    "pron": "이-더 ~ 어 …",
    "pos": "conj.",
    "meaning": "~이든 …이든 어느 한 쪽",
    "examples": [],
    "tip": "상관접속사 구문입니다.",
    "no": 17,
    "day": 33,
    "tipLabel": "💡 tip"
   },
   {
    "word": "neither ~ nor …",
    "pron": "니-더 ~ 너 …",
    "pos": "conj.",
    "meaning": "~도 아니고 …도 아니다",
    "examples": [],
    "tip": "",
    "no": 18,
    "day": 33
   },
   {
    "word": "up",
    "pron": "업",
    "pos": "prep.",
    "meaning": "위쪽으로",
    "examples": [],
    "tip": "방향, 장소, 시간이나 소유 등의 관계를 설명해 주는 품사입니다. 전치사는 반드시 명사나 대명사 앞에 위치합니다. 다른 단어와 합쳐져 관용구로 많이 쓰이기 때문에 전치사만 따로 공부하기보다는 많이 쓰이는 상용구를 중심으로 학습하는 것이 좋습니다.",
    "no": 19,
    "day": 33,
    "tipLabel": "💡 tip"
   },
   {
    "word": "down",
    "pron": "다운",
    "pos": "prep.",
    "meaning": "아래쪽으로",
    "examples": [],
    "tip": "",
    "no": 20,
    "day": 33
   },
   {
    "word": "at",
    "pron": "앳",
    "pos": "prep.",
    "meaning": "~에서",
    "examples": [],
    "tip": "주로 at은 비교적 좁은 지점에, in은 넓은 범위의 장소 앞에 쓰입니다.",
    "no": 21,
    "day": 33,
    "tipLabel": "💡 tip"
   },
   {
    "word": "in",
    "pron": "인",
    "pos": "prep.",
    "meaning": "안으로, 안에",
    "examples": [],
    "tip": "in은 정지하고 있는 사물의 위치를, into는 안으로의 동작을 나타냅니다.",
    "no": 22,
    "day": 33,
    "tipLabel": "💡 tip"
   },
   {
    "word": "into",
    "pron": "인투",
    "pos": "prep.",
    "meaning": "~의 안으로",
    "examples": [],
    "tip": "자음 앞에서는 [인터], 모음 앞에서는 [인투]로 발음합니다.",
    "no": 23,
    "day": 33,
    "tipLabel": "💡 tip"
   },
   {
    "word": "out",
    "pron": "아웃",
    "pos": "prep.",
    "meaning": "밖으로",
    "examples": [],
    "tip": "",
    "no": 24,
    "day": 33
   },
   {
    "word": "on",
    "pron": "언",
    "pos": "prep.",
    "meaning": "~위에",
    "examples": [],
    "tip": "",
    "no": 25,
    "day": 33
   },
   {
    "word": "onto",
    "pron": "아안터",
    "pos": "prep.",
    "meaning": "~의 위에",
    "examples": [],
    "tip": "",
    "no": 26,
    "day": 33
   },
   {
    "word": "off",
    "pron": "어-(ㅍ)",
    "pos": "prep.",
    "meaning": "떨어져, 벗어나서",
    "examples": [],
    "tip": "",
    "no": 27,
    "day": 33
   },
   {
    "word": "from",
    "pron": "프럼",
    "pos": "prep.",
    "meaning": "~에서, ~부터",
    "examples": [],
    "tip": "동사와 함께 오면 장소의 기점을 나타냅니다.",
    "no": 28,
    "day": 33,
    "tipLabel": "💡 tip"
   },
   {
    "word": "to",
    "pron": "투",
    "pos": "prep.",
    "meaning": "~에, ~까지",
    "examples": [],
    "tip": "from A to B 구문으로 해서 'A로부터 B까지'라는 뜻으로 시간이나 장소 모두 사용할 수 있습니다.",
    "no": 29,
    "day": 33,
    "tipLabel": "💡 tip"
   },
   {
    "word": "over",
    "pron": "오우버",
    "pos": "prep.",
    "meaning": "~너머로, ~에서 떨어져서 위에",
    "examples": [],
    "tip": "",
    "no": 30,
    "day": 33
   },
   {
    "word": "against",
    "pron": "어겐슷",
    "pos": "prep.",
    "meaning": "~에 반대하여, ~을 거슬러",
    "examples": [],
    "tip": "",
    "no": 31,
    "day": 33
   },
   {
    "word": "by",
    "pron": "바이",
    "pos": "prep.",
    "meaning": "~에 의하여, ~곁에서",
    "examples": [],
    "tip": "",
    "no": 32,
    "day": 33
   },
   {
    "word": "near",
    "pron": "니어",
    "pos": "prep.",
    "meaning": "~에 접근하여",
    "examples": [],
    "tip": "지명 앞에서는 near를 씁니다.",
    "no": 33,
    "day": 33,
    "tipLabel": "💡 tip"
   },
   {
    "word": "around",
    "pron": "어라운(ㄷ)",
    "pos": "prep.",
    "meaning": "~의 주위에",
    "examples": [],
    "tip": "",
    "no": 34,
    "day": 33
   },
   {
    "word": "along",
    "pron": "어러엉",
    "pos": "prep.",
    "meaning": "~을 따라",
    "examples": [],
    "tip": "",
    "no": 35,
    "day": 33
   },
   {
    "word": "through",
    "pron": "쓰루-",
    "pos": "prep.",
    "meaning": "~을 통과하여",
    "examples": [],
    "tip": "",
    "no": 36,
    "day": 33
   },
   {
    "word": "with",
    "pron": "윗",
    "pos": "prep.",
    "meaning": "~과 함께",
    "examples": [],
    "tip": "",
    "no": 37,
    "day": 33
   },
   {
    "word": "of",
    "pron": "어(ㅂ)",
    "pos": "prep.",
    "meaning": "~의, ~을",
    "examples": [],
    "tip": "",
    "no": 38,
    "day": 33
   },
   {
    "word": "like",
    "pron": "라익",
    "pos": "prep.",
    "meaning": "~과 같은 정도로, ~을 닮아",
    "examples": [],
    "tip": "",
    "no": 39,
    "day": 33
   },
   {
    "word": "very",
    "pron": "베리",
    "pos": "ad.",
    "meaning": "대단히, 매우",
    "examples": [],
    "tip": "주로 '형용사+ly=부사'입니다.",
    "no": 40,
    "day": 33,
    "tipLabel": "💡 tip"
   },
   {
    "word": "more",
    "pron": "머-",
    "pos": "ad.",
    "meaning": "더 많이",
    "examples": [],
    "tip": "",
    "no": 41,
    "day": 33
   },
   {
    "word": "less",
    "pron": "레(ㅅ)",
    "pos": "ad.",
    "meaning": "더 적게",
    "examples": [],
    "tip": "",
    "no": 42,
    "day": 33
   },
   {
    "word": "not",
    "pron": "낫",
    "pos": "ad.",
    "meaning": "~아니다",
    "examples": [],
    "tip": "",
    "no": 43,
    "day": 33
   },
   {
    "word": "never",
    "pron": "네버",
    "pos": "ad.",
    "meaning": "조금도 ~않다, 아니다",
    "examples": [],
    "tip": "",
    "no": 44,
    "day": 33
   },
   {
    "word": "well",
    "pron": "웰",
    "pos": "ad.",
    "meaning": "잘, 훌륭하게",
    "examples": [],
    "tip": "",
    "no": 45,
    "day": 33
   },
   {
    "word": "now",
    "pron": "나우",
    "pos": "ad.",
    "meaning": "지금, 이제",
    "examples": [],
    "tip": "",
    "no": 46,
    "day": 33
   },
   {
    "word": "today",
    "pron": "터데이",
    "pos": "ad.",
    "meaning": "오늘",
    "examples": [],
    "tip": "tomorrow, yesterday도 마찬가지로 명사뿐 아니라 부사로도 쓰입니다.",
    "no": 47,
    "day": 33,
    "tipLabel": "💡 tip"
   },
   {
    "word": "frequently",
    "pron": "프리-쿠언틀리",
    "pos": "ad.",
    "meaning": "자주, 빈번하게",
    "examples": [],
    "tip": "",
    "no": 48,
    "day": 33
   },
   {
    "word": "late",
    "pron": "레잇",
    "pos": "ad.",
    "meaning": "늦게, 최근까지",
    "examples": [],
    "tip": "",
    "no": 49,
    "day": 33
   },
   {
    "word": "lately",
    "pron": "레잇리",
    "pos": "ad.",
    "meaning": "요즘, 최근에",
    "examples": [],
    "tip": "",
    "no": 50,
    "day": 33
   },
   {
    "word": "already",
    "pron": "어얼레디",
    "pos": "ad.",
    "meaning": "이미, 벌써",
    "examples": [],
    "tip": "",
    "no": 51,
    "day": 33
   },
   {
    "word": "always",
    "pron": "어얼웨이(ㅈ)",
    "pos": "ad.",
    "meaning": "항상, 늘",
    "examples": [],
    "tip": "",
    "no": 52,
    "day": 33
   },
   {
    "word": "maybe",
    "pron": "메이비-",
    "pos": "ad.",
    "meaning": "아마, 어쩌면",
    "examples": [],
    "tip": "",
    "no": 53,
    "day": 33
   },
   {
    "word": "away",
    "pron": "어웨이",
    "pos": "ad.",
    "meaning": "떨어져, 떨어진 곳에서",
    "examples": [],
    "tip": "",
    "no": 54,
    "day": 33
   },
   {
    "word": "still",
    "pron": "스틸",
    "pos": "ad.",
    "meaning": "아직도, 여전히",
    "examples": [],
    "tip": "still은 보통 긍정문에 쓰입니다. 부정문에서는 yet을 씁니다.",
    "no": 55,
    "day": 33,
    "tipLabel": "💡 tip"
   },
   {
    "word": "suddenly",
    "pron": "서든리",
    "pos": "ad.",
    "meaning": "갑자기",
    "examples": [],
    "tip": "",
    "no": 56,
    "day": 33
   },
   {
    "word": "before",
    "pron": "비퍼-",
    "pos": "ad.",
    "meaning": "(공간) 앞에, (시간) 전에",
    "examples": [],
    "tip": "",
    "no": 57,
    "day": 33
   }
  ]
 }
];
