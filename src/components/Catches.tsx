import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import { ICatch, ICatchProp } from '../types';
import {
  inCurrentMonth,
  inCurrentHour,
  sortCatches,
  hemisphereAdjustment,
} from '../utilities';
import Timeline from './Timeline';
import Row from './Row';
import Cell from './Cell';

interface IHeading {
  selected: boolean;
  theme: DefaultTheme;
}

const THead = styled.thead`
  display: none;
  @media screen and (min-width: 480px) {
    display: table-header-group;
  }
`;

const Heading = styled.th`
  background-color: ${({ theme, selected }: IHeading) =>
    selected ? theme.labelYellowHover : theme.labelYellow};
  border-radius: 4px;
  color: ${(props) => props.theme.darkBrown};
  cursor: pointer;
  padding: 5px 0;
  text-transform: capitalize;
  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.labelYellowHover};
  }
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
    <AnimatePresence>
      <motion.table
        style={{ borderSpacing: '1rem 0.5rem', width: '100%' }}
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
      >
        <THead>
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
        </THead>
        <tbody>
          {theCatches.map((theCatch: ICatch) => {
            return (
              <Row key={`theCatches-${theCatch.name}`}>
                {headings.map((heading) => {
                  return (
                    <Cell
                      key={`theCatches-${theCatch.name}-${heading}`}
                      label={heading}
                    >
                      {heading === 'hours' ? (
                        <Timeline
                          times={theCatch[heading]}
                          currentTime={hour}
                        />
                      ) : heading === 'months' ? (
                        <Timeline
                          times={hemisphereAdjustment(
                            theCatch[heading],
                            northOrSouth
                          )}
                          currentTime={month - 1}
                        />
                      ) : (
                        theCatch[heading as keyof ICatch]
                      )}
                    </Cell>
                  );
                })}
              </Row>
            );
          })}
        </tbody>
      </motion.table>
    </AnimatePresence>
  );
};

export default Catches;
