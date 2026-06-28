// 매일 정한 시각(사용자별)에 웹 푸시 알림 발송
// GitHub Actions cron(15분마다)에서 실행. Firebase에서 구독 읽고, 오늘 아직 안 보낸 것 중
// 예약 시각이 지난 구독에 발송 후 lastSent 기록(하루 1회).
const webpush = require('web-push');

const DB = 'https://voca-cbe02-default-rtdb.asia-southeast1.firebasedatabase.app';
const APP_URL = 'https://leesm19880417-blip.github.io/voca/index.html';
const VAPID_PUBLIC = 'BBh6TKcG4EKiJOyFey3P8HaSrXIxBfLKpdISBNxTZ4UP5Ae-Yde8-G-Bx3YiWPvphh8bC0WGTD-v9JM7l9aGtR0';
const VAPID_PRIVATE = process.env.VAPID_PRIVATE_KEY;

if (!VAPID_PRIVATE) { console.error('VAPID_PRIVATE_KEY 시크릿이 없습니다.'); process.exit(1); }
webpush.setVapidDetails('mailto:leesm19880417@gmail.com', VAPID_PUBLIC, VAPID_PRIVATE);

// 한국 시각(KST = UTC+9)
function kstNow() { return new Date(Date.now() + 9 * 3600 * 1000); }
function kstDateStr(d) { return d.toISOString().slice(0, 10); } // YYYY-MM-DD (이미 +9 적용된 Date의 UTC파트)

async function main() {
  const res = await fetch(`${DB}/push.json`);
  const all = await res.json();
  if (!all || typeof all !== 'object') { console.log('구독 없음'); return; }

  const now = kstNow();
  const today = kstDateStr(now);
  const nowMin = now.getUTCHours() * 60 + now.getUTCMinutes(); // KST 기준 분

  let sent = 0, skipped = 0, gone = 0;
  for (const [id, s] of Object.entries(all)) {
    if (!s || id.startsWith('_')) continue;
    if (!s.enabled || !s.endpoint || !s.keys) { skipped++; continue; }
    const schedMin = (s.hour || 0) * 60 + (s.minute || 0);
    if (nowMin < schedMin) { skipped++; continue; }      // 아직 예약 시각 전
    if (s.lastSent === today) { skipped++; continue; }     // 오늘 이미 보냄

    const payload = JSON.stringify({
      title: '📚 영어 Study — 복습 시간이에요!',
      body: s.body || '오늘의 미션을 확인하고 단어를 복습해요 💪',
      url: APP_URL,
      tag: 'daily-review'
    });
    try {
      await webpush.sendNotification({ endpoint: s.endpoint, keys: s.keys }, payload);
      await fetch(`${DB}/push/${id}/lastSent.json`, { method: 'PUT', body: JSON.stringify(today) });
      sent++;
    } catch (err) {
      const code = err && err.statusCode;
      if (code === 404 || code === 410) { // 만료/해지된 구독 → 삭제
        await fetch(`${DB}/push/${id}.json`, { method: 'DELETE' });
        gone++;
      } else {
        console.error(`발송 실패 ${id}:`, code || (err && err.message));
      }
    }
  }
  console.log(`발송 ${sent} · 건너뜀 ${skipped} · 만료삭제 ${gone} (KST ${today} ${now.getUTCHours()}:${String(now.getUTCMinutes()).padStart(2,'0')})`);
}
main().catch((e) => { console.error(e); process.exit(1); });
