import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import axios from 'axios';
import { csvParse } from 'd3-dsv';

import { ICatch } from './types';
import { Theme, GlobalStyle } from './Theme';
import Container from './components/Container';
import Controls from './components/Controls';
import Catches from './components/Catches';

const App: React.FC = () => {
  const now = new Date();
  const [fish, setFish] = useState<any | null>(null);
  const [bugs, setBugs] = useState<any | null>(null);
  const [fishOrBugs, setFishOrBugs] = useState('fish');
  const [northOrSouth, setNorthOrSouth] = useState('north');
  const [sortBy, setSortBy] = useState('name' as keyof ICatch);
  const [sortAsc, setSortAsc] = useState(true);
  const [date, setDate] = useState(
    `${now.getFullYear()}-${
      now.getMonth() < 9 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1
    }-${now.getDate() <= 9 ? '0' + now.getDate() : now.getDate()}`
  );
  const [time, setTime] = useState(
    `${now.getHours() <= 9 ? '0' + now.getHours() : now.getHours()}:${
      now.getMinutes() <= 9 ? '0' + now.getMinutes() : now.getMinutes()
    }`
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
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
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
            month={new Date(date).getMonth() + 1}
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
            month={new Date(date).getMonth() + 1}
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
