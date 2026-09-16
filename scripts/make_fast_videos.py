import subprocess

# 1. Drone video (1280x720, 6 seconds, fast 25fps)
cmd_drone = [
    'ffmpeg', '-y',
    '-f', 'lavfi', '-i', 'color=c=#01579B:s=1280x720:d=6:r=25',
    '-filter_complex',
    "[0:v]"
    "drawbox=x=0:y=0:w=1280:h=380:color=#0288D1@0.9:t=fill,"
    "drawbox=x=0:y=380:w=1280:h=340:color=#2E7D32@0.95:t=fill,"
    "drawbox=x=380:y=180:w=520:h=340:color=#ECEFF1@0.98:t=fill,"
    "drawbox=x=500:y=260:w=280:h=260:color=#3E2723@0.95:t=fill,"
    "drawbox=x=410:y=200:w=70:h=50:color=#0D47A1@0.95:t=fill,"
    "drawtext=text='BG':fontcolor=white:fontsize=36:x=425:y=207:fontfile=/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf,"
    "drawtext=text='BAY VIEW GRAND':fontcolor=#1A237E:fontsize=30:x=495:y=205:fontfile=/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf,"
    "drawtext=text='at Grand Island':fontcolor=#C2185B:fontsize=18:x=498:y=236,"
    "drawtext=text='● REC 4K [60 FPS - D-LOG M]':fontcolor=#FF1744:fontsize=22:x=40:y=40:fontfile=/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf,"
    "drawtext=text='ALT\\: %{eif\\:12+t*3\\:d}m  |  SPD\\: 18 km/h  |  GPS\\: 21.1619° N, 86.8515° W':fontcolor=white:fontsize=18:x=40:y=675,"
    "drawtext=text='TOMA AÉREA DRON • CANCÚN':fontcolor=#FFE082:fontsize=18:x=960:y=40:fontfile=/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"
    "[v]",
    '-map', '[v]',
    '-c:v', 'libx264',
    '-preset', 'veryfast',
    '-pix_fmt', 'yuv420p',
    '-movflags', '+faststart',
    'public/videos/drone-bayview.mp4'
]

print("Rendering drone video...")
subprocess.run(cmd_drone, check=True)
print("Drone video rendered successfully!")

# 2. Reel Commercial video (720x1280, 8 seconds, fast 25fps)
cmd_reel = [
    'ffmpeg', '-y',
    '-f', 'lavfi', '-i', 'color=c=#0B132B:s=720x1280:d=8:r=25',
    '-filter_complex',
    "[0:v]"
    "drawbox=x=0:y=0:w=720:h=450:color=#E65100@0.4:t=fill,"
    "drawbox=x=40:y=80:w=640:h=120:color=#1B1B1B@0.9:t=fill,"
    "drawtext=text='¿VAS A COMPRAR EN CANCÚN?':fontcolor=#FFD54F:fontsize=28:x=70:y=105:fontfile=/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf,"
    "drawtext=text='EVITA ESTOS 3 ERRORES CLAVE':fontcolor=white:fontsize=22:x=140:y=145:fontfile=/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf,"
    "drawbox=x=40:y=240:w=640:h=110:color=#1B1B1B@0.85:t=fill,"
    "drawtext=text='1. NO REVISAR LEGALIDAD':fontcolor=#FF5252:fontsize=24:x=70:y=260:fontfile=/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf,"
    "drawtext=text='Propiedades con gravámenes o en zona ejidal':fontcolor=white:fontsize=18:x=70:y=300,"
    "drawbox=x=40:y=380:w=640:h=110:color=#1B1B1B@0.85:t=fill,"
    "drawtext=text='2. COMPRAR SIN ASESORÍA':fontcolor=#FF5252:fontsize=24:x=70:y=400:fontfile=/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf,"
    "drawtext=text='Un broker certificado protege tu patrimonio':fontcolor=white:fontsize=18:x=70:y=440,"
    "drawbox=x=40:y=520:w=640:h=110:color=#1B1B1B@0.85:t=fill,"
    "drawtext=text='3. CREER QUE TODO CANCÚN ES BUENO':fontcolor=#FF5252:fontsize=22:x=70:y=540:fontfile=/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf,"
    "drawtext=text='Analiza plusvalía real, servicios y retorno':fontcolor=white:fontsize=18:x=70:y=580,"
    "drawbox=x=40:y=760:w=640:h=160:color=#E45831@0.95:t=fill,"
    "drawtext=text='¿QUIERES INVERTIR SEGURO?':fontcolor=white:fontsize=28:x=130:y=795:fontfile=/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf,"
    "drawtext=text='Mándame DM y te asesoro hoy mismo':fontcolor=#FFF8E1:fontsize=20:x=140:y=840,"
    "drawtext=text='PRODUCCIÓN MOVA CREATIVE':fontcolor=white:fontsize=16:x=220:y=885,"
    "drawbox=x=0:y=1255:w=720:h=25:color=#E45831:t=fill"
    "[v]",
    '-map', '[v]',
    '-c:v', 'libx264',
    '-preset', 'veryfast',
    '-pix_fmt', 'yuv420p',
    '-movflags', '+faststart',
    'public/videos/reel-asesora.mp4'
]

print("Rendering reel video...")
subprocess.run(cmd_reel, check=True)
print("Reel video rendered successfully!")
