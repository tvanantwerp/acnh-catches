import React from 'react';
import styled from 'styled-components';

import { ICatch, ICatchProp } from '../types';
import { inCurrentMonth, inCurrentHour, sortCatches } from '../utilities';
import Timeline from './Timeline';
import fishes from '../data/fish.json';

const Table = styled.table`
  background-color: white;
  border: 1px solid white;
  border-radius: 8px;
  border-spacing: 1rem 0.5rem;
  padding: 1rem;
`;

const Heading = styled.th`
  background-color: ${(props) => props.theme.lightGreen};
  border: 1px solid ${(props) => props.theme.lightGreen};
  border-radius: 4px;
  color: ${(props) => props.theme.darkBrown};
  cursor: pointer;
  padding: 5px 0;
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
    <Table>
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
    </Table>
  );
};

export default Fish;
