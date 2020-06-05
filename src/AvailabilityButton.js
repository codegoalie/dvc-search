import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import dateFormat from "dateformat";

const baseURL = "https://disneyvacationclub.disney.go.com/booking/search/";
// const signInBaseURL = "https://disneyvacationclub.disney.go.com/sign-in/?appRedirect=/booking/search/";
const urlDateFormat = "UTC:mm/dd/yyyy";

const AvailabilityButton = props => {
  return (
    <Button
      target="_blank"
      rel="noopener norefer"
      href={availabilityURL(props)}
    >
      Check availability &rarr;
    </Button>
  );
};

AvailabilityButton.propTypes = {
  checkInDate: PropTypes.string.isRequired,
  checkOutDate: PropTypes.string.isRequired,
  resort: PropTypes.string.isRequired,
  roomType: PropTypes.string.isRequired
};

export default AvailabilityButton;

const Button = styled.a`
  font-size: 1rem;
  text-align: center;
  float: right;
  background: darkslateblue;
  color: floralwhite;
  border-radius: 0.5rem;
  height: 2rem;
  margin-top: 0.5rem;
  width: 175px;
  padding: 0.35rem 0.25rem 0.25rem;
  border: none;
  box-shadow: 2px 1px 2px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.25s ease-in-out;
  text-decoration: none;

  &:hover {
    box-shadow: 2px 1px 2px rgba(0, 0, 0, 0.5);
    color: khaki;
  }
`;

const availabilityURL = p => {
  const params = [
    "pagePath=",
    `checkInDate=${formatURLDate(p.checkInDate)}`,
    `checkOutDate=${formatURLDate(p.checkOutDate)}`,
    `resorts=${dvcAbbrev[p.resort]}`,
    `roomType=${dvcRoomType[p.roomType]}`,
    "accessible=off"
  ].join("&");
  return `${baseURL}?${params}`;
};

const formatURLDate = date =>
  encodeURIComponent(dateFormat(date, urlDateFormat));

const dvcAbbrev = {
  "Aulani, Disney Vacation Club Villas, Ko Olina, Hawaii": "AULV",
  "Bay Lake Tower at Disney's Contemporary Resort": "BLT",
  "Boulder Ridge Villas at Disney's Wilderness Lodge": "VWL",
  "Copper Creek Villas & Cabins at Disney's Wilderness Lodge": "WCC",
  "Disney's Animal Kingdom Villas": "AKV,AKV2",
  "Disney's Beach Club Villas": "BCV",
  "Disney's BoardWalk Villas": "BWALK",
  "Disney's Hilton Head Island Resort": "HILTN",
  "Disney's Old Key West Resort": "CLUB",
  "Disney's Polynesian Villas & Bungalows": "POLYV",
  "Disney's Riviera Resort": "RVA",
  "Disney's Saratoga Springs Resort & Spa": "SSR",
  "Disney's Vero Beach Resort": "VERO",
  "The Villas at Disney's Grand Californian Hotel & Spa": "GCAL",
  "The Villas at Disney's Grand Floridian Resort & Spa": "VGF"
};

const dvcRoomType = {
  "Deluxe Inn Room Ocean View": "deluxe-studio",
  "Deluxe Inn Room Standard View": "deluxe-studio",
  "Deluxe Studio": "deluxe-studio",
  "Hotel Room": "deluxe-studio",
  "One-Bedroom Villa": "one-bedroom",
  "Three-Bedroom Beach Cottage": "three-bedroom",
  "Three-Bedroom Grand Villa": "three-bedroom",
  "Three-Bedroom Treehouse Villa": "three-bedroom",
  "Tower Studio": "deluxe-studio",
  "Two-Bedroom Bungalow": "two-bedroom",
  "Two-Bedroom Cabin": "two-bedroom",
  "Two-Bedroom Villa": "two-bedroom"
};
