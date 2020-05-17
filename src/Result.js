import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Result = ({
  roomType,
  resort,
  abbreviation,
  startDate,
  endDate,
  points
}) => {
  return (
    <ResultContainer>
      <ResortDescription>
        <Icon>{abbreviation || "N/A"}</Icon>
        <RoomDescription>
          <RoomType>{roomType}</RoomType>
          <ResortName>{resort}</ResortName>
        </RoomDescription>
      </ResortDescription>
      <Dates>
        {startDate} &mdash; {endDate}
      </Dates>
      <Points>{points} points</Points>
    </ResultContainer>
  );
};

Result.propTypes = {
  roomType: PropTypes.string.isRequired,
  resort: PropTypes.string.isRequired,
  abbreviation: PropTypes.string,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired
};

export default Result;

const ResultContainer = styled.div`
  background: white;
  border-radius: 0.25rem;
  padding: 1rem;
  box-shadow: 4px 2px 14px rgba(255, 255, 255, 0.25);
  color: black;
  text-align: left;

  display: grid;
  grid-template-columns: 5fr 2fr 1fr;
  column-gap: 1rem;

  justify-content: space-between;
  font-size: 1.5rem;
  & + & {
    margin-top: 1.5rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const ResortDescription = styled.div`
  display: flex;
`;

const Icon = styled.div`
  display: inline-block;
  border-radius: 50%;
  background: black;
  color: white;
  width: 3rem;
  height: 3rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  flex-shrink: 0;
`;

const RoomDescription = styled.div`
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin-left: 1rem;
  }
`;

const RoomType = styled.div`
  display: inline-block;
  font-weight: bold;
`;

const ResortName = styled.div`
  font-size: 1.25rem;
`;

const Dates = styled.div`
  @media (max-width: 768px) {
    margin: 1rem 0;
    text-align: right;
  }
`;

const Points = styled.div`
  @media (max-width: 768px) {
    text-align: right;
    font-weight: bold;
  }
`;
