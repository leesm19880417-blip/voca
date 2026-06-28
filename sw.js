// 영어 Study — 서비스워커 (웹 푸시 알림 처리)
const SW_VERSION = 'sw-20260628a';

self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { e.waitUntil(self.clients.claim()); });

// 서버(GitHub Actions)에서 보낸 푸시 → 알림 표시
self.addEventListener('push', (e) => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; }
  catch (_) { try { d = { body: e.data && e.data.text() }; } catch (__) { d = {}; } }
  const title = d.title || '📚 영어 Study';
  const opts = {
    body: d.body || '오늘의 복습을 확인하세요!',
    tag: d.tag || 'daily-review',
    renotify: true,
    requireInteraction: false,
    data: { url: d.url || './index.html' }
  };
  if (d.icon) opts.icon = d.icon;
  e.waitUntil(self.registration.showNotification(title, opts));
});

// 알림 탭 → 앱 열기/포커스
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || './index.html';
  e.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((cs) => {
      for (const c of cs) {
        if ('focus' in c) { try { c.navigate && c.navigate(url); } catch (_) {} return c.focus(); }
      }
      if (self.clients.openWindow) return self.clients.openWindow(url);
    })
  );
});
