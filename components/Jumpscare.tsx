
import React, { useEffect, useState, useMemo } from 'react';

interface JumpscareProps {
  onComplete: () => void;
}

const Jumpscare: React.FC<JumpscareProps> = ({ onComplete }) => {
  const faceParams = useMemo(() => {
    const filters = [
      'grayscale(1) contrast(2500%) brightness(120%)',
      'grayscale(1) invert(1) contrast(1800%) brightness(0.9)',
      'grayscale(1) brightness(40%) contrast(3500%)',
      'grayscale(1) invert(1) contrast(2800%) blur(0.5px)',
      'saturate(0) brightness(550%) contrast(2200%)'
    ];
    
    const generateCracks = (count: number) => {
      return Array.from({ length: count }).map(() => {
        const x = Math.random() * 200;
        const y = Math.random() * 200;
        const length = 15 + Math.random() * 30;
        const angle = Math.random() * Math.PI * 2;
        return `M ${x} ${y} L ${x + Math.cos(angle) * length} ${y + Math.sin(angle) * length}`;
      });
    };

    return {
      eyeType: Math.floor(Math.random() * 4),
      mouthType: Math.floor(Math.random() * 4),
      tilt: Math.random() * 20 - 10,
      scale: 0.95 + Math.random() * 0.35, 
      filter: filters[Math.floor(Math.random() * filters.length)],
      char: ["死", "终", "怨", "劫", "灭", "咒", "煞", "魔", "空", "杀"][Math.floor(Math.random() * 10)],
      cracks: generateCracks(40), 
      shakeOffset: () => (Math.random() * 14 - 7)
    };
  }, []);

  const [flash, setFlash] = useState(false);
  const [jitter, setJitter] = useState({ x: 0, y: 0 });
  const [pupilScale, setPupilScale] = useState(1);

  useEffect(() => {
    // --- 音效生成逻辑 ---
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    const playHorrorSound = () => {
      const duration = 1.4;
      
      // 1. 冲击波 (低频)
      const osc1 = audioCtx.createOscillator();
      const gain1 = audioCtx.createGain();
      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(150, audioCtx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.5);
      gain1.gain.setValueAtTime(0.8, audioCtx.currentTime);
      gain1.gain.linearRampToValueAtTime(0, audioCtx.currentTime + duration);
      osc1.connect(gain1);
      gain1.connect(audioCtx.destination);
      
      // 2. 尖叫声 (高频随机调制)
      const osc2 = audioCtx.createOscillator();
      const gain2 = audioCtx.createGain();
      osc2.type = 'square';
      osc2.frequency.setValueAtTime(800, audioCtx.currentTime);
      for(let i=0; i<10; i++) {
        osc2.frequency.linearRampToValueAtTime(1000 + Math.random() * 3000, audioCtx.currentTime + (i * 0.1));
      }
      gain2.gain.setValueAtTime(0.4, audioCtx.currentTime);
      gain2.gain.linearRampToValueAtTime(0, audioCtx.currentTime + duration);
      osc2.connect(gain2);
      gain2.connect(audioCtx.destination);

      // 3. 白噪声 (刺耳感)
      const bufferSize = audioCtx.sampleRate * duration;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const whiteNoise = audioCtx.createBufferSource();
      whiteNoise.buffer = buffer;
      const noiseGain = audioCtx.createGain();
      noiseGain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      noiseGain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);
      whiteNoise.connect(noiseGain);
      noiseGain.connect(audioCtx.destination);

      osc1.start();
      osc2.start();
      whiteNoise.start();
      
      osc1.stop(audioCtx.currentTime + duration);
      osc2.stop(audioCtx.currentTime + duration);
      whiteNoise.stop(audioCtx.currentTime + duration);
    };

    try {
      playHorrorSound();
    } catch (e) {
      console.warn("Audio failed to play", e);
    }

    // 震动
    if ('vibrate' in navigator) {
      navigator.vibrate([200, 50, 200, 50, 600]);
    }
    
    const timer = setTimeout(onComplete, 1400); 
    const interval = setInterval(() => {
      setFlash(p => !p);
      setJitter({ x: faceParams.shakeOffset(), y: faceParams.shakeOffset() });
      setPupilScale(0.5 + Math.random() * 1.5);
    }, 45);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      audioCtx.close();
    };
  }, [onComplete, faceParams]);

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black overflow-hidden pointer-events-auto">
      {/* 极速背景闪烁 */}
      <div className={`absolute inset-0 transition-opacity duration-75 ${flash ? 'opacity-20 bg-white' : 'opacity-0 bg-transparent'}`}></div>

      <div 
        className="relative w-[90vw] h-[90vh] flex items-center justify-center transition-transform duration-75"
        style={{ 
          transform: `scale(${faceParams.scale}) rotate(${faceParams.tilt}deg) translate(${jitter.x}px, ${jitter.y}px)`, 
          filter: faceParams.filter 
        }}
      >
        <div className="absolute inset-0 bg-white/5 animate-flicker pointer-events-none z-10"></div>
        
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
          <defs>
            <radialGradient id="eyeGrad">
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="black" />
            </radialGradient>
          </defs>

          <g stroke="white" strokeWidth="0.3" opacity="0.6">
            {faceParams.cracks.map((d, i) => (
              <path key={i} d={d} />
            ))}
          </g>

          <g>
            <g style={{ transform: `translate(${jitter.x * 0.3}px, ${jitter.y * 0.3}px)` }}>
              <path 
                d="M35 75 Q50 40 70 80 T35 105 Q25 90 35 75" 
                fill={flash ? "white" : "#111"} 
                stroke="white" 
                strokeWidth="1.5"
              />
              <circle cx="52" cy="82" r={6 * pupilScale} fill={flash ? "black" : "white"} />
              <path d="M35 75 L50 82" stroke="white" strokeWidth="0.5" opacity="0.4" />
              
              <path 
                d="M130 80 Q150 45 170 75 T130 110 Q120 95 130 80" 
                fill={flash ? "white" : "#111"} 
                stroke="white" 
                strokeWidth="1.5"
              />
              <circle cx="148" cy="78" r={5 * pupilScale} fill={flash ? "black" : "white"} />
              <path d="M170 75 L155 85" stroke="white" strokeWidth="0.5" opacity="0.4" />
            </g>

            <g style={{ transform: `translate(${jitter.x * -0.2}px, ${jitter.y * -0.2}px)` }}>
              <path 
                d="M30 135 Q100 195 170 135 Q100 220 30 135" 
                fill="white" 
                stroke="white"
                strokeWidth="1"
              />
              {[...Array(20)].map((_, i) => (
                <path 
                  key={`ut-${i}`} 
                  d={`M${35 + i * 7} 138 L${38 + i * 7} ${148 + Math.random() * 12} L${41 + i * 7} 138`} 
                  fill="black" 
                />
              ))}
              {[...Array(18)].map((_, i) => (
                <path 
                  key={`lt-${i}`} 
                  d={`M${38 + i * 7.5} 190 L${42 + i * 7.5} ${175 - Math.random() * 15} L${46 + i * 7.5} 190`} 
                  fill="black" 
                />
              ))}
            </g>
          </g>

          <g stroke="white" strokeWidth="1" opacity="0.7">
             <path d="M52 100 Q55 120 50 140" fill="none" />
             <path d="M148 105 Q145 125 150 145" fill="none" />
          </g>
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-[50vw] font-black opacity-[0.07] select-none pointer-events-none scale-150">
            {faceParams.char}
          </span>
        </div>
      </div>

      <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,1)] pointer-events-none"></div>
      
      <div className="absolute bottom-6 left-0 w-full text-center">
        <p className="text-[8px] font-mono text-neutral-500 tracking-[1em] opacity-30 uppercase">Void_System_Audio_Overflow</p>
      </div>
    </div>
  );
};

export default Jumpscare;
