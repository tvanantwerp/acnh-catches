import React, { useState } from 'react';

import { ICatch } from './types';
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
  const [time, setTime] = useState(`${now.getHours()}:${now.getMinutes()}`);
  const [showOnlyCurrentMonth, setShowOnlyCurrentMonth] = useState(false);
  const [showOnlyCurrentHour, setShowOnlyCurrentHour] = useState(false);

  return (
    <div>
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
    </div>
  );
};

export default App;
