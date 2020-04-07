import React, { useState } from 'react';

import { ICatch } from './types';
import Fish from './components/Fish';

const App: React.FC = () => {
  const [sortBy, setSortBy] = useState('name' as keyof ICatch);
  const [sortAsc, setSortAsc] = useState(true);
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
      <Fish
        sortBy={sortBy}
        sortAsc={sortAsc}
        setSortBy={setSortBy}
        setSortAsc={setSortAsc}
        showOnlyCurrentHour={showOnlyCurrentHour}
        showOnlyCurrentMonth={showOnlyCurrentMonth}
      />
    </div>
  );
};

export default App;
