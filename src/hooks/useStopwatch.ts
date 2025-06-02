import { useState, useRef, useEffect, useCallback } from 'react';
import { formatTime } from '../utils/timeFormatter';
import { Lap } from '../types';

export function useStopwatch() {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [laps, setLaps] = useState<Lap[]>([]);
  const intervalRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const pausedTimeRef = useRef<number>(0);

  // Start the stopwatch
  const start = useCallback(() => {
    if (isRunning) return;
    
    setIsRunning(true);
    startTimeRef.current = Date.now() - pausedTimeRef.current;
    
    intervalRef.current = window.setInterval(() => {
      const elapsedTime = Date.now() - startTimeRef.current;
      setTime(elapsedTime);
    }, 10);
  }, [isRunning]);

  // Pause the stopwatch
  const pause = useCallback(() => {
    if (!isRunning) return;
    
    clearInterval(intervalRef.current!);
    pausedTimeRef.current = time;
    setIsRunning(false);
  }, [isRunning, time]);

  // Reset the stopwatch
  const reset = useCallback(() => {
    clearInterval(intervalRef.current!);
    setIsRunning(false);
    setTime(0);
    pausedTimeRef.current = 0;
    setLaps([]);
  }, []);

  // Record a lap
  const lap = useCallback(() => {
    if (!isRunning) return;
    
    const prevLapTime = laps.length > 0 ? laps[0].time : 0;
    const split = time - prevLapTime;
    
    const newLap: Lap = {
      id: Date.now(),
      time,
      formattedTime: formatTime(time),
      split,
      formattedSplit: formatTime(split)
    };
    
    setLaps(prevLaps => [newLap, ...prevLaps]);
  }, [isRunning, laps, time]);

  // Toggle between start and pause
  const toggle = useCallback(() => {
    if (isRunning) {
      pause();
    } else {
      start();
    }
  }, [isRunning, pause, start]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        toggle();
        e.preventDefault();
      } else if (e.code === 'KeyR') {
        reset();
      } else if (e.code === 'KeyL' && isRunning) {
        lap();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggle, reset, lap, isRunning]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return {
    time,
    formattedTime: formatTime(time),
    isRunning,
    start,
    pause,
    reset,
    lap,
    toggle,
    laps
  };
}