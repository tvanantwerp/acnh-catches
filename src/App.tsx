import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import { csvParse } from 'd3-dsv';
import { DateTime } from 'luxon';

import { ICatch } from './types';
import { Theme, GlobalStyle } from './Theme';
import Container from './components/Container';
import Controls from './components/Controls';
import Catches from './components/Catches';

const App: React.FC = () => {
  const now = DateTime.local();
  const [fish, setFish] = useState<any | null>(null);
  const [bugs, setBugs] = useState<any | null>(null);
  const [fishOrBugs, setFishOrBugs] = useState('fish');
  const [northOrSouth, setNorthOrSouth] = useState('north');
  const [sortBy, setSortBy] = useState('name' as keyof ICatch);
  const [sortAsc, setSortAsc] = useState(true);
  const [date, setDate] = useState(now.toFormat('yyyy-MM-dd'));
  const [time, setTime] = useState(
    `${now.toFormat('HH')}:${now.toFormat('mm')}`
  );
  const [showOnlyCurrentMonth, setShowOnlyCurrentMonth] = useState(false);
  const [showOnlyCurrentHour, setShowOnlyCurrentHour] = useState(false);

  useEffect(() => {
    const fetchFish = async () => {
      const result = await axios.get('data/fish.csv');
      setFish(csvParse(result.data));
    };
    const fetchBugs = async () => {
      const result = await axios.get('data/bugs.csv');
      setBugs(csvParse(result.data));
    };
    fetchFish();
    fetchBugs();
  }, [date, time]);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <div className="background"></div>
      <Container>
        <Controls
          fishOrBugs={fishOrBugs}
          setFishOrBugs={setFishOrBugs}
          northOrSouth={northOrSouth}
          setNorthOrSouth={setNorthOrSouth}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          showOnlyCurrentMonth={showOnlyCurrentMonth}
          showOnlyCurrentHour={showOnlyCurrentHour}
          setShowOnlyCurrentMonth={setShowOnlyCurrentMonth}
          setShowOnlyCurrentHour={setShowOnlyCurrentHour}
        ></Controls>
      </Container>
      <Container>
        {fishOrBugs === 'fish' && fish && (
          <Catches
            data={fish}
            northOrSouth={northOrSouth}
            sortBy={sortBy}
            sortAsc={sortAsc}
            setSortBy={setSortBy}
            setSortAsc={setSortAsc}
            month={+DateTime.fromISO(date).toFormat('L')}
            hour={+time.split(':')[0]}
            showOnlyCurrentHour={showOnlyCurrentHour}
            showOnlyCurrentMonth={showOnlyCurrentMonth}
          />
        )}
        {fishOrBugs === 'bugs' && bugs && (
          <Catches
            data={bugs}
            northOrSouth={northOrSouth}
            sortBy={sortBy}
            sortAsc={sortAsc}
            setSortBy={setSortBy}
            setSortAsc={setSortAsc}
            month={+DateTime.fromISO(date).toFormat('L')}
            hour={+time.split(':')[0]}
            showOnlyCurrentHour={showOnlyCurrentHour}
            showOnlyCurrentMonth={showOnlyCurrentMonth}
          />
        )}
      </Container>
      <Container>
        <p>
          Want an easier way to figure what what fish and bugs are available
          when in Animal Crossing: New Horizons? Want a table that's easy to
          scan and sort? You've come to the right place! Choose your criteria to
          filter the table and click the headings to sort entries.
        </p>
        <p>
          Tool created by{' '}
          <a
            href="https://tomvanantwerp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tom VanAntwerp
          </a>
          . Follow Tom on{' '}
          <a
            href="https://twitter.com/tvanantwerp"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </a>
          . Report any issues{' '}
          <a
            href="https://github.com/tvanantwerp/acnh-catches/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
      </Container>
    </ThemeProvider>
  );
};

export default App;
