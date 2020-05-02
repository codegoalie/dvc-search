import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Result = ({ roomType, resort, startDate, endDate, points }) => {
  return (
    <ResultContainer>
      <ResortDescription>
        <Icon>GF</Icon>
        <RoomDescription>
          <RoomType>{roomType}</RoomType>
          <ResortName>{resortNames[resort]}</ResortName>
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
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  points: PropTypes.string.isRequired
};

export default Result;

const ResultContainer = styled.div`
  background: white;
  border-radius: 0.25rem;
  padding: 1rem;
  box-shadow: 4px 2px 14px rgba(255, 255, 255, 0.25);
  color: black;
  text-align: left;
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  & + & {
    margin-top: 1.5rem;
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
  width: 2rem;
  height: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
`;

const RoomDescription = styled.div`
  margin-left: 2rem;
`;

const RoomType = styled.div`
  display: inline-block;
  font-weight: bold;
`;

const ResortName = styled.div`
  font-size: 1.25rem;
`;

const Dates = styled.div``;

const Points = styled.div``;

const resortNames = {
  VGF: "The Villas at Disney's Grand Floridian Resort & Spa",
  BLT: "Bay Lake Tower at Disney's Contemporary Resort"
};