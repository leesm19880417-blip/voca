// 기초영어 1000문장 말하기 연습 (토마토출판사) — 한글→영어 말하기 카드
// 챕터=책1·2·3. 연습(한글)+정답체크(영어)를 (unit,no)로 조인. 본 문장만(Review 제외).
const SENTENCES = [
 {
  "ch": 1,
  "title": "기초영어 1000문장 ① 말하기",
  "units": [
   {
    "u": 1,
    "title": "Unit 1 · I want to · ~하고 싶어",
    "items": [
     {
      "n": 1,
      "ko": "알고 싶어.",
      "en": "I want to know."
     },
     {
      "n": 2,
      "ko": "여기서 기다리고 싶어.",
      "en": "I want to wait here."
     },
     {
      "n": 3,
      "ko": "난 너를 내일 만나고 싶어.",
      "en": "I want to meet you tomorrow."
     },
     {
      "n": 4,
      "ko": "책 읽고 싶어.",
      "en": "I want to read a book."
     },
     {
      "n": 5,
      "ko": "TV 보고 싶어.",
      "en": "I want to watch TV."
     },
     {
      "n": 6,
      "ko": "집에 가고 싶어.",
      "en": "I want to go home."
     },
     {
      "n": 7,
      "ko": "화장실에 가고 싶어.",
      "en": "I want to go to the bathroom/toilet/restroom."
     },
     {
      "n": 8,
      "ko": "이거 하고 싶어.",
      "en": "I want to do this/it."
     },
     {
      "n": 9,
      "ko": "숙제 하고 싶어.",
      "en": "I want to do (my) homework."
     },
     {
      "n": 10,
      "ko": "엄마한테 전화하고 싶어.",
      "en": "I want to call/ring/phone (my) mom/mother."
     },
     {
      "n": 11,
      "ko": "영어 공부하고 싶어.",
      "en": "I want to study English."
     },
     {
      "n": 12,
      "ko": "영어 배우고 싶어.",
      "en": "I want to learn English."
     },
     {
      "n": 13,
      "ko": "뭔가를 먹고 싶어.",
      "en": "I want to eat something."
     },
     {
      "n": 14,
      "ko": "콜라를 마시고 싶어.",
      "en": "I want to drink (some) coke/cola/pepsi."
     },
     {
      "n": 15,
      "ko": "동생에게 물어보고 싶어.",
      "en": "I want to ask my brother/sister."
     },
     {
      "n": 16,
      "ko": "내 책을 가져오고 싶어.",
      "en": "I want to bring my book."
     },
     {
      "n": 17,
      "ko": "이거 가져가고 싶어.",
      "en": "I want to take it/this."
     },
     {
      "n": 18,
      "ko": "이거 사고 싶어.",
      "en": "I want to buy it/this."
     },
     {
      "n": 19,
      "ko": "이거 입고 싶어.",
      "en": "I want to wear it/this."
     },
     {
      "n": 20,
      "ko": "이거 해보고 싶어.",
      "en": "I want to try it/this."
     },
     {
      "n": 21,
      "ko": "이거 쓰고 싶어. (사용)",
      "en": "I want to use it/this."
     },
     {
      "n": 22,
      "ko": "그거 쓰고 싶어. (글씨)",
      "en": "I want to write it/that."
     },
     {
      "n": 23,
      "ko": "이거 가지고 싶어.",
      "en": "I want to have it/this."
     },
     {
      "n": 24,
      "ko": "이거 가지고 있고 싶어.",
      "en": "I want to keep it/this."
     },
     {
      "n": 25,
      "ko": "너의 펜 빌리고 싶어.",
      "en": "I want to borrow your pen."
     },
     {
      "n": 26,
      "ko": "널 도와주고 싶어.",
      "en": "I want to help you."
     },
     {
      "n": 27,
      "ko": "그거 찾고 싶어.",
      "en": "I want to find it/that."
     },
     {
      "n": 28,
      "ko": "그거 생각해 보고 싶어.",
      "en": "I want to think about it/that."
     },
     {
      "n": 29,
      "ko": "고맙다고 말하고 싶어요.",
      "en": "I want to say thank you/thanks."
     },
     {
      "n": 30,
      "ko": "미안하다고 말하고 싶어.",
      "en": "I want to say sorry/I'm sorry."
     },
     {
      "n": 31,
      "ko": "여기에서 일하고 싶어.",
      "en": "I want to work here."
     },
     {
      "n": 32,
      "ko": "내 친구한테 문자하고 싶어.",
      "en": "I want to text my friend."
     },
     {
      "n": 33,
      "ko": "핸드폰으로 게임하고 싶어.",
      "en": "I want to play a game on my phone."
     },
     {
      "n": 34,
      "ko": "셀카 찍고 싶어.",
      "en": "I want to take a selfie."
     },
     {
      "n": 35,
      "ko": "사진 찍고 싶어.",
      "en": "I want to take a picture/photo."
     },
     {
      "n": 36,
      "ko": "여기 저기 가고 싶어.",
      "en": "I want to go here and there."
     },
     {
      "n": 37,
      "ko": "모든 곳에 가고 싶어.",
      "en": "I want to go everywhere."
     },
     {
      "n": 38,
      "ko": "여행하고 싶어. 그리고 세계를 보고 싶어.",
      "en": "I want to travel. And I want to see the world./ I want to travel and see the world."
     },
     {
      "n": 39,
      "ko": "좋은 시간을 보내고 싶어.",
      "en": "I want to have a good time."
     },
     {
      "n": 40,
      "ko": "큰 꿈을 가지고 싶어.",
      "en": "I want to have a big dream./ I want to have big dreams."
     },
     {
      "n": 41,
      "ko": "여기 앉기 싫어.",
      "en": "I don't want to sit here."
     },
     {
      "n": 42,
      "ko": "아무 말 하고 싶지 않아.",
      "en": "I don't want to say anything."
     },
     {
      "n": 43,
      "ko": "이번 주말엔 나가고 싶지 않아.",
      "en": "I don't want to go out this weekend."
     },
     {
      "n": 44,
      "ko": "지금 나가기 싫어.",
      "en": "I don't want to go out now."
     },
     {
      "n": 45,
      "ko": "이거 여기다 놓고 싶지 않아.",
      "en": "I don't want to put it/this here."
     },
     {
      "n": 46,
      "ko": "(이거) 하기 싫어.",
      "en": "I don't want to do it/this."
     },
     {
      "n": 47,
      "ko": "아무것도 하기 싫어.",
      "en": "I don't want to do anything."
     },
     {
      "n": 48,
      "ko": "이거 버리기 싫어. 가지고 있고 싶어.",
      "en": "I don't want to throw it/this away. I want to keep it."
     },
     {
      "n": 49,
      "ko": "아무것도 먹고 싶지 않아.",
      "en": "I don't want to eat anything."
     },
     {
      "n": 50,
      "ko": "지금 결정하고 싶지 않아.",
      "en": "I don't want to decide now."
     },
     {
      "n": 51,
      "ko": "걔랑 얘기하고 싶지 않아.",
      "en": "I don't want to speak to/talk to him/her."
     },
     {
      "n": 52,
      "ko": "여기 있고 싶지 않아.",
      "en": "I don't want to stay here."
     },
     {
      "n": 53,
      "ko": "불평하고 싶지 않아.",
      "en": "I don't want to complain."
     },
     {
      "n": 54,
      "ko": "그거 기억하고 싶지 않아.",
      "en": "I don't want to remember it/that."
     },
     {
      "n": 55,
      "ko": "이거 듣기 싫어.",
      "en": "I don't want to listen to it/this."
     },
     {
      "n": 56,
      "ko": "그거 보고 싶지 않아.",
      "en": "I don't want to see(=look at) it/that."
     },
     {
      "n": 57,
      "ko": "알고 싶지 않아.",
      "en": "I don't want to know."
     },
     {
      "n": 58,
      "ko": "그거 생각하기 싫어.",
      "en": "I don't want to think about it/that."
     },
     {
      "n": 59,
      "ko": "이거 그 애한테 주기 싫어.",
      "en": "I don't want to give it/this to him. /I don't want to give him this."
     },
     {
      "n": 60,
      "ko": "내일은 일찍 일어나고 싶지 않아.",
      "en": "I don't want to get up early tomorrow."
     },
     {
      "n": 61,
      "ko": "여기 올래?",
      "en": "Do you want to come here?"
     },
     {
      "n": 62,
      "ko": "몇 시에 올래? 언제 올래?",
      "en": "What time do you want to come? When do you want to come?"
     },
     {
      "n": 63,
      "ko": "지금 갈래? 언제 갈래?",
      "en": "Do you want to go now? When do you want to go?"
     },
     {
      "n": 64,
      "ko": "어디 갈래?",
      "en": "Where do you want to go?"
     },
     {
      "n": 65,
      "ko": "뭐 할래?",
      "en": "What do you want to do?"
     },
     {
      "n": 66,
      "ko": "이거 먹을래?",
      "en": "Do you want to eat it/this?"
     },
     {
      "n": 67,
      "ko": "뭐 먹을래?",
      "en": "What do you want to eat/have?"
     },
     {
      "n": 68,
      "ko": "뭐 마실래?",
      "en": "What do you want to drink/have?"
     },
     {
      "n": 69,
      "ko": "우유 마실래?",
      "en": "Do you want to drink (some) milk?"
     },
     {
      "n": 70,
      "ko": "어느 거 살래?",
      "en": "Which one do you want to buy?"
     },
     {
      "n": 71,
      "ko": "이거 살래 아님 저거 살래?",
      "en": "Do you want to buy this or that?"
     },
     {
      "n": 72,
      "ko": "이거 먹어 볼래?",
      "en": "Do you want to try it/this?"
     },
     {
      "n": 73,
      "ko": "너도 올래?",
      "en": "Do you want to come, too?"
     },
     {
      "n": 74,
      "ko": "지금 나갈래? 언제 나갈래?",
      "en": "Do you want to go out now? When do you want to go out?"
     },
     {
      "n": 75,
      "ko": "전화 다시 할래?",
      "en": "Do you want to call me back?"
     },
     {
      "n": 76,
      "ko": "10분 있다가 전화 다시 할래?",
      "en": "Do you want to call me back in ten minutes?"
     },
     {
      "n": 77,
      "ko": "나랑 내일 저녁 먹을래?",
      "en": "Do you want to eat/have dinner with me tomorrow?"
     },
     {
      "n": 78,
      "ko": "어디서 만날래? 몇 시에 만날래?",
      "en": "Where do you want to meet? What time do you want to meet?"
     },
     {
      "n": 79,
      "ko": "뭐 볼래? 이거 볼래?",
      "en": "What do you want to see/watch? Do you want to see/watch it/this?"
     },
     {
      "n": 80,
      "ko": "내 우산 빌릴래?",
      "en": "Do you want to borrow my umbrella?"
     },
     {
      "n": 81,
      "ko": "그거 생각해 볼래?",
      "en": "Do you want to think about it/that?"
     },
     {
      "n": 82,
      "ko": "이 책 갖고 싶니?",
      "en": "Do you want to have this book?"
     },
     {
      "n": 83,
      "ko": "뭐 갖고 싶어?",
      "en": "What do you want to have?"
     },
     {
      "n": 84,
      "ko": "잠깐만 기다릴래?",
      "en": "Do you want to wait for a minute/second/moment?"
     },
     {
      "n": 85,
      "ko": "나랑 같이 갈래?",
      "en": "Do you want to go/come with me?"
     },
     {
      "n": 86,
      "ko": "뭐 말하고 싶은데?",
      "en": "What do you want to say?"
     },
     {
      "n": 87,
      "ko": "어느 거 쓸래?",
      "en": "Which one do you want to use?"
     },
     {
      "n": 88,
      "ko": "어디 앉을래?",
      "en": "Where do you want to sit?"
     },
     {
      "n": 89,
      "ko": "이거 입어볼래?",
      "en": "Do you want to try it/this on?"
     },
     {
      "n": 90,
      "ko": "이거 해볼래요?",
      "en": "Do you want to try it/this?"
     },
     {
      "n": 91,
      "ko": "나랑 셀카 찍을래?",
      "en": "Do you want to take a selfie with me?"
     },
     {
      "n": 92,
      "ko": "나중에 나한테 문자 할래?",
      "en": "Do you want to text me later?"
     },
     {
      "n": 93,
      "ko": "어디 여행하고 싶어?",
      "en": "Where do you want to travel?"
     },
     {
      "n": 94,
      "ko": "어디에서 일하고 싶어?",
      "en": "Where do you want to work?"
     },
     {
      "n": 95,
      "ko": "사진 찍고 싶어?",
      "en": "Do you want to take a picture/photo?"
     },
     {
      "n": 96,
      "ko": "어느 거 다운받고 싶어?",
      "en": "Which one do you want to download?"
     },
     {
      "n": 97,
      "ko": "어느 영화 볼래?",
      "en": "Which movie do you want to see/watch?"
     },
     {
      "n": 98,
      "ko": "이번 여름에 어디 가고 싶어?",
      "en": "Where do you want to go this summer?"
     },
     {
      "n": 99,
      "ko": "거기에 얼마나 오래 있고 싶어?",
      "en": "How long do you want to stay there?"
     },
     {
      "n": 100,
      "ko": "이거 어떻게 하고 싶어?",
      "en": "How do you want to do it/this?"
     }
    ]
   },
   {
    "u": 2,
    "title": "Unit 2 · I have to · ~해야 해",
    "items": [
     {
      "n": 1,
      "ko": "너 그거 봐야 돼.",
      "en": "You have to see it/that."
     },
     {
      "n": 2,
      "ko": "너 그 책 읽어봐야 해.",
      "en": "You have to read that/the book."
     },
     {
      "n": 3,
      "ko": "나 이거 해야 해.",
      "en": "I have to do it/this."
     },
     {
      "n": 4,
      "ko": "나 지금 집에 가야 해.",
      "en": "I have to go home now."
     },
     {
      "n": 5,
      "ko": "너 여기 4시까지 와야 해.",
      "en": "You have to come here by 4 (o'clock)."
     },
     {
      "n": 6,
      "ko": "나 지금 내 친구 데리러 가야 해.",
      "en": "I have to pick my friend up/pick up my friend now."
     },
     {
      "n": 7,
      "ko": "우리 낼 일찍 일어나야 해.",
      "en": "We have to get up early tomorrow."
     },
     {
      "n": 8,
      "ko": "나 지금 나가야 해.",
      "en": "I have to go out/leave now."
     },
     {
      "n": 9,
      "ko": "오늘은 일찍 자야 해.",
      "en": "I have to go to bed early today."
     },
     {
      "n": 10,
      "ko": "생각해 봐야겠어.",
      "en": "I have to think about it."
     },
     {
      "n": 11,
      "ko": "나 너한테 뭔가 말해야 돼.",
      "en": "I have to tell you something/say something to you."
     },
     {
      "n": 12,
      "ko": "너 그거 찾아야 해.",
      "en": "You have to find it/that."
     },
     {
      "n": 13,
      "ko": "나 안경을 써야 돼.",
      "en": "I have to wear glasses."
     },
     {
      "n": 14,
      "ko": "우리 Jim한테 먼저 물어봐야 해.",
      "en": "We have to ask Jim first."
     },
     {
      "n": 15,
      "ko": "내 친구하고 먼저 얘기해봐야 해.",
      "en": "I have to talk to/speak to my friend first."
     },
     {
      "n": 16,
      "ko": "나 책을 좀 빌려야 해.",
      "en": "I have to borrow some books/ I have to borrow a book."
     },
     {
      "n": 17,
      "ko": "나 이거 Tim한테 빌려줘야 해.",
      "en": "I have to lend it/this to Tim. (=lend Tim this)"
     },
     {
      "n": 18,
      "ko": "새것을 사야 해.",
      "en": "I have to buy a new one."
     },
     {
      "n": 19,
      "ko": "너가 이해해야 해.",
      "en": "You have to understand."
     },
     {
      "n": 20,
      "ko": "너가 Sam 용서해야지.",
      "en": "You have to forgive Sam."
     },
     {
      "n": 21,
      "ko": "너 편한 신발 신어야 해.",
      "en": "You have to wear comfortable shoes."
     },
     {
      "n": 22,
      "ko": "방을 좀 치워야 해.",
      "en": "I have to clean the room."
     },
     {
      "n": 23,
      "ko": "나 낼 걔 보러 가야 해.",
      "en": "I have to visit (=go and see) him/her tomorrow."
     },
     {
      "n": 24,
      "ko": "우리 서둘러야 해.",
      "en": "We have to hurry (up)."
     },
     {
      "n": 25,
      "ko": "우리 지금 어디 가야 하는데.",
      "en": "We have to go somewhere now."
     },
     {
      "n": 26,
      "ko": "나 지금 은행 가야 해.",
      "en": "I have to go to the bank now."
     },
     {
      "n": 27,
      "ko": "나 이거 가지고 있어야 해.",
      "en": "I have to keep it/this."
     },
     {
      "n": 28,
      "ko": "너가 사과해야 해.",
      "en": "You have to apologize."
     },
     {
      "n": 29,
      "ko": "너 나한테 보여줘야 해.",
      "en": "You have to show (it to) me."
     },
     {
      "n": 30,
      "ko": "우리 돈 내야 해. 공짜 아니야.",
      "en": "We have to pay. It isn't free."
     },
     {
      "n": 31,
      "ko": "너 나한테 약속해야 돼.",
      "en": "You have to promise me."
     },
     {
      "n": 32,
      "ko": "우리 이거 그만 해야 돼.",
      "en": "We have to stop it/this."
     },
     {
      "n": 33,
      "ko": "그거 미리 예약해야 돼.",
      "en": "I have to book it in advance./ I have to make a reservation/make an appointment in advance. (*book/make a reservation: 예약, 예매 vs. make an appointment: 시간 약속을 잡다)"
     },
     {
      "n": 34,
      "ko": "그거 미리 계획해야 돼.",
      "en": "I have to plan it in advance."
     },
     {
      "n": 35,
      "ko": "잠깐만, 나 지금 내 친구한테 문자 해야 돼.",
      "en": "Hang on. /Hold on. I have to text my friend now."
     },
     {
      "n": 36,
      "ko": "지금 영어 공부해야 돼.",
      "en": "I have to study English now."
     },
     {
      "n": 37,
      "ko": "이거 내일까지 다해야 돼.",
      "en": "I have to finish it by tomorrow."
     },
     {
      "n": 38,
      "ko": "이거 사진 찍어서 보내야 돼.",
      "en": "I have to take a picture/photo (of it) and send it."
     },
     {
      "n": 39,
      "ko": "우리 최대한 빨리 결정해야 돼.",
      "en": "We have to decide as soon as possible/a.s.a.p."
     },
     {
      "n": 40,
      "ko": "너 나한테 내일까지 알려줘야 돼.",
      "en": "You have to let me know by tomorrow."
     },
     {
      "n": 41,
      "ko": "난 거기 안가도 돼.",
      "en": "I don't have to go there."
     },
     {
      "n": 42,
      "ko": "너 지금 당장은 이거 안 해도 돼.",
      "en": "You don't have to do it/this right now."
     },
     {
      "n": 43,
      "ko": "나 Jill한테 안 물어봐도 돼.",
      "en": "I don't have to ask Jill."
     },
     {
      "n": 44,
      "ko": "나 아무것도 안 빌려도 돼.",
      "en": "I don't have to borrow anything."
     },
     {
      "n": 45,
      "ko": "나 아무것도 안 사도 돼.",
      "en": "I don't have to buy anything."
     },
     {
      "n": 46,
      "ko": "너 아무 말도 안 해도 돼. 알아.",
      "en": "You don't have to say anything. I know."
     },
     {
      "n": 47,
      "ko": "너 그거 지금 안 찾아도 돼.",
      "en": "You don't have to find it/that now."
     },
     {
      "n": 48,
      "ko": "너 물어보지 않아도 돼.",
      "en": "You don't have to ask."
     },
     {
      "n": 49,
      "ko": "나 지금 Peter한테 전화 안 해도 돼.",
      "en": "I don't have to call Peter now."
     },
     {
      "n": 50,
      "ko": "나 안경 안 써도 돼.",
      "en": "I don't have to wear glasses."
     },
     {
      "n": 51,
      "ko": "나 이거 꼭 안 써도 돼.",
      "en": "I don't have to use it."
     },
     {
      "n": 52,
      "ko": "나 지금 아무것도 안 해도 돼.",
      "en": "I don't have to do anything now."
     },
     {
      "n": 53,
      "ko": "나 낼 일찍 안 일어나도 돼.",
      "en": "I don't have to get up early tomorrow."
     },
     {
      "n": 54,
      "ko": "너 이거 돈 안 내도 돼. 공짜야.",
      "en": "You don't have to pay (for) it/this. It's free."
     },
     {
      "n": 55,
      "ko": "안 그러셔도 돼요.",
      "en": "You don't have to do it/that."
     },
     {
      "n": 56,
      "ko": "우리 지금 안 나가도 돼.",
      "en": "We don't have to go out/leave now."
     },
     {
      "n": 57,
      "ko": "너 아무것도 안 가져와도 돼.",
      "en": "You don't have to bring anything."
     },
     {
      "n": 58,
      "ko": "너 지금 결정하지 않아도 돼.",
      "en": "You don't have to decide now."
     },
     {
      "n": 59,
      "ko": "우리 아무것도 안 가져가도 돼.",
      "en": "We don't have to take anything."
     },
     {
      "n": 60,
      "ko": "나 내일 일안해도 돼.",
      "en": "I don't have to work tomorrow."
     },
     {
      "n": 61,
      "ko": "이거 돈 내야 하나요?",
      "en": "Do I have to pay (for) it/this?"
     },
     {
      "n": 62,
      "ko": "이거 어디서 돈 내야 해요?",
      "en": "Where do I have to pay it/this?"
     },
     {
      "n": 63,
      "ko": "내가 얼마 내야 하나요?",
      "en": "How much do I have to pay?"
     },
     {
      "n": 64,
      "ko": "내가 몇 시에 거기 가야 하나요?",
      "en": "What time do I have to go there?"
     },
     {
      "n": 65,
      "ko": "너 내일 일해야 해?",
      "en": "Do you have to work tomorrow?"
     },
     {
      "n": 66,
      "ko": "너 왜 일찍 일어나야 해?",
      "en": "Why do you have to get up early?"
     },
     {
      "n": 67,
      "ko": "나 내일 몇 시에 일어나야 해?",
      "en": "What time do I have to get up tomorrow?"
     },
     {
      "n": 68,
      "ko": "우리 몇 시에 나가야 해?",
      "en": "What time do we have to go out/leave?"
     },
     {
      "n": 69,
      "ko": "나 이거 해야 해요?",
      "en": "Do I have to do it/this?"
     },
     {
      "n": 70,
      "ko": "나 이거 왜 해야 하나요?",
      "en": "Why do I have to do it/this?"
     },
     {
      "n": 71,
      "ko": "나 언제 돌아와야 하나요?",
      "en": "When do I have to come back /return?"
     },
     {
      "n": 72,
      "ko": "이거 언제 가지러 와야 하나요?",
      "en": "When do I have to pick it/this up?"
     },
     {
      "n": 73,
      "ko": "내가 몇 시에 가져다 드려야 하나요?",
      "en": "What time do I have to drop it/this off?"
     },
     {
      "n": 74,
      "ko": "내가 얘 데리러 언제 와야 해요?",
      "en": "When do I have to pick him/her up?"
     },
     {
      "n": 75,
      "ko": "나 어느 것으로 써야 하나요? 이거 아님 저거?",
      "en": "Which one do I have to use? This (one) or that (one)? [=Do I have to use this (one) or that (one)? = Is it this (one) or that (one)? ]"
     },
     {
      "n": 76,
      "ko": "내가 알아야 하나요?",
      "en": "Do I have to know?"
     },
     {
      "n": 77,
      "ko": "여기에 뭘 써야 하나요?",
      "en": "What do I have to write here?"
     },
     {
      "n": 78,
      "ko": "나 지금 뭐 해야 하나요?",
      "en": "What do I have to do now?"
     },
     {
      "n": 79,
      "ko": "나 지금 어디로 가야 하나요?",
      "en": "Where do I have to go now?"
     },
     {
      "n": 80,
      "ko": "어느 길로 가야 돼요?",
      "en": "Which way do I have to go?"
     },
     {
      "n": 81,
      "ko": "내가 여기서 기다려야 하나요?",
      "en": "Do I have to wait here?"
     },
     {
      "n": 82,
      "ko": "내가 얼마나 오래 기다려야 하나요?",
      "en": "How long do I have to wait?"
     },
     {
      "n": 83,
      "ko": "나 이거 어디다 둬야 하나요?",
      "en": "Where do I have to put/leave it/this?"
     },
     {
      "n": 84,
      "ko": "어느 걸로 사야 하나요?",
      "en": "Which one do I have to buy?"
     },
     {
      "n": 85,
      "ko": "내가 뭘 가져와야 하나요?",
      "en": "What do I have to bring?"
     },
     {
      "n": 86,
      "ko": "내가 언제 다시 전화해야 하나요?",
      "en": "When do I have to call you back?"
     },
     {
      "n": 87,
      "ko": "너 왜 알아야 하는데?",
      "en": "Why do you have to know?"
     },
     {
      "n": 88,
      "ko": "너 지금 어딘가 가야 돼?",
      "en": "Do you have to go somewhere now?"
     },
     {
      "n": 89,
      "ko": "너 주말에도 일해야 해?",
      "en": "Do you have to work on/at weekends?"
     },
     {
      "n": 90,
      "ko": "제가 언제 알려드려야 돼요?",
      "en": "When do I have to let you know?"
     },
     {
      "n": 91,
      "ko": "지금 당장 결정해야 되나요?",
      "en": "Do I have to decide right now?"
     },
     {
      "n": 92,
      "ko": "그거 미리 예약해야 되나요?",
      "en": "Do I have to book it in advance?/ Do I have to make a reservation/make an appointment in advance?"
     },
     {
      "n": 93,
      "ko": "이거 언제 끝내야 돼요?",
      "en": "When do I have to finish it?"
     },
     {
      "n": 94,
      "ko": "어느 앱을 깔아야 돼요?",
      "en": "Which app do I have to install/download?"
     },
     {
      "n": 95,
      "ko": "왜 그래야 되죠?",
      "en": "Why do I have to do it/that?"
     },
     {
      "n": 96,
      "ko": "너 꼭 그래야 돼?",
      "en": "Do you have to do it/that?"
     },
     {
      "n": 97,
      "ko": "전 영어가 늘고 싶은데. 뭘 연습해야 돼요?",
      "en": "I want to improve my English. What do I have to practice?"
     },
     {
      "n": 98,
      "ko": "Big Land에 가고 싶은데요, 어느 기차 타야 돼요?",
      "en": "I want to go to Big Land. Which train do I have to take?"
     },
     {
      "n": 99,
      "ko": "제가 몇 시에 와야 돼요?",
      "en": "What time do I have to come?"
     },
     {
      "n": 100,
      "ko": "어디에 싸인 해야 돼요?",
      "en": "Where do I have to sign?"
     }
    ]
   },
   {
    "u": 3,
    "title": "Unit 3",
    "items": [
     {
      "n": 1,
      "ko": "이해할 수 있어요.",
      "en": "I can understand."
     },
     {
      "n": 2,
      "ko": "두 시에 올 수 있어요.",
      "en": "I can come at 2 (o'clock)."
     },
     {
      "n": 3,
      "ko": "너 다음 주말에 만날 수 있어.",
      "en": "I can meet you next weekend."
     },
     {
      "n": 4,
      "ko": "내가 이따가 너 데리러 갈 수 있어.",
      "en": "I can pick you up later."
     },
     {
      "n": 5,
      "ko": "내가 내일 전화할 수 있어.",
      "en": "I can call you tomorrow."
     },
     {
      "n": 6,
      "ko": "내가 한 30분 후에 전화 다시 할 수 있는데.",
      "en": "I can call you back in (about) half an hour/30 minutes."
     },
     {
      "n": 7,
      "ko": "제가 내일 오후에 찾으러 갈 수 있어요.",
      "en": "I can pick it up tomorrow afternoon."
     },
     {
      "n": 8,
      "ko": "제가 이따가 오후에 가져다 드릴 수 있어요.",
      "en": "I can drop it off later this afternoon."
     },
     {
      "n": 9,
      "ko": "제가 내일 다시 올 수 있어요.",
      "en": "I can come back tomorrow."
     },
     {
      "n": 10,
      "ko": "내가 한 시간 있다가 다시 올 수 있어.",
      "en": "I can come back in an hour."
     },
     {
      "n": 11,
      "ko": "내가 그거 너한테 빌려줄 수 있어.",
      "en": "I can lend it/that to you (lend you that)."
     },
     {
      "n": 12,
      "ko": "네, 그래요.",
      "en": "Yes, I can do it/that."
     },
     {
      "n": 13,
      "ko": "이따가 알려줄 수 있어.",
      "en": "I can let you know later."
     },
     {
      "n": 14,
      "ko": "이따가 너한테 문자 할 수 있어.",
      "en": "I can text you later."
     },
     {
      "n": 15,
      "ko": "인터넷으로 그거 주문할 수 있어.",
      "en": "I/You can order it on line."
     },
     {
      "n": 16,
      "ko": "인터넷으로 그거 살 수 있어.",
      "en": "I/You can buy it on line."
     },
     {
      "n": 17,
      "ko": "내일 오후에 그거 배달할 수 있어.",
      "en": "I can deliver it tomorrow afternoon."
     },
     {
      "n": 18,
      "ko": "지금 갈 수 있어.",
      "en": "I can go now."
     },
     {
      "n": 19,
      "ko": "그거 고칠 수 있어. 새 거 안 사도 돼.",
      "en": "I can fix it. I don't have to buy a new one."
     },
     {
      "n": 20,
      "ko": "내일까지 그거 다할 수 있어.",
      "en": "I can finish it/that by tomorrow."
     },
     {
      "n": 21,
      "ko": "영어 할 수 있어.",
      "en": "I can speak English."
     },
     {
      "n": 22,
      "ko": "운전 할 수 있어.",
      "en": "I can drive."
     },
     {
      "n": 23,
      "ko": "조깅 할 수 있어.",
      "en": "I can jog."
     },
     {
      "n": 24,
      "ko": "피아노 칠 수 있어.",
      "en": "I can play the piano."
     },
     {
      "n": 25,
      "ko": "오늘 저녁에 운동 할 수 있어.",
      "en": "I can exercise/work out this evening."
     },
     {
      "n": 26,
      "ko": "네가 원하면, 내가 그거 줄 수 있어.",
      "en": "If you want, I can give it/that to you (give you that)."
     },
     {
      "n": 27,
      "ko": "너가 원하면, 내가 그거 바꿀 수 있어.",
      "en": "If you want, I can change it/that."
     },
     {
      "n": 28,
      "ko": "너가 원하면, 내가 도와줄 수 있어.",
      "en": "If you want, I can help (you)."
     },
     {
      "n": 29,
      "ko": "너가 원하면, 내가 그거 보낼 수 있어.",
      "en": "If you want, I can send it."
     },
     {
      "n": 30,
      "ko": "괜찮아요, 기다릴 수 있어요.",
      "en": "It is okay, I can wait."
     },
     {
      "n": 31,
      "ko": "지금 당장 그거 시작할 수 있어.",
      "en": "I can start/begin it right now."
     },
     {
      "n": 32,
      "ko": "좋은 식당을 추천할 수 있어.",
      "en": "I can recommend a good restaurant."
     },
     {
      "n": 33,
      "ko": "뭔가 먹을래? 내가 지금 뭔가 요리 할 수 있어.",
      "en": "Do you want to eat something? I can cook/make something now."
     },
     {
      "n": 34,
      "ko": "내가 이따가 너한테 다시 말해줄 수 있어.",
      "en": "I can remind you later."
     },
     {
      "n": 35,
      "ko": "그거 다음 주에 설치할 수 있어요.",
      "en": "I can install it next week."
     },
     {
      "n": 36,
      "ko": "나 지금 통화할 수 있어.",
      "en": "I can talk now. (*talk: 통화 가능-전화 받은 후 사용 vs. call: 전화 가능-통화 전 사용)"
     },
     {
      "n": 37,
      "ko": "나 이길 수 있어.",
      "en": "I can win."
     },
     {
      "n": 38,
      "ko": "나 이거 잘 할 수 있어.",
      "en": "I can do it well."
     },
     {
      "n": 39,
      "ko": "설명할 수 있어.",
      "en": "I can explain (it)."
     },
     {
      "n": 40,
      "ko": "결과를 다음주에 받을 수 있어.",
      "en": "I can get the results next week."
     },
     {
      "n": 41,
      "ko": "나 이거 못 사.",
      "en": "I can't buy it."
     },
     {
      "n": 42,
      "ko": "아니요. 저 이거 못 먹어요.",
      "en": "No, thank you. I can't eat it/this."
     },
     {
      "n": 43,
      "ko": "오늘은 못 가요. 이따가 어디 가야 돼요.",
      "en": "I can't go/come today. I have to go somewhere later."
     },
     {
      "n": 44,
      "ko": "그때는 못 만나요.",
      "en": "I can't meet (you) then."
     },
     {
      "n": 45,
      "ko": "기억이 안 나.",
      "en": "I can't remember (it)."
     },
     {
      "n": 46,
      "ko": "미안, 못 도와줘요.",
      "en": "Sorry, I can't help (you)."
     },
     {
      "n": 47,
      "ko": "그거 없어.",
      "en": "I can't find it/that."
     },
     {
      "n": 48,
      "ko": "결정 못 하겠어요.",
      "en": "I can't decide (it)."
     },
     {
      "n": 49,
      "ko": "난 수영 못 해요.",
      "en": "I can't swim."
     },
     {
      "n": 50,
      "ko": "중국어 못 해.",
      "en": "I can't speak Chinese."
     },
     {
      "n": 51,
      "ko": "아직 못 나가요.",
      "en": "I can't go out/leave yet."
     },
     {
      "n": 52,
      "ko": "이거 지금 당장은 못 하는데요.",
      "en": "I can't do it/this right now."
     },
     {
      "n": 53,
      "ko": "고르지 못 하겠어.",
      "en": "I can't choose."
     },
     {
      "n": 54,
      "ko": "혼자 이거 못 하겠어.",
      "en": "I can't do it alone."
     },
     {
      "n": 55,
      "ko": "더 이상은 못 기다리겠어.",
      "en": "I can't wait anymore."
     },
     {
      "n": 56,
      "ko": "더 이상은 못 걷겠어.",
      "en": "I can't walk anymore."
     },
     {
      "n": 57,
      "ko": "지금 통화 못 해. 나중에 전화할래?",
      "en": "I can't talk now. Do you want to call (me back) later?"
     },
     {
      "n": 58,
      "ko": "지금은 일 못 하겠다.",
      "en": "I can't work now."
     },
     {
      "n": 59,
      "ko": "집중을 못 하겠어.",
      "en": "I can't focus/concentrate."
     },
     {
      "n": 60,
      "ko": "미안해요. 스케줄 조정을 못 해요. 오늘 해야 돼요.",
      "en": "(I'm) Sorry. I can't reschedule. I have to do it today."
     },
     {
      "n": 61,
      "ko": "지금 통화할 수 있어?",
      "en": "Can you talk now?"
     },
     {
      "n": 62,
      "ko": "이거 먹을 수 있어?",
      "en": "Can you eat it/this?"
     },
     {
      "n": 63,
      "ko": "저녁 먹고 갈수 있어?",
      "en": "Can you stay for dinner?"
     },
     {
      "n": 64,
      "ko": "이번 주말에 만날 수 있어?",
      "en": "Can you meet this weekend?"
     },
     {
      "n": 65,
      "ko": "나랑 점심 먹을 수 있어?",
      "en": "Can you eat/have lunch with me?"
     },
     {
      "n": 66,
      "ko": "오늘밤에 전화 다시 할 수 있어?",
      "en": "Can you call me back tonight?"
     },
     {
      "n": 67,
      "ko": "한국말 할 수 있어?",
      "en": "Can you speak Korean?"
     },
     {
      "n": 68,
      "ko": "나한테 보여줄 수 있어?",
      "en": "Can you show (it to) me?"
     },
     {
      "n": 69,
      "ko": "그거 나한테 빌려줄 수 있어?",
      "en": "Can you lend it/that to me (lend me that)?"
     },
     {
      "n": 70,
      "ko": "영수증 가져올 수 있어?",
      "en": "Can you bring the receipt?"
     },
     {
      "n": 71,
      "ko": "언제 올 수 있어?",
      "en": "When can you come?"
     },
     {
      "n": 72,
      "ko": "몇 시에 만날 수 있어?",
      "en": "What time can you meet?"
     },
     {
      "n": 73,
      "ko": "이거 언제 배달해줄 수 있어?",
      "en": "When can you deliver it/this?"
     },
     {
      "n": 74,
      "ko": "이거 언제 설치할 수 있어?",
      "en": "When can you install it/this?"
     },
     {
      "n": 75,
      "ko": "언제 나한테 알려줄 수 있어?",
      "en": "When can you let me know?"
     },
     {
      "n": 76,
      "ko": "여기에 얼마나 오래 주차할 수 있나요?",
      "en": "How long can you/I park here?"
     },
     {
      "n": 77,
      "ko": "얼마나 오래 있을 수 있어?",
      "en": "How long can you stay?"
     },
     {
      "n": 78,
      "ko": "내가 어떻게 도울 수 있어?",
      "en": "How can I help (you)?"
     },
     {
      "n": 79,
      "ko": "이거 어디서 살수 있어?",
      "en": "Where can you/I buy it?"
     },
     {
      "n": 80,
      "ko": "이런 거 같은 거 어디서 구할 수 있어?",
      "en": "Where can you/I get something like this?"
     },
     {
      "n": 81,
      "ko": "그것 좀 켜줄래요?",
      "en": "Can you turn it/that on?"
     },
     {
      "n": 82,
      "ko": "그것 좀 꺼줄래요?",
      "en": "Can you turn it/that off?"
     },
     {
      "n": 83,
      "ko": "소리 좀 올려줄래요?",
      "en": "Can you turn it up?"
     },
     {
      "n": 84,
      "ko": "소리 좀 줄여줄래요?",
      "en": "Can you turn it down?"
     },
     {
      "n": 85,
      "ko": "그거 여기다 좀 적어줄래요?",
      "en": "Can you write it/that here?"
     },
     {
      "n": 86,
      "ko": "다른 것 좀 보여줄래요?",
      "en": "Can you show me something else?"
     },
     {
      "n": 87,
      "ko": "잠깐만 이것 좀 잡아줄래요?",
      "en": "Can you hold it for a minute/second/moment?"
     },
     {
      "n": 88,
      "ko": "여기서 잠깐만 기다려줄래요?",
      "en": "Can you wait here for a minute/second?"
     },
     {
      "n": 89,
      "ko": "그거 다시 말해줄래요?",
      "en": "Can you say it/that again? / Can you repeat it/that?"
     },
     {
      "n": 90,
      "ko": "말 좀 천천히 해줄래요?",
      "en": "Can you speak slowly?"
     },
     {
      "n": 91,
      "ko": "추천해 주실래요?",
      "en": "Can you recommend?"
     },
     {
      "n": 92,
      "ko": "이따가 나한테 다시 말해줄래요?",
      "en": "Can you remind me later?"
     },
     {
      "n": 93,
      "ko": "5분 일찍 와주실래요?",
      "en": "Can you come 5 minutes early?"
     },
     {
      "n": 94,
      "ko": "저희 사진 좀 찍어줄래요?",
      "en": "Can you take a picture/photo of us?"
     },
     {
      "n": 95,
      "ko": "그것 좀 들어다 줄래요?",
      "en": "Can you carry it/this?"
     },
     {
      "n": 96,
      "ko": "자리 좀 바꿔줄래요?",
      "en": "Can you change seats?"
     },
     {
      "n": 97,
      "ko": "이거 좀 고쳐줄래요?",
      "en": "Can you fix it?"
     },
     {
      "n": 98,
      "ko": "5시까지 만들어줄래요?",
      "en": "Can you make it by 5 (o'clock)?"
     },
     {
      "n": 99,
      "ko": "저랑 여기에 있어줄래요?",
      "en": "Can you stay here with me?"
     },
     {
      "n": 100,
      "ko": "좀 서둘러 줄래요?",
      "en": "Can you hurry (up)?"
     }
    ]
   },
   {
    "u": 4,
    "title": "Unit 4",
    "items": [
     {
      "n": 1,
      "ko": "여기 앉아도 돼.",
      "en": "You can sit here."
     },
     {
      "n": 2,
      "ko": "이거 써도 돼요.",
      "en": "You can use it/this."
     },
     {
      "n": 3,
      "ko": "내 꺼 빌려도 돼.",
      "en": "You can borrow mine."
     },
     {
      "n": 4,
      "ko": "이거 가져도 돼.",
      "en": "You can have it/this."
     },
     {
      "n": 5,
      "ko": "너 이거 가지고 있어도 돼.",
      "en": "You can keep it/this."
     },
     {
      "n": 6,
      "ko": "이거 가져가도 돼요.",
      "en": "You can take it/this."
     },
     {
      "n": 7,
      "ko": "내일 오후에 오셔도 돼요.",
      "en": "You can come tomorrow afternoon."
     },
     {
      "n": 8,
      "ko": "이거 한 번 해봐도 돼요.",
      "en": "You can try it/this."
     },
     {
      "n": 9,
      "ko": "그렇게 해도 돼요. 문제없어요.",
      "en": "You can do it/that. No problem."
     },
     {
      "n": 10,
      "ko": "골라도 돼요.",
      "en": "You can choose/pick."
     },
     {
      "n": 11,
      "ko": "아무 때나 와도 돼.",
      "en": "You can come any time."
     },
     {
      "n": 12,
      "ko": "그거 먹어도 돼.",
      "en": "You can eat/have it/that."
     },
     {
      "n": 13,
      "ko": "여기에 주차해도 돼.",
      "en": "You can park here."
     },
     {
      "n": 14,
      "ko": "이거 입어봐도 돼요.",
      "en": "You can try it/this on."
     },
     {
      "n": 15,
      "ko": "뭐든지 물어봐도 돼요.",
      "en": "You can ask (me) anything. (*anyhing: 아무거나, 뭐든지 vs. everything: 말 그대로 '모든' 것, 따라서 여기서는 문맥상 '뭐든지'의 'anything'를 사용함)"
     },
     {
      "n": 16,
      "ko": "두 시에 다시 오셔도 돼요.",
      "en": "You can come back at 2 (o'clock)."
     },
     {
      "n": 17,
      "ko": "여기서 기다리셔도 돼요.",
      "en": "You can wait here."
     },
     {
      "n": 18,
      "ko": "그거 바꿔도 됩니다.",
      "en": "You can change it/that."
     },
     {
      "n": 19,
      "ko": "그거 버려도 돼.",
      "en": "You can throw it/that away."
     },
     {
      "n": 20,
      "ko": "스케줄 다시 잡아도 돼.",
      "en": "You can reschedule."
     },
     {
      "n": 21,
      "ko": "그거 삭제해도 돼.",
      "en": "You can delete it/that."
     },
     {
      "n": 22,
      "ko": "그거 인터넷으로 해도 돼.",
      "en": "You can do it/that on line."
     },
     {
      "n": 23,
      "ko": "오래 있어도 돼.",
      "en": "You can stay long."
     },
     {
      "n": 24,
      "ko": "지금 시작해도 돼. 괜찮아.",
      "en": "You can start/begin now. It's ok."
     },
     {
      "n": 25,
      "ko": "이 쿠폰 써도 돼.",
      "en": "You can use this coupon."
     },
     {
      "n": 26,
      "ko": "그거 다음주에 보내도 돼.",
      "en": "You can send it next week."
     },
     {
      "n": 27,
      "ko": "집에서 그거 요리해도 돼.",
      "en": "You can cook it at home."
     },
     {
      "n": 28,
      "ko": "그거 여기다 둬도 돼.",
      "en": "You can put/leave it here."
     },
     {
      "n": 29,
      "ko": "나중에 결정해도 돼.",
      "en": "You can decide later."
     },
     {
      "n": 30,
      "ko": "천천히 해도 돼.",
      "en": "You can take your time (do it slowly)."
     },
     {
      "n": 31,
      "ko": "그거 연기해도 돼.",
      "en": "You can delay/postpone it."
     },
     {
      "n": 32,
      "ko": "그거 여기에 잠깐 보관해도 돼요.",
      "en": "You can keep it here for a minute/moment."
     },
     {
      "n": 33,
      "ko": "거기 걸어가도 돼.",
      "en": "You can walk there."
     },
     {
      "n": 34,
      "ko": "아무거나 사도 돼.",
      "en": "You can buy anything."
     },
     {
      "n": 35,
      "ko": "핸드폰 사용해도 돼.",
      "en": "You can use your phone."
     },
     {
      "n": 36,
      "ko": "전화 받아도 돼.",
      "en": "You can answer the phone. / You can take it/the call."
     },
     {
      "n": 37,
      "ko": "그거 나중에 돌려줘도 돼.",
      "en": "You can return it later. / You can give it back later."
     },
     {
      "n": 38,
      "ko": "생각해 보고 나중에 알려줘도 돼.",
      "en": "You can think about it and let me know later."
     },
     {
      "n": 39,
      "ko": "우리 이거 같이 해도 돼. 그거 혼자 하지 않아도 돼.",
      "en": "We can do it together. You don't have to do it alone."
     },
     {
      "n": 40,
      "ko": "나 빼고 가도 돼. 난 괜찮아.",
      "en": "You can go without me. I don't mind."
     },
     {
      "n": 41,
      "ko": "저기 앉으면 안돼.",
      "en": "You can't sit there."
     },
     {
      "n": 42,
      "ko": "이거 먹으면 안돼.",
      "en": "You can't eat it/this."
     },
     {
      "n": 43,
      "ko": "그럼 안돼요.",
      "en": "You can't do it/that."
     },
     {
      "n": 44,
      "ko": "이거 버리면 안돼.",
      "en": "You can't throw it/this away."
     },
     {
      "n": 45,
      "ko": "여기서 멈추면 안돼.",
      "en": "You can't stop here."
     },
     {
      "n": 46,
      "ko": "이거 쓰면 안돼.",
      "en": "You can't use it/this."
     },
     {
      "n": 47,
      "ko": "아무한테도 말하면 안돼.",
      "en": "You can't tell anyone/anybody."
     },
     {
      "n": 48,
      "ko": "아무 말도 하면 안돼.",
      "en": "You can't say anything."
     },
     {
      "n": 49,
      "ko": "이거 만지면 안돼.",
      "en": "You can't touch it/this."
     },
     {
      "n": 50,
      "ko": "아직 보면 안돼.",
      "en": "You can't see it yet."
     },
     {
      "n": 51,
      "ko": "거짓말하면 안돼.",
      "en": "You can't lie."
     },
     {
      "n": 52,
      "ko": "이거 까먹으면 안돼.",
      "en": "You can't forget (about) it/this."
     },
     {
      "n": 53,
      "ko": "이거 잃어버리면 안돼.",
      "en": "You can't lose it/this."
     },
     {
      "n": 54,
      "ko": "그 애 믿으면 안돼.",
      "en": "You can't believe/trust him/her."
     },
     {
      "n": 55,
      "ko": "여기서 뛰면 안돼.",
      "en": "You can't run here."
     },
     {
      "n": 56,
      "ko": "여기서 핸드폰 쓰면 안돼.",
      "en": "You can't use your phone here."
     },
     {
      "n": 57,
      "ko": "여기서 사진 찍으면 안돼.",
      "en": "You can't take a picture/photo here."
     },
     {
      "n": 58,
      "ko": "늦게 오면 안돼.",
      "en": "You can't come late."
     },
     {
      "n": 59,
      "ko": "이거 깨뜨리면 안돼.",
      "en": "You can't break it/this."
     },
     {
      "n": 60,
      "ko": "실수하면 안돼.",
      "en": "You can't make a mistake."
     },
     {
      "n": 61,
      "ko": "저 이거 빌려도 되나요?",
      "en": "Can I borrow it/this?"
     },
     {
      "n": 62,
      "ko": "제가 여기 앉아도 되나요?",
      "en": "Can I sit here?"
     },
     {
      "n": 63,
      "ko": "내가 봐도 돼?",
      "en": "Can I see it?"
     },
     {
      "n": 64,
      "ko": "저 여기에 있어도 되나요?",
      "en": "Can I stay here?"
     },
     {
      "n": 65,
      "ko": "여기서 기다려도 되나요?",
      "en": "Can I wait here?"
     },
     {
      "n": 66,
      "ko": "어디서 기다려도 되나요?",
      "en": "Where can I wait?"
     },
     {
      "n": 67,
      "ko": "이거 사도 되나요?",
      "en": "Can I buy it/this?"
     },
     {
      "n": 68,
      "ko": "저 여기에 주차해도 돼요?",
      "en": "Can I park here?"
     },
     {
      "n": 69,
      "ko": "어디에 주차하면 되나요?",
      "en": "Where can I park?"
     },
     {
      "n": 70,
      "ko": "지금 나가도 돼요?",
      "en": "Can I go out/leave now?"
     },
     {
      "n": 71,
      "ko": "너의 개를 만져봐도 되나요?",
      "en": "Can I pat your dog?"
     },
     {
      "n": 72,
      "ko": "저 이거 가져가도 되나요?",
      "en": "Can I take it/this?"
     },
     {
      "n": 73,
      "ko": "제가 뭐 좀 물어봐도 되나요?",
      "en": "Can I ask (you) something?"
     },
     {
      "n": 74,
      "ko": "제가 그것 좀 적어도 될까요?",
      "en": "Can I write it/that (down)?"
     },
     {
      "n": 75,
      "ko": "내가 생각 좀 해봐도 돼요?",
      "en": "Can I think about it?"
     },
     {
      "n": 76,
      "ko": "제가 먼저 해도 되나요?",
      "en": "Can I go first?"
     },
     {
      "n": 77,
      "ko": "그거 인터넷으로 해도 되나요?",
      "en": "Can I do it on line?"
     },
     {
      "n": 78,
      "ko": "너의 화장실을 사용해도 되나요?",
      "en": "Can I use your bathroom/toilet/restroom?"
     },
     {
      "n": 79,
      "ko": "이거 해도 되나요?",
      "en": "Can I do it/this?"
     },
     {
      "n": 80,
      "ko": "제가 뭘 하면 되나요?",
      "en": "What can I do?"
     },
     {
      "n": 81,
      "ko": "지금 주문해도 되나요?",
      "en": "Can I order now?"
     },
     {
      "n": 82,
      "ko": "이 사진 올려도 되나요?",
      "en": "Can I post/upload this photo/picture?"
     },
     {
      "n": 83,
      "ko": "그거 연기해도 되나요?",
      "en": "Can I delay/postpone it?"
     },
     {
      "n": 84,
      "ko": "이번엔 내가 골라도 돼?",
      "en": "Can I choose/pick this time?"
     },
     {
      "n": 85,
      "ko": "누군가 데려와도 돼?",
      "en": "Can I bring someone/somebody?"
     },
     {
      "n": 86,
      "ko": "지금 그거 취소해도 되나요?",
      "en": "Can I cancel it now?"
     },
     {
      "n": 87,
      "ko": "지금 예약해도 되나요?",
      "en": "Can I make a reservation/make an appointment/book now?"
     },
     {
      "n": 88,
      "ko": "나중에 결정해도 되나요? 지금은 아무것도 생각하고 싶지 않아요.",
      "en": "Can I decide later? I don't want to think about anything now."
     },
     {
      "n": 89,
      "ko": "나중에 알려줘도 돼? 지금 결정 못하겠어.",
      "en": "Can I let you know later? I can't decide now."
     },
     {
      "n": 90,
      "ko": "내가 나중에 전화해도 돼? 지금 뭔가 끝내야 돼서.",
      "en": "Can I call you (back) later? (Because) I have to finish something now."
     },
     {
      "n": 91,
      "ko": "오렌지주스 주세요.",
      "en": "Can I have orange juice/OJ, please?"
     },
     {
      "n": 92,
      "ko": "네 이름 주세요.",
      "en": "Can I have your name, please?"
     },
     {
      "n": 93,
      "ko": "물 주세요.",
      "en": "Can I have (some/a glass of/a bottle of) water, please?"
     },
     {
      "n": 94,
      "ko": "콜라 주세요.",
      "en": "Can I have coke, please?"
     },
     {
      "n": 95,
      "ko": "이거 주세요.",
      "en": "Can I have it/this, please?"
     },
     {
      "n": 96,
      "ko": "3번 주세요.",
      "en": "Can I have number 3, please?"
     },
     {
      "n": 97,
      "ko": "아이스 티 주세요.",
      "en": "Can I have iced tea, please?"
     },
     {
      "n": 98,
      "ko": "저걸로 주세요.",
      "en": "Can I have that, please?"
     },
     {
      "n": 99,
      "ko": "이것들 주세요.",
      "en": "Can I have these, please?"
     },
     {
      "n": 100,
      "ko": "물 한잔 주세요.",
      "en": "Can I have a glass of water, please?"
     }
    ]
   },
   {
    "u": 5,
    "title": "Unit 5",
    "items": [
     {
      "n": 1,
      "ko": "내가 이따가 전화할게.",
      "en": "I will call (you) later."
     },
     {
      "n": 2,
      "ko": "내일 다시 전화할게.",
      "en": "I will call you back tomorrow."
     },
     {
      "n": 3,
      "ko": "세시까지 올게.",
      "en": "I will come by 3 (o'clock)."
     },
     {
      "n": 4,
      "ko": "제가 할게요.",
      "en": "I will do it."
     },
     {
      "n": 5,
      "ko": "노력해볼게.",
      "en": "I will try (it)."
     },
     {
      "n": 6,
      "ko": "내가 도와 줄게.",
      "en": "I will help (you)."
     },
     {
      "n": 7,
      "ko": "이거 살게요.",
      "en": "I will buy/take it/this."
     },
     {
      "n": 8,
      "ko": "내가 네게 보여줄게.",
      "en": "I will show you."
     },
     {
      "n": 9,
      "ko": "내가 그거 널 위해 들어줄게.",
      "en": "I will carry it for you."
     },
     {
      "n": 10,
      "ko": "내가 사과할게.",
      "en": "I will apologize."
     },
     {
      "n": 11,
      "ko": "커피나 녹차 마실래?",
      "en": "Do you want to drink/have (some) coffee or green tea?"
     },
     {
      "n": 12,
      "ko": "커피 마실게.",
      "en": "I will drink/have coffee."
     },
     {
      "n": 13,
      "ko": "금방 돌아올게.",
      "en": "I will come back soon."
     },
     {
      "n": 14,
      "ko": "내가 가서 문 닫을게.",
      "en": "I will go and close the door. (*동사를 연결 할 때는 연결고리 'and'를 사용하는 것이 일반적이나, 'go' 뒤에는 'and'를 생략하기도 합니다.)"
     },
     {
      "n": 15,
      "ko": "내가 그거 열어줄게.",
      "en": "I will open it/that."
     },
     {
      "n": 16,
      "ko": "생각해 볼게요.",
      "en": "I will think about it."
     },
     {
      "n": 17,
      "ko": "내가 이거 너한테 빌려줄게.",
      "en": "I will lend it/this to you (lend you this)."
     },
     {
      "n": 18,
      "ko": "여기서 기다릴게.",
      "en": "I will wait here."
     },
     {
      "n": 19,
      "ko": "커피 탈게.",
      "en": "I will make (some) coffee."
     },
     {
      "n": 20,
      "ko": "이거 쓸게.",
      "en": "I will use it/this."
     },
     {
      "n": 21,
      "ko": "내가 받을게. (전화, 문자 등)",
      "en": "I will get it."
     },
     {
      "n": 22,
      "ko": "Sam 바꿔줄게.",
      "en": "I will get Sam."
     },
     {
      "n": 23,
      "ko": "내가 Sam 데려올게.",
      "en": "I will get Sam."
     },
     {
      "n": 24,
      "ko": "이거 지금 내가 할게.",
      "en": "I will do it/this now."
     },
     {
      "n": 25,
      "ko": "지금 샤워할게.",
      "en": "I will take/have a shower now."
     },
     {
      "n": 26,
      "ko": "이거 여기다 둘게.",
      "en": "I will put/leave it/this here."
     },
     {
      "n": 27,
      "ko": "내가 버릴게.",
      "en": "I will throw it away."
     },
     {
      "n": 28,
      "ko": "내가 잘 보관할게. (돌볼게)",
      "en": "I will look after it."
     },
     {
      "n": 29,
      "ko": "내가 찾아볼게.",
      "en": "I will look for it."
     },
     {
      "n": 30,
      "ko": "내일 너에게 알려줄게.",
      "en": "I will let you know tomorrow."
     },
     {
      "n": 31,
      "ko": "내가 낼게.",
      "en": "I will pay (it)."
     },
     {
      "n": 32,
      "ko": "내가 인터넷으로 주문할게.",
      "en": "I will order it on line."
     },
     {
      "n": 33,
      "ko": "내가 전화해서 물어볼게.",
      "en": "I will call and ask."
     },
     {
      "n": 34,
      "ko": "내가 그 애한테 부탁할게.",
      "en": "I will ask him."
     },
     {
      "n": 35,
      "ko": "내일 돌려줄게.",
      "en": "I will return it tomorrow. / I will give it back (to you) tomorrow."
     },
     {
      "n": 36,
      "ko": "내가 그거 나중에 치울게.",
      "en": "I will clean it later."
     },
     {
      "n": 37,
      "ko": "일찍 올게. 안심해도 돼. 걱정 안 해도 된다고.",
      "en": "I will come early. You can relax. You don't have to worry."
     },
     {
      "n": 38,
      "ko": "매일 연습할게. 그렇게 하고 싶어.",
      "en": "I will practice every day. I want to do that."
     },
     {
      "n": 39,
      "ko": "나중에 들릴게. 지금은 어디 가야 돼서.",
      "en": "I will stop by later. (Because) I have to go somewhere now."
     },
     {
      "n": 40,
      "ko": "널 위해 기도할게.",
      "en": "I will pray for you."
     },
     {
      "n": 41,
      "ko": "안 갈게.",
      "en": "I won't go."
     },
     {
      "n": 42,
      "ko": "안 할게.",
      "en": "I won't do it."
     },
     {
      "n": 43,
      "ko": "아무 말도 안 할게.",
      "en": "I won't say anything."
     },
     {
      "n": 44,
      "ko": "아무한테도 말 안 할게.",
      "en": "I won't tell anyone/anybody."
     },
     {
      "n": 45,
      "ko": "아무것도 안 먹을게.",
      "en": "I won't eat anything."
     },
     {
      "n": 46,
      "ko": "아무데도 안 갈게, 걱정 마.",
      "en": "I won't go anywhere. Don't worry."
     },
     {
      "n": 47,
      "ko": "안 바꿀게.",
      "en": "I won't change it."
     },
     {
      "n": 48,
      "ko": "마음 안 바꿀게.",
      "en": "I won't change my mind."
     },
     {
      "n": 49,
      "ko": "안 잊을게.",
      "en": "I won't forget (it)."
     },
     {
      "n": 50,
      "ko": "거짓말 안 할게.",
      "en": "I won't lie."
     },
     {
      "n": 51,
      "ko": "알았어. 안 웃을게.",
      "en": "Ok. I won't laugh."
     },
     {
      "n": 52,
      "ko": "문 안 잠글게.",
      "en": "I won't lock the door."
     },
     {
      "n": 53,
      "ko": "그거 안 끌게.",
      "en": "I won't turn it off."
     },
     {
      "n": 54,
      "ko": "컴퓨터 안 켤게.",
      "en": "I won't turn the computer on/turn on the computer."
     },
     {
      "n": 55,
      "ko": "이거 아무한테도 안 줄게.",
      "en": "I won't give it/this to anyone/anybody (give anyone/anybody this)."
     },
     {
      "n": 56,
      "ko": "안 버릴게.",
      "en": "I won't throw it away."
     },
     {
      "n": 57,
      "ko": "오래 안 있을게.",
      "en": "I won't stay long/for a long time."
     },
     {
      "n": 58,
      "ko": "포기하지 않을게.",
      "en": "I won't give up."
     },
     {
      "n": 59,
      "ko": "이런 일 다시는 없을 거야.",
      "en": "It won't happen again."
     },
     {
      "n": 60,
      "ko": "오래 안 걸릴 거야.",
      "en": "It won't take long."
     },
     {
      "n": 61,
      "ko": "우리 지금 갈까?",
      "en": "Shall we go now?"
     },
     {
      "n": 62,
      "ko": "내가 문 열까?",
      "en": "Shall I open the door?"
     },
     {
      "n": 63,
      "ko": "내가 창문 닫을까?",
      "en": "Shall I close the window?"
     },
     {
      "n": 64,
      "ko": "이거 닫아 놓을까?",
      "en": "Shall I leave it/this closed?"
     },
     {
      "n": 65,
      "ko": "이거 열어둘까?",
      "en": "Shall I leave it/this open?"
     },
     {
      "n": 66,
      "ko": "이거 살까?",
      "en": "Shall I buy it?"
     },
     {
      "n": 67,
      "ko": "내가 운전할까?",
      "en": "Shall I drive?"
     },
     {
      "n": 68,
      "ko": "내가 여기서 기다릴까?",
      "en": "Shall I wait here?"
     },
     {
      "n": 69,
      "ko": "이거 그냥 가지고 있을까?",
      "en": "Shall I just keep it?"
     },
     {
      "n": 70,
      "ko": "Sam한테 말할까?",
      "en": "Shall I tell Sam?"
     },
     {
      "n": 71,
      "ko": "Sam한테 뭐라고 말할까?",
      "en": "What shall I tell Sam?"
     },
     {
      "n": 72,
      "ko": "내가 텔리비전 끌까?",
      "en": "Shall I turn TV off/turn off TV?"
     },
     {
      "n": 73,
      "ko": "내가 라디오 틀까?",
      "en": "Shall I turn the radio on/turn on the radio?"
     },
     {
      "n": 74,
      "ko": "불 킬까?",
      "en": "Shall I turn the light on/turn on the light?"
     },
     {
      "n": 75,
      "ko": "우리 언제 만날까?",
      "en": "When shall we meet?"
     },
     {
      "n": 76,
      "ko": "우리 산책 갈까?",
      "en": "Shall we go for a walk?"
     },
     {
      "n": 77,
      "ko": "우리 드라이브 갈까?",
      "en": "Shall we go for a drive?"
     },
     {
      "n": 78,
      "ko": "우리 오늘밤 저녁 먹으러 나갈까?",
      "en": "Shall we eat out tonight? /Shall we go out for dinner tonight?"
     },
     {
      "n": 79,
      "ko": "내가 몇 시에 전화할까?",
      "en": "What time shall I call (you)?"
     },
     {
      "n": 80,
      "ko": "우리 어디 갈까?",
      "en": "Where shall we go?"
     },
     {
      "n": 81,
      "ko": "나 뭐할까?",
      "en": "What shall I do?"
     },
     {
      "n": 82,
      "ko": "이거 어디다 둘까?",
      "en": "Where shall I put/leave it?"
     },
     {
      "n": 83,
      "ko": "우리 몇 시에 만날까?",
      "en": "What time shall we meet?"
     },
     {
      "n": 84,
      "ko": "우리 누구 초대할까?",
      "en": "Who shall we invite?"
     },
     {
      "n": 85,
      "ko": "나 뭐 살까?",
      "en": "What shall I buy?"
     },
     {
      "n": 86,
      "ko": "내가 예약할까?",
      "en": "Shall I book/make an appointment/make a reservation?"
     },
     {
      "n": 87,
      "ko": "Sam 보러 갈까?",
      "en": "Shall we visit/go and see Sam?"
     },
     {
      "n": 88,
      "ko": "나 뭐 입을까?",
      "en": "What shall I wear?"
     },
     {
      "n": 89,
      "ko": "이거 남겨둘까?",
      "en": "Shall I leave/save it?"
     },
     {
      "n": 90,
      "ko": "이거 신어볼까?",
      "en": "Shall I try it/this/these on?"
     },
     {
      "n": 91,
      "ko": "우리 무슨 얘기할까?",
      "en": "What shall we talk about?"
     },
     {
      "n": 92,
      "ko": "무슨 요리할까?",
      "en": "What shall I cook?"
     },
     {
      "n": 93,
      "ko": "우리 그 애한테 뭐 줄까?",
      "en": "What shall we give him/her?"
     },
     {
      "n": 94,
      "ko": "이거 켜 둘까?",
      "en": "Shall I leave it/this on?"
     },
     {
      "n": 95,
      "ko": "이거 꺼 둘까?",
      "en": "Shall I leave it/this off?"
     },
     {
      "n": 96,
      "ko": "이거 내가 잡아줄까?",
      "en": "Shall I hold it?"
     },
     {
      "n": 97,
      "ko": "우리 같이 여행할까?",
      "en": "Shall we travel together?"
     },
     {
      "n": 98,
      "ko": "뭐라고 말할까? 생각해봐야 돼.",
      "en": "What shall I say? I have to think about it."
     },
     {
      "n": 99,
      "ko": "그거 연기할까?",
      "en": "Shall I delay/postpone it?"
     },
     {
      "n": 100,
      "ko": "우리 이거 다시 할까?",
      "en": "Shall we redo it? / shall we do it again?"
     }
    ]
   },
   {
    "u": 6,
    "title": "Unit 6",
    "items": [
     {
      "n": 1,
      "ko": "그 애 내 친구야.",
      "en": "He/She is my friend."
     },
     {
      "n": 2,
      "ko": "우리 지금 바빠. 내가 나중에 전화해도 될까?",
      "en": "We are busy now. Can I call you back later?"
     },
     {
      "n": 3,
      "ko": "엄마는 지금 통화 중이에요.",
      "en": "My mom is on the phone now."
     },
     {
      "n": 4,
      "ko": "나 지금 가는 길이야.",
      "en": "I am on the way."
     },
     {
      "n": 5,
      "ko": "너는 좋은 사람이야.",
      "en": "You are a good person."
     },
     {
      "n": 6,
      "ko": "그 애는 미국에서 왔어.",
      "en": "He/She is from America/the States."
     },
     {
      "n": 7,
      "ko": "그 애 아파서, 지금 (그 애는) 병원에 있어.",
      "en": "He/She is sick, so (=and) he is in the hospital."
     },
     {
      "n": 8,
      "ko": "우리 늦었어.",
      "en": "We are late."
     },
     {
      "n": 9,
      "ko": "너가(너의 말이) 맞아.",
      "en": "You are right."
     },
     {
      "n": 10,
      "ko": "그는 내게 중요해.",
      "en": "He is important to me. (*~to me: 대상 자체가 나에게 소중함 vs. ~for me: 대상이 나에게 이득을 주기 때문에 소중함 ex. English is important for me because a need a good score.)"
     },
     {
      "n": 11,
      "ko": "그 애 회사에 있어.",
      "en": "He is at work."
     },
     {
      "n": 12,
      "ko": "난 지금 집에 있어.",
      "en": "I am at home."
     },
     {
      "n": 13,
      "ko": "우리 배고프고, 목도 마르다.",
      "en": "We are hungry and thirsty."
     },
     {
      "n": 14,
      "ko": "그 애 되게 재미있어.",
      "en": "He is very funny."
     },
     {
      "n": 15,
      "ko": "나 너 걱정돼.",
      "en": "I am worried about you."
     },
     {
      "n": 16,
      "ko": "나 조금 긴장돼.",
      "en": "I am a bit/a little/ a little bit nervous."
     },
     {
      "n": 17,
      "ko": "난 잘 있어. 넌?",
      "en": "I am well. What/how about you?"
     },
     {
      "n": 18,
      "ko": "우리 아주 가까워. 그 애 내 오래된 친구야.",
      "en": "We are very close. He is my old friend."
     },
     {
      "n": 19,
      "ko": "넌 아직 어려. 넌 뭐든지 할 수 있어.",
      "en": "You are still young. You can do anything."
     },
     {
      "n": 20,
      "ko": "그 애 나한테 화났어.",
      "en": "He/She is angry with/mad at me."
     },
     {
      "n": 21,
      "ko": "재미없어.",
      "en": "It is boring."
     },
     {
      "n": 22,
      "ko": "너무 어려워.",
      "en": "It is very/so/really/too hard/difficult."
     },
     {
      "n": 23,
      "ko": "괜찮아.",
      "en": "It is ok."
     },
     {
      "n": 24,
      "ko": "여기서 멀어.",
      "en": "It is far from here."
     },
     {
      "n": 25,
      "ko": "너무 비싸다.",
      "en": "It is very/so/too expensive."
     },
     {
      "n": 26,
      "ko": "싼데.",
      "en": "It is cheap."
     },
     {
      "n": 27,
      "ko": "그거 여기 있어.",
      "en": "It is here."
     },
     {
      "n": 28,
      "ko": "그거 새 거야.",
      "en": "It is new / a new one."
     },
     {
      "n": 29,
      "ko": "그거 내 가방에 있어.",
      "en": "It is in my bag."
     },
     {
      "n": 30,
      "ko": "밖에 바람불어.",
      "en": "It is windy outside."
     },
     {
      "n": 31,
      "ko": "너무 작아.",
      "en": "It is very small."
     },
     {
      "n": 32,
      "ko": "그거 젖었어.",
      "en": "It is wet."
     },
     {
      "n": 33,
      "ko": "매우 쉬워.",
      "en": "It is very/so/really/too easy."
     },
     {
      "n": 34,
      "ko": "그거 똑같아.",
      "en": "It is the same."
     },
     {
      "n": 35,
      "ko": "불가능해.",
      "en": "It is impossible."
     },
     {
      "n": 36,
      "ko": "좋아.",
      "en": "It is good/nice/cool/fine."
     },
     {
      "n": 37,
      "ko": "매일 달라.",
      "en": "It is different every day."
     },
     {
      "n": 38,
      "ko": "복잡해. 설명할 수 없어.",
      "en": "It is complicated. I can't explain it."
     },
     {
      "n": 39,
      "ko": "가능해요. 모든 게 가능하지.",
      "en": "It is possible. Everything is possible."
     },
     {
      "n": 40,
      "ko": "대단해!",
      "en": "It is amazing/incredible."
     },
     {
      "n": 41,
      "ko": "나 지금 집 아니야.",
      "en": "I am not at home."
     },
     {
      "n": 42,
      "ko": "너 늦지 않았어.",
      "en": "You are not late."
     },
     {
      "n": 43,
      "ko": "그 애는 나쁜 사람이 아니야.",
      "en": "He/She is not a bad person."
     },
     {
      "n": 44,
      "ko": "그 애 지금 여기 없어.",
      "en": "He/She is not here."
     },
     {
      "n": 45,
      "ko": "우리 아직 결혼 안 했어.",
      "en": "We are not married, yet."
     },
     {
      "n": 46,
      "ko": "나 몸이 좀 안 좋아.",
      "en": "I am not well."
     },
     {
      "n": 47,
      "ko": "난 그거 관심 없어.",
      "en": "I am not interested in(=into) it/that."
     },
     {
      "n": 48,
      "ko": "그 애는 아무것도 무서워하지 않아.",
      "en": "He/She is not afraid/scared of anything."
     },
     {
      "n": 49,
      "ko": "우리 다르지 않아.",
      "en": "We are not different."
     },
     {
      "n": 50,
      "ko": "그는 지금 사무실에 없어요.",
      "en": "He/She is not in the office now."
     },
     {
      "n": 51,
      "ko": "안 멀어.",
      "en": "It is not far."
     },
     {
      "n": 52,
      "ko": "옳지 않아.",
      "en": "It is not right."
     },
     {
      "n": 53,
      "ko": "그거 싸지 않아.",
      "en": "It is not cheap."
     },
     {
      "n": 54,
      "ko": "늦지 않았어.",
      "en": "It is not late."
     },
     {
      "n": 55,
      "ko": "안 커.",
      "en": "It is not big."
     },
     {
      "n": 56,
      "ko": "그것들 비슷하지 않아.",
      "en": "They/those are not similar."
     },
     {
      "n": 57,
      "ko": "쉽지 않아.",
      "en": "It is not easy."
     },
     {
      "n": 58,
      "ko": "검정색이 아니야.",
      "en": "It is not black."
     },
     {
      "n": 59,
      "ko": "안 추워.",
      "en": "It is not cold."
     },
     {
      "n": 60,
      "ko": "아직 때가 아니야.",
      "en": "It is not the time, yet."
     },
     {
      "n": 61,
      "ko": "나 늦었니?",
      "en": "Am I late?"
     },
     {
      "n": 62,
      "ko": "우리 일찍이야?",
      "en": "Are we early?"
     },
     {
      "n": 63,
      "ko": "그 애 잘생겼어?",
      "en": "Is he handsome(=good looking)?"
     },
     {
      "n": 64,
      "ko": "그 애 예뻐?",
      "en": "Is she pretty/beautiful?"
     },
     {
      "n": 65,
      "ko": "너 결혼했어 아님 싱글 이야?",
      "en": "Are you married or single?"
     },
     {
      "n": 66,
      "ko": "너 따뜻해?",
      "en": "Are you warm?"
     },
     {
      "n": 67,
      "ko": "Tom 여기 있어?",
      "en": "Is Tom here?"
     },
     {
      "n": 68,
      "ko": "너 어디야? 집이니?",
      "en": "Where are you? Are you at home?"
     },
     {
      "n": 69,
      "ko": "그 애는 몇 살이야?",
      "en": "How old is he/she?"
     },
     {
      "n": 70,
      "ko": "그 애 누구야?",
      "en": "Who is he/she?"
     },
     {
      "n": 71,
      "ko": "너 뭘 걱정하는 거야?",
      "en": "What are you worried about?"
     },
     {
      "n": 72,
      "ko": "떨려?",
      "en": "Are you nervous?"
     },
     {
      "n": 73,
      "ko": "너 나한테 왜 화났어?",
      "en": "Why are you mad at/angry with me?"
     },
     {
      "n": 74,
      "ko": "배고파? 뭔가 먹을래?",
      "en": "Are you hungry? Do you want to eat/have something?"
     },
     {
      "n": 75,
      "ko": "요새 바쁘니?",
      "en": "Are you busy these days?"
     },
     {
      "n": 76,
      "ko": "속상하니?",
      "en": "Are you upset?"
     },
     {
      "n": 77,
      "ko": "왜 이렇게 기분이 좋아? 너의 이야기를 듣고 싶어.",
      "en": "Why are you so happy? I want to hear (about) your story."
     },
     {
      "n": 78,
      "ko": "졸려?",
      "en": "Are you sleepy?"
     },
     {
      "n": 79,
      "ko": "피곤해?",
      "en": "Are you tired?"
     },
     {
      "n": 80,
      "ko": "심심하지? 나갈래?",
      "en": "Are you bored? Do you want to go out?"
     },
     {
      "n": 81,
      "ko": "밖에 춥니?",
      "en": "Is it cold outside?"
     },
     {
      "n": 82,
      "ko": "멀어?",
      "en": "Is it far?"
     },
     {
      "n": 83,
      "ko": "이거 같은 거야?",
      "en": "Is it the same?"
     },
     {
      "n": 84,
      "ko": "괜찮아?",
      "en": "Is it ok?"
     },
     {
      "n": 85,
      "ko": "그거 쉽나요?",
      "en": "Is it easy?"
     },
     {
      "n": 86,
      "ko": "그게 가능한가요?",
      "en": "Is it possible?"
     },
     {
      "n": 87,
      "ko": "이게 제거 인가요?",
      "en": "Is it mine?"
     },
     {
      "n": 88,
      "ko": "비싼가요?",
      "en": "Is it expensive?"
     },
     {
      "n": 89,
      "ko": "그거 슬퍼?",
      "en": "Is it sad?"
     },
     {
      "n": 90,
      "ko": "위험한가요?",
      "en": "Is it dangerous?"
     },
     {
      "n": 91,
      "ko": "그게 뭐야?",
      "en": "What is it?"
     },
     {
      "n": 92,
      "ko": "무슨 색이야?",
      "en": "What color is it?"
     },
     {
      "n": 93,
      "ko": "그게 어디 있어?",
      "en": "Where is it?"
     },
     {
      "n": 94,
      "ko": "어느 길이야?",
      "en": "Which way is it?"
     },
     {
      "n": 95,
      "ko": "어느 차 야?",
      "en": "Which car is it?"
     },
     {
      "n": 96,
      "ko": "언제야?",
      "en": "When is it?"
     },
     {
      "n": 97,
      "ko": "얼마나 멀어?",
      "en": "How far is it?"
     },
     {
      "n": 98,
      "ko": "얼마나 깊어?",
      "en": "How deep is it?"
     },
     {
      "n": 99,
      "ko": "무슨 요일이야?",
      "en": "What day is it?"
     },
     {
      "n": 100,
      "ko": "몇 일 이야?",
      "en": "What date is it?"
     }
    ]
   },
   {
    "u": 7,
    "title": "Unit 7",
    "items": [
     {
      "n": 1,
      "ko": "널 만나서 / 너무 좋아.",
      "en": "It is very/so nice to meet you."
     },
     {
      "n": 2,
      "ko": "널 봐서 너무 좋아.",
      "en": "It is very nice/good to see you."
     },
     {
      "n": 3,
      "ko": "말하기가 어려워요.",
      "en": "It is hard/difficult to say."
     },
     {
      "n": 4,
      "ko": "그 사람 이해하기 힘들어.",
      "en": "It is hard/difficult to understand him/her."
     },
     {
      "n": 5,
      "ko": "알아서 좋아.",
      "en": "It is good/nice to know."
     },
     {
      "n": 6,
      "ko": "너랑 얘기하는 거 좋아.",
      "en": "It is good/nice to talk/speak to you."
     },
     {
      "n": 7,
      "ko": "설명하기 어려워.",
      "en": "It is hard/difficult to explain."
     },
     {
      "n": 8,
      "ko": "그거 하는 거 불가능해.",
      "en": "It is impossible to do (that)."
     },
     {
      "n": 9,
      "ko": "여기 오는 거 좋아.",
      "en": "It is nice/good to come here."
     },
     {
      "n": 10,
      "ko": "지금 사는 게 더 좋아.",
      "en": "It is better to buy now."
     },
     {
      "n": 11,
      "ko": "이해하기 쉬워.",
      "en": "It is easy to understand."
     },
     {
      "n": 12,
      "ko": "그렇게 말해줘서 좋아.",
      "en": "It is nice/good to say (that)."
     },
     {
      "n": 13,
      "ko": "말하는 건 쉽지.",
      "en": "It is easy to say."
     },
     {
      "n": 14,
      "ko": "하는 게 어렵지.",
      "en": "It is hard/difficult to do."
     },
     {
      "n": 15,
      "ko": "돈 모으는 거 불가능이야.",
      "en": "It is impossible to save money."
     },
     {
      "n": 16,
      "ko": "밤에 혼자 나가는 거 위험해.",
      "en": "It is dangerous to go out alone at night."
     },
     {
      "n": 17,
      "ko": "아침에 일찍 일어나는 거 너무 힘들어.",
      "en": "It is hard/difficult to get up early in the morning."
     },
     {
      "n": 18,
      "ko": "찾기 어려워.",
      "en": "It is hard/difficult to find."
     },
     {
      "n": 19,
      "ko": "이거 만들기 쉬워.",
      "en": "It is easy to make."
     },
     {
      "n": 20,
      "ko": "그거 하는 거 바보 같아.",
      "en": "It is silly to do (that)."
     },
     {
      "n": 21,
      "ko": "그거 하기에 너무 늦었어.",
      "en": "It is very/too late to do (that)."
     },
     {
      "n": 22,
      "ko": "그거 사는 거 싸.",
      "en": "It is cheap to buy (that)"
     },
     {
      "n": 23,
      "ko": "그거 쓰기(사용하기) 쉬워.",
      "en": "It is easy to use."
     },
     {
      "n": 24,
      "ko": "너 같은 친구가 있어서 너무 좋아.",
      "en": "It is good/nice to have a fiend like you."
     },
     {
      "n": 25,
      "ko": "집중하기 어려워.",
      "en": "It is hard/difficult to focus/concentrate."
     },
     {
      "n": 26,
      "ko": "부탁하기 어려워.",
      "en": "It is hard/difficult to ask."
     },
     {
      "n": 27,
      "ko": "새로운 언어를 배우는 게 힘들어.",
      "en": "It is hard/difficult to learn a new language."
     },
     {
      "n": 28,
      "ko": "거기 가는 거 불가능해.",
      "en": "It is impossible to go there."
     },
     {
      "n": 29,
      "ko": "찾기 쉬워.",
      "en": "It is easy to find."
     },
     {
      "n": 30,
      "ko": "설치하기 단순해.",
      "en": "It is simple to install."
     },
     {
      "n": 31,
      "ko": "업그레이드 하는 거 매우 단순해. 그냥 'yes'만 클릭하면 돼.",
      "en": "It is very simple to upgrade. You can just click 'yes' / You have to just click 'yes'."
     },
     {
      "n": 32,
      "ko": "가입하기 쉬워. 인터넷으로 해도 돼.",
      "en": "It is easy to join. You can do it on line."
     },
     {
      "n": 33,
      "ko": "혼자 여행하는 거 위험해.",
      "en": "It is dangerous to travel alone."
     },
     {
      "n": 34,
      "ko": "기억하기 쉬워.",
      "en": "It is easy to remember."
     },
     {
      "n": 35,
      "ko": "배우는 거 재미있어. 걱정 안 해도 돼.",
      "en": "It is fun to learn. You don't have to worry."
     },
     {
      "n": 36,
      "ko": "새로운 사람을 만나는 거 재미있어.",
      "en": "It is fun to meet new people."
     },
     {
      "n": 37,
      "ko": "그렇게 생각하는 거 나빠.",
      "en": "It is bad to think like that."
     },
     {
      "n": 38,
      "ko": "걸어 가기엔 멀어.",
      "en": "It is far to walk."
     },
     {
      "n": 39,
      "ko": "여기 있어서 너무 좋다.",
      "en": "It is nice/good to be/stay here."
     },
     {
      "n": 40,
      "ko": "너랑 있어서 너무 좋아.",
      "en": "It is nice/good to be/stay with you."
     },
     {
      "n": 41,
      "ko": "그거 고치는 거 비싸지 않아.",
      "en": "It is not expensive to fix/repair (that)."
     },
     {
      "n": 42,
      "ko": "맞는 걸 찾는 게 쉽지 않아.",
      "en": "It is not easy to find the right one/thing."
     },
     {
      "n": 43,
      "ko": "걷기에 멀지 않아.",
      "en": "It is not far to walk."
     },
     {
      "n": 44,
      "ko": "여기서 수영하는 거 안전하지 않아.",
      "en": "It is not safe to swim (in) here."
     },
     {
      "n": 45,
      "ko": "이렇게 운전하는 거 안전하지 않아.",
      "en": "It is not safe to drive like this."
     },
     {
      "n": 46,
      "ko": "그거 하는 거 어렵지 않아.",
      "en": "It is not hard/difficult to do (that)."
     },
     {
      "n": 47,
      "ko": "사용하는 거 어렵지 않아.",
      "en": "It is not hard/difficult to use."
     },
     {
      "n": 48,
      "ko": "만드는 거 쉽지 않지.",
      "en": "It is not easy to make."
     },
     {
      "n": 49,
      "ko": "교체하기 어렵지 않아요.",
      "en": "It is not hard/difficult to replace/change."
     },
     {
      "n": 50,
      "ko": "그렇게 말하는 거 좋지 않아.",
      "en": "It is not nice/good to say (that/like that)."
     },
     {
      "n": 51,
      "ko": "해보기 나쁘지 않아.",
      "en": "It is not bad to try."
     },
     {
      "n": 52,
      "ko": "설치하기 싸지 않아.",
      "en": "It is not cheap to install."
     },
     {
      "n": 53,
      "ko": "업그레이드하기 어렵지 않아요.",
      "en": "It is not hard/difficult to upgrade."
     },
     {
      "n": 54,
      "ko": "그거 하는 게 불가능한 게 아니야. 모든 게 가능하지.",
      "en": "It is not impossible to do (that). Everything is possible."
     },
     {
      "n": 55,
      "ko": "이해하기 어렵지 않아.",
      "en": "It is not hard/difficult to understand."
     },
     {
      "n": 56,
      "ko": "그거 하는 거 괜찮지 않아. 하면 안 돼.",
      "en": "It is not ok to do (that). You can't do it."
     },
     {
      "n": 57,
      "ko": "제시간에 도착하는 게 가능하지 않아.",
      "en": "It is not possible to arrive on time."
     },
     {
      "n": 58,
      "ko": "그거 하기에 늦지 않았어.",
      "en": "It is not late to do (that)."
     },
     {
      "n": 59,
      "ko": "설치하기 어렵지 않아요.",
      "en": "It is not hard/difficult to install."
     },
     {
      "n": 60,
      "ko": "결정하기 쉽지 않아요.",
      "en": "It is not easy to decide."
     },
     {
      "n": 61,
      "ko": "그렇게 하는 게 가능한가요?",
      "en": "Is it possible to do (that)?"
     },
     {
      "n": 62,
      "ko": "이거 고치는 게 가능한가요? 이거 고칠 수 있어요?",
      "en": "Is it possible to fix (this)? Can you fix it?"
     },
     {
      "n": 63,
      "ko": "찾기 쉬워요?",
      "en": "Is it easy to find?"
     },
     {
      "n": 64,
      "ko": "만드는 게 가능한가요?",
      "en": "Is it possible to make?"
     },
     {
      "n": 65,
      "ko": "그거 만드는 게 어려운가요?",
      "en": "Is it hard/difficult to make (that)?"
     },
     {
      "n": 66,
      "ko": "그거 사는 거 비싸요?",
      "en": "Is it expensive to buy (that)?"
     },
     {
      "n": 67,
      "ko": "그거 고치는 게 싼가요?",
      "en": "Is it cheap to fix/repair?"
     },
     {
      "n": 68,
      "ko": "이거 사용하기 쉬운가요?",
      "en": "Is it easy to use (this)?"
     },
     {
      "n": 69,
      "ko": "그거 해도 괜찮아요?",
      "en": "Is it ok to do (that)?"
     },
     {
      "n": 70,
      "ko": "지금 주문하는 게 가능한가요?",
      "en": "Is it possible to order now?"
     },
     {
      "n": 71,
      "ko": "그렇게 해도 안전한가요?",
      "en": "Is it safe to do (that)?"
     },
     {
      "n": 72,
      "ko": "여기서 수영하는 것이 안전한가요?",
      "en": "Is it safe to swim here?"
     },
     {
      "n": 73,
      "ko": "나중에 업그레이드하는 게 가능한가요?",
      "en": "Is it possible to upgrade later?"
     },
     {
      "n": 74,
      "ko": "오늘밤에 배달하는 게 가능한가요? 배달료가 얼마예요?",
      "en": "Is it possible to deliver tonight? How much is the delivery fee?"
     },
     {
      "n": 75,
      "ko": "설치하기 쉬운가요?",
      "en": "Is it easy to install?"
     },
     {
      "n": 76,
      "ko": "설치하는 게 비싼가요? 설치비가 얼마죠?",
      "en": "Is it expensive to install? How much is the installation fee?"
     },
     {
      "n": 77,
      "ko": "그렇게 하는데 비싼가요? 얼마예요?",
      "en": "Is it expensive to do (that)? How much is it?"
     },
     {
      "n": 78,
      "ko": "오늘 하는 게 가능한가요?",
      "en": "Is it possible to do today?"
     },
     {
      "n": 79,
      "ko": "이거 사용해도 괜찮아요?",
      "en": "Is it ok to use (this)?"
     },
     {
      "n": 80,
      "ko": "지금 바꾸는 게 가능한가요?",
      "en": "Is it possible to change now?"
     },
     {
      "n": 81,
      "ko": "스케줄을 재조정하기엔 늦었나요?",
      "en": "Is it late to reschedule?"
     },
     {
      "n": 82,
      "ko": "그거 하기에 늦었나요?",
      "en": "Is it late to do (that)?"
     },
     {
      "n": 83,
      "ko": "지금 가도 괜찮아요?",
      "en": "Is it ok to go now?"
     },
     {
      "n": 84,
      "ko": "거기 방문하는 게 가능한가요?",
      "en": "Is it possible to visit there?"
     },
     {
      "n": 85,
      "ko": "배우기 쉬운가요?",
      "en": "Is it easy to learn?"
     },
     {
      "n": 86,
      "ko": "걸어가기에 먼가요?",
      "en": "Is it far to walk?"
     },
     {
      "n": 87,
      "ko": "지금 사는 게 더 나은가요?",
      "en": "Is it better to buy now?"
     },
     {
      "n": 88,
      "ko": "기다리는 게 더 나은가요?",
      "en": "Is it better to wait?"
     },
     {
      "n": 89,
      "ko": "여기다 이걸 두는 게 괜찮은가요?",
      "en": "Is it ok to put it/this here?"
     },
     {
      "n": 90,
      "ko": "오늘 저녁에 그걸 픽업 하는 게 가능한가요?",
      "en": "Is it possible to pick it/that up this evening?"
     },
     {
      "n": 91,
      "ko": "지금 주문하기엔 늦었나요?",
      "en": "Is it late to order now?"
     },
     {
      "n": 92,
      "ko": "제 주문을 바꾸기엔 늦었나요?",
      "en": "Is it late to change my order now?"
     },
     {
      "n": 93,
      "ko": "가입하기 쉬운가요?",
      "en": "Is it easy to join?"
     },
     {
      "n": 94,
      "ko": "따라가기 쉬운가요?",
      "en": "Is it easy to follow?"
     },
     {
      "n": 95,
      "ko": "기차를 타는 게 더 나은가요?",
      "en": "Is it better to take a train?"
     },
     {
      "n": 96,
      "ko": "지금 취소하는 게 가능한가요?",
      "en": "Is it possible to cancel now?"
     },
     {
      "n": 97,
      "ko": "집에서 요리하기에 단순한가요?",
      "en": "Is it simple to cook at home?"
     },
     {
      "n": 98,
      "ko": "이걸 복구하는 게 가능한가요?",
      "en": "Is it possible to restore (this)?"
     },
     {
      "n": 99,
      "ko": "다시 만드는 게 불가능한가요?",
      "en": "Is it impossible to remake?"
     },
     {
      "n": 100,
      "ko": "이기는 게 가능한가요? 난 정말 이기고 싶어.",
      "en": "Is it possible to win? I really want to win."
     }
    ]
   },
   {
    "u": 8,
    "title": "Unit 8 · I think I should · ~하는 게 좋겠어",
    "items": [
     {
      "n": 1,
      "ko": "피곤해. 나 오늘은 일찍 자는 게 좋겠어.",
      "en": "I am tired. I should go to bed early today."
     },
     {
      "n": 2,
      "ko": "내일은 일찍 일어나는 게 좋겠다.",
      "en": "I should get up early tomorrow."
     },
     {
      "n": 3,
      "ko": "이거 정말 괜찮은 책이야. 너 이거 읽어보는 게 좋겠어.",
      "en": "It/This is a very good book. You should read it."
     },
     {
      "n": 4,
      "ko": "이거 정말 좋은 영화야. 너 가서 보는 게 좋겠어.",
      "en": "It/This is a very good movie. You should go and see / watch it."
     },
     {
      "n": 5,
      "ko": "늦었어. 지금 가는 게 좋겠다.",
      "en": "It is late. I should go now. (*It is late. 시간이 늦음 vs. I am late. 내가 늦음, 지각)"
     },
     {
      "n": 6,
      "ko": "지저분해. 집 청소하는 게 좋겠어.",
      "en": "It is messy. I should clean the house."
     },
     {
      "n": 7,
      "ko": "이거 별로 안 비싸네. 너 이거 사는 게 좋겠어.",
      "en": "It is not (very) expensive. You should buy it/this."
     },
     {
      "n": 8,
      "ko": "우리 Pam을 기다리는 게 좋겠어.",
      "en": "We should wait for Pam."
     },
     {
      "n": 9,
      "ko": "내 우산을 못 찾겠어. 새로 하나 사는 게 좋겠다.",
      "en": "I can't find my umbrella. I should buy a new one."
     },
     {
      "n": 10,
      "ko": "Sally한테 먼저 물어보는 게 좋겠어.",
      "en": "I should ask Sally first."
     },
     {
      "n": 11,
      "ko": "줄리하고 먼저 얘기해보는 게 좋겠어.",
      "en": "I should talk to/speak to July first."
     },
     {
      "n": 12,
      "ko": "나 나중을 위해 이거 갖고 있는 게 좋겠어.",
      "en": "I should keep it/this for later."
     },
     {
      "n": 13,
      "ko": "이거 맛있어. 너 좀 먹어보는 게 좋겠어.",
      "en": "It is yum/yummy/delicious. You should try it/some."
     },
     {
      "n": 14,
      "ko": "위험해. 조심하는 게 좋겠어.",
      "en": "It is dangerous. I should be careful."
     },
     {
      "n": 15,
      "ko": "안전벨트 메야지.",
      "en": "You should wear a seatbelt."
     },
     {
      "n": 16,
      "ko": "걷기엔 멀어. 택시 타는 게 좋겠어.",
      "en": "It is far to walk. I should take a taxi."
     },
     {
      "n": 17,
      "ko": "나 이 전화 받는 게 좋겠어.",
      "en": "I should answer the phone. (I should take this call /it.)"
     },
     {
      "n": 18,
      "ko": "여기 너무 예쁘다. 우리 사진 찍는 게 좋겠다.",
      "en": "It is very pretty/beautiful here. We should take a picture."
     },
     {
      "n": 19,
      "ko": "너가 먼저 미안하다고 말하는 게 좋겠어.",
      "en": "You should say sorry first."
     },
     {
      "n": 20,
      "ko": "우리가 먼저 사과하는 게 좋겠어.",
      "en": "We should apologize first."
     },
     {
      "n": 21,
      "ko": "너 그런 말 하는 거 안 좋아.",
      "en": "You shouldn't say that/like that."
     },
     {
      "n": 22,
      "ko": "거짓말하는 거 안 좋아.",
      "en": "You shouldn't lie."
     },
     {
      "n": 23,
      "ko": "나 너무 많이 안 먹는 게 좋겠다.",
      "en": "I shouldn't eat too much."
     },
     {
      "n": 24,
      "ko": "너 그런 거 하면 안 좋아.",
      "en": "You shouldn't do that/it."
     },
     {
      "n": 25,
      "ko": "너 안 늦는 게 좋겠다.",
      "en": "You shouldn't be late."
     },
     {
      "n": 26,
      "ko": "이거 잃어버리지 않는 게 좋겠어.",
      "en": "You shouldn't lose it."
     },
     {
      "n": 27,
      "ko": "너무 비싸다. 너 이거 안 사는 게 좋겠다.",
      "en": "It is very expensive. You shouldn't buy it."
     },
     {
      "n": 28,
      "ko": "이거 여기다 두지 않는 게 좋겠어.",
      "en": "You shouldn't put/leave it here."
     },
     {
      "n": 29,
      "ko": "우리 여기다 주차 안 하는 게 좋겠어.",
      "en": "We shouldn't park here."
     },
     {
      "n": 30,
      "ko": "우리 아무 말도 안 하는 게 낫겠다. 그게 더 나아.",
      "en": "We shouldn't say anything. It is better."
     },
     {
      "n": 31,
      "ko": "이거 하는 게 좋을까?",
      "en": "Should I do it/this?"
     },
     {
      "n": 32,
      "ko": "나 뭐 하는 게 좋을까?",
      "en": "What should I do?"
     },
     {
      "n": 33,
      "ko": "내가 이 모자 사는 게 나을까?",
      "en": "Should I buy this cap/hat?"
     },
     {
      "n": 34,
      "ko": "내가 뭐 사는 게 좋을까?",
      "en": "What should I buy?"
     },
     {
      "n": 35,
      "ko": "내가 지금 나가는 게 좋을까?",
      "en": "Should I leave/go out now?"
     },
     {
      "n": 36,
      "ko": "우리 언제 나가는 게 좋을까?",
      "en": "When should we leave/go out?"
     },
     {
      "n": 37,
      "ko": "내가 Carrie한테 물어보는 게 좋을까?",
      "en": "Should I ask Carrie?"
     },
     {
      "n": 38,
      "ko": "우리 Tim을 초대하는 게 나을까?",
      "en": "Should we invite Tim?"
     },
     {
      "n": 39,
      "ko": "이거 가지고 있는 게 나을까?",
      "en": "Should I keep it/this?"
     },
     {
      "n": 40,
      "ko": "우리 어느 거 보관하는 게 좋을까?",
      "en": "Which one should we keep?"
     },
     {
      "n": 41,
      "ko": "이거 어디다 보관하는 게 좋을까?",
      "en": "Where should I keep it/this?"
     },
     {
      "n": 42,
      "ko": "이것들 버리는 게 좋을까?",
      "en": "Should I throw them/these away?"
     },
     {
      "n": 43,
      "ko": "내가 Sandra한테 말하는 게 나을까?",
      "en": "Should I tell Sandra?"
     },
     {
      "n": 44,
      "ko": "Sandra한테 뭐라고 말하는 게 좋을까?",
      "en": "What should I tell Sandra?"
     },
     {
      "n": 45,
      "ko": "내가 몇 시에 전화하면 좋을까요?",
      "en": "What time should I call (you)?"
     },
     {
      "n": 46,
      "ko": "나 이제 뭐하면 좋을까?",
      "en": "What should I do now?"
     },
     {
      "n": 47,
      "ko": "우리 어느 길로 가는 게 좋을까?",
      "en": "Which way should we go?"
     },
     {
      "n": 48,
      "ko": "우리 어디 가는 게 좋을까?",
      "en": "Where should we go?"
     },
     {
      "n": 49,
      "ko": "내가 이거 어디다 두는 게 나을까?",
      "en": "Where should I put/leave it?"
     },
     {
      "n": 50,
      "ko": "뭐라고 말하면 좋을까?",
      "en": "What should I say?"
     },
     {
      "n": 51,
      "ko": "내 생각엔 너가 이거 하는 게 좋을 것 같아.",
      "en": "I think you should do it/this."
     },
     {
      "n": 52,
      "ko": "난 우리가 이거 저장하는 게 좋을 것 같아",
      "en": "I think we should save it/this."
     },
     {
      "n": 53,
      "ko": "너의 눈이 빨개. 너 지금 자는 게 좋을 것 같아.",
      "en": "Your eyes are red (Your eye is red). I think you should go to bed now."
     },
     {
      "n": 54,
      "ko": "이거 싸다. 내 생각엔 너가 이거 사는 게 좋을 것 같아.",
      "en": "It is cheap. I think you should buy it."
     },
     {
      "n": 55,
      "ko": "내 생각엔 너가 아는 게 좋을 것 같아.",
      "en": "I think you should know."
     },
     {
      "n": 56,
      "ko": "나 지금 가는 게 좋을 것 같아.",
      "en": "I think I should go now."
     },
     {
      "n": 57,
      "ko": "난 너가 이 책 읽는 게 좋을 것 같아.",
      "en": "I think you should read this book."
     },
     {
      "n": 58,
      "ko": "너가 일찍 도착하는 게 좋을 것 같아.",
      "en": "I think you should arrive early."
     },
     {
      "n": 59,
      "ko": "너 뭔 갈 먹는 게 좋을 것 같아.",
      "en": "I think you should eat something."
     },
     {
      "n": 60,
      "ko": "난 너가 잘 들었으면 좋을 것 같아.",
      "en": "I think you should listen carefully."
     },
     {
      "n": 61,
      "ko": "우리 그 애를 믿는 게 좋을 것 같아.",
      "en": "I think we should trust/believe him."
     },
     {
      "n": 62,
      "ko": "우리 미리 예약하는 게 좋을 것 같아. 안 그러면 오래 기다려야 돼.",
      "en": "I think we should book/make a reservation in advance. Otherwise, we have to wait"
     },
     {
      "n": 63,
      "ko": "우리 거기서 차를 렌트 하는 게 좋을 것 같아.",
      "en": "I think we should rent a car there."
     },
     {
      "n": 64,
      "ko": "난 더 연습하는 게 좋을 것 같아.",
      "en": "I think I should practice more."
     },
     {
      "n": 65,
      "ko": "여기 너무 조용한데. 음악을 트는 게 좋을 것 같아.",
      "en": "It is very quiet here. I think I should play (some) music."
     },
     {
      "n": 66,
      "ko": "며칠 동안 커피를 피하는 게 좋을 것 같아.",
      "en": "I think I should avoid coffee for a few days."
     },
     {
      "n": 67,
      "ko": "너 그 애와 직접 대화하는 게 좋을 것 같아.",
      "en": "I think you should talk to/speak to him/her in person."
     },
     {
      "n": 68,
      "ko": "너가 그 애를 용서하는 게 좋을 것 같아. 그 애를 위한 게 아니야. 널 위해서야.",
      "en": "I think you should forgive him/her. It is not for him/her. It is for you."
     },
     {
      "n": 69,
      "ko": "우리 지금 준비하는 게 좋을 것 같아.",
      "en": "I think we should get ready now."
     },
     {
      "n": 70,
      "ko": "우리 서두는 게 좋을 것 같아. 지금 택시 부를게.",
      "en": "I think we should hurry. I will call a taxi/cab."
     },
     {
      "n": 71,
      "ko": "우리 여기에 안 있는 게 좋을 것 같아.",
      "en": "I don't think we should stay/be here."
     },
     {
      "n": 72,
      "ko": "너가 지금 결정하지 않는 게 좋을 것 같아. 생각해 보는 게 좋겠어.",
      "en": "I don't think you should decide now. You should think about it."
     },
     {
      "n": 73,
      "ko": "난 너가 이거 안 하는 게 좋을 것 같아.",
      "en": "I don't think you should do it/this."
     },
     {
      "n": 74,
      "ko": "늦었어. 난 너가 지금 전화하지 않는 게 나을 것 같아.",
      "en": "It is late. I don't think you should call now."
     },
     {
      "n": 75,
      "ko": "난 너가 이거 버리지 않는 게 나을 거 같아.",
      "en": "I don't think you should throw it away."
     },
     {
      "n": 76,
      "ko": "난 너가 이거 여기다 두지 않는 게 좋을 것 같아.",
      "en": "I don't think you should put/leave it here."
     },
     {
      "n": 77,
      "ko": "너가 새 거 사지 않는 게 좋을 것 같아. 이거 고치는 게 좋겠어.",
      "en": "I don't think you should buy a new one. You should fix/repair it/this."
     },
     {
      "n": 78,
      "ko": "난 우리가 걱정하지 않는 게 더 나을 것 같아.",
      "en": "I don't think we should worry (about it)."
     },
     {
      "n": 79,
      "ko": "너가 이거 안보는 게 좋을 것 같아.",
      "en": "I don't think you should see/watch it."
     },
     {
      "n": 80,
      "ko": "우리가 내일 안가는 게 좋을 것 같아.",
      "en": "I don't think we should go tomorrow."
     },
     {
      "n": 81,
      "ko": "네 생각엔 내가 이거 사는 게 나을 거 같아?",
      "en": "Do you think I should buy it/this?"
     },
     {
      "n": 82,
      "ko": "내가 어느 거 사는 게 좋을 것 같아?",
      "en": "Which one do you think I should buy?"
     },
     {
      "n": 83,
      "ko": "네 생각엔 내가 뭘 하는 게 좋을 것 같아?",
      "en": "What do you think I should do?"
     },
     {
      "n": 84,
      "ko": "네 생각엔 내가 그냥 기다리는 게 좋을 것 같아?",
      "en": "Do you think I should just wait?"
     },
     {
      "n": 85,
      "ko": "내가 이거 지금 고치는 게 좋을 것 같아?",
      "en": "Do you think I should fix/repair it/this now?"
     },
     {
      "n": 86,
      "ko": "우리가 지금 신청하는 게 더 좋을 것 같니?",
      "en": "Do you think we should apply now?"
     },
     {
      "n": 87,
      "ko": "내가 뭐라고 하는 게 좋을 것 같아?",
      "en": "What do you think I should say?"
     },
     {
      "n": 88,
      "ko": "우리 어디 가는 게 좋을 것 같아?",
      "en": "Where do you think we should go?"
     },
     {
      "n": 89,
      "ko": "내가 어느 거로 사용하는 게 더 좋을 것 같아?",
      "en": "Which one do you think I should use?"
     },
     {
      "n": 90,
      "ko": "우리 언제 만나는 게 좋을 것 같아?",
      "en": "When do you think we should meet?"
     },
     {
      "n": 91,
      "ko": "어느 길로 제가 가는 게 좋을 것 같아요?",
      "en": "Which way do you think I should go?"
     },
     {
      "n": 92,
      "ko": "내가 뭘 공부하는 게 좋을 것 같아?",
      "en": "What do you think I should study?"
     },
     {
      "n": 93,
      "ko": "뭘 가져오는 게 좋을 것 같아?",
      "en": "What do you think I should bring?"
     },
     {
      "n": 94,
      "ko": "우리 그 애를 어떻게 돕는 게 좋을 것 같아?",
      "en": "How do you think we should help him/her?"
     },
     {
      "n": 95,
      "ko": "뭘 주문하는 게 좋을 것 같아요? 뭘 추천할 수 있나요?",
      "en": "What do you think I should order? What can you recommend?"
     },
     {
      "n": 96,
      "ko": "몇 개 사는 게 좋을 것 같아?",
      "en": "How many do you think I should buy/get?"
     },
     {
      "n": 97,
      "ko": "우리 이번엔 어디로 여행 가는 게 좋을 것 같아?",
      "en": "Where do you think we should travel this time?"
     },
     {
      "n": 98,
      "ko": "이걸 어떻게 해결하는 게 좋을 것 같아?",
      "en": "How do you think I should fix/solve it?"
     },
     {
      "n": 99,
      "ko": "내가 그걸 무시하는 게 좋을 것 같아?",
      "en": "Do you think I should ignore it?"
     },
     {
      "n": 100,
      "ko": "어느 책을 먼저 읽는 게 좋을 것 같아?",
      "en": "Which book do you think I should read first?"
     }
    ]
   },
   {
    "u": 9,
    "title": "Unit 9 · I would like to · ~하고 싶어요",
    "items": [
     {
      "n": 1,
      "ko": "지금 집에 가고 싶어요.",
      "en": "I'd like to go home now."
     },
     {
      "n": 2,
      "ko": "이거 가지고 싶어요.",
      "en": "I'd like to have it/this."
     },
     {
      "n": 3,
      "ko": "이거 사고 싶어요.",
      "en": "I'd like to buy it/this."
     },
     {
      "n": 4,
      "ko": "운동하고 싶어요.",
      "en": "I'd like to exercise/work out."
     },
     {
      "n": 5,
      "ko": "옷 갈아입고 싶어요.",
      "en": "I'd like to get changed."
     },
     {
      "n": 6,
      "ko": "그거 가서 가져오고 싶어요.",
      "en": "I'd like to go and bring/get it/that."
     },
     {
      "n": 7,
      "ko": "택시 타고 싶어요.",
      "en": "I'd like to take a taxi/cab."
     },
     {
      "n": 8,
      "ko": "조금 걷고 싶어요.",
      "en": "I'd like to walk for a while/a bit."
     },
     {
      "n": 9,
      "ko": "전 쉬고 싶어요.",
      "en": "I'd like to take a rest(=rest/have a rest/get some rest)/take a break."
     },
     {
      "n": 10,
      "ko": "너랑 내일 점심 먹고 싶어요.",
      "en": "I'd like to have/eat lunch with you tomorrow."
     },
     {
      "n": 11,
      "ko": "당신 다시 만나고 싶어요. 언제 우리 다시 만날 수 있을까요?",
      "en": "I'd like to meet you again. When can we meet again?"
     },
     {
      "n": 12,
      "ko": "영화 보고 싶어요.",
      "en": "I'd like to watch/see a movie."
     },
     {
      "n": 13,
      "ko": "너를 거기에 데려가고 싶어요.",
      "en": "I'd like to take you there."
     },
     {
      "n": 14,
      "ko": "이따가 다시 오고 싶어요.",
      "en": "I'd like to come back later."
     },
     {
      "n": 15,
      "ko": "나 이거 지금 쓰고 싶어요. 괜찮나요?",
      "en": "I'd like to use it/this. Is it ok?"
     },
     {
      "n": 16,
      "ko": "이거 벗고 싶어요.",
      "en": "I'd like to take it/this off."
     },
     {
      "n": 17,
      "ko": "이거 입고 싶어요.",
      "en": "I'd like to wear it / put it on."
     },
     {
      "n": 18,
      "ko": "이것들 신어보고 싶어요.",
      "en": "I'd like to try them/these on."
     },
     {
      "n": 19,
      "ko": "지금 시작하고 싶어요.",
      "en": "I'd like to begin/start now."
     },
     {
      "n": 20,
      "ko": "오늘 이거 다 하고 싶어요.",
      "en": "I'd like to finish it today."
     },
     {
      "n": 21,
      "ko": "늦잠 자고 싶어요.",
      "en": "I'd like to sleep in."
     },
     {
      "n": 22,
      "ko": "외식하고 싶어요.",
      "en": "I'd like to eat out."
     },
     {
      "n": 23,
      "ko": "사과하고 싶어요.",
      "en": "I'd like to apologize."
     },
     {
      "n": 24,
      "ko": "고맙다고 말하고 싶어요.",
      "en": "I'd like to say thank you/thanks."
     },
     {
      "n": 25,
      "ko": "미안하다고 말하고 싶어요.",
      "en": "I'd like to say sorry/I'm sorry."
     },
     {
      "n": 26,
      "ko": "내년에 결혼하고 싶어요.",
      "en": "I'd like to get married next year."
     },
     {
      "n": 27,
      "ko": "나 너한테 뭐 물어보고 싶어요.",
      "en": "I'd like to ask you something/ask something to you."
     },
     {
      "n": 28,
      "ko": "난 이걸 너한테 주고 싶어요. 선물이에요.",
      "en": "I'd like to give it/this to you (give you this). It is a gift/a present."
     },
     {
      "n": 29,
      "ko": "저 졸려요. 낮잠 자고 싶어요.",
      "en": "I am sleepy. I would like to take a nap."
     },
     {
      "n": 30,
      "ko": "지금 전화 끊고 싶어요.",
      "en": "I'd like to hang up now."
     },
     {
      "n": 31,
      "ko": "지금 혼자 있고 싶어요.",
      "en": "I'd like to be alone."
     },
     {
      "n": 32,
      "ko": "행복하고 싶어요.",
      "en": "I'd like to be happy."
     },
     {
      "n": 33,
      "ko": "성공하고 싶어요.",
      "en": "I'd like to be successful."
     },
     {
      "n": 34,
      "ko": "건강하고 싶어요.",
      "en": "I'd like to be healthy."
     },
     {
      "n": 35,
      "ko": "날씬하고 싶어요.",
      "en": "I'd like to be slim/slender."
     },
     {
      "n": 36,
      "ko": "강해지고 싶어요.",
      "en": "I'd like to be strong."
     },
     {
      "n": 37,
      "ko": "부자가 되고 싶어요.",
      "en": "I'd like to be rich."
     },
     {
      "n": 38,
      "ko": "유명해지고 싶어요.",
      "en": "I'd like to be famous."
     },
     {
      "n": 39,
      "ko": "의사가 되고 싶어요.",
      "en": "I'd like to be a doctor."
     },
     {
      "n": 40,
      "ko": "승자가 되고 싶어요.",
      "en": "I'd like to be a winner."
     },
     {
      "n": 41,
      "ko": "나 지금 아무것도 먹고 싶지 않아요.",
      "en": "I wouldn't like to eat anything now."
     },
     {
      "n": 42,
      "ko": "난 널 아프게(다치게) 하고 싶지 않아요.",
      "en": "I wouldn't like to hurt you."
     },
     {
      "n": 43,
      "ko": "후회하고 싶지 않아요.",
      "en": "I wouldn't like to regret."
     },
     {
      "n": 44,
      "ko": "거짓말하고 싶지 않아요.",
      "en": "I wouldn't like to lie."
     },
     {
      "n": 45,
      "ko": "나 지금은 아무데도 가고 싶지 않아요.",
      "en": "I wouldn't like to go anywhere now."
     },
     {
      "n": 46,
      "ko": "알고 싶지 않아요.",
      "en": "I wouldn't like to know."
     },
     {
      "n": 47,
      "ko": "그거 생각하고 싶지 않아요.",
      "en": "I wouldn't like to think about it/that."
     },
     {
      "n": 48,
      "ko": "이거 잃어버리고 싶지 않아요.",
      "en": "I wouldn't like to lose it/this."
     },
     {
      "n": 49,
      "ko": "그거 더 이상 기억하고 싶지 않아요.",
      "en": "I wouldn't like to remember it/that anymore."
     },
     {
      "n": 50,
      "ko": "실수하고 싶지 않아요.",
      "en": "I wouldn't like to make a mistake."
     },
     {
      "n": 51,
      "ko": "서두르고 싶지 않아요.",
      "en": "I wouldn't like to hurry/rush."
     },
     {
      "n": 52,
      "ko": "아무것도 바꾸고 싶지 않아요. 너는 완벽해.",
      "en": "I wouldn't like to change anything. You are perfect."
     },
     {
      "n": 53,
      "ko": "아무것도 약속하고 싶지 않아요.",
      "en": "I wouldn't like to promise anything."
     },
     {
      "n": 54,
      "ko": "지금 결정하고 싶지 않아요.",
      "en": "I wouldn't like to decide now."
     },
     {
      "n": 55,
      "ko": "포기하고 싶지 않아요.",
      "en": "I wouldn't like to give up."
     },
     {
      "n": 56,
      "ko": "늦고 싶지 않아요.",
      "en": "I wouldn't like to be late."
     },
     {
      "n": 57,
      "ko": "혼자 있고 싶지 않아요.",
      "en": "I wouldn't like to be alone."
     },
     {
      "n": 58,
      "ko": "화내고 싶지 않아요.",
      "en": "I wouldn't like to be angry/get angry."
     },
     {
      "n": 59,
      "ko": "우울해하고 싶지 않아요.",
      "en": "I wouldn't like to be depressed."
     },
     {
      "n": 60,
      "ko": "외롭고 싶지 않아요.",
      "en": "I wouldn't like to be lonely."
     },
     {
      "n": 61,
      "ko": "지금 갈래요?",
      "en": "Would you like to go now?"
     },
     {
      "n": 62,
      "ko": "언제 갈래요?",
      "en": "When would you like to go?"
     },
     {
      "n": 63,
      "ko": "어디 갈래요?",
      "en": "Where would you like to go?"
     },
     {
      "n": 64,
      "ko": "나랑 같이 갈래요?",
      "en": "Would you like to go/come with me?"
     },
     {
      "n": 65,
      "ko": "이거 하실래요?",
      "en": "Would you like to do it/this?"
     },
     {
      "n": 66,
      "ko": "뭐 하고 싶으세요?",
      "en": "What would you like to do?"
     },
     {
      "n": 67,
      "ko": "어디서 만날래요? 언제 만날래요?",
      "en": "Where would you like to meet? When would you like to meet?"
     },
     {
      "n": 68,
      "ko": "뭐 드실래요?",
      "en": "What would you like to eat/have?"
     },
     {
      "n": 69,
      "ko": "뭐 마실래요?",
      "en": "What would you like to drink/have?"
     },
     {
      "n": 70,
      "ko": "뭔가 드실래요?",
      "en": "Would you like to eat something?"
     },
     {
      "n": 71,
      "ko": "뭐라도 마실래요?",
      "en": "Would you like to drink something?"
     },
     {
      "n": 72,
      "ko": "뭐가 알고 싶으세요?",
      "en": "What would you like to know?"
     },
     {
      "n": 73,
      "ko": "여기서 잠깐만 기다릴래요? 금방 돌아올게요.",
      "en": "Would you like to wait here for a minute/second? I will come/be back soon."
     },
     {
      "n": 74,
      "ko": "뭐 주문하실래요?",
      "en": "What would you like to order?"
     },
     {
      "n": 75,
      "ko": "이거 어떻게 하고 싶으세요?",
      "en": "How would you like to do it/this?"
     },
     {
      "n": 76,
      "ko": "뭐 사고 싶으세요?",
      "en": "What would you like to buy?"
     },
     {
      "n": 77,
      "ko": "이거 어디다 두고 싶으세요?",
      "en": "Where would you like to put/leave it/this?"
     },
     {
      "n": 78,
      "ko": "이거 가지고 싶으세요?",
      "en": "Would you like to have it/this?"
     },
     {
      "n": 79,
      "ko": "언제 나한테 알려주고 싶으세요?",
      "en": "When would you like to let me know?"
     },
     {
      "n": 80,
      "ko": "생각해 보실래요?",
      "en": "Would you like to think about it?"
     },
     {
      "n": 81,
      "ko": "내일 저랑 브런치 하실래요?",
      "en": "Would you like to eat/have/do brunch with me tomorrow?"
     },
     {
      "n": 82,
      "ko": "몇 시에 오시고 싶으세요?",
      "en": "What time would you like to come?"
     },
     {
      "n": 83,
      "ko": "이번 주말에 뭐하고 싶으세요?",
      "en": "What would you like to do this weekend?"
     },
     {
      "n": 84,
      "ko": "이거 쓰실래요?",
      "en": "Would you like to use it?"
     },
     {
      "n": 85,
      "ko": "어디 앉고 싶으세요?",
      "en": "Where would you like to sit?"
     },
     {
      "n": 86,
      "ko": "뭔가 말하고 싶어요?",
      "en": "Would you like to say something?"
     },
     {
      "n": 87,
      "ko": "뭐 보고 싶으세요?",
      "en": "What would you like to see/watch?"
     },
     {
      "n": 88,
      "ko": "나한테 뭐 물어보고 싶으세요?",
      "en": "What would you like to ask me?"
     },
     {
      "n": 89,
      "ko": "언제 나랑 같이 저녁 먹을래요?",
      "en": "When would you like to have/eat dinner with me?"
     },
     {
      "n": 90,
      "ko": "우리와 함께 할래요?",
      "en": "Would you like to join us?"
     },
     {
      "n": 91,
      "ko": "잠깐 쉴래요?",
      "en": "Would you like to take a break?"
     },
     {
      "n": 92,
      "ko": "어디 여행하고 싶으세요?",
      "en": "Where would you like to travel?"
     },
     {
      "n": 93,
      "ko": "좋은 시간을 보내고 싶으세요?",
      "en": "Would you like to have a good time?"
     },
     {
      "n": 94,
      "ko": "저희의 세미나에 참석하고 싶으세요?",
      "en": "Would you like to attend our/the seminar?"
     },
     {
      "n": 95,
      "ko": "혼자 오고 싶어요 아님 누군가 데려오고 싶으세요?",
      "en": "Would you like to come alone or bring someone?"
     },
     {
      "n": 96,
      "ko": "건강해지고 싶으세요?",
      "en": "Would you like to be healthy?"
     },
     {
      "n": 97,
      "ko": "행복해지고 싶으세요?",
      "en": "Would you like to be happy?"
     },
     {
      "n": 98,
      "ko": "혼자 있고 싶어요?",
      "en": "Would you like to be alone?"
     },
     {
      "n": 99,
      "ko": "부자가 되고 싶으세요?",
      "en": "Would you like to be rich?"
     },
     {
      "n": 100,
      "ko": "성공하고 싶으세요?",
      "en": "Would you like to be successful?"
     }
    ]
   },
   {
    "u": 10,
    "title": "Unit 10 · be going to · ~할 거야",
    "items": [
     {
      "n": 1,
      "ko": "이거 너무 작아서, 큰 거로 하나 살 거야.",
      "en": "It is very small, so I am going to buy a big one."
     },
     {
      "n": 2,
      "ko": "우리 이따가 만날 거야. 우리 8시에 만날 거야.",
      "en": "We are going to meet later. We are going to meet at 8."
     },
     {
      "n": 3,
      "ko": "난 먼저 생각해 볼 거야. 그리고 나서 나중에 결정할거야.",
      "en": "I am going to think about it first. And then I am going to decide later."
     },
     {
      "n": 4,
      "ko": "나 너 보고 싶을 거야.",
      "en": "I am going to miss you."
     },
     {
      "n": 5,
      "ko": "나 금방 돌아올 거야.",
      "en": "I am going to come/be back soon."
     },
     {
      "n": 6,
      "ko": "나 지금 배 안고파. 이따 먹을 거야.",
      "en": "I am not hungry. I am going to eat later."
     },
     {
      "n": 7,
      "ko": "우리 다음달에 홍콩 갈 거야.",
      "en": "We are going to go to Hong Kong next month."
     },
     {
      "n": 8,
      "ko": "너 이거 필요할거야. 이거 가져가도 돼.",
      "en": "You are going to need it/this. You can take it."
     },
     {
      "n": 9,
      "ko": "이거 먹어봐. 너가 이거 좋아할 거야.",
      "en": "Try it/some. You are going to like it."
     },
     {
      "n": 10,
      "ko": "나 집에 있을 거야. 아무 때나 전화해도 돼.",
      "en": "I am going to be/stay at home. You can call anytime."
     },
     {
      "n": 11,
      "ko": "우리 이번 주말에 파티할거야. 올래?",
      "en": "We are going to have a party this weekend. Do you want to come?"
     },
     {
      "n": 12,
      "ko": "나 이거 까먹을 거야. 적어야 돼.",
      "en": "I am going to forget it/this. I have to write it."
     },
     {
      "n": 13,
      "ko": "나 이거 잃어버릴 거야. 잘 보관하는 게 좋을 것 같아.",
      "en": "I am going to lose it/this. I think I should keep it in a safe place."
     },
     {
      "n": 14,
      "ko": "나 그거 나중에 할거야. 그냥 둬도 돼.",
      "en": "I am going to do it later. You can just leave it."
     },
     {
      "n": 15,
      "ko": "우리가 이길 거야.",
      "en": "We are going to win."
     },
     {
      "n": 16,
      "ko": "너가 질 거야.",
      "en": "You are going to lose."
     },
     {
      "n": 17,
      "ko": "그 애가 이해 할거야. 난 100프로 확신해.",
      "en": "He/She is going to understand. I am 100 percent sure."
     },
     {
      "n": 18,
      "ko": "그 애가 오해 할거야.",
      "en": "He/She is going to misunderstand."
     },
     {
      "n": 19,
      "ko": "그 애가 금방 전화할 거야.",
      "en": "He/She is going to call soon."
     },
     {
      "n": 20,
      "ko": "너 이거 싫어 할거야.",
      "en": "You are going to hate it/this."
     },
     {
      "n": 21,
      "ko": "오늘밤에 비 올 거야.",
      "en": "It is going to rain tonight."
     },
     {
      "n": 22,
      "ko": "크리스마스에 눈 올 거야.",
      "en": "It is going to snow on Christmas."
     },
     {
      "n": 23,
      "ko": "그거 될 거야. 걱정 안 해도 돼.",
      "en": "It is going to work. You don't have to worry."
     },
     {
      "n": 24,
      "ko": "그거 아플 거야. 무서워.",
      "en": "It is going to hurt. I am scared/afraid./It is scary."
     },
     {
      "n": 25,
      "ko": "그거 오래 걸릴 거야.",
      "en": "It is going to take long."
     },
     {
      "n": 26,
      "ko": "그거 맞을 거야.",
      "en": "It is going to fit."
     },
     {
      "n": 27,
      "ko": "이거 금방 시작할거야.",
      "en": "It is going to begin/start soon."
     },
     {
      "n": 28,
      "ko": "이거 금방 끝날 거야.",
      "en": "It is going to end/finish soon."
     },
     {
      "n": 29,
      "ko": "이거 너한테 잘 어울릴 거야.",
      "en": "It is going to look good on you. / It is going to suit you."
     },
     {
      "n": 30,
      "ko": "또 이런 일이 일어날 거야.",
      "en": "It is going to happen again."
     },
     {
      "n": 31,
      "ko": "나 슬플 거야.",
      "en": "I am going to be sad."
     },
     {
      "n": 32,
      "ko": "너 괜찮을 거야. 모든 게 괜찮아.",
      "en": "You are going to be ok. Everything is ok/fine."
     },
     {
      "n": 33,
      "ko": "모든 게 괜찮을 거야.",
      "en": "Everything is going to be ok/fine."
     },
     {
      "n": 34,
      "ko": "우리 늦을 거야. 서둘러야 돼.",
      "en": "We are going to be late. We have to hurry."
     },
     {
      "n": 35,
      "ko": "그거 재미있을 거야.",
      "en": "It is going to be fun."
     },
     {
      "n": 36,
      "ko": "그거 비쌀 거야.",
      "en": "It is going to be expensive."
     },
     {
      "n": 37,
      "ko": "그게 문제일거야.",
      "en": "It is going to be a problem."
     },
     {
      "n": 38,
      "ko": "힘들 거야. 하지만 넌 잘 할거야.",
      "en": "It is going to be hard/difficult. But you are going to do well."
     },
     {
      "n": 39,
      "ko": "한 만원 정도 일거야.",
      "en": "It is going to be about ten thousand won."
     },
     {
      "n": 40,
      "ko": "추울 거야.",
      "en": "It is going to be cold."
     },
     {
      "n": 41,
      "ko": "나 그거 더 이상 생각하지 않을 거야.",
      "en": "I am not going to think about it anymore."
     },
     {
      "n": 42,
      "ko": "난 널 잊지 않을 거야.",
      "en": "I am not going to forget you."
     },
     {
      "n": 43,
      "ko": "우리 아무데도 안 갈 거야.",
      "en": "We are not going to go anywhere."
     },
     {
      "n": 44,
      "ko": "나 아무것도 안 살 거야.",
      "en": "I am not going to buy anything."
     },
     {
      "n": 45,
      "ko": "난 아무것도 안 할거야. 난 그냥 쉬고 싶어.",
      "en": "I am not going to do anything. I just want to rest/take a rest/have a rest."
     },
     {
      "n": 46,
      "ko": "난 그 애랑 다시는 얘기하지 않을 거야. 그 애는 너무해.",
      "en": "I am not going to talk to/speak to him again. He is mean."
     },
     {
      "n": 47,
      "ko": "나 아무 말도 안 할거야. 괜찮아.",
      "en": "I am not going to say anything. It is ok."
     },
     {
      "n": 48,
      "ko": "넌 이거 좋아하지 않을 거야. 조금 짜다.",
      "en": "You are not going to like it/this. It is a bit/a little/a little bit salty."
     },
     {
      "n": 49,
      "ko": "너 이거 필요하지 않을 거야. 버려도 돼.",
      "en": "You are not going to need it. You can throw it away."
     },
     {
      "n": 50,
      "ko": "비 안 올 거야. 이거 안 가져가도 돼.",
      "en": "It is not going to rain. You don't have to take it."
     },
     {
      "n": 51,
      "ko": "그거 안될 거야.",
      "en": "It is not going to work."
     },
     {
      "n": 52,
      "ko": "그거 안 아플 거야.",
      "en": "It is not going to hurt."
     },
     {
      "n": 53,
      "ko": "그거 금방 끝나지 않을 거야.",
      "en": "It is not going to finish/end soon."
     },
     {
      "n": 54,
      "ko": "오래 걸리지 않을 거야.",
      "en": "It is not going to take long."
     },
     {
      "n": 55,
      "ko": "우리 늦지 않을 거야.",
      "en": "We are not going to be late."
     },
     {
      "n": 56,
      "ko": "그거 쉽지 않을 거야. 힘내.",
      "en": "It is not going to be easy. Cheer up!"
     },
     {
      "n": 57,
      "ko": "비싸지 않을 거야.",
      "en": "It is not going to be expensive."
     },
     {
      "n": 58,
      "ko": "멀지 않을 거야.",
      "en": "It is not going to be far."
     },
     {
      "n": 59,
      "ko": "나쁘지 않을 거야.",
      "en": "It is not going to be bad."
     },
     {
      "n": 60,
      "ko": "어렵지 않을 거야.",
      "en": "It is not going to be hard/difficult."
     },
     {
      "n": 61,
      "ko": "지금 갈 거야?",
      "en": "Are you going to go now?"
     },
     {
      "n": 62,
      "ko": "몇 시에 도착할거야?",
      "en": "What time are you going to arrive?"
     },
     {
      "n": 63,
      "ko": "뭐라고 말할 거야?",
      "en": "What are you going to say?"
     },
     {
      "n": 64,
      "ko": "어디에 있을 거야?",
      "en": "Where are you going to stay/be?"
     },
     {
      "n": 65,
      "ko": "이제 뭐 할거야?",
      "en": "What are you going to do now?"
     },
     {
      "n": 66,
      "ko": "몇 시에 전화할거야?",
      "en": "What time are you going to call?"
     },
     {
      "n": 67,
      "ko": "너 이거 쓸 거야?",
      "en": "Are you going to use it/this?"
     },
     {
      "n": 68,
      "ko": "너도 갈 거야?",
      "en": "Are you going to go, too?"
     },
     {
      "n": 69,
      "ko": "그 애한테 어떻게 말할 거야?",
      "en": "How are you going to tell him?"
     },
     {
      "n": 70,
      "ko": "어느 거 살 거야?",
      "en": "Which one are you going to buy?"
     },
     {
      "n": 71,
      "ko": "너 그거 언제 할거야?",
      "en": "When are you going to do it/that?"
     },
     {
      "n": 72,
      "ko": "이걸로 뭐 할거야?",
      "en": "What are you going to do with it/this?"
     },
     {
      "n": 73,
      "ko": "뭐 주문할거야?",
      "en": "What are you going to order?"
     },
     {
      "n": 74,
      "ko": "언제 올 거야?",
      "en": "When are you going to come?"
     },
     {
      "n": 75,
      "ko": "이거 어떻게 할거야?",
      "en": "How are you going to do it/this?"
     },
     {
      "n": 76,
      "ko": "이거 어떻게 해결할거야?",
      "en": "How are you going to fix/solve it/this?"
     },
     {
      "n": 77,
      "ko": "결혼할거야?",
      "en": "Are you going to get married?"
     },
     {
      "n": 78,
      "ko": "그 애랑 헤어질 거야?",
      "en": "Are you going to break up with him/her?"
     },
     {
      "n": 79,
      "ko": "거기에 걸어갈 거야?",
      "en": "Are you going to walk there?"
     },
     {
      "n": 80,
      "ko": "내일 일할 거야?",
      "en": "Are you going to work tomorrow?"
     },
     {
      "n": 81,
      "ko": "이번 여름에 어디 갈 거야?",
      "en": "Where are you going to go this summer?"
     },
     {
      "n": 82,
      "ko": "전화 받을 거야?",
      "en": "Are you going to answer the phone? / Are you going to take it?"
     },
     {
      "n": 83,
      "ko": "언제 결정하고 알려줄 거야?",
      "en": "When are you going to decide and let me know?"
     },
     {
      "n": 84,
      "ko": "거기 어떻게 갈 거야?",
      "en": "How are you going to go there?"
     },
     {
      "n": 85,
      "ko": "비가 올까?",
      "en": "Is it going to rain?"
     },
     {
      "n": 86,
      "ko": "크리스마스에 눈이 올까?",
      "en": "Is it going to snow on Christmas?"
     },
     {
      "n": 87,
      "ko": "오래 걸릴까?",
      "en": "Is it going to take long?"
     },
     {
      "n": 88,
      "ko": "얼마나 오래 걸릴까?",
      "en": "How long is it going to take?"
     },
     {
      "n": 89,
      "ko": "될까?",
      "en": "Is it going to work?"
     },
     {
      "n": 90,
      "ko": "아플까?",
      "en": "Is it going to hurt?"
     },
     {
      "n": 91,
      "ko": "이게 (사이즈가) 맞을까?",
      "en": "Is it going to fit?"
     },
     {
      "n": 92,
      "ko": "이게 나한테 잘 어울릴까?",
      "en": "Is it going to look good on me? / Is it going to suit me?"
     },
     {
      "n": 93,
      "ko": "쉬울까?",
      "en": "Is it going to be easy?"
     },
     {
      "n": 94,
      "ko": "괜찮을까?",
      "en": "Is it going to be ok?"
     },
     {
      "n": 95,
      "ko": "이게 문제일까?",
      "en": "Is it going to be a problem?"
     },
     {
      "n": 96,
      "ko": "재미있을까?",
      "en": "Is it going to be fun/funny?"
     },
     {
      "n": 97,
      "ko": "힘들까?",
      "en": "Is it going to be hard/difficult?"
     },
     {
      "n": 98,
      "ko": "무거울까?",
      "en": "Is it going to be heavy?"
     },
     {
      "n": 99,
      "ko": "그게 가능할까?",
      "en": "Is it going to be possible?"
     },
     {
      "n": 100,
      "ko": "너 괜찮겠어?",
      "en": "Are you going to be ok?"
     }
    ]
   }
  ]
 },
 {
  "ch": 2,
  "title": "기초영어 1000문장 ② 말하기",
  "units": []
 },
 {
  "ch": 3,
  "title": "기초영어 1000문장 ③ 말하기",
  "units": []
 }
];
