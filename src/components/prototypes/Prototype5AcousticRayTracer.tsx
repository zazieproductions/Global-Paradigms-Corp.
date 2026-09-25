import React, { useState, useEffect, useRef } from 'react';
import { audioService } from '../../audio/audioEngine';
import { Play, Volume2, Move, Box, Zap, RotateCcw } from 'lucide-react';

interface Point {
  x: number;
  y: number;
}

interface RayHit {
  timeMs: number;
  energy: number;
  order: number;
}

export const Prototype5AcousticRayTracer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Room geometry and coordinates (normalized 0 to 1)
  const [sourcePos, setSourcePos] = useState<Point>({ x: 0.25, y: 0.35 });
  const [micPos, setMicPos] = useState<Point>({ x: 0.75, y: 0.65 });
  const [wallMaterial, setWallMaterial] = useState<'slate' | 'cistern' | 'metamaterial' | 'anechoic'>('cistern');
  const [numRays, setNumRays] = useState(36);
  const [maxBounces, setMaxBounces] = useState(3);
  const [draggingEntity, setDraggingEntity] = useState<'source' | 'mic' | null>(null);

  const [simulatedHits, setSimulatedHits] = useState<RayHit[]>([]);

  // Wall absorption coefficients
  const absorption = {
    slate: 0.03, // 97% reflective
    cistern: 0.08, // 92% reflective
    metamaterial: 0.25, // anomalous phase reflection
    anechoic: 0.94 // 6% reflective
  }[wallMaterial];

  // 2D Ray tracing calculation
  const traceAcousticRays = (s: Point, m: Point) => {
    const hits: RayHit[] = [];
    const speedOfSound = 343; // m/s
    const roomWidthMeters = 24; // 24m wide room
    const roomHeightMeters = 16; // 16m deep

    for (let i = 0; i < numRays; i++) {
      const angle = (i / numRays) * Math.PI * 2;
      let rx = s.x;
      let ry = s.y;
      let dx = Math.cos(angle);
      let dy = Math.sin(angle);
      let totalDistance = 0;
      let energy = 1.0;

      for (let b = 0; b < maxBounces; b++) {
        // Find intersection with unit box [0, 1] x [0, 1]
        let tMin = 1e9;
        let hitAxis: 'x' | 'y' = 'x';

        if (dx > 0) {
          const t = (1 - rx) / dx;
          if (t > 0.0001 && t < tMin) {
            tMin = t;
            hitAxis = 'x';
          }
        } else if (dx < 0) {
          const t = (0 - rx) / dx;
          if (t > 0.0001 && t < tMin) {
            tMin = t;
            hitAxis = 'x';
          }
        }

        if (dy > 0) {
          const t = (1 - ry) / dy;
          if (t > 0.0001 && t < tMin) {
            tMin = t;
            hitAxis = 'y';
          }
        } else if (dy < 0) {
          const t = (0 - ry) / dy;
          if (t > 0.0001 && t < tMin) {
            tMin = t;
            hitAxis = 'y';
          }
        }

        const nextX = rx + dx * tMin;
        const nextY = ry + dy * tMin;

        // Check distance to receiver mic
        // distance from segment (rx, ry) -> (nextX, nextY) to m
        const segLen = Math.hypot(nextX - rx, nextY - ry);
        const toMicX = m.x - rx;
        const toMicY = m.y - ry;
        const proj = Math.max(0, Math.min(segLen, (toMicX * dx + toMicY * dy)));
        const closestX = rx + dx * proj;
        const closestY = ry + dy * proj;
        const distToMic = Math.hypot(m.x - closestX, m.y - closestY);

        if (distToMic < 0.06) {
          // Ray passed near listener
          const distMeters = (totalDistance + proj) * Math.hypot(roomWidthMeters, roomHeightMeters);
          const timeMs = (distMeters / speedOfSound) * 1000;
          hits.push({
            timeMs,
            energy: energy * (1 - distToMic / 0.06),
            order: b
          });
        }

        totalDistance += segLen;
        energy *= (1 - absorption);

        // Reflect direction
        if (hitAxis === 'x') {
          dx = -dx;
          if (wallMaterial === 'metamaterial') dx += (Math.random() - 0.5) * 0.4;
        } else {
          dy = -dy;
          if (wallMaterial === 'metamaterial') dy += (Math.random() - 0.5) * 0.4;
        }

        // Renormalize direction
        const dLen = Math.hypot(dx, dy);
        dx /= dLen;
        dy /= dLen;

        rx = nextX;
        ry = nextY;
      }
    }

    hits.sort((a, b) => a.timeMs - b.timeMs);
    setSimulatedHits(hits.slice(0, 32));
  };

  // Canvas render
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.fillStyle = '#080a0f';
    ctx.fillRect(0, 0, width, height);

    // Draw room perimeter walls
    ctx.strokeStyle = wallMaterial === 'slate' ? '#38bdf8' : wallMaterial === 'cistern' ? '#d4a359' : wallMaterial === 'metamaterial' ? '#a855f7' : '#64748b';
    ctx.lineWidth = 4;
    ctx.strokeRect(10, 10, width - 20, height - 20);

    // Wall texture markings
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    for (let x = 20; x < width - 20; x += 30) {
      ctx.moveTo(x, 10);
      ctx.lineTo(x, height - 10);
    }
    for (let y = 20; y < height - 20; y += 30) {
      ctx.moveTo(10, y);
      ctx.lineTo(width - 10, y);
    }
    ctx.stroke();

    // Ray tracing draw
    const sPixel = { x: 10 + sourcePos.x * (width - 20), y: 10 + sourcePos.y * (height - 20) };
    const mPixel = { x: 10 + micPos.x * (width - 20), y: 10 + micPos.y * (height - 20) };

    for (let i = 0; i < numRays; i++) {
      const angle = (i / numRays) * Math.PI * 2;
      let rx = sourcePos.x;
      let ry = sourcePos.y;
      let dx = Math.cos(angle);
      let dy = Math.sin(angle);

      ctx.beginPath();
      ctx.moveTo(10 + rx * (width - 20), 10 + ry * (height - 20));

      for (let b = 0; b < maxBounces; b++) {
        let tMin = 1e9;
        let hitAxis: 'x' | 'y' = 'x';

        if (dx > 0) {
          const t = (1 - rx) / dx;
          if (t > 0.0001 && t < tMin) { tMin = t; hitAxis = 'x'; }
        } else if (dx < 0) {
          const t = (0 - rx) / dx;
          if (t > 0.0001 && t < tMin) { tMin = t; hitAxis = 'x'; }
        }

        if (dy > 0) {
          const t = (1 - ry) / dy;
          if (t > 0.0001 && t < tMin) { tMin = t; hitAxis = 'y'; }
        } else if (dy < 0) {
          const t = (0 - ry) / dy;
          if (t > 0.0001 && t < tMin) { tMin = t; hitAxis = 'y'; }
        }

        const nextX = rx + dx * tMin;
        const nextY = ry + dy * tMin;

        ctx.lineTo(10 + nextX * (width - 20), 10 + nextY * (height - 20));

        if (hitAxis === 'x') dx = -dx;
        else dy = -dy;

        rx = nextX;
        ry = nextY;
      }

      ctx.strokeStyle = `rgba(0, 229, 255, ${0.12 - (i % 2) * 0.04})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Direct line of sight from S to M
    ctx.strokeStyle = 'rgba(255, 215, 0, 0.4)';
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(sPixel.x, sPixel.y);
    ctx.lineTo(mPixel.x, mPixel.y);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw Source (S)
    ctx.beginPath();
    ctx.arc(sPixel.x, sPixel.y, 8, 0, Math.PI * 2);
    ctx.fillStyle = '#ff4d4d';
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 9px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText('S', sPixel.x, sPixel.y + 3);

    // Draw Receiver (R)
    ctx.beginPath();
    ctx.arc(mPixel.x, mPixel.y, 8, 0, Math.PI * 2);
    ctx.fillStyle = '#00e5ff';
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 9px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText('R', mPixel.x, mPixel.y + 3);

    traceAcousticRays(sourcePos, micPos);
  }, [sourcePos, micPos, wallMaterial, numRays, maxBounces]);

  // Play simulated impulse response via multi-tap synthesis
  const fireAcousticImpulse = () => {
    try {
      const ctx = audioService.getContext();

      // Trigger initial acoustic spark / starter pistol crack
      const sparkOsc = ctx.createOscillator();
      const sparkGain = ctx.createGain();
      sparkOsc.type = 'sawtooth';
      sparkOsc.frequency.setValueAtTime(3200, ctx.currentTime);
      sparkOsc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.03);

      sparkGain.gain.setValueAtTime(0.5, ctx.currentTime);
      sparkGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.035);

      sparkOsc.connect(sparkGain);
      sparkGain.connect(audioService.getMasterInput());
      sparkOsc.start();
      sparkOsc.stop(ctx.currentTime + 0.04);

      // Multi-tap delayed reflections from simulated hits
      simulatedHits.forEach((hit) => {
        const tapDelay = hit.timeMs / 1000;
        const tapOsc = ctx.createOscillator();
        const tapGain = ctx.createGain();
        const tapFilter = ctx.createBiquadFilter();

        tapOsc.type = hit.order === 0 ? 'triangle' : 'sine';
        tapOsc.frequency.setValueAtTime(400 - hit.order * 60, ctx.currentTime + tapDelay);

        tapFilter.type = 'lowpass';
        // High frequencies absorb faster with distance
        tapFilter.frequency.setValueAtTime(Math.max(200, 4000 / (1 + hit.order * 1.5)), ctx.currentTime + tapDelay);

        const tapAmp = Math.max(0.001, hit.energy * (0.28 / (1 + hit.order * 0.8)));
        tapGain.gain.setValueAtTime(0.0001, ctx.currentTime + tapDelay);
        tapGain.gain.linearRampToValueAtTime(tapAmp, ctx.currentTime + tapDelay + 0.005);
        tapGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + tapDelay + 0.18);

        tapOsc.connect(tapFilter);
        tapFilter.connect(tapGain);
        tapGain.connect(audioService.getMasterInput());

        tapOsc.start(ctx.currentTime + tapDelay);
        tapOsc.stop(ctx.currentTime + tapDelay + 0.2);
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleCanvasMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = (e.clientX - rect.left - 10) / (rect.width - 20);
    const clickY = (e.clientY - rect.top - 10) / (rect.height - 20);

    const distToS = Math.hypot(clickX - sourcePos.x, clickY - sourcePos.y);
    const distToM = Math.hypot(clickX - micPos.x, clickY - micPos.y);

    if (distToS < 0.1) setDraggingEntity('source');
    else if (distToM < 0.1) setDraggingEntity('mic');
  };

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!draggingEntity) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const nx = Math.max(0.05, Math.min(0.95, (e.clientX - rect.left - 10) / (rect.width - 20)));
    const ny = Math.max(0.05, Math.min(0.95, (e.clientY - rect.top - 10) / (rect.height - 20)));

    if (draggingEntity === 'source') setSourcePos({ x: nx, y: ny });
    else setMicPos({ x: nx, y: ny });
  };

  return (
    <div className="border border-slate-800 bg-[#090d14] p-5 rounded-sm shadow-xl font-mono-code text-xs">
      <div className="flex flex-wrap items-center justify-between pb-3 mb-4 border-b border-slate-800 gap-2">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-insignia text-sm tracking-wider text-slate-100 font-bold">
            PROTOTYPE BENCH 05 // 2D ACOUSTIC RAY-TRACER & IMPULSE CONVOLVER
          </span>
          <span className="px-2 py-0.5 text-[10px] bg-cyan-950 text-cyan-300 border border-cyan-800 rounded">
            ZIAA-PR-065
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-400">CHAMBER WALL:</span>
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-950 text-amber-300 border border-amber-800 uppercase">
            {wallMaterial} (α = {absorption})
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Interactive Chamber Canvas */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="relative border border-slate-800 bg-black rounded-sm overflow-hidden select-none min-h-[220px]">
            <canvas
              ref={canvasRef}
              width={500}
              height={230}
              className="w-full h-full block cursor-crosshair"
              onMouseDown={handleCanvasMouseDown}
              onMouseMove={handleCanvasMouseMove}
              onMouseUp={() => setDraggingEntity(null)}
              onMouseLeave={() => setDraggingEntity(null)}
            />
            <div className="absolute top-2 left-2 text-[10px] text-cyan-400 font-mono-code bg-black/60 px-1.5 py-0.5 rounded pointer-events-none">
              DRAG [S] SOURCE / [R] RECEIVER TO RECALCULATE WAVEFRONT
            </div>
            <div className="absolute bottom-2 right-2 text-[10px] text-amber-400 font-mono-code bg-black/60 px-1.5 py-0.5 rounded pointer-events-none">
              {simulatedHits.length} ARRIVALS DETECTED
            </div>
          </div>

          {/* Wall Material Presets */}
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'cistern' as const, name: 'Brick Cistern', alpha: '92% Refl' },
              { id: 'slate' as const, name: 'Wet Slate Mine', alpha: '97% Refl' },
              { id: 'metamaterial' as const, name: 'Metamaterial', alpha: 'Phase Diffuse' },
              { id: 'anechoic' as const, name: 'Anechoic Foam', alpha: '6% Refl' }
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => setWallMaterial(m.id)}
                className={`p-2 text-left rounded text-[11px] border transition-all ${
                  wallMaterial === m.id
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/70 font-semibold'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                <div className="font-semibold">{m.name}</div>
                <div className="text-[10px] text-slate-400">{m.alpha}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Ray Simulation Controls & Impulse Trigger */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3 bg-[#080b12] p-3.5 border border-slate-800/80 rounded-sm">
          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span className="text-slate-400">RAY DENSITY (k-vectors):</span>
              <span className="text-cyan-400 font-bold">{numRays} RAYS</span>
            </div>
            <input
              type="range"
              min="16"
              max="64"
              step="4"
              value={numRays}
              onChange={(e) => setNumRays(parseInt(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded"
            />
          </div>

          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span className="text-slate-400">MAX REFLECTION BOUNCES:</span>
              <span className="text-amber-400 font-bold">{maxBounces} ORDERS</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={maxBounces}
              onChange={(e) => setMaxBounces(parseInt(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer h-1.5 bg-slate-800 rounded"
            />
          </div>

          {/* Impulse Arrival Histogram */}
          <div className="border border-slate-800 p-2.5 rounded bg-black/60">
            <div className="text-[10px] text-slate-400 mb-1 flex justify-between">
              <span>IMPULSE RESPONSE HISTOGRAM (t = 0 to 180 ms):</span>
              <span className="text-cyan-400 font-bold">{simulatedHits.length} TAPS</span>
            </div>
            <div className="h-14 flex items-end gap-1 px-1 bg-slate-950/60 rounded border border-slate-900">
              {simulatedHits.slice(0, 24).map((hit, idx) => (
                <div
                  key={idx}
                  className="w-2 rounded-t transition-all bg-gradient-to-t from-cyan-600 to-amber-300"
                  style={{
                    height: `${Math.max(12, Math.min(100, hit.energy * 95))}%`,
                    opacity: 0.4 + hit.energy * 0.6
                  }}
                  title={`Arrival: ${hit.timeMs.toFixed(1)} ms | Order: ${hit.order}`}
                />
              ))}
            </div>
          </div>

          {/* Fire Impulse button */}
          <div className="pt-2">
            <button
              onClick={fireAcousticImpulse}
              className="w-full py-2.5 px-4 bg-gradient-to-r from-cyan-600 to-amber-600 hover:from-cyan-500 hover:to-amber-500 text-slate-950 font-bold rounded transition-all shadow-lg shadow-cyan-900/20 flex items-center justify-center gap-2 cursor-pointer text-xs"
            >
              <Zap className="w-4 h-4 fill-slate-950" /> FIRE ACOUSTIC IMPULSE
            </button>
            <span className="block text-center text-[10px] text-slate-400 mt-1">
              Computes speed of sound (343 m/s) and executes multi-tap arrival convolution
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
