import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { ICatch } from './types';
import { Theme, GlobalStyle } from './Theme';
import Fish from './components/Fish';

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
    </ThemeProvider>
  );
};

export default App;
