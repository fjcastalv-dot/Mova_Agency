import subprocess
import os

os.makedirs('public', exist_ok=True)
os.makedirs('public/videos', exist_ok=True)
os.makedirs('public/images', exist_ok=True)

# 1. Generate SVG for IMG_6683.JPG (Gastronomy / Tacos on yellow table)
svg_6683 = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" width="1200" height="900">
  <defs>
    <radialGradient id="tableLight" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#FDD835"/>
      <stop offset="70%" stop-color="#FBC02D"/>
      <stop offset="100%" stop-color="#F57F17"/>
    </radialGradient>
    <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="15" dy="25" stdDeviation="20" flood-color="#553000" flood-opacity="0.35"/>
    </filter>
    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="5" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Yellow Table Background -->
  <rect width="1200" height="900" fill="url(#tableLight)"/>

  <!-- Subtle table wood grain texture -->
  <g opacity="0.06">
    <line x1="0" y1="120" x2="1200" y2="120" stroke="#000" stroke-width="2"/>
    <line x1="0" y1="280" x2="1200" y2="280" stroke="#000" stroke-width="2"/>
    <line x1="0" y1="450" x2="1200" y2="450" stroke="#000" stroke-width="2"/>
    <line x1="0" y1="620" x2="1200" y2="620" stroke="#000" stroke-width="2"/>
    <line x1="0" y1="780" x2="1200" y2="780" stroke="#000" stroke-width="2"/>
  </g>

  <!-- Top-Center Plate: Crispy Fish/Shrimp Taco -->
  <g transform="translate(600, 260)" filter="url(#shadow)">
    <!-- Blue Plate -->
    <circle r="170" fill="#0D47A1" stroke="#1565C0" stroke-width="10"/>
    <circle r="145" fill="#1976D2" opacity="0.9"/>
    <!-- Wax Paper Liner with Print -->
    <rect x="-130" y="-130" width="260" height="260" rx="15" fill="#FFFDF8" transform="rotate(12)" opacity="0.96"/>
    <text x="-40" y="-80" font-family="'Impact', 'Arial Black', sans-serif" font-size="12" fill="#E65100" opacity="0.4" transform="rotate(12)">CHINGONCITO TACOS</text>
    <text x="-60" y="80" font-family="'Impact', 'Arial Black', sans-serif" font-size="12" fill="#E65100" opacity="0.4" transform="rotate(12)">ESPECIALIDAD DEL MAR</text>
    <!-- Crispy Golden Taco -->
    <ellipse cx="0" cy="10" rx="110" ry="48" fill="#F4B400" stroke="#D39E00" stroke-width="3"/>
    <!-- Golden fried shrimp / battered fish -->
    <ellipse cx="-35" cy="5" rx="35" ry="18" fill="#E67E22"/>
    <ellipse cx="25" cy="12" rx="38" ry="20" fill="#D35400"/>
    <!-- Purple cabbage slaw -->
    <path d="M-60,-5 Q-20,-15 30,-8 Q50,-2 60,10" stroke="#8E24AA" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M-40,5 Q0,-8 50,2" stroke="#AB47BC" stroke-width="5" fill="none" stroke-linecap="round"/>
    <!-- Creamy white chipotle drizzle -->
    <path d="M-80,0 Q-40,25 0,-5 Q40,20 70,-10" stroke="#FFF9C4" stroke-width="9" fill="none" stroke-linecap="round" opacity="0.9"/>
    <!-- Fresh Cilantro Microgreens -->
    <circle cx="-15" cy="-8" r="7" fill="#2E7D32"/>
    <circle cx="20" cy="-2" r="6" fill="#388E3C"/>
    <circle cx="45" cy="18" r="5" fill="#2E7D32"/>
    <!-- Fresh lime wedge on side -->
    <path d="M75,60 A35,35 0 0,0 120,40 Z" fill="#7CB342" stroke="#558B2F" stroke-width="2"/>
    <path d="M78,58 A30,30 0 0,0 115,42 Z" fill="#C0CA33"/>
  </g>

  <!-- Left Plate: Taco Dorado / Salsa Roja -->
  <g transform="translate(320, 600)" filter="url(#shadow)">
    <!-- Blue Plate -->
    <circle r="185" fill="#0D47A1" stroke="#1565C0" stroke-width="10"/>
    <circle r="158" fill="#1976D2" opacity="0.9"/>
    <!-- Paper Liner -->
    <rect x="-140" y="-140" width="280" height="280" rx="15" fill="#FFFDF8" transform="rotate(-8)" opacity="0.96"/>
    <!-- Taco Dorado with rich red sauce -->
    <ellipse cx="0" cy="15" rx="120" ry="52" fill="#E65100" stroke="#BF360C" stroke-width="4"/>
    <!-- Guajillo Salsa Coat -->
    <ellipse cx="0" cy="10" rx="100" ry="38" fill="#C62828"/>
    <!-- Cream drizzle -->
    <path d="M-70,5 Q-30,25 10,-5 Q50,20 80,0" stroke="#FFFFFF" stroke-width="8" fill="none" stroke-linecap="round"/>
    <!-- Pickled purple red onions -->
    <ellipse cx="-20" cy="5" rx="22" ry="12" fill="none" stroke="#AD1457" stroke-width="7"/>
    <ellipse cx="30" cy="12" rx="25" ry="10" fill="none" stroke="#C2185B" stroke-width="6"/>
    <!-- Fresh cilantro garnish -->
    <circle cx="-35" cy="0" r="8" fill="#2E7D32"/>
    <circle cx="5" cy="15" r="7" fill="#388E3C"/>
    <circle cx="50" cy="5" r="6" fill="#2E7D32"/>
    <!-- Queso fresco crumbles -->
    <circle cx="-10" cy="-8" r="4" fill="#FFFFFF"/>
    <circle cx="15" cy="22" r="3" fill="#FFFFFF"/>
    <circle cx="-45" cy="15" r="3.5" fill="#FFFFFF"/>
  </g>

  <!-- Right Plate: Fresh Seafood Ceviche Tostada -->
  <g transform="translate(860, 610)" filter="url(#shadow)">
    <!-- Blue Plate -->
    <circle r="180" fill="#0D47A1" stroke="#1565C0" stroke-width="10"/>
    <circle r="154" fill="#1976D2" opacity="0.9"/>
    <!-- Paper Liner -->
    <rect x="-135" y="-135" width="270" height="270" rx="15" fill="#FFFDF8" transform="rotate(18)" opacity="0.96"/>
    <!-- Crispy Tostada Base -->
    <circle r="95" fill="#F4B400" stroke="#D39E00" stroke-width="4"/>
    <!-- Fresh Ceviche Mix -->
    <circle r="80" fill="#FFFDE7" opacity="0.7"/>
    <!-- Diced Tomatoes & White Fish -->
    <rect x="-40" y="-30" width="18" height="18" rx="3" fill="#E53935"/>
    <rect x="15" y="-45" width="20" height="20" rx="3" fill="#E53935"/>
    <rect x="-15" y="10" width="22" height="22" rx="3" fill="#E53935"/>
    <rect x="35" y="5" width="16" height="16" rx="3" fill="#E53935"/>
    <!-- White Fish Cubes -->
    <rect x="-60" y="-10" width="24" height="24" rx="4" fill="#ECEFF1"/>
    <rect x="-10" y="-35" width="22" height="22" rx="4" fill="#F5F5F5"/>
    <rect x="10" y="-10" width="26" height="26" rx="4" fill="#ECEFF1"/>
    <rect x="-35" y="25" width="20" height="20" rx="4" fill="#FAFAFA"/>
    <!-- Cilantro Leaf Accents -->
    <circle cx="0" cy="0" r="8" fill="#2E7D32"/>
    <circle cx="-30" cy="-25" r="7" fill="#388E3C"/>
    <circle cx="35" cy="-20" r="7" fill="#2E7D32"/>
    <circle cx="15" cy="30" r="6" fill="#388E3C"/>
    <!-- Thin Avocado Slice Crown -->
    <path d="M-40,-5 Q0,-35 45,-15 Q10,-5 -40,-5 Z" fill="#689F38" stroke="#33691E" stroke-width="2"/>
    <path d="M-30,-2 Q0,-25 35,-10" stroke="#DCEDC8" stroke-width="4" fill="none"/>
  </g>

  <!-- Top-Right: Glass Bottle with Fresh Green Juice / Agua Verde -->
  <g transform="translate(1060, 180)" filter="url(#shadow)">
    <!-- Red Coaster -->
    <circle r="60" fill="#D32F2F" stroke="#B71C1C" stroke-width="4"/>
    <!-- Glass Bottle Bottom -->
    <circle r="44" fill="#2E7D32" stroke="#81C784" stroke-width="5" opacity="0.95"/>
    <!-- Green Juice Depth -->
    <circle r="36" fill="#388E3C"/>
    <!-- Bottle Reflection Highlight -->
    <path d="M-20,-20 A30,30 0 0,1 20,-20" stroke="#C8E6C9" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.8"/>
  </g>

  <!-- Bottom-Right: Amber Beer Bottle -->
  <g transform="translate(1080, 780)" filter="url(#shadow)">
    <!-- Red Coaster -->
    <circle r="65" fill="#D32F2F" stroke="#B71C1C" stroke-width="4"/>
    <!-- Amber Bottle Base -->
    <circle r="48" fill="#4E342E" stroke="#8D6E63" stroke-width="6"/>
    <!-- Liquid Amber Tone -->
    <circle r="38" fill="#6D4C41"/>
    <!-- Condensation Drops -->
    <circle cx="-15" cy="-15" r="3" fill="#FFF" opacity="0.7"/>
    <circle cx="18" cy="-8" r="2.5" fill="#FFF" opacity="0.7"/>
    <circle cx="-10" cy="20" r="3.5" fill="#FFF" opacity="0.6"/>
    <path d="M-22,-22 A32,32 0 0,1 22,-22" stroke="#D7CCC8" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.8"/>
  </g>

  <!-- Fork & Lime Wedge Accent -->
  <g transform="translate(100, 420)" filter="url(#shadow)" opacity="0.85">
    <rect x="-6" y="-120" width="12" height="240" rx="6" fill="#CFD8DC" stroke="#90A4AE" stroke-width="2"/>
    <path d="M-20,-120 L-20,-160 M-7,-120 L-7,-160 M7,-120 L7,-160 M20,-120 L20,-160" stroke="#90A4AE" stroke-width="4" stroke-linecap="round"/>
  </g>

  <!-- Editorial Watermark / Caption -->
  <rect x="40" y="40" width="340" height="52" rx="10" fill="#1B1B1B" opacity="0.85"/>
  <text x="60" y="73" font-family="'Hanken Grotesk', 'Arial', sans-serif" font-size="16" font-weight="bold" fill="#FFF" letter-spacing="2">MOVA • FOTOGRAFÍA GASTRONÓMICA</text>
</svg>"""

with open('public/IMG_6683.svg', 'w') as f:
    f.write(svg_6683)

# 2. Generate SVG for DSC00659.JPG (Jewelry & Portrait Lookbook)
svg_00659 = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" width="1200" height="900">
  <defs>
    <radialGradient id="sunGlow" cx="60%" cy="30%" r="80%">
      <stop offset="0%" stop-color="#FFF5EB"/>
      <stop offset="50%" stop-color="#F7E6D5"/>
      <stop offset="100%" stop-color="#DEC3A8"/>
    </radialGradient>
    <radialGradient id="skin" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#E8B896"/>
      <stop offset="70%" stop-color="#D99F7B"/>
      <stop offset="100%" stop-color="#C2845E"/>
    </radialGradient>
    <filter id="pearlShine" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Background Warm Tropical Sunlit Ambience -->
  <rect width="1200" height="900" fill="url(#sunGlow)"/>

  <!-- Woman Torso, Neck & Collarbone -->
  <g id="model">
    <!-- Neck and Decomposed Silhouette -->
    <path d="M480,0 L480,240 Q480,380 600,420 Q720,380 720,240 L720,0 Z" fill="url(#skin)"/>
    <!-- Chest / Decollete Area -->
    <path d="M300,400 Q600,450 900,400 L950,900 L250,900 Z" fill="url(#skin)"/>

    <!-- Subtle Collarbones Anatomy Shadows -->
    <path d="M420,380 Q520,395 580,410" stroke="#B87550" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.4"/>
    <path d="M780,380 Q680,395 620,410" stroke="#B87550" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.4"/>

    <!-- Burgundy / Wine Inner Silk Top -->
    <path d="M460,530 Q600,640 740,530 L760,900 L440,900 Z" fill="#6A1B29"/>

    <!-- Crisp Relaxed Open White Linen Shirt (Left and Right Flaps) -->
    <!-- Left Flap -->
    <path d="M220,320 Q360,360 470,520 Q440,700 420,900 L160,900 L120,400 Z" fill="#FDFEFE"/>
    <path d="M470,520 Q400,680 370,900" stroke="#E0E0E0" stroke-width="3" fill="none"/>
    <!-- Right Flap -->
    <path d="M980,320 Q840,360 730,520 Q760,700 780,900 L1040,900 L1080,400 Z" fill="#FDFEFE"/>
    <path d="M730,520 Q800,680 830,900" stroke="#E0E0E0" stroke-width="3" fill="none"/>
  </g>

  <!-- The Artisanal Gemstone & Baroque Freshwater Pearl Necklace -->
  <g id="necklace" filter="url(#pearlShine)">
    <!-- Silk Cord Path (Collar Necklace Curve) -->
    <path d="M460,330 Q600,530 740,330" stroke="#D7CCC8" stroke-width="3" fill="none" stroke-linecap="round"/>

    <!-- Handcrafted Gemstone Beads Along the Arc -->
    <!-- Left Side -->
    <circle cx="475" cy="350" r="14" fill="#00897B" stroke="#004D40" stroke-width="1.5"/><!-- Turquoise/Jade -->
    <circle cx="495" cy="378" r="13" fill="#E65100" stroke="#BF360C" stroke-width="1.5"/><!-- Carnelian -->
    <circle cx="516" cy="405" r="15" fill="#8E24AA" stroke="#4A148C" stroke-width="1.5"/><!-- Amethyst -->
    
    <!-- Baroque Pearl 1 -->
    <ellipse cx="540" cy="430" rx="18" ry="15" fill="#FFFDE7" stroke="#E0E0E0" stroke-width="2"/>
    <circle cx="536" cy="426" r="4" fill="#FFFFFF"/>

    <circle cx="566" cy="450" r="14" fill="#FDD835" stroke="#F57F17" stroke-width="1.5"/><!-- Citrine -->
    <circle cx="590" cy="460" r="15" fill="#1E88E5" stroke="#0D47A1" stroke-width="1.5"/><!-- Lapis -->
    
    <!-- Centerpiece Baroque Pearl 2 -->
    <ellipse cx="616" cy="462" rx="20" ry="17" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="2"/>
    <circle cx="612" cy="457" r="5" fill="#FFFFFF"/>

    <circle cx="642" cy="452" r="14" fill="#E91E63" stroke="#880E4F" stroke-width="1.5"/><!-- Rose Tourmaline -->
    <circle cx="666" cy="434" r="13" fill="#43A047" stroke="#1B5E20" stroke-width="1.5"/><!-- Green Tourmaline -->
    
    <!-- Baroque Pearl 3 -->
    <ellipse cx="688" cy="410" rx="18" ry="15" fill="#FFFDE7" stroke="#E0E0E0" stroke-width="2"/>
    <circle cx="684" cy="406" r="4" fill="#FFFFFF"/>

    <circle cx="708" cy="382" r="14" fill="#FB8C00" stroke="#E65100" stroke-width="1.5"/><!-- Amber Citrine -->
    <circle cx="726" cy="354" r="13" fill="#3949AB" stroke="#1A237E" stroke-width="1.5"/><!-- Sodalite -->
  </g>

  <!-- Editorial Vignette & Branding Tag -->
  <rect x="40" y="40" width="370" height="52" rx="10" fill="#1B1B1B" opacity="0.85"/>
  <text x="60" y="73" font-family="'Hanken Grotesk', 'Arial', sans-serif" font-size="16" font-weight="bold" fill="#FFF" letter-spacing="2">MOVA • JOYERÍA &amp; LOOKBOOK EDITORIAL</text>
</svg>"""

with open('public/DSC00659.svg', 'w') as f:
    f.write(svg_00659)

# 3. Generate SVG for DSC02422.JPG (Close-up Ceviche & Avocado Tostada)
svg_02422 = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" width="1200" height="900">
  <defs>
    <radialGradient id="macroYellow" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#FFD54F"/>
      <stop offset="65%" stop-color="#FFC107"/>
      <stop offset="100%" stop-color="#FFA000"/>
    </radialGradient>
    <filter id="macroShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="25" dy="35" stdDeviation="30" flood-color="#4E2700" flood-opacity="0.4"/>
    </filter>
  </defs>

  <!-- Yellow Gastronomy Background -->
  <rect width="1200" height="900" fill="url(#macroYellow)"/>

  <!-- Centered Hero Cobalt Blue Plate -->
  <g transform="translate(600, 480)" filter="url(#macroShadow)">
    <circle r="360" fill="#0D47A1" stroke="#1565C0" stroke-width="18"/>
    <circle r="320" fill="#1976D2" opacity="0.95"/>
    <circle r="300" fill="#1E88E5" opacity="0.4"/>

    <!-- Square Branded Wax Paper Liner -->
    <rect x="-270" y="-270" width="540" height="540" rx="20" fill="#FFFDF9" transform="rotate(15)" opacity="0.97"/>
    <text x="-120" y="-190" font-family="'Arial Black', sans-serif" font-size="16" fill="#E65100" opacity="0.35" transform="rotate(15)">MARISCOS CHINGONCITO</text>
    <text x="-160" y="210" font-family="'Arial Black', sans-serif" font-size="16" fill="#E65100" opacity="0.35" transform="rotate(15)">CALIDAD &amp; FRESCURA GARANTIZADA</text>

    <!-- Crunchy Crispy Golden Corn Tostada -->
    <circle r="210" fill="#F4B400" stroke="#D39E00" stroke-width="8"/>
    <circle r="185" fill="#E0A300" opacity="0.3"/>

    <!-- Base Layer: Crisp Thin Cucumber Ribbons & Purple Onion -->
    <path d="M-130,-40 Q-40,-120 70,-80" stroke="#689F38" stroke-width="22" stroke-linecap="round" fill="none" opacity="0.85"/>
    <path d="M-80,60 Q20,130 110,50" stroke="#7CB342" stroke-width="24" stroke-linecap="round" fill="none" opacity="0.85"/>
    <!-- Purple Onion Slices -->
    <path d="M-120,30 Q-20,90 90,40" stroke="#8E24AA" stroke-width="9" stroke-linecap="round" fill="none"/>
    <path d="M-60,-70 Q40,-40 100,-80" stroke="#AD1457" stroke-width="8" stroke-linecap="round" fill="none"/>

    <!-- Plump Succulent Mexican Poached Shrimp (Layered Cluster) -->
    <!-- Shrimp 1 (Left) -->
    <path d="M-130,-20 C-110,-90 -30,-80 -20,-30 C-15,10 -80,20 -130,-20 Z" fill="#FF8A65" stroke="#E64A19" stroke-width="4"/>
    <path d="M-110,-30 Q-60,-60 -35,-25" stroke="#FFF" stroke-width="6" fill="none" opacity="0.6"/>

    <!-- Shrimp 2 (Center-Right) -->
    <path d="M20,-60 C60,-100 130,-50 110,10 C90,60 10,20 20,-60 Z" fill="#FF7043" stroke="#D84315" stroke-width="4"/>
    <path d="M45,-45 Q90,-50 90,0" stroke="#FFF" stroke-width="6" fill="none" opacity="0.6"/>

    <!-- Shrimp 3 (Bottom-Center) -->
    <path d="M-80,40 C-40,110 50,100 60,40 C70,-10 -30,0 -80,40 Z" fill="#FF8A65" stroke="#E64A19" stroke-width="4"/>
    <path d="M-50,60 Q0,80 40,40" stroke="#FFF" stroke-width="6" fill="none" opacity="0.6"/>

    <!-- The Avocado Crown: Perfectly Fanned Fresh Creamy Hass Avocado Slices -->
    <!-- Fan Slice 1 -->
    <path d="M-110,-10 Q-30,-70 50,-35 Q-10,-5 -110,-10 Z" fill="#558B2F" stroke="#33691E" stroke-width="3"/>
    <path d="M-90,-12 Q-25,-55 35,-32" stroke="#DCEDC8" stroke-width="12" fill="none" stroke-linecap="round"/>
    <!-- Fan Slice 2 (Center Hero) -->
    <path d="M-90,15 Q0,-55 80,-15 Q10,15 -90,15 Z" fill="#689F38" stroke="#33691E" stroke-width="3"/>
    <path d="M-70,12 Q0,-40 65,-12" stroke="#E8F5E9" stroke-width="14" fill="none" stroke-linecap="round"/>
    <!-- Fan Slice 3 -->
    <path d="M-60,40 Q20,-25 100,10 Q25,38 -60,40 Z" fill="#558B2F" stroke="#33691E" stroke-width="3"/>
    <path d="M-45,35 Q18,-15 80,10" stroke="#DCEDC8" stroke-width="12" fill="none" stroke-linecap="round"/>

    <!-- Seasoning: Tajín & Sea Salt Flakes Glistening -->
    <circle cx="-30" cy="-20" r="3" fill="#D32F2F"/>
    <circle cx="10" cy="-35" r="2.5" fill="#D32F2F"/>
    <circle cx="45" cy="-10" r="3.5" fill="#D32F2F"/>
    <circle cx="-15" cy="15" r="3" fill="#D32F2F"/>
    <circle cx="35" cy="25" r="2.5" fill="#D32F2F"/>
    <circle cx="0" cy="-10" r="2" fill="#FFF" opacity="0.9"/>
    <circle cx="-40" cy="5" r="2.5" fill="#FFF" opacity="0.9"/>
    <circle cx="20" cy="5" r="2" fill="#FFF" opacity="0.9"/>
  </g>

  <!-- Title Badge -->
  <rect x="40" y="40" width="370" height="52" rx="10" fill="#1B1B1B" opacity="0.85"/>
  <text x="60" y="73" font-family="'Hanken Grotesk', 'Arial', sans-serif" font-size="16" font-weight="bold" fill="#FFF" letter-spacing="2">MOVA • MACRO GASTRONOMÍA &amp; DETALLE</text>
</svg>"""

with open('public/DSC02422.svg', 'w') as f:
    f.write(svg_02422)

print("SVGs created successfully!")

# Convert SVGs to JPG using ffmpeg
subprocess.run(['ffmpeg', '-y', '-i', 'public/IMG_6683.svg', '-q:v', '2', 'public/IMG_6683.JPG'], check=True)
subprocess.run(['ffmpeg', '-y', '-i', 'public/DSC00659.svg', '-q:v', '2', 'public/DSC00659.JPG'], check=True)
subprocess.run(['ffmpeg', '-y', '-i', 'public/DSC02422.svg', '-q:v', '2', 'public/DSC02422.JPG'], check=True)
print("JPGs converted successfully!")

# 4. Generate the Drone Video: public/videos/drone-bayview.mp4
# Drone shot pulling back from Bay View Grand at Grand Island
# 10 seconds, 1280x720, h264
subprocess.run([
    'ffmpeg', '-y',
    '-f', 'lavfi', '-i', 'color=c=#031B2A:s=1280x720:d=10:r=30',
    '-filter_complex',
    "[0:v]drawbox=x=0:y=0:w=1280:h=400:color=#0288D1@0.85:t=fill,"
    "drawbox=x=0:y=400:w=1280:h=320:color=#2E7D32@0.9:t=fill,"
    "drawbox=x=440:y=240:w=400:h=260:color=#E0E0E0@0.95:t=fill,"
    "drawbox=x=540:y=300:w=200:h=200:color=#4E342E@0.95:t=fill,"
    "drawbox=x=460:y=255:w=60:h=45:color=#0D47A1@0.95:t=fill,"
    "drawtext=text='BG':fontcolor=white:fontsize=32:x=472:y=262:fontfile=/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf,"
    "drawtext=text='BAY VIEW GRAND':fontcolor=#1A237E:fontsize=26:x=535:y=262:fontfile=/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf,"
    "drawtext=text='at Grand Island':fontcolor=#C2185B:fontsize=15:x=538:y=288,"
    "drawtext=text='● REC [4K 60FPS D-LOG M]':fontcolor=#FF1744:fontsize=20:x=40:y=40:fontfile=/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf,"
    "drawtext=text='GPS\\: 21.1619° N, 86.8515° W  |  ALT\\: %{eif\\:12+t*3\\:d}m  |  SPEED\\: 18 km/h':fontcolor=white:fontsize=18:x=40:y=680,"
    "drawtext=text='TOMA AÉREA DRON - CANCÚN, MÉXICO':fontcolor=#FFCC80:fontsize=18:x=850:y=40,"
    "zoompan=z='min(zoom+0.0015,1.5)':d=300:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1280x720[v]",
    '-map', '[v]',
    '-c:v', 'libx264',
    '-pix_fmt', 'yuv420p',
    'public/videos/drone-bayview.mp4'
], check=True)
print("Drone video created successfully!")

# 5. Generate the Commercial Reel Video: public/videos/reel-asesora.mp4
# Vertical 720x1280 real estate video
subprocess.run([
    'ffmpeg', '-y',
    '-f', 'lavfi', '-i', 'color=c=#0D1B2A:s=720x1280:d=12:r=30',
    '-filter_complex',
    "[0:v]drawbox=x=0:y=0:w=720:h=600:color=#E65100@0.4:t=fill,"
    "drawbox=x=60:y=120:w=600:h=120:color=#1B1B1B@0.85:t=fill,"
    "drawtext=text='¿VAS A COMPRAR PROPIEDAD EN CANCÚN?':fontcolor=#FFD54F:fontsize=26:x=85:y=145:fontfile=/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf,"
    "drawtext=text='EVITA ESTOS 3 ERRORES CLAVE':fontcolor=white:fontsize=22:x=160:y=185:fontfile=/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf,"
    "drawbox=x=60:y=300:w=600:h=100:color=#1B1B1B@0.75:t=fill,"
    "drawtext=text='1. NO VERIFICAR LA LEGALIDAD':fontcolor=#FF5252:fontsize=24:x=90:y=320:fontfile=/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf,"
    "drawtext=text='Propiedades con adeudos o en zona irregular':fontcolor=white:fontsize=18:x=90:y=355,"
    "drawbox=x=60:y=430:w=600:h=100:color=#1B1B1B@0.75:t=fill,"
    "drawtext=text='2. COMPRAR SIN ASESORÍA':fontcolor=#FF5252:fontsize=24:x=90:y=450:fontfile=/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf,"
    "drawtext=text='Un broker certificado protege tu inversión':fontcolor=white:fontsize=18:x=90:y=485,"
    "drawbox=x=60:y=560:w=600:h=100:color=#1B1B1B@0.75:t=fill,"
    "drawtext=text='3. CREER QUE TODO CANCÚN ES BUENO':fontcolor=#FF5252:fontsize=24:x=90:y=580:fontfile=/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf,"
    "drawtext=text='Analiza plusvalía real, drenaje y servicios':fontcolor=white:fontsize=18:x=90:y=615,"
    "drawbox=x=60:y=800:w=600:h=180:color=#E45831@0.95:t=fill,"
    "drawtext=text='¿QUIERES INVERTIR CON ÉXITO?':fontcolor=white:fontsize=28:x=110:y=835:fontfile=/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf,"
    "drawtext=text='Mándame DM y te asesoro hoy mismo':fontcolor=#FFF8E1:fontsize=22:x=130:y=885,"
    "drawtext=text='PRODUCCIÓN MOVA CREATIVE MX':fontcolor=white:fontsize=18:x=200:y=935,"
    "drawbox=x=0:y=1250:w=720:h=30:color=#E45831:t=fill[v]",
    '-map', '[v]',
    '-c:v', 'libx264',
    '-pix_fmt', 'yuv420p',
    'public/videos/reel-asesora.mp4'
], check=True)
print("Reel video created successfully!")
