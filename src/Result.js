import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Result = ({ roomType, resort, startDate, endDate, points }) => {
  return (
    <ResultContainer>
      <ResortDescription>
        <Icon resort={resort}>{abbreviationFor[resort] || "N/A"}</Icon>
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
  align-items: center;
`;

const Icon = styled.div`
  border-radius: 50%;
  background-color: ${props => backgroundColorFor[props.resort] || "black"};
  color: ${props => colorFor[props.resort] || "white"};
  width: 3rem;
  height: 3rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
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
  font-weight: 300;
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

const abbreviationFor = {
  "Aulani, Disney Vacation Club Villas, Ko Olina, Hawaii": "AUL",
  "Bay Lake Tower at Disney's Contemporary Resort": "BLT",
  "Boulder Ridge Villas at Disney's Wilderness Lodge": "BRV",
  "Copper Creek Villas & Cabins at Disney's Wilderness Lodge": "CCR",
  "Disney's Animal Kingdom Villas": "AKV",
  "Disney's Beach Club Villas": "BCV",
  "Disney's BoardWalk Villas": "BWV",
  "Disney's Hilton Head Island Resort": "HHI",
  "Disney's Old Key West Resort": "OKW",
  "Disney's Polynesian Villas & Bungalows": "POLY",
  "Disney's Riviera Resort": "RR",
  "Disney's Saratoga Springs Resort & Spa": "SSR",
  "Disney's Vero Beach Resort": "VBR",
  "The Villas at Disney's Grand Californian Hotel & Spa": "GCAL",
  "The Villas at Disney's Grand Floridian Resort & Spa": "VGF"
};

const backgroundColorFor = {
  "Aulani, Disney Vacation Club Villas, Ko Olina, Hawaii": "hsl(36, 52%, 24%)",
  "Bay Lake Tower at Disney's Contemporary Resort": "hsl(41, 35%, 81%)",
  "Boulder Ridge Villas at Disney's Wilderness Lodge": "black",
  "Copper Creek Villas & Cabins at Disney's Wilderness Lodge": "black",
  "Disney's Animal Kingdom Villas": "black",
  "Disney's Beach Club Villas": "black",
  "Disney's BoardWalk Villas": "black",
  "Disney's Hilton Head Island Resort": "black",
  "Disney's Old Key West Resort": "black",
  "Disney's Polynesian Villas & Bungalows": "black",
  "Disney's Riviera Resort": "black",
  "Disney's Saratoga Springs Resort & Spa": "black",
  "Disney's Vero Beach Resort": "black",
  "The Villas at Disney's Grand Californian Hotel & Spa": "black",
  "The Villas at Disney's Grand Floridian Resort & Spa": "hsl(335, 76%, 41%)"
};

const colorFor = {
  "Bay Lake Tower at Disney's Contemporary Resort": "hsl(206, 91%, 45%)",
  "Boulder Ridge Villas at Disney's Wilderness Lodge": "#282c34",
  "Copper Creek Villas & Cabins at Disney's Wilderness Lodge": "#282c34",
  "Disney's Animal Kingdom Villas": "#282c34",
  "Disney's Beach Club Villas": "#282c34",
  "Disney's BoardWalk Villas": "#282c34",
  "Disney's Hilton Head Island Resort": "#282c34",
  "Disney's Old Key West Resort": "#282c34",
  "Disney's Polynesian Villas & Bungalows": "#282c34",
  "Disney's Riviera Resort": "#282c34",
  "Disney's Saratoga Springs Resort & Spa": "#282c34",
  "Disney's Vero Beach Resort": "#282c34",
  "The Villas at Disney's Grand Californian Hotel & Spa": "#282c34"
};
