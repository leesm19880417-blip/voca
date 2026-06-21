// 영어단어의 혁신 - 소통 영단어편 (4편: 상황/감각/일상/여가 표현)
// 카테고리 -> 테마(대형은 30개씩 분할) -> 표현(ko/en + 예문). 책 본문 추출.
const COMM = [
 {
  "cat": "상황표현",
  "icon": "💬",
  "color": "#3b82f6",
  "desc": "특정 상황을 묘사하는 활용 높은 표현",
  "themes": [
   {
    "theme": "건강 Health (1)",
    "items": [
     {
      "ko": "감기에 걸리다",
      "en": "have a cold",
      "ex": [
       {
        "ko": "감기에 살짝 걸렸어",
        "en": "have a little cold"
       },
       {
        "ko": "결코 감기에 걸리지 않아",
        "en": "never have a cold"
       },
       {
        "ko": "여전히 감기에 걸렸어",
        "en": "still have a cold"
       }
      ]
     },
     {
      "ko": "두통이 있다",
      "en": "have a headache",
      "ex": [
       {
        "ko": "심한 두통이 있어",
        "en": "have a bad headache"
       },
       {
        "ko": "지독한 두통이 있어",
        "en": "have a terrible headache"
       },
       {
        "ko": "약간의 두통이 있어",
        "en": "have a slight headache"
       }
      ]
     },
     {
      "ko": "배가 아프다",
      "en": "have a stomachache",
      "ex": [
       {
        "ko": "여전히 배가 아파",
        "en": "still have a stomachache"
       },
       {
        "ko": "결코 배가 아프지 않아",
        "en": "never have a stomachache"
       },
       {
        "ko": "항상 배가 아파",
        "en": "always have a stomachache"
       }
      ]
     },
     {
      "ko": "열이 있다",
      "en": "have a fever",
      "ex": [
       {
        "ko": "자주 열이 나",
        "en": "often have a fever"
       },
       {
        "ko": "내일 열이 날 거 같아",
        "en": "might have a fever tomorrow"
       },
       {
        "ko": "열이 없어",
        "en": "have no fever"
       }
      ]
     },
     {
      "ko": "병에 걸리다",
      "en": "have a disease",
      "ex": [
       {
        "ko": "심각한 병에 걸렸어",
        "en": "have a serious disease"
       },
       {
        "ko": "병에 안 걸렸어",
        "en": "have no disease"
       },
       {
        "ko": "병에 걸릴 것 같아",
        "en": "might have a disease"
       }
      ]
     },
     {
      "ko": "감기에 걸렸었다",
      "en": "had a cold",
      "ex": [
       {
        "ko": "심한 감기에 걸렸었어",
        "en": "had a terrible cold"
       },
       {
        "ko": "흔한 감기에 걸렸었어",
        "en": "had a common cold"
       },
       {
        "ko": "지독한 감기에 걸렸었어",
        "en": "had a bad cold"
       }
      ]
     },
     {
      "ko": "두통이 있었다",
      "en": "had a headache",
      "ex": [
       {
        "ko": "어제 두통이 있었어",
        "en": "had a headache yesterday"
       },
       {
        "ko": "항상 두통이 있었어",
        "en": "always had a headache"
       },
       {
        "ko": "심각한 두통이 있었어",
        "en": "had a serious headache"
       }
      ]
     },
     {
      "ko": "배가 아팠다",
      "en": "had a stomachache",
      "ex": [
       {
        "ko": "배가 심하게 아팠어",
        "en": "had a bad stomachache"
       },
       {
        "ko": "심각한 복통이 있었어",
        "en": "had a terrible stomachache"
       },
       {
        "ko": "지독한 복통이 있었어",
        "en": "had a serious stomachache"
       }
      ]
     },
     {
      "ko": "열이 있었다",
      "en": "had a fever",
      "ex": [
       {
        "ko": "고열에 시달렸었어",
        "en": "had a high fever"
       },
       {
        "ko": "열이 조금 났었어",
        "en": "had a slight fever"
       },
       {
        "ko": "열이 없었어",
        "en": "had no fever"
       }
      ]
     },
     {
      "ko": "병에 걸렸었다",
      "en": "had a disease",
      "ex": [
       {
        "ko": "지독한 병에 걸렸었어",
        "en": "had a serious disease"
       },
       {
        "ko": "작년에 병에 걸렸었어",
        "en": "had a disease last year"
       },
       {
        "ko": "그녀는 병에 걸렸었어.",
        "en": "She had a disease."
       }
      ]
     },
     {
      "ko": "부상이 있다",
      "en": "have an injury",
      "ex": [
       {
        "ko": "부상이 있을 거야",
        "en": "will have an injury"
       },
       {
        "ko": "지금 부상이 있어",
        "en": "have an injury now"
       },
       {
        "ko": "부상이 없어",
        "en": "don't have an injury"
       }
      ]
     },
     {
      "ko": "시력이 좋다",
      "en": "have good eyesight",
      "ex": [
       {
        "ko": "그녀는 시력이 좋아.",
        "en": "She has good eyesight."
       },
       {
        "ko": "걔네들은 시력이 좋아.",
        "en": "They have good eyesight."
       },
       {
        "ko": "우리 부모님은 시력이 좋아.",
        "en": "My parents have good eyesight."
       }
      ]
     },
     {
      "ko": "콧물을 흘리다",
      "en": "have a runny nose",
      "ex": [
       {
        "ko": "하루 종일 콧물 나",
        "en": "have a runny nose all day long"
       },
       {
        "ko": "얼마 동안 콧물 나",
        "en": "have a runny nose for a while"
       },
       {
        "ko": "다시 콧물 나",
        "en": "have a runny nose again"
       }
      ]
     },
     {
      "ko": "시력이 나쁘다",
      "en": "have poor eyesight",
      "ex": [
       {
        "ko": "나 시력이 나빠.",
        "en": "I have poor eyesight."
       },
       {
        "ko": "그녀는 시력이 나빠.",
        "en": "She has poor eyesight."
       },
       {
        "ko": "걔는 시력이 나빠.",
        "en": "He has poor eyesight."
       }
      ]
     },
     {
      "ko": "목이 아프다",
      "en": "have a sore throat",
      "ex": [
       {
        "ko": "나 오늘 목 아파.",
        "en": "I have a sore throat today."
       },
       {
        "ko": "걔는 오늘 목 아파.",
        "en": "He has a sore throat today."
       },
       {
        "ko": "그녀는 목이 심하게 아파.",
        "en": "She has a terrible sore throat."
       }
      ]
     },
     {
      "ko": "부상이 있었다",
      "en": "had an injury",
      "ex": [
       {
        "ko": "팔 부상이 있었어",
        "en": "had an arm injury"
       },
       {
        "ko": "작년에 부상이 있었어",
        "en": "had an injury last year"
       },
       {
        "ko": "무릎 부상이 있었어",
        "en": "had a knee injury"
       }
      ]
     },
     {
      "ko": "시력이 좋았다",
      "en": "had good eyesight",
      "ex": [
       {
        "ko": "한쪽 시력이 좋았어",
        "en": "had good eyesight in one eye"
       },
       {
        "ko": "양쪽 시력이 좋았어",
        "en": "had good eyesight in both eyes"
       },
       {
        "ko": "걔는 시력이 좋았어.",
        "en": "He had good eyesight."
       }
      ]
     },
     {
      "ko": "콧물을 흘렸다",
      "en": "had a runny nose",
      "ex": [
       {
        "ko": "어제 콧물 났어",
        "en": "had a runny nose yesterday"
       },
       {
        "ko": "오늘 아침에 콧물 났어",
        "en": "had a runny nose this morning"
       },
       {
        "ko": "저번주에 콧물 났어",
        "en": "had a runny nose last week"
       }
      ]
     },
     {
      "ko": "시력이 나빴다",
      "en": "had poor eyesight",
      "ex": [
       {
        "ko": "한쪽 시력이 나빴어",
        "en": "had poor eyesight in one eye"
       },
       {
        "ko": "양쪽 시력이 나빴어",
        "en": "had poor eyesight in both eyes"
       },
       {
        "ko": "그녀는 시력이 나빴어.",
        "en": "She had poor eyesight."
       }
      ]
     },
     {
      "ko": "목이 아팠다",
      "en": "had a sore throat",
      "ex": [
       {
        "ko": "걔는 목이 아팠어.",
        "en": "He had a sore throat."
       },
       {
        "ko": "내 친구는 목이 아팠어.",
        "en": "My friend had a sore throat."
       },
       {
        "ko": "그 소녀는 목이 아팠어.",
        "en": "The girl had a sore throat."
       }
      ]
     },
     {
      "ko": "성형수술을 하다",
      "en": "have plastic surgery",
      "ex": [
       {
        "ko": "성형수술 하길 원해",
        "en": "want to have plastic surgery"
       },
       {
        "ko": "성형수술 하길 원하지 않아",
        "en": "don't want to have plastic surgery"
       },
       {
        "ko": "성형수술 많이 해",
        "en": "have plastic surgery a lot"
       }
      ]
     },
     {
      "ko": "넘어지다",
      "en": "fall",
      "ex": [
       {
        "ko": "넘어지지 마!",
        "en": "Don't fall!"
       },
       {
        "ko": "넘어지면 안돼",
        "en": "should not fall"
       },
       {
        "ko": "넘어질 수도 있어",
        "en": "might fall"
       }
      ]
     },
     {
      "ko": "아프다",
      "en": "get sick",
      "ex": [
       {
        "ko": "쉽게 아파",
        "en": "get sick easily"
       },
       {
        "ko": "진짜 아파",
        "en": "get really sick"
       },
       {
        "ko": "심하게 아파",
        "en": "get horribly sick"
       }
      ]
     },
     {
      "ko": "아픈 게 낫다",
      "en": "get well",
      "ex": [
       {
        "ko": "네가 낫길 원해",
        "en": "want you to get well"
       },
       {
        "ko": "곧 나을 거야",
        "en": "will get well soon"
       },
       {
        "ko": "그녀의 병이 나",
        "en": "get well from her illness"
       }
      ]
     },
     {
      "ko": "몸이 좋지 않다",
      "en": "not feel well",
      "ex": [
       {
        "ko": "나 오늘 몸이 안 좋아.",
        "en": "I don't feel well today."
       },
       {
        "ko": "걔는 오늘 몸이 안 좋아.",
        "en": "He doesn't feel well today."
       },
       {
        "ko": "걔네들 오늘 몸이 안 좋아.",
        "en": "They are not feeling well today."
       }
      ]
     },
     {
      "ko": "성형수술을 했다",
      "en": "had plastic surgery",
      "ex": [
       {
        "ko": "작년에 성형수술 받았어",
        "en": "had plastic surgery last year"
       },
       {
        "ko": "성형수술 여러 번 받았어",
        "en": "had plastic surgery several times"
       },
       {
        "ko": "성형수술 또 받았어",
        "en": "had plastic surgery again"
       }
      ]
     },
     {
      "ko": "넘어졌다",
      "en": "fell",
      "ex": [
       {
        "ko": "넘어져서 그녀의 허리를 다쳤어",
        "en": "fell and hurt her back"
       },
       {
        "ko": "땅에 넘어졌어",
        "en": "fell to the ground"
       },
       {
        "ko": "바닥에 넘어졌어",
        "en": "fell to the floor"
       }
      ]
     },
     {
      "ko": "아팠다",
      "en": "got sick",
      "ex": [
       {
        "ko": "어제 아팠어",
        "en": "got sick yesterday"
       },
       {
        "ko": "저번주에 아팠어",
        "en": "got sick last week"
       },
       {
        "ko": "며칠 전에 아팠어",
        "en": "got sick a few days ago"
       }
      ]
     },
     {
      "ko": "아픈 게 나았다",
      "en": "got well",
      "ex": [
       {
        "ko": "1주일 만에 나았어",
        "en": "got well in a week"
       },
       {
        "ko": "드디어 나았어",
        "en": "finally got well"
       },
       {
        "ko": "며칠 만에 나았어",
        "en": "got well in a few days"
       }
      ]
     },
     {
      "ko": "몸이 좋지 않았다",
      "en": "didn't feel well",
      "ex": [
       {
        "ko": "나 어제 몸이 안 좋았어.",
        "en": "I didn't feel well yesterday."
       },
       {
        "ko": "그녀는 화요일에 몸이 안 좋았어.",
        "en": "She didn't feel well on Tuesday."
       },
       {
        "ko": "걔는 저번주에 몸이 안 좋았어.",
        "en": "He didn't feel well last week."
       }
      ]
     }
    ]
   },
   {
    "theme": "건강 Health (2)",
    "items": [
     {
      "ko": "치통이 있다",
      "en": "have a toothache",
      "ex": [
       {
        "ko": "나 치통 있어.",
        "en": "I have a toothache."
       },
       {
        "ko": "그녀는 치통 있어.",
        "en": "She has a toothache."
       },
       {
        "ko": "내 친구는 치통 있어.",
        "en": "My friend has a toothache."
       }
      ]
     },
     {
      "ko": "설사하다",
      "en": "have diarrhea",
      "ex": [
       {
        "ko": "매일 설사해",
        "en": "have diarrhea every day"
       },
       {
        "ko": "먹은 후에 설사해",
        "en": "have diarrhea after eating"
       },
       {
        "ko": "매일 아침에 설사해",
        "en": "have diarrhea every morning"
       }
      ]
     },
     {
      "ko": "식욕이 없다",
      "en": "have no appetite",
      "ex": [
       {
        "ko": "지금 식욕이 없어",
        "en": "have no appetite now"
       },
       {
        "ko": "수술 후에 식욕이 없어",
        "en": "have no appetite after surgery"
       },
       {
        "ko": "애기 갖고 식욕이 없어",
        "en": "have no appetite after having a baby"
       }
      ]
     },
     {
      "ko": "수술 받다",
      "en": "have surgery",
      "ex": [
       {
        "ko": "허리 수술 받아",
        "en": "have back surgery"
       },
       {
        "ko": "성형 수술 받아",
        "en": "have cosmetic surgery"
       },
       {
        "ko": "다시 수술 받아",
        "en": "have surgery again"
       }
      ]
     },
     {
      "ko": "퇴원하다",
      "en": "leave the hospital",
      "ex": [
       {
        "ko": "아직 퇴원할 수 없어",
        "en": "can't leave the hospital yet"
       },
       {
        "ko": "이틀 내에 퇴원할 수 있어",
        "en": "can leave the hospital in 2 days"
       },
       {
        "ko": "퇴원할 거야",
        "en": "will leave the hospital"
       }
      ]
     },
     {
      "ko": "치통이 있었다",
      "en": "had a toothache",
      "ex": [
       {
        "ko": "어제 저녁에 치통 있었어",
        "en": "had a toothache last night"
       },
       {
        "ko": "심각한 치통 있었어",
        "en": "had a serious toothache"
       },
       {
        "ko": "하루 종일 치통 있었어",
        "en": "had a toothache all day"
       }
      ]
     },
     {
      "ko": "설사했다",
      "en": "had diarrhea",
      "ex": [
       {
        "ko": "오늘 아침에 설사했어",
        "en": "had diarrhea this morning"
       },
       {
        "ko": "어제 설사했어",
        "en": "had diarrhea yesterday"
       },
       {
        "ko": "이틀 동안 설사했어",
        "en": "had diarrhea for two days"
       }
      ]
     },
     {
      "ko": "식욕이 없었다",
      "en": "had no appetite",
      "ex": [
       {
        "ko": "다시 식욕이 없었어",
        "en": "had no appetite again"
       },
       {
        "ko": "4일 동안 식욕이 없었어",
        "en": "had no appetite for four days"
       },
       {
        "ko": "갑자기 식욕이 없었어",
        "en": "had no appetite suddenly"
       }
      ]
     },
     {
      "ko": "수술을 받았다",
      "en": "had surgery",
      "ex": [
       {
        "ko": "작년에 수술 받았어",
        "en": "had surgery last year"
       },
       {
        "ko": "저번달에 수술 받았어",
        "en": "had surgery last month"
       },
       {
        "ko": "저번주에 수술 받았어",
        "en": "had surgery last week"
       }
      ]
     },
     {
      "ko": "퇴원했다",
      "en": "left the hospital",
      "ex": [
       {
        "ko": "화요일에 퇴원했어",
        "en": "left the hospital on Tuesday"
       },
       {
        "ko": "금요일에 퇴원했어",
        "en": "left the hospital on Friday"
       },
       {
        "ko": "그녀는 퇴원했어.",
        "en": "She left the hospital."
       }
      ]
     },
     {
      "ko": "몸살이 나다",
      "en": "ache all over",
      "ex": [
       {
        "ko": "나 몸살 났어.",
        "en": "I ache all over."
       },
       {
        "ko": "그녀가 몸살 났어.",
        "en": "She aches all over."
       },
       {
        "ko": "걔네들은 몸살 났어.",
        "en": "They ache all over."
       }
      ]
     },
     {
      "ko": "입원하다",
      "en": "be hospitalized",
      "ex": [
       {
        "ko": "나 입원했어.",
        "en": "I am hospitalized."
       },
       {
        "ko": "그녀는 다시 입원했어.",
        "en": "She is hospitalized again."
       },
       {
        "ko": "걔는 여전히 입원했어.",
        "en": "He is still hospitalized."
       }
      ]
     },
     {
      "ko": "기침을 하다",
      "en": "cough",
      "ex": [
       {
        "ko": "하루 종일 기침해",
        "en": "cough all day long"
       },
       {
        "ko": "계속 기침해",
        "en": "keep coughing"
       },
       {
        "ko": "또 기침해",
        "en": "cough again"
       }
      ]
     },
     {
      "ko": "처방하다",
      "en": "prescribe",
      "ex": [
       {
        "ko": "나에게 약을 처방해",
        "en": "prescribe drugs for me"
       },
       {
        "ko": "걔에게 약을 처방해",
        "en": "prescribe drugs for him"
       },
       {
        "ko": "우리 엄마에게 약을 처방해",
        "en": "prescribe drugs for my mom"
       }
      ]
     },
     {
      "ko": "진찰받으러 가다",
      "en": "see the doctor",
      "ex": [
       {
        "ko": "정기적으로 진찰받으러 가",
        "en": "see the doctor regularly"
       },
       {
        "ko": "매년 진찰 받으러 가",
        "en": "see the doctor annually"
       },
       {
        "ko": "매달 진찰 받으러 가",
        "en": "see the doctor monthly"
       }
      ]
     },
     {
      "ko": "몸살이 났었다",
      "en": "ached all over",
      "ex": [
       {
        "ko": "걔 일주일 동안 몸살 났었어.",
        "en": "He ached all over for a week."
       },
       {
        "ko": "내 친구가 몸살 났었어.",
        "en": "My friend ached all over."
       },
       {
        "ko": "걔네들은 또 몸살 났었어.",
        "en": "They ached all over again."
       }
      ]
     },
     {
      "ko": "입원했었다",
      "en": "was(were) hospitalized",
      "ex": [
       {
        "ko": "그녀는 입원했었어.",
        "en": "She was hospitalized."
       },
       {
        "ko": "걔는 입원했었어.",
        "en": "He was hospitalized."
       },
       {
        "ko": "걔네들은 입원했었어.",
        "en": "They were hospitalized."
       }
      ]
     },
     {
      "ko": "기침을 했다",
      "en": "coughed",
      "ex": [
       {
        "ko": "오랫동안 기침했어",
        "en": "coughed for a while"
       },
       {
        "ko": "저녁 내내 기침했어",
        "en": "coughed all night long"
       },
       {
        "ko": "기침이 심하게 있었어",
        "en": "coughed badly"
       }
      ]
     },
     {
      "ko": "처방했다",
      "en": "prescribed",
      "ex": [
       {
        "ko": "그녀는 약을 처방해줬어.",
        "en": "She prescribed drugs."
       },
       {
        "ko": "걔는 약을 처방해줬어.",
        "en": "He prescribed drugs."
       },
       {
        "ko": "그 의사가 약을 처방해줬어.",
        "en": "The doctor prescribed drugs."
       }
      ]
     },
     {
      "ko": "진찰받으러 갔다",
      "en": "saw the doctor",
      "ex": [
       {
        "ko": "저번주에 진찰받으러 갔어",
        "en": "saw the doctor last week"
       },
       {
        "ko": "금요일에 진찰받으러 갔어",
        "en": "saw the doctor on Friday"
       },
       {
        "ko": "그녀랑 진찰받으러 갔어",
        "en": "saw the doctor with her"
       }
      ]
     },
     {
      "ko": "재채기하다",
      "en": "sneeze",
      "ex": [
       {
        "ko": "아침마다 재채기해",
        "en": "sneeze every morning"
       },
       {
        "ko": "크게 재채기해",
        "en": "sneeze loudly"
       },
       {
        "ko": "조용히 재채기해",
        "en": "sneeze quietly"
       }
      ]
     },
     {
      "ko": "열을 재다",
      "en": "take the temperature",
      "ex": [
       {
        "ko": "내 열을 재",
        "en": "take my temperature"
       },
       {
        "ko": "걔의 열을 재",
        "en": "take his temperature"
       },
       {
        "ko": "그 아기의 열을 재",
        "en": "take the baby's temperature"
       }
      ]
     },
     {
      "ko": "혈압을 재다",
      "en": "take the blood pressure",
      "ex": [
       {
        "ko": "그녀의 혈압을 재",
        "en": "take her blood pressure"
       },
       {
        "ko": "내 혈압을 재",
        "en": "take my blood pressure"
       },
       {
        "ko": "그 환자의 혈압을 재",
        "en": "take the patient's blood pressure"
       }
      ]
     },
     {
      "ko": "약을 먹다",
      "en": "take the medicine",
      "ex": [
       {
        "ko": "저녁마다 약을 먹어",
        "en": "take the medicine every night"
       },
       {
        "ko": "아침마다 약을 먹어",
        "en": "take the medicine every morning"
       },
       {
        "ko": "일주일에 한 번 약을 먹어",
        "en": "take the medicine once a week"
       }
      ]
     },
     {
      "ko": "토하다",
      "en": "throw up",
      "ex": [
       {
        "ko": "다 토해",
        "en": "throw up everything"
       },
       {
        "ko": "또 토해",
        "en": "throw up again"
       },
       {
        "ko": "계속 토해",
        "en": "throw up repeatedly"
       }
      ]
     },
     {
      "ko": "재채기했다",
      "en": "sneezed",
      "ex": [
       {
        "ko": "재채기를 많이 했어",
        "en": "sneezed a lot"
       },
       {
        "ko": "재채기를 공공장소에서 했어",
        "en": "sneezed in public"
       },
       {
        "ko": "재채기를 다시 했어",
        "en": "sneezed again"
       }
      ]
     },
     {
      "ko": "열을 쟀다",
      "en": "took the temperature",
      "ex": [
       {
        "ko": "다시 열을 쟀어",
        "en": "took the temperature again"
       },
       {
        "ko": "빨리 열을 쟀어",
        "en": "took the temperature quickly"
       },
       {
        "ko": "그녀의 열을 쟀어",
        "en": "took her temperature"
       }
      ]
     },
     {
      "ko": "혈압을 쟀다",
      "en": "took the blood pressure",
      "ex": [
       {
        "ko": "그녀가 내 혈압을 쟀어.",
        "en": "She took my blood pressure."
       },
       {
        "ko": "걔가 내 혈압을 쟀어.",
        "en": "He took my blood pressure."
       },
       {
        "ko": "그 의사가 내 혈압을 쟀어.",
        "en": "The doctor took my blood pressure."
       }
      ]
     },
     {
      "ko": "약을 먹었다",
      "en": "took the medicine",
      "ex": [
       {
        "ko": "오늘 아침에 약을 먹었어",
        "en": "took the medicine this morning"
       },
       {
        "ko": "지난밤에 약 먹었어",
        "en": "took the medicine last night"
       },
       {
        "ko": "또 약을 먹었어",
        "en": "took the medicine again"
       }
      ]
     },
     {
      "ko": "토했다",
      "en": "threw up",
      "ex": [
       {
        "ko": "음식을 토했어",
        "en": "threw up food"
       },
       {
        "ko": "저녁 먹은 거를 토했어",
        "en": "threw up dinner"
       },
       {
        "ko": "다 토했어",
        "en": "threw up everything"
       }
      ]
     }
    ]
   },
   {
    "theme": "건강 Health (3)",
    "items": [
     {
      "ko": "돌아오다",
      "en": "get back",
      "ex": [
       {
        "ko": "집으로 돌아와",
        "en": "get back home"
       },
       {
        "ko": "나에게 돌아와",
        "en": "get back to me"
       },
       {
        "ko": "우리에게 돌아와",
        "en": "get back to us"
       }
      ]
     },
     {
      "ko": "내리다",
      "en": "get off",
      "ex": [
       {
        "ko": "버스에서 내려",
        "en": "get off the bus"
       },
       {
        "ko": "자전거에서 내려",
        "en": "get off the bicycle"
       },
       {
        "ko": "기차에서 내려",
        "en": "get off the train"
       }
      ]
     },
     {
      "ko": "타다",
      "en": "get on",
      "ex": [
       {
        "ko": "버스를 타",
        "en": "get on the bus"
       },
       {
        "ko": "자전거를 타",
        "en": "get on the bicycle"
       },
       {
        "ko": "기차를 타",
        "en": "get on the train"
       }
      ]
     },
     {
      "ko": "도착하다",
      "en": "get to",
      "ex": [
       {
        "ko": "공항에 도착해",
        "en": "get to the airport"
       },
       {
        "ko": "학교에 도착해",
        "en": "get to the school"
       },
       {
        "ko": "가게에 도착해",
        "en": "get to the shop"
       }
      ]
     },
     {
      "ko": "들여다보다",
      "en": "look into",
      "ex": [
       {
        "ko": "내 눈을 들여다봐",
        "en": "look into my eyes"
       },
       {
        "ko": "방을 들여다봐",
        "en": "look into the room"
       },
       {
        "ko": "내 가방 안을 들여다봐",
        "en": "look into my bag"
       }
      ]
     },
     {
      "ko": "돌아왔다",
      "en": "got back",
      "ex": [
       {
        "ko": "며칠 전에 돌아왔어",
        "en": "got back a few days ago"
       },
       {
        "ko": "빨리 돌아왔어",
        "en": "got back quickly"
       },
       {
        "ko": "그와 함께 돌아왔어",
        "en": "got back with him"
       }
      ]
     },
     {
      "ko": "내렸다",
      "en": "got off",
      "ex": [
       {
        "ko": "지하철에서 내렸어",
        "en": "got off the subway"
       },
       {
        "ko": "비행기에서 내렸어",
        "en": "got off the airplane"
       },
       {
        "ko": "배에서 내렸어",
        "en": "got off the ship"
       }
      ]
     },
     {
      "ko": "탔다",
      "en": "got on",
      "ex": [
       {
        "ko": "지하철을 탔어",
        "en": "got on the subway"
       },
       {
        "ko": "비행기를 탔어",
        "en": "got on the airplane"
       },
       {
        "ko": "배를 탔어",
        "en": "got on the ship"
       }
      ]
     },
     {
      "ko": "도착했다",
      "en": "got to",
      "ex": [
       {
        "ko": "집에 도착했어",
        "en": "got to the house"
       },
       {
        "ko": "역에 도착했어",
        "en": "got to the station"
       },
       {
        "ko": "사무실에 도착했어",
        "en": "got to the office"
       }
      ]
     },
     {
      "ko": "들여다보았다",
      "en": "looked into",
      "ex": [
       {
        "ko": "내 집을 들여다봤어",
        "en": "looked into my house"
       },
       {
        "ko": "거울을 들여다봤어",
        "en": "looked into the mirror"
       },
       {
        "ko": "내 차 안을 들여다봤어",
        "en": "looked into my car"
       }
      ]
     },
     {
      "ko": "입다",
      "en": "put on",
      "ex": [
       {
        "ko": "재킷을 입어",
        "en": "put on a jacket"
       },
       {
        "ko": "모자를 써",
        "en": "put on a hat"
       },
       {
        "ko": "장갑을 껴",
        "en": "put on the gloves"
       }
      ]
     },
     {
      "ko": "목욕하다",
      "en": "take a bath",
      "ex": [
       {
        "ko": "일 년에 한 번 목욕해",
        "en": "take a bath once a year"
       },
       {
        "ko": "매일 아침 목욕해",
        "en": "take a bath every morning"
       },
       {
        "ko": "하루에 한 번 목욕해",
        "en": "take a bath once a day"
       }
      ]
     },
     {
      "ko": "샤워하다",
      "en": "take a shower",
      "ex": [
       {
        "ko": "매일 샤워해",
        "en": "take a shower everyday"
       },
       {
        "ko": "밤에 샤워해",
        "en": "take a shower at night"
       },
       {
        "ko": "아침에 샤워해",
        "en": "take a shower in the morning"
       }
      ]
     },
     {
      "ko": "벗다",
      "en": "take off",
      "ex": [
       {
        "ko": "내 코트를 벗어",
        "en": "take off my coat"
       },
       {
        "ko": "그 재킷을 벗어",
        "en": "take off the jacket"
       },
       {
        "ko": "너의 셔츠를 벗어",
        "en": "take off your shirt"
       }
      ]
     },
     {
      "ko": "하품하다",
      "en": "yawn",
      "ex": [
       {
        "ko": "수업시간에 하품해",
        "en": "yawn in class"
       },
       {
        "ko": "하품 많이 해",
        "en": "yawn a lot"
       },
       {
        "ko": "일하는 동안에 하품해",
        "en": "yawn while working"
       }
      ]
     },
     {
      "ko": "입었다",
      "en": "put on",
      "ex": [
       {
        "ko": "신발을 신었어",
        "en": "put on the shoes"
       },
       {
        "ko": "반지를 꼈어",
        "en": "put on a ring"
       },
       {
        "ko": "헬멧을 썼어",
        "en": "put on a helmet"
       }
      ]
     },
     {
      "ko": "목욕했다",
      "en": "took a bath",
      "ex": [
       {
        "ko": "욕실에서 목욕했어",
        "en": "took a bath in the bathroom"
       },
       {
        "ko": "여기서 목욕했어",
        "en": "took a bath here"
       },
       {
        "ko": "욕조에서 목욕했어",
        "en": "took a bath in the bathtub"
       }
      ]
     },
     {
      "ko": "샤워했다",
      "en": "took a shower",
      "ex": [
       {
        "ko": "찬물로 샤워했어",
        "en": "took a cold shower"
       },
       {
        "ko": "간단하게 샤워했어",
        "en": "took a quick shower"
       },
       {
        "ko": "따뜻한 물로 샤워했어",
        "en": "took a warm shower"
       }
      ]
     },
     {
      "ko": "벗었다",
      "en": "took off",
      "ex": [
       {
        "ko": "바지를 벗었어",
        "en": "took off the pants"
       },
       {
        "ko": "치마를 벗었어",
        "en": "took off the skirt"
       },
       {
        "ko": "스웨터를 벗었어",
        "en": "took off the sweater"
       }
      ]
     },
     {
      "ko": "하품했다",
      "en": "yawned",
      "ex": [
       {
        "ko": "하품 너무 많이 했어",
        "en": "yawned too much"
       },
       {
        "ko": "하품 또 했어",
        "en": "yawned again"
       },
       {
        "ko": "자기 전에 하품했어",
        "en": "yawned before going to bed"
       }
      ]
     },
     {
      "ko": "반창고",
      "en": "band-aid",
      "ex": [
       {
        "ko": "반창고를 붙여",
        "en": "put on a band-aid"
       },
       {
        "ko": "반창고를 사",
        "en": "get band-aids"
       },
       {
        "ko": "반창고가 필요해",
        "en": "need some band-aids"
       }
      ]
     },
     {
      "ko": "의사",
      "en": "doctor",
      "ex": [
       {
        "ko": "병원 가",
        "en": "see the doctor"
       },
       {
        "ko": "의사를 방문했어",
        "en": "visited the doctor"
       },
       {
        "ko": "좋은 의사야",
        "en": "be a good doctor"
       }
      ]
     },
     {
      "ko": "응급",
      "en": "emergency",
      "ex": [
       {
        "ko": "응급 수술을 받았어",
        "en": "had emergency surgery"
       },
       {
        "ko": "응급실에 있어",
        "en": "be in the emergency room"
       },
       {
        "ko": "비상이야!",
        "en": "It's an emergency!"
       }
      ]
     },
     {
      "ko": "키",
      "en": "height",
      "ex": [
       {
        "ko": "너 키가 몇이야?",
        "en": "What's your height?"
       },
       {
        "ko": "그녀는 키가 몇이야?",
        "en": "What's her height?"
       },
       {
        "ko": "걔는 키가 몇이야?",
        "en": "What's his height?"
       }
      ]
     },
     {
      "ko": "약",
      "en": "medicine",
      "ex": [
       {
        "ko": "약을 먹어",
        "en": "take medicine"
       },
       {
        "ko": "약을 싫어해",
        "en": "hate medicine"
       },
       {
        "ko": "어제 약 먹었어",
        "en": "took medicine yesterday"
       }
      ]
     },
     {
      "ko": "간호사",
      "en": "nurse",
      "ex": [
       {
        "ko": "10명의 간호사가 있어",
        "en": "have ten nurses"
       },
       {
        "ko": "간호사가 되고 싶어",
        "en": "want to be a nurse"
       },
       {
        "ko": "내 아내는 간호사야.",
        "en": "My wife is a nurse."
       }
      ]
     },
     {
      "ko": "환자",
      "en": "patient",
      "ex": [
       {
        "ko": "이건 그 환자에게 나빠.",
        "en": "It's bad for the patient."
       },
       {
        "ko": "이건 그 환자에게 좋아.",
        "en": "It's good for the patient."
       },
       {
        "ko": "저 환자는 암이 있어.",
        "en": "That patient has cancer."
       }
      ]
     },
     {
      "ko": "처방전",
      "en": "prescription",
      "ex": [
       {
        "ko": "나에게 처방전 써줬어",
        "en": "wrote me a prescription"
       },
       {
        "ko": "나에게 처방전 줬어",
        "en": "gave me a prescription"
       },
       {
        "ko": "처방전 받았어",
        "en": "got a prescription"
       }
      ]
     },
     {
      "ko": "접수처",
      "en": "reception",
      "ex": [
       {
        "ko": "접수처에서 기다려",
        "en": "wait at the reception"
       },
       {
        "ko": "접수처에서 만나",
        "en": "meet at the reception"
       },
       {
        "ko": "접수처가 어디야?",
        "en": "Where is the reception?"
       }
      ]
     },
     {
      "ko": "주사",
      "en": "shot",
      "ex": [
       {
        "ko": "주사 맞아",
        "en": "get a shot"
       },
       {
        "ko": "주사 맞는 거 싫어해",
        "en": "hate getting shots"
       },
       {
        "ko": "주사를 안 좋아해",
        "en": "don't like getting shots"
       }
      ]
     }
    ]
   },
   {
    "theme": "건강 Health (4)",
    "items": [
     {
      "ko": "수술",
      "en": "surgery",
      "ex": [
       {
        "ko": "오늘 수술했어",
        "en": "had surgery today"
       },
       {
        "ko": "또 수술했어",
        "en": "had surgery again"
       },
       {
        "ko": "허리 수술했어",
        "en": "had back surgery"
       }
      ]
     },
     {
      "ko": "체온",
      "en": "temperature",
      "ex": [
       {
        "ko": "그녀의 체온을 재",
        "en": "take her temperature"
       },
       {
        "ko": "걔의 체온을 재",
        "en": "take his temperature"
       },
       {
        "ko": "걔네들의 체온을 쟀어",
        "en": "took their temperature"
       }
      ]
     },
     {
      "ko": "치료",
      "en": "treatment",
      "ex": [
       {
        "ko": "치료가 있어",
        "en": "have a treatment"
       },
       {
        "ko": "특별한 치료가 있었어",
        "en": "had a special treatment"
       },
       {
        "ko": "치료를 위해 여기 있어",
        "en": "be here for treatment"
       }
      ]
     },
     {
      "ko": "몸무게",
      "en": "weight",
      "ex": [
       {
        "ko": "살 빠졌어",
        "en": "lost weight"
       },
       {
        "ko": "살 안 빠졌어",
        "en": "didn't lose weight"
       },
       {
        "ko": "살 빼고 싶어",
        "en": "want to lose weight"
       }
      ]
     },
     {
      "ko": "날이 화창하다",
      "en": "be sunny",
      "ex": [
       {
        "ko": "오늘은 화창해.",
        "en": "It is sunny today."
       },
       {
        "ko": "일요일엔 화창했어.",
        "en": "It was sunny on Sunday."
       },
       {
        "ko": "내일은 화창할 거야.",
        "en": "It will be sunny tomorrow."
       }
      ]
     },
     {
      "ko": "따뜻하다",
      "en": "be warm",
      "ex": [
       {
        "ko": "실내는 따뜻해.",
        "en": "It is warm inside."
       },
       {
        "ko": "밖에 따뜻했어.",
        "en": "It was warm outside."
       },
       {
        "ko": "좀 이따가 따뜻할 거야.",
        "en": "It will be warm later."
       }
      ]
     },
     {
      "ko": "쌀쌀하다",
      "en": "be chilly",
      "ex": [
       {
        "ko": "여전히 쌀쌀해.",
        "en": "It is still chilly."
       },
       {
        "ko": "조깅하긴 너무 쌀쌀했어.",
        "en": "It was too chilly for jogging."
       },
       {
        "ko": "다음 주에 쌀쌀할 거야.",
        "en": "It will be chilly next week."
       }
      ]
     },
     {
      "ko": "건조하다",
      "en": "be dry",
      "ex": [
       {
        "ko": "여기 건조해.",
        "en": "It is dry here."
       },
       {
        "ko": "서울은 건조했었어.",
        "en": "It was dry in Seoul."
       },
       {
        "ko": "항상 건조해.",
        "en": "It is always dry."
       }
      ]
     },
     {
      "ko": "습하다",
      "en": "be humid",
      "ex": [
       {
        "ko": "오늘 정말 습해.",
        "en": "It is so humid today."
       },
       {
        "ko": "지난 여름에 진짜 습했어.",
        "en": "It was very humid last summer."
       },
       {
        "ko": "여기 진짜 습해.",
        "en": "It is very humid here."
       }
      ]
     },
     {
      "ko": "흐리다",
      "en": "be cloudy",
      "ex": [
       {
        "ko": "오늘 날이 흐려.",
        "en": "It is cloudy today."
       },
       {
        "ko": "어젯밤에 흐렸어.",
        "en": "It was cloudy last night."
       },
       {
        "ko": "곧 흐려질 거야.",
        "en": "It will be cloudy soon."
       }
      ]
     }
    ]
   },
   {
    "theme": "음식 Food (1)",
    "items": [
     {
      "ko": "달라고 하다",
      "en": "ask for",
      "ex": [
       {
        "ko": "아무것도 달라고 하지 않아",
        "en": "ask for nothing"
       },
       {
        "ko": "포크를 달라고 해",
        "en": "ask for a fork"
       },
       {
        "ko": "물을 달라고 해",
        "en": "ask for some water"
       }
      ]
     },
     {
      "ko": "쓰다",
      "en": "be bitter",
      "ex": [
       {
        "ko": "약이 써.",
        "en": "Medicine is bitter."
       },
       {
        "ko": "이 음료가 써.",
        "en": "This drink is bitter."
       },
       {
        "ko": "이 물이 써.",
        "en": "This water is bitter."
       }
      ]
     },
     {
      "ko": "맵다",
      "en": "be hot",
      "ex": [
       {
        "ko": "몇몇의 한국 음식은 매워.",
        "en": "Some Korean dishes are hot."
       },
       {
        "ko": "고추는 매워.",
        "en": "Peppers are hot."
       },
       {
        "ko": "이 음식은 매워.",
        "en": "This food is hot."
       }
      ]
     },
     {
      "ko": "짜다",
      "en": "be salty",
      "ex": [
       {
        "ko": "이 음식이 짜.",
        "en": "This food is salty."
       },
       {
        "ko": "이 스파게티가 짜.",
        "en": "This spaghetti is salty."
       },
       {
        "ko": "이 스테이크가 짜.",
        "en": "This steak is salty."
       }
      ]
     },
     {
      "ko": "시다",
      "en": "be sour",
      "ex": [
       {
        "ko": "레몬은 셔.",
        "en": "Lemons are sour."
       },
       {
        "ko": "오렌지는 셔.",
        "en": "Oranges are sour."
       },
       {
        "ko": "그것은 셔.",
        "en": "It is sour."
       }
      ]
     },
     {
      "ko": "달라고 했다",
      "en": "asked for",
      "ex": [
       {
        "ko": "소금을 달라고 했어",
        "en": "asked for some salt"
       },
       {
        "ko": "설탕을 달라고 했어",
        "en": "asked for some sugar"
       },
       {
        "ko": "커피를 달라고 했어",
        "en": "asked for some coffee"
       }
      ]
     },
     {
      "ko": "썼다",
      "en": "was bitter",
      "ex": [
       {
        "ko": "그 빵은 썼어.",
        "en": "The bread was bitter."
       },
       {
        "ko": "그 우유는 썼어.",
        "en": "The milk was bitter."
       },
       {
        "ko": "그 채소는 썼어.",
        "en": "The vegetable was bitter."
       }
      ]
     },
     {
      "ko": "매웠다",
      "en": "was hot",
      "ex": [
       {
        "ko": "그 국물이 매웠어.",
        "en": "The soup was hot."
       },
       {
        "ko": "그 라면이 매웠어.",
        "en": "The ramen was hot."
       },
       {
        "ko": "그 소스가 매웠어.",
        "en": "The sauce was hot."
       }
      ]
     },
     {
      "ko": "짰다",
      "en": "was salty",
      "ex": [
       {
        "ko": "그 햄버거가 짰어.",
        "en": "The hamburger was salty."
       },
       {
        "ko": "그 샌드위치가 짰어.",
        "en": "The sandwich was salty."
       },
       {
        "ko": "그 수프가 짰어.",
        "en": "The soup was salty."
       }
      ]
     },
     {
      "ko": "셨다",
      "en": "was sour",
      "ex": [
       {
        "ko": "그 과일이 셨어.",
        "en": "The fruit was sour."
       },
       {
        "ko": "그 음료가 셨어.",
        "en": "The drink was sour."
       },
       {
        "ko": "그 젤리가 셨어.",
        "en": "The jelly was sour."
       }
      ]
     },
     {
      "ko": "달다",
      "en": "be sweet",
      "ex": [
       {
        "ko": "초콜릿이 달아.",
        "en": "Chocolate is sweet."
       },
       {
        "ko": "설탕이 달아.",
        "en": "Sugar is sweet."
       },
       {
        "ko": "사탕이 달아.",
        "en": "Candies are sweet."
       }
      ]
     },
     {
      "ko": "끓이다",
      "en": "boil",
      "ex": [
       {
        "ko": "물을 끓여",
        "en": "boil the water"
       },
       {
        "ko": "계란을 끓여",
        "en": "boil the eggs"
       },
       {
        "ko": "그걸 아직 끓이지 마!",
        "en": "Don't boil it yet!"
       }
      ]
     },
     {
      "ko": "예약하다",
      "en": "book",
      "ex": [
       {
        "ko": "좌석을 예약해",
        "en": "book a seat"
       },
       {
        "ko": "표를 예매해",
        "en": "book a ticket"
       },
       {
        "ko": "방을 예약해",
        "en": "book a room"
       }
      ]
     },
     {
      "ko": "태우다",
      "en": "burn",
      "ex": [
       {
        "ko": "태우지 마!",
        "en": "Don't burn it!"
       },
       {
        "ko": "난 태우지 않으려고 해.",
        "en": "I try not to burn it."
       },
       {
        "ko": "그녀는 태우지 않을 거야.",
        "en": "She won't burn it."
       }
      ]
     },
     {
      "ko": "예약을 취소하다",
      "en": "cancel the reservation",
      "ex": [
       {
        "ko": "예약을 먼저 취소해",
        "en": "cancel the reservation first"
       },
       {
        "ko": "예약을 지금 취소해",
        "en": "cancel the reservation now"
       },
       {
        "ko": "예약을 취소하고 싶어",
        "en": "want to cancel the reservation"
       }
      ]
     },
     {
      "ko": "달았다",
      "en": "was sweet",
      "ex": [
       {
        "ko": "그 쿠키가 달았어.",
        "en": "The cookie was sweet."
       },
       {
        "ko": "그 젤리가 달았어.",
        "en": "The jelly was sweet."
       },
       {
        "ko": "그 커피가 달았어.",
        "en": "The coffee was sweet."
       }
      ]
     },
     {
      "ko": "끓였다",
      "en": "boiled",
      "ex": [
       {
        "ko": "20분 동안 끓였어",
        "en": "boiled for 20 minutes"
       },
       {
        "ko": "스프를 끓였어",
        "en": "boiled the soup"
       },
       {
        "ko": "감자를 삶았어",
        "en": "boiled some potatoes"
       }
      ]
     },
     {
      "ko": "예약했다",
      "en": "booked",
      "ex": [
       {
        "ko": "방을 예약했어",
        "en": "booked a room"
       },
       {
        "ko": "좌석 두 개를 예약했어",
        "en": "booked two seats"
       },
       {
        "ko": "좌석을 예약했어",
        "en": "booked a seat"
       }
      ]
     },
     {
      "ko": "태웠다",
      "en": "burned",
      "ex": [
       {
        "ko": "그 파스타 태웠어",
        "en": "burned the pasta"
       },
       {
        "ko": "그 음식 태웠어",
        "en": "burned the food"
       },
       {
        "ko": "그 고기 태웠어",
        "en": "burned the meat"
       }
      ]
     },
     {
      "ko": "예약을 취소했다",
      "en": "canceled the reservation",
      "ex": [
       {
        "ko": "우리는 예약을 취소했어.",
        "en": "We canceled the reservation."
       },
       {
        "ko": "나는 예약을 취소했어.",
        "en": "I canceled the reservation."
       },
       {
        "ko": "그는 예약을 취소했어.",
        "en": "He canceled the reservation."
       }
      ]
     },
     {
      "ko": "자르다",
      "en": "chop",
      "ex": [
       {
        "ko": "양파 두 개를 잘라",
        "en": "chop two onions"
       },
       {
        "ko": "당근을 잘라",
        "en": "chop some carrots"
       },
       {
        "ko": "토마토를 잘라",
        "en": "chop some tomatoes"
       }
      ]
     },
     {
      "ko": "요리하다",
      "en": "cook",
      "ex": [
       {
        "ko": "아침마다 요리해",
        "en": "cook every morning"
       },
       {
        "ko": "저녁마다 요리해",
        "en": "cook every evening"
       },
       {
        "ko": "요리하는 거 좋아해",
        "en": "like to cook"
       }
      ]
     },
     {
      "ko": "튀기다",
      "en": "deep fry",
      "ex": [
       {
        "ko": "치킨을 튀겨",
        "en": "deep fry some chicken"
       },
       {
        "ko": "생선을 튀겨",
        "en": "deep fry some fish"
       },
       {
        "ko": "감자를 튀겨",
        "en": "deep fry some potatoes"
       }
      ]
     },
     {
      "ko": "해동하다",
      "en": "defrost",
      "ex": [
       {
        "ko": "그 피자 해동해",
        "en": "defrost the pizza"
       },
       {
        "ko": "4시간 동안 해동해",
        "en": "defrost for 4 hours"
       },
       {
        "ko": "상온에서 해동해",
        "en": "defrost at room temperature"
       }
      ]
     },
     {
      "ko": "마시다",
      "en": "drink",
      "ex": [
       {
        "ko": "물 많이 마셔",
        "en": "drink water a lot"
       },
       {
        "ko": "아침마다 커피 마셔",
        "en": "drink coffee every morning"
       },
       {
        "ko": "탄산음료 마시는 거 안 좋아해",
        "en": "don't like to drink soda"
       }
      ]
     },
     {
      "ko": "잘랐다",
      "en": "chopped",
      "ex": [
       {
        "ko": "한 요리사가 오이를 잘랐어.",
        "en": "A cook chopped the cucumbers."
       },
       {
        "ko": "걔네들은 버섯을 잘랐어.",
        "en": "They chopped the mushrooms."
       },
       {
        "ko": "사람들은 햄을 잘랐어.",
        "en": "People chopped some ham."
       }
      ]
     },
     {
      "ko": "요리했다",
      "en": "cooked",
      "ex": [
       {
        "ko": "우리를 위해 저녁을 요리했어",
        "en": "cooked dinner for us"
       },
       {
        "ko": "어제 파스타 요리했어",
        "en": "cooked pasta yesterday"
       },
       {
        "ko": "요리 많이 했어",
        "en": "cooked a lot"
       }
      ]
     },
     {
      "ko": "튀겼다",
      "en": "deep fried",
      "ex": [
       {
        "ko": "2분 동안 튀겼어",
        "en": "deep fried for two minutes"
       },
       {
        "ko": "잠시 동안 튀겼어",
        "en": "deep fried for a while"
       },
       {
        "ko": "5분 더 튀겼어",
        "en": "deep fried for another 5 minutes"
       }
      ]
     },
     {
      "ko": "해동했다",
      "en": "defrosted",
      "ex": [
       {
        "ko": "고기를 해동했어",
        "en": "defrosted some meat"
       },
       {
        "ko": "닭고기를 해동했어",
        "en": "defrosted some chicken"
       },
       {
        "ko": "냉동식품 해동했어",
        "en": "defrosted the frozen food"
       }
      ]
     },
     {
      "ko": "마셨다",
      "en": "drank",
      "ex": [
       {
        "ko": "그녀랑 차 마셨어",
        "en": "drank tea with her"
       },
       {
        "ko": "너무 많이 마셨어",
        "en": "drank too much"
       },
       {
        "ko": "어제 커피 마셨어",
        "en": "drank coffee yesterday"
       }
      ]
     }
    ]
   },
   {
    "theme": "음식 Food (2)",
    "items": [
     {
      "ko": "먹다",
      "en": "eat",
      "ex": [
       {
        "ko": "점심으로 샐러드를 먹어",
        "en": "eat salad for lunch"
       },
       {
        "ko": "매일 시리얼을 먹어",
        "en": "eat cereal every day"
       },
       {
        "ko": "스파게티 먹는 거 좋아해",
        "en": "like to eat spaghetti"
       }
      ]
     },
     {
      "ko": "외식하다",
      "en": "eat out",
      "ex": [
       {
        "ko": "오늘 저녁 외식해",
        "en": "eat out tonight"
       },
       {
        "ko": "오늘 아침 외식해",
        "en": "eat out this morning"
       },
       {
        "ko": "오늘 외식해",
        "en": "eat out today"
       }
      ]
     },
     {
      "ko": "너무 많이 먹다",
      "en": "eat too much",
      "ex": [
       {
        "ko": "너는 너무 많이 먹어",
        "en": "you eat too much"
       },
       {
        "ko": "햄버거를 너무 많이 먹어",
        "en": "eat too many hamburgers"
       },
       {
        "ko": "고기를 너무 많이 먹어",
        "en": "eat too much meat"
       }
      ]
     },
     {
      "ko": "얼리다",
      "en": "freeze",
      "ex": [
       {
        "ko": "바나나를 얼려",
        "en": "freeze the bananas"
       },
       {
        "ko": "생선을 얼려",
        "en": "freeze the fish"
       },
       {
        "ko": "물을 얼려",
        "en": "freeze the water"
       }
      ]
     },
     {
      "ko": "볶다",
      "en": "fry",
      "ex": [
       {
        "ko": "썬 양파를 볶아",
        "en": "fry chopped onion"
       },
       {
        "ko": "고기를 볶아",
        "en": "fry some meat"
       },
       {
        "ko": "햄을 볶아",
        "en": "fry some ham"
       }
      ]
     },
     {
      "ko": "먹었다",
      "en": "ate",
      "ex": [
       {
        "ko": "내 친구들이랑 햄버거 먹었어",
        "en": "ate hamburgers with my friends"
       },
       {
        "ko": "지난 수요일에 스시 먹었어",
        "en": "ate sushi last Wednesday"
       },
       {
        "ko": "걔랑 스파게티 먹었어",
        "en": "ate spaghetti with him"
       }
      ]
     },
     {
      "ko": "외식했다",
      "en": "ate out",
      "ex": [
       {
        "ko": "매일 외식했어",
        "en": "ate out every day"
       },
       {
        "ko": "일주일에 한 번 외식했어",
        "en": "ate out once a week"
       },
       {
        "ko": "한 달에 한 번 외식했어",
        "en": "ate out once a month"
       }
      ]
     },
     {
      "ko": "너무 많이 먹었다",
      "en": "ate too much",
      "ex": [
       {
        "ko": "어제 너무 많이 먹었어",
        "en": "ate too much yesterday"
       },
       {
        "ko": "어젯밤에 너무 많이 먹었어",
        "en": "ate too much last night"
       },
       {
        "ko": "오늘 너무 많이 먹었어",
        "en": "ate too much today"
       }
      ]
     },
     {
      "ko": "얼렸다",
      "en": "froze",
      "ex": [
       {
        "ko": "우린 그 스프를 얼렸어.",
        "en": "We froze the soup."
       },
       {
        "ko": "나는 그 고기를 얼렸어.",
        "en": "I froze the meat."
       },
       {
        "ko": "그녀는 피자를 얼렸어.",
        "en": "She froze some pizza."
       }
      ]
     },
     {
      "ko": "볶았다",
      "en": "fried",
      "ex": [
       {
        "ko": "5분 동안 볶았어",
        "en": "fried for 5 minutes"
       },
       {
        "ko": "잠시 동안 볶았어",
        "en": "fried for a few minutes"
       },
       {
        "ko": "마늘 볶았어",
        "en": "fried some garlic"
       }
      ]
     },
     {
      "ko": "가져다 주다",
      "en": "get me",
      "ex": [
       {
        "ko": "내게 커피를 가져다 줘!",
        "en": "Get me some coffee!"
       },
       {
        "ko": "내게 계산서를 가져다 줘!",
        "en": "Get me the bill!"
       },
       {
        "ko": "내게 메뉴를 가져다 줘!",
        "en": "Get me the menu!"
       }
      ]
     },
     {
      "ko": "거스름돈을 받다",
      "en": "get the change",
      "ex": [
       {
        "ko": "우리가 거스름돈을 받아.",
        "en": "We get the change."
       },
       {
        "ko": "그가 거스름돈을 받아.",
        "en": "He gets the change."
       },
       {
        "ko": "그녀가 거스름돈을 받아.",
        "en": "She gets the change."
       }
      ]
     },
     {
      "ko": "거스름돈을 주다",
      "en": "give the change",
      "ex": [
       {
        "ko": "내게 거스름돈을 줘",
        "en": "give me the change"
       },
       {
        "ko": "그에게 거스름돈을 줘",
        "en": "give him the change"
       },
       {
        "ko": "그녀에게 거스름돈을 줘",
        "en": "give her the change"
       }
      ]
     },
     {
      "ko": "작동되다",
      "en": "work",
      "ex": [
       {
        "ko": "이거 작동 돼.",
        "en": "This works."
       },
       {
        "ko": "그거 작동 잘 돼.",
        "en": "It works well."
       },
       {
        "ko": "그거 작동 잘 안돼.",
        "en": "It doesn't work well."
       }
      ]
     },
     {
      "ko": "반죽하다",
      "en": "knead",
      "ex": [
       {
        "ko": "피자 반죽해",
        "en": "knead the pizza dough"
       },
       {
        "ko": "쿠키 반죽해",
        "en": "knead the cookie dough"
       },
       {
        "ko": "5분 동안 반죽해",
        "en": "knead for 5 minutes"
       }
      ]
     },
     {
      "ko": "가져다 줬다",
      "en": "got me",
      "ex": [
       {
        "ko": "내게 설탕을 가져다 줬어",
        "en": "got me some sugar"
       },
       {
        "ko": "내게 소금을 가져다 줬어",
        "en": "got me some salt"
       },
       {
        "ko": "내게 물을 가져다 줬어",
        "en": "got me some water"
       }
      ]
     },
     {
      "ko": "거스름돈을 받았다",
      "en": "got the change",
      "ex": [
       {
        "ko": "그 남자가 거스름돈을 받았어.",
        "en": "The man got the change."
       },
       {
        "ko": "그 손님이 거스름돈을 받았어.",
        "en": "The customer got the change."
       },
       {
        "ko": "네 친구가 거스름돈을 받았어.",
        "en": "Your friend got the change."
       }
      ]
     },
     {
      "ko": "거스름돈을 주었다",
      "en": "gave the change",
      "ex": [
       {
        "ko": "남자에게 거스름돈을 줬어",
        "en": "gave the man the change"
       },
       {
        "ko": "손님에게 거스름돈을 줬어",
        "en": "gave the customer the change"
       },
       {
        "ko": "네 친구에게 거스름돈을 줬어",
        "en": "gave your friend the change"
       }
      ]
     },
     {
      "ko": "작동됐다",
      "en": "worked",
      "ex": [
       {
        "ko": "이 청소기 작동됐어.",
        "en": "This vacuum cleaner worked."
       },
       {
        "ko": "이 전자레인지 작동됐어.",
        "en": "This microwave worked."
       },
       {
        "ko": "이 다리미 작동됐어.",
        "en": "This steam iron worked."
       }
      ]
     },
     {
      "ko": "반죽했다",
      "en": "kneaded",
      "ex": [
       {
        "ko": "부드럽게 반죽했어",
        "en": "kneaded gently"
       },
       {
        "ko": "약간 반죽했어",
        "en": "kneaded lightly"
       },
       {
        "ko": "손으로 잘 반죽했어",
        "en": "kneaded well by hand"
       }
      ]
     },
     {
      "ko": "더치페이하다",
      "en": "go Dutch",
      "ex": [
       {
        "ko": "더치페이하자.",
        "en": "Let's go Dutch."
       },
       {
        "ko": "더치페이를 해야 해",
        "en": "have to go Dutch"
       },
       {
        "ko": "더치페이를 해도 돼",
        "en": "can go Dutch"
       }
      ]
     },
     {
      "ko": "팁을 두다",
      "en": "leave a tip",
      "ex": [
       {
        "ko": "팁을 둬야 해",
        "en": "have to leave a tip"
       },
       {
        "ko": "팁을 두어도 돼",
        "en": "can leave a tip"
       },
       {
        "ko": "팁을 두지 마!",
        "en": "Don't leave a tip!"
       }
      ]
     },
     {
      "ko": "반납하다",
      "en": "return",
      "ex": [
       {
        "ko": "책을 반납해",
        "en": "return the books"
       },
       {
        "ko": "동화책을 반납해",
        "en": "return the children's books"
       },
       {
        "ko": "만화책을 반납해",
        "en": "return the comic books"
       }
      ]
     },
     {
      "ko": "주문하다",
      "en": "order",
      "ex": [
       {
        "ko": "음식을 주문해",
        "en": "order a meal"
       },
       {
        "ko": "스파게티를 주문해",
        "en": "order spaghetti"
       },
       {
        "ko": "햄버거를 주문해",
        "en": "order a hamburger"
       }
      ]
     },
     {
      "ko": "음식값을 지불하다",
      "en": "pay the bill",
      "ex": [
       {
        "ko": "내게 음식값을 지불해",
        "en": "pay me the bill"
       },
       {
        "ko": "점원에게 음식값을 지불해",
        "en": "pay the clerk the bill"
       },
       {
        "ko": "남자에게 음식값을 지불해",
        "en": "pay the man the bill"
       }
      ]
     },
     {
      "ko": "더치페이했다",
      "en": "went Dutch",
      "ex": [
       {
        "ko": "그들은 더치페이했어.",
        "en": "They went Dutch."
       },
       {
        "ko": "우리는 더치페이했어.",
        "en": "We went Dutch."
       },
       {
        "ko": "그는 더치페이했어.",
        "en": "He went Dutch."
       }
      ]
     },
     {
      "ko": "팁을 두었다",
      "en": "left a tip",
      "ex": [
       {
        "ko": "오늘 아침에 팁을 뒀어",
        "en": "left a tip this morning"
       },
       {
        "ko": "이틀 전에 팁을 뒀어",
        "en": "left a tip two days ago"
       },
       {
        "ko": "좀 전에 팁을 뒀어",
        "en": "left a tip a minute ago"
       }
      ]
     },
     {
      "ko": "반납했다",
      "en": "returned",
      "ex": [
       {
        "ko": "이거 도서관에 반납했어",
        "en": "returned it to the library"
       },
       {
        "ko": "이거 걔에게 돌려줬어",
        "en": "returned it to him"
       },
       {
        "ko": "이거 걔네들에게 돌려줬어",
        "en": "returned it to them"
       }
      ]
     },
     {
      "ko": "주문했다",
      "en": "ordered",
      "ex": [
       {
        "ko": "아침을 주문했어",
        "en": "ordered breakfast"
       },
       {
        "ko": "점심을 주문했어",
        "en": "ordered lunch"
       },
       {
        "ko": "저녁을 주문했어",
        "en": "ordered dinner"
       }
      ]
     },
     {
      "ko": "음식값을 지불했다",
      "en": "paid the bill",
      "ex": [
       {
        "ko": "현금으로 음식값을 지불했어",
        "en": "paid the bill in cash"
       },
       {
        "ko": "수표로 음식값을 지불했어",
        "en": "paid the bill by check"
       },
       {
        "ko": "신용카드로 음식값을 지불했어",
        "en": "paid the bill by credit card"
       }
      ]
     }
    ]
   },
   {
    "theme": "음식 Food (3)",
    "items": [
     {
      "ko": "껍질 벗기다",
      "en": "peel",
      "ex": [
       {
        "ko": "감자 껍질을 벗겨",
        "en": "peel the potatoes"
       },
       {
        "ko": "오렌지 껍질을 벗겨",
        "en": "peel the oranges"
       },
       {
        "ko": "사과 껍질을 벗겨",
        "en": "peel the apples"
       }
      ]
     },
     {
      "ko": "메뉴를 보다",
      "en": "see the menu",
      "ex": [
       {
        "ko": "식당에서 메뉴를 봐",
        "en": "see the menu at the restaurant"
       },
       {
        "ko": "메뉴를 보고 싶어",
        "en": "want to see the menu"
       },
       {
        "ko": "주문하기 전에 메뉴를 봐",
        "en": "see the menu before we order"
       }
      ]
     },
     {
      "ko": "나누어 계산하다",
      "en": "share the bill",
      "ex": [
       {
        "ko": "함께 나눠서 계산해",
        "en": "share the bill together"
       },
       {
        "ko": "지금 나눠서 계산해",
        "en": "share the bill now"
       },
       {
        "ko": "공평하게 나눠서 계산해",
        "en": "share the bill fairly"
       }
      ]
     },
     {
      "ko": "썰다",
      "en": "slice",
      "ex": [
       {
        "ko": "그 햄을 썰어",
        "en": "slice the ham"
       },
       {
        "ko": "그 빵을 썰어",
        "en": "slice the bread"
       },
       {
        "ko": "그 양파를 썰어",
        "en": "slice the onions"
       }
      ]
     },
     {
      "ko": "젓다",
      "en": "stir",
      "ex": [
       {
        "ko": "나무 수저로 저어",
        "en": "stir with a wooden spoon"
       },
       {
        "ko": "같이 저어",
        "en": "stir together"
       },
       {
        "ko": "잘 저어",
        "en": "stir well"
       }
      ]
     },
     {
      "ko": "껍질 벗겼다",
      "en": "peeled",
      "ex": [
       {
        "ko": "더 많은 레몬 껍질을 벗겼어",
        "en": "peeled more lemons"
       },
       {
        "ko": "귤 껍질을 벗겼어",
        "en": "peeled the tangerines"
       },
       {
        "ko": "자두 껍질을 벗겼어",
        "en": "peeled the plums"
       }
      ]
     },
     {
      "ko": "메뉴를 봤다",
      "en": "saw the menu",
      "ex": [
       {
        "ko": "웹사이트에서 메뉴를 봤어",
        "en": "saw the menu on the Website"
       },
       {
        "ko": "이미 메뉴를 봤어",
        "en": "saw the menu already"
       },
       {
        "ko": "어제 메뉴를 봤어",
        "en": "saw the menu yesterday"
       }
      ]
     },
     {
      "ko": "나누어 계산했다",
      "en": "shared the bill",
      "ex": [
       {
        "ko": "그들과 나눠 계산했어",
        "en": "shared the bill with them"
       },
       {
        "ko": "우리와 나눠 계산했어",
        "en": "shared the bill with us"
       },
       {
        "ko": "그들은 나눠 계산했어.",
        "en": "They shared the bill."
       }
      ]
     },
     {
      "ko": "썰었다",
      "en": "sliced",
      "ex": [
       {
        "ko": "토마토를 썰었어",
        "en": "sliced the tomatoes"
       },
       {
        "ko": "치킨을 썰었어",
        "en": "sliced the chicken"
       },
       {
        "ko": "잘 썰었어",
        "en": "sliced well"
       }
      ]
     },
     {
      "ko": "저었다",
      "en": "stirred",
      "ex": [
       {
        "ko": "천천히 저었어",
        "en": "stirred slowly"
       },
       {
        "ko": "빨리 저었어",
        "en": "stirred fast"
       },
       {
        "ko": "수저로 저었어",
        "en": "stirred with a spoon"
       }
      ]
     },
     {
      "ko": "주문을 받다",
      "en": "take the order",
      "ex": [
       {
        "ko": "지금 주문을 받아",
        "en": "take the order now"
       },
       {
        "ko": "주문을 받아도 돼",
        "en": "can take the order"
       },
       {
        "ko": "주문을 받을 수 없어",
        "en": "can't take the order"
       }
      ]
     },
     {
      "ko": "한턱을 내다",
      "en": "treat",
      "ex": [
       {
        "ko": "나한테 저녁 쏴",
        "en": "treat me to dinner"
       },
       {
        "ko": "그에게 저녁 쏴",
        "en": "treat him to dinner"
       },
       {
        "ko": "그녀에게 점심 쏴",
        "en": "treat her to lunch"
       }
      ]
     },
     {
      "ko": "음식을 포장하다",
      "en": "wrap the leftovers",
      "ex": [
       {
        "ko": "음식을 포장할 수 있어",
        "en": "can wrap the leftovers"
       },
       {
        "ko": "음식을 포장할 필요가 있어",
        "en": "need to wrap the leftovers"
       },
       {
        "ko": "음식을 포장할 거야",
        "en": "will wrap the leftovers"
       }
      ]
     },
     {
      "ko": "양이 많다",
      "en": "be a lot",
      "ex": [
       {
        "ko": "그건 양이 많아.",
        "en": "It is a lot."
       },
       {
        "ko": "저건 양이 많아.",
        "en": "That is a lot."
       },
       {
        "ko": "이건 양이 많아.",
        "en": "This is a lot."
       }
      ]
     },
     {
      "ko": "배부르다",
      "en": "be full",
      "ex": [
       {
        "ko": "나는 배불러.",
        "en": "I am full."
       },
       {
        "ko": "너 배부르니?",
        "en": "Are you full?"
       },
       {
        "ko": "나는 배부르지 않아.",
        "en": "I am not full."
       }
      ]
     },
     {
      "ko": "주문을 받았다",
      "en": "took the order",
      "ex": [
       {
        "ko": "주인이 주문을 받았어.",
        "en": "The owner took the order."
       },
       {
        "ko": "점원이 주문을 받았어.",
        "en": "The clerk took the order."
       },
       {
        "ko": "남자가 주문을 받았어.",
        "en": "The man took the order."
       }
      ]
     },
     {
      "ko": "한턱을 냈다",
      "en": "treated",
      "ex": [
       {
        "ko": "다른 사람들에게 한턱을 냈어",
        "en": "treated others"
       },
       {
        "ko": "그들에게 한턱을 냈어",
        "en": "treated them"
       },
       {
        "ko": "우리에게 한턱을 냈어",
        "en": "treated us"
       }
      ]
     },
     {
      "ko": "음식을 포장했다",
      "en": "wrapped the leftovers",
      "ex": [
       {
        "ko": "나는 음식을 포장했어.",
        "en": "I wrapped the leftovers."
       },
       {
        "ko": "네가 음식을 포장했어.",
        "en": "You wrapped the leftovers."
       },
       {
        "ko": "사람들이 음식을 포장했어.",
        "en": "People wrapped the leftovers."
       }
      ]
     },
     {
      "ko": "양이 적다",
      "en": "be not enough",
      "ex": [
       {
        "ko": "음식이 양이 적어.",
        "en": "The food is not enough."
       },
       {
        "ko": "빵이 양이 적어.",
        "en": "The bread is not enough."
       },
       {
        "ko": "그것은 양이 적어.",
        "en": "It is not enough."
       }
      ]
     },
     {
      "ko": "배고프다",
      "en": "be hungry",
      "ex": [
       {
        "ko": "나는 항상 배고파.",
        "en": "I am always hungry."
       },
       {
        "ko": "너는 배고프니?",
        "en": "Are you hungry?"
       },
       {
        "ko": "나는 여전히 배고파.",
        "en": "I am still hungry."
       }
      ]
     }
    ]
   },
   {
    "theme": "일상용품 Commodities (1)",
    "items": [
     {
      "ko": "주소",
      "en": "address",
      "ex": [
       {
        "ko": "너의 주소를 알아",
        "en": "know your address"
       },
       {
        "ko": "걔의 주소를 몰라",
        "en": "don't know his address"
       },
       {
        "ko": "주소 알려줘!",
        "en": "Give me your address!"
       }
      ]
     },
     {
      "ko": "에어컨",
      "en": "air conditioner",
      "ex": [
       {
        "ko": "에어컨 있어",
        "en": "have an air conditioner"
       },
       {
        "ko": "에어컨 사용해",
        "en": "use an air conditioner"
       },
       {
        "ko": "에어컨 사",
        "en": "get an air conditioner"
       }
      ]
     },
     {
      "ko": "알레르기",
      "en": "allergy",
      "ex": [
       {
        "ko": "고양이 알레르기 있어",
        "en": "have an allergy to cats"
       },
       {
        "ko": "땅콩 알레르기 있어",
        "en": "have an allergy to peanuts"
       },
       {
        "ko": "해산물 알레르기 있어",
        "en": "have an allergy to seafood"
       }
      ]
     },
     {
      "ko": "아파트",
      "en": "apartment",
      "ex": [
       {
        "ko": "작은 아파트에서 살아",
        "en": "live in a small apartment"
       },
       {
        "ko": "아파트를 구해",
        "en": "look for an apartment"
       },
       {
        "ko": "새로운 아파트로 이사와",
        "en": "move to a new apartment"
       }
      ]
     },
     {
      "ko": "결재",
      "en": "approval",
      "ex": [
       {
        "ko": "그의 결재를 얻었어",
        "en": "got his approval"
       },
       {
        "ko": "그의 결재를 얻지 못했어",
        "en": "didn't get his approval"
       },
       {
        "ko": "그의 결재를 얻어야 해",
        "en": "must get his approval"
       }
      ]
     },
     {
      "ko": "정비소",
      "en": "auto repair shop",
      "ex": [
       {
        "ko": "정비소에 가",
        "en": "go to an auto repair shop"
       },
       {
        "ko": "정비소를 운영해",
        "en": "run an auto repair shop"
       },
       {
        "ko": "정비소를 찾았어",
        "en": "found an auto repair shop"
       }
      ]
     },
     {
      "ko": "(유명인의) 사인",
      "en": "autograph",
      "ex": [
       {
        "ko": "이시원에게 사인 받고 싶어",
        "en": "want an autograph from Siwon Lee"
       },
       {
        "ko": "걔에게 사인 해달라고 해",
        "en": "ask him for his autograph"
       },
       {
        "ko": "사인 해주실 수 있어요?",
        "en": "Can I have your autograph?"
       }
      ]
     },
     {
      "ko": "침실",
      "en": "bedroom",
      "ex": [
       {
        "ko": "침실에서 잠을 자",
        "en": "sleep in the bedroom"
       },
       {
        "ko": "침실에서 잠을 깼어",
        "en": "got up in the bedroom"
       },
       {
        "ko": "침실에서 옷을 입어",
        "en": "put on clothes in the bedroom"
       }
      ]
     },
     {
      "ko": "빵집",
      "en": "bakery",
      "ex": [
       {
        "ko": "빵집에서 일해",
        "en": "work at a bakery"
       },
       {
        "ko": "빵집에 가",
        "en": "go to a bakery"
       },
       {
        "ko": "빵집을 못 찾겠어",
        "en": "can't find a bakery"
       }
      ]
     },
     {
      "ko": "욕실",
      "en": "bathroom",
      "ex": [
       {
        "ko": "욕실에서 세수해",
        "en": "wash your face in the bathroom"
       },
       {
        "ko": "욕실에서 샤워해",
        "en": "take a shower in the bathroom"
       },
       {
        "ko": "욕실에서 이를 닦아",
        "en": "brush your teeth in the bathroom"
       }
      ]
     },
     {
      "ko": "욕조",
      "en": "bathtub",
      "ex": [
       {
        "ko": "욕조에 물을 부어",
        "en": "fill the bathtub with water"
       },
       {
        "ko": "욕조에서 나가",
        "en": "get out of the bathtub"
       },
       {
        "ko": "욕조에 들어가",
        "en": "get into the bathtub"
       }
      ]
     },
     {
      "ko": "침대",
      "en": "bed",
      "ex": [
       {
        "ko": "침대 위에 앉아",
        "en": "sit on the bed"
       },
       {
        "ko": "침대 위에 앉지 마!",
        "en": "Don't sit on the bed!"
       },
       {
        "ko": "침대 위에서 뛰지 마!",
        "en": "Don't jump on the bed!"
       }
      ]
     },
     {
      "ko": "미팅",
      "en": "blind date",
      "ex": [
       {
        "ko": "미팅 있어",
        "en": "have a blind date"
       },
       {
        "ko": "미팅 안 좋아해",
        "en": "don't like blind dates"
       },
       {
        "ko": "끔찍한 미팅이 있었어",
        "en": "had a terrible blind date"
       }
      ]
     },
     {
      "ko": "책장",
      "en": "bookshelf",
      "ex": [
       {
        "ko": "책장을 사",
        "en": "buy a bookshelf"
       },
       {
        "ko": "책장에 책이 많이 있어",
        "en": "have many books on the bookshelf"
       },
       {
        "ko": "그것을 책장 위에 놔",
        "en": "put it on the bookshelf"
       }
      ]
     },
     {
      "ko": "서점",
      "en": "bookstore",
      "ex": [
       {
        "ko": "서점에 가",
        "en": "go to a bookstore"
       },
       {
        "ko": "서점 못 찾겠어",
        "en": "can't find a bookstore"
       },
       {
        "ko": "서점에서 일해",
        "en": "work at a bookstore"
       }
      ]
     },
     {
      "ko": "원샷",
      "en": "bottoms up",
      "ex": [
       {
        "ko": "원샷!",
        "en": "Bottoms up, everybody!"
       },
       {
        "ko": "걔가 원샷하라고 말했어!",
        "en": "He said \"Bottoms up!\""
       },
       {
        "ko": "우리 친구들을 위해 건배!",
        "en": "To our friends, bottoms up!"
       }
      ]
     },
     {
      "ko": "메이커",
      "en": "brand name",
      "ex": [
       {
        "ko": "인기 많은 메이커야",
        "en": "be a popular brand name"
       },
       {
        "ko": "싼 메이커야",
        "en": "be a cheap brand name"
       },
       {
        "ko": "메이커 신발이 좀 있어",
        "en": "have some brand name shoes"
       }
      ]
     },
     {
      "ko": "빗자루",
      "en": "broom",
      "ex": [
       {
        "ko": "빗자루를 써",
        "en": "use a broom"
       },
       {
        "ko": "빗자루를 찾아",
        "en": "look for a broom"
       },
       {
        "ko": "새 빗자루 샀어",
        "en": "got a new broom"
       }
      ]
     },
     {
      "ko": "사업",
      "en": "business",
      "ex": [
       {
        "ko": "사업을 해",
        "en": "run a business"
       },
       {
        "ko": "사업을 시작해",
        "en": "start a business"
       },
       {
        "ko": "사업에 성공해",
        "en": "succeed in business"
       }
      ]
     },
     {
      "ko": "명함",
      "en": "business card",
      "ex": [
       {
        "ko": "네 명함을 내게 줘",
        "en": "give me your business card"
       },
       {
        "ko": "네 명함을 내게 보여줘",
        "en": "show me your business card"
       },
       {
        "ko": "네 명함을 갖고 있어",
        "en": "have your business card"
       }
      ]
     },
     {
      "ko": "출장",
      "en": "business trip",
      "ex": [
       {
        "ko": "출장을 가",
        "en": "go on a business trip"
       },
       {
        "ko": "출장을 위해 서울에 가",
        "en": "go to Seoul for a business trip"
       },
       {
        "ko": "출장을 위해 그것을 사",
        "en": "buy it for a business trip"
       }
      ]
     },
     {
      "ko": "택시",
      "en": "cab",
      "ex": [
       {
        "ko": "택시 타",
        "en": "take a cab"
       },
       {
        "ko": "택시 타자!",
        "en": "Let's take a cab!"
       },
       {
        "ko": "은행까지 택시 탔어",
        "en": "took a cab to the bank"
       }
      ]
     },
     {
      "ko": "달력",
      "en": "calendar",
      "ex": [
       {
        "ko": "달력을 확인해",
        "en": "check the calendar"
       },
       {
        "ko": "달력 위에 날짜를 표시해",
        "en": "circle a date on the calendar"
       },
       {
        "ko": "달력 위에 그것을 써",
        "en": "write it on the calendar"
       }
      ]
     },
     {
      "ko": "카메라",
      "en": "camera",
      "ex": [
       {
        "ko": "새 비디오 카메라 사",
        "en": "get a new video camera"
       },
       {
        "ko": "새 디지털 카메라 샀어",
        "en": "got a new digital camera"
       },
       {
        "ko": "아무 카메라도 없어",
        "en": "don't have any cameras"
       }
      ]
     },
     {
      "ko": "연예인",
      "en": "celebrity",
      "ex": [
       {
        "ko": "몇 명의 연예인을 알아",
        "en": "know some celebrities"
       },
       {
        "ko": "저 연예인 진짜 좋아",
        "en": "love that celebrity"
       },
       {
        "ko": "연예인이 돼",
        "en": "become a celebrity"
       }
      ]
     },
     {
      "ko": "휴대폰",
      "en": "cellphone",
      "ex": [
       {
        "ko": "휴대폰이 필요해",
        "en": "need a cellphone"
       },
       {
        "ko": "휴대폰을 사",
        "en": "buy a cellphone"
       },
       {
        "ko": "내 휴대폰을 잃어버렸어",
        "en": "lost my cellphone"
       }
      ]
     },
     {
      "ko": "의자",
      "en": "chair",
      "ex": [
       {
        "ko": "의자 위에 앉아",
        "en": "sit on a chair"
       },
       {
        "ko": "의자 아래에 가방을 내려놔",
        "en": "put the bag under the chair"
       },
       {
        "ko": "두 개의 의자가 있어",
        "en": "have two chairs"
       }
      ]
     },
     {
      "ko": "옷장",
      "en": "closet",
      "ex": [
       {
        "ko": "옷장에서 그것을 찾아",
        "en": "look for it in the closet"
       },
       {
        "ko": "옷장에서 꺼내",
        "en": "take out from the closet"
       },
       {
        "ko": "옷장에 그것을 넣어",
        "en": "put it in the closet"
       }
      ]
     },
     {
      "ko": "옷가게",
      "en": "clothing store",
      "ex": [
       {
        "ko": "옷 가게에서 일해",
        "en": "work at a clothing store"
       },
       {
        "ko": "옷 가게에 가",
        "en": "go to a clothing store"
       },
       {
        "ko": "그 옷 가게까지 운전해",
        "en": "drive to the clothing store"
       }
      ]
     },
     {
      "ko": "커피숍",
      "en": "coffee shop",
      "ex": [
       {
        "ko": "커피숍을 운영해",
        "en": "run a coffee shop"
       },
       {
        "ko": "커피숍에서 일해",
        "en": "work at a coffee shop"
       },
       {
        "ko": "커피숍에서 공부해",
        "en": "study at a coffee shop"
       }
      ]
     }
    ]
   },
   {
    "theme": "일상용품 Commodities (2)",
    "items": [
     {
      "ko": "개그맨",
      "en": "comedian",
      "ex": [
       {
        "ko": "유명한 개그맨이야",
        "en": "be a famous comedian"
       },
       {
        "ko": "개그맨 되고 싶어",
        "en": "want to be a comedian"
       },
       {
        "ko": "그 개그맨 봤어",
        "en": "saw the comedian"
       }
      ]
     },
     {
      "ko": "린스",
      "en": "conditioner",
      "ex": [
       {
        "ko": "내 머리에 린스 발라",
        "en": "put conditioner on my hair"
       },
       {
        "ko": "린스를 매일 써",
        "en": "use conditioner every day"
       },
       {
        "ko": "린스가 없어",
        "en": "don't have conditioner"
       }
      ]
     },
     {
      "ko": "계약",
      "en": "contract",
      "ex": [
       {
        "ko": "계약을 맺어",
        "en": "make a contract"
       },
       {
        "ko": "계약을 위반했어",
        "en": "violated a contract"
       },
       {
        "ko": "계약을 이행해",
        "en": "fulfill a contract"
       }
      ]
     },
     {
      "ko": "복사기",
      "en": "copy machine",
      "ex": [
       {
        "ko": "복사기를 사용해",
        "en": "use a copy machine"
       },
       {
        "ko": "복사기를 옮겨",
        "en": "move a copy machine"
       },
       {
        "ko": "복사기를 찾아",
        "en": "look for a copy machine"
       }
      ]
     },
     {
      "ko": "소파",
      "en": "couch",
      "ex": [
       {
        "ko": "소파 위에서 자",
        "en": "sleep on the couch"
       },
       {
        "ko": "소파 위에 앉아",
        "en": "sit on the couch"
       },
       {
        "ko": "소파를 옮겨",
        "en": "move the couch"
       }
      ]
     },
     {
      "ko": "커트라인",
      "en": "cut-off score",
      "ex": [
       {
        "ko": "커트라인 넘었어",
        "en": "passed the cut-off score"
       },
       {
        "ko": "커트라인 안 넘었어",
        "en": "didn't pass the cut-off score"
       },
       {
        "ko": "커트라인 넘어야 돼",
        "en": "should pass the cut-off score"
       }
      ]
     },
     {
      "ko": "백화점",
      "en": "department store",
      "ex": [
       {
        "ko": "백화점 못 찾겠어",
        "en": "can't find a department store"
       },
       {
        "ko": "백화점에 가",
        "en": "go to a department store"
       },
       {
        "ko": "백화점 찾아봐",
        "en": "look for a department store"
       }
      ]
     },
     {
      "ko": "책상",
      "en": "desk",
      "ex": [
       {
        "ko": "책상을 청소해",
        "en": "clean up the desk"
       },
       {
        "ko": "책상을 밀어",
        "en": "push the desk"
       },
       {
        "ko": "책상을 닦아",
        "en": "wipe the desk"
       }
      ]
     },
     {
      "ko": "스탠드",
      "en": "desk lamp",
      "ex": [
       {
        "ko": "싼 스탠드를 찾아",
        "en": "find a cheap desk lamp"
       },
       {
        "ko": "좋은 스탠드를 갖고 있어",
        "en": "have a nice desk lamp"
       },
       {
        "ko": "나에게 스탠드를 사줬어",
        "en": "bought me a desk lamp"
       }
      ]
     },
     {
      "ko": "데스크탑 컴퓨터",
      "en": "desktop computer",
      "ex": [
       {
        "ko": "새 데스크탑 컴퓨터를 원해",
        "en": "want a new desktop computer"
       },
       {
        "ko": "데스크탑 컴퓨터는 필요 없어",
        "en": "don't need a desktop computer"
       },
       {
        "ko": "좋은 데스크탑 컴퓨터가 있어",
        "en": "have a good desktop computer"
       }
      ]
     },
     {
      "ko": "세제",
      "en": "detergent",
      "ex": [
       {
        "ko": "그 세제를 찾았어",
        "en": "found the detergent"
       },
       {
        "ko": "충분한 세제가 있어",
        "en": "have enough detergent"
       },
       {
        "ko": "너무 많은 세제를 써",
        "en": "use too much detergent"
       }
      ]
     },
     {
      "ko": "원피스",
      "en": "dress",
      "ex": [
       {
        "ko": "검정 원피스 입어",
        "en": "wear a black dress"
       },
       {
        "ko": "파란 원피스 입었어",
        "en": "put on a blue dress"
       },
       {
        "ko": "저 원피스 입지 마!",
        "en": "Don't wear that dress!"
       }
      ]
     },
     {
      "ko": "화장대",
      "en": "dresser",
      "ex": [
       {
        "ko": "화장대 위에 그것을 놔",
        "en": "put it on the dresser"
       },
       {
        "ko": "화장대 위에서 그것을 찾아",
        "en": "look for it on the dresser"
       },
       {
        "ko": "화장대 위에 앉아",
        "en": "sit on the dresser"
       }
      ]
     },
     {
      "ko": "세탁소",
      "en": "dry cleaner",
      "ex": [
       {
        "ko": "내 정장을 세탁소에 맡겨",
        "en": "take my suit to the dry cleaner"
       },
       {
        "ko": "세탁소에서 가져와",
        "en": "pick up from the dry cleaner"
       },
       {
        "ko": "세탁소에서 일해",
        "en": "work at the dry cleaner"
       }
      ]
     },
     {
      "ko": "엘리베이터",
      "en": "elevator",
      "ex": [
       {
        "ko": "엘리베이터를 타",
        "en": "ride the elevator"
       },
       {
        "ko": "엘리베이터를 기다려",
        "en": "wait for the elevator"
       },
       {
        "ko": "엘리베이터를 이용해",
        "en": "use the elevator"
       }
      ]
     },
     {
      "ko": "이메일",
      "en": "e-mail",
      "ex": [
       {
        "ko": "내 이메일 확인해",
        "en": "check my e-mail"
       },
       {
        "ko": "걔에게 이메일 보내",
        "en": "send him an e-mail"
       },
       {
        "ko": "이메일에 답장해",
        "en": "reply to an e-mail"
       }
      ]
     },
     {
      "ko": "방석",
      "en": "floor cushion",
      "ex": [
       {
        "ko": "방석이 없어",
        "en": "have no floor cushion"
       },
       {
        "ko": "방석이 하나 있어",
        "en": "have a floor cushion"
       },
       {
        "ko": "방석이 두 개 있어",
        "en": "have two floor cushions"
       }
      ]
     },
     {
      "ko": "냉장고",
      "en": "fridge",
      "ex": [
       {
        "ko": "냉장고에 저장해둬",
        "en": "store in the fridge"
       },
       {
        "ko": "냉장고에 보관해둬",
        "en": "keep in the fridge"
       },
       {
        "ko": "냉장고에 넣어둬",
        "en": "put in the fridge"
       }
      ]
     },
     {
      "ko": "쓰레기",
      "en": "garbage",
      "ex": [
       {
        "ko": "이건 쓰레기로 꽉 차있어.",
        "en": "It's full of garbage."
       },
       {
        "ko": "저건 쓰레기 차야.",
        "en": "That's a garbage truck."
       },
       {
        "ko": "쓰레기 비워",
        "en": "take the garbage out"
       }
      ]
     },
     {
      "ko": "(자동차) 기름",
      "en": "gas",
      "ex": [
       {
        "ko": "기름이 필요해",
        "en": "need some gas"
       },
       {
        "ko": "기름이 필요 없어",
        "en": "don't need gas"
       },
       {
        "ko": "주유소에 가",
        "en": "go to a gas station"
       }
      ]
     },
     {
      "ko": "주유소",
      "en": "gas station",
      "ex": [
       {
        "ko": "주유소에 가",
        "en": "go to a gas station"
       },
       {
        "ko": "주유소에서 멈춰",
        "en": "stop at a gas station"
       },
       {
        "ko": "주유소에서 일해",
        "en": "work at a gas station"
       }
      ]
     },
     {
      "ko": "슈퍼",
      "en": "grocery store",
      "ex": [
       {
        "ko": "슈퍼를 가",
        "en": "go to the grocery store"
       },
       {
        "ko": "슈퍼에 있어",
        "en": "be in the grocery store"
       },
       {
        "ko": "슈퍼 할인쿠폰 있어",
        "en": "have grocery store coupons"
       }
      ]
     },
     {
      "ko": "복도",
      "en": "hallway",
      "ex": [
       {
        "ko": "복도에서 그를 만났어",
        "en": "met him in the hallway"
       },
       {
        "ko": "복도에서 너를 봤어",
        "en": "saw you in the hallway"
       },
       {
        "ko": "복도에서 뛰었어",
        "en": "ran in the hallway"
       }
      ]
     },
     {
      "ko": "사이드브레이크",
      "en": "hand brake",
      "ex": [
       {
        "ko": "사이드브레이크를 걸어",
        "en": "put on the hand brake"
       },
       {
        "ko": "사이드브레이크 쓰지마!",
        "en": "Don't use the hand brake!"
       },
       {
        "ko": "사이드브레이크를 풀어",
        "en": "release the hand brake"
       }
      ]
     },
     {
      "ko": "프린트물",
      "en": "handout",
      "ex": [
       {
        "ko": "걔네들에게 프린트물 줘",
        "en": "give them handouts"
       },
       {
        "ko": "프린트물 받아",
        "en": "get handouts"
       },
       {
        "ko": "그 프린트물 안 읽었어",
        "en": "didn't read the handouts"
       }
      ]
     },
     {
      "ko": "히터",
      "en": "heater",
      "ex": [
       {
        "ko": "히터가 없어",
        "en": "don't have a heater"
       },
       {
        "ko": "히터 필요 없어",
        "en": "don't need a heater"
       },
       {
        "ko": "히터를 사용해",
        "en": "use a heater"
       }
      ]
     },
     {
      "ko": "형광펜",
      "en": "highlighter",
      "ex": [
       {
        "ko": "형광펜 샀어",
        "en": "got a highlighter"
       },
       {
        "ko": "형광펜 찾았어",
        "en": "found a highlighter"
       },
       {
        "ko": "형광펜 없어",
        "en": "don't have a highlighter"
       }
      ]
     },
     {
      "ko": "온천",
      "en": "hot spring",
      "ex": [
       {
        "ko": "온천 좋아해",
        "en": "like hot springs"
       },
       {
        "ko": "온천에 가",
        "en": "go to a hot spring"
       },
       {
        "ko": "나 온천에 데려가 줘!",
        "en": "Take me to a hot spring!"
       }
      ]
     },
     {
      "ko": "호텔",
      "en": "hotel",
      "ex": [
       {
        "ko": "큰 호텔에서 머물렀어",
        "en": "stayed in a big hotel"
       },
       {
        "ko": "작은 호텔에서 머물렀어",
        "en": "stayed in a small hotel"
       },
       {
        "ko": "멋진 호텔에서 머물렀어",
        "en": "stayed in a nice hotel"
       }
      ]
     },
     {
      "ko": "부엌",
      "en": "kitchen",
      "ex": [
       {
        "ko": "부엌에서 설거지를 해",
        "en": "do the dishes in the kitchen"
       },
       {
        "ko": "부엌에서 커피를 마셔",
        "en": "drink coffee in the kitchen"
       },
       {
        "ko": "부엌에서 저녁을 만들어",
        "en": "cook dinner in the kitchen"
       }
      ]
     }
    ]
   },
   {
    "theme": "일상용품 Commodities (3)",
    "items": [
     {
      "ko": "노트북",
      "en": "laptop",
      "ex": [
       {
        "ko": "새 노트북을 샀어",
        "en": "got a new laptop"
       },
       {
        "ko": "너의 노트북이 좋아",
        "en": "like your laptop"
       },
       {
        "ko": "노트북이 없어",
        "en": "don't have a laptop"
       }
      ]
     },
     {
      "ko": "도서관",
      "en": "library",
      "ex": [
       {
        "ko": "도서관에서 공부해",
        "en": "study in the library"
       },
       {
        "ko": "도서관을 찾아",
        "en": "look for the library"
       },
       {
        "ko": "도서관 어딨어?",
        "en": "Where is the library?"
       }
      ]
     },
     {
      "ko": "라이터",
      "en": "lighter",
      "ex": [
       {
        "ko": "라이터를 가지고 있어",
        "en": "have a lighter"
       },
       {
        "ko": "라이터가 필요해",
        "en": "need a lighter"
       },
       {
        "ko": "너의 라이터 빌려도 돼?",
        "en": "Can I borrow your lighter?"
       }
      ]
     },
     {
      "ko": "거실",
      "en": "living room",
      "ex": [
       {
        "ko": "거실에서 놀아",
        "en": "play in the living room"
       },
       {
        "ko": "거실에서 점프해",
        "en": "jump in the living room"
       },
       {
        "ko": "거실에서 TV를 봐",
        "en": "watch TV in the living room"
       }
      ]
     },
     {
      "ko": "우편물",
      "en": "mail",
      "ex": [
       {
        "ko": "우편물을 읽어",
        "en": "read the mail"
       },
       {
        "ko": "그 편지에 답장해",
        "en": "reply to the mail"
       },
       {
        "ko": "우편물을 보내",
        "en": "send the mail"
       }
      ]
     },
     {
      "ko": "매직",
      "en": "marker",
      "ex": [
       {
        "ko": "매직 찾고 있어",
        "en": "look for a marker"
       },
       {
        "ko": "매직 필요 없어",
        "en": "don't need a marker"
       },
       {
        "ko": "여기에 너의 매직 있어.",
        "en": "Here is your marker."
       }
      ]
     },
     {
      "ko": "마스크",
      "en": "mask",
      "ex": [
       {
        "ko": "마스크 팩이 필요해",
        "en": "need a mask pack"
       },
       {
        "ko": "마스크 팩 조금 사",
        "en": "get some mask packs"
       },
       {
        "ko": "웃긴 가면을 써",
        "en": "wear a funny mask"
       }
      ]
     },
     {
      "ko": "안방",
      "en": "master bedroom",
      "ex": [
       {
        "ko": "안방으로 들어가",
        "en": "go into the master bedroom"
       },
       {
        "ko": "안방에서 나가",
        "en": "out of the master bedroom"
       },
       {
        "ko": "안방으로 들어와",
        "en": "come into the master bedroom"
       }
      ]
     },
     {
      "ko": "회의",
      "en": "meeting",
      "ex": [
       {
        "ko": "회의가 있어",
        "en": "have a meeting"
       },
       {
        "ko": "회의에 참석해",
        "en": "attend a meeting"
       },
       {
        "ko": "회의를 소집해",
        "en": "call a meeting"
       }
      ]
     },
     {
      "ko": "전자레인지",
      "en": "microwave",
      "ex": [
       {
        "ko": "전자레인지에 그것을 넣어",
        "en": "put it into the microwave"
       },
       {
        "ko": "전자레인지를 사용해",
        "en": "use a microwave"
       },
       {
        "ko": "전자레인지에서 요리해",
        "en": "cook in the microwave"
       }
      ]
     },
     {
      "ko": "대걸레",
      "en": "mop",
      "ex": [
       {
        "ko": "걸레를 적셔",
        "en": "wet a mop"
       },
       {
        "ko": "대걸레 못 찾겠어",
        "en": "can't find a mop"
       },
       {
        "ko": "지금 대걸레 필요해",
        "en": "need a mop right now"
       }
      ]
     },
     {
      "ko": "영화관",
      "en": "movie theater",
      "ex": [
       {
        "ko": "영화관 가",
        "en": "go to the movie theater"
       },
       {
        "ko": "영화관에서 일해",
        "en": "work at the movie theater"
       },
       {
        "ko": "영화관 근처에 살아",
        "en": "live close to the movie theater"
       }
      ]
     },
     {
      "ko": "매니큐어",
      "en": "nail polish",
      "ex": [
       {
        "ko": "핑크 매니큐어를 발라",
        "en": "put on pink nail polish"
       },
       {
        "ko": "검정 매니큐어를 발라",
        "en": "put on black nail polish"
       },
       {
        "ko": "빨간 매니큐어를 사",
        "en": "get a red nail polish"
       }
      ]
     },
     {
      "ko": "종이",
      "en": "paper",
      "ex": [
       {
        "ko": "종이 위에 써",
        "en": "write on the paper"
       },
       {
        "ko": "종이 위에 그려",
        "en": "draw on the paper"
       },
       {
        "ko": "종이를 잘라",
        "en": "cut the paper"
       }
      ]
     },
     {
      "ko": "클립",
      "en": "paper clip",
      "ex": [
       {
        "ko": "클립이 필요해",
        "en": "need some paper clips"
       },
       {
        "ko": "항상 클립을 써",
        "en": "always use paper clips"
       },
       {
        "ko": "클립을 못 찾겠어",
        "en": "can't find any paper clips"
       }
      ]
     },
     {
      "ko": "전화번호",
      "en": "phone number",
      "ex": [
       {
        "ko": "걔의 번호를 알고 싶어",
        "en": "want to know his phone number"
       },
       {
        "ko": "그녀의 번호를 몰라",
        "en": "don't know her phone number"
       },
       {
        "ko": "너 번호가 뭐야?",
        "en": "What's your phone number?"
       }
      ]
     },
     {
      "ko": "비닐봉투",
      "en": "plastic bag",
      "ex": [
       {
        "ko": "이거 비닐봉투 안에 넣어",
        "en": "put it in a plastic bag"
       },
       {
        "ko": "이거 비닐봉투 안에 보관해",
        "en": "keep it in a plastic bag"
       },
       {
        "ko": "비닐봉투가 많아",
        "en": "have a lot of plastic bags"
       }
      ]
     },
     {
      "ko": "트럼프",
      "en": "playing cards",
      "ex": [
       {
        "ko": "트럼프 있어",
        "en": "have playing cards"
       },
       {
        "ko": "트럼프 진짜 좋아해",
        "en": "love playing cards"
       },
       {
        "ko": "트럼프 갖고 싶어",
        "en": "want playing cards"
       }
      ]
     },
     {
      "ko": "프린터기",
      "en": "printer",
      "ex": [
       {
        "ko": "최신의 프린터기 있어",
        "en": "have a brand new printer"
       },
       {
        "ko": "고가의 프린터기 있어",
        "en": "have an expensive printer"
       },
       {
        "ko": "레이저 프린터기 샀어",
        "en": "got a laser printer"
       }
      ]
     },
     {
      "ko": "승진",
      "en": "promotion",
      "ex": [
       {
        "ko": "승진했어",
        "en": "got a promotion"
       },
       {
        "ko": "빠르게 승진했어",
        "en": "got a rapid promotion"
       },
       {
        "ko": "승진의 기회가 있어",
        "en": "have a chance of promotion"
       }
      ]
     },
     {
      "ko": "핸드백",
      "en": "purse",
      "ex": [
       {
        "ko": "새 핸드백을 사",
        "en": "get a new purse"
       },
       {
        "ko": "비싼 핸드백을 사",
        "en": "get an expensive purse"
       },
       {
        "ko": "핸드백을 진짜 좋아해",
        "en": "love purses"
       }
      ]
     },
     {
      "ko": "앙케이트",
      "en": "questionnaire",
      "ex": [
       {
        "ko": "앙케이트에 답해",
        "en": "answer a questionnaire"
       },
       {
        "ko": "앙케이트에 답 안해",
        "en": "don't answer a questionnaire"
       },
       {
        "ko": "앙케이트 싫어해",
        "en": "hate questionnaires"
       }
      ]
     },
     {
      "ko": "리모컨",
      "en": "remote control",
      "ex": [
       {
        "ko": "리모컨 못 찾겠어",
        "en": "can't find the remote control"
       },
       {
        "ko": "리모컨 잃어버렸어",
        "en": "lost the remote control"
       },
       {
        "ko": "리모컨 세 개 있어",
        "en": "have three remote controls"
       }
      ]
     },
     {
      "ko": "보고",
      "en": "report",
      "ex": [
       {
        "ko": "보고를 받아",
        "en": "receive a report"
       },
       {
        "ko": "보고를 해",
        "en": "give a report"
       },
       {
        "ko": "보고를 받지 못했어",
        "en": "didn't receive a report"
       }
      ]
     },
     {
      "ko": "식당",
      "en": "restaurant",
      "ex": [
       {
        "ko": "좋은 식당을 알아",
        "en": "know a good restaurant"
       },
       {
        "ko": "중국 음식점에 가",
        "en": "go to a Chinese restaurant"
       },
       {
        "ko": "이탈리아 음식점에 가",
        "en": "go to an Italian restaurant"
       }
      ]
     },
     {
      "ko": "성과",
      "en": "result",
      "ex": [
       {
        "ko": "좋은 성과를 얻었어",
        "en": "got a good result"
       },
       {
        "ko": "좋은 성과를 얻지 못했어",
        "en": "didn't get a good result"
       },
       {
        "ko": "성과가 없었어",
        "en": "had no result"
       }
      ]
     },
     {
      "ko": "샐러리맨",
      "en": "salaried employee",
      "ex": [
       {
        "ko": "샐러리맨이 돼",
        "en": "be a salaried employee"
       },
       {
        "ko": "샐러리맨 되는 거 싫어",
        "en": "hate to be a salaried employee"
       },
       {
        "ko": "샐러리맨을 고용해",
        "en": "hire a salaried employee"
       }
      ]
     },
     {
      "ko": "월급",
      "en": "salary",
      "ex": [
       {
        "ko": "월급을 탔어",
        "en": "got my salary"
       },
       {
        "ko": "내 월급으로 살아",
        "en": "live on my salary"
       },
       {
        "ko": "더 높은 월급을 받길 원해",
        "en": "want to get a higher salary"
       }
      ]
     },
     {
      "ko": "머플러",
      "en": "scarf",
      "ex": [
       {
        "ko": "머플러를 매",
        "en": "wear a scarf"
       },
       {
        "ko": "멋진 머플러를 매",
        "en": "wear a nice scarf"
       },
       {
        "ko": "머플러 안 매",
        "en": "don't wear a scarf"
       }
      ]
     },
     {
      "ko": "메모지",
      "en": "scratch paper",
      "ex": [
       {
        "ko": "메모지에 그것을 써",
        "en": "write it on a scratch paper"
       },
       {
        "ko": "메모지를 붙여",
        "en": "attach the scratch paper"
       },
       {
        "ko": "메모지를 접어",
        "en": "fold the scratch paper"
       }
      ]
     }
    ]
   },
   {
    "theme": "일상용품 Commodities (4)",
    "items": [
     {
      "ko": "서명",
      "en": "signature",
      "ex": [
       {
        "ko": "너 서명 여기에 필요해",
        "en": "need your signature here"
       },
       {
        "ko": "새로운 서명을 만들어",
        "en": "make a new signature"
       },
       {
        "ko": "내 서명 없어",
        "en": "don't have my signature"
       }
      ]
     },
     {
      "ko": "싱크대",
      "en": "sink",
      "ex": [
       {
        "ko": "더러운 싱크대가 있어",
        "en": "have a dirty sink"
       },
       {
        "ko": "깨끗한 싱크대가 있어",
        "en": "have a clean sink"
       },
       {
        "ko": "작은 싱크대가 있어",
        "en": "have a small sink"
       }
      ]
     },
     {
      "ko": "슬리퍼",
      "en": "slippers",
      "ex": [
       {
        "ko": "슬리퍼를 내게 갖다 줘",
        "en": "bring me slippers"
       },
       {
        "ko": "슬리퍼가 필요해",
        "en": "need slippers"
       },
       {
        "ko": "슬리퍼를 신어",
        "en": "wear slippers"
       }
      ]
     },
     {
      "ko": "비누",
      "en": "soap",
      "ex": [
       {
        "ko": "(고체) 비누를 써",
        "en": "use a bar of soap"
       },
       {
        "ko": "액체 비누를 써",
        "en": "use liquid soap"
       },
       {
        "ko": "내 얼굴을 비누로 씻어",
        "en": "wash my face with soap"
       }
      ]
     },
     {
      "ko": "드라마",
      "en": "soap opera",
      "ex": [
       {
        "ko": "그 드라마를 봐",
        "en": "watch the soap opera"
       },
       {
        "ko": "그 드라마 안 봐",
        "en": "don't watch the soap opera"
       },
       {
        "ko": "그 드라마를 좋아해",
        "en": "like the soap opera"
       }
      ]
     },
     {
      "ko": "소다",
      "en": "soda",
      "ex": [
       {
        "ko": "소다 마셔",
        "en": "drink some soda"
       },
       {
        "ko": "소다 안 좋아해",
        "en": "don't like soda"
       },
       {
        "ko": "소다를 사",
        "en": "get some soda"
       }
      ]
     },
     {
      "ko": "계단",
      "en": "stair",
      "ex": [
       {
        "ko": "계단을 올라가",
        "en": "go up the stairs"
       },
       {
        "ko": "계단을 내려가",
        "en": "go down the stairs"
       },
       {
        "ko": "계단을 이용해야 해",
        "en": "have to take the stairs"
       }
      ]
     },
     {
      "ko": "스테이플러",
      "en": "stapler",
      "ex": [
       {
        "ko": "스테이플러 있어",
        "en": "have a stapler"
       },
       {
        "ko": "스테이플러 못 찾겠어",
        "en": "can't find a stapler"
       },
       {
        "ko": "스테이플러 필요해",
        "en": "need a stapler"
       }
      ]
     },
     {
      "ko": "문구점",
      "en": "stationery store",
      "ex": [
       {
        "ko": "문구점에 가",
        "en": "go to a stationery store"
       },
       {
        "ko": "그 문구점에 도착해",
        "en": "get to the stationery store"
       },
       {
        "ko": "문구점을 찾았어",
        "en": "found a stationery store"
       }
      ]
     },
     {
      "ko": "포스트잇",
      "en": "sticky note",
      "ex": [
       {
        "ko": "포스트잇을 찾아봐",
        "en": "look for sticky notes"
       },
       {
        "ko": "많은 포스트잇을 써",
        "en": "use a lot of sticky notes"
       },
       {
        "ko": "포스트잇은 유용해.",
        "en": "Sticky notes are useful."
       }
      ]
     },
     {
      "ko": "가스레인지",
      "en": "stove",
      "ex": [
       {
        "ko": "가스레인지를 사",
        "en": "buy the stove"
       },
       {
        "ko": "가스레인지에서 팬을 달궈",
        "en": "heat the pan on the stove"
       },
       {
        "ko": "가스레인지에서 물을 끓여",
        "en": "boil the water on the stove"
       }
      ]
     },
     {
      "ko": "원룸",
      "en": "studio",
      "ex": [
       {
        "ko": "원룸에서 살아",
        "en": "live in a studio"
       },
       {
        "ko": "내 원룸은 너무 작아.",
        "en": "My studio is too small."
       },
       {
        "ko": "원룸을 안 좋아해",
        "en": "don't like studios"
       }
      ]
     },
     {
      "ko": "서재",
      "en": "study",
      "ex": [
       {
        "ko": "서재에서 책을 읽어",
        "en": "read books in the study"
       },
       {
        "ko": "서재에서 바닥을 청소해",
        "en": "wipe the floor in the study"
       },
       {
        "ko": "서재에서 쉬어",
        "en": "take a rest in the study"
       }
      ]
     },
     {
      "ko": "캐리어",
      "en": "suitcase",
      "ex": [
       {
        "ko": "새 캐리어를 사",
        "en": "buy a new suitcase"
       },
       {
        "ko": "그 여행에 캐리어를 가져가",
        "en": "carry a suitcase on the trip"
       },
       {
        "ko": "캐리어가 없어",
        "en": "don't have a suitcase"
       }
      ]
     },
     {
      "ko": "식탁",
      "en": "table",
      "ex": [
       {
        "ko": "그것을 식탁 위에 올려놔",
        "en": "put it on the table"
       },
       {
        "ko": "이것을 식탁 위에 올려놔",
        "en": "put this on the table"
       },
       {
        "ko": "컵을 식탁 위에 올려놔",
        "en": "put the cup on the table"
       }
      ]
     },
     {
      "ko": "전화기",
      "en": "telephone",
      "ex": [
       {
        "ko": "전화기를 써도 돼",
        "en": "can use the telephone"
       },
       {
        "ko": "전화를 받아",
        "en": "answer the telephone"
       },
       {
        "ko": "전화기를 찾아",
        "en": "find a telephone"
       }
      ]
     },
     {
      "ko": "베란다",
      "en": "terrace",
      "ex": [
       {
        "ko": "베란다에서 놀았어",
        "en": "played on the terrace"
       },
       {
        "ko": "우리집에 베란다가 있어.",
        "en": "There is a terrace in my house."
       },
       {
        "ko": "베란다에서 하늘을 봐",
        "en": "see the sky from the terrace"
       }
      ]
     },
     {
      "ko": "변기",
      "en": "toilet",
      "ex": [
       {
        "ko": "변기를 사용해",
        "en": "use the toilet"
       },
       {
        "ko": "변기를 고쳐",
        "en": "fix the toilet"
       },
       {
        "ko": "변기를 사용하지 마!",
        "en": "Don't use the toilet!"
       }
      ]
     },
     {
      "ko": "휴지",
      "en": "toilet paper",
      "ex": [
       {
        "ko": "휴지를 써",
        "en": "use toilet paper"
       },
       {
        "ko": "휴지를 사야 돼",
        "en": "need to buy toilet paper"
       },
       {
        "ko": "휴지가 없어",
        "en": "don't have toilet paper"
       }
      ]
     },
     {
      "ko": "수건",
      "en": "towel",
      "ex": [
       {
        "ko": "말리려고 수건을 써",
        "en": "use a towel to dry"
       },
       {
        "ko": "그 수건은 젖었어.",
        "en": "The towel is wet."
       },
       {
        "ko": "수건이 필요해",
        "en": "need towels"
       }
      ]
     },
     {
      "ko": "쓰레기통",
      "en": "trashcan",
      "ex": [
       {
        "ko": "새로운 쓰레기통이 필요해",
        "en": "need a new trash can"
       },
       {
        "ko": "부엌 쓰레기통이 있어",
        "en": "have a kitchen trash can"
       },
       {
        "ko": "쓰레기를 쓰레기통에 버려",
        "en": "put the garbage in the trash can"
       }
      ]
     },
     {
      "ko": "텔레비전",
      "en": "TV",
      "ex": [
       {
        "ko": "텔레비전을 봐",
        "en": "watch TV"
       },
       {
        "ko": "대형 텔레비전이 있어",
        "en": "have a big screen TV"
       },
       {
        "ko": "그것을 텔레비전에서 봤어",
        "en": "saw it on TV"
       }
      ]
     },
     {
      "ko": "집게",
      "en": "tweezer",
      "ex": [
       {
        "ko": "집게로 그것을 고정해",
        "en": "hold it with tweezers"
       },
       {
        "ko": "집게를 사용해",
        "en": "use tweezers"
       },
       {
        "ko": "집게를 사",
        "en": "buy tweezers"
       }
      ]
     },
     {
      "ko": "휴가",
      "en": "vacation",
      "ex": [
       {
        "ko": "휴가 때 해외로 여행했어",
        "en": "traveled abroad on vacation"
       },
       {
        "ko": "휴가 때 영어를 배웠어",
        "en": "learned English on vacation"
       },
       {
        "ko": "휴가 때 책을 읽었어",
        "en": "read books on vacation"
       }
      ]
     },
     {
      "ko": "진공청소기",
      "en": "vacuum cleaner",
      "ex": [
       {
        "ko": "진공청소기를 사용해",
        "en": "use a vacuum cleaner"
       },
       {
        "ko": "새 진공청소기를 구입했어",
        "en": "bought a new vacuum cleaner"
       },
       {
        "ko": "내게 진공청소기를 갖다 줘",
        "en": "give me the vacuum cleaner"
       }
      ]
     },
     {
      "ko": "벽시계",
      "en": "wall clock",
      "ex": [
       {
        "ko": "벽시계를 봐",
        "en": "look at the wall clock"
       },
       {
        "ko": "벽시계를 확인해",
        "en": "check the wall clock"
       },
       {
        "ko": "벽시계를 찾아",
        "en": "find the wall clock"
       }
      ]
     },
     {
      "ko": "창고",
      "en": "warehouse",
      "ex": [
       {
        "ko": "의자를 창고에 넣어",
        "en": "put the chair in the warehouse"
       },
       {
        "ko": "식탁을 창고에 넣어",
        "en": "put the table in the warehouse"
       },
       {
        "ko": "책을 창고에 넣어",
        "en": "put the book in the warehouse"
       }
      ]
     },
     {
      "ko": "세면대",
      "en": "wash basin",
      "ex": [
       {
        "ko": "세면대를 물로 채워",
        "en": "fill the wash basin with water"
       },
       {
        "ko": "(물 등이) 세면대에서 빠져나가",
        "en": "drain out of the wash basin"
       },
       {
        "ko": "세면대에 그것을 부어",
        "en": "pour it into the wash basin"
       }
      ]
     },
     {
      "ko": "세탁기",
      "en": "washing machine",
      "ex": [
       {
        "ko": "세탁기에 빨래를 넣어",
        "en": "load the washing machine"
       },
       {
        "ko": "세탁기에서 빨래를 꺼내",
        "en": "unload the washing machine"
       },
       {
        "ko": "세탁기를 돌려",
        "en": "run the washing machine"
       }
      ]
     },
     {
      "ko": "지퍼",
      "en": "zipper",
      "ex": [
       {
        "ko": "지퍼가 앞에 달렸어",
        "en": "have zippers on the front"
       },
       {
        "ko": "지퍼를 열어",
        "en": "undo the zippers"
       },
       {
        "ko": "너 지퍼 열렸어.",
        "en": "Your zipper is undone."
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "cat": "감각표현",
  "icon": "👀",
  "color": "#10b981",
  "desc": "감각·느낌을 나타내는 표현",
  "themes": [
   {
    "theme": "감각 Senses (1)",
    "items": [
     {
      "ko": "농담하다",
      "en": "joke",
      "ex": [
       {
        "ko": "항상 농담해",
        "en": "joke all the time"
       },
       {
        "ko": "농담하는 거 좋아해",
        "en": "like to joke"
       },
       {
        "ko": "농담하지마!",
        "en": "Don't make a joke!"
       }
      ]
     },
     {
      "ko": "내기하다",
      "en": "bet",
      "ex": [
       {
        "ko": "10불 내기해",
        "en": "bet $10"
       },
       {
        "ko": "이거에 내기해",
        "en": "bet on this"
       },
       {
        "ko": "내기하기 싫어",
        "en": "don't want to bet"
       }
      ]
     },
     {
      "ko": "끓이다",
      "en": "boil",
      "ex": [
       {
        "ko": "물을 끓여",
        "en": "boil the water"
       },
       {
        "ko": "주전자에 물을 끓여",
        "en": "boil the kettle of water"
       },
       {
        "ko": "수프를 끓여",
        "en": "boil the soup"
       }
      ]
     },
     {
      "ko": "머리를 빗다",
      "en": "brush the hair",
      "ex": [
       {
        "ko": "일할 때 머리를 빗어",
        "en": "brush my hair at work"
       },
       {
        "ko": "집에서 머리를 빗어",
        "en": "brush your hair at home"
       },
       {
        "ko": "여기에서 머리를 빗어",
        "en": "brush your hair here"
       }
      ]
     },
     {
      "ko": "양치하다",
      "en": "brush the teeth",
      "ex": [
       {
        "ko": "매일 양치해",
        "en": "brush my teeth every day"
       },
       {
        "ko": "밤에 양치해",
        "en": "brush your teeth at night"
       },
       {
        "ko": "하루에 두 번 양치해",
        "en": "brush my teeth twice a day"
       }
      ]
     },
     {
      "ko": "농담했다",
      "en": "joked",
      "ex": [
       {
        "ko": "그것에 대해 농담했어",
        "en": "joked about it"
       },
       {
        "ko": "장난쳤어",
        "en": "joked around"
       },
       {
        "ko": "걔가 그것에 대해 농담했어.",
        "en": "He joked about that."
       }
      ]
     },
     {
      "ko": "내기했다",
      "en": "bet",
      "ex": [
       {
        "ko": "20불 내기했어",
        "en": "bet $20"
       },
       {
        "ko": "스포츠에 내기했어",
        "en": "bet on sports"
       },
       {
        "ko": "그 축구경기에 내기했어",
        "en": "bet on the soccer match"
       }
      ]
     },
     {
      "ko": "끓였다",
      "en": "boiled",
      "ex": [
       {
        "ko": "우유를 끓였어",
        "en": "boiled some milk"
       },
       {
        "ko": "냄비에 물을 끓였어",
        "en": "boiled a pot of water"
       },
       {
        "ko": "차를 끓였어",
        "en": "boiled some tea"
       }
      ]
     },
     {
      "ko": "머리를 빗었다",
      "en": "brushed the hair",
      "ex": [
       {
        "ko": "내 머리를 다시 빗었어",
        "en": "brushed my hair again"
       },
       {
        "ko": "내 머리를 천천히 빗었어",
        "en": "brushed my hair slowly"
       },
       {
        "ko": "내 머리를 잘 빗었어",
        "en": "brushed my hair well"
       }
      ]
     },
     {
      "ko": "양치했다",
      "en": "brushed the teeth",
      "ex": [
       {
        "ko": "그녀는 양치했어.",
        "en": "She brushed her teeth."
       },
       {
        "ko": "걔는 양치했어.",
        "en": "He brushed his teeth."
       },
       {
        "ko": "나는 양치했어.",
        "en": "I brushed my teeth."
       }
      ]
     },
     {
      "ko": "나르다",
      "en": "carry",
      "ex": [
       {
        "ko": "많은 책을 날라",
        "en": "carry a lot of books"
       },
       {
        "ko": "박스를 날라",
        "en": "carry boxes"
       },
       {
        "ko": "내 짐을 날라",
        "en": "carry my luggage"
       }
      ]
     },
     {
      "ko": "응원하다",
      "en": "cheer",
      "ex": [
       {
        "ko": "그 팀을 응원해",
        "en": "cheer for the team"
       },
       {
        "ko": "걔를 응원해",
        "en": "cheer for him"
       },
       {
        "ko": "그녀를 응원해",
        "en": "cheer for her"
       }
      ]
     },
     {
      "ko": "울다",
      "en": "cry",
      "ex": [
       {
        "ko": "하루 종일 울어",
        "en": "cry all day long"
       },
       {
        "ko": "많이 울어",
        "en": "cry a lot"
       },
       {
        "ko": "큰 소리로 울어",
        "en": "cry loudly"
       }
      ]
     },
     {
      "ko": "찾다",
      "en": "find",
      "ex": [
       {
        "ko": "가게를 찾아",
        "en": "find a store"
       },
       {
        "ko": "신발을 찾아",
        "en": "find shoes"
       },
       {
        "ko": "그 책을 찾아",
        "en": "find the book"
       }
      ]
     },
     {
      "ko": "구름이 있다",
      "en": "have clouds",
      "ex": [
       {
        "ko": "먹구름이 있어",
        "en": "have dark clouds"
       },
       {
        "ko": "큰 구름이 있어",
        "en": "have big clouds"
       },
       {
        "ko": "항상 구름이 있어",
        "en": "always have clouds"
       }
      ]
     },
     {
      "ko": "날랐다",
      "en": "carried",
      "ex": [
       {
        "ko": "걔의 물건을 날랐어",
        "en": "carried his stuff"
       },
       {
        "ko": "그녀의 물건을 날랐어",
        "en": "carried her stuff"
       },
       {
        "ko": "그 테이블을 날랐어",
        "en": "carried the table"
       }
      ]
     },
     {
      "ko": "응원했다",
      "en": "cheered",
      "ex": [
       {
        "ko": "걔의 팀을 응원했어",
        "en": "cheered for his team"
       },
       {
        "ko": "걔네들을 응원했어",
        "en": "cheered for them"
       },
       {
        "ko": "같이 응원했어",
        "en": "cheered together"
       }
      ]
     },
     {
      "ko": "울었다",
      "en": "cried",
      "ex": [
       {
        "ko": "친구와 함께 울었어",
        "en": "cried with my friend"
       },
       {
        "ko": "함께 울었어",
        "en": "cried together"
       },
       {
        "ko": "결코 울지 않았어",
        "en": "never cried"
       }
      ]
     },
     {
      "ko": "찾았다",
      "en": "found",
      "ex": [
       {
        "ko": "그 식료품 가게를 찾았어",
        "en": "found the grocery store"
       },
       {
        "ko": "내 지갑을 찾았어",
        "en": "found my wallet"
       },
       {
        "ko": "그 반지를 찾았어",
        "en": "found the ring"
       }
      ]
     },
     {
      "ko": "구름이 있었다",
      "en": "had clouds",
      "ex": [
       {
        "ko": "구름 몇 개가 있었어",
        "en": "had few clouds"
       },
       {
        "ko": "검은 구름이 있었어",
        "en": "had black clouds"
       },
       {
        "ko": "하늘에 구름이 있었어",
        "en": "had clouds in the sky"
       }
      ]
     },
     {
      "ko": "비가오다",
      "en": "have rain",
      "ex": [
       {
        "ko": "오늘밤에 비가 올 거야",
        "en": "will have rain tonight"
       },
       {
        "ko": "올해에 비가 많이 올 거야",
        "en": "will have a lot of rain this year"
       },
       {
        "ko": "다음주에 비가 약간 올 거야",
        "en": "will have some rain next week"
       }
      ]
     },
     {
      "ko": "눈이오다",
      "en": "have snow",
      "ex": [
       {
        "ko": "여기에 눈이 안 와",
        "en": "don't have snow here"
       },
       {
        "ko": "내일 눈이 와",
        "en": "have snow tomorrow"
       },
       {
        "ko": "부드러운 눈이 와",
        "en": "have soft snow"
       }
      ]
     },
     {
      "ko": "해가 쨍쨍하다",
      "en": "have sunshine",
      "ex": [
       {
        "ko": "해가 비치지 않아",
        "en": "have no sunshine"
       },
       {
        "ko": "밝은 해가 비쳐",
        "en": "have bright sunshine"
       },
       {
        "ko": "항상 해가 비쳐",
        "en": "always have sunshine"
       }
      ]
     },
     {
      "ko": "듣다",
      "en": "hear",
      "ex": [
       {
        "ko": "소음을 들어",
        "en": "hear noises"
       },
       {
        "ko": "아무것도 듣지 못해",
        "en": "can't hear anything"
       },
       {
        "ko": "뉴스를 들어",
        "en": "hear the news"
       }
      ]
     },
     {
      "ko": "다림질하다",
      "en": "iron",
      "ex": [
       {
        "ko": "그 옷 다림질 해",
        "en": "iron the clothes"
       },
       {
        "ko": "그 셔츠 다림질 해",
        "en": "iron the shirt"
       },
       {
        "ko": "그 치마 다림질 해",
        "en": "iron the skirt"
       }
      ]
     },
     {
      "ko": "비가 왔다",
      "en": "had rain",
      "ex": [
       {
        "ko": "비가 너무 많이 왔어",
        "en": "had too much rain"
       },
       {
        "ko": "비가 너무 적게 왔어",
        "en": "had too little rain"
       },
       {
        "ko": "비가 상당히 많이 왔어",
        "en": "had so much rain"
       }
      ]
     },
     {
      "ko": "눈이 왔다",
      "en": "had snow",
      "ex": [
       {
        "ko": "적은 눈이 왔어",
        "en": "had little snow"
       },
       {
        "ko": "많은 눈이 왔어",
        "en": "had a lot of snow"
       },
       {
        "ko": "어제 눈이 왔어",
        "en": "had snow yesterday"
       }
      ]
     },
     {
      "ko": "해가 쨍쨍했다",
      "en": "had sunshine",
      "ex": [
       {
        "ko": "해가 밝게 비쳤어",
        "en": "had bright sunshine"
       },
       {
        "ko": "해가 아름답게 비쳤어",
        "en": "had beautiful sunshine"
       },
       {
        "ko": "어제 해가 쨍쨍했어",
        "en": "had sunshine yesterday"
       }
      ]
     },
     {
      "ko": "들었다",
      "en": "heard",
      "ex": [
       {
        "ko": "소음을 들었어",
        "en": "heard noises"
       },
       {
        "ko": "그것에 관해 들었어",
        "en": "heard about it"
       },
       {
        "ko": "소리를 들었어",
        "en": "heard the sound"
       }
      ]
     },
     {
      "ko": "다림질했다",
      "en": "ironed",
      "ex": [
       {
        "ko": "그녀가 그 옷 다림질했어.",
        "en": "She ironed the clothes."
       },
       {
        "ko": "걔네들이 그 옷 다림질했어.",
        "en": "They ironed the clothes."
       },
       {
        "ko": "우리 엄마가 그 옷 다림질했어.",
        "en": "My mom ironed the clothes."
       }
      ]
     }
    ]
   },
   {
    "theme": "감각 Senses (2)",
    "items": [
     {
      "ko": "웃다",
      "en": "laugh",
      "ex": [
       {
        "ko": "그를 비웃어",
        "en": "laugh at him"
       },
       {
        "ko": "너를 비웃어",
        "en": "laugh at you"
       },
       {
        "ko": "전혀 웃지 않아",
        "en": "don't laugh at all"
       }
      ]
     },
     {
      "ko": "보다",
      "en": "look",
      "ex": [
       {
        "ko": "나를 봐",
        "en": "look at me"
       },
       {
        "ko": "볼 수 있어",
        "en": "can look at it"
       },
       {
        "ko": "그를 봐",
        "en": "look at him"
       }
      ]
     },
     {
      "ko": "이사하다",
      "en": "move",
      "ex": [
       {
        "ko": "이사하고 싶어",
        "en": "want to move"
       },
       {
        "ko": "서울로 이사해",
        "en": "move to Seoul"
       },
       {
        "ko": "곧 이사와",
        "en": "move in soon"
       }
      ]
     },
     {
      "ko": "옷을 고르다",
      "en": "pick out the clothes",
      "ex": [
       {
        "ko": "내 옷을 골라",
        "en": "pick out my clothes"
       },
       {
        "ko": "걔의 옷을 골라",
        "en": "pick out his clothes"
       },
       {
        "ko": "그녀의 옷을 골라",
        "en": "pick out her clothes"
       }
      ]
     },
     {
      "ko": "분리수거하다",
      "en": "recycle",
      "ex": [
       {
        "ko": "항상 분리수거해",
        "en": "always recycle"
       },
       {
        "ko": "매 번 분리수거해",
        "en": "recycle every time"
       },
       {
        "ko": "이거 분리수거할 수 있어",
        "en": "can recycle this"
       }
      ]
     },
     {
      "ko": "웃었다",
      "en": "laughed",
      "ex": [
       {
        "ko": "내 대답에 비웃었어",
        "en": "laughed at my answer"
       },
       {
        "ko": "내 제안에 비웃었어",
        "en": "laughed at my proposal"
       },
       {
        "ko": "조용히 웃었어",
        "en": "laughed silently"
       }
      ]
     },
     {
      "ko": "보았다",
      "en": "looked",
      "ex": [
       {
        "ko": "네 머리를 봤어",
        "en": "looked at your hair"
       },
       {
        "ko": "하늘을 봤어",
        "en": "looked at the sky"
       },
       {
        "ko": "꽃을 봤어",
        "en": "looked at the flower"
       }
      ]
     },
     {
      "ko": "이사했다",
      "en": "moved",
      "ex": [
       {
        "ko": "저번주에 이사 왔어",
        "en": "moved in last week"
       },
       {
        "ko": "이미 이사했어",
        "en": "already moved"
       },
       {
        "ko": "우리는 이사했어.",
        "en": "We moved."
       }
      ]
     },
     {
      "ko": "옷을 골랐다",
      "en": "picked out the clothes",
      "ex": [
       {
        "ko": "데이트를 위해 옷을 골랐어",
        "en": "picked out the clothes for a date"
       },
       {
        "ko": "이것을 위해 옷을 골랐어",
        "en": "picked out the clothes for it"
       },
       {
        "ko": "학교 가려고 옷을 골랐어",
        "en": "picked out the clothes for school"
       }
      ]
     },
     {
      "ko": "분리수거했다",
      "en": "recycled",
      "ex": [
       {
        "ko": "신문을 분리수거했어",
        "en": "recycled newspapers"
       },
       {
        "ko": "유리병을 분리수거했어",
        "en": "recycled glass bottles"
       },
       {
        "ko": "음료수 캔을 분리수거했어",
        "en": "recycled soda cans"
       }
      ]
     },
     {
      "ko": "초인종을 누르다",
      "en": "ring the doorbell",
      "ex": [
       {
        "ko": "초인종을 한 번 눌러",
        "en": "ring the doorbell once"
       },
       {
        "ko": "빨리 초인종을 눌러",
        "en": "ring the doorbell quickly"
       },
       {
        "ko": "초인종을 눌러야 돼",
        "en": "should ring the doorbell"
       }
      ]
     },
     {
      "ko": "보다",
      "en": "see",
      "ex": [
       {
        "ko": "영화를 봐",
        "en": "see a movie"
       },
       {
        "ko": "소녀를 봐",
        "en": "see a girl"
       },
       {
        "ko": "저것을 봐",
        "en": "see that"
       }
      ]
     },
     {
      "ko": "냄새를 맡다",
      "en": "smell",
      "ex": [
       {
        "ko": "음식 냄새 맡아",
        "en": "smell the food"
       },
       {
        "ko": "커피 냄새 맡아",
        "en": "smell the coffee"
       },
       {
        "ko": "차 냄새 맡아",
        "en": "smell the tea"
       }
      ]
     },
     {
      "ko": "웃다",
      "en": "smile",
      "ex": [
       {
        "ko": "항상 웃어",
        "en": "always smile"
       },
       {
        "ko": "다시 웃어",
        "en": "smile again"
       },
       {
        "ko": "결코 웃지 않아",
        "en": "never smile"
       }
      ]
     },
     {
      "ko": "삶다",
      "en": "steam",
      "ex": [
       {
        "ko": "채소를 삶아",
        "en": "steam some vegetables"
       },
       {
        "ko": "시금치를 삶아",
        "en": "steam some spinach"
       },
       {
        "ko": "달걀을 삶아",
        "en": "steam the eggs"
       }
      ]
     },
     {
      "ko": "초인종을 눌렀다",
      "en": "rang the doorbell",
      "ex": [
       {
        "ko": "다시 초인종을 눌렀어",
        "en": "rang the doorbell again"
       },
       {
        "ko": "이미 초인종을 눌렀어",
        "en": "already rang the doorbell"
       },
       {
        "ko": "막 초인종을 눌렀어",
        "en": "just rang the doorbell"
       }
      ]
     },
     {
      "ko": "보았다",
      "en": "saw",
      "ex": [
       {
        "ko": "그를 봤어",
        "en": "saw him"
       },
       {
        "ko": "그걸 어젯밤에 봤어",
        "en": "saw it last night"
       },
       {
        "ko": "무언가를 봤어",
        "en": "saw something"
       }
      ]
     },
     {
      "ko": "냄새를 맡았다",
      "en": "smelled",
      "ex": [
       {
        "ko": "냄새를 맡았어",
        "en": "smelled the odor"
       },
       {
        "ko": "사과 냄새를 맡았어",
        "en": "smelled the apple"
       },
       {
        "ko": "오렌지 냄새를 맡았어",
        "en": "smelled the orange"
       }
      ]
     },
     {
      "ko": "웃었다",
      "en": "smiled",
      "ex": [
       {
        "ko": "부드럽게 웃었어",
        "en": "smiled gently"
       },
       {
        "ko": "행복하게 웃었어",
        "en": "smiled happily"
       },
       {
        "ko": "활기차게 웃었어",
        "en": "smiled cheerfully"
       }
      ]
     },
     {
      "ko": "삶았다",
      "en": "steamed",
      "ex": [
       {
        "ko": "감자를 삶았어",
        "en": "steamed some potatoes"
       },
       {
        "ko": "고구마를 삶았어",
        "en": "steamed some sweet potatoes"
       },
       {
        "ko": "브로콜리를 삶았어",
        "en": "steamed some broccoli"
       }
      ]
     },
     {
      "ko": "만져보다",
      "en": "touch",
      "ex": [
       {
        "ko": "그것을 만져봐!",
        "en": "Touch it!"
       },
       {
        "ko": "그녀의 이마를 만져봐",
        "en": "touch her forehead"
       },
       {
        "ko": "내 손을 만져봐",
        "en": "touch my hand"
       }
      ]
     },
     {
      "ko": "불을 끄다",
      "en": "turn off the light",
      "ex": [
       {
        "ko": "곧 불을 꺼",
        "en": "turn off the light soon"
       },
       {
        "ko": "좀 이따가 불을 꺼",
        "en": "turn off the light later"
       },
       {
        "ko": "불 좀 꺼주세요!",
        "en": "Turn off the light, please!"
       }
      ]
     },
     {
      "ko": "TV를 끄다",
      "en": "turn off the TV",
      "ex": [
       {
        "ko": "먹으려고 TV 꺼",
        "en": "turn off the TV to eat"
       },
       {
        "ko": "전화하려고 TV 꺼",
        "en": "turn off the TV to call"
       },
       {
        "ko": "TV 꺼주세요!",
        "en": "Turn off the TV, please!"
       }
      ]
     },
     {
      "ko": "불을 켜다",
      "en": "turn on the light",
      "ex": [
       {
        "ko": "빨리 불을 켜",
        "en": "turn on the light quickly"
       },
       {
        "ko": "불 켜지 마세요!",
        "en": "Don't turn on the light!"
       },
       {
        "ko": "불을 켜 주세요!",
        "en": "Turn on the light, please!"
       }
      ]
     },
     {
      "ko": "TV를 켜다",
      "en": "turn on the TV",
      "ex": [
       {
        "ko": "저녁에 TV를 켜",
        "en": "turn on the TV at night"
       },
       {
        "ko": "저녁 후에 TV를 켜",
        "en": "turn on the TV after dinner"
       },
       {
        "ko": "TV 켜주실 수 있어요?",
        "en": "Can you turn on the TV?"
       }
      ]
     },
     {
      "ko": "만져봤다",
      "en": "touched",
      "ex": [
       {
        "ko": "네 가방을 만져봤어",
        "en": "touched your bag"
       },
       {
        "ko": "이 개를 만져봤어",
        "en": "touched this dog"
       },
       {
        "ko": "이 차를 만져봤어",
        "en": "touched this car"
       }
      ]
     },
     {
      "ko": "불을 껐다",
      "en": "turned off the light",
      "ex": [
       {
        "ko": "그녀가 불을 껐어.",
        "en": "She turned off the light."
       },
       {
        "ko": "걔가 불을 껐어.",
        "en": "He turned off the light."
       },
       {
        "ko": "내 아들이 불을 껐어.",
        "en": "My son turned off the light."
       }
      ]
     },
     {
      "ko": "TV를 껐다",
      "en": "turned off the TV",
      "ex": [
       {
        "ko": "막 TV 껐어",
        "en": "just turned off the TV"
       },
       {
        "ko": "드디어 TV 껐어",
        "en": "finally turned off the TV"
       },
       {
        "ko": "빨리 TV 껐어",
        "en": "turned off the TV quickly"
       }
      ]
     },
     {
      "ko": "불을 켰다",
      "en": "turned on the light",
      "ex": [
       {
        "ko": "막 불을 켰어",
        "en": "just turned on the light"
       },
       {
        "ko": "몇 분 전에 불을 켰어",
        "en": "turned on the light a few minutes ago"
       },
       {
        "ko": "걔가 불을 켰어.",
        "en": "He turned on the light."
       }
      ]
     },
     {
      "ko": "TV를 켰다",
      "en": "turned on the TV",
      "ex": [
       {
        "ko": "그녀가 TV 켰어.",
        "en": "She turned on the TV."
       },
       {
        "ko": "내가 TV 켰어.",
        "en": "I turned on the TV."
       },
       {
        "ko": "걔가 TV 켰어.",
        "en": "He turned on the TV."
       }
      ]
     }
    ]
   },
   {
    "theme": "감각 Senses (3)",
    "items": [
     {
      "ko": "채널을 돌리다",
      "en": "turn to channel",
      "ex": [
       {
        "ko": "11번으로 채널 돌려",
        "en": "turn to channel 11"
       },
       {
        "ko": "7번으로 채널 돌려",
        "en": "turn to channel 7"
       },
       {
        "ko": "5번으로 채널 바꾸지 마!",
        "en": "Don't turn to channel 5!"
       }
      ]
     },
     {
      "ko": "소리를 낮추다",
      "en": "turn down the volume",
      "ex": [
       {
        "ko": "지금 소리 낮춰",
        "en": "turn down the volume now"
       },
       {
        "ko": "소리 낮춰야 해",
        "en": "must turn down the volume"
       },
       {
        "ko": "좀 이따 소리 낮춰",
        "en": "turn down the volume later"
       }
      ]
     },
     {
      "ko": "소리를 높이다",
      "en": "turn up the volume",
      "ex": [
       {
        "ko": "TV 소리를 높여",
        "en": "turn up the volume on the TV"
       },
       {
        "ko": "라디오 소리를 높여야 해",
        "en": "have to turn up the volume on the radio"
       },
       {
        "ko": "소리 좀 높여주세요!",
        "en": "Turn up the volume, please!"
       }
      ]
     },
     {
      "ko": "청소기로 밀다",
      "en": "vacuum",
      "ex": [
       {
        "ko": "카펫을 청소기로 밀어야 해",
        "en": "should vacuum the carpet"
       },
       {
        "ko": "바닥을 청소기로 밀어",
        "en": "vacuum the floor"
       },
       {
        "ko": "거실을 청소기로 밀어",
        "en": "vacuum the living room"
       }
      ]
     },
     {
      "ko": "세수하다",
      "en": "wash the face",
      "ex": [
       {
        "ko": "아침에 세수해",
        "en": "wash my face in the morning"
       },
       {
        "ko": "나가기 전에 세수해",
        "en": "wash your face before leaving"
       },
       {
        "ko": "세수해!",
        "en": "Wash your face!"
       }
      ]
     },
     {
      "ko": "채널을 돌렸다",
      "en": "turned to channel",
      "ex": [
       {
        "ko": "6번으로 채널 돌렸어",
        "en": "turned to channel 6"
       },
       {
        "ko": "13번으로 채널 돌렸어",
        "en": "turned to channel 13"
       },
       {
        "ko": "걔는 채널을 11번으로 바꿨어.",
        "en": "He turned to channel 11."
       }
      ]
     },
     {
      "ko": "소리를 낮췄다",
      "en": "turned down the volume",
      "ex": [
       {
        "ko": "나 소리를 낮췄어.",
        "en": "I turned down the volume."
       },
       {
        "ko": "그녀는 소리를 낮췄어.",
        "en": "She turned down the volume."
       },
       {
        "ko": "걔는 소리를 낮췄어.",
        "en": "He turned down the volume."
       }
      ]
     },
     {
      "ko": "소리를 높였다",
      "en": "turned up the volume",
      "ex": [
       {
        "ko": "내가 소리를 높였어.",
        "en": "I turned up the volume."
       },
       {
        "ko": "그녀가 소리를 높였어.",
        "en": "She turned up the volume."
       },
       {
        "ko": "걔가 소리를 높였어.",
        "en": "He turned up the volume."
       }
      ]
     },
     {
      "ko": "청소기로 밀었다",
      "en": "vacuumed",
      "ex": [
       {
        "ko": "빨리 청소기로 밀었어",
        "en": "vacuumed quickly"
       },
       {
        "ko": "청소기로 잘 밀었어",
        "en": "vacuumed well"
       },
       {
        "ko": "청소기로 조심히 밀었어",
        "en": "vacuumed carefully"
       }
      ]
     },
     {
      "ko": "세수했다",
      "en": "washed the face",
      "ex": [
       {
        "ko": "그녀는 세수했어.",
        "en": "She washed her face."
       },
       {
        "ko": "나는 세수했어.",
        "en": "I washed my face."
       },
       {
        "ko": "내 아들은 세수했어.",
        "en": "My son washed his face."
       }
      ]
     },
     {
      "ko": "머리를 감다",
      "en": "wash the hair",
      "ex": [
       {
        "ko": "매일 머리를 감아",
        "en": "wash my hair every day"
       },
       {
        "ko": "매일 저녁에 머리 감아",
        "en": "wash my hair every night"
       },
       {
        "ko": "머리 감아!",
        "en": "Wash your hair!"
       }
      ]
     },
     {
      "ko": "낭비하다",
      "en": "waste",
      "ex": [
       {
        "ko": "시간을 낭비해",
        "en": "waste time"
       },
       {
        "ko": "돈을 낭비해",
        "en": "waste money"
       },
       {
        "ko": "물을 낭비해",
        "en": "waste water"
       }
      ]
     },
     {
      "ko": "보다",
      "en": "watch",
      "ex": [
       {
        "ko": "텔레비전을 봐",
        "en": "watch television"
       },
       {
        "ko": "내 아기를 봐",
        "en": "watch my baby"
       },
       {
        "ko": "그녀를 봐",
        "en": "watch her"
       }
      ]
     },
     {
      "ko": "향수를 뿌리다",
      "en": "wear perfume",
      "ex": [
       {
        "ko": "그녀는 향수를 뿌려.",
        "en": "She wears perfume."
       },
       {
        "ko": "우리 엄마는 향수를 뿌려.",
        "en": "My mom wears perfume."
       },
       {
        "ko": "걔는 향수를 뿌려.",
        "en": "He wears perfume."
       }
      ]
     },
     {
      "ko": "소리치다",
      "en": "yell",
      "ex": [
       {
        "ko": "그 팀에게 소리쳐",
        "en": "yell to the team"
       },
       {
        "ko": "그 선수에게 소리쳐",
        "en": "yell to the player"
       },
       {
        "ko": "소리치지 마!",
        "en": "Don't yell!"
       }
      ]
     },
     {
      "ko": "머리를 감았다",
      "en": "washed the hair",
      "ex": [
       {
        "ko": "걔는 머리 감았어.",
        "en": "He washed his hair."
       },
       {
        "ko": "나는 머리 감았어.",
        "en": "I washed my hair."
       },
       {
        "ko": "그녀는 머리 감았어.",
        "en": "She washed her hair."
       }
      ]
     },
     {
      "ko": "낭비했다",
      "en": "wasted",
      "ex": [
       {
        "ko": "에너지를 낭비했어",
        "en": "wasted energy"
       },
       {
        "ko": "기름을 낭비했어",
        "en": "wasted oil"
       },
       {
        "ko": "종이를 낭비했어",
        "en": "wasted paper"
       }
      ]
     },
     {
      "ko": "보았다",
      "en": "watched",
      "ex": [
       {
        "ko": "사람들을 봤어",
        "en": "watched people"
       },
       {
        "ko": "그들을 봤어",
        "en": "watched them"
       },
       {
        "ko": "축구 경기를 봤어",
        "en": "watched the soccer game"
       }
      ]
     },
     {
      "ko": "향수를 뿌렸다",
      "en": "wore perfume",
      "ex": [
       {
        "ko": "저녁에 향수 뿌렸어",
        "en": "wore perfume at night"
       },
       {
        "ko": "일하고 나서 향수 뿌렸어",
        "en": "wore perfume after work"
       },
       {
        "ko": "향수 뿌렸어",
        "en": "wore perfume"
       }
      ]
     },
     {
      "ko": "소리쳤다",
      "en": "yelled",
      "ex": [
       {
        "ko": "걔의 이름을 소리쳤어",
        "en": "yelled his name"
       },
       {
        "ko": "그녀의 이름을 소리쳤어",
        "en": "yelled her name"
       },
       {
        "ko": "걔에게 고함 질렀어",
        "en": "yelled at him"
       }
      ]
     },
     {
      "ko": "새 거다",
      "en": "be new",
      "ex": [
       {
        "ko": "내 휴대폰은 새 거야.",
        "en": "My cellphone is new."
       },
       {
        "ko": "걔의 가방은 새 거야.",
        "en": "His backpack is new."
       },
       {
        "ko": "내 옷은 새 거야.",
        "en": "My clothes are new."
       }
      ]
     },
     {
      "ko": "정말 놀랐어",
      "en": "be amazed",
      "ex": [
       {
        "ko": "나는 정말 놀랐어.",
        "en": "I am amazed."
       },
       {
        "ko": "그녀는 정말 놀랐어.",
        "en": "She is amazed."
       },
       {
        "ko": "걔는 정말 놀랐었어.",
        "en": "He was amazed."
       }
      ]
     },
     {
      "ko": "끔찍하다",
      "en": "be awful",
      "ex": [
       {
        "ko": "저건 끔찍해.",
        "en": "That is awful."
       },
       {
        "ko": "그 영화는 끔찍했어.",
        "en": "The movie was awful."
       },
       {
        "ko": "이 노래 진짜 안 좋아.",
        "en": "This song is awful."
       }
      ]
     },
     {
      "ko": "나쁘다",
      "en": "be bad",
      "ex": [
       {
        "ko": "흡연은 나빠.",
        "en": "Smoking is bad."
       },
       {
        "ko": "음주는 나빠.",
        "en": "Drinking is bad."
       },
       {
        "ko": "그 영화는 나쁘지 않았어.",
        "en": "The movie was not bad."
       }
      ]
     },
     {
      "ko": "발랄하다",
      "en": "be cheerful",
      "ex": [
       {
        "ko": "그녀는 항상 발랄해.",
        "en": "She is always cheerful."
       },
       {
        "ko": "걔네들은 발랄했어.",
        "en": "They were cheerful."
       },
       {
        "ko": "난 발랄한 사람이 좋아.",
        "en": "I like cheerful people."
       }
      ]
     },
     {
      "ko": "닫혔다",
      "en": "be closed",
      "ex": [
       {
        "ko": "그 도서관은 닫혔어.",
        "en": "The library is closed."
       },
       {
        "ko": "그 은행은 닫혔어.",
        "en": "The bank is closed."
       },
       {
        "ko": "그 커피숍은 닫혔었어.",
        "en": "The coffee shop was closed."
       }
      ]
     },
     {
      "ko": "편안하다",
      "en": "be comfortable",
      "ex": [
       {
        "ko": "그 옷은 편안해.",
        "en": "The clothes are comfortable."
       },
       {
        "ko": "내 침대는 진짜 편안해.",
        "en": "My bed is very comfortable."
       },
       {
        "ko": "그 소파는 편해.",
        "en": "The sofa is comfortable."
       }
      ]
     },
     {
      "ko": "자신감있다",
      "en": "be confident",
      "ex": [
       {
        "ko": "나 지금 자신있어.",
        "en": "I am confident now."
       },
       {
        "ko": "걔네들은 항상 자신감 있어.",
        "en": "They are always confident."
       },
       {
        "ko": "자신감을 가져!",
        "en": "Be confident!"
       }
      ]
     },
     {
      "ko": "정직하지 않다",
      "en": "be dishonest",
      "ex": [
       {
        "ko": "그녀는 가끔 정직하지 않아.",
        "en": "She is sometimes dishonest."
       },
       {
        "ko": "걔네들은 진짜 정직하지 않아.",
        "en": "They are so dishonest."
       },
       {
        "ko": "난 부정직한 사람 싫어.",
        "en": "I hate dishonest people."
       }
      ]
     },
     {
      "ko": "일찍이다",
      "en": "be early",
      "ex": [
       {
        "ko": "너무 일러.",
        "en": "It's too early."
       },
       {
        "ko": "그 회의는 일찍 있었어.",
        "en": "The meeting was early."
       },
       {
        "ko": "내 면접은 일찍 있었어.",
        "en": "My interview was early."
       }
      ]
     }
    ]
   },
   {
    "theme": "감각 Senses (4)",
    "items": [
     {
      "ko": "비어있다",
      "en": "be empty",
      "ex": [
       {
        "ko": "그 박스가 비어있어.",
        "en": "The box is empty."
       },
       {
        "ko": "내 방에 아무도 없어.",
        "en": "My room is empty."
       },
       {
        "ko": "빈 좌석이 있어.",
        "en": "There are empty seats."
       }
      ]
     },
     {
      "ko": "훌륭하다",
      "en": "be excellent",
      "ex": [
       {
        "ko": "걔의 업무는 훌륭했어.",
        "en": "His work was excellent."
       },
       {
        "ko": "그 콘서트는 훌륭했어.",
        "en": "The concert was excellent."
       },
       {
        "ko": "이 음식은 훌륭해.",
        "en": "This food is excellent."
       }
      ]
     },
     {
      "ko": "좋다",
      "en": "be fine",
      "ex": [
       {
        "ko": "괜찮아.",
        "en": "That's fine."
       },
       {
        "ko": "날씨 괜찮아.",
        "en": "The weather is fine."
       },
       {
        "ko": "괜찮은 날이야.",
        "en": "It's a fine day."
       }
      ]
     },
     {
      "ko": "평평하다",
      "en": "be flat",
      "ex": [
       {
        "ko": "이거 평평해.",
        "en": "This is flat."
       },
       {
        "ko": "그 땅은 평평해.",
        "en": "The ground is flat."
       },
       {
        "ko": "그 표면은 평평해.",
        "en": "The surface is flat."
       }
      ]
     },
     {
      "ko": "안개가 껴 있다",
      "en": "be foggy",
      "ex": [
       {
        "ko": "내일 안개가 낄 거야",
        "en": "will be foggy tomorrow"
       },
       {
        "ko": "이것에 안개가 껴 있어",
        "en": "be foggy in this place"
       },
       {
        "ko": "산에 안개가 껴 있어",
        "en": "be foggy at the mountain"
       }
      ]
     },
     {
      "ko": "꽉 차있다",
      "en": "be full",
      "ex": [
       {
        "ko": "그 병은 꽉 차있어.",
        "en": "The bottle is full."
       },
       {
        "ko": "그 유리잔은 꽉 차있어.",
        "en": "The glass is full."
       },
       {
        "ko": "내 스케줄은 꽉 차있어.",
        "en": "My schedule is full."
       }
      ]
     },
     {
      "ko": "관대하다",
      "en": "be generous",
      "ex": [
       {
        "ko": "내 동료는 관대해.",
        "en": "My coworker is generous."
       },
       {
        "ko": "그녀는 정말 관대해.",
        "en": "She is so generous."
       },
       {
        "ko": "걔네들은 관대하지 않아.",
        "en": "They are not generous."
       }
      ]
     },
     {
      "ko": "정직하다",
      "en": "be honest",
      "ex": [
       {
        "ko": "그녀는 정말 정직해.",
        "en": "She is so honest."
       },
       {
        "ko": "난 더 정직해져야 돼.",
        "en": "I should be more honest."
       },
       {
        "ko": "솔직해져!",
        "en": "Be honest!"
       }
      ]
     },
     {
      "ko": "덥다",
      "en": "be hot",
      "ex": [
       {
        "ko": "상당히 더워",
        "en": "be very hot"
       },
       {
        "ko": "정말 더워",
        "en": "be really hot"
       },
       {
        "ko": "여기는 더워",
        "en": "be hot here"
       }
      ]
     },
     {
      "ko": "거대하다",
      "en": "be huge",
      "ex": [
       {
        "ko": "내 회사는 거대해.",
        "en": "My company is huge."
       },
       {
        "ko": "너의 아파트는 거대해.",
        "en": "Your apartment is huge."
       },
       {
        "ko": "그녀의 개는 엄청 커.",
        "en": "Her dog is huge."
       }
      ]
     },
     {
      "ko": "겸손하다",
      "en": "be humble",
      "ex": [
       {
        "ko": "내 친구들은 겸손해.",
        "en": "My friends are humble."
       },
       {
        "ko": "내 선생님은 진짜 겸손해.",
        "en": "My teacher is very humble."
       },
       {
        "ko": "나 겸손해지려고 노력해.",
        "en": "I try to be humble."
       }
      ]
     },
     {
      "ko": "상처받다",
      "en": "be hurt",
      "ex": [
       {
        "ko": "나는 걔에게 상처받았어.",
        "en": "I was hurt by him."
       },
       {
        "ko": "내 친구는 상처받았어.",
        "en": "My friend was hurt."
       },
       {
        "ko": "누군가 상처받을 수 있어.",
        "en": "Somebody might be hurt."
       }
      ]
     },
     {
      "ko": "성급하다",
      "en": "be impatient",
      "ex": [
       {
        "ko": "그녀는 정말 성급해.",
        "en": "She is so impatient."
       },
       {
        "ko": "걔네들은 성급했어.",
        "en": "They were impatient."
       },
       {
        "ko": "성급해하지 마!",
        "en": "Don't be impatient!"
       }
      ]
     },
     {
      "ko": "질투하다",
      "en": "be jealous",
      "ex": [
       {
        "ko": "나는 그녀를 질투해.",
        "en": "I am jealous of her."
       },
       {
        "ko": "그녀는 나를 질투했어.",
        "en": "She was jealous of me."
       },
       {
        "ko": "질투하지 마!",
        "en": "Don't be jealous!"
       }
      ]
     },
     {
      "ko": "늦다",
      "en": "be late",
      "ex": [
       {
        "ko": "그 기차가 늦었어.",
        "en": "The train was late."
       },
       {
        "ko": "이게 너무 늦었어.",
        "en": "It was too late."
       },
       {
        "ko": "그 배송이 늦었어.",
        "en": "The delivery was late."
       }
      ]
     },
     {
      "ko": "작다",
      "en": "be little",
      "ex": [
       {
        "ko": "내 방은 작아.",
        "en": "My room is little."
       },
       {
        "ko": "그 아이는 작아.",
        "en": "The kid is little."
       },
       {
        "ko": "그 고양이는 진짜 작아.",
        "en": "The cat is so little."
       }
      ]
     },
     {
      "ko": "느슨하다",
      "en": "be loose",
      "ex": [
       {
        "ko": "걔의 안전벨트가 느슨해.",
        "en": "His seat belt is loose."
       },
       {
        "ko": "규율이 느슨해.",
        "en": "The rules are loose."
       },
       {
        "ko": "내 옷은 느슨해.",
        "en": "My clothes are loose."
       }
      ]
     },
     {
      "ko": "심술궂다",
      "en": "be mean",
      "ex": [
       {
        "ko": "걔는 정말 심술궂어.",
        "en": "He is really mean."
       },
       {
        "ko": "그녀는 오늘 심술궂었어.",
        "en": "She was mean today."
       },
       {
        "ko": "심술궂게 하지마!",
        "en": "Don't be mean!"
       }
      ]
     },
     {
      "ko": "지저분하다",
      "en": "be messy",
      "ex": [
       {
        "ko": "걔의 방은 항상 지저분해.",
        "en": "His room is always messy."
       },
       {
        "ko": "그녀의 부엌은 지저분해.",
        "en": "Her kitchen is messy."
       },
       {
        "ko": "내 방은 지저분하지 않아.",
        "en": "My room is not messy."
       }
      ]
     },
     {
      "ko": "우울하다",
      "en": "be miserable",
      "ex": [
       {
        "ko": "나 우울해.",
        "en": "I am miserable."
       },
       {
        "ko": "그녀는 우울했어.",
        "en": "She was miserable."
       },
       {
        "ko": "걔네들은 우울했어.",
        "en": "They were miserable."
       }
      ]
     },
     {
      "ko": "현대적이다",
      "en": "be modern",
      "ex": [
       {
        "ko": "이거는 현대적이야.",
        "en": "It's modern."
       },
       {
        "ko": "이 호텔은 현대적이야.",
        "en": "This hotel is modern."
       },
       {
        "ko": "이 집은 현대적이야.",
        "en": "This house is modern."
       }
      ]
     },
     {
      "ko": "좁다",
      "en": "be narrow",
      "ex": [
       {
        "ko": "이 길은 좁아.",
        "en": "This street is narrow."
       },
       {
        "ko": "그 차선은 너무 좁아.",
        "en": "The lane is too narrow."
       },
       {
        "ko": "저 창문들은 좁아.",
        "en": "Those windows are narrow."
       }
      ]
     },
     {
      "ko": "형편없다",
      "en": "be nasty",
      "ex": [
       {
        "ko": "이건 형편없어.",
        "en": "It's nasty."
       },
       {
        "ko": "날씨가 안 좋아.",
        "en": "The weather is nasty."
       },
       {
        "ko": "이 음식은 형편없어.",
        "en": "This food is nasty."
       }
      ]
     },
     {
      "ko": "깔끔하다",
      "en": "be neat",
      "ex": [
       {
        "ko": "네 집은 깔끔해.",
        "en": "Your house is neat."
       },
       {
        "ko": "내 방은 깔끔해.",
        "en": "My room is neat."
       },
       {
        "ko": "그 식당은 깔끔했어.",
        "en": "The restaurant was neat."
       }
      ]
     },
     {
      "ko": "좋다",
      "en": "be nice",
      "ex": [
       {
        "ko": "걔의 집은 좋아.",
        "en": "His house is nice."
       },
       {
        "ko": "이 식당은 좋아.",
        "en": "This restaurant is nice."
       },
       {
        "ko": "좋은 하루 보내!",
        "en": "Have a nice day!"
       }
      ]
     },
     {
      "ko": "시끄럽다",
      "en": "be noisy",
      "ex": [
       {
        "ko": "이 장소 정말 시끄러워.",
        "en": "This place is so noisy."
       },
       {
        "ko": "저 트럭은 진짜 시끄러워.",
        "en": "That truck is very noisy."
       },
       {
        "ko": "그 식당은 시끄러웠어.",
        "en": "The restaurant was noisy."
       }
      ]
     },
     {
      "ko": "오래된 거다",
      "en": "be old",
      "ex": [
       {
        "ko": "이 집은 오래된 거야.",
        "en": "This house is old."
       },
       {
        "ko": "저 TV는 오래된 거야.",
        "en": "That TV is old."
       },
       {
        "ko": "내 안경은 오래된 거야.",
        "en": "My glasses are old."
       }
      ]
     },
     {
      "ko": "열렸다",
      "en": "be open",
      "ex": [
       {
        "ko": "그 음식점은 열렸어.",
        "en": "The restaurant is open."
       },
       {
        "ko": "그 문은 열렸어.",
        "en": "The door is open."
       },
       {
        "ko": "그 가게는 열렸었어.",
        "en": "The store was open."
       }
      ]
     },
     {
      "ko": "인내심이 있다",
      "en": "be patient",
      "ex": [
       {
        "ko": "그녀는 진짜 인내심이 있어.",
        "en": "She is very patient."
       },
       {
        "ko": "우리는 인내심이 있어야 돼.",
        "en": "We need to be patient."
       },
       {
        "ko": "난 인내하려고 노력 중이야.",
        "en": "I am trying to be patient."
       }
      ]
     },
     {
      "ko": "기쁘다",
      "en": "be pleased",
      "ex": [
       {
        "ko": "걔는 진짜 기뻐해.",
        "en": "He is very pleased."
       },
       {
        "ko": "우리 아빠는 정말 기뻐하셨어.",
        "en": "My dad was very pleased."
       },
       {
        "ko": "나는 너를 처음 만나서 기뻐.",
        "en": "I am pleased to meet you."
       }
      ]
     }
    ]
   },
   {
    "theme": "감각 Senses (5)",
    "items": [
     {
      "ko": "예의바르다",
      "en": "be polite",
      "ex": [
       {
        "ko": "넌 예의가 바르구나.",
        "en": "You are polite."
       },
       {
        "ko": "걘 예의가 바르지 않아.",
        "en": "He is not polite."
       },
       {
        "ko": "그녀는 더 공손해져야 돼.",
        "en": "She should be more polite."
       }
      ]
     },
     {
      "ko": "자랑스러워하다",
      "en": "be proud",
      "ex": [
       {
        "ko": "난 걔가 자랑스러워.",
        "en": "I am proud of him."
       },
       {
        "ko": "나는 내 자신이 자랑스러워.",
        "en": "I am proud of myself."
       },
       {
        "ko": "부모님은 나를 자랑스러워해.",
        "en": "My parents are proud of me."
       }
      ]
     },
     {
      "ko": "빠르다",
      "en": "be quick",
      "ex": [
       {
        "ko": "저건 빨랐어.",
        "en": "That was quick."
       },
       {
        "ko": "그 서비스는 빨랐어.",
        "en": "The service was quick."
       },
       {
        "ko": "그 회의는 잠깐이었어.",
        "en": "The meeting was quick."
       }
      ]
     },
     {
      "ko": "조용하다",
      "en": "be quiet",
      "ex": [
       {
        "ko": "여기 정말 조용하다.",
        "en": "It's so quiet here."
       },
       {
        "ko": "그 도서관은 조용해.",
        "en": "The library is quiet."
       },
       {
        "ko": "여긴 심하게 조용해.",
        "en": "It's extremely quiet here."
       }
      ]
     },
     {
      "ko": "존중하다",
      "en": "be respectful",
      "ex": [
       {
        "ko": "걔는 나를 존중해.",
        "en": "He is respectful of me."
       },
       {
        "ko": "저 학생은 공손해.",
        "en": "That student is respectful."
       },
       {
        "ko": "존중하세요!",
        "en": "Please be respectful!"
       }
      ]
     },
     {
      "ko": "평평하지 않다",
      "en": "be rough",
      "ex": [
       {
        "ko": "이 도로는 평평하지 않아.",
        "en": "This road is rough."
       },
       {
        "ko": "그 표면은 울퉁불퉁해.",
        "en": "The surface is rough."
       },
       {
        "ko": "그 촉감은 거칠었어.",
        "en": "The texture was rough."
       }
      ]
     },
     {
      "ko": "무례하다",
      "en": "be rude",
      "ex": [
       {
        "ko": "저 남자 진짜 무례해.",
        "en": "That man is really rude."
       },
       {
        "ko": "그녀는 무례하지 않아.",
        "en": "She is not rude."
       },
       {
        "ko": "무례하게 하지마!",
        "en": "Don't be rude!"
       }
      ]
     },
     {
      "ko": "만족하다",
      "en": "be satisfied",
      "ex": [
       {
        "ko": "그녀는 만족했어.",
        "en": "She was satisfied."
       },
       {
        "ko": "걔네들은 진짜 만족했어.",
        "en": "They were very satisfied."
       },
       {
        "ko": "나는 결과에 대해 만족해.",
        "en": "I am satisfied with the result."
       }
      ]
     },
     {
      "ko": "이기적이다",
      "en": "be selfish",
      "ex": [
       {
        "ko": "내 상사는 진짜 이기적이야.",
        "en": "My boss is very selfish."
       },
       {
        "ko": "걔는 이기적이지 않아.",
        "en": "He is not selfish."
       },
       {
        "ko": "나는 이기적인 사람 싫어.",
        "en": "I don't like selfish people."
       }
      ]
     },
     {
      "ko": "충격받았어",
      "en": "be shocked",
      "ex": [
       {
        "ko": "나 진짜 충격 받았어.",
        "en": "I am so shocked."
       },
       {
        "ko": "우리 부모님은 충격 받았었어.",
        "en": "My parents were shocked."
       },
       {
        "ko": "충격 받지 마!",
        "en": "Don't be shocked!"
       }
      ]
     },
     {
      "ko": "부끄럽다",
      "en": "be shy",
      "ex": [
       {
        "ko": "나 진짜 부끄러워.",
        "en": "I am really shy."
       },
       {
        "ko": "그녀는 숫기 없는 애야.",
        "en": "She is a shy girl."
       },
       {
        "ko": "부끄러워하지 마!",
        "en": "Don't be shy!"
       }
      ]
     },
     {
      "ko": "느리다",
      "en": "be slow",
      "ex": [
       {
        "ko": "이 속도는 너무 느려.",
        "en": "This tempo is too slow."
       },
       {
        "ko": "그 진행은 느려.",
        "en": "The progress is slow."
       },
       {
        "ko": "그 속도가 느려.",
        "en": "The speed is slow."
       }
      ]
     },
     {
      "ko": "폭풍 번개가 치다",
      "en": "be stormy",
      "ex": [
       {
        "ko": "바다에 번개가 쳐",
        "en": "be stormy at sea"
       },
       {
        "ko": "종종 번개가 쳐",
        "en": "be often stormy"
       },
       {
        "ko": "때때로 번개가 쳐",
        "en": "be stormy at times"
       }
      ]
     },
     {
      "ko": "두껍다",
      "en": "be thick",
      "ex": [
       {
        "ko": "이 책은 정말 두꺼워.",
        "en": "This book is so thick."
       },
       {
        "ko": "이 스테이크는 두꺼워.",
        "en": "This steak is thick."
       },
       {
        "ko": "내 눈썹은 너무 두꺼워.",
        "en": "My eyebrows are too thick."
       }
      ]
     },
     {
      "ko": "얇다",
      "en": "be thin",
      "ex": [
       {
        "ko": "이 책은 얇아.",
        "en": "This book is thin."
       },
       {
        "ko": "이 티셔츠는 얇아.",
        "en": "This T-shirt is thin."
       },
       {
        "ko": "내 노트북은 얇아.",
        "en": "My laptop is thin."
       }
      ]
     },
     {
      "ko": "꽉 조이다",
      "en": "be tight",
      "ex": [
       {
        "ko": "그 벨트가 조였어.",
        "en": "The belt was tight."
       },
       {
        "ko": "그 신발이 꽉 조였어.",
        "en": "The shoes were tight."
       },
       {
        "ko": "그 바지가 꽉 조였어.",
        "en": "The pants were tight."
       }
      ]
     },
     {
      "ko": "전통적이다",
      "en": "be traditional",
      "ex": [
       {
        "ko": "이 옷은 전통적이야.",
        "en": "These clothes are traditional."
       },
       {
        "ko": "저건 전통 혼례야.",
        "en": "That's a traditional wedding."
       },
       {
        "ko": "전통적인 집이 있어.",
        "en": "There are traditional houses."
       }
      ]
     },
     {
      "ko": "불편하다",
      "en": "be uncomfortable",
      "ex": [
       {
        "ko": "이거는 불편해.",
        "en": "This is uncomfortable."
       },
       {
        "ko": "걔의 신발은 불편해.",
        "en": "His shoes are uncomfortable."
       },
       {
        "ko": "그 의자는 불편해.",
        "en": "The chair is uncomfortable."
       }
      ]
     },
     {
      "ko": "넓다",
      "en": "be wide",
      "ex": [
       {
        "ko": "그 강은 넓어.",
        "en": "The river is wide."
       },
       {
        "ko": "그 창문은 넓어.",
        "en": "The window is wide."
       },
       {
        "ko": "내 마당은 정말 넓어.",
        "en": "My yard is so wide."
       }
      ]
     },
     {
      "ko": "바람이 불다",
      "en": "be windy",
      "ex": [
       {
        "ko": "상당한 바람이 불어",
        "en": "be so windy"
       },
       {
        "ko": "바람이 많이 불어",
        "en": "be very windy"
       },
       {
        "ko": "항상 바람이 불어",
        "en": "be always windy"
       }
      ]
     },
     {
      "ko": "최선을 다하다",
      "en": "do the best",
      "ex": [
       {
        "ko": "나는 매일 최선을 다해.",
        "en": "I do my best every day."
       },
       {
        "ko": "너는 모든 것에 최선을 다해.",
        "en": "You do your best on everything."
       },
       {
        "ko": "가족을 위해 최선을 다할 거야",
        "en": "will do my best for my family"
       }
      ]
     },
     {
      "ko": "설거지하다",
      "en": "do the dishes",
      "ex": [
       {
        "ko": "매일 설거지해",
        "en": "do the dishes every day"
       },
       {
        "ko": "아침에 설거지해",
        "en": "do the dishes in the morning"
       },
       {
        "ko": "밤에 설거지해",
        "en": "do the dishes at night"
       }
      ]
     },
     {
      "ko": "빨래하다",
      "en": "do the laundry",
      "ex": [
       {
        "ko": "일주일에 한 번 빨래해",
        "en": "do the laundry once a week"
       },
       {
        "ko": "일주일에 두 번 빨래해",
        "en": "do the laundry twice a week"
       },
       {
        "ko": "매일 빨래해",
        "en": "do the laundry every day"
       }
      ]
     },
     {
      "ko": "수강 취소하다",
      "en": "drop the class",
      "ex": [
       {
        "ko": "수업 수강 취소하고 싶어",
        "en": "want to drop the class"
       },
       {
        "ko": "수업 수강 취소할 거야",
        "en": "will drop the class"
       },
       {
        "ko": "수강 취소해야 해",
        "en": "should drop the class"
       }
      ]
     },
     {
      "ko": "이자를 받다",
      "en": "earn interest",
      "ex": [
       {
        "ko": "낮은 이자를 받아",
        "en": "earn low interest"
       },
       {
        "ko": "높은 이자를 받아",
        "en": "earn high interest"
       },
       {
        "ko": "더 높은 이자를 받아",
        "en": "earn higher interest"
       }
      ]
     },
     {
      "ko": "최선을 다했다",
      "en": "did the best",
      "ex": [
       {
        "ko": "나 저번 학기에 최선 다했어.",
        "en": "I did my best last semester."
       },
       {
        "ko": "나 최선을 다하지 않았어.",
        "en": "I didn't do my best."
       },
       {
        "ko": "그녀는 시험에서 최선을 다했어.",
        "en": "She did her best on the test."
       }
      ]
     },
     {
      "ko": "설거지했다",
      "en": "did the dishes",
      "ex": [
       {
        "ko": "부엌에서 설거지했어",
        "en": "did the dishes in the kitchen"
       },
       {
        "ko": "싱크대에서 설거지했어",
        "en": "did the dishes in the sink"
       },
       {
        "ko": "더러운 그릇을 설거지했어",
        "en": "did the dirty dishes"
       }
      ]
     },
     {
      "ko": "빨래했다",
      "en": "did the laundry",
      "ex": [
       {
        "ko": "어제 빨래했어",
        "en": "did the laundry yesterday"
       },
       {
        "ko": "오늘 아침에 빨래했어",
        "en": "did the laundry this morning"
       },
       {
        "ko": "오늘 점심에 빨래했어",
        "en": "did the laundry in the afternoon"
       }
      ]
     },
     {
      "ko": "수강 취소했다",
      "en": "dropped the class",
      "ex": [
       {
        "ko": "그녀가 수업 수강 취소했어.",
        "en": "She dropped the class."
       },
       {
        "ko": "걔가 수업 수강 취소했어.",
        "en": "He dropped the class."
       },
       {
        "ko": "내가 수업 수강 취소했어.",
        "en": "I dropped the class."
       }
      ]
     },
     {
      "ko": "이자를 받았다",
      "en": "earned interest",
      "ex": [
       {
        "ko": "이자 더 받았어",
        "en": "earned more interest"
       },
       {
        "ko": "최대 이자를 받았어",
        "en": "earned the most interest"
       },
       {
        "ko": "어떻게 높은 이자를 받는지",
        "en": "how to get high interest"
       }
      ]
     }
    ]
   },
   {
    "theme": "감각 Senses (6)",
    "items": [
     {
      "ko": "낮은 성적을 받다",
      "en": "get a bad grade",
      "ex": [
       {
        "ko": "시험에서 나쁜 성적을 받아",
        "en": "get a bad grade on the test"
       },
       {
        "ko": "나쁜 성적 받으면 안돼",
        "en": "should not get bad grades"
       },
       {
        "ko": "가끔 나쁜 성적을 받아",
        "en": "sometimes get bad grades"
       }
      ]
     },
     {
      "ko": "학위를 받다",
      "en": "get a degree",
      "ex": [
       {
        "ko": "석사학위를 받아",
        "en": "get a Master's degree"
       },
       {
        "ko": "학사학위를 받아",
        "en": "get a Bachelor's degree"
       },
       {
        "ko": "나는 학위를 받을 거야.",
        "en": "I will get my degree."
       }
      ]
     },
     {
      "ko": "좋은 성적을 받다",
      "en": "get a good grade",
      "ex": [
       {
        "ko": "그 시험에서 좋은 성적을 받아",
        "en": "get a good grade on the test"
       },
       {
        "ko": "좋은 성적을 받아야 해",
        "en": "have to get a good grade"
       },
       {
        "ko": "좋은 성적 받고 싶어",
        "en": "want to get good grades"
       }
      ]
     },
     {
      "ko": "대출을 받다",
      "en": "get a loan",
      "ex": [
       {
        "ko": "대출이 필요해",
        "en": "need to get a loan"
       },
       {
        "ko": "대출 받아야 해",
        "en": "should get a loan"
       },
       {
        "ko": "대출 받으면 안돼",
        "en": "shouldn't get a loan"
       }
      ]
     },
     {
      "ko": "앞지르다",
      "en": "get ahead",
      "ex": [
       {
        "ko": "나를 앞질러",
        "en": "get ahead of me"
       },
       {
        "ko": "너를 앞질러",
        "en": "get ahead of you"
       },
       {
        "ko": "그를 앞질러",
        "en": "get ahead of him"
       }
      ]
     },
     {
      "ko": "낮은 성적을 받았다",
      "en": "got a bad grade",
      "ex": [
       {
        "ko": "진짜 나쁜 성적을 받았어",
        "en": "got a really bad grade"
       },
       {
        "ko": "저번 학기에 나쁜 성적을 받았어",
        "en": "got bad grades last semester"
       },
       {
        "ko": "지난번에 나쁜 성적을 받았어",
        "en": "got bad grades last time"
       }
      ]
     },
     {
      "ko": "학위를 받았다",
      "en": "got a degree",
      "ex": [
       {
        "ko": "박사과정 학위를 받았어",
        "en": "got a doctoral degree"
       },
       {
        "ko": "학사학위를 받았어",
        "en": "got a bachelor's degree"
       },
       {
        "ko": "내 학위를 받았어",
        "en": "got my degree"
       }
      ]
     },
     {
      "ko": "좋은 성적을 받았다",
      "en": "got a good grade",
      "ex": [
       {
        "ko": "시험에서 좋은 성적 받았어",
        "en": "got a good grade on the test"
       },
       {
        "ko": "기말고사에서 좋은 성적 받았어",
        "en": "got good grades on the finals"
       },
       {
        "ko": "좋은 성적을 받지 못했고 장학금도 못 받았어",
        "en": "didn't get good grades and receive scholarship"
       }
      ]
     },
     {
      "ko": "대출을 받았다",
      "en": "got a loan",
      "ex": [
       {
        "ko": "내 친구는 대출을 받았어.",
        "en": "My friend got a loan."
       },
       {
        "ko": "걔네들 대출을 받았어.",
        "en": "They got a loan."
       },
       {
        "ko": "그녀는 대출을 받았어.",
        "en": "She got a loan."
       }
      ]
     },
     {
      "ko": "앞질렀다",
      "en": "got ahead",
      "ex": [
       {
        "ko": "경주에서 앞질렀어",
        "en": "got ahead in the race"
       },
       {
        "ko": "인생에서 앞질렀어",
        "en": "got ahead in life"
       },
       {
        "ko": "게임에서 앞질렀어",
        "en": "got ahead in the game"
       }
      ]
     },
     {
      "ko": "잘 지내다",
      "en": "get along",
      "ex": [
       {
        "ko": "함께 잘 지내",
        "en": "get along together"
       },
       {
        "ko": "매우 잘 지내",
        "en": "get along very well"
       },
       {
        "ko": "아주 잘 지내",
        "en": "get along great"
       }
      ]
     },
     {
      "ko": "도망가다",
      "en": "get away",
      "ex": [
       {
        "ko": "개에게서 도망가",
        "en": "get away from the dog"
       },
       {
        "ko": "그에게서 도망가",
        "en": "get away from him"
       },
       {
        "ko": "선생님에게서 도망가",
        "en": "get away from the teacher"
       }
      ]
     },
     {
      "ko": "엎드리다",
      "en": "get down",
      "ex": [
       {
        "ko": "바닥에 엎드려",
        "en": "get down on the floor"
       },
       {
        "ko": "책상 밑에 엎드려",
        "en": "get down under the desk"
       },
       {
        "ko": "천천히 엎드려",
        "en": "get down slowly"
       }
      ]
     },
     {
      "ko": "그에게 가져다 줘",
      "en": "get him",
      "ex": [
       {
        "ko": "돈을 그에게 가져다 줘",
        "en": "get him the money"
       },
       {
        "ko": "가방을 그에게 가져다 줘",
        "en": "get him the bag"
       },
       {
        "ko": "병을 그에게 가져다 줘",
        "en": "get him the bottle"
       }
      ]
     },
     {
      "ko": "들어가다",
      "en": "get in",
      "ex": [
       {
        "ko": "방으로 들어와",
        "en": "get in the room"
       },
       {
        "ko": "차 안으로 들어와",
        "en": "get in the car"
       },
       {
        "ko": "집으로 들어와",
        "en": "get in the house"
       }
      ]
     },
     {
      "ko": "잘 지냈다",
      "en": "got along",
      "ex": [
       {
        "ko": "사람들과 잘 지냈어",
        "en": "got along with people"
       },
       {
        "ko": "친구들과 잘 지냈어",
        "en": "got along with friends"
       },
       {
        "ko": "서로 잘 지냈어",
        "en": "got along with each other"
       }
      ]
     },
     {
      "ko": "도망갔다",
      "en": "got away",
      "ex": [
       {
        "ko": "너에게서 도망갔어",
        "en": "got away from you"
       },
       {
        "ko": "그녀와 함께 도망갔어",
        "en": "got away with her"
       },
       {
        "ko": "내 친구와 함께 도망갔어",
        "en": "got away with my friend"
       }
      ]
     },
     {
      "ko": "엎드렸다",
      "en": "got down",
      "ex": [
       {
        "ko": "빨리 엎드렸어",
        "en": "got down quickly"
       },
       {
        "ko": "여기에 엎드렸어",
        "en": "got down here"
       },
       {
        "ko": "땅에 엎드렸어",
        "en": "got down on the ground"
       }
      ]
     },
     {
      "ko": "그에게 가져다 줬어",
      "en": "got him",
      "ex": [
       {
        "ko": "공책을 그에게 가져다 줬어",
        "en": "got him the notebook"
       },
       {
        "ko": "바지를 그에게 가져다 줬어",
        "en": "got him the pants"
       },
       {
        "ko": "의자를 그에게 가져다 줬어",
        "en": "got him the chair"
       }
      ]
     },
     {
      "ko": "들어갔다",
      "en": "got in",
      "ex": [
       {
        "ko": "물 속으로 들어왔어",
        "en": "got in the water"
       },
       {
        "ko": "여기로 들어왔어",
        "en": "got in here"
       },
       {
        "ko": "거기로 들어왔어",
        "en": "got in there"
       }
      ]
     },
     {
      "ko": "끝내",
      "en": "get it done",
      "ex": [
       {
        "ko": "정시에 끝내",
        "en": "get it done on time"
       },
       {
        "ko": "바로 지금 끝내",
        "en": "get it done right now"
       },
       {
        "ko": "빨리 끝내",
        "en": "get it done quickly"
       }
      ]
     },
     {
      "ko": "내게 가져다줘",
      "en": "get me",
      "ex": [
       {
        "ko": "내게 표를 가져다줄래?",
        "en": "Will you get me a ticket?"
       },
       {
        "ko": "내게 컵을 가져다줄래?",
        "en": "Can you get me a cup?"
       },
       {
        "ko": "네 책을 내게 가져다줘",
        "en": "get me your book"
       }
      ]
     },
     {
      "ko": "나를 들여보내줘",
      "en": "get me into",
      "ex": [
       {
        "ko": "학교로 나를 들여보내줘",
        "en": "get me into the school"
       },
       {
        "ko": "네 방으로 나를 들여보내줘",
        "en": "get me into your room"
       },
       {
        "ko": "사무실로 나를 들여보내줘",
        "en": "get me into the office"
       }
      ]
     },
     {
      "ko": "나가",
      "en": "get out",
      "ex": [
       {
        "ko": "여기에서 나가",
        "en": "get out of here"
       },
       {
        "ko": "내 차에서 나가",
        "en": "get out of my car"
       },
       {
        "ko": "거기에서 나가",
        "en": "get out of there"
       }
      ]
     },
     {
      "ko": "나가다",
      "en": "get out",
      "ex": [
       {
        "ko": "내 방에서 나가",
        "en": "get out of my room"
       },
       {
        "ko": "내 집에서 나가",
        "en": "get out of my house"
       },
       {
        "ko": "우리나라에서 떠나",
        "en": "get out of my country"
       }
      ]
     },
     {
      "ko": "끝냈어",
      "en": "got it done",
      "ex": [
       {
        "ko": "모두 끝냈어",
        "en": "got it all done"
       },
       {
        "ko": "월요일에 끝냈어",
        "en": "got it done on Monday"
       },
       {
        "ko": "일요일에 끝냈어",
        "en": "got it done on Sunday"
       }
      ]
     },
     {
      "ko": "내게 가져다 줬어",
      "en": "got me",
      "ex": [
       {
        "ko": "커피를 내게 가져다줬어",
        "en": "got me the coffee"
       },
       {
        "ko": "물을 내게 가져다줬어",
        "en": "got me the water"
       },
       {
        "ko": "펜을 내게 가져다줬어",
        "en": "got me the pen"
       }
      ]
     },
     {
      "ko": "나를 들여보내줬어",
      "en": "got me into",
      "ex": [
       {
        "ko": "회사로 나를 들여보내줬어",
        "en": "got me into the company"
       },
       {
        "ko": "학교로 나를 들여보내줬어",
        "en": "got me into the school"
       },
       {
        "ko": "건물로 나를 들여보내줬어",
        "en": "got me into the building"
       }
      ]
     },
     {
      "ko": "나갔어",
      "en": "got out",
      "ex": [
       {
        "ko": "물 밖으로 나갔어",
        "en": "got out of the water"
       },
       {
        "ko": "여기서 나갔어",
        "en": "got out of here"
       },
       {
        "ko": "거기서 나갔어",
        "en": "got out of there"
       }
      ]
     },
     {
      "ko": "나갔다",
      "en": "got out",
      "ex": [
       {
        "ko": "내 방에서 나갔어",
        "en": "got out of my room"
       },
       {
        "ko": "내 집에서 나갔어",
        "en": "got out of my house"
       },
       {
        "ko": "감옥에서 나왔어",
        "en": "got out of prison"
       }
      ]
     }
    ]
   },
   {
    "theme": "감각 Senses (7)",
    "items": [
     {
      "ko": "준비하다",
      "en": "get ready",
      "ex": [
       {
        "ko": "데이트를 준비해",
        "en": "get ready for a date"
       },
       {
        "ko": "면접을 준비해",
        "en": "get ready for an interview"
       },
       {
        "ko": "걔 만나기 위해 준비해",
        "en": "get ready to meet him"
       }
      ]
     },
     {
      "ko": "혼나다",
      "en": "get scolded",
      "ex": [
       {
        "ko": "거의 매일 혼나",
        "en": "get scolded almost every day"
       },
       {
        "ko": "뛰어서 혼나",
        "en": "get scolded for jumping"
       },
       {
        "ko": "울어서 혼나",
        "en": "get scolded for crying"
       }
      ]
     },
     {
      "ko": "일어나다",
      "en": "get up",
      "ex": [
       {
        "ko": "일찍 일어나",
        "en": "get up early"
       },
       {
        "ko": "늦게 일어나",
        "en": "get up late"
       },
       {
        "ko": "잠시 후에 일어나",
        "en": "get up later"
       }
      ]
     },
     {
      "ko": "들어가",
      "en": "go in",
      "ex": [
       {
        "ko": "방에 들어가",
        "en": "go in the room"
       },
       {
        "ko": "내 집에 들어가",
        "en": "go in my house"
       },
       {
        "ko": "건물에 들어가",
        "en": "go in the building"
       }
      ]
     },
     {
      "ko": "시험 있다",
      "en": "have a test",
      "ex": [
       {
        "ko": "내일 시험있어",
        "en": "have a test tomorrow"
       },
       {
        "ko": "시험 곧 있어",
        "en": "have a test soon"
       },
       {
        "ko": "매일 시험 있어",
        "en": "have a test every day"
       }
      ]
     },
     {
      "ko": "준비했다",
      "en": "got ready",
      "ex": [
       {
        "ko": "떠나려고 준비했어",
        "en": "got ready to leave"
       },
       {
        "ko": "먹으려고 준비했어",
        "en": "got ready to eat"
       },
       {
        "ko": "그녀 보려고 준비했어",
        "en": "got ready to see her"
       }
      ]
     },
     {
      "ko": "혼났다",
      "en": "got scolded",
      "ex": [
       {
        "ko": "어제 혼났어",
        "en": "got scolded yesterday"
       },
       {
        "ko": "아침에 혼났어",
        "en": "got scolded in the morning"
       },
       {
        "ko": "웃어서 혼났어",
        "en": "got scolded for laughing"
       }
      ]
     },
     {
      "ko": "일어났다",
      "en": "got up",
      "ex": [
       {
        "ko": "아침에 일어났어",
        "en": "got up in the morning"
       },
       {
        "ko": "오후에 일어났어",
        "en": "got up in the afternoon"
       },
       {
        "ko": "저녁에 일어났어",
        "en": "got up in the evening"
       }
      ]
     },
     {
      "ko": "들어갔어",
      "en": "went in",
      "ex": [
       {
        "ko": "가게에 들어갔어",
        "en": "went in the shop"
       },
       {
        "ko": "교회에 들어갔어",
        "en": "went in the church"
       },
       {
        "ko": "사무실에 들어갔어",
        "en": "went in the office"
       }
      ]
     },
     {
      "ko": "시험 있었다",
      "en": "had a test",
      "ex": [
       {
        "ko": "저번주에 시험 있었어",
        "en": "had a test last week"
       },
       {
        "ko": "글쓰기 시험이 있었어",
        "en": "had a writing test"
       },
       {
        "ko": "어제 운전 실기시험 봤어",
        "en": "had a driving test yesterday"
       }
      ]
     },
     {
      "ko": "줄을 서다",
      "en": "line up",
      "ex": [
       {
        "ko": "버스 타려고 줄을 서",
        "en": "line up to get on the bus"
       },
       {
        "ko": "기차 타려고 줄을 서",
        "en": "line up to get on the train"
       },
       {
        "ko": "지하철 타려고 줄을 서",
        "en": "line up to get on the subway"
       }
      ]
     },
     {
      "ko": "돌아보다",
      "en": "look back",
      "ex": [
       {
        "ko": "지금 돌아봐",
        "en": "look back now"
       },
       {
        "ko": "다시 돌아봐",
        "en": "look back again"
       },
       {
        "ko": "자주 돌아봐",
        "en": "look back frequently"
       }
      ]
     },
     {
      "ko": "깔보다",
      "en": "look down on",
      "ex": [
       {
        "ko": "그를 깔봐",
        "en": "look down on him"
       },
       {
        "ko": "누구도 깔보지 않아",
        "en": "don't look down on anyone"
       },
       {
        "ko": "너를 깔봐",
        "en": "look down on you"
       }
      ]
     },
     {
      "ko": "찾아보다",
      "en": "look for",
      "ex": [
       {
        "ko": "직업을 찾아봐",
        "en": "look for a job"
       },
       {
        "ko": "그를 찾아봐",
        "en": "look for him"
       },
       {
        "ko": "엄마를 찾아봐",
        "en": "look for my mother"
       }
      ]
     },
     {
      "ko": "고대하다",
      "en": "look forward to",
      "ex": [
       {
        "ko": "미래를 고대해",
        "en": "look forward to the future"
       },
       {
        "ko": "자유를 고대해",
        "en": "look forward to the freedom"
       },
       {
        "ko": "그날을 고대해",
        "en": "look forward to the day"
       }
      ]
     },
     {
      "ko": "줄을 섰다",
      "en": "lined up",
      "ex": [
       {
        "ko": "걔네들 버스 정류장에서 줄 섰어.",
        "en": "They lined up at the bus stop."
       },
       {
        "ko": "사람들 거기서 줄 섰어.",
        "en": "People lined up there."
       },
       {
        "ko": "많은 사람들 여기서 줄 섰어.",
        "en": "A lot of people lined up here."
       }
      ]
     },
     {
      "ko": "돌아보았다",
      "en": "looked back",
      "ex": [
       {
        "ko": "지난해를 돌아봤어",
        "en": "looked back at the last year"
       },
       {
        "ko": "결국 돌아봤어",
        "en": "finally looked back"
       },
       {
        "ko": "나를 돌아봤어",
        "en": "looked back at myself"
       }
      ]
     },
     {
      "ko": "깔보았다",
      "en": "looked down on",
      "ex": [
       {
        "ko": "사람들을 깔보았어",
        "en": "looked down on people"
       },
       {
        "ko": "내 의견을 깔보았어",
        "en": "looked down on my opinion"
       },
       {
        "ko": "그것을 깔보았어",
        "en": "looked down on it"
       }
      ]
     },
     {
      "ko": "찾아봤다",
      "en": "looked for",
      "ex": [
       {
        "ko": "내 가방을 찾아봤어",
        "en": "looked for my bag"
       },
       {
        "ko": "내 여동생을 찾아봤어",
        "en": "looked for my sister"
       },
       {
        "ko": "내 집을 찾아봤어",
        "en": "looked for my house"
       }
      ]
     },
     {
      "ko": "고대했다",
      "en": "looked forward to",
      "ex": [
       {
        "ko": "휴일을 고대했어",
        "en": "looked forward to a holiday"
       },
       {
        "ko": "방학을 고대했어",
        "en": "looked forward to the vacation"
       },
       {
        "ko": "네 대답을 고대했어",
        "en": "looked forward to your answer"
       }
      ]
     },
     {
      "ko": "지켜주다",
      "en": "look out for",
      "ex": [
       {
        "ko": "내 아들을 지켜줘",
        "en": "look out for my son"
       },
       {
        "ko": "우리 부모님을 지켜줘",
        "en": "look out for my parents"
       },
       {
        "ko": "그녀를 지켜줘",
        "en": "look out for her"
       }
      ]
     },
     {
      "ko": "~을 통해 보다",
      "en": "look through",
      "ex": [
       {
        "ko": "망원경을 통해 봐",
        "en": "look through a telescope"
       },
       {
        "ko": "창문을 통해 봐",
        "en": "look through the window"
       },
       {
        "ko": "안경을 통해 봐",
        "en": "look through the glasses"
       }
      ]
     },
     {
      "ko": "올려다보다",
      "en": "look up",
      "ex": [
       {
        "ko": "언덕을 올려다봐",
        "en": "look up at the hill"
       },
       {
        "ko": "하늘을 올려다봐",
        "en": "look up at the sky"
       },
       {
        "ko": "별을 올려다봐",
        "en": "look up at the stars"
       }
      ]
     },
     {
      "ko": "우러러보다",
      "en": "look up to",
      "ex": [
       {
        "ko": "부모님을 존경해",
        "en": "look up to my parents"
       },
       {
        "ko": "선생님을 존경해",
        "en": "look up to my teacher"
       },
       {
        "ko": "아버지를 존경해",
        "en": "look up to my father"
       }
      ]
     },
     {
      "ko": "결정해",
      "en": "make a decision",
      "ex": [
       {
        "ko": "최종 결정해",
        "en": "make a final decision"
       },
       {
        "ko": "좋게 결정해",
        "en": "make a good decision"
       },
       {
        "ko": "빠르게 결정해",
        "en": "make a quick decision"
       }
      ]
     },
     {
      "ko": "지켜주었다",
      "en": "looked out for",
      "ex": [
       {
        "ko": "내 고양이를 지켜줬어",
        "en": "looked out for my cat"
       },
       {
        "ko": "아기를 지켜줬어",
        "en": "looked out for the baby"
       },
       {
        "ko": "내 개를 지켜줬어",
        "en": "looked out for my dog"
       }
      ]
     },
     {
      "ko": "~을 통해 보았다",
      "en": "looked through",
      "ex": [
       {
        "ko": "네 눈을 통해 보았어",
        "en": "looked through your eyes"
       },
       {
        "ko": "거울을 통해 보았어",
        "en": "looked through the mirror"
       },
       {
        "ko": "책을 통해 보았어",
        "en": "looked through the book"
       }
      ]
     },
     {
      "ko": "올려다보았다",
      "en": "looked up",
      "ex": [
       {
        "ko": "너를 올려다봤어",
        "en": "looked up at you"
       },
       {
        "ko": "그녀를 올려다봤어",
        "en": "looked up at her"
       },
       {
        "ko": "그를 올려다봤어",
        "en": "looked up at him"
       }
      ]
     },
     {
      "ko": "우러러보았다",
      "en": "looked up to",
      "ex": [
       {
        "ko": "그들을 존경했어",
        "en": "looked up to them"
       },
       {
        "ko": "그녀를 존경했어",
        "en": "looked up to her"
       },
       {
        "ko": "너를 존경했어",
        "en": "looked up to you"
       }
      ]
     },
     {
      "ko": "결정했어",
      "en": "made a decision",
      "ex": [
       {
        "ko": "어렵게 결정했어",
        "en": "made a hard decision"
       },
       {
        "ko": "나쁘게 결정했어",
        "en": "made a bad decision"
       },
       {
        "ko": "지혜롭게 결정했어",
        "en": "made a wise decision"
       }
      ]
     }
    ]
   },
   {
    "theme": "감각 Senses (8)",
    "items": [
     {
      "ko": "전공하다",
      "en": "major in",
      "ex": [
       {
        "ko": "음악을 전공하길 원해",
        "en": "want to major in music"
       },
       {
        "ko": "걔가 영어 전공하지 않는 것을 원해",
        "en": "want him not to major in English"
       },
       {
        "ko": "이거 전공하지 마!",
        "en": "Don't major in this!"
       }
      ]
     },
     {
      "ko": "전화해",
      "en": "make a phone call",
      "ex": [
       {
        "ko": "지금 전화해",
        "en": "make a phone call now"
       },
       {
        "ko": "전화를 해야 해",
        "en": "must make a phone call"
       },
       {
        "ko": "전화할 거야",
        "en": "will make a phone call"
       }
      ]
     },
     {
      "ko": "확인해",
      "en": "make sure",
      "ex": [
       {
        "ko": "그것을 확인해",
        "en": "make sure of it"
       },
       {
        "ko": "저것을 확인해",
        "en": "make sure of that"
       },
       {
        "ko": "이것을 확인해",
        "en": "make sure of this"
       }
      ]
     },
     {
      "ko": "계좌를 개설하다",
      "en": "open an account",
      "ex": [
       {
        "ko": "예금계좌를 개설해",
        "en": "open a checking account"
       },
       {
        "ko": "저축계좌를 개설해",
        "en": "open a saving account"
       },
       {
        "ko": "계좌 개설하고 싶어",
        "en": "want to open an account"
       }
      ]
     },
     {
      "ko": "시험을 통과하다",
      "en": "pass the test",
      "ex": [
       {
        "ko": "운전면허 시험에 통과해",
        "en": "pass the driver's license test"
       },
       {
        "ko": "시험에 통과할 수 있어",
        "en": "can pass the test"
       },
       {
        "ko": "시험을 통과해야 돼",
        "en": "should pass the test"
       }
      ]
     },
     {
      "ko": "전공했다",
      "en": "majored in",
      "ex": [
       {
        "ko": "교육을 전공했어",
        "en": "majored in education"
       },
       {
        "ko": "한국어를 전공했어",
        "en": "majored in Korean"
       },
       {
        "ko": "미술을 대학교 때 전공했어",
        "en": "majored in fine art in college"
       }
      ]
     },
     {
      "ko": "전화했어",
      "en": "made a phone call",
      "ex": [
       {
        "ko": "전화를 얼마간 했어",
        "en": "made some phone calls"
       },
       {
        "ko": "전화를 다시 했어",
        "en": "made a phone call again"
       },
       {
        "ko": "전화를 급히 했어",
        "en": "made a quick phone call"
       }
      ]
     },
     {
      "ko": "확인했어",
      "en": "made sure",
      "ex": [
       {
        "ko": "그 결정을 확인했어",
        "en": "made sure of the decision"
       },
       {
        "ko": "그 사실을 확인했어",
        "en": "made sure of the fact"
       },
       {
        "ko": "그 의견을 확인했어",
        "en": "made sure of their opinions"
       }
      ]
     },
     {
      "ko": "계좌를 개설했다",
      "en": "opened an account",
      "ex": [
       {
        "ko": "그녀는 계좌를 개설했어.",
        "en": "She opened an account."
       },
       {
        "ko": "걔는 계좌를 개설했어.",
        "en": "He opened an account."
       },
       {
        "ko": "또 다른 계좌를 개설했어",
        "en": "opened another account"
       }
      ]
     },
     {
      "ko": "시험을 통과했다",
      "en": "passed the test",
      "ex": [
       {
        "ko": "시험을 쉽게 통과했어",
        "en": "passed the test easily"
       },
       {
        "ko": "작년에 시험을 통과했어",
        "en": "passed the test last year"
       },
       {
        "ko": "드디어 시험을 통과했어",
        "en": "finally passed the test"
       }
      ]
     },
     {
      "ko": "(빚 등을) 갚다",
      "en": "pay back",
      "ex": [
       {
        "ko": "대출을 갚아",
        "en": "pay back a loan"
       },
       {
        "ko": "그녀의 빚을 갚아",
        "en": "pay back her debt"
       },
       {
        "ko": "걔의 대출을 갚아",
        "en": "pay back his loan"
       }
      ]
     },
     {
      "ko": "집어들어",
      "en": "pick it up",
      "ex": [
       {
        "ko": "다시 집어 들어",
        "en": "pick it up again"
       },
       {
        "ko": "빨리 집어 들어",
        "en": "pick it up quickly"
       },
       {
        "ko": "지금 집어 들어",
        "en": "pick it up now"
       }
      ]
     },
     {
      "ko": "태우다",
      "en": "pick up",
      "ex": [
       {
        "ko": "네 아이들을 태워",
        "en": "pick up your children"
       },
       {
        "ko": "네 아기를 태워",
        "en": "pick up your baby"
       },
       {
        "ko": "네 가족을 태워",
        "en": "pick up your family"
       }
      ]
     },
     {
      "ko": "공정하게 경기하다",
      "en": "play fair",
      "ex": [
       {
        "ko": "항상 공정히 경기해",
        "en": "always play fair"
       },
       {
        "ko": "공정하게 경기 안 해",
        "en": "don't play fair"
       },
       {
        "ko": "공정하게 경기하자!",
        "en": "Let's play fair!"
       }
      ]
     },
     {
      "ko": "제자리에 놓다",
      "en": "put back",
      "ex": [
       {
        "ko": "그것을 제자리에 놓아",
        "en": "put it back"
       },
       {
        "ko": "그 펜을 제자리에 놓아",
        "en": "put the pen back"
       },
       {
        "ko": "이 책을 제자리에 놓아",
        "en": "put this book back"
       }
      ]
     },
     {
      "ko": "(빚 등을) 갚았다",
      "en": "paid back",
      "ex": [
       {
        "ko": "은행에 갚아",
        "en": "paid back the bank"
       },
       {
        "ko": "걔에게 갚아",
        "en": "paid him back"
       },
       {
        "ko": "그녀에게 갚아",
        "en": "paid her back"
       }
      ]
     },
     {
      "ko": "집어들었어",
      "en": "picked it up",
      "ex": [
       {
        "ko": "동전을 집어 들었어",
        "en": "picked up the coin"
       },
       {
        "ko": "사과를 집어 들었어",
        "en": "picked up the apple"
       },
       {
        "ko": "종이를 집어 들었어",
        "en": "picked up the paper"
       }
      ]
     },
     {
      "ko": "태웠다",
      "en": "picked up",
      "ex": [
       {
        "ko": "승객들을 태웠어",
        "en": "picked up passengers"
       },
       {
        "ko": "엄마를 태웠어",
        "en": "picked up my mother"
       },
       {
        "ko": "내 아들을 태웠어",
        "en": "picked up my son"
       }
      ]
     },
     {
      "ko": "공정하게 경기했다",
      "en": "played fair",
      "ex": [
       {
        "ko": "다시 공정하게 경기했어",
        "en": "played fair again"
       },
       {
        "ko": "그들은 공정하게 경기했어.",
        "en": "They played fair."
       },
       {
        "ko": "우리는 공정하게 경기했어.",
        "en": "We played fair."
       }
      ]
     },
     {
      "ko": "제자리에 놓았다",
      "en": "put back",
      "ex": [
       {
        "ko": "저것을 제자리에 놓았어",
        "en": "put that back"
       },
       {
        "ko": "이것을 제자리에 놓았어",
        "en": "put this back"
       },
       {
        "ko": "네 컵을 제자리에 놓았어",
        "en": "put your cup back"
       }
      ]
     },
     {
      "ko": "내려놓다",
      "en": "put down",
      "ex": [
       {
        "ko": "책을 내려놓아",
        "en": "put the book down"
       },
       {
        "ko": "모자를 내려놓아",
        "en": "put the hat down"
       },
       {
        "ko": "펜을 내려놓아",
        "en": "put the pen down"
       }
      ]
     },
     {
      "ko": "집어넣다",
      "en": "put in",
      "ex": [
       {
        "ko": "펜을 가방에 넣어",
        "en": "put the pen in the bag"
       },
       {
        "ko": "돈을 내 지갑에 넣어",
        "en": "put the money in my wallet"
       },
       {
        "ko": "동전을 박스에 넣어",
        "en": "put the coin in the box"
       }
      ]
     },
     {
      "ko": "되돌려놔",
      "en": "put it back",
      "ex": [
       {
        "ko": "그의 신발을 되돌려놔",
        "en": "put his shoes back"
       },
       {
        "ko": "그것을 되돌려놔",
        "en": "put it back"
       },
       {
        "ko": "내 책을 되돌려놔",
        "en": "put my book back"
       }
      ]
     },
     {
      "ko": "내려놔",
      "en": "put it down",
      "ex": [
       {
        "ko": "바닥 위에 내려놔",
        "en": "put it down on the floor"
       },
       {
        "ko": "책상 위에 내려놔",
        "en": "put it down on the desk"
       },
       {
        "ko": "테이블 위에 내려놔",
        "en": "put it down on the table"
       }
      ]
     },
     {
      "ko": "집어 넣어",
      "en": "put it in",
      "ex": [
       {
        "ko": "주머니에 넣어",
        "en": "put it in the pocket"
       },
       {
        "ko": "가방에 넣어",
        "en": "put it in the bag"
       },
       {
        "ko": "서랍에 넣어",
        "en": "put it in the drawer"
       }
      ]
     },
     {
      "ko": "내려놓았다",
      "en": "put down",
      "ex": [
       {
        "ko": "내 손을 내렸어",
        "en": "put my hands down"
       },
       {
        "ko": "그것을 무릎에 내렸어",
        "en": "put it down on my knees"
       },
       {
        "ko": "내 팔을 내렸어",
        "en": "put my arms down"
       }
      ]
     },
     {
      "ko": "집어넣었다",
      "en": "put in",
      "ex": [
       {
        "ko": "우유를 컵에 넣었어",
        "en": "put some milk in the cup"
       },
       {
        "ko": "소금을 이 수프에 넣었어",
        "en": "put some salt in this soup"
       },
       {
        "ko": "설탕을 차에 넣었어",
        "en": "put some sugar in my tea"
       }
      ]
     },
     {
      "ko": "되돌려놓았어",
      "en": "put it back",
      "ex": [
       {
        "ko": "그의 일기장을 되돌려놓았어",
        "en": "put his diary back"
       },
       {
        "ko": "그의 코트를 되돌려놓았어",
        "en": "put his coat back"
       },
       {
        "ko": "그의 사진을 되돌려놓았어",
        "en": "put his photo back"
       }
      ]
     },
     {
      "ko": "내려놨어",
      "en": "put it down",
      "ex": [
       {
        "ko": "내 책상에 내려놨어",
        "en": "put it down on my desk"
       },
       {
        "ko": "나는 그것을 내려놨어",
        "en": "I put it down"
       },
       {
        "ko": "바닥 위에 내려놨어",
        "en": "put it down on the floor"
       }
      ]
     },
     {
      "ko": "집어 넣었어",
      "en": "put it in",
      "ex": [
       {
        "ko": "꽃을 꽃병에 넣었어",
        "en": "put the flower in the vase"
       },
       {
        "ko": "책을 책장에 넣었어",
        "en": "put the book in the bookcase"
       },
       {
        "ko": "그것을 그 바구니에 넣었어",
        "en": "put it in the basket"
       }
      ]
     }
    ]
   },
   {
    "theme": "감각 Senses (9)",
    "items": [
     {
      "ko": "올려두다",
      "en": "put it on",
      "ex": [
       {
        "ko": "그것을 테이블 위에 올려둬",
        "en": "put it on the table"
       },
       {
        "ko": "그것을 책상 위에 올려둬",
        "en": "put it on the desk"
       },
       {
        "ko": "그것을 너의 손에 올려둬",
        "en": "put in on your hand"
       }
      ]
     },
     {
      "ko": "올려놔",
      "en": "put it on",
      "ex": [
       {
        "ko": "책장 위에 올려놔",
        "en": "put it on the bookshelf"
       },
       {
        "ko": "침대 위에 올려놔",
        "en": "put it on the bed"
       },
       {
        "ko": "옷장 위에 올려놨어",
        "en": "put it on the chair"
       }
      ]
     },
     {
      "ko": "거기에 놔",
      "en": "put it there",
      "ex": [
       {
        "ko": "네 가방을 거기에 놔",
        "en": "put your bag there"
       },
       {
        "ko": "내 책을 거기에 놔",
        "en": "put my book there"
       },
       {
        "ko": "내 컵을 거기에 놔",
        "en": "put my cup there"
       }
      ]
     },
     {
      "ko": "연결해",
      "en": "put it together",
      "ex": [
       {
        "ko": "모든 것을 연결해",
        "en": "put everything together"
       },
       {
        "ko": "무엇인가를 연결해",
        "en": "put something together"
       },
       {
        "ko": "이것을 연결해",
        "en": "put it together"
       }
      ]
     },
     {
      "ko": "아래에 두다",
      "en": "put under",
      "ex": [
       {
        "ko": "내 컵을 테이블 아래에 둬",
        "en": "put my cup under the table"
       },
       {
        "ko": "내 가방을 책상 아래에 둬",
        "en": "put my bag under the desk"
       },
       {
        "ko": "내 펜을 책 아래에 둬",
        "en": "put my pen under the book"
       }
      ]
     },
     {
      "ko": "올려두었다",
      "en": "put it on",
      "ex": [
       {
        "ko": "이것을 지붕 위에 올려뒀어",
        "en": "put this on the roof"
       },
       {
        "ko": "내 책을 책상 위에 올려뒀어",
        "en": "put my book on the desk"
       },
       {
        "ko": "바나나를 테이블 위에 올려뒀어",
        "en": "put bananas on the table"
       }
      ]
     },
     {
      "ko": "올려놨어",
      "en": "put it on",
      "ex": [
       {
        "ko": "이것을 올려놨어",
        "en": "put this on"
       },
       {
        "ko": "나무 위에 올려놨어",
        "en": "put it on the tree"
       },
       {
        "ko": "옷장 위에 올려놨어",
        "en": "put it on the closet"
       }
      ]
     },
     {
      "ko": "거기에 놨어",
      "en": "put it there",
      "ex": [
       {
        "ko": "휴대폰을 거기에 놨어",
        "en": "put the cell phone there"
       },
       {
        "ko": "내 커피를 거기에 놨어",
        "en": "put my coffee there"
       },
       {
        "ko": "초콜릿을 거기에 놨어",
        "en": "put the chocolate there"
       }
      ]
     },
     {
      "ko": "연결했어",
      "en": "put it together",
      "ex": [
       {
        "ko": "그것들을 연결했어",
        "en": "put those together"
       },
       {
        "ko": "선을 연결했어",
        "en": "put lines together"
       },
       {
        "ko": "모든 조각들을 연결했어",
        "en": "put all pieces together"
       }
      ]
     },
     {
      "ko": "아래에 두었다",
      "en": "put under",
      "ex": [
       {
        "ko": "그것을 의자 아래에 두었어",
        "en": "put it under the chair"
       },
       {
        "ko": "내 열쇠를 의자 아래에 두었어",
        "en": "put my key under the chair"
       },
       {
        "ko": "내 모자를 책상 아래에 두었어",
        "en": "put my hat under the desk"
       }
      ]
     },
     {
      "ko": "위에 두다",
      "en": "put up there",
      "ex": [
       {
        "ko": "내 가방을 올려놔",
        "en": "put my bag up there"
       },
       {
        "ko": "내 책을 올려놔",
        "en": "put my book up there"
       },
       {
        "ko": "내 펜을 올려놔",
        "en": "put my pen up there"
       }
      ]
     },
     {
      "ko": "수강 신청하다",
      "en": "register for classes",
      "ex": [
       {
        "ko": "수강 신청해",
        "en": "register for classes"
       },
       {
        "ko": "나중에 수강 신청해",
        "en": "register for classes later"
       },
       {
        "ko": "영어수업 신청해",
        "en": "register for an English class"
       }
      ]
     },
     {
      "ko": "저축하다",
      "en": "save money",
      "ex": [
       {
        "ko": "매달마다 저축해",
        "en": "save money every month"
       },
       {
        "ko": "매주마다 저축해",
        "en": "save money every week"
       },
       {
        "ko": "매번 저축해",
        "en": "save money every time"
       }
      ]
     },
     {
      "ko": "안부를 묻다",
      "en": "say hello",
      "ex": [
       {
        "ko": "너네 부모님께 안부 전해줘!",
        "en": "Say hello to your parents for me!"
       },
       {
        "ko": "그녀에게 안부 전해줘!",
        "en": "Say hello to her for me!"
       },
       {
        "ko": "너네 엄마에게 안부 전해줘!",
        "en": "Say hello to your mom for me!"
       }
      ]
     },
     {
      "ko": "앉다",
      "en": "sit down",
      "ex": [
       {
        "ko": "앉아줘",
        "en": "sit down please"
       },
       {
        "ko": "지금 앉아",
        "en": "sit down now"
       },
       {
        "ko": "의자에 앉아",
        "en": "sit down on the chair"
       }
      ]
     },
     {
      "ko": "위에 두었다",
      "en": "put up there",
      "ex": [
       {
        "ko": "내 휴대폰을 올려놓았어",
        "en": "put my cellphone up there"
       },
       {
        "ko": "내 컵을 올려놓았어",
        "en": "put my cup up there"
       },
       {
        "ko": "컴퓨터를 올려놓았어",
        "en": "put the computer up there"
       }
      ]
     },
     {
      "ko": "수강신청 했다",
      "en": "registered for classes",
      "ex": [
       {
        "ko": "저번주에 수강 신청했어",
        "en": "registered for classes last week"
       },
       {
        "ko": "일요일에 수강 신청했어",
        "en": "registered for classes on Sunday"
       },
       {
        "ko": "수강 신청 어제 저녁에 했어",
        "en": "registered for classes last night"
       }
      ]
     },
     {
      "ko": "저축했다",
      "en": "saved money",
      "ex": [
       {
        "ko": "그녀는 저축했어.",
        "en": "She saved money."
       },
       {
        "ko": "걔네들은 저축했어.",
        "en": "They saved money."
       },
       {
        "ko": "우리 엄마는 저축했어.",
        "en": "My mom saved money."
       }
      ]
     },
     {
      "ko": "안부를 물었다",
      "en": "said hello",
      "ex": [
       {
        "ko": "걔가 그녀에게 안부 물었어.",
        "en": "He said hello to her."
       },
       {
        "ko": "내 엄마가 너에게 안부 물었어.",
        "en": "My mom said hello to you."
       },
       {
        "ko": "걔네들이 내 친구들에게 안부 물었어.",
        "en": "They said hello to my friends."
       }
      ]
     },
     {
      "ko": "앉았다",
      "en": "sat down",
      "ex": [
       {
        "ko": "나와 함께 앉았어",
        "en": "sat down with me"
       },
       {
        "ko": "내 옆에 앉았어",
        "en": "sat down beside me"
       },
       {
        "ko": "조심해서 앉았어",
        "en": "sat down carefully"
       }
      ]
     },
     {
      "ko": "늦잠 자다",
      "en": "sleep in",
      "ex": [
       {
        "ko": "항상 늦잠 자",
        "en": "always sleep in"
       },
       {
        "ko": "일요일마다 늦잠을 자",
        "en": "sleep in on Sundays"
       },
       {
        "ko": "주말에 늦잠을 자",
        "en": "sleep in on weekends"
       }
      ]
     },
     {
      "ko": "일어서다",
      "en": "stand up",
      "ex": [
       {
        "ko": "나와 함께 일어서",
        "en": "stand up with me"
       },
       {
        "ko": "그와 함께 일어서",
        "en": "stand up with him"
       },
       {
        "ko": "바로 지금 일어서",
        "en": "stand up right now"
       }
      ]
     },
     {
      "ko": "시험 공부를 하다",
      "en": "study for the test",
      "ex": [
       {
        "ko": "시험 공부해야만 해",
        "en": "have to study for the test"
       },
       {
        "ko": "시험 공부해야 할 필요가 있어",
        "en": "need to study for the test"
       },
       {
        "ko": "그녀랑 시험공부를 해",
        "en": "study for the test with her"
       }
      ]
     },
     {
      "ko": "한번 봐",
      "en": "take a look",
      "ex": [
       {
        "ko": "안쪽을 한번 봐",
        "en": "take a look inside"
       },
       {
        "ko": "주변을 한번 봐",
        "en": "take a look around"
       },
       {
        "ko": "다시 한번 봐",
        "en": "take a look again"
       }
      ]
     },
     {
      "ko": "검토해",
      "en": "take a look",
      "ex": [
       {
        "ko": "이것을 검토해",
        "en": "take a look at this"
       },
       {
        "ko": "저것을 검토해",
        "en": "take a look at that"
       },
       {
        "ko": "그것을 검토해",
        "en": "take a look at it"
       }
      ]
     },
     {
      "ko": "늦잠 잤다",
      "en": "slept in",
      "ex": [
       {
        "ko": "또 늦잠 잤어",
        "en": "slept in again"
       },
       {
        "ko": "어제 늦잠 잤어",
        "en": "slept in yesterday"
       },
       {
        "ko": "주말에 늦잠 잤어",
        "en": "slept in on the weekend"
       }
      ]
     },
     {
      "ko": "일어섰다",
      "en": "stood up",
      "ex": [
       {
        "ko": "너와 함께 일어섰어",
        "en": "stood up with you"
       },
       {
        "ko": "아주 잘 일어섰어",
        "en": "stood up very well"
       },
       {
        "ko": "스스로 일어섰어",
        "en": "stood up by myself"
       }
      ]
     },
     {
      "ko": "시험 공부를 했다",
      "en": "studied for the test",
      "ex": [
       {
        "ko": "어제 저녁에 시험 공부했어",
        "en": "studied for the test last night"
       },
       {
        "ko": "다시 시험 공부했어",
        "en": "studied for the test again"
       },
       {
        "ko": "시험 공부 열심히 했어",
        "en": "studied hard for the test"
       }
      ]
     },
     {
      "ko": "한번 봤어",
      "en": "took a look",
      "ex": [
       {
        "ko": "무엇인가를 한번 봤어",
        "en": "took a look at something"
       },
       {
        "ko": "이 가방을 한번 봤어",
        "en": "took a look at this bag"
       },
       {
        "ko": "이 책을 한번 봤어",
        "en": "took a look at this book"
       }
      ]
     },
     {
      "ko": "검토했어",
      "en": "took a look",
      "ex": [
       {
        "ko": "나 혼자서 검토했어",
        "en": "took a look on my own"
       },
       {
        "ko": "이 시스템을 검토했어",
        "en": "took a look at this system"
       },
       {
        "ko": "이 시험을 검토했어",
        "en": "took a look at this test"
       }
      ]
     }
    ]
   },
   {
    "theme": "감각 Senses (10)",
    "items": [
     {
      "ko": "가지고 들어가다",
      "en": "take in",
      "ex": [
       {
        "ko": "이것을 가지고 들어가",
        "en": "take this in"
       },
       {
        "ko": "내 공책을 가지고 들어가",
        "en": "take my notebook in"
       },
       {
        "ko": "내 커피를 가지고 들어가",
        "en": "take my coffee in"
       }
      ]
     },
     {
      "ko": "빼",
      "en": "take out",
      "ex": [
       {
        "ko": "돈을 조금 빼",
        "en": "take out a little money"
       },
       {
        "ko": "동전을 몇 개 빼",
        "en": "take out a few coins"
       },
       {
        "ko": "담배를 빼",
        "en": "take out the cigar"
       }
      ]
     },
     {
      "ko": "꺼내다",
      "en": "take out",
      "ex": [
       {
        "ko": "돈을 꺼내",
        "en": "take out money"
       },
       {
        "ko": "열쇠를 꺼내",
        "en": "take out a key"
       },
       {
        "ko": "명함을 꺼내",
        "en": "take out a business card"
       }
      ]
     },
     {
      "ko": "쓰레기 버리다",
      "en": "take out the garbage",
      "ex": [
       {
        "ko": "지금 쓰레기를 버려",
        "en": "take out the garbage now"
       },
       {
        "ko": "오늘 쓰레기를 버려",
        "en": "take out the garbage today"
       },
       {
        "ko": "그녀를 위해 쓰레기를 버려",
        "en": "take out the garbage for her"
       }
      ]
     },
     {
      "ko": "청소기를 돌리다",
      "en": "vacuum the floor",
      "ex": [
       {
        "ko": "전체 바닥을 청소해",
        "en": "vacuum the entire floor"
       },
       {
        "ko": "매일 청소기를 돌려",
        "en": "vacuum the floor every day"
       },
       {
        "ko": "내일 청소기를 돌려",
        "en": "vacuum the floor tomorrow"
       }
      ]
     },
     {
      "ko": "가지고 들어갔다",
      "en": "took in",
      "ex": [
       {
        "ko": "내 휴대폰을 가지고 들어갔어",
        "en": "took my cell phone in"
       },
       {
        "ko": "내 돈을 가지고 들어갔어",
        "en": "took my money in"
       },
       {
        "ko": "내 가방을 가지고 들어갔어",
        "en": "took my bag in"
       }
      ]
     },
     {
      "ko": "뺐어",
      "en": "took out",
      "ex": [
       {
        "ko": "그 숫자를 뺐어",
        "en": "took out the number"
       },
       {
        "ko": "그 그림을 뺐어",
        "en": "took out the picture"
       },
       {
        "ko": "그 종이를 뺐어",
        "en": "took out the paper"
       }
      ]
     },
     {
      "ko": "꺼냈다",
      "en": "took out",
      "ex": [
       {
        "ko": "내 전화기를 꺼냈어",
        "en": "took out my cell phone"
       },
       {
        "ko": "내 여권을 꺼냈어",
        "en": "took out my passport"
       },
       {
        "ko": "내 책을 꺼냈어",
        "en": "took out my book"
       }
      ]
     },
     {
      "ko": "쓰레기 버렸다",
      "en": "took out the garbage",
      "ex": [
       {
        "ko": "다시 쓰레기를 버렸어",
        "en": "took out the garbage again"
       },
       {
        "ko": "너를 위해 쓰레기를 버렸어",
        "en": "took out the garbage for you"
       },
       {
        "ko": "나와 함께 쓰레기를 버렸어",
        "en": "took out the garbage with me"
       }
      ]
     },
     {
      "ko": "청소기를 돌렸다",
      "en": "vacuumed the floor",
      "ex": [
       {
        "ko": "어제 청소기를 돌렸어",
        "en": "vacuumed the floor yesterday"
       },
       {
        "ko": "어제 저녁 청소기를 돌렸어",
        "en": "vacuumed the floor last night"
       },
       {
        "ko": "다시 청소기를 돌렸어",
        "en": "vacuumed the floor again"
       }
      ]
     },
     {
      "ko": "경기를 관람하다",
      "en": "watch a game",
      "ex": [
       {
        "ko": "걔랑 경기 관람해",
        "en": "watch a game with him"
       },
       {
        "ko": "그녀랑 경기 관람해",
        "en": "watch a game with her"
       },
       {
        "ko": "걔네들이랑 경기 관람해",
        "en": "watch a game with them"
       }
      ]
     },
     {
      "ko": "일기예보를 보다",
      "en": "watch the weather forecast",
      "ex": [
       {
        "ko": "나 일기예보 봐.",
        "en": "I watch the weather forecast."
       },
       {
        "ko": "너 일기예보 보니?",
        "en": "Do you watch the weather forecast?"
       },
       {
        "ko": "그녀는 일기예보를 봐.",
        "en": "She watches the weather forecast."
       }
      ]
     },
     {
      "ko": "바닥을 닦다",
      "en": "wipe the floor",
      "ex": [
       {
        "ko": "매일 바닥을 닦아",
        "en": "wipe the floor every day"
       },
       {
        "ko": "주말에 바닥을 닦아",
        "en": "wipe the floor on weekends"
       },
       {
        "ko": "월요일에 바닥을 닦아",
        "en": "wipe the floor on Monday"
       }
      ]
     },
     {
      "ko": "돈을 찾다",
      "en": "withdraw money",
      "ex": [
       {
        "ko": "돈을 조금 찾아",
        "en": "withdraw some money"
       },
       {
        "ko": "돈을 더 찾아",
        "en": "withdraw more money"
       },
       {
        "ko": "많은 돈을 찾아",
        "en": "withdraw a lot of money"
       }
      ]
     },
     {
      "ko": "정리해",
      "en": "wrap it up",
      "ex": [
       {
        "ko": "잘 정리해",
        "en": "wrap it up well"
       },
       {
        "ko": "주의해서 정리해",
        "en": "wrap it up carefully"
       },
       {
        "ko": "오늘 정리해",
        "en": "wrap it up today"
       }
      ]
     },
     {
      "ko": "경기를 관람했다",
      "en": "watched a game",
      "ex": [
       {
        "ko": "어제 경기 관람했어",
        "en": "watched a game yesterday"
       },
       {
        "ko": "화요일에 경기 관람했어",
        "en": "watched a game on Tuesday"
       },
       {
        "ko": "금요일에 경기 관람했어",
        "en": "watched a game on Friday"
       }
      ]
     },
     {
      "ko": "일기예보를 봤다",
      "en": "watched the weather forecast",
      "ex": [
       {
        "ko": "다시 일기예보 봤어",
        "en": "watched the weather forecast again"
       },
       {
        "ko": "어제 일기예보 봤어",
        "en": "watched the weather forecast yesterday"
       },
       {
        "ko": "2시에 일기예보 봤어",
        "en": "watched the weather forecast at 2 p.m."
       }
      ]
     },
     {
      "ko": "바닥을 닦았다",
      "en": "wiped the floor",
      "ex": [
       {
        "ko": "식당 바닥을 닦았어",
        "en": "wiped the floor in the dining room"
       },
       {
        "ko": "복도 바닥을 닦았어",
        "en": "wiped the floor in the hall"
       },
       {
        "ko": "방 바닥을 닦았어",
        "en": "wiped the floor in the room"
       }
      ]
     },
     {
      "ko": "돈을 찾았다",
      "en": "withdrew money",
      "ex": [
       {
        "ko": "20불을 찾았어",
        "en": "withdrew $20"
       },
       {
        "ko": "100불을 찾았어",
        "en": "withdrew $100"
       },
       {
        "ko": "약간의 돈을 찾았어",
        "en": "withdrew some money"
       }
      ]
     },
     {
      "ko": "정리했어",
      "en": "wrapped it up",
      "ex": [
       {
        "ko": "일요일에 정리했어",
        "en": "wrapped it up on Sunday"
       },
       {
        "ko": "주말에 정리했어",
        "en": "wrapped it up on the weekend"
       },
       {
        "ko": "어제 정리했어",
        "en": "wrapped it up yesterday"
       }
      ]
     }
    ]
   },
   {
    "theme": "숙어 Phrases",
    "items": [
     {
      "ko": "결과에 승복하다",
      "en": "accept the result",
      "ex": [
       {
        "ko": "그 게임의 결과에 승복해",
        "en": "accept the result of the game"
       },
       {
        "ko": "형편없는 결과에 승복해",
        "en": "accept the poor result"
       },
       {
        "ko": "그 결과에 승복해야 돼",
        "en": "should accept the result"
       }
      ]
     },
     {
      "ko": "반칙하다",
      "en": "be against the rules",
      "ex": [
       {
        "ko": "저거 반칙이야.",
        "en": "That's against the rules."
       },
       {
        "ko": "이거 반칙이야?",
        "en": "Is this against the rules?"
       },
       {
        "ko": "이거는 반칙 아니야.",
        "en": "It's not against the rules."
       }
      ]
     },
     {
      "ko": "수다를 떨다",
      "en": "chat with",
      "ex": [
       {
        "ko": "내 친구들과 수다 떠는 중이야",
        "en": "be chatting with my friends"
       },
       {
        "ko": "내 동료들과 수다 떨어",
        "en": "chat with my coworkers"
       },
       {
        "ko": "너 룸메이트들과 수다 떨어",
        "en": "chat with your roommates"
       }
      ]
     },
     {
      "ko": "잔고를 확인하다",
      "en": "check the balance",
      "ex": [
       {
        "ko": "온라인으로 잔고를 확인해",
        "en": "check the balance online"
       },
       {
        "ko": "ATM으로 잔고를 확인해",
        "en": "check the balance at the ATM"
       },
       {
        "ko": "매일 잔고를 확인해",
        "en": "check the balance every day"
       }
      ]
     },
     {
      "ko": "편을 나누다",
      "en": "divide into teams",
      "ex": [
       {
        "ko": "걔네들을 두 팀으로 나눠",
        "en": "divide them into two teams"
       },
       {
        "ko": "걔네들을 세 팀으로 나눠",
        "en": "divide them into three teams"
       },
       {
        "ko": "걔네들 편으로 나누지 마",
        "en": "don't divide them into teams"
       }
      ]
     },
     {
      "ko": "결과에 승복했다",
      "en": "accepted the result",
      "ex": [
       {
        "ko": "우리는 결과에 승복했어.",
        "en": "We accepted the result."
       },
       {
        "ko": "걔네들은 결과에 승복했어.",
        "en": "They accepted the result."
       },
       {
        "ko": "나는 결과에 승복했어.",
        "en": "I accepted the result."
       }
      ]
     },
     {
      "ko": "반칙했다",
      "en": "was(were) against the rules",
      "ex": [
       {
        "ko": "저거 반칙이었어.",
        "en": "That was against the rules."
       },
       {
        "ko": "이거 반칙이었어.",
        "en": "It was against the rules."
       },
       {
        "ko": "당연히 반칙이었어",
        "en": "was definitely against the rules"
       }
      ]
     },
     {
      "ko": "수다를 떨었다",
      "en": "chatted with",
      "ex": [
       {
        "ko": "걔랑 전화로 수다 떨었어",
        "en": "chatted on the phone with him"
       },
       {
        "ko": "그녀랑 오늘 아침에 수다 떨었어",
        "en": "chatted with her this morning"
       },
       {
        "ko": "어제 내 친구와 수다 떨었어",
        "en": "chatted with my friend yesterday"
       }
      ]
     },
     {
      "ko": "잔고를 확인했다",
      "en": "checked the balance",
      "ex": [
       {
        "ko": "다시 잔고를 확인했어",
        "en": "checked the balance again"
       },
       {
        "ko": "같이 잔고를 확인했어",
        "en": "checked the balance together"
       },
       {
        "ko": "이미 잔고를 확인했어",
        "en": "already checked the balance"
       }
      ]
     },
     {
      "ko": "편을 나눴다",
      "en": "divided into teams",
      "ex": [
       {
        "ko": "3명씩 팀으로 나눴어",
        "en": "divided into teams of 3 people"
       },
       {
        "ko": "4명씩 팀으로 나눴어",
        "en": "divided into teams of 4 people"
       },
       {
        "ko": "5명씩 팀으로 나눴어",
        "en": "divided into teams of 5 people"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "cat": "일상표현",
  "icon": "🏠",
  "color": "#f59e0b",
  "desc": "매일 쓰는 일상 표현",
  "themes": [
   {
    "theme": "교육 Education (1)",
    "items": [
     {
      "ko": "붙이다",
      "en": "attach",
      "ex": [
       {
        "ko": "라벨을 붙여",
        "en": "attach a label"
       },
       {
        "ko": "우표를 붙여",
        "en": "attach a stamp"
       },
       {
        "ko": "메모를 붙여",
        "en": "attach a memo"
       }
      ]
     },
     {
      "ko": "출석하다",
      "en": "attend",
      "ex": [
       {
        "ko": "수업에 출석해",
        "en": "attend classes"
       },
       {
        "ko": "수업에 매일 출석해",
        "en": "attend classes every day"
       },
       {
        "ko": "그 수업에 출석 안 할 거야",
        "en": "will not attend the class"
       }
      ]
     },
     {
      "ko": "계산하다",
      "en": "calculate",
      "ex": [
       {
        "ko": "그 숫자들을 계산해",
        "en": "calculate the numbers"
       },
       {
        "ko": "그 합계를 계산해",
        "en": "calculate the total"
       },
       {
        "ko": "그 평균을 계산해",
        "en": "calculate the average"
       }
      ]
     },
     {
      "ko": "커닝을 하다",
      "en": "cheat",
      "ex": [
       {
        "ko": "시험에서 커닝을 해",
        "en": "cheat on the test"
       },
       {
        "ko": "영어 시험에서 커닝을 해",
        "en": "cheat on the English test"
       },
       {
        "ko": "국어 시험에서 커닝을 해",
        "en": "cheat on the Korean test"
       }
      ]
     },
     {
      "ko": "색칠하다",
      "en": "color",
      "ex": [
       {
        "ko": "내 머리카락을 염색해",
        "en": "color my hair"
       },
       {
        "ko": "내 종이를 색칠해",
        "en": "color my paper"
       },
       {
        "ko": "옷감을 색칠해",
        "en": "color the cloth"
       }
      ]
     },
     {
      "ko": "붙였다",
      "en": "attached",
      "ex": [
       {
        "ko": "중앙에 붙였어",
        "en": "attached to the center"
       },
       {
        "ko": "오른쪽에 붙였어",
        "en": "attached to the right side"
       },
       {
        "ko": "메모지를 붙였어",
        "en": "attached the memo note"
       }
      ]
     },
     {
      "ko": "출석했다",
      "en": "attended",
      "ex": [
       {
        "ko": "수업에 평소처럼 출석했어",
        "en": "attended classes as usual"
       },
       {
        "ko": "화요일에 수업에 출석했어",
        "en": "attended classes on Tuesday"
       },
       {
        "ko": "어제 그 수업에 출석 안 했어",
        "en": "did not attend the class yesterday"
       }
      ]
     },
     {
      "ko": "계산했다",
      "en": "calculated",
      "ex": [
       {
        "ko": "다시 계산했어",
        "en": "calculated it again"
       },
       {
        "ko": "여러 번 계산했어",
        "en": "calculated it several times"
       },
       {
        "ko": "빨리 계산했어",
        "en": "calculated it quickly"
       }
      ]
     },
     {
      "ko": "커닝을 했다",
      "en": "cheated",
      "ex": [
       {
        "ko": "커닝을 절대 안 했어",
        "en": "never cheated"
       },
       {
        "ko": "커닝을 많이 했어",
        "en": "cheated a lot"
       },
       {
        "ko": "시험에서 커닝을 했어",
        "en": "cheated on the exam"
       }
      ]
     },
     {
      "ko": "색칠했다",
      "en": "colored",
      "ex": [
       {
        "ko": "내 몸을 색칠했어",
        "en": "colored my body"
       },
       {
        "ko": "내 손톱을 색칠했어",
        "en": "colored my nails"
       },
       {
        "ko": "내 얼굴을 색칠했어",
        "en": "colored my face"
       }
      ]
     },
     {
      "ko": "자르다",
      "en": "cut",
      "ex": [
       {
        "ko": "내 머리카락을 잘라",
        "en": "cut my hair"
       },
       {
        "ko": "사과를 잘라",
        "en": "cut an apple"
       },
       {
        "ko": "내 손톱을 잘라",
        "en": "cut my nails"
       }
      ]
     },
     {
      "ko": "나누다",
      "en": "divide",
      "ex": [
       {
        "ko": "나눌 수 있어",
        "en": "can divide"
       },
       {
        "ko": "이 케이크를 6 조각으로 나눠",
        "en": "divide the cake into six"
       },
       {
        "ko": "똑같이 나눠",
        "en": "divide equally"
       }
      ]
     },
     {
      "ko": "숙제하다",
      "en": "do my homework",
      "ex": [
       {
        "ko": "집에서 숙제를 해",
        "en": "do my homework at home"
       },
       {
        "ko": "학교에서 숙제를 해",
        "en": "do my homework at school"
       },
       {
        "ko": "내 방에서 숙제를 해",
        "en": "do my homework in my room"
       }
      ]
     },
     {
      "ko": "그리다",
      "en": "draw",
      "ex": [
       {
        "ko": "그림을 그려",
        "en": "draw a picture"
       },
       {
        "ko": "원을 그려",
        "en": "draw a circle"
       },
       {
        "ko": "삼각형을 그려",
        "en": "draw a triangle"
       }
      ]
     },
     {
      "ko": "입학하다",
      "en": "enter",
      "ex": [
       {
        "ko": "대학에 가려고 해",
        "en": "plan to enter college"
       },
       {
        "ko": "고등학교에 빨리 입학하고 싶어",
        "en": "want to enter high school soon"
       },
       {
        "ko": "내년에 대학 입학할 거야",
        "en": "will enter college next year"
       }
      ]
     },
     {
      "ko": "잘랐다",
      "en": "cut",
      "ex": [
       {
        "ko": "종이를 잘랐어",
        "en": "cut the paper"
       },
       {
        "ko": "옷감을 잘랐어",
        "en": "cut the cloth"
       },
       {
        "ko": "나뭇가지를 잘랐어",
        "en": "cut a branch"
       }
      ]
     },
     {
      "ko": "나눴다",
      "en": "divided",
      "ex": [
       {
        "ko": "10 나누기 5는 2야!",
        "en": "10 divided by 5 is 2!"
       },
       {
        "ko": "4 나누기 2는 2야!",
        "en": "4 divided by 2 is 2!"
       },
       {
        "ko": "20 나누기 5는 뭐야?",
        "en": "What is 20 divided by 5?"
       }
      ]
     },
     {
      "ko": "숙제했다",
      "en": "did my homework",
      "ex": [
       {
        "ko": "밤에 숙제를 했어",
        "en": "did my homework at night"
       },
       {
        "ko": "정오에 숙제를 했어",
        "en": "did my homework at noon"
       },
       {
        "ko": "2시에 숙제를 했어",
        "en": "did my homework at two o'clock"
       }
      ]
     },
     {
      "ko": "그렸다",
      "en": "drew",
      "ex": [
       {
        "ko": "종이에 그렸어",
        "en": "drew on the paper"
       },
       {
        "ko": "옷감에 그렸어",
        "en": "drew on the cloth"
       },
       {
        "ko": "책에 그렸어",
        "en": "drew on the book"
       }
      ]
     },
     {
      "ko": "입학했다",
      "en": "entered",
      "ex": [
       {
        "ko": "나 고등학교에 입학했어.",
        "en": "I entered high school."
       },
       {
        "ko": "그녀는 작년에 대학 입학했어.",
        "en": "She entered college last year."
       },
       {
        "ko": "그들은 3월에 대학 입학했어.",
        "en": "They entered college in March."
       }
      ]
     },
     {
      "ko": "접다",
      "en": "fold",
      "ex": [
       {
        "ko": "종이를 접어",
        "en": "fold the paper"
       },
       {
        "ko": "신문을 접어",
        "en": "fold the newspaper"
       },
       {
        "ko": "수건을 접어",
        "en": "fold the towel"
       }
      ]
     },
     {
      "ko": "졸업하다",
      "en": "graduate",
      "ex": [
       {
        "ko": "고등학교 졸업해",
        "en": "graduate from high school"
       },
       {
        "ko": "대학교 졸업해",
        "en": "graduate from college"
       },
       {
        "ko": "내년에 대학교 졸업할 거야",
        "en": "will graduate from college next year"
       }
      ]
     },
     {
      "ko": "배우다",
      "en": "learn",
      "ex": [
       {
        "ko": "느리게 배워",
        "en": "learn slowly"
       },
       {
        "ko": "빠르게 배워",
        "en": "learn rapidly"
       },
       {
        "ko": "함께 배워",
        "en": "learn together"
       }
      ]
     },
     {
      "ko": "듣다",
      "en": "listen",
      "ex": [
       {
        "ko": "지루한 강의 들어",
        "en": "listen to boring lectures"
       },
       {
        "ko": "신중하게 들어",
        "en": "listen carefully"
       },
       {
        "ko": "내 선생님 말 들을 수 있어",
        "en": "can listen to my teacher"
       }
      ]
     },
     {
      "ko": "만들다",
      "en": "make",
      "ex": [
       {
        "ko": "무언가를 만들어",
        "en": "make something"
       },
       {
        "ko": "그것을 만들어",
        "en": "make it"
       },
       {
        "ko": "인형을 만들어",
        "en": "make a doll"
       }
      ]
     },
     {
      "ko": "접었다",
      "en": "folded",
      "ex": [
       {
        "ko": "오른쪽으로 접었어",
        "en": "folded to the right side"
       },
       {
        "ko": "반으로 접었어",
        "en": "folded in half"
       },
       {
        "ko": "깔끔하게 접었어",
        "en": "folded neatly"
       }
      ]
     },
     {
      "ko": "졸업했다",
      "en": "graduated",
      "ex": [
       {
        "ko": "고등학교 졸업했어",
        "en": "graduated from high school"
       },
       {
        "ko": "2010년에 대학교 졸업했어",
        "en": "graduated from college in 2010"
       },
       {
        "ko": "작년에 대학교 졸업했어",
        "en": "graduated from college last year"
       }
      ]
     },
     {
      "ko": "배웠다",
      "en": "learned",
      "ex": [
       {
        "ko": "음악에 관해 배웠어",
        "en": "learned about music"
       },
       {
        "ko": "노래하는 걸 배웠어",
        "en": "learned to sing"
       },
       {
        "ko": "싸우는 걸 배웠어",
        "en": "learned to fight"
       }
      ]
     },
     {
      "ko": "들었다",
      "en": "listened",
      "ex": [
       {
        "ko": "그 교수님의 말을 들었어",
        "en": "listened to the professor"
       },
       {
        "ko": "걔가 뭐라고 말했는지 들었어",
        "en": "listened to what he said"
       },
       {
        "ko": "나 그것을 들었어.",
        "en": "I listened to it."
       }
      ]
     },
     {
      "ko": "만들었다",
      "en": "made",
      "ex": [
       {
        "ko": "샌드위치를 만들었어",
        "en": "made sandwiches"
       },
       {
        "ko": "햄버거를 만들었어",
        "en": "made hamburgers"
       },
       {
        "ko": "수프를 만들었어",
        "en": "made soup"
       }
      ]
     }
    ]
   },
   {
    "theme": "교육 Education (2)",
    "items": [
     {
      "ko": "외우다",
      "en": "memorize",
      "ex": [
       {
        "ko": "그 단어를 외워",
        "en": "memorize the word"
       },
       {
        "ko": "많은 단어를 외워",
        "en": "memorize a lot of words"
       },
       {
        "ko": "그 메시지를 외워",
        "en": "memorized the message"
       }
      ]
     },
     {
      "ko": "곱하다",
      "en": "multiply",
      "ex": [
       {
        "ko": "곱할 수 있어",
        "en": "can multiply"
       },
       {
        "ko": "2에 3 곱해!",
        "en": "Multiply 2 by 3!"
       },
       {
        "ko": "이거에 4 곱해!",
        "en": "Multiply it by 4!"
       }
      ]
     },
     {
      "ko": "예습하다",
      "en": "prepare",
      "ex": [
       {
        "ko": "내일 수업을 예습해",
        "en": "prepare for tomorrow's class"
       },
       {
        "ko": "그 시험을 준비해",
        "en": "prepare for the test"
       },
       {
        "ko": "수업 전에 예습해",
        "en": "prepare before class"
       }
      ]
     },
     {
      "ko": "읽다",
      "en": "read",
      "ex": [
       {
        "ko": "교과서 읽어",
        "en": "read textbooks"
       },
       {
        "ko": "그 책 여러 번 읽어",
        "en": "read the book several times"
       },
       {
        "ko": "이 강의 계획서를 읽어",
        "en": "read this syllabus"
       }
      ]
     },
     {
      "ko": "복습하다",
      "en": "review",
      "ex": [
       {
        "ko": "이거 복습해",
        "en": "review it"
       },
       {
        "ko": "그 강의를 복습해",
        "en": "review the lecture"
       },
       {
        "ko": "이거 다시 복습할 거야",
        "en": "will review it again"
       }
      ]
     },
     {
      "ko": "외웠다",
      "en": "memorized",
      "ex": [
       {
        "ko": "가능한 한 많이 외웠어",
        "en": "memorized as much as possible"
       },
       {
        "ko": "그 노래를 외웠어",
        "en": "memorized the song"
       },
       {
        "ko": "그 책을 외웠어",
        "en": "memorized the book"
       }
      ]
     },
     {
      "ko": "곱했다",
      "en": "multiplied",
      "ex": [
       {
        "ko": "다시 곱했어",
        "en": "multiplied again"
       },
       {
        "ko": "빨리 곱했어",
        "en": "multiplied quickly"
       },
       {
        "ko": "처음부터 다시 곱했어",
        "en": "multiplied all over again"
       }
      ]
     },
     {
      "ko": "예습했다",
      "en": "prepared",
      "ex": [
       {
        "ko": "첫 수업을 예습했어",
        "en": "prepared for the first class"
       },
       {
        "ko": "7과를 예습했어",
        "en": "prepared for lesson 7"
       },
       {
        "ko": "내 수업을 예습했어",
        "en": "prepared for my class"
       }
      ]
     },
     {
      "ko": "읽었다",
      "en": "read",
      "ex": [
       {
        "ko": "이거 다시 읽었어",
        "en": "read it again"
       },
       {
        "ko": "정확하게 읽었어",
        "en": "read correctly"
       },
       {
        "ko": "그 단원 읽었어",
        "en": "read the chapter"
       }
      ]
     },
     {
      "ko": "복습했다",
      "en": "reviewed",
      "ex": [
       {
        "ko": "이거 다시 복습했어",
        "en": "reviewed it again"
       },
       {
        "ko": "그녀의 노트 복습했어",
        "en": "reviewed her notes"
       },
       {
        "ko": "오늘 수업을 복습했어",
        "en": "reviewed today's class"
       }
      ]
     },
     {
      "ko": "말하다",
      "en": "speak",
      "ex": [
       {
        "ko": "명확하게 말해",
        "en": "speak clearly"
       },
       {
        "ko": "큰 소리로 말해",
        "en": "speak loudly"
       },
       {
        "ko": "그것에 관해 말해",
        "en": "speak about it"
       }
      ]
     },
     {
      "ko": "철자를 쓰다",
      "en": "spell",
      "ex": [
       {
        "ko": "내 이름의 철자를 써",
        "en": "spell my name"
       },
       {
        "ko": "내 성의 철자를 써",
        "en": "spell my last name"
       },
       {
        "ko": "그 단어의 철자를 써",
        "en": "spell the word"
       }
      ]
     },
     {
      "ko": "공부하다",
      "en": "study",
      "ex": [
       {
        "ko": "영어를 공부해",
        "en": "study English"
       },
       {
        "ko": "열심히 공부해",
        "en": "study hard"
       },
       {
        "ko": "음악을 공부해",
        "en": "study music"
       }
      ]
     },
     {
      "ko": "늦다",
      "en": "be late",
      "ex": [
       {
        "ko": "학교에 늦어",
        "en": "be late for school"
       },
       {
        "ko": "진짜 늦어",
        "en": "be really late"
       },
       {
        "ko": "수업에 늦어",
        "en": "be late for class"
       }
      ]
     },
     {
      "ko": "(수업을) 듣다",
      "en": "take",
      "ex": [
       {
        "ko": "영어 수업을 들어",
        "en": "take the English class"
       },
       {
        "ko": "역사 수업을 들어",
        "en": "take the history class"
       },
       {
        "ko": "음악 수업을 들어",
        "en": "take the music class"
       }
      ]
     },
     {
      "ko": "말했다",
      "en": "spoke",
      "ex": [
       {
        "ko": "진실을 말했어",
        "en": "spoke the truth"
       },
       {
        "ko": "낮은 소리로 말했어",
        "en": "spoke in low tones"
       },
       {
        "ko": "그에게 말했어",
        "en": "spoke to him"
       }
      ]
     },
     {
      "ko": "철자를 썼다",
      "en": "spelled",
      "ex": [
       {
        "ko": "바르게 썼어",
        "en": "spelled right"
       },
       {
        "ko": "틀리게 썼어",
        "en": "spelled wrong"
       },
       {
        "ko": "무언가를 썼어",
        "en": "spelled something"
       }
      ]
     },
     {
      "ko": "공부했다",
      "en": "studied",
      "ex": [
       {
        "ko": "역사를 공부했어",
        "en": "studied history"
       },
       {
        "ko": "밤낮으로 공부했어",
        "en": "studied day and night"
       },
       {
        "ko": "수학을 공부했어",
        "en": "studied mathematics"
       }
      ]
     },
     {
      "ko": "늦었다",
      "en": "was(were) late",
      "ex": [
       {
        "ko": "그녀는 늦었어.",
        "en": "She was late."
       },
       {
        "ko": "걔는 안 늦었어.",
        "en": "He wasn't late."
       },
       {
        "ko": "너는 늦었어.",
        "en": "You were late."
       }
      ]
     },
     {
      "ko": "(수업을) 들었다",
      "en": "took",
      "ex": [
       {
        "ko": "수업을 들었어",
        "en": "took the class"
       },
       {
        "ko": "무용 수업을 들었어",
        "en": "took the dance class"
       },
       {
        "ko": "국어 수업을 들었어",
        "en": "took the Korean class"
       }
      ]
     },
     {
      "ko": "시험을 보다",
      "en": "take a test",
      "ex": [
       {
        "ko": "짧은 시험을 봐",
        "en": "take a short test"
       },
       {
        "ko": "기초적인 시험을 봐",
        "en": "take a basic test"
       },
       {
        "ko": "어려운 시험을 봐",
        "en": "take a hard test"
       }
      ]
     },
     {
      "ko": "가르치다",
      "en": "teach",
      "ex": [
       {
        "ko": "학생을 가르쳐",
        "en": "teach students"
       },
       {
        "ko": "고등학교에서 가르쳐",
        "en": "teach at high school"
       },
       {
        "ko": "중학교에서 가르쳐",
        "en": "teach at middle school"
       }
      ]
     },
     {
      "ko": "편입하다(전학가다)",
      "en": "transfer",
      "ex": [
       {
        "ko": "더 좋은 학교로 편입해",
        "en": "transfer to a better school"
       },
       {
        "ko": "새로운 학교로 전학 가",
        "en": "transfer to a new school"
       },
       {
        "ko": "다른 학교로 전학 가",
        "en": "transfer to another school"
       }
      ]
     },
     {
      "ko": "쓰다",
      "en": "write",
      "ex": [
       {
        "ko": "잘 써",
        "en": "write well"
       },
       {
        "ko": "영어로 써",
        "en": "write in English"
       },
       {
        "ko": "연필로 써",
        "en": "write with a pencil"
       }
      ]
     },
     {
      "ko": "결석하다",
      "en": "be absent",
      "ex": [
       {
        "ko": "금요일에 결석해",
        "en": "be absent on Friday"
       },
       {
        "ko": "학교에 결석해",
        "en": "be absent from school"
       },
       {
        "ko": "수업에 결석해",
        "en": "be absent from class"
       }
      ]
     },
     {
      "ko": "시험을 봤다",
      "en": "took a test",
      "ex": [
       {
        "ko": "쓰기 시험을 봤어",
        "en": "took a writing test"
       },
       {
        "ko": "읽기 시험을 봤어",
        "en": "took a reading test"
       },
       {
        "ko": "말하기 시험을 봤어",
        "en": "took a speaking test"
       }
      ]
     },
     {
      "ko": "가르쳤다",
      "en": "taught",
      "ex": [
       {
        "ko": "그를 가르쳤어",
        "en": "taught him"
       },
       {
        "ko": "너에게 모든 것을 가르쳤어",
        "en": "taught you everything"
       },
       {
        "ko": "그들을 가르쳤어",
        "en": "taught them"
       }
      ]
     },
     {
      "ko": "편입했다(전학갔다)",
      "en": "transferred",
      "ex": [
       {
        "ko": "더 큰 학교로 편입했어",
        "en": "transferred to a bigger school"
       },
       {
        "ko": "서울에 있는 학교로 전학 갔어",
        "en": "transferred to a school in Seoul"
       },
       {
        "ko": "사립학교로 전학 갔어",
        "en": "transferred to a private school"
       }
      ]
     },
     {
      "ko": "썼다",
      "en": "wrote",
      "ex": [
       {
        "ko": "책을 썼어",
        "en": "wrote a book"
       },
       {
        "ko": "편지를 썼어",
        "en": "wrote a letter"
       },
       {
        "ko": "일기를 썼어",
        "en": "wrote a diary"
       }
      ]
     },
     {
      "ko": "결석했다",
      "en": "was(were) absent",
      "ex": [
       {
        "ko": "나 금요일에 결석했어.",
        "en": "I was absent on Friday."
       },
       {
        "ko": "그녀는 학교에 결석했어.",
        "en": "She was absent from school."
       },
       {
        "ko": "그들은 수업에 결석했어.",
        "en": "They were absent from class."
       }
      ]
     }
    ]
   },
   {
    "theme": "교육 Education (3)",
    "items": [
     {
      "ko": "칠판",
      "en": "blackboard",
      "ex": [
       {
        "ko": "칠판을 깨끗이 해",
        "en": "clean the blackboard"
       },
       {
        "ko": "칠판을 닦아",
        "en": "wipe the blackboard"
       },
       {
        "ko": "칠판에 써",
        "en": "write on the blackboard"
       }
      ]
     },
     {
      "ko": "쉬는 시간",
      "en": "break",
      "ex": [
       {
        "ko": "쉬는 시간에 놀아",
        "en": "play during the break"
       },
       {
        "ko": "쉬는 시간에 공부해",
        "en": "study during the break"
       },
       {
        "ko": "쉬는 시간에 과자를 먹어",
        "en": "eat snacks during the break"
       }
      ]
     },
     {
      "ko": "교실",
      "en": "classroom",
      "ex": [
       {
        "ko": "교실에서 공부해",
        "en": "study in the classroom"
       },
       {
        "ko": "교실에서 놀아",
        "en": "play in the classroom"
       },
       {
        "ko": "교실에서 수업을 들어",
        "en": "take a lesson in the classroom"
       }
      ]
     },
     {
      "ko": "대학교",
      "en": "college",
      "ex": [
       {
        "ko": "대학교에 입학해",
        "en": "enter college"
       },
       {
        "ko": "대학교를 졸업해",
        "en": "graduate from college"
       },
       {
        "ko": "대학교에 가",
        "en": "go to college"
       }
      ]
     },
     {
      "ko": "초등학교",
      "en": "elementary school",
      "ex": [
       {
        "ko": "초등학교에 입학해",
        "en": "enter elementary school"
       },
       {
        "ko": "초등학교를 졸업해",
        "en": "graduate from elementary school"
       },
       {
        "ko": "초등학교에 가",
        "en": "go to elementary school"
       }
      ]
     },
     {
      "ko": "시험",
      "en": "exam",
      "ex": [
       {
        "ko": "그 시험에서 잘했어",
        "en": "did well on the exam"
       },
       {
        "ko": "그 시험에 통과했어",
        "en": "passed the exam"
       },
       {
        "ko": "그 시험에 실패했어",
        "en": "failed the exam"
       }
      ]
     },
     {
      "ko": "졸업",
      "en": "graduation",
      "ex": [
       {
        "ko": "내 졸업식을 참석해",
        "en": "attend my graduation"
       },
       {
        "ko": "그의 졸업식에서 상을 받아",
        "en": "get an award at his graduation"
       },
       {
        "ko": "그의 졸업식에서 그를 만났어",
        "en": "met him at his graduation"
       }
      ]
     },
     {
      "ko": "고등학교",
      "en": "high school",
      "ex": [
       {
        "ko": "고등학교에 입학해",
        "en": "enter high school"
       },
       {
        "ko": "고등학교를 졸업해",
        "en": "graduate from high school"
       },
       {
        "ko": "고등학교에 가",
        "en": "go to high school"
       }
      ]
     },
     {
      "ko": "중학교",
      "en": "junior high school",
      "ex": [
       {
        "ko": "중학교에 입학해",
        "en": "enter junior high school"
       },
       {
        "ko": "중학교를 졸업해",
        "en": "graduate from junior high school"
       },
       {
        "ko": "중학교에 가",
        "en": "go to junior high school"
       }
      ]
     },
     {
      "ko": "휴학",
      "en": "leave of absence",
      "ex": [
       {
        "ko": "휴학을 원해",
        "en": "want a leave of absence"
       },
       {
        "ko": "휴학을 결정했어",
        "en": "decided to have a leave of absence"
       },
       {
        "ko": "휴학을 연기했어",
        "en": "delayed the leave of absence"
       }
      ]
     },
     {
      "ko": "전공",
      "en": "major",
      "ex": [
       {
        "ko": "네 전공을 결정해",
        "en": "decide on your major"
       },
       {
        "ko": "걔 전공이 뭐야?",
        "en": "What is his major?"
       },
       {
        "ko": "내 전공을 바꿔",
        "en": "change my major"
       }
      ]
     },
     {
      "ko": "과제",
      "en": "paper",
      "ex": [
       {
        "ko": "과제를 제출해",
        "en": "submit a paper"
       },
       {
        "ko": "과제를 작성해",
        "en": "write a paper"
       },
       {
        "ko": "그 과제를 오늘 끝내야 해",
        "en": "have to finish the paper today"
       }
      ]
     },
     {
      "ko": "교칙",
      "en": "rule",
      "ex": [
       {
        "ko": "교칙을 써",
        "en": "write a rule"
       },
       {
        "ko": "교칙을 지켜",
        "en": "keep a rule"
       },
       {
        "ko": "교칙을 어기지 마!",
        "en": "Don't break rules!"
       }
      ]
     },
     {
      "ko": "장학금",
      "en": "scholarship",
      "ex": [
       {
        "ko": "장학금을 받았어",
        "en": "received a scholarship"
       },
       {
        "ko": "장학금으로 공부했어",
        "en": "studied on a scholarship"
       },
       {
        "ko": "내게 장학금을 줬어",
        "en": "offered me a scholarship"
       }
      ]
     },
     {
      "ko": "중퇴",
      "en": "school dropout",
      "ex": [
       {
        "ko": "걔는 중퇴자야.",
        "en": "He is a school dropout."
       },
       {
        "ko": "중퇴자가 되지 마.",
        "en": "Don't be a school dropout."
       },
       {
        "ko": "많은 중퇴자가 있어.",
        "en": "There are many school dropouts."
       }
      ]
     },
     {
      "ko": "개강",
      "en": "the first day of classes",
      "ex": [
       {
        "ko": "개강을 기다려",
        "en": "wait for the first day of classes"
       },
       {
        "ko": "개강이 싫어",
        "en": "don't like the first day of classes"
       },
       {
        "ko": "개강하길 기대해",
        "en": "look forward to the first day of classes"
       }
      ]
     },
     {
      "ko": "종강",
      "en": "the last day of classes",
      "ex": [
       {
        "ko": "종강을 좋아해",
        "en": "like the last day of classes"
       },
       {
        "ko": "종강을 좋아하지 않아",
        "en": "don't like the last day of classes"
       },
       {
        "ko": "종강이 있었어",
        "en": "had the last day of classes"
       }
      ]
     },
     {
      "ko": "시간표",
      "en": "timetable",
      "ex": [
       {
        "ko": "시간표를 따라",
        "en": "follow a timetable"
       },
       {
        "ko": "시간표를 만들어",
        "en": "make a timetable"
       },
       {
        "ko": "시간표를 봐",
        "en": "look at the timetable"
       }
      ]
     },
     {
      "ko": "교복",
      "en": "uniform",
      "ex": [
       {
        "ko": "교복을 입어",
        "en": "wear the uniform"
       },
       {
        "ko": "교복을 벗어",
        "en": "take off the uniform"
       },
       {
        "ko": "교복을 사",
        "en": "get the uniform"
       }
      ]
     },
     {
      "ko": "대학교",
      "en": "university",
      "ex": [
       {
        "ko": "대학교에 입학해",
        "en": "enter university"
       },
       {
        "ko": "대학교를 졸업해",
        "en": "graduate from university"
       },
       {
        "ko": "대학교에 가",
        "en": "go to university"
       }
      ]
     }
    ]
   },
   {
    "theme": "생활 Everyday (1)",
    "items": [
     {
      "ko": "추가해",
      "en": "add",
      "ex": [
       {
        "ko": "숫자를 추가해",
        "en": "add a number"
       },
       {
        "ko": "문장을 추가해",
        "en": "add a sentence"
       },
       {
        "ko": "종이를 추가해",
        "en": "add some paper"
       }
      ]
     },
     {
      "ko": "대답하다",
      "en": "answer",
      "ex": [
       {
        "ko": "내 질문에 대답해",
        "en": "answer my question"
       },
       {
        "ko": "내게 어떤 대답도 하지 않아",
        "en": "don't answer me a word"
       },
       {
        "ko": "내게 지금 바로 대답해",
        "en": "answer me right now"
       }
      ]
     },
     {
      "ko": "비난하다",
      "en": "blame",
      "ex": [
       {
        "ko": "그를 비난해",
        "en": "blame him"
       },
       {
        "ko": "내 스스로 자책해",
        "en": "blame myself"
       },
       {
        "ko": "너를 비난해",
        "en": "blame you"
       }
      ]
     },
     {
      "ko": "괴롭히다",
      "en": "bother",
      "ex": [
       {
        "ko": "나를 괴롭혀",
        "en": "bother me"
       },
       {
        "ko": "나를 전혀 괴롭히지 않아",
        "en": "don't bother me at all"
       },
       {
        "ko": "몹시 괴롭혀",
        "en": "bother so much"
       }
      ]
     },
     {
      "ko": "데리고 와",
      "en": "bring",
      "ex": [
       {
        "ko": "그를 데리고 와",
        "en": "bring him"
       },
       {
        "ko": "네 친구들을 데리고 와",
        "en": "bring your friends"
       },
       {
        "ko": "그들을 여기에 데리고 와",
        "en": "bring them here"
       }
      ]
     },
     {
      "ko": "추가했어",
      "en": "added",
      "ex": [
       {
        "ko": "설탕을 추가했어",
        "en": "added some sugar"
       },
       {
        "ko": "물을 추가했어",
        "en": "added some water"
       },
       {
        "ko": "이것을 추가했어",
        "en": "added this"
       }
      ]
     },
     {
      "ko": "대답했다",
      "en": "answered",
      "ex": [
       {
        "ko": "그에게 대답했어",
        "en": "answered him"
       },
       {
        "ko": "다시 대답했어",
        "en": "answered again"
       },
       {
        "ko": "내가 대답했어",
        "en": "I answered"
       }
      ]
     },
     {
      "ko": "비난했다",
      "en": "blamed",
      "ex": [
       {
        "ko": "나를 비난했어",
        "en": "blamed me"
       },
       {
        "ko": "그 소년을 비난했어",
        "en": "blamed the boy"
       },
       {
        "ko": "아무도 비난하지 않았어",
        "en": "didn't blame anyone"
       }
      ]
     },
     {
      "ko": "괴롭혔다",
      "en": "bothered",
      "ex": [
       {
        "ko": "너를 괴롭혔어",
        "en": "bothered you"
       },
       {
        "ko": "그것에 관해 괴롭혔어",
        "en": "bothered about it"
       },
       {
        "ko": "그 개를 괴롭혔어",
        "en": "bothered the dog"
       }
      ]
     },
     {
      "ko": "데리고 왔어",
      "en": "brought",
      "ex": [
       {
        "ko": "모두 데리고 왔어",
        "en": "brought everyone"
       },
       {
        "ko": "그의 남동생을 데리고 왔어",
        "en": "brought his brother"
       },
       {
        "ko": "내 여동생을 데리고 왔어",
        "en": "brought my sister"
       }
      ]
     },
     {
      "ko": "가지고 와",
      "en": "bring",
      "ex": [
       {
        "ko": "저것을 가지고 와",
        "en": "bring that"
       },
       {
        "ko": "네 과제를 가지고 와",
        "en": "bring your paper"
       },
       {
        "ko": "네 보고서를 가지고 와",
        "en": "bring your report"
       }
      ]
     },
     {
      "ko": "가져오다",
      "en": "bring",
      "ex": [
       {
        "ko": "저 책을 내게 가져와",
        "en": "bring me that book"
       },
       {
        "ko": "네 가방을 내게 가져와",
        "en": "bring me your bag"
       },
       {
        "ko": "커피를 내게 가져와",
        "en": "bring me the coffee"
       }
      ]
     },
     {
      "ko": "손질하다",
      "en": "brush",
      "ex": [
       {
        "ko": "이를 닦아",
        "en": "brush my teeth"
       },
       {
        "ko": "머리를 빗어",
        "en": "brush my hair"
       },
       {
        "ko": "코트를 손질해",
        "en": "brush my coat"
       }
      ]
     },
     {
      "ko": "부르다",
      "en": "call",
      "ex": [
       {
        "ko": "나를 불러",
        "en": "call me"
       },
       {
        "ko": "엄마를 불러",
        "en": "call my mother"
       },
       {
        "ko": "여동생을 불러",
        "en": "call my sister"
       }
      ]
     },
     {
      "ko": "잡다",
      "en": "catch",
      "ex": [
       {
        "ko": "공을 잡아",
        "en": "catch a ball"
       },
       {
        "ko": "가방을 잡아",
        "en": "catch a bag"
       },
       {
        "ko": "물고기를 잡아",
        "en": "catch fish"
       }
      ]
     },
     {
      "ko": "가지고 왔어",
      "en": "brought",
      "ex": [
       {
        "ko": "모든 걸 가지고 왔어",
        "en": "brought everything"
       },
       {
        "ko": "컴퓨터를 가지고 왔어",
        "en": "brought the computer"
       },
       {
        "ko": "피자를 가지고 왔어",
        "en": "brought the pizza"
       }
      ]
     },
     {
      "ko": "가져왔다",
      "en": "brought",
      "ex": [
       {
        "ko": "이 연필을 내게 가져왔어",
        "en": "brought me this pencil"
       },
       {
        "ko": "내 지갑을 네게 가져왔어",
        "en": "brought you my wallet"
       },
       {
        "ko": "우유를 네게 가져왔어",
        "en": "brought you some milk"
       }
      ]
     },
     {
      "ko": "손질했다",
      "en": "brushed",
      "ex": [
       {
        "ko": "열심히 손질했어",
        "en": "brushed hard"
       },
       {
        "ko": "부드럽게 손질했어",
        "en": "brushed softly"
       },
       {
        "ko": "깨끗하게 손질했어",
        "en": "brushed clean"
       }
      ]
     },
     {
      "ko": "불렀다",
      "en": "called",
      "ex": [
       {
        "ko": "그 의사를 불렀어",
        "en": "called the doctor"
       },
       {
        "ko": "그 선생님을 불렀어",
        "en": "called the teacher"
       },
       {
        "ko": "그 학생을 불렀어",
        "en": "called the student"
       }
      ]
     },
     {
      "ko": "잡았다",
      "en": "caught",
      "ex": [
       {
        "ko": "택시를 잡았어",
        "en": "caught the taxi"
       },
       {
        "ko": "마지막 기차를 잡았어",
        "en": "caught the last train"
       },
       {
        "ko": "버스를 잡았어",
        "en": "caught the bus"
       }
      ]
     },
     {
      "ko": "청소하다",
      "en": "clean",
      "ex": [
       {
        "ko": "너 방 청소해!",
        "en": "Clean your room!"
       },
       {
        "ko": "부엌 청소해",
        "en": "clean the kitchen"
       },
       {
        "ko": "그것들 치워",
        "en": "clean them up"
       }
      ]
     },
     {
      "ko": "오르다",
      "en": "climb",
      "ex": [
       {
        "ko": "산을 올라",
        "en": "climb the mountain"
       },
       {
        "ko": "계단을 올라",
        "en": "climb up the stairs"
       },
       {
        "ko": "언덕을 올라",
        "en": "climb up the hill"
       }
      ]
     },
     {
      "ko": "닫다",
      "en": "close",
      "ex": [
       {
        "ko": "문을 닫아",
        "en": "close the door"
       },
       {
        "ko": "창문을 닫아",
        "en": "close the window"
       },
       {
        "ko": "상자를 닫아",
        "en": "close the box"
       }
      ]
     },
     {
      "ko": "오다",
      "en": "come",
      "ex": [
       {
        "ko": "내 방에 들어와",
        "en": "come into my room"
       },
       {
        "ko": "내 집에 와",
        "en": "come to my house"
       },
       {
        "ko": "천천히 와",
        "en": "come slowly"
       }
      ]
     },
     {
      "ko": "사다",
      "en": "buy",
      "ex": [
       {
        "ko": "이 차를 사",
        "en": "buy this car"
       },
       {
        "ko": "이 가방을 사",
        "en": "buy this bag"
       },
       {
        "ko": "이 펜을 사",
        "en": "buy this pen"
       }
      ]
     },
     {
      "ko": "청소했다",
      "en": "cleaned",
      "ex": [
       {
        "ko": "냉장고 청소했어",
        "en": "cleaned the fridge"
       },
       {
        "ko": "화장실 청소했어",
        "en": "cleaned the bathroom"
       },
       {
        "ko": "빨리 치웠어",
        "en": "cleaned up quickly"
       }
      ]
     },
     {
      "ko": "올랐다",
      "en": "climbed",
      "ex": [
       {
        "ko": "정상까지 올랐어",
        "en": "climbed to the top"
       },
       {
        "ko": "나무를 올랐어",
        "en": "climbed the tree"
       },
       {
        "ko": "바위 위를 올라갔어",
        "en": "climbed the rock"
       }
      ]
     },
     {
      "ko": "닫았다",
      "en": "closed",
      "ex": [
       {
        "ko": "내 입을 다물었어",
        "en": "closed my mouth"
       },
       {
        "ko": "가게 문을 닫았어",
        "en": "closed the shop"
       },
       {
        "ko": "내 눈을 감았어",
        "en": "closed my eyes"
       }
      ]
     },
     {
      "ko": "왔다",
      "en": "came",
      "ex": [
       {
        "ko": "서울에서 왔어",
        "en": "came from Seoul"
       },
       {
        "ko": "한국에서 왔어",
        "en": "came from Korea"
       },
       {
        "ko": "여기에 왔어",
        "en": "came here"
       }
      ]
     },
     {
      "ko": "샀다",
      "en": "bought",
      "ex": [
       {
        "ko": "10달러에 이걸 샀어",
        "en": "bought this for 10 dollars"
       },
       {
        "ko": "20달러에 이걸 샀어",
        "en": "bought this for 20 dollars"
       },
       {
        "ko": "그 책을 샀어",
        "en": "bought the book"
       }
      ]
     }
    ]
   },
   {
    "theme": "생활 Everyday (2)",
    "items": [
     {
      "ko": "창조하다",
      "en": "create",
      "ex": [
       {
        "ko": "이름을 지어",
        "en": "create a name"
       },
       {
        "ko": "기사를 써",
        "en": "create an article"
       },
       {
        "ko": "새로운 차를 만들어",
        "en": "create a new car"
       }
      ]
     },
     {
      "ko": "결정하다",
      "en": "decide",
      "ex": [
       {
        "ko": "지금 결정해",
        "en": "decide now"
       },
       {
        "ko": "나중에 결정해",
        "en": "decide later"
       },
       {
        "ko": "즉시 결정해",
        "en": "decide immediately"
       }
      ]
     },
     {
      "ko": "늦추다",
      "en": "delay",
      "ex": [
       {
        "ko": "휴일을 미뤄",
        "en": "delay my holiday"
       },
       {
        "ko": "계획을 미뤄",
        "en": "delay the plan"
       },
       {
        "ko": "약속을 미뤄",
        "en": "delay the appointment"
       }
      ]
     },
     {
      "ko": "배달하다",
      "en": "deliver",
      "ex": [
       {
        "ko": "책을 배달해",
        "en": "deliver the book"
       },
       {
        "ko": "컴퓨터를 배달해",
        "en": "deliver the computer"
       },
       {
        "ko": "가방을 배달해",
        "en": "deliver the bag"
       }
      ]
     },
     {
      "ko": "설계하다",
      "en": "design",
      "ex": [
       {
        "ko": "저것을 설계해",
        "en": "design that"
       },
       {
        "ko": "집을 설계해",
        "en": "design a house"
       },
       {
        "ko": "새로운 모델을 설계해",
        "en": "design a new model"
       }
      ]
     },
     {
      "ko": "창조했다",
      "en": "created",
      "ex": [
       {
        "ko": "세상을 창조했어",
        "en": "created the world"
       },
       {
        "ko": "쉽게 창조했어",
        "en": "created easily"
       },
       {
        "ko": "아름답게 창조했어",
        "en": "created beautifully"
       }
      ]
     },
     {
      "ko": "결정했다",
      "en": "decided",
      "ex": [
       {
        "ko": "걔는 결정했어.",
        "en": "He decided."
       },
       {
        "ko": "그들 중에서 결정했어",
        "en": "decided between them"
       },
       {
        "ko": "결국 결정했어",
        "en": "decided eventually"
       }
      ]
     },
     {
      "ko": "늦추었다",
      "en": "delayed",
      "ex": [
       {
        "ko": "회의를 늦췄어",
        "en": "delayed the meeting"
       },
       {
        "ko": "병원 가는 것을 늦췄어",
        "en": "delayed going to the doctor"
       },
       {
        "ko": "방문을 늦췄어",
        "en": "delayed the visit"
       }
      ]
     },
     {
      "ko": "배달했다",
      "en": "delivered",
      "ex": [
       {
        "ko": "우편물을 배달했어",
        "en": "delivered the mail"
       },
       {
        "ko": "신문을 배달했어",
        "en": "delivered newspapers"
       },
       {
        "ko": "편지를 배달했어",
        "en": "delivered the letter"
       }
      ]
     },
     {
      "ko": "설계했다",
      "en": "designed",
      "ex": [
       {
        "ko": "그 건물을 설계했어",
        "en": "designed the building"
       },
       {
        "ko": "책들을 디자인했어",
        "en": "designed books"
       },
       {
        "ko": "특별하게 설계했어",
        "en": "designed specially"
       }
      ]
     },
     {
      "ko": "하다",
      "en": "do",
      "ex": [
       {
        "ko": "집안일을 해",
        "en": "do chores"
       },
       {
        "ko": "숙제를 해",
        "en": "do homework"
       },
       {
        "ko": "어떤 일을 해",
        "en": "do something"
       }
      ]
     },
     {
      "ko": "강조하다",
      "en": "emphasize",
      "ex": [
       {
        "ko": "이 주제를 강조해",
        "en": "emphasize this topic"
       },
       {
        "ko": "이 문장을 강조해",
        "en": "emphasize this sentence"
       },
       {
        "ko": "이 책을 강조해",
        "en": "emphasize this book"
       }
      ]
     },
     {
      "ko": "비우다",
      "en": "empty",
      "ex": [
       {
        "ko": "양동이를 비워",
        "en": "empty a bucket"
       },
       {
        "ko": "잔을 비워",
        "en": "empty the glass"
       },
       {
        "ko": "병을 비워",
        "en": "empty a bottle"
       }
      ]
     },
     {
      "ko": "즐기다",
      "en": "enjoy",
      "ex": [
       {
        "ko": "춤추기를 즐겨",
        "en": "enjoy dancing"
       },
       {
        "ko": "노래하기를 즐겨",
        "en": "enjoy singing"
       },
       {
        "ko": "잠자기를 즐겨",
        "en": "enjoy sleeping"
       }
      ]
     },
     {
      "ko": "들어가다",
      "en": "enter",
      "ex": [
       {
        "ko": "방에 들어가",
        "en": "enter the room"
       },
       {
        "ko": "학교에 들어가",
        "en": "enter the school"
       },
       {
        "ko": "대학에 들어가",
        "en": "enter the college"
       }
      ]
     },
     {
      "ko": "했다",
      "en": "did",
      "ex": [
       {
        "ko": "저것을 했어",
        "en": "did that"
       },
       {
        "ko": "그것을 했어",
        "en": "did it"
       },
       {
        "ko": "일을 했어",
        "en": "did some work"
       }
      ]
     },
     {
      "ko": "강조했다",
      "en": "emphasized",
      "ex": [
       {
        "ko": "내 말을 강조했어",
        "en": "emphasized my speech"
       },
       {
        "ko": "내 의견을 강조했어",
        "en": "emphasized my opinion"
       },
       {
        "ko": "약속을 강조했어",
        "en": "emphasized the promise"
       }
      ]
     },
     {
      "ko": "비웠다",
      "en": "emptied",
      "ex": [
       {
        "ko": "바구니를 비웠어",
        "en": "emptied a basket"
       },
       {
        "ko": "컵을 비웠어",
        "en": "emptied a cup"
       },
       {
        "ko": "방을 비웠어",
        "en": "emptied a room"
       }
      ]
     },
     {
      "ko": "즐겼다",
      "en": "enjoyed",
      "ex": [
       {
        "ko": "책 읽기를 즐겼어",
        "en": "enjoyed reading books"
       },
       {
        "ko": "음악 듣기를 즐겼어",
        "en": "enjoyed listening to the music"
       },
       {
        "ko": "영화 보기를 즐겼어",
        "en": "enjoyed watching movies"
       }
      ]
     },
     {
      "ko": "들어갔다",
      "en": "entered",
      "ex": [
       {
        "ko": "카페에 들어갔어",
        "en": "entered the cafe"
       },
       {
        "ko": "병원에 들어갔어",
        "en": "entered the hospital"
       },
       {
        "ko": "시장에 들어갔어",
        "en": "entered the market"
       }
      ]
     },
     {
      "ko": "지우다",
      "en": "erase",
      "ex": [
       {
        "ko": "쓴 것을 지워",
        "en": "erase the writing"
       },
       {
        "ko": "아무것도 지우지 않았어",
        "en": "didn't erase anything"
       },
       {
        "ko": "제목을 지워",
        "en": "erase the title"
       }
      ]
     },
     {
      "ko": "끝내다",
      "en": "finish",
      "ex": [
       {
        "ko": "쓰기를 끝내",
        "en": "finish writing"
       },
       {
        "ko": "너의 숙제를 끝내",
        "en": "finish your homework"
       },
       {
        "ko": "일을 끝내",
        "en": "finish the work"
       }
      ]
     },
     {
      "ko": "옷을 개다",
      "en": "fold clothes",
      "ex": [
       {
        "ko": "개의 옷을 개",
        "en": "fold his clothes"
       },
       {
        "ko": "그녀의 옷을 개",
        "en": "fold her clothes"
       },
       {
        "ko": "네 옷을 개!",
        "en": "Fold your clothes!"
       }
      ]
     },
     {
      "ko": "따르다",
      "en": "follow",
      "ex": [
       {
        "ko": "이 길을 따라가",
        "en": "follow this road"
       },
       {
        "ko": "나를 따라와",
        "en": "follow me"
       },
       {
        "ko": "규칙을 따라",
        "en": "follow the rules"
       }
      ]
     },
     {
      "ko": "받다",
      "en": "get",
      "ex": [
       {
        "ko": "가방을 받아",
        "en": "get a bag"
       },
       {
        "ko": "돈을 받아",
        "en": "get money"
       },
       {
        "ko": "물을 받아",
        "en": "get water"
       }
      ]
     },
     {
      "ko": "지웠다",
      "en": "erased",
      "ex": [
       {
        "ko": "기억을 지웠어",
        "en": "erased the memories"
       },
       {
        "ko": "모든것을 지웠어",
        "en": "erased everything"
       },
       {
        "ko": "선을 지웠어",
        "en": "erased the line"
       }
      ]
     },
     {
      "ko": "끝냈다",
      "en": "finished",
      "ex": [
       {
        "ko": "학업을 끝냈어",
        "en": "finished school"
       },
       {
        "ko": "그것을 끝냈어",
        "en": "finished it"
       },
       {
        "ko": "혼자서 끝냈어",
        "en": "finished it alone"
       }
      ]
     },
     {
      "ko": "옷을 갰다",
      "en": "folded clothes",
      "ex": [
       {
        "ko": "깔끔하게 그의 옷을 갰어",
        "en": "folded his clothes neatly"
       },
       {
        "ko": "내 옷을 잘 갰어",
        "en": "folded my clothes well"
       },
       {
        "ko": "빨리 우리 옷을 갰어",
        "en": "folded our clothes quickly"
       }
      ]
     },
     {
      "ko": "따랐다",
      "en": "followed",
      "ex": [
       {
        "ko": "그녀를 따랐어",
        "en": "followed her"
       },
       {
        "ko": "내 충고를 따랐어",
        "en": "followed my advice"
       },
       {
        "ko": "그 남자를 따랐어",
        "en": "followed the man"
       }
      ]
     },
     {
      "ko": "받았다",
      "en": "got",
      "ex": [
       {
        "ko": "책을 받았어",
        "en": "got a book"
       },
       {
        "ko": "모든 것을 받았어",
        "en": "got everything"
       },
       {
        "ko": "인형을 받았어",
        "en": "got a doll"
       }
      ]
     }
    ]
   },
   {
    "theme": "생활 Everyday (3)",
    "items": [
     {
      "ko": "주다",
      "en": "give",
      "ex": [
       {
        "ko": "초콜릿을 내게 줘",
        "en": "give me the chocolate"
       },
       {
        "ko": "물을 내게 줘",
        "en": "give me some water"
       },
       {
        "ko": "이 책을 내게 줘",
        "en": "give me this book"
       }
      ]
     },
     {
      "ko": "가다",
      "en": "go",
      "ex": [
       {
        "ko": "집에 가",
        "en": "go home"
       },
       {
        "ko": "학교에 가",
        "en": "go to school"
       },
       {
        "ko": "교회에 가",
        "en": "go to church"
       }
      ]
     },
     {
      "ko": "자라다",
      "en": "grow",
      "ex": [
       {
        "ko": "빨리 자라",
        "en": "grow fast"
       },
       {
        "ko": "크게 자라",
        "en": "grow big"
       },
       {
        "ko": "강하게 자라",
        "en": "grow strong"
       }
      ]
     },
     {
      "ko": "걸다",
      "en": "hang",
      "ex": [
       {
        "ko": "내 모자를 걸어",
        "en": "hang my cap"
       },
       {
        "ko": "액자를 걸어",
        "en": "hang the picture"
       },
       {
        "ko": "깃발을 걸어",
        "en": "hang a flag"
       }
      ]
     },
     {
      "ko": "갖다",
      "en": "have",
      "ex": [
       {
        "ko": "책을 많이 갖고 있어",
        "en": "have many books"
       },
       {
        "ko": "책을 갖고 있지 않아",
        "en": "have no book"
       },
       {
        "ko": "세 권의 책을 갖고 있어",
        "en": "have three books"
       }
      ]
     },
     {
      "ko": "주었다",
      "en": "gave",
      "ex": [
       {
        "ko": "네게 조언을 해주었어",
        "en": "gave you some advice"
       },
       {
        "ko": "내게 기회를 주었어",
        "en": "gave me a chance"
       },
       {
        "ko": "내게 시간을 주었어",
        "en": "gave me some time"
       }
      ]
     },
     {
      "ko": "갔다",
      "en": "went",
      "ex": [
       {
        "ko": "드라이브 하러 갔어",
        "en": "went for a drive"
       },
       {
        "ko": "수영하러 갔어",
        "en": "went for a swim"
       },
       {
        "ko": "산책하러 갔어",
        "en": "went for a walk"
       }
      ]
     },
     {
      "ko": "자랐다",
      "en": "grew",
      "ex": [
       {
        "ko": "너무 길게 자랐어",
        "en": "grew too long"
       },
       {
        "ko": "너무 짧게 자랐어",
        "en": "grew too short"
       },
       {
        "ko": "꽃을 길렀어",
        "en": "grew flowers"
       }
      ]
     },
     {
      "ko": "걸었다",
      "en": "hung",
      "ex": [
       {
        "ko": "똑바로 걸었어",
        "en": "hung it straight"
       },
       {
        "ko": "개 모자를 걸었어",
        "en": "hung his hat"
       },
       {
        "ko": "손전등을 걸었어",
        "en": "hung a flashlight"
       }
      ]
     },
     {
      "ko": "가졌다",
      "en": "had",
      "ex": [
       {
        "ko": "돈이 하나도 없었어",
        "en": "had no money"
       },
       {
        "ko": "돈이 상당히 많이 있었어",
        "en": "had a lot of money"
       },
       {
        "ko": "친구가 많이 있었어",
        "en": "had many friends"
       }
      ]
     },
     {
      "ko": "잡아",
      "en": "hold",
      "ex": [
       {
        "ko": "개 컵을 들고 있어",
        "en": "hold his cup"
       },
       {
        "ko": "네 공을 들고 있어",
        "en": "hold your ball"
       },
       {
        "ko": "내 펜을 들고 있어",
        "en": "hold my pen"
       }
      ]
     },
     {
      "ko": "들고 있다",
      "en": "hold",
      "ex": [
       {
        "ko": "책을 들고 있어",
        "en": "hold a book"
       },
       {
        "ko": "이 컵을 들고 있어",
        "en": "hold this cup"
       },
       {
        "ko": "내 가방을 들고 있어",
        "en": "hold my bag"
       }
      ]
     },
     {
      "ko": "두드리다",
      "en": "knock on",
      "ex": [
       {
        "ko": "문을 두드려",
        "en": "knock on the door"
       },
       {
        "ko": "그것을 두드려",
        "en": "knock on it"
       },
       {
        "ko": "저것을 두드려",
        "en": "knock on that"
       }
      ]
     },
     {
      "ko": "나가다",
      "en": "leave",
      "ex": [
       {
        "ko": "저녁에 집에서 나가",
        "en": "leave home at night"
       },
       {
        "ko": "개 만나려고 집에서 나가",
        "en": "leave home to meet him"
       },
       {
        "ko": "그 극장에서 나가",
        "en": "leave the theater"
       }
      ]
     },
     {
      "ko": "살다",
      "en": "live",
      "ex": [
       {
        "ko": "가족과 함께 살아",
        "en": "live with my family"
       },
       {
        "ko": "혼자 살아",
        "en": "live alone"
       },
       {
        "ko": "행복하게 살아",
        "en": "live happily"
       }
      ]
     },
     {
      "ko": "잡았어",
      "en": "held",
      "ex": [
       {
        "ko": "내 열쇠를 들고 있었어",
        "en": "held my key"
       },
       {
        "ko": "그녀의 책을 들고 있었어",
        "en": "held her book"
       },
       {
        "ko": "내 돈을 들고 있었어",
        "en": "held my money"
       }
      ]
     },
     {
      "ko": "들고 있었다",
      "en": "held",
      "ex": [
       {
        "ko": "컵을 들고 있었어",
        "en": "held a cup"
       },
       {
        "ko": "내 휴대폰을 들고 있었어",
        "en": "held my cell phone"
       },
       {
        "ko": "내 우산을 들고 있었어",
        "en": "held my umbrella"
       }
      ]
     },
     {
      "ko": "두드렸다",
      "en": "knocked on",
      "ex": [
       {
        "ko": "어떤 것을 건드렸어",
        "en": "knocked on something"
       },
       {
        "ko": "내 창문을 두드렸어",
        "en": "knocked on my window"
       },
       {
        "ko": "개 문을 두드렸어",
        "en": "knocked on his door"
       }
      ]
     },
     {
      "ko": "나갔다",
      "en": "left",
      "ex": [
       {
        "ko": "오전 9시에 집 나갔어",
        "en": "left home at 9 a.m."
       },
       {
        "ko": "오후 1시에 거기 나갔어",
        "en": "left there at 1 p.m."
       },
       {
        "ko": "집에서 막 나갔어",
        "en": "just left home"
       }
      ]
     },
     {
      "ko": "살았다",
      "en": "lived",
      "ex": [
       {
        "ko": "오래 살았어",
        "en": "lived long"
       },
       {
        "ko": "그 마을에 살았어",
        "en": "lived in the village"
       },
       {
        "ko": "서울에 살았어",
        "en": "lived in Seoul"
       }
      ]
     },
     {
      "ko": "싣다",
      "en": "load",
      "ex": [
       {
        "ko": "네 가방을 실어",
        "en": "load your bag"
       },
       {
        "ko": "장난감과 함께 실어",
        "en": "load it with toys"
       },
       {
        "ko": "연료와 함께 실어",
        "en": "load it with fuel"
       }
      ]
     },
     {
      "ko": "빚다, 만들다",
      "en": "mold",
      "ex": [
       {
        "ko": "얼굴을 빚어",
        "en": "mold a face"
       },
       {
        "ko": "손을 빚어",
        "en": "mold a hand"
       },
       {
        "ko": "손가락을 빚어",
        "en": "mold a finger"
       }
      ]
     },
     {
      "ko": "걸레질하다",
      "en": "mop",
      "ex": [
       {
        "ko": "바닥을 걸레질 해",
        "en": "mop the floor"
       },
       {
        "ko": "부엌 바닥을 걸레질 해",
        "en": "mop the kitchen floor"
       },
       {
        "ko": "흘린 것을 걸레질 해",
        "en": "mop the spill"
       }
      ]
     },
     {
      "ko": "움직이다",
      "en": "move",
      "ex": [
       {
        "ko": "저기로 움직여",
        "en": "move there"
       },
       {
        "ko": "앞으로 움직여",
        "en": "move forward"
       },
       {
        "ko": "뒤로 움직여",
        "en": "move backward"
       }
      ]
     },
     {
      "ko": "열다",
      "en": "open",
      "ex": [
       {
        "ko": "문을 열어",
        "en": "open the door"
       },
       {
        "ko": "창문을 열어",
        "en": "open the window"
       },
       {
        "ko": "상자를 열어",
        "en": "open the box"
       }
      ]
     },
     {
      "ko": "실었다",
      "en": "loaded",
      "ex": [
       {
        "ko": "차에 실었어",
        "en": "loaded into the car"
       },
       {
        "ko": "배에 실었어",
        "en": "loaded into the ship"
       },
       {
        "ko": "버스에 실었어",
        "en": "loaded into the bus"
       }
      ]
     },
     {
      "ko": "빚었다, 만들었다",
      "en": "molded",
      "ex": [
       {
        "ko": "눈을 빚었어",
        "en": "molded eyes"
       },
       {
        "ko": "다리를 빚었어",
        "en": "molded legs"
       },
       {
        "ko": "팔을 빚었어",
        "en": "molded arms"
       }
      ]
     },
     {
      "ko": "걸레질했다",
      "en": "mopped",
      "ex": [
       {
        "ko": "지저분한 것을 걸레질했어",
        "en": "mopped the mess"
       },
       {
        "ko": "아침에 걸레질했어",
        "en": "mopped in the morning"
       },
       {
        "ko": "다시 걸레질했어",
        "en": "mopped again"
       }
      ]
     },
     {
      "ko": "움직였다",
      "en": "moved",
      "ex": [
       {
        "ko": "내 몸을 움직였어",
        "en": "moved my body"
       },
       {
        "ko": "내 손을 움직였어",
        "en": "moved my hand"
       },
       {
        "ko": "그녀의 책상을 움직였어",
        "en": "moved her desk"
       }
      ]
     },
     {
      "ko": "열었다",
      "en": "opened",
      "ex": [
       {
        "ko": "9시까지 열었어",
        "en": "opened till 9 o'clock"
       },
       {
        "ko": "매일 열었어",
        "en": "opened everyday"
       },
       {
        "ko": "2시에서 10시까지 열었어",
        "en": "opened from 2 p.m. to 10 p.m."
       }
      ]
     }
    ]
   },
   {
    "theme": "생활 Everyday (4)",
    "items": [
     {
      "ko": "싸다",
      "en": "pack",
      "ex": [
       {
        "ko": "이것을 싸",
        "en": "pack this"
       },
       {
        "ko": "상자를 싸",
        "en": "pack boxes"
       },
       {
        "ko": "옷을 싸",
        "en": "pack clothes"
       }
      ]
     },
     {
      "ko": "지나가다",
      "en": "pass",
      "ex": [
       {
        "ko": "내 옆을 지나가",
        "en": "pass by me"
       },
       {
        "ko": "집 옆을 지나가",
        "en": "pass by my house"
       },
       {
        "ko": "그녀 옆을 지나가",
        "en": "pass by her"
       }
      ]
     },
     {
      "ko": "두다",
      "en": "put",
      "ex": [
       {
        "ko": "내 지갑을 여기에 둬",
        "en": "put my wallet here"
       },
       {
        "ko": "내 가방을 여기에 둬",
        "en": "put my bag here"
       },
       {
        "ko": "내 책을 저기에 둬",
        "en": "put my book there"
       }
      ]
     },
     {
      "ko": "깨닫다",
      "en": "realize",
      "ex": [
       {
        "ko": "내 꿈을 실현해",
        "en": "realize my dream"
       },
       {
        "ko": "내 실수를 깨달아",
        "en": "realize my mistake"
       },
       {
        "ko": "무엇인가를 깨달아",
        "en": "realize something"
       }
      ]
     },
     {
      "ko": "타다",
      "en": "ride",
      "ex": [
       {
        "ko": "자전거를 타",
        "en": "ride a bike"
       },
       {
        "ko": "차를 타",
        "en": "ride a car"
       },
       {
        "ko": "그것을 타",
        "en": "ride it"
       }
      ]
     },
     {
      "ko": "쌌다",
      "en": "packed",
      "ex": [
       {
        "ko": "가능한 한 빠르게 쌌어",
        "en": "packed as fast as possible"
       },
       {
        "ko": "간단하게 쌌어",
        "en": "packed simply"
       },
       {
        "ko": "느리게 쌌어",
        "en": "packed slowly"
       }
      ]
     },
     {
      "ko": "지나갔다",
      "en": "passed",
      "ex": [
       {
        "ko": "그가 지나갔어.",
        "en": "He passed."
       },
       {
        "ko": "시간이 지나갔어.",
        "en": "Time passed."
       },
       {
        "ko": "며칠이 지나갔어.",
        "en": "Days passed."
       }
      ]
     },
     {
      "ko": "두었다",
      "en": "put",
      "ex": [
       {
        "ko": "그것을 여기에 두었어",
        "en": "put that here"
       },
       {
        "ko": "사탕을 내 주머니에 넣었어",
        "en": "put the candy in my pocket"
       },
       {
        "ko": "그것을 내 방에 두었어",
        "en": "put it in my room"
       }
      ]
     },
     {
      "ko": "깨달았다",
      "en": "realized",
      "ex": [
       {
        "ko": "그 사실을 깨달았어",
        "en": "realized the fact"
       },
       {
        "ko": "그것을 깨달았어",
        "en": "realized it"
       },
       {
        "ko": "이것을 깨달았어",
        "en": "realized this"
       }
      ]
     },
     {
      "ko": "탔다",
      "en": "rode",
      "ex": [
       {
        "ko": "많이 탔어",
        "en": "rode a lot"
       },
       {
        "ko": "차를 탔어",
        "en": "rode the car"
       },
       {
        "ko": "그것을 탔어",
        "en": "rode it"
       }
      ]
     },
     {
      "ko": "나누다",
      "en": "share",
      "ex": [
       {
        "ko": "오렌지를 나눠",
        "en": "share the oranges"
       },
       {
        "ko": "사과를 나눠",
        "en": "share the apples"
       },
       {
        "ko": "책을 나눠",
        "en": "share the books"
       }
      ]
     },
     {
      "ko": "보여주다",
      "en": "show",
      "ex": [
       {
        "ko": "길을 내게 보여줘",
        "en": "show me the way"
       },
       {
        "ko": "책을 내게 보여줘",
        "en": "show me the book"
       },
       {
        "ko": "펜을 내게 보여줘",
        "en": "show me the pen"
       }
      ]
     },
     {
      "ko": "자다",
      "en": "sleep",
      "ex": [
       {
        "ko": "잘 자",
        "en": "sleep well"
       },
       {
        "ko": "좀 더 자",
        "en": "have more sleep"
       },
       {
        "ko": "하루 종일 자",
        "en": "sleep all day long"
       }
      ]
     },
     {
      "ko": "펴다, 늘리다",
      "en": "stretch",
      "ex": [
       {
        "ko": "밧줄을 펴",
        "en": "stretch the rope"
       },
       {
        "ko": "내 다리를 펴",
        "en": "stretch my legs"
       },
       {
        "ko": "네 손가락을 펴",
        "en": "stretch your fingers"
       }
      ]
     },
     {
      "ko": "쓸다",
      "en": "sweep",
      "ex": [
       {
        "ko": "방을 쓸어",
        "en": "sweep the room"
       },
       {
        "ko": "바닥을 쓸어",
        "en": "sweep the floor"
       },
       {
        "ko": "마당을 쓸어",
        "en": "sweep the yard"
       }
      ]
     },
     {
      "ko": "나눴다",
      "en": "shared",
      "ex": [
       {
        "ko": "음식을 나눴어",
        "en": "shared the food"
       },
       {
        "ko": "장난감을 나눴어",
        "en": "shared the toys"
       },
       {
        "ko": "수입을 나눴어",
        "en": "shared the income"
       }
      ]
     },
     {
      "ko": "보여주었다",
      "en": "showed",
      "ex": [
       {
        "ko": "네게 무언가를 보여줬어",
        "en": "showed you something"
       },
       {
        "ko": "네게 편지를 보여줬어",
        "en": "showed you the letter"
       },
       {
        "ko": "네게 사진기를 보여줬어",
        "en": "showed you a camera"
       }
      ]
     },
     {
      "ko": "잤다",
      "en": "slept",
      "ex": [
       {
        "ko": "정오까지 잤어",
        "en": "slept until noon"
       },
       {
        "ko": "아침까지 잤어",
        "en": "had some sleep until morning"
       },
       {
        "ko": "늦게까지 잤어",
        "en": "got to sleep late"
       }
      ]
     },
     {
      "ko": "폈다, 늘렸다",
      "en": "stretched",
      "ex": [
       {
        "ko": "또 폈어",
        "en": "stretched again"
       },
       {
        "ko": "쉽게 폈어",
        "en": "stretched easily"
       },
       {
        "ko": "벌써 폈어",
        "en": "stretched already"
       }
      ]
     },
     {
      "ko": "쓸었다",
      "en": "swept",
      "ex": [
       {
        "ko": "먼지를 쓸었어",
        "en": "swept the dust"
       },
       {
        "ko": "빗자루로 쓸었어",
        "en": "swept with a broom"
       },
       {
        "ko": "빨리 쓸었어",
        "en": "swept quickly"
       }
      ]
     },
     {
      "ko": "가지고 가",
      "en": "take",
      "ex": [
       {
        "ko": "네 재킷을 가지고 가",
        "en": "take your jacket"
       },
       {
        "ko": "네 펜을 가지고 가",
        "en": "take your pen"
       },
       {
        "ko": "네 표를 가지고 가",
        "en": "take your ticket"
       }
      ]
     },
     {
      "ko": "선택해",
      "en": "take",
      "ex": [
       {
        "ko": "저 책을 선택해",
        "en": "take that book"
       },
       {
        "ko": "그것을 선택해",
        "en": "take it"
       },
       {
        "ko": "이 가방을 선택해",
        "en": "take this bag"
       }
      ]
     },
     {
      "ko": "타다",
      "en": "take",
      "ex": [
       {
        "ko": "고속도로를 타",
        "en": "take the highway"
       },
       {
        "ko": "버스를 타",
        "en": "take a bus"
       },
       {
        "ko": "택시를 타",
        "en": "take a taxi"
       }
      ]
     },
     {
      "ko": "가져가다",
      "en": "take",
      "ex": [
       {
        "ko": "돈을 가져가",
        "en": "take money"
       },
       {
        "ko": "책을 가져가",
        "en": "take a book"
       },
       {
        "ko": "가방을 가져가",
        "en": "take a bag"
       }
      ]
     },
     {
      "ko": "가지고 나가",
      "en": "take out",
      "ex": [
       {
        "ko": "그 책을 가지고 나가",
        "en": "take out the book"
       },
       {
        "ko": "운동장으로 가지고 나가",
        "en": "take out into the playground"
       },
       {
        "ko": "복도로 가지고 나가",
        "en": "take out into the hallway"
       }
      ]
     },
     {
      "ko": "가지고 갔어",
      "en": "took",
      "ex": [
       {
        "ko": "내 모자를 가지고 갔어",
        "en": "took my hat"
       },
       {
        "ko": "내 안경을 가지고 갔어",
        "en": "took my glasses"
       },
       {
        "ko": "내 우산을 가지고 갔어",
        "en": "took my umbrella"
       }
      ]
     },
     {
      "ko": "선택했어",
      "en": "took",
      "ex": [
       {
        "ko": "돈을 선택했어",
        "en": "took the money"
       },
       {
        "ko": "저 소년을 선택했어",
        "en": "took that boy"
       },
       {
        "ko": "이 책을 선택했어",
        "en": "took this car"
       }
      ]
     },
     {
      "ko": "탔다",
      "en": "took",
      "ex": [
       {
        "ko": "기차를 탔어",
        "en": "took a train"
       },
       {
        "ko": "지하철을 탔어",
        "en": "took the subway"
       },
       {
        "ko": "자전거를 탔어",
        "en": "took the bicycle"
       }
      ]
     },
     {
      "ko": "가져갔다",
      "en": "took",
      "ex": [
       {
        "ko": "물을 가져갔어",
        "en": "took water"
       },
       {
        "ko": "바나나를 가져갔어",
        "en": "took a banana"
       },
       {
        "ko": "라디오를 가져갔어",
        "en": "took a radio"
       }
      ]
     },
     {
      "ko": "가지고 나갔어",
      "en": "took out",
      "ex": [
       {
        "ko": "정원으로 가지고 나갔어",
        "en": "took out into the garden"
       },
       {
        "ko": "의자를 가지고 나갔어",
        "en": "took the chair out"
       },
       {
        "ko": "커피를 가지고 나갔어",
        "en": "took the coffee out"
       }
      ]
     }
    ]
   },
   {
    "theme": "생활 Everyday (5)",
    "items": [
     {
      "ko": "내리다",
      "en": "unload",
      "ex": [
       {
        "ko": "내 짐을 내려",
        "en": "unload my stuff"
       },
       {
        "ko": "내 가방을 내려",
        "en": "unload my bag"
       },
       {
        "ko": "내 상자를 내려",
        "en": "unload my boxes"
       }
      ]
     },
     {
      "ko": "풀다",
      "en": "unpack",
      "ex": [
       {
        "ko": "상자를 풀어",
        "en": "unpack boxes"
       },
       {
        "ko": "가방을 풀어",
        "en": "unpack the bag"
       },
       {
        "ko": "아직 풀지 않아",
        "en": "don't unpack yet"
       }
      ]
     },
     {
      "ko": "사용하다",
      "en": "use",
      "ex": [
       {
        "ko": "머리를 사용해",
        "en": "use my head"
       },
       {
        "ko": "손을 사용해",
        "en": "use my hand"
       },
       {
        "ko": "눈을 사용해",
        "en": "use my eyes"
       }
      ]
     },
     {
      "ko": "기다리다",
      "en": "wait",
      "ex": [
       {
        "ko": "그녀를 기다려",
        "en": "wait for her"
       },
       {
        "ko": "걔를 기다려",
        "en": "wait for him"
       },
       {
        "ko": "내 친구들을 기다려",
        "en": "wait for my friends"
       }
      ]
     },
     {
      "ko": "걷다",
      "en": "walk",
      "ex": [
       {
        "ko": "거리를 걸어",
        "en": "walk along the street"
       },
       {
        "ko": "공원을 걸어",
        "en": "walk in the park"
       },
       {
        "ko": "점심 먹고 나서 걸어",
        "en": "walk after lunch"
       }
      ]
     },
     {
      "ko": "내렸다",
      "en": "unloaded",
      "ex": [
       {
        "ko": "그것을 내렸어",
        "en": "unloaded it"
       },
       {
        "ko": "하루 종일 그것을 내렸어",
        "en": "unloaded it all day"
       },
       {
        "ko": "이 물건들을 내렸어",
        "en": "unloaded these things"
       }
      ]
     },
     {
      "ko": "풀었다",
      "en": "unpacked",
      "ex": [
       {
        "ko": "한 번 풀었어",
        "en": "unpacked once"
       },
       {
        "ko": "다시 풀었어",
        "en": "unpacked again"
       },
       {
        "ko": "더 많이 풀었어",
        "en": "unpacked more"
       }
      ]
     },
     {
      "ko": "사용했다",
      "en": "used",
      "ex": [
       {
        "ko": "네 차를 사용했어",
        "en": "used your car"
       },
       {
        "ko": "욕실을 사용했어",
        "en": "used your bathroom"
       },
       {
        "ko": "내 컴퓨터를 사용했어",
        "en": "used my computer"
       }
      ]
     },
     {
      "ko": "기다렸다",
      "en": "waited",
      "ex": [
       {
        "ko": "30분 동안 기다렸어",
        "en": "waited for 30 min."
       },
       {
        "ko": "한 시간 동안 기다렸어",
        "en": "waited for an hour"
       },
       {
        "ko": "그녀 만나려고 기다렸어",
        "en": "waited to meet her"
       }
      ]
     },
     {
      "ko": "걸었다",
      "en": "walked",
      "ex": [
       {
        "ko": "바닥 위를 걸었어",
        "en": "walked on the floor"
       },
       {
        "ko": "그와 함께 걸었어",
        "en": "walked with him"
       },
       {
        "ko": "내 개와 함께 걸었어",
        "en": "walked with my dog"
       }
      ]
     },
     {
      "ko": "입다",
      "en": "wear",
      "ex": [
       {
        "ko": "옷을 입어",
        "en": "wear clothes"
       },
       {
        "ko": "스웨터를 입어",
        "en": "wear a sweater"
       },
       {
        "ko": "치마를 입어",
        "en": "wear a skirt"
       }
      ]
     },
     {
      "ko": "무게를 재다",
      "en": "weigh",
      "ex": [
       {
        "ko": "고기의 무게를 재",
        "en": "weigh the meat"
       },
       {
        "ko": "사과의 무게를 재",
        "en": "weigh the apple"
       },
       {
        "ko": "가방의 무게를 재",
        "en": "weigh the bag"
       }
      ]
     },
     {
      "ko": "닦다",
      "en": "wipe",
      "ex": [
       {
        "ko": "테이블을 닦아",
        "en": "wipe the table"
       },
       {
        "ko": "창문을 닦아",
        "en": "wipe the window"
       },
       {
        "ko": "휴지로 닦아",
        "en": "wipe with a tissue"
       }
      ]
     },
     {
      "ko": "궁금해하다",
      "en": "wonder",
      "ex": [
       {
        "ko": "무슨 일이 일어났는지 궁금해",
        "en": "wonder what happened"
       },
       {
        "ko": "네가 무엇을 사랑하는지 궁금해",
        "en": "wonder what you love"
       },
       {
        "ko": "그것에 관해 궁금해",
        "en": "wonder about it"
       }
      ]
     },
     {
      "ko": "싸다",
      "en": "wrap",
      "ex": [
       {
        "ko": "스스로 감싸",
        "en": "wrap myself"
       },
       {
        "ko": "선물을 감싸",
        "en": "wrap the gift"
       },
       {
        "ko": "그것을 감싸",
        "en": "wrap it"
       }
      ]
     },
     {
      "ko": "입었다",
      "en": "wore",
      "ex": [
       {
        "ko": "바지를 입었어",
        "en": "wore pants"
       },
       {
        "ko": "신발을 신었어",
        "en": "wore shoes"
       },
       {
        "ko": "양말을 신었어",
        "en": "wore socks"
       }
      ]
     },
     {
      "ko": "무게를 쟀다",
      "en": "weighed",
      "ex": [
       {
        "ko": "책의 무게를 쟀어",
        "en": "weighed the book"
       },
       {
        "ko": "펜의 무게를 쟀어",
        "en": "weighed the pen"
       },
       {
        "ko": "생선의 무게를 쟀어",
        "en": "weighed the fish"
       }
      ]
     },
     {
      "ko": "닦았다",
      "en": "wiped",
      "ex": [
       {
        "ko": "천천히 닦았어",
        "en": "wiped slowly"
       },
       {
        "ko": "타일을 닦았어",
        "en": "wiped the tiles"
       },
       {
        "ko": "테이블을 닦았어",
        "en": "wiped the table"
       }
      ]
     },
     {
      "ko": "궁금해했다",
      "en": "wondered",
      "ex": [
       {
        "ko": "그녀가 누군지 궁금했어",
        "en": "wondered who she is"
       },
       {
        "ko": "네가 누군지 궁금했어",
        "en": "wondered who you are"
       },
       {
        "ko": "네가 무엇을 좋아하는지 궁금했어",
        "en": "wondered what you like"
       }
      ]
     },
     {
      "ko": "쌌다",
      "en": "wrapped",
      "ex": [
       {
        "ko": "그 선물을 쌌어",
        "en": "wrapped the present"
       },
       {
        "ko": "그것을 감쌌어",
        "en": "wrapped it"
       },
       {
        "ko": "상자를 감쌌어",
        "en": "wrapped the box"
       }
      ]
     }
    ]
   },
   {
    "theme": "회사 Business (1)",
    "items": [
     {
      "ko": "물어보다",
      "en": "ask",
      "ex": [
       {
        "ko": "그녀에게 뭐 물어봐",
        "en": "ask her something"
       },
       {
        "ko": "걔에게 질문 물어봐",
        "en": "ask him a question"
       },
       {
        "ko": "너한테 뭐 물어봐도 돼?",
        "en": "Could I ask you something?"
       }
      ]
     },
     {
      "ko": "동의하다",
      "en": "agree",
      "ex": [
       {
        "ko": "나는 동의해.",
        "en": "I agree."
       },
       {
        "ko": "이 제안에 대해 동의해",
        "en": "agree on this suggestion"
       },
       {
        "ko": "모든것에 동의해",
        "en": "agree on everything"
       }
      ]
     },
     {
      "ko": "실업자이다",
      "en": "be unemployed",
      "ex": [
       {
        "ko": "나 실업자야.",
        "en": "I am unemployed."
       },
       {
        "ko": "그녀는 현재 실업자야.",
        "en": "She is currently unemployed."
       },
       {
        "ko": "걔네들은 실업자야.",
        "en": "They are unemployed."
       }
      ]
     },
     {
      "ko": "전화걸다",
      "en": "call",
      "ex": [
       {
        "ko": "우리 엄마에게 전화 걸어",
        "en": "call my mom"
       },
       {
        "ko": "걔에게 지금 전화 걸어!",
        "en": "Call him now!"
       },
       {
        "ko": "오늘 저녁에 전화 걸게.",
        "en": "I will call you tonight."
       }
      ]
     },
     {
      "ko": "동의하지 않다",
      "en": "disagree",
      "ex": [
       {
        "ko": "우리는 동의하지 않아.",
        "en": "We disagree."
       },
       {
        "ko": "걔는 나와 동의하지 않아.",
        "en": "He disagrees with me."
       },
       {
        "ko": "그 문제에 동의하지 않아",
        "en": "disagree on the problem"
       }
      ]
     },
     {
      "ko": "물어봤다",
      "en": "asked",
      "ex": [
       {
        "ko": "걔에게 부탁했어",
        "en": "asked him a favor"
       },
       {
        "ko": "그녀에게 다시 물어봤어",
        "en": "asked her again"
       },
       {
        "ko": "너의 조언을 물어봤어",
        "en": "asked your advice"
       }
      ]
     },
     {
      "ko": "동의했다",
      "en": "agreed",
      "ex": [
       {
        "ko": "걔는 나와 동의했어.",
        "en": "He agreed with me."
       },
       {
        "ko": "이것에 동의했어",
        "en": "agreed on this"
       },
       {
        "ko": "나는 동의했어.",
        "en": "I agreed."
       }
      ]
     },
     {
      "ko": "실업자였다",
      "en": "was(were) unemployed",
      "ex": [
       {
        "ko": "그녀는 잠시 동안 실업자였어.",
        "en": "She was unemployed for a while."
       },
       {
        "ko": "걔는 작년에 실업자였어.",
        "en": "He was unemployed last year."
       },
       {
        "ko": "걔네들은 또 실업자였어.",
        "en": "They were unemployed again."
       }
      ]
     },
     {
      "ko": "전화 걸었다",
      "en": "called",
      "ex": [
       {
        "ko": "어제 너에게 전화 걸었어",
        "en": "called you yesterday"
       },
       {
        "ko": "그녀에게 저녁에 전화 걸었어",
        "en": "called her at night"
       },
       {
        "ko": "걔에게 이미 전화 걸었어",
        "en": "called him already"
       }
      ]
     },
     {
      "ko": "동의하지 않았다",
      "en": "disagreed",
      "ex": [
       {
        "ko": "그들은 동의하지 않았어.",
        "en": "They disagreed."
       },
       {
        "ko": "나는 동의하지 않았어.",
        "en": "I disagreed."
       },
       {
        "ko": "그녀의 의견에 동의하지 않았어",
        "en": "disagreed with her opinion"
       }
      ]
     },
     {
      "ko": "오해하다",
      "en": "misunderstand",
      "ex": [
       {
        "ko": "오해가 있어.",
        "en": "There is a misunderstanding."
       },
       {
        "ko": "오해는 없어.",
        "en": "There is no misunderstanding."
       },
       {
        "ko": "약간의 오해가 있어.",
        "en": "There's some misunderstanding."
       }
      ]
     },
     {
      "ko": "실패하다",
      "en": "fail",
      "ex": [
       {
        "ko": "또 실패해",
        "en": "fail again"
       },
       {
        "ko": "실패하고 싶지 않아",
        "en": "don't want to fail"
       },
       {
        "ko": "실패하지 않을 거야",
        "en": "won't fail"
       }
      ]
     },
     {
      "ko": "일을 끝내다",
      "en": "finish work",
      "ex": [
       {
        "ko": "오후 6시에 일 끝내고 싶어",
        "en": "want to finish work at 6 p.m."
       },
       {
        "ko": "좀 이따가 일 끝낼 수 있어",
        "en": "can finish work later"
       },
       {
        "ko": "지금 일 못 끝내",
        "en": "can't finish work now"
       }
      ]
     },
     {
      "ko": "해고하다",
      "en": "fire",
      "ex": [
       {
        "ko": "그 사람을 해고해",
        "en": "fire the person"
       },
       {
        "ko": "종업원을 해고해",
        "en": "fire an employee"
       },
       {
        "ko": "그 남자를 해고해",
        "en": "fire the man"
       }
      ]
     },
     {
      "ko": "취직하다",
      "en": "get a job",
      "ex": [
       {
        "ko": "여기에 취직해",
        "en": "get a job here"
       },
       {
        "ko": "이 회사에 취직해",
        "en": "get a job at this company"
       },
       {
        "ko": "이 학교에 취직해",
        "en": "get a job at this school"
       }
      ]
     },
     {
      "ko": "오해했다",
      "en": "misunderstood",
      "ex": [
       {
        "ko": "무언가를 오해했어",
        "en": "misunderstood something"
       },
       {
        "ko": "나를 오해했어",
        "en": "misunderstood me"
       },
       {
        "ko": "너를 오해했어",
        "en": "misunderstood you"
       }
      ]
     },
     {
      "ko": "실패했다",
      "en": "failed",
      "ex": [
       {
        "ko": "승진하는 거 실패했어",
        "en": "failed to get a promotion"
       },
       {
        "ko": "돈 많이 버는 것을 실패했어",
        "en": "failed to make a lot of money"
       },
       {
        "ko": "또 실패했어",
        "en": "failed again"
       }
      ]
     },
     {
      "ko": "일을 끝냈다",
      "en": "finished work",
      "ex": [
       {
        "ko": "오후 6시에 일 끝냈어",
        "en": "finished work at 6 p.m."
       },
       {
        "ko": "이미 일 끝냈어",
        "en": "already finished work"
       },
       {
        "ko": "오늘 일 끝냈어",
        "en": "finished today's work"
       }
      ]
     },
     {
      "ko": "해고했다",
      "en": "fired",
      "ex": [
       {
        "ko": "그 직장에서 해고당했어",
        "en": "was fired from the job"
       },
       {
        "ko": "그를 해고했어",
        "en": "fired him"
       },
       {
        "ko": "나를 해고했어",
        "en": "fired me"
       }
      ]
     },
     {
      "ko": "취직했다",
      "en": "got a job",
      "ex": [
       {
        "ko": "웨이터로 취직했어",
        "en": "got a job as a waiter"
       },
       {
        "ko": "교사로 취직했어",
        "en": "got a job as a teacher"
       },
       {
        "ko": "의사로 취직했어",
        "en": "got a job as a doctor"
       }
      ]
     },
     {
      "ko": "급여가 인상되다",
      "en": "get a pay raise",
      "ex": [
       {
        "ko": "매년마다 급여가 인상돼",
        "en": "get a pay raise every year"
       },
       {
        "ko": "급여 인상을 요구해",
        "en": "ask for a pay raise"
       },
       {
        "ko": "급여가 인상되길 바라",
        "en": "hope to get a pay raise"
       }
      ]
     },
     {
      "ko": "승진하다",
      "en": "get a promotion",
      "ex": [
       {
        "ko": "진짜 승진하고 싶어",
        "en": "really want to get a promotion"
       },
       {
        "ko": "승진하려고 노력해",
        "en": "try to get a promotion"
       },
       {
        "ko": "빨리 승진해",
        "en": "get a quick promotion"
       }
      ]
     },
     {
      "ko": "(보고서 등을) 결재받다",
      "en": "get approved",
      "ex": [
       {
        "ko": "내 상사에게 결재 받아",
        "en": "get approved by my boss"
       },
       {
        "ko": "그녀에게 결재 받아",
        "en": "get approved by her"
       },
       {
        "ko": "일주일 만에 결재 받아",
        "en": "get approved in a week"
       }
      ]
     },
     {
      "ko": "충고 받다",
      "en": "get coached",
      "ex": [
       {
        "ko": "충고 자주 받아",
        "en": "get coached often"
       },
       {
        "ko": "충고 가끔 받아",
        "en": "get coached sometimes"
       },
       {
        "ko": "충고 받는 거 안 좋아해",
        "en": "don't like to get coached"
       }
      ]
     },
     {
      "ko": "변명하다",
      "en": "make excuses",
      "ex": [
       {
        "ko": "스스로 변명해",
        "en": "make excuses for yourself"
       },
       {
        "ko": "그것에 관해 변명해",
        "en": "make excuses about it"
       },
       {
        "ko": "저것에 관해 변명해",
        "en": "make excuses about that"
       }
      ]
     },
     {
      "ko": "급여가 인상됐다",
      "en": "got a pay raise",
      "ex": [
       {
        "ko": "급여가 조금 인상됐어",
        "en": "got a little pay raise"
       },
       {
        "ko": "작년에 급여 인상됐어",
        "en": "got a pay raise last year"
       },
       {
        "ko": "2011년에 급여가 인상됐어",
        "en": "got a pay raise in 2011"
       }
      ]
     },
     {
      "ko": "승진했다",
      "en": "got a promotion",
      "ex": [
       {
        "ko": "작년에 승진했어",
        "en": "got a promotion last year"
       },
       {
        "ko": "드디어 승진했어",
        "en": "finally got a promotion"
       },
       {
        "ko": "또 승진했어",
        "en": "got a promotion again"
       }
      ]
     },
     {
      "ko": "(보고서 등을) 결재받았다",
      "en": "got approved",
      "ex": [
       {
        "ko": "드디어 결재 받았어",
        "en": "finally got approved"
       },
       {
        "ko": "빨리 결재 받았어",
        "en": "got approved quickly"
       },
       {
        "ko": "저번주에 결재 받았어",
        "en": "got approved last week"
       }
      ]
     },
     {
      "ko": "충고 받았다",
      "en": "got coached",
      "ex": [
       {
        "ko": "상사한테 충고 받았어",
        "en": "got coached by my boss"
       },
       {
        "ko": "또 충고 받았어",
        "en": "got coached again"
       },
       {
        "ko": "더 잘 하라고 충고 받았어",
        "en": "got coached to do it better"
       }
      ]
     },
     {
      "ko": "변명했다",
      "en": "made excuses",
      "ex": [
       {
        "ko": "그가 변명했어.",
        "en": "He made excuses."
       },
       {
        "ko": "그들이 변명했어.",
        "en": "They made excuses."
       },
       {
        "ko": "그녀가 변명했어.",
        "en": "She made excuses."
       }
      ]
     }
    ]
   },
   {
    "theme": "회사 Business (2)",
    "items": [
     {
      "ko": "퇴근하다",
      "en": "get off work",
      "ex": [
       {
        "ko": "지금 퇴근해",
        "en": "get off work now"
       },
       {
        "ko": "6시에 퇴근해",
        "en": "get off work at 6"
       },
       {
        "ko": "일찍 퇴근해",
        "en": "get off work early"
       }
      ]
     },
     {
      "ko": "급여를 받다",
      "en": "get paid",
      "ex": [
       {
        "ko": "월말에 급여를 받아",
        "en": "get paid at the end of the month"
       },
       {
        "ko": "15일마다 급여를 받아",
        "en": "get paid every 15th"
       },
       {
        "ko": "급여를 많이 받아",
        "en": "get paid a lot"
       }
      ]
     },
     {
      "ko": "연수를 받다",
      "en": "get training",
      "ex": [
       {
        "ko": "6개월마다 연수를 받아",
        "en": "get training at work every six months"
       },
       {
        "ko": "1월마다 연수를 받아",
        "en": "get training at work every January"
       },
       {
        "ko": "내일 연수를 받아",
        "en": "get training tomorrow"
       }
      ]
     },
     {
      "ko": "출장 가다",
      "en": "go on a business trip",
      "ex": [
       {
        "ko": "다음달에 출장가",
        "en": "go on a business trip next month"
       },
       {
        "ko": "출장 자주 가",
        "en": "go on business trips often"
       },
       {
        "ko": "매년마다 출장 가",
        "en": "go on a business trip every year"
       }
      ]
     },
     {
      "ko": "휴가를 가다",
      "en": "go on vacation",
      "ex": [
       {
        "ko": "이번 주말에 휴가 갈 거야",
        "en": "is going on vacation this weekend"
       },
       {
        "ko": "하와이로 휴가 갈 거야",
        "en": "will go on vacation to Hawaii"
       },
       {
        "ko": "너랑 휴가 가고 싶어",
        "en": "want to go on vacation with you"
       }
      ]
     },
     {
      "ko": "퇴근했다",
      "en": "got off work",
      "ex": [
       {
        "ko": "정시에 퇴근했어",
        "en": "got off work on time"
       },
       {
        "ko": "너무 늦게 퇴근했어",
        "en": "got off work too late"
       },
       {
        "ko": "너무 일찍 퇴근했어",
        "en": "got off work too early"
       }
      ]
     },
     {
      "ko": "급여를 받았다",
      "en": "got paid",
      "ex": [
       {
        "ko": "저번 금요일에 급여 받았어",
        "en": "got paid last Friday"
       },
       {
        "ko": "급여를 적게 받았어",
        "en": "got paid less"
       },
       {
        "ko": "이미 급여를 받았어",
        "en": "already got paid"
       }
      ]
     },
     {
      "ko": "연수를 받았다",
      "en": "got training",
      "ex": [
       {
        "ko": "저번달에 연수 받았어",
        "en": "got training at work last month"
       },
       {
        "ko": "이틀 동안 연수 받았어",
        "en": "got training at work for two days"
       },
       {
        "ko": "작년에 연수 받았어",
        "en": "got training at work last year"
       }
      ]
     },
     {
      "ko": "출장 갔었다",
      "en": "went on a business trip",
      "ex": [
       {
        "ko": "출장 또 갔어",
        "en": "went on a business trip again"
       },
       {
        "ko": "저번주에 출장 갔어",
        "en": "went on a business trip last week"
       },
       {
        "ko": "일본으로 출장 갔어",
        "en": "went on a business trip to Japan"
       }
      ]
     },
     {
      "ko": "휴가를 갔다",
      "en": "went on vacation",
      "ex": [
       {
        "ko": "일주일 동안 휴가 갔어",
        "en": "went on vacation for a week"
       },
       {
        "ko": "우리 가족이랑 휴가 갔어",
        "en": "went on vacation with my family"
       },
       {
        "ko": "멕시코로 휴가 갔어",
        "en": "went on vacation to Mexico"
       }
      ]
     },
     {
      "ko": "출근하다",
      "en": "go to work",
      "ex": [
       {
        "ko": "그와 함께 출근해",
        "en": "go to work with him"
       },
       {
        "ko": "차로 출근해",
        "en": "go to work by car"
       },
       {
        "ko": "월요일에 출근해",
        "en": "go to work on Monday"
       }
      ]
     },
     {
      "ko": "전화를 끊다",
      "en": "hang up",
      "ex": [
       {
        "ko": "전화 끊어",
        "en": "hang up the phone"
       },
       {
        "ko": "그녀의 전화를 끊어",
        "en": "hang up on her"
       },
       {
        "ko": "전화 끊지 마!",
        "en": "Don't hang up!"
       }
      ]
     },
     {
      "ko": "회의가 있다",
      "en": "have a meeting",
      "ex": [
       {
        "ko": "3시에 회의가 있어",
        "en": "have a meeting at 3 p.m."
       },
       {
        "ko": "우리 팀과 회의가 있어",
        "en": "have a meeting with my team"
       },
       {
        "ko": "오늘 회의가 있어",
        "en": "have a meeting today"
       }
      ]
     },
     {
      "ko": "발표가 있다",
      "en": "have a presentation",
      "ex": [
       {
        "ko": "좀 이따가 발표 있어",
        "en": "have a presentation later"
       },
       {
        "ko": "내일 발표 있어",
        "en": "have a presentation tomorrow"
       },
       {
        "ko": "이틀 후에 발표 있어",
        "en": "have a presentation in two days"
       }
      ]
     },
     {
      "ko": "고용하다",
      "en": "hire",
      "ex": [
       {
        "ko": "사람들을 고용해",
        "en": "hire people"
       },
       {
        "ko": "점원을 고용해",
        "en": "hire the clerk"
       },
       {
        "ko": "누군가를 고용해",
        "en": "hire somebody"
       }
      ]
     },
     {
      "ko": "출근했다",
      "en": "went to work",
      "ex": [
       {
        "ko": "7시에 출근해",
        "en": "went to work at 7 o'clock"
       },
       {
        "ko": "가게로 출근해",
        "en": "went to work at the store"
       },
       {
        "ko": "회사로 출근해",
        "en": "went to work at the company"
       }
      ]
     },
     {
      "ko": "전화를 끊었다",
      "en": "hung up",
      "ex": [
       {
        "ko": "전화 바로 끊었어",
        "en": "hung up right away"
       },
       {
        "ko": "막 전화 끊었어",
        "en": "just hung up"
       },
       {
        "ko": "내 전화 끊었어",
        "en": "hung up on me"
       }
      ]
     },
     {
      "ko": "회의가 있었다",
      "en": "had a meeting",
      "ex": [
       {
        "ko": "내 상사와 회의가 있었어",
        "en": "had a meeting with my boss"
       },
       {
        "ko": "몇 시간 전에 회의가 있었어",
        "en": "had a meeting a few hours ago"
       },
       {
        "ko": "목요일에 회의가 있었어",
        "en": "had a meeting on Thursday"
       }
      ]
     },
     {
      "ko": "발표가 있었다",
      "en": "had a presentation",
      "ex": [
       {
        "ko": "월요일에 발표가 있었어",
        "en": "had a presentation on Monday"
       },
       {
        "ko": "성공적인 발표가 있었어",
        "en": "had a successful presentation"
       },
       {
        "ko": "저번주에 발표가 있었어",
        "en": "had a presentation last week"
       }
      ]
     },
     {
      "ko": "고용했다",
      "en": "hired",
      "ex": [
       {
        "ko": "변호사를 고용했어",
        "en": "hired a lawyer"
       },
       {
        "ko": "누군가를 고용했어",
        "en": "hired someone"
       },
       {
        "ko": "그들을 고용했어",
        "en": "hired them"
       }
      ]
     },
     {
      "ko": "메시지를 남기다",
      "en": "leave a message",
      "ex": [
       {
        "ko": "걔에게 메시지 남겨",
        "en": "leave a message for him"
       },
       {
        "ko": "걔네들에게 메시지 남겨",
        "en": "leave a message for them"
       },
       {
        "ko": "메시지 남기고 싶어",
        "en": "want to leave a message"
       }
      ]
     },
     {
      "ko": "시키다",
      "en": "make",
      "ex": [
       {
        "ko": "그녀에게 일 열심히 하게 시켜",
        "en": "make her work hard"
       },
       {
        "ko": "걔네들 이거 하게 시켜",
        "en": "make them do this"
       },
       {
        "ko": "너 저거 하도록 시킬 거야",
        "en": "will make you do that"
       }
      ]
     },
     {
      "ko": "전화를 받다",
      "en": "pick up the phone",
      "ex": [
       {
        "ko": "지금 전화 받아!",
        "en": "Pick up the phone now!"
       },
       {
        "ko": "전화 받을 거야",
        "en": "will pick up the phone"
       },
       {
        "ko": "전화 받을 수 없어",
        "en": "can't pick up the phone"
       }
      ]
     },
     {
      "ko": "직장을 그만두다",
      "en": "quit the job",
      "ex": [
       {
        "ko": "일 그만두길 원해",
        "en": "want to quit the job"
       },
       {
        "ko": "곧 일 그만둘 거야",
        "en": "will quit the job soon"
       },
       {
        "ko": "일을 쉽게 그만둬",
        "en": "quit the job easily"
       }
      ]
     },
     {
      "ko": "퇴직하다",
      "en": "retire",
      "ex": [
       {
        "ko": "곧 퇴직할 거야",
        "en": "will retire soon"
       },
       {
        "ko": "퇴직하고 싶지 않아",
        "en": "don't want to retire"
       },
       {
        "ko": "퇴직하고 싶어",
        "en": "want to retire"
       }
      ]
     },
     {
      "ko": "메시지를 남겼다",
      "en": "left a message",
      "ex": [
       {
        "ko": "그녀에게 메시지 남겼어",
        "en": "left a message for her"
       },
       {
        "ko": "삐 소리 후에 메시지 남겼어",
        "en": "left a message after the beep"
       },
       {
        "ko": "급하게 메시지 남겼어",
        "en": "left a message in a hurry"
       }
      ]
     },
     {
      "ko": "시켰다",
      "en": "made",
      "ex": [
       {
        "ko": "걔에게 해외에서 일하도록 시켰어",
        "en": "made him work abroad"
       },
       {
        "ko": "그녀에게 보고서 쓰라고 시켰어",
        "en": "made her write a report"
       },
       {
        "ko": "너에게 연수 받게 시켰어",
        "en": "made you get training"
       }
      ]
     },
     {
      "ko": "전화를 받았다",
      "en": "picked up the phone",
      "ex": [
       {
        "ko": "나 전화 받았어.",
        "en": "I picked up the phone."
       },
       {
        "ko": "또 전화 안 받았어",
        "en": "picked up the phone again"
       },
       {
        "ko": "그녀가 전화 받았어.",
        "en": "She picked up the phone."
       }
      ]
     },
     {
      "ko": "직장을 그만뒀다",
      "en": "quit the job",
      "ex": [
       {
        "ko": "또 일 그만뒀어",
        "en": "quit the job again"
       },
       {
        "ko": "통보 없이 일 그만뒀어",
        "en": "quit the job without notice"
       },
       {
        "ko": "오늘 일 그만뒀어",
        "en": "quit the job today"
       }
      ]
     },
     {
      "ko": "퇴직했다",
      "en": "retired",
      "ex": [
       {
        "ko": "2010년도에 퇴직했어",
        "en": "retired in 2010"
       },
       {
        "ko": "70살에 퇴직했어",
        "en": "retired at the age of 70"
       },
       {
        "ko": "작년에 퇴직했어",
        "en": "retired last year"
       }
      ]
     }
    ]
   },
   {
    "theme": "회사 Business (3)",
    "items": [
     {
      "ko": "사업을 하다",
      "en": "run a business",
      "ex": [
       {
        "ko": "새로운 사업을 해",
        "en": "run a new business"
       },
       {
        "ko": "작은 사업을 해",
        "en": "run a small business"
       },
       {
        "ko": "내 친구랑 사업을 해",
        "en": "run a business with my friend"
       }
      ]
     },
     {
      "ko": "일을 시작하다",
      "en": "start work",
      "ex": [
       {
        "ko": "월요일에 일 시작해",
        "en": "start work on Monday"
       },
       {
        "ko": "바로 일 시작해",
        "en": "start work immediately"
       },
       {
        "ko": "아침 일찍 일 시작해",
        "en": "start work early in the morning"
       }
      ]
     },
     {
      "ko": "성공하다",
      "en": "succeed",
      "ex": [
       {
        "ko": "사업에서 성공해",
        "en": "succeed in business"
       },
       {
        "ko": "인생에서 성공해",
        "en": "succeed in life"
       },
       {
        "ko": "성공할 수 있어",
        "en": "can succeed"
       }
      ]
     },
     {
      "ko": "월차를 사용하다",
      "en": "take a day off",
      "ex": [
       {
        "ko": "내일 월차를 사용해",
        "en": "is taking a day off tomorrow"
       },
       {
        "ko": "이번 금요일에 월차를 사용해",
        "en": "is taking a day off this Friday"
       },
       {
        "ko": "월차 사용하지 마!",
        "en": "Don't take a day off from work!"
       }
      ]
     },
     {
      "ko": "이야기하다",
      "en": "talk",
      "ex": [
       {
        "ko": "내 친구랑 얘기해",
        "en": "talk to my friend"
       },
       {
        "ko": "우리 엄마랑 얘기해",
        "en": "talk to my mom"
       },
       {
        "ko": "그녀랑 얘기하고 싶어",
        "en": "want to talk to her"
       }
      ]
     },
     {
      "ko": "사업을 했다",
      "en": "ran a business",
      "ex": [
       {
        "ko": "혼자 사업을 해",
        "en": "ran a business alone"
       },
       {
        "ko": "온라인으로 사업을 해",
        "en": "ran a business online"
       },
       {
        "ko": "나만의 사업을 해",
        "en": "ran my own business"
       }
      ]
     },
     {
      "ko": "일을 시작했다",
      "en": "started work",
      "ex": [
       {
        "ko": "저번 목요일에 일 시작했어",
        "en": "started work last Thursday"
       },
       {
        "ko": "6월에 일 시작했어",
        "en": "started work in June"
       },
       {
        "ko": "오전 8시에 일 시작했어",
        "en": "started work at 8 a.m."
       }
      ]
     },
     {
      "ko": "성공했다",
      "en": "succeeded",
      "ex": [
       {
        "ko": "결국 성공했어",
        "en": "finally succeeded"
       },
       {
        "ko": "그 프로젝트에서 성공했어",
        "en": "succeeded in the project"
       },
       {
        "ko": "이거 만드는 거 성공했어",
        "en": "succeeded in making it"
       }
      ]
     },
     {
      "ko": "월차를 사용했다",
      "en": "took a day off",
      "ex": [
       {
        "ko": "오늘 월차 사용했어",
        "en": "took a day off today"
       },
       {
        "ko": "어제 월차 사용했어",
        "en": "took a day off yesterday"
       },
       {
        "ko": "월차 반나절 사용했어",
        "en": "took a half day off"
       }
      ]
     },
     {
      "ko": "이야기했다",
      "en": "talked",
      "ex": [
       {
        "ko": "미래에 대해 얘기했어",
        "en": "talked about the future"
       },
       {
        "ko": "내 꿈에 대해 얘기했어",
        "en": "talked about my dream"
       },
       {
        "ko": "걔에 대해 얘기했어",
        "en": "talked about him"
       }
      ]
     },
     {
      "ko": "통화하다",
      "en": "talk on the phone",
      "ex": [
       {
        "ko": "하루 종일 통화해",
        "en": "talk on the phone all day"
       },
       {
        "ko": "밤새 통화해",
        "en": "talk on the phone all night"
       },
       {
        "ko": "저녁에 통화해",
        "en": "talk on the phone at night"
       }
      ]
     },
     {
      "ko": "생각하다",
      "en": "think",
      "ex": [
       {
        "ko": "그녀를 생각해",
        "en": "think of her"
       },
       {
        "ko": "걔를 생각해",
        "en": "think of him"
       },
       {
        "ko": "내 남자친구를 생각해",
        "en": "think of my boyfriend"
       }
      ]
     },
     {
      "ko": "일하다",
      "en": "work",
      "ex": [
       {
        "ko": "열심히 일해",
        "en": "work hard"
       },
       {
        "ko": "오늘 일해",
        "en": "work today"
       },
       {
        "ko": "여기서 일해",
        "en": "work here"
       }
      ]
     },
     {
      "ko": "해외에서 일하다",
      "en": "work abroad",
      "ex": [
       {
        "ko": "해외에서 일하길 바라",
        "en": "hope to work abroad"
       },
       {
        "ko": "해외에서 일하길 계획해",
        "en": "plan to work abroad"
       },
       {
        "ko": "해외에서 일하도록 노력해",
        "en": "try to work abroad"
       }
      ]
     },
     {
      "ko": "보고서 쓰다",
      "en": "write a report",
      "ex": [
       {
        "ko": "보고서 써야만 해",
        "en": "have to write a report"
       },
       {
        "ko": "보고서 쓸 필요가 있어",
        "en": "need to write a report"
       },
       {
        "ko": "보고서 쓰고 싶지 않아",
        "en": "don't want to write a report"
       }
      ]
     },
     {
      "ko": "통화했다",
      "en": "talked on the phone",
      "ex": [
       {
        "ko": "몇 시간 통화했어",
        "en": "talked on the phone for hours"
       },
       {
        "ko": "그녀랑 통화했어",
        "en": "talked to her on the phone"
       },
       {
        "ko": "걔랑 통화했어",
        "en": "talked to him on the phone"
       }
      ]
     },
     {
      "ko": "생각했다",
      "en": "thought",
      "ex": [
       {
        "ko": "걔네들을 생각했어",
        "en": "thought of them"
       },
       {
        "ko": "내 여자친구를 생각했어",
        "en": "thought of my girlfriend"
       },
       {
        "ko": "우리 엄마를 생각했어",
        "en": "thought of my mom"
       }
      ]
     },
     {
      "ko": "일했다",
      "en": "worked",
      "ex": [
       {
        "ko": "함께 일했어",
        "en": "worked together"
       },
       {
        "ko": "어제 일했어",
        "en": "worked yesterday"
       },
       {
        "ko": "혼자 일했어",
        "en": "worked alone"
       }
      ]
     },
     {
      "ko": "해외에서 일했다",
      "en": "worked abroad",
      "ex": [
       {
        "ko": "2010년에 해외에서 일했어",
        "en": "worked abroad in 2010"
       },
       {
        "ko": "2년 동안 해외에서 일했어",
        "en": "worked abroad for 2 years"
       },
       {
        "ko": "임시로 해외에서 일했어",
        "en": "worked abroad temporarily"
       }
      ]
     },
     {
      "ko": "보고서 썼다",
      "en": "wrote a report",
      "ex": [
       {
        "ko": "보고서 두 시간 동안 썼어",
        "en": "wrote a report for two hours"
       },
       {
        "ko": "보고서 잘 썼어",
        "en": "wrote a report well"
       },
       {
        "ko": "하루 종일 보고서 썼어",
        "en": "wrote a report all day long"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "cat": "여가표현",
  "icon": "🎨",
  "color": "#ec4899",
  "desc": "취미·여가 관련 표현",
  "themes": [
   {
    "theme": "교통 Transportation (1)",
    "items": [
     {
      "ko": "교통사고",
      "en": "car accident",
      "ex": [
       {
        "ko": "교통사고를 당했어",
        "en": "had a car accident"
       },
       {
        "ko": "교통사고로 죽었어",
        "en": "died in a car accident"
       },
       {
        "ko": "교통사고로 부상당했어",
        "en": "had an injury in a car accident"
       }
      ]
     },
     {
      "ko": "사거리",
      "en": "intersection",
      "ex": [
       {
        "ko": "사거리에서 정지해",
        "en": "stop at the intersection"
       },
       {
        "ko": "사거리에서 돌려",
        "en": "turn at the intersection"
       },
       {
        "ko": "사거리에서 내려",
        "en": "get off at the intersection"
       }
      ]
     },
     {
      "ko": "운전면허증",
      "en": "driver's license",
      "ex": [
       {
        "ko": "운전면허를 땄어",
        "en": "got a driver's license"
       },
       {
        "ko": "운전면허증을 잃어버렸어",
        "en": "lost a driver's license"
       },
       {
        "ko": "운전면허증을 보여줬어",
        "en": "showed a driver's license"
       }
      ]
     },
     {
      "ko": "차도",
      "en": "roadway",
      "ex": [
       {
        "ko": "차도에서 뛰어",
        "en": "run on the roadway"
       },
       {
        "ko": "차도에서 주차해",
        "en": "park on the roadway"
       },
       {
        "ko": "차도에서 운전해",
        "en": "drive on the roadway"
       }
      ]
     },
     {
      "ko": "주차장",
      "en": "parking lot",
      "ex": [
       {
        "ko": "이 주차장에 주차해",
        "en": "park in this parking lot"
       },
       {
        "ko": "주차장에 들어가",
        "en": "enter the parking lot"
       },
       {
        "ko": "주차장에서 나가",
        "en": "get out of the parking lot"
       }
      ]
     },
     {
      "ko": "신호등",
      "en": "traffic light",
      "ex": [
       {
        "ko": "신호등을 봐",
        "en": "look at the traffic light"
       },
       {
        "ko": "신호등을 주목해",
        "en": "pay attention to the traffic light"
       },
       {
        "ko": "신호등을 찾아",
        "en": "find the traffic light"
       }
      ]
     },
     {
      "ko": "접촉사고",
      "en": "small accident",
      "ex": [
       {
        "ko": "접촉사고가 있어",
        "en": "have a small accident"
       },
       {
        "ko": "접촉사고가 있었어",
        "en": "had a small accident"
       },
       {
        "ko": "접촉사고가 없어",
        "en": "didn't have a small accident"
       }
      ]
     },
     {
      "ko": "제한속도",
      "en": "speed limit",
      "ex": [
       {
        "ko": "제한속도를 넘지 마!",
        "en": "Don't exceed the speed limit!"
       },
       {
        "ko": "제한속도를 지켜",
        "en": "observe the speed limit"
       },
       {
        "ko": "제한속도를 위반했어",
        "en": "violated the speed limit"
       }
      ]
     },
     {
      "ko": "교통정체",
      "en": "traffic congestion",
      "ex": [
       {
        "ko": "교통 정체가 있었어",
        "en": "had traffic congestion"
       },
       {
        "ko": "교통 정체가 없어",
        "en": "have no traffic congestion"
       },
       {
        "ko": "교통 정체를 싫어해",
        "en": "hate traffic congestion"
       }
      ]
     },
     {
      "ko": "교통 표지판",
      "en": "traffic sign",
      "ex": [
       {
        "ko": "교통 표지판을 봐",
        "en": "look at the traffic sign"
       },
       {
        "ko": "교통 표지판을 주목해",
        "en": "pay attention to the traffic sign"
       },
       {
        "ko": "교통 표지판을 찾아",
        "en": "find the traffic sign"
       }
      ]
     },
     {
      "ko": "견인되다",
      "en": "be towed",
      "ex": [
       {
        "ko": "견인될 수도 있어",
        "en": "might be towed"
       },
       {
        "ko": "걔 차 견인될 수도 있어.",
        "en": "His car might be towed."
       },
       {
        "ko": "내 차 견인될 수도 있어.",
        "en": "My car might be towed."
       }
      ]
     },
     {
      "ko": "안전벨트를 매다",
      "en": "buckle the seat belt",
      "ex": [
       {
        "ko": "안전을 위해 안전벨트를 매",
        "en": "buckle the seat belt to be safe"
       },
       {
        "ko": "운전하기 전에 안전벨트를 매",
        "en": "buckle the seat belt before you drive"
       },
       {
        "ko": "출발하기 전에 안전벨트를 매",
        "en": "buckle the seat belt before you take off"
       }
      ]
     },
     {
      "ko": "차선 바꾸다",
      "en": "change the lane",
      "ex": [
       {
        "ko": "여기서 차선 바꿔도 돼",
        "en": "can change the lane here"
       },
       {
        "ko": "차선 조심히 바꿔야 해",
        "en": "should change the lane safely"
       },
       {
        "ko": "지금 차선 바꿔!",
        "en": "Change the lane now!"
       }
      ]
     },
     {
      "ko": "길을 건너다",
      "en": "cross the street",
      "ex": [
       {
        "ko": "길 건너면 안돼",
        "en": "shouldn't cross the street"
       },
       {
        "ko": "길 건널 거야",
        "en": "will cross the street"
       },
       {
        "ko": "여기서 길 건너지 마!",
        "en": "Don't cross the street here!"
       }
      ]
     },
     {
      "ko": "운전하다",
      "en": "drive",
      "ex": [
       {
        "ko": "차를 운전해",
        "en": "drive a car"
       },
       {
        "ko": "버스를 운전해",
        "en": "drive a bus"
       },
       {
        "ko": "택시를 운전해",
        "en": "drive a taxi"
       }
      ]
     },
     {
      "ko": "견인됐다",
      "en": "was towed",
      "ex": [
       {
        "ko": "내 차 견인됐어.",
        "en": "My car was towed."
       },
       {
        "ko": "우리 차 견인됐어.",
        "en": "Our car was towed."
       },
       {
        "ko": "내 친구 차 견인됐어.",
        "en": "My friend's car was towed."
       }
      ]
     },
     {
      "ko": "안전벨트를 맸다",
      "en": "buckled the seat belt",
      "ex": [
       {
        "ko": "걔는 안전벨트를 맸어.",
        "en": "He buckled the seat belt."
       },
       {
        "ko": "차에서 안전벨트를 맸어",
        "en": "buckled the seat belt in the car"
       },
       {
        "ko": "버스에서 안전벨트를 맸어",
        "en": "buckled the seat belt in the bus"
       }
      ]
     },
     {
      "ko": "차선 바꿨다",
      "en": "changed the lane",
      "ex": [
       {
        "ko": "빨리 차선 바꿨어",
        "en": "changed the lane quickly"
       },
       {
        "ko": "조심히 차선 바꿨어",
        "en": "changed the lane carefully"
       },
       {
        "ko": "또 차선 바꿨어",
        "en": "changed the lane again"
       }
      ]
     },
     {
      "ko": "길을 건넜다",
      "en": "crossed the street",
      "ex": [
       {
        "ko": "여기서 길 건넜어",
        "en": "crossed the street here"
       },
       {
        "ko": "다시 길 건넜어",
        "en": "crossed the street again"
       },
       {
        "ko": "저기서 길 건넜어",
        "en": "crossed the street there"
       }
      ]
     },
     {
      "ko": "운전했다",
      "en": "drove",
      "ex": [
       {
        "ko": "그 장소를 향해 운전했어",
        "en": "drove to the place"
       },
       {
        "ko": "내 집을 향해 운전했어",
        "en": "drove to my house"
       },
       {
        "ko": "그 마을을 향해 운전했어",
        "en": "drove to the village"
       }
      ]
     },
     {
      "ko": "주유하다",
      "en": "fill up the gas tank",
      "ex": [
       {
        "ko": "주유할 필요가 있어",
        "en": "need to fill up the gas tank"
       },
       {
        "ko": "주유해야 해",
        "en": "should fill up the gas tank"
       },
       {
        "ko": "주유 꼭 해!",
        "en": "Make sure to fill up your gas tank!"
       }
      ]
     },
     {
      "ko": "딱지 떼다",
      "en": "get a ticket",
      "ex": [
       {
        "ko": "딱지 떼고 싶지 않아",
        "en": "don't want to get a ticket"
       },
       {
        "ko": "딱지 떼는 거 무서워",
        "en": "be afraid of getting a ticket"
       },
       {
        "ko": "이번엔 딱지 안 뗄 거야",
        "en": "won't get a ticket this time"
       }
      ]
     },
     {
      "ko": "고장나다",
      "en": "get broken",
      "ex": [
       {
        "ko": "고속도로에서 고장이 나",
        "en": "get broken on the highway"
       },
       {
        "ko": "거리에서 고장이 나",
        "en": "get broken on the street"
       },
       {
        "ko": "주차장에서 고장이 나",
        "en": "get broken at the parking lot"
       }
      ]
     },
     {
      "ko": "멀미하다",
      "en": "get carsick",
      "ex": [
       {
        "ko": "쉽게 멀미해",
        "en": "get carsick easily"
       },
       {
        "ko": "멀미할 거 같아",
        "en": "might get carsick"
       },
       {
        "ko": "멀미하는 거 싫어",
        "en": "hate to get carsick"
       }
      ]
     },
     {
      "ko": "차에 타다",
      "en": "get in the car",
      "ex": [
       {
        "ko": "지금 차에 타!",
        "en": "Get in the car now!"
       },
       {
        "ko": "내 차에 타야 해",
        "en": "should get in my car"
       },
       {
        "ko": "차에 타고 싶어",
        "en": "want to get in the car"
       }
      ]
     },
     {
      "ko": "주유했다",
      "en": "filled up the gas tank",
      "ex": [
       {
        "ko": "우리 엄마가 주유했어.",
        "en": "My mom filled up the gas tank."
       },
       {
        "ko": "그녀가 주유했어.",
        "en": "She filled up the gas tank."
       },
       {
        "ko": "걔가 주유했어.",
        "en": "He filled up the gas tank."
       }
      ]
     },
     {
      "ko": "딱지 뗐다",
      "en": "got a ticket",
      "ex": [
       {
        "ko": "과속딱지 저번주에 뗐어",
        "en": "got a speeding ticket last week"
       },
       {
        "ko": "주차딱지 또 뗐어",
        "en": "got a parking ticket again"
       },
       {
        "ko": "과속딱지 어제 저녁에 뗐어",
        "en": "got a speeding ticket last night"
       }
      ]
     },
     {
      "ko": "고장났다",
      "en": "got broken",
      "ex": [
       {
        "ko": "오늘 아침에 고장 났어",
        "en": "got broken this morning"
       },
       {
        "ko": "어제 고장 났어",
        "en": "got broken yesterday"
       },
       {
        "ko": "어젯밤에 고장 났어",
        "en": "got broken last night"
       }
      ]
     },
     {
      "ko": "멀미했다",
      "en": "got carsick",
      "ex": [
       {
        "ko": "나 또 멀미했어.",
        "en": "I got carsick again."
       },
       {
        "ko": "걔네들 멀미했어.",
        "en": "They got carsick."
       },
       {
        "ko": "우리 가족이 멀미했어.",
        "en": "My family got carsick."
       }
      ]
     },
     {
      "ko": "차에 탔다",
      "en": "got in the car",
      "ex": [
       {
        "ko": "빨리 차에 탔어",
        "en": "got in the car quickly"
       },
       {
        "ko": "걔 차에 탔어",
        "en": "got in his car"
       },
       {
        "ko": "내 남자친구의 차에 탔어",
        "en": "got in my boyfriend's car"
       }
      ]
     }
    ]
   },
   {
    "theme": "교통 Transportation (2)",
    "items": [
     {
      "ko": "차에서 내리다",
      "en": "get out of the car",
      "ex": [
       {
        "ko": "차에서 내려!",
        "en": "Get out of the car!"
       },
       {
        "ko": "차에서 내리자!",
        "en": "Let's get out of the car!"
       },
       {
        "ko": "차에서 내리고 싶지 않아",
        "en": "don't want to get out of the car"
       }
      ]
     },
     {
      "ko": "차량 점검하다",
      "en": "get the car checked",
      "ex": [
       {
        "ko": "내 차 점검이 필요해",
        "en": "need to get my car checked"
       },
       {
        "ko": "내 차 점검하고 싶어",
        "en": "want to get my car checked"
       },
       {
        "ko": "내 차 점검할 거야",
        "en": "will get my car checked"
       }
      ]
     },
     {
      "ko": "차 수리받다",
      "en": "get the car fixed",
      "ex": [
       {
        "ko": "내 차 수리 받을 필요가 있어.",
        "en": "I need to get my car fixed."
       },
       {
        "ko": "내 차 수리 받아야 해.",
        "en": "I should get my car fixed."
       },
       {
        "ko": "너 차 수리 꼭 받아!",
        "en": "Make sure to get your car fixed!"
       }
      ]
     },
     {
      "ko": "운전면허 따다",
      "en": "get the driver's license",
      "ex": [
       {
        "ko": "운전면허 따기를 바라",
        "en": "hope to get the driver's license"
       },
       {
        "ko": "운전면허 따는 거는 쉬워.",
        "en": "It's easy to get the driver's license."
       },
       {
        "ko": "운전면허 딸 거야",
        "en": "will get the driver's license"
       }
      ]
     },
     {
      "ko": "후진하다",
      "en": "go backwards",
      "ex": [
       {
        "ko": "지금 후진해",
        "en": "go backwards now"
       },
       {
        "ko": "다시 후진해",
        "en": "go backwards again"
       },
       {
        "ko": "바로 지금 후진해",
        "en": "go backwards right now"
       }
      ]
     },
     {
      "ko": "차에서 내렸다",
      "en": "got out of the car",
      "ex": [
       {
        "ko": "그녀는 차에서 내렸어.",
        "en": "She got out of the car."
       },
       {
        "ko": "우리 아빠가 차에서 내렸어.",
        "en": "My dad got out of the car."
       },
       {
        "ko": "걔네들은 차에서 내렸어.",
        "en": "They got out of the car."
       }
      ]
     },
     {
      "ko": "차량 점검했다",
      "en": "got the car checked",
      "ex": [
       {
        "ko": "걔는 차량 점검했어.",
        "en": "He got his car checked."
       },
       {
        "ko": "그녀는 차량 점검했어.",
        "en": "She got her car checked."
       },
       {
        "ko": "우리 엄마는 차량 점검했어.",
        "en": "My mom got her car checked."
       }
      ]
     },
     {
      "ko": "차 수리받았다",
      "en": "got the car fixed",
      "ex": [
       {
        "ko": "나 드디어 차 수리 받았어.",
        "en": "I finally got my car fixed."
       },
       {
        "ko": "그녀는 차를 또 수리 받았어.",
        "en": "She got her car fixed again."
       },
       {
        "ko": "걔 어제 차 수리 받았어.",
        "en": "He got his car fixed yesterday."
       }
      ]
     },
     {
      "ko": "운전면허 땄다",
      "en": "got the driver's license",
      "ex": [
       {
        "ko": "그녀는 운전면허 땄어.",
        "en": "She got her driver's license."
       },
       {
        "ko": "나 운전면허 땄어.",
        "en": "I got my driver's license."
       },
       {
        "ko": "걔 운전면허 땄어.",
        "en": "He got his driver's license."
       }
      ]
     },
     {
      "ko": "후진했다",
      "en": "went backwards",
      "ex": [
       {
        "ko": "주차장에서 후진했어",
        "en": "went backwards in the parking lot"
       },
       {
        "ko": "공원에서 후진했어",
        "en": "went backwards in the park"
       },
       {
        "ko": "운동장에서 후진했어",
        "en": "went backwards in the playground"
       }
      ]
     },
     {
      "ko": "직진하다",
      "en": "go straight",
      "ex": [
       {
        "ko": "이 거리를 따라서 직진해",
        "en": "go straight along this street"
       },
       {
        "ko": "사거리에서 직진해",
        "en": "go straight at the intersection"
       },
       {
        "ko": "이제 직진해",
        "en": "go straight now"
       }
      ]
     },
     {
      "ko": "펑크나다",
      "en": "have a flat tire",
      "ex": [
       {
        "ko": "내 차 펑크났어.",
        "en": "I have a flat tire."
       },
       {
        "ko": "걔네들 차 펑크났어.",
        "en": "They have a flat tire."
       },
       {
        "ko": "우리 아빠 차 펑크났어.",
        "en": "My dad has a flat tire."
       }
      ]
     },
     {
      "ko": "사고가 나다",
      "en": "have an accident",
      "ex": [
       {
        "ko": "대형 사고가 나",
        "en": "have a big accident"
       },
       {
        "ko": "접촉 사고가 나",
        "en": "have a small accident"
       },
       {
        "ko": "끔찍한 사고가 나",
        "en": "have a terrible accident"
       }
      ]
     },
     {
      "ko": "유턴하다",
      "en": "make a U-turn",
      "ex": [
       {
        "ko": "여기서 유턴하면 안돼",
        "en": "can't make a U-turn here"
       },
       {
        "ko": "저기에서 유턴해도 돼",
        "en": "can make a U-turn over here"
       },
       {
        "ko": "유턴해야 해",
        "en": "should make a U-turn"
       }
      ]
     },
     {
      "ko": "버스를 놓치다",
      "en": "miss the bus",
      "ex": [
       {
        "ko": "버스 놓치지 마!",
        "en": "Don't miss the bus!"
       },
       {
        "ko": "버스 놓치면 안돼",
        "en": "shouldn't miss the bus"
       },
       {
        "ko": "버스 놓칠 수도 있어",
        "en": "might miss the bus"
       }
      ]
     },
     {
      "ko": "직진했다",
      "en": "went straight",
      "ex": [
       {
        "ko": "집으로 직진했어",
        "en": "went straight home"
       },
       {
        "ko": "저 건물로 직진했어",
        "en": "went straight to that building"
       },
       {
        "ko": "공원으로 직진했어",
        "en": "went straight to the park"
       }
      ]
     },
     {
      "ko": "펑크났었다",
      "en": "had a flat tire",
      "ex": [
       {
        "ko": "그녀의 차가 펑크났었어.",
        "en": "She had a flat tire."
       },
       {
        "ko": "내 친구 차 펑크났었어.",
        "en": "My friend had a flat tire."
       },
       {
        "ko": "내 동료 차 펑크났었어.",
        "en": "My coworker had a flat tire."
       }
      ]
     },
     {
      "ko": "사고가 났다",
      "en": "had an accident",
      "ex": [
       {
        "ko": "여행 기간 동안 사고가 났어",
        "en": "had an accident during the trip"
       },
       {
        "ko": "방학 때 사고가 났어",
        "en": "had an accident on the vacation"
       },
       {
        "ko": "주말에 사고가 났어",
        "en": "had an accident on the weekend"
       }
      ]
     },
     {
      "ko": "유턴했다",
      "en": "made a U-turn",
      "ex": [
       {
        "ko": "한 운전수가 여기서 유턴했어.",
        "en": "A driver made a U-turn here."
       },
       {
        "ko": "내 친구가 여기서 유턴했어.",
        "en": "My friend made a U-turn here."
       },
       {
        "ko": "걔 저기서 유턴했어.",
        "en": "He made a U-turn there."
       }
      ]
     },
     {
      "ko": "버스를 놓쳤다",
      "en": "missed the bus",
      "ex": [
       {
        "ko": "이미 버스 놓쳤어",
        "en": "already missed the bus"
       },
       {
        "ko": "버스 또 놓쳤어",
        "en": "missed the bus again"
       },
       {
        "ko": "그녀는 버스를 놓쳤어.",
        "en": "She missed the bus."
       }
      ]
     },
     {
      "ko": "주차하다",
      "en": "park",
      "ex": [
       {
        "ko": "여기에 주차해야 해",
        "en": "should park here"
       },
       {
        "ko": "여기에 주차하지 마!",
        "en": "Don't park here!"
       },
       {
        "ko": "너 차 여기에 주차해!",
        "en": "Park your car here!"
       }
      ]
     },
     {
      "ko": "위반하다",
      "en": "violate",
      "ex": [
       {
        "ko": "교통 법규를 위반해",
        "en": "violate the traffic law"
       },
       {
        "ko": "제한 속도를 위반해",
        "en": "violate the speed limit"
       },
       {
        "ko": "아무것도 위반하지 않아",
        "en": "don't violate anything"
       }
      ]
     },
     {
      "ko": "차를 빌리다",
      "en": "rent a car",
      "ex": [
       {
        "ko": "차 빌릴 거야",
        "en": "will rent a car"
       },
       {
        "ko": "차 빌리고 싶어",
        "en": "want to rent a car"
       },
       {
        "ko": "이번 주말에 차 빌리자!",
        "en": "Let's rent a car this weekend!"
       }
      ]
     },
     {
      "ko": "창문 내리다",
      "en": "roll down the window",
      "ex": [
       {
        "ko": "창문 내리고 싶어",
        "en": "want to roll down the window"
       },
       {
        "ko": "창문을 내리려고 해",
        "en": "try to roll down the window"
       },
       {
        "ko": "창문을 내려주세요!",
        "en": "Roll down the window, please!"
       }
      ]
     },
     {
      "ko": "창문 올리다",
      "en": "roll up the window",
      "ex": [
       {
        "ko": "창문 올리고 싶어",
        "en": "want to roll up the window"
       },
       {
        "ko": "창문 올리려고 해",
        "en": "try to roll up the window"
       },
       {
        "ko": "창문 올려줄 수 있어?",
        "en": "Can you roll up the window?"
       }
      ]
     },
     {
      "ko": "주차했다",
      "en": "parked",
      "ex": [
       {
        "ko": "잠시 동안 주차했어",
        "en": "parked the car for a while"
       },
       {
        "ko": "두 시간 동안 주차했어",
        "en": "parked the car for 2 hours"
       },
       {
        "ko": "너네 집 앞에 주차했어",
        "en": "parked the car in front of your house"
       }
      ]
     },
     {
      "ko": "위반했다",
      "en": "violated",
      "ex": [
       {
        "ko": "규칙을 위반했어",
        "en": "violated the rules"
       },
       {
        "ko": "법을 위반했어",
        "en": "violated the law"
       },
       {
        "ko": "도덕 규범을 위반했어",
        "en": "violated the moral rules"
       }
      ]
     },
     {
      "ko": "차를 빌렸다",
      "en": "rented a car",
      "ex": [
       {
        "ko": "일주일 동안 차 빌렸어",
        "en": "rented a car for a week"
       },
       {
        "ko": "3일 동안 차 빌렸어",
        "en": "rented a car for three days"
       },
       {
        "ko": "좋은 차 빌렸어",
        "en": "rented a nice car"
       }
      ]
     },
     {
      "ko": "창문 내렸다",
      "en": "rolled down the window",
      "ex": [
       {
        "ko": "걔가 창문 내렸어.",
        "en": "He rolled down the window."
       },
       {
        "ko": "그녀가 창문 내렸어.",
        "en": "She rolled down the window."
       },
       {
        "ko": "우리 엄마가 창문 내렸어.",
        "en": "My mom rolled down the window."
       }
      ]
     },
     {
      "ko": "창문 올렸다",
      "en": "rolled up the window",
      "ex": [
       {
        "ko": "난 창문을 올렸어.",
        "en": "I rolled up the window."
       },
       {
        "ko": "걔네들은 창문을 올렸어.",
        "en": "They rolled up the window."
       },
       {
        "ko": "우리 부모님이 창문을 올렸어.",
        "en": "My parents rolled up the window."
       }
      ]
     }
    ]
   },
   {
    "theme": "교통 Transportation (3)",
    "items": [
     {
      "ko": "미끄러지다",
      "en": "skid",
      "ex": [
       {
        "ko": "이 차 미끄러질 거 같아.",
        "en": "This car might skid."
       },
       {
        "ko": "저 트럭 미끄러질 거 같아.",
        "en": "That truck might skid."
       },
       {
        "ko": "내 차 미끄러질 거 같이 보여.",
        "en": "My car seems to skid."
       }
      ]
     },
     {
      "ko": "시동 걸다",
      "en": "start the car",
      "ex": [
       {
        "ko": "부드럽게 시동 걸어",
        "en": "start the car smoothly"
       },
       {
        "ko": "어떻게 시동 거는지 알아",
        "en": "know how to start the car"
       },
       {
        "ko": "시동 걸 수 있어",
        "en": "can start the car"
       }
      ]
     },
     {
      "ko": "시동 끄다",
      "en": "stop the car",
      "ex": [
       {
        "ko": "어떻게 시동 끄는지 알아",
        "en": "know how to stop the car"
       },
       {
        "ko": "어떻게 시동 끄는지 몰라",
        "en": "don't know how to stop the car"
       },
       {
        "ko": "시동 끌 수 있어",
        "en": "can stop the car"
       }
      ]
     },
     {
      "ko": "지름길로 가다",
      "en": "take a shortcut",
      "ex": [
       {
        "ko": "지름길로 갈 수 있어",
        "en": "can take a shortcut"
       },
       {
        "ko": "지름길로 가려고 해",
        "en": "try to take a shortcut"
       },
       {
        "ko": "지름길로 가고 싶어",
        "en": "want to take a shortcut"
       }
      ]
     },
     {
      "ko": "세차하다",
      "en": "wash the car",
      "ex": [
       {
        "ko": "세차해!",
        "en": "Wash your car!"
       },
       {
        "ko": "나 매주 세차해.",
        "en": "I wash my car every week."
       },
       {
        "ko": "나 세차할 필요가 있어.",
        "en": "I need to wash my car."
       }
      ]
     },
     {
      "ko": "미끄러졌다",
      "en": "skidded",
      "ex": [
       {
        "ko": "저 차가 막 미끄러졌어.",
        "en": "That car just skidded."
       },
       {
        "ko": "내 차가 미끄러졌어.",
        "en": "My car skidded."
       },
       {
        "ko": "그녀 차가 미끄러졌어.",
        "en": "Her car skidded."
       }
      ]
     },
     {
      "ko": "시동 걸었다",
      "en": "started the car",
      "ex": [
       {
        "ko": "걔 다시 시동 걸었어.",
        "en": "He started the car again."
       },
       {
        "ko": "그녀는 시동 걸었어.",
        "en": "She started the car."
       },
       {
        "ko": "우리 아빠가 시동 걸었어.",
        "en": "My dad started the car."
       }
      ]
     },
     {
      "ko": "시동 껐다",
      "en": "stopped the car",
      "ex": [
       {
        "ko": "시동 빨리 껐어",
        "en": "stopped the car quickly"
       },
       {
        "ko": "그녀의 차를 멈췄어",
        "en": "stopped her car"
       },
       {
        "ko": "걔가 시동을 껐어.",
        "en": "He stopped his car."
       }
      ]
     },
     {
      "ko": "지름길로 갔다",
      "en": "took a shortcut",
      "ex": [
       {
        "ko": "우리는 지름길로 갔어.",
        "en": "We took a shortcut."
       },
       {
        "ko": "걔네들은 지름길로 갔어.",
        "en": "They took a shortcut."
       },
       {
        "ko": "그녀는 지름길로 갔어.",
        "en": "She took a shortcut."
       }
      ]
     },
     {
      "ko": "세차했다",
      "en": "washed the car",
      "ex": [
       {
        "ko": "나 어제 세차했어.",
        "en": "I washed my car yesterday."
       },
       {
        "ko": "걔 세차 또 했어.",
        "en": "He washed his car again."
       },
       {
        "ko": "그녀는 드디어 세차했어.",
        "en": "She finally washed her car."
       }
      ]
     }
    ]
   },
   {
    "theme": "상태 Condition (1)",
    "items": [
     {
      "ko": "야망이 있다",
      "en": "be ambitious",
      "ex": [
       {
        "ko": "그는 야망이 없어.",
        "en": "He is not ambitious."
       },
       {
        "ko": "그녀는 야망이 있어.",
        "en": "She is ambitious."
       },
       {
        "ko": "그는 매우 야망이 있어.",
        "en": "He is very ambitious."
       }
      ]
     },
     {
      "ko": "무섭다",
      "en": "be afraid",
      "ex": [
       {
        "ko": "거미를 무서워해",
        "en": "be afraid of spiders"
       },
       {
        "ko": "그를 무서워해",
        "en": "be afraid of him"
       },
       {
        "ko": "어둠을 무서워해",
        "en": "be afraid of the dark"
       }
      ]
     },
     {
      "ko": "화나다",
      "en": "be angry",
      "ex": [
       {
        "ko": "아빠가 많이 화나셨어.",
        "en": "My father is so angry."
       },
       {
        "ko": "이거 때문에 화나",
        "en": "be angry about this"
       },
       {
        "ko": "너에게 화나",
        "en": "be angry at you"
       }
      ]
     },
     {
      "ko": "거만하다",
      "en": "be arrogant",
      "ex": [
       {
        "ko": "걔는 가끔 거만해.",
        "en": "He is sometimes arrogant."
       },
       {
        "ko": "그녀는 항상 거만해.",
        "en": "She is always arrogant."
       },
       {
        "ko": "난 거만하지 않아.",
        "en": "I am not arrogant."
       }
      ]
     },
     {
      "ko": "수치스럽다",
      "en": "be ashamed",
      "ex": [
       {
        "ko": "나 수치스러워.",
        "en": "I am ashamed."
       },
       {
        "ko": "걔는 조금 수치스러웠어.",
        "en": "He was a bit ashamed."
       },
       {
        "ko": "수치스러워 하지 마!",
        "en": "Don't be ashamed!"
       }
      ]
     },
     {
      "ko": "매력적이다",
      "en": "be attractive",
      "ex": [
       {
        "ko": "걔는 매력적이야.",
        "en": "He is attractive."
       },
       {
        "ko": "내 여자친구는 매력적이야.",
        "en": "My girlfriend is attractive."
       },
       {
        "ko": "걔네들은 매우 매력적이야.",
        "en": "They are very attractive."
       }
      ]
     },
     {
      "ko": "나쁘다",
      "en": "be bad",
      "ex": [
       {
        "ko": "네 생각은 나빠.",
        "en": "Your idea is bad."
       },
       {
        "ko": "그건 나빠.",
        "en": "That is bad."
       },
       {
        "ko": "그의 태도는 나빠.",
        "en": "His behavior is bad."
       }
      ]
     },
     {
      "ko": "아름답다",
      "en": "be beautiful",
      "ex": [
       {
        "ko": "그녀의 미소가 아름다워.",
        "en": "Her smile is beautiful."
       },
       {
        "ko": "눈이 아름다워",
        "en": "have beautiful eyes"
       },
       {
        "ko": "그녀는 아름다워.",
        "en": "She is beautiful."
       }
      ]
     },
     {
      "ko": "크다",
      "en": "be big",
      "ex": [
       {
        "ko": "수박이 커.",
        "en": "The watermelon is big."
       },
       {
        "ko": "그 가방은 커.",
        "en": "The bag is big."
       },
       {
        "ko": "내 컵은 커.",
        "en": "My cup is big."
       }
      ]
     },
     {
      "ko": "용감하다",
      "en": "be brave",
      "ex": [
       {
        "ko": "용감한 남자야",
        "en": "be a brave man"
       },
       {
        "ko": "사랑할 만큼 충분히 용감해",
        "en": "be brave enough to love"
       },
       {
        "ko": "그는 매우 용감해.",
        "en": "He is very brave."
       }
      ]
     },
     {
      "ko": "밝다",
      "en": "be bright",
      "ex": [
       {
        "ko": "해가 밝아.",
        "en": "The sun is bright."
       },
       {
        "ko": "그 방은 밝아.",
        "en": "The room is bright."
       },
       {
        "ko": "그 집은 밝아.",
        "en": "The house is bright."
       }
      ]
     },
     {
      "ko": "바쁘다",
      "en": "be busy",
      "ex": [
       {
        "ko": "나는 바빠.",
        "en": "I am busy."
       },
       {
        "ko": "그녀는 지금 바빠.",
        "en": "She is busy right now."
       },
       {
        "ko": "그는 많이 바빠.",
        "en": "He is so busy."
       }
      ]
     },
     {
      "ko": "침착하다",
      "en": "be calm",
      "ex": [
       {
        "ko": "내 친구는 침착해.",
        "en": "My friend is calm."
       },
       {
        "ko": "그녀는 정말 침착해.",
        "en": "She is very calm."
       },
       {
        "ko": "나는 항상 침착해.",
        "en": "I am always calm."
       }
      ]
     },
     {
      "ko": "싸다",
      "en": "be cheap",
      "ex": [
       {
        "ko": "이 초콜릿은 싸.",
        "en": "This chocolate is cheap."
       },
       {
        "ko": "이 펜은 싸.",
        "en": "This pen is cheap."
       },
       {
        "ko": "그 책은 싸.",
        "en": "The book is cheap."
       }
      ]
     },
     {
      "ko": "깨끗하다",
      "en": "be clean",
      "ex": [
       {
        "ko": "내 방은 깨끗해.",
        "en": "My room is clean."
       },
       {
        "ko": "내 집은 깨끗해.",
        "en": "My house is clean."
       },
       {
        "ko": "내 차는 깨끗해.",
        "en": "My car is clean."
       }
      ]
     },
     {
      "ko": "영리하다",
      "en": "be clever",
      "ex": [
       {
        "ko": "내 아이들은 영리해.",
        "en": "My children are clever."
       },
       {
        "ko": "걔는 진짜 영리해.",
        "en": "He is very clever."
       },
       {
        "ko": "저 소녀는 영리해.",
        "en": "That girl is clever."
       }
      ]
     },
     {
      "ko": "차갑다",
      "en": "be cold",
      "ex": [
       {
        "ko": "이 물은 차가워.",
        "en": "This water is cold."
       },
       {
        "ko": "날씨가 추워.",
        "en": "The weather is cold."
       },
       {
        "ko": "아이스크림이 차가워.",
        "en": "The ice cream is cold."
       }
      ]
     },
     {
      "ko": "시원하다",
      "en": "be cool",
      "ex": [
       {
        "ko": "바람이 시원해.",
        "en": "The wind is cool."
       },
       {
        "ko": "오늘 시원해.",
        "en": "It's cool today."
       },
       {
        "ko": "지금 날씨가 시원해.",
        "en": "The weather is cool now."
       }
      ]
     },
     {
      "ko": "호기심이 많다",
      "en": "be curious",
      "ex": [
       {
        "ko": "그녀는 항상 호기심이 많아.",
        "en": "She is always curious."
       },
       {
        "ko": "나는 그거에 대해 궁금했어.",
        "en": "I was curious about it."
       },
       {
        "ko": "모두들 궁금했어.",
        "en": "Everyone was curious."
       }
      ]
     },
     {
      "ko": "위험하다",
      "en": "be dangerous",
      "ex": [
       {
        "ko": "그 장소는 위험해.",
        "en": "The place is dangerous."
       },
       {
        "ko": "그것은 위험해.",
        "en": "It is dangerous."
       },
       {
        "ko": "이것은 위험해.",
        "en": "This is dangerous."
       }
      ]
     },
     {
      "ko": "어둡다",
      "en": "be dark",
      "ex": [
       {
        "ko": "너무 어두워.",
        "en": "It is too dark."
       },
       {
        "ko": "네 얼굴이 어두워.",
        "en": "Your face is dark."
       },
       {
        "ko": "그 색깔은 어두워.",
        "en": "The color is dark."
       }
      ]
     },
     {
      "ko": "의존적이다",
      "en": "be dependent",
      "ex": [
       {
        "ko": "내 아들은 의존적이야.",
        "en": "My son is dependent."
       },
       {
        "ko": "나는 의존적이지 않아.",
        "en": "I am not dependent."
       },
       {
        "ko": "걔네들은 의존적이야.",
        "en": "They are dependent."
       }
      ]
     },
     {
      "ko": "더럽다",
      "en": "be dirty",
      "ex": [
       {
        "ko": "내 옷은 더러워.",
        "en": "My clothes are dirty."
       },
       {
        "ko": "이 식탁은 더러워.",
        "en": "This table is dirty."
       },
       {
        "ko": "그 컵은 더러워.",
        "en": "The cup is dirty."
       }
      ]
     },
     {
      "ko": "마르다",
      "en": "be dry",
      "ex": [
       {
        "ko": "이 땅은 말랐어.",
        "en": "This land is dry."
       },
       {
        "ko": "그 꽃이 말랐어.",
        "en": "The flower is dry."
       },
       {
        "ko": "이번 여름은 건조해.",
        "en": "This summer is dry."
       }
      ]
     },
     {
      "ko": "멍청하다",
      "en": "be dumb",
      "ex": [
       {
        "ko": "그의 질문은 멍청했어.",
        "en": "His question was dumb."
       },
       {
        "ko": "너는 멍청하지 않아.",
        "en": "You are not dumb."
       },
       {
        "ko": "걔는 멍청해.",
        "en": "He is dumb."
       }
      ]
     },
     {
      "ko": "쉽다",
      "en": "be easy",
      "ex": [
       {
        "ko": "영어 회화는 쉬워.",
        "en": "Speaking English is easy."
       },
       {
        "ko": "영어 배우기는 쉬워.",
        "en": "Learning English is easy."
       },
       {
        "ko": "이 문제는 쉬워.",
        "en": "This problem is easy."
       }
      ]
     },
     {
      "ko": "비싸다",
      "en": "be expensive",
      "ex": [
       {
        "ko": "그 차는 비싸.",
        "en": "The car is expensive."
       },
       {
        "ko": "이 휴대폰은 비싸.",
        "en": "This cellphone is expensive."
       },
       {
        "ko": "이 가방은 비싸.",
        "en": "This bag is expensive."
       }
      ]
     },
     {
      "ko": "빠르다",
      "en": "be fast",
      "ex": [
       {
        "ko": "그 기차는 빨라.",
        "en": "The train is fast."
       },
       {
        "ko": "이 버스는 빨라.",
        "en": "This bus is fast."
       },
       {
        "ko": "그 차는 빨라.",
        "en": "The car is fast."
       }
      ]
     },
     {
      "ko": "뚱뚱하다",
      "en": "be fat",
      "ex": [
       {
        "ko": "나는 뚱뚱하지 않아.",
        "en": "I am not fat."
       },
       {
        "ko": "그 남자는 뚱뚱해.",
        "en": "The man is fat."
       },
       {
        "ko": "너는 상당히 뚱뚱해.",
        "en": "You are so fat."
       }
      ]
     },
     {
      "ko": "한가하다",
      "en": "be free",
      "ex": [
       {
        "ko": "그는 한가해.",
        "en": "He is free."
       },
       {
        "ko": "나는 한가할 거야.",
        "en": "I will be free."
       },
       {
        "ko": "나는 내일 한가할 거야.",
        "en": "I will be free tomorrow."
       }
      ]
     }
    ]
   },
   {
    "theme": "상태 Condition (2)",
    "items": [
     {
      "ko": "재미있다",
      "en": "be fun",
      "ex": [
       {
        "ko": "그 이야기는 재미있어.",
        "en": "The story is fun."
       },
       {
        "ko": "오늘밤은 재미있어.",
        "en": "Tonight is fun."
       },
       {
        "ko": "파티는 재미있어.",
        "en": "The party is fun."
       }
      ]
     },
     {
      "ko": "재미있다",
      "en": "be funny",
      "ex": [
       {
        "ko": "그는 정말 재미있어.",
        "en": "He is really funny."
       },
       {
        "ko": "그건 재미없어.",
        "en": "That is not funny."
       },
       {
        "ko": "이것은 재미있는 이야기야.",
        "en": "This is a funny story."
       }
      ]
     },
     {
      "ko": "점잖다",
      "en": "be gentle",
      "ex": [
       {
        "ko": "점잖은 남자를 좋아해",
        "en": "like gentle men"
       },
       {
        "ko": "점잖아야 해",
        "en": "need to be gentle"
       },
       {
        "ko": "그 사람은 점잖아.",
        "en": "That person is gentle."
       }
      ]
     },
     {
      "ko": "좋다",
      "en": "be good",
      "ex": [
       {
        "ko": "나의 선생님은 좋아.",
        "en": "My teacher is good."
       },
       {
        "ko": "이 라면은 맛있어.",
        "en": "This ramen is good."
       },
       {
        "ko": "너는 영어 잘 해.",
        "en": "Your English is good."
       }
      ]
     },
     {
      "ko": "화해하다",
      "en": "be good with",
      "ex": [
       {
        "ko": "그와 화해해",
        "en": "be good with him"
       },
       {
        "ko": "우리와 화해해",
        "en": "be good with us"
       },
       {
        "ko": "그녀와 화해해",
        "en": "be good with her"
       }
      ]
     },
     {
      "ko": "아주 멋지다",
      "en": "be gorgeous",
      "ex": [
       {
        "ko": "걔는 아주 멋져.",
        "en": "He is gorgeous."
       },
       {
        "ko": "그녀는 아주 멋져.",
        "en": "She is gorgeous."
       },
       {
        "ko": "걔네들은 아주 멋져.",
        "en": "They are gorgeous."
       }
      ]
     },
     {
      "ko": "잘생겼다",
      "en": "be handsome",
      "ex": [
       {
        "ko": "그 소년은 잘생겼어.",
        "en": "The boy is handsome."
       },
       {
        "ko": "그 남자는 잘생겼어.",
        "en": "The man is handsome."
       },
       {
        "ko": "아빠는 잘생겼어.",
        "en": "My father is handsome."
       }
      ]
     },
     {
      "ko": "행복하다",
      "en": "be happy",
      "ex": [
       {
        "ko": "나는 많이 행복해.",
        "en": "I am so happy."
       },
       {
        "ko": "다시 행복해질 거야",
        "en": "will be happy again"
       },
       {
        "ko": "모두 행복해.",
        "en": "Everyone is happy."
       }
      ]
     },
     {
      "ko": "어렵다",
      "en": "be hard",
      "ex": [
       {
        "ko": "이 질문은 어려워.",
        "en": "This question is hard."
       },
       {
        "ko": "일하는 것은 어려워.",
        "en": "Working is hard."
       },
       {
        "ko": "뛰는 것은 어려워.",
        "en": "Running is hard."
       }
      ]
     },
     {
      "ko": "건강하다",
      "en": "be healthy",
      "ex": [
       {
        "ko": "내 아기는 건강해.",
        "en": "My baby is healthy."
       },
       {
        "ko": "내 심장은 튼튼해.",
        "en": "My heart is healthy."
       },
       {
        "ko": "내 친구는 건강해.",
        "en": "My friend is healthy."
       }
      ]
     },
     {
      "ko": "무겁다",
      "en": "be heavy",
      "ex": [
       {
        "ko": "공이 정말 무거워.",
        "en": "The ball is so heavy."
       },
       {
        "ko": "가방이 진짜 무거워.",
        "en": "The bag is very heavy."
       },
       {
        "ko": "책이 너무 무거워.",
        "en": "The book is too heavy."
       }
      ]
     },
     {
      "ko": "높다",
      "en": "be high",
      "ex": [
       {
        "ko": "점수가 매우 높아.",
        "en": "The score is so high."
       },
       {
        "ko": "벽이 너무 높아.",
        "en": "The wall is too high."
       },
       {
        "ko": "이 건물은 높아.",
        "en": "This building is high."
       }
      ]
     },
     {
      "ko": "뜨겁다",
      "en": "be hot",
      "ex": [
       {
        "ko": "커피가 뜨거워.",
        "en": "The coffee is hot."
       },
       {
        "ko": "물이 뜨거워.",
        "en": "The water is hot."
       },
       {
        "ko": "차가 뜨거워.",
        "en": "The tea is hot."
       }
      ]
     },
     {
      "ko": "몸매가 좋다",
      "en": "be in shape",
      "ex": [
       {
        "ko": "우리는 몸매가 좋아.",
        "en": "We are in shape."
       },
       {
        "ko": "그녀는 몸매가 좋아.",
        "en": "She is in shape."
       },
       {
        "ko": "그는 몸매가 좋아.",
        "en": "He is in shape."
       }
      ]
     },
     {
      "ko": "독립적이다",
      "en": "be independent",
      "ex": [
       {
        "ko": "내 아이들은 독립적이야.",
        "en": "My children are independent."
       },
       {
        "ko": "내 여자친구는 독립적이야.",
        "en": "My girlfriend is independent."
       },
       {
        "ko": "그녀는 독립적이지 않아.",
        "en": "She is not independent."
       }
      ]
     },
     {
      "ko": "무책임하다",
      "en": "be irresponsible",
      "ex": [
       {
        "ko": "내 남자친구는 무책임해.",
        "en": "My boyfriend is irresponsible."
       },
       {
        "ko": "그녀는 무책임했었어.",
        "en": "She was irresponsible."
       },
       {
        "ko": "나는 무책임한 사람 싫어.",
        "en": "I hate irresponsible people."
       }
      ]
     },
     {
      "ko": "친절하다",
      "en": "be kind",
      "ex": [
       {
        "ko": "그 소녀는 친절해.",
        "en": "The girl is kind."
       },
       {
        "ko": "그녀는 친절해.",
        "en": "She is kind."
       },
       {
        "ko": "그 여자는 친절해.",
        "en": "The woman is kind."
       }
      ]
     },
     {
      "ko": "게으르다",
      "en": "be lazy",
      "ex": [
       {
        "ko": "내 아들은 정말 게을러.",
        "en": "My son is so lazy."
       },
       {
        "ko": "그녀는 게으르지 않아.",
        "en": "She is not lazy."
       },
       {
        "ko": "나는 게으른 사람 싫어해.",
        "en": "I hate lazy people."
       }
      ]
     },
     {
      "ko": "가볍다",
      "en": "be light",
      "ex": [
       {
        "ko": "깃털이 가벼워.",
        "en": "Feathers are light."
       },
       {
        "ko": "내 개는 가벼워.",
        "en": "My dog is light."
       },
       {
        "ko": "그 펜을 가벼워.",
        "en": "The pen is light."
       }
      ]
     },
     {
      "ko": "길다",
      "en": "be long",
      "ex": [
       {
        "ko": "이 기차는 좀 길어.",
        "en": "This train is so long."
       },
       {
        "ko": "그 줄이 길어.",
        "en": "The line is long."
       },
       {
        "ko": "내 머리는 길어.",
        "en": "My hair is long."
       }
      ]
     },
     {
      "ko": "낮다",
      "en": "be low",
      "ex": [
       {
        "ko": "사다리가 너무 낮아.",
        "en": "The ladder is too low."
       },
       {
        "ko": "나무가 매우 낮아.",
        "en": "The tree is very low."
       },
       {
        "ko": "장벽이 낮아.",
        "en": "The barrier is low."
       }
      ]
     },
     {
      "ko": "운이 좋다",
      "en": "be lucky",
      "ex": [
       {
        "ko": "걔는 항상 운이 좋아.",
        "en": "He is always lucky."
       },
       {
        "ko": "걔네들은 진짜 운이 좋아.",
        "en": "They are very lucky."
       },
       {
        "ko": "나 정말 운이 좋았어.",
        "en": "I was so lucky."
       }
      ]
     },
     {
      "ko": "치사하다",
      "en": "be mean",
      "ex": [
       {
        "ko": "걔는 치사해.",
        "en": "He is mean."
       },
       {
        "ko": "그들은 치사해.",
        "en": "They are mean."
       },
       {
        "ko": "나는 치사한 사람 싫어.",
        "en": "I hate mean people."
       }
      ]
     },
     {
      "ko": "불안하다",
      "en": "be nervous",
      "ex": [
       {
        "ko": "나 지금 진짜 불안해.",
        "en": "I am so nervous now."
       },
       {
        "ko": "걔는 너무 불안해해.",
        "en": "He is too nervous."
       },
       {
        "ko": "걔네들은 불안했어.",
        "en": "They were nervous."
       }
      ]
     },
     {
      "ko": "늙다",
      "en": "be old",
      "ex": [
       {
        "ko": "엄마는 늙으셨어.",
        "en": "My mother is old."
       },
       {
        "ko": "그 선생님은 늙었어.",
        "en": "The teacher is old."
       },
       {
        "ko": "그 남자는 늙었어.",
        "en": "The man is old."
       }
      ]
     },
     {
      "ko": "촌스럽다",
      "en": "be old-fashioned",
      "ex": [
       {
        "ko": "우리 엄마는 촌스러워.",
        "en": "My mom is old-fashioned."
       },
       {
        "ko": "우리 할아버지는 촌스러워.",
        "en": "My grandfather is old-fashioned."
       },
       {
        "ko": "그녀의 옷은 촌스러워.",
        "en": "Her clothes are old-fashioned."
       }
      ]
     },
     {
      "ko": "몸매가 안좋다",
      "en": "be out of shape",
      "ex": [
       {
        "ko": "엄마는 몸매가 좋지 않아.",
        "en": "My mother is out of shape."
       },
       {
        "ko": "그는 약간 몸매가 좋지 않아.",
        "en": "He is a little out of shape."
       },
       {
        "ko": "그녀는 상당히 몸매가 좋지 않아.",
        "en": "She is quite out of shape."
       }
      ]
     },
     {
      "ko": "활동적이다",
      "en": "be outgoing",
      "ex": [
       {
        "ko": "나는 활동적이지 않아.",
        "en": "I'm not outgoing."
       },
       {
        "ko": "걔는 굉장히 활동적이야.",
        "en": "He is very outgoing."
       },
       {
        "ko": "활동적이려고 노력해봐.",
        "en": "try to be outgoing."
       }
      ]
     },
     {
      "ko": "까다롭다",
      "en": "be picky",
      "ex": [
       {
        "ko": "음식에 관해 까다로워.",
        "en": "be picky about food."
       },
       {
        "ko": "옷에 관해 까다로워.",
        "en": "be picky about clothes."
       },
       {
        "ko": "책에 관해 까다로워.",
        "en": "be picky about books."
       }
      ]
     },
     {
      "ko": "장난기 많다",
      "en": "be playful",
      "ex": [
       {
        "ko": "내 학생들은 장난기가 많아.",
        "en": "My students are playful."
       },
       {
        "ko": "저 남자는 장난기가 많아.",
        "en": "That man is playful."
       },
       {
        "ko": "나는 장난기 많은 소녀가 좋아.",
        "en": "I like playful girls."
       }
      ]
     }
    ]
   },
   {
    "theme": "상태 Condition (3)",
    "items": [
     {
      "ko": "가난하다",
      "en": "be poor",
      "ex": [
       {
        "ko": "우리 가족은 가난했어.",
        "en": "My family was poor."
       },
       {
        "ko": "아빠는 가난해.",
        "en": "My father is poor."
       },
       {
        "ko": "내 친구는 가난해.",
        "en": "My friend is poor."
       }
      ]
     },
     {
      "ko": "예쁘다",
      "en": "be pretty",
      "ex": [
       {
        "ko": "그 소녀는 매우 예뻐.",
        "en": "The girl is so pretty."
       },
       {
        "ko": "내 여동생은 예뻐.",
        "en": "My sister is pretty."
       },
       {
        "ko": "그 인형은 예뻐.",
        "en": "The doll is pretty."
       }
      ]
     },
     {
      "ko": "믿음직스럽다",
      "en": "be reliable",
      "ex": [
       {
        "ko": "내 친구는 믿음직스러워.",
        "en": "My friend is reliable."
       },
       {
        "ko": "걔네들은 믿음직스러워.",
        "en": "They are reliable."
       },
       {
        "ko": "믿음직스럽지 않아",
        "en": "is not reliable"
       }
      ]
     },
     {
      "ko": "책임감있다",
      "en": "be responsible",
      "ex": [
       {
        "ko": "걔는 책임감 있어.",
        "en": "He is responsible."
       },
       {
        "ko": "부모님은 책임감이 있어.",
        "en": "Parents are responsible."
       },
       {
        "ko": "걔네들은 진짜 책임감 있어.",
        "en": "They are very responsible."
       }
      ]
     },
     {
      "ko": "부유하다",
      "en": "be rich",
      "ex": [
       {
        "ko": "그것을 살 만큼 부유해",
        "en": "be rich enough to buy it"
       },
       {
        "ko": "그것을 살 만큼 부유하지 않아",
        "en": "be not rich enough to buy it"
       },
       {
        "ko": "그 남자는 부유해.",
        "en": "The man is rich."
       }
      ]
     },
     {
      "ko": "슬프다",
      "en": "be sad",
      "ex": [
       {
        "ko": "나는 많이 슬퍼.",
        "en": "I am so sad."
       },
       {
        "ko": "이 영화는 많이 슬퍼.",
        "en": "This movie is so sad."
       },
       {
        "ko": "그 이야기는 슬퍼.",
        "en": "The story is sad."
       }
      ]
     },
     {
      "ko": "안전하다",
      "en": "be safe",
      "ex": [
       {
        "ko": "이 장소는 안전해.",
        "en": "This place is safe."
       },
       {
        "ko": "이 차는 안전해.",
        "en": "This car is safe."
       },
       {
        "ko": "모두 안전해.",
        "en": "Everyone is safe."
       }
      ]
     },
     {
      "ko": "무섭다",
      "en": "be scared",
      "ex": [
       {
        "ko": "나 무서워.",
        "en": "I am scared."
       },
       {
        "ko": "걔는 무서웠어.",
        "en": "He was scared."
       },
       {
        "ko": "걔네들은 무서웠어.",
        "en": "They were so scared."
       }
      ]
     },
     {
      "ko": "진지하다",
      "en": "be serious",
      "ex": [
       {
        "ko": "걔는 보통 진지해.",
        "en": "He is usually serious."
       },
       {
        "ko": "그녀는 항상 진지해.",
        "en": "She is always serious."
       },
       {
        "ko": "너무 심각해 하지 마.",
        "en": "Don't be so serious."
       }
      ]
     },
     {
      "ko": "예리하다",
      "en": "be sharp",
      "ex": [
       {
        "ko": "그는 예리해.",
        "en": "He is sharp."
       },
       {
        "ko": "내 친구는 예리해.",
        "en": "My friend is sharp."
       },
       {
        "ko": "그들은 예리해.",
        "en": "They are sharp."
       }
      ]
     },
     {
      "ko": "짧다",
      "en": "be short",
      "ex": [
       {
        "ko": "인생은 짧아.",
        "en": "Life is short."
       },
       {
        "ko": "여가 시간이 짧아.",
        "en": "Free time is short."
       },
       {
        "ko": "방학은 짧아.",
        "en": "The vacation is short."
       }
      ]
     },
     {
      "ko": "아프다",
      "en": "be sick",
      "ex": [
       {
        "ko": "나는 정말 아파.",
        "en": "I am so sick."
       },
       {
        "ko": "그는 너무 아파.",
        "en": "He is too sick."
       },
       {
        "ko": "엄마는 아파.",
        "en": "My mother is sick."
       }
      ]
     },
     {
      "ko": "말랐다",
      "en": "be skinny",
      "ex": [
       {
        "ko": "너무 말랐어",
        "en": "be too skinny"
       },
       {
        "ko": "그는 말랐어.",
        "en": "He is skinny."
       },
       {
        "ko": "나는 안 말랐어.",
        "en": "I am not skinny."
       }
      ]
     },
     {
      "ko": "느리다",
      "en": "be slow",
      "ex": [
       {
        "ko": "이것은 느려.",
        "en": "This is slow."
       },
       {
        "ko": "그 자전거는 느려.",
        "en": "The bicycle is slow."
       },
       {
        "ko": "그 택시는 느려.",
        "en": "The taxi is slow."
       }
      ]
     },
     {
      "ko": "작다",
      "en": "be small",
      "ex": [
       {
        "ko": "그 펜은 작아.",
        "en": "The pen is small."
       },
       {
        "ko": "내 책은 작아.",
        "en": "My book is small."
       },
       {
        "ko": "개미는 작아.",
        "en": "Ants are small."
       }
      ]
     },
     {
      "ko": "똑똑하다",
      "en": "be smart",
      "ex": [
       {
        "ko": "너는 똑똑하지 않아.",
        "en": "You are not smart."
       },
       {
        "ko": "그는 똑똑해.",
        "en": "He is smart."
       },
       {
        "ko": "그는 똑똑한 아이야.",
        "en": "He is a smart kid."
       }
      ]
     },
     {
      "ko": "강하다",
      "en": "be strong",
      "ex": [
       {
        "ko": "뛸 수 있을 만큼 강해",
        "en": "be strong enough to run"
       },
       {
        "ko": "웃을 수 있을 만큼 강해",
        "en": "be strong enough to laugh"
       },
       {
        "ko": "이길 수 있을 만큼 강해",
        "en": "be strong enough to win"
       }
      ]
     },
     {
      "ko": "바보같다",
      "en": "be stupid",
      "ex": [
       {
        "ko": "그는 매우 바보 같아.",
        "en": "He is so stupid."
       },
       {
        "ko": "이 이야기는 매우 바보 같아.",
        "en": "The story is so stupid."
       },
       {
        "ko": "그의 연설은 바보 같아.",
        "en": "His speech is stupid."
       }
      ]
     },
     {
      "ko": "세련됐다",
      "en": "be stylish",
      "ex": [
       {
        "ko": "그녀는 정말 세련됐어.",
        "en": "She is so stylish."
       },
       {
        "ko": "우리 부모님은 세련됐어.",
        "en": "My parents are stylish."
       },
       {
        "ko": "걔 옷은 세련됐어.",
        "en": "His clothes are stylish."
       }
      ]
     },
     {
      "ko": "목마르다",
      "en": "be thirsty",
      "ex": [
       {
        "ko": "나는 정말 목말라.",
        "en": "I am really thirsty."
       },
       {
        "ko": "내 강아지가 목말라 보여.",
        "en": "My dog looks thirsty."
       },
       {
        "ko": "나는 약간 목말라.",
        "en": "I am a little thirsty."
       }
      ]
     },
     {
      "ko": "못생기다",
      "en": "be ugly",
      "ex": [
       {
        "ko": "그 소년은 못생겼어.",
        "en": "The boy is ugly."
       },
       {
        "ko": "내 남동생은 못생겼어.",
        "en": "My brother is ugly."
       },
       {
        "ko": "그 인형은 못생겼어.",
        "en": "The doll is ugly."
       }
      ]
     },
     {
      "ko": "호감이 안 간다",
      "en": "be unattractive",
      "ex": [
       {
        "ko": "그녀는 호감이 안 가.",
        "en": "She is unattractive."
       },
       {
        "ko": "걔는 호감이 안 가.",
        "en": "He is unattractive."
       },
       {
        "ko": "걔네들은 호감이 안 가.",
        "en": "They are unattractive."
       }
      ]
     },
     {
      "ko": "무관심하다",
      "en": "be uninterested",
      "ex": [
       {
        "ko": "나는 모든 것에 무관심해.",
        "en": "I am uninterested in everything."
       },
       {
        "ko": "걔네들은 그것에 관심 없어.",
        "en": "They are uninterested in that."
       },
       {
        "ko": "그녀는 스포츠에 관심 없어.",
        "en": "She is uninterested in sports."
       }
      ]
     },
     {
      "ko": "운이 나쁘다",
      "en": "be unlucky",
      "ex": [
       {
        "ko": "걔는 보통 운이 나빠.",
        "en": "He is usually unlucky."
       },
       {
        "ko": "그녀는 운이 나빴어.",
        "en": "She was unlucky."
       },
       {
        "ko": "난 운이 없어.",
        "en": "I am unlucky."
       }
      ]
     },
     {
      "ko": "못미덥다",
      "en": "be unreliable",
      "ex": [
       {
        "ko": "그녀는 못미더워.",
        "en": "She is so unreliable."
       },
       {
        "ko": "걔네들은 못미더워.",
        "en": "They are unreliable."
       },
       {
        "ko": "저 학생은 못미더워.",
        "en": "That student is unreliable."
       }
      ]
     },
     {
      "ko": "따뜻하다",
      "en": "be warm",
      "ex": [
       {
        "ko": "내 코트가 따뜻해.",
        "en": "My coat is warm."
       },
       {
        "ko": "날씨가 따뜻해.",
        "en": "The weather is warm."
       },
       {
        "ko": "기후가 따뜻해.",
        "en": "The climate is warm."
       }
      ]
     },
     {
      "ko": "약하다",
      "en": "be weak",
      "ex": [
       {
        "ko": "내 고양이는 약해.",
        "en": "My cat is weak."
       },
       {
        "ko": "난 약하지 않아.",
        "en": "I am not weak."
       },
       {
        "ko": "그녀는 너무 약해.",
        "en": "She is too weak."
       }
      ]
     },
     {
      "ko": "젖다",
      "en": "be wet",
      "ex": [
       {
        "ko": "내 옷이 젖었어.",
        "en": "My clothes are wet."
       },
       {
        "ko": "개가 젖었어.",
        "en": "The dog is wet."
       },
       {
        "ko": "내 신발이 젖었어.",
        "en": "My shoes are wet."
       }
      ]
     },
     {
      "ko": "지혜롭다",
      "en": "be wise",
      "ex": [
       {
        "ko": "지혜로워지고 싶어",
        "en": "want to be wise"
       },
       {
        "ko": "그녀는 지혜로워.",
        "en": "She is wise."
       },
       {
        "ko": "난 지혜롭지 않아.",
        "en": "I am not wise."
       }
      ]
     },
     {
      "ko": "젊다",
      "en": "be young",
      "ex": [
       {
        "ko": "그 여자는 젊어.",
        "en": "The woman is young."
       },
       {
        "ko": "내 여동생은 젊어.",
        "en": "My sister is young."
       },
       {
        "ko": "그 의사는 젊어.",
        "en": "The doctor is young."
       }
      ]
     }
    ]
   },
   {
    "theme": "상태 Condition (4)",
    "items": [
     {
      "ko": "돈이 많다",
      "en": "have a lot of money",
      "ex": [
       {
        "ko": "그걸 살 만큼 돈이 많아",
        "en": "have a lot of money to buy it"
       },
       {
        "ko": "돈이 많지 않아",
        "en": "don't have a lot of money"
       },
       {
        "ko": "그것을 할 만큼 돈이 많아",
        "en": "have a lot of money to do it"
       }
      ]
     },
     {
      "ko": "~해 보이다",
      "en": "look",
      "ex": [
       {
        "ko": "좋아 보여",
        "en": "look good"
       },
       {
        "ko": "예뻐 보여",
        "en": "look pretty"
       },
       {
        "ko": "멋있어 보여",
        "en": "look cool"
       }
      ]
     },
     {
      "ko": "쇼핑을 좋아한다",
      "en": "love shopping",
      "ex": [
       {
        "ko": "옷 사는 걸 좋아해",
        "en": "love shopping for clothes"
       },
       {
        "ko": "신발 사는 걸 좋아해",
        "en": "love shopping for shoes"
       },
       {
        "ko": "핸드백 사는 걸 좋아해",
        "en": "love shopping for purses"
       }
      ]
     },
     {
      "ko": "말이 많다",
      "en": "talk a lot",
      "ex": [
       {
        "ko": "그녀는 말이 많아.",
        "en": "She talks a lot."
       },
       {
        "ko": "너는 말이 많아.",
        "en": "You talk a lot."
       },
       {
        "ko": "그는 말이 많아.",
        "en": "He talks a lot."
       }
      ]
     },
     {
      "ko": "과장이 심하다",
      "en": "talk big",
      "ex": [
       {
        "ko": "항상 과장이 심해",
        "en": "always talk big"
       },
       {
        "ko": "때때로 과장이 심해",
        "en": "sometimes talk big"
       },
       {
        "ko": "과장이 심하지 않아",
        "en": "don't talk big"
       }
      ]
     },
     {
      "ko": "돈이 많았다",
      "en": "had a lot of money",
      "ex": [
       {
        "ko": "여행할 만큼 돈이 많았어",
        "en": "had a lot of money to travel"
       },
       {
        "ko": "공부할 만큼 돈이 많았어",
        "en": "had a lot of money to study"
       },
       {
        "ko": "결혼할 만큼 돈이 많았어",
        "en": "had a lot of money to marry"
       }
      ]
     },
     {
      "ko": "~해 보였다",
      "en": "looked",
      "ex": [
       {
        "ko": "맛있어 보였어",
        "en": "looked delicious"
       },
       {
        "ko": "달콤해 보였어",
        "en": "looked sweet"
       },
       {
        "ko": "매워 보였어",
        "en": "looked hot"
       }
      ]
     },
     {
      "ko": "쇼핑을 좋아했다",
      "en": "loved shopping",
      "ex": [
       {
        "ko": "쇼핑하는 걸 너무 많이 좋아했어",
        "en": "loved shopping too much"
       },
       {
        "ko": "쇼핑하는 걸 상당히 좋아했어",
        "en": "loved shopping so much"
       },
       {
        "ko": "걔는 쇼핑을 좋아했어.",
        "en": "He loved shopping."
       }
      ]
     },
     {
      "ko": "말이 많았다",
      "en": "talked a lot",
      "ex": [
       {
        "ko": "나에 관해 말이 많았어",
        "en": "talked a lot about me"
       },
       {
        "ko": "그녀에 관해 말이 많았어",
        "en": "talked a lot about her"
       },
       {
        "ko": "그것에 관해 말이 많았어",
        "en": "talked a lot about it"
       }
      ]
     },
     {
      "ko": "과장이 심했다",
      "en": "talked big",
      "ex": [
       {
        "ko": "내 여동생은 과장이 심했어.",
        "en": "My sister talked big."
       },
       {
        "ko": "내 남동생은 과장이 심했어.",
        "en": "My brother talked big."
       },
       {
        "ko": "그 남자는 과장이 심했어.",
        "en": "The man talked big."
       }
      ]
     }
    ]
   },
   {
    "theme": "여가 Activities (1)",
    "items": [
     {
      "ko": "모임을 주선하다",
      "en": "arrange a meeting",
      "ex": [
       {
        "ko": "그와의 만남을 주선해",
        "en": "arrange a meeting with him"
       },
       {
        "ko": "그들과의 만남을 주선해",
        "en": "arrange a meeting with them"
       },
       {
        "ko": "우리와의 만남을 주선해",
        "en": "arrange a meeting with us"
       }
      ]
     },
     {
      "ko": "데이트 신청하다",
      "en": "ask out",
      "ex": [
       {
        "ko": "그녀에게 데이트 신청을 해",
        "en": "ask her out"
       },
       {
        "ko": "그에게 데이트 신청을 해",
        "en": "ask him out"
       },
       {
        "ko": "너에게 데이트 신청을 해",
        "en": "ask you out"
       }
      ]
     },
     {
      "ko": "가격을 묻다",
      "en": "ask the price",
      "ex": [
       {
        "ko": "그에게 가격을 물어봐",
        "en": "ask him the price"
       },
       {
        "ko": "그녀에게 가격을 물어봐",
        "en": "ask her the price"
       },
       {
        "ko": "그들에게 가격을 물어봐",
        "en": "ask them the price"
       }
      ]
     },
     {
      "ko": "다이어트하다",
      "en": "be on a diet",
      "ex": [
       {
        "ko": "나는 다이어트 해.",
        "en": "I am on a diet."
       },
       {
        "ko": "그녀는 다이어트 해.",
        "en": "She is on a diet."
       },
       {
        "ko": "1월마다 다이어트 해",
        "en": "be on a diet every January"
       }
      ]
     },
     {
      "ko": "타다",
      "en": "board",
      "ex": [
       {
        "ko": "아침 8시에 비행기 타",
        "en": "board a flight at 8 a.m."
       },
       {
        "ko": "뉴욕으로 가는 비행기 타",
        "en": "board a flight to New York"
       },
       {
        "ko": "홍콩으로 가는 비행기 타",
        "en": "board a flight to Hong Kong"
       }
      ]
     },
     {
      "ko": "모임을 주선했다",
      "en": "arranged a meeting",
      "ex": [
       {
        "ko": "일한 뒤에 모임을 주선했어",
        "en": "arranged a meeting after work"
       },
       {
        "ko": "점심 후에 모임을 주선했어",
        "en": "arranged a meeting after lunch"
       },
       {
        "ko": "저녁 7시 전에 모임을 주선했어",
        "en": "arranged a meeting before 7 p.m."
       }
      ]
     },
     {
      "ko": "데이트 신청했다",
      "en": "asked out",
      "ex": [
       {
        "ko": "누군가에게 데이트 신청했어",
        "en": "asked somebody out"
       },
       {
        "ko": "내가 그녀에게 데이트 신청했어.",
        "en": "I asked her out."
       },
       {
        "ko": "그가 내게 데이트 신청했어.",
        "en": "He asked me out."
       }
      ]
     },
     {
      "ko": "가격을 물었다",
      "en": "asked the price",
      "ex": [
       {
        "ko": "그 남자가 가격을 물었어.",
        "en": "The man asked the price."
       },
       {
        "ko": "내 친구가 가격을 물었어.",
        "en": "My friend asked the price."
       },
       {
        "ko": "그들이 가격을 물었어.",
        "en": "They asked the price."
       }
      ]
     },
     {
      "ko": "다이어트했다",
      "en": "was on a diet",
      "ex": [
       {
        "ko": "그녀는 다이어트 했어.",
        "en": "She was on a diet."
       },
       {
        "ko": "그 소녀는 다이어트 했어.",
        "en": "The girl was on a diet."
       },
       {
        "ko": "나는 또 다이어트 했어.",
        "en": "I was on a diet again."
       }
      ]
     },
     {
      "ko": "탔다",
      "en": "boarded",
      "ex": [
       {
        "ko": "한국으로 가는 비행기 탔어",
        "en": "boarded a plane to Korea"
       },
       {
        "ko": "비행기 늦지 않고 탔어",
        "en": "boarded a flight on time"
       },
       {
        "ko": "LA로 가는 비행기 탔어",
        "en": "boarded a flight to LA"
       }
      ]
     },
     {
      "ko": "호텔을 예약하다",
      "en": "book a hotel",
      "ex": [
       {
        "ko": "같이 호텔 예약해",
        "en": "book a hotel together"
       },
       {
        "ko": "온라인으로 호텔을 예약해",
        "en": "book a hotel online"
       },
       {
        "ko": "미국에 있는 호텔을 예약해",
        "en": "book a hotel in America"
       }
      ]
     },
     {
      "ko": "취소하다",
      "en": "cancel",
      "ex": [
       {
        "ko": "내 비행기 예약 취소해",
        "en": "cancel my airline reservation"
       },
       {
        "ko": "내 호텔 예약 취소해",
        "en": "cancel my hotel reservation"
       },
       {
        "ko": "그녀의 저녁 예약 취소해",
        "en": "cancel her dinner reservation"
       }
      ]
     },
     {
      "ko": "고르다",
      "en": "choose",
      "ex": [
       {
        "ko": "선물을 골라",
        "en": "choose a present"
       },
       {
        "ko": "케이크를 골라",
        "en": "choose a cake"
       },
       {
        "ko": "책을 골라",
        "en": "choose a book"
       }
      ]
     },
     {
      "ko": "등산하다",
      "en": "climb the mountain",
      "ex": [
       {
        "ko": "매달 등산해",
        "en": "climb the mountains every morning"
       },
       {
        "ko": "등산하는 것을 즐겨",
        "en": "enjoy climbing the mountains"
       },
       {
        "ko": "등산하고 싶어",
        "en": "want to climb the mountains"
       }
      ]
     },
     {
      "ko": "머리 하다",
      "en": "do the hair",
      "ex": [
       {
        "ko": "머리 다르게 해",
        "en": "do my hair differently"
       },
       {
        "ko": "또 머리 해",
        "en": "do my hair again"
       },
       {
        "ko": "머리 하고 싶어",
        "en": "want to do my hair"
       }
      ]
     },
     {
      "ko": "호텔을 예약했다",
      "en": "booked a hotel",
      "ex": [
       {
        "ko": "온라인으로 호텔 예약했어",
        "en": "booked a hotel online"
       },
       {
        "ko": "캐나다에 호텔 예약했어",
        "en": "booked a hotel in Canada"
       },
       {
        "ko": "여기 근처에 호텔 예약했어",
        "en": "booked a hotel near here"
       }
      ]
     },
     {
      "ko": "취소했다",
      "en": "canceled",
      "ex": [
       {
        "ko": "나는 그 예약 취소했어.",
        "en": "I canceled the reservation."
       },
       {
        "ko": "그녀는 그 예약 취소했어.",
        "en": "She canceled the reservation."
       },
       {
        "ko": "걔는 그 예약 취소했어.",
        "en": "He canceled the reservation."
       }
      ]
     },
     {
      "ko": "골랐다",
      "en": "chose",
      "ex": [
       {
        "ko": "이 신발을 골랐어",
        "en": "chose these shoes"
       },
       {
        "ko": "이 가방을 골랐어",
        "en": "chose this bag"
       },
       {
        "ko": "이 옷을 골랐어",
        "en": "chose these clothes"
       }
      ]
     },
     {
      "ko": "등산했다",
      "en": "climbed the mountain",
      "ex": [
       {
        "ko": "걔네들이랑 등산했어",
        "en": "climbed the mountains with them"
       },
       {
        "ko": "그 언덕 정상까지 올랐어",
        "en": "climbed to the top of the hill"
       },
       {
        "ko": "그 산 정상까지 올랐어",
        "en": "climbed to the top of the mountains"
       }
      ]
     },
     {
      "ko": "머리 했다",
      "en": "did the hair",
      "ex": [
       {
        "ko": "나 오늘 머리 했어.",
        "en": "I did my hair today."
       },
       {
        "ko": "그녀는 어제 머리 했어.",
        "en": "She did her hair yesterday."
       },
       {
        "ko": "걔 저번 주에 머리 했어.",
        "en": "He did his hair last week."
       }
      ]
     },
     {
      "ko": "근육운동 하다",
      "en": "do weight training",
      "ex": [
       {
        "ko": "매일 근육운동 해",
        "en": "do weight training every day"
       },
       {
        "ko": "가끔 근육운동 해",
        "en": "do weight training sometimes"
       },
       {
        "ko": "꾸준히 근육운동 해",
        "en": "do weight training regularly"
       }
      ]
     },
     {
      "ko": "염색하다",
      "en": "dye",
      "ex": [
       {
        "ko": "내 머리를 염색해",
        "en": "dye my hair"
       },
       {
        "ko": "그녀 머리를 자주 염색해",
        "en": "dye her hair often"
       },
       {
        "ko": "걔 머리를 가끔 염색해",
        "en": "dye his hair sometimes"
       }
      ]
     },
     {
      "ko": "입국하다",
      "en": "enter a country",
      "ex": [
       {
        "ko": "한국에 입국해",
        "en": "enter Korea"
       },
       {
        "ko": "일본에 입국해",
        "en": "enter Japan"
       },
       {
        "ko": "대만에 입국해",
        "en": "enter Taiwan"
       }
      ]
     },
     {
      "ko": "교환하다",
      "en": "exchange",
      "ex": [
       {
        "ko": "옷을 교환해",
        "en": "exchange clothes"
       },
       {
        "ko": "선물을 교환해",
        "en": "exchange presents"
       },
       {
        "ko": "표를 교환해",
        "en": "exchange tickets"
       }
      ]
     },
     {
      "ko": "운동하다",
      "en": "exercise",
      "ex": [
       {
        "ko": "매일 운동해",
        "en": "exercise every day"
       },
       {
        "ko": "격일로 운동해",
        "en": "exercise every two days"
       },
       {
        "ko": "일주일에 두 번 운동해",
        "en": "exercise twice a week"
       }
      ]
     },
     {
      "ko": "근육운동 했다",
      "en": "did weight training",
      "ex": [
       {
        "ko": "헬스장에서 근육운동 했어",
        "en": "did the weight training at the gym"
       },
       {
        "ko": "집에서 근육운동 했어",
        "en": "did the weight training at home"
       },
       {
        "ko": "거기서 근육운동 했어",
        "en": "did the weight training there"
       }
      ]
     },
     {
      "ko": "염색했다",
      "en": "dyed",
      "ex": [
       {
        "ko": "그녀 머리를 갈색으로 염색했어",
        "en": "dyed her hair brown"
       },
       {
        "ko": "걔 머리를 검정색으로 염색했어",
        "en": "dyed his hair black"
       },
       {
        "ko": "내 머리를 금발로 염색했어",
        "en": "dyed my hair blonde"
       }
      ]
     },
     {
      "ko": "입국했다",
      "en": "entered a country",
      "ex": [
       {
        "ko": "일주일 전에 미국 입국했어",
        "en": "entered America a week ago"
       },
       {
        "ko": "몇 주 전에 캐나다 입국했어",
        "en": "entered Canada a few weeks ago"
       },
       {
        "ko": "3달 전에 호주 입국했어",
        "en": "entered Australia 3 months ago"
       }
      ]
     },
     {
      "ko": "교환했다",
      "en": "exchanged",
      "ex": [
       {
        "ko": "그 책을 교환했어",
        "en": "exchanged the book"
       },
       {
        "ko": "이것을 교환했어",
        "en": "exchanged this"
       },
       {
        "ko": "그것을 교환했어",
        "en": "exchanged it"
       }
      ]
     },
     {
      "ko": "운동했다",
      "en": "exercised",
      "ex": [
       {
        "ko": "걔랑 운동했어",
        "en": "exercised with him"
       },
       {
        "ko": "우리 엄마랑 운동했어",
        "en": "exercised with my mom"
       },
       {
        "ko": "한 시간 동안 운동했어",
        "en": "exercised for an hour"
       }
      ]
     }
    ]
   },
   {
    "theme": "여가 Activities (2)",
    "items": [
     {
      "ko": "반하다",
      "en": "fall in love",
      "ex": [
       {
        "ko": "그녀에게 반해",
        "en": "fall in love with her"
       },
       {
        "ko": "너에게 반해",
        "en": "fall in love with you"
       },
       {
        "ko": "내게 반해",
        "en": "fall in love with me"
       }
      ]
     },
     {
      "ko": "살이 찌다",
      "en": "gain weight",
      "ex": [
       {
        "ko": "조금 살 쪄",
        "en": "gain some weight"
       },
       {
        "ko": "많이 살 쪄",
        "en": "gain a lot of weight"
       },
       {
        "ko": "살 찌지 않으려고 노력해",
        "en": "try not to gain weight"
       }
      ]
     },
     {
      "ko": "할인받다",
      "en": "get a discount",
      "ex": [
       {
        "ko": "할인 받을 수 있어",
        "en": "can get a discount"
       },
       {
        "ko": "할인 받을 거야",
        "en": "will get a discount"
       },
       {
        "ko": "할인 받아야만 해",
        "en": "have to get a discount"
       }
      ]
     },
     {
      "ko": "머리를 자르다",
      "en": "get a haircut",
      "ex": [
       {
        "ko": "매달 머리 잘라",
        "en": "get a haircut every month"
       },
       {
        "ko": "거기에서 머리 잘라",
        "en": "get a haircut there"
       },
       {
        "ko": "머리 자르고 싶어",
        "en": "want to get a haircut"
       }
      ]
     },
     {
      "ko": "여권을 발급받다",
      "en": "get a passport",
      "ex": [
       {
        "ko": "여권이랑 비자 발급받아",
        "en": "get a passport and visa"
       },
       {
        "ko": "우편으로 여권을 받아",
        "en": "get a passport in the mail"
       },
       {
        "ko": "서울에서 여권을 발급받아",
        "en": "get a passport in Seoul"
       }
      ]
     },
     {
      "ko": "반했다",
      "en": "fell in love",
      "ex": [
       {
        "ko": "서로에게 반했어",
        "en": "fell in love with each other"
       },
       {
        "ko": "누군가에게 반했었어",
        "en": "fell in love with someone"
       },
       {
        "ko": "그에게 반했었어",
        "en": "fell in love with him"
       }
      ]
     },
     {
      "ko": "살이 쪘다",
      "en": "gained weight",
      "ex": [
       {
        "ko": "나 살 많이 쪘어.",
        "en": "I gained a lot of weight."
       },
       {
        "ko": "우리 엄마 살 찌셨어.",
        "en": "My mom gained weight."
       },
       {
        "ko": "그녀는 여름 동안 살쪘어.",
        "en": "She gained weight over the summer."
       }
      ]
     },
     {
      "ko": "할인받았다",
      "en": "got a discount",
      "ex": [
       {
        "ko": "그가 할인받았어.",
        "en": "He got a discount."
       },
       {
        "ko": "내가 할인받았어.",
        "en": "I got a discount."
       },
       {
        "ko": "네가 할인받았어.",
        "en": "You got a discount."
       }
      ]
     },
     {
      "ko": "머리를 잘랐다",
      "en": "got a haircut",
      "ex": [
       {
        "ko": "오늘 머리 잘랐어",
        "en": "got a haircut today"
       },
       {
        "ko": "어제 머리 잘랐어",
        "en": "got a haircut yesterday"
       },
       {
        "ko": "저번주에 머리 잘랐어",
        "en": "got a haircut last week"
       }
      ]
     },
     {
      "ko": "여권을 발급받았다",
      "en": "got a passport",
      "ex": [
       {
        "ko": "나 여권 발급받았어.",
        "en": "I got my passport."
       },
       {
        "ko": "우리 부모님 여권 발급받았어.",
        "en": "My parents got their passports."
       },
       {
        "ko": "걔네들 여권 발급받았어.",
        "en": "They got their passports."
       }
      ]
     },
     {
      "ko": "파마를 하다",
      "en": "get a perm",
      "ex": [
       {
        "ko": "나는 파마하고 싶어.",
        "en": "I want to get a perm."
       },
       {
        "ko": "그녀는 파마하고 싶어.",
        "en": "She wants to get a perm."
       },
       {
        "ko": "나 파마하려고 계획해.",
        "en": "I plan to get a perm."
       }
      ]
     },
     {
      "ko": "영수증을 받다",
      "en": "get a receipt",
      "ex": [
       {
        "ko": "항상 영수증을 받아",
        "en": "always get a receipt"
       },
       {
        "ko": "그걸 산 영수증을 받아",
        "en": "get a receipt for it"
       },
       {
        "ko": "이걸 산 영수증을 받을 거야",
        "en": "will get a receipt for this"
       }
      ]
     },
     {
      "ko": "환불받다",
      "en": "get a refund",
      "ex": [
       {
        "ko": "내일 환불 받을 거야",
        "en": "will get a refund tomorrow"
       },
       {
        "ko": "이거 환불 받을 수 있어",
        "en": "can get a refund on this"
       },
       {
        "ko": "그거 환불 받길 원해",
        "en": "want to get a refund on it"
       }
      ]
     },
     {
      "ko": "기차표를 사다",
      "en": "get a train ticket",
      "ex": [
       {
        "ko": "기차표 2장을 사",
        "en": "get two train tickets"
       },
       {
        "ko": "부산행 기차표를 사",
        "en": "get a train ticket to Busan"
       },
       {
        "ko": "기차표를 걔와 같이 사",
        "en": "get train tickets with him"
       }
      ]
     },
     {
      "ko": "약혼하다",
      "en": "get engaged",
      "ex": [
       {
        "ko": "그와 약혼해",
        "en": "get engaged to him"
       },
       {
        "ko": "나와 약혼해",
        "en": "get engaged to me"
       },
       {
        "ko": "누군가와 약혼해",
        "en": "get engaged to someone"
       }
      ]
     },
     {
      "ko": "파마를 했다",
      "en": "got a perm",
      "ex": [
       {
        "ko": "그녀는 오늘 파마했어.",
        "en": "She got a perm today."
       },
       {
        "ko": "나 저번주에 파마했어.",
        "en": "I got a perm last week."
       },
       {
        "ko": "우리 엄마는 다시 파마했어.",
        "en": "My mom got a perm again."
       }
      ]
     },
     {
      "ko": "영수증을 받았다",
      "en": "got a receipt",
      "ex": [
       {
        "ko": "엄마가 영수증을 받았어.",
        "en": "My mother got a receipt."
       },
       {
        "ko": "내가 영수증을 받았어.",
        "en": "I got a receipt."
       },
       {
        "ko": "그 여자가 영수증을 받았어.",
        "en": "The woman got a receipt."
       }
      ]
     },
     {
      "ko": "환불받았다",
      "en": "got a refund",
      "ex": [
       {
        "ko": "어제 환불받았어",
        "en": "got a refund yesterday"
       },
       {
        "ko": "지난주에 환불받았어",
        "en": "got a refund last week"
       },
       {
        "ko": "2달 전에 환불받았어",
        "en": "got a refund 2 months ago"
       }
      ]
     },
     {
      "ko": "기차표를 샀다",
      "en": "got a train ticket",
      "ex": [
       {
        "ko": "저번 주에 기차표를 샀어",
        "en": "got a train ticket last week"
       },
       {
        "ko": "내 친구들과 기차표를 샀어",
        "en": "got train tickets with my friends"
       },
       {
        "ko": "우리 부모님을 위해 기차표를 샀어",
        "en": "got train tickets for my parents"
       }
      ]
     },
     {
      "ko": "약혼했다",
      "en": "got engaged",
      "ex": [
       {
        "ko": "지난주에 약혼했어",
        "en": "got engaged last week"
       },
       {
        "ko": "지난달에 약혼했어",
        "en": "got engaged last month"
       },
       {
        "ko": "어제 약혼했어",
        "en": "got engaged yesterday"
       }
      ]
     },
     {
      "ko": "할인하다",
      "en": "give a discount",
      "ex": [
       {
        "ko": "이것을 할인해줘",
        "en": "give a discount on this"
       },
       {
        "ko": "이 청바지를 할인해줘",
        "en": "give a discount on the jeans"
       },
       {
        "ko": "이 옷을 할인해줘",
        "en": "give a discount on the clothes"
       }
      ]
     },
     {
      "ko": "영수증을 주다",
      "en": "give a receipt",
      "ex": [
       {
        "ko": "영수증을 나에게 꼭 줘야 해",
        "en": "must give me a receipt"
       },
       {
        "ko": "영수증을 나에게 줄 필요가 있어",
        "en": "need to give me a receipt"
       },
       {
        "ko": "영수증을 그녀에게 주지 않아",
        "en": "don't give her a receipt"
       }
      ]
     },
     {
      "ko": "데이트하다",
      "en": "go on a date",
      "ex": [
       {
        "ko": "함께 데이트를 해",
        "en": "go on a date together"
       },
       {
        "ko": "그와 데이트를 해",
        "en": "go on a date with him"
       },
       {
        "ko": "그녀와 데이트를 해",
        "en": "go on a date with her"
       }
      ]
     },
     {
      "ko": "사귀다",
      "en": "go out",
      "ex": [
       {
        "ko": "그와 사귀고 있어",
        "en": "go out with him"
       },
       {
        "ko": "그녀와 사귀고 있어",
        "en": "go out with her"
       },
       {
        "ko": "우리는 사귀고 있어.",
        "en": "We are going out with each other."
       }
      ]
     },
     {
      "ko": "쇼핑하러 가다",
      "en": "go shopping",
      "ex": [
       {
        "ko": "나와 쇼핑하러 가",
        "en": "go shopping with me"
       },
       {
        "ko": "그와 쇼핑하러 가",
        "en": "go shopping with him"
       },
       {
        "ko": "그녀와 쇼핑하러 가",
        "en": "go shopping with her"
       }
      ]
     },
     {
      "ko": "할인했다",
      "en": "gave a discount",
      "ex": [
       {
        "ko": "나에게 많이 할인해줬어",
        "en": "gave me a huge discount"
       },
       {
        "ko": "나에게 할인해줬어",
        "en": "gave me a discount"
       },
       {
        "ko": "어제 그들에게 할인해줬어",
        "en": "gave them a discount yesterday"
       }
      ]
     },
     {
      "ko": "영수증을 줬다",
      "en": "gave a receipt",
      "ex": [
       {
        "ko": "내게 영수증을 줬어",
        "en": "gave me a receipt"
       },
       {
        "ko": "그녀에게 영수증을 줬어",
        "en": "gave her a receipt"
       },
       {
        "ko": "그에게 영수증을 줬어",
        "en": "gave him a receipt"
       }
      ]
     },
     {
      "ko": "데이트했다",
      "en": "went on a date",
      "ex": [
       {
        "ko": "일요일에 데이트를 했어",
        "en": "went on a date on Sunday"
       },
       {
        "ko": "크리스마스에 데이트를 했어",
        "en": "went on a date on Christmas Day"
       },
       {
        "ko": "어제 데이트를 했어",
        "en": "went on a date yesterday"
       }
      ]
     },
     {
      "ko": "사귀었다",
      "en": "went out",
      "ex": [
       {
        "ko": "그녀와 사귀었어",
        "en": "went out with her"
       },
       {
        "ko": "내 친구와 사귀었어",
        "en": "went out with my friend"
       },
       {
        "ko": "나는 그와 다시 사귀었어.",
        "en": "I went out with him again."
       }
      ]
     },
     {
      "ko": "쇼핑하러 갔다",
      "en": "went shopping",
      "ex": [
       {
        "ko": "오늘 아침 쇼핑하러 갔어",
        "en": "went shopping this morning"
       },
       {
        "ko": "지난 밤에 쇼핑하러 갔어",
        "en": "went shopping last night"
       },
       {
        "ko": "지난주에 쇼핑하러 갔어",
        "en": "went shopping last week"
       }
      ]
     }
    ]
   },
   {
    "theme": "여가 Activities (3)",
    "items": [
     {
      "ko": "아이쇼핑하다",
      "en": "go window shopping",
      "ex": [
       {
        "ko": "아이쇼핑을 해봐",
        "en": "try to go window shopping"
       },
       {
        "ko": "아이쇼핑하길 원해",
        "en": "want to go window shopping"
       },
       {
        "ko": "아이쇼핑을 할 거야",
        "en": "will go window shopping"
       }
      ]
     },
     {
      "ko": "인사하다",
      "en": "greet",
      "ex": [
       {
        "ko": "내 손님들에게 인사해",
        "en": "greet my guests"
       },
       {
        "ko": "그녀의 부모님께 인사해",
        "en": "greet her parents"
       },
       {
        "ko": "걔네들에게 인사해",
        "en": "greet them"
       }
      ]
     },
     {
      "ko": "소개하다",
      "en": "introduce",
      "ex": [
       {
        "ko": "내 가족을 소개해",
        "en": "introduce my family"
       },
       {
        "ko": "나를 소개해",
        "en": "introduce me"
       },
       {
        "ko": "그 학교를 소개해",
        "en": "introduce the school"
       }
      ]
     },
     {
      "ko": "조깅하다",
      "en": "jog",
      "ex": [
       {
        "ko": "매일 조깅해",
        "en": "jog every day"
       },
       {
        "ko": "저녁마다 조깅해",
        "en": "jog every night"
       },
       {
        "ko": "그 공원 주변으로 조깅해",
        "en": "jog around the park"
       }
      ]
     },
     {
      "ko": "거스름돈을 갖다",
      "en": "keep the change",
      "ex": [
       {
        "ko": "거스름돈을 가져도 돼",
        "en": "can keep the change"
       },
       {
        "ko": "거스름돈을 가져도 돼?",
        "en": "Can I keep the change?"
       },
       {
        "ko": "거스름돈을 가져야 해",
        "en": "must keep the change"
       }
      ]
     },
     {
      "ko": "아이쇼핑했다",
      "en": "went window shopping",
      "ex": [
       {
        "ko": "그냥 아이쇼핑만 했어",
        "en": "just went window shopping"
       },
       {
        "ko": "여기서 아이쇼핑을 했어",
        "en": "went window shopping here"
       },
       {
        "ko": "거기서 아이쇼핑을 했어",
        "en": "went window shopping there"
       }
      ]
     },
     {
      "ko": "인사했다",
      "en": "greeted",
      "ex": [
       {
        "ko": "나에게 인사했어",
        "en": "greeted me"
       },
       {
        "ko": "그녀의 손님께 인사했어",
        "en": "greeted her guests"
       },
       {
        "ko": "내 친구들에게 인사했어",
        "en": "greeted my friends"
       }
      ]
     },
     {
      "ko": "소개했다",
      "en": "introduced",
      "ex": [
       {
        "ko": "내 자신을 소개했어",
        "en": "introduced myself"
       },
       {
        "ko": "차분하게 소개했어",
        "en": "introduced calmly"
       },
       {
        "ko": "자연스럽게 소개했어",
        "en": "introduced naturally"
       }
      ]
     },
     {
      "ko": "조깅했다",
      "en": "jogged",
      "ex": [
       {
        "ko": "내 친구들이랑 조깅했어",
        "en": "jogged with my friends"
       },
       {
        "ko": "걔네들이랑 조깅했어",
        "en": "jogged with them"
       },
       {
        "ko": "그녀랑 조깅했어",
        "en": "jogged with her"
       }
      ]
     },
     {
      "ko": "거스름돈을 가졌다",
      "en": "kept the change",
      "ex": [
       {
        "ko": "그 남자가 거스름돈을 가졌어.",
        "en": "The man kept the change."
       },
       {
        "ko": "그 점원이 거스름돈을 가졌어.",
        "en": "The clerk kept the change."
       },
       {
        "ko": "내가 거스름돈을 가졌어.",
        "en": "I kept the change."
       }
      ]
     },
     {
      "ko": "출국하다",
      "en": "leave a country",
      "ex": [
       {
        "ko": "오늘 오후에 한국 떠나",
        "en": "is leaving Korea this afternoon"
       },
       {
        "ko": "내일 한국 떠나",
        "en": "is leaving Korea tomorrow"
       },
       {
        "ko": "다음달에 한국 떠나",
        "en": "is leaving Korea next month"
       }
      ]
     },
     {
      "ko": "둘러보다",
      "en": "look around",
      "ex": [
       {
        "ko": "그 장소를 둘러봐",
        "en": "look around the place"
       },
       {
        "ko": "그 쇼핑몰을 둘러봐",
        "en": "look around the mall"
       },
       {
        "ko": "그 도시를 둘러봐",
        "en": "look around the city"
       }
      ]
     },
     {
      "ko": "적립하다",
      "en": "save points",
      "ex": [
       {
        "ko": "매번 적립해",
        "en": "save points every time"
       },
       {
        "ko": "매일 적립해",
        "en": "save points every day"
       },
       {
        "ko": "오늘 적립해",
        "en": "save points today"
       }
      ]
     },
     {
      "ko": "사랑하다",
      "en": "love",
      "ex": [
       {
        "ko": "엄마를 사랑해",
        "en": "love my mother"
       },
       {
        "ko": "너를 사랑해",
        "en": "love you"
       },
       {
        "ko": "가족을 사랑해",
        "en": "love my family"
       }
      ]
     },
     {
      "ko": "인상이 좋다",
      "en": "make a good impression",
      "ex": [
       {
        "ko": "그녀는 좋은 인상을 줄 거야.",
        "en": "She will make a good impression."
       },
       {
        "ko": "좋은 인상을 주고 싶어",
        "en": "want to make a good impression"
       },
       {
        "ko": "어떻게 좋은 인상을 주는지",
        "en": "how to make a good impression"
       }
      ]
     },
     {
      "ko": "출국했다",
      "en": "left a country",
      "ex": [
       {
        "ko": "어제 한국 떠났어",
        "en": "left Korea yesterday"
       },
       {
        "ko": "저번주에 한국 떠났어",
        "en": "left Korea last week"
       },
       {
        "ko": "저번달에 한국 떠났어",
        "en": "left Korea last month"
       }
      ]
     },
     {
      "ko": "둘러봤다",
      "en": "looked around",
      "ex": [
       {
        "ko": "오늘 둘러봤어",
        "en": "looked around today"
       },
       {
        "ko": "그 마을을 구경했어",
        "en": "looked around the town"
       },
       {
        "ko": "그녀의 집을 둘러봤어",
        "en": "looked around her house"
       }
      ]
     },
     {
      "ko": "적립했다",
      "en": "saved points",
      "ex": [
       {
        "ko": "많이 적립했어",
        "en": "saved a lot of points"
       },
       {
        "ko": "조금 적립했어",
        "en": "saved a few points"
       },
       {
        "ko": "다소 적립했어",
        "en": "saved some points"
       }
      ]
     },
     {
      "ko": "사랑했다",
      "en": "loved",
      "ex": [
       {
        "ko": "그녀를 사랑했어",
        "en": "loved her"
       },
       {
        "ko": "내 개를 사랑했어",
        "en": "loved my dog"
       },
       {
        "ko": "내 부인을 사랑했어",
        "en": "loved my wife"
       }
      ]
     },
     {
      "ko": "인상이 좋았다",
      "en": "made a good impression",
      "ex": [
       {
        "ko": "그들의 인상이 좋았어.",
        "en": "They made a good impression."
       },
       {
        "ko": "너는 인상이 좋았어.",
        "en": "You made a good impression."
       },
       {
        "ko": "그는 내게 좋은 인상을 줬어.",
        "en": "He made a good impression on me."
       }
      ]
     },
     {
      "ko": "계획을 세우다",
      "en": "make a plan",
      "ex": [
       {
        "ko": "그 여행 계획을 세워",
        "en": "make a plan for the trip"
       },
       {
        "ko": "다음 여행 계획을 세워",
        "en": "make a plan for the next trip"
       },
       {
        "ko": "미국 여행 계획을 세워",
        "en": "make a plan for a trip to America"
       }
      ]
     },
     {
      "ko": "친구를 사귀다",
      "en": "make friends",
      "ex": [
       {
        "ko": "많은 친구들을 사귀어",
        "en": "make lots of friends"
       },
       {
        "ko": "여행하는 동안 친구들을 사귀어",
        "en": "make friends while traveling"
       },
       {
        "ko": "새 친구들을 사귀고 싶어",
        "en": "want to make new friends"
       }
      ]
     },
     {
      "ko": "만나다",
      "en": "meet",
      "ex": [
       {
        "ko": "너를 만나",
        "en": "meet you"
       },
       {
        "ko": "대통령을 만나",
        "en": "meet with the president"
       },
       {
        "ko": "그녀를 만나",
        "en": "meet her"
       }
      ]
     },
     {
      "ko": "우연히 만나다",
      "en": "meet by chance",
      "ex": [
       {
        "ko": "그녀를 우연히 만나",
        "en": "meet her by chance"
       },
       {
        "ko": "걔를 우연히 만나",
        "en": "meet him by chance"
       },
       {
        "ko": "걔네들을 우연히 만나",
        "en": "meet them by chance"
       }
      ]
     },
     {
      "ko": "돈을 내다",
      "en": "pay",
      "ex": [
       {
        "ko": "음식값을 내",
        "en": "pay the bill"
       },
       {
        "ko": "집세를 내",
        "en": "pay the rent"
       },
       {
        "ko": "세금을 내",
        "en": "pay the tax"
       }
      ]
     },
     {
      "ko": "계획을 세웠다",
      "en": "made a plan",
      "ex": [
       {
        "ko": "우리 여행 계획을 세웠어",
        "en": "made a plan for our trip"
       },
       {
        "ko": "계획을 같이 세웠어",
        "en": "made a plan together"
       },
       {
        "ko": "집에 돌아가기로 계획했어",
        "en": "made a plan to go back home"
       }
      ]
     },
     {
      "ko": "친구를 사귀었다",
      "en": "made friends",
      "ex": [
       {
        "ko": "도쿄에서 친구들을 사귀었어",
        "en": "made friends in Tokyo"
       },
       {
        "ko": "엄청 많은 친구들을 거기서 사귀었어",
        "en": "made tons of friends there"
       },
       {
        "ko": "새 친구들을 사귀었어",
        "en": "made new friends"
       }
      ]
     },
     {
      "ko": "만났다",
      "en": "met",
      "ex": [
       {
        "ko": "많은 사람들을 만났어",
        "en": "met many people"
       },
       {
        "ko": "누군가를 만났어",
        "en": "met someone"
       },
       {
        "ko": "다시 만났어",
        "en": "met again"
       }
      ]
     },
     {
      "ko": "우연히 만났다",
      "en": "met by chance",
      "ex": [
       {
        "ko": "내 친구를 우연히 만났어",
        "en": "met my friend by chance"
       },
       {
        "ko": "거기서 걔를 우연히 만났어",
        "en": "met him there by chance"
       },
       {
        "ko": "공항에서 그녀를 우연히 만났어",
        "en": "met her by chance at the airport"
       }
      ]
     },
     {
      "ko": "돈을 냈다",
      "en": "paid",
      "ex": [
       {
        "ko": "그것을 사려고 10달러를 냈어",
        "en": "paid 10 dollars for it"
       },
       {
        "ko": "신발을 사려고 돈을 냈어",
        "en": "paid for the shoes"
       },
       {
        "ko": "펜을 사려고 2달러를 냈어",
        "en": "paid 2 dollars for the pen"
       }
      ]
     }
    ]
   },
   {
    "theme": "여가 Activities (4)",
    "items": [
     {
      "ko": "신용카드로 계산하다",
      "en": "pay by credit card",
      "ex": [
       {
        "ko": "이것을 신용카드로 계산해",
        "en": "pay for this by credit card"
       },
       {
        "ko": "그 음식을 신용카드로 계산해",
        "en": "pay for the food by credit card"
       },
       {
        "ko": "그 옷을 신용카드로 계산해",
        "en": "pay for the clothes by credit card"
       }
      ]
     },
     {
      "ko": "현금으로 지불하다",
      "en": "pay in cash",
      "ex": [
       {
        "ko": "내게 현금으로 지불해",
        "en": "pay me in cash"
       },
       {
        "ko": "그 사람에게 현금으로 지불해",
        "en": "pay the person in cash"
       },
       {
        "ko": "그 운전사에게 현금으로 지불해",
        "en": "pay the driver in cash"
       }
      ]
     },
     {
      "ko": "결혼을 약속하다",
      "en": "promise to marry",
      "ex": [
       {
        "ko": "그와의 결혼을 약속해",
        "en": "promise to marry him"
       },
       {
        "ko": "나와의 결혼을 약속해",
        "en": "promise to marry me"
       },
       {
        "ko": "그녀와의 결혼을 약속해",
        "en": "promise to marry her"
       }
      ]
     },
     {
      "ko": "청혼하다",
      "en": "propose",
      "ex": [
       {
        "ko": "그녀에게 청혼해",
        "en": "propose to her"
       },
       {
        "ko": "나에게 청혼해",
        "en": "propose to me"
       },
       {
        "ko": "그에게 청혼해",
        "en": "propose to him"
       }
      ]
     },
     {
      "ko": "립글로즈를 바르다",
      "en": "put on lip gloss",
      "ex": [
       {
        "ko": "항상 립글로즈를 발라",
        "en": "put on lip gloss all the time"
       },
       {
        "ko": "립글로즈를 절대 안 발라",
        "en": "never put on lip gloss"
       },
       {
        "ko": "핑크색 립글로즈를 발라",
        "en": "put on a pink lip gloss"
       }
      ]
     },
     {
      "ko": "신용카드로 계산했다",
      "en": "paid by credit card",
      "ex": [
       {
        "ko": "음식값을 신용카드로 냈어",
        "en": "paid the bill by credit card"
       },
       {
        "ko": "집세를 신용카드로 냈어",
        "en": "paid the rent by credit card"
       },
       {
        "ko": "세금을 신용카드로 냈어",
        "en": "paid the tax by credit card"
       }
      ]
     },
     {
      "ko": "현금으로 지불했다",
      "en": "paid in cash",
      "ex": [
       {
        "ko": "음식값을 현금으로 냈어",
        "en": "paid the bill in cash"
       },
       {
        "ko": "집세를 현금으로 냈어",
        "en": "paid the rent in cash"
       },
       {
        "ko": "세금을 현금으로 냈어",
        "en": "paid the tax in cash"
       }
      ]
     },
     {
      "ko": "결혼을 약속했다",
      "en": "promised to marry",
      "ex": [
       {
        "ko": "그는 그녀와의 결혼을 약속했어.",
        "en": "He promised to marry her."
       },
       {
        "ko": "그녀는 그와의 결혼을 약속했어.",
        "en": "She promised to marry him."
       },
       {
        "ko": "나는 너와의 결혼을 약속했어.",
        "en": "I promised to marry you."
       }
      ]
     },
     {
      "ko": "청혼했다",
      "en": "proposed",
      "ex": [
       {
        "ko": "그가 한 여자에게 청혼했어.",
        "en": "He proposed to a woman."
       },
       {
        "ko": "그녀가 한 남자에게 청혼했어.",
        "en": "She proposed to a man."
       },
       {
        "ko": "나는 어제 청혼했어.",
        "en": "I proposed yesterday."
       }
      ]
     },
     {
      "ko": "립글로즈를 발랐다",
      "en": "put on lip gloss",
      "ex": [
       {
        "ko": "나 립글로즈 발랐어.",
        "en": "I put on lip gloss."
       },
       {
        "ko": "그녀는 립글로즈 발랐어.",
        "en": "She put on lip gloss."
       },
       {
        "ko": "우리 엄마는 립글로즈 발랐어.",
        "en": "My mother put on lip gloss."
       }
      ]
     },
     {
      "ko": "화장하다",
      "en": "put on makeup",
      "ex": [
       {
        "ko": "화장 매일 해",
        "en": "put on makeup every day"
       },
       {
        "ko": "화장 가끔 해",
        "en": "put on makeup sometimes"
       },
       {
        "ko": "화장 거의 안 해",
        "en": "rarely put on makeup"
       }
      ]
     },
     {
      "ko": "(가격을) 인상하다",
      "en": "raise the price",
      "ex": [
       {
        "ko": "가격을 많이 인상해",
        "en": "raise the price so much"
       },
       {
        "ko": "가격을 조금 인상해",
        "en": "raise the price a little"
       },
       {
        "ko": "커피 가격을 인상해",
        "en": "raise the price of coffee"
       }
      ]
     },
     {
      "ko": "뛰다",
      "en": "run",
      "ex": [
       {
        "ko": "그 학교 주변을 뛰어",
        "en": "run around the school"
       },
       {
        "ko": "그 공원 주변을 뛰어",
        "en": "run around the park"
       },
       {
        "ko": "그 아파트 주변을 뛰어",
        "en": "run around the apartment"
       }
      ]
     },
     {
      "ko": "쇼핑하다",
      "en": "shop",
      "ex": [
       {
        "ko": "그 가게에서 쇼핑해",
        "en": "shop at the store"
       },
       {
        "ko": "그 시장에서 쇼핑해",
        "en": "shop at the market"
       },
       {
        "ko": "그 쇼핑몰에서 쇼핑해",
        "en": "shop at the mall"
       }
      ]
     },
     {
      "ko": "서명하다",
      "en": "sign",
      "ex": [
       {
        "ko": "네 이름을 서명해!",
        "en": "Sign your name!"
       },
       {
        "ko": "그의 이름을 서명해",
        "en": "sign his name"
       },
       {
        "ko": "그녀의 이름을 여기에 서명해",
        "en": "sign her name here"
       }
      ]
     },
     {
      "ko": "화장했다",
      "en": "put on makeup",
      "ex": [
       {
        "ko": "그 면접을 위해 화장했어",
        "en": "put on makeup for the interview"
       },
       {
        "ko": "그 파티를 위해 화장했어",
        "en": "put on makeup for the party"
       },
       {
        "ko": "어제 화장했어",
        "en": "put on makeup yesterday"
       }
      ]
     },
     {
      "ko": "(가격을) 인상했다",
      "en": "raised the price",
      "ex": [
       {
        "ko": "이미 가격을 인상했어",
        "en": "already raised the price"
       },
       {
        "ko": "갑자기 가격을 인상했어",
        "en": "suddenly raised the price"
       },
       {
        "ko": "그 상점은 가격을 인상했어.",
        "en": "The store raised the price."
       }
      ]
     },
     {
      "ko": "뛰었다",
      "en": "ran",
      "ex": [
       {
        "ko": "30분 동안 뛰었어",
        "en": "ran for 30 minutes"
       },
       {
        "ko": "하루 종일 뛰었어",
        "en": "ran all day"
       },
       {
        "ko": "오늘 아침에 뛰었어",
        "en": "ran this morning"
       }
      ]
     },
     {
      "ko": "쇼핑했다",
      "en": "shopped",
      "ex": [
       {
        "ko": "그들은 쇼핑했어.",
        "en": "They shopped."
       },
       {
        "ko": "우리는 쇼핑했어.",
        "en": "We shopped."
       },
       {
        "ko": "그녀는 옷을 쇼핑했어.",
        "en": "She shopped for clothes."
       }
      ]
     },
     {
      "ko": "서명했다",
      "en": "signed",
      "ex": [
       {
        "ko": "영수증에 서명했어",
        "en": "signed a receipt"
       },
       {
        "ko": "수표에 서명했어",
        "en": "signed a check"
       },
       {
        "ko": "그녀의 이름을 서명했어",
        "en": "signed her name"
       }
      ]
     },
     {
      "ko": "매진되다",
      "en": "sell out",
      "ex": [
       {
        "ko": "즉시 매진이야",
        "en": "sell out immediately"
       },
       {
        "ko": "곧 매진이야",
        "en": "sell out soon"
       },
       {
        "ko": "모두 매진이야",
        "en": "all sell out"
       }
      ]
     },
     {
      "ko": "호텔에서 머물다",
      "en": "stay at a hotel",
      "ex": [
       {
        "ko": "호텔에서 하루 머물러",
        "en": "stay at a hotel for a night"
       },
       {
        "ko": "호텔에서 내 가족이랑 머물러",
        "en": "stay at a hotel with my family"
       },
       {
        "ko": "호텔에 머무는 것을 계획해",
        "en": "plan to stay at a hotel"
       }
      ]
     },
     {
      "ko": "스트레칭 하다",
      "en": "stretch",
      "ex": [
       {
        "ko": "팔을 스트레칭 해!",
        "en": "Stretch your arms!"
       },
       {
        "ko": "발을 스트레칭 해!",
        "en": "Stretch your legs!"
       },
       {
        "ko": "허리를 스트레칭 해!",
        "en": "Stretch your back!"
       }
      ]
     },
     {
      "ko": "수영하다",
      "en": "swim",
      "ex": [
       {
        "ko": "그 수영장에서 수영했어",
        "en": "swim in the pool"
       },
       {
        "ko": "그 호수에서 수영했어",
        "en": "swim in the lake"
       },
       {
        "ko": "내 친구들이랑 수영해",
        "en": "swim with my friends"
       }
      ]
     },
     {
      "ko": "사진을 찍다",
      "en": "take a picture",
      "ex": [
       {
        "ko": "같이 사진 찍자!",
        "en": "Let's take a picture together!"
       },
       {
        "ko": "우리들 사진 찍어 줄래?",
        "en": "Can you take a picture of us?"
       },
       {
        "ko": "나랑 사진 찍자!",
        "en": "Take a picture with me!"
       }
      ]
     },
     {
      "ko": "매진되었다",
      "en": "be sold out",
      "ex": [
       {
        "ko": "이미 매진됐어",
        "en": "be already sold out"
       },
       {
        "ko": "완전히 매진됐어",
        "en": "be completely sold out"
       },
       {
        "ko": "결국 매진됐어",
        "en": "be eventually sold out"
       }
      ]
     },
     {
      "ko": "호텔에서 머물렀다",
      "en": "stayed at a hotel",
      "ex": [
       {
        "ko": "내 아내와 호텔에서 머물렀어",
        "en": "stayed at a hotel with my wife"
       },
       {
        "ko": "도쿄에 있는 호텔에서 머물렀어",
        "en": "stayed at a hotel in Tokyo"
       },
       {
        "ko": "그 근처 호텔에서 머물렀어",
        "en": "stayed at a hotel near there"
       }
      ]
     },
     {
      "ko": "스트레칭 했다",
      "en": "stretched",
      "ex": [
       {
        "ko": "몸을 스트레칭 했어",
        "en": "stretched my body"
       },
       {
        "ko": "팔을 스트레칭 했어",
        "en": "stretched my arms"
       },
       {
        "ko": "다리를 스트레칭 했어",
        "en": "stretched my legs"
       }
      ]
     },
     {
      "ko": "수영했다",
      "en": "swam",
      "ex": [
       {
        "ko": "어제 수영했어",
        "en": "swam yesterday"
       },
       {
        "ko": "저번 토요일에 수영했어",
        "en": "swam last Saturday"
       },
       {
        "ko": "걔랑 수영했어",
        "en": "swam with him"
       }
      ]
     },
     {
      "ko": "사진을 찍었다",
      "en": "took a picture",
      "ex": [
       {
        "ko": "걔네들 사진 찍었어",
        "en": "took a picture of them"
       },
       {
        "ko": "같이 사진 찍었어",
        "en": "took a picture together"
       },
       {
        "ko": "많은 사진 찍었어",
        "en": "took lots of pictures"
       }
      ]
     }
    ]
   },
   {
    "theme": "여가 Activities (5)",
    "items": [
     {
      "ko": "쉬다",
      "en": "take a rest",
      "ex": [
       {
        "ko": "오늘밤 쉬어",
        "en": "take a rest tonight"
       },
       {
        "ko": "나무 아래에서 쉬어",
        "en": "take a rest under a tree"
       },
       {
        "ko": "여행 끝나고 쉬어",
        "en": "take a rest after the trip"
       }
      ]
     },
     {
      "ko": "산책하다",
      "en": "take a walk",
      "ex": [
       {
        "ko": "그 공원에서 산책해",
        "en": "take a walk in the park"
       },
       {
        "ko": "같이 산책해",
        "en": "take a walk together"
       },
       {
        "ko": "산책하자!",
        "en": "Let's take a walk!"
       }
      ]
     },
     {
      "ko": "여행하다",
      "en": "travel",
      "ex": [
       {
        "ko": "프랑스로 여행하길 원해",
        "en": "want to travel to France"
       },
       {
        "ko": "세계 여행하는 것을 계획해",
        "en": "plan to travel around the world"
       },
       {
        "ko": "일본으로 여행하려고 해",
        "en": "try to travel to Japan"
       }
      ]
     },
     {
      "ko": "해외여행 가다",
      "en": "travel abroad",
      "ex": [
       {
        "ko": "해외로 걔랑 여행가",
        "en": "travel abroad with him"
       },
       {
        "ko": "해외로 걔네들이랑 여행가",
        "en": "travel abroad with them"
       },
       {
        "ko": "해외로 여행가고 싶어",
        "en": "want to travel abroad"
       }
      ]
     },
     {
      "ko": "입어보다",
      "en": "try on",
      "ex": [
       {
        "ko": "옷을 입어보다",
        "en": "try on these clothes"
       },
       {
        "ko": "이거 입어보고 싶어",
        "en": "want to try it on"
       },
       {
        "ko": "이 신발 신어봐도 돼?",
        "en": "Can I try these shoes on?"
       }
      ]
     },
     {
      "ko": "쉬었다",
      "en": "took a rest",
      "ex": [
       {
        "ko": "어제 쉬었어",
        "en": "took a rest yesterday"
       },
       {
        "ko": "겨울 동안에 쉬었어",
        "en": "took a rest during winter"
       },
       {
        "ko": "방학 동안에 쉬었어",
        "en": "took a rest during my vacation"
       }
      ]
     },
     {
      "ko": "산책했다",
      "en": "took a walk",
      "ex": [
       {
        "ko": "아침에 산책했어",
        "en": "took a walk in the morning"
       },
       {
        "ko": "저녁에 산책했어",
        "en": "took a walk in the evening"
       },
       {
        "ko": "걔랑 산책했어",
        "en": "took a walk with him"
       }
      ]
     },
     {
      "ko": "여행했다",
      "en": "traveled",
      "ex": [
       {
        "ko": "내 친구들과 여행했어",
        "en": "traveled with my friends"
       },
       {
        "ko": "나라 전체를 여행했어",
        "en": "traveled all over the country"
       },
       {
        "ko": "그녀의 부모님과 여행했어",
        "en": "traveled with her parents"
       }
      ]
     },
     {
      "ko": "해외여행 갔다",
      "en": "traveled abroad",
      "ex": [
       {
        "ko": "저번주에 해외여행 갔어",
        "en": "traveled abroad last week"
       },
       {
        "ko": "해외여행 다시 갔어",
        "en": "traveled abroad again"
       },
       {
        "ko": "우리와 해외여행 갔어",
        "en": "traveled abroad with us"
       }
      ]
     },
     {
      "ko": "입어봤다",
      "en": "tried on",
      "ex": [
       {
        "ko": "재킷을 입어봤어",
        "en": "tried on a jacket"
       },
       {
        "ko": "예쁜 원피스를 입어봤어",
        "en": "tried on a pretty dress"
       },
       {
        "ko": "선글라스를 써 봤어",
        "en": "tried on sunglasses"
       }
      ]
     }
    ]
   }
  ]
 }
];
