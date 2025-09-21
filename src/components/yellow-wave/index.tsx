'use client';
import { useMemo } from 'react';
import { generateRandomClipPath } from '@/utils/randomClipPath';

export default function YellowWave({ steps, height }: { steps: number; height: number }) {
  const clipPath = useMemo(() => generateRandomClipPath(steps, height), [steps, height]);
  return (
    <div
      className="absolute bottom-0 left-0 w-full h-24 bg-yellow-400"
      style={{ clipPath }}
    />
  );
}