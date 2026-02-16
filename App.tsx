
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { SCRIPT } from './constants';
import { StoryNode, Choice } from './types';
import Jumpscare from './components/Jumpscare';
import Typewriter from './components/Typewriter';

const App: React.FC = () => {
  const [displayNode, setDisplayNode] = useState<StoryNode>(SCRIPT['start']);
  const [showJumpscare, setShowJumpscare] = useState(false);
  const [errorCount, setErrorCount] = useState(0);
  const [foundEndings, setFoundEndings] = useState<string[]>([]);
  const [showGallery, setShowGallery] = useState(false);
  
  // Timer state for the 5-second limit
  const [timeLeft, setTimeLeft] = useState(5.0);
  const timerRef = useRef<number | null>(null);

  const TARGET_ENDINGS = 50;

  useEffect(() => {
    const saved = localStorage.getItem('ghost_maze_v5_endings');
    if (saved) setFoundEndings(JSON.parse(saved));
  }, []);

  const saveEnding = useCallback((title: string) => {
    setFoundEndings(prev => {
      if (prev.includes(title)) return prev;
      const next = [...prev, title].sort((a, b) => {
        const numA = parseInt(a.match(/\d+/)?.[0] || '0');
        const numB = parseInt(b.match(/\d+/)?.[0] || '0');
        return numA - numB;
      });
      localStorage.setItem('ghost_maze_v5_endings', JSON.stringify(next));
      return next;
    });
  }, []);

  const triggerJumpscare = useCallback(() => {
    setShowJumpscare(true);
    setErrorCount(prev => prev + 1);
    // Clear timer when jumpscare starts
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    
    setTimeout(() => {
        setDisplayNode(SCRIPT['start']);
        setTimeLeft(5.0);
    }, 1400);
  }, []);

  // Timer logic
  useEffect(() => {
    // No timer on endings or while jumpscare is active
    if (displayNode.isEnding || showJumpscare) {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    // Reset timer to 5.0 whenever displayNode changes
    setTimeLeft(5.0);
    
    if (timerRef.current) window.clearInterval(timerRef.current);
    
    timerRef.current = window.setInterval(() => {
      setTimeLeft(prev => {
        const next = Math.max(0, prev - 0.1);
        if (next <= 0) {
          triggerJumpscare();
          return 0;
        }
        return next;
      });
    }, 100);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [displayNode.id, displayNode.isEnding, showJumpscare, triggerJumpscare]);

  const handleChoice = useCallback((choice: Choice) => {
    if (choice.isJumpscare) {
      triggerJumpscare();
      return;
    }

    const targetNode = SCRIPT[choice.nextNodeId];
    if (targetNode) {
      if (targetNode.isJumpscare) {
        triggerJumpscare();
      } else {
        setDisplayNode(targetNode);
        if (targetNode.isEnding && targetNode.endingTitle) {
          saveEnding(targetNode.endingTitle);
        }
      }
    } else {
      setDisplayNode(SCRIPT['start']);
    }
  }, [triggerJumpscare, saveEnding]);

  const endingMatrix = useMemo(() => {
    const matrix = Array(TARGET_ENDINGS).fill(null);
    foundEndings.forEach(title => {
      const numMatch = title.match(/\d+/);
      if (numMatch) {
        const num = parseInt(numMatch[0]);
        if (num >= 1 && num <= TARGET_ENDINGS) matrix[num - 1] = title;
      }
    });
    return matrix;
  }, [foundEndings]);

  return (
    <div className="min-h-screen bg-black text-neutral-200 flex flex-col items-center justify-center p-4 font-sans overflow-hidden select-none">
      {showJumpscare && <Jumpscare onComplete={() => setShowJumpscare(false)} />}

      {showGallery && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/98 backdrop-blur-2xl animate-in fade-in duration-300">
          <div className="w-full max-w-4xl bg-neutral-900/80 border border-neutral-800 rounded-2xl p-8 max-h-[85vh] flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold tracking-widest text-white italic glitch-text uppercase">Collection_Matrix</h2>
              <button onClick={() => setShowGallery(false)} className="text-neutral-500 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto grid grid-cols-5 sm:grid-cols-10 gap-2 p-2 custom-scrollbar">
              {endingMatrix.map((title, idx) => (
                <div 
                  key={idx} 
                  title={title || `未解锁结局 #${idx + 1}`}
                  className={`aspect-square flex items-center justify-center text-[10px] border transition-all duration-500 ${title ? 'bg-white text-black font-bold border-white' : 'border-neutral-800 text-neutral-800 hover:border-neutral-600'}`}
                >
                  {idx + 1}
                </div>
              ))}
            </div>
            <p className="mt-4 text-[10px] text-neutral-600 text-center font-mono">COMPLETE THE VOID. DISCOVER ALL 50 FRAGMENTS.</p>
          </div>
        </div>
      )}

      <div className={`w-full max-w-2xl transition-all duration-700 ${displayNode.isEnding ? 'shadow-[0_0_100px_rgba(255,255,255,0.08)] scale-105' : ''}`}>
        <header className="mb-6 flex justify-between items-center opacity-40 px-2">
          <div onClick={() => setShowGallery(true)} className="cursor-pointer group flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-600 animate-pulse"></div>
            <h1 className="text-[10px] tracking-[0.5em] font-black group-hover:text-white transition-colors uppercase">Ghost_Maze_v5.0</h1>
          </div>
          <div className="text-[10px] font-mono tracking-tighter flex items-center space-x-4">
            <span className={timeLeft < 1.5 ? 'text-red-500 animate-pulse font-bold' : ''}>TIME: {timeLeft.toFixed(1)}s</span>
            <span>E: {foundEndings.length}/{TARGET_ENDINGS} | R: {errorCount}</span>
          </div>
        </header>

        <div className="bg-neutral-950/40 border border-neutral-900 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden group/container">
          {/* Countdown progress bar */}
          {!displayNode.isEnding && (
            <div className="absolute top-0 left-0 h-1 bg-red-900/30 w-full z-20">
              <div 
                className={`h-full bg-red-600 transition-all duration-100 ease-linear ${timeLeft < 1.5 ? 'animate-flicker shadow-[0_0_10px_#ff0000]' : ''}`} 
                style={{ width: `${(timeLeft / 5) * 100}%` }}
              ></div>
            </div>
          )}
          
          <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>

          <main className="min-h-[380px] flex flex-col justify-center space-y-8">
            {displayNode.isEnding && (
              <div className="bg-white text-black py-4 px-6 text-center font-black tracking-[0.4em] text-xs animate-pulse border border-white uppercase mb-4">
                {displayNode.endingTitle}
              </div>
            )}

            <div className="text-xl leading-relaxed font-serif text-neutral-200 min-h-[140px] drop-shadow-lg relative">
              <Typewriter key={displayNode.id} text={displayNode.text} speed={20} />
            </div>

            <div className="grid grid-cols-2 gap-3 mt-auto">
              {displayNode.choices.map((choice, index) => (
                <button
                  key={index}
                  onClick={() => handleChoice(choice)}
                  className="p-5 bg-neutral-900/40 border border-neutral-900 hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-[11px] tracking-widest text-left font-bold rounded-lg group/btn relative overflow-hidden"
                >
                  <span className="opacity-20 mr-2 font-mono group-hover/btn:opacity-100 transition-opacity italic">[{index + 1}]</span>
                  <span className="group-hover/btn:translate-x-1 transition-transform inline-block uppercase">{choice.text}</span>
                </button>
              ))}
            </div>
          </main>
        </div>

        <footer className="mt-6 flex justify-between opacity-5 text-[8px] font-mono tracking-widest uppercase px-2">
          <span>MEM_LOC: 0x{displayNode.id.toUpperCase()}</span>
          <button 
            onClick={() => { if(confirm('PERMANENTLY WIPE ALL PROGRESS?')) { localStorage.clear(); window.location.reload(); } }}
            className="hover:opacity-100 transition-opacity"
          >[ FORMAT_DATA ]</button>
        </footer>
      </div>
      
      {/* 装饰性边缘文字 */}
      <div className="fixed top-0 left-0 h-full p-2 flex items-center pointer-events-none opacity-10">
        <span className="[writing-mode:vertical-lr] text-[8px] font-mono tracking-[1em] uppercase">
          {timeLeft <= 0 ? 'DEADLINE_REACHED' : 'System_Failure_Loop_Detected'}
        </span>
      </div>
    </div>
  );
};

export default App;
