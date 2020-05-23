import React, { useEffect, useRef } from 'react';

interface ITimes {
  times: string;
  currentTime: number;
}

const Times = ({ times, currentTime }: ITimes) => {
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
        for (const [i, time] of Object.entries(times)) {
          const color =
            time === 'y'
              ? +i === currentTime
                ? 'rgba(105, 206, 107, 1)'
                : 'rgba(161, 222, 164, 1)'
              : +i === currentTime
              ? 'rgba(200, 190, 150, 1)'
              : 'rgba(225, 217, 170, 1)';
          ctx.fillStyle = color;
          ctx.fillRect(+i * (width / count), 0, width / count, height);
        }
      }
    }
  }, [currentTime, ref, times]);

  return <canvas style={{ height: '25px', width: '100%' }} ref={ref} />;
};

export default Times;
