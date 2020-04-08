import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { ICatch } from './types';
import { Theme, GlobalStyle } from './Theme';
import Controls from './components/Controls';
import Fish from './components/Fish';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 90%;

  > * {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

const App: React.FC = () => {
  const now = new Date();
  const [sortBy, setSortBy] = useState('name' as keyof ICatch);
  const [sortAsc, setSortAsc] = useState(true);
  const [date, setDate] = useState(
    `${now.getFullYear()}-${
      now.getMonth() < 9 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1
    }-${now.getDate() <= 9 ? '0' + now.getDate() : now.getDate()}`
  );
  const [time, setTime] = useState(
    `${now.getHours() < 9 ? '0' + now.getHours() : now.getHours()}:${
      now.getMinutes() < 9 ? '0' + now.getMinutes() : now.getMinutes()
    }`
  );
  const [showOnlyCurrentMonth, setShowOnlyCurrentMonth] = useState(false);
  const [showOnlyCurrentHour, setShowOnlyCurrentHour] = useState(false);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Container>
        <Controls
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          showOnlyCurrentMonth={showOnlyCurrentMonth}
          showOnlyCurrentHour={showOnlyCurrentHour}
          setShowOnlyCurrentMonth={setShowOnlyCurrentMonth}
          setShowOnlyCurrentHour={setShowOnlyCurrentHour}
        ></Controls>
        <Fish
          sortBy={sortBy}
          sortAsc={sortAsc}
          setSortBy={setSortBy}
          setSortAsc={setSortAsc}
          month={new Date(date).getMonth() + 1}
          hour={+time.split(':')[0]}
          showOnlyCurrentHour={showOnlyCurrentHour}
          showOnlyCurrentMonth={showOnlyCurrentMonth}
        />
      </Container>
    </ThemeProvider>
  );
};

export default App;
