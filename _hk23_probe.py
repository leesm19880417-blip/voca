# -*- coding: utf-8 -*-
import fitz, os, glob, sys
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), '해커스 토익 1000제(1)')
for p in sorted(glob.glob(os.path.join(D, '해커스 토익 실전 1000제 *.pdf'))):
    d = fitz.open(p)
    n = d.page_count
    # text layer check on a few pages
    tl = any(d[i].get_text().strip() for i in range(min(n, 60), min(n, 70)))
    print(os.path.basename(p), '| pages=', n, '| textlayer=', tl)
    d.close()
