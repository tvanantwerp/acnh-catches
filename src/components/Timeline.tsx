import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

interface ITimes {
  theCatch: string;
  times: string;
  currentTime: number;
}

interface IHour {
  theme: DefaultTheme;
  yes: boolean;
  currentTime: boolean;
}

const TimesContainer = styled.div`
  display: flex;
  height: 25px;
  min-width: 100px;
`;

const StyledTime = styled.div`
  background-color: ${({ theme, yes, currentTime }: IHour) =>
    yes
      ? currentTime
        ? '#9cd08f'
        : theme.teaGreen
      : currentTime
      ? '#cccccc'
      : '#dedede'};
  flex: 1;
`;

const Times = ({ theCatch, times, currentTime }: ITimes) => {
  return (
    <TimesContainer>
      {times.split('').map((time, i) => {
        return (
          <StyledTime
            key={`time-${theCatch}-${time}-${i}`}
            yes={time === 'y'}
            currentTime={currentTime === i}
          />
        );
      })}
    </TimesContainer>
  );
};

export default Times;
