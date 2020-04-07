import React from 'react';

import { ICatch, ICatchProp } from '../types';
import { inCurrentMonth, inCurrentHour } from '../utilities';
import fishes from '../data/fish.json';

const Fish = ({
  sortBy,
  setSortBy,
  sortAsc,
  setSortAsc,
  month,
  hour,
  showOnlyCurrentMonth,
  showOnlyCurrentHour,
}: ICatchProp) => {
  const headings: string[] = Object.keys(fishes[0]);
  let theFishes = fishes
    .filter((fish) => {
      if (showOnlyCurrentHour && !inCurrentHour(hour, fish.hours)) {
        return false;
      }
      return true;
    })
    .filter((fish) => {
      if (showOnlyCurrentMonth && !inCurrentMonth(month, fish.months)) {
        return false;
      }
      return true;
    })
    .sort((a, b): number => {
      if (sortAsc) {
        if (a[sortBy] > b[sortBy]) return 1;
        if (a[sortBy] < b[sortBy]) return -1;
      } else if (!sortAsc) {
        if (a[sortBy] > b[sortBy]) return -1;
        if (a[sortBy] < b[sortBy]) return 1;
      }
      return 0;
    });

  return (
    <table>
      <thead>
        <tr>
          {headings.map((heading: string) => (
            <th
              key={`heading-${heading}`}
              onClick={() => {
                if ((heading as keyof ICatch) === sortBy) {
                  setSortAsc(!sortAsc);
                } else {
                  setSortAsc(true);
                  setSortBy(heading as keyof ICatch);
                }
              }}
            >
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {theFishes.map((fish: ICatch) => {
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
