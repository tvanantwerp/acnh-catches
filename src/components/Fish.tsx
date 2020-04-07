import React from 'react';

import fishes from '../data/fish.json';

type FishType = {
  name: string;
  location: string;
  size: string;
  price: number;
  hours: string;
  months: string;
};

const Fish = () => {
  const headings: string[] = Object.keys(fishes[0]);
  return (
    <table>
      <thead>
        <tr>
          {headings.map((heading: string) => (
            <th key={`heading-${heading}`}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {fishes.map((fish: FishType) => {
          return (
            <tr key={`fish-${fish.name}`}>
              {headings.map((heading) => {
                return (
                  <td key={`fish-${fish.name}-${heading}`}>
                    {fish[heading as keyof FishType]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Fish;
