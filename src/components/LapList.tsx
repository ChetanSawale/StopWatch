import React, { useRef, useEffect } from 'react';
import { Lap } from '../types';

interface LapListProps {
  laps: Lap[];
}

const LapList: React.FC<LapListProps> = ({ laps }) => {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (listRef.current && laps.length > 0) {
      listRef.current.scrollTop = 0;
    }
  }, [laps.length]);

  if (laps.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 w-full max-w-md mx-auto">
      <h2 className="text-xl font-medium text-slate-700 mb-3">Laps</h2>
      <div 
        ref={listRef}
        className="max-h-60 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100"
      >
        <table className="w-full">
          <thead className="text-left text-slate-500 border-b border-slate-200">
            <tr>
              <th className="py-2 px-3 w-16 font-medium">#</th>
              <th className="py-2 px-3 font-medium">Lap Time</th>
              <th className="py-2 px-3 font-medium">Total Time</th>
            </tr>
          </thead>
          <tbody>
            {laps.map((lap, index) => (
              <tr 
                key={lap.id}
                className={`border-b border-slate-100 ${
                  index === 0 ? 'animate-highlight' : ''
                }`}
              >
                <td className="py-2 px-3 text-slate-500">{laps.length - index}</td>
                <td className="py-2 px-3 font-mono">{lap.formattedSplit}</td>
                <td className="py-2 px-3 font-mono">{lap.formattedTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LapList;