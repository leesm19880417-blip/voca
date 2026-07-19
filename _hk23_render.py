# -*- coding: utf-8 -*-
"""해커스 1000제 2/3권 페이지 렌더 헬퍼
usage: python _hk23_render.py <book> <kind> <start> <end> [dpi]
  book: lc2 lc3 rc2 rc3
  kind: q(문제) a(해설)
"""
import fitz, os, sys

BASE = os.path.dirname(os.path.abspath(__file__))
D = os.path.join(BASE, '해커스 토익 1000제(1)')
PDF = {
    ('lc2', 'q'): '해커스 토익 실전 1000제 LC 2.pdf',
    ('lc2', 'a'): '해커스 토익 실전 1000제 LC 2 해설집.pdf',
    ('lc3', 'q'): '해커스 토익 실전 1000제 LC 3.pdf',
    ('lc3', 'a'): '해커스 토익 실전 1000제 LC 3 해설집.pdf',
    ('rc2', 'q'): '해커스 토익 실전 1000제 RC 2.pdf',
    ('rc2', 'a'): '해커스 토익 실전 1000제 RC 2 해설집.pdf',
    ('rc3', 'q'): '해커스 토익 실전 1000제 RC 3.pdf',
    ('rc3', 'a'): '해커스 토익 실전 1000제 RC 3 해설집.pdf',
}

def render(book, kind, s, e, dpi=150, out=None):
    out = out or os.path.join(BASE, '_probe_hk23')
    os.makedirs(out, exist_ok=True)
    d = fitz.open(os.path.join(D, PDF[(book, kind)]))
    paths = []
    for i in range(s, min(e + 1, d.page_count)):
        pm = d[i].get_pixmap(dpi=dpi)
        p = os.path.join(out, '%s%s_%03d.png' % (book, kind, i))
        pm.save(p)
        paths.append(p)
    d.close()
    return paths

if __name__ == '__main__':
    b, k, s, e = sys.argv[1], sys.argv[2], int(sys.argv[3]), int(sys.argv[4])
    dpi = int(sys.argv[5]) if len(sys.argv) > 5 else 150
    for p in render(b, k, s, e, dpi):
        print(p)
