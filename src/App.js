/* global process */
import React, { useState } from "react"
import styled from "styled-components"
import { format } from "date-fns"

import Input from "./Input"
import Result from "./Result"
import DatePicker from "./DatePicker"
import Error from "./Error"
import Label from "./Label"
import InputWrapper from "./InputWrapper"
import logo from "./logo.png"
import Loading from "./Loading"
import NoResults from "./NoResults"
import AppFooter from "./AppFooter"
import ExtendToggle from "./ExtendToggle"

const API_FMT = "yyyy-MM-dd"
const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://utilidoor-wsrcsyye3a-uc.a.run.app"
    : "http://localhost:3001"

function App() {
  const [points, setPoints] = useState()
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [results, setResults] = useState([])
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [extend, setExtend] = useState(true)
  let fetchDelayTimeout

  const toggleExtend = () => {
    setExtend(!extend)
  }

  const resultsItems = results
    .sort((a, b) =>
      extend ? b.extendedPoints - a.extendedPoints : b.points - a.points,
    )
    .map(result => {
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
          endDate={extend ? result.endDate : endDate}
          points={extend ? result.extendedPoints : result.points}
          goalEndDate={endDate}
        />
      )
    })

  const fetchResults = (points, startDate, endDate) => {
    if (!points || points < 10 || !startDate || !endDate) {
      return
    }
    clearTimeout(fetchDelayTimeout)
    fetchDelayTimeout = setTimeout(() => {
      setError("")
      setLoading(true)
      setLoaded(false)
      //setActiveResult(null);
      let url = `${BASE_URL}/v1/search?points=${points}&startDate=${format(
        startDate,
        API_FMT,
      )}&endDate=${format(endDate, API_FMT)}`

      fetch(url)
        .then(res => res.json())
        .then(
          json => {
            setResults(json)
            setLoading(false)
            setLoaded(true)
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          () => {
            setError(
              "Failed to fetch search results. Please try again or report this error to chris@lineleader.io",
            )
            setLoading(false)
            setLoaded(false)
          },
        )
    }, 250)
  }

  const onPointsChange = e => {
    setPoints(e.target.value)
    fetchResults(e.target.value, startDate, endDate)
  }

  const onChangeEndDate = newEndDate => {
    setEndDate(newEndDate)
    fetchResults(points, startDate, newEndDate)
  }

  const onChangeStartDate = newStartDate => {
    setStartDate(newStartDate)
    fetchResults(points, newStartDate, endDate)
  }

  return (
    <div className="App">
      <AppHeader>
        <a href="https://lineleader.io">
          <img src={logo} alt="LineLeader logo" />
        </a>
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
        <DateWrapper>
          <DatePicker
            startDate={startDate}
            setStartDate={onChangeStartDate}
            endDate={endDate}
            setEndDate={onChangeEndDate}
          />
          <ExtendToggle active={extend} handleToggle={toggleExtend} />
        </DateWrapper>
      </AppInputsContainer>

      <Results>
        {error && <Error msg={error} />}
        {loading && <Loading />}
        {results.length > 0 ? resultsItems : loaded && <NoResults />}
      </Results>

      <AppFooter />
    </div>
  )
}

export default App

const AppInputsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

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
`

const Results = styled.section`
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`

const PointsInput = styled(Input)`
  width: 15rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const DateWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    .styled-timer {
      margin-top: 2.4rem;
    }
  }
`
