import React, { useEffect, useRef, useState, useMemo } from 'react';
import { X, ArrowLeft, ArrowRight, Crosshair, Play, RotateCcw } from 'lucide-react';

interface GameModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface GameObject {
  x: number;
  y: number;
  width: number;
  height: number;
  speed?: number;
  type?: 'male' | 'female'; // For enemy variety
  markedForDeletion?: boolean;
}

// --- PIXEL ART ASSETS (DEFINED AS MATRICES) ---
// Colors mapping
const C = {
  _: null, // Transparent
  W: '#FFFFFF', // White (Bunny)
  P: '#FFC0CB', // Pink (Ears/Skin)
  B: '#000000', // Black (Eyes)
  R: '#FF0000', // Red (Hearts/Lips)
  S: '#FFCCAA', // Skin
  H: '#8B4513', // Hair/Poop
  L: '#3b82f6', // Blue Shirt
  D: '#ec4899', // Pink Dress
  G: '#22c55e', // Grass
  F: '#facc15', // Flower center
};

// 12x12 Grid for Bunny Front
const SPRITE_BUNNY_FRONT = [
  [C._, C._, C.P, C._, C._, C.P, C._, C._],
  [C._, C._, C.W, C._, C._, C.W, C._, C._],
  [C._, C._, C.W, C._, C._, C.W, C._, C._],
  [C._, C.W, C.W, C.W, C.W, C.W, C.W, C._],
  [C._, C.W, C.B, C.W, C.W, C.B, C.W, C._], // Eyes
  [C.W, C.W, C.W, C.P, C.P, C.W, C.W, C.W], // Cheeks/Nose
  [C.W, C.W, C.W, C.W, C.W, C.W, C.W, C.W],
  [C._, C.W, C.W, C.W, C.W, C.W, C.W, C._],
  [C._, C.W, C._, C._, C._, C._, C.W, C._], // Feet
];

// 12x12 Grid for Bunny Back (Shooting Stance)
const SPRITE_BUNNY_BACK = [
  [C._, C._, C.W, C._, C._, C.W, C._, C._], // Back of ears (white)
  [C._, C._, C.W, C._, C._, C.W, C._, C._],
  [C._, C._, C.W, C._, C._, C.W, C._, C._],
  [C._, C.W, C.W, C.W, C.W, C.W, C.W, C._],
  [C._, C.W, C.W, C.W, C.W, C.W, C.W, C._],
  [C.W, C.W, C.W, C.W, C.W, C.W, C.W, C.W],
  [C.W, C.W, C.W, C.W, C.W, C.W, C.W, C.W],
  [C._, C.W, C.W, C.W, C.W, C.W, C.W, C._],
  [C._, C.W, C._, C.W, C.W, C._, C.W, C._], // Feet + Tail in middle
];

// Enemy Male (Heart Eyes)
const SPRITE_ENEMY_MALE = [
  [C._, C.H, C.H, C.H, C.H, C.H, C._],
  [C.H, C.S, C.S, C.S, C.S, C.S, C.H],
  [C.S, C.R, C.S, C.S, C.S, C.R, C.S], // Heart Eyes
  [C.S, C.S, C.S, C.S, C.S, C.S, C.S],
  [C.S, C.S, C.R, C.R, C.R, C.S, C.S], // Smile
  [C._, C.L, C.L, C.L, C.L, C.L, C._],
  [C.L, C.L, C.L, C.L, C.L, C.L, C.L],
];

// Enemy Female (Kissing)
const SPRITE_ENEMY_FEMALE = [
  [C._, C.H, C.H, C.H, C.H, C.H, C._],
  [C.H, C.H, C.S, C.S, C.S, C.H, C.H], // More hair
  [C.H, C.S, C.B, C.S, C.B, C.S, C.H],
  [C.H, C.S, C.S, C.R, C.S, C.S, C.H], // Kiss lips
  [C._, C.S, C.S, C.S, C.S, C.S, C._],
  [C._, C.D, C.D, C.D, C.D, C.D, C._],
  [C.D, C.D, C.D, C.D, C.D, C.D, C.D],
];

// --- Sarcastic Quotes ---
const MOTIVATIONAL_QUOTES = [
  "L'amore ti schifa. Ottimo lavoro!",
  "Cuore di ghiaccio! Il coniglio approva.",
  "Sei quasi antipatico quanto me.",
  "Distanziamento sociale: LIVELLO DIO.",
  "Nessuno ti vuole bene. Perfetto!",
  "Hai ucciso il romanticismo!",
  "Soffici ma letali.",
  "L'odio scorre potente in te.",
  "I baci sono sopravvalutati.",
  "Meglio soli che mal accompagnati.",
  "Il tuo cinismo è commovente.",
  "Ne resterà soltanto uno (tu).",
  "Affetto? No grazie."
];

export const GameModal: React.FC<GameModalProps> = ({ isOpen, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<'start' | 'playing' | 'gameover'>('start');
  const [score, setScore] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  
  // Game Refs
  const requestRef = useRef<number>(0);
  const playerRef = useRef<GameObject & { isShooting: boolean; shootTimer: number }>({ 
    x: 0, y: 0, width: 48, height: 48, isShooting: false, shootTimer: 0 
  });
  const bulletsRef = useRef<GameObject[]>([]);
  const enemiesRef = useRef<GameObject[]>([]);
  const particlesRef = useRef<any[]>([]);
  const backgroundDecorRef = useRef<{x: number, y: number, color: string}[]>([]); // Flowers
  
  const lastShotTimeRef = useRef<number>(0);
  const lastSpawnTimeRef = useRef<number>(0);
  const scoreRef = useRef<number>(0);
  const lastMilestoneRef = useRef<number>(0); // Track milestones for quotes

  // Config
  const SCALE = 4; // Pixel scale
  const PLAYER_SPEED = 4;
  const BULLET_SPEED = 6;
  const ENEMY_SPEED_BASE = 1.5;
  const SPAWN_RATE = 1500;

  const keysPressed = useRef<{ [key: string]: boolean }>({});

  // Initialize Background Flowers once
  useEffect(() => {
    if(!isOpen) return;
    const flowers = [];
    for(let i=0; i<30; i++) {
        flowers.push({
            x: Math.random() * 360,
            y: Math.random() * 500,
            color: Math.random() > 0.5 ? C.F : C.W
        });
    }
    backgroundDecorRef.current = flowers;
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => { keysPressed.current[e.code] = true; };
    const handleKeyUp = (e: KeyboardEvent) => { keysPressed.current[e.code] = false; };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      cancelAnimationFrame(requestRef.current);
    };
  }, [isOpen]);

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setToastMessage(null);
    scoreRef.current = 0;
    lastMilestoneRef.current = 0;
    bulletsRef.current = [];
    enemiesRef.current = [];
    particlesRef.current = [];
    lastShotTimeRef.current = 0;
    lastSpawnTimeRef.current = 0;

    if (canvasRef.current) {
      playerRef.current = {
        x: canvasRef.current.width / 2 - 24,
        y: canvasRef.current.height - 60,
        width: 48, // 8 * SCALE approx
        height: 48,
        isShooting: false,
        shootTimer: 0
      };
    }
    
    requestRef.current = requestAnimationFrame(gameLoop);
  };

  // --- DRAWING HELPER ---
  const drawSprite = (
    ctx: CanvasRenderingContext2D, 
    matrix: (string | null)[][], 
    x: number, 
    y: number, 
    scale: number
  ) => {
    matrix.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        if (col) {
          ctx.fillStyle = col;
          ctx.fillRect(x + colIndex * scale, y + rowIndex * scale, scale, scale);
        }
      });
    });
  };

  const gameLoop = (timestamp: number) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // --- DRAW BACKGROUND ---
    // Grassy Field
    ctx.fillStyle = '#4ade80'; // Light green
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw Flowers (Decor)
    backgroundDecorRef.current.forEach(f => {
        ctx.fillStyle = '#22c55e'; // Darker green stem/grass
        ctx.fillRect(f.x, f.y + 4, 4, 4);
        ctx.fillStyle = f.color;
        ctx.fillRect(f.x, f.y, 4, 4);
    });

    // --- UPDATE PLAYER ---
    if (keysPressed.current['ArrowLeft']) playerRef.current.x -= PLAYER_SPEED;
    if (keysPressed.current['ArrowRight']) playerRef.current.x += PLAYER_SPEED;
    
    // Clamp
    if (playerRef.current.x < 0) playerRef.current.x = 0;
    if (playerRef.current.x > canvas.width - playerRef.current.width) playerRef.current.x = canvas.width - playerRef.current.width;

    // Update Shooting Animation State
    if (timestamp < playerRef.current.shootTimer) {
        playerRef.current.isShooting = true;
    } else {
        playerRef.current.isShooting = false;
    }

    // Shoot (Spacebar)
    if (keysPressed.current['Space'] && timestamp - lastShotTimeRef.current > 400) {
      shootBullet(timestamp);
      lastShotTimeRef.current = timestamp;
    }

    // Spawn Enemies
    if (timestamp - lastSpawnTimeRef.current > SPAWN_RATE) {
      enemiesRef.current.push({
        x: Math.random() * (canvas.width - 40),
        y: -40,
        width: 40,
        height: 40,
        speed: ENEMY_SPEED_BASE + (scoreRef.current / 500),
        type: Math.random() > 0.5 ? 'male' : 'female'
      });
      lastSpawnTimeRef.current = timestamp;
    }

    // Move Bullets
    bulletsRef.current.forEach(b => b.y -= BULLET_SPEED);
    bulletsRef.current = bulletsRef.current.filter(b => b.y > -20 && !b.markedForDeletion);

    // Move Enemies
    enemiesRef.current.forEach(e => {
        if (e.speed) e.y += e.speed;
    });

    // --- LOGIC: COLLISIONS ---
    
    // Enemy touches Player or Bottom
    for (const enemy of enemiesRef.current) {
        if (
            playerRef.current.x < enemy.x + enemy.width &&
            playerRef.current.x + playerRef.current.width > enemy.x &&
            playerRef.current.y < enemy.y + enemy.height &&
            playerRef.current.height + playerRef.current.y > enemy.y
        ) {
            setGameState('gameover');
            return;
        }
        if (enemy.y > canvas.height) {
            setGameState('gameover');
            return;
        }
    }

    // Bullet hits Enemy
    bulletsRef.current.forEach(bullet => {
        enemiesRef.current.forEach(enemy => {
            if (
                bullet.x < enemy.x + enemy.width &&
                bullet.x + bullet.width > enemy.x &&
                bullet.y < enemy.y + enemy.height &&
                bullet.height + bullet.y > enemy.y
            ) {
                bullet.markedForDeletion = true;
                enemy.markedForDeletion = true;
                scoreRef.current += 10;
                setScore(scoreRef.current);

                // --- QUOTE MILESTONE CHECK ---
                const currentMilestone = Math.floor(scoreRef.current / 500);
                if (currentMilestone > lastMilestoneRef.current && currentMilestone > 0) {
                    lastMilestoneRef.current = currentMilestone;
                    const randomQuote = MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)];
                    setToastMessage(randomQuote);
                    setTimeout(() => setToastMessage(null), 3000); // Show for 3 seconds
                }

                // Particles (Hearts breaking)
                for(let i=0; i<4; i++) {
                    particlesRef.current.push({
                        x: enemy.x + enemy.width/2,
                        y: enemy.y + enemy.height/2,
                        vx: (Math.random() - 0.5) * 6,
                        vy: (Math.random() - 0.5) * 6,
                        life: 1.0,
                        color: C.R,
                        size: 4 + Math.random() * 4
                    });
                }
            }
        });
    });
    enemiesRef.current = enemiesRef.current.filter(e => !e.markedForDeletion);

    // Update Particles
    particlesRef.current.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.05;
    });
    particlesRef.current = particlesRef.current.filter(p => p.life > 0);


    // --- RENDER OBJECTS ---

    // Draw Player
    // If shooting, draw Back Sprite, otherwise Front Sprite
    const playerSprite = playerRef.current.isShooting ? SPRITE_BUNNY_BACK : SPRITE_BUNNY_FRONT;
    drawSprite(ctx, playerSprite, playerRef.current.x, playerRef.current.y, 6); // Scale up to 6 for player

    // Draw Bullets (Pixel Poop)
    bulletsRef.current.forEach(b => {
        // Draw a brownish circle/square
        ctx.fillStyle = '#5D4037'; // Poop brown
        ctx.beginPath();
        ctx.arc(b.x + b.width/2, b.y + b.height/2, 6, 0, Math.PI * 2);
        ctx.fill();
        
        // Shine
        ctx.fillStyle = '#8D6E63';
        ctx.fillRect(b.x + b.width/2 - 2, b.y + b.height/2 - 2, 2, 2);
    });

    // Draw Enemies
    enemiesRef.current.forEach(e => {
        const sprite = e.type === 'male' ? SPRITE_ENEMY_MALE : SPRITE_ENEMY_FEMALE;
        drawSprite(ctx, sprite, e.x, e.y, 5); // Scale 5 for enemies
    });

    // Draw Particles
    particlesRef.current.forEach(p => {
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
        ctx.globalAlpha = 1.0;
    });

    requestRef.current = requestAnimationFrame(gameLoop);
  };

  const shootBullet = (timestamp: number) => {
    // Turn bunny around for 250ms
    playerRef.current.shootTimer = timestamp + 250;
    
    bulletsRef.current.push({
      x: playerRef.current.x + 12, // Align with center/tail
      y: playerRef.current.y + 20, // Start slightly lower (from butt)
      width: 12,
      height: 12
    });
  };

  // Mobile Controls
  const moveLeft = () => { if (playerRef.current) playerRef.current.x -= 20; };
  const moveRight = () => { if (playerRef.current) playerRef.current.x += 20; };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans" aria-modal="true">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm" onClick={onClose}></div>

      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="relative bg-slate-800 rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border-4 border-pink-500 flex flex-col h-[85vh] md:h-auto">
          
          {/* Header */}
          <div className="bg-pink-500 px-4 py-3 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-2 text-white">
                <span className="font-cartoony font-bold text-lg">Difendi lo Spazio Vitale!</span>
            </div>
            <button onClick={onClose} className="text-white hover:bg-pink-600 rounded-full p-1 transition">
              <X size={24} />
            </button>
          </div>

          {/* Game Area */}
          <div className="relative flex-grow bg-green-200 flex items-center justify-center overflow-hidden cursor-crosshair">
             
             {/* Canvas */}
             <canvas 
                ref={canvasRef} 
                width={360} 
                height={500} 
                className="w-full h-full object-contain image-pixelated"
                style={{ imageRendering: 'pixelated' }}
             />

             {/* UI Overlay: START SCREEN */}
             {gameState === 'start' && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/80 text-white p-6 text-center backdrop-blur-sm">
                    <h2 className="text-4xl font-cartoony font-bold mb-4 text-pink-400">No Baci!</h2>
                    <p className="mb-6 text-slate-300">
                        Gli umani vogliono abbracciarti.<br/>
                        <span className="text-yellow-400 font-bold">Tu vuoi solo stare da solo.</span>
                    </p>
                    <div className="space-y-2 mb-8 text-sm bg-slate-800 p-4 rounded-xl border border-slate-700">
                        <p>⬅️ ➡️ <span className="text-slate-400">Muoviti</span></p>
                        <p>SPACE <span className="text-slate-400">Spara Cacchine</span></p>
                    </div>
                    <button 
                        onClick={startGame}
                        className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-bold font-cartoony text-xl transition transform hover:scale-105 border-b-4 border-pink-700 active:border-0 active:translate-y-1"
                    >
                        <Play fill="currentColor" /> INIZIA
                    </button>
                </div>
             )}

             {/* UI Overlay: GAME OVER */}
             {gameState === 'gameover' && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/90 text-white p-6 text-center backdrop-blur-sm">
                    <h2 className="text-4xl font-cartoony font-bold mb-2 text-red-400">Oh no!</h2>
                    <p className="text-xl font-bold mb-6">Sei stato sbaciucchiato.</p>
                    
                    <div className="bg-slate-800 px-6 py-4 rounded-2xl border-2 border-pink-500 mb-8 transform -rotate-2">
                        <p className="text-xs text-pink-300 uppercase font-bold tracking-widest">Punteggio Finale</p>
                        <p className="text-5xl font-cartoony font-bold">{score}</p>
                    </div>

                    <button 
                        onClick={startGame}
                        className="flex items-center gap-2 bg-white text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full font-bold font-cartoony text-lg transition transform hover:scale-105"
                    >
                        <RotateCcw size={20} /> Riprova
                    </button>
                </div>
             )}

             {/* Score Overlay (Playing) */}
             {gameState === 'playing' && (
                 <>
                    <div className="absolute top-4 right-4 bg-white/90 px-4 py-2 rounded-xl border-2 border-pink-500 shadow-lg z-10">
                        <span className="text-pink-600 font-cartoony font-bold text-xl">{score}</span>
                    </div>

                    {/* TOAST NOTIFICATION FOR MILESTONES */}
                    {toastMessage && (
                        <div className="absolute top-1/4 left-0 right-0 flex justify-center z-20 pointer-events-none">
                             <div className="bg-yellow-400 text-slate-900 font-cartoony font-bold text-center px-6 py-4 rounded-3xl border-4 border-white shadow-xl transform animate-bounce mx-4">
                                {toastMessage}
                             </div>
                        </div>
                    )}
                 </>
             )}
          </div>

          {/* Controls Footer (Mobile & Desktop visual) */}
          <div className="bg-slate-800 p-4 grid grid-cols-3 gap-4 shrink-0 border-t border-slate-700">
             <button 
                className="bg-slate-700 active:bg-pink-500 text-white rounded-xl p-4 flex items-center justify-center transition-colors shadow-lg border-b-4 border-slate-900 active:border-0 active:translate-y-1"
                onPointerDown={() => keysPressed.current['ArrowLeft'] = true}
                onPointerUp={() => keysPressed.current['ArrowLeft'] = false}
                onPointerLeave={() => keysPressed.current['ArrowLeft'] = false}
             >
                <ArrowLeft size={32} />
             </button>
             
             <button 
                className="bg-pink-600 active:bg-pink-700 text-white rounded-full p-2 flex items-center justify-center transform -translate-y-6 shadow-xl border-4 border-slate-800 group"
                onClick={() => shootBullet(performance.now())}
             >
                <div className="bg-white/20 p-4 rounded-full group-active:bg-white/40">
                    <span className="text-2xl">💩</span>
                </div>
             </button>

             <button 
                className="bg-slate-700 active:bg-pink-500 text-white rounded-xl p-4 flex items-center justify-center transition-colors shadow-lg border-b-4 border-slate-900 active:border-0 active:translate-y-1"
                onPointerDown={() => keysPressed.current['ArrowRight'] = true}
                onPointerUp={() => keysPressed.current['ArrowRight'] = false}
                onPointerLeave={() => keysPressed.current['ArrowRight'] = false}
             >
                <ArrowRight size={32} />
             </button>
          </div>
          
          <div className="bg-slate-900 text-center py-1 text-[10px] text-slate-500">
             Usa Frecce + Spazio (Desktop) o Tasti (Mobile)
          </div>

        </div>
      </div>
    </div>
  );
};