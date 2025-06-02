import React from 'react';
import { useStopwatch } from '../hooks/useStopwatch';
import Display from './Display';
import Controls from './Controls';
import LapList from './LapList';
import KeyboardShortcuts from './KeyboardShortcuts';
import { Clock } from 'lucide-react';

const Stopwatch: React.FC = () => {
  const { 
    formattedTime, 
    isRunning, 
    start, 
    pause, 
    reset, 
    lap, 
    laps,
    time
  } = useStopwatch();

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-6 bg-gradient-to-b from-slate-50 to-slate-100">
      <header className="w-full max-w-md flex items-center justify-center py-4">
        <div className="flex items-center text-slate-800">
          <Clock className="mr-2" size={24} />
          <h1 className="text-2xl font-medium">Stopwatch</h1>
        </div>
      </header>

      <main className="flex-1 w-full max-w-md flex flex-col items-center justify-center mt-8">
        <div className="w-full bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
          <Display time={formattedTime} isRunning={isRunning} />
          
          <Controls
            isRunning={isRunning}
            onStart={start}
            onPause={pause}
            onReset={reset}
            onLap={lap}
            hasTime={time > 0}
          />
          
          <KeyboardShortcuts />
        </div>

        <LapList laps={laps} />
      </main>

      <footer className="mt-auto py-4 text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Stopwatch App
      </footer>
    </div>
  );
};

export default Stopwatch;