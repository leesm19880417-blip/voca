# -*- coding: utf-8 -*-
"""해커스 1000제 2/3권 LC 음원 64kbps 모노 변환 (1권과 동일 규격)
usage: python _hk23_transcode.py <HK_LC2|HK_LC3>
"""
import imageio_ffmpeg, subprocess, os, sys, glob

sys.stdout.reconfigure(encoding='utf-8')
FF = imageio_ffmpeg.get_ffmpeg_exe()
D = sys.argv[1]
files = sorted(glob.glob(D + '/*.mp3'))
before = sum(os.path.getsize(x) for x in files)
done = skip = 0
for f in files:
    # 이미 64k 모노면 건너뛰기
    r = subprocess.run([FF, '-i', f], capture_output=True, text=True, errors='replace')
    if 'mono' in r.stderr and '64 kb/s' in r.stderr:
        skip += 1
        continue
    tmp = f + '.c.mp3'
    r = subprocess.run([FF, '-y', '-loglevel', 'error', '-i', f, '-b:a', '64k', '-ac', '1', tmp],
                       capture_output=True)
    if r.returncode == 0 and os.path.exists(tmp) and os.path.getsize(tmp) > 0:
        os.replace(tmp, f); done += 1
    else:
        if os.path.exists(tmp): os.remove(tmp)
        print('FAIL', f)
after = sum(os.path.getsize(x) for x in glob.glob(D + '/*.mp3'))
print('%s: transcoded %d, skipped %d / %d' % (D, done, skip, len(files)))
print('  %.0f MB -> %.0f MB' % (before / 1e6, after / 1e6))
