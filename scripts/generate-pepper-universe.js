// scripts/generate-pepper-universe.js

// Generates /public/pepper-universe.mp4 from /public/pepper.png

// - crisp pixel art (no smoothing)

// - diagonal drift with seamless wrap-around

// - subtle star parallax

// - ~8s loop at 30 fps



const fs = require("fs");

const path = require("path");

const { createCanvas, loadImage } = require("canvas");

const ffmpegPath = require("ffmpeg-static");

const ffmpeg = require("fluent-ffmpeg");



const WIDTH = 1280;

const HEIGHT = 720;

const FPS = 30;

const SECONDS = 17;

const FRAMES = FPS * SECONDS;



// resolve paths safely

const PROJECT_ROOT = process.cwd();

const PUBLIC_DIR = path.join(PROJECT_ROOT, "public");

const PEPPER_IMG = path.join(PUBLIC_DIR, "pepper.png");

const OUTPUT_MP4 = path.join(PUBLIC_DIR, "pepper-universe.mp4");



// simple star layers for parallax
function makeStars(count, speedMultiplier = 1) {
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push({
      x: Math.random() * WIDTH,
      y: Math.random() * HEIGHT,
      r: Math.random() * 1.5 + 0.5,
      speed: (WIDTH / FRAMES) * speedMultiplier, // perfecte cyclus
      alpha: Math.random() * 0.5 + 0.3,
    });
  }
  return arr;
}



(async () => {

  // sanity checks

  if (!fs.existsSync(PEPPER_IMG)) {

    console.error(`❌ Missing pepper image at: ${PEPPER_IMG}`);

    console.error(`Place your sprite as 'public/pepper.png' (lowercase).`);

    process.exit(1);

  }



  console.log("✅ Using pepper sprite:", PEPPER_IMG);

  console.log("🎬 Writing:", OUTPUT_MP4);



  // canvas

  const canvas = createCanvas(WIDTH, HEIGHT);

  const ctx = canvas.getContext("2d", { alpha: false });

  ctx.patternQuality = "nearest";

  ctx.quality = "nearest";

  ctx.antialias = "none";

  ctx.imageSmoothingEnabled = false; // CRUCIAL for crisp pixels



  // load sprites with error handling
  let pepperImg, dppImg;
  try {
    pepperImg = await loadImage(PEPPER_IMG);
    console.log("✓ Loaded pepper.png");
  } catch (err) {
    console.error("Failed to load pepper.png:", err.message);
    throw err;
  }
  
  try {
    dppImg = await loadImage(path.join(PUBLIC_DIR, "DPP.png"));
    console.log("✓ Loaded DPP.png");
  } catch (err) {
    console.error("Failed to load DPP.png:", err.message);
    throw err;
  }



  // desired on-screen size (scale your sprite up in whole-number multiples)
  const SCALE = 0.15; // Kleiner voor subtiel carrousel effect
  const PEPPER_W = Math.round(pepperImg.width * SCALE);
  const PEPPER_H = Math.round(pepperImg.height * SCALE);
  
  // DPP is groter
  const DPP_SCALE = 0.25; // Groter dan normale peppers
  const DPP_W = Math.round(dppImg.width * DPP_SCALE);
  const DPP_H = Math.round(dppImg.height * DPP_SCALE);



  // Meerdere peppers op verschillende posities en snelheden
  const peppers = [
    { 
      x: -PEPPER_W, 
      y: HEIGHT * 0.2 - PEPPER_H / 2, // Boven
      baseY: HEIGHT * 0.2 - PEPPER_H / 2,
      speed: (WIDTH + PEPPER_W * 2) / FRAMES,
      delay: 0,
      rotation: 0,
      effect: 'none',
      img: pepperImg,
      w: PEPPER_W,
      h: PEPPER_H
    },
    { 
      x: -PEPPER_W, 
      y: HEIGHT * 0.35 - PEPPER_H / 2, // Tussen boven en midden
      baseY: HEIGHT * 0.35 - PEPPER_H / 2,
      speed: (WIDTH + PEPPER_W * 2) / (FRAMES * 0.8),
      delay: FRAMES * 0.3,
      rotation: 0,
      effect: 'spin',
      img: pepperImg,
      w: PEPPER_W,
      h: PEPPER_H
    },
    { 
      x: -PEPPER_W, 
      y: HEIGHT * 0.8 - PEPPER_H / 2, // Onder
      baseY: HEIGHT * 0.8 - PEPPER_H / 2,
      speed: (WIDTH + PEPPER_W * 2) / (FRAMES * 1.2),
      delay: FRAMES * 0.6,
      rotation: 0,
      effect: 'spiral',
      img: pepperImg,
      w: PEPPER_W,
      h: PEPPER_H
    },
    {
      x: -DPP_W,
      y: HEIGHT * 0.5 - DPP_H / 2, // Midden van het scherm
      baseY: HEIGHT * 0.5 - DPP_H / 2,
      speed: (WIDTH + DPP_W * 2) / (FRAMES * 0.6),
      delay: FRAMES * 0.15,
      rotation: 0,
      effect: 'dpp',
      img: dppImg,
      w: DPP_W,
      h: DPP_H
    },
  ];



  // stars met verschillende snelheden die allemaal perfect loopen
  const starsBack = makeStars(220, 0.6); // slower layer
  const starsFront = makeStars(120, 1.2); // faster layer
  
  // Stralende sterren (groter en helderder)
  const glowingStars = [];
  for (let i = 0; i < 20; i++) {
    glowingStars.push({
      x: Math.random() * WIDTH,
      y: Math.random() * HEIGHT,
      r: 3 + Math.random() * 4, // 3-7px radius (groter)
      alpha: 0.9 + Math.random() * 0.1, // helderder
      speed: (WIDTH / FRAMES) * (0.3 + Math.random() * 0.2), // zeer langzaam
      pulseSpeed: 0.02 + Math.random() * 0.03,
      pulseOffset: Math.random() * Math.PI * 2
    });
  }



  // glow helpers - aangepast voor betere blending met rode achtergrond
  function drawGradientBG() {
    // Zeer donkere achtergrond (bijna zwart) zodat screen blend mode werkt
    ctx.fillStyle = "#010000";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
  }



  function drawStars(arr) {
    ctx.save();
    for (const s of arr) {
      ctx.globalAlpha = s.alpha;
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();

      // drift right; wrap around met modulo voor perfecte loop
      s.x = (s.x + s.speed) % WIDTH;
    }
    ctx.restore();
  }
  
  function drawGlowingStars(arr, frame) {
    ctx.save();
    for (const s of arr) {
      // Pulserende alpha voor twinkle effect
      const pulse = Math.sin(frame * s.pulseSpeed + s.pulseOffset) * 0.3 + 0.7;
      const currentAlpha = s.alpha * pulse;
      
      ctx.globalAlpha = currentAlpha;
      
      // Teken 4-puntige ster met glow stralen
      const rayLength = s.r * 6;
      const rayWidth = s.r * 0.8;
      
      // Horizontale straal
      const hGradient = ctx.createLinearGradient(s.x - rayLength, s.y, s.x + rayLength, s.y);
      hGradient.addColorStop(0, "rgba(255, 255, 255, 0)");
      hGradient.addColorStop(0.2, `rgba(255, 255, 255, ${currentAlpha * 0.3})`);
      hGradient.addColorStop(0.5, `rgba(255, 255, 255, ${currentAlpha})`);
      hGradient.addColorStop(0.8, `rgba(255, 255, 255, ${currentAlpha * 0.3})`);
      hGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      
      ctx.fillStyle = hGradient;
      ctx.fillRect(s.x - rayLength, s.y - rayWidth / 2, rayLength * 2, rayWidth);
      
      // Verticale straal
      const vGradient = ctx.createLinearGradient(s.x, s.y - rayLength, s.x, s.y + rayLength);
      vGradient.addColorStop(0, "rgba(255, 255, 255, 0)");
      vGradient.addColorStop(0.2, `rgba(255, 255, 255, ${currentAlpha * 0.3})`);
      vGradient.addColorStop(0.5, `rgba(255, 255, 255, ${currentAlpha})`);
      vGradient.addColorStop(0.8, `rgba(255, 255, 255, ${currentAlpha * 0.3})`);
      vGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      
      ctx.fillStyle = vGradient;
      ctx.fillRect(s.x - rayWidth / 2, s.y - rayLength, rayWidth, rayLength * 2);
      
      // Diagonale stralen (4-puntige ster wordt 8-puntig)
      ctx.save();
      ctx.translate(s.x, s.y);
      ctx.rotate(Math.PI / 4);
      
      const dRayLength = rayLength * 0.7;
      const dRayWidth = rayWidth * 0.6;
      
      // Diagonaal 1
      const d1Gradient = ctx.createLinearGradient(-dRayLength, 0, dRayLength, 0);
      d1Gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
      d1Gradient.addColorStop(0.3, `rgba(255, 255, 255, ${currentAlpha * 0.2})`);
      d1Gradient.addColorStop(0.5, `rgba(255, 255, 255, ${currentAlpha * 0.5})`);
      d1Gradient.addColorStop(0.7, `rgba(255, 255, 255, ${currentAlpha * 0.2})`);
      d1Gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      
      ctx.fillStyle = d1Gradient;
      ctx.fillRect(-dRayLength, -dRayWidth / 2, dRayLength * 2, dRayWidth);
      
      // Diagonaal 2
      const d2Gradient = ctx.createLinearGradient(0, -dRayLength, 0, dRayLength);
      d2Gradient.addColorStop(0, "rgba(255, 255, 255, 0)");
      d2Gradient.addColorStop(0.3, `rgba(255, 255, 255, ${currentAlpha * 0.2})`);
      d2Gradient.addColorStop(0.5, `rgba(255, 255, 255, ${currentAlpha * 0.5})`);
      d2Gradient.addColorStop(0.7, `rgba(255, 255, 255, ${currentAlpha * 0.2})`);
      d2Gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      
      ctx.fillStyle = d2Gradient;
      ctx.fillRect(-dRayWidth / 2, -dRayLength, dRayWidth, dRayLength * 2);
      
      ctx.restore();
      
      // Teken heldere kern met glow
      const coreGradient = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 3);
      coreGradient.addColorStop(0, `rgba(255, 255, 255, ${currentAlpha})`);
      coreGradient.addColorStop(0.3, `rgba(255, 255, 255, ${currentAlpha * 0.8})`);
      coreGradient.addColorStop(0.6, `rgba(255, 255, 255, ${currentAlpha * 0.3})`);
      coreGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      
      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r * 3, 0, Math.PI * 2);
      ctx.fill();
      
      // drift right; wrap around met modulo voor perfecte loop
      s.x = (s.x + s.speed) % WIDTH;
    }
    ctx.restore();
  }



  // setup ffmpeg with stdin piping

  ffmpeg.setFfmpegPath(ffmpegPath);

  const { Readable } = require("stream");

  const frameStream = new Readable({

    read() {} // no-op, we push data manually

  });



  const command = ffmpeg(frameStream)
    .inputOptions(["-f", "image2pipe", "-vcodec", "png", "-r", String(FPS)])
    .outputOptions([
      "-pix_fmt", "yuv420p",
      "-movflags", "+faststart",
      "-preset", "medium",
      "-crf", "22",
    ])
    .videoCodec("libx264")
    .size(`${WIDTH}x${HEIGHT}`)
    .format("mp4")
    .save(OUTPUT_MP4);



  command.on("start", () => {

    console.log("🚀 FFmpeg started");

  });

  command.on("error", (err) => {

    console.error("❌ FFmpeg error:", err.message);

    process.exit(1);

  });

  command.on("end", () => {

    console.log("✅ Done:", OUTPUT_MP4);

  });



  // stream frames into ffmpeg

  for (let f = 0; f < FRAMES; f++) {

    // background

    drawGradientBG();

    // stralende sterren (eerst, op de achtergrond)
    drawGlowingStars(glowingStars, f);

    // parallax stars
    drawStars(starsBack);
    drawStars(starsFront);



    // Teken alle peppers
    peppers.forEach((pepper) => {
      // Check of deze pepper al gestart moet zijn (delay)
      if (f < pepper.delay) return;
      
      // Update positie
      pepper.x += pepper.speed;
      
      // Als pepper rechts uit beeld is, reset naar links
      if (pepper.x > WIDTH) {
        pepper.x = -pepper.w;
      }
      
      // Update rotatie en positie gebaseerd op effect
      if (pepper.effect === 'spin') {
        // Roteer om eigen as (2 volledige rotaties per cyclus)
        pepper.rotation += (Math.PI * 4) / FRAMES;
      } else if (pepper.effect === 'spiral') {
        // Spiraal beweging (op en neer terwijl rotatie)
        const progress = (f - pepper.delay) / FRAMES;
        pepper.y = pepper.baseY + Math.sin(progress * Math.PI * 4) * 80; // 80px amplitude
        pepper.rotation += (Math.PI * 2) / FRAMES; // 1 rotatie per cyclus
      } else if (pepper.effect === 'dpp') {
        // DPP beweegt sneller en heeft lichte bobbing
        const progress = (f - pepper.delay) / FRAMES;
        pepper.y = pepper.baseY + Math.sin(progress * Math.PI * 6) * 30; // subtiele bobbing
      }
      
      // Teken pepper met rotatie
      ctx.save();
      ctx.imageSmoothingEnabled = false;
      
      // Voor DPP: gebruik pixel-level filtering om donkere achtergrond te verwijderen
      if (pepper.effect === 'dpp') {
        // Teken eerst naar een tijdelijke canvas
        const tempCanvas = createCanvas(pepper.w, pepper.h);
        const tempCtx = tempCanvas.getContext('2d');
        tempCtx.imageSmoothingEnabled = false;
        
        const centerX = pepper.w / 2;
        const centerY = pepper.h / 2;
        tempCtx.translate(centerX, centerY);
        tempCtx.rotate(pepper.rotation);
        tempCtx.translate(-centerX, -centerY);
        tempCtx.drawImage(pepper.img, 0, 0, pepper.w, pepper.h);
        
        // Haal pixel data op
        const imageData = tempCtx.getImageData(0, 0, pepper.w, pepper.h);
        const data = imageData.data;
        
        // Filter donkere pixels: maak ze volledig transparant
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const brightness = (r + g + b) / 3;
          
          // Als pixel donkerder is dan threshold (25 = alleen zwart), maak transparant
          if (brightness < 25) {
            data[i + 3] = 0; // Alpha = 0 (volledig transparant)
          }
        }
        
        tempCtx.putImageData(imageData, 0, 0);
        
        // Teken de gefilterde image op de main canvas
        ctx.drawImage(tempCanvas, pepper.x, pepper.y);
      } else {
        // Normale peppers: teken eerst naar temp canvas en filter donkere pixels
        const tempCanvas = createCanvas(pepper.w, pepper.h);
        const tempCtx = tempCanvas.getContext('2d');
        tempCtx.imageSmoothingEnabled = false;
        
        const centerX = pepper.w / 2;
        const centerY = pepper.h / 2;
        tempCtx.translate(centerX, centerY);
        tempCtx.rotate(pepper.rotation);
        tempCtx.translate(-centerX, -centerY);
        tempCtx.drawImage(pepper.img, 0, 0, pepper.w, pepper.h);
        
        // Haal pixel data op
        const imageData = tempCtx.getImageData(0, 0, pepper.w, pepper.h);
        const data = imageData.data;
        
        // Filter donkere pixels: maak ze volledig transparant
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const brightness = (r + g + b) / 3;
          
          // Als pixel donkerder is dan threshold (30 voor normale peppers), maak transparant
          if (brightness < 30) {
            data[i + 3] = 0; // Alpha = 0 (volledig transparant)
          }
        }
        
        tempCtx.putImageData(imageData, 0, 0);
        
        // Teken de gefilterde image op de main canvas
        ctx.drawImage(tempCanvas, pepper.x, pepper.y);
      }
      
      ctx.restore();
    });



    // encode this frame

    const pngBuffer = canvas.toBuffer("image/png");

    frameStream.push(pngBuffer);

  }



  frameStream.push(null); // end stream

})();
