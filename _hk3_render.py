# -*- coding: utf-8 -*-
"""해커스 실전 1000제 3권 해설집 회차 렌더 (OCR용)
usage: python _hk3_render.py <T> [lc|rc]
  LC 해설 Q1 = 21 + 42*(T-1)   (42p/회차, T2=63·T10=399 육안 검증됨 — 2권과 동일)
  RC 해설 Q101 = rc0, 드리프트 있어 회차별 프로브 필요 (RC_START dict)
"""
import fitz, os, sys

sys.stdout.reconfigure(encoding='utf-8')
BASE = os.path.dirname(os.path.abspath(__file__))
D = os.path.join(BASE, '해커스 토익 1000제(1)')

LC_A = os.path.join(D, '해커스 토익 실전 1000제 LC 3 해설집.pdf')
RC_A = os.path.join(D, '해커스 토익 실전 1000제 RC 3 해설집.pdf')

def lc_start(T):
    return 21 + 42 * (T - 1)

# RC는 회차 사이 광고/구분 페이지로 드리프트 → 프로브해서 확정한 값만 기록
RC_START = {}

def render(T, which='lc'):
    if which == 'lc':
        d = fitz.open(LC_A); s = lc_start(T); n = 42; out = os.path.join(BASE, '_hk3lc%d' % T); pre = 'la'
    else:
        if T not in RC_START:
            raise SystemExit('RC Test%d 시작페이지 미확정 — 프로브 후 RC_START에 추가하세요' % T)
        d = fitz.open(RC_A); s = RC_START[T]; n = 56; out = os.path.join(BASE, '_hk3rc%d' % T); pre = 'ra'
    os.makedirs(os.path.join(out, 'img'), exist_ok=True)
    os.makedirs(os.path.join(out, 'parts'), exist_ok=True)
    for i in range(s, min(s + n, d.page_count)):
        d[i].get_pixmap(matrix=fitz.Matrix(2.2, 2.2)).save(
            os.path.join(out, 'img', '%s_%d.jpg' % (pre, i)), jpg_quality=80)
    print('T%d %s: %d-%d → %s' % (T, which, s, min(s + n, d.page_count) - 1, out))
    d.close()

if __name__ == '__main__':
    T = int(sys.argv[1])
    which = sys.argv[2] if len(sys.argv) > 2 else 'lc'
    render(T, which)
