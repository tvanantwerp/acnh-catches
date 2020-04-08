import React from 'react';
import styled from 'styled-components';

const StyledControls = styled.div`
  background-color: white;
  border: 1px solid white;
  border-radius: 8px;
  display: grid;
  grid-gap: 1rem;
  grid-template: repeat(2, auto) / repeat(2, 1fr);
  padding: 1rem;
`;

interface IControls {
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
