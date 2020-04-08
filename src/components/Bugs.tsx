import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

import { ICatch, ICatchProp } from '../types';
import { inCurrentMonth, inCurrentHour, sortCatches } from '../utilities';
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

const Bugs = ({
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
  let theBugs = data
    .filter((bug: ICatch) => {
      return showOnlyCurrentHour && !inCurrentHour(hour, bug.hours)
        ? false
        : true;
    })
    .filter((bug: ICatch) => {
      return showOnlyCurrentMonth && !inCurrentMonth(month, bug.months)
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
        {theBugs.map((bugs: ICatch) => {
          return (
            <tr key={`bugs-${bugs.name}`}>
              {headings.map((heading) => {
                return (
                  <td
                    key={`bugs-${bugs.name}-${heading}`}
                    style={{
                      textAlign: heading === 'price' ? 'right' : 'left',
                    }}
                  >
                    {heading === 'hours' ? (
                      <Timeline
                        theCatch={bugs.name}
                        times={bugs[heading]}
                        currentTime={hour}
                      />
                    ) : heading === 'months' ? (
                      <Timeline
                        theCatch={bugs.name}
                        times={bugs[heading]}
                        currentTime={month - 1}
                      />
                    ) : (
                      bugs[heading as keyof ICatch]
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

export default Bugs;
