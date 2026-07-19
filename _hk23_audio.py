# -*- coding: utf-8 -*-
"""해커스 1000제 2/3권 LC 음원 '03 문제별 분할' 평면 추출 → HK_LC2/ HK_LC3/"""
import zipfile, os, re, sys

BASE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(BASE, '해커스 토익 1000제(1)')
JOBS = [('Hackers_Toeic_1000_2_LC.zip', 'HK_LC2'),
        ('Hackers_Toeic_1000_3_LC.zip', 'HK_LC3')]

for zname, outdir in JOBS:
    out = os.path.join(BASE, outdir)
    os.makedirs(out, exist_ok=True)
    z = zipfile.ZipFile(os.path.join(SRC, zname))
    n = 0
    names = []
    for info in z.infolist():
        if info.is_dir():
            continue
        raw = info.filename
        # cp949-mojibake 복구 시도
        try:
            disp = raw.encode('cp437').decode('cp949')
        except Exception:
            disp = raw
        parts = disp.replace('\\', '/').split('/')
        if len(parts) < 2 or not parts[1].startswith('03'):
            continue
        base = parts[-1]
        if not base.lower().endswith('.mp3'):
            continue
        with z.open(info) as f, open(os.path.join(out, base), 'wb') as o:
            o.write(f.read())
        n += 1
        names.append(base)
    print(outdir, n, 'files')
    print('  sample:', sorted(names)[:3], '...', sorted(names)[-2:])
