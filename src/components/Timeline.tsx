import React, { useEffect, useRef } from 'react';

import { Theme } from '../Theme';

interface ITimes {
  theCatch: string;
  times: string;
  currentTime: number;
}

const Times = ({ theCatch, times, currentTime }: ITimes) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const height = 60;
  const width = 240;

  useEffect(() => {
    if (ref && ref.current) {
      const canvas: HTMLCanvasElement = ref.current;
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      const count = times.length;

      if (ctx) {
        times.split('').forEach((time, i) => {
          const color =
            time === 'y'
              ? i === currentTime
                ? '#9cd08f'
                : Theme.teaGreen
              : i === currentTime
              ? '#cccccc'
              : '#dedede';
          ctx.fillStyle = color;
          ctx.fillRect(i * (width / count), 0, width / count, height);
        });
      }
    }
  }, [currentTime, ref, times]);

  return <canvas style={{ height: '25px', width: '100%' }} ref={ref} />;
};

export default Times;
