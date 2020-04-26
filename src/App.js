import React, { useState } from "react";
import styled from "styled-components";
import { format } from "date-fns";
import "./App.css";

import Input from "./Input";
import Result from "./Result";
import DatePicker from "./DatePicker";

const DATE_FMT = "MMM d";

function App() {
  const [points, setPoints] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

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
          onChange={e => setPoints(e.target.value)}
        />
        <DatePicker
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
      </AppInputsContainer>

      {points && (
        <Results>
          <Result
            roomType="1 Bedroom Villa - Standard view"
            resort="VGF"
            resortName="The Villas at Grand Floridian"
            startDate={format(startDate, DATE_FMT)}
            endDate={format(endDate, DATE_FMT)}
            points={points}
          />
          <Result
            roomType="2 Bedroom Villa - Theme park view"
            resort="BLT"
            resortName="Bay Lake Tower at Disney's Contemporary Resort"
            startDate={format(startDate, DATE_FMT)}
            endDate={format(endDate, DATE_FMT)}
            points={points}
          />
          <Result
            roomType="1 Bedroom Villa - Standard view"
            resort="VGF"
            startDate={format(startDate, DATE_FMT)}
            endDate={format(endDate, DATE_FMT)}
            points={points}
          />
        </Results>
      )}
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
