import React, { useState } from "react";
import styled from "styled-components";
import { format } from "date-fns";

import Input from "./Input";
import Result from "./Result";
import DatePicker from "./DatePicker";
import Error from "./Error";
import Label from "./Label";
import InputWrapper from "./InputWrapper";
import logo from "./logo.png";
import Loading from "./Loading";
import NoResults from "./NoResults";
import AppFooter from "./AppFooter";
import SignUpModal from "./SignUpModal";
import { postData } from "./subscribe";

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
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [activeResult, setActiveResult] = useState();
  let fetchDelayTimeout;

  const resultsItems = results.map(result => {
    return (
      <Result
        key={[
          result.roomType,
          result.viewType,
          result.resort,
          result.startDate,
          result.endDate,
        ].join()}
        roomType={result.roomType}
        viewType={result.viewType}
        resort={result.resort}
        startDate={result.startDate}
        endDate={result.endDate}
        points={result.points}
        handleAvailabilityClick={() => setActiveResult(result)}
      />
    );
  });

  const fetchResults = (points, startDate, endDate) => {
    if (!points || points < 10 || !startDate || !endDate) {
      return;
    }
    clearTimeout(fetchDelayTimeout);
    fetchDelayTimeout = setTimeout(() => {
      setError("");
      setLoading(true);
      setLoaded(false);
      let url = `${BASE_URL}?points=${points}&startDate=${format(
        startDate,
        API_FMT
      )}&endDate=${format(endDate, API_FMT)}`;

      fetch(url)
        .then(res => res.json())
        .then(
          json => {
            setResults(json);
            setLoading(false);
            setLoaded(true);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          () => {
            setError("Failed to fetch search results.");
            setLoading(false);
            setLoaded(false);
          }
        );
    }, 250);
  };

  const subscribe = email => {
    postData(`${BASE_URL}/subscribe`, { email });
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
        <img src={logo} alt="LineLeader logo" />
        <h1>
          Find your best <i>Welcome Home</i>!
        </h1>
      </AppHeader>

      <AppInputsContainer>
        <InputWrapper>
          <Label htmlFor="points">Points to spend</Label>
          <PointsInput
            type="text"
            inputMode="numeric"
            pattern="\d*"
            name="points"
            value={points || ""}
            onChange={onPointsChange}
            autoFocus={true}
          />
        </InputWrapper>
        <DatePicker
          startDate={startDate}
          setStartDate={onChangeStartDate}
          endDate={endDate}
          setEndDate={onChangeEndDate}
        />
      </AppInputsContainer>

      <Results>
        {error && <Error msg={error} />}
        {loading && <Loading />}
        {results.length > 0 ? resultsItems : loaded && <NoResults />}
      </Results>

      <AppFooter />
      <SignUpModal
        isOpen={activeResult !== null}
        handleClose={() => setActiveResult(null)}
        activeResult={activeResult}
        subscribe={subscribe}
      />
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: calc(1rem + 2vmin);

  @media (max-width: 768px) {
    & img {
      height: 25px;
    }
  }
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

// const defaultResults = [
//   "Aulani, Disney Vacation Club Villas, Ko Olina, Hawaii",
//   "Bay Lake Tower at Disney's Contemporary Resort",
//   "Boulder Ridge Villas at Disney's Wilderness Lodge",
//   "Copper Creek Villas & Cabins at Disney's Wilderness Lodge",
//   "Disney's Animal Kingdom Villas",
//   "Disney's Beach Club Villas",
//   "Disney's BoardWalk Villas",
//   "Disney's Hilton Head Island Resort",
//   "Disney's Old Key West Resort",
//   "Disney's Polynesian Villas & Bungalows",
//   "Disney's Riviera Resort",
//   "Disney's Saratoga Springs Resort & Spa",
//   "Disney's Vero Beach Resort",
//   "The Villas at Disney's Grand Californian Hotel & Spa",
//   "The Villas at Disney's Grand Floridian Resort & Spa",
// ].map(resort => {
//   return {
//     roomType: "One-Bedroom Villa",
//     viewType: "Standard View",
//     resort: resort,
//     startDate: "2020-10-13",
//     endDate: "2020-10-18",
//     points: 125,
//   };
// });
