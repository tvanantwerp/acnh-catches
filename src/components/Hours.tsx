import React from 'react';
import styled from 'styled-components';

interface IHours {
  hours: string;
  currentHour: number;
}

interface IHour {
  yes: boolean;
  currentHour: boolean;
}

const HoursContainer = styled.div`
  display: flex;
  height: 25px;
  min-width: 100px;
`;

const StyledHour = styled.div`
  background-color: ${({ yes, currentHour }: IHour) =>
    yes
      ? currentHour
        ? '#00ff00'
        : '#00cc00'
      : currentHour
      ? '#dedede'
      : '#cdcdcd'};
  flex: 1;
`;

const Hours = ({ hours, currentHour }: IHours) => {
  return (
    <HoursContainer>
      {hours.split('').map((hour, i) => {
        return (
          <StyledHour yes={hour === 'y'} currentHour={currentHour === i} />
        );
      })}
    </HoursContainer>
  );
};

export default Hours;
