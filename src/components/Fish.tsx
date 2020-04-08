import React from 'react';
import styled from 'styled-components';

import { ICatch, ICatchProp } from '../types';
import { inCurrentMonth, inCurrentHour, sortCatches } from '../utilities';
import Timeline from './Timeline';
import fishes from '../data/fish.json';

const Heading = styled.th`
  cursor: pointer;
  text-transform: capitalize;
`;

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
      return showOnlyCurrentHour && !inCurrentHour(hour, fish.hours)
        ? false
        : true;
    })
    .filter((fish) => {
      return showOnlyCurrentMonth && !inCurrentMonth(month, fish.months)
        ? false
        : true;
    })
    .sort((a, b) => sortCatches(sortAsc, sortBy, hour, month, a, b));

  return (
    <table>
      <thead>
        <tr>
          {headings.map((heading: string) => (
            <Heading
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
            </Heading>
          ))}
        </tr>
      </thead>
      <tbody>
        {theFishes.map((fish: ICatch) => {
          return (
            <tr key={`fish-${fish.name}`}>
              {headings.map((heading) => {
                return (
                  <td
                    key={`fish-${fish.name}-${heading}`}
                    style={{
                      textAlign: heading === 'price' ? 'right' : 'left',
                    }}
                  >
                    {heading === 'hours' ? (
                      <Timeline
                        fish={fish.name}
                        times={fish[heading]}
                        currentTime={hour}
                      />
                    ) : heading === 'months' ? (
                      <Timeline
                        fish={fish.name}
                        times={fish[heading]}
                        currentTime={month - 1}
                      />
                    ) : (
                      fish[heading as keyof ICatch]
                    )}
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
