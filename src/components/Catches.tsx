import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

import { ICatch, ICatchProp } from '../types';
import {
  inCurrentMonth,
  inCurrentHour,
  sortCatches,
  hemisphereAdjustment,
} from '../utilities';
import Timeline from './Timeline';

const Table = styled.table`
  background-color: white;
  border: 1px solid white;
  border-radius: 8px;
  border-spacing: 1rem 0.5rem;
  padding: 1rem;
  width: 100%;
`;

interface IHeading {
  selected: boolean;
  theme: DefaultTheme;
}

const Heading = styled.th`
  background-color: ${({ theme, selected }: IHeading) =>
    selected ? theme.teaGreen : theme.lightGreen};
  border: 1px solid
    ${({ theme, selected }: IHeading) =>
      selected ? theme.teaGreen : theme.lightGreen};
  border-radius: 4px;
  color: ${({ theme, selected }: IHeading) => theme.darkBrown};
  cursor: pointer;
  padding: 5px 0;
  text-transform: capitalize;
`;

const Catches = ({
  data,
  northOrSouth,
  sortBy,
  setSortBy,
  sortAsc,
  setSortAsc,
  month,
  hour,
  showOnlyCurrentMonth,
  showOnlyCurrentHour,
}: ICatchProp) => {
  const headings: string[] = data.columns;
  let theCatches = data
    .filter((theCatch: ICatch) => {
      return showOnlyCurrentHour && !inCurrentHour(hour, theCatch.hours)
        ? false
        : true;
    })
    .filter((theCatch: ICatch) => {
      return showOnlyCurrentMonth &&
        !inCurrentMonth(
          month,
          hemisphereAdjustment(theCatch.months, northOrSouth)
        )
        ? false
        : true;
    })
    .sort((a: ICatch, b: ICatch) =>
      sortCatches(sortAsc, sortBy, hour, month, a, b)
    );

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
              selected={sortBy === (heading as keyof ICatch)}
            >
              {heading}
            </Heading>
          ))}
        </tr>
      </thead>
      <tbody>
        {theCatches.map((theCatch: ICatch) => {
          return (
            <tr key={`theCatches-${theCatch.name}`}>
              {headings.map((heading) => {
                return (
                  <td
                    key={`theCatches-${theCatch.name}-${heading}`}
                    style={{
                      textAlign: heading === 'price' ? 'right' : 'left',
                    }}
                  >
                    {heading === 'hours' ? (
                      <Timeline
                        theCatch={theCatch.name}
                        times={theCatch[heading]}
                        currentTime={hour}
                      />
                    ) : heading === 'months' ? (
                      <Timeline
                        theCatch={theCatch.name}
                        times={hemisphereAdjustment(
                          theCatch[heading],
                          northOrSouth
                        )}
                        currentTime={month - 1}
                      />
                    ) : (
                      theCatch[heading as keyof ICatch]
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

export default Catches;
