import React from 'react';
import styled from 'styled-components';

const StyledControls = styled.div`
  background-color: white;
  border: 1px solid white;
  border-radius: 8px;
  display: grid;
  grid-gap: 1rem;
  grid-template: repeat(3, auto) / repeat(2, 1fr);
  padding: 1rem;
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
    <StyledControls>
      <div>
        <p>Show fish or bugs?</p>
        <label htmlFor="fish">
          Fish{' '}
          <input
            type="radio"
            name="fishOrBugs"
            id="fish"
            value="fish"
            checked={'fish' === fishOrBugs}
            onChange={(e) => setFishOrBugs(e.target.value)}
          />
        </label>
        <label htmlFor="bugs">
          Bugs{' '}
          <input
            type="radio"
            name="fishOrBugs"
            id="bugs"
            value="bugs"
            checked={'bugs' === fishOrBugs}
            onChange={(e) => setFishOrBugs(e.target.value)}
          />
        </label>
      </div>
      <div>
        <p>Select Hemisphere</p>
        <label htmlFor="north">
          Northern{' '}
          <input
            type="radio"
            name="northOrSouth"
            id="north"
            value="north"
            checked={'north' === northOrSouth}
            onChange={(e) => setNorthOrSouth(e.target.value)}
          />
        </label>
        <label htmlFor="north">
          Southern{' '}
          <input
            type="radio"
            name="northOrSouth"
            id="south"
            value="south"
            checked={'south' === northOrSouth}
            onChange={(e) => setNorthOrSouth(e.target.value)}
          />
        </label>
      </div>
      <label>
        Show Only Current Month?{' '}
        <input
          type="checkbox"
          checked={showOnlyCurrentMonth}
          onChange={() => setShowOnlyCurrentMonth(!showOnlyCurrentMonth)}
        />
      </label>
      <label>
        Show Only Current Time?{' '}
        <input
          type="checkbox"
          checked={showOnlyCurrentHour}
          onChange={() => setShowOnlyCurrentHour(!showOnlyCurrentHour)}
        />
      </label>
      <label>
        Choose the date{' '}
        <input
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </label>
      <label>
        Choose the time{' '}
        <input
          type="time"
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
        />
      </label>
    </StyledControls>
  );
};

export default Controls;
