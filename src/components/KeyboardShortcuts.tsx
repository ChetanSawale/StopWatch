import React from 'react';

const KeyboardShortcuts: React.FC = () => {
  return (
    <div className="mt-4 text-center text-sm text-slate-500">
      <p>Keyboard shortcuts:</p>
      <div className="flex justify-center gap-4 mt-1">
        <span className="flex items-center">
          <kbd className="px-2 py-1 bg-slate-100 rounded text-slate-700 text-xs font-mono">Space</kbd>
          <span className="ml-1">Start/Pause</span>
        </span>
        <span className="flex items-center">
          <kbd className="px-2 py-1 bg-slate-100 rounded text-slate-700 text-xs font-mono">R</kbd>
          <span className="ml-1">Reset</span>
        </span>
        <span className="flex items-center">
          <kbd className="px-2 py-1 bg-slate-100 rounded text-slate-700 text-xs font-mono">L</kbd>
          <span className="ml-1">Lap</span>
        </span>
      </div>
    </div>
  );
};

export default KeyboardShortcuts;