import React, { useState } from "react";
import styled from "styled-components";
import { format } from "date-fns";
import "./App.css";

import Input from "./Input";
import Result from "./Result";
import DatePicker from "./DatePicker";
import Error from "./Error";

const API_FMT = "yyyy-MM-dd";
const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://dvc-search-api-wsrcsyye3a-uc.a.run.app"
    : "http://localhost:3001";

function App() {
  const [points, setPoints] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [results, setResults] = useState([]);
  const [error, setError] = useState();
  let fetchDelayTimeout;

  const resultsItems = results.map(result => {
    return (
      <Result
        key={`${result.roomType}${result.resort}${result.startDate}${result.endDate}`}
        roomType={result.roomType}
        resort={result.resort}
        startDate={result.startDate}
        endDate={result.endDate}
        points={result.points}
      />
    );
  });

  const fetchResults = (points, startDate, endDate) => {
    if (points < 1 || !startDate) {
      return;
    }
    clearTimeout(fetchDelayTimeout);
    fetchDelayTimeout = setTimeout(() => {
      setError("");
      let url = `${BASE_URL}?points=${points}&startDate=${format(
        startDate,
        API_FMT
      )}`;
      if (endDate) {
        url += `&endDate=${format(endDate, API_FMT)}`;
      }
      fetch(url)
        .then(res => res.json())
        .then(
          setResults,
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          error => {
            setError("Failed to fetch search results.");
          }
        );
    }, 250);
  };

  const onPointsChange = e => {
    setPoints(e.target.value);
    fetchResults(e.target.value, startDate, endDate);
  };

  const onChangeEndDate = newEndDate => {
    setEndDate(newEndDate);
    fetchResults(points, startDate, newEndDate);
  };

  const onChangeStartDate = newStartDate => {
    setStartDate(newStartDate);
    fetchResults(points, newStartDate, endDate);
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
          value={points || ""}
          onChange={onPointsChange}
          autoFocus={true}
        />
        <DatePicker
          startDate={startDate}
          setStartDate={onChangeStartDate}
          endDate={endDate}
          setEndDate={onChangeEndDate}
        />
      </AppInputsContainer>

      {error && <Error msg={error} />}
      {results.length > 0 && <Results>{resultsItems}</Results>}
    </div>
  );
}

export default App;

const AppInputsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AppHeader = styled.header`
  display: flex;
  justify-content: center;
  font-size: calc(1rem + 2vmin);
`;

const Results = styled.section`
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const PointsInput = styled(Input)`
  width: 15rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
