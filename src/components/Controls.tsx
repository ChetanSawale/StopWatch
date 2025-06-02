import React, { useState } from 'react';
import { Play, Pause, RotateCcw, Timer } from 'lucide-react';

interface ControlsProps {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
  onLap: () => void;
  hasTime: boolean;
}

const Controls: React.FC<ControlsProps> = ({
  isRunning,
  onStart,
  onPause,
  onReset,
  onLap,
  hasTime
}) => {
  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      {/* Reset button */}
      <button
        onClick={onReset}
        disabled={!hasTime}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
          hasTime
            ? 'bg-slate-200 text-slate-700 hover:bg-slate-300 active:scale-95'
            : 'bg-slate-100 text-slate-400 cursor-not-allowed'
        }`}
        aria-label="Reset"
      >
        <RotateCcw size={20} />
      </button>

      {/* Start/Pause button */}
      <button
        onClick={isRunning ? onPause : onStart}
        className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
          isRunning
            ? 'bg-red-500 text-white hover:bg-red-600 active:scale-95'
            : 'bg-blue-500 text-white hover:bg-blue-600 active:scale-95'
        }`}
        aria-label={isRunning ? 'Pause' : 'Start'}
      >
        {isRunning ? <Pause size={24} /> : <Play size={24} />}
      </button>

      {/* Lap button */}
      <button
        onClick={onLap}
        disabled={!isRunning}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
          isRunning
            ? 'bg-slate-200 text-slate-700 hover:bg-slate-300 active:scale-95'
            : 'bg-slate-100 text-slate-400 cursor-not-allowed'
        }`}
        aria-label="Lap"
      >
        <Timer size={20} />
      </button>
    </div>
  );
};

export default Controls;