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
  "units": [
   {
    "u": 1,
    "title": "Unit 1",
    "items": [
     {
      "n": 1,
      "ko": "우리 지금 영어 공부해.",
      "en": "We are studying English now."
     },
     {
      "n": 2,
      "ko": "나 지금 일하는데. 내가 나중에 전화해도 될까?",
      "en": "I am working now. Can I call (you back) later?"
     },
     {
      "n": 3,
      "ko": "그 애 지금 열심히 공부하고 있어.",
      "en": "He is studying/working (very) hard now."
     },
     {
      "n": 4,
      "ko": "우리 지금 집에 가.",
      "en": "We are going home now."
     },
     {
      "n": 5,
      "ko": "Sally 지금 오고 있어.",
      "en": "Sally is coming now."
     },
     {
      "n": 6,
      "ko": "나 지금 뭔가 만들고 있어.",
      "en": "I am making something now."
     },
     {
      "n": 7,
      "ko": "우리 지금 공항에 가.",
      "en": "We are driving/going to the airport now."
     },
     {
      "n": 8,
      "ko": "우리 지금 너 기다리고 있어.",
      "en": "We are waiting for you now."
     },
     {
      "n": 9,
      "ko": "쉬! 얘 지금 자.",
      "en": "Shush! He/She is sleeping now."
     },
     {
      "n": 10,
      "ko": "나 지금 샤워하는데. 금방 나갈게.",
      "en": "I am taking/having a shower now. I will be/go/come out soon."
     },
     {
      "n": 11,
      "ko": "너 늦게(까지) 일하네.",
      "en": "You are working late."
     },
     {
      "n": 12,
      "ko": "조금 배가 고파진다. 너는?",
      "en": "I am getting a (little) bit hungry. How/What about you?"
     },
     {
      "n": 13,
      "ko": "나 지금 점심 먹는데, 같이 먹을래?",
      "en": "I am eating/having lunch now. Do you want to/Would you like to join me?"
     },
     {
      "n": 14,
      "ko": "우리 지금 나가. 전화 끊어야 돼.",
      "en": "We are going out now. I have to hang up."
     },
     {
      "n": 15,
      "ko": "그 애 거짓말 하는거야.",
      "en": "He/She is lying."
     },
     {
      "n": 16,
      "ko": "그 애 지금 재미있게 놀고 있어.",
      "en": "He/She is having fun/a good time now."
     },
     {
      "n": 17,
      "ko": "미안, 제가 지금 운전 중이에요. 나중에 전화할게요.",
      "en": "(I'm) Sorry, I am driving now. I will call you (back) later."
     },
     {
      "n": 18,
      "ko": "나 지금 핸드폰 게임해. 재미있어.",
      "en": "I am playing a game on my phone now. It is fun."
     },
     {
      "n": 19,
      "ko": "우리 지금 뭔가 하고 있어서. 이거 내가 나중에 해도 될까?",
      "en": "We are doing something now. Can I do it later?"
     },
     {
      "n": 20,
      "ko": "(나) 농담하는 거야.",
      "en": "I am joking/kidding."
     },
     {
      "n": 21,
      "ko": "누군가 여기 앉아요(여기 자리있어요). 이거 가져가면 안 돼요.",
      "en": "Somebody/Someone is sitting here. You can't take it."
     },
     {
      "n": 22,
      "ko": "나 지금 내 핸드폰 찾아.",
      "en": "I am looking for my (cell/mobile) phone now."
     },
     {
      "n": 23,
      "ko": "저 이런거 찾는데요. 어디 있어요?",
      "en": "I am looking for something like this. Where is it?"
     },
     {
      "n": 24,
      "ko": "나 사진들 보고 있어. 내가 좋은 거 보여줄게.",
      "en": "I am looking at (some) photos/pictures. I will show you a good one."
     },
     {
      "n": 25,
      "ko": "전화 온다.",
      "en": "The/My/Your phone is ringing."
     },
     {
      "n": 26,
      "ko": "잠깐만. 나 지금 뭔가 생각하고 있어.",
      "en": "Hang on/Hold on. I am thinking about something."
     },
     {
      "n": 27,
      "ko": "나 그거 듣는 건데. 그냥 켜 놔줄래?",
      "en": "I am listening to it. Can you (just) leave it on?"
     },
     {
      "n": 28,
      "ko": "노력하고 있어. 그거 오늘까지 끝낼거야.",
      "en": "I am trying (hard/my best). I am going to finish it by today."
     },
     {
      "n": 29,
      "ko": "너 오늘 멋져 보여!",
      "en": "You are looking good today!"
     },
     {
      "n": 30,
      "ko": "우린 모든 걸 해보고있어. 우린 최선을 다하고 있어.",
      "en": "We are trying everything. We are doing/trying our best."
     },
     {
      "n": 31,
      "ko": "지금 비 와.",
      "en": "It is raining."
     },
     {
      "n": 32,
      "ko": "밖에 눈 와. 너무 아름다워.",
      "en": "It is snowing outside. It is so/very/really beautiful."
     },
     {
      "n": 33,
      "ko": "(점점) 나아지고 있어.",
      "en": "It is getting better."
     },
     {
      "n": 34,
      "ko": "(점점) 추워진다. 너 따뜻해?",
      "en": "It is getting cold. Are you warm (enough)?"
     },
     {
      "n": 35,
      "ko": "(점점) 나빠져.",
      "en": "It is getting worse."
     },
     {
      "n": 36,
      "ko": "어두워진다. 우리 지금 가는 게 좋을 것 같아.",
      "en": "It is getting dark. I think we should go now."
     },
     {
      "n": 37,
      "ko": "늦어진다. 나 지금 나갈게.",
      "en": "It is getting late. I will go out/leave now."
     },
     {
      "n": 38,
      "ko": "이거 (점점) 더 커져. 어떡하지? [=내가 뭘 할까?]",
      "en": "It is getting bigger. What shall/should I do?"
     },
     {
      "n": 39,
      "ko": "(점점) 더 어려워져.",
      "en": "It is getting harder."
     },
     {
      "n": 40,
      "ko": "이거 돼.",
      "en": "It is working."
     },
     {
      "n": 41,
      "ko": "나 그거 지금 안 봐(TV). 그거 꺼도 돼.",
      "en": "I am not watching it now. You can turn it off."
     },
     {
      "n": 42,
      "ko": "우리 지금 아무데도 안 가.",
      "en": "We are not going anywhere now."
     },
     {
      "n": 43,
      "ko": "나 지금 아무것도 안 해. 만날래?",
      "en": "I am not doing anything now. Do you want to(=Would you like to) meet?"
     },
     {
      "n": 44,
      "ko": "나 이거 지금 안 써. 너 써도 돼.",
      "en": "I am not using it now. You can use it."
     },
     {
      "n": 45,
      "ko": "아무도 여기 앉지 않아요. 이거 가져가도 돼요.",
      "en": "Nobody/No one is sitting here. You can take it."
     },
     {
      "n": 46,
      "ko": "나 우는거 아니야. 내 눈이 아파.",
      "en": "I am not crying. My eyes are sore. / My eye is sore. / I have sore eyes."
     },
     {
      "n": 47,
      "ko": "이 펜 안 나와. (=안 돼)",
      "en": "This pen is not working."
     },
     {
      "n": 48,
      "ko": "나 지금 안 자.",
      "en": "I am not sleeping now."
     },
     {
      "n": 49,
      "ko": "나 지금 일 안해. 통화할 수 있어.",
      "en": "I am not working now. I can talk."
     },
     {
      "n": 50,
      "ko": "나 오늘 일 안해. 쉬는 날이야.",
      "en": "I am not working today. It is my day off."
     },
     {
      "n": 51,
      "ko": "우리 아무도 기다리고 있지 않아.",
      "en": "We are not waiting for anyone/anybody."
     },
     {
      "n": 52,
      "ko": "나 그거 혼자 하는거 아니야. 내 친구들이 도와주고 있어.",
      "en": "I am not doing it alone. My friends are helping (me)."
     },
     {
      "n": 53,
      "ko": "나 지금 운전 중 아니야.",
      "en": "I am not driving now."
     },
     {
      "n": 54,
      "ko": "우리 네 얘기 하는거 아니야.",
      "en": "We are not talking about you."
     },
     {
      "n": 55,
      "ko": "나 아무것도 계획하고 있지 않아.",
      "en": "I am not planning anything."
     },
     {
      "n": 56,
      "ko": "나 농담하는 거 아니야. 나 진지해.",
      "en": "I am not kidding/joking. I am serious."
     },
     {
      "n": 57,
      "ko": "지금 더 이상 비 안 와. 그리고 이제 비 안 올거야. 우산 안 가져가도 돼.",
      "en": "It is not raining anymore. And it is not going to rain. You don't have to take an/the/your umbrella."
     },
     {
      "n": 58,
      "ko": "지금 눈 안 오는데.",
      "en": "It is not snowing now."
     },
     {
      "n": 59,
      "ko": "이거 안 돼.",
      "en": "It is not working."
     },
     {
      "n": 60,
      "ko": "그거 나아지고 있지 않아. 우리 그거에 대해 뭔가 해야돼.",
      "en": "It is not getting better. We have to do something about that/it."
     },
     {
      "n": 61,
      "ko": "너 지금 뭔가 하고 있니? 바쁘니?",
      "en": "Are you doing something now? Are you busy?"
     },
     {
      "n": 62,
      "ko": "지금 뭐 해?",
      "en": "What are you doing?"
     },
     {
      "n": 63,
      "ko": "지금 어디 가는 거야? 나도 가도 돼?",
      "en": "Where are you going? Can I come, too?"
     },
     {
      "n": 64,
      "ko": "지금 어딘가 가는 길이니? 바쁘니?",
      "en": "Are you going somewhere now? Are you in a hurry?"
     },
     {
      "n": 65,
      "ko": "너 내말 듣고 있는거야?",
      "en": "Are you listening to me?"
     },
     {
      "n": 66,
      "ko": "왜 웃어?",
      "en": "Why are you laughing?"
     },
     {
      "n": 67,
      "ko": "뭐 보고 있어? 그게 뭐야?",
      "en": "What are you looking at? What is it?"
     },
     {
      "n": 68,
      "ko": "너 뭐 찾고 있어?",
      "en": "What are you looking for?"
     },
     {
      "n": 69,
      "ko": "뭔가 찾니? 이거니?",
      "en": "Are you looking for something? Is this (one)?/Are you looking for this?"
     },
     {
      "n": 70,
      "ko": "누구 찾으세요? (누구 바꿔줄까요? / 누구 불러줄까요?)",
      "en": "Who are you looking for?"
     },
     {
      "n": 71,
      "ko": "너 왜 날 그렇게 쳐다보니? 그만해! (Stop it!)",
      "en": "Why are you looking at me like that? Stop it!"
     },
     {
      "n": 72,
      "ko": "너 뭔가 먹고 있니? 뭐 먹어?",
      "en": "Are you eating something? What are you eating?"
     },
     {
      "n": 73,
      "ko": "지금 저녁 요리해? 뭐 요리해?",
      "en": "Are you cooking/making dinner now? What are you cooking?"
     },
     {
      "n": 74,
      "ko": "무슨 생각하고 있니?",
      "en": "What are you thinking about?"
     },
     {
      "n": 75,
      "ko": "누군가 기다리니?",
      "en": "Are you waiting for someone/somebody?"
     },
     {
      "n": 76,
      "ko": "너 왜 울어? (너)괜찮아? (너)아파?",
      "en": "Why are you crying? Are you ok? Are you sick?"
     },
     {
      "n": 77,
      "ko": "무슨 말이에요? (뭘 말하는 거예요?)",
      "en": "What are you talking about/saying?"
     },
     {
      "n": 78,
      "ko": "지금 이거 쓰는 거예요? 제가 이거 빌려도 되나요?",
      "en": "Are you using it now? (Or) can I borrow it?"
     },
     {
      "n": 79,
      "ko": "지금 이 자리 맡아 놓는 거예요?",
      "en": "Are you saving this seat?"
     },
     {
      "n": 80,
      "ko": "지금 오고 있어? 어디야?",
      "en": "Are you coming now? Where are you?"
     },
     {
      "n": 81,
      "ko": "너 지금 장난해?",
      "en": "Are you kidding/joking?"
     },
     {
      "n": 82,
      "ko": "그 애 지금 뭐 해? 일해?",
      "en": "What is he/she doing now? Is he/she working?"
     },
     {
      "n": 83,
      "ko": "이거(TV) 너 지금 보는 거야? 아님 내가 꺼도 돼?",
      "en": "Are you watching it now? Or can I turn it off?"
     },
     {
      "n": 84,
      "ko": "너 누구랑 이야기 하는거야? 혼잣말 하는 거야?",
      "en": "Who are you talking to? Are you talking to yourself?"
     },
     {
      "n": 85,
      "ko": "너 뭐 입고 있어?",
      "en": "What are you wearing?"
     },
     {
      "n": 86,
      "ko": "우리 지금 어디 가는 거야?",
      "en": "Where are we going now?"
     },
     {
      "n": 87,
      "ko": "너 기분 좀 나아? 기분 어때?",
      "en": "Are you feeling better? How are you feeling?"
     },
     {
      "n": 88,
      "ko": "내가 지금 여기서 뭐 하는 거지?",
      "en": "What am I doing here?"
     },
     {
      "n": 89,
      "ko": "뭘 기다리는 거야? 그냥 해!",
      "en": "What are you waiting for? Just go for it/Just do it!"
     },
     {
      "n": 90,
      "ko": "뭐 하려고? (=뭐 하려고 하는 거야?)",
      "en": "What are you trying to do?"
     },
     {
      "n": 91,
      "ko": "비가 또 와?",
      "en": "Is it raining again?"
     },
     {
      "n": 92,
      "ko": "밖에 눈오니?",
      "en": "Is it snowing outside?"
     },
     {
      "n": 93,
      "ko": "그거 되니?",
      "en": "Is it working?"
     },
     {
      "n": 94,
      "ko": "나아지고 있니?",
      "en": "Is it getting better?"
     },
     {
      "n": 95,
      "ko": "그거 (점점) 커져?",
      "en": "Is it getting bigger?"
     },
     {
      "n": 96,
      "ko": "더 쉬워지고 있어?",
      "en": "Is it getting easier?"
     },
     {
      "n": 97,
      "ko": "그거 깜빡여? 켜져 있어?",
      "en": "Is it blinking? Is it on?"
     },
     {
      "n": 98,
      "ko": "이게 왜 깜빡이는 거지? 뭔가 잘못됐나?",
      "en": "Why is it blinking? Is something wrong?"
     },
     {
      "n": 99,
      "ko": "이게 왜 삐삐거리지? 이것 좀 봐줄래?",
      "en": "Why is it beeping? Can you have/take a look at it?"
     },
     {
      "n": 100,
      "ko": "이게 왜 이렇게 오래 걸리는 거지?",
      "en": "Why is it taking so/this long?"
     }
    ]
   },
   {
    "u": 2,
    "title": "Unit 2",
    "items": [
     {
      "n": 1,
      "ko": "우리 이거 필요해. 우리 이거 가져도 돼?",
      "en": "We need it. Can we have it?"
     },
     {
      "n": 2,
      "ko": "저 도움이 필요해요.",
      "en": "I need (some) help."
     },
     {
      "n": 3,
      "ko": "이해해요. 설명하지 않아도 돼요.",
      "en": "I understand. You don't have to explain (it to me)."
     },
     {
      "n": 4,
      "ko": "그 애는 날 이해해줘.",
      "en": "He/She understands me."
     },
     {
      "n": 5,
      "ko": "난 보통 7시에 일어나. I usually",
      "en": "I usually get up at 7 (o'clock)."
     },
     {
      "n": 6,
      "ko": "그 애는 항상 일찍 일어나. He always",
      "en": "He always gets up early."
     },
     {
      "n": 7,
      "ko": "나는 보통 12시에 자.",
      "en": "I usually go to bed at 12 (o'clock)."
     },
     {
      "n": 8,
      "ko": "그 애는 항상 잠을 늦게 자.",
      "en": "He always goes to bed late."
     },
     {
      "n": 9,
      "ko": "난 동물 좋아해.",
      "en": "I like/love animals."
     },
     {
      "n": 10,
      "ko": "Tom은 이거 좋아해.",
      "en": "Tom likes/loves this/it."
     },
     {
      "n": 11,
      "ko": "난 이게 더 좋아.",
      "en": "I prefer this (one). / I like this/it better."
     },
     {
      "n": 12,
      "ko": "Tom은 커피를 더 좋아해.",
      "en": "Tom prefers coffee."
     },
     {
      "n": 13,
      "ko": "난 이게 싫어.",
      "en": "I hate this/it."
     },
     {
      "n": 14,
      "ko": "Jim은 이거 싫어해.",
      "en": "Jim hates it/this."
     },
     {
      "n": 15,
      "ko": "이 가게는 9시에 열고, 6시에 닫아.",
      "en": "This store/shop opens at 9 and closes at 6."
     },
     {
      "n": 16,
      "ko": "난 이미 알아.",
      "en": "I already know. / I know already."
     },
     {
      "n": 17,
      "ko": "Jim도 알고있어.",
      "en": "Jim knows, too."
     },
     {
      "n": 18,
      "ko": "나 그거 있어.",
      "en": "I have it/that."
     },
     {
      "n": 19,
      "ko": "그 애 차(자동차) 있어.",
      "en": "He/She has a car."
     },
     {
      "n": 20,
      "ko": "우리 그거 할 시간 있어.",
      "en": "We have time to do it/that."
     },
     {
      "n": 21,
      "ko": "난 서울에 살고, 엄마는 경기도에 살아.",
      "en": "I live in Seoul, and my mom lives in Gyeonggi-do."
     },
     {
      "n": 22,
      "ko": "나 그거 진심이야.",
      "en": "I mean it/that."
     },
     {
      "n": 23,
      "ko": "나 그거 기억나.",
      "en": "I remember it/that."
     },
     {
      "n": 24,
      "ko": "그 애는 모든 걸 다 기억해.",
      "en": "He remembers everything."
     },
     {
      "n": 25,
      "ko": "난 그게 그리워.",
      "en": "I miss it/that."
     },
     {
      "n": 26,
      "ko": "그 애는 항상 그래.",
      "en": "He always does it/that."
     },
     {
      "n": 27,
      "ko": "나 거기 일주일에 한 번 가.",
      "en": "I go there once a week."
     },
     {
      "n": 28,
      "ko": "그 애 거기에 매일 다녀.",
      "en": "He goes there every day."
     },
     {
      "n": 29,
      "ko": "저희 신용카드 받아요.",
      "en": "We take/accept credit cards."
     },
     {
      "n": 30,
      "ko": "그 가게에서 양말도 팔아. 거기서 양말 살 수 있어.",
      "en": "The/That store/shop sells socks, too. You can buy socks there."
     },
     {
      "n": 31,
      "ko": "여기 비 많이 와.",
      "en": "It rains a lot here."
     },
     {
      "n": 32,
      "ko": "이거 아파.",
      "en": "It hurts."
     },
     {
      "n": 33,
      "ko": "이거 돼.",
      "en": "It works."
     },
     {
      "n": 34,
      "ko": "이거 쉽게 깨져. 조심해야 돼.",
      "en": "It breaks easily. You/We have to be careful."
     },
     {
      "n": 35,
      "ko": "그거 오래 걸려.",
      "en": "It takes long."
     },
     {
      "n": 36,
      "ko": "그거 돈 많이 들어.",
      "en": "It costs a lot (of money)."
     },
     {
      "n": 37,
      "ko": "여기 오는데 한 시간 걸려.",
      "en": "It takes an hour to come/get here."
     },
     {
      "n": 38,
      "ko": "그거 설치하는데 돈 많이 들어.",
      "en": "It costs a lot (of money) to install that."
     },
     {
      "n": 39,
      "ko": "그거 좋아 보여.",
      "en": "It looks good/great/nice."
     },
     {
      "n": 40,
      "ko": "그거 비싸 보여.",
      "en": "It looks expensive."
     },
     {
      "n": 41,
      "ko": "기억이 안나.",
      "en": "I don't remember (it)."
     },
     {
      "n": 42,
      "ko": "그 앤 아직 몰라.",
      "en": "He doesn't know yet."
     },
     {
      "n": 43,
      "ko": "난 그 애가 이해 안 돼.",
      "en": "I don't understand him/her."
     },
     {
      "n": 44,
      "ko": "제 친구는 김치 안 먹어요. 그 애한테 너무 매워.",
      "en": "My friend doesn't eat kimchi. It is too spicy/hot for him."
     },
     {
      "n": 45,
      "ko": "너 이거 필요없어. 안 사도 돼.",
      "en": "You don't need it/this. You don't have to buy it."
     },
     {
      "n": 46,
      "ko": "난 술 안 마셔.",
      "en": "I don't drink."
     },
     {
      "n": 47,
      "ko": "Jack은 담배 안 펴.",
      "en": "Jack doesn't smoke."
     },
     {
      "n": 48,
      "ko": "전 이거 안 좋아해요.",
      "en": "I don't like it/this."
     },
     {
      "n": 49,
      "ko": "그 애 티비 (원래) 안 봐.",
      "en": "He doesn't watch TV."
     },
     {
      "n": 50,
      "ko": "우린 거기 잘 안 가요.",
      "en": "We don't go there often. /We don't often go there."
     },
     {
      "n": 51,
      "ko": "나 지금 현찰이 없어.",
      "en": "I don't have cash now."
     },
     {
      "n": 52,
      "ko": "저 지금 시간이 없어요.",
      "en": "I don't have time now."
     },
     {
      "n": 53,
      "ko": "거기 갈 시간이 없어.",
      "en": "I don't have time to go there."
     },
     {
      "n": 54,
      "ko": "우리 그럴 시간 없어.",
      "en": "We don't have time to do that/it."
     },
     {
      "n": 55,
      "ko": "그 앤 시간이 없어. 그 앤 바빠.",
      "en": "He doesn't have time. He is busy."
     },
     {
      "n": 56,
      "ko": "나 그거 진심이 아니에요. 미안.",
      "en": "I don't mean it/that. I am sorry."
     },
     {
      "n": 57,
      "ko": "그거 상관없어.",
      "en": "It doesn't matter."
     },
     {
      "n": 58,
      "ko": "이거 안 돼요.",
      "en": "It doesn't work."
     },
     {
      "n": 59,
      "ko": "오래 안 걸려요.",
      "en": "It doesn't take long."
     },
     {
      "n": 60,
      "ko": "돈 별로 안 들어.",
      "en": "It doesn't cost much (money)."
     },
     {
      "n": 61,
      "ko": "이거 좋아해? 뭘 좋아해?",
      "en": "Do you like it/this? What do you like?"
     },
     {
      "n": 62,
      "ko": "Jenny는 이거 좋아해?",
      "en": "Does Jenny like it/this?"
     },
     {
      "n": 63,
      "ko": "넌 그 앨 믿어? 난 그 앨 못 믿겠어.",
      "en": "Do you believe him/her? I can't believe him/her."
     },
     {
      "n": 64,
      "ko": "그 앤 뭘 원하는 거야?",
      "en": "What does he/she want?"
     },
     {
      "n": 65,
      "ko": "어디 살아요?",
      "en": "Where do you live?"
     },
     {
      "n": 66,
      "ko": "어디서 일해?",
      "en": "Where do you work?"
     },
     {
      "n": 67,
      "ko": "Jack은 어디서 일해?",
      "en": "Where does Jack work?"
     },
     {
      "n": 68,
      "ko": "넌 뭐해? (원래)",
      "en": "What do you do (for a living)?"
     },
     {
      "n": 69,
      "ko": "그 앤 뭐해? (원래)",
      "en": "What does he do?"
     },
     {
      "n": 70,
      "ko": "몇 시에 일 끝나요? (=몇 시 퇴근해요?)",
      "en": "What time do you finish work?"
     },
     {
      "n": 71,
      "ko": "거기 자주 가니?",
      "en": "Do you go there often? /Do you often go there?"
     },
     {
      "n": 72,
      "ko": "너희는 몇 시에 닫아요? (=몇 시까지 하세요?)",
      "en": "What time do you close?"
     },
     {
      "n": 73,
      "ko": "그 사람 자주 보니? 얼마나 자주 봐?",
      "en": "Do you see him/her often?/Do you often see him/her? How often do you see him/her?"
     },
     {
      "n": 74,
      "ko": "Sam도 알고 있어?",
      "en": "Does Sam know, too?"
     },
     {
      "n": 75,
      "ko": "넌 어떻게 (뭘) 생각해?",
      "en": "What do you think?"
     },
     {
      "n": 76,
      "ko": "어느게 더 좋아?",
      "en": "Which one do you prefer/like better?"
     },
     {
      "n": 77,
      "ko": "이거 필요해? 나 이거 너한테 주고 싶어.",
      "en": "Do you need it/this? I want to/I'd like to give it to you."
     },
     {
      "n": 78,
      "ko": "(저) 어느게 필요해요?",
      "en": "Which one do I need?"
     },
     {
      "n": 79,
      "ko": "넌 내가 미워? 왜 날 미워해?",
      "en": "Do you hate me? Why do you hate me?"
     },
     {
      "n": 80,
      "ko": "나 보고 싶어?",
      "en": "Do you miss me?"
     },
     {
      "n": 81,
      "ko": "(너) 무슨 말(뜻)이에요?",
      "en": "What do you mean?"
     },
     {
      "n": 82,
      "ko": "그게 무슨 뜻이에요?",
      "en": "What does it/that mean?"
     },
     {
      "n": 83,
      "ko": "너 진심이야? 너 심각해?",
      "en": "Do you mean it? Are you serious?"
     },
     {
      "n": 84,
      "ko": "그래서, 너 나한테 원하는 게 뭐야?",
      "en": "So, what do you want from me?"
     },
     {
      "n": 85,
      "ko": "나 어때 보여? (나) 괜찮아 보여?",
      "en": "How do I look? Do I look ok?"
     },
     {
      "n": 86,
      "ko": "시간 있어?",
      "en": "Do you have time?"
     },
     {
      "n": 87,
      "ko": "여기 올 시간 있어?",
      "en": "Do you have time to come here?"
     },
     {
      "n": 88,
      "ko": "나랑 통화할 시간 있어?",
      "en": "Do you have time to talk to/with me?"
     },
     {
      "n": 89,
      "ko": "저 화장실 갈 시간 있나요?",
      "en": "Do I have time to go to the bathroom/toilet/restroom?"
     },
     {
      "n": 90,
      "ko": "공부할 시간 있니? 난 아무것도 할 시간이 없는데.",
      "en": "Do you have time to study? I don't have time to do anything."
     },
     {
      "n": 91,
      "ko": "(그게) 상관있나요? (=중요한가요?)",
      "en": "Does it matter?"
     },
     {
      "n": 92,
      "ko": "그거 돼?",
      "en": "Does it work?"
     },
     {
      "n": 93,
      "ko": "그거 아파?",
      "en": "Does it hurt?"
     },
     {
      "n": 94,
      "ko": "그거 쉽게 깨져?",
      "en": "Does it break easily?"
     },
     {
      "n": 95,
      "ko": "그런 일 자주 있어?",
      "en": "Does it happen often? /Does it often happen?"
     },
     {
      "n": 96,
      "ko": "그거 (사이즈) 맞아?",
      "en": "Does it fit?"
     },
     {
      "n": 97,
      "ko": "그거 오래 걸려?",
      "en": "Does it take long?"
     },
     {
      "n": 98,
      "ko": "그거 얼마나 오래 걸려?",
      "en": "How long does it take?"
     },
     {
      "n": 99,
      "ko": "거기 가는데 얼마나 오래 걸려?",
      "en": "How long does it take to go/get there?"
     },
     {
      "n": 100,
      "ko": "그거 얼마 들어요?",
      "en": "How much does it cost?"
     }
    ]
   },
   {
    "u": 3,
    "title": "Unit 3",
    "items": [
     {
      "n": 1,
      "ko": "그 애가 좋아할 걸.",
      "en": "He/She will like/love it."
     },
     {
      "n": 2,
      "ko": "너 Jennifer 만나봐야 돼. 너네 잘 맞을 걸.",
      "en": "You have to meet Jennifer. You (two/guys) will get along."
     },
     {
      "n": 3,
      "ko": "너 시간 충분히 있을 거야. 걱정 안 해도 돼.",
      "en": "You will have enough time. You don't have to worry."
     },
     {
      "n": 4,
      "ko": "그 애한테 물어봐도 돼. 그 애가 도와줄 걸.",
      "en": "You/We/I can ask her/him. He/She will help."
     },
     {
      "n": 5,
      "ko": "너 이거 필요할 거야. 가져가도 돼.",
      "en": "You will need it/this. You can take it."
     },
     {
      "n": 6,
      "ko": "걔네들 금방 도착할 거야.",
      "en": "They will get here/arrive soon."
     },
     {
      "n": 7,
      "ko": "이거 입어 봐. 너한테 잘 어울릴 걸.",
      "en": "Try it/this on. It will look good on you. /It'll suit you."
     },
     {
      "n": 8,
      "ko": "그거 쉬울 거야.",
      "en": "It will be easy."
     },
     {
      "n": 9,
      "ko": "그거 똑같을 걸.",
      "en": "It will be identical/the same."
     },
     {
      "n": 10,
      "ko": "그 애 바쁠 거야. 우리 그 애 귀찮게 안 하는 게 좋겠다.",
      "en": "He/She will be busy. We shouldn't bother him/her."
     },
     {
      "n": 11,
      "ko": "그거 (아마) 쌀 거야.",
      "en": "It will be cheap."
     },
     {
      "n": 12,
      "ko": "그거 그때 쯤이면 다 될 거야.",
      "en": "It will be ready by then."
     },
     {
      "n": 13,
      "ko": "이따 비 올 걸.",
      "en": "It will rain later."
     },
     {
      "n": 14,
      "ko": "이거 오래 걸릴 거야.",
      "en": "It will take long."
     },
     {
      "n": 15,
      "ko": "이거 돈 많이 들 거야.",
      "en": "It will cost a lot (of money)."
     },
     {
      "n": 16,
      "ko": "그거 될 거야. 난 확신해.",
      "en": "It will work. I am sure."
     },
     {
      "n": 17,
      "ko": "그거 또 고장날 거야.",
      "en": "It will break down again."
     },
     {
      "n": 18,
      "ko": "모든 게 괜찮을 거야.",
      "en": "Everything will be ok."
     },
     {
      "n": 19,
      "ko": "그게 문제일 거야.",
      "en": "It will be a problem."
     },
     {
      "n": 20,
      "ko": "그거 곧 사라질 거야.",
      "en": "It will disappear soon."
     },
     {
      "n": 21,
      "ko": "그 애 그거 안 좋아할 거야.",
      "en": "He/She won't like it/that."
     },
     {
      "n": 22,
      "ko": "너 그거 필요 없을 걸.",
      "en": "You won't need it/that."
     },
     {
      "n": 23,
      "ko": "쉽지 않을 걸.",
      "en": "It won't be easy."
     },
     {
      "n": 24,
      "ko": "그게 도움이 안 될 걸.",
      "en": "It won't help. / It won't be helpful."
     },
     {
      "n": 25,
      "ko": "눈 안 올 거야.",
      "en": "It won't snow."
     },
     {
      "n": 26,
      "ko": "오래 안 걸릴 걸.",
      "en": "It won't take long."
     },
     {
      "n": 27,
      "ko": "돈 별로 안 들 거야.",
      "en": "It won't cost much (money)."
     },
     {
      "n": 28,
      "ko": "아프지 않을 거야.",
      "en": "It won't hurt."
     },
     {
      "n": 29,
      "ko": "그거 안 될 걸.",
      "en": "It won't work."
     },
     {
      "n": 30,
      "ko": "이런 일 다시는 없을 거야. 사과해.",
      "en": "It won't happen again. I apologize."
     },
     {
      "n": 31,
      "ko": "다섯 시에 집에 있을 거야?",
      "en": "Will you be (at) home at 5?"
     },
     {
      "n": 32,
      "ko": "몇 시에 돌아올 거야?",
      "en": "What time will you come/be back?"
     },
     {
      "n": 33,
      "ko": "비가 올까?",
      "en": "Will it rain?"
     },
     {
      "n": 34,
      "ko": "이게 될까? 넌 어떻게 생각해?",
      "en": "Will it work? What do you think?"
     },
     {
      "n": 35,
      "ko": "오래 걸릴까? 얼마나 오래 걸릴까? 나 시간 없는데.",
      "en": "Will it take long? How long will it take? I don't have (much) time."
     },
     {
      "n": 36,
      "ko": "이게 또 바뀔까? 그거 자주 바뀌어.",
      "en": "Will it change again? It often changes. / It changes often."
     },
     {
      "n": 37,
      "ko": "그게 나한테 잘 어울릴까? 그랬으면 좋겠다.",
      "en": "Will it look good on me? / Will it suit me? I hope so."
     },
     {
      "n": 38,
      "ko": "그런 일이 또 생길까? 안 그랬으면 좋겠다.",
      "en": "Will it happen again? I hope not."
     },
     {
      "n": 39,
      "ko": "너 괜찮겠어? 나 너 걱정돼.",
      "en": "Will you be ok? I am worried about you."
     },
     {
      "n": 40,
      "ko": "5시 괜찮을까?",
      "en": "Will 5 (o'clock) be ok?"
     },
     {
      "n": 41,
      "ko": "난 오늘 밤에 집에 있을 것 같아. 아무 때나 전화해도 돼.",
      "en": "I think I'll be/stay (at) home tonight. You can call any time."
     },
     {
      "n": 42,
      "ko": "그 애들 곧 결혼할 것 같아.",
      "en": "I think they'll get married soon."
     },
     {
      "n": 43,
      "ko": "Jim이 도와줄 것 같아. 그 앤 항상 'yes'라고 말해.",
      "en": "I think Jim will help. He always says \"yes\"."
     },
     {
      "n": 44,
      "ko": "모든 게 잘 될 것 같아.",
      "en": "I think everything will work out (well)."
     },
     {
      "n": 45,
      "ko": "너 성공할 것 같아. 난 널 믿어!",
      "en": "I think you will succeed. I believe in you!"
     },
     {
      "n": 46,
      "ko": "두 시간 정도 걸릴 것 같아요.",
      "en": "I think it'll take about two hours."
     },
     {
      "n": 47,
      "ko": "20불 들 것 같아. 지금 계산하실래요?",
      "en": "I think it'll cost 20 dollars. Would you like to(=Do you want to) pay now?"
     },
     {
      "n": 48,
      "ko": "그거 고치는데 비쌀 것 같아.",
      "en": "I think it'll be expensive to fix (that)."
     },
     {
      "n": 49,
      "ko": "이게 더 나을 것 같아.",
      "en": "I think it/this one will be better."
     },
     {
      "n": 50,
      "ko": "쉬워질 것 같아.",
      "en": "I think it'll get easier."
     },
     {
      "n": 51,
      "ko": "Paul은 안 올 것 같아.",
      "en": "I don't think Paul will come."
     },
     {
      "n": 52,
      "ko": "난 안 갈 것 같아.",
      "en": "I don't think I'll go."
     },
     {
      "n": 53,
      "ko": "내일 테니스 안 칠 것 같아. 몸이 안 좋아.",
      "en": "I don't think I'll play tennis tomorrow. I am not (feeling) well."
     },
     {
      "n": 54,
      "ko": "넌 문제 없을 것 같아.",
      "en": "I don't think you'll have a problem."
     },
     {
      "n": 55,
      "ko": "그 애 그거 없을 것 같아.",
      "en": "I don't think he/she'll have it/that."
     },
     {
      "n": 56,
      "ko": "이거 멈추지 않을 것 같아.",
      "en": "I don't think it'll stop."
     },
     {
      "n": 57,
      "ko": "너가 후회할 것 같지 않아. 그냥 해!",
      "en": "I don't think you'll regret (it). Just do it! / Just go for it!"
     },
     {
      "n": 58,
      "ko": "그 애 그거 잊어버리지 않을 것 같아.",
      "en": "I don't think he'll forget (about) it/that."
     },
     {
      "n": 59,
      "ko": "나아질 것 같지 않아.",
      "en": "I don't think it'll get better."
     },
     {
      "n": 60,
      "ko": "더 나빠질 것 같지 않아.",
      "en": "I don't think it'll get worse."
     },
     {
      "n": 61,
      "ko": "넌 언제 도착할 것 같아?",
      "en": "When do you think you'll arrive/get here?"
     },
     {
      "n": 62,
      "ko": "그 애가 뭐라고 할 것 같아?",
      "en": "What do you think he/she will say?"
     },
     {
      "n": 63,
      "ko": "전 뭐가 필요할 것 같아요?",
      "en": "What do you think I'll need?"
     },
     {
      "n": 64,
      "ko": "넌 뭘 할 것 같아?",
      "en": "What do you think you'll do?"
     },
     {
      "n": 65,
      "ko": "넌 어디 갈 것 같아?",
      "en": "Where do you think you'll go?"
     },
     {
      "n": 66,
      "ko": "그게 (사이즈가) 맞을 것 같아?",
      "en": "Do you think it'll fit?"
     },
     {
      "n": 67,
      "ko": "그게 (무게가) 얼마 나갈 거 같아?",
      "en": "How much do you think it'll weigh?"
     },
     {
      "n": 68,
      "ko": "넌 거기서 얼마나 오래 있을 것 같아?",
      "en": "How long do you think you'll stay there?"
     },
     {
      "n": 69,
      "ko": "우리 쇼핑 갈 시간 있을 것 같아?",
      "en": "Do you think we'll have time to go shopping?"
     },
     {
      "n": 70,
      "ko": "넌 내가 포기할 것 같아? 난 그렇게 생각하지 않아.",
      "en": "Do you think I'll give up? I don't think so."
     },
     {
      "n": 71,
      "ko": "넌 내가 잘 할 것 같아? 왜 그렇게 생각해?",
      "en": "Do you think I'll do (it) well? Why do you think so?"
     },
     {
      "n": 72,
      "ko": "얼마나 오래 걸릴 것 같아요?",
      "en": "How long do you think it'll take?"
     },
     {
      "n": 73,
      "ko": "얼마 들 것 같아요? 대략?",
      "en": "How much do you think it'll cost? Roughly?"
     },
     {
      "n": 74,
      "ko": "그게 가능할 것 같니?",
      "en": "Do you think it'll be possible?"
     },
     {
      "n": 75,
      "ko": "그게 문제일 것 같니?",
      "en": "Do you think it'll be a problem?"
     },
     {
      "n": 76,
      "ko": "그게 언제일 것 같아요?",
      "en": "When do you think it'll be?"
     },
     {
      "n": 77,
      "ko": "이게 언제 다 될 것 같아요?",
      "en": "When do you think it'll be ready?"
     },
     {
      "n": 78,
      "ko": "그게 좋은 생각일 것 같아?",
      "en": "Do you think it'll be a good idea?"
     },
     {
      "n": 79,
      "ko": "그게 얼마일 것 같아요?",
      "en": "How much do you think it'll be?"
     },
     {
      "n": 80,
      "ko": "이거면 충분할 것 같아?",
      "en": "Do you think it'll be enough?"
     },
     {
      "n": 81,
      "ko": "내가 Jenny 보면, 그 애한테 말할게.",
      "en": "When/If I see Jenny, I will tell her."
     },
     {
      "n": 82,
      "ko": "너 올 때까지, 내가 여기서 기다릴게.",
      "en": "Until you come/get here, I will wait here."
     },
     {
      "n": 83,
      "ko": "나 집에가면, 너한테 전화할게.",
      "en": "When I go home, I will call you."
     },
     {
      "n": 84,
      "ko": "그 애 오면, 내가 너한테 알려줄게.",
      "en": "When/if he comes, I will let you know."
     },
     {
      "n": 85,
      "ko": "내가 나가기 전에, 문자할게.",
      "en": "Before I go out, I will text you."
     },
     {
      "n": 86,
      "ko": "이거 다하고 나서, 그거 치울게.",
      "en": "After I do/finish it, I will clean it."
     },
     {
      "n": 87,
      "ko": "내가 집에 가자마자, 이메일 보낼게요.",
      "en": "As soon as I go/get home, I will email you."
     },
     {
      "n": 88,
      "ko": "너가 그 애한테 물어보면, 그 애가 도와줄 걸.",
      "en": "If you ask him/her, he/she will help."
     },
     {
      "n": 89,
      "ko": "그 애 오는대로, 내가 그 애한테 말할게.",
      "en": "As soon as he/she comes/gets here, I will tell him/her."
     },
     {
      "n": 90,
      "ko": "내가 일 끝나기 전에, 이거 처리할게.",
      "en": "Before I finish work, I will take care of/handle it."
     },
     {
      "n": 91,
      "ko": "나 집에 가면, 바로 잘 거야.",
      "en": "When I go home, I will go straight to bed."
     },
     {
      "n": 92,
      "ko": "내가 돌아올 때, 선물 사올게. 약속해.",
      "en": "When I come back, I will buy a present/gift. I promise."
     },
     {
      "n": 93,
      "ko": "너가 결정할 때까지, 기다릴게.",
      "en": "Until you decide, I will wait."
     },
     {
      "n": 94,
      "ko": "도움이 필요하면, 알려줄래요? 돕고 싶어요.",
      "en": "If/When you need help, can you let me know? I'd like to(=I want to) help."
     },
     {
      "n": 95,
      "ko": "너 그거 하면, 후회할 거야. 안 하는 게 좋을 것 같아.",
      "en": "If you do it, you will regret it. I don't think you should do it."
     },
     {
      "n": 96,
      "ko": "내가 그거 하기 전에, 다시 확인할게.",
      "en": "Before I do it, I will check it again."
     },
     {
      "n": 97,
      "ko": "집에 도착하자마자, 문자해줄래?",
      "en": "As soon as you arrive/get home, can you text me?"
     },
     {
      "n": 98,
      "ko": "너 그 애 보면, 그 애한테 말 좀 해줄래?",
      "en": "When/If you see him/her, can you tell him/her?"
     },
     {
      "n": 99,
      "ko": "이거 다 한 후에, 날 불러줄래?",
      "en": "After you finish/do it, can you call me?"
     },
     {
      "n": 100,
      "ko": "너 준비되면, 메시지 남겨줄래?",
      "en": "When you are ready, can you leave (me) a message?"
     }
    ]
   },
   {
    "u": 4,
    "title": "Unit 4",
    "items": [
     {
      "n": 1,
      "ko": "우리 이따가 쇼핑 갈 수도 있어.",
      "en": "We may go shopping later."
     },
     {
      "n": 2,
      "ko": "너 그거 금방 받을 수도 있어.",
      "en": "You may get/receive it soon."
     },
     {
      "n": 3,
      "ko": "너 속이 안 좋을 수도 있어.",
      "en": "You may feel sick."
     },
     {
      "n": 4,
      "ko": "너 후회할지도 몰라.",
      "en": "You may regret it."
     },
     {
      "n": 5,
      "ko": "나 오늘 일 늦게 끝날지도 몰라.",
      "en": "I may finish work late today."
     },
     {
      "n": 6,
      "ko": "너가 웃을지도 몰라. 하지만, 난 심각해.",
      "en": "You may laugh. But I am serious."
     },
     {
      "n": 7,
      "ko": "우리 운이 좋을 수도 있어. 누가 알아?",
      "en": "We may be lucky. Who knows?"
     },
     {
      "n": 8,
      "ko": "너가 맞을지도 몰라.",
      "en": "You may be right."
     },
     {
      "n": 9,
      "ko": "내가 틀릴 수도 있어.",
      "en": "I may be wrong."
     },
     {
      "n": 10,
      "ko": "그 애 아플지도 몰라.",
      "en": "He/She may be sick."
     },
     {
      "n": 11,
      "ko": "나 다음주에 태국에 갈지도 몰라. 내 친구 중 한 명이 거기 살아.",
      "en": "I might go to Thailand next week. A friend of mine lives there."
     },
     {
      "n": 12,
      "ko": "우리 내일 늦게 올 수도 있어. 우리 없이 시작해도 돼.",
      "en": "We might be/come late tomorrow. You can start/begin without us."
     },
     {
      "n": 13,
      "ko": "Danny가 이거 좋아할지도 몰라.",
      "en": "Danny might like it/this."
     },
     {
      "n": 14,
      "ko": "우리 이거 나중에 필요할지도 몰라. 그냥 가지고 있을 거야.",
      "en": "We might need it/this later. I am just going to keep it."
     },
     {
      "n": 15,
      "ko": "우리 이번 주말에 수영장에 갈지도 몰라. 너도 올래?",
      "en": "We might go to the (swimming) pool this weekend. Do you want to/ Would you like to come, too?"
     },
     {
      "n": 16,
      "ko": "Tim도 올 수도 있어.",
      "en": "Tim might come, too."
     },
     {
      "n": 17,
      "ko": "Simon이 일찍 올지도 몰라. 그 앤 항상 일찍 와.",
      "en": "Simon might come early. He always comes early."
     },
     {
      "n": 18,
      "ko": "너 그거 잃어버릴지도 몰라. 집에 두고 가는 게 나아.",
      "en": "You might lose it. It is better to leave it at home."
     },
     {
      "n": 19,
      "ko": "나 그거 까먹을지도 몰라. 나한테 이따 다시 말해줄래?",
      "en": "I might forget (about) it/that. Can you remind me later?"
     },
     {
      "n": 20,
      "ko": "나 지금 못 나가. 중요한 전화를 기다리고 있어. 그 애가 금방 전화할지도 몰라.",
      "en": "I can't leave/go out now. I am waiting for an important (phone) call. He might call soon."
     },
     {
      "n": 21,
      "ko": "오늘 오후에 비가 올지도 몰라.",
      "en": "It may rain this afternoon."
     },
     {
      "n": 22,
      "ko": "내일 눈이 많이 올지도 몰라.",
      "en": "It may snow a lot tomorrow."
     },
     {
      "n": 23,
      "ko": "이거 금방 시작할지도 몰라.",
      "en": "It may begin/start soon."
     },
     {
      "n": 24,
      "ko": "이거 금방 끝날 수도 있어.",
      "en": "It may finish/end soon."
     },
     {
      "n": 25,
      "ko": "오래 걸릴 수도 있어.",
      "en": "It may take long."
     },
     {
      "n": 26,
      "ko": "돈이 많이 들지도 몰라.",
      "en": "It may cost a lot (of money)."
     },
     {
      "n": 27,
      "ko": "그게 오늘 저녁에 올지도 몰라.",
      "en": "It may come this evening."
     },
     {
      "n": 28,
      "ko": "너의 계획이 될지도 몰라. 해보는 게 좋을 것 같아.",
      "en": "Your plan may work. I think you should try (it)."
     },
     {
      "n": 29,
      "ko": "그거 또 바뀔지도 몰라.",
      "en": "It may change again."
     },
     {
      "n": 30,
      "ko": "그거 또 고장날지도 몰라.",
      "en": "It may break down again."
     },
     {
      "n": 31,
      "ko": "위험할지도 몰라.",
      "en": "It might be dangerous."
     },
     {
      "n": 32,
      "ko": "너무 독할 수도 있어.",
      "en": "It might be too/very/so strong."
     },
     {
      "n": 33,
      "ko": "비어 있을지도 몰라.",
      "en": "It might be empty."
     },
     {
      "n": 34,
      "ko": "가짜일지도 몰라.",
      "en": "It might be fake."
     },
     {
      "n": 35,
      "ko": "이상할지도 몰라.",
      "en": "It might be weird/strange."
     },
     {
      "n": 36,
      "ko": "내 잘못일지도 몰라.",
      "en": "It might be my fault."
     },
     {
      "n": 37,
      "ko": "뭔가 잘못 됐는지도 몰라.",
      "en": "Something might be wrong."
     },
     {
      "n": 38,
      "ko": "비쌀지도 몰라.",
      "en": "It might be expensive."
     },
     {
      "n": 39,
      "ko": "그게 가능할지도 몰라.",
      "en": "It might be possible."
     },
     {
      "n": 40,
      "ko": "어색할지도 몰라.",
      "en": "It might be awkward."
     },
     {
      "n": 41,
      "ko": "난 거기 안 갈지도 몰라. 솔직히, 가고 싶지 않아.",
      "en": "I may not go there. To be honest/frank, (=Honestly/Frankly) I don't want to(=wouldn't like to) go."
     },
     {
      "n": 42,
      "ko": "우린 거기 오래 안 있을지도 몰라.",
      "en": "We may not stay/be there long."
     },
     {
      "n": 43,
      "ko": "그 애 그거 안 가져올지도 몰라.",
      "en": "He/She may not bring it."
     },
     {
      "n": 44,
      "ko": "우리 이사 안 갈지도 몰라.",
      "en": "We may not move."
     },
     {
      "n": 45,
      "ko": "그 애가 그거 안 좋아할지도 몰라.",
      "en": "He/She may not like it/that."
     },
     {
      "n": 46,
      "ko": "그 애가 동의하지 않을지도 몰라.",
      "en": "He/She may not agree."
     },
     {
      "n": 47,
      "ko": "걔네들은 배달 안 할지도 몰라.",
      "en": "They may not deliver."
     },
     {
      "n": 48,
      "ko": "걔네들은 일요일에 문 안 열지도(영업 안 할지도) 몰라.",
      "en": "They may not open on Sundays."
     },
     {
      "n": 49,
      "ko": "짐은 가고 싶어 하지 않을 수도 있어.",
      "en": "Jim may not want to go."
     },
     {
      "n": 50,
      "ko": "그 애가 널 보고 싶어 하지 않을 수도 있어.",
      "en": "He/She may not want to see you."
     },
     {
      "n": 51,
      "ko": "큰 일이 아닐지도 몰라. 확실히 알기 전까진, 걱정하지 않는 게 좋겠어.",
      "en": "It might not be a big deal. Until we know for sure, we shouldn't worry."
     },
     {
      "n": 52,
      "ko": "거기 없을지도 몰라.",
      "en": "It might not be there."
     },
     {
      "n": 53,
      "ko": "아직 안 됐을지도 몰라.",
      "en": "It might not be ready yet."
     },
     {
      "n": 54,
      "ko": "그거 모자랄지도 몰라.",
      "en": "It might not be enough."
     },
     {
      "n": 55,
      "ko": "실수가 아닐지도 몰라. (그건) 고의 일지도 몰라.",
      "en": "It might not be a mistake. It might be on purpose."
     },
     {
      "n": 56,
      "ko": "심각하지 않을지도 몰라.",
      "en": "It might not be serious."
     },
     {
      "n": 57,
      "ko": "이거 금방 안 끝날지도 몰라. 이거 보통 오래 걸려.",
      "en": "It might not end/finish soon. It usually takes long."
     },
     {
      "n": 58,
      "ko": "비 안 올지도 몰라.",
      "en": "It might not rain."
     },
     {
      "n": 59,
      "ko": "그거 안 될 수도 있어.",
      "en": "It might not work."
     },
     {
      "n": 60,
      "ko": "오래 안 걸리지도 몰라.",
      "en": "It might not take long."
     },
     {
      "n": 61,
      "ko": "저 지금 가도 되나요?",
      "en": "May I go/leave now?"
     },
     {
      "n": 62,
      "ko": "저 들어가도 되나요?",
      "en": "May I come/go in?"
     },
     {
      "n": 63,
      "ko": "저 오늘 일찍 (나)가도 되나요?",
      "en": "May I leave/go early today?"
     },
     {
      "n": 64,
      "ko": "여기 앉아도 될까요?",
      "en": "May I sit here?"
     },
     {
      "n": 65,
      "ko": "뭔가 물어봐도 되나요?",
      "en": "May I ask something?"
     },
     {
      "n": 66,
      "ko": "제가 질문 하나 해도 될까요?",
      "en": "May I ask a question?"
     },
     {
      "n": 67,
      "ko": "제가 개인적인 질문해도 될까요?",
      "en": "May I ask a personal question?"
     },
     {
      "n": 68,
      "ko": "이거 써도 되나요?",
      "en": "May I use it/this?"
     },
     {
      "n": 69,
      "ko": "화장실에 가도 되나요?",
      "en": "May I go to the bathroom/toilet?"
     },
     {
      "n": 70,
      "ko": "화장실을 써도 되나요?",
      "en": "May I use the bathroom/toilet?"
     },
     {
      "n": 71,
      "ko": "제가 이거 해봐도 되나요?",
      "en": "May I try it/this?"
     },
     {
      "n": 72,
      "ko": "제가 먼저 해도 되나요?",
      "en": "May I go first?"
     },
     {
      "n": 73,
      "ko": "제가 그거 봐도 되나요?",
      "en": "May I see/look at it? / May I have/take a look (at it)?"
     },
     {
      "n": 74,
      "ko": "왜(그런건지)인지 물어봐도 되나요?",
      "en": "May I ask why (that/it is)?"
     },
     {
      "n": 75,
      "ko": "이 의자 가져가도 될까요?",
      "en": "May I take this chair?"
     },
     {
      "n": 76,
      "ko": "귀찮게 해서 죄송한데요, 이것 좀 빌려도 될까요?",
      "en": "I am sorry to bother you. May I borrow this?"
     },
     {
      "n": 77,
      "ko": "중간에 말 끊어서 죄송한데요, 저 잠깐 밖에 나가도 괜찮을까요?",
      "en": "I am sorry to interrupt. May I go out/step out for a minute?"
     },
     {
      "n": 78,
      "ko": "이 전화 받아도 될까요?",
      "en": "May I take this call/answer it?"
     },
     {
      "n": 79,
      "ko": "제가 다시 해봐도 되나요?",
      "en": "May I try (it) again?"
     },
     {
      "n": 80,
      "ko": "생각해봐도 되나요? 결정하면, 알려줄게요.",
      "en": "May I think about it? When I decide, I will let you know."
     },
     {
      "n": 81,
      "ko": "그럼 오늘하지 뭐.",
      "en": "I might as well do it today."
     },
     {
      "n": 82,
      "ko": "지금 가지 뭐.",
      "en": "I might as well go now."
     },
     {
      "n": 83,
      "ko": "이것도 사지 뭐.",
      "en": "I might as well buy it/this, too."
     },
     {
      "n": 84,
      "ko": "우리 조금 더 기다려보지 뭐.",
      "en": "We might as well wait a bit longer."
     },
     {
      "n": 85,
      "ko": "밖에 비 와. 여기 있지 뭐.",
      "en": "It is raining outside. I might as well stay here."
     },
     {
      "n": 86,
      "ko": "그러지 뭐.",
      "en": "I might as well (do it)."
     },
     {
      "n": 87,
      "ko": "저것도 갈지(교체하지) 뭐.",
      "en": "I might as well replace it/that, too."
     },
     {
      "n": 88,
      "ko": "이거 (선물) 포장하지 뭐.",
      "en": "I might as well gift wrap it/this."
     },
     {
      "n": 89,
      "ko": "벽하고 얘기하지 뭐.",
      "en": "I might as well talk/speak to the wall."
     },
     {
      "n": 90,
      "ko": "우리 그냥 다른 데 가지 뭐.",
      "en": "We might as well go somewhere else."
     },
     {
      "n": 91,
      "ko": "내가 그걸 피할 수 없다면, 그냥 즐기지 뭐.",
      "en": "If I can't avoid it/that, I might as well enjoy it."
     },
     {
      "n": 92,
      "ko": "우리 이거 지금 그냥 다 하지 뭐.",
      "en": "We might as well finish it now."
     },
     {
      "n": 93,
      "ko": "멀지 않아. 거기 걸어가지 뭐.",
      "en": "It is not far. I might as well walk there."
     },
     {
      "n": 94,
      "ko": "우리 사실대로 말하지 뭐. 그 애 알 걸.",
      "en": "We might as well come clean/tell the truth. He/She will know."
     },
     {
      "n": 95,
      "ko": "우리 여기서 잠깐 멈추지 뭐.",
      "en": "We might as well stop here for a minute/while."
     },
     {
      "n": 96,
      "ko": "지금 취소가 안 되면(못 한다면), 가죠 뭐.",
      "en": "If I can't cancel it now, I might as well go."
     },
     {
      "n": 97,
      "ko": "너한테 말하지 뭐. 모두 다 이미 아는데.",
      "en": "I might as well tell you. Everybody/Everyone already knows. / Everybody knows already."
     },
     {
      "n": 98,
      "ko": "둘 다 가져가지 뭐. 우리 둘 다 필요할지도 몰라.",
      "en": "I might as well take (them) both(=both of them). We might need (them) both (=both of them)."
     },
     {
      "n": 99,
      "ko": "우리 지금 나가지 뭐.",
      "en": "We might as well go out/leave now."
     },
     {
      "n": 100,
      "ko": "우리가 이 상황에서 빠져나갈 수 없다면, 이걸 최대한 활용해 보죠 뭐.",
      "en": "If we can't get out of this situation, we might as well make the most of it."
     }
    ]
   },
   {
    "u": 5,
    "title": "Unit 5",
    "items": [
     {
      "n": 1,
      "ko": "나 10분 전에 왔어.",
      "en": "I came/got here 10 minutes ago."
     },
     {
      "n": 2,
      "ko": "내가 그거 했어.",
      "en": "I did it/that."
     },
     {
      "n": 3,
      "ko": "나 이거 어제 샀어.",
      "en": "I bought it/this yesterday."
     },
     {
      "n": 4,
      "ko": "나 어젯밤에 잠 잘 잤어.",
      "en": "I slept well last night."
     },
     {
      "n": 5,
      "ko": "오늘 아침에 손가락을 베었어.",
      "en": "I cut my finger this morning."
     },
     {
      "n": 6,
      "ko": "어제 손을 데었어.",
      "en": "I burned/burnt my hand yesterday."
     },
     {
      "n": 7,
      "ko": "오늘 아침에 늦게 일어났어.",
      "en": "I got up late this morning."
     },
     {
      "n": 8,
      "ko": "이거 널 위해서 만든 거야.",
      "en": "I made this for you."
     },
     {
      "n": 9,
      "ko": "며칠 전에 Sam 만났어.",
      "en": "I met Sam a few days ago/the other day."
     },
     {
      "n": 10,
      "ko": "우리 점심 같이 먹었어.",
      "en": "We had/ate lunch together."
     },
     {
      "n": 11,
      "ko": "나 그거 찾았어.",
      "en": "I found it."
     },
     {
      "n": 12,
      "ko": "이미 알고 있었어.",
      "en": "I already knew (it). / I knew (it) already."
     },
     {
      "n": 13,
      "ko": "거기에 친구랑 갔었어.",
      "en": "I went there with a/my friend."
     },
     {
      "n": 14,
      "ko": "내 반지 잃어버렸어. 너무 속상해.",
      "en": "I lost my/the ring. I am so/very/really upset."
     },
     {
      "n": 15,
      "ko": "그 애 5시에 나갔어.",
      "en": "He left/went out at 5 (o' clock)."
     },
     {
      "n": 16,
      "ko": "나 지갑을 집에 두고왔어.",
      "en": "I left my wallet/purse at home."
     },
     {
      "n": 17,
      "ko": "너 잘 했어! 난 네가 자랑스러워!",
      "en": "You did (it) well! I am proud of you!"
     },
     {
      "n": 18,
      "ko": "깜빡 했다. 미안.",
      "en": "I forgot (about it/that). I'm sorry."
     },
     {
      "n": 19,
      "ko": "너한테 전화한다는 걸 깜빡했어.",
      "en": "I forgot to call you."
     },
     {
      "n": 20,
      "ko": "너한테 말해준다는 걸 깜빡했어.",
      "en": "I forgot to tell you."
     },
     {
      "n": 21,
      "ko": "저 영수증 가져왔어요.",
      "en": "I brought the/my receipt."
     },
     {
      "n": 22,
      "ko": "그 애가 그거 가져갔어.",
      "en": "He took it."
     },
     {
      "n": 23,
      "ko": "너 그거 벌써 말했어. 그래서 알아.",
      "en": "You already said that. / You said that already. (You already told me that. / You told me that already.) So, I know."
     },
     {
      "n": 24,
      "ko": "그 애가 나한테 말해줬어. 그래서 알고있었어.",
      "en": "He told me. So, I knew."
     },
     {
      "n": 25,
      "ko": "좋은 시간 보냈어요. 고마워요.",
      "en": "I had a good/great/nice time. Thank you."
     },
     {
      "n": 26,
      "ko": "그거 아팠어.",
      "en": "It hurt."
     },
     {
      "n": 27,
      "ko": "오래 걸렸어.",
      "en": "It took long/ a long time."
     },
     {
      "n": 28,
      "ko": "거기 가는데 오래 걸렸어.",
      "en": "It took long(=a long time) to go/get there."
     },
     {
      "n": 29,
      "ko": "돈 많이 들었어.",
      "en": "It cost a lot (of money)."
     },
     {
      "n": 30,
      "ko": "그거 설치하는데 돈 많이 들었어.",
      "en": "It cost a lot (of money) to install (that)."
     },
     {
      "n": 31,
      "ko": "나 어제 하루종일 일했어.",
      "en": "I worked all day yesterday."
     },
     {
      "n": 32,
      "ko": "TV 봤어.",
      "en": "I watched TV."
     },
     {
      "n": 33,
      "ko": "너 일찍 도착했네.",
      "en": "You got here/arrived early."
     },
     {
      "n": 34,
      "ko": "우리 거기에서 일주일 있었어.",
      "en": "We stayed there for a week."
     },
     {
      "n": 35,
      "ko": "그거 막 시작했어.",
      "en": "It just began/started."
     },
     {
      "n": 36,
      "ko": "그거 1시간 전에 끝났어.",
      "en": "It finished/ended an hour ago."
     },
     {
      "n": 37,
      "ko": "그거 됐어!",
      "en": "It worked."
     },
     {
      "n": 38,
      "ko": "어제 하루종일 비 왔어.",
      "en": "It rained all day yesterday."
     },
     {
      "n": 39,
      "ko": "그거 갑자기 멈췄어.",
      "en": "It suddenly stopped. / It stopped suddenly. /Suddenly, it stopped."
     },
     {
      "n": 40,
      "ko": "그거 달라 보였어.",
      "en": "It looked different."
     },
     {
      "n": 41,
      "ko": "너한테 뭔가 물어보고 싶었어.",
      "en": "I wanted to ask you something."
     },
     {
      "n": 42,
      "ko": "나 거기에 가고 싶었는데.",
      "en": "I wanted to go there."
     },
     {
      "n": 43,
      "ko": "나 그거 사고 싶었어.",
      "en": "I wanted to buy it/that."
     },
     {
      "n": 44,
      "ko": "나 그거 갖고 싶었는데. 고마워.",
      "en": "I wanted to have it/that. Thank you."
     },
     {
      "n": 45,
      "ko": "결정했어.",
      "en": "I decided (it)."
     },
     {
      "n": 46,
      "ko": "우리 거기 같이 가기로 했어.",
      "en": "We decided to go there together."
     },
     {
      "n": 47,
      "ko": "나 그거 하기로 했어.",
      "en": "I decided to do that/it."
     },
     {
      "n": 48,
      "ko": "아무것도 안 바꾸기로 했어.",
      "en": "I decided not to change anything."
     },
     {
      "n": 49,
      "ko": "포기 안 하기로 했어.",
      "en": "I decided not to give up/quit."
     },
     {
      "n": 50,
      "ko": "그거 안 하기로 했어.",
      "en": "I decided not to do it/that."
     },
     {
      "n": 51,
      "ko": "나 아무 말도 안 했어.",
      "en": "I didn't say anything."
     },
     {
      "n": 52,
      "ko": "나 아무한테도 말 안 했어.",
      "en": "I didn't tell anyone/anybody."
     },
     {
      "n": 53,
      "ko": "걔네 안 왔어.",
      "en": "They didn't come."
     },
     {
      "n": 54,
      "ko": "나 그거 안 했어.",
      "en": "I didn't do it/that."
     },
     {
      "n": 55,
      "ko": "나 아무것도 안 샀어. 신용카드가 없었거든.",
      "en": "I didn't buy anything. I didn't have my credit card."
     },
     {
      "n": 56,
      "ko": "시간이 없었어.",
      "en": "I didn't have time."
     },
     {
      "n": 57,
      "ko": "아무것도 할 시간이 없었어.",
      "en": "I didn't have time to do anything."
     },
     {
      "n": 58,
      "ko": "거기 갈 시간이 없었어.",
      "en": "I didn't have time to go there."
     },
     {
      "n": 59,
      "ko": "전화할 시간이 없었어.",
      "en": "I didn't have time to call (you)."
     },
     {
      "n": 60,
      "ko": "나 그거 거기다 두지 않았는데. 이상하네.",
      "en": "I didn't put it there. It is strange/weird."
     },
     {
      "n": 61,
      "ko": "나 어제 Jim 봤는데, 아는 척 안 하더라.",
      "en": "I saw Jim yesterday, but/and he didn't say hello."
     },
     {
      "n": 62,
      "ko": "그거 생각 안 해봤어.",
      "en": "I didn't think about it/that."
     },
     {
      "n": 63,
      "ko": "몰랐어요.",
      "en": "I didn't know (it/that)."
     },
     {
      "n": 64,
      "ko": "나 아무것도 안 했어.",
      "en": "I didn't do anything."
     },
     {
      "n": 65,
      "ko": "나 그거 진심이 아니었어. 미안해.",
      "en": "I didn't mean it/that. I am sorry."
     },
     {
      "n": 66,
      "ko": "어제 비 안 왔어.",
      "en": "It didn't rain yesterday."
     },
     {
      "n": 67,
      "ko": "오래 안 걸렸어.",
      "en": "It didn't take long/ a long time."
     },
     {
      "n": 68,
      "ko": "그거 안 깨졌어.",
      "en": "It didn't break."
     },
     {
      "n": 69,
      "ko": "아무 말도 하고 싶지 않았어. 그래서 안 했어.",
      "en": "I didn't want to say anything. So I didn't (do/say that/it)."
     },
     {
      "n": 70,
      "ko": "아무 데도 가고 싶지 않았어. 그래서 안 갔지.",
      "en": "I didn't want to go anywhere. So I didn't go."
     },
     {
      "n": 71,
      "ko": "어제 뭐 했어?",
      "en": "What did you do yesterday?"
     },
     {
      "n": 72,
      "ko": "뭐라고? (=뭐라고 했어?) 못 들었어.",
      "en": "What did you say? I didn't hear it/you/that."
     },
     {
      "n": 73,
      "ko": "왜 전화했어?",
      "en": "Why did you call (me)?"
     },
     {
      "n": 74,
      "ko": "왜 그랬어?",
      "en": "Why did you do that/it?"
     },
     {
      "n": 75,
      "ko": "넌 뭐 봤어?",
      "en": "What did you see?"
     },
     {
      "n": 76,
      "ko": "어디 갔었어?",
      "en": "Where did you go?"
     },
     {
      "n": 77,
      "ko": "얼마 주고 샀어? (=얼마 냈어?)",
      "en": "How much did you pay (for it)?"
     },
     {
      "n": 78,
      "ko": "어제 Simon 만났어? 어디 갔었니?",
      "en": "Did you meet Simon yesterday? Where did you go?"
     },
     {
      "n": 79,
      "ko": "좋은 시간 보냈어?",
      "en": "Did you have a good/nice/great time?"
     },
     {
      "n": 80,
      "ko": "좋은 주말 보냈어?",
      "en": "Did you have a good/nice weekend?"
     },
     {
      "n": 81,
      "ko": "언제 왔어?",
      "en": "When did you get here/come?"
     },
     {
      "n": 82,
      "ko": "오래 기다렸어? 늦어서 미안.",
      "en": "Did you wait long/(for) a long time? I am sorry (that) I am late."
     },
     {
      "n": 83,
      "ko": "잘 잤어?",
      "en": "Did you sleep well?"
     },
     {
      "n": 84,
      "ko": "점심 먹었어? 뭐 먹었어?",
      "en": "Did you eat/have lunch? What did you eat/have (for lunch)?"
     },
     {
      "n": 85,
      "ko": "언제 돌아왔어?",
      "en": "When did you get/come back?"
     },
     {
      "n": 86,
      "ko": "거기 얼마나 오래 있었어?",
      "en": "How long did you stay there?"
     },
     {
      "n": 87,
      "ko": "뭐 샀어?",
      "en": "What did you buy/get?"
     },
     {
      "n": 88,
      "ko": "이거 어디서 샀어?",
      "en": "Where did you buy/get it?"
     },
     {
      "n": 89,
      "ko": "영수증 가져왔어요?",
      "en": "Did you bring the receipt?"
     },
     {
      "n": 90,
      "ko": "이거 어디서 났어?",
      "en": "Where did you get it?"
     },
     {
      "n": 91,
      "ko": "뭔가 잃어버렸니? 뭔가 찾아?",
      "en": "Did you lose something? Are you looking for something?"
     },
     {
      "n": 92,
      "ko": "어디다 뒀는데?",
      "en": "Where did you put/leave it?"
     },
     {
      "n": 93,
      "ko": "너 그 소식 들었니?",
      "en": "Did you hear the news?"
     },
     {
      "n": 94,
      "ko": "어떡하다 그랬어? (=이거 어떻게 한거야?)",
      "en": "How did you do that? / How did it happen?"
     },
     {
      "n": 95,
      "ko": "왜 망설였어?",
      "en": "Why did you hesitate?"
     },
     {
      "n": 96,
      "ko": "이해했어?",
      "en": "Did you get it/understand?"
     },
     {
      "n": 97,
      "ko": "비 왔어?",
      "en": "Did it rain?"
     },
     {
      "n": 98,
      "ko": "오래 걸렸니? 얼마나 오래 걸렸어?",
      "en": "Did it take long/a long time? How long did it take?"
     },
     {
      "n": 99,
      "ko": "왜 이렇게 오래 걸렸어?",
      "en": "Why did it take so/this long?"
     },
     {
      "n": 100,
      "ko": "그거 얼마 들었어?",
      "en": "How much did it cost?"
     }
    ]
   },
   {
    "u": 6,
    "title": "Unit 6",
    "items": [
     {
      "n": 1,
      "ko": "하루종일 집에 있었어.",
      "en": "I was (at) home all day."
     },
     {
      "n": 2,
      "ko": "누워 있었어.",
      "en": "I was in bed."
     },
     {
      "n": 3,
      "ko": "어젯밤에 너무 피곤했어.",
      "en": "I was exhausted (=very/so/really tired) last night."
     },
     {
      "n": 4,
      "ko": "너무 배고팠어.",
      "en": "I was starving (=so/very/really hungry)."
     },
     {
      "n": 5,
      "ko": "작년 이맘때 난 홍콩에 있었어. 너무 좋았어.",
      "en": "I was in Hong Kong this time last year. It was so/very/really good."
     },
     {
      "n": 6,
      "ko": "미안, 내가 일하느라 바빴어.",
      "en": "Sorry, I was busy working."
     },
     {
      "n": 7,
      "ko": "미안, 내가 바빴어 (서둘러야 했어).",
      "en": "Sorry, I was in a hurry."
     },
     {
      "n": 8,
      "ko": "통화 중이었어요.",
      "en": "I was (talking) on the phone."
     },
     {
      "n": 9,
      "ko": "회사 가는 길이었어.",
      "en": "I was on the way to work."
     },
     {
      "n": 10,
      "ko": "며칠 전에 아팠어.",
      "en": "I was sick a few days ago/the other day."
     },
     {
      "n": 11,
      "ko": "나도 어제 거기 있었는데.",
      "en": "I was there (,too) yesterday."
     },
     {
      "n": 12,
      "ko": "그 애 때문에 난 좀 짜증났어.",
      "en": "I was a (little) bit annoyed because of him/her. / Because of him/her, I was a (little) bit annoyed."
     },
     {
      "n": 13,
      "ko": "그 애 혼자 있었어.",
      "en": "He was (all) alone."
     },
     {
      "n": 14,
      "ko": "걔네가 늦어서, 나 화났었어.",
      "en": "They were late, so I was angry/mad. / I was angry because they were late."
     },
     {
      "n": 15,
      "ko": "난 너무 졸렸어. 그래서 잠들었어.",
      "en": "I was so/very/really sleepy. So I fell asleep."
     },
     {
      "n": 16,
      "ko": "나 너무 신났었어.",
      "en": "I was so/very/really excited."
     },
     {
      "n": 17,
      "ko": "너 운이 좋았어.",
      "en": "You were lucky."
     },
     {
      "n": 18,
      "ko": "난 네 편이었어. 난 항상 네 편이지.",
      "en": "I was on your side. I am always on your side."
     },
     {
      "n": 19,
      "ko": "나 엄청 놀랐어.",
      "en": "I was very/so/really surprised/shocked."
     },
     {
      "n": 20,
      "ko": "그 애 엄청 떨었어.",
      "en": "He was very/so/really nervous."
     },
     {
      "n": 21,
      "ko": "비쌌어.",
      "en": "It was expensive."
     },
     {
      "n": 22,
      "ko": "엄청 쉬웠어.",
      "en": "It was very easy."
     },
     {
      "n": 23,
      "ko": "똑같았어.",
      "en": "It was identical/the same."
     },
     {
      "n": 24,
      "ko": "이상했어.",
      "en": "It was weird/strange."
     },
     {
      "n": 25,
      "ko": "재미없었어.",
      "en": "It was boring."
     },
     {
      "n": 26,
      "ko": "젖어 있었어.",
      "en": "It was wet."
     },
     {
      "n": 27,
      "ko": "미끄러웠어.",
      "en": "It was slippery."
     },
     {
      "n": 28,
      "ko": "너무 멀었어.",
      "en": "It was very/so/really far."
     },
     {
      "n": 29,
      "ko": "맛있었어요.",
      "en": "It was delicious/yum/yummy."
     },
     {
      "n": 30,
      "ko": "그거 5분 전에 여기 있었는데. 이상하네.",
      "en": "It was here 5 minutes ago. It is weird/strange."
     },
     {
      "n": 31,
      "ko": "배가 안 고팠어. 그래서 별로 안 먹었어.",
      "en": "I wasn't hungry. So I didn't eat much."
     },
     {
      "n": 32,
      "ko": "난 그 애랑 가깝지 않았어.",
      "en": "I wasn't close to him/her."
     },
     {
      "n": 33,
      "ko": "불행히도, 그 앤 운이 좋지 않았어.",
      "en": "Unfortunately, he wasn't lucky."
     },
     {
      "n": 34,
      "ko": "나 짜증나지 않았었어.",
      "en": "I wasn't annoyed."
     },
     {
      "n": 35,
      "ko": "난 아무것도 걱정하지 않았어.",
      "en": "I wasn't worried about anything."
     },
     {
      "n": 36,
      "ko": "난 아무것도 무섭지 않았었어.",
      "en": "I wasn't afraid/scared of anything."
     },
     {
      "n": 37,
      "ko": "나 답답하지 않았어.",
      "en": "I wasn't frustrated."
     },
     {
      "n": 38,
      "ko": "기분 안 좋았어.",
      "en": "I wasn't happy."
     },
     {
      "n": 39,
      "ko": "난 만족하지 않았었어.",
      "en": "I wasn't satisfied."
     },
     {
      "n": 40,
      "ko": "슬프지 않았어. 난 괜찮았어.",
      "en": "I wasn't sad. I was ok/fine."
     },
     {
      "n": 41,
      "ko": "그거 별로였어. (=안 좋았어)",
      "en": "It wasn't (very) good."
     },
     {
      "n": 42,
      "ko": "편하지 않았어.",
      "en": "It wasn't comfortable."
     },
     {
      "n": 43,
      "ko": "어렵지 않았어. 하지만, 쉽지도 않았어.",
      "en": "It wasn't hard. But, it wasn't easy either."
     },
     {
      "n": 44,
      "ko": "어제 날씨 안 좋았어.",
      "en": "The weather wasn't good/nice yesterday."
     },
     {
      "n": 45,
      "ko": "심각하지 않았어.",
      "en": "It wasn't serious."
     },
     {
      "n": 46,
      "ko": "힘들지 않았어요.",
      "en": "It wasn't hard/difficult."
     },
     {
      "n": 47,
      "ko": "그거 거기에 없었어.",
      "en": "It wasn't there."
     },
     {
      "n": 48,
      "ko": "내 취향이 아니었어.",
      "en": "It wasn't my style/cup of tea."
     },
     {
      "n": 49,
      "ko": "너의 잘못이 아니었어.",
      "en": "It wasn't your fault."
     },
     {
      "n": 50,
      "ko": "좋은 경험이 아니었어. 그게 다야.",
      "en": "It wasn't a good experience. That/It is all."
     },
     {
      "n": 51,
      "ko": "너 왜 늦었었어?",
      "en": "Why were you late?"
     },
     {
      "n": 52,
      "ko": "어제 왜 화났었어?",
      "en": "Why were you angry/mad yesterday?"
     },
     {
      "n": 53,
      "ko": "너 어디 있었어? 나 너 못 봤어.",
      "en": "Where were you? I didn't see you."
     },
     {
      "n": 54,
      "ko": "바빴니?",
      "en": "Were you busy? / Were you in a hurry?"
     },
     {
      "n": 55,
      "ko": "넌 몇 살이었니?",
      "en": "How old were you?"
     },
     {
      "n": 56,
      "ko": "그게 좋은 선택이었어?",
      "en": "Was it a good choice?"
     },
     {
      "n": 57,
      "ko": "오해였어?",
      "en": "Was it a misunderstanding?"
     },
     {
      "n": 58,
      "ko": "사람 많았니? (복잡했니/붐볐니?)",
      "en": "Was it crowded?"
     },
     {
      "n": 59,
      "ko": "그게 너의 결정이었어?",
      "en": "Was it your decision?"
     },
     {
      "n": 60,
      "ko": "그게 너의 의도였니? 네 의도가 뭐였어?",
      "en": "Was it your intention? What was your intention?"
     },
     {
      "n": 61,
      "ko": "영화 어땠어? 좋았어?",
      "en": "How was the movie? Was it good?"
     },
     {
      "n": 62,
      "ko": "날씨 어땠어? 날씨 좋았어?",
      "en": "How was the weather? Was the weather good/nice?"
     },
     {
      "n": 63,
      "ko": "너 자켓 너무 좋다! 비쌌니?",
      "en": "I like your jacket. / Your jacket is nice/cool. Was it expensive?"
     },
     {
      "n": 64,
      "ko": "이거 얼마였어?",
      "en": "How much was it?"
     },
     {
      "n": 65,
      "ko": "오늘 하루 어땠어? 좋은 하루였니?",
      "en": "How was your day? Was it a good day?"
     },
     {
      "n": 66,
      "ko": "주말 어땠어?",
      "en": "How was your weekend?"
     },
     {
      "n": 67,
      "ko": "멀었니? 얼마나 오래 걸렸어?",
      "en": "Was it far? How long did it take?"
     },
     {
      "n": 68,
      "ko": "너 생일이 언제였어?",
      "en": "When was your birthday?"
     },
     {
      "n": 69,
      "ko": "괜찮았니?",
      "en": "Was it ok?"
     },
     {
      "n": 70,
      "ko": "재미있었어?",
      "en": "Was it fun? / Was it funny?"
     },
     {
      "n": 71,
      "ko": "내가 어렸을 때, 난 수줍음을 많이 탔어.",
      "en": "When I was little/a child/a kid/a student/young, I was shy."
     },
     {
      "n": 72,
      "ko": "내가 거기 있었을 때, 너도 거기 있었잖아.",
      "en": "When I was there, you were there, too."
     },
     {
      "n": 73,
      "ko": "너가 아팠을 때, 네 걱정했어.",
      "en": "When you were sick, I was worried about you."
     },
     {
      "n": 74,
      "ko": "내가 20살 때, 나 대담했어.",
      "en": "When I was 20 (years old), I was bold."
     },
     {
      "n": 75,
      "ko": "우리가 학생인 시절에, 우린 참 순진했지.",
      "en": "When we were students, we were so/very/really naïve."
     },
     {
      "n": 76,
      "ko": "내 동생이 10살 때, 엄청 귀여웠어.",
      "en": "When my brother/sister was 10 (years old), he/she was so/very/really cute."
     },
     {
      "n": 77,
      "ko": "그 애가 어렸을 땐, 이기적이었어.",
      "en": "When he/she was little/a kid/a child, he/she was selfish."
     },
     {
      "n": 78,
      "ko": "내가 고등학생 때, 그게 유명했었어.",
      "en": "When I was a high school student, it was famous."
     },
     {
      "n": 79,
      "ko": "우리가 아기 땐, 우린 항상 행복했었지.",
      "en": "When we were babies, we were always happy."
     },
     {
      "n": 80,
      "ko": "우리가 거기 있었을 때, 모두 (거기) 있었어.",
      "en": "When we were there, everyone/everybody was there."
     },
     {
      "n": 81,
      "ko": "내가 너한테 전화 했을 때, 너 바빴잖아.",
      "en": "When I called you, you were busy."
     },
     {
      "n": 82,
      "ko": "너가 왔을 때, 난 널 봐서 기뻤어.",
      "en": "When you came, I was happy/glad to see you."
     },
     {
      "n": 83,
      "ko": "너가 그 애한테 말했을 때, 그 애 혼자였어?",
      "en": "When you told him/her, was he/she alone?"
     },
     {
      "n": 84,
      "ko": "내가 그 애한테 물어봤을 때, 그 애 친절했어.",
      "en": "When I asked him/her, he/she was kind/friendly."
     },
     {
      "n": 85,
      "ko": "내가 그 말 들었을 때, 나 충격 받았었어.",
      "en": "When I heard that, I was shocked."
     },
     {
      "n": 86,
      "ko": "우리가 이거 찾았을 때, 우린 안도했었어.",
      "en": "When we found it/this, we were relieved."
     },
     {
      "n": 87,
      "ko": "내가 이것을 때, 너무 행복했어.",
      "en": "When I won, I was so/very/really happy."
     },
     {
      "n": 88,
      "ko": "너가 그거 잃어버렸을 때, 너 우울했었잖아.",
      "en": "When you lost it/that, you were depressed/blue."
     },
     {
      "n": 89,
      "ko": "너가 날 무시했을 때, 화났었어.",
      "en": "When you ignored me, I was angry/mad."
     },
     {
      "n": 90,
      "ko": "너가 나한테 이거 줬을 때, 놀랐었어.",
      "en": "When you gave it to me, I was surprised."
     },
     {
      "n": 91,
      "ko": "나 어렸을 때, 개를 무서워했었어.",
      "en": "When I was little/a child/a kid, I was afraid/scared of dogs."
     },
     {
      "n": 92,
      "ko": "나 거기 갔을 때, 그게 처음이었어.",
      "en": "When I went there, it was my first time."
     },
     {
      "n": 93,
      "ko": "나 집에 왔을 때, 너무 피곤했어.",
      "en": "When I came/got home, I was exhausted (=very/so/really tired)."
     },
     {
      "n": 94,
      "ko": "내가 그게 기억났을 때는, 너무 늦었었어.",
      "en": "When I remembered it/that, it was so/very/too/really late."
     },
     {
      "n": 95,
      "ko": "내가 전화했을 때, 너 (거기에) 없더라. 어디 있었어?",
      "en": "When I called, you were not there. Where were you?"
     },
     {
      "n": 96,
      "ko": "우리가 도착했을 때, 아무도 (거기에) 없더라.",
      "en": "When we got there/arrived, nobody/no one was there."
     },
     {
      "n": 97,
      "ko": "그 애가 왔을 때, 난 밖에 있었어.",
      "en": "When he came, I was out."
     },
     {
      "n": 98,
      "ko": "내가 이거 샀을 땐, 80불이었는데.",
      "en": "When I bought/got it, it was 80 dollars."
     },
     {
      "n": 99,
      "ko": "너가 그 애 봤을 때, 그 앤 어땠어?",
      "en": "When you saw him, how was he?"
     },
     {
      "n": 100,
      "ko": "그런 일이 생겼을 때, 난 정말 놀랐었어.",
      "en": "When it happened, I was shocked/very surprised."
     }
    ]
   },
   {
    "u": 7,
    "title": "Unit 7",
    "items": [
     {
      "n": 1,
      "ko": "나 네 생각하고 있었어.",
      "en": "I was thinking about you."
     },
     {
      "n": 2,
      "ko": "미안, 나 다른 생각하고 있었어.",
      "en": "Sorry, I was thinking about something else."
     },
     {
      "n": 3,
      "ko": "나 막 나가려던 중이었어.",
      "en": "I was just leaving."
     },
     {
      "n": 4,
      "ko": "집에 가고 있었어.",
      "en": "I was going home."
     },
     {
      "n": 5,
      "ko": "뭔가 하고 있었어.",
      "en": "I was doing something."
     },
     {
      "n": 6,
      "ko": "책 읽고 있었어.",
      "en": "I was reading a book."
     },
     {
      "n": 7,
      "ko": "나 너 기다리고 있었어.",
      "en": "I was waiting for you."
     },
     {
      "n": 8,
      "ko": "고마워. 나 이거 찾고 있었는데. 어디서 찾았니?",
      "en": "Thank you. I was looking for it/this. Where did you find it?"
     },
     {
      "n": 9,
      "ko": "나 운동하고 있었어.",
      "en": "I was working out/exercising."
     },
     {
      "n": 10,
      "ko": "나 너한테 문자하고 있었는데.",
      "en": "I was texting you."
     },
     {
      "n": 11,
      "ko": "우리 자고 있었어.",
      "en": "We were sleeping."
     },
     {
      "n": 12,
      "ko": "그때 나 운전 중이었어.",
      "en": "I was driving then."
     },
     {
      "n": 13,
      "ko": "나 이거 쓰고 있었는데.",
      "en": "I was using it/this."
     },
     {
      "n": 14,
      "ko": "요리 하고 있었어. 저녁 먹고 가.",
      "en": "I was cooking. Stay for dinner."
     },
     {
      "n": 15,
      "ko": "우리 방금 네 얘기 하고 있었는데.",
      "en": "We were just talking about you."
     },
     {
      "n": 16,
      "ko": "모두 널 응원하고 있었어.",
      "en": "Everybody/everyone was rooting for you."
     },
     {
      "n": 17,
      "ko": "모두 열심히 일하고 있었어.",
      "en": "Everybody/everyone was working hard."
     },
     {
      "n": 18,
      "ko": "누군가 코골고 있었어. 너무 웃겼어.",
      "en": "Someone/somebody was snoring. It was so/very/really funny."
     },
     {
      "n": 19,
      "ko": "셀카 찍고 있었어.",
      "en": "I was taking a selfie."
     },
     {
      "n": 20,
      "ko": "너 뭔가 보고 있었잖아. 뭐였어?",
      "en": "You were looking at something. What was it?"
     },
     {
      "n": 21,
      "ko": "내가 도착했을 때, Tim이 기다리고 있었어.",
      "en": "When I got there/arrived, Tim was waiting."
     },
     {
      "n": 22,
      "ko": "너가 왔을 때, 난 TV 보고 있었어.",
      "en": "When you came, I was watching TV."
     },
     {
      "n": 23,
      "ko": "그 애가 들어왔을 때, 우리는 그 애 얘기 하고 있었어.",
      "en": "When he/she came in, we were talking about him/her."
     },
     {
      "n": 24,
      "ko": "너가 벨 눌렀을 때, 샤워하는 중이었어.",
      "en": "When you rang the (door)bell, I was taking/having a shower."
     },
     {
      "n": 25,
      "ko": "내가 그 애 봤을 때, 그 애 일하고 있었어. 바쁘던데.",
      "en": "When I saw him/her, he/she was working. He/she was busy."
     },
     {
      "n": 26,
      "ko": "네가 전화했을 때, 나 네 생각하고 있었어.",
      "en": "When you called, I was thinking about you."
     },
     {
      "n": 27,
      "ko": "내가 널 기다리고 있을 때, 나 Jim 봤어.",
      "en": "When I was waiting for you, I saw Jim."
     },
     {
      "n": 28,
      "ko": "나 요리 하다가 (그때), 손을 베었어.",
      "en": "When/while I was cooking, I cut my finger."
     },
     {
      "n": 29,
      "ko": "나 설거지하다가, 잔을 깼어.",
      "en": "When/while I was washing/doing the dishes, I broke a glass."
     },
     {
      "n": 30,
      "ko": "나 운동하다가, 다쳤어.",
      "en": "When/while I was working out/exercising, I hurt myself."
     },
     {
      "n": 31,
      "ko": "비가 억수같이 쏟아지고 있었지.",
      "en": "It was raining cats and dogs."
     },
     {
      "n": 32,
      "ko": "눈이 내리고 있었어. 모든 게 하얀색이었어. 너무 아름다웠어.",
      "en": "It was snowing. Everything was white. It was so/very/really beautiful."
     },
     {
      "n": 33,
      "ko": "그 애는 정말 예쁜 드레스를 입고 있었어. 멋져 보였어.",
      "en": "She was wearing a very beautiful dress. She looked hot/good/gorgeous."
     },
     {
      "n": 34,
      "ko": "그는 검정 자켓을 입고 있었어.",
      "en": "He was wearing a black jacket."
     },
     {
      "n": 35,
      "ko": "모두가 그냥 거기 서서, 아무 것도 안 하고 있었어.",
      "en": "Everyone/everybody was just standing there, (and they were) doing nothing."
     },
     {
      "n": 36,
      "ko": "아무도 그걸 쓰고 있지 않아서, 내가 썼어.",
      "en": "Nobody/no one was using it/that, so I used it."
     },
     {
      "n": 37,
      "ko": "아무도 여기에 앉아 있지 않아서, 내가 가져왔어.",
      "en": "Nobody/no one was sitting here, so I brought it."
     },
     {
      "n": 38,
      "ko": "아무도 그걸 하고 있지 않아서, 내가 했어.",
      "en": "Nobody/no one was doing it/that, so I did it."
     },
     {
      "n": 39,
      "ko": "아무도 그걸 보고 있지 않아서, 내가 껐어.",
      "en": "Nobody/no one was watching it/that, so I turned it off."
     },
     {
      "n": 40,
      "ko": "아무도 이야기하고 있지 않아서, 엄청 조용했어.",
      "en": "Nobody/no one was talking/speaking, so it was very/so/really quiet."
     },
     {
      "n": 41,
      "ko": "괜찮아. 나 안 자고 있었어.",
      "en": "It is ok. I wasn't sleeping."
     },
     {
      "n": 42,
      "ko": "아무것도 안 하고 있었어.",
      "en": "I wasn't doing anything."
     },
     {
      "n": 43,
      "ko": "아무데도 가고 있지 않았어.",
      "en": "I wasn't going anywhere."
     },
     {
      "n": 44,
      "ko": "아무것도 생각 하고 있지 않았어.",
      "en": "I wasn't thinking about anything."
     },
     {
      "n": 45,
      "ko": "나 우는 거 아니었어.",
      "en": "I wasn't crying."
     },
     {
      "n": 46,
      "ko": "저 운전을 빨리 하고 있지 않았어요. 50으로 가고 있었는데.",
      "en": "I wasn't driving fast(=speeding). I was going/doing 50."
     },
     {
      "n": 47,
      "ko": "미안, 듣고 있지 않았어. 뭐라고 했니?",
      "en": "Sorry, I wasn't listening. What did you say?"
     },
     {
      "n": 48,
      "ko": "미안, 난 그거 보고 있지 않았어.",
      "en": "Sorry, I wasn't watching it. / I wasn't looking at it."
     },
     {
      "n": 49,
      "ko": "나 이거 쓰고 있지 않았어. 이거 가져가도 돼.",
      "en": "I wasn't using it/this. You can take it/this."
     },
     {
      "n": 50,
      "ko": "우리 네 얘기 하고 있던 거 아니야.",
      "en": "We weren't talking about you."
     },
     {
      "n": 51,
      "ko": "너가 전화했을 때, 난 아무것도 안 하고 있었어.",
      "en": "When you called, I wasn't doing anything."
     },
     {
      "n": 52,
      "ko": "너 왔을 때, 나 일 안 하고 있었어.",
      "en": "When you came, I wasn't working."
     },
     {
      "n": 53,
      "ko": "내가 아까 너 봤을 때, 나 가게에 가던 거 아니었어.",
      "en": "When I saw you earlier, I wasn't going to the store/shop."
     },
     {
      "n": 54,
      "ko": "잘 듣고 있지 않았어.",
      "en": "I wasn't paying attention."
     },
     {
      "n": 55,
      "ko": "알고보니, 내가 제대로 하고 있지 않았더라고.",
      "en": "Turns out, I wasn't doing it properly."
     },
     {
      "n": 56,
      "ko": "나 아무 말도 안 하고 있었어.",
      "en": "I wasn't saying anything."
     },
     {
      "n": 57,
      "ko": "나 기분이 안 좋았어.",
      "en": "I wasn't feeling good."
     },
     {
      "n": 58,
      "ko": "나 몸이 안 좋았어.",
      "en": "I wasn't feeling well."
     },
     {
      "n": 59,
      "ko": "그 애는 사실을 말하고 있지 않았어.",
      "en": "He wasn't telling the truth."
     },
     {
      "n": 60,
      "ko": "나 꾀병부리는 거 아니었어. 정말 아팠다고.",
      "en": "I wasn't faking (it). I was really sick."
     },
     {
      "n": 61,
      "ko": "이거 쓰고 있었니?",
      "en": "Were you using it/this?"
     },
     {
      "n": 62,
      "ko": "이거 듣고 있던거니?",
      "en": "Were you listening to it/this?"
     },
     {
      "n": 63,
      "ko": "자고 있었니? 내가 널 깨웠니?",
      "en": "Were you sleeping? Did I wake you up?"
     },
     {
      "n": 64,
      "ko": "이거 보는 중이었니? (TV)",
      "en": "Were you watching it?"
     },
     {
      "n": 65,
      "ko": "일하고 있었어?",
      "en": "Were you working?"
     },
     {
      "n": 66,
      "ko": "누군가 기다리고 있었니?",
      "en": "Were you waiting for someone/somebody?"
     },
     {
      "n": 67,
      "ko": "나 기다리고 있던 거니? 오래 기다렸어?",
      "en": "Were you waiting for me? Did you wait long/(for) a long time?"
     },
     {
      "n": 68,
      "ko": "뭔가 찾고 있었어? 그거 찾았어?",
      "en": "Were you looking for something? Did you find it?"
     },
     {
      "n": 69,
      "ko": "뭐 찾고 있었어? 너가 말해주면, 내가 도와줄게.",
      "en": "What were you looking for? If you tell me, I will help (you)."
     },
     {
      "n": 70,
      "ko": "집에 가는 중이었니?",
      "en": "Were you going home? / Were you on the way home?"
     },
     {
      "n": 71,
      "ko": "어디 가던 길이었어?",
      "en": "Where were you going?"
     },
     {
      "n": 72,
      "ko": "뭐하고 있었어?",
      "en": "What were you doing?"
     },
     {
      "n": 73,
      "ko": "뭔가 하던 중이었니? 얘기할 시간 있어?",
      "en": "Were you doing something? Do you have time to talk/chat?"
     },
     {
      "n": 74,
      "ko": "내 얘기 하고 있었어?",
      "en": "Were you talking about me?"
     },
     {
      "n": 75,
      "ko": "무슨 얘기 하고 있었어?",
      "en": "What were you talking about?"
     },
     {
      "n": 76,
      "ko": "운전 빨리 하고 있었니?",
      "en": "Were you speeding/driving fast?"
     },
     {
      "n": 77,
      "ko": "얼마나 빨리 가고 있었니?",
      "en": "How fast were you driving/going?"
     },
     {
      "n": 78,
      "ko": "무슨 생각을 하고 있던거야?",
      "en": "What were you thinking about?"
     },
     {
      "n": 79,
      "ko": "왜 뛰고 있었어?",
      "en": "Why were you running?"
     },
     {
      "n": 80,
      "ko": "뭔가 요리하고 있었니?",
      "en": "Were you cooking something?"
     },
     {
      "n": 81,
      "ko": "넌 거기서 뭐하고 있었어?",
      "en": "What were you doing there?"
     },
     {
      "n": 82,
      "ko": "그 앤 뭐하고 있었어?",
      "en": "What was he/she doing?"
     },
     {
      "n": 83,
      "ko": "내가 무슨 말 하고 있었지?",
      "en": "What was I saying?"
     },
     {
      "n": 84,
      "ko": "내가 뭐 하고 있었지?",
      "en": "What was I doing?"
     },
     {
      "n": 85,
      "ko": "내가 뭘 찾고 있었더라?",
      "en": "What was I looking for?"
     },
     {
      "n": 86,
      "ko": "넌 어디 앉아 있었어?",
      "en": "Where were you sitting?"
     },
     {
      "n": 87,
      "ko": "뭘 하려고 하던 거였어?",
      "en": "What were you trying to do?"
     },
     {
      "n": 88,
      "ko": "뭘 말하려던 거였어?",
      "en": "What were you trying to say/tell me?"
     },
     {
      "n": 89,
      "ko": "너 누구랑 얘기하고 있었어?",
      "en": "Who were you talking/speaking to?"
     },
     {
      "n": 90,
      "ko": "공부하고 있었어?",
      "en": "Were you studying?"
     },
     {
      "n": 91,
      "ko": "내가 전화했을 때, 넌 뭐하고 있었어?",
      "en": "When I called, what were you doing?"
     },
     {
      "n": 92,
      "ko": "너가 그 남자 봤을 때, 그 앤 뭐하고 있었어?",
      "en": "When you saw him, what was he doing?"
     },
     {
      "n": 93,
      "ko": "너가 거기 갔을 때, 그 애가 기다리고 있었어?",
      "en": "When you got/went there, was he/she waiting?"
     },
     {
      "n": 94,
      "ko": "노래하고 있었니?",
      "en": "Were you singing?"
     },
     {
      "n": 95,
      "ko": "뭐 연습하고 있었어?",
      "en": "What were you practicing?"
     },
     {
      "n": 96,
      "ko": "기분은 어땠어?",
      "en": "How were you feeling?"
     },
     {
      "n": 97,
      "ko": "너희 왜 싸우고 있었어?",
      "en": "Why were you(two/guys) fighting/arguing?"
     },
     {
      "n": 98,
      "ko": "넌 왜 그 앨 피하고 있었어?",
      "en": "Why were you avoiding him/her?"
     },
     {
      "n": 99,
      "ko": "뭘 숨기고 있었어?",
      "en": "What were you hiding?"
     },
     {
      "n": 100,
      "ko": "왜 속삭이고 있었어?",
      "en": "Why were you whispering?"
     }
    ]
   },
   {
    "u": 8,
    "title": "Unit 8",
    "items": [
     {
      "n": 1,
      "ko": "나 이거 전에 해봤어.",
      "en": "I have done it before."
     },
     {
      "n": 2,
      "ko": "나 그 애 만나 본 적 있어.",
      "en": "I have met her/him before."
     },
     {
      "n": 3,
      "ko": "나 그거 들어 봤어.",
      "en": "I have heard it/that."
     },
     {
      "n": 4,
      "ko": "나 저분 본 적 있는데. 어딘지는 기억이 안 나.",
      "en": "I have seen her/him before, but I don't remember where (it was)."
     },
     {
      "n": 5,
      "ko": "나 이거 전에 써 봤어.",
      "en": "I have used it before."
     },
     {
      "n": 6,
      "ko": "우리 이거 먹어 봤잖아. 기억나?",
      "en": "We have tried it. Do you remember(it)?"
     },
     {
      "n": 7,
      "ko": "생각해 봤어. 그리고, 가기로 했어.",
      "en": "I have thought about it. And I (have) decided to go there."
     },
     {
      "n": 8,
      "ko": "나 그 영화 3번 봤어.",
      "en": "I have seen the/that movie 3 times."
     },
     {
      "n": 9,
      "ko": "우리 전에 만나 본 적 있어요. 작년이었죠.",
      "en": "We have met before. It was last year."
     },
     {
      "n": 10,
      "ko": "나 그거 읽어 봤어. 좋은 책이야.",
      "en": "I have read it. It is a good/nice/great book."
     },
     {
      "n": 11,
      "ko": "나 은행 갔다 왔어.",
      "en": "I have been to the bank."
     },
     {
      "n": 12,
      "ko": "우리 거기 여러 번 가 봤어.",
      "en": "We have been there many times."
     },
     {
      "n": 13,
      "ko": "나 여기 전에 와 봤어.",
      "en": "I have been here before."
     },
     {
      "n": 14,
      "ko": "나 화장실 다녀왔어.",
      "en": "I have been to the bathroom/toilet/restroom."
     },
     {
      "n": 15,
      "ko": "우리 여기 전에 몇 번 와 봤어요.",
      "en": "We have been here a few times before."
     },
     {
      "n": 16,
      "ko": "나 제주도 세 번 가 봤어. 난 제주도 좋아해.",
      "en": "I have been to Jeju Island 3 times. I like/love Jeju island."
     },
     {
      "n": 17,
      "ko": "그 애 일본에 많이 가 봤어. 그의 가족이 거기 있어.",
      "en": "He/She has been to Japan many times. His/Her family is there. ( = He/She has his/her family there. )"
     },
     {
      "n": 18,
      "ko": "그 앤 많은 나라에 가 봤어. 그 앤 여행을 많이 해.",
      "en": "He/She has been to many countries. He/she travels a lot."
     },
     {
      "n": 19,
      "ko": "저 여기 두 번 와 봤어요.",
      "en": "I have been here twice."
     },
     {
      "n": 20,
      "ko": "나 중국에 한 번 가 봤어. 작년에 갔었어. 다시 가고 싶어.",
      "en": "I have been to China once. I went there last year. I want to(=I'd like to) go there again."
     },
     {
      "n": 21,
      "ko": "나 여기서 산지 3년 됐어.",
      "en": "I have lived here for 3 years."
     },
     {
      "n": 22,
      "ko": "나 2017년 부터 여기서 일했어.",
      "en": "I have worked here since 2017."
     },
     {
      "n": 23,
      "ko": "우리 서로 안지 오래됐어요. 우리 2002년에 처음 만났어.",
      "en": "We have known each other long/ for a long time. We first met in 2002."
     },
     {
      "n": 24,
      "ko": "나 그거 가진지 한 6개월 됐어.",
      "en": "I have had it for about 6 months."
     },
     {
      "n": 25,
      "ko": "나 그 차 몰은지 오래됐지. 이제 새 차를 원해!",
      "en": "I have driven that/the car long/ for a long time. I want(=I'd like) a new car now."
     },
     {
      "n": 26,
      "ko": "나 아침에 일어났을 때부터, 머리가 아팠어.",
      "en": "Since I got up this morning, I have had a headache."
     },
     {
      "n": 27,
      "ko": "내가 20살 때부터, 이 순간을 원해왔어.",
      "en": "Since I was 20 (years old), I have wanted this moment."
     },
     {
      "n": 28,
      "ko": "그 애 한국에 온지(있은지) 2년 됐어. 2년 전에 한국에 왔어.",
      "en": "He has been in Korea for 2 years. He came to Korea 2 years ago."
     },
     {
      "n": 29,
      "ko": "나 이거 늘 갖고 싶었어. 내가 30살 됐을 때부터.",
      "en": "I have always wanted to have it/this. Since I turned 30 (years old)."
     },
     {
      "n": 30,
      "ko": "항상 만나고 싶었어요. 얘기(=너에 대해) 많이 들었어요. 만나서 정말 반가워요.",
      "en": "I have always wanted to meet you. I have heard a lot about you. It is so/very/really nice to meet you."
     },
     {
      "n": 31,
      "ko": "우리 사귄지 3년 됐어.",
      "en": "We have been together for 3 years."
     },
     {
      "n": 32,
      "ko": "나 요즘 바빴어.",
      "en": "I have been busy recently."
     },
     {
      "n": 33,
      "ko": "나 계속 너 걱정했어.",
      "en": "I have been worried about you."
     },
     {
      "n": 34,
      "ko": "(그거) 지금까진 좋았어.",
      "en": "It has been good so far. / So far, so good."
     },
     {
      "n": 35,
      "ko": "나 잘 지냈어. 넌?",
      "en": "I have been well/good. How/What about you?"
     },
     {
      "n": 36,
      "ko": "요새 계속 춥네.",
      "en": "It has been cold recently."
     },
     {
      "n": 37,
      "ko": "그 애 선생인지 오래됐어.",
      "en": "He/She has been a teacher for a long time."
     },
     {
      "n": 38,
      "ko": "우린 어렸을 때부터, 제일 친한 친구였어.",
      "en": "Since we were kids/children/little, we have been best friends."
     },
     {
      "n": 39,
      "ko": "그 애 병원에 있은지 일주일째야. 내일 그 애 보러 갈거야.",
      "en": "He/She has been in the/a hospital for a week. I am going to visit (=go and see) him/her tomorrow."
     },
     {
      "n": 40,
      "ko": "너 아침내내 삐져있네. 뭐가 문제야?",
      "en": "You have been grumpy all morning. What's wrong? / What's the matter?"
     },
     {
      "n": 41,
      "ko": "생각해 본 적이 없어요.",
      "en": "I haven't thought about it/that (before)."
     },
     {
      "n": 42,
      "ko": "이거 안 해봤어요. 그래서 어떻게 쓰는 건지 몰라요.",
      "en": "I haven't done/tried it/this. So I don't know how to use it."
     },
     {
      "n": 43,
      "ko": "이거 아직 안 써 봤어.",
      "en": "I haven't used it yet."
     },
     {
      "n": 44,
      "ko": "나 그 애 몇 번 본 적 있는데, 얘기는 안 해봤어.",
      "en": "I have seen her a few times before, but I haven't spoken/talked to her/him."
     },
     {
      "n": 45,
      "ko": "나 이거 할 시간이 없었어.",
      "en": "I haven't had time to do it/this."
     },
     {
      "n": 46,
      "ko": "나 그 영화 아직 안 봤어. 같이 볼까?",
      "en": "I haven't seen the/that movie yet. Shall we watch it together?"
     },
     {
      "n": 47,
      "ko": "그 애 아직 안 왔어.",
      "en": "He hasn't come yet."
     },
     {
      "n": 48,
      "ko": "그거 아직 도착 안 했어요. 언제 보냈어요?",
      "en": "It hasn't arrived yet. When did you send it?"
     },
     {
      "n": 49,
      "ko": "너가 날 위해 그거 사준 후로는, 난 다른 건 안 썼어.",
      "en": "Since you bought/got it for me, I haven't used anything else."
     },
     {
      "n": 50,
      "ko": "그 일이 있은 후로는, 나 그 애 못 봤어.",
      "en": "Since it happened, I haven't seen him/her."
     },
     {
      "n": 51,
      "ko": "거기 아직 안 가 봤어.",
      "en": "I haven't been there yet."
     },
     {
      "n": 52,
      "ko": "나 전에 여기 안 와 봤어. 처음이야.",
      "en": "I haven't been here before. It is my first time."
     },
     {
      "n": 53,
      "ko": "우리 제주도 아직 안 가 봤어.",
      "en": "We haven't been to Jeju island yet."
     },
     {
      "n": 54,
      "ko": "유럽 안 가 봤어.",
      "en": "I haven't been to Europe."
     },
     {
      "n": 55,
      "ko": "나 아직 우체국 안 갔다왔어. 시간이 없었어.",
      "en": "I haven't been to the post office yet. I haven't had time."
     },
     {
      "n": 56,
      "ko": "우리 거기 안 가 본지 오래됐다. 오늘 거기 갈래?",
      "en": "We haven't been there long/ for a long time. Do you want to (=Would you like to) go there today?"
     },
     {
      "n": 57,
      "ko": "날씨가 요즘 계속 안 좋았어.",
      "en": "The weather hasn't been good recently."
     },
     {
      "n": 58,
      "ko": "그때 이후론, 그거 같지 않아. 모든 게 다르게 느껴져.",
      "en": "Since then, it hasn't been the same. Everything feels different."
     },
     {
      "n": 59,
      "ko": "그거 그렇게 오래되진 않았어. 한 5분 됐어.",
      "en": "It hasn't been that long. It has been about 5 minutes."
     },
     {
      "n": 60,
      "ko": "넌 제 시간인 적이 없어. 항상 늦어. 이번엔 너의 핑계가 뭐야?",
      "en": "You have never been on time. / You haven't been on time before. You are always late. What is your excuse (for) this time?"
     },
     {
      "n": 61,
      "ko": "우리 서로 안 본지 오래됐다. 정말 오래됐다.",
      "en": "We haven't seen each other long/for a long time. It has been really/so/very long."
     },
     {
      "n": 62,
      "ko": "나 운동 안 한지 몇 달 됐어.",
      "en": "I haven't worked out/exercised for a few months."
     },
     {
      "n": 63,
      "ko": "나 골프 안 친지 1년 됐어.",
      "en": "I haven't played golf for a year."
     },
     {
      "n": 64,
      "ko": "나 여기서 일한지 오래되지 않았어. 작년 12월에 시작했어.",
      "en": "I haven't worked here long/for a long time. I started/began last December."
     },
     {
      "n": 65,
      "ko": "나 그거 안 한지 오래됐어.",
      "en": "I haven't done it long/for a long time."
     },
     {
      "n": 66,
      "ko": "아침 이후로 아무것도 안 먹었어.",
      "en": "I haven't eaten anything since breakfast."
     },
     {
      "n": 67,
      "ko": "여기 온지(있은지) 오래 안 됐어. 5분 전에 도착했어.",
      "en": "I haven't been here long/for a long time. I arrived/got here 5 minutes ago."
     },
     {
      "n": 68,
      "ko": "나 그 애랑 연락 안 한지 몇 달 됐어.",
      "en": "I haven't spoken to him/her for a few months."
     },
     {
      "n": 69,
      "ko": "그(때) 이후론 (난) 아무 문제 없었어.",
      "en": "I haven't had any problems since then."
     },
     {
      "n": 70,
      "ko": "그 애 아직 안 나갔어. 아직 (여기) 있어.",
      "en": "He/She hasn't left/gone out yet. He/She is still here."
     },
     {
      "n": 71,
      "ko": "우리 전에 만난 적 있었나요? 낯익어 보여요.",
      "en": "Have we met before? You look familiar."
     },
     {
      "n": 72,
      "ko": "이 책 읽어 봤어?",
      "en": "Have you read this book?"
     },
     {
      "n": 73,
      "ko": "생각해봤니? 너의 결정이 뭐야?",
      "en": "Have you thought about it? What is your decision?"
     },
     {
      "n": 74,
      "ko": "이거 많이 해봤어? 너무 잘 한다!",
      "en": "Have you tried it a lot/many times? You do it so/very/really well. / You are doing it so well. / You are good at it."
     },
     {
      "n": 75,
      "ko": "몇 번 해봤어?",
      "en": "How many times have you done it?"
     },
     {
      "n": 76,
      "ko": "차 키 찾는데. (그게) 어디 갔지? 봤어?",
      "en": "I am looking for my/the car key. Where has it gone? Have you seen it?"
     },
     {
      "n": 77,
      "ko": "이거 먹어 봤어? 정말 맛있어.",
      "en": "Have you tried it/this? It is so/very/really delicious/yum/yummy."
     },
     {
      "n": 78,
      "ko": "이거 사용해 본 적 있어? 어떻게 쓰는지 알아?",
      "en": "Have you used this/it before? Do you know how to use it?"
     },
     {
      "n": 79,
      "ko": "내가 너한테 몇 번을 말했어? 이거 아직 하면 안 돼. 때가 아니야.",
      "en": "How many times have I told you? You can't do it yet. It/Now is not the time."
     },
     {
      "n": 80,
      "ko": "한국에 온지(있은지) 얼마나 됐어요? 한국말 잘 하시네요!",
      "en": "How long have you been in Korea? You speak Korean well. / You speak good Korean."
     },
     {
      "n": 81,
      "ko": "어디 갔다왔어? 나 너 찾았잖아.(= 찾고 있었어)",
      "en": "Where have you been? I was looking for you. / I have been looking for you."
     },
     {
      "n": 82,
      "ko": "우체국에 갔다왔니?",
      "en": "Have you been to the post office?"
     },
     {
      "n": 83,
      "ko": "이 식당에 와 본 적 있니?",
      "en": "Have you been to this restaurant before?"
     },
     {
      "n": 84,
      "ko": "호주 가 봤어?",
      "en": "Have you been to Australia?"
     },
     {
      "n": 85,
      "ko": "전에 여기 와 본적 있어요? 처음이에요?",
      "en": "Have you been here before? Is it your first time?"
     },
     {
      "n": 86,
      "ko": "부산 가 봤어요?",
      "en": "Have you been to Busan?"
     },
     {
      "n": 87,
      "ko": "오랜만이야. 잘지냈어? 어떻게 지냈어?",
      "en": "Long time no see. Have you been well? How have you been?"
     },
     {
      "n": 88,
      "ko": "요즘 바빴니?",
      "en": "Have you been busy recently?"
     },
     {
      "n": 89,
      "ko": "아팠니? 아픈지 얼마나 오래됐어?",
      "en": "Have you been sick? How long have you been sick?"
     },
     {
      "n": 90,
      "ko": "오늘 하루 어땠어? (지금까지)",
      "en": "How has your day been?"
     },
     {
      "n": 91,
      "ko": "여기서 일한지 얼마나 오래됐어?",
      "en": "How long have you worked here?"
     },
     {
      "n": 92,
      "ko": "거기서 산지 오래됐어?",
      "en": "How long have you lived there?"
     },
     {
      "n": 93,
      "ko": "얼마나 오래됐니?",
      "en": "How long has it been?"
     },
     {
      "n": 94,
      "ko": "여기 온지(있은지) 오래됐니? 언제 왔어?",
      "en": "How long have you been here? When did you come/get here?"
     },
     {
      "n": 95,
      "ko": "결혼한지 얼마나 오래됐어요?",
      "en": "How long have you been married?"
     },
     {
      "n": 96,
      "ko": "(이거) 이런지 얼마나 오래됐어요?",
      "en": "How long has it been like this?"
     },
     {
      "n": 97,
      "ko": "너 그거 안지 얼마나 됐어?",
      "en": "How long have you known?"
     },
     {
      "n": 98,
      "ko": "작가인지 얼마나 오래됐어요?",
      "en": "How long have you been a writer/an author?"
     },
     {
      "n": 99,
      "ko": "너희 서로 안지 얼마나 됐어?",
      "en": "How long have you known each other?"
     },
     {
      "n": 100,
      "ko": "그 애가 너의 절친인지 얼마나 오래됐어?",
      "en": "How long has he/she been your best friend?"
     }
    ]
   },
   {
    "u": 9,
    "title": "Unit 9",
    "items": [
     {
      "n": 1,
      "ko": "내가 어렸을 땐, 아주 빨리 잘 뛸 수 있었는데.",
      "en": "When I was little/a child/a kid/a student/young, I could run really/very/so fast."
     },
     {
      "n": 2,
      "ko": "피아노를 아주 잘 칠 수 있었지.",
      "en": "I could play the piano very well."
     },
     {
      "n": 3,
      "ko": "내가 20대 땐, 나도 그거 할 수 있었어.",
      "en": "When I was in my 20's, I could do that, too."
     },
     {
      "n": 4,
      "ko": "몇 년 전엔 술을 밤새도록 마실 수 있었어.",
      "en": "I could drink all night a few years ago."
     },
     {
      "n": 5,
      "ko": "나 타이핑 엄청 빨리 할 수 있었는데.",
      "en": "I could type really/so/very fast."
     },
     {
      "n": 6,
      "ko": "그 사건 전엔 그 애 수영을 정말 잘 할 수 있었어. 정말 활동적이었어.",
      "en": "He could swim very well before the/that incident. He was very/so/really active."
     },
     {
      "n": 7,
      "ko": "그 사고 전엔 그는 테니스를 하루종일 칠 수 있었어.",
      "en": "He could play tennis all day before the/that accident."
     },
     {
      "n": 8,
      "ko": "우리가 학생일 땐, 우리 매일 어울릴 수 있었는데.",
      "en": "When we were students, we could hang out every day."
     },
     {
      "n": 9,
      "ko": "아무도 그 앨 말릴 수 없었어. 고집이 셌어.",
      "en": "Nobody/No one could stop him/her. He/She was stubborn."
     },
     {
      "n": 10,
      "ko": "아무것도 내 마음을 바꿀 수 없었어.",
      "en": "Nothing could change my mind."
     },
     {
      "n": 11,
      "ko": "어제 아무것도 못 했어. 너무 피곤했거든.",
      "en": "I couldn't do anything yesterday. I was exhausted (=so/very/really tired)."
     },
     {
      "n": 12,
      "ko": "그 애는 못 왔어.",
      "en": "He couldn't come."
     },
     {
      "n": 13,
      "ko": "미안, 내가 어제 못 왔어. 시간이 없었어.",
      "en": "Sorry, I couldn't come yesterday. I didn't have time."
     },
     {
      "n": 14,
      "ko": "유감이지만, 다 못 했어요.",
      "en": "I am afraid I couldn't finish it. / I couldn't do it/them all."
     },
     {
      "n": 15,
      "ko": "아무한테도 말 못 했어.",
      "en": "I couldn't tell anyone/anybody."
     },
     {
      "n": 16,
      "ko": "아무말도 못 했어.",
      "en": "I couldn't say anything."
     },
     {
      "n": 17,
      "ko": "난 그거 못 믿겠더라고. (세상에, 황당했어)",
      "en": "I couldn't believe it."
     },
     {
      "n": 18,
      "ko": "여기다가 아무것도 못 적었어요. 여기 뭘 써야 해요?",
      "en": "I couldn't write anything here. What do I have to write (down) here?"
     },
     {
      "n": 19,
      "ko": "어젯밤에 너무 피곤했어. 근데, 잠을 전혀 못 잤어.",
      "en": "I was exhausted(=very tired) last night. But I couldn't sleep at all."
     },
     {
      "n": 20,
      "ko": "너무 피곤했어. 그래서, 오늘 아침에 일찍 못 일어났어.",
      "en": "I was very tired. So I couldn't get up early this morning."
     },
     {
      "n": 21,
      "ko": "알람도 못 들었어.",
      "en": "I couldn't even hear the alarm."
     },
     {
      "n": 22,
      "ko": "나 어제 Jim 봤는데, 그 애한테 말 못 했어.",
      "en": "I saw Jim yesterday, but I couldn't tell him."
     },
     {
      "n": 23,
      "ko": "네 전화번호를 찾을 수가 없었어. 그래서 전화 못 했어.",
      "en": "I couldn't find your (phone) number. So I couldn't call (you)."
     },
     {
      "n": 24,
      "ko": "숙제 못 했어. 시간이 없었어요.",
      "en": "I couldn't do (my) homework. I didn't have time."
     },
     {
      "n": 25,
      "ko": "그 남자 말 너무 빨리해서, 못 알아들었어.",
      "en": "He/She spoke/talked so/very/really fast, so I couldn't understand."
     },
     {
      "n": 26,
      "ko": "아무것도 못 먹었어. 아무것도 먹고 싶지 않았어.",
      "en": "I couldn't eat anything. I didn't want to eat anything."
     },
     {
      "n": 27,
      "ko": "사진 못 찍었어.",
      "en": "I couldn't take a picture/photo."
     },
     {
      "n": 28,
      "ko": "그땐 영어를 전혀 못 했어.",
      "en": "I couldn't speak English at all then."
     },
     {
      "n": 29,
      "ko": "아무것도 못 찾았어. 너무 답답했어.",
      "en": "I couldn't find anything. I was frustrated. / It was frustrating."
     },
     {
      "n": 30,
      "ko": "움직일 수가 없었어.",
      "en": "I couldn't move."
     },
     {
      "n": 31,
      "ko": "미안해. 널 못 도와줘서.",
      "en": "Sorry. I couldn't help you."
     },
     {
      "n": 32,
      "ko": "고를 수가 없었어. 난 다 좋았어.",
      "en": "I couldn't choose. I liked/loved all/everything/all of them."
     },
     {
      "n": 33,
      "ko": "그거 못 샀어. 지갑을 집에 두고 갔었거든.",
      "en": "I couldn't buy/get it. I left my purse/wallet at home."
     },
     {
      "n": 34,
      "ko": "난 그 애 못 알아봤어. 그 애 너무 달라 보였어.",
      "en": "I couldn't recognize him/her. He/She looked so/very/really different."
     },
     {
      "n": 35,
      "ko": "그거 못 썼어. 어떻게 쓰는 건지 몰라.",
      "en": "I couldn't use it. I don't know how to use it."
     },
     {
      "n": 36,
      "ko": "아무것도 못 샀어. 뭘 살지 모르겠더라고.",
      "en": "I couldn't buy/get anything. I didn't know what to buy/get."
     },
     {
      "n": 37,
      "ko": "결정 못 했어. 뭘 할지 모르겠어.",
      "en": "I couldn't decide. I don't know what to do."
     },
     {
      "n": 38,
      "ko": "어디로 갈지 결정 못 했어.",
      "en": "I couldn't decide where to go."
     },
     {
      "n": 39,
      "ko": "말 한마디 못 했어. 뭘 말할지 몰랐어.",
      "en": "I couldn't say a word. I didn't know what to say."
     },
     {
      "n": 40,
      "ko": "가만히 있을 수가 없었어.",
      "en": "I couldn't stay/keep still."
     },
     {
      "n": 41,
      "ko": "그거 못 가져왔어요. 너무 무거웠어요.",
      "en": "I couldn't bring it. It was very/so/really/too heavy."
     },
     {
      "n": 42,
      "ko": "난 그를 이해 못 하겠더라고.",
      "en": "I couldn't understand him/her."
     },
     {
      "n": 43,
      "ko": "울음을 멈출 수가 없었어.",
      "en": "I couldn't stop crying."
     },
     {
      "n": 44,
      "ko": "너무 웃겨서, 웃음을 멈출 수가 없었어.",
      "en": "It was so/very/really funny, (that) I couldn't stop laughing."
     },
     {
      "n": 45,
      "ko": "너무 행복했어. 웃음을 멈출 수가 없었어.",
      "en": "I was so/very/really happy. I couldn't stop smiling."
     },
     {
      "n": 46,
      "ko": "우리 못 이겼어. 우리가 졌어.",
      "en": "We couldn't win. We lost."
     },
     {
      "n": 47,
      "ko": "잠을 잘 못 잤어. 너무 피곤하다.",
      "en": "I couldn't sleep well. I am so/really/very tired. (=I am exhausted.)"
     },
     {
      "n": 48,
      "ko": "그 앨 용서할 수가 없었어.",
      "en": "I couldn't forgive him."
     },
     {
      "n": 49,
      "ko": "집중 못 했어. 너무 시끄러웠어.",
      "en": "I couldn't focus/concentrate. It was so/very/really noisy/loud."
     },
     {
      "n": 50,
      "ko": "나 그 애 설득 못 했어. 어쩔 수 없지 뭐.",
      "en": "I couldn't persuade him/her. Never mind."
     },
     {
      "n": 51,
      "ko": "난 거짓말 못 하겠더라고.",
      "en": "I couldn't lie."
     },
     {
      "n": 52,
      "ko": "알아내지 못 했어.",
      "en": "I couldn't find (it) out."
     },
     {
      "n": 53,
      "ko": "아무것도 기억 안 나더라. (기억 못 했어)",
      "en": "I couldn't remember anything."
     },
     {
      "n": 54,
      "ko": "이거 못 외웠어. 어려워!",
      "en": "I couldn't memorize it. It is hard/difficult."
     },
     {
      "n": 55,
      "ko": "너무 화가났었어. 진정할 수가 없었어.",
      "en": "I was furious (=so/very/really angry/mad). I couldn't calm (myself) down."
     },
     {
      "n": 56,
      "ko": "그걸 살 여유가 없었어.",
      "en": "I couldn't afford it/that. / I couldn't afford to buy it/that."
     },
     {
      "n": 57,
      "ko": "그거 해결하지 못 했어. 그냥 흘려 버릴거야.",
      "en": "I couldn't fix/solve it/that. I am just going to let it go."
     },
     {
      "n": 58,
      "ko": "(내 스스로) 즐기지 못 했어. 내 마음이 다른 데 있었어.",
      "en": "I couldn't enjoy myself. My mind was elsewhere/ somewhere else."
     },
     {
      "n": 59,
      "ko": "그땐 내 자신을 사랑할 수 없었어.",
      "en": "I couldn't love myself then."
     },
     {
      "n": 60,
      "ko": "너한테 전화 못 했어. 미안해.",
      "en": "I couldn't call you. Sorry."
     },
     {
      "n": 61,
      "ko": "이것 좀 해주실래요?",
      "en": "Could you do this/it?"
     },
     {
      "n": 62,
      "ko": "부탁 좀 들어주실래요?",
      "en": "Could you do me a favor?"
     },
     {
      "n": 63,
      "ko": "저희한테 10분 있다가 다시 전화 해주실래요?",
      "en": "Could you call us back in 10 minutes?"
     },
     {
      "n": 64,
      "ko": "더 일찍 와주실래요?",
      "en": "Could you come (a little bit) earlier?"
     },
     {
      "n": 65,
      "ko": "그거 다시 말해 주실래요?",
      "en": "Could you say that again (=repeat that)?"
     },
     {
      "n": 66,
      "ko": "말 천천히 해주실래요?",
      "en": "Could you speak slowly?"
     },
     {
      "n": 67,
      "ko": "그거 가져와 주실래요?",
      "en": "Could you bring it/that?"
     },
     {
      "n": 68,
      "ko": "잠깐만 기다려주실래요?",
      "en": "Could you wait (for) a minute/moment/second?"
     },
     {
      "n": 69,
      "ko": "저한테 이메일 보내주실래요?",
      "en": "Could you email me?"
     },
     {
      "n": 70,
      "ko": "결정하면, 저한테 알려주실래요?",
      "en": "When you decide, could you let me know?"
     },
     {
      "n": 71,
      "ko": "저 기다려 주실래요?",
      "en": "Could you wait for me?"
     },
     {
      "n": 72,
      "ko": "다른 것 좀 제게 보여주실래요?",
      "en": "Could you show me something else?"
     },
     {
      "n": 73,
      "ko": "조금만 옆으로 가주실래요?",
      "en": "Could you move over a little/a bit?"
     },
     {
      "n": 74,
      "ko": "그걸 제게 설명해주실래요?",
      "en": "Could you explain it to me?"
     },
     {
      "n": 75,
      "ko": "이거 어떻게 쓰는 건지 제게 보여주실래요?",
      "en": "Could you show me how to use it/this?"
     },
     {
      "n": 76,
      "ko": "이거 어떻게 하는 건지 제게 가르쳐주실래요?",
      "en": "Could you teach me how to do it/this?"
     },
     {
      "n": 77,
      "ko": "이것 좀 도와주실래요?",
      "en": "Could you help me with it/this?"
     },
     {
      "n": 78,
      "ko": "다시 한 번 확인해주실래요?",
      "en": "Could you double check (=check it again) ?"
     },
     {
      "n": 79,
      "ko": "제 손을 잡아줄래요?",
      "en": "Could you hold my hand(s)?"
     },
     {
      "n": 80,
      "ko": "제 전화 좀 건네줄래요?",
      "en": "Could you hand me my phone?"
     },
     {
      "n": 81,
      "ko": "저기 앉아도 되나요?",
      "en": "Could I sit here?"
     },
     {
      "n": 82,
      "ko": "저 지금 가도 될까요?",
      "en": "Could I go now?"
     },
     {
      "n": 83,
      "ko": "제가 뭔가 물어봐도 되나요?",
      "en": "Could I ask something?"
     },
     {
      "n": 84,
      "ko": "개인적인 질문 해도 되나요?",
      "en": "Could I ask a personal question?"
     },
     {
      "n": 85,
      "ko": "매니저랑 통화할 수 있나요?",
      "en": "Could I speak/talk to a/the manager?"
     },
     {
      "n": 86,
      "ko": "저 이거 가져가도 되나요?",
      "en": "Could I take it?"
     },
     {
      "n": 87,
      "ko": "나중에 결정해도 되나요? 결정하자마자, 전화할게요.",
      "en": "Could I decide later? As soon as I decide, I will call you."
     },
     {
      "n": 88,
      "ko": "우리 다른 얘기해도 될까요?",
      "en": "Could we talk about something else?"
     },
     {
      "n": 89,
      "ko": "우리 다음 주 중 만날 수 있을까요?",
      "en": "Could we meet sometime next week?"
     },
     {
      "n": 90,
      "ko": "우리 화제를 바꿔도 될까요? 그거에 대해 얘기하고 싶지 않아.",
      "en": "Could we change the subject? I don't want to(=I wouldn't like to) talk about that/it."
     },
     {
      "n": 91,
      "ko": "제가 오늘 저녁에 가지러 가도 되나요?",
      "en": "Could I pick it up this evening?"
     },
     {
      "n": 92,
      "ko": "그거 내일 가져다 드려도 될까요?",
      "en": "Could I drop it off tomorrow?"
     },
     {
      "n": 93,
      "ko": "제가 시간을 가지고 생각해봐도 되나요? 시간이 더 필요해요.",
      "en": "Could I have time to think about it? I need more time."
     },
     {
      "n": 94,
      "ko": "이번엔 제가 골라도 되나요? 이번엔 내가 고를래.",
      "en": "Could I choose/pick this time? I want to(=I'd like to) choose/pick this time."
     },
     {
      "n": 95,
      "ko": "제 폰이 죽었어요. (배터리 없음) 너의 폰 좀 사용해도 돼요?",
      "en": "My phone is dead. Could I use your phone?"
     },
     {
      "n": 96,
      "ko": "너희의 샘플들을 볼 수 있을까요?",
      "en": "Could I see/look at your samples?"
     },
     {
      "n": 97,
      "ko": "이 안이 조금 더워요. 이거 열어놔도 되나요?",
      "en": "It is a (little) bit warm/hot in here. Could I leave it open?"
     },
     {
      "n": 98,
      "ko": "물 좀 주세요.",
      "en": "Could I have (some/a glass of) water, please?"
     },
     {
      "n": 99,
      "ko": "앞접시 주세요.",
      "en": "Could I have a plate/an extra plate, please?"
     },
     {
      "n": 100,
      "ko": "제가 오늘 할 일이 많아서요.(=할 걸 많이 가지고 있다) 다음번을 기약해도 될까요?",
      "en": "I have a lot(of things) to do today. Could I take a rain check?"
     }
    ]
   },
   {
    "u": 10,
    "title": "Unit 10",
    "items": [
     {
      "n": 1,
      "ko": "나라면 살 거야. 정말 좋은 가격인데.",
      "en": "I would buy/get it. It is such a good price."
     },
     {
      "n": 2,
      "ko": "나라면 이걸로 할 거야.",
      "en": "I would go with it/this."
     },
     {
      "n": 3,
      "ko": "나라면 알텐데…",
      "en": "I would know (it)."
     },
     {
      "n": 4,
      "ko": "나라면 알고 싶을 거야.",
      "en": "I would want to know."
     },
     {
      "n": 5,
      "ko": "난 거기 가고 싶을 거야.",
      "en": "I would want to go there."
     },
     {
      "n": 6,
      "ko": "나라면 이걸로 쓸 거야. 이게 쓰기 더 쉬워.",
      "en": "I would use this/it. It is easier to use."
     },
     {
      "n": 7,
      "ko": "나라도 그 애 믿을 거야. 너의 잘못이 아니야.",
      "en": "I would believe him/her, too. It is not your fault."
     },
     {
      "n": 8,
      "ko": "내가 너라면, 그거 할 거야.",
      "en": "If I were you, I would do it/that."
     },
     {
      "n": 9,
      "ko": "내가 너라면, 그걸 선택할 거야.",
      "en": "If I were you, I would choose/pick it/that."
     },
     {
      "n": 10,
      "ko": "내가 네 입장이라면, 그거 무시해 버릴 거야.",
      "en": "If I were in your shoes, I would ignore it/that."
     },
     {
      "n": 11,
      "ko": "나라면 행복할 거야.",
      "en": "I would be happy."
     },
     {
      "n": 12,
      "ko": "나라도 궁금할 거야.",
      "en": "I would be curious, too/as well."
     },
     {
      "n": 13,
      "ko": "나라면 정말 걱정될 거야.",
      "en": "I would be worried sick."
     },
     {
      "n": 14,
      "ko": "난 멋진 걸 사겠어.",
      "en": "I would buy something cool."
     },
     {
      "n": 15,
      "ko": "난 편한 걸 입겠어.",
      "en": "I would wear something comfortable."
     },
     {
      "n": 16,
      "ko": "나도 그게 싫을거야. 이해해.",
      "en": "I would hate it, too/as well. I understand."
     },
     {
      "n": 17,
      "ko": "나라도 동의하지 않겠어.",
      "en": "I would disagree, too/as well."
     },
     {
      "n": 18,
      "ko": "나라도 배신감 들 거야.",
      "en": "I would feel betrayed, too/as well."
     },
     {
      "n": 19,
      "ko": "나라도 실망할 거야.",
      "en": "I would be disappointed, too/as well."
     },
     {
      "n": 20,
      "ko": "나라도 쪽팔릴 거야.",
      "en": "I would be embarrassed, too/as well."
     },
     {
      "n": 21,
      "ko": "난 정말 멋진 차를 사겠어.",
      "en": "I would buy a really cool/nice car."
     },
     {
      "n": 22,
      "ko": "난 최선을 다해보겠어. 우리 할 수 있어.",
      "en": "I would do/try my best. We can do it."
     },
     {
      "n": 23,
      "ko": "난 세계를 여행하겠어. 너무 좋을 거야.",
      "en": "I would travel the world. It would be so/really/very good."
     },
     {
      "n": 24,
      "ko": "그 애를 봐주겠어.",
      "en": "I would go easy on him/her."
     },
     {
      "n": 25,
      "ko": "계속 노력하겠어.",
      "en": "I would keep trying."
     },
     {
      "n": 26,
      "ko": "난 계속 가겠어. 절대 포기하지 않을 거야.",
      "en": "I would keep going. I would never give up/quit."
     },
     {
      "n": 27,
      "ko": "난 밝은면을 볼 거야. 최소한 노력해 볼 거야.",
      "en": "I would look at the bright side. I would try (hard) at least."
     },
     {
      "n": 28,
      "ko": "그거 재미있겠다.",
      "en": "That/It would be fun."
     },
     {
      "n": 29,
      "ko": "그럼 좋겠어요. 고마워요.",
      "en": "That/It would be good/nice/great. Thank you."
     },
     {
      "n": 30,
      "ko": "그러면 충분할 거예요.",
      "en": "That/It would be enough."
     },
     {
      "n": 31,
      "ko": "나라면 그거 안 해.",
      "en": "I wouldn't do it."
     },
     {
      "n": 32,
      "ko": "나라면 거기 안 가.",
      "en": "I wouldn't go there."
     },
     {
      "n": 33,
      "ko": "나라면 그런 말 안 해. 너무 무례해.",
      "en": "I wouldn't say that. It is so/very/really rude."
     },
     {
      "n": 34,
      "ko": "너라면 오래 버티지 않을 거야.",
      "en": "You wouldn't last long."
     },
     {
      "n": 35,
      "ko": "넌 좋아하지 않을 거야.",
      "en": "You wouldn't like it."
     },
     {
      "n": 36,
      "ko": "넌 안 하겠지.",
      "en": "You wouldn't do it/that."
     },
     {
      "n": 37,
      "ko": "넌 아무에게도 말 안 하겠지. 알아.",
      "en": "You wouldn't tell anybody/anyone. I know."
     },
     {
      "n": 38,
      "ko": "넌 나 없이는 아무데도 안 갈 거지. 맞지?",
      "en": "You wouldn't go anywhere without me. (Am I/Is that) Right?"
     },
     {
      "n": 39,
      "ko": "난 하나도 바꾸지 않을 거야.",
      "en": "I wouldn't change a thing."
     },
     {
      "n": 40,
      "ko": "나라도 안 올 거야.",
      "en": "I wouldn't come, either."
     },
     {
      "n": 41,
      "ko": "내가 너라면, 난 포기하지 않을 거야.",
      "en": "If I were you, I wouldn't give up/quit."
     },
     {
      "n": 42,
      "ko": "난 그 애 더 이상 안 볼 거야.",
      "en": "I wouldn't see him anymore."
     },
     {
      "n": 43,
      "ko": "내가 네 상황이라면, 내 자신을 탓하지 않을 거야. 넌 최선을 다했어.",
      "en": "If I were in your position/situation, I wouldn't blame myself. You did your best."
     },
     {
      "n": 44,
      "ko": "내가 네 입장이라면, 심각하게 받아들이지 않을 거야.",
      "en": "If I were in your shoes, I wouldn't take it seriously."
     },
     {
      "n": 45,
      "ko": "나라면 걱정하지 않을 거야. 그거 잘 될 거야.",
      "en": "I wouldn't worry. It will work out (well). / It is going to work out (well)."
     },
     {
      "n": 46,
      "ko": "내가 너라면, 지금 멈추지 않을 거야. 너 지금까지 너무 잘했어!",
      "en": "If I were you, I wouldn't stop now. You have done so well so far."
     },
     {
      "n": 47,
      "ko": "난 그 애한테 돈 빌려주지 않을 거야.",
      "en": "I wouldn't lend (any) money to him. / I wouldn't lend him (any) money."
     },
     {
      "n": 48,
      "ko": "난 서두르지 않겠어. 난 천천히 할 거야.",
      "en": "I wouldn't hurry/rush. I would take my time."
     },
     {
      "n": 49,
      "ko": "내가 너였다면, 그 애한테 아무 것도 기대하지 않을 거야.",
      "en": "If I were you, I wouldn't expect anything from him."
     },
     {
      "n": 50,
      "ko": "나라면 그 애한테 강요하지 않을 거야.",
      "en": "I wouldn't force/push him."
     },
     {
      "n": 51,
      "ko": "난 개인적으로 받아들이지 않을 거야. (=기분 나쁘게 생각 안 할거야.)",
      "en": "I wouldn't take it personally."
     },
     {
      "n": 52,
      "ko": "난 여기 있지 않을 거야.",
      "en": "I wouldn't be/stay here."
     },
     {
      "n": 53,
      "ko": "나라면 내 자신을 괴롭히지 않을 거야.",
      "en": "I wouldn't be hard on myself."
     },
     {
      "n": 54,
      "ko": "그건 좋지 않을 거야.",
      "en": "It/That wouldn't be good/nice."
     },
     {
      "n": 55,
      "ko": "지금은 좋지 않을 거야. 지금은 좋은 때가 아닐 거야.",
      "en": "Now wouldn't be good. Now wouldn't be a good time."
     },
     {
      "n": 56,
      "ko": "그럼 쉽지 않겠다.",
      "en": "That/It wouldn't be easy (then)."
     },
     {
      "n": 57,
      "ko": "나라도 하기 싫을 거야.",
      "en": "I wouldn't want to do that, either."
     },
     {
      "n": 58,
      "ko": "내가 너라도, 가기 싫을 거야.",
      "en": "(If I were you,) I wouldn't want to go, either."
     },
     {
      "n": 59,
      "ko": "내가 네 상황이었다면, 위험을 감수하지 않을 거야. 너무 위험해.",
      "en": "If I were I your situation, I wouldn't risk (it). It is too risky."
     },
     {
      "n": 60,
      "ko": "내가 할 수 있다면, 할텐데. 하지만, 못 해.",
      "en": "If I could, I would (do that). But I can't (do that)."
     },
     {
      "n": 61,
      "ko": "너라면 하겠니?",
      "en": "Would you do it?"
     },
     {
      "n": 62,
      "ko": "넌 뭘 하겠니?",
      "en": "What would you do?"
     },
     {
      "n": 63,
      "ko": "넌 어느 걸 선택하겠어?",
      "en": "Which one would you choose/pick?"
     },
     {
      "n": 64,
      "ko": "내게 뭘 조언하겠어?",
      "en": "What would you advise me?"
     },
     {
      "n": 65,
      "ko": "너라면 가겠어?",
      "en": "Would you go?"
     },
     {
      "n": 66,
      "ko": "너라면 뭐라고 하겠니?",
      "en": "What would you say?"
     },
     {
      "n": 67,
      "ko": "너가 내 입장이면, 이걸 어떻게 처리하겠니?",
      "en": "If you were in my shoes, how would you take care of(=handle) it/this?"
     },
     {
      "n": 68,
      "ko": "너가 나라면, 조용히 있겠어?",
      "en": "If you were me, would you be quiet?"
     },
     {
      "n": 69,
      "ko": "너라면 다르게 하겠어?",
      "en": "Would you do it differently?"
     },
     {
      "n": 70,
      "ko": "넌 어떻게 할 거야?",
      "en": "How would you do it?"
     },
     {
      "n": 71,
      "ko": "너라면 여전히 여기 있겠어?",
      "en": "Would you still be/stay here?"
     },
     {
      "n": 72,
      "ko": "넌 어떻게 그걸 피하겠어? 방법을 알고 싶어.",
      "en": "How would you avoid it/that? I want to(=I'd like to) know the way."
     },
     {
      "n": 73,
      "ko": "넌 어떻게 그걸 해결하겠어? 네 조언이 필요해.",
      "en": "How would you solve/fix it/that? I need your advice."
     },
     {
      "n": 74,
      "ko": "넌 어딜 가겠어?",
      "en": "Where would you go?"
     },
     {
      "n": 75,
      "ko": "넌 어느 길을 선택하겠어?",
      "en": "Which way/path would you choose/pick?"
     },
     {
      "n": 76,
      "ko": "여전히 날 사랑하겠어?",
      "en": "Would you still love me?"
     },
     {
      "n": 77,
      "ko": "뭘 추천할 거야?",
      "en": "What would you recommend?"
     },
     {
      "n": 78,
      "ko": "어떻게 '아니'라고 말하겠어? 거절하기 힘들어.",
      "en": "How would you say \"NO\"? It is hard/difficult to refuse."
     },
     {
      "n": 79,
      "ko": "그 애한테 어떻게 말할 거야?",
      "en": "How would you tell him/her?"
     },
     {
      "n": 80,
      "ko": "너라면 그게 좋을까?",
      "en": "Would you like it/that?"
     },
     {
      "n": 81,
      "ko": "넌 그 앨 어떻게 설득할 거야?",
      "en": "How would you persuade him/her?"
     },
     {
      "n": 82,
      "ko": "날 어떻게 확신 시킬 거야?",
      "en": "How would you convince me?"
     },
     {
      "n": 83,
      "ko": "너라면 뭘 살 거야?",
      "en": "What would you buy/get?"
     },
     {
      "n": 84,
      "ko": "넌 뭘 바꾸겠어? 그리고 어떻게 바꿀 거야?",
      "en": "What would you change? And how would you change it/that?"
     },
     {
      "n": 85,
      "ko": "너가 나였다면, 뭘 할 거야?",
      "en": "If you were me, what would you do?"
     },
     {
      "n": 86,
      "ko": "너가 내 상황이었다면, 거절 하겠어?",
      "en": "If you were in my shoes, would you refuse/say no?"
     },
     {
      "n": 87,
      "ko": "너가 나라면, 기분이 좋겠어?",
      "en": "If you were me, would you be happy?"
     },
     {
      "n": 88,
      "ko": "너라면 기분이 어떻겠어?",
      "en": "How would you feel?"
     },
     {
      "n": 89,
      "ko": "그렇게 되게 만들기 위해 넌 뭘 하겠어? 난 뭘 하는 게 좋을까?",
      "en": "What would you do to make it work/happen? What should I do?"
     },
     {
      "n": 90,
      "ko": "무슨 일이 있더라도 넌 항상 내 편 일거야?",
      "en": "Would you be (always) on my side no matter what?"
     },
     {
      "n": 91,
      "ko": "그거 해줄래요? (그래줄래?)",
      "en": "Would you do that/it?"
     },
     {
      "n": 92,
      "ko": "나랑 같이 가줄래?",
      "en": "Would you go/come with me?"
     },
     {
      "n": 93,
      "ko": "공항에서 나 픽업해줄래?",
      "en": "Would you pick me up from the airport?"
     },
     {
      "n": 94,
      "ko": "집에 오는 길에 그거 사다줄래?",
      "en": "Would you buy/get it on the way home?"
     },
     {
      "n": 95,
      "ko": "그거 그만해줄래요?",
      "en": "Would you stop that/it? Would you stop doing that/it?"
     },
     {
      "n": 96,
      "ko": "그만 물어봐줄래요?",
      "en": "Would you stop asking (me(that))?"
     },
     {
      "n": 97,
      "ko": "이거 나랑 바꿔줄래?",
      "en": "Would you switch/change/trade it with me?"
     },
     {
      "n": 98,
      "ko": "나 좀 봐줄래요?",
      "en": "Would you go easy on me?"
     },
     {
      "n": 99,
      "ko": "좀 참아줄래요? (인내심을 가져줄래?)",
      "en": "Would you be patient?"
     },
     {
      "n": 100,
      "ko": "조용히 해줄래요?",
      "en": "Would you be quiet?"
     }
    ]
   }
  ]
 },
 {
  "ch": 3,
  "title": "기초영어 1000문장 ③ 말하기",
  "units": [
   {
    "u": 1,
    "title": "Unit 1",
    "items": [
     {
      "n": 1,
      "ko": "이걸로 사. 좋은 가격인데.",
      "en": "Buy this/this one/it. It's a good price."
     },
     {
      "n": 2,
      "ko": "이거 입어. 이게 너한테 잘 어울려.",
      "en": "Put it/this on. It/This looks good/nice on you."
     },
     {
      "n": 3,
      "ko": "그거 해봐. 너가 좋아할 거야. 난 확신해.",
      "en": "Try it/that. You are going to (/will) like it. I'm sure."
     },
     {
      "n": 4,
      "ko": "좀 먹어봐. 안 그럼, 이따가 배고파질 거야.",
      "en": "Try some/it. Otherwise you are going to (/will) get hungry later."
     },
     {
      "n": 5,
      "ko": "다 먹어요.",
      "en": "Finish it/that/this."
     },
     {
      "n": 6,
      "ko": "생각해봐요.",
      "en": "Think about it/that/this."
     },
     {
      "n": 7,
      "ko": "결정하면, 알려줘요.",
      "en": "When you decide, (please) let me know."
     },
     {
      "n": 8,
      "ko": "운전 조심(=안전하게)해요. 집에 도착하면, 전화줘요.",
      "en": "Drive safely. When you get/arrive home, call me."
     },
     {
      "n": 9,
      "ko": "들어가기 전에, 신발 벗어줘요. 그리고, 모자도 벗어야 해요.",
      "en": "Before you enter/go in, (please) take your shoes off (/take off your shoes). And you have to take your hat off (/take off your hat)."
     },
     {
      "n": 10,
      "ko": "하나 골라요. (넌) 어느 게 좋아?",
      "en": "Choose/Pick one. Which one do you like?"
     },
     {
      "n": 11,
      "ko": "다시 고려해 주세요. 이건 좋은 기회일지도 몰라요.",
      "en": "Please reconsider. It/This might/may be a good opportunity/chance."
     },
     {
      "n": 12,
      "ko": "금요일까지 결정하고, 알려줘요.",
      "en": "Decide/Make a decision by Friday, and let me know."
     },
     {
      "n": 13,
      "ko": "현명하게 골라.",
      "en": "Choose/Pick wisely."
     },
     {
      "n": 14,
      "ko": "잔돈 가져요.",
      "en": "Keep the change."
     },
     {
      "n": 15,
      "ko": "날 믿어. 이거 될 거야.",
      "en": "Believe/Trust me. This/It is going to work (out). (/ It will work (out).)"
     },
     {
      "n": 16,
      "ko": "날 용서해. 난 널 다치게 할 의미가 아니었어. (=진심이 아니었어)",
      "en": "(Please) Forgive me. I didn't mean to hurt you."
     },
     {
      "n": 17,
      "ko": "이거 해. 네 차례야.",
      "en": "Do this/it. It's your turn."
     },
     {
      "n": 18,
      "ko": "이거 가져. 선물로 주는 거야.",
      "en": "Have it/this. I am giving it (to you) as a gift."
     },
     {
      "n": 19,
      "ko": "계속해요.",
      "en": "Keep going."
     },
     {
      "n": 20,
      "ko": "그거 그만 생각해.",
      "en": "Stop thinking about it/that."
     },
     {
      "n": 21,
      "ko": "그냥 둬.",
      "en": "Just leave it."
     },
     {
      "n": 22,
      "ko": "나 좀 혼자 둬. 지금은 혼자 이고 싶어.",
      "en": "Leave me alone. I want to (/I'd like to) be alone now."
     },
     {
      "n": 23,
      "ko": "이거 만져봐. (=느껴봐, 촉감) 엄청 부드러워.",
      "en": "Feel this/it. It feels so/very/really soft./It's soft."
     },
     {
      "n": 24,
      "ko": "다 (나한테) 말해줘. 알고 싶어. 너한테 듣고 싶어.",
      "en": "Tell me everything. I want to know. I want to (/I'd like to) hear it from you."
     },
     {
      "n": 25,
      "ko": "뭐라고 말 좀 해. (너) 왜 이렇게 조용해?",
      "en": "Say something. Why are you so quiet? (/ Why are you quiet like this?)"
     },
     {
      "n": 26,
      "ko": "나 올 때까지, 여기 있어.",
      "en": "Until I come, stay here."
     },
     {
      "n": 27,
      "ko": "그거 꺼줘. 지금은 뉴스 듣고 싶지 않아.",
      "en": "(Please) Turn it/that off. I don't want to (/I wouldn't like to) listen to the news now."
     },
     {
      "n": 28,
      "ko": "그거 주워. 왜 떨어뜨렸어?",
      "en": "Pick it/that up. Why did you drop it?"
     },
     {
      "n": 29,
      "ko": "좋은 하루 보내!",
      "en": "Have a good/nice day."
     },
     {
      "n": 30,
      "ko": "안전한 여행 되세요.",
      "en": "Have a safe trip."
     },
     {
      "n": 31,
      "ko": "조심해!!",
      "en": "Watch/Look out!"
     },
     {
      "n": 32,
      "ko": "멈춰!",
      "en": "Stop (there)!"
     },
     {
      "n": 33,
      "ko": "여기서 좌회전 해줘요.",
      "en": "(Please) Turn left here."
     },
     {
      "n": 34,
      "ko": "이 지역들은 피해주세요.",
      "en": "(Please) Avoid these areas/places."
     },
     {
      "n": 35,
      "ko": "이 약을 하루에 3번 드세요.",
      "en": "Take this medicine/pill 3 times a day."
     },
     {
      "n": 36,
      "ko": "눈을 감고, 상상해봐.",
      "en": "Close your eyes, and imagine."
     },
     {
      "n": 37,
      "ko": "진정해. 숨 깊게 들이 마셔.",
      "en": "Calm down. Take a deep breath."
     },
     {
      "n": 38,
      "ko": "(너) 시간있을 때, 들러.",
      "en": "When you have time, stop/drop by."
     },
     {
      "n": 39,
      "ko": "이 파일을 설치하고, 컴퓨터를 다시 시작하세요.",
      "en": "Install this file / these files, and restart the computer."
     },
     {
      "n": 40,
      "ko": "(그거) 잊어버려. (=극복해/이겨내)",
      "en": "Get over it/that."
     },
     {
      "n": 41,
      "ko": "강해져. 넌 할 수 있어!",
      "en": "Be strong. You can do it!"
     },
     {
      "n": 42,
      "ko": "조용히 해주세요.",
      "en": "(Please) Be quiet."
     },
     {
      "n": 43,
      "ko": "아! 살살해줘.",
      "en": "Ouch! Be gentle."
     },
     {
      "n": 44,
      "ko": "조심해. 그게 다 끝나면, 전화해줘.",
      "en": "Be careful. When it's over, call me (/give me a ring)."
     },
     {
      "n": 45,
      "ko": "더 나은 사람이 돼.",
      "en": "Be a better person."
     },
     {
      "n": 46,
      "ko": "긍정적이 돼. 넌 항상 긍정적인데. 왜 이것에 대해서는 부정적이야?",
      "en": "Be positive. You are always positive. Why are you (being) negative about this/it?"
     },
     {
      "n": 47,
      "ko": "행복해.",
      "en": "Be happy."
     },
     {
      "n": 48,
      "ko": "그냥 너 자신이면 돼.",
      "en": "Just be yourself."
     },
     {
      "n": 49,
      "ko": "네 친구에게 잘 해줘. 서로에게 친절하게 해줘.",
      "en": "Be nice to your friend. Be kind to each other."
     },
     {
      "n": 50,
      "ko": "영원히 내 사랑이 되어줘.",
      "en": "Be my love for good/forever."
     },
     {
      "n": 51,
      "ko": "내가 오기 전에, 아무것도 하지 마요.",
      "en": "Don't do anything before I get here/come."
     },
     {
      "n": 52,
      "ko": "이거 쓰지 마.",
      "en": "Don't use it/this."
     },
     {
      "n": 53,
      "ko": "움직이지 마. 가만히 있어.",
      "en": "Don't move. Keep/Stay still."
     },
     {
      "n": 54,
      "ko": "당황하지 마.",
      "en": "Don't panic."
     },
     {
      "n": 55,
      "ko": "아무데도 가지 마. 길 잃어버릴지도 몰라.",
      "en": "Don't go anywhere. You might/may get lost."
     },
     {
      "n": 56,
      "ko": "걱정하지 마. 다 괜찮을 거야. 이거 아무것도 아니야.",
      "en": "Don't worry. Everything is going to (/will) be ok. It/This is nothing."
     },
     {
      "n": 57,
      "ko": "이거 하지 마. 그거 안 하는 게 좋을 것 같아.",
      "en": "Don't do it/this. I don't think you should do it/that."
     },
     {
      "n": 58,
      "ko": "아무 말 하지 마.",
      "en": "Don't say anything."
     },
     {
      "n": 59,
      "ko": "그 애한테 말하지 마. 그 애 속상해 할 걸.",
      "en": "Don't tell him/her. He/She will be upset."
     },
     {
      "n": 60,
      "ko": "나 기다리지 마요. 오늘밤에 늦을 것 같아요.",
      "en": "Don't wait for me. I think I'll be late tonight."
     },
     {
      "n": 61,
      "ko": "너가 그거에 대해 확신이 없으면, 아직 하지 마.",
      "en": "If you aren't sure about it, don't do it yet."
     },
     {
      "n": 62,
      "ko": "무리하지 마. 나라면 무리하지 않을 거야.",
      "en": "Don't overdo it. I wouldn't overdo it."
     },
     {
      "n": 63,
      "ko": "그거 포기하지 마. 절대 포기하지 마. 너의 꿈이 이루어질 거야.",
      "en": "Don't give it/that up. Never (ever) give up. Your dream(s) will (/is(are) going to) come true."
     },
     {
      "n": 64,
      "ko": "울지마. 제발 그만 울어. 나도 울거야.",
      "en": "Don't cry. Please stop crying. I am going to (/will) cry, too."
     },
     {
      "n": 65,
      "ko": "여기 동물들에게 먹이 주지 마세요.",
      "en": "Don't feed the animals here."
     },
     {
      "n": 66,
      "ko": "여기서 수영하지 마세요.",
      "en": "Don't swim here."
     },
     {
      "n": 67,
      "ko": "여기서 전자제품 사용하지 마세요.",
      "en": "Don't use (the) electronic devices here."
     },
     {
      "n": 68,
      "ko": "도움이 필요하면, 망설이지 마세요. 언제든지 제게 연락해도 돼요.",
      "en": "If you need help, don't hesitate. You can contact/call me anytime."
     },
     {
      "n": 69,
      "ko": "그거에 대해 기분 나빠하지 마세요. 괜찮아요.",
      "en": "Don't feel bad about it/that. It's ok."
     },
     {
      "n": 70,
      "ko": "그거 하기 싫으면, 하지 마. 난 그거 괜찮아.",
      "en": "If you don't want to do it, don't (do it). I am ok with it."
     },
     {
      "n": 71,
      "ko": "웃지 마. 난 심각해.",
      "en": "Don't laugh. I'm serious."
     },
     {
      "n": 72,
      "ko": "오버하지 마. (=과잉 반응 보이지 마)",
      "en": "Don't overreact."
     },
     {
      "n": 73,
      "ko": "말 돌리지 마. 너의 대답이 뭐야?",
      "en": "Don't change the subject. What's your answer?"
     },
     {
      "n": 74,
      "ko": "아무것도 만지지 마.",
      "en": "Don't touch anything."
     },
     {
      "n": 75,
      "ko": "그거 먹지 마. 상했어.",
      "en": "Don't eat it/that. It's spoiled/rotten."
     },
     {
      "n": 76,
      "ko": "그거 마시지 마. 유효기간 확인해 봐야 돼.",
      "en": "Don't drink it/that. I/We/You have to check the expiration date."
     },
     {
      "n": 77,
      "ko": "소지품 잊지 마세요.",
      "en": "Don't forget your belongings."
     },
     {
      "n": 78,
      "ko": "이 카드 가져 오는 거 잊지 마!",
      "en": "Don't forget to bring this card."
     },
     {
      "n": 79,
      "ko": "아무것도 하지 마. 너가 모든 걸 하지 않아도 돼.",
      "en": "Don't do anything. You don't have to do everything."
     },
     {
      "n": 80,
      "ko": "나한테 그런식으로 이야기 하지 마. (그런 말투로 말하지 마)",
      "en": "Don't talk/speak to me like that."
     },
     {
      "n": 81,
      "ko": "불평하지 마.",
      "en": "Don't complain."
     },
     {
      "n": 82,
      "ko": "나한테 소리 지르지 마. 나 귀 안 먹었거든.",
      "en": "Don't yell (/scream/shout) at me. I am not deaf."
     },
     {
      "n": 83,
      "ko": "그냥 거기에 서있지 말고! 뭐라도 해 봐.",
      "en": "Don't just stand there! Do something."
     },
     {
      "n": 84,
      "ko": "나한테 뭐하라고 말하지 마. (이래라 저래라 하지 마) 내가 준비되면, 할거야.",
      "en": "Don't tell me what to do. When I'm ready, I will do it."
     },
     {
      "n": 85,
      "ko": "화내지 마. 너가 약속하면, 내가 너한테 말해줄게.",
      "en": "Don't get angry/mad. If you promise, I will tell you."
     },
     {
      "n": 86,
      "ko": "네 자신을 탓하지 마. 누구의(=아무의) 잘못이 아니야.",
      "en": "Don't blame yourself. It's nobody's/no one's fault. (/It isn't anybody's/anyone's fault.)"
     },
     {
      "n": 87,
      "ko": "놀라지 마.",
      "en": "Don't be surprised/shocked."
     },
     {
      "n": 88,
      "ko": "다른 사람들 놀리지 마.",
      "en": "Don't make fun of others/other people."
     },
     {
      "n": 89,
      "ko": "그렇게 생각하지 마. 좋지 않아.",
      "en": "Don't think like that. It's not good."
     },
     {
      "n": 90,
      "ko": "너의 약점에 대해 생각하지 마. 너의 약점이 너의 강점이 될 수 있어.",
      "en": "Don't think about your weakness. Your weakness can be/become your strength."
     },
     {
      "n": 91,
      "ko": "두려워하지 마.",
      "en": "Don't be afraid."
     },
     {
      "n": 92,
      "ko": "무서워 마.",
      "en": "Don't be scared."
     },
     {
      "n": 93,
      "ko": "바보 같이 굴지 마.",
      "en": "Don't be silly."
     },
     {
      "n": 94,
      "ko": "늦지 마.",
      "en": "Don't be late."
     },
     {
      "n": 95,
      "ko": "아프지 마. 특히, 내가 없을 땐. (여기에/네 옆에)",
      "en": "Don't be sick. Especially when I am not here (with you)/around."
     },
     {
      "n": 96,
      "ko": "떨지 마. 넌 준비 되었어!",
      "en": "Don't be nervous. You are ready!"
     },
     {
      "n": 97,
      "ko": "욕심 부리지 마.",
      "en": "Don't be greedy."
     },
     {
      "n": 98,
      "ko": "슬퍼하지 마. 너가 슬퍼할 땐, 나도 슬퍼.",
      "en": "Don't be sad. When you are sad, I'm sad too."
     },
     {
      "n": 99,
      "ko": "그 애한테 잘 해주지 마. 그 애 못됐어.",
      "en": "Don't be nice to him/her. He/She is mean."
     },
     {
      "n": 100,
      "ko": "네 자신을 괴롭히지 마. 넌 잘 하고 있어!",
      "en": "Don't be hard on yourself. You are doing well!"
     }
    ]
   },
   {
    "u": 2,
    "title": "Unit 2",
    "items": [
     {
      "n": 1,
      "ko": "난 예전에 머리가 길었어.",
      "en": "I used to have long hair."
     },
     {
      "n": 2,
      "ko": "그 앤 예전에 머리가 짧았었어.",
      "en": "He/She used to have short hair."
     },
     {
      "n": 3,
      "ko": "그 앤 예전에 술을 많이 마셨어.",
      "en": "He/She used to drink a lot."
     },
     {
      "n": 4,
      "ko": "그 앤 예전에 담배를 많이 폈어. 5년 전에 담배 끊었어.",
      "en": "He/She used to smoke a lot. He/She quit/stopped smoking 5 years ago."
     },
     {
      "n": 5,
      "ko": "나 예전엔 거기 자주 갔었는데. 안 가본지 오래 됐다.",
      "en": "I used to go there often. (/ I often used to go there.) I haven't been there for a long time."
     },
     {
      "n": 6,
      "ko": "우리 예전에 여기 자주 왔었어. 이게 우리가 가장 좋아하는 장소였어.",
      "en": "We used to come here often. (/ We often used to come here.) It used to be (/was) our favorite spot/place."
     },
     {
      "n": 7,
      "ko": "난 예전에 우유를 절대 안 마셨었어. I never",
      "en": "I never used to drink milk."
     },
     {
      "n": 8,
      "ko": "난 예전에 이거 자주 먹었었는데. 지금은 별로야.",
      "en": "I used to eat this/it often. (/ I often used to eat this/it.) I don't like it now."
     },
     {
      "n": 9,
      "ko": "난 예전엔 공부를 절대 열심히 안 했었는데. 난 공부하는 거 좋아해.",
      "en": "I never used to study hard. I like/love studying."
     },
     {
      "n": 10,
      "ko": "Jim은 예전엔 야채를 절대 안 먹었었어. 지금은 야채 좋아해.",
      "en": "Jim never used to eat vegetables. He likes vegetables now."
     },
     {
      "n": 11,
      "ko": "내가 어렸을 땐, 이거 아주 좋아했었는데… 매일 매일 하고 싶었어.",
      "en": "When I was little/a child/a kid, I used to like this/it a lot/very much. I wanted to do it every day."
     },
     {
      "n": 12,
      "ko": "난 예전에 커피를 많이 마셨었는데… 이젠 차가 더 좋아.",
      "en": "I used to drink a lot of coffee (/coffee a lot). I prefer tea now."
     },
     {
      "n": 13,
      "ko": "Mark는 예전에 공항에서 일했었는데, 지금은 트럭 운전해.",
      "en": "Mark used to work at the airport, but he drives a truck now."
     },
     {
      "n": 14,
      "ko": "나도 옛날엔 그거 있었는데. 몇 년 전에 잃어버렸어. 그거 잃어버렸을 때, 잠도 못 잤어.",
      "en": "I used to have it/that, too. (But) I lost it a few years ago. When I lost it/that, I couldn't (even) sleep."
     },
     {
      "n": 15,
      "ko": "나 옛날엔 여기서 일했어. 지금은 강남에서 일해.",
      "en": "I used to work here. I work in Gangnam now."
     },
     {
      "n": 16,
      "ko": "난 예전엔 그 애 싫어했었어. 난 그 앨 오해했었어.",
      "en": "I used to hate him, too. I used to misunderstand him. (/ I misunderstood him.)"
     },
     {
      "n": 17,
      "ko": "우리 옛날엔 강남에 살았었어. 지금은 일산에 살아. 작년에 이사했어.",
      "en": "We used to live in Gangnam. We live in Ilsan now. We moved last year."
     },
     {
      "n": 18,
      "ko": "우리 예전엔 극장에 자주 가곤 했었는데…",
      "en": "We used to go to the cinema often. (/ We often used to go to the cinema.)"
     },
     {
      "n": 19,
      "ko": "우리 예전엔 같이 일했었어. 그 애 내 동료였어.",
      "en": "We used to work together. He used to be/was my colleague/coworker."
     },
     {
      "n": 20,
      "ko": "나 옛날엔 여행을 많이 다녔었는데… 요즘 여행할 시간이 없었어.",
      "en": "I used to travel a lot. I haven't had time to travel recently."
     },
     {
      "n": 21,
      "ko": "우리 어렸을 땐, 내 동생이랑 난 늘 싸웠어.",
      "en": "When we were little/kids/children, my brother/sister and I I used to fight all the time."
     },
     {
      "n": 22,
      "ko": "너 옛날에는 나한테 매일 전화했었잖아. 많이 변했어.",
      "en": "You used to call me every day. You (have) changed a lot."
     },
     {
      "n": 23,
      "ko": "너 예전엔 이거 좋아했었잖아. 내가(내 말이) 틀려?",
      "en": "You used to like it/this. Am I wrong?"
     },
     {
      "n": 24,
      "ko": "나 예전엔 그거 많이 했었는데… 그거 하는 거 좋아했었어.",
      "en": "I used to do that a lot. I used to like/love doing it/that. (/ I loved/liked doing it/that.)"
     },
     {
      "n": 25,
      "ko": "나도 예전엔 그 앨 믿었었지… 더 이상 안 믿어.",
      "en": "I used to believe/trust him/her. I don't believe/trust him/her anymore."
     },
     {
      "n": 26,
      "ko": "그 애 예전엔 멋져 보였었는데. 매우 잘생겼었지…",
      "en": "He used to look good/cool/nice. He used to be (/was) very handsome/good looking."
     },
     {
      "n": 27,
      "ko": "나 예전엔 이 노래 매일 들었었어. 그 땐 이게 내가 가장 좋아하는 노래 였어.",
      "en": "I used to listen to this song every day. It used to be (/was) my favorite song (back) then."
     },
     {
      "n": 28,
      "ko": "우리 예전엔 서로 매일 통화했었는데…",
      "en": "We used to talk to each other every day."
     },
     {
      "n": 29,
      "ko": "나도 예전엔 그렇게 믿었었어.",
      "en": "I used to believe that/it, too."
     },
     {
      "n": 30,
      "ko": "많은 사람들이 예전엔 그걸 봤었어. 지금은 다르지만.",
      "en": "Many people used to see it/that. It's different now."
     },
     {
      "n": 31,
      "ko": "우리 예전엔 매일 서로 봤었는데. 너 안 본지 오래됐다. 어떻게 지냈어?",
      "en": "We used to see each other every day. I haven't seen you for a long time. How have you been?"
     },
     {
      "n": 32,
      "ko": "나 이거 예전엔 모았었어.",
      "en": "I used to collect this/it."
     },
     {
      "n": 33,
      "ko": "나 예전엔 여기다 돈 많이 썼었지.",
      "en": "I used to spend a lot of money on it/here."
     },
     {
      "n": 34,
      "ko": "부모님들이 예전엔 그들의 아이들을 위해 모든 것을 다 했었지.",
      "en": "Parents used to do everything for their children."
     },
     {
      "n": 35,
      "ko": "많은 사람들이 예전엔 (그들의) 가족과 시간을 보냈었어.",
      "en": "Many people used to spend time with their family."
     },
     {
      "n": 36,
      "ko": "모두가 예전엔 이걸 갖고 싶어했어. 인기 많았었지. 나도 갖고 싶어했어.",
      "en": "Everybody/Everyone used to want to have it/this. It used to be (/was) popular. I wanted to have it, too."
     },
     {
      "n": 37,
      "ko": "모두가 예전엔 이걸 갖고 있었어, 나만 빼고.",
      "en": "Everybody/Everyone used to have it/this, except me."
     },
     {
      "n": 38,
      "ko": "이거 예전엔 정말 오래 걸렸었지. (그게) 영원처럼 느껴졌었어.",
      "en": "It used to take really/very/so/too long. It felt like forever."
     },
     {
      "n": 39,
      "ko": "이거 예전엔 아무것도 안 들었었어. (돈이)",
      "en": "It used to cost nothing. (/ It didn't use to cost anything.)"
     },
     {
      "n": 40,
      "ko": "정말 많은 사람들이 예전엔 가난했었어.",
      "en": "So many people used to be poor."
     },
     {
      "n": 41,
      "ko": "나 학생 땐, 굉장히 소심했었어.",
      "en": "When I was a student, I used to be very/really/so shy."
     },
     {
      "n": 42,
      "ko": "그 애 어렸을 땐, 활발했었는데…",
      "en": "When he/she was little/a kid/a child, he/she used to be outgoing."
     },
     {
      "n": 43,
      "ko": "Kate는 예전에 선생님이었어.",
      "en": "Kate used to be a teacher."
     },
     {
      "n": 44,
      "ko": "나 이거 옛날엔 잘 했었는데.",
      "en": "I used to be good at it/this."
     },
     {
      "n": 45,
      "ko": "우리 예전엔 서로 가까웠는데… 시간이 어디로 갔지?",
      "en": "We used to be close to each other. Where has the time gone? (/ Where did the time go?)"
     },
     {
      "n": 46,
      "ko": "너 예전엔 내 편이었잖아. 내 편들어!",
      "en": "You used to be on my side. Be on my side!"
     },
     {
      "n": 47,
      "ko": "그 애가 예전에 내 가장 친한 친구였어. 우린 정말 친한 친구였었지.",
      "en": "He/She used to be my best friend. We used to be best/really good friends."
     },
     {
      "n": 48,
      "ko": "돈이 예전엔 나한테 아주 중요했었지. 아직도 중요하긴 하지만, 그게 전부는 아니야.",
      "en": "Money used to be very/so/really important to me. It's still important, but it's not everything."
     },
     {
      "n": 49,
      "ko": "예전엔 사람이 많았는데. 오늘은 조용하네.",
      "en": "It used to be crowded. It's quiet today."
     },
     {
      "n": 50,
      "ko": "그거 예전엔 좋았는데… 지금은 (그게) 다르게 느껴져.",
      "en": "It used to be good/nice. It feels different now."
     },
     {
      "n": 51,
      "ko": "이거 예전엔 아주 비쌌었어.",
      "en": "It used to be very/so/really expensive."
     },
     {
      "n": 52,
      "ko": "그거 예전엔 여기 있었는데…",
      "en": "It used to be here."
     },
     {
      "n": 53,
      "ko": "이게 옛날엔 학교였어. 지금은 병원이지만.",
      "en": "It used to be a school. It is a hospital now."
     },
     {
      "n": 54,
      "ko": "그게 예전엔 내가 가장 좋아하는 거였는데…",
      "en": "It used to be my favorite."
     },
     {
      "n": 55,
      "ko": "그거 예전엔 아주 컸었어.",
      "en": "It used to be very/so/really big."
     },
     {
      "n": 56,
      "ko": "이게 예전엔 인기가 많았었는데.",
      "en": "It used to be popular."
     },
     {
      "n": 57,
      "ko": "그거 예전엔 거기에 있었어.",
      "en": "It used to be there."
     },
     {
      "n": 58,
      "ko": "그거 예전엔 위험했었는데… 지금은 아니야.",
      "en": "It used to be dangerous. But it is not (dangerous) now."
     },
     {
      "n": 59,
      "ko": "그게 옛날엔 문제 였는데… 지금은 문제 아니야.",
      "en": "It used to be a problem. But it's not a problem now."
     },
     {
      "n": 60,
      "ko": "이거 내꺼였는데. 내 동생한테 줬어.",
      "en": "It used to be mine. I gave it to my brother/sister."
     },
     {
      "n": 61,
      "ko": "나 예전엔 여기에 살지 않았었어. 혼자 살았었어.",
      "en": "I didn't use to live here. I used to live alone. (/ I lived alone.)"
     },
     {
      "n": 62,
      "ko": "난 예전엔 그 애랑 같이 일하지 않았었어.",
      "en": "I didn't use to work with him/her."
     },
     {
      "n": 63,
      "ko": "나 예전엔 해산물 안 먹었어. 근데 지금은 먹을 수 있어.",
      "en": "I didn't use to eat seafood. But I can eat it now."
     },
     {
      "n": 64,
      "ko": "우리 예전엔 서로 안 좋아했었는데. 지금은 좋은 친구야.",
      "en": "We didn't use to like each other. We are good friends now."
     },
     {
      "n": 65,
      "ko": "그 애 예전엔 울지 않았었는데. 지금은 많이 울어.",
      "en": "He didn't use to cry. (But) He cries a lot now."
     },
     {
      "n": 66,
      "ko": "우리 예전엔 여기 잘 안 왔었어. 근데 지금은 매주 월요일 마다 와.",
      "en": "We didn't use to come here often. But we come here every Monday."
     },
     {
      "n": 67,
      "ko": "나 예전엔 이거 안 썼어… 솔직히, 못 썼지. 어떻게 쓰는 건지 몰랐어.",
      "en": "I didn't use to use it. Honestly (/Frankly/To be honest/To be frank), I couldn't use it. I didn't know how to use it."
     },
     {
      "n": 68,
      "ko": "그 애 예전엔 나한테 아무것도 말하지 않았었는데. 지금은 모든 걸 나한테 말해주고 싶어해. 말이 많아졌어.",
      "en": "He didn't use to tell me anything. He wants to tell me everything now. He became (/has become) chatty/talkative."
     },
     {
      "n": 69,
      "ko": "너 예전엔 이거 없었잖아. 언제 샀어?",
      "en": "You didn't use to have it. When did you buy/get it?"
     },
     {
      "n": 70,
      "ko": "나 옛날엔 머리가 길지 않았어. 내 머리 지금은 길어.",
      "en": "I didn't use to have long hair. My hair is long now."
     },
     {
      "n": 71,
      "ko": "사람들이 예전엔 이거에 대해 몰랐지.",
      "en": "People didn't use to know about this/it."
     },
     {
      "n": 72,
      "ko": "너 예전엔 잘 안 웃었는데… 너의 미소 보는 거 좋다.",
      "en": "You didn't use to smile much/often. It's good/nice to see your smile."
     },
     {
      "n": 73,
      "ko": "예전엔 돈이 많이 들지 않았었는데… 그때가 그립다.",
      "en": "It didn't use to cost much/a lot. I miss those days."
     },
     {
      "n": 74,
      "ko": "이거 예전엔 이렇게 오래 걸리지 않았었는데… 이상하네.",
      "en": "It didn't use to take this long. It's weird/strange."
     },
     {
      "n": 75,
      "ko": "그 애 예전엔 이기적이지 않았는데. 사려 깊었었는데.",
      "en": "He didn't use to be selfish. He used to be (/was) thoughtful/considerate."
     },
     {
      "n": 76,
      "ko": "이거 예전엔 여기 없었는데.",
      "en": "It didn't use to be here."
     },
     {
      "n": 77,
      "ko": "옛날엔 이렇게 비싸지 않았는데. 가격이 올랐어.",
      "en": "It didn't use to be this expensive (/expensive like this). The price has gone up (/went up)."
     },
     {
      "n": 78,
      "ko": "나 학생 땐, 자신감이 없었었어.",
      "en": "When I was a student, I didn't use to be confident."
     },
     {
      "n": 79,
      "ko": "이거 옛날엔 안 이랬는데… 너무 많이 변했어.",
      "en": "It didn't use to be like this. It (has) changed a lot/so much."
     },
     {
      "n": 80,
      "ko": "이거 옛날엔 어렵지 않았는데. 언제 (이게) 이렇게 어려워졌지?",
      "en": "It didn't use to be hard. When did it get/become so/this hard?"
     },
     {
      "n": 81,
      "ko": "너 예전엔 어디에서 살았었어?",
      "en": "Where did you use to live?"
     },
     {
      "n": 82,
      "ko": "누구랑 살았었어? 혼자서 살았었니?",
      "en": "Who did you use to live with? Did you (use to) live alone?"
     },
     {
      "n": 83,
      "ko": "너 이거 예전엔 좋아했었니? 이것들 많이 있네.",
      "en": "Did you use to like it/this? You have (so) many of them."
     },
     {
      "n": 84,
      "ko": "너 이거 예전에 수집했었어? 얼마나 오래 이거 수집했어?",
      "en": "Did you use to collect this/it? How long have you collected it/this?"
     },
     {
      "n": 85,
      "ko": "예전에 어디서 일했었어? 거기서 얼마나 일했어?",
      "en": "Where did you use to work? How long did you (use to) work there?"
     },
     {
      "n": 86,
      "ko": "너 어렸을 땐, 뭘 좋아했었어?",
      "en": "When you were little/a kid/a child, what did you use to like?"
     },
     {
      "n": 87,
      "ko": "예전에 여기 얼마나 자주 왔었어?",
      "en": "How often did you use to come here?"
     },
     {
      "n": 88,
      "ko": "그 앤 예전에 여행을 많이 했었어?",
      "en": "Did he/she use to travel a lot?"
     },
     {
      "n": 89,
      "ko": "학생일 때, 교복 입었었어?",
      "en": "When you were a student, did you use to wear a school uniform?"
     },
     {
      "n": 90,
      "ko": "기분 다운 되었을 땐, 넌 뭘 했었어?",
      "en": "When you were (feeling) down, what did you use to do?"
     },
     {
      "n": 91,
      "ko": "옛날엔 거기 가는 일주일 걸렸었어? 너무 오래 걸렸다.",
      "en": "Did it use to take a week to go/get there? It took so/very/too long. (/It used to take so long.)"
     },
     {
      "n": 92,
      "ko": "예전엔 얼마나 오래 걸렸어?",
      "en": "How long did it use to take?"
     },
     {
      "n": 93,
      "ko": "예전엔 얼마 들었어?",
      "en": "How much did it use to cost?"
     },
     {
      "n": 94,
      "ko": "그게 옛날엔 먹혔어(=됐었어)? 이젠 쉽지 않지.",
      "en": "Did it use to work? It's not easy now."
     },
     {
      "n": 95,
      "ko": "그게 예전엔 너의 꿈이었어?",
      "en": "Did it use to be your dream?"
     },
     {
      "n": 96,
      "ko": "이거 예전엔 공짜였어? 좋았네.",
      "en": "Did it use to be free? That/It was good."
     },
     {
      "n": 97,
      "ko": "옛날엔 5%였어? 지금은 10%인데.",
      "en": "Did it use to be 5 percent? It's 10 percent now."
     },
     {
      "n": 98,
      "ko": "가격이 예전엔 더 낮았어?",
      "en": "Did the price use to be lower?"
     },
     {
      "n": 99,
      "ko": "이거 예전엔 느렸어? 상상할 수가 없다.",
      "en": "Did it use to be slow? I can't imagine (it/that)."
     },
     {
      "n": 100,
      "ko": "그거 예전엔 어디에 있었어?",
      "en": "Where did it use to be?"
     }
    ]
   },
   {
    "u": 3,
    "title": "Unit 3",
    "items": [
     {
      "n": 1,
      "ko": "내가 그거 하려고 했었는데… 미안.",
      "en": "I was going to do that/it. (I'm) Sorry."
     },
     {
      "n": 2,
      "ko": "내가 너한테 전화 하려고 했었는데, 깜빡했어.",
      "en": "I was going to call you, but I forgot."
     },
     {
      "n": 3,
      "ko": "어제 숙제 하려고 했었는데. 시간이 없었어.",
      "en": "I was going to do (my) homework yesterday. I didn't have time."
     },
     {
      "n": 4,
      "ko": "그 애가 너한테 알려주려고 했었는데.",
      "en": "He/She was going to let you know."
     },
     {
      "n": 5,
      "ko": "내가 그 애한테 먼저 물어보려고 했었는데. 기회가 없었어.",
      "en": "I was going to ask him first. I didn't have a chance."
     },
     {
      "n": 6,
      "ko": "오늘 집 청소하고, 요리도 하려고 했었는데. 하루 종일 밖에 있었어. 아무것도 할 힘(에너지)이 없어.",
      "en": "I was going to clean the house, and cook today. I was out all day. I don't have energy to do anything."
     },
     {
      "n": 7,
      "ko": "너가 왔을 때, 막 샤워하려고 했었어.",
      "en": "When you came, I was just going to take/have a shower."
     },
     {
      "n": 8,
      "ko": "우리 지금 막 나가려던 중이었어.",
      "en": "We were just going to go out/leave."
     },
     {
      "n": 9,
      "ko": "오늘 아침에 늦잠 자려고 했었는데. 너가 날 깨웠어.",
      "en": "I was going to sleep in this morning. (/ I was going to get up late this morning.) You woke me up."
     },
     {
      "n": 10,
      "ko": "내가 널 위해 그거 사주려고 했었는데…",
      "en": "I was going to buy it/that for you."
     },
     {
      "n": 11,
      "ko": "나도 방금 그 말 하려고 했었는데…",
      "en": "I was just going to say that, too."
     },
     {
      "n": 12,
      "ko": "나 어차피 그거 너한테 주려고 했었어.",
      "en": "I was going to give it/that to you anyway."
     },
     {
      "n": 13,
      "ko": "제가 그거 오늘 보내려고 했었는데요. 너무 늦었나요?",
      "en": "I was going to send it/that today. Is it too late?"
     },
     {
      "n": 14,
      "ko": "그거 가져오려고 했었는데. 가져오는 거 깜빡했네.",
      "en": "I was going to bring it/that. (But) I forgot to bring it."
     },
     {
      "n": 15,
      "ko": "너 지금 뭔가 말 하려고 했었잖아. 먼저 해.",
      "en": "You were going to say something now. Go first."
     },
     {
      "n": 16,
      "ko": "나 이거 해보려고 했었는데. 지금은 모르겠어.",
      "en": "I was going to try it/this. I don't know now."
     },
     {
      "n": 17,
      "ko": "너 일찍 왔네. 내가 너 기다리려고 했었는데. 어떻게 이렇게 빨리 왔어?",
      "en": "You got here/came early. I was going to wait for you. How did you get here/come so fast/early?"
     },
     {
      "n": 18,
      "ko": "오늘밤에 이거 입으려고 했었는데. 크네. 살 빠졌어.",
      "en": "I was going to wear it tonight. It's big. I (have) lost (my) weight."
     },
     {
      "n": 19,
      "ko": "우린 그냥 집에 있으면서 TV 보려고 했었어.",
      "en": "We were just going to stay/be (at) home and watch TV."
     },
     {
      "n": 20,
      "ko": "난 택시 타려고 했었지.",
      "en": "I was going to take a cab/taxi."
     },
     {
      "n": 21,
      "ko": "내가 내려고 했었는데. 점심 고마워.",
      "en": "I was going to pay. Thank you for the lunch."
     },
     {
      "n": 22,
      "ko": "여기서 좌회전 하려고 했었는데…",
      "en": "I was going to turn left here."
     },
     {
      "n": 23,
      "ko": "난 이걸로 주문하려고 했었는데. 근데, 마음 바꿨어.",
      "en": "I was going to order this/it. But I (have) changed my mind."
     },
     {
      "n": 24,
      "ko": "내가 먼저 사과하려고 했었는데… 이해해줘서 고마워.",
      "en": "I was going to apologize first. Thank you for understanding."
     },
     {
      "n": 25,
      "ko": "나도 이걸로 고르려고 했었는데. 너가 이거 원하면, 가져.",
      "en": "I was going to choose/pick this/it. If you want it/this, have it."
     },
     {
      "n": 26,
      "ko": "우리 막 저녁 먹으려고 했었어. 저녁 먹고 갈 수 있어?",
      "en": "We were just going to have dinner. Can you stay for dinner?"
     },
     {
      "n": 27,
      "ko": "내가 그 앨 용서하려고 했었는데… 그 앤 정말 나빠. 그 앨 좋아하기 힘들어.",
      "en": "I was going to forgive him/her. He/She is mean/bad. It's hard/difficult to like him/her."
     },
     {
      "n": 28,
      "ko": "내가 그거 찾아 보려고(인터넷으로) 했었는데. 나한테 말해줘서 고마워.",
      "en": "I was going to look that/it up. Thanks for telling me (that)."
     },
     {
      "n": 29,
      "ko": "그 애한테 화내려고 했었는데. 그 애의 귀여운 얼굴을 봐봐. 항상 내 분노를 녹여.",
      "en": "I was going to scold him/her. Look at his/her cute/adorable face. It always melts my anger."
     },
     {
      "n": 30,
      "ko": "오늘부터 다이어트 하려고 했었는데… 이거 너무 맛있어 보여. 내일부터 시작하지 뭐.",
      "en": "I was going to go on a diet from today. This/It looks so/very/really delicious. I might as well begin/start from tomorrow."
     },
     {
      "n": 31,
      "ko": "내가 그 애 막으려고 했었는데. 그러고 싶었는데. 못 했어.",
      "en": "I was going to stop him. I wanted to do that/it, but I couldn't (do it)."
     },
     {
      "n": 32,
      "ko": "나도 그거 무시하려고 했는데. 옛날엔 무시하는 거 쉬웠는데…",
      "en": "I was going to ignore that/it, too. It used to be easy to ignore (things)."
     },
     {
      "n": 33,
      "ko": "난 그거 포기하려고 했었어. 하지만, 네가 날 많이 도와줬어. 그건 절대 안 잊을거야.",
      "en": "I was going to give it/that up. But you (have) helped me a lot. I will never forget it/that. (/ I'm never going to forget it/that.)"
     },
     {
      "n": 34,
      "ko": "네가 도착하기 전에, 모든 걸 준비하려고 했었는데.",
      "en": "Before you get here/arrive, I was going to prepare everything."
     },
     {
      "n": 35,
      "ko": "우리 계약서에 싸인하려고 했었는데. 네가 망쳤어.",
      "en": "We were going to sign the contract. You (have) ruined it/that."
     },
     {
      "n": 36,
      "ko": "난 네 방식으로 하려고 했었지.",
      "en": "I was going to do it your way."
     },
     {
      "n": 37,
      "ko": "내가 그거 너한테 생일 선물로 주려고 했었는데. 뭐 갖고 싶어?",
      "en": "I was going to give it to you as a birthday gift. What do you want to (/would you like to) have?"
     },
     {
      "n": 38,
      "ko": "거기 혼자 가려고 했었어. 아무도 가고 싶어하지 않더라고. 나랑 같이 가줘서 고마워.",
      "en": "I was going to go there alone/by myself. Nobody wanted to go there. Thanks for coming/going with me."
     },
     {
      "n": 39,
      "ko": "내가 너한테 어제 알려주려고 했었는데. 아직 결정 안 했어.",
      "en": "I was going to let you know yesterday. (But) I haven't decided (it) yet."
     },
     {
      "n": 40,
      "ko": "우리 그거 취소하려고 했었는데. 그게 환불 불가였어.",
      "en": "We were going to cancel it. (But) It was non-refundable."
     },
     {
      "n": 41,
      "ko": "어젯밤에 안 나가려고 했었는데. 어디 가야 했어.",
      "en": "I wasn't going to go out last night. (But) I had to go somewhere."
     },
     {
      "n": 42,
      "ko": "나 이거 안 먹으려고 했었는데. 너무 맛있었어.",
      "en": "I wasn't going to eat it/this. (But) It was so/very/really delicious."
     },
     {
      "n": 43,
      "ko": "안 울려고 했었는데. 너무 감동적이었어.",
      "en": "I wasn't going to cry. (But) It was so/very/really touching/moving."
     },
     {
      "n": 44,
      "ko": "아무말도 안 하려고 했었는데. 너무 화가 났었어.",
      "en": "I wasn't going to say anything. (But) I was furious."
     },
     {
      "n": 45,
      "ko": "널 귀찮게 하지 않으려고 했었는데… 미안. 이게 마지막이야.",
      "en": "I wasn't going to bother you. Sorry. This/It is the last time."
     },
     {
      "n": 46,
      "ko": "아무것도 안 사려고 했었는데… 많은 것을 샀어. 돈 많이 썼네.",
      "en": "I wasn't going to buy anything. (But) I (have) bought a lot of (/many) things. I (have) spent a lot (of money)."
     },
     {
      "n": 47,
      "ko": "나 여기 다시는 안 오려고 했었는데.",
      "en": "I wasn't going to come here (ever) again. / I was never going to come here again."
     },
     {
      "n": 48,
      "ko": "거짓말 안 하려고 했었는데… 선택의 여지가 없었어.",
      "en": "I wasn't going to lie, but I had no choice/I didn't have a choice."
     },
     {
      "n": 49,
      "ko": "그 애한테 말 안 하려고 했는데. 그 애가 계속 물어봤어.",
      "en": "I wasn't going to tell him/her. (But) He/She kept asking (me)."
     },
     {
      "n": 50,
      "ko": "내가 이 말은 안 하려고 했었는데… 그 앤 좋은 사람이 아니야.",
      "en": "I wasn't going to say this/it. (But) He/She isn't a good person."
     },
     {
      "n": 51,
      "ko": "포기 안 하려고 했었는데… 계속 할 수가 없었어.",
      "en": "I wasn't going to give (it) up. But I couldn't keep going (/continue)."
     },
     {
      "n": 52,
      "ko": "나 그거 버리려고 한 건 아니었는데. 실수였어.",
      "en": "I wasn't going to throw it away. It was my/a mistake."
     },
     {
      "n": 53,
      "ko": "돈 인출 안 하려고 했었는데… 현금만 되더라고.",
      "en": "I wasn't going to withdraw (any) money. (But) It was cash only."
     },
     {
      "n": 54,
      "ko": "이번엔 스케줄 재조정 안 하려고 했었는데. 죄송합니다.",
      "en": "I wasn't going to reschedule this time. I am (so/really/very) sorry."
     },
     {
      "n": 55,
      "ko": "그거 더 이상 생각 안 하려고 했었는데. 그 생각하는 걸 멈출 수가 없어.",
      "en": "I wasn't going to think about it anymore/any longer. (But) I can't stop thinking about it."
     },
     {
      "n": 56,
      "ko": "그 앤 나랑 말(이야기) 안 하려고 했었어. 근데, 결국엔 우리 화해했어.",
      "en": "He/She wasn't going to talk/speak to me. But eventually, we (have) made up."
     },
     {
      "n": 57,
      "ko": "정크푸드 안 먹으려고 했었는데. 정크푸드 맛 너무 좋아.",
      "en": "I wasn't going to eat junk food. (But) Junk food tastes so/very/really good."
     },
     {
      "n": 58,
      "ko": "난 그 애 다신 안 보려고 했었어. 하지만, 그 애 많이 변했어. 너가 그 애 보면, 너도 놀랄거야.",
      "en": "I wasn't going to see him/her (ever) again. But, he/she (has) changed a lot. If/When you see him/her, you will (/are going to) be surprised, too."
     },
     {
      "n": 59,
      "ko": "그거 녹음 안 하려고 했었는데. 다 녹음했어. 여기 있어.",
      "en": "I wasn't going to record it/that. (But) I recorded everything. It's here."
     },
     {
      "n": 60,
      "ko": "무리하지 않으려고 했었는데… 난 뭔가 시작하면, 멈추기가 힘들어.",
      "en": "I wasn't going to overdo it. When/Once I begin/start something, it's hard/difficult to stop."
     },
     {
      "n": 61,
      "ko": "나 그거 삭제 안 하려고 했었는데. 이거 복구할 수 있나요?",
      "en": "I wasn't going to delete it/that. Can you/I restore it? (/Is it possible to restore?)"
     },
     {
      "n": 62,
      "ko": "내 시간 낭비 하지 않으려고 했는데. 오늘 시간 많이 낭비했어.",
      "en": "I wasn't going to waste my time. (But) I (have) wasted a lot of time today."
     },
     {
      "n": 63,
      "ko": "밀당 안 하려고 했었는데… 너가 먼저 시작했잖아.",
      "en": "I wasn't going to play hard to get. (But) You started/began it first."
     },
     {
      "n": 64,
      "ko": "미안. 안 웃으려고 했었는데. 나 너 비웃는거 아니야. 그냥 웃는 거지. 알았어. 이제 그만 할게.",
      "en": "I'm sorry. I wasn't going to laugh. I am not laughing at you. I am just laughing. Ok. I will stop now."
     },
     {
      "n": 65,
      "ko": "이번 여름엔 아무데도 안 가려고 했었는데.",
      "en": "I wasn't going to go anywhere this summer."
     },
     {
      "n": 66,
      "ko": "노래 안 하려고 했었는데. 모두가 원하니까. 노래 딱 한 곡 부를게요.",
      "en": "I wasn't going to sing. Since everybody/everyone wants it. I will sing just one song."
     },
     {
      "n": 67,
      "ko": "아무것도 기대 안 하려고 했었는데…",
      "en": "I wasn't going to expect anything."
     },
     {
      "n": 68,
      "ko": "그 애랑 안 싸우려고 했었는데. 난 정말 노력했는데.",
      "en": "I wasn't going to fight/argue/have an argument with him/her. I really tried."
     },
     {
      "n": 69,
      "ko": "화 안 내려고 했었는데… 하지만 서비스가 엉망이었어.(=나빴어)",
      "en": "I wasn't going to get angry/mad. But the service was terrible/awful/bad."
     },
     {
      "n": 70,
      "ko": "내 약속 안 깨려고 했었는데. 정말 미안해.",
      "en": "I wasn't going to break a/my promise. I'm really/so/very sorry."
     },
     {
      "n": 71,
      "ko": "넌 거기서 뭐 하려고 했었어?",
      "en": "What were you going to do there?"
     },
     {
      "n": 72,
      "ko": "너 이걸로 뭐 하려고 했었던 거야? 이게 왜 너의 주머니에 있어?",
      "en": "What were you going to do with it/this? Why is this/it in your pocket? (/ Why do you have it in your pocket?)"
     },
     {
      "n": 73,
      "ko": "너 어딘가 가려던 거였어?",
      "en": "Were you going to go somewhere?"
     },
     {
      "n": 74,
      "ko": "어디 가려고 했었는데?",
      "en": "Where were you going to go?"
     },
     {
      "n": 75,
      "ko": "언제 오려고 했었어? 오늘 오려고 했었니?",
      "en": "When were you going to come? Were you going to come today?"
     },
     {
      "n": 76,
      "ko": "너 뭔가 말하려던 거였어? 뭐라고 했어?",
      "en": "Were you going to say something? What did you say?"
     },
     {
      "n": 77,
      "ko": "그 애한테 어떻게 말하려고 했었어?",
      "en": "How were you going to tell him/her?"
     },
     {
      "n": 78,
      "ko": "너 어느 거 쓰려던 거였어? 이거 내가 써도 될까?",
      "en": "Which one were you going to use? Can/Could/May I use this (one)/it?"
     },
     {
      "n": 79,
      "ko": "뭐 사려고 했었는데?",
      "en": "What were you going to buy/get?"
     },
     {
      "n": 80,
      "ko": "이거 어디다 두려고 했었어?",
      "en": "Where were you going to put/leave it/this?"
     },
     {
      "n": 81,
      "ko": "이거 언제 하려고 그런 거야?",
      "en": "When were you going to do it/this?"
     },
     {
      "n": 82,
      "ko": "너 나한테 말 할 거였어? 언제 말 하려고 했었는데?",
      "en": "Were you going to tell me? When were you going to tell me?"
     },
     {
      "n": 83,
      "ko": "그걸 나한테 어떻게 숨기려는 거였어? 웃기셔. 난 널 너무 잘 알아.",
      "en": "How were you going to hide it/that from me? It/That is funny. I know you very/too/so/really well."
     },
     {
      "n": 84,
      "ko": "이거 언제 고치려고 한거야?",
      "en": "When were you going to fix/repair it/this?"
     },
     {
      "n": 85,
      "ko": "우리 어디 가려고 했던 거야? 알고 싶어.",
      "en": "Where were we going to go? I want to/I'd like to know."
     },
     {
      "n": 86,
      "ko": "날 어디 데려가려고 했었는데?",
      "en": "Where were you going to take me?"
     },
     {
      "n": 87,
      "ko": "거기 얼마나 오래 있으려고 했었어? 너의 원래 계획이 뭐였어?",
      "en": "How long were you going to stay there? What was your original plan?"
     },
     {
      "n": 88,
      "ko": "이걸 혼자서 하려고 했던 거야? (너에게) 내가 있잖아.",
      "en": "Were you going to do it/this alone/ (all) by yourself? You have me."
     },
     {
      "n": 89,
      "ko": "나 없이 어떻게 살아 남으려고 했었어? 당신은 내가 필요해. 나 없이 살 수 있어?",
      "en": "How were you going to survive without me? You need me. Can you live without me?"
     },
     {
      "n": 90,
      "ko": "이거 반품하려고 했었어? 내가 이거 열었는데…",
      "en": "Were you going to return it/this? I (have) opened it."
     },
     {
      "n": 91,
      "ko": "혼자 가려고 했었어? 너가 원하면, 내가 같이 갈 수 있어.",
      "en": "Were you going to go alone/by yourself? If you want, I can come/go with you."
     },
     {
      "n": 92,
      "ko": "거기 차로 가려고 했었어 아님 기차 타려고 했었어?",
      "en": "Were you going to drive there or take a train?"
     },
     {
      "n": 93,
      "ko": "이거 언제 시작하려고 했어? 내가 너라면, 지금 당장 시작할 거야.",
      "en": "When were you going to start/begin this/it? If I were you, I would start/begin right now/away."
     },
     {
      "n": 94,
      "ko": "\"Yes\"라고 말하려고 했지? 너 \"yes\"라고 말했다.",
      "en": "Were you going to say \"yes\"? You said \"yes\"."
     },
     {
      "n": 95,
      "ko": "언제 결정하려고 했어? 마음 정했니?",
      "en": "When were you going to decide? Have you made up your mind? (/Did you make up your mind?)"
     },
     {
      "n": 96,
      "ko": "이 책 읽으려고 했었니?",
      "en": "Were you going to read this book?"
     },
     {
      "n": 97,
      "ko": "나한테 뭐 말하려던 거였어? 지금 말해줘. 난 들을 준비 되어 있어. (=난 '다 귀'야.)",
      "en": "What were you going to tell me? Tell me now. I'm all ears."
     },
     {
      "n": 98,
      "ko": "이거 장바구니에 넣으려고 했어?",
      "en": "Were you going to add this/it to cart?"
     },
     {
      "n": 99,
      "ko": "미안. 이거 쓰려고 하던 거였어? 여기요.",
      "en": "(I'm) Sorry. Were you going to use it/this? Here it is (/Here you are)."
     },
     {
      "n": 100,
      "ko": "우리 사장님도 초대하려고 했었어? 나라면 초대 안 해. 초대하지 말아줘.",
      "en": "Were you going to invite our boss? I wouldn't invite him/her. Please don't (invite him/her)."
     }
    ]
   },
   {
    "u": 4,
    "title": "Unit 4",
    "items": [
     {
      "n": 1,
      "ko": "여기 안에 뭔가 있어.",
      "en": "There is something (in) here."
     },
     {
      "n": 2,
      "ko": "내 신발에 뭔가 있어.",
      "en": "There is something in my shoe(s)."
     },
     {
      "n": 3,
      "ko": "코너에 우체국이 있어.",
      "en": "There is a post office on the corner."
     },
     {
      "n": 4,
      "ko": "밖에 누군가 있어.",
      "en": "There is someone/somebody outside."
     },
     {
      "n": 5,
      "ko": "차 앞에 누군가 있어.",
      "en": "There is someone/somebody in front of the car."
     },
     {
      "n": 6,
      "ko": "불이 켜져 있어.",
      "en": "There is a light on."
     },
     {
      "n": 7,
      "ko": "저희 호텔에는 수영장이 있어요. 연중 무휴 24시간 이용할 수 있어요.",
      "en": "There is a (swimming) pool in/at our hotel. You can use it 24/7."
     },
     {
      "n": 8,
      "ko": "시간 충분히 있어.",
      "en": "There is enough time."
     },
     {
      "n": 9,
      "ko": "차 막혀.",
      "en": "There is a lot of traffic/a traffic jam."
     },
     {
      "n": 10,
      "ko": "이 국에 소금 너무 많아. 짜.",
      "en": "There is a lot of (/too much) salt in this soup. It's salty."
     },
     {
      "n": 11,
      "ko": "기차가 10시에 있어.",
      "en": "There is a train at 10."
     },
     {
      "n": 12,
      "ko": "비행기가 오늘밤 11시에 있어.",
      "en": "There is a plane at 11 tonight."
     },
     {
      "n": 13,
      "ko": "여기에 공항 (가는) 버스가 있어요.",
      "en": "There is a bus to the airport (from) here."
     },
     {
      "n": 14,
      "ko": "문제가 있으면, 해결책도 있어.",
      "en": "If/When there is a problem, there is a solution, too."
     },
     {
      "n": 15,
      "ko": "가능성이 있어.",
      "en": "There is a possibility."
     },
     {
      "n": 16,
      "ko": "길이 있어. (=방법이 있어.)",
      "en": "There is a way."
     },
     {
      "n": 17,
      "ko": "이걸 해결할 방법 있어.",
      "en": "There is a way to solve/fix this/it."
     },
     {
      "n": 18,
      "ko": "할 말 (뭔가) 있어.",
      "en": "There is something to say."
     },
     {
      "n": 19,
      "ko": "내가 너한테 하고 싶은 말 (뭔가) 있어.",
      "en": "There is something I want to tell you."
     },
     {
      "n": 20,
      "ko": "너가 봐야 되는 게 (뭔가) 있어.",
      "en": "There is something you have to see."
     },
     {
      "n": 21,
      "ko": "사람이 너무 많아. (=많이 있어)",
      "en": "There are a lot of (/so many/too many) people."
     },
     {
      "n": 22,
      "ko": "차가 너무 많아.",
      "en": "There are a lot of (/so many/too many) cars."
     },
     {
      "n": 23,
      "ko": "집에 방 3개 있어.",
      "en": "There are 3 rooms in the house."
     },
     {
      "n": 24,
      "ko": "그 반에 학생이 20명 있어.",
      "en": "There are 20 students in the/that class."
     },
     {
      "n": 25,
      "ko": "내 가족은 4명 있어.",
      "en": "There are 4 people (/members) in my family."
     },
     {
      "n": 26,
      "ko": "테이블 위에 샌드위치가 좀 있어요. 드세요.",
      "en": "There are some sandwiches on the table. Help yourself."
     },
     {
      "n": 27,
      "ko": "항상 양면이 있잖아. 둘 다 들어봐야지.",
      "en": "There are always two sides. You (/We/I) have to listen to the both sides."
     },
     {
      "n": 28,
      "ko": "좋은 책들이 많이있어. 어디서 시작할지 모르겠어요.",
      "en": "There are a lot of (/many) good/nice/great books. I don't know where to begin/start."
     },
     {
      "n": 29,
      "ko": "그런 경우가 있긴 한데요. (그건) 드물어요.",
      "en": "There are (some) cases like that. But it's rare."
     },
     {
      "n": 30,
      "ko": "인생엔 많은 기복이 있지.",
      "en": "There are a lot of (/many) ups and downs in life."
     },
     {
      "n": 31,
      "ko": "생각해보면, 행복한 순간들이 많이 있어요. 인생 괜찮아요. 희망이 있어요.",
      "en": "When/If you think about it, there are a lot of (/many) happy moments. Life is ok. There is a hope."
     },
     {
      "n": 32,
      "ko": "많은 방법들이 있지.",
      "en": "There are a lot of (/many) ways."
     },
     {
      "n": 33,
      "ko": "이거 할 방법 많아. (= 많이 있어)",
      "en": "There are a lot of (/many) ways to do this/it."
     },
     {
      "n": 34,
      "ko": "할 게 많아. (= 많은 것들이 있어) 나 오늘 너무 바쁘네.",
      "en": "There are a lot of (/many) things to do. I am very/so/too/really busy today."
     },
     {
      "n": 35,
      "ko": "볼 거 많아. (=많은 것들이 있어)",
      "en": "There are a lot of (/many) things to see."
     },
     {
      "n": 36,
      "ko": "고를 게 너무 많아. 딱 한 개 고르기 어려워.",
      "en": "There are a lot of (/many) things to choose. It's hard (/difficult) to choose (/pick) just(/only) one."
     },
     {
      "n": 37,
      "ko": "할 말 많은데…",
      "en": "There are a lot of (/many) things to say."
     },
     {
      "n": 38,
      "ko": "하고 싶은 말 많아.",
      "en": "There are a lot of (/many) things I want to say."
     },
     {
      "n": 39,
      "ko": "우리가 할 수 있는 게 많아.",
      "en": "There are a lot of (/many) things we can do."
     },
     {
      "n": 40,
      "ko": "나 오늘은 해야 되는 게 너무 많아.",
      "en": "There are a lot of.(/many) things I have to do today."
     },
     {
      "n": 41,
      "ko": "차가 막혔어. 여기 오는데 2시간 걸렸어.",
      "en": "There was a lot of traffic/a traffic jam. It took 2 hours to get/come here."
     },
     {
      "n": 42,
      "ko": "작은 문제가 있었지만, 내가 해결했어. 그거 이번 주말까지 다 될 거야.",
      "en": "There was a tiny (/small/little) problem, but I fixed/solved it. It is going to (/will) be ready by this weekend."
     },
     {
      "n": 43,
      "ko": "아무 대답이 없었어. (전화 안 받았어.)",
      "en": "There was no answer."
     },
     {
      "n": 44,
      "ko": "사고가 있었어.",
      "en": "There was an accident."
     },
     {
      "n": 45,
      "ko": "이유가 있었어. 왜냐고 묻지는 마.",
      "en": "There was a reason. Don't ask (me) why."
     },
     {
      "n": 46,
      "ko": "컨퍼런스가 대전에서 있었어. 그 컨퍼런스에 참석해야 됐어.",
      "en": "There was a conference in 대전. I had to attend the conference."
     },
     {
      "n": 47,
      "ko": "우리가 거기에 갔을 때, 긴 줄이 밖에 있었어. 오래 기다려야 됐어.",
      "en": "When we went there, there was a long line outside. I had to wait long/for a long time."
     },
     {
      "n": 48,
      "ko": "그거 할 시간 충분히 있었어.",
      "en": "There was enough time to do that/it."
     },
     {
      "n": 49,
      "ko": "그 반에 학생 많이 있었어.",
      "en": "There were a lot of (/many) students in the/that class."
     },
     {
      "n": 50,
      "ko": "부재중 전화가 10통 있었어.",
      "en": "There were 10 missed calls."
     },
     {
      "n": 51,
      "ko": "그 안에 아무것도 없어.",
      "en": "There isn't anything in it/there. / There is nothing in it."
     },
     {
      "n": 52,
      "ko": "아무도 없는데. 모두 어디 있지?",
      "en": "There isn't anyone/anybody. / There is nobody/no one. Where is everyone/everybody?"
     },
     {
      "n": 53,
      "ko": "시간이 모자라. (= 충분히 없어)",
      "en": "There isn't enough time."
     },
     {
      "n": 54,
      "ko": "하나도 없어.",
      "en": "There isn't any. / There is none."
     },
     {
      "n": 55,
      "ko": "미안하지만, 커피가 하나도 안 남았어요. 차 마실래요?",
      "en": "I'm sorry/afraid, there isn't any coffee left. / There is no coffee left. Do you want to (/Would you like to) drink/have tea?"
     },
     {
      "n": 56,
      "ko": "냉장고에 우유 없어. 우유 다 떨어졌어.",
      "en": "There isn't (any) milk in the fridge/refrigerator. We/I ran out of milk."
     },
     {
      "n": 57,
      "ko": "할 말이 (아무것도) 없다. 뭐라고 말할지 모르겠어.",
      "en": "There isn't anything to say. / There is nothing to say. I don't know what to say."
     },
     {
      "n": 58,
      "ko": "먹을 게 (아무것도) 없어.",
      "en": "There isn't anything to eat. / There is nothing to eat."
     },
     {
      "n": 59,
      "ko": "여긴 살 게 (아무것도) 없어.",
      "en": "There isn't anything to buy here. / There is nothing to buy here."
     },
     {
      "n": 60,
      "ko": "갈 데가 (아무데도) 없어.",
      "en": "There isn't anywhere to go. / There is nowhere to go."
     },
     {
      "n": 61,
      "ko": "그 안에 아무것도 없었는데요.",
      "en": "There wasn't anything in it/there. / There was nothing in it/there."
     },
     {
      "n": 62,
      "ko": "문제 없었어요. 네 덕분에, 성공적이었어.",
      "en": "There wasn't a problem. / There was no problem. Thanks to you, it was successful."
     },
     {
      "n": 63,
      "ko": "나도 그거 하고 싶었는데, 시간이 충분히 없었어. 아마도 다음번에 (하자).",
      "en": "I wanted to do that/it, too, but there wasn't enough time. Maybe/Perhaps next time."
     },
     {
      "n": 64,
      "ko": "문제 없었어.",
      "en": "There wasn't an issue."
     },
     {
      "n": 65,
      "ko": "그런 옵션 없었어.",
      "en": "There wasn't an option like that. /There wasn't that (kind of) option."
     },
     {
      "n": 66,
      "ko": "자리가 모자랐어. (=충분히 없었어)",
      "en": "There wasn't enough room/space."
     },
     {
      "n": 67,
      "ko": "여기에 아무도 없었어. 정말 외롭게 느껴졌었어.",
      "en": "There wasn't anyone/anybody here. / There was nobody/no one here. I felt very/so/really lonely."
     },
     {
      "n": 68,
      "ko": "어제 지갑 주웠는데, 그 안에 돈은 없었어.",
      "en": "I found a wallet/purse on the street yesterday, but there wasn't (any) money in it."
     },
     {
      "n": 69,
      "ko": "그럴 기회가 없었어.",
      "en": "There wasn't a chance to do that/it."
     },
     {
      "n": 70,
      "ko": "어제 그 애 봤는데, 그 애랑 얘기할 기회는 없었어.",
      "en": "I saw him/her yesterday, but there wasn't a chance to talk(/speak) to(/with) him/her."
     },
     {
      "n": 71,
      "ko": "입을 게 (아무것도) 없었어.",
      "en": "There wasn't anything to wear. / There was nothing to wear."
     },
     {
      "n": 72,
      "ko": "할 게 (아무것도) 없었어. 너무 지루했어.",
      "en": "There wasn't anything to do. / There was nothing to do. It was so/very/really boring. / I was so bored."
     },
     {
      "n": 73,
      "ko": "배가 고팠는데, 먹을 게 (아무것도) 없었어.",
      "en": "I was hungry, but there wasn't anything to eat / there was nothing to eat."
     },
     {
      "n": 74,
      "ko": "걱정할 거 (아무것도) 없었어.",
      "en": "There wasn't anything to worry (about). / There was nothing to worry (about)."
     },
     {
      "n": 75,
      "ko": "할 말이 (아무것도) 없더라고.",
      "en": "There wasn't anything to say. / There was nothing to say."
     },
     {
      "n": 76,
      "ko": "널 대체할 사람은 (아무도) 없었어. 널 대체하기 힘들 거야.",
      "en": "There wasn't anyone/anybody to replace you. / There was nobody/no one to replace you. It will be hard/difficult to replace you."
     },
     {
      "n": 77,
      "ko": "얘기할 사람이 (아무도) 없었어.",
      "en": "There wasn't anyone/anybody to talk/speak to. / There was nobody/no one to talk/speak to."
     },
     {
      "n": 78,
      "ko": "너무 늦었었어. 그래서, 먹을 데가 (아무데도) 없었어.",
      "en": "It was too/so/very/really late. So, there wasn't anywhere to eat. / There was nowhere to eat."
     },
     {
      "n": 79,
      "ko": "내가 하고 싶었던 건 (아무것도) 없었어. 난 그냥 안에만 있고 싶었어.",
      "en": "There wasn't anything I wanted to do. / There was nothing I wanted to do. I just wanted to stay in(side)."
     },
     {
      "n": 80,
      "ko": "내가 필요했던 정보는 없었어. 시간 낭비 였어.",
      "en": "There wasn't (any) information I needed. It was a waste of time."
     },
     {
      "n": 81,
      "ko": "이 근처에 은행 있나요?",
      "en": "Is there a bank near/around here?"
     },
     {
      "n": 82,
      "ko": "사고가 났나?(=사고가 있나?) 차가 왜 이렇게 많이 있지?",
      "en": "Is there an accident? Why are there (so) many cars (like this)?"
     },
     {
      "n": 83,
      "ko": "뜨거운 물 나와? (=뜨거운 물 있어?)",
      "en": "Is there hot water?"
     },
     {
      "n": 84,
      "ko": "상금이 있나요? 상금이 있으면, 나도 참여할래.",
      "en": "Is there a prize? If there is a prize, I want to (/I'd like to) participate, too."
     },
     {
      "n": 85,
      "ko": "그것에 대한 정보가 있나요? 어디서 찾을 수 있을까요?",
      "en": "Is there (any) information about that/it? Where can I find it?"
     },
     {
      "n": 86,
      "ko": "단 하나의 정답이 있는 건가요?",
      "en": "Is there only one (right/correct) answer?"
     },
     {
      "n": 87,
      "ko": "집에 먹을 거 (뭔가) 있어? 집에 가기 전에, 뭔가 먹을까?",
      "en": "Is there something to eat at home? Before we go home, shall we eat something?"
     },
     {
      "n": 88,
      "ko": "갈 데 (어딘가) 있어요?",
      "en": "Is there somewhere to go?"
     },
     {
      "n": 89,
      "ko": "제가 할 수 있는 게 (뭐라도) 있어요? 저 돕고 싶어요.",
      "en": "Is there something I can do? I want to (/I'd like to) help (you)."
     },
     {
      "n": 90,
      "ko": "자원봉사자 많이 있어요? 몇 명 있어요?",
      "en": "Are there a lot of (/many) volunteers? How many people are there?"
     },
     {
      "n": 91,
      "ko": "실수가 있었나요? 제가 실수를 했나요? 죄송해요, 제가 수정할게요.",
      "en": "Was there a mistake? Did I make a mistake? (I'm) Sorry, I will correct it."
     },
     {
      "n": 92,
      "ko": "차 막혔어요?",
      "en": "Was there a lot of traffic/a traffic jam?"
     },
     {
      "n": 93,
      "ko": "증인이 있었나요? 그걸 증명할 수 있나요?",
      "en": "Was there a witness? Can you prove it/that?"
     },
     {
      "n": 94,
      "ko": "어젯밤에 정전 되었어?",
      "en": "Was there a blackout last night?"
     },
     {
      "n": 95,
      "ko": "이유가 있었니? (그) 이유가 뭐였어?",
      "en": "Was there a reason? What was the reason?"
     },
     {
      "n": 96,
      "ko": "배달에 문제가 있었나요?",
      "en": "Was there a problem with the shipping/delivery?"
     },
     {
      "n": 97,
      "ko": "얘기할 사람 (누군가) 있었어?",
      "en": "Was there someone/somebody to talk/speak to?"
     },
     {
      "n": 98,
      "ko": "네가 사고 싶은 게 (아무거라도) 있었어? 뭐라도 샀니?",
      "en": "Was there anything you wanted to buy? Did you buy something/anything?"
     },
     {
      "n": 99,
      "ko": "환자 많았어? 아픈 사람들 많았어?",
      "en": "Were there a lot of (/many) patients? Were there a lot of (/many) sick people?"
     },
     {
      "n": 100,
      "ko": "사람이 많았어요? 사람이 얼마나 많았어요?",
      "en": "Were there many people? How many people were there?"
     }
    ]
   },
   {
    "u": 5,
    "title": "Unit 5",
    "items": [
     {
      "n": 1,
      "ko": "예전엔 사람이 많았었어. 사람들이 모든 곳에 있었어.",
      "en": "There used to be a lot of (/many) people. People were (/used to be) everywhere."
     },
     {
      "n": 2,
      "ko": "사람 많을 거야.",
      "en": "There will/are going to be a lot of (/many) people."
     },
     {
      "n": 3,
      "ko": "사람이 많을 수도 있어.",
      "en": "There may/might be a lot of (/many) people."
     },
     {
      "n": 4,
      "ko": "연락할 사람이 (누군가) 있어야 되는데. 이분 혼자예요?",
      "en": "There has to be someone/somebody to contact/call. Is he/she alone?"
     },
     {
      "n": 5,
      "ko": "우리 같은 사람이 많을지도 몰라.",
      "en": "There may/might be a lot of (/many) people like us."
     },
     {
      "n": 6,
      "ko": "그 애 같은 피해자들이 많을 거야.",
      "en": "There will (/are going to) be a lot of (/many) victims like him/her."
     },
     {
      "n": 7,
      "ko": "차 막힐 것 같아. 우리 일찍 가는 게 좋겠어.",
      "en": "I think there will be a lot of traffic/a traffic jam. We should go/leave early."
     },
     {
      "n": 8,
      "ko": "차 막힐지도 몰라.",
      "en": "There may/might be a lot of traffic/a traffic jam."
     },
     {
      "n": 9,
      "ko": "여기 예전엔 차가 많이 막혔었어.",
      "en": "There used to be a lot of traffic/a traffic jam."
     },
     {
      "n": 10,
      "ko": "내가 이 휴가에서 회사로 돌아가면, 이메일과 메세지들이 많이 있을 거야.",
      "en": "When I go back to work from this vacation/holiday, there will (/are going to) be a lot of (/many) emails and messages."
     },
     {
      "n": 11,
      "ko": "문제가 있을지도 몰라. 문제 있으면, 알려줘요.",
      "en": "There might/may be a problem. If there is a problem, let me know."
     },
     {
      "n": 12,
      "ko": "문제가 (계속) 많았어. 해결할 사람은 (아무도) 없고, 이건 정말 큰 문제야.",
      "en": "There have been a lot of (/many) problems. There isn't anyone/anybody (/There is nobody/no one) to solve/fix it, and/so it's a huge problem."
     },
     {
      "n": 13,
      "ko": "예전엔 문제가 많았었는데…",
      "en": "There used to be a lot of (/many) problems."
     },
     {
      "n": 14,
      "ko": "문제가 있을 것 같은데.",
      "en": "I think there will be a problem."
     },
     {
      "n": 15,
      "ko": "이 문제에 대한 해결책이 있어야 돼.",
      "en": "There has to be a solution to this problem."
     },
     {
      "n": 16,
      "ko": "예전엔 자유시간이 많았는데. 좋았지.",
      "en": "There used to be a lot of free time. It used to be (/ It was) good."
     },
     {
      "n": 17,
      "ko": "시간 충분히 있을지도 몰라.",
      "en": "There might/may be enough time."
     },
     {
      "n": 18,
      "ko": "화장실 갈 시간 있을 거예요.",
      "en": "There will (/is going to) be time to go to the bathroom/toilet."
     },
     {
      "n": 19,
      "ko": "연설 후에 질문할 시간이 있을 거예요.",
      "en": "There will (/is going to) be time to ask questions after the speech."
     },
     {
      "n": 20,
      "ko": "우리 자신을 위한 시간이 있어야 돼.",
      "en": "There has to be time for ourselves."
     },
     {
      "n": 21,
      "ko": "내일 시험 볼지도 몰라. (=시험이 있을지도 몰라)",
      "en": "There may/might be a test."
     },
     {
      "n": 22,
      "ko": "다음주에 기말 시험이 있을 거예요.",
      "en": "There will be final exams/tests next week."
     },
     {
      "n": 23,
      "ko": "이번달엔 (계속) 시험이 너무 많았어.",
      "en": "There have been a lot of (/many) tests/exams this month."
     },
     {
      "n": 24,
      "ko": "시험이 있어야 돼.",
      "en": "There has to be a test."
     },
     {
      "n": 25,
      "ko": "또 다른 기회가 있을 거야. 괜찮아.",
      "en": "There will (/is going to) be another chance. It's ok."
     },
     {
      "n": 26,
      "ko": "또 다른 기회가 금방 있을 수도 있어. 누가 알아?",
      "en": "There may/might be another chance soon. Who knows?"
     },
     {
      "n": 27,
      "ko": "또 다른 기회가 있어야 되는데… 다음번엔 더 잘 할게.",
      "en": "There has to be another chance. I'll do better next time."
     },
     {
      "n": 28,
      "ko": "많은 기회들이 있을 거야.",
      "en": "There will (/are going to) be a lot of (/many) chances/opportunities."
     },
     {
      "n": 29,
      "ko": "기회가 많았는데… 아직 늦지 않았어.",
      "en": "There have been many chances. It's not late yet."
     },
     {
      "n": 30,
      "ko": "다음 주말엔 세미나가 있을 지도 몰라요.",
      "en": "There might/may be a seminar next weekend."
     },
     {
      "n": 31,
      "ko": "변화가 많이 있었어. 모든 게 바뀌었네.",
      "en": "There have been many changes. Everything has changed."
     },
     {
      "n": 32,
      "ko": "우리 학교에 변화가 있을 거예요. 새로운 선생님들이 있을 거예요. (새 선생님이 오실 거예요.)",
      "en": "There will (/is going to) be a change at our school. There will (/are going to) be new teachers."
     },
     {
      "n": 33,
      "ko": "큰 변화가 있어야 해.",
      "en": "There has to be a big change."
     },
     {
      "n": 34,
      "ko": "우리 계획에 변화가 있을 수도 있어. 그런 일이 생기면, 알려줄게요.",
      "en": "There may/might be a change in our plan. If it/that happens, I'll let you know."
     },
     {
      "n": 35,
      "ko": "길이 있을 거야. 항상 길이 있어.",
      "en": "There will (/is going to) be a way. There's always a way."
     },
     {
      "n": 36,
      "ko": "방법이 있을 지도 몰라. 문 하나가 닫히면, 또 다른 문이 열려. 항상 그렇잖아.",
      "en": "There may/might be a way. When one door closes, another door opens. It's always like that."
     },
     {
      "n": 37,
      "ko": "방법이 있어야 되는데…",
      "en": "There has to be a way."
     },
     {
      "n": 38,
      "ko": "더 나은 방법이 있을 것 같아.",
      "en": "I think there will a better way."
     },
     {
      "n": 39,
      "ko": "더 좋은 방법이 있어야 돼.",
      "en": "There has to be a better way."
     },
     {
      "n": 40,
      "ko": "그걸 해결할 방법 많이 있을 거야.",
      "en": "There will (/are going to) be a lot of (/many) ways to fix/solve that/it."
     },
     {
      "n": 41,
      "ko": "혜택이 많이 있을 거야.",
      "en": "There will (/are going to) be a lot of (/many) benefits."
     },
     {
      "n": 42,
      "ko": "혜택이 있어야지. 안 그러면, 무슨 소용이야?",
      "en": "There has to be a benefit. Otherwise, what's the point/use?"
     },
     {
      "n": 43,
      "ko": "유혹이 많을 지도 몰라. 난 강해지고 싶어.",
      "en": "There may/might be a lot of (/many) temptations. I want to (/I'd like to) be strong."
     },
     {
      "n": 44,
      "ko": "유혹이 많이 있을 거야. 우리 강해져야 돼.",
      "en": "There will (/are going to) be a lot of (/many) temptations. We have to be strong."
     },
     {
      "n": 45,
      "ko": "너가 공항에 도착하면, 널 픽업할 누군가가 있을 거야.",
      "en": "When you arrive at the airport, there will (/is going to) be someone/somebody to pick you up."
     },
     {
      "n": 46,
      "ko": "내일 저녁에 TV에서 축구 시합 있을 거야. 난 집에 일찍 가서 그거 보려고.",
      "en": "There will (/is going to) be a soccer match/game on TV tomorrow evening. I am going to go home early and/to watch it."
     },
     {
      "n": 47,
      "ko": "새로운 기능들이 많이 있을 거예요.",
      "en": "There will (/are going to) be a lot of (/many) new features/functions."
     },
     {
      "n": 48,
      "ko": "여기 예전엔 은행이 있었는데.",
      "en": "There used to be a bank here."
     },
     {
      "n": 49,
      "ko": "여기에 새로운 상점들과, 빌딩이 생길 거야. (=있을 거야)",
      "en": "There will (/are going to) be new shops/stores and buildings here."
     },
     {
      "n": 50,
      "ko": "장단점이 있을 거야. 우린 그 모든 장단점을 고려해보는 게 좋을 것 같아요.",
      "en": "There will (/are going to) be pros and cons. I think we should consider all the pros and cons."
     },
     {
      "n": 51,
      "ko": "많은 재미있는 활동들이 있을 거야. 나라면 가고 싶을텐데.",
      "en": "There will (/are going to) be a lot of (/many) fun activities. I would want to go."
     },
     {
      "n": 52,
      "ko": "먹을 거 많을 거야. (=먹을 많은 것들이 있을 거야.)",
      "en": "There will (/are going to) be a lot of (/many) things to eat."
     },
     {
      "n": 53,
      "ko": "배울 게 많이 있을 거야. 우린 뭔가 새로운 걸 매일 배우잖아.",
      "en": "There will (/are going to) be a lot of (/many) things to learn. We learn something new every day."
     },
     {
      "n": 54,
      "ko": "할 거 많이 있을 것 같아. 재미있을 거야. 기대된다.",
      "en": "I think there will be a lot of (/many) things to do. It will (/is going to) be fun. I'm excited. /It's exciting."
     },
     {
      "n": 55,
      "ko": "볼 거 많이 있을 거야.",
      "en": "There will (/are going to) be a lot of (/many) things to see."
     },
     {
      "n": 56,
      "ko": "갈데 많을 거야. (=갈 많은 곳들이 있을 거야.)",
      "en": "There will (/are going to) be a lot of (/many) places to go."
     },
     {
      "n": 57,
      "ko": "모든 게 있을 거야. 아무것도 가져오지 않으셔도 됩니다.",
      "en": "There will (/is going to) be everything. You don't need to bring anything."
     },
     {
      "n": 58,
      "ko": "너가 필요한 모든 게 있을 거야.",
      "en": "There will (/is going to) be everything you need."
     },
     {
      "n": 59,
      "ko": "너가 필요한 게 (뭔가) 있을지도 몰라. 필요한 게 있으면, 언제든지 제게 오세요.",
      "en": "There may/might be something you need. If there is something you need (/ if you need something), come to me anytime."
     },
     {
      "n": 60,
      "ko": "우리회사에 대해 불만 사항이 많이 있었어. 우린 새로운 아이디어가 필요합니다.",
      "en": "There have been many complaints about/against our company. We need new ideas."
     },
     {
      "n": 61,
      "ko": "사람 많이 없을 거야.",
      "en": "There won't (/aren't going to) be a lot of (/many) people."
     },
     {
      "n": 62,
      "ko": "옛날엔 사람 많이 없었는데.",
      "en": "There didn't use to be a lot of (/many) people."
     },
     {
      "n": 63,
      "ko": "사람 많이 없을지도 몰라.",
      "en": "There may/might not be a lot of (/many) people."
     },
     {
      "n": 64,
      "ko": "문제 없을 거야. 걱정할 필요 없어요.",
      "en": "There won't (/isn't going to) be a problem. You don't need to worry."
     },
     {
      "n": 65,
      "ko": "문제 없을지도 모르잖아.",
      "en": "There may/might not be a problem."
     },
     {
      "n": 66,
      "ko": "우리가 그 시스템 바꾼 이후로는, 문제가 없었어.",
      "en": "Since we changed the system, there hasn't been a problem."
     },
     {
      "n": 67,
      "ko": "모자랄 것 같아. (=충분히 없을 것 같아)",
      "en": "I don't think there will be enough."
     },
     {
      "n": 68,
      "ko": "모자랄 수도 있어. 더 가져가요 혹시 모르니까.",
      "en": "There may/might not be enough. Take more, just in case."
     },
     {
      "n": 69,
      "ko": "또 다른 기회는 없을지도 몰라.",
      "en": "There may/might not be another chance."
     },
     {
      "n": 70,
      "ko": "똑같은 기회는 없을 거야. 하지만, 더 나은 기회가 있을 것 같아.",
      "en": "There won't (/isn't going to) be the same chance. But I think there will be a better chance."
     },
     {
      "n": 71,
      "ko": "아무 조건 없을 거야. 할래?",
      "en": "There won't (/aren't going to) be any conditions. Are you in?"
     },
     {
      "n": 72,
      "ko": "이유 없어도 돼. 우리가 설명할 수 없는 것들이 있잖아.",
      "en": "There doesn't have to be a reason. There are things we can't explain."
     },
     {
      "n": 73,
      "ko": "내일 할 일 많을 거 같아.",
      "en": "I think there will be a lot of (/many) things to do tomorrow."
     },
     {
      "n": 74,
      "ko": "걱정할 거 (아무것도) 없을 거야.",
      "en": "There won't (/isn't going to) be anything to worry. / There will (/is going to) be nothing to worry (about)."
     },
     {
      "n": 75,
      "ko": "집에 먹을 거 (아무것도) 없을지도 모르는데.",
      "en": "There may/might not be anything to eat at home. / There may/might be nothing to eat at home."
     },
     {
      "n": 76,
      "ko": "그거 작은 마을인데. 갈데가 (아무데도) 없을 거야.",
      "en": "It/That is a small town. There won't (/isn't going to) be anywhere to go. / There will (/is going to) be nowhere to go."
     },
     {
      "n": 77,
      "ko": "할 말 (아무것도) 없을 거야.",
      "en": "There won't (/isn't going to) be anything to say. / There will (/is going to) be nothing to say."
     },
     {
      "n": 78,
      "ko": "하고 싶은 말 (아무것도) 없을 거야.",
      "en": "There won't (/isn't going to) be anything I want to say. / There will (/is going to) be nothing I want to say."
     },
     {
      "n": 79,
      "ko": "거기엔 내가 하고 싶은 거 (아무것도) 없을 거야. 난 가기 싫어.",
      "en": "There won't (/isn't going to) be anything I want to do there. / There will (/is going to) be nothing I want to do there. I don't want to (/wouldn't like to) go."
     },
     {
      "n": 80,
      "ko": "우리가 그 앨 위해서 할 수 있는 게 (아무것도) 없을지도 몰라.",
      "en": "There may/might not be anything we can do for him. / There may/might be nothing we can do for him."
     },
     {
      "n": 81,
      "ko": "방법이 있을까요?",
      "en": "Will there be a way? / Is there going to be a way?"
     },
     {
      "n": 82,
      "ko": "해결책이 있을까요?",
      "en": "Will there be a solution? / Is there going to be a solution?"
     },
     {
      "n": 83,
      "ko": "차 막힐까? 우리 언제 나가는 게 좋을까?",
      "en": "Will there be a lot of traffic/a traffic jam? / Is there going to be a lot of traffic/a traffic jam? When should we go out/leave?"
     },
     {
      "n": 84,
      "ko": "사람 많을까? 어떻게 생각해?",
      "en": "Will there be a lot of (/many) people? / Are there going to be a lot of (/many) people? What do you think?"
     },
     {
      "n": 85,
      "ko": "사람 얼마나 올까? (=몇 명 있을까?)",
      "en": "How many people will there be (/are there going to be)?"
     },
     {
      "n": 86,
      "ko": "옛날엔 여기 사람 많았어?",
      "en": "Did there use to be a lot of (/many) people here?"
     },
     {
      "n": 87,
      "ko": "이유가 있어야 돼? 이유 없는데.",
      "en": "Does there have to be a reason? There isn't a reason. / There is no reason."
     },
     {
      "n": 88,
      "ko": "무료 wifi가 있을까요?",
      "en": "Will there be free Wi-Fi? / Is there going to be free Wi-Fi?"
     },
     {
      "n": 89,
      "ko": "문제가 있을까요?",
      "en": "Will there be a problem? / Is there going to be a problem?"
     },
     {
      "n": 90,
      "ko": "우리 사이에 미래가 있을까?",
      "en": "Will there be a future between us? / Is there going to be a future between us?"
     },
     {
      "n": 91,
      "ko": "시간이 있을까?",
      "en": "Will there be time? / Is there going to be time?"
     },
     {
      "n": 92,
      "ko": "박물관에 갈 시간이 있을까?",
      "en": "Will there be time to go to/visit the museum? / Is there going to be time to go to the museum?"
     },
     {
      "n": 93,
      "ko": "시간 충분할까? (=충분히 있을까?)",
      "en": "Will there be enough time? /Is there going to be enough time?"
     },
     {
      "n": 94,
      "ko": "그걸 다 할 시간이 있을 것 같아?",
      "en": "Do you think there will be time to finish that/it?"
     },
     {
      "n": 95,
      "ko": "시간이 얼마나 있을까?",
      "en": "How much time will there be? / How much time is there going to be?"
     },
     {
      "n": 96,
      "ko": "기회가 있을까요?",
      "en": "Will there be a chance? / Is there going to be a chance?"
     },
     {
      "n": 97,
      "ko": "이번 기회 놓쳤어. 또 다른 기회가 있을 것 같아?",
      "en": "I (have) missed this chance. Do you think there will be another chance?"
     },
     {
      "n": 98,
      "ko": "식 후에 질문을 할 기회가 있을까요?",
      "en": "Will there be time to ask questions after the ceremony? / Is there going to be time to ask questions after the ceremony?"
     },
     {
      "n": 99,
      "ko": "가능성이 있을까요?",
      "en": "Will there be a possibility? / Is there going to be a possibility?"
     },
     {
      "n": 100,
      "ko": "가능성이 얼마나 있을까요?",
      "en": "How much possibility will there (/is there going to) be?"
     }
    ]
   },
   {
    "u": 6,
    "title": "Unit 6",
    "items": [
     {
      "n": 1,
      "ko": "너 지금 어디 가야 되는지 말해줄래?",
      "en": "Can you tell me where you have to go now? Where are you going?"
     },
     {
      "n": 2,
      "ko": "넌 어디 가고 싶은지 말해봐.",
      "en": "Tell me where you want to (/you'd like to) go. I want to (/I'd like to) know where you want to (/you'd like to) go."
     },
     {
      "n": 3,
      "ko": "우리 이번 여름엔 어디 갈지 모르겠어.",
      "en": "I don't know where we will go this summer. We might/may go to Jeju Island."
     },
     {
      "n": 4,
      "ko": "난 이번엔 어디로 가는 게 좋을지 모르겠어.",
      "en": "I don't know where I should go this time. I haven't been to China yet. Have you been there?"
     },
     {
      "n": 5,
      "ko": "언제 갈 수 있는지 확실하지 않아.",
      "en": "I'm not sure when I can go. I'm still at work. There are a lot of/many things to do. / I have a lot of/many things to do."
     },
     {
      "n": 6,
      "ko": "너 지금 어디 가는지 알고 싶어.",
      "en": "I want to (/I'd like to) know where you are going."
     },
     {
      "n": 7,
      "ko": "어제 너 어디 갔었는지 말해줘.",
      "en": "Tell me where you went yesterday."
     },
     {
      "n": 8,
      "ko": "그 애 어디 갔는지 모르겠어. 어디 갔지?",
      "en": "I don't know where he/she has gone (/ he/she went). Where has he/she gone? / Where did he/she go?"
     },
     {
      "n": 9,
      "ko": "그 애 어디 가고 있는지 궁금하네.",
      "en": "I wonder where he/she was going."
     },
     {
      "n": 10,
      "ko": "언제 가도 되는 건지 물어봐야겠다.",
      "en": "I have to ask when I can go/come."
     },
     {
      "n": 11,
      "ko": "내가 뭘 하고 싶은지 모르겠어.",
      "en": "I don't know what I want to (/I'd like to) do. I want to (/I'd like to) know what I want and what I can do."
     },
     {
      "n": 12,
      "ko": "우리 이젠 뭘 해야 하는지 넌 알아?",
      "en": "Do you know what we have to do now? What do we do now? / What should/shall we do now?"
     },
     {
      "n": 13,
      "ko": "내가 널 위해서 뭘 할 수 있는지 알고 싶어.",
      "en": "I want to (/I'd like to) know what I can do for you. You know how much I support you."
     },
     {
      "n": 14,
      "ko": "너가 뭘 하는 게 좋을지 난 알아. 밖에 더 나가는 게 좋겠어. 너 그렇게 하면, 기분이 더 나을 거야.",
      "en": "I know what you should do. You should go out more. If/When you do that, you will feel better."
     },
     {
      "n": 15,
      "ko": "내일 뭐 할건지 확실하지 않아. 아무 계획(약속) 없어. 넌 뭐 할건데?",
      "en": "I'm not sure what I'm going to/will do tomorrow. I don't have (any) plans. What are you going to do?"
     },
     {
      "n": 16,
      "ko": "내가 지금 뭐 하고 있는지 모르겠네. 이게 누굴 위한 거지? 날 위한 건가?",
      "en": "I don't know what I am doing now. Who is this/it for? Is this/it for me/myself?"
     },
     {
      "n": 17,
      "ko": "어제 뭐 했는지 기억이 안 나. 어제 별 거 안 했어.",
      "en": "I can't/don't remember what I did yesterday. I didn't do much (yesterday)."
     },
     {
      "n": 18,
      "ko": "그 애 뭐 하는지 (원래) 아니? 회계사야.",
      "en": "Do you know what he/she does (for a living)? He/She is an accountant."
     },
     {
      "n": 19,
      "ko": "지금까지 뭐 했는지 보여줄래요?",
      "en": "Can you show me what you have done so far?"
     },
     {
      "n": 20,
      "ko": "그 애 거기서 뭐 하고 있었는지 궁금하네. 그 애 거기 안 가는데.",
      "en": "I wonder what he/she was doing there. He/She doesn't go there."
     },
     {
      "n": 21,
      "ko": "너 뭐가 필요한지 알고 싶어.",
      "en": "I want to (/I'd like to) know what you need."
     },
     {
      "n": 22,
      "ko": "내가 뭐가 필요할지 모르겠어.",
      "en": "I don't know what I will need."
     },
     {
      "n": 23,
      "ko": "그 애가 뭘 원하는지 넌 알아?",
      "en": "Do you know what he/she wants?"
     },
     {
      "n": 24,
      "ko": "그 애가 왜 이해를 못 하는지 궁금해.",
      "en": "I wonder why he/she can't (/doesn't) understand."
     },
     {
      "n": 25,
      "ko": "뭐 먹고 싶은지 모르겠어.",
      "en": "I don't know what I want to/I'd like to eat."
     },
     {
      "n": 26,
      "ko": "그 애가 뭔가 말했는데. 그 애가 뭐라고 말했는지 까먹었어.",
      "en": "He/She said something. I forgot what he/she said."
     },
     {
      "n": 27,
      "ko": "너 어디 갈건지, 누구랑 갈 건지, 그리고 거기 얼마나 오래 있을 건지 말해줄래?",
      "en": "Can you tell me where you are going to go, who you are going to go with, and how long you are going to stay there?"
     },
     {
      "n": 28,
      "ko": "이거 언제 배달해 줄 수 있는지 알려줄래요?",
      "en": "Can you let me know when you can deliver it/this?"
     },
     {
      "n": 29,
      "ko": "내가 뭘 잘못한 건지 모르겠어. 난 아무것도 잘못하지 않았어.",
      "en": "I don't know what I did (/have done) wrong. I didn't do (/haven't done) anything wrong."
     },
     {
      "n": 30,
      "ko": "저 어느걸로 써야 되는지 모르겠어요. 어느걸로 쓰는 게 좋은지 말해줄래요?",
      "en": "I don't know which one I have to use. Can you tell me which one I should use (/which one is better to use)?"
     },
     {
      "n": 31,
      "ko": "너 몇 시에 올 수 있는지 알려줄래?",
      "en": "Can you let me know what time you can come?"
     },
     {
      "n": 32,
      "ko": "제가 몇 시에 와야 되는지 알아요?",
      "en": "Do you know what time I have to come?"
     },
     {
      "n": 33,
      "ko": "몇 시에 퇴근인지 말해줄래요?",
      "en": "Can you tell me what time you finish work?"
     },
     {
      "n": 34,
      "ko": "내가 얼마나 노력을 했는지 넌 몰라. 넌 절대 모를 걸.",
      "en": "You don't know (/ You have no idea) how hard I tried. You will never know."
     },
     {
      "n": 35,
      "ko": "그 애가 뭐라고 할지 모르겠어.",
      "en": "I don't know what he will say."
     },
     {
      "n": 36,
      "ko": "무슨말인지 알아요. (=너의 의미가 뭔지 알아.)",
      "en": "I know what you mean."
     },
     {
      "n": 37,
      "ko": "이게 무슨 뜻인지 아니?",
      "en": "Do you know what this/it means?"
     },
     {
      "n": 38,
      "ko": "너 한국 온지 (=있은지) 얼마나 오래 됐는지 알고 싶어.",
      "en": "I want to/I'd like to know how long you have been in Korea."
     },
     {
      "n": 39,
      "ko": "너가 뭐라고 말하려고 했는지 난 알아. 말 안 해도 돼.",
      "en": "I know what you were going to say. You don't have to say it/that."
     },
     {
      "n": 40,
      "ko": "우리 어디서 만날 건지 확실하지 않아.",
      "en": "I'm not sure where we are going to meet."
     },
     {
      "n": 41,
      "ko": "이게 몇 시에 시작할지 모르겠어요. 금방 시작해야 되는데.",
      "en": "I don't know what time it/this will begin/start. It has to start/begin soon."
     },
     {
      "n": 42,
      "ko": "그 애 어디 사는지 알아? 이 근처 살아?",
      "en": "Do you know where he/she lives? Does he/she live near/around here?"
     },
     {
      "n": 43,
      "ko": "내가 집에 몇 시에 왔는지 궁금하네.",
      "en": "I wonder what time I came/got home."
     },
     {
      "n": 44,
      "ko": "내가 널 어떻게 도울 수 있는지 알고 싶어.",
      "en": "I want to (/I'd like to) know how I can help you."
     },
     {
      "n": 45,
      "ko": "여기에 뭘 써야 하는지 말해줄래요?",
      "en": "Can you tell me what I have to write here?"
     },
     {
      "n": 46,
      "ko": "너 그 애 왜 싫어하는지 이해가 안 돼. 그 애 정말 괜찮은데.",
      "en": "I don't understand why you hate him/her. He/She is really nice/ok."
     },
     {
      "n": 47,
      "ko": "너 어디에서 머물고 있는지 알고 싶어.",
      "en": "I want to (/I'd like to) know where you are staying."
     },
     {
      "n": 48,
      "ko": "너 그걸로 뭘 하려고 했었는지 모르겠어.",
      "en": "I don't know what you were going to do with it/that."
     },
     {
      "n": 49,
      "ko": "내가 어디에 주차했는지 생각이 안 나.",
      "en": "I can't (/don't) remember where I parked my car."
     },
     {
      "n": 50,
      "ko": "우리 뭐 살 건지 알아야지.",
      "en": "We/I have to know what we are going to buy/get."
     },
     {
      "n": 51,
      "ko": "내가 그 앨 왜 이해해야 되는지 이해가 안 돼.",
      "en": "I don't understand why I have to understand him/her."
     },
     {
      "n": 52,
      "ko": "뭐 갖고 싶은지 말해줘.",
      "en": "Tell me what you want to (/you'd like to) have/get."
     },
     {
      "n": 53,
      "ko": "이게 얼마나 오래 걸릴지 말해줄래요?",
      "en": "Can you tell me how long it will take?"
     },
     {
      "n": 54,
      "ko": "얼마나 오래 걸렸는지 까먹었어.",
      "en": "I forgot how long it took."
     },
     {
      "n": 55,
      "ko": "얼마나 오래 걸리는지 모르겠어. 넌 얼마나 걸리는지 아니?",
      "en": "I don't know how long it takes. Do you know how long it takes?"
     },
     {
      "n": 56,
      "ko": "우리가 여기에 얼마나 오래 있을 수 있는지 알아요?",
      "en": "Do you know how long we can stay here?"
     },
     {
      "n": 57,
      "ko": "우리 서로 안지 얼마나 오래 됐는지 몰라. (그게) 매우 오래 됐어. 우리 어렸을 때부터, 친구였어.",
      "en": "I don't know how long we have known each other. It has been very/so/really long. Since we were little/children/kids, we have been friends."
     },
     {
      "n": 58,
      "ko": "이게 뭐 하는건지 (원래!) 말해줄래요?",
      "en": "Can you tell me what it/this does?"
     },
     {
      "n": 59,
      "ko": "내 선글라스가 없어. 어디다 뒀는지 까먹었어.",
      "en": "I can't find my sunglasses. I forgot where I put/left them."
     },
     {
      "n": 60,
      "ko": "내가 뭐 말하려고 했는지 까먹었었는데. 넌 내가 뭐 말하려고 했는지 어떻게 알았어?",
      "en": "I forgot what I was going to say. How did you know what I was going to say?"
     },
     {
      "n": 61,
      "ko": "내가 예전엔 이걸 어떻게 했었는지 모르겠다.",
      "en": "I don't know how I used to do this/it."
     },
     {
      "n": 62,
      "ko": "뭘 찾고 있는지 말해줄래요?",
      "en": "Can you tell me what you are looking for?"
     },
     {
      "n": 63,
      "ko": "내가 왜 그랬는지 모르겠어. 내가 왜 그 말 했는지 모르겠어.",
      "en": "I don't know why I did that/it. I don't know why I said that/it."
     },
     {
      "n": 64,
      "ko": "제가 얼마나 오래 기다려야 되는지 말해줘요.",
      "en": "Tell me how long I have to wait."
     },
     {
      "n": 65,
      "ko": "여기서 거기에 어떻게 갈 수 있는지 말해줄래요?",
      "en": "Can you tell me how I can get/go there from here?"
     },
     {
      "n": 66,
      "ko": "이거 어디서 샀는지 기억이 안나.",
      "en": "I can't (/don't) remember where I bought/got it/this."
     },
     {
      "n": 67,
      "ko": "우리 서로 또 언제 볼 수 있는지 모르겠어.",
      "en": "I don't know when we can see each other again."
     },
     {
      "n": 68,
      "ko": "넌 무슨 생각하고 있는지 알고 싶어.",
      "en": "I want to (/I'd like to) know what you are thinking (about)."
     },
     {
      "n": 69,
      "ko": "이거에 대한 너의 생각이 뭔지 알고 싶어요.",
      "en": "I want to (/I'd like to) know what you think about this/it. / I want to know what your thoughts are about this."
     },
     {
      "n": 70,
      "ko": "어떻게 그런 일이 생겼는지 모르겠어. 언제 그런 일이 생긴 건지 넌 아니?",
      "en": "I don't know how it/that happened. Do you know when it/that happened?"
     },
     {
      "n": 71,
      "ko": "넌 뭐 주문하고 싶은지 말해줄래?",
      "en": "Can you tell me what you want to (/you'd like to) order?"
     },
     {
      "n": 72,
      "ko": "우리가 얼마 내야 되는지 알려줄래요?",
      "en": "Can you let me know how much we have to pay?"
     },
     {
      "n": 73,
      "ko": "내 기분이 어떤지 모르겠어.",
      "en": "I don't know how I feel (/I'm feeling)."
     },
     {
      "n": 74,
      "ko": "내가 왜 오해를 했었는지 모르겠어.",
      "en": "I don't know why I misunderstood (it/him)."
     },
     {
      "n": 75,
      "ko": "내가 뭐 사려고 했는지 까먹었어. 집에다가 목록 두고 왔어.",
      "en": "I forgot what I was going to buy/get. I left the list at home."
     },
     {
      "n": 76,
      "ko": "나 이거 가진지 얼마나 오래 됐는지 모르겠어.",
      "en": "I don't know how long I have had it/this."
     },
     {
      "n": 77,
      "ko": "쟤네들은 어디 가는 건지 궁금하네.",
      "en": "I wonder where they are going."
     },
     {
      "n": 78,
      "ko": "난 몇 시에 잤는지 모르겠어.",
      "en": "I don't know what time I went to sleep."
     },
     {
      "n": 79,
      "ko": "내가 널 어떻게 도울 수 있는지 알고 싶어.",
      "en": "I want to (/I'd like to) know how I can help you."
     },
     {
      "n": 80,
      "ko": "이걸 어떻게 해결할지 모르겠어. 내가 이걸 해결할 수 있을지 궁금하다.",
      "en": "I don't know how I will solve/fix it/this. I wonder if/whether I can fix/solve it."
     },
     {
      "n": 81,
      "ko": "나 이거 해야 되는 건지 아닌지 모르겠어.",
      "en": "I don't know if/whether I have to do it/this."
     },
     {
      "n": 82,
      "ko": "너 이거 할 수 있는지 말해줘.",
      "en": "Tell me if/whether you can do it/this."
     },
     {
      "n": 83,
      "ko": "너 그거 벌써 했는지 알고 싶어.",
      "en": "I want to/I'd like to know if/whether you have already done (/you already did) it/that."
     },
     {
      "n": 84,
      "ko": "너 그거 해봤는지 말해줄래?",
      "en": "Can you tell me if/whether you have done (/tried) it/that?"
     },
     {
      "n": 85,
      "ko": "내가 그걸 하는 게 좋을지 모르겠어. 하는 게 더 나을까?",
      "en": "I don't know if/whether I should do it/that. Will it be better to do (that)? /Should I do that/it?"
     },
     {
      "n": 86,
      "ko": "너 이거 하고 싶어 하는지 난 모르겠어.",
      "en": "I don't know if/whether you want to (/you'd like to) do it/this."
     },
     {
      "n": 87,
      "ko": "제가 이거 해도 되는지 궁금해요.",
      "en": "I wonder if/whether I can do it/this."
     },
     {
      "n": 88,
      "ko": "우리 이거 할지 확실하지 않아요.",
      "en": "I'm/(We're) not sure if/whether we will do it/this."
     },
     {
      "n": 89,
      "ko": "그 애 뭔가 하고 있는지 궁금하다. 그 애한테 해야 되는 말이 (뭔가) 있는데.",
      "en": "I wonder if/whether he/she is doing something. There is something I have to tell him/her."
     },
     {
      "n": 90,
      "ko": "그 애 이거 좋아하는지 (아닌지/혹시) 아니?",
      "en": "Do you know if/whether he/she likes it/this?"
     },
     {
      "n": 91,
      "ko": "이거 되는지 모르겠어. 안 쓴지 좀 됐어. 해봐야 돼.",
      "en": "I don't know if/whether it works (/is working). I haven't used it (for) a while. I have to try it."
     },
     {
      "n": 92,
      "ko": "내일 비가 올지 아니? 내일 세차 하려고 했었는데.",
      "en": "Do you know it/whether it will rain tomorrow? I was going to wash my car (tomorrow)."
     },
     {
      "n": 93,
      "ko": "너도 올 건지 말해줘. 너 오면, 나도 올게.",
      "en": "Tell me if/whether you are going to come. If you come, I will come too."
     },
     {
      "n": 94,
      "ko": "그 애 이거 먹어봤는지 모르겠네. 그래서 이거 좋아하는지 모르겠어.",
      "en": "I don't know if/whether he/she has tried it/this. So, I don't know if/whether he/she likes it/this."
     },
     {
      "n": 95,
      "ko": "나 괜찮아 보이는지 말해줄래? 나 어때 보여?",
      "en": "Can you tell me if/whether I look ok? How do I look?"
     },
     {
      "n": 96,
      "ko": "내일 찾으러 가도 되는지 알고 싶어요.",
      "en": "I want to (/I'd like to) know if/whether I can pick it up tomorrow."
     },
     {
      "n": 97,
      "ko": "그 애 한국말 하는지 알아?",
      "en": "Do you know if/whether he/she speaks Korean?"
     },
     {
      "n": 98,
      "ko": "나도 가야 되는 건지 모르겠어. 가고 싶지 않아. 하지만, 가야 된다면, 갈 거야.",
      "en": "I don't know if/whether I have to go, too. I don't want to (/wouldn't like to) go. But if I have to (go), I will (go)."
     },
     {
      "n": 99,
      "ko": "우리가 옳은 일을 한 건지 모르겠어.",
      "en": "I don't know if/whether we have done (/did) the right thing."
     },
     {
      "n": 100,
      "ko": "제가 뭔가 잘못했는지 알고 싶어요.",
      "en": "I want to/I'd like to know if/whether I have done (/did) something wrong."
     }
    ]
   },
   {
    "u": 7,
    "title": "Unit 7",
    "items": [
     {
      "n": 1,
      "ko": "나 그거 뭔지 정확히 알아. 뭔지 알고 싶어?",
      "en": "I know exactly what it/that is. Do you want to (/Would you like to) know what it is?"
     },
     {
      "n": 2,
      "ko": "그게 언제 였는지 생각이 안 나.",
      "en": "I can't(/don't) remember when it was."
     },
     {
      "n": 3,
      "ko": "그게 얼마나 오래된건지 모르겠네. (그거) 몇일 되었어.",
      "en": "I don't know how long it/that has been. It has been a few days."
     },
     {
      "n": 4,
      "ko": "이게 얼마일지 상상이 안 가. 비쌀 것 같아.",
      "en": "I can't imagine how much it/this will be. I think it will be expensive."
     },
     {
      "n": 5,
      "ko": "그게 예전엔 어디에 있었는지 까먹었어.",
      "en": "I forgot where it used to be."
     },
     {
      "n": 6,
      "ko": "저는 그게 언제일지 알고 싶어요.",
      "en": "I want to (/I'd like to) know when it/that will be."
     },
     {
      "n": 7,
      "ko": "네가 왜 슬퍼했었는지 궁금해. 말해줄래? 너 많이 울었어.",
      "en": "I wonder why you were sad. Can you tell me? You cried a lot."
     },
     {
      "n": 8,
      "ko": "난 너가 몇살인지 알고 싶어. 추측하고 싶지 않아요. 몇살인지 말해줄 수 있어요?",
      "en": "I want to (/I'd like to) know how old you are. I don't want to (/I wouldn't like to) guess. Can you tell me how old you are?"
     },
     {
      "n": 9,
      "ko": "우리가 지금 어디 있는 건지 모르겠어. 우리 길을 잃은지도 몰라.",
      "en": "I don't know where we are now. We might/may be lost."
     },
     {
      "n": 10,
      "ko": "몇 시였는지 기억이 안 나.",
      "en": "I can't (/don't) remember what time it was."
     },
     {
      "n": 11,
      "ko": "무슨 색이었는지 말해줄래요?",
      "en": "Can you tell me what color it was?"
     },
     {
      "n": 12,
      "ko": "얼마나 먼지 알아야 돼. 가까운 데로 가고 싶어.",
      "en": "I/We have to know how far it is. I want to (/I'd like to) go somewhere close/near."
     },
     {
      "n": 13,
      "ko": "저는 그게 언제 다 될지 알고 싶어요.",
      "en": "I want to (/I'd like to) know when it/that will be ready."
     },
     {
      "n": 14,
      "ko": "너 어디 갔다 왔는지 말해줘. 어디 갔다 왔어?",
      "en": "Tell me where you have been. Where have you been?"
     },
     {
      "n": 15,
      "ko": "그게 얼마였는지 기억나? 거기에 돈 많이 썼니?",
      "en": "Can (/Do) you remember how much it was? Did you spend a lot of money on it/that?"
     },
     {
      "n": 16,
      "ko": "그 애 어떤지 궁금하다. 그 애 안 본지 오래됐어.",
      "en": "I wonder how he/she is. I haven't seen him/her for a long time."
     },
     {
      "n": 17,
      "ko": "그게 어땠는지 알고 싶어. 좋은 시간 보냈니?",
      "en": "I want to(/I'd like to) know how it/that was. Did you have a good/nice time?"
     },
     {
      "n": 18,
      "ko": "너 어떻게 지냈는지 말해줄래? 바빴니?",
      "en": "Can you tell me how you have been? Have you been busy?"
     },
     {
      "n": 19,
      "ko": "그게 어떨지 궁금해. 아주 멋질 거야.",
      "en": "I wonder how it/that will be. It is going to(/will) be cool/nice/fantastic."
     },
     {
      "n": 20,
      "ko": "그게 예전엔 얼마였나 잊었어. 가격이 예전엔 높았었지.",
      "en": "I forgot how much it used to be. The price used to be high."
     },
     {
      "n": 21,
      "ko": "너 어제 어디 있었는지 알아. 너 공원에 있었잖아. 나 너 거기에서 봤어.",
      "en": "I know where you were yesterday. You were in/at the park. I saw you there."
     },
     {
      "n": 22,
      "ko": "어느 길일지 확실하지 않아. 누군가한테 물어봐야겠다.",
      "en": "I'm not sure which way it will be. I/We have to ask someone/somebody."
     },
     {
      "n": 23,
      "ko": "난 그게 누군지 알아. 누군지 알고 싶어?",
      "en": "I know who it/that is. Do you want to (/Would you like to) know who it is?"
     },
     {
      "n": 24,
      "ko": "너 여기 온지(=있은지) 얼마나 오래됐는지 말해줄래? (그거) 오래됐니?",
      "en": "Can you tell me how long you have been here? Has it been long/ a long time?"
     },
     {
      "n": 25,
      "ko": "내가 예전엔 왜 이걸 무서워했었는지 이해가 안 가. 예전엔 많은 것들을 무서워했었어.",
      "en": "I don't understand why I used to be scared/afraid of this/it. I used to be scared/afraid of a lot of (/many) things."
     },
     {
      "n": 26,
      "ko": "그게 얼마나 오래전이 있었는지 모르겠어. 아주 오래전이었어.",
      "en": "I don't know how long ago it was. It was a long time ago."
     },
     {
      "n": 27,
      "ko": "그 애 어느 나라 사람인지 모르겠어. (=어디 출신인지)",
      "en": "I don't know where he/she is from."
     },
     {
      "n": 28,
      "ko": "그 애 사무실로 언제 돌아올지 말해줄래요?",
      "en": "Can you tell me when he/she will be (/come) back to the office?"
     },
     {
      "n": 29,
      "ko": "너 여기 몇번 와봤는지 궁금해.",
      "en": "I wonder how many times you have been here."
     },
     {
      "n": 30,
      "ko": "그게 예전엔 어땠는지 생각이 안 나.",
      "en": "I can't(/don't) remember how it/that used to be."
     },
     {
      "n": 31,
      "ko": "이게 무슨 사이즈인지 알고 싶어요. 라지예요? 작아 보이는데.",
      "en": "I want to (/I'd like to) know what size it (/this) is. Is it large? It looks small."
     },
     {
      "n": 32,
      "ko": "얼마나 좋았는지 말해 봐.",
      "en": "Tell me how good it was."
     },
     {
      "n": 33,
      "ko": "예전엔 얼마나 컸었는지 모르겠어.",
      "en": "I don't know how big it used to be."
     },
     {
      "n": 34,
      "ko": "그게 몇 시 일지 정확히 알아야 돼.",
      "en": "I/We have to know exactly what time it will be."
     },
     {
      "n": 35,
      "ko": "쟤는 어디 갔다 왔는지 궁금하다.",
      "en": "I wonder where he/she has been."
     },
     {
      "n": 36,
      "ko": "지금 몇 시인지 모르겠어. 난 지금 핸드폰이 없어. 차에 두고 왔어.",
      "en": "I don't know what time it is now. I don't have my phone now. I left it in the car."
     },
     {
      "n": 37,
      "ko": "이것들이 얼마였는지 아니?",
      "en": "Do you know how much these/they were?"
     },
     {
      "n": 38,
      "ko": "화장실이 어디에 있는지 말해줄래요?",
      "en": "Can you tell me where the bathroom/toilet is?"
     },
     {
      "n": 39,
      "ko": "그게 얼마나 어려웠는지 넌 몰라. 넌 안 해봤잖아.",
      "en": "You don't know (/ You have no idea) how hard/difficult it was. You haven't tried/done it."
     },
     {
      "n": 40,
      "ko": "그게 얼마나 어려울지 상상이 안 가. 하지만, 넌 이거 이겨낼 수 있어.",
      "en": "I can't imagine how hard/difficult it will be. But you can overcome it/this."
     },
     {
      "n": 41,
      "ko": "너 왜 늦었는지 말해봐.",
      "en": "Tell me why you are late."
     },
     {
      "n": 42,
      "ko": "넌 너가 10년 후에 어디에 있을지 알아?",
      "en": "Do you know where you will (/are going to) be in 10 years from now?"
     },
     {
      "n": 43,
      "ko": "이게 어디 있었는지 말해줄래? 어디서 찾았어?",
      "en": "Can you tell me where it/this was? Where did you find it?"
     },
     {
      "n": 44,
      "ko": "그 애 지금 어디 있는지 몰라. 넌 그 애 어디 있는지 알아? 어디 갔어?",
      "en": "I don't know where he/she is now. Do you know where he/she is? Where has he/she gone? / Where did he/she go?"
     },
     {
      "n": 45,
      "ko": "어느 거였는지 까먹었어.",
      "en": "I forgot which one it was."
     },
     {
      "n": 46,
      "ko": "어느 거인지 기억이 안 나. 어느 게 내꺼니?",
      "en": "I can't (/don't) remember which one it is. Which one is mine?"
     },
     {
      "n": 47,
      "ko": "나 이 사진에서 몇살이었는지 모르겠어. 20대 였어.",
      "en": "I don't know how old I was in this photo/picture. I was in my 20s."
     },
     {
      "n": 48,
      "ko": "이게 누구 차인지 알아요?",
      "en": "Do you know whose car this/it is?"
     },
     {
      "n": 49,
      "ko": "이게 왜 여기 있는 건지 궁금하네. 네가 여기다 뒀어?",
      "en": "I wonder why it/this is here. Did you put it here?"
     },
     {
      "n": 50,
      "ko": "그게 왜 였는지 알아? 그 이유를 알고 싶다.",
      "en": "Do you know why it/that was? I want to (/I'd like to) know the reason."
     },
     {
      "n": 51,
      "ko": "이게 왜 이런 건지 알고 싶어요. 나 아무것도 안 만졌는데…",
      "en": "I want to (/I'd like to) know why it is like this. I haven't touched (/didn't touch) anything."
     },
     {
      "n": 52,
      "ko": "너가 뭐에 대해 걱정했는지 알아. 하지만, 잘 됐잖아. 괜찮아. 그건 그만 걱정해.",
      "en": "I know what you have been (/ what you were) worried about. But it (has) worked out (well). It's ok. Stop worrying about it/that."
     },
     {
      "n": 53,
      "ko": "거기 몇번 가봤는지 확실하지 않아. 많이 가봤어.",
      "en": "I'm not sure how many times I've been there. I've been there many times (/a lot)."
     },
     {
      "n": 54,
      "ko": "왜 내가 여기 있는지 모르겠어. 널 위해서 여기 왔지. 하지만, 여기 있기 싫어.",
      "en": "I don't know why I'm here. I came (/am) here for you. But I don't want to be/stay here."
     },
     {
      "n": 55,
      "ko": "이것들이 왜 다른지 모르겠어요. 차이점이 뭔지 설명해줄래요?",
      "en": "I don't know why these/they are different. Can you explain what the difference is?"
     },
     {
      "n": 56,
      "ko": "왜 화가 났었는지 이해해요. 사과하고 싶어요.",
      "en": "I understand why you were mad/angry. I want to (/I'd like to) apologize."
     },
     {
      "n": 57,
      "ko": "내 선글라스가 어디에 있을까. (=어디 있는지 궁금하네) 내가 어디다 뒀지? 넌 어디에 있는지 알아?",
      "en": "I wonder where my sunglasses are. Where did I put them? Do you know where they are?"
     },
     {
      "n": 58,
      "ko": "그게 얼마나 힘든지 이해가 가요. 이거 금방 끝날 거예요. 강해져요.",
      "en": "I understand how hard/difficult it will be. It will (/is going to) be over soon. Be strong."
     },
     {
      "n": 59,
      "ko": "너의 계획이 뭔지 말해줘. 대안 있어?",
      "en": "Tell me what your plan is (/your plans are). Do you have a plan B?"
     },
     {
      "n": 60,
      "ko": "우린 그게 지금까지 어땠는지 알아야 합니다. 우린 그걸 바꿀 수 있어요. 우린 그걸 더 낫게 만들 수 있어요.",
      "en": "We have to know how it/that has been so far. We can change it. We can make it better."
     },
     {
      "n": 61,
      "ko": "그 애 결혼했는지 알아?",
      "en": "Do you know if/whether he/she is married?"
     },
     {
      "n": 62,
      "ko": "그게 거짓말이었는지 궁금해. 하지만, 거짓말 할 이유가 없잖아.",
      "en": "I wonder if/whether it was a lie. But there isn't a (/there is no) reason to lie."
     },
     {
      "n": 63,
      "ko": "나 거기 가봤는지 확실하지 않아.",
      "en": "I'm not sure if/whether I've been there."
     },
     {
      "n": 64,
      "ko": "그게 내일 열지 알고 싶어. 오늘 가야 되나?",
      "en": "I want to (/I'd like to) know if it/that will open tomorrow. Do I have to go today?"
     },
     {
      "n": 65,
      "ko": "좋은 생각인지 아닌지 모르겠어.",
      "en": "I don't know if/whether it is a good idea."
     },
     {
      "n": 66,
      "ko": "그게 내 잘못이었는지 궁금해.",
      "en": "I wonder if/whether it was my fault."
     },
     {
      "n": 67,
      "ko": "여기서 수영을 해도 안전할지 말해줄래요?",
      "en": "Can you tell me if/whether it will be safe to swim here?"
     },
     {
      "n": 68,
      "ko": "그거 재미있었는지 알고 싶어. 전부다 말해줘. 하나도 빼지말고.",
      "en": "I want to (/I'd like to) know if/whether it was fun. Tell me everything. Don't leave anything out. /Leave out nothing."
     },
     {
      "n": 69,
      "ko": "그게 더 나을 지 궁금하다. 어떡할까? (=뭘 하는게 좋을까?/뭘 할까?)",
      "en": "I wonder if/whether it/that will be better. What should/shall I do?"
     },
     {
      "n": 70,
      "ko": "이것들이 같은 건지 말해줄래? 나한텐 이것들 같아 보여.",
      "en": "Can you tell me if/whether these/they are the same? They look the same to me."
     },
     {
      "n": 71,
      "ko": "그게 가능한 건지 알고 싶어요. 언제 가능한 건지 또한 말해줄래요?",
      "en": "I want to (/I'd like to) know if/whether it is possible. Can you also tell me when it is possible?"
     },
     {
      "n": 72,
      "ko": "그게 가능했는지 궁금해요.",
      "en": "I wonder if/whether it was possible."
     },
     {
      "n": 73,
      "ko": "그렇게 하는 게 가능할지 아니?",
      "en": "Do you know if/whether it will be possible to do (that)?"
     },
     {
      "n": 74,
      "ko": "예전엔 그게 가능했는지 알고 싶어. 그게 어떻게 가능했지?",
      "en": "I want to (/I'd like to) know if/whether it used to be possible. How was it (/did it use to be) possible?"
     },
     {
      "n": 75,
      "ko": "너 괜찮은지 알고 싶어. 괜찮아? 얘기할 누군가가 필요하면, 아무때나 전화해.",
      "en": "I want to (/I'd like to) know if/whether you are ok. Are you ok? If you need someone to talk to, call me anytime."
     },
     {
      "n": 76,
      "ko": "그 애 괜찮았는지 모르겠네. 걱정하는 것처럼 보였는데.",
      "en": "I don't know if/whether he/she was ok. He looked/seemed worried."
     },
     {
      "n": 77,
      "ko": "그 애가 지금 바쁜지 모르겠어. 바쁠지도 몰라. 내가 그 애 볼 때, 그 애한테 말할게.",
      "en": "I don't know if/whether he/she is busy now. He/She may/might be busy. When I see him/her, I will tell him/her."
     },
     {
      "n": 78,
      "ko": "이게 금방 끝날지 궁금해. 빨리 끝날수록, 좋은데.",
      "en": "I wonder if/whether it/this will end/finish soon. The sooner, the better."
     },
     {
      "n": 79,
      "ko": "이게 최선인지 모르겠어. 어떻게 생각해? 우리가 뭘 하는게 좋을 것 같아?",
      "en": "I don't know if/whether it/this is the best. What do you think? What do you think we should do?"
     },
     {
      "n": 80,
      "ko": "그게 최선이었는지 알고 싶어. 내가 할 수 있었던 게 (아무거나) 있었을까?",
      "en": "I want to (/I'd like to) know if/whether it/that was the best. Was there anything I could do?"
     },
     {
      "n": 81,
      "ko": "여기 근처에 은행이 있는지 혹시 아세요?",
      "en": "Do you know if/whether there is a bank near/around here?"
     },
     {
      "n": 82,
      "ko": "문제가 있었는지 난 알아야겠어. 문제 있었어?",
      "en": "I have to know if/whether there was a problem. Was there a problem?"
     },
     {
      "n": 83,
      "ko": "충분한 시간이 있을지 알고 싶어요.",
      "en": "I want to (/I'd like to) know if/whether there will be enough time."
     },
     {
      "n": 84,
      "ko": "가능성이 있는 건지 말해줘요. 가능성이 있다면, 그거에 대해 뭔가 하고 싶어요.",
      "en": "Tell me if/whether there is a possibility. If there is a possibility, I want to (/I'd like to) do something about it."
     },
     {
      "n": 85,
      "ko": "이유가 있었는지 모르겠어. 그 이유가 뭤는데?",
      "en": "I don't know if/whether there was a reason. What was the reason?"
     },
     {
      "n": 86,
      "ko": "차가 막히는지 모르겠네.",
      "en": "I don't know if/whether there is a lot of traffic/a traffic jam."
     },
     {
      "n": 87,
      "ko": "방법이 있었는지 알아?",
      "en": "Do you know if/whether there was a way?"
     },
     {
      "n": 88,
      "ko": "사람이 많은지 말해줄래요? 사람 얼마나 있어?",
      "en": "Can you tell me if/whether there are a lot of(/many) people? How many people are there?"
     },
     {
      "n": 89,
      "ko": "사람이 많았는지 말해줘. 몇 명 있었어?",
      "en": "Tell me if/whether there were a lot of(/many) people. How many people were there?"
     },
     {
      "n": 90,
      "ko": "사람이 많을지 궁금하네. 사람 얼마나 올까? (=몇 명 있을까?) 많을 수록 좋은데.",
      "en": "I wonder if/whether there will be a lot of(/many) people. How many people will there be? The more, the better."
     },
     {
      "n": 91,
      "ko": "이 근처에 ATM 있는지 모르겠네. 못 봤는데. (=본적이 없어)",
      "en": "I don't know if/whether there is an ATM around/near here. I haven't seen it before. (/ I've never seen it.)"
     },
     {
      "n": 92,
      "ko": "학교에서 문제가 있었나 모르겠어. 그애 집에 왔을때, 뭔가 달라 보였어.",
      "en": "I don't know if/whether there was a problem at school. When he/she came/got home, something looked different."
     },
     {
      "n": 93,
      "ko": "이거에 대한 해결책이 있는지 알고 싶어요.",
      "en": "I want to (/I'd like to) know if/whether there is a solution to this/it."
     },
     {
      "n": 94,
      "ko": "사람 몇 명 있었는지 모르겠어. 세지 않았어.",
      "en": "I don't know how many people there were. I didn't count."
     },
     {
      "n": 95,
      "ko": "사람 몇 명 있을지 알아? 수천 명이 있을 거야.",
      "en": "Do you know how many people there will be? There will be thousands of people."
     },
     {
      "n": 96,
      "ko": "반에 학생이 몇 명 있는지 말해줄래요?",
      "en": "Can you tell me how many students there are in the class?"
     },
     {
      "n": 97,
      "ko": "거기 볼 게 많은지(=많은 것들이 있는지) 알아? 큰 도시야?",
      "en": "Do you know if/whether there are a lot of (/many) things to see? Is it a big city?"
     },
     {
      "n": 98,
      "ko": "이거 끝나면, 질문할 기회가 있을지 궁금하네.",
      "en": "When it's over, I wonder if/whether there will be a chance to ask questions."
     },
     {
      "n": 99,
      "ko": "너가 하고 싶은 게 (아무거라도) 있는지 말해줄래?",
      "en": "Can you tell me if/whether there is anything you want to do?"
     },
     {
      "n": 100,
      "ko": "내가 할수 있는 게 (뭔가) 있는지 알고 싶어요. 돕고 싶어.",
      "en": "I want to (/I'd like to) know if/whether there is something I can do. I want to (/I'd like to) help."
     }
    ]
   },
   {
    "u": 8,
    "title": "Unit 8",
    "items": [
     {
      "n": 1,
      "ko": "어렵지(, 그치)? 점점 어려워진다.",
      "en": "It's hard/difficult, isn't it? It's getting hard(er) (/more difficult)."
     },
     {
      "n": 2,
      "ko": "오늘 날씨 좋았다, 그렇지?",
      "en": "It was a beautiful/lovely day, wasn't it? / The weather was good today, wasn't it?"
     },
     {
      "n": 3,
      "ko": "돈 많이 들지, 그렇지 않니? 지금 그걸 할 여유가 있는지 모르겠어.",
      "en": "It costs a lot (of money), doesn't it? I don't know if/whether I can afford (to do) it/that."
     },
     {
      "n": 4,
      "ko": "너 이거 좋아하지?",
      "en": "You like it/this, don't you?"
     },
     {
      "n": 5,
      "ko": "내가 맞지(, 그렇지)? 그거 잘 안 됐잖아. 내가 맞고 싶진 않았는데… 내가 틀리고 싶었는데.",
      "en": "I am right, aren't I? It didn't work out (well). I didn't want to be right. I wanted to be wrong."
     },
     {
      "n": 6,
      "ko": "넌 중국에 가봤지? 어땠어? 올 여름에 우리 중국에 갈지도 몰라서.",
      "en": "You have been to China, haven't you? How was it? We might/may go to China this summer."
     },
     {
      "n": 7,
      "ko": "나 이거 해야 되지(, 그렇지)? 지금 할 수 있어.",
      "en": "I have to do it/this, don't I? I can do it now."
     },
     {
      "n": 8,
      "ko": "너 이거 찾고 있었지, 그렇지? 내가 청소할 때, 찾았어. 소파 밑에 있었어.",
      "en": "You were looking for it/this, weren't you? When I was cleaning(/vacuuming the floor), I found it. It was under the sofa/couch."
     },
     {
      "n": 9,
      "ko": "사람 많았지(, 그치)?",
      "en": "There were a lot of (/many) people, weren't there?"
     },
     {
      "n": 10,
      "ko": "너도 올 거지, 그렇지? 너 안 오면, 나도 안 올 거야.",
      "en": "You are going to come, aren't you? If you don't come, I am not going to (/I won't) come, either."
     },
     {
      "n": 11,
      "ko": "사고였지(, 그렇지)? 일부러 그러지 않았잖아. 너 그럴 의도 아니었잖아, 그치?",
      "en": "It was an accident, wasn't it? You didn't do it on purpose. You didn't mean to do that/it, did you?"
     },
     {
      "n": 12,
      "ko": "저거 위험해 보이지(, 그렇지)? 전혀 안전해 보이지 않아.",
      "en": "It/That looks dangerous, doesn't it? It doesn't look safe at all."
     },
     {
      "n": 13,
      "ko": "너 그거 있지(, 그치)?",
      "en": "You have it/that, don't you?"
     },
     {
      "n": 14,
      "ko": "나 이거 오늘 고치는 게 좋겠지?",
      "en": "I should fix it today, shouldn't I?"
     },
     {
      "n": 15,
      "ko": "3일 걸렸었지(, 그러지 않았니)?",
      "en": "It took 3 days, didn't it?"
     },
     {
      "n": 16,
      "ko": "너 요즘 바빴지, 그치?",
      "en": "You have been busy recently, haven't you?"
     },
     {
      "n": 17,
      "ko": "내가 아까 너한테 말했지(, 그치)?",
      "en": "I told you earlier, didn't I?"
     },
     {
      "n": 18,
      "ko": "나 일찍이지(, 그치)? 시간 많다.",
      "en": "I am early, aren't I? There is a lot of time. (/ I have a lot of time.)"
     },
     {
      "n": 19,
      "ko": "나랑 같이 갈거지(, 그렇지)? 너 와야 돼. 혼자 가기 싫단말야.",
      "en": "You are going to come/go with me, aren't you? (/ You will come/go with me, won't you?) You have to come. I don't want to go alone/by myself."
     },
     {
      "n": 20,
      "ko": "이거 살려고 했었지? 알고 있었어.",
      "en": "You were going to buy/get it/this, weren't you? I knew it/that."
     },
     {
      "n": 21,
      "ko": "너 깜빡했지(, 그렇지)? 그걸 어떻게 잊을 수 있어?",
      "en": "You forgot, didn't you? How can you forget (about) that/it?"
     },
     {
      "n": 22,
      "ko": "너 차에 대해 많이 알지(, 그치)? 도움이 좀 필요한데.",
      "en": "You know a lot about cars, don't you? I need (some) help."
     },
     {
      "n": 23,
      "ko": "우리 여기서 기다리자, 그럴래?",
      "en": "Let's wait here, shall we?"
     },
     {
      "n": 24,
      "ko": "문 좀 열어, 어? 나 좀 들여 보내 줘.",
      "en": "Open the door, will you? Let me in."
     },
     {
      "n": 25,
      "ko": "그 애 여기 있지(, 그치)? 어디 있어?",
      "en": "He/she is here, isn't he/she? Where is he/she?"
     },
     {
      "n": 26,
      "ko": "넌 이미 알고 있었잖아(, 그치)? 넌 항상 그래. 넌 내게 아무것도 말하지 않아. 그게 문제야.",
      "en": "You already knew (it/that), didn't you? You always do that/it. You don't tell me anything. That/It is the problem."
     },
     {
      "n": 27,
      "ko": "너라면 가겠지, 그치? 난 이번에 왜 가기 싫은지 모르겠어. 가야겠지(, 그렇겠지)?",
      "en": "You would go, wouldn't you? I don't know why I don't want to go this time. I have to go, don't I?"
     },
     {
      "n": 28,
      "ko": "차 많이 막혔지(, 그치)? 여기 오는데 얼마나 걸렸어?",
      "en": "There was a lot of traffic/a traffic jam, wasn't there? How long did it take to get/come here?"
     },
     {
      "n": 29,
      "ko": "너 이거 봤지(, 그렇지)? 이거 말 안되지(, 그렇지 않니)? 정말 불공평해.",
      "en": "You saw it/this, didn't you? (/ You have seen this/it, haven't you?) It doesn't make sense, does it? It's so/really unfair."
     },
     {
      "n": 30,
      "ko": "나 예쁘지, 응?",
      "en": "I am pretty/beautiful, aren't I?"
     },
     {
      "n": 31,
      "ko": "점심 먹었지(, 그치)? 점심으로 뭐 먹었어?",
      "en": "You had/ate lunch, didn't you? (/ You have had lunch, haven't you?) What did you have for lunch?"
     },
     {
      "n": 32,
      "ko": "우리 서둘러야 되지?",
      "en": "We have to hurry/rush, don't we?"
     },
     {
      "n": 33,
      "ko": "그거 증가하고 있지(, 그치)?",
      "en": "It/That is increasing, isn't it?"
     },
     {
      "n": 34,
      "ko": "가자, 응?",
      "en": "Let's go, shall we?"
     },
     {
      "n": 35,
      "ko": "우리 지금 가는 게 좋겠다(, 그렇지)?",
      "en": "We should go now, shouldn't we?"
     },
     {
      "n": 36,
      "ko": "너 그거 후회 되지(, 그치)? 하지만, 후회하지 않아도 돼. 넌 최선을 다했어. 모두 그걸 알아.",
      "en": "You regret it/that, don't you? But you don't have to regret it. You did your best. (/ You have done your best.) Everybody/Everyone knows (about) that/it."
     },
     {
      "n": 37,
      "ko": "이거 안 한 이유가 있지(, 그렇잖아)? 왜 안 했는지 말해줄래?",
      "en": "There is a reason you didn't do (/you haven't done) it/this, isn't there? (/ You have a reason you didn't do it, don't you?) Can you tell me why you didn't do it?"
     },
     {
      "n": 38,
      "ko": "내가 이겼지(, 그치)? 기분 너무 좋다.",
      "en": "I won, didn't I? I am (/feel/am feeling) so/very/really happy."
     },
     {
      "n": 39,
      "ko": "일하고 있었지(, 그렇지)? 나 그냥 인사하러 왔어. 이따 봐.",
      "en": "You were working, weren't you? I just came (here/by) to say hello. (/ I am just here to say hello.) See/Catch you later."
     },
     {
      "n": 40,
      "ko": "우리 또 곧 만날 거잖아요(, 그렇죠)? 잘 지내요.",
      "en": "We are going to meet again soon, aren't we? (/ We will meet again soon, won't we?) Take care (of yourself)."
     },
     {
      "n": 41,
      "ko": "우리 그거에 대해 뭔가 해야 되겠지(, 그렇지)? 점점 심각해 지는데.",
      "en": "We have to do something about it/that, don't we? It's getting (more) serious."
     },
     {
      "n": 42,
      "ko": "이거 갖고 싶었지(, 그치)?",
      "en": "You wanted to have/get it/this, didn't you? (/You've wanted to have it, haven't you?)"
     },
     {
      "n": 43,
      "ko": "멀지(, 그렇지)? 내 차를 가져 가는 게 좋을 것 같아.",
      "en": "It's far, isn't it? I think I should take my car."
     },
     {
      "n": 44,
      "ko": "우리 예전엔 거기 자주 갔었지(, 그렇지)? 우리 왜 거기 그만 가게 되었더라? 기억나니?",
      "en": "We used to go there often, didn't we? (/ We often used to go there, didn't we?) Why did we stop going there? Do (/Can) you remember?"
     },
     {
      "n": 45,
      "ko": "너라면 그냥 기다리겠지(, 그렇지)? 기다리기 정말 힘들어.",
      "en": "You would wait, wouldn't you? It's so/very/really hard/difficult to wait."
     },
     {
      "n": 46,
      "ko": "그만해, 어?",
      "en": "Stop it, will you?"
     },
     {
      "n": 47,
      "ko": "그 애가 이거 좋아할 것 같지(, 그렇지 않니)?",
      "en": "You think he/she will like it/this, don't you?"
     },
     {
      "n": 48,
      "ko": "나 늦었지(, 그렇지)? 미안해. 이런 일 다신 없을 거예요.",
      "en": "I'm late, aren't I? I'm sorry. It/This won't happen again."
     },
     {
      "n": 49,
      "ko": "내가 여기 있잖아, 어? 넌 혼자가 아니야.",
      "en": "I am here, aren't I? You are not alone."
     },
     {
      "n": 50,
      "ko": "다음주에 만나자, 응? 다음주에 전화할게.",
      "en": "Let's meet next week, shall we? I will give you a call (/call (you) ) next week."
     },
     {
      "n": 51,
      "ko": "저 이거 지금 안해도 되는거죠(, 그렇지요)? 지금은 시간이 없어요. 제가 할 수 있을 때, 할게요.",
      "en": "I don't have to do this/it now, do I? I don't have time (now). (/ There isn't time (now) ). When I can do it, I will (do it)."
     },
     {
      "n": 52,
      "ko": "사실이 아니지(, 그치)? 믿기 어렵다.",
      "en": "It's not true, is it? It's hard/difficult to believe."
     },
     {
      "n": 53,
      "ko": "너 어제 그거 못끝냈지, (그치)? 이해해. 너 어제 할거 많았잖아.",
      "en": "You couldn't finish it/that yesterday, could you? I understand. You had a lot of/(so) many things to do (yesterday). (/ There were a lot of (/so) many) things to do (yesterday) )."
     },
     {
      "n": 54,
      "ko": "아무말도 하지마, 알았지? 나한테 약속해야돼.",
      "en": "Don't say anything, will you? You have to promise me."
     },
     {
      "n": 55,
      "ko": "너 아직 그 애 안 만나봤지(, 그렇지)?",
      "en": "You haven't met him/her yet, have you?"
     },
     {
      "n": 56,
      "ko": "넌 아무한테도 말 안했지(, 그치)? 그앤 어떻게 알았지?",
      "en": "You haven't told anyone/anybody, have you? (/ You didn't tell anyone/anybody, did you?) How did he/she know?"
     },
     {
      "n": 57,
      "ko": "이거 지금 쓰는거 아니지요(, 그렇죠)?",
      "en": "You are not using it/this, are you?"
     },
     {
      "n": 58,
      "ko": "그거 상관없지(, 그치)?",
      "en": "It doesn't matter, does it?"
     },
     {
      "n": 59,
      "ko": "아무것도 없었지(, 그치)?",
      "en": "There wasn't anything (/There was nothing), was there?"
     },
     {
      "n": 60,
      "ko": "너 여기 온지 오래되지 않았지(, 그치)?",
      "en": "You haven't been here long/for a long time, have you?"
     },
     {
      "n": 61,
      "ko": "너 몸이 안 좋지(, 그치)? 몸 안좋아 보여.",
      "en": "You aren't well, are you? (/ You don't feel well, do you? / You are not feeling well, are you?) You don't look well."
     },
     {
      "n": 62,
      "ko": "넌 아직 모르는 구나(, 그렇지)?",
      "en": "You don't know yet, do you?"
     },
     {
      "n": 63,
      "ko": "시간 모자랐지(, 그치)?",
      "en": "There wasn't enough time, was there? (/ You didn't have enough time, did you?)"
     },
     {
      "n": 64,
      "ko": "아무한테도 말 안할거지(, 그렇지)?",
      "en": "You are not going to tell anyone/anybody, are you? (/ You won't tell anyone/anybody, will you?)"
     },
     {
      "n": 65,
      "ko": "그게 문제 아니었지(, 그치)? 뭐가 문제 였는지 궁금하다.",
      "en": "It wasn't a/the problem, was it? I wonder what the problem was."
     },
     {
      "n": 66,
      "ko": "문제 없지(, 그렇지)?",
      "en": "There wasn't a problem, was there? (/ You didn't have a problem, did you?)"
     },
     {
      "n": 67,
      "ko": "그거 크지 않아도 되는거지(, 그렇지)? 이게 맞을까?",
      "en": "It doesn't have to be big, does it? Will it/this fit?"
     },
     {
      "n": 68,
      "ko": "넌 오기 싫었지(, 그렇지)? 와줘서 고마워.",
      "en": "You didn't want to come, did you? Thank you for coming."
     },
     {
      "n": 69,
      "ko": "넌 안 오려고 했었지(, 그치)? 널 봐서 너무 좋았어.",
      "en": "You weren't going to come, were you? It was so/very/really nice/good to see you."
     },
     {
      "n": 70,
      "ko": "이거 오래 안 걸리겠지(, 그렇지)?",
      "en": "It won't take long, will it? (/ It's not going to take long, is it?)"
     },
     {
      "n": 71,
      "ko": "이거 너꺼 아니지(, 그렇지)? 이게 누구의 책인지 궁금하다.",
      "en": "It's not yours, is it? I wonder whose book it/this is."
     },
     {
      "n": 72,
      "ko": "넌 그거 어디있는지 모르지(, 그치)? 그게 어디 간건지 궁금하네.",
      "en": "You don't know where it/that is, do you? I wonder where it has gone (/where it went)."
     },
     {
      "n": 73,
      "ko": "우리 그 애한테 말 안 하는게 좋겠지(, 그치)? 그 애 기분 나빠할 걸.",
      "en": "We shouldn't tell him, should we? He will feel bad."
     },
     {
      "n": 74,
      "ko": "늦지마, 알았지?",
      "en": "Don't be late, will you?"
     },
     {
      "n": 75,
      "ko": "이런 일 다신 없을 거지(, 그치)?",
      "en": "It won't happen again, will it? (/ It's not going to happen again, is it?)"
     },
     {
      "n": 76,
      "ko": "넌 그거 별로였지(, 그치)?",
      "en": "You didn't like it, did you?"
     },
     {
      "n": 77,
      "ko": "그 애 골프 안 치지(, 그렇지)?",
      "en": "He/She doesn't play golf, does he/she?"
     },
     {
      "n": 78,
      "ko": "우리 이거 하면 안 되는 거지(, 그렇지)?",
      "en": "We can't do it/this, can we?"
     },
     {
      "n": 79,
      "ko": "나 지금 도움이 안 되는 거지(, 그치)? 내가 자리 비켜줄게.",
      "en": "I'm not helping, am I? I will get out of your way."
     },
     {
      "n": 80,
      "ko": "넌 그 애랑 안 어울릴 거지(, 그렇지)? 나한테 약속해 줄 수 있어?",
      "en": "You aren't going to hang out with him/her, are you? (/ You won't hang out with him/her, will you?) Can you promise me (that)?"
     },
     {
      "n": 81,
      "ko": "그거 나아지고 있지 않지(, 그렇지)? 그럴줄 알았어.",
      "en": "It's not getting better, is it? I thought so. (/ I knew it/that.)"
     },
     {
      "n": 82,
      "ko": "날 도와줄 시간 없지(, 그치)?",
      "en": "You don't have time to help me, do you? (/ There isn't time to help me, is there?)"
     },
     {
      "n": 83,
      "ko": "오래 안 걸리지(, 그렇지)? 나 10분 밖에 없는데.",
      "en": "It doesn't take long, does it? I only have 10 minutes. (/ I have only 10"
     },
     {
      "n": 84,
      "ko": "너 그거 안 잊어버렸지(, 그치)?",
      "en": "You didn't forget (about) it/that, did you?"
     },
     {
      "n": 85,
      "ko": "아직 배 안 고프지(, 그치)?",
      "en": "You are not hungry yet, are you?"
     },
     {
      "n": 86,
      "ko": "이거 안 될 것 같지(, 그치)? 이거 안 되면, 난 뭘 해야될까?",
      "en": "You don't think it will work, do you? If it doesn't work, what do I have to do?"
     },
     {
      "n": 87,
      "ko": "가지마, 응? 나랑 같이 있어줄래?",
      "en": "Don't go, will you? Can you stay with me?"
     },
     {
      "n": 88,
      "ko": "많이 나쁘진 않지(, 그렇지)?",
      "en": "It's not too/that bad, is it?"
     },
     {
      "n": 89,
      "ko": "사람 많이 없지(, 그치)?",
      "en": "There aren't a lot of (/many) people, are there?"
     },
     {
      "n": 90,
      "ko": "그 애 만나기 싫지(, 그렇지)? 나도 그 애 만나기 싫어.",
      "en": "You don't want to meet him/her, do you? (/You wouldn't like to meet him/her, would you?) I don't want to meet him/her, either."
     },
     {
      "n": 91,
      "ko": "이거 안 되지(, 그치)?",
      "en": "It isn't working, is it? (/ It doesn't work, does it?)"
     },
     {
      "n": 92,
      "ko": "내 이야기 하고 있던거 아니지, (그렇지)?",
      "en": "You weren't talking about me, were you?"
     },
     {
      "n": 93,
      "ko": "기억 안 나지(, 그렇지)?",
      "en": "You don't remember, do you? (/You can't remember, can you?)"
     },
     {
      "n": 94,
      "ko": "너 나한테 말 안 할려고 했었지(, 그치)?",
      "en": "You weren't going to tell me, were you?"
     },
     {
      "n": 95,
      "ko": "그렇게 생각하지 마, 응?",
      "en": "Don't think like that, will you?"
     },
     {
      "n": 96,
      "ko": "거기 아직 안 가봤지(, 그치)? 나라면 이번엔 거기로 가겠어.",
      "en": "You haven't been there yet, have you? I would go there this time."
     },
     {
      "n": 97,
      "ko": "내가 할 수 있는 게 (아무것도) 없지(, 그렇지)?",
      "en": "There isn't anything I can do, is there?"
     },
     {
      "n": 98,
      "ko": "돈 별로 안 들었지(, 그치)?",
      "en": "It didn't cost much (money), did it?"
     },
     {
      "n": 99,
      "ko": "지금 취소 안 되죠(, 그렇지요)?",
      "en": "I can't cancel it now, can I?"
     },
     {
      "n": 100,
      "ko": "너 나한테 화났던 거 아니지(, 그렇지)?",
      "en": "You weren't mad at/angry with me, were you?"
     }
    ]
   },
   {
    "u": 9,
    "title": "Unit 9",
    "items": [
     {
      "n": 1,
      "ko": "자고 있었어. 어젯밤에 늦게 잤어. 언제 왔어?",
      "en": "I have been sleeping. I went to bed/sleep late last night. When did you get here/come?"
     },
     {
      "n": 2,
      "ko": "나 영어 배운지 2년 됐어. 영어 공부하는 거 재미있어.",
      "en": "I have been learning English for 2 years. It's fun to study English."
     },
     {
      "n": 3,
      "ko": "우리 2005년부터 이 집에서 살았어. 예전엔 마포에 살았어, 여기 이사오기 전에.",
      "en": "We have been living in this house since 2005. We used to live in Mapo before we moved here."
     },
     {
      "n": 4,
      "ko": "나 여기서 일한지 4년 됐어. 벌써 4년 됐다. 시간이 빨리 가.",
      "en": "I have been working here for 4 years. It's already been 4 years. Time flies. (/Time is flying.)"
     },
     {
      "n": 5,
      "ko": "그 애 졸업한 후로 거기서 일했어.",
      "en": "Since he/she left school (/graduated), he/she has been working there."
     },
     {
      "n": 6,
      "ko": "나 2시부터 기다리고 있었어. 넌 어디 있었어?",
      "en": "I've been waiting since 2. Where were you?"
     },
     {
      "n": 7,
      "ko": "Pam은 아침 내내 자네.",
      "en": "Pam's been sleeping all morning."
     },
     {
      "n": 8,
      "ko": "어디 갔다 왔어요? Pam이 계속 너 찾았어.",
      "en": "Where have you been? Pam's been looking for you."
     },
     {
      "n": 9,
      "ko": "나 이거 찾던건데. 고마워. 어디서 찾았어?",
      "en": "I've been looking for this/it. Thank you. Where did you find it?"
     },
     {
      "n": 10,
      "ko": "하루종일 집 청소하고 있었어.",
      "en": "I've been cleaning the house all day."
     },
     {
      "n": 11,
      "ko": "피곤해. 차에 3시간이나 앉아있었어.",
      "en": "I'm tired. I've been sitting in the car for 3 hours."
     },
     {
      "n": 12,
      "ko": "다리 아프다. 오늘 하루 종일 걸었어.",
      "en": "My leg hurts/My legs hurt. I've been walking all day."
     },
     {
      "n": 13,
      "ko": "우리 오늘 공부 열심히 했어. (그거에 대해) 기분이 좋아.",
      "en": "We've been studying hard today. I feel (/am feeling) good about it/that."
     },
     {
      "n": 14,
      "ko": "그 애 요즘 일 많이 했지. 너무 바빴어.",
      "en": "He/She has been working hard recently. He/She has been busy."
     },
     {
      "n": 15,
      "ko": "Jim은 1시부터 지금까지 TV 보는 거야.",
      "en": "Jim's been watching TV since 1."
     },
     {
      "n": 16,
      "ko": "나 요즘 네 생각 많이 했어.",
      "en": "I've been thinking about you a lot recently."
     },
     {
      "n": 17,
      "ko": "우리 정말 열심히 했는데… 왜 그들은 우리를 뽑지 않았는지 모르겠어. 다음번엔 우리가 이길 거야.",
      "en": "We've been trying really/very/so hard. I don't know why they didn't choose us. We are going to (/will) win next time."
     },
     {
      "n": 18,
      "ko": "Tim은 영어 가르치지 6년 됐어. 훌륭한 선생님이야.",
      "en": "Tim's been teaching English for 6 years. He's a great teacher."
     },
     {
      "n": 19,
      "ko": "나 그거 사용한지 오래 됐지. 난 다른 건 못 쓰겠어.",
      "en": "I've been using it/that for a long time. I can't use anything else."
     },
     {
      "n": 20,
      "ko": "나 거기 다닌지 몇 달 됐어.",
      "en": "I've been going there for a few months."
     },
     {
      "n": 21,
      "ko": "저 사람 정말 오래 이야기 하네. 지루하다.",
      "en": "He/She has been talking for hours/a long time. It's boring."
     },
     {
      "n": 22,
      "ko": "나 집안 일 하고 있었어.",
      "en": "I've been doing the housework."
     },
     {
      "n": 23,
      "ko": "나 요새 운동 좀 했지.",
      "en": "I've been working out/exercising recently."
     },
     {
      "n": 24,
      "ko": "나 하루 종일 너한테 전화했었는데…",
      "en": "I've been calling you (/trying to call you) all day."
     },
     {
      "n": 25,
      "ko": "우리 네 얘기 하고 있었어.",
      "en": "We've been talking about you."
     },
     {
      "n": 26,
      "ko": "나 그거 생각하고 있었어. 근데 뭘 해야 할지 모르겠어.",
      "en": "I've been thinking about it/that. But I don't know what I have to do."
     },
     {
      "n": 27,
      "ko": "우리 지금은 뭔가 하고 있었어. 괜찮다면, 금방 다시 전화할게요.",
      "en": "We have been doing something now. If it's ok, I will call you back soon."
     },
     {
      "n": 28,
      "ko": "나 지금 2시간 째 요리하고 있어.",
      "en": "I've been cooking for 2 hours."
     },
     {
      "n": 29,
      "ko": "그 애가 계속 나 도와주고 있어. 그 애 너무 괜찮지(그렇지 않니)?",
      "en": "He/She has been helping me. He/She is so/very/really nice, isn't he/she?"
     },
     {
      "n": 30,
      "ko": "피곤하다. 운전을 3시간이나 했어. 너도 피곤하지(그치)?",
      "en": "I'm tired. I've been driving for 3 hours. You are tired too, aren't you?"
     },
     {
      "n": 31,
      "ko": "우리 영어 공부하고 있었어.",
      "en": "We've been studying English."
     },
     {
      "n": 32,
      "ko": "나 이 차 운전한지 오래 됐어. 새 차 사고 싶어.",
      "en": "I've been driving this car for years (/a long time). I want to (/I'd like to) buy/get a new car."
     },
     {
      "n": 33,
      "ko": "우리 이 노래만 계속 들었잖아. 질린다. 다른 거 듣고 싶어.",
      "en": "We've been listening to this song (for hours). I'm (getting) sick of (/tired of/sick and tired of) it. I want to (/I'd like to) listen to something else."
     },
     {
      "n": 34,
      "ko": "그 애 일자리 구하고 있었어. 요즘에 일자리 구하기 쉽지 않아.",
      "en": "He/She's been looking for work/a job. It isn't easy to get/find a job these days."
     },
     {
      "n": 35,
      "ko": "그 애 25살 때부터 담배 폈어. 끊기 힘들 거야.",
      "en": "Since he/she was 25 years old, he/she has been smoking. It is going to (/will) be hard/difficult to quit/stop."
     },
     {
      "n": 36,
      "ko": "나 어렸을 때부터 이거 해왔어. 쉬워.",
      "en": "Since I was little/a child/a kid, I've been doing it/this. It's easy."
     },
     {
      "n": 37,
      "ko": "나 너에 대해 궁금해 하고 있었는데. 널 봐서 너무 좋다. 어떻게 지냈어?",
      "en": "I've been wondering about you. It's so/very/really nice/good to see you. How have you been?"
     },
     {
      "n": 38,
      "ko": "내 흰 가방 봤어? 하루 종일 찾고 있는데. 어디에도 없어. (=어디에서도 찾을 수가 없어)",
      "en": "Have you seen my white bag? (/ Did you see my white bag?) I've been looking for it all day. I can't find it anywhere. (/ It's nowhere. / It isn't anywhere.)"
     },
     {
      "n": 39,
      "ko": "우리 오늘 쉬지 않고 일했어. 쉬어도 되는지 알고 싶어.",
      "en": "We've been working nonstop today. I want to (/I'd like to) know if we can take a break."
     },
     {
      "n": 40,
      "ko": "요즘엔 버스 타고 있어. 한 달전에 차 팔았어.",
      "en": "I've been taking a bus recently. I sold my/the car a month ago."
     },
     {
      "n": 41,
      "ko": "오랜만이야. 전화를 한다는 게…(그럴 의도였는데)",
      "en": "Long time no see. I've been meaning to call (you)."
     },
     {
      "n": 42,
      "ko": "미안. 저거 바꾼다는 게… 지금 할게.",
      "en": "I'm sorry. I've been meaning to change it/that. I will do it now."
     },
     {
      "n": 43,
      "ko": "내가 그걸 한다는 게… 그걸 할 기회가 없었네.",
      "en": "I've been meaning to do it/that. (But) there hasn't been (/wasn't) a chance to do that/it. (/ I haven't had (/didn't have) a chance to do that/it.)"
     },
     {
      "n": 44,
      "ko": "내가 저번주에 너한테 연락 하려고 했었는데, 미안해. 나 요즘 힘들어서…",
      "en": "I was going to contact/call you last week, (but) I'm sorry. I've been having a hard time."
     },
     {
      "n": 45,
      "ko": "넌 정말 잘 해왔어. 난 너가 정말 자랑스러워.",
      "en": "You have been doing really/so/very well. I'm so/very/really proud of you."
     },
     {
      "n": 46,
      "ko": "로맨틱 코메디 너무 많이 봤구나. 현실엔 그런 일 안 생겨.",
      "en": "You've been watching rom coms/romantic comedies a lot (/watching a lot of rom coms). It/That doesn't happen in real life."
     },
     {
      "n": 47,
      "ko": "누군지는 모르겠지만, 누군가가 계속 내 종이를 가져가고 있어. 너 누군지 모르지, (그치)?",
      "en": "I don't know who it is, but someone/somebody has been taking my paper. You don't know who it is, do you?"
     },
     {
      "n": 48,
      "ko": "비가 하루 종일 오네. 빗방울 소리가 난 좋아.",
      "en": "It's been raining all day. I love/like the sound of raindrops."
     },
     {
      "n": 49,
      "ko": "밤새도록 눈이 내렸어. 밖에 모든 게 다 하얘.",
      "en": "It's been snowing all night. Everything is white outside."
     },
     {
      "n": 50,
      "ko": "여기 화요일부터 눈이 내려.",
      "en": "It's been snowing since Tuesday."
     },
     {
      "n": 51,
      "ko": "아무것도 안 하고 있었어.",
      "en": "I haven't been doing anything."
     },
     {
      "n": 52,
      "ko": "그렇게 오래 기다리지 않았어요. 10분쯤 전에 도착했어요.",
      "en": "I haven't been waiting that long. I got here/arrived (about) 10 minutes ago."
     },
     {
      "n": 53,
      "ko": "우리 네 얘기 하고 있던 거 아니야.",
      "en": "We haven't been talking about you."
     },
     {
      "n": 54,
      "ko": "저 여기서 산지 그렇게 오래 되지 않았어요. 저번달에 여기로 이사했어.",
      "en": "I haven't been living here that long. I moved here last month."
     },
     {
      "n": 55,
      "ko": "그 애 거기서 일한지 오래 되지 않았어.",
      "en": "He hasn't been working there long/for a long time."
     },
     {
      "n": 56,
      "ko": "공부하고 있던 거 아니야. 책 읽고 있었어.",
      "en": "I haven't been studying. I've been reading a book."
     },
     {
      "n": 57,
      "ko": "그 애 영어 공부한지 오래 되지 않았어.",
      "en": "He/She hasn't been studying English long/for a long time."
     },
     {
      "n": 58,
      "ko": "우리 서로 이야기 안 한지 몇 일 됐어. 그 애 화나면, 말 안 해. 정말 짜증나.",
      "en": "We haven't been talking/speaking to each other for a few days. When he/she is angry/mad, he/she doesn't talk/speak. It's really/very/so annoying."
     },
     {
      "n": 59,
      "ko": "나 그 애 생각 안 한지 좀 됐네.",
      "en": "I haven't been thinking about him/her for a while."
     },
     {
      "n": 60,
      "ko": "별거 안 하고 있었어.",
      "en": "I haven't been doing much."
     },
     {
      "n": 61,
      "ko": "거기 안 다닌지 몇 일 됐어.",
      "en": "I haven't been going there for a few months."
     },
     {
      "n": 62,
      "ko": "안 자고 있었어. 명상하고 있었어.",
      "en": "I haven't been sleeping. I've been meditating."
     },
     {
      "n": 63,
      "ko": "요즘에 기분이 좀 안 좋았어. 계속 기분이 다운 되어 있네.",
      "en": "I haven't been feeling good recently. I've been feeling down."
     },
     {
      "n": 64,
      "ko": "요즘 잠을 계속 잘 못 잤어. 피곤하다.",
      "en": "I haven't been sleeping well recently. I am exhausted/tired."
     },
     {
      "n": 65,
      "ko": "우리 데이트한지 오래 되지 않았어. 우리 저번달에 처음 만났어. (그거) 한 달 됐네.",
      "en": "We haven't been dating long/for a long time. We first met last month. It's been a month."
     },
     {
      "n": 66,
      "ko": "저 여기서 머문지 그렇게 오래 되진 않았어요. 3일 됐어요. 한국에 다음주에 돌아 갈 거예요.",
      "en": "I haven't been staying here that long. It's been 3 days. I am going to go back to Korea next week."
     },
     {
      "n": 67,
      "ko": "우리 이 노래 안 들은지 오래됐어. 이게 예전에 우리가 가장 좋아하는 노래였는데…",
      "en": "We haven't been listening to this song for a long time/long. It/This used to be our favorite song."
     },
     {
      "n": 68,
      "ko": "나 술 안 마신지 몇 일 되었어. 술 끊기로 했어.",
      "en": "I haven't been drinking for a few days. I (have) decided to quit/stop drinking."
     },
     {
      "n": 69,
      "ko": "나 이거 사용 안 한지 좀 됐어. 이거 되는지 모르겠다.",
      "en": "I haven't been using it/this for a while. I don't know if/whether it works (/is working)."
     },
     {
      "n": 70,
      "ko": "운동 안 한지 몇 달 되었어. 다음달 부터 헬스장에 갈 거야.",
      "en": "I haven't been working out/exercising for a few months. I am going to go (back) to the gym from next month."
     },
     {
      "n": 71,
      "ko": "뭐 하고 있었어?",
      "en": "What have you been doing?"
     },
     {
      "n": 72,
      "ko": "여기서 일한지 얼마나 오래 됐어?",
      "en": "How long have you been working here?"
     },
     {
      "n": 73,
      "ko": "영어 공부한지 얼마나 오래 됐어? 영어 잘한다.",
      "en": "How long have you been studying English? You speak English well (/You speak good English)."
     },
     {
      "n": 74,
      "ko": "무슨 생각하고 있었어? 내 생각 하고 있었어?",
      "en": "What have you been thinking about? Have you been thinking about me?"
     },
     {
      "n": 75,
      "ko": "여기서 산지 얼마나 오래 되었어? 언제 여기로 이사왔어?",
      "en": "How long have you been living here? When did you move here?"
     },
     {
      "n": 76,
      "ko": "늦어서 미안해요. 오래 기다렸어요?",
      "en": "I'm sorry I'm late. Have you been waiting long/for a long time?"
     },
     {
      "n": 77,
      "ko": "얼마나 오래 기다렸어? 언제 왔어?",
      "en": "How long have you been waiting? When did you get here/come?"
     },
     {
      "n": 78,
      "ko": "하루 종일 뭐했어요?",
      "en": "What have you been doing all day?"
     },
     {
      "n": 79,
      "ko": "이거 쓴지 얼마나 오래 됐어?",
      "en": "How long have you been using it/this?"
     },
     {
      "n": 80,
      "ko": "거기 다닌지 오래 됐어? 얼마나 오래 됐어?",
      "en": "Have you been going there long/for a long time? How long has it been?"
     },
     {
      "n": 81,
      "ko": "내 얘기 하고 있었어? 무슨 얘기 하고 있었는지 알고싶어.",
      "en": "Have you been talking about me? I want to (/I'd like to) know what you have been talking about."
     },
     {
      "n": 82,
      "ko": "영화 보고 있었니? 좋은 영화야?",
      "en": "Have you been watching a movie? Is it a good movie?"
     },
     {
      "n": 83,
      "ko": "이 차 낡아 보여. 이차 운전한지 오래됐어?",
      "en": "This car looks old. Have you been driving this car long/for a long time?"
     },
     {
      "n": 84,
      "ko": "자고 있었어? 졸린 목소리 인데.",
      "en": "Have you been sleeping? You sound sleepy."
     },
     {
      "n": 85,
      "ko": "그애랑 같이 일한지 얼마나 됐어? 너 그애 잘 알아?",
      "en": "How long have you been working with him? Do you know him well?"
     },
     {
      "n": 86,
      "ko": "뭐 만들고 있었어?",
      "en": "What have you been making?"
     },
     {
      "n": 87,
      "ko": "이거 한지 얼마나 오래 됐어? 너 이거 잘한다!",
      "en": "How long have you been doing it/this? You do it/this well. (/ You are doing it/this well.)"
     },
     {
      "n": 88,
      "ko": "Tim은 영어 가르친지 얼마나 됐어? 그 애 경험 많아?",
      "en": "How long has Tim been teaching English? Does he have a lot of experience?"
     },
     {
      "n": 89,
      "ko": "뭔가 하고 있었니? 내가 방해했어? 너가 원하면, 나중에 다시 올 수 있어.",
      "en": "Have you been doing something? Did I disturb/interrupt (you)? If you want, I can come back later."
     },
     {
      "n": 90,
      "ko": "제가 잘 해오고 있는건가요?",
      "en": "Have I been doing well?"
     },
     {
      "n": 91,
      "ko": "너 눈 빨개. 울었어? 무슨 일이야?",
      "en": "Your eyes are red (/Your eye is red). Have you been crying? What's up?"
     },
     {
      "n": 92,
      "ko": "술 마셨어? 괜찮아?",
      "en": "Have you been drinking? Are you ok?"
     },
     {
      "n": 93,
      "ko": "너 숨차하네. 뛰었어?",
      "en": "You are out of breath. Have you been running?"
     },
     {
      "n": 94,
      "ko": "너 땀 흘리네. 운동했어?",
      "en": "You are sweating. Have you been working out/exercising?"
     },
     {
      "n": 95,
      "ko": "나 기다린거야? 나한테 할말 (뭔가) 있니?",
      "en": "Have you been waiting for me? Is there something you want to tell me? / Do you have something to tell me?"
     },
     {
      "n": 96,
      "ko": "노래 불렀니?",
      "en": "Have you been singing?"
     },
     {
      "n": 97,
      "ko": "내가 널 마지막으로 본 게 (=본 이후로) 오래됐다. 뭐하고 지냈어?",
      "en": "It's been a long time (/a while) since I last saw you. What have you been doing?"
     },
     {
      "n": 98,
      "ko": "내 핸드폰 썼니? 내 핸드폰 어떻게 잠금 해제 했어?",
      "en": "Have you been using my (cell/mobile) phone? How did you unlock my phone?"
     },
     {
      "n": 99,
      "ko": "내 이메일 읽었어? 사생활 침해야.",
      "en": "Have you been reading my email(s)? It's an invasion of privacy."
     },
     {
      "n": 100,
      "ko": "비 왔나?",
      "en": "Has it been raining?"
     }
    ]
   },
   {
    "u": 10,
    "title": "Unit 10",
    "items": [
     {
      "n": 1,
      "ko": "제가 여기 앉아도 괜찮겠어요? 앉을데가 (아무데도) 없네요.",
      "en": "Do you mind if I sit here? There isn't anywhere to sit. (/ There is nowhere to sit.)"
     },
     {
      "n": 2,
      "ko": "이거 가져가도 괜찮겠어요?",
      "en": "Do you mind if I take it/this?"
     },
     {
      "n": 3,
      "ko": "제가 그 애한테 말해도 괜찮겠어요? 그 애도 알아야 해요.",
      "en": "Do you mind if I tell him/her? He/She has to know, too."
     },
     {
      "n": 4,
      "ko": "제가 그거 봐도 될까요? 제 눈으로 직접 봐야겠어요.",
      "en": "Do you mind if I see (/look at/have a look at/take a look at) it/that? I have to see it with my own (two) eyes."
     },
     {
      "n": 5,
      "ko": "개인적인 질문 하나 해도 괜찮을까요? 제가 오랫동안 이 질문을 한다는 게… 제 질문을 할 좋은 기회예요.",
      "en": "Do you mind if I ask a personal question? I've been meaning to ask this question. It is a good chance to ask my question."
     },
     {
      "n": 6,
      "ko": "이거 좀 열어 놔도 괜찮겠어요?",
      "en": "Do you mind if I leave it open (for a while)?"
     },
     {
      "n": 7,
      "ko": "이따가 제가 다시 전화해도 괜찮겠어요? 제가 지금 뭔가 (하는) 중이라서요.",
      "en": "Do you mind if I call you back later? I'm in the middle of something (now)."
     },
     {
      "n": 8,
      "ko": "스케줄 재조정해도 괜찮겠어요?",
      "en": "Do you mind if I reschedule?"
     },
     {
      "n": 9,
      "ko": "이거 내일 돌려줘도 괜찮겠어요?",
      "en": "Do you mind if I give it back (to you)/ return it tomorrow?"
     },
     {
      "n": 10,
      "ko": "내일 알려드려도 괜찮을까요? 아직 결정을 안 했어요.",
      "en": "Do you mind if I let you know tomorrow? I haven't decided (it) yet."
     },
     {
      "n": 11,
      "ko": "제가 5분 있다가 다시 와도 될까요? 금방 돌아올게요.",
      "en": "Do you mind if I come back in 5 minutes? I'll be/come back soon."
     },
     {
      "n": 12,
      "ko": "이걸로 골라도 괜찮을까요?",
      "en": "Do you mind if I choose/pick this/it?"
     },
     {
      "n": 13,
      "ko": "제가 이거 열어 봐도 될까요? 이 안에 뭐가 있는지 알고싶어요.",
      "en": "Do you mind if I open it/this? I want to (/I'd like to) know what is in it."
     },
     {
      "n": 14,
      "ko": "제가 이걸 저기에 놓아도 괜찮을까요?",
      "en": "Do you mind if I leave/put it/this there?"
     },
     {
      "n": 15,
      "ko": "제가 같이 해도(합석) 될까요?",
      "en": "Do you mind if I join (you)?"
     },
     {
      "n": 16,
      "ko": "내가 너랑 같이 가도 괜찮을까?",
      "en": "Do you mind if I go/come with you?"
     },
     {
      "n": 17,
      "ko": "제가 지금 가도 될까요? 괜찮지요(, 그렇죠)?",
      "en": "Do you mind if I go/leave now? It's ok, isn't it?/You don't mind, do you?"
     },
     {
      "n": 18,
      "ko": "제가 이거 가지고 있어도 괜찮을까요? 나중에 필요할지도 몰라서요.",
      "en": "Do you mind if I keep it/this? I might/may need it later."
     },
     {
      "n": 19,
      "ko": "너한테 내일 갚아도 될까?",
      "en": "Do you mind if I pay you back tomorrow?"
     },
     {
      "n": 20,
      "ko": "이거 다시 해도 괜찮을까요?",
      "en": "Do you mind if I redo it/this?"
     },
     {
      "n": 21,
      "ko": "제가 가족하고 먼저 상의해봐도 괜찮을까요? 가족하고 상의한 후에, 결정하고 싶어요.",
      "en": "Do you mind if I talk/speak to my family first? After I talk/speak to my family, I want to (/I'd like to) decide."
     },
     {
      "n": 22,
      "ko": "제가 생각해봐도 괜찮겠어요? 지금 당장은 결정 못 하겠어요. 생각할 시간이 필요해요.",
      "en": "Do you mind if I think about it? I can't decide (it) right now. I need time to think (about it)."
     },
     {
      "n": 23,
      "ko": "제가 얘랑 잠깐만 얘기해도 괜찮을까요? 오래 안 걸릴 거예요.",
      "en": "Do you mind if I talk/speak to him/her for a minute? It isn't going to (/won't) be/take long."
     },
     {
      "n": 24,
      "ko": "제가 잠깐만 누워도 괜찮을까요? 어지러워요.",
      "en": "Do you mind if I lie down for a minute? I am (/feel/am feeling) dizzy."
     },
     {
      "n": 25,
      "ko": "이거 집에 가져가도 괜찮을까요?",
      "en": "Do you mind if I take it/this home?"
     },
     {
      "n": 26,
      "ko": "제가 잠깐 한국말 좀 해도 괜찮을까요? 제 친구가 영어를 안 해서요. 얘한테 이걸 설명해주고 싶어요.",
      "en": "Do you mind if I speak Korean for a minute? My friend doesn't speak English. I want to/I'd like to explain it/this to him/her."
     },
     {
      "n": 27,
      "ko": "한 모금 마셔도 괜찮을까요?",
      "en": "Do you mind if I take/have a sip?"
     },
     {
      "n": 28,
      "ko": "이따가 이거 픽업하러 다시 와도 괜찮을까요?",
      "en": "Do you mind if I pick this/it up later (/come back later to pick it up)?"
     },
     {
      "n": 29,
      "ko": "나 이 샌드위치 먹어도 괜찮을까요? 하루종일 아무것도 안 먹었어. 좀 먹을래요?",
      "en": "Do you mind if I have/eat this sandwich? I haven't eaten/had anything all day. Do you want to (/would you like to) have/eat some?"
     },
     {
      "n": 30,
      "ko": "이 전화 좀 받아도 괜찮을까요? 이 전화 기다리고 있었어요.",
      "en": "Do you mind if I take this call/answer this? I've been waiting for this (phone) call."
     },
     {
      "n": 31,
      "ko": "너의 전화 좀 써도 괜찮을까요? 제 전화가 죽었어요.",
      "en": "Would you mind if I used your phone? My phone is dead."
     },
     {
      "n": 32,
      "ko": "제가 오늘 5분 일찍 나가도 괜찮을까요?",
      "en": "Would you mind if I left 5 minutes early today?"
     },
     {
      "n": 33,
      "ko": "제가 뭔가 말해도 될까요?",
      "en": "Would you mind if I said something?"
     },
     {
      "n": 34,
      "ko": "한 번 둘러봐도 될까요?",
      "en": "Would you mind if I took a look around (/looked around)?"
     },
     {
      "n": 35,
      "ko": "이 의자 가져가도 괜찮으시겠어요? 이거 쓰는 건가요?",
      "en": "Would you mind if I took this chair? Are you using it/this?"
     },
     {
      "n": 36,
      "ko": "그거 내일 찾으러 가도 괜찮을까요? 오늘은 제가 시간이 없어요.",
      "en": "Would you mind if I picked it/that up tomorrow? I don't have time today."
     },
     {
      "n": 37,
      "ko": "그거 내일 모레 가져다 드려도 괜찮을까요?",
      "en": "Would you mind if I dropped it/that off the day after tomorrow?"
     },
     {
      "n": 38,
      "ko": "제가 조금 늦게 와도 괜찮을까요? 조금 늦을지도 몰라서요.",
      "en": "Would you mind if I came a (little) bit late? I might/may be a (little) bit (/a little) late."
     },
     {
      "n": 39,
      "ko": "이거 맛 봐도 될까요? 맛있어 보여요. 냄새도 맛있어요.",
      "en": "Would you mind if I tasted it/this? It looks delicious/yummy/yum. It smells delicious/yummy, too."
     },
     {
      "n": 40,
      "ko": "제가 그걸 적어도 괜찮을까요?",
      "en": "Would you mind if I wrote it/that (down)?"
     },
     {
      "n": 41,
      "ko": "이거 해봐도 괜찮을까요?",
      "en": "Would you mind if I tried it/this?"
     },
     {
      "n": 42,
      "ko": "이거 복사 좀 해도 괜찮을까요?",
      "en": "Would you mind if I copied it/this?"
     },
     {
      "n": 43,
      "ko": "이거 나중에 해도 괜찮을까요? 지금은 제가 시간이 없어서요. 제가 할 수 있는대로, 할게요.",
      "en": "Would you mind if I did it later? I don't have time now. As soon as I can, I will (do it)."
     },
     {
      "n": 44,
      "ko": "제가 이거 켜 놔도 괜찮을까요?",
      "en": "Would you mind if I left it/this on?"
     },
     {
      "n": 45,
      "ko": "천천히 해도 될까요? 서두르고 싶지 않아요.",
      "en": "Would you mind if I took my time? I don't want to (/wouldn't like to) hurry/rush."
     },
     {
      "n": 46,
      "ko": "제가 이거 섞어도 괜찮을까요?",
      "en": "Would you mind if I mixed it/this?"
     },
     {
      "n": 47,
      "ko": "이거 닫아도 괜찮을까요?",
      "en": "Would you mind if I closed/shut this/it?"
     },
     {
      "n": 48,
      "ko": "제 친구를 초대해도 괜찮을까요?",
      "en": "Would you mind if I invited my friend?"
     },
     {
      "n": 49,
      "ko": "저희 이거에 대해선 나중에 논의해도 괜찮을까요?",
      "en": "Would you mind if we talked about (/discussed) it/this later?"
     },
     {
      "n": 50,
      "ko": "제가 이 사진 올려도 괜찮으시겠어요?",
      "en": "Would you mind if I uploaded/posted this picture/photo?"
     },
     {
      "n": 51,
      "ko": "그거 다시 확인해줄래요?",
      "en": "Do you mind checking it/that again (/rechecking it/that)?"
     },
     {
      "n": 52,
      "ko": "이거 해주실 수 있으세요?",
      "en": "Do you mind doing it/this?"
     },
     {
      "n": 53,
      "ko": "제 아이패드에 문제가 있는데요, 좀 봐주실 수 있어요?",
      "en": "There is a problem with my iPad. (/ I have a problem with my iPad.) Do you mind having (/taking) a look at it?"
     },
     {
      "n": 54,
      "ko": "차에 문제가 있는데요, 도와줄래요?",
      "en": "There is a problem with my car. (/ I have a problem with my car.) Do you mind helping (me)?"
     },
     {
      "n": 55,
      "ko": "저한테 보여주실래요?",
      "en": "Do you mind showing me?"
     },
     {
      "n": 56,
      "ko": "기다려 줄래요? 금방 돌아올게요.",
      "en": "Do you mind waiting? I'll be/come back soon."
     },
     {
      "n": 57,
      "ko": "거기 가는 길에 날 데리러 와줄 수 있으세요?",
      "en": "Do you mind picking me up on the/your way there?"
     },
     {
      "n": 58,
      "ko": "제 가방좀 잠시 봐주실 수 있으세요?",
      "en": "Do you mind watching my bag for a minute?"
     },
     {
      "n": 59,
      "ko": "요리 법을 나눠 주실 수 있어요?",
      "en": "Do you mind sharing your/the recipe?"
     },
     {
      "n": 60,
      "ko": "어제 거기에 스카프 두고왔어요. 찾아 봐줄 수 있어요?",
      "en": "I left my scarf there. Do you mind looking for it?"
     },
     {
      "n": 61,
      "ko": "그것 좀 줄여 줄 수 있으세요?",
      "en": "Do you mind turning it down a (little) bit (/a little)?"
     },
     {
      "n": 62,
      "ko": "이거 반으로 잘라 줄 수 있으시겠어요?",
      "en": "Do you mind cutting it/this in half?"
     },
     {
      "n": 63,
      "ko": "다음번엔 오시기 전에 먼저 전화 해줄 수 있어요?",
      "en": "Do you mind calling (me/us) first before you come next time?"
     },
     {
      "n": 64,
      "ko": "이거 왜 아직 안 한건지 나한테 말해 줄 수 있을까요?",
      "en": "Do you mind telling me why you haven't done it/this yet?"
     },
     {
      "n": 65,
      "ko": "그거 닫아 놔 줄 수 있어요?",
      "en": "Do you mind leaving it/that closed?"
     },
     {
      "n": 66,
      "ko": "저 이것 좀 도와주실 수 있을까요?",
      "en": "Do you mind helping me with it/this?"
     },
     {
      "n": 67,
      "ko": "여기 잠깐만 멈춰주실 수 있을까요?",
      "en": "Do you mind stopping here for a minute?"
     },
     {
      "n": 68,
      "ko": "그걸 제게 설명해 주실 수 있으시겠어요?",
      "en": "Do you mind explaining it/that to me?"
     },
     {
      "n": 69,
      "ko": "저것 좀 받아줄 수 있어요?",
      "en": "Do you mind getting that/it?"
     },
     {
      "n": 70,
      "ko": "대답해 줄 수 있어요?",
      "en": "Do you mind answering (my question)?"
     },
     {
      "n": 71,
      "ko": "이거 프린트 좀 해주실 수 있을까요?",
      "en": "Would you mind printing it/this (out)?"
     },
     {
      "n": 72,
      "ko": "이걸 먼저 해줄 수 있을까요?",
      "en": "Would you mind doing this/it first? (/Would you mind working on this first?)"
     },
     {
      "n": 73,
      "ko": "그것 좀 꺼줄래요?",
      "en": "Would you mind turning/switching it/that off?"
     },
     {
      "n": 74,
      "ko": "제게 리모콘 좀 건네줄래요?",
      "en": "Would you mind handing me the remote (control)?"
     },
     {
      "n": 75,
      "ko": "너의 짐을 지금 싸줄래요? 우리 내일 떠날거잖아요. 지금 짐 싸는 게 좋을 것 같아요.",
      "en": "Would you mind packing your bag now? We are going to leave tomorrow. I think you should pack (your bag) now."
     },
     {
      "n": 76,
      "ko": "짐 방에서 풀어줄래요?",
      "en": "Would you mind unpacking your bag in your/the room?"
     },
     {
      "n": 77,
      "ko": "짐 싣는 것 좀 도와줄 수 있어요?",
      "en": "Would you mind helping me (to) load?"
     },
     {
      "n": 78,
      "ko": "짐 내리는 것 좀 도와줄 수 있어요?",
      "en": "Would you mind helping me (to) unload?"
     },
     {
      "n": 79,
      "ko": "이것 좀 잡고 있어줄래요?",
      "en": "Would you mind holding it/this?"
     },
     {
      "n": 80,
      "ko": "조금만 천천히 가줄래요?",
      "en": "Would you mind slowing down?"
     },
     {
      "n": 81,
      "ko": "그것 좀 닦아 줄 수 있으세요?",
      "en": "Would you mind wiping it/that?"
     },
     {
      "n": 82,
      "ko": "차 좀 빼줄 수 있을까요?",
      "en": "Would you mind moving your car?"
     },
     {
      "n": 83,
      "ko": "제게 시간을 더 주실래요?",
      "en": "Would you mind giving me more time?"
     },
     {
      "n": 84,
      "ko": "더 가까이 와줄래요?",
      "en": "Would you mind coming closer?"
     },
     {
      "n": 85,
      "ko": "눈 감아 줄 수 있어요?",
      "en": "Would you mind closing your eyes?"
     },
     {
      "n": 86,
      "ko": "내 이마 좀 만져봐 줄래요? (저) 열 있어요?",
      "en": "Would you mind feeling my forehead? Do I have a fever?"
     },
     {
      "n": 87,
      "ko": "그 얼룩 좀 지워줄 수 있을까요?",
      "en": "Would you mind removing the stain (/getting rid of the stain)?"
     },
     {
      "n": 88,
      "ko": "제 옆에 앉아 줄래요? 지금은 혼자이고 싶지 않아.",
      "en": "Would you mind sitting next to me? I don't want to (/wouldn't like to) be alone now."
     },
     {
      "n": 89,
      "ko": "저녁 거의 다 되었어. 숟가락 놓아줄래요?",
      "en": "Dinner's almost/nearly ready. Would you mind setting the table?"
     },
     {
      "n": 90,
      "ko": "그것 좀 여기에 적어주실 수 있을까요? 그게 무슨 뜻인지 모르겠어요.",
      "en": "Would you mind writing it/that (down) here? I don't know what that/it means."
     },
     {
      "n": 91,
      "ko": "난 기다리는 거 괜찮아. 천천히 해요.",
      "en": "I don't mind waiting. Take your time."
     },
     {
      "n": 92,
      "ko": "여기 서있는 거 괜찮아요. 전 걱정하지 마세요.",
      "en": "I don't mind standing here. Don't worry about me."
     },
     {
      "n": 93,
      "ko": "전 혼자 가는 것 괜찮아요. 같이 가지 않아도 돼요.",
      "en": "I don't mind going alone. You don't have to come along."
     },
     {
      "n": 94,
      "ko": "여기서 먹어도 괜찮아. 너가 여기서 먹고 싶으면, 우리 그래도 돼.",
      "en": "I don't mind eating here. If you want to eat here, we can (do that)."
     },
     {
      "n": 95,
      "ko": "전 여기 앉아도 상관없어요.",
      "en": "I don't mind sitting here."
     },
     {
      "n": 96,
      "ko": "전 그 애 돕는 거 괜찮아요. 그 앤 우리의 도움이 필요하잖아요.",
      "en": "I don't mind helping him/her. He/She needs our help."
     },
     {
      "n": 97,
      "ko": "이거 하는 거 전 상관없어요. 이거 하는 거 좋아해요. 돕는 게 기뻐요.",
      "en": "I don't mind doing this/it. I like doing it/this. I'm glad/happy to help."
     },
     {
      "n": 98,
      "ko": "너가 지금 운전하고 싶지 않으면, 내가 운전해도 상관없어.",
      "en": "If you don't want to drive now, I don't mind driving."
     },
     {
      "n": 99,
      "ko": "나 여기 있어도 상관없어. 하지만, 너가 다른 곳에 가고 싶다면, 그래도 돼.",
      "en": "I don't mind staying/being here. But, if you want to (/you'd like to) go somewhere else, we can (do that)."
     },
     {
      "n": 100,
      "ko": "난 소파에서 자도 괜찮아. 내가 여기 있게 해줘서 고마워.",
      "en": "I don't mind sleeping on the sofa/couch. Thanks for letting me stay here."
     }
    ]
   }
  ]
 }
];
