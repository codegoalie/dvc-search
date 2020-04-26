import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";

import Input from "./Input";
import Result from "./Result";

function App() {
  const [points, setPoints] = useState(null);

  return (
    <div className="App">
      <AppHeader>
        <h1>How will you use your points?</h1>
      </AppHeader>

      <AppInputsContainer>
        <Input
          type="text"
          inputMode="numeric"
          pattern="\d*"
          name="points"
          placeholder="Points to spend"
          value={points}
          onChange={e => setPoints(e.target.value)}
        />
        <Input type="date" name="dates" placeholder="Your dates" />
      </AppInputsContainer>

      {points && (
        <Results>
          <Result
            roomType="1 Bedroom Villa - Standard view"
            resort="VGF"
            resortName="The Villas at Grand Floridian"
            startDate="Aug 9th"
            endDate="Aug 16th"
            points={points}
          />
          <Result
            roomType="2 Bedroom Villa - Theme park view"
            resort="BLT"
            resortName="Bay Lake Tower at Disney's Contemporary Resort"
            startDate="Aug 9th"
            endDate="Aug 16th"
            points={points}
          />
          <Result
            roomType="1 Bedroom Villa - Standard view"
            resortName="The Villas at Grand Floridian"
            startDate="Aug 9th"
            endDate="Aug 16th"
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
