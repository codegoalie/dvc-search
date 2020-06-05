import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import dateFormat from "dateformat";

import ListItem from "./ListItem";

const mDateFormat = "UTC:ddd m/d";

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
        {dateFormat(startDate, mDateFormat)} &mdash;{" "}
        {dateFormat(endDate, mDateFormat)}
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

const ResultContainer = styled(ListItem)`
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

const Icon = styled.div.attrs(props => {
  const background = backgroundColorFor[props.resort] || "black";
  const color = colorFor[props.resort] || "white";

  return {
    background,
    color,
    border: color !== "white" ? color : background
  };
})`
  border-radius: 50%;
  background: ${props => props.background};
  color: ${props => props.color};
  border: 2px solid ${props => props.border};
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
  "Copper Creek Villas & Cabins at Disney's Wilderness Lodge": "CCVC",
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
  "Aulani, Disney Vacation Club Villas, Ko Olina, Hawaii":
    "linear-gradient(160deg, hsl(36, 52%, 24%) 60%, hsl(36, 52%, 14%))",
  "Bay Lake Tower at Disney's Contemporary Resort":
    "linear-gradient(160deg, hsl(41, 35%, 81%) 60%, hsl(41, 35%, 71%))",
  "Boulder Ridge Villas at Disney's Wilderness Lodge":
    "linear-gradient(160deg, hsl(168, 33%, 58%) 60%, hsl(168, 33%, 48%))",
  "Copper Creek Villas & Cabins at Disney's Wilderness Lodge":
    "linear-gradient(160deg, hsl(0, 0%, 96%) 60%, hsl(0, 0%, 86%))",
  "Disney's Animal Kingdom Villas":
    "linear-gradient(160deg, hsl(36, 52%, 24%) 60%, hsl(36, 52%, 14%))",
  "Disney's Beach Club Villas":
    "linear-gradient(160deg, hsl(164, 49%, 80%) 60%, hsl(164, 49%, 70%))",
  "Disney's BoardWalk Villas":
    "linear-gradient(160deg, hsl(255, 100%,100%) 60%, hsl(255, 100%,90%))",
  "Disney's Hilton Head Island Resort":
    "linear-gradient(160deg, hsl(137, 20%, 35%) 60%, hsl(137, 20%, 25%))",
  "Disney's Old Key West Resort":
    "linear-gradient(160deg, hsl(36, 37%, 84%) 60%, hsl(36, 37%, 74%))",
  "Disney's Polynesian Villas & Bungalows":
    "linear-gradient(160deg, hsl(7, 46%, 41%) 60%, hsl(7, 46%, 31%))",
  "Disney's Riviera Resort":
    "linear-gradient(hsl(222, 39%, 14%), hsl(222, 39%, 45%))",
  "Disney's Saratoga Springs Resort & Spa":
    "linear-gradient(160deg, hsl(141, 43%, 82%) 60%, hsl(141, 43%, 72%))",
  "Disney's Vero Beach Resort":
    "linear-gradient(160deg, hsl(37, 34%, 38%) 60%, hsl(37, 34%, 28%))",
  "The Villas at Disney's Grand Californian Hotel & Spa":
    "linear-gradient(hsl(39, 79%, 80%), hsl(214, 44%, 63%))",
  "The Villas at Disney's Grand Floridian Resort & Spa":
    "linear-gradient(160deg, hsl(335, 76%, 41%) 60%, hsl(335, 76%, 31%))"
};

const colorFor = {
  "Bay Lake Tower at Disney's Contemporary Resort": "hsl(206, 91%, 45%)",
  "Boulder Ridge Villas at Disney's Wilderness Lodge": "hsl(36, 52%, 24%)",
  "Copper Creek Villas & Cabins at Disney's Wilderness Lodge":
    "hsl(16, 55%, 39%)",
  "Disney's Animal Kingdom Villas": "hsl(34, 95%, 64%)",
  "Disney's Beach Club Villas": "hsl(353, 81%, 53%)",
  "Disney's BoardWalk Villas": "hsl(223, 49%, 34%)",
  "Disney's Hilton Head Island Resort": "hsl(41, 70%, 61%)",
  "Disney's Old Key West Resort": "hsl(215, 33%, 22%)",
  "Disney's Polynesian Villas & Bungalows": "hsl(89, 66%, 86%)",
  "Disney's Riviera Resort": "hsl(54, 89%, 69%)",
  "Disney's Saratoga Springs Resort & Spa": "hsl(38, 23%, 46%)",
  "Disney's Vero Beach Resort": "hsl(155, 33%, 61%)",
  "The Villas at Disney's Grand Californian Hotel & Spa": "hsl(161, 15%, 29%)"
};
