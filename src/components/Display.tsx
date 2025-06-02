import React from 'react';

interface DisplayProps {
  time: string;
  isRunning: boolean;
}

const Display: React.FC<DisplayProps> = ({ time, isRunning }) => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div
        className={`text-6xl md:text-8xl font-mono font-light tracking-tight transition-colors duration-300 ${
          isRunning ? 'text-slate-800' : 'text-slate-500'
        }`}
      >
        {time}
      </div>
      <div 
        className={`absolute -top-3 right-0 w-2 h-2 rounded-full transition-opacity duration-300 ${
          isRunning ? 'bg-red-500 animate-pulse' : 'bg-transparent'
        }`}
      />
    </div>
  );
};

export default Display;