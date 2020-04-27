import React from 'react';
import styled from 'styled-components';

import LabelButton from './LabelButton';
import TextInput from './TextInput';

const StyledControls = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template: repeat(4, auto) / repeat(2, 1fr);
`;

const RadioOptions = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template: auto / repeat(2, 1fr);
`;

interface IControls {
  fishOrBugs: string;
  setFishOrBugs: (fob: string) => void;
  northOrSouth: string;
  setNorthOrSouth: (nos: string) => void;
  showOnlyCurrentMonth: boolean;
  setShowOnlyCurrentMonth: (setting: boolean) => void;
  showOnlyCurrentHour: boolean;
  setShowOnlyCurrentHour: (setting: boolean) => void;
  date: string;
  setDate: (theDate: string) => void;
  time: string;
  setTime: (theTime: string) => void;
}

const Controls = ({
  fishOrBugs,
  setFishOrBugs,
  northOrSouth,
  setNorthOrSouth,
  showOnlyCurrentMonth,
  setShowOnlyCurrentMonth,
  showOnlyCurrentHour,
  setShowOnlyCurrentHour,
  date,
  setDate,
  time,
  setTime,
}: IControls) => {
  return (
    <>
      <h1 style={{ fontSize: '28px', textAlign: 'center' }}>
        Catching Fish and Bugs in <em>Animal Crossing: New Horizons</em>
      </h1>
      <StyledControls>
        <div style={{ textAlign: 'center' }}>See fish or bugs?</div>
        <div style={{ textAlign: 'center' }}>Select hemisphere</div>
        <div>
          <RadioOptions>
            <LabelButton selected={'fish' === fishOrBugs} htmlFor="fish">
              Fish{' '}
              <input
                type="radio"
                name="fishOrBugs"
                id="fish"
                value="fish"
                checked={'fish' === fishOrBugs}
                onChange={(e) => setFishOrBugs(e.target.value)}
              />
            </LabelButton>
            <LabelButton selected={'bugs' === fishOrBugs} htmlFor="bugs">
              Bugs{' '}
              <input
                type="radio"
                name="fishOrBugs"
                id="bugs"
                value="bugs"
                checked={'bugs' === fishOrBugs}
                onChange={(e) => setFishOrBugs(e.target.value)}
              />
            </LabelButton>
          </RadioOptions>
        </div>
        <div>
          <RadioOptions>
            <LabelButton selected={northOrSouth === 'north'} htmlFor="north">
              Northern{' '}
              <input
                type="radio"
                name="northOrSouth"
                id="north"
                value="north"
                checked={'north' === northOrSouth}
                onChange={(e) => setNorthOrSouth(e.target.value)}
              />
            </LabelButton>
            <LabelButton selected={northOrSouth === 'south'} htmlFor="south">
              Southern{' '}
              <input
                type="radio"
                name="northOrSouth"
                id="south"
                value="south"
                checked={'south' === northOrSouth}
                onChange={(e) => setNorthOrSouth(e.target.value)}
              />
            </LabelButton>
          </RadioOptions>
        </div>
        <LabelButton selected={showOnlyCurrentMonth}>
          Show Only Current Month?{' '}
          <input
            type="checkbox"
            checked={showOnlyCurrentMonth}
            onChange={() => setShowOnlyCurrentMonth(!showOnlyCurrentMonth)}
          />
        </LabelButton>
        <LabelButton selected={showOnlyCurrentHour}>
          Show Only Current Time?{' '}
          <input
            type="checkbox"
            checked={showOnlyCurrentHour}
            onChange={() => setShowOnlyCurrentHour(!showOnlyCurrentHour)}
          />
        </LabelButton>
        <TextInput
          label="Choose the date"
          id="date-input"
          type="date"
          value={date}
          update={setDate}
        />
        <TextInput
          label="Choose the time"
          id="time-input"
          type="time"
          value={time}
          update={setTime}
        />
      </StyledControls>
    </>
  );
};

export default Controls;
