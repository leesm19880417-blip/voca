// 왕초보 영어회화 100일의 기적 — 100일 코스 (DAY 1~100)
// 각 DAY: 핵심표현(en/ko)+대화(A/B)+단어+꿀팁. 책 본문(p18~117)에서 추출.
const DAYS100 = [
 {
  "day": 1,
  "en": "Smells good.",
  "ko": "냄새가 좋네요.",
  "dialog": [
   {
    "en": "Dinner is ready. Come and get it.",
    "ko": "저녁 준비됐다. 어서 와서 먹어라."
   },
   {
    "en": "Smells good. What are we having?",
    "ko": "냄새 좋은데요. 우리 뭐 먹어요?"
   }
  ],
  "vocab": [
   {
    "en": "Come and get it.",
    "ko": "와서 드세요."
   },
   {
    "en": "What are we having?",
    "ko": "우리 뭐 먹어요?"
   }
  ],
  "tip": "테이블에 맛있는 음식이 준비됐을 때 먹기 전에 사용하는 표현입니다. 참고로 '수상한 냄새가 난다.'는 Smells fishy., '냄새가 고약해.'는 Smells bad., '이상한 냄새가 나.'는 Smells funny.와 같이 말합니다."
 },
 {
  "day": 2,
  "en": "Let's toast!",
  "ko": "건배하자!",
  "dialog": [
   {
    "en": "You made it. Congratulations!",
    "ko": "해냈구나. 축하해!"
   },
   {
    "en": "Let's toast! Bottoms up!",
    "ko": "건배하자! 원 샷이야!"
   }
  ],
  "vocab": [
   {
    "en": "make it",
    "ko": "성공하다, 해내다"
   },
   {
    "en": "bottoms up",
    "ko": "원 샷 하다"
   }
  ],
  "tip": "술자리에서 건배 제의를 할 때 사용하는 표현입니다. 보통 Let's make a toast!, I'd like to make a toast., I propose a toast.라고 하는데, 간단히 Let's toast!라고 하기도 합니다. '건배!'는 Cheers! 또는 Here's to us!와 같이 표현합니다."
 },
 {
  "day": 3,
  "en": "Calm down.",
  "ko": "진정해.",
  "dialog": [
   {
    "en": "Hello? We're stuck in the elevator.",
    "ko": "여보세요? 우리 엘리베이터에 갇혔어요."
   },
   {
    "en": "Please calm down. I'll send someone in a minute.",
    "ko": "진정하세요. 금방 사람 보낼게요."
   }
  ],
  "vocab": [
   {
    "en": "be stuck in (장소)",
    "ko": "~에 갇히다, 고립되다"
   },
   {
    "en": "send (사람)",
    "ko": "~을 보내다"
   }
  ],
  "tip": "당황하거나 흥분한 사람에게 진정하라고 할 때 사용하는 표현으로, 직역하면 '차분히 가라앉혀.'라는 뜻입니다. 유사한 의미로 Relax., Take it easy., Hold your horses.와 같이 말할 수 있습니다."
 },
 {
  "day": 4,
  "en": "I'm starving.",
  "ko": "배고파 죽겠어.",
  "dialog": [
   {
    "en": "I'm starving. Let's grab a bite.",
    "ko": "배고파 죽겠다. 뭐 좀 먹으러 가자."
   },
   {
    "en": "I'm way too tired to eat.",
    "ko": "너무 피곤해서 먹을 힘도 없어."
   }
  ],
  "vocab": [
   {
    "en": "grab a bite (to eat)",
    "ko": "간단히 요기하다"
   },
   {
    "en": "way too (형용사) to (동사원형)",
    "ko": "너무 ~해서 …하지 못하다"
   }
  ],
  "tip": "배가 많이 고플 때 사용하는 표현으로, 직역하면 '굶주리고 있어.'입니다. 같은 의미로 I'm starving to death. 또는 I'm hungry to death.라고 표현할 수도 있습니다. '너무 배고파서 뭐든 먹을 수 있을 것 같아.'는 I could eat a horse.라고 합니다."
 },
 {
  "day": 5,
  "en": "What's wrong?",
  "ko": "왜 그래?",
  "dialog": [
   {
    "en": "You look down today. What's wrong?",
    "ko": "오늘 우울해 보인다. 뭔 일 있어?"
   },
   {
    "en": "My mother was hospitalized yesterday.",
    "ko": "어제 어머니가 입원하셨거든."
   }
  ],
  "vocab": [
   {
    "en": "look down",
    "ko": "우울해 보이다"
   },
   {
    "en": "be hospitalized",
    "ko": "병원에 입원하다"
   }
  ],
  "tip": "상대방이 평소와 달라 보여서 무슨 일이 있냐고 물어볼 때 사용하는 표현으로, 직역하면 '뭐가 잘못됐어?'입니다. 같은 의미로 What's the matter?, What's eating you?, What's bugging you?와 같이 말할 수 있습니다."
 },
 {
  "day": 6,
  "en": "Slow down.",
  "ko": "천천히 해.",
  "dialog": [
   {
    "en": "Slow down. You're driving too fast.",
    "ko": "천천히 가. 너 운전을 너무 빠르게 한다."
   },
   {
    "en": "We have to hurry to make it by seven.",
    "ko": "7시까지 도착하려면 서둘러야 해."
   }
  ],
  "vocab": [
   {
    "en": "hurry",
    "ko": "서두르다"
   },
   {
    "en": "make it",
    "ko": "도착하다"
   }
  ],
  "tip": "서두르는 사람에게 차분하게 하라고 말할 때 사용하는 표현입니다. 일의 진행 속도, 남녀관계의 진도, 자동차의 속도 등 여러 상황에서 표현할 수 있습니다. 빨리 하라고 재촉할 때 쓰는 표현으로는 Hurry up., Make it quick., Get moving. 등이 있습니다."
 },
 {
  "day": 7,
  "en": "I'm flattered.",
  "ko": "과찬이세요.",
  "dialog": [
   {
    "en": "You're the most beautiful woman ever.",
    "ko": "당신은 내가 본 여자 중에 가장 아름다워요."
   },
   {
    "en": "I'm flattered. You make me blush.",
    "ko": "과찬이세요. 부끄럽네요."
   }
  ],
  "vocab": [
   {
    "en": "the (최상급 명사) ever",
    "ko": "지금까지 가장 ~한 사람(물건)"
   },
   {
    "en": "blush",
    "ko": "(부끄러워) 얼굴이 빨개지다"
   }
  ],
  "tip": "상대방이 칭찬을 하면 쑥스러워 하며 겸손하게 대답할 때 사용하는 표현입니다. 직역하면 '아첨을 받았다.'인데, '몸 둘 바를 모르겠다.'라는 뜻입니다. That's very flattering.이라고 해도 됩니다."
 },
 {
  "day": 8,
  "en": "It's pathetic.",
  "ko": "한심하군.",
  "dialog": [
   {
    "en": "I can't work up the courage to do it.",
    "ko": "그걸 할 수 있는 용기가 나지 않아."
   },
   {
    "en": "Don't be such a baby. It's pathetic.",
    "ko": "엄살 좀 떨지 마. 한심하군."
   }
  ],
  "vocab": [
   {
    "en": "work up the courage",
    "ko": "용기를 내다"
   },
   {
    "en": "be such a baby",
    "ko": "엄살떨다, 애처럼 굴다"
   },
   {
    "en": "pathetic",
    "ko": "불쌍한, 한심한"
   }
  ],
  "tip": "상대방의 말이나 행동에 대해 한심하다고 말할 때 사용하는 표현입니다. You're pathetic.이라고도 합니다. 엄살 부리는 사람에게 '징징대지 마.', '바보같이 굴지 마.'라고 말할 때는 Stop whining., Don't be silly.와 같이 말할 수 있습니다."
 },
 {
  "day": 9,
  "en": "I'm impressed.",
  "ko": "정말 대단해.",
  "dialog": [
   {
    "en": "Your English is very good. I'm impressed.",
    "ko": "영어 정말 잘하는데. 정말 대단해."
   },
   {
    "en": "Thanks, but I still have a long way to go.",
    "ko": "고마워. 하지만 아직 갈 길이 멀어."
   }
  ],
  "vocab": [
   {
    "en": "be impressed",
    "ko": "감명을 받다, 인상 깊다"
   },
   {
    "en": "have a long way to go",
    "ko": "갈 길이 아직 멀다"
   }
  ],
  "tip": "어떤 것에 대해 매우 깊은 인상이나 감동을 받았을 때 사용하는 표현입니다. 감동받았다고 말할 때는 I was touched., It's very touching., I was moved., It was very moving.과 같이 말할 수 있습니다."
 },
 {
  "day": 10,
  "en": "Don't bother.",
  "ko": "됐거든.",
  "dialog": [
   {
    "en": "I'm sorry if I hurt your feelings.",
    "ko": "마음 상하게 했다면 미안해."
   },
   {
    "en": "Don't bother. It's too late.",
    "ko": "됐거든. 너무 늦었어."
   }
  ],
  "vocab": [
   {
    "en": "hurt one's feeling",
    "ko": "~의 마음을 상하게 하다"
   },
   {
    "en": "Don't bother.",
    "ko": "됐거든., 굳이 안 해도 돼."
   }
  ],
  "tip": "이미 마음이 상했는데 상대방이 뒤늦게 사과나 보상을 제안할 때 거절하는 표현으로, 직역하면 '일부러 수고하지 마.'입니다. '굳이 기다릴 거 없어.'는 Don't bother to wait for me., '굳이 거기 갈 필요 없어.'는 Don't bother to go there.와 같이 말합니다."
 },
 {
  "day": 11,
  "en": "Think positive.",
  "ko": "긍정적으로 생각해.",
  "dialog": [
   {
    "en": "I failed to pass the test. I think I should give up.",
    "ko": "시험에 떨어졌어. 그냥 포기해야 할까 봐."
   },
   {
    "en": "Don't say that. Think positive.",
    "ko": "그런 소리 하지 마. 긍정적으로 생각해."
   }
  ],
  "vocab": [
   {
    "en": "pass the test",
    "ko": "시험에 통과하다"
   },
   {
    "en": "give up",
    "ko": "포기하다"
   }
  ],
  "tip": "의기소침한 사람에게 긍정적으로 생각하라고 격려를 할 때 사용하는 표현입니다. 같은 의미로 Be positive., Stay positive., Look on the bright side.와 같이 말할 수 있습니다. 참고로 '크게 생각해.'는 Think big.이라고 말합니다."
 },
 {
  "day": 12,
  "en": "I overreacted.",
  "ko": "내가 과민반응 했어.",
  "dialog": [
   {
    "en": "Unbelievable! How could you say that?",
    "ko": "믿을 수 없어. 어떻게 그런 말을 할 수 있어?"
   },
   {
    "en": "Sorry, I think I overreacted.",
    "ko": "미안해. 내가 과민반응 했나 봐."
   }
  ],
  "vocab": [
   {
    "en": "unbelievable",
    "ko": "믿기 어려운"
   },
   {
    "en": "I think I (주어) (과거동사)",
    "ko": "내가 ~했나 봐"
   }
  ],
  "tip": "자신이 너무 예민하게 반응을 했다고 말하며 사과할 때 사용하는 표현으로, 직역하면 '내가 너무 과하게 행동했어.'입니다. 비슷한 의미로 I've gone too far. 또는 I got carried away.와 같이 말할 수 있습니다."
 },
 {
  "day": 13,
  "en": "Suit yourself.",
  "ko": "좋을 대로 해.",
  "dialog": [
   {
    "en": "I want to bring a coat. It'll get chilly tonight.",
    "ko": "난 코트 가져갈래. 저녁엔 쌀쌀해질 거야."
   },
   {
    "en": "Suit yourself, but I don't need one.",
    "ko": "알아서 해. 난 필요 없어."
   }
  ],
  "vocab": [
   {
    "en": "bring",
    "ko": "(사물) ~을 가져오다(가다)"
   },
   {
    "en": "get chilly",
    "ko": "쌀쌀해지다"
   }
  ],
  "tip": "상대방이 의견을 물어볼 때 편할 대로 하라고 하는 표현으로, 직역하면 '너한테 맞춰.'입니다. 같은 의미로 It's up to you., Have it your way., Do as you like.와 같이 말할 수 있습니다."
 },
 {
  "day": 14,
  "en": "Are you sure?",
  "ko": "정말이야?",
  "dialog": [
   {
    "en": "I can't believe it. Are you sure?",
    "ko": "믿을 수가 없어. 정말이야?"
   },
   {
    "en": "Absolutely. I'm 100% positive.",
    "ko": "그래. 100퍼센트 확실해."
   }
  ],
  "vocab": [
   {
    "en": "Absolutely.",
    "ko": "물론이지."
   },
   {
    "en": "positive",
    "ko": "확실한, 긍정적인"
   }
  ],
  "tip": "상대방이 한 말에 대해 의구심이 들거나 믿지 못하겠다고 말할 때 사용하는 표현으로, 직역하면 '확실해요?'입니다. 같은 의미로 Really?, Are you serious?, No kidding.과 같이 말할 수도 있습니다."
 },
 {
  "day": 15,
  "en": "I don't care.",
  "ko": "난 상관없어.",
  "dialog": [
   {
    "en": "What do you want to have?",
    "ko": "뭐 먹고 싶니?"
   },
   {
    "en": "I don't care. It's up to you.",
    "ko": "난 상관없어. 네가 결정해."
   }
  ],
  "vocab": [
   {
    "en": "don't care",
    "ko": "상관없다"
   },
   {
    "en": "be up to (사람)",
    "ko": "(결정 등이) ~에게 달려 있다"
   }
  ],
  "tip": "상대방이 의견을 물었을 때 어느 쪽이든 상관없다고 답하는 표현으로, 직역하면 '신경 쓰지 않아.'입니다. 같은 의미로 That's fine with me., It doesn't matter., Whatever.와 같이 말할 수도 있습니다."
 },
 {
  "day": 16,
  "en": "I'd love to.",
  "ko": "그러고 싶어.",
  "dialog": [
   {
    "en": "We're going to the movies. Want to join us?",
    "ko": "우리 영화 보러 갈 건데. 같이 갈래?"
   },
   {
    "en": "I'd love to. Thanks a lot.",
    "ko": "그러고 싶어. 정말 고마워."
   }
  ],
  "vocab": [
   {
    "en": "go to the movies",
    "ko": "영화 보러 가다"
   },
   {
    "en": "join (사람)",
    "ko": "~와 함께하다, 동참하다"
   }
  ],
  "tip": "상대방 제안에 찬성할 때 사용하는 표현입니다. 원래 표현은 I'd love to join you.지만 동사를 반복하지 않기 위해 to 뒤의 동사 이하는 생략할 수 있습니다. 거절할 경우는 I'd love to, but I can't.라고 하면 됩니다."
 },
 {
  "day": 17,
  "en": "I gotta go.",
  "ko": "이만 끊을게.",
  "dialog": [
   {
    "en": "I can't talk for long. I gotta go.",
    "ko": "통화 오래 못해. 이만 끊을게."
   },
   {
    "en": "So you're not available now? I'll call you back later then.",
    "ko": "지금 전화 받기 곤란하구나. 다시 연락할게."
   }
  ],
  "vocab": [
   {
    "en": "talk for long",
    "ko": "오래 통화하다"
   },
   {
    "en": "available",
    "ko": "시간을 낼 수 있는, 이용할 수 있는"
   }
  ],
  "tip": "상대방과 전화를 하다가 이제 그만 끊어야 할 때 사용하는 표현으로, 직역하면 '이제 가야 해.'입니다. 같은 의미로 I have to go., I have to get off the line.과 같이 말할 수 있습니다."
 },
 {
  "day": 18,
  "en": "I had no idea.",
  "ko": "전혀 몰랐어.",
  "dialog": [
   {
    "en": "Did you know he would come to the party?",
    "ko": "그가 파티에 올 거라는 걸 알았어?"
   },
   {
    "en": "I had no idea. He's a party pooper.",
    "ko": "전혀 몰랐어. 분위기 깨는 녀석이잖아."
   }
  ],
  "vocab": [
   {
    "en": "come to the party",
    "ko": "파티에 가다"
   },
   {
    "en": "party pooper",
    "ko": "흥을 깨는 사람"
   }
  ],
  "tip": "어떤 내용에 대해 전혀 모른다고 말할 때 사용하는 표현입니다. 같은 뜻으로 I don't have a clue., Beats me., That's news to me.처럼 말할 수도 있습니다. 확신이 없이 '내가 알기로는 아니야.'는 Not that I know of.라고 합니다."
 },
 {
  "day": 19,
  "en": "Here you go.",
  "ko": "여기 있어요.",
  "dialog": [
   {
    "en": "Can you get me some water, please?",
    "ko": "물 좀 갖다 주실래요?"
   },
   {
    "en": "Sure. Here you go.",
    "ko": "물론이죠. 여기 있어요."
   }
  ],
  "vocab": [
   {
    "en": "get (사람) (사물)",
    "ko": "~에게 …을 갖다 주다"
   },
   {
    "en": "Sure.",
    "ko": "물론이죠."
   }
  ],
  "tip": "상대에게 물건을 건네주면서 '여기 있어요.'라고 말할 때 쓰는 표현으로, Here you are., Here it is.라고 말해도 됩니다. Here we go again. 또는 There you go again.은 '또 시작이군.'이라는 뜻으로, 상대방의 말이나 행동에 대해 짜증을 내는 표현입니다."
 },
 {
  "day": 20,
  "en": "",
  "ko": "",
  "dialog": [],
  "vocab": [],
  "tip": ""
 },
 {
  "day": 21,
  "en": "",
  "ko": "",
  "dialog": [],
  "vocab": [],
  "tip": ""
 },
 {
  "day": 22,
  "en": "I'm so screwed.",
  "ko": "완전 망했어.",
  "dialog": [
   {
    "en": "You got caught cheating by your teacher.",
    "ko": "너 부정행위 하다가 선생님한테 걸렸다면서."
   },
   {
    "en": "I'm so screwed. I can't get away with it this time.",
    "ko": "완전 망했어. 이번에는 빠져나가지 못할 거야."
   }
  ],
  "vocab": [
   {
    "en": "get caught -ing",
    "ko": "~하다가 들키다, 걸리다"
   },
   {
    "en": "get away with (사물)",
    "ko": "잘못을 하고도 빠져나가다"
   }
  ],
  "tip": "어떤 일이 잘 되지 않았을 때 낙심하면서 사용하는 표현으로, 직역하면 '난 완전 꼬였어.'입니다. '난 이제 죽었다.'는 I'm dead meat.이라고 하고, '망쳐 버렸어.'는 I screwed up., I messed up., I blew it.과 같이 말할 수 있습니다."
 },
 {
  "day": 23,
  "en": "Good for you.",
  "ko": "잘했어.",
  "dialog": [
   {
    "en": "Mom, I got an A+ in math.",
    "ko": "엄마, 수학 점수 A+ 받았어요."
   },
   {
    "en": "Good for you! Let's have a party.",
    "ko": "잘했어! 우리 파티 하자."
   }
  ],
  "vocab": [
   {
    "en": "get an A+ in (과목)",
    "ko": "~에서 A+ 학점을 받다"
   },
   {
    "en": "have a party",
    "ko": "파티를 하다"
   }
  ],
  "tip": "상대방이 이룬 업적에 대해서 잘했다고 격려를 할 때 사용하는 표현입니다. 직역하면 '너에게 좋은 일이구나.'입니다. 같은 의미로 Way to go!, Good job!, Nice going!과 같이 말할 수도 있습니다."
 },
 {
  "day": 24,
  "en": "I'll go first.",
  "ko": "내가 먼저 할게.",
  "dialog": [
   {
    "en": "Who wants to answer this question?",
    "ko": "이 질문에 누가 대답해 볼래요?"
   },
   {
    "en": "I'll go first. It's a breeze.",
    "ko": "제가 먼저 할게요. 엄청 쉬워요."
   }
  ],
  "vocab": [
   {
    "en": "answer the question",
    "ko": "질문에 대답하다"
   },
   {
    "en": "a breeze",
    "ko": "쉬운 일, 식은 죽 먹기"
   }
  ],
  "tip": "여러 사람들 중에서 어떤 행동을 먼저 하겠다는 의사를 밝힐 때 쓰는 표현으로, 직역하면 '내가 먼저 갈게요.'입니다. 반대로 양보를 할 때는 '먼저 하세요.'라는 뜻으로 Go ahead. 또는 After you.와 같이 말할 수 있습니다."
 },
 {
  "day": 25,
  "en": "Don't rush me.",
  "ko": "재촉하지 마.",
  "dialog": [
   {
    "en": "Could you hurry up, please?",
    "ko": "좀 서둘러 줄래?"
   },
   {
    "en": "Don't rush me. I need to take my time.",
    "ko": "재촉하지 마. 천천히 해야 해."
   }
  ],
  "vocab": [
   {
    "en": "rush",
    "ko": "돌진하다, 서두르다"
   },
   {
    "en": "take one's time",
    "ko": "천천히 하다"
   }
  ],
  "tip": "서둘러 달라고 반복적으로 다그치는 사람에게 짜증낼 때 사용하는 표현으로, 직역하면 '나에게 돌진하지 마.'입니다. 유사한 의미로 Don't push me., Stop pushing me.와 같이 말할 수 있습니다."
 },
 {
  "day": 26,
  "en": "That's too bad.",
  "ko": "안됐구나.",
  "dialog": [
   {
    "en": "My computer is not working properly.",
    "ko": "내 컴퓨터가 제대로 작동을 안 해."
   },
   {
    "en": "That's too bad. Let me see if I can fix it.",
    "ko": "안됐구나. 내가 고칠 수 있는지 볼게."
   }
  ],
  "vocab": [
   {
    "en": "work properly",
    "ko": "제대로 작동하다"
   },
   {
    "en": "Let me see if I can (동사원형)",
    "ko": "~할 수 있는지 한번 볼게"
   }
  ],
  "tip": "상대방에게 좋지 않은 소식을 듣고 안타까운 마음을 나타낼 때 사용하는 표현입니다. 유사한 의미로 I'm sorry to hear that., That's a shame., What a pity.와 같이 말할 수 있습니다."
 },
 {
  "day": 27,
  "en": "You got me.",
  "ko": "딱 걸렸네.",
  "dialog": [
   {
    "en": "In my opinion, you're a gold digger.",
    "ko": "내 생각엔 넌 돈만 밝히는 것 같아."
   },
   {
    "en": "You got me. Money changes everything.",
    "ko": "딱 걸렸네. 돈으로 안 될 게 없지."
   }
  ],
  "vocab": [
   {
    "en": "gold digger",
    "ko": "돈만 밝히는 사람"
   },
   {
    "en": "Money changes everything.",
    "ko": "돈이면 다 된다."
   }
  ],
  "tip": "누구에게 거짓말이나 못된 행동을 하다가 걸렸을 때 사용하는 표현입니다. 같은 의미로 You're so busted., You're cold busted.와 같이 말할 수도 있습니다. '나도 잘 모르겠어.' (=I don't know, either.)라는 의미로도 사용됩니다."
 },
 {
  "day": 28,
  "en": "You name it.",
  "ko": "말만 해.",
  "dialog": [
   {
    "en": "Daddy, today is my birthday.",
    "ko": "아빠, 오늘이 제 생일이에요."
   },
   {
    "en": "What do you want? A toy? A doll? You name it.",
    "ko": "뭐 갖고 싶니? 장난감? 인형? 말만 해."
   }
  ],
  "vocab": [
   {
    "en": "daddy",
    "ko": "아빠 (↔ mommy)"
   },
   {
    "en": "What do you want?",
    "ko": "뭐 갖고(먹고) 싶니?"
   }
  ],
  "tip": "원하는 것을 얘기만 하면 뭐든 들어주겠다고 말할 때 사용하는 표현으로, 직역하면 '이름만 대 봐.'입니다. 여기서 name은 동사로 쓰였습니다. 같은 의미로 Whatever you say., I'm at your service anytime.과 같이 말해도 됩니다."
 },
 {
  "day": 29,
  "en": "Look who's here.",
  "ko": "이게 누구야.",
  "dialog": [
   {
    "en": "Look who's here! It's a small world.",
    "ko": "이게 누구야! 세상 참 좁다."
   },
   {
    "en": "Yeah. I haven't seen you in years.",
    "ko": "그러게. 정말 오랜만이야."
   }
  ],
  "vocab": [
   {
    "en": "It's a small world.",
    "ko": "세상 좁다."
   },
   {
    "en": "haven't seen (사람) in years",
    "ko": "~를 본 지 오래되었다, 오랜만이다"
   }
  ],
  "tip": "어떤 장소에서 우연히 예상하지 못한 사람을 만나게 되어 놀라움과 반가움을 나타내는 표현으로, 직역하면 '누가 왔는지 보세요.'입니다. 같은 뜻으로 What a surprise!, Fancy meeting you here.처럼 말할 수도 있습니다."
 },
 {
  "day": 30,
  "en": "What about this?",
  "ko": "이건 어때?",
  "dialog": [
   {
    "en": "You don't like it? What about this?",
    "ko": "맘에 안 들어요? 이건 어때요?"
   },
   {
    "en": "You should wear a dress, if you ask me.",
    "ko": "내 생각엔 드레스 입는 게 좋겠어요."
   }
  ],
  "vocab": [
   {
    "en": "should (동사원형)",
    "ko": "~하는 게 좋겠다"
   },
   {
    "en": "If you ask me.",
    "ko": "내 생각에는."
   }
  ],
  "tip": "상대방에게 어떤 것을 제안하면서 의견을 물어볼 때 사용하는 표현입니다. 같은 의미로 How about this?, How do you feel about it?와 같이 말할 수 있고 '바로 그거야.'라고 할 때는 Exactly., That's it., You said it.처럼 말하면 됩니다."
 },
 {
  "day": 31,
  "en": "Need some help?",
  "ko": "좀 도와줄까?",
  "dialog": [
   {
    "en": "Can you do it by yourself? Need some help?",
    "ko": "혼자 할 수 있겠어? 좀 도와줄까?"
   },
   {
    "en": "No, I can manage. Thanks.",
    "ko": "아니, 내가 처리할 수 있어. 고마워."
   }
  ],
  "vocab": [
   {
    "en": "by oneself",
    "ko": "스스로"
   },
   {
    "en": "manage",
    "ko": "그럭저럭 해내다"
   }
  ],
  "tip": "친한 사람끼리 대화할 때 의문문에서 Do you를 생략하는 경우가 많습니다. 예를 들어 친구에게 '담배 한 대 피워도 돼?'라고 묻는다면 (Do you) Mind if I smoke?라고 하고, '커피에 설탕 넣을래?'는 (Do you) Care for sugar in your coffee?와 같이 말합니다."
 },
 {
  "day": 32,
  "en": "Don't remind me.",
  "ko": "그만 얘기해.",
  "dialog": [
   {
    "en": "We're out of time. Make it quick.",
    "ko": "시간이 없어. 빨리 해."
   },
   {
    "en": "I know. Don't remind me.",
    "ko": "나도 알아. 그만 얘기해."
   }
  ],
  "vocab": [
   {
    "en": "be out of time",
    "ko": "시간이 없다"
   },
   {
    "en": "remind (사람)",
    "ko": "~에게 생각나게 하다"
   }
  ],
  "tip": "떠올리고 싶지 않은 일에 대해서 상대방이 자꾸 말을 걸어올 때 방어적으로 하는 표현입니다. 문득 어떤 생각이 떠올라서 '그러고 보니 오늘이 월급날이네.'라고 할 때는 That reminds me, today is my payday.라고 하면 됩니다."
 },
 {
  "day": 33,
  "en": "Let's face it.",
  "ko": "현실을 인정해.",
  "dialog": [
   {
    "en": "I can't believe she dumped me.",
    "ko": "그녀가 날 찼다니 믿을 수가 없어."
   },
   {
    "en": "Let's face it. There are a lot of fish in the sea.",
    "ko": "현실을 인정해. 세상에 여자는 많아."
   }
  ],
  "vocab": [
   {
    "en": "dump (사람)",
    "ko": "~를 차다, 버리다"
   },
   {
    "en": "fish",
    "ko": "사람(남자, 여자)"
   }
  ],
  "tip": "어쩔 수 없는 현실을 인정하고 받아들이자고 말할 때 사용하는 표현으로, 직역하면 '현실과 부딪혀.'입니다. Let's face the reality., Let's face the fact., Let's face the truth.와 같이 말할 수도 있습니다."
 },
 {
  "day": 34,
  "en": "Just act normal.",
  "ko": "평소처럼 해.",
  "dialog": [
   {
    "en": "He's gonna know you're behind this.",
    "ko": "그는 네가 시킨 걸 알게 될 거야."
   },
   {
    "en": "That'll be the day. Just act normal.",
    "ko": "그럴 리가 없어. 평소처럼 해."
   }
  ],
  "vocab": [
   {
    "en": "be behind (사람)",
    "ko": "배후에 ~가 있다"
   },
   {
    "en": "That'll be the day.",
    "ko": "그럴 리가 없다., 해가 서쪽에서 뜨다."
   }
  ],
  "tip": "소개팅을 하거나 면접 등을 준비하며 긴장하고 있는 사람에게 사용하는 표현으로, 직역하면 '평범하게 행동해.'입니다. 같은 뜻으로 Act normally., Just be yourself.처럼 말할 수도 있습니다."
 },
 {
  "day": 35,
  "en": "Care to dance?",
  "ko": "우리 춤출까?",
  "dialog": [
   {
    "en": "I'm bored to death. Care to dance?",
    "ko": "지루해 죽겠어. 우리 춤출까?"
   },
   {
    "en": "No, thanks. I'm not good at dancing.",
    "ko": "아니, 괜찮아. 춤을 잘 못 춰."
   }
  ],
  "vocab": [
   {
    "en": "be bored to death",
    "ko": "지루해 죽겠다"
   },
   {
    "en": "be good at (명사/동명사)",
    "ko": "~을 잘하다"
   }
  ],
  "tip": "상대방에게 뭔가 하고 싶은 생각이 있는지 의향을 물어볼 때 사용하는 표현입니다. 원래는 Would you care to (동사원형)? 또는 Do you care to (동사원형)?인데, 종종 조동사와 주어를 생략하고 사용합니다."
 },
 {
  "day": 36,
  "en": "Don't be silly.",
  "ko": "바보같이 굴지 마.",
  "dialog": [
   {
    "en": "I called you twice. Are you avoiding me?",
    "ko": "두 번이나 전화했어. 날 피하는 거야?"
   },
   {
    "en": "Don't be silly. Why would I do that?",
    "ko": "바보 같은 소리 마. 내가 왜 그러겠어?"
   }
  ],
  "vocab": [
   {
    "en": "avoid (사람/사물)",
    "ko": "~를 피하다"
   },
   {
    "en": "silly",
    "ko": "바보 같은, 어이없는"
   }
  ],
  "tip": "상대방이 터무니없는 얘기를 할 때 그만하라고 농담조로 말하는 표현입니다. '말도 안 돼.'라고 할 때는 That's ridiculous., Are you kidding?이라고 하고, '멍청하게 굴지 마.'는 Don't be stupid.와 같이 말합니다."
 },
 {
  "day": 37,
  "en": "Watch your step.",
  "ko": "발밑 조심해.",
  "dialog": [
   {
    "en": "It's dark in here. Watch your step.",
    "ko": "여기 어두워. 발밑 조심해."
   },
   {
    "en": "Thanks for the heads-up.",
    "ko": "미리 알려 줘서 고마워."
   }
  ],
  "vocab": [
   {
    "en": "watch",
    "ko": "(사물) ~을 조심하다"
   },
   {
    "en": "heads-up",
    "ko": "경고, 주의"
   }
  ],
  "tip": "어두운 곳을 지나가면서 발을 헛딛지 않도록 조심하라고 말할 때 사용하는 표현입니다. 여기서 watch는 '조심하다'라는 뜻인데요, '말조심해.'는 Watch your language., '등 뒤를 조심해.'는 Watch your back.처럼 말할 수 있습니다."
 },
 {
  "day": 38,
  "en": "What's the point?",
  "ko": "그게 무슨 소용 있어?",
  "dialog": [
   {
    "en": "Who are you gonna vote for?",
    "ko": "누구에게 투표할 거야?"
   },
   {
    "en": "I'm not sure. What's the point?",
    "ko": "잘 모르겠어. 그게 뭐가 중요해?"
   }
  ],
  "vocab": [
   {
    "en": "vote for",
    "ko": "(사람) ~에게 투표하다"
   },
   {
    "en": "I'm not sure.",
    "ko": "확신이 없다., 잘 모르겠다."
   }
  ],
  "tip": "시도해 봐야 별 소용이 없다며 자포자기하는 말을 할 때 쓰는 표현입니다. 원래 표현은 What's the point of (명사/동명사)?지만 상대가 앞에서 내용을 얘기했으므로 of 이하를 생략하고 간단히 What's the point?라고 하면 됩니다."
 },
 {
  "day": 39,
  "en": "How did it go?",
  "ko": "어떻게 됐어?",
  "dialog": [
   {
    "en": "I heard you dated her. How did it go?",
    "ko": "그녀와 데이트했다면서. 어떻게 됐어?"
   },
   {
    "en": "It was terrific. I want to meet her again.",
    "ko": "끝내줬지. 다시 만나고 싶어."
   }
  ],
  "vocab": [
   {
    "en": "date",
    "ko": "(사람) ~와 데이트하다"
   },
   {
    "en": "terrific",
    "ko": "굉장한, 대단한"
   }
  ],
  "tip": "어떤 일의 결과에 대해 물어볼 때 사용하는 표현입니다. 동사 go는 '어떤 일이 진행된다'는 의미가 있습니다. 따라서 '~이 어떻게 됐어?'와 같이 물어볼 때 자주 사용되는데요, '시험 어땠어?'는 How did your test go?처럼 말할 수 있습니다."
 },
 {
  "day": 40,
  "en": "I can't help it.",
  "ko": "어쩔 수 없어.",
  "dialog": [
   {
    "en": "You don't know how to cook?",
    "ko": "요리할 줄 모른다고?"
   },
   {
    "en": "I'm sorry, but I always mess up when I try. I can't help it.",
    "ko": "미안한데, 뭘 시도할 때마다 망쳐 버려어. 어쩔 수 없잖아."
   }
  ],
  "vocab": [
   {
    "en": "how to",
    "ko": "(동사원형) ~하는 방법"
   },
   {
    "en": "I'm sorry, but",
    "ko": "(주어) (동사) 미안하지만 ~하다"
   }
  ],
  "tip": "어떤 상황에서 별다른 대안이 없을 때 사용하는 표현으로, 직역하면 '도움이 되질 못하다.'입니다. 같은 의미로 I can't help myself., There's nothing I can do.라고 말할 수 있습니다."
 },
 {
  "day": 41,
  "en": "Glad you like it.",
  "ko": "맘에 드니 다행이야.",
  "dialog": [
   {
    "en": "Thank you for the present. I love it.",
    "ko": "선물 고마워. 너무 좋아."
   },
   {
    "en": "I knew it. Glad you like it.",
    "ko": "그럴 줄 알았어. 마음에 든다니 다행이야."
   }
  ],
  "vocab": [
   {
    "en": "present",
    "ko": "선물"
   },
   {
    "en": "love",
    "ko": "(사물) ~을 좋아하다"
   }
  ],
  "tip": "상대방이 기뻐하는 모습을 보고 기분이 좋다고 말을 할 때 사용하는 표현입니다. 원래는 I'm glad (주어) (동사) 형태인데, 여기서 I'm은 종종 생략됩니다. 초대한 손님에게 '와 줘서 기뻐요.'라고 말하려면 Glad you came over.라고 하면 됩니다."
 },
 {
  "day": 42,
  "en": "",
  "ko": "",
  "dialog": [],
  "vocab": [],
  "tip": ""
 },
 {
  "day": 43,
  "en": "",
  "ko": "",
  "dialog": [],
  "vocab": [],
  "tip": ""
 },
 {
  "day": 44,
  "en": "You're a natural.",
  "ko": "타고났구나.",
  "dialog": [
   {
    "en": "You're such a good cook. You're a natural.",
    "ko": "넌 정말 훌륭한 요리사야. 타고났어."
   },
   {
    "en": "Thanks, but I'm not cut out for it.",
    "ko": "고마워. 하지만 적성에 안 맞아."
   }
  ],
  "vocab": [
   {
    "en": "such a",
    "ko": "(형용사) (명사) 대단히 ~한 (사람/사물)"
   },
   {
    "en": "a natural",
    "ko": "타고난 사람"
   },
   {
    "en": "be cut out for",
    "ko": "(명사) ~에 적합하다, 적성에 맞다"
   }
  ],
  "tip": "상대방이 어떤 기술에 탁월한 소질이 있을 때 칭찬으로 사용하는 표현입니다. '넌 타고난 가수야.'는 You're a born singer., You're a natural born singer., You're a singer by nature.와 같이 말할 수 있습니다."
 },
 {
  "day": 45,
  "en": "You're very sweet.",
  "ko": "정말 친절하시네요.",
  "dialog": [
   {
    "en": "Thanks for seeing me off. You're very sweet.",
    "ko": "배웅해 줘서 고마워요. 정말 친절하시군요."
   },
   {
    "en": "That's okay. Don't mention it.",
    "ko": "괜찮아요. 별거 아니에요."
   }
  ],
  "vocab": [
   {
    "en": "see off",
    "ko": "(사람) ~를 배웅해 주다"
   },
   {
    "en": "Don't mention it.",
    "ko": "별말씀을., 천만에요."
   }
  ],
  "tip": "상대방의 친절과 호의에 대해 감동을 받았을 때 사용하는 표현으로, 직역하면 '정말 달콤하시네요.'입니다. 같은 의미로 You're very kind., How nice of you.와 같이 말할 수도 있습니다."
 },
 {
  "day": 46,
  "en": "Please put it on.",
  "ko": "착용해 주세요.",
  "dialog": [
   {
    "en": "Should I wear a safety belt?",
    "ko": "안전벨트를 매야 하나요?"
   },
   {
    "en": "Of course. Please put it on.",
    "ko": "물론이죠. 착용해 주세요."
   }
  ],
  "vocab": [
   {
    "en": "wear a safety belt",
    "ko": "안전벨트를 매다"
   },
   {
    "en": "put on",
    "ko": "(사물) ~을 입다, 착용하다"
   }
  ],
  "tip": "무엇을 몸에 걸치거나 착용하라고 할 때 사용하는 표현입니다. 예를 들어 '바지 좀 입어.'는 Put your pants on.이라고 합니다. 참고로 안전벨트를 매라고 할 때는 Fasten your seat belt.나 Buckle up.과 같이 말합니다."
 },
 {
  "day": 47,
  "en": "I'm sorry I'm late.",
  "ko": "늦어서 미안.",
  "dialog": [
   {
    "en": "I'm sorry I'm late. The traffic was heavy.",
    "ko": "늦어서 미안해. 차가 너무 막혔어."
   },
   {
    "en": "That's OK. You should leave a little earlier from next time.",
    "ko": "괜찮아. 다음부터는 조금 일찍 나오면 되겠다."
   }
  ],
  "vocab": [
   {
    "en": "I'm sorry",
    "ko": "(주어) (동사) ~해서 미안해"
   },
   {
    "en": "The traffic is heavy.",
    "ko": "차가 막히다."
   }
  ],
  "tip": "약속 시간에 늦어서 미안하다고 할 때 사용하는 표현입니다. 기본형인 Sorry I'm late.에 이유를 나타내는 전치사 for를 추가하여 I'm sorry for being late., I'm sorry for the delay.와 같이 말할 수도 있습니다."
 },
 {
  "day": 48,
  "en": "We're almost there.",
  "ko": "거의 다 왔어.",
  "dialog": [
   {
    "en": "I'm so beat. How much farther should we go?",
    "ko": "정말 지쳤어. 얼마나 더 가야돼?"
   },
   {
    "en": "We're almost there. Just hang in there.",
    "ko": "거의 다 왔어. 조금만 참아."
   }
  ],
  "vocab": [
   {
    "en": "beat",
    "ko": "매우 피곤한 (=exhausted)"
   },
   {
    "en": "hang in there",
    "ko": "참고 견디다"
   }
  ],
  "tip": "등산이나 장거리 여행 중에 힘들어 하는 사람에게 목적지에 거의 도착했다고 말할 때 사용하는 표현으로, We are nearly there.라고 해도 됩니다. '절반 정도 왔어.'는 We are halfway there.라고 말할 수 있습니다."
 },
 {
  "day": 49,
  "en": "These things happen.",
  "ko": "그럴 수도 있지.",
  "dialog": [
   {
    "en": "I'm so sorry. I dropped your cell phone.",
    "ko": "정말 미안해. 네 전화기를 떨어뜨렸어."
   },
   {
    "en": "No problem. These things happen.",
    "ko": "괜찮아. 그럴 수도 있지."
   }
  ],
  "vocab": [
   {
    "en": "drop",
    "ko": "(사물) ~을 떨어뜨리다"
   },
   {
    "en": "No problem.",
    "ko": "괜찮다., 별거 아니다."
   }
  ],
  "tip": "어떤 일에 대해 대수롭지 않게 받아넘길 때 사용하는 표현입니다. 직역하면 '이런 일들은 일어나기 마련이지.'입니다. It happens all the time. 또는 It happens.처럼 간단히 말할 수도 있습니다."
 },
 {
  "day": 50,
  "en": "Put these away.",
  "ko": "이것들 좀 치워.",
  "dialog": [
   {
    "en": "I'm so distracted by your toys. Put these away.",
    "ko": "장난감 때문에 정신이 산만해. 좀 치워라."
   },
   {
    "en": "OK, I'm coming. I'll clean up my room.",
    "ko": "네, 알았어요. 방청소 할게요."
   }
  ],
  "vocab": [
   {
    "en": "be distracted by",
    "ko": "(사물) ~ 때문에 정신이 산만하다"
   },
   {
    "en": "clean up",
    "ko": "청소하다, 정리하다"
   }
  ],
  "tip": "상대방에게 어떤 물건을 치우라고 말할 때 사용하는 표현입니다. put away의 또 다른 의미로는 '돈을 모으다', '저축하다'가 있습니다. We're putting away some money.라고 쓰면 '우린 돈을 좀 모으고 있어.'라는 뜻이 됩니다."
 },
 {
  "day": 51,
  "en": "You move fast.",
  "ko": "진도 빠르네.",
  "dialog": [
   {
    "en": "I made out with her last night.",
    "ko": "어젯밤에 그녀와 진한 스킨십을 했어."
   },
   {
    "en": "You move fast. Are you two going out?",
    "ko": "진도 빠르네. 너희 두 사람 사귀는거야?"
   }
  ],
  "vocab": [
   {
    "en": "make out",
    "ko": "(키스 등) 진하게 애정표현을 하다"
   },
   {
    "en": "go out with",
    "ko": "(사람) ~와 사귀다"
   }
  ],
  "tip": "남녀가 서로 친밀해지는 속도가 빠를 때 사용하는 표현입니다. 너무 빨리 진도를 나가지 말라고 할 때는 Don't get serious with her.라고 말합니다. 이성을 쉽게 유혹하는 사람을 fast worker 또는 smooth operator라고 합니다."
 },
 {
  "day": 52,
  "en": "You'll be sorry.",
  "ko": "후회할 거야.",
  "dialog": [
   {
    "en": "If you don't listen to me, you'll be sorry.",
    "ko": "내 말 안 들으면 후회하게 될 거야."
   },
   {
    "en": "Who are you to lecture me?",
    "ko": "네가 뭔데 나한테 잔소리야?"
   }
  ],
  "vocab": [
   {
    "en": "listen to",
    "ko": "(사람) ~의 말을 듣다"
   },
   {
    "en": "Who are you to",
    "ko": "(동사원형) 네가 뭔데 ~하는 거야?"
   },
   {
    "en": "lecture",
    "ko": "설교하다, 잔소리하다"
   }
  ],
  "tip": "상대방에게 시키는 대로 하지 않으면 후회하게 될 거라고 말할 때 쓰는 표현입니다. 과거의 행동에 대해 후회할 거라고 말할 때 You'll be sorry (주어) (과거동사)의 형태를 씁니다. '공부 열심히 안 한 거 후회하게 될 거야.'는 You'll be sorry you didn't study hard.처럼 말할 수 있습니다."
 },
 {
  "day": 53,
  "en": "You shouldn't have.",
  "ko": "뭐 이런 걸 다.",
  "dialog": [
   {
    "en": "I got you something from Jeju Island.",
    "ko": "제주도에서 뭐 좀 사 왔어."
   },
   {
    "en": "You bought me a gift? You shouldn't have.",
    "ko": "선물 사 왔다고? 뭐 이런 걸 다."
   }
  ],
  "vocab": [
   {
    "en": "get",
    "ko": "(사람) (사물) ~에게 …을 사 주다, 갖다 주다"
   },
   {
    "en": "gift",
    "ko": "선물"
   }
  ],
  "tip": "누군가로부터 뜻밖의 선물을 받았을 때 '그럴 필요 없는데', '안 그래도 되는데'라는 의미로 말할 때 사용하는 표현입니다. should have p.p.는 '~했어야 했다'라는 뜻인데, 부정어가 들어가 '이러지 않으셨어도 되는데.'라는 뜻이 된 것입니다."
 },
 {
  "day": 54,
  "en": "It's an emergency.",
  "ko": "급한 일이야.",
  "dialog": [
   {
    "en": "It's an emergency. Call the police.",
    "ko": "급한 일이에요. 경찰을 불러 주세요."
   },
   {
    "en": "Relax. What's going on?",
    "ko": "진정하세요. 무슨 일이죠?"
   }
  ],
  "vocab": [
   {
    "en": "emergency",
    "ko": "비상사태, 응급상황"
   },
   {
    "en": "go on",
    "ko": "(어떤 일이) 진행되다"
   }
  ],
  "tip": "긴급한 일이 발생했을 때 사용하는 표현입니다. 같은 의미로 It's urgent., This is an emergency., Something urgent came up.처럼 말할 수도 있습니다. '집에 급한 일이 생겼어요.'는 I have a family emergency.와 같이 말합니다."
 },
 {
  "day": 55,
  "en": "Are you finished?",
  "ko": "끝냈어?",
  "dialog": [
   {
    "en": "Are you finished with the report?",
    "ko": "보고서 다 끝냈어?"
   },
   {
    "en": "Not yet. I can get it done by tomorrow.",
    "ko": "아직. 내일까지 끝낼 수 있을 것 같아."
   }
  ],
  "vocab": [
   {
    "en": "Not yet.",
    "ko": "아직(~하지 않았어)."
   },
   {
    "en": "get",
    "ko": "(사물) done ~을 끝낸다"
   }
  ],
  "tip": "하고 있던 일을 끝내거나 음식을 다 먹었는지 물어볼 때 사용하는 표현으로, Are you done?이라고 말해도 됩니다. '술 끊었어.'는 I'm done with drinking., '그 사람이랑 헤어졌어.'라고 할 때도 I'm done with him.과 같이 말하면 됩니다."
 },
 {
  "day": 56,
  "en": "Hold on a sec.",
  "ko": "잠시만 기다려.",
  "dialog": [
   {
    "en": "Check, please! How much is it?",
    "ko": "계산해 주세요! 얼마예요?"
   },
   {
    "en": "Hold on a sec. This one is on me.",
    "ko": "잠시만 기다려. 이건 내가 낼게."
   }
  ],
  "vocab": [
   {
    "en": "Check, please!",
    "ko": "계산서 주세요!"
   },
   {
    "en": "(물건) is on",
    "ko": "(사람) 물건 값을 ~가 내다"
   }
  ],
  "tip": "상대방에게 잠시만 기다려 달라고 말할 때 사용하는 표현으로, 직역하면 '1초만 잡고 있어 줘.'입니다. 구어체에서는 자주 second를 줄여서 sec이라고 표현합니다. 같은 의미로 Hold on., Hold on a minute., Wait a moment.와 같이 말할 수 있습니다."
 },
 {
  "day": 57,
  "en": "Let's take a break.",
  "ko": "잠시만 쉬자.",
  "dialog": [
   {
    "en": "I'm exhausted. Let's take a break.",
    "ko": "난 정말 지쳤어. 잠시만 쉬자."
   },
   {
    "en": "Come on! The peak is just right there.",
    "ko": "힘 내! 정상이 바로 저기야."
   }
  ],
  "vocab": [
   {
    "en": "exhausted",
    "ko": "녹초가 된, 몹시 피곤한"
   },
   {
    "en": "peak",
    "ko": "정상, 봉우리"
   }
  ],
  "tip": "어떤 활동 중에 잠시만 쉬자고 제안할 때 사용하는 표현입니다. 점심시간은 lunch break, 커피 마시는 시간은 coffee break라고 하죠. '커피 한 잔 하며 휴식 합시다.'는 Let's break for coffee. 또는 Let's have a coffee break.라고 말할 수 있습니다."
 },
 {
  "day": 58,
  "en": "What brings you here?",
  "ko": "여긴 어쩐 일이야?",
  "dialog": [
   {
    "en": "What brings you here? Do you live around here?",
    "ko": "여긴 어쩐 일이세요? 근처에 사세요?"
   },
   {
    "en": "I was in the neighborhood and dropped by.",
    "ko": "근처에 볼일이 있어 왔다가 들렀어요."
   }
  ],
  "vocab": [
   {
    "en": "around here",
    "ko": "이 근처에"
   },
   {
    "en": "be in the neighborhood",
    "ko": "근처에 오다"
   }
  ],
  "tip": "어떤 장소에서 아는 사람을 만났을 때 무슨 일로 왔냐고 묻는 표현으로, 직역하면 '무엇이 당신을 여기 데려왔나요?'입니다. bring의 과거형을 사용해서 What brought you here? 또는 What are you doing here?와 같이 말할 수도 있습니다."
 },
 {
  "day": 59,
  "en": "What do you think?",
  "ko": "어떻게 생각해?",
  "dialog": [
   {
    "en": "This is my idea. What do you think?",
    "ko": "내 아이디어야. 어떻게 생각해?"
   },
   {
    "en": "Sounds good to me. You're a genius.",
    "ko": "좋은 생각인데. 넌 천재야."
   }
  ],
  "vocab": [
   {
    "en": "sounds good",
    "ko": "좋은 생각이야"
   },
   {
    "en": "genius",
    "ko": "천재"
   }
  ],
  "tip": "본인의 생각을 말하고 나서 상대방의 의견을 물어볼 때 사용하는 표현입니다. 우리말 그대로 직역해서 How do you think?라고 말하지 않도록 주의해야 합니다. 같은 뜻으로 What do you say?, What's your opinion?이라고 해도 됩니다."
 },
 {
  "day": 60,
  "en": "I don't think so.",
  "ko": "난 다르게 생각해.",
  "dialog": [
   {
    "en": "I think he is a reliable person.",
    "ko": "그 사람은 믿을 만한 사람인 것 같아."
   },
   {
    "en": "I don't think so. He's two-faced.",
    "ko": "난 다르게 생각해. 그는 이중적이야."
   }
  ],
  "vocab": [
   {
    "en": "reliable",
    "ko": "믿을 만한, 신뢰할 만한"
   },
   {
    "en": "two-faced",
    "ko": "두 얼굴의, 위선적인"
   }
  ],
  "tip": "상대방의 의견에 동의하지 않고 생각이 다를 때 사용하는 표현입니다. 유사한 의미의 문장으로 I don't agree with you., I'm not sure., No way. 등이 있습니다. 반대로 찬성할 때는 I agree., I'm with you., You're right.처럼 말하면 됩니다."
 },
 {
  "day": 61,
  "en": "I'll go get the car.",
  "ko": "차 가져올게.",
  "dialog": [
   {
    "en": "I hear your wife went into labor.",
    "ko": "당신 부인이 진통을 시작했대요."
   },
   {
    "en": "OK. I'll go get the car.",
    "ko": "알았어요. 차 가져올게요."
   }
  ],
  "vocab": [
   {
    "en": "go into labor",
    "ko": "산기가 있다"
   },
   {
    "en": "go get (사물)",
    "ko": "가서 ~을 가져오다"
   }
  ],
  "tip": "go get은 무엇을 가져오겠다고 할 때 사용하는 표현입니다. 원래는 go and get (동사원형)의 형태인데 편의상 and를 생략하고 사용합니다. I'll go get (사물)의 형태로 쓰는데, 사물의 자리에는 chair, beer, I.D. card 등이 올 수 있습니다."
 },
 {
  "day": 62,
  "en": "Don't get me wrong.",
  "ko": "오해하지 마.",
  "dialog": [
   {
    "en": "Are you saying that I'm fat?",
    "ko": "내가 뚱뚱하다고 말하는 거야?"
   },
   {
    "en": "Don't get me wrong. I didn't mean it like that.",
    "ko": "오해하지 마. 그런 뜻이 아니었어."
   }
  ],
  "vocab": [
   {
    "en": "Are you saying that (주어) (동사)?",
    "ko": "~라고 말하는 거야?"
   },
   {
    "en": "didn't mean it",
    "ko": "진심이 아니었다"
   }
  ],
  "tip": "상대방에게 자신이 한 말에 대해 오해하지 말라고 말할 때 사용하는 표현입니다. 유사한 의미의 문장으로 You got me wrong., Don't take this the wrong way., That was a misunderstanding. 등이 있습니다."
 },
 {
  "day": 63,
  "en": "I turned it off.",
  "ko": "전화기 꺼 놨었어.",
  "dialog": [
   {
    "en": "Why didn't you answer your cell phone?",
    "ko": "왜 휴대폰 안 받았어?"
   },
   {
    "en": "I turned it off. My battery was really low.",
    "ko": "꺼 놨었어. 배터리가 거의 없어서."
   }
  ],
  "vocab": [
   {
    "en": "answer the cell phone",
    "ko": "휴대폰을 받다"
   },
   {
    "en": "battery is low",
    "ko": "배터리가 얼마 없다"
   }
  ],
  "tip": "전기용품, 수도밸브, 전자기기 등을 끈다고 할 때 사용합니다. 'TV 좀 꺼 주세요.'는 Please turn off the TV.라고 합니다. 참고로 turn down은 '소리를 줄이다'라는 뜻으로, Please turn down the TV.라고 하면 'TV 소리 좀 줄여 주세요.'라는 뜻이 됩니다."
 },
 {
  "day": 64,
  "en": "",
  "ko": "",
  "dialog": [],
  "vocab": [],
  "tip": ""
 },
 {
  "day": 65,
  "en": "",
  "ko": "",
  "dialog": [],
  "vocab": [],
  "tip": ""
 },
 {
  "day": 66,
  "en": "Why are you up?",
  "ko": "안 자고 뭐 해?",
  "dialog": [
   {
    "en": "Why are you up at this hour?",
    "ko": "이 시간에 안 자고 뭐 해?"
   },
   {
    "en": "I'm working on my paper. It's due tomorrow.",
    "ko": "리포트 쓰고 있어. 내일까지거든."
   }
  ],
  "vocab": [
   {
    "en": "at this hour",
    "ko": "이 시간에"
   },
   {
    "en": "(사물) is due (시점)",
    "ko": "~의 기한이 …까지이다"
   }
  ],
  "tip": "상대방이 늦은 시간까지 잠자리에 들지 않고 깨어 있을 때 하는 말이죠. be up은 '자지 않고 일어나 있다'는 뜻입니다. What are you doing still up?과 What are you doing up so late? 등의 문장도 같은 뜻입니다."
 },
 {
  "day": 67,
  "en": "I beg your pardon?",
  "ko": "뭐라고 하셨죠?",
  "dialog": [
   {
    "en": "You can't quit. You're fired!",
    "ko": "네가 그만두는 게 아니야. 넌 해고야!"
   },
   {
    "en": "I beg your pardon? I can't catch you.",
    "ko": "뭐라고 하셨죠? 이해가 안 되는데요."
   }
  ],
  "vocab": [
   {
    "en": "be fired",
    "ko": "해고되다"
   },
   {
    "en": "I can't catch you.",
    "ko": "이해를 못 했어요."
   }
  ],
  "tip": "상대방의 말을 잘 못 알아들었을 때 다시 말해 달라고 요청하는 표현입니다. 일반적으로 I'm sorry?, Excuse me?, Pardon me?라고 하고, 좀 더 격식을 갖출 때만 I beg your pardon?이라고 합니다."
 },
 {
  "day": 68,
  "en": "Is she still online?",
  "ko": "아직 접속 중이야?",
  "dialog": [
   {
    "en": "The screen is frozen. Is she still online?",
    "ko": "화면이 멈췄어. 그녀는 아직 접속 중이야?"
   },
   {
    "en": "I'm not sure. Use your smartphone to check it.",
    "ko": "잘 모르겠어. 스마트폰으로 확인해 봐."
   }
  ],
  "vocab": [
   {
    "en": "The screen is frozen.",
    "ko": "(컴퓨터 등의) 화면이 멈추다."
   },
   {
    "en": "use (사물) to check it",
    "ko": "~을 이용해 확인하다"
   }
  ],
  "tip": "상대방이 컴퓨터나 메신저 등에 접속하고 있는지 물어볼 때 사용하는 표현입니다. online은 형용사나 부사로 사용이 되는데요, '이거 인터넷에서 샀어.'는 I got this online., 그리고 '온라인 게임 좋아해?'는 Do you like to play online games?와 같이 말할 수 있습니다."
 },
 {
  "day": 69,
  "en": "It pisses me off.",
  "ko": "열 받게 하네.",
  "dialog": [
   {
    "en": "Why are you taking it out on him?",
    "ko": "왜 걔한테 화풀이하는 거야?"
   },
   {
    "en": "It pisses me off when he talks back to me.",
    "ko": "걔가 나한테 말대꾸할 때 열 받잖아."
   }
  ],
  "vocab": [
   {
    "en": "take it out on (사람)",
    "ko": "~에게 화풀이하다"
   },
   {
    "en": "talk back to (사람)",
    "ko": "~에게 말대꾸하다"
   }
  ],
  "tip": "누군가를 극도로 화나게 해서 열 받을 때 사용하는 표현입니다. annoy, bug, irritate 등의 '짜증나다'보다 강하게 표현할 때 쓰입니다. '나 완전 열 받았어.'는 I'm so pissed off.라고 말하면 됩니다. 같은 뜻의 문장으로 It burns me up., I'm fired up. 등이 있습니다."
 },
 {
  "day": 70,
  "en": "I think I'll pass.",
  "ko": "사양할게요.",
  "dialog": [
   {
    "en": "We're having a year-end party. Want to come?",
    "ko": "우리 송년회 하려고 하는데. 같이 갈래?"
   },
   {
    "en": "I think I'll pass. I have too much work to do.",
    "ko": "난 사양할게. 할 일이 너무 많아."
   }
  ],
  "vocab": [
   {
    "en": "year-end party",
    "ko": "송년회, 망년회"
   },
   {
    "en": "Want to (동사원형)?",
    "ko": "~할래?"
   }
  ],
  "tip": "어떤 모임에 참석을 권유 받거나 음식을 먹으라고 할 때 정중히 사양하는 표현으로, 직역하면 '난 지나갈 생각이야.'입니다. 같은 뜻의 문장으로 No, thank you., No, thanks., No, that's OK. 등이 있습니다."
 },
 {
  "day": 71,
  "en": "I hope this works.",
  "ko": "효과가 있으면 좋겠어.",
  "dialog": [
   {
    "en": "She's in a bad mood for some reason.",
    "ko": "뭐 때문인지 그녀가 기분이 안 좋아."
   },
   {
    "en": "I got a bunch of flowers. I hope this works.",
    "ko": "그녈 위해 꽃다발을 샀어. 효과가 있으면 좋겠어."
   }
  ],
  "vocab": [
   {
    "en": "be in a bad mood",
    "ko": "기분이 안 좋다"
   },
   {
    "en": "for some reason",
    "ko": "무슨 이유인지"
   }
  ],
  "tip": "어떤 조치를 취하고 나서 긍정적인 효과를 기대할 때 사용하는 표현입니다. '효과가 있을 거야.'라는 뜻으로, It'll be effective., It should do the trick.과 같이 말해도 같은 의미입니다. '약이 정말 잘 들어.'라고 할 때는 The medicine works instantly.와 같이 말할 수 있습니다."
 },
 {
  "day": 72,
  "en": "I owe you a beer.",
  "ko": "너한테 맥주 빚졌어.",
  "dialog": [
   {
    "en": "Let me pay for this. What's the total?",
    "ko": "이건 내가 계산할게. 전부 얼마죠?"
   },
   {
    "en": "Thanks. I owe you a beer.",
    "ko": "고마워. 맥주 한 번 빚졌네."
   }
  ],
  "vocab": [
   {
    "en": "pay for (사물)",
    "ko": "~를 계산하다, 지불하다"
   },
   {
    "en": "What's the total?",
    "ko": "전부 얼마예요?"
   }
  ],
  "tip": "누구에게 돈을 빌리거나 술을 얻어먹고 신세를 지게 되었을 때 사용하는 표현입니다. '너한테 신세졌어.'는 I owe you one., '너한테 술 한 잔 빚졌다.'라고 할 때는 I owe you a drink., '내가 얼마 줘야 하니?'는 What do I owe you?라고 하면 됩니다."
 },
 {
  "day": 73,
  "en": "That's good to hear.",
  "ko": "다행이네요.",
  "dialog": [
   {
    "en": "He is coming around quite well.",
    "ko": "그는 잘 회복하고 있어요."
   },
   {
    "en": "That's good to hear. Is it OK to visit him?",
    "ko": "다행이네요. 병문안 가도 되나요?"
   }
  ],
  "vocab": [
   {
    "en": "come around",
    "ko": "회복하다"
   },
   {
    "en": "Is it OK to (동사원형)?",
    "ko": "~해도 되나요?"
   }
  ],
  "tip": "상대방에게 좋은 소식을 듣거나 마음이 놓이는 이야기를 듣고 안도할 때 사용하는 표현으로, 직역하면 '소식을 듣게 되어 다행이야.'입니다. 같은 의미로 I'm glad to hear that., Happy to hear that., That's good news.와 같이 말할 수도 있습니다."
 },
 {
  "day": 74,
  "en": "Don't fall for it.",
  "ko": "속지 마.",
  "dialog": [
   {
    "en": "He's the total package. Handsome and intelligent.",
    "ko": "그는 완벽남이야. 잘생겼고 똑똑해."
   },
   {
    "en": "Don't fall for it. He could be a playboy.",
    "ko": "속지 마. 바람둥이일 수도 있어."
   }
  ],
  "vocab": [
   {
    "en": "the total package",
    "ko": "모든 걸 갖춘 사람"
   },
   {
    "en": "playboy",
    "ko": "바람둥이 (=womanizer)"
   }
  ],
  "tip": "다른 사람에게 속아 넘어가지 말라고 주의를 줄 때 사용하는 표현입니다. fall for는 '~에게 속다' 또는 '~에게 반하다'라는 뜻이 있습니다. '난 그 말에 속지 않을 거야.'는 I'm not falling for that., '그녀에게 첫눈에 반했어.'는 I fell for her at first sight.와 같이 말할 수 있습니다."
 },
 {
  "day": 75,
  "en": "It didn't work out.",
  "ko": "잘 안 됐어.",
  "dialog": [
   {
    "en": "How was your blind date last week?",
    "ko": "지난주 소개팅 어떻게 됐어?"
   },
   {
    "en": "It didn't work out. He's not my type.",
    "ko": "잘 안 됐어. 그는 내 취향이 아니야."
   }
  ],
  "vocab": [
   {
    "en": "blind date",
    "ko": "소개팅"
   },
   {
    "en": "one's type",
    "ko": "~의 타입, 취향"
   }
  ],
  "tip": "어떤 일의 결과가 원하는 대로 나오지 않았을 때 사용하는 표현입니다. 잘 되고 있다고 말할 때는 It's going pretty well.과 같이 표현하며, 일이 잘 끝났을 경우 It came out well.이나 It turned out well.처럼 말할 수 있습니다."
 },
 {
  "day": 76,
  "en": "Just hear me out.",
  "ko": "끝까지 들어 봐.",
  "dialog": [
   {
    "en": "You are too much. How could you dump her?",
    "ko": "너무한다. 어떻게 그녀를 차 버릴 수 있어?"
   },
   {
    "en": "Just hear me out. She turned me down.",
    "ko": "내 말 끝까지 들어. 그녀가 거절했어."
   }
  ],
  "vocab": [
   {
    "en": "You are too much.",
    "ko": "너무하다."
   },
   {
    "en": "turn (사람) down",
    "ko": "~를 거절하다"
   }
  ],
  "tip": "대화를 하는 도중에 오해가 있을 경우 이야기를 끝까지 들어 달라고 말할 때 사용하는 표현입니다. 여기서 부사 out은 '끝까지', '남김없이'라는 의미를 담고 있습니다. Listen to me.나 Let me tell you something.이라고 해도 비슷한 의미입니다."
 },
 {
  "day": 77,
  "en": "I feel really awful.",
  "ko": "기분이 엉망이야.",
  "dialog": [
   {
    "en": "Don't be upset by what I said.",
    "ko": "내가 한 말 때문에 속상해 하지 마."
   },
   {
    "en": "Do you mind? I feel really awful.",
    "ko": "그만 좀 할래? 기분이 정말 엉망이야."
   }
  ],
  "vocab": [
   {
    "en": "be upset",
    "ko": "속상하다, 화나다"
   },
   {
    "en": "Do you mind?",
    "ko": "(짜증내며) 그만 좀 할래?"
   }
  ],
  "tip": "상대방의 말이나 행동에 대해 속상하거나 기분이 좋지 않을 때 사용하는 표현입니다. '기분이 좋지 않다.'는 뜻으로 I feel bad., I'm not happy about that., I'm in a bad mood.라고 할 수도 있습니다."
 },
 {
  "day": 78,
  "en": "It's driving me crazy.",
  "ko": "정말 미치겠어.",
  "dialog": [
   {
    "en": "I can't take the smoke over there.",
    "ko": "저쪽에 담배 연기 정말 못 참겠어."
   },
   {
    "en": "Exactly. It's driving me crazy.",
    "ko": "맞아. 정말 미치겠어."
   }
  ],
  "vocab": [
   {
    "en": "can't take (사물)",
    "ko": "~을 참지 못하다"
   },
   {
    "en": "Exactly.",
    "ko": "맞아., 정말 그래."
   }
  ],
  "tip": "어떤 것 때문에 스트레스를 받아서 미칠 것 같다고 말할 때 사용하는 표현입니다. '너 때문에 미치겠어.'는 You are driving me crazy., '스팸전화 때문에 미치겠어.'는 Spam calls are driving me crazy., '그녀가 바가지 긁어서 미치겠어.'는 Her constant nagging drives me crazy.라고 표현합니다."
 },
 {
  "day": 79,
  "en": "Long time no see.",
  "ko": "오랜만이야.",
  "dialog": [
   {
    "en": "Long time no see. How are you doing?",
    "ko": "오랜만이야. 어떻게 지내?"
   },
   {
    "en": "I'm doing great. Time sure flies.",
    "ko": "잘 지내지. 세월 참 빠르다."
   }
  ],
  "vocab": [
   {
    "en": "be doing great",
    "ko": "잘 지내다"
   },
   {
    "en": "Time flies.",
    "ko": "시간이 빨리 간다."
   }
  ],
  "tip": "오랜만에 만난 상대에게 반가움의 인사를 할 때 사용하는 표현입니다. 직역하면 '오랫동안 보지 못했다.'입니다. It's been ages., It's been a long time., I haven't seen you in ages. 등도 같은 뜻을 가진 문장입니다."
 },
 {
  "day": 80,
  "en": "It's not worth it.",
  "ko": "그럴 가치도 없어.",
  "dialog": [
   {
    "en": "She stood me up again yesterday.",
    "ko": "어제 그녀에게 또 바람 맞았어."
   },
   {
    "en": "Don't wait for her. It's not worth it.",
    "ko": "기다리지 마. 그럴 가치도 없어."
   }
  ],
  "vocab": [
   {
    "en": "stand (사람) up",
    "ko": "~를 바람맞히다"
   },
   {
    "en": "be worth (명사/동명사)",
    "ko": "~할 가치가 있다"
   }
  ],
  "tip": "어떤 일에 대해 금전적인 면이나 노력에 대한 가치를 말할 때 사용하는 표현입니다. '해 볼 만한 가치가 있다.'는 It's worth a try., '노력을 들일 가치가 있다.'는 It's worth the effort., '고생할 가치가 있다.'는 It's worth the trouble.처럼 표현할 수 있습니다."
 },
 {
  "day": 81,
  "en": "I don't feel like it.",
  "ko": "그럴 기분이 아니야.",
  "dialog": [
   {
    "en": "Why don't you have a beer tonight?",
    "ko": "오늘 저녁에 맥주 한잔 할래?"
   },
   {
    "en": "Thanks, but I don't feel like it.",
    "ko": "고마운데. 그럴 기분이 아니야."
   }
  ],
  "vocab": [
   {
    "en": "Why don't you (동사원형)?",
    "ko": "~하는 게 어때?"
   },
   {
    "en": "feel like (명사/동명사)",
    "ko": "~하고 싶은 기분이다"
   }
  ],
  "tip": "상대방의 제안에 대해 기분이 내키지 않는다고 완곡히 거절할 때 사용하는 표현으로, 직역하면 '그런 느낌이 아니야.'입니다. 동의어로 I'm not in the mood.가 있습니다."
 },
 {
  "day": 82,
  "en": "You are a lifesaver.",
  "ko": "덕분에 살았어.",
  "dialog": [
   {
    "en": "I really appreciate it. You are a lifesaver.",
    "ko": "정말 감사합니다. 절 살려 주셨어요."
   },
   {
    "en": "No sweat. I've been there myself.",
    "ko": "괜찮아요. 저도 그런 적 있었거든요."
   }
  ],
  "vocab": [
   {
    "en": "No sweat.",
    "ko": "괜찮다., 별거 아니다."
   },
   {
    "en": "I've been there myself.",
    "ko": "나도 그런 적 있다."
   }
  ],
  "tip": "어려운 상황에서 누군가의 도움으로 위기를 벗어났을 때 사용하는 표현입니다. 직역하면 '넌 생명의 은인이야.'입니다. 같은 뜻으로 You are an angel., You saved my life.와 같이 말할 수도 있습니다."
 },
 {
  "day": 83,
  "en": "Mind if I come in?",
  "ko": "들어가도 돼요?",
  "dialog": [
   {
    "en": "Sorry to interrupt. Mind if I come in?",
    "ko": "방해해서 미안해요. 들어가도 돼요?"
   },
   {
    "en": "Not at all. Please enter.",
    "ko": "그럼요. 어서 들어오세요."
   }
  ],
  "vocab": [
   {
    "en": "interrupt",
    "ko": "방해하다, 끼어들다"
   },
   {
    "en": "enter",
    "ko": "입장하다"
   }
  ],
  "tip": "상대방에게 어떤 행동을 해도 되는지 허락을 구할 때 사용하는 표현입니다. 원래 문장은 Do you mind if (주어) (동사)?인데, Do you를 생략하고 Mind if (주어) (동사)?의 형태로 자주 사용됩니다. '담배를 피워도 되나요?'는 Mind if I smoke?, '친구 데려가도 돼요?'는 Mind if I bring a friend?라고 표현하면 됩니다."
 },
 {
  "day": 84,
  "en": "I've gotta take off.",
  "ko": "그만 가 볼게.",
  "dialog": [
   {
    "en": "I stayed too long. I've gotta take off.",
    "ko": "너무 늦었어요. 그만 가 볼게요."
   },
   {
    "en": "Thank you. We had a fabulous time.",
    "ko": "고마워요. 좋은 시간이었어요."
   }
  ],
  "vocab": [
   {
    "en": "stay too long",
    "ko": "너무 오래 머무르다"
   },
   {
    "en": "have a fabulous time",
    "ko": "멋진 시간을 보내다"
   }
  ],
  "tip": "상대방과 대화를 마치고 헤어질 때 사용하는 표현으로, 직역하면 '떠나야 해.'입니다. '이제 가 봐야겠다.'라는 뜻으로 I'd better go now., I think I have to go.와 같이 말할 수도 있습니다."
 },
 {
  "day": 85,
  "en": "What did I tell you?",
  "ko": "내가 뭐랬어?",
  "dialog": [
   {
    "en": "I think I'm gaining weight. I need to work out.",
    "ko": "나 살찌고 있는 것 같아. 운동 좀 해야겠어."
   },
   {
    "en": "What did I tell you? Don't eat between meals.",
    "ko": "내가 뭐랬어? 간식 먹지 마."
   }
  ],
  "vocab": [
   {
    "en": "gain weight",
    "ko": "체중이 늘다"
   },
   {
    "en": "work out",
    "ko": "운동하다"
   }
  ],
  "tip": "자신의 충고대로 하지 않아 좋지 않은 결과를 얻은 상대를 힐책하며 사용하는 표현입니다. 유사한 의미로 '내가 몇 번이나 말했어?'는 How many times have I told you?와 같이 말할 수 있습니다."
 },
 {
  "day": 86,
  "en": "",
  "ko": "",
  "dialog": [],
  "vocab": [],
  "tip": ""
 },
 {
  "day": 87,
  "en": "",
  "ko": "",
  "dialog": [],
  "vocab": [],
  "tip": ""
 },
 {
  "day": 88,
  "en": "It makes me sick.",
  "ko": "지긋지긋해.",
  "dialog": [
   {
    "en": "I'm fed up with instant food.",
    "ko": "난 즉석식품에 질렸어."
   },
   {
    "en": "Me too. It makes me sick.",
    "ko": "나도. 정말 지긋지긋해."
   }
  ],
  "vocab": [
   {
    "en": "be fed up with (사람/사물)",
    "ko": "~에 진저리 나다"
   },
   {
    "en": "instant food",
    "ko": "즉석식품"
   }
  ],
  "tip": "어떤 대상이 너무 싫어서 보거나 생각만 해도 역겹다고 말할 때 사용하는 표현입니다. 지겹다는 뜻으로 I'm sick of it., I'm tired of it., I'm bored with it. 등의 표현이 있습니다."
 },
 {
  "day": 89,
  "en": "You can't be serious.",
  "ko": "농담이겠지.",
  "dialog": [
   {
    "en": "I've decided not to go to college.",
    "ko": "나 대학에 안 가기로 결정했어."
   },
   {
    "en": "You can't be serious. Are you out of your mind?",
    "ko": "농담이겠지. 너 제정신이야?"
   }
  ],
  "vocab": [
   {
    "en": "decide not to (동사원형)",
    "ko": "~ 안 하기로 결심하다"
   },
   {
    "en": "be out of one's mind",
    "ko": "제정신이 아니다"
   }
  ],
  "tip": "상대방에게 충격적인 말을 듣고 믿지 못할 때 사용하는 표현인데, 직역하면 '진심일 리 없어.'입니다. 유사한 의미의 문장으로 That's ridiculous., Are you kidding?, Give me a break. 등이 있습니다."
 },
 {
  "day": 90,
  "en": "You seem very nice.",
  "ko": "좋은 분 같네요.",
  "dialog": [
   {
    "en": "You seem very nice. You must be popular.",
    "ko": "좋은 분 같네요. 인기 많으시겠어요."
   },
   {
    "en": "Thanks. I think you have a good heart.",
    "ko": "고마워요. 당신은 착한 것 같아요."
   }
  ],
  "vocab": [
   {
    "en": "must be (형용사)",
    "ko": "~임에 틀림없다"
   },
   {
    "en": "have a good heart",
    "ko": "마음이 착하다"
   }
  ],
  "tip": "상대방에게 호감을 느끼며 성격이 좋다고 말할 때 사용하는 표현입니다. seem 다음에 형용사가 오면 '~인 것 같다', '~인 것처럼 보이다'의 뜻이 됩니다. '너 피곤해 보여.'는 You seem tired., '너 바빠 보여.'는 You seem busy.라고 합니다."
 },
 {
  "day": 91,
  "en": "I feel sorry for her.",
  "ko": "그녀가 안됐어.",
  "dialog": [
   {
    "en": "Julie's mom passed away yesterday.",
    "ko": "줄리 엄마가 어제 돌아가셨어."
   },
   {
    "en": "I'm sorry to hear that. I feel sorry for her.",
    "ko": "정말 유감이야. 그녀가 안됐어."
   }
  ],
  "vocab": [
   {
    "en": "pass away",
    "ko": "사망하다, 돌아가시다"
   },
   {
    "en": "sorry to hear (사물)",
    "ko": "~을 듣게 되어 유감이다"
   }
  ],
  "tip": "누군가에게 딱한 일이 생겨서 애처로움을 나타낼 때 사용하는 표현으로, 직역하면 '그녀를 불쌍하게 느끼다.'입니다. '불쌍해'라는 의미로 Poor thing!, Poor soul!과 같이 말할 수 있습니다."
 },
 {
  "day": 92,
  "en": "We can't afford this.",
  "ko": "여력이 안 돼.",
  "dialog": [
   {
    "en": "I want to buy this house this year.",
    "ko": "올해에 이 집을 사고 싶어."
   },
   {
    "en": "I'd like to, but we can't afford this.",
    "ko": "나도 그러고 싶지만, 우린 여력이 안 돼."
   }
  ],
  "vocab": [
   {
    "en": "I'd like to, but (주어) (동사)",
    "ko": "그러고 싶지만 ~하다"
   },
   {
    "en": "can't afford (명사/to 동사원형)",
    "ko": "~할 여력이 안 되다"
   }
  ],
  "tip": "어떤 일을 할 시간적인 여유가 없거나 물건을 구입할 경제적인 형편이 되지 않을 때 사용하는 표현입니다. '휴가 갈 형편이 안 돼요.'는 I can't afford to go on vacation., '더 기다려 줄 여유가 없어요.'는 We can't afford to wait any longer.와 같이 표현할 수 있습니다."
 },
 {
  "day": 93,
  "en": "Thanks for all your help.",
  "ko": "도와줘서 고마워.",
  "dialog": [
   {
    "en": "Thanks for all your help. How can I repay you?",
    "ko": "도와줘서 정말 고마워. 어떻게 보답하지?"
   },
   {
    "en": "My pleasure. I'm glad I could help.",
    "ko": "천만에. 도움이 돼서 기뻐."
   }
  ],
  "vocab": [
   {
    "en": "My pleasure.",
    "ko": "천만에요., 내가 좋아서 한 거예요."
   },
   {
    "en": "I am glad (주어) (동사)",
    "ko": "~해서 기쁘다"
   }
  ],
  "tip": "도와준 상대에게 감사의 인사를 할 때 사용하는 표현입니다. Thank you for (사물)은 '~에 대해 감사하다'라는 뜻인데요, 줄여서 Thanks.라고 하기도 합니다. '초대해 줘서 고마워요.'는 Thanks for the invitation., '와 줘서 고마워요.'는 Thanks for coming.이라고 하면 됩니다."
 },
 {
  "day": 94,
  "en": "It's just a matter of time.",
  "ko": "시간문제일 뿐이야.",
  "dialog": [
   {
    "en": "Sorry, I'm a hunt-and-peck typist.",
    "ko": "미안해, 내가 독수리 타법이라서."
   },
   {
    "en": "No worries. It's just a matter of time before you get it.",
    "ko": "걱정 마. 익숙해지는 건 시간문제일 뿐이야."
   }
  ],
  "vocab": [
   {
    "en": "hunt-and-peck typist",
    "ko": "독수리 타법으로 치는 사람"
   },
   {
    "en": "No worries.",
    "ko": "괜찮아., 걱정 마."
   }
  ],
  "tip": "시간이 흐르면 자연스럽게 해결될 문제이므로 걱정하지 말라고 말할 때 사용하는 표현입니다. It's just a question of time., It's just a question of when.과 같이 표현할 수도 있습니다."
 },
 {
  "day": 95,
  "en": "Sorry, it took so long.",
  "ko": "오래 걸려서 미안해.",
  "dialog": [
   {
    "en": "Sorry, it took so long. You wanted to see me?",
    "ko": "오래 걸려서 미안해. 날 찾았다면서?"
   },
   {
    "en": "I'm leaving early today. I have some errands to run.",
    "ko": "오늘 일찍 퇴근할게. 볼일이 좀 있어서."
   }
  ],
  "vocab": [
   {
    "en": "leave early",
    "ko": "일찍 퇴근하다"
   },
   {
    "en": "have some errands to run",
    "ko": "볼일이 있다"
   }
  ],
  "tip": "상대방에게 오래 기다리게 해서 미안하다고 말할 때 사용하는 표현입니다. 같은 의미로 Sorry to keep you waiting., Sorry I kept you waiting.과 같이 말할 수도 있습니다."
 },
 {
  "day": 96,
  "en": "I'm not mad at you.",
  "ko": "너한테 화난 거 아니야.",
  "dialog": [
   {
    "en": "You don't have to get so upset.",
    "ko": "그렇게 화낼 필요 없잖아."
   },
   {
    "en": "Take it easy. I'm not mad at you.",
    "ko": "진정해. 너한테 화난 거 아니야."
   }
  ],
  "vocab": [
   {
    "en": "get upset",
    "ko": "화를 내다"
   },
   {
    "en": "Take it easy.",
    "ko": "진정하다."
   }
  ],
  "tip": "왜 화를 내냐고 묻는 사람에게 상대방 때문에 화난 게 아니라고 말할 때 사용하는 표현입니다. be mad at (사람)은 '~에게 화가 나다'라는 뜻입니다. '그녀에게 화났어.'는 I'm mad at her., '내 자신에게 화났어.'는 I'm mad at myself.와 같이 말할 수 있습니다."
 },
 {
  "day": 97,
  "en": "I'll have a light lunch.",
  "ko": "점심 가볍게 먹어야겠다.",
  "dialog": [
   {
    "en": "We have reservations at a buffet tonight.",
    "ko": "오늘 저녁에 뷔페 예약해 놨어."
   },
   {
    "en": "Great! I'll have a light lunch then.",
    "ko": "신난다! 그럼 점심 가볍게 먹어야겠다."
   }
  ],
  "vocab": [
   {
    "en": "have reservations at (장소)",
    "ko": "~에 예약을 해 놨다"
   },
   {
    "en": "light lunch",
    "ko": "간단한 점심"
   }
  ],
  "tip": "점심을 가볍게 먹자고 말할 때 사용하는 표현입니다. '간단히 먹다'라는 표현은 '한 입'이라는 의미의 bite를 사용하기도 합니다. 격식이 없는 사이에 '간단히 뭐 좀 먹자.'라고 할 때 Let's grab a bite.라고 말합니다."
 },
 {
  "day": 98,
  "en": "I'm really gonna miss you.",
  "ko": "많이 보고 싶을 거야.",
  "dialog": [
   {
    "en": "I'm really gonna miss you. Let's keep in touch.",
    "ko": "많이 보고 싶을 거야. 연락하며 지내."
   },
   {
    "en": "Yes, I'll. Take care of yourself.",
    "ko": "그럴게. 몸조심하고 잘 지내."
   }
  ],
  "vocab": [
   {
    "en": "keep in touch",
    "ko": "연락하며 지내다"
   },
   {
    "en": "Take care of yourself.",
    "ko": "몸조심해., 잘 지내."
   }
  ],
  "tip": "정들었던 사람과 헤어지게 되어 아쉬운 마음을 전할 때 사용하는 표현으로, 직역하면 '그리워 할 거예요.'입니다. I miss you like crazy (미치게 보고 싶어요.)라는 제목의 노래도 있습니다. 간단하게 I'll be missing you.라고 말해도 됩니다."
 },
 {
  "day": 99,
  "en": "How's the hangover?",
  "ko": "숙취는 좀 어때?",
  "dialog": [
   {
    "en": "I got hammered last night. How's the hangover?",
    "ko": "나 어제 완전히 맛이 갔어. 숙취는 좀 어때?"
   },
   {
    "en": "My head is killing me. Let's go eat hangover soup.",
    "ko": "머리가 너무 아파. 해장국 먹으러 가자."
   }
  ],
  "vocab": [
   {
    "en": "get hammered",
    "ko": "만취하다, 고주망태가 되다"
   },
   {
    "en": "hangover soup",
    "ko": "해장국"
   }
  ],
  "tip": "술을 마신 사람에게 다음 날 속은 괜찮은지 안부를 물을 때 사용하는 표현입니다. 해장술은 a hair of the dog이라고 하는데 '개에게 물린 상처에는 그 개의 털이 효과가 있다.'는 미국 속담에서 나온 표현입니다."
 },
 {
  "day": 100,
  "en": "It was an honest mistake.",
  "ko": "단순한 실수였어.",
  "dialog": [
   {
    "en": "I think you should take the blame for it.",
    "ko": "그건 네가 책임져야 한다고 생각해."
   },
   {
    "en": "I told you it was an honest mistake.",
    "ko": "단순한 실수였다고 말했잖아."
   }
  ],
  "vocab": [
   {
    "en": "take the blame for (사물)",
    "ko": "~에 대해 책임을 지다"
   },
   {
    "en": "honest mistake",
    "ko": "고의성 없는 실수, 단순한 실수"
   }
  ],
  "tip": "고의성 없는 실수를 한 사람에게 너무 심하게 비난을 할 경우 방어할 때 사용하는 표현으로, 직역하면 '그것은 정직한 실수였다.'입니다. '실수로 그랬어.'는 I did it by mistake., '우연히 그렇게 됐어.'는 I did it by chance.라고 말합니다."
 }
];
