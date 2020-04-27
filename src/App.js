import React, { useState } from "react";
import styled from "styled-components";
import { format } from "date-fns";
import "./App.css";

import Input from "./Input";
import Result from "./Result";
import DatePicker from "./DatePicker";

const DATE_FMT = "MMM d";

function App() {
  const [points, setPoints] = useState(0);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [results, setResults] = useState([]);

  const resultsItems = results.map(result => {
    return (
      <Result
        key={`${result.roomType}${result.resort}${result.startDate}${result.endDate}`}
        roomType={result.roomType}
        resort={result.resort}
        startDate={format(result.startDate, DATE_FMT)}
        endDate={format(result.endDate, DATE_FMT)}
        points={result.totalPoints}
      />
    );
  });

  const onPointsChange = e => {
    console.log(e.target);
    const newPoints = parseInt(e.target.value, 10);
    setPoints(newPoints);
    setResults([
      {
        roomType: "1 Bedroom Villa - Standard view",
        resort: "VGF",
        startDate: new Date(),
        endDate: new Date(),
        totalPoints: newPoints
      },
      {
        roomType: "2 Bedroom Villa - Theme park view",
        resort: "BLT",
        startDate: new Date(),
        endDate: new Date(),
        totalPoints: newPoints
      },
      {
        roomType: "Deluxe Studio - Standard view",
        resort: "VGF",
        startDate: new Date(),
        endDate: new Date(),
        totalPoints: newPoints
      }
    ]);
  };

  return (
    <div className="App">
      <AppHeader>
        <h1>How will you use your points?</h1>
      </AppHeader>

      <AppInputsContainer>
        <PointsInput
          type="text"
          inputMode="numeric"
          pattern="\d*"
          name="points"
          placeholder="Points to spend"
          value={points}
          onChange={onPointsChange}
        />
        <DatePicker
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
      </AppInputsContainer>

      {results.length > 0 && <Results>{resultsItems}</Results>}
    </div>
  );
}

export default App;

const AppInputsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const AppHeader = styled.header`
  display: flex;
  justify-content: center;
  font-size: calc(1rem + 2vmin);
`;

const Results = styled.section`
  padding: 2rem;
`;

const PointsInput = styled(Input)`
  width: 15rem;
`;
