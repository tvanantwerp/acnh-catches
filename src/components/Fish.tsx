import React from 'react';

import { ICatch, ICatchProp } from '../types';
import fishes from '../data/fish.json';

const Fish = ({
  sortBy,
  setSortBy,
  showOnlyCurrentMonth,
  showOnlyCurrentHour,
}: ICatchProp) => {
  const headings: string[] = Object.keys(fishes[0]);
  return (
    <table>
      <thead>
        <tr>
          {headings.map((heading: string) => (
            <th
              key={`heading-${heading}`}
              onClick={() => setSortBy(heading as keyof ICatch)}
            >
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {fishes.map((fish: ICatch) => {
          return (
            <tr key={`fish-${fish.name}`}>
              {headings.map((heading) => {
                return (
                  <td key={`fish-${fish.name}-${heading}`}>
                    {fish[heading as keyof ICatch]}
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
