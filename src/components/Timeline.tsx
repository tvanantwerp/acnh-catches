import React from 'react';
import styled from 'styled-components';

interface ITimes {
  times: string;
  currentTime: number;
}

interface IHour {
  yes: boolean;
  currentTime: boolean;
}

const TimesContainer = styled.div`
  display: flex;
  height: 25px;
  min-width: 100px;
`;

const StyledTime = styled.div`
  background-color: ${({ yes, currentTime }: IHour) =>
    yes
      ? currentTime
        ? '#00ff00'
        : '#00cc00'
      : currentTime
      ? '#dedede'
      : '#cdcdcd'};
  flex: 1;
`;

const Times = ({ times, currentTime }: ITimes) => {
  return (
    <TimesContainer>
      {times.split('').map((time, i) => {
        return (
          <StyledTime yes={time === 'y'} currentTime={currentTime === i} />
        );
      })}
    </TimesContainer>
  );
};

export default Times;
